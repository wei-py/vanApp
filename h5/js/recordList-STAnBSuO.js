import{u as q,m as F,B as j,o as M,i as A,w as E,r as G}from"./vant-PdAvEskO.js";import{p as Q}from"./plainButton-B7WOCgiF.js";import{r as n,e as X,aX as p,al as b,N as t,bA as a,u as l,i as g,F as h,am as m,V as x,b1 as N,aj as D,be as w,bD as H,Q as J,R as K}from"./@vue-ts87NNlE.js";import{b as O,h as T}from"./index-D0ldpvYI.js";import{l as P}from"./lodash-D-SkTV7p.js";import{q as W}from"./queryUrl-DaTGvNW7.js";import"./@vant-NmgEisJw.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-DLUPp4BS.js";import"./xe-utils-CfMIR_ol.js";import"./@vue-office-D7CPqAIZ.js";import"./vue-demi-BO4xsXkA.js";import"./vue-B7fnMq6U.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-jb8ML41u.js";import"./vxe-table-CAWzlaHI.js";import"./dom-zindex-GlLoxNk1.js";const Y={class:"center"},Z={class:"xCenter"},ee={class:"flex justify-between"},te={class:"flex-1"},Be={__name:"recordList",setup(ae){O();const r=n(0),_=n([{title:"大备案",count:"0"},{title:"精准备案",count:"0"}]),d=n(""),f=n(!1),y=n(!1),C=n([]),i=n({pageNum:1,pageSize:10});X(()=>{});function k(o){C.value.length=0,i.value.pageNum=1,i.value.pageSize=10,B()}const B=P.debounce(V,300);async function V(){const{data:o}=await T.post(W("record/get",i.value),{recordType:r.value+1,recordCertificateId:d.value});C.value.push(...o.list);const e=o.total;f.value=!1,y.value=i.value.pageNum*i.value.pageSize>e,i.value.pageNum++;{const{data:c}=await T.get("record/count");_.value[0].count=c.bigRecordCnt,_.value[1].count=c.perRecordCnt}}return(o,e)=>{const c=j,S=q,$=Q,v=M,z=A,L=E,I=G,R=F;return p(),b(h,null,[t(S,{modelValue:l(d),"onUpdate:modelValue":e[1]||(e[1]=s=>g(d)?d.value=s:null),shape:"round",placeholder:"请输入搜索关键词","show-action":""},{action:a(()=>[m("div",Y,[t(c,{size:"small",type:"warning",class:"!bg-[#ffab30] !px-3 !mr-1",round:"",onClick:k},{default:a(()=>[x("搜索")]),_:1}),t(c,{size:"small",type:"warning",class:"!bg-[#ffab30] !px-3",round:"",onClick:e[0]||(e[0]=s=>o.$router.push({path:"/recordDetail"}))},{default:a(()=>[x("新建")]),_:1})])]),_:1},8,["modelValue"]),t(R,{active:l(r),"onUpdate:active":e[3]||(e[3]=s=>g(r)?r.value=s:null),"line-width":"0",ellipsis:!1,"title-active-color":"#ffab30",onChange:k,swipeable:""},{default:a(()=>[(p(!0),b(h,null,N(l(_),s=>(p(),D(I,null,{title:a(()=>[m("div",Z,w(s.title)+"("+w(s.count)+")",1)]),default:a(()=>[t(L,{loading:l(f),"onUpdate:loading":e[2]||(e[2]=u=>g(f)?f.value=u:null),finished:l(y),"finished-text":"没有更多了",onLoad:l(B),class:"!pt-2"},{default:a(()=>[(p(!0),b(h,null,N(l(C),(u,U)=>(p(),D(z,{key:U,inset:"",class:"p-1 !mb-2 shadowC !rounded-xl van-haptics-feedback",border:!1,onClick:H(le=>o.$router.push({path:"/recordDetail",query:{recordCertificateId:u.recordCertificateId}}),["stop"])},{default:a(()=>[t(v,{title:"备案证编码",class:"!py-1",border:!1,valueClass:"!text-left !text-[#323232]",titleClass:"!w-[130px] !flex-none"},{value:a(()=>[m("div",ee,[m("div",te,w(u.recordCertificateId),1),t($,{class:"!h-[18.7px] !px-5"},{default:a(()=>[x("详情")]),_:1})])]),_:2},1024),t(v,{title:"备案证类型",value:l(r)==0?"大备案证":"精准备案",class:"!py-1",border:!1,valueClass:"!text-left !text-[#323232]",titleClass:"!w-[130px] !flex-none"},null,8,["value"]),t(v,{title:"备案证容量",value:o.$unitConver(u.recordCertificateCapacity).result,class:"!py-1",border:!1,valueClass:"!text-left !text-[#323232]",titleClass:"!w-[130px] !flex-none"},null,8,["value"]),J(t(v,{title:"备案证剩余容量",value:o.$unitConver(u.surplusCapacity).result,class:"!py-1",border:!1,valueClass:"!text-left !text-[#323232]",titleClass:"!w-[130px] !flex-none"},null,8,["value"]),[[K,l(r)==0]])]),_:2},1032,["onClick"]))),128))]),_:1},8,["loading","finished","onLoad"])]),_:2},1024))),256))]),_:1},8,["active"])],64)}}};export{Be as default};
