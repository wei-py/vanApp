export default async function concurrenceArr(arr, callback) {
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
