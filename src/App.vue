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

onMounted(async () => {
  // login();
});

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
    <PhotoPreview></PhotoPreview>
    <van-nav-bar
      v-show="$route.query.title || $route.meta.title"
      :title="$route.query.title || $route.meta.title"
      :left-text="!$route.meta.hiddenLeftArrow || $route.query.hiddenLeftArrow ? '返回' : ''"
      :left-arrow="!$route.meta.hiddenLeftArrow || $route.query.hiddenLeftArrow"
      @click-left="onClickLeft"
      class="shadowC !sticky top-0 !z-10"
    />
    <van-pull-refresh v-if="$route.meta.refresh" class="flex-1 flex flex-col" v-model="loading" @refresh="onRefresh">
      <!-- <router-view v-slot="{ Component }" class="flex-1">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view> -->
      <Suspense>
        <div class="flex-1 bg-[#f3f3f3]">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </Suspense>
    </van-pull-refresh>
    <template v-else>
      <!-- <router-view v-slot="{ Component }" class="flex-1">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view> -->
      <Suspense>
        <div class="flex-1">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </Suspense>
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
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
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

.van-uploader__upload {
  margin: 8px !important;
  border-radius: 8px !important;
  border: 1px dashed #dee0e2;
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}
.van-uploader__preview-delete--shadow {
  height: 18px !important;
  width: 18px !important;
}

.van-uploader__preview-delete-icon {
  font-size: 18px !important;
}
</style>

<style>
.van-cell__right-icon {
  margin: auto 0;
}
label {
  /* margin: auto; */
}
.van-uploader__preview {
  margin: 4px !important;
}
.van-uploader__wrapper {
  margin: 0 !important;
  justify-content: center;
  /* height: 100px;
  width: 100px;
  margin-bottom: 10px;
  .van-uploader__preview {
    height: 100% !important;
    width: 100% !important;
  }
  .van-uploader__preview-image {
    height: 100% !important;
    width: 100% !important;
  }
  .van-uploader__upload {
    height: 100% !important;
    width: 100% !important;
  } */
}
/* .van-cascader__tabs {
  flex: 1;
} */

.van-cascader__options {
  height: 80vh !important;
}

.van-uploader__preview-image {
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important; */
  border-radius: 8px !important;
}
.van-uploader__file {
  border-radius: 8px !important;
}
.van-uploader__preview-delete {
  border-top-right-radius: 8px !important;
}

.van-cell__value {
  margin: auto 0;
}

.van-uploader__preview-cover {
  /* border-radius: 8px !important;
  border: 1px dashed #dee0e2; */
}
.van-field__label {
  margin: auto;
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

:deep(.van-pull-refresh__track) {
  @apply flex-1 flex flex-col;
}

:deep(.van-field__label) {
  flex: none !important;
}
</style>
