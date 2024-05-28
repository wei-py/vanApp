const titleClass = "!pl-[5px] !min-w-[30%]";

export const itemDetail = [
  {
    customSlot: "person",
    title: "-",
    value: "value",
    orderId: "-",
    stageId: "-",
  },
  {
    formType: "cell",
    name: "orderId",
    title: "系统编号",
    valueClass: "mr-[10px] text-gray",
    titleClass: "!pl-[5px] !min-w-[20%] !flex-none",
    value: "-",
  },
  {
    formType: "cell",
    name: "contractNumber",
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
    onMounted() {
      this.hidden = investorHidden("");
    },
  },
  {
    formType: "cell",
    name: "/inquiry",
    title: "预审信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    onMounted() {
      this.hidden = investorHidden("");
    },
    click() {
      if (this.value != "未开启") {
        router.push({ path: "/inquiry", query: { ...getQuery() } });
      } else {
        showFailToast(this.value);
      }
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
    name: "/customerInfo",
    title: "客户信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      if (this.value != "未开启") {
        const titleDic = {
          TYZF_ZZD: "客户信息 - 自然人",
          TYZF_ZZD_ORG: "客户信息 - 法人",
        };
        const title = titleDic[viewOrg()] || this.title;
        router.push({ path: this.name, query: { ...getQuery(), title } });
      } else {
        showFailToast(this.value);
      }
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
    name: "/businessReconnaissance",
    title: "业务踏勘",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      if (this.value != "未开启") {
        router.push({ path: this.name, query: { ...getQuery() } });
      } else {
        showFailToast(this.value);
      }
    },
  },
  {
    formType: "cell",
    name: "/technicalLnvestigation",
    title: "技术勘察",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      if (this.value != "未开启") {
        router.push({ path: this.name, query: { ...getQuery() } });
      } else {
        showFailToast(this.value);
      }
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
    name: "/contractAward",
    title: "合同签约",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    async click() {
      // if (this.value == "已签约") {
      //   router.push({ path: this.name, query: { ...getQuery(), online: true, title: "线上电子合同签约" } });
      //   return
      // }
      if (isTYZF()) {
        showConfirmDialog({
          title: "合同签约",
          message: "提示：根据商务培训要求，选择正确的签约方式",
          confirmButtonText: "线上电子合同签约",
          confirmButtonDisabled: isZZD_ORG(),
          cancelButtonText: "线下纸质合同签约",
          cancelButtonDisabled: isZZD(),
          closeOnClickOverlay: true,
        })
          .then(() => {
            router.push({ path: this.name, query: { ...getQuery(), online: true, title: "线上电子合同签约" } });
          })
          .catch(() => {
            router.push({ path: this.name, query: { ...getQuery(), online: false, title: "线下纸质合同签约" } });
          });
      } else {
        router.push({ path: this.name, query: { ...getQuery() } });
      }
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
    name: "/certificate",
    title: "备案证及权属证明",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
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
    name: "/InitialReview",
    title: "初设评审信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { orderId: getQuery().orderId, title: this.title } });
    },
  },
  {
    formType: "cell",
    name: "/InitialReview",
    title: "设计变更信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { orderId: getQuery().orderId, title: this.title } });
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
    name: "/build",
    title: "施工信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
  {
    formType: "cell",
    name: "/DeviceInfo",
    title: "设备信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
  {
    formType: "cell",
    name: "/buildVideo",
    title: "施工影像件信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
  {
    formType: "input",
    inputAlign: "center",
    name: "hasPutApprovalConstructBtn",
    realValue: false,
    inlineForm: [
      {
        slot: "input",
        formType: "button",
        text: " 提交施工审核 ",
        className: "bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",
        click() {
          setItem("hasPutApprovalConstructBtn", async (v) => {
            const resp = await http.post(queryUrl(`/approval/put-approval/bto/construction`, { orderId: getQuery().orderId, taskId: "CONSTRUCT" }));
            if (resp.code == 200) {
              showSuccessToast("提交成功");
              location.reload();
            } else {
              const msg = lo.get(data, "data.msg", "提交失败");
              showFailToast(msg);
            }
          });
        },
      },
    ],
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
    name: "/gridConnected",
    title: "并网信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
];

export const ZYsettlement = [
  {
    formType: "cell",
    title: "直营结算",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/settlement",
    title: "直营结算信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
];

export const DLSsettlement = [
  {
    formType: "cell",
    title: "供应商结算",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/gridConnectedAccount",
    title: "并网结算信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
  {
    formType: "cell",
    name: "/gridSettlement",
    title: "资料结算信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
];

export const electricityContract = [
  {
    formType: "cell",
    title: "购售电合同",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "cell",
    name: "/electricityContract",
    title: "购售电合同信息",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
];
export const income = [
  {
    formType: "cell",
    title: "收益查询",
    titleClass: itemDetailTitleClass,
    class: "!p-0 h-[50px]",
    onMounted() {
      this.hidden = investorHidden("");
    },
  },
  {
    formType: "cell",
    name: "/income",
    title: "屋顶业主收益查询",
    valueClass: "mr-[10px] text-gray",
    titleClass,
    isLink: true,
    value: "未开启",
    onMounted() {
      this.hidden = investorHidden("");
    },
    click() {
      router.push({ path: this.name, query: { ...getQuery() } });
    },
  },
];
