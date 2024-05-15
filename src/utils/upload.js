import axios from "axios";
let qiniuToken = "";
/**
 *
 * @param {*} file
 * @param {*} orderId
 * @param {*} fileType image video image  file
 */
export async function upload(file, orderId = getQuery()?.orderId, fileType = "image") {
  if (lo.isUndefined(orderId)) {
    showFailToast("orderId 为空");
    return;
  }

  const url = "https://up-cn-east-2.qiniup.com";
  await getToken(orderId, fileType);
  const body = new FormData();
  body.append("file", file, file.name); //通过append向form对象添加数据
  body.append("token", qiniuToken);

  const { data } = await axios.post(url, body);
  //  http.post(url, body);
  return data.src || data.data.src;
}

export function toSrcs(arr) {
  return arr.map((n) => sToUrl(n.src || n.url || n.file.src));
}

export function toParamsUrl(arr) {
  return toSrcs(arr).map((src) => ({ src }));
}

async function getToken(orderId, fileType) {
  const url = queryUrl("file/get-qiniu-upload-token", { orderId, fileType });
  const { data } = await http.get(url);
  qiniuToken = data.upToken;
  // return
}
