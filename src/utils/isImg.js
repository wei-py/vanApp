export default function isImg(path) {
  return /.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}