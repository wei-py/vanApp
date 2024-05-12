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

async function saveData(){
  const params = getParam()
  const url = '/order/put-construction-images'
  const { data } = await http.post(url, params)
}

async function submitData(params) {
  params.taskId = 'TASK_SGYXJXX'
  const { data } = await http.post(queryUrl('approval/put-approval/bto/construction', params))
  console.log(params, 333333)
}

async function approvalData(params) {
  params.taskId = 'TASK_SGYXJXX'
  const { data } = await http.post('approval/do-approval/bto/construction', params)
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.electricStationMaterialForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.trestleDistributionBoxForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.componentInstallationForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.wireRiggingForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.groundingSystemForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.inverterDistributionBoxForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.completionInspectionForm" class="pt-3" group-class="shadowC"> </vantForm>

  <vBtn></vBtn>
</template>

<style scoped></style>
