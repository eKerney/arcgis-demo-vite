import{eS as G,aY as M,aV as A,aK as v}from"./index-71d9419a.js";import{a as L}from"./lazyLayerLoader-5278da83.js";import{selectLayerClassPath as b}from"./portalLayers-f30d2cf5.js";import"./layersLoader-2dcc4b53.js";import"./fetchService-b79dba6b.js";import"./jsonContext-475e31f7.js";function w(e){return p(e,"notes")}function h(e){return p(e,"markup")}function W(e){return p(e,"route")}function p(e,r){return!(!e.layerType||e.layerType!=="ArcGISFeatureLayer")&&e.featureCollectionType===r}async function C(e,r,y){if(!r)return;const t=[];for(const a of r){const i=U(a,y);a.layerType==="GroupLayer"?t.push(N(i,a,y)):t.push(i)}const n=await G(t);for(const a of n)a.value&&e.add(a.value)}const F={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},V={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},O={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",DefaultTileLayer:"TileLayer"},I={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},T={ArcGISFeatureLayer:"FeatureLayer"},f={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"},k={...I,LinkChartLayer:"LinkChartLayer"},B={...T},D={...f};async function U(e,r){return x(await R(e,r),e,r)}async function x(e,r,y){const t=new e;return t.read(r,y.context),t.type==="group"&&g(r)&&await K(t,r,y.context),await M(t,y.context),t}async function R(e,r){var o;const y=r.context,t=E(y);let n=e.layerType||e.type;!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType);const a=t[n];let i=a?L[a]:L.UnknownLayer;if(m(e)){const c=y==null?void 0:y.portal;if(e.itemId){const l=new A({id:e.itemId,portal:c});await l.load();const s=(await b(l)).className||"UnknownLayer";i=L[s]}}else n==="ArcGISFeatureLayer"?w(e)||h(e)?i=L.MapNotesLayer:W(e)?i=L.RouteLayer:g(e)&&(i=L.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?i=L.WMTSLayer:n==="WFS"&&((o=e.wfsInfo)==null?void 0:o.version)!=="2.0.0"&&(i=L.UnsupportedLayer);return i()}function g(e){var r,y;return e.layerType!=="ArcGISFeatureLayer"||m(e)?!1:(((y=(r=e.featureCollection)==null?void 0:r.layers)==null?void 0:y.length)??0)>1}function m(e){return e.type==="Feature Collection"}function E(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=O;break;case"ground":r=V;break;default:r=F}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=D;break;case"tables":r=B;break;default:r=k}break;default:switch(e.layerContainerType){case"basemap":r=f;break;case"tables":r=T;break;default:r=I}}return r}async function N(e,r,y){const t=new v,n=C(t,Array.isArray(r.layers)?r.layers:[],y);try{const a=await e;try{if(await n,a.type==="group")return a.layers.addMany(t),a}catch(i){a.destroy();for(const o of t)o.destroy();throw i}}catch(a){throw a}}async function K(e,r,y){var c;const t=L.FeatureLayer,n=await t(),a=r.featureCollection,i=a==null?void 0:a.showLegend,o=(c=a==null?void 0:a.layers)==null?void 0:c.map((l,s)=>{var d;const S=new n;S.read(l,y);const u={...y,ignoreDefaults:!0};return S.read({id:`${e.id}-sublayer-${s}`,visibility:((d=r.visibleLayers)==null?void 0:d.includes(s))??!0},u),i!=null&&S.read({showLegend:i},u),S});e.layers.addMany(o??[])}export{C as populateOperationalLayers};