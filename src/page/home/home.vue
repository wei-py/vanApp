<script setup>
import { commonTask, checkTask, phaseTask } from "./taskList";
const query = getQuery();
const flag = useFlag();
const tabs = ["真租顶(自然人)", "真租顶(法人)", "真租顶(通用资方)"];
/**
 * 跳转到订单列表
 */
const tasks = ref([
  { title: "常用数据", task: commonTask, hidden: false },
  { title: "任务大全", task: phaseTask, hidden: false },
  { title: "审核大全", task: checkTask, hidden: false },
]);
// const active = ref(0);

onMounted(() => {
  onChangeTab(flag.active);
});

// 显示角标 切换
async function onChangeTab(val) {
  const Biztype = ["ZZD", "ZZD_ORG", ""][val];
  flag.headers.Biztype = Biztype;
  // tasks.value[2].hidden = Biztype == "";
  const { data } = await http.get("order-state/all-task-state-count");
  const dataTask = lo.groupBy(data, "stateId");
  tasks.value[0].task = tasks.value[0].task.map((task) => {
    if (lo.isFunction(task.onChange)) {
      task.onChange();
    }
    return task
  });
  tasks.value[1].task = tasks.value[1].task.map((task) => {
    if (lo.isFunction(task.onChange)) {
      task.onChange();
    }
    const pTask = lo.find(dataTask.WAITING_FILLED, (dTask) => dTask.taskName.includes(task.text));
    let result = { ...task, count: lo.get(pTask, "count", 0) };
    if (task.text == "内审驳回") {
      result.count = dataTask.APPROVAL_REJECT[0].count + dataTask.APPROVAL_REJECT_BTO[0].count;
    }
    if (task.text == "资方驳回") {
      result.count = dataTask.APPROVAL_REJECT_LEASE[0].count;
    }
    if (task.text == "合同签约") {
      result.count = dataTask.WAITING_SIGN[0].count + dataTask.WAITING_SIGN_RE[0].count;
    }
    return result;
  });

  tasks.value[2].task = tasks.value[2].task.map((task) => {
    if (lo.isFunction(task.onChange)) {
      task.onChange();
    }
    const cTask = lo.find(dataTask.WAITING_APPROVAL, (dTask) => {
      let flag = task.text.includes(dTask.taskName.slice(0, 2));
      if (task.text == "踏勘一审" && dTask.taskName == "业务踏勘") {
        return true;
      }
      if (task.text == "勘察审核" && dTask.taskName == "勘察") {
        return true;
      }
      return flag;
    });
    const result = { ...task, count: lo.get(cTask, "count", 0) };
    return result;
  });

  tasks.value[2].task[1].count = dataTask.WAITING_APPROVAL_INNER[0].count;
}
</script>

<template>
  <div class="py-2 bg-[#f3f3f3] ">
    <van-swipe :autoplay="3000" lazy-render class="mx-auto !w-[96vw] h-[23vh]">
      <van-swipe-item class="!w-full h-full mx-auto">
        <img class="!w-full h-full !object-cover rounded-2xl" src="/background/taskBackground.png" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <!-- <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div> -->
      </template>
    </van-swipe>
  </div>

  <div class="bg-[#f3f3f3] pb-1 flex-1" v-skeleton="flag.overlayShow">
    <van-tabs v-model:active="flag.active" background="#f3f3f3" line-width="80px" @change="onChangeTab" swipeable :swipe-threshold="2">
      <van-tab v-for="t of tabs" :title="t" :key="t">
        <template v-for="(item, i) in tasks" :key="item.title">
          <van-cell-group v-if="!item.hidden" inset class="!mt-2 shadowC" v-skeleton-item>
            <van-cell :title="item.title" title-class="font-bold text-[20px] h-[30px]  leading-[30px]" />
            <van-grid :border="false" :column-num="5" class="mx-[5px] pb-[10px]">
              <template v-for="task in item.task" :key="task.path">
                <van-grid-item v-if="!task.hidden" @click="() => task.tap()" class="!py-0">
                  <van-badge :offset="[-9, 9]" class="p-2" :show-zero="false" max="99" :content="task.count">
                    <img :src="task.icon" fit="contain" :class="task.imgClass" class="bg-[#ffcf48] rounded-xl shadowC van-haptics-feedback p-1" alt="" />
                  </van-badge>
                  <p class="text-center w-full text-[14px] h-[28px] leading-[14px]">{{ task.text }}</p>
                </van-grid-item>
              </template>
            </van-grid>
          </van-cell-group>
        </template>
      </van-tab>
      <!-- <van-tab title="真租顶(法人)">
        <van-cell-group inset class="!mt-2 shadowC" v-for="(item, i) in tasks" :key="item.title" v-skeleton-item>
          <van-cell :title="item.title" title-class="font-bold text-[20px] h-[30px]  leading-[30px]" />
          <van-grid :border="false" :column-num="5" class="mx-[5px] pb-[10px]">
            <van-grid-item v-for="task in item.task" @click="() => task.tap()" class="!py-0">
              <van-badge :offset="[-9, 9]" class="p-3" :show-zero="false" max="99" :content="task.count">
                <img :src="task.icon" fit="contain" class="bg-[#ffcf48] rounded-xl shadowC van-haptics-feedback p-1" alt="" />
              </van-badge>
              <p class="text-center text-[14px] h-[28px] leading-[14px]">{{ task.text }}</p>
            </van-grid-item>
          </van-grid>
        </van-cell-group>
      </van-tab> -->
    </van-tabs>
  </div>
</template>

<style scoped lang="scss">
:deep(.van-grid-item__content) {
  padding: 10px 0px 0px !important;
}

:deep(.van-badge) {
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

:deep(.van-tabs__line) {
  background: #ffab30;
}
:deep(.van-tab__text) {
  font-size: 16px;
}
:deep(.van-badge) {
  z-index: 2;
}
:deep(.van-swipe__track) {
  justify-content: center !important;
  width: none !important;
}
</style>
