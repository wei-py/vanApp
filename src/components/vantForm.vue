<script setup name="vantForm">
import recuDynComponent from "./recuDynComponent.vue";

const props = defineProps({
  form: {}, // 表单
  title: {}, // 标题
  titleClass: {}, // 标题样式
  groupClass: {}
});

const emits = defineEmits(["submit"]);

const gl = useDom();

const slotDoms = [props.form]
  .flat()
  .filter((n) => n.customSlot)
  .map((n) => n.customSlot);

function getSlot(slot) {
  return lo.find(props.form, (o) => o.customSlot == slot)
}

function setRef(dom) {
  if (dom) {
    gl.submitDoms.push(dom);
  }
}

onBeforeUnmount(() => {
  gl.submitDoms.length = 0
})
</script>

<template>
  <van-form :ref="setRef">
    <van-cell-group inset :class="props.groupClass" class="">
      <recuDynComponent :form="props.form">
        <template v-for="slot of slotDoms" #[slot] :key="slot">
          <slot :name="slot" :slot="getSlot(slot)" />
        </template>
      </recuDynComponent>
    </van-cell-group>
    <!-- <slot name="button"></slot> -->
  </van-form>
</template>