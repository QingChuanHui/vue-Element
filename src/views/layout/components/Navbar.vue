<template>
  <el-menu class="navbar" mode="horizontal">
    <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> -->
    <!-- <breadcrumb></breadcrumb> -->
    <!--<img src="/src/assets/logo/logo.png" alt="公司"  width="80" height="40" style="margin-left:5px;margin-bottom:5px;" >-->
    <img src="/src/assets/logo/logo.png" alt="公司"  width="80" height="40" style="margin-left:5px;margin-bottom:5px;" >
    <tags-view  ></tags-view>
    <el-dropdown class="avatar-container" trigger="click" size="medium">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="userInfo.headImage+'?imageView2/1/w/80/h/80'">
        <i class="el-icon-caret-bottom" ></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown"  >
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            主页
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import TagsView from './TagsView'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Hamburger,
    TagsView
  },
  computed: {
    ...mapGetters([
      // 'sidebar',
      'userInfo'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 51px;
  line-height: 50px;
  border-radius: 0px !important;
  background-color: #444;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
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
      }
    }
  }
}
</style>

