import{_ as B}from"./vBtn-LXvsT-fh.js";import{_ as x}from"./vantForm-CNH6TuWQ.js";import{m as h}from"./makeTitle-CzVkaK9t.js";import{m as a}from"./makeUpload-Du0F1yJj.js";import{G as n,I as l,E as r,H as o,c as p,h as c,e as y,y as k}from"./index-B7VWkQ_2.js";import{l as m}from"./lodash-DhpMPSDc.js";import{m as S}from"./makeForm-BmsmFLmR.js";import{r as P}from"./runTime-DAjLGjV1.js";import{q as N}from"./queryUrl-BTYYWpY7.js";import{b as M}from"./backfill-BoX-74Dj.js";import{e as q,aX as I,al as w,N as u,u as d,F as _}from"./@vue-ts87NNlE.js";import"./vant-BF4L1TGb.js";import"./@vant-NmgEisJw.js";import"./wait-Dqho1LKt.js";import"./class-COLQ8iHP.js";import"./axios-B4uVmeYG.js";import"./pinia-B_HOjTBS.js";import"./vue-router-Bw4qQE88.js";import"./@vueuse-QQdVrKV8.js";import"./xe-utils-DXe260hc.js";import"./@vue-office-GFDCm3nC.js";import"./vue-demi-BEcyFcst.js";import"./vue-RHKPHaPZ.js";import"./@x-ui-vue3-CwLx_scX.js";import"./pinia-plugin-persist-J3Q2VqHx.js";import"./vue3-menus-CnNWMJEM.js";import"./vue3-photo-preview-CkWuweRQ.js";import"./vxe-table-QgdefRjh.js";import"./dom-zindex-GlLoxNk1.js";const R=[h("来料检验 + 电站基础照"),{label:"来料检验单(或底板长宽厚、斜撑截面长宽厚)",name:"来料检验单",imageName:"来料检验单",required:!0,...a(999,100,"*"),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName==this.imageName)?.imageList||[];this.inlineForm[0].value=i.map(t=>({url:n(t.imageAddr)})),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageList:this.inlineForm[0].value.map(i=>({imageAddr:r(i),imageName:this.name})),imageName:this.name})}},{label:"膨胀螺栓长度测量",imageName:"膨胀螺栓长度测量",name:"膨胀螺栓长度测量",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"立柱/斜梁的截面长或宽",imageName:"立柱/斜梁的截面长或宽",name:"立柱/斜梁的截面长或宽",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"立柱/斜梁厚",imageName:"立柱/斜梁厚",name:"立柱/斜梁厚",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"横梁截面长",imageName:"横梁截面长",name:"横梁截面长",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"横梁截面宽",imageName:"横梁截面宽",name:"横梁截面宽",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"横梁厚",imageName:"横梁厚",name:"横梁厚",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"底板防水安装",imageName:"底板防水安装",name:"底板防水安装",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"完工后周边立柱底板",imageName:"完工后周边立柱底板",name:"完工后周边立柱底板",required:!0,...a(1,50),backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{...a(999,100),label:"特殊说明(如联排声明、联排支架分离细节、特殊申请)",imageName:"特殊说明",name:"特殊说明",backfill(e){const i=e?.electricStationMaterial?.find(t=>t.imageName==this.imageName)?.imageList||[];this.inlineForm[0].value=i.map(t=>({url:n(t.imageAddr)})),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.electricStationMaterial)||(e.electricStationMaterial=[]),e.electricStationMaterial.push({imageList:this.inlineForm[0].value.map(i=>({imageAddr:r(i),imageName:this.name})),imageName:this.name})}}],L=[h("支架 + 防水槽安装"),{label:"立柱与斜梁焊接",name:"立柱与斜梁焊接",imageName:"立柱与斜梁焊接",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"斜梁与横梁焊接",imageName:"斜梁与横梁焊接",name:"斜梁与横梁焊接",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"人字形顶焊接",imageName:"人字形顶焊接",name:"人字形顶焊接",...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"立柱东西间距",imageName:"立柱东西间距",name:"立柱东西间距",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"立柱南北间距",imageName:"立柱南北间距",name:"立柱南北间距",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"西北角拍东南支架",imageName:"西北角拍东南支架",name:"西北角拍东南支架",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"东北角拍西南支架",imageName:"东北角拍西南支架",name:"东北角拍西南支架",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"西南角拍东北支架",imageName:"西南角拍东北支架",name:"西南角拍东北支架",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"东南角拍西北支架",imageName:"东南角拍西北支架",name:"东南角拍西北支架",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"辅槽与横向集水槽搭接",imageName:"辅槽与横向集水槽搭接",name:"辅槽与横向集水槽搭接",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"横向与竖向集水槽搭接",imageName:"横向与竖向集水槽搭接",name:"横向与竖向集水槽搭接",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"纵向集水槽与天沟搭接",imageName:"纵向集水槽与天沟搭接",name:"纵向集水槽与天沟搭接",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"横屏拍摄水槽托架",imageName:"横屏拍摄水槽托架",name:"横屏拍摄水槽托架",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"下水管接至楼面下水口或接至一楼",imageName:"下水管接至楼面下水口或接至一楼",name:"下水管接至楼面下水口或接至一楼",required:!0,...a(1,50),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"横排时M型水槽",imageName:"横排时M型水槽",name:"横排时M型水槽",...a(1,100),backfill(e){const i=e?.trestleDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.trestleDistributionBox)||(e.trestleDistributionBox=[]),e.trestleDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}}],C=[h("组件安装"),{label:"组件铭牌",name:"组件铭牌",imageName:"组件铭牌",required:!0,...a(1,50),backfill(e){const i=e?.componentInstallation?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.componentInstallation)||(e.componentInstallation=[]),e.componentInstallation.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"组件方位角",imageName:"组件方位角",name:"组件方位角",required:!0,...a(1,50),backfill(e){const i=e?.componentInstallation?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.componentInstallation)||(e.componentInstallation=[]),e.componentInstallation.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"组件倾角",imageName:"组件倾角",name:"组件倾角",required:!0,...a(1,50),backfill(e){const i=e?.componentInstallation?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.componentInstallation)||(e.componentInstallation=[]),e.componentInstallation.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"组件接地",imageName:"组件接地",name:"组件接地",required:!0,...a(1,50),backfill(e){const i=e?.componentInstallation?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.componentInstallation)||(e.componentInstallation=[]),e.componentInstallation.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"航拍俯视近景",imageName:"航拍俯视近景",name:"航拍俯视近景",required:!0,...a(1,50),backfill(e){const i=e?.componentInstallation?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.componentInstallation)||(e.componentInstallation=[]),e.componentInstallation.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"航拍坐北朝南远景",imageName:"航拍坐北朝南远景",name:"航拍坐北朝南远景",required:!0,...a(1,50),backfill(e){const i=e?.componentInstallation?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.componentInstallation)||(e.componentInstallation=[]),e.componentInstallation.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}}],X=[h("线缆安装"),{label:"线缆品牌与型号",imageName:"线缆品牌与型号",name:"线缆品牌与型号",required:!0,...a(1,50),backfill(e){const i=e?.wireRigging?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.wireRigging)||(e.wireRigging=[]),e.wireRigging.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"线缆屋面走线管照片",imageName:"线缆屋面走线管照片",name:"线缆屋面走线管照片",required:!0,...a(1,50),backfill(e){const i=e?.wireRigging?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.wireRigging)||(e.wireRigging=[]),e.wireRigging.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"线缆下墙走线管照片",imageName:"线缆下墙走线管照片",name:"线缆下墙走线管照片",required:!0,...a(1,100),backfill(e){const i=e?.wireRigging?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.wireRigging)||(e.wireRigging=[]),e.wireRigging.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}}],T=[h("接地系统"),{label:"支架与接地扁铁",imageName:"支架与接地扁铁",name:"支架与接地扁铁",required:!0,...a(1,50),backfill(e){const i=e?.groundingSystem?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.groundingSystem)||(e.groundingSystem=[]),e.groundingSystem.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"接地扁铁与接地极",imageName:"接地扁铁与接地极",name:"接地扁铁与接地极",required:!0,...a(1,50),backfill(e){const i=e?.groundingSystem?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.groundingSystem)||(e.groundingSystem=[]),e.groundingSystem.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}}],U=[h("逆变器和配电箱"),{label:"逆变器和配电箱整体照",imageName:"逆变器和配电箱整体照",name:"逆变器和配电箱整体照",required:!0,...a(999,100),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageList||"";this.inlineForm[0].value=i.map(t=>({url:n(t.imageAddr)})),o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageList:this.inlineForm[0].value.map(i=>({imageAddr:r(i),imageName:this.name})),imageName:this.name})}},{label:"配电箱内部照",imageName:"配电箱内部照",name:"配电箱内部照",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"逆变器铭牌照",imageName:"逆变器铭牌照",name:"逆变器铭牌照",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"光精灵或采集器二维码",imageName:"光精灵或采集器二维码",name:"光精灵或采集器二维码",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"支架系统接地阻值(<10Ω)",imageName:"支架系统接地阻",name:"支架系统接地阻",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"电气系统接地阻值(<4Ω)",imageName:"电气系统接地阻值",name:"电气系统接地阻值",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"开路电压照片1",imageName:"开路电压照片1",name:"开路电压照片1",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"开路电压照片2",imageName:"开路电压照片2",name:"开路电压照片2",required:!0,...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"开路电压照片3",imageName:"开路电压照片3",name:"开路电压照片3",...a(1,50),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"开路电压照片4",imageName:"开路电压照片4",name:"开路电压照片4",...a(1,100),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}},{label:"开路电压照片",imageName:"开路电压照片",name:"开路电压照片",...a(999,100),backfill(e){const i=e?.inverterDistributionBox?.find(t=>t.imageName==this.imageName)?.imageList||[];this.inlineForm[0].value=i.map(t=>({url:n(t.imageAddr)})),o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.inverterDistributionBox)||(e.inverterDistributionBox=[]),e.inverterDistributionBox.push({imageList:this.inlineForm[0].value.map(i=>({imageAddr:r(i),imageName:this.name})),imageName:this.name})}}],G=[h("施工自检单"),{label:"施工自检单",imageName:"施工自检单",name:"施工自检单",required:!0,...a(1,100),backfill(e){const i=e?.completionInspection?.find(t=>t.imageName.includes(this.imageName))?.imageAddr||"";this.inlineForm[0].value=i?[{url:n(i)}]:[],o(),l(...this.inlineForm[0].value.map(t=>t.url))},getParam(e){delete e[this.name],m.isArray(e.completionInspection)||(e.completionInspection=[]),e.completionInspection.push({imageAddr:this.inlineForm[0].value.map(i=>r(i))[0],imageName:this.name})}}],be={__name:"buildVideo",setup(e){let i=S({electricStationMaterialForm:R,trestleDistributionBoxForm:L,componentInstallationForm:C,wireRiggingForm:X,groundingSystemForm:T,inverterDistributionBoxForm:U,completionInspectionForm:G});const t=p();q(()=>{P(b)});async function b(){const s=N("order/get-construction-images",{...t}),{data:v}=await c.get(s);M(i,v)}async function f(){const s=k();await c.post("/order/put-construction-images",s)}async function F(s){s.taskId="TASK_SGYXJXX",await c.post(N("approval/put-approval/bto/construction",s)),console.log(s,333333)}async function A(s){s.taskId="TASK_SGYXJXX",await c.post("approval/do-approval/bto/construction",s)}return y({getData:b,saveData:f,submitData:F,approvalData:A}),(s,v)=>{const g=x,D=B;return I(),w(_,null,[u(g,{form:d(i).electricStationMaterialForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(g,{form:d(i).trestleDistributionBoxForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(g,{form:d(i).componentInstallationForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(g,{form:d(i).wireRiggingForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(g,{form:d(i).groundingSystemForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(g,{form:d(i).inverterDistributionBoxForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(g,{form:d(i).completionInspectionForm,class:"pt-3","group-class":"shadowC"},null,8,["form"]),u(D)],64)}}};export{be as default};