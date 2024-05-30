import { createApp } from "vue";
import App from "./App.vue";

import "./index.css"; // 默认 css
import "vant/lib/index.css"; // vant css
import { PullRefresh, Lazyload, NumberKeyboard } from "vant"; // 下拉刷新等
import Skeleton from "@x-ui-vue3/skeleton"; // 骨架屏

import { createPinia } from "pinia"; // 状态
import piniaPersist from "pinia-plugin-persist"; // 持久化
import storeReset from "./store/storeReset"; // 重置持久化

import router from "@/router/index.js"; // 路由
import { directive } from "vue3-menus"; // 长按菜单览指令

import vue3PhotoPreview from "vue3-photo-preview"; // 图片预览
import "vue3-photo-preview/dist/index.css"; // 图片预览

import VXETable from "vxe-table"; // 表格
import "vxe-table/lib/style.css"; // 表格

const pinia = createPinia();
pinia.use(piniaPersist); // 持久化
pinia.use(storeReset); // 重置持久化
const app = createApp(App);
app.use(router); // 路由
app.use(pinia); // 状态
app.use(PullRefresh); // 下拉刷新
// app.use(Toast); // 提示
app.use(NumberKeyboard); // 数字键盘
app.use(Lazyload, { lazyComponent: true }); // 图片懒加载
app.use(vue3PhotoPreview); // 图片预览
app.use(VXETable); // 表格
app.use(Skeleton); // 骨架屏
app.directive("menus", directive); // 长按菜单览指令
appUsePlugin(app);
app.mount("#app");
