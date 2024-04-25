/**
 * 并发数组回调
 * @param {*} arr 
 * @param {*} callback 
 */
export default async function concurr(arr, callback) {
  const promises = arr.map(item => {
    return new Promise((resolve, reject) => {
      resolve(item);
    });
  });

  await Promise.all(promises).then(results => {
    results.forEach(result => {
      callback(result);
    });
  });
}
