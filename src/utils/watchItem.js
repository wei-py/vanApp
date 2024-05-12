export default function watchItem(name, pathOrCallback, callback = () => {}) {
  // let stop = null
  if (lo.isString(name)) {
    setItem(name, (v) => {
      const value = v?.realValue || v?.value;
      if (lo.isFunction(pathOrCallback)) {
        pathOrCallback(value);
      } else {
        callback(value);
      }
    });

    // stop = watchDebounced(
    //   () => getItem(name, "realValue") || getItem(name, "value"),
    //   (value) => {
    //     if (lo.isFunction(pathOrCallback)) {
    //       pathOrCallback(value);
    //     } else {
    //       callback(value);
    //     }
    //   },
    //   { debounce: 500, maxWait: 1000 }
    // );
    computedAsync(() => {
      const value = getItem(name, "realValue") || getItem(name, "value");
      if (lo.isFunction(pathOrCallback)) {
        pathOrCallback(value);
      } else {
        callback(value);
      }
      return value;
    });
  }
  if (lo.isArray(name)) {
    const values = name.map((n) => getItem(n, "realValue") || getItem(n, "value"));
    if (lo.isFunction(pathOrCallback)) {
      pathOrCallback(values);
    } else {
      callback(values);
    }

    // stop = watchDebounced(
    //   () => name.map((n) => getItem(n, "realValue") || getItem(n, "value")),
    //   (values) => {
    //     if (lo.isFunction(pathOrCallback)) {
    //       pathOrCallback(values);
    //     } else {
    //       callback(values);
    //     }
    //   },
    //   { debounce: 500, maxWait: 1000 }
    // );
    computedAsync(() => {
      const values = name.map((n) => getItem(n, "realValue") || getItem(n, "value"));
      if (lo.isFunction(pathOrCallback)) {
        pathOrCallback(values);
      } else {
        callback(values);
      }
      return values;
    });
    // const flag = useFlag()
    // flag.stopWatch.push(stop)
  }
}
