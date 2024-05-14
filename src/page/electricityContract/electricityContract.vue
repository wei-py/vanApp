<script setup>
import { electricityContractForm, contractForm } from "./electricityContract";

let _ = makeForm({ electricityContractForm, contractForm });
const query = getQuery();

onMounted(() => {
  runTime(getData);
  // getData();
});

async function getData() {
  const url = "order/get-gs-elec-contract";
  const { data } = await http.get(queryUrl(url, query));
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  const { data } = await http.post("order/put-gs-elec-contract", params);
}

async function submitData(params) {
  params.taskId = "TASK_GSDHTXX";
  const { data } = await http.post(queryUrl(`approval/put-approval/bto/gs-elec-contract`, params));
}

async function approvalData(params) {
  params.taskId = 'TASK_GSDHTXX'
  const { data } = await http.post(`approval/do-approval/bto/gs-elec-contract`, params)
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.electricityContractForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.contractForm" class="pt-3" group-class="shadowC"> </vantForm>

  <vBtn></vBtn>
</template>

<style scoped></style>
