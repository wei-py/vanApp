export const income = [
  {
    formType: "cell",
    title: "屋顶业主收益查询",
    titleClass: "text-[22px] py-[10px] font-bold pl-[18px] ",
  },
  // makeTitle("屋顶业主收益查询"),
  {
    formType: "input",
    label: "系统编号",
    required: true,
    placeholder: "请输入系统编号",
    value: "",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    name: "orderId",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "类型",
    rightIcon: 'arrow',
    required: true,
    value: "",
    name: "type",
    ...backSelect(),
    ...makeSelect("type", [
      { text: "增量", value: "INC" },
      { text: "全量", value: "FULL" },
    ]),
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "开始时间",
    required: true,
    name: "startTime",
    isLink: true,
    readonly: true,
    rightIcon: 'arrow',
    realValue: "",
    click() {
      const flag = useFlag()
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    backfill(data) {
      this.value = data[this.name]?.replace(" 00:00:00", "");
      this.realValue = data[this.name];
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        name: "startTimePop",
        show: false,
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "date",
            confirm(date) {
              const value = date.selectedValues.join("-");
              setItem("startTime", "value", value);
              setItem("startTime", "realValue", value);
              setItem("startTime", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "结束时间",
    required: true,
    rightIcon: 'arrow',
    name: "endTime",
    isLink: true,
    readonly: true,
    realValue: "",
    click() {
      const flag = useFlag()
      this.inlineForm[0].show = flag.btns.canEdit;
    },
    backfill(data) {
      this.value = data[this.name]?.replace(" 00:00:00", "");
      this.realValue = data[this.name];
    },
    inlineForm: [
      {
        slot: "extra",
        formType: "popup",
        name: "endTimePop",
        show: false,
        position: "bottom",
        inlineForm: [
          {
            slot: "default",
            formType: "date",
            confirm(date) {
              const value = date.selectedValues.join("-");
              setItem("endTime", "value", value);
              setItem("endTime", "realValue", value);
              setItem("endTime", "inlineForm.0.show", false);
            },
          },
        ],
      },
    ],
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "进件编号",
    readonly: true,
    placeholder: "请输入进件编号",
    value: "",
    name: "partnersContractNumber",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "现金流id",
    readonly: true,
    placeholder: "请输入现金流id",
    value: "",
    name: "cfId",
  },

  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "期数",
    readonly: true,
    placeholder: "请输入期数",
    value: "",
    name: "times",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "出租人收益",
    readonly: true,
    placeholder: "请输入出租人收益",
    value: "",
    name: "cfItem",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "现金流方向",
    readonly: true,
    placeholder: "请输入现金流方向",
    value: "",
    name: "",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "应付金额",
    readonly: true,
    placeholder: "请输入应付金额",
    value: "",
    name: "dueAmount",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "应付日期",
    readonly: true,
    placeholder: "请输入应付日期",
    value: "",
    name: "dueDate",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "已收金额",
    readonly: true,
    placeholder: "请输入已收金额",
    value: "",
    name: "receivedAmount",
  },
  {
    formType: "input",
    inputAlign: "left",
    labelClass: "xCenter border-r border-[#dbdbda]",
    border: false,
    label: "核销状态",
    readonly: true,
    placeholder: "请输入核销状态",
    value: "",
    name: "receivedAmount",
    // list.cashflowList.writeOffFlag
    //             ? initData.writeOffFlag[list.cashflowList.writeOffFlag]
    //             : list.cashflowList.writeOffFlag
  },
];
