<script setup>
import { basicInfoForm, zj, nbq, cjq, pdx, structureChartForm, electricalDiagramForm, billMaterials } from "./InitialReview";

const _ = makeForm({ basicInfoForm, zj, nbq, cjq, pdx, structureChartForm, electricalDiagramForm, billMaterials });
const query = getQuery();
let completeNbqPv = false;

onMounted(() => {
  runTime(getData);
  useTitle(query.title)
  // getData();
});

function openEdit() {
  const flag = useFlag()
  // flag.btns.canApproval = true
}

async function getData() {
  const url = queryUrl("order/get-design", { times: query.title == '初设评审信息' ? 0 : 100, ...query });
  const { data } = await http.get(url);
  completeNbqPv = data.completeNbqPv;
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  setItem("saveMaterial", (v) => {
    v.inlineForm[0].click(false);
  });
  const { data } = await http.post("order/put-design", params);
}

async function submitData(params) {
  params.completeNbqPv = completeNbqPv;
  if (!completeNbqPv) {
    showFailToast("设计组串数量中DC1和DC2是必填、是非零项");
    return;
  }
  const { data } = await http.post(queryUrl("approval/put-approval/bto/design", params));
}

async function approvalData(params) {
  const { data } = await http.post('approval/do-approval/bto/design', params)
}

eventManage({ getData, saveData, submitData, approvalData });
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

  <vBtn></vBtn>
</template>

<style>
.bg-disabled {
  background: #ddd !important;
}
.bg-yellow {
  background: #ffab30 !important;
}
</style>
