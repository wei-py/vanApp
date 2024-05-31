import{b as N,a as j,B as I}from"./vant-BjNCsb4u.js";import{m as M,_ as U}from"./makeForm-CSPZ389Q.js";import{m as J}from"./backfill-Cd9AIfra.js";import{b as T,F as z,H as q,u as G,G as H,e as K,J as F,E as W,x as X,K as $,D as Q,r as Y}from"./index-DoomjHTc.js";import{l as c}from"./lodash-DhpMPSDc.js";import{m as Z}from"./makeUpload-XopPofFX.js";import{w as A}from"./wait-Dqho1LKt.js";import{c as u,r as ee,e as ae,aX as d,al as te,u as t,aj as v,ak as b,am as se,bA as R,V as y,F as oe}from"./@vue-ts87NNlE.js";const P=[J("审核"),{formType:"input",label:"订单",readonly:!0,name:"orderId",value:""},{formType:"input",label:"审核方式",name:"approvalType",readonly:!0,value:"",realValue:"",backfill(s){const n={APPROVAL_INNER:"内部审核",APPROVAL_BTO:"博通审核",APPROVAL_LEASE:"资方审核"},l=s.stateId=="WAITING_APPROVAL_BTO"?"APPROVAL_BTO":"APPROVAL_INNER";this.realValue=s[this.name]||l,this.value=n[s[this.name]||l]}},{formType:"input",label:"审核结果",name:"result",inputAlign:"right",realValue:"",readonly:!0,disabled:!0,required:!0,isLink:!0,backfill(s){const n={PASS:"通过",REJECT:"拒绝"};this.realValue=s[this.name],this.value=n[s[this.name]]},click(){const s=T();this.inlineForm[0].show=s.btns.canApproval},onMounted(){const s=this;this.inlineForm=[{slot:"extra",name:"Pop",formType:"popup",show:!1,round:!0,position:"bottom",class:"h-[40vh] !w-screen",closeOnClickOverlay:!0,inlineForm:[{slot:"default",formType:"pick",confirm(n){s.value=n.selectedOptions[0].text,s.realValue=n.selectedOptions[0].value,s.inlineForm[0].show=!1},cancel(){s.inlineForm[0].show=!1},columns:[{value:"PASS",text:"通过"},{value:"REJECT",text:"拒绝"}]}]}]}},{formType:"input",label:"原因",value:"",error:!0,inputAlign:"left",placeholder:"请输入原因",name:"rejectReason"},{formType:"input",name:"rejectFiles",label:"附件",...Z(999,100,"*",!1,!1),async backfill(s){this.inlineForm[0].value=(s[this.name]||[]).map(n=>({url:z(n.fileSrc)})),await A(2e3),q(...this.inlineForm[0].value.map(n=>n.url))}}],ne={class:"flex justify-center my-2"},fe={__name:"vBtn",setup(s,{expose:n}){const l=G(),o=T(),k=H();let h=u(()=>o.btns.hasEditBtn),i=u(()=>o.btns.canEdit),_=u(()=>o.btns.canSave),E=u(()=>o.btns.hasApprovalBtn),f=u(()=>o.btns.canApproval),V=u(()=>o.btns.rejectReason&&o.btns.hasApprovalModule),a=M({rejectReason:P},!1),g=ee(!1);const B=u(()=>!(h.value&&i.value&&_.value)&&!i.value);function w(){for(let e=0;e<a.rejectReason.length;e++){if(o.btns.rejectReason&&o.btns.hasApprovalModule){const r=a.rejectReason[e].name;c.isFunction(a.rejectReason[e].backfill)?a.rejectReason[e].backfill(o.btns.rejectReason):a.rejectReason[e].value=o.btns.rejectReason[r],c.isFunction(a.rejectReason[e].onMounted)&&e==3&&a.rejectReason[e].onMounted()}g.value=o.btns.hasApprovalBtn&&!o.btns.canEdit&&!o.btns.canApproval,g.value?(a.rejectReason[e].readonly=!0,a.rejectReason[e].click=()=>{},a.rejectReason[5].inlineForm[0].readonly=!0,a.rejectReason[5].inlineForm[0].disabled=!0):(a.rejectReason[e].readonly=!1,a.rejectReason[3].readonly=!0,a.rejectReason[3].isLink=!0,a.rejectReason[3].click=function(){this.inlineForm[0].show=o.btns.canApproval},a.rejectReason[5].inlineForm[0].readonly=!1,a.rejectReason[5].inlineForm[0].disabled=!1)}}K({approvalBackfill:w}),n({approvalBackfill:w}),ae(async()=>{l.approvalBackfill(),B.value,P[3].readonly=!0});const D=c.debounce(O,300);async function O(){F();try{const e=await l.saveData();if(e){const r=c.get(e,"msg","保存成功")||"保存成功";N(r)}}catch(e){j("保存失败: "+e.msg)}}const x=c.debounce(S,300);async function S(){F(),await l.saveData();try{const e=await W(),r=X(),m=c.pick(r,["id","orderId"]);l.submitData(m),l.getData(),await A(2e3),location.reload()}catch(e){j({className:"!bg-[red] !text-white",message:e[0].message})}}const C=c.debounce(L,300);async function L(){await k.approvalDoms.approval.validate();const e=k.approvalDoms.approval.getValues(),r={内部审核:"APPROVAL_INNER",博通审核:"APPROVAL_BTO",资方审核:"APPROVAL_LEASE"},m={通过:"PASS",拒绝:"REJECT"};e.approvalType=r[e.approvalType],e.result=m[e.result],e.rejectFiles=e.rejectFiles.map(p=>({fileName:$(p),fileSrc:Q(p)})),await l.approvalData(e),await A(2e3),Y.currentRoute.value.name=="deviceInfo"||location.reload()}return(e,r)=>{const m=U,p=I;return d(),te(oe,null,[t(V)?(d(),v(m,{key:0,readonly:!t(f),disabled:!t(f),"show-error-message":t(f),form:t(a).rejectReason,"approval-name":"approval",class:"pt-3","group-class":"shadowC"},null,8,["readonly","disabled","show-error-message","form"])):b("",!0),se("div",ne,[t(h)&&t(i)&&t(_)?(d(),v(p,{key:0,disabled:!t(i),round:"",block:"",type:"warning",onClick:t(D),size:"small",class:"!w-[100px] !bg-[#ffab30] !mr-9"},{default:R(()=>[y(" 保存 ")]),_:1},8,["disabled","onClick"])):b("",!0),t(h)&&t(i)?(d(),v(p,{key:1,disabled:!t(i),round:"",block:"",type:"warning",onClick:t(x),size:"small",class:"!w-[100px] !bg-[#ffab30]"},{default:R(()=>[y(" 提交 ")]),_:1},8,["disabled","onClick"])):b("",!0),t(E)&&!t(i)?(d(),v(p,{key:2,disabled:!t(f),round:"",block:"",type:"warning",onClick:t(C),size:"small",class:"!w-[100px] !bg-[#ffab30]"},{default:R(()=>[y(" 审核 ")]),_:1},8,["disabled","onClick"])):b("",!0)])],64)}}};export{fe as _};