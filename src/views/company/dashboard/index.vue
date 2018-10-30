<template>
  <div>
     <!-- <h1>管理端</h1>
    <div class="dashboard-text">name:{{userInfo.loginName}}</div>
    <div class="dashboard-text">mobile:{{userInfo.mobile}}</div> -->
    <adminDashboard></adminDashboard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
export default {
  components: { adminDashboard },
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
