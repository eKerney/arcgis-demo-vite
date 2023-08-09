import{ak as Y,bC as Q,bN as v,bO as ct,eg as k,b0 as D,eh as lt,cd as pt,er as W,cO as R,e4 as V,e5 as U,aH as _t,aL as S,ah as F,aP as M,ai as d,aj as g,ez as ut,aR as dt,al as gt}from"./index-4e7cdbf0.js";import{m as vt}from"./quantityFormatUtils-ff29e62c.js";import{i as x,s as H,a as mt,m as yt}from"./drawUtils-4001d27a.js";import{h as ft,P as Gt}from"./GraphicMover-aa6dda46.js";import{h as xt}from"./settings-76e285f6.js";import{i as wt,p as bt}from"./ExtentTooltipInfos-59594bb2.js";import{d as j,m as B}from"./automaticLengthMeasurementUtils-1eb9d49a.js";import{r as St}from"./TranslateTooltipInfos-f23baf92.js";import"./unitFormatUtils-b0223a02.js";import"./GraphicManipulator-d4dca446.js";import"./drapedUtils-482b56eb.js";import"./euclideanLengthMeasurementUtils-5fd8aab0.js";import"./measurementUtils-a6d314a6.js";import"./geometryEngine-7f801ff7.js";import"./geometryEngineBase-3a3551e4.js";import"./hydrated-7c582448.js";function Z(t){let i=0,e=0;const s=t.length;let r,a=t[e];for(e=0;e<s-1;e++)r=t[e+1],i+=(r[0]-a[0])*(r[1]+a[1]),a=r;return i>=0}function L(t,i,e,s){const r=[];for(const a of t){const h=a.slice(0);r.push(h);const c=i*(a[0]-s.x)-e*(a[1]-s.y)+s.x,o=e*(a[0]-s.x)+i*(a[1]-s.y)+s.y;h[0]=c,h[1]=o}return r}function T(t,i,e){const{hasM:s,hasZ:r,spatialReference:a}=t,h=i*Math.PI/180,c=Math.cos(h),o=Math.sin(h);if("xmin"in t&&(e=e??t.center,t=new Y({spatialReference:a,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){e=e??t.extent.center;const l=[];for(const n of t.paths)l.push(L(n,c,o,e));return new Q({hasM:s,hasZ:r,spatialReference:a,paths:l})}if("rings"in t){e=e??t.extent.center;const l=[];for(const n of t.rings){const p=Z(n),m=L(n,c,o,e);Z(m)!==p&&m.reverse(),l.push(m)}return new Y({hasM:s,hasZ:r,spatialReference:a,rings:l})}if("x"in t){e=e??t;const l=new v({x:c*(t.x-e.x)-o*(t.y-e.y)+e.x,y:o*(t.x-e.x)+c*(t.y-e.y)+e.y,spatialReference:a});return t.z!=null&&(l.z=t.z),t.m!=null&&(l.m=t.m),l}return"points"in t?(e=e??t.extent.center,new ct({hasM:s,hasZ:r,points:L(t.points,c,o,e),spatialReference:a})):null}class kt{constructor(i,e,s,r){this.graphics=i,this.mover=e,this.dx=s,this.dy=r,this.type="move-start"}}class Rt{constructor(i,e,s,r){this.graphics=i,this.mover=e,this.dx=s,this.dy=r,this.type="move"}}class q{constructor(i,e,s,r){this.graphics=i,this.mover=e,this.dx=s,this.dy=r,this.type="move-stop"}}class Mt{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-start"}}class It{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate"}}class J{constructor(i,e,s){this.graphics=i,this.mover=e,this.angle=s,this.type="rotate-stop"}}class Ot{constructor(i,e,s,r){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=r,this.type="scale-start"}}class Ct{constructor(i,e,s,r){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=r,this.type="scale"}}class K{constructor(i,e,s,r){this.graphics=i,this.mover=e,this.xScale=s,this.yScale=r,this.type="scale-stop"}}const _=xt.transformGraphics,w={centerIndicator:new k({style:"cross",size:_.center.size,color:_.center.color}),fill:{default:new D({color:_.fill.color,outline:{color:_.fill.outlineColor,join:"round",width:1}}),active:new D({color:_.fill.stagedColor,outline:{color:_.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new k({style:"square",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new k({style:"square",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotator:{default:new k({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new k({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotatorLine:new lt({color:_.line.color,width:1})};let u=class extends pt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=w,this.tooltipOptions=new W,this.view=null,this._getBounds=(()=>{const i=R();return(e,s)=>{e[0]=Number.POSITIVE_INFINITY,e[1]=Number.POSITIVE_INFINITY,e[2]=Number.NEGATIVE_INFINITY,e[3]=Number.NEGATIVE_INFINITY;for(const r of s){if(!r)continue;let a,h,c,o;if(r.type==="point")a=c=r.x,h=o=r.y;else if(r.type==="multipoint"){const l=V(r);[a,h,c,o]=U(i,[l])}else if(r.type==="extent")[a,h,c,o]=[r.xmin,r.ymin,r.xmax,r.ymax];else{const l=V(r);[a,h,c,o]=U(i,l)}e[0]=Math.min(a,e[0]),e[1]=Math.min(h,e[1]),e[2]=Math.max(c,e[2]),e[3]=Math.max(o,e[3])}return e}})()}initialize(){const t=this.view;this._highlightHelper=new ft({view:t}),this._tooltip=new j({view:t}),this._setup(),this.addHandles([_t(()=>t==null?void 0:t.ready,()=>{const{layer:i,view:e}=this;ut(e,i)},{once:!0,initial:!0}),S(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),S(()=>t==null?void 0:t.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),S(()=>this.graphics,()=>this.refresh()),S(()=>this.layer,(i,e)=>{e&&this._resetGraphics(e),this.refresh()}),S(()=>this.highlightsEnabled,()=>{var i;(i=this._highlightHelper)==null||i.removeAll(),this._setUpHighlights()}),S(()=>this.tooltipOptions.enabled,i=>{this._tooltip=i?new j({view:this.view}):F(this._tooltip)},dt),this.on("move-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStart)==null?void 0:s.call(e,i)}),this.on("move",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMove)==null?void 0:s.call(e,i)}),this.on("move-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onMoveStop)==null?void 0:s.call(e,i)}),this.on("rotate-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStart)==null?void 0:s.call(e,i)}),this.on("rotate",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotate)==null?void 0:s.call(e,i)}),this.on("rotate-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onRotateStop)==null?void 0:s.call(e,i)}),this.on("scale-start",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStart)==null?void 0:s.call(e,i)}),this.on("scale",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScale)==null?void 0:s.call(e,i)}),this.on("scale-stop",i=>{var e,s;return(s=(e=this.callbacks)==null?void 0:e.onScaleStop)==null?void 0:s.call(e,i)})])}destroy(){this._reset(),this._tooltip=F(this._tooltip)}get state(){var e;const t=((e=this.view)==null?void 0:e.ready)??!1,i=this.graphics.length&&this.layer;return t&&i?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,r=x(s,t,i,this.view);e.geometry=r}this.refresh(),this.emit("move-stop",new q(this.graphics,null,t,i))}}scale(t,i){if(this._mover&&this.graphics.length){for(const e of this.graphics){const s=e.geometry,r=H(s,t,i);e.geometry=r}this.refresh(),this.emit("scale-stop",new K(this.graphics,null,t,i))}}rotate(t,i){if(this._mover&&this.graphics.length){if(!i){const e=this._vertexGraphics[1].geometry.x,s=this._vertexGraphics[3].geometry.y;i=new v(e,s,this.view.spatialReference)}for(const e of this.graphics){const s=e.geometry,r=T(s,t,i);e.geometry=r}this.refresh(),this.emit("rotate-stop",new J(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){var t;(t=this._highlightHelper)==null||t.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new Gt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:i=>this._onGraphicClickCallback(i),onGraphicMoveStart:i=>this._onGraphicMoveStartCallback(i),onGraphicMove:i=>this._onGraphicMoveCallback(i),onGraphicMoveStop:i=>this._onGraphicMoveStopCallback(i),onGraphicPointerOver:i=>this._onGraphicPointerOverCallback(i),onGraphicPointerOut:i=>this._onGraphicPointerOutCallback(i)}})}_getStartInfo(t){const[i,e,s,r]=this._getBoxBounds(R()),a=Math.abs(s-i),h=Math.abs(r-e),c=(s+i)/2,o=(r+e)/2,{x:l,y:n}=t.geometry;return{width:a,height:h,centerX:c,centerY:o,startX:l,startY:n,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const i=t.geometry,[e,s,r,a]=this._getBounds(R(),[i]);return{width:Math.abs(r-e),height:Math.abs(a-s),centerX:(r+e)/2,centerY:(a+s)/2,geometry:i}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:i,_xScale:e,_yScale:s,_backgroundGraphic:r,_vertexGraphics:a,_rotateHandleGraphic:h,symbols:c}=this,o=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=c.fill.active,this._startInfo=this._getStartInfo(o),this._updateTooltip(o,t.viewEvent),o===h?(this.view.cursor="grabbing",this.emit("rotate-start",new Mt(this.graphics,o,i))):a.includes(o)?(this._activeHandleGraphic=o,this.emit("scale-start",new Ot(this.graphics,o,e,s))):this.emit("move-start",new kt(this.graphics,o,t.dx,t.dy))}_onGraphicMoveCallback(t){const i=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(i))this._scaleGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("scale",new Ct(this.graphics,i,this._xScale,this._yScale));else if(i===this._rotateHandleGraphic)this._rotateGraphic(i),this._updateTooltip(i,t.viewEvent),this.emit("rotate",new It(this.graphics,i,this._angleOfRotation));else{const{dx:e,dy:s}=t;this._totalDx+=e,this._totalDy+=s,this._moveGraphic(i,e,s),this._updateTooltip(i,t.viewEvent),this.emit("move",new Rt(this.graphics,i,e,s))}}_onGraphicMoveStopCallback(t){const i=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:e,_totalDx:s,_totalDy:r,_xScale:a,_yScale:h,_vertexGraphics:c,_rotateHandleGraphic:o}=this;this.refresh(),i===o?(this.view.cursor="pointer",this.emit("rotate-stop",new J(this.graphics,i,e))):c.includes(i)?this.emit("scale-stop",new K(this.graphics,i,a,h)):this.emit("move-stop",new q(this.graphics,i,s,r))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:i,_vertexGraphics:e,graphics:s,_rotateHandleGraphic:r,symbols:a,view:h}=this,c=t.graphic;if(c===r)return r.symbol=a.rotator.hover,h.cursor="pointer",void this._updateTooltip(c);if(s.includes(c)||c===i)return void(h.cursor="move");if(!e.includes(c))return void(h.cursor="pointer");this._updateTooltip(c),t.graphic.symbol=a.handles.hover;const o=h.rotation;let l,n=t.index;switch(n<8&&(o>=0&&o<45?n%=8:n=o>=45&&o<90?(n+1)%8:o>=90&&o<135?(n+2)%8:o>=135&&o<180?(n+3)%8:o>=180&&o<225?(n+4)%8:o>=225&&o<270?(n+5)%8:o>=270&&o<315?(n+6)%8:(n+7)%8),n){case 0:case 4:l="nwse-resize";break;case 1:case 5:l="ns-resize";break;case 2:case 6:l="nesw-resize";break;case 3:case 7:l="ew-resize";break;default:l="pointer"}h.cursor=l}_onGraphicPointerOutCallback(t){const{_vertexGraphics:i,_rotateHandleGraphic:e,symbols:s,view:r}=this;t.graphic===e?e.symbol=s.rotator.default:i.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default",this._updateTooltip()}_scaleGraphic(t){var N;const{_startInfo:i,_vertexGraphics:e,preserveAspectRatio:s,view:r}=this,{centerX:a,centerY:h,startX:c,startY:o}=i,{resolution:l,transform:n}=r.state,p=e.indexOf(t);p!==1&&p!==5||this._updateX(t,a),p!==3&&p!==7||this._updateY(t,h);const{x:m,y}=t.geometry,E=n[0]*m+n[2]*y+n[4],z=n[1]*m+n[3]*y+n[5],I=((N=i.graphicInfos)==null?void 0:N.map(b=>b.geometry))??[];if(s){const b=n[0]*a+n[2]*h+n[4],O=n[1]*a+n[3]*h+n[5],f=n[0]*c+n[2]*o+n[4],G=n[1]*c+n[3]*o+n[5];this._xScale=this._yScale=mt(b,O,f,G,E,z);for(const C of I){const $=I.indexOf(C);this.graphics[$].geometry=H(C,this._xScale,this._yScale,[a,h])}this._updateBackgroundGraphic()}else{const{width:b,height:O}=i;let f=m-c,G=o-y;if(p===1||p===5?f=0:p!==3&&p!==7||(G=0),f===0&&G===0)return;const C=b+(c>a?f:-1*f),$=O+(o<h?G:-1*G),tt=a+f/2,et=h+G/2;this._xScale=C/b||1,this._yScale=$/O||1,p===1||p===5?this._xScale=1:p!==3&&p!==7||(this._yScale=1);const it=(tt-a)/l,st=(et-h)/l,rt=H(i.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(rt,it,st,r,!0);const{centerX:P,centerY:A}=this._getGraphicInfo(this._backgroundGraphic),at=(P-a)/l,ot=-1*(A-h)/l;for(const X of I){const ht=I.indexOf(X),nt=H(X,this._xScale,this._yScale,[a,h]);this.graphics[ht].geometry=x(nt,at,ot,r,!0)}this._centerGraphic.geometry=new v(P,A,r.spatialReference)}}_rotateGraphic(t){var m;const{centerX:i,centerY:e,startX:s,startY:r,box:a,rotate:h}=this._startInfo,c=this.view.spatialReference,o=new v(s,r,c),l=new v(i,e,c),n=t.geometry;this._angleOfRotation=yt(o,n,l);const p=((m=this._startInfo.graphicInfos)==null?void 0:m.map(y=>y.geometry))??[];for(const y of p){const E=p.indexOf(y),z=T(y,this._angleOfRotation,l);this.graphics[E].geometry=z}this._backgroundGraphic.geometry=T(a,this._angleOfRotation,l),this._rotateHandleGraphic.geometry=T(h,this._angleOfRotation,l)}_moveGraphic(t,i,e){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view);for(const r of this.graphics)r!==t&&(r.geometry=x(r.geometry,i,e,this.view))}else if(t===this._centerGraphic){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,i,e,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=x(s.geometry,i,e,this.view)}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphics.length&&((t=this._highlightHelper)==null||t.add(this.graphics))}_setupGraphics(){const{_graphicAttributes:t,symbols:i}=this;this._centerGraphic=new M(null,i.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new M(null,i.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new M(null,i.rotatorLine,t),this._rotateHandleGraphic=new M(null,i.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let e=0;e<8;e++)this._vertexGraphics.push(new M(null,i.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((i,e)=>{const[s,r]=t[e];this._updateXY(i,s,r)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new Y({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,i,e,s]=this._getBoxBounds(R()),r=(e+t)/2,a=(s+i)/2;this._centerGraphic.geometry=new v(r,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:i}=this._vertexGraphics[1].geometry,e=i+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new v(t,e,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic||!this._rotateHandleGraphic.geometry)return;const t=this._vertexGraphics[1].geometry,i=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new Q({paths:[[t.x,t.y],[i.x,i.y]],spatialReference:this.view.spatialReference})}_updateXY(t,i,e){t.geometry=new v(i,e,this.view.spatialReference)}_updateX(t,i){const e=t.geometry.y;t.geometry=new v(i,e,this.view.spatialReference)}_updateY(t,i){const e=t.geometry.x;t.geometry=new v(e,i,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t&&t.geometry!=null&&t.geometry.type==="extent")}_getBoxBounds(t){const i=this.graphics.map(e=>e.geometry);return this._getBounds(t,i)}_getCoordinates(t){const[i,e,s,r]=this._getBoxBounds(R());if(t){const a=(i+s)/2,h=(r+e)/2;return[[i,r],[a,r],[s,r],[s,h],[s,e],[a,e],[i,e],[i,h]]}return[[i,r],[s,r],[s,e],[i,e]]}_updateTooltip(t,i){if(this._tooltip==null)return;if(!t)return void this._tooltip.clear();const{_backgroundGraphic:e,graphics:s,_vertexGraphics:r,_rotateHandleGraphic:a}=this;t===a?this._updateRotateTooltip():r.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===e)&&this._updateMoveTooltip(i)}_updateRotateTooltip(){this._tooltip!=null&&(this._tooltip.info=new wt({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{_tooltip:t,_xScale:i,_yScale:e,tooltipOptions:s,view:r}=this;if(t==null)return;const a=r.spatialReference,h=this._getCoordinates(),c=new v(h[0][0],h[0][1],a),o=new v(h[1][0],h[1][1],a),l=new v(h[2][0],h[2][1],a),n=B(c,o),p=B(o,l);if(n==null||p==null)return;const m=Math.abs(i),y=Math.abs(e);t.info=new bt({tooltipOptions:s,xScale:m,yScale:y,xSize:n,ySize:p})}_updateMoveTooltip(t){const{_tooltip:i,tooltipOptions:e,view:s}=this;if(i==null)return;const r=new St({tooltipOptions:e});if(t){const{x:a,y:h}=t.origin,c=s.toMap(t),o=s.toMap({x:a,y:h}),l=B(o,c);r.distance=l??vt}i.info=r}};d([g()],u.prototype,"_tooltip",void 0),d([g({readOnly:!0})],u.prototype,"type",void 0),d([g()],u.prototype,"callbacks",void 0),d([g()],u.prototype,"enableMovement",void 0),d([g()],u.prototype,"enableRotation",void 0),d([g()],u.prototype,"enableScaling",void 0),d([g()],u.prototype,"graphics",void 0),d([g()],u.prototype,"highlightsEnabled",void 0),d([g()],u.prototype,"layer",void 0),d([g()],u.prototype,"preserveAspectRatio",void 0),d([g()],u.prototype,"showCenterGraphic",void 0),d([g({readOnly:!0})],u.prototype,"state",null),d([g({value:w,cast(t){const{centerIndicator:i=w.centerIndicator,fill:e=w.fill,handles:s=w.handles,rotator:r=w.rotator,rotatorLine:a=w.rotatorLine}=t||{};return{centerIndicator:i,fill:e,handles:s,rotator:r,rotatorLine:a}}})],u.prototype,"symbols",void 0),d([g({type:W})],u.prototype,"tooltipOptions",void 0),d([g({constructOnly:!0})],u.prototype,"view",void 0),u=d([gt("esri.views.draw.support.Box")],u);const jt=u;export{jt as default};
