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
    return URL.createObjectURL(file);
  }

  const url = "https://up-cn-east-2.qiniup.com";
  await getToken(orderId, fileType);
  const body = new FormData();
  body.append("file", file); //通过append向form对象添加数据
  body.append("token", qiniuToken);

  const { data } = await axios.post(url, body);
  return sToUrl(data.src || data.data.src);
  // const apis = [file].flat().map(async (n) => {
  //   const url = "https://up-cn-east-2.qiniup.com";
  //   await getToken(orderId, fileType);
  //   const body = new FormData();
  //   body.append("file", n, n.name); //通过append向form对象添加数据
  //   body.append("token", qiniuToken);

  //   return axios.post(url, body);
  // });

  // const data = await Promise.all(apis)
  // const result = data.map(src => src.data.src || src.data.data.src)
  // return result
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
