import{a as A,b as M,f as O,F as Y,g as K,h as X,i as H,j as J,B as Q,k as Z,l as ee,D as se,m as oe}from"./vant-BF4L1TGb.js";import{_ as te}from"./vButton-BgoZqamI.js";import{d as ae,K as C,r as ne,aX as d,al as F,am as i,N as r,bA as l,aj as v,u as s,ak as U,V as p,be as B,F as le,b1 as re,P as ie,bD as R,a_ as ce,aY as me}from"./@vue-ts87NNlE.js";import{m as pe}from"./makeTitle-CzVkaK9t.js";import{h as k,s as I,g as L,u as de,_ as ue,a as fe,e as we,b as be,r as he}from"./index-B7VWkQ_2.js";import{l as w}from"./lodash-DhpMPSDc.js";import{b as ve,m as ge}from"./makeSelect-CYTCxxsZ.js";import{q as P}from"./queryUrl-BTYYWpY7.js";import{m as _e,c as S}from"./makeForm-BmsmFLmR.js";import{b as xe}from"./backfill-BoX-74Dj.js";import"./@vant-NmgEisJw.js";import"./class-COLQ8iHP.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./axios-B4uVmeYG.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const ye="/orderh5/png/newLogo-B3c4YS8d.png",ke=[{...pe("选择所属组织"),show:!1,name:"title"},{formType:"",name:"userId",value:"",loginInfo:{},backfill(c){this.value=c.userVo.userId}},{formType:"input",...ve(),...ge("companyId",[],"dymaic"),name:"companyId",label:"所属组织",async backfill(c){const{data:u}=await k.get(P("user-company/get-user-companies",{userId:c.userVo.userId})),t=u.map(e=>({text:e.company.name,value:e.company.companyId}));this.makeSelect("",t)}},{formType:"input",labelClass:"!w-0",name:"button",valueClass:"!w-1/2",inlineForm:[{slot:"input",formType:"button",text:"取消",size:"small",class:"w-full !rounded-none !border-[white]",click(){I("title","show",!1)}},{slot:"extra",formType:"button",text:"确认",size:"small",class:"w-1/2 !rounded-none !border-[#ffab30] !text-white !bg-[#ffab30]",async click(c){const u=L("companyId","realValue"),t=L("userId","value"),e=L("userId","loginInfo");console.log(u,t,e),(await k.post(P("user-company/update-user-current-company",{companyId:u,userId:t}))).code==200&&(await de().getData(e),I("title","show",!1))}}]}],z=c=>(ce("data-v-0dc41811"),c=c(),me(),c),Ie={class:"h-full w-full flex-1 bg-[#febc04] !overflow-hidden"},Ve=z(()=>i("div",{class:"float-left mb-[-100vh] ml-[7vw] font-bold text-white text-[35px]"},[i("div",{class:"mt-[10vh]"},"您 好 ,"),i("div",null,"欢 迎 使 用 博 光")],-1)),Ce=z(()=>i("div",{class:"h-[30vh] w-full bgImg flex items-end justify-end"},[i("img",{class:"h-[30vw] w-[30vw] mb-[-3vw] mr-[-5vw] z-0 object-contain",src:ye})],-1)),Le={class:"h-[70vh] bg-white rounded-t-[20px] py-[5vw] flex flex-col"},Se={class:"xCenter mt-[5vh]"},Te={class:"w-[90%] mx-auto"},Fe={class:"xCenter"},Ue={__name:"login",setup(c){const u=_e({companyForm:ke}),t=fe(),e=ae({username:w.get(t,"usernameList[0].text"),password:w.get(t,"usernameList[0].password"),code:"",usernameList:[],usernameListShow:!1,passwordFlag:!0,passwordType:"password",passwordIcon:"closed-eye",usernameRule:C(S([a=>a.length||"用户名必填"])),passwordRule:C(S([a=>a.length||"密码必填"])),codeRule:C(S([a=>a.length||"验证码必填"]))}),m=ne(!0);async function V(a){const o={phone:e.username,password:e.password,code:"",type:"password",systemType:"android",systemVersion:"6.0",appVersion:"2.4.16"},b=w.merge(o,a);I("userId","loginInfo",b);const{data:f}=await k.post("/login",b);if(!t.checked.includes("readed")){A("请阅读并同意博光 NEW 隐私政策和使用协议");return}if(t.info=f,a.text=a.phone,t.checked.includes("remember"))t.usernameList.unshift(w.omit(a,"phone")),t.usernameList=w.uniqBy(t.usernameList,"text");else{const x=t.usernameList.findIndex(y=>y.text==a.phone);t.usernameList.splice(x,1)}const h=(await k.get("order-state/dic")).data,_=be();_.statusDic={...h.state,...h.stage,...h.task},_.tabbar=0,w.get(f,"userVo.curUserCompanyVo.company.name")?(he.push({path:"/home",query:{title:"当前组织： "+f.userVo.curUserCompanyVo.company.name,tab:0}}),M({message:"登录成功",className:"shadowC"})):(xe(u,f),I("title","show",!0))}async function D(){console.log("获取验证码")}function N(){e.passwordFlag=!e.passwordFlag,e.passwordType=e.passwordFlag?"password":"text",e.passwordIcon=e.passwordFlag?"closed-eye":"eye-o"}function $(a){e.usernameList=t.usernameList.filter(o=>o.text.includes(a)),e.usernameListShow=new Boolean(e.usernameList.length),e.usernameListShow=!!a.length}function j(a){e.username=a.text,e.password=a.password}return we({getData:V}),(a,o)=>{const b=X,f=H,g=J,h=Q,_=Z,x=ee,y=O,T=te,q=se,E=Y,G=oe,W=K;return d(),F("div",Ie,[Ve,Ce,i("div",Le,[r(E,{onSubmit:V},{default:l(()=>[r(_,{inset:""},{default:l(()=>[r(b,{title:"手机号",border:!1,titleClass:"text-[25px]"}),r(g,{size:"large",modelValue:s(e).username,"onUpdate:modelValue":[o[1]||(o[1]=n=>s(e).username=n),$],name:"phone",label:"",placeholder:"请输入账号",rules:s(e).usernameRule,class:"!text-[16px] !pt-[5px]",clearable:"",onClickRightIcon:o[2]||(o[2]=n=>s(e).usernameListShow=!s(e).usernameListShow)},{extra:l(()=>[s(m)?(d(),v(f,{key:0,show:s(e).usernameListShow,"onUpdate:show":o[0]||(o[0]=n=>s(e).usernameListShow=n),actions:s(e).usernameList,onSelect:j,placement:"bottom-end"},null,8,["show","actions"])):U("",!0)]),_:1},8,["modelValue","rules"]),r(b,{title:"密码",border:!1,titleClass:"text-[25px]"}),s(m)?(d(),v(g,{key:0,size:"large",class:"!text-[16px] !pt-[5px]",modelValue:s(e).password,"onUpdate:modelValue":o[3]||(o[3]=n=>s(e).password=n),onClickRightIcon:N,type:s(m)?s(e).passwordType:"",name:s(m)?"password":"code","right-icon":s(e).passwordIcon,placeholder:"请输入密码",clearable:"",rules:s(e).passwordRule},null,8,["modelValue","type","name","right-icon","rules"])):(d(),v(g,{key:1,size:"large",class:"!text-[16px] !pt-[5px]",modelValue:s(e).code,"onUpdate:modelValue":o[4]||(o[4]=n=>s(e).code=n),name:"code",clearable:"",rules:s(e).codeRule,placeholder:"请输入验证码"},{button:l(()=>[r(h,{onClick:D,size:"small",type:"warning",class:"!bg-[#ffab30] !h-[24px] shadow-md"},{default:l(()=>[p("获取验证码")]),_:1})]),_:1},8,["modelValue","rules"]))]),_:1}),r(y,{modelValue:s(t).checked,"onUpdate:modelValue":o[5]||(o[5]=n=>s(t).checked=n),class:"flex-1 justify-end flex flex-col px-[7vw]"},{default:l(()=>[r(x,{"icon-size":"16px","checked-color":"#ffab30",name:"remember"},{default:l(()=>[p("记住密码")]),_:1})]),_:1},8,["modelValue"]),i("div",Se,[r(T,{class:"!w-[90%]","native-type":"submit"},{default:l(()=>[p("登录")]),_:1})]),i("div",Te,[r(q,null,{default:l(()=>[p("OR")]),_:1})]),i("div",Fe,[r(T,{class:"!w-[90%]",onClick:o[6]||(o[6]=n=>m.value=!s(m))},{default:l(()=>[p(B(s(m)?"密码登录":"验证码一键登录"),1)]),_:1})])]),_:1}),a.$appConfig.env=="dev"?(d(),v(W,{key:0,active:s(t).httpBase,"onUpdate:active":o[7]||(o[7]=n=>s(t).httpBase=n),"title-active-color":"#ffab30",color:"#ffab30",class:"mt-[10px]"},{default:l(()=>[(d(!0),F(le,null,re(s(t).httpList,n=>(d(),v(G,ie({key:n.name,ref_for:!0},n,{class:"ml-[9vw] mt-[10px]"}),{default:l(()=>[p(" 生产环境: "+B(n.name),1)]),_:2},1040))),128))]),_:1},8,["active"])):U("",!0),r(y,{modelValue:s(t).checked,"onUpdate:modelValue":o[10]||(o[10]=n=>s(t).checked=n),class:"flex-1 justify-end flex flex-col px-[7vw]"},{default:l(()=>[r(x,{class:"py-[1vh]","icon-size":"16px","checked-color":"#ffab30",name:"readed"},{default:l(()=>[p(" 我已阅读并同意博光NEW "),i("a",{class:"text-[blue]",onClick:o[8]||(o[8]=R(n=>a.$openWeb("https://www.btosolarman.com/APP/boGuangAPP/privacy.txt","隐私政策"),["stop"]))},"隐私政策"),p(" 和 "),i("a",{class:"text-[blue]",onClick:o[9]||(o[9]=R(n=>a.$openWeb("/orderh5/protocolOfUsage.html","使用协议"),["stop"]))},"使用协议")]),_:1})]),_:1},8,["modelValue"])])])}}},as=ue(Ue,[["__scopeId","data-v-0dc41811"]]);export{as as default};
