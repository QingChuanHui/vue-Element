import request from '@/utils/request'

/**
 * 获取操作员列表
 * @param {参数} param
 */
export function getUserList(param) {
  return request.fetchPost('/v1/sysUser/selectList', param)
}
/**
 * 删除操作员
 * @param {参数} param
 */
export function deleteUser(param) {
  return request.fetchPost('/v1/sysUser/delete', param)
}
/**
 * 通过ID获取操作员信息
 * @param {参数} param
 */
export function selectUser(param) {
  return request.fetchPost('/v1/sysUser/select', param)
}
/**
 * 新增保存操作员信息
 * @param {参数} param
 */
export function saveUser(param) {
  return request.fetchPost('/v1/sysUser/insert', param)
}
/**
 * 修改操作员信息
 * @param {参数} param
 */
export function updateUser(param) {
  return request.fetchPost('/v1/sysUser/update', param)
}
/**
 * 检测用户名是否重复
 * @param {参数} param
 */
export function loginNameUniqueness(param) {
  return request.fetchPost('/v1/sysUser/loginNameUniqueness', param)
}
/**
 * 获取操作员的角色列表
 * @param {参数} param
 */
export function getUserRoles(param) {
  return request.fetchPost('/v1/sysUser/getUserRoles', param)
}
/**
 * 获取某个机构所有的角色(不包含系统角色)
 * @param {参数} param
 */
export function getAllUserRoles(param) {
  return request.fetchPost('/v1/sysUser/getAllUserRoles', param)
}
/**
 * 保存用户的角色
 * @param {参数} param
 */
export function saveUserRole(param) {
  return request.fetchPost('/v1/sysUser/saveUserRoles', param)
}
/**
 * 获取用户的权限树
 * @param {参数} param
 */
export function getMenuTreeByUserId(param) {
  return request.fetchPost('/v1/sysUser/getMenuTreeByUserId', param)
}
/**
 * 获取用户的权限树
 * @param {参数} param
 */
export function saveUserMenu(param) {
  return request.fetchPost('/v1/sysUser/saveUserMenu', param)
}

/**
 * 修改维修厂操作员登录密码
 * @param {参数} param
 */
export function clientoperatorUpdPwd(param) {
  return request.fetchPost('/v1/clientoperator/changePassword', param)
}

/**
 * 修改管理员登录密码
 * @param {参数} param
 */
export function sysUserUpdPwd(param) {
  return request.fetchPost('/v1/sysUser/changePassword', param)
}
