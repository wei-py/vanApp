/*
 * @Author: rabbwei
 * @Date: 2024-03-26 14:33:36
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-22 22:09:44
 * @Desc: 转换校验规则
 */

/**
 * 转换校验规则
 * @param {Array{Function}} validators 
 * @returns 
 */
export function convertRules(validators) {
  return validators.map((validator) => {
    return {
      validator(val) {
        const message = validator(val);
        this.message = message;
        const result = !lo.get(message, "length");
        return result;
      },
      message: "",
    };
  });
}
