import request from '@/utils/request'

/**
 * 获取轮播图列表
 * @param {参数} param
 */
export function getCategoryList(param) {
  return request.fetchPost('/v1/category/selectList', param)
}

/**
 * 获取轮播图详情
 * @param {参数} param
 */
export function getCategory(param) {
  return request.fetchPost('/v1/category/select', param)
}

/**
 * 添加轮播图
 * @param {参数} param
 */
export function setCategory(param) {
  return request.fetchPost('/v1/category/insert', param)
}

/**
 * 修改轮播图
 * @param {参数} param
 */
export function updCategory(param) {
  return request.fetchPost('/v1/category/update', param)
}

/**
 * 修改轮播图
 * @param {参数} param
 */
export function delCategory(param) {
  return request.fetchPost('/v1/category/delete', param)
}

