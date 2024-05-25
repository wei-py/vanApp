import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
const orderh5 = "";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: orderh5 + "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../page/login/login.vue"),
      meta: {
        // tabbar: true,
        // title: "登录页",
        // hiddenLeftArrow: true,
      },
    },
    {
      path: "/web",
      name: "web",
      component: () => import("../page/web/web.vue"),
    },
    {
      path: "/previewFile",
      name: "previewFile",
      component: () => import("../page/web/previewFile.vue"),
      meta: {
        // tabbar: true,
        title: "首页123",
        refresh: true,
        // hiddenLeftArrow: true,
      },
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../page/home/home.vue"),
      meta: {
        tabbar: true,
        title: "首页",
        hiddenLeftArrow: true,
      },
    },
    {
      path: "/person",
      name: "person",
      component: () => import("../page/person/person.vue"),
      meta: {
        tabbar: true,
        title: "",
        hiddenLeftArrow: true,
      },
    },
    {
      path: "/realLease",
      name: "realLease",
      component: () => import("../page/realLease/realLease.vue"),
      meta: {
        title: "订单列表",
        // refresh: true,
      },
    },
    {
      path: "/itemDetail",
      name: "itemDetail",
      component: () => import("../page/itemDetail/itemDetail.vue"),
      meta: {
        title: "项目详情",
        rightText: "操作记录",
        onClickRight() {
          router.push({ path: "/operateLog" });
        },
        refresh: true,
      },
    },
    {
      path: "/inquiry",
      name: "inquiry",
      component: () => import("../page/inquiry/inquiry.vue"),
      meta: {
        title: "预审",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/customerInfo",
      name: "customerInfo",
      component: () => import("../page/customerInfo/customerInfo.vue"),
      meta: {
        title: "客户信息",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/businessReconnaissance",
      name: "businessReconnaissance",
      component: () => import("../page/businessReconnaissance/businessReconnaissance.vue"),
      meta: {
        title: "业务踏勘",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/technicalLnvestigation",
      name: "technicalLnvestigation",
      component: () => import("../page/technicalLnvestigation/technicalLnvestigation.vue"),
      meta: {
        title: "技术勘察",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/contractAward",
      name: "contractAward",
      component: () => import("../page/contractAward/contractAward.vue"),
      meta: {
        title: "合同签约",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/certificate",
      name: "certificate",
      component: () => import("../page/certificate/certificate.vue"),
      meta: {
        title: "备案证及权属证明",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/InitialReview",
      name: "InitialReview",
      component: () => import("../page/InitialReview/InitialReview.vue"),
      meta: {
        title: "初设评审",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/designGroup",
      name: "designGroup",
      component: () => import("../page/InitialReview/designGroup.vue"),
      meta: {
        title: "设计组串数量",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/build",
      name: "build",
      component: () => import("../page/build/build.vue"),
      meta: {
        title: "施工",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/DeviceInfo",
      name: "deviceInfo",
      component: () => import("../page/deviceInfo/deviceInfo.vue"),
      meta: {
        title: "施工",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/buildVideo",
      name: "buildVideo",
      component: () => import("../page/buildVideo/buildVideo.vue"),
      meta: {
        title: "施工影像件信息",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/gridConnected",
      name: "gridConnected",
      component: () => import("../page/gridConnected/gridConnected.vue"),
      meta: {
        title: "施工影像件信息",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/electricityContract",
      name: "electricityContract",
      component: () => import("../page/electricityContract/electricityContract.vue"),
      meta: {
        title: "施工影像件信息",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/settlement",
      name: "settlement",
      component: () => import("../page/settlement/settlement.vue"),
      meta: {
        title: "直营结算",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/income",
      name: "income",
      component: () => import("../page/income/income.vue"),
      meta: {
        title: "收益查询",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/designChangeLog",
      name: "designChangeLog",
      component: () => import("../page/InitialReview/designChangeLog.vue"),
      meta: {
        title: "设计变更记录",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/gridConnectedAccount",
      name: "gridConnectedAccount",
      component: () => import("../page/gridConnectedAccount/gridConnectedAccount.vue"),
      meta: {
        title: "并网信息结算",
        refresh: true,
        // tabbar: true,
      },

      //
    },
    {
      path: "/gridSettlement",
      name: "gridSettlement",
      component: () => import("../page/gridSettlement/gridSettlement.vue"),
      meta: {
        title: "并网信息结算",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/recordList",
      name: "recordList",
      component: () => import("../page/recordList/recordList.vue"),
      meta: {
        title: "备案证列表",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/recordDetail",
      name: "recordDetail",
      component: () => import("../page/recordDetail/recordDetail.vue"),
      meta: {
        title: "备案证详情",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/supplyChain",
      name: "supplyChain",
      component: () => import("../page/supplyChain/supplyChain.vue"),
      meta: {
        title: "供应链",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/siteGoodsReject",
      name: "siteGoodsReject",
      component: () => import("../page/siteGoodsReject/siteGoodsReject.vue"),
      meta: {
        title: "供应链",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/sendOutGoodsList",
      name: "sendOutGoodsList",
      component: () => import("../page/sendOutGoodsList/sendOutGoodsList.vue"),
      meta: {
        title: "发货",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/goodsCollectList",
      name: "goodsCollectList",
      component: () => import("../page/goodsCollectList/goodsCollectList.vue"),
      meta: {
        title: "收货",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/sendOutGoods",
      name: "sendOutGoods",
      component: () => import("../page/sendOutGoods/sendOutGoods.vue"),
      meta: {
        title: "仓库收货",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/goodsCollectDetail",
      name: "goodsCollectDetail",
      component: () => import("../page/goodsCollectDetail/goodsCollectDetail.vue"),
      meta: {
        title: "仓库发货",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/goodsRejectList",
      name: "goodsRejectList",
      component: () => import("../page/goodsRejectList/goodsRejectList.vue"),
      meta: {
        title: "仓库发货",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/goodsRejectDetail",
      name: "goodsRejectDetail",
      component: () => import("../page/goodsRejectDetail/goodsRejectDetail.vue"),
      meta: {
        title: "仓库发货",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/goodsInventory",
      name: "goodsInventory",
      component: () => import("../page/goodsInventory/goodsInventory.vue"),
      meta: {
        title: "仓库库存",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/storeUpdate",
      name: "storeUpdate",
      component: () => import("../page/storeUpdate/storeUpdate.vue"),
      meta: {
        title: "仓库管理",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/designChange",
      name: "designChange",
      component: () => import("../page/designChange/designChange.vue"),
      meta: {
        title: "设计变更",
        refresh: true,
        // tabbar: true,
      },
    },
    {
      path: "/operateLog",
      name: "operateLog",
      component: () => import("../page/operateLog/operateLog.vue"),
      meta: {
        title: "操作记录",
        refresh: true,
        // tabbar: true,
      },
    },
  ].map((n) => {
    return {
      ...n,
      path: orderh5 + n.path,
    };
  }),
});

// router.beforeResolve((to, from, next) => {
//   console.log(to);
//   if (!to.path.startsWith("/orderh5")) {
//     to.path = orderh5 + to.path;
//     to.fullPath = orderh5 + to.fullPath;
//     to.href = orderh5 + to.href;
//   }
//   next();
// });

router.beforeEach(async (to, from, next) => {
  const flag = useFlag();
  flag.overlayShow = false;
  useTitle(to.meta.title);
  // console.log(to)
  // if (!to.path.startsWith('/orderh5')) {
  //   to.path = orderh5 + to.path;
  //   to.fullPath = orderh5 + to.fullPath;
  //   to.href = orderh5 + to.href;
  //   router.push(to)
  // }
  next();
});

router.afterEach((to, from, next) => {
  // if (from.fullPath == "/") {
  //   console.log(from.fullPath);
  // } else {
  //   if (to.fullPath.startsWith('/realLease/realLease')) {
  //   } else {
  //     location.reload();
  //   }
  // }
});

router.beforeResolve((to, from, next) => {
  next();
  // console.info("==当前路由id==" + router.query.id);
  //   if (router.query.id) {
  //     console.info("加载页面数据");
  //   }
});

export default router;
