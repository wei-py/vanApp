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
const flag = useFlag();

onMounted(() => {
  getData();
});

async function submit() {
  await validate();
  const result = getParam();
}

async function getData() {
  const url = queryUrl("order/get-tec-kancha", { orderId: getQuery()?.orderId });
  const { data } = await http.get(url);
  backfill(_, { ...data, ...data.appointUser });

  // orderBase.value = data.data.orderBase;
}

async function saveData() {
  const params = getParam();
  const { data } = await http.post("order/put-tec-kancha", params);
}

async function submitData(params) {
  const { data } = await http.post(queryUrl("approval/put-approval/bto/tec-takan", params));
}

async function approvalData(params) {
  const { data } = await http.post('approval/do-approval/bto/tec-takan', params)
}

eventManage({ saveData, getData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.reconnaissanceUserForm" class="pt-3" group-class="shadowC"> </vantForm>

  <div v-if="$get(flag, 'orderState.stateId') != 'WAITING_APPOINT'">
    <vantForm :form="_.basicMessageForm" class="pt-3" group-class="shadowC"> </vantForm>
    <vantForm :form="_.aerophotographForm" class="pt-3" group-class="shadowC"> </vantForm>
    <vantForm :form="_.inverterPositionForm" class="pt-3" group-class="shadowC"> </vantForm>
    <vantForm :form="_.distributionBoxPositionForm" class="pt-3" group-class="shadowC"> </vantForm>
    <vantForm :form="_.junctionLocationForm" class="pt-3" group-class="shadowC"> </vantForm>
  </div>

  <vBtn></vBtn>
</template>
