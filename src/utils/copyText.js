export default async function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showToast("复制成功: " + text);
    })
    .catch((err) => {
      showToast({
        message: "复制失败: " + err,
        duration: 1000 * 60
      });
    });
}
