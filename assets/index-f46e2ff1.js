(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function ut(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ct(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){if(this instanceof n){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:function(){return e[n]}})}),r}var we={},$e={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=Symbol.for("react.element"),ft=Symbol.for("react.portal"),ht=Symbol.for("react.fragment"),dt=Symbol.for("react.strict_mode"),pt=Symbol.for("react.profiler"),mt=Symbol.for("react.provider"),yt=Symbol.for("react.context"),vt=Symbol.for("react.forward_ref"),gt=Symbol.for("react.suspense"),wt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Re=Symbol.iterator;function xt(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var je={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qe=Object.assign,Le={};function G(e,t,r){this.props=e,this.context=t,this.refs=Le,this.updater=r||je}G.prototype.isReactComponent={};G.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};G.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ge(){}Ge.prototype=G.prototype;function be(e,t,r){this.props=e,this.context=t,this.refs=Le,this.updater=r||je}var xe=be.prototype=new Ge;xe.constructor=be;qe(xe,G.prototype);xe.isPureReactComponent=!0;var Oe=Array.isArray,He=Object.prototype.hasOwnProperty,Se={current:null},Ye={key:!0,ref:!0,__self:!0,__source:!0};function Xe(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)He.call(t,n)&&!Ye.hasOwnProperty(n)&&(i[n]=t[n]);var a=arguments.length-2;if(a===1)i.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(n in a=e.defaultProps,a)i[n]===void 0&&(i[n]=a[n]);return{$$typeof:Q,type:e,key:o,ref:s,props:i,_owner:Se.current}}function St(e,t){return{$$typeof:Q,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Te(e){return typeof e=="object"&&e!==null&&e.$$typeof===Q}function Tt(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ve=/\/+/g;function le(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Tt(""+e.key):t.toString(36)}function re(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Q:case ft:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+le(s,0):n,Oe(i)?(r="",e!=null&&(r=e.replace(Ve,"$&/")+"/"),re(i,t,r,"",function(c){return c})):i!=null&&(Te(i)&&(i=St(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Ve,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Oe(e))for(var a=0;a<e.length;a++){o=e[a];var l=n+le(o,a);s+=re(o,t,r,l,i)}else if(l=xt(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=n+le(o,a++),s+=re(o,t,r,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function J(e,t,r){if(e==null)return e;var n=[],i=0;return re(e,n,"","",function(o){return t.call(r,o,i++)}),n}function _t(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var M={current:null},ne={transition:null},Ct={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:ne,ReactCurrentOwner:Se};b.Children={map:J,forEach:function(e,t,r){J(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return J(e,function(){t++}),t},toArray:function(e){return J(e,function(t){return t})||[]},only:function(e){if(!Te(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=G;b.Fragment=ht;b.Profiler=pt;b.PureComponent=be;b.StrictMode=dt;b.Suspense=gt;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ct;b.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=qe({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Se.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)He.call(t,l)&&!Ye.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];n.children=a}return{$$typeof:Q,type:e.type,key:i,ref:o,props:n,_owner:s}};b.createContext=function(e){return e={$$typeof:yt,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mt,_context:e},e.Consumer=e};b.createElement=Xe;b.createFactory=function(e){var t=Xe.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:vt,render:e}};b.isValidElement=Te;b.lazy=function(e){return{$$typeof:bt,_payload:{_status:-1,_result:e},_init:_t}};b.memo=function(e,t){return{$$typeof:wt,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=ne.transition;ne.transition={};try{e()}finally{ne.transition=t}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(e,t){return M.current.useCallback(e,t)};b.useContext=function(e){return M.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return M.current.useDeferredValue(e)};b.useEffect=function(e,t){return M.current.useEffect(e,t)};b.useId=function(){return M.current.useId()};b.useImperativeHandle=function(e,t,r){return M.current.useImperativeHandle(e,t,r)};b.useInsertionEffect=function(e,t){return M.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return M.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return M.current.useMemo(e,t)};b.useReducer=function(e,t,r){return M.current.useReducer(e,t,r)};b.useRef=function(e){return M.current.useRef(e)};b.useState=function(e){return M.current.useState(e)};b.useSyncExternalStore=function(e,t,r){return M.current.useSyncExternalStore(e,t,r)};b.useTransition=function(){return M.current.useTransition()};b.version="18.2.0";$e.exports=b;var C=$e.exports;const Pe=ut(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Et=C,Mt=Symbol.for("react.element"),Rt=Symbol.for("react.fragment"),Ot=Object.prototype.hasOwnProperty,Vt=Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pt={key:!0,ref:!0,__self:!0,__source:!0};function Ke(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Ot.call(t,n)&&!Pt.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Mt,type:e,key:o,ref:s,props:i,_owner:Vt.current}}we.Fragment=Rt;we.jsx=Ke;we.jsxs=Ke;Number.prototype.clamp=function(e,t){return Math.min(Math.max(this,e),t)};function Qe(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}const zt=e=>document.querySelector(e),Nt=e=>typeof e=="number"?"#"+("00000"+e.toString(16)).slice(-6):e;function Je(e){for(;e.children&&e.children.length>0;)Je(e.children[0]),e.remove(e.children[0]);e.geometry&&e.geometry.dispose(),e.material&&(Object.keys(e.material).forEach(t=>{e.material[t]&&e.material[t]!==null&&typeof e.material[t].dispose=="function"&&e.material[t].dispose()}),e.material.dispose())}const se=typeof window=="object";let Z=se&&window.THREE||{};se&&!window.VANTA&&(window.VANTA={});const I=se&&window.VANTA||{};I.register=(e,t)=>I[e]=r=>new t(r);I.version="0.5.24";const ue=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};I.VantaBase=class{constructor(t={}){if(!se)return!1;I.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const r=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},r),(t instanceof HTMLElement||typeof t=="string")&&(t={el:t}),Object.assign(this.options,t),this.options.THREE&&(Z=this.options.THREE),this.el=this.options.el,this.el==null)ue('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const i=this.el;if(this.el=zt(i),!this.el){ue("Cannot find element",i);return}}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(i){ue("Init error",i),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Nt(this.options.backgroundColor));return}this.initMouse(),this.resize(),this.animationLoop();const n=window.addEventListener;n("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(n("scroll",this.windowMouseMoveWrapper),n("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(n("touchstart",this.windowTouchWrapper),n("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&n("deviceorientation",this.windowGyroWrapper)}setOptions(t={}){Object.assign(this.options,t),this.triggerMouseMove()}prepareEl(){let t,r;if(typeof Node<"u"&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const n=this.el.childNodes[t];if(n.nodeType===Node.TEXT_NODE){const i=document.createElement("span");i.textContent=n.textContent,n.parentElement.insertBefore(i,n),n.remove()}}for(t=0;t<this.el.children.length;t++)r=this.el.children[t],getComputedStyle(r).position==="static"&&(r.style.position="relative"),getComputedStyle(r).zIndex==="auto"&&(r.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(t,r={}){Object.assign(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(t.style,r),t.classList.add("vanta-canvas")}initThree(){if(!Z.WebGLRenderer){console.warn("[VANTA] No THREE defined on window");return}this.renderer=new Z.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new Z.Scene}getCanvasElement(){if(this.renderer)return this.renderer.domElement;if(this.p5renderer)return this.p5renderer.canvas}getCanvasRect(){const t=this.getCanvasElement();return t?t.getBoundingClientRect():!1}windowMouseMoveWrapper(t){const r=this.getCanvasRect();if(!r)return!1;const n=t.clientX-r.left,i=t.clientY-r.top;n>=0&&i>=0&&n<=r.width&&i<=r.height&&(this.mouseX=n,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(n,i))}windowTouchWrapper(t){const r=this.getCanvasRect();if(!r)return!1;if(t.touches.length===1){const n=t.touches[0].clientX-r.left,i=t.touches[0].clientY-r.top;n>=0&&i>=0&&n<=r.width&&i<=r.height&&(this.mouseX=n,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(n,i))}}windowGyroWrapper(t){const r=this.getCanvasRect();if(!r)return!1;const n=Math.round(t.alpha*2)-r.left,i=Math.round(t.beta*2)-r.top;n>=0&&i>=0&&n<=r.width&&i<=r.height&&(this.mouseX=n,this.mouseY=i,this.options.mouseEase||this.triggerMouseMove(n,i))}triggerMouseMove(t,r){t===void 0&&r===void 0&&(this.options.mouseEase?(t=this.mouseEaseX,r=this.mouseEaseY):(t=this.mouseX,r=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=r/this.scale);const n=t/this.width,i=r/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(n,i)}setSize(){this.scale||(this.scale=1),Qe()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,r=this.el.getBoundingClientRect(),n=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,i=r.top+n,o=i-window.innerHeight,s=i+t;return o<=n&&n<=s}animationLoop(){this.t||(this.t=0),this.t2||(this.t2=0);const t=performance.now();if(this.prevNow){let r=(t-this.prevNow)/16.666666666666668;r=Math.max(.2,Math.min(r,5)),this.t+=r,this.t2+=(this.options.speed||1)*r,this.uniforms&&(this.uniforms.iTime.value=this.t2*.016667)}return this.prevNow=t,this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=(this.mouseX-this.mouseEaseX)*.05,this.mouseEaseY+=(this.mouseY-this.mouseEaseY)*.05,this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("deviceorientation",this.windowGyroWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req);const r=this.scene;r&&r.children&&Je(r),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),I.current===this&&(I.current=null)}};const Dt=I.VantaBase,kt=typeof window=="object";let It=kt&&window.THREE,{Camera:ze,ClampToEdgeWrapping:ce,DataTexture:Ne,FloatType:fe,Mesh:De,NearestFilter:X,PlaneBufferGeometry:ke,RGBAFormat:he,Scene:Ie,ShaderMaterial:Ae,WebGLRenderTarget:Ue}=It||{};var At=function(e,t,r,n){n&&({Camera:ze,ClampToEdgeWrapping:ce,DataTexture:Ne,FloatType:fe,Mesh:De,NearestFilter:X,PlaneBufferGeometry:ke,RGBAFormat:he,Scene:Ie,ShaderMaterial:Ae,WebGLRenderTarget:Ue}=n),this.variables=[],this.currentTextureIndex=0;var i=fe,o=new Ie,s=new ze;s.position.z=1;var a={passThruTexture:{value:null}},l=y(p(),a),c=new De(new ke(2,2),l);o.add(c),this.setDataType=function(f){return i=f,this},this.addVariable=function(f,d,m){var w=this.createShaderMaterial(d),v={name:f,initialValueTexture:m,material:w,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:X,magFilter:X};return this.variables.push(v),v},this.setVariableDependencies=function(f,d){f.dependencies=d},this.init=function(){if(!r.capabilities.isWebGL2&&!r.extensions.get("OES_texture_float"))return"No OES_texture_float support for float textures.";if(r.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(var f=0;f<this.variables.length;f++){var d=this.variables[f];d.renderTargets[0]=this.createRenderTarget(e,t,d.wrapS,d.wrapT,d.minFilter,d.magFilter),d.renderTargets[1]=this.createRenderTarget(e,t,d.wrapS,d.wrapT,d.minFilter,d.magFilter),this.renderTexture(d.initialValueTexture,d.renderTargets[0]),this.renderTexture(d.initialValueTexture,d.renderTargets[1]);var m=d.material,w=m.uniforms;if(d.dependencies!==null)for(var v=0;v<d.dependencies.length;v++){var x=d.dependencies[v];if(x.name!==d.name){for(var _=!1,E=0;E<this.variables.length;E++)if(x.name===this.variables[E].name){_=!0;break}if(!_)return"Variable dependency not found. Variable="+d.name+", dependency="+x.name}w[x.name]={value:null},m.fragmentShader=`
uniform sampler2D `+x.name+`;
`+m.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){for(var f=this.currentTextureIndex,d=this.currentTextureIndex===0?1:0,m=0,w=this.variables.length;m<w;m++){var v=this.variables[m];if(v.dependencies!==null)for(var x=v.material.uniforms,_=0,E=v.dependencies.length;_<E;_++){var R=v.dependencies[_];x[R.name].value=R.renderTargets[f].texture}this.doRenderTarget(v.material,v.renderTargets[d])}this.currentTextureIndex=d},this.getCurrentRenderTarget=function(f){return f.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(f){return f.renderTargets[this.currentTextureIndex===0?1:0]};function u(f){f.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=u;function y(f,d){d=d||{};var m=new Ae({uniforms:d,vertexShader:h(),fragmentShader:f});return u(m),m}this.createShaderMaterial=y,this.createRenderTarget=function(f,d,m,w,v,x){f=f||e,d=d||t,m=m||ce,w=w||ce,v=v||X,x=x||X;var _=new Ue(f,d,{wrapS:m,wrapT:w,minFilter:v,magFilter:x,format:he,type:i,stencilBuffer:!1,depthBuffer:!1});return _},this.createTexture=function(){var f=new Float32Array(e*t*4);return new Ne(f,e,t,he,fe)},this.renderTexture=function(f,d){a.passThruTexture.value=f,this.doRenderTarget(l,d),a.passThruTexture.value=null},this.doRenderTarget=function(f,d){var m=r.getRenderTarget();c.material=f,r.setRenderTarget(d),r.render(o,s),c.material=l,r.setRenderTarget(m)};function h(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function p(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}};const Ut=typeof window=="object";let g=Ut&&window.THREE;const de=!Qe();let P=32,ee=P*P;const K=800,pe=K/2,Ft=e=>{const t=new g.BufferGeometry;e.quantity&&(P=Math.pow(2,e.quantity),ee=P*P);const r=ee*3,n=r*3,i=new g.BufferAttribute(new Float32Array(n*3),3),o=new g.BufferAttribute(new Float32Array(n*3),3),s=new g.BufferAttribute(new Float32Array(n*2),2),a=new g.BufferAttribute(new Float32Array(n),1);t.setAttribute||(t.setAttribute=t.addAttribute),t.setAttribute("position",i),t.setAttribute("birdColor",o),t.setAttribute("reference",s),t.setAttribute("birdVertex",a);let l=0;const c=function(){for(let p=0;p<arguments.length;p++)i.array[l++]=arguments[p]},u=e.wingSpan||20,y=e.birdSize||1;for(let p=0;p<ee;p++)c(0,-0,-20*y,0,4*y,-20*y,0,0,30*y),c(0,0,-15*y,-u*y,0,0,0,0,15*y),c(0,0,15*y,u*y,0,0,0,0,-15*y);const h={};for(l=0;l<r*3;l++){const p=~~(l/3),f=p%P/P,d=~~(p/P)/P,m=~~(l/9)/ee,w=m.toString(),v=e.colorMode.indexOf("Gradient")!=-1;let x;!v&&h[w]?x=h[w]:x=e.effect.getNewCol(m),!v&&!h[w]&&(h[w]=x),o.array[l*3+0]=x.r,o.array[l*3+1]=x.g,o.array[l*3+2]=x.b,s.array[l*2]=f,s.array[l*2+1]=d,a.array[l]=l%9}return t.scale(.2,.2,.2)},Bt=(e={})=>{const t=new g.BufferGeometry,r=[];function n(o,s,a){const l=1.5*(e.birdSize||1);r.push(new g.Vector3(o*l,s*l,a*l))}n(5,0,0),n(-5,-1,1),n(-5,0,0),n(-5,-2,-1),n(0,2,-6),n(0,2,6),n(2,0,0),n(-3,0,0),t.setFromPoints(r);const i=[];return i.push(0,2,1),i.push(4,7,6),i.push(5,6,7),t.setIndex(i),t};class Wt{constructor(t){var r=new g.Vector3,n,i=500,o=500,s=200,a,l=100,c=2.5,u=.1,y=t;this.position=new g.Vector3,this.velocity=new g.Vector3,n=new g.Vector3,this.setGoal=function(h){a=h},this.setWorldSize=function(h,p,f){i=h,o=p,s=f},this.run=function(h){r.set(-i,this.position.y,this.position.z),r=this.avoid(r),r.multiplyScalar(5),n.add(r),r.set(i,this.position.y,this.position.z),r=this.avoid(r),r.multiplyScalar(5),n.add(r),r.set(this.position.x,-o,this.position.z),r=this.avoid(r),r.multiplyScalar(5),n.add(r),r.set(this.position.x,o,this.position.z),r=this.avoid(r),r.multiplyScalar(5),n.add(r),r.set(this.position.x,this.position.y,-s),r=this.avoid(r),r.multiplyScalar(5),n.add(r),r.set(this.position.x,this.position.y,s),r=this.avoid(r),r.multiplyScalar(5),n.add(r),Math.random()>.5&&this.flock(h),this.move()},this.flock=function(h){a&&n.add(this.reach(a,.005)),n.add(this.alignment(h)),n.add(this.cohesion(h)),n.add(this.separation(h))},this.move=function(){this.velocity.add(n);var h=this.velocity.length();h>c&&this.velocity.divideScalar(h/c),this.position.add(this.velocity),n.set(0,0,0)},this.checkBounds=function(){this.position.x>i&&(this.position.x=-i),this.position.x<-i&&(this.position.x=i),this.position.y>o&&(this.position.y=-o),this.position.y<-o&&(this.position.y=o),this.position.z>s&&(this.position.z=-s),this.position.z<-s&&(this.position.z=s)},this.avoid=function(h){var p=new g.Vector3;return p.copy(this.position),p.sub(h),p.multiplyScalar(1/this.position.distanceToSquared(h)),p},this.repulse=function(h){var p=this.position.distanceTo(h);if(p<150){var f=new g.Vector3;f.subVectors(this.position,h),f.multiplyScalar(.5/p),n.add(f)}},this.reach=function(h,p){var f=new g.Vector3;return f.subVectors(h,this.position),f.multiplyScalar(p),f},this.alignment=function(h){var p,f=new g.Vector3,d=0,m;const w=l*y.alignment/20;for(var v=0,x=h.length;v<x;v++)Math.random()>.6||(p=h[v],m=p.position.distanceTo(this.position),m>0&&m<=w&&(f.add(p.velocity),d++));if(d>0){f.divideScalar(d);var _=f.length();_>u&&f.divideScalar(_/u)}return f},this.cohesion=function(h){var p,f,d=new g.Vector3,m=new g.Vector3,w=0;const v=l*y.cohesion/20;for(var x=0,_=h.length;x<_;x++)Math.random()>.6||(p=h[x],f=p.position.distanceTo(this.position),f>0&&f<=v&&(d.add(p.position),w++));w>0&&d.divideScalar(w),m.subVectors(d,this.position);var E=m.length();return E>u&&m.divideScalar(E/u),m},this.separation=function(h){var p,f,d=new g.Vector3,m=new g.Vector3;const w=l*y.separation/20;for(var v=0,x=h.length;v<x;v++)Math.random()>.6||(p=h[v],f=p.position.distanceTo(this.position),f>0&&f<=w&&(m.subVectors(this.position,p.position),m.normalize(),m.divideScalar(f),d.add(m)));return d}}}const $t=`uniform float time;
uniform float delta;

void main() {

  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec4 tmpPos = texture2D( texturePosition, uv );
  vec3 position = tmpPos.xyz;
  vec3 velocity = texture2D( textureVelocity, uv ).xyz;

  float phase = tmpPos.w;

  phase = mod( ( phase + delta +
    length( velocity.xz ) * delta * 3. +
    max( velocity.y, 0.0 ) * delta * 6. ), 62.83 );

  gl_FragColor = vec4( position + velocity * delta * 15. , phase );

}`,jt=`uniform float time;
uniform float testing;
uniform float delta; // about 0.016
uniform float separationDistance; // 20
uniform float alignmentDistance; // 40
uniform float cohesionDistance;
uniform float speedLimit;
uniform float freedomFactor;
uniform vec3 predator;

const float width = resolution.x;
const float height = resolution.y;

const float PI = 3.141592653589793;
const float PI_2 = PI * 2.0;
// const float VISION = PI * 0.55;

float zoneRadius = 40.0;
float zoneRadiusSquared = 1600.0;

float separationThresh = 0.45;
float alignmentThresh = 0.65;

const float UPPER_BOUNDS = BOUNDS;
const float LOWER_BOUNDS = -UPPER_BOUNDS;

float rand(vec2 co){
  return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {

  zoneRadius = separationDistance + alignmentDistance + cohesionDistance;
  separationThresh = separationDistance / zoneRadius;
  alignmentThresh = ( separationDistance + alignmentDistance ) / zoneRadius;
  zoneRadiusSquared = zoneRadius * zoneRadius;


  vec2 uv = gl_FragCoord.xy / resolution.xy;
  vec3 birdPosition, birdVelocity;

  vec3 selfPosition = texture2D( texturePosition, uv ).xyz;
  vec3 selfVelocity = texture2D( textureVelocity, uv ).xyz;

  float dist;
  vec3 dir; // direction
  float distSquared;

  float separationSquared = separationDistance * separationDistance;
  float cohesionSquared = cohesionDistance * cohesionDistance;

  float f;
  float percent;

  vec3 velocity = selfVelocity;

  float limit = speedLimit;

  dir = predator * UPPER_BOUNDS - selfPosition;
  dir.z = 0.;
  // dir.z *= 0.6;
  dist = length( dir );
  distSquared = dist * dist;

  float preyRadius = 150.0;
  float preyRadiusSq = preyRadius * preyRadius;

  // move birds away from predator
  if (dist < preyRadius) {

    f = ( distSquared / preyRadiusSq - 1.0 ) * delta * 100.;
    velocity += normalize( dir ) * f;
    limit += 5.0;
  }

  // if (testing == 0.0) {}
  // if ( rand( uv + time ) < freedomFactor ) {}

  // Attract flocks to the center
  vec3 central = vec3( 0., 0., 0. );
  dir = selfPosition - central;
  dist = length( dir );

  dir.y *= 2.5;
  velocity -= normalize( dir ) * delta * 5.;

  for (float y=0.0;y<height;y++) {
    for (float x=0.0;x<width;x++) {

      vec2 ref = vec2( x + 0.5, y + 0.5 ) / resolution.xy;
      birdPosition = texture2D( texturePosition, ref ).xyz;

      dir = birdPosition - selfPosition;
      dist = length(dir);

      if (dist < 0.0001) continue;

      distSquared = dist * dist;

      if (distSquared > zoneRadiusSquared ) continue;

      percent = distSquared / zoneRadiusSquared;

      if ( percent < separationThresh ) { // low

        // Separation - Move apart for comfort
        f = (separationThresh / percent - 1.0) * delta;
        velocity -= normalize(dir) * f;

      } else if ( percent < alignmentThresh ) { // high

        // Alignment - fly the same direction
        float threshDelta = alignmentThresh - separationThresh;
        float adjustedPercent = ( percent - separationThresh ) / threshDelta;

        birdVelocity = texture2D( textureVelocity, ref ).xyz;

        f = ( 0.5 - cos( adjustedPercent * PI_2 ) * 0.5 + 0.5 ) * delta;
        velocity += normalize(birdVelocity) * f;

      } else {

        // Attraction / Cohesion - move closer
        float threshDelta = 1.0 - alignmentThresh;
        float adjustedPercent = ( percent - alignmentThresh ) / threshDelta;

        f = ( 0.5 - ( cos( adjustedPercent * PI_2 ) * -0.5 + 0.5 ) ) * delta;

        velocity += normalize(dir) * f;

      }
    }
  }

  // this make tends to fly around than down or up
  // if (velocity.y > 0.) velocity.y *= (1. - 0.2 * delta);

  // Speed Limits
  if ( length( velocity ) > limit ) {
    velocity = normalize( velocity ) * limit;
  }

  gl_FragColor = vec4( velocity, 1.0 );

}`,qt=`attribute vec2 reference;
attribute float birdVertex;

attribute vec3 birdColor;

uniform sampler2D texturePosition;
uniform sampler2D textureVelocity;

varying vec4 vColor;
varying float z;

uniform float time;
uniform float birdSize;

void main() {

  vec4 tmpPos = texture2D( texturePosition, reference );
  vec3 pos = tmpPos.xyz;
  vec3 velocity = normalize(texture2D( textureVelocity, reference ).xyz);

  vec3 newPosition = position;

  if ( birdVertex == 4.0 || birdVertex == 7.0 ) {
    // flap wings
    newPosition.y = sin( tmpPos.w ) * 5. * birdSize;
  }

  newPosition = mat3( modelMatrix ) * newPosition;

  velocity.z *= -1.;
  float xz = length( velocity.xz );
  float xyz = 1.;
  float x = sqrt( 1. - velocity.y * velocity.y );

  float cosry = velocity.x / xz;
  float sinry = velocity.z / xz;

  float cosrz = x / xyz;
  float sinrz = velocity.y / xyz;

  mat3 maty =  mat3(
    cosry, 0, -sinry,
    0    , 1, 0     ,
    sinry, 0, cosry
  );

  mat3 matz =  mat3(
    cosrz , sinrz, 0,
    -sinrz, cosrz, 0,
    0     , 0    , 1
  );
  newPosition =  maty * matz * newPosition;
  newPosition += pos;
  z = newPosition.z;

  vColor = vec4( birdColor, 1.0 );
  gl_Position = projectionMatrix *  viewMatrix  * vec4( newPosition, 1.0 );
}`,Lt=`varying vec4 vColor;
varying float z;
uniform vec3 color;
void main() {
  // Fake colors for now
  float rr = 0.2 + ( 1000. - z ) / 1000. * vColor.x;
  float gg = 0.2 + ( 1000. - z ) / 1000. * vColor.y;
  float bb = 0.2 + ( 1000. - z ) / 1000. * vColor.z;
  gl_FragColor = vec4( rr, gg, bb, 1. );
}`,Gt=function(e){const t=e.image.data;let r=0;const n=t.length;return(()=>{const i=[];for(;r<n;){const o=Math.random()*K-pe,s=Math.random()*K-pe,a=Math.random()*K-pe;t[r+0]=o,t[r+1]=s,t[r+2]=a,t[r+3]=1,i.push(r+=4)}return i})()},Ht=function(e){const t=e.image.data;let r=0;const n=t.length;return(()=>{const i=[];for(;r<n;){const o=Math.random()-.5,s=Math.random()-.5,a=Math.random()-.5;t[r+0]=o*10,t[r+1]=s*10,t[r+2]=a*10,t[r+3]=1,i.push(r+=4)}return i})()};class Ze extends Dt{static initClass(){this.prototype.defaultOptions={backgroundColor:465199,color1:16711680,color2:53759,colorMode:"varianceGradient",birdSize:1,wingSpan:30,speedLimit:5,separation:20,alignment:20,cohesion:20,quantity:5}}constructor(t){g=t.THREE||g,super(t)}initComputeRenderer(){this.gpuCompute=new At(P,P,this.renderer,g);const t=this.gpuCompute.createTexture(),r=this.gpuCompute.createTexture();Gt(t),Ht(r),this.velocityVariable=this.gpuCompute.addVariable("textureVelocity",jt,r),this.positionVariable=this.gpuCompute.addVariable("texturePosition",$t,t),this.gpuCompute.setVariableDependencies(this.velocityVariable,[this.positionVariable,this.velocityVariable]),this.gpuCompute.setVariableDependencies(this.positionVariable,[this.positionVariable,this.velocityVariable]),this.positionUniforms=this.positionVariable.material.uniforms,this.velocityUniforms=this.velocityVariable.material.uniforms,this.positionUniforms.time={value:0},this.positionUniforms.delta={value:0},this.velocityUniforms.time={value:1},this.velocityUniforms.delta={value:0},this.velocityUniforms.testing={value:1},this.velocityUniforms.separationDistance={value:1},this.velocityUniforms.alignmentDistance={value:1},this.velocityUniforms.cohesionDistance={value:1},this.velocityUniforms.speedLimit={value:1},this.velocityUniforms.freedomFactor={value:1},this.velocityUniforms.predator={value:new g.Vector3},this.velocityVariable.material.defines.BOUNDS=K.toFixed(2),this.velocityVariable.wrapS=g.RepeatWrapping,this.velocityVariable.wrapT=g.RepeatWrapping,this.positionVariable.wrapS=g.RepeatWrapping,this.positionVariable.wrapT=g.RepeatWrapping;const n=this.gpuCompute.init();n!==null&&console.error(n)}initGpgpuBirds(){const t=Object.assign({},this.options,{effect:this}),r=Ft(t);this.birdUniforms={color:{value:new g.Color(16720384)},texturePosition:{value:null},textureVelocity:{value:null},time:{value:1},delta:{value:0},birdSize:{value:this.options.birdSize}};const n=new g.ShaderMaterial({uniforms:this.birdUniforms,vertexShader:qt,fragmentShader:Lt,side:g.DoubleSide}),i=new g.Mesh(r,n);return i.rotation.y=Math.PI/2,i.matrixAutoUpdate=!1,i.updateMatrix(),this.scene.add(i)}getNewCol(t){const r=this.options,n=r.color1!=null?r.color1:4456448,i=r.color2!=null?r.color2:6684672,o=new g.Color(n),s=new g.Color(i),a=r.colorMode.indexOf("Gradient")!=-1;let l,c;if(a?c=Math.random():c=t,r.colorMode.indexOf("variance")==0){const u=(o.r+Math.random()*s.r).clamp(0,1),y=(o.g+Math.random()*s.g).clamp(0,1),h=(o.b+Math.random()*s.b).clamp(0,1);l=new g.Color(u,y,h)}else r.colorMode.indexOf("mix")==0?l=new g.Color(n+c*i):l=o.lerp(s,c);return l}onInit(){this.camera=new g.PerspectiveCamera(75,this.width/this.height,1,3e3),this.camera.position.z=350,this.fog=new g.Fog(16777215,100,1e3),this.mouseX=this.mouseY=0;const t=this.birds=[],r=this.boids=[],n=this.options;let i,o;if(de)try{this.initComputeRenderer(),this.valuesChanger=this.valuesChanger.bind(this),this.valuesChanger(),this.initGpgpuBirds()}catch(c){console.error("[vanta.js] birds init error: ",c)}else{const c=6*Math.pow(2,n.quantity);for(var s=0;s<c;s++){i=r[s]=new Wt(n),i.position.x=Math.random()*400-200,i.position.y=Math.random()*400-200,i.position.z=Math.random()*400-200,i.velocity.x=Math.random()*2-1,i.velocity.y=Math.random()*2-1,i.velocity.z=Math.random()*2-1,i.setWorldSize(500,500,300);const u=n.colorMode.indexOf("Gradient")!=-1,y=Bt(n),h=y.attributes.position.length,p=new g.BufferAttribute(new Float32Array(h),3);if(u)for(var a=0;a<y.index.array.length;a+=3)for(var l=0;l<=2;l++){const f=y.index.array[a+l],d=this.getNewCol();p.array[f*3]=d.r,p.array[f*3+1]=d.g,p.array[f*3+2]=d.b}else{const f=this.getNewCol(s/c);for(var a=0;a<p.array.length;a+=3)p.array[a]=f.r,p.array[a+1]=f.g,p.array[a+2]=f.b}y.setAttribute("color",p),o=t[s]=new g.Mesh(y,new g.MeshBasicMaterial({color:16777215,side:g.DoubleSide,vertexColors:g.VertexColors})),o.phase=Math.floor(Math.random()*62.83),o.position.x=r[s].position.x,o.position.y=r[s].position.y,o.position.z=r[s].position.z,this.scene.add(o)}}}valuesChanger(){this.velocityUniforms&&(this.velocityUniforms.separationDistance.value=this.options.separation,this.velocityUniforms.alignmentDistance.value=this.options.alignment,this.velocityUniforms.speedLimit.value=this.options.speedLimit,this.velocityUniforms.cohesionDistance.value=this.options.cohesion)}onUpdate(){this.now=performance.now(),this.last||(this.last=this.now);let t=(this.now-this.last)/1e3;if(t>1&&(t=1),this.last=this.now,de)this.positionUniforms.time.value=this.now,this.positionUniforms.delta.value=t,this.velocityUniforms.time.value=this.now,this.velocityUniforms.delta.value=t,this.birdUniforms.time.value=this.now,this.birdUniforms.delta.value=t,this.velocityUniforms.predator.value.set(this.mouseX,-this.mouseY,0),this.mouseX=1e4,this.mouseY=1e4,this.gpuCompute.compute(),this.birdUniforms.texturePosition.value=this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture,this.birdUniforms.textureVelocity.value=this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;else{const i=this.birds,o=this.boids;let s,a;for(var r=0,n=i.length;r<n;r++){s=o[r],s.run(o),a=i[r],a.rotation.y=Math.atan2(-s.velocity.z,s.velocity.x),a.rotation.z=Math.asin(s.velocity.y/s.velocity.length()),a.phase=(a.phase+(Math.max(0,a.rotation.z)+.1))%62.83;const l=5*3+1,c=4*3+1;a.geometry.attributes.position.array[l]=a.geometry.attributes.position.array[c]=Math.sin(a.phase)*5*this.options.birdSize,a.geometry.attributes.position.needsUpdate=!0,a.geometry.computeVertexNormals(),a.position.x=o[r].position.x,a.position.y=o[r].position.y,a.position.z=o[r].position.z}}}onMouseMove(t,r){if(this.mouseX=t-.5,this.mouseY=r-.5,!de){const s=this.boids;let a;for(var n=new g.Vector3(this.mouseX*this.width,-this.mouseY*this.height,0),i=0,o=s.length;i<o;i++)a=s[i],n.z=a.position.z,a.repulse(n)}}onDestroy(){}onResize(){}}Ze.initClass();I.register("BIRDS",Ze);var et={exports:{}},Yt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Xt=Yt,Kt=Xt;function tt(){}function it(){}it.resetWarningCache=tt;var Qt=function(){function e(n,i,o,s,a,l){if(l!==Kt){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:it,resetWarningCache:tt};return r.PropTypes=r,r};et.exports=Qt();var rt=et.exports,nt={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var s=typeof o;if(s==="string"||s==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&n.push(a)}}else if(s==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var l in o)t.call(o,l)&&o[l]&&n.push(l)}}}return n.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(nt);var ot=nt.exports,Jt=_e(C),A=_e(rt),Zt=_e(ot);function _e(e){return e&&e.__esModule?e:{default:e}}const ei=({animate:e=!0,className:t="",layout:r="2-columns",lineColor:n="#FFF",children:i})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",n),Jt.default.createElement("div",{className:(0,Zt.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},i));ei.propTypes={children:A.default.oneOfType([A.default.arrayOf(A.default.node),A.default.node]).isRequired,className:A.default.string,animate:A.default.bool,layout:A.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:A.default.string};function me(){return me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},me.apply(this,arguments)}function ti(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ye(e,t)}function ye(e,t){return ye=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},ye(e,t)}function ii(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var ve=new Map,te=new WeakMap,Fe=0,st=void 0;function ri(e){st=e}function ni(e){return e?(te.has(e)||(Fe+=1,te.set(e,Fe.toString())),te.get(e)):"0"}function oi(e){return Object.keys(e).sort().filter(function(t){return e[t]!==void 0}).map(function(t){return t+"_"+(t==="root"?ni(e.root):e[t])}).toString()}function si(e){var t=oi(e),r=ve.get(t);if(!r){var n=new Map,i,o=new IntersectionObserver(function(s){s.forEach(function(a){var l,c=a.isIntersecting&&i.some(function(u){return a.intersectionRatio>=u});e.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=n.get(a.target))==null||l.forEach(function(u){u(c,a)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:n},ve.set(t,r)}return r}function Ce(e,t,r,n){if(r===void 0&&(r={}),n===void 0&&(n=st),typeof window.IntersectionObserver>"u"&&n!==void 0){var i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),function(){}}var o=si(r),s=o.id,a=o.observer,l=o.elements,c=l.get(e)||[];return l.has(e)||l.set(e,c),c.push(t),a.observe(e),function(){c.splice(c.indexOf(t),1),c.length===0&&(l.delete(e),a.unobserve(e)),l.size===0&&(a.disconnect(),ve.delete(s))}}var ai=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function Be(e){return typeof e.children!="function"}var oe=function(e){ti(t,e);function t(n){var i;return i=e.call(this,n)||this,i.node=null,i._unobserveCb=null,i.handleNode=function(o){i.node&&(i.unobserve(),!o&&!i.props.triggerOnce&&!i.props.skip&&i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=o||null,i.observeNode()},i.handleChange=function(o,s){o&&i.props.triggerOnce&&i.unobserve(),Be(i.props)||i.setState({inView:o,entry:s}),i.props.onChange&&i.props.onChange(o,s)},i.state={inView:!!n.initialInView,entry:void 0},i}var r=t.prototype;return r.componentDidUpdate=function(i){(i.rootMargin!==this.props.rootMargin||i.root!==this.props.root||i.threshold!==this.props.threshold||i.skip!==this.props.skip||i.trackVisibility!==this.props.trackVisibility||i.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var i=this.props,o=i.threshold,s=i.root,a=i.rootMargin,l=i.trackVisibility,c=i.delay,u=i.fallbackInView;this._unobserveCb=Ce(this.node,this.handleChange,{threshold:o,root:s,rootMargin:a,trackVisibility:l,delay:c},u)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!Be(this.props)){var i=this.state,o=i.inView,s=i.entry;return this.props.children({inView:o,entry:s,ref:this.handleNode})}var a=this.props,l=a.children,c=a.as,u=ii(a,ai);return C.createElement(c||"div",me({ref:this.handleNode},u),l)},t}(C.Component);oe.displayName="InView";oe.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function li(e){var t=e===void 0?{}:e,r=t.threshold,n=t.delay,i=t.trackVisibility,o=t.rootMargin,s=t.root,a=t.triggerOnce,l=t.skip,c=t.initialInView,u=t.fallbackInView,y=C.useRef(),h=C.useState({inView:!!c}),p=h[0],f=h[1],d=C.useCallback(function(w){y.current!==void 0&&(y.current(),y.current=void 0),!l&&w&&(y.current=Ce(w,function(v,x){f({inView:v,entry:x}),x.isIntersecting&&a&&y.current&&(y.current(),y.current=void 0)},{root:s,rootMargin:o,threshold:r,trackVisibility:i,delay:n},u))},[Array.isArray(r)?r.toString():r,s,o,a,l,i,u,n]);C.useEffect(function(){!y.current&&p.entry&&!a&&!l&&f({inView:!!c})});var m=[d,p.inView,p.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}const ui=Object.freeze(Object.defineProperty({__proto__:null,InView:oe,default:oe,defaultFallbackInView:ri,observe:Ce,useInView:li},Symbol.toStringTag,{value:"Module"})),ci=ct(ui);var U=Ee(C),T=Ee(rt),ie=Ee(ot),fi=ci;function Ee(e){return e&&e.__esModule?e:{default:e}}const hi=({children:e="",className:t="",contentArrowStyle:r=null,contentStyle:n=null,date:i="",dateClassName:o="",icon:s=null,iconClassName:a="",iconOnClick:l=null,onTimelineElementClick:c=null,iconStyle:u=null,id:y="",position:h="",style:p=null,textClassName:f="",intersectionObserverProps:d={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:m=!1})=>U.default.createElement(fi.InView,d,({inView:w,ref:v})=>U.default.createElement("div",{ref:v,id:y,className:(0,ie.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":h==="left","vertical-timeline-element--right":h==="right","vertical-timeline-element--no-children":e===""}),style:p},U.default.createElement(U.default.Fragment,null,U.default.createElement("span",{style:u,onClick:l,className:(0,ie.default)(a,"vertical-timeline-element-icon",{"bounce-in":w||m,"is-hidden":!(w||m)})},s),U.default.createElement("div",{style:n,onClick:c,className:(0,ie.default)(f,"vertical-timeline-element-content",{"bounce-in":w||m,"is-hidden":!(w||m)})},U.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,U.default.createElement("span",{className:(0,ie.default)(o,"vertical-timeline-element-date")},i)))));hi.propTypes={children:T.default.oneOfType([T.default.arrayOf(T.default.node),T.default.node]),className:T.default.string,contentArrowStyle:T.default.shape({}),contentStyle:T.default.shape({}),date:T.default.node,dateClassName:T.default.string,icon:T.default.element,iconClassName:T.default.string,iconStyle:T.default.shape({}),iconOnClick:T.default.func,onTimelineElementClick:T.default.func,id:T.default.string,position:T.default.string,style:T.default.shape({}),textClassName:T.default.string,visible:T.default.bool,intersectionObserverProps:T.default.shape({root:T.default.object,rootMargin:T.default.string,threshold:T.default.number,triggerOnce:T.default.bool})};function di(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var pi=C;di(pi);function mi(e,t){t===void 0&&(t={});var r=t.insertAt;if(!(!e||typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var yi=`.scroll-to-top {
  background-color: white;
  right: 40px;
  bottom: 40px;
  position: fixed;
  z-index: 2;
  cursor: pointer;
  border-radius: 7px;
  width: 40px;
  height: 40px;
  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);
  border: none;
}

.scroll-to-top:active {
  transform: matrix(0.95, 0, 0, 0.95, 0, 0);
}
`;mi(yi);function ae(e,t,r,n){return new(r||(r=Promise))(function(i,o){function s(c){try{l(n.next(c))}catch(u){o(u)}}function a(c){try{l(n.throw(c))}catch(u){o(u)}}function l(c){var u;c.done?i(c.value):(u=c.value,u instanceof r?u:new r(function(y){y(u)})).then(s,a)}l((n=n.apply(e,t||[])).next())})}function F(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,n=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!((i=i.length>0&&i[i.length-1])||u[0]!==6&&u[0]!==2)){s=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){s.label=u[1];break}if(u[0]===6&&s.label<i[1]){s.label=i[1],i=u;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(u);break}i[2]&&s.ops.pop(),s.trys.pop();continue}u=t.call(e,s)}catch(y){u=[6,y],n=0}finally{r=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([l,c])}}}function ge(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function N(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n,i,o=r.call(e),s=[];try{for(;(t===void 0||t-- >0)&&!(n=o.next()).done;)s.push(n.value)}catch(a){i={error:a}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}function q(e,t,r){if(r||arguments.length===2)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}function We(e,t,r,n){for(var i=[],o=4;o<arguments.length;o++)i[o-4]=arguments[o];return ae(this,void 0,void 0,function(){var s,a,l,c,u,y;return F(this,function(h){switch(h.label){case 0:h.trys.push([0,12,13,14]),s=ge(i),a=s.next(),h.label=1;case 1:if(a.done)return[3,11];switch(l=a.value,typeof l){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,vi(e,l,t,r,n)];case 3:return h.sent(),[3,10];case 4:return[4,at(l)];case 5:return h.sent(),[3,10];case 6:return[4,l.apply(void 0,q([e,t,r,n],N(i),!1))];case 7:return h.sent(),[3,10];case 8:return[4,l];case 9:h.sent(),h.label=10;case 10:return a=s.next(),[3,1];case 11:return[3,14];case 12:return c=h.sent(),u={error:c},[3,14];case 13:try{a&&!a.done&&(y=s.return)&&y.call(s)}finally{if(u)throw u.error}return[7];case 14:return[2]}})})}function vi(e,t,r,n,i){return ae(this,void 0,void 0,function(){var o;return F(this,function(s){switch(s.label){case 0:return o=function(a,l){var c=N(l).slice(0);return q(q([],N(a),!1),[NaN],!1).findIndex(function(u,y){return c[y]!==u})}(e.textContent,t),[4,gi(e,q(q([],N(bi(e.textContent,o)),!1),N(wi(t,o)),!1),r,n,i)];case 1:return s.sent(),[2]}})})}function at(e){return ae(this,void 0,void 0,function(){return F(this,function(t){switch(t.label){case 0:return[4,new Promise(function(r){return setTimeout(r,e)})];case 1:return t.sent(),[2]}})})}function gi(e,t,r,n,i){return ae(this,void 0,void 0,function(){var o,s,a,l,c,u,y,h,p,f,d,m,w;return F(this,function(v){switch(v.label){case 0:if(o=t,i){for(s=0,a=1;a<t.length;a++)if(l=N([t[a-1],t[a]],2),c=l[0],(u=l[1]).length>c.length||u===""){s=a;break}o=t.slice(s,t.length)}v.label=1;case 1:v.trys.push([1,6,7,8]),y=ge(function(x){var _,E,R,B,W,$,H;return F(this,function(D){switch(D.label){case 0:_=function(Y){return F(this,function(j){switch(j.label){case 0:return[4,{op:function(L){return requestAnimationFrame(function(){return L.textContent=Y})},opCode:function(L){return Y===""||L.textContent.length>Y.length?"DELETE":"WRITING"}}];case 1:return j.sent(),[2]}})},D.label=1;case 1:D.trys.push([1,6,7,8]),E=ge(x),R=E.next(),D.label=2;case 2:return R.done?[3,5]:(B=R.value,[5,_(B)]);case 3:D.sent(),D.label=4;case 4:return R=E.next(),[3,2];case 5:return[3,8];case 6:return W=D.sent(),$={error:W},[3,8];case 7:try{R&&!R.done&&(H=E.return)&&H.call(E)}finally{if($)throw $.error}return[7];case 8:return[2]}})}(o)),h=y.next(),v.label=2;case 2:return h.done?[3,5]:(p=h.value,f=p.opCode(e)==="WRITING"?r+r*(Math.random()-.5):n+n*(Math.random()-.5),p.op(e),[4,at(f)]);case 3:v.sent(),v.label=4;case 4:return h=y.next(),[3,2];case 5:return[3,8];case 6:return d=v.sent(),m={error:d},[3,8];case 7:try{h&&!h.done&&(w=y.return)&&w.call(y)}finally{if(m)throw m.error}return[7];case 8:return[2]}})})}function wi(e,t,r){var n=N(e).slice(0);return t===void 0&&(t=0),r===void 0&&(r=n.length),F(this,function(i){switch(i.label){case 0:return t<r?[4,n.slice(0,++t).join("")]:[3,2];case 1:return i.sent(),[3,0];case 2:return[2]}})}function bi(e,t,r){var n=N(e).slice(0);return t===void 0&&(t=0),r===void 0&&(r=n.length),F(this,function(i){switch(i.label){case 0:return r>t?[4,n.slice(0,--r).join("")]:[3,2];case 1:return i.sent(),[3,0];case 2:return[2]}})}var xi="index-module_type__E-SaG";(function(e,t){t===void 0&&(t={});var r=t.insertAt;if(e&&typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",r==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);C.memo(C.forwardRef(function(e,t){var r=e.sequence,n=e.repeat,i=e.className,o=e.speed,s=o===void 0?40:o,a=e.deletionSpeed,l=e.omitDeletionAnimation,c=l!==void 0&&l,u=e.preRenderFirstString,y=u!==void 0&&u,h=e.wrapper,p=h===void 0?"span":h,f=e.cursor,d=f===void 0||f,m=e.style,w=function(S,O){var z={};for(var V in S)Object.prototype.hasOwnProperty.call(S,V)&&O.indexOf(V)<0&&(z[V]=S[V]);if(S!=null&&typeof Object.getOwnPropertySymbols=="function"){var k=0;for(V=Object.getOwnPropertySymbols(S);k<V.length;k++)O.indexOf(V[k])<0&&Object.prototype.propertyIsEnumerable.call(S,V[k])&&(z[V[k]]=S[V[k]])}return z}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","cursor","style"]),v=w["aria-label"],x=w["aria-hidden"];a||(a=s);var _=new Array(2).fill(40);[s,a].forEach(function(S,O){switch(typeof S){case"number":_[O]=Math.abs(S-100);break;case"object":var z=S,V=z.type,k=z.value;if(typeof k!="number")break;V==="keyStrokeDelayInMs"&&(_[O]=k)}});var E,R,B,W,$,H,D=_[0],Y=_[1],j=function(S,O){O===void 0&&(O=null);var z=C.useRef(O);return C.useEffect(function(){S&&(typeof S=="function"?S(z.current):S.current=z.current)},[S]),z}(t),L=xi;E=i?"".concat(d?L+" ":"").concat(i):d?L:"",R=C.useRef(function(){var S,O=r;return n===1/0?S=We:typeof n=="number"&&(O=Array(1+n).fill(r).flat()),We.apply(void 0,q(q([j.current,D,Y,c],N(O),!1),[S],!1)),function(){j.current}}),B=C.useRef(),W=C.useRef(!1),$=C.useRef(!1),H=N(C.useState(0),2)[1],W.current&&($.current=!0),C.useEffect(function(){return W.current||(B.current=R.current(),W.current=!0),H(function(S){return S+1}),function(){$.current&&B.current&&B.current()}},[]);var lt=p,Me=y?r.find(function(S){return typeof S=="string"})||"":null;return Pe.createElement(lt,{"aria-hidden":x,"aria-label":v,style:m,className:E,children:v?Pe.createElement("span",{"aria-hidden":"true",ref:j,children:Me}):Me,ref:v?void 0:j})}),function(e,t){return!0});
