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
  

  <vBtn></vBtn>
</template>

<style scoped></style>
