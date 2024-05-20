<script setup>
import { form, tableForm } from "./goodsInventory";
const _ = makeForm({ form, tableForm });
const tab = ref("ZUJIAN");
const query = getQuery();

// function getData() {
//   backfill(_, {});
// }

onMounted(() => {
  backfill(_, {});
  setItem("tabs", (v) => v.changeTab("ZUJIAN"));
  // getData();
});
</script>

<template>
  <vantForm :form="_.form" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.tableForm" class="pt-3" group-class="shadowC">
    <template #tabs="{ slot }">
      <van-tabs
        class="flex-1 flex flex-col pb-3"
        v-if="!slot.hidden"
        v-model:active="tab"
        background="#fff"
        line-width="80px"
        color="#ffab30"
        @change="(tab) => slot.changeTab(tab)"
      >
        <van-tab v-for="t in slot.tabs" :title="t.title" :name="t.name" :key="t.name">
          <vxe-table :data="t.header" align="center" header-align="center" max-height="400" headerRowClassName="bg-[#ffab30] text-white">
            <vxe-column field="amount" title="物料名称" width="25%">
              <template #default="{ row }">
                {{ t.title }}
              </template>
            </vxe-column>
            <vxe-column field="value" title="详细信息">
              <template #default="{ row }">
                <cell title="数量" :value="row.amount + ' 块'" />
                <cell title="规格" :value="row.specificationsModel" />
                <cell title="厂家" :value="row.manufacturer" />
              </template>
            </vxe-column>
          </vxe-table>

          <vxe-table :data="t.data" align="center" header-align="center" max-height="400" headerRowClassName="bg-[#ffab30] text-white" class="mt-5">
            <vxe-column type="seq" width="50" title="序号"></vxe-column>
            <vxe-column field="value" title="详细信息">
              <template #default="{ row }">
                <cell title="设备编号" :value="row.deviceId" />
                <cell title="生产厂家" :value="row.manufacturer" />
                <cell title="供应商" :value="row.supplier" />
                <cell title="规格型号" :value="row.specificationsModel" />
                <cell title="错误信息" :value="row.valid" titleClass="!text-[red] !w-auto !flex-none" valueClass="text-red" />
              </template>
            </vxe-column>
          </vxe-table>
          <div class="xCenter">
            <vxe-pager
              :layouts="['PrevPage', 'Number', 'NextPage', 'FullJump', 'Total']"
              v-model:current-page="slot.page.pageSize"
              v-model:page-size="slot.page.pageNum"
              :total="slot.page.total"
              @page-change="() => slot.changeTab()"
            >
            </vxe-pager>
          </div>
        </van-tab>
      </van-tabs>
    </template>
  </vantForm>
</template>
