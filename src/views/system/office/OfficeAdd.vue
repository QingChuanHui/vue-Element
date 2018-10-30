<template>
  <div>
  <el-row>
    <el-col :span="23">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="机构名称" prop="name">
              <el-input v-model="ruleForm.name"   ></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item label="上级机构" prop="parentName">
              <!-- <el-input placeholder="请输入内容" v-model="ruleForm.parentName" class="input-with-select" :disabled="true">
                <el-button @click="openOfficeDialog()" slot="append" icon="el-icon-search">选择</el-button>
              </el-input> -->
              <officeSelector :officeName="ruleForm.parentName" @selectSuccess="selectOffice"></officeSelector>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="负责人" prop="master">
            <el-input v-model="ruleForm.master"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="负责人电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
          <el-col :span="6">
            <el-form-item label="地址省" prop="province">
              <el-select v-model="ruleForm.province" filterable @change="onProvinceChange" placeholder="请选择省">
                <el-option v-for="(item,index) in provinceTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地址市"  prop="city">
              <el-select v-model="ruleForm.city" filterable  @change="onCityChange"  placeholder="请选择市">
                <el-option v-for="(item,index) in cityTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地址县"   prop="county">
              <el-select v-model="ruleForm.county" filterable placeholder="请选择县">
                <el-option v-for="(item,index) in countyTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item prop="address" label="街道地址" >
            <el-input v-model="ruleForm.address"  ></el-input>
          </el-form-item></el-col>
        </el-row>

        <el-row>
          <el-col :span="10">
            <el-form-item prop="adminName" label="管理员账号" >
              <el-input v-model="ruleForm.adminName"  ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item prop="adminPassword" label="管理员密码" >
              <el-input v-model="ruleForm.adminPassword"  ></el-input>
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
  import { saveOffice, getOffice, updateOffice } from '@/api/system/office/index'
  import { loginNameUniqueness } from '@/api/system/user/index'
  import { getAreaListTree } from '@/api/system/area/index'
  import officeSelector from '../components/officeSelector'
  export default {
    components: { officeSelector },
    data() {
      var validateMaster = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入管理员账号'))
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
        flag: 0,
        provinceTree: [],
        cityTree: [],
        countyTree: [],
        ruleForm: {
          id: '',
          name: '',
          master: '',
          phone: '',
          province: '',
          city: '',
          county: '',
          address: '',
          adminName: '',
          adminPassword: '',
          remarks: '',
          parentId: '',
          parentName: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入企业名称', trigger: 'blur' },
            { min: 0, max: 20, message: '最大 64个字符', trigger: 'blur' }
          ],
          master: [
            { required: true, message: '请输入负责人名称', trigger: 'blur' },
            { min: 0, max: 20, message: '最大 64个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入负责人电话', trigger: 'blur' },
            { min: 0, max: 20, message: '最大 64个字符', trigger: 'blur' }
          ],
          adminName: [
            { validator: validateMaster, trigger: 'blur' }
          ]
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
        this.getAreaData(1, '')
      })
    },
    methods: {
      submitForm(formName) {
        // 提交form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 新增 flag===1
            if (this.flag === 1) {
              saveOffice(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.push({ path: '/system/Office' })
              })
            // 修改 flag===2
            } else if (this.flag === 2) {
              updateOffice(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.push({ path: '/system/Office' })
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
        getOffice({ 'id': this.id }).then(response => {
          console.log('office:' + response.new)
          this.ruleForm = response.new
        })
      },
      getAreaData(kind, name) {
        // 获取地区信息
        getAreaListTree({ 'name': name }).then(response => {
          if (kind === 1) {
            this.provinceTree = response.newList
          } else if (kind === 2) {
            this.cityTree = response.newList
          } else {
            console.log(response.newList)
            this.countyTree = response.newList
          }
        })
      },
      onProvinceChange(ele) {
        console.log(ele)
        this.ruleForm.city = ''
        this.ruleForm.county = ''
        // 当选择省份以后 获取这个省份下面的所有城市
        this.getAreaData(2, ele)
      },
      onCityChange(ele) {
        console.log(ele)
        this.ruleForm.county = ''
        this.getAreaData(3, ele)
      },
      selectOffice(data) {
        if (data.treeKey) {
          this.ruleForm.parentId = data.treeKey
          this.ruleForm.parentName = data.treeValue
        }
      }
    }
  }
</script>

<style scoped>
  .line{
    text-align: center;
  }
</style>

