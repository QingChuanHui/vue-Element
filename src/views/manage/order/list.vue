<template>
  <div style="height:100%">
    <div style="height:50px;" class="appCenterTop" >
      <el-input  style="width: 120px;" class="filter-item" placeholder="订单号" v-model="listQuery.billNo" size="mini" >
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-plus" v-permission="'sys:office:add'" size="mini"  @click="addT()" >新增</el-button>
    </div>
    <el-card>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="服务中" name="service"></el-tab-pane>
      <el-tab-pane label="待支付" name="unpaid"></el-tab-pane>
      <el-tab-pane label="待评价" name="evaluate"></el-tab-pane>
      <el-tab-pane label="已完成" name="complete"></el-tab-pane>
    </el-tabs>
    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"   border fit highlight-current-row  stripe size="mini">
      <el-table-column label="订单号"  align="center">
        <template slot-scope="scope">
          {{scope.row.billNo}}
        </template>
      </el-table-column>
      <el-table-column label="订单金额"  align="center">
        <template slot-scope="scope">
          {{scope.row.billMoney}}
        </template>
      </el-table-column>
      <el-table-column label="订单状态"  align="center">
        <template slot-scope="scope">
          {{scope.row.stateName}}
        </template>
      </el-table-column>
      <el-table-column label="是否首页"  align="center">
        <template slot-scope="scope">
          {{scope.row.flagHot == '1'?'是':'否' }}
        </template>
      </el-table-column>
      <el-table-column label="车主"  align="center">
        <template slot-scope="scope">
          {{scope.row.ownerName}}
        </template>
      </el-table-column>
      <el-table-column label="车主手机" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.ownerPhone}}</span>
        </template>
      </el-table-column>
      <el-table-column label="车牌号" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.carCode}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="280" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary"  size="mini" @click="handleWatch(scope.row.id)">查看</el-button>
          <el-button type="success" @click="completeClike(scope.row.id, ruleForm.flagHot == '1' ? '取消' : '设置为')" size="mini">{{scope.row.flagHot == '1'?'取消首页展示':'首页展示'}} </el-button>
          <!-- <el-button type="success"   size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="danger"  size="mini" @click="handleDelete(scope.row.id)">删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="margin-top: 30px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page.pages"
      :page-sizes="[10, 20, 50, 100, 200, 300, 500, 1000]"
      :page-size="page.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="page.total"
      background>
    </el-pagination>
    </el-card>
  </div>
</template>
<script>
  import { getOrderList, setHot } from '@/api/company/order/index'
  export default {
    data() {
      return {
        page: {},
        listLoading: true,
        listQuery: {
          billNo: '',
          pageNo: 1,
          pageSize: 10,
          state: 1
        },
        activeName: 'service'
      }
    },
    mounted() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        getOrderList(this.listQuery).then(response => {
          this.page = response.page
          this.listLoading = false
        })
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNo = val
        this.fetchData()
      },
      handleWatch(val) {
        this.$router.push({ path: 'orderEdit', query: { 'id': val }})
      },
      completeClike(val, text) {
        this.$confirm('此操作将订单' + text + '首页展示, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          setHot({ id: val }).then(response => {
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
            this.fetchData()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
      },
      handleClick(tab, event) {
        console.log(this.activeName)
        if (this.activeName === 'complete') {
          this.listQuery.state = 3
        } else if (this.activeName === 'service') {
          this.listQuery.state = 1
        } else if (this.activeName === 'unpaid') {
          this.listQuery.state = 0
        } else if (this.activeName === 'evaluate') {
          this.listQuery.state = 2
        }
        this.fetchData()
      }
    }
  }
</script>
