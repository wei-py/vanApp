export const zujian = [
  makeTitle("组件"),
  {
    formType: "input",
    label: "组件编号",
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
      this.value = result.value;
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
    formType: "input",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
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
    ],
  },
  {
    customSlot: "table",
    name: "table-zujian",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "ZUJIAN.checkDeviceValidRes.deviceVos") || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid", 'deviceType']);
      });
    },
    getParam(param) {
      delete param["deviceNumber-zujian"];
      delete param.ssgs;
      delete param["ysgs-zujian"];
      param.deviceType = "ZUJIAN";
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      param.devices = devices;
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
    label: "实收块数",
    name: "ssgs",
    value: "0",
    ...makeUnit("块"),
    backfill() {
      watchItem("table-nbq", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs-nbq",
    value: "",
    ...makeUnit("块"),
    backfill(data) {
      const designDevice = lo.get(data, "NBQ.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "input",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
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
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid", 'deviceType']);
      });
    },
    getParam(param) {
      delete param["deviceNumber-cjq"];
      delete param.ssgs;
      delete param["ysgs-cjq"];
      param.deviceType = "CJQ";
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      param.devices = devices;
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
    ...backSelect(),
    ...makeSelect("cjqModel", [
      { text: "光精灵Mini", value: "光精灵Mini" },
      { text: "光精灵Pro", value: "光精灵Pro" },
    ]),
  },
  {
    formType: "input",
    label: "多台逆变器是否共用采集器",
    name: "cjqShare",
    value: "",
    ...backSelect(),
    ...makeSelect("cjqShare", [
      { text: "否", value: 0 },
      { text: "是", value: 1 },
    ]),
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "0",
    ...makeUnit("块"),
    backfill() {
      watchItem("table-cjq", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs",
    value: "",
    ...makeUnit("块"),
    backfill(data) {
      const designDevice = lo.get(data, "CJQ.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "input",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
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
    ],
  },
  {
    customSlot: "table",
    name: "table-cjq",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "CJQ.checkDeviceValidRes.deviceVos", []) || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid"]);
      });
    },
    getParam(param) {
      delete param["deviceNumber-cjq"];
      delete param.ssgs;
      delete param["ysgs-cjq"];
      param.deviceType = "CJQ";
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      param.devices = devices;
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
    label: "实收块数",
    name: "ssgs",
    value: "0",
    ...makeUnit("块"),
    backfill() {
      watchItem("table-pdx", (v) => {
        this.value = v.length;
      });
    },
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs",
    value: "",
    ...makeUnit("块"),
    backfill(data) {
      const designDevice = lo.get(data, "CJQ.designDevice");
      this.value = designDevice.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
  {
    formType: "input",
    inputAlign: "center",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "添加",
        className: "bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
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
    ],
  },
  {
    customSlot: "table",
    name: "table-pdx",
    value: [],
    backfill(data) {
      const tableData = lo.get(data, "PDX.checkDeviceValidRes.deviceVos", []) || [];
      this.value = tableData.map((n) => {
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid"]);
      });
    },
    getParam(param) {
      delete param["deviceNumber-pdx"];
      delete param.ssgs;
      delete param["ysgs-pdx"];
      param.deviceType = "PDX";
      const devices = this.value.map((v) => {
        v.createTime = dayjs().format("YYYY-MM-DD HH:MM:ss");
        v.orderId = getQuery().orderId;
        // delete v._X_ROW_KEY;
        return v;
      });
      param.devices = devices;
    },
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceNumber == row.deviceNumber);
      this.value.splice(index, 1);
    },
  },
];
