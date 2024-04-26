/**
 * 并发数组回调
 * @param {*} arr 
 * @param {*} callback 
 */
export default async function concurr(arr, callback) {
  let promises;
  if (lo.isArray(arr)) {
    promises = arr.map(item => {
      return new Promise((resolve, reject) => {
        resolve(item);
      });
    });
  } else if (lo.isObject(arr)) {
    promises = Object.entries(arr).map(([key, value]) => {
      return new Promise((resolve, reject) => {
        resolve(value, key);
      });
    });

  }


  await Promise.all(promises).then(results => {
    results.forEach(result => {
      callback(result);
    });
  });
}
