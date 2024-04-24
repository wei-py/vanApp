<script setup>
import {
  inquiry,
  itemDetail,
  survey,
  contractSign,
  record,
  initReview,
  build,
  grid,
  ZYsettlement,
  DLSsettlement,
  electricityContract,
  income,
} from "./itemDetail.js";

let _ = makeForm({
  inquiry,
  itemDetail,
  survey,
  contractSign,
  record,
  initReview,
  build,
  grid,
  ZYsettlement,
  DLSsettlement,
  electricityContract,
  income,
});

const query = getQuery();

async function getData() {
  const { data } = await http.post(`/order/search`, { queryTag: query.orderId, orderId: query.orderId });

  gets(data, "*.currentOrderState.0", (v) => {
    const orderId = v.orderId;
    const stateId = v.stateId;
    // const inputId = lo.get(v, 'leaseReview.contractNumber', '-')
    console.log(v.orderId, orderId, stateId);
  });

  // 各个阶段的状态
  gets(data, "*.orderStates", (v) => {
    // console.log(v)
  });
}

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="bg-[#f3f3f3] min-h-[100vh] py-[10px]">
    <vantForm :form="_.inquiry" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.survey" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.contractSign" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.record" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.initReview" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.build" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.grid" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.electricityContract" group-class="itemDetailGrop"></vantForm>
    <vantForm :form="_.income" group-class="itemDetailGrop"></vantForm>
  </div>
</template>

<style>
.itemDetailGrop {
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important; */
  margin-bottom: 10px;
}
</style>
