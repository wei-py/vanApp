import{N as d,E as T,n as I,O as q,g as X,r as g,c as L,w as D,T as Y,S as F}from"./@vue-BhOIXUCP.js";function V(n,a){a===void 0&&(a={});var r=a.insertAt;if(!(typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",r==="top"&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=n:c.appendChild(document.createTextNode(n))}}var G=`.menus-fade-enter-active,
.menus-fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.menus-fade-enter-from,
.menus-fade-leave-to {
  opacity: 0;
}

.v3-menus {
  position: fixed;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background: #fff;
  border-radius: 4px;
  padding: 8px 0;
  user-select: none;
  box-sizing: border-box;
}

.v3-menus-body {
  display: block;
}

.v3-menus-item {
  display: flex;
  line-height: 2rem;
  padding: 0 1rem;
  margin: 0;
  font-size: 0.8rem;
  outline: 0;
  align-items: center;
  transition: 0.2s;
  box-sizing: border-box;
  list-style: none;
  border-bottom: 1px solid #00000000;
}

.v3-menus-divided {
  border-bottom-color: #ebeef5;
}

.v3-menus-icon {
  display: flex;
  margin-right: 0.6rem;
  width: 1rem;
}

.v3-menus-label {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v3-menus-suffix {
  margin-left: 1.5rem;
  font-size: 0.39rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v3-menus-available {
  color: #606266;
  cursor: pointer;
}

.v3-menus-available:hover {
  background: #ecf5ff;
  color: #409eff;
}

.v3-menus-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.v3-menus-active {
  background: #ecf5ff;
  color: #409eff;
}

.v3-menus-tip {
  font-size: 9px;
  color: #999;
}
`;V(G);const J={menus:{type:Array,required:!0},menusClass:{type:String,default:null},itemClass:{type:String,default:null},event:{type:Object,required:!0},minWidth:{type:[Number,String],default:"none"},maxWidth:{type:[Number,String],default:"none"},zIndex:{type:Number,default:3},direction:{type:String,default:"right"},open:{type:Boolean,default:!1},args:{type:[Object,Function,Array,Boolean,String],default:{}}},H=q({name:"vue3-menus",inheritAttrs:!1,props:J,setup(n,{slots:a,attrs:r}){const l=globalThis.document.documentElement.clientWidth,c=globalThis.document.documentElement.clientHeight,{proxy:x}=X(),y=g(n.open),s={},k=g(null),v=g(-1),f=g(0),w=g(0);let m=n.direction;const O=L(()=>{for(let e=0;e<n.menus.length;e++)if(n.menus[e].icon!==void 0)return!0}),o=L(()=>({x:n.event.clientX,y:n.event.clientY,width:n.event.width||0,height:n.event.height||0})),j=L(()=>({left:`${f.value}px`,top:`${w.value}px`,minWidth:`${n.minWidth}px`,maxWidth:n.maxWidth=="none"?n.maxWidth:`${n.maxWidth}px`,zIndex:n.zIndex}));function M(e){f.value=o.value.x-e,m="left",f.value<0&&(m="right",o.value.width===0||o.value.width===void 0?f.value=0:f.value=o.value.x+o.value.width)}function P(e,t){f.value=o.value.x+o.value.width,m="right",f.value+t>e&&(m="left",o.value.width===0||o.value.width===void 0?f.value=e-t:f.value=o.value.x-t)}function h(){v.value=-1,y.value=!1,s&&s.instance&&(s.instance.close.bind(s.instance)(),s.instance=null,s.index=null,x.closeAll&&x.closeAll())}D(()=>n.open,e=>y.value=e),D(y,e=>{e?I(()=>{const t=k.value.offsetWidth,i=k.value.offsetHeight;m==="left"?M(t):P(l,t),w.value=o.value.y,o.value.y+i>c&&(o.value.height===0||o.value.height===void 0?w.value=o.value.y-i:w.value=c-i),setTimeout(()=>{globalThis.document.addEventListener("click",h),globalThis.document.addEventListener("contextmenu",h),globalThis.document.addEventListener("wheel",h)},0)}):(v.value=-1,globalThis.document.removeEventListener("click",h),globalThis.document.removeEventListener("contextmenu",h),globalThis.document.removeEventListener("wheel",h))},{immediate:!0});function A(e,t,i){if(e.preventDefault(),v.value=i,!t||t.disabled||t.hidden)return;if(s.instance){if(s.index===i)return;s.instance.close.bind(s.instance)(),s.instance=null,s.index=null}if(!t.children)return;const u=t.enter&&typeof t.enter=="function"?t.enter:null;if(u){const B=u(t,n.args);if(B===!1||B===null)return}const C=e.target.getBoundingClientRect(),b=d(H,{...n,menus:t.children,direction:m,event:{clientX:C.x+3,clientY:C.y-8,width:C.width-2*3,height:C.width},open:!1},a),$=globalThis.document.createElement("div");T(b,$),b.component.props.open=!0,b.component.proxy.close=R,s.instance=b.component.proxy,s.instance.container=$,s.instance.props=b.component.props,s.index=i}function E(e,t){if(e.preventDefault(),!t||t.disabled){e.stopPropagation();return}const i=t.click&&typeof t.click=="function"?t.click:null;if(i){const u=i(t,n.args);(u===!1||u===null)&&e.stopPropagation()}t.children&&e.stopPropagation()}function R(){this.show=!1,this.self&&this.self.instance&&this.self.instance.close(),I(()=>{T(null,this.container)})}const{default:W,label:z,icon:S,suffix:N}=a,_=["v3-menus",r.class,n.menusClass];return()=>d(F,{to:"body"},{default:()=>[d(Y,{name:"menus-fade"},{default:()=>[y.value?d("div",{ref:k,class:_,style:j.value,onWheel:e=>e.preventDefault(),onContextmenu:e=>e.preventDefault()},[d("div",{class:"v3-menus-body"},[n.menus.map((e,t)=>{if(e.hidden)return null;if(W)return d("div",{onContextmenu:i=>E(i,e),onClick:i=>E(i,e),onMouseenter:i=>A(i,e,t)},[W({menu:e,activeIndex:v.value,index:t})]);{let i=[n.itemClass,"v3-menus-item",e.disabled?"v3-menus-disabled":"v3-menus-available"];return i=i.concat([e.divided?"v3-menus-divided":null,!e.disabled&&v.value===t?"v3-menus-active":null]),d("div",{style:e.style,class:i.join(" "),onClick:u=>E(u,e),onMouseenter:u=>A(u,e,t),onContextmenu:u=>E(u,e)},[O.value?d("div",{class:"v3-menus-icon "},[S?S({menu:e,activeIndex:v.value,index:t}):d("span",{innerHTML:e.icon},null)]):null,z?d("span",{class:"v3-menus-label"},[z({menu:e,activeIndex:v.value,index:t})]):d("span",{class:"v3-menus-label"},[e.label]),e.children||e.tip?d("div",{class:"v3-menus-suffix"},[N?N({menu:e,activeIndex:v.value,index:t}):e.children?"▶":e.tip?d("span",{class:"v3-menus-tip"},[e.tip]):null]):null])}})])]):null]})]})}});function p(n,a,r){let l={};Array.isArray(n)?l={menus:n,event:r,args:a,open:!1}:l={...n,args:a,event:r,open:!1};const c=d(H,l),x=globalThis.document.createElement("div");T(c,x),c.component.props.open=!0,c.component.proxy.closeAll=()=>{I(()=>{T(null,x)})},(l.prevent==null||l.prevent)&&r.preventDefault()}const Q={mounted(n,{value:a,arg:r}){const l=n.__vnode||{};r===void 0||r==="right"?n.addEventListener("contextmenu",p.bind(n,a,l.props||{})):r==="left"?n.addEventListener("click",p.bind(n,a,l.props||{})):r==="all"&&(n.addEventListener("contextmenu",p.bind(n,a,l.props||{})),n.addEventListener("click",p.bind(n,a,l.props||{})))},unmounted(n){n.removeEventListener("contextmenu",p),n.removeEventListener("click",p)}};export{Q as d};
