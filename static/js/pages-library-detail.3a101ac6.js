(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-library-detail"],{"1e7c":function(t,e,a){var i=a("e152");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("0a7e281a",i,!0,{sourceMap:!1,shadowMode:!1})},"23e5":function(t,e,a){"use strict";a.r(e);var i=a("d7a8"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},"4afe":function(t,e,a){"use strict";var i=a("1e7c"),n=a.n(i);n.a},"697e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page-main article-detail"},[t.datas.id?[a("v-uni-view",{staticClass:"banner"},[a("v-uni-image",{staticClass:"banner-img",attrs:{src:t.datas.original_src||"/static/default.png",mode:"aspectFit"}})],1),a("v-uni-view",{staticClass:"banner-title-block"},[t._v(t._s(t.datas.name))]),a("v-uni-view",{staticClass:"article-meta"},[a("v-uni-text",{staticClass:"article-time"},[t._v(t._s(t.datas.add_time))]),a("v-uni-text",{staticClass:"article-author"},[t._v(t._s(t.datas.author_name?t.datas.author_name:"管理员"))])],1),a("v-uni-view",{staticClass:"article-content"},[a("v-uni-rich-text",{attrs:{nodes:t.datas.detail}})],1)]:t._e(),a("fix-button",{attrs:{btnType:"fbtn-big"}},[a("v-uni-view",{staticClass:"fbtns collect",class:t.isCollect?"collected":"",on:{click:function(e){e=t.$handleEvent(e),t.collect(t.datas.id)}}},[a("v-uni-view",[a("uni-icon",{attrs:{type:t.isCollect?"shoucang1":"shoucang",size:"25",color:t.isCollect?"#008CEE":"#929292"}}),a("v-uni-view",[t._v("收藏")])],1)],1)],1)],2)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"6b1d":function(t,e,a){"use strict";a.r(e);var i=a("c976"),n=a("23e5");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"88554764",null);e["default"]=r.exports},adfb:function(t,e,a){"use strict";a.r(e);var i=a("d1f3"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},c976:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"fix-button",style:"position:"+t.isFixed},[a("v-uni-view",{staticClass:"fbtn-main"},["show"==t.gobackShow?a("v-uni-view",{staticClass:"fbtns btn-goback",class:t.btnType,on:{click:function(e){e=t.$handleEvent(e),t.$store.dispatch("goback")}}},[t._v("返回")]):t._e(),t._t("default")],2)],1)},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},d1f3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("6b1d"));function n(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{article_id:"",isCollect:!1,datas:[]}},onLoad:function(t){var e=this;e.article_id=t.id},onShow:function(){var t=this;uni.showLoading({title:"加载中..."}),t.$store.dispatch("cheack_user"),t.getDatas()},components:{fixButton:i.default},methods:{getDatas:function(){var t=this,e={inter:"support",parm:"?article_id=".concat(t.article_id),header:{token:t.$store.state.user.token||""},fun:function(e){if(uni.hideLoading(),e.success){var a=e.data;t.datas=a,1===a.favorites?t.isCollect=!0:t.isCollect=!1,uni.setNavigationBarTitle({title:a.name})}}};t.$store.dispatch("getData",e)},collect:function(t){var e=this,a={inter:"favorite",method:"POST",data:{article_id:e.article_id},header:{"Content-Type":"application/json",token:e.$store.state.user.token||""},fun:function(t){if(t.success){var a=e.isCollect?"取消收藏":"已加入收藏";uni.showToast({title:a,icon:"success"}),e.isCollect=!this.isCollect}}};e.$store.dispatch("getData",a)}}};e.default=o},d7a8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"fix-button",props:{btnType:{type:String,default:""},gobackShow:{type:String,default:"show"},isFixed:{type:String,default:"fixed"}},data:function(){return{}},computed:{},methods:{}};e.default=i},dce5:function(t,e,a){"use strict";a.r(e);var i=a("697e"),n=a("adfb");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("4afe");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"68e6f82e",null);e["default"]=r.exports},e152:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".banner[data-v-68e6f82e]{height:%?360?%;overflow:hidden;position:relative;background-color:#ccc}.banner-img[data-v-68e6f82e]{width:100%}.banner-title[data-v-68e6f82e]{max-height:%?84?%;overflow:hidden;position:absolute;left:%?30?%;bottom:%?30?%;width:90%;font-size:%?32?%;font-weight:400;line-height:%?42?%;color:#fff;z-index:11}.banner-title-block[data-v-68e6f82e]{padding:%?30?% 3% %?10?%;font-size:%?44?%;font-weight:500;color:#222}.article-meta[data-v-68e6f82e]{padding:%?20?% %?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:grey}.article-text[data-v-68e6f82e]{font-size:%?26?%;line-height:%?50?%;margin:0 %?20?%}.article-author[data-v-68e6f82e],.article-time[data-v-68e6f82e]{font-size:%?30?%;padding-right:%?20?%}.article-content[data-v-68e6f82e]{padding:0 %?30?%;overflow:hidden;font-size:%?30?%;margin-bottom:%?30?%}",""])}}]);