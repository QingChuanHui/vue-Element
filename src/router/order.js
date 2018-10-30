const order = {
  path: '/order',
  component: resolve => require(['../views/layout/Layout'], resolve),
  redirect: '/order/table',
  name: 'order',
  meta: { title: '订单', icon: 'example' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: resolve => require(['@/views/table/index'], resolve),
      meta: { title: '列表', fitHeight: 1, breadcrumb: [{ title: '列表', path: '/order/table' }], parentpath: '/order/table' }
    },
    {
      path: 'tableAdd',
      name: 'tableAdd',
      hidden: true,
      component: resolve => require(['@/views/table/tableAdd'], resolve),
      meta: { title: '新增', fitHeight: 0, breadcrumb: [{ title: '列表', path: '/order/table' }, { title: '新增', path: '/order/tableAdd' }], parentpath: '/example/table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: resolve => require(['@/views/tree/index'], resolve),
      meta: { title: '优惠券', breadcrumb: [{ title: '优惠券', path: '/order/tree' }], parentpath: '/order/tree' }
    }
  ]
}
export default order
