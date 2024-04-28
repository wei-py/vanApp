export default function watchItem(name, pathOrCallback, callback = () => {}) {
  if (lo.isFunction(pathOrCallback)) {
    const val = [() => getItem(name, "value"), () => getItem(name, "realValue")]
    watch(
      val,
      // [() => getItem(name, "value"), () => getItem(name, "realValue")],
      (newV, oldV) => {
        pathOrCallback(newV[1] || newV[0], oldV[1] || oldV[0]);
      }
    );

    console.log(myFunction(), 3333)
    // const historyVal = val.map(v=>v())
    // console.log(historyVal)
    // setItem(name, 'value', val[0]())
    // setItem(name, 'realValue', val[1]())

    return
  }
  watch(
    () => getItem(name, pathOrCallback),
    (newV, oldV) => {
      callback(newV, oldV);
    }
  );
}

function myFunction() {
  const instance = getCurrentInstance();
  if (instance) {
    const lifecycleHook = instance.type.__isScriptSetup ? 'setup' : instance.proxy.$options.name;
    console.log(`This function is running in the ${lifecycleHook} lifecycle.`);
  } else {
    console.log('This function is not running in a Vue component.');
  }
}