/**
 * 异步等待 ⌛️
 * @param {Number} time 
 * @returns {Void}
 */
export function wait(time) {
  // const msg = `wait ${time / 1000} s`;
  // console.log(msg);
  return new Promise((resolve) => {
    setTimeout(() => {
      // msg
      resolve();
    }, time);
  });
}
