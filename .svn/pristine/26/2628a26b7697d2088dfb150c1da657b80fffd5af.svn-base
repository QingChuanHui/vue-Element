import request from '@/utils/request'

/**
 * 获取维修企业列表
 * @param {参数} param
 */
export function getClientList(param) {
  return request.fetchPost('/v1/client/selectList', param)
}

/**
 * 删除某个维修企业
 * @param {参数} param
 */
export function updateClient(param) {
  return request.fetchPost('/v1/client/update', param)
}

/**
 * 删除某个维修企业
 * @param {参数} param
 */
export function deleteClient(param) {
  return request.fetchPost('/v1/client/delete', param)
}

/**
 * 保存某个维修企业
 * @param {参数} param
 */
export function insertClient(param) {
  return request.fetchPost('/v1/client/insert', param)
}

/**
 * 通过ID获取维修企业信息
 * @param {参数} param
 */
export function selectClientById(param) {
  return request.fetchPost('/v1/client/select', param)
}

/**
 * 检测用户名是否重复
 * @param {参数} param
 */
export function loginNameUniqueness(param) {
  return request.fetchPost('/v1/clientoperator/loginNameUniqueness', param)
}
