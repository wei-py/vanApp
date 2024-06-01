import{_ as b}from"./vBtn-LXvsT-fh.js";import{_}from"./vantForm-CNH6TuWQ.js";import{m as T,a as m}from"./makeTitle-CzVkaK9t.js";import{j as s,w as k,c as g,h as n,e as q,y as w}from"./index-B7VWkQ_2.js";import{l}from"./lodash-DhpMPSDc.js";import{c as C}from"./callPhone-BS-WdTEt.js";import{m as p}from"./makeDate-CQnJhoTh.js";import{w as U}from"./watchItem-DUEI_3OU.js";import{x as R}from"./xe-utils-DXe260hc.js";import{m as N}from"./makeForm-BmsmFLmR.js";import{q as u}from"./queryUrl-BTYYWpY7.js";import{b as P}from"./backfill-BoX-74Dj.js";import{e as S,aX as D,al as I,N as c,u as L,F as V}from"./@vue-ts87NNlE.js";import"./vant-BF4L1TGb.js";import"./@vant-NmgEisJw.js";import"./makeUpload-Du0F1yJj.js";import"./axios-B4uVmeYG.js";import"./wait-Dqho1LKt.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./dayjs-DWD9bsSZ.js";const X=[T("施工信息"),{formType:"input",label:"施工单位",required:!0,value:"",name:"organization"},{formType:"input",label:"施工负责人",value:"",required:!0,placeholder:"自动获取, 可手动修改",name:"personLiable",backfill(i){this.value=i[this.name];const e=s(),r=e.curUserCompanyVo.permissionList;l.find(r,a=>a.name=="PER_CONSTRUCT").name&&!this.value&&(this.value=e.name)}},{formType:"input",label:"施工负责人电话",type:"number",placeholder:"自动获取, 可手动修改",name:"phone",required:!0,rightIcon:"phone",clickRightIcon(){C(this.value)},backfill(i){this.value=i[this.name];const e=s(),r=e.curUserCompanyVo.permissionList;l.find(r,a=>a.name=="PER_CONSTRUCT").name&&!this.value&&(this.value=e.phone)}},{...p({name:"startTime"}),label:"开工时间",required:!0},{...p({name:"actEndTime"}),label:"完工时间",required:!0},{formType:"input",label:"施工备注(选填)",value:"",placeholder:"请输入",name:"remarks"},{formType:"input",label:"完工组件功率",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"modulePower",...m("W")},{formType:"input",label:"完工组件数量",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"moduleNumberReality",...m("块")},{formType:"input",label:"完工容量",required:!0,value:"",readonly:!0,placeholder:"系统抓取施工设备信息-组件数据",name:"installedCapacityReality",...m("W"),backfill(i){U(["modulePower","moduleNumberReality"],([e,r])=>{const o=R.multiply(e*1,r*1),a=k(o);this.value=a.value,this.realValue=o,this.makeUnit(a.unit)})}}],fe={__name:"build",setup(i){const e=N({build:X}),r=g();S(()=>{o()});async function o(){const{data:t}=await n.get(u("order/get-construction",{...r}));P(e,t)}async function a(){const t=w();return await n.post("order/put-construction",t)}async function d(t){t.taskId="TASK_SGXX",await n.post(u("/approval/put-approval/bto/construction",t))}async function f(t){t.taskId="TASK_SGXX",await n.post("approval/do-approval/bto/construction",t)}return q({getData:o,saveData:a,submitData:d,approvalData:f}),(t,h)=>{const y=_,v=b;return D(),I(V,null,[c(y,{form:L(e).build,class:"pt-3","group-class":"shadowC"},null,8,["form"]),c(v)],64)}}};export{fe as default};