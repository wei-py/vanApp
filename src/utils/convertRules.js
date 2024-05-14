/*
 * @Author: rabbwei
 * @Date: 2024-03-26 14:33:36
 * @Last Modified by: rabbwei
 * @Last Modified time: 2024-04-26 21:07:08
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
      // trigger: "onChange",
      trigger: "onSubmit",
    };
  });
  // if (lo.isFunction(validators[0])) {
  // } else {
  //   return validators
  // }
}

// export function convertRules(validators) {
//   return validators.map((validator) => {
//     return {
//       validator(val) {
//         const result = validator(val);
//         // 现在验证器返回一个对象，包含一个标识可用性的布尔值和一个消息
//         return {
//           valid: !lo.get(result, "length"),
//           message: result,
//         };
//       },
//       // trigger: "onChange",
//       trigger: "onSubmit",
//     };
//   });
// }
