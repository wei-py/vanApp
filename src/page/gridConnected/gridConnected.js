export const gridConnectedMessageForm = [
  makeTitle("并网信息"),
  {
    ...makeDate({ name: "startTime" }),
    label: "供电验收时间",
    required: true,
  },
  {
    ...makeDate({ name: "checkAcceptTime" }),
    label: "并网合闸时间",
    required: true,
  },
  // {
  //   formType: "input",
  //   label: "供电验收时间",
  //   required: true,
  //   name: "startTime",
  //   isLink: true,
  //   readonly: true,
  //   realValue: "",
  //   click() {
  //     const flag = useFlag();
  //     if (lo.isUndefined(this.inlineForm[0].inlineForm[0].value)) {
  //       this.inlineForm[0].inlineForm[0].value = dayjs().format("YYYY-MM-DD").split("-");
  //     }
  //     this.inlineForm[0].show = flag.btns.canEdit;
  //   },
  //   backfill(data) {
  //     this.value = data[this.name]?.replace(" 00:00:00", "");
  //     this.realValue = data[this.name];
  //   },
  //   inlineForm: [
  //     {
  //       slot: "extra",
  //       formType: "popup",
  //       name: "startTimePop",
  //       show: false,
  //       position: "bottom",
  //       inlineForm: [
  //         {
  //           slot: "default",
  //           formType: "date",
  //           confirm(date) {
  //             const value = date.selectedValues.join("-");
  //             setItem("startTime", "value", value);
  //             setItem("startTime", "realValue", value + " 00:00:00");
  //             setItem("startTime", "inlineForm.0.show", false);
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   formType: "input",
  //   label: "并网合闸时间",
  //   required: true,
  //   name: "checkAcceptTime",
  //   isLink: true,
  //   readonly: true,
  //   realValue: "",
  //   click() {
  //     const flag = useFlag();
  //     if (lo.isUndefined(this.inlineForm[0].inlineForm[0].value)) {
  //       this.inlineForm[0].inlineForm[0].value = dayjs().format("YYYY-MM-DD").split("-");
  //     }
  //     this.inlineForm[0].show = flag.btns.canEdit;
  //   },
  //   backfill(data) {
  //     this.value = data[this.name]?.replace(" 00:00:00", "");
  //     this.realValue = data[this.name];
  //   },
  //   inlineForm: [
  //     {
  //       slot: "extra",
  //       formType: "popup",
  //       name: "checkAcceptTimePop",
  //       show: false,
  //       position: "bottom",
  //       inlineForm: [
  //         {
  //           slot: "default",
  //           formType: "date",
  //           confirm(date) {
  //             const value = date.selectedValues.join("-");
  //             setItem("checkAcceptTime", "value", value);
  //             setItem("checkAcceptTime", "realValue", value + " 00:00:00");
  //             setItem("checkAcceptTime", "inlineForm.0.show", false);
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    formType: "input",
    label: "电厂交易编号",
    value: "",
    required: true,
    name: "generatorNumber",
    placeholder: "请认真核对后输入",
  },
  {
    formType: "input",
    label: "并网备注(选填)",
    value: "",
    name: "annotation",
    placeholder: "请输入",
  },
];

export const zlwOtherFile = [
  makeTitle("并网资料"),
  {
    label: "补充/整改施工影像件(选填)",
    name: "zlwOtherFile",
    ...makeUpload(999, 100),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param[this.name] = param[this.name].map((n) => getUploadUrl(n));
    },
  },
];

export const monitorForm = [
  makeTitle("并网资料"),
  {
    label: "电站发电量监控截图(发电三天)",
    name: "monitor",
    required: true,
    ...makeUpload(999, 100),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param.monitor = param.monitor.map((n) => sToUrl(n.url));
    },
  },
];

export const omnibearingShadowOcclusionForm = [
  makeTitle("发电影响复核"),
  {
    label: "全方位阴影遮挡情况水印照",
    name: "omnibearingShadowOcclusion",
    required: true,
    ...makeUpload(999, 100),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param.omnibearingShadowOcclusion = param.omnibearingShadowOcclusion.map((n) => sToUrl(n.url));
    },
  },
  {
    label: "四周遮挡复核环绕视频",
    name: "allAroundReviewSurroundVideo",
    required: true,
    ...makeUpload(999, 100),
    backfill(data) {
      lo.bind(makeImgs, this)(data);
    },
    getParam(param) {
      param.allAroundReviewSurroundVideo = param.allAroundReviewSurroundVideo.map((n) => sToUrl(n.url));
    },
  },
];

