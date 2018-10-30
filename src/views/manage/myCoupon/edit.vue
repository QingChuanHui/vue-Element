<template>
  <el-row class="eidtCarousel">
     <el-alert
            title="这个功能是测试功能，上线记得删除或者权限控制"
            type="success" style="margin-bottom:20px"
            >
     </el-alert>
    <el-col :span="15">
      <el-form :model="model" :rules="rules" ref="model" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
           <el-form-item label="请选择优惠券:" >
             <el-select v-model="model.couponId" placeholder="请选择">
              <el-option
                v-for="item in couponList"
                :key="item.id"
                :label="item.couponName"
                :value="item.id">
              </el-option>
            </el-select>
              </el-form-item>
        </el-row>
      <el-row>
        <el-form-item >
          <el-button type="primary" @click="submitForm('model')">发放</el-button>
        </el-form-item>
        </el-row>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import { selectCanUseList } from '@/api/manage/coupon/index'
  import { saveMyCoupon } from '@/api/manage/myCoupon/index'
  export default {
    data() {
      return {
        id: '',
        couponList: [],
        model: {
          couponId: '',
          carOwnerId: ''
        },
        listQuery: {
          ownerId: '',
          pageNo: 1,
          pageSize: 1000
        },
        rules: {
          couponName: { required: true, message: '请选择优惠券', trigger: 'blur' }
        }
      }
    },
    created() {
      // 判断有没有ID，有的话带出数据
      if (this.$route.query.id) {
        this.id = this.$route.query.id
        this.listQuery.ownerId = this.$route.query.id
        this.model.ownerId = this.$route.query.id
      }
      this.getAllCoupon()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            saveMyCoupon(this.model).then(response => {
              this.$message({
                message: '发送优惠券成功',
                type: 'success'
              })
              // this.$router.push({ path: '/manage/MyCouponList' })
              this.$router.go(-1)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      getAllCoupon() {
        selectCanUseList(this.listQuery).then(response => {
          this.couponList = response.page.records
        })
      }
    }
  }
</script>

<style lang="scss" >
  .eidtCarousel {
    .line{
      text-align: center;
    }
    .disabled .el-upload--picture-card {
        display: none;
    }
  }
</style>

