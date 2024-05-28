<script setup>
import { get } from "lodash";
import plainButton from "@/components/plainButton.vue";
const props = defineProps(["item"]);
const flag = useFlag();

const statusDic = getStatusDic(); // 状态字典

function getStatus(i) {
  // 获取状态
  const phase = statusDic[i.taskId] || statusDic[i.stageId] || "-";
  const status = statusDic[i.stateId] || "-";
  return `${phase} - ${status}`;
}
</script>

<template>
  <van-cell-group inset class="!mb-2 shadowC van-haptics-feedback !rounded-xl" v-skeleton="flag.overlayShow">
    <div v-skeleton-item>
      <!-- header -->
      <div class="flex h-10 bar items-center y-Center px-1">
        <div class="min-w-4 px-1 h-4 ml-2 text-sm shadowC flex items-center justify-center text-white rounded-full bg-[#ffab30]">
          {{ props.item.index }}
        </div>
        <div class="mx-2">
          {{ props.item.orderBase.orderId }}
        </div>
        <div class="flex-1 justify-end pr-1 flex">
          <plainButton class="!h-[18.7px]" @click.stop="$copyText(props.item.orderBase.orderId)">复制</plainButton>
          <!-- <plainButton @click.stop="() => {}" class="!h-[18.7px]">状态</plainButton> -->
        </div>
      </div>

      <!-- <van-divider class="!my-1" /> -->

      <article class="px-4 text-[14px] pb-[5px]">
        <div class="font-bold min-h-8 text-[16px] yCenter justify-between">
          <div>
            {{ get(props.item, "customer.name") || get(props.item, "customerOrg.orgName") }}
          </div>
          <div class="text-[#ffab30]">
            详情 <van-icon name="arrow"></van-icon>
          </div>
        </div>

        <div class="min-h-6 yCenter">进件编号: {{ get(props.item, "leaseReview.contractNumber", "-") }}</div>

        <div class="inline-flex  justify-between">
          <div class="pr-2 leading-6">当前阶段: </div>

          <div>
            <template v-for="i of props.item.currentOrderState" :key="i">
              <div :class="`text-${$statusColor(statusDic[i.stateId])}`" class="min-h-6 yCenter">
                {{ getStatus(i) }}
              </div>
            </template>
          </div>
        </div>

        <div class="min-h-6 yCenter">所属组织: {{ get(props.item, "company.name", "") }}</div>
        <div class="min-h-6 yCenter">销售人员: {{ get(props.item, "orderBase.salesman", "-") }}</div>
        <div class="min-min-h-6 yCenter">详细地址: {{ get(props.item, "orderBase.installationAddress", "-") }}</div>
        <div class="min-h-6 yCenter">资方名称: {{ $investorIdDic[get(props.item, "orderBase.investorId", "-")] }}</div>
        <div class="min-h-6 yCenter">订单创建时间: {{ get(props.item, "orderBase.createTime", "-") }}</div>
      </article>
    </div>
  </van-cell-group>
</template>

<style scoped>
.bar {
  background: linear-gradient(135deg, #fcf4e7, #fdf0dd, #ffeccc, #fee7bf);
  /* #f8b500 */
}
</style>
