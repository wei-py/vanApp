<script setup>
import { form, form2 } from "./inquiry";

let _ = makeForm({ form, form2 });

onMounted(async () => {
  await getData();
});

async function getData() {
  const url = "/order/org/get-pre-approval";
  const param = { orderId: "202404031627140986" };
  const { data } = await http.get(queryUrl(url, param));
  backfill(_, data);
  console.log(_, 333)
}
eventManage({ getData });

async function submit() {
  await validate();
  const result = getParam();
  console.log(result)
}
</script>

<template>
  <!-- 剪枝 -->
  <div class="w-screen bg-[gray] p-0">
    <vantForm :form="_.form" class="pt-3">
      <!-- <template #aa>123</template> -->
    </vantForm>
    <vantForm :form="_.form2" class="pt-3"> </vantForm>

    <div class="flex justify-center mt-2">
      <van-button round block type="primary" @click="submit" class="!w-[100px]"> 提交 </van-button>
    </div>
  </div>
</template>

<style scoped></style>
