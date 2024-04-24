import { types as t } from "@babel/core";
import * as lo from "lodash-es";

export default function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      CallExpression(path) {
        const { node } = path;
        // 确保调用的是 gets 函数
        if (t.isIdentifier(node.callee, { name: "gets" })) {
          const args = node.arguments;
          if (args.length === 3) {
            const target = args[0];
            const pathArg = args[1];
            const callback = args[2];

            if (t.isStringLiteral(pathArg)) {
              const pathValue = pathArg.value;

              // 创建新的路径数组表达式
              const paths = t.arrayExpression(
                getPathExpressions(target, pathValue)
              );

              // 替换原有的 getPath 调用
              path.replaceWith(paths);
            }
          }
        }
      },
    },
  };

  // 辅助函数，用于生成路径表达式数组
  function getPathExpressions(target, pattern) {
    const stack = [{ target, prefix: "", path: "" }];
    const result = [];
    const visited = new Set();

    while (stack.length > 0) {
      const { target, prefix, path } = stack.pop();

      if (visited.has(target)) {
        continue;
      }

      visited.add(target);

      lo.forEach(target, (value, key) => {
        const newPath = path === "" ? `${key}` : `${path}.${key}`;
        const newPrefix = path === "" ? `${key}` : `${prefix}.${key}`;

        if (isMatch(newPath, pattern)) {
          result.push(t.stringLiteral(newPath));
        }

        if (lo.isObject(value)) {
          stack.push({ target: value, prefix: newPrefix, path: newPath });
        }
      });
    }

    return result;
  }

  // 辅助函数，用于创建匹配函数
  function createMatchFunction(pattern) {
    const regex = new RegExp(`^${pattern.replace(/\*/g, ".*")}$`);
    return (path) => regex.test(path);
  }

  // 辅助函数，用于检查路径是否匹配模式
  function isMatch(path, pattern) {
    const isMatch = createMatchFunction(pattern);
    return isMatch(path);
  }
};
