(function(e){function t(t){for(var n,r,s=t[0],l=t[1],i=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&m.push(c[r][0]),c[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},c={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/test1/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"sandbox"}},[a("HeaderAndDrawer",{scopedSlots:e._u([{key:"body",fn:function(){return[a("v-main",[a("v-container",{attrs:{fluid:""}},[a("v-card",{staticStyle:{"margin-top":"20px"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("router-view")],1)],1)],1)],1)],1)]},proxy:!0}])})],1)},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{clipped:e.primaryDrawer.clipped,floating:e.primaryDrawer.floating,"mini-variant":e.primaryDrawer.mini,permanent:"permanent"===e.primaryDrawer.type,temporary:"temporary"===e.primaryDrawer.type,app:"",overflow:""},model:{value:e.primaryDrawer.model,callback:function(t){e.$set(e.primaryDrawer,"model",t)},expression:"primaryDrawer.model"}},[a("v-list-item",{staticClass:"px-2"},[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),a("v-list-item-title",[e._v("某某先生 您好,")])],1),a("v-divider"),a("v-list",{attrs:{dense:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.link,link:""}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{"clipped-left":e.primaryDrawer.clipped,app:""}},["permanent"!==e.primaryDrawer.type?a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.primaryDrawer.model=!e.primaryDrawer.model}}}):e._e(),a("v-toolbar-title",[e._v("Vuetify")])],1),e._t("body"),a("v-footer",{attrs:{inset:e.footer.inset,app:""}},[a("span",{staticClass:"px-4"},[e._v("© "+e._s((new Date).getFullYear())+" -xxxx 版權所有")])])],2)},s=[],l={data:function(){return{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:null,type:"default (no property)",clipped:!1,floating:!1,mini:!1},footer:{inset:!1},items:[{title:"統計表",icon:"mdi-home-city",link:"/Assemble"},{title:"表格",icon:"mdi-account",link:"/DateGrid"}]}}},i=l,u=a("2877"),d=a("6544"),m=a.n(d),p=a("40dc"),f=a("5bc1"),b=a("ce7e"),v=a("553a"),j=a("132d"),x=a("adda"),h=a("8860"),y=a("da13"),g=a("8270"),k=a("5d23"),w=a("34c3"),F=a("f774"),_=a("2a7f"),A=Object(u["a"])(i,r,s,!1,null,null,null),D=A.exports;m()(A,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VDivider:b["a"],VFooter:v["a"],VIcon:j["a"],VImg:x["a"],VList:h["a"],VListItem:y["a"],VListItemAvatar:g["a"],VListItemContent:k["a"],VListItemIcon:w["a"],VListItemTitle:k["b"],VNavigationDrawer:F["a"],VToolbarTitle:_["a"]});var N={components:{HeaderAndDrawer:D}},T=N,V=a("7496"),B=a("b0af"),O=a("62ad"),C=a("a523"),M=a("f6c4"),$=a("0fd9"),R=Object(u["a"])(T,c,o,!1,null,null,null),z=R.exports;m()(R,{VApp:V["a"],VCard:B["a"],VCol:O["a"],VContainer:C["a"],VMain:M["a"],VRow:$["a"]});var L=a("f309");n["a"].use(L["a"]);var I=new L["a"]({theme:{primary:"#b71c1c",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}),S=a("8c4f"),q=function(){return[{index:1,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:2,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:3,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004 臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:4,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:5,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:6,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:7,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:8,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:9,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"},{index:10,accountType:"現金",accountAbbrev:"張山帳戶",accountAcc:"8735-1278-005-156",accountRepersent:"004臺灣銀行",accountBranch:"0040211高雄加工出口區分行",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"借",FundBalance:"",ModifiedDate:"2021-03-02"}]},P=function(){return[{text:"現金",value:1},{text:"銀存",value:2},{text:"票據",value:3},{text:"其他",value:4}]},E=function(){return[{text:"004臺灣銀行",value:"004"},{text:"822中國信託",value:"822"}]},G={GetAccount:q,GetAccType:P,GetBranchNumber:E},Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-data-table",{attrs:{headers:e.headers,items:e.account,search:e.search,"items-per-page-options":[5,10,15],"footer-props":{showFirstLastPage:!0,firstIcon:"mdi-arrow-collapse-left",lastIcon:"mdi-arrow-collapse-right",prevIcon:"mdi-minus",nextIcon:"mdi-plus","items-per-page-text":"每頁顯示"}},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-container",[a("v-row",[a("v-col",{attrs:{md:"6"}},[a("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-magnify",label:"搜尋","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-col",{attrs:{"offset-md":"5"}},[a("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(t){e.dialog=!0}}},[e._v(" 新增 ")])],1)],1)],1)]},proxy:!0},{key:"item.index",fn:function(t){return[a("v-edit-dialog",{attrs:{"return-value":t.item.index,large:"",persistent:"","save-text":"儲存","cancel-text":"取消"},on:{"update:returnValue":function(a){return e.$set(t.item,"index",a)},"update:return-value":function(a){return e.$set(t.item,"index",a)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 title"},[e._v("Update Iron")]),a("v-text-field",{attrs:{rules:[e.max25chars],label:"Edit","single-line":"",counter:"",autofocus:""},model:{value:t.item.index,callback:function(a){e.$set(t.item,"index",a)},expression:"props.item.index"}})]},proxy:!0}],null,!0)},[a("div",[e._v(e._s(t.item.index))])])]}},{key:"item.accountType",fn:function(t){return[a("v-edit-dialog",{attrs:{"return-value":t.item.accountType,large:"",persistent:"","save-text":"儲存","cancel-text":"取消"},on:{"update:returnValue":function(a){return e.$set(t.item,"accountType",a)},"update:return-value":function(a){return e.$set(t.item,"accountType",a)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 title"},[e._v("帳戶屬性")]),a("v-select",{attrs:{value:t.item.accountType,"item-text":"text","item-value":"text",label:"帳戶屬性",items:e.acctype,"single-line":"",counter:"",autofocus:"",dense:""},model:{value:t.item.accountType,callback:function(a){e.$set(t.item,"accountType",a)},expression:"props.item.accountType"}})]},proxy:!0}],null,!0)},[a("div",[e._v(e._s(t.item.accountType))])])]}},{key:"item.accountRepersent",fn:function(t){return[a("v-edit-dialog",{attrs:{"return-value":t.item.accountRepersent,large:"","save-text":"儲存","cancel-text":"取消"},on:{"update:returnValue":function(a){return e.$set(t.item,"accountRepersent",a)},"update:return-value":function(a){return e.$set(t.item,"accountRepersent",a)},save:e.save,cancel:e.cancel,open:e.open,close:e.close},scopedSlots:e._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 title"},[e._v("行庫代號")]),a("v-select",{attrs:{value:t.item.accountRepersent,"item-text":"text","item-value":"text",label:"行庫代號",items:e.branchNumbers,"single-line":"",counter:"",autofocus:"",dense:""},model:{value:t.item.accountRepersent,callback:function(a){e.$set(t.item,"accountRepersent",a)},expression:"props.item.accountRepersent"}})]},proxy:!0}],null,!0)},[a("div",[e._v(e._s(t.item.accountRepersent))])])]}}])}),a("v-dialog",{attrs:{persistent:"","max-width":"1100"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{staticStyle:{padding:"10px"}},[a("v-card-title",[a("v-row",[a("v-col",{attrs:{md:"6"}},[a("p",[e._v("新增帳戶")])]),a("v-col",{attrs:{"offset-md":"5"}},[a("v-btn",{attrs:{color:"darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" 離開 ")])],1)],1)],1),a("v-form",{on:{submit:function(t){return t.preventDefault(),e.saveNew.apply(null,arguments)}}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{"item-text":"text","item-value":"text",label:"帳戶屬性",items:e.acctype,autosize:"false",required:""},model:{value:e.model.accountType,callback:function(t){e.$set(e.model,"accountType",t)},expression:"model.accountType"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"帳戶簡稱",required:""},model:{value:e.model.accountAbbrev,callback:function(t){e.$set(e.model,"accountAbbrev",t)},expression:"model.accountAbbrev"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"銀行帳號",required:""},model:{value:e.model.accountAcc,callback:function(t){e.$set(e.model,"accountAcc",t)},expression:"model.accountAcc"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-select",{attrs:{"item-text":"text","item-value":"text",label:"行庫代號",items:e.branchNumbers,required:""},model:{value:e.model.accountRepersent,callback:function(t){e.$set(e.model,"accountRepersent",t)},expression:"model.accountRepersent"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"分行代碼",required:""},model:{value:e.model.accountBranch,callback:function(t){e.$set(e.model,"accountBranch",t)},expression:"model.accountBranch"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"開戶名稱",required:""},model:{value:e.model.accountName,callback:function(t){e.$set(e.model,"accountName",t)},expression:"model.accountName"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"資金科目",required:""},model:{value:e.model.FundFrom,callback:function(t){e.$set(e.model,"FundFrom",t)},expression:"model.FundFrom"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"借貸",required:""},model:{value:e.model.LoanOrNot,callback:function(t){e.$set(e.model,"LoanOrNot",t)},expression:"model.LoanOrNot"}})],1),a("v-col",{attrs:{cols:"12",md:"4"}},[a("v-text-field",{attrs:{label:"帳戶餘額",required:""},model:{value:e.model.FundBalance,callback:function(t){e.$set(e.model,"FundBalance",t)},expression:"model.FundBalance"}})],1),a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-textarea",{attrs:{label:"註記",rows:"3"},model:{value:e.model.accountMoment,callback:function(t){e.$set(e.model,"accountMoment",t)},expression:"model.accountMoment"}})],1)],1),a("v-row",[a("v-col",{attrs:{"offset-md":"11"}},[a("v-btn",{attrs:{type:"submit",color:"green darken-1",text:""}},[e._v(" 送出")])],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"300"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"text-h5"},[e._v(e._s(e.model.accountAbbrev))])]),a("v-card-text",[e._v(" 新增成功")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog2=!1}}},[e._v(" 確定 ")])],1)],1)],1)],1)},H=[],U={data:function(){return{snack:!1,snackColor:"",snackText:"",search:"",max25chars:function(e){return e.length<=25||"Input too long!"},pagination:{},acctype:[],branchNumbers:[],dialog:!1,dialog2:!1,model:{accountType:"",accountAbbrev:"",accountAcc:"",accountRepersent:"",accountBranch:"",accountName:"",accountMoment:"",FundFrom:"",LoanOrNot:"",FundBalance:"",ModifiedDate:""},headers:[{text:"index",align:"start",value:"index"},{text:"帳戶屬性",value:"accountType"},{text:"帳戶簡稱",value:"accountAbbrev"},{text:"銀行帳號",value:"accountAcc"},{text:"行庫代號",value:"accountRepersent"},{text:"分行代碼",value:"accountBranch"},{text:"開戶名稱",value:"accountName"},{text:"註記",value:"accountMoment"},{text:"資金項目",value:"FundFrom"},{text:"借貸",value:"LoanOrNot"},{text:"帳戶餘額",value:"FundBalance"},{text:"異動紀錄",value:"ModifiedDate"}],account:[]}},methods:{save:function(){this.snack=!0,this.snackColor="success",this.snackText="Data saved"},cancel:function(){this.snack=!0,this.snackColor="error",this.snackText="Canceled"},open:function(){this.snack=!0,this.snackColor="info",this.snackText="Dialog opened"},close:function(){console.log("Dialog closed")},saveNew:function(){this.dialog=!1,this.dialog2=!0,console.log(this.model)}},mounted:function(){this.account=this.$apis.GetAccount(),this.acctype=this.$apis.GetAccType(),this.branchNumbers=this.$apis.GetBranchNumber()}},J=U,K=a("8336"),Q=a("99d9"),W=a("8fea"),X=a("169a"),Z=a("7679"),ee=a("4bd4"),te=a("b974"),ae=a("2fa4"),ne=a("8654"),ce=a("a844"),oe=Object(u["a"])(J,Y,H,!1,null,null,null),re=oe.exports;m()(oe,{VBtn:K["a"],VCard:B["a"],VCardActions:Q["a"],VCardText:Q["b"],VCardTitle:Q["c"],VCol:O["a"],VContainer:C["a"],VDataTable:W["a"],VDialog:X["a"],VEditDialog:Z["a"],VForm:ee["a"],VRow:$["a"],VSelect:te["a"],VSpacer:ae["a"],VTextField:ne["a"],VTextarea:ce["a"]});var se,le,ie,ue,de,me,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("HorziontalBar"),a("VerticalBarChart"),a("CompareBarChart")],1)},fe=[],be=a("1fca"),ve={extends:be["b"],mounted:function(){this.renderChart({labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:"".concat((new Date).getFullYear(),"每月毛收統計表"),backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},{responsive:!0,maintainAspectRatio:!1})}},je=ve,xe=Object(u["a"])(je,se,le,!1,null,null,null),he=xe.exports,ye={extends:be["a"],mounted:function(){this.renderChart({labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:"".concat((new Date).getFullYear(),"每月支出統計表"),backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},{responsive:!0,maintainAspectRatio:!1})}},ge=ye,ke=Object(u["a"])(ge,ie,ue,!1,null,null,null),we=ke.exports,Fe={extends:be["a"],data:function(){return{gradient:null,gradient2:null}},mounted:function(){this.renderChart({labels:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],datasets:[{label:"".concat((new Date).getFullYear(),"每月毛收統計表"),backgroundColor:"#FF5733",data:[40,20,12,39,10,40,39,80,40,20,12,11]},{label:"".concat((new Date).getFullYear()-1,"每月毛收統計表"),backgroundColor:"#3399FF",data:[40,20,12,39,10,40,39,66,40,55,142,33]}]},{responsive:!0,maintainAspectRatio:!1})}},_e=Fe,Ae=Object(u["a"])(_e,de,me,!1,null,null,null),De=Ae.exports,Ne={components:{HorziontalBar:he,VerticalBarChart:we,CompareBarChart:De}},Te=Ne,Ve=Object(u["a"])(Te,pe,fe,!1,null,null,null),Be=Ve.exports,Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("Not found page")])},Ce=[],Me={},$e=Me,Re=Object(u["a"])($e,Oe,Ce,!1,null,null,null),ze=Re.exports,Le=[{path:"/",redirect:"/DateGrid"},{path:"/DateGrid",component:re},{path:"/Assemble",component:Be},{path:"/:notFound(.*)",component:ze}];n["a"].config.productionTip=!0,n["a"].use(S["a"]);var Ie=new S["a"]({mode:"history",base:"/test1/",routes:Le});n["a"].prototype.$apis=G,new n["a"]({vuetify:I,router:Ie,render:function(e){return e(z)}}).$mount("#app")}});
//# sourceMappingURL=app.c265dcbe.js.map