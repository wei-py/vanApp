import{t as E,i as L,u as F,m as G,w as P,B as K,r as M,z as O}from"./vant-Ckwj66YG.js";import{X,Q as j,u as s,aX as l,aj as T,bA as _,al as b,am as e,be as n,N as v,bD as Q,V as $,F as y,b1 as V,G as R,a_ as Y,aY as H,r as p,e as J,i as N}from"./@vue-ts87NNlE.js";import{a as c,l as W}from"./lodash-DhpMPSDc.js";import{p as Z}from"./plainButton-DKgtdQgL.js";import{_ as A,b as ee,n as te,c as se,h as q}from"./index-DwbTWwPI.js";import{q as ae}from"./queryUrl-BTYYWpY7.js";import"./@vant-NmgEisJw.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const oe=h=>(Y("data-v-ad6c9614"),h=h(),H(),h),ne={class:"flex h-10 bar items-center y-Center px-1"},ie={class:"min-w-4 px-1 h-4 ml-2 text-sm shadowC flex items-center justify-center text-white rounded-full bg-[#ffab30]"},re={class:"mx-2"},le={class:"flex-1 justify-end pr-1 flex"},ce={class:"px-4 text-[14px] pb-[5px]"},de={class:"font-bold min-h-8 text-[16px] yCenter justify-between"},ue={class:"text-[#ffab30]"},me={class:"min-h-6 yCenter"},pe={class:"inline-flex justify-between"},_e=oe(()=>e("div",{class:"pr-2 leading-6"},"当前阶段:",-1)),ve={class:"leading-6"},he={class:"min-h-6 yCenter"},fe={class:"min-h-6 yCenter"},ge={class:"min-min-h-6 yCenter"},xe={class:"min-h-6 yCenter"},be={class:"min-h-6 yCenter"},Ce={__name:"card",props:["item"],setup(h){const t=h,f=ee(),i=te();function d(a){const u=i[a.taskId]||i[a.stageId]||"-",m=i[a.stateId]||"-";return`${u} - ${m}`}return(a,u)=>{const m=E,I=L,w=X("skeleton-item"),k=X("skeleton");return j((l(),T(I,{inset:"",class:"!mb-2 shadowC van-haptics-feedback !rounded-xl"},{default:_(()=>[j((l(),b("div",null,[e("div",ne,[e("div",ie,n(t.item.index),1),e("div",re,n(t.item.orderBase.orderId),1),e("div",le,[v(Z,{class:"!h-[18.7px]",onClick:u[0]||(u[0]=Q(g=>a.$copyText(t.item.orderBase.orderId),["stop"]))},{default:_(()=>[$("复制")]),_:1})])]),e("article",ce,[e("div",de,[e("div",null,n(s(c.get)(t.item,"customer.name")||s(c.get)(t.item,"customerOrg.orgName")),1),e("div",ue,[$("详情 "),v(m,{name:"arrow"})])]),e("div",me,"进件编号: "+n(s(c.get)(t.item,"leaseReview.contractNumber","-")),1),e("div",pe,[_e,e("div",ve,[(l(!0),b(y,null,V(t.item.currentOrderState,g=>(l(),b("div",{key:g,class:R(`text-${a.$statusColor(s(i)[g.stateId])}`)},n(d(g)),3))),128))])]),e("div",he,"所属组织: "+n(s(c.get)(t.item,"company.name","")),1),e("div",fe,"销售人员: "+n(s(c.get)(t.item,"orderBase.salesman","-")),1),e("div",ge,"详细地址: "+n(s(c.get)(t.item,"orderBase.installationAddress","-")),1),e("div",xe,"资方名称: "+n(a.$investorIdDic[s(c.get)(t.item,"orderBase.investorId","-")]),1),e("div",be,"订单创建时间: "+n(s(c.get)(t.item,"orderBase.createTime","-")),1)])])),[[w]])]),_:1})),[[k,s(f).overlayShow]])}}},ye=A(Ce,[["__scopeId","data-v-ad6c9614"]]),Ie={class:"yCenter"},we={class:"xCenter"},ke={class:"xCenter"},Se={__name:"designChange",setup(h){const t=p("");se();const f=p(""),i=p([{taskId:"TASK_CSPSXX_UPDATE",stateName:"设计变更",count:0},{taskId:"TASK_CSPSXX",stateName:"一键变更",count:0}]),d=p({pageNum:1,pageSize:10,total:0}),a=p(!1),u=p(!1),m=p([]);function I(){}async function w(){const{data:x}=await q.get("design/record-count");i.value[1].count=x[0].count,i.value[0].count=x[1].count}const k=W.debounce(g,300);async function g(){const x={...i.value[f.value],queryTag:t.value,stageId:"DESIGN"},{data:r}=await q.post(ae("/order/search-exclude-states",d.value),x),C=r.total;d.value.total=C;const S=r.list.map((B,D)=>({...B,index:m.value.length+D+1}));m.value.push(...S),a.value=!1,u.value=d.value.pageNum*d.value.pageSize>C,d.value.pageNum++}return J(()=>{}),(x,r)=>{const C=K,S=F,B=M,D=G,U=P,z=O;return l(),b(y,null,[v(S,{modelValue:s(t),"onUpdate:modelValue":r[0]||(r[0]=o=>N(t)?t.value=o:null),shape:"round",background:"#fff",placeholder:"系统编号、进件编号、组织全称、姓名、手机号","show-action":"",class:"van-hairline--bottom"},{action:_(()=>[e("div",Ie,[v(C,{onClick:I,class:"!w-auto !h-[30px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white"},{default:_(()=>[$(" 搜索 ")]),_:1})])]),_:1},8,["modelValue"]),v(D,{active:s(f),"onUpdate:active":r[1]||(r[1]=o=>N(f)?f.value=o:null),"line-width":"0",ellipsis:!1,"title-active-color":"#ffab30",onChange:w},{default:_(()=>[(l(!0),b(y,null,V(s(i),o=>(l(),T(B,null,{title:_(()=>[e("div",we,n(o.count),1),e("div",ke,n(o.stateName),1)]),_:2},1024))),256))]),_:1},8,["active"]),v(U,{loading:s(a),"onUpdate:loading":r[2]||(r[2]=o=>N(a)?a.value=o:null),finished:s(u),"finished-text":"没有更多了",onLoad:s(k),class:"!pt-2"},{default:_(()=>[(l(!0),b(y,null,V(s(m),o=>(l(),T(ye,{key:o.orderBase.orderId,onClick:Be=>x.$router.push({path:"/itemDetail",query:{orderId:o.orderBase.orderId}}),item:o},null,8,["onClick","item"]))),128))]),_:1},8,["loading","finished","onLoad"]),v(z,{class:"!bg-[#fed38c]"})],64)}}},Ye=A(Se,[["__scopeId","data-v-3b04dda5"]]);export{Ye as default};
