import{ai as r,aj as i,al as o,av as s}from"./index-71d9419a.js";import{_ as m}from"./FeatureLayerViewBase3D-26531bea.js";import"./FeatureLikeLayerView3D-ec9c7c0f.js";import"./dehydratedFeatureComparison-50a0d901.js";import"./queryForSymbologySnapping-e9d4ec56.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-d2abab5f.js";import"./rendererConversion-260a8404.js";import"./optimizedFeatureQueryEngineAdapter-8b6c7efa.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-274d5277.js";import"./quickselect-13b071df.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-428a6121.js";import"./normalizeUtils-12909a13.js";import"./normalizeUtilsCommon-2bf8a83b.js";import"./WhereClause-19346df6.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./utils-5e6bb655.js";import"./generateRendererUtils-45a5aa48.js";import"./FeatureStore-5c3adbbf.js";import"./BoundsStore-8f75b446.js";import"./projectExtentUtils-07d43fc4.js";import"./LayerView3D-55fffc04.js";import"./query-cc9f5d54.js";import"./pbfQueryUtils-43ab8bb6.js";import"./pbf-d00ed0d0.js";import"./EventedSet-3ae62a3e.js";import"./LayerView-d3a3bea6.js";import"./RefreshableLayerView-1f6bbdf7.js";const l=a=>{let e=class extends a{get availableFields(){return this.layer.fieldsIndex.fields.map(p=>p.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const B=t;export{B as default};