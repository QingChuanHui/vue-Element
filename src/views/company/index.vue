<template>
  <div>

    <!-- <h4>门店业务管理</h4>
    <el-row> 
      <el-col :span="3" v-for="(item,index) in serviceList" :key="index"> 
        <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card">
          <div :class="item.type | statusFilter"><span class="fontSpan">{{item.type | nameFilter}}</span></div>
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <div v-if="item.id">
                <el-tag type="success">已开通</el-tag>
                <el-button type="text" size="mini" @click="setService(item.type, '暂停')" class="button">暂停业务</el-button>
              </div>
              <div v-else>
                <el-tag type="info">未开通</el-tag>
                <el-button type="text" size="mini" @click="setService(item.type, '开通')" class="button">立即开通</el-button>
              </div>           
            </div>
          </div>
         </el-card>
        </el-col>
      </el-row> -->
      <editor-dashboard></editor-dashboard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getDictList } from '@/api/system/dict/index'
import { sessionStorageTool } from '@/utils'
import { getCompanyService, setCompanyService } from '@/api/company/kind/index'
import editorDashboard from './components/editor'
export default {
  components: { editorDashboard },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'div xiche',
        1: 'div baoyang',
        2: 'div qingxi',
        3: 'div weixiu',
        4: 'div banjin',
        5: 'div jiuyuan'
      }
      return statusMap[status]
    },
    nameFilter(status) {
      const statusMap = {
        0: '洗车',
        1: '保养',
        2: '清洗',
        3: '维修',
        4: '钣金',
        5: '救援'
      }
      return statusMap[status]
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      const { companyId } = sessionStorageTool.getSessionStorage('companyId')
      this.companyId = companyId
      this.getDicData()
      this.load()
    })
  },
  data() {
    return {
      serviceList: [],
      companyId: '',
      type: '',
      itemTypeData: []
    }
  },
  methods: {
    load() {
      getCompanyService({ companyId: this.companyId }).then(response => {
        this.serviceList = response.newList
      })
    },
    getDicData(val) {
      // 获取字典数据
      const itemTypeQuery = { 'type': 'itemType' }
      getDictList(itemTypeQuery).then(response => {
        this.itemTypeData = response.newList
      })
    },
    setService(val, type) {
      this.$confirm(`确定${type}该业务吗?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        setCompanyService({ companyId: this.companyId, type: val }).then(response => {
          this.load()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .item{
    font-size: 14px;
  }
  .card{
    margin: 5px 5px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 120px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>
<style>
  .div{
    width: 100%;
    height: 100px;
    opacity:0.7;
    color: #FFFFFF;
    font-size: 52px;
    text-align: center;
    line-height: 100px;
    font-family: cursive;
    font-weight: bold;
  }
  .xiche{
    background-color: #D601A6;
  }
  .baoyang{
    background-color: #49C5BA;
  }
  .banjin{
    background-color: #FBC44D;
  }
  .jiuyuan{
    background-color: #FD5803;
  }
  .qingxi{
    background-color: #5893C8;
  }
  .weixiu{
    background-color: #E37933;
  }
</style>
