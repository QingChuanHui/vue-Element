<template>
  <div style="height:100%;" >

    <div style="height:50px;" class="appCenterTop" >
      <el-input  style="width: 120px;" class="filter-item" placeholder="姓名" v-model="listQuery.name" size="mini" >
      </el-input>
      <el-button class="filter-item" type="primary"  icon="el-icon-search"  size="mini" @click="fetchData()">搜索</el-button>
      
      <el-button class="filter-item" type="primary"  icon="el-icon-plus"  size="mini"  @click="addT()" >新增</el-button>
    
    
    </div>

    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"   border fit highlight-current-row  stripe size="mini">
      <el-table-column label="机构名称"  align="center" width="340">
        <template slot-scope="scope">
          {{scope.row.officeName}}
        </template>
      </el-table-column>
      <el-table-column label="登录名称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.loginName}}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="110" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="410" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary"  size="mini" @click="handleWatch(scope.row.id)">查看</el-button>
          <el-button type="success"   size="mini" @click="handleUpdate(scope.row.id)">编辑</el-button>
          <el-button type="danger"  size="mini" @click="handleDelete(scope.row.id)">删除</el-button>
          <el-button type="info"  size="mini" @click="handleMenu(scope.row.id)">权限</el-button>
          <el-button type="warning"  size="mini" @click="handleRole(scope.row.id)">角色</el-button>
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


     <el-dialog title="角色设置" :visible.sync="dialogTableVisible">
       <el-form :model="form">
         <el-col :span="22">
          <el-form-item label="选择角色" >
                  <el-select  v-model="userRoleList" multiple placeholder="请选择">
                      <el-option
                            v-for="item in allUserRoleList"
                            :key="item.name"
                            :label="item.name"
                            :value="item.id">
                      </el-option>
                  </el-select>
          </el-form-item>
          </el-col>
       </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false" >取 消</el-button>
        <el-button type="primary" @click="setUserRole">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { getUserList, deleteUser, getUserRoles, getAllUserRoles, saveUserRole } from '@/api/system/user/index'
  export default {
    data() {
      return {
        form: {},
        currUserId: '',
        userRoleList: [],
        allUserRoleList: [],
        dialogTableVisible: false,
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
        getUserList(this.listQuery).then(response => {
          this.page = response.page
          this.listLoading = false
        })
      },
      addT() {
        this.$router.push({ path: '/system/UserAdd', query: { flag: 1 }})
      },
      handleUpdate(val) {
        this.$router.push({ path: '/system/UserUpdate', query: { 'id': val, flag: 2 }})
      },
      handleWatch(val) {
        this.$router.push({ path: '/system/UserWatch', query: { 'id': val, flag: 0 }})
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNo = val
        this.fetchData()
      },
      handleMenu(val) {
        this.$router.push({ path: '/system/UserMenu', query: { 'id': val, flag: 0 }})
      },
      setUserRole() {
        // 给操作员设置角色，提交userRoleList 数组到服务器
        console.log(this.userRoleList)
        let ids = ''
        if (this.userRoleList.length === 0) {
          ids = ''
        } else {
          ids = this.userRoleList.join(',')
          // console.log(ids_)
          // ids = ids_.substring(1, ids_.length)
        }
        console.log(ids)
        saveUserRole({ 'ids': ids, 'userId': this.currUserId }).then(response => {
          this.dialogTableVisible = false
          this.$message({
            type: 'success',
            message: '角色设置成功!'
          })
        })
      },
      handleRole(val) {
        // 获取这个操作员所在公司的所有角色
        getAllUserRoles({ 'userId': val }).then(response => {
          this.allUserRoleList = response.newList
        })
        // 获取这个操作员所有的角色
        getUserRoles({ 'userId': val }).then(response => {
          this.userRoleList = []
          this.userRoleList = response.newList
          console.log('bengin')
          console.log(this.userRoleList)
        })
        this.dialogTableVisible = true
        this.currUserId = val
      },
      handleDelete(val) {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteUser({ 'id': val }).then(() => {
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
