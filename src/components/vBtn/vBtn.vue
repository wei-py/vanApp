<script setup>
import rejectReason from "./vBtn";
const event = useEvent();
const flag = useFlag();
const doms = useDom();
const hasEditBtn = computed(() => flag.btns.hasEditBtn);
const canEdit = computed(() => flag.btns.canEdit);
const canSave = computed(() => flag.btns.canSave);
const hasApprovalBtn = computed(() => flag.btns.hasApprovalBtn);
const canApproval = computed(() => flag.btns.canApproval);
const showApprovalModule = computed(() => flag.btns.rejectReason && flag.btns.hasApprovalModule);
const _ = makeForm({ rejectReason }, false);
const disabled = computedAsync(() => hasApprovalBtn.value && !canEdit.value && !canApproval.value);

const notSave = computedAsync(() => !(hasEditBtn.value && canEdit.value && canSave.value) && !canEdit.value);
onMounted(async () => {
  eventManage({
    approvalBackfill: async () => {
      for (let i = 0; i < _.rejectReason.length; i++) {
        const name = _.rejectReason[i].name;
        if (lo.isFunction(_.rejectReason[i].backfill)) {
          _.rejectReason[i].backfill(flag.btns.rejectReason);
        } else {
          _.rejectReason[i].value = flag.btns.rejectReason[name];
        }

        if (lo.isFunction(_.rejectReason[i].onMounted) && i == 3) {
          _.rejectReason[i].onMounted();
        }

        if (disabled.value) {
          _.rejectReason[i].readonly = true;
          _.rejectReason[i].click = () => {};
          _.rejectReason[5].inlineForm[0].readonly = true;
          _.rejectReason[5].inlineForm[0].disabled = true;
        }
      }
    },
  });

  // await wait(2000);
  if (!notSave.value) {
    // disabledEvent();
    // forForm((form) => {
    //   if (form.formType == "cell" && form.readonly) {
    //     form.titleClass += " !text-[#d5d6d8]";
    //   }
    //   form.disabled = !notSave.value;
    // });
    // console.log("禁用");
  }

  // 禁用输入 readonly 代替 disabled
  // watch(
  //   () => notSave.value,
  //   (v) => {
});

// });

function saveData() {
  onSave();
  event.saveData();
  showSuccessToast("保存成功");
}

async function submitData() {
  onSave();
  event.saveData();
  await validate();
  const param = getParam();
  const query = lo.pick(param, ["id", "orderId"]);
  event.submitData(query);
  event.getData();
  await wait(2000);
  // location.reload();
}

async function approvalData() {
  await doms.approvalDoms.approval.validate();
  const val = doms.approvalDoms.approval.getValues();
  const dic = {
    内部审核: "APPROVAL_INNER",
    博通审核: "APPROVAL_BTO",
    资方审核: "APPROVAL_LEASE",
  };
  const result = { 通过: "PASS", 拒绝: "REJECT" };
  val.approvalType = dic[val.approvalType];
  val.result = result[val.result];
  val.rejectFiles = val.rejectFiles.map((v) => {
    return {
      fileName: getUploadUrlName(v),
      fileSrc: getUploadUrl(v),
    };
  });
  await event.approvalData(val);
  await wait(2000);
  location.reload();
}
</script>

<template>
  <vantForm
    v-if="showApprovalModule"
    :readonly="!canApproval"
    :disabled="!canApproval"
    :show-error-message="canApproval"
    :form="_.rejectReason"
    approval-name="approval"
    class="pt-3"
    group-class="shadowC"
  >
  </vantForm>
  <div class="flex justify-center my-2">
    <van-button
      v-if="hasEditBtn && canEdit && canSave"
      :disabled="!canEdit"
      round
      block
      type="warning"
      @click="saveData"
      size="small"
      class="!w-[100px] !bg-[#ffab30] !mr-9"
    >
      保存
    </van-button>
    <van-button
      v-if="hasEditBtn && canEdit"
      :disabled="!canEdit"
      round
      block
      type="warning"
      @click="submitData"
      size="small"
      class="!w-[100px] !bg-[#ffab30]"
    >
      提交
    </van-button>
    <van-button
      v-if="hasApprovalBtn && !canEdit"
      :disabled="!canApproval"
      round
      block
      type="warning"
      @click="approvalData"
      size="small"
      class="!w-[100px] !bg-[#ffab30]"
    >
      审核
    </van-button>
  </div>
</template>
