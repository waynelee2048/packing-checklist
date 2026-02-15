(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ib(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var c0={exports:{}},Qa={},u0={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),Tb=Symbol.for("react.portal"),Rb=Symbol.for("react.fragment"),jb=Symbol.for("react.strict_mode"),Pb=Symbol.for("react.profiler"),Ab=Symbol.for("react.provider"),Lb=Symbol.for("react.context"),Ob=Symbol.for("react.forward_ref"),Db=Symbol.for("react.suspense"),Mb=Symbol.for("react.memo"),zb=Symbol.for("react.lazy"),vp=Symbol.iterator;function Ub(t){return t===null||typeof t!="object"?null:(t=vp&&t[vp]||t["@@iterator"],typeof t=="function"?t:null)}var d0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h0=Object.assign,f0={};function ii(t,e,n){this.props=t,this.context=e,this.refs=f0,this.updater=n||d0}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p0(){}p0.prototype=ii.prototype;function oh(t,e,n){this.props=t,this.context=e,this.refs=f0,this.updater=n||d0}var lh=oh.prototype=new p0;lh.constructor=oh;h0(lh,ii.prototype);lh.isPureReactComponent=!0;var xp=Array.isArray,m0=Object.prototype.hasOwnProperty,ah={current:null},_0={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)m0.call(e,r)&&!_0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Fo,type:t,key:i,ref:o,props:s,_owner:ah.current}}function Fb(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function Bb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bp=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bb(""+t.key):e.toString(36)}function jl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case Tb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Dc(o,0):r,xp(s)?(n="",t!=null&&(n=t.replace(bp,"$&/")+"/"),jl(s,e,n,"",function(u){return u})):s!=null&&(ch(s)&&(s=Fb(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(bp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",xp(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+Dc(i,l);o+=jl(i,e,n,a,s)}else if(a=Ub(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+Dc(i,l++),o+=jl(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],s=0;return jl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function $b(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Pl={transition:null},Wb={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:ah};function y0(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=ii;ie.Fragment=Rb;ie.Profiler=Pb;ie.PureComponent=oh;ie.StrictMode=jb;ie.Suspense=Db;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;ie.act=y0;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ah.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)m0.call(e,a)&&!_0.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Fo,type:t.type,key:s,ref:i,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:Lb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ab,_context:t},t.Consumer=t};ie.createElement=g0;ie.createFactory=function(t){var e=g0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Ob,render:t}};ie.isValidElement=ch;ie.lazy=function(t){return{$$typeof:zb,_payload:{_status:-1,_result:t},_init:$b}};ie.memo=function(t,e){return{$$typeof:Mb,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};ie.unstable_act=y0;ie.useCallback=function(t,e){return _t.current.useCallback(t,e)};ie.useContext=function(t){return _t.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ie.useEffect=function(t,e){return _t.current.useEffect(t,e)};ie.useId=function(){return _t.current.useId()};ie.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return _t.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ie.useRef=function(t){return _t.current.useRef(t)};ie.useState=function(t){return _t.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return _t.current.useTransition()};ie.version="18.3.1";u0.exports=ie;var g=u0.exports;const ht=Ib(g);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb=g,Vb=Symbol.for("react.element"),Yb=Symbol.for("react.fragment"),Qb=Object.prototype.hasOwnProperty,Gb=Hb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qb={key:!0,ref:!0,__self:!0,__source:!0};function v0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Qb.call(e,r)&&!qb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Vb,type:t,key:i,ref:o,props:s,_owner:Gb.current}}Qa.Fragment=Yb;Qa.jsx=v0;Qa.jsxs=v0;c0.exports=Qa;var c=c0.exports,Ou={},x0={exports:{}},Dt={},b0={exports:{}},w0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var M=D.length;D.push(z);e:for(;0<M;){var H=M-1>>>1,V=D[H];if(0<s(V,z))D[H]=z,D[M]=V,M=H;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],M=D.pop();if(M!==z){D[0]=M;e:for(var H=0,V=D.length,X=V>>>1;H<X;){var ce=2*(H+1)-1,L=D[ce],U=ce+1,K=D[U];if(0>s(L,M))U<V&&0>s(K,L)?(D[H]=K,D[U]=M,H=U):(D[H]=L,D[ce]=M,H=ce);else if(U<V&&0>s(K,M))D[H]=K,D[U]=M,H=U;else break e}}return z}function s(D,z){var M=D.sortIndex-z.sortIndex;return M!==0?M:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,p=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,e(a,z);else break;z=n(u)}}function x(D){if(w=!1,y(D),!v)if(n(a)!==null)v=!0,Z(b);else{var z=n(u);z!==null&&Q(x,z.startTime-D)}}function b(D,z){v=!1,w&&(w=!1,_(C),C=-1),p=!0;var M=f;try{for(y(z),d=n(a);d!==null&&(!(d.expirationTime>z)||D&&!E());){var H=d.callback;if(typeof H=="function"){d.callback=null,f=d.priorityLevel;var V=H(d.expirationTime<=z);z=t.unstable_now(),typeof V=="function"?d.callback=V:d===n(a)&&r(a),y(z)}else r(a);d=n(a)}if(d!==null)var X=!0;else{var ce=n(u);ce!==null&&Q(x,ce.startTime-z),X=!1}return X}finally{d=null,f=M,p=!1}}var S=!1,I=null,C=-1,R=5,N=-1;function E(){return!(t.unstable_now()-N<R)}function T(){if(I!==null){var D=t.unstable_now();N=D;var z=!0;try{z=I(!0,D)}finally{z?A():(S=!1,I=null)}}else S=!1}var A;if(typeof m=="function")A=function(){m(T)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,te=Y.port2;Y.port1.onmessage=T,A=function(){te.postMessage(null)}}else A=function(){k(T,0)};function Z(D){I=D,S||(S=!0,A())}function Q(D,z){C=k(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Z(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var M=f;f=z;try{return D()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var M=f;f=D;try{return z()}finally{f=M}},t.unstable_scheduleCallback=function(D,z,M){var H=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?H+M:H):M=H,D){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=M+V,D={id:h++,callback:z,priorityLevel:D,startTime:M,expirationTime:V,sortIndex:-1},M>H?(D.sortIndex=M,e(u,D),n(a)===null&&D===n(u)&&(w?(_(C),C=-1):w=!0,Q(x,M-H))):(D.sortIndex=V,e(a,D),v||p||(v=!0,Z(b))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var z=f;return function(){var M=f;f=z;try{return D.apply(this,arguments)}finally{f=M}}}})(w0);b0.exports=w0;var Xb=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kb=g,Ot=Xb;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var k0=new Set,lo={};function os(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(lo[t]=e,t=0;t<e.length;t++)k0.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,Jb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wp={},kp={};function Zb(t){return Du.call(kp,t)?!0:Du.call(wp,t)?!1:Jb.test(t)?kp[t]=!0:(wp[t]=!0,!1)}function e1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t1(t,e,n,r){if(e===null||typeof e>"u"||e1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uh=/[\-:]([a-z])/g;function dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uh,dh);nt[e]=new gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uh,dh);nt[e]=new gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uh,dh);nt[e]=new gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new gt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hh(t,e,n,r){var s=nt.hasOwnProperty(e)?nt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t1(e,n,s,r)&&(n=null),r||s===null?Zb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=Kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),Mu=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),mh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),N0=Symbol.for("react.offscreen"),Cp=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Mc;function Di(t){if(Mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Mc=e&&e[1]||""}return`
`+Mc+t}var zc=!1;function Uc(t,e){if(!t||zc)return"";zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Di(t):""}function n1(t){switch(t.tag){case 5:return Di(t.type);case 16:return Di("Lazy");case 13:return Di("Suspense");case 19:return Di("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case Mu:return"Profiler";case fh:return"StrictMode";case zu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case S0:return(t.displayName||"Context")+".Consumer";case C0:return(t._context.displayName||"Context")+".Provider";case ph:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mh:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function r1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===fh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function E0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s1(t){var e=E0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=s1(t))}function I0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=E0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T0(t,e){e=e.checked,e!=null&&hh(t,"checked",e,!1)}function $u(t,e){T0(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Mi=Array.isArray;function js(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Mi(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function R0(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ip(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function j0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?j0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cl,P0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i1=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(t){i1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bi[e]=Bi[t]})});function A0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bi.hasOwnProperty(t)&&Bi[t]?(""+e).trim():e+"px"}function L0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=A0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var o1=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(o1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function Qu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function _h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qu=null,Ps=null,As=null;function Tp(t){if(t=Wo(t)){if(typeof qu!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Ja(e),qu(t.stateNode,t.type,e))}}function O0(t){Ps?As?As.push(t):As=[t]:Ps=t}function D0(){if(Ps){var t=Ps,e=As;if(As=Ps=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function M0(t,e){return t(e)}function z0(){}var Fc=!1;function U0(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return M0(t,e,n)}finally{Fc=!1,(Ps!==null||As!==null)&&(z0(),D0())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=Ja(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Xu=!1;if(zn)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{Xu=!1}function l1(t,e,n,r,s,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var $i=!1,Xl=null,Kl=!1,Ku=null,a1={onError:function(t){$i=!0,Xl=t}};function c1(t,e,n,r,s,i,o,l,a){$i=!1,Xl=null,l1.apply(a1,arguments)}function u1(t,e,n,r,s,i,o,l,a){if(c1.apply(this,arguments),$i){if($i){var u=Xl;$i=!1,Xl=null}else throw Error(P(198));Kl||(Kl=!0,Ku=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(t){if(ls(t)!==t)throw Error(P(188))}function d1(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Rp(s),t;if(i===r)return Rp(s),e;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function B0(t){return t=d1(t),t!==null?$0(t):null}function $0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$0(t);if(e!==null)return e;t=t.sibling}return null}var W0=Ot.unstable_scheduleCallback,jp=Ot.unstable_cancelCallback,h1=Ot.unstable_shouldYield,f1=Ot.unstable_requestPaint,Me=Ot.unstable_now,p1=Ot.unstable_getCurrentPriorityLevel,gh=Ot.unstable_ImmediatePriority,H0=Ot.unstable_UserBlockingPriority,Jl=Ot.unstable_NormalPriority,m1=Ot.unstable_LowPriority,V0=Ot.unstable_IdlePriority,Ga=null,_n=null;function _1(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Ga,t,void 0,(t.current.flags&128)===128)}catch{}}var en=Math.clz32?Math.clz32:v1,g1=Math.log,y1=Math.LN2;function v1(t){return t>>>=0,t===0?32:31-(g1(t)/y1|0)|0}var ul=64,dl=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zi(l):(i&=o,i!==0&&(r=zi(i)))}else o=n&~s,o!==0?r=zi(o):i!==0&&(r=zi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-en(e),s=1<<n,r|=t[n],e&=~s;return r}function x1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-en(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=x1(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Ju(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y0(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function Bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-en(e),t[e]=n}function w1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-en(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function yh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-en(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function Q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var G0,vh,q0,X0,K0,Zu=!1,hl=[],fr=null,pr=null,mr=null,uo=new Map,ho=new Map,sr=[],k1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pp(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Si(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Wo(e),e!==null&&vh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function C1(t,e,n,r,s){switch(e){case"focusin":return fr=Si(fr,t,e,n,r,s),!0;case"dragenter":return pr=Si(pr,t,e,n,r,s),!0;case"mouseover":return mr=Si(mr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return uo.set(i,Si(uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ho.set(i,Si(ho.get(i)||null,t,e,n,r,s)),!0}return!1}function J0(t){var e=zr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=F0(n),e!==null){t.blockedOn=e,K0(t.priority,function(){q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ed(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Gu=r,n.target.dispatchEvent(r),Gu=null}else return e=Wo(n),e!==null&&vh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){Al(t)&&n.delete(e)}function S1(){Zu=!1,fr!==null&&Al(fr)&&(fr=null),pr!==null&&Al(pr)&&(pr=null),mr!==null&&Al(mr)&&(mr=null),uo.forEach(Ap),ho.forEach(Ap)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,S1)))}function fo(t){function e(s){return Ni(s,t)}if(0<hl.length){Ni(hl[0],t);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Ni(fr,t),pr!==null&&Ni(pr,t),mr!==null&&Ni(mr,t),uo.forEach(e),ho.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)J0(n),n.blockedOn===null&&sr.shift()}var Ls=Yn.ReactCurrentBatchConfig,ea=!0;function N1(t,e,n,r){var s=me,i=Ls.transition;Ls.transition=null;try{me=1,xh(t,e,n,r)}finally{me=s,Ls.transition=i}}function E1(t,e,n,r){var s=me,i=Ls.transition;Ls.transition=null;try{me=4,xh(t,e,n,r)}finally{me=s,Ls.transition=i}}function xh(t,e,n,r){if(ea){var s=ed(t,e,n,r);if(s===null)Kc(t,e,r,ta,n),Pp(t,r);else if(C1(s,t,e,n,r))r.stopPropagation();else if(Pp(t,r),e&4&&-1<k1.indexOf(t)){for(;s!==null;){var i=Wo(s);if(i!==null&&G0(i),i=ed(t,e,n,r),i===null&&Kc(t,e,r,ta,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Kc(t,e,r,null,n)}}var ta=null;function ed(t,e,n,r){if(ta=null,t=_h(r),t=zr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ta=t,null}function Z0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p1()){case gh:return 1;case H0:return 4;case Jl:case m1:return 16;case V0:return 536870912;default:return 16}default:return 16}}var ur=null,bh=null,Ll=null;function eg(){if(Ll)return Ll;var t,e=bh,n=e.length,r,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ll=s.slice(t,1<r?1-r:void 0)}function Ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function Lp(){return!1}function Mt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fl:Lp,this.isPropagationStopped=Lp,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wh=Mt(oi),$o=Te({},oi,{view:0,detail:0}),I1=Mt($o),$c,Wc,Ei,qa=Te({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?($c=t.screenX-Ei.screenX,Wc=t.screenY-Ei.screenY):Wc=$c=0,Ei=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:Wc}}),Op=Mt(qa),T1=Te({},qa,{dataTransfer:0}),R1=Mt(T1),j1=Te({},$o,{relatedTarget:0}),Hc=Mt(j1),P1=Te({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=Mt(P1),L1=Te({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),O1=Mt(L1),D1=Te({},oi,{data:0}),Dp=Mt(D1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=U1[t])?!!e[t]:!1}function kh(){return F1}var B1=Te({},$o,{key:function(t){if(t.key){var e=M1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(t){return t.type==="keypress"?Ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$1=Mt(B1),W1=Te({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=Mt(W1),H1=Te({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),V1=Mt(H1),Y1=Te({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=Mt(Y1),G1=Te({},qa,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q1=Mt(G1),X1=[9,13,27,32],Ch=zn&&"CompositionEvent"in window,Wi=null;zn&&"documentMode"in document&&(Wi=document.documentMode);var K1=zn&&"TextEvent"in window&&!Wi,tg=zn&&(!Ch||Wi&&8<Wi&&11>=Wi),zp=" ",Up=!1;function ng(t,e){switch(t){case"keyup":return X1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function J1(t,e){switch(t){case"compositionend":return rg(e);case"keypress":return e.which!==32?null:(Up=!0,zp);case"textInput":return t=e.data,t===zp&&Up?null:t;default:return null}}function Z1(t,e){if(vs)return t==="compositionend"||!Ch&&ng(t,e)?(t=eg(),Ll=bh=ur=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tg&&e.locale!=="ko"?null:e.data;default:return null}}var ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ew[t.type]:e==="textarea"}function sg(t,e,n,r){O0(r),e=na(e,"onChange"),0<e.length&&(n=new wh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,po=null;function tw(t){mg(t,0)}function Xa(t){var e=ws(t);if(I0(e))return t}function nw(t,e){if(t==="change")return e}var ig=!1;if(zn){var Vc;if(zn){var Yc="oninput"in document;if(!Yc){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Yc=typeof Bp.oninput=="function"}Vc=Yc}else Vc=!1;ig=Vc&&(!document.documentMode||9<document.documentMode)}function $p(){Hi&&(Hi.detachEvent("onpropertychange",og),po=Hi=null)}function og(t){if(t.propertyName==="value"&&Xa(po)){var e=[];sg(e,po,t,_h(t)),U0(tw,e)}}function rw(t,e,n){t==="focusin"?($p(),Hi=e,po=n,Hi.attachEvent("onpropertychange",og)):t==="focusout"&&$p()}function sw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xa(po)}function iw(t,e){if(t==="click")return Xa(e)}function ow(t,e){if(t==="input"||t==="change")return Xa(e)}function lw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:lw;function mo(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Du.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function Wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Wp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wp(n)}}function lg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?lg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ag(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Sh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function aw(t){var e=ag(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&lg(n.ownerDocument.documentElement,n)){if(r!==null&&Sh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Hp(n,i);var o=Hp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cw=zn&&"documentMode"in document&&11>=document.documentMode,xs=null,td=null,Vi=null,nd=!1;function Vp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nd||xs==null||xs!==ql(r)||(r=xs,"selectionStart"in r&&Sh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vi&&mo(Vi,r)||(Vi=r,r=na(td,"onSelect"),0<r.length&&(e=new wh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xs)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Qc={},cg={};zn&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Ka(t){if(Qc[t])return Qc[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cg)return Qc[t]=e[n];return t}var ug=Ka("animationend"),dg=Ka("animationiteration"),hg=Ka("animationstart"),fg=Ka("transitionend"),pg=new Map,Yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){pg.set(t,e),os(e,[t])}for(var Gc=0;Gc<Yp.length;Gc++){var qc=Yp[Gc],uw=qc.toLowerCase(),dw=qc[0].toUpperCase()+qc.slice(1);Tr(uw,"on"+dw)}Tr(ug,"onAnimationEnd");Tr(dg,"onAnimationIteration");Tr(hg,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(fg,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Qp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,u1(r,e,void 0,t),t.currentTarget=null}function mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;Qp(s,l,u),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;Qp(s,l,u),i=a}}}if(Kl)throw t=Ku,Kl=!1,Ku=null,t}function ke(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var r=t+"__bubble";n.has(r)||(_g(e,t,2,!1),n.add(r))}function Xc(t,e,n){var r=0;e&&(r|=4),_g(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[ml]){t[ml]=!0,k0.forEach(function(n){n!=="selectionchange"&&(hw.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,Xc("selectionchange",!1,e))}}function _g(t,e,n,r){switch(Z0(e)){case 1:var s=N1;break;case 4:s=E1;break;default:s=xh}n=s.bind(null,e,n,t),s=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Kc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=zr(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}U0(function(){var u=i,h=_h(n),d=[];e:{var f=pg.get(t);if(f!==void 0){var p=wh,v=t;switch(t){case"keypress":if(Ol(n)===0)break e;case"keydown":case"keyup":p=$1;break;case"focusin":v="focus",p=Hc;break;case"focusout":v="blur",p=Hc;break;case"beforeblur":case"afterblur":p=Hc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=V1;break;case ug:case dg:case hg:p=A1;break;case fg:p=Q1;break;case"scroll":p=I1;break;case"wheel":p=q1;break;case"copy":case"cut":case"paste":p=O1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mp}var w=(e&4)!==0,k=!w&&t==="scroll",_=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,_!==null&&(x=co(m,_),x!=null&&w.push(go(m,x,y)))),k)break;m=m.return}0<w.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Gu&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[Un]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?zr(v):null,v!==null&&(k=ls(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(w=Op,x="onMouseLeave",_="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=Mp,x="onPointerLeave",_="onPointerEnter",m="pointer"),k=p==null?f:ws(p),y=v==null?f:ws(v),f=new w(x,m+"leave",p,n,h),f.target=k,f.relatedTarget=y,x=null,zr(h)===u&&(w=new w(_,m+"enter",v,n,h),w.target=y,w.relatedTarget=k,x=w),k=x,p&&v)t:{for(w=p,_=v,m=0,y=w;y;y=fs(y))m++;for(y=0,x=_;x;x=fs(x))y++;for(;0<m-y;)w=fs(w),m--;for(;0<y-m;)_=fs(_),y--;for(;m--;){if(w===_||_!==null&&w===_.alternate)break t;w=fs(w),_=fs(_)}w=null}else w=null;p!==null&&Gp(d,f,p,w,!1),v!==null&&k!==null&&Gp(d,k,v,w,!0)}}e:{if(f=u?ws(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=nw;else if(Fp(f))if(ig)b=ow;else{b=sw;var S=rw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=iw);if(b&&(b=b(t,u))){sg(d,b,n,h);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Wu(f,"number",f.value)}switch(S=u?ws(u):window,t){case"focusin":(Fp(S)||S.contentEditable==="true")&&(xs=S,td=u,Vi=null);break;case"focusout":Vi=td=xs=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Vp(d,n,h);break;case"selectionchange":if(cw)break;case"keydown":case"keyup":Vp(d,n,h)}var I;if(Ch)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else vs?ng(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(tg&&n.locale!=="ko"&&(vs||C!=="onCompositionStart"?C==="onCompositionEnd"&&vs&&(I=eg()):(ur=h,bh="value"in ur?ur.value:ur.textContent,vs=!0)),S=na(u,C),0<S.length&&(C=new Dp(C,t,null,n,h),d.push({event:C,listeners:S}),I?C.data=I:(I=rg(n),I!==null&&(C.data=I)))),(I=K1?J1(t,n):Z1(t,n))&&(u=na(u,"onBeforeInput"),0<u.length&&(h=new Dp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=I))}mg(d,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function na(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=co(t,n),i!=null&&r.unshift(go(t,i,s)),i=co(t,e),i!=null&&r.push(go(t,i,s))),t=t.return}return r}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Gp(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,s?(a=co(n,i),a!=null&&o.unshift(go(n,a,l))):s||(a=co(n,i),a!=null&&o.push(go(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fw=/\r\n?/g,pw=/\u0000|\uFFFD/g;function qp(t){return(typeof t=="string"?t:""+t).replace(fw,`
`).replace(pw,"")}function _l(t,e,n){if(e=qp(e),qp(t)!==e&&n)throw Error(P(425))}function ra(){}var rd=null,sd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,mw=typeof clearTimeout=="function"?clearTimeout:void 0,Xp=typeof Promise=="function"?Promise:void 0,_w=typeof queueMicrotask=="function"?queueMicrotask:typeof Xp<"u"?function(t){return Xp.resolve(null).then(t).catch(gw)}:od;function gw(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var li=Math.random().toString(36).slice(2),pn="__reactFiber$"+li,yo="__reactProps$"+li,Un="__reactContainer$"+li,ld="__reactEvents$"+li,yw="__reactListeners$"+li,vw="__reactHandles$"+li;function zr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kp(t);t!==null;){if(n=t[pn])return n;t=Kp(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[pn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Ja(t){return t[yo]||null}var ad=[],ks=-1;function Rr(t){return{current:t}}function Ce(t){0>ks||(t.current=ad[ks],ad[ks]=null,ks--)}function we(t,e){ks++,ad[ks]=t.current,t.current=e}var Sr={},ct=Rr(Sr),wt=Rr(!1),Qr=Sr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function kt(t){return t=t.childContextTypes,t!=null}function sa(){Ce(wt),Ce(ct)}function Jp(t,e,n){if(ct.current!==Sr)throw Error(P(168));we(ct,e),we(wt,n)}function gg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(P(108,r1(t)||"Unknown",s));return Te({},n,r)}function ia(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Qr=ct.current,we(ct,t),we(wt,wt.current),!0}function Zp(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=gg(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,Ce(wt),Ce(ct),we(ct,t)):Ce(wt),we(wt,n)}var Nn=null,Za=!1,Zc=!1;function yg(t){Nn===null?Nn=[t]:Nn.push(t)}function xw(t){Za=!0,yg(t)}function jr(){if(!Zc&&Nn!==null){Zc=!0;var t=0,e=me;try{var n=Nn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Za=!1}catch(s){throw Nn!==null&&(Nn=Nn.slice(t+1)),W0(gh,jr),s}finally{me=e,Zc=!1}}return null}var Cs=[],Ss=0,oa=null,la=0,Ft=[],Bt=0,Gr=null,Tn=1,Rn="";function Lr(t,e){Cs[Ss++]=la,Cs[Ss++]=oa,oa=t,la=e}function vg(t,e,n){Ft[Bt++]=Tn,Ft[Bt++]=Rn,Ft[Bt++]=Gr,Gr=t;var r=Tn;t=Rn;var s=32-en(r)-1;r&=~(1<<s),n+=1;var i=32-en(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Tn=1<<32-en(e)+s|n<<s|r,Rn=i+t}else Tn=1<<i|n<<s|r,Rn=t}function Nh(t){t.return!==null&&(Lr(t,1),vg(t,1,0))}function Eh(t){for(;t===oa;)oa=Cs[--Ss],Cs[Ss]=null,la=Cs[--Ss],Cs[Ss]=null;for(;t===Gr;)Gr=Ft[--Bt],Ft[Bt]=null,Rn=Ft[--Bt],Ft[Bt]=null,Tn=Ft[--Bt],Ft[Bt]=null}var Lt=null,Pt=null,Ne=!1,Kt=null;function xg(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function em(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Pt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:Tn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Pt=null,!0):!1;default:return!1}}function cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ud(t){if(Ne){var e=Pt;if(e){var n=e;if(!em(t,e)){if(cd(t))throw Error(P(418));e=_r(n.nextSibling);var r=Lt;e&&em(t,e)?xg(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Lt=t)}}else{if(cd(t))throw Error(P(418));t.flags=t.flags&-4097|2,Ne=!1,Lt=t}}}function tm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function gl(t){if(t!==Lt)return!1;if(!Ne)return tm(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Pt)){if(cd(t))throw bg(),Error(P(418));for(;e;)xg(t,e),e=_r(e.nextSibling)}if(tm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Pt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Pt=null}}else Pt=Lt?_r(t.stateNode.nextSibling):null;return!0}function bg(){for(var t=Pt;t;)t=_r(t.nextSibling)}function Ys(){Pt=Lt=null,Ne=!1}function Ih(t){Kt===null?Kt=[t]:Kt.push(t)}var bw=Yn.ReactCurrentBatchConfig;function Ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nm(t){var e=t._init;return e(t._payload)}function wg(t){function e(_,m){if(t){var y=_.deletions;y===null?(_.deletions=[m],_.flags|=16):y.push(m)}}function n(_,m){if(!t)return null;for(;m!==null;)e(_,m),m=m.sibling;return null}function r(_,m){for(_=new Map;m!==null;)m.key!==null?_.set(m.key,m):_.set(m.index,m),m=m.sibling;return _}function s(_,m){return _=xr(_,m),_.index=0,_.sibling=null,_}function i(_,m,y){return _.index=y,t?(y=_.alternate,y!==null?(y=y.index,y<m?(_.flags|=2,m):y):(_.flags|=2,m)):(_.flags|=1048576,m)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,m,y,x){return m===null||m.tag!==6?(m=ou(y,_.mode,x),m.return=_,m):(m=s(m,y),m.return=_,m)}function a(_,m,y,x){var b=y.type;return b===ys?h(_,m,y.props.children,x,y.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&nm(b)===m.type)?(x=s(m,y.props),x.ref=Ii(_,m,y),x.return=_,x):(x=$l(y.type,y.key,y.props,null,_.mode,x),x.ref=Ii(_,m,y),x.return=_,x)}function u(_,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=lu(y,_.mode,x),m.return=_,m):(m=s(m,y.children||[]),m.return=_,m)}function h(_,m,y,x,b){return m===null||m.tag!==7?(m=Hr(y,_.mode,x,b),m.return=_,m):(m=s(m,y),m.return=_,m)}function d(_,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ou(""+m,_.mode,y),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ll:return y=$l(m.type,m.key,m.props,null,_.mode,y),y.ref=Ii(_,null,m),y.return=_,y;case gs:return m=lu(m,_.mode,y),m.return=_,m;case er:var x=m._init;return d(_,x(m._payload),y)}if(Mi(m)||ki(m))return m=Hr(m,_.mode,y,null),m.return=_,m;yl(_,m)}return null}function f(_,m,y,x){var b=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:l(_,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return y.key===b?a(_,m,y,x):null;case gs:return y.key===b?u(_,m,y,x):null;case er:return b=y._init,f(_,m,b(y._payload),x)}if(Mi(y)||ki(y))return b!==null?null:h(_,m,y,x,null);yl(_,y)}return null}function p(_,m,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return _=_.get(y)||null,l(m,_,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ll:return _=_.get(x.key===null?y:x.key)||null,a(m,_,x,b);case gs:return _=_.get(x.key===null?y:x.key)||null,u(m,_,x,b);case er:var S=x._init;return p(_,m,y,S(x._payload),b)}if(Mi(x)||ki(x))return _=_.get(y)||null,h(m,_,x,b,null);yl(m,x)}return null}function v(_,m,y,x){for(var b=null,S=null,I=m,C=m=0,R=null;I!==null&&C<y.length;C++){I.index>C?(R=I,I=null):R=I.sibling;var N=f(_,I,y[C],x);if(N===null){I===null&&(I=R);break}t&&I&&N.alternate===null&&e(_,I),m=i(N,m,C),S===null?b=N:S.sibling=N,S=N,I=R}if(C===y.length)return n(_,I),Ne&&Lr(_,C),b;if(I===null){for(;C<y.length;C++)I=d(_,y[C],x),I!==null&&(m=i(I,m,C),S===null?b=I:S.sibling=I,S=I);return Ne&&Lr(_,C),b}for(I=r(_,I);C<y.length;C++)R=p(I,_,C,y[C],x),R!==null&&(t&&R.alternate!==null&&I.delete(R.key===null?C:R.key),m=i(R,m,C),S===null?b=R:S.sibling=R,S=R);return t&&I.forEach(function(E){return e(_,E)}),Ne&&Lr(_,C),b}function w(_,m,y,x){var b=ki(y);if(typeof b!="function")throw Error(P(150));if(y=b.call(y),y==null)throw Error(P(151));for(var S=b=null,I=m,C=m=0,R=null,N=y.next();I!==null&&!N.done;C++,N=y.next()){I.index>C?(R=I,I=null):R=I.sibling;var E=f(_,I,N.value,x);if(E===null){I===null&&(I=R);break}t&&I&&E.alternate===null&&e(_,I),m=i(E,m,C),S===null?b=E:S.sibling=E,S=E,I=R}if(N.done)return n(_,I),Ne&&Lr(_,C),b;if(I===null){for(;!N.done;C++,N=y.next())N=d(_,N.value,x),N!==null&&(m=i(N,m,C),S===null?b=N:S.sibling=N,S=N);return Ne&&Lr(_,C),b}for(I=r(_,I);!N.done;C++,N=y.next())N=p(I,_,C,N.value,x),N!==null&&(t&&N.alternate!==null&&I.delete(N.key===null?C:N.key),m=i(N,m,C),S===null?b=N:S.sibling=N,S=N);return t&&I.forEach(function(T){return e(_,T)}),Ne&&Lr(_,C),b}function k(_,m,y,x){if(typeof y=="object"&&y!==null&&y.type===ys&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:e:{for(var b=y.key,S=m;S!==null;){if(S.key===b){if(b=y.type,b===ys){if(S.tag===7){n(_,S.sibling),m=s(S,y.props.children),m.return=_,_=m;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&nm(b)===S.type){n(_,S.sibling),m=s(S,y.props),m.ref=Ii(_,S,y),m.return=_,_=m;break e}n(_,S);break}else e(_,S);S=S.sibling}y.type===ys?(m=Hr(y.props.children,_.mode,x,y.key),m.return=_,_=m):(x=$l(y.type,y.key,y.props,null,_.mode,x),x.ref=Ii(_,m,y),x.return=_,_=x)}return o(_);case gs:e:{for(S=y.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(_,m.sibling),m=s(m,y.children||[]),m.return=_,_=m;break e}else{n(_,m);break}else e(_,m);m=m.sibling}m=lu(y,_.mode,x),m.return=_,_=m}return o(_);case er:return S=y._init,k(_,m,S(y._payload),x)}if(Mi(y))return v(_,m,y,x);if(ki(y))return w(_,m,y,x);yl(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(_,m.sibling),m=s(m,y),m.return=_,_=m):(n(_,m),m=ou(y,_.mode,x),m.return=_,_=m),o(_)):n(_,m)}return k}var Qs=wg(!0),kg=wg(!1),aa=Rr(null),ca=null,Ns=null,Th=null;function Rh(){Th=Ns=ca=null}function jh(t){var e=aa.current;Ce(aa),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){ca=t,Th=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Th!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(ca===null)throw Error(P(308));Ns=t,ca.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var Ur=null;function Ph(t){Ur===null?Ur=[t]:Ur.push(t)}function Cg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ph(e)):(n.next=s.next,s.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Ah(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Fn(t,n)}return s=r.interleaved,s===null?(e.next=e,Ph(r)):(e.next=s.next,s.next=e),r.interleaved=e,Fn(t,n)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}function rm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ua(t,e,n,r){var s=t.updateQueue;tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(i!==null){var d=s.baseState;o=0,h=u=a=null,l=i;do{var f=l.lane,p=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,p=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=Te({},d,f);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=p,a=d):h=h.next=p,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(a=d),s.baseState=a,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=d}}function sm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(P(191,s));s.call(r)}}}var Ho={},gn=Rr(Ho),vo=Rr(Ho),xo=Rr(Ho);function Fr(t){if(t===Ho)throw Error(P(174));return t}function Lh(t,e){switch(we(xo,e),we(vo,t),we(gn,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}Ce(gn),we(gn,e)}function Gs(){Ce(gn),Ce(vo),Ce(xo)}function Ng(t){Fr(xo.current);var e=Fr(gn.current),n=Vu(e,t.type);e!==n&&(we(vo,t),we(gn,n))}function Oh(t){vo.current===t&&(Ce(gn),Ce(vo))}var Ee=Rr(0);function da(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eu=[];function Dh(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var Ml=Yn.ReactCurrentDispatcher,tu=Yn.ReactCurrentBatchConfig,qr=0,Ie=null,Ue=null,Ve=null,ha=!1,Yi=!1,bo=0,ww=0;function it(){throw Error(P(321))}function Mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function zh(t,e,n,r,s,i){if(qr=i,Ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?Nw:Ew,t=n(r,s),Yi){i=0;do{if(Yi=!1,bo=0,25<=i)throw Error(P(301));i+=1,Ve=Ue=null,e.updateQueue=null,Ml.current=Iw,t=n(r,s)}while(Yi)}if(Ml.current=fa,e=Ue!==null&&Ue.next!==null,qr=0,Ve=Ue=Ie=null,ha=!1,e)throw Error(P(300));return t}function Uh(){var t=bo!==0;return bo=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Ie.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Yt(){if(Ue===null){var t=Ie.alternate;t=t!==null?t.memoizedState:null}else t=Ue.next;var e=Ve===null?Ie.memoizedState:Ve.next;if(e!==null)Ve=e,Ue=t;else{if(t===null)throw Error(P(310));Ue=t,t={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?Ie.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function wo(t,e){return typeof e=="function"?e(t):e}function nu(t){var e=Yt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Ue,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,u=i;do{var h=u.lane;if((qr&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Ie.lanes|=h,Xr|=h}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,sn(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ie.lanes|=i,Xr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ru(t){var e=Yt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(vt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Eg(){}function Ig(t,e){var n=Ie,r=Yt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,vt=!0),r=r.queue,Fh(jg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,ko(9,Rg.bind(null,n,r,s,e),void 0,null),Xe===null)throw Error(P(349));qr&30||Tg(n,e,s)}return s}function Tg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rg(t,e,n,r){e.value=n,e.getSnapshot=r,Pg(e)&&Ag(t)}function jg(t,e,n){return n(function(){Pg(e)&&Ag(t)})}function Pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function Ag(t){var e=Fn(t,1);e!==null&&tn(e,t,1,-1)}function im(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=Sw.bind(null,Ie,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ie.updateQueue,e===null?(e={lastEffect:null,stores:null},Ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lg(){return Yt().memoizedState}function zl(t,e,n,r){var s=fn();Ie.flags|=t,s.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function ec(t,e,n,r){var s=Yt();r=r===void 0?null:r;var i=void 0;if(Ue!==null){var o=Ue.memoizedState;if(i=o.destroy,r!==null&&Mh(r,o.deps)){s.memoizedState=ko(e,n,i,r);return}}Ie.flags|=t,s.memoizedState=ko(1|e,n,i,r)}function om(t,e){return zl(8390656,8,t,e)}function Fh(t,e){return ec(2048,8,t,e)}function Og(t,e){return ec(4,2,t,e)}function Dg(t,e){return ec(4,4,t,e)}function Mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,Mg.bind(null,e,t),n)}function Bh(){}function Ug(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fg(t,e){var n=Yt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Bg(t,e,n){return qr&21?(sn(n,e)||(n=Y0(),Ie.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function kw(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=tu.transition;tu.transition={};try{t(!1),e()}finally{me=n,tu.transition=r}}function $g(){return Yt().memoizedState}function Cw(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(t))Hg(e,n);else if(n=Cg(t,e,n,r),n!==null){var s=ft();tn(n,t,r,s),Vg(n,e,r)}}function Sw(t,e,n){var r=vr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(t))Hg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sn(l,o)){var a=e.interleaved;a===null?(s.next=s,Ph(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=Cg(t,e,s,r),n!==null&&(s=ft(),tn(n,t,r,s),Vg(n,e,r))}}function Wg(t){var e=t.alternate;return t===Ie||e!==null&&e===Ie}function Hg(t,e){Yi=ha=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yh(t,n)}}var fa={readContext:Vt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},Nw={readContext:Vt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,Mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Cw.bind(null,Ie,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:Bh,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=kw.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ie,s=fn();if(Ne){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Xe===null)throw Error(P(349));qr&30||Tg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,om(jg.bind(null,r,i,t),[t]),r.flags|=2048,ko(9,Rg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=fn(),e=Xe.identifierPrefix;if(Ne){var n=Rn,r=Tn;n=(r&~(1<<32-en(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ww++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ew={readContext:Vt,useCallback:Ug,useContext:Vt,useEffect:Fh,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:Dg,useMemo:Fg,useReducer:nu,useRef:Lg,useState:function(){return nu(wo)},useDebugValue:Bh,useDeferredValue:function(t){var e=Yt();return Bg(e,Ue.memoizedState,t)},useTransition:function(){var t=nu(wo)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Ig,useId:$g,unstable_isNewReconciler:!1},Iw={readContext:Vt,useCallback:Ug,useContext:Vt,useEffect:Fh,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:Dg,useMemo:Fg,useReducer:ru,useRef:Lg,useState:function(){return ru(wo)},useDebugValue:Bh,useDeferredValue:function(t){var e=Yt();return Ue===null?e.memoizedState=t:Bg(e,Ue.memoizedState,t)},useTransition:function(){var t=ru(wo)[0],e=Yt().memoizedState;return[t,e]},useMutableSource:Eg,useSyncExternalStore:Ig,useId:$g,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),s=vr(t),i=Dn(r,s);i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(tn(e,t,s,r),Dl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),s=vr(t),i=Dn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(tn(e,t,s,r),Dl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=vr(t),s=Dn(n,r);s.tag=2,e!=null&&(s.callback=e),e=gr(t,s,r),e!==null&&(tn(e,t,r,n),Dl(e,t,r))}};function lm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(s,i):!0}function Yg(t,e,n){var r=!1,s=Sr,i=e.contextType;return typeof i=="object"&&i!==null?i=Vt(i):(s=kt(e)?Qr:ct.current,r=e.contextTypes,i=(r=r!=null)?Vs(t,s):Sr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function am(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function fd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Ah(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Vt(i):(i=kt(e)?Qr:ct.current,s.context=Vs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(hd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&tc.enqueueReplaceState(s,s.state,null),ua(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=n1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function su(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tw=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ma||(ma=!0,Cd=r),pd(t,e)},n}function Gg(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){pd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){pd(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Tw;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Ww.bind(null,t,e,n),e.then(t,t))}function um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Rw=Yn.ReactCurrentOwner,vt=!1;function dt(t,e,n,r){e.child=t===null?kg(e,null,n,r):Qs(e,t.child,n,r)}function hm(t,e,n,r,s){n=n.render;var i=e.ref;return Os(e,s),r=zh(t,e,n,r,i,s),n=Uh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Bn(t,e,s)):(Ne&&n&&Nh(e),e.flags|=1,dt(t,e,r,s),e.child)}function fm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!qh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,qg(t,e,i,r,s)):(t=$l(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return Bn(t,e,s)}return e.flags|=1,t=xr(i,r),t.ref=e.ref,t.return=e,e.child=t}function qg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(mo(i,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Bn(t,e,s)}return md(t,e,n,r,s)}function Xg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Is,jt),jt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Is,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(Is,jt),jt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,we(Is,jt),jt|=r;return dt(t,e,s,n),e.child}function Kg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function md(t,e,n,r,s){var i=kt(n)?Qr:ct.current;return i=Vs(e,i),Os(e,s),n=zh(t,e,n,r,i,s),r=Uh(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Bn(t,e,s)):(Ne&&r&&Nh(e),e.flags|=1,dt(t,e,n,s),e.child)}function pm(t,e,n,r,s){if(kt(n)){var i=!0;ia(e)}else i=!1;if(Os(e,s),e.stateNode===null)Ul(t,e),Yg(e,n,r),fd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=kt(n)?Qr:ct.current,u=Vs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&am(e,o,r,u),tr=!1;var f=e.memoizedState;o.state=f,ua(e,r,o,s),a=e.memoizedState,l!==r||f!==a||wt.current||tr?(typeof h=="function"&&(hd(e,n,h,r),a=e.memoizedState),(l=tr||lm(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Sg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:qt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Vt(a):(a=kt(n)?Qr:ct.current,a=Vs(e,a));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&am(e,o,r,a),tr=!1,f=e.memoizedState,o.state=f,ua(e,r,o,s);var v=e.memoizedState;l!==d||f!==v||wt.current||tr?(typeof p=="function"&&(hd(e,n,p,r),v=e.memoizedState),(u=tr||lm(e,n,u,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return _d(t,e,n,r,i,s)}function _d(t,e,n,r,s,i){Kg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Zp(e,n,!1),Bn(t,e,i);r=e.stateNode,Rw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):dt(t,e,l,i),e.memoizedState=r.state,s&&Zp(e,n,!0),e.child}function Jg(t){var e=t.stateNode;e.pendingContext?Jp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Jp(t,e.context,!1),Lh(t,e.containerInfo)}function mm(t,e,n,r,s){return Ys(),Ih(s),e.flags|=256,dt(t,e,n,r),e.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function yd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Zg(t,e,n){var r=e.pendingProps,s=Ee.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),we(Ee,s&1),t===null)return ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=sc(o,r,0,null),t=Hr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=yd(n),e.memoizedState=gd,t):$h(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return jw(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=xr(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=xr(l,i):(i=Hr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?yd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=gd,r}return i=t.child,t=i.sibling,r=xr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $h(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vl(t,e,n,r){return r!==null&&Ih(r),Qs(e,t.child,null,n),t=$h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=su(Error(P(422))),vl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=sc({mode:"visible",children:r.children},s,0,null),i=Hr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=yd(o),e.memoizedState=gd,i);if(!(e.mode&1))return vl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(P(419)),r=su(i,r,void 0),vl(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=Xe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Fn(t,s),tn(r,t,s,-1))}return Gh(),r=su(Error(P(421))),vl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Hw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Pt=_r(s.nextSibling),Lt=e,Ne=!0,Kt=null,t!==null&&(Ft[Bt++]=Tn,Ft[Bt++]=Rn,Ft[Bt++]=Gr,Tn=t.id,Rn=t.overflow,Gr=e),e=$h(e,r.children),e.flags|=4096,e)}function _m(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),dd(t.return,e,n)}function iu(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function ey(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(dt(t,e,r.children,n),r=Ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_m(t,n,e);else if(t.tag===19)_m(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ee,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&da(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),iu(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&da(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}iu(e,!0,n,null,i);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pw(t,e,n){switch(e.tag){case 3:Jg(e),Ys();break;case 5:Ng(e);break;case 1:kt(e.type)&&ia(e);break;case 4:Lh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;we(aa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ee,Ee.current&1),e.flags|=128,null):n&e.child.childLanes?Zg(t,e,n):(we(Ee,Ee.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);we(Ee,Ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ey(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ee,Ee.current),r)break;return null;case 22:case 23:return e.lanes=0,Xg(t,e,n)}return Bn(t,e,n)}var ty,vd,ny,ry;ty=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vd=function(){};ny=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Fr(gn.current);var i=null;switch(n){case"input":s=Bu(t,s),r=Bu(t,r),i=[];break;case"select":s=Te({},s,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":s=Hu(t,s),r=Hu(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ra)}Yu(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ke("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ry=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ti(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Aw(t,e,n){var r=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return kt(e.type)&&sa(),ot(e),null;case 3:return r=e.stateNode,Gs(),Ce(wt),Ce(ct),Dh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Ed(Kt),Kt=null))),vd(t,e),ot(e),null;case 5:Oh(e);var s=Fr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)ny(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return ot(e),null}if(t=Fr(gn.current),gl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[pn]=e,r[yo]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Ui.length;s++)ke(Ui[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Sp(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":Ep(r,i),ke("invalid",r)}Yu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&_l(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&_l(r.textContent,l,t),s=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":al(r),Np(r,i,!0);break;case"textarea":al(r),Ip(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ra)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=j0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[yo]=r,ty(t,e,!1,!1),e.stateNode=t;e:{switch(o=Qu(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ui.length;s++)ke(Ui[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":Sp(t,r),s=Bu(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Te({},r,{value:void 0}),ke("invalid",t);break;case"textarea":Ep(t,r),s=Hu(t,r),ke("invalid",t);break;default:s=r}Yu(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?L0(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&P0(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ao(t,a):typeof a=="number"&&ao(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ke("scroll",t):a!=null&&hh(t,i,a,o))}switch(n){case"input":al(t),Np(t,r,!1);break;case"textarea":al(t),Ip(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?js(t,!!r.multiple,i,!1):r.defaultValue!=null&&js(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)ry(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Fr(xo.current),Fr(gn.current),gl(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(i=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:_l(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ot(e),null;case 13:if(Ce(Ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Pt!==null&&e.mode&1&&!(e.flags&128))bg(),Ys(),e.flags|=98560,i=!1;else if(i=gl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(P(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[pn]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),i=!1}else Kt!==null&&(Ed(Kt),Kt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ee.current&1?Be===0&&(Be=3):Gh())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return Gs(),vd(t,e),t===null&&_o(e.stateNode.containerInfo),ot(e),null;case 10:return jh(e.type._context),ot(e),null;case 17:return kt(e.type)&&sa(),ot(e),null;case 19:if(Ce(Ee),i=e.memoizedState,i===null)return ot(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ti(i,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=da(t),o!==null){for(e.flags|=128,Ti(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ee,Ee.current&1|2),e.child}t=t.sibling}i.tail!==null&&Me()>Xs&&(e.flags|=128,r=!0,Ti(i,!1),e.lanes=4194304)}else{if(!r)if(t=da(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ne)return ot(e),null}else 2*Me()-i.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,r=!0,Ti(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Me(),e.sibling=null,n=Ee.current,we(Ee,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return Qh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function Lw(t,e){switch(Eh(e),e.tag){case 1:return kt(e.type)&&sa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Ce(wt),Ce(ct),Dh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Oh(e),null;case 13:if(Ce(Ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ce(Ee),null;case 4:return Gs(),null;case 10:return jh(e.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var xl=!1,lt=!1,Ow=typeof WeakSet=="function"?WeakSet:Set,F=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function xd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var gm=!1;function Dw(t,e){if(rd=ea,t=ag(),Sh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==i||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++h===r&&(a=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},ea=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,_=e.stateNode,m=_.getSnapshotBeforeUpdate(e.elementType===e.type?w:qt(e.type,w),k);_.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){Re(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return v=gm,gm=!1,v}function Qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&xd(e,n,i)}s=s.next}while(s!==r)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sy(t){var e=t.alternate;e!==null&&(t.alternate=null,sy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[yo],delete e[ld],delete e[yw],delete e[vw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function iy(t){return t.tag===5||t.tag===3||t.tag===4}function ym(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ra));else if(r!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(kd(t,e,n),t=t.sibling;t!==null;)kd(t,e,n),t=t.sibling}var Ze=null,Xt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)oy(t,e,n),n=n.sibling}function oy(t,e,n){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Ga,n)}catch{}switch(n.tag){case 5:lt||Es(n,e);case 6:var r=Ze,s=Xt;Ze=null,Jn(t,e,n),Ze=r,Xt=s,Ze!==null&&(Xt?(t=Ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ze.removeChild(n.stateNode));break;case 18:Ze!==null&&(Xt?(t=Ze,n=n.stateNode,t.nodeType===8?Jc(t.parentNode,n):t.nodeType===1&&Jc(t,n),fo(t)):Jc(Ze,n.stateNode));break;case 4:r=Ze,s=Xt,Ze=n.stateNode.containerInfo,Xt=!0,Jn(t,e,n),Ze=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&xd(n,e,o),s=s.next}while(s!==r)}Jn(t,e,n);break;case 1:if(!lt&&(Es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Jn(t,e,n),lt=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function vm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ow),e.forEach(function(r){var s=Vw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ze=l.stateNode,Xt=!1;break e;case 3:Ze=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ze=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ze===null)throw Error(P(160));oy(i,o,s),Ze=null,Xt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(u){Re(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ly(e,t),e=e.sibling}function ly(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),hn(t),r&4){try{Qi(3,t,t.return),nc(3,t)}catch(w){Re(t,t.return,w)}try{Qi(5,t,t.return)}catch(w){Re(t,t.return,w)}}break;case 1:Gt(e,t),hn(t),r&512&&n!==null&&Es(n,n.return);break;case 5:if(Gt(e,t),hn(t),r&512&&n!==null&&Es(n,n.return),t.flags&32){var s=t.stateNode;try{ao(s,"")}catch(w){Re(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&T0(s,i),Qu(l,o);var u=Qu(l,i);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?L0(s,d):h==="dangerouslySetInnerHTML"?P0(s,d):h==="children"?ao(s,d):hh(s,h,d,u)}switch(l){case"input":$u(s,i);break;case"textarea":R0(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?js(s,!!i.multiple,p,!1):f!==!!i.multiple&&(i.defaultValue!=null?js(s,!!i.multiple,i.defaultValue,!0):js(s,!!i.multiple,i.multiple?[]:"",!1))}s[yo]=i}catch(w){Re(t,t.return,w)}}break;case 6:if(Gt(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(P(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){Re(t,t.return,w)}}break;case 3:if(Gt(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(w){Re(t,t.return,w)}break;case 4:Gt(e,t),hn(t);break;case 13:Gt(e,t),hn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Vh=Me())),r&4&&vm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(u=lt)||h,Gt(e,t),lt=u):Gt(e,t),hn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(F=t,h=t.child;h!==null;){for(d=F=h;F!==null;){switch(f=F,p=f.child,f.tag){case 0:case 11:case 14:case 15:Qi(4,f,f.return);break;case 1:Es(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:Es(f,f.return);break;case 22:if(f.memoizedState!==null){bm(d);continue}}p!==null?(p.return=f,F=p):bm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=A0("display",o))}catch(w){Re(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Re(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gt(e,t),hn(t),r&4&&vm(t);break;case 21:break;default:Gt(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(iy(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ao(s,""),r.flags&=-33);var i=ym(t);kd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ym(t);wd(t,l,o);break;default:throw Error(P(161))}}catch(a){Re(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mw(t,e,n){F=t,ay(t)}function ay(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var s=F,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||xl;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||lt;l=xl;var u=lt;if(xl=o,(lt=a)&&!u)for(F=s;F!==null;)o=F,a=o.child,o.tag===22&&o.memoizedState!==null?wm(s):a!==null?(a.return=o,F=a):wm(s);for(;i!==null;)F=i,ay(i),i=i.sibling;F=s,xl=l,lt=u}xm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,F=i):xm(t)}}function xm(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||nc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&sm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}lt||e.flags&512&&bd(e)}catch(f){Re(e,e.return,f)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function bm(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function wm(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(a){Re(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){Re(e,s,a)}}var i=e.return;try{bd(e)}catch(a){Re(e,i,a)}break;case 5:var o=e.return;try{bd(e)}catch(a){Re(e,o,a)}}}catch(a){Re(e,e.return,a)}if(e===t){F=null;break}var l=e.sibling;if(l!==null){l.return=e.return,F=l;break}F=e.return}}var zw=Math.ceil,pa=Yn.ReactCurrentDispatcher,Wh=Yn.ReactCurrentOwner,Ht=Yn.ReactCurrentBatchConfig,ae=0,Xe=null,ze=null,tt=0,jt=0,Is=Rr(0),Be=0,Co=null,Xr=0,rc=0,Hh=0,Gi=null,yt=null,Vh=0,Xs=1/0,Sn=null,ma=!1,Cd=null,yr=null,bl=!1,dr=null,_a=0,qi=0,Sd=null,Fl=-1,Bl=0;function ft(){return ae&6?Me():Fl!==-1?Fl:Fl=Me()}function vr(t){return t.mode&1?ae&2&&tt!==0?tt&-tt:bw.transition!==null?(Bl===0&&(Bl=Y0()),Bl):(t=me,t!==0||(t=window.event,t=t===void 0?16:Z0(t.type)),t):1}function tn(t,e,n,r){if(50<qi)throw qi=0,Sd=null,Error(P(185));Bo(t,n,r),(!(ae&2)||t!==Xe)&&(t===Xe&&(!(ae&2)&&(rc|=n),Be===4&&ir(t,tt)),Ct(t,r),n===1&&ae===0&&!(e.mode&1)&&(Xs=Me()+500,Za&&jr()))}function Ct(t,e){var n=t.callbackNode;b1(t,e);var r=Zl(t,t===Xe?tt:0);if(r===0)n!==null&&jp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jp(n),e===1)t.tag===0?xw(km.bind(null,t)):yg(km.bind(null,t)),_w(function(){!(ae&6)&&jr()}),n=null;else{switch(Q0(r)){case 1:n=gh;break;case 4:n=H0;break;case 16:n=Jl;break;case 536870912:n=V0;break;default:n=Jl}n=_y(n,cy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cy(t,e){if(Fl=-1,Bl=0,ae&6)throw Error(P(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var r=Zl(t,t===Xe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ga(t,r);else{e=r;var s=ae;ae|=2;var i=dy();(Xe!==t||tt!==e)&&(Sn=null,Xs=Me()+500,Wr(t,e));do try{Bw();break}catch(l){uy(t,l)}while(!0);Rh(),pa.current=i,ae=s,ze!==null?e=0:(Xe=null,tt=0,e=Be)}if(e!==0){if(e===2&&(s=Ju(t),s!==0&&(r=s,e=Nd(t,s))),e===1)throw n=Co,Wr(t,0),ir(t,r),Ct(t,Me()),n;if(e===6)ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!Uw(s)&&(e=ga(t,r),e===2&&(i=Ju(t),i!==0&&(r=i,e=Nd(t,i))),e===1))throw n=Co,Wr(t,0),ir(t,r),Ct(t,Me()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Or(t,yt,Sn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Vh+500-Me(),10<e)){if(Zl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=od(Or.bind(null,t,yt,Sn),e);break}Or(t,yt,Sn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-en(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zw(r/1960))-r,10<r){t.timeoutHandle=od(Or.bind(null,t,yt,Sn),r);break}Or(t,yt,Sn);break;case 5:Or(t,yt,Sn);break;default:throw Error(P(329))}}}return Ct(t,Me()),t.callbackNode===n?cy.bind(null,t):null}function Nd(t,e){var n=Gi;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=ga(t,e),t!==2&&(e=yt,yt=n,e!==null&&Ed(e)),t}function Ed(t){yt===null?yt=t:yt.push.apply(yt,t)}function Uw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Hh,e&=~rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-en(e),r=1<<n;t[n]=-1,e&=~r}}function km(t){if(ae&6)throw Error(P(327));Ds();var e=Zl(t,0);if(!(e&1))return Ct(t,Me()),null;var n=ga(t,e);if(t.tag!==0&&n===2){var r=Ju(t);r!==0&&(e=r,n=Nd(t,r))}if(n===1)throw n=Co,Wr(t,0),ir(t,e),Ct(t,Me()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Or(t,yt,Sn),Ct(t,Me()),null}function Yh(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Xs=Me()+500,Za&&jr())}}function Kr(t){dr!==null&&dr.tag===0&&!(ae&6)&&Ds();var e=ae;ae|=1;var n=Ht.transition,r=me;try{if(Ht.transition=null,me=1,t)return t()}finally{me=r,Ht.transition=n,ae=e,!(ae&6)&&jr()}}function Qh(){jt=Is.current,Ce(Is)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mw(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Eh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:Gs(),Ce(wt),Ce(ct),Dh();break;case 5:Oh(r);break;case 4:Gs();break;case 13:Ce(Ee);break;case 19:Ce(Ee);break;case 10:jh(r.type._context);break;case 22:case 23:Qh()}n=n.return}if(Xe=t,ze=t=xr(t.current,null),tt=jt=e,Be=0,Co=null,Hh=rc=Xr=0,yt=Gi=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ur=null}return t}function uy(t,e){do{var n=ze;try{if(Rh(),Ml.current=fa,ha){for(var r=Ie.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ha=!1}if(qr=0,Ve=Ue=Ie=null,Yi=!1,bo=0,Wh.current=null,n===null||n.return===null){Be=1,Co=e,ze=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=tt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=um(o);if(p!==null){p.flags&=-257,dm(p,o,l,i,e),p.mode&1&&cm(i,u,e),e=p,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){cm(i,u,e),Gh();break e}a=Error(P(426))}}else if(Ne&&l.mode&1){var k=um(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),dm(k,o,l,i,e),Ih(qs(a,l));break e}}i=a=qs(a,l),Be!==4&&(Be=2),Gi===null?Gi=[i]:Gi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=Qg(i,a,e);rm(i,_);break e;case 1:l=a;var m=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yr===null||!yr.has(y)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Gg(i,l,e);rm(i,x);break e}}i=i.return}while(i!==null)}fy(n)}catch(b){e=b,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function dy(){var t=pa.current;return pa.current=fa,t===null?fa:t}function Gh(){(Be===0||Be===3||Be===2)&&(Be=4),Xe===null||!(Xr&268435455)&&!(rc&268435455)||ir(Xe,tt)}function ga(t,e){var n=ae;ae|=2;var r=dy();(Xe!==t||tt!==e)&&(Sn=null,Wr(t,e));do try{Fw();break}catch(s){uy(t,s)}while(!0);if(Rh(),ae=n,pa.current=r,ze!==null)throw Error(P(261));return Xe=null,tt=0,Be}function Fw(){for(;ze!==null;)hy(ze)}function Bw(){for(;ze!==null&&!h1();)hy(ze)}function hy(t){var e=my(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?fy(t):ze=e,Wh.current=null}function fy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lw(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,ze=null;return}}else if(n=Aw(n,e,jt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Be===0&&(Be=5)}function Or(t,e,n){var r=me,s=Ht.transition;try{Ht.transition=null,me=1,$w(t,e,n,r)}finally{Ht.transition=s,me=r}return null}function $w(t,e,n,r){do Ds();while(dr!==null);if(ae&6)throw Error(P(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(w1(t,i),t===Xe&&(ze=Xe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,_y(Jl,function(){return Ds(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ht.transition,Ht.transition=null;var o=me;me=1;var l=ae;ae|=4,Wh.current=null,Dw(t,n),ly(n,t),aw(sd),ea=!!rd,sd=rd=null,t.current=n,Mw(n),f1(),ae=l,me=o,Ht.transition=i}else t.current=n;if(bl&&(bl=!1,dr=t,_a=s),i=t.pendingLanes,i===0&&(yr=null),_1(n.stateNode),Ct(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ma)throw ma=!1,t=Cd,Cd=null,t;return _a&1&&t.tag!==0&&Ds(),i=t.pendingLanes,i&1?t===Sd?qi++:(qi=0,Sd=t):qi=0,jr(),null}function Ds(){if(dr!==null){var t=Q0(_a),e=Ht.transition,n=me;try{if(Ht.transition=null,me=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,_a=0,ae&6)throw Error(P(331));var s=ae;for(ae|=4,F=t.current;F!==null;){var i=F,o=i.child;if(F.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(F=u;F!==null;){var h=F;switch(h.tag){case 0:case 11:case 15:Qi(8,h,i)}var d=h.child;if(d!==null)d.return=h,F=d;else for(;F!==null;){h=F;var f=h.sibling,p=h.return;if(sy(h),h===u){F=null;break}if(f!==null){f.return=p,F=f;break}F=p}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}F=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,F=o;else e:for(;F!==null;){if(i=F,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qi(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,F=_;break e}F=i.return}}var m=t.current;for(F=m;F!==null;){o=F;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,F=y;else e:for(o=m;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:nc(9,l)}}catch(b){Re(l,l.return,b)}if(l===o){F=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,F=x;break e}F=l.return}}if(ae=s,jr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Ga,t)}catch{}r=!0}return r}finally{me=n,Ht.transition=e}}return!1}function Cm(t,e,n){e=qs(n,e),e=Qg(t,e,1),t=gr(t,e,1),e=ft(),t!==null&&(Bo(t,1,e),Ct(t,e))}function Re(t,e,n){if(t.tag===3)Cm(t,t,n);else for(;e!==null;){if(e.tag===3){Cm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=qs(n,t),t=Gg(e,t,1),e=gr(e,t,1),t=ft(),e!==null&&(Bo(e,1,t),Ct(e,t));break}}e=e.return}}function Ww(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(tt&n)===n&&(Be===4||Be===3&&(tt&130023424)===tt&&500>Me()-Vh?Wr(t,0):Hh|=n),Ct(t,e)}function py(t,e){e===0&&(t.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var n=ft();t=Fn(t,e),t!==null&&(Bo(t,e,n),Ct(t,n))}function Hw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),py(t,n)}function Vw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),py(t,n)}var my;my=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,Pw(t,e,n);vt=!!(t.flags&131072)}else vt=!1,Ne&&e.flags&1048576&&vg(e,la,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ul(t,e),t=e.pendingProps;var s=Vs(e,ct.current);Os(e,n),s=zh(null,e,r,t,s,n);var i=Uh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(r)?(i=!0,ia(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ah(e),s.updater=tc,e.stateNode=s,s._reactInternals=e,fd(e,r,t,n),e=_d(null,e,r,!0,i,n)):(e.tag=0,Ne&&i&&Nh(e),dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ul(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Qw(r),t=qt(r,t),s){case 0:e=md(null,e,r,t,n);break e;case 1:e=pm(null,e,r,t,n);break e;case 11:e=hm(null,e,r,t,n);break e;case 14:e=fm(null,e,r,qt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),md(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),pm(t,e,r,s,n);case 3:e:{if(Jg(e),t===null)throw Error(P(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Sg(t,e),ua(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qs(Error(P(423)),e),e=mm(t,e,r,n,s);break e}else if(r!==s){s=qs(Error(P(424)),e),e=mm(t,e,r,n,s);break e}else for(Pt=_r(e.stateNode.containerInfo.firstChild),Lt=e,Ne=!0,Kt=null,n=kg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===s){e=Bn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return Ng(e),t===null&&ud(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,id(r,s)?o=null:i!==null&&id(r,i)&&(e.flags|=32),Kg(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&ud(e),null;case 13:return Zg(t,e,n);case 4:return Lh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),hm(t,e,r,s,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,we(aa,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!wt.current){e=Bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Dn(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),dd(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),dd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Os(e,n),s=Vt(s),r=r(s),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,s=qt(r,e.pendingProps),s=qt(r.type,s),fm(t,e,r,s,n);case 15:return qg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Ul(t,e),e.tag=1,kt(r)?(t=!0,ia(e)):t=!1,Os(e,n),Yg(e,r,s),fd(e,r,s,n),_d(null,e,r,!0,t,n);case 19:return ey(t,e,n);case 22:return Xg(t,e,n)}throw Error(P(156,e.tag))};function _y(t,e){return W0(t,e)}function Yw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new Yw(t,e,n,r)}function qh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qw(t){if(typeof t=="function")return qh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ph)return 11;if(t===mh)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")qh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Hr(n.children,s,i,e);case fh:o=8,s|=8;break;case Mu:return t=$t(12,n,e,s|2),t.elementType=Mu,t.lanes=i,t;case zu:return t=$t(13,n,e,s),t.elementType=zu,t.lanes=i,t;case Uu:return t=$t(19,n,e,s),t.elementType=Uu,t.lanes=i,t;case N0:return sc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C0:o=10;break e;case S0:o=9;break e;case ph:o=11;break e;case mh:o=14;break e;case er:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=$t(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Hr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function sc(t,e,n,r){return t=$t(22,t,r,e),t.elementType=N0,t.lanes=n,t.stateNode={isHidden:!1},t}function ou(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function lu(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Gw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bc(0),this.expirationTimes=Bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xh(t,e,n,r,s,i,o,l,a){return t=new Gw(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ah(i),t}function qw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function gy(t){if(!t)return Sr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(kt(n))return gg(t,n,e)}return e}function yy(t,e,n,r,s,i,o,l,a){return t=Xh(n,r,!0,t,s,i,o,l,a),t.context=gy(null),n=t.current,r=ft(),s=vr(n),i=Dn(r,s),i.callback=e??null,gr(n,i,s),t.current.lanes=s,Bo(t,s,r),Ct(t,r),t}function ic(t,e,n,r){var s=e.current,i=ft(),o=vr(s);return n=gy(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(s,e,o),t!==null&&(tn(t,s,o,i),Dl(t,s,o)),o}function ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Kh(t,e){Sm(t,e),(t=t.alternate)&&Sm(t,e)}function Xw(){return null}var vy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jh(t){this._internalRoot=t}oc.prototype.render=Jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));ic(t,e,null,null)};oc.prototype.unmount=Jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){ic(null,t,null,null)}),e[Un]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=X0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&J0(t)}};function Zh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function Kw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=ya(o);i.call(u)}}var o=yy(e,r,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[Un]=o.current,_o(t.nodeType===8?t.parentNode:t),Kr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=ya(a);l.call(u)}}var a=Xh(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=a,t[Un]=a.current,_o(t.nodeType===8?t.parentNode:t),Kr(function(){ic(e,a,n,r)}),a}function ac(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=ya(o);l.call(a)}}ic(e,o,t,s)}else o=Kw(n,e,t,s,r);return ya(o)}G0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(yh(e,n|1),Ct(e,Me()),!(ae&6)&&(Xs=Me()+500,jr()))}break;case 13:Kr(function(){var r=Fn(t,1);if(r!==null){var s=ft();tn(r,t,1,s)}}),Kh(t,1)}};vh=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=ft();tn(e,t,134217728,n)}Kh(t,134217728)}};q0=function(t){if(t.tag===13){var e=vr(t),n=Fn(t,e);if(n!==null){var r=ft();tn(n,t,e,r)}Kh(t,e)}};X0=function(){return me};K0=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};qu=function(t,e,n){switch(e){case"input":if($u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ja(r);if(!s)throw Error(P(90));I0(r),$u(r,s)}}}break;case"textarea":R0(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};M0=Yh;z0=Kr;var Jw={usingClientEntryPoint:!1,Events:[Wo,ws,Ja,O0,D0,Yh]},Ri={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zw={bundleType:Ri.bundleType,version:Ri.version,rendererPackageName:Ri.rendererPackageName,rendererConfig:Ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=B0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ri.findFiberByHostInstance||Xw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{Ga=wl.inject(Zw),_n=wl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jw;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zh(e))throw Error(P(200));return qw(t,e,null,n)};Dt.createRoot=function(t,e){if(!Zh(t))throw Error(P(299));var n=!1,r="",s=vy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Xh(t,1,!1,null,null,n,!1,r,s),t[Un]=e.current,_o(t.nodeType===8?t.parentNode:t),new Jh(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=B0(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Kr(t)};Dt.hydrate=function(t,e,n){if(!lc(e))throw Error(P(200));return ac(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!Zh(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=vy;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=yy(e,null,t,1,n??null,s,!1,i,o),t[Un]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new oc(e)};Dt.render=function(t,e,n){if(!lc(e))throw Error(P(200));return ac(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!lc(t))throw Error(P(40));return t._reactRootContainer?(Kr(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Dt.unstable_batchedUpdates=Yh;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return ac(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xy)}catch(t){console.error(t)}}xy(),x0.exports=Dt;var Ts=x0.exports,Em=Ts;Ou.createRoot=Em.createRoot,Ou.hydrateRoot=Em.hydrateRoot;var ek=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}`,tk={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=ek,document.head.appendChild(t))}var ve=tk,nk=({size:t=24})=>c.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),au="__agentation_freeze";function rk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[au]||(t[au]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[au]}var Je=rk();typeof window<"u"&&!Je.installed&&(Je.origSetTimeout=window.setTimeout.bind(window),Je.origSetInterval=window.setInterval.bind(window),Je.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?Je.origSetTimeout(t,e):Je.origSetTimeout((...r)=>{Je.frozen?Je.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?Je.origSetInterval(t,e):Je.origSetInterval((...r)=>{Je.frozen||t(...r)},e,...n),window.requestAnimationFrame=t=>Je.origRAF(e=>{Je.frozen?Je.frozenRAFQueue.push(t):t(e)}),Je.installed=!0);var ps=Je.origSetTimeout;Je.origSetInterval;g.forwardRef(function({element:e,timestamp:n,selectedText:r,placeholder:s="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:a,onDelete:u,style:h,accentColor:d="#3c82f7",isExiting:f=!1,lightMode:p=!1,computedStyles:v},w){const[k,_]=g.useState(i),[m,y]=g.useState(!1),[x,b]=g.useState("initial"),[S,I]=g.useState(!1),[C,R]=g.useState(!1),N=g.useRef(null),E=g.useRef(null),T=g.useRef(null),A=g.useRef(null);g.useEffect(()=>{f&&x!=="exit"&&b("exit")},[f,x]),g.useEffect(()=>{ps(()=>{b("enter")},0);const z=ps(()=>{b("entered")},200),M=ps(()=>{const H=N.current;H&&(H.focus(),H.selectionStart=H.selectionEnd=H.value.length,H.scrollTop=H.scrollHeight)},50);return()=>{clearTimeout(z),clearTimeout(M),T.current&&clearTimeout(T.current),A.current&&clearTimeout(A.current)}},[]);const Y=g.useCallback(()=>{A.current&&clearTimeout(A.current),y(!0),A.current=ps(()=>{var z;y(!1),(z=N.current)==null||z.focus()},250)},[]);g.useImperativeHandle(w,()=>({shake:Y}),[Y]);const te=g.useCallback(()=>{b("exit"),T.current=ps(()=>{a()},150)},[a]),Z=g.useCallback(()=>{k.trim()&&l(k.trim())},[k,l]),Q=g.useCallback(z=>{z.nativeEvent.isComposing||(z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),Z()),z.key==="Escape"&&te())},[Z,te]),D=[ve.popup,p?ve.light:"",x==="enter"?ve.enter:"",x==="entered"?ve.entered:"",x==="exit"?ve.exit:"",m?ve.shake:""].filter(Boolean).join(" ");return c.jsxs("div",{ref:E,className:D,"data-annotation-popup":!0,style:h,onClick:z=>z.stopPropagation(),children:[c.jsxs("div",{className:ve.header,children:[v&&Object.keys(v).length>0?c.jsxs("button",{className:ve.headerToggle,onClick:()=>{const z=C;R(!C),z&&ps(()=>{var M;return(M=N.current)==null?void 0:M.focus()},0)},type:"button",children:[c.jsx("svg",{className:`${ve.chevron} ${C?ve.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{className:ve.element,children:e})]}):c.jsx("span",{className:ve.element,children:e}),n&&c.jsx("span",{className:ve.timestamp,children:n})]}),v&&Object.keys(v).length>0&&c.jsx("div",{className:`${ve.stylesWrapper} ${C?ve.expanded:""}`,children:c.jsx("div",{className:ve.stylesInner,children:c.jsx("div",{className:ve.stylesBlock,children:Object.entries(v).map(([z,M])=>c.jsxs("div",{className:ve.styleLine,children:[c.jsx("span",{className:ve.styleProperty,children:z.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",c.jsx("span",{className:ve.styleValue,children:M}),";"]},z))})})}),r&&c.jsxs("div",{className:ve.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),c.jsx("textarea",{ref:N,className:ve.textarea,style:{borderColor:S?d:void 0},placeholder:s,value:k,onChange:z=>_(z.target.value),onFocus:()=>I(!0),onBlur:()=>I(!1),rows:2,onKeyDown:Q}),c.jsxs("div",{className:ve.actions,children:[u&&c.jsx("div",{className:ve.deleteWrapper,children:c.jsx("button",{className:ve.deleteButton,onClick:u,type:"button",children:c.jsx(nk,{size:22})})}),c.jsx("button",{className:ve.cancel,onClick:te,children:"Cancel"}),c.jsx("button",{className:ve.submit,style:{backgroundColor:d,opacity:k.trim()?1:.4},onClick:Z,disabled:!k.trim(),children:o})]})]})});var sk=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.styles-module__buttonBadge___NeFWb.styles-module__light___r6n4Y {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(245, 166, 35, 0);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background: #34c759;
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background: #ff3b30;
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background: #f59e0b;
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}
.styles-module__settingsPanelContainer___Xksv8.styles-module__transitioning___qxzCk {
  overflow-x: clip;
  overflow-y: visible;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.2s ease-out;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-100%);
  opacity: 0;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease-out 0.1s;
  opacity: 0;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-100%);
  opacity: 1;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y svg {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
.styles-module__automationHeader___InP0r .styles-module__helpIcon___xQg56 svg {
  transform: none;
}
.styles-module__automationHeader___InP0r.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__automationDescription___NKlmo.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  color: #3c82f7;
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background: #3c82f7;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
.styles-module__light___r6n4Y .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(52, 199, 89, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(255, 59, 48, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background: #ff3b30;
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudgeDown___0cqpM svg {
  transform: translateY(1px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNoNudge___abogC svg {
  transform: translateY(0.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge1-5___DM2TQ svg {
  transform: translateY(1.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge2___TfWgC svg {
  transform: translateY(2px);
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=sk,document.head.appendChild(t))}var Im={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw ai(e)},ai=function(t){return new Error("Firebase Database ("+by.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ik=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ef={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(f=64)),r.push(n[h],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ik(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new ok;const f=i<<2|l>>4;if(r.push(f),u!==64){const p=l<<4&240|u>>2;if(r.push(p),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ok extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(t){const e=wy(t);return ef.encodeByteArray(e,!0)},va=function(t){return ky(t).replace(/\./g,"")},xa=function(t){try{return ef.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){return Cy(void 0,t)}function Cy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ak(n)||(t[n]=Cy(t[n],e[n]));return t}function ak(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=()=>ck().__FIREBASE_DEFAULTS__,dk=()=>{if(typeof process>"u"||typeof Im>"u")return;const t=Im.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xa(t[1]);return e&&JSON.parse(e)},tf=()=>{try{return uk()||dk()||hk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sy=t=>{var e,n;return(n=(e=tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ny=t=>{const e=Sy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ey=()=>{var t;return(t=tf())===null||t===void 0?void 0:t.config},Iy=t=>{var e;return(e=tf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function fk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mk(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _k(){return by.NODE_ADMIN===!0}function gk(){try{return typeof indexedDB=="object"}catch{return!1}}function yk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vk,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yo.prototype.create)}}class Yo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,l,r)}}function xk(t,e){return t.replace(bk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){return JSON.parse(t)}function qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=So(xa(i[0])||""),n=So(xa(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},wk=function(t){const e=jy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},kk=function(t){const e=jy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ks(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ba(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tm(i)&&Tm(o)){if(!wa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const f=(s<<5|s>>>27)+u+a+h+r[d]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Sk(t,e){const n=new Nk(t,e);return n.subscribe.bind(n)}class Nk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ek(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=cu),s.error===void 0&&(s.error=cu),s.complete===void 0&&(s.complete=cu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ek(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cu(){}function cc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Vo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jk(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rk(t){return t===Dr?void 0:t}function jk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Tk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const Ak={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},Lk=_e.INFO,Ok={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},Dk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ok[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rf{constructor(e){this.name=e,this._logLevel=Lk,this._logHandler=Dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ak[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const Mk=(t,e)=>e.some(n=>t instanceof n);let Rm,jm;function zk(){return Rm||(Rm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uk(){return jm||(jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,Td=new WeakMap,Ay=new WeakMap,uu=new WeakMap,sf=new WeakMap;function Fk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Py.set(n,t)}).catch(()=>{}),sf.set(e,t),e}function Bk(t){if(Td.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Td.set(t,e)}let Rd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Td.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ay.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $k(t){Rd=t(Rd)}function Wk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(du(this),e,...n);return Ay.set(r,e.sort?e.sort():[e]),br(r)}:Uk().includes(t)?function(...e){return t.apply(du(this),e),br(Py.get(this))}:function(...e){return br(t.apply(du(this),e))}}function Hk(t){return typeof t=="function"?Wk(t):(t instanceof IDBTransaction&&Bk(t),Mk(t,zk())?new Proxy(t,Rd):t)}function br(t){if(t instanceof IDBRequest)return Fk(t);if(uu.has(t))return uu.get(t);const e=Hk(t);return e!==t&&(uu.set(t,e),sf.set(e,t)),e}const du=t=>sf.get(t);function Vk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",a=>{r(br(o.result),a.oldVersion,a.newVersion,br(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Yk=["get","getKey","getAll","getAllKeys","count"],Qk=["put","add","delete","clear"],hu=new Map;function Pm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hu.get(e))return hu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yk.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return hu.set(e,i),i}$k(t=>({...t,get:(e,n,r)=>Pm(e,n)||t.get(e,n,r),has:(e,n)=>!!Pm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jd="@firebase/app",Am="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new rf("@firebase/app"),Xk="@firebase/app-compat",Kk="@firebase/analytics-compat",Jk="@firebase/analytics",Zk="@firebase/app-check-compat",e2="@firebase/app-check",t2="@firebase/auth",n2="@firebase/auth-compat",r2="@firebase/database",s2="@firebase/data-connect",i2="@firebase/database-compat",o2="@firebase/functions",l2="@firebase/functions-compat",a2="@firebase/installations",c2="@firebase/installations-compat",u2="@firebase/messaging",d2="@firebase/messaging-compat",h2="@firebase/performance",f2="@firebase/performance-compat",p2="@firebase/remote-config",m2="@firebase/remote-config-compat",_2="@firebase/storage",g2="@firebase/storage-compat",y2="@firebase/firestore",v2="@firebase/vertexai-preview",x2="@firebase/firestore-compat",b2="firebase",w2="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="[DEFAULT]",k2={[jd]:"fire-core",[Xk]:"fire-core-compat",[Jk]:"fire-analytics",[Kk]:"fire-analytics-compat",[e2]:"fire-app-check",[Zk]:"fire-app-check-compat",[t2]:"fire-auth",[n2]:"fire-auth-compat",[r2]:"fire-rtdb",[s2]:"fire-data-connect",[i2]:"fire-rtdb-compat",[o2]:"fire-fn",[l2]:"fire-fn-compat",[a2]:"fire-iid",[c2]:"fire-iid-compat",[u2]:"fire-fcm",[d2]:"fire-fcm-compat",[h2]:"fire-perf",[f2]:"fire-perf-compat",[p2]:"fire-rc",[m2]:"fire-rc-compat",[_2]:"fire-gcs",[g2]:"fire-gcs-compat",[y2]:"fire-fst",[x2]:"fire-fst-compat",[v2]:"fire-vertex","fire-js":"fire-js",[b2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map,C2=new Map,Ad=new Map;function Lm(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jr(t){const e=t.name;if(Ad.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Ad.set(e,t);for(const n of ka.values())Lm(n,t);for(const n of C2.values())Lm(n,t);return!0}function dc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new Yo("app","Firebase",S2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=w2;function Ly(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Pd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=Ey()),!n)throw wr.create("no-options");const i=ka.get(s);if(i){if(wa(n,i.options)&&wa(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new Pk(s);for(const a of Ad.values())o.addComponent(a);const l=new N2(n,r,o);return ka.set(s,l),l}function of(t=Pd){const e=ka.get(t);if(!e&&t===Pd&&Ey())return Ly();if(!e)throw wr.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let s=(r=k2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}Jr(new Nr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2="firebase-heartbeat-database",I2=1,No="firebase-heartbeat-store";let fu=null;function Oy(){return fu||(fu=Vk(E2,I2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),fu}async function T2(t){try{const n=(await Oy()).transaction(No),r=await n.objectStore(No).get(Dy(t));return await n.done,r}catch(e){if(e instanceof Qn)$n.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Om(t,e){try{const r=(await Oy()).transaction(No,"readwrite");await r.objectStore(No).put(e,Dy(t)),await r.done}catch(n){if(n instanceof Qn)$n.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Dy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2=1024,j2=30*24*60*60*1e3;class P2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new L2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Dm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=j2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dm(),{heartbeatsToSend:r,unsentEntries:s}=A2(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function Dm(){return new Date().toISOString().substring(0,10)}function A2(t,e=R2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Mm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class L2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gk()?yk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await T2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Om(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mm(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O2(t){Jr(new Nr("platform-logger",e=>new Gk(e),"PRIVATE")),Jr(new Nr("heartbeat",e=>new P2(e),"PRIVATE")),yn(jd,Am,t),yn(jd,Am,"esm2017"),yn("fire-js","")}O2("");function lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function My(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const D2=My,zy=new Yo("auth","Firebase",My());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new rf("@firebase/auth");function M2(t,...e){Ca.logLevel<=_e.WARN&&Ca.warn(`Auth (${as}): ${t}`,...e)}function Wl(t,...e){Ca.logLevel<=_e.ERROR&&Ca.error(`Auth (${as}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw cf(t,...e)}function nn(t,...e){return cf(t,...e)}function af(t,e,n){const r=Object.assign(Object.assign({},D2()),{[e]:n});return new Yo("auth","Firebase",r).create(e,{appName:t.name})}function Vr(t){return af(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function z2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bn(t,"argument-error"),af(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zy.create(t,...e)}function J(t,e,...n){if(!t)throw cf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wl(e),new Error(e)}function Wn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function U2(){return zm()==="http:"||zm()==="https:"}function zm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(U2()||pk()||"connection"in navigator)?navigator.onLine:!0}function B2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=nf()||Ry()}get(){return F2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=new Qo(3e4,6e4);function df(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ui(t,e,n,r,s={}){return Fy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ci(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return fk()||(u.referrerPolicy="no-referrer"),Uy.fetch()(By(t,t.config.apiHost,n,l),u)})}async function Fy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$2),e);try{const s=new V2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw kl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw kl(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw kl(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw kl(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw af(t,h,u);bn(t,h)}}catch(s){if(s instanceof Qn)throw s;bn(t,"network-request-failed",{message:String(s)})}}async function H2(t,e,n,r,s={}){const i=await ui(t,e,n,r,s);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function By(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?uf(t.config,s):`${t.config.apiScheme}://${s}`}class V2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),W2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y2(t,e){return ui(t,"POST","/v1/accounts:delete",e)}async function $y(t,e){return ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Q2(t,e=!1){const n=$e(t),r=await n.getIdToken(e),s=hf(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xi(pu(s.auth_time)),issuedAtTime:Xi(pu(s.iat)),expirationTime:Xi(pu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pu(t){return Number(t)*1e3}function hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wl("JWT malformed, contained fewer than 3 sections"),null;try{const s=xa(n);return s?JSON.parse(s):(Wl("Failed to decode base64 JWT payload"),null)}catch(s){return Wl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Um(t){const e=hf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&G2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Eo(t,$y(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wy(i.providerUserInfo):[],l=K2(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Od(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function X2(t){const e=$e(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wy(t){return t.map(e=>{var{providerId:n}=e,r=lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J2(t,e){const n=await Fy(t,{},async()=>{const r=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=By(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Uy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Z2(t,e){return ui(t,"POST","/v2/accounts:revokeToken",df(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await J2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new q2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Od(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Eo(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Q2(this,e)}reload(){return X2(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Vr(this.auth));const e=await this.getIdToken();return await Eo(this,Y2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:x,isAnonymous:b,providerData:S,stsTokenManager:I}=n;J(y&&I,e,"internal-error");const C=Ms.fromJSON(this.name,I);J(typeof y=="string",e,"internal-error"),Zn(d,e.name),Zn(f,e.name),J(typeof x=="boolean",e,"internal-error"),J(typeof b=="boolean",e,"internal-error"),Zn(p,e.name),Zn(v,e.name),Zn(w,e.name),Zn(k,e.name),Zn(_,e.name),Zn(m,e.name);const R=new An({uid:y,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:b,photoURL:v,phoneNumber:p,tenantId:w,stsTokenManager:C,createdAt:_,lastLoginAt:m});return S&&Array.isArray(S)&&(R.providerData=S.map(N=>Object.assign({},N))),k&&(R._redirectEventId=k),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ms;l.updateFromIdToken(r);const a=new An({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Od(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new Map;function Ln(t){Wn(t instanceof Function,"Expected a class definition");let e=Fm.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hy.type="NONE";const Bm=Hy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(Ln(Bm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(Bm);const o=Hl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=An._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new zs(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Ky(e))return"Webos";if(Yy(e))return"Safari";if((e.includes("chrome/")||Qy(e))&&!e.includes("edge/"))return"Chrome";if(qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vy(t=mt()){return/firefox\//i.test(t)}function Yy(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Qy(t=mt()){return/crios\//i.test(t)}function Gy(t=mt()){return/iemobile/i.test(t)}function qy(t=mt()){return/android/i.test(t)}function Xy(t=mt()){return/blackberry/i.test(t)}function Ky(t=mt()){return/webos/i.test(t)}function ff(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eC(t=mt()){var e;return ff(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tC(){return mk()&&document.documentMode===10}function Jy(t=mt()){return ff(t)||qy(t)||Ky(t)||Xy(t)||/windows phone/i.test(t)||Gy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e=[]){let n;switch(t){case"Browser":n=$m(mt());break;case"Worker":n=`${$m(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e={}){return ui(t,"GET","/v2/passwordPolicy",df(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=6;class iC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wm(this),this.idTokenSubscription=new Wm(this),this.beforeStateQueue=new nC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $y(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Vr(this));const n=e?$e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Vr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Vr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rC(this),n=new iC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&M2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hc(t){return $e(t)}class Wm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sk(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lC(t){pf=t}function aC(t){return pf.loadJS(t)}function cC(){return pf.gapiScript}function uC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t,e){const n=dc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wa(i,e??{}))return s;bn(s,"already-initialized")}return n.initialize({options:e})}function hC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fC(t,e,n){const r=hc(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ev(e),{host:o,port:l}=pC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),mC()}function ev(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pC(t){const e=ev(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hm(o)}}}function Hm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(t,e){return H2(t,"POST","/v1/accounts:signInWithIdp",df(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C="http://localhost";class Zr extends tv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=lf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Zr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:_C,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Go{constructor(){super("facebook.com")}static credential(e){return Zr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Go{constructor(){super("github.com")}static credential(e){return Zr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Go{constructor(){super("twitter.com")}static credential(e,n){return Zr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=Vm(r);return new Js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vm(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends Qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Na(e,n,r,s)}}function nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Na._fromErrorAndOperation(t,i,e,r):i})}async function gC(t,e,n=!1){const r=await Eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yC(t,e,n=!1){const{auth:r}=t;if(jn(r.app))return Promise.reject(Vr(r));const s="reauthenticate";try{const i=await Eo(t,nv(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=hf(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),Js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e,n=!1){if(jn(t.app))return Promise.reject(Vr(t));const r="signIn",s=await nv(t,r,e),i=await Js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function xC(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function bC(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function wC(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function kC(t){return $e(t).signOut()}const Ea="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=1e3,SC=10;class sv extends rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sv.type="LOCAL";const NC=sv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iv.type="SESSION";const ov=iv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await EC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=_f("",20);s.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function TC(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function RC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PC(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebaseLocalStorageDb",AC=1,Ia="firebaseLocalStorage",cv="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pc(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function LC(){const t=indexedDB.deleteDatabase(av);return new qo(t).toPromise()}function Dd(){const t=indexedDB.open(av,AC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ia,{keyPath:cv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ia)?e(r):(r.close(),await LC(),e(await Dd()))})})}async function Ym(t,e,n){const r=pc(t,!0).put({[cv]:e,value:n});return new qo(r).toPromise()}async function OC(t,e){const n=pc(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function Qm(t,e){const n=pc(t,!0).delete(e);return new qo(n).toPromise()}const DC=800,MC=3;class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>MC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fc._getInstance(PC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RC(),!this.activeServiceWorker)return;this.sender=new IC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await Ym(e,Ea,"1"),await Qm(e,Ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=pc(s,!1).getAll();return new qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uv.type="LOCAL";const zC=uv;new Qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t,e){return e?Ln(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends tv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UC(t){return vC(t.auth,new gf(t),t.bypassAuthState)}function FC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),yC(n,new gf(t),t.bypassAuthState)}async function BC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),gC(n,new gf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return BC;case"reauthViaPopup":case"reauthViaRedirect":return FC;default:bn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new Qo(2e3,1e4);async function WC(t,e,n){if(jn(t.app))return Promise.reject(nn(t,"operation-not-supported-in-this-environment"));const r=hc(t);z2(t,e,mf);const s=dv(r,n);return new Br(r,"signInViaPopup",e,s).executeNotNull()}class Br extends hv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$C.get())};e()}}Br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC="pendingRedirect",Vl=new Map;class VC extends hv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vl.get(this.auth._key());if(!e){try{const r=await YC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vl.set(this.auth._key(),e)}return this.bypassAuthState||Vl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YC(t,e){const n=qC(e),r=GC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function QC(t,e){Vl.set(t._key(),e)}function GC(t){return Ln(t._redirectPersistence)}function qC(t){return Hl(HC,t.config.apiKey,t.name)}async function XC(t,e,n=!1){if(jn(t.app))return Promise.reject(Vr(t));const r=hc(t),s=dv(r,e),o=await new VC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=10*60*1e3;class JC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t,e={}){return ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nS=/^https?/;async function rS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eS(t);for(const n of e)try{if(sS(n))return}catch{}bn(t,"unauthorized-domain")}function sS(t){const e=Ld(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!nS.test(n))return!1;if(tS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new Qo(3e4,6e4);function qm(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oS(t){return new Promise((e,n)=>{var r,s,i;function o(){qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qm(),n(nn(t,"network-request-failed"))},timeout:iS.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const l=uC("iframefcb");return vn()[l]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},aC(`${cC()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Yl=null,e})}let Yl=null;function lS(t){return Yl=Yl||oS(t),Yl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new Qo(5e3,15e3),cS="__/auth/iframe",uS="emulator/auth/iframe",dS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fS(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uf(e,uS):`https://${t.config.authDomain}/${cS}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=hS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ci(r).slice(1)}`}async function pS(t){const e=await lS(t),n=vn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:fS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),l=vn().setTimeout(()=>{i(o)},aS.get());function a(){vn().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_S=500,gS=600,yS="_blank",vS="http://localhost";class Xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xS(t,e,n,r=_S,s=gS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},mS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=mt().toLowerCase();n&&(l=Qy(u)?yS:n),Vy(u)&&(e=e||vS,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(eC(u)&&l!=="_self")return bS(e||"",l),new Xm(null);const d=window.open(e||"",l,h);J(d,t,"popup-blocked");try{d.focus()}catch{}return new Xm(d)}function bS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="__/auth/handler",kS="emulator/auth/handler",CS=encodeURIComponent("fac");async function Km(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof mf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Go){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${CS}=${encodeURIComponent(a)}`:"";return`${SS(t)}?${ci(l).slice(1)}${u}`}function SS({config:t}){return t.emulator?uf(t,kS):`https://${t.authDomain}/${wS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="webStorageSupport";class NS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ov,this._completeRedirectFn=XC,this._overrideRedirectResult=QC}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Km(e,n,r,Ld(),s);return xS(e,o,_f())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Km(e,n,r,Ld(),s);return TC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await pS(e),r=new JC(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mu,{type:mu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mu];o!==void 0&&n(!!o),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jy()||Yy()||ff()}}const ES=NS;var Jm="@firebase/auth",Zm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RS(t){Jr(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(t)},u=new oC(r,s,i,a);return hC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new Nr("auth-internal",e=>{const n=hc(e.getProvider("auth").getImmediate());return(r=>new IS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Jm,Zm,TS(t)),yn(Jm,Zm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=5*60,PS=Iy("authIdTokenMaxAge")||jS;let e_=null;const AS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>PS)return;const s=n==null?void 0:n.token;e_!==s&&(e_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LS(t=of()){const e=dc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dC(t,{popupRedirectResolver:ES,persistence:[zC,NC,ov]}),r=Iy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=AS(i.toString());bC(n,o,()=>o(n.currentUser)),xC(n,l=>o(l))}}const s=Sy("auth");return s&&fC(n,`http://${s}`),n}function OS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",OS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RS("Browser");var t_={};const n_="@firebase/database",r_="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pv="";function DS(t){pv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:So(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new MS(e)}}catch{}return new zS},$r=mv("localStorage"),US=mv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new rf("@firebase/database"),FS=function(){let t=1;return function(){return t++}}(),_v=function(t){const e=Ik(t),n=new Ck;n.update(e);const r=n.digest();return ef.encodeByteArray(r)},Xo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xo.apply(null,r):typeof r=="object"?e+=qe(r):e+=r,e+=" "}return e};let Ki=null,s_=!0;const BS=function(t,e){O(!0,"Can't turn on custom loggers persistently."),Fs.logLevel=_e.VERBOSE,Ki=Fs.log.bind(Fs)},et=function(...t){if(s_===!0&&(s_=!1,Ki===null&&US.get("logging_enabled")===!0&&BS()),Ki){const e=Xo.apply(null,t);Ki(e)}},Ko=function(t){return function(...e){et(t,...e)}},Md=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xo(...t);Fs.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${Xo(...t)}`;throw Fs.error(e),new Error(e)},pt=function(...t){const e="FIREBASE WARNING: "+Xo(...t);Fs.warn(e)},$S=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},WS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zs="[MIN_NAME]",es="[MAX_NAME]",cs=function(t,e){if(t===e)return 0;if(t===Zs||e===es)return-1;if(e===Zs||t===es)return 1;{const n=i_(t),r=i_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},HS=function(t,e){return t===e?0:t<e?-1:1},ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+qe(e))},vf=function(t){if(typeof t!="object"||t===null)return qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=qe(e[r]),n+=":",n+=vf(t[e[r]]);return n+="}",n},gv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yv=function(t){O(!yf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},VS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},YS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GS=new RegExp("^-?(0*)\\d{1,10}$"),qS=-2147483648,XS=2147483647,i_=function(t){if(GS.test(t)){const e=Number(t);if(e>=qS&&e<=XS)return e}return null},di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw pt("Exception was thrown by user callback.",n),e},Math.floor(0))}},KS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(et("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class Ql{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ql.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="5",vv="v",xv="s",bv="r",wv="f",kv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cv="ls",Sv="p",zd="ac",Nv="websocket",Ev="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function eN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Tv(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===Nv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ev)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eN(t)&&(n.ns=t.namespace);const s=[];return rt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.counters_={}}incrementCounter(e,n=1){kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={},gu={};function bf(t){const e=t.toString();return _u[e]||(_u[e]=new tN),_u[e]}function nN(t,e){const n=t.toString();return gu[n]||(gu[n]=e()),gu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&di(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="start",sN="close",iN="pLPCommand",oN="pRTLPCB",Rv="id",jv="pw",Pv="ser",lN="cb",aN="seg",cN="ts",uN="d",dN="dframe",Av=1870,Lv=30,hN=Av-Lv,fN=25e3,pN=3e4;class Rs{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ko(e),this.stats_=bf(n),this.urlFn=a=>(this.appCheckToken&&(a[zd]=this.appCheckToken),Tv(n,Ev,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new rN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pN)),WS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new wf((...i)=>{const[o,l,a,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===o_)this.id=l,this.password=a;else if(o===sN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[o_]="t",r[Pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[lN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vv]=xf,this.transportSessionId&&(r[xv]=this.transportSessionId),this.lastSessionId&&(r[Cv]=this.lastSessionId),this.applicationId&&(r[Sv]=this.applicationId),this.appCheckToken&&(r[zd]=this.appCheckToken),typeof location<"u"&&location.hostname&&kv.test(location.hostname)&&(r[bv]=wv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rs.forceAllow_=!0}static forceDisallow(){Rs.forceDisallow_=!0}static isAvailable(){return Rs.forceAllow_?!0:!Rs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!VS()&&!YS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ky(n),s=gv(r,hN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[dN]="t",r[Rv]=e,r[jv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class wf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FS(),window[iN+this.uniqueCallbackIdentifier]=e,window[oN+this.uniqueCallbackIdentifier]=n,this.myIFrame=wf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){et("frame writing exception"),l.stack&&et(l.stack),et(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||et("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rv]=this.myID,e[jv]=this.myPW,e[Pv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lv+r.length<=Av;){const o=this.pendingSegs.shift();r=r+"&"+aN+s+"="+o.seg+"&"+cN+s+"="+o.ts+"&"+uN+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(fN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{et("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=16384,_N=45e3;let Ta=null;typeof MozWebSocket<"u"?Ta=MozWebSocket:typeof WebSocket<"u"&&(Ta=WebSocket);class Jt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ko(this.connId),this.stats_=bf(n),this.connURL=Jt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[vv]=xf,typeof location<"u"&&location.hostname&&kv.test(location.hostname)&&(o[bv]=wv),n&&(o[xv]=n),r&&(o[Cv]=r),s&&(o[zd]=s),i&&(o[Sv]=i),Tv(e,Nv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$r.set("previous_websocket_failure",!0);try{let r;_k(),this.mySock=new Ta(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ta!==null&&!Jt.forceDisallow_}static previouslyFailed(){return $r.isInMemoryStorage||$r.get("previous_websocket_failure")===!0}markConnectionHealthy(){$r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=So(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gv(n,mN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_N))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rs,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Jt&&Jt.isAvailable();let r=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Jt];else{const s=this.transports_=[];for(const i of Io.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Io.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Io.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN=6e4,yN=5e3,vN=10*1024,xN=100*1024,yu="t",l_="d",bN="s",a_="r",wN="e",c_="o",u_="a",d_="n",h_="p",kN="h";class CN{constructor(e,n,r,s,i,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ko("c:"+this.id+":"),this.transportManager_=new Io(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>vN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yu in e){const n=e[yu];n===u_?this.upgradeIfSecondaryHealthy_():n===a_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===c_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ji("t",e),r=ji("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:h_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:d_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ji("t",e),r=ji("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ji(yu,e);if(l_ in e){const r=e[l_];if(n===kN){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===d_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bN?this.onConnectionShutdown_(r):n===a_?this.onReset_(r):n===wN?Md("Server Error: "+r):n===c_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Md("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xf!==r&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(gN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(yN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:h_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Dv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!nf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ra}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=32,p_=768;class ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ge("")}function ne(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ge(t.pieces_,e)}function kf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function To(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ge(e,0)}function je(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ge)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ge(n,0)}function se(t){return t.pieceNum_>=t.pieces_.length}function xt(t,e){const n=ne(t),r=ne(e);if(n===null)return e;if(n===r)return xt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function NN(t,e){const n=To(t,0),r=To(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=cs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Cf(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class EN{constructor(e,n){this.errorPrefix_=n,this.parts_=To(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uc(this.parts_[r]);zv(this)}}function IN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uc(e),zv(t)}function TN(t){const e=t.parts_.pop();t.byteLength_-=uc(e),t.parts_.length>0&&(t.byteLength_-=1)}function zv(t){if(t.byteLength_>p_)throw new Error(t.errorPrefix_+"has a key path longer than "+p_+" bytes ("+t.byteLength_+").");if(t.parts_.length>f_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+f_+") or object contains a cycle "+Mr(t))}function Mr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Dv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sf}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=1e3,RN=60*5*1e3,m_=30*1e3,jN=1.3,PN=3e4,AN="server_kill",__=3;class Mn extends Ov{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Mn.nextPersistentConnectionId_++,this.log_=Ko("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=RN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ra.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(qe(i)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Vo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;Mn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&kn(e,"w")){const r=Ks(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||kk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=m_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=wk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Md("Unrecognized action received from server: "+qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PN&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Mn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){O(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?et("getToken() completed but was canceled"):(et("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new CN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{pt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(AN)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&pt(d),a())}}}interrupt(e){et("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){et("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Id(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>vf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ge(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){et("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=__&&(this.reconnectDelay_=m_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){et("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=__&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pv.replace(/\./g,"-")]=1,nf()?e["framework.cordova"]=1:Ry()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ra.getInstance().currentlyOnline();return Id(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(Zs,e),s=new re(Zs,n);return this.compare(r,s)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cl;class Uv extends mc{static get __EMPTY_NODE(){return Cl}static set __EMPTY_NODE(e){Cl=e}compare(e,n){return cs(e.name,n.name)}isDefinedOn(e){throw ai("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(es,Cl)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Cl)}toString(){return".key"}}const Bs=new Uv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ye.RED,this.left=s??bt.EMPTY_NODE,this.right=i??bt.EMPTY_NODE}copy(e,n,r,s,i){return new Ye(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return bt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return bt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class LN{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class bt{constructor(e,n=bt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new bt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new bt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Sl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Sl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Sl(this.root_,null,this.comparator_,!0,e)}}bt.EMPTY_NODE=new LN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e){return cs(t.name,e.name)}function Nf(t,e){return cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud;function DN(t){Ud=t}const Fv=function(t){return typeof t=="number"?"number:"+yv(t):"string:"+t},Bv=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&kn(e,".sv"),"Priority must be a string or number.")}else O(t===Ud||t.isEmpty(),"priority of unexpected type.");O(t===Ud||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_;class He{constructor(e,n=He.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bv(this.priorityNode_)}static set __childrenNodeConstructor(e){g_=e}static get __childrenNodeConstructor(){return g_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new He(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return se(e)?this:ne(e)===".priority"?this.priorityNode_:He.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:He.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ne(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,He.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yv(this.value_):e+=this.value_,this.lazyHash_=_v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===He.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof He.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=He.VALUE_TYPE_ORDER.indexOf(n),i=He.VALUE_TYPE_ORDER.indexOf(r);return O(s>=0,"Unknown leaf type: "+n),O(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}He.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $v,Wv;function MN(t){$v=t}function zN(t){Wv=t}class UN extends mc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?cs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(es,new He("[PRIORITY-POST]",Wv))}makePost(e,n){const r=$v(e);return new re(n,new He("[PRIORITY-POST]",r))}toString(){return".priority"}}const Pe=new UN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=Math.log(2);class BN{constructor(e){const n=i=>parseInt(Math.log(i)/FN,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ja=function(t,e,n,r){t.sort(e);const s=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new Ye(f,d.node,Ye.BLACK,null,null);{const p=parseInt(h/2,10)+a,v=s(a,p),w=s(p+1,u);return d=t[p],f=n?n(d):d,new Ye(f,d.node,Ye.BLACK,v,w)}},i=function(a){let u=null,h=null,d=t.length;const f=function(v,w){const k=d-v,_=d;d-=v;const m=s(k+1,_),y=t[k],x=n?n(y):y;p(new Ye(x,y.node,w,null,m))},p=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),k=Math.pow(2,a.count-(v+1));w?f(k,Ye.BLACK):(f(k,Ye.BLACK),f(k,Ye.RED))}return h},o=new BN(t.length),l=i(o);return new bt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;const ms={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(ms&&Pe,"ChildrenNode.ts has not been loaded"),vu=vu||new On({".priority":ms},{".priority":Pe}),vu}get(e){const n=Ks(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof bt?n:null}hasIndex(e){return kn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==Bs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(re.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=ja(r,e.getCompare()):l=ms;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new On(h,u)}addToIndexes(e,n){const r=ba(this.indexes_,(s,i)=>{const o=Ks(this.indexSet_,i);if(O(o,"Missing index implementation for "+i),s===ms)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(re.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),ja(l,o.getCompare())}else return ms;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new re(e.name,l))),a.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=ba(this.indexes_,s=>{if(s===ms)return s;{const i=n.get(e.name);return i?s.remove(new re(e.name,i)):s}});return new On(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Bv(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ai||(Ai=new G(new bt(Nf),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ai}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ai:n}}getChild(e){const n=ne(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ai:this.priorityNode_;return new G(s,o,i)}}updateChild(e,n){const r=ne(e);if(r===null)return n;{O(ne(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Pe,(o,l)=>{n[o]=l.val(e),r++,i&&G.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fv(this.getPriority().val())+":"),this.forEachChild(Pe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":_v(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new re(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,re.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jo?-1:0}withIndex(e){if(e===Bs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Pe),s=n.getIterator(Pe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bs?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $N extends G{constructor(){super(new bt(Nf),G.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Jo=new $N;Object.defineProperties(re,{MIN:{value:new re(Zs,G.EMPTY_NODE)},MAX:{value:new re(es,Jo)}});Uv.__EMPTY_NODE=G.EMPTY_NODE;He.__childrenNodeConstructor=G;DN(Jo);zN(Jo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=!0;function Ge(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new He(n,Ge(e))}if(!(t instanceof Array)&&WN){const n=[];let r=!1;if(rt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new re(o,a)))}}),n.length===0)return G.EMPTY_NODE;const i=ja(n,ON,o=>o.name,Nf);if(r){const o=ja(n,Pe.getCompare());return new G(i,Ge(e),new On({".priority":o},{".priority":Pe}))}else return new G(i,Ge(e),On.Default)}else{let n=G.EMPTY_NODE;return rt(t,(r,s)=>{if(kn(t,r)&&r.substring(0,1)!=="."){const i=Ge(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ge(e))}}MN(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN extends mc{constructor(e){super(),this.indexPath_=e,O(!se(e)&&ne(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?cs(e.name,n.name):i}makePost(e,n){const r=Ge(e),s=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,s)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Jo);return new re(es,e)}toString(){return To(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN extends mc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=Ge(e);return new re(n,r)}toString(){return".value"}}const YN=new VN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){return{type:"value",snapshotNode:t}}function ei(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ro(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ro(n,l)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ei(n,r)):o.trackChildChange(jo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Pe,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ro(s,i))}),n.isLeafNode()||n.forEachChild(Pe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(jo(s,i,o))}else r.trackChildChange(ei(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.indexedFilter_=new Ef(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Po.getStartPost_(e),this.endPost_=Po.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new re(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(G.EMPTY_NODE);const i=this;return n.forEachChild(Pe,(o,l)=>{i.matches(new re(o,l))||(s=s.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new re(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=G.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(G.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const l=e;O(l.numChildren()===this.limit_,"");const a=new re(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,a);if(h&&!r.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(jo(n,r,d)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ro(n,d));const w=l.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(ei(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(u,a)>=0?(i!=null&&(i.trackChildChange(Ro(u.name,u.node)),i.trackChildChange(ei(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zs}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:es}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new If;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function qN(t){return t.loadsAllData()?new Ef(t.getIndex()):t.hasLimit()?new GN(t):new Po(t)}function y_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===YN?n="$value":t.index_===Bs?n="$key":(O(t.index_ instanceof HN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=qe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=qe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+qe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=qe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function v_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Ov{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ko("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Pa.getListenId_(e,r),l={};this.listens_[o]=l;const a=y_(e._queryParams);this.restRequest_(i+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Ks(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=Pa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=y_(e._queryParams),r=e._path.toString(),s=new Vo;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ci(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=So(l.responseText)}catch{pt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&pt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(){return{value:null,children:new Map}}function Vv(t,e,n){if(se(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ne(e);t.children.has(r)||t.children.set(r,Aa());const s=t.children.get(r);e=be(e),Vv(s,e,n)}}function Fd(t,e,n){t.value!==null?n(e,t.value):KN(t,(r,s)=>{const i=new ge(e.toString()+"/"+r);Fd(s,i,n)})}function KN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=10*1e3,ZN=30*1e3,e5=5*60*1e3;class t5{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new JN(e);const r=x_+(ZN-x_)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;rt(e,(s,i)=>{i>0&&kn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*e5))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zt||(Zt={}));function Tf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Rf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Zt.ACK_USER_WRITE,this.source=Tf()}operationForChild(e){if(se(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ge(e));return new La(de(),n,this.revert)}}else return O(ne(this.path)===e,"operationForChild called for unrelated child."),new La(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this.source=e,this.path=n,this.type=Zt.LISTEN_COMPLETE}operationForChild(e){return se(this.path)?new Ao(this.source,de()):new Ao(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Zt.OVERWRITE}operationForChild(e){return se(this.path)?new ts(this.source,de(),this.snap.getImmediateChild(e)):new ts(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Zt.MERGE}operationForChild(e){if(se(this.path)){const n=this.children.subtree(new ge(e));return n.isEmpty()?null:n.value?new ts(this.source,de(),n.value):new ti(this.source,de(),n)}else return O(ne(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(se(e))return this.isFullyInitialized()&&!this.filtered_;const n=ne(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n5{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function r5(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(QN(o.childName,o.snapshotNode))}),Li(t,s,"child_removed",e,r,n),Li(t,s,"child_added",e,r,n),Li(t,s,"child_moved",i,r,n),Li(t,s,"child_changed",e,r,n),Li(t,s,"value",e,r,n),s}function Li(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>i5(t,l,a)),o.forEach(l=>{const a=s5(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function s5(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function i5(t,e,n){if(e.childName==null||n.childName==null)throw ai("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),s=new re(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e){return{eventCache:t,serverCache:e}}function Zi(t,e,n,r){return _c(new ns(e,n,r),t.serverCache)}function Yv(t,e,n,r){return _c(t.eventCache,new ns(e,n,r))}function Bd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;const o5=()=>(xu||(xu=new bt(HS)),xu);class xe{constructor(e,n=o5()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return rt(e,(r,s)=>{n=n.set(new ge(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(se(e))return null;{const r=ne(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(be(e),n);return i!=null?{path:je(new ge(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(se(e))return this;{const n=ne(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new xe(null)}}set(e,n){if(se(e))return new xe(n,this.children);{const r=ne(e),i=(this.children.get(r)||new xe(null)).set(be(e),n),o=this.children.insert(r,i);return new xe(this.value,o)}}remove(e){if(se(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=ne(e),r=this.children.get(n);if(r){const s=r.remove(be(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new xe(null):new xe(this.value,i)}else return this}}get(e){if(se(e))return this.value;{const n=ne(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(se(e))return n;{const r=ne(e),i=(this.children.get(r)||new xe(null)).setTree(be(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new xe(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(je(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(se(e))return null;{const i=ne(e),o=this.children.get(i);return o?o.findOnPath_(be(e),je(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(se(e))return this;{this.value&&r(n,this.value);const s=ne(e),i=this.children.get(s);return i?i.foreachOnPath_(be(e),je(n,s),r):new xe(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(je(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.writeTree_=e}static empty(){return new rn(new xe(null))}}function eo(t,e,n){if(se(e))return new rn(new xe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=xt(s,e);return i=i.updateChild(o,n),new rn(t.writeTree_.set(s,i))}else{const s=new xe(n),i=t.writeTree_.setTree(e,s);return new rn(i)}}}function $d(t,e,n){let r=t;return rt(n,(s,i)=>{r=eo(r,je(e,s),i)}),r}function b_(t,e){if(se(e))return rn.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new rn(n)}}function Wd(t,e){return us(t,e)!=null}function us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xt(n.path,e)):null}function w_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(r,s)=>{e.push(new re(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new re(r,s.value))}),e}function kr(t,e){if(se(e))return t;{const n=us(t,e);return n!=null?new rn(new xe(n)):new rn(t.writeTree_.subtree(e))}}function Hd(t){return t.writeTree_.isEmpty()}function ni(t,e){return Qv(de(),t.writeTree_,e)}function Qv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(O(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Qv(je(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(je(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){return Kv(e,t)}function l5(t,e,n,r,s){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=eo(t.visibleWrites,e,n)),t.lastWriteId=r}function a5(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=$d(t.visibleWrites,e,n),t.lastWriteId=r}function c5(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function u5(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&d5(l,r.path)?s=!1:Wt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return h5(t),!0;if(r.snap)t.visibleWrites=b_(t.visibleWrites,r.path);else{const l=r.children;rt(l,a=>{t.visibleWrites=b_(t.visibleWrites,je(r.path,a))})}return!0}else return!1}function d5(t,e){if(t.snap)return Wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Wt(je(t.path,n),e))return!0;return!1}function h5(t){t.visibleWrites=Gv(t.allWrites,f5,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function f5(t){return t.visible}function Gv(t,e,n){let r=rn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Wt(n,o)?(l=xt(n,o),r=eo(r,l,i.snap)):Wt(o,n)&&(l=xt(o,n),r=eo(r,de(),i.snap.getChild(l)));else if(i.children){if(Wt(n,o))l=xt(n,o),r=$d(r,l,i.children);else if(Wt(o,n))if(l=xt(o,n),se(l))r=$d(r,de(),i.children);else{const a=Ks(i.children,ne(l));if(a){const u=a.getChild(be(l));r=eo(r,de(),u)}}}else throw ai("WriteRecord should have .snap or .children")}}return r}function qv(t,e,n,r,s){if(!r&&!s){const i=us(t.visibleWrites,e);if(i!=null)return i;{const o=kr(t.visibleWrites,e);if(Hd(o))return n;if(n==null&&!Wd(o,de()))return null;{const l=n||G.EMPTY_NODE;return ni(o,l)}}}else{const i=kr(t.visibleWrites,e);if(!s&&Hd(i))return n;if(!s&&n==null&&!Wd(i,de()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Wt(u.path,e)||Wt(e,u.path))},l=Gv(t.allWrites,o,e),a=n||G.EMPTY_NODE;return ni(l,a)}}}function p5(t,e,n){let r=G.EMPTY_NODE;const s=us(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Pe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=kr(t.visibleWrites,e);return n.forEachChild(Pe,(o,l)=>{const a=ni(kr(i,new ge(o)),l);r=r.updateImmediateChild(o,a)}),w_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=kr(t.visibleWrites,e);return w_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function m5(t,e,n,r,s){O(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=je(e,n);if(Wd(t.visibleWrites,i))return null;{const o=kr(t.visibleWrites,i);return Hd(o)?s.getChild(n):ni(o,s.getChild(n))}}function _5(t,e,n,r){const s=je(e,n),i=us(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=kr(t.visibleWrites,s);return ni(o,r.getNode().getImmediateChild(n))}else return null}function g5(t,e){return us(t.visibleWrites,e)}function y5(t,e,n,r,s,i,o){let l;const a=kr(t.visibleWrites,e),u=us(a,de());if(u!=null)l=u;else if(n!=null)l=ni(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=f.getNext();for(;p&&h.length<s;)d(p,r)!==0&&h.push(p),p=f.getNext();return h}else return[]}function v5(){return{visibleWrites:rn.empty(),allWrites:[],lastWriteId:-1}}function Oa(t,e,n,r){return qv(t.writeTree,t.treePath,e,n,r)}function Af(t,e){return p5(t.writeTree,t.treePath,e)}function k_(t,e,n,r){return m5(t.writeTree,t.treePath,e,n,r)}function Da(t,e){return g5(t.writeTree,je(t.treePath,e))}function x5(t,e,n,r,s,i){return y5(t.writeTree,t.treePath,e,n,r,s,i)}function Lf(t,e,n){return _5(t.writeTree,t.treePath,e,n)}function Xv(t,e){return Kv(je(t.treePath,e),t.writeTree)}function Kv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b5{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,jo(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ro(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ei(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,jo(r,e.snapshotNode,s.oldSnap));else throw ai("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Jv=new w5;class Of{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ns(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rs(this.viewCache_),i=x5(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k5(t){return{filter:t}}function C5(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function S5(t,e,n,r,s){const i=new b5;let o,l;if(n.type===Zt.OVERWRITE){const u=n;u.source.fromUser?o=Vd(t,e,u.path,u.snap,r,s,i):(O(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!se(u.path),o=Ma(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===Zt.MERGE){const u=n;u.source.fromUser?o=E5(t,e,u.path,u.children,r,s,i):(O(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Yd(t,e,u.path,u.children,r,s,l,i))}else if(n.type===Zt.ACK_USER_WRITE){const u=n;u.revert?o=R5(t,e,u.path,r,s,i):o=I5(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Zt.LISTEN_COMPLETE)o=T5(t,e,n.path,r,i);else throw ai("Unknown operation type: "+n.type);const a=i.getChanges();return N5(e,o,a),{viewCache:o,changes:a}}function N5(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Bd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Hv(Bd(e)))}}function Zv(t,e,n,r,s,i){const o=e.eventCache;if(Da(r,n)!=null)return e;{let l,a;if(se(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=rs(e),h=u instanceof G?u:G.EMPTY_NODE,d=Af(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Oa(r,rs(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ne(n);if(u===".priority"){O(Er(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=k_(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=be(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=k_(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Lf(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,s,i):l=o.getNode()}}return Zi(e,l,o.isFullyInitialized()||se(n),t.filter.filtersNodes())}}function Ma(t,e,n,r,s,i,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(se(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),p,null)}else{const p=ne(n);if(!a.isCompleteForPath(n)&&Er(n)>1)return e;const v=be(n),k=a.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=h.updatePriority(a.getNode(),k):u=h.updateChild(a.getNode(),p,k,v,Jv,null)}const d=Yv(e,u,a.isFullyInitialized()||se(n),h.filtersNodes()),f=new Of(s,d,i);return Zv(t,d,n,s,f,l)}function Vd(t,e,n,r,s,i,o){const l=e.eventCache;let a,u;const h=new Of(s,e,i);if(se(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Zi(e,u,!0,t.filter.filtersNodes());else{const d=ne(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Zi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=be(n),p=l.getNode().getImmediateChild(d);let v;if(se(f))v=r;else{const w=h.getCompleteChild(d);w!=null?kf(f)===".priority"&&w.getChild(Mv(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=G.EMPTY_NODE}if(p.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=Zi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function C_(t,e){return t.eventCache.isCompleteForChild(e)}function E5(t,e,n,r,s,i,o){let l=e;return r.foreach((a,u)=>{const h=je(n,a);C_(e,ne(h))&&(l=Vd(t,l,h,u,s,i,o))}),r.foreach((a,u)=>{const h=je(n,a);C_(e,ne(h))||(l=Vd(t,l,h,u,s,i,o))}),l}function S_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Yd(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;se(n)?u=r:u=new xe(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),v=S_(t,p,f);a=Ma(t,a,new ge(d),v,s,i,o,l)}}),u.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!p){const v=e.serverCache.getNode().getImmediateChild(d),w=S_(t,v,f);a=Ma(t,a,new ge(d),w,s,i,o,l)}}),a}function I5(t,e,n,r,s,i,o){if(Da(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(se(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Ma(t,e,n,a.getNode().getChild(n),s,i,l,o);if(se(n)){let u=new xe(null);return a.getNode().forEachChild(Bs,(h,d)=>{u=u.set(new ge(h),d)}),Yd(t,e,n,u,s,i,l,o)}else return e}else{let u=new xe(null);return r.foreach((h,d)=>{const f=je(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),Yd(t,e,n,u,s,i,l,o)}}function T5(t,e,n,r,s){const i=e.serverCache,o=Yv(e,i.getNode(),i.isFullyInitialized()||se(n),i.isFiltered());return Zv(t,o,n,r,Jv,s)}function R5(t,e,n,r,s,i){let o;if(Da(r,n)!=null)return e;{const l=new Of(r,e,s),a=e.eventCache.getNode();let u;if(se(n)||ne(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Oa(r,rs(e));else{const d=e.serverCache.getNode();O(d instanceof G,"serverChildren would be complete if leaf node"),h=Af(r,d)}h=h,u=t.filter.updateFullNode(a,h,i)}else{const h=ne(n);let d=Lf(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,be(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,G.EMPTY_NODE,be(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oa(r,rs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Da(r,de())!=null,Zi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ef(r.getIndex()),i=qN(r);this.processor_=k5(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(G.EMPTY_NODE,l.getNode(),null),h=new ns(a,o.isFullyInitialized(),s.filtersNodes()),d=new ns(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=_c(d,h),this.eventGenerator_=new n5(this.query_)}get query(){return this.query_}}function P5(t){return t.viewCache_.serverCache.getNode()}function A5(t,e){const n=rs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!se(e)&&!n.getImmediateChild(ne(e)).isEmpty())?n.getChild(e):null}function N_(t){return t.eventRegistrations_.length===0}function L5(t,e){t.eventRegistrations_.push(e)}function E_(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function I_(t,e,n,r){e.type===Zt.MERGE&&e.source.queryId!==null&&(O(rs(t.viewCache_),"We should always have a full cache before handling merges"),O(Bd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=S5(t.processor_,s,e,n,r);return C5(t.processor_,i.viewCache),O(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,ex(t,i.changes,i.viewCache.eventCache.getNode(),null)}function O5(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(i,o)=>{r.push(ei(i,o))}),n.isFullyInitialized()&&r.push(Hv(n.getNode())),ex(t,r,n.getNode(),e)}function ex(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return r5(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let za;class D5{constructor(){this.views=new Map}}function M5(t){O(!za,"__referenceConstructor has already been defined"),za=t}function z5(){return O(za,"Reference.ts has not been loaded"),za}function U5(t){return t.views.size===0}function Df(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return O(i!=null,"SyncTree gave us an op for an invalid query."),I_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(I_(o,e,n,r));return i}}function F5(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Oa(n,s?r:null),a=!1;l?a=!0:r instanceof G?(l=Af(n,r),a=!1):(l=G.EMPTY_NODE,a=!1);const u=_c(new ns(l,a,!1),new ns(r,s,!1));return new j5(e,u)}return o}function B5(t,e,n,r,s,i){const o=F5(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),L5(o,n),O5(o,n)}function $5(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Ir(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(E_(u,n,r)),N_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(E_(a,n,r)),N_(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!Ir(t)&&i.push(new(z5())(e._repo,e._path)),{removed:i,events:o}}function tx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $s(t,e){let n=null;for(const r of t.views.values())n=n||A5(r,e);return n}function nx(t,e){if(e._queryParams.loadsAllData())return gc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rx(t,e){return nx(t,e)!=null}function Ir(t){return gc(t)!=null}function gc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;function W5(t){O(!Ua,"__referenceConstructor has already been defined"),Ua=t}function H5(){return O(Ua,"Reference.ts has not been loaded"),Ua}let V5=1;class T_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=v5(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sx(t,e,n,r,s){return l5(t.pendingWriteTree_,e,n,r,s),s?hi(t,new ts(Tf(),e,n)):[]}function Y5(t,e,n,r){a5(t.pendingWriteTree_,e,n,r);const s=xe.fromObject(n);return hi(t,new ti(Tf(),e,s))}function hr(t,e,n=!1){const r=c5(t.pendingWriteTree_,e);if(u5(t.pendingWriteTree_,e)){let i=new xe(null);return r.snap!=null?i=i.set(de(),!0):rt(r.children,o=>{i=i.set(new ge(o),!0)}),hi(t,new La(r.path,i,n))}else return[]}function yc(t,e,n){return hi(t,new ts(Rf(),e,n))}function Q5(t,e,n){const r=xe.fromObject(n);return hi(t,new ti(Rf(),e,r))}function G5(t,e){return hi(t,new Ao(Rf(),e))}function q5(t,e,n){const r=zf(t,n);if(r){const s=Uf(r),i=s.path,o=s.queryId,l=xt(i,e),a=new Ao(jf(o),l);return Ff(t,i,a)}else return[]}function Qd(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||rx(o,e))){const a=$5(o,e,n,r);U5(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!s){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>Ir(p));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=J5(f);for(let v=0;v<p.length;++v){const w=p[v],k=w.query,_=lx(t,w);t.listenProvider_.startListening(to(k),Fa(t,k),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(to(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(vc(f));t.listenProvider_.stopListening(to(f),p)}))}Z5(t,u)}return l}function X5(t,e,n,r){const s=zf(t,r);if(s!=null){const i=Uf(s),o=i.path,l=i.queryId,a=xt(o,e),u=new ts(jf(l),a,n);return Ff(t,o,u)}else return[]}function K5(t,e,n,r){const s=zf(t,r);if(s){const i=Uf(s),o=i.path,l=i.queryId,a=xt(o,e),u=xe.fromObject(n),h=new ti(jf(l),a,u);return Ff(t,o,h)}else return[]}function R_(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const v=xt(f,s);i=i||$s(p,v),o=o||Ir(p)});let l=t.syncPointTree_.get(s);l?(o=o||Ir(l),i=i||$s(l,de())):(l=new D5,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=G.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,v)=>{const w=$s(v,de());w&&(i=i.updateImmediateChild(p,w))}));const u=rx(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=vc(e);O(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=eE();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const h=Pf(t.pendingWriteTree_,s);let d=B5(l,e,n,h,i,a);if(!u&&!o&&!r){const f=nx(l,e);d=d.concat(tE(t,e,f))}return d}function Mf(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xt(o,e),u=$s(l,a);if(u)return u});return qv(s,e,i,n,!0)}function hi(t,e){return ix(e,t.syncPointTree_,null,Pf(t.pendingWriteTree_,de()))}function ix(t,e,n,r){if(se(t.path))return ox(t,e,n,r);{const s=e.get(de());n==null&&s!=null&&(n=$s(s,de()));let i=[];const o=ne(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=Xv(r,o);i=i.concat(ix(l,a,u,h))}return s&&(i=i.concat(Df(s,t,r,n))),i}}function ox(t,e,n,r){const s=e.get(de());n==null&&s!=null&&(n=$s(s,de()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Xv(r,o),h=t.operationForChild(o);h&&(i=i.concat(ox(h,l,a,u)))}),s&&(i=i.concat(Df(s,t,r,n))),i}function lx(t,e){const n=e.query,r=Fa(t,n);return{hashFn:()=>(P5(e)||G.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?q5(t,n._path,r):G5(t,n._path);{const i=QS(s,n);return Qd(t,n,null,i)}}}}function Fa(t,e){const n=vc(e);return t.queryToTagMap.get(n)}function vc(t){return t._path.toString()+"$"+t._queryIdentifier}function zf(t,e){return t.tagToQueryMap.get(e)}function Uf(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ge(t.substr(0,e))}}function Ff(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const s=Pf(t.pendingWriteTree_,e);return Df(r,n,s,null)}function J5(t){return t.fold((e,n,r)=>{if(n&&Ir(n))return[gc(n)];{let s=[];return n&&(s=tx(n)),rt(r,(i,o)=>{s=s.concat(o)}),s}})}function to(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(H5())(t._repo,t._path):t}function Z5(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=vc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function eE(){return V5++}function tE(t,e,n){const r=e._path,s=Fa(t,e),i=lx(t,n),o=t.listenProvider_.startListening(to(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)O(!Ir(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,d)=>{if(!se(u)&&h&&Ir(h))return[gc(h).query];{let f=[];return h&&(f=f.concat(tx(h).map(p=>p.query))),rt(d,(p,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(to(h),Fa(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bf(n)}node(){return this.node_}}class $f{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new $f(this.syncTree_,n)}node(){return Mf(this.syncTree_,this.path_)}}const nE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},j_=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return sE(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},sE=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const s=e.node();if(O(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},ax=function(t,e,n,r){return Wf(e,new $f(n,t),r)},cx=function(t,e,n){return Wf(t,new Bf(e),n)};function Wf(t,e,n){const r=t.getPriority().val(),s=j_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=j_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new He(l,Ge(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new He(s))),o.forEachChild(Pe,(l,a)=>{const u=Wf(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vf(t,e){let n=e instanceof ge?e:new ge(e),r=t,s=ne(n);for(;s!==null;){const i=Ks(r.node.children,s)||{children:{},childCount:0};r=new Hf(s,r,i),n=be(n),s=ne(n)}return r}function fi(t){return t.node.value}function ux(t,e){t.node.value=e,Gd(t)}function dx(t){return t.node.childCount>0}function iE(t){return fi(t)===void 0&&!dx(t)}function xc(t,e){rt(t.node.children,(n,r)=>{e(new Hf(n,t,r))})}function hx(t,e,n,r){n&&e(t),xc(t,s=>{hx(s,e,!0)})}function oE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Zo(t){return new ge(t.parent===null?t.name:Zo(t.parent)+"/"+t.name)}function Gd(t){t.parent!==null&&lE(t.parent,t.name,t)}function lE(t,e,n){const r=iE(n),s=kn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Gd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Gd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=/[\[\].#$\/\u0000-\u001F\u007F]/,cE=/[\[\].#$\u0000-\u001F\u007F]/,bu=10*1024*1024,Yf=function(t){return typeof t=="string"&&t.length!==0&&!aE.test(t)},fx=function(t){return typeof t=="string"&&t.length!==0&&!cE.test(t)},uE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fx(t)},dE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yf(t)||t&&typeof t=="object"&&kn(t,".sv")},px=function(t,e,n,r){r&&e===void 0||bc(cc(t,"value"),e,n)},bc=function(t,e,n){const r=n instanceof ge?new EN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mr(r)+" with contents = "+e.toString());if(yf(e))throw new Error(t+"contains "+e.toString()+" "+Mr(r));if(typeof e=="string"&&e.length>bu/3&&uc(e)>bu)throw new Error(t+"contains a string greater than "+bu+" utf8 bytes "+Mr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(rt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Yf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IN(r,o),bc(t,l,r),TN(r)}),s&&i)throw new Error(t+' contains ".value" child '+Mr(r)+" in addition to actual children.")}},hE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=To(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Yf(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(NN);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Wt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},fE=function(t,e,n,r){const s=cc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];rt(e,(o,l)=>{const a=new ge(o);if(bc(s,l,je(n,a)),kf(a)===".priority"&&!dE(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),hE(s,i)},mx=function(t,e,n,r){if(!fx(n))throw new Error(cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mx(t,e,n)},_x=function(t,e){if(ne(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},mE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uE(n))throw new Error(cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function wc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Cf(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function gx(t,e,n){wc(t,n),yx(t,r=>Cf(r,e))}function on(t,e,n){wc(t,n),yx(t,r=>Wt(r,e)||Wt(e,r))}function yx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(gE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ki&&et("event: "+n.toString()),di(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="repo_interrupt",vE=25;class xE{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _E,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Aa(),this.transactionQueueTree_=new Hf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bE(t,e,n){if(t.stats_=bf(t.repoInfo_),t.forceRestClient_||KS())t.server_=new Pa(t.repoInfo_,(r,s,i,o)=>{P_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>A_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,s,i,o)=>{P_(t,r,s,i,o)},r=>{A_(t,r)},r=>{wE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=nN(t.repoInfo_,()=>new t5(t.stats_,t.server_)),t.infoData_=new XN,t.infoSyncTree_=new T_({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=yc(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Qf(t,"connected",!1),t.serverSyncTree_=new T_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const u=o(l,a);on(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function vx(t){const n=t.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kc(t){return nE({timestamp:vx(t)})}function P_(t,e,n,r,s){t.dataUpdateCount++;const i=new ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=ba(n,u=>Ge(u));o=K5(t.serverSyncTree_,i,a,s)}else{const a=Ge(n);o=X5(t.serverSyncTree_,i,a,s)}else if(r){const a=ba(n,u=>Ge(u));o=Q5(t.serverSyncTree_,i,a)}else{const a=Ge(n);o=yc(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=ri(t,i)),on(t.eventQueue_,l,o)}function A_(t,e){Qf(t,"connected",e),e===!1&&SE(t)}function wE(t,e){rt(e,(n,r)=>{Qf(t,n,r)})}function Qf(t,e,n){const r=new ge("/.info/"+e),s=Ge(n);t.infoData_.updateSnapshot(r,s);const i=yc(t.infoSyncTree_,r,s);on(t.eventQueue_,r,i)}function Gf(t){return t.nextWriteId_++}function kE(t,e,n,r,s){Cc(t,"set",{path:e.toString(),value:n,priority:r});const i=kc(t),o=Ge(n,r),l=Mf(t.serverSyncTree_,e),a=cx(o,l,i),u=Gf(t),h=sx(t.serverSyncTree_,e,a,u,!0);wc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const v=f==="ok";v||pt("set at "+e+" failed: "+f);const w=hr(t.serverSyncTree_,u,!v);on(t.eventQueue_,e,w),qd(t,s,f,p)});const d=Xf(t,e);ri(t,d),on(t.eventQueue_,d,[])}function CE(t,e,n,r){Cc(t,"update",{path:e.toString(),value:n});let s=!0;const i=kc(t),o={};if(rt(n,(l,a)=>{s=!1,o[l]=ax(je(e,l),Ge(a),t.serverSyncTree_,i)}),s)et("update() called with empty data.  Don't do anything."),qd(t,r,"ok",void 0);else{const l=Gf(t),a=Y5(t.serverSyncTree_,e,o,l);wc(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||pt("update at "+e+" failed: "+u);const f=hr(t.serverSyncTree_,l,!d),p=f.length>0?ri(t,e):e;on(t.eventQueue_,p,f),qd(t,r,u,h)}),rt(n,u=>{const h=Xf(t,je(e,u));ri(t,h)}),on(t.eventQueue_,e,[])}}function SE(t){Cc(t,"onDisconnectEvents");const e=kc(t),n=Aa();Fd(t.onDisconnect_,de(),(s,i)=>{const o=ax(s,i,t.serverSyncTree_,e);Vv(n,s,o)});let r=[];Fd(n,de(),(s,i)=>{r=r.concat(yc(t.serverSyncTree_,s,i));const o=Xf(t,s);ri(t,o)}),t.onDisconnect_=Aa(),on(t.eventQueue_,de(),r)}function NE(t,e,n){let r;ne(e._path)===".info"?r=R_(t.infoSyncTree_,e,n):r=R_(t.serverSyncTree_,e,n),gx(t.eventQueue_,e._path,r)}function L_(t,e,n){let r;ne(e._path)===".info"?r=Qd(t.infoSyncTree_,e,n):r=Qd(t.serverSyncTree_,e,n),gx(t.eventQueue_,e._path,r)}function EE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yE)}function Cc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),et(n,...e)}function qd(t,e,n,r){e&&di(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function xx(t,e,n){return Mf(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function qf(t,e=t.transactionQueueTree_){if(e||Sc(t,e),fi(e)){const n=wx(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&IE(t,Zo(e),n)}else dx(e)&&xc(e,n=>{qf(t,n)})}function IE(t,e,n){const r=n.map(u=>u.currentWriteId),s=xx(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];O(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=xt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Cc(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(hr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Sc(t,Vf(t.transactionQueueTree_,e)),qf(t,t.transactionQueueTree_),on(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)di(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{pt("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ri(t,e)}},o)}function ri(t,e){const n=bx(t,e),r=Zo(n),s=wx(t,n);return TE(t,s,r),r}function TE(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xt(n,a.path);let h=!1,d;if(O(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,s=s.concat(hr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=vE)h=!0,d="maxretry",s=s.concat(hr(t.serverSyncTree_,a.currentWriteId,!0));else{const f=xx(t,a.path,o);a.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){bc("transaction failed: Data returned ",p,a.path);let v=Ge(p);typeof p=="object"&&p!=null&&kn(p,".priority")||(v=v.updatePriority(f.getPriority()));const k=a.currentWriteId,_=kc(t),m=cx(v,f,_);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=m,a.currentWriteId=Gf(t),o.splice(o.indexOf(k),1),s=s.concat(sx(t.serverSyncTree_,a.path,m,a.currentWriteId,a.applyLocally)),s=s.concat(hr(t.serverSyncTree_,k,!0))}else h=!0,d="nodata",s=s.concat(hr(t.serverSyncTree_,a.currentWriteId,!0))}on(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Sc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)di(r[l]);qf(t,t.transactionQueueTree_)}function bx(t,e){let n,r=t.transactionQueueTree_;for(n=ne(e);n!==null&&fi(r)===void 0;)r=Vf(r,n),e=be(e),n=ne(e);return r}function wx(t,e){const n=[];return kx(t,e,n),n.sort((r,s)=>r.order-s.order),n}function kx(t,e,n){const r=fi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);xc(e,s=>{kx(t,s,n)})}function Sc(t,e){const n=fi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,ux(e,n.length>0?n:void 0)}xc(e,r=>{Sc(t,r)})}function Xf(t,e){const n=Zo(bx(t,e)),r=Vf(t.transactionQueueTree_,e);return oE(r,s=>{wu(t,s)}),wu(t,r),hx(r,s=>{wu(t,s)}),n}function wu(t,e){const n=fi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?ux(e,void 0):n.length=i+1,on(t.eventQueue_,Zo(e),s);for(let o=0;o<r.length;o++)di(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function jE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pt(`Invalid query segment '${n}' in query '${t}'`)}return e}const O_=function(t,e){const n=PE(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||$S();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Iv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ge(n.pathString)}},PE=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=RE(t.substring(h,d)));const f=jE(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",AE=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=D_.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=D_.charAt(e[s]);return O(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+qe(this.snapshot.exportVal())}}class OE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return se(this._path)?null:kf(this._path)}get ref(){return new Pr(this._repo,this._path)}get _queryIdentifier(){const e=v_(this._queryParams),n=vf(e);return n==="{}"?"default":n}get _queryObject(){return v_(this._queryParams)}isEqual(e){if(e=$e(e),!(e instanceof Kf))return!1;const n=this._repo===e._repo,r=Cf(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+SN(this._path)}}class Pr extends Kf{constructor(e,n){super(e,n,new If,!1)}get parent(){const e=Mv(this._path);return e===null?null:new Pr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ba{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ge(e),r=Lo(this.ref,e);return new Ba(this._node.getChild(n),r,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ba(s,Lo(this.ref,r),Pe)))}hasChild(e){const n=new ge(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Oe(t,e){return t=$e(t),t._checkNotDeleted("ref"),e!==void 0?Lo(t._root,e):t._root}function Lo(t,e){return t=$e(t),ne(t._path)===null?pE("child","path",e):mx("child","path",e),new Pr(t._repo,je(t._path,e))}function ME(t,e){t=$e(t),_x("push",t._path),px("push",e,t._path,!0);const n=vx(t._repo),r=AE(n),s=Lo(t,r),i=Lo(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function In(t,e){t=$e(t),_x("set",t._path),px("set",e,t._path,!1);const n=new Vo;return kE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function _s(t,e){fE("update",e,t._path);const n=new Vo;return CE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Jf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new LE("value",this,new Ba(e.snapshotNode,new Pr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new OE(this,e,n):null}matches(e){return e instanceof Jf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function zE(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const a=n,u=(h,d)=>{L_(t._repo,t,l),a(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new DE(n,i||void 0),l=new Jf(o);return NE(t._repo,t,l),()=>L_(t._repo,t,l)}function Oo(t,e,n,r){return zE(t,"value",e,n,r)}M5(Pr);W5(Pr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="FIREBASE_DATABASE_EMULATOR_HOST",Xd={};let FE=!1;function BE(t,e,n,r){t.repoInfo_=new Iv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function $E(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),et("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=O_(i,s),l=o.repoInfo,a;typeof process<"u"&&t_&&(a=t_[UE]),a?(i=`http://${a}?ns=${l.namespace}`,o=O_(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new ZS(t.name,t.options,e);mE("Invalid Firebase Database URL",o),se(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=HE(l,t,u,new JS(t.name,n));return new VE(h,t)}function WE(t,e){const n=Xd[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),EE(t),delete n[t.key]}function HE(t,e,n,r){let s=Xd[e.name];s||(s={},Xd[e.name]=s);let i=s[t.toURLString()];return i&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new xE(t,FE,n,r),s[t.toURLString()]=i,i}class VE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pr(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(WE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function YE(t=of(),e){const n=dc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ny("database");r&&QE(n,...r)}return n}function QE(t,e,n,r={}){t=$e(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Ql(Ql.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ty(r.mockUserToken,t.app.options.projectId);i=new Ql(o)}BE(s,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){DS(as),Jr(new Nr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return $E(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),yn(n_,r_,t),yn(n_,r_,"esm2017")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};GE();var qE="firebase",XE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(qE,XE,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx="firebasestorage.googleapis.com",Sx="storageBucket",KE=2*60*1e3,JE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Qn{constructor(e,n,r=0){super(ku(e),`Firebase Storage: ${n} (${ku(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ku(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function ku(t){return"storage/"+t}function Zf(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ae.UNKNOWN,t)}function ZE(t){return new Le(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function eI(t){return new Le(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function tI(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ae.UNAUTHENTICATED,t)}function nI(){return new Le(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function rI(t){return new Le(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sI(){return new Le(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iI(){return new Le(Ae.CANCELED,"User canceled the upload/download.")}function oI(t){return new Le(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function lI(t){return new Le(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aI(){return new Le(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sx+"' property when initializing the app?")}function cI(){return new Le(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uI(){return new Le(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dI(t){return new Le(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Kd(t){return new Le(Ae.INVALID_ARGUMENT,t)}function Nx(){return new Le(Ae.APP_DELETED,"The Firebase app was deleted.")}function hI(t){return new Le(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function no(t,e){return new Le(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Oi(t){throw new Le(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw lI(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=n===Cx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",_=new RegExp(`^https?://${w}/${s}/${k}`,"i"),y=[{regex:l,indices:a,postModify:i},{regex:p,indices:v,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<y.length;x++){const b=y[x],S=b.regex.exec(e);if(S){const I=S[b.indices.bucket];let C=S[b.indices.path];C||(C=""),r=new At(I,C),b.postModify(r);break}}if(r==null)throw oI(e);return r}}class fI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...k){u||(u=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(p,a())},k)}function f(){i&&clearTimeout(i)}function p(k,..._){if(u){f();return}if(k){f(),h.call(null,k,..._);return}if(a()||o){f(),h.call(null,k,..._);return}r<64&&(r*=2);let y;l===1?(l=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function w(k){v||(v=!0,f(),!u&&(s!==null?(k||(l=2),clearTimeout(s),d(0)):k||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function mI(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t){return t!==void 0}function gI(t){return typeof t=="object"&&!Array.isArray(t)}function ep(t){return typeof t=="string"||t instanceof String}function M_(t){return tp()&&t instanceof Blob}function tp(){return typeof Blob<"u"}function z_(t,e,n,r){if(r<e)throw Kd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Kd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ex(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yr||(Yr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,s,i,o,l,a,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Nl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Yr.NO_ERROR,a=i.getStatus();if(!l||yI(a,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Yr.ABORT;r(!1,new Nl(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Nl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());_I(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=Zf();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Nx():iI();o(a)}else{const a=sI();o(a)}};this.canceled_?n(!1,new Nl(!1,null,!0)):this.backoffId_=pI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Nl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function xI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function CI(t,e,n,r,s,i,o=!0){const l=Ex(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return wI(u,e),xI(u,n),bI(u,i),kI(u,r),new vI(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function NI(...t){const e=SI();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(tp())return new Blob(t);throw new Le(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function EI(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){if(typeof atob>"u")throw dI("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Cu{constructor(e,n){this.data=e,this.contentType=n||null}}function TI(t,e){switch(t){case mn.RAW:return new Cu(Ix(e));case mn.BASE64:case mn.BASE64URL:return new Cu(Tx(t,e));case mn.DATA_URL:return new Cu(jI(e),PI(e))}throw Zf()}function Ix(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function RI(t){let e;try{e=decodeURIComponent(t)}catch{throw no(mn.DATA_URL,"Malformed data URL.")}return Ix(e)}function Tx(t,e){switch(t){case mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw no(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw no(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=II(e)}catch(s){throw s.message.includes("polyfill")?s:no(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Rx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw no(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=AI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function jI(t){const e=new Rx(t);return e.base64?Tx(mn.BASE64,e.rest):RI(e.rest)}function PI(t){return new Rx(t).contentType}function AI(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){let r=0,s="";M_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(M_(this.data_)){const r=this.data_,s=EI(r,e,n);return s===null?null:new cr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cr(r,!0)}}static getBlob(...e){if(tp()){const n=e.map(r=>r instanceof cr?r.data_:r);return new cr(NI.apply(null,n))}else{const n=e.map(o=>ep(o)?TI(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new cr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){let e;try{e=JSON.parse(t)}catch{return null}return gI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function OI(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Px(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t,e){return e}class ut{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||DI}}let El=null;function MI(t){return!ep(t)||t.length<2?t:Px(t)}function Ax(){if(El)return El;const t=[];t.push(new ut("bucket")),t.push(new ut("generation")),t.push(new ut("metageneration")),t.push(new ut("name","fullPath",!0));function e(i,o){return MI(o)}const n=new ut("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ut("size");return s.xform=r,t.push(s),t.push(new ut("timeCreated")),t.push(new ut("updated")),t.push(new ut("md5Hash",null,!0)),t.push(new ut("cacheControl",null,!0)),t.push(new ut("contentDisposition",null,!0)),t.push(new ut("contentEncoding",null,!0)),t.push(new ut("contentLanguage",null,!0)),t.push(new ut("contentType",null,!0)),t.push(new ut("metadata","customMetadata",!0)),El=t,El}function zI(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new At(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function UI(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return zI(r,t),r}function Lx(t,e,n){const r=jx(e);return r===null?null:UI(t,r,n)}function FI(t,e,n,r){const s=jx(e);if(s===null||!ep(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),p=Nc(f,n,r),v=Ex({alt:"media",token:u});return p+v})[0]}function BI(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class np{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){if(!t)throw Zf()}function $I(t,e){function n(r,s){const i=Lx(t,s,e);return Ox(i!==null),i}return n}function WI(t,e){function n(r,s){const i=Lx(t,s,e);return Ox(i!==null),FI(i,s,t.host,t._protocol)}return n}function Dx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=nI():s=tI():n.getStatus()===402?s=eI(t.bucket):n.getStatus()===403?s=rI(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Mx(t){const e=Dx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=ZE(t.path)),i.serverResponse=s.serverResponse,i}return n}function HI(t,e,n){const r=e.fullServerUrl(),s=Nc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new np(s,i,WI(t,n),o);return l.errorHandler=Mx(e),l}function VI(t,e){const n=e.fullServerUrl(),r=Nc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(a,u){}const l=new np(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Mx(e),l}function YI(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function QI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=YI(null,e)),r}function GI(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let y="";for(let x=0;x<2;x++)y=y+Math.random().toString().slice(2);return y}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=QI(e,r,s),h=BI(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+a+"--",p=cr.getBlob(d,r,f);if(p===null)throw cI();const v={name:u.fullPath},w=Nc(i,t.host,t._protocol),k="POST",_=t.maxUploadRetryTime,m=new np(w,k,$I(t,n),_);return m.urlParams=v,m.headers=o,m.body=p.uploadData(),m.errorHandler=Dx(e),m}class qI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Oi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Oi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Oi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Oi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Oi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XI extends qI{initXhr(){this.xhr_.responseType="text"}}function rp(){return new XI}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ss(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Px(this._location.path)}get storage(){return this._service}get parent(){const e=LI(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new ss(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hI(e)}}function KI(t,e,n){t._throwIfRoot("uploadBytes");const r=GI(t.storage,t._location,Ax(),new cr(e,!0),n);return t.storage.makeRequestWithTokens(r,rp).then(s=>({metadata:s,ref:t}))}function JI(t){t._throwIfRoot("getDownloadURL");const e=HI(t.storage,t._location,Ax());return t.storage.makeRequestWithTokens(e,rp).then(n=>{if(n===null)throw uI();return n})}function ZI(t){t._throwIfRoot("deleteObject");const e=VI(t.storage,t._location);return t.storage.makeRequestWithTokens(e,rp)}function eT(t,e){const n=OI(t._location.path,e),r=new At(t._location.bucket,n);return new ss(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){return/^[A-Za-z]+:\/\//.test(t)}function nT(t,e){return new ss(t,e)}function zx(t,e){if(t instanceof sp){const n=t;if(n._bucket==null)throw aI();const r=new ss(n,n._bucket);return e!=null?zx(r,e):r}else return e!==void 0?eT(t,e):t}function rT(t,e){if(e&&tT(e)){if(t instanceof sp)return nT(t,e);throw Kd("To use ref(service, url), the first argument must be a Storage instance.")}else return zx(t,e)}function U_(t,e){const n=e==null?void 0:e[Sx];return n==null?null:At.makeFromBucketSpec(n,t)}function sT(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ty(s,t.app.options.projectId))}class sp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Cx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KE,this._maxUploadRetryTime=JE,this._requests=new Set,s!=null?this._bucket=At.makeFromBucketSpec(s,this._host):this._bucket=U_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=U_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ss(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new fI(Nx());{const o=CI(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const F_="@firebase/storage",B_="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="storage";function iT(t,e,n){return t=$e(t),KI(t,e,n)}function oT(t){return t=$e(t),JI(t)}function lT(t){return t=$e(t),ZI(t)}function $_(t,e){return t=$e(t),rT(t,e)}function aT(t=of(),e){t=$e(t);const r=dc(t,Ux).getImmediate({identifier:e}),s=Ny("storage");return s&&cT(r,...s),r}function cT(t,e,n,r={}){sT(t,e,n,r)}function uT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new sp(n,r,s,e,as)}function dT(){Jr(new Nr(Ux,uT,"PUBLIC").setMultipleInstances(!0)),yn(F_,B_,""),yn(F_,B_,"esm2017")}dT();const hT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing.kkleekk.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},ip=Ly(hT),Su=LS(ip),De=YE(ip),W_=aT(ip),Fx=new En;Fx.addScope("email");const Bx="packing-checklist-data",Nu=["必備","電子產品","個人物品","視天氣","旅行","運動"],$x=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],Fi={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[]};function nr(t){return t.toLowerCase().replace(/\./g,",")}function Jd(t){return t.replace(/,/g,".")}function fT(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:Object.fromEntries(Object.entries(t.sharedWith||{}).map(([e,n])=>[e,n===!0?"view":n]))}:null}function Wx(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:Fi.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):Fi.lists,activeListId:t.activeListId||Fi.activeListId,templates:Array.isArray(t.templates)?t.templates:[]}:Fi}function pT(){try{const t=localStorage.getItem(Bx);if(t)return Wx(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return Fi}function H_(t){try{localStorage.setItem(Bx,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function mT(t){const[e,n]=g.useState(null),[r,s]=g.useState(t),[i,o]=g.useState("offline"),l=g.useRef(null),a=g.useCallback(p=>{l.current&&l.current();const v=Oe(De,"users/"+p);l.current=Oo(v,w=>{const k=w.val();if(k){const _=Wx(k);s(_),H_(_),o("synced")}else u(p,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=g.useCallback((p,v)=>{o("syncing");const w=Oe(De,"users/"+p);In(w,v).then(()=>{o("synced")}).catch(k=>{console.error("Firebase 儲存失敗",k),o("error")})},[]),h=g.useCallback(p=>{s(p),H_(p),e&&u(e.uid,p)},[e,u]),d=g.useCallback(()=>{WC(Su,Fx).catch(p=>{console.error("登入失敗",p)})},[]),f=g.useCallback(()=>{l.current&&(l.current(),l.current=null),kC(Su).then(()=>{n(null),o("offline")}).catch(p=>{console.error("登出失敗",p)})},[]);return g.useEffect(()=>{const p=wC(Su,v=>{n(v),v?a(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{p(),l.current&&l.current()}},[a]),{user:e,data:r,syncStatus:i,saveData:h,handleLogin:d,handleLogout:f}}function _T(t,e){const[n,r]=g.useState({}),[s,i]=g.useState({}),o=g.useRef({}),l=g.useRef(null),a=g.useCallback(b=>{o.current[b]&&(o.current[b](),delete o.current[b])},[]),u=g.useCallback(()=>{Object.keys(o.current).forEach(a),l.current&&(l.current(),l.current=null),r({}),i({})},[a]),h=g.useCallback((b,S)=>{if(o.current[`${S}_${b}`])return;const I=Oe(De,`sharedLists/${b}`),C=Oo(I,R=>{const N=R.val();if(!N){(S==="withMe"?r:i)(Y=>{const te={...Y};return delete te[b],te}),a(`${S}_${b}`);return}const E=fT(N);(S==="withMe"?r:i)(A=>({...A,[b]:E}))},R=>{console.error("共享清單讀取失敗",R)});o.current[`${S}_${b}`]=C},[a]);g.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const b=nr(t.email),S=Oe(De,`sharedIndex/${b}`);return l.current=Oo(S,I=>{const C=I.val();if(!C){Object.keys(o.current).forEach(N=>{N.startsWith("withMe_")&&a(N)}),r({});return}const R=new Set(Object.keys(C));Object.keys(o.current).forEach(N=>{if(N.startsWith("withMe_")){const E=N.replace("withMe_","");R.has(E)||(a(N),r(T=>{const A={...T};return delete A[E],A}))}}),R.forEach(N=>{h(N,"withMe")})},I=>{console.error("共享索引讀取失敗",I)}),()=>{u()}},[t==null?void 0:t.email]),g.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const b=new Set;e.lists.forEach(S=>{S.sharedListId&&b.add(S.sharedListId)}),Object.keys(o.current).forEach(S=>{if(S.startsWith("byMe_")){const I=S.replace("byMe_","");b.has(I)||(a(S),i(C=>{const R={...C};return delete R[I],R}))}}),b.forEach(S=>{h(S,"byMe")})},[t,e==null?void 0:e.lists,h,a]),g.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(b=>{if(!b.sharedListId)return;const S=s[b.sharedListId];if(!S)return;const I=(Array.isArray(b.items)?b.items:[]).map(A=>e.itemLibrary.find(Y=>Y.id===A)).filter(Boolean).map(({id:A,name:Y,category:te,note:Z,photoURL:Q})=>({id:A,name:Y,category:te,note:Z,...Q&&{photoURL:Q}})),C=new Set(Array.isArray(b.items)?b.items:[]),R=(S.items||[]).filter(A=>!C.has(A.id)),N=[...I,...R],E=S.items||[];if(JSON.stringify(N)!==JSON.stringify(E)){const A=Oe(De,`sharedLists/${b.sharedListId}`);_s(A,{items:N,name:b.name,icon:b.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,s]);const d=g.useCallback(async(b,S,I)=>{if(!t)return null;const C=(Array.isArray(b.items)?b.items:[]).map(Y=>S.find(te=>te.id===Y)).filter(Boolean).map(({id:Y,name:te,category:Z,note:Q,photoURL:D})=>({id:Y,name:te,category:Z,note:Q,...D&&{photoURL:D}})),R={};I.forEach(Y=>{R[nr(Y)]="view"});const E=ME(Oe(De,"sharedLists")).key,T={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:b.name,icon:b.icon,items:C,checkedItems:Array.isArray(b.checkedItems)?b.checkedItems:[],sharedWith:R},A={};return A[`sharedLists/${E}`]=T,I.forEach(Y=>{A[`sharedIndex/${nr(Y)}/${E}`]=!0}),await _s(Oe(De),A),E},[t]),f=g.useCallback(async(b,S)=>{const I=nr(S),C={};C[`sharedLists/${b}/sharedWith/${I}`]="view",C[`sharedIndex/${I}/${b}`]=!0,await _s(Oe(De),C)},[]),p=g.useCallback(async(b,S)=>{const I=nr(S),C={};C[`sharedLists/${b}/sharedWith/${I}`]=null,C[`sharedIndex/${I}/${b}`]=null,await _s(Oe(De),C)},[]),v=g.useCallback(async b=>{const S=s[b];if(!S)return;const I={};I[`sharedLists/${b}`]=null;const C=S.sharedWith||{};Object.keys(C).forEach(R=>{I[`sharedIndex/${R}/${b}`]=null}),await _s(Oe(De),I)},[s]),w=g.useCallback(async(b,S,I)=>{const C=nr(S);await In(Oe(De,`sharedLists/${b}/sharedWith/${C}`),I)},[]),k=g.useCallback(async(b,S)=>{const I=n[b];if(!I)return;const R=[...I.items||[],S];await In(Oe(De,`sharedLists/${b}/items`),R)},[n]),_=g.useCallback(async(b,S)=>{const I=n[b]||s[b];if(!I)return;const C=(I.items||[]).filter(E=>E.id!==S),R=(I.checkedItems||[]).filter(E=>E!==S),N={};N[`sharedLists/${b}/items`]=C,N[`sharedLists/${b}/checkedItems`]=R,await _s(Oe(De),N)},[n,s]),m=g.useCallback(async(b,S)=>{const I=n[b]||s[b];if(!I)return;const C=Array.isArray(I.checkedItems)?I.checkedItems:[],N=C.includes(S)?C.filter(T=>T!==S):[...C,S],E=Oe(De,`sharedLists/${b}/checkedItems`);await In(E,N)},[n,s]),y=g.useCallback(async b=>{const S=Oe(De,`sharedLists/${b}/checkedItems`);await In(S,[])},[]),x=g.useCallback(async(b,S)=>{const I=Oe(De,`sharedLists/${b}/checkedItems`);await In(I,S)},[]);return{sharedWithMe:n,sharedByMe:s,shareList:d,addSharedUser:f,removeSharedUser:p,unshareList:v,setUserPermission:w,addSharedItem:k,removeSharedItem:_,toggleSharedCheck:m,resetSharedChecks:y,checkAllShared:x}}function gT(t){const[e,n]=g.useState([]),[r,s]=g.useState(!1),[i,o]=g.useState(!0);g.useEffect(()=>{const u=Oe(De,"adminEmails"),h=Oo(u,d=>{const f=d.val(),p=Array.isArray(f)?f:[];n(p),o(!1)},()=>{n([]),o(!1)});return()=>h()},[]),g.useEffect(()=>{if(!(t!=null&&t.email)){s(!1);return}s(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=g.useCallback(async u=>{const h=u.toLowerCase().trim();if(!h)return;const d=[...new Set([...e,h])];await In(Oe(De,"adminEmails"),d)},[e]),a=g.useCallback(async u=>{var f;const h=u.toLowerCase().trim();if(((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())===h)return;const d=e.filter(p=>p!==h);await In(Oe(De,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:r,adminEmails:e,loading:i,addAdmin:l,removeAdmin:a}}function yT(){const[t,e]=g.useState(Nu);g.useEffect(()=>{const o=Oe(De,"categories"),l=Oo(o,a=>{const u=a.val();Array.isArray(u)&&u.length>0?e(u):e(Nu)},()=>{e(Nu)});return()=>l()},[]);const n=g.useCallback(async o=>{await In(Oe(De,"categories"),o)},[]),r=g.useCallback(async o=>{const l=o.trim();if(!l||t.includes(l))return;const a=[...t,l];await n(a)},[t,n]),s=g.useCallback(async(o,l)=>{const a=l.trim();if(!a||a===o||t.includes(a))return;const u=t.map(h=>h===o?a:h);await n(u)},[t,n]),i=g.useCallback(async o=>{const l=t.filter(a=>a!==o);l.length!==0&&await n(l)},[t,n]);return{categories:t,addCategory:r,updateCategory:s,removeCategory:i}}const vT="modulepreload",xT=function(t){return"/"+t},V_={},bT=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=xT(a),a in V_)return;V_[a]=!0;const u=a.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":vT,u||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},wT=60*60*1e3;function kT(){const[t,e]=g.useState(!1),[n,r]=g.useState(null),[s,i]=g.useState(null),[o,l]=g.useState(!1);return g.useEffect(()=>{bT(async()=>{const{registerSW:d}=await import("./virtual_pwa-register-DBevcuic.js");return{registerSW:d}},[]).then(({registerSW:d})=>{const f=d({onRegisteredSW(p,v){v&&(i(v),setInterval(()=>{v.update()},wT),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&v.update()}))},onNeedRefresh(){e(!0)},onOfflineReady(){console.log("PWA: 離線模式已就緒")}});r(()=>f)}).catch(()=>{})},[]),{needRefresh:t,refresh:()=>{n&&n(!0)},dismiss:()=>{e(!1)},checkForUpdate:async()=>{if(s){l(!0);try{await s.update()}catch{}setTimeout(()=>l(!1),1500)}},checking:o}}const Y_="packing-checklist-theme";function CT(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Eu(t){const e=t==="dark"||t==="system"&&CT();document.documentElement.classList.toggle("dark",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e?"#0f172a":"#4F46E5")}function ST(){const[t,e]=g.useState(()=>{try{return localStorage.getItem(Y_)||"system"}catch{return"system"}}),n=g.useCallback(r=>{e(r);try{localStorage.setItem(Y_,r)}catch{}Eu(r)},[]);return g.useEffect(()=>{Eu(t)},[t]),g.useEffect(()=>{if(t!=="system")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>Eu("system");return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[t]),{preference:t,changeTheme:n}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=t=>{const e=ET(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var IT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=g.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},a)=>g.createElement("svg",{ref:a,...IT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Hx("lucide",s),...!i&&!TT(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,h])=>g.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(t,e)=>{const n=g.forwardRef(({className:r,...s},i)=>g.createElement(RT,{ref:i,iconNode:e,className:Hx(`lucide-${NT(Q_(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Q_(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Iu=$("arrow-left",jT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Vx=$("arrow-up-down",PT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],LT=$("backpack",AT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],DT=$("baby",OT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],zT=$("book-open",MT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],FT=$("briefcase",UT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],op=$("camera",BT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],WT=$("chart-column",$T);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],VT=$("check-check",HT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],is=$("check",YT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],G_=$("chevron-down",QT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Yx=$("chevron-left",GT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],XT=$("circle-alert",qT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Zd=$("clipboard-list",KT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ZT=$("cloud-off",JT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],t4=$("cloud",e4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],r4=$("coffee",n4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],i4=$("copy",s4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],l4=$("download",o4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],c4=$("dumbbell",a4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],d4=$("eye",u4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qx=$("file-text",h4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],p4=$("footprints",f4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],_4=$("funnel",m4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],y4=$("gift",g4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Gx=$("grip-vertical",v4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],b4=$("heart",x4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],k4=$("inbox",w4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],qx=$("layout-dashboard",C4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],N4=$("layout-list",S4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],I4=$("list-checks",E4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Xx=$("loader-circle",T4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],j4=$("loader",R4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],A4=$("log-in",P4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],O4=$("log-out",L4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],M4=$("menu",D4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],U4=$("monitor",z4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],B4=$("moon",F4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],W4=$("mountain",$4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],V4=$("music",H4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Do=$("package",Y4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Mo=$("pen-line",Q4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],q4=$("pencil",G4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],K4=$("person-standing",X4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Z4=$("plane",J4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Vn=$("plus",eR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],nR=$("refresh-cw",tR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],sR=$("rotate-ccw",rR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ec=$("search",iR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Ic=$("share-2",oR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],eh=$("shield",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],cR=$("shirt",aR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],dR=$("shopping-cart",uR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fR=$("sparkles",hR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],lp=$("sticky-note",pR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],_R=$("sun",mR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],ap=$("tag",gR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],vR=$("target",yR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],bR=$("tent",xR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],xn=$("trash-2",wR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],CR=$("umbrella",kR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],NR=$("upload",SR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],IR=$("user",ER);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Kx=$("users",TR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],at=$("x",RR);function jR(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>r=>{e.forEach(s=>s(r))},e)}const Tc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function pi(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function cp(t){return"nodeType"in t}function St(t){var e,n;return t?pi(t)?t:cp(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function up(t){const{Document:e}=St(t);return t instanceof e}function el(t){return pi(t)?!1:t instanceof St(t).HTMLElement}function Jx(t){return t instanceof St(t).SVGElement}function mi(t){return t?pi(t)?t.document:cp(t)?up(t)?t:el(t)||Jx(t)?t.ownerDocument:document:document:document}const wn=Tc?g.useLayoutEffect:g.useEffect;function dp(t){const e=g.useRef(t);return wn(()=>{e.current=t}),g.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e.current==null?void 0:e.current(...r)},[])}function PR(){const t=g.useRef(null),e=g.useCallback((r,s)=>{t.current=setInterval(r,s)},[]),n=g.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function zo(t,e){e===void 0&&(e=[t]);const n=g.useRef(t);return wn(()=>{n.current!==t&&(n.current=t)},e),n}function tl(t,e){const n=g.useRef();return g.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function $a(t){const e=dp(t),n=g.useRef(null),r=g.useCallback(s=>{s!==n.current&&(e==null||e(s,n.current)),n.current=s},[]);return[n,r]}function th(t){const e=g.useRef();return g.useEffect(()=>{e.current=t},[t]),e.current}let Tu={};function nl(t,e){return g.useMemo(()=>{if(e)return e;const n=Tu[t]==null?0:Tu[t]+1;return Tu[t]=n,t+"-"+n},[t,e])}function Zx(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.reduce((i,o)=>{const l=Object.entries(o);for(const[a,u]of l){const h=i[a];h!=null&&(i[a]=h+t*u)}return i},{...e})}}const Ws=Zx(1),Wa=Zx(-1);function AR(t){return"clientX"in t&&"clientY"in t}function hp(t){if(!t)return!1;const{KeyboardEvent:e}=St(t.target);return e&&t instanceof e}function LR(t){if(!t)return!1;const{TouchEvent:e}=St(t.target);return e&&t instanceof e}function nh(t){if(LR(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return AR(t)?{x:t.clientX,y:t.clientY}:null}const si=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[si.Translate.toString(t),si.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),q_="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function OR(t){return t.matches(q_)?t:t.querySelector(q_)}const DR={display:"none"};function MR(t){let{id:e,value:n}=t;return ht.createElement("div",{id:e,style:DR},n)}function zR(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const s={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ht.createElement("div",{id:e,style:s,role:"status","aria-live":r,"aria-atomic":!0},n)}function UR(){const[t,e]=g.useState("");return{announce:g.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const eb=g.createContext(null);function FR(t){const e=g.useContext(eb);g.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function BR(){const[t]=g.useState(()=>new Set),e=g.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[g.useCallback(r=>{let{type:s,event:i}=r;t.forEach(o=>{var l;return(l=o[s])==null?void 0:l.call(o,i)})},[t]),e]}const $R={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},WR={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function HR(t){let{announcements:e=WR,container:n,hiddenTextDescribedById:r,screenReaderInstructions:s=$R}=t;const{announce:i,announcement:o}=UR(),l=nl("DndLiveRegion"),[a,u]=g.useState(!1);if(g.useEffect(()=>{u(!0)},[]),FR(g.useMemo(()=>({onDragStart(d){let{active:f}=d;i(e.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;e.onDragMove&&i(e.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;i(e.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;i(e.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;i(e.onDragCancel({active:f,over:p}))}}),[i,e])),!a)return null;const h=ht.createElement(ht.Fragment,null,ht.createElement(MR,{id:r,value:s.draggable}),ht.createElement(zR,{id:l,announcement:o}));return n?Ts.createPortal(h,n):h}var Fe;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(Fe||(Fe={}));function Ha(){}function Va(t,e){return g.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function tb(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const ln=Object.freeze({x:0,y:0});function VR(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function YR(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function QR(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function GR(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function X_(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const nb=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=X_(e,e.left,e.top),i=[];for(const o of r){const{id:l}=o,a=n.get(l);if(a){const u=VR(X_(a),s);i.push({id:l,data:{droppableContainer:o,value:u}})}}return i.sort(YR)};function qR(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),s=Math.min(e.left+e.width,t.left+t.width),i=Math.min(e.top+e.height,t.top+t.height),o=s-r,l=i-n;if(r<s&&n<i){const a=e.width*e.height,u=t.width*t.height,h=o*l,d=h/(a+u-h);return Number(d.toFixed(4))}return 0}const XR=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=[];for(const i of r){const{id:o}=i,l=n.get(o);if(l){const a=qR(l,e);a>0&&s.push({id:o,data:{droppableContainer:i,value:a}})}}return s.sort(QR)};function KR(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function rb(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:ln}function JR(t){return function(n){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return s.reduce((o,l)=>({...o,top:o.top+t*l.y,bottom:o.bottom+t*l.y,left:o.left+t*l.x,right:o.right+t*l.x}),{...n})}}const ZR=JR(1);function ej(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function tj(t,e,n){const r=ej(e);if(!r)return t;const{scaleX:s,scaleY:i,x:o,y:l}=r,a=t.left-o-(1-s)*parseFloat(n),u=t.top-l-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),h=s?t.width/s:t.width,d=i?t.height/i:t.height;return{width:h,height:d,top:u,right:a+h,bottom:u+d,left:a}}const nj={ignoreTransform:!1};function _i(t,e){e===void 0&&(e=nj);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:u,transformOrigin:h}=St(t).getComputedStyle(t);u&&(n=tj(n,u,h))}const{top:r,left:s,width:i,height:o,bottom:l,right:a}=n;return{top:r,left:s,width:i,height:o,bottom:l,right:a}}function K_(t){return _i(t,{ignoreTransform:!0})}function rj(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function sj(t,e){return e===void 0&&(e=St(t).getComputedStyle(t)),e.position==="fixed"}function ij(t,e){e===void 0&&(e=St(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const i=e[s];return typeof i=="string"?n.test(i):!1})}function fp(t,e){const n=[];function r(s){if(e!=null&&n.length>=e||!s)return n;if(up(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!el(s)||Jx(s)||n.includes(s))return n;const i=St(t).getComputedStyle(s);return s!==t&&ij(s,i)&&n.push(s),sj(s,i)?n:r(s.parentNode)}return t?r(t):n}function sb(t){const[e]=fp(t,1);return e??null}function Ru(t){return!Tc||!t?null:pi(t)?t:cp(t)?up(t)||t===mi(t).scrollingElement?window:el(t)?t:null:null}function ib(t){return pi(t)?t.scrollX:t.scrollLeft}function ob(t){return pi(t)?t.scrollY:t.scrollTop}function rh(t){return{x:ib(t),y:ob(t)}}var Qe;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(Qe||(Qe={}));function lb(t){return!Tc||!t?!1:t===document.scrollingElement}function ab(t){const e={x:0,y:0},n=lb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},s=t.scrollTop<=e.y,i=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,l=t.scrollLeft>=r.x;return{isTop:s,isLeft:i,isBottom:o,isRight:l,maxScroll:r,minScroll:e}}const oj={x:.2,y:.2};function lj(t,e,n,r,s){let{top:i,left:o,right:l,bottom:a}=n;r===void 0&&(r=10),s===void 0&&(s=oj);const{isTop:u,isBottom:h,isLeft:d,isRight:f}=ab(t),p={x:0,y:0},v={x:0,y:0},w={height:e.height*s.y,width:e.width*s.x};return!u&&i<=e.top+w.height?(p.y=Qe.Backward,v.y=r*Math.abs((e.top+w.height-i)/w.height)):!h&&a>=e.bottom-w.height&&(p.y=Qe.Forward,v.y=r*Math.abs((e.bottom-w.height-a)/w.height)),!f&&l>=e.right-w.width?(p.x=Qe.Forward,v.x=r*Math.abs((e.right-w.width-l)/w.width)):!d&&o<=e.left+w.width&&(p.x=Qe.Backward,v.x=r*Math.abs((e.left+w.width-o)/w.width)),{direction:p,speed:v}}function aj(t){if(t===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:e,left:n,right:r,bottom:s}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:s,width:t.clientWidth,height:t.clientHeight}}function cb(t){return t.reduce((e,n)=>Ws(e,rh(n)),ln)}function cj(t){return t.reduce((e,n)=>e+ib(n),0)}function uj(t){return t.reduce((e,n)=>e+ob(n),0)}function dj(t,e){if(e===void 0&&(e=_i),!t)return;const{top:n,left:r,bottom:s,right:i}=e(t);sb(t)&&(s<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const hj=[["x",["left","right"],cj],["y",["top","bottom"],uj]];class pp{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=fp(n),s=cb(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,l]of hj)for(const a of o)Object.defineProperty(this,a,{get:()=>{const u=l(r),h=s[i]-u;return this.rect[a]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ro{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var s;(s=this.target)==null||s.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function fj(t){const{EventTarget:e}=St(t);return t instanceof e?t:mi(t)}function ju(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Ut;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Ut||(Ut={}));function J_(t){t.preventDefault()}function pj(t){t.stopPropagation()}var ue;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(ue||(ue={}));const ub={start:[ue.Space,ue.Enter],cancel:[ue.Esc],end:[ue.Space,ue.Enter,ue.Tab]},mj=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case ue.Right:return{...n,x:n.x+25};case ue.Left:return{...n,x:n.x-25};case ue.Down:return{...n,y:n.y+25};case ue.Up:return{...n,y:n.y-25}}};class db{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new ro(mi(n)),this.windowListeners=new ro(St(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Ut.Resize,this.handleCancel),this.windowListeners.add(Ut.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Ut.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&dj(r),n(ln)}handleKeyDown(e){if(hp(e)){const{active:n,context:r,options:s}=this.props,{keyboardCodes:i=ub,coordinateGetter:o=mj,scrollBehavior:l="smooth"}=s,{code:a}=e;if(i.end.includes(a)){this.handleEnd(e);return}if(i.cancel.includes(a)){this.handleCancel(e);return}const{collisionRect:u}=r.current,h=u?{x:u.left,y:u.top}:ln;this.referenceCoordinates||(this.referenceCoordinates=h);const d=o(e,{active:n,context:r.current,currentCoordinates:h});if(d){const f=Wa(d,h),p={x:0,y:0},{scrollableAncestors:v}=r.current;for(const w of v){const k=e.code,{isTop:_,isRight:m,isLeft:y,isBottom:x,maxScroll:b,minScroll:S}=ab(w),I=aj(w),C={x:Math.min(k===ue.Right?I.right-I.width/2:I.right,Math.max(k===ue.Right?I.left:I.left+I.width/2,d.x)),y:Math.min(k===ue.Down?I.bottom-I.height/2:I.bottom,Math.max(k===ue.Down?I.top:I.top+I.height/2,d.y))},R=k===ue.Right&&!m||k===ue.Left&&!y,N=k===ue.Down&&!x||k===ue.Up&&!_;if(R&&C.x!==d.x){const E=w.scrollLeft+f.x,T=k===ue.Right&&E<=b.x||k===ue.Left&&E>=S.x;if(T&&!f.y){w.scrollTo({left:E,behavior:l});return}T?p.x=w.scrollLeft-E:p.x=k===ue.Right?w.scrollLeft-b.x:w.scrollLeft-S.x,p.x&&w.scrollBy({left:-p.x,behavior:l});break}else if(N&&C.y!==d.y){const E=w.scrollTop+f.y,T=k===ue.Down&&E<=b.y||k===ue.Up&&E>=S.y;if(T&&!f.x){w.scrollTo({top:E,behavior:l});return}T?p.y=w.scrollTop-E:p.y=k===ue.Down?w.scrollTop-b.y:w.scrollTop-S.y,p.y&&w.scrollBy({top:-p.y,behavior:l});break}}this.handleMove(e,Ws(Wa(d,this.referenceCoordinates),p))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}db.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=ub,onActivation:s}=e,{active:i}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const l=i.activatorNode.current;return l&&t.target!==l?!1:(t.preventDefault(),s==null||s({event:t.nativeEvent}),!0)}return!1}}];function Z_(t){return!!(t&&"distance"in t)}function e0(t){return!!(t&&"delay"in t)}class mp{constructor(e,n,r){var s;r===void 0&&(r=fj(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:i}=e,{target:o}=i;this.props=e,this.events=n,this.document=mi(o),this.documentListeners=new ro(this.document),this.listeners=new ro(r),this.windowListeners=new ro(St(o)),this.initialCoordinates=(s=nh(i))!=null?s:ln,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Ut.Resize,this.handleCancel),this.windowListeners.add(Ut.DragStart,J_),this.windowListeners.add(Ut.VisibilityChange,this.handleCancel),this.windowListeners.add(Ut.ContextMenu,J_),this.documentListeners.add(Ut.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(e0(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Z_(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:s}=this.props;s(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Ut.Click,pj,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Ut.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:s,props:i}=this,{onMove:o,options:{activationConstraint:l}}=i;if(!s)return;const a=(n=nh(e))!=null?n:ln,u=Wa(s,a);if(!r&&l){if(Z_(l)){if(l.tolerance!=null&&ju(u,l.tolerance))return this.handleCancel();if(ju(u,l.distance))return this.handleStart()}if(e0(l)&&ju(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}e.cancelable&&e.preventDefault(),o(a)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===ue.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const _j={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Rc extends mp{constructor(e){const{event:n}=e,r=mi(n.target);super(e,_j,r)}}Rc.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const gj={move:{name:"mousemove"},end:{name:"mouseup"}};var sh;(function(t){t[t.RightClick=2]="RightClick"})(sh||(sh={}));class yj extends mp{constructor(e){super(e,gj,mi(e.event.target))}}yj.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===sh.RightClick?!1:(r==null||r({event:n}),!0)}}];const Pu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class _p extends mp{constructor(e){super(e,Pu)}static setup(){return window.addEventListener(Pu.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Pu.move.name,e)};function e(){}}}_p.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:s}=n;return s.length>1?!1:(r==null||r({event:n}),!0)}}];var so;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(so||(so={}));var Ya;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(Ya||(Ya={}));function vj(t){let{acceleration:e,activator:n=so.Pointer,canScroll:r,draggingRect:s,enabled:i,interval:o=5,order:l=Ya.TreeOrder,pointerCoordinates:a,scrollableAncestors:u,scrollableAncestorRects:h,delta:d,threshold:f}=t;const p=bj({delta:d,disabled:!i}),[v,w]=PR(),k=g.useRef({x:0,y:0}),_=g.useRef({x:0,y:0}),m=g.useMemo(()=>{switch(n){case so.Pointer:return a?{top:a.y,bottom:a.y,left:a.x,right:a.x}:null;case so.DraggableRect:return s}},[n,s,a]),y=g.useRef(null),x=g.useCallback(()=>{const S=y.current;if(!S)return;const I=k.current.x*_.current.x,C=k.current.y*_.current.y;S.scrollBy(I,C)},[]),b=g.useMemo(()=>l===Ya.TreeOrder?[...u].reverse():u,[l,u]);g.useEffect(()=>{if(!i||!u.length||!m){w();return}for(const S of b){if((r==null?void 0:r(S))===!1)continue;const I=u.indexOf(S),C=h[I];if(!C)continue;const{direction:R,speed:N}=lj(S,C,m,e,f);for(const E of["x","y"])p[E][R[E]]||(N[E]=0,R[E]=0);if(N.x>0||N.y>0){w(),y.current=S,v(x,o),k.current=N,_.current=R;return}}k.current={x:0,y:0},_.current={x:0,y:0},w()},[e,x,r,w,i,o,JSON.stringify(m),JSON.stringify(p),v,u,b,h,JSON.stringify(f)])}const xj={x:{[Qe.Backward]:!1,[Qe.Forward]:!1},y:{[Qe.Backward]:!1,[Qe.Forward]:!1}};function bj(t){let{delta:e,disabled:n}=t;const r=th(e);return tl(s=>{if(n||!r||!s)return xj;const i={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[Qe.Backward]:s.x[Qe.Backward]||i.x===-1,[Qe.Forward]:s.x[Qe.Forward]||i.x===1},y:{[Qe.Backward]:s.y[Qe.Backward]||i.y===-1,[Qe.Forward]:s.y[Qe.Forward]||i.y===1}}},[n,e,r])}function wj(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return tl(s=>{var i;return e==null?null:(i=r??s)!=null?i:null},[r,e])}function kj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{const{sensor:s}=r,i=s.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...i]},[]),[t,e])}var Uo;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Uo||(Uo={}));var ih;(function(t){t.Optimized="optimized"})(ih||(ih={}));const t0=new Map;function Cj(t,e){let{dragging:n,dependencies:r,config:s}=e;const[i,o]=g.useState(null),{frequency:l,measure:a,strategy:u}=s,h=g.useRef(t),d=k(),f=zo(d),p=g.useCallback(function(_){_===void 0&&(_=[]),!f.current&&o(m=>m===null?_:m.concat(_.filter(y=>!m.includes(y))))},[f]),v=g.useRef(null),w=tl(_=>{if(d&&!n)return t0;if(!_||_===t0||h.current!==t||i!=null){const m=new Map;for(let y of t){if(!y)continue;if(i&&i.length>0&&!i.includes(y.id)&&y.rect.current){m.set(y.id,y.rect.current);continue}const x=y.node.current,b=x?new pp(a(x),x):null;y.rect.current=b,b&&m.set(y.id,b)}return m}return _},[t,i,n,d,a]);return g.useEffect(()=>{h.current=t},[t]),g.useEffect(()=>{d||p()},[n,d]),g.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),g.useEffect(()=>{d||typeof l!="number"||v.current!==null||(v.current=setTimeout(()=>{p(),v.current=null},l))},[l,d,p,...r]),{droppableRects:w,measureDroppableContainers:p,measuringScheduled:i!=null};function k(){switch(u){case Uo.Always:return!1;case Uo.BeforeDragging:return n;default:return!n}}}function hb(t,e){return tl(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function Sj(t,e){return hb(t,e)}function Nj(t){let{callback:e,disabled:n}=t;const r=dp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function jc(t){let{callback:e,disabled:n}=t;const r=dp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Ej(t){return new pp(_i(t),t)}function n0(t,e,n){e===void 0&&(e=Ej);const[r,s]=g.useState(null);function i(){s(a=>{if(!t)return null;if(t.isConnected===!1){var u;return(u=a??n)!=null?u:null}const h=e(t);return JSON.stringify(a)===JSON.stringify(h)?a:h})}const o=Nj({callback(a){if(t)for(const u of a){const{type:h,target:d}=u;if(h==="childList"&&d instanceof HTMLElement&&d.contains(t)){i();break}}}}),l=jc({callback:i});return wn(()=>{i(),t?(l==null||l.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),o==null||o.disconnect())},[t]),r}function Ij(t){const e=hb(t);return rb(t,e)}const r0=[];function Tj(t){const e=g.useRef(t),n=tl(r=>t?r&&r!==r0&&t&&e.current&&t.parentNode===e.current.parentNode?r:fp(t):r0,[t]);return g.useEffect(()=>{e.current=t},[t]),n}function Rj(t){const[e,n]=g.useState(null),r=g.useRef(t),s=g.useCallback(i=>{const o=Ru(i.target);o&&n(l=>l?(l.set(o,rh(o)),new Map(l)):null)},[]);return g.useEffect(()=>{const i=r.current;if(t!==i){o(i);const l=t.map(a=>{const u=Ru(a);return u?(u.addEventListener("scroll",s,{passive:!0}),[u,rh(u)]):null}).filter(a=>a!=null);n(l.length?new Map(l):null),r.current=t}return()=>{o(t),o(i)};function o(l){l.forEach(a=>{const u=Ru(a);u==null||u.removeEventListener("scroll",s)})}},[s,t]),g.useMemo(()=>t.length?e?Array.from(e.values()).reduce((i,o)=>Ws(i,o),ln):cb(t):ln,[t,e])}function s0(t,e){e===void 0&&(e=[]);const n=g.useRef(null);return g.useEffect(()=>{n.current=null},e),g.useEffect(()=>{const r=t!==ln;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Wa(t,n.current):ln}function jj(t){g.useEffect(()=>{if(!Tc)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function Pj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{let{eventName:s,handler:i}=r;return n[s]=o=>{i(o,e)},n},{}),[t,e])}function fb(t){return g.useMemo(()=>t?rj(t):null,[t])}const i0=[];function Aj(t,e){e===void 0&&(e=_i);const[n]=t,r=fb(n?St(n):null),[s,i]=g.useState(i0);function o(){i(()=>t.length?t.map(a=>lb(a)?r:new pp(e(a),a)):i0)}const l=jc({callback:o});return wn(()=>{l==null||l.disconnect(),o(),t.forEach(a=>l==null?void 0:l.observe(a))},[t]),s}function Lj(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return el(e)?e:t}function Oj(t){let{measure:e}=t;const[n,r]=g.useState(null),s=g.useCallback(u=>{for(const{target:h}of u)if(el(h)){r(d=>{const f=e(h);return d?{...d,width:f.width,height:f.height}:f});break}},[e]),i=jc({callback:s}),o=g.useCallback(u=>{const h=Lj(u);i==null||i.disconnect(),h&&(i==null||i.observe(h)),r(h?e(h):null)},[e,i]),[l,a]=$a(o);return g.useMemo(()=>({nodeRef:l,rect:n,setRef:a}),[n,l,a])}const Dj=[{sensor:Rc,options:{}},{sensor:db,options:{}}],Mj={current:{}},Gl={draggable:{measure:K_},droppable:{measure:K_,strategy:Uo.WhileDragging,frequency:ih.Optimized},dragOverlay:{measure:_i}};class io extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const zj={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new io,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ha},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Gl,measureDroppableContainers:Ha,windowRect:null,measuringScheduled:!1},Uj={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ha,draggableNodes:new Map,over:null,measureDroppableContainers:Ha},Pc=g.createContext(Uj),pb=g.createContext(zj);function Fj(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new io}}}function Bj(t,e){switch(e.type){case Fe.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case Fe.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case Fe.DragEnd:case Fe.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Fe.RegisterDroppable:{const{element:n}=e,{id:r}=n,s=new io(t.droppable.containers);return s.set(r,n),{...t,droppable:{...t.droppable,containers:s}}}case Fe.SetDroppableDisabled:{const{id:n,key:r,disabled:s}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const o=new io(t.droppable.containers);return o.set(n,{...i,disabled:s}),{...t,droppable:{...t.droppable,containers:o}}}case Fe.UnregisterDroppable:{const{id:n,key:r}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const i=new io(t.droppable.containers);return i.delete(n),{...t,droppable:{...t.droppable,containers:i}}}default:return t}}function $j(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:s}=g.useContext(Pc),i=th(r),o=th(n==null?void 0:n.id);return g.useEffect(()=>{if(!e&&!r&&i&&o!=null){if(!hp(i)||document.activeElement===i.target)return;const l=s.get(o);if(!l)return;const{activatorNode:a,node:u}=l;if(!a.current&&!u.current)return;requestAnimationFrame(()=>{for(const h of[a.current,u.current]){if(!h)continue;const d=OR(h);if(d){d.focus();break}}})}},[r,e,s,o,i]),null}function Wj(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((s,i)=>i({transform:s,...r}),n):n}function Hj(t){return g.useMemo(()=>({draggable:{...Gl.draggable,...t==null?void 0:t.draggable},droppable:{...Gl.droppable,...t==null?void 0:t.droppable},dragOverlay:{...Gl.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function Vj(t){let{activeNode:e,measure:n,initialRect:r,config:s=!0}=t;const i=g.useRef(!1),{x:o,y:l}=typeof s=="boolean"?{x:s,y:s}:s;wn(()=>{if(!o&&!l||!e){i.current=!1;return}if(i.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const h=n(u),d=rb(h,r);if(o||(d.x=0),l||(d.y=0),i.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const f=sb(u);f&&f.scrollBy({top:d.y,left:d.x})}},[e,o,l,r,n])}const mb=g.createContext({...ln,scaleX:1,scaleY:1});var rr;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(rr||(rr={}));const _b=g.memo(function(e){var n,r,s,i;let{id:o,accessibility:l,autoScroll:a=!0,children:u,sensors:h=Dj,collisionDetection:d=XR,measuring:f,modifiers:p,...v}=e;const w=g.useReducer(Bj,void 0,Fj),[k,_]=w,[m,y]=BR(),[x,b]=g.useState(rr.Uninitialized),S=x===rr.Initialized,{draggable:{active:I,nodes:C,translate:R},droppable:{containers:N}}=k,E=I!=null?C.get(I):null,T=g.useRef({initial:null,translated:null}),A=g.useMemo(()=>{var st;return I!=null?{id:I,data:(st=E==null?void 0:E.data)!=null?st:Mj,rect:T}:null},[I,E]),Y=g.useRef(null),[te,Z]=g.useState(null),[Q,D]=g.useState(null),z=zo(v,Object.values(v)),M=nl("DndDescribedBy",o),H=g.useMemo(()=>N.getEnabled(),[N]),V=Hj(f),{droppableRects:X,measureDroppableContainers:ce,measuringScheduled:L}=Cj(H,{dragging:S,dependencies:[R.x,R.y],config:V.droppable}),U=wj(C,I),K=g.useMemo(()=>Q?nh(Q):null,[Q]),he=Eb(),fe=Sj(U,V.draggable.measure);Vj({activeNode:I!=null?C.get(I):null,config:he.layoutShiftCompensation,initialRect:fe,measure:V.draggable.measure});const ee=n0(U,V.draggable.measure,fe),B=n0(U?U.parentElement:null),oe=g.useRef({activatorEvent:null,active:null,activeNode:U,collisionRect:null,collisions:null,droppableRects:X,draggableNodes:C,draggingNode:null,draggingNodeRect:null,droppableContainers:N,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),le=N.getNodeFor((n=oe.current.over)==null?void 0:n.id),pe=Oj({measure:V.dragOverlay.measure}),We=(r=pe.nodeRef.current)!=null?r:U,Nt=S?(s=pe.rect)!=null?s:ee:null,Gn=!!(pe.nodeRef.current&&pe.rect),rl=Ij(Gn?null:ee),gi=fb(We?St(We):null),an=Tj(S?le??U:null),ds=Aj(an),Ar=Wj(p,{transform:{x:R.x-rl.x,y:R.y-rl.y,scaleX:1,scaleY:1},activatorEvent:Q,active:A,activeNodeRect:ee,containerNodeRect:B,draggingNodeRect:Nt,over:oe.current.over,overlayNodeRect:pe.rect,scrollableAncestors:an,scrollableAncestorRects:ds,windowRect:gi}),yi=K?Ws(K,R):null,vi=Rj(an),sl=s0(vi),il=s0(vi,[ee]),j=Ws(Ar,sl),W=Nt?ZR(Nt,Ar):null,q=A&&W?d({active:A,collisionRect:W,droppableRects:X,droppableContainers:H,pointerCoordinates:yi}):null,Se=GR(q,"id"),[ye,Qt]=g.useState(null),cn=Gn?Ar:Ws(Ar,il),Et=KR(cn,(i=ye==null?void 0:ye.rect)!=null?i:null,ee),Lc=g.useRef(null),gp=g.useCallback((st,It)=>{let{sensor:Tt,options:qn}=It;if(Y.current==null)return;const zt=C.get(Y.current);if(!zt)return;const Rt=st.nativeEvent,un=new Tt({active:Y.current,activeNode:zt,event:Rt,options:qn,context:oe,onAbort(Ke){if(!C.get(Ke))return;const{onDragAbort:dn}=z.current,Cn={id:Ke};dn==null||dn(Cn),m({type:"onDragAbort",event:Cn})},onPending(Ke,Xn,dn,Cn){if(!C.get(Ke))return;const{onDragPending:bi}=z.current,Kn={id:Ke,constraint:Xn,initialCoordinates:dn,offset:Cn};bi==null||bi(Kn),m({type:"onDragPending",event:Kn})},onStart(Ke){const Xn=Y.current;if(Xn==null)return;const dn=C.get(Xn);if(!dn)return;const{onDragStart:Cn}=z.current,xi={activatorEvent:Rt,active:{id:Xn,data:dn.data,rect:T}};Ts.unstable_batchedUpdates(()=>{Cn==null||Cn(xi),b(rr.Initializing),_({type:Fe.DragStart,initialCoordinates:Ke,active:Xn}),m({type:"onDragStart",event:xi}),Z(Lc.current),D(Rt)})},onMove(Ke){_({type:Fe.DragMove,coordinates:Ke})},onEnd:hs(Fe.DragEnd),onCancel:hs(Fe.DragCancel)});Lc.current=un;function hs(Ke){return async function(){const{active:dn,collisions:Cn,over:xi,scrollAdjustedTranslate:bi}=oe.current;let Kn=null;if(dn&&bi){const{cancelDrop:wi}=z.current;Kn={activatorEvent:Rt,active:dn,collisions:Cn,delta:bi,over:xi},Ke===Fe.DragEnd&&typeof wi=="function"&&await Promise.resolve(wi(Kn))&&(Ke=Fe.DragCancel)}Y.current=null,Ts.unstable_batchedUpdates(()=>{_({type:Ke}),b(rr.Uninitialized),Qt(null),Z(null),D(null),Lc.current=null;const wi=Ke===Fe.DragEnd?"onDragEnd":"onDragCancel";if(Kn){const Oc=z.current[wi];Oc==null||Oc(Kn),m({type:wi,event:Kn})}})}}},[C]),Cb=g.useCallback((st,It)=>(Tt,qn)=>{const zt=Tt.nativeEvent,Rt=C.get(qn);if(Y.current!==null||!Rt||zt.dndKit||zt.defaultPrevented)return;const un={active:Rt};st(Tt,It.options,un)===!0&&(zt.dndKit={capturedBy:It.sensor},Y.current=qn,gp(Tt,It))},[C,gp]),yp=kj(h,Cb);jj(h),wn(()=>{ee&&x===rr.Initializing&&b(rr.Initialized)},[ee,x]),g.useEffect(()=>{const{onDragMove:st}=z.current,{active:It,activatorEvent:Tt,collisions:qn,over:zt}=oe.current;if(!It||!Tt)return;const Rt={active:It,activatorEvent:Tt,collisions:qn,delta:{x:j.x,y:j.y},over:zt};Ts.unstable_batchedUpdates(()=>{st==null||st(Rt),m({type:"onDragMove",event:Rt})})},[j.x,j.y]),g.useEffect(()=>{const{active:st,activatorEvent:It,collisions:Tt,droppableContainers:qn,scrollAdjustedTranslate:zt}=oe.current;if(!st||Y.current==null||!It||!zt)return;const{onDragOver:Rt}=z.current,un=qn.get(Se),hs=un&&un.rect.current?{id:un.id,rect:un.rect.current,data:un.data,disabled:un.disabled}:null,Ke={active:st,activatorEvent:It,collisions:Tt,delta:{x:zt.x,y:zt.y},over:hs};Ts.unstable_batchedUpdates(()=>{Qt(hs),Rt==null||Rt(Ke),m({type:"onDragOver",event:Ke})})},[Se]),wn(()=>{oe.current={activatorEvent:Q,active:A,activeNode:U,collisionRect:W,collisions:q,droppableRects:X,draggableNodes:C,draggingNode:We,draggingNodeRect:Nt,droppableContainers:N,over:ye,scrollableAncestors:an,scrollAdjustedTranslate:j},T.current={initial:Nt,translated:W}},[A,U,q,W,C,We,Nt,X,N,ye,an,j]),vj({...he,delta:R,draggingRect:W,pointerCoordinates:yi,scrollableAncestors:an,scrollableAncestorRects:ds});const Sb=g.useMemo(()=>({active:A,activeNode:U,activeNodeRect:ee,activatorEvent:Q,collisions:q,containerNodeRect:B,dragOverlay:pe,draggableNodes:C,droppableContainers:N,droppableRects:X,over:ye,measureDroppableContainers:ce,scrollableAncestors:an,scrollableAncestorRects:ds,measuringConfiguration:V,measuringScheduled:L,windowRect:gi}),[A,U,ee,Q,q,B,pe,C,N,X,ye,ce,an,ds,V,L,gi]),Nb=g.useMemo(()=>({activatorEvent:Q,activators:yp,active:A,activeNodeRect:ee,ariaDescribedById:{draggable:M},dispatch:_,draggableNodes:C,over:ye,measureDroppableContainers:ce}),[Q,yp,A,ee,_,M,C,ye,ce]);return ht.createElement(eb.Provider,{value:y},ht.createElement(Pc.Provider,{value:Nb},ht.createElement(pb.Provider,{value:Sb},ht.createElement(mb.Provider,{value:Et},u)),ht.createElement($j,{disabled:(l==null?void 0:l.restoreFocus)===!1})),ht.createElement(HR,{...l,hiddenTextDescribedById:M}));function Eb(){const st=(te==null?void 0:te.autoScrollEnabled)===!1,It=typeof a=="object"?a.enabled===!1:a===!1,Tt=S&&!st&&!It;return typeof a=="object"?{...a,enabled:Tt}:{enabled:Tt}}}),Yj=g.createContext(null),o0="button",Qj="Draggable";function Gj(t){let{id:e,data:n,disabled:r=!1,attributes:s}=t;const i=nl(Qj),{activators:o,activatorEvent:l,active:a,activeNodeRect:u,ariaDescribedById:h,draggableNodes:d,over:f}=g.useContext(Pc),{role:p=o0,roleDescription:v="draggable",tabIndex:w=0}=s??{},k=(a==null?void 0:a.id)===e,_=g.useContext(k?mb:Yj),[m,y]=$a(),[x,b]=$a(),S=Pj(o,e),I=zo(n);wn(()=>(d.set(e,{id:e,key:i,node:m,activatorNode:x,data:I}),()=>{const R=d.get(e);R&&R.key===i&&d.delete(e)}),[d,e]);const C=g.useMemo(()=>({role:p,tabIndex:w,"aria-disabled":r,"aria-pressed":k&&p===o0?!0:void 0,"aria-roledescription":v,"aria-describedby":h.draggable}),[r,p,w,k,v,h.draggable]);return{active:a,activatorEvent:l,activeNodeRect:u,attributes:C,isDragging:k,listeners:r?void 0:S,node:m,over:f,setNodeRef:y,setActivatorNodeRef:b,transform:_}}function qj(){return g.useContext(pb)}const Xj="Droppable",Kj={timeout:25};function Jj(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:s}=t;const i=nl(Xj),{active:o,dispatch:l,over:a,measureDroppableContainers:u}=g.useContext(Pc),h=g.useRef({disabled:n}),d=g.useRef(!1),f=g.useRef(null),p=g.useRef(null),{disabled:v,updateMeasurementsFor:w,timeout:k}={...Kj,...s},_=zo(w??r),m=g.useCallback(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(_.current)?_.current:[_.current]),p.current=null},k)},[k]),y=jc({callback:m,disabled:v||!o}),x=g.useCallback((C,R)=>{y&&(R&&(y.unobserve(R),d.current=!1),C&&y.observe(C))},[y]),[b,S]=$a(x),I=zo(e);return g.useEffect(()=>{!y||!b.current||(y.disconnect(),d.current=!1,y.observe(b.current))},[b,y]),g.useEffect(()=>(l({type:Fe.RegisterDroppable,element:{id:r,key:i,disabled:n,node:b,rect:f,data:I}}),()=>l({type:Fe.UnregisterDroppable,key:i,id:r})),[r]),g.useEffect(()=>{n!==h.current.disabled&&(l({type:Fe.SetDroppableDisabled,id:r,key:i,disabled:n}),h.current.disabled=n)},[r,i,n,l]),{active:o,rect:f,isOver:(a==null?void 0:a.id)===r,node:b,over:a,setNodeRef:S}}function Ac(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function Zj(t,e){return t.reduce((n,r,s)=>{const i=e.get(r);return i&&(n[s]=i),n},Array(t.length))}function Il(t){return t!==null&&t>=0}function eP(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function tP(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const gb=t=>{let{rects:e,activeIndex:n,overIndex:r,index:s}=t;const i=Ac(e,r,n),o=e[s],l=i[s];return!l||!o?null:{x:l.left-o.left,y:l.top-o.top,scaleX:l.width/o.width,scaleY:l.height/o.height}},Tl={scaleX:1,scaleY:1},yb=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:s,rects:i,overIndex:o}=t;const l=(e=i[n])!=null?e:r;if(!l)return null;if(s===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(l.top+l.height):u.top-l.top,...Tl}:null}const a=nP(i,s,n);return s>n&&s<=o?{x:0,y:-l.height-a,...Tl}:s<n&&s>=o?{x:0,y:l.height+a,...Tl}:{x:0,y:0,...Tl}};function nP(t,e,n){const r=t[e],s=t[e-1],i=t[e+1];return r?n<e?s?r.top-(s.top+s.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):s?r.top-(s.top+s.height):0:0}const vb="Sortable",xb=ht.createContext({activeIndex:-1,containerId:vb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:gb,disabled:{draggable:!1,droppable:!1}});function bb(t){let{children:e,id:n,items:r,strategy:s=gb,disabled:i=!1}=t;const{active:o,dragOverlay:l,droppableRects:a,over:u,measureDroppableContainers:h}=qj(),d=nl(vb,n),f=l.rect!==null,p=g.useMemo(()=>r.map(S=>typeof S=="object"&&"id"in S?S.id:S),[r]),v=o!=null,w=o?p.indexOf(o.id):-1,k=u?p.indexOf(u.id):-1,_=g.useRef(p),m=!eP(p,_.current),y=k!==-1&&w===-1||m,x=tP(i);wn(()=>{m&&v&&h(p)},[m,p,v,h]),g.useEffect(()=>{_.current=p},[p]);const b=g.useMemo(()=>({activeIndex:w,containerId:d,disabled:x,disableTransforms:y,items:p,overIndex:k,useDragOverlay:f,sortedRects:Zj(p,a),strategy:s}),[w,d,x.draggable,x.droppable,y,p,k,a,f,s]);return ht.createElement(xb.Provider,{value:b},e)}const rP=t=>{let{id:e,items:n,activeIndex:r,overIndex:s}=t;return Ac(n,r,s).indexOf(e)},sP=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:s,items:i,newIndex:o,previousItems:l,previousContainerId:a,transition:u}=t;return!u||!r||l!==i&&s===o?!1:n?!0:o!==s&&e===a},iP={duration:200,easing:"ease"},wb="transform",oP=si.Transition.toString({property:wb,duration:0,easing:"linear"}),lP={roleDescription:"sortable"};function aP(t){let{disabled:e,index:n,node:r,rect:s}=t;const[i,o]=g.useState(null),l=g.useRef(n);return wn(()=>{if(!e&&n!==l.current&&r.current){const a=s.current;if(a){const u=_i(r.current,{ignoreTransform:!0}),h={x:a.left-u.left,y:a.top-u.top,scaleX:a.width/u.width,scaleY:a.height/u.height};(h.x||h.y)&&o(h)}}n!==l.current&&(l.current=n)},[e,n,r,s]),g.useEffect(()=>{i&&o(null)},[i]),i}function kb(t){let{animateLayoutChanges:e=sP,attributes:n,disabled:r,data:s,getNewIndex:i=rP,id:o,strategy:l,resizeObserverConfig:a,transition:u=iP}=t;const{items:h,containerId:d,activeIndex:f,disabled:p,disableTransforms:v,sortedRects:w,overIndex:k,useDragOverlay:_,strategy:m}=g.useContext(xb),y=cP(r,p),x=h.indexOf(o),b=g.useMemo(()=>({sortable:{containerId:d,index:x,items:h},...s}),[d,s,x,h]),S=g.useMemo(()=>h.slice(h.indexOf(o)),[h,o]),{rect:I,node:C,isOver:R,setNodeRef:N}=Jj({id:o,data:b,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...a}}),{active:E,activatorEvent:T,activeNodeRect:A,attributes:Y,setNodeRef:te,listeners:Z,isDragging:Q,over:D,setActivatorNodeRef:z,transform:M}=Gj({id:o,data:b,attributes:{...lP,...n},disabled:y.draggable}),H=jR(N,te),V=!!E,X=V&&!v&&Il(f)&&Il(k),ce=!_&&Q,L=ce&&X?M:null,K=X?L??(l??m)({rects:w,activeNodeRect:A,activeIndex:f,overIndex:k,index:x}):null,he=Il(f)&&Il(k)?i({id:o,items:h,activeIndex:f,overIndex:k}):x,fe=E==null?void 0:E.id,ee=g.useRef({activeId:fe,items:h,newIndex:he,containerId:d}),B=h!==ee.current.items,oe=e({active:E,containerId:d,isDragging:Q,isSorting:V,id:o,index:x,items:h,newIndex:ee.current.newIndex,previousItems:ee.current.items,previousContainerId:ee.current.containerId,transition:u,wasDragging:ee.current.activeId!=null}),le=aP({disabled:!oe,index:x,node:C,rect:I});return g.useEffect(()=>{V&&ee.current.newIndex!==he&&(ee.current.newIndex=he),d!==ee.current.containerId&&(ee.current.containerId=d),h!==ee.current.items&&(ee.current.items=h)},[V,he,d,h]),g.useEffect(()=>{if(fe===ee.current.activeId)return;if(fe!=null&&ee.current.activeId==null){ee.current.activeId=fe;return}const We=setTimeout(()=>{ee.current.activeId=fe},50);return()=>clearTimeout(We)},[fe]),{active:E,activeIndex:f,attributes:Y,data:b,rect:I,index:x,newIndex:he,items:h,isOver:R,isSorting:V,isDragging:Q,listeners:Z,node:C,overIndex:k,over:D,setNodeRef:H,setActivatorNodeRef:z,setDroppableNodeRef:N,setDraggableNodeRef:te,transform:le??K,transition:pe()};function pe(){if(le||B&&ee.current.newIndex===x)return oP;if(!(ce&&!hp(T)||!u)&&(V||oe))return si.Transition.toString({...u,property:wb})}}function cP(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}ue.Down,ue.Right,ue.Up,ue.Left;const l0={"clipboard-list":Zd,footprints:p4,briefcase:FT,plane:Z4,"person-standing":K4,backpack:LT,umbrella:CR,tent:bR,target:vR,"shopping-cart":dR,shirt:cR,dumbbell:c4,mountain:W4,baby:DT,camera:op,heart:b4,music:V4,"book-open":zT,coffee:r4,gift:y4},a0={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function uP(t){return a0[t]?l0[a0[t]]||Zd:l0[t]||Zd}function oo({name:t,size:e=20,className:n=""}){const r=uP(t);return c.jsx(r,{size:e,className:n})}function Au({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function dP(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return c.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>c.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsxs("div",{className:"animate-celebration-text text-center",children:[c.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),c.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function hP({item:t}){const{attributes:e,listeners:n,setNodeRef:r,transform:s,transition:i,isDragging:o}=kb({id:t.id}),l={transform:si.Transform.toString(s),transition:i,zIndex:o?50:void 0,position:"relative"};return c.jsx("div",{ref:r,style:l,children:c.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${o?"shadow-lg opacity-90":""}`,children:[c.jsx("div",{...e,...n,className:"w-6 h-6 mr-4 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:c.jsx(Gx,{size:20})}),c.jsx("div",{className:"flex-1 min-w-0",children:c.jsx("div",{className:"text-lg text-slate-800 dark:text-slate-100",children:t.name})})]})})}function fP({data:t,user:e,syncStatus:n,onLogin:r,onLogout:s,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:a,categories:u=[]}){var vi,sl,il;const[h,d]=g.useState([]),[f,p]=g.useState(null),[v,w]=g.useState(null),[k,_]=g.useState([]),[m,y]=g.useState(!1),[x,b]=g.useState("default"),[S,I]=g.useState(!1),[C,R]=g.useState(""),[N,E]=g.useState(u[0]||""),[T,A]=g.useState(null),Y=a&&((vi=l==null?void 0:l.sharedWithMe)==null?void 0:vi[a]),te=a&&((sl=l==null?void 0:l.sharedByMe)==null?void 0:sl[a]),Z=Y?"shared-with-me":te?"own-shared":"local",Q=Y?l.sharedWithMe[a]:te?l.sharedByMe[a]:null,D=Z!=="shared-with-me"||(()=>{if(!(e!=null&&e.email)||!(Q!=null&&Q.sharedWith))return!1;const j=nr(e.email);return Q.sharedWith[j]==="edit"})(),z=(il=t.lists)==null?void 0:il.find(j=>j.id===t.activeListId),M=z?{...z,items:Array.isArray(z.items)?z.items:[],checkedItems:Array.isArray(z.checkedItems)?z.checkedItems:[]}:null;let H=[],V=[],X="",ce="",L="";Z==="shared-with-me"&&Q?(H=(Q.items||[]).filter(Boolean),V=Q.checkedItems||[],X=Q.name||"清單",ce=Q.icon||"clipboard-list",L=Q.ownerName||Q.ownerEmail||""):Z==="own-shared"&&M&&Q?(H=M.items.map(j=>{var W;return(W=t.itemLibrary)==null?void 0:W.find(q=>q.id===j)}).filter(Boolean),V=Q.checkedItems||[],X=M.name||"清單",ce=M.icon||"clipboard-list"):(H=M?M.items.map(j=>{var W;return(W=t.itemLibrary)==null?void 0:W.find(q=>q.id===j)}).filter(Boolean):[],V=(M==null?void 0:M.checkedItems)||[],X=(M==null?void 0:M.name)||"清單",ce=(M==null?void 0:M.icon)||"clipboard-list");const U=V.length,K=H.length,he=K>0&&U===K,fe=K>0?U/K*100:0,ee=g.useRef(he);g.useEffect(()=>{if(he&&!ee.current){y(!0);const j=setTimeout(()=>y(!1),2500);return()=>clearTimeout(j)}ee.current=he},[he]);const B=(()=>{const j=[],W={};return H.forEach(q=>{const Se=q.category||"其他";W[Se]||(W[Se]=[]),W[Se].push(q)}),u.forEach(q=>{W[q]&&(j.push({category:q,items:W[q]}),delete W[q])}),Object.keys(W).forEach(q=>{j.push({category:q,items:W[q]})}),j})(),oe=x==="name"?[...H].sort((j,W)=>j.name.localeCompare(W.name,"zh-Hant")):x==="unchecked"?[...H].sort((j,W)=>{const q=V.includes(j.id)?1:0,Se=V.includes(W.id)?1:0;return q-Se}):H,le=()=>{b(j=>j==="default"?"name":j==="name"?"unchecked":j==="unchecked"?Z==="shared-with-me"?"default":"manual":"default")},pe=x==="name"?"名稱":x==="unchecked"?"未勾選":x==="manual"?"手動":"",We=tb(Va(Rc,{activationConstraint:{distance:5}}),Va(_p,{activationConstraint:{delay:150,tolerance:5}})),Nt=j=>{const{active:W,over:q}=j;if(!q||W.id===q.id)return;const Se=M.items.indexOf(W.id),ye=M.items.indexOf(q.id);if(Se===-1||ye===-1)return;const Qt=Ac(M.items,Se,ye),cn={...t,lists:t.lists.map(Et=>Et.id===t.activeListId?{...Et,items:Qt}:Et)};o(cn)},Gn=j=>{if(w(j),Z==="shared-with-me"||Z==="own-shared")l.toggleSharedCheck(a,j);else{const W={...t,lists:t.lists.map(q=>{if(q.id!==t.activeListId)return q;const Se=Array.isArray(q.checkedItems)?q.checkedItems:[],ye=Se.includes(j);return{...q,checkedItems:ye?Se.filter(Qt=>Qt!==j):[...Se,j]}})};o(W)}},rl=()=>{if(Z==="shared-with-me"||Z==="own-shared")l.resetSharedChecks(a);else{const j={...t,lists:t.lists.map(W=>W.id===t.activeListId?{...W,checkedItems:[]}:W)};o(j)}},gi=()=>{if(Z==="shared-with-me"||Z==="own-shared"){const j=H.map(W=>W.id);l.checkAllShared(a,j)}else{if(!M)return;const j={...t,lists:t.lists.map(W=>W.id===t.activeListId?{...W,checkedItems:[...M.items]}:W)};o(j)}},an=j=>{d(W=>W.includes(j)?W.filter(q=>q!==j):[...W,j])},ds=j=>{_(W=>W.includes(j)?W.filter(q=>q!==j):[...W,j])},Ar=()=>{const j=C.trim();if(j){if(Z==="shared-with-me"){const q={id:"shared_item_"+Date.now(),name:j,category:N};l.addSharedItem(a,q)}else{if(!M)return;const W="item_"+Date.now(),q={id:W,name:j,category:N},Se={...t,itemLibrary:[...t.itemLibrary||[],q],lists:t.lists.map(ye=>ye.id!==t.activeListId?ye:{...ye,items:[...Array.isArray(ye.items)?ye.items:[],W]})};o(Se)}R(""),I(!1)}},yi=j=>{var cn;const W=V.includes(j.id),q=(cn=j.note)==null?void 0:cn.trim(),Se=q||j.photoURL,ye=h.includes(j.id),Qt=v===j.id;return c.jsxs("div",{children:[c.jsxs("div",{onClick:()=>Gn(j.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${W?"bg-slate-50 dark:bg-slate-800/50":""} ${Se&&ye?"rounded-b-none border-b-0":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${W?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}
              ${Qt&&W?"animate-check-bounce":""}`,onAnimationEnd:()=>w(null),children:W&&c.jsx(is,{size:14,className:`text-white ${Qt?"animate-check-icon-in":""}`})}),j.photoURL&&c.jsx("img",{src:j.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Et=>{Et.target.style.display="none"}}),c.jsx("div",{className:"flex-1 min-w-0",children:c.jsx("div",{className:`text-lg transition-all duration-300 ${W?"line-through text-slate-400 dark:text-slate-500 opacity-60":"text-slate-800 dark:text-slate-100"}`,children:j.name})}),Se&&c.jsx("button",{onClick:Et=>{Et.stopPropagation(),an(j.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${ye?"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400":"text-slate-400"}`,"aria-label":"展開詳情",children:c.jsx(G_,{size:18,className:`transition-transform duration-200 ${ye?"rotate-180":""}`})}),Z==="shared-with-me"&&D&&c.jsx("button",{onClick:Et=>{Et.stopPropagation(),A(j.id)},className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"移除物品",children:c.jsx(xn,{size:16})})]}),Se&&ye&&c.jsxs("div",{className:"px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl",children:[q&&c.jsxs("div",{className:"flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2",children:[c.jsx(lp,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),c.jsx("span",{children:j.note})]}),j.photoURL&&c.jsx("div",{className:q?"mt-2":"",children:c.jsx("img",{src:j.photoURL,alt:j.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Et=>{Et.target.style.display="none"}})})]})]},j.id)};return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[c.jsx("button",{onClick:()=>i("lists"),className:"p-1 -ml-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0","aria-label":"返回所有清單",children:c.jsx(Yx,{size:22,className:"text-slate-500 dark:text-slate-400"})}),c.jsx(oo,{name:ce,size:22,className:"text-indigo-600 dark:text-indigo-400 flex-shrink-0"}),c.jsx("span",{className:"text-lg font-bold truncate",children:X}),Z==="shared-with-me"&&L&&c.jsxs("span",{className:"text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0",children:["來自 ",L]}),Z==="own-shared"&&c.jsx("span",{className:"text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"flex items-center flex-shrink-0",children:[H.length>0&&c.jsxs("div",{className:"flex flex-col items-center",children:[c.jsx("button",{onClick:le,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                    ${x!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:c.jsx(Vx,{size:20})}),pe&&c.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:pe})]}),Z!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:c.jsx(Vn,{size:22,className:"text-indigo-600 dark:text-indigo-400"})})]})]}),K>0&&c.jsxs("div",{className:"mt-3",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1",children:[c.jsx("span",{children:"完成進度"}),c.jsxs("span",{children:[U,"/",K]})]}),c.jsx("div",{className:"h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300",style:{width:`${fe}%`}})})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[H.length===0?c.jsxs("div",{className:"text-center py-16 text-slate-400",children:[c.jsx(k4,{size:48,className:"mx-auto mb-4 text-slate-300 dark:text-slate-600"}),c.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),Z!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150",children:"從物品庫加入物品"})]}):c.jsx("div",{className:"space-y-4",children:x==="manual"?c.jsx(_b,{sensors:We,collisionDetection:nb,onDragEnd:Nt,children:c.jsx(bb,{items:H.map(j=>j.id),strategy:yb,children:c.jsx("div",{className:"space-y-2",children:H.map(j=>c.jsx(hP,{item:j},j.id))})})}):x==="default"?B.map(({category:j,items:W})=>{const q=k.includes(j),Se=W.filter(cn=>V.includes(cn.id)).length,ye=W.length,Qt=Se===ye;return c.jsxs("div",{children:[c.jsxs("button",{onClick:()=>ds(j),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[c.jsx(G_,{size:16,className:`text-slate-400 transition-transform duration-200 ${q?"-rotate-90":""}`}),c.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:j}),c.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${Qt?"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,children:[Se,"/",ye]})]}),!q&&c.jsx("div",{className:"space-y-2 animate-slide-down",children:W.map(cn=>yi(cn))})]},j)}):c.jsx("div",{className:"space-y-2",children:oe.map(j=>yi(j))})}),H.length>0&&c.jsx("div",{className:"pt-4 pb-16",children:c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>p("reset"),className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:[c.jsx(sR,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),c.jsxs("button",{onClick:()=>p("checkAll"),disabled:he,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${he?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400":"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600"}`,children:[c.jsx(VT,{size:16,className:"inline mr-1.5 -mt-0.5"}),he?"準備完成！":"全部確認"]})]})})]}),f==="reset"&&c.jsx(Au,{message:"確定要重設所有勾選？",onConfirm:()=>{rl(),p(null)},onCancel:()=>p(null)}),f==="checkAll"&&c.jsx(Au,{message:"確定要勾選全部項目？",onConfirm:()=>{gi(),p(null)},onCancel:()=>p(null)}),m&&c.jsx(dP,{}),T!==null&&c.jsx(Au,{message:"確定要移除此物品？",onConfirm:()=>{l.removeSharedItem(a,T),A(null)},onCancel:()=>A(null)}),D&&c.jsxs(c.Fragment,{children:[S&&c.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{I(!1),R("")}}),S&&c.jsxs("div",{className:"fixed right-4 bottom-24 z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),c.jsx("input",{type:"text",placeholder:"物品名稱",value:C,onChange:j=>R(j.target.value),onKeyDown:j=>{j.key==="Enter"&&Ar()},className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("select",{value:N,onChange:j=>E(j.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:u.map(j=>c.jsx("option",{value:j,children:j},j))}),c.jsx("button",{onClick:Ar,disabled:!C.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),c.jsx("button",{onClick:()=>{I(j=>!j),S&&R("")},className:"fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":S?"關閉新增表單":"快速新增物品",children:S?c.jsx(at,{size:24}):c.jsx(Vn,{size:24})})]})]})}function pP({sharedData:t,onAddUser:e,onRemoveUser:n,onSetPermission:r,onUnshare:s,onClose:i}){const[o,l]=g.useState(""),[a,u]=g.useState(""),h=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(Jd):[],d=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),f=()=>{const v=o.trim().toLowerCase();if(v){if(!d(v)){u("請輸入有效的 Email");return}if(h.includes(v)){u("已經分享給此帳號");return}u(""),e(v),l("")}},p=v=>{v.key==="Enter"&&f()};return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:c.jsxs("div",{className:"p-4",children:[c.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),c.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"分享清單"}),c.jsxs("div",{className:"flex gap-2 mb-2",children:[c.jsx("input",{type:"email",value:o,onChange:v=>{l(v.target.value),u("")},onKeyDown:p,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:f,className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),a&&c.jsx("div",{className:"text-sm text-rose-500 mb-3",children:a}),h.length>0&&c.jsxs("div",{className:"mt-4",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2",children:"已分享給"}),c.jsx("div",{className:"space-y-2",children:h.map(v=>{var _;const w=nr(v),k=((_=t==null?void 0:t.sharedWith)==null?void 0:_[w])||"view";return c.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600",children:[c.jsx("span",{className:"text-slate-700 dark:text-slate-200 text-sm truncate flex-1",children:v}),c.jsx("button",{onClick:()=>r(v,k==="edit"?"view":"edit"),className:`ml-2 p-2 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150
                          ${k==="edit"?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-slate-400"}`,"aria-label":k==="edit"?"切換為檢視":"切換為編輯",title:k==="edit"?"可編輯":"僅檢視",children:k==="edit"?c.jsx(q4,{size:16}):c.jsx(d4,{size:16})}),c.jsx("button",{onClick:()=>n(v),className:"ml-1 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:c.jsx(at,{size:16})})]},v)})})]}),h.length>0&&c.jsx("button",{onClick:s,className:"w-full mt-4 py-3 border border-rose-300 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),c.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})}function mP({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function _P({list:t,isActive:e}){const{attributes:n,listeners:r,setNodeRef:s,transform:i,transition:o,isDragging:l}=kb({id:t.id}),a={transform:si.Transform.toString(i),transition:o,zIndex:l?50:void 0,position:"relative"},u=(t.items||[]).length,h=(t.checkedItems||[]).length,d=!!t.sharedListId;return c.jsx("div",{ref:s,style:a,children:c.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${l?"shadow-lg opacity-90":""} ${e?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{...n,...r,className:"w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:c.jsx(Gx,{size:20})}),c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(oo,{name:t.icon,size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[c.jsx("span",{className:"truncate",children:t.name}),d&&c.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"text-sm text-slate-400",children:[h,"/",u," 已確認"]})]})]})})}function gP({data:t,user:e,onNavigate:n,onSaveData:r,shared:s}){var ce;const[i,o]=g.useState(""),[l,a]=g.useState("clipboard-list"),[u,h]=g.useState(null),[d,f]=g.useState(null),[p,v]=g.useState(null),[w,k]=g.useState(!1),[_,m]=g.useState(""),[y,x]=g.useState("default"),b=(L,U)=>{const K={...t,activeListId:L};r(K),n("checklist",{sharedListId:U||null})},S=L=>{n("checklist",{sharedListId:L})},I=()=>{if(!i.trim())return;const L={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[]},U={...t,lists:[...t.lists,L],activeListId:L.id};r(U),o(""),a("clipboard-list"),k(!1),n("checklist",{sharedListId:null})},C=async L=>{if(t.lists.length<=1)return;const U=t.lists.find(fe=>fe.id===L);if(U!=null&&U.sharedListId&&s)try{await s.unshareList(U.sharedListId)}catch(fe){console.error("清理分享資料失敗",fe)}const K=t.lists.filter(fe=>fe.id!==L),he={...t,lists:K,activeListId:t.activeListId===L?K[0].id:t.activeListId};r(he),v(null)},R=(L,U)=>{U.stopPropagation(),!(t.lists.length<=1)&&v(L)},N=(L,U)=>{U.stopPropagation(),h(L.id),f(L.sharedListId||null)},E=async L=>{const U=t.lists.find(K=>K.id===u);if(!(!U||!s))try{const K=await s.shareList(U,t.itemLibrary,[L]),he={...t,lists:t.lists.map(fe=>fe.id===u?{...fe,sharedListId:K}:fe)};r(he),f(K)}catch(K){console.error("分享失敗",K),alert("分享失敗："+K.message)}},T=async L=>{if(d)try{await s.addSharedUser(d,L)}catch(U){console.error("新增分享對象失敗",U)}else await E(L)},A=async L=>{if(!(!d||!s))try{await s.removeSharedUser(d,L)}catch(U){console.error("移除分享對象失敗",U)}},Y=async(L,U)=>{if(d&&s)try{await s.setUserPermission(d,L,U)}catch(K){console.error("設定權限失敗",K)}},te=async()=>{if(!(!d||!s))try{await s.unshareList(d);const L={...t,lists:t.lists.map(U=>U.id===u?{...U,sharedListId:void 0}:U)};r(L),h(null),f(null)}catch(L){console.error("停止分享失敗",L)}},Z=()=>{x(L=>L==="default"?"name":L==="name"?"progress":L==="progress"?"manual":"default")},Q=y==="name"?"名稱":y==="progress"?"完成度":y==="manual"?"手動":"",D=tb(Va(Rc,{activationConstraint:{distance:5}}),Va(_p,{activationConstraint:{delay:150,tolerance:5}})),z=L=>{const{active:U,over:K}=L;if(!K||U.id===K.id)return;const he=t.lists||[],fe=he.findIndex(oe=>oe.id===U.id),ee=he.findIndex(oe=>oe.id===K.id);if(fe===-1||ee===-1)return;const B=Ac(he,fe,ee);r({...t,lists:B})},M=_.toLowerCase(),H=(t.lists||[]).filter(L=>!M||L.name.toLowerCase().includes(M)),V=(()=>{if(y==="name")return[...H].sort((L,U)=>L.name.localeCompare(U.name,"zh-Hant"));if(y==="progress"){const L=U=>{const K=(U.items||[]).length;return K===0?0:(U.checkedItems||[]).length/K};return[...H].sort((U,K)=>L(U)-L(K))}return H})(),X=(s?Object.entries(s.sharedWithMe):[]).filter(([,L])=>!M||(L.name||"").toLowerCase().includes(M));return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"w-10"}),c.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"}),c.jsxs("div",{className:"flex flex-col items-center w-10",children:[c.jsx("button",{onClick:Z,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                ${y!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:c.jsx(Vx,{size:20})}),Q&&c.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:Q})]})]})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"relative",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:_,onChange:L=>m(L.target.value),placeholder:"搜尋清單...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),_&&c.jsx("button",{onClick:()=>m(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(at,{size:16})})]})}),y==="manual"?c.jsx(_b,{sensors:D,collisionDetection:nb,onDragEnd:z,children:c.jsx(bb,{items:(t.lists||[]).map(L=>L.id),strategy:yb,children:c.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(L=>c.jsx(_P,{list:L,isActive:L.id===t.activeListId},L.id))})})}):c.jsx("div",{className:"space-y-2",children:V.map(L=>{const U=(L.items||[]).length,K=(L.checkedItems||[]).length,he=L.id===t.activeListId,fe=!!L.sharedListId;return c.jsxs("div",{onClick:()=>b(L.id,L.sharedListId),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                    ${he?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(oo,{name:L.icon,size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[c.jsx("span",{className:"truncate",children:L.name}),fe&&c.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"text-sm text-slate-400",children:[K,"/",U," 已確認"]})]}),e&&c.jsx("button",{onClick:ee=>N(L,ee),className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                        ${fe?"text-emerald-500 active:bg-emerald-50 dark:active:bg-emerald-900/30":"text-slate-400 active:bg-slate-100 dark:active:bg-slate-700"}`,"aria-label":"分享清單",children:c.jsx(Ic,{size:18})}),t.lists.length>1&&c.jsx("button",{onClick:ee=>R(L.id,ee),className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"刪除清單",children:c.jsx(xn,{size:18})})]},L.id)})}),X.length>0&&c.jsxs("div",{className:"mt-6",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2 px-1",children:"與我分享的清單"}),c.jsx("div",{className:"space-y-2",children:X.map(([L,U])=>{const K=(U.items||[]).length,he=(U.checkedItems||[]).length;return c.jsxs("div",{onClick:()=>S(L),className:"flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(oo,{name:U.icon||"clipboard-list",size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-100",children:U.name}),c.jsxs("div",{className:"text-sm text-slate-400",children:[he,"/",K," 已確認",c.jsxs("span",{className:"ml-2 text-indigo-500 dark:text-indigo-400",children:["來自 ",U.ownerName||U.ownerEmail]})]})]})]},L)})})]}),c.jsx("div",{className:"mt-4",children:c.jsxs("button",{onClick:()=>k(!0),className:"w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 font-medium active:bg-slate-50 dark:active:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2",children:[c.jsx(Vn,{size:18}),"新增清單"]})})]}),w&&c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{k(!1),o(""),a("clipboard-list")}}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:c.jsxs("div",{className:"p-4",children:[c.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),c.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"新增清單"}),c.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:$x.map(L=>c.jsx("button",{onClick:()=>a(L),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                      ${l===L?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400":"text-slate-500 dark:text-slate-400"}`,"aria-label":L,children:c.jsx(oo,{name:L,size:20})},L))}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:i,onChange:L=>o(L.target.value),onKeyDown:L=>{L.key==="Enter"&&I()},placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:I,className:"px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})})]}),u!==null&&c.jsx(pP,{sharedData:d&&((ce=s==null?void 0:s.sharedByMe)==null?void 0:ce[d])||null,onAddUser:T,onRemoveUser:A,onSetPermission:Y,onUnshare:te,onClose:()=>{h(null),f(null)}}),p!==null&&c.jsx(mP,{message:"確定刪除此清單？",onConfirm:()=>C(p),onCancel:()=>v(null)})]})}function yP(t,e=800,n=.7){return new Promise((r,s)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:a}=i;(l>e||a>e)&&(l>a?(a=Math.round(a*e/l),l=e):(l=Math.round(l*e/a),a=e));const u=document.createElement("canvas");u.width=l,u.height=a,u.getContext("2d").drawImage(i,0,0,l,a),u.toBlob(d=>{if(!d){s(new Error("Canvas toBlob failed"));return}r(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),s(new Error("Failed to load image"))},i.src=o})}function vP(t){const[e,n]=g.useState(!1),[r,s]=g.useState(null);return{uploadPhoto:async(l,a)=>{if(!t)throw new Error("Not logged in");n(!0),s(null);try{const u=await yP(a),h=`users/${t.uid}/items/${l}/photo.jpg`,d=$_(W_,h);return await iT(d,u,{contentType:"image/jpeg"}),await oT(d)}catch(u){throw s(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const a=`users/${t.uid}/items/${l}/photo.jpg`,u=$_(W_,a);await lT(u)}catch(a){a.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",a)}},uploading:e,error:r}}function xP({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function bP({data:t,user:e,onNavigate:n,onSaveData:r,categories:s=[],onAddCategory:i,onUpdateCategory:o,onRemoveCategory:l}){const[a,u]=g.useState(""),[h,d]=g.useState(s[0]||""),[f,p]=g.useState(""),[v,w]=g.useState(null),[k,_]=g.useState(null),[m,y]=g.useState(null),[x,b]=g.useState(""),[S,I]=g.useState(null),[C,R]=g.useState(!1),[N,E]=g.useState(!1),[T,A]=g.useState(!1),[Y,te]=g.useState(""),[Z,Q]=g.useState(null),[D,z]=g.useState(""),M=g.useRef(null),{uploadPhoto:H,deletePhoto:V,uploading:X}=vP(e),ce={};s.forEach(B=>{ce[B]=[]}),(t.itemLibrary||[]).forEach(B=>{ce[B.category]&&ce[B.category].push(B)});const L=B=>{var le;const oe=(le=B.target.files)==null?void 0:le[0];oe&&(w(oe),_(URL.createObjectURL(oe)),B.target.value="")},U=()=>{k&&URL.revokeObjectURL(k),w(null),_(null)},K=async()=>{if(!a.trim())return;R(!0);const B=Date.now();let oe;if(v&&e)try{oe=await H(B,v)}catch{}const le={id:B,name:a.trim(),category:h,note:f.trim(),...oe&&{photoURL:oe}},pe={...t,itemLibrary:[...t.itemLibrary,le]};r(pe),u(""),p(""),U(),R(!1),E(!1)},he=async(B,oe,le,pe,We)=>{const Nt={...t,itemLibrary:t.itemLibrary.map(Gn=>Gn.id===B?{...Gn,name:oe,category:le,note:pe,...We?{photoURL:We}:{photoURL:null}}:Gn)};r(Nt),y(null)},fe=async B=>{const oe=t.itemLibrary.find(pe=>pe.id===B);oe!=null&&oe.photoURL&&V(B);const le={...t,itemLibrary:t.itemLibrary.filter(pe=>pe.id!==B),lists:t.lists.map(pe=>({...pe,items:(pe.items||[]).filter(We=>We!==B),checkedItems:(pe.checkedItems||[]).filter(We=>We!==B)}))};r(le),I(null)},ee=m?t.itemLibrary.find(B=>B.id===m):null;return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"w-10"}),c.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"}),c.jsx("button",{onClick:()=>A(!0),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 dark:text-slate-500","aria-label":"管理分類",children:c.jsx(ap,{size:20})})]})}),c.jsx("div",{className:"px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700",children:c.jsxs("div",{className:"relative",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:x,onChange:B=>b(B.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),x&&c.jsx("button",{onClick:()=>b(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(at,{size:16})})]})}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:s.map(B=>{const oe=x?ce[B].filter(le=>{var We,Nt;const pe=x.toLowerCase();return((We=le.name)==null?void 0:We.toLowerCase().includes(pe))||((Nt=le.note)==null?void 0:Nt.toLowerCase().includes(pe))}):ce[B];return oe.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:B}),c.jsx("div",{className:"space-y-2",children:oe.map(le=>c.jsxs("div",{className:"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[le.photoURL&&c.jsx("img",{src:le.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:pe=>{pe.target.style.display="none"}}),c.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:le.name})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>y(le.id),className:"text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[32px]",children:"編輯"}),c.jsx("button",{onClick:()=>I(le.id),className:"text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[32px]",children:"刪除"})]})]}),le.note&&c.jsxs("div",{className:"text-sm text-slate-400 mt-1 flex items-center gap-1",children:[c.jsx(lp,{size:12,className:"flex-shrink-0"}),le.note]})]},le.id))})]},B)})}),c.jsx("button",{onClick:()=>E(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":"新增物品",children:c.jsx(Vn,{size:24})}),N&&c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>{E(!1),u(""),p(""),U()},children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:B=>B.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"新增物品"}),c.jsx("button",{onClick:()=>{E(!1),u(""),p(""),U()},className:"p-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700",children:c.jsx(at,{size:20,className:"text-slate-400"})})]}),c.jsx("input",{type:"text",value:a,onChange:B=>u(B.target.value),placeholder:"物品名稱...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:h,onChange:B=>d(B.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:s.map(B=>c.jsx("option",{value:B,children:B},B))}),c.jsx("input",{type:"text",value:f,onChange:B=>p(B.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-2",children:[c.jsx("input",{ref:M,type:"file",accept:"image/*",capture:"environment",onChange:L,className:"hidden"}),k?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:k,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),c.jsx("button",{onClick:U,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]}):c.jsxs("button",{onClick:()=>{var B;return(B=M.current)==null?void 0:B.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[c.jsx(op,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("button",{onClick:K,disabled:C||X,className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(C||X)&&c.jsx(Xx,{size:18,className:"animate-spin"}),C||X?"新增中...":"+ 新增物品"]})]})}),ee&&c.jsx(wP,{item:ee,user:e,categories:s,onSave:he,onClose:()=>y(null),uploadPhoto:H,deletePhoto:V}),S!==null&&c.jsx(xP,{message:"確定刪除此物品？",onConfirm:()=>fe(S),onCancel:()=>I(null)}),T&&c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{A(!1),te(""),Q(null)}}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:c.jsxs("div",{className:"p-4",children:[c.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),c.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"管理分類"}),c.jsx("div",{className:"max-h-64 overflow-y-auto mb-4 space-y-1",children:s.map((B,oe)=>c.jsx("div",{className:"flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-slate-700 rounded-xl",children:Z===oe?c.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[c.jsx("input",{value:D,onChange:le=>z(le.target.value),onKeyDown:le=>{le.key==="Enter"&&(o(B,D),Q(null)),le.key==="Escape"&&Q(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("button",{onClick:()=>{o(B,D),Q(null)},className:"p-1.5 text-emerald-600 active:bg-emerald-50 dark:active:bg-emerald-900/30 rounded-lg",children:c.jsx(is,{size:16})}),c.jsx("button",{onClick:()=>Q(null),className:"p-1.5 text-slate-400 active:bg-slate-100 dark:active:bg-slate-600 rounded-lg",children:c.jsx(at,{size:16})})]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"text-sm font-medium text-slate-700 dark:text-slate-200",children:B}),c.jsxs("div",{className:"flex gap-0.5",children:[c.jsx("button",{onClick:()=>{Q(oe),z(B)},className:"p-1.5 text-slate-400 active:text-indigo-600 rounded-lg min-w-[32px] min-h-[32px] flex items-center justify-center",children:c.jsx(Mo,{size:14})}),s.length>1&&c.jsx("button",{onClick:()=>{confirm(`確定刪除分類「${B}」？`)&&l(B)},className:"p-1.5 text-slate-400 active:text-rose-500 rounded-lg min-w-[32px] min-h-[32px] flex items-center justify-center",children:c.jsx(xn,{size:14})})]})]})},B))}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:Y,onChange:B=>te(B.target.value),onKeyDown:B=>{B.key==="Enter"&&Y.trim()&&(i(Y),te(""))},placeholder:"新增分類...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:()=>{Y.trim()&&(i(Y),te(""))},disabled:!Y.trim(),className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-40",children:"新增"})]}),c.jsx("button",{onClick:()=>{A(!1),te(""),Q(null)},className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})]})}function wP({item:t,user:e,categories:n,onSave:r,onClose:s,uploadPhoto:i,deletePhoto:o}){const[l,a]=g.useState(t.name),[u,h]=g.useState(t.category),[d,f]=g.useState(t.note||""),[p,v]=g.useState(t.photoURL||""),[w,k]=g.useState(null),[_,m]=g.useState(null),[y,x]=g.useState(!1),[b,S]=g.useState(!1),I=g.useRef(null),C=T=>{var Y;const A=(Y=T.target.files)==null?void 0:Y[0];A&&(k(A),_&&URL.revokeObjectURL(_),m(URL.createObjectURL(A)),x(!1),T.target.value="")},R=()=>{_&&URL.revokeObjectURL(_),k(null),m(null),x(!0)},N=async()=>{S(!0);let T=p;if(y&&!w&&(t.photoURL&&o(t.id),T=""),w&&e)try{T=await i(t.id,w)}catch{T=y?"":p}r(t.id,l,u,d,T),S(!1)},E=_||!y&&p;return c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:s,children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:T=>T.stopPropagation(),children:[c.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900 dark:text-slate-50",children:"編輯物品"}),c.jsx("input",{type:"text",value:l,onChange:T=>a(T.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:u,onChange:T=>h(T.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:n.map(T=>c.jsx("option",{value:T,children:T},T))}),c.jsx("input",{type:"text",value:d,onChange:T=>f(T.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-4",children:[c.jsx("input",{ref:I,type:"file",accept:"image/*",capture:"environment",onChange:C,className:"hidden"}),E?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:_||p,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("button",{onClick:()=>{var T;return(T=I.current)==null?void 0:T.click()},className:"text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150",children:"更換照片"}),c.jsx("button",{onClick:R,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}):c.jsxs("button",{onClick:()=>{var T;return(T=I.current)==null?void 0:T.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[c.jsx(op,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:s,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsxs("button",{onClick:N,disabled:b,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[b&&c.jsx(Xx,{size:18,className:"animate-spin"}),b?"儲存中...":"儲存"]})]})]})})}function kP({data:t,onNavigate:e,onSaveData:n,categories:r=[]}){var m,y;const[s,i]=g.useState(!1),[o,l]=g.useState(""),[a,u]=g.useState(r[0]||""),[h,d]=g.useState(""),f=(m=t.lists)==null?void 0:m.find(x=>x.id===t.activeListId),p=f?{...f,items:Array.isArray(f.items)?f.items:[],checkedItems:Array.isArray(f.checkedItems)?f.checkedItems:[]}:null,v={};r.forEach(x=>{v[x]=[]}),(t.itemLibrary||[]).forEach(x=>{v[x.category]&&v[x.category].push(x)});const w=x=>{const b={...t,lists:t.lists.map(S=>{if(S.id!==t.activeListId)return S;const I=Array.isArray(S.items)?S.items:[],C=Array.isArray(S.checkedItems)?S.checkedItems:[],R=I.includes(x);return{...S,items:R?I.filter(N=>N!==x):[...I,x],checkedItems:R?C.filter(N=>N!==x):C}})};n(b)},k=x=>{const b=(p==null?void 0:p.items)||[],S=x.every(C=>b.includes(C.id)),I={...t,lists:t.lists.map(C=>{if(C.id!==t.activeListId)return C;const R=Array.isArray(C.items)?C.items:[],N=Array.isArray(C.checkedItems)?C.checkedItems:[];if(S){const E=new Set(x.map(T=>T.id));return{...C,items:R.filter(T=>!E.has(T)),checkedItems:N.filter(T=>!E.has(T))}}else{const E=x.filter(T=>!R.includes(T.id)).map(T=>T.id);return{...C,items:[...R,...E]}}})};n(I)},_=()=>{const x=o.trim();if(!x)return;const b="item_"+Date.now(),S={id:b,name:x,category:a},I={...t,itemLibrary:[...t.itemLibrary||[],S],lists:t.lists.map(C=>{if(C.id!==t.activeListId)return C;const R=Array.isArray(C.items)?C.items:[];return{...C,items:[...R,b]}})};n(I),l(""),i(!1)};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"返回",children:c.jsx(Yx,{size:22,className:"text-slate-600 dark:text-slate-300"})}),c.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 mt-1",children:["選擇要加入「",p==null?void 0:p.name,"」的物品"]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"relative",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:h,onChange:x=>d(x.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),h&&c.jsx("button",{onClick:()=>d(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(at,{size:16})})]})}),h&&r.every(x=>{const b=h.toLowerCase();return v[x].filter(S=>{var I,C,R;return((I=S.name)==null?void 0:I.toLowerCase().includes(b))||((C=S.category)==null?void 0:C.toLowerCase().includes(b))||((R=S.note)==null?void 0:R.toLowerCase().includes(b))}).length===0})&&c.jsxs("div",{className:"text-center py-8 text-slate-400",children:["找不到「",h,"」相關物品"]}),r.map(x=>{const b=h?v[x].filter(C=>{var N,E,T;const R=h.toLowerCase();return((N=C.name)==null?void 0:N.toLowerCase().includes(R))||((E=C.category)==null?void 0:E.toLowerCase().includes(R))||((T=C.note)==null?void 0:T.toLowerCase().includes(R))}):v[x];if(b.length===0)return null;const S=(p==null?void 0:p.items)||[],I=b.length>0&&b.every(C=>S.includes(C.id));return c.jsxs("div",{className:"mb-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("span",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold",children:x}),c.jsx("button",{onClick:()=>k(b),className:`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors duration-150 min-h-[28px]
                    ${I?"text-rose-500 bg-rose-50 dark:bg-rose-900/30 active:bg-rose-100 dark:active:bg-rose-900/50":"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 active:bg-indigo-100 dark:active:bg-indigo-900/50"}`,children:I?"全部移除":"全部加入"})]}),c.jsx("div",{className:"space-y-2",children:b.map(C=>{const R=p==null?void 0:p.items.includes(C.id);return c.jsxs("div",{onClick:()=>w(C.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${R?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${R?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}`,children:R&&c.jsx(is,{size:14,className:"text-white"})}),C.photoURL&&c.jsx("img",{src:C.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:N=>{N.target.style.display="none"}}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:R?"text-slate-800 dark:text-slate-100 font-medium":"text-slate-600 dark:text-slate-300",children:C.name}),C.note&&c.jsxs("div",{className:"text-xs text-slate-400 mt-0.5 flex items-center gap-1",children:[c.jsx(lp,{size:10,className:"flex-shrink-0"}),C.note]})]})]},C.id)})})]},x)})]}),s&&c.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{i(!1),l("")}}),s&&c.jsxs("div",{className:"fixed right-4 bottom-[168px] z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),c.jsx("input",{type:"text",placeholder:"物品名稱",value:o,onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&_()},className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("select",{value:a,onChange:x=>u(x.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:r.map(x=>c.jsx("option",{value:x,children:x},x))}),c.jsx("button",{onClick:_,disabled:!o.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),c.jsx("button",{onClick:()=>{i(x=>!x),s&&l("")},className:"fixed right-4 bottom-[112px] z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":s?"關閉新增表單":"新增物品",children:s?c.jsx(at,{size:24}):c.jsx(Vn,{size:24})}),c.jsxs("div",{className:"p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"text-center text-slate-500 dark:text-slate-400 mb-3",children:["已選擇 ",((y=p==null?void 0:p.items)==null?void 0:y.length)||0," 個物品"]}),c.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"完成"})]})]})}function CP({user:t,syncStatus:e,onLogin:n,onLogout:r,onNavigate:s,isAdmin:i,themePreference:o,onThemeChange:l,onCheckUpdate:a,checkingUpdate:u}){const h={offline:{icon:ZT,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50 dark:bg-slate-800"},syncing:{icon:j4,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50 dark:bg-amber-900/30"},synced:{icon:t4,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50 dark:bg-emerald-900/30"},error:{icon:XT,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50 dark:bg-rose-900/30"}},d=h[e]||h.offline,f=d.icon,p=[{value:"light",label:"淺色",icon:_R},{value:"system",label:"系統",icon:U4},{value:"dark",label:"深色",icon:B4}];return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center",children:"設定"})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"帳號"}),t?c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&c.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:v=>v.target.style.display="none"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-50 truncate",children:t.displayName||"使用者"}),c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 truncate",children:t.email})]})]}),c.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[c.jsx(O4,{size:18}),"登出"]})]}):c.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[c.jsx(A4,{size:18}),"使用 Google 登入"]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"同步狀態"}),c.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${d.bg}`,children:[c.jsx(f,{size:20,className:`${d.color} ${e==="syncing"?"animate-spin":""}`}),c.jsx("span",{className:`font-medium ${d.color}`,children:d.label})]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"外觀"}),c.jsx("div",{className:"flex gap-2",children:p.map(({value:v,label:w,icon:k})=>c.jsxs("button",{onClick:()=>l(v),className:`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${o===v?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500":"bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600"}`,children:[c.jsx(k,{size:20}),w]},v))})]}),t&&i&&c.jsxs("button",{onClick:()=>s("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[c.jsx(qx,{size:18}),"管理後台"]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"關於"}),c.jsxs("div",{className:"text-sm text-slate-600 dark:text-slate-300",children:[c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"應用程式"}),c.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"打包清單"})]}),c.jsx("div",{className:"border-t border-slate-100 dark:border-slate-700"}),c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"版本"}),c.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"1.0.0"})]})]}),c.jsxs("button",{onClick:a,disabled:u,className:"w-full mt-3 flex items-center justify-center gap-2 py-3 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 disabled:opacity-50",children:[c.jsx(nR,{size:16,className:u?"animate-spin":""}),u?"檢查中...":"檢查更新"]})]})]})]})}function Rl({icon:t,label:e,value:n,color:r="text-indigo-600"}){return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(t,{size:20,className:r}),c.jsx("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:e})]}),c.jsx("div",{className:`text-3xl font-bold ${r}`,children:n})]})}function SP({data:t,shared:e}){const n=t.itemLibrary.length,r=t.lists.length,s=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,f)=>f[1]-d[1]),a={};t.itemLibrary.forEach(d=>{a[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(f=>{a[f]!==void 0&&a[f]++})});const u=Object.entries(a).sort((d,f)=>f[1]-d[1]).slice(0,5).map(([d,f])=>{const p=t.itemLibrary.find(v=>v.id===Number(d));return p?{name:p.name,count:f}:null}).filter(Boolean),h=l.length>0?l[0][1]:1;return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"數據總覽"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[c.jsx(Rl,{icon:Do,label:"物品總數",value:n,color:"text-indigo-600"}),c.jsx(Rl,{icon:I4,label:"清單總數",value:r,color:"text-emerald-600"}),c.jsx(Rl,{icon:Ic,label:"已分享清單",value:s,color:"text-amber-600"}),c.jsx(Rl,{icon:Kx,label:"收到分享",value:i,color:"text-rose-600"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(WT,{size:18,className:"text-slate-500 dark:text-slate-400"}),c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"分類統計"})]}),l.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):c.jsx("div",{className:"space-y-3",children:l.map(([d,f])=>c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[c.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:d}),c.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:f})]}),c.jsx("div",{className:"h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${f/h*100}%`}})})]},d))})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(Do,{size:18,className:"text-slate-500 dark:text-slate-400"}),c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"最常使用物品 Top 5"})]}),u.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):c.jsx("div",{className:"space-y-2",children:u.map((d,f)=>c.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:f+1}),c.jsx("span",{className:"text-slate-800 dark:text-slate-100",children:d.name})]}),c.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:["出現在 ",d.count," 個清單"]})]},f))})]})]})]})}function NP({data:t,onSaveData:e,categories:n=[]}){const[r,s]=g.useState(""),[i,o]=g.useState(""),[l,a]=g.useState(new Set),[u,h]=g.useState(null),[d,f]=g.useState({name:"",category:"",note:""}),[p,v]=g.useState(""),[w,k]=g.useState(!1),_=g.useRef(null),m=t.itemLibrary.filter(E=>{const T=!r||E.name.toLowerCase().includes(r.toLowerCase())||(E.note||"").toLowerCase().includes(r.toLowerCase()),A=!i||E.category===i;return T&&A}),y=E=>{a(T=>{const A=new Set(T);return A.has(E)?A.delete(E):A.add(E),A})},x=()=>{l.size===m.length?a(new Set):a(new Set(m.map(E=>E.id)))},b=E=>{h(E.id),f({name:E.name,category:E.category,note:E.note||""})},S=()=>{const E=t.itemLibrary.map(T=>T.id===u?{...T,...d}:T);e({...t,itemLibrary:E}),h(null)},I=E=>{const T=new Set(E),A=t.itemLibrary.filter(te=>!T.has(te.id)),Y=t.lists.map(te=>({...te,items:(te.items||[]).filter(Z=>!T.has(Z)),checkedItems:(te.checkedItems||[]).filter(Z=>!T.has(Z))}));e({...t,itemLibrary:A,lists:Y}),a(new Set)},C=()=>{if(!p)return;const E=t.itemLibrary.map(T=>l.has(T.id)?{...T,category:p}:T);e({...t,itemLibrary:E}),a(new Set),k(!1),v("")},R=()=>{const E=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),T=URL.createObjectURL(E),A=document.createElement("a");A.href=T,A.download="item-library.json",A.click(),URL.revokeObjectURL(T)},N=E=>{var Y;const T=(Y=E.target.files)==null?void 0:Y[0];if(!T)return;const A=new FileReader;A.onload=te=>{try{const Z=JSON.parse(te.target.result);if(!Array.isArray(Z)){alert("格式錯誤：需要 JSON 陣列");return}if(!Z.every(X=>X.name&&X.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const D=Math.max(0,...t.itemLibrary.map(X=>X.id)),z=new Set(t.itemLibrary.map(X=>X.name)),M=Z.filter(X=>!z.has(X.name)).map((X,ce)=>({id:X.id||D+ce+1,name:X.name,category:X.category,note:X.note||"",...X.photoURL?{photoURL:X.photoURL}:{}}));if(M.length===0){alert("沒有新物品可匯入（全部重複）");return}const H=new Set(t.itemLibrary.map(X=>X.id));let V=D+1;M.forEach(X=>{for(;H.has(V);)V++;X.id=V,H.add(V),V++}),e({...t,itemLibrary:[...t.itemLibrary,...M]}),alert(`已匯入 ${M.length} 個物品`)}catch{alert("JSON 解析失敗")}},A.readAsText(T),E.target.value=""};return c.jsxs("div",{children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"物品管理"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:R,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[c.jsx(l4,{size:16})," 匯出"]}),c.jsxs("button",{onClick:()=>{var E;return(E=_.current)==null?void 0:E.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[c.jsx(NR,{size:16})," 匯入"]}),c.jsx("input",{ref:_,type:"file",accept:".json",onChange:N,className:"hidden"})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",placeholder:"搜尋物品...",value:r,onChange:E=>s(E.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),c.jsxs("div",{className:"relative",children:[c.jsx(_4,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsxs("select",{value:i,onChange:E=>o(E.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[c.jsx("option",{value:"",children:"所有分類"}),n.map(E=>c.jsx("option",{value:E,children:E},E))]})]})]}),l.size>0&&c.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg",children:[c.jsxs("span",{className:"text-sm font-medium text-indigo-700 dark:text-indigo-400",children:["已選 ",l.size," 項"]}),c.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${l.size} 個物品？`)&&I([...l])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[c.jsx(xn,{size:14})," 批量刪除"]}),w?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("select",{value:p,onChange:E=>v(E.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇分類"}),n.map(E=>c.jsx("option",{value:E,children:E},E))]}),c.jsx("button",{onClick:C,disabled:!p,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(is,{size:14})}),c.jsx("button",{onClick:()=>{k(!1),v("")},className:"px-2 py-1.5 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:c.jsx(at,{size:14})})]}):c.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[c.jsx(ap,{size:14})," 批量改分類"]})]}),c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700",children:c.jsxs("tr",{children:[c.jsx("th",{className:"w-10 px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:m.length>0&&l.size===m.length,onChange:x,className:"rounded"})}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分類"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"備註"}),c.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),c.jsxs("tbody",{children:[m.map(E=>c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700",children:[c.jsx("td",{className:"px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:l.has(E.id),onChange:()=>y(E.id),className:"rounded"})}),u===E.id?c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:d.name,onChange:T=>f(A=>({...A,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("select",{value:d.category,onChange:T=>f(A=>({...A,category:T.target.value})),className:"px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(T=>c.jsx("option",{value:T,children:T},T))})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:d.note,onChange:T=>f(A=>({...A,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:S,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:c.jsx(is,{size:16})}),c.jsx("button",{onClick:()=>h(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:c.jsx(at,{size:16})})]})})]}):c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-3 text-sm text-slate-800 dark:text-slate-100",children:E.name}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:E.category})}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:E.note||"-"}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>b(E),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:c.jsx(Mo,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${E.name}」？`)&&I([E.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:c.jsx(xn,{size:16})})]})})]})]},E.id)),m.length===0&&c.jsx("tr",{children:c.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),c.jsxs("div",{className:"lg:hidden space-y-2",children:[m.length===0&&c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),m.map(E=>c.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("input",{type:"checkbox",checked:l.has(E.id),onChange:()=>y(E.id),className:"mt-1 rounded"}),u===E.id?c.jsxs("div",{className:"flex-1 space-y-2",children:[c.jsx("input",{value:d.name,onChange:T=>f(A=>({...A,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),c.jsx("select",{value:d.category,onChange:T=>f(A=>({...A,category:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(T=>c.jsx("option",{value:T,children:T},T))}),c.jsx("input",{value:d.note,onChange:T=>f(A=>({...A,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"備註"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:S,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),c.jsx("button",{onClick:()=>h(null),className:"px-3 py-1 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg",children:"取消"})]})]}):c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:E.name}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>b(E),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:c.jsx(Mo,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${E.name}」？`)&&I([E.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(xn,{size:16})})]})]}),c.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:E.category}),E.note&&c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1",children:E.note})]})]})},E.id))]})]})}function EP({data:t,onSaveData:e}){const n=t.templates||[],[r,s]=g.useState(!1),[i,o]=g.useState("list"),[l,a]=g.useState(""),[u,h]=g.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,f]=g.useState(null),[p,v]=g.useState(null),[w,k]=g.useState(""),_=()=>{h({name:"",icon:"clipboard-list",description:"",itemIds:[]}),a(""),o("list"),s(!1)},m=()=>{const N=t.lists.find(E=>E.id===Number(l));N&&(h({name:N.name+" 範本",icon:N.icon||"clipboard-list",description:"",itemIds:[...N.items||[]]}),o("manual"))},y=N=>{h(E=>({...E,itemIds:E.itemIds.includes(N)?E.itemIds.filter(T=>T!==N):[...E.itemIds,N]}))},x=()=>{if(!u.name.trim())return;const E={id:Math.max(0,...n.map(T=>T.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,E]}),_()},b=()=>{if(!u.name.trim())return;const N=n.map(E=>E.id===d?{...E,...u,name:u.name.trim()}:E);e({...t,templates:N}),f(null),_()},S=N=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(E=>E.id!==N)})},I=N=>{f(N.id),h({name:N.name,icon:N.icon,description:N.description||"",itemIds:[...N.itemIds]}),s(!0)},C=()=>{const N=n.find(A=>A.id===p),E=t.lists.find(A=>A.id===Number(w));if(!N||!E)return;const T=t.lists.map(A=>A.id===E.id?{...A,items:[...new Set([...A.items||[],...N.itemIds])]}:A);e({...t,lists:T}),v(null),k(""),alert(`已將範本「${N.name}」套用到「${E.name}」`)},R=N=>N.map(E=>t.itemLibrary.find(T=>T.id===E)).filter(Boolean).map(E=>E.name);return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"清單範本"}),!r&&c.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[c.jsx(Vn,{size:16})," 建立範本"]})]}),r&&c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"從現有清單建立"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:l,onChange:N=>a(N.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(N=>c.jsx("option",{value:N.id,children:N.name},N.id))]}),c.jsx("button",{onClick:m,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(i4,{size:16})})]}),c.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"範本名稱"}),c.jsx("input",{value:u.name,onChange:N=>h(E=>({...E,name:N.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"例：出國旅行"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"圖示"}),c.jsx("select",{value:u.icon,onChange:N=>h(E=>({...E,icon:N.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:$x.map(N=>c.jsx("option",{value:N,children:N},N))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"說明"}),c.jsx("input",{value:u.description,onChange:N=>h(E=>({...E,description:N.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"選填"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),c.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg",children:t.itemLibrary.map(N=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("input",{type:"checkbox",checked:u.itemIds.includes(N.id),onChange:()=>y(N.id),className:"rounded"}),c.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100",children:N.name}),c.jsx("span",{className:"text-xs text-slate-400",children:N.category})]},N.id))})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:d?b:x,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),c.jsx("button",{onClick:()=>{f(null),_()},className:"px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:"取消"})]})]})]}),p&&c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-2",children:"套用範本"}),c.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mb-3",children:"選擇要套用的目標清單："}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:w,onChange:N=>k(N.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(N=>c.jsx("option",{value:N.id,children:N.name},N.id))]}),c.jsxs("button",{onClick:C,disabled:!w,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[c.jsx(is,{size:16})," 套用"]}),c.jsx("button",{onClick:()=>{v(null),k("")},className:"px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:c.jsx(at,{size:16})})]})]}),n.length===0&&!r&&c.jsxs("div",{className:"text-center py-12 text-slate-400",children:[c.jsx(Qx,{size:48,className:"mx-auto mb-3 opacity-50"}),c.jsx("p",{children:"尚未建立任何範本"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(N=>c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-2",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:N.name}),N.description&&c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:N.description})]}),c.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:N.icon})]}),c.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[R(N.itemIds).slice(0,5).map((E,T)=>c.jsx("span",{className:"text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full",children:E},T)),N.itemIds.length>5&&c.jsxs("span",{className:"text-xs text-slate-400",children:["+",N.itemIds.length-5," 更多"]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:[c.jsx(Do,{size:14,className:"inline mr-1"}),N.itemIds.length," 個物品"]}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>v(N.id),className:"px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50",children:"套用"}),c.jsx("button",{onClick:()=>I(N),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:c.jsx(Mo,{size:14})}),c.jsx("button",{onClick:()=>S(N.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(xn,{size:14})})]})]})]},N.id))})]})}function IP({data:t,shared:e}){const[n,r]=g.useState("byMe"),[s,i]=g.useState({}),[o,l]=g.useState(""),a=e.sharedByMe||{},u=e.sharedWithMe||{},h=k=>{var m;const _=t.lists.find(y=>y.sharedListId===k);return(_==null?void 0:_.name)||((m=a[k])==null?void 0:m.name)||"未知清單"},d=async k=>{const _=o.trim();if(_)try{await e.addSharedUser(k,_),i({}),l("")}catch(m){alert("新增失敗："+m.message)}},f=async(k,_)=>{if(confirm(`移除 ${_} 的存取權限？`))try{await e.removeSharedUser(k,_)}catch(m){alert("移除失敗："+m.message)}},p=async k=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(k)}catch(_){alert("取消分享失敗："+_.message)}},v=Object.entries(a),w=Object.entries(u);return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分享管理"}),c.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-700 mb-4",children:[c.jsxs("button",{onClick:()=>r("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[c.jsx(Ic,{size:16})," 我分享的 (",v.length,")"]}),c.jsxs("button",{onClick:()=>r("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[c.jsx(Kx,{size:16})," 分享給我的 (",w.length,")"]})]}),n==="byMe"&&c.jsx("div",{children:v.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分享對象"}),c.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),c.jsx("tbody",{children:v.map(([k,_])=>{const m=Object.keys(_.sharedWith||{}).map(Jd);return c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:h(k)}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[m.map(y=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,c.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:c.jsx(at,{size:12})})]},y)),s[k]?c.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"inline-flex gap-1",children:[c.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 dark:border-slate-600 rounded w-40 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),c.jsx("button",{type:"submit",className:"text-emerald-600 dark:text-emerald-400",children:c.jsx(Vn,{size:14})}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:c.jsx(at,{size:14})})]}):c.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-xs text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增"})]})}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("button",{onClick:()=>p(k),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg",children:[c.jsx(xn,{size:14})," 取消分享"]})})]},k)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([k,_])=>{const m=Object.keys(_.sharedWith||{}).map(Jd);return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:h(k)}),c.jsx("button",{onClick:()=>p(k),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),c.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:m.map(y=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,c.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:c.jsx(at,{size:12})})]},y))}),s[k]?c.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"flex gap-2",children:[c.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),c.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 dark:bg-slate-600 dark:text-slate-200 rounded-lg",children:"取消"})]}):c.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增分享對象"})]},k)})})]})}),n==="withMe"&&c.jsx("div",{children:w.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"來源"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"勾選進度"})]})}),c.jsx("tbody",{children:w.map(([k,_])=>{const m=(_.items||[]).length,y=(_.checkedItems||[]).length;return c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:_.name}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:_.ownerName||_.ownerEmail}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:m>0?`${y/m*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",m]})]})})]},k)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:w.map(([k,_])=>{const m=(_.items||[]).length,y=(_.checkedItems||[]).length;return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:_.name}),c.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:["來自 ",_.ownerName||_.ownerEmail]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[c.jsx("div",{className:"flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:m>0?`${y/m*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",m]})]})]},k)})})]})})]})}function TP({user:t,admin:e}){const{adminEmails:n,addAdmin:r,removeAdmin:s}=e,[i,o]=g.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await r(i),o(""))},a=async u=>{var h;if(u===((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await s(u)};return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"帳號管理"}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:"新增管理員"}),c.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[c.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[c.jsx(Vn,{size:16})," 新增"]})]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:[c.jsx("div",{className:"px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700",children:c.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?c.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[c.jsx(eh,{size:32,className:"mx-auto mb-2 opacity-50"}),c.jsx("p",{children:"尚未設定管理員"}),c.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):c.jsx("ul",{children:n.map(u=>{var d;const h=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return c.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[c.jsx(eh,{size:16,className:"text-indigo-500 dark:text-indigo-400 shrink-0"}),c.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100 truncate",children:u}),h&&c.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),c.jsx("button",{onClick:()=>a(u),disabled:h,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:h?"無法移除自己":"移除管理員",children:c.jsx(xn,{size:16})})]},u)})})]})]})}function RP({categories:t,addCategory:e,updateCategory:n,removeCategory:r}){const[s,i]=g.useState(""),[o,l]=g.useState(null),[a,u]=g.useState(""),h=async()=>{const v=s.trim();v&&(await e(v),i(""))},d=v=>{l(v),u(t[v])},f=async()=>{o!==null&&(await n(t[o],a),l(null),u(""))},p=async v=>{t.length<=1||confirm(`確定刪除分類「${v}」？已使用此分類的物品不會被刪除。`)&&await r(v)};return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分類管理"}),c.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-4",children:t.map((v,w)=>c.jsx("div",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:o===w?c.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[c.jsx("input",{value:a,onChange:k=>u(k.target.value),onKeyDown:k=>{k.key==="Enter"&&f(),k.key==="Escape"&&l(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("button",{onClick:f,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:c.jsx(is,{size:16})}),c.jsx("button",{onClick:()=>l(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:c.jsx(at,{size:16})})]}):c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-100",children:v}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>d(w),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:c.jsx(Mo,{size:16})}),t.length>1&&c.jsx("button",{onClick:()=>p(v),className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:c.jsx(xn,{size:16})})]})]})},v))}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:s,onChange:v=>i(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},placeholder:"新增分類名稱...",className:"flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsxs("button",{onClick:h,disabled:!s.trim(),className:"flex items-center gap-1.5 px-4 py-2.5 text-sm bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition-colors",children:[c.jsx(Vn,{size:16})," 新增"]})]})]})}const Lu=[{key:"dashboard",label:"總覽",icon:qx},{key:"items",label:"物品管理",icon:Do},{key:"categories",label:"分類管理",icon:ap},{key:"templates",label:"清單範本",icon:Qx},{key:"sharing",label:"分享管理",icon:Ic},{key:"accounts",label:"帳號管理",icon:eh}];function jP({data:t,user:e,shared:n,onNavigate:r,onSaveData:s,admin:i,categories:o,categoryActions:l}){var w;const[a,u]=g.useState("dashboard"),[h,d]=g.useState(!1),f=k=>{u(k),d(!1)},p=c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-700",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),c.jsx("nav",{className:"flex-1 p-2",children:Lu.map(({key:k,label:_,icon:m})=>c.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${a===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"}`,children:[c.jsx(m,{size:18}),_]},k))}),c.jsx("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700",children:c.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",children:[c.jsx(Iu,{size:18}),"返回應用"]})})]}),v=()=>{switch(a){case"dashboard":return c.jsx(SP,{data:t,shared:n});case"items":return c.jsx(NP,{data:t,onSaveData:s,categories:o});case"categories":return c.jsx(RP,{categories:o,...l});case"templates":return c.jsx(EP,{data:t,onSaveData:s});case"sharing":return c.jsx(IP,{data:t,shared:n});case"accounts":return c.jsx(TP,{user:e,admin:i});default:return null}};return c.jsxs("div",{className:"h-screen bg-slate-50 dark:bg-slate-900",children:[c.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[c.jsx("aside",{className:"bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto",children:p}),c.jsx("main",{className:"overflow-y-auto p-6",children:c.jsx("div",{className:"max-w-6xl mx-auto",children:v()})})]}),c.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[c.jsxs("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top",children:[c.jsx("button",{onClick:()=>d(!0),className:"p-1 -ml-1 text-slate-600 dark:text-slate-300",children:c.jsx(M4,{size:24})}),c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:((w=Lu.find(k=>k.key===a))==null?void 0:w.label)||"管理後台"}),c.jsx("button",{onClick:()=>r("profile"),className:"p-1 -mr-1 text-slate-600 dark:text-slate-300",children:c.jsx(Iu,{size:24})})]}),h&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>d(!1)}),c.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),c.jsx("button",{onClick:()=>d(!1),className:"p-1 text-slate-400",children:c.jsx(at,{size:20})})]}),c.jsx("nav",{className:"p-2",children:Lu.map(({key:k,label:_,icon:m})=>c.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${a===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,children:[c.jsx(m,{size:18}),_]},k))}),c.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom",children:c.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[c.jsx(Iu,{size:18}),"返回應用"]})})]})]}),c.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:v()})]})]})}const PP=[{id:"lists",label:"所有清單",icon:N4},{id:"library",label:"物品庫",icon:Do},{id:"profile",label:"設定",icon:IR}];function AP({currentView:t,onNavigate:e}){return c.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 z-40",children:c.jsx("div",{className:"flex",children:PP.map(n=>{const r=t===n.id,s=n.icon;return c.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600 dark:text-indigo-400":"text-slate-400 active:text-slate-600 dark:active:text-slate-300"}`,"aria-label":n.label,children:[c.jsx(s,{size:22,strokeWidth:r?2.5:2}),c.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function LP({onRefresh:t,onDismiss:e}){return c.jsx("div",{className:"fixed bottom-20 left-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl border border-indigo-500 dark:border-indigo-400 p-4 z-50 animate-slide-up",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(fR,{size:24}),c.jsxs("div",{children:[c.jsx("div",{className:"font-medium",children:"有新版本可用"}),c.jsx("div",{className:"text-sm text-indigo-200 dark:text-indigo-100",children:"點擊更新以取得最新功能"})]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:e,className:"px-3 py-2 text-indigo-200 dark:text-indigo-100 active:text-white text-sm transition-colors duration-150 min-h-[44px]",children:"稍後"}),c.jsx("button",{onClick:t,className:"px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm active:bg-indigo-50 transition-colors duration-150 min-h-[44px]",children:"更新"})]})]})})}function OP(){const[t,e]=g.useState("lists"),[n,r]=g.useState(null),s=pT(),{user:i,data:o,syncStatus:l,saveData:a,handleLogin:u,handleLogout:h}=mT(s),d=_T(i,o),f=gT(i),{categories:p,addCategory:v,updateCategory:w,removeCategory:k}=yT(),{needRefresh:_,refresh:m,dismiss:y,checkForUpdate:x,checking:b}=kT(),{preference:S,changeTheme:I}=ST(),C=(N,E)=>{(E==null?void 0:E.sharedListId)!==void 0&&r(E.sharedListId),e(N)},R=t!=="addItems"&&t!=="admin";return c.jsxs(c.Fragment,{children:[t==="checklist"&&c.jsx(fP,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:C,onSaveData:a,shared:d,activeSharedListId:n,categories:p}),t==="lists"&&c.jsx(gP,{data:o,user:i,onNavigate:C,onSaveData:a,shared:d}),t==="library"&&c.jsx(bP,{data:o,user:i,onNavigate:C,onSaveData:a,categories:p,onAddCategory:v,onUpdateCategory:w,onRemoveCategory:k}),t==="addItems"&&c.jsx(kP,{data:o,onNavigate:C,onSaveData:a,categories:p}),t==="profile"&&c.jsx(CP,{user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:C,isAdmin:f.isAdmin,themePreference:S,onThemeChange:I,onCheckUpdate:x,checkingUpdate:b}),t==="admin"&&f.isAdmin&&c.jsx(jP,{data:o,user:i,shared:d,onNavigate:C,onSaveData:a,admin:f,categories:p,categoryActions:{addCategory:v,updateCategory:w,removeCategory:k}}),t==="admin"&&!f.isAdmin&&!f.loading&&c.jsxs("div",{className:"flex flex-col items-center justify-center h-screen p-4",children:[c.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-4",children:"你沒有管理後台的存取權限"}),c.jsx("button",{onClick:()=>C("profile"),className:"px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg",children:"返回設定"})]}),R&&c.jsx(AP,{currentView:t==="checklist"?"lists":t,onNavigate:N=>C(N,{sharedListId:null})}),_&&c.jsx(LP,{onRefresh:m,onDismiss:y}),!1]})}Ou.createRoot(document.getElementById("root")).render(c.jsx(ht.StrictMode,{children:c.jsx(OP,{})}));export{bT as _};
