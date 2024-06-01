import{_ as z}from"./vantForm-CNH6TuWQ.js";import{I as O,z as W,A as H,a as m,E as Q,b as X,h as J}from"./vant-BF4L1TGb.js";import{p as K}from"./plainButton-DQZH_kUz.js";import{c as tt,aX as q,al as B,N as i,bA as g,F as et,b1 as st,u as n,am as M,be as V,r as R,e as lt,aj as Z,ak as F,V as $,bD as P}from"./@vue-ts87NNlE.js";import{_ as it,x as L,r as c,c as a,z as at,i as rt,f as ot,A as nt,s as j,h as Y,q as ct,B as N,e as ut,C as b}from"./index-B7VWkQ_2.js";import{i as x}from"./class-COLQ8iHP.js";import{q as pt}from"./queryUrl-BTYYWpY7.js";import{l as E}from"./lodash-DhpMPSDc.js";import{m as mt}from"./makeForm-BmsmFLmR.js";import{g as w,f as ht,i as U,a as ft,b as dt}from"./lodash-es-LCORa03k.js";import"./@vant-NmgEisJw.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const vt={class:"overflow-x-scroll px-[17px] !bg-[#ffab30] pt-[0vh]"},yt={class:"text-[16px]"},xt={__name:"step",props:["stepActive"],setup(s){const t=s,e=location.port==2222?"/orderh5":"",l=["预审","客户信息","勘察","合同签约","备案证","初设评审","施工","并网","结算","购售电合同","完成"],f=tt(()=>l.findIndex(u=>u==t.stepActive));return(p,u)=>{const y=O,r=W,C=H;return q(),B("div",vt,[i(C,{active:n(f),class:"w-[230vw] h-full my-auto"},{default:g(()=>[(q(),B(et,null,st(l,_=>i(r,{"inactive-color":"#ffffff","active-color":"#07c160","active-icon":"checked","inactive-icon":"more"},{"inactive-icon":g(()=>[i(y,{name:`.${n(e)}/icons/step/inactive.png`},null,8,["name"])]),"active-icon":g(()=>[i(y,{name:`.${n(e)}/icons/step/active.png`},null,8,["name"])]),"finish-icon":g(()=>[i(y,{name:`.${n(e)}/icons/step/finish.png`},null,8,["name"])]),default:g(()=>[M("p",yt,V(_),1)]),_:2},1024)),64))]),_:1},8,["active"])])}}},gt=it(xt,[["__scopeId","data-v-b3ab2c1e"]]),h="!pl-[5px] !min-w-[30%]",Ct=[{customSlot:"person",title:"-",value:"value",orderId:"-",stageId:"-"},{formType:"cell",name:"orderId",title:"系统编号",valueClass:"mr-[10px] text-gray",titleClass:"!pl-[5px] !min-w-[20%] !flex-none",value:"-"},{formType:"cell",name:"contractNumber",title:"进件编号",valueClass:"mr-[10px] text-gray",titleClass:"!pl-[5px] !min-w-[20%] !flex-none",value:"-"}],_t=[{formType:"cell",title:"预审",titleClass:x,class:"!p-0 h-[50px]",onMounted(){this.hidden=L("")}},{formType:"cell",name:"/inquiry",title:"预审信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",onMounted(){this.hidden=L("")},click(){this.value!="未开启"?c.push({path:"/inquiry",query:{...a()}}):m(this.value)}}],Tt=[{formType:"cell",title:"客户信息",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/customerInfo",title:"客户信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value!="未开启"){const t={TYZF_ZZD:"客户信息 - 自然人",TYZF_ZZD_ORG:"客户信息 - 法人"}[at()]||this.title;c.push({path:this.name,query:{...a(),title:t}})}else m(this.value)}}],kt=[{formType:"cell",title:"勘察",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/businessReconnaissance",title:"业务踏勘",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){this.value!="未开启"?c.push({path:this.name,query:{...a()}}):m(this.value)}},{formType:"cell",name:"/technicalLnvestigation",title:"技术勘察",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){this.value!="未开启"?c.push({path:this.name,query:{...a()}}):m(this.value)}}],Dt=[{formType:"cell",title:"合同签约",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/contractAward",title:"合同签约",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",async click(){rt()?Q({title:"合同签约",message:"提示：根据商务培训要求，选择正确的签约方式",confirmButtonText:"线上电子合同签约",confirmButtonDisabled:ot(),confirmButtonColor:"#232323",cancelButtonText:"线下纸质合同签约",cancelButtonColor:"#232323",cancelButtonDisabled:nt(),closeOnClickOverlay:!0}).then(()=>{c.push({path:this.name,query:{...a(),online:!0,title:"线上电子合同签约"}})}).catch(()=>{c.push({path:this.name,query:{...a(),online:!1,title:"线下纸质合同签约"}})}):c.push({path:this.name,query:{...a()}})}}],It=[{formType:"cell",title:"备案证及权属证明",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/certificate",title:"备案证及权属证明",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}}],wt=[{formType:"cell",title:"初设评审",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/InitialReview",title:"初设评审信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{orderId:a().orderId,title:this.title}})}},{formType:"cell",name:"/InitialReview",title:"设计变更信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{orderId:a().orderId,title:this.title,status:this.value}})}}],qt=[{formType:"cell",title:"施工",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/build",title:"施工信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}},{formType:"cell",name:"/DeviceInfo",title:"设备信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}},{formType:"cell",name:"/buildVideo",title:"施工影像件信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}},{formType:"input",inputAlign:"center",name:"hasPutApprovalConstructBtn",realValue:!1,inlineForm:[{slot:"input",formType:"button",text:" 提交施工审核 ",className:"bg-[#ffab30] text-white h-8 w-[30%] rounded-2xl van-haptics-feedback",click(){j("hasPutApprovalConstructBtn",async s=>{if((await Y.post(pt("/approval/put-approval/bto/construction",{orderId:a().orderId,taskId:"CONSTRUCT"}))).code==200)X("提交成功"),location.reload();else{const e=E.get(data,"data.msg","提交失败");m(e)}})}}]}],bt=[{formType:"cell",title:"并网",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/gridConnected",title:"并网信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}}],Lt=[{formType:"cell",title:"直营结算",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/settlement",title:"直营结算信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}}],St=[{formType:"cell",title:"供应商结算",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/gridConnectedAccount",title:"并网结算信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}},{formType:"cell",name:"/gridSettlement",title:"资料结算信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}}],$t=[{formType:"cell",title:"购售电合同",titleClass:x,class:"!p-0 h-[50px]"},{formType:"cell",name:"/electricityContract",title:"购售电合同信息",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}}],At=[{formType:"cell",title:"收益查询",titleClass:x,class:"!p-0 h-[50px]",onMounted(){this.hidden=L("")}},{formType:"cell",name:"/income",title:"屋顶业主收益查询",valueClass:"mr-[10px] text-gray",titleClass:h,isLink:!0,value:"未开启",onMounted(){this.hidden=L("")},click(){if(this.value=="未开启"){m(this.title+"未开启");return}c.push({path:this.name,query:{...a()}})}}];async function Bt(s){const t=[{target:s,prefix:"",path:""}],e=[],l=new Set;for(;t.length>0;){const{target:f,prefix:p,path:u}=t.pop();l.has(f)||(l.add(f),ht(f,(y,r)=>{if(r=r+"",!(r.startsWith("_")||r.startsWith("ref"))){const C=u===""?`${r}`:`${u}.${r}`,_=u===""?`${r}`:`${p}.${r}`;e.push(C),U(y)&&t.push({target:y,prefix:_,path:C})}}))}return e}function Gt(s){const t=new RegExp(`^${s.replace(/\*/g,".*")}$`);return e=>t.test(e)}async function Rt(s,t){const e=await Bt(s),l=Gt(t),f=[];for(let p=0;p<e.length;p++){const u=e[p];l(u)&&!u.includes(".ref.")&&f.push(u)}return f}async function A(s,t,e=()=>{}){const l=[];if(!t.includes("*")){let p=w(s,t);const u=t.split(".").slice(0,-1).join("."),y=w(s,u);return e(p,y,t),p}const f=await Rt(s,t);for(let p=0;p<f.length;p++){const u=f[p];let y=w(s,u);const r=u.split(".").slice(0,-1).join("."),C=w(s,r);e(y,C,u),y=w(s,u),l.push(y)}return l.length===1?l[0]:l}function Zt(s,t){if(ft(s)){const e=s.length;for(let l=0;l<e;l++)t(s[l])}else U(s)&&dt(s,(e,l)=>{t(e,l)})}const Ft={class:"bg-[#f3f3f3] min-h-[100vh] pb-[10px]"},Pt={class:"flex justify-end items-end w-full"},ue={__name:"itemDetail",setup(s){let t=mt({itemDetail:Ct,inquiry:_t,customerInfo:Tt,survey:kt,contractSign:Dt,record:It,initReview:wt,build:qt,grid:bt,ZYsettlement:Lt,DLSsettlement:St,electricityContract:$t,income:At}),e=a();const l=ct(),f=R(!1),p=R("预审");lt(()=>{u()});async function u(){const{data:r}=await Y.post("/order/search",{queryTag:e.orderId,orderId:e.orderId}),C=E.get(r,"list.0.currentOrderState.0.stageId");p.value=l[C],N(o=>{o.valueClass&&(o.value="未开启",o.valueClass=o.valueClass.replace(/text-[^ ]+/,"text-gray"))});let _=!1;await A(r,"*.orderStates",async o=>{Zt(o,T=>{const d=T?.taskId,k=T?.stateId,S=T?.stageId,D=l[k]||"未开启",G=l[d]||l[S]||"";N(v=>{if(v.title==G&&v.isLink){v.value=D;const I=b(D);v.valueClass=v.valueClass.replace(/text-[^ ]+/,"text-"+I)}if(v.title=="合同签约"&&D=="起租"&&(_=!0),v.title=="屋顶业主收益查询"&&_){v.value="查询";const I=b(v.value);v.valueClass=v.valueClass.replace(/text-[^ ]+/,"text-"+I)}if(v.title?.includes("结算信息")&&G=="结算"){v.value=D;const I=b(D);v.valueClass=v.valueClass.replace(/text-[^ ]+/,"text-"+I)}})})}),A(r,"*.currentOrderState.0",o=>{t.itemDetail[0].orderId=o?.orderId,t.itemDetail[1].value=o?.orderId}),A(r,"list.0",o=>{t.itemDetail[0].title=o?.customer?.name||o?.customerOrg?.orgName||"-",t.itemDetail[2].value=o?.leaseReview?.contractNumber||"-",f.value=o?.company?.type=="DLS",j("hasPutApprovalConstructBtn","realValue",o.hasPutApprovalConstructBtn),t.initReview[2].value=o.orderDesignUpdateState;const T=b(o.orderDesignUpdateState);t.initReview[2].valueClass=t.initReview[2].valueClass.replace(/text-[^ ]+/,"text-"+T)})}function y(){c.push({path:"/operateLog",query:e})}return ut({onClickRight:y,onRefresh:()=>location.reload()}),(r,C)=>{const _=O,o=K,T=J,d=z;return q(),B("div",Ft,[i(gt,{stepActive:n(p),class:"h-[13vh] mb-[10px] shadowC"},null,8,["stepActive"]),i(d,{form:n(t).itemDetail,"group-class":"itemDetailGrop"},{person:g(({slot:k})=>[i(T,{"title-class":"!text-[20px] bg-[white] flex items-center  font-bold !flex-none w-[40%]"},{title:g(()=>[i(_,{name:"contact",class:"mr-2"}),$(" "+V(k.title),1)]),value:g(()=>[M("div",Pt,[i(o,{class:"!h-[auto] !py-1",onClick:P(S=>r.$copyText(k.orderId),["stop"])},{default:g(()=>[$(" 复制系统编号 ")]),_:2},1032,["onClick"]),i(o,{class:"!h-[auto] !py-1 !ml-2",onClick:P(S=>r.$copyText(k.stageId),["stop"])},{default:g(()=>[$(" 复制进件编号 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:1},8,["form"]),i(d,{form:n(t).inquiry,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).customerInfo,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).survey,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).contractSign,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).record,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).initReview,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).build,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).grid,"group-class":"itemDetailGrop"},null,8,["form"]),i(d,{form:n(t).electricityContract,"group-class":"itemDetailGrop"},null,8,["form"]),n(f)?F("",!0):(q(),Z(d,{key:0,form:n(t).ZYsettlement,"group-class":"itemDetailGrop"},null,8,["form"])),n(f)?(q(),Z(d,{key:1,form:n(t).DLSsettlement,"group-class":"itemDetailGrop"},null,8,["form"])):F("",!0),i(d,{form:n(t).income,"group-class":"itemDetailGrop"},null,8,["form"])])}}};export{ue as default};
