import{ar as n,as as p,gn as l,ai as o,aj as a,al as u,aF as d,av as y}from"./index-4e7cdbf0.js";let t=class extends n(p(d)){constructor(e){super(e),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,r)=>{l(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let i="Unsupported layer type";s&&(i+=" "+s),r(new y("layer:unsupported-layer-type",i,{layerType:s}))})}))}read(e,r){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,r)}write(e,r){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};o([a({readOnly:!0})],t.prototype,"resourceInfo",void 0),o([a({type:["show","hide"]})],t.prototype,"listMode",void 0),o([a({json:{read:!1},readOnly:!0,value:"unsupported"})],t.prototype,"type",void 0),t=o([u("esri.layers.UnsupportedLayer")],t);const h=t;export{h as default};
