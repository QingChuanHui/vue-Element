import request from '@/utils/request'

/**
 * 获取维修企业门店列表
 * @param {参数} param
 */
export function getCompanyList(param) {
  return request.fetchPost('/v1/clientCompany/selectList', param)
}

/**
 * 删除某个维修企业门店
 * @param {参数} param
 */
export function updateCompany(param) {
  return request.fetchPost('/v1/clientCompany/update', param)
}

/**
 * 删除某个维修企业门店
 * @param {参数} param
 */
export function deleteCompany(param) {
  return request.fetchPost('/v1/clientCompany/delete', param)
}

/**
 * 保存某个维修企业门店
 * @param {参数} param
 */
export function insertCompany(param) {
  return request.fetchPost('/v1/clientCompany/insert', param)
}

/**
 * 通过ID获取维修企业门店信息
 * @param {参数} param
 */
export function selectCompanyById(param) {
  return request.fetchPost('/v1/clientCompany/select', param)
}

