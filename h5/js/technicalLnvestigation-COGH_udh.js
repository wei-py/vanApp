import{_ as T}from"./vBtn-B0QHeO6F.js";import{m as P,_ as N}from"./makeForm-b9Rv_zTa.js";import{m as c,a as f,b as q}from"./backfill-Knvieq5z.js";import{b as v,m as g}from"./makeSelect-VTItfMq-.js";import{c as h,h as i,s as B,g as b,f as x,q as S,b as U,e as V,v as A}from"./index-BiU8ePZK.js";import{l as R}from"./lodash-C1iNKp1x.js";import{q as d}from"./queryUrl-CUkA5NKU.js";import{w as y}from"./watchItem-DBceD2Mk.js";import{c as W}from"./callPhone-BzxCv0KQ.js";import{a as _}from"./arrayToVantColumns-BXijbtnA.js";import{c as j}from"./@vueuse-BYPNFz0v.js";import{m as u}from"./makeUpload-Vv_MC7yY.js";import{e as D,aX as k,al as I,N as n,u as l,ak as L,F as M}from"./@vue-BHA94vdH.js";import"./vant-xiv0EFx3.js";import"./@vant-BMzV8Unt.js";import"./class-rRG2y2aF.js";import"./pinia-BOLtM30a.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-BQWAt7JZ.js";import"./xe-utils-D22uZPtC.js";import"./dayjs-19KvoO9f.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-DYFNhZJM.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus--RpDJ8QK.js";import"./vue3-photo-preview-Byv7Qnko.js";import"./vxe-table-CbQjGgi9.js";import"./dom-zindex-GlLoxNk1.js";const O=[c("指派技术勘察员"),{formType:"input",label:"技术勘察员",name:"userId",required:!0,value:"",...v(),...g("userId",[],"dynamic"),async backfill(a){const e=d("user/get-by-permission",{permissions:"PER_JSKC",orderId:h()?.orderId}),{data:o}=await i.get(e),r=o.map(s=>({...s,text:s.name,value:s.userId}));y("userId",s=>{B("phone","value",R.find(r,["value",s])?.phone||"")}),this.makeSelect(a[this.name],r)}},{formType:"input",label:"技术勘察员手机号码",value:"",readonly:!0,placeholder:"系统抓取技术勘察员手机号码",name:"phone",rightIcon:"phone",clickRightIcon(){W(this.value)}},{formType:"cell",titleClass:" xCenter",inlineForm:[{slot:"title",formType:"button",text:"指派",round:!0,size:"small",type:"primary",class:" !py-1 !bg-[#ffab30] text-white !border-0 w-[30%]",async click(){const a=b("userId","realValue"),e=h();await i.post(d("appoint/jskc",{...e,userId:a})),location.reload()}}],backfill(a){const e=a.orderState.stageId,o=a.orderState.stateId;x().userId,e=="KAN_CHA"&&(this.inlineForm[0].text=o=="WAITING_APPOINT"?"指派":"重新指派"),y("userId",r=>{this.inlineForm[0].disabled=!new Boolean(r).valueOf()})}}],$=[c("基本信息"),{formType:"input",label:"拟安装逆变器品牌",name:"inverterBrand",value:"",required:!0,...v(),...g("inverterBrand",[],"dymatic"),async backfill(a){const{data:e}=await i.post("/sto/device-args/list?option=manufacturerShortName",{deviceType:"NBQ"});this.makeSelect(a[this.name],_(e))}},{formType:"input",label:"拟安装组件功率",value:"",placeholder:"请输入",type:"digit",name:"modulePower",...f("W")},{formType:"input",label:"拟安装组件数量",value:"",placeholder:"请输入",name:"moduleNumberReckon",type:"number",...f("块")},{formType:"input",label:"拟安装容量",realValue:"",value:"",readonly:!0,placeholder:"自动计算",realValue:0,name:"installedCapacityReckon",...f("W"),backfill(a){j(()=>{const e=b("modulePower").value*b("moduleNumberReckon").value;this.realValue=e;const o=S(e,2);return this.value=o.value,this.makeUnit(o.unit),e})}}],E=[c("屋顶无人机航拍图"),{...u(1,100,"",!0),label:"无人机全景俯视图(必填)",required:!0,name:"aerophotographWhole"},{...u(1,100,"",!0),label:"无人机(西北角往东南拍)(必填)",required:!0,name:"aerophotographNorthwest"},{...u(1,100,"",!0),label:"无人机(东北角往西南拍)(必填)",name:"aerophotographNortheast",required:!0}],G=[c("逆变器安装位置"),{...u(1,100,"",!0),label:"逆变器安装位置",name:"inverterPosition",required:!0}],K=[c("配电箱安装位置"),{...u(1,100,"",!0),label:"配电箱安装位置",name:"distributionBoxPosition",required:!0}],Q=[c("并网点位置"),{...u(1,100),label:"并网点位置水印相机定位照(选填)",name:"junctionLocation",required:!0},{formType:"input",label:"能否进随车吊",value:"",required:!0,name:"allowCrane",...v(),...g("allowCrane",_(["能","不能","不确定"]))}],z={key:0},we={__name:"technicalLnvestigation",setup(a){const e=P({reconnaissanceUserForm:O,basicMessageForm:$,aerophotographForm:E,inverterPositionForm:G,distributionBoxPositionForm:K,junctionLocationForm:Q}),o=U();D(()=>{r()});async function r(){const t=d("order/get-tec-kancha",{orderId:h()?.orderId}),{data:p}=await i.get(t);q(e,{...p,...p.appointUser})}async function s(){const t=A();return await i.post("order/put-tec-kancha",t)}async function w(t){await i.post(d("approval/put-approval/bto/tec-takan",t))}async function F(t){await i.post("approval/do-approval/bto/tec-takan",t)}return V({saveData:s,getData:r,submitData:w,approvalData:F}),(t,p)=>{const m=N,C=T;return k(),I(M,null,[n(m,{form:l(e).reconnaissanceUserForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),t.$get(l(o),"orderState.stateId")!="WAITING_APPOINT"?(k(),I("div",z,[n(m,{form:l(e).basicMessageForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(m,{form:l(e).aerophotographForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(m,{form:l(e).inverterPositionForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(m,{form:l(e).distributionBoxPositionForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),n(m,{form:l(e).junctionLocationForm,class:"pt-3","group-class":"shadowC"},null,8,["form"])])):L("",!0),n(C)],64)}}};export{we as default};
