export default function isImg(path) {
  return /.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

export function isImgSlot(file) {
  const name = lo.get(file, "file.name") || lo.get(file, "src") || lo.get(file, "url");
  return isImg(name);
}

export function getUploadUrl(file) {
  return sToUrl(lo.get(file, "file.url") || lo.get(file, "src") || lo.get(file, "url"));
}

export function getUploadUrlName(file) {
  const url = getUploadUrl(file);
  return url.substring(url.lastIndexOf("/") + 1);
}
