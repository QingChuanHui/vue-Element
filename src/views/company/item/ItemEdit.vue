<template>
  <div>
  <el-row> 
    <el-col :span="23"> 
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="项目编码" prop="itemCode">
              <el-input placeholder="请输入编码" v-model="ruleForm.itemCode" class="input-with-select"  >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
        <el-col :span="10">
          <el-form-item label="项目名称" prop="itemName">
            <el-input placeholder="请输入名称" v-model="ruleForm.itemName"></el-input>
          </el-form-item>
        </el-col>
        </el-row>
        <el-row>
        <el-col :span="10">
          <el-form-item label="业务类别" prop="type">
            <el-select style="width:85px" v-model="ruleForm.type" placeholder="请选择">
              <el-option
                v-for="item in companyKindList"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        </el-row>
        <el-row>
        <el-col :span="15">
          <el-form-item label="对应商品" >
            <partSelector :companyId="companyId" :partList="ruleForm.baseCompanyItemPartList" @selectSuccess="partSelect"></partSelector>
          </el-form-item></el-col>
        </el-row>      
        <el-row>
        <el-col :span="10">
          <el-form-item label="门店价">
            <el-input placeholder="请输入门店价 单位/元" v-model="ruleForm.itemOriginalPrice"></el-input>
          </el-form-item>
        </el-col>
        </el-row>
         <el-row>
          <el-col :span="10">
            <el-form-item label="销售价">
            <el-input placeholder="请输入销售价 单位/元" v-model="ruleForm.itemPrice"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="服务时长">
            <el-input placeholder="请输入项目服务时长" v-model="ruleForm.itemServiceTime"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="建议周期">
            <el-input placeholder="请输入此项目建议周期" v-model="ruleForm.suggestCycle"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
        <el-col :span="10">
          <el-form-item label="适配车型" >
            <el-switch
              v-model="ruleForm.carTypeState"
              active-text="自定义车型"
              inactive-text="全部车型"
              active-color="#409EFF"
              inactive-color="#409EFF"
              active-value="1"
              inactive-value="0"
              @change="selectChange">
            </el-switch>
          </el-form-item></el-col>
        </el-row>
        <el-row v-show="ruleForm.carTypeState == '1'">
        <el-col :span="10">
          <el-form-item label="已选车型" >
            <carSelector @selectSuccess="carTypeSelect"></carSelector>
            <el-tag
            v-for="carType in ruleForm.basePartCarTypeList"
            :key="carType.carTypeName"
            type="info"
            size="small"
            closable
            class="tagCar"
            @close="handleClose(carType.carTypeName)">
            {{carType.carTypeName}}
            </el-tag>
          </el-form-item></el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
        <el-form-item label="描述">
          <el-input type="textarea" v-model="ruleForm.itemDescription"></el-input>
        </el-form-item>
          </el-col>
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
  import { getCompanyItem, setCompanyItem, updCompanyItem, itemCodeUniqueness } from '@/api/company/item/index'
  import { sessionStorageTool } from '@/utils'
  import partSelector from '../components/partSelector'
  import carSelector from '../components/carSelector'
  import { getDictList } from '@/api/system/dict/index'
  export default {
    components: { partSelector, carSelector },
    data() {
      var validateMaster = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入项目编码'))
        }
        if (this.flag === 2) {
          this.flagUpdate = true
        }
        itemCodeUniqueness({ 'itemCode': value, 'companyId': this.companyId, 'flag': this.flagUpdate }).then(response => {
          if (response.new) {
            callback(new Error('该项目编码已存在'))
          } else {
            callback()
          }
        })
      }
      return {
        companyKindList: [],
        flagUpdate: false,
        id: '',
        companyId: '',
        flag: 0,
        ruleForm: {
          id: '',
          itemCode: '',
          itemName: '',
          companyId: '',
          baseCompanyItemPartList: [],
          itemOriginalPrice: 0,
          itemPrice: 0,
          itemDescription: '',
          itemServiceTime: '',
          suggestCycle: '',
          type: '',
          basePartCarTypeList: [],
          carTypeState: '0',
          remarks: ''
        },
        rules: {
          itemName: { required: true, message: '项目名称不允许为空', trigger: 'blur' },
          itemCode: { required: true, validator: validateMaster, trigger: 'blur' },
          type: { required: true, message: '请选择业务类别', trigger: 'change' }
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        const { companyId } = sessionStorageTool.getSessionStorage('companyId')
        this.companyId = this.ruleForm.companyId = companyId
        this.selectCompanyKind()
        this.id = this.$route.query.id
        this.flag = Number.parseInt(this.$route.query.flag)
        if (this.id) {
          this.load()
        }
      })
    },
    methods: {
      submitForm(formName) {
        // 提交form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.id) {
              updCompanyItem({ formData: JSON.stringify(this.ruleForm) }).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$router.go(-1)
              })
            } else {
              setCompanyItem({ formData: JSON.stringify(this.ruleForm) }).then(response => {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                })
                this.$router.go(-1)
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
      },
      load() {
        getCompanyItem({ id: this.id }).then(response => {
          this.ruleForm.id = response.new.id
          this.ruleForm.itemCode = response.new.itemCode
          this.ruleForm.itemName = response.new.itemName
          this.ruleForm.companyId = response.new.companyId
          this.ruleForm.itemOriginalPrice = response.new.itemOriginalPrice
          this.ruleForm.itemPrice = response.new.itemPrice
          this.ruleForm.itemDescription = response.new.itemDescription
          this.ruleForm.itemServiceTime = response.new.itemServiceTime
          this.ruleForm.suggestCycle = response.new.suggestCycle
          this.ruleForm.type = response.new.type
          this.ruleForm.carTypeState = response.new.carTypeState
          this.ruleForm.remarks = response.new.remarks
          if (response.new.baseCompanyItemPartList != null) {
            this.ruleForm.baseCompanyItemPartList = response.new.baseCompanyItemPartList
          }
          if (response.new.basePartCarTypeList != null) {
            this.ruleForm.basePartCarTypeList = response.new.basePartCarTypeList
          }
        })
      },
      partSelect(data) {
        this.ruleForm.baseCompanyItemPartList = data
      },
      selectCompanyKind() {
        getDictList({ type: 'itemType' }).then(response => {
          this.companyKindList = response.newList
        })
      },
      selectChange(val) {
        if (val === '0') {
          this.ruleForm.basePartCarTypeList = []
        }
      },
      carTypeSelect(carType) {
        this.ruleForm.basePartCarTypeList.push({ carTypeName: carType })
      },
      handleClose(val) {
        for (let index = 0; index < this.ruleForm.basePartCarTypeList.length; index++) {
          if (this.ruleForm.basePartCarTypeList[index].carTypeName === val) {
            this.ruleForm.basePartCarTypeList.splice(index, 1)
          }
        }
      }
    }
  }
</script>
<style scoped>
  .tagCar{
    margin-right: 5px;
  }
</style>
