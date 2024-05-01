<script setup>
import { build } from "./build";
const _ = makeForm({ build });
const query = getQuery();

onMounted(() => {
  getData();
});

async function getData() {
  const { data } = await http.get(queryUrl("order/get-construction", { ...query }));
  backfill(_, data);
}

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}
</script>

<template>
  <vantForm :form="_.build" class="pt-3" group-class="shadowC"> </vantForm>
  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>
