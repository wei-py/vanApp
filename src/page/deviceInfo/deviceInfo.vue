<script setup>
import vxTable from "./vxTable.vue";
import { zujian, nbq, cjq, pdx } from "./deviceInfo";
const _ = makeForm({ zujian, nbq, cjq, pdx });
const query = getQuery();
const deviceType = ["ZUJIAN", "NBQ", "CJQ", "PDX", "ZLDL", "ZHIJIA"];
const active = ref("ZUJIAN");
const btns = ref({});
const flag = useFlag();

onMounted(() => {
  getData();
});

async function getData() {
  const datas = {};
  for (const d of deviceType) {
    const { data } = await http.get(queryUrl("order/get-device", { ...query, deviceType: d }));
    datas[d] = data;
    btns.value[d] = data.btns;
  }
  backfill(_, datas);
  changeTab("ZUJIAN");
}

async function saveData() {
  const params = getParam();
  const { data } = await http.post("/order/put-device", params);
}

async function submitData(params) {
  params.taskId = `TASK_SBXX_${lo.upperCase(active.value.name)}`
  console.log(params, 333)
}

async function approvalData() {}

function changeTab(tab) {
  active.value = tab;
  flag.btns = btns.value[tab];
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <van-tabs class="flex-1 flex flex-col" v-model:active="active" background="#f3f3f3" line-width="80px" color="#ffab30" @change="changeTab" swipeable>
    <van-tab title="组件" name="ZUJIAN">
      <vantForm :form="_.zujian" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="组件" :slot="slot" />
        </template>
      </vantForm>
      <vBtn></vBtn>
    </van-tab>
    <van-tab title="逆变器" name="NBQ">
      <vantForm :form="_.nbq" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="逆变器" :slot="slot" />
        </template>
      </vantForm>
      <vBtn></vBtn>
    </van-tab>
    <van-tab title="采集器" name="CJQ">
      <vantForm :form="_.cjq" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="采集器" :slot="slot" />
        </template>
      </vantForm>
      <vBtn></vBtn>
    </van-tab>
    <van-tab title="配电箱" name="PDX">
      <vantForm :form="_.pdx" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="配电箱" :slot="slot" />
        </template>
      </vantForm>
      <vBtn></vBtn>
    </van-tab>
    <van-tab title="直流电缆" name="ZLDL"> 直流电缆 </van-tab>
    <van-tab title="支架" name="ZHIJIA"> 支架 </van-tab>
  </van-tabs>
</template>


<style scoped>
:deep(.van-tabs__content) {
  flex: 1 1 0 !important;
  overflow: auto !important;
}

:deep(.van-tab__panel-wrapper) {
  overflow: auto !important;
}
</style>