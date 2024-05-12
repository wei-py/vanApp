<script setup name="vantForm">
import recuDynComponent from "./recuDynComponent.vue";

const props = defineProps({
  form: {}, // 表单
  title: {}, // 标题
  titleClass: {}, // 标题样式
  groupClass: {},
  approvalName: {},
  readonly: {},
  disabled: {},
  showErrorMessage: {},
});

const emits = defineEmits(["submit"]);

const gl = useDom();
const flag = useFlag();

const readonly = computed(() => {
  return !lo.isUndefined(props.readonly) ? props.readonly : !flag.btns.canEdit;
});
const disabled = computed(() => {
  return !lo.isUndefined(props.disabled) ? props.disabled : !flag.btns.canEdit;
});
const showErrorMessage = computed(() => {
  return !lo.isUndefined(props.showErrorMessage) ? props.showErrorMessage : flag.btns.canEdit;
})


const slotDoms = [props.form]
  .flat()
  .filter((n) => n?.customSlot)
  .map((n) => n.customSlot);

function getSlot(slot) {
  return lo.find(props.form, (o) => o.customSlot == slot);
}

function setRef(dom) {
  if (dom) {
    gl.submitDoms.push(dom);
  }
  if (props.approvalName) {
    gl.approvalDoms[props.approvalName] = dom;
  }
}

onBeforeUnmount(() => {
  gl.submitDoms.length = 0;
  gl.approvalDoms = {};
});
</script>

<template>
  <van-form :ref="setRef" :readonly="readonly" :disabled="disabled" :show-error-message="showErrorMessage">
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
