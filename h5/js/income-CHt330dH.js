import{B as n}from"./vant-xiv0EFx3.js";import{m as b,_ as i}from"./makeForm-Bte3ATMg.js";import{b as s,m as p}from"./makeSelect-BCWz2TlJ.js";import{m as r}from"./makeDate-ChWMz2RG.js";import{_ as m,c as u,D as c,v as f}from"./index-Dd7uG9g0.js";import{aX as C,al as y,N as l,u as _,am as x,bA as v,V as g}from"./@vue-BHA94vdH.js";import"./@vant-BMzV8Unt.js";import"./lodash-C1iNKp1x.js";import"./dayjs-19KvoO9f.js";import"./pinia-BOLtM30a.js";import"./vue-demi-Dq6ymT-8.js";import"./vue-router-BQWAt7JZ.js";import"./@vueuse-BYPNFz0v.js";import"./xe-utils-D22uZPtC.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-DYFNhZJM.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus--RpDJ8QK.js";import"./vue3-photo-preview-Byv7Qnko.js";import"./vxe-table-BpFaW3Xd.js";import"./dom-zindex-GlLoxNk1.js";const h=[{formType:"cell",title:"屋顶业主收益查询",titleClass:"text-[22px] py-[10px] font-bold pl-[18px] "},{formType:"input",label:"系统编号",required:!0,placeholder:"请输入系统编号",value:"",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,name:"orderId"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"类型",rightIcon:"arrow",required:!0,value:"",name:"type",...s(),...p("type",[{text:"增量",value:"INC"},{text:"全量",value:"FULL"}])},{...r({name:"startTime"}),label:"开始时间",required:!0,inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",rightIcon:"arrow"},{...r({name:"endTime"}),label:"结束时间",required:!0,inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",rightIcon:"arrow"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"进件编号",readonly:!0,placeholder:"请输入进件编号",value:"",name:"partnersContractNumber"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"现金流id",readonly:!0,placeholder:"请输入现金流id",value:"",name:"cfId"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"期数",readonly:!0,placeholder:"请输入期数",value:"",name:"times"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"出租人收益",readonly:!0,placeholder:"请输入出租人收益",value:"",name:"cfItem"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"现金流方向",readonly:!0,placeholder:"请输入现金流方向",value:"",name:""},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"应付金额",readonly:!0,placeholder:"请输入应付金额",value:"",name:"dueAmount"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"应付日期",readonly:!0,placeholder:"请输入应付日期",value:"",name:"dueDate"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"已收金额",readonly:!0,placeholder:"请输入已收金额",value:"",name:"receivedAmount"},{formType:"input",inputAlign:"left",labelClass:"xCenter border-r border-[#dbdbda]",border:!1,label:"核销状态",readonly:!0,placeholder:"请输入核销状态",value:"",name:"receivedAmount"}],A={class:"h-min-[100vh] bg-white"},T={class:"flex justify-center mt-2"},k={__name:"income",setup(w){u();const a=b({income:h});async function t(){await c();const e=f();console.log(e)}return(e,I)=>{const o=i,d=n;return C(),y("div",A,[l(o,{form:_(a).income,class:"pt-3","group-class":"shadowC"},null,8,["form"]),x("div",T,[l(d,{round:"",block:"",type:"primary",onClick:t,class:"!w-[100px]"},{default:v(()=>[g(" 提交 ")]),_:1})])])}}},O=m(k,[["__scopeId","data-v-55be4ae0"]]);export{O as default};