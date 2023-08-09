import{mc as z,md as P,me as q,mf as D,ax as L,l7 as R,mg as G,mh as N,b1 as B,mi as k,mj as H,mk as K,ml as Q,hq as A,hA as C,mm as U,mn as E,mo as V,mp as Y,mq as J,mr as W,ms as v,mt as X,mu as Z,mv as O,mw as S,mx as j,my as ee,mz as te,mA as I,mB as F,mC as M,mD as ne,mE as oe,d4 as w,kY as re,cr as se,mF as ae,mG as le,mH as ue,e6 as ce,mI as ie}from"./index-4e7cdbf0.js";import{q as fe}from"./georeference-31d6bdc3.js";import"./MeshGeoreferencedRelativeVertexSpace-f0de074a.js";import"./MeshLocalVertexSpace-0cd48a41.js";import"./MeshTransform-f49f56fb.js";function me(e,n,t){const a=e.typedBuffer,s=e.typedBufferStride,r=n.typedBuffer,f=n.typedBufferStride,l=t?t.count:n.count;let u=(t&&t.dstIndex?t.dstIndex:0)*s,i=(t&&t.srcIndex?t.srcIndex:0)*f;for(let c=0;c<l;++c){for(let o=0;o<9;++o)a[u+o]=r[i+o];u+=s,i+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function pe(e,n,t){const a=e.typedBuffer,s=e.typedBufferStride,r=n.typedBuffer,f=n.typedBufferStride,l=t?t.count:n.count;let u=(t&&t.dstIndex?t.dstIndex:0)*s,i=(t&&t.srcIndex?t.srcIndex:0)*f;for(let c=0;c<l;++c){for(let o=0;o<16;++o)a[u+o]=r[i+o];u+=s,i+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:pe},Symbol.toStringTag,{value:"Module"}));function T(e,n){return new e(new ArrayBuffer(n*e.ElementCount*z(e.ElementType)))}async function Me(e,n,t){const a={...t,useTransform:(t==null?void 0:t.useTransform)??!0},s=new P(de(a)),r=(await q(s,n,a,!0)).model,f=r.lods.shift(),l=new Map,u=new Map;r.textures.forEach((g,b)=>l.set(b,Te(g))),r.materials.forEach((g,b)=>u.set(b,$e(g,l)));const i=ge(f);for(const g of i.parts)ye(i,g,u);const{position:c,normal:o,tangent:m,color:p,texCoord0:y}=i.vertexAttributes,h={position:c.typedBuffer,normal:o!=null?o.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:y!=null?y.typedBuffer:null,color:p!=null?p.typedBuffer:null},x=fe(h,e,a);return{transform:x.transform,vertexSpace:x.vertexSpace,components:i.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:h.color,uv:h.uv})}}function de(e){const n=e==null?void 0:e.resolveFile;return n?{busy:!1,request:async(t,a,s)=>{const r=n(t);return(await L(r,{responseType:a==="image"?"image":a==="binary"?"array-buffer":"json",signal:s!=null?s.signal:null})).data}}:null}function $(e,n){if(e==null)return"-";const t=e.typedBuffer;return`${R(n,t.buffer,()=>n.size)}/${t.byteOffset}/${t.byteLength}`}function xe(e){return e!=null?e.toString():"-"}function ge(e){let n=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},a=new Map,s=new Map,r=[];for(const f of e.parts){const{attributes:{position:l,normal:u,color:i,tangent:c,texCoord0:o}}=f,m=`
      ${$(l,a)}/
      ${$(u,a)}/
      ${$(i,a)}/
      ${$(c,a)}/
      ${$(o,a)}/
      ${xe(f.transform)}
    `;let p=!1;const y=R(s,m,()=>(p=!0,{start:n,length:l.count}));p&&(n+=l.count),u&&(t.normal=!0),i&&(t.color=!0),c&&(t.tangent=!0),o&&(t.texCoord0=!0),r.push({gltf:f,writeVertices:p,region:y})}return{vertexAttributes:{position:T(ae,n),normal:t.normal?T(F,n):null,tangent:t.tangent?T(O,n):null,color:t.color?T(j,n):null,texCoord0:t.texCoord0?T(le,n):null},parts:r,components:[]}}function Te(e){return new G({data:(N(e.data),e.data),wrap:ve(e.parameters.wrap)})}function $e(e,n){const t=new B(we(e.color,e.opacity)),a=e.emissiveFactor?new B(Be(e.emissiveFactor)):null,s=r=>r?new ue({scale:r.scale?[r.scale[0],r.scale[1]]:[1,1],rotation:ce(r.rotation??0),offset:r.offset?[r.offset[0],r.offset[1]]:[0,0]}):null;return new k({color:t,colorTexture:n.get(e.textureColor),normalTexture:n.get(e.textureNormal),emissiveColor:a,emissiveTexture:n.get(e.textureEmissive),occlusionTexture:n.get(e.textureOcclusion),alphaMode:be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:n.get(e.textureMetallicRoughness),colorTextureTransform:s(e.colorTextureTransform),normalTextureTransform:s(e.normalTextureTransform),occlusionTextureTransform:s(e.occlusionTextureTransform),emissiveTextureTransform:s(e.emissiveTextureTransform),metallicRoughnessTextureTransform:s(e.metallicRoughnessTextureTransform)})}function ye(e,n,t){n.writeVertices&&he(e,n);const{indices:a,attributes:s,primitiveType:r,material:f}=n.gltf;let l=H(a||s.position.count,r);const u=n.region.start;if(u){const i=new Uint32Array(l);for(let c=0;c<l.length;c++)i[c]+=u;l=i}e.components.push(new K({faces:l,material:t.get(f),shading:s.normal?"source":"flat",trustSourceNormals:!0}))}function he(e,n){const{position:t,normal:a,tangent:s,color:r,texCoord0:f}=e.vertexAttributes,l=n.region.start,{attributes:u,transform:i}=n.gltf,c=u.position.count;if(Q(t.slice(l,c),u.position,i),u.normal!=null&&a!=null){const o=A(C(),i),m=a.slice(l,c);U(m,u.normal,o),E(o)&&V(m,m)}else a!=null&&Y(a,0,0,1,{dstIndex:l,count:c});if(u.tangent!=null&&s!=null){const o=A(C(),i),m=s.slice(l,c);J(m,u.tangent,o),E(o)&&W(m,m)}else s!=null&&v(s,0,0,1,1,{dstIndex:l,count:c});if(u.texCoord0!=null&&f!=null?X(f.slice(l,c),u.texCoord0):f!=null&&Z(f,0,0,{dstIndex:l,count:c}),u.color!=null&&r!=null){const o=u.color,m=r.slice(l,c);if(o.elementCount===4)o instanceof O?S(m,o,255):o instanceof j?ee(m,o):o instanceof te&&S(m,o,1/256);else{v(m,255,255,255,255);const p=I.fromTypedArray(m.typedBuffer,m.typedBufferStride);o instanceof F?M(p,o,255):o instanceof I?ne(p,o):o instanceof oe&&M(p,o,1/256)}}else r!=null&&v(r.slice(l,c),255,255,255,255)}function be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ve(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/ie)*255}function we(e,n){return re(d(e[0]),d(e[1]),d(e[2]),n)}function Be(e){return se(d(e[0]),d(e[1]),d(e[2]))}export{Me as loadGLTFMesh};