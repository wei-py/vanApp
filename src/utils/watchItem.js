export default function watchItem(name, pathOrCallback, callback = () => {}) {
  if (lo.isString(name)) {
    watchDebounced(
      () => getItem(name, "realValue") || getItem(name, "value"),
      (value) => {
        if (lo.isFunction(pathOrCallback)) {
          pathOrCallback(value);
        } else {
          callback(value);
        }
      },
      { debounce: 500, maxWait: 1000 }
    );
    // computedAsync(() => {
    //   const value = getItem(name, "realValue") || getItem(name, "value");
    //   if (lo.isFunction(pathOrCallback)) {
    //     pathOrCallback(value);
    //   } else {
    //     callback(value);
    //   }
    //   return value;
    // });
  }
  if (lo.isArray(name)) {
    watchDebounced(
      () => name.map((n) => getItem(n, "realValue") || getItem(n, "value")),
      (values) => {
        if (lo.isFunction(pathOrCallback)) {
          pathOrCallback(values);
        } else {
          callback(values);
        }
      },
      { debounce: 500, maxWait: 1000 }
    );
    //   computedAsync(() => {
    //     const values = name.map((n) => getItem(n, "realValue") || getItem(n, "value"));
    //     if (lo.isFunction(pathOrCallback)) {
    //       pathOrCallback(values);
    //     } else {
    //       callback(values);
    //     }
    //     return values;
    //   });
  }
}
