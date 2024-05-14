<script setup>
const flag = useFlag();
const recordType = ref(0);
const tabs = ref([
  { title: "大备案", count: "0" },
  { title: "精准备案", count: "0" },
]);

const recordCertificateId = ref("");

const loading = ref(false); // 触底请求加载
const finished = ref(false); // 触底加载
const list = ref([]); // 列表数据
const page = ref({
  pageNum: 1,
  pageSize: 10,
});

onMounted(() => {
  // getDataThrottle();
});

function onChangeTab(tab) {
  list.value.length = 0;
  page.value.pageNum = 1;
  page.value.pageSize = 10;
  getDataThrottle();
}

const getDataThrottle = lo.debounce(getData, 300);
async function getData() {
  const { data } = await http.post(queryUrl(`record/get`, page.value), {
    recordType: recordType.value + 1,
    recordCertificateId: recordCertificateId.value,
  });
  list.value.push(...data.list);
  console.log(data.list[0]);

  const total = data.total;
  loading.value = false;
  finished.value = page.value.pageNum * page.value.pageSize > total;
  page.value.pageNum++;

  {
    const { data } = await http.get("record/count");
    tabs.value[0].count = data.bigRecordCnt;
    tabs.value[1].count = data.perRecordCnt;
  }
}
</script>

<template>
  <van-tabs v-model:active="recordType" line-width="0" :ellipsis="false" title-active-color="#ffab30" @change="onChangeTab">
    <van-tab v-for="t in tabs">
      <template #title>
        <div class="xCenter">{{ t.title }}({{ t.count }})</div>
      </template>
    </van-tab>
  </van-tabs>

  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getDataThrottle" class="!pt-2">
    <template v-for="(item, i) in list" :key="i">
      <van-cell-group inset class="p-1 !mb-2 shadowC !rounded-xl van-haptics-feedback" :border="false" @click.stop="() => {}">
        <van-cell title="备案证编码" class="!py-1" :border="false" valueClass="!text-left !text-[#323232]" titleClass="!w-[130px] !flex-none">
          <template #value>
            <div class="flex justify-between">
              <div class="flex-1">{{ item.recordCertificateId }}</div>
              <plainButton class="!h-[18.7px] !px-5">详情</plainButton>
            </div>
          </template>
        </van-cell>
        <van-cell
          title="备案证类型"
          :value="recordType == 0 ? '大备案证' : '精准备案'"
          class="!py-1"
          :border="false"
          valueClass="!text-left !text-[#323232]"
          titleClass="!w-[130px] !flex-none"
        />
        <van-cell
          title="备案证容量"
          :value="item.recordCertificateCapacity + 'W'"
          class="!py-1"
          :border="false"
          valueClass="!text-left !text-[#323232]"
          titleClass="!w-[130px] !flex-none"
        />
        <van-cell
          v-show="recordType == 0"
          title="备案证剩余容量"
          :value="(item.surplusCapacity || '-') + 'W'"
          class="!py-1"
          :border="false"
          valueClass="!text-left !text-[#323232]"
          titleClass="!w-[130px] !flex-none"
        />
        <!--  -->
      </van-cell-group>
    </template>
  </van-list>
</template>
