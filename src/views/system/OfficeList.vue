<template>
  <div style="height:100%;" >

    <div style="height:50px;" class="appCenterTop" >
      <el-input  style="width: 120px;" class="filter-item" placeholder="机构名称" v-model="listQuery.name" size="mini" >
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-plus"  size="mini"  @click="addT()" >新增</el-button>
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
          <el-button type="primary" plain size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="success" plain  size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="danger" plain size="mini" @click="handleUpdate(scope.row.id)">删除</el-button>
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
  import { getOfficeList } from '@/api/system/office/index'
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
        this.$router.push({ path: 'carouselEdit' })
      },
      handleUpdate(val) {
        this.$router.push({ name: 'carouselEdit', query: { 'id': val }})
      },
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
