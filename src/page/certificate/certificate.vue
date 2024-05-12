<script setup>
import { certificate } from "./certificate";
const _ = makeForm({ certificate });

onMounted(() => {
  runTime(getData);
  // ();
});

async function getData() {
  const url = queryUrl("order/get-record", { orderId: getQuery()?.orderId });
  const { data } = await http.get(url);
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  const { data } = await http.post("order/put-record", params);
}

async function submitData(params) {
  const { data } = await http.post(queryUrl("approval/put-approval/bto/record", params));
}

async function approvalData(params) {
  const { data } = await http.post('approval/do-approval/bto/record', params)
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.certificate" class="pt-3" group-class="shadowC"> </vantForm>

  <vBtn></vBtn>
</template>

<style>
:root {
  --van-popover-action-width: 250px !important;
}

.van-popover__action {
  width: auto !important;
}

.van-popover__content {
  max-height: 30vh;
  overflow-y: auto;
}
</style>
