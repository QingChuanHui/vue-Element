<template>
  <div>
    <el-card>
      <el-form ref="form" :model="ruleForm" label-width="80px">
        <el-form-item label="单号">
          {{ruleForm.billNo}}
        </el-form-item>
        <el-form-item label="订单状态">
          {{ruleForm.stateName}}
          <el-button @click="completeClike(ruleForm.flagHot == '1' ? '取消' : '设置为')" style="margin-left:20px" type="primary" size="mini" plain round>{{ruleForm.flagHot == '1'?'取消首页展示':'首页展示'}}</el-button>
        </el-form-item>
        <el-form-item label="订单日期">
          {{ruleForm.billDate}}
        </el-form-item>
        <el-form-item label="门店">
          {{ruleForm.companyName}}
        </el-form-item>
        <el-form-item label="是否首页">
          {{ruleForm.flagHot == '1'?'是':'否'}}
        </el-form-item>
        <el-form-item label="项目信息">
            <el-table
              :data="ruleForm.mgrBillDetailItemList"
              stripe
              border
              style="width: 40%">
              <el-table-column
                prop="itemName"
                label="项目名称">
              </el-table-column>
              <el-table-column
                prop="itemMoney"
                label="项目价格">
              </el-table-column>
              <el-table-column label="项目商品"  align="center">
                <template slot-scope="scope">
                  {{scope.row.baseCompanyItemPartList | itemPart}}
                </template>
              </el-table-column>
            </el-table>
        </el-form-item>
        <el-form-item label="车主信息">
          <table class="table">
            <tr><th>车主昵称</th><td>{{ruleForm.ownerName}}</td></tr>
            <tr><th>车主电话</th><td>{{ruleForm.ownerPhone}}</td></tr>
            <tr><th>车牌</th><td>{{ruleForm.carCode}}</td></tr>
          </table>
        </el-form-item>
        <el-form-item label="订单统计">
          <table class="table">
            <tr><th>订单总金额</th><td>{{ruleForm.billMoney}}</td></tr>
            <tr v-if="ruleForm.couponMoney"><th>优惠券抵扣</th><td>{{ruleForm.couponMoney}}</td></tr>
            <tr><th>实付金额</th><td>{{ruleForm.receiveMoney}}</td></tr>
          </table>
        </el-form-item>
        <el-form-item label="评论信息" v-if="ruleForm.evaluateContent">
          <table class="table">
            <tr><th>评论内容</th><td>{{ruleForm.evaluateContent}}</td></tr>
            <tr><th>评论时间</th><td>{{ruleForm.evaluateDate}}</td></tr>
            <tr>
              <th>图片</th>
                <td v-if="ruleForm.mgrBillEvaluatePicList">
                  <img v-for="(index, item) in ruleForm.mgrBillEvaluatePicList" :key="index" :src="item.path">
                </td>
            </tr>
          </table>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { getOrder, setHot } from '@/api/company/order/index'
  export default {
    filters: {
      itemPart: function(value) {
        if (!value) return ''
        var str = value.map(function(currentValue) {
          return currentValue.partName
        })
        return str.join(',')
      }
    },
    data() {
      return {
        id: '',
        ruleForm: {
        },
        test: []
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.id = this.$route.query.id
        if (this.id) {
          this.load()
        }
      })
    },
    methods: {
      resetForm(formName) {
        // 重置表单
        this.$refs[formName].resetFields()
      },
      load() {
        getOrder({ id: this.id }).then(response => {
          this.ruleForm = response.new
          this.test = response.new.mgrBillDetailItemList[0].baseCompanyItemPartList.map(function(createBy) {
            if (createBy === 'createBy') {
              console.log(createBy)
            }
          })
        })
      },
      completeClike(text) {
        this.$confirm('此操作将订单' + text + '首页展示, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          setHot({ id: this.id }).then(response => {
            this.$message({
              type: 'success',
              message: '操作成功!'
            })
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
<style  lang="scss" >
  .orderRow{
    
    margin-bottom: 20px;
    padding: 15px 15px;
    color: #606266;
    font-size: 16px;
  }
  .row{
    background-color: #F2F6FC;
    height: 40px;
    margin-bottom: 10px;
    line-height: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .key{
    text-align:center;
  }
  .value{
    font-size: 16px;
    color:#303133;
  }
  .el-table th{
    background-color: #F2F6FC;
  }
  .table{
    th{
      border: 1px solid #ebeef5;
      background-color: #F2F6FC;
      width: 35%;
      padding: 0;
      margin: 0;
    }
    td{
      border: 1px solid #ebeef5;
      padding: 0;
      margin: 0;
      color: #606266;
    }
    width: 40%;
    font-size: 12px;
    color: #909399;
    // padding: 6px 0;
    border: 0px;
    // border: 1px solid #ebeef5;
  }
</style>

