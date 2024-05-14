<script setup>
import vxTable from "./vxTable.vue";
import { zujian, nbq, cjq, pdx, zldl, zhijia } from "./deviceInfo";
const _ = makeForm({ zujian, nbq, cjq, pdx, zldl, zhijia });
const query = getQuery();
const deviceType = ["ZUJIAN", "NBQ", "CJQ", "PDX", "ZLDL", "ZHIJIA"];
const vBtnRef = deviceType.map((d) => templateRef(d));
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
  params.deviceType = flag.deviceInfoType;
  const { data } = await http.post("/order/put-device", params);
  if (flag.deviceInfoType == "CJQ") {
    const { data } = await http.post("/order/put-cjq-model", params);
  }
}

async function submitData(params) {
  params.taskId = `TASK_SBXX_${lo.upperCase(flag.deviceInfoType)}`;
  const { data } = await http.post(queryUrl(`/approval/put-approval/bto/construction`, params));
}

async function approvalData(params) {
  params.taskId = `TASK_SBXX_${lo.upperCase(flag.deviceInfoType)}`;
  const { data } = await http.post("approval/do-approval/bto/construction", params);
}

function changeTab(tab) {
  flag.deviceInfoType = tab;
  flag.btns = btns.value[tab];
  const idx = deviceType.findIndex((d) => d == tab);
  const dom = vBtnRef[idx];
  if (lo.isFunction(dom.value?.approvalBackfill)) {
    dom.value.approvalBackfill();
  }
}

eventManage({ getData, saveData, submitData, approvalData });
</script>

<template>
  <van-tabs
    class="flex-1 flex flex-col"
    v-model:active="flag.deviceInfoType"
    background="#f3f3f3"
    line-width="80px"
    color="#ffab30"
    @change="changeTab"
  >
    <van-tab title="组件" name="ZUJIAN">
      <vantForm :form="_.zujian" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="组件" :slot="slot" />
        </template>
      </vantForm>
      <vBtn ref="ZUJIAN"></vBtn>
    </van-tab>
    <van-tab title="逆变器" name="NBQ">
      <vantForm :form="_.nbq" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="逆变器" :slot="slot" />
        </template>
      </vantForm>
      <vBtn ref="NBQ"></vBtn>
    </van-tab>
    <van-tab title="采集器" name="CJQ">
      <vantForm :form="_.cjq" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="采集器" :slot="slot" />
        </template>
      </vantForm>
      <vBtn ref="CJQ"></vBtn>
    </van-tab>
    <van-tab title="配电箱" name="PDX">
      <vantForm :form="_.pdx" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="配电箱" :slot="slot" />
        </template>
      </vantForm>
      <vBtn ref="PDX"></vBtn>
    </van-tab>
    <van-tab title="直流电缆" name="ZLDL">
      <vantForm :form="_.zldl" class="pt-3" group-class="shadowC pb-2"> </vantForm>
      <vBtn ref="ZLDL"></vBtn>
    </van-tab>
    <van-tab title="支架" name="ZHIJIA">
      <vantForm :form="_.zhijia" class="pt-3" group-class="shadowC pb-2"> </vantForm>
      <vBtn ref="ZHIJIA"></vBtn>
    </van-tab>
  </van-tabs>
  <!-- <vBtn></vBtn> -->
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
<style>
:root {
  --van-popover-action-width: 250px !important;
}

.van-popover__action {
  width: auto !important;
}

.van-popover__content {
  max-height: 30vh;
  overflow-y: auto;
}
</style>
