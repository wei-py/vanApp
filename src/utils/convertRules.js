/*
 * @Author: rabbwei
 * @Date: 2024-03-26 14:33:36
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-26 01:08:56
 * @Desc: 转换校验规则
 */

/**
 * 转换校验规则
 * @param {Array{Function}} validators
 * @returns
 */
export function convertRules(validators) {
  // console.log(validators, 3333333)
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
  // if (lo.isFunction(validators[0])) {
  // } else {
  //   return validators
  // }
}
