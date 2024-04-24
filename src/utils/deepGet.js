import * as lo from "lodash-es";

export default function deepGet(obj) {
  obj = packBase(obj);

  const handler = {
    get(target, prop, receiver) {
      if (!(prop in target)) {
        target[prop] = new Proxy({}, handler);
      }
      if (lo.isNumber(target[prop]) || lo.isBoolean(target[prop]) || lo.isString(target[prop])) {
        target[prop] = new Proxy(packBase(target[prop]), handler);
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      if (typeof value === "object" && value !== null) {
        value = new Proxy(value, handler);
      }
      return Reflect.set(target, prop, value, receiver);
    },
  };

  return new Proxy(obj, handler);
}

function packBase(val) {
  if (lo.isNumber(val) && !(val instanceof Number)) {
    return new Number(val);
  } else if (lo.isBoolean(val) && !(val instanceof Boolean)) {
    return new Boolean(val);
  } else if (lo.isString(val) && !(val instanceof String)) {
    return new String(val);
  }
  return val;
}
