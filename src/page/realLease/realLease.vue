<script setup>
import card from "./card.vue";
import { filtrate, moreForm, newPopForm } from "./reaLease";

const flag = useFlag();
const loading = ref(false); // 触底请求加载
const finished = ref(false); // 触底加载
const list = ref([]); // 列表数据

const moreShow = ref(false); // 更多筛选显示
const tab = ref(""); // 预览筛选
const tabs = ref([
  { count: "0", title: "订单数量", value: "orderCount" },
  { count: "0", title: "签约量", value: "statisticsSinged" },
  { count: "0", title: "建设中", value: "statisticsBuilding" },
  { count: "0", title: "并网量", value: "statisticsGridConnection" },
]);
const curTab = computed(() => tabs.value[tab.value]);

const _ = makeForm({ filtrate, moreForm, newPopForm }); // 筛选参数表单
// 参数
const orderType = flag.headers.Biztype; // 业务类型
const page = ref({ pageNum: 1, pageSize: 10, total: 0 }); // 分页
const queryTag = ref(""); // 搜索内容
const query = getQuery(); // 路由 query
const formParams = ref({}); // 筛选参数
const filter = computedAsync(() => lo.fromPairs(_.filtrate.map((n) => [n.name, n.value]))); // 筛选框

const isCysj = query.from == "cysj"; // 从常用数据中跳转过来的
const searchBtnText = computed(() => {
  if (investorHidden("")) {
    return query.title == "客户信息" ? "新增" : "搜索";
  } else {
    return query.title == "预审" ? "新增" : "搜索";
  }
}); // 搜索按钮内容
const newPop = ref(false); // 新增弹窗

onMounted(async () => {
  backfill(_, {});
  openBtns();
  list.value.length = 0;
  finished.value = false;
  await getTab();
  // console.log(_.filtrate[4])
});

async function getTab() {
  let url = ""; // 请求接口
  const params = lo.pick(getQuery(), ["stageId", "stateId", "taskId"]);
  if (isCysj) {
    params.stateId = "CURRENT";
    const { data } = await http.post("bi/app-order-page-head", params);
    tabs.value.forEach((t, i) => {
      t.count = i == 0 ? data[t.value] : unitConver(data[t.value], 2).result;
    });
  } else {
    lo.merge(params, filter.value, { orderType, queryTag: queryTag.value });
    const isCsps = query.title == "初设审核"; // 从初设评审中跳转过来的
    const isKcsh = query.title == "勘察审核"; // 从勘察审核中跳转过来的
    url = isCsps ? "order-state/stage-design-state" : "order-state/stage-task-state";
    isKcsh && (params.stateId = "WAITING_APPROVAL");

    const { data } = await http.get(queryUrl(url, params));
    tabs.value = data.map((n) => ({ title: n.stateName, count: n.count, value: n.stateId }));
  }
}

// 触底加载方法
const getDataThrottle = lo.debounce(getData, 300);
async function getData() {
  const stateId = curTab.value.value.replace("orderCount", "");
  // 编辑参数
  const isZzOrWc = query.title == "终止" || query.title == "完成" || query.title == "订单列表";
  //
  const body = { orderType, queryTag: queryTag.value }; // post 参数
  let url = "";
  if (isZzOrWc) {
    url = "/order/search";
    if (query.title == "订单列表") {
      body.excludeSpecialStateIds = ["LOCK", "TERMINATE"];
    }
  } else {
    url = "/order/search-exclude-states";
    body.excludeSpecialStateIds = ["LOCK", "TERMINATE"];
  }

  // const url = isZzOrWc ? "/order/search" : "/order/search-exclude-states"; // 判断是否从终止或者完成中跳转过来
  const queryParams = lo.pick(getQuery(), ["stageId", "stateId", "taskId"]);
  // formParams.value,
  lo.merge(body, queryParams, formParams.value, filter.value, { stateId });

  if (isCysj) {
    body.stateId = "CURRENT";
  } else {
  }
  const isCyjsTab = query.from == "cysj" && query.stageId; // 从常用数据中跳转过来并且选择了其他Tab
  isCyjsTab && (body.stateId = query.stageId);

  const params = queryUrl(url, page.value);

  // 请求
  const { data } = await http.post(params, body);
  const total = data.total;
  page.value.total = total;
  const addIndexData = data.list.map((n, i) => ({ ...n, index: list.value.length + i + 1 }));
  list.value.push(...addIndexData);

  loading.value = false;
  finished.value = page.value.pageNum * page.value.pageSize > total;
  page.value.pageNum++;
}

async function onChangeTab() {
  if (isCysj) return;
  page.value.pageNum = 1;
  page.value.pageSize = 10;
  list.value.length = 0;
  finished.value = false;
  await getDataThrottle();
}

async function onSearch() {
  if (searchBtnText.value == "新增") {
    if (isTYZF()) {
      newPop.value = true;
    } else {
      router.push({
        path: "/inquiry",
        query: {
          investorId: "YUEXIU",
          type: flag.active == 0 ? "ZZD" : "ZZD_ORG",
        },
      });
    }
  } else {
    page.value.pageNum = 1;
    page.value.pageSize = 10;
    list.value.length = 0;
    finished.value = false;
    getDataThrottle();
  }
  // if (query.title == "预审") { router.push("/inquiry"); } else { }
}

