<script setup>
import { reconnaissanceUserForm,basicMessageForm } from "./technicalLnvestigation";
const _ = makeForm({ reconnaissanceUserForm,basicMessageForm });

onMounted(() => {
  getData();
});

async function getData() {
  const url = queryUrl("order/get-tec-kancha", { orderId: getQuery()?.orderId });
  const { data } = await http.get(url);
  backfill(_, { ...data, ...data.appointUser });
}
</script>

<template>
  <vantForm :form="_.reconnaissanceUserForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.basicMessageForm" class="pt-3" group-class="shadowC"> </vantForm>
  
</template>
