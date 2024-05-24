export const contractAward = [
  {
    ...makeTitle("合同签约"),
    hidden: computed(() => viewOrg() != "ZZD_ORG"),
  },
  {
    formType: "input",
    name: "leaseSigneUrl",
    label: "线上签约(跳转资方H5)",
    readonly: true,
    hidden: computed(() => viewOrg() != "ZZD_ORG"),
    realValue: "",
    backfill(data) {
      this.realValue = data.leaseSigneUrl;
      this.value = "";
    },
  },
  {
    formType: "cell",
    titleClass: " xCenter",
    hidden: computed(() => viewOrg() != "ZZD_ORG"),
    inlineForm: [
      {
        slot: "title",
        formType: "button",
        url: "",
        text: "复制链接",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#fff] !text-[#ffab30] !border-0 w-[30%] ",
        click() {
          copyText(getItem("leaseSigneUrl").realValue);
        },
      },
    ],
  },

  {
    ...makeTitle("电子合同下载"),
    // hidden: computed(() => viewOrg() != "isZZD"),
    hidden: computed(() => isZZD()),
  },

  {
    formType: "input",
    name: "leaseSigneUrl",
    label: "线上签约(跳转资方H5)",
    hidden: computed(() => isZZD()),
    isLink: true,
    realValue: "",
    click() {
      openUrl(this.realValue);
    },
    backfill(data) {
      this.realValue = data.leaseSigneUrl;
      if (this.realValue) {
        this.value = "一键下载";
      }
    },
  },
  {
    formType: "cell",
    titleClass: " xCenter",
    hidden: computed(() => isZZD()),
    inlineForm: [
      {
        slot: "title",
        formType: "button",
        url: "",
        text: "复制下载链接",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#fff] !text-[#ffab30] !border-0 w-[30%] ",
        click() {
          showFailToast("资方暂未支持此功能, 请联系博通总部商务中心, 获取合同");
          // util.toast.error('资方暂未支持此功能, 请联系博通总部商务中心, 获取合同')
          return;
          // copyText(getItem("leaseSigneUrl").realValue);
        },
      },
    ],
  },
];

export const signedContractForm = [
  {
    ...makeTitle("屋顶方已盖章合同扫描件上传"),
    hidden: computed(() => isZZD()),
  },
  {
    ...makeUpload(999, 100, "*"),
    name: "orgLegalIdAuthFile",
    label: "法人代表/负责人身份证明书(盖公章)",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    ...makeUpload(999, 100, "*"),
    name: "orgSignatureChop",
    label: "法人组织预留印鉴",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    formType: "cell",
    value: "提示: 盖公章、法人代表名字章、财务专用章。若确无财务专用章可不盖；若无法人代表名字章可手写签名",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD()),
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "contract",
    label: "屋顶方已盖章合同扫描件",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    formType: "cell",
    value:
      "提示: 上传 “法人代表/负责人身份证明书”、“法人组织预留印鉴”、“屋顶方已盖章合同扫描件” 及签约现场系列照片成功后，项目详情里的 “合同签约” 环节右侧将显示绿色的 “已签约”",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD()),
  },
];

export const signedSiteForm = [
  {
    ...makeTitle("双方已盖章合同扫描件上传"),
    hidden: computed(() => isZZD()),
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "signPhoto",
    label: "现场签字照",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "stampUsedPhoto",
    label: "现场用印照",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    ...makeUpload(1, 100, "*"),
    name: "signOverPhoto",
    label: "签约完成照",
    hidden: computed(() => isZZD()),
    required: true,
  },
  {
    formType: "cell",
    value:
      "提示:1, 现场签字照: 法人代表/负责人正脸、持笔或持法人代表章, 与合同签署页同框拍摄; 2, 现场用印照: 法人代表/负责人正脸、持印, 与合同签署页同框拍摄; 3, 签署完成照: 法人代表/负责人正脸, 与合同、身份证、统一社会信用代码证/组织机构代码证（村委）或营业执照（集体经济组织）同框拍摄”",
    valueClass: "text-red !text-left",
    hidden: computed(() => isZZD()),
  },
];

export const button = [
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    class: "!bg-[#f3f3f3] !pt-0",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "屋顶租赁合同下载",
        round: true,
        size: "small",
        realValue: "TENANT",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue,
          };
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app;
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params);
          window.open(url);
        },
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.TENANT;
    },
  },
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    class: "!bg-[#f3f3f3] !pt-0",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "买卖合同下载",
        realValue: "SELLER",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue,
          };
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app;
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params);
          window.open(url);
        },
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.SELLER;
    },
  },
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    realValue: "FACTORY",
    class: "!bg-[#f3f3f3] !pt-0",
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: "运维合同下载",
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue,
          };
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app;
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params);
          window.open(url);
        },
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.FACTORY;
    },
  },
];
