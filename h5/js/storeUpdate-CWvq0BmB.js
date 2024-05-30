import{m as F,_ as w}from"./makeForm-CsZjxp4a.js";import{m as T,a as k,b as _}from"./backfill-CdlEvImR.js";import{c as f,s as i,b as I,g as h,x as $,h as r,u as C,_ as S,e as O}from"./index-zLUezw_f.js";import{l as m}from"./lodash-DhpMPSDc.js";import{b as d,m as y}from"./makeSelect-B5t5onyK.js";import{g as q}from"./getArea-DyGmKa6c.js";import{x as u}from"./xe-utils-DXe260hc.js";import{w as M}from"./wait-Dqho1LKt.js";import{a as B,s as E,b as N}from"./vant-Ckwj66YG.js";import{r as P}from"./@vueuse-QQdVrKV8.js";import{r as U,e as A,aX as v,al as D,b1 as L,u as b,F as j,aj as z}from"./@vue-ts87NNlE.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";import"./@vant-NmgEisJw.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";const K=[{...T("新增仓库"),name:"stoName",backfill(t){f().buttonText=="新增"?this.title="新增仓库":this.title=t[this.name]}},{formType:"input",value:"",name:"stoName",label:"仓库名称"},{...d(),...y("stoType",[{text:"一级仓库",value:"ZY"},{text:"二级仓库",value:"JMS"}],"dymaic"),value:"",name:"stoType",label:"仓库类型",backfill(t){this.inlineForm[0].inlineForm[0].confirm=e=>{i(this.name,"value",e.selectedOptions[0].text),i(this.name,"realValue",e.selectedOptions[0].value),i(this.name,"inlineForm.0.show",!1)},this.makeSelect(t[this.name],this.inlineForm[0].inlineForm[0].columns)}},{formType:"input",label:"地理区域",name:"locals",isLink:!0,readonly:!0,value:"",required:!0,placeholder:"请选择所在地区",middle:{value:[],province:"",city:"",area:""},click(){const t=I();this.inlineForm[0].show=t.btns.canEdit},getParam(t){const e=this.name.replace("locals",""),[a,s,o]=this.middle.value;t[`province${e}`]=a,t[`city${e}`]=s,t[`area${e}`]=o,t[this.name]=t[this.name].split("/")},async backfill(t){this.inlineForm[0].inlineForm[0].name=this.name;const e=this.name.replace("locals",""),a=h(this.name,"inlineForm.0.inlineForm.0");a.options=await m.throttle(q)(),a.options=u.mapTree(a.options,n=>({...n,value:n.text}));const s=t[`area${e}`]||t[`city${e}`];i(this.name,"inlineForm.0.inlineForm.0.value",s);const o=u.searchTree(a.options,n=>n.value==s),l=u.toTreeArray(o);a.finish({selectedOptions:l,value:s})},inlineForm:[{slot:"extra",formType:"popup",show:!1,round:!0,name:"localsPop",position:"bottom",inlineForm:[{slot:"default",formType:"cascader",title:"请选择所在地区",options:[],value:"",close(){i(this.name,"inlineForm.0.show",!1)},finish(t){const e=t.selectedOptions.map(s=>s.text).join("/"),a=t.selectedOptions.map(s=>s.value);this.value=t.value,i(this.name,e),i(this.name,"middle.value",a),i(this.name,"inlineForm.0.show",!1)}}]}]},{formType:"input",value:"",name:"address",address:"",lat:"",lng:"",loading:P(!1,5e3),label:"仓库定位",rightIcon:"location-o",clickRightIcon(){B("开发中...")}},{formType:"input",value:"",name:"stoCapacity",label:"仓库容量",...k("W")},{...d(),...y("companyId",[],"dymaic"),formType:"input",value:"",name:"companyId",label:"所属组织",async backfill(t){await M(1e3);const e=h("companyIdColumns","columns");this.makeSelect(t[this.name],e),this.inlineForm[0].inlineForm[0].confirm=a=>{i(this.name,"value",a.selectedOptions[0].text),i(this.name,"realValue",a.selectedOptions[0].value),i(this.name,"inlineForm.0.show",!1)}}},{formType:"input",labelClass:"!w-0",name:"button",valueClass:"!w-1/2",backfill(){const t=f();t.buttonText&&(this.inlineForm[1].text=t.buttonText);const e=this.name.replace("button","");this.inlineForm[0].name=e,this.inlineForm[1].name=e},getParam(t){delete t[this.name]},inlineForm:[{slot:"input",formType:"button",text:"取消",class:"w-full !rounded-none !border-[white]",click(){E(this.text)}},{slot:"extra",formType:"button",text:"更改",class:"w-1/2 !rounded-none !border-[#ffab30] !text-white !bg-[#ffab30]",async click(t){let e={};const a=this.name.replace("button",""),s=m.pickBy($(),(l,n)=>n.includes(a)),o=m.mapKeys(s,(l,n)=>n.replace(/(.*?)_\w+/,"$1"));this.text=="删除"?(e=await r.delete(`sto/remove/${o.stoId}`),await C().getData()):this.text=="更改"?e=await r.put("/sto/update",o):this.text=="新增"&&(e=await r.post("sto/create",o)),e.code==200&&N(this.text+"成功")}}]},{formType:"input",name:"stoId",value:"",class:"!hidden"},{formType:"input",name:"latitude",value:"23.001617",class:"!hidden"},{formType:"input",name:"longitude",value:"113.937768",class:"!hidden"}],R=[{formType:"",name:"companyIdColumns",columns:[],async onMounted(){const{data:t}=await r.get("company/infos?pageNum=1&pageSize=999");this.columns=t.records.map(e=>({text:e.name,value:e.companyId,...e}))},async getColumns(){return this.columns.length||m.throttle(this.onMounted)(),this.columns}}];function V(t,e){m.range(e).forEach(a=>{const s=m.cloneDeep(K).map(o=>(o.name+="_"+(a+1),o));t[a+1]=s})}const J={__name:"storeUpdate",setup(t){let e=F({hiddenColumns:R});const a=f();let s=U(0);async function o(){let l={};if(a.buttonText!="新增"){const{data:n}=await r.post("sto/list?pageNum=1&pageSize=100",{});s.value=n.records.length;const c=n.records.map((p,g)=>m.mapKeys(p,(Q,x)=>`${x}_${g+1}`));l=m.merge(...c)}else s.value=1;V(e,s.value),_(e,l)}return A(()=>{o()}),O({getData:o}),(l,n)=>{const c=w;return v(!0),D(j,null,L(b(s),p=>(v(),z(c,{form:b(e)[p],class:"pt-3","group-class":"shadowC"},null,8,["form"]))),256)}}},ge=S(J,[["__scopeId","data-v-938165f7"]]);export{ge as default};