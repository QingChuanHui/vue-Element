<template>
<div>
  <el-row>
    <el-col :span="23">
      <el-form :model="model" :rules="rules" ref="model" label-width="100px" class="demo-model"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="任务名称" prop="integralName">
              <el-input v-model="model.integralName" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item prop="type" label="类型" >
              <el-radio-group v-model="model.type" size="small">
                <el-radio-button label="0" >直接奖励积分</el-radio-button>
                <el-radio-button label="1">按单位奖励积分</el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
            <el-form-item :label="model.type === '0' ? '积分数' : '单位数'" prop="integralValue">
              <el-input v-model="model.integralValue" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="备注">
              <el-input type="textarea" v-model="model.remarks"></el-input>
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
  </div>
</template>

<script>
  import { getIntegralTask, setIntegralTask, updIntegralTask, checkTaskName } from '@/api/system/integralTask/index'
  export default {
    data() {
      const validateCity = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入任务名称'))
        }
        checkTaskName({ 'taskName': value, 'flag': this.cityFlag }).then(response => {
          if (response.new) {
            callback(new Error('任务名称已存在'))
          } else {
            callback()
          }
        })
      }
      return {
        cityFlag: '',
        flag: '',
        id: '',
        model: {
          type: '0'
        },
        rules: {
          integralName: [
            { required: true, trigger: 'blur', validator: validateCity }
          ],
          integralValue: [
            { required: true, message: '请选输入分值', trigger: 'blur' }
          ]
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
      if (this.$route.query.flag === '1') {
        this.cityFlag = false
      } else if (this.$route.query.flag === '2') {
        this.cityFlag = true
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.id) {
              updIntegralTask(this.model).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$router.push({ path: 'IntegralTask' })
              })
            } else {
              setIntegralTask(this.model).then(response => {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                })
                this.$router.push({ path: 'IntegralTask' })
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
        getIntegralTask({ 'id': this.id }).then(response => {
          this.model = response.new
        })
      }
    }
  }
</script>

