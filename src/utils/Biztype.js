/*
 * @Author: rabbwei
 * @Date: 2024-04-06 14:42:53
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-25 19:42:47
 */

/**
 * 判断是否是ZZD_ORG
 * @returns Boolean
 */
export function isZZD_ORG() {
  return getQuery().type == "ZZD_ORG";
  // return getHeaderInfo().Biztype == "ZZD_ORG";
  // return useFlag().headers.Biztype == "ZZD_ORG";
}

/**
 * 判断是否是ZZD
 * @returns Boolean
 */
export function isZZD() {
  // (getQuery().project ? false : getHeaderInfo().Biztype == "ZZD")
  return getQuery().type == "ZZD";
  // return getHeaderInfo().Biztype == "ZZD";
  // return useFlag().headers.Biztype == "ZZD";
  // return getHeaderInfo().Biztype == "ZZD";
}

/**
 * 判断是否为通用资方
 * @returns 
 */
export function isTYZF() {
  const flag = useFlag();
  return flag.active == 2;
}

export function isZSGY() {
  const flag = useFlag();
  return flag.investor == "ZSGY";
  // return computed(() => {
  //   return flag.investor == "ZSGY";
  // });
}

export function viewOrg() {
  return (isTYZF() ? "TYZF" : "YUEXIU") + (isZZD() ? "_ZZD" : "_ZZD_ORG");
}

export function investorHidden(inve) {
  const flag = useFlag();
  return flag.investor == inve;
}
