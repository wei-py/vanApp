<script setup>
import { lessorInfo, bankInfo, certificateType, lesseeInfo, productWithArea, cardBuckle, salemanInfo, urls } from "./customerInfo";
const _ = makeForm({ lessorInfo, bankInfo, certificateType, lesseeInfo, productWithArea, cardBuckle, salemanInfo });
const query = getQuery();
let orderId = "";

onMounted(() => {
  getData();
});

async function getData() {
  if (query.orderId) {
    const url = urls.getData[viewOrg()];
    const { data } = await http.get(queryUrl(url, query));
    backfill(_, { ...data, ...(data.regImages || {}) });
  } else {
    const data = await http.get("/order/create-orderId");
    orderId = data.data;
    // query.orderId = orderId;
    // router.replace({ path: "/customerInfo", query: {...query, orderId} });
    backfill(_, { btns: { canSave: true, canEdit: true, hasEditBtn: true } });
  }

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
  const params = await getParam();
  params.orderId = params.orderId || orderId;
  console.log(params.orderId, 'roder')

  const url = urls.saveData[viewOrg()];
  const data = await http.post(url, params);
  if (!query.orderId) {
    query.orderId = orderId;
    location.hash += '&orderId=' + orderId
    return;
  }

  // return data;
}

async function submitData() {
  await validate();
  const { data } = await http.post(queryUrl("approval/put-approval/bto/customer", query));
}

async function approvalData(params) {
  const { data } = await http.post("approval/do-approval/bto/customer", params);
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.lessorInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.bankInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.certificateType" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.lesseeInfo" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.productWithArea" group-class="shadowC" class="pt-3"> </vantForm>
  <vantForm :form="_.cardBuckle" group-class="shadowC" class="pt-3">
    <template #cardBukle="{ slot }">
      <van-tabs
        v-if="slot.show"
        v-model:active="slot.tab"
        line-width="0"
        :ellipsis="false"
        title-active-color="#ffab30"
        @change="(tab) => slot.onChangeTab(tab)"
      >
        <van-tab v-for="t in slot.tabs" :title="t.title">
          <vantForm :form="t.inlineForm" group-class="shadowC !mx-0" class="pt-3"></vantForm>
        </van-tab>
      </van-tabs>
    </template>
  </vantForm>
  <vantForm :form="_.salemanInfo" group-class="shadowC" class="pt-3"> </vantForm>

  <vBtn></vBtn>
</template>
