const yingxiao = {
  path: '/example',
  component: resolve => require(['../views/layout/Layout'], resolve),
  redirect: '/example/table',
  name: 'Example',
  meta: { title: '运营', icon: 'example' },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: resolve => require(['@/views/table/index'], resolve),
      meta: { title: '列表', fitHeight: 1, breadcrumb: [{ title: '列表', path: '/example/table' }], parentpath: '/example/table' }
    },
    {
      path: 'tableAdd',
      name: 'tableAdd',
      hidden: true,
      component: resolve => require(['@/views/table/tableAdd'], resolve),
      meta: { title: '新增', fitHeight: 0, breadcrumb: [{ title: '列表', path: '/example/table' }, { title: '新增', path: '/example/tableAdd' }], parentpath: '/example/table' }
    },
    {
      path: 'tree',
      name: 'Tree',
      component: resolve => require(['@/views/tree/index'], resolve),
      meta: { title: '优惠券', breadcrumb: [{ title: '优惠券', path: '/example/tree' }], parentpath: '/example/tree' }
    }
  ]
}
export default yingxiao
