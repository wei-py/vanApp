/*
 * @description 常见数据
 */
const commonTask = [
  {
    text: "订单列表",
    icon: "orderList",
    path: "/realLease",
    query: {
      stageId: "",
      stateId: "",
      taskId: "",
    },
  },
  // {
  //   text: '数据分析',
  //   icon: 'dataAnalysis',
  //   query: {
  //     id: 1,
  //     name: '134'
  //   }
  // },
  {
    text: "设计变更",
    icon: "designChange",
    path: "/designChange/designChange",
    query: {
      id: 1,
      name: "134",
    },
  },
  {
    text: "供应链",
    icon: "supplyChain",
    path: "/supplyChain/supplyChain",
    query: {
      id: 1,
      name: "134",
    },
  },
  {
    text: "备案统计",
    icon: "recordStatistics",
    path: "/recordList/recordList",
    // query: { stageId: 'BAZING', stateId: '', taskId: 'TASK_BAZXX' }
    query: {
      id: 1,
      name: "134",
    },
  },
  {
    text: "收益查询",
    icon: "incomeStatistics",
    path: "/income/income",
    query: {
      id: 1,
      name: "134",
    },
  },
  // {
  //   text: '一键建站',
  //   icon: 'buildStation'
  // }
  // {
  //   text: '测试页面1',
  //   icon: 'orderList',
  //   path: '/test/test',
  //   query: { num: 1 }
  // },
  // {
  //   text: '测试页面2',
  //   icon: 'orderList',
  //   path: '/test/test2'
  // },
  // {
  //   text: '查看图标',
  //   icon: 'orderList',
  //   path: '/test/icon'
  // },
  // {
  //   text: '登录页面',
  //   icon: 'orderList',
  //   path: '/login/login'
  // }
].map((n) => {
  return {
    ...n,
    from: "常见数据",
    icon: `./icons/realLeaseTop/${n.icon}.png`,
    tap() {
      router.push({ path: n.path, query: { ...n.query, from: "cysj", title: n.text } });
      // router.push({path :n.path, query: { ...n.query, from: 'cysj', title: n.text }})
    },
  };
});

/**
 * @description 任务大全
 */
const phaseTask = [
  {
    text: "预审",
    icon: "inquiry",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    detailPath: "inquiry",
    query: {
      stageId: "PRE_APPROVAL",
      stateId: "",
      taskId: "TASK_YSXX",
      addButton: true,
    },
  },
  {
    text: "客户信息",
    icon: "customerInfo",
    detailPath: "customerInfo",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "CUSTOMER_INFO",
      stateId: null,
      taskId: null,
    },
  },
  {
    text: "业务踏勘",
    icon: "reconnaissance", // 改
    detailPath: "businessReconnaissance",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "KAN_CHA",
      stateId: null,
      taskId: "TASK_TA_KAN",
    },
  },
  {
    text: "技术勘察",
    icon: "technicalInvestigation",
    detailPath: "technicalLnvestigation",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "KAN_CHA",
      stateId: null,
      taskId: "TASK_JSKC",
    },
  },
  {
    text: "合同签约",
    icon: "contractSigning",
    detailPath: "contractAward",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "LEASE_SIGN",
      stateId: "WAITING_SIGN",
      taskId: "TASK_HTQY",
    },
  },
  {
    text: "备案证及权属证明",
    icon: "certificate",
    detailPath: "certificate",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "BAZING",
      stateId: null,
      taskId: "TASK_BAZXX",
    },
    changeText(tab) {
      this.text = tab.index ? "备案证" : "备案证及权属证明";
    },
  },
  {
    text: "初设评审",
    icon: "initialReview",
    detailPath: "InitialReview",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "DESIGN",
      stateId: null,
      taskId: "TASK_CSPSXX",
    },
  },
  {
    text: "施工",
    icon: "build",
    detailPath: "build",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "CONSTRUCT",
      stateId: null,
      taskId: "CONSTRUCT",
    },
  },
  {
    text: "并网",
    icon: "gridConnected",
    detailPath: "gridConnected",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "GRID_CONNECTION",
      stateId: null,
      taskId: "TASK_BWXX",
    },
  },
  {
    text: "结算",
    icon: "settlement",
    detailPath: "gridConnectedAccount",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "SETTLEMENT",
      stateId: null,
      taskId: null,
    },
  },
  {
    text: "购售电合同",
    icon: "purchaseContract",
    detailPath: "electricityContract",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "GS_CONTRACT",
      stateId: null,
      taskId: "TASK_GSDHTXX",
    },
  },
  {
    text: "完成",
    icon: "complete",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "FINISHED",
      stateId: "FINISHED",
      taskId: null,
      realTitle: "完成",
    },
  },
  {
    text: "终止",
    icon: "Termination",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: "TERMINATE",
      stateId: "TERMINATE",
      taskId: null,
      realTitle: "终止",
    },
  },
  {
    text: "内审驳回",
    icon: "internalSummary",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: null,
      stateId: "REJECT",
      taskId: null,
      excludeStateIds: "APPROVAL_REJECT_LEASE",
    },
  },
  {
    text: "资方驳回",
    icon: "capitalSummary",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "rwdq", title: this.text } });
    },
    query: {
      stageId: null,
      stateId: "APPROVAL_REJECT_LEASE",
    },
  },
].map((n) => {
  return {
    ...n,
    from: "任务大全",
    icon: `./icons/realLeaseTop/${n.icon}.png`,
  };
});

