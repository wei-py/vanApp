import { getPath } from "../utils/gets"


export const form2 = [
  {
    formType: "cell",
    title: "出租人信息2",
    // titleClass,
    class: "!p-0 h-[50px]",
  },
  {
    formType: "input",
    label: "地址2",
    name: "address2",
    value: "",
    required: true,
    // readonly: true,
    // disabled: true
  },
];


const r = getPath(form2, '*.title')
// function add(a, b) {
//   return a + b
// }

// const r = add(1, 2)


// 编写 babel 插件 效果如下
// 切记不要面向结果编程

// const r = 3
