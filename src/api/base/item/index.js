import request from '@/utils/request'

/**
 * 获取维修项目列表
 * @param {参数} param
 */
export function getItemList(param) {
  return request.fetchPost('/v1/item/selectList', param)
}

/**
 * 删除某个维修企业项目
 * @param {参数} param
 */
export function updateItem(param) {
  return request.fetchPost('/v1/item/update', param)
}

/**
 * 删除某个维修项目
 * @param {参数} param
 */
export function deleteItem(param) {
  return request.fetchPost('/v1/item/delete', param)
}

/**
 * 保存某个维修项目
 * @param {参数} param
 */
export function insertItem(param) {
  return request.fetchPost('/v1/item/insert', param)
}

/**
 * 通过ID获取维修项目信息
 * @param {参数} param
 */
export function selectItemById(param) {
  return request.fetchPost('/v1/item/select', param)
}

