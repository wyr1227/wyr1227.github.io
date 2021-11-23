var N=Object.defineProperty,P=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var g=(n,t,r)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,k=(n,t)=>{for(var r in t||(t={}))q.call(t,r)&&g(n,r,t[r]);if(x)for(var r of x(t))D.call(t,r)&&g(n,r,t[r]);return n},w=(n,t)=>P(n,T(t));import{r as h,o as i,c as d,a as F,b as _,u as c,F as v,w as m,d as f,e as R,t as $,n as C,f as O,g as V,h as b,i as S,j,E as H,k as z,l as E,m as I,p as K,q as W,K as G,s as J,T as Q,v as U,x as X,y as Y,z as Z,A as ee,B as te}from"./vendor.5cd7c4a4.js";const ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};ne();var y=(n,t)=>{const r=n.__vccOpts||n;for(const[s,e]of t)r[s]=e;return r};const re={};function oe(n,t){const r=h("router-view");return i(),d(r)}var se=y(re,[["render",oe]]);const ae="modulepreload",M={},ie="./",ce=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${ie}${s}`,s in M)return;M[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":ae,e||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),e)return new Promise((l,p)=>{a.addEventListener("load",l),a.addEventListener("error",p)})})).then(()=>t())},le={props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},setup(n){let{proxy:t}=j();F(()=>{}),t.onlyOneChild=null;let r=(e=[],o)=>{const a=e.filter(l=>l.hidden?!1:(t.onlyOneChild=l,!0));return a.length===1&&!(o==null?void 0:o.alwaysShow)?!0:a.length===0?(t.onlyOneChild=w(k({},o),{path:"",noChildren:!0}),!0):!1},s=e=>`${t.basePath}${e}`;return(e,o)=>{const a=H,l=h("router-link"),p=h("SidebarItem",!0),A=z;return n.item.hidden?O("",!0):(i(),_(v,{key:0},[c(r)(n.item.children,n.item)?(i(),_(v,{key:0},[e.onlyOneChild.meta?(i(),d(l,{key:0,to:c(s)(e.onlyOneChild.path)},{default:m(()=>[f(a,{index:c(s)(e.onlyOneChild.path),class:C({"submenu-title-noDropdown":!n.isNest})},{title:m(()=>{var u;return[R($((u=e.onlyOneChild.meta)==null?void 0:u.title),1)]}),_:1},8,["index","class"])]),_:1},8,["to"])):O("",!0)],64)):(i(),d(A,{key:1,ref:(u,L)=>{L.subMenu=u},index:c(s)(n.item.path),"popper-append-to-body":""},V({default:m(()=>[(i(!0),_(v,null,S(n.item.children,u=>(i(),d(p,{key:u.path,"is-nest":!0,item:u,"base-path":c(s)(u.path)},null,8,["item","base-path"]))),128))]),_:2},[n.item.meta?{name:"title",fn:m(()=>[b("span",null,$(n.item.meta.title),1)])}:void 0]),1032,["index"]))],64))}}};const ue={class:"reset-menu-style"},de={setup(n){const t=E(),r={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"},s=I(()=>{const{meta:e,fullPath:o}=t;return e.activeMenu?e.activeMenu:o});return(e,o)=>{const a=K,l=W;return i(),_("div",ue,[f(l,null,{default:m(()=>[f(a,{class:"el-menu-vertical","default-active":c(s),"unique-opened":!1,"collapse-transition":!1,"background-color":r.menuBg,"text-color":r.menuText,"active-text-color":r.menuActiveText,mode:"vertical"},{default:m(()=>[(i(!0),_(v,null,S(c(B),p=>(i(),d(c(le),{key:p.path,item:p,"base-path":p.path},null,8,["item","base-path"]))),128))]),_:1},8,["default-active","background-color","text-color","active-text-color"])]),_:1})])}}};const _e={setup(n){const t=I(()=>E().path);return(r,s)=>{const e=h("router-view");return i(),d(e,null,{default:m(({Component:o})=>[f(Q,{name:"fade-transform",mode:"out-in"},{default:m(()=>[(i(),_("div",{class:C(["app-main",{"show-tag-view":!1}]),key:c(t)},[(i(),d(G,null,[(i(),d(J(o),{key:c(t)}))],1024))]))]),_:2},1024)]),_:1})}}};var me=y(_e,[["__scopeId","data-v-356ab79e"]]);const pe={},fe=n=>(U("data-v-64fdd2f8"),n=n(),X(),n),he={class:"navbar"},ve=fe(()=>b("div",{class:"navbar-txt"}," welcome ",-1)),ye=[ve];function be(n,t){return i(),_("div",he,ye)}var xe=y(pe,[["render",be],["__scopeId","data-v-64fdd2f8"]]);const ge={class:"layout-wrapper"},ke={class:"main-container"},we={setup(n){return(t,r)=>(i(),_("div",ge,[f(c(de),{class:"sidebar-container"}),b("div",ke,[f(c(xe)),f(c(me))])]))}};var $e=y(we,[["__scopeId","data-v-6c0d241f"]]);const B=[{path:"/",component:$e,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:()=>ce(()=>import("./index.5b56b34e.js"),["assets/index.5b56b34e.js","assets/index.f5495b4e.css","assets/vendor.5cd7c4a4.js","assets/vendor.272981b4.css"]),meta:{title:"\u57FA\u672C\u9762"}}]}],Ce=Y({history:Z(),scrollBehavior:()=>({top:0}),routes:B});var Oe=ee(se);Oe.use(te,{size:"mini"}).use(Ce).mount("#app");export{y as _};
