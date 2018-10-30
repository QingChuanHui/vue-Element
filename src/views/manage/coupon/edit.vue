<template>
  <el-row class="eidtCarousel">
     <el-alert
            title="当设置满0元时，表示这个优惠券无使用门槛"
            type="success" style="margin-bottom:20px"
            >
     </el-alert>
    <el-col :span="23">
      <el-form :model="model" :rules="rules" ref="model" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="优惠券名称" prop="couponName">
              <el-input v-model="model.couponName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
          <el-row>
          <el-col :span="10">
            <el-form-item label="有效天数" prop="avalidDay">
              <el-input type="number" v-model="model.avalidDay"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
            <el-form-item label="开始日期" prop="beginDate">
               <el-date-picker v-model="model.beginDate" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" > </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
            <el-form-item label="结束日期" prop="endDate">
              <el-date-picker v-model="model.endDate" type="date" placeholder="选择日期"  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"> </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

      <el-row>
         <el-col :span="10">
           <el-form-item label="项目类别" prop="couponType">
                <el-select v-model="model.couponType" clearable placeholder="请选择项目类别">
                      <el-option v-for="(item,index) in itemTypeData" :key="index"  :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
          </el-col>
       </el-row>
      <el-row>
          <el-col :span="6">
            <el-form-item label="满" prop="fullMoney">
              <el-input  type="number" v-model="model.fullMoney"></el-input>
            </el-form-item>
            </el-col>
        </el-row>
         <el-row>
          <el-col :span="6">
            <el-form-item label="减少" prop="reduceMoney">
              <el-input type="number"  v-model="model.reduceMoney"></el-input> 
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="优惠券描述" prop="couponDesc">
              <el-input type="textarea" v-model="model.couponDesc"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="10">
            <el-form-item label="使用规则" prop="userRule" > 
              <el-input type="textarea" v-model="model.userRule"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item v-if="flag!=0">
          <el-button type="primary" @click="submitForm('model')">提交</el-button>
          <el-button @click="resetForm('model')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import { getCoupon, saveCoupon, updateCoupon } from '@/api/manage/coupon/index'
  import { getDictList } from '@/api/system/dict/index'
  export default {
    data() {
      return {
        itemTypeData: [],
        flag: '',
        id: '',
        model: {
          couponName: '',
          avalidDay: '',
          beginDate: '',
          endDate: '',
          fullMoney: 0,
          reduceMoney: 0,
          couponDesc: '',
          userRule: '',
          couponType: ''
        },
        rules: {
          couponName: { required: true, message: '请输入轮播图名称', trigger: 'blur' },
          couponType: { required: true, message: '请选择优惠券类型', trigger: 'blur' },
          reduceMoney: { required: true, message: '必填', trigger: 'blur' },
          fullMoney: { required: true, message: '必填', trigger: 'blur' }
        }
      }
    },
    created() {
      // 判断有没有ID，有的话带出数据
      if (this.$route.query.id) {
        this.id = this.$route.query.id
        this.load()
      }
      this.flag = Number.parseInt(this.$route.query.flag)
      this.getItemType()
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.id) {
              updateCoupon(this.model).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$router.push({ path: 'CouponList' })
              })
            } else {
              saveCoupon(this.model).then(response => {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                })
                this.$router.push({ path: 'CouponList' })
              })
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      load() {
        getCoupon({ 'id': this.id }).then(response => {
          this.model = response.new
          if (this.model.imgPath) {
            this.imagelist.push({ url: this.picUrl + this.model.imgPath })
          }
          if (this.model.areaId !== '' && this.model.areaId !== 'all') {
            this.selectAreaList = this.model.areaId.split(',')
          }
        })
      },
      getItemType() {
        const itemTypeQuery = { 'type': 'itemType' }
        getDictList(itemTypeQuery).then(response => {
          this.itemTypeData = response.newList
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

