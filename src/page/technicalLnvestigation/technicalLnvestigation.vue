<script setup>
import {
  reconnaissanceUserForm,
  basicMessageForm,
  aerophotographForm,
  inverterPositionForm,
  distributionBoxPositionForm,
  junctionLocationForm,
} from "./technicalLnvestigation";
const _ = makeForm({
  reconnaissanceUserForm,
  basicMessageForm,
  aerophotographForm,
  inverterPositionForm,
  distributionBoxPositionForm,
  junctionLocationForm,
});

onMounted(() => {
  getData();
});

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}

async function getData() {
  const url = queryUrl("order/get-tec-kancha", { orderId: getQuery()?.orderId });
  const { data } = await http.get(url);
  backfill(_, { ...data, ...data.appointUser });
}
</script>

<template>
  <vantForm :form="_.reconnaissanceUserForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.basicMessageForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.aerophotographForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.inverterPositionForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.distributionBoxPositionForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.junctionLocationForm" class="pt-3" group-class="shadowC"> </vantForm>

  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>
