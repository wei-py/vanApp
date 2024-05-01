<script setup>
import { certificate } from "./certificate";
const _ = makeForm({ certificate });

onMounted(() => {
  runTime(getData)
  // ();
});

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}

async function getData() {
  const url = queryUrl("order/get-record", { orderId: getQuery()?.orderId });
  const {data} = await http.get(url)
  backfill(_, data)
}
</script>

<template>
  <vantForm :form="_.certificate" class="pt-3" group-class="shadowC"> </vantForm>
  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>


<style>
:root {
  --van-popover-action-width: 250px !important;
}

.van-popover__action{
  width: auto !important;
}

.van-popover__content {
  max-height: 30vh;
  overflow-y: auto;
}
</style>