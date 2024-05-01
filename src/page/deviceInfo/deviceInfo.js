export const zujian = [
  makeTitle("组件"),
  {
    formType: "input",
    label: "组件编号",
    value: "",
    name: "deviceNumber",
    rightIcon: "scan",
  },
  {
    formType: "input",
    label: "设计容量",
    name: "quantity",
    value: "",
    ...makeUnit("kW"),
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "",
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
    value: [],
    backfill(data) {
      const tableData = data.ZUJIAN.checkDeviceValidRes.deviceVos;
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

export const nbq = [
  makeTitle("逆变器"),
  {
    formType: "input",
    label: "逆变器编号",
    value: "",
    name: "deviceNumber",
    rightIcon: "scan",
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "",
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
    value: [],
    backfill(data) {
      const tableData = data.NBQ.checkDeviceValidRes.deviceVos;
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
    name: "deviceNumber",
    rightIcon: "scan",
  },
  {
    formType: 'input',
    label: '采集器型号',
    name: 'cjqModel',
    value: '',
    ...backSelect(),
    ...makeSelect('cjqModel', [
      { text: '光精灵Mini', value: '光精灵Mini' },
      { text: '光精灵Pro', value: '光精灵Pro' }
    ]),
  },
  {
    formType: 'input',
    label: '多台逆变器是否共用采集器',
    name: 'cjqShare',
    value: '',
    ...backSelect(),
    ...makeSelect('cjqShare', [
      { text: '否', value: 0 },
      { text: '是', value: 1 }
    ]),
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "",
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
    value: [],
    backfill(data) {
      const tableData = data.CJQ.checkDeviceValidRes.deviceVos;
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
    name: "deviceNumber",
    rightIcon: "scan",
  },
  {
    formType: "input",
    label: "实收块数",
    name: "ssgs",
    value: "",
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
    value: [],
    backfill(data) {
      const tableData = data.PDX.checkDeviceValidRes.deviceVos;
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
