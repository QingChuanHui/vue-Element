webpackJsonp([16],{IpGg:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o("gBtx"),r=o.n(l),i=o("y/rj"),a={components:{officeSelector:o("8+ep").a},data:function(){var e=this;return{cityFlag:"",flag:"",id:"",model:{city:"",officeId:"",officeName:""},rules:{province:[{required:!0,message:"请选择省份",trigger:"change"}],city:[{trigger:"change",validator:function(t,o,l){""===o&&l(new Error("请选择城市")),Object(i.a)({city:o,flag:e.cityFlag}).then(function(e){e.new?l(new Error("该区域已开通")):l()})}}],officeName:[{required:!0,message:"请选择机构",trigger:"change"}]},provinceTree:[],cityTree:[]}},created:function(){this.$route.query.id&&(this.id=this.$route.query.id,this.load()),this.flag=r()(this.$route.query.flag),"1"===this.$route.query.flag?this.cityFlag=!1:"2"===this.$route.query.flag&&(this.cityFlag=!0),this.getAreaData(1,"")},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.id?Object(i.g)(t.model).then(function(e){t.$message({message:"恭喜你，修改成功",type:"success"}),t.$router.push({path:"Area"})}):Object(i.f)(t.model).then(function(e){t.$message({message:"恭喜你，添加成功",type:"success"}),t.$router.push({path:"Area"})})})},resetForm:function(e){this.$refs[e].resetFields()},load:function(){var e=this;Object(i.c)({id:this.id}).then(function(t){e.model=t.new})},selectOffice:function(e){e.treeKey&&(this.model.officeId=e.treeKey,this.model.officeName=e.treeValue)},onProvinceChange:function(e){console.log(e),this.model.city="",this.cityTree=[],this.getAreaData(2,e)},onCityChange:function(e){console.log(e)},getAreaData:function(e,t){var o=this;Object(i.e)({name:t}).then(function(t){1===e?o.provinceTree=t.newList:2===e&&(o.cityTree=t.newList)})}}},n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",[o("el-col",{attrs:{span:23}},[o("el-form",{ref:"model",staticClass:"demo-ruleForm",attrs:{model:e.model,rules:e.rules,"label-width":"100px",size:"mini"}},[o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"机构名称",prop:"officeName"}},[o("officeSelector",{attrs:{officeName:e.model.officeName},on:{selectSuccess:e.selectOffice}})],1)],1)],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"地址省",prop:"province"}},[o("el-select",{attrs:{filterable:"",placeholder:"请选择省"},on:{change:e.onProvinceChange},model:{value:e.model.province,callback:function(t){e.$set(e.model,"province",t)},expression:"model.province"}},e._l(e.provinceTree,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.name}})}))],1)],1),e._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{label:"地址市",prop:"city"}},[o("el-select",{attrs:{filterable:"",placeholder:"请选择市"},on:{change:e.onCityChange},model:{value:e.model.city,callback:function(t){e.$set(e.model,"city",t)},expression:"model.city"}},e._l(e.cityTree,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.name}})}))],1)],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"显示状态"}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.model.isShow,callback:function(t){e.$set(e.model,"isShow",t)},expression:"model.isShow"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"热门状态"}},[o("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.model.isHot,callback:function(t){e.$set(e.model,"isHot",t)},expression:"model.isHot"}})],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:10}},[o("el-form-item",{attrs:{label:"备注"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.model.remarks,callback:function(t){e.$set(e.model,"remarks",t)},expression:"model.remarks"}})],1)],1)],1),e._v(" "),0!=e.flag?o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("model")}}},[e._v("提交")]),e._v(" "),o("el-button",{on:{click:function(t){e.resetForm("model")}}},[e._v("重置")])],1):e._e()],1)],1)],1)],1)},staticRenderFns:[]},s=o("VU/8")(a,n,!1,null,null,null);t.default=s.exports}});