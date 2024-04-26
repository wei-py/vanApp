/**
 * 获取路由上的 query 参数, 返回一个对象
 * @returns {Object}
 */
export default function getQuery() {
  return router.currentRoute.value.query;
}
