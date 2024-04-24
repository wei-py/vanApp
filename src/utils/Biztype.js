/*
 * @Author: rabbwei 
 * @Date: 2024-04-06 14:42:53 
 * @Last Modified by:   rabbwei 
 * @Last Modified time: 2024-04-06 14:42:53 
 */


/**
 * 判断是否是ZZD_ORG
 * @returns Boolean
 */
export function isZZD_ORG() {
  return computed(() => getHeaderInfo().Biztype == 'ZZD_ORG')
}

/**
 * 判断是否是ZZD
 * @returns Boolean
 */
export function isZZD() {
  return computed(() => getHeaderInfo().Biztype == 'ZZD')
}