<template>
  <div>
  <el-row> 
    <el-col :span="23"> 
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="帐号" prop="loginName">
              <el-input placeholder="请输入内容" v-model="ruleForm.loginName" class="input-with-select" >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="姓名" prop="phone">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item prop="address" label="性别" >
           <el-select v-model="ruleForm.sex" placeholder="请选择">
              <el-option
                v-for="item in sexList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item></el-col>
        </el-row>
        <el-row>
        <el-col :span="10">
          <el-form-item label="电话" >
            <el-input v-model="ruleForm.phone"  ></el-input>
          
          </el-form-item></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
        <el-form-item label="备注">
          <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
        </el-form-item>
          </el-col>
        </el-row>
        <el-form-item v-if="flag!=0">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
  </div>
</template>

<script>
  import { loginNameUniqueness } from '@/api/base/operator/index'
  import { updateOperator, insertOperator, selectOperatorById } from '@/api/base/operator/index'
  // import BMapComponent from '@/components/BMapComponent/BMapComponent'
  export default {
    data() {
      var validateMaster = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入操作员账号'))
        }
        if (this.flag === 2) {
          this.flagUpdate = true
        }
        loginNameUniqueness({ 'loginName': value, 'flag': this.flagUpdate }).then(response => {
          if (response.new) {
            callback(new Error('该账号已经被使用'))
          } else {
            callback()
          }
        })
      }
      return {
        flagUpdate: false,
        id: '',
        clientId: '',
        flag: 0,
        sexList: [{ value: '男', label: '男' }, { value: '女', label: '女' }],
        ruleForm: {
          clientId: '',
          loginName: '',
          password: '',
          name: '',
          sex: '',
          phone: '',
          remarks: ''
        },
        rules: {
          password: { required: true, message: '密码不允许为空', trigger: 'blur' },
          loginName: [
            { validator: validateMaster, trigger: 'blur', required: true }
          ]
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.clientId = this.$route.query.clientId
        // flag==0 表示查看 flag=1表示需改
        this.id = this.$route.query.id
        if (this.id) {
          this.load()
        }
        this.flag = Number.parseInt(this.$route.query.flag)
      })
    },
    methods: {
      submitForm(formName) {
        // 提交form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 新增 flag===1
            if (this.flag === 1) {
              this.ruleForm.clientId = this.clientId
              insertOperator(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.go(-1)
              })
            // 修改 flag===2
            } else if (this.flag === 2) {
              updateOperator(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.go(-1)
              })
            } else {
              console.log('error submit!!:' + this.flag)
            }
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        // 重置表单
        this.$refs[formName].resetFields()
      },
      load() {
        selectOperatorById({ 'id': this.id }).then(response => {
          this.ruleForm = response.new
        })
      }
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>

