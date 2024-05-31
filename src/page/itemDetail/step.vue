<script setup>
const props = defineProps(["stepActive"]);


const orderh5 = location.port == 2222 ? "/orderh5" : "";
const status = ["预审", "客户信息", "勘察", "合同签约", "备案证", "初设评审", "施工", "并网", "结算", "购售电合同", "完成"];
const active = computed(() => {
  const idx = status.findIndex(n => n == props.stepActive)
  return idx
})
</script>

<template>
  <div class="overflow-x-scroll px-[17px]  !bg-[#ffab30] pt-[0vh]">
    <van-steps :active="active" class="w-[230vw] h-full my-auto">
      <van-step v-for="s in status" inactive-color="#ffffff" active-color="#07c160" active-icon="checked" inactive-icon="more">
        <p class="text-[16px]">{{ s }}</p>
        <template #inactive-icon>
          <van-icon :name="`.${orderh5}/icons/step/inactive.png`" />
          <!-- <p class="text-[16px]">{{ s }}</p> -->
        </template>
        <template #active-icon>
          <van-icon :name="`.${orderh5}/icons/step/active.png`" />
          <!-- <van-icon name="more" /> -->
          <!-- <p class="text-[16px]">{{ s }}</p> -->
          <!-- <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" /> -->
        </template>
        <template #finish-icon>
          <van-icon :name="`.${orderh5}/icons/step/finish.png`" />
          <!-- <p class="text-[16px]">{{ s }}</p> -->
          <!-- <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" /> -->
        </template>
      </van-step>
    </van-steps>
  </div>
</template>

<style scoped lang="scss">
:deep(.van-steps) {
  padding-left: 20px !important;
  background-color: #ffab30;
}

:deep(.van-step__title) {
  font-size: 16px;
  color: white;
  transform: translate(-39%, 230%) !important;
  
}

:deep(.van-step__circle-container) {
  /* display: none; */
  margin-top: 8px;
  background-color: #ffab30;
  * {
    color: white !important;
  }
}

:deep(.van-step__line) {
  margin-top: 5px;
  background-color: white !important;
}

:deep(.van-step__circle) {
  background-color: white !important;
}

:deep(.van-icon) {
  font-size: 18px;
  /* display: none; */
}
:deep(.van-step__title) {
  .van-icon {
    font-size: 30px !important;
  }
  p {
    margin-right: -15px !important;
  }
}
</style>