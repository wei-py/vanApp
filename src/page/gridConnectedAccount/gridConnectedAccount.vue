<script setup>
import { gridConnectedAccount, receiptForm } from "./gridConnectedAccount.js";
const _ = makeForm({ gridConnectedAccount, receiptForm });
const query = getQuery();

onMounted(() => {
  getData();
});

async function getData() {
  let { data } = await http.get(queryUrl(`order/get-grid-settlement`, { orderId: query.orderId, type: 2 }));
  data = { ...data, settlementType: 2, approvalType: "APPROVAL_BTO" };
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  const data = await http.post("order/put-grid-settlement", params);
  return data;
}

async function submitData(params) {
  params.setType = 2;
  const { data } = await http.post(queryUrl(`approval/put-approval/bto/settle`, params));
}

async function approvalData(params) {
  params.setType = 2;
  const { data } = await http.post("approval/do-approval/bto/settle", params);
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.gridConnectedAccount" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.receiptForm" class="pt-3" group-class="shadowC"> </vantForm>

  <vBtn></vBtn>
</template>