/**
 * @description 审核大全
 */
const checkTask = [
  {
    text: "客户审核",
    icon: "businessAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "CUSTOMER_INFO",
      stateId: "WAITING_APPROVAL",
      taskId: null,
    },
  },
  {
    text: "踏勘一审",
    icon: "reconnaissanceFirstAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "KAN_CHA",
      stateId: "WAITING_APPROVAL",
      taskId: "TASK_TA_KAN",
    },
  },
  {
    text: "勘察审核",
    icon: "multiAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "KAN_CHA",
      stateId: "WAITING_APPROVAL",
    },
  },
  {
    text: "备案权属审核",
    icon: "recordOwnership",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "BAZING",
      stateId: "WAITING_APPROVAL",
      taskId: "TASK_BAZXX",
    },
    changeText(tab) {
      this.text = tab.index ? "备案审核" : "备案权属审核";
    },
  },
  {
    text: "初设审核",
    icon: "changeAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "DESIGN",
      stateId: "WAITING_APPROVAL",
      realTitle: "初设审核",
      // taskId: 'TASK_CSPSXX'
    },
  },
  {
    text: "施工审核",
    icon: "buildAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "CONSTRUCT",
      stateId: "WAITING_APPROVAL",
    },
  },
  {
    text: "并网审核",
    icon: "gridConnectedAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "GRID_CONNECTION",
      stateId: "WAITING_APPROVAL",
      // taskId: 'TASK_CSPSXX'
    },
  },
  {
    text: "结算审核",
    icon: "completeAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "SETTLEMENT",
      stateId: "WAITING_APPROVAL",
    },
  },
  {
    text: "购售电审核",
    icon: "businessAudit",
    path: "/realLease",
    tap() {
      router.push({ path: this.path, query: { ...this.query, from: "shdq", title: this.text } });
    },
    query: {
      stageId: "GS_CONTRACT",
      stateId: "WAITING_APPROVAL",
      taskId: "TASK_GSDHTXX",
    },
  },
].map((n) => {
  return {
    ...n,
    from: "审核大全",
    icon: `./icons/realLeaseTop/${n.icon}.png`,
  };
});

/**
 * @commonTask 常见数据
 * @phaseTask 任务大全
 * @checkTask 审核大全
 */
export { commonTask, phaseTask, checkTask };
