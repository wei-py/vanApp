<script setup>
import card from "./card.vue";

const flag = useFlag();
const loading = ref(false); // 触底请求加载
const finished = ref(false); // 触底加载
const list = ref([]); // 列表数据
const page = ref({ pageNum: 1, pageSize: 10 }); // 分页
const queryTag = ref(""); // 搜索内容
const tab = ref("");
const query = getQuery(); // 路由 query
const isCysj = query.from == "cysj"; // 从常用数据中跳转过来的
const orderType = flag.headers.Biztype; // 业务类型
const tabs = ref([
  { count: "0", title: "订单数量", value: "orderCount" },
  { count: "0", title: "签约量", value: "statisticsSinged" },
  { count: "0", title: "建设中", value: "statisticsBuilding" },
  { count: "0", title: "并网量", value: "statisticsGridConnection" },
]);

const filter = ref({
  companyId: "",
  prjCompanyId: "",
  leaseProductCode: "",
});

onMounted(() => {
  mounted();
});

async function mounted() {
  // console.log(isCysj);
  let url = ""; // 请求接口
  if (isCysj) {
  } else {
    const params = lo.pick(getQuery(), ["stageId", "stateId", "taskId"]);
    lo.merge(params, filter.value, { orderType, queryTag: queryTag.value });
    const isCsps = query.title == "初设评审"; // 从初设评审中跳转过来的
    const isKcsh = query.title == "勘察审核"; // 从勘察审核中跳转过来的
    url = isCsps ? "order-state/stage-design-state" : "order-state/stage-task-state";
    isKcsh && (params.stateId = "WAITING_APPROVAL");

    const { data } = await http.get(queryUrl(url, params));
    tabs.value = data.map((n) => ({ title: n.stateName, count: n.count, value: n.stateId }));
    // console.log(data, 3333)
  }
}

// 初次加载回写
function getData() {
  list.value.length = 0;
  finished.value = false;
  onLoad();
}

// 触底加载方法
async function onLoad() {
  // const payload = {
  //   stageId: "",
  //   companyId: "",
  //   prjCompanyId: "",
  //   leaseProductCode: "",
  //   stateId: "CURRENT",
  //   queryTag: "",
  //   orderType: "ZZD",
  // };
  // 编辑参数
  const isZzOrWc = query.title == "终止" || query.title == "完成";
  const url = isZzOrWc ? "/order/search" : "/order/search-exclude-states";
  const body = { orderType, queryTag: queryTag.value }; // post 参数
  const isCyjsTab = query.from == "cysj" && query.stageId; // 从常用数据中跳转过来并且选择了其他Tab
  isCyjsTab && (body.stateId = query.stageId);
  const params = queryUrl(url, page.value);

  // 请求
  const { data } = await http.post(params, body);
  const total = data.total;
  const addIndexData = data.list.map((n, i) => ({ ...n, index: list.value.length + i + 1 }));
  list.value.push(...addIndexData);

  loading.value = false;
  finished.value = page.value.pageNum * page.value.pageSize > total;
  page.value.pageNum++;
}

async function onChangeTab() {
  // await http.post('bi/app-order-page-head')
}

async function onSearch() {}

eventManage({ getData });
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <van-search v-model="queryTag" shape="round" background="#f3f3f3" placeholder="系统编号、进件编号、组织全称、姓名、手机号" show-action>
      <template #action>
        <div class="yCenter">
          <van-button @click="onSearch" class="!w-auto !h-[34px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white">
            搜索
          </van-button>
        </div>
      </template>
    </van-search>

    <van-tabs v-model:active="tab" line-width="0" :ellipsis="false" title-active-color="#ffab30" @change="onChangeTab">
      <van-tab v-for="t in tabs">
        <template #title>
          <div class="xCenter">{{ t.count }}</div>
          <div>{{ t.title }}</div>
        </template>
      </van-tab>
    </van-tabs>

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" class="!pt-2">
      <template v-for="item in list" :key="item.orderBase.orderId">
        <card @click="$routerPush('/itemDetail', { query: { orderId: item.orderBase.orderId } })" :item="item"></card>
      </template>
    </van-list>
  </div>
</template>

<style scoped>
:deep(.van-search__content) {
  background: white;
}
:deep(.van-field__control) {
  font-size: 12px;
}
:deep(.van-search__field) {
  @apply !px-0;
}
:deep(.van-tabs__wrap) {
  height: 60px;
}
</style>
