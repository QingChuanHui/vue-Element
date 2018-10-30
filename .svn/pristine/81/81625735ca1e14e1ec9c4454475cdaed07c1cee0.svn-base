import request from '@/utils/request'

/**
 * 获取区域列表
 * @param {参数} param
 */
export function getAreaList(param) {
  return request.fetchPost('/v1/sysArea/selectList', param)
}

/**
 * 获取区域详情
 * @param {参数} param
 */
export function getArea(param) {
  return request.fetchPost('/v1/sysArea/select', param)
}

/**
 * 添加区域
 * @param {参数} param
 */
export function setArea(param) {
  return request.fetchPost('/v1/sysArea/insert', param)
}

/**
 * 修改区域
 * @param {参数} param
 */
export function updArea(param) {
  return request.fetchPost('/v1/sysArea/update', param)
}

/**
 * 删除区域
 * @param {参数} param
 */
export function delArea(param) {
  return request.fetchPost('/v1/sysArea/delete', param)
}

/**
 * 省市县接口
 * @param {参数} param
 */
export function getAreaListTree(param) {
  return request.fetchPost('/v1/auth/getArea', param)
}

/**
 * 检测区域是否开能
 * @param {参数} param
 */
export function checkCity(param) {
  return request.fetchPost('/v1/sysArea/cityUniqueness', param)
}
