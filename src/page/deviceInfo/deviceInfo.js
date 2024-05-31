export const zujian = [
  makeTitle("组件"),
  {
    formType: "input",
    label: "组件编号",
    placeholder: "检查手机定位权限是否开启",
    value: "",
    name: "deviceNumber-zujian",
    rightIcon: "scan",
    clickRightIcon() {
      openCode((deviceNumber) => {
        setItem("table-zujian", (v) => {
          if (v.value.length == getItem("ysgs-zujian", "value")) {
            showFailToast("超出应收个数了");
          } else {
            v.value.unshift({
              deviceType: "ZUJIAN",
              deviceNumber,
              orderId: getQuery().orderId,
              createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
            });
          }

          setItem("deviceNumber-zujian", "value", "");
        });
      });
    },
  },
  {
    formType: "input",
    label: "设计容量",
    name: "quantity",
    value: "",
    readonly: true,
    ...makeUnit("W"),
    backfill(data) {
      const designDevice = lo.get(data, "ZUJIAN.designDevice");
      const value = designDevice.reduce((pre, cur) => pre + cur.quantity * cur.deviceSpec, 0);
      const result = unitConver(value, 0, ["W", "kW", "MW"]);
      this.value = result.realValue;
      this.makeUnit(result.unit);
    },
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "0",
    readonly: true,
    ...makeUnit("块"),
    backfill() {
      watchItem("table-zujian", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs-zujian",
    value: "",
    readonly: true,
    ...makeUnit("块"),
    backfill(data) {
      const designDevice = lo.get(data, "ZUJIAN.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "cell",
    value: "若非扫码输入，需点击“添加”按钮",
    valueClass: "text-red !text-center",
  },
  {
    formType: "input",
    inputAlign: "left",
    class: "!w-[60%] mx-auto",
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[80px] rounded-2xl van-haptics-feedback",
        click() {
          const deviceNumber = getItem("deviceNumber-zujian", "value");
          if (!deviceNumber.length) {
            showFailToast("请先输入组件编号");
            return;
          }
          setItem("table-zujian", (v) => {
            if (v.value.length == getItem("ysgs-zujian", "value")) {
              showFailToast("超出应收个数了");
            } else {
              v.value.unshift({
                deviceType: "ZUJIAN",
                deviceNumber,
                orderId: getQuery().orderId,
                createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
              });
            }

            setItem("deviceNumber-zujian", "value", "");
          });
        },
      },
      {
        slot: "input",
        formType: "button",
        text: "去重",
        className: "bg-[#ffab30] text-white h-8 !w-[80px] rounded-2xl van-haptics-feedback",
      },
    ],
  },
  {
    customSlot: "table",
    name: "table-zujian",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "ZUJIAN.checkDeviceValidRes.deviceVos") || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid", "deviceType"]);
      });
    },
    getParam(param) {
      delete param["deviceNumber-zujian"];
      delete param.ssgs;
      delete param["ysgs-zujian"];
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      const flag = useFlag();
      if (flag.deviceInfoType == "ZUJIAN") {
        param.deviceType = "ZUJIAN";
        param.devices = devices;
      }
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceNumber == row.deviceNumber);
      this.value.splice(index, 1);
    },
  },
];

export const nbq = [
  makeTitle("逆变器"),
  {
    formType: "input",
    label: "逆变器编号",
    value: "",
    name: "deviceNumber-nbq",
    rightIcon: "scan",
    placeholder: "检查手机定位权限是否开启",
    clickRightIcon() {
      openCode((deviceNumber) => {
        setItem("table-nbq", (v) => {
          if (v.value.length == getItem("ysgs-nbq", "value")) {
            showFailToast("超出应收个数了");
          } else {
            v.value.unshift({
              deviceType: "NBQ",
              deviceNumber,
              orderId: getQuery().orderId,
              createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
            });
          }

          setItem("deviceNumber-nbq", "value", "");
        });
      });
    },
  },
  {
    formType: "input",
    label: "实收个数",
    name: "ssgs",
    value: "0",
    ...makeUnit("个"),
    backfill() {
      watchItem("table-nbq", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收个数",
    name: "ysgs-nbq",
    value: "",
    ...makeUnit("个"),
    backfill(data) {
      const designDevice = lo.get(data, "NBQ.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "cell",
    value: "若非扫码输入，需点击“添加”按钮",
    valueClass: "text-red !text-center",
  },
  {
    formType: "input",
    inputAlign: "left",
    class: "!w-[60%] mx-auto",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "去重",
        className: "bg-[#ffab30] text-white h-8 !w-[80px] rounded-2xl van-haptics-feedback",
      },
      {
        slot: "extra",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 !w-[80px] rounded-2xl van-haptics-feedback",
        click() {
          const deviceNumber = getItem("deviceNumber-nbq", "value");
          if (!deviceNumber.length) {
            showFailToast("请先输入组件编号");
            return;
          }
          setItem("table-nbq", (v) => {
            if (v.value.length == getItem("ysgs-nbq", "value")) {
              showFailToast("超出应收个数了");
            } else {
              v.value.unshift({
                deviceType: "NBQ",
                deviceNumber,
                orderId: getQuery().orderId,
                createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
              });
            }

            setItem("deviceNumber-nbq", "value", "");
          });
        },
      },
    ],
  },
  {
    customSlot: "table",
    name: "table-nbq",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "NBQ.checkDeviceValidRes.deviceVos", []) || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid", "deviceType"]);
      });
    },
    getParam(param) {
      delete param["deviceNumber-nbq"];
      delete param.ssgs;
      delete param["ysgs-nbq"];
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      const flag = useFlag();
      if (flag.deviceInfoType == "NBQ") {
        param.deviceType = "NBQ";
        param.devices = devices;
      }
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceNumber == row.deviceNumber);
      this.value.splice(index, 1);
    },
  },
];

