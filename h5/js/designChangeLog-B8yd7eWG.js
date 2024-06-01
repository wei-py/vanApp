import{J as P,a as Q,h as Z,m as $,g as j,U as E,j as G,k as H,K as S}from"./vant-BF4L1TGb.js";import{_ as X}from"./vButton-BgoZqamI.js";import{_ as z,c as K,h as C}from"./index-B7VWkQ_2.js";import{q as V}from"./queryUrl-BTYYWpY7.js";import{b as g}from"./makeUpload-Du0F1yJj.js";import{l as R}from"./lodash-DhpMPSDc.js";import{r as y,e as O,b3 as D,aX as r,aj as f,bA as n,u as c,i as W,al as N,b1 as q,am as h,be as b,N as e,V as x,F as U}from"./@vue-ts87NNlE.js";import"./@vant-NmgEisJw.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const Y={class:"xCenter py-1 van-hairline--top-bottom flex-col"},ee={__name:"designChangeLog",setup(ae){const p=y(["1"]),T=K(),m=y([]),k={ZUJIAN:"组件",NBQ:"逆变器",CJQ:"采集器",PDX:"配电箱",ZLDL:"直流电缆",ZHIJIA:"支架"};O(()=>{w()});async function w(){const{data:i}=await C.get(V("design/record",T));m.value=i.map(t=>(t.structureChart=g(t.structureChart),t.electricalDiagram=g(t.electricalDiagram),t.materialList=g(t.materialList),t.pvData=[],t))}async function L(i){const{data:t}=await C.get(V("design/get-design-nbq-pv",{designId:i.id||i.designIdByPv}));if(!t.length){Q("没有数据");return}t.forEach(l=>{const u=[];for(let s=1;s<=20;s++)u.push(l[`pv${s}`]);R.isArray(i.nbqName)||(i.nbqName=[]),i[l.nbqName]=u,i.nbqName.push(l.nbqName)}),i.active=i.nbqName[0]}return(i,t)=>{const l=Z,u=D("vxe-column"),s=D("vxe-table"),B=X,I=$,A=j,v=E,_=G,M=H,F=S,J=P;return r(),f(J,{modelValue:c(p),"onUpdate:modelValue":t[0]||(t[0]=a=>W(p)?p.value=a:null)},{default:n(()=>[(r(!0),N(U,null,q(c(m),(a,d)=>(r(),f(F,{key:d,name:d,class:"!p-0"},{title:n(()=>[h("div",null,b(d==c(m).length-1?"初设评审":"设计变更记录 "+(c(m).length-d-1)),1),h("div",null,b(a.createTime),1)]),default:n(()=>[e(M,{inset:"",border:"",class:"!p-1 !m-0 border"},{default:n(()=>[e(l,{title:"设计类型",value:a.designType},null,8,["value"]),e(l,{title:"南坡组件数量",value:a.southModuleNumber+""},null,8,["value"]),e(l,{title:"北坡组件数量",value:a.northModuleNumber+""},null,8,["value"]),e(l,{title:"东坡组件数量",value:a.eastModuleNumber+""},null,8,["value"]),e(l,{title:"西坡组件数量",value:a.westModuleNumber+""},null,8,["value"]),e(l,{title:"是否有天窗",value:a.skyLight==0?"无":"有"},null,8,["value"]),e(l,{title:"组件朝向",value:a.moduleTowards},null,8,["value"]),e(l,{title:"方位角",value:a.azimuthAngle+" 度"},null,8,["value"]),e(l,{title:"倾斜角",value:a.tiltAngle+" 度"},null,8,["value"]),e(l,{title:"基底分类",value:a.moduleBaseType},null,8,["value"]),e(l,{title:"背板分类",value:a.moduleBackPlateType},null,8,["value"]),e(l,{title:"安装最高点(房屋+光伏总高度)",value:a.installedHeight+" 米"},null,8,["value"]),e(s,{data:a.designDevice,align:"center","header-align":"center","max-height":"400"},{default:n(()=>[e(u,{title:"设备类型"},{default:n(({row:o})=>[x(b(k[o.deviceType]),1)]),_:1}),e(u,{field:"deviceSpec",title:"规格型号"}),e(u,{field:"quantity",title:"设备数量"})]),_:2},1032,["data"]),h("div",Y,[e(B,{onClick:o=>L(a),class:"!mb-1"},{default:n(()=>[x(" 查看设计组串数量 ")]),_:2},1032,["onClick"]),e(A,{active:a.active,"onUpdate:active":o=>a.active=o},{default:n(()=>[(r(!0),N(U,null,q(a.nbqName,o=>(r(),f(I,{title:o},{default:n(()=>[e(s,{data:a[o],align:"center","header-align":"center","max-height":"400"},{default:n(()=>[e(u,{type:"seq",title:"PV"}),e(u,{field:"dc1",title:"DC1"}),e(u,{field:"dc2",title:"DC2"}),e(u,{field:"dc3",title:"DC3"}),e(u,{field:"dc4",title:"DC4"})]),_:2},1032,["data"])]),_:2},1032,["title"]))),256))]),_:2},1032,["active","onUpdate:active"])]),e(_,{name:"uploader",label:"结构图纸","input-align":"right"},{input:n(()=>[e(v,{modelValue:a.structureChart,"onUpdate:modelValue":o=>a.structureChart=o,"show-upload":!1,deletable:!1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(_,{name:"uploader",label:"电气图纸","input-align":"right"},{input:n(()=>[e(v,{modelValue:a.electricalDiagram,"onUpdate:modelValue":o=>a.electricalDiagram=o,"show-upload":!1,deletable:!1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(_,{name:"uploader",label:"物料清单","input-align":"right"},{input:n(()=>[e(v,{modelValue:a.materialList,"onUpdate:modelValue":o=>a.materialList=o,"show-upload":!1,deletable:!1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])}}},Ne=z(ee,[["__scopeId","data-v-18d270c9"]]);export{Ne as default};