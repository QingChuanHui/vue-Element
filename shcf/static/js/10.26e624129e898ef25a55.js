webpackJsonp([10],{"0o6W":function(e,t,r){var l=r("LMWw");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);r("rjj0")("2c6bbdec",l,!0)},LMWw:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.line[data-v-4f747b1e]{\n  text-align: center;\n}\n",""])},wVjH:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r("gBtx"),o=r.n(l),a=r("kY/X"),s=r("JAmY"),n={components:{officeSelector:r("8+ep").a},data:function(){return{sexList:[{value:"男",label:"男"},{value:"女",label:"女"}],flagUpdate:!1,id:"",flag:0,dataScopeData:[],roleTypeData:[],ruleForm:{id:"",name:"",officeName:"",officeId:"",remarks:"",isSys:0,roleTypeName:"",dataScopeName:"",roleType:"",dataScope:""},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:0,max:20,message:"最大 64个字符",trigger:"blur"}],officeId:{required:!0,message:"机构名称不允许为空",trigger:"blur"}}}},mounted:function(){this.$nextTick(function(){this.id=this.$route.query.id,this.id&&this.load(),this.flag=o()(this.$route.query.flag),this.getDicData()})},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;1===t.flag?Object(a.d)(t.ruleForm).then(function(e){console.log("ok"),t.$router.push({path:"/system/Role"})}):2===t.flag?Object(a.g)(t.ruleForm).then(function(e){console.log("ok"),t.$router.push({path:"/system/Role"})}):console.log("error submit!!:"+t.flag)})},resetForm:function(e){this.$refs[e].resetFields()},load:function(){var e=this;Object(a.f)({id:this.id}).then(function(t){e.ruleForm=t.new,console.log(e.ruleForm)})},selectOffice:function(e){e.treeKey&&(this.ruleForm.officeId=e.treeKey,this.ruleForm.officeName=e.treeValue)},getDicData:function(){var e=this;Object(s.a)({type:"dataSocope"}).then(function(t){console.log(t.newList),e.dataScopeData=t.newList});Object(s.a)({type:"roleType"}).then(function(t){console.log(t.newList),e.roleTypeData=t.newList})}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",[r("el-col",{attrs:{span:23}},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px",size:"mini"}},[r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"机构名称",prop:"officeName"}},[r("officeSelector",{attrs:{officeName:e.ruleForm.officeName},on:{selectSuccess:e.selectOffice}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"角色名称",prop:"name"}},[r("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{prop:"roleTypeName",label:"角色类型"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.roleType,callback:function(t){e.$set(e.ruleForm,"roleType",t)},expression:"ruleForm.roleType"}},e._l(e.roleTypeData,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{prop:"dataScopeName",label:"数据范围"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.dataScope,callback:function(t){e.$set(e.ruleForm,"dataScope",t)},expression:"ruleForm.dataScope"}},e._l(e.dataScopeData,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"是否系统角色"}},[r("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.ruleForm.isSys,callback:function(t){e.$set(e.ruleForm,"isSys",t)},expression:"ruleForm.isSys"}})],1)],1)],1),e._v(" "),r("el-row",[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"备注",prop:"remarks"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1)],1)],1),e._v(" "),0!=e.flag?r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1):e._e()],1)],1)],1)],1)},staticRenderFns:[]};var c=r("VU/8")(n,i,!1,function(e){r("0o6W")},"data-v-4f747b1e",null);t.default=c.exports}});