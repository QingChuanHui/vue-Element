<template>
  <div>
  <el-row>
    <el-col :span="23">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
  
        <el-row>
          <el-col :span="10">
            <el-form-item label="机构名称" prop="officeName">
              <officeSelector :officeName="ruleForm.officeName" @selectSuccess="selectOffice"></officeSelector>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="角色名称" prop="name">
              <el-input v-model="ruleForm.name" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      <el-row>
        <el-col :span="10">
          <el-form-item prop="roleTypeName" label="角色类型" >
           <el-select v-model="ruleForm.roleType" placeholder="请选择">
              <el-option
                v-for="item in roleTypeData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item></el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item prop="dataScopeName" label="数据范围" >
           <el-select v-model="ruleForm.dataScope" placeholder="请选择">
              <el-option
                v-for="item in dataScopeData"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item></el-col>
        </el-row>

       <el-row>
          <el-col :span="10">
             <el-form-item label="是否系统角色">
                <el-switch v-model="ruleForm.isSys" :active-value="1" :inactive-value="0"></el-switch>
             </el-form-item>
          </el-col>
        </el-row> 
        <el-row>
          <el-col :span="10">
        <el-form-item label="备注" prop="remarks">
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
  import { saveRole, updateRole, selectRole } from '@/api/system/role/index'
  import { getDictList } from '@/api/system/dict/index'
  import officeSelector from '../components/officeSelector'
  export default {
    components: { officeSelector },
    data() {
      return {
        sexList: [{ value: '男', label: '男' }, { value: '女', label: '女' }],
        flagUpdate: false,
        id: '',
        flag: 0,
        dataScopeData: [],
        roleTypeData: [],
        ruleForm: {
          id: '',
          name: '',
          officeName: '',
          officeId: '',
          remarks: '',
          isSys: 0,
          roleTypeName: '',
          dataScopeName: '',
          roleType: '',
          dataScope: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
            { min: 0, max: 20, message: '最大 64个字符', trigger: 'blur' }
          ],
          officeId: { required: true, message: '机构名称不允许为空', trigger: 'blur' }
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        // flag==0 表示查看 flag=1表示需改
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
              saveRole(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.push({ path: '/system/Role' })
              })
            // 修改 flag===2
            } else if (this.flag === 2) {
              updateRole(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.push({ path: '/system/Role' })
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
        selectRole({ 'id': this.id }).then(response => {
          this.ruleForm = response.new
          console.log(this.ruleForm)
        })
      },
      selectOffice(data) {
        // 点击确定以后先关闭当前界面
        if (data.treeKey) {
          this.ruleForm.officeId = data.treeKey
          this.ruleForm.officeName = data.treeValue
        }
      },
      getDicData() {
        // 获取字典数据
        const dataSocopeQuery = { 'type': 'dataSocope' }
        getDictList(dataSocopeQuery).then(response => {
          console.log(response.newList)
          this.dataScopeData = response.newList
        })
        const roleTypeQuery = { 'type': 'roleType' }
        getDictList(roleTypeQuery).then(response => {
          console.log(response.newList)
          this.roleTypeData = response.newList
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

