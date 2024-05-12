export const settlementForm = [
  makeTitle('直营结算'),
  {
    formType: "input",
    label: "结算类型",
    value: 1,
    required: true,
    placeholder: "请输入",
    name: "settlementType",
    dictionary: {
      1: "直营结算信息",
      2: "供应商并网结算",
      3: "供应商资料结算",
    },
  },
  {
    formType: "input",
    label: "资方结算总金额",
    value: "",
    required: true,
    type: "digit",
    placeholder: "请输入",
    name: "settlementAmount",
    ...makeUnit('元')
  },
];