import request from '@/utils/request'

/**
 * 获取反馈列表
 * @param {参数} param
 */
export function getFeedbackList(param) {
  return request.fetchPost('/v1/feedback/selectList', param)
}

/**
 * 删除反馈
 * @param {参数} param
 */
export function updFeedback(param) {
  return request.fetchPost('/v1/feedback/delete', param)
}

