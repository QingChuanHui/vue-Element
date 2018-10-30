import request from '@/utils/request'

/**
 * 查看订单列表
 * @param {参数} param
 */
export function getOrderList(param) {
  return request.fetchPost('/v1/bill/selectList', param)
}

/**
 * 订单详情
 * @param {参数} param
 */
export function getOrder(param) {
  return request.fetchPost('/v1/bill/select', param)
}

/**
 * 完工
 * @param {参数} param
 */
export function complete(param) {
  return request.fetchPost('/v1/bill/signForBill', param)
}

/**
 * 设置热门
 * @param {参数} param
 */
export function setHot(param) {
  return request.fetchPost('/v1/bill/setEvaluationHot', param)
}
