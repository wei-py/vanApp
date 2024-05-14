export const settlementForm = [
  makeTitle("直营结算"),
  {
    formType: "input",
    label: "结算类型",
    value: 1,
    required: true,
    readonly: true,
    name: "settlementType",
    ...backSelect(),
    ...makeSelect("settlementType", [
      { text: "直营结算信息", value: 1 },
      { text: "供应商并网结算", value: 2 },
      { text: "供应商资料结算", value: 3 },
    ]),
    onMounted() {
      this.click = () => {}
      this.isLink = false
    }
  },
  {
    formType: "input",
    label: "资方结算总金额",
    value: "",
    required: true,
    type: "digit",
    placeholder: "请输入",
    name: "settlementAmount",
    ...makeUnit("元"),
  },
];
