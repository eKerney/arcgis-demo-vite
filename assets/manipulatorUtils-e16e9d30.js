import{ec as l}from"./index-4e7cdbf0.js";function m(e,o=l(e)){return o.mode!=="on-the-ground"&&!(e.geometry==null||!e.geometry.hasZ)}function a(e,o){let r=null;const t=e.events.on("grab-changed",n=>{r!=null&&(r.remove(),r=null),n.action==="start"&&(r=e.disableDisplay()),o&&o(n)});return{remove(){r!=null&&r.remove(),t.remove()}}}export{m as n,a as o};