export const propertyInsuranceForm = [
  makeTitle("财产险"),
  {
    ...makeDate({ name: "startDate" }),
    label: "保险开始日期",
    required: true,
  },
  {
    ...makeDate({ name: "endDate" }),
    label: "保险结束日期",
    required: true,
  },
  // {
  //   formType: "input",
  //   name: "startDate",
  //   label: "保险开始日期",
  //   required: true,
  //   isLink: true,
  //   readonly: true,
  //   realValue: "",
  //   click() {
  //     const flag = useFlag();
  //     if (lo.isUndefined(this.inlineForm[0].inlineForm[0].value)) {
  //       this.inlineForm[0].inlineForm[0].value = dayjs().format("YYYY-MM-DD").split("-");
  //     }
  //     this.inlineForm[0].show = flag.btns.canEdit;
  //   },
  //   backfill(data) {
  //     this.value = data[this.name]?.replace(" 00:00:00", "");
  //     this.realValue = data[this.name];
  //   },
  //   inlineForm: [
  //     {
  //       slot: "extra",
  //       formType: "popup",
  //       name: "startDatePop",
  //       show: false,
  //       position: "bottom",
  //       inlineForm: [
  //         {
  //           slot: "default",
  //           formType: "date",
  //           confirm(date) {
  //             const value = date.selectedValues.join("-");
  //             setItem("startDate", "value", value);
  //             setItem("startDate", "realValue", value + " 00:00:00");
  //             setItem("startDate", "inlineForm.0.show", false);
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   formType: "input",
  //   name: "endDate",
  //   label: "保险结束日期",
  //   required: true,
  //   isLink: true,
  //   readonly: true,
  //   realValue: "",
  //   click() {
  //     const flag = useFlag();
  //     if (lo.isUndefined(this.inlineForm[0].inlineForm[0].value)) {
  //       this.inlineForm[0].inlineForm[0].value = dayjs().format("YYYY-MM-DD").split("-");
  //     }
  //     this.inlineForm[0].show = flag.btns.canEdit;
  //   },
  //   backfill(data) {
  //     this.value = data[this.name]?.replace(" 00:00:00", "");
  //     this.realValue = data[this.name];
  //   },
  //   inlineForm: [
  //     {
  //       slot: "extra",
  //       formType: "popup",
  //       name: "endDatePop",
  //       show: false,
  //       position: "bottom",
  //       inlineForm: [
  //         {
  //           slot: "default",
  //           formType: "date",
  //           confirm(date) {
  //             const value = date.selectedValues.join("-");
  //             setItem("endDate", "value", value);
  //             setItem("endDate", "realValue", value + " 00:00:00");
  //             setItem("endDate", "inlineForm.0.show", false);
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    formType: "input",
    label: "保险公司",
    name: "insuranceCompany",
    placeholder: "请选择",
    ...backSelect(),
    ...makeSelect("insuranceCompany", [], "dynamic"),
    async backfill(bData) {
      const { data } = await http.get("insurance/getInsuranceCompany");
      const colums = data.map((n) => {
        return { text: n.insuranceCompany, value: n.insuranceCompany };
      });
      console.log(bData[this.name], bData);
      this.makeSelect(bData[this.name], colums);
    },
  },
  {
    formType: "input",
    label: "保险编号",
    requred: true,
    name: "insuranceNumber",
    value: "",
    placeholder: "请输入",
  },
  {
    formType: "input",
    label: "保险类型",
    name: "insuranceType",
    readonly: true,
    ...backSelect(),
    ...makeSelect("insuranceType", [{ value: 1, text: "财产险" }]),
    value: 1,
  },
  {
    formType: "input",
    label: "投保金额",
    value: "",
    name: "insuredAmount",
    type: "digit",
    placeholder: "等于每W单价乘以总容量(W)",
    ...makeUnit("元"),
  },
  {
    formType: "input",
    label: "第一受益人",
    name: "beneficiary",
    value: "",
    placeholder: "请选择",
    ...backSelect(),
    ...makeSelect("beneficiary", [], "dynamic"),
    async backfill(bData) {
      const { data } = await http.get("insurance/getBeneficiaryCompany");
      const columns = data.map((n) => {
        return {
          text: n.beneficiary,
          value: n.beneficiary,
        };
      });
      this.makeSelect(bData[this.name], columns);
    },
  },
  {
    ...makeUpload(999, 100),
    label: "电站保险单(PDF文档)",
    name: "insurancePolicyP",
    required: true,
    backfill(data) {
      lo.bind(makeImgs, this)(data.insuranceList[0]);
    },
    getParam(param) {
      if (!lo.isArray(param.insuranceList)) {
        param.insuranceList = [{}];
      }
      const pickList = [
        "startDate",
        "endDate",
        "insuranceCompany",
        "insuranceNumber",
        "insuranceType",
        "insuredAmount",
        "beneficiary",
        "insurancePolicyP",
      ];
      const insurance = lo.pick(param, [...pickList, "orderId"]);
      param.insurancePolicyP = param.insurancePolicyP.map((n) => getUploadUrl(n));
      insurance.insurancePolicyP = JSON.stringify(param.insurancePolicyP);
      param.insuranceList = [insurance];
      delete param.insurancePolicyP;
    },
  },
];
