<template>
  <div style="height:100%;" >

    <div style="height:50px;" class="appCenterTop" >
      <el-input  style="width: 120px;" class="filter-item" placeholder="机构名称" v-model="listQuery.name" size="mini" >
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-plus" v-permission="'sys:office:add'" size="mini"  @click="addT()" >新增</el-button>
    </div>

    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"   border fit highlight-current-row  stripe size="mini">
      <el-table-column label="机构名称"  align="center" width="340">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="负责人" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.master}}</span>
        </template>
      </el-table-column>

      <el-table-column label="负责人电话" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.phone}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="410" class-name="small-padding fixed-width">
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
  import { getOfficeList, deleteOffice } from '@/api/system/office/index'
  export default {
    data() {
      return {
        page: {},
        listLoading: true,
        listQuery: {
          name: '',
          pageNo: 1,
          pageSize: 100
        }
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        console.log('fetchData')
        // getOfficeList({ 'pageNo': this.listQuery.pageNo, 'pageSize': this.listQuery.pageSize }).then(response => {
        getOfficeList(this.listQuery).then(response => {
          this.page = response.page
          this.listLoading = false
        })
      },
      addT() {
        this.$router.push({ path: '/system/OfficeAdd', query: { flag: 1 }})
      },
      handleUpdate(val) {
        this.$router.push({ path: '/system/OfficeUpdate', query: { 'id': val, flag: 2 }})
      },
      handleWatch(val) {
        this.$router.push({ path: '/system/OfficeWatch', query: { 'id': val, flag: 0 }})
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
          deleteOffice({ 'id': val }).then(() => {
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
