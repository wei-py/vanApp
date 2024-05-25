import{m as _,_ as T}from"./makeForm-Bte3ATMg.js";import{w as r,c as s,C as Z,g as x,l as k,s as y,H as b,A as w,h}from"./index-Dd7uG9g0.js";import{l as n}from"./lodash-C1iNKp1x.js";import{m as p,b as I}from"./backfill-DlSaR-Hj.js";import{m as i,a as m}from"./makeUpload-pxx6b2ye.js";import{q as f}from"./queryUrl-CUkA5NKU.js";import{a as C}from"./vant-xiv0EFx3.js";import{c as l,e as E,aX as F,al as v,N as c,u,F as D}from"./@vue-BHA94vdH.js";import"./pinia-BOLtM30a.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-BQWAt7JZ.js";import"./@vueuse-BYPNFz0v.js";import"./xe-utils-D22uZPtC.js";import"./dayjs-19KvoO9f.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-DYFNhZJM.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus--RpDJ8QK.js";import"./vue3-photo-preview-Byv7Qnko.js";import"./vxe-table-BpFaW3Xd.js";import"./dom-zindex-GlLoxNk1.js";import"./@vant-BMzV8Unt.js";import"./class-rRG2y2aF.js";const R=[()=>{const e=s();return n.has(e,"online")?[p("屋顶租赁合同签约"),{formType:"input",name:"fddSignTaskId",label:"屋顶租赁合同",value:""},{formType:"input",label:"签署方式",value:"",name:"signeType",inlineForm:[{slot:"input",formType:"button",text:"短信签署",size:"mini",round:!0,class:"!mr-[10px] !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",click(){y("signeType",t=>{t.inlineForm[0].text="发送短信"})}},{slot:"extra",formType:"button",text:"App",round:!0,size:"mini",class:" !text-[14px] !px-5 !py-4 !bg-[#f5f5f5] !border-0",click(){y("signeType",t=>{t.inlineForm[0].text="开始签署"})}}]},{formType:"input",name:"",label:"已签约合同查看",value:"合同查看",readonly:!0,isLink:!0,click(){console.log(this.value)}}]:[{...p("合同签约"),hidden:l(()=>r()!="YUEXIU_ZZD")},{formType:"input",name:"leaseSigneUrl",label:"线上签约(跳转资方H5)",readonly:!0,hidden:l(()=>r()!="YUEXIU_ZZD"),realValue:"",backfill(t){this.realValue=t.leaseSigneUrl,this.value=""}},{formType:"cell",titleClass:" xCenter",hidden:l(()=>r()!="YUEXIU_ZZD"),inlineForm:[{slot:"title",formType:"button",url:"",text:"复制链接",round:!0,size:"small",type:"primary",class:" !py-1 !bg-[#fff] !text-[#ffab30] !border-0 w-[30%] ",click(){Z(x("leaseSigneUrl").realValue)}}]},{...p("电子合同下载"),hidden:l(()=>r()!="YUEXIU_ZZD_ORG")},{formType:"input",name:"leaseSigneUrl",label:"线上签约(跳转资方H5)",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),isLink:!0,realValue:"",click(){k(this.realValue)},backfill(t){this.realValue=t.leaseSigneUrl,this.realValue&&(this.value="一键下载")}},{formType:"cell",titleClass:" xCenter",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),inlineForm:[{slot:"title",formType:"button",url:"",text:"复制下载链接",round:!0,size:"small",type:"primary",class:" !py-1 !bg-[#fff] !text-[#ffab30] !border-0 w-[30%] ",click(){C("资方暂未支持此功能, 请联系博通总部商务中心, 获取合同")}}]}]}],Y=[{...p("屋顶方已盖章合同扫描件上传"),hidden:l(()=>r()!="YUEXIU_ZZD_ORG")},{...i(999,100,"*"),backfill(e){n.bind(m,this)(e)},name:"orgLegalIdAuthFile",label:"法人代表/负责人身份证明书(盖公章)",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),required:!0},{...i(999,100,"*"),backfill(e){n.bind(m,this)(e)},name:"orgSignatureChop",label:"法人组织预留印鉴",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),required:!0},{formType:"cell",value:"提示: 盖公章、法人代表名字章、财务专用章。若确无财务专用章可不盖；若无法人代表名字章可手写签名",valueClass:"text-red !text-left",hidden:l(()=>r()!="YUEXIU_ZZD_ORG")},{...i(1,100,"*"),name:"contract",label:"屋顶方已盖章合同扫描件",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),required:!0},{formType:"cell",value:"提示: 上传 “法人代表/负责人身份证明书”、“法人组织预留印鉴”、“屋顶方已盖章合同扫描件” 及签约现场系列照片成功后，项目详情里的 “合同签约” 环节右侧将显示绿色的 “已签约”",valueClass:"text-red !text-left",hidden:l(()=>r()!="YUEXIU_ZZD_ORG")}],O=[{...p("双方已盖章合同扫描件上传"),hidden:l(()=>r()!="YUEXIU_ZZD_ORG")},{...i(1,100,"*"),name:"signPhoto",backfill(e){n.bind(m,this)(e)},label:"现场签字照",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),required:!0},{...i(1,100,"*"),name:"stampUsedPhoto",backfill(e){n.bind(m,this)(e)},label:"现场用印照",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),required:!0},{...i(1,100,"*"),backfill(e){n.bind(m,this)(e)},name:"signOverPhoto",label:"签约完成照",hidden:l(()=>r()!="YUEXIU_ZZD_ORG"),required:!0},{formType:"cell",value:"提示:1, 现场签字照: 法人代表/负责人正脸、持笔或持法人代表章, 与合同签署页同框拍摄; 2, 现场用印照: 法人代表/负责人正脸、持印, 与合同签署页同框拍摄; 3, 签署完成照: 法人代表/负责人正脸, 与合同、身份证、统一社会信用代码证/组织机构代码证（村委）或营业执照（集体经济组织）同框拍摄”",valueClass:"text-red !text-left",hidden:l(()=>r()!="YUEXIU_ZZD_ORG")}],X=[{formType:"input",name:"",readonly:!0,labelClass:"!w-0",valueClass:"!bg-[#f3f3f3] !pt-0",inputAlign:"center",class:"!bg-[#f3f3f3] !pt-0",inlineForm:[{slot:"input",formType:"button",text:"屋顶租赁合同下载",round:!0,size:"small",realValue:"TENANT",type:"primary",class:" !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",click(){const e={orderId:s()?.orderId,contractType:this.realValue},t=b.prod.app,a=f(`${t}/order/leaseContract/get-pdf`,e);window.open(a)}}],backfill(e){this.inlineForm[0].disabled=!e.TENANT}},{formType:"input",name:"",readonly:!0,labelClass:"!w-0",valueClass:"!bg-[#f3f3f3] !pt-0",inputAlign:"center",class:"!bg-[#f3f3f3] !pt-0",inlineForm:[{slot:"input",formType:"button",text:"买卖合同下载",realValue:"SELLER",round:!0,size:"small",type:"primary",class:" !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",click(){const e={orderId:s()?.orderId,contractType:this.realValue},t=b.prod.app,a=f(`${t}/order/leaseContract/get-pdf`,e);window.open(a)}}],backfill(e){this.inlineForm[0].disabled=!e.SELLER}},{formType:"input",name:"",readonly:!0,labelClass:"!w-0",valueClass:"!bg-[#f3f3f3] !pt-0",inputAlign:"center",realValue:"FACTORY",class:"!bg-[#f3f3f3] !pt-0",inlineForm:[{slot:"input",formType:"button",text:"运维合同下载",round:!0,size:"small",type:"primary",class:" !py-1 !bg-[#ffab30] text-white !border-0 w-[70%]",click(){const e={orderId:s()?.orderId,contractType:this.realValue},t=b.prod.app,a=f(`${t}/order/leaseContract/get-pdf`,e);window.open(a)}}],backfill(e){this.inlineForm[0].disabled=!e.FACTORY}}],ne={__name:"contractAward",setup(e){const t=_({contractAward:R,signedContractForm:Y,signedSiteForm:O,button:X}),a=s();E(()=>{U()});async function U(){let d="";n.isUndefined(a,"online")?d=a.online?"general-investor/get-online-sign-rent-contract":"general-investor/get-offline-sign-rent-contract":d=w()?"order/get-lease-contract":"order/org/get-contract";const{data:g}=await h.get(f(d,n.omit(a,"title"))),o=await h.get("leaseContract/has-get-sign-btn");I(t,{...g,...o.data})}return(d,g)=>{const o=T;return F(),v(D,null,[c(o,{form:u(t).contractAward,class:"pt-3","group-class":"shadowC"},null,8,["form"]),c(o,{form:u(t).signedContractForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),c(o,{form:u(t).signedSiteForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),c(o,{form:u(t).button,class:"pt-3","group-class":"!bg-[#f8f8f8]"},null,8,["form"])],64)}}};export{ne as default};
