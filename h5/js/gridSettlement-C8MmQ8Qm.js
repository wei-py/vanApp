import{_ as g}from"./vBtn-LXvsT-fh.js";import{_ as v}from"./vantForm-CNH6TuWQ.js";import{m as l,a as i}from"./makeTitle-CzVkaK9t.js";import{b,m as k}from"./makeSelect-CYTCxxsZ.js";import{m as T,a as h}from"./makeUpload-Du0F1yJj.js";import{E as F,c as q,h as a,e as w,y as x}from"./index-B7VWkQ_2.js";import{l as D}from"./lodash-DhpMPSDc.js";import{m as P}from"./makeForm-BmsmFLmR.js";import{q as s}from"./queryUrl-BTYYWpY7.js";import{b as S}from"./backfill-BoX-74Dj.js";import{e as U,aX as B,al as N,N as o,u as n,F as O}from"./@vue-ts87NNlE.js";import"./vant-BF4L1TGb.js";import"./@vant-NmgEisJw.js";import"./wait-Dqho1LKt.js";import"./class-COLQ8iHP.js";import"./axios-B4uVmeYG.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const A=[l("资料结算信息"),{formType:"input",label:"结算类型",value:3,required:!0,placeholder:"请输入",readonly:!0,name:"settlementType",...b(),...k("settlementType",[{text:"资方结算",value:1},{text:"供应商并网结算",value:2},{text:"供应商资料结算",value:3}]),onMounted(){this.click=()=>{},this.isLink=!1}},{formType:"input",label:"供应商可结算金额",value:"",...i("元"),type:"digit",required:!0,placeholder:"请输入",name:"settlementAmount"},{formType:"input",label:"供应商质保金金额",value:"",required:!0,...i("元"),type:"digit",placeholder:"请输入",name:"recognizance"}],I=[l("资料结算发票"),{...T(999,100),formType:"input",label:"PDF或图片附件",required:!0,name:"receipt",backfill(e){e.receipt=JSON.parse(e.receipt),D.bind(h,this)(e)},getParam(e){e.receipt=e.receipt.map(r=>F(r)),e.receipt=JSON.stringify(e.receipt)}}],ct={__name:"gridSettlement",setup(e){const r=P({settlementForm:A,receiptForm:I}),c=q();U(()=>{m()});async function m(){let{data:t}=await a.get(s("order/get-grid-settlement",{orderId:c.orderId,type:3}));t={...t,settlementType:3,approvalType:"APPROVAL_BTO"},S(r,t)}async function u(){const t=x();return await a.post("order/put-grid-settlement",t)}async function f(t){t.setType=3,await a.post(s("approval/put-approval/bto/settle",t))}async function d(t){t.setType=3,await a.post("approval/do-approval/bto/settle",t)}return w({getData:m,saveData:u,submitData:f,approvalData:d}),(t,y)=>{const p=v,_=g;return B(),N(O,null,[o(p,{form:n(r).settlementForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),o(p,{form:n(r).receiptForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),o(_)],64)}}};export{ct as default};