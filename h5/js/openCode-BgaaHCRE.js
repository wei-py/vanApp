import{p as a,h as i}from"./index-Dd7uG9g0.js";import{l as c}from"./lodash-C1iNKp1x.js";import{b as s}from"./vant-xiv0EFx3.js";function d(o){e(o)}function e(o){a({func:"openCode"}),window.scan=c.throttle(async t=>{if(t.startsWith("http")){const{data:n}=await i.get("/device/url?httpUrl="+t);s(JSON.stringify(n.data)),a({func:"vibration"}),o(n.data),a({func:"closeCode"})}else s(t),a({func:"vibration"}),o(t)},5e3)}export{d as o};