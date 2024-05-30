// window: goBack scan getLocation getDeviceInfo
// postMessage: openCode(scan) closeCode vibration getInfo(getDeviceInfo) location(getLocation)
export default function postMsg(message) {
  const ReactNativeWebView = lo.get(window, "ReactNativeWebView");
  const info = JSON.stringify({ to: "native", ...message });
  if (ReactNativeWebView) {
    return ReactNativeWebView.postMessage(info);
    // return true;
  } else {
    showFailToast({
      message: "浏览器不支持使用",
      // message: "12345678901234567890",
      className: "!bg-red-500 shadowC",
    });
    return false;
  }
}
