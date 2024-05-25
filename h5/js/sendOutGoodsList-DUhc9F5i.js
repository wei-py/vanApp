import{p as X,j as A,J,B as H,l as K,C as P,r as W,o as Y}from"./vant-xiv0EFx3.js";import{_ as Z}from"./vButton-DxiVszE8.js";import{p as ee}from"./plainButton-CQdWUwau.js";import{r as u,e as te,X as ae,aX as f,al as B,N as t,bA as o,u as l,i as h,F as S,am as E,V as i,b1 as I,aj as N,Q as oe,bD as se}from"./@vue-BHA94vdH.js";import{_ as le,c as ne,b as re,h as ue,r as pe}from"./index-Dd7uG9g0.js";import{l as ie}from"./lodash-C1iNKp1x.js";import{q as de}from"./queryUrl-CUkA5NKU.js";import"./@vant-BMzV8Unt.js";import"./pinia-BOLtM30a.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-BQWAt7JZ.js";import"./@vueuse-BYPNFz0v.js";import"./xe-utils-D22uZPtC.js";import"./dayjs-19KvoO9f.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-DYFNhZJM.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus--RpDJ8QK.js";import"./vue3-photo-preview-Byv7Qnko.js";import"./vxe-table-BpFaW3Xd.js";import"./dom-zindex-GlLoxNk1.js";const ce={class:"yCenter"},ve={class:"grid grid-cols-1 gap-2 py-8 px-8"},fe={__name:"sendOutGoodsList",setup(_e){const _=u(""),k=ne(),d=u(k.state*1),O=u(["待发货","已发货"]),D=re(),c=u(!1),m=u(!1),x=u(!1),v=u([]),n=u({pageNum:1,pageSize:10,total:0}),b=u({FIRST_TO_SECOND:"一级仓库发二级仓库",FIRST_TO_SITE:"一级仓库发现场",SECOND_TO_SITE:"二级仓库发现场"}),y=ie.debounce($,300);async function $(){const r={...k,queryStr:_.value,state:d.value},{data:e}=await ue.post(de("sto/export-base/page",n.value),r),g=e.totalRow;n.value.total=g;const T=e.records.map((w,p)=>({...w,index:v.value.length+p+1}));v.value.push(...T),m.value=!1,x.value=n.value.pageNum*n.value.pageSize>g,n.value.pageNum++}function q(){n.value.pageNum=1,n.value.pageSize=10,v.value.length=0,x.value=!1,y()}function F(){c.value=!0}function V(){n.value.pageNum=1,n.value.pageSize=10,v.value.length=0,x.value=!1,y()}function G(r){pe.push({path:"/sendOutGoods",query:{title:b.value[r.stoExportBase.exportType],expId:r.stoExportBase.expId||"-",state:d.value,exportType:r.stoExportBase.exportType}})}return te(async()=>{}),(r,e)=>{const g=H,T=X,w=ee,p=K,C=Z,L=P,R=W,U=Y,z=A,j=J,M=ae("skeleton");return f(),B(S,null,[t(T,{modelValue:l(_),"onUpdate:modelValue":e[0]||(e[0]=s=>h(_)?_.value=s:null),onBlur:q,shape:"round",background:"#f3f3f3",placeholder:"系统编号、进件编号、组织全称、姓名、手机号","show-action":""},{action:o(()=>[E("div",ce,[t(g,{onClick:F,class:"!w-auto !h-[34px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white"},{default:o(()=>[i(" 新建 ")]),_:1})])]),_:1},8,["modelValue"]),t(z,{class:"flex-1 flex flex-col",active:l(d),"onUpdate:active":e[2]||(e[2]=s=>h(d)?d.value=s:null),background:"#f3f3f3","line-width":"80px",color:"#ffab30",onChange:V,swipeable:""},{default:o(()=>[(f(!0),B(S,null,I(l(O),s=>(f(),N(U,{title:s,key:s},{default:o(()=>[t(R,{loading:l(m),"onUpdate:loading":e[1]||(e[1]=a=>h(m)?m.value=a:null),finished:l(x),"finished-text":"没有更多了",onLoad:l(y),class:"!pt-2"},{default:o(()=>[(f(!0),B(S,null,I(l(v),a=>oe((f(),N(L,{key:a.index,inset:"",class:"px-2 py-4 !mb-2 shadowC !rounded-xl"},{default:o(()=>[t(p,{valueClass:"valueClass yellowText",titleClass:"titleClass",border:!1,title:"发货编号: ",value:a.stoExportBase.expId||"-"},{"right-icon":o(()=>[t(w,{class:"!h-[24px]",onClick:se(Q=>r.$copyText(a.stoExportBase.expId),["stop"])},{default:o(()=>[i(" 复制 ")]),_:2},1032,["onClick"])]),_:2},1032,["value"]),t(p,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"发货方: ",value:a.stoExportBase.shipperName||"-"},null,8,["value"]),t(p,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"发货类型: ",value:a.stoExportBase.exportType&&l(b)[a.stoExportBase.exportType]?l(b)[a.stoExportBase.exportType]:"-"},null,8,["value"]),t(p,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"收货组织: ",value:a.company&&a.company.name?a.company.name:"-"},null,8,["value"]),t(p,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"备注: ",value:a.stoExportBase.remark||"-"},null,8,["value"]),t(p,{border:!1,title:""},{default:o(()=>[t(C,{onClick:Q=>G(a)},{default:o(()=>[i(" 发货详情 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)),[[M,l(D).overlayShow]])),128))]),_:1},8,["loading","finished","onLoad"])]),_:2},1032,["title"]))),128))]),_:1},8,["active"]),t(j,{show:l(c),"onUpdate:show":e[6]||(e[6]=s=>h(c)?c.value=s:null),title:"","show-confirm-button":!1,"close-on-click-overlay":""},{default:o(()=>[E("div",ve,[t(C,{onClick:e[3]||(e[3]=s=>r.$router.push({path:"sendOutGoods",query:{expId:"",exportType:"FIRST_TO_SITE",title:"一级仓库发现场"}}))},{default:o(()=>[i(" 发货至现场 ")]),_:1}),t(C,{onClick:e[4]||(e[4]=s=>r.$router.push({path:"sendOutGoods",query:{expId:"",exportType:"FIRST_TO_SECOND",title:"一级仓库发二级仓库"}}))},{default:o(()=>[i(" 发货至二级仓库 ")]),_:1}),t(C,{onClick:e[5]||(e[5]=s=>c.value=!1),class:"!bg-white !text-[#232323]"},{default:o(()=>[i(" 取消 ")]),_:1})])]),_:1},8,["show"])],64)}}},Ge=le(fe,[["__scopeId","data-v-a7fa7d75"]]);export{Ge as default};