import{a as N,t as z,r as Q,m as j}from"./vant-PdAvEskO.js";import{_ as G}from"./cell-DD5ldTVm.js";import{m as X,_ as L}from"./makeForm-LXfxxl4j.js";import{_ as v}from"./vButton-lTvEi_nb.js";import{m as T,b as w}from"./backfill-YTqXYfvZ.js";import{c as g,f as M,h as I,B as Y,s as n,g as H,_ as K,e as W,v as U}from"./index-D0ldpvYI.js";import{m as ee}from"./makeDate-BEqrKniQ.js";import{b as k,m as S}from"./makeSelect-C4yghakN.js";import{l as x}from"./lodash-D-SkTV7p.js";import{q as V}from"./queryUrl-DaTGvNW7.js";import{m as te,a as ae}from"./makeUpload-BNh7QOMX.js";import"./xe-utils-CfMIR_ol.js";import{o as se}from"./openCode-CMxVkhya.js";import{f as u,r as oe,e as ne,b3 as A,aX as C,al as B,N as o,u as b,bA as l,am as E,F,i as le,b1 as ie,aj as de,V as _}from"./@vue-ts87NNlE.js";import"./@vant-NmgEisJw.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-DLUPp4BS.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-jb8ML41u.js";import"./vxe-table-CAWzlaHI.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-D7CPqAIZ.js";import"./vue-demi-BO4xsXkA.js";import"./vue-B7fnMq6U.js";import"./dayjs-C2mSY6L-.js";const ce=[{...T("发货信息"),onMounted(){const e=g();this.title+=`(${e.title})`,u(()=>{this.title="发货信息"})}},{formType:"input",readonly:!0,name:"expId",label:"发货单号",placeholder:"系统自动生成",value:"",onMounted(){u(()=>{this.value=""})}},{...ee({name:"createTime"}),required:!0,label:"发货日期",placeholder:"发货日期",onMounted(){u(()=>{this.value=""})}},{...k(),...S("exportType",[{value:"FIRST_TO_SECOND",text:"一级仓库发二级仓库"},{value:"FIRST_TO_SITE",text:"一级仓库发现场"},{value:"SECOND_TO_SITE",text:"二级仓库发现场"}]),name:"exportType",label:"发货类型",required:!0},{formType:"input",name:"shipperName",required:!0,label:"发货人",placeholder:"发货人",value:"",onMounted(){u(()=>{this.value=""})},backfill(e){const t=M();this.value=e[this.name]||t.name}},{formType:"input",name:"shipperPhone",label:"发货人电话",placeholder:"发货人电话",required:!0,value:"",onMounted(){u(()=>{this.value=""})},backfill(e){const t=M();this.value=e[this.name]||t.phone}},{...k(),...S("shipperStoId",[],"dynamic"),name:"shipperStoId",label:"发货仓库",placeholder:"发货仓库",required:!0,async backfill(e){const{data:t}=await I.get(V("/sto/room-sto-type",{stoType:"ZY"})),a=t.map(s=>({text:s.stoName,value:s.stoId}));a.find(s=>s.text==e[this.name])?.value,this.makeSelect(e[this.name],a)}},{...k(),...S("companyId",[],"dynamic"),name:"companyId",label:"收货组织",placeholder:"收货组织",required:!0,async backfill(e){const t=g(),{data:a}=await I.get(V("/sto/export-base/company",{type:t.exportType,expStoId:t.expId})),s=a.map(c=>({text:c.name,value:c.companyId}));this.makeSelect(e[this.name],s)}},{formType:"input",label:"备注",placeholder:"请输入备注",value:"",colon:!0,inputAlign:"left",name:"remark",onMounted(){u(()=>{this.value=""})}}],re=[{...T("发货单附件")},{...te(999,100,void 0,void 0,void 0,!1),label:"发货单签名",name:"exportImages",required:!0,backfill(e){x.bind(ae,this)(e)},getParam(e){e[this.name]=[e[this.name].map(t=>Y(t))].flat()}}],me=[{...T("设备信息")},{formType:"",name:"deviceSlot",customSlot:"deviceSlot",tab:"ZUJIAN",backfill(e,t=!0){t?(this.tabs.forEach(a=>{const s=x.get(e,"deviceResVoMap."+a.name,[]);a.data=s}),this.set(x.get(e,"deviceResVoMap.ZUJIAN",[]))):(this.tabs.forEach(a=>{const s=x.get(e,a.name,[]);a.data.length=0,a.data.push(...s)}),this.set(e[this.tab]))},tabs:[{title:"组件",name:"ZUJIAN",value:"",data:[]},{title:"逆变器",name:"NBQ",value:"",data:[]},{title:"采集器",name:"CJQ",value:"",data:[]},{title:"配电箱",name:"PDX",value:"",data:[]}],getParam(e){e.deviceInfos=this.tabs.map(t=>t.data.map(a=>a.deviceId)).flat(2),e.state=g()?.state,delete e.orderId},add(e){const t=this.tabs.findIndex(c=>c.name==this.tab),a=this.tabs[t].value,s=[e||a].flat().map(c=>({deviceId:c}));this.tabs[t].data.unshift(...s),n("table","data",this.tabs[t].data)},uniq(){const e=this.tabs.findIndex(t=>t.name==this.tab);this.tabs[e].data=x.uniqBy(this.tabs[e].data,"deviceId"),n("table","data",this.tabs[e].data)},set(e){const t=this.tabs.findIndex(a=>a.name==this.tab);this.tabs[t].data=e,n("table","data",this.tabs[t].data)}}],ue=[{formType:"input",value:"",name:"ZUJIAN",label:"设备编号",rightIcon:"scan",clearable:!0,onMounted(){u(()=>{this.value=""})},getParam(e){delete e[this.name]},rightIconClick(){se(e=>{n("deviceSlot",t=>{const a=t.tabs.findIndex(s=>s.name==this.name);t.tabs[a].data.unshift([e].flat())})})},updateValue(e){n("deviceSlot",t=>{const a=t.tabs.findIndex(s=>s.name==this.name);t.tabs[a].value=e})},change(e){n("deviceSlot",t=>{t.tab=e;const a=t.tabs.findIndex(s=>s.name==e);this.value=t.tabs[a].value,this.name=t.tabs[a].name,n("table","data",t.tabs[a].data)})}},{customSlot:"button",add(){n("deviceSlot",e=>e.add())},uniq(){n("deviceSlot",e=>e.uniq())},reset(){const e=H("deviceSlot","tab");n(e,"value","")}},{formType:"",name:"table",customSlot:"table",data:[],remove(e){const t=this.data.findIndex(a=>a.deviceId==e.deviceId);this.data.splice(t,1),n("deviceSlot",a=>{a.set(this.data)})}}],pe={class:"grid grid-cols-3 gap-2 p-2"},fe={class:"flex justify-evenly py-2"},he={__name:"sendOutGoods",setup(e){let t=X({goods:ce,exportImages:re,deviceInfo:me,deviceContent:ue});const a=oe("ZUJIAN"),s=g();async function c(){const{data:i}=await I.get(`/sto/export-base/show/${s.expId}`);w(t,i)}async function q(){const i=U();if(i.shipperStoId){try{const{data:d}=await I.post("/sto/export-base/add",i);n("expId","value",d)}catch(d){n("deviceSlot",r=>r.backfill(d.data,!1))}return}else N("发货仓库暂存确认都是必填")}async function O(){await q();const i=U();if(i.state="1",!i.deviceInfos.length){N({message:"收货设备不能为空",className:"!bg-red-500"});return}try{const{data:d}=await I.post("/sto/export-base/add",i);n("expId","value",d)}catch(d){n("deviceSlot",r=>r.backfill(d.data,!1))}}function D(i){t.deviceContent[0].change(i)}return ne(()=>{s.expId?c():w(t,{})}),W({getData:c}),(i,d)=>{const r=L,y=A("vxe-column"),f=G,J=z,P=A("vxe-table"),Z=Q,$=j;return C(),B(F,null,[o(r,{form:b(t).goods,class:"pt-3","group-class":"shadowC"},null,8,["form"]),o(r,{form:b(t).exportImages,class:"pt-3","group-class":"shadowC"},null,8,["form"]),o(r,{form:b(t).deviceInfo,class:"pt-3","group-class":"shadowC"},{deviceSlot:l(({slot:R})=>[o($,{class:"flex-1 flex flex-col",active:b(a),"onUpdate:active":d[0]||(d[0]=h=>le(a)?a.value=h:null),background:"#fff","line-width":"80px",color:"#ffab30",onChange:D},{default:l(()=>[(C(!0),B(F,null,ie(R.tabs,h=>(C(),de(Z,{title:h.title,name:h.name,key:h.name},{default:l(()=>[o(r,{form:b(t).deviceContent,class:"m-0"},{button:l(({slot:p})=>[E("div",pe,[o(v,{onClick:()=>p.add(),size:"mini"},{default:l(()=>[_("添加")]),_:2},1032,["onClick"]),o(v,{onClick:()=>p.uniq(),size:"mini",class:"!bg-[red]"},{default:l(()=>[_("去重")]),_:2},1032,["onClick"]),o(v,{onClick:()=>p.reset(),size:"mini",class:"!bg-[gray]"},{default:l(()=>[_("重置")]),_:2},1032,["onClick"])])]),table:l(({slot:p})=>[o(P,{data:p.data,align:"center","header-align":"center","max-height":"400"},{default:l(()=>[o(y,{type:"seq",width:"50",title:"序号"}),o(y,{field:"value",title:"详细信息"},{default:l(({row:m})=>[o(f,{title:"设备编号",value:m.deviceId},null,8,["value"]),o(f,{title:"生产厂家",value:m.manufacturer},null,8,["value"]),o(f,{title:"供应商",value:m.supplier},null,8,["value"]),o(f,{title:"规格型号",value:m.specificationsModel},null,8,["value"]),o(f,{title:"错误信息",value:m.valid,titleClass:"!text-[red] !w-auto !flex-none",valueClass:"text-red"},null,8,["value"])]),_:1}),o(y,{field:"",title:"操作",width:"50"},{default:l(({row:m})=>[o(J,{name:"cross",color:"red",onClick:ve=>p.remove(m)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["data"])]),_:2},1032,["form"])]),_:2},1032,["title","name"]))),128))]),_:2},1032,["active"])]),_:1},8,["form"]),E("div",fe,[o(v,{class:"w-[30%]",onClick:q},{default:l(()=>[_("暂存")]),_:1}),o(v,{class:"w-[30%]",onClick:O},{default:l(()=>[_("确认")]),_:1})])],64)}}},Ge=K(he,[["__scopeId","data-v-d40bda6e"]]);export{Ge as default};
