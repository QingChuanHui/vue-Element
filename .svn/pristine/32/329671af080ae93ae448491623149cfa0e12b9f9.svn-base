<template>
  <div style="height:100%;" >
    <div style="height:50px;" class="appCenterTop" > 
      <el-input  style="width: 250px;" class="filter-item" placeholder="积分任务名称" v-model="listQuery.integralName" size="mini" clearable >
      </el-input>
      <el-button style="margin-left:10px;" class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()" >搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-plus"  size="mini"  @click="addT()" >新增</el-button>
    </div>
    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"  border fit highlight-current-row  stripe size="mini">
      <el-table-column label="名称"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.integralName}}
        </template>
      </el-table-column>
      <el-table-column label="积分数"  align="center" >
        <template slot-scope="scope">
          {{scope.row.integralValue + (scope.row.type |typeFilter) }}
        </template>
      </el-table-column>
     <el-table-column align="center" label="操作" class-name="small-padding fixed-width" width="280">
        <template slot-scope="scope">
          <el-button type="primary"  size="mini" @click="handleWatch(scope.row.id)">查看</el-button>
          <el-button type="success"   size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pages"
      :page-sizes="[10, 20, 50, 100, 200, 300, 500, 1000]"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
      background>
    </el-pagination>
  </div>
</template>

<script>
import { getIntegralTaskList, delIntegralTask } from '@/api/system/integralTask/index'
export default {
  data() {
    return {
      page: {},
      listLoading: true,
      listQuery: {
        integralName: '',
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  filters: {
    typeFilter(status) {
      const statusMap = {
        0: '',
        1: ' 元积1分'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getIntegralTaskList(this.listQuery).then(response => {
        this.page = response.page
        this.listLoading = false
      })
    },
    addT() {
      this.$router.push({ path: 'integralTaskAdd', query: { 'flag': '1' }})
    },
    handleUpdate(val) {
      this.$router.push({ path: 'integralTaskEdit', query: { 'id': val, 'flag': '2' }})
    },
    handleWatch(val) {
      this.$router.push({ path: 'integralTaskWatch', query: { 'id': val, 'flag': '0' }})
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
        delIntegralTask({ 'id': val }).then(() => {
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
