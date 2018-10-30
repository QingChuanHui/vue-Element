import request from '@/utils/request'

/**
 * 登录接口
 * @param {*参数} param
 */
export function login(param) {
  return request.fetchPost('/v1/sys/login', param)
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data: {
  //     username,
  //     password
  //   }
  // })
}
/**
 * 获取用户信息
 * @param {*参数} param
 */
export function getInfo(param) {
  return request.fetchPost('/v1/sysUser/getUserByToken', param)
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

/**
 * 获取用户权限信息
 * @param {*参数} param
 */
export function getUserMenu() {
  return request.fetchPost('/v1/sysMenu/selectListByUserId', {})
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

