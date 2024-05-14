<script setup>
const props = defineProps({ query: {
  table: {},
  id: {},
  designIdByPv: {},
  orderId: {}
} });
// const query = getQuery(); // 获取url参数
const active = ref(0); // tab切换
const tabData = ref({}); // tab数据
const designId = computed(() => props.query.id || props.query.designIdByPv);
// const container = ref(null)

const tabs = computed(() => {
  // tab列表
  const t = props.query.table.split(" ").filter((n) => n);
  return t.reduce((pre, cur) => {
    const [nbq, quantity] = cur.split("*");
    for (let i = 1; i <= quantity; i++) {
      pre.push(`${nbq}kW-${i}`);
    }
    return pre;
  }, []);
});

async function getData() {
  const { data } = await http.get(queryUrl("design/get-design-nbq-pv", { designId: designId.value }));
  if (data.length) {
    const dataByNbqName = lo.groupBy(data, 'nbqName')
    for (const tab in tabData.value) {
      if (dataByNbqName[tab]) {
        tabData.value[tab] = dataByNbqName[tab][0]
      }
    }
    // tabData.value = data.reduce((pre, cur) => {
    //   pre[cur.nbqName] = cur;
    //   return pre;
    // }, {});
    // console.log(tabData.value, 'tabData.value')
  }
}

async function saveData() {
  const params = {
    designId: designId.value,
    designNbqPvList: Object.values(tabData.value),
  };
  const data = await http.post("design/put-design-nbq-pv", params);
  if (data.code == 200) {
    showSuccessToast("保存成功");
  }
}

async function initTabData() {
  for (const tab of tabs.value) {
    for (let i = 1; i <= 20; i++) {
      for (let j = 1; j <= 4; j++) {
        lo.set(tabData.value, [tab, `pv${i}`, `dc${j}`], 0);
      }
    }
  }
  for (const key in tabData.value) {
    tabData.value[key].nbqName = key;
  }
}

onMounted(() => {
  initTabData();
  getData();
});

defineExpose({ saveData, getData });
</script>

<template>
  <div class="h-full">
    <van-tabs v-model:active="active" background="#f3f3f3" line-width="80px" color="#ffab30" swipeable>
      <!-- tab -->
      <template v-for="t in tabs" :key="t">
        <van-tab :title="t">
          <!-- pv -->
          <template v-for="i in 20" :key="i">
            <div class="text-center bg-[white] text-lg">PV{{ i }}</div>
            <!-- dc -->
            <van-grid :column-num="2" :border="false">
              <van-grid-item v-for="j in 4" :key="j">
                <van-field :label="`DC${j}`" :required="j == 1" labelClass="!w-[25%] !text-right">
                  <template #input>
                    <!-- {{ $log(tabData[t]) }} -->
                    <van-stepper allow-empty v-model="tabData[t][`pv${i}`][`dc${j}`]" step="1" min="0" integer />
                  </template>
                </van-field>
              </van-grid-item>
            </van-grid>
          </template>
        </van-tab>
      </template>
    </van-tabs>
    <!-- <van-sticky :offset-bottom="20" position="bottom"> -->
    <div class="xCenter bg-opacity-100 pb-5">
      <van-button @click="saveData" className="bg-[#ffab30] text-white h-8 w-[50%] rounded-2xl van-haptics-feedback ">保存</van-button>
    </div>
    <!-- </van-sticky> -->
  </div>
</template>

<style scoped>
:deep(.van-field__control--custom) {
  justify-content: center !important;
}
</style>
