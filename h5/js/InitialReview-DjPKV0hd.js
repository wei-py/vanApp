import{_ as E}from"./vBtn-zxqsXpDO.js";import{b as G,f as L,a as z,B as X,o as R,t as Z,N as K}from"./vant-Ckwj66YG.js";import{m as Y,_ as H}from"./makeForm-DgvH7MRW.js";import ee from"./designGroup-BZZzxKu8.js";import{r as te,c as D,t as ae,D as N,x as C,h as q,g as k,s as r,u as ie,e as le}from"./index-DwbTWwPI.js";import{l}from"./lodash-DhpMPSDc.js";import{b as w,m as x}from"./makeSelect-BqBItR9B.js";import{a as T}from"./arrayToVantColumns-BXijbtnA.js";import{a as p,m as h,b as ne}from"./backfill-D0WLbo-C.js";import{w as P}from"./watchItem-O2p43iQ0.js";import{x as se}from"./xe-utils-DXe260hc.js";import{c as oe,u as ce}from"./@vueuse-QQdVrKV8.js";import{m as B,a as F}from"./makeUpload-DSH9fe2B.js";import{r as re}from"./runTime-DAjLGjV1.js";import{q as M}from"./queryUrl-BTYYWpY7.js";import{r as ue,e as de,b3 as $,aX as U,al as pe,N as n,bA as d,u as c,F as me,V,be as ve,am as fe,aj as ye,ak as be}from"./@vue-ts87NNlE.js";import"./wait-Dqho1LKt.js";import"./@vant-NmgEisJw.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./class-COLQ8iHP.js";const ge=[{formType:"",name:"designGroupShow",value:!1,backfill(e){this.value=!1},getParam(e){delete e[this.name]}},{formType:"",name:"completeNbqPv",value:!1,backfill(e){this.value=e[this.name]},getParam(e){e[this.name]=this.value}},{name:"id",value:"",backfill(e){this.value=e.id},getParam(e){e.id=this.value}},{name:"designIdByPv",value:"",backfill(e){this.value=e.designIdByPv},getParam(e){e.designIdByPv=this.value}}],he=[{customSlot:"title",title:"基本信息",show:!1,click(){te.push({path:"/designChangeLog",query:{orderId:D().orderId}})},onMounted(){this.show=D().title=="设计变更信息"}},{formType:"input",label:"设计类型",required:!0,value:"",name:"designType",...w(),...x("designType",T(["一字型","人字型","阵列式","一字型+人字型","一字型+阵列式","人字型+阵列式"]))},{formType:"input",label:"南坡组件数量",type:"digit",value:"",placeholder:"请输入",name:"southModuleNumber",rules:[e=>e<0&&"请输入正整数或 0"]},{formType:"input",label:"北坡组件数量",type:"digit",value:"",placeholder:"请输入",name:"northModuleNumber",rules:[e=>e<0&&"请输入正整数或 0"]},{formType:"input",label:"东坡组件数量",type:"digit",value:"",placeholder:"请输入",name:"eastModuleNumber",rules:[e=>e<0&&"请输入正整数或 0"]},{formType:"input",label:"西坡组件数量",type:"digit",value:"",placeholder:"请输入",name:"westModuleNumber",rules:[e=>e<0&&"请输入正整数或 0"]},{formType:"input",label:"是否有天窗",required:!0,value:"",name:"skyLight",...w(),...x("skyLight",[{text:"无",value:0},{text:"有",value:1}])},{formType:"input",label:"组件朝向",value:"",name:"moduleTowards",...w(),...x("moduleTowards",T(["正南","东南","西南","正西","正东","正北","东北","西北"]))},{formType:"input",label:"方位角",required:!0,value:"",type:"digit",name:"azimuthAngle",rules:[e=>(e*1>359||e*1<0)&&"只允许输入 0-360 (含0, 不含360) 之间的数字, 不允许输入小数点, 不允许输入其他字符或中文"],...p("度")},{formType:"input",label:"倾斜角",required:!0,value:"",type:"digit",name:"tiltAngle",rules:[e=>(e*1>89||e*1<0)&&"只允许输入 0-89 (含0, 不含89) 之间的数字, 不允许输入小数点, 不允许输入其他字符或中文"],...p("度")},{formType:"input",label:"安装最高点(房屋+光伏总高度)",required:!0,value:"",name:"installedHeight",rules:[e=>e<0&&"高度不能为负数"],...p("米")}],qe=[h("组件"),{formType:"input",label:"设计组件功率",type:"digit",name:"deviceSpec",required:!0,...p("W"),backfill(e){const t=l.find(e.designDevice,["deviceType","ZUJIAN"]);this.value=l.get(t,this.name)}},{formType:"input",label:"设计组件数量",value:"",required:!0,type:"digit",name:"quantity",...p("块"),backfill(e){const t=l.find(e.designDevice,["deviceType","ZUJIAN"]);this.value=l.get(t,this.name)}},{formType:"input",label:"设计容量",placeholder:"自动计算",value:"",required:!0,readonly:!0,name:"installedCapacityDesign",...p("W"),backfill(){P(["deviceSpec","quantity"],([e,t])=>{const a=se.multiply(e,t);this.realValue=a;const i=ae(a);console.log(i,3333),this.value=i.realValue,this.makeUnit(i.unit)})}},{formType:"input",label:"基底分类",required:!0,value:"",name:"moduleBaseType",...w(),...x("moduleBaseType",T(["N型组件","P型组件"]))},{formType:"input",label:"背板分类",required:!0,value:"",name:"moduleBackPlateType",...w(),...x("moduleBackPlateType",T(["双玻双面","单玻单面"]))},{name:"zj",getParam(e){l.isArray(e.designDevice)||(e.designDevice=[]);const t={deviceSpec:e.deviceSpec,quantity:e.quantity,deviceType:"ZUJIAN"};e.designDevice.push(t),delete e.deviceSpec,delete e.quantity}}],we=[h("逆变器"),{formType:"input",label:"逆变器规格型号",type:"digit",name:"deviceSpec-nbq",value:"",...p("kW")},{formType:"input",label:"逆变器个数",type:"digit",name:"quantity-nbq",value:"",...p("个")},{formType:"cell",inputAlign:"center",titleClass:"xCenter",valueClass:"xCenter",name:"button-nbq",inlineForm:[{slot:"title",text:"添加",formType:"button",className:"bg-[#ddd] text-white h-8 w-[60%] rounded-2xl van-haptics-feedback ",disabled:!0,click(){const e=k("deviceSpec-nbq").value,t=k("quantity-nbq").value;r("table-nbq",a=>{a.value.push({deviceSpec:e+" kW",quantity:t});const i=l.groupBy(a.value,"deviceSpec"),u=l.mapValues(i,s=>l.sumBy(s,f=>f.quantity*1)),m=[];l.forIn(u,(s,f)=>{m.push({deviceSpec:f,quantity:s})}),a.value=m,r("deviceSpec-nbq","value",""),r("quantity-nbq","value",""),r("completeNbqPv","value",!1)})}},{slot:"value",text:"设计组串数量",formType:"button",className:"bg-[#ddd] text-white h-8 w-[60%] rounded-2xl van-haptics-feedback ",async click(){const e=ie();await e.saveData(),await e.getData(),r("designGroupShow","value",!0);const t=C(),a=l.pick(t,["id","orderId","designIdByPv"]),u=l.filter(t.designDevice,["deviceType","NBQ"]).reduce((m,s)=>(s=`${s.deviceSpec}*${s.quantity} `,m+=s,m),"");r("designGroupShow","query",{...a,table:u})}}],backfill(){P(["deviceSpec-nbq","quantity-nbq"],([e,t])=>{const a=new Boolean(e?.length&&t?.length).valueOf(),i=a?"yellow":"disabled";this.inlineForm[0].disabled=!a,this.inlineForm[0].className=this.inlineForm[0].className.replace(/bg-[^ ]+/,`bg-${i}`)})}},{customSlot:"table-nbq",formType:"",name:"table-nbq",value:[],backfill(e){this.value=(e.designDevice||[]).filter(t=>t.deviceType=="NBQ"),this.value.forEach(t=>{t.deviceSpec=t.deviceSpec+" kW"}),oe(()=>{const t=this.value,i=new Boolean(t?.length).valueOf()?"yellow":"disabled";return r("button-nbq",u=>{u.inlineForm[1].className=u.inlineForm[1].className.replace(/bg-[^ ]+/,`bg-${i}`)}),this.value})},getParam(e){l.isArray(e.designDevice)||(e.designDevice=[]);const t=this.value.map(a=>{const i=l.clone(a);return i.deviceSpec=i.deviceSpec.replace(/(\d+).*/,"$1"),i.deviceType="NBQ",delete i._X_ROW_KEY,i});e.designDevice.push(...t),delete e["deviceSpec-nbq"],delete e["quantity-nbq"]},remove(e){const t=this.value.findIndex(a=>a.deviceSpec==e.deviceSpec);this.value.splice(t,1),r("completeNbqPv","value",!1)}}],xe=[h("采集器"),{formType:"input",label:"采集器个数",type:"digit",name:"deviceSpec-cjq",required:!0,value:"",...p("个"),backfill(e){const t=l.find(e.designDevice,["deviceType","CJQ"]);this.value=l.get(t,"quantity")},getParam(e){l.isArray(e.designDevice)||(e.designDevice=[]);const t={quantity:this.value,deviceType:"CJQ"};e.designDevice.push(t),delete e["deviceSpec-cjq"]}}],ke=[h("配电箱"),{formType:"input",label:"配电箱规格型号",type:"digit",name:"deviceSpec-pdx",value:"",...p("A")},{formType:"input",label:"配电箱个数",type:"digit",name:"quantity-pdx",value:"",...p("个")},{formType:"input",inputAlign:"center",inlineForm:[{slot:"input",text:"添加",formType:"button",className:"bg-[#ddd] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",disabled:!0,click(){const e=k("deviceSpec-pdx").value,t=k("quantity-pdx").value;r("table-pdx",a=>{a.value.push({deviceSpec:e+" A",quantity:t});const i=l.groupBy(a.value,"deviceSpec"),u=l.mapValues(i,s=>l.sumBy(s,f=>f.quantity*1)),m=[];l.forIn(u,(s,f)=>{m.push({deviceSpec:f,quantity:s})}),a.value=m,r("deviceSpec-pdx","value",""),r("quantity-pdx","value","")})}}],backfill(){P(["deviceSpec-pdx","quantity-pdx"],([e,t])=>{const a=new Boolean(e?.length&&t?.length).valueOf(),i=a?"yellow":"disabled";this.inlineForm[0].disabled=!a,this.inlineForm[0].className=this.inlineForm[0].className.replace(/bg-[^ ]+/,`bg-${i}`)})}},{customSlot:"table-pdx",formType:"",name:"table-pdx",value:[],backfill(e){this.value=(e.designDevice||[]).filter(t=>t.deviceType=="PDX"),this.value.forEach(t=>{t.deviceSpec=t.deviceSpec+" A"})},getParam(e){l.isArray(e.designDevice)||(e.designDevice=[]);const t=this.value.map(a=>{const i=l.clone(a);return i.deviceSpec=i.deviceSpec.replace(/(\d+).*/,"$1"),i.deviceType="PDX",delete i._X_ROW_KEY,i});e.designDevice.push(...t),delete e["deviceSpec-pdx"],delete e["quantity-pdx"]},remove(e){const t=this.value.findIndex(a=>a.deviceSpec==e.deviceSpec);this.value.splice(t,1)}}],Te=[h("结构图纸"),{...B(999,100,"*"),formType:"input",label:"结构图纸",required:!0,name:"structureChart",backfill(e){l.bind(F,this)(e)},getParam(e){e[this.name]=JSON.stringify(e[this.name].map(t=>N(t)))}}],_e=[h("电气图纸"),{...B(999,100,"*"),formType:"input",label:"电气图纸",required:!0,name:"electricalDiagram",backfill(e){l.bind(F,this)(e)},getParam(e){e[this.name]=JSON.stringify(e[this.name].map(t=>N(t)))}}],Se=[h("物料清单"),{label:"(BOM) 物料清单",name:"materialList",...B(999,100,"*",!1,!1),backfill(e){l.bind(F,this)(e)},getParam(e){e[this.name]=e[this.name].map(t=>N(t))}},{formType:"input",inputAlign:"center",name:"saveMaterial",inlineForm:[{slot:"input",text:"只保存物料清单",formType:"button",className:"bg-yellow text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",async click(e=!0){const t=l.pick(C(),["id","orderId","materialList"]);(await q.post("design/update-material",t)).code==200&&e&&G("保存物料清单成功")}}]}],De={class:"flex justify-end"},nt={__name:"InitialReview",setup(e){const t=Y({basicInfoForm:he,zj:qe,nbq:we,cjq:xe,pdx:ke,structureChartForm:Te,electricalDiagramForm:_e,billMaterials:Se,show:ge}),a=D(),i=ue(null);de(()=>{re(u),ce(a.title)});async function u(){const v=M("order/get-design",{times:a.title=="初设评审信息"?0:100,...a}),{data:g}=await q.get(v);ne(t,g)}async function m(){const v=C();return r("saveMaterial",_=>{_.inlineForm[0].click(!1)}),await q.post("order/put-design",v)}async function s(v){if(v.completeNbqPv=k("completeNbqPv","value"),!v.completeNbqPv){z("设计组串数量中DC1和DC2是必填、是非零项");return}await q.post(M("approval/put-approval/bto/design",v))}async function f(v){await q.post("approval/do-approval/bto/design",v)}return le({getData:u,saveData:m,submitData:s,approvalData:f}),(v,g)=>{const _=X,j=R,y=H,b=$("vxe-column"),I=Z,A=$("vxe-table"),O=K,J=L,Q=E;return U(),pe(me,null,[n(y,{form:c(t).basicInfoForm,class:"pt-3","group-class":"shadowC"},{title:d(({slot:o})=>[n(j,{"title-class":"!text-[20px] bg-[#fff] pl-[20px] flex items-center  text-[#232323]",class:"!bg-[#fff] !p-0 h-[50px] !pr-[20px]"},{title:d(()=>[V(ve(o.title),1)]),value:d(()=>[fe("div",De,[o.show?(U(),ye(_,{key:0,round:"",block:"",size:"mini",class:"!text-[14px] !w-[120px] !py-3 !bg-[#ddd] !border-0 !text-[white]",onClick:()=>o.click()},{default:d(()=>[V(" 设计变更记录 ")]),_:2},1032,["onClick"])):be("",!0)])]),_:2},1024)]),_:1},8,["form"]),n(y,{form:c(t).zj,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(y,{form:c(t).nbq,class:"pt-3","group-class":"shadowC pb-9"},{"table-nbq":d(({slot:o})=>[n(A,{data:o.value,align:"center","header-align":"center"},{default:d(()=>[n(b,{type:"seq",width:"60",title:"序号"}),n(b,{field:"deviceSpec",title:"规格型号"}),n(b,{field:"quantity",title:"个数",width:"60"}),n(b,{field:"",title:"操作",width:"60"},{default:d(({row:S})=>[n(I,{name:"cross",color:"red",onClick:W=>o.remove(S)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["data"])]),_:1},8,["form"]),n(y,{form:c(t).cjq,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(y,{form:c(t).pdx,class:"pt-3","group-class":"shadowC pb-9"},{"table-pdx":d(({slot:o})=>[n(A,{data:o.value,align:"center","header-align":"center"},{default:d(()=>[n(b,{type:"seq",width:"60",title:"序号"}),n(b,{field:"deviceSpec",title:"规格型号"}),n(b,{field:"quantity",title:"个数",width:"60"}),n(b,{field:"",title:"操作",width:"60"},{default:d(({row:S})=>[n(I,{name:"cross",color:"red",onClick:W=>o.remove(S)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["data"])]),_:1},8,["form"]),n(y,{form:c(t).structureChartForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(y,{form:c(t).electricalDiagramForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(y,{form:c(t).billMaterials,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(J,{show:c(t).show[0].value,"onUpdate:show":g[1]||(g[1]=o=>c(t).show[0].value=o),position:"right",class:"w-full h-full"},{default:d(()=>[n(O,{title:"设计组串数量","left-text":"返回",onClickLeft:g[0]||(g[0]=o=>c(t).show[0].value=!1)}),n(ee,{ref_key:"designGroupDom",ref:i,query:c(t).show[0].query},null,8,["query"])]),_:1},8,["show"]),n(Q)],64)}}};export{nt as default};