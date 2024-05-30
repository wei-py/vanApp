<script setup>
const flag = useFlag();
const loading = ref(false); // 触底请求加载
const finished = ref(false); // 触底加载
const list = ref([]); // 列表数据
const page = ref({ pageNum: 1, pageSize: 10, total: 0 }); // 分页
const query = getQuery();
const statusDic = getStatusDic();

const getDataThrottle = getData;
async function getData() {
  const { data } = await http.post(queryUrl(`order-log/opt`, page.value), { orderId: query.orderId });
  console.log(data);

  const total = data.total;
  page.value.total = total;
  const addIndexData = data.list.map((n, i) => ({ ...n, index: total - (list.value.length + i) }));
  list.value.push(...addIndexData);

  loading.value = false;
  finished.value = page.value.pageNum * page.value.pageSize > total;
  page.value.pageNum++;
}
</script>

<template>
  <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="getDataThrottle" class="!pt-2">
    <template v-for="item in list" :key="item.index">
      <div class="grid grid-cols-6 m-2 p-3 gap-2 bg-white rounded-lg">
        <div class="col-span-2 text-[18px]">记录:</div>
        <div class="col-span-1 text-[18px]">{{ item.index }}</div>
        <div class="col-span-3 text-right !leading-[14px] text-[14px] text-[#6f6f6f]">{{ item.time }}</div>
        <div class="col-span-2 text-[14px]">操作者:</div>
        <div class="col-span-4 text-[14px]">{{ item.operator || "-" }}</div>
        <div class="col-span-2 text-[14px]">{{ item.title.split(",").slice(0, 1)[0] }}:</div>
        <div class="col-span-4 text-[14px]">{{ item.title.split(",").slice(1).join(",") }}</div>
        <div class="col-span-2 text-[14px]">审核结果:</div>
        <div class="col-span-4 text-[14px]">
          {{ statusDic[$get(item, "approvalReq.result")] || "-" }}{{ $get(item, "approvalReq.rejectReason") || "-" }}
        </div>
      </div>
    </template>
  </van-list>
  <van-back-top class="!bg-[#fed38c]" />
</template>
