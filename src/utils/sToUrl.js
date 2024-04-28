export default function sToUrl(url) {
  // return url.replace('http://', 'https://')
  if (lo.isString(url)) {
    return url.replace('http://', 'https://')
  }
  return ''
}