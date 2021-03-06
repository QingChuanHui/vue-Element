const shopLayout = resolve => require(['@/views/layout/index'], resolve)
export const menuFirst = [
  {
    path: '/',
    component: shopLayout,
    redirect: '/dashboard',
    name: 'Dashboard',
    noMenu: true,
    meta: {
      title: '首页',
      icon: 'iconfont icon-31shouyexuanzhong',
      parentpath: '/dashboard',
      MenuGroup: 'menuFirst' // 一级菜单
    },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      meta: {
        title: '首页',
        parentpath: '/dashboard',
        breadcrumb: [{
          title: '首页',
          path: ''
        }]
      },
      component: resolve => require(['@/views/company/dashboard/index'], resolve)
    }]
  },
  {// 门店路由
    path: '/company',
    component: shopLayout,
    redirect: '/company/list',
    name: 'company',
    noMenu: true,
    meta: {
      title: '门店',
      icon: 'iconfont icon-jinrudianpu',
      MenuGroup: 'menuFirst' // 一级菜单
    },
    children: [
      {
        path: 'list',
        name: 'list',
        meta: {
          title: '门店维护',
          parentpath: '/company/list',
          breadcrumb: [{
            title: '门店维护',
            path: ''
          }]
        },
        component: resolve => require(['@/views/shopdashboard/index'], resolve)
      },
      {
        path: 'companyAdd',
        meta: {
          title: '新增',
          parentpath: '/company/list',
          breadcrumb: [
            {
              title: '门店维护',
              path: '/company/list'
            },
            {
              title: '新增',
              path: '/companyAdd'
            }
          ]
        },
        component: resolve => require(['@/views/base/company/CompanyAdd'], resolve)
      },
      {
        path: 'CompanyUpdate',
        meta: {
          title: '新增',
          parentpath: '/company/list',
          breadcrumb: [
            {
              title: '门店维护',
              path: '/company/list'
            },
            {
              title: '新增',
              path: '/companyAdd'
            }
          ]
        },
        component: resolve => require(['@/views/base/company/CompanyAdd'], resolve)
      },
      {
        path: 'CompanyWatch',
        meta: {
          title: '新增',
          parentpath: '/company/list',
          breadcrumb: [
            {
              title: '门店维护',
              path: '/company/list'
            },
            {
              title: '新增',
              path: '/companyAdd'
            }
          ]
        },
        component: resolve => require(['@/views/base/company/CompanyAdd'], resolve)
      }
    ]
  },
  { // 操作员路由
    path: '/operator',
    component: shopLayout,
    redirect: '/operator/list',
    name: 'operator',
    meta: {
      title: '人员',
      icon: 'iconfont icon-fl-renyuan',
      MenuGroup: 'menuFirst'
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: resolve => require(['@/views/company/operator/OperatorList'], resolve),
        meta: {
          title: '操作员查询',
          fitHeight: 1,
          breadcrumb: [{
            title: '操作员管理',
            path: '/operator/list'
          }],
          parentpath: '/operator/list'
        }
      },
      {
        path: 'add',
        name: 'add',
        hidden: true,
        component: resolve => require(['@/views/company/operator/OperatorAdd'], resolve),
        meta: {
          title: '新增',
          fitHeight: 0,
          breadcrumb: [{
            title: '操作员维护',
            path: '/operator/list'
          }, {
            title: '新增',
            path: '/operator/add'
          }],
          parentpath: '/operator/list'
        }
      },
      {
        path: 'edit',
        name: 'edit',
        hidden: true,
        component: resolve => require(['@/views/company/operator/OperatorAdd'], resolve),
        meta: {
          title: '编辑',
          fitHeight: 0,
          breadcrumb: [{
            title: '操作员维护',
            path: '/operator/list'
          }, {
            title: '编辑',
            path: '/operator/edit'
          }],
          parentpath: '/operator/list'
        }
      },
      {
        path: 'watch',
        name: 'watch',
        hidden: true,
        component: resolve => require(['@/views/company/operator/OperatorAdd'], resolve),
        meta: {
          title: '查看',
          fitHeight: 0,
          breadcrumb: [{
            title: '操作员维护',
            path: '/operator/list'
          }, {
            title: '查看',
            path: '/operator/watch'
          }],
          parentpath: '/operator/list'
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
            path: '/operator/changePassword'
          }],
          parentpath: '/operator/changePassword'
        }
      }
    ]
  },
  {// 订单路由
    path: '/order',
    component: shopLayout,
    redirect: '/order/list',
    name: 'order',
    meta: {
      title: '订单',
      icon: 'iconfont icon-dingdan',
      MenuGroup: 'menuFirst'
    },
    children: [
      {
        path: 'list',
        name: 'list',
        component: resolve => require(['@/views/company/order/orderList'], resolve),
        meta: {
          title: '订单管理',
          fitHeight: 1,
          breadcrumb: [{
            title: '订单管理',
            path: '/order/index'
          }],
          parentpath: '/order/list'
        }
      },
      {
        path: 'edit',
        name: 'edit',
        component: resolve => require(['@/views/company/order/orderEdit'], resolve),
        meta: {
          title: '订单详情',
          fitHeight: 1,
          breadcrumb: [{
            title: '订单管理',
            path: '/order/index'
          },
          {
            title: '订单详情',
            path: '/order/edit'
          }],
          parentpath: '/order/list'
        }
      }
    ]
  }
]
export const menuSecond = [
  {
    path: '/companySet',
    component: shopLayout,
    redirect: '/companySet/index',
    name: 'companySet',
    meta: {
      title: '门店业务',
      icon: 'iconfont icon-02',
      MenuGroup: 'menuSecond'
    },
    children: [{
      path: 'index',
      name: 'index',
      component: resolve => require(['@/views/company/index'], resolve),
      meta: {
        title: '门店业务',
        fitHeight: 1,
        breadcrumb: [{
          title: '门店业务',
          path: '/companySet/index'
        }],
        parentpath: '/companySet/index'
      }
    }]
  },
  {
    path: '/part',
    component: shopLayout,
    redirect: '/part/PartList',
    name: 'part',
    meta: {
      title: '商品管理',
      icon: 'iconfont icon-shangpin-tianchong',
      MenuGroup: 'menuSecond'
    },
    children: [
      {
        path: 'PartList',
        name: 'PartList',
        component: resolve => require(['@/views/company/part/PartList'], resolve),
        meta: {
          title: '商品管理',
          fitHeight: 1,
          breadcrumb: [{
            title: '商品管理',
            path: '/part/PartList'
          }],
          parentpath: '/part/PartList'
        }
      },
      {
        path: 'PartAdd',
        name: 'PartAdd',
        component: resolve => require(['@/views/company/part/PartEdit'], resolve),
        meta: {
          title: '新增',
          fitHeight: 1,
          breadcrumb: [{
            title: '商品管理',
            path: '/part/PartList'
          },
          {
            title: '新增',
            path: '/part/PartAdd'
          }],
          parentpath: '/part/PartList'
        }
      },
      {
        path: 'PartEdit',
        name: 'PartEdit',
        component: resolve => require(['@/views/company/part/PartEdit'], resolve),
        meta: {
          title: '编辑',
          fitHeight: 1,
          breadcrumb: [{
            title: '商品管理',
            path: '/part/PartList'
          }, {
            title: '编辑',
            path: '/part/PartEdit'
          }],

          parentpath: '/part/PartList'
        }
      },
      {
        path: 'PartWatch',
        name: 'PartWatch',
        component: resolve => require(['@/views/company/part/PartEdit'], resolve),

        meta: {
          title: '查看',
          fitHeight: 1,
          breadcrumb: [{
            title: '商品管理',
            path: '/part/PartList'
          }, {
            title: '查看',
            path: '/part/PartWatch'
          }],

          parentpath: '/part/PartList'
        }
      }
    ]
  },
  {
    path: '/item',
    component: shopLayout,
    redirect: '/item/ItemList',
    name: 'item',
    meta: {
      title: '项目管理',
      icon: 'iconfont icon-shebeiguanli',
      MenuGroup: 'menuSecond'
    },
    children: [
      {
        path: 'ItemList',
        name: 'ItemList',
        component: resolve => require(['@/views/company/item/ItemList'], resolve),
        meta: {
          title: '项目管理',
          fitHeight: 1,
          breadcrumb: [{
            title: '项目管理',
            path: '/item/ItemList'
          }],
          parentpath: '/item/ItemList'
        }
      },
      {
        path: 'ItemAdd',
        name: 'ItemAdd',
        component: resolve => require(['@/views/company/item/ItemEdit'], resolve),
        meta: {
          title: '新增',
          fitHeight: 1,
          breadcrumb: [
            {
              title: '项目管理',
              path: '/item/ItemList'
            },
            {
              title: '新增',
              path: '/item/ItemAdd'
            }
          ],
          parentpath: '/item/ItemList'
        }
      },
      {
        path: 'ItemEdit',
        name: 'ItemEdit',
        component: resolve => require(['@/views/company/item/ItemEdit'], resolve),
        meta: {
          title: '编辑',
          fitHeight: 1,
          breadcrumb: [
            {
              title: '项目管理',
              path: '/item/ItemList'
            },
            {
              title: '编辑',
              path: '/item/ItemEdit'
            }
          ],
          parentpath: '/item/ItemList'
        }
      },
      {
        path: 'ItemWatch',
        name: 'ItemWatch',
        component: resolve => require(['@/views/company/item/ItemEdit'], resolve),
        meta: {
          title: '查看',
          fitHeight: 1,
          breadcrumb: [
            {
              title: '项目管理',
              path: '/item/ItemList'
            },
            {
              title: '查看',
              path: '/item/ItemWatch'
            }
          ],
          parentpath: '/item/ItemList'
        }
      }
    ]
  }
]
