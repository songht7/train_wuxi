(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-train-unitlist"],{1918:function(e,t,i){"use strict";i.r(t);var n=i("c56a"),o=i("e7e8");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("4482");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"0ef29eeb",null);t["default"]=r.exports},"23e5":function(e,t,i){"use strict";i.r(t);var n=i("2e2c"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},2866:function(e,t,i){"use strict";i.r(t);var n=i("5473"),o=i("b0ae");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("28b2");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"5f31afe6",null);t["default"]=r.exports},"28b2":function(e,t,i){"use strict";var n=i("ee31"),o=i.n(n);o.a},"2e2c":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};t.default=n},"3d11":function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("e814"));i("ac6a");var a=n(i("75fc"));i("a481"),i("7f7f");var s=n(i("6b1d")),r=n(i("1918")),c=n(i("d828")),l={data:function(){return{__token:"",courseId:"",data:[],title:"",lessions:[],lessTotal:"",lessDtl:[],cover:[],detailType:"",media:[],showList:[{name:"",original_src:"".concat(this.$store.state.interface.apiurl,"/img/logo.png")}],swiperList:[],swiperCurrent:0,lessActive:-1,lessDefaultActive:0,isJoined:!1,isJoinTxt:"加入学习",current:0,segmented:["课程目录"],currentPage:1,pageSize:100,canTest:!1,test_list:!1,dotsStyles:{backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",color:"#fff",selectedBackgroundColor:"rgba(0, 0, 0, .9)",selectedBorder:"1px rgba(0, 0, 0, .9) solid"},videoContext:"",videoShow:!1,gesture:!1,hasMusic:!1,audioContext:"",music:{playState:"play",startTime:0,loop:!1,autoplay:!1,buffered:0,duration:0,currentTime:0,sliderVal:0}}},onLoad:function(e){var t=this;t.courseId=e.id,t.$store.dispatch("cheack_user"),t.__token=t.$store.state.user.token?t.$store.state.user.token:""},onShow:function(){console.log("onShow")},onReady:function(e){console.log("onReady");var t=this,i=t.audioContext;i&&i.destroy(),t.cheackTestLng(),t.pageInit()},onPullDownRefresh:function(){var e=this;e.pageInit()},onHide:function(){console.log("onHide");var e=this;e.musicDestroy()},onUnload:function(){console.log("onUnload");var e=this;e.musicDestroy()},components:{fixButton:s.default,uniSegmentedControl:r.default,uniSwiperDot:c.default},computed:{swiperleng:function(){return this.swiperList.length}},methods:{pageInit:function(){var e=this;e.__token;var t={inter:"course",parm:"?course_id=".concat(e.courseId,"&currentPage=").concat(e.currentPage,"&pagesize=").concat(e.pageSize),header:{token:e.__token},fun:function(t){if(uni.stopPullDownRefresh(),t.success){var i=t.data;e.title=i.name,uni.setNavigationBarTitle({title:i.name}),i["detail"]=i["detail"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),e.data=i,i.percentage&&(e.$store.state.percentage=i.percentage),e.isJoined="1"==i.ucStatus||"2"==i.ucStatus,e.test_list?e.isJoinTxt="1"==i.ucStatus?"学习完成后开启测试":"加入学习":e.isJoinTxt="1"==i.ucStatus?"已加入学习":"加入学习",i.lessonCount==i.lessonStartCount&&"0"!=i.lessonCount&&"0"!=i.lessonStartCount&&(e.canTest=!0);var n=[{name:i.name,original_src:t.data.original_src||"".concat(e.$store.state.interface.apiurl,"/img/logo.png")}];e.showList=n,e.swiperList=n}}};e.$store.dispatch("getData",t);var i={inter:"lessons",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){if(uni.stopPullDownRefresh(),t.success){e.lessions=t.data.list,e.lessTotal=t.data.total;e.lessDefaultActive}}};e.$store.dispatch("getData",i)},getLessDtl:function(e,t){var i=this;if(console.log(e,t),i.segmented=["课程目录","内容"],i.detailType=e,i.current=1,t!=i.lessActive){if(i.musicDestroy(),"content"==e&&-1==t)return i.lessActive=t,i.swiperList=[{original_src:i.data.original_src||"".concat(this.$store.state.interface.apiurl,"/img/logo.png")}],void(i.showList=[{original_src:i.data.original_src||"".concat(this.$store.state.interface.apiurl,"/img/logo.png")}]);var n={inter:"lesson",parm:"?lesson_id=".concat(e),header:{token:i.__token},fun:function(n){i.swiperCurrent=0,i.lessActive=t,i.current=1;var o={inter:"accountLesson",data:{lesson_id:e},method:"POST",header:{"Content-Type":"application/json",token:i.__token},fun:function(e){e.success}};if(i.$store.dispatch("getData",o),n.success){var s=n.data;s["detail"]=s["detail"].replace(/\<img/gi,'<img style="max-width:100%;height:auto" '),i.lessDtl=s;var r=s.images?s.images:[];if(s.src&&s.type){var c={name:s.name,media_type:s.type,media_src:s.src};r.push(c)}if(r){r.map(function(e){return e["name"]=s.name});var l=r.filter(function(e,t){return!e.media_type}),u=r.filter(function(e,t){return e.media_type});l&&u?i.showList=[].concat((0,a.default)(l),(0,a.default)(u)):l&&!u?i.showList=(0,a.default)(l):!l&&u&&(i.showList=(0,a.default)(u)),u&&(i.media=u,i.setVideo()),i.swiperList=r}}}};i.$store.dispatch("getData",n)}},videoPlay:function(e){var t=this,i=t.videoContext;console.log(i),t.videoShow=!0,i.play(),i.requestFullScreen()},videoPause:function(e){console.log("---------videoPause--------"),console.log(e)},videoOperation:function(e){var t=this;if(console.log(e),!e.detail.fullScreen){console.log("fullscreenchange:",e.target.fullScreen);var i=t.videoContext;console.log(i),t.videoShow=!1}},setVideo:function(){var e=this,t=e.media;console.log("setVideo:",t),t.forEach(function(t,i){if(console.log(t.media_type),"video"==t.media_type)e.videoContext=uni.createVideoContext("TrainVideo");else if("music"==t.media_type){e.hasMusic=!0;var n=uni.createInnerAudioContext();e.audioContext=n,n.autoplay=e.music.autoplay,n.src=t.media_src}})},musicSet:function(e){var t=this,i=e;switch(i){case"play":t.musicOnPlay();break;case"pause":t.musicOnPause();break;default:break}},musicOnPlay:function(){var e=this,t=e.audioContext,i=e.music;t.play(),t.onError(function(e){uni.showToast({title:e.errMsg,icon:"none"})}),t.onPlay(function(){i.duration=Math.ceil(t.duration),i.playState="pause",console.log("startTime:",t.startTime)}),t.onTimeUpdate(function(){var n=t.currentTime,a=i.duration;if(a<=0){var s=Math.ceil(t.duration);e.music.duration=s,a=s}var r=0;r=(0,o.default)(n),r>=a&&(r=a),e.music.sliderVal=r}),t.onEnded(function(){i.playState="play",e.music.sliderVal=0})},musicOnPause:function(){var e=this,t=e.audioContext,i=e.music;t.pause(),t.onPause(function(){i.playState="play"}),t.offTimeUpdate()},musicOnStop:function(){var e=this,t=e.audioContext,i=e.music;t.stop(),t.onStop(function(){i.playState="play"}),t.offTimeUpdate()},musicDestroy:function(){var e=this,t=e.music;t.playState="play",t.sliderVal=0,t.duration=0,e.hasMusic=!1;var i=e.audioContext;i&&i.destroy()},sliderChanging:function(e){var t=this;t.musicOnPause()},sliderChange:function(e){var t=this,i=e.detail.value,n=t.audioContext;t.music.sliderVal=i,n.seek(i),t.musicOnPlay()},onClicksegmented:function(e){this.current!==e&&(this.current=e)},goback:function(){var e=this;1===e.current?e.current=0:e.$store.dispatch("goback")},previewImage:function(){var e=this,t=e.swiperCurrent,i=e.swiperList,n=i.filter(function(e){return!e.media_type}),o=n.map(function(e){return e.original_src}),a={urls:o,indicator:"number",current:t};console.log(a),uni.previewImage(a)},videoErrorCallback:function(e){uni.showModal({content:e.target.errMsg,showCancel:!1})},swiperChange:function(e){var t=this;t.swiperCurrent=e.detail.current},joinlearning:function(e){var t=this;if(!t.isJoined){var i={inter:"accountCourse",data:{course_id:e},method:"POST",header:{"Content-Type":"application/json",token:t.__token},fun:function(e){e.success&&(t.isJoined=!0,t.isJoinTxt="学习完成后开启测试")}};t.$store.dispatch("getData",i)}},to_test:function(e){var t=this;t.canTest?t.test_list?uni.navigateTo({url:"/pages/train/test?course_id=".concat(e)}):uni.showModal({content:"该课程暂无试题库！",showCancel:!1}):uni.showModal({content:"学习完成当前课程方可测试！",showCancel:!1})},cheackTestLng:function(){var e=this,t={inter:"tests",parm:"?course_id=".concat(e.courseId),header:{token:e.__token},fun:function(t){t.success&&(e.test_list=t.data.list)}};e.$store.dispatch("getData",t)}}};t.default=l},4482:function(e,t,i){"use strict";var n=i("9be1"),o=i.n(n);o.a},5082:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[e._t("default"),"default"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:e.dots.width+"px",height:e.dots.height+"px","background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:n!==e.current?e.dots.border:e.dots.selectedBorder}})}),1):e._e(),"long"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===e.current&&"uni-swiper__dots-long"],style:{width:(n===e.current?3*e.dots.width:e.dots.width)+"px",height:e.dots.height+"px","background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:n!==e.current?e.dots.border:e.dots.selectedBorder}})}),1):e._e(),"nav"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",class:["uni-swiper__dots-box-"+e.showPos],style:{"background-color":e.dotsStyles.backgroundColor}},[i("v-uni-view",{staticClass:"uni-swiper__dots-nav-item",style:{color:e.dotsStyles.color}},[e._v(e._s(e.current+1+"/"+e.info.length)+"\n\t\t\t\t"+e._s(e.info[e.current][e.field]))])],1):e._e(),"indexes"===e.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:e.dots.bottom+"px"}},e._l(e.info,function(t,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:e.dots.width+"px",height:e.dots.height+"px",color:n===e.current?e.dots.selectedColor:e.dots.color,"background-color":n!==e.current?e.dots.backgroundColor:e.dots.selectedBackgroundColor,border:n!==e.current?e.dots.border:e.dots.selectedBorder}},[e._v(e._s(n+1))])}),1):e._e()],2)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},5473:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"page-main unit-list"},[i("v-uni-view",{staticClass:"swiper-main"},[i("v-uni-swiper",{staticClass:"swiper-box swiper-slide-unit",attrs:{"indicator-dots":e.swiperleng?"true":"false",circular:"circular",interval:"interval",duration:"duration","indicator-color":"#E0E0E0","indicator-active-color":"#008CEE",current:e.swiperCurrent},on:{change:function(t){t=e.$handleEvent(t),e.swiperChange(t)}}},e._l(e.showList,function(t,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"swiper-item train-swiper-main"},[t.media_type?e._e():i("v-uni-image",{staticClass:"slideImg",attrs:{"lazy-load":"true",src:t.original_src,mode:"aspectFill"},on:{click:function(t){t=e.$handleEvent(t),e.previewImage(t)}}}),"video"==t.media_type?i("v-uni-view",{staticClass:"video-block"},[i("v-uni-image",{staticClass:"slideImg virtual",attrs:{"lazy-load":"true",src:"/static/default.png",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"video-btn"},[i("uni-icons",{attrs:{type:"bofang1",size:"80",color:"#666"},on:{click:function(t){t=e.$handleEvent(t),e.videoPlay(t)}}})],1),"video"==t.media_type?i("v-uni-video",{directives:[{name:"show",rawName:"v-show",value:e.videoShow,expression:"videoShow"}],staticClass:"train-video",attrs:{id:"TrainVideo",src:t.media_src,controls:"","enable-progress-gesture":e.gesture},on:{error:function(t){t=e.$handleEvent(t),e.videoErrorCallback(t)},pause:function(t){t=e.$handleEvent(t),e.videoPause(t)},fullscreenchange:function(t){t=e.$handleEvent(t),e.videoOperation(t)}}}):e._e()],1):e._e(),"music"==t.media_type?i("v-uni-view",{staticClass:"media-music"},[i("v-uni-view",{staticClass:"music-icon"},["play"==e.music.playState?i("uni-icons",{attrs:{type:"bofang",size:"32",color:"#666"},on:{click:function(t){t=e.$handleEvent(t),e.musicSet("play")}}}):e._e(),"pause"==e.music.playState?i("uni-icons",{attrs:{type:"suspend_icon",size:"32",color:"#666"},on:{click:function(t){t=e.$handleEvent(t),e.musicSet("pause")}}}):e._e()],1),i("v-uni-view",{staticClass:"music-play"},[i("v-uni-view",{staticClass:"music-info"},[i("v-uni-view",{staticClass:"music-title"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"music-duration"},[e._v("时长"+e._s(e.music.duration?e.music.duration+"秒":""))])],1),i("v-uni-view",{staticClass:"music-progress"},[i("v-uni-slider",{attrs:{value:e.music.sliderVal,"show-value":"",min:"0",max:e.music.duration},on:{changing:function(t){t=e.$handleEvent(t),e.sliderChanging(t)},change:function(t){t=e.$handleEvent(t),e.sliderChange(t)}}})],1)],1)],1):e._e()],1)],1)}),1)],1),e.hasMusic?i("v-uni-view",{staticClass:"music-loading",class:"pause"===e.music.playState?"rotating":"",on:{click:function(t){t=e.$handleEvent(t),e.musicSet(e.music.playState)}}},[i("uni-icons",{attrs:{type:"music",size:"40",color:"#006FFF"}})],1):e._e(),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt segmented-box"},[i("uni-segmented-control",{attrs:{current:e.current,values:e.segmented,styleType:"text",activeColor:"#008CEE"},on:{clickItem:function(t){t=e.$handleEvent(t),e.onClicksegmented(t)}}})],1),i("v-uni-view",{staticClass:"unit-content"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.current,expression:"current === 0"}]},[i("v-uni-view",{staticClass:"course-lessions"},[i("v-uni-view",{staticClass:"course-inner"},[e._l(e.lessions,function(t,n){return[i("v-uni-view",{key:n+"_0",staticClass:"less-row",class:[n==e.lessActive?"less-active":""],on:{click:function(i){i=e.$handleEvent(i),e.getLessDtl(t.id,n)}}},[e._v(e._s(n+1)+"."+e._s(t.name))])]})],2)],1)],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.current,expression:"current === 1"}]},[i("v-uni-view",{staticClass:"course-detail-box"},[i("v-uni-view",{staticClass:"course-inner"},["content"===e.detailType?[i("v-uni-view",{staticClass:"course-title"},[e._v(e._s(e.data.name))]),i("v-uni-view",{staticClass:"course-more list-more"},[i("v-uni-view",[e._v("共"+e._s(e.lessTotal)+"门课程")])],1),i("v-uni-rich-text",{staticClass:"course-detail",attrs:{nodes:e.data.detail}})]:[e.__token?[i("v-uni-rich-text",{staticClass:"course-detail",attrs:{nodes:e.lessDtl.detail}})]:[i("login-tip")]]],2)],1)],1)],1),e.__token?[i("fix-button",{attrs:{gobackShow:"hide"}},[i("v-uni-view",{staticClass:"fbtns btn-goback",on:{click:function(t){t=e.$handleEvent(t),e.goback(t)}}},[e._v("返回")]),e.canTest&&e.test_list?e._e():i("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:e.isJoined?"is-joined":"",on:{click:function(t){t=e.$handleEvent(t),e.joinlearning(e.courseId)}}},[e._v(e._s(e.isJoinTxt))]),e.canTest&&e.test_list?i("v-uni-view",{staticClass:"fbtns fbtns-clr-full btn-totest",class:e.canTest&&e.test_list?"":"fbtn-disable",on:{click:function(t){t=e.$handleEvent(t),e.to_test(e.courseId)}}},[e._v("开始测试")]):e._e()],1)]:[i("tab-bar")]],2)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},"6b1d":function(e,t,i){"use strict";i.r(t);var n=i("c976"),o=i("23e5");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"88554764",null);t["default"]=r.exports},"6b80":function(e,t,i){"use strict";var n=i("df26"),o=i.n(n);o.a},"75fc":function(e,t,i){"use strict";i.r(t);var n=i("a745"),o=i.n(n);function a(e){if(o()(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}var s=i("774e"),r=i.n(s),c=i("c8bb"),l=i.n(c);function u(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r()(e)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(e){return a(e)||u(e)||d()}i.d(t,"default",function(){return f})},8650:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".swiper-main[data-v-5f31afe6]{position:relative}.photo-album[data-v-5f31afe6]{position:absolute;right:%?20?%;top:%?80?%;z-index:3;padding:%?20?%}.swiper-slide-unit[data-v-5f31afe6]{height:%?422?%}.segmented-box[data-v-5f31afe6]{border-bottom:%?2?% solid #d1d1d1}.unit-content[data-v-5f31afe6]{padding-bottom:%?30?%}.course-inner[data-v-5f31afe6]{padding:%?30?%}.is-joined[data-v-5f31afe6]{background:#929292;color:#fff;border-color:#929292}.course-detail-box[data-v-5f31afe6]{border-bottom:%?20?% solid #f4f4f4}.course-detail-box[data-v-5f31afe6]:last-child{border-bottom:none}.less-active[data-v-5f31afe6]{color:#008cee}.train-swiper-main[data-v-5f31afe6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.video-block[data-v-5f31afe6]{width:100%;height:100%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center}.video-btn[data-v-5f31afe6]{position:absolute}.virtual[data-v-5f31afe6]{opacity:.3}.media-music[data-v-5f31afe6]{background:#fcfcfc;border:1px solid #e0e0e0;color:#333;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;width:80%;border-radius:%?10?%}.music-icon[data-v-5f31afe6]{border-right:1px solid #e0e0e0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:%?10?%;height:100%;width:%?100?%}.music-play[data-v-5f31afe6]{padding:%?10?% %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.music-info[data-v-5f31afe6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.music-loading[data-v-5f31afe6]{position:fixed;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?90?%;height:%?90?%;top:8%;right:5%;opacity:.9;z-index:5;border-radius:50%}.rotating[data-v-5f31afe6]{-webkit-animation:rotate-data-v-5f31afe6 5s linear infinite;animation:rotate-data-v-5f31afe6 5s linear infinite}@-webkit-keyframes rotate-data-v-5f31afe6{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-data-v-5f31afe6{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},"9be1":function(e,t,i){var n=i("b516");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("06be9307",n,!0,{sourceMap:!1,shadowMode:!1})},ad75:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".uni-swiper__warp[data-v-ea7a46ee]{position:relative;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.uni-swiper__dots-box[data-v-ea7a46ee]{position:absolute;bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:box-sizing;box-sizing:box-sizing;width:100%}.uni-swiper__dots-box-top[data-v-ea7a46ee]{bottom:auto;top:0}.uni-swiper__dots-item[data-v-ea7a46ee]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?16?%;border-radius:50%;margin-left:%?12?%;background:rgba(0,0,0,.3);-webkit-transition:all .2s linear;-o-transition:all .2s linear;transition:all .2s linear}.uni-swiper__dots-item[data-v-ea7a46ee]:first-child{margin:0}.uni-swiper__dots-default[data-v-ea7a46ee]{border-radius:50%}.uni-swiper__dots-long[data-v-ea7a46ee]{border-radius:%?100?%}.uni-swiper__dots-nav[data-v-ea7a46ee]{bottom:0;height:%?80?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:rgba(0,0,0,.2);-webkit-box-sizing:box-sizing;box-sizing:box-sizing;overflow:hidden}.uni-swiper__dots-nav-item[data-v-ea7a46ee]{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;color:#fff;-webkit-box-sizing:box-sizing;box-sizing:box-sizing;margin:0 %?30?%}.uni-swiper__dots-box-top .uni-swiper__dots-nav-item[data-v-ea7a46ee]{text-align:right}.uni-swiper__dots-indexes[data-v-ea7a46ee]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:%?24?%}",""])},b0ae:function(e,t,i){"use strict";i.r(t);var n=i("3d11"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},b516:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".segmented-control[data-v-0ef29eeb]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:75%;font-size:%?32?%;border-radius:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 auto;overflow:hidden}.segmented-control.button[data-v-0ef29eeb]{border:%?2?% solid}.segmented-control.text[data-v-0ef29eeb]{border:0;border-radius:%?0?%}.segmented-control-item[data-v-0ef29eeb]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;line-height:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box}.segmented-control-item.button[data-v-0ef29eeb]{border-left:%?1?% solid}.segmented-control-item.text[data-v-0ef29eeb]{border-left:0}.segmented-control-item[data-v-0ef29eeb]:first-child{border-left-width:0}",""])},c172:function(e,t,i){"use strict";var n=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(i("5176"));i("c5f6");var a={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""},showPos:{type:String,default:"default"}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(e){this.dots=(0,o.default)(this.dots,this.dotsStyles)},mode:function(e){"indexes"===e?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=(0,o.default)(this.dots,this.dotsStyles)}};t.default=a},c56a:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"segmented-control",class:e.styleType,style:e.wrapStyle},e._l(e.values,function(t,n){return i("v-uni-view",{key:n,staticClass:"segmented-control-item",class:e.styleType,style:n===e.currentIndex?e.activeStyle:e.itemStyle,on:{click:function(t){t=e.$handleEvent(t),e.onClick(n)}}},[e._v(e._s(t))])}),1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},c5b9:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("c5f6");var n={name:"segmented-control",props:{current:{type:Number,default:0},values:{type:Array,default:function(){return[]}},activeColor:{type:String,default:"#007aff"},styleType:{type:String,default:"button"}},data:function(){return{currentIndex:this.current}},watch:{current:function(e){e!==this.currentIndex&&(this.currentIndex=e)}},computed:{wrapStyle:function(){var e="";switch(this.styleType){case"text":e="border:0;";break;default:e="border-color: ".concat(this.activeColor);break}return e},itemStyle:function(){var e="";switch(this.styleType){case"text":e="color:#000;border-left:0;";break;default:e="color:".concat(this.activeColor,";border-color:").concat(this.activeColor,";");break}return e},activeStyle:function(){var e="";switch(this.styleType){case"text":e="color:".concat(this.activeColor,";border-left:0;border-bottom-style:solid;");break;default:e="color:#fff;border-color:".concat(this.activeColor,";background-color:").concat(this.activeColor);break}return e}},methods:{onClick:function(e){this.currentIndex!==e&&(this.currentIndex=e,this.$emit("clickItem",e))}}};t.default=n},c7e1:function(e,t,i){"use strict";i.r(t);var n=i("c172"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},c976:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"fix-button",style:"position:"+e.isFixed},[i("v-uni-view",{staticClass:"fbtn-main"},["show"==e.gobackShow?i("v-uni-view",{staticClass:"fbtns btn-goback",class:e.btnType,on:{click:function(t){t=e.$handleEvent(t),e.$store.dispatch("goback")}}},[e._v("返回")]):e._e(),e._t("default")],2)],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},d828:function(e,t,i){"use strict";i.r(t);var n=i("5082"),o=i("c7e1");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("6b80");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"ea7a46ee",null);t["default"]=r.exports},df26:function(e,t,i){var n=i("ad75");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("9f86188e",n,!0,{sourceMap:!1,shadowMode:!1})},e7e8:function(e,t,i){"use strict";i.r(t);var n=i("c5b9"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},ee31:function(e,t,i){var n=i("8650");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("306bfb83",n,!0,{sourceMap:!1,shadowMode:!1})}}]);