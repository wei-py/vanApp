<script setup>
import { gridConnectedMessageForm, zlwOtherFile, monitorForm, omnibearingShadowOcclusionForm, propertyInsuranceForm } from "./gridConnected";

let _ = makeForm({ gridConnectedMessageForm, zlwOtherFile, monitorForm, omnibearingShadowOcclusionForm, propertyInsuranceForm });
const query = getQuery();

onMounted(() => {
  runTime(getData);
});

async function getData() {
  const url = "/order/get-grid";
  const { data } = await http.get(queryUrl(url, query));
  backfill(_, { ...data, ...data.insuranceList[0] });
}

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}

eventManage({ getData });
</script>

<template>
  <vantForm :form="_.gridConnectedMessageForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.zlwOtherFile" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.monitorForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.omnibearingShadowOcclusionForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.propertyInsuranceForm" class="pt-3" group-class="shadowC"> </vantForm>

  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>

<style scoped></style>
