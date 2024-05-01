<script setup>
import vxTable from "./vxTable.vue";
import { zujian, nbq, cjq, pdx } from "./deviceInfo";
const _ = makeForm({ zujian, nbq, cjq, pdx });
const query = getQuery();
const devices = ["ZUJIAN", "NBQ", "CJQ", "PDX", "ZLDL", "ZHIJIA"];
const active = ref(0);

onMounted(() => {
  getData();
});

async function getData() {
  const apis = await Promise.all(
    devices.map((d) => {
      return http.get(queryUrl("order/get-device", { ...query, deviceType: d }));
    })
  );
  const datas = lo.zipObject(
    devices,
    apis.map((a) => a.data)
  );
  backfill(_, datas);
}

async function submit() {
  await validate();
  const result = getParam();
  console.log(result);
}
</script>

<template>
  <van-tabs v-model:active="active" background="#f3f3f3" line-width="80px" color="#ffab30">
    <van-tab title="组件">
      <vantForm :form="_.zujian" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="组件" :slot="slot" />
        </template>
      </vantForm>
    </van-tab>
    <van-tab title="逆变器">
      <vantForm :form="_.nbq" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="逆变器" :slot="slot" />
        </template>
      </vantForm>
    </van-tab>
    <van-tab title="采集器">
      <vantForm :form="_.cjq" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="采集器" :slot="slot" />
        </template>
      </vantForm>
    </van-tab>
    <van-tab title="配电箱">
      <vantForm :form="_.pdx" class="pt-3" group-class="shadowC pb-2">
        <template #table="{ slot }">
          <vxTable title="配电箱" :slot="slot" />
        </template>
      </vantForm>
    </van-tab>
    <van-tab title="直流电缆"></van-tab>
    <van-tab title="支架"></van-tab>
  </van-tabs>
  <div class="flex justify-center mt-2">
    <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
  </div>
</template>
