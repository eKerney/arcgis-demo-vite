import{ai as o,aj as p,cS as D,al as w,av as m,dj as E,be as b,bN as c,cT as H,aH as I}from"./index-4e7cdbf0.js";import{z as P}from"./DynamicLayerView3D-43790025.js";import"./LayerView3D-d89227ef.js";import"./projectExtentUtils-3af128e1.js";import"./ImageMaterial-fc7d3eab.js";import"./LayerView-18befeb9.js";import"./RefreshableLayerView-ae86cf2f.js";const T=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(a,r){const{layer:n}=this;if(!a)throw new m("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:n});const{popupEnabled:i}=n,s=E(n,r);if(!i||s==null)throw new m("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:s});const y=await s.getRequiredFields(),l=new b;l.timeExtent=this.timeExtent,l.geometry=a,l.outFields=y,l.outSpatialReference=a.spatialReference;const{resolution:d,spatialReference:h}=this.view,g=this.view.type==="2d"?new c(d,d,h):new c(.5*d,.5*d,h),{returnTopmostRaster:x,showNoDataRecords:v}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:x,pixelSize:g,showNoDataRecords:v,signal:r!=null?r.signal:null};return n.queryVisibleRasters(l,f).then(R=>R)}canResume(){var a;return!!super.canResume()&&!((a=this.timeExtent)!=null&&a.isEmpty)}};return o([p()],t.prototype,"layer",void 0),o([p()],t.prototype,"suspended",void 0),o([p(D)],t.prototype,"timeExtent",void 0),o([p()],t.prototype,"view",void 0),t=o([w("esri.views.layers.ImageryLayerView")],t),t};let u=class extends T(P){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=H(async e=>{this.redraw((t,a)=>this._redrawImage(t,a),e)},2e3)}initialize(){this.handles.add([I(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this.updatingHandles.addPromise(this.redrawDebounced()))]),this.updatingHandles.add(()=>{var e,t;return(t=(e=this.layer)==null?void 0:e.exportImageServiceParameters)==null?void 0:t.version},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>{var e;return(e=this.layer)==null?void 0:e.renderer},()=>{this.updatingHandles.addPromise(this.refreshDebounced())}),this.updatingHandles.add(()=>this.timeExtent,()=>this.updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||e.pixelData==null)throw new Error;const a=e.image,r=a.getContext("2d"),n=await this.layer.applyRenderer(e.pixelData,{signal:t}),i=this.layer.applyFilter(n).pixelBlock;if(i==null)throw new Error;a.width=i.width,a.height=i.height;const s=r.createImageData(i.width,i.height);s.data.set(i.getAsRGBA()),r.putImageData(s,0,0)}};u=o([w("esri.views.3d.layers.ImageryLayerView3D")],u);const M=u;export{M as default};
