var M=Object.defineProperty,T=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var g=(n,t,r)=>t in n?M(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,k=(n,t)=>{for(var r in t||(t={}))q.call(t,r)&&g(n,r,t[r]);if(x)for(var r of x(t))D.call(t,r)&&g(n,r,t[r]);return n},w=(n,t)=>T(n,E(t));import{r as d,o as i,c as _,a as F,b as m,u as c,F as v,w as p,d as h,e as R,t as $,n as C,f as O,g as V,h as b,i as S,j,k as I,l as B,K as H,m as K,T as W,p as z,q as G,s as J,v as Q,x as U,y as X}from"./vendor.aa3d3de6.js";const Y=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};Y();var y=(n,t)=>{const r=n.__vccOpts||n;for(const[s,e]of t)r[s]=e;return r};const Z={};function ee(n,t){const r=d("router-view");return i(),_(r)}var te=y(Z,[["render",ee]]);const ne="modulepreload",L={},re="./",oe=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${re}${s}`,s in L)return;L[s]=!0;const e=s.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":ne,e||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),e)return new Promise((l,f)=>{a.addEventListener("load",l),a.addEventListener("error",f)})})).then(()=>t())},se={props:{item:{type:Object,required:!0},isNest:{type:Boolean,default:!1},basePath:{type:String,default:""}},setup(n){let{proxy:t}=j();F(()=>{}),t.onlyOneChild=null;let r=(e=[],o)=>{const a=e.filter(l=>l.hidden?!1:(t.onlyOneChild=l,!0));return a.length===1&&!(o==null?void 0:o.alwaysShow)?!0:a.length===0?(t.onlyOneChild=w(k({},o),{path:"",noChildren:!0}),!0):!1},s=e=>`${t.basePath}${e}`;return(e,o)=>{const a=d("el-menu-item"),l=d("router-link"),f=d("SidebarItem",!0),P=d("el-sub-menu");return n.item.hidden?O("",!0):(i(),m(v,{key:0},[c(r)(n.item.children,n.item)?(i(),m(v,{key:0},[e.onlyOneChild.meta?(i(),_(l,{key:0,to:c(s)(e.onlyOneChild.path)},{default:p(()=>[h(a,{index:c(s)(e.onlyOneChild.path),class:C({"submenu-title-noDropdown":!n.isNest})},{title:p(()=>{var u;return[R($((u=e.onlyOneChild.meta)==null?void 0:u.title),1)]}),_:1},8,["index","class"])]),_:1},8,["to"])):O("",!0)],64)):(i(),_(P,{key:1,ref:(u,A)=>{A.subMenu=u},index:c(s)(n.item.path),"popper-append-to-body":""},V({default:p(()=>[(i(!0),m(v,null,S(n.item.children,u=>(i(),_(f,{key:u.path,"is-nest":!0,item:u,"base-path":c(s)(u.path)},null,8,["item","base-path"]))),128))]),_:2},[n.item.meta?{name:"title",fn:p(()=>[b("span",null,$(n.item.meta.title),1)])}:void 0]),1032,["index"]))],64))}}};const ae={class:"reset-menu-style"},ie={setup(n){const t=I(),r={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"},s=B(()=>{const{meta:e,fullPath:o}=t;return e.activeMenu?e.activeMenu:o});return(e,o)=>{const a=d("el-menu"),l=d("el-scrollbar");return i(),m("div",ae,[h(l,null,{default:p(()=>[h(a,{class:"el-menu-vertical","default-active":c(s),"unique-opened":!1,"collapse-transition":!1,"background-color":r.menuBg,"text-color":r.menuText,"active-text-color":r.menuActiveText,mode:"vertical"},{default:p(()=>[(i(!0),m(v,null,S(c(N),f=>(i(),_(c(se),{key:f.path,item:f,"base-path":f.path},null,8,["item","base-path"]))),128))]),_:1},8,["default-active","background-color","text-color","active-text-color"])]),_:1})])}}};const ce={setup(n){const t=B(()=>I().path);return(r,s)=>{const e=d("router-view");return i(),_(e,null,{default:p(({Component:o})=>[h(W,{name:"fade-transform",mode:"out-in"},{default:p(()=>[(i(),m("div",{class:C(["app-main",{"show-tag-view":!1}]),key:c(t)},[(i(),_(H,null,[(i(),_(K(o),{key:c(t)}))],1024))]))]),_:2},1024)]),_:1})}}};var le=y(ce,[["__scopeId","data-v-356ab79e"]]);const ue={},de=n=>(z("data-v-64fdd2f8"),n=n(),G(),n),_e={class:"navbar"},me=de(()=>b("div",{class:"navbar-txt"}," welcome ",-1)),pe=[me];function fe(n,t){return i(),m("div",_e,pe)}var he=y(ue,[["render",fe],["__scopeId","data-v-64fdd2f8"]]);const ve={class:"layout-wrapper"},ye={class:"main-container"},be={setup(n){return(t,r)=>(i(),m("div",ve,[h(c(ie),{class:"sidebar-container"}),b("div",ye,[h(c(he)),h(c(le))])]))}};var xe=y(be,[["__scopeId","data-v-6c0d241f"]]);const N=[{path:"/",component:xe,redirect:"/dashboard",children:[{path:"dashboard",name:"Dashboard",component:()=>oe(()=>import("./index.ec8062e3.js"),["assets/index.ec8062e3.js","assets/index.d1914c62.css","assets/vendor.aa3d3de6.js"]),meta:{title:"\u57FA\u672C\u9762"}}]}],ge=J({history:Q(),scrollBehavior:()=>({top:0}),routes:N});var ke=U(te);ke.use(X,{size:"mini"}).use(ge).mount("#app");export{y as _};
