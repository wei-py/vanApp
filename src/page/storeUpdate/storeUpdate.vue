<script setup>
import { newForm, hiddenColumns } from "./storeUpdate";
let _ = makeForm({ hiddenColumns });
const query = getQuery();
let formLen = ref(0);

async function getData() {
  let result = {};
  if (query.buttonText != "新增") {
    const { data } = await http.post("sto/list?pageNum=1&pageSize=100", {});
    formLen.value = data.records.length;
    const t = data.records.map((n, i) => {
      return lo.mapKeys(n, (v, k) => `${k}_${i + 1}`);
    });
    result = lo.merge(...t);
  } else {
    formLen.value = 1;
  }
  newForm(_, formLen.value);
  backfill(_, result);
}

onMounted(() => {
  getData();
});

eventManage({ getData });
</script>

<template>
  <template v-for="i in formLen">
    <vantForm :form="_[i]" class="pt-3" group-class="shadowC"> </vantForm>
  </template>
</template>

<style scoped lang="scss">
:deep(.van-cell) {
  width: 100% !important;
  padding: 13px 20px 13px 0 !important;
  // border-bottom: 1px solid #dbdbda !important;
}
:deep(.van-field__control) {
  width: 100% !important;
}

:deep(.van-field__body) {
  justify-content: center;
}
:deep(.van-field__label) {
  display: flex;
  justify-content: center !important;
  margin-right: 0 !important;
  width: 40% !important;
}
</style>
