<template>
  <div style="height:100%;" >
    <div style="height:50px;" class="appCenterTop" > 
      <el-button class="filter-item" type="primary"  icon="el-icon-plus"  size="mini"  @click="addT()" >发放优惠券</el-button>
    </div>
    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"  border fit highlight-current-row  stripe size="mini">
      <el-table-column label="优惠券名称"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.couponName}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="优惠券类别"  >
        <template slot-scope="scope">
          <el-tag> {{scope.row.couponType}} </el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="优惠到期日期"  >
        <template slot-scope="scope">
          <span>{{scope.row.endDate}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="优惠券面额"  >
        <template slot-scope="scope">
          <span>满{{scope.row.fullMoney}} 减 {{scope.row.reduceMoney}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="是否已经使用"  >
        <template slot-scope="scope">
          <el-tag :type="scope.row.flagUse | statusFilter">{{scope.row.flagUse == 0 ? "未使用":"已使用"}}</el-tag>
        </template>
      </el-table-column>

     <el-table-column align="center" label="操作" class-name="small-padding fixed-width" width="280">
        <template slot-scope="scope">
          <el-button type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:10px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pages"
      :page-sizes="[10,100, 200, 300, 500, 1000]"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
      background>
    </el-pagination>
  </div>
</template>

<script>
import { getMyCouponList, deleteMyCoupon } from '@/api/manage/myCoupon/index'
export default {
  data() {
    return {
      page: {},
      listLoading: true,
      ownerId: '',
      listQuery: {
        ownerId: '',
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'info',
        1: 'success'
      }
      return statusMap[status]
    }
  },
  created() {
    // 判断有没有ID，有的话带出数据
    if (this.$route.query.id) {
      this.listQuery.ownerId = this.$route.query.id
      this.fetchData()
    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getMyCouponList(this.listQuery).then(response => {
        this.page = response.page
        this.listLoading = false
      })
    },
    addT() {
      this.$router.push({ path: '/base/MyCouponListAdd', query: { 'id': this.listQuery.ownerId }})
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
        deleteMyCoupon({ 'id': val }).then(() => {
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
