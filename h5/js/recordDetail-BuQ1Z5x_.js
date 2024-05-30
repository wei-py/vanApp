import{m as D,_ as F}from"./makeForm-DgvH7MRW.js";import{B as j,Q as E,j as L,f as M,h as O}from"./vant-Ckwj66YG.js";import{f as A,c as Q,e as W,b3 as v,aX as C,al as g,N as n,bA as r,u as J,am as m,F as x,b1 as X,aj as G,be as w,bD as k,V as d}from"./@vue-ts87NNlE.js";import{m as H,a as I,b as q}from"./backfill-D0WLbo-C.js";import{b as U,m as T}from"./makeSelect-BqBItR9B.js";import{h as p,D as K,j as R,g as Y,c as Z,q as ee,E as ae,x as te}from"./index-DwbTWwPI.js";import{l as y}from"./lodash-DhpMPSDc.js";import{q as _}from"./queryUrl-BTYYWpY7.js";import{x as u}from"./xe-utils-DXe260hc.js";import{m as oe}from"./makeUpload-DSH9fe2B.js";import"./@vant-NmgEisJw.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";const se=[H("备案证详情"),{formType:"input",label:"项目公司",required:!0,name:"companyId",...U(),...T("companyId",[],"dynamic"),async backfill(e){const{data:t}=await p.get(_("leaseLessor/getAuth",{pageNum:1,pageSize:999})),a=t.map(s=>({...s,text:`${s.code}, ${s.companyName}, ${s.areaId}`,value:s.code}));this.makeSelect(e[this.name]||a[0]?.value,a)}},{formType:"input",label:"备案类型",required:!0,readonly:!0,value:"",name:"recordType",...U(),...T("recordType",[{text:"大备案证",value:1},{text:"精准备案",value:2}])},{customSlot:"accreditCompanyIds",label:"可用组织",required:!0,show:!1,name:"accreditCompanyIds",value:[],columns:[],middleColumns:[],checkColumns:[],confirm(){this.show=!1,this.checkColumns=y.clone(this.middleColumns),this.checkColumns=y.uniqBy(this.checkColumns,"value")},getParam(e){e[this.name]=`[${this.checkColumns.map(t=>t.value+"")}]`},check(e){if(e.checked)this.middleColumns.push(e);else{const t=this.middleColumns.findIndex(a=>a==e.value);this.middleColumns.splice(t,1)}},async backfill(e){const{data:t}=await p.get(_("/company/infos",{currentPage:1,pageSize:999}));this.columns=t.records.map(a=>({...a,text:a.name,value:a.companyId})),JSON.parse(e[this.name]||"[]").forEach(a=>{const s=this.columns.find(f=>f.value==a);s&&(y.set(s,"checked",!0),this.check(s))}),this.confirm()},onMounted(){A(()=>{this.columns=[],this.middleColumns=[],this.checkColumns=[]})}},{formType:"input",label:"备案证编码",required:!0,value:"",placeholder:"请输入",name:"recordCertificateId"},{formType:"input",label:"备案证容量",required:!0,value:"",placeholder:"请输入",name:"recordCertificateCapacity",type:"digit",...I("kW"),getParam(e){e.recordCertificateCapacity=u.multiply(e.recordCertificateCapacity,1e3)},backfill(e){this.value=u.divide(e.recordCertificateCapacity,1e3)}},{formType:"input",label:"备案证剩余容量",value:"",placeholder:"请输入",name:"surplusCapacity",type:"digit",hidden:Q(()=>Y("recordType","realValue")!=1),...I("kW"),getParam(e){e.surplusCapacity=u.multiply(e.surplusCapacity,1e3)},backfill(e){this.value=u.divide(e.surplusCapacity,1e3)}},{...oe(1,100,"*",!0,void 0,"accessory"),label:"备案证附件",required:!0,name:"accessory",getParam(e){e[this.name]=K(e[this.name][0]);const t=R();e.userId=t.userId}}],ce={class:"!text-center"},re={class:"xCenter"},ne={class:"xCenter pt-2"},Ne={__name:"recordDetail",setup(e){const t=Z(),a=D({record:se});W(async()=>{t.recordCertificateId?s():(ee(),q(a,{}))});async function s(){const{data:i}=await p.get(_("record/one",t));q(a,i)}async function f(){await ae();const i=te(),l=t.recordCertificateId?"/record/update":"/record/new";return await p.post(l,i)}return(i,l)=>{const b=E,V=L,$=v("vxe-column"),B=v("vxe-table"),h=j,S=M,N=O,P=F;return C(),g(x,null,[n(P,{form:J(a).record,class:"pt-3","group-class":"shadowC"},{accreditCompanyIds:r(({slot:o})=>[n(N,{name:o.name,label:o.label,"input-align":"right",required:o.required,isLink:"",onClick:c=>o.show=!0,valueClass:""},{input:r(()=>[m("div",null,[(C(!0),g(x,null,X(o.checkColumns,c=>(C(),G(b,{round:"",type:"primary",class:"!py-1 !w-full xCenter",color:"#ffab30"},{default:r(()=>[m("div",ce,w(c.name),1)]),_:2},1024))),256))]),n(S,{show:o.show,"onUpdate:show":c=>o.show=c,round:"",position:"bottom",class:"h-[50vh]",closeable:"",onClickCloseIcon:k(c=>o.show=!1,["stop"]),onClickOverlay:k(c=>o.show=!1,["stop"])},{default:r(()=>[n(B,{data:o.columns,align:"left","header-align":"center","max-height":"90%"},{default:r(()=>[n($,{field:"name"},{default:r(({row:c})=>[n(V,{"icon-size":"16px","checked-color":"#ffab30",class:"van-haptics-feedback w-full",modelValue:c.checked,"onUpdate:modelValue":z=>c.checked=z,onClick:()=>o.check(c)},{default:r(()=>[d(w(c.name),1)]),_:2},1032,["modelValue","onUpdate:modelValue","onClick"])]),_:2},1024)]),_:2},1032,["data"]),m("div",re,[n(h,{round:"",block:"",class:"!my-1 !border-none !w-[50%] !bg-[#ffab30]",size:"small",type:"primary",onClick:k(()=>o.confirm(),["stop"])},{default:r(()=>[d(" 确认 ")]),_:2},1032,["onClick"])])]),_:2},1032,["show","onUpdate:show","onClickCloseIcon","onClickOverlay"])]),_:2},1032,["name","label","required","onClick"])]),_:1},8,["form"]),m("div",ne,[n(h,{block:"",type:"warning",round:"",size:"small",class:"!w-[100px] !bg-[#ffab30] !mr-8",onClick:l[0]||(l[0]=o=>i.$router.back())},{default:r(()=>[d("取消")]),_:1}),n(h,{block:"",type:"warning",round:"",size:"small",class:"!w-[100px] !bg-[#ffab30]",onClick:f},{default:r(()=>[d("保存")]),_:1})])],64)}}};export{Ne as default};
