import request from '@/utils/request'

/**
 * 获取我的优惠券列表
 * @param {参数} param
 */
export function getMyCouponList(param) {
  return request.fetchPost('/v1/myCoupon/selectList', param)
}

/**
 * 通过ID获取我的某个优惠券
 * @param {参数} param
 */
export function getMyCoupon(param) {
  return request.fetchPost('/v1/myCoupon/select', param)
}

/**
 * 添加保存我的优惠券
 * @param {参数} param
 */
export function saveMyCoupon(param) {
  return request.fetchPost('/v1/myCoupon/insert', param)
}

/**
 * 修改我的优惠券(后台不修改， 只新增和删除)
 * @param {参数} param
 */
export function updateMyCoupon(param) {
  return request.fetchPost('/v1/myCoupon/update', param)
}

/**
 * 删除优惠券
 * @param {参数} param
 */
export function deleteMyCoupon(param) {
  return request.fetchPost('/v1/myCoupon/delete', param)
}
