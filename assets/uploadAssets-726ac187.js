import{gK as w,ax as y,aB as l,gk as k,av as c,il as M,aw as J,by as O,ik as G,jk as K,bA as x,ij as V,bB as W}from"./index-4e7cdbf0.js";import{m as Q,g as X,a as A,i as N,N as Y}from"./External-37176b11.js";const U=1e6,D=20*U,Z=2e9,_=3;async function ee({data:e,name:a,description:t},s,r){let n=null;try{const o=w(s,"uploads"),i=w(o,"info"),{data:u}=await y(i,{query:{f:"json"},responseType:"json"});l(r);const p=k(s),d=u.maxUploadFileSize*U,m=p?Z:d,T=p?Math.min(D,d):D;if(e.size>m)throw new Error("Data too large");const P=w(o,"register"),{data:E}=await y(P,{query:{f:"json",itemName:a,description:t},responseType:"json",method:"post"});if(l(r),!E.success)throw new Error("Registration failed");const{itemID:R}=E.item;n=w(o,R);const B=w(n,"uploadPart"),C=Math.ceil(e.size/T),h=new Array;for(let f=0;f<C;++f)h.push(e.slice(f*T,Math.min((f+1)*T,e.size)));const g=h.slice().reverse(),j=new Array,L=async()=>{for(;g.length!==0;){const f=h.length-g.length,b=g.pop(),$=new FormData;$.append("f","json"),$.append("file",b),$.append("partId",`${f}`);const{data:H}=await y(B,{timeout:0,body:$,responseType:"json",method:"post"});if(l(r),!H.success)throw new Error("Part upload failed")}};for(let f=0;f<_&&g.length!==0;++f)j.push(L());await Promise.all(j);const z=w(n,"commit"),{data:F}=await y(z,{query:{f:"json",parts:h.map((f,b)=>b).join(",")},responseType:"json",method:"post"});if(l(r),!F.success)throw new Error("Commit failed");return F.item}catch(o){if(n!=null){const i=w(n,"delete");await y(i,{query:{f:"json"},responseType:"json",method:"post"})}throw o}}async function Te(e,a,t){return e.length?Promise.all(e.map(s=>te(s,a,t))):[]}async function te(e,{layer:a,ongoingUploads:t},s){const r=t.get(e);if(r)return r;if(!me(a))throw new c(`${a.type}-layer:upload-failure`,"Layer does not support asset uploads.",new Error);if(ae(e,a))return e;const n=se(e,a,s);t.set(e,n);try{await n}finally{t.delete(e)}return e}function ae(e,a){const{parsedUrl:t}=a;return t!=null&&e.metadata.externalSources.some(s=>Q(s,t))}async function se(e,a,t){const{metadata:s}=e,{displaySource:r}=s,n=v(r==null?void 0:r.source,a),o=!!n,i=s.externalSources.length>0,u=o?oe(n,a,t):i?ne(e,a,t):re(e,a,t),p=await u;return l(t),e.addExternalSources([p]),e}async function oe(e,a,t){return{source:await S(e,a,t),original:!0}}async function ne(e,a,t){const s=q(a),{externalSources:r}=e.metadata,n=le(r,a);if(!n)throw new c(`${a.type}-layer:upload-failure`,"Could not find an external source that is supported by the service.",new Error);const o=await S(n,a,t);return e.addExternalSources([{source:o,original:!0}]),{source:await ye(o,a,s)}}async function re(e,a,t){const s=ie(e,a,t);return{source:await I([s],a,t),extent:e.extent.clone(),original:!0}}async function ie(e,a,t){const s=q(a),r=await e.load(t),n=await r.toBinaryGLTF({ignoreLocalTransform:!0});l(t);const o=await n.buffer();return l(t),{blob:new Blob([o.data],{type:o.type}),assetName:`${M()}.glb`,assetType:s}}function le(e,a){for(const t of e){const s=v(t.source,a);if(s)return s}return null}function v(e,a){if(!e)return null;const{infoFor3D:{supportedFormats:t,editFormats:s}}=a,r=Y(e),n=new Array;let o=!1;for(let i=0;i<r.length;++i){const u=ue(r[i],t);if(!u)return null;s.includes(u.assetType)&&(o=!0),n.push(u)}return o?n:null}function ue(e,a){const t=X(e,a);return t?{asset:e,assetType:t}:null}async function S(e,a,t){return I(e.map(s=>ce(s,t)),a,t)}async function I(e,a,t){const s=await Promise.all(e.map(async n=>{const o=pe(await n,a,t);return l(t),o}));l(t);const{uploadResults:r}=await de(s.map(({item:n})=>n),a,t);return l(t),e.map((n,o)=>fe(s[o],r[o],a))}async function ce(e,a){const{asset:t,assetType:s}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:s};const r=await t.toBlob(a);return l(a),{blob:r,assetName:t.assetName,assetType:s}}async function pe(e,a,t){const{blob:s,assetType:r,assetName:n}=e;let o=null;try{const i=await ee({data:s,name:n},a.url,t);l(t),o={assetType:r,assetUploadId:i.itemID}}catch(i){J(i),O.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${a.url} does not support the REST Uploads API.`)}if(!o){const i=await G(s);if(l(t),!i.isBase64)throw new c(`${a.type}-layer:uploadAssets-failure`,"Expected gltf data in base64 format after conversion.",new Error);o={assetType:r,assetData:i.data}}if(!o)throw new c(`${a.type}-layer:uploadAssets-failure`,"Unable to prepare uploadAsset request options.",new Error);return{item:o,assetName:n}}async function de(e,a,t){const s=await y(w(a.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(l(t),s.data.uploadResults.length!==e.length)throw new c(`${a.type}-layer:uploadAssets-failure`,`Bad response. Uploaded ${e.length} items and received ${s.data.uploadResults.length} results.`,new Error);return s.data}function fe(e,a,t){const{success:s}=a;if(!s){const{error:p}=a;throw new c(`${t.type}-layer:upload-failure`,`Failed to upload mesh file ${e.assetName}. Error code: ${p.code}. Error message: ${p.messages}`,new Error)}const{assetHash:r}=a,{assetName:n,item:{assetType:o}}=e,{infoFor3D:{supportedFormats:i}}=t,u=K(o,i);if(!u)throw new c(`${t.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${o}, but it does not list it in its supported formats.`,new Error);return new A(n,u,[new N(`${t.parsedUrl.path}/assets/${r}`,r)])}async function ye(e,a,t){var p;const s=e.map(({assetName:d,parts:m})=>({assetName:d,assetHash:m[0].partHash})),r=(p=a.capabilities)==null?void 0:p.operations.supportsAsyncConvert3D,n={query:{f:"json",assets:JSON.stringify(s),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},responseType:"json",timeout:0},o=w(a.parsedUrl.path,"convert3D"),i=(r?await we(o,n):await y(o,n)).data,{infoFor3D:{supportedFormats:u}}=a;return i.assets.map(d=>{const m=x(d.contentType,u);if(!m)throw new c(`${a.type}-layer:upload-failure`,`The service allowed us to upload an asset of FormatID ${m}, but it does not list it in its supported formats.`,new Error);return new A(d.assetName,d.contentType,[new N(d.assetURL,d.assetHash)])})}async function we(e,a){const t=(await y(e,a)).data.statusUrl;for(;;){const s=(await y(t,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return y(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new c("async-convert3D-failed","asynchronous convert3D call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new c("async-convert3D-failed","asynchronous convert3D call failed (undefined response status)")}await V(he)}}function me(e){return!!e.infoFor3D&&!!e.url}function q(e){const{infoFor3D:a}=e,t=x("model/gltf-binary",a.supportedFormats)??W("glb",a.supportedFormats);if(!t)throw new c(`${e.type}-layer:upload-failure`,"Layer does not support glb.",new Error);return t}const he=1e3;export{Te as uploadAssets};
