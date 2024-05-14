export const gridConnectedAccount = [
  makeTitle("并网结算信息"),
  {
    formType: 'input',
    label: '结算类型',
    value: 2,
    required: true,
    placeholder: '请输入',
    readonly: true,
    name: 'settlementType',
    ...backSelect(),
    ...makeSelect('settlementType', [
        { text: "资方结算", value: 1 },
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
    label: "供应商可结算金额",
    value: "",
    ...makeUnit("元"),
    type: 'digit',
    required: true,
    placeholder: "请输入",
    name: "settlementAmount",
  },
  {
    formType: "input",
    label: "供应商质保金金额",
    value: "",
    required: true,
    ...makeUnit("元"),
    type: 'digit',
    placeholder: "请输入",
    name: "recognizance",
  },
];

export const receiptForm = [
  makeTitle("并网结算发票"),
  {
    ...makeUpload(999, 100),
    formType: "input",
    label: "PDF或图片附件",
    required: true,
    name: "receipt",
    backfill(data) { 
      data.receipt = JSON.parse(data.receipt)
      lo.bind(makeImgs, this)(data)
      // this.inlineForm[0].value = lo
    },
    getParam(params) {
      params.receipt = params.receipt.map(n => getUploadUrl(n))
      params.receipt = JSON.stringify(params.receipt)
    }
  },
];
