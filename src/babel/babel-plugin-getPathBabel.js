import { getPath } from "../utils/gets.js"

// transform-add-plugin.js
export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        const { callee, arguments: args } = path.node;

        // 检查调用的函数是否是 add，以及是否有两个参数
        if (t.isIdentifier(callee, { name: 'getPath' }) && args.length === 2) {
          // 计算参数的值
          // const result = args.reduce((acc, arg) => {
          //   if (t.isNumericLiteral(arg)) {
          //     return acc + arg.value;
          //   } else {
          //     // 如果参数不是数字直接返回原始表达式
          //     return path.replaceWith(path.node);
          //   }
          // }, 0);
          const result = getPath(args[0].value, args[1].value);

          // 替换原始的 add 调用
          // path.replaceWith(t.numericLiteral(result));
          path.replaceWith(t.arrayExpression((result)));
        }
      },
    },
  };
};

