import{hD as x,bD as z,hE as C,hF as F,aB as S,hG as G,hH as $,hI as q,hJ as E,hK as O}from"./index-4e7cdbf0.js";async function H(s,d,l,p,r){const{elevationProvider:g,renderCoordsHelper:c,spatialReference:m}=s,{elevationInfo:y}=d,I=C(y,!0),b=await F(I,m,r);S(r);const i=[],u=new Set,f=new Set;for(const{objectId:e,points:a}of p){const n=l(e);if(n==null){for(const o of a)i.push(o.z??0);u.add(e);continue}n.isDraped&&f.add(e);const t=n.graphic.geometry;w.setFromElevationInfo(G(t,y)),w.updateFeatureExpressionInfoContext(b,n.graphic,d),h.spatialReference=s.spatialReference;for(const{x:o,y:v,z:j}of a)h.x=o,h.y=v,h.z=j??0,$(h,g,w,c,D),i.push(D.z)}return{elevations:i,drapedObjectIds:f,failedObjectIds:u}}const w=new q,h=x(0,0,0,z.WGS84),D=new E;async function P(s,d,l){if(s==null||d.candidates.length===0)return R;const p=s.graphics3DGraphicsByObjectID??s.graphics3DGraphics,r=[],g=[],{renderer:c}=s,m=c!=null&&"arcadeRequired"in c&&c.arcadeRequired?O():null,y=async(e,{graphic:a,graphics3DSymbol:n})=>{const t=await m,o=await s.getRenderingInfoAsync(a,c,t,{signal:l});return o==null?[]:n.queryForSnapping(e,b,o,l)},{candidates:I,spatialReference:b}=d;for(let e=0;e<I.length;++e){const a=I[e],{objectId:n}=a,t=typeof n=="number"?p==null?void 0:p.get(n):void 0;if(t==null)continue;const{graphics3DSymbol:o}=t;o.symbologySnappingSupported&&(r.push(y(a,t)),g.push(e))}if(r.length===0)return R;const i=await Promise.all(r);S(l);const u=[],f=[];for(let e=0;e<i.length;++e){const a=i[e],n=g[e];for(const t of a)u.push(t),f.push(n)}return{candidates:u,sourceCandidateIndices:f}}const R={candidates:[],sourceCandidateIndices:[]};export{H as f,P as r};
