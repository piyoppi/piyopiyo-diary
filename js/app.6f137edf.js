(function(t){function e(e){for(var i,r,o=e[0],u=e[1],l=e[2],c=0,m=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var u=n[r];0!==a[u]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d1caaced"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=a[t]=[e,i]}));e.push(n[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=r(t);var l=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,n[1](l)}a[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var i=n("85ec"),a=n.n(i);a.a},"12ae":function(t,e,n){},1635:function(t,e,n){},1877:function(t,e,n){},3182:function(t,e,n){"use strict";var i=n("12ae"),a=n.n(i);a.a},"5cca":function(t,e,n){"use strict";var i=n("1877"),a=n.n(i);a.a},"85ec":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("034f"),n("2877")),u={},l=Object(o["a"])(u,s,r,!1,null,null,null),c=l.exports,d=(n("d3b7"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{ref:"timelineOuter",staticClass:"timeline-boundary"},[n("Timeline",{ref:"timeline",attrs:{"filter-path":t.currentPath},on:{"selected-path":t.filter,edit:t.editPost},model:{value:t.timelineItems,callback:function(e){t.timelineItems=e},expression:"timelineItems"}})],1),n("div",{staticClass:"bottom-tools"},[n("div",{staticClass:"bottom-tools-item"},[n("span",{staticClass:"mdi mdi-filter-outline"}),t._v(" "+t._s(t.currentPath||"all")+" ")]),n("PostForm",{ref:"postForm",on:{post:t.addItem,filter:t.filter,export:t.exportPosts,"delete-post":t.deletePost,edit:t.editPost},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)])},f=[],p=(n("99af"),n("7db0"),n("c740"),n("96cf"),n("1da1")),h=n("5a0c"),v=n.n(h),b=(n("4160"),n("13d5"),n("4ec9"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("d4ec")),g=n("bee2"),y=function(){function t(e){Object(b["a"])(this,t),this.posts=[],this.posts=e}return Object(g["a"])(t,[{key:"_toTextTimeline",value:function(t){return t.reduce((function(t,e){return t+"- ".concat(e.date," ").concat(e.message," \n")}),"")}},{key:"_toTextGroupBy",value:function(){var t=this,e=new Map;this.posts.forEach((function(t){var n;e.has(t.path)||e.set(t.path,[]),null===(n=e.get(t.path))||void 0===n||n.push(t)}));var n="";return e.forEach((function(e,i){n+="## ".concat(i," \n"),n+=t._toTextTimeline(e),n+="\n"})),n}},{key:"toText",value:function(){var t=this._toTextTimeline(this.posts),e=this._toTextGroupBy(),n="\n<details>\n  <summary>piyopiyo-diary metadata</summary>\n\n  ".concat(JSON.stringify(this.posts),"\n\n</details>\n    ");return"\n# Timeline\n".concat(t,"\n\n# Timeline Group\n").concat(e,"\n\n# MetaData\n").concat(n,"\n    ")}},{key:"toBlob",value:function(){return new Blob([this.toText()],{type:"text/plain"})}},{key:"download",value:function(){var t=document.createElement("a");if("undefined"!==typeof t.download){t.href=URL.createObjectURL(this.toBlob()),t.download="text.md";var e=document.createEvent("MouseEvent");e.initEvent("click",!0,!1),t.dispatchEvent(e)}}}]),t}(),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postform-boundary"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.post(e)}}},[n("input",{ref:"text",staticClass:"postform-textbox",attrs:{type:"text",placeholder:"やっていることを端的に"},domProps:{value:t.value},on:{input:t.textChanged}}),t._m(0)])])},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"postform-submit"},[n("span",{staticClass:"mdi mdi-send"})])}];n("ac1f"),n("466d"),n("5319"),n("1276");(function(t){t[t["PostMessage"]=0]="PostMessage",t[t["Filter"]=1]="Filter",t[t["Export"]=2]="Export",t[t["Delete"]=3]="Delete",t[t["Edit"]=4]="Edit"})(i||(i={}));var P=function(){function t(){Object(b["a"])(this,t)}return Object(g["a"])(t,[{key:"parse",value:function(t){var e=this._extractCommandType(t),n=e?t.replace("\\".concat(e),""):t;switch(" "===n.substring(0,1)&&(n=n.substring(1)),e){case"filter":case"f":return this._buildFilterResult(n);case"export":return this._buildExportResult(n);case"delete":return this._buildDeletePostResult(n);case"edit":case"e":return this._buildEditPostResult(n);default:return this._buildPostMessageResult(n)}}},{key:"_extractCommandType",value:function(t){var e=t.match(/^\\[a-zA-Z]*( |$)/);return e?e[0].substring(1,e[0].length).replace(" ",""):""}},{key:"_buildExportResult",value:function(t){return{mode:i.Export,data:{}}}},{key:"_buildDeletePostResult",value:function(t){return{mode:i.Delete,data:{}}}},{key:"_buildFilterResult",value:function(t){return{mode:i.Filter,data:{path:t}}}},{key:"_buildPostMessageResult",value:function(t){var e=t.match(/^.*: /),n=e?e[0].substring(0,e[0].length-2):"/",a=e?t.substring(e[0].length):t;return{mode:i.PostMessage,data:{path:n,message:a}}}},{key:"_buildEditPostResult",value:function(t){var e=t.split(" "),n=e.length>1?parseInt(e[0]):-1,a=e.length>1?e[1]:e[0];return{mode:i.Edit,data:{id:n,message:a}}}}]),t}(),k=new P,w=a["a"].extend({data:function(){return{}},props:{value:{type:String,default:""}},methods:{post:function(){if(""!==this.value){var t=k.parse(this.value);switch(t.mode){case i.PostMessage:this.$emit("post",t.data.message,t.data.path);break;case i.Edit:if(this.$emit("edit",t.data.message,t.data.id),""===t.data.message)return;break;case i.Filter:this.$emit("filter",t.data.path);break;case i.Export:this.$emit("export");break;case i.Delete:this.$emit("delete-post");break}this.$emit("input","")}},textChanged:function(t){t.target instanceof HTMLInputElement&&this.$emit("input",t.target.value)},focus:function(){this.$refs.text.focus()}}}),E=w,O=(n("5cca"),Object(o["a"])(E,x,_,!1,null,"17387bf1",null)),T=O.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"timeline-list"},t._l(t.filteredTimeline,(function(e){return n("li",{key:e.id},[n("div",{staticClass:"timeline-listitem-header"},[n("div",{staticClass:"timeline-listitem-header-item timeline-listitem-id"},[n("a",{attrs:{href:"#"},on:{click:function(n){return t.editPost(e.message,e.id)}}},[t._v("#"+t._s(e.id))])]),n("div",{staticClass:"timeline-listitem-header-item timeline-listitem-path"},[n("a",{attrs:{href:"#"},on:{click:function(n){return t.pathSelected(e.path)}}},[t._v(t._s(e.path))])]),n("div",{staticClass:"timeline-listitem-header-item timeline-listitem-date"},[t._v(t._s(e.date))]),n("div",{staticClass:"timeline-listitem-header-item"},[n("button",{staticClass:"timeline-listitem-delete",on:{click:function(n){return t.remove(e)}}},[n("span",{staticClass:"mdi mdi-delete-outline"})])])]),n("div",{staticClass:"timeline-listitem-message"},[t._v(" "+t._s(e.message)+" ")])])})),0)])},j=[],$=(n("4de4"),n("c975"),n("fb6a"),n("2909")),I=a["a"].extend({name:"Timeline",props:{value:{type:Array,required:!0},filterPath:{type:String,default:""}},computed:{filteredTimeline:function(){var t=this;return this.filterPath?this.value.filter((function(e){return e.path===t.filterPath})):this.value}},methods:{remove:function(t){var e=this.value.indexOf(t),n=[].concat(Object($["a"])(this.value.slice(0,e)),Object($["a"])(this.value.slice(e+1,this.value.length)));this.$emit("input",n)},pathSelected:function(t){this.$emit("selected-path",t)},editPost:function(t,e){this.$emit("edit","",e)}}}),R=I,M=(n("3182"),Object(o["a"])(R,C,j,!1,null,"566dd095",null)),S=M.exports,F=0,D=a["a"].extend({name:"Home",components:{PostForm:T,Timeline:S},data:function(){return{timelineItems:[],currentPath:"",text:""}},methods:{addItem:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e,n){var i,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.timelineItems.push({path:this.currentPath||n,id:++F,date:v()().format("HH:mm"),message:e}),t.next=3,this.$nextTick();case 3:i=this.$refs.timeline.$el,a=this.$refs.timelineOuter,s=i.getBoundingClientRect(),r=s.height,a.scrollTo(0,r);case 8:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),filter:function(t){this.currentPath=t},exportPosts:function(){var t=new y(this.timelineItems);t.download()},deletePost:function(){this.timelineItems.pop()},editPost:function(t,e){if(e<0&&(e=this.timelineItems[this.timelineItems.length-1].id),t){var n=this.timelineItems.findIndex((function(t){return t.id===e}));n>=0&&(this.timelineItems[n].message=t)}else{var i=this.timelineItems.find((function(t){return t.id===e}));i&&(this.text="\\e ".concat(e," ").concat(i.message),this.$refs.postForm.focus())}}}}),B=D,H=(n("d6f5"),Object(o["a"])(B,m,f,!1,null,"2a0bd4f6",null)),L=H.exports;a["a"].use(d["a"]);var A=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=new d["a"]({mode:"history",base:"/",routes:A}),J=G,q=n("2f62");a["a"].use(q["a"]);var U=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("5363");a["a"].config.productionTip=!1,new a["a"]({router:J,store:U,render:function(t){return t(c)}}).$mount("#app")},d6f5:function(t,e,n){"use strict";var i=n("1635"),a=n.n(i);a.a}});
//# sourceMappingURL=app.6f137edf.js.map