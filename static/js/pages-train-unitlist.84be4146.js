(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-train-unitlist"],{"23f6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"unit-list"},[n("v-uni-swiper",{staticClass:"swiper-box swiper-slide-unit",attrs:{"indicator-dots":t.swiperleng?"true":"false",circular:"circular",interval:"interval",duration:"duration","indicator-color":"#E0E0E0","indicator-active-color":"#008CEE",current:t.swiperCurrent},on:{change:function(e){e=t.$handleEvent(e),t.swiperChange(e)}}},t._l(t.swiperList,function(e,i){return n("v-uni-swiper-item",{key:i,staticClass:"swiper-item"},[n("v-uni-view",{staticClass:"vli"},[n("v-uni-view",{staticClass:"vli2 train-swiper-main"},[e.media_type?t._e():n("v-uni-image",{staticClass:"slideImg",attrs:{"lazy-load":"true",src:e.original_src,mode:"aspectFill"},on:{click:function(e){e=t.$handleEvent(e),t.previewImage(e)}}}),"video"==e.media_type?n("v-uni-video",{staticClass:"train-video",attrs:{src:e.media_src,controls:""},on:{error:function(e){e=t.$handleEvent(e),t.videoErrorCallback(e)}}}):t._e(),"music"==e.media_type?n("v-uni-audio",{staticStyle:{"text-align":"left"},attrs:{src:e.media_src,name:e.name,author:"职照培训",action:"{method: 'pause'}",controls:"",poster:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"}}):t._e()],1)],1)],1)}),1),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt segmented-box"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.segmented,styleType:"text",activeColor:"#008CEE"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClicksegmented(e)}}})],1),n("v-uni-view",{staticClass:"unit-content"},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}]},[n("v-uni-view",{staticClass:"course-lessions"},[n("v-uni-view",{staticClass:"course-inner"},[n("v-uni-view",{staticClass:"less-row",class:[-1==t.lessActive?"less-active":""],on:{click:function(e){e=t.$handleEvent(e),t.getLessDtl("content",-1)}}},[t._v("章节介绍")]),t._l(t.lessions,function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"less-row",class:[i==t.lessActive?"less-active":""],on:{click:function(n){n=t.$handleEvent(n),t.getLessDtl(e.id,i)}}},[t._v(t._s(i+1)+"."+t._s(e.name))])]})],2)],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}]},[n("v-uni-view",{staticClass:"course-detail-box"},[n("v-uni-view",{staticClass:"course-inner"},["content"===t.detailType?[n("v-uni-view",{staticClass:"course-title"},[t._v(t._s(t.data.name))]),n("v-uni-view",{staticClass:"course-more list-more"},[n("v-uni-view",[t._v("共"+t._s(t.lessTotal)+"门课程")])],1),n("v-uni-rich-text",{staticClass:"course-detail",attrs:{nodes:t.data.detail}})]:[n("v-uni-rich-text",{staticClass:"course-detail",attrs:{nodes:t.lessDtl.detail}})]],2)],1)],1)],1),n("fix-button",[t.canTest?t._e():n("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:t.isJoined?"is-joined":"",on:{click:function(e){e=t.$handleEvent(e),t.joinlearning(t.courseId)}}},[t._v(t._s(t.isJoinTxt))]),t.canTest?n("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:t.canTest?"":"fbtn-disable",on:{click:function(e){e=t.$handleEvent(e),t.to_test(t.courseId)}}},[t._v("开始测试")]):t._e()],1)],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"2e6b":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".segmented-control[data-v-5f6afb8e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?32?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden}.segmented-control.button[data-v-5f6afb8e]{border:%?2?% solid}.segmented-control.text[data-v-5f6afb8e]{border:0;border-radius:%?0?%}.segmented-control-item[data-v-5f6afb8e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box}.segmented-control-item.button[data-v-5f6afb8e]{border-left:%?1?% solid}.segmented-control-item.text[data-v-5f6afb8e]{border-left:0}.segmented-control-item[data-v-5f6afb8e]:first-child{border-left-width:0}",""])},"3c7e":function(t,e,n){"use strict";n.r(e);var i=n("859f"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},"42c6":function(t,e,n){"use strict";n.r(e);var i=n("a623"),s=n("afb5");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var r=n("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"39470480",null);e["default"]=o.exports},"53a9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("42c6")),s=a(n("8811"));function a(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{__token:"",courseId:"",data:[],lessions:[],lessTotal:"",lessDtl:[],cover:[],detailType:"content",swiperList:[],swiperCurrent:0,lessActive:-1,lessDefaultActive:0,isJoined:!1,isJoinTxt:"加入学习",current:0,segmented:["课程目录","介绍"],canTest:!1}},onLoad:function(t){var e=this;e.courseId=t.id,e.$store.dispatch("cheack_user"),e.__token=e.$store.state.user.token;var n={inter:"course",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){if(t.success){var n=t.data;e.data=n,e.isJoined="1"==n.ucStatus||"2"==n.ucStatus,e.isJoinTxt="1"==n.ucStatus?"学习完成后开启测试":"加入学习",n.lessonCount==n.lessonStartCount&&"0"!=n.lessonCount&&"0"!=n.lessonStartCount&&(e.canTest=!0);var i=[{original_src:t.data.original_src||"/img/logo.png"}];e.swiperList=i}}};e.$store.dispatch("getData",n);var i={inter:"lessons",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){if(t.success){e.lessions=t.data.list,e.lessTotal=t.data.total;e.lessDefaultActive}}};e.$store.dispatch("getData",i)},onShow:function(){},onReady:function(t){},components:{fixButton:i.default,uniSegmentedControl:s.default},computed:{swiperleng:function(){return this.swiperList.length}},methods:{getLessDtl:function(t,e){var n=this;if(console.log(t,e),n.detailType=t,n.current=1,e!=n.lessActive){if("content"==t&&-1==e)return n.lessActive=e,void(n.swiperList=[{original_src:n.data.original_src||"/img/logo.png"}]);var i={inter:"lesson",parm:"?lesson_id=".concat(t),header:{token:n.__token},fun:function(i){n.swiperCurrent=0,n.lessActive=e,n.current=1;var s={inter:"accountLesson",data:{lesson_id:t},method:"POST",header:{"Content-Type":"application/json",token:n.__token},fun:function(t){t.success}};if(n.$store.dispatch("getData",s),i.success){var a=i.data;n.lessDtl=a;var r=a.images?a.images:[];if(a.src&&a.type){var o={name:a.name,media_type:a.type,media_src:a.src};r.push(o)}r&&(n.swiperList=r)}}};n.$store.dispatch("getData",i)}},onClicksegmented:function(t){this.current!==t&&(this.current=t)},previewImage:function(){var t=this,e=t.swiperCurrent,n=t.swiperList,i=n.map(function(t){return t.original_src}),s={urls:i,indicator:"number",current:e};console.log(s),uni.previewImage(s)},videoErrorCallback:function(t){uni.showModal({content:t.target.errMsg,showCancel:!1})},swiperChange:function(t){var e=this;e.swiperCurrent=t.detail.current},joinlearning:function(t){var e=this;if(!e.isJoined){var n={inter:"accountCourse",data:{course_id:t},method:"POST",header:{"Content-Type":"application/json",token:e.__token},fun:function(t){t.success&&(e.isJoined=!0,e.isJoinTxt="学习完成后开启测试")}};e.$store.dispatch("getData",n)}},to_test:function(t){var e=this;e.canTest?uni.navigateTo({url:"/pages/train/test?course_id=".concat(t)}):uni.showModal({content:"学习完成当前课程方可测试！",showCancel:!1})}}};e.default=r},6353:function(t,e,n){var i=n("2e6b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("66eef4dd",i,!0,{sourceMap:!1,shadowMode:!1})},"6af4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"segmented-control",class:t.styleType,style:t.wrapStyle},t._l(t.values,function(e,i){return n("v-uni-view",{key:i,staticClass:"segmented-control-item",class:t.styleType,style:i===t.currentIndex?t.activeStyle:t.itemStyle,on:{click:function(e){e=t.$handleEvent(e),t.onClick(i)}}},[t._v(t._s(e))])}),1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},"6f56":function(t,e,n){var i=n("a8cf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("ea50b00c",i,!0,{sourceMap:!1,shadowMode:!1})},"7df2":function(t,e,n){"use strict";n.r(e);var i=n("53a9"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},"859f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(t){t!==this.currentIndex&&(this.currentIndex=t)}},computed:{wrapStyle:function(){var t="";switch(this.styleType){case"text":t="border:0;";break;default:t="border-color: ".concat(this.activeColor);break}return t},itemStyle:function(){var t="";switch(this.styleType){case"text":t="color:#000;border-left:0;";break;default:t="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return t},activeStyle:function(){var t="";switch(this.styleType){case"text":t="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:t="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return t}},methods:{onClick:function(t){this.currentIndex!==t&&(this.currentIndex=t,this.$emit("clickItem",t))}}};e.default=i},8811:function(t,e,n){"use strict";n.r(e);var i=n("6af4"),s=n("3c7e");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("f291");var r=n("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"5f6afb8e",null);e["default"]=o.exports},a623:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[n("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?n("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},a65c:function(t,e,n){"use strict";var i=n("6f56"),s=n.n(i);s.a},a8cf:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".swiper-slide-unit[data-v-494a8c3e]{height:%?422?%}.segmented-box[data-v-494a8c3e]{border-bottom:%?2?% solid #d1d1d1}.unit-content[data-v-494a8c3e]{padding-bottom:%?30?%}.course-inner[data-v-494a8c3e]{padding:%?30?%}.is-joined[data-v-494a8c3e]{background:#929292;color:#fff;border-color:#929292}.course-detail-box[data-v-494a8c3e]{border-bottom:%?20?% solid #f4f4f4}.less-active[data-v-494a8c3e]{color:#008cee}.train-swiper-main[data-v-494a8c3e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])},afb5:function(t,e,n){"use strict";n.r(e);var i=n("e370"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a},c23a:function(t,e,n){"use strict";n.r(e);var i=n("23f6"),s=n("7df2");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("a65c");var r=n("2877"),o=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,"494a8c3e",null);e["default"]=o.exports},e370:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=i},f291:function(t,e,n){"use strict";var i=n("6353"),s=n.n(i);s.a}}]);