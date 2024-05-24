import{_ as b}from"./vBtn-h-mmgtbW.js";import{m as _,_ as T}from"./makeForm-C_uyyvx9.js";import{m as k,a as m,b as g}from"./backfill-hh-glB-L.js";import{d as s,m as q,c as w,h as n,e as C,n as U}from"./index-NPFU1_kq.js";import{l}from"./lodash-C-AG1eJN.js";import{c as R}from"./callPhone-fUch2qLn.js";import{m as p}from"./makeDate-DLj2cL6Z.js";import{w as N}from"./watchItem-DrEA5LQt.js";import{x as P}from"./xe-utils-BM3aD2L3.js";import{q as u}from"./queryUrl-ggRt1bhs.js";import{e as S,Z as D,_ as I,N as c,u as L,F as V}from"./@vue-BhOIXUCP.js";import"./vant-DL9g20lT.js";import"./@vant-D2Uub16A.js";import"./makeUpload-FhoYjxox.js";import"./axios-B6xwUs71.js";import"./class-rRG2y2aF.js";import"./pinia-CQ-jtR3-.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-XNYRUkAR.js";import"./@vueuse-BaMGbt4d.js";import"./@x-ui-vue3-bC99Tnvx.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-VHbn-zkx.js";import"./vue3-photo-preview-Dedu722r.js";import"./vxe-table-BBegQXiE.js";import"./dom-zindex-GlLoxNk1.js";import"./dayjs-Bof1u0Bp.js";const x=[k("施工信息"),{formType:"input",label:"施工单位",required:!0,value:"",name:"organization"},{formType:"input",label:"施工负责人",value:"",required:!0,placeholder:"自动获取, 可手动修改",name:"personLiable",backfill(i){this.value=i[this.name];const e=s(),r=e.curUserCompanyVo.permissionList;l.find(r,a=>a.name=="PER_CONSTRUCT").name&&!this.value&&(this.value=e.name)}},{formType:"input",label:"施工负责人电话",type:"number",placeholder:"自动获取, 可手动修改",name:"phone",required:!0,rightIcon:"phone",clickRightIcon(){R(this.value)},backfill(i){this.value=i[this.name];const e=s(),r=e.curUserCompanyVo.permissionList;l.find(r,a=>a.name=="PER_CONSTRUCT").name&&!this.value&&(this.value=e.phone)}},{...p({name:"startTime"}),label:"开工时间",required:!0},{...p({name:"actEndTime"}),label:"完工时间",required:!0},{formType:"input",label:"施工备注(选填)",value:"",placeholder:"请输入",name:"remarks"},{formType:"input",label:"完工组件功率",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"modulePower",...m("W")},{formType:"input",label:"完工组件数量",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"moduleNumberReality",...m("块")},{formType:"input",label:"完工容量",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"installedCapacityReality",...m("W"),backfill(i){N(["modulePower","moduleNumberReality"],([e,r])=>{const o=P.multiply(e*1,r*1),a=q(o);this.value=a.value,this.realValue=o,this.makeUnit(a.unit)})}}],le={__name:"build",setup(i){const e=_({build:x}),r=w();S(()=>{o()});async function o(){const{data:t}=await n.get(u("order/get-construction",{...r}));g(e,t)}async function a(){const t=U();return await n.post("order/put-construction",t)}async function d(t){t.taskId="TASK_SGXX",await n.post(u("/approval/put-approval/bto/construction",t))}async function f(t){t.taskId="TASK_SGXX",await n.post("approval/do-approval/bto/construction",t)}return C({getData:o,saveData:a,submitData:d,approvalData:f}),(t,h)=>{const y=T,v=b;return D(),I(V,null,[c(y,{form:L(e).build,class:"pt-3","group-class":"shadowC"},null,8,["form"]),c(v)],64)}}};export{le as default};
