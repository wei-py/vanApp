<script setup>
import { lessorInfo, bankInfo, certificateType, lesseeInfo, productWithArea } from "./customerInfo";
const _ = makeForm({ lessorInfo, bankInfo, certificateType, lesseeInfo, productWithArea });
const query = getQuery();

onMounted(() => {
  getData();
});

async function getData() {
  const url = isZZD_ORG().value ? "order/org/get-customer-info" : "order/get-customer-info";
  const { data } = await http.get(queryUrl(url, query));
  backfill(_, data);
  // forForm(form => {
  //   if (form.formType == 'cell' && form.readonly) {
  //     form.titleClass += ' !text-[#d5d6d8]'
  //   }
  //   form.readonly = true
  //   form.disabled = true
  //   form.required = false
  //   form.errorMessage = ''
  //   form.rightIcon = ''
  //   form.isLink = false
  //   form.clickRightIcon = () => {}
  // })
  // getsForm('*.formType', (v, p) => {
  //   if (v == 'upload') {
  //     p.deletable = false
  //   }
  // })
}

async function saveData() {
  const params = getParam();
  console.log(params);
  const url = isZZD_ORG().value ? "order/org/put-customer-info" : "order/put-customer-info";
  const { data } = await http.post(url, params);
}

async function submitData() {
  await validate();
  const { data } = await http.post(queryUrl('approval/put-approval/bto/customer', query));
}

async function approvalData(params) {
  const { data } = await http.post('approval/do-approval/bto/customer', params)
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.lessorInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.bankInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.certificateType" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.lesseeInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.productWithArea" group-class="shadowC" class="pt-3"> </vantForm>

  <vBtn></vBtn>
</template>
