<template>
  <div style="height:100%;" >

    <div style="height:50px;" class="appCenterTop" >
      
      <el-select v-model="listQuery.type" clearable placeholder="请选择项目类别">
                <el-option v-for="(item,index) in itemTypeData" :key="index"  :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input  style="width: 120px;" class="filter-item" placeholder="项目名称" v-model="listQuery.itemName" size="mini" >
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()">搜索</el-button>
      <el-button class="filter-item" type="primary"  icon="el-icon-plus" v-permission="'base:client:add'" size="mini"  @click="addT()" >新增</el-button>
    </div>

    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"   border fit highlight-current-row  stripe size="mini">
      <el-table-column label="项目编码"  align="center" >
        <template slot-scope="scope">
          {{scope.row.itemCode}}
        </template>
      </el-table-column>
       <el-table-column label="项目名称"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.itemName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="类别名称"  align="center">
        <template slot-scope="scope">
          <span>{{scope.row.typeName}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="410" class-name="small-padding fixed-width">
        <template slot-scope="scope">
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
  import { getItemList, deleteItem } from '@/api/base/item/index'
  import { getDictList } from '@/api/system/dict/index'
  export default {
    data() {
      return {
        page: {},
        listLoading: true,
        listQuery: {
          type: '',
          itemName: '',
          pageNo: 1,
          pageSize: 100
        },
        itemTypeData: []
      }
    },
    created() {
      this.fetchData()
      this.getItemType()
    },
    methods: {
      fetchData() {
        this.listLoading = true
        console.log('fetchData')
        getItemList(this.listQuery).then(response => {
          this.page = response.page
          this.listLoading = false
        })
      },
      getItemType() {
        const itemTypeQuery = { 'type': 'itemType' }
        getDictList(itemTypeQuery).then(response => {
          this.itemTypeData = response.newList
        })
      },
      addT() {
        this.$router.push({ path: '/base/ItemAdd', query: { flag: 1, type: this.listQuery.type }})
      },
      handleUpdate(val) {
        this.$router.push({ path: '/base/ItemUpdate', query: { 'id': val, flag: 2 }})
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
          deleteItem({ 'id': val }).then(() => {
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
