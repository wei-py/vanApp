<script setup>
import { form, modifyForm } from "./person";
const _ = makeForm({ form, modifyForm });
const flag = useFlag();

onMounted(() => {
  backfill(_, {});
  // flag.active = 1;
  // console.log(flag.active)
});

function onLogout() {
  router.replace("/login");
}
</script>

<template>
  <div class="flex-1 bg-[#fbf9f6]">
    <div class="xCenter pt-[10%] text-[20px] text-white bgImg h-[30vh]">个人中心</div>
    <vantForm :form="_.form" class="pt-3 mx-3 mt-[-15vh]" group-class="shadowC "> </vantForm>
    <VanPopup v-model:show="_.modifyForm[0].show" class="!w-[90%] !mt-[-20%]" round position="center">
      <vantForm :form="_.modifyForm" group-class="shadowC">
        <template #tabs="{ slot }">
          <van-tabs class="flex-1 flex flex-col" v-model:active="slot.tab" background="#f3f3f3" line-width="80px" color="#ffab30" swipeable>
            <van-tab v-for="t in slot.tabs" :title="t" :key="t"></van-tab>
          </van-tabs>
        </template>
      </vantForm>
    </VanPopup>
    <div class="xCenter mt-8 mx-7">
      <vButton class="w-full" @click="onLogout">退出登录</vButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.bgImg) {
  background: url("/background/login.png") center !important;
  border-bottom-right-radius: 50% 25% !important;
  border-bottom-left-radius: 50% 25% !important;
}
</style>
