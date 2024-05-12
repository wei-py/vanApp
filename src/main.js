import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "vant/lib/index.css";
import { PullRefresh, Lazyload, Toast, NumberKeyboard } from "vant";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import storeReset from "./store/storeReset";
import router from "@/router/index.js";
import { directive } from "vue3-menus";
import vue3PhotoPreview from "vue3-photo-preview";
import "vue3-photo-preview/dist/index.css";
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

const pinia = createPinia();
pinia.use(piniaPersist); // 持久化
pinia.use(storeReset); // 持久化
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(PullRefresh); // 下拉刷新
app.use(Toast);
app.use(NumberKeyboard);
app.use(Lazyload, { lazyComponent: true });
app.use(vue3PhotoPreview);
app.use(VXETable);
app.directive("menus", directive); // 长按菜单览指令
appUsePlugin(app);
app.mount("#app");
