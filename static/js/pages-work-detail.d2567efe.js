(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-detail"],{"161d":function(e,t,a){"use strict";var i,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[e.__token?[a("v-uni-view",{staticClass:"pages page-main"},[a("v-uni-view",{staticClass:"work-dtl-head"},[a("v-uni-view",{staticClass:"work-head-main"},[a("v-uni-view",{staticClass:"work-head-list"},[a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-block-title work-dtl-name"},[e._v(e._s(e.datas.name)+" | "+e._s(e.datas.type))])],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-require"},[e._v(e._s(e.datas.province?e.datas.province+" | ":"")+e._s(e.datas.city?e.datas.city+" | ":"")+e._s(e.datas.age_min)+"-"+e._s(e.datas.age_max)+"年\n\t\t\t\t\t\t\t\t| "+e._s(e.datas.education?e.datas.education:"无学历要求"))])],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-salary"},[e._v(e._s(e.datas.salary))])],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-tag-list"},[e._l(e.datas.tags,(function(t,i){return[a("v-uni-view",{key:i+"_0",staticClass:"work-tag"},[e._v(e._s(t))])]}))],2)],1)],1),a("v-uni-view",{staticClass:"work-head-list"},[a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-block-title"},[a("uni-icons",{attrs:{type:"weizhi",size:"20",color:"#898989"}}),e._v(e._s(e.datas.province?e.datas.province+" - ":"")+e._s(e.datas.city?e.datas.city:""))],1)],1),a("v-uni-view",{staticClass:"work-block"},[a("v-uni-view",{staticClass:"work-address"},[e._v(e._s(e.datas.address?e.datas.address:""))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"work-detail-overview"},[a("v-uni-view",{staticClass:"work-block-title title-block"},[e._v("岗位职责")]),a("v-uni-view",{staticClass:"work-content"},[a("v-uni-rich-text",{attrs:{nodes:e.datas.responsibilities}})],1)],1),a("v-uni-view",{staticClass:"work-detail-overview"},[a("v-uni-view",{staticClass:"work-block-title title-block"},[e._v("任职资格")]),a("v-uni-view",{staticClass:"work-content"},[a("v-uni-rich-text",{attrs:{nodes:e.datas.qualifications}})],1)],1),a("fix-button",[e.datas.needExam&&!e.is_pass_exam?[a("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.workExam.apply(void 0,arguments)}}},[e._v("求职前小测试")])]:[a("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:e.disabled?"btn-disabled":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showResume.apply(void 0,arguments)}}},[e._v(e._s(1==e.datas.resume_article?"简历已投递":"发送简历"))])]],2)],1),a("uni-popup",{attrs:{show:"showReume"===e.poptype,position:"middle",mode:"posfixed",width:"80"},on:{hidePopup:function(t){arguments[0]=t=e.$handleEvent(t),e.togglePopup("")}}},[a("v-uni-view",{staticClass:"train-show-modal-box"},[a("user-resume",{attrs:{editBlock:e.editBlock,isSendResume:"true",temp:e.temp,datas:e.resume_temp},on:{switchResume:function(t){arguments[0]=t=e.$handleEvent(t),e.switchResume.apply(void 0,arguments)},sendResume:function(t){arguments[0]=t=e.$handleEvent(t),e.sendResume.apply(void 0,arguments)}}})],1)],1)]:[a("login-tip"),a("tab-bar")]],2)},s=[];a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}))},"311d":function(e,t,a){"use strict";a.r(t);var i=a("161d"),o=a("5470");for(var s in o)"default"!==s&&function(e){a.d(t,e,(function(){return o[e]}))}(s);a("6d96");var n,r=a("f0c5"),d=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"00edf03e",null,!1,i["a"],n);t["default"]=d.exports},3841:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".flex-top-box[data-v-00edf03e]{position:relative}.flex-filter[data-v-00edf03e]{background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #d1d1d1;position:fixed;z-index:998;width:100%;left:0;height:44px}.filter-block[data-v-00edf03e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.filter-block[data-v-00edf03e]:first-child{border-right:1px solid #d1d1d1}.filter-more-btn[data-v-00edf03e]{-webkit-box-flex:0;-webkit-flex:0;flex:0;width:10%}.filter-more-box[data-v-00edf03e]{padding:%?40?% %?20?%}.filter-more[data-v-00edf03e]{padding-bottom:%?15?%;margin-bottom:%?15?%;border-bottom:1px solid #eee}.filter-more[data-v-00edf03e]:last-child{border-bottom:0}.filter-title[data-v-00edf03e]{font-size:%?32?%;padding-bottom:%?10?%;color:#333}.filter-vals[data-v-00edf03e]{color:#666}.filter-btns[data-v-00edf03e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-align-content:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.frbtns[data-v-00edf03e]{width:45%;border:%?2?% solid #d1d1d1;font-size:%?24?%;color:#333}.btn-disabled[data-v-00edf03e]{background:#929292;border-color:#666;color:#fff}.f-confirm[data-v-00edf03e]{background:#008cee;color:#fff;border-color:#007aff}.work-list[data-v-00edf03e]{padding:%?20?% %?30?%;border-bottom:%?15?% solid #f4f4f4}.work-list[data-v-00edf03e]:last-child{border-bottom:none}.work-block[data-v-00edf03e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;color:#929292;font-size:%?26?%;padding-bottom:%?6?%}.work-detail-overview[data-v-00edf03e]{padding-bottom:%?40?%}.work-block-title[data-v-00edf03e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-align-content:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;font-size:%?34?%;color:#222}.title-block[data-v-00edf03e]{padding-bottom:%?20?%}.work-dtl-name[data-v-00edf03e]{font-size:%?44?%}.work-salary[data-v-00edf03e]{font-size:%?34?%;color:#008cee}.work-tag-list[data-v-00edf03e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.work-tag[data-v-00edf03e]{background:#f2f2f3;padding:%?5?% %?10?%;margin:0 %?10?% %?8?% 0;-webkit-border-radius:%?8?%;border-radius:%?8?%;font-size:%?24?%}.work-dtl-head[data-v-00edf03e]{-webkit-border-radius:%?10?%;border-radius:%?10?%;border:1px solid #e0e0e0;-webkit-box-shadow:0 0 %?10?% %?3?% #e0e0e0;box-shadow:0 0 %?10?% %?3?% #e0e0e0;margin-bottom:%?40?%}.work-head-main[data-v-00edf03e]{padding:%?25?%}.work-head-list[data-v-00edf03e]{border-bottom:1px solid #d1d1d1;padding-bottom:%?20?%;margin-bottom:%?20?%}.work-head-list[data-v-00edf03e]:last-child{border-bottom:0;padding-bottom:0;margin-bottom:0}.work-content[data-v-00edf03e]{color:#666;font-size:%?28?%;line-height:1.4}",""]),e.exports=t},5470:function(e,t,a){"use strict";a.r(t);var i=a("e001"),o=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=o.a},6885:function(e,t,a){var i=a("3841");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=a("4f06").default;o("1dab656a",i,!0,{sourceMap:!1,shadowMode:!1})},"6d96":function(e,t,a){"use strict";var i=a("6885"),o=a.n(i);o.a},e001:function(e,t,a){"use strict";var i=a("ee27");a("99af"),a("d81d"),a("ac1f"),a("5319"),a("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("8940")),s=i(a("1adc")),n=i(a("678c")),r=a("5deb"),d={data:function(){return{article_id:"",examination_id:"",__token:"",is_pass_exam:!1,datas:[],saveData:{},temp:{},resume_temp:{},poptype:"",editBlock:"basic",hasResume:!1,disabled:!1}},onLoad:function(e){var t=this;t.article_id=e.id},onShow:function(){var e=this;e.$store.dispatch("cheack_user"),e.__token=e.$store.state.user.token?e.$store.state.user.token:"",e.getDatas(),e.getResume()},onReady:function(){},components:{fixButton:o.default,uniPopup:s.default,userResume:n.default},onPullDownRefresh:function(){var e=this;e.getDatas()},computed:{},methods:{getDatas:function(){var e=this,t={inter:"support",parm:"?article_id=".concat(e.article_id),header:{token:e.__token},fun:function(t){if(uni.stopPullDownRefresh(),t.success){var a=t.data;a["tags"]=a["tag"].split("，"),a["responsibilities"]&&(a["responsibilities"]=a["responsibilities"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" ')),a["qualifications"]&&(a["qualifications"]=a["qualifications"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" ')),a["examination_id"]&&a["is_pass_exam"]&&1!=a["resume_article"]&&(a["needExam"]=!0,e.examination_id=a["examination_id"]),a["is_pass_exam"]&&a["is_pass_exam"]["value"]&&1!=a["resume_article"]&&(e.is_pass_exam=!0),e.datas=a,e.disabled=!!a.resume_article,uni.setNavigationBarTitle({title:t.data.name})}}};e.$store.dispatch("getData",t)},getResume:function(){var e=this,t={inter:"resume",header:{token:e.__token},fun:function(t){if(t.success){var a=t.data.info;a&&(a.company&&a.company.map((function(e,t,a){e["start_time"]=e["start_time"].split(" ")[0],e["end_time"]=e["end_time"].split(" ")[0]})),a.school&&a.school.map((function(e,t,a){e["start_time"]=e["start_time"].split(" ")[0],e["end_time"]=e["end_time"].split(" ")[0]})),a.project&&a.project.map((function(e,t,a){e["start_time"]=e["start_time"].split(" ")[0],e["end_time"]=e["end_time"].split(" ")[0]})),e.temp=a,e.resume_temp=a,e.hasResume=!0)}else e.hasResume=!1}};e.$store.dispatch("getData",t)},workExam:function(){var e=this;uni.navigateTo({url:"/pages/train/test?type=workExam&id=".concat(e.examination_id,"&pid=").concat(e.article_id)})},showResume:function(){var e=this;e.disabled||(e.poptype="showReume")},switchResume:function(e){var t=this,a=t.$store.state.resumeTemp,i=t.temp,o=t.resume_temp;if(console.log(t.editBlock),"next"==e){switch(t.editBlock){case"basic":var s=[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"姓名不能为空"},{name:"education",checkType:"notnull",checkRule:"",errorMsg:"请选择学历"},{name:"age_work",checkType:"notnull",checkRule:"",errorMsg:"请选择工作年限"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}];t.saveData["name"]=a.name?a.name:i.name,t.saveData["brithday"]=a.brithday?a.brithday:i.brithday,t.saveData["sex"]=a.sex?a.sex:i.sex,t.saveData["education"]=a.education?a.education:i.education,t.saveData["age_work"]=a.age_work?a.age_work:i.age_work,t.saveData["phone"]=a.phone?a.phone:i.phone,t.saveData["email"]=a.email?a.email:i.email;var n=r.check(t.saveData,s);if(!n)return void uni.showToast({title:r.error,icon:"none"});t.editBlock="company",t.temp=o&&o.company?o.company[0]:{},console.log(t.saveData);break;case"company":var d={};o.company&&o.company[0]&&o.company[0]["id"]&&(d["id"]=o.company[0]["id"]),d["company"]=a.company?a.company:i.company,d["start_time"]=a.start_time?a.start_time:i.start_time,d["end_time"]=a.end_time?a.end_time:i.end_time,d["job"]=a.job?a.job:i.job,d["infomation"]=a.infomation?a.infomation:i.infomation,t.saveData["company"]=[d],t.temp=o&&o.school?o.school[0]:{},t.editBlock="school";break;case"school":var c={};o.school&&o.school[0]&&o.school[0]["id"]&&(c["id"]=o.school[0]["id"]),c["school"]=a.school?a.school:i.school,c["start_time"]=a.start_time?a.start_time:i.start_time,c["end_time"]=a.end_time?a.end_time:i.end_time,c["profession"]=a.profession?a.profession:i.profession,t.saveData["school"]=[c],t.temp=o&&o.project?o.project[0]:{},t.editBlock="project";break;case"project":var l={};o.project&&o.project[0]&&o.project[0]["id"]&&(l["id"]=o.project[0]["id"]),l["name"]=a.name?a.name:i.name,l["start_time"]=a.start_time?a.start_time:i.start_time,l["end_time"]=a.end_time?a.end_time:i.end_time,l["overview"]=a.overview?a.overview:i.overview,t.saveData["project"]=[l];var u=o&&o.about_self?o.about_self:"";t.temp["about_self"]=a.about_self?a.about_self:u,t.editBlock="about_self";break;default:break}console.log(t.temp)}else if("prev"==e)switch(t.editBlock){case"about_self":t.editBlock="project",t.temp=t.saveData.project[0];break;case"project":t.editBlock="school",t.temp=t.saveData.school[0];break;case"school":t.editBlock="company",t.temp=t.saveData.company[0];break;case"company":t.editBlock="basic",t.temp=t.saveData;break;default:break}},sendResume:function(){var e=this;if(e.hasResume){var t=e.$store.state.resumeTemp,a=t.about_self?t.about_self:e.temp.about_self;e.saveData["about_self"]=a,console.log(e.saveData),e.saveDatas(e.saveData);var i={inter:"resume",method:"POST",data:{article_id:e.article_id},header:{token:e.__token},fun:function(t){t.success?(e.poptype="",e.disabled=!0,uni.showToast({title:"简历已投递",icon:"success"})):uni.showToast({title:"简历发送失败！请重试",icon:"none"})}};e.$store.dispatch("getData",i)}else uni.showToast({title:"请完善简历信息",icon:"none"})},saveDatas:function(e){var t=this,a={inter:"resume",method:"PUT",data:e,header:{token:t.__token,"Content-Type":"application/json"}};console.log(a),a["fun"]=function(e){e.success&&t.getResume()},t.$store.dispatch("getData",a)},togglePopup:function(e){var t=this;t.poptype=e}}};t.default=d}}]);