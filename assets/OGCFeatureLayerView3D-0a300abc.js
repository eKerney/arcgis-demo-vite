import{ai as r,aj as i,al as o,av as s}from"./index-4e7cdbf0.js";import{_ as m}from"./FeatureLayerViewBase3D-9fc03cdd.js";import"./FeatureLikeLayerView3D-1c709d6f.js";import"./dehydratedFeatureComparison-d8e6ffe2.js";import"./queryForSymbologySnapping-17730445.js";import"./hash-6f442295.js";import"./Graphics3DObjectStates-a49c32e0.js";import"./rendererConversion-0f993bc8.js";import"./optimizedFeatureQueryEngineAdapter-cf9b637f.js";import"./centroid-8e8cfa47.js";import"./PooledRBush-295d6ce1.js";import"./quickselect-8ff2a76e.js";import"./floorFilterUtils-080a7cd2.js";import"./QueryEngine-3c1dae32.js";import"./normalizeUtils-5108f928.js";import"./normalizeUtilsCommon-8aa93216.js";import"./WhereClause-50cca87e.js";import"./executionError-c92d3b85.js";import"./json-48e3ea08.js";import"./utils-ca9eceaf.js";import"./generateRendererUtils-b1f5279d.js";import"./FeatureStore-e7a5a897.js";import"./BoundsStore-e596fecb.js";import"./projectExtentUtils-3af128e1.js";import"./LayerView3D-d89227ef.js";import"./query-faa7dd63.js";import"./pbfQueryUtils-abc2886c.js";import"./pbf-816f3f11.js";import"./EventedSet-aab6d560.js";import"./LayerView-18befeb9.js";import"./RefreshableLayerView-ae86cf2f.js";const l=a=>{let e=class extends a{get availableFields(){return this.layer.fieldsIndex.fields.map(p=>p.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const B=t;export{B as default};