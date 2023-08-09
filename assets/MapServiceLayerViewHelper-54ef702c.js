import{fb as z,g9 as B,cR as Z,ai as l,aj as y,mJ as C,gC as K,bP as J,bD as W,ga as X,al as _,cm as M,ls as Y,aP as I,aC as ee,cl as te,j0 as re,c3 as se,mK as ie,mL as ae,ax as ne,ao as oe,cT as le,ce as ue,av as V,aK as pe,bk as A,bf as ye,eg as L,aA as ce,l7 as he,dF as de,c4 as fe,mM as me,dl as ge,mN as we,eS as be,hK as ve,dj as xe}from"./index-4e7cdbf0.js";import{n as G}from"./floorFilterUtils-080a7cd2.js";import{s as T}from"./drapedUtils-482b56eb.js";import{b as $e}from"./normalizeUtils-5108f928.js";import{n as Se}from"./sublayerUtils-421ec0c7.js";const U=t=>t.spatialReference.wkid||JSON.stringify(t.spatialReference);function Fe(t,e){const{dpi:s,gdbVersion:i,geometry:r,geometryPrecision:a,height:n,layerOption:o,mapExtent:c,maxAllowableOffset:u,returnFieldName:p,returnGeometry:d,returnUnformattedValues:h,returnZ:F,spatialReference:x,timeExtent:$,tolerance:m,width:j}=t.toJSON(),{dynamicLayers:w,layerDefs:b,layerIds:v}=je(t),N=e&&e.geometry!=null?e.geometry:null,g={geometryPrecision:a,maxAllowableOffset:u,returnFieldName:p,returnGeometry:d,returnUnformattedValues:h,returnZ:F,tolerance:m},O=N&&N.toJSON()||r;if(g.imageDisplay=`${j},${n},${s}`,i&&(g.gdbVersion=i),O&&(delete O.spatialReference,g.geometry=JSON.stringify(O),g.geometryType=z(O)),x?g.sr=x.wkid||JSON.stringify(x):O&&O.spatialReference?g.sr=U(O):c&&c.spatialReference&&(g.sr=U(c)),g.time=$?[$.start,$.end].join(","):null,c){const{xmin:Q,ymin:k,xmax:D,ymax:q}=c;g.mapExtent=`${Q},${k},${D},${q}`}return b&&(g.layerDefs=b),w&&!b&&(g.dynamicLayers=w),g.layers=o==="popup"?"visible":o,v&&!w&&(g.layers+=`:${v.join(",")}`),g}function je(t){var x,$;const{mapExtent:e,floors:s,width:i,sublayers:r,layerIds:a,layerOption:n,gdbVersion:o}=t,c=($=(x=r==null?void 0:r.find(m=>m.layer!=null))==null?void 0:x.layer)==null?void 0:$.serviceSublayers,u=n==="popup",p={},d=B({extent:e,width:i,spatialReference:e==null?void 0:e.spatialReference}),h=[],F=m=>{const j=d===0,w=m.minScale===0||d<=m.minScale,b=m.maxScale===0||d>=m.maxScale;if(m.visible&&(j||w&&b))if(m.sublayers)m.sublayers.forEach(F);else{if((a==null?void 0:a.includes(m.id))===!1||u&&(!m.popupTemplate||!m.popupEnabled))return;h.unshift(m)}};if(r==null||r.forEach(F),r&&!h.length)p.layerIds=[];else{const m=Se(h,c,o),j=h.map(w=>{const b=G(s,w);return w.toExportImageJSON(b)});if(m)p.dynamicLayers=JSON.stringify(j);else{if(r){let b=h.map(({id:v})=>v);a&&(b=b.filter(v=>a.includes(v))),p.layerIds=b}else a!=null&&a.length&&(p.layerIds=a);const w=Oe(s,h);if(w!=null&&w.length){const b={};for(const v of w)v.definitionExpression&&(b[v.id]=v.definitionExpression);Object.keys(b).length&&(p.layerDefs=JSON.stringify(b))}}}return p}function Oe(t,e){const s=!!(t!=null&&t.length),i=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return i.length?i.map(r=>{const a=G(t,r),n=Z(a,r.definitionExpression);return{id:r.id,definitionExpression:n??void 0}}):null}var P;let f=P=class extends M{static from(t){return Y(P,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};l([y({type:Number,json:{write:!0}})],f.prototype,"dpi",void 0),l([y()],f.prototype,"floors",void 0),l([y({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),l([y({types:C,json:{read:K,write:!0}})],f.prototype,"geometry",void 0),l([y({type:Number,json:{write:!0}})],f.prototype,"geometryPrecision",void 0),l([y({type:Number,json:{write:!0}})],f.prototype,"height",void 0),l([y({type:[Number],json:{write:!0}})],f.prototype,"layerIds",void 0),l([y({type:["top","visible","all","popup"],json:{write:!0}})],f.prototype,"layerOption",void 0),l([y({type:J,json:{write:!0}})],f.prototype,"mapExtent",void 0),l([y({type:Number,json:{write:!0}})],f.prototype,"maxAllowableOffset",void 0),l([y({type:Boolean,json:{write:!0}})],f.prototype,"returnFieldName",void 0),l([y({type:Boolean,json:{write:!0}})],f.prototype,"returnGeometry",void 0),l([y({type:Boolean,json:{write:!0}})],f.prototype,"returnM",void 0),l([y({type:Boolean,json:{write:!0}})],f.prototype,"returnUnformattedValues",void 0),l([y({type:Boolean,json:{write:!0}})],f.prototype,"returnZ",void 0),l([y({type:W,json:{write:!0}})],f.prototype,"spatialReference",void 0),l([y()],f.prototype,"sublayers",void 0),l([y({type:X,json:{write:!0}})],f.prototype,"timeExtent",void 0),l([y({type:Number,json:{write:!0}})],f.prototype,"tolerance",void 0),l([y({type:Number,json:{write:!0}})],f.prototype,"width",void 0),f=P=l([_("esri.rest.support.IdentifyParameters")],f);const H=f;let S=class extends M{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return I.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:i}=t;s&&(e.attributes={...s}),i!=null&&(e.geometry=i.toJSON(),e.geometryType=re.toJSON(i.type))}};l([y({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),l([y({type:I})],S.prototype,"feature",void 0),l([ee("feature",["attributes","geometry"])],S.prototype,"readFeature",null),l([te("feature")],S.prototype,"writeFeature",null),l([y({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),l([y({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=l([_("esri.rest.support.IdentifyResult")],S);const Re=S;async function Ne(t,e,s){const i=(e=Pe(e)).geometry?[e.geometry]:[],r=se(t);return r.path+="/identify",$e(i).then(a=>{const n=Fe(e,{geometry:a&&a[0]}),o=ie({...r.query,f:"json",...n}),c=ae(o,s);return ne(r.path,c).then(Ee).then(u=>_e(u,e.sublayers))})}function Ee(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Re.fromJSON(s)),e}function Pe(t){return t=H.from(t)}function _e(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function i(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(i)}e.forEach(i);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let E=null;function He(t,e){return e.type==="tile"||e.type==="map-image"}let R=class extends oe{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=le(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ue(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeatures(t,e){var n,o;const{layerView:{layer:s,view:{scale:i}}}=this;if(!t)throw new V("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ie(s.sublayers,i,e);if(!r.length)return[];const a=await Ve(s,r);if(!((((o=(n=s.capabilities)==null?void 0:n.operations)==null?void 0:o.supportsIdentify)??!0)&&s.version>=10.5)&&!a)throw new V("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return{remove(){}};let s=null;if(t instanceof I?s=[t]:pe.isCollection(t)&&t.length>0?s=t.toArray():Array.isArray(t)&&t.length>0&&(s=t),s=s==null?void 0:s.filter(A),!s||!s.length)return ye();for(const i of s){const r=i.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(i.visible=!1)}return e.addMany(s),{remove:()=>{e.removeMany(s??[])}}}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:i}=this;if(s&&i)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async n=>{var u;n||(n=new L);let o=null;const c="visualVariables"in a?(u=a.visualVariables)==null?void 0:u.find(p=>p.type==="size"):void 0;c&&(E||(E=(await ce(()=>import("./index-4e7cdbf0.js").then(p=>p.yi),["assets/index-4e7cdbf0.js","assets/index-aa0eb131.css"])).getSize),o=E(c,r,{view:e.type,scale:e.scale,shape:n.type==="simple-marker"?n.style:null})),o||(o="width"in n&&"height"in n&&n.width!=null&&n.height!=null?Math.max(n.width,n.height):"size"in n?n.size:16),s.includes(r)&&(r.symbol=new L({style:"square",size:o,xoffset:"xoffset"in n?n.xoffset:0,yoffset:"yoffset"in n?n.yoffset:0}),i(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(i!=null&&i.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),n=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>a){const p=u.sourceLayer;he(n,p,()=>new Map).set(u.getObjectId(),u)}const o=Array.from(n,([u,p])=>{const d=u.createQuery();return d.objectIds=[...p.keys()],d.outFields=[u.objectIdField],d.returnGeometry=!0,d.maxAllowableOffset=a,d.outSpatialReference=s.spatialReference,u.queryFeatures(d)}),c=await Promise.all(o);if(!this.destroyed)for(const{features:u}of c)for(const p of u){const d=p.sourceLayer,h=n.get(d).get(p.getObjectId());h&&i.includes(h)&&(h.geometry=p.geometry,r(h,"geometry"),this._featuresResolutions.set(h,a))}}_getTargetResolution(t){const e=t*de(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const i=await this._createIdentifyParameters(t,e,s);if(i==null)return[];const{results:r}=await Ne(this.layerView.layer.parsedUrl,i);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,s){const{floors:i,layer:r,timeExtent:a,view:{spatialReference:n,scale:o}}=this.layerView,c=s!=null?s.event:null;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load().catch(()=>{})));const u=Math.min(fe("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?T({renderer:$.renderer,event:c}):x,2)),p=this.createFetchPopupFeaturesQueryGeometry(t,u),d=me(o,n),h=Math.round(p.width/d),F=new J({xmin:p.center.x-d*h,ymin:p.center.y-d*h,xmax:p.center.x+d*h,ymax:p.center.y+d*h,spatialReference:p.spatialReference});return new H({floors:i,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:F,returnGeometry:!0,spatialReference:n,sublayers:r.sublayers,timeExtent:a,tolerance:u,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:i,timeExtent:r}}=this,a=s!=null?s.event:null,n=e.map(async({sublayer:o,popupTemplate:c})=>{var v;if(await o.load().catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const u=o.createQuery(),p=T({renderer:o.renderer,event:a}),d=this.createFetchPopupFeaturesQueryGeometry(t,p),h=new Set,[F]=await Promise.all([ge(o,c),(v=o.renderer)==null?void 0:v.collectRequiredFields(h,o.fieldsIndex)]);we(h,o.fieldsIndex,F);const x=Array.from(h).sort();if(u.geometry=d,u.outFields=x,u.timeExtent=r,i){const N=i.clone(),g=G(N,o);g!=null&&(u.where=u.where?`(${u.where}) AND (${g})`:g)}const $=this._getTargetResolution(d.width/p),m=await Ge(c),j=o.geometryType==="point"||m&&m.arcadeUtils.hasGeometryOperations(c);j||(u.maxAllowableOffset=$);let{features:w}=await o.queryFeatures(u);const b=j?0:$;w=await Ae(o,w);for(const N of w)this._featuresResolutions.set(N,b);return w});return(await be(n)).reverse().reduce((o,c)=>c.value?[...o,...c.value]:o,[]).filter(A)}};function Ie(t,e,s){const i=[],r=a=>{const n=a.minScale===0||e<=a.minScale,o=a.maxScale===0||e>=a.maxScale;if(a.visible&&n&&o){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const c=xe(a,{...s,defaultPopupTemplateEnabled:!1});c!=null&&i.unshift({sublayer:a,popupTemplate:c})}}};return((t==null?void 0:t.toArray())??[]).reverse().map(r),i}function Ge(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?ve():Promise.resolve()}async function Ve(t,e){var s,i;if((i=(s=t.capabilities)==null?void 0:s.operations)!=null&&i.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Ae(t,e){const s=t.renderer;return s&&"defaultSymbol"in s&&!s.defaultSymbol&&(e=s.valueExpression?await Promise.all(e.map(i=>s.getSymbolAsync(i).then(r=>r?i:null))).then(i=>i.filter(r=>r!=null)):e.filter(i=>s.getSymbol(i)!=null)),e}l([y({constructOnly:!0})],R.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),l([y({constructOnly:!0})],R.prototype,"layerView",void 0),l([y({constructOnly:!0})],R.prototype,"highlightGraphics",void 0),l([y({constructOnly:!0})],R.prototype,"highlightGraphicUpdated",void 0),l([y({constructOnly:!0})],R.prototype,"updatingHandles",void 0),R=l([_("esri.views.layers.support.MapService")],R);export{He as S,R as U};
