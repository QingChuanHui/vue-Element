<template>
  <el-row class="eidtCarousel">
    <el-col :span="23">
      <el-form :model="model" :rules="rules" ref="model" label-width="100px" class="demo-ruleForm"  size="mini" >
        <el-row>
          <el-col :span="10">
            <el-form-item label="名称" prop="name">
              <el-input v-model="model.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="10">
            <el-form-item label="区域">
              <!-- <el-input v-model="model.areaId"></el-input> -->
              <el-select  v-model="selectAreaList" multiple placeholder="请选择">
                <el-option
                  v-for="item in areaList"
                  :key="item.city"
                  :label="item.city"
                  :value="item.id"
                  :blur="setAreaId()">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row>
          <el-col :span="10">
            <el-form-item label="机构" prop="officeId">
              <el-input v-model="model.officeId"></el-input>
            </el-form-item>
          </el-col>
        </el-row> -->
        <el-row>
          <el-col :span="10">
            <el-form-item label="图片" prop="imgPath">
              <el-upload
              :class="{disabled:uploadDisabled}"
              :action="action"
              :limit="1"
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
            <el-form-item label="链接" >
              <el-input v-model="model.url"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="显示状态">
          <el-switch v-model="model.isShow" 
          :active-value="1" 
          :inactive-value="0"></el-switch>
        </el-form-item>
        <el-row>
          <el-col :span="4">
            <el-form-item label="排序" >
              <el-input v-model="model.sortId"></el-input>
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
</template>

<script>
  import { getCarousel, setCarousel, updCarousel } from '@/api/manage/carousel/index'
  import { getAreaList } from '@/api/system/area/index'
  export default {
    data() {
      return {
        flag: '',
        imagelist: [],
        action: process.env.BASE_API + '/v1/upload',
        picUrl: process.env.BASE_API,
        id: '',
        model: {
        },
        rules: {
          name: [
            { required: true, message: '请输入轮播图名称', trigger: 'change' },
            { min: 0, max: 20, message: '最大 20个字符', trigger: 'change' }
          ],
          imgPath: [
            { required: true, message: '请选择图片', trigger: 'change' }
          ]
        },
        dialogImageUrl: '',
        dialogVisible: false,
        areaList: [],
        selectAreaList: []
      }
    },
    created() {
      // 判断有没有ID，有的话带出数据
      if (this.$route.query.id) {
        this.id = this.$route.query.id
        this.load()
      }
      this.flag = Number.parseInt(this.$route.query.flag)
      this.handleArea()
    },
    computed: {
      uploadDisabled: function() {
        return this.imagelist.length > 0
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (!this.model.areaId) {
              this.model.areaId = 'all'
            }
            if (this.id) {
              updCarousel(this.model).then(response => {
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                })
                this.$router.push({ path: 'Carousel' })
              })
            } else {
              setCarousel(this.model).then(response => {
                this.$message({
                  message: '恭喜你，添加成功',
                  type: 'success'
                })
                this.$router.push({ path: 'Carousel' })
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
        getCarousel({ 'id': this.id }).then(response => {
          this.model = response.carousel
          if (this.model.imgPath) {
            this.imagelist.push({ url: this.picUrl + this.model.imgPath })
          }
          if (this.model.areaId !== '' && this.model.areaId !== 'all') {
            this.selectAreaList = this.model.areaId.split(',')
          }
        })
      },
      beforeUpload: function(file) {
        console.log('beforeupload')
      },
      onSuccess: function(response, file, fileList) {
        console.log('success')
        this.model.imgPath = response.url
        this.imagelist.push(file)
      },
      handleRemove(file, fileList) {
        console.log('remove')
        this.imagelist = []
      },
      handlePictureCardPreview(file) {
        console.log('preview')
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleArea() {
        getAreaList({ 'pageNo': 0, 'pageSize': 1000 }).then(response => {
          this.areaList = response.page.records
        })
      },
      setAreaId(val) {
        this.model.areaId = this.selectAreaList.join(',')
      }
    }
  }
</script>

<style lang="scss" >
  .eidtCarousel {
    .line{
      text-align: center;
    }
    .disabled .el-upload--picture-card {
        display: none;
    }
  }
</style>

