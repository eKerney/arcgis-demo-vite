import{ai as o,aj as e,gd as d,al as u,cm as f}from"./index-4e7cdbf0.js";function y(n){const{exifInfo:i,exifName:r,tagName:a}=n;if(!i||!r||!a)return null;const l=i.find(p=>p.name===r);return l?m({tagName:a,tags:l.tags}):null}function m(n){const{tagName:i,tags:r}=n;if(!r||!i)return null;const a=r.find(l=>l.name===i);return a&&a.value||null}var s;const c={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let t=s=class extends f{constructor(n){super(n),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:n}=this,i=y({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:n});return c[i]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};o([e({type:String})],t.prototype,"contentType",void 0),o([e()],t.prototype,"exifInfo",void 0),o([e({readOnly:!0})],t.prototype,"orientationInfo",null),o([e({type:d})],t.prototype,"id",void 0),o([e({type:String})],t.prototype,"globalId",void 0),o([e({type:String})],t.prototype,"keywords",void 0),o([e({type:String})],t.prototype,"name",void 0),o([e({json:{read:!1}})],t.prototype,"parentGlobalId",void 0),o([e({json:{read:!1}})],t.prototype,"parentObjectId",void 0),o([e({type:d})],t.prototype,"size",void 0),o([e({json:{read:!1}})],t.prototype,"url",void 0),t=s=o([u("esri.layers.support.AttachmentInfo")],t);const h=t;export{h as l};
