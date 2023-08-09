import{av as i,bi as u,bj as p,bk as c}from"./index-4e7cdbf0.js";function d(e){return e==null||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function h(e,r){if(e==null)return null;if(!d(e))return new i("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return y(e);case"unique-value":return f(e,r);case"class-breaks":return m(e);case"dictionary":case"heatmap":return null}return null}function a(e,r){if(!r)return null;let n;if(n=Array.isArray(r)?r:[r],n.length>0){const t=n.map(s=>s.details.symbol.type||s.details.symbol.declaredClass).filter(s=>!!s);t.sort();const o=[];return t.forEach((s,l)=>{l!==0&&s===t[l-1]||o.push(s)}),new i("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${o.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}function y(e){return a(e,u(e.symbol).error)}function f(e,r){var s;const n={...p,...r},t=(s=e.uniqueValueInfos)==null?void 0:s.map(l=>u(l.symbol,n).error).filter(c),o=u(e.defaultSymbol,n);return o.error&&(t==null||t.unshift(o.error)),a(e,t)}function m(e){const r=e.classBreakInfos.map(t=>u(t.symbol).error).filter(c),n=u(e.defaultSymbol);return n.error&&r.unshift(n.error),a(e,r)}export{h as s,d as t};
