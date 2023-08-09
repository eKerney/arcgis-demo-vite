import{am as m,ai as t,aj as r,aC as y,gd as b,h1 as u,al as c,h2 as v,by as L,h3 as w,cc as F,f3 as I,eR as g,h4 as S,h5 as O,ax as j,h6 as x,be as T,dk as $,dl as q,dj as E,h7 as P,av as p,aP as Q,h8 as D,h9 as A,ha as R,hb as N,bP as U,bD as _,hc as B,hd as C,he as M,hf as K,cs as k,hg as Z,hh as V}from"./index-4e7cdbf0.js";let n=class extends m(v){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),t([y("service","title",["alias","name"])],n.prototype,"readTitle",null),t([r()],n.prototype,"layer",void 0),t([r({type:b,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),t([y("service","id")],n.prototype,"readIdOnlyOnce",null),t([r(u(String))],n.prototype,"modelName",void 0),t([r(u(Boolean))],n.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],n.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=t([c("esri.layers.buildingSublayers.BuildingSublayer")],n);const G=n,f="esri.layers.buildingSublayers.BuildingComponentSublayer",z=L.getLogger(f),h=V();let a=class extends w.LoadableMixin(F(G)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,s;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(s=this.layer.parsedUrl)==null?void 0:s.query}:{path:""}}get fieldsIndex(){return new I(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,o=s.associatedLayerID;return i!=null&&typeof o=="number"?new g({portalItem:i,layerId:o}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=e!=null?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=S(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,z,s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return O(this,e)}async _fetchService(e){const s=(await j(this.parsedUrl.path,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var o,l,d;const i=(l=(o=this.getFeatureType(s==null?void 0:s.feature))==null?void 0:o.domains)==null?void 0:l[e];return i&&i.type!=="inherited"?i:((d=this.getField(e))==null?void 0:d.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:x,{query:s,data:{supportsZ:i,supportsM:o,isVersioned:l}}=e;return{query:s,data:{supportsZ:i,supportsM:o,isVersioned:l}}}createQuery(){const e=new T;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i!=null&&i.features)for(const o of i.features)o.layer=this.layer,o.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}async queryCachedAttributes(e,s){const i=$(this.fieldsIndex,await q(this,E(this)));return P(this.parsedUrl.path,this.attributeStorageInfo,e,s,i)}async queryCachedFeature(e,s){const i=await this.queryCachedAttributes(e,[s]);if(!i||i.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new Q;return o.attributes=i[0],o.layer=this,o.sourceLayer=this,o}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],a.prototype,"parsedUrl",null),t([r({type:D,readOnly:!0})],a.prototype,"nodePages",void 0),t([r({type:[A],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([r({type:[R],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([r({type:[N],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],a.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([r({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([r(h.fields)],a.prototype,"fields",void 0),t([r({readOnly:!0})],a.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:g})],a.prototype,"associatedLayer",void 0),t([y("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([r(h.outFields)],a.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([r({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([r({readOnly:!0,type:U})],a.prototype,"fullExtent",null),t([r({readOnly:!0,type:_})],a.prototype,"spatialReference",null),t([r({readOnly:!0})],a.prototype,"version",null),t([r({readOnly:!0,type:B})],a.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([r({types:C,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([r(M)],a.prototype,"popupEnabled",void 0),t([r({type:K,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([r()],a.prototype,"types",null),t([r()],a.prototype,"typeIdField",null),t([r({json:{write:!1}}),k(new Z({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([r()],a.prototype,"geometryType",null),t([r()],a.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),a=t([c(f)],a);const J=a;export{J as C,G as n};
