export const electricityContractForm = [
  makeTitle("购售电合同"),
  {
    formType: "input",
    label: "购售电合同年限",
    required: true,
    name: "contractPeriod",
    isLink: true,
    readonly: true,
    realValue: "",
    click() {
      this.inlineForm[0].show = true;
    },
    backfill(data) {
      this.value = data[this.name]?.replace(" 00:00:00", "");
      this.realValue = data[this.name];
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        name: "contractPeriodPop",
        show: false,
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "date",
            columnsType: ["year"],
            confirm(date) {
              const value = date.selectedValues.join("-");
              setItem("contractPeriod", "value", value);
              setItem("contractPeriod", "realValue", value + " 00:00:00");
              setItem("contractPeriod", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    label: "购售电地址是否一致",
    name: "isConsistent",
    required: true,
    value: 1,
    ...backSelect(),
    ...makeSelect("isConsistent", [
      { text: "是", value: 1 },
      { text: "否", value: 0, disabled: true },
    ]),
  },
];

export const contractForm = [
  makeTitle("购售电合同附件"),
  {
    ...makeUpload(999, 100),
    label: "PDF附件",
    required: true,
    name: "contract",
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    }
  },
];
