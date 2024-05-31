export default function unitConver(value, toFix, unitList = ["W", "kW", "MW"]) {
  let unit = unitList.shift();
  let scale = 0;
  while (value >= 1000 && unitList.length) {
    value = divide(value, 1000);
    unit = unitList.shift();
    scale += 1;
  }
  if (!value) {
    return { value: "0", unit: "W", scale, result: "0 W", realValue: '0' };
  }
  const realValue = value || '0'
  if (lo.isSafeInteger(toFix * 1)) {
    value = lo.floor(value * 1, toFix).toFixed(toFix);
  }
  const result = value + " " + unit;
  return { value: value, unit, scale, result, realValue };
}
