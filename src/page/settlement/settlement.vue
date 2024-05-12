<script setup>
import { settlementForm } from "./settlement";

let _ = makeForm({ settlementForm });
const query = getQuery();

onMounted(() => {
  runTime(getData);
  // getData();
});

async function getData() {
  // const url = "/order/get-pre-approval";
  // const { data } = await http.get(queryUrl(url, query));
  // backfill(_, data);
}

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}

eventManage({ getData });
</script>

<template>
  <vantForm :form="_.settlementForm" class="pt-3" group-class="shadowC"> </vantForm>

  <vBtn></vBtn>
</template>

<style scoped></style>
