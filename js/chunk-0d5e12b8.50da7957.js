(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d5e12b8"],{"02d0":function(t,e,n){t.exports=n.p+"img/lp-lptoken.1aeae3f9.png"},1114:function(t,e,n){},"2c90":function(t,e,n){},"6c65":function(t,e,n){t.exports=n.p+"img/lp-adao.16c834bc.png"},"6d9b":function(t,e,n){"use strict";n("e28b")},"9d5d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("nav-bar",{attrs:{title:t.title},on:{"click-left":t.onClickLeft},scopedSlots:t._u([{key:"left",fn:function(){return[n("icon",{staticStyle:{width:"20rpx",height:"34rpx",color:"#ffffff"},attrs:{name:"arrow-left",color:"#ffffff",size:"34rpx"}})]},proxy:!0}])})],1)},a=[],s=(n("b342"),n("ad06")),r=(n("3cd0"),n("1a44"),n("acc2"),n("1114"),n("d282")),c=n("b1d2"),o=Object(r["a"])("nav-bar"),l=o[0],f=o[1],u=l({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(s["a"],{class:f("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:f("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:f("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[f({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[c["a"]]=this.border,t)]},[e("div",{class:f("content")},[this.hasLeft()&&e("div",{class:f("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[f("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:f("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:f("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}}),d={name:"nav",components:{NavBar:u,Icon:s["a"]},methods:{onClickLeft:function(){this.$router.back()}},props:{title:{type:String,default:""}}},h=d,g=(n("cb96"),n("2877")),p=Object(g["a"])(h,i,a,!1,null,"513ff28e",null);e["a"]=p.exports},abf7:function(t,e,n){t.exports=n.p+"img/lp-banner.a1714332.png"},b1d2:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var i="van-hairline",a=i+"--bottom",s=i+"--top-bottom"},bd09:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"my-pc":"pc"===t.$store.state.pc,"my-mobile":"mobile"===t.$store.state.pc}},[i("notify",{ref:"notify"}),"pc"===t.$store.state.pc?i("div",{staticClass:"flex flex-direction align-center lp-pool"},[i("img",{staticClass:"banner",attrs:{src:n("abf7")}}),i("div",{staticClass:"banner-info flex flex-direction "},[i("div",[t._v(t._s(t.$t("ADAO矿池")))]),i("div",[t._v(t._s(t.$t("注意：我们现在仅支持XXX,请勿转让XXXX主网代币")))])]),i("div",{staticClass:"items flex align-center"},[i("div",{staticClass:"inner flex flex-direction align-center"},[i("img",{staticClass:"icon",attrs:{src:n("6c65")}}),i("div",{staticClass:"title"},[t._v(t._s(t.$t("ADAO收益")))]),i("div",{staticClass:"amount"},[t._v(t._s(t._f("toFixed")(t.income)))]),i("div",{staticClass:"btn flex align-center"},[i("x-button",{on:{click:function(e){return t.$router.push("/lp-withdraw")}}},[t._v(t._s(t.$t("提取")))]),i("x-button",{on:{click:function(e){return t.$router.push("/v3-pool")}}},[t._v(t._s(t.$t("存入")))])],1),i("div",{staticClass:"btn2 flex align-center"},[i("x-button",{attrs:{disable:t.exchangeBtn.disable||t.exchangeBtn.loading,loading:t.exchangeBtn.loading},on:{click:t.claimed}},[t._v(t._s(t.$t("领取收益"))+" ")])],1)]),i("div",{staticClass:"inner flex flex-direction align-center"},[i("img",{staticClass:"icon",attrs:{src:n("02d0")}}),i("div",{staticClass:"title"},[t._v(t._s(t.$t("ADAO/DAI LP 挖矿")))]),i("div",{staticClass:"amount"},[t._v(t._s(t._f("toFixed")(t.lpBalance)))]),i("div",{staticClass:"btn flex align-center"},[i("x-button",{on:{click:t.goUniSwap}},[t._v(t._s(t.$t("添加流动性")))])],1)])])]):t._e(),"mobile"===t.$store.state.pc?i("div",{staticClass:"flex flex-direction align-center lp-pool"},[i("nav-bar",{attrs:{title:t.$t("ADAO矿池")}}),i("img",{staticClass:"banner",attrs:{src:n("dbbe")}}),i("div",{staticClass:"banner-info flex flex-direction "},[i("div",[t._v(t._s(t.$t("ADAO矿池")))]),i("div",[t._v(t._s(t.$t("注意：我们现在仅支持XXX,请勿转让XXXX主网代币")))])]),i("div",{staticClass:"items flex align-center flex-direction"},[i("div",{staticClass:"inner flex flex-direction align-center"},[i("img",{staticClass:"icon",attrs:{src:n("6c65")}}),i("div",{staticClass:"title"},[t._v(t._s(t.$t("ADAO收益")))]),i("div",{staticClass:"amount"},[t._v(t._s(t._f("toFixed")(t.income)))]),i("div",{staticClass:"btn flex align-center"},[i("x-button",{on:{click:function(e){return t.$router.push("/lp-withdraw")}}},[t._v(t._s(t.$t("提取")))]),i("x-button",{on:{click:function(e){return t.$router.push("/v3-pool")}}},[t._v(t._s(t.$t("存入")))])],1),i("div",{staticClass:"btn2 flex align-center"},[i("x-button",{attrs:{disable:t.exchangeBtn.disable||t.exchangeBtn.loading,loading:t.exchangeBtn.loading},on:{click:t.claimed}},[t._v(t._s(t.$t("领取收益"))+" ")])],1)]),i("div",{staticClass:"inner flex flex-direction align-center"},[i("img",{staticClass:"icon",attrs:{src:n("02d0")}}),i("div",{staticClass:"title"},[t._v(t._s(t.$t("ADAO/DAI LP 挖矿")))]),i("div",{staticClass:"amount"},[t._v(t._s(t._f("toFixed")(t.lpBalance)))]),i("div",{staticClass:"btn2 flex align-center"},[i("x-button",{on:{click:t.goUniSwap}},[t._v(t._s(t.$t("添加流动性")))])],1)])])],1):t._e()],1)},a=[],s=(n("96cf"),n("1da1")),r=n("ade3"),c=n("cef1"),o=n("5571"),l=n("901e"),f=n.n(l),u=n("b856"),d=n("9d5d"),h={name:"index.vue",components:{XButton:c["a"],notify:u["a"],"nav-bar":d["a"]},data:function(){return{lpBalance:"0",income:"0",exchangeBtn:{loading:!1,disable:!0}}},watch:Object(r["a"])({},"$store.state.walletAddress",(function(){this.init()})),methods:{init:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(Object.assign(t.$data,t.$options.data()),!t.$store.state.walletConnect){e.next=16;break}return e.next=5,t.$apiManagerIns.getUserApi();case 5:return e.next=7,e.sent.getBalance(t.$store.state.walletAddress,o["a"].currentConfig().config.pair);case 7:return t.lpBalance=e.sent.amount,e.t0=t.$utils,e.next=11,t.$apiManagerIns.getUserApi();case 11:return e.next=13,e.sent.miningAAAIncome(t.$store.state.walletAddress);case 13:e.t1=e.sent,t.income=e.t0.convertBigNumber.call(e.t0,e.t1,1e18),new f.a(t.income).comparedTo("0")>0&&(t.exchangeBtn.disable=!1);case 16:case"end":return e.stop()}}),e)})))()},goUniSwap:function(){window.location.href=o["a"].currentConfig().config.swap},claimed:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.exchangeBtn.loading=!0,e.prev=1,e.next=4,t.$utils.txHandler(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apiManagerIns.getUserApi();case 2:return e.next=4,e.sent.miningAAAClaimed();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),t.$t("领取收益失败"),(function(e){t.$refs.notify.show(e.txId)}));case 4:return t.$toast(t.$t("领取收益成功")),e.next=7,t.init();case 7:return e.prev=7,t.exchangeBtn.loading=!1,e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})))()}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.init();case 2:case"end":return e.stop()}}),e)})))()}},g=h,p=(n("6d9b"),n("2877")),v=Object(p["a"])(g,i,a,!1,null,"009aa4bc",null);e["default"]=v.exports},cb96:function(t,e,n){"use strict";n("2c90")},dbbe:function(t,e,n){t.exports=n.p+"img/lp-banner.a788b520.png"},e28b:function(t,e,n){}}]);