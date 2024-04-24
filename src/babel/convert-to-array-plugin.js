import { types as t } from "@babel/core";

export default function(babel) {
  const { types: t } = babel;

  return {
    visitor: {
      FunctionDeclaration(path) {
        // 确保是名为 getAllPath 的函数声明
        if (path.node.id.name === "getAllPath") {
          // 替换函数声明为导出的函数表达式
          path.replaceWith(
            t.exportNamedDeclaration(
              t.functionDeclaration(
                t.identifier("getAllPath"),
                path.node.params,
                path.node.body
              ),
              [],
              null
            )
          );
        }
      },
    },
  };
};

