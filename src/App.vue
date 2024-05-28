<script setup>
import overlay from "@/components/overlay.vue";
const loading = ref(false); // 下拉刷新加载
const flag = useFlag();
const query = getQuery();
const event = useEvent();
// const tab = ref(0);

function onClickLeft() {
  // 返回事件
  router.go(-1);
}

 function onClickRight() {
  event.onClickRight()
  // console.log(router.currentRoute)
}

function onChange(t) {
  if (t) {
    router.push("/person");
  } else {
    const companyName = getCompany().name;
    router.push({
      path: "/home",
      query: {
        title: "当前组织：" + companyName,
      },
    });
  }
  // replace to="/person"
  // replace :to="`/home?title=当前组织：+` + companyName"
}

async function onRefresh() {
  // location.reload()
  // 下拉刷新事件
  await event.onRefresh();
  // loading.value = false;
}

onMounted(async () => {
  // title.value = useTitle()
  // console.log(useTitle(), 3333333)
  // login();
});

window.addEventListener("beforeunload", clearStore);
window.removeEventListener("beforeunload", clearStore);

router.beforeResolve((to, from) => {
  if (from.path == "/loginPage") {
    tab.value = 0;
  }
});

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
  // const flag = useFlag();
  flag.statusDic = { ...statusDic.state, ...statusDic.stage, ...statusDic.task };
}
</script>

<template>
  <van-config-provider class="flex flex-col min-h-screen">
    <overlay></overlay>
    <PhotoPreview></PhotoPreview>
    <van-nav-bar
      v-show="$route.query.title || $route.meta.title"
      :title="$route.query.title || $route.meta.title"
      :left-text="!$route.meta.hiddenLeftArrow || $route.query.hiddenLeftArrow ? '返回' : ''"
      :right-text="$route.meta.rightText || ''"
      :left-arrow="!$route.meta.hiddenLeftArrow || $route.query.hiddenLeftArrow"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="shadowC !sticky top-0 !z-10"
      :class="[$route.meta.title == '首页' && 'homeClass']"
    />
    <van-pull-refresh v-if="$route.meta.refresh" class="flex-1 flex flex-col" v-model="loading" @refresh="onRefresh">
      <!-- <router-view v-slot="{ Component }" class="flex-1">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view> -->
      <Suspense>
        <div class="flex-1 bg-[#f3f3f3] flex flex-col">
          <router-view :key="$route.fullPath" v-slot="{ Component }">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </router-view>
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
        <div class="flex-1 flex flex-col bg-gray-100">
          <router-view :key="$route.fullPath" v-slot="{ Component }">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </router-view>
          <!-- <router-view :key="$route.fullPath"></router-view> -->
        </div>
      </Suspense>
    </template>

    <div v-show="$route.meta.tabbar" class="h-[50px] bg-gray-100 w-full"></div>
    <van-tabbar v-show="$route.meta.tabbar" v-model="flag.tabbar" class="shadowC stacky bottom-0 !z-10" @change="onChange" active-color="#ffab30">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <div class="w-[20%]"></div>
      <!-- <van-tabbar-item icon=""></van-tabbar-item> -->
      <van-tabbar-item icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </van-config-provider>
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
.van-uploader__mask {
  width: 80px !important;
  border-radius: 8px !important;
  height: 80px !important;
}

.van-uploader__preview-delete-icon {
  font-size: 18px !important;
}
.homeClass {
  @apply py-1;
  // .van-nav-bar__content {
  //   @apply w-[100vw];
  // }
  .van-nav-bar__title {
    @apply m-0 ml-[24px] font-normal w-[100vw] overflow-visible;
  }
}
</style>

<style>
/* .van-field__control:disabled {
  color: #323232 !important;
  -webkit-text-fill-color: #323232 !important;
} */
.van-badge__wrapper {
  display: inline-flex !important;
  align-items: center !important;
}

.van-field--disabled .van-field__label {
  label {
    color: #323232 !important;
    -webkit-text-fill-color: #323232 !important;
  }
}

.van-uploader__input {
  width: 80px !important;
  height: 80px !important;
}
.van-cell__right-icon {
  margin: auto 0;
}
label {
  /* margin: auto; */
}
.van-uploader__preview {
  /* margin-top: 8px !important; */
  margin: 8px 8px 0 !important;
}

.van-uploader__wrapper--disabled {
  opacity: 1 !important;
}
.van-uploader__wrapper {
  margin: 0 !important;
  min-height: 98px !important;
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

/*.van-field__error-message {
  margin: auto !important;
  text-align: center !important;
}*/

.van-picker-column__item {
  .van-ellipsis {
    overflow: none;
    white-space: wrap;
    text-align: center;
  }
}

.\!w-\[50\%\] {
  width: 50% !important;
}

.\!w-\[100\%\] {
  width: 100% !important;
}

.van-toast {
  width: none !important;
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

:deep(.vxe-table--render-default .vxe-table--border-line) {
  border: none !important;
}

:deep(.van-field__left-icon) {
  @apply my-auto mx-auto mr-2;
}
</style>
