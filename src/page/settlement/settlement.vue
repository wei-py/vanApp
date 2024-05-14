<script setup>
import { settlementForm } from "./settlement";

let _ = makeForm({ settlementForm });
const query = getQuery();

onMounted(() => {
  runTime(getData);
});

async function getData() {
  const url = "order/get-grid-settlement";
  const { data } = await http.get(queryUrl(url, { ...query, type: 1 }));
  data.settlementType = 1;
  backfill(_, data);
}

async function saveData() {
  await validate();
  const params = getParam();
  const resp = await http.post("order/put-grid-settlement", params);
  if (resp.code == 200) {
    const { data } = await http.post(queryUrl(`approval/put-approval/bto/settle`, { setType: "1", orderId: query.orderId }));
  }
}

eventManage({ getData, saveData });
</script>

<template>
  <vantForm :form="_.settlementForm" class="pt-3" group-class="shadowC"> </vantForm>

  <div class="xCenter pt-2">
    <van-button round block type="warning" @click="saveData" size="small" class="!w-[100px] !bg-[#ffab30]"> 提交 </van-button>
  </div>
</template>

<style scoped></style>
