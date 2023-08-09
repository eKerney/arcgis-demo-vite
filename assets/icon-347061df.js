import{bF as p,bG as u,bL as b,bI as m,bJ as g,bK as y,bM as v}from"./index-4e7cdbf0.js";import{c as D}from"./observers-77656bf5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const w={icon:"icon",flipRtl:"flip-rtl"},f={},h={},d={s:16,m:24,l:32};async function x({icon:t,scale:i}){const a=d[i],n=z(t),s=n.charAt(n.length-1)==="F",e=`${s?n.substring(0,n.length-1):n}${a}${s?"F":""}`;if(f[e])return f[e];h[e]||(h[e]=fetch(v(`./assets/icon/${e}.json`)).then(o=>o.json()).catch(()=>(console.error(`"${e}" is not a valid calcite-ui-icon name`),"")));const c=await h[e];return f[e]=c,c}function z(t){const i=!isNaN(Number(t.charAt(0))),a=t.split("-");if(a.length>0){const s=/[a-z]/i;t=a.map((l,e)=>l.replace(s,function(o,r){return e===0&&r===0?o:o.toUpperCase()})).join("")}return i?`i${t}`:t}const k="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}",_=p(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible(()=>{this.visible=!0,this.loadIconPathData()})}disconnectedCallback(){var t;(t=this.intersectionObserver)==null||t.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:a,scale:n,textLabel:s}=this,l=b(t),e=d[n],c=!!s,o=[].concat(a||"");return m(y,{"aria-hidden":g(!c),"aria-label":c?s:null,role:c?"img":null},m("svg",{"aria-hidden":"true",class:{[w.flipRtl]:l==="rtl"&&i,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${e} ${e}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},o.map(r=>typeof r=="string"?m("path",{d:r}):m("path",{d:r.d,opacity:"opacity"in r?r.opacity:1}))))}async loadIconPathData(){const{icon:t,scale:i,visible:a}=this;!t||!a||(this.pathData=await x({icon:t,scale:i}))}waitUntilVisible(t){if(this.intersectionObserver=D("intersection",i=>{i.forEach(a=>{a.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())})},{rootMargin:"50px"}),!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return k}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function C(){if(typeof customElements>"u")return;["calcite-icon"].forEach(i=>{switch(i){case"calcite-icon":customElements.get(i)||customElements.define(i,_);break}})}C();export{_ as I,C as d};
