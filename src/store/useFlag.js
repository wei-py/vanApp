export const useFlag = defineStore(
  "flag",
  () => {
    const orderId = ref("");
    const statusDic = ref({});
    const headers = ref({Biztype: 'ZZD', Version: '2.4.17'})
    const overlayShow = ref(true)

    return { orderId, statusDic, headers, overlayShow };
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
