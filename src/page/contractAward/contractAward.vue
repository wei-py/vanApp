<script setup>
import { contractAward, signedContractForm, signedSiteForm, bothSignedContractForm, button } from "./contractAward";
const _ = makeForm({ contractAward, signedContractForm, signedSiteForm, bothSignedContractForm, button });
const query = getQuery();

onMounted(() => {
  getData();
});

async function getData() {
  let url = "";
  if (lo.isUndefined(query, "online")) {
    url = isZZD() ? "order/get-lease-contract" : "order/org/get-contract";
  } else {
    url = query.online ? "general-investor/get-online-sign-rent-contract" : "general-investor/get-offline-sign-rent-contract";
  }
  const data = await http.get(queryUrl(url, lo.omit(query, "title")));
  const btns = await http.get(`leaseContract/has-get-sign-btn`);

  backfill(_, { ...data, ...btns.data });
}

async function saveData() {}

async function onRefresh() {
  location.reload();
}

eventManage({ onRefresh });
</script>

<template>
  <vantForm :form="_.contractAward" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.signedContractForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.bothSignedContractForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.signedSiteForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.button" class="pt-3" group-class="!bg-[#f8f8f8]"> </vantForm>
</template>
