export const useEvent = defineStore("event", () => {
  let getData = async () => {};
  let saveData = async () => {};
  let submitData = async () => {};
  let approvalData = async () => {};
  let onRefresh = async () => {};
  let approvalBackfill = async () => {};

  return { getData, saveData, submitData, approvalData, onRefresh, approvalBackfill };
});

// export let getData = async () => {};
// export let saveData = async () => {};
// export let submitData = async () => {};
// export let approvalData = async () => {};
// export let onRefresh = async () => {};
// export let approvalBackfill = async () => {};

// export function useEvent() {
//   return { getData, saveData, submitData, approvalData, onRefresh, approvalBackfill };
// }

/**
 * 全局事件管理
 * @param {Object} { getData, saveData, submitEvent }
 */
export function eventManage({ getData, saveData, submitData, approvalData, approvalBackfill }) {
  const event = useEvent();
  getData && (event.getData = getData);
  saveData && (event.saveData = saveData);
  submitData && (event.submitData = submitData);
  approvalData && (event.approvalData = approvalData);
  approvalBackfill && (event.approvalBackfill = approvalBackfill);
}

export function disabledEvent() {
  forForm((form) => {
    if (form.formType == "cell" && form.readonly) {
      form.titleClass += " !text-[#d5d6d8]";
    }
    // form.readonly = true;
    form.disabled = true;
    // form.required = true;
    // form.errorMessage = "";
    // form.rightIcon = "";
    // form.isLink = false;
    // form.clickRightIcon = () => {};
    // form.click = () => {};
    // if (lo.get(form, "inlineForm.0.formType") == "upload") {
    //   lo.set(form, "inlineForm.0.disabled", true);
    //   lo.set(form, "inlineForm.0.deletable", false);
    // }
  });
}

export function notDisabledEvent() {
  forForm((form) => {
    if (form.formType == "cell" && form.readonly) {
      form.titleClass += " !text-[#d5d6d8]";
    }
    // form.readonly = false;
    // form.disabled = false;
    form.required = true;
    // form.errorMessage = "";
    // form.rightIcon = "arrow";
    // form.isLink = true;
    // form.clickRightIcon = () => {};
    // form.click = () => {};
    // if (lo.get(form, "inlineForm.0.formType") == "upload") {
    //   lo.set(form, "inlineForm.0.disabled", false);
    //   lo.set(form, "inlineForm.0.deletable", true);
    // }
  });
}

export async function glSave() {
  const event = useEvent();
  await event.saveData();
}
