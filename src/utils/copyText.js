// export default {
//   install(app) {
//     app.config.globalProperties.$copyText = (text) => {
//       navigator.clipboard.writeText(text);
//       showToast("复制成功: " + text);
//       return text;
//     };
//   },
// };

export default function copyText(text) {
  navigator.clipboard.writeText(text);
  showToast("复制成功: " + text);
  return text;
}
