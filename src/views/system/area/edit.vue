<template>
<div>
  <el-row>
    <el-col :span="23">
      <el-form :model="model" :rules="rules" ref="model" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="机构名称" prop="officeName">
              <officeSelector :officeName="model.officeName" @selectSuccess="selectOffice"></officeSelector>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="地址省" prop="province">
              <el-select v-model="model.province" filterable @change="onProvinceChange" placeholder="请选择省">
                <el-option v-for="(item,index) in provinceTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="地址市" prop="city" >
              <el-select v-model="model.city" filterable  @change="onCityChange"  placeholder="请选择市">
                <el-option v-for="(item,index) in cityTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="显示状态">
          <el-switch v-model="model.isShow" 
          :active-value="1" 
          :inactive-value="0"></el-switch>
        </el-form-item> 
        <el-form-item label="热门状态">
          <el-switch v-model="model.isHot" 
          :active-value="1" 
          :inactive-value="0"></el-switch>
        </el-form-item> 
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
  import { getArea, setArea, updArea } from '@/api/system/area/index'
  import { getAreaListTree, checkCity } from '@/api/system/area/index'
  import officeSelector from '../components/officeSelector'
  export default {
    components: { officeSelector },
    data() {
      const validateCity = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择城市'))
        }
        checkCity({ 'city': value, 'flag': this.cityFlag }).then(response => {
          if (response.new) {
            callback(new Error('该区域已开通'))
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
          city: '',
          officeId: '',
          officeName: ''
        },
        rules: {
          province: [
            { required: true, message: '请选择省份', trigger: 'change' }
          ],
          city: [
            { trigger: 'change', validator: validateCity }
          ],
          officeName: [
            { required: true, message: '请选择机构', trigger: 'change' }
          ]
        },
        provinceTree: [],
        cityTree: []
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
      this.getAreaData(1, '')
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.id) {
              updArea(this.model).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$router.push({ path: 'Area' })
              })
            } else {
              setArea(this.model).then(response => {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                })
                this.$router.push({ path: 'Area' })
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
        getArea({ 'id': this.id }).then(response => {
          this.model = response.new
        })
      },
      selectOffice(data) {
        if (data.treeKey) {
          this.model.officeId = data.treeKey
          this.model.officeName = data.treeValue
        }
      },
      onProvinceChange(ele) {
        console.log(ele)
        this.model.city = ''
        this.cityTree = []
        // 当选择省份以后 获取这个省份下面的所有城市
        this.getAreaData(2, ele)
      },
      onCityChange(ele) {
        console.log(ele)
      },
      getAreaData(kind, name) {
        // 获取地区信息
        getAreaListTree({ 'name': name }).then(response => {
          if (kind === 1) {
            this.provinceTree = response.newList
          } else if (kind === 2) {
            this.cityTree = response.newList
          }
        })
      }
    }
  }
</script>

