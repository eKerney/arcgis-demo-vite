import{c2 as e,c3 as f,be as i}from"./index-4e7cdbf0.js";import{m}from"./query-faa7dd63.js";async function d(a,r,t){const n=await u(a,r,t);return e.fromJSON(n)}async function u(a,r,t){const n=f(a),c={...t},o=i.from(r),{data:s}=await m(n,o,o.sourceSpatialReference,c);return s}export{u as a,d as s};