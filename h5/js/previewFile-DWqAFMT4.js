import{S as u}from"./vant-PdAvEskO.js";import{V as h,b as d}from"./@vue-office-D7CPqAIZ.js";import{c as _,e as x}from"./index-D0ldpvYI.js";import{r as w,aX as s,al as i,N as k,u as e,i as v,aj as a,F as q}from"./@vue-ts87NNlE.js";import"./@vant-NmgEisJw.js";import"./vue-demi-BO4xsXkA.js";import"./vue-B7fnMq6U.js";import"./pinia-B_HOjTBS.js";import"./lodash-D-SkTV7p.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-DLUPp4BS.js";import"./xe-utils-CfMIR_ol.js";import"./axios-B6xwUs71.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-jb8ML41u.js";import"./vxe-table-CAWzlaHI.js";import"./dom-zindex-GlLoxNk1.js";const y=["src"],S="https://view.officeapps.live.com/op/view.aspx?src=",H={__name:"previewFile",setup(g){const o=_().url.replace("http:","https:"),t=w(!1),c=[[{name:"微信",icon:"wechat"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]];function l(){t.value=!0}function p(r){console.log(r,3333)}return x({onRefresh:()=>location.reload(),onClickRight:l}),(r,n)=>{const m=u;return s(),i(q,null,[k(m,{show:e(t),"onUpdate:show":n[0]||(n[0]=f=>v(t)?t.value=f:null),title:"立即分享给好友",options:c,onSelect:p},null,8,["show"]),e(o).endsWith(".doc")||e(o).endsWith(".docx")?(s(),a(e(h),{key:0,class:"flex-1",src:e(o)},null,8,["src"])):e(o).endsWith(".xls")||e(o).endsWith(".xlsx")?(s(),i("iframe",{key:1,class:"flex-1",src:S+e(o),"update-title":!1},null,8,y)):(s(),a(e(d),{key:2,class:"flex-1",src:e(o)},null,8,["src"]))],64)}}};export{H as default};