export const cjq = [
  makeTitle("采集器"),
  {
    formType: "input",
    label: "采集器编号",
    value: "",
    name: "deviceNumber-cjq",
    rightIcon: "scan",
    placeholder: "检查手机定位权限是否开启",
    clickRightIcon() {
      openCode((deviceNumber) => {
        setItem("table-cjq", (v) => {
          if (v.value.length == getItem("ysgs-cjq", "value")) {
            showFailToast("超出应收个数了");
          } else {
            v.value.unshift({
              deviceType: "CJQ",
              deviceNumber,
              orderId: getQuery().orderId,
              createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
            });
          }

          setItem("deviceNumber-cjq", "value", "");
        });
      });
    },
  },
  {
    formType: "input",
    label: "采集器型号",
    name: "cjqModel",
    value: "",
    required: true,
    ...backSelect(),
    ...makeSelect("cjqModel", [
      { text: "光精灵Mini", value: "光精灵Mini" },
      { text: "光精灵Pro", value: "光精灵Pro" },
    ]),
    backfill(data) {
      this.value = data.CJQ.cjqModel;
      this.realValue = data.CJQ.cjqModel;
    },
  },
  {
    formType: "input",
    label: "多台逆变器是否共用采集器",
    name: "cjqShare",
    realValue: "",
    value: "",
    required: true,
    ...backSelect(),
    ...makeSelect("cjqShare", [
      { text: "否", value: 0 },
      { text: "是", value: 1 },
    ]),
    backfill(data) {
      this.realValue = data.CJQ.cjqShare;
      const text = this.inlineForm[0].inlineForm[0].columns.find((n) => n.value == this.realValue)?.text || this.value;
      this.value = text;
    },
    getParam(param) {
      param[this.name] = this.realValue
    },
  },
  {
    formType: "input",
    label: "实收个数",
    name: "ssgs",
    value: "0",
    ...makeUnit("个"),
    backfill() {
      watchItem("table-cjq", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收个数",
    name: "ysgs-cjq",
    value: "",
    ...makeUnit("个"),
    backfill(data) {
      const designDevice = lo.get(data, "CJQ.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "cell",
    value: "若非扫码输入，需点击“添加”按钮",
    valueClass: "text-red !text-center",
  },
  {
    formType: "input",
    inputAlign: "left",
    class: "!w-[60%] mx-auto",
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[80px] rounded-2xl van-haptics-feedback",
        click() {
          const deviceNumber = getItem("deviceNumber-cjq", "value");
          if (!deviceNumber.length) {
            showFailToast("请先输入组件编号");
            return;
          }
          setItem("table-cjq", (v) => {
            if (v.value.length == getItem("ysgs-cjq", "value")) {
              showFailToast("超出应收个数了");
            } else {
              v.value.unshift({
                deviceType: "CJQ",
                deviceNumber,
                orderId: getQuery().orderId,
                createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
              });
            }

            setItem("deviceNumber-cjq", "value", "");
          });
        },
      },
      {
        slot: "input",
        formType: "button",
        text: "去重",
        className: "bg-[#ffab30] text-white h-8 !w-[80px] rounded-2xl van-haptics-feedback",
      },
    ],
  },
  {
    customSlot: "table",
    name: "table-cjq",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "CJQ.checkDeviceValidRes.deviceVos", []) || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid", "deviceType"]);
      });
    },
    getParam(param) {
      delete param["deviceNumber-cjq"];
      delete param.ssgs;
      delete param["ysgs-cjq"];
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      const flag = useFlag();
      if (flag.deviceInfoType == "CJQ") {
        param.deviceType = "CJQ";
        param.devices = devices;
      }
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceNumber == row.deviceNumber);
      this.value.splice(index, 1);
    },
  },
];

export const pdx = [
  makeTitle("配电箱"),
  {
    formType: "input",
    label: "配电箱编号",
    value: "",
    name: "deviceNumber-pdx",
    rightIcon: "scan",
    placeholder: "检查手机定位权限是否开启",
    clickRightIcon() {
      openCode((deviceNumber) => {
        setItem("table-pdx", (v) => {
          if (v.value.length == getItem("ysgs-pdx", "value")) {
            showFailToast("超出应收个数了");
          } else {
            v.value.unshift({
              deviceType: "PDX",
              deviceNumber,
              orderId: getQuery().orderId,
              createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
            });
          }

          setItem("deviceNumber-pdx", "value", "");
        });
      });
    },
  },
  {
    formType: "input",
    label: "实收个数",
    name: "ssgs",
    value: "0",
    ...makeUnit("个"),
    backfill() {
      watchItem("table-pdx", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收个数",
    name: "ysgs-pdx",
    value: "",
    ...makeUnit("个"),
    backfill(data) {
      const designDevice = lo.get(data, "CJQ.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "cell",
    value: "若非扫码输入，需点击“添加”按钮",
    valueClass: "text-red !text-center",
  },
  {
    formType: "input",
    inputAlign: "left",
    class: "!w-[60%] mx-auto",
    inlineForm: [
      {
        slot: "button",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[80px] rounded-2xl van-haptics-feedback",
        click() {
          const deviceNumber = getItem("deviceNumber-pdx", "value");
          if (!deviceNumber.length) {
            showFailToast("请先输入组件编号");
            return;
          }
          setItem("table-pdx", (v) => {
            if (v.value.length == getItem("ysgs-pdx", "value")) {
              showFailToast("超出应收个数了");
            } else {
              v.value.unshift({
                deviceType: "PDX",
                deviceNumber,
                orderId: getQuery().orderId,
                createTime: dayjs().format("YYYY-MM-DD HH:MM:ss"),
              });
            }

            setItem("deviceNumber-pdx", "value", "");
          });
        },
      },
      {
        slot: "input",
        formType: "button",
        text: "去重",
        className: "bg-[#ffab30] text-white h-8 !w-[80px] rounded-2xl van-haptics-feedback",
      },
    ],
  },
  {
    customSlot: "table",
    name: "table-pdx",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "PDX.checkDeviceValidRes.deviceVos", []) || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid", "deviceType"]);
      });
    },
    getParam(param) {
      delete param["deviceNumber-pdx"];
      delete param.ssgs;
      delete param["ysgs-pdx"];
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      const flag = useFlag();
      if (flag.deviceInfoType == "PDX") {
        param.deviceType = "PDX";
        param.devices = devices;
      }
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceNumber == row.deviceNumber);
      this.value.splice(index, 1);
    },
  },
];

