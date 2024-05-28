import{_ as z}from"./vBtn-CFSnyGjN.js";import{E as O,b as H,r as K,m as Q}from"./vant-PdAvEskO.js";import{m as J,_ as ee}from"./makeForm-LXfxxl4j.js";import{m as k,b as $}from"./backfill-YTqXYfvZ.js";import{i,s,x as o,d,b as D,g as M,B as y,h as c,c as T,l as ae,C as te,f as N,w as x,e as le,v as re,D as ne}from"./index-D0ldpvYI.js";import{b as p,m as h}from"./makeSelect-C4yghakN.js";import{l as n}from"./lodash-D-SkTV7p.js";import{m as oe}from"./makeDate-BEqrKniQ.js";import{m as f,a as A}from"./makeUpload-BNh7QOMX.js";import{a as S}from"./arrayToVantColumns-BXijbtnA.js";import{g as L}from"./getArea-BZFyy02y.js";import{x as E}from"./xe-utils-CfMIR_ol.js";import{w as R}from"./watchItem-CNvzLEiB.js";import{q as C}from"./queryUrl-DaTGvNW7.js";import{c as l,f as ie,e as se,aX as P,al as U,N as v,u as F,bA as Z,F as Y,aj as V,b1 as ue,ak as de}from"./@vue-ts87NNlE.js";import"./@vant-NmgEisJw.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-DLUPp4BS.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-jb8ML41u.js";import"./vxe-table-CAWzlaHI.js";import"./dom-zindex-GlLoxNk1.js";import"./@vue-office-D7CPqAIZ.js";import"./vue-demi-BO4xsXkA.js";import"./vue-B7fnMq6U.js";import"./dayjs-C2mSY6L-.js";const j={getData:{YUEXIU_ZZD:"order/get-customer-info",YUEXIU_ZZD_ORG:"order/org/get-customer-info",TYZF_ZZD:"general-investor/get-customer-np",TYZF_ZZD_ORG:"general-investor/get-customer-org"},saveData:{YUEXIU_ZZD:"order/put-customer-info",YUEXIU_ZZD_ORG:"order/org/put-customer-info",TYZF_ZZD:"general-investor/put-customer-np",TYZF_ZZD_ORG:"general-investor/put-customer-org"}},me=[k("出租人信息"),{formType:"input",label:"姓名",name:"name",value:"",hidden:l(()=>d()),required:!0,placeholder:"带过来的保存的信息",readonly:!0,onMounted(){i()&&(this.placeholder="手动输入或扫描证件",this.readonly=!1)}},{formType:"input",label:"证件类型",name:"idCardType",hidden:l(()=>!i()||d()),required:!0,readonly:!0,value:"身份证",...p(),...h("idCardType",[{text:"身份证",value:"ID_CARD"},{text:"护照",value:"PASSPORT"},{text:"军官证",value:"MILITARY_ID"},{text:"户口簿",value:"RESIDENCE_BOOKLET"},{text:"士兵证",value:"SOLDBUCH"},{text:"港澳通行证",value:"HM_PASS"},{text:"台湾同胞来往内地通行证",value:"TAIWAN_PASS"},{text:"外国人居留证",value:"ALIEN_RESIDENCE_PERMIT"},{text:"警官证",value:"POLICE_ID"}]),confirm(e){s("dateBirth","hidden",e.value=="ID_CARD")},onMounted(){i()&&(this.placeholder="请选择证件类型")}},{formType:"input",label:"证件号码",hidden:l(()=>d()),name:"idNumber",value:"",required:!0,readonly:!0,placeholder:"带过来的保存的信息",backfill(e){this.value=e[this.name],s("cardBukle",a=>{a.tabs[1].inlineForm[2].value=e[this.name],a.tabs[1].inlineForm[3].value=n.get(e,"data.cusBankCardTwo.corpCommSerno"),a.tabs[1].inlineForm[4].value=n.get(e,"data.cusBankCardTwo.result"),a.tabs[2].inlineForm[2].value=e[this.name],a.tabs[2].inlineForm[3].value=n.get(e,"data.cusBankCardTwo.corpCommSerno"),a.tabs[2].inlineForm[4].value=n.get(e,"data.cusBankCardTwo.result"),a.tabs[0].inlineForm.forEach(t=>{t.value=n.get(e,`data.data${t.name}`)||t.value})})},onMounted(){i()&&(this.placeholder="手动输入或扫描证件",this.readonly=!1)}},{...oe({name:"dateBirth"}),required:!0,label:"出生日期",name:"dateBirth",hidden:!0,onMounted(){ie(()=>{this.value=""})}},{formType:"cell",title:"证件照片",name:"",hidden:l(()=>d()),readonly:!0,titleClass:"xCenter text-[16px]"},{...f(1,50),required:!0,label:"证件正面(头像面)",name:"idCardFront",hidden:l(()=>d())},{...f(1,50),required:!0,label:"证件反面(国徽面)",name:"idCardBack",hidden:l(()=>d())},{formType:"input",label:"出租人电话",name:"phone",value:"",required:!0,hidden:l(()=>d()),readonly:!0,placeholder:"带过来的保存的信息",onMounted(){i()&&(this.placeholder="请输入",this.readonly=!1)}},{formType:"input",label:"婚姻信息",value:"",name:"maritalStatus",placeholder:"请选择婚姻信息",hidden:l(()=>i()||d()),...p(),...h("maritalStatus",[{text:"已婚",value:"已婚"},{text:"未婚",value:"未婚"}])},{formType:"input",label:"教育程度",name:"educationalBackground",placeholder:"请选择教育程度",value:"",hidden:l(()=>i()||d()),...p(),...h("educationalBackground",[{text:"初等教育",value:"初等教育"},{text:"中等教育",value:"中等教育"},{text:"高等教育",value:"高等教育"}])},{formType:"input",label:"职业",name:"career",placeholder:"请选择职业",value:"",hidden:l(()=>i()||d()),...p(),...h("career",S(["国家机关、党群组织、企业、事业单位负责人","专业技术人员","办事人员和有关人员","商业、服务业人员","农、林、牧、渔、水利业生产人员","生产、运输设备操作人员及有关人员","军人","不便分类的其他从业人员"]))},{formType:"input",label:"家庭经济情况",name:"economy",placeholder:"请选择家庭经济情况",value:"",hidden:l(()=>i()||d()),...p(),...h("economy",S(["赤贫","很穷","穷","小康","中产","高产","小富","中富","巨富"]))},{formType:"input",label:"健康情况",name:"health",placeholder:"请选择健康情况",value:"",hidden:l(()=>i()||d()),...p(),...h("health",S(["健康","亚健康","疾病"]))},{formType:"input",label:"组织全称",name:"orgName",value:"",hidden:l(()=>o()),required:!0,placeholder:"带过来的保存的信息"},{formType:"input",label:"登记注册码类型",name:"regType",hidden:l(()=>!i()||o()),required:!0,readonly:!0,value:"",...p(),...h("regType",[{text:"统一社会信用代码/营业执照",value:"07"},{text:"组织机构代码",value:"30"}])},{formType:"input",label:"登记注册码",name:"regNo",value:"",hidden:l(()=>o()),required:!0,placeholder:"带过来的保存的信息"},{formType:"input",...p(),...h("position",[{value:"1",text:"法人代表/非法人组织负责人"}]),label:"负责人类型",name:"position",placeholder:"请选择负责人类型",required:!0,hidden:l(()=>!i()||o()),newBackfill(e){this.backfill(e.orgMainMember,!0)},getParam(e){n.set(e,"orgMainMember."+this.name,this.realValue),console.log(e),delete e[this.name]}},()=>!i()||o()?[]:[{formType:"input",label:"负责人姓名",name:"name",placeholder:"请输入负责人姓名",hidden:l(()=>!i()||o()),value:"",required:!0,backfill(e){this.value=n.get(e,`orgMainMember.${this.name}`)},getParam(e){n.set(e,"orgMainMember."+this.name,this.value),delete e[this.name]}}],{formType:"input",label:"负责人证件类型",name:"certType",hidden:l(()=>!i()||o()),required:!0,readonly:!0,value:"身份证",...p(),...h("certType",[{text:"身份证",value:"ID_CARD"},{text:"护照",value:"PASSPORT"},{text:"军官证",value:"MILITARY_ID"},{text:"户口簿",value:"RESIDENCE_BOOKLET"},{text:"士兵证",value:"SOLDBUCH"},{text:"港澳通行证",value:"HM_PASS"},{text:"台湾同胞来往内地通行证",value:"TAIWAN_PASS"},{text:"外国人居留证",value:"ALIEN_RESIDENCE_PERMIT"},{text:"警官证",value:"POLICE_ID"}]),newBackfill(e){this.backfill(e.orgMainMember,!0)},getParam(e){n.set(e,"orgMainMember."+this.name,this.realValue),delete e[this.name]}},{formType:"input",label:"负责人证件号码",name:"certCode",placeholder:"扫描证件号码或手动输入",hidden:l(()=>!i()||o()),value:"",required:!0,backfill(e){this.value=n.get(e,`orgMainMember.${this.name}`)},getParam(e){n.set(e,"orgMainMember."+this.name,this.value),delete e[this.name]}},{formType:"input",label:"法人代表手机号码",name:"cellPhone",value:"",hidden:l(()=>o()),required:!0,placeholder:"带过来的保存的信息"},{formType:"input",label:"家庭住址区域",name:"houseAddr",readonly:!0,required:!0,hidden:l(()=>!i()||o()),placeholder:"",middle:{value:[],provinceCode:"",cityCode:"",areaCode:""},isLink:!0,onMounted(){d()?(this.label="注册地址区域",this.name="regAddress",this.inlineForm[0].name="regAddressPop",this.inlineForm[0].inlineForm[0].upName=this.name):(this.label="家庭住址区域",this.name="houseAddr",this.inlineForm[0].name="houseAddrPop",this.inlineForm[0].inlineForm[0].upName=this.name)},click(){const e=D();this.inlineForm[0].show=e.btns.canEdit},getParam(e){const[a,t,r]=this.middle.value;e[this.name]={provinceCode:a||"",cityCode:t||"",areaCode:r||""}},async backfill(e){const a=M(this.name,"inlineForm.0.inlineForm.0"),t=e[this.name]?.areaCode||e[this.name]?.cityCode;a.options=await L(),s(this.name,"inlineForm.0.inlineForm.0.value",t);const r=E.searchTree(a.options,u=>u.value==t),m=E.toTreeArray(r);a.finish({selectedOptions:m,value:t})},inlineForm:[{slot:"button",formType:"popup",show:!1,round:!0,name:"houseAddrPop",position:"bottom",inlineForm:[{slot:"default",formType:"cascader",title:"请选择所在地区",options:[],upName:"houseAddr",value:"",close(){s(this.upName,"inlineForm.0.show",!1)},finish(e){const a=e.selectedOptions.map(r=>r.text).join("/"),t=e.selectedOptions.map(r=>r.value);n.isObject(e.value)||(this.value=e.value),s(this.upName,a),s(this.upName,"middle.value",t),s(this.upName,"inlineForm.0.show",!1)}}]}]},{formType:"input",label:"工商注册地址",name:"detailedAddress",placeholder:"提示: 此地址是法人组织的工商登记注册地址, 可能和拟安装光伏的建筑详细地址不一致, 需按统一社会信用代码/组织机构代码证/营业执照上的地址填写",required:!0,hidden:l(()=>!i()||o()),value:"",inputAlign:"left",errorMessage:"提示: 此地址是法人组织的工商登记注册地址, 可能和拟安装光伏的建筑详细地址不一致, 需按统一社会信用代码/组织机构代码证/营业执照上的地址填写",getParam(e){n.set(e,"regAddress.detailedAddress",this.value),delete e.detailedAddress},backfill(e){this.value=e.regAddress?.detailedAddress||""}},{formType:"cell",title:"法人证件照",name:"",hidden:l(()=>o()),readonly:!0,titleClass:"xCenter text-[16px]"},{...f(1,50),name:"orgLegalIdCardFront",label:"法人代表证件正面(头像面)",hidden:l(()=>o()),required:!0,getParam(e){n.set(e,`regImages.${this.name}`,y(this.inlineForm[0].value[0])||""),delete e[this.name]}},{...f(1,50),name:"orgLegalIdCardBack",label:"法人代表证件反面(国徽面)",hidden:l(()=>o()),required:!0,getParam(e){n.set(e,`regImages.${this.name}`,y(this.inlineForm[0].value[0])||""),delete e[this.name]}},{...f(1,100),name:"orgLicense",hidden:l(()=>o()),label:"统一社会信用代码证/组织机构代码证/营业执照",required:!0,getParam(e){n.set(e,`regImages.${this.name}`,y(this.inlineForm[0].value[0])||""),delete e[this.name]}},{formType:"cell",value:"提示1: 出租方为村民委员会, 上传统一社会信用代码证/组织机构代码证; 出租方为村经济联合社, 上传农村集体经济组织登记证/营业执照",valueClass:"text-red !text-left",hidden:l(()=>o())},{...f(999,100),name:"resolutionPaper",hidden:l(()=>o()),label:"村民代表大会决议书",required:!0,onMounted(){i()&&(this.required=!1,this.label="村民代表大会决议书(选填)")},getParam(e){n.set(e,`regImages.${this.name}`,(e[this.name]||[]).map(a=>y(a))),console.log(e.regImages,33333),delete e[this.name]},backfill(e){n.bind(A,this)(e)}},{...f(999,100),name:"committeeRegulation",hidden:l(()=>o()),label:"村委议事章程(选填)",required:!1,getParam(e){n.set(e,`regImages.${this.name}`,(e[this.name]||[]).map(a=>y(a))),delete e[this.name]},backfill(e){n.bind(A,this)(e)}},{...f(999,100),name:"orgLandUseCertificate",hidden:l(()=>o()),label:"集体土地使用证",required:!0,onMounted(){i()&&(this.required=!1,this.label="集体土地使用证(选填)")},getParam(e){n.set(e,`regImages.${this.name}`,(e[this.name]||[]).map(a=>y(a))),delete e[this.name]},backfill(e){n.bind(A,this)(e)}},{...f(999,100),name:"orgLandUseCertificateAuthFile",hidden:l(()=>o()),label:"产权证明",required:!0,getParam(e){n.set(e,`regImages.${this.name}`,(e[this.name]||[]).map(a=>y(a))),delete e[this.name]},backfill(e){n.bind(A,this)(e)}},{formType:"cell",value:"提示2: 支持不动产证书/不动产登记部门查册证明/国土资源管理部门确权文件(加盖村委章)/上一级政府证明(加盖村委章)",valueClass:"text-red !text-left",hidden:l(()=>o())},{formType:"input",label:"省市区",name:"houseAddr",hidden:!1,isLink:!0,readonly:!0,value:"",required:!0,placeholder:"请选择所在地区",middle:{value:[],provinceCode:"",cityCode:"",areaCode:""},onMounted(){i()&&o()&&(this.placeholder="请选择房屋所在地区")},click(){const e=D();this.inlineForm[0].show=e.btns.canEdit},getParam(e){const[a,t,r]=this.middle.value;n.merge(e,{provinceCode:a,cityCode:t,areaCode:r})},async backfill(e){const a=M(this.name,"inlineForm.0.inlineForm.0");a.options=await L();const t=e.areaCode||e.cityCode;s(this.name,"inlineForm.0.inlineForm.0.value",t);const r=E.searchTree(a.options,u=>u.value==t),m=E.toTreeArray(r);a.finish({selectedOptions:m,value:t})},inlineForm:[{slot:"extra",formType:"popup",show:!1,round:!0,name:"houseAddrPop",position:"bottom",inlineForm:[{slot:"default",formType:"cascader",title:"请选择所在地区",options:[],value:"",close(){s("houseAddr","inlineForm.0.show",!1)},finish(e){const a=e.selectedOptions.map(r=>r.text).join("/"),t=e.selectedOptions.map(r=>r.value);this.value=e.value,s("houseAddr",a),s("houseAddr","middle.value",t),s("houseAddr","inlineForm.0.show",!1)}}]}]},{formType:"input",label:"详细地址",name:"installationAddress",inputAlign:"left",placeholder:"(从省/自治区/直辖市/特别行政区 开始写)",required:!0,hidden:!1,value:"",onMounted(){}},{formType:"cell",value:"提示: 若无不动产权证/房产证/宅基地证, 需和村委开具的房屋权属证明地址完全一致(从省/自治区/直辖市/特别行政区 开始写)",valueClass:"text-red !text-left",hidden:l(()=>d())},{formType:"cell",value:"提示: 需对照不动产权证/集体土地使用证/查册证明/确权文件 上的建筑地址填写, 必须从省/自治区/直辖市/特别行政区 开始写",valueClass:"text-red !text-left",hidden:l(()=>o())}],ce=[{...k("租金收益银行卡"),onMounted(){this.title=o()?"租金收益银行卡":"租金收益对公账户"}},{...f(1,100,"*"),required:!0,label:"银行卡-卡号面",name:"bankCardFront",hidden:l(()=>d())},{...f(999,100),required:!0,label:"对公账户信息(盖公章)",name:"publicAccountInformation",hidden:l(()=>o()),getParam(e){n.set(e,`regImages.${this.name}`,(e[this.name]||[]).map(a=>y(a))),delete e[this.name]},backfill(e){n.bind(A,this)(e)}},{...f(999,100,"*"),required:!0,label:"银行印鉴留样原件",name:"bankSealSample",hidden:l(()=>o()),getParam(e){n.set(e,`regImages.${this.name}`,(e[this.name]||[]).map(a=>y(a))),delete e[this.name]},backfill(e){n.bind(A,this)(e)}},{formType:"input",name:"bankAccount",label:"账户名",placeholder:"请输入账户名",required:!0,value:"",onMounted(){i()&&(this.placeholder='自动获取"姓名"/"组织全称"',this.readonly=!0)},backfill(e){R(o()?"name":"orgName",a=>{this.value=a||e[this.name]})}},{formType:"input",name:"bankCardNumber",label:o()?"银行卡号":"银行账号",placeholder:"识别引擎自动填写或手动输入",required:!0,value:"",input(e){const a=e.target.value.replace(/ /g,"");this.value=a.replace(/(.{4})/g,"$1 ");const t=this.value.length;e.target.focus(),e.target.selectionStart=t,e.target.selectionEnd=t}},{formType:"input",name:"bankName",label:"开户行名称",placeholder:"识别引擎自动填写或手动选择",required:!0,value:"",readonly:!0,isLink:!0,click(){const e=D();this.inlineForm[0].show=e.btns.canEdit,this.inlineForm[0].inlineForm[0].inlineForm[0].updateValue(this.value)},backfill(e){this.value=e[this.name],s("accountOpeningBranch",a=>{a.inlineForm[0].inlineForm[0].inlineForm[0].value=this.value})},inlineForm:[{slot:"extra",formType:"popup",class:"h-[100vh] w-[100vw]",position:"left",closeable:!0,show:!1,inlineForm:[{slot:"default",formType:"cascader",title:"银行",options:[],closeable:!1,className:"border-b h-full flex flex-col",value:"",finish(e){s("bankName",e.value),s("bankName","inlineForm.0.show",!1)},inlineForm:[{slot:"options-top",formType:"input",inputAlign:"left",placeholder:"搜索",rightIcon:"search",clearable:!0,async updateValue(e){let a=e?`lease-bank/bank?queryTag=${e}`:"lease-bank/bank";const{data:t}=await c.get(a);s("bankName","inlineForm.0.inlineForm.0.options",S(t))}}]}]}]},{formType:"input",name:"accountOpeningBranch",label:"开户支行",placeholder:"请选择开户支行",required:!0,value:"",realValue:"",readonly:!0,isLink:!0,click(){const e=D();this.inlineForm[0].show=e.btns.canEdit,s("bankName",a=>{this.inlineForm[0].inlineForm[0].inlineForm[0].updateValue(a.value)})},inlineForm:[{slot:"extra",formType:"popup",class:"h-[100vh] w-[100vw]",position:"left",closeable:!0,show:!1,inlineForm:[{slot:"default",formType:"cascader",title:"选择开户支行",options:[],closeable:!1,className:"border-b h-full flex flex-col",value:"",finish(e){const a=e.selectedOptions[0];s("accountOpeningBranch","realValue",a.text),s("accountOpeningBranch","value",a.text),s("accountOpeningBranch","inlineForm.0.show",!1),s("jointLineNumber","value",a.value)},inlineForm:[{slot:"options-top",formType:"input",inputAlign:"left",placeholder:"搜索",rightIcon:"search",clearable:!0,async updateValue(e){const a=M("bankName").value;let t=e?`lease-bank/sub-bank?queryTag=${e}&name=${a}`:`lease-bank/sub-bank?name=${a}`;const{data:r}=await c.get(t);s("accountOpeningBranch","inlineForm.0.inlineForm.0.options",r.map(m=>({text:m.bankFullName,value:m.bankNum})))}}]}]}]},{formType:"input",label:"联行号",required:!0,value:"",readonly:!0,placeholder:"自动填充",name:"jointLineNumber"}],pe=[k("备案类型"),{formType:"input",label:"备案类型",name:"recordType",required:!0,placeholder:"请选择备案类型",value:"",...p(),...h("recordType",[{text:"项目公司备案",value:"RECORD_LEASE_PC"},{text:"非项目公司备案(屋顶方备案)",value:"RECORD_NP",disabled:i()?!0:d()}]),onMounted(){i()&&(this.realValue="RECORD_LEASE_PC",this.value="项目公司备案")}},{formType:"cell",value:'提示: 必须先选择 "备案类型" 才能选择 "项目公司" 和 "产品地区"',valueClass:"text-red !text-left"}],he=[k("承租人"),{formType:"input",label:"项目公司",name:"projectCompany",value:"",required:!0,placeholder:"请选择项目公司",...p(),...h("projectCompany",[],"dynamic"),backfill(e){R("recordType",async a=>{const t=C("leaseLessor/getAuth",{pageNum:1,pageSize:999,orderId:T()?.orderId,recordType:a}),{data:r}=await c.get(t),m=r.map(u=>({text:`${u.code}, ${u.companyName}, ${u.areaId}`,value:u.code,disabled:u.disabled}));this.makeSelect(e[this.name],m)})}}],fe=[k("安装地区"),{formType:"input",label:"产品地区",name:"productWithArea",value:"",realValue:"",required:!0,placeholder:"请选择产品方案",columns:[],...p(),...h("productWithArea",[],"dynamic"),async backfill(e){R("recordType",async a=>{const t=C("/leasePrjProjectProduct/get",{isPage:!1,type:a,orderId:T()?.orderId}),{data:r}=await c.get(t),m=r.map(u=>({text:`${u.code}, ${u.areaType}, ${u.area}`,value:u.code,disabled:u.disabled}));this.makeSelect(e[this.name],m)})}}],be=[{customSlot:"cardBukle",name:"cardBukle",show:l(()=>{const e=M("recordType","realValue");return o()&&e=="RECORD_NP"}),tabs:[{value:"info",title:"二类卡信息",inlineForm:[k("二类银行卡划扣"),{formType:"input",label:"二类卡号",value:"",inputAlign:"right",name:"accountNo",placeholder:"申请开户接口返回"},{formType:"input",label:"二类卡开户行名称",readonly:!0,inputAlign:"right",value:"中国工商银行股份有限公司",name:"bankNameTwo",placeholder:"申请开户接口返回"},{formType:"input",label:"二类卡开户支行",inputAlign:"right",readonly:!0,value:"中国工商银行股份有限公司广州南方支行",name:"bankBranch",placeholder:"申请开户接口返回"},{formType:"input",label:"二类卡联行号",inputAlign:"right",readonly:!0,value:"102581000353",name:"interBranchNumber",placeholder:"申请开户接口返回"}]},{value:"openAccount",title:"二类卡开户申请",inlineForm:[k("二类卡开户申请"),{formType:"input",label:"App直接申请开户",inputAlign:"right",value:"",isLink:!0,readonly:!0,name:"link",switch:"App直接申请开户",placeholder:"若有数据即可点击复制链接",async click(){const e=T(),a=await c.post(C("/bank_card_two/apply-open",{orderId:e.orderId}));if(this.value=a.data,a.code==5e3)throw new Error(a.msg);O({title:"二类卡开户申请",message:`只能二选一 ! 
 只能二选一 ! 
 只能二选一 !`,confirmButtonText:"App直接申请",cancelButtonText:"复制申请链接",confirmButtonColor:"#ffab30"}).then(()=>{ae(this.value)}).catch(()=>{te(this.value)})}},{formType:"input",label:"身份证号",value:"",inputAlign:"right",readonly:!0,name:"idNumber",placeholder:"申请开户接口返回"},{formType:"input",inputAlign:"right",label:"合作方交易单号",value:"",readonly:!0,name:"corpCommSerno",placeholder:"申请开户接口返回"},{formType:"input",inputAlign:"right",label:"申请结果",value:"",readonly:!0,name:"result",placeholder:"申请开户接口返回"},{formType:"input",name:"searchCard",inputAlign:"center",inlineForm:[{slot:"input",formType:"button",class:" !text-[12px] !px-5 !py-4 !bg-[#ffab30] !border-0 !text-white",round:!0,size:"mini",text:"查询结果",async click(){const e=T(),a=await c.get(C("/bank_card_two/query-status",{orderId:e.orderId}));s("cardBukle",t=>{t.tabs[1].inlineForm[3].value=a.data.corpCommSerno,t.tabs[1].inlineForm[4].value=a.data.result,t.tabs[0].inlineForm.forEach(r=>{r.value=n.get(a,`data.data${r.name}`)||r.value})}),a.code==5e3}}]},{formType:"input",inlineForm:[{slot:"input",rows:99,formType:"text",content:`提示：
 1、必须先选择项目公司和产品地区, 才能进行二类卡开户申请 
 2、切勿多次点击“申请开户”按钮。每次点击都会再次产生1条新的、不同的申请链接, 导致屋顶方对旧链接的操作变成无用功, 最终开户失败
 3、复制开户申请链接发给屋顶方, 或者在App直接申请开户, 链接有效期为30分钟。超过30分钟且未完成开户申请, 需要重新点击“申请开户”按钮, 生成新的开户申请链接再进行操作`,class:"text-red"}]}]},{value:"closeAccount",title:"二类卡销户申请",inlineForm:[k("二类卡销户申请"),{formType:"input",label:"申请销户",inputAlign:"right",value:"",name:"link",switch:"App直接申请销户",placeholder:"若有数据即可点击复制链接",inlineForm:[{slot:"button",formType:"button",text:"申请销户",size:"mini",className:"px-2 center !bg-[#ffab30] text-white rounded-2xl",async click(){await O({title:"二类卡销户申请",message:"二类卡销户申请",confirmButtonText:"确认申请销户",cancelButtonText:"取消申请",confirmButtonColor:"#ffab30",closeOnClickOverlay:!0})&&await O({title:"请再次确认是否销户",message:"请与屋顶方确认后再操作",confirmButtonText:"确认销户",cancelButtonText:"取消销户",confirmButtonColor:"#ffab30",closeOnClickOverlay:!0})&&(await c.post("/bank_card_two/apply-close",{orderId:T().orderId})).code==200&&H("销户成功")}}]},{formType:"input",label:"身份证号",value:"",inputAlign:"right",name:"idNumber",placeholder:"申请开户接口返回"},{formType:"input",inputAlign:"right",label:"合作方交易单号",value:"",name:"corpCommSerno",placeholder:"申请开户接口返回"},{formType:"input",inputAlign:"right",label:"申请结果",value:"",name:"result",placeholder:"申请开户接口返回"},{formType:"input",name:"searchCard",inputAlign:"center",inlineForm:[{slot:"input",formType:"button",class:" !text-[12px] !px-5 !py-4 !bg-[#ffab30] !border-0 !text-white",round:!0,size:"mini",text:"查询结果",async click(){const e=T(),a=await c.get(C("/bank_card_two/query-status",{orderId:e.orderId}));s("cardBukle",t=>{t.tabs[2].inlineForm[3].value=a.data.corpCommSerno,t.tabs[2].inlineForm[4].value=a.data.result,t.tabs[0].inlineForm.forEach(r=>{r.value=n.get(a,`data.data${r.name}`)||r.value})}),a.code==5e3}}]},{formType:"cell",value:"提示: 申请销户前提为: 未进件/已取消进件/屋顶租赁合同已履行25年到期结束",valueClass:"text-red !text-left"}]}],tab:"info",onChangeTab(){}}],ge=[{...k("销售人员信息"),hidden:l(()=>!x().includes("TYZF"))},{formType:"input",label:"资方名称",name:"investorId",placeholder:"自动获取",readonly:!0,hidden:l(()=>!x().includes("TYZF")),backfill(e){const a=T(),t={ZSGY:"中山公用事业集团股份有限公司"};this.value=t[a.investorId]}},{formType:"input",label:"销售人员姓名",name:"salesman",placeholder:"自动获取",readonly:!0,hidden:l(()=>!x().includes("TYZF")),backfill(e){const a=N();this.value=e[this.name]||a.name}},{formType:"input",label:"销售人员电话",name:"saleTelephone",placeholder:"自动获取",readonly:!0,hidden:l(()=>!x().includes("TYZF")),backfill(e){const a=N();this.value=e[this.name]||a.phone}},{formType:"input",label:"订单所属组织",name:"companyId",hidden:l(()=>!x().includes("TYZF")),placeholder:"自动获取",readonly:!0,...p(),...h("companyId",[],"dynamic"),async backfill(e){this.click=()=>{};const a=T(),t=N(),r=a.orderId?e.userId:t.userId,m=C("user-company/get-user-companies",{userId:r}),{data:u}=await c.get(m),q=u.map(B=>({value:B.company.companyId,text:B.company.name}));this.makeSelect(e[this.name]||q[0]?.value,q)}},{formType:"",name:"userId",hidden:l(()=>!x().includes("TYZF")),value:"",getParam(e){const a=N(),t=e.userId||a.userId;e.userId=t}}],ze={__name:"customerInfo",setup(e){const a=J({lessorInfo:me,bankInfo:ce,certificateType:pe,lesseeInfo:he,productWithArea:fe,cardBuckle:be,salemanInfo:ge}),t=T();let r="";se(()=>{m()});async function m(){if(t.orderId){const g=j.getData[x()],{data:w}=await c.get(C(g,t));$(a,{...w,...w.regImages||{}})}else r=(await c.get("/order/create-orderId")).data,$(a,{btns:{canSave:!0,canEdit:!0,hasEditBtn:!0}})}async function u(){const g=re();g.orderId=g.orderId||r;const w=j.saveData[x()],b=await c.post(w,g);if(!t.orderId){t.orderId=r,location.hash+="&orderId="+r;return}return b}async function q(){await ne(),await c.post(C("approval/put-approval/bto/customer",t))}async function B(g){await c.post("approval/do-approval/bto/customer",g)}return le({getData:m,saveData:u,submitData:q,approvalData:B}),(g,w)=>{const b=ee,G=K,W=Q,X=z;return P(),U(Y,null,[v(b,{form:F(a).lessorInfo,"group-class":"shadowC",class:"pt-3"},null,8,["form"]),v(b,{form:F(a).bankInfo,"group-class":"shadowC",class:"pt-3"},null,8,["form"]),v(b,{form:F(a).certificateType,"group-class":"shadowC",class:"pt-3"},null,8,["form"]),v(b,{form:F(a).lesseeInfo,"group-class":"shadowC",class:"pt-3"},null,8,["form"]),v(b,{form:F(a).productWithArea,"group-class":"shadowC",class:"pt-3"},null,8,["form"]),v(b,{form:F(a).cardBuckle,"group-class":"shadowC",class:"pt-3"},{cardBukle:Z(({slot:_})=>[_.show?(P(),V(W,{key:0,active:_.tab,"onUpdate:active":I=>_.tab=I,"line-width":"0",ellipsis:!1,"title-active-color":"#ffab30",onChange:I=>_.onChangeTab(I)},{default:Z(()=>[(P(!0),U(Y,null,ue(_.tabs,I=>(P(),V(G,{title:I.title},{default:Z(()=>[v(b,{form:I.inlineForm,"group-class":"shadowC !mx-0",class:"pt-3"},null,8,["form"])]),_:2},1032,["title"]))),256))]),_:2},1032,["active","onUpdate:active","onChange"])):de("",!0)]),_:1},8,["form"]),v(b,{form:F(a).salemanInfo,"group-class":"shadowC",class:"pt-3"},null,8,["form"]),v(X)],64)}}};export{ze as default};
