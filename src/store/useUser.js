/*
 * @Author: rabbwei 
 * @Date: 2024-04-06 14:36:39 
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-24 08:10:10
 * @Desc: 登录获取用户数据缓存数据
 */

/**
 * 缓存用户信息
 */
export const useUser = defineStore(
  "user",
  () => {
    const info = ref({});
    const usernameList = ref([])

    return { info, usernameList };
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage }],
    },
  }
);

/**
 * 修改缓存用户信息
 * @param {*} info
 */
export function setUserInfo(info) {
  const user = useUser();
  // info.Biztype = "ZZD_ORG";
  // info.Version = "2.3.3";
  lo.merge(user.info, info);
}

/**
 * 结合用户信息获取请求头
 * @returns { Authorization, Uid, Biztype, Version }
 */
export function getHeaderInfo() {
  const user = useUser();
  return {
    Authorization: user.info.access_token,
    Uid: user.info.uid,
    // Biztype: user.info.Biztype,
    // Version: user.info.Version,
  };
}
