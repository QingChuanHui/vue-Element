<template>
  <div>
    <el-button type="primary" icon="el-icon-plus" @click="addCarType()" size="small" plain>选择</el-button>
    <el-dialog append-to-body title="车型选择" :visible.sync="dialogVisible" id="carSelector"  class="car-diaglog" :before-close="closeDialog">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="brand" name="first"  v-loading="loading">
          <div v-for="mark in MarkList" :key="mark" class="leftBard" >
            <div class="clearfix brandMark" :id="mark">
              <span>{{mark}}</span>
            </div>
            <el-button plain 
              v-for="brand in brandGroup(mark)"
              :key="brand.id"
              :value="brand.pbrandname"
              @click="handleBrandClick(brand.pbrandname)"
              class="children">
              {{brand.pbrandname}}
            </el-button>
          </div>
          <div class="sidebar" :style="cssTop" >
            <div v-for="(mark,index) in MarkList" :key="index" @click="jump(index)" >{{ mark }}</div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="cType" name="second">
          <div v-for="carType in carTypeList" :key="carType.vender">
            <div class="clearfix">
              <span>{{carType.vender}}</span>
            </div>
            <el-button
              plain 
              v-for="item in carType.carTypeList"
              :key="item"
              @click="handleCarTypeClick(item)"  class="children">
              {{item}}
            </el-button>
          </div>          
        </el-tab-pane>
        <el-tab-pane :label="volume" name="third">
          <el-button
            plain 
            v-for="volume in volumeList"
            :key="volume.volume"
            @click="handleCarVolumeClick(volume.volume)"  class="children">
          {{volume.volume}}
          </el-button>
        </el-tab-pane>
        <el-tab-pane :label="carYear" name="fourth">
          <div v-for="year in carYearList" :key="year.year" >
            <div class="clearfix">
              <span>{{year.year}}</span>
            </div>
            <el-button
              plain 
              v-for="item in year.list"
              :key="item.psalename"
              @click="handleCarYearClick(item.psalename)"  class="children">
                {{item.psalename}}
            </el-button>
          </div>  
        </el-tab-pane>
      </el-tabs>
        <div slot="footer">
          <el-button @click="handleClearSelector()">取 消</el-button>
          <el-button type="primary" @click="handleSubmit">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCarBrand, getCarTypes, getCarVolume, getCarYear } from '@/api/components/carSelector/index'
export default {
  // props: {
  //   dialogVisible: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      brand: '品牌',
      cType: '车系',
      volume: '排量',
      carYear: '年款',
      dialogVisible: false,
      loading: false,
      activeName: 'first',
      carType: '',
      keyWords: {
        carBrand: '',
        pType: '',
        pVolume: ''
      },
      brandList: [],
      carTypeList: [],
      volumeList: [],
      carYearList: [],
      MarkList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      cssTop: {
        'top': 0
      }
    }
  },
  mounted() {
    document.getElementById('carSelector').addEventListener('scroll', this.scrollDiag)
    let lheight = (window.innerHeight - 200) / 26
    if (lheight < 12) {
      lheight = 12
    }
    if (lheight > 24) {
      lheight = 24
    }
    this.cssTop['line-height'] = lheight + 'px'
  },
  methods: {
    scrollDiag() {
      let top = document.getElementById('carSelector').scrollTop
      if (top >= 200) {
        top = top - 200
      } else if (top > 0 && top < 200) {
        top = 0
      }
      this.cssTop.top = top + 'px'
    },
    jump(index) {
      const jump = document.querySelectorAll('.brandMark')
      // 获取需要滚动的距离
      const total = jump[index].offsetTop + 100
      // Chrome
      document.getElementById('carSelector').scrollTop = total
    },
    addCarType() {
      this.dialogVisible = true
      this.loadCarBrand()
    },
    brandGroup(pCarBrand) {
      return this.brandList.filter((item) => {
        return item.pCarBrandMark === pCarBrand
      })
    },
    loadCarBrand() {
      getCarBrand().then(response => {
        this.loading = false
        this.brandList = response.newList
      })
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleSubmit() {
      this.$emit('selectSuccess', this.carType)
      this.handleClearSelector()
    },
    handleBrandClick(val) {
      this.carType = ''
      this.carType += val + ' '
      this.keyWords.carBrand = val
      this.brand = val
      this.cType = '车系'
      this.volume = '排量'
      this.carYear = '年款'
      getCarTypes(this.keyWords).then(response => {
        this.carTypeList = response.newList
        this.activeName = 'second'
      })
    },
    handleCarTypeClick(val) {
      this.carType = this.brand + ' ' + val + ' '
      this.keyWords.pType = val
      this.cType = val
      this.volume = '排量'
      this.carYear = '年款'
      getCarVolume(this.keyWords).then(response => {
        this.volumeList = response.newList
        this.activeName = 'third'
      })
    },
    handleCarVolumeClick(val) {
      this.carType = this.brand + ' ' + this.cType + ' ' + val + ' '
      this.keyWords.pVolume = val
      this.volume = val
      this.carYear = '年款'
      getCarYear(this.keyWords).then(response => {
        this.carYearList = response.newList
        this.activeName = 'fourth'
      })
    },
    handleCarYearClick(val) {
      this.carYear = val
      this.carType = this.brand + ' ' + this.cType + ' ' + this.volume + ' ' + val + ' '
    },
    handleClearSelector() {
      this.dialogVisible = false
      this.carType = ''
      this.brandList = []
      this.carTypeList = []
      this.volumeList = []
      this.carYearList = []
      this.activeName = 'first'
      this.brand = '品牌'
      this.cType = '车系'
      this.volume = '排量'
      this.carYear = '年款'
    },
    closeDialog: function(done) {
      this.handleClearSelector()
    }
  }
}
</script>

<style  lang="scss" >
.car-diaglog {
    .children {
      margin-bottom: 5px;
      min-width: 100px;
      margin-left:5px;
    }
    .el-dialog__body{
      padding-top: 10px!important;
    }
    .clearfix{
      height: 25px;
      line-height: 25px;
      background-color: #F2F6FC;
      margin-bottom: 5px;
      padding-left: 10px;
    }
    .sidebar{
      div{
        cursor: pointer;
      }
      width: 25px;
      
      // float: right;
      position: absolute; 
      // width: 10%; 
      right: 0; 
      top: 0; 
      text-align: center; 
      
      z-index: 999; 
      // line-height: 1.25em; 
      font-size: 1em; 
      z-index: 100;
    }
    .sidebar:hover{
      background-color:rgba(0,0,0,0.1);
    }
    .leftBard{
      width: calc(100% - 25px)
    }
}
</style>
