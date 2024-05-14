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
    const deviceInfoType = ref("ZUJIAN");
    // const stopWatch = ref([])
    return { orderId, statusDic, headers, overlayShow, saveFlag, btns, orderState, deviceInfoType };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
      paths: ["orderId", "statusDic", "overlayShow", "saveFlag", "orderState", "deviceInfoType"],
    },
  }
);

export function getStatusDic() {
  const flag = useFlag();
  return flag.statusDic;
}

export function openBtns() {
  const flag = useFlag();
  flag.btns = {
    canEdit: true,
    canApproval: true,
  };
}
