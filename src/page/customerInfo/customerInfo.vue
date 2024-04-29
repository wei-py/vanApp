<script setup>
import { lessorInfo, bankInfo,certificateType, lesseeInfo, productWithArea } from "./customerInfo";
const _ = makeForm({ lessorInfo, bankInfo,certificateType,lesseeInfo, productWithArea });
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

async function submit() {
  // await validate();
  const result = getParam();
  console.log(result);
}
</script>

<template>
  <vantForm :form="_.lessorInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.bankInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.certificateType" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.lesseeInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.productWithArea" group-class="shadowC" class="pt-3"> </vantForm>
  
  

  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>
