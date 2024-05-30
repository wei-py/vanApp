import{t as B,a as f,m as F,r as P}from"./vant-Ckwj66YG.js";import{_ as R}from"./vBtn-zxqsXpDO.js";import{m as S,_ as U}from"./makeForm-DgvH7MRW.js";import{_ as X}from"./cell-TiIRt60h.js";import{d as $,b3 as L,aX as H,aj as V,bA as m,N as l,ak as W,u as I,r as K,e as E}from"./@vue-ts87NNlE.js";import{m as _,a as T,b as G}from"./backfill-D0WLbo-C.js";import{o as Z}from"./openCode-2d1zXH1i.js";import{g as p,s as r,c as d,b as k,h as g,t as O,_ as ee,e as te,x as ie}from"./index-DwbTWwPI.js";import{d as b}from"./dayjs-DWD9bsSZ.js";import{l as c}from"./lodash-DhpMPSDc.js";import{w}from"./watchItem-O2p43iQ0.js";import{b as N,m as q}from"./makeSelect-BqBItR9B.js";import{a as ae}from"./arrayToVantColumns-BXijbtnA.js";import{t as le}from"./@vueuse-QQdVrKV8.js";import{q as z}from"./queryUrl-BTYYWpY7.js";import"./@vant-NmgEisJw.js";import"./makeUpload-DSH9fe2B.js";import"./axios-B4uVmeYG.js";import"./wait-Dqho1LKt.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./xe-utils-DXe260hc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const Y={__name:"vxTable",props:{title:{default:""},slot:{default:{value:[],remove:e=>{}}}},setup(e){const t=e,a=$({seqMethod(i){return`${i.data.length-i.rowIndex}`}});return(i,s)=>{const u=L("vxe-column"),o=X,j=B,J=L("vxe-table");return H(),V(J,{data:t.slot.value,"seq-config":I(a),align:"center","header-align":"center","max-height":"400"},{default:m(()=>[l(u,{type:"seq",width:"50",title:"序号"}),l(u,{field:"",title:"详细信息"},{default:m(({row:h})=>[l(o,{title:t.title+"名称",value:h.deviceNumber},null,8,["title","value"]),l(o,{title:t.title+"厂家",value:h.manufacturer},null,8,["title","value"]),l(o,{title:t.title+"型号",value:h.specificationsModel},null,8,["title","value"]),l(o,{title:"采集时间",value:h.createTime},null,8,["value"]),h.valid?(H(),V(o,{key:0,title:"错误信息",value:h.valid},null,8,["value"])):W("",!0)]),_:1}),l(u,{field:"",title:"操作",width:"50"},{default:m(({row:h})=>[l(j,{name:"cross",color:"red",onClick:A=>t.slot.remove(h)},null,8,["onClick"])]),_:1})]),_:1},8,["data","seq-config"])}}},se=[_("组件"),{formType:"input",label:"组件编号",value:"",name:"deviceNumber-zujian",rightIcon:"scan",clickRightIcon(){Z(e=>{r("table-zujian",t=>{t.value.length==p("ysgs-zujian","value")?f("超出应收个数了"):t.value.unshift({deviceType:"ZUJIAN",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-zujian","value","")})})}},{formType:"input",label:"设计容量",name:"quantity",value:"",readonly:!0,...T("W"),backfill(e){const a=c.get(e,"ZUJIAN.designDevice").reduce((s,u)=>s+u.quantity*u.deviceSpec,0),i=O(a,0,["W","kW","MW"]);this.value=i.value,this.makeUnit(i.unit)}},{formType:"input",label:"实收块数",name:"ssgs",value:"0",readonly:!0,...T("块"),backfill(){w("table-zujian",e=>{this.value=e.length})}},{formType:"input",label:"应收块数",name:"ysgs-zujian",value:"",readonly:!0,...T("块"),backfill(e){const t=c.get(e,"ZUJIAN.designDevice");this.value=t.reduce((a,i)=>a+i.quantity,0)}},{formType:"input",inputAlign:"center",inlineForm:[{slot:"input",formType:"button",text:"添加",className:"bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",click(){const e=p("deviceNumber-zujian","value");if(!e.length){f("请先输入组件编号");return}r("table-zujian",t=>{t.value.length==p("ysgs-zujian","value")?f("超出应收个数了"):t.value.unshift({deviceType:"ZUJIAN",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-zujian","value","")})}}]},{customSlot:"table",name:"table-zujian",value:[],backfill(e){const t=c.get(e,"ZUJIAN.checkDeviceValidRes.deviceVos")||[];this.value=t.map(a=>c.pick(a,["deviceNumber","manufacturer","specificationsModel","createTime","valid","deviceType"]))},getParam(e){delete e["deviceNumber-zujian"],delete e.ssgs,delete e["ysgs-zujian"];const t=this.value.map(i=>(i.createTime=b().format("YYYY-MM-DD HH:MM:ss"),i.orderId=d().orderId,i));k().deviceInfoType=="ZUJIAN"&&(e.deviceType="ZUJIAN",e.devices=t)},remove(e){const t=this.value.findIndex(a=>a.deviceNumber==e.deviceNumber);this.value.splice(t,1)}}],ce=[_("逆变器"),{formType:"input",label:"逆变器编号",value:"",name:"deviceNumber-nbq",rightIcon:"scan",clickRightIcon(){Z(e=>{r("table-nbq",t=>{t.value.length==p("ysgs-nbq","value")?f("超出应收个数了"):t.value.unshift({deviceType:"NBQ",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-nbq","value","")})})}},{formType:"input",label:"实收块数",name:"ssgs",value:"0",...T("块"),backfill(){w("table-nbq",e=>{this.value=e.length})}},{formType:"input",label:"应收块数",name:"ysgs-nbq",value:"",...T("块"),backfill(e){const t=c.get(e,"NBQ.designDevice");this.value=t.reduce((a,i)=>a+i.quantity,0)}},{formType:"input",inputAlign:"center",inlineForm:[{slot:"input",formType:"button",text:"添加",className:"bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",click(){const e=p("deviceNumber-nbq","value");if(!e.length){f("请先输入组件编号");return}r("table-nbq",t=>{t.value.length==p("ysgs-nbq","value")?f("超出应收个数了"):t.value.unshift({deviceType:"NBQ",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-nbq","value","")})}}]},{customSlot:"table",name:"table-nbq",value:[],backfill(e){const t=c.get(e,"NBQ.checkDeviceValidRes.deviceVos",[])||[];this.value=t.map(a=>c.pick(a,["deviceNumber","manufacturer","specificationsModel","createTime","valid","deviceType"]))},getParam(e){delete e["deviceNumber-nbq"],delete e.ssgs,delete e["ysgs-nbq"];const t=this.value.map(i=>(i.createTime=b().format("YYYY-MM-DD HH:MM:ss"),i.orderId=d().orderId,i));k().deviceInfoType=="NBQ"&&(e.deviceType="NBQ",e.devices=t)},remove(e){const t=this.value.findIndex(a=>a.deviceNumber==e.deviceNumber);this.value.splice(t,1)}}],ne=[_("采集器"),{formType:"input",label:"采集器编号",value:"",name:"deviceNumber-cjq",rightIcon:"scan",clickRightIcon(){Z(e=>{r("table-cjq",t=>{t.value.length==p("ysgs-cjq","value")?f("超出应收个数了"):t.value.unshift({deviceType:"CJQ",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-cjq","value","")})})}},{formType:"input",label:"采集器型号",name:"cjqModel",value:"",...N(),...q("cjqModel",[{text:"光精灵Mini",value:"光精灵Mini"},{text:"光精灵Pro",value:"光精灵Pro"}]),backfill(e){this.value=e.CJQ.cjqModel,this.realValue=e.CJQ.cjqModel}},{formType:"input",label:"多台逆变器是否共用采集器",name:"cjqShare",value:"",...N(),...q("cjqShare",[{text:"否",value:0},{text:"是",value:1}]),backfill(e){this.realValue=e.CJQ.cjqShare;const t=this.inlineForm[0].inlineForm[0].columns.find(a=>a.value==this.realValue)?.text||this.value;this.value=t}},{formType:"input",label:"实收块数",name:"ssgs",value:"0",...T("块"),backfill(){w("table-cjq",e=>{this.value=e.length})}},{formType:"input",label:"应收块数",name:"ysgs-cjq",value:"",...T("块"),backfill(e){const t=c.get(e,"CJQ.designDevice");this.value=t.reduce((a,i)=>a+i.quantity,0)}},{formType:"input",inputAlign:"center",inlineForm:[{slot:"input",formType:"button",text:"添加",className:"bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",click(){const e=p("deviceNumber-cjq","value");if(!e.length){f("请先输入组件编号");return}r("table-cjq",t=>{t.value.length==p("ysgs-cjq","value")?f("超出应收个数了"):t.value.unshift({deviceType:"CJQ",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-cjq","value","")})}}]},{customSlot:"table",name:"table-cjq",value:[],backfill(e){const t=c.get(e,"CJQ.checkDeviceValidRes.deviceVos",[])||[];this.value=t.map(a=>c.pick(a,["deviceNumber","manufacturer","specificationsModel","createTime","valid","deviceType"]))},getParam(e){delete e["deviceNumber-cjq"],delete e.ssgs,delete e["ysgs-cjq"];const t=this.value.map(i=>(i.createTime=b().format("YYYY-MM-DD HH:MM:ss"),i.orderId=d().orderId,i));k().deviceInfoType=="CJQ"&&(e.deviceType="CJQ",e.devices=t)},remove(e){const t=this.value.findIndex(a=>a.deviceNumber==e.deviceNumber);this.value.splice(t,1)}}],oe=[_("配电箱"),{formType:"input",label:"配电箱编号",value:"",name:"deviceNumber-pdx",rightIcon:"scan",clickRightIcon(){Z(e=>{r("table-pdx",t=>{t.value.length==p("ysgs-pdx","value")?f("超出应收个数了"):t.value.unshift({deviceType:"PDX",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-pdx","value","")})})}},{formType:"input",label:"实收块数",name:"ssgs",value:"0",...T("块"),backfill(){w("table-pdx",e=>{this.value=e.length})}},{formType:"input",label:"应收块数",name:"ysgs-pdx",value:"",...T("块"),backfill(e){const t=c.get(e,"CJQ.designDevice");this.value=t.reduce((a,i)=>a+i.quantity,0)}},{formType:"input",inputAlign:"center",inlineForm:[{slot:"input",formType:"button",text:"添加",className:"bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",click(){const e=p("deviceNumber-pdx","value");if(!e.length){f("请先输入组件编号");return}r("table-pdx",t=>{t.value.length==p("ysgs-pdx","value")?f("超出应收个数了"):t.value.unshift({deviceType:"PDX",deviceNumber:e,orderId:d().orderId,createTime:b().format("YYYY-MM-DD HH:MM:ss")}),r("deviceNumber-pdx","value","")})}}]},{customSlot:"table",name:"table-pdx",value:[],backfill(e){const t=c.get(e,"PDX.checkDeviceValidRes.deviceVos",[])||[];this.value=t.map(a=>c.pick(a,["deviceNumber","manufacturer","specificationsModel","createTime","valid"]))},getParam(e){delete e["deviceNumber-pdx"],delete e.ssgs,delete e["ysgs-pdx"];const t=this.value.map(i=>(i.createTime=b().format("YYYY-MM-DD HH:MM:ss"),i.orderId=d().orderId,i));k().deviceInfoType=="PDX"&&(e.deviceType="PDX",e.devices=t)},remove(e){const t=this.value.findIndex(a=>a.deviceNumber==e.deviceNumber);this.value.splice(t,1)}}],re=[_("直流电缆"),{formType:"input",name:"manufacturerZLDL",label:"直流电缆厂家名称",labelClass:"flex-none !w-[40%]",required:!0,getParam(e){c.isArray(e.devices)||(e.devices=[{}]),k().deviceInfoType=="ZLDL"&&(e.devices[0].manufacturer=e.manufacturerZLDL,e.devices[0].deviceType="ZLDL",e.devices[0].specificationsModel=e.specificationsModelZLDL,e.devices[0].orderId=d().orderId)},async backfill(e){const{data:t}=await g.post("sto/device-args/list?option=manufacturer",{deviceType:"ZLDL"}),a=t.map(s=>({...s,text:s.manufacturer,value:s.manufacturer}));this.inlineForm[0].value=e.manufacturer,this.updateValue=s=>{const u=a.filter(o=>o.value.includes(s));this.inlineForm[0].show=new Boolean(u.length||s.length),this.inlineForm[0].actions=u};const i=c.get(e,"ZLDL.checkDeviceValidRes.deviceVos[0].manufacturer","");this.value=i},inlineForm:[{slot:"button",name:"manufacturerZLDLRightIcon",formType:"popover",show:!1,placement:"bottom-end",actions:[],style:{width:"250px",height:"40vh"},select(e){r("manufacturerZLDL","value",e.value)}}]},{...N(),...q("specificationsModelZLDL",[],"dynamic"),formType:"input",label:"直流电缆型号",name:"specificationsModelZLDL",required:!0,async backfill(e){const{data:t}=await g.post("sto/device-args/list?option=specificationsModel",{deviceType:"ZLDL"}),a=t.map(s=>({text:s.specificationsModel,value:s.specificationsModel}));this.makeSelect(e.specificationsModel,a);const i=c.get(e,"ZLDL.checkDeviceValidRes.deviceVos[0].specificationsModel","");this.value=i,this.realValue=i}}],ue=[_("支架"),{formType:"input",name:"manufacturer-zhijia",label:"支架厂家名称",required:!0,getParam(e){console.log(99999999),c.isArray(e.devices)||(e.devices=[{}]),k().deviceInfoType=="ZHIJIA"&&(e.devices[0].manufacturer=e["manufacturer-zhijia"],e.devices[0].deviceType="ZHIJIA",e.devices[0].specificationsModel=e["specificationsModel-zhijia"],e.devices[0].material=e["material-zhijia"],e.devices[0].orderId=d().orderId)},async backfill(e){const{data:t}=await g.post("sto/device-args/list?option=manufacturer",{deviceType:"ZHIJIA"}),a=t.map(s=>({...s,text:s.manufacturer,value:s.manufacturer}));this.inlineForm[0].value=e.manufacturer,this.updateValue=s=>{const u=a.filter(o=>o.value.includes(s));this.inlineForm[0].show=new Boolean(u.length||s.length),this.inlineForm[0].actions=u};const i=c.get(e,"ZHIJIA.checkDeviceValidRes.deviceVos[0].manufacturer","");this.value=i},inlineForm:[{slot:"button",name:"manufacturer-zhijiaRightIcon",formType:"popover",show:!1,placement:"bottom-end",actions:[],style:{width:"250px",height:"40vh"},select(e){r("manufacturer-zhijia","value",e.value)}}]},{...N(),...q("specificationsModel-zhijia",[],"dynamic"),formType:"input",label:"支架型号",name:"specificationsModel-zhijia",required:!0,async backfill(e){const{data:t}=await g.post("sto/device-args/list?option=specificationsModel",{deviceType:"ZHIJIA"}),a=t.map(s=>({text:s.specificationsModel,value:s.specificationsModel}));this.makeSelect(e.specificationsModel,a);const i=c.get(e,"ZHIJIA.checkDeviceValidRes.deviceVos[0].specificationsModel","");this.value=i,this.realValue=i}},{...N(),...q("material-zhijia",[],"dynamic"),formType:"input",label:"支架材质",name:"material-zhijia",required:!0,async backfill(e){const{data:t}=await g.post("sto/device-args/list?option=material",{deviceType:"ZHIJIA"}),a=ae(t);this.makeSelect(e.material,a);const i=c.get(e,"ZHIJIA.checkDeviceValidRes.deviceVos[0].material","");this.value=i,this.realValue=i}}],de={__name:"deviceInfo",setup(e){const t=S({zujian:se,nbq:ce,cjq:ne,pdx:oe,zldl:re,zhijia:ue}),a=d(),i=["ZUJIAN","NBQ","CJQ","PDX","ZLDL","ZHIJIA"],s=i.map(n=>le(n)),u=K({}),o=k();E(()=>{j()});async function j(){const n={};for(const M of i){const{data:v}=await g.get(z("order/get-device",{...a,deviceType:M}));n[M]=v,u.value[M]=v.btns}G(t,n),C("ZUJIAN")}async function J(){const n=ie();n.deviceType=o.deviceInfoType,await g.post("/order/put-device",n),o.deviceInfoType=="CJQ"&&await g.post("/order/put-cjq-model",n)}async function h(n){n.taskId=`TASK_SBXX_${c.upperCase(o.deviceInfoType)}`,await g.post(z("/approval/put-approval/bto/construction",n))}async function A(n){n.taskId=`TASK_SBXX_${c.upperCase(o.deviceInfoType)}`,await g.post("approval/do-approval/bto/construction",n)}function C(n){o.deviceInfoType=n,o.btns=u.value[n];const M=i.findIndex(D=>D==n),v=s[M];c.isFunction(v.value?.approvalBackfill)&&v.value.approvalBackfill()}return te({getData:j,saveData:J,submitData:h,approvalData:A}),(n,M)=>{const v=U,D=R,x=P,Q=F;return H(),V(Q,{class:"flex-1 flex flex-col",active:I(o).deviceInfoType,"onUpdate:active":M[0]||(M[0]=y=>I(o).deviceInfoType=y),background:"#f3f3f3","line-width":"80px",color:"#ffab30",onChange:C},{default:m(()=>[l(x,{title:"组件",name:"ZUJIAN"},{default:m(()=>[l(v,{form:I(t).zujian,class:"pt-3","group-class":"shadowC pb-2"},{table:m(({slot:y})=>[l(Y,{title:"组件",slot:y},null,8,["slot"])]),_:1},8,["form"]),l(D,{ref:"ZUJIAN"},null,512)]),_:1}),l(x,{title:"逆变器",name:"NBQ"},{default:m(()=>[l(v,{form:I(t).nbq,class:"pt-3","group-class":"shadowC pb-2"},{table:m(({slot:y})=>[l(Y,{title:"逆变器",slot:y},null,8,["slot"])]),_:1},8,["form"]),l(D,{ref:"NBQ"},null,512)]),_:1}),l(x,{title:"采集器",name:"CJQ"},{default:m(()=>[l(v,{form:I(t).cjq,class:"pt-3","group-class":"shadowC pb-2"},{table:m(({slot:y})=>[l(Y,{title:"采集器",slot:y},null,8,["slot"])]),_:1},8,["form"]),l(D,{ref:"CJQ"},null,512)]),_:1}),l(x,{title:"配电箱",name:"PDX"},{default:m(()=>[l(v,{form:I(t).pdx,class:"pt-3","group-class":"shadowC pb-2"},{table:m(({slot:y})=>[l(Y,{title:"配电箱",slot:y},null,8,["slot"])]),_:1},8,["form"]),l(D,{ref:"PDX"},null,512)]),_:1}),l(x,{title:"直流电缆",name:"ZLDL"},{default:m(()=>[l(v,{form:I(t).zldl,class:"pt-3","group-class":"shadowC pb-2"},null,8,["form"]),l(D,{ref:"ZLDL"},null,512)]),_:1}),l(x,{title:"支架",name:"ZHIJIA"},{default:m(()=>[l(v,{form:I(t).zhijia,class:"pt-3","group-class":"shadowC pb-2"},null,8,["form"]),l(D,{ref:"ZHIJIA"},null,512)]),_:1})]),_:1},8,["active"])}}},Re=ee(de,[["__scopeId","data-v-50fae1b6"]]);export{Re as default};
