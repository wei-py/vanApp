<script setup>
import { electricityContractForm, contractForm } from "./electricityContract";

let _ = makeForm({ electricityContractForm ,contractForm});
const query = getQuery();

onMounted(() => {
  runTime(getData);
  // getData();
});

async function getData() {
  const url = 'order/get-gs-elec-contract'
  const { data } = await http.get(queryUrl(url, query));
  backfill(_, data);
}

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}

eventManage({ getData });
</script>

<template>
  <vantForm :form="_.electricityContractForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.contractForm" class="pt-3" group-class="shadowC"> </vantForm>
  

  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>

<style scoped></style>
