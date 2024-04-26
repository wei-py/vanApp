const titleClass = "!pl-[5px]";

export const itemDetail = [
  {
    customSlot: "person",
    title: "任命",
    value: "value",
    orderId: "-",
    stageId: "-",
  },
  {
    formType: "cell",
    name: "orderId",
    title: "系统编号",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    value: "-",
  },
  {
    formType: "cell",
    name: "designId",
    title: "进件编号",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    value: "-",
  },
];

export const inquiry = [
  {
    formType: "cell",
    title: "预审",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "预审信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: '/inquiry', query: { orderId: getQuery().orderId } })
    },
  },
];

export const customerInfo = [
  {
    formType: "cell",
    title: "客户信息",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "客户信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];

export const survey = [
  {
    formType: "cell",
    title: "勘察",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "业务踏勘",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "技术勘察",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const contractSign = [
  {
    formType: "cell",
    title: "合同签约",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "合同签约",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const record = [
  {
    formType: "cell",
    title: "备案证及权属证明",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "备案证及权属证明",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const initReview = [
  {
    formType: "cell",
    title: "初设评审",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "初设评审信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "设计变更信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const build = [
  {
    formType: "cell",
    title: "施工",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "施工信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "设备信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "设备影像件信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const grid = [
  {
    formType: "cell",
    title: "并网",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "并网信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const ZYsettlement = [];
export const DLSsettlement = [];
export const electricityContract = [
  {
    formType: "cell",
    title: "购售电合同",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "购售电合同信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
export const income = [
  {
    formType: "cell",
    title: "收益查询",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "屋顶业主收益查询",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      console.log(this.value);
    },
  },
];
