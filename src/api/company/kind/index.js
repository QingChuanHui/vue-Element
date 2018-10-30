import request from '@/utils/request'

/**
 * 获取门店业务类别列表
 * @param {参数} param
 */
export function getCompanyKindList(param) {
  return request.fetchPost('/v1/companyKind/selectList', param)
}

/**
 * 获取门店业务类别详情
 * @param {参数} param
 */
export function getCompanyKind(param) {
  return request.fetchPost('/v1/companyKind/select', param)
}

/**
 * 添加门店业务类别
 * @param {参数} param
 */
export function setCompanyKind(param) {
  return request.fetchPost('/v1/companyKind/insert', param)
}

/**
 * 修改门店业务类别
 * @param {参数} param
 */
export function updCompanyKind(param) {
  return request.fetchPost('/v1/companyKind/update', param)
}

/**
 * 修改门店业务类别
 * @param {参数} param
 */
export function delCompanyKind(param) {
  return request.fetchPost('/v1/companyKind/delete', param)
}

/**
 * 获取门店业务
 * @param {参数} param
 */
export function getCompanyService(param) {
  return request.fetchPost('/v1/companyKind/selectService', param)
}

/**
 * 设置门店业务
 * @param {参数} param
 */
export function setCompanyService(param) {
  return request.fetchPost('/v1/companyKind/changeService', param)
}
