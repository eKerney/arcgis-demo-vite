import{aO as n,ag as p,aP as m,ai as i,aj as e,aQ as l,al as d}from"./index-4e7cdbf0.js";import{x as h}from"./I3SMeshView3D-f3cc02f5.js";import{n as c}from"./LayerView3D-d89227ef.js";import{d as u}from"./LayerView-18befeb9.js";import"./I3SOverrides-4b229600.js";import"./I3SNode-8649fb12.js";import"./meshFeatureSet-1e513016.js";import"./MeshGeoreferencedRelativeVertexSpace-f0de074a.js";import"./MeshLocalVertexSpace-0cd48a41.js";import"./MeshTransform-f49f56fb.js";import"./georeference-31d6bdc3.js";import"./External-37176b11.js";import"./FeatureLayerView3D-595c2569.js";import"./FeatureLayerViewBase3D-9fc03cdd.js";import"./FeatureLikeLayerView3D-1c709d6f.js";import"./dehydratedFeatureComparison-d8e6ffe2.js";import"./queryForSymbologySnapping-17730445.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-a49c32e0.js";import"./rendererConversion-0f993bc8.js";import"./optimizedFeatureQueryEngineAdapter-cf9b637f.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-295d6ce1.js";import"./quickselect-8ff2a76e.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-3c1dae32.js";import"./normalizeUtils-5108f928.js";import"./normalizeUtilsCommon-8aa93216.js";import"./WhereClause-50cca87e.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./utils-ca9eceaf.js";import"./generateRendererUtils-b1f5279d.js";import"./FeatureStore-e7a5a897.js";import"./BoundsStore-e596fecb.js";import"./projectExtentUtils-3af128e1.js";import"./query-faa7dd63.js";import"./pbfQueryUtils-abc2886c.js";import"./pbf-816f3f11.js";import"./EventedSet-aab6d560.js";import"./RefreshableLayerView-ae86cf2f.js";import"./SceneModification-ae130d17.js";import"./SceneLayerWorker-03575c61.js";const g=.2;let r=class extends h(c(u)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=n.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t;return((t=this._controller)==null?void 0:t.updatingProgress)??0}get lodFactor(){var t,o,a,s;return((s=(a=(o=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)??1}get progressiveLoadFactor(){return this.lodFactor>=1?g:1}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),p),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new m;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),this.layer.modifications==null)return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),p),"modifications")}};i([e()],r.prototype,"layer",void 0),i([e()],r.prototype,"i3slayer",null),i([e(l)],r.prototype,"updatingProgress",void 0),i([e()],r.prototype,"updatingProgressValue",null),i([e()],r.prototype,"lodFactor",null),i([e({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([d("esri.views.3d.layers.SceneLayerView3D")],r);const at=r;export{at as default};
