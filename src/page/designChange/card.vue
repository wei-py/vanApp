<script setup>
import { get } from "lodash";
import plainButton from "@/components/plainButton.vue";
const props = defineProps(["item"]);
const flag = useFlag()

const statusDic = getStatusDic(); // 状态字典

function getStatus(i) { // 获取状态
  const phase = statusDic[i.taskId] || statusDic[i.stageId] || "-";
  const status = statusDic[i.stateId] || "-";
  return `${phase} - ${status}`;
}
</script>

<template>
  <van-cell-group inset class="p-1 !mb-2 shadowC van-haptics-feedback !rounded-xl" v-skeleton="flag.overlayShow">
    <div v-skeleton-item>
       <!-- header -->
    <div class="flex h-auto items-center pt-[1px]">
      <div class="min-w-4 px-1 h-4 ml-2 text-sm shadowC flex items-center justify-center text-white rounded-full bg-[#ffab30]">{{ props.item.index }}</div>
      <div class="mx-2">
        {{ props.item.orderBase.orderId }}
      </div>
      <plainButton class="!h-[18.7px] " @click.stop="$copyText(props.item.orderBase.orderId)">复制</plainButton>
      <div class="flex-1 justify-end pr-1 flex">
        <plainButton @click.stop="() => {}" class="!h-[18.7px] ">状态</plainButton>
      </div>
    </div>

    <van-divider class="!my-1" />

    <article class="px-4 text-[14px] pb-[5px]">
      <div class="font-bold">
        {{ get(props.item, "customer.name") || get(props.item, "customerOrg.orgName") }} 
      </div>
      进件编号: {{ get(props.item, "leaseReview.contractNumber", "-") }}<br />
      当前阶段: <br />
      <template v-for="i of props.item.currentOrderState" :key="i">
        <div :class="`text-${$statusColor(statusDic[i.stateId])}`">
          {{ getStatus(i) }}
        </div>
      </template>
      销售人员: {{ get(props.item, "orderBase.salesman", "-") }} <br />
      详细地址: {{ get(props.item, "orderBase.installationAddress", "-") }} <br />
      订单创建时间: {{ get(props.item, "orderBase.createTime", "-") }} <br />
    </article>

    </div>
   
  </van-cell-group>
</template>


