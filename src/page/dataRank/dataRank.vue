<script setup>
const tableDate = ref("自定义"); // 快捷时间
const tableCalen = ref(""); // 日期时间
const tableDateShow = ref(false); //  快捷时间显示
const tableCalenShow = ref(false); // 日期时间显示
const tableData = ref([]); // 表格数据

const previewDate = ref("自定义");
const previewCalen = ref("");
const previewDateShow = ref(false); //  快捷时间显示
const previewCalenShow = ref(false); // 日期时间显示
const previewData = ref([]);

const nowDay = dayjs(); // 当天日期 重复使用
const format = "YYYY-MM-DD"; // format 格式 重复使用
const tableDateColumns = [
  { text: "全部", value: "全部", time: [] },
  { text: "当天", value: "当天", time: [nowDay.format(format), nowDay.format(format)] },
  { text: "近三天", value: "近三天", time: [nowDay.subtract(3, "day").format(format), nowDay.format(format)] },
  { text: "近七天", value: "近七天", time: [nowDay.subtract(7, "day").format(format), nowDay.format(format)] },
  { text: "自定义", value: "自定义", time: ["", ""] },
];

/**
 * 获取表格数据
 */
async function getTableData(startDate, endDate) {
  startDate += " 00:00:00";
  endDate += " 23:59:59";
  const { data } = await http.get(queryUrl("/bi/company-statistics-chart", startDate.length > 18 ? { startDate, endDate } : {}));
  const getUnit = (val) => {
    const result = unitConver(val);
    return result.realValue + " " + result.unit;
  };
  tableData.value = data.map((n) => {
    return {
      ...n,
      signedCapacity: getUnit(n.signedCapacity),
      scannedCapacity: getUnit(n.scannedCapacity),
      buildingCapacity: getUnit(n.buildingCapacity),
      gridConnectionCapacity: getUnit(n.gridConnectionCapacity),
    };
  });
}

/**
 * 获取预览数据
 */
async function getPreviewData(startDate, endDate) {
  startDate += " 00:00:00";
  endDate += " 23:59:59";
  const params = startDate.length > 18 ? { startDate, endDate } : {};
  const dic = ["签约量", "扫码量", "建设中", "待建设", "已并网"];
  const urls = ["bi/signed", "bi/zujian-scanned", "bi/project-building", "bi/project-waiting-build", "bi/grid-connection"].map((n) =>
    queryUrl(n, params)
  );
  const urlRes = await Promise.all(urls.map((n) => http.get(n)));
  previewData.value = urlRes.map((n, i) => {
    const result = { title: dic[i] };
    const data = lo.get(n, "data");
    if (lo.isUndefined(data)) {
      result.value = "请求失败";
    } else {
      const value = unitConver(data, 2);
      result.value = value.result;
      result.realValue = value.realValue;
      result.unit = value.unit;
    }
    return result;
  });
  const sortable = ["已并网", "签约量", "扫码量", "建设中", "待建设"];
  previewData.value = lo.sortBy(previewData.value, (n) => sortable.findIndex((i) => i == n.title));
}

/**
 * 表格时间筛选确认事件
 */
function onTableConfirm(val) {
  if (lo.isArray(val)) {
    const time = val.map((v) => dayjs(v).format(format));
    tableCalen.value = time.join(" 至 ");
    tableCalenShow.value = false;
    getTableData(...time);
  } else {
    const select = val.selectedOptions[0];
    tableDate.value = select.value;
    tableDateShow.value = false;
    getTableData(...select.time);
  }
}

function onPreviewConfirm(val) {
  if (lo.isArray(val)) {
    const time = val.map((v) => dayjs(v).format(format));
    previewCalen.value = time.join(" 至 ");
    previewCalenShow.value = false;
    getPreviewData(...time);
  } else {
    const select = val.selectedOptions[0];
    previewDate.value = select.value;
    previewDateShow.value = false;
    getPreviewData(...select.time);
  }
}

onMounted(() => {
  getTableData();
  getPreviewData();
});
</script>

