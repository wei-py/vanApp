export const sceneTask = [
  {
    text: "现场退货",
    icon: "onSiteReturn",
    path: "/siteGoodsReject",
    query: {
      state: 0,
      deliveryType: "SITE",
    },
  },
  // {
  //   text: '已退货详情',
  //   icon: 'returnedDetails',
  //   query: {
  //     stageId: '',
  //     stateId: '',
  //     taskId: ''
  //   }
  // }
].map((n) => {
  return {
    ...n,
    from: "现场收货",
    icon: `./icons/supplyChain/${n.icon}.png`,
    tap() {
      router.push({ path: n.path, query: { ...n.query, from: "cysj", title: n.realText || n.text } });
    },
  };
});

export const oneLevelTask = [
  {
    text: "仓库收货",
    icon: "warehouseReceipt",
    path: "/goodsCollectList",
    query: {
      deliveryType: "ORIGIN_TO_FIRST",
      state: 0,
    },
  },
  {
    text: "仓库发货",
    icon: "warehouseDelivery",
    path: "/sendOutGoodsList",
    query: {
      state: 0,
      deliveryType: "FIRST", //
    },
  },
  {
    text: "仓库退货确认",
    icon: "warehouseReturnConfirmation",
    path: "/goodsRejectList",
    query: {
      deliveryType: "FIRST",
      state: "2",
    },
  },
  // {
  //   text: '仓库已收货',
  //   icon: 'warehouseReceivedGoods',
  //   path:pages/warehouseReceivedGoods/warehouseReceivedGoods",
  //   query: {
  //     stageId: '',
  //     stateId: '',
  //     taskId: ''
  //   }
  // },
  // {
  //   text: '仓库已发货',
  //   icon: 'warehouseShipped',
  //   query:
  //     stageId: '',
  //     stateId: '',
  //     taskId: ''
  //   }
  // },
  // {
  //   text: '仓库已退货',
  //   icon: 'warehouseReturned',
  //   query:
  //     stageId: '',
  //     stateId: '',
  //     taskId: ''
  //   }
  // },
  {
    text: "仓库库存",
    icon: "warehouseInventory",
    path: "/goodsInventory",
    query: {
      deliveryType: "FIRST",
    },
  },
].map((n) => {
  return {
    ...n,
    from: "一级仓库任务(博通新能源)",
    icon: `./icons/supplyChain/${n.icon}.png`,
    tap() {
      router.push({
        path: n.path,
        query: {
          ...n.query,
          from: "xcsh",
          title: n.text,
        },
      });
    },
  };
});
export const twoLevelTask = [
  {
    text: "仓库收货",
    icon: "warehouseReceipt",
    path: "/goodsCollectList",
    query: {
      deliveryType: "FIRST_TO_SECOND",
      state: 0,
    },
  },
  {
    text: "仓库发货",
    icon: "warehouseDelivery",
    path: "/sendOutGoodsList",
    query: {
      state: 0,
      deliveryType: "SECOND_TO_SITE",
    },
  },
  {
    text: "现场退二级确认",
    icon: "warehouseReturnConfirmation",
    path: "/goodsRejectList",
    query: {
      deliveryType: "SECOND_TO_SITE",
      state: "2",
    },
  },
  // {
  //   text: '仓库已收货',
  //   icon: 'warehouseReceivedGoods',
  //   query:
  //     stageId: '',
  //     stateId: '',
  //     taskId: ''
  //   }
  // },
  // {
  //   text: '仓库已发货',
  //   icon: 'warehouseShipped',
  //   query:
  //     stageId: '',
  //     stateId: '',
  //     taskId: ''
  //   }
  // },
  {
    text: "二级退一级仓库",
    icon: "warehouseReturned",
    path: "/goodsRejectList",
    query: {
      state: 0,
      deliveryType: "FIRST_TO_SECOND",
    },
  },
  {
    text: "仓库库存",
    icon: "warehouseInventory",
    path: "/goodsInventory",
    query: {
      deliveryType: "SECONED",
    },
  },
].map((n) => {
  return {
    ...n,
    from: "二级仓库任务(供应商)",
    icon: `./icons/supplyChain/${n.icon}.png`,
    tap() {
      router.push({
        path: n.path,
        query: {
          ...n.query,
          from: "xcsh",
          title: n.text,
        },
      });
    },
  };
});
export const warehouseTask = [
  {
    text: "新增仓库",
    icon: "addANewWarehouse",
    path: "/storeAdd",
    query: {},
  },
  {
    text: "修改仓库",
    icon: "modifyWarehouse",
    path: "/storeUpdate",
    query: {},
  },
  {
    text: "删除仓库",
    icon: "deleteWarehouse",
    path: "/storeDel",
    query: {},
  },
].map((n) => {
  return {
    ...n,
    from: "仓库管理",
    icon: `./icons/supplyChain/${n.icon}.png`,
    tap() {
      router.push({
        path: n.path,
        query: {
          ...n.query,
          from: "xcsh",
          title: n.text,
        },
      });
    },
  };
});
