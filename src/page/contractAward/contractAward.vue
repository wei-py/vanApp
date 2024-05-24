<script setup>
import { contractAward, signedContractForm, signedSiteForm, button } from "./contractAward";
const _ = makeForm({ contractAward, signedContractForm, signedSiteForm, button });
const query = getQuery();

onMounted(() => {
  console.log(query);
  getData();
});

async function getData() {
  let url = isZZD() ? "order/get-lease-contract" : "order/org/get-contract";
  const { data } = await http.get(queryUrl(url, query));
  const btns = await http.get(`leaseContract/has-get-sign-btn`);
  backfill(_, { ...data, ...btns.data });
}
</script>

<template>
  <vantForm :form="_.contractAward" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.signedContractForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.signedSiteForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.button" class="pt-3" group-class="!bg-[#f8f8f8]"> </vantForm>
</template>
