webpackJsonp([52],{z3ht:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("SP5S"),a={data:function(){return{page:{},listLoading:!0,listQuery:{loginName:"",clientId:"",pageNo:1,pageSize:100}}},created:function(){this.listQuery.clientId=this.$route.query.id,this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(i.b)(this.listQuery).then(function(t){e.page=t.page,e.listLoading=!1})},addT:function(){this.$router.push({path:"OperatorAdd",query:{clientId:this.listQuery.clientId,flag:1}})},handleUpdate:function(e){this.$router.push({path:"OperatorUpdate",query:{clientId:this.listQuery.clientId,id:e,flag:2}})},handleWatch:function(e){this.$router.push({path:"OperatorWatch",query:{clientId:this.listQuery.clientId,id:e,flag:0}})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.pageNo=e,this.fetchData()},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i.a)({id:e}).then(function(){t.$message({type:"success",message:"删除成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"100%"}},[n("div",{staticClass:"appCenterTop",staticStyle:{height:"50px"}},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"登录帐号",size:"mini"},model:{value:e.listQuery.loginName,callback:function(t){e.$set(e.listQuery,"loginName",t)},expression:"listQuery.loginName"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:function(t){e.fetchData()}}},[e._v("搜索")]),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(t){e.addT()}}},[e._v("新增")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.page.records,"element-loading-text":"玩命加载中……",border:"",fit:"","highlight-current-row":"",stripe:"",size:"mini"}},[n("el-table-column",{attrs:{label:"帐号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.loginName)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.sex))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"电话",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"280","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){e.handleWatch(t.row.id)}}},[e._v("查看")]),e._v(" "),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(n){e.handleUpdate(t.row.id)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){e.handleDelete(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-pagination",{staticStyle:{"margin-top":"30px"},attrs:{"current-page":e.page.pages,"page-sizes":[100,200,300,500,1e3],"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]},s=n("VU/8")(a,l,!1,null,null,null);t.default=s.exports}});