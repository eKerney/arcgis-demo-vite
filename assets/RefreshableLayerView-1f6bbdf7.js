import{ai as s,aj as t,al as h,ce as l,b9 as o,by as d}from"./index-71d9419a.js";const n=r=>{let e=class extends r{initialize(){this.handles.add(l(()=>this.layer,"refresh",i=>{this.doRefresh(i.dataChanged).catch(a=>{o(a)||d.getLogger(this).error(a)})}),"RefreshableLayerView")}};return s([t()],e.prototype,"layer",void 0),e=s([h("esri.layers.mixins.RefreshableLayerView")],e),e};export{n as a};