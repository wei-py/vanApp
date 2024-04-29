import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/orderh5/login",
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
      path: "/realLease",
      name: "realLease",
      component: () => import("../page/realLease/realLease.vue"),
      meta: {
        title: "订单列表",
        refresh: true,
      },
    },
    {
      path: "/itemDetail",
      name: "itemDetail",
      component: () => import("../page/itemDetail/itemDetail.vue"),
      meta: {
        title: "项目详情",
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
    // 
  ].map((n) => {
    return {
      ...n,
      path: "/orderh5" + n.path,
    };
  }),
});

router.beforeEach(async (to, from, next) => {
  const flag = useFlag();
  flag.overlayShow = false;
  if (!to.path.startsWith("/orderh5")) {
    to.path = "/orderh5" + to.path;
    to.fullPath = "/orderh5" + to.fullPath;
    to.href = "/orderh5" + to.href;
    router.push(to)
  }
  next()
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
