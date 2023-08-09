import{eg as f,cd as A,af as S,aK as E,er as T,aH as F,es as w,aL as L,ah as b,et as U,bC as D,eu as z,ev as P,aT as k,e4 as V,aP as x,bN as u,ew as I,aS as K,ex as N,ey as O,by as j,av as q,ai as v,aj as m,ez as B,eA as J,aR as Q,al as W}from"./index-4e7cdbf0.js";import{m as C}from"./quantityFormatUtils-ff29e62c.js";import{u as X}from"./SnappingVisualizer2D-de6f0097.js";import{i as Y}from"./drawUtils-4001d27a.js";import{h as Z,P as tt}from"./GraphicMover-aa6dda46.js";import{h as et}from"./settings-76e285f6.js";import{_ as it}from"./EditGeometryOperations-642c6092.js";import{e as st}from"./SnappingContext-06ffe599.js";import{m as R,g as ot,d as rt}from"./automaticLengthMeasurementUtils-1eb9d49a.js";import{r as nt,n as at}from"./TranslateTooltipInfos-f23baf92.js";import{u as ht}from"./automaticAreaMeasurementUtils-6801e194.js";import"./unitFormatUtils-b0223a02.js";import"./GraphicManipulator-d4dca446.js";import"./drapedUtils-482b56eb.js";import"./PointSnappingHint-76d2669d.js";import"./euclideanLengthMeasurementUtils-5fd8aab0.js";import"./measurementUtils-a6d314a6.js";import"./geometryEngine-7f801ff7.js";import"./geometryEngineBase-3a3551e4.js";import"./hydrated-7c582448.js";import"./euclideanAreaMeasurementUtils-2c8d453a.js";class pt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-start"}}class ct{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape"}}class lt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-stop"}}class dt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class vt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class mt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class yt{constructor(e){this.added=e,this.type="vertex-select"}}class _t{constructor(e){this.removed=e,this.type="vertex-deselect"}}class gt{constructor(e,i,s,o){this.added=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-add"}}class ut{constructor(e,i,s,o){this.removed=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-remove"}}const y=et.reshapeGraphics,M={vertices:{default:new f({style:"circle",size:y.vertex.size,color:y.vertex.color,outline:{color:y.vertex.outlineColor,width:1}}),hover:new f({style:"circle",size:y.vertex.hoverSize,color:y.vertex.hoverColor,outline:{color:y.vertex.hoverOutlineColor,width:1}}),selected:new f({style:"circle",size:y.selected.size,color:y.selected.color,outline:{color:y.selected.outlineColor,width:1}})},midpoints:{default:new f({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}}),hover:new f({style:"circle",size:y.midpoint.size,color:y.midpoint.color,outline:{color:y.midpoint.outlineColor,width:1}})}};let d=class extends A.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._handles=new S,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingTask=null,this._stagedVertex=null,this._tooltip=null,this._viewHandles=new S,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new E,this.midpointSymbol=new f({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=[],this.snappingManager=null,this.tooltipOptions=new T,this.type="reshape",this.vertexGraphics=new E,this.view=null}initialize(){const t=this.view;this._highlightHelper=new Z({view:t}),this._setup(),this._handles.add([F(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;B(i,e),this._viewHandles.add(i.on("key-down",s=>this._keyDownHandler(s),J.TOOL))},{once:!0,initial:!0}),w(()=>this.graphic,()=>this.refresh()),w(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),w(()=>this.enableMidpoints,()=>this.refresh()),L(()=>this.tooltipOptions.enabled,e=>{this._tooltip=e?new rt({view:this.view}):b(this._tooltip)},Q)])}destroy(){var t;this._reset(),(t=this._mover)==null||t.destroy(),this._mover=null,this._tooltip=b(this._tooltip),this._handles=b(this._handles),this._viewHandles=b(this._viewHandles)}set highlightsEnabled(t){var e;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphic")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{midpoints:e=M.midpoints,vertices:i=M.vertices}=t||{};this._set("symbols",{midpoints:e,vertices:i})}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_setup(){const{graphic:t,layer:e}=this;if(!e||!t||t.geometry==null)return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&U(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphic&&((t=this._highlightHelper)==null||t.add(this.graphic))}_setUpGeometryHelper(){const t=this.graphic.geometry;if(t==null||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new D({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=it.fromGeometry(e,z.Local)}_saveSnappingContextForHandle(t,e){var i;this._snappingGraphicsLayer=new P({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer),this._snappingContext=new st({editGeometryOperations:this._editGeometryOperations,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((i=e.viewEvent)==null?void 0:i.pointerType)||"mouse",excludeFeature:this.graphic,visualizer:new X(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){var t;this._clearSelection(),(t=this._highlightHelper)==null||t.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var t;this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&((t=this.view)!=null&&t.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=b(this._editGeometryOperations),this._snappingTask=k(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this._set("selectedVertices",[])}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_getCoordinatesForUI(t){const e=V(t.clone());if(t.type==="polygon")for(const i of e){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return e}_setupGraphics(){const t=this.graphic.geometry;if(t!=null&&(t.type==="polyline"||t.type==="polygon")){const e=this._getCoordinatesForUI(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:s}}=this,o=[];return t==null||t.forEach((n,r)=>{n.forEach((h,p)=>{var l;const[a,c]=h;o.push(new x({geometry:new u({x:a,y:c,spatialReference:s}),symbol:(l=i==null?void 0:i.vertices)==null?void 0:l.default,attributes:{...e,pathIndex:r,pointIndex:p}}))})}),o}_createMidpointGraphics(t){const{_graphicAttributes:e,symbols:i,view:{spatialReference:s}}=this,o=[];return t==null||t.forEach((n,r)=>{n.forEach((h,p)=>{var _;const[a,c]=h,l=n[p+1]?p+1:0;if(((_=this.graphic.geometry)==null?void 0:_.type)==="polygon"||l!==0){const[g,G]=n[l],[H,$]=I([a,c],[g,G]);o.push(new x({geometry:new u({x:H,y:$,spatialReference:s}),symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:p,pointIndexEnd:l}}))}})}),o}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const s=[];for(let o=0;o<e.length;o++){if(i===o)continue;const n=e[i],r=e[o];n.x===r.x&&n.y===r.y&&s.push(o)}t[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:s,view:o}=this,n=s.concat(i).items;t&&n.push(e),this._mover=new tt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:n,view:o,callbacks:{onGraphicClick:r=>this._onGraphicClickCallback(r),onGraphicMoveStart:r=>this._onGraphicMoveStartCallback(r),onGraphicMove:r=>this._onGraphicMoveCallback(r),onGraphicMoveStop:r=>this._onGraphicMoveStopCallback(r),onGraphicPointerOver:r=>this._onGraphicPointerOverCallback(r),onGraphicPointerOut:r=>this._onGraphicPointerOutCallback(r)}})}_onGraphicClickCallback(t){t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const i=this.graphic.clone(),s=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],i,s)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:s}=t,o=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:s}=t;if(s===this.graphic){const{geometry:o}=s;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(o!=null&&o.type==="point"&&this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const o=this.graphic.clone(),n=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],o,n)}this._addToSelection(s)}this._setUpOperation(t),this._emitReshapeStartEvent(s),this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)})}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t;e.totalDx+=i,e.totalDy+=s;const{operationType:n}=e,{geometry:r}=o;if(r!=null){if(n!=="move")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)});else if(r.type==="point")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)});else if(r.type==="polyline"||r.type==="polygon"){const h=this._getCoordinatesForUI(r);this._updateVertexGraphicLocations(h),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)}}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t,{operationType:n}=e;e.totalDx+=i,e.totalDy+=s,this._onHandleMove(o,i,s,t,()=>n==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(o)),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const e=this.view.spatialReference;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes,[n,r]=t[s][o];i.geometry=new u({x:n,y:r,spatialReference:e})}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=e.attributes,[n,r]=t[i][s],[h,p]=t[i][o],[a,c]=I([n,r],[h,p]);e.geometry=new u({x:a,y:c,spatialReference:this.view.spatialReference})}}_getIndicesForVertexGraphic({attributes:t}){return[(t==null?void 0:t.pathIndex)||0,(t==null?void 0:t.pointIndex)||0]}_getVertexFromEditGeometry(t){const[e,i]=this._getIndicesForVertexGraphic(t);return this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,s,o){k(this._snappingTask);const n=this._snappingContext;if(!n)return;const r=t.geometry,h=s.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!h){const p=this.snappingManager;this._stagedVertex=p.update({point:r,context:n}),this._syncGeometryAfterVertexMove(t,new u(this._stagedVertex),e,i,h),o(),this._snappingTask=K(async a=>{const c=await p.snap({point:r,context:n,signal:a});c.valid&&(this._stagedVertex=c.apply(),this._syncGeometryAfterVertexMove(t,new u(this._stagedVertex),e,i,h),o())})}else{const p=this._stagedVertex!=null?new u(this._stagedVertex):r;this._syncGeometryAfterVertexMove(t,p,e,i,h),o()}}async _syncGeometryAfterVertexMove(t,e,i,s,o=!1){const n=this._editGeometryOperations.data.geometry;if(n.type==="point")t.geometry=e;else if(n.type==="mesh")t.geometry=n.centerAt(e),t.notifyGeometryChanged();else{const{x:r,y:h}=e,[p,a]=this._getIndicesForVertexGraphic(t);let c=V(n);const l=c[p].length-1;c[p][a]=[r,h],n.type==="polygon"&&(a===0?c[p][l]=[r,h]:a===l&&(c[p][0]=[r,h])),this._isVertex(t)&&(c=this._moveRelatedCoordinates(c,t,r,h),c=this._moveSelectedHandleCoordinates(c,t,i,s,n.type==="polygon"),this._updateMidpointGraphicLocations(c)),this.graphic.geometry=n.clone();const _=this._getVertexFromEditGeometry(t),g=r-_.pos[0],G=h-_.pos[1];this._editGeometryOperations.moveVertices([_],g,G,0),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i,s){const{relatedGraphicIndices:o}=e.attributes;for(const n of o){const r=this.vertexGraphics.at(n),{pathIndex:h,pointIndex:p}=r.attributes;t[h][p]=[i,s],r.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,s,o){for(const n of this.selectedVertices)if(n!==e){const{pathIndex:r,pointIndex:h,relatedGraphicIndices:p}=n.attributes,a=Y(n.geometry,i,s,this.view),c=t[r].length-1;t[r][h]=[a.x,a.y],n.geometry=a,o&&(h===0?t[r][c]=[a.x,a.y]:h===c&&(t[r][0]=[a.x,a.y]));for(const l of p){const _=this.vertexGraphics.at(l),{pathIndex:g,pointIndex:G}=_.attributes;t[g][G]=[a.x,a.y],_.geometry=a}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic,i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,s=i.geometry;if(s==null||s.type!=="polygon"&&s.type!=="polyline")return[];const o=s.clone(),n=[],{pathIndex:r,pointIndexStart:h,pointIndexEnd:p}=t.attributes,{x:a,y:c}=t.geometry,l=p===0?h+1:p,_=V(o);return _[r].splice(l,0,[a,c]),t.attributes={...e,pathIndex:r,pointIndex:l,relatedGraphicIndices:[]},n.push({coordinates:_[r][l],componentIndex:r,vertexIndex:l}),this.graphic.geometry=o,n}_addToSelection(t){t instanceof x&&(t=[t]);for(const e of t)e.symbol=this.symbols.vertices.selected;this._set("selectedVertices",this.selectedVertices.concat(t)),this._emitSelectEvent(t)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,s=e?i.hover:i.default;t instanceof x&&(t=[t]);for(const o of t)this.selectedVertices.splice(this.selectedVertices.indexOf(o),1),this._set("selectedVertices",this.selectedVertices),o.set("symbol",s);this._emitDeselectEvent(t)}_clearSelection(){if(this.selectedVertices.length){const t=this.selectedVertices;for(const e of this.selectedVertices)e.set("symbol",this.symbols.vertices.default);this._set("selectedVertices",[]),this._emitDeselectEvent(t)}}_keyDownHandler(t){N.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(e==null||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;t instanceof x&&(t=[t]);const i=this.graphic.clone(),s=e.clone();let o=V(s);const n=[];t instanceof x&&(t=[t]);for(const r of t){const{x:h,y:p}=r.geometry;for(let a=0;a<o.length;a++){const c=o[a];for(let l=0;l<c.length;l++){const[_,g]=c[l];h===_&&p===g&&(n.push({coordinates:o[a][l],componentIndex:a,vertexIndex:l}),o[a].splice(Number(l),1))}}}if(s.type==="polygon")o=o.filter(r=>{if(r.length<2)return!1;const[h,p]=r[0],[a,c]=r[r.length-1];return(r.length!==2||h!==a||p!==c)&&(h===a&&p===c||r.push(r[0]),!0)}),s.rings=o;else{for(const r of o)r.length===1&&o.splice(o.indexOf(r),1);s.paths=o}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(t,i,n)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){this._tooltip!=null&&(t?t===this.graphic?this._updateMoveGraphicTooltip(e):this._updateMoveVertexTooltip(e):this._tooltip.clear())}_updateMoveGraphicTooltip(t){const{_tooltip:e,tooltipOptions:i,view:s}=this;if(e==null)return;const o=new nt({tooltipOptions:i});if(t){const{x:n,y:r}=t.origin,h=s.toMap(t),p=s.toMap(O(n,r)),a=R(p,h);o.distance=a??C}e.info=o}_updateMoveVertexTooltip(t){const{_tooltip:e,graphic:{geometry:i},tooltipOptions:s,view:o}=this;if(e==null)return;const n=new at({tooltipOptions:s});if(i!=null&&(i.type==="polygon"?n.area=ht(i):i.type==="polyline"&&(n.totalLength=ot(i))),t){const{x:r,y:h}=t.origin,p=o.toMap(t),a=o.toMap(O(r,h)),c=R(a,p);n.distance=c??C}e.info=n}_emitMoveStartEvent(t,e){const i=new dt(this.graphic,t,e);this.emit("move-start",i),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(i)}_emitMoveEvent(t,e){const i=new vt(this.graphic,t,e);this.emit("move",i),this.callbacks.onMove&&this.callbacks.onMove(i)}_emitMoveStopEvent(){const t=this._activeOperationInfo;if(!t)return;const{totalDx:e,totalDy:i}=t,s=new mt(this.graphic,e,i);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitReshapeStartEvent(t){const e=new pt(this.graphic,t,this.selectedVertices);this.emit("reshape-start",e),this.callbacks.onReshapeStart&&this.callbacks.onReshapeStart(e)}_emitReshapeEvent(t){const e=new ct(this.graphic,t,this.selectedVertices);this.emit("reshape",e),this.callbacks.onReshape&&this.callbacks.onReshape(e)}_emitReshapeStopEvent(t){const e=new lt(this.graphic,t,this.selectedVertices);this.emit("reshape-stop",e),this.callbacks.onReshapeStop&&this.callbacks.onReshapeStop(e)}_emitSelectEvent(t){const e=new yt(t);this.emit("select",e),this.callbacks.onVertexSelect&&this.callbacks.onVertexSelect(e)}_emitDeselectEvent(t){const e=new _t(t);this.emit("deselect",e),this.callbacks.onVertexDeselect&&this.callbacks.onVertexDeselect(e)}_emitVertexAddEvent(t,e,i){const s=new gt(t,this.graphic,e,i);this.emit("vertex-add",s),this.callbacks.onVertexAdd&&this.callbacks.onVertexAdd(s)}_emitVertexRemoveEvent(t,e,i){const s=new ut(t,this.graphic,e,i);this.emit("vertex-remove",s),this.callbacks.onVertexRemove&&this.callbacks.onVertexRemove(s)}_logGeometryTypeError(){j.getLogger(this).error(new q("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};v([m()],d.prototype,"_tooltip",void 0),v([m()],d.prototype,"callbacks",void 0),v([m()],d.prototype,"enableMidpoints",void 0),v([m()],d.prototype,"enableMovement",void 0),v([m()],d.prototype,"enableVertices",void 0),v([m()],d.prototype,"graphic",void 0),v([m({value:!0})],d.prototype,"highlightsEnabled",null),v([m()],d.prototype,"layer",void 0),v([m({readOnly:!0})],d.prototype,"midpointGraphics",void 0),v([m()],d.prototype,"midpointSymbol",void 0),v([m({readOnly:!0})],d.prototype,"selectedVertices",void 0),v([m()],d.prototype,"snappingManager",void 0),v([m({readOnly:!0})],d.prototype,"state",null),v([m({value:M})],d.prototype,"symbols",null),v([m({type:T})],d.prototype,"tooltipOptions",void 0),v([m({readOnly:!0})],d.prototype,"type",void 0),v([m({readOnly:!0})],d.prototype,"vertexGraphics",void 0),v([m()],d.prototype,"view",void 0),d=v([W("esri.views.draw.support.Reshape")],d);const Dt=d;export{Dt as default};
