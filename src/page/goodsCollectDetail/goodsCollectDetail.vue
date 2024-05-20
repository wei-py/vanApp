<script setup>
import VButton from "@/components/vButton.vue";
import { urlDic, impGoods, importImages, impDeviceInfo, impDeviceContent } from "./goodsCollectDetail";

let _ = makeForm({ impGoods, importImages, impDeviceInfo, impDeviceContent });

const tab = ref("ZUJIAN"); // 设备信息切换
const query = getQuery(); // 路由参数
const api = urlDic[(query.state ? "" : "no") + (query.acceptType ? "show" : "detail")][query.deliveryType] // 接口管理

async function getData() {
  const { data } = await http.get(`${api.getDataUrl}/${query.expId}`)
  backfill(_, data);
}

async function saveData() {
  const params = getParam();
  const { data } = await http.post(api.saveUrl, params)
  // try {
  //   const { data } = await http.post("/sto/export-base/add", params);
  //   setItem("expId", "value", data);
  // } catch (e) {
  //   setItem("deviceSlot", (v) => v.backfill(e.data, false));
  // }
  // return;
}

async function submitData() {
  await saveData();
  const params = getParam();
}

function changeTab(tab) {
  _.impDeviceContent[3].change(tab);
}

onMounted(() => {
  if (query.expId) {
    getData();
  } else {
    backfill(_, {});
  }
});

eventManage({ getData });
</script>

<template>
  <vantForm :form="_.impGoods" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.importImages" class="pt-3" group-class="shadowC"> </vantForm>

  <vantForm :form="_.impDeviceInfo" class="pt-3" group-class="shadowC">
    <template #deviceSlot="{ slot }">
      <van-tabs class="flex-1 flex flex-col" v-model:active="tab" background="#fff" line-width="80px" color="#ffab30" @change="changeTab">
        <van-tab v-for="t in slot.tabs" :title="t.title" :name="t.name" :key="t.name">
          <vantForm :form="_.impDeviceContent" class="m-0">
            <template #button="{ slot }">
              <div class="grid grid-cols-3 gap-2 p-2">
                <VButton @click="() => slot.add()" size="mini">添加</VButton>
                <VButton @click="() => slot.uniq()" size="mini" class="!bg-[red]">去重</VButton>
                <VButton @click="() => slot.reset()" size="mini" class="!bg-[gray]">重置</VButton>
              </div>
            </template>
            <template #table="{ slot }">
              <vxe-table :data="slot.data" align="center" header-align="center" max-height="400">
                <vxe-column type="seq" width="50" title="序号"></vxe-column>
                <vxe-column field="value" title="详细信息">
                  <template #default="{ row }">
                    <cell title="设备编码" :value="row.deviceId" />
                    <cell title="生产厂家" :value="row.manufacturer" />
                    <cell title="供应商" :value="row.supplier" />
                    <cell title="规格型号" :value="row.specificationsModel" />
                    <cell title="错误信息" :value="row.valid" titleClass="!text-[red] !w-auto !flex-none" valueClass="text-red" />
                  </template>
                </vxe-column>
                <vxe-column field="" title="操作" width="50">
                  <template #default="{ row }">
                    <van-icon name="cross" color="red" @click="slot.remove(row)" />
                  </template>
                </vxe-column>
              </vxe-table>
            </template>
          </vantForm>
        </van-tab>
      </van-tabs>
    </template>
  </vantForm>

  <div class="flex justify-evenly py-2">
    <vButton class="w-[30%]" @click="saveData">暂存</vButton>
    <vButton class="w-[30%]" @click="submitData">确认</vButton>
  </div>
</template>

<style scoped>
:deep(.m-0) .van-cell-group {
  margin: 0 !important;
}
</style>
