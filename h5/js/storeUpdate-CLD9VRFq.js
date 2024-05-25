import{m as F,_ as T}from"./makeForm-Bte3ATMg.js";import{m as w,a as k,b as _}from"./backfill-DlSaR-Hj.js";import{c as h,s as i,b as I,g as f,I as $,v as C,h as r,u as S,_ as O,e as q}from"./index-Dd7uG9g0.js";import{l as m}from"./lodash-C1iNKp1x.js";import{b as d,m as v}from"./makeSelect-BCWz2TlJ.js";import{g as M}from"./getArea-B2Z67LUh.js";import{x as p}from"./xe-utils-D22uZPtC.js";import{a as B,s as E,b as N}from"./vant-xiv0EFx3.js";import{r as P}from"./@vueuse-BYPNFz0v.js";import{r as U,e as A,aX as y,al as D,b1 as L,u as b,F as j,aj as z}from"./@vue-BHA94vdH.js";import"./class-rRG2y2aF.js";import"./pinia-BOLtM30a.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-BQWAt7JZ.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-DYFNhZJM.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus--RpDJ8QK.js";import"./vue3-photo-preview-Byv7Qnko.js";import"./vxe-table-BpFaW3Xd.js";import"./dom-zindex-GlLoxNk1.js";import"./@vant-BMzV8Unt.js";import"./dayjs-19KvoO9f.js";const K=[{...w("新增仓库"),name:"stoName",backfill(t){h().buttonText=="新增"?this.title="新增仓库":this.title=t[this.name]}},{formType:"input",value:"",name:"stoName",label:"仓库名称"},{...d(),...v("stoType",[{text:"一级仓库",value:"ZY"},{text:"二级仓库",value:"JMS"}],"dymaic"),value:"",name:"stoType",label:"仓库类型",backfill(t){this.inlineForm[0].inlineForm[0].confirm=e=>{i(this.name,"value",e.selectedOptions[0].text),i(this.name,"realValue",e.selectedOptions[0].value),i(this.name,"inlineForm.0.show",!1)},this.makeSelect(t[this.name],this.inlineForm[0].inlineForm[0].columns)}},{formType:"input",label:"地理区域",name:"locals",isLink:!0,readonly:!0,value:"",required:!0,placeholder:"请选择所在地区",middle:{value:[],province:"",city:"",area:""},click(){const t=I();this.inlineForm[0].show=t.btns.canEdit},getParam(t){const e=this.name.replace("locals",""),[a,s,o]=this.middle.value;t[`province${e}`]=a,t[`city${e}`]=s,t[`area${e}`]=o,t[this.name]=t[this.name].split("/")},async backfill(t){this.inlineForm[0].inlineForm[0].name=this.name;const e=this.name.replace("locals",""),a=f(this.name,"inlineForm.0.inlineForm.0");a.options=await m.throttle(M)(),a.options=p.mapTree(a.options,n=>({...n,value:n.text}));const s=t[`area${e}`]||t[`city${e}`];i(this.name,"inlineForm.0.inlineForm.0.value",s);const o=p.searchTree(a.options,n=>n.value==s),l=p.toTreeArray(o);a.finish({selectedOptions:l,value:s})},inlineForm:[{slot:"extra",formType:"popup",show:!1,round:!0,name:"localsPop",position:"bottom",inlineForm:[{slot:"default",formType:"cascader",title:"请选择所在地区",options:[],value:"",close(){i(this.name,"inlineForm.0.show",!1)},finish(t){const e=t.selectedOptions.map(s=>s.text).join("/"),a=t.selectedOptions.map(s=>s.value);this.value=t.value,i(this.name,e),i(this.name,"middle.value",a),i(this.name,"inlineForm.0.show",!1)}}]}]},{formType:"input",value:"",name:"address",address:"",lat:"",lng:"",loading:P(!1,5e3),label:"仓库定位",rightIcon:"location-o",clickRightIcon(){B("开发中...")}},{formType:"input",value:"",name:"stoCapacity",label:"仓库容量",...k("W")},{...d(),...v("companyId",[],"dymaic"),formType:"input",value:"",name:"companyId",label:"所属组织",async backfill(t){await $(1e3);const e=f("companyIdColumns","columns");this.makeSelect(t[this.name],e),this.inlineForm[0].inlineForm[0].confirm=a=>{i(this.name,"value",a.selectedOptions[0].text),i(this.name,"realValue",a.selectedOptions[0].value),i(this.name,"inlineForm.0.show",!1)}}},{formType:"input",labelClass:"!w-0",name:"button",valueClass:"!w-1/2",backfill(){const t=h();t.buttonText&&(this.inlineForm[1].text=t.buttonText);const e=this.name.replace("button","");this.inlineForm[0].name=e,this.inlineForm[1].name=e},getParam(t){delete t[this.name]},inlineForm:[{slot:"input",formType:"button",text:"取消",class:"w-full !rounded-none !border-[white]",click(){E(this.text)}},{slot:"extra",formType:"button",text:"更改",class:"w-1/2 !rounded-none !border-[#ffab30] !text-white !bg-[#ffab30]",async click(t){let e={};const a=this.name.replace("button",""),s=m.pickBy(C(),(l,n)=>n.includes(a)),o=m.mapKeys(s,(l,n)=>n.replace(/(.*?)_\w+/,"$1"));this.text=="删除"?(e=await r.delete(`sto/remove/${o.stoId}`),await S().getData()):this.text=="更改"?e=await r.put("/sto/update",o):this.text=="新增"&&(e=await r.post("sto/create",o)),e.code==200&&N(this.text+"成功")}}]},{formType:"input",name:"stoId",value:"",class:"!hidden"},{formType:"input",name:"latitude",value:"23.001617",class:"!hidden"},{formType:"input",name:"longitude",value:"113.937768",class:"!hidden"}],R=[{formType:"",name:"companyIdColumns",columns:[],async onMounted(){const{data:t}=await r.get("company/infos?pageNum=1&pageSize=999");this.columns=t.records.map(e=>({text:e.name,value:e.companyId,...e}))},async getColumns(){return this.columns.length||m.throttle(this.onMounted)(),this.columns}}];function V(t,e){m.range(e).forEach(a=>{const s=m.cloneDeep(K).map(o=>(o.name+="_"+(a+1),o));t[a+1]=s})}const J={__name:"storeUpdate",setup(t){let e=F({hiddenColumns:R});const a=h();let s=U(0);async function o(){let l={};if(a.buttonText!="新增"){const{data:n}=await r.post("sto/list?pageNum=1&pageSize=100",{});s.value=n.records.length;const c=n.records.map((u,g)=>m.mapKeys(u,(Q,x)=>`${x}_${g+1}`));l=m.merge(...c)}else s.value=1;V(e,s.value),_(e,l)}return A(()=>{o()}),q({getData:o}),(l,n)=>{const c=T;return y(!0),D(j,null,L(b(s),u=>(y(),z(c,{form:b(e)[u],class:"pt-3","group-class":"shadowC"},null,8,["form"]))),256)}}},ye=O(J,[["__scopeId","data-v-938165f7"]]);export{ye as default};