import request from '@/utils/request'

/**
 * 获取优惠券列表
 * @param {参数} param
 */
export function getCouponList(param) {
  return request.fetchPost('/v1/coupon/selectList', param)
}

/**
 * 通过ID获取某个优惠券
 * @param {参数} param
 */
export function getCoupon(param) {
  return request.fetchPost('/v1/coupon/select', param)
}

/**
 * 添加保存优惠券
 * @param {参数} param
 */
export function saveCoupon(param) {
  return request.fetchPost('/v1/coupon/insert', param)
}

/**
 * 修改优惠券
 * @param {参数} param
 */
export function updateCoupon(param) {
  return request.fetchPost('/v1/coupon/update', param)
}

/**
 * 删除优惠券
 * @param {参数} param
 */
export function deleteCoupon(param) {
  return request.fetchPost('/v1/coupon/delete', param)
}
/**
 * 获取可用的优惠券列表
 * @param {参数} param
 */
export function selectCanUseList(param) {
  return request.fetchPost('/v1/coupon/selectCanUseList', param)
}

