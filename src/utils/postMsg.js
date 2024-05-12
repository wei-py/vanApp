export default function postMsg(message) {
  const ReactNativeWebView = lo.get(window, "ReactNativeWebView");
  const info = JSON.stringify({ to: "native", ...message });
  if (ReactNativeWebView) {
    ReactNativeWebView.postMessage(info);
    return true;
  } else {
    showFailToast({
      message: "浏览器不支持使用",
      className: "!bg-red-500 shadowC",
    });
    return false;
  }
}
