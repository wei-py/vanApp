import * as lo from "lodash-es"
/**
 * 并发数组回调
 * @param {*} arr 
 * @param {*} callback 
 */
export default async function concurr(arr, callback) {
  
  if (lo.isArray(arr)) {
    const length = arr.length;
    for (let i = 0; i<length; i++) {
      await callback(arr[i]);
    }
    
  } else if (lo.isObject(arr)) {
    const tmpArr = Object.entries(arr)
    const length = tmpArr.length;
    for (let i = 0; i < length; i++) {
      callback(tmpArr[i][1], tmpArr[i][0]);
    }
  }



  // let promises;
  // if (lo.isArray(arr)) {
  //   promises = arr.map(item => {
  //     return new Promise((resolve, reject) => {
  //       resolve(item);
  //     });
  //   });
  // } else if (lo.isObject(arr)) {
  //   promises = Object.entries(arr).map(([key, value]) => {
  //     return new Promise((resolve, reject) => {
  //       resolve(value, key);
  //     });
  //   });

  // }


  // await Promise.all(promises).then(results => {
  //   results.forEach(result => {
  //     callback(result);
  //   });
  // });
}
