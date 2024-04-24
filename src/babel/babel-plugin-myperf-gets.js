// export default function ({ types: t }) {
//   return {
//     visitor: {
//       CallExpression(path, state) {
//         const { callee, arguments: args } = path.node;

//         if (
//           callee.type === "Identifier" &&
//           callee.name === "gets" &&
//           args.length === 3 &&
//           t.isIdentifier(args[1]) &&
//           t.isFunctionExpression(args[2])
//         ) {
//           const targetNode = args[0];
//           const pathNode = args[1];
//           const callbackNode = args[2];

//           // Check if the second argument is a string literal
//           if (t.isStringLiteral(pathNode)) {
//             const path = pathNode.value;

//             // Replace gets() with optimized forEach loop
//             path.replaceWithSourceString(`
//               Object.keys(${targetNode}).forEach(key => {
//                 const value = ${targetNode}[key];
//                 if (key === '${path}') {
//                   ${callbackNode.body}
//                 }
//               });
//             `);

//             // Remove the original callback argument
//             path.parentPath.get("arguments")[2].remove();
//           }
//         }
//       },
//     },
//   };
// };
