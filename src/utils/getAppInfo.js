export default function getAppInfo() {
  window.getDeviceInfo = (info) => {
    return JSON.parse(info);
  };
  return postMsg({ func: "getInfo" });
}
