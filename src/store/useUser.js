/*
 * @Author: rabbwei 
 * @Date: 2024-04-06 14:36:39 
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-25 19:44:47
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
    const checked = ref([])

    return { info, usernameList, checked };
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

export function getUserVo() {
  const user = useUser();
  return user.info.userVo
}

export function getCompany() {
  const user = useUser();
  return user.info.userVo.curUserCompanyVo.company
}

/**
 * 结合用户信息获取请求头
 * @returns { Authorization, Uid, Biztype, Version }
 */
export function getHeaderInfo() {
  const user = useUser();
  const flag = useFlag()
  return {
    Authorization: user.info.access_token,
    Uid: user.info.uid,
    Biztype: useFlag().headers.Biztype,
    investor: flag.investor
    // Version: user.info.Version,
  };
}
