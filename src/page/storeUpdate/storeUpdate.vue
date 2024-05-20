<script setup>
import { newForm } from "./storeUpdate";
const _ = makeForm({});
let formLen = ref(0);

async function getData() {
  const { data } = await http.post("sto/list?pageNum=1&pageSize=100", {});
  formLen.value = data.records.length;
  newForm(_, formLen.value);
  const t = data.records.map((n, i) => {
    return lo.mapKeys(n, (v, k) => `${k}_${i + 1}`);
  });
  const result = lo.merge(...t);
  console.log(_)
  // console.log(data.records);
  // backfill(_, result);
  // console.log(result);
}

onMounted(() => {
  getData();
});
</script>

<template>
  <template v-for="i in formLen">
    <vantForm :form="_[i]" class="pt-3" group-class="shadowC"> </vantForm>
  </template>
</template>
