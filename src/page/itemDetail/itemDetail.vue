<script setup>
import step from "./step.vue";
import {
  inquiry,
  itemDetail,
  survey,
  contractSign,
  record,
  initReview,
  build,
  grid,
  ZYsettlement,
  DLSsettlement,
  electricityContract,
  income,
} from "./itemDetail.js";

let _ = makeForm({
  inquiry,
  itemDetail,
  survey,
  contractSign,
  record,
  initReview,
  build,
  grid,
  ZYsettlement,
  DLSsettlement,
  electricityContract,
  income,
});

let query = getQuery(); // 路由参数
const statusDic = getStatusDic(); // 阶段状态字典

async function getData() {
  const { data } = await http.post(`/order/search`, { queryTag: query.orderId, orderId: query.orderId });

  gets(data, "list.0", (v) => {
    _.itemDetail[0].title = v?.customer?.name || v?.customerOrg?.orgName || "-";
    _.itemDetail[2].value = v?.leaseReview?.contractNumber || "-";
  });

  gets(data, "*.currentOrderState.0", (v) => {
    _.itemDetail[0].orderId = v?.orderId;
    _.itemDetail[2].orderId = v?.leaseReview?.contractNumber || "-";
    _.itemDetail[1].value = v?.orderId;
  });

  // 各个阶段的状态
  gets(data, "*.orderStates", (val) => {
    concurr(val, (v) => {
      const taskId = v?.taskId;
      const stateId = v?.stateId;
      const stageId = v?.stageId;
      const value = statusDic[stateId] || "未开启";
      const title = statusDic[taskId] || statusDic[stageId] || "";

      gets(_, "*.title", (val, parent) => {
        if (val == title) {
          parent.value = value;
          const color = statusColor(value);
          parent.valueClass += " text-" + color;
        }
      });
    });
  });
}

onMounted(() => {
  // query = getQuery(); // 路由参数
  runTime(getData, "itemDetail - getData");
  // getData();
});
</script>

<template>
  <div class="bg-[#f3f3f3] min-h-[100vh] pb-[10px]">
    <step class="h-[13vh] mb-[10px] shadowC" />
    <vantForm :form="_.itemDetail" group-class="itemDetailGrop">
      <template #person="{ slot }">
        <van-cell title-class="!text-[20px] bg-[white] flex items-center  font-bold">
          <template #title>
            <van-icon name="contact" class="mr-2" />
            {{ slot.title }}
          </template>
          <template #value>
            <div class="flex justify-end items-end w-full">
              <plainButton class="!h-[24px] shadow-inner" @click.stop="$copyText(slot.orderId)"> 复制系统编号 </plainButton>
              <plainButton class="!h-[24px] shadow-inner !ml-2" @click.stop="$copyText(slot.stageId)"> 复制进件编号 </plainButton>
            </div>
          </template>
        </van-cell>
      </template>
    </vantForm>
    <vantForm :form="_.inquiry" group-class="itemDetailGrop" />
    <vantForm :form="_.survey" group-class="itemDetailGrop" />
    <vantForm :form="_.contractSign" group-class="itemDetailGrop" />
    <vantForm :form="_.record" group-class="itemDetailGrop" />
    <vantForm :form="_.initReview" group-class="itemDetailGrop" />
    <vantForm :form="_.build" group-class="itemDetailGrop" />
    <vantForm :form="_.grid" group-class="itemDetailGrop" />
    <vantForm :form="_.electricityContract" group-class="itemDetailGrop" />
    <vantForm :form="_.income" group-class="itemDetailGrop" />
  </div>
</template>

<style>
.itemDetailGrop {
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important; */
  margin-bottom: 10px;
}
</style>
