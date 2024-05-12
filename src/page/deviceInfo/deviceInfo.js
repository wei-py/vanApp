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
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid"]);
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
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "0",
    ...makeUnit("块"),
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs",
    value: "",
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
        return lo.pick(n, ["deviceNumber", "manufacturer", "specificationsModel", "createTime", "valid"]);
      });
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
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs",
    value: "",
    ...makeUnit("块"),
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
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "0",
    ...makeUnit("块"),
  },
  {
    formType: "input",
    label: "应收块数",
    name: "ysgs",
    value: "",
    ...makeUnit("块"),
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
    remove(row) {
      const index = this.value.findIndex((n) => n.deviceNumber == row.deviceNumber);
      this.value.splice(index, 1);
    },
  },
];
