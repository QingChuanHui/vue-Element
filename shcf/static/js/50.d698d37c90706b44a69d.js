webpackJsonp([50],{wAul:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n),l=a("Dd8w"),s=a.n(l),o=a("WtBs"),c=a("NYxO"),r={computed:s()({},Object(c.b)(["userInfo"])),data:function(){return{page:{},listLoading:!0,listQuery:{billNo:"",pageNo:1,pageSize:10,companyId:"",ownerId:"",clientId:"",state:1},activeName:"service"}},mounted:function(){this.listQuery.clientId=this.userInfo.clientId,this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(o.c)(this.listQuery).then(function(t){e.page=t.page,e.listLoading=!1})},handleSizeChange:function(e){this.listQuery.pageSize=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.pageNo=e,this.fetchData()},handleWatch:function(e){this.$router.push({path:"edit",query:{id:e}})},completeClike:function(e){var t=this;this.$confirm("此操作将订单改为完工状态, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.a)({formData:i()({overPersonId:t.userInfo.id,id:e})}).then(function(e){t.$message({type:"success",message:"操作成功!"}),t.fetchData()})}).catch(function(){t.$message({type:"info",message:"已取消"})})},handleClick:function(e,t){console.log(this.activeName),"complete"===this.activeName?this.listQuery.state=3:"service"===this.activeName?this.listQuery.state=1:"unpaid"===this.activeName?this.listQuery.state=0:"evaluate"===this.activeName&&(this.listQuery.state=2),this.fetchData()}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"appCenterTop",staticStyle:{height:"50px"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"订单号",size:"mini"},model:{value:e.listQuery.billNo,callback:function(t){e.$set(e.listQuery,"billNo",t)},expression:"listQuery.billNo"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:function(t){e.fetchData()}}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:"sys:office:add",expression:"'sys:office:add'"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:function(t){e.addT()}}},[e._v("新增")])],1),e._v(" "),a("el-card",[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"服务中",name:"service"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待支付",name:"unpaid"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待评价",name:"evaluate"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"已完成",name:"complete"}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.page.records,"element-loading-text":"玩命加载中……",border:"",fit:"","highlight-current-row":"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{label:"订单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.billNo)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单金额",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.billMoney)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.stateName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"车主",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.ownerName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"车主手机",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.ownerPhone))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"车牌号",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.carCode))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleWatch(t.row.id)}}},[e._v("查看")]),e._v(" "),"服务中"==t.row.stateName?a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.completeClike(t.row.id)}}},[e._v("完工")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{"margin-top":"30px"},attrs:{"current-page":e.page.pages,"page-sizes":[10,20,50,100,200,300,500,1e3],"page-size":e.page.size,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]},d=a("VU/8")(r,u,!1,null,null,null);t.default=d.exports}});