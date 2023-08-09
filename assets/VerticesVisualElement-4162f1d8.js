import{nC as fe,iG as ge,n1 as ye,cq as u,cr as le,nD as L,kX as p,gA as A,kN as ce,nE as V,eb as j,nF as w,kZ as C,nG as Oe,k$ as z,d0 as de,l0 as N,iH as U,nH as De,nI as ve,nJ as be,nK as Re,nL as xe,c_ as T,d2 as W,nM as R,ds as we,aL as Ee,iC as Ge,kH as Ae,en as Ce,n2 as Y,kF as I,kE as Pe,kD as P,ep as k,i3 as he,hD as Se,hR as B,cX as E,nN as q,nO as ue,hU as _e,kM as $e,em as m,kW as F,nP as H,b1 as Z,nQ as Me,nR as je,dp as ze,nS as Te,gT as X,nT as Ve,dZ as Q,hI as Ie,dt as Fe,j_ as J,nU as He}from"./index-4e7cdbf0.js";import{i as K}from"./analysisThemeUtils-b70cecce.js";import{t as pe,P as Le}from"./RightAngleQuadVisualElement-d3280488.js";import{c as Ne,y as ee}from"./PointVisualElement-4c93780d.js";import{r as We}from"./SnappingContext-06ffe599.js";import{b as ke}from"./LineVisualElement-d2c1133a.js";import{v as te}from"./manipulatorUtils-a300321b.js";function nt(a){let e,t,r=[],i=!1;function n(...s){return i&&e===this&&Ue(s,r)||(t=a.apply(this,s),e=this,r=s,i=!0),t}return n}function Ue(a,e){if(a.length!==e.length)return!1;for(let t=0;t<a.length;++t)if(a[t]!==e[t])return!1;return!0}class Ye extends pe{constructor(e){super(e),this._ray=ye(),this._isWorldDown=!1,this._start=u(),this._end=le(1,0,0),this._width=1,this._color=L(1,0,1,1),this._polygonOffset=!1,this._writeDepthEnabled=!0,this._innerWidth=0,this._innerColor=L(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._stipplePreferContinuous=!0,this._falloff=0,this._extensionType=f.LINE,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=p.OccludeAndTransparent,this._fadedExtensions=se,this._laserline=new Ne({view:this.view}),this.applyProps(e)}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyExternalResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}updateVisibility(e){super.updateVisibility(e),this._laserline.visible=e}onAttachedChange(){this._laserline.attached=this._laserlineAttached}setStartEndFromWorldDownAtLocation(e){this._isWorldDown=!0,A(this._start,e),this.view.renderCoordsHelper.worldUpAtPosition(e,this._end),ce(this._end,e,this._end),V(this._start,this._end,this._ray),this._updateGeometry()}get start(){return this._start}set start(e){this._isWorldDown=!1,j(this._start,e)||(A(this._start,e),V(this._start,this._end,this._ray),this._updateGeometry())}get end(){return this._end}set end(e){this._isWorldDown=!1,j(this._end,e)||(A(this._end,e),V(this._start,this._end,this._ray),this._updateGeometry())}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){w(e,this._color)||(C(this._color,e),this._updateMaterial())}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){e!==this._polygonOffset&&(this._polygonOffset=e,this._updateMaterial())}get writeDepthEnabled(){return this._writeDepthEnabled}set writeDepthEnabled(e){this._writeDepthEnabled!==e&&(this._writeDepthEnabled=e,this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){w(e,this._innerColor)||(C(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=e!=null!=(this._stipplePattern!=null);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){e!=null&&this._stippleOffColor!=null&&w(e,this._stippleOffColor)||(this._stippleOffColor=e!=null?Oe(e):null,this._updateMaterial())}get stipplePreferContinuous(){return this._stipplePreferContinuous}set stipplePreferContinuous(e){e!==this._stipplePreferContinuous&&(this._stipplePreferContinuous=e,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get extensionType(){return this._extensionType}set extensionType(e){e!==this._extensionType&&(this._extensionType=e,this.recreateGeometry())}get _laserlineAttached(){return this._laserlineEnabled&&this._laserlineStyle!=null&&this.attached&&!this.isDraped}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,e!=null&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===p.OccludeAndTransparentStencil?p.OccludeAndTransparent:this._renderOccluded}get fadedExtensions(){return this._fadedExtensions}set fadedExtensions(e){this._fadedExtensions=e??se,this.recreateGeometry()}_updateMaterial(){var t,r;const{materialParameters:e}=this;(t=this.object3dResources.resources)==null||t.material.setParameters(e),(r=this.drapedResources.resources)==null||r.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:this._stipplePreferContinuous,innerWidth:this._innerWidth,innerColor:this._innerColor,falloff:this._falloff,hasPolygonOffset:this._polygonOffset,renderOccluded:this._normalizedRenderOccluded,writeDepth:this._writeDepthEnabled}}_createObject3DResources(e){const t=new z(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyExternalResources(e){e.geometries=[],e.material.dispose()}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const i=this._createGeometry(e);r.push(i),t.addGeometry(i),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new z(this.materialParameters);return{material:e,geometries:[this._createDrapedGeometry(e)]}}_recreateDrapedGeometry(e){e.geometries=[this._createDrapedGeometry(e.material)]}_createDrapedGeometry(e){const t=this._createGeometry(e);return this._updateVerticesDraped(t),new de(t)}_createGeometry(e){const t=this.extensionType===f.FADED,r=t?[u(),u(),u(),u()]:[u(),u()];return N(e,r,null,t?[1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0]:null)}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=this.object3dResources.object;e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this._lineSegment;this._updateVertexAttributesObject3D(e,t),this._laserline.intersectsLine=t}_updateVerticesDraped(e){this._updateVertexAttributesDraped(e,this._lineSegment)}get _lineSegment(){return this._extensionType===f.FADED?this._updateLineSegmentFinite(re):this._updateLineSegmentInfinite(this._extensionType,re)}_updateLineSegmentFinite(e){return U(this._start,this._end,e)}_updateLineSegmentInfinite(e,t){const r=this.view.state.camera;switch(De(this._ray,O),e){case f.LINE:O.c0=-Number.MAX_VALUE;break;case f.RAY:case f.GROUND_RAY:{const s=this._ray.origin,l=this.view.elevationProvider.getElevation(s[0],s[1],s[2],this.view.renderCoordsHelper.spatialReference,"ground")??0,o=this.view.renderCoordsHelper.getAltitude(s);this._isWorldDown&&o<l&&ve(O.ray.direction,O.ray.direction),this._extensionType===f.GROUND_RAY&&l!=null&&(O.c1=Math.abs(o-l));break}}if(!be(r.frustum,O))return this._updateLineSegmentFinite(t);const i=Re(O,v),n=xe(O,Be);return U(i,n,t)}_updateVertexAttributesObject3D(e,t){var n;const r=(n=e.geometries[0].getMutableAttribute(T.POSITION))==null?void 0:n.data;if(!r)return;let i=0;for(const s of this._lineVertices(t))r[i++]=s[0],r[i++]=s[1],r[i++]=s[2];e.geometryVertexAttrsUpdated(e.geometries[0])}_updateVertexAttributesDraped(e,t){var n;const r=(n=e.getMutableAttribute(T.POSITION))==null?void 0:n.data;if(!r)return;let i=0;for(const s of this._lineVertices(t))r[i++]=s[0],r[i++]=s[1],r[i++]=W;e.invalidateBoundingInfo()}*_lineVertices(e){this.extensionType===f.FADED?(yield R(e,-this.fadedExtensions.start,v),yield R(e,0,v),yield R(e,1,v),yield R(e,1+this.fadedExtensions.end,v)):(yield R(e,0,v),yield R(e,1,v))}}const O=fe(),v=u(),Be=u(),re=ge();var f;(function(a){a[a.LINE=0]="LINE",a[a.RAY=1]="RAY",a[a.GROUND_RAY=2]="GROUND_RAY",a[a.FADED=3]="FADED"})(f||(f={}));const ie=1/3,se={start:ie,end:ie};let qe=class extends pe{constructor(e){super(e),this._location=u(),this._direction=le(1,0,0),this._width=1,this._offset=1,this._length=18,this._color=L(1,0,1,1),this._renderOccluded=p.OccludeAndTransparent,this.applyProps(e)}createObject3DResourceFactory(e){return{view:e,createResources:t=>this._createObject3DResources(t),destroyResources:t=>this._destroyObject3DResources(t),recreateGeometry:(t,r)=>this._recreateObject3DGeometry(t,r),cameraChanged:()=>this._updateGeometry()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:t=>this._destroyDrapedResources(t),recreateGeometry:t=>this._recreateDrapedGeometry(t)}}get location(){return this._location}set location(e){j(this._location,e)||(A(this._location,e),this._updateGeometry())}get direction(){return this._direction}set direction(e){j(this._direction,e)||(A(this._direction,e),this._updateGeometry())}setDirectionFromPoints(e,t){we(this._direction,ce(this._direction,t,e)),this._updateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get offset(){return this._offset}set offset(e){e!==this._offset&&(this._offset=e,this._updateGeometry())}get length(){return this._length}set length(e){e!==this._length&&(this._length=e,this._updateGeometry())}get color(){return this._color}set color(e){w(e,this._color)||(C(this._color,e),this._updateMaterial())}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}_createObject3DResources(e){const t=new z(this.materialParameters),r=new Array;return this._createObject3DGeometry(t,e,r),{material:t,geometries:r,forEach:i=>{i(t),r.forEach(i)}}}_destroyObject3DResources(e){e.geometries.length=0,e.material.dispose()}_recreateObject3DGeometry(e,t){e.geometries.length=0,this._createObject3DGeometry(e.material,t,e.geometries)}_createObject3DGeometry(e,t,r){const[i,n]=this._createGeometries(e);t.addGeometry(i),t.addGeometry(n),r.push(i),r.push(n),this._updateVerticesObject3D(t)}_createDrapedResources(){const e=new z(this.materialParameters),t=Ee(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()});return{material:e,geometries:this._createDrapedGeometry(e),pixelRatioHandle:t}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[],e.material.dispose()}_recreateDrapedGeometry(e){e.geometries=this._createDrapedGeometry(e.material)}_createDrapedGeometry(e){const t=this._createGeometries(e);return this._updateVerticesDraped(t),t.map(r=>new de(r))}_createGeometries(e){return[N(e,[u(),u()]),N(e,[u(),u()])]}_updateMaterial(){var t,r;const{materialParameters:e}=this;(t=this.object3dResources.resources)==null||t.material.setParameters(e),(r=this.drapedResources.resources)==null||r.material.setParameters(e)}get materialParameters(){return{width:this._width,color:this._color,renderOccluded:this._renderOccluded}}_updateGeometry(){if(this.isDraped)this.drapedResources.recreateGeometry();else{const e=this.object3dResources.object;e&&this._updateVerticesObject3D(e)}}_updateVerticesObject3D(e){const t=this.view.state.camera;t.projectToScreen(this.location,$),Ge(g,this.location,this.direction),t.projectToScreen(g,x),Ae(x,Ce(x,x,$)),this._updateVertexAttributesObject3D(t,e,0,$,x,1),this._updateVertexAttributesObject3D(t,e,1,$,x,-1)}_updateVertexAttributesObject3D(e,t,r,i,n,s){var h;const l=t.geometries[r],o=(h=l.getMutableAttribute(T.POSITION))==null?void 0:h.data;if(!o)return;const{start:c,end:d}=this._computeStartEnd(n,i,s,this.offset,this.width,this.length);e.unprojectFromScreen(Y(c),g),o[0]=g[0],o[1]=g[1],o[2]=g[2],e.unprojectFromScreen(Y(d),g),o[3]=g[0],o[4]=g[1],o[5]=g[2],t.geometryVertexAttrsUpdated(l)}_updateVerticesDraped(e){const{view:{basemapTerrain:{overlayManager:t},state:{contentPixelRatio:r}}}=this,{location:i,width:n,length:s,offset:l}=this,o=Ze;o.spatialReference=t.renderer.spatialReference,o.x=i[0],o.y=i[1];const c=t.overlayPixelSizeInMapUnits(o)*r,d=n*c,h=s*c,y=l*c;this._updateVertexAttributesDraped(e[0],d,h,y,-1),this._updateVertexAttributesDraped(e[1],d,h,y,1)}_updateVertexAttributesDraped(e,t,r,i,n){var h;const s=(h=e.getMutableAttribute(T.POSITION))==null?void 0:h.data;if(!s)return;const{location:l,direction:o}=this,{start:c,end:d}=this._computeStartEnd(o,l,n,i,t,r);s[0]=c[0],s[1]=c[1],s[2]=W,s[3]=d[0],s[4]=d[1],s[5]=W,e.invalidateBoundingInfo()}_computeStartEnd(e,t,r,i,n,s){const l=I(ne,Pe(ne,e[1]*r,e[0]*-r),i+n/2),o=P(S,P(S,P(S,t,I(S,e,s/2)),l),l);return{start:o,end:P(ae,o,I(ae,e,-s))}}};const g=u(),ne=k(),S=k(),ae=k(),$=he(),x=he(),Ze=Se(0,0,void 0,null);class ot extends We{sortUniqueHints(e){return e.sort((t,r)=>(r instanceof B?r.length:0)-(t instanceof B?t.length:0))}visualizeIntersectionPoint(e,t){const{spatialReference:r,view:i}=t,n=G();return E(new ee({view:i,primitive:"circle",geometry:q(e.intersectionPoint,r),elevationInfo:e.isDraped?ue:_e,size:20,outlineSize:2,color:n.intersectionPointColor,outlineColor:n.intersectionPointOutlineColor,pixelSnappingEnabled:!1}))}visualizePoint(e,t){const{view:r,spatialReference:i}=t,n=G(),s=D(e.point,e.domain,t);return E(new ee({view:r,primitive:"circle",geometry:q(s,i),elevationInfo:M(e,t),size:20,outlineSize:2,color:n.pointColor,outlineColor:n.pointOutlineColor,pixelSnappingEnabled:!1}))}visualizeLine(e,t){const{view:r,spatialReference:i}=t,n=G(),s=D(e.lineStart,e.domain,t),l=D(e.lineEnd,e.domain,t);return E(this._createLineSegmentHint(e.type,s,l,i,M(e,t),r,n,e.isDraped,e.fadeLeft,e.fadeRight))}visualizeParallelSign(e,t){const{view:r,spatialReference:i}=t,n=G(),{isDraped:s}=e,l=M(e,t),o=D(e.lineStart,e.domain,t),c=D(e.lineEnd,e.domain,t),d=b(o,i,l,r,s),h=b(c,i,l,r,s),y=$e(h,d,h,.5),_=new qe({view:r,attached:!1,offset:m.parallelLineHintOffset,length:m.parallelLineHintLength,width:m.parallelLineHintWidth,color:n.parallelSignColor,location:y,renderOccluded:s?p.OccludeAndTransparent:p.Opaque,isDraped:s,renderGroup:F.SnappingHint});return _.setDirectionFromPoints(d,y),_.attached=!0,E(_)}visualizeRightAngleQuad(e,t){const{view:r,spatialReference:i}=t,n=G(),s=M(e,t),{isDraped:l}=e,o=D(e.previousVertex,e.domain,t),c=D(e.centerVertex,e.domain,t),d=D(e.nextVertex,e.domain,t),h=b(o,i,s,r,l),y=b(c,i,s,r,l),_=b(d,i,s,r,l);return E(new Le({view:r,attached:!0,color:l?n.rightAngleColorDraped:n.rightAngleColor,renderOccluded:l?p.OccludeAndTransparent:p.Transparent,outlineRenderOccluded:l?p.OccludeAndTransparent:p.Opaque,outlineColor:n.rightAngleOutlineColor,outlineSize:m.rightAngleHintOutlineSize,size:m.rightAngleHintSize,isDraped:l,geometry:{previous:h,center:y,next:_},renderGroup:F.SnappingHint}))}_createLineSegmentHint(e,t,r,i,n,s,l,o=!1,c=!0,d=!0){const h=b(t,i,n,s,o),y=b(r,i,n,s,o),_=new Ye({view:s,extensionType:f.FADED,start:h,end:y,isDraped:o,color:l.lineColor,renderOccluded:o?p.OccludeAndTransparent:p.Opaque,renderGroup:F.SnappingHint});switch(e){case H.TARGET:_.width=m.lineHintWidthTarget,_.fadedExtensions={start:0,end:m.lineHintFadedExtensions};break;case H.REFERENCE_EXTENSION:_.width=m.lineHintWidthReference,_.fadedExtensions={start:0,end:0};break;case H.REFERENCE:_.width=m.lineHintWidthReference,_.fadedExtensions={start:c?m.lineHintFadedExtensions:0,end:d?m.lineHintFadedExtensions:0}}return _.attached=!0,_}}function G(a){const e=Z.toUnitRGBA(K()),t=[0,0,0,0];return{intersectionPointColor:t,intersectionPointOutlineColor:e,pointColor:t,pointOutlineColor:e,lineColor:e,lineOutlineColor:void 0,parallelSignColor:e,rightAngleColor:e,rightAngleColorDraped:Z.toUnitRGBA(K(.5)),rightAngleOutlineColor:e}}function D(a,e,t){const r=me(e,t);return r==null?a:Me(a[0],a[1],r)}function M(a,e){return me(a.domain,e)!=null?e.selfSnappingZ.elevationInfo:a.isDraped?ue:_e}function me(a,{selfSnappingZ:e}){return a===je.SELF&&e!=null?e.value:null}function b(a,e,t,r,i,n=u()){if(i){const s=r.basemapTerrain.overlayManager.renderer.spatialReference;ze(a,e,n,s)}else Te(a,e,t,r,n);return n}function Xe(a,e,t,r,i){const n=X(3*a.length),s=X(n.length);a.forEach((c,d)=>{n[3*d]=c[0],n[3*d+1]=c[1],n[3*d+2]=c.length>2?c[2]:0});const l=Ve(n,e,0,s,0,n,0,n.length/3,t,r,i),o=l!=null;return{numVertices:a.length,position:n,mapPositions:s,projectionSuccess:o,sampledElevation:l}}class lt extends ke{constructor(e){super(e),this.view=null,this._renderOccluded=p.OccludeAndTransparent,this._vertices=null,this._spatialReference=null,this._color=Q([1,127/255,0,1]),this._size=11,this._outlineColor=Q([0,0,0,.5]),this._outlineSize=1,this._elevationInfo=null,this.applyProps(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial(),this._updateOutlineMaterial())}get vertices(){return this._vertices}set vertices(e){this._vertices=e,this.recreateGeometry()}get spatialReference(){return this._spatialReference}set spatialReference(e){this._spatialReference=e,this.recreateGeometry()}get color(){return this._color}set color(e){w(e,this._color)||(C(this._color,e),this._updateMaterial())}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){w(e,this._outlineColor)||(C(this._outlineColor,e),this._updateOutlineMaterial())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateOutlineMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get _vertexMaterialParameters(){return{color:this._color,transparent:this._color[3]<1,screenSizeScale:this.size,renderOccluded:this._renderOccluded}}get _vertexOutlineMaterialParameters(){return{color:this._outlineColor,transparent:this._outlineColor[3]<1,screenSizeScale:this.size+2*this.outlineSize,renderOccluded:this._renderOccluded}}_updateMaterial(){this.attached&&this._vertexMaterial.setParameters(this._vertexMaterialParameters)}_updateOutlineMaterial(){this.attached&&this._vertexOutlineMaterial.setParameters(this._vertexOutlineMaterialParameters)}_createRenderGeometries(){const e=this.vertices;if(e==null||e.length===0)return[];const t=.5,r=.5,i=Xe(e,this.spatialReference,this.view.elevationProvider,this.view.renderCoordsHelper,Ie.fromElevationInfo(this.elevationInfo)),n=[],s=i.numVertices,l=i.position;for(let o=0;o<s;++o){const c=Fe(Qe,l[3*o],l[3*o+1],l[3*o+2]),d=oe(this._vertexMaterial,t,c),h=oe(this._vertexOutlineMaterial,r,c);n.push({vertexGeometry:d,vertexOutlineGeometry:h})}return n}createGeometries(e){const t=this._createRenderGeometries();for(const{vertexGeometry:r,vertexOutlineGeometry:i}of t)e.addGeometry(r),e.addGeometry(i)}createExternalResources(){this._vertexMaterial=new te({...this._vertexMaterialParameters,writeDepth:!0,cullFace:J.Back,screenSizeEnabled:!0}),this._vertexOutlineMaterial=new te({...this._vertexOutlineMaterialParameters,transparent:!0,writeDepth:!0,cullFace:J.Front,screenSizeEnabled:!0,shadingEnabled:!1})}destroyExternalResources(){this._vertexMaterial=null,this._vertexOutlineMaterial=null}forEachExternalMaterial(e){e(this._vertexMaterial),e(this._vertexOutlineMaterial)}}const Qe=u();function oe(a,e,t){return He(a,e,16,16,{offset:t})}export{Ye as G,ot as O,f as V,lt as _,nt as t};
