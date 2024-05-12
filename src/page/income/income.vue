<script setup>
import { income } from "./income";
const query = getQuery();
const _ = makeForm({ income });

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}
</script>

<template>
  <div class="h-min-[100vh] bg-white">
    <vantForm :form="_.income" class="pt-3" group-class="shadowC"> </vantForm>
    <div class="flex justify-center mt-2">
      <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.van-cell) {
  width: 130% !important;
  padding: 13px 0px !important;
  border-bottom: 1px solid #dbdbda !important;
}
</style>