<script setup>
const tableData = ref([]); // 表格数据

/**
 * 获取表格数据
 */
async function getTableData() {
  const { data } = await http.get("/bi/company-statistics-chart");
  tableData.value = data;
}

onMounted(() => {
  getTableData();
});

/**
 * 获取预览数据
 */
function getPreviewData() {
  // const urls = ["bi/signed?", "bi/zujian-scanned?", "bi/project-building?", "bi/project-waiting-build?", "bi/grid-connection?"].map((n) => n + params);
  // const dic = ["签约量", "扫码量", "建设中", "待建设", "已并网"];
}
</script>

<template>
  <van-cell-group inset>
    <van-cell>
      <template #title>
        <div class="h-9 yCenter">
          <van-icon name="chart-trending-o" class="bg-[#ffab30] text-white rounded-full p-[3px] !text-[18px] mr-1" />
          <p class="font-bold text-[16px]">组织排名</p>
        </div>
      </template>
      <template #value> </template>
    </van-cell>
    <vxe-table :data="tableData" align="center" header-align="center" max-height="400" stripe>
      <!-- <vxe-column title="设备类型">
        <template #default="{ row }">
          {{ deviceTypeDic[row.deviceType] }}
        </template>
      </vxe-column> -->
      <vxe-column field="companyName" title="组织名称" width="200" />
      <vxe-column field="orderCount" title="累计订单" width="100" />
      <vxe-column field="signedCapacity" title="签约量" width="100" />
      <vxe-column field="scannedCapacity" title="扫码量" width="100" />
      <vxe-column field="buildingCapacity" title="建设量" width="100" />
      <vxe-column field="gridConnectionCapacity" title="并网量" width="100" />
    </vxe-table>
  </van-cell-group>
</template>