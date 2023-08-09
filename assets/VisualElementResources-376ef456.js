import{e7 as t,e8 as _,aI as l,e9 as n,d3 as d,aL as y,ag as b}from"./index-4e7cdbf0.js";class p{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return this._resources!=null?this._resources.object:null}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(this._resources==null||!e)return;const r=this._resources.object;this._resources.external.forEach(s=>{s.type!==t.Mesh&&s.type!==t.Line&&s.type!==t.Point||e.remove(s)}),r.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,r,this._resources.layer),this._resources.external.forEach(s=>{s.type!==t.Mesh&&s.type!==t.Line&&s.type!==t.Point||e.add(s)})}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,r=e.view,s=r._stage;if(!s)return;const i=new _(s,{pickable:!1,updatePolicy:l.SYNC}),o=new n({castShadow:!1}),a=e.createResources(o,i);a.forEach(c=>{s.add(c),c instanceof d&&s.loadImmediate(c)}),s.add(o),i.add(o);const h=e.cameraChanged,u=h?y(()=>r.state.camera,c=>h(c),b):null;this._resources={layer:i,object:o,external:a,cameraHandle:u},this._syncVisible()}_destroyResources(){var r;if(this._resources==null)return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach(s=>e.remove(s))),this._resources.object.dispose(),(r=this._resources.cameraHandle)==null||r.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){this._resources!=null&&(this._resources.object.visible=this._visible)}}export{p as a};
