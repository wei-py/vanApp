<script setup>
const active = ref("");
const status = ["预审", "客户信息", "勘察", "合同签约", "备案证", "初设评审", "施工", "并网", "结算", "购售电合同", "完成"];
</script>

<template>
  <div class="overflow-x-scroll px-[17px] !bg-[#ffab30] pt-[3.2vh]">
    <van-steps :active="3" class="w-[200vw]">
      <van-step v-for="s in status" inactive-color="#ffffff" active-color="#07c160" active-icon="checked" inactive-icon="more">
        <p class="text-[16px]">{{ s }}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<style scoped lang="scss">
:deep(.van-steps) {
  background-color: #ffab30;
}

:deep(.van-step__title) {
  font-size: 16px;
  color: white;
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
  margin-top: 8px;
  background-color: white !important;
}

:deep(.van-step__circle) {
  background-color: white !important;
}

:deep(.van-icon) {
  font-size: 18px;
  /* display: none; */
}
</style>
