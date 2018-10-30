<template>
  <div>
    <el-input placeholder="请输入内容" v-model="officeName" class="input-with-select" :disabled="true">
      <el-button @click="openOfficeDialog()" slot="append" icon="el-icon-search">选择</el-button>
    </el-input>
    <el-dialog title="组织机构" :visible.sync="dialogTableVisible">
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
      <el-tree
        class="filter-tree"
        :data="officeTree"
        :expand-on-click-node="false"
        :props="defaultProps"
        default-expand-all
        highlight-current
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
        ref="tree">
      </el-tree>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false" v-loading.fullscreen.lock="fullscreenLoading">取 消</el-button>
        <el-button type="primary" @click="selectOffice">确 定</el-button>
      </div>
    </el-dialog>
  </div>  
</template>
<script>
  import { getOfficeTreeData } from '@/api/system/office/index'
  export default {
    props: {
      officeName: {
        type: String,
        default: ''
      }
    },
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val)
      }
    },
    data() {
      return {
        dialogTableVisible: false,
        fullscreenLoading: false,
        filterText: '',
        treeSelectData: {
          treeKey: '',
          treeValue: ''
        },
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        officeTree: []
      }
    },
    methods: {
      openOfficeDialog() {
        // 打开机构树形dialog
        this.getTreeData()
        this.dialogTableVisible = true
      },
      filterNode(value, data) {
        // 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏
        if (!value) return true
        return data.label.indexOf(value) !== -1
      },
      getTreeData() {
        getOfficeTreeData().then(response => {
          this.officeTree = response.newList
        })
      },
      selectOffice() {
        // 点击确定以后先关闭当前界面
        if (this.treeSelectData.treeKey) {
          this.$emit('selectSuccess', this.treeSelectData)
        }
        this.dialogTableVisible = false
      },
      handleNodeClick(data) {
        this.treeSelectData.treeKey = data.id
        this.treeSelectData.treeValue = data.label
      }
    }
  }
</script>