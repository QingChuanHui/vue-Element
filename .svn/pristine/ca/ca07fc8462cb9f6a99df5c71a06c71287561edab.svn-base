const base = {
  path: '/base',
  component: resolve => require(['../views/layout/Layout'], resolve),
  redirect: '/base/CarOwner',
  name: 'base',
  meta: {
    title: '基础',
    icon: 'iconfont icon-jichuziyuan'
  },
  children: [
    {
      path: 'CarOwner',
      name: 'base:carowner:list',
      component: resolve => require(['@/views/base/carowner/list'], resolve),
      meta: {
        title: '车主管理',
        fitHeight: 0,
        breadcrumb: [{
          title: '车主管理',
          path: '/base/CarOwner'
        }],
        parentpath: '/base/CarOwner'
      }
    },
    {
      path: 'Car',
      name: 'base:car:list',
      hidden: true,
      component: resolve => require(['@/views/base/car/list'], resolve),
      meta: {
        title: '车辆管理',
        fitHeight: 0,
        breadcrumb: [{
          title: '车主管理',
          path: '/base/carowner'
        }, {
          title: '车辆管理',
          path: '/manage/car'
        }],
        parentpath: '/base/carcarowner'
      }
    },
    {
      path: 'Client',
      name: 'base:client:list',
      component: resolve => require(['@/views/base/client/ClientList'], resolve),
      meta: {
        title: '维修企业信息',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修企业信息',
          path: '/base/Client'
        }],
        parentpath: '/base/Client'
      }
    },
    {
      path: 'ClientAdd',
      name: 'base:client:add',
      hidden: true,
      component: resolve => require(['@/views/base/client/ClientAdd'], resolve),
      meta: {
        title: '新增',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修企业信息',
          path: '/base/Client'
        },
        {
          title: '新增',
          path: '/base/ClientAdd'
        }],
        parentpath: '/base/Client'
      }
    },
    {
      path: 'ClientUpdate',
      name: 'base:client:edit',
      hidden: true,
      component: resolve => require(['@/views/base/client/ClientAdd'], resolve),
      meta: {
        title: '编辑',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修企业信息',
          path: '/base/Client'
        },
        {
          title: '编辑',
          path: '/base/ClientAdd'
        }
        ],
        parentpath: '/base/Client'
      }
    },
    {
      path: 'ClientWatch',
      name: 'base:client:view',
      hidden: true,
      component: resolve => require(['@/views/base/client/ClientAdd'], resolve),
      meta: {
        title: '查看',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修企业信息',
          path: '/base/Client'
        },
        {
          title: '查看',
          path: '/base/ClientAdd'
        }
        ],
        parentpath: '/base/Client'
      }
    },
    {
      path: 'Company',
      name: 'base:company:list',
      hidden: true,
      component: resolve => require(['@/views/base/company/CompanyList'], resolve),
      meta: {
        title: '门店信息',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修企业信息',
          path: '/base/Client'
        },
        {
          title: '门店信息',
          path: '/base/Company'
        }
        ],
        parentpath: '/base/Client'
      }
    },
    {
      path: 'CompanyAdd',
      name: 'base:company:add',
      hidden: true,
      component: resolve => require(['@/views/base/company/CompanyAdd'], resolve),
      meta: {
        title: '新增',
        fitHeight: 0,
        breadcrumb: [{
          title: '门店信息',
          path: '/base/Company'
        },
        {
          title: '新增',
          path: '/base/CompanyAdd'
        }
        ],
        parentpath: '/base/Company'
      }
    },
    {
      path: 'CompanyUpdate',
      name: 'base:company:edit',
      hidden: true,
      component: resolve => require(['@/views/base/company/CompanyAdd'], resolve),
      meta: {
        title: '编辑',
        fitHeight: 0,
        breadcrumb: [{
          title: '门店信息',
          path: '/base/Company'
        },
        {
          title: '编辑',
          path: '/base/CompanyAdd'
        }
        ],
        parentpath: '/base/Company'
      }
    },
    {
      path: 'CompanyWatch',
      name: 'base:company:view',
      hidden: true,
      component: resolve => require(['@/views/base/company/CompanyAdd'], resolve),
      meta: {
        title: '查看',
        fitHeight: 0,
        breadcrumb: [{
          title: '门店信息',
          path: '/base/Company'
        },
        {
          title: '查看',
          path: '/base/CompanyAdd'
        }
        ],
        parentpath: '/base/Company'
      }
    },
    {
      path: 'Operator',
      name: 'base:operator:list',
      hidden: true,
      component: resolve => require(['@/views/base/operator/OperatorList'], resolve),
      meta: {
        title: '操作员管理',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修企业信息',
          path: '/base/Client'
        },
        {
          title: '操作员管理',
          path: '/base/Company'
        }
        ],
        parentpath: '/base/Client'
      }
    },
    {
      path: 'OperatorAdd',
      name: 'base:operator:add',
      hidden: true,
      component: resolve => require(['@/views/base/operator/OperatorAdd'], resolve),
      meta: {
        title: '新增',
        fitHeight: 0,
        breadcrumb: [{
          title: '操作员管理',
          path: '/base/Operator'
        },
        {
          title: '新增',
          path: '/base/OperatorAdd'
        }
        ],
        parentpath: '/base/Operator'
      }
    },
    {
      path: 'OperatorUpdate',
      name: 'base:operator:edit',
      hidden: true,
      component: resolve => require(['@/views/base/operator/OperatorAdd'], resolve),
      meta: {
        title: '编辑',
        fitHeight: 0,
        breadcrumb: [{
          title: '操作员管理',
          path: '/base/Operator'
        },
        {
          title: '编辑',
          path: '/base/OperatorUpdate'
        }
        ],
        parentpath: '/base/Operator'
      }
    }, {
      path: 'OperatorWatch',
      name: 'base:operator:view',
      hidden: true,
      component: resolve => require(['@/views/base/operator/OperatorAdd'], resolve),
      meta: {
        title: '查看',
        fitHeight: 0,
        breadcrumb: [{
          title: '操作员管理',
          path: '/base/Operator'
        },
        {
          title: '查看',
          path: '/base/OperatorWatch'
        }
        ],
        parentpath: '/base/Operator'
      }
    },
    {
      path: 'Item',
      name: 'base:item:list',
      component: resolve => require(['@/views/base/item/ItemList'], resolve),
      meta: {
        title: '维修项目维护',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修项目维护',
          path: '/base/Item'
        }],
        parentpath: '/base/Item'
      }
    },
    {
      path: 'ItemAdd',
      name: 'base:item:add',
      hidden: true,
      component: resolve => require(['@/views/base/item/ItemAdd'], resolve),
      meta: {
        title: '查看',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修项目维护',
          path: '/base/Item'
        },
        {
          title: '新增',
          path: '/base/ItemAdd'
        }
        ],
        parentpath: '/base/Item'
      }
    },
    {
      path: 'ItemUpdate',
      name: 'base:item:edit',
      hidden: true,
      component: resolve => require(['@/views/base/item/ItemAdd'], resolve),
      meta: {
        title: '查看',
        fitHeight: 0,
        breadcrumb: [{
          title: '维修项目维护',
          path: '/base/Item'
        },
        {
          title: '修改',
          path: '/base/ItemUpdate'
        }
        ],
        parentpath: '/base/Item'
      }
    },
    {
      path: 'MyCouponList',
      name: 'operation:myCoupon:myList',
      component: resolve => require(['@/views/manage/myCoupon/list'], resolve),
      meta: {
        title: '我的优惠券',
        fitHeight: 0,
        breadcrumb: [{
          title: '类别维护',
          path: '/base/CarOwner'
        },
        {
          title: '我的优惠券',
          path: '/base/MyCouponList'
        }],
        parentpath: '/base/CarOwner'
      }
    },
    {
      path: 'MyCouponListAdd',
      name: 'operation:myCoupon:add',
      component: resolve => require(['@/views/manage/myCoupon/edit'], resolve),
      meta: {
        title: '我的优惠券',
        fitHeight: 0,
        breadcrumb: [{
          title: '类别维护',
          path: '/base/CarOwner'
        },
        {
          title: '我的优惠券',
          path: '/base/MyCouponList'
        },
        {
          title: '发放优惠券',
          path: '/base/MyCouponListAdd'
        }],
        parentpath: '/base/MyCouponList'
      }
    }
  ]
}
export default base
