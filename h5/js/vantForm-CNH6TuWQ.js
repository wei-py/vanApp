import{$ as N,L as $,k as B,F as W}from"./vant-BF4L1TGb.js";import{e as L,o as S,b3 as M,aX as c,al as y,b1 as F,F as x,b2 as V,aj as p,ar as E,u as n,bA as u,N as k,ak as v,V as P,P as T,bD as I,b4 as O,i as j,c as D,X as z,Q as G,G as X}from"./@vue-ts87NNlE.js";import{N as A,E as d,H,b as Q}from"./index-B7VWkQ_2.js";import{l as i,a as q}from"./lodash-DhpMPSDc.js";import{f as J}from"./makeForm-BmsmFLmR.js";const K={__name:"recuDynComponent",props:{form:{},title:{},titleClass:{},fullPath:{}},setup(b){Date.now()+i.random(0,100);const g=location.port==2222?"/orderh5":"",a=b;function m(s){const t=[];return i.omit(s,["formType","inlineForm","realValue","ref",...t])}function h(s){let t=!1;return i.isBoolean(s.hidden)&&(t=s.hidden),i.isFunction(s.hidden)&&(t=s.hidden()),j(s.hidden)&&(t=s.hidden),t}function U(s,t){}L(()=>{}),S(()=>{});function r(s,t,..._){return i.isFunction(s[t])?s[t](..._,s):()=>{}}return(s,t)=>{const _=M("recuDynComponent",!0),f=N,l=$;return c(!0),y(x,null,F([a.form].flat(),(o,C)=>(c(),y(x,{key:C},[V(s.$slots,o.customSlot),h(o)?v("",!0):(c(),p(O(n(J)[o.formType]),T({key:0,ref_for:!0,ref:e=>void 0,modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,show:o.show,"onUpdate:show":e=>o.show=e},m(o),{beforeRead:(...e)=>r(o,"beforeRead",...e),onClick:I((...e)=>r(o,"click",...e),["stop"]),onClose:(...e)=>r(o,"close",...e),onFinish:(...e)=>r(o,"finish",...e),onClickRightIcon:(...e)=>r(o,"clickRightIcon",...e),onClickLeftIcon:(...e)=>r(o,"clickLeftIcon",...e),onClickOverlay:I((...e)=>r(o,"clickOverlay",...e),["stop"]),onConfirm:(...e)=>r(o,"confirm",...e),onInput:(...e)=>r(o,"input",...e),onBlur:(...e)=>r(o,"blur",...e),onSelect:(...e)=>r(o,"select",...e),onClickPreview:(...e)=>r(o,"clickPreview",...e),onCancel:(...e)=>r(o,"cancel",...e),"onUpdate:modelValue":(...e)=>r(o,"updateValue",...e)}),E({"preview-cover":u(e=>[n(A)(e)?(c(),p(f,{key:1,src:e.url||e.objectUrl,class:"w-[80px] h-[80px] bg-[#f7f8fa]",fit:"cover"},{error:u(()=>[P("加载失败")]),loading:u(()=>[k(l,{type:"spinner",size:"20"})]),_:2},1032,["src"])):(c(),y(x,{key:0},[n(d)(e).endsWith(".pdf")?(c(),p(f,{key:0,src:`.${n(g)}/icons/office/pdf.svg`,class:"w-[80px] h-[80px] !rounded-[8px] bg-[#f7f8fa]",fit:"contain"},null,8,["src"])):v("",!0),n(d)(e).endsWith(".ppt")||n(d)(e).endsWith(".pptx")?(c(),p(f,{key:1,src:`.${n(g)}/icons/office/ppt.svg`,class:"w-[80px] h-[80px] !rounded-[8px] bg-[#f7f8fa]",fit:"contain"},null,8,["src"])):v("",!0),n(d)(e).endsWith(".docx")||n(d)(e).endsWith(".doc")?(c(),p(f,{key:2,src:`.${n(g)}/icons/office/word.svg`,class:"w-[80px] h-[80px] !rounded-[8px] bg-[#f7f8fa]",fit:"contain"},null,8,["src"])):v("",!0),n(d)(e).endsWith(".xlsx")||n(d)(e).endsWith(".xls")?(c(),p(f,{key:3,src:`.${n(g)}/icons/office/excel.svg`,class:"w-[80px] h-[80px] !rounded-[8px] bg-[#f7f8fa]",fit:"contain"},null,8,["src"])):v("",!0)],64))]),_:2},[F(n(q.get)(o,"inlineForm",[]),e=>({name:e.slot,fn:u(()=>[k(_,{form:e},null,8,["form"])])}))]),1040,["modelValue","onUpdate:modelValue","show","onUpdate:show","beforeRead","onClick","onClose","onFinish","onClickRightIcon","onClickLeftIcon","onClickOverlay","onConfirm","onInput","onBlur","onSelect","onClickPreview","onCancel"]))],64))),128)}}},se={__name:"vantForm",props:{form:{},title:{},titleClass:{},groupClass:{},approvalName:{},readonly:{},disabled:{},showErrorMessage:{}},emits:["submit"],setup(b,{emit:g}){const a=b,m=H(),h=Q(),U=D(()=>i.isUndefined(a.readonly)?!h.btns.canEdit:a.readonly),r=D(()=>i.isUndefined(a.disabled)?!h.btns.canEdit:a.disabled),s=D(()=>i.isUndefined(a.showErrorMessage)?h.btns.canEdit:a.showErrorMessage),t=[a.form].flat().filter(l=>l?.customSlot).map(l=>l.customSlot);function _(l){return i.find(a.form,o=>o.customSlot==l)}function f(l){l&&m.submitDoms.push(l),a.approvalName&&(m.approvalDoms[a.approvalName]=l)}return S(()=>{m.submitDoms.length=0,m.approvalDoms={}}),(l,o)=>{const C=B,e=W,R=z("skeleton");return G((c(),p(e,{ref:f,readonly:n(U),disabled:n(r),"show-error-message":n(s)},{default:u(()=>[k(C,{inset:"",class:X([a.groupClass,""])},{default:u(()=>[k(K,{form:a.form},E({_:2},[F(n(t),w=>({name:w,fn:u(()=>[V(l.$slots,w,{slot:_(w)})])}))]),1032,["form"])]),_:3},8,["class"])]),_:3},8,["readonly","disabled","show-error-message"])),[[R,n(h).overlayShow]])}}};export{se as _};
