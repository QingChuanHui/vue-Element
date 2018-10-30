<template>
  <div style="height:100%;" >
    <el-table :data="page.records" v-loading.body="listLoading" element-loading-text="玩命加载中……"  border fit highlight-current-row  stripe size="mini">
      <el-table-column label="车主昵称"  align="center"  >
        <template slot-scope="scope">
          {{scope.row.ownerName}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="车主电话"  >
        <template slot-scope="scope">
          {{scope.row.ownerPhone}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="反馈内容"  >
        <template slot-scope="scope">
          <span>{{scope.row.content}}</span>
        </template>
      </el-table-column>

     <el-table-column align="center" label="操作" class-name="small-padding fixed-width" width="280">
        <template slot-scope="scope">
          <el-button type="primary"  size="mini" @click="handleWatch(scope.row.id)">处理</el-button>
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
import { getFeedbackList, updFeedback } from '@/api/manage/feedback/index'
export default {
  data() {
    return {
      page: {},
      listLoading: true,
      listQuery: {
        ownerId: '',
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getFeedbackList(this.listQuery).then(response => {
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
      updFeedback({ 'id': val }).then(() => {
        this.$message({
          type: 'success',
          message: '处理成功!'
        })
        this.fetchData()
      })
    }
  }
}
</script>
