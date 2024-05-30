<script setup>
import card from "./card.vue";
const queryTag = ref("");
const query = getQuery();
const tab = ref("");
const tabs = ref([
  { taskId: "TASK_CSPSXX_UPDATE", stateName: "设计变更", count: 0 },
  { taskId: "TASK_CSPSXX", stateName: "一键变更", count: 0 },
]);

const page = ref({ pageNum: 1, pageSize: 10, total: 0 }); // 分页
const loading = ref(false); // 触底请求加载
const finished = ref(false); // 触底加载
const list = ref([]); // 列表数据

function onSearch() {}

async function onChangeTab() {
  const { data } = await http.get("design/record-count");
  tabs.value[1].count = data[0].count;
  tabs.value[0].count = data[1].count;
}

const getDataThrottle = lo.debounce(getData, 300);
async function getData() {
  const params = { ...tabs.value[tab.value], queryTag: queryTag.value, stageId: "DESIGN" };
  const { data } = await http.post(queryUrl(`/order/search-exclude-states`, page.value), params);

  const total = data.total;
  page.value.total = total;
  const addIndexData = data.list.map((n, i) => ({ ...n, index: list.value.length + i + 1 }));
  list.value.push(...addIndexData);

  loading.value = false;
  finished.value = page.value.pageNum * page.value.pageSize > total;
  page.value.pageNum++;
}

onMounted(() => {
  // onChangeTab()
});
</script>

<template>
  <van-search
    v-model="queryTag"
    shape="round"
    background="#fff"
    placeholder="系统编号、进件编号、组织全称、姓名、手机号"
    show-action
    class="van-hairline--bottom"
  >
    <template #action>
      <div class="yCenter">
        <van-button @click="onSearch" class="!w-auto !h-[30px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white">
          搜索
        </van-button>
        <!-- <van-button @click="onSearch" class="!w-auto !h-[34px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white">
          {{ query.title == "预审" ? "新增" : "搜索" }}
        </van-button> -->
      </div>
    </template>
  </van-search>

  <van-tabs v-model:active="tab" line-width="0" :ellipsis="false" title-active-color="#ffab30" @change="onChangeTab">
    <van-tab v-for="t in tabs">
      <template #title>
        <div class="xCenter">{{ t.count }}</div>
        <div class="xCenter">{{ t.stateName }}</div>
      </template>
    </van-tab>
  </van-tabs>

  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getDataThrottle" class="!pt-2">
    <template v-for="item in list" :key="item.orderBase.orderId">
      <card @click="$router.push({ path: '/itemDetail', query: { orderId: item.orderBase.orderId } })" :item="item"></card>
    </template>
  </van-list>
  <van-back-top class="!bg-[#fed38c]" />
</template>

<style scoped>
:deep(.van-search__content) {
  background: white;
  height: 30px !important;
}
:deep(.van-field__control) {
  font-size: 12px;
  @apply mb-[4px]
  /* line-height: 24px !important; */;
}
:deep(.van-search__field) {
  @apply !px-0;
}
:deep(.van-tabs__wrap) {
  height: 60px;
}

:deep(.van-search__content) {
  background: #f7f7f7;
}
</style>

<style>
.van-dropdown-item__option {
  .van-cell__title {
    flex: none !important;
    width: 90% !important;
  }
}
.van-dropdown-menu__bar--opened {
  z-index: 9 !important;
}
.van-dropdown-menu__bar {
  box-shadow: none !important;
}
</style>
