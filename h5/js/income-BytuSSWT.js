import{B as n}from"./vant-Ckwj66YG.js";import{m as b,_ as i}from"./makeForm-CsZjxp4a.js";import{b as s,m as p}from"./makeSelect-B5t5onyK.js";import{m as r}from"./makeDate-BEz80l-2.js";import{_ as m,c as u,E as c,x as f}from"./index-zLUezw_f.js";import{aX as C,al as y,N as l,u as x,am as _,bA as v,V as g}from"./@vue-ts87NNlE.js";import"./@vant-NmgEisJw.js";import"./lodash-DhpMPSDc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./dayjs-DWD9bsSZ.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const h=[{formType:"cell",title:"屋顶业主收益查询",titleClass:"text-[22px] py-[10px] font-bold pl-[18px] "},{formType:"input",label:"系统编号",required:!0,placeholder:"请输入系统编号",value:"",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,name:"orderId"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"类型",rightIcon:"arrow",required:!0,value:"",name:"type",...s(),...p("type",[{text:"增量",value:"INC"},{text:"全量",value:"FULL"}])},{...r({name:"startTime"}),label:"开始时间",required:!0,inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",rightIcon:"arrow"},{...r({name:"endTime"}),label:"结束时间",required:!0,inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",rightIcon:"arrow"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"进件编号",readonly:!0,placeholder:"请输入进件编号",value:"",name:"partnersContractNumber"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"现金流id",readonly:!0,placeholder:"请输入现金流id",value:"",name:"cfId"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"期数",readonly:!0,placeholder:"请输入期数",value:"",name:"times"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"出租人收益",readonly:!0,placeholder:"请输入出租人收益",value:"",name:"cfItem"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"现金流方向",readonly:!0,placeholder:"请输入现金流方向",value:"",name:""},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"应付金额",readonly:!0,placeholder:"请输入应付金额",value:"",name:"dueAmount"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"应付日期",readonly:!0,placeholder:"请输入应付日期",value:"",name:"dueDate"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"已收金额",readonly:!0,placeholder:"请输入已收金额",value:"",name:"receivedAmount"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"核销状态",readonly:!0,placeholder:"请输入核销状态",value:"",name:"receivedAmount"}],A={class:"h-min-[100vh] bg-white"},T={class:"flex justify-center mt-2"},k={__name:"income",setup(w){u();const a=b({income:h});async function t(){await c();const e=f();console.log(e)}return(e,I)=>{const o=i,d=n;return C(),y("div",A,[l(o,{form:x(a).income,class:"pt-3","group-class":"shadowC"},null,8,["form"]),_("div",T,[l(d,{round:"",block:"",type:"primary",onClick:t,class:"!w-[100px]"},{default:v(()=>[g(" 提交 ")]),_:1})])])}}},W=m(k,[["__scopeId","data-v-55be4ae0"]]);export{W as default};