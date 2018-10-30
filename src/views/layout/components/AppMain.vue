<template>
  <section class="app-main">
    <div  class="appMainTop" >
      <breadcrumb class="breadcrumb-container"  :breadcrumb="$route.meta.breadcrumb" ></breadcrumb>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <span class="hoText">
            <mallki className="mallki-text" :text="text"></mallki>
          </span>
          <span v-if="userInfo.headImage" >
            <img class="user-avatar" :src="picUrl + userInfo.headImage">
          </span>
          <span v-else >
            <img  class="user-avatar" :src="'/src/assets/img/head.gif'">
            <!-- <img v-else class="user-avatar" :src="'/src/assets/img/women.png'"> -->
          </span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown"  >
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            <i class="iconfont icon-tubiao15" style="font-size:14px"></i>
            主页
          </el-dropdown-item>
        </router-link>
        <router-link class="inlineBlock" :to="path">
          <el-dropdown-item>
            <i class="iconfont icon-bianji1" style="font-size:14px"></i>
            资料
          </el-dropdown-item>
        </router-link>
        <router-link class="inlineBlock" :to="changePwd">
          <el-dropdown-item>
            <i class="iconfont icon-ai-safe" style="font-size:14px"></i>
            安全
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;"><i style="font-size:14px" class="iconfont icon-tuichu2"></i>&nbsp;退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
    </div>
    <tags-view></tags-view>
    <transition name="fade" mode="out-in">
      <router-view  class="app-container"  :style="cssH" ></router-view>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import TagsView from './TagsView'
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  components: {
    Breadcrumb,
    TagsView,
    Mallki
  },
  name: 'AppMain',
  computed: {
    ...mapGetters([
      // 'sidebar',
      'userInfo'
    ])
  },
  data() {
    return {
      cssH: {},
      picUrl: process.env.BASE_API,
      text: '',
      path: '',
      changePwd: ''
    }
  },
  methods: {
    fitHeight() {
      if (this.$route.meta && this.$route.meta.fitHeight) { // 判断是否是自适应高度返回高度数据
        this.cssH = { 'height': window.innerHeight - 120 + 'px' }
      } else {
        this.cssH = {}
      }
    },
    logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  },
  watch: {
    '$route'(to, from) { // 路由变化判断是否需要设置高度
      this.fitHeight()
    }
  },
  mounted() {
    if (this.userInfo.name) {
      this.text = this.userInfo.name + ', 您好'
    } else {
      this.text = this.userInfo.loginName + ', 您好'
    }
    if (typeof (this.userInfo.clientId) === 'undefined') {
      this.path = { path: '/system/UserUpdate', query: { 'id': this.userInfo.id, flag: 2, userUpd: 1 }}
      this.changePwd = { path: '/system/changePassword' }
    } else {
      this.path = { path: '/operator/edit', query: { 'id': this.userInfo.id, flag: 2, userUpd: 1 }}
      this.changePwd = { path: '/operator/changePassword' }
    }
    this.fitHeight()
    var _this = this
    window.onresize = function() { // 监听窗体变化事件
      _this.fitHeight()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 20px;
        font-size: 18px;
        color:#a0a2a5;
        font-size: 14px;
      }
    }
  }
  .user-dropdown{
    width: 70px;
    text-align: center;
  }
  .hoText{
    margin-right: 5px;
    position: relative;
    top:-11px;
  }
</style>
