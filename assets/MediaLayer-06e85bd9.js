import{dt as xe,m5 as ve,pX as Re,kE as L,pY as we,pZ as $e,p_ as ce,cq as Ce,hA as B,ai as i,al as v,hP as qe,d6 as te,by as G,aj as l,bN as d,fR as _e,bD as Ie,p$ as Ve,av as z,ey as U,q0 as He,aC as Z,cl as se,q1 as A,q2 as pe,ak as re,ep as b,ao as Ne,q3 as K,bP as ie,e6 as We,q4 as Ae,q5 as Be,h3 as Me,ax as ne,iW as Ge,q6 as ue,fM as be,q7 as Se,q8 as Ue,q9 as Fe,ps as ke,qa as ze,qb as Ke,gK as De,qc as Je,aK as Y,cc as Ye,cb as Ze,cd as Qe,aL as Xe,aB as et,aN as tt,fI as nt,cP as ot,dE as st,d5 as rt,qd as it,fS as at,fU as lt,aq as ct,as as pt,gm as ut,aF as dt}from"./index-4e7cdbf0.js";import{o as ht}from"./BoundsStore-e596fecb.js";import{i as ft}from"./MediaElementView-3718b5e9.js";import"./PooledRBush-295d6ce1.js";import"./quickselect-8ff2a76e.js";import"./normalizeUtilsSync-0d231fb2.js";import"./normalizeUtilsCommon-8aa93216.js";const g=Ce(),V=B(),X=B(),de=B();function j(e,t,n){return xe(g,t[0],t[1],1),ve(g,g,Re(V,n)),g[2]===0?L(e,g[0],g[1]):L(e,g[0]/g[2],g[1]/g[2])}function mt(e,t,n){return he(X,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),he(de,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),we(e,$e(X,X),de),e[8]!==0&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function he(e,t,n,o,s,r,a,c,p){ce(e,t,o,r,n,s,a,1,1,1),xe(g,c,p,1),$e(V,e);const[h,m,x]=ve(g,g,Re(V,V));return ce(V,h,0,0,0,m,0,0,0,x),we(e,V,e)}let oe=class extends qe{projectOrWarn(t,n){if(t==null)return t;const{geometry:o,pending:s}=te(t,n);return s?null:s||o?o:(G.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:n}),null)}};oe=i([v("esri.layers.support.GeoreferenceBase")],oe);const Q=oe,ee=B(),u=b();let F=class extends Ne{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};i([l()],F.prototype,"sourcePoint",void 0),i([l({type:d})],F.prototype,"mapPoint",void 0),F=i([v("esri.layers.support.ControlPoint")],F);let P=class extends _e(Q){constructor(e){super(e),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(e,t){const n=Ie.fromJSON(t.spatialReference),o=Ve(...t.coefficients,1);return e.map(s=>(L(u,s.x,s.y),j(u,u,o),{sourcePoint:s,mapPoint:new d({x:u[0],y:u[1],spatialReference:n})}))}writeControlPoints(e,t,n,o){if(this.transform!=null)e!=null&&f(e[0])&&(t.controlPoints=e.map(s=>{const r=s.sourcePoint;return{x:r.x,y:r.y}}),t.spatialReference=e[0].mapPoint.spatialReference.toJSON(),t.coefficients=this.transform.slice(0,8));else{const s=new z("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:o==null?void 0:o.layer,georeference:this});o!=null&&o.messages?o.messages.push(s):G.getLogger(this).error(s.name,s.message)}}get coords(){if(this.controlPoints==null)return null;const e=this._updateTransform(ee);if(e==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return vt(e,this.width,this.height,t)}set coords(e){if(this.controlPoints==null||!f(this.controlPoints[0]))return;const t=this.controlPoints[0].mapPoint.spatialReference;if((e=this.projectOrWarn(e,t))==null)return;const{width:n,height:o}=this,{rings:[[s,r,a,c]]}=e,p={sourcePoint:U(0,o),mapPoint:new d({x:s[0],y:s[1],spatialReference:t})},h={sourcePoint:U(0,0),mapPoint:new d({x:r[0],y:r[1],spatialReference:t})},m={sourcePoint:U(n,0),mapPoint:new d({x:a[0],y:a[1],spatialReference:t})},x={sourcePoint:U(n,o),mapPoint:new d({x:c[0],y:c[1],spatialReference:t})};f(p)&&f(h)&&f(m)&&f(x)&&(fe(ee,p,h,m,x),this.controlPoints=this.controlPoints.map(({sourcePoint:R})=>(L(u,R.x,R.y),j(u,u,ee),{sourcePoint:R,mapPoint:new d({x:u[0],y:u[1],spatialReference:t})})))}get inverseTransform(){return this.transform==null?null:He(B(),this.transform)}get transform(){return this._updateTransform()}toMap(e){if(e==null||this.transform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;L(u,e.x,e.y);const t=this.controlPoints[0].mapPoint.spatialReference;return j(u,u,this.transform),new d({x:u[0],y:u[1],spatialReference:t})}toSource(e){if(e==null||this.inverseTransform==null||this.controlPoints==null||!f(this.controlPoints[0]))return null;const t=this.controlPoints[0].mapPoint.spatialReference;return e=e.normalize(),(e=te(e,t).geometry)==null?null:(L(u,e.x,e.y),j(u,u,this.inverseTransform),U(u[0],u[1]))}_updateTransform(e){const{controlPoints:t,width:n,height:o}=this;if(!(t!=null&&n>0&&o>0))return null;const[s,r,a,c]=t;if(!f(s))return null;const p=s.mapPoint.spatialReference,h=this._projectControlPoint(r,p),m=this._projectControlPoint(a,p),x=this._projectControlPoint(c,p);if(!h.valid||!m.valid||!x.valid||!f(h.controlPoint))return null;e==null&&(e=B());let R=null;return R=f(m.controlPoint)&&f(x.controlPoint)?fe(e,s,h.controlPoint,m.controlPoint,x.controlPoint):f(m.controlPoint)?gt(e,s,h.controlPoint,m.controlPoint):yt(e,s,h.controlPoint),R.every(Te=>Te===0)?null:R}_projectControlPoint(e,t){if(!f(e))return{valid:!0,controlPoint:e};const{sourcePoint:n,mapPoint:o}=e,{geometry:s,pending:r}=te(o,t);return r?{valid:!1,controlPoint:null}:r||s?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:s}}:(G.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:e,sourceSpatialReference:o.spatialReference,targetSpatialReference:t}),{valid:!1,controlPoint:null})}};function f(e){return e!=null&&e.sourcePoint!=null&&e.mapPoint!=null}i([l({type:[F],json:{write:{allowNull:!1,isRequired:!0}}})],P.prototype,"controlPoints",void 0),i([Z("controlPoints")],P.prototype,"readControlPoints",null),i([se("controlPoints")],P.prototype,"writeControlPoints",null),i([l()],P.prototype,"coords",null),i([l({json:{write:!0}})],P.prototype,"height",void 0),i([l({readOnly:!0})],P.prototype,"inverseTransform",null),i([l({readOnly:!0})],P.prototype,"transform",null),i([l({json:{write:!0}})],P.prototype,"width",void 0),P=i([v("esri.layers.support.ControlPointsGeoreference")],P);const w=b(),$=b(),C=b(),O=b(),_=b(),I=b(),q=b(),T=b(),D=Math.PI/2;function M(e,t,n){L(e,n.sourcePoint.x,n.sourcePoint.y),L(t,n.mapPoint.x,n.mapPoint.y)}function yt(e,t,n){return M(w,_,t),M($,I,n),A(C,$,w,D),A(O,w,$,D),A(q,I,_,-D),A(T,_,I,-D),ae(e,w,$,C,O,_,I,q,T)}function gt(e,t,n,o){return M(w,_,t),M($,I,n),M(C,q,o),pe(O,w,$,.5),A(O,C,O,Math.PI),pe(T,_,I,.5),A(T,q,T,Math.PI),ae(e,w,$,C,O,_,I,q,T)}function fe(e,t,n,o,s){return M(w,_,t),M($,I,n),M(C,q,o),M(O,T,s),ae(e,w,$,C,O,_,I,q,T)}const Pt=new Array(8).fill(0),xt=new Array(8).fill(0);function me(e,t,n,o,s){return e[0]=t[0],e[1]=t[1],e[2]=n[0],e[3]=n[1],e[4]=o[0],e[5]=o[1],e[6]=s[0],e[7]=s[1],e}function ae(e,t,n,o,s,r,a,c,p){return mt(e,me(Pt,t,n,o,s),me(xt,r,a,c,p))}function vt(e,t,n,o){const s=K(0,n),r=K(0,0),a=K(t,0),c=K(t,n);return j(s,s,e),j(r,r,e),j(a,a,e),j(c,c,e),new re({rings:[[s,r,a,c,s]],spatialReference:o})}const Ee=P;let S=class extends Q{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:n,bottomLeft:o,bottomRight:s}=this;if(t==null||n==null||o==null||s==null)return null;const r=t.spatialReference;return n=this.projectOrWarn(n,r),o=this.projectOrWarn(o,r),s=this.projectOrWarn(s,r),n==null||o==null||s==null?null:new re({rings:[[[o.x,o.y],[t.x,t.y],[n.x,n.y],[s.x,s.y],[o.x,o.y]]],spatialReference:r})}set coords(t){const{topLeft:n}=this;if(n==null)return;const o=n.spatialReference;if((t=this.projectOrWarn(t,o))==null)return;const{rings:[[s,r,a,c]]}=t;this.bottomLeft=new d({x:s[0],y:s[1],spatialReference:o}),this.topLeft=new d({x:r[0],y:r[1],spatialReference:o}),this.topRight=new d({x:a[0],y:a[1],spatialReference:o}),this.bottomRight=new d({x:c[0],y:c[1],spatialReference:o})}};i([l()],S.prototype,"coords",null),i([l({type:d})],S.prototype,"bottomLeft",void 0),i([l({type:d})],S.prototype,"bottomRight",void 0),i([l({type:d})],S.prototype,"topLeft",void 0),i([l({type:d})],S.prototype,"topRight",void 0),S=i([v("esri.layers.support.CornersGeoreference")],S);const Rt=S;let H=class extends Q{constructor(e){super(e),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(this.extent==null)return null;const{xmin:e,ymin:t,xmax:n,ymax:o,spatialReference:s}=this.extent;let r;if(this.rotation){const{x:a,y:c}=this.extent.center,p=ye(a,c,this.rotation);r=[p(e,t),p(e,o),p(n,o),p(n,t)],r.push(r[0])}else r=[[e,t],[e,o],[n,o],[n,t],[e,t]];return new re({rings:[r],spatialReference:s})}set coords(e){if(e==null||this.extent==null)return;const t=this.extent.spatialReference;if((e=this.projectOrWarn(e,t))==null||e.extent==null)return;const{rings:[[n,o,s]],extent:{center:{x:r,y:a}}}=e,c=We(Math.PI/2-Math.atan2(o[1]-n[1],o[0]-n[0])),p=ye(r,a,-c),[h,m]=p(n[0],n[1]),[x,R]=p(s[0],s[1]);this.extent=new ie({xmin:h,ymin:m,xmax:x,ymax:R,spatialReference:t}),this.rotation=c}};function ye(e,t,n){const o=Ae(n),s=Math.cos(o),r=Math.sin(o);return(a,c)=>[s*(a-e)+r*(c-t)+e,s*(c-t)-r*(a-e)+t]}i([l()],H.prototype,"coords",null),i([l({type:ie})],H.prototype,"extent",void 0),i([l({type:Number})],H.prototype,"rotation",void 0),H=i([v("esri.layers.support.ExtentAndRotationGeoreference")],H);const wt=H,$t={key:"type",base:Q,typeMap:{"control-points":Ee,corners:Rt,"extent-and-rotation":wt}};let N=class extends Be(_e(Me)){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return Ee.fromJSON(e)}};i([l({types:$t,json:{write:!0}})],N.prototype,"georeference",void 0),i([Z("georeference")],N.prototype,"readGeoreference",null),i([l()],N.prototype,"opacity",void 0),N=i([v("esri.layers.support.MediaElementBase")],N);const le=N;let E=class extends le{constructor(t){super(t),this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if(typeof t=="string"){const n=ne(t,{responseType:"image"}).then(({data:o})=>{this._set("content",o)});this.addResolvingPromise(n)}else if(t instanceof HTMLImageElement){const n=t.decode().then(()=>{this._set("content",t)});this.addResolvingPromise(n)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new z("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}readImage(t,n,o){return Ge(n.url,o)}writeImage(t,n,o,s){if(t==null)return;const r=s==null?void 0:s.portalItem,a=s==null?void 0:s.resources;if(!r||!a)return void(typeof t=="string"&&(n[o]=ue(t,s)));const c=typeof t!="string"||be(t)||Se(t)?null:t;if(c){if(Ue(c)==null)return void(n[o]=c);const p=ue(c,{...s,verifyItemRelativeUrls:s&&s.verifyItemRelativeUrls?{writtenUrls:s.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},Fe.NO);if(r&&p&&!ke(p))return a.toKeep.push({resource:r.resourceFromPath(p),compress:!1}),void(n[o]=p)}n[o]="<pending>",a.pendingOperations.push(je(t).then(p=>{const h=It(p,r);n[o]=h.itemRelativeUrl,a.toAdd.push({resource:h,content:p,compress:!1,finish:m=>{this.image=m.url}})}))}};i([l({readOnly:!0})],E.prototype,"content",void 0),i([l({json:{name:"url",type:String}})],E.prototype,"image",void 0),i([Z("image",["url"])],E.prototype,"readImage",null),i([se("image")],E.prototype,"writeImage",null),i([l({readOnly:!0,json:{name:"mediaType"}})],E.prototype,"type",void 0),E=i([v("esri.layers.support.ImageElement")],E);const Le=E;async function je(e){if(typeof e=="string"){if(Se(e)){const{data:t}=await ne(e,{responseType:"blob"});return t}return be(e)?ze(e):je((await ne(e,{responseType:"image"})).data)}return new Promise(t=>_t(e).toBlob(t))}function _t(e){if(e instanceof HTMLCanvasElement)return e;const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,n=e instanceof HTMLImageElement?e.naturalHeight:e.height,o=document.createElement("canvas"),s=o.getContext("2d");return o.width=t,o.height=n,e instanceof HTMLImageElement?s.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&s.putImageData(e,0,0),o}function It(e,t){const n=Ke(),o=`${De("media",n)}.${Je(e)}`;return t.resourceFromPath(o)}let k=class extends le{constructor(e){super(e),this.content=null,this.type="video"}load(){const e=this.video;if(typeof e=="string"){const t=document.createElement("video");t.src=e,t.crossOrigin="anonymous",t.autoplay=!0,t.muted=!0,t.loop=!0,this.addResolvingPromise(this._loadVideo(t).then(()=>{this._set("content",t)}))}else e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then(()=>{this._set("content",e)})):this.addResolvingPromise(Promise.reject(new z("video-element:invalid-video-type","Invalid video type",{video:e})));return Promise.resolve(this)}set video(e){this.loadStatus==="not-loaded"?this._set("video",e):G.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(e){return new Promise((t,n)=>{e.oncanplay=()=>{e.oncanplay=null,e.play().then(t,n)},e.crossOrigin!=="anonymous"&&(e.crossOrigin="anonymous",e.src=e.src)})}};i([l({readOnly:!0})],k.prototype,"content",void 0),i([l()],k.prototype,"video",null),k=i([v("esri.layers.support.VideoElement")],k);const Oe=k,Mt={key:"type",defaultKeyValue:"image",base:le,typeMap:{image:Le,video:Oe}},ge=Y.ofType(Mt);let W=class extends Me.LoadableMixin(Ye(Ze(Qe.EventedAccessor))){constructor(t){super(t),this._index=new ht,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=n=>{for(const s of n.removed){const r=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(r),this.handles.remove(r),r.destroy(),this.notifyChange("fullExtent")}const{spatialReference:o}=this;for(const s of n.added){if(this._elementViewsMap.get(s))continue;const r=new ft({spatialReference:o,element:s});this._elementViewsMap.set(s,r);const a=Xe(()=>r.coords,()=>this._updateIndexForElement(r,!1));this._updateIndexForElement(r,!0),this.handles.add(a,r)}this._elementsIndexes.clear(),this.elements.forEach((s,r)=>this._elementsIndexes.set(s,r)),this.emit("refresh")},this.elements=new ge}async load(t){if(et(t),!this.spatialReference){const n=this.elements.find(o=>o.georeference!=null&&o.georeference.coords!=null);this._set("spatialReference",n?n.georeference.coords.spatialReference:Ie.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.handles.add(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(t){this._set("elements",tt(t,this._get("elements"),ge))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const t=this._index.fullBounds;return t==null?null:new ie({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:this.spatialReference})}set spatialReference(t){this.loadStatus==="not-loaded"?this._set("spatialReference",t):G.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(t,n){await this.load(),await nt(t.spatialReference,this.spatialReference,null,n);const o=ot(t.spatialReference,this.spatialReference)?t:st(t,this.spatialReference);if(!o)return[];const s=o.normalize(),r=[];for(const a of s)this._index.forEachInBounds(rt(a),({normalizedCoords:c,element:p})=>{c!=null&&it(a,c)&&r.push(p)});return r.sort((a,c)=>this._elementsIndexes.get(a)-this._elementsIndexes.get(c)),r}_updateIndexForElement(t,n){const o=t.normalizedBounds,s=this._index.has(t),r=o!=null;this._index.delete(t),r&&this._index.set(t,o),this.notifyChange("fullExtent"),n||(s!==r?this.emit("refresh"):this.emit("change",{element:t.element}))}};i([l()],W.prototype,"elements",null),i([l({readOnly:!0})],W.prototype,"fullExtent",null),i([l()],W.prototype,"spatialReference",null),W=i([v("esri.layers.support.LocalMediaElementSource")],W);const J=W;function Pe(e){return typeof e=="object"&&e!=null&&"type"in e}let y=class extends at(lt(ct(pt(dt)))){constructor(e){super(e),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new J}load(e){const t=this.source;if(!t)return this.addResolvingPromise(Promise.reject(new z("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const n=Pe(t)?new J({elements:new Y([t])}):t;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference);const o=n.load(e).then(()=>{this.spatialReference=n.spatialReference});return this.addResolvingPromise(o),Promise.resolve(this)}destroy(){var e,t;(e=this.effectiveSource)==null||e.destroy(),(t=this.source)==null||t.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus==="not-loaded"?this._set("source",e):G.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new J({elements:new Y(e)}):e instanceof Y?new J({elements:e}):e:null}readSource(e,t,n){const o=t.mediaType==="image"?new Le:t.mediaType==="video"?new Oe:null;return o==null||o.read(t,n),o}writeSource(e,t,n,o){var s;e&&Pe(e)&&e.type==="image"?e.write(t,o):o!=null&&o.messages&&((s=o==null?void 0:o.messages)==null||s.push(new z("media-layer:unsupported-source","source must be an 'ImageElement'")))}};i([l({readOnly:!0})],y.prototype,"effectiveSource",void 0),i([l({type:String})],y.prototype,"copyright",void 0),i([l({readOnly:!0})],y.prototype,"fullExtent",null),i([l({type:["MediaLayer"]})],y.prototype,"operationalLayerType",void 0),i([l({type:["show","hide"]})],y.prototype,"listMode",void 0),i([l({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],y.prototype,"source",null),i([ut("source")],y.prototype,"castSource",null),i([Z("source",["url"])],y.prototype,"readSource",null),i([se("source")],y.prototype,"writeSource",null),i([l()],y.prototype,"spatialReference",void 0),i([l({readOnly:!0})],y.prototype,"type",void 0),y=i([v("esri.layers.MediaLayer")],y);const Nt=y;export{Nt as default};
