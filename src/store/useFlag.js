export const useFlag = defineStore(
  "flag",
  () => {
    const orderId = ref("");
    const statusDic = ref({});
    const headers = ref({ Biztype: "ZZD", Version: "2.4.17" });
    const overlayShow = ref(true);
    const saveFlag = ref([]);
    const btns = ref({});
    const orderState = ref({});
    // const stopWatch = ref([])
    return { orderId, statusDic, headers, overlayShow, saveFlag, btns, orderState };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);

export function getStatusDic() {
  const flag = useFlag();
  return flag.statusDic;
}
