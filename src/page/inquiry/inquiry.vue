<script setup>
import { lessorInfo, salespersonInfo, guarantor, signInfo } from "./inquiry";

let _ = makeForm({ lessorInfo, salespersonInfo, guarantor, signInfo });
const query = getQuery(); // 路由参数
const flag = useFlag();

onMounted(() => {
  runTime(getData);
  // getData();
});



// let time = setInterval(() => {
//   console.log("轮训检查是否签署协议");
//   getData(false);
// }, 3000);

// onUnmounted(() => {
//   clearInterval(time);
//   time = null;
// });

async function getData(isFirst = true) {
  if (query.orderId) {
    // 已有订单
    const url = "/order/get-pre-approval";
    const { data } = await http.get(queryUrl(url, query));
    if (isFirst) {
      backfill(_, data);
    }
    console.log(data, 333333333)
    if (data.fddSignTaskId && !data.authorizationLetter) {
      // returnFile();
    } else {
      setItem("fddSignTaskId", "value", "已签署");
      setItem("fddSignTaskId", "realValue", data.fddSignTaskId);
      setItem("authorizationLetter", "realValue", data.authorizationLetter);
      setItem("authorizationLetter", "value", "协议查看");
    }
  } else {
    // 新增订单
    if (isFirst) {
      backfill(_, { btns: { canSave: true, canEdit: true, hasEditBtn: true } });
    }
  }
}

async function saveData() {
  const body = lo.merge(getParam(), query);
  const url = isZZD_ORG() ? "order/org/put-pre-approval" : "order/put-pre-approval";
  const { data } = await http.post(url, body);
  query.orderId = data;
  return data;
}

async function submitData() {
  const url = queryUrl("approval/put-approval/lease/pre-approval", query);
  const { data } = await http.post(url);
}

// async function returnFile() {
//   // TODO
//   const url = "fdd/get-preview-url";
//   const { data } = await http.get(queryUrl(url, query));
//   console.log(data, 3333333);
// }

eventManage({ getData, saveData, submitData });
</script>

<template>
  <vantForm :form="_.lessorInfo" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.salespersonInfo" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.guarantor" class="pt-3" group-class="shadowC"> </vantForm>
  <vantForm :form="_.signInfo" class="pt-3" group-class="shadowC">
    <template #title="{ slot }">
      <van-cell
        v-if="!slot.hidden"
        title-class="!text-[20px] bg-[#ffab30] pl-[20px] flex items-center  text-white"
        class="!bg-[#ffab30] !p-0 h-[50px] !pr-[20px]"
      >
        <template #title>
          {{ slot.title }}
        </template>
        <template #value>
          <div class="flex justify-end">
            <van-button round block size="mini" class="!text-[14px] !w-[70px] !py-3 !bg-[#f5f5f5] !border-0" @click="() => slot.click()">
              重签
            </van-button>
          </div>
        </template>
      </van-cell>
    </template>
  </vantForm>

  <vBtn></vBtn>
</template>

<style scoped></style>
