import{c as I,h as x,b as D,L as v,B as f,r as P,F as b,I as j,N as q,O as T,E as r,G as u,P as F}from"./index-Dd7uG9g0.js";import{l}from"./lodash-C1iNKp1x.js";import{a as S}from"./axios-B6xwUs71.js";import{q as N}from"./queryUrl-CUkA5NKU.js";import{c as w}from"./@vue-BHA94vdH.js";let k="";async function O(e,s=I()?.orderId,n="image"){if(l.isUndefined(s))return URL.createObjectURL(e);const a="https://up-cn-east-2.qiniup.com";await R(s,n);const o=new FormData;o.append("file",e,e.name),o.append("token",k);const{data:m}=await S.post(a,o);return m.src||m.data.src}async function R(e,s){const n=N("file/get-qiniu-upload-token",{orderId:e,fileType:s}),{data:a}=await x.get(n);k=a.upToken}function B(e=999,s=100,n="",a=!1,o,m){const y=D(),h=w(()=>y.btns.canEdit);let g=h,d=w(()=>!h.value);return l.isUndefined(o)||(d=o,g=!o),{formType:"input",value:"",longPress:!0,class:`flex-col-reverse  float-start !w-[${s}%]`,labelClass:"xCenter !w-full !m-0",inlineForm:[{slot:"input",formType:"upload",maxCount:e,multiple:e>1,accept:n,required:a,deletable:g,disabled:d,previewFullImage:!1,clickPreview(t){if(v(t)){const i=b();i.imgIndex=i.imgDoms.findIndex(c=>c==(t.objectUrl||f(t))),i.showPreviewImg=!0}else{const i=t.objectUrl||f(t);P.push({path:"/previewFile",query:{url:i}});return}},value:[],uploadIcon:"plus",class:"mx-auto mt-2",beforeDelete(t){if(!v(t))return!0;const i=b(),c=i.imgDoms.findIndex(p=>p==f(t));return i.imgDoms.splice(c,1),!0},beforeRead(t){return new Promise(async(i,c)=>{const p=await O(t,I()?.orderId||m);t.src=p,t.url=p,await j(500),i(t),q()})},menuRight:[{label:"下载图片到相册",click:(...t)=>{const i=T();console.log(i)}}]}],backfill(t){this.inlineForm[0].value=t[this.name]?[{url:r(t[this.name])}]:[],u(r(t[this.name]))},onMounted(){this.inlineForm[0].value.length=0},getParam(t){const i=l.get(this,"inlineForm.0.value.0.file.url")||l.get(this,"inlineForm.0.value.0.url","");t[this.name]=i}}}function C(e){l.isArray(e[this.name])?(this.inlineForm[0].value=e[this.name].map(s=>({url:r(s)})),u(...this.inlineForm[0].value.map(s=>s.url))):l.isString(e[this.name])&&(e[this.name].startsWith("[")?(this.inlineForm[0].value=JSON.parse(e[this.name]).map(s=>({url:r(s),...U()})),console.log(this.inlineForm[0].value,this.name),u(...this.inlineForm[0].value.map(s=>s.url))):F(e[this.name])&&(this.inlineForm[0].value=[{url:r(e[this.name])}],u(r(e[this.name]))))}function G(e){let s=[];return l.isArray(e)?s=e.map(n=>({url:r(n)})):l.isString(e)&&(e.startsWith("[")?s=JSON.parse(e).map(n=>({url:r(n),...U()})):F(e)&&(s=[{url:r(e)}])),u(...s.map(n=>n.url)),s}function U(e,s="object"){if(s=="object")return{}}export{C as a,G as b,B as m};
