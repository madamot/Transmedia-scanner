(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0c0f":function(t,e,n){},2392:function(t,e,n){t.exports=n.p+"img/transmedia_logo.d18dd67d.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("vue-particles",{staticClass:"particles",attrs:{color:"#59C6F2",particleOpacity:.3,linesColor:"#FFF",lineLinked:!1,hoverEffect:!1,clickEffect:!0,clickMode:"grab"}}),n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},o=[],s=(n("034f"),n("2877")),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"scanner-container"},[t._m(0),t.showScanner?r("v-quagga",{staticClass:"scanner-window",attrs:{onDetected:t.logIt,readerSize:t.readerSize,readerTypes:["code_128_reader","code_39_reader"]}}):t._e(),r("transition",{attrs:{name:"fade-up"}},[t.showScanner?r("button",{staticClass:"cancel",attrs:{type:"button"},on:{click:function(e){t.showScanner=!1}}},[t._v("CANCEL")]):t._e()]),r("img",{staticClass:"logo",attrs:{src:n("2392"),alt:"logo"}}),r("transition",{attrs:{name:"fade-up"}},[t.showScanner?t._e():r("i",{staticClass:"material-icons instruction-icon"},[t._v(" recent_actors ")])]),r("transition",{attrs:{name:"fade-up"}},[t.showScanner?t._e():r("p",{staticClass:"instructions"},[t._v("Click the scan button below to start, present a student code to see their portfolio.")])]),r("form",{staticClass:"scan-form"},[r("div",{staticClass:"input-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.barcode,expression:"barcode"}],staticClass:"isbn",attrs:{id:"isbn_input",type:"text",readonly:""},domProps:{value:t.barcode},on:{input:function(e){e.target.composing||(t.barcode=e.target.value)}}}),r("transition",{attrs:{name:"fade-up"}},[t.showScanner?t._e():r("button",{staticClass:"icon-barcode button scan",attrs:{type:"button"},on:{click:function(e){t.showScanner=!0}}},[t._v("SCAN")])])],1)])],1)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("h1",[t._v("Student Scan")])])}],p={name:"Home",data:function(){return{showScanner:!1,loaded:!1,barcode:"",readerSize:{width:600,height:400},detecteds:[]}},methods:{logIt:function(t){var e=this;e.showScanner=!1,e.barcode=t.codeResult.code,e.openViewer()},openViewer:function(){var t=this;this.$router.push({name:"student",params:{id:t.barcode}})}}},h=p,v=(n("cccb"),Object(s["a"])(h,d,f,!1,null,null,null)),m=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-viewer-page"},[n("transition",{attrs:{name:"slide-down"}},[t.loaded?n("div",{staticClass:"site-viewer-header"},[n("i",{staticClass:"material-icons back-icon",on:{click:t.home}},[t._v(" backspace ")]),n("h1",{staticClass:"info"},[t._v(t._s(t.student.firstname)+" "+t._s(t.student.lastname)+" | "+t._s(t.student.year)+" Year "+t._s(t.student.discipline))])]):t._e()]),n("transition",{attrs:{name:"fade"}},[!t.loaded&&t.errors.length<1?n("Loader"):t._e()],1),n("transition",{attrs:{name:"fade"}},[t.loaded?n("iframe",{staticClass:"website",attrs:{src:t.student.portfolio}}):t._e()]),n("transition",{attrs:{name:"fade"}},[t.errors.length>0?n("div",{staticClass:"errors"},[t._v(" Failed to load student "),t._l(t.errors,(function(e,r){return n("p",{key:r},[t._v(t._s(e))])})),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"retry",on:{click:t.getStudent}},[t._v("RETRY")]),n("br"),n("div",{staticClass:"retry",on:{click:t.home}},[t._v("BACK")])],2):t._e()])],1)},_=[],g=n("bc3a"),w=n.n(g),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("img",{attrs:{src:n("2392"),alt:"loading..."}})])}],S=(n("74ae"),{}),k=Object(s["a"])(S,y,C,!1,null,null,null),O=k.exports,j={props:["id"],data:function(){return{loaded:!1,student:{},errors:[]}},components:{Loader:O},created:function(){var t=this;void 0==t.id?t.$router.push("/"):t.getStudent()},methods:{home:function(){this.$router.push("/")},getStudent:function(){var t=this;t.loaded=!1,t.errors=[],w.a.get("http://www.transmedia2020.co.uk/api/".concat(t.id,"/?format=json")).then((function(e){null==e.data?(t.errors.push("Student not found"),t.loaded=!1):(t.student=e.data,t.loaded=!0)})).catch((function(e){t.student={firstname:"",lastname:"",porfolio:"",year:"",discipline:""},t.errors.push(e),t.loaded=!1}))}}},x=j,E=(n("ef12"),Object(s["a"])(x,b,_,!1,null,null,null)),$=E.exports;r["a"].use(l["a"]);var P=[{path:"/",name:"Home",component:m},{path:"/student",name:"student",component:$,props:!0}],F=new l["a"]({mode:"history",base:"/",routes:P}),M=F,T=n("8179"),L=n("98c9");r["a"].use(T["a"]),r["a"].use(L["a"]),r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,n){},"74ae":function(t,e,n){"use strict";var r=n("b4ad"),a=n.n(r);a.a},"85ec":function(t,e,n){},b4ad:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),a=n.n(r);a.a},ef12:function(t,e,n){"use strict";var r=n("0c0f"),a=n.n(r);a.a}});
//# sourceMappingURL=app.26281649.js.map