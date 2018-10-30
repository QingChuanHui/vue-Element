<template>
  <div>
  <el-row class="eidtCompany">
    <el-col :span="23">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
        <el-col :span="10">
          <el-form-item label="门店名称" prop="companyName">
            <el-input v-model="ruleForm.companyName"></el-input>
          </el-form-item>
        </el-col>
        </el-row>
        <el-row>
        <el-col :span="10">
          <el-form-item label="门店相册" prop="companyLogo">
            <!-- <el-input v-model="ruleForm.companyLogo"></el-input> -->
              <el-upload
              :class="{disabled:uploadDisabled}"
              :action="action"
              :limit="10"
              :before-upload="beforeUpload"
              :on-success="onSuccess"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :multiple="false"
              accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
              :file-list="imagelist">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
          </el-form-item>
        </el-col>
        </el-row>

        <el-row>
        <el-col :span="10">
          <el-form-item label="营业时间" prop="companyTime">
            <el-time-picker
              is-range
              v-model="time"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              :blur="handleTimeBlur()"
              value-format="HH:mm:ss">
            </el-time-picker>
          </el-form-item>
        </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
        <el-form-item label="门店介绍" prop="companyDesc">
          <el-input type="textarea" v-model="ruleForm.companyDesc"></el-input>
        </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item prop="companyType" label="门店类型" >
              <el-radio-group v-model="ruleForm.companyType" size="small">
                <el-radio-button label="1" >维修厂</el-radio-button>
                <el-radio-button label="2">4S店</el-radio-button>
                <el-radio-button label="3">洗车店</el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
    
        <el-row>
          <el-col :span="10">
            <el-form-item  label="负责人" >
              <el-input v-model="ruleForm.master"  ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item  label="电话" >
              <el-input v-model="ruleForm.phone"  ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
       <el-row>
          <el-col :span="10">
            <el-form-item label="公司电话" >
              <el-input v-model="ruleForm.tel"  ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-row>
          <el-col :span="10">
        <el-form-item label="备注" >
          <el-input type="textarea" v-model="ruleForm.remarks"></el-input>
        </el-form-item>
          </el-col>
        </el-row>

            <el-row>
          <el-col :span="5">
            <el-form-item label="地址省">
              <el-select v-model="ruleForm.province" filterable @change="onProvinceChange" placeholder="请选择省">
                <el-option v-for="(item,index) in provinceTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="地址市" >
              <el-select v-model="ruleForm.city" filterable  @change="onCityChange"  placeholder="请选择市">
                <el-option v-for="(item,index) in cityTree" :key="index"  :label="item.name" :value="item.name"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="地址县" >
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
            <el-button  type="primary"  icon="el-icon-plus" size="mini"  @click="chooseMap()" >刷新地图</el-button>
          </el-col>
        </el-row>

       <el-row>
        <el-col :span="10">
          <el-form-item label="经度" >
            <el-input v-model="ruleForm.lng"  ></el-input>          
          </el-form-item></el-col>
        </el-row>
       <el-row>
        <el-col :span="10">
          <el-form-item label="纬度" >
            <el-input v-model="ruleForm.lat"  ></el-input>          
          </el-form-item></el-col>
        </el-row>

        <div id="XSDFXPage" style="height:350px"></div>
        <el-form-item v-if="flag!=0">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
    <!-- <el-dialog title="地图"  :visible.sync="dialogMapperVisible">
        <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false" v-loading.fullscreen.lock="fullscreenLoading">取 消</el-button>
        <el-button type="primary" @click="selectOffice">确 定</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
  import { getAreaListTree } from '@/api/system/area/index'
  import { updateCompany, insertCompany, selectCompanyById } from '@/api/base/company/index'
  import { MP } from '@/map.js'
  export default {
    components: {},
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        imagelist: [],
        action: process.env.BASE_API + '/v1/upload',
        picUrl: process.env.BASE_API,
        time: ['08:00:00', '18:00:00'],
        flagUpdate: false,
        id: '',
        flag: 0,
        dialogMapperVisible: false,
        provinceTree: [],
        cityTree: [],
        countyTree: [],
        ruleForm: {
          id: '',
          clientId: '',
          companyTime: '',
          companyDesc: '',
          companyType: '',
          companyName: '',
          master: '',
          phone: '',
          tel: '',
          address: '',
          province: '',
          city: '',
          county: '',
          lng: '',
          lat: '',
          companyLogo: '',
          paths: ''
        },
        rules: {
          companyName: { required: true, message: '门店名称不允许为空', trigger: 'blur' },
          companyLogo: { required: true, message: '门店图标不允许为空', trigger: 'blur' },
          companyDesc: { required: true, message: '门店介绍不允许为空', trigger: 'blur' },
          companyType: { required: true, message: '请选择门店类型', trigger: 'blur' }
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        // flag==0 表示查看 flag=1表示需改
        this.id = this.$route.query.id
        this.ruleForm.clientId = this.$route.query.clientId
        if (this.id) {
          this.load()
        } else {
          this.initMap()
        }
        this.flag = Number.parseInt(this.$route.query.flag)
        this.getAreaData(1, '')
      })
    },
    computed: {
      uploadDisabled: function() {
        return this.imagelist.length > 9
      }
    },
    methods: {
      submitForm(formName) {
        // 提交form
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 新增 flag===1
            if (this.flag === 1) {
              insertCompany(this.ruleForm).then(response => {
                console.log('ok')
                this.$router.go(-1)
              })
            // 修改 flag===2
            } else if (this.flag === 2) {
              updateCompany(this.ruleForm).then(response => {
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
        selectCompanyById({ 'id': this.id }).then(response => {
          this.ruleForm.id = response.new.id
          this.ruleForm.clientId = response.new.clientId
          this.ruleForm.companyTime = response.new.companyTime
          this.ruleForm.companyDesc = response.new.companyDesc
          this.ruleForm.companyType = response.new.companyType
          this.ruleForm.companyName = response.new.companyName
          this.ruleForm.master = response.new.master
          this.ruleForm.phone = response.new.phone
          this.ruleForm.tel = response.new.tel
          this.ruleForm.address = response.new.address
          this.ruleForm.province = response.new.province
          this.ruleForm.city = response.new.city
          this.ruleForm.county = response.new.county
          this.ruleForm.lng = response.new.lng
          this.ruleForm.lat = response.new.lat
          this.ruleForm.companyLogo = response.new.companyLogo
          this.imagelist = []
          if (response.new.baseCompanyPicList.length > 0) {
            response.new.baseCompanyPicList.forEach(element => {
              this.imagelist.push({ url: this.picUrl + element.path })
              this.ruleForm.paths += element.path + ','
            })
            // this.ruleForm.paths = this.imagelist.join(',')
          }
          if (this.ruleForm.companyTime) {
            this.time = this.ruleForm.companyTime.split('-')
          }
          this.initMap()
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
      handleTimeBlur() {
        this.ruleForm.companyTime = this.time[0] + '-' + this.time[1]
      },
      onSuccess: function(response, file, fileList) {
        console.log('success')
        this.ruleForm.paths += response.url + ','
        this.imagelist.push(file)
        if (this.imagelist.length === 1) {
          this.ruleForm.companyLogo = response.url
        }
      },
      handleRemove(file, fileList) {
        this.imagelist = fileList
        this.ruleForm.paths = ''
        this.imagelist.forEach(element => {
          this.ruleForm.paths += element.url.substring(element.url.indexOf('/images')) + ','
          this.ruleForm.companyLogo = this.imagelist[0].url.substring(this.imagelist[0].url.indexOf('/images'))
        })
      },
      handlePictureCardPreview(file) {
        console.log('preview')
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      beforeUpload: function(file) {
        console.log('beforeupload')
      },
      initMap() {
        // 新增打开和编辑打开的时候
        MP().then(BMap => {
          const this_ = this
          var map = new BMap.Map('XSDFXPage', { enableMapClick: true })
          // 如果lng有值 表示是编辑，那么通过经纬度确定标点位置
          console.log(this.ruleForm.lng)
          if (this.ruleForm.lng) {
            console.log('sssssssss')
            var point = new BMap.Point(this.ruleForm.lng, this.ruleForm.lat)
            map.centerAndZoom(new BMap.Point(this.ruleForm.lng, this.ruleForm.lat), 16)
            var marker = new BMap.Marker(point)
            map.addOverlay(marker)
          } else {
            map.centerAndZoom('上海市', 16)
          }
          map.enableScrollWheelZoom(true)
          map.disableDoubleClickZoom()
          map.addEventListener('click', function(e) {
            var allOverlay = map.getOverlays()
            // 删除已选的标注
            for (var i = 0; i < allOverlay.length; i++) {
              map.removeOverlay(allOverlay[i])
            }
            var point = new BMap.Point(e.point.lng, e.point.lat)
            var marker = new BMap.Marker(point)
            map.addOverlay(marker)
            // 逆地址解析
            var geoc = new BMap.Geocoder()
            geoc.getLocation(e.point, function(rs) {
              var addComp = rs.addressComponents
              this_.ruleForm.province = addComp.province
              this_.ruleForm.city = addComp.city
              this_.ruleForm.county = addComp.district
              this_.ruleForm.address = addComp.street + addComp.streetNumber
              this_.ruleForm.lng = e.point.lng
              this_.ruleForm.lat = e.point.lat
            })
          })
        })
      },
      chooseMap() {
        // 无论是新增或者编辑，点击刷新地图，都按照地址进行逆解析
        MP().then(BMap => {
          const this_ = this
          var map = new BMap.Map('XSDFXPage', { enableMapClick: true })
          // 获取经纬度以及地址
          const address = this.ruleForm.city + this.ruleForm.county + this.ruleForm.address
          console.log(address)
          if (address) {
            console.log('begin')
            var myGeo = new BMap.Geocoder()
            myGeo.getPoint(address, function(point) {
              if (point) {
                console.log('begin2')
                map.centerAndZoom(point, 16)
                map.addOverlay(new BMap.Marker(point))
                this_.ruleForm.lng = point.lng
                this_.ruleForm.lat = point.lat
                console.log(point.lng)
                console.log(point.lat)
              } else {
                alert('您选择地址没有解析到结果!')
              }
            }, this.ruleForm.city)
          }
          map.addEventListener('click', function(e) {
            console.log('bbbbbbb')
            var allOverlay = map.getOverlays()
            // 删除已选的标注
            for (var i = 0; i < allOverlay.length; i++) {
              map.removeOverlay(allOverlay[i])
            }
            var point = new BMap.Point(e.point.lng, e.point.lat)
            var marker = new BMap.Marker(point)
            map.addOverlay(marker)
            // 逆地址解析
            var geoc = new BMap.Geocoder()
            geoc.getLocation(e.point, function(rs) {
              var addComp = rs.addressComponents
              this_.ruleForm.province = addComp.province
              this_.ruleForm.city = addComp.city
              this_.ruleForm.county = addComp.district
              this_.ruleForm.address = addComp.street + addComp.streetNumber
              this_.ruleForm.lng = e.point.lng
              this_.ruleForm.lat = e.point.lat
            })
          })
        })
      },
      createMarker() {
        console.log('aaaaaaaaa')
      }
    }
  }
</script>

<style lang="scss" >
  .eidtCompany {
    .line{
      text-align: center;
    }
    .disabled .el-upload--picture-card {
        display: none;
    }
  }
</style>

