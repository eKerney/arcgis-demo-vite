import{r as s}from"./quantityFormatUtils-ff29e62c.js";import{cP as H,e1 as M,e2 as v,dp as d,e3 as m,dt as P,cq as f}from"./index-4e7cdbf0.js";import{i as $}from"./measurementUtils-a6d314a6.js";var o;function B(t){return S(t,o.Direct)}function C(t){return S(t,o.Horizontal)}function S(t,n){const{hasZ:r,spatialReference:i}=t,c=$(i);let u=0;const a=v(c);if(a==null)return null;const h=n===o.Direct?b:j;for(const p of t.paths){if(p.length<2)continue;const q=p.length-1;for(let z=0;z<q;++z){const Z=p[z];e[0]=Z[0],e[1]=Z[1],e[2]=r?Z[2]:0;const y=p[z+1];l[0]=y[0],l[1]=y[1],l[2]=r?y[2]:0;const g=h(e,l,i);if(g==null)return null;u+=g.value}}return s(u,a)}function E(t,n){const{spatialReference:r}=t;return H(r,n.spatialReference)?(e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,b(e,l,r)):null}function F(t,n){const{spatialReference:r}=t;return H(r,n.spatialReference)?(e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,j(e,l,r)):null}function G(t,n){const{spatialReference:r}=t;return H(r,n.spatialReference)?(e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,l[0]=n.x,l[1]=n.y,l[2]=n.hasZ?n.z:0,U(e,l,r)):null}function I(t){return e[0]=t.x,e[1]=t.y,e[2]=t.hasZ?t.z:0,X(e,t.spatialReference)}function b(t,n,r){const i=V(t,n,r,o.Direct);return i!=null?s(i.direct,i.unit):null}function j(t,n,r){const i=V(t,n,r,o.Horizontal);return i!=null?s(i.horizontal,i.unit):null}function U(t,n,r){const i=V(t,n,r,o.Vertical);return i!=null?s(i.verticalSigned,i.unit):null}function X(t,n){const r=M(n);return r!=null?s(t[2],r):null}function V(t,n,r,i){const c=$(r),u=v(c);if(u==null)return null;const a=n[2]-t[2];if(i===o.Vertical)return{verticalSigned:a,unit:u};if(!d(t,r,D,c)||!d(n,r,x,c))return null;if(i===o.Direct)return{direct:m(x,D),unit:u};if(P(R,t[0],t[1],n[2]),!d(R,r,R,c))return null;const h=m(R,x);return i===o.Horizontal?{horizontal:h,unit:u}:{direct:m(x,D),horizontal:h,vertical:Math.abs(a),unit:u}}(function(t){t[t.Direct=0]="Direct",t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"})(o||(o={}));const e=f(),l=f(),D=f(),x=f(),R=f();export{I as R,j as Z,C as f,U as j,F as m,B as s,b as x,G as y,E as z};
