import _ from "lodash-es";

function deepGet(obj) {
  obj = packBase(obj)

  const handler = {
    get(target, prop, receiver) {
      if (!(prop in target)) {
        target[prop] = new Proxy({}, handler);
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
  if (_.isNumber(val)) {
    return new Number(val);
  } else if (_.isBoolean(val)) {
    return new Boolean(val);
  } else if (_.isString(val)) {
    return new String(val);
  }
  return val
}


// a.b.c = 3;
// console.log(a.b.c); // 3
// console.log(a)


// console.log(a.c.d.e.f.g); // undefined

// a.c.d.e.f.g = 42;
// console.log(a.c.d.e.f.g); // 42


// // const a = deepGet({ b: 3 });
// // console.log(a.c.b);


// const a = deepGet({  }) 

// a.b.c = 3
// a.c.c // undefined

// // 非基本类型的对象 深度代理
// // 能够加强基本类型 new Number() new Boolean()  new String() . 加强后深度代理


