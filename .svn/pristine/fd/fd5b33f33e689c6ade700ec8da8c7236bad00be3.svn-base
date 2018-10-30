<template>
  <div class="menu-wrapper">
    <template v-for="item in routes" v-if="!item.hidden">
      <router-link  :to="item.redirect"   :key="item.redirect" style="text-align:center;">
        <el-menu-item :index="item.redirect" :class="{'submenu-title-noDropdown':!isNest}" style="height:45px;line-height:45px;">
          <i v-if="item.meta&&item.meta.icon" style="font-size:16px;" :class="item.meta.icon"></i>
          <span  slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  components: {
  },
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu-item.is-active{
  background-color: #f8f8f8 !important
}
</style>
