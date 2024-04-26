import { isPhoneNumber } from "./validate";

export default function callPhone(number) {
  if (isPhoneNumber(number)) {
    open('tel:' + number)
  } else {
    showFailToast({
      message: '手机号码格式有误: ' + number,
      className: "!bg-red-500 shadowC",
    });
  }
}