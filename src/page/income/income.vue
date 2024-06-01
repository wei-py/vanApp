<script setup>
import { income } from "./income";
const query = getQuery();
const _ = makeForm({ income });

async function submit() {
  await validate();
  const result = lo.pick(getParam(), ["type", "startTime", "endTime"]);
  result.orderId = _.income[0].value
  const  data  = await http.post('order/get-customer-earnings', result)
  if (data.code == 200) {
    const value = data.data?.cashflowList[0] || list.cashflowList
    backfill(_, value)
  } else {
    showFailToast(data.msg)
  }
}

function reset() {
  location.reload();
}
</script>

<template>
  <div class="h-min-[100vh] bg-white px-[15px] flex-1 flex flex-col">
    <vantForm :form="_.income" class="pt-3" group-class="shadowC"> </vantForm>
    <div class="flex justify-between my-2 px-[70px] flex items-end flex-1 mb-[40px]">
      <van-button round block type="warning" size="small" @click="reset" class="!w-[100px] !bg-[#ffab30]"> 重置 </van-button>
      <van-button round block type="warning" size="small" @click="submit" class="!w-[100px] !bg-[#ffab30]"> 提交 </van-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.van-cell) {
  width: 130% !important;
  padding: 13px 0px !important;
  border-bottom: 1px solid #dbdbda !important;
}
:deep(.van-field__control) {
  width: 60% !important;
}
:deep(.van-field__label) {
  color: #6f6f6f !important;
}
</style>
