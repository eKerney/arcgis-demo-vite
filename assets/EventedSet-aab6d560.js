import{cd as h,cJ as r,cK as i}from"./index-4e7cdbf0.js";class d extends h{constructor(){super(...arguments),this._set=new Set}clear(){if(this._set.size>0){const e=this.toArray();this._set.clear(),this.emit("after-changes",{type:r.REMOVE}),this.emit("change",{added:[],removed:e})}}get length(){return this._set.size}addMany(e){if(e.length!==0){for(const t of e)this._set.add(t);this.emit("after-changes",{type:r.ADD}),this.emit("change",{added:e,removed:[]})}}remove(e){this._set.delete(e)&&(this.emit("after-changes",{type:r.REMOVE}),this.emit("change",{added:[],removed:[e]}))}removeMany(e){const t=[];for(const s of e)this._set.delete(s)&&t.push(s);t.length>0&&(this.emit("after-changes",{type:r.REMOVE}),this.emit("change",{added:[],removed:t}))}toArray(){return[...this._set]}find(e){let t;return i(this._set,s=>!!e(s)&&(t=s,!0)),t}forEach(e){this._set.forEach(t=>e(t))}}export{d as r};
