<script setup>
import { basicInfoForm, zj, nbq, cjq, pdx, structureChartForm, electricalDiagramForm, billMaterials } from "./InitialReview";

const _ = makeForm({ basicInfoForm, zj, nbq, cjq, pdx, structureChartForm, electricalDiagramForm, billMaterials });
const query = getQuery();

onMounted(() => {
  runTime(getData)
  // getData();
});

async function getData() {
  const url = queryUrl("order/get-design", { times: 0, ...query });
  const { data } = await http.get(url);
  backfill(_, data);
}

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}
</script>

<template>
  <vantForm :form="_.basicInfoForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.zj" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.nbq" class="pt-3" group-class="shadowC pb-9">
    <template #table-nbq="{ slot }">
      <vxe-table :data="slot.value" align="center" header-align="center">
        <vxe-column type="seq" width="60" title="序号"></vxe-column>
        <vxe-column field="deviceSpec" title="规格型号"></vxe-column>
        <vxe-column field="quantity" title="个数" width="60"></vxe-column>
        <vxe-column field="" title="操作" width="60">
          <template #default="{ row }">
            <van-icon name="cross" color="red" @click="slot.remove(row)" />
          </template>
        </vxe-column>
      </vxe-table>
    </template>
  </vantForm>
  <vantForm :form="_.cjq" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.pdx" class="pt-3" group-class="shadowC pb-9">
    <template #table-pdx="{ slot }">
      <vxe-table :data="slot.value" align="center" header-align="center">
        <vxe-column type="seq" width="60" title="序号"></vxe-column>
        <vxe-column field="deviceSpec" title="规格型号"></vxe-column>
        <vxe-column field="quantity" title="个数" width="60"></vxe-column>
        <vxe-column field="" title="操作" width="60">
          <template #default="{ row }">
            <van-icon name="cross" color="red" @click="slot.remove(row)" />
          </template>
        </vxe-column>
      </vxe-table>
    </template>
  </vantForm>
  <vantForm :form="_.structureChartForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.electricalDiagramForm" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.billMaterials" class="pt-3" group-class="shadowC"> </vantForm>

  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>

<style>
.bg-disabled {
  background: #ddd !important;
}
.bg-yellow {
  background: #ffab30 !important;
}
</style>
