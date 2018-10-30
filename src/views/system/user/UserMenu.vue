<template>
  <div>
     
      <el-tree
        class="filter-tree"
        :data="menuTreeData"
        :props="defaultProps"
        default-expand-all
        highlight-current
        node-key="id"
        :default-expanded-keys="checkNode"
        show-checkbox
        ref="tree">
      </el-tree>
       <el-form>
       <el-form-item >
          <el-button type="primary" @click="submitForm">保存</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
  import { getMenuTreeByUserId, saveUserMenu } from '@/api/system/user/index'
  export default {
    data() {
      return {
        treeSelectData: {
          treeKey: '',
          treeValue: ''
        },
        checkNode: [],
        menuTreeStr: '',
        menuTreeData: [],
        checkTreeData: [],
        defaultProps: {
          children: 'childrenList',
          label: 'label'
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        // flag==0 表示查看 flag=1表示需改
        this.id = this.$route.query.id
        if (this.id) {
          this.getTreeData(this.id)
        }
      })
    },
    methods: {
      resetForm(formName) {
        // 重置表单
      },
      getTreeData(val) {
        getMenuTreeByUserId({ 'userId': val }).then(response => {
          console.log(response.newList.menuTree)
          this.menuTreeData = response.newList.menuTree
          this.checkTreeData = response.newList.selectMenuList
          console.log(this.checkTreeData)
          this.$refs.tree.setCheckedKeys(this.checkTreeData)
        })
      },
      submitForm() {
        // 保存权限到角色上面
        console.log(this.$refs.tree.getCheckedKeys())
        const checkKeysData = this.$refs.tree.getCheckedKeys()
        const ids = checkKeysData.join(',')
        // this.menuTreeStr =
        console.log(ids)
        saveUserMenu({ 'menuList': ids, 'userId': this.id }).then(response => {
          this.$message({
            type: 'success',
            message: '权限设置成功!'
          })
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

