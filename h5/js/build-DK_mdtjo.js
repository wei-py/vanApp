import{_ as b}from"./vBtn-zxqsXpDO.js";import{m as _,_ as T}from"./makeForm-DgvH7MRW.js";import{m as k,a as m,b as g}from"./backfill-D0WLbo-C.js";import{j as s,t as q,c as w,h as n,e as C,x as U}from"./index-DwbTWwPI.js";import{l}from"./lodash-DhpMPSDc.js";import{c as R}from"./callPhone-BE-eBHF5.js";import{m as p}from"./makeDate-B53OOUvZ.js";import{w as N}from"./watchItem-O2p43iQ0.js";import{x as P}from"./xe-utils-DXe260hc.js";import{q as u}from"./queryUrl-BTYYWpY7.js";import{e as S,aX as x,al as D,N as c,u as I,F as L}from"./@vue-ts87NNlE.js";import"./vant-Ckwj66YG.js";import"./@vant-NmgEisJw.js";import"./makeUpload-DSH9fe2B.js";import"./axios-B4uVmeYG.js";import"./wait-Dqho1LKt.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./dayjs-DWD9bsSZ.js";const V=[k("施工信息"),{formType:"input",label:"施工单位",required:!0,value:"",name:"organization"},{formType:"input",label:"施工负责人",value:"",required:!0,placeholder:"自动获取, 可手动修改",name:"personLiable",backfill(i){this.value=i[this.name];const e=s(),r=e.curUserCompanyVo.permissionList;l.find(r,a=>a.name=="PER_CONSTRUCT").name&&!this.value&&(this.value=e.name)}},{formType:"input",label:"施工负责人电话",type:"number",placeholder:"自动获取, 可手动修改",name:"phone",required:!0,rightIcon:"phone",clickRightIcon(){R(this.value)},backfill(i){this.value=i[this.name];const e=s(),r=e.curUserCompanyVo.permissionList;l.find(r,a=>a.name=="PER_CONSTRUCT").name&&!this.value&&(this.value=e.phone)}},{...p({name:"startTime"}),label:"开工时间",required:!0},{...p({name:"actEndTime"}),label:"完工时间",required:!0},{formType:"input",label:"施工备注(选填)",value:"",placeholder:"请输入",name:"remarks"},{formType:"input",label:"完工组件功率",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"modulePower",...m("W")},{formType:"input",label:"完工组件数量",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"moduleNumberReality",...m("块")},{formType:"input",label:"完工容量",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"installedCapacityReality",...m("W"),backfill(i){N(["modulePower","moduleNumberReality"],([e,r])=>{const o=P.multiply(e*1,r*1),a=q(o);this.value=a.value,this.realValue=o,this.makeUnit(a.unit)})}}],ce={__name:"build",setup(i){const e=_({build:V}),r=w();S(()=>{o()});async function o(){const{data:t}=await n.get(u("order/get-construction",{...r}));g(e,t)}async function a(){const t=U();return await n.post("order/put-construction",t)}async function d(t){t.taskId="TASK_SGXX",await n.post(u("/approval/put-approval/bto/construction",t))}async function f(t){t.taskId="TASK_SGXX",await n.post("approval/do-approval/bto/construction",t)}return C({getData:o,saveData:a,submitData:d,approvalData:f}),(t,h)=>{const y=T,v=b;return x(),D(L,null,[c(y,{form:I(e).build,class:"pt-3","group-class":"shadowC"},null,8,["form"]),c(v)],64)}}};export{ce as default};
