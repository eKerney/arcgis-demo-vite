import{bI as m,i5 as re,nq as Pe,nr as N,ns as ke,nt as De,nu as A,bF as se,bG as ce,eB as F,bJ as S,bH as Ce,eJ as Te,eG as Fe,bK as Oe,go as _,eK as Be}from"./index-4e7cdbf0.js";import{g as le}from"./guid-40d04074.js";import{s as ue,a as de,c as fe,i as me}from"./key-bda23af6.js";import{d as pe}from"./action-ffe80b57.js";import{d as he}from"./icon-347061df.js";import{d as ve}from"./loader-122d6fcd.js";import{c as q,g as Ae,a as Ie,d as Le,b as Me,e as Re,r as Ne,f as He,F as Y}from"./FloatingArrow-7440c8d6.js";import{u as Se,c as _e,a as ze,s as Ke,d as Ue,b as $e}from"./t9n-6fcc568d.js";import{c as je}from"./observers-77656bf5.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const Ge=(t,e)=>{const n=t.level?`h${t.level}`:"div";return delete t.level,m(n,{...t},e)};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */function V(t,e){return(t+e)%e}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 *//*!
* focus-trap 7.4.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,a)}return n}function J(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?X(Object(n),!0).forEach(function(a){qe(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function qe(t,e,n){return e=Ve(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ye(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ve(t){var e=Ye(t,"string");return typeof e=="symbol"?e:String(e)}var W={activateTrap:function(e,n){if(e.length>0){var a=e[e.length-1];a!==n&&a.pause()}var c=e.indexOf(n);c===-1||e.splice(c,1),e.push(n)},deactivateTrap:function(e,n){var a=e.indexOf(n);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},Xe=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},Je=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},O=function(e){return e.key==="Tab"||e.keyCode===9},We=function(e){return O(e)&&!e.shiftKey},Qe=function(e){return O(e)&&e.shiftKey},Q=function(e){return setTimeout(e,0)},Z=function(e,n){var a=-1;return e.every(function(c,l){return n(c)?(a=l,!1):!0}),a},T=function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];return typeof e=="function"?e.apply(void 0,a):e},I=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Ze=[],et=function(e,n){var a=(n==null?void 0:n.document)||document,c=(n==null?void 0:n.trapStack)||Ze,l=J({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:We,isKeyBackward:Qe},n),r={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},v,h=function(i,o,s){return i&&i[o]!==void 0?i[o]:l[s||o]},g=function(i,o){var s=typeof(o==null?void 0:o.composedPath)=="function"?o.composedPath():void 0;return r.containerGroups.findIndex(function(u){var d=u.container,p=u.tabbableNodes;return d.contains(i)||(s==null?void 0:s.includes(d))||p.find(function(b){return b===i})})},w=function(i){var o=l[i];if(typeof o=="function"){for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];o=o.apply(void 0,u)}if(o===!0&&(o=void 0),!o){if(o===void 0||o===!1)return o;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var p=o;if(typeof o=="string"&&(p=a.querySelector(o),!p))throw new Error("`".concat(i,"` as selector refers to no known node"));return p},P=function(){var i=w("initialFocus");if(i===!1)return!1;if(i===void 0||!N(i,l.tabbableOptions))if(g(a.activeElement)>=0)i=a.activeElement;else{var o=r.tabbableGroups[0],s=o&&o.firstTabbableNode;i=s||w("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},k=function(){if(r.containerGroups=r.containers.map(function(i){var o=ke(i,l.tabbableOptions),s=De(i,l.tabbableOptions);return{container:i,tabbableNodes:o,focusableNodes:s,firstTabbableNode:o.length>0?o[0]:null,lastTabbableNode:o.length>0?o[o.length-1]:null,nextTabbableNode:function(d){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,b=s.findIndex(function(y){return y===d});if(!(b<0))return p?s.slice(b+1).find(function(y){return A(y,l.tabbableOptions)}):s.slice(0,b).reverse().find(function(y){return A(y,l.tabbableOptions)})}}}),r.tabbableGroups=r.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),r.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},x=function f(i){if(i!==!1&&i!==a.activeElement){if(!i||!i.focus){f(P());return}i.focus({preventScroll:!!l.preventScroll}),r.mostRecentlyFocusedNode=i,Xe(i)&&i.select()}},z=function(i){var o=w("setReturnFocus",i);return o||(o===!1?!1:i)},B=function(i){var o=I(i);if(!(g(o,i)>=0)){if(T(l.clickOutsideDeactivates,i)){v.deactivate({returnFocus:l.returnFocusOnDeactivate});return}T(l.allowOutsideClick,i)||i.preventDefault()}},K=function(i){var o=I(i),s=g(o,i)>=0;s||o instanceof Document?s&&(r.mostRecentlyFocusedNode=o):(i.stopImmediatePropagation(),x(r.mostRecentlyFocusedNode||P()))},ge=function(i){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=I(i);k();var u=null;if(r.tabbableGroups.length>0){var d=g(s,i),p=d>=0?r.containerGroups[d]:void 0;if(d<0)o?u=r.tabbableGroups[r.tabbableGroups.length-1].lastTabbableNode:u=r.tabbableGroups[0].firstTabbableNode;else if(o){var b=Z(r.tabbableGroups,function(M){var R=M.firstTabbableNode;return s===R});if(b<0&&(p.container===s||N(s,l.tabbableOptions)&&!A(s,l.tabbableOptions)&&!p.nextTabbableNode(s,!1))&&(b=d),b>=0){var y=b===0?r.tabbableGroups.length-1:b-1,ye=r.tabbableGroups[y];u=ye.lastTabbableNode}else O(i)||(u=p.nextTabbableNode(s,!1))}else{var C=Z(r.tabbableGroups,function(M){var R=M.lastTabbableNode;return s===R});if(C<0&&(p.container===s||N(s,l.tabbableOptions)&&!A(s,l.tabbableOptions)&&!p.nextTabbableNode(s))&&(C=d),C>=0){var we=C===r.tabbableGroups.length-1?0:C+1,xe=r.tabbableGroups[we];u=xe.firstTabbableNode}else O(i)||(u=p.nextTabbableNode(s))}}else u=w("fallbackFocus");u&&(O(i)&&i.preventDefault(),x(u))},U=function(i){if(Je(i)&&T(l.escapeDeactivates,i)!==!1){i.preventDefault(),v.deactivate();return}(l.isKeyForward(i)||l.isKeyBackward(i))&&ge(i,l.isKeyBackward(i))},$=function(i){var o=I(i);g(o,i)>=0||T(l.clickOutsideDeactivates,i)||T(l.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},j=function(){if(r.active)return W.activateTrap(c,v),r.delayInitialFocusTimer=l.delayInitialFocus?Q(function(){x(P())}):x(P()),a.addEventListener("focusin",K,!0),a.addEventListener("mousedown",B,{capture:!0,passive:!1}),a.addEventListener("touchstart",B,{capture:!0,passive:!1}),a.addEventListener("click",$,{capture:!0,passive:!1}),a.addEventListener("keydown",U,{capture:!0,passive:!1}),v},G=function(){if(r.active)return a.removeEventListener("focusin",K,!0),a.removeEventListener("mousedown",B,!0),a.removeEventListener("touchstart",B,!0),a.removeEventListener("click",$,!0),a.removeEventListener("keydown",U,!0),v},Ee=function(i){var o=i.some(function(s){var u=Array.from(s.removedNodes);return u.some(function(d){return d===r.mostRecentlyFocusedNode})});o&&x(P())},L=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Ee):void 0,D=function(){L&&(L.disconnect(),r.active&&!r.paused&&r.containers.map(function(i){L.observe(i,{subtree:!0,childList:!0})}))};return v={get active(){return r.active},get paused(){return r.paused},activate:function(i){if(r.active)return this;var o=h(i,"onActivate"),s=h(i,"onPostActivate"),u=h(i,"checkCanFocusTrap");u||k(),r.active=!0,r.paused=!1,r.nodeFocusedBeforeActivation=a.activeElement,o==null||o();var d=function(){u&&k(),j(),D(),s==null||s()};return u?(u(r.containers.concat()).then(d,d),this):(d(),this)},deactivate:function(i){if(!r.active)return this;var o=J({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},i);clearTimeout(r.delayInitialFocusTimer),r.delayInitialFocusTimer=void 0,G(),r.active=!1,r.paused=!1,D(),W.deactivateTrap(c,v);var s=h(o,"onDeactivate"),u=h(o,"onPostDeactivate"),d=h(o,"checkCanReturnFocus"),p=h(o,"returnFocus","returnFocusOnDeactivate");s==null||s();var b=function(){Q(function(){p&&x(z(r.nodeFocusedBeforeActivation)),u==null||u()})};return p&&d?(d(z(r.nodeFocusedBeforeActivation)).then(b,b),this):(b(),this)},pause:function(i){if(r.paused||!r.active)return this;var o=h(i,"onPause"),s=h(i,"onPostPause");return r.paused=!0,o==null||o(),G(),D(),s==null||s(),this},unpause:function(i){if(!r.paused||!r.active)return this;var o=h(i,"onUnpause"),s=h(i,"onPostUnpause");return r.paused=!1,o==null||o(),k(),j(),D(),s==null||s(),this},updateContainerElements:function(i){var o=[].concat(i).filter(Boolean);return r.containers=o.map(function(s){return typeof s=="string"?a.querySelector(s):s}),r.active&&k(),D(),this}},v.updateContainerElements(e),v};const tt=[];function nt(t,e){const{el:n}=t,a=(e==null?void 0:e.focusTrapEl)||n;if(!a)return;const c={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:a,setReturnFocus:l=>(re(l),!1),...e==null?void 0:e.focusTrapOptions,document:n.ownerDocument,tabbableOptions:Pe,trapStack:tt};t.focusTrap=et(a,c)}function ee(t,e){var n;t.focusTrapDisabled||(n=t.focusTrap)==null||n.activate(e)}function H(t,e){var n;(n=t.focusTrap)==null||n.deactivate(e)}function it(t){var e;(e=t.focusTrap)==null||e.updateContainerElements(t.el)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const E={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},at="auto",te="aria-controls",ne="aria-expanded";class ot{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:n}=this,a=e.find(c=>n.has(c));return n.get(a)},this.togglePopovers=e=>{const n=e.composedPath(),a=this.queryPopover(n);a&&!a.triggerDisabled&&(a.open=!a.open),Array.from(this.registeredElements.values()).filter(c=>c!==a&&c.autoClose&&c.open&&!n.includes(c)).forEach(c=>c.open=!1)},this.keyHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():me(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{_(e)&&this.togglePopovers(e)}}registerElement(e,n){this.registeredElementCount++,this.registeredElements.set(e,n),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}}const rt="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}",ie=new ot,st=se(class extends ce{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=F(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=F(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=F(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=F(this,"calcitePopoverOpen",6),this.mutationObserver=je("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${le()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=t=>{this.transitionEl=t,q(this)},this.setFilteredPlacements=()=>{const{el:t,flipPlacements:e}=this;this.filteredFlipPlacements=e?Ae(e,t):null},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),Ie(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:n,effectiveReferenceElement:a}=this;t&&n&&!a&&console.warn(`${e.tagName}: reference-element id "${n}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:t,open:e}=this;t&&"setAttribute"in t&&t.setAttribute(ne,S(e))},this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(te,e),ie.registerElement(t,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&(t.removeAttribute(te),t.removeAttribute(ne)),ie.unregisterElement(t))},this.hide=()=>{this.open=!1},this.storeArrowEl=t=>{this.arrowEl=t,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=Le,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=at,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handlefocusTrapDisabled(t){this.open&&(t?H(this):ee(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){t&&this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){Se(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),_e(this),ze(this),q(this),this.setUpReferenceElement(this.hasLoaded),nt(this)}async componentWillLoad(){await Ke(this),ue(this)}componentDidLoad(){de(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),Ue(this),$e(this),Me(this,this.effectiveReferenceElement,this.el),Re(this),H(this)}async reposition(t=!1){const{el:e,effectiveReferenceElement:n,placement:a,overlayPositioning:c,flipDisabled:l,filteredFlipPlacements:r,offsetDistance:v,offsetSkidding:h,arrowEl:g}=this;return Ne(this,{floatingEl:e,referenceEl:n,overlayPositioning:c,placement:a,flipDisabled:l,flipPlacements:r,offsetDistance:v,offsetSkidding:h,arrowEl:g,type:"popover"},t)}async setFocus(){await fe(this),Ce(this.el),Te(this.el)}async updateFocusTrapElements(){it(this)}getReferenceElement(){const{referenceElement:t,el:e}=this;return(typeof t=="string"?Fe(e,{id:t}):t)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),ee(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),H(this)}renderCloseButton(){const{messages:t,closable:e}=this;return e?m("div",{class:E.closeButtonContainer,key:E.closeButtonContainer},m("calcite-action",{appearance:"transparent",class:E.closeButton,onClick:this.hide,scale:this.scale,text:t.close,ref:n=>this.closeButtonEl=n},m("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":this.scale}))):null}renderHeader(){const{heading:t,headingLevel:e}=this,n=t?m(Ge,{class:E.heading,level:e},t):null;return n?m("div",{class:E.header,key:E.header},n,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:e,label:n,open:a,pointerDisabled:c,floatingLayout:l}=this,r=t&&a,v=!r,h=c?null:m(He,{floatingLayout:l,key:"floating-arrow",ref:this.storeArrowEl});return m(Oe,{"aria-hidden":S(v),"aria-label":n,"aria-live":"polite","calcite-hydrated-hidden":v,id:this.getId(),role:"dialog"},m("div",{class:{[Y.animation]:!0,[Y.animationActive]:r},ref:this.setTransitionEl},h,m("div",{class:{[E.hasHeader]:!!e,[E.container]:!0}},this.renderHeader(),m("div",{class:E.content},m("slot",null)),e?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handlefocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return rt}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]}]);function be(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,st);break;case"calcite-action":customElements.get(e)||pe();break;case"calcite-icon":customElements.get(e)||he();break;case"calcite-loader":customElements.get(e)||ve();break}})}be();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.3
 */const ae={menu:"menu",defaultTrigger:"default-trigger"},oe={tooltip:"tooltip",trigger:"trigger"},ct={menu:"ellipsis"},lt=`@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host{box-sizing:border-box;display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}`,ut=["ArrowUp","ArrowDown","End","Home"],dt=se(class extends ce{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=F(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${le()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:n,label:a}=this,c=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==c&&(this.disconnectMenuButtonEl(),this.menuButtonEl=c,this.setTooltipReferenceElement(),c&&(c.active=n,c.setAttribute("aria-controls",e),c.setAttribute("aria-expanded",S(n)),c.setAttribute("aria-haspopup","true"),c.id||(c.id=t),c.label||(c.label=a),c.text||(c.text=a),c.addEventListener("pointerdown",this.menuButtonClick),c.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;t&&(t.removeEventListener("pointerdown",this.menuButtonClick),t.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-action"));this.slottedMenuButtonEl=e[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=t=>{_(t)&&this.toggleOpen()},this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-tooltip"));this.tooltipEl=e[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:n,open:a}=this;t&&(t.referenceElement=!e&&!a?n:null)},this.updateAction=(t,e)=>{const{guid:n,activeMenuItemIndex:a}=this,c=`${n}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=c),t.active=e===a},this.updateActions=t=>{t==null||t.forEach(this.updateAction)},this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-action"));this.actionElements=e},this.menuButtonKeyDown=t=>{const{key:e}=t,{actionElements:n,activeMenuItemIndex:a,open:c}=this;if(n.length){if(me(e)){if(t.preventDefault(),!c){this.toggleOpen();return}const l=n[a];l?l.click():this.toggleOpen(!1)}if(e==="Tab"){this.open=!1;return}if(e==="Escape"){this.toggleOpen(!1),t.preventDefault();return}this.handleActionNavigation(t,e,n)}},this.handleActionNavigation=(t,e,n)=>{if(!this.isValidKey(e,ut))return;if(t.preventDefault(),!this.open){this.toggleOpen(),(e==="Home"||e==="ArrowDown")&&(this.activeMenuItemIndex=0),(e==="End"||e==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}e==="Home"&&(this.activeMenuItemIndex=0),e==="End"&&(this.activeMenuItemIndex=n.length-1);const a=this.activeMenuItemIndex;e==="ArrowUp"&&(this.activeMenuItemIndex=V(Math.max(a-1,-1),n.length)),e==="ArrowDown"&&(this.activeMenuItemIndex=V(a+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=t},this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}componentWillLoad(){ue(this)}componentDidLoad(){de(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=t),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}closeCalciteActionMenuOnClick(t){!_(t)||t.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await fe(this),re(this.menuButtonEl)}renderMenuButton(){const{label:t,scale:e,expanded:n}=this;return m("slot",{name:oe.trigger,onSlotchange:this.setMenuButtonEl},m("calcite-action",{class:ae.defaultTrigger,icon:ct.menu,scale:e,text:t,textEnabled:n,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:n,menuId:a,menuButtonEl:c,label:l,placement:r,overlayPositioning:v,flipPlacements:h}=this,g=t[e],w=(g==null?void 0:g.id)||null;return m("calcite-popover",{flipPlacements:h,focusTrapDisabled:!0,label:l,offsetDistance:0,open:n,overlayPositioning:v,placement:r,pointerDisabled:!0,referenceElement:c},m("div",{"aria-activedescendant":w,"aria-labelledby":c==null?void 0:c.id,class:ae.menu,id:a,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},m("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return m(Be,null,this.renderMenuButton(),this.renderMenuItems(),m("slot",{name:oe.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find(n=>n===t)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return lt}},[1,"calcite-action-menu",{expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},[[9,"pointerdown","closeCalciteActionMenuOnClick"]]]);function ft(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,dt);break;case"calcite-action":customElements.get(e)||pe();break;case"calcite-icon":customElements.get(e)||he();break;case"calcite-loader":customElements.get(e)||ve();break;case"calcite-popover":customElements.get(e)||be();break}})}ft();export{Ge as H,oe as S,ft as a,be as d};
