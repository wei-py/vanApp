export const useEvent = defineStore("event", () => {
  let getData = async () => {};
  let saveData = async () => {};
  let submitEvent = async () => {};
  let onRefresh = async () => {};
  return { getData, saveData, submitEvent, onRefresh };
});

/**
 * 全局事件管理
 * @param {Object} { getData, saveData, submitEvent }
 */
export function eventManage({ getData, saveData, submitEvent }) {
  const event = useEvent();
  getData && (event.getData = getData);
  saveData && (event.saveData = saveData);
  submitEvent && (event.submitEvent = submitEvent);
}
