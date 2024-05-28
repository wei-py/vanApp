<script setup>
import step from "./step.vue";
import {
  itemDetail,
  inquiry,
  customerInfo,
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
  itemDetail,
  inquiry,
  customerInfo,
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
const isDLS = ref(false);
const stepActive = ref("预审");

onMounted(() => {
  // query = getQuery(); // 路由参数
  // runTime(getData, "itemDetail - getData");
  getData();
});

async function getData() {
  const { data } = await http.post(`/order/search`, { queryTag: query.orderId, orderId: query.orderId });
  const stepStageId = lo.get(data, "list.0.currentOrderState.0.stageId");
  stepActive.value = statusDic[stepStageId];

  

  gets(data, "*.currentOrderState.0", (v) => {
    _.itemDetail[0].orderId = v?.orderId;
    _.itemDetail[1].value = v?.orderId;
    // _.itemDetail[2].orderId = v?.leaseReview?.contractNumber || "-";
  });

  // // 各个阶段的状态
  forForm((form) => {
    if (form.valueClass) {
      form.value = "未开启";
      form.valueClass = form.valueClass.replace(/text-[^ ]+/, "text-gray");
    }
  });

  let htqyFlag = false; // 合同签约是否起租
  await gets(data, "*.orderStates", async (val) => {
    concurr(val, (v) => {
      const taskId = v?.taskId;
      const stateId = v?.stateId;
      const stageId = v?.stageId;
      const value = statusDic[stateId] || "未开启";
      const title = statusDic[taskId] || statusDic[stageId] || "";
      // console.log(title, value)

      forForm((val) => {
        if (val.title == title && val.isLink) {
          val.value = value;
          const color = statusColor(value);
          val.valueClass = val.valueClass.replace(/text-[^ ]+/, "text-" + color);
        }
        if (val.title == "合同签约" && value == "起租") {
          htqyFlag = true;
        }
        if (val.title == "屋顶业主收益查询" && htqyFlag) {
          val.value = "查询";
          const color = statusColor(val.value);
          val.valueClass = val.valueClass.replace(/text-[^ ]+/, "text-" + color);
        }
        if (val.title?.includes("结算信息") && title == "结算") {
          val.value = value;
          const color = statusColor(value);
          val.valueClass = val.valueClass.replace(/text-[^ ]+/, "text-" + color);
        }
      });
    });
  });
  if (_.initReview[1].value.includes("通过")) {
    _.initReview[2].value = "可变更";
  }
  if (_.grid[1].value?.includes("待")) {
    _.initReview[2].value = "不可变更";
    _.initReview[2].valueClass = _.initReview[2].valueClass.replace(/text-[^ ]+/, "text-gray");
  }

  gets(data, "list.0", (v) => {
    _.itemDetail[0].title = v?.customer?.name || v?.customerOrg?.orgName || "-"; // 用户名
    _.itemDetail[2].value = v?.leaseReview?.contractNumber || "-"; // 进件编号
    isDLS.value = v?.company?.type == "DLS";
    setItem("hasPutApprovalConstructBtn", "realValue", v.hasPutApprovalConstructBtn);
  });
}

function onClickRight() {
  router.push({ path: "/operateLog", query });
}

eventManage({onClickRight})
</script>

<template>
  <div class="bg-[#f3f3f3] min-h-[100vh] pb-[10px]">
    <step :stepActive="stepActive" class="h-[13vh] mb-[10px] shadowC" />
    <vantForm :form="_.itemDetail" group-class="itemDetailGrop">
      <template #person="{ slot }">
        <van-cell title-class="!text-[20px] bg-[white] flex items-center  font-bold">
          <template #title>
            <van-icon name="contact" class="mr-2" />
            {{ slot.title }}
          </template>
          <template #value>
            <div class="flex justify-end items-end w-full">
              <plainButton class="!h-[auto]" @click.stop="$copyText(slot.orderId)"> 复制系统编号 </plainButton>
              <plainButton class="!h-[auto] !ml-2" @click.stop="$copyText(slot.stageId)"> 复制进件编号 </plainButton>
            </div>
          </template>
        </van-cell>
      </template>
    </vantForm>
    <vantForm :form="_.inquiry" group-class="itemDetailGrop" />
    <vantForm :form="_.customerInfo" group-class="itemDetailGrop" />
    <vantForm :form="_.survey" group-class="itemDetailGrop" />
    <vantForm :form="_.contractSign" group-class="itemDetailGrop" />
    <vantForm :form="_.record" group-class="itemDetailGrop" />
    <vantForm :form="_.initReview" group-class="itemDetailGrop" />
    <vantForm :form="_.build" group-class="itemDetailGrop" />
    <vantForm :form="_.grid" group-class="itemDetailGrop" />
    <vantForm :form="_.electricityContract" group-class="itemDetailGrop" />

    <vantForm v-if="!isDLS" :form="_.ZYsettlement" group-class="itemDetailGrop" />
    <vantForm v-if="isDLS" :form="_.DLSsettlement" group-class="itemDetailGrop" />

    <vantForm :form="_.income" group-class="itemDetailGrop" />
  </div>
</template>

<style>
.itemDetailGrop {
  /* box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important; */
  margin-bottom: 10px;
}
</style>

<!-- <style scoped>
:deep(.van-cell__title) {
  flex: none !important;
}
</style> -->
