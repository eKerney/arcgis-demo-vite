import{gs as w,gt as q,gu as O,av as R,b1 as j,gv as V,gw as W,gx as x,el as H}from"./index-71d9419a.js";import{t as L,e as U,d as E,l as $}from"./symbolUtils-ee2b9ea2.js";import{s as D}from"./colorUtils-4d2dd486.js";import"./colorUtils-c0f43caf.js";const P="picture-fill",G="picture-marker",I="simple-fill",J="simple-line",K="simple-marker",N="text",Q="Aa",X=L.size,z=L.maxSize,Y=L.maxOutlineSize,_=L.lineWidth,T=225,ee=document.createElement("canvas");function A(a,e){const i=ee.getContext("2d"),n=[];return e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),i.font=n.join(" "),i.measureText(a).width}const ae=7.2/2.54,ne=72/2.54;function ie(a){if(a.length===0)return 0;if(a.length>2){const e=H(1),i=parseFloat(a);switch(a.slice(-2)){case"px":return i;case"pt":return i*e;case"in":return 72*i*e;case"pc":return 12*i*e;case"mm":return i*ae*e;case"cm":return i*ne*e}}return parseFloat(a)}function k(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function le(a,e){const i=e.fill,n=a.color;if((i==null?void 0:i.type)==="pattern"&&n&&a.type!==P){const r=await V(i.src,n.toCss(!0));i.src=r,e.fill=i}}async function se(a,e,i,n){var p,t,c;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await W(a.font)}catch{}const{width:r}=k(n),u=/[\uE600-\uE6FF]/.test(e.shape.text);r!=null||u||(i[0]=A(e.shape.text,{weight:(p=e.font)==null?void 0:p.weight,size:(t=e.font)==null?void 0:t.size,family:(c=e.font)==null?void 0:c.family}))}function oe(a,e,i,n,r){var u;if(a.haloColor!=null&&a.haloSize!=null){r.masking??(r.masking=i.map(()=>[]));const p=w(a.haloSize);n[0]+=p,n[1]+=p,i.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*p,join:"round",cap:"round"}}]),r.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*x,height:n[1]+2*x},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(n[0]+=2*x,n[1]+=2*x,i.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(u=r.masking)==null||u.unshift([]))}function Z(a,e){return a>e?"dark":"light"}function te(a,e){var M,C;const i=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,n=i!=null?w(i):null,r=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,u=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,p=q(a);let t=O(a);re(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(t={width:.75,...t,color:"#bdc3c7"});const c={shape:null,fill:p,stroke:t,offset:[0,0]};t!=null&&t.width&&(t.width=Math.min(t.width,Y));const d=(t==null?void 0:t.width)||0;let g=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,s=0,b=!1;switch(a.type){case K:{const h=a.style,{width:m,height:o}=k(e),v=m===o&&m!=null?m:n??Math.min(w(a.size),r||z);switch(l=v,s=v,h){case"circle":c.shape={type:"circle",cx:0,cy:0,r:.5*v},g||(l+=d,s+=d);break;case"cross":c.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[l,.5*s]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,s]}]};break;case"diamond":c.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*s]},{command:"L",values:[.5*l,s]},{command:"Z",values:[]}]},g||(l+=d,s+=d);break;case"square":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(l+=d,s+=d),u&&(b=!0);break;case"triangle":c.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(l+=d,s+=d),u&&(b=!0);break;case"x":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,s]},{command:"M",values:[l,0]},{command:"L",values:[0,s]}]},u&&(b=!0);break;case"path":c.shape={type:"path",path:a.path||""},g||(l+=d,s+=d),u&&(b=!0),g=!0}break}case J:{const{width:h,height:m}=k(e),o=m??n??d,v=h??_;t&&(t.width=o),l=v,s=o;const y=((M=c==null?void 0:c.stroke)==null?void 0:M.cap)||"butt",f=y==="round";g=!0,c.stroke&&(c.stroke.cap=y==="butt"?"square":y),c.shape={type:"path",path:[{command:"M",values:[f?o/2:0,s/2]},{command:"L",values:[f?l-o/2:l,s/2]}]};break}case P:case I:{const h=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((C=e==null?void 0:e.symbolConfig)!=null&&C.isSquareFill),{width:m,height:o}=k(e);l=!h&&m!==o||m==null?n??X:m,s=!h&&m!==o||o==null?l:o,g||(l+=d,s+=d),g=!0,c.shape=h?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,s]},{command:"L",values:[0,s]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:U.fill[0];break}case G:{const h=Math.min(w(a.width),r||z),m=Math.min(w(a.height),r||z),{width:o,height:v}=k(e),y=o===v&&o!=null?o:n??Math.max(h,m),f=h/m;l=f<=1?Math.ceil(y*f):y,s=f<=1?y:Math.ceil(y/f),c.shape={type:"image",x:-Math.round(l/2),y:-Math.round(s/2),width:l,height:s,src:a.url||""},u&&(b=!0);break}case N:{const h=a,m=(e==null?void 0:e.overrideText)||h.text||Q,o=h.font,{width:v,height:y}=k(e),f=y??n??Math.min(w(o.size),r||z),B=A(m,{weight:o.weight,size:f,family:o.family}),S=/[\uE600-\uE6FF]/.test(m);l=v??(S?f:B),s=f;let F=.25*ie((o?f:0).toString());S&&(F+=5),c.shape={type:"text",text:m,x:h.xoffset||0,y:h.yoffset||F,align:"middle",alignBaseline:h.verticalAlignment,decoration:o&&o.decoration,rotated:h.rotated,kerning:h.kerning},c.font=o&&{size:f,style:o.style,decoration:o.decoration,weight:o.weight,family:o.family};break}}return{shapeDescriptor:c,size:[l,s],renderOptions:{node:e==null?void 0:e.node,scale:g,opacity:e==null?void 0:e.opacity,rotation:u,useRotationSize:b,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function pe(a,e){var p;const{shapeDescriptor:i,size:n,renderOptions:r}=te(a,e);if(!i.shape)throw new R("symbolPreview: renderPreviewHTML2D","symbol not supported.");await le(a,i),await se(a,i,n,e);const u=[[i]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((p=e==null?void 0:e.symbolConfig)!=null&&p.applyColorModulation)){const t=.6*n[0];u.unshift([{...i,offset:[-t,0],fill:E(i.fill,-.3)}]),u.push([{...i,offset:[t,0],fill:E(i.fill,.3)}]),n[0]+=2*t,r.scale=!1}return a.type==="text"&&oe(a,i,u,n,r),$(u,n,r)}function re(a,e=T){const i=q(a),n=O(a),r=!i||"type"in i?null:new j(i),u=n!=null&&n.color?new j(n==null?void 0:n.color):null,p=r?Z(D(r),e):null,t=u?Z(D(u),e):null;return t?p?p===t?p:e>=T?"light":"dark":t:p}export{re as getContrastingBackgroundTheme,te as getRenderSymbolParameters,pe as previewSymbol2D};