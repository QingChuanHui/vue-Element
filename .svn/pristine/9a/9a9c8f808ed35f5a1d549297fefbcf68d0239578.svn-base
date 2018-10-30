<template>
  <div>
     
    <div style="height:50px;" class="appCenterTop" >
      <el-button class="filter-item" type="primary"  icon="el-icon-plus"  size="mini"  @click="addT()" >新增门店</el-button>
    </div>
    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"   border fit highlight-current-row  stripe size="mini">
      <el-table-column label="门店名称"  align="center" >
        <template slot-scope="scope">
          {{scope.row.companyName}}
        </template>
      </el-table-column>
      <el-table-column label="负责人"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.master}}</span>
        </template>
      </el-table-column>
      <el-table-column label="负责人电话"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="380" class-name="small-padding fixed-width">
        <template slot-scope="scope">
         <el-button type="primary"  size="mini" @click="handleWatch(scope.row.id)">查看</el-button>
          <el-button type="success"   size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="danger"  size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
          <el-button type="primary"  size="mini" @click="handleSet(scope.row.id)">功能设置</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCompanyList, deleteCompany } from '@/api/base/company/index'
import { sessionStorageTool } from '@/utils'
export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  data() {
    return {
      page: {},
      listLoading: true,
      listQuery: {
        clientId: '',
        pageNo: 1,
        pageSize: 1000
      }

    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.listQuery.clientId = this.userInfo.clientId
      getCompanyList(this.listQuery).then(response => {
        this.page = response.page
        this.listLoading = false
      })
    },
    addT() {
      this.$router.push({ path: 'CompanyAdd', query: { 'clientId': this.userInfo.clientId, flag: 1 }})
    },
    handleUpdate(val) {
      this.$router.push({ path: 'CompanyUpdate', query: { 'clientId': this.userInfo.clientId, 'id': val, flag: 2 }})
    },
    handleWatch(val) {
      this.$router.push({ path: 'CompanyWatch', query: { 'clientId': this.userInfo.clientId, 'id': val, flag: 0 }})
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCompany({ 'id': val }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.fetchData()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    handleSet(val) {
      this.$router.push({ path: '/companySet' })
      sessionStorageTool.setSessionStorage({// 写入门店id
        'companyId': val
      })
    }
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
