<script setup>
import overlay from "@/components/overlay.vue";
const loading = ref(false); // 下拉刷新加载

function onClickLeft() {
  // 返回事件
  router.go(-1);
}

async function onRefresh() {
  // 下拉刷新事件
  const event = useEvent();
  await event.getData();
  loading.value = false;
}

// onMounted(async () => {
//   login();
// });

window.addEventListener("beforeunload", clearStore);
window.removeEventListener("beforeunload", clearStore);

async function login() {
  const user = {
    phone: "superadmin",
    password: "CMJBG06#",
    code: "",
    type: "password",
    systemType: "ios",
    systemVersion: "16.6",
    appVersion: "2.3.3",
  };
  const { data } = await http.post("/login", user);
  setUserInfo(data);

  const resp = await http.get("order-state/dic");
  const statusDic = resp.data;
  const flag = useFlag();
  flag.statusDic = { ...statusDic.state, ...statusDic.stage, ...statusDic.task };
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <overlay></overlay>
    <van-nav-bar
      v-show="$route.query.title || $route.meta.title"
      :title="$route.query.title || $route.meta.title"
      :left-text="!$route.meta.hiddenLeftArrow || $route.query.hiddenLeftArrow ? '返回' : ''"
      :left-arrow="!$route.meta.hiddenLeftArrow || $route.query.hiddenLeftArrow"
      @click-left="onClickLeft"
      class="shadowC !sticky top-0 !z-10"
    />
    <van-pull-refresh v-if="$route.meta.refresh" class="flex-1" v-model="loading" @refresh="onRefresh">
      <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="$route.fullPath" />
          </transition>
        </router-view>
      <!-- <router-view keep-alive :key="$route.fullPath"></router-view> -->
    </van-pull-refresh>
    <template v-else>
      <router-view v-slot="{ Component }" class="flex-1">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" :key="$route.fullPath" />
          </transition>
        </router-view>
      <!-- <router-view keep-alive :key="$route.fullPath" class="flex-1"></router-view> -->
    </template>

    <div v-show="$route.meta.tabbar" class="h-[50px] bg-gray-100 w-full"></div>
    <van-tabbar v-show="$route.meta.tabbar" route class="shadowC stacky bottom-0 !z-10">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/inquiry" icon="search">个人主页</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
.text-blue {
  color: blue !important;
}

.text-yellow {
  color: #ffab30 !important;
}

.text-red {
  color: red !important;
}

.text-green {
  color: green !important;
}

.shadowC {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.xCenter {
  @apply flex justify-center;
}

.yCenter {
  @apply flex items-center;
}

.center {
  @apply flex items-center justify-center;
}
</style>

<style scoped>
:deep(.van-nav-bar__text) {
  color: #ffab30 !important;
}
:deep(.van-icon-arrow-left) {
  color: #ffab30 !important;
}

:deep(.van-nav-bar__content) {
  display: sticky !important;
}
</style>
