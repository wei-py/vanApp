export const contractAward = [
  makeTitle("合同签约"),
  {
    formType: "input",
    name: "leaseSigneUrl",
    label: "线上签约(跳转资方H5)",
    readonly: true,
    realValue: '',
    backfill(data) {
      this.realValue = data.leaseSigneUrl
      this.value = ''
    },
  },
  {
    formType: "cell",
    titleClass: " xCenter",
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
          copyText(getItem('leaseSigneUrl').realValue)
        },
      },
    ],
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
        realValue: 'TENANT',
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue
          }
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params)
          window.open(url)
        }
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.TENANT
    }
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
        realValue: 'SELLER',
        round: true,
        size: "small",
        type: "primary",
        class: " !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",
        click() {
          const params = {
            orderId: getQuery()?.orderId,
            contractType: this.realValue
          }
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params)
          window.open(url)
        }
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.SELLER
    }
  },
  {
    formType: "input",
    name: "",
    readonly: true,
    labelClass: "!w-0",
    valueClass: "!bg-[#f3f3f3] !pt-0",
    inputAlign: "center",
    realValue: 'FACTORY',
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
            contractType: this.realValue
          }
          // const baseUrl = baseURLDic[who.value].app
          const baseUrl = baseURLDic.prod.app
          const url = queryUrl(`${baseUrl}/order/leaseContract/get-pdf`, params)
          window.open(url)
        }
      },
    ],
    backfill(data) {
      this.inlineForm[0].disabled = !data.FACTORY
    }
  },
];
