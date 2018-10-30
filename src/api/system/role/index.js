import request from '@/utils/request'

/**
 * 插入角色
 * @param {参数} param
 */
export function saveRole(param) {
  return request.fetchPost('/v1/sysRole/insert', param)
}

/**
 * 更新角色
 * @param {参数} param
 */
export function updateRole(param) {
  return request.fetchPost('/v1/sysRole/update', param)
}

/**
 * 分页查询角色列表
 * @param {参数} param
 */
export function getRoleList(param) {
  return request.fetchPost('/v1/sysRole/selectList', param)
}

/**
 * 插入角色
 * @param {参数} param
 */
export function selectRole(param) {
  return request.fetchPost('/v1/sysRole/select', param)
}

/**
 * 删除角色
 * @param {参数} param
 */
export function deleteRole(param) {
  return request.fetchPost('/v1/sysRole/delete', param)
}
/**
 * 获取菜单树形
 * @param {参数} param
 */
export function getMenuTreeByRoleId(param) {
  return request.fetchPost('/v1/sysMenu/getMenuTreeByRoleId', param)
}
/**
 * 保存角色权限
 * @param {参数} param
 */
export function saveRoleMenu(param) {
  return request.fetchPost('/v1/sysRole/insertRoleMenu', param)
}
