<script setup>
import {
  electricStationMaterialForm,
  trestleDistributionBoxForm,
  componentInstallationForm,
  wireRiggingForm,
  groundingSystemForm,
  inverterDistributionBoxForm,
  completionInspectionForm,
} from "./buildVideo";

let _ = makeForm({
  electricStationMaterialForm,
  trestleDistributionBoxForm,
  componentInstallationForm,
  wireRiggingForm,
  groundingSystemForm,
  inverterDistributionBoxForm,
  completionInspectionForm,
});
const query = getQuery();

onMounted(() => {
  runTime(getData);
  // getData();
});

async function getData() {
  const url = queryUrl("order/get-construction-images", { ...query });
  const { data } = await http.get(url);
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
  <vantForm :form="_.electricStationMaterialForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.trestleDistributionBoxForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.componentInstallationForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.wireRiggingForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.groundingSystemForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.inverterDistributionBoxForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.completionInspectionForm" class="pt-3" group-class="shadowC"> </vantForm>

  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>

<style scoped></style>
