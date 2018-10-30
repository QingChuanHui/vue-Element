const system = {
  path: '/system',
  component: resolve => require(['../views/layout/Layout'], resolve),
  redirect: '/system/Office',
  name: 'sys',
  meta: {
    title: '系统',
    icon: 'iconfont icon-xitong'
  },
  children: [
    {
      path: 'Office',
      name: 'sys:office:list',
      component: resolve => require(['@/views/system/office/OfficeList'], resolve),
      meta: { title: '组织机构维护', fitHeight: 0, breadcrumb: [{ title: '组织机构维护', path: '/system/Office' }], parentpath: '/system/Office' }
    },
    {
      path: 'OfficeAdd',
      name: 'sys:office:add',
      hidden: true,
      component: resolve => require(['@/views/system/office/OfficeAdd'], resolve),
      meta: { title: '新增组织机构', fitHeight: 0, breadcrumb: [{ title: '组织机构维护', path: '/system/Office' }, { title: '新增组织机构', path: '/system/OfficeAdd' }], parentpath: '/system/Office' }
    },
    {
      path: 'OfficeUpdate',
      name: 'sys:office:edit',
      hidden: true,
      component: resolve => require(['@/views/system/office/OfficeAdd'], resolve),
      meta: { title: '编辑组织机构', fitHeight: 0, breadcrumb: [{ title: '组织机构维护', path: '/system/Office' }, { title: '编辑组织机构', path: '/system/OfficeUpdate' }], parentpath: '/system/Office' }
    },
    {
      path: 'OfficeWatch',
      name: 'sys:office:view',
      hidden: true,
      component: resolve => require(['@/views/system/office/OfficeAdd'], resolve),
      meta: { title: '查看组织机构', fitHeight: 0, breadcrumb: [{ title: '组织机构维护', path: '/system/Office' }, { title: '查看组织机构', path: '/system/OfficeWatch' }], parentpath: '/system/Office' }
    },
    {
      path: 'User',
      name: 'sys:user:list',
      component: resolve => require(['@/views/system/user/UserList'], resolve),
      meta: { title: '操作员维护', fitHeight: 0, breadcrumb: [{ title: '操作员维护', path: '/system/User' }], parentpath: '/system/User' }
    },
    {
      path: 'UserAdd',
      name: 'sys:user:add',
      hidden: true,
      component: resolve => require(['@/views/system/user/UserAdd'], resolve),
      meta: { title: '新增操作员', fitHeight: 0, breadcrumb: [{ title: '操作员维护', path: '/system/User' }, { title: '新增操作员', path: '/system/UserAdd' }], parentpath: '/system/User' }
    },
    {
      path: 'UserUpdate',
      name: 'sys:user:edit',
      hidden: true,
      component: resolve => require(['@/views/system/user/UserAdd'], resolve),
      meta: { title: '编辑操作员', fitHeight: 0, breadcrumb: [{ title: '操作员维护', path: '/system/User' }, { title: '编辑操作员', path: '/system/UserUpdate' }], parentpath: '/system/User' }
    },
    {
      path: 'UserWatch',
      name: 'sys:user:view ',
      hidden: true,
      component: resolve => require(['@/views/system/user/UserAdd'], resolve),
      meta: { title: '查看操作员', fitHeight: 0, breadcrumb: [{ title: '操作员维护', path: '/system/User' }, { title: '查看操作员', path: '/system/UserWatch' }], parentpath: '/system/User' }
    },
    {
      path: 'UserMenu',
      name: 'sys:user:permission',
      hidden: true,
      component: resolve => require(['@/views/system/user/UserMenu'], resolve),
      meta: {
        title: '权限设置',
        breadcrumb: [{
          title: '操作员维护',
          path: '/system/User'
        }, {
          title: '权限设置',
          path: '/system/UserMenu'
        }],
        parentpath: '/system/User'
      }
    },
    {
      path: 'changePassword',
      name: 'changePassword',
      component: resolve => require(['@/views/user/userManage/changePassword'], resolve),
      meta: {
        title: '修改密码',
        breadcrumb: [{
          title: '修改密码',
          path: '/system/changePassword'
        }],
        parentpath: '/system/changePassword'
      }
    },
    {
      path: 'Role',
      name: 'sys:role:list',
      component: resolve => require(['@/views/system/role/RoleList'], resolve),
      meta: { title: '角色维护', breadcrumb: [{ title: '角色维护', path: '/system/Role' }], parentpath: '/system/Role' }
    },
    {
      path: 'RoleAdd',
      name: 'sys:role:add',
      hidden: true,
      component: resolve => require(['@/views/system/role/RoleAdd'], resolve),
      meta: { title: '新增角色', breadcrumb: [{ title: '角色维护', path: '/system/Role' }, { title: '新增角色', path: '/system/RoleAdd' }], parentpath: '/system/Role' }
    },
    {
      path: 'RoleUpdate',
      name: 'sys:role:edit',
      hidden: true,
      component: resolve => require(['@/views/system/role/RoleAdd'], resolve),
      meta: { title: '编辑角色', breadcrumb: [{ title: '角色维护', path: '/system/Role' }, { title: '编辑角色', path: '/system/RoleAdd' }], parentpath: '/system/Role' }
    },
    {
      path: 'RoleWatch',
      name: 'sys:role:view',
      hidden: true,
      component: resolve => require(['@/views/system/role/RoleAdd'], resolve),
      meta: { title: '查看角色', breadcrumb: [{ title: '角色维护', path: '/system/Role' }, { title: '查看角色', path: '/system/RoleAdd' }], parentpath: '/system/Role' }
    },
    {
      path: 'RoleMenu',
      name: 'sys:role:permission',
      hidden: true,
      component: resolve => require(['@/views/system/role/RoleMenu'], resolve),
      meta: {
        title: '权限设置',
        breadcrumb: [{
          title: '角色维护',
          path: '/system/Role'
        }, {
          title: '权限设置',
          path: '/system/RoleMenu'
        }],
        parentpath: '/system/Role'
      }
    },
    {
      path: 'Area',
      name: 'sys:area:list',
      component: resolve => require(['@/views/system/area/list'], resolve),
      meta: {
        title: '区域维护',
        breadcrumb: [{
          title: '区域维护',
          path: '/system/Area'
        }],
        parentpath: '/system/Area'
      }
    }, {
      path: 'AreaAdd',
      name: 'sys:area:add',
      hidden: true,
      component: resolve => require(['@/views/system/area/edit'], resolve),
      meta: {
        title: '新增',
        breadcrumb: [{
          title: '区域维护',
          path: '/system/Area'
        }, {
          title: '新增',
          path: '/system/AreaAdd'
        }],
        parentpath: '/system/Area'
      }
    }, {
      path: 'AreaEdit',
      name: 'sys:area:edit',
      hidden: true,
      component: resolve => require(['@/views/system/area/edit'], resolve),
      meta: {
        title: '编辑',
        breadcrumb: [{
          title: '区域维护',
          path: '/system/Area'
        }, {
          title: '编辑',
          path: '/system/AreaEdit'
        }],
        parentpath: '/system/Area'
      }
    }, {
      path: 'AreaWatch',
      name: 'sys:area:view',
      hidden: true,
      component: resolve => require(['@/views/system/area/edit'], resolve),
      meta: {
        title: '查看',
        breadcrumb: [{
          title: '区域维护',
          path: '/system/Area'
        }, {
          title: '查看',
          path: '/system/AreaWatch'
        }],
        parentpath: '/system/Area'
      }
    },
    {
      path: 'integralTask',
      name: 'sys:integralTask:list',
      component: resolve => require(['@/views/system/integralTask/list'], resolve),
      meta: {
        title: '积分维护',
        breadcrumb: [{
          title: '积分维护',
          path: '/system/integralTask'
        }],
        parentpath: '/system/integralTask'
      }
    }, {
      path: 'integralTaskAdd',
      name: 'sys:integralTask:add',
      hidden: true,
      component: resolve => require(['@/views/system/integralTask/edit'], resolve),
      meta: {
        title: '新增',
        breadcrumb: [{
          title: '积分维护',
          path: '/system/integralTask'
        }, {
          title: '新增',
          path: '/system/integralTaskAdd'
        }],
        parentpath: '/system/integralTask'
      }
    }, {
      path: 'integralTaskEdit',
      name: 'sys:integralTask:edit',
      hidden: true,
      component: resolve => require(['@/views/system/integralTask/edit'], resolve),
      meta: {
        title: '编辑',
        breadcrumb: [{
          title: '积分维护',
          path: '/system/integralTask'
        }, {
          title: '编辑',
          path: '/system/integralTaskEdit'
        }],
        parentpath: '/system/integralTask'
      }
    }, {
      path: 'integralTaskWatch',
      name: 'sys:integralTask:view',
      hidden: true,
      component: resolve => require(['@/views/system/integralTask/edit'], resolve),
      meta: {
        title: '查看',
        breadcrumb: [{
          title: '积分维护',
          path: '/system/integralTask'
        }, {
          title: '查看',
          path: '/system/integralTaskWatch'
        }],
        parentpath: '/system/integralTask'
      }
    }
  ]
}
export default system
