export default function watchItem(name, pathOrCallback, callback = () => {}) {
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