async function onMenuChange(menu) {
  page.value.pageNum = 1;
  page.value.pageSize = 10;
  list.value.length = 0;
  finished.value = false;
  await getDataThrottle();
}

function onPopConfirm() {
  formParams.value = getParam();
  page.value.pageNum = 1;
  page.value.pageSize = 10;
  list.value.length = 0;
  finished.value = false;
  getDataThrottle();
  moreShow.value = false;
}

function openPop() {
  lo.forIn(filter.value, (value, key) => {
    setItem(key + "-more", (v) => v.backfill());
  });
  moreShow.value = true;
}

function resetPop() {
  showFailToast("功能开发中");
}

function goDetail(item) {
  const orderId = item.orderBase.orderId;
  const investorId = item.orderBase.investorId;
  const type = item.orderBase.type;

  router.push({ path: "/itemDetail", query: { orderId, investorId, type } });
  // const investorId = item.orderBase.investorId;
  // const type = item.orderBase.type;

  // if (isTYZF()) {
  //   router.push({
  //     path: "/customerInfo",
  //     query: {
  //       orderId: item.orderBase.orderId,
  //       investorId,
  //       type,
  //       title: "客户信息 - " + (type == "ZZD" ? "自然人" : "法人"),
  //     },
  //   });
  // } else {
  //   router.push({ path: "/itemDetail", query: { orderId: item.orderBase.orderId } });
  // }
}

eventManage({ getData: getDataThrottle, onRefresh: () => location.reload() });
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <van-search
      @blur="onChangeTab"
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
            {{ searchBtnText }}
            <!-- {{ (searchBtnText) ? "新增" : "搜索" }} -->
          </van-button>
        </div>
      </template>
    </van-search>

    <van-tabs
      v-model:active="tab"
      line-width="0"
      :ellipsis="false"
      title-active-color="#ffab30"
      @change="onChangeTab"
      class="van-hairline--bottom text-[14px]"
    >
      <van-tab v-for="t in tabs">
        <template #title>
          <div class="xCenter">{{ t.count }}</div>
          <div class="xCenter">{{ t.title }}</div>
        </template>
      </van-tab>
    </van-tabs>

    <div class="flex flex-nowrap">
      <van-dropdown-menu active-color="#ffab30" class="w-[85vw]">
        <van-dropdown-item
          @change="onMenuChange"
          v-for="t in _.filtrate"
          :key="t.title"
          v-model="t.value"
          :disabled="t.disabled"
          :options="t.columns"
          :title="t.title"
        />
      </van-dropdown-menu>
      <div class="center w-[15vw] bg-white !text-[#323233] text-[16px] van-ellipsis" @click="openPop">筛选</div>
      <!-- <vButton :round="false" class="h-full">更多</vButton> -->
    </div>

    <van-popup v-model:show="moreShow" position="right" class="w-[90vw] h-[100vh]">
      <vantForm :form="_.moreForm" class="pt-3" group-class="shadowC h-[92vh] moreForm">
        <template #checkbox="{ slot }">
          <van-field :label="slot.label" input-align="right">
            <template #input>
              <van-radio-group v-model="slot.value" class="grid grid-cols-2 flex-end">
                <van-radio class="ml-2 mt-2" v-for="co of slot.columns" :name="co.value" label-disabled checked-color="#ffab30" icon-size="16px">{{
                  co.text
                }}</van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </template>
        <template #timeSortType="{ slot }">
          <van-field :label="slot.label" input-align="right" valueClass="yCenter">
            <template #input>
              <van-radio-group v-model="slot.value" class="grid grid-cols-2">
                <van-radio class="ml-2" v-for="co of slot.columns" :name="co.value" label-disabled checked-color="#ffab30" icon-size="16px">{{
                  co.text
                }}</van-radio>
              </van-radio-group>
            </template>
          </van-field>
        </template>
      </vantForm>
      <div class="flex justify-center">
        <van-button @click.stop="moreShow = false" round class="!bg-[#ffab30] !ml-2 w-[100px]" size="small" type="warning">取消</van-button>
        <van-button @click="onPopConfirm" round class="!bg-[#ffab30] !ml-2 w-[100px]" size="small" type="warning">确认</van-button>
        <van-button @click="resetPop" round class="!bg-[#ffab30] !ml-2 w-[100px]" size="small" type="warning">重置</van-button>
      </div>
    </van-popup>

    <div class="xCenter pt-2 text-[14px]">有效订单数量: {{ page.total }}</div>

    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getDataThrottle" class="!pt-2 van-list">
      <template v-for="item in list" :key="item.orderBase.orderId">
        <card @click="goDetail(item)" :item="item"></card>
      </template>
    </van-list>
    <van-back-top class="!bg-[#fed38c]" />
  </div>

  <van-popup v-model:show="newPop" round teleport="#app" transition-appear>
    <template #overlay-content>
      <vantForm @click.prevent :form="_.newPopForm" class="pt-[20vh] mx-10" group-class="shadowC"></vantForm>
    </template>
  </van-popup>
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
:deep(.moreForm .van-cell) {
  padding: 2.2vw 0 !important;
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
