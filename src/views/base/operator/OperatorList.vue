<template>
  <div style="height:100%;" >

    <div style="height:50px;" class="appCenterTop" >
      <el-input  style="width: 120px;" class="filter-item" placeholder="登录帐号" v-model="listQuery.loginName" size="mini" >
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-plus"  size="mini"  @click="addT()" >新增</el-button>
    </div>

    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"   border fit highlight-current-row  stripe size="mini">
      <el-table-column label="帐号"  align="center" >
        <template slot-scope="scope">
          {{scope.row.loginName}}
        </template>
      </el-table-column>
       <el-table-column label="姓名"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.sex}}</span>
        </template>
      </el-table-column>

      <el-table-column label="电话"  align="center">
        <template slot-scope="scope">
          {{scope.row.phone}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="280" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary"  size="mini" @click="handleWatch(scope.row.id)">查看</el-button>
          <el-button type="success"   size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="danger"  size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 30px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pages"
      :page-sizes="[100, 200, 300, 500, 1000]"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
      background>
    </el-pagination>
  </div>
</template>

<script>
  import { getOperatorList, deleteOperator } from '@/api/base/operator/index'
  export default {
    data() {
      return {
        page: {},
        listLoading: true,
        listQuery: {
          loginName: '',
          clientId: '',
          pageNo: 1,
          pageSize: 100
        }
      }
    },
    created() {
      // ID如果为空 那么走当前操作员所在企业
      this.listQuery.clientId = this.$route.query.id
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getOperatorList(this.listQuery).then(response => {
          this.page = response.page
          this.listLoading = false
        })
      },
      addT() {
        this.$router.push({ path: 'OperatorAdd', query: { 'clientId': this.listQuery.clientId, flag: 1 }})
      },
      handleUpdate(val) {
        this.$router.push({ path: 'OperatorUpdate', query: { 'clientId': this.listQuery.clientId, 'id': val, flag: 2 }})
      },
      handleWatch(val) {
        this.$router.push({ path: 'OperatorWatch', query: { 'clientId': this.listQuery.clientId, 'id': val, flag: 0 }})
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNo = val
        this.fetchData()
      },
      handleDelete(val) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteOperator({ 'id': val }).then(() => {
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
      }
    }
  }
</script>
