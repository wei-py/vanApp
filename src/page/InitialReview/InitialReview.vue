<script setup>
import designGroup from "./designGroup.vue";
import { basicInfoForm, zj, nbq, cjq, pdx, structureChartForm, electricalDiagramForm, billMaterials, show } from "./InitialReview";

const _ = makeForm({ basicInfoForm, zj, nbq, cjq, pdx, structureChartForm, electricalDiagramForm, billMaterials, show });
const query = getQuery();
const designGroupDom = ref(null);
// let completeNbqPv = false;

onMounted(() => {
  runTime(getData);
  useTitle(query.title);
  // getData();
});

function openEdit() {
  const flag = useFlag();
  // flag.btns.canApproval = true
}

async function getData() {
  const url = queryUrl("order/get-design", { times: query.title == "初设评审信息" ? 0 : 100, ...query });
  const { data } = await http.get(url);
  // completeNbqPv = data.completeNbqPv;
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  setItem("saveMaterial", (v) => {
    v.inlineForm[0].click(false);
  });
  const data = await http.post("order/put-design", params);
  return data;
}

async function submitData(params) {
  params.completeNbqPv = getItem("completeNbqPv", "value");
  if (!params.completeNbqPv) {
    showFailToast("设计组串数量中DC1和DC2是必填、是非零项");
    return;
  }
  const { data } = await http.post(queryUrl("approval/put-approval/bto/design", params));
}

async function approvalData(params) {
  const { data } = await http.post("approval/do-approval/bto/design", params);
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <vantForm :form="_.basicInfoForm" class="pt-3" group-class="shadowC">
    <template #title="{ slot }">
      <van-cell title-class="!text-[20px] bg-[#fff] pl-[20px] flex items-center  text-[#232323]" class="!bg-[#fff] !p-0 h-[50px] !pr-[20px]">
        <template #title>
          {{ slot.title }}
        </template>
        <template #value>
          <div class="flex justify-end">
            <van-button
              v-if="slot.show"
              round
              block
              size="mini"
              class="!text-[14px] !w-[120px] !py-3 !bg-[#ddd] !border-0 !text-[white]"
              @click="() => slot.click()"
            >
              设计变更记录
            </van-button>
          </div>
        </template>
      </van-cell>
    </template>
  </vantForm>
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

  <!-- :style="{ width: '100%', height: '100%' }" -->
  <van-popup v-model:show="_.show[0].value" position="right" class="w-full h-full" >
    <van-nav-bar title="设计组串数量" left-text="返回" @clickLeft="_.show[0].value = false" />
    <designGroup ref="designGroupDom" :query="_.show[0].query" />
  </van-popup>

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
