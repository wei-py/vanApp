"use strict";
import * as lo from "lodash-es";
import concurr from "../utils/concurr.js";

export async function getAllPath(target) {
  const stack = [{ target, prefix: "", path: "" }];
  const result = [];
  const visited = new Set();

  while (stack.length > 0) {
    const { target, prefix, path } = stack.pop();

    if (visited.has(target)) {
      continue;
    }

    visited.add(target);

    await concurr(Object.entries(target), ([key, value]) => {
      const newPath = path === "" ? `${key}` : `${path}.${key}`;
      const newPrefix = path === "" ? `${key}` : `${prefix}.${key}`;
      result.push(newPath);
      if (lo.isObject(value)) {
        stack.push({ target: value, prefix: newPrefix, path: newPath });
      }
    });

    // lo.forEach(target, (value, key) => {
    //   const newPath = path === "" ? `${key}` : `${path}.${key}`;
    //   const newPrefix = path === "" ? `${key}` : `${prefix}.${key}`;
    //   result.push(newPath);
    //   if (lo.isObject(value)) {
    //     stack.push({ target: value, prefix: newPrefix, path: newPath });
    //   }
    // });
  }

  return result;
}

function createMatchFunction(pattern) {
  const regex = new RegExp(`^${pattern.replace(/\*/g, ".*")}$`);
  return (path) => regex.test(path);
}

export async function getPath(target, path) {
  const allPath = await getAllPath(target);
  const isMatch = createMatchFunction(path);
  const result = [];
  await concurr(allPath, (p) => {
    if (isMatch(p) && !p.includes('.ref.')) {
      result.push(p);
    }
  });
  // for (const p of allPath) {
  //   if (isMatch(p)) {
  //     result.push(p);
  //   }
  // }
  return result;
}

export async function gets(target, path, callback = () => {}) {
  const result = [];
  if (!path.includes('*')) {
    let value = lo.get(target, path);
    const parentPath = path.split(".").slice(0, -1).join(".");
    const parent = lo.get(target, parentPath);
    callback(value, parent, path);
    return value
  } 
  const paths = await getPath(target, path); // 主要是babel这个直接运行结果, 以现在的例子就是 const paths = [ '1.title', '0.title' ]

  await concurr(paths, (p) => {
    let value = lo.get(target, p);
    const parentPath = p.split(".").slice(0, -1).join(".");
    const parent = lo.get(target, parentPath);
    callback(value, parent, p);
    value = lo.get(target, p);
    result.push(value);
  });

  // for (const p of paths) {
  //   let value = lo.get(target, p);
  //   const parentPath = p.split(".").slice(0, -1).join(".");
  //   const parent = lo.get(target, parentPath);
  //   callback(value, parent, p);
  //   value = lo.get(target, p);
  //   result.push(value);
  // }
  return result.length === 1 ? result[0] : result;
}
