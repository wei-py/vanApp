export default function routerPush(path, body = {}) {
  router.push(lo.merge(body, {path}))
}