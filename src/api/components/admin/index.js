import request from '@/utils/request'

/**
 * 获取最近7天数据变化
 * @param {参数} param
 */
export function getWeekReport(param) {
  return request.fetchPost('/v1/index/getWeekReport', param)
}

/**
 * 获取维修厂最近7天数据变化
 * @param {参数} param
 */
export function getClientWeekReport(param) {
  return request.fetchPost('/v1/index/getWeekReportToClient', param)
}
