(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-register"],{"18b7":function(e,t,n){"use strict";var r=n("62a2"),i=n.n(r);i.a},"53b6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("a903"),i={data:function(){return{regType:"",loading:!1,current:0,getCodeTxt:"获取验证码",seconds:60,btnLoading:"",checkCode:"",formData:{phone:"",code:"",name:"",password:"",cfn_password:""}}},onLoad:function(e){var t=this,n=e.type;t.regType=n||"register",uni.setNavigationBarTitle({title:"register"===t.regType?"个人注册":"寻回密码"})},onShow:function(){},computed:{},components:{},methods:{formSubmit:function(e){var t=this;if(1!=t.loading){var n=t.formData;t.loading=!0,console.log(n);var i=[{name:"password",checkType:"notnull",checkRule:"",errorMsg:"密码不能为空"},{name:"cfn_password",checkType:"same",checkRule:n.password,errorMsg:"密码不一致，请确认"}],a=r.check(n,i);if(a){var o={inter:"register",data:n,method:"POST",fun:function(e){if(console.log(e),t.loading=!1,e.success){var n="forgetpw"===t.regType?"修改成功，请登录":"注册成功";uni.showToast({title:n,icon:"none",duration:1500}),setTimeout(function(){uni.redirectTo({url:"/pages/user/login?type=user"})},1500)}else uni.showToast({title:e.msg,icon:"none"})}};"forgetpw"===t.regType&&(o["inter"]="reset",o["method"]="PUT"),t.$store.dispatch("getData",o)}else uni.showToast({title:r.error,icon:"none"}),t.loading=!1}},toRegister:function(){var e=this;"company"==e.UserType||uni.navigateTo({url:"/pages/user/register"})},regNext:function(e){var t=this,n=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"},{name:"code",checkType:"notnull",checkRule:"",errorMsg:"验证码不能为空"}];if("register"===t.regType){var i={name:"name",checkType:"notnull",checkRule:"",errorMsg:"请输入真实姓名"};n.push(i)}var a=t.formData,o=r.check(a,n);o?t.current=e:(uni.showToast({title:r.error,icon:"none"}),t.loading=!1)},getCode:function(){var e=this;if(!e.btnLoading){var t=[{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"请填写正确的手机号"}],n=e.formData,i=r.check(n,t);if(i){uni.showToast({title:"验证码已发送",icon:"none"}),e.btnLoading="btn-loading";var a=setInterval(function(){if(e.seconds--,e.seconds<0)return e.getCodeTxt="获取验证码",e.seconds=60,e.btnLoading="",void clearInterval(a);e.getCodeTxt="".concat(e.seconds," 秒后重试")},1e3),o="sendRegistSms";"forgetpw"===e.regType&&(o="sendSms");var s={inter:o,parm:"?phone=".concat(n.phone),fun:function(t){t.success||(uni.showToast({title:t.msg,icon:"none"}),e.getCodeTxt="获取验证码",e.seconds=60,e.btnLoading="",clearInterval(a))}};e.$store.dispatch("getData",s)}else uni.showToast({title:r.error,icon:"none"})}},setData:function(e){var t=this;t.formData["".concat(e.currentTarget.dataset.key)]=e.detail.value}}};t.default=i},"62a2":function(e,t,n){var r=n("8f38");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("68da321a",r,!0,{sourceMap:!1,shadowMode:!1})},"72fe":function(e,t,n){"use strict";n.r(t);var r=n("53b6"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=i.a},"8f38":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'.train-input[data-v-1578f312]{background:#f4f4f4;border-radius:%?5?%;border:1px solid #e0e0e0}.get-code-left[data-v-1578f312]{width:60%}.get-code[data-v-1578f312]{-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background:#008cee;border-radius:%?5?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:38%}.user-login-more[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#008cee;font-size:%?32?%}.user-center[data-v-1578f312]{width:auto;padding:%?20?% 3.6%}.user-center-full[data-v-1578f312]{width:100%;padding:0}.user-block[data-v-1578f312]{padding-bottom:%?40?%}.border-block[data-v-1578f312]{padding:%?30?% %?20?%;border-bottom:%?20?% solid #f4f4f4}.border-block[data-v-1578f312]:last-child{border-bottom:0}\r\n\r\n/* \r\n.user-head {\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-items: flex-start;\r\n\talign-content: center;\r\n\tflex-direction: row;\r\n\tpadding-bottom: 20upx;\r\n}\r\n\r\n.portrait {\r\n\twidth: 125upx;\r\n\theight: 125upx;\r\n\tborder-radius: 50%;\r\n\toverflow: hidden;\r\n}\r\n\r\n.user-portrait {\r\n\twidth: 100%;\r\n\theight: 100%\r\n}\r\n\r\n.user-infos {\r\n\tflex: 1 1 0%;\r\n\tpadding: 0 20upx;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n}\r\n\r\n.user-name {\r\n\tline-height: 2;\r\n\twidth: 100%;\r\n}\r\n\r\n.logout {\r\n\tfont-weight: 200;\r\n\tpadding: 0 10upx;\r\n\tfont-size: 26upx;\r\n}\r\n\r\n.user-more {\r\n\tborder: 2upx solid #929292;\r\n\tborder-radius: 30upx;\r\n\tcolor: #929292;\r\n\tpadding: 0 20upx;\r\n\tmargin-right: 20upx;\r\n}\r\n\r\n.job {\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n.user-edit {\r\n\twidth: 60upx;\r\n\tdisplay: flex;\r\n\tjustify-content: flex-start;\r\n\talign-content: flex-start;\r\n\talign-items: flex-start;\r\n\tflex-direction: column-reverse;\r\n\theight: 100%;\r\n}\r\n\r\n.user-class-info {\r\n\tborder: 2upx solid #E0E0E0;\r\n\tborder-radius: 8upx;\r\n\tbox-shadow: 0 0 10upx 3upx #E0E0E0;\r\n}\r\n\r\n.user-my-class {\r\n\tpadding: 20upx 0;\r\n\tdisplay: flex;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n.my-class-block {\r\n\theight: 150upx;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-direction: column;\r\n\talign-content: center;\r\n\talign-items: center;\r\n\twidth: 33%;\r\n\tborder-right: 2upx solid #E0E0E0;\r\n}\r\n\r\n.my-class-block:last-child {\r\n\tborder-right: none;\r\n}\r\n\r\n.class-overview {\r\n\tfont-size: 24upx;\r\n}\r\n\r\n.class-count {\r\n\tfont-size: 52upx;\r\n\tcolor: #008CEE;\r\n}\r\n\r\n.class-state-green {\r\n\tcolor: #3BC1B0;\r\n}\r\n\r\n.class-state-red {\r\n\tcolor: #EE6858;\r\n}\r\n */.my-class-head[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:0 0 %?20?% 0}.class-tip[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.class-icon[data-v-1578f312]{background:-webkit-gradient(linear,left top,left bottom,from(#48afbe),to(#58d3be));background:-o-linear-gradient(#48afbe,#58d3be);background:linear-gradient(#48afbe,#58d3be);width:%?50?%;height:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden;margin-right:%?10?%}.class-icon-qy[data-v-1578f312]{background:-webkit-gradient(linear,left top,left bottom,from(#66d3f4),to(#4697e9));background:-o-linear-gradient(#66d3f4,#4697e9);background:linear-gradient(#66d3f4,#4697e9)}.class-more[data-v-1578f312]{font-size:%?28?%;color:#929292}.class-list-row[data-v-1578f312]{border-bottom:none}.class-list-left[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;height:%?134?%}.class-progress[data-v-1578f312]{width:95%}.progress-box[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:%?50?%}.percent[data-v-1578f312]{text-align:right}\r\n\r\n/*resume*/.resume-head[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-bottom:%?15?%}.block-title[data-v-1578f312]{font-weight:600;font-size:%?34?%}.block-edit[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:%?26?%;color:#929292;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.edit-name[data-v-1578f312]{padding-right:%?10?%}.basic-row[data-v-1578f312]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:%?10?%}.basic-block[data-v-1578f312]{width:50%}.basic-title[data-v-1578f312]{font-size:%?26?%;color:#929292}.basic-val[data-v-1578f312]{font-size:%?32?%;color:#222}.work-row[data-v-1578f312]{padding-bottom:%?15?%;border-bottom:%?2?% solid #e0e0e0;margin-bottom:%?15?%}.work-row[data-v-1578f312]:last-child{border-bottom:none;margin-bottom:0}.work-title[data-v-1578f312]{color:#008cee;font-size:%?32?%;padding-bottom:%?10?%;padding-left:%?40?%;position:relative}.work-title[data-v-1578f312]:before{content:"";width:%?18?%;height:%?18?%;border:1px solid #e0e0e0;border-radius:50%;position:absolute;top:25%;left:0}.work-val[data-v-1578f312]{color:#008cee;font-size:%?32?%;padding-left:%?40?%}.work-overview[data-v-1578f312]{padding-left:%?40?%}.work-ov-li[data-v-1578f312]{font-size:%?26?%;color:#22222;line-height:1.4;padding-bottom:%?5?%}.work-edit[data-v-1578f312]{padding:%?20?% 0 0 %?40?%}.self-des[data-v-1578f312]{line-height:1.4;color:#222;font-size:%?26?%}',""])},a903:function(e,t,n){"use strict";n("c5f6"),n("28a5"),n("3b2b"),n("7f7f"),e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var r=new RegExp("^.{"+t[n].checkRule+"}$");if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":r=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var i=t[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[n].name]>i[1]||e[t[n].name]<i[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":r=/^-?[1-9][0-9]?$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;i=t[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[n].name]>i[1]||e[t[n].name]<i[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":r=/^-?[0-9][0-9]?.+[0-9]+$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;i=t[n].checkRule.split(",");if(i[0]=Number(i[0]),i[1]=Number(i[1]),e[t[n].name]>i[1]||e[t[n].name]<i[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":r=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":r=/^1[0-9]{10,10}$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":r=/^[0-9]{6}$/;if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":r=new RegExp(t[n].checkRule);if(!r.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(e)}}},cac7:function(e,t,n){"use strict";n.r(t);var r=n("dbce"),i=n("72fe");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("18b7");var o=n("2877"),s=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,"1578f312",null);t["default"]=s.exports},dbce:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login-box pages"},[n("v-uni-view",{staticClass:"page-main"},[n("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.current,expression:"current === 0"}]},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"phone","data-key":"phone",placeholder:"请输入手机号"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item flex-between uni-row"},[n("v-uni-view",{staticClass:"input-block get-code-left"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"code","data-key":"code",placeholder:"验证码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"get-code",class:e.btnLoading,on:{click:function(t){t=e.$handleEvent(t),e.getCode(t)}}},[e._v(e._s(e.getCodeTxt))])],1),"register"===e.regType?n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{name:"name","data-key":"name",placeholder:"请输入真实姓名"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1):e._e(),n("v-uni-view",{staticClass:"uni-btn-block"},[n("v-uni-view",{staticClass:"btns btns-full btns-big",on:{click:function(t){t=e.$handleEvent(t),e.regNext(1)}}},[e._v("下一步")])],1)],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.current,expression:"current === 1"}]},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"password","data-key":"password",placeholder:"输入密码"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-input",{staticClass:"uni-input train-input",attrs:{password:"",name:"cfn_password","data-key":"cfn_password",placeholder:"再次确认"},on:{input:function(t){t=e.$handleEvent(t),e.setData(t)}}})],1),n("v-uni-view",{staticClass:"uni-btn-block"},[n("v-uni-view",{staticClass:"btns btn-back",on:{click:function(t){t=e.$handleEvent(t),e.regNext(0)}}},[e._v("返回")]),n("v-uni-view",{staticClass:"btns btns-full",on:{click:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[e._v("确认提交")])],1)],1)],1)],1),n("loading")],1)},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})}}]);