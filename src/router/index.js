import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
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
  ],
});

router.beforeEach(async (to, from, next) => {
  const flag = useFlag()
  flag.overlayShow = false
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
  next()
  // console.info("==当前路由id==" + router.query.id);
  //   if (router.query.id) {
  //     console.info("加载页面数据");
  //   }
}) 



export default router;
