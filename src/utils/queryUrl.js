import {serialize} from 'xe-utils'

/**
 * GET 请求拼接
 * @param {String} url 
 * @param {Object} param 
 * @returns {String}
 */
export default function queryUrl(url, param) {
  return url + '?' + serialize(param)
}