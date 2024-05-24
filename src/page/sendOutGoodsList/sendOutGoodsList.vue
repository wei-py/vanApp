<script setup>
const search = ref(""); // 搜索内容
const query = getQuery(); // 路由参数
const tab = ref(query.state * 1); // 切换标签
const tabs = ref(["待发货", "已发货"]);
const flag = useFlag(); // 配合骨架
const dialogShow = ref(false); // 弹出框显示
const loading = ref(false); // 触底请求加载
const finished = ref(false); // 触底加载
const list = ref([]); // 列表数据
const page = ref({ pageNum: 1, pageSize: 10, total: 0 }); // 分页
const dic = ref({
  FIRST_TO_SECOND: "一级仓库发二级仓库",
  FIRST_TO_SITE: "一级仓库发现场",
  SECOND_TO_SITE: "二级仓库发现场",
});

const getDataThrottle = lo.debounce(getData, 300);
async function getData() {
  const body = {
    ...query,
    queryStr: search.value,
    state: tab.value,
  };
  const { data } = await http.post(queryUrl(`sto/export-base/page`, page.value), body);

  const total = data.totalRow;
  page.value.total = total;
  const addIndexData = data.records.map((n, i) => ({ ...n, index: list.value.length + i + 1 }));
  list.value.push(...addIndexData);

  loading.value = false;
  finished.value = page.value.pageNum * page.value.pageSize > total;
  page.value.pageNum++;
}

function onSearch() {
  page.value.pageNum = 1;
  page.value.pageSize = 10;
  list.value.length = 0;
  finished.value = false;
  getDataThrottle();
}

function onNew() {
  dialogShow.value = true;
}

function changeTab() {
  page.value.pageNum = 1;
  page.value.pageSize = 10;
  list.value.length = 0;
  finished.value = false;
  getDataThrottle();
}

function onShowDetail(item) {
  router.push({
    path: "/sendOutGoods",
    query: {
      title: dic.value[item.stoExportBase.exportType],
      expId: item.stoExportBase.expId || "-",
      state: tab.value,
      exportType: item.stoExportBase.exportType,
    },
  });
}

onMounted(async () => {
  // list.value.length = 0;
  // finished.value = false;
  // getDataThrottle();
});
</script>

<template>
  <van-search
    v-model="search"
    @blur="onSearch"
    shape="round"
    background="#f3f3f3"
    placeholder="系统编号、进件编号、组织全称、姓名、手机号"
    show-action
  >
    <template #action>
      <div class="yCenter">
        <van-button @click="onNew" class="!w-auto !h-[34px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white">
          新建
        </van-button>
      </div>
    </template>
  </van-search>

  <van-tabs class="flex-1 flex flex-col" v-model:active="tab" background="#f3f3f3" line-width="80px" color="#ffab30" @change="changeTab" swipeable>
    <van-tab v-for="t in tabs" :title="t" :key="t">
      <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getDataThrottle" class="!pt-2">
        <template v-for="item in list" :key="item.index">
          <!-- van-haptics-feedback -->
          <van-cell-group inset class="px-2 py-4 !mb-2 shadowC !rounded-xl" v-skeleton="flag.overlayShow">
            <van-cell
              valueClass="valueClass yellowText"
              titleClass="titleClass"
              :border="false"
              title="发货编号: "
              :value="item.stoExportBase.expId || '-'"
            >
              <template #right-icon>
                <plainButton class="!h-[24px]" @click.stop="$copyText(item.stoExportBase.expId)"> 复制 </plainButton>
              </template>
            </van-cell>
            <van-cell
              valueClass="valueClass"
              titleClass="titleClass"
              :border="false"
              title="发货方: "
              :value="item.stoExportBase.shipperName || '-'"
            />
            <van-cell
              valueClass="valueClass"
              titleClass="titleClass"
              :border="false"
              title="发货类型: "
              :value="item.stoExportBase.exportType && dic[item.stoExportBase.exportType] ? dic[item.stoExportBase.exportType] : '-'"
            />
            <van-cell
              valueClass="valueClass"
              titleClass="titleClass"
              :border="false"
              title="收货组织: "
              :value="item.company && item.company.name ? item.company.name : '-'"
            />
            <van-cell valueClass="valueClass" titleClass="titleClass" :border="false" title="备注: " :value="item.stoExportBase.remark || '-'" />
            <van-cell :border="false" title="">
              <vButton @click="onShowDetail(item)"> 发货详情 </vButton>
            </van-cell>
          </van-cell-group>
        </template>
      </van-list>
    </van-tab>
  </van-tabs>

  <van-dialog v-model:show="dialogShow" title="" :show-confirm-button="false" close-on-click-overlay>
    <div class="grid grid-cols-1 gap-2 py-8 px-8">
      <vButton @click="$router.push({ path: 'sendOutGoods', query: { expId: '', exportType: 'FIRST_TO_SITE', title: '一级仓库发现场' } })">
        发货至现场
      </vButton>
      <vButton @click="$router.push({ path: 'sendOutGoods', query: { expId: '', exportType: 'FIRST_TO_SECOND', title: '一级仓库发二级仓库' } })">
        发货至二级仓库
      </vButton>
      <vButton @click="dialogShow = false" class="!bg-white !text-[#232323]"> 取消 </vButton>
    </div>
  </van-dialog>
</template>

<style scoped>
:deep(.yellowText) * {
  @apply !text-[#ffab30];
}
:deep(.valueClass) {
  @apply !text-left !text-[#323232];
}

:deep(.titleClass) {
  @apply !w-[22%] mr-4 !flex-none;
}

:deep(.van-cell) {
  padding: 0 10px !important;
}
/* :deep(.van-list) {
  @apply w-[100vw];
}
:deep(.van-cell-group) {
  @apply w-[90vw];
} */
</style>
