export default function waitValue(target, key) {
  return new Promise(resolve => {
    Object.defineProperty(target, key, {
      set: function(newValue) {
        this['_' + key] = newValue;
        resolve(newValue);
      },
      get: function() {
        return this['_' + key];
      },
      configurable: true
    });
  });
}