import{t as a}from"./class-rRG2y2aF.js";import{b as l,F as f,u as c,x as m}from"./index-BCLLWcQc.js";import{l as o}from"./lodash-C1iNKp1x.js";function F(e){return{formType:"cell",title:e,titleClass:a,class:"!p-0 h-[50px]"}}function v(e){return{makeUnit(n){this.inlineForm[0].text=n},inlineForm:[{slot:"button",formType:"button",size:"mini",className:"border-0 p-0 yCenter",text:e}]}}async function u(e=0){}function x(e,n){const t=l(),r=f(),i=c();r.$reset(),m(async s=>{if(o.isFunction(s.backfill)){await s.backfill(n);return}o.has(n,s.name)&&(s.value=n[s.name]||s.value)}),o.isUndefined(n.btns)||(t.btns=n.btns),t.orderState=n.orderState,o.isFunction(i.approvalBackfill)&&i.approvalBackfill(),u()}export{v as a,x as b,F as m};