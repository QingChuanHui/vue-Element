const user = {
  path: '/user',
  component: resolve => require(['../views/layout/Layout'], resolve),
  redirect: '/user/userList',
  name: 'user',
  meta: { title: '用户', icon: 'example' },
  children: [
    {
      path: 'userList',
      name: 'userList',
      component: resolve => require(['@/views/user/userManage/userList'], resolve),
      meta: { title: '用户管理', breadcrumb: [{ title: '用户管理', path: '/user/userList' }], parentpath: '/user/userList' }
    },
    {
      path: 'roleList',
      name: 'roleList',
      component: resolve => require(['@/views/user/roleManage/roleList'], resolve),
      meta: { title: '角色管理', breadcrumb: [{ title: '角色管理', path: '/user/roleList' }], parentpath: '/user/roleList' }
    }
  ]
}
export default user
