webpackJsonp([3],{Cdx3:function(e,t,i){var n=i("sB3e"),o=i("lktj");i("uqUo")("keys",function(){return function(e){return o(n(e))}})},Cz8I:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.upload-container .editor-slide-upload[data-v-43e20ca4] {\n  margin-bottom: 20px;\n}\n",""])},"IT++":function(e,t,i){var n=i("QriM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("c54a3110",n,!0)},QriM:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.eidtNews .line {\n  text-align: center;\n}\n.eidtNews .disabled .el-upload--picture-card {\n  display: none;\n}\n.eidtNews .editor-container {\n  min-height: 500px;\n  margin: 0 0 10px;\n}\n.eidtNews .editor-container .editor-upload-btn-container {\n    text-align: right;\n    margin-right: 10px;\n}\n.eidtNews .editor-container .editor-upload-btn-container .editor-upload-btn {\n      display: inline-block;\n}\n",""])},SeRV:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("gBtx"),o=i.n(n),s=i("hTat"),l=i("//Fk"),a=i.n(l),r=i("fZjL"),c=i.n(r),d={name:"editorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var e=this;return c()(this.listObj).every(function(t){return e.listObj[t].hasSuccess})},handleSubmit:function(){var e=this,t=c()(this.listObj).map(function(t){return e.listObj[t]});this.checkAllSuccess()?(console.log(t),this.$emit("successCBK",t),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(e,t){for(var i=t.uid,n=c()(this.listObj),o=0,s=n.length;o<s;o++)if(this.listObj[n[o]].uid===i)return this.listObj[n[o]].url=e.files.file,void(this.listObj[n[o]].hasSuccess=!0)},handleRemove:function(e){for(var t=e.uid,i=c()(this.listObj),n=0,o=i.length;n<o;n++)if(this.listObj[i[n]].uid===t)return void delete this.listObj[i[n]]},beforeUpload:function(e){var t=this,i=window.URL||window.webkitURL,n=e.uid;return this.listObj[n]={},new a.a(function(o,s){var l=new Image;l.src=i.createObjectURL(e),l.onload=function(){t.listObj[n]={hasSuccess:!1,uid:e.uid,width:this.width,height:this.height}},o(!0)})}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:e.color,borderColor:e.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("上传图片\n  ")]),e._v(" "),i("el-dialog",{attrs:{"append-to-body":"",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"https://httpbin.org/post",multiple:!0,"file-list":e.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var m=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"],h=["bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap\t preview anchor pagebreak fullscreen insertdatetime media table emoticons forecolor backcolor"],p={name:"tinymce",components:{editorImage:i("VU/8")(d,u,!1,function(e){i("slOJ")},"data-v-43e20ca4",null).exports},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date}},watch:{value:function(e){var t=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(t.tinymceId).setContent(e)})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var e=this,t=this;window.tinymce.init({selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:h,menubar:this.menubar,plugins:m,language:"zh_CN",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,init_instance_callback:function(i){t.value&&i.setContent(t.value),t.hasInit=!0,i.on("NodeChange Change KeyUp SetContent",function(){e.hasChange=!0,e.$emit("input",i.getContent())})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(e){window.tinymce.get(this.tinymceId).setContent(e)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(e){var t=this;e.forEach(function(e){window.tinymce.get(t.tinymceId).insertContent('<img class="wscnph" src="'+e.url+'" >')})}},destroyed:function(){this.destroyTinymce()}},f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tinymce-container editor-container"},[t("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),t("div",{staticClass:"editor-custom-btn-container"},[t("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},staticRenderFns:[]};var b=i("VU/8")(p,f,!1,function(e){i("T7iT")},"data-v-257b3125",null).exports,g=i("y/rj"),v={components:{Tinymce:b},data:function(){return{flag:"",imagelist:[],action:"http://101.231.89.126:8300/v1/upload",picUrl:"http://101.231.89.126:8300",id:"",model:{},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:0,max:20,message:"最大 20个字符",trigger:"blur"}],imgPath:[{required:!0,message:"请选择图片",trigger:"blur"}]},dialogImageUrl:"",dialogVisible:!1,areaList:[],selectAreaList:[]}},created:function(){this.$route.query.id&&(this.id=this.$route.query.id,this.load()),this.flag=o()(this.$route.query.flag),this.handleArea()},computed:{uploadDisabled:function(){return this.imagelist.length>0}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.model.areaId||(t.model.areaId="all"),t.id?Object(s.e)(t.model).then(function(e){t.$message({message:"恭喜你，修改成功",type:"success"}),t.$router.push({path:"NewsList"})}):Object(s.d)(t.model).then(function(e){t.$message({message:"恭喜你，添加成功",type:"success"}),t.$router.push({path:"NewsList"})})})},resetForm:function(e){this.$refs[e].resetFields()},load:function(){var e=this;Object(s.b)({id:this.id}).then(function(t){e.model=t.new,e.model.imgPath&&e.imagelist.push({url:e.picUrl+e.model.imgPath}),""!==e.model.areaId&&"all"!==e.model.areaId&&(e.selectAreaList=e.model.areaId.split(","))})},beforeUpload:function(e){console.log("beforeupload")},onSuccess:function(e,t,i){console.log("success"),this.model.imgPath=e.url,this.imagelist.push(t)},handleRemove:function(e,t){console.log("remove"),this.imagelist=[]},handlePictureCardPreview:function(e){console.log("preview"),this.dialogImageUrl=e.url,this.dialogVisible=!0},handleArea:function(){var e=this;Object(g.d)({pageNo:0,pageSize:1e3}).then(function(t){e.areaList=t.page.records})},setAreaId:function(e){this.model.areaId=this.selectAreaList.join(",")}}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{staticClass:"eidtNews"},[i("el-col",{attrs:{span:23}},[i("el-form",{ref:"model",staticClass:"demo-ruleForm",attrs:{model:e.model,rules:e.rules,"label-width":"100px",size:"mini"}},[i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"标题",prop:"title"}},[i("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"区域"}},[i("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.selectAreaList,callback:function(t){e.selectAreaList=t},expression:"selectAreaList"}},e._l(e.areaList,function(t){return i("el-option",{key:t.city,attrs:{label:t.city,value:t.id,blur:e.setAreaId()}})}))],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"图片",prop:"imgPath"}},[i("el-upload",{class:{disabled:e.uploadDisabled},attrs:{action:e.action,limit:1,"before-upload":e.beforeUpload,"on-success":e.onSuccess,"list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,multiple:!1,accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg","file-list":e.imagelist}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"作者"}},[i("el-input",{model:{value:e.model.author,callback:function(t){e.$set(e.model,"author",t)},expression:"model.author"}})],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"来源"}},[i("el-input",{model:{value:e.model.source,callback:function(t){e.$set(e.model,"source",t)},expression:"model.source"}})],1)],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"显示状态"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.model.isShow,callback:function(t){e.$set(e.model,"isShow",t)},expression:"model.isShow"}})],1),e._v(" "),i("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.model.isShow,expression:"model.isShow"}],attrs:{label:"设置推荐"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":0},model:{value:e.model.flagHot,callback:function(t){e.$set(e.model,"flagHot",t)},expression:"model.flagHot"}})],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:20}},[i("el-form-item",{staticClass:"editor-container"},[i("tinymce",{ref:"editor",attrs:{height:400},model:{value:e.model.detail,callback:function(t){e.$set(e.model,"detail",t)},expression:"model.detail"}})],1)],1)],1),e._v(" "),i("el-row",[i("el-col",{attrs:{span:10}},[i("el-form-item",{attrs:{label:"备注"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.model.remarks,callback:function(t){e.$set(e.model,"remarks",t)},expression:"model.remarks"}})],1)],1)],1),e._v(" "),0!=e.flag?i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("model")}}},[e._v("提交")]),e._v(" "),i("el-button",{on:{click:function(t){e.resetForm("model")}}},[e._v("重置")])],1):e._e()],1)],1)],1)},staticRenderFns:[]};var w=i("VU/8")(v,y,!1,function(e){i("IT++")},null,null);t.default=w.exports},T7iT:function(e,t,i){var n=i("z6t+");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("4f1db8d9",n,!0)},fZjL:function(e,t,i){e.exports={default:i("jFbC"),__esModule:!0}},hTat:function(e,t,i){"use strict";t.c=function(e){return n.a.fetchPost("/v1/news/selectList",e)},t.b=function(e){return n.a.fetchPost("/v1/news/select",e)},t.d=function(e){return n.a.fetchPost("/v1/news/insert",e)},t.e=function(e){return n.a.fetchPost("/v1/news/update",e)},t.a=function(e){return n.a.fetchPost("/v1/news/delete",e)};var n=i("vLgD")},jFbC:function(e,t,i){i("Cdx3"),e.exports=i("FeBl").Object.keys},slOJ:function(e,t,i){var n=i("Cz8I");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("efc64b3a",n,!0)},uqUo:function(e,t,i){var n=i("kM2E"),o=i("FeBl"),s=i("S82l");e.exports=function(e,t){var i=(o.Object||{})[e]||Object[e],l={};l[e]=t(i),n(n.S+n.F*s(function(){i(1)}),"Object",l)}},"z6t+":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.tinymce-container[data-v-257b3125] {\n  position: relative;\n}\n.tinymce-container[data-v-257b3125] .mce-fullscreen {\n  z-index: 10000;\n}\n.tinymce-textarea[data-v-257b3125] {\n  visibility: hidden;\n  z-index: -1;\n}\n.editor-custom-btn-container[data-v-257b3125] {\n  position: absolute;\n  right: 4px;\n  top: 4px;\n  /*z-index: 2005;*/\n}\n.editor-upload-btn[data-v-257b3125] {\n  display: inline-block;\n}\n",""])}});