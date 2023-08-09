import{jM as P,jN as m,jO as v,c_ as f,jP as u,jQ as y,jR as O,jS as A,jT as $,jm as i,jU as _,jV as S,jW as p,jX as C,jY as g,ai as o,jZ as n,j_ as d,j$ as E,aA as x,k0 as j,k1 as k,k2 as b,k3 as w,k4 as N,k5 as M,k6 as D,k7 as R,k8 as I,k9 as F,ka as L,kb as U,kc as W,kd as B,ke as G,kf as z,kg as H,jn as c,kh as Q,ki as V,kj as q,kk as X}from"./index-71d9419a.js";function Y(a){const e=new P,{vertex:t,fragment:s}=e;return m(t,a),e.include(v,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(O,a),s.uniforms.add(new A("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===i.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(_)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(S),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(_)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===p.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const Z=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:"Module"}));class h extends k{initializeProgram(e){return new b(e.rctx,h.shader.get().build(this.configuration),w)}_setPipelineState(e,t){const s=this.configuration,l=e===p.NONE,T=e===p.FrontFace;return N({blending:s.output!==i.Color&&s.output!==i.Alpha||!s.transparent?null:l?J:M(e),culling:D(s.cullFace),depthTest:{func:R(e)},depthWrite:l?s.writeDepth?I:null:F(e),colorWrite:L,stencilWrite:s.hasOccludees?U:null,stencilTest:s.hasOccludees?t?W:B:null,polygonOffset:l||T?null:G(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new E(Z,()=>x(()=>import("./ImageMaterial.glsl-b53d61c0.js"),["assets/ImageMaterial.glsl-b53d61c0.js","assets/index-71d9419a.js","assets/index-aa0eb131.css"]));const J=C(g.ONE,g.ONE_MINUS_SRC_ALPHA);class r extends j{constructor(){super(...arguments),this.output=i.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:i.COUNT})],r.prototype,"output",void 0),o([n({count:d.COUNT})],r.prototype,"cullFace",void 0),o([n()],r.prototype,"hasSlicePlane",void 0),o([n()],r.prototype,"transparent",void 0),o([n()],r.prototype,"enableOffset",void 0),o([n()],r.prototype,"writeDepth",void 0),o([n()],r.prototype,"hasOccludees",void 0),o([n({count:p.COUNT})],r.prototype,"transparencyPassType",void 0),o([n()],r.prototype,"hasMultipassTerrain",void 0),o([n()],r.prototype,"cullAboveGround",void 0);class ae extends z{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<H,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===i.Color||t===i.Alpha||t===i.Highlight?e===c.DRAPED_MATERIAL?!0:t===i.Highlight?e===c.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?c.TRANSPARENT_MATERIAL:c.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:c.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new K(e)}createBufferWriter(){return new Q(V)}}class K extends q{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==i.Color&&this._output!==i.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends X{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,Y as v};
