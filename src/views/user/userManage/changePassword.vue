<template>
  <div>
  <el-row> 
    <el-col :span="23"> 
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row v-if="!userUpd">
          <el-col :span="10">
            <el-form-item label="旧密码" prop="oldPassword">
              <el-input placeholder="请输入您的旧密码" v-model="ruleForm.oldPassword" class="input-with-select" >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="!userUpd">
        <el-col :span="10">
          <el-form-item label="新密码" prop="newPassword">
            <el-input placeholder="请输入您的新密码" v-model="ruleForm.newPassword"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="确认密码" prop="checkPass">
            <el-input placeholder="请再次输入您的旧密码" v-model="ruleForm.checkPass"></el-input>
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
  import { clientoperatorUpdPwd, sysUserUpdPwd } from '@/api/system/user/index'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'))
        } else {
          if (this.ruleForm.newPassword !== '') {
            this.$refs.ruleForm.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm.newPassword) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm: {
          id: '',
          oldPassword: '',
          newPassword: '',
          checkPass: ''
        },
        rules: {
          oldPassword: { required: true, message: '密码不允许为空', trigger: 'blur' },
          newPassword: { validator: validatePass, required: true, trigger: 'blur' },
          checkPass: { validator: validatePass2, required: true, trigger: 'blur' }
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.ruleForm.id = this.userInfo.id
      })
    },
    methods: {
      submitForm(formName) {
        // 提交form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (typeof (this.userInfo.clientId) === 'undefined') {
              sysUserUpdPwd(this.ruleForm).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$store.dispatch('FedLogOut').then(() => {
                  location.reload() // 为了重新实例化vue-router对象 避免bug
                })
              })
            } else {
              clientoperatorUpdPwd(this.ruleForm).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$store.dispatch('FedLogOut').then(() => {
                  location.reload() // 为了重新实例化vue-router对象 避免bug
                })
              })
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
      }
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>

