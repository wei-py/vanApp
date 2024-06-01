export default function openCode(callback) {
  scanQRCode(callback)
}

function scanQRCode(callback) {
  postMsg({ func: "openCode" });

  window.scan = lo.throttle(async (result) => {
    if (result.startsWith("http")) {
      const { data } = await http.get("/device/url?httpUrl=" + result);
      showSuccessToast(JSON.stringify(data.data));
      postMsg({ func: "vibration" }); // 震动
      callback(data.data);
      postMsg({ func: "closeCode" });
    } else {
      showSuccessToast(result);
      postMsg({ func: "vibration" }); // 震动
      callback(result);
    }
  }, 5000);
}
