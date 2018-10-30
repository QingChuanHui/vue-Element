import request from '@/utils/request'

/**
 * 获取轮播图列表
 * @param {参数} param
 */
export function getPartList(param) {
  return request.fetchPost('/v1/part/selectList', param)
}

/**
 * 获取轮播图详情
 * @param {参数} param
 */
export function getPart(param) {
  return request.fetchPost('/v1/part/select', param)
}

/**
 * 添加轮播图
 * @param {参数} param
 */
export function setPart(param) {
  return request.fetchPost('/v1/part/insert', param)
}

/**
 * 修改轮播图
 * @param {参数} param
 */
export function updPart(param) {
  return request.fetchPost('/v1/part/update', param)
}

/**
 * 修改轮播图
 * @param {参数} param
 */
export function delPart(param) {
  return request.fetchPost('/v1/part/delete', param)
}

/**
 * 检测商品编码是否重复
 * @param {参数} param
 */
export function partCodeUniqueness(param) {
  return request.fetchPost('/v1/part/partCodeUniqueness', param)
}
