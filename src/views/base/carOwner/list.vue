<template>
  <div style="height:100%;" >
    <div style="height:50px;" class="appCenterTop" > 
      <el-button style="margin-left:10px;" class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()" >搜索</el-button>
    </div>
    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"  border fit highlight-current-row  stripe size="mini">
      <el-table-column label="姓名"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="性别"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.sex == 0 ? '女士' : '先生' }}
        </template>
      </el-table-column>
      <el-table-column label="电话"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.phone}}
        </template>
      </el-table-column>
      <el-table-column label="地址"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.address}}
        </template>
      </el-table-column>
      <el-table-column label="操作"  align="center"  >
        <template slot-scope="scope">
          <router-link :to="{ path: 'Car', query: { id: scope.row.id }}">
          <el-button type="primary" plain >我的车辆</el-button>
          </router-link>
          <router-link :to="{ path: '/base/MyCouponList', query: { id: scope.row.id }}">
          <el-button type="danger" plain >优惠券</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:10px"
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
import { getCarOwnerList } from '@/api/base/carowner/index'
export default {
  data() {
    return {
      page: {},
      listLoading: true,
      listQuery: {
        name: '',
        pageNo: 1,
        pageSize: 100,
        areaId: '',
        officeId: '',
        isShow: ''
      }
    }
  },
  // filters: {
  //   statusFilter(status) {
  //     const statusMap = {
  //       0: 'info',
  //       1: 'success'
  //     }
  //     return statusMap[status]
  //   }
  // },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getCarOwnerList({ 'pageNo': this.listQuery.pageNo, 'pageSize': this.listQuery.pageSize, 'name': this.listQuery.name }).then(response => {
        this.page = response.page
        this.listLoading = false
      })
    },
    // addT() {
    //   this.$router.push({ path: 'carouselAdd' })
    // },
    // handleUpdate(val) {
    //   this.$router.push({ path: 'carouselEdit', query: { 'id': val }})
    // },
    // handleWatch(val) {
    //   this.$router.push({ path: 'carouselWatch', query: { 'id': val, flag: 0 }})
    // },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.listQuery.pageNo = val
      this.fetchData()
    }
  }
}
</script>
