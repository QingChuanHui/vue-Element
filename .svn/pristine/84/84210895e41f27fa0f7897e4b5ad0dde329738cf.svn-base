import request from '@/utils/request'

/**
 * 获取头条列表
 * @param {参数} param
 */
export function getNewsList(param) {
  return request.fetchPost('/v1/news/selectList', param)
}

/**
 * 获取头条详情
 * @param {参数} param
 */
export function getNews(param) {
  return request.fetchPost('/v1/news/select', param)
}

/**
 * 添加头条
 * @param {参数} param
 */
export function setNews(param) {
  return request.fetchPost('/v1/news/insert', param)
}

/**
 * 修改头条
 * @param {参数} param
 */
export function updNews(param) {
  return request.fetchPost('/v1/news/update', param)
}

/**
 * 修改头条
 * @param {参数} param
 */
export function delNews(param) {
  return request.fetchPost('/v1/news/delete', param)
}

