import{p as $,j as M,B as Q,l as G,C as X,r as Z,o as A}from"./vant-DL9g20lT.js";import{_ as H}from"./vButton-CI7Mesoe.js";import{p as J}from"./plainButton-Bx2E2oUm.js";import{r as n,e as K,X as P,Z as g,_ as C,N as a,a8 as t,u as s,i as T,F as x,a0 as W,V as y,a4 as w,Q as Y,a2 as aa,a1 as ea}from"./@vue-BhOIXUCP.js";import{_ as ta,c as oa,b as la,h as sa,r as na}from"./index-NPFU1_kq.js";import{l as ua}from"./lodash-C-AG1eJN.js";import{q as ca}from"./queryUrl-ggRt1bhs.js";import"./@vant-D2Uub16A.js";import"./pinia-CQ-jtR3-.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-XNYRUkAR.js";import"./@vueuse-BaMGbt4d.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-bC99Tnvx.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-VHbn-zkx.js";import"./vue3-photo-preview-Dedu722r.js";import"./vxe-table-BBegQXiE.js";import"./xe-utils-BM3aD2L3.js";import"./dayjs-Bof1u0Bp.js";import"./dom-zindex-GlLoxNk1.js";const ra={class:"yCenter"},ia={__name:"goodsRejectList",setup(pa){const v=n(""),B=oa(),p=n(B.state*1),S=la(),N=n(!1),f=n(!1),d=n(!1),u=n([]),o=n({pageNum:1,pageSize:10,total:0}),k=n({FIRST_TO_SECOND:"二级仓库退一级仓库",FIRST_TO_SITE:"现场退一级仓库",SECOND_TO_SITE:"现场退二级仓库",SITE:"现场退货"}),_=ua.debounce(I,300);async function I(){const c={...B,queryTag:v.value,state:p.value+2},{data:l}=await sa.post(ca("sto/stoBack/page",o.value),c),m=l.totalRow;o.value.total=m;const b=l.records.map((h,r)=>({...h,index:u.value.length+r+1}));u.value.push(...b),console.log(u.value),f.value=!1,d.value=o.value.pageNum*o.value.pageSize>m,o.value.pageNum++}function D(){o.value.pageNum=1,o.value.pageSize=10,u.value.length=0,d.value=!1,_()}function R(){N.value=!0}function V(){o.value.pageNum=1,o.value.pageSize=10,u.value.length=0,d.value=!1,_()}function E(c){na.push({path:"/goodsRejectDetail",query:{title:k.value[c.stoBack.backType],backId:c.stoBack?.backId||"",state:p.value,backType:c.stoBack.backType}})}return K(async()=>{u.value.length=0,d.value=!1,await _()}),(c,l)=>{const m=Q,b=$,h=J,r=G,L=H,q=X,F=Z,O=A,j=M,z=P("skeleton");return g(),C(x,null,[a(b,{modelValue:s(v),"onUpdate:modelValue":l[0]||(l[0]=i=>T(v)?v.value=i:null),onBlur:D,shape:"round",background:"#f3f3f3",placeholder:"系统编号、进件编号、组织全称、姓名、手机号","show-action":""},{action:t(()=>[W("div",ra,[a(m,{onClick:R,class:"!w-auto !h-[34px] shadow !px-[15px] !rounded-full !border-none !bg-[#ffab30] !text-white"},{default:t(()=>[y(" 新建 ")]),_:1})])]),_:1},8,["modelValue"]),a(j,{class:"flex-1 flex flex-col",active:s(p),"onUpdate:active":l[2]||(l[2]=i=>T(p)?p.value=i:null),background:"#f3f3f3","line-width":"80px",color:"#ffab30",onChange:V,swipeable:""},{default:t(()=>[(g(),C(x,null,w(["待发货","已发货"],i=>a(O,{title:i,key:i},{default:t(()=>[a(F,{loading:s(f),"onUpdate:loading":l[1]||(l[1]=e=>T(f)?f.value=e:null),finished:s(d),"finished-text":"没有更多了",onLoad:s(_),class:"!pt-2"},{default:t(()=>[(g(!0),C(x,null,w(s(u),e=>Y((g(),aa(q,{key:e.index,inset:"",class:"px-2 py-4 !mb-2 shadowC !rounded-xl"},{default:t(()=>[a(r,{valueClass:"valueClass yellowText",titleClass:"titleClass",border:!1,title:"退货编号: ",value:e.stoBack.backId||"-"},{"right-icon":t(()=>[a(h,{class:"!h-[24px]",onClick:ea(U=>c.$copyText(e.stoBack.backId),["stop"])},{default:t(()=>[y(" 复制 ")]),_:2},1032,["onClick"])]),_:2},1032,["value"]),a(r,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"退货方: ",value:e.stoBack.backName||"-"},null,8,["value"]),a(r,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"退货类型: ",value:e.stoBack.backType&&s(k)[e.stoBack.backType]?s(k)[e.stoBack.backType]:"-"},null,8,["value"]),a(r,{valueClass:"valueClass",titleClass:"titleClass",border:!1,title:"备注: ",value:e.stoBack.remark||"-"},null,8,["value"]),a(r,{border:!1,title:""},{default:t(()=>[a(L,{onClick:U=>E(e)},{default:t(()=>[y(" 退货详情 ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)),[[z,s(S).overlayShow]])),128))]),_:1},8,["loading","finished","onLoad"])]),_:2},1032,["title"])),64))]),_:1},8,["active"])],64)}}},Ea=ta(ia,[["__scopeId","data-v-b70e7af1"]]);export{Ea as default};
