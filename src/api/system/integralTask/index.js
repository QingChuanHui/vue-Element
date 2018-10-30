import request from '@/utils/request'

/**
 * 获取积分任务列表
 * @param {参数} param
 */
export function getIntegralTaskList(param) {
  return request.fetchPost('/v1/integralTask/selectList', param)
}

/**
 * 获取积分任务详情
 * @param {参数} param
 */
export function getIntegralTask(param) {
  return request.fetchPost('/v1/integralTask/select', param)
}

/**
 * 添加积分任务
 * @param {参数} param
 */
export function setIntegralTask(param) {
  return request.fetchPost('/v1/integralTask/insert', param)
}

/**
 * 修改积分任务
 * @param {参数} param
 */
export function updIntegralTask(param) {
  return request.fetchPost('/v1/integralTask/update', param)
}

/**
 * 删除积分任务
 * @param {参数} param
 */
export function delIntegralTask(param) {
  return request.fetchPost('/v1/integralTask/delete', param)
}

/**
 * 检测积分任务名称是否重复
 * @param {参数} param
 */
export function checkTaskName(param) {
  return request.fetchPost('/v1/integralTask/taskNameUniqueness', param)
}
