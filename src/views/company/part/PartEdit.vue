<template>
  <div>
  <el-row> 
    <el-col :span="23"> 
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="商品编码" prop="partCode">
              <el-input placeholder="请输入编码" v-model="ruleForm.partCode" class="input-with-select" >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="商品名称" prop="partName">
            <el-input placeholder="请输入名称" v-model="ruleForm.partName"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="价格">
            <el-input placeholder="请输入价格 单位/元" v-model="ruleForm.price"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="15">
          <el-form-item label="配件品质" >
            <el-radio-group v-model="ruleForm.partType" size="small">
              <el-radio-button 
              v-for="partType in partTypeData"
              :key="partType.value"
              :label="partType.value">{{partType.label}}</el-radio-button>
            </el-radio-group>
          </el-form-item></el-col>
        </el-row>
        <el-row>
        <el-col :span="10">
          <el-form-item label="单位" >
            <el-input v-model="ruleForm.unin"  ></el-input>          
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
  import { updPart, setPart, getPart, partCodeUniqueness } from '@/api/company/part/index'
  import { sessionStorageTool } from '@/utils'
  import { getDictList } from '@/api/system/dict/index'
  export default {
    data() {
      var validateMaster = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入商品编码'))
        }
        if (this.flag === 2) {
          this.flagUpdate = true
        }
        partCodeUniqueness({ 'partCode': value, 'flag': this.flagUpdate }).then(response => {
          if (response.new) {
            callback(new Error('该商品编码已存在'))
          } else {
            callback()
          }
        })
      }
      return {
        flagUpdate: false,
        id: '',
        companyId: '',
        flag: 0,
        ruleForm: {
          id: '',
          partCode: '',
          partName: '',
          partType: 0,
          price: '',
          unin: '',
          companyId: '',
          remarks: ''
        },
        partTypeData: [],
        rules: {
          partName: { required: true, message: '商品名称不允许为空', trigger: 'blur' },
          partCode: { required: true, validator: validateMaster, trigger: 'blur' }
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        // flag==0 表示查看 flag=1表示需改
        const { companyId } = sessionStorageTool.getSessionStorage('companyId')
        this.ruleForm.companyId = companyId
        this.id = this.$route.query.id
        if (this.id) {
          this.load()
        }
        this.flag = Number.parseInt(this.$route.query.flag)
        this.getDicData()
      })
    },
    methods: {
      submitForm(formName) {
        // 提交form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 新增 flag===1
            if (this.flag === 1) {
              setPart(this.ruleForm).then(response => {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                })
                this.$router.go(-1)
              })
            // 修改 flag===2
            } else if (this.flag === 2) {
              updPart(this.ruleForm).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
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
        getPart({ 'id': this.id }).then(response => {
          this.ruleForm.id = response.new.id
          this.ruleForm.partCode = response.new.partCode
          this.ruleForm.partName = response.new.partName
          this.ruleForm.partType = response.new.partType
          this.ruleForm.price = response.new.price
          this.ruleForm.unin = response.new.unin
          this.ruleForm.companyId = response.new.companyId
          this.ruleForm.remarks = response.new.remarks
        })
      },
      getDicData() {
        // 获取字典数据
        const partTypeQuery = { 'type': 'partType' }
        getDictList(partTypeQuery).then(response => {
          this.partTypeData = response.newList
        })
      }
    }
  }
</script>

<style scoped>
  .tagCar{
    margin-right: 5px;
  }
</style>

