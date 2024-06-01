import{_ as R}from"./vBtn-LXvsT-fh.js";import{a as S,s as C,b as L,E as b,B as U,h as j}from"./vant-BF4L1TGb.js";import{_ as G}from"./vantForm-CNH6TuWQ.js";import{m as q}from"./makeTitle-CzVkaK9t.js";import{f as n,b as O,g as H,s as t,j as _,c as g,h as c,D as I,y as N,o as w,u as Z,r as K,A as d,e as W}from"./index-B7VWkQ_2.js";import{b as y,m as T}from"./makeSelect-CYTCxxsZ.js";import{c as B}from"./callPhone-BS-WdTEt.js";import{l as p}from"./lodash-DhpMPSDc.js";import{g as Y}from"./getArea-BkpOAjjF.js";import{x as z}from"./xe-utils-DXe260hc.js";import{t as $}from"./class-COLQ8iHP.js";import{q as m}from"./queryUrl-BTYYWpY7.js";import{c as r,e as Q,aX as E,al as X,N as v,u as x,bA as k,F as J,aj as ee,V,be as te,am as ae,ak as re}from"./@vue-ts87NNlE.js";import{m as oe}from"./makeForm-BmsmFLmR.js";import{r as le}from"./runTime-DAjLGjV1.js";import{b as D}from"./backfill-BoX-74Dj.js";import"./makeUpload-Du0F1yJj.js";import"./axios-B4uVmeYG.js";import"./wait-Dqho1LKt.js";import"./@vant-NmgEisJw.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";const ie=[q("出租人信息"),{formType:"input",label:"姓名",name:"name",required:!0,hidden:r(()=>n()),value:"",rightIcon:"scan",onMounted(){this.value=""},onSave(){this.value||S("请输入姓名")},clickRightIcon(){C({message:"扫码功能开发中",className:"shadowC"})}},{formType:"input",label:"证件类型",name:"idCardType",hidden:r(()=>n()),required:!0,readonly:!0,value:"身份证",...y(),...T("idCardType",[{text:"身份证",value:"ID_CARD"},{text:"护照",value:"PASSPORT"},{text:"军官证",value:"MILITARY_ID"},{text:"户口簿",value:"RESIDENCE_BOOKLET"},{text:"士兵证",value:"SOLDBUCH"},{text:"港澳通行证",value:"HM_PASS"},{text:"台湾同胞来往内地通行证",value:"TAIWAN_PASS"},{text:"外国人居留证",value:"ALIEN_RESIDENCE_PERMIT"},{text:"警官证",value:"POLICE_ID"}])},{formType:"input",label:"证件号码",name:"idNumber",placeholder:"扫描证件或手动输入",required:!0,value:"",hidden:r(()=>n()),rightIcon:"scan",onMounted(){this.value=""},clickRightIcon(){C({message:"扫码功能开发中",className:"shadowC"})}},{formType:"input",label:"出租人电话",name:"phone",hidden:r(()=>n()),placeholder:"请输入出租人电话",type:"tel",required:!0,value:"",rightIcon:"phone",onMounted(){this.value=""},clickRightIcon(){B(this.value)}},{formType:"input",label:"组织名称",name:"name",required:!0,hidden:r(()=>d()),value:"",rightIcon:"scan",onMounted(){this.value=""},onSave(){!this.value&&n()&&S("请输入组织名称")},clickRightIcon(){C({message:"扫码功能开发中",className:"shadowC"})}},{formType:"input",label:"登记注册码类型",name:"regType",hidden:r(()=>d()),required:!0,readonly:!0,value:"",...y(),...T("regType",[{text:"统一社会信用代码/营业执照",value:"07"},{text:"组织机构代码",value:"30"}])},{formType:"input",label:"登记注册码",name:"regNo",placeholder:"核对证件后, 手动输入",hidden:r(()=>d()),value:"",required:!0},{formType:"input",...y(),...T("position",[{value:"1",text:"法人代表/非法人组织负责人"}]),label:"负责人类型",name:"position",placeholder:"请选择负责人类型",required:!0,hidden:r(()=>d())},{formType:"input",label:"负责人姓名",name:"name",placeholder:"请输入负责人姓名",hidden:r(()=>d()),value:"",required:!0},{formType:"input",label:"负责人证件类型",name:"certType",hidden:r(()=>d()),required:!0,readonly:!0,value:"身份证",...y(),...T("certType",[{text:"身份证",value:"ID_CARD"},{text:"护照",value:"PASSPORT"},{text:"军官证",value:"MILITARY_ID"},{text:"户口簿",value:"RESIDENCE_BOOKLET"},{text:"士兵证",value:"SOLDBUCH"},{text:"港澳通行证",value:"HM_PASS"},{text:"台湾同胞来往内地通行证",value:"TAIWAN_PASS"},{text:"外国人居留证",value:"ALIEN_RESIDENCE_PERMIT"},{text:"警官证",value:"POLICE_ID"}])},{formType:"input",label:"负责人证件号码",name:"certCode",placeholder:"扫描证件号码或手动输入",hidden:r(()=>d()),value:"",required:!0},{formType:"input",label:"法人代表手机号码",name:"cellPhone",placeholder:"请输入法人代表手机电话",hidden:r(()=>d()),value:"",required:!0},{formType:"input",label:"家庭住址区域",name:"houseAddr",readonly:!0,required:!0,placeholder:"请选择所在地区",middle:{value:[],provinceCode:"",cityCode:"",areaCode:""},isLink:!0,onMounted(){n()&&(this.label="注册地址区域")},click(){const e=O();this.inlineForm[0].show=e.btns.canEdit},getParam(e){const[o,a,l]=this.middle.value;e.houseAddr={provinceCode:o||"",cityCode:a||"",areaCode:l||""}},async backfill(e){const o=H(this.name,"inlineForm.0.inlineForm.0"),a=e.houseAddr?.areaCode||e.houseAddr?.cityCode;o.options=await Y(),t(this.name,"inlineForm.0.inlineForm.0.value",a);const l=z.searchTree(o.options,h=>h.value==a),i=z.toTreeArray(l);o.finish({selectedOptions:i,value:a})},inlineForm:[{slot:"button",formType:"popup",show:!1,round:!0,name:"houseAddrPop",position:"bottom",inlineForm:[{slot:"default",formType:"cascader",title:"请选择所在地区",options:[],value:"",close(){t("houseAddr","inlineForm.0.show",!1)},finish(e){const o=e.selectedOptions.map(l=>l.text).join("/"),a=e.selectedOptions.map(l=>l.value);p.isObject(e.value)||(this.value=e.value),t("houseAddr",o),t("houseAddr","middle.value",a),t("houseAddr","inlineForm.0.show",!1)}}]}]},{formType:"input",label:"工商注册地址",name:"detailedAddress",placeholder:"提示: 此地址是法人组织的工商登记注册地址, 可能和拟安装光伏的建筑详细地址不一致, 需按统一社会信用代码/组织机构代码证/营业执照上的地址填写",required:!0,hidden:r(()=>d()),value:"",inputAlign:"left",errorMessage:"提示: 此地址是法人组织的工商登记注册地址, 可能和拟安装光伏的建筑详细地址不一致, 需按统一社会信用代码/组织机构代码证/营业执照上的地址填写",getParam(e){e.houseAddr.detailedAddress=this.value,delete e.detailedAddress},backfill(e){this.value=e.houseAddr?.detailedAddress||""}},{formType:"input",label:"家庭住址",name:"detailedAddress",inputAlign:"left",placeholder:"(此地址是屋顶业主本人现在的家庭住址, 所以可能和需要安装光伏的房屋地址不一致。从省/自治区/直辖市/特别行政区 开始写)",required:!0,hidden:r(()=>n()),value:"",inputAlign:"left",errorMessage:"提示: 此地址是屋顶业主本人现在的家庭住址, 所以可能和需要安装光伏的房屋地址不一致。从省/自治区/直辖市/特别行政区 开始写",getParam(e){e.houseAddr.detailedAddress=this.value,delete e.detailedAddress},backfill(e){this.value=e.houseAddr?.detailedAddress||""}}],ne=[{formType:"cell",title:"销售人员信息",titleClass:$,class:"!p-0 h-[50px]"},{formType:"input",label:"销售人员姓名",name:"salesman",placeholder:"系统自动获取",value:"",readonly:!0,async onMounted(){const e=_();t("salesman","value",e.name)}},{formType:"input",label:"销售人员电话",name:"saleTelephone",type:"tel",placeholder:"请输入销售人员电话",value:"",rightIcon:"phone",clickRightIcon(){B(this.value)},async onMounted(){const e=_();t("saleTelephone","value",e.phone)}},{formType:"input",label:"订单所属组织",name:"companyId",required:!0,value:"",...y(),...T("companyId",[],"dynamic"),async backfill(e){const o=g(),a=_(),l=o.orderId?e.userId:a.userId,i=m("user-company/get-user-companies",{userId:l}),{data:h}=await c.get(i),u=h.map(f=>({value:f.company.companyId,text:f.company.name}));this.makeSelect(e[this.name]||u[0]?.value,u)}}],se=[{...q("保证人"),hidden:r(()=>n())},{formType:"input",label:"是否有保证人",name:"isSurety",value:"",hidden:r(()=>n()),onMounted(){this.value=""},...y(),...T("isSurety",[{text:"无",value:0},{text:"有",value:1}])}],ue=[{customSlot:"title",title:"授权协议签署",hidden:r(()=>n()),time:null,click(){t("fddSignTaskId","value","未签署"),t("fddSignTaskId","realValue",""),t("authorizationLetter","value","暂无数据"),t("authorizationLetter","realValue","")}},{formType:"input",hidden:r(()=>n()),label:"信息使用授权协议",name:"fddSignTaskId",readonly:!0,value:"",realValue:"",backfill(e){const o={"":"未签署",0:"未签署",null:"未签署",revoked:"已作废",undefined:"未签署"};this.value=o[e[this.name]]||"已签署",this.realValue=this.value.length>3?e[this.name]:""}},{formType:"input",label:"签署方式",hidden:r(()=>n()),value:"",name:"signeType",inlineForm:[{slot:"input",formType:"button",text:"短信签署",size:"mini",round:!0,class:"!mr-[10px] !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",click(){t("signeType",e=>{e.inlineForm[0].text="发送短信"})}},{slot:"extra",formType:"button",text:"App",round:!0,size:"mini",class:" !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",click(){t("signeType",e=>{e.inlineForm[0].text="开始签署"})}}]},{formType:"input",inputAlign:"center",name:"signeType",hidden:r(()=>n()),inlineForm:[{slot:"input",formType:"button",class:" !text-[14px] !px-5 !py-4 !bg-[#ffab30] !border-0 !text-white",round:!0,size:"mini",text:"发送短信",async click(){I();const e=N();if(!["name","idNumber","phone"].every(i=>e[i])){S("姓名、身份证、手机号为必填项");return}const{data:a}=await c.get(m("customer/fdd-signed",p.pick(e,["idNumber"]))),l=p.get(a,"authorizationLetter");if(this.text=="发送短信"){if(e.signeType="sms",!l){await c.get(m("fdd/get-actor-url",{...g(),...p.pick(e,["signeType"])})),L("短信发送成功");return}b({message:"该出租人已签署信息使用授权协议书, 是否使用已有的授权协议书?",confirmButtonText:"使用",cancelButtonText:"不使用",confirmButtonColor:"#ffab30",closeOnClickOverlay:!0}).then(()=>{t("signeType","value",a.signeType),t("fddSignTaskId","value","已签署"),t("fddSignTaskId","realValue",a.fddSignTaskId),t("authorizationLetter","realValue",a.authorizationLetter),t("authorizationLetter","value","协议查看")}).catch(async()=>{t("fddSignTaskId","value","未签署"),t("fddSignTaskId","realValue",""),t("authorizationLetter","value","暂无数据"),t("authorizationLetter","realValue",""),await I(),await c.get(m("fdd/get-actor-url",{...g(),...p.pick(e,["signeType"])})),L("短信发送成功"),t("loopGetData",i=>i.start())})}if(this.text=="开始签署"){if(e.signeType="app",!l){const{data:i}=await c.get(m("fdd/get-actor-url",{...g(),...p.pick(e,["signeType"])}));b({message:"是否跳转至签署页面",confirmButtonColor:"#ffab30",closeOnClickOverlay:!0}).then(()=>{w(i.actorSignTaskEmbedUrl)}).catch(()=>{t("authorizationLetter","value","协议查看"),t("authorizationLetter","realValue",i.authorizationLetter)});return}b({message:"该出租人已签署信息使用授权协议书, 是否使用已有的授权协议书?",confirmButtonText:"使用",cancelButtonText:"不使用",confirmButtonColor:"#ffab30",closeOnClickOverlay:!0}).then(()=>{t("signeType","value",a.signeType),t("fddSignTaskId","value","已签署"),t("fddSignTaskId","realValue",a.fddSignTaskId),t("authorizationLetter","realValue",a.authorizationLetter),t("authorizationLetter","value","协议查看")}).catch(async()=>{t("fddSignTaskId","value","未签署"),t("fddSignTaskId","realValue",""),t("authorizationLetter","value","暂无数据"),t("authorizationLetter","realValue",""),await I();const{data:i}=await c.get(m("fdd/get-actor-url",{...g(),...p.pick(e,["signeType"])}));b({message:"是否跳转至签署页面",confirmButtonColor:"#ffab30",closeOnClickOverlay:!0}).then(()=>{w(i.actorSignTaskEmbedUrl)}).catch(()=>{t("authorizationLetter","value","协议查看"),t("authorizationLetter","realValue",i.authorizationLetter)}).finally(()=>{t("loopGetData",h=>h.start())})})}}}]},{fomrType:"",name:"loopGetData",time:null,start(){this.time=setInterval(()=>{Z().getData(!1)},3e3)},stop(){clearInterval(this.time),this.time=null}},{formType:"input",label:"已签署协议查看",required:!0,hidden:r(()=>n()),placeholder:"暂无数据",name:"authorizationLetter",realValue:"",readonly:!0,disabled:!1,isLink:!0,value:"",click(){this.realValue?(I(),console.log(this.realValue,222),K.push({path:"/previewFile",query:{url:this.realValue,title:"信息使用协议"}})):S({message:"暂无数据",className:"shadowC !bg-[red]"})},backfill(e){this.realValue=e[this.name],this.value=e[this.name]?"协议查看":""}}],de={class:"flex justify-end"},je={__name:"inquiry",setup(e){let o=oe({lessorInfo:ie,salespersonInfo:ne,guarantor:se,signInfo:ue});const a=g();O(),Q(()=>{le(l)});async function l(u=!0){if(a.orderId){const f="/order/get-pre-approval",{data:s}=await c.get(m(f,a));u&&D(o,s),console.log(s,333333333),s.fddSignTaskId&&!s.authorizationLetter||(t("fddSignTaskId","value","已签署"),t("fddSignTaskId","realValue",s.fddSignTaskId),t("authorizationLetter","realValue",s.authorizationLetter),t("authorizationLetter","value","协议查看"))}else u&&D(o,{btns:{canSave:!0,canEdit:!0,hasEditBtn:!0}})}async function i(){const u=p.merge(N(),a),f=n()?"order/org/put-pre-approval":"order/put-pre-approval",{data:s}=await c.post(f,u);return a.orderId=s,s}async function h(){const u=m("approval/put-approval/lease/pre-approval",a);await c.post(u)}return W({getData:l,saveData:i,submitData:h}),(u,f)=>{const s=G,F=U,P=j,M=R;return E(),X(J,null,[v(s,{form:x(o).lessorInfo,class:"pt-3","group-class":"shadowC"},null,8,["form"]),v(s,{form:x(o).salespersonInfo,class:"pt-3","group-class":"shadowC"},null,8,["form"]),v(s,{form:x(o).guarantor,class:"pt-3","group-class":"shadowC"},null,8,["form"]),v(s,{form:x(o).signInfo,class:"pt-3","group-class":"shadowC"},{title:k(({slot:A})=>[A.hidden?re("",!0):(E(),ee(P,{key:0,"title-class":"!text-[20px] bg-[white] pl-[20px] flex items-center  text-[#3f3f3f]",class:"!bg-[white] !p-0 h-[50px] !pr-[20px]"},{title:k(()=>[V(te(A.title),1)]),value:k(()=>[ae("div",de,[v(F,{round:"",block:"",size:"mini",class:"!text-[14px] !w-[70px] !py-3 !bg-[#f5f5f5] !border-0",onClick:()=>A.click()},{default:k(()=>[V(" 重签 ")]),_:2},1032,["onClick"])])]),_:2},1024))]),_:1},8,["form"]),v(M)],64)}}};export{je as default};
