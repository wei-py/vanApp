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

async function saveData() {
  const params = getParam();
  const { data } = await http.post("order/put-construction", params);
}

async function submitData(params) {
  params.taskId = "TASK_SGXX";
  const { data } = await http.post(queryUrl("/approval/put-approval/bto/construction", params));
}

async function approvalData(params) {
  params.taskId = 'TASK_SGXX'
  const { data } = await http.post('approval/do-approval/bto/construction', params)
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.build" class="pt-3" group-class="shadowC"> </vantForm>
  <vBtn></vBtn>
</template>