<template>
  <van-cell-group inset class="!mt-2">
    <van-cell valueClass="flex justify-end" titleClass="h-9 yCenter !flex-none" class="!px-[20px]">
      <template #title>
        <van-icon name="chart-trending-o" class="bg-[#ffab30] text-white rounded-full p-[3px] !text-[18px] mr-1" />
        <p class="font-bold text-[16px]">数据总览</p>
      </template>
      <template #value>
        <van-field
          v-model="previewDate"
          isLink
          readonly
          @click="previewDateShow = true"
          :border="false"
          class="!w-[auto] max-w-[25%]"
          input-align="right"
        />
        <van-popup v-model:show="previewDateShow" position="bottom">
          <van-picker :columns="tableDateColumns" @confirm="onPreviewConfirm" @cancel="previewDateShow = false" />
        </van-popup>
        <van-field
          v-show="previewDate == '自定义'"
          v-model="previewCalen"
          placeholder="请选择日期"
          isLink
          readonly
          @click="previewCalenShow = true"
          :border="false"
          input-align="center"
          class="ml-1"
        />
        <van-calendar v-model:show="previewCalenShow" type="range" @confirm="onPreviewConfirm" :min-date="new Date(2010, 1, 1)" />
      </template>
    </van-cell>
    <div class="grid grid-cols-2 yCenter bg-[#fef2d9] mx-[20px] rounded gap-x-[20px] justify-between px-[30px] h-[40px]">
      <div class="text-[#868e96]">已并网</div>
      <div class="text-[20px] text-[#232323] flex">
        <div class="mr-[10px]">{{ previewData[0]?.realValue }}</div>
        <div>{{ previewData[0]?.unit }}</div>
      </div>
    </div>
    <div class="grid grid-cols-2 px-[50px] gap-x-[20px] gap-y-[10px] my-[10px]">
      <div v-for="p of previewData.slice(1)" :key="p.title">
        <div class="text-[14px] text-[#868e96]">
          {{ p.title }}
        </div>
        <div class="text-[20px] flex">
          <div class="mr-[10px]">{{ p.realValue }}</div>
          <div>{{ p.unit }}</div>
        </div>
      </div>
    </div>
  </van-cell-group>
  <van-cell-group inset class="!mt-2">
    <van-cell valueClass="flex justify-end" titleClass="h-9 yCenter !flex-none" class="!px-[20px]">
      <template #title>
        <van-icon name="chart-trending-o" class="bg-[#ffab30] text-white rounded-full p-[3px] !text-[18px] mr-1" />
        <p class="font-bold text-[16px]">组织排名</p>
      </template>
      <template #value>
        <van-field
          v-model="tableDate"
          isLink
          readonly
          @click="tableDateShow = true"
          :border="false"
          class="!w-[auto] max-w-[25%]"
          input-align="right"
        />
        <van-popup v-model:show="tableDateShow" position="bottom">
          <van-picker :columns="tableDateColumns" @confirm="onTableConfirm" @cancel="tableDateShow = false" />
        </van-popup>
        <van-field
          v-show="tableDate == '自定义'"
          v-model="tableCalen"
          placeholder="请选择日期"
          isLink
          readonly
          @click="tableCalenShow = true"
          :border="false"
          input-align="center"
          class="ml-1"
        />
        <van-calendar v-model:show="tableCalenShow" type="range" @confirm="onTableConfirm" :min-date="new Date(2010, 1, 1)" />
      </template>
    </van-cell>
    <vxe-table :data="tableData" align="center" header-align="center" max-height="520" stripe>
      <vxe-column type="seq" width="70" title="序号"></vxe-column>
      <vxe-column title="组织名称" width="200">
        <template #default="{ row }">
          <van-noticeBar :text="row.companyName" color="#1f1f1f" speed="15" />
        </template>
      </vxe-column>
      <vxe-column field="orderCount" sortable title="累计订单" width="100" />
      <vxe-column field="signedCapacity" sortable title="签约量" width="100" />
      <vxe-column field="scannedCapacity" sortable title="扫码量" width="100" />
      <vxe-column field="buildingCapacity" sortable title="建设量" width="100" />
      <vxe-column field="gridConnectionCapacity" sortable title="并网量" width="100" />
    </vxe-table>
  </van-cell-group>
</template>

<style scoped>
:deep(.vxe-cell--label) {
  white-space: nowrap;
}
:deep(.van-notice-bar) {
  background: rgba(0, 0, 0, 0);
  text-align: center;
}
:deep(.van-notice-bar__wrap) {
  @apply flex justify-center;
}
:deep(.vxe-body--column) {
  padding: 0 !important;
}
:deep(.van-field) {
  padding: 0;
}
</style>
