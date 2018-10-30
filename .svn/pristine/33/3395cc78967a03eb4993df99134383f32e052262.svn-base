<template>
  <div>
    <el-alert
            title="维修企业区分与维修门店，一家企业可以拥有多个门店"
            type="success" style="margin-bottom:20px"
            >
     </el-alert>
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
          <el-form-item label="企业名称" prop="clientName">
            <el-input v-model="ruleForm.clientName"></el-input>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="企业负责人" prop="phone">
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
          <el-col :span="5">
            <el-form-item label="地址省" prop="province">
              <el-select v-model="ruleForm.province" filterable @change="onProvinceChange" placeholder="请选择省">
                <el-option v-for="(item,index) in provinceTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="地址市"  prop="city">
              <el-select v-model="ruleForm.city" filterable  @change="onCityChange"  placeholder="请选择市">
                <el-option v-for="(item,index) in cityTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="地址县"   prop="county">
              <el-select v-model="ruleForm.county" filterable placeholder="请选择县">
                <el-option v-for="(item,index) in countyTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="街道地址" >
            <el-input v-model="ruleForm.address"  ></el-input>
          
          </el-form-item></el-col>
          <el-col style="margin-left:10px" :span="3">
            <el-button  type="primary"  icon="el-icon-plus" v-permission="'base:client:add'" size="mini"  @click="addT()" >地图选点</el-button>
          </el-col>
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
    <el-dialog title="地图" :visible.sync="dialogMapperVisible">
        <div id="XSDFXPage" class="XSDFXPage"></div>
    </el-dialog>
    <!-- <b-map-component></b-map-component> -->
  </div>
</template>

<script>
  import { getAreaListTree } from '@/api/system/area/index'
  import { updateClient, insertClient, selectClientById, loginNameUniqueness } from '@/api/base/client/index'
  import officeSelector from '@/views/system/components/officeSelector'
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
        dialogMapperVisible: false,
        provinceTree: [],
        cityTree: [],
        countyTree: [],
        ruleForm: {
          officeName: '',
          officeId: ''
        },
        rules: {
          officeName: { required: true, message: '机构名称不允许为空', trigger: 'blur' },
          clientName: { required: true, message: '企业名称不允许为空', trigger: 'blur' },
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
              insertClient(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.push({ path: 'Client' })
              })
            // 修改 flag===2
            } else if (this.flag === 2) {
              updateClient(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.push({ path: 'Client' })
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
        selectClientById({ 'id': this.id }).then(response => {
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
          this.ruleForm.officeId = data.treeKey
          this.ruleForm.officeName = data.treeValue
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