export const zldl = [
  makeTitle("直流电缆"),
  {
    formType: "input",
    name: "manufacturerZLDL",
    label: "直流电缆厂家名称",
    labelClass: "flex-none !w-[40%]",
    placeholder: "请选择或直接输入",
    required: true,
    getParam(param) {
      if (!lo.isArray(param.devices)) {
        param.devices = [{}];
      }
      const flag = useFlag();
      if (flag.deviceInfoType == "ZLDL") {
        param.devices[0].manufacturer = param["manufacturerZLDL"];
        param.devices[0].deviceType = "ZLDL";
        param.devices[0].specificationsModel = param["specificationsModelZLDL"];
        param.devices[0].orderId = getQuery().orderId;
      }
    },
    async backfill(bData) {
      const { data } = await http.post("sto/device-args/list?option=manufacturer", { deviceType: "ZLDL" });
      const actions = data.map((n) => ({ ...n, text: n.manufacturer, value: n.manufacturer }));
      this.inlineForm[0].value = bData.manufacturer;
      this.updateValue = (value) => {
        const filterActions = actions.filter((n) => n.value.includes(value));
        this.inlineForm[0].show = new Boolean(filterActions.length || value.length);
        this.inlineForm[0].actions = filterActions;
      };

      const bValue = lo.get(bData, "ZLDL.checkDeviceValidRes.deviceVos[0].manufacturer", "");
      this.value = bValue;
    },
    inlineForm: [
      {
        slot: "button",
        name: "manufacturerZLDLRightIcon",
        formType: "popover",
        show: false,
        placement: "bottom-end",
        actions: [],
        style: { width: "250px", height: "40vh" },
        select(action) {
          setItem("manufacturerZLDL", "value", action.value);
        },
      },
    ],
  },
  {
    ...backSelect(),
    ...makeSelect("specificationsModelZLDL", [], "dynamic"),
    formType: "input",
    label: "直流电缆型号",
    placeholder: "请选择",
    name: "specificationsModelZLDL",
    required: true,
    async backfill(bData) {
      const { data } = await http.post("sto/device-args/list?option=specificationsModel", { deviceType: "ZLDL" });
      const columns = data.map((n) => {
        return {
          text: n.specificationsModel,
          value: n.specificationsModel,
        };
      });
      this.makeSelect(bData.specificationsModel, columns);

      const bValue = lo.get(bData, "ZLDL.checkDeviceValidRes.deviceVos[0].specificationsModel", "");
      this.value = bValue;
      this.realValue = bValue;
    },
  },
];

export const zhijia = [
  makeTitle("支架"),
  {
    formType: "input",
    name: "manufacturer-zhijia",
    label: "支架厂家名称",
    placeholder: "请选择或直接输入",
    getParam(param) {
      if (!lo.isArray(param.devices)) {
        param.devices = [{}];
      }
      const flag = useFlag();
      // param.deviceType = 'ZLDL'
      if (flag.deviceInfoType == "ZHIJIA") {
        param.devices[0].manufacturer = param["manufacturer-zhijia"];
        param.devices[0].deviceType = "ZHIJIA";
        param.devices[0].specificationsModel = param["specificationsModel-zhijia"];
        param.devices[0].material = param["material-zhijia"];
        param.devices[0].orderId = getQuery().orderId;
      }
      // delete param.manufacturer;
    },
    async backfill(bData) {
      const { data } = await http.post("sto/device-args/list?option=manufacturer", { deviceType: "ZHIJIA" });
      const actions = data.map((n) => ({ ...n, text: n.manufacturer, value: n.manufacturer }));
      this.inlineForm[0].value = bData.manufacturer;
      this.updateValue = (value) => {
        const filterActions = actions.filter((n) => n.value.includes(value));
        this.inlineForm[0].show = new Boolean(filterActions.length || value.length);
        this.inlineForm[0].actions = filterActions;
      };

      const bValue = lo.get(bData, "ZHIJIA.checkDeviceValidRes.deviceVos[0].manufacturer", "");
      this.value = bValue;
    },
    inlineForm: [
      {
        slot: "button",
        name: "manufacturer-zhijiaRightIcon",
        formType: "popover",
        show: false,
        placement: "bottom-end",
        actions: [],
        style: { width: "250px", height: "40vh" },
        select(action) {
          setItem("manufacturer-zhijia", "value", action.value);
        },
      },
    ],
  },
  {
    ...backSelect(),
    ...makeSelect("specificationsModel-zhijia", [], "dynamic"),
    formType: "input",
    label: "支架型号",
    name: "specificationsModel-zhijia",
    placeholder: "请选择",
    required: true,
    async backfill(bData) {
      const { data } = await http.post("sto/device-args/list?option=specificationsModel", { deviceType: "ZHIJIA" });
      const columns = data.map((n) => {
        return {
          text: n.specificationsModel,
          value: n.specificationsModel,
        };
      });
      this.makeSelect(bData.specificationsModel, columns);

      const bValue = lo.get(bData, "ZHIJIA.checkDeviceValidRes.deviceVos[0].specificationsModel", "");
      this.value = bValue;
      this.realValue = bValue;
    },
  },
  {
    ...backSelect(),
    ...makeSelect("material-zhijia", [], "dynamic"),
    formType: "input",
    label: "支架材质",
    name: "material-zhijia",
    placeholder: "请选择",
    required: true,
    async backfill(bData) {
      const { data } = await http.post("sto/device-args/list?option=material", { deviceType: "ZHIJIA" });
      const columns = arrayToVantColumns(data);

      this.makeSelect(bData.material, columns);

      const bValue = lo.get(bData, "ZHIJIA.checkDeviceValidRes.deviceVos[0].material", "");
      this.value = bValue;
      this.realValue = bValue;
    },
  },
];
