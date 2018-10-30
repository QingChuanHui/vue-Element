import request from '@/utils/request'

/**
 * 获取机构列表
 * @param {参数} param
 */
export function getOfficeList(param) {
  return request.fetchPost('/v1/sysOffice/selectList', param)
}
/**
 * 保存机构树形
 */
export function saveOffice(param) {
  return request.fetchPost('/v1/sysOffice/insert', param)
}

/**
 * 删除机构
 */
export function deleteOffice(param) {
  return request.fetchPost('/v1/sysOffice/delete', param)
}

/**
 * 通过ID获取机构信息
 */
export function getOffice(param) {
  return request.fetchPost('/v1/sysOffice/select', param)
}

/**
 * 修改机构信息
 */
export function updateOffice(param) {
  return request.fetchPost('/v1/sysOffice/update', param)
}
/**
 * 获取机构树形
 */
export function getOfficeTreeData(param) {
  return request.fetchPost('/v1/sysOffice/getOfficeTree', param)
}
