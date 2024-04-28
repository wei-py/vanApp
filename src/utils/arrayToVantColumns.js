export default function arrayToVantColumns(arr) {
  return arr.map((value) => {
    return {
      text: value,
      value,
    };
  });
}
