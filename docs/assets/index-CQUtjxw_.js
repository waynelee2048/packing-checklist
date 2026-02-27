(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Pb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h0={exports:{}},Za={},f0={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bo=Symbol.for("react.element"),Ab=Symbol.for("react.portal"),Lb=Symbol.for("react.fragment"),Ob=Symbol.for("react.strict_mode"),Db=Symbol.for("react.profiler"),Mb=Symbol.for("react.provider"),Ub=Symbol.for("react.context"),zb=Symbol.for("react.forward_ref"),Fb=Symbol.for("react.suspense"),Bb=Symbol.for("react.memo"),$b=Symbol.for("react.lazy"),Cp=Symbol.iterator;function Wb(t){return t===null||typeof t!="object"?null:(t=Cp&&t[Cp]||t["@@iterator"],typeof t=="function"?t:null)}var p0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m0=Object.assign,_0={};function oi(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||p0}oi.prototype.isReactComponent={};oi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function g0(){}g0.prototype=oi.prototype;function _h(t,e,n){this.props=t,this.context=e,this.refs=_0,this.updater=n||p0}var gh=_h.prototype=new g0;gh.constructor=_h;m0(gh,oi.prototype);gh.isPureReactComponent=!0;var Np=Array.isArray,y0=Object.prototype.hasOwnProperty,yh={current:null},v0={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)y0.call(e,r)&&!v0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Bo,type:t,key:i,ref:o,props:s,_owner:yh.current}}function Hb(t,e){return{$$typeof:Bo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Bo}function Vb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sp=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vb(""+t.key):e.toString(36)}function Ml(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Bo:case Ab:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Qc(o,0):r,Np(s)?(n="",t!=null&&(n=t.replace(Sp,"$&/")+"/"),Ml(s,e,n,"",function(u){return u})):s!=null&&(vh(s)&&(s=Hb(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Sp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Qc(i,l);o+=Ml(i,e,n,c,s)}else if(c=Wb(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Qc(i,l++),o+=Ml(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function dl(t,e,n){if(t==null)return t;var r=[],s=0;return Ml(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Yb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Ul={transition:null},Qb={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:yh};function b0(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=oi;ae.Fragment=Lb;ae.Profiler=Db;ae.PureComponent=_h;ae.StrictMode=Ob;ae.Suspense=Fb;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;ae.act=b0;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=m0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=yh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)y0.call(e,c)&&!v0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Bo,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Ub,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mb,_context:t},t.Consumer=t};ae.createElement=x0;ae.createFactory=function(t){var e=x0.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:zb,render:t}};ae.isValidElement=vh;ae.lazy=function(t){return{$$typeof:$b,_payload:{_status:-1,_result:t},_init:Yb}};ae.memo=function(t,e){return{$$typeof:Bb,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Ul.transition;Ul.transition={};try{t()}finally{Ul.transition=e}};ae.unstable_act=b0;ae.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ae.useContext=function(t){return Nt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ae.useId=function(){return Nt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ae.useRef=function(t){return Nt.current.useRef(t)};ae.useState=function(t){return Nt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Nt.current.useTransition()};ae.version="18.3.1";f0.exports=ae;var g=f0.exports;const vt=Pb(g);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gb=g,Xb=Symbol.for("react.element"),Kb=Symbol.for("react.fragment"),qb=Object.prototype.hasOwnProperty,Jb=Gb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zb={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qb.call(e,r)&&!Zb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Xb,type:t,key:i,ref:o,props:s,_owner:Jb.current}}Za.Fragment=Kb;Za.jsx=w0;Za.jsxs=w0;h0.exports=Za;var a=h0.exports,Yu={},k0={exports:{}},Bt={},C0={exports:{}},N0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var B=D.length;D.push(U);e:for(;0<B;){var Y=B-1>>>1,J=D[Y];if(0<s(J,U))D[Y]=U,D[B]=J,B=Y;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],B=D.pop();if(B!==U){D[0]=B;e:for(var Y=0,J=D.length,ee=J>>>1;Y<ee;){var me=2*(Y+1)-1,He=D[me],fe=me+1,qe=D[fe];if(0>s(He,B))fe<J&&0>s(qe,He)?(D[Y]=qe,D[fe]=B,Y=fe):(D[Y]=He,D[me]=B,Y=me);else if(fe<J&&0>s(qe,B))D[Y]=qe,D[fe]=B,Y=fe;else break e}}return U}function s(D,U){var B=D.sortIndex-U.sortIndex;return B!==0?B:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,d=null,f=3,m=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,e(c,U);else break;U=n(u)}}function b(D){if(w=!1,y(D),!v)if(n(c)!==null)v=!0,te(x);else{var U=n(u);U!==null&&se(b,U.startTime-D)}}function x(D,U){v=!1,w&&(w=!1,_(I),I=-1),m=!0;var B=f;try{for(y(U),d=n(c);d!==null&&(!(d.expirationTime>U)||D&&!E());){var Y=d.callback;if(typeof Y=="function"){d.callback=null,f=d.priorityLevel;var J=Y(d.expirationTime<=U);U=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(c)&&r(c),y(U)}else r(c);d=n(c)}if(d!==null)var ee=!0;else{var me=n(u);me!==null&&se(b,me.startTime-U),ee=!1}return ee}finally{d=null,f=B,m=!1}}var C=!1,N=null,I=-1,P=5,S=-1;function E(){return!(t.unstable_now()-S<P)}function R(){if(N!==null){var D=t.unstable_now();S=D;var U=!0;try{U=N(!0,D)}finally{U?M():(C=!1,N=null)}}else C=!1}var M;if(typeof p=="function")M=function(){p(R)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,K=H.port2;H.port1.onmessage=R,M=function(){K.postMessage(null)}}else M=function(){k(R,0)};function te(D){N=D,C||(C=!0,M())}function se(D,U){I=k(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,te(x))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var B=f;f=U;try{return D()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=f;f=D;try{return U()}finally{f=B}},t.unstable_scheduleCallback=function(D,U,B){var Y=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Y+B:Y):B=Y,D){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=B+J,D={id:h++,callback:U,priorityLevel:D,startTime:B,expirationTime:J,sortIndex:-1},B>Y?(D.sortIndex=B,e(u,D),n(c)===null&&D===n(u)&&(w?(_(I),I=-1):w=!0,se(b,B-Y))):(D.sortIndex=J,e(c,D),v||m||(v=!0,te(x))),D},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(D){var U=f;return function(){var B=f;f=U;try{return D.apply(this,arguments)}finally{f=B}}}})(N0);C0.exports=N0;var e1=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=g,Ft=e1;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var S0=new Set,oo={};function as(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(oo[t]=e,t=0;t<e.length;t++)S0.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},Ip={};function r1(t){return Qu.call(Ip,t)?!0:Qu.call(Ep,t)?!1:n1.test(t)?Ip[t]=!0:(Ep[t]=!0,!1)}function s1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i1(t,e,n,r){if(e===null||typeof e>"u"||s1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,bh);lt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,bh);lt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,bh);lt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function wh(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i1(e,n,s,r)&&(n=null),r||s===null?r1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qn=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),ys=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),I0=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),T0=Symbol.for("react.offscreen"),Tp=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=Tp&&t[Tp]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Gc;function Oi(t){if(Gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||""}return`
`+Gc+t}var Xc=!1;function Kc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function o1(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=Kc(t.type,!1),t;case 11:return t=Kc(t.type.render,!1),t;case 1:return t=Kc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case ys:return"Portal";case Gu:return"Profiler";case kh:return"StrictMode";case Xu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I0:return(t.displayName||"Context")+".Consumer";case E0:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function l1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a1(t){var e=R0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fl(t){t._valueTracker||(t._valueTracker=a1(t))}function j0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=R0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ta(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function P0(t,e){e=e.checked,e!=null&&wh(t,"checked",e,!1)}function Zu(t,e){P0(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&ed(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ed(t,e,n){(e!=="number"||ta(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Ps(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Di(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function A0(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ap(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pl,O0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(pl=pl||document.createElement("div"),pl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=pl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){c1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function D0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function M0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=D0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var u1=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(t,e){if(e){if(u1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function Sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var od=null,As=null,Ls=null;function Lp(t){if(t=Ho(t)){if(typeof od!="function")throw Error(O(280));var e=t.stateNode;e&&(e=sc(e),od(t.stateNode,t.type,e))}}function U0(t){As?Ls?Ls.push(t):Ls=[t]:As=t}function z0(){if(As){var t=As,e=Ls;if(Ls=As=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function F0(t,e){return t(e)}function B0(){}var qc=!1;function $0(t,e,n){if(qc)return t(e,n);qc=!0;try{return F0(t,e,n)}finally{qc=!1,(As!==null||Ls!==null)&&(B0(),z0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=sc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var ld=!1;if(zn)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){ld=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{ld=!1}function d1(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Bi=!1,na=null,ra=!1,ad=null,h1={onError:function(t){Bi=!0,na=t}};function f1(t,e,n,r,s,i,o,l,c){Bi=!1,na=null,d1.apply(h1,arguments)}function p1(t,e,n,r,s,i,o,l,c){if(f1.apply(this,arguments),Bi){if(Bi){var u=na;Bi=!1,na=null}else throw Error(O(198));ra||(ra=!0,ad=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Op(t){if(cs(t)!==t)throw Error(O(188))}function m1(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Op(s),t;if(i===r)return Op(s),e;i=i.sibling}throw Error(O(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function H0(t){return t=m1(t),t!==null?V0(t):null}function V0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=Ft.unstable_scheduleCallback,Dp=Ft.unstable_cancelCallback,_1=Ft.unstable_shouldYield,g1=Ft.unstable_requestPaint,Fe=Ft.unstable_now,y1=Ft.unstable_getCurrentPriorityLevel,Eh=Ft.unstable_ImmediatePriority,Q0=Ft.unstable_UserBlockingPriority,sa=Ft.unstable_NormalPriority,v1=Ft.unstable_LowPriority,G0=Ft.unstable_IdlePriority,ec=null,vn=null;function x1(t){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:k1,b1=Math.log,w1=Math.LN2;function k1(t){return t>>>=0,t===0?32:31-(b1(t)/w1|0)|0}var ml=64,_l=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Mi(l):(i&=o,i!==0&&(r=Mi(i)))}else o=n&~s,o!==0?r=Mi(o):i!==0&&(r=Mi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ln(e),s=1<<n,r|=t[n],e&=~s;return r}function C1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-ln(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=C1(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X0(){var t=ml;return ml<<=1,!(ml&4194240)&&(ml=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ln(e),t[e]=n}function S1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-ln(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Ih(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ln(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var pe=0;function K0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q0,Th,J0,Z0,eg,ud=!1,gl=[],_r=null,gr=null,yr=null,co=new Map,uo=new Map,lr=[],E1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mp(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Ci(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ho(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function I1(t,e,n,r,s){switch(e){case"focusin":return _r=Ci(_r,t,e,n,r,s),!0;case"dragenter":return gr=Ci(gr,t,e,n,r,s),!0;case"mouseover":return yr=Ci(yr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return co.set(i,Ci(co.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,uo.set(i,Ci(uo.get(i)||null,t,e,n,r,s)),!0}return!1}function tg(t){var e=$r(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,eg(t.priority,function(){J0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);id=r,n.target.dispatchEvent(r),id=null}else return e=Ho(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function Up(t,e,n){zl(t)&&n.delete(e)}function T1(){ud=!1,_r!==null&&zl(_r)&&(_r=null),gr!==null&&zl(gr)&&(gr=null),yr!==null&&zl(yr)&&(yr=null),co.forEach(Up),uo.forEach(Up)}function Ni(t,e){t.blockedOn===e&&(t.blockedOn=null,ud||(ud=!0,Ft.unstable_scheduleCallback(Ft.unstable_NormalPriority,T1)))}function ho(t){function e(s){return Ni(s,t)}if(0<gl.length){Ni(gl[0],t);for(var n=1;n<gl.length;n++){var r=gl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(_r!==null&&Ni(_r,t),gr!==null&&Ni(gr,t),yr!==null&&Ni(yr,t),co.forEach(e),uo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&lr.shift()}var Os=Qn.ReactCurrentBatchConfig,oa=!0;function R1(t,e,n,r){var s=pe,i=Os.transition;Os.transition=null;try{pe=1,Rh(t,e,n,r)}finally{pe=s,Os.transition=i}}function j1(t,e,n,r){var s=pe,i=Os.transition;Os.transition=null;try{pe=4,Rh(t,e,n,r)}finally{pe=s,Os.transition=i}}function Rh(t,e,n,r){if(oa){var s=dd(t,e,n,r);if(s===null)au(t,e,r,la,n),Mp(t,r);else if(I1(s,t,e,n,r))r.stopPropagation();else if(Mp(t,r),e&4&&-1<E1.indexOf(t)){for(;s!==null;){var i=Ho(s);if(i!==null&&q0(i),i=dd(t,e,n,r),i===null&&au(t,e,r,la,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else au(t,e,r,null,n)}}var la=null;function dd(t,e,n,r){if(la=null,t=Sh(r),t=$r(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return la=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case Eh:return 1;case Q0:return 4;case sa:case v1:return 16;case G0:return 536870912;default:return 16}default:return 16}}var fr=null,jh=null,Fl=null;function rg(){if(Fl)return Fl;var t,e=jh,n=e.length,r,s="value"in fr?fr.value:fr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Fl=s.slice(t,1<r?1-r:void 0)}function Bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function zp(){return!1}function $t(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yl:zp,this.isPropagationStopped=zp,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=$t(li),Wo=Ae({},li,{view:0,detail:0}),P1=$t(Wo),Zc,eu,Si,tc=Ae({},Wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Si&&(Si&&t.type==="mousemove"?(Zc=t.screenX-Si.screenX,eu=t.screenY-Si.screenY):eu=Zc=0,Si=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Fp=$t(tc),A1=Ae({},tc,{dataTransfer:0}),L1=$t(A1),O1=Ae({},Wo,{relatedTarget:0}),tu=$t(O1),D1=Ae({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),M1=$t(D1),U1=Ae({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z1=$t(U1),F1=Ae({},li,{data:0}),Bp=$t(F1),B1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W1[t])?!!e[t]:!1}function Ah(){return H1}var V1=Ae({},Wo,{key:function(t){if(t.key){var e=B1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y1=$t(V1),Q1=Ae({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=$t(Q1),G1=Ae({},Wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),X1=$t(G1),K1=Ae({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),q1=$t(K1),J1=Ae({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=$t(J1),ew=[9,13,27,32],Lh=zn&&"CompositionEvent"in window,$i=null;zn&&"documentMode"in document&&($i=document.documentMode);var tw=zn&&"TextEvent"in window&&!$i,sg=zn&&(!Lh||$i&&8<$i&&11>=$i),Wp=" ",Hp=!1;function ig(t,e){switch(t){case"keyup":return ew.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function nw(t,e){switch(t){case"compositionend":return og(e);case"keypress":return e.which!==32?null:(Hp=!0,Wp);case"textInput":return t=e.data,t===Wp&&Hp?null:t;default:return null}}function rw(t,e){if(xs)return t==="compositionend"||!Lh&&ig(t,e)?(t=rg(),Fl=jh=fr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sw[t.type]:e==="textarea"}function lg(t,e,n,r){U0(r),e=aa(e,"onChange"),0<e.length&&(n=new Ph("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wi=null,fo=null;function iw(t){yg(t,0)}function nc(t){var e=ks(t);if(j0(e))return t}function ow(t,e){if(t==="change")return e}var ag=!1;if(zn){var nu;if(zn){var ru="oninput"in document;if(!ru){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),ru=typeof Yp.oninput=="function"}nu=ru}else nu=!1;ag=nu&&(!document.documentMode||9<document.documentMode)}function Qp(){Wi&&(Wi.detachEvent("onpropertychange",cg),fo=Wi=null)}function cg(t){if(t.propertyName==="value"&&nc(fo)){var e=[];lg(e,fo,t,Sh(t)),$0(iw,e)}}function lw(t,e,n){t==="focusin"?(Qp(),Wi=e,fo=n,Wi.attachEvent("onpropertychange",cg)):t==="focusout"&&Qp()}function aw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(fo)}function cw(t,e){if(t==="click")return nc(e)}function uw(t,e){if(t==="input"||t==="change")return nc(e)}function dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:dw;function po(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Qu.call(e,s)||!hn(t[s],e[s]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xp(t,e){var n=Gp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gp(n)}}function ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dg(){for(var t=window,e=ta();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ta(t.document)}return e}function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hw(t){var e=dg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(r!==null&&Oh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Xp(n,i);var o=Xp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fw=zn&&"documentMode"in document&&11>=document.documentMode,bs=null,hd=null,Hi=null,fd=!1;function Kp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||bs==null||bs!==ta(r)||(r=bs,"selectionStart"in r&&Oh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&po(Hi,r)||(Hi=r,r=aa(hd,"onSelect"),0<r.length&&(e=new Ph("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bs)))}function vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},su={},hg={};zn&&(hg=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function rc(t){if(su[t])return su[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hg)return su[t]=e[n];return t}var fg=rc("animationend"),pg=rc("animationiteration"),mg=rc("animationstart"),_g=rc("transitionend"),gg=new Map,qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){gg.set(t,e),as(e,[t])}for(var iu=0;iu<qp.length;iu++){var ou=qp[iu],pw=ou.toLowerCase(),mw=ou[0].toUpperCase()+ou.slice(1);Lr(pw,"on"+mw)}Lr(fg,"onAnimationEnd");Lr(pg,"onAnimationIteration");Lr(mg,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(_g,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Jp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,p1(r,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Jp(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Jp(s,l,u),i=c}}}if(ra)throw t=ad,ra=!1,ad=null,t}function Se(t,e){var n=e[yd];n===void 0&&(n=e[yd]=new Set);var r=t+"__bubble";n.has(r)||(vg(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),vg(n,t,r,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[xl]){t[xl]=!0,S0.forEach(function(n){n!=="selectionchange"&&(_w.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xl]||(e[xl]=!0,lu("selectionchange",!1,e))}}function vg(t,e,n,r){switch(ng(e)){case 1:var s=R1;break;case 4:s=j1;break;default:s=Rh}n=s.bind(null,e,n,t),s=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function au(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=$r(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}$0(function(){var u=i,h=Sh(n),d=[];e:{var f=gg.get(t);if(f!==void 0){var m=Ph,v=t;switch(t){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":m=Y1;break;case"focusin":v="focus",m=tu;break;case"focusout":v="blur",m=tu;break;case"beforeblur":case"afterblur":m=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=X1;break;case fg:case pg:case mg:m=M1;break;case _g:m=q1;break;case"scroll":m=P1;break;case"wheel":m=Z1;break;case"copy":case"cut":case"paste":m=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=$p}var w=(e&4)!==0,k=!w&&t==="scroll",_=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,y;p!==null;){y=p;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,_!==null&&(b=ao(p,_),b!=null&&w.push(_o(p,b,y)))),k)break;p=p.return}0<w.length&&(f=new m(f,v,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==id&&(v=n.relatedTarget||n.fromElement)&&($r(v)||v[Fn]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?$r(v):null,v!==null&&(k=cs(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Fp,b="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=$p,b="onPointerLeave",_="onPointerEnter",p="pointer"),k=m==null?f:ks(m),y=v==null?f:ks(v),f=new w(b,p+"leave",m,n,h),f.target=k,f.relatedTarget=y,b=null,$r(h)===u&&(w=new w(_,p+"enter",v,n,h),w.target=y,w.relatedTarget=k,b=w),k=b,m&&v)t:{for(w=m,_=v,p=0,y=w;y;y=ms(y))p++;for(y=0,b=_;b;b=ms(b))y++;for(;0<p-y;)w=ms(w),p--;for(;0<y-p;)_=ms(_),y--;for(;p--;){if(w===_||_!==null&&w===_.alternate)break t;w=ms(w),_=ms(_)}w=null}else w=null;m!==null&&Zp(d,f,m,w,!1),v!==null&&k!==null&&Zp(d,k,v,w,!0)}}e:{if(f=u?ks(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var x=ow;else if(Vp(f))if(ag)x=uw;else{x=aw;var C=lw}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=cw);if(x&&(x=x(t,u))){lg(d,x,n,h);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&ed(f,"number",f.value)}switch(C=u?ks(u):window,t){case"focusin":(Vp(C)||C.contentEditable==="true")&&(bs=C,hd=u,Hi=null);break;case"focusout":Hi=hd=bs=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,Kp(d,n,h);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":Kp(d,n,h)}var N;if(Lh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else xs?ig(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(sg&&n.locale!=="ko"&&(xs||I!=="onCompositionStart"?I==="onCompositionEnd"&&xs&&(N=rg()):(fr=h,jh="value"in fr?fr.value:fr.textContent,xs=!0)),C=aa(u,I),0<C.length&&(I=new Bp(I,t,null,n,h),d.push({event:I,listeners:C}),N?I.data=N:(N=og(n),N!==null&&(I.data=N)))),(N=tw?nw(t,n):rw(t,n))&&(u=aa(u,"onBeforeInput"),0<u.length&&(h=new Bp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=N))}yg(d,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ao(t,n),i!=null&&r.unshift(_o(t,i,s)),i=ao(t,e),i!=null&&r.push(_o(t,i,s))),t=t.return}return r}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zp(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=ao(n,i),c!=null&&o.unshift(_o(n,c,l))):s||(c=ao(n,i),c!=null&&o.push(_o(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function em(t){return(typeof t=="string"?t:""+t).replace(gw,`
`).replace(yw,"")}function bl(t,e,n){if(e=em(e),em(t)!==e&&n)throw Error(O(425))}function ca(){}var pd=null,md=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(t){return tm.resolve(null).then(t).catch(bw)}:gd;function bw(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ho(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),gn="__reactFiber$"+ai,go="__reactProps$"+ai,Fn="__reactContainer$"+ai,yd="__reactEvents$"+ai,ww="__reactListeners$"+ai,kw="__reactHandles$"+ai;function $r(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nm(t);t!==null;){if(n=t[gn])return n;t=nm(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[gn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function sc(t){return t[go]||null}var vd=[],Cs=-1;function Or(t){return{current:t}}function Ee(t){0>Cs||(t.current=vd[Cs],vd[Cs]=null,Cs--)}function Ce(t,e){Cs++,vd[Cs]=t.current,t.current=e}var Tr={},mt=Or(Tr),Rt=Or(!1),qr=Tr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function jt(t){return t=t.childContextTypes,t!=null}function ua(){Ee(Rt),Ee(mt)}function rm(t,e,n){if(mt.current!==Tr)throw Error(O(168));Ce(mt,e),Ce(Rt,n)}function xg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(O(108,l1(t)||"Unknown",s));return Ae({},n,r)}function da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,qr=mt.current,Ce(mt,t),Ce(Rt,Rt.current),!0}function sm(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=xg(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Rt),Ee(mt),Ce(mt,t)):Ee(Rt),Ce(Rt,n)}var En=null,ic=!1,uu=!1;function bg(t){En===null?En=[t]:En.push(t)}function Cw(t){ic=!0,bg(t)}function Dr(){if(!uu&&En!==null){uu=!0;var t=0,e=pe;try{var n=En;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,ic=!1}catch(s){throw En!==null&&(En=En.slice(t+1)),Y0(Eh,Dr),s}finally{pe=e,uu=!1}}return null}var Ns=[],Ss=0,ha=null,fa=0,Ht=[],Vt=0,Jr=null,Rn=1,jn="";function Ur(t,e){Ns[Ss++]=fa,Ns[Ss++]=ha,ha=t,fa=e}function wg(t,e,n){Ht[Vt++]=Rn,Ht[Vt++]=jn,Ht[Vt++]=Jr,Jr=t;var r=Rn;t=jn;var s=32-ln(r)-1;r&=~(1<<s),n+=1;var i=32-ln(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Rn=1<<32-ln(e)+s|n<<s|r,jn=i+t}else Rn=1<<i|n<<s|r,jn=t}function Dh(t){t.return!==null&&(Ur(t,1),wg(t,1,0))}function Mh(t){for(;t===ha;)ha=Ns[--Ss],Ns[Ss]=null,fa=Ns[--Ss],Ns[Ss]=null;for(;t===Jr;)Jr=Ht[--Vt],Ht[Vt]=null,jn=Ht[--Vt],Ht[Vt]=null,Rn=Ht[--Vt],Ht[Vt]=null}var zt=null,Mt=null,Ie=!1,rn=null;function kg(t,e){var n=Yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Mt=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Rn,overflow:jn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Mt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bd(t){if(Ie){var e=Mt;if(e){var n=e;if(!im(t,e)){if(xd(t))throw Error(O(418));e=vr(n.nextSibling);var r=zt;e&&im(t,e)?kg(r,n):(t.flags=t.flags&-4097|2,Ie=!1,zt=t)}}else{if(xd(t))throw Error(O(418));t.flags=t.flags&-4097|2,Ie=!1,zt=t}}}function om(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function wl(t){if(t!==zt)return!1;if(!Ie)return om(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=Mt)){if(xd(t))throw Cg(),Error(O(418));for(;e;)kg(t,e),e=vr(e.nextSibling)}if(om(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=zt?vr(t.stateNode.nextSibling):null;return!0}function Cg(){for(var t=Mt;t;)t=vr(t.nextSibling)}function Ys(){Mt=zt=null,Ie=!1}function Uh(t){rn===null?rn=[t]:rn.push(t)}var Nw=Qn.ReactCurrentBatchConfig;function Ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function kl(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lm(t){var e=t._init;return e(t._payload)}function Ng(t){function e(_,p){if(t){var y=_.deletions;y===null?(_.deletions=[p],_.flags|=16):y.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function s(_,p){return _=kr(_,p),_.index=0,_.sibling=null,_}function i(_,p,y){return _.index=y,t?(y=_.alternate,y!==null?(y=y.index,y<p?(_.flags|=2,p):y):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,p,y,b){return p===null||p.tag!==6?(p=gu(y,_.mode,b),p.return=_,p):(p=s(p,y),p.return=_,p)}function c(_,p,y,b){var x=y.type;return x===vs?h(_,p,y.props.children,b,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===rr&&lm(x)===p.type)?(b=s(p,y.props),b.ref=Ei(_,p,y),b.return=_,b):(b=Gl(y.type,y.key,y.props,null,_.mode,b),b.ref=Ei(_,p,y),b.return=_,b)}function u(_,p,y,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=yu(y,_.mode,b),p.return=_,p):(p=s(p,y.children||[]),p.return=_,p)}function h(_,p,y,b,x){return p===null||p.tag!==7?(p=Gr(y,_.mode,b,x),p.return=_,p):(p=s(p,y),p.return=_,p)}function d(_,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=gu(""+p,_.mode,y),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case hl:return y=Gl(p.type,p.key,p.props,null,_.mode,y),y.ref=Ei(_,null,p),y.return=_,y;case ys:return p=yu(p,_.mode,y),p.return=_,p;case rr:var b=p._init;return d(_,b(p._payload),y)}if(Di(p)||wi(p))return p=Gr(p,_.mode,y,null),p.return=_,p;kl(_,p)}return null}function f(_,p,y,b){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:l(_,p,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:return y.key===x?c(_,p,y,b):null;case ys:return y.key===x?u(_,p,y,b):null;case rr:return x=y._init,f(_,p,x(y._payload),b)}if(Di(y)||wi(y))return x!==null?null:h(_,p,y,b,null);kl(_,y)}return null}function m(_,p,y,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(y)||null,l(p,_,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case hl:return _=_.get(b.key===null?y:b.key)||null,c(p,_,b,x);case ys:return _=_.get(b.key===null?y:b.key)||null,u(p,_,b,x);case rr:var C=b._init;return m(_,p,y,C(b._payload),x)}if(Di(b)||wi(b))return _=_.get(y)||null,h(p,_,b,x,null);kl(p,b)}return null}function v(_,p,y,b){for(var x=null,C=null,N=p,I=p=0,P=null;N!==null&&I<y.length;I++){N.index>I?(P=N,N=null):P=N.sibling;var S=f(_,N,y[I],b);if(S===null){N===null&&(N=P);break}t&&N&&S.alternate===null&&e(_,N),p=i(S,p,I),C===null?x=S:C.sibling=S,C=S,N=P}if(I===y.length)return n(_,N),Ie&&Ur(_,I),x;if(N===null){for(;I<y.length;I++)N=d(_,y[I],b),N!==null&&(p=i(N,p,I),C===null?x=N:C.sibling=N,C=N);return Ie&&Ur(_,I),x}for(N=r(_,N);I<y.length;I++)P=m(N,_,I,y[I],b),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?I:P.key),p=i(P,p,I),C===null?x=P:C.sibling=P,C=P);return t&&N.forEach(function(E){return e(_,E)}),Ie&&Ur(_,I),x}function w(_,p,y,b){var x=wi(y);if(typeof x!="function")throw Error(O(150));if(y=x.call(y),y==null)throw Error(O(151));for(var C=x=null,N=p,I=p=0,P=null,S=y.next();N!==null&&!S.done;I++,S=y.next()){N.index>I?(P=N,N=null):P=N.sibling;var E=f(_,N,S.value,b);if(E===null){N===null&&(N=P);break}t&&N&&E.alternate===null&&e(_,N),p=i(E,p,I),C===null?x=E:C.sibling=E,C=E,N=P}if(S.done)return n(_,N),Ie&&Ur(_,I),x;if(N===null){for(;!S.done;I++,S=y.next())S=d(_,S.value,b),S!==null&&(p=i(S,p,I),C===null?x=S:C.sibling=S,C=S);return Ie&&Ur(_,I),x}for(N=r(_,N);!S.done;I++,S=y.next())S=m(N,_,I,S.value,b),S!==null&&(t&&S.alternate!==null&&N.delete(S.key===null?I:S.key),p=i(S,p,I),C===null?x=S:C.sibling=S,C=S);return t&&N.forEach(function(R){return e(_,R)}),Ie&&Ur(_,I),x}function k(_,p,y,b){if(typeof y=="object"&&y!==null&&y.type===vs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case hl:e:{for(var x=y.key,C=p;C!==null;){if(C.key===x){if(x=y.type,x===vs){if(C.tag===7){n(_,C.sibling),p=s(C,y.props.children),p.return=_,_=p;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===rr&&lm(x)===C.type){n(_,C.sibling),p=s(C,y.props),p.ref=Ei(_,C,y),p.return=_,_=p;break e}n(_,C);break}else e(_,C);C=C.sibling}y.type===vs?(p=Gr(y.props.children,_.mode,b,y.key),p.return=_,_=p):(b=Gl(y.type,y.key,y.props,null,_.mode,b),b.ref=Ei(_,p,y),b.return=_,_=b)}return o(_);case ys:e:{for(C=y.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(_,p.sibling),p=s(p,y.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=yu(y,_.mode,b),p.return=_,_=p}return o(_);case rr:return C=y._init,k(_,p,C(y._payload),b)}if(Di(y))return v(_,p,y,b);if(wi(y))return w(_,p,y,b);kl(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(_,p.sibling),p=s(p,y),p.return=_,_=p):(n(_,p),p=gu(y,_.mode,b),p.return=_,_=p),o(_)):n(_,p)}return k}var Qs=Ng(!0),Sg=Ng(!1),pa=Or(null),ma=null,Es=null,zh=null;function Fh(){zh=Es=ma=null}function Bh(t){var e=pa.current;Ee(pa),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){ma=t,zh=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Xt(t){var e=t._currentValue;if(zh!==t)if(t={context:t,memoizedValue:e,next:null},Es===null){if(ma===null)throw Error(O(308));Es=t,ma.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return e}var Wr=null;function $h(t){Wr===null?Wr=[t]:Wr.push(t)}function Eg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,$h(e)):(n.next=s.next,s.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ig(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Bn(t,n)}return s=r.interleaved,s===null?(e.next=e,$h(r)):(e.next=s.next,s.next=e),r.interleaved=e,Bn(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ih(t,n)}}function am(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _a(t,e,n,r){var s=t.updateQueue;sr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(i!==null){var d=s.baseState;o=0,h=u=c=null,l=i;do{var f=l.lane,m=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=Ae({},d,f);break e;case 2:sr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,c=d):h=h.next=m,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(c=d),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);es|=o,t.lanes=o,t.memoizedState=d}}function cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(O(191,s));s.call(r)}}}var Vo={},xn=Or(Vo),yo=Or(Vo),vo=Or(Vo);function Hr(t){if(t===Vo)throw Error(O(174));return t}function Hh(t,e){switch(Ce(vo,e),Ce(yo,t),Ce(xn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nd(e,t)}Ee(xn),Ce(xn,e)}function Gs(){Ee(xn),Ee(yo),Ee(vo)}function Tg(t){Hr(vo.current);var e=Hr(xn.current),n=nd(e,t.type);e!==n&&(Ce(yo,t),Ce(xn,n))}function Vh(t){yo.current===t&&(Ee(xn),Ee(yo))}var je=Or(0);function ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Yh(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Wl=Qn.ReactCurrentDispatcher,hu=Qn.ReactCurrentBatchConfig,Zr=0,Pe=null,Ye=null,Ze=null,ya=!1,Vi=!1,xo=0,Sw=0;function ht(){throw Error(O(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function Gh(t,e,n,r,s,i){if(Zr=i,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?Rw:jw,t=n(r,s),Vi){i=0;do{if(Vi=!1,xo=0,25<=i)throw Error(O(301));i+=1,Ze=Ye=null,e.updateQueue=null,Wl.current=Pw,t=n(r,s)}while(Vi)}if(Wl.current=va,e=Ye!==null&&Ye.next!==null,Zr=0,Ze=Ye=Pe=null,ya=!1,e)throw Error(O(300));return t}function Xh(){var t=xo!==0;return xo=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Kt(){if(Ye===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=Ze===null?Pe.memoizedState:Ze.next;if(e!==null)Ze=e,Ye=t;else{if(t===null)throw Error(O(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Ze===null?Pe.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function bo(t,e){return typeof e=="function"?e(t):e}function fu(t){var e=Kt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=Ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var h=u.lane;if((Zr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=d,o=r):c=c.next=d,Pe.lanes|=h,es|=h}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,hn(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Pe.lanes|=i,es|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=Kt(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);hn(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Rg(){}function jg(t,e){var n=Pe,r=Kt(),s=e(),i=!hn(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,Kh(Lg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,wo(9,Ag.bind(null,n,r,s,e),void 0,null),nt===null)throw Error(O(349));Zr&30||Pg(n,e,s)}return s}function Pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ag(t,e,n,r){e.value=n,e.getSnapshot=r,Og(e)&&Dg(t)}function Lg(t,e,n){return n(function(){Og(e)&&Dg(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function Dg(t){var e=Bn(t,1);e!==null&&an(e,t,1,-1)}function um(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=Tw.bind(null,Pe,t),[e.memoizedState,t]}function wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Mg(){return Kt().memoizedState}function Hl(t,e,n,r){var s=_n();Pe.flags|=t,s.memoizedState=wo(1|e,n,void 0,r===void 0?null:r)}function oc(t,e,n,r){var s=Kt();r=r===void 0?null:r;var i=void 0;if(Ye!==null){var o=Ye.memoizedState;if(i=o.destroy,r!==null&&Qh(r,o.deps)){s.memoizedState=wo(e,n,i,r);return}}Pe.flags|=t,s.memoizedState=wo(1|e,n,i,r)}function dm(t,e){return Hl(8390656,8,t,e)}function Kh(t,e){return oc(2048,8,t,e)}function Ug(t,e){return oc(4,2,t,e)}function zg(t,e){return oc(4,4,t,e)}function Fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Bg(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,Fg.bind(null,e,t),n)}function qh(){}function $g(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=Kt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return Zr&21?(hn(n,e)||(n=X0(),Pe.lanes|=n,es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function Ew(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=hu.transition;hu.transition={};try{t(!1),e()}finally{pe=n,hu.transition=r}}function Vg(){return Kt().memoizedState}function Iw(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yg(t))Qg(e,n);else if(n=Eg(t,e,n,r),n!==null){var s=bt();an(n,t,r,s),Gg(n,e,r)}}function Tw(t,e,n){var r=wr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yg(t))Qg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,hn(l,o)){var c=e.interleaved;c===null?(s.next=s,$h(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=Eg(t,e,s,r),n!==null&&(s=bt(),an(n,t,r,s),Gg(n,e,r))}}function Yg(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function Qg(t,e){Vi=ya=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Gg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ih(t,n)}}var va={readContext:Xt,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},Rw={readContext:Xt,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:Xt,useEffect:dm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4194308,4,Fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hl(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Iw.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:um,useDebugValue:qh,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=um(!1),e=t[0];return t=Ew.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,s=_n();if(Ie){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),nt===null)throw Error(O(349));Zr&30||Pg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,dm(Lg.bind(null,r,i,t),[t]),r.flags|=2048,wo(9,Ag.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=_n(),e=nt.identifierPrefix;if(Ie){var n=jn,r=Rn;n=(r&~(1<<32-ln(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jw={readContext:Xt,useCallback:$g,useContext:Xt,useEffect:Kh,useImperativeHandle:Bg,useInsertionEffect:Ug,useLayoutEffect:zg,useMemo:Wg,useReducer:fu,useRef:Mg,useState:function(){return fu(bo)},useDebugValue:qh,useDeferredValue:function(t){var e=Kt();return Hg(e,Ye.memoizedState,t)},useTransition:function(){var t=fu(bo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:jg,useId:Vg,unstable_isNewReconciler:!1},Pw={readContext:Xt,useCallback:$g,useContext:Xt,useEffect:Kh,useImperativeHandle:Bg,useInsertionEffect:Ug,useLayoutEffect:zg,useMemo:Wg,useReducer:pu,useRef:Mg,useState:function(){return pu(bo)},useDebugValue:qh,useDeferredValue:function(t){var e=Kt();return Ye===null?e.memoizedState=t:Hg(e,Ye.memoizedState,t)},useTransition:function(){var t=pu(bo)[0],e=Kt().memoizedState;return[t,e]},useMutableSource:Rg,useSyncExternalStore:jg,useId:Vg,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),s=wr(t),i=Mn(r,s);i.payload=e,n!=null&&(i.callback=n),e=xr(t,i,s),e!==null&&(an(e,t,s,r),$l(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),s=wr(t),i=Mn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=xr(t,i,s),e!==null&&(an(e,t,s,r),$l(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=wr(t),s=Mn(n,r);s.tag=2,e!=null&&(s.callback=e),e=xr(t,s,r),e!==null&&(an(e,t,r,n),$l(e,t,r))}};function hm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(s,i):!0}function Xg(t,e,n){var r=!1,s=Tr,i=e.contextType;return typeof i=="object"&&i!==null?i=Xt(i):(s=jt(e)?qr:mt.current,r=e.contextTypes,i=(r=r!=null)?Vs(t,s):Tr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function fm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function Cd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Wh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Xt(i):(i=jt(e)?qr:mt.current,s.context=Vs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(kd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&lc.enqueueReplaceState(s,s.state,null),_a(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=o1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Aw=typeof WeakMap=="function"?WeakMap:Map;function Kg(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ba||(ba=!0,Od=r),Nd(t,e)},n}function qg(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Nd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Aw;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Qw.bind(null,t,e,n),e.then(t,t))}function mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _m(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Lw=Qn.ReactCurrentOwner,It=!1;function yt(t,e,n,r){e.child=t===null?Sg(e,null,n,r):Qs(e,t.child,n,r)}function gm(t,e,n,r,s){n=n.render;var i=e.ref;return Ds(e,s),r=Gh(t,e,n,r,i,s),n=Xh(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$n(t,e,s)):(Ie&&n&&Dh(e),e.flags|=1,yt(t,e,r,s),e.child)}function ym(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Jg(t,e,i,r,s)):(t=Gl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return $n(t,e,s)}return e.flags|=1,t=kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(po(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,$n(t,e,s)}return Sd(t,e,n,r,s)}function Zg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Ts,Dt),Dt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(Ts,Dt),Dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(Ts,Dt),Dt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce(Ts,Dt),Dt|=r;return yt(t,e,s,n),e.child}function ey(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,r,s){var i=jt(n)?qr:mt.current;return i=Vs(e,i),Ds(e,s),n=Gh(t,e,n,r,i,s),r=Xh(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$n(t,e,s)):(Ie&&r&&Dh(e),e.flags|=1,yt(t,e,n,s),e.child)}function vm(t,e,n,r,s){if(jt(n)){var i=!0;da(e)}else i=!1;if(Ds(e,s),e.stateNode===null)Vl(t,e),Xg(e,n,r),Cd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=jt(n)?qr:mt.current,u=Vs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&fm(e,o,r,u),sr=!1;var f=e.memoizedState;o.state=f,_a(e,r,o,s),c=e.memoizedState,l!==r||f!==c||Rt.current||sr?(typeof h=="function"&&(kd(e,n,h,r),c=e.memoizedState),(l=sr||hm(e,n,l,r,f,c,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ig(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:tn(e.type,l),o.props=u,d=e.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Xt(c):(c=jt(n)?qr:mt.current,c=Vs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==c)&&fm(e,o,r,c),sr=!1,f=e.memoizedState,o.state=f,_a(e,r,o,s);var v=e.memoizedState;l!==d||f!==v||Rt.current||sr?(typeof m=="function"&&(kd(e,n,m,r),v=e.memoizedState),(u=sr||hm(e,n,u,r,f,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ed(t,e,n,r,i,s)}function Ed(t,e,n,r,s,i){ey(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&sm(e,n,!1),$n(t,e,i);r=e.stateNode,Lw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):yt(t,e,l,i),e.memoizedState=r.state,s&&sm(e,n,!0),e.child}function ty(t){var e=t.stateNode;e.pendingContext?rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rm(t,e.context,!1),Hh(t,e.containerInfo)}function xm(t,e,n,r,s){return Ys(),Uh(s),e.flags|=256,yt(t,e,n,r),e.child}var Id={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function ny(t,e,n){var r=e.pendingProps,s=je.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(je,s&1),t===null)return bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=uc(o,r,0,null),t=Gr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Td(n),e.memoizedState=Id,t):Jh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Ow(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=kr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=kr(l,i):(i=Gr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Id,r}return i=t.child,t=i.sibling,r=kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,r){return r!==null&&Uh(r),Qs(e,t.child,null,n),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ow(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=mu(Error(O(422))),Cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=uc({mode:"visible",children:r.children},s,0,null),i=Gr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Id,i);if(!(e.mode&1))return Cl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(O(419)),r=mu(i,r,void 0),Cl(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=nt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Bn(t,s),an(r,t,s,-1))}return sf(),r=mu(Error(O(421))),Cl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Gw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Mt=vr(s.nextSibling),zt=e,Ie=!0,rn=null,t!==null&&(Ht[Vt++]=Rn,Ht[Vt++]=jn,Ht[Vt++]=Jr,Rn=t.id,jn=t.overflow,Jr=e),e=Jh(e,r.children),e.flags|=4096,e)}function bm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wd(t.return,e,n)}function _u(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function ry(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(yt(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bm(t,n,e);else if(t.tag===19)bm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ga(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),_u(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ga(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}_u(e,!0,n,null,i);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dw(t,e,n){switch(e.tag){case 3:ty(e),Ys();break;case 5:Tg(e);break;case 1:jt(e.type)&&da(e);break;case 4:Hh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(pa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?ny(t,e,n):(Ce(je,je.current&1),t=$n(t,e,n),t!==null?t.sibling:null);Ce(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return ry(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return $n(t,e,n)}var sy,Rd,iy,oy;sy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};iy=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Hr(xn.current);var i=null;switch(n){case"input":s=Ju(t,s),r=Ju(t,r),i=[];break;case"select":s=Ae({},s,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":s=td(t,s),r=td(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ca)}rd(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Se("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};oy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mw(t,e,n){var r=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return jt(e.type)&&ua(),ft(e),null;case 3:return r=e.stateNode,Gs(),Ee(Rt),Ee(mt),Yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Ud(rn),rn=null))),Rd(t,e),ft(e),null;case 5:Vh(e);var s=Hr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)iy(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return ft(e),null}if(t=Hr(xn.current),wl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[gn]=e,r[go]=i,t=(e.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(s=0;s<Ui.length;s++)Se(Ui[s],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Rp(r,i),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Se("invalid",r);break;case"textarea":Pp(r,i),Se("invalid",r)}rd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&bl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&bl(r.textContent,l,t),s=["children",""+l]):oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Se("scroll",r)}switch(n){case"input":fl(r),jp(r,i,!0);break;case"textarea":fl(r),Ap(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ca)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[go]=r,sy(t,e,!1,!1),e.stateNode=t;e:{switch(o=sd(n,r),n){case"dialog":Se("cancel",t),Se("close",t),s=r;break;case"iframe":case"object":case"embed":Se("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ui.length;s++)Se(Ui[s],t);s=r;break;case"source":Se("error",t),s=r;break;case"img":case"image":case"link":Se("error",t),Se("load",t),s=r;break;case"details":Se("toggle",t),s=r;break;case"input":Rp(t,r),s=Ju(t,r),Se("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ae({},r,{value:void 0}),Se("invalid",t);break;case"textarea":Pp(t,r),s=td(t,r),Se("invalid",t);break;default:s=r}rd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?M0(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&O0(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&lo(t,c):typeof c=="number"&&lo(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Se("scroll",t):c!=null&&wh(t,i,c,o))}switch(n){case"input":fl(t),jp(t,r,!1);break;case"textarea":fl(t),Ap(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ps(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ps(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)oy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=Hr(vo.current),Hr(xn.current),wl(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(i=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:bl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return ft(e),null;case 13:if(Ee(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Mt!==null&&e.mode&1&&!(e.flags&128))Cg(),Ys(),e.flags|=98560,i=!1;else if(i=wl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(O(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[gn]=e}else Ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),i=!1}else rn!==null&&(Ud(rn),rn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?Ke===0&&(Ke=3):sf())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return Gs(),Rd(t,e),t===null&&mo(e.stateNode.containerInfo),ft(e),null;case 10:return Bh(e.type._context),ft(e),null;case 17:return jt(e.type)&&ua(),ft(e),null;case 19:if(Ee(je),i=e.memoizedState,i===null)return ft(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ii(i,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ga(t),o!==null){for(e.flags|=128,Ii(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(je,je.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>Ks&&(e.flags|=128,r=!0,Ii(i,!1),e.lanes=4194304)}else{if(!r)if(t=ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return ft(e),null}else 2*Fe()-i.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,r=!0,Ii(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=je.current,Ce(je,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Dt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function Uw(t,e){switch(Mh(e),e.tag){case 1:return jt(e.type)&&ua(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Ee(Rt),Ee(mt),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vh(e),null;case 13:if(Ee(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(je),null;case 4:return Gs(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Nl=!1,pt=!1,zw=typeof WeakSet=="function"?WeakSet:Set,$=null;function Is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function jd(t,e,n){try{n()}catch(r){Le(t,e,r)}}var wm=!1;function Fw(t,e){if(pd=oa,t=dg(),Oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==i||r!==0&&d.nodeType!==3||(c=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++h===r&&(c=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:t,selectionRange:n},oa=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?w:tn(e.type,w),k);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(b){Le(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return v=wm,wm=!1,v}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&jd(e,n,i)}s=s.next}while(s!==r)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ly(t){var e=t.alternate;e!==null&&(t.alternate=null,ly(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[go],delete e[yd],delete e[ww],delete e[kw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ay(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ay(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ca));else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var st=null,nn=!1;function tr(t,e,n){for(n=n.child;n!==null;)cy(t,e,n),n=n.sibling}function cy(t,e,n){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:pt||Is(n,e);case 6:var r=st,s=nn;st=null,tr(t,e,n),st=r,nn=s,st!==null&&(nn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(nn?(t=st,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),ho(t)):cu(st,n.stateNode));break;case 4:r=st,s=nn,st=n.stateNode.containerInfo,nn=!0,tr(t,e,n),st=r,nn=s;break;case 0:case 11:case 14:case 15:if(!pt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&jd(n,e,o),s=s.next}while(s!==r)}tr(t,e,n);break;case 1:if(!pt&&(Is(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Le(n,e,l)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(pt=(r=pt)||n.memoizedState!==null,tr(t,e,n),pt=r):tr(t,e,n);break;default:tr(t,e,n)}}function Cm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zw),e.forEach(function(r){var s=Xw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:st=l.stateNode,nn=!1;break e;case 3:st=l.stateNode.containerInfo,nn=!0;break e;case 4:st=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(st===null)throw Error(O(160));cy(i,o,s),st=null,nn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){Le(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)uy(e,t),e=e.sibling}function uy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),mn(t),r&4){try{Yi(3,t,t.return),ac(3,t)}catch(w){Le(t,t.return,w)}try{Yi(5,t,t.return)}catch(w){Le(t,t.return,w)}}break;case 1:en(e,t),mn(t),r&512&&n!==null&&Is(n,n.return);break;case 5:if(en(e,t),mn(t),r&512&&n!==null&&Is(n,n.return),t.flags&32){var s=t.stateNode;try{lo(s,"")}catch(w){Le(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&P0(s,i),sd(l,o);var u=sd(l,i);for(o=0;o<c.length;o+=2){var h=c[o],d=c[o+1];h==="style"?M0(s,d):h==="dangerouslySetInnerHTML"?O0(s,d):h==="children"?lo(s,d):wh(s,h,d,u)}switch(l){case"input":Zu(s,i);break;case"textarea":A0(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Ps(s,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ps(s,!!i.multiple,i.defaultValue,!0):Ps(s,!!i.multiple,i.multiple?[]:"",!1))}s[go]=i}catch(w){Le(t,t.return,w)}}break;case 6:if(en(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(O(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){Le(t,t.return,w)}}break;case 3:if(en(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(w){Le(t,t.return,w)}break;case 4:en(e,t),mn(t);break;case 13:en(e,t),mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(tf=Fe())),r&4&&Cm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(pt=(u=pt)||h,en(e,t),pt=u):en(e,t),mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(d=$=h;$!==null;){switch(f=$,m=f.child,f.tag){case 0:case 11:case 14:case 15:Yi(4,f,f.return);break;case 1:Is(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Le(r,n,w)}}break;case 5:Is(f,f.return);break;case 22:if(f.memoizedState!==null){Sm(d);continue}}m!==null?(m.return=f,$=m):Sm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,c=d.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=D0("display",o))}catch(w){Le(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Le(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(e,t),mn(t),r&4&&Cm(t);break;case 21:break;default:en(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ay(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(lo(s,""),r.flags&=-33);var i=km(t);Ld(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=km(t);Ad(t,l,o);break;default:throw Error(O(161))}}catch(c){Le(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bw(t,e,n){$=t,dy(t)}function dy(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Nl;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||pt;l=Nl;var u=pt;if(Nl=o,(pt=c)&&!u)for($=s;$!==null;)o=$,c=o.child,o.tag===22&&o.memoizedState!==null?Em(s):c!==null?(c.return=o,$=c):Em(s);for(;i!==null;)$=i,dy(i),i=i.sibling;$=s,Nl=l,pt=u}Nm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Nm(t)}}function Nm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pt||ac(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!pt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&cm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}pt||e.flags&512&&Pd(e)}catch(f){Le(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Sm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Em(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(c){Le(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Le(e,s,c)}}var i=e.return;try{Pd(e)}catch(c){Le(e,i,c)}break;case 5:var o=e.return;try{Pd(e)}catch(c){Le(e,o,c)}}}catch(c){Le(e,e.return,c)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var $w=Math.ceil,xa=Qn.ReactCurrentDispatcher,Zh=Qn.ReactCurrentOwner,Gt=Qn.ReactCurrentBatchConfig,ue=0,nt=null,$e=null,ot=0,Dt=0,Ts=Or(0),Ke=0,ko=null,es=0,cc=0,ef=0,Qi=null,Et=null,tf=0,Ks=1/0,Sn=null,ba=!1,Od=null,br=null,Sl=!1,pr=null,wa=0,Gi=0,Dd=null,Yl=-1,Ql=0;function bt(){return ue&6?Fe():Yl!==-1?Yl:Yl=Fe()}function wr(t){return t.mode&1?ue&2&&ot!==0?ot&-ot:Nw.transition!==null?(Ql===0&&(Ql=X0()),Ql):(t=pe,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function an(t,e,n,r){if(50<Gi)throw Gi=0,Dd=null,Error(O(185));$o(t,n,r),(!(ue&2)||t!==nt)&&(t===nt&&(!(ue&2)&&(cc|=n),Ke===4&&ar(t,ot)),Pt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Ks=Fe()+500,ic&&Dr()))}function Pt(t,e){var n=t.callbackNode;N1(t,e);var r=ia(t,t===nt?ot:0);if(r===0)n!==null&&Dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dp(n),e===1)t.tag===0?Cw(Im.bind(null,t)):bg(Im.bind(null,t)),xw(function(){!(ue&6)&&Dr()}),n=null;else{switch(K0(r)){case 1:n=Eh;break;case 4:n=Q0;break;case 16:n=sa;break;case 536870912:n=G0;break;default:n=sa}n=vy(n,hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hy(t,e){if(Yl=-1,Ql=0,ue&6)throw Error(O(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var r=ia(t,t===nt?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ka(t,r);else{e=r;var s=ue;ue|=2;var i=py();(nt!==t||ot!==e)&&(Sn=null,Ks=Fe()+500,Qr(t,e));do try{Vw();break}catch(l){fy(t,l)}while(!0);Fh(),xa.current=i,ue=s,$e!==null?e=0:(nt=null,ot=0,e=Ke)}if(e!==0){if(e===2&&(s=cd(t),s!==0&&(r=s,e=Md(t,s))),e===1)throw n=ko,Qr(t,0),ar(t,r),Pt(t,Fe()),n;if(e===6)ar(t,r);else{if(s=t.current.alternate,!(r&30)&&!Ww(s)&&(e=ka(t,r),e===2&&(i=cd(t),i!==0&&(r=i,e=Md(t,i))),e===1))throw n=ko,Qr(t,0),ar(t,r),Pt(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:zr(t,Et,Sn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=tf+500-Fe(),10<e)){if(ia(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=gd(zr.bind(null,t,Et,Sn),e);break}zr(t,Et,Sn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-ln(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$w(r/1960))-r,10<r){t.timeoutHandle=gd(zr.bind(null,t,Et,Sn),r);break}zr(t,Et,Sn);break;case 5:zr(t,Et,Sn);break;default:throw Error(O(329))}}}return Pt(t,Fe()),t.callbackNode===n?hy.bind(null,t):null}function Md(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=ka(t,e),t!==2&&(e=Et,Et=n,e!==null&&Ud(e)),t}function Ud(t){Et===null?Et=t:Et.push.apply(Et,t)}function Ww(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!hn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~ef,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ln(e),r=1<<n;t[n]=-1,e&=~r}}function Im(t){if(ue&6)throw Error(O(327));Ms();var e=ia(t,0);if(!(e&1))return Pt(t,Fe()),null;var n=ka(t,e);if(t.tag!==0&&n===2){var r=cd(t);r!==0&&(e=r,n=Md(t,r))}if(n===1)throw n=ko,Qr(t,0),ar(t,e),Pt(t,Fe()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,Et,Sn),Pt(t,Fe()),null}function nf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Ks=Fe()+500,ic&&Dr())}}function ts(t){pr!==null&&pr.tag===0&&!(ue&6)&&Ms();var e=ue;ue|=1;var n=Gt.transition,r=pe;try{if(Gt.transition=null,pe=1,t)return t()}finally{pe=r,Gt.transition=n,ue=e,!(ue&6)&&Dr()}}function rf(){Dt=Ts.current,Ee(Ts)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vw(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ua();break;case 3:Gs(),Ee(Rt),Ee(mt),Yh();break;case 5:Vh(r);break;case 4:Gs();break;case 13:Ee(je);break;case 19:Ee(je);break;case 10:Bh(r.type._context);break;case 22:case 23:rf()}n=n.return}if(nt=t,$e=t=kr(t.current,null),ot=Dt=e,Ke=0,ko=null,ef=cc=es=0,Et=Qi=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Wr=null}return t}function fy(t,e){do{var n=$e;try{if(Fh(),Wl.current=va,ya){for(var r=Pe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ya=!1}if(Zr=0,Ze=Ye=Pe=null,Vi=!1,xo=0,Zh.current=null,n===null||n.return===null){Ke=1,ko=e,$e=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=ot,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=mm(o);if(m!==null){m.flags&=-257,_m(m,o,l,i,e),m.mode&1&&pm(i,u,e),e=m,c=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(c),e.updateQueue=w}else v.add(c);break e}else{if(!(e&1)){pm(i,u,e),sf();break e}c=Error(O(426))}}else if(Ie&&l.mode&1){var k=mm(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),_m(k,o,l,i,e),Uh(Xs(c,l));break e}}i=c=Xs(c,l),Ke!==4&&(Ke=2),Qi===null?Qi=[i]:Qi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=Kg(i,c,e);am(i,_);break e;case 1:l=c;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=qg(i,l,e);am(i,b);break e}}i=i.return}while(i!==null)}_y(n)}catch(x){e=x,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function py(){var t=xa.current;return xa.current=va,t===null?va:t}function sf(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),nt===null||!(es&268435455)&&!(cc&268435455)||ar(nt,ot)}function ka(t,e){var n=ue;ue|=2;var r=py();(nt!==t||ot!==e)&&(Sn=null,Qr(t,e));do try{Hw();break}catch(s){fy(t,s)}while(!0);if(Fh(),ue=n,xa.current=r,$e!==null)throw Error(O(261));return nt=null,ot=0,Ke}function Hw(){for(;$e!==null;)my($e)}function Vw(){for(;$e!==null&&!_1();)my($e)}function my(t){var e=yy(t.alternate,t,Dt);t.memoizedProps=t.pendingProps,e===null?_y(t):$e=e,Zh.current=null}function _y(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Uw(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,$e=null;return}}else if(n=Mw(n,e,Dt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ke===0&&(Ke=5)}function zr(t,e,n){var r=pe,s=Gt.transition;try{Gt.transition=null,pe=1,Yw(t,e,n,r)}finally{Gt.transition=s,pe=r}return null}function Yw(t,e,n,r){do Ms();while(pr!==null);if(ue&6)throw Error(O(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(S1(t,i),t===nt&&($e=nt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,vy(sa,function(){return Ms(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Gt.transition,Gt.transition=null;var o=pe;pe=1;var l=ue;ue|=4,Zh.current=null,Fw(t,n),uy(n,t),hw(md),oa=!!pd,md=pd=null,t.current=n,Bw(n),g1(),ue=l,pe=o,Gt.transition=i}else t.current=n;if(Sl&&(Sl=!1,pr=t,wa=s),i=t.pendingLanes,i===0&&(br=null),x1(n.stateNode),Pt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ba)throw ba=!1,t=Od,Od=null,t;return wa&1&&t.tag!==0&&Ms(),i=t.pendingLanes,i&1?t===Dd?Gi++:(Gi=0,Dd=t):Gi=0,Dr(),null}function Ms(){if(pr!==null){var t=K0(wa),e=Gt.transition,n=pe;try{if(Gt.transition=null,pe=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,wa=0,ue&6)throw Error(O(331));var s=ue;for(ue|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Yi(8,h,i)}var d=h.child;if(d!==null)d.return=h,$=d;else for(;$!==null;){h=$;var f=h.sibling,m=h.return;if(ly(h),h===u){$=null;break}if(f!==null){f.return=m,$=f;break}$=m}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yi(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,$=_;break e}$=i.return}}var p=t.current;for($=p;$!==null;){o=$;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,$=y;else e:for(o=p;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ac(9,l)}}catch(x){Le(l,l.return,x)}if(l===o){$=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,$=b;break e}$=l.return}}if(ue=s,Dr(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(ec,t)}catch{}r=!0}return r}finally{pe=n,Gt.transition=e}}return!1}function Tm(t,e,n){e=Xs(n,e),e=Kg(t,e,1),t=xr(t,e,1),e=bt(),t!==null&&($o(t,1,e),Pt(t,e))}function Le(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Xs(n,t),t=qg(e,t,1),e=xr(e,t,1),t=bt(),e!==null&&($o(e,1,t),Pt(e,t));break}}e=e.return}}function Qw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,nt===t&&(ot&n)===n&&(Ke===4||Ke===3&&(ot&130023424)===ot&&500>Fe()-tf?Qr(t,0):ef|=n),Pt(t,e)}function gy(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=bt();t=Bn(t,e),t!==null&&($o(t,e,n),Pt(t,n))}function Gw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gy(t,n)}function Xw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),gy(t,n)}var yy;yy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,Dw(t,e,n);It=!!(t.flags&131072)}else It=!1,Ie&&e.flags&1048576&&wg(e,fa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vl(t,e),t=e.pendingProps;var s=Vs(e,mt.current);Ds(e,n),s=Gh(null,e,r,t,s,n);var i=Xh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(i=!0,da(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wh(e),s.updater=lc,e.stateNode=s,s._reactInternals=e,Cd(e,r,t,n),e=Ed(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Dh(e),yt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=qw(r),t=tn(r,t),s){case 0:e=Sd(null,e,r,t,n);break e;case 1:e=vm(null,e,r,t,n);break e;case 11:e=gm(null,e,r,t,n);break e;case 14:e=ym(null,e,r,tn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),Sd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),vm(t,e,r,s,n);case 3:e:{if(ty(e),t===null)throw Error(O(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Ig(t,e),_a(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(O(423)),e),e=xm(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(O(424)),e),e=xm(t,e,r,n,s);break e}else for(Mt=vr(e.stateNode.containerInfo.firstChild),zt=e,Ie=!0,rn=null,n=Sg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ys(),r===s){e=$n(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return Tg(e),t===null&&bd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,_d(r,s)?o=null:i!==null&&_d(r,i)&&(e.flags|=32),ey(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&bd(e),null;case 13:return ny(t,e,n);case 4:return Hh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),gm(t,e,r,s,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(pa,r._currentValue),r._currentValue=o,i!==null)if(hn(i.value,o)){if(i.children===s.children&&!Rt.current){e=$n(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Mn(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),wd(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(O(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}yt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ds(e,n),s=Xt(s),r=r(s),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,s=tn(r,e.pendingProps),s=tn(r.type,s),ym(t,e,r,s,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:tn(r,s),Vl(t,e),e.tag=1,jt(r)?(t=!0,da(e)):t=!1,Ds(e,n),Xg(e,r,s),Cd(e,r,s,n),Ed(null,e,r,!0,t,n);case 19:return ry(t,e,n);case 22:return Zg(t,e,n)}throw Error(O(156,e.tag))};function vy(t,e){return Y0(t,e)}function Kw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(t,e,n,r){return new Kw(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qw(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===Nh)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vs:return Gr(n.children,s,i,e);case kh:o=8,s|=8;break;case Gu:return t=Yt(12,n,e,s|2),t.elementType=Gu,t.lanes=i,t;case Xu:return t=Yt(13,n,e,s),t.elementType=Xu,t.lanes=i,t;case Ku:return t=Yt(19,n,e,s),t.elementType=Ku,t.lanes=i,t;case T0:return uc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E0:o=10;break e;case I0:o=9;break e;case Ch:o=11;break e;case Nh:o=14;break e;case rr:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=Yt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Gr(t,e,n,r){return t=Yt(7,t,r,e),t.lanes=n,t}function uc(t,e,n,r){return t=Yt(22,t,r,e),t.elementType=T0,t.lanes=n,t.stateNode={isHidden:!1},t}function gu(t,e,n){return t=Yt(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=Yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,s,i,o,l,c){return t=new Jw(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Yt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(i),t}function Zw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ys,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xy(t){if(!t)return Tr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(jt(n))return xg(t,n,e)}return e}function by(t,e,n,r,s,i,o,l,c){return t=lf(n,r,!0,t,s,i,o,l,c),t.context=xy(null),n=t.current,r=bt(),s=wr(n),i=Mn(r,s),i.callback=e??null,xr(n,i,s),t.current.lanes=s,$o(t,s,r),Pt(t,r),t}function dc(t,e,n,r){var s=e.current,i=bt(),o=wr(s);return n=xy(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=xr(s,e,o),t!==null&&(an(t,s,o,i),$l(t,s,o)),o}function Ca(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){Rm(t,e),(t=t.alternate)&&Rm(t,e)}function ek(){return null}var wy=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}hc.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));dc(t,e,null,null)};hc.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ts(function(){dc(null,t,null,null)}),e[Fn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Z0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&tg(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jm(){}function tk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Ca(o);i.call(u)}}var o=by(e,r,t,0,null,!1,!1,"",jm);return t._reactRootContainer=o,t[Fn]=o.current,mo(t.nodeType===8?t.parentNode:t),ts(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Ca(c);l.call(u)}}var c=lf(t,0,!1,null,null,!1,!1,"",jm);return t._reactRootContainer=c,t[Fn]=c.current,mo(t.nodeType===8?t.parentNode:t),ts(function(){dc(e,c,n,r)}),c}function pc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Ca(o);l.call(c)}}dc(e,o,t,s)}else o=tk(n,e,t,s,r);return Ca(o)}q0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(Ih(e,n|1),Pt(e,Fe()),!(ue&6)&&(Ks=Fe()+500,Dr()))}break;case 13:ts(function(){var r=Bn(t,1);if(r!==null){var s=bt();an(r,t,1,s)}}),af(t,1)}};Th=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=bt();an(e,t,134217728,n)}af(t,134217728)}};J0=function(t){if(t.tag===13){var e=wr(t),n=Bn(t,e);if(n!==null){var r=bt();an(n,t,e,r)}af(t,e)}};Z0=function(){return pe};eg=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};od=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=sc(r);if(!s)throw Error(O(90));j0(r),Zu(r,s)}}}break;case"textarea":A0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};F0=nf;B0=ts;var nk={usingClientEntryPoint:!1,Events:[Ho,ks,sc,U0,z0,nf]},Ti={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rk={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{ec=El.inject(rk),vn=El}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nk;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(O(200));return Zw(t,e,null,n)};Bt.createRoot=function(t,e){if(!uf(t))throw Error(O(299));var n=!1,r="",s=wy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,s),t[Fn]=e.current,mo(t.nodeType===8?t.parentNode:t),new cf(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return ts(t)};Bt.hydrate=function(t,e,n){if(!fc(e))throw Error(O(200));return pc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!uf(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=wy;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=by(e,null,t,1,n??null,s,!1,i,o),t[Fn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new hc(e)};Bt.render=function(t,e,n){if(!fc(e))throw Error(O(200));return pc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!fc(t))throw Error(O(40));return t._reactRootContainer?(ts(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Bt.unstable_batchedUpdates=nf;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fc(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return pc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function ky(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ky)}catch(t){console.error(t)}}ky(),k0.exports=Bt;var Rs=k0.exports,Pm=Rs;Yu.createRoot=Pm.createRoot,Yu.hydrateRoot=Pm.hydrateRoot;var sk=`svg[fill=none] {
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
}`,ik={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=sk,document.head.appendChild(t))}var be=ik,ok=({size:t=24})=>a.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),vu="__agentation_freeze";function lk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[vu]||(t[vu]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[vu]}var rt=lk();typeof window<"u"&&!rt.installed&&(rt.origSetTimeout=window.setTimeout.bind(window),rt.origSetInterval=window.setInterval.bind(window),rt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?rt.origSetTimeout(t,e):rt.origSetTimeout((...r)=>{rt.frozen?rt.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?rt.origSetInterval(t,e):rt.origSetInterval((...r)=>{rt.frozen||t(...r)},e,...n),window.requestAnimationFrame=t=>rt.origRAF(e=>{rt.frozen?rt.frozenRAFQueue.push(t):t(e)}),rt.installed=!0);var _s=rt.origSetTimeout;rt.origSetInterval;g.forwardRef(function({element:e,timestamp:n,selectedText:r,placeholder:s="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:c,onDelete:u,style:h,accentColor:d="#3c82f7",isExiting:f=!1,lightMode:m=!1,computedStyles:v},w){const[k,_]=g.useState(i),[p,y]=g.useState(!1),[b,x]=g.useState("initial"),[C,N]=g.useState(!1),[I,P]=g.useState(!1),S=g.useRef(null),E=g.useRef(null),R=g.useRef(null),M=g.useRef(null);g.useEffect(()=>{f&&b!=="exit"&&x("exit")},[f,b]),g.useEffect(()=>{_s(()=>{x("enter")},0);const U=_s(()=>{x("entered")},200),B=_s(()=>{const Y=S.current;Y&&(Y.focus(),Y.selectionStart=Y.selectionEnd=Y.value.length,Y.scrollTop=Y.scrollHeight)},50);return()=>{clearTimeout(U),clearTimeout(B),R.current&&clearTimeout(R.current),M.current&&clearTimeout(M.current)}},[]);const H=g.useCallback(()=>{M.current&&clearTimeout(M.current),y(!0),M.current=_s(()=>{var U;y(!1),(U=S.current)==null||U.focus()},250)},[]);g.useImperativeHandle(w,()=>({shake:H}),[H]);const K=g.useCallback(()=>{x("exit"),R.current=_s(()=>{c()},150)},[c]),te=g.useCallback(()=>{k.trim()&&l(k.trim())},[k,l]),se=g.useCallback(U=>{U.nativeEvent.isComposing||(U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),te()),U.key==="Escape"&&K())},[te,K]),D=[be.popup,m?be.light:"",b==="enter"?be.enter:"",b==="entered"?be.entered:"",b==="exit"?be.exit:"",p?be.shake:""].filter(Boolean).join(" ");return a.jsxs("div",{ref:E,className:D,"data-annotation-popup":!0,style:h,onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:be.header,children:[v&&Object.keys(v).length>0?a.jsxs("button",{className:be.headerToggle,onClick:()=>{const U=I;P(!I),U&&_s(()=>{var B;return(B=S.current)==null?void 0:B.focus()},0)},type:"button",children:[a.jsx("svg",{className:`${be.chevron} ${I?be.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a.jsx("span",{className:be.element,children:e})]}):a.jsx("span",{className:be.element,children:e}),n&&a.jsx("span",{className:be.timestamp,children:n})]}),v&&Object.keys(v).length>0&&a.jsx("div",{className:`${be.stylesWrapper} ${I?be.expanded:""}`,children:a.jsx("div",{className:be.stylesInner,children:a.jsx("div",{className:be.stylesBlock,children:Object.entries(v).map(([U,B])=>a.jsxs("div",{className:be.styleLine,children:[a.jsx("span",{className:be.styleProperty,children:U.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",a.jsx("span",{className:be.styleValue,children:B}),";"]},U))})})}),r&&a.jsxs("div",{className:be.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),a.jsx("textarea",{ref:S,className:be.textarea,style:{borderColor:C?d:void 0},placeholder:s,value:k,onChange:U=>_(U.target.value),onFocus:()=>N(!0),onBlur:()=>N(!1),rows:2,onKeyDown:se}),a.jsxs("div",{className:be.actions,children:[u&&a.jsx("div",{className:be.deleteWrapper,children:a.jsx("button",{className:be.deleteButton,onClick:u,type:"button",children:a.jsx(ok,{size:22})})}),a.jsx("button",{className:be.cancel,onClick:K,children:"Cancel"}),a.jsx("button",{className:be.submit,style:{backgroundColor:d,opacity:k.trim()?1:.4},onClick:te,disabled:!k.trim(),children:o})]})]})});var ak=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=ak,document.head.appendChild(t))}var Am={};/**
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
 */const Cy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const z=function(t,e){if(!t)throw ci(e)},ci=function(t){return new Error("Firebase Database ("+Cy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Ny=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ck=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,m=u&63;c||(m=64,o||(f=64)),r.push(n[h],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ny(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ck(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new uk;const f=i<<2|l>>4;if(r.push(f),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sy=function(t){const e=Ny(t);return df.encodeByteArray(e,!0)},Na=function(t){return Sy(t).replace(/\./g,"")},Sa=function(t){try{return df.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dk(t){return Ey(void 0,t)}function Ey(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hk(n)||(t[n]=Ey(t[n],e[n]));return t}function hk(t){return t!=="__proto__"}/**
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
 */function fk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pk=()=>fk().__FIREBASE_DEFAULTS__,mk=()=>{if(typeof process>"u"||typeof Am>"u")return;const t=Am.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_k=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Sa(t[1]);return e&&JSON.parse(e)},hf=()=>{try{return pk()||mk()||_k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iy=t=>{var e,n;return(n=(e=hf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ty=t=>{const e=Iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ry=()=>{var t;return(t=hf())===null||t===void 0?void 0:t.config},jy=t=>{var e;return(e=hf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Yo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Py(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Na(JSON.stringify(n)),Na(JSON.stringify(o)),""].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function gk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ay(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vk(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xk(){return Cy.NODE_ADMIN===!0}function bk(){try{return typeof indexedDB=="object"}catch{return!1}}function wk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const kk="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kk,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qo.prototype.create)}}class Qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ck(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,l,r)}}function Ck(t,e){return t.replace(Nk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nk=/\{\$([^}]+)}/g;/**
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
 */function Co(t){return JSON.parse(t)}function Xe(t){return JSON.stringify(t)}/**
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
 */const Ly=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Co(Sa(i[0])||""),n=Co(Sa(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Sk=function(t){const e=Ly(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ek=function(t){const e=Ly(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Nn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function qs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ea(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ia(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lm(i)&&Lm(o)){if(!Ia(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lm(t){return t!==null&&typeof t=="object"}/**
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
 */function ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Ik{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const f=(s<<5|s>>>27)+u+c+h+r[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Tk(t,e){const n=new Rk(t,e);return n.subscribe.bind(n)}class Rk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xu),s.error===void 0&&(s.error=xu),s.complete===void 0&&(s.complete=xu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xu(){}function mc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Pk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,z(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_c=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class Ak{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Yo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ok(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lk(t){return t===Fr?void 0:t}function Ok(t){return t.instantiationMode==="EAGER"}/**
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
 */class Dk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ak(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Mk={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},Uk=ge.INFO,zk={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Fk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=zk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pf{constructor(e){this.name=e,this._logLevel=Uk,this._logHandler=Fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Bk=(t,e)=>e.some(n=>t instanceof n);let Om,Dm;function $k(){return Om||(Om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wk(){return Dm||(Dm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oy=new WeakMap,Fd=new WeakMap,Dy=new WeakMap,bu=new WeakMap,mf=new WeakMap;function Hk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Cr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oy.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function Vk(t){if(Fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fd.set(t,e)}let Bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yk(t){Bd=t(Bd)}function Qk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wu(this),e,...n);return Dy.set(r,e.sort?e.sort():[e]),Cr(r)}:Wk().includes(t)?function(...e){return t.apply(wu(this),e),Cr(Oy.get(this))}:function(...e){return Cr(t.apply(wu(this),e))}}function Gk(t){return typeof t=="function"?Qk(t):(t instanceof IDBTransaction&&Vk(t),Bk(t,$k())?new Proxy(t,Bd):t)}function Cr(t){if(t instanceof IDBRequest)return Hk(t);if(bu.has(t))return bu.get(t);const e=Gk(t);return e!==t&&(bu.set(t,e),mf.set(e,t)),e}const wu=t=>mf.get(t);function Xk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Cr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Cr(o.result),c.oldVersion,c.newVersion,Cr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Kk=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],ku=new Map;function Mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ku.get(e))return ku.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kk.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return ku.set(e,i),i}Yk(t=>({...t,get:(e,n,r)=>Mm(e,n)||t.get(e,n,r),has:(e,n)=>!!Mm(e,n)||t.has(e,n)}));/**
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
 */class Jk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $d="@firebase/app",Um="0.10.13";/**
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
 */const Wn=new pf("@firebase/app"),e2="@firebase/app-compat",t2="@firebase/analytics-compat",n2="@firebase/analytics",r2="@firebase/app-check-compat",s2="@firebase/app-check",i2="@firebase/auth",o2="@firebase/auth-compat",l2="@firebase/database",a2="@firebase/data-connect",c2="@firebase/database-compat",u2="@firebase/functions",d2="@firebase/functions-compat",h2="@firebase/installations",f2="@firebase/installations-compat",p2="@firebase/messaging",m2="@firebase/messaging-compat",_2="@firebase/performance",g2="@firebase/performance-compat",y2="@firebase/remote-config",v2="@firebase/remote-config-compat",x2="@firebase/storage",b2="@firebase/storage-compat",w2="@firebase/firestore",k2="@firebase/vertexai-preview",C2="@firebase/firestore-compat",N2="firebase",S2="10.14.1";/**
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
 */const Wd="[DEFAULT]",E2={[$d]:"fire-core",[e2]:"fire-core-compat",[n2]:"fire-analytics",[t2]:"fire-analytics-compat",[s2]:"fire-app-check",[r2]:"fire-app-check-compat",[i2]:"fire-auth",[o2]:"fire-auth-compat",[l2]:"fire-rtdb",[a2]:"fire-data-connect",[c2]:"fire-rtdb-compat",[u2]:"fire-fn",[d2]:"fire-fn-compat",[h2]:"fire-iid",[f2]:"fire-iid-compat",[p2]:"fire-fcm",[m2]:"fire-fcm-compat",[_2]:"fire-perf",[g2]:"fire-perf-compat",[y2]:"fire-rc",[v2]:"fire-rc-compat",[x2]:"fire-gcs",[b2]:"fire-gcs-compat",[w2]:"fire-fst",[C2]:"fire-fst-compat",[k2]:"fire-vertex","fire-js":"fire-js",[N2]:"fire-js-all"};/**
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
 */const Ta=new Map,I2=new Map,Hd=new Map;function zm(t,e){try{t.container.addComponent(e)}catch(n){Wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ns(t){const e=t.name;if(Hd.has(e))return Wn.debug(`There were multiple attempts to register component ${e}.`),!1;Hd.set(e,t);for(const n of Ta.values())zm(n,t);for(const n of I2.values())zm(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t.settings!==void 0}/**
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
 */const T2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Qo("app","Firebase",T2);/**
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
 */class R2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=S2;function My(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=Ry()),!n)throw Nr.create("no-options");const i=Ta.get(s);if(i){if(Ia(n,i.options)&&Ia(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new Dk(s);for(const c of Hd.values())o.addComponent(c);const l=new R2(n,r,o);return Ta.set(s,l),l}function _f(t=Wd){const e=Ta.get(t);if(!e&&t===Wd&&Ry())return My();if(!e)throw Nr.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=E2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wn.warn(l.join(" "));return}ns(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const j2="firebase-heartbeat-database",P2=1,No="firebase-heartbeat-store";let Cu=null;function Uy(){return Cu||(Cu=Xk(j2,P2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Cu}async function A2(t){try{const n=(await Uy()).transaction(No),r=await n.objectStore(No).get(zy(t));return await n.done,r}catch(e){if(e instanceof Gn)Wn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wn.warn(n.message)}}}async function Fm(t,e){try{const r=(await Uy()).transaction(No,"readwrite");await r.objectStore(No).put(e,zy(t)),await r.done}catch(n){if(n instanceof Gn)Wn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wn.warn(r.message)}}}function zy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const L2=1024,O2=30*24*60*60*1e3;class D2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new U2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=O2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bm(),{heartbeatsToSend:r,unsentEntries:s}=M2(this._heartbeatsCache.heartbeats),i=Na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Wn.warn(n),""}}}function Bm(){return new Date().toISOString().substring(0,10)}function M2(t,e=L2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),$m(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$m(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class U2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bk()?wk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $m(t){return Na(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function z2(t){ns(new Rr("platform-logger",e=>new Jk(e),"PRIVATE")),ns(new Rr("heartbeat",e=>new D2(e),"PRIVATE")),bn($d,Um,t),bn($d,Um,"esm2017"),bn("fire-js","")}z2("");function gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Fy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F2=Fy,By=new Qo("auth","Firebase",Fy());/**
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
 */const Ra=new pf("@firebase/auth");function B2(t,...e){Ra.logLevel<=ge.WARN&&Ra.warn(`Auth (${us}): ${t}`,...e)}function Xl(t,...e){Ra.logLevel<=ge.ERROR&&Ra.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function kn(t,...e){throw vf(t,...e)}function cn(t,...e){return vf(t,...e)}function yf(t,e,n){const r=Object.assign(Object.assign({},F2()),{[e]:n});return new Qo("auth","Firebase",r).create(e,{appName:t.name})}function Xr(t){return yf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kn(t,"argument-error"),yf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return By.create(t,...e)}function Z(t,e,...n){if(!t)throw vf(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xl(e),new Error(e)}function Hn(t,e){t||An(e)}/**
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
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function W2(){return Wm()==="http:"||Wm()==="https:"}function Wm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function H2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(W2()||yk()||"connection"in navigator)?navigator.onLine:!0}function V2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=ff()||Ay()}get(){return H2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xf(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $y{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Y2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Q2=new Go(3e4,6e4);function bf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function di(t,e,n,r,s={}){return Wy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return gk()||(u.referrerPolicy="no-referrer"),$y.fetch()(Hy(t,t.config.apiHost,n,l),u)})}async function Wy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y2),e);try{const s=new X2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Il(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Il(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Il(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Il(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yf(t,h,u);kn(t,h)}}catch(s){if(s instanceof Gn)throw s;kn(t,"network-request-failed",{message:String(s)})}}async function G2(t,e,n,r,s={}){const i=await di(t,e,n,r,s);return"mfaPendingCredential"in i&&kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Hy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xf(t.config,s):`${t.config.apiScheme}://${s}`}class X2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),Q2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Il(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function K2(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function Vy(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q2(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=wf(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xi(Nu(s.auth_time)),issuedAtTime:Xi(Nu(s.iat)),expirationTime:Xi(Nu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nu(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Sa(n);return s?JSON.parse(s):(Xl("Failed to decode base64 JWT payload"),null)}catch(s){return Xl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hm(t){const e=wf(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function So(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&J2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Z2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await So(t,Vy(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yy(i.providerUserInfo):[],l=tC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Yd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function eC(t){const e=We(t);await ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yy(t){return t.map(e=>{var{providerId:n}=e,r=gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nC(t,e){const n=await Wy(t,{},async()=>{const r=ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Hy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$y.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rC(t,e){return di(t,"POST","/v2/accounts:revokeToken",bf(t,e))}/**
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
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Hm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function nr(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await So(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return q2(this,e)}reload(){return eC(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Xr(this.auth));const e=await this.getIdToken();return await So(this,K2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:b,isAnonymous:x,providerData:C,stsTokenManager:N}=n;Z(y&&N,e,"internal-error");const I=Us.fromJSON(this.name,N);Z(typeof y=="string",e,"internal-error"),nr(d,e.name),nr(f,e.name),Z(typeof b=="boolean",e,"internal-error"),Z(typeof x=="boolean",e,"internal-error"),nr(m,e.name),nr(v,e.name),nr(w,e.name),nr(k,e.name),nr(_,e.name),nr(p,e.name);const P=new Ln({uid:y,auth:e,email:f,emailVerified:b,displayName:d,isAnonymous:x,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:I,createdAt:_,lastLoginAt:p});return C&&Array.isArray(C)&&(P.providerData=C.map(S=>Object.assign({},S))),k&&(P._redirectEventId=k),P}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const c=new Ln({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Vm=new Map;function On(t){Hn(t instanceof Function,"Expected a class definition");let e=Vm.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vm.set(t,e),e)}/**
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
 */class Qy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qy.type="NONE";const Ym=Qy;/**
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
 */function Kl(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Kl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Kl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(On(Ym),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||On(Ym);const o=Kl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Ln._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zs(i,e,r))}}/**
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
 */function Qm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zy(e))return"Blackberry";if(ev(e))return"Webos";if(Xy(e))return"Safari";if((e.includes("chrome/")||Ky(e))&&!e.includes("edge/"))return"Chrome";if(Jy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gy(t=Ct()){return/firefox\//i.test(t)}function Xy(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ky(t=Ct()){return/crios\//i.test(t)}function qy(t=Ct()){return/iemobile/i.test(t)}function Jy(t=Ct()){return/android/i.test(t)}function Zy(t=Ct()){return/blackberry/i.test(t)}function ev(t=Ct()){return/webos/i.test(t)}function kf(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sC(t=Ct()){var e;return kf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iC(){return vk()&&document.documentMode===10}function tv(t=Ct()){return kf(t)||Jy(t)||ev(t)||Zy(t)||/windows phone/i.test(t)||qy(t)}/**
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
 */function nv(t,e=[]){let n;switch(t){case"Browser":n=Qm(Ct());break;case"Worker":n=`${Qm(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */class oC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function lC(t,e={}){return di(t,"GET","/v2/passwordPolicy",bf(t,e))}/**
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
 */const aC=6;class cC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class uC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gm(this),this.idTokenSubscription=new Gm(this),this.beforeStateQueue=new oC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vy(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Xr(this));const n=e?We(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lC(this),n=new cC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yc(t){return We(t)}class Gm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tk(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dC(t){Cf=t}function hC(t){return Cf.loadJS(t)}function fC(){return Cf.gapiScript}function pC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function mC(t,e){const n=gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ia(i,e??{}))return s;kn(s,"already-initialized")}return n.initialize({options:e})}function _C(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gC(t,e,n){const r=yc(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rv(e),{host:o,port:l}=yC(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),vC()}function rv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yC(t){const e=rv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xm(o)}}}function Xm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function Fs(t,e){return G2(t,"POST","/v1/accounts:signInWithIdp",bf(t,e))}/**
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
 */const xC="http://localhost";class rs extends sv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fs(e,n)}buildRequest(){const e={requestUri:xC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ui(n)}return e}}/**
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
 */class Nf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xo extends Nf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class cr extends Xo{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
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
 */class In extends Xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class ur extends Xo{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class dr extends Xo{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=Km(r);return new Js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Km(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Km(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pa extends Gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pa(e,n,r,s)}}function iv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,i,e,r):i})}async function bC(t,e,n=!1){const r=await So(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
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
 */async function wC(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(Xr(r));const s="reauthenticate";try{const i=await So(t,iv(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=wf(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),Js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),i}}/**
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
 */async function kC(t,e,n=!1){if(Pn(t.app))return Promise.reject(Xr(t));const r="signIn",s=await iv(t,r,e),i=await Js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function CC(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function NC(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function SC(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function EC(t){return We(t).signOut()}const Aa="__sak";/**
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
 */class ov{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const IC=1e3,TC=10;class lv extends ov{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lv.type="LOCAL";const RC=lv;/**
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
 */class av extends ov{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}av.type="SESSION";const cv=av;/**
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
 */function jC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await jC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vc.receivers=[];/**
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
 */function Sf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Sf("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function wn(){return window}function AC(t){wn().location.href=t}/**
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
 */function uv(){return typeof wn().WorkerGlobalScope<"u"&&typeof wn().importScripts=="function"}async function LC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DC(){return uv()?self:null}/**
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
 */const dv="firebaseLocalStorageDb",MC=1,La="firebaseLocalStorage",hv="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function UC(){const t=indexedDB.deleteDatabase(dv);return new Ko(t).toPromise()}function Qd(){const t=indexedDB.open(dv,MC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(La,{keyPath:hv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(La)?e(r):(r.close(),await UC(),e(await Qd()))})})}async function qm(t,e,n){const r=xc(t,!0).put({[hv]:e,value:n});return new Ko(r).toPromise()}async function zC(t,e){const n=xc(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Jm(t,e){const n=xc(t,!0).delete(e);return new Ko(n).toPromise()}const FC=800,BC=3;class fv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vc._getInstance(DC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LC(),!this.activeServiceWorker)return;this.sender=new PC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await qm(e,Aa,"1"),await Jm(e,Aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>zC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xc(s,!1).getAll();return new Ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fv.type="LOCAL";const $C=fv;new Go(3e4,6e4);/**
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
 */function pv(t,e){return e?On(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ef extends sv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WC(t){return kC(t.auth,new Ef(t),t.bypassAuthState)}function HC(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),wC(n,new Ef(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),bC(n,new Ef(t),t.bypassAuthState)}/**
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
 */class mv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return HC;default:kn(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YC=new Go(2e3,1e4);async function QC(t,e,n){if(Pn(t.app))return Promise.reject(cn(t,"operation-not-supported-in-this-environment"));const r=yc(t);$2(t,e,Nf);const s=pv(r,n);return new Vr(r,"signInViaPopup",e,s).executeNotNull()}class Vr extends mv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vr.currentPopupAction&&Vr.currentPopupAction.cancel(),Vr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}Vr.currentPopupAction=null;/**
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
 */const GC="pendingRedirect",ql=new Map;class XC extends mv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ql.get(this.auth._key());if(!e){try{const r=await KC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ql.set(this.auth._key(),e)}return this.bypassAuthState||ql.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(t,e){const n=ZC(e),r=JC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qC(t,e){ql.set(t._key(),e)}function JC(t){return On(t._redirectPersistence)}function ZC(t){return Kl(GC,t.config.apiKey,t.name)}async function eN(t,e,n=!1){if(Pn(t.app))return Promise.reject(Xr(t));const r=yc(t),s=pv(r,e),o=await new XC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tN=10*60*1e3;class nN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_v(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zm(e))}saveEventToCache(e){this.cachedEventUids.add(Zm(e)),this.lastProcessedEventTime=Date.now()}}function Zm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _v({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _v(t);default:return!1}}/**
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
 */async function sN(t,e={}){return di(t,"GET","/v1/projects",e)}/**
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
 */const iN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oN=/^https?/;async function lN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sN(t);for(const n of e)try{if(aN(n))return}catch{}kn(t,"unauthorized-domain")}function aN(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oN.test(n))return!1;if(iN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cN=new Go(3e4,6e4);function e_(){const t=wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uN(t){return new Promise((e,n)=>{var r,s,i;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(cn(t,"network-request-failed"))},timeout:cN.get()})}if(!((s=(r=wn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=wn().gapi)===null||i===void 0)&&i.load)o();else{const l=pC("iframefcb");return wn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},hC(`${fC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function dN(t){return Jl=Jl||uN(t),Jl}/**
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
 */const hN=new Go(5e3,15e3),fN="__/auth/iframe",pN="emulator/auth/iframe",mN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_N=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xf(e,pN):`https://${t.config.authDomain}/${fN}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=_N.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ui(r).slice(1)}`}async function yN(t){const e=await dN(t),n=wn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:gN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=wn().setTimeout(()=>{i(o)},hN.get());function c(){wn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xN=500,bN=600,wN="_blank",kN="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CN(t,e,n,r=xN,s=bN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},vN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ct().toLowerCase();n&&(l=Ky(u)?wN:n),Gy(u)&&(e=e||kN,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(sC(u)&&l!=="_self")return NN(e||"",l),new t_(null);const d=window.open(e||"",l,h);Z(d,t,"popup-blocked");try{d.focus()}catch{}return new t_(d)}function NN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SN="__/auth/handler",EN="emulator/auth/handler",IN=encodeURIComponent("fac");async function n_(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof Nf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Xo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${IN}=${encodeURIComponent(c)}`:"";return`${TN(t)}?${ui(l).slice(1)}${u}`}function TN({config:t}){return t.emulator?xf(t,EN):`https://${t.authDomain}/${SN}`}/**
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
 */const Su="webStorageSupport";class RN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=eN,this._overrideRedirectResult=qC}async _openPopup(e,n,r,s){var i;Hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,Vd(),s);return CN(e,o,Sf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await n_(e,n,r,Vd(),s);return AC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yN(e),r=new nN(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Su,{type:Su},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Su];o!==void 0&&n(!!o),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tv()||Xy()||kf()}}const jN=RN;var r_="@firebase/auth",s_="1.7.9";/**
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
 */class PN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LN(t){ns(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nv(t)},u=new uC(r,s,i,c);return _C(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ns(new Rr("auth-internal",e=>{const n=yc(e.getProvider("auth").getImmediate());return(r=>new PN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(r_,s_,AN(t)),bn(r_,s_,"esm2017")}/**
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
 */const ON=5*60,DN=jy("authIdTokenMaxAge")||ON;let i_=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DN)return;const s=n==null?void 0:n.token;i_!==s&&(i_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UN(t=_f()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mC(t,{popupRedirectResolver:jN,persistence:[$C,RC,cv]}),r=jy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=MN(i.toString());NC(n,o,()=>o(n.currentUser)),CC(n,l=>o(l))}}const s=Iy("auth");return s&&gC(n,`http://${s}`),n}function zN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LN("Browser");var o_={};const l_="@firebase/database",a_="1.0.8";/**
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
 */let gv="";function FN(t){gv=t}/**
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
 */class BN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class $N{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const yv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BN(e)}}catch{}return new $N},Yr=yv("localStorage"),WN=yv("sessionStorage");/**
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
 */const Bs=new pf("@firebase/database"),HN=function(){let t=1;return function(){return t++}}(),vv=function(t){const e=Pk(t),n=new Ik;n.update(e);const r=n.digest();return df.encodeByteArray(r)},qo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qo.apply(null,r):typeof r=="object"?e+=Xe(r):e+=r,e+=" "}return e};let Ki=null,c_=!0;const VN=function(t,e){z(!0,"Can't turn on custom loggers persistently."),Bs.logLevel=ge.VERBOSE,Ki=Bs.log.bind(Bs)},it=function(...t){if(c_===!0&&(c_=!1,Ki===null&&WN.get("logging_enabled")===!0&&VN()),Ki){const e=qo.apply(null,t);Ki(e)}},Jo=function(t){return function(...e){it(t,...e)}},Gd=function(...t){const e="FIREBASE INTERNAL ERROR: "+qo(...t);Bs.error(e)},Vn=function(...t){const e=`FIREBASE FATAL ERROR: ${qo(...t)}`;throw Bs.error(e),new Error(e)},wt=function(...t){const e="FIREBASE WARNING: "+qo(...t);Bs.warn(e)},YN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&wt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},If=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zs="[MIN_NAME]",ss="[MAX_NAME]",ds=function(t,e){if(t===e)return 0;if(t===Zs||e===ss)return-1;if(e===Zs||t===ss)return 1;{const n=u_(t),r=u_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GN=function(t,e){return t===e?0:t<e?-1:1},Ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Xe(e))},Tf=function(t){if(typeof t!="object"||t===null)return Xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Xe(e[r]),n+=":",n+=Tf(t[e[r]]);return n+="}",n},xv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function at(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const bv=function(t){z(!If(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let f=parseInt(h.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},XN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const JN=new RegExp("^-?(0*)\\d{1,10}$"),ZN=-2147483648,eS=2147483647,u_=function(t){if(JN.test(t)){const e=Number(t);if(e>=ZN&&e<=eS)return e}return null},hi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw wt("Exception was thrown by user callback.",n),e},Math.floor(0))}},tS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){wt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class rS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',wt(e)}}class Zl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zl.OWNER="owner";/**
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
 */const Rf="5",wv="v",kv="s",Cv="r",Nv="f",Sv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ev="ls",Iv="p",Xd="ac",Tv="websocket",Rv="long_polling";/**
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
 */class jv{constructor(e,n,r,s,i=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pv(t,e,n){z(typeof e=="string","typeof type must == string"),z(typeof n=="object","typeof params must == object");let r;if(e===Tv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Rv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sS(t)&&(n.ns=t.namespace);const s=[];return at(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class iS{constructor(){this.counters_={}}incrementCounter(e,n=1){Nn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dk(this.counters_)}}/**
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
 */const Eu={},Iu={};function jf(t){const e=t.toString();return Eu[e]||(Eu[e]=new iS),Eu[e]}function oS(t,e){const n=t.toString();return Iu[n]||(Iu[n]=e()),Iu[n]}/**
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
 */class lS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&hi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const d_="start",aS="close",cS="pLPCommand",uS="pRTLPCB",Av="id",Lv="pw",Ov="ser",dS="cb",hS="seg",fS="ts",pS="d",mS="dframe",Dv=1870,Mv=30,_S=Dv-Mv,gS=25e3,yS=3e4;class js{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Jo(e),this.stats_=jf(n),this.urlFn=c=>(this.appCheckToken&&(c[Xd]=this.appCheckToken),Pv(n,Rv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yS)),QN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pf((...i)=>{const[o,l,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===d_)this.id=l,this.password=c;else if(o===aS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[d_]="t",r[Ov]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wv]=Rf,this.transportSessionId&&(r[kv]=this.transportSessionId),this.lastSessionId&&(r[Ev]=this.lastSessionId),this.applicationId&&(r[Iv]=this.applicationId),this.appCheckToken&&(r[Xd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(r[Cv]=Nv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){js.forceAllow_=!0}static forceDisallow(){js.forceDisallow_=!0}static isAvailable(){return js.forceAllow_?!0:!js.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XN()&&!KN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sy(n),s=xv(r,_S);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mS]="t",r[Av]=e,r[Lv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HN(),window[cS+this.uniqueCallbackIdentifier]=e,window[uS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){it("frame writing exception"),l.stack&&it(l.stack),it(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Av]=this.myID,e[Lv]=this.myPW,e[Ov]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Mv+r.length<=Dv;){const o=this.pendingSegs.shift();r=r+"&"+hS+s+"="+o.seg+"&"+fS+s+"="+o.ts+"&"+pS+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(gS)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const vS=16384,xS=45e3;let Oa=null;typeof MozWebSocket<"u"?Oa=MozWebSocket:typeof WebSocket<"u"&&(Oa=WebSocket);class sn{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Jo(this.connId),this.stats_=jf(n),this.connURL=sn.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[wv]=Rf,typeof location<"u"&&location.hostname&&Sv.test(location.hostname)&&(o[Cv]=Nv),n&&(o[kv]=n),r&&(o[Ev]=r),s&&(o[Xd]=s),i&&(o[Iv]=i),Pv(e,Tv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{let r;xk(),this.mySock=new Oa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Oa!==null&&!sn.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||Yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Co(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(z(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xv(n,vS);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
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
 */class Eo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[js,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let r=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||wt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[sn];else{const s=this.transports_=[];for(const i of Eo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Eo.globalTransportInitialized_=!1;/**
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
 */const bS=6e4,wS=5e3,kS=10*1024,CS=100*1024,Tu="t",h_="d",NS="s",f_="r",SS="e",p_="o",m_="a",__="n",g_="p",ES="h";class IS{constructor(e,n,r,s,i,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Jo("c:"+this.id+":"),this.transportManager_=new Eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=qi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tu in e){const n=e[Tu];n===m_?this.upgradeIfSecondaryHealthy_():n===f_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===p_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ri("t",e),r=Ri("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:g_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:m_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:__,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ri("t",e),r=Ri("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ri(Tu,e);if(h_ in e){const r=e[h_];if(n===ES){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===__){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NS?this.onConnectionShutdown_(r):n===f_?this.onReset_(r):n===SS?Gd("Server Error: "+r):n===p_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rf!==r&&wt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:g_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Uv{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class zv{constructor(e){this.allowedEvents_=e,this.listeners_={},z(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){z(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Da extends zv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ff()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Da}getInitialEvent(e){return z(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const y_=32,v_=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ye("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function jr(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Af(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Io(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ye(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function xt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return xt(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function RS(t,e){const n=Io(t,0),r=Io(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=ds(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Lf(t,e){if(jr(t)!==jr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(jr(t)>jr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jS{constructor(e,n){this.errorPrefix_=n,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=_c(this.parts_[r]);Bv(this)}}function PS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=_c(e),Bv(t)}function AS(t){const e=t.parts_.pop();t.byteLength_-=_c(e),t.parts_.length>0&&(t.byteLength_-=1)}function Bv(t){if(t.byteLength_>v_)throw new Error(t.errorPrefix_+"has a key path longer than "+v_+" bytes ("+t.byteLength_+").");if(t.parts_.length>y_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+y_+") or object contains a cycle "+Br(t))}function Br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Of extends zv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Of}getInitialEvent(e){return z(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ji=1e3,LS=60*5*1e3,x_=30*1e3,OS=1.3,DS=3e4,MS="server_kill",b_=3;class Un extends Uv{constructor(e,n,r,s,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Un.nextPersistentConnectionId_++,this.log_=Jo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ji,this.maxReconnectDelay_=LS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Of.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Da.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Xe(i)),z(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Yo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),z(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Un.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nn(e,"w")){const r=qs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();wt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ek(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=x_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),z(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gd("Unrecognized action received from server: "+Xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){z(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DS&&(this.reconnectDelay_=ji),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*OS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Un.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,r())},u=function(d){z(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new IS(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{wt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(MS)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&wt(d),c())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zd(this.interruptReasons_)&&(this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Tf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=b_&&(this.reconnectDelay_=x_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=b_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+gv.replace(/\./g,"-")]=1,ff()?e["framework.cordova"]=1:Ay()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Da.getInstance().currentlyOnline();return zd(this.interruptReasons_)&&e}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class bc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Zs,e),s=new oe(Zs,n);return this.compare(r,s)!==0}minPost(){return oe.MIN}}/**
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
 */let Tl;class $v extends bc{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return ds(e.name,n.name)}isDefinedOn(e){throw ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ss,Tl)}makePost(e,n){return z(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Tl)}toString(){return".key"}}const $s=new $v;/**
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
 */class Rl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??Tt.EMPTY_NODE,this.right=i??Tt.EMPTY_NODE}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Tt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Tt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}et.RED=!0;et.BLACK=!1;class US{copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Tt{constructor(e,n=Tt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Tt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,et.BLACK,null,null))}remove(e){return new Tt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,et.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rl(this.root_,null,this.comparator_,!0,e)}}Tt.EMPTY_NODE=new US;/**
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
 */function zS(t,e){return ds(t.name,e.name)}function Df(t,e){return ds(t,e)}/**
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
 */let Kd;function FS(t){Kd=t}const Wv=function(t){return typeof t=="number"?"number:"+bv(t):"string:"+t},Hv=function(t){if(t.isLeafNode()){const e=t.val();z(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nn(e,".sv"),"Priority must be a string or number.")}else z(t===Kd||t.isEmpty(),"priority of unexpected type.");z(t===Kd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let w_;class Je{constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,z(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hv(this.priorityNode_)}static set __childrenNodeConstructor(e){w_=e}static get __childrenNodeConstructor(){return w_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(z(r!==".priority"||jr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=bv(this.value_):e+=this.value_,this.lazyHash_=vv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(z(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Je.VALUE_TYPE_ORDER.indexOf(n),i=Je.VALUE_TYPE_ORDER.indexOf(r);return z(s>=0,"Unknown leaf type: "+n),z(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vv,Yv;function BS(t){Vv=t}function $S(t){Yv=t}class WS extends bc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ds(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ss,new Je("[PRIORITY-POST]",Yv))}makePost(e,n){const r=Vv(e);return new oe(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const De=new WS;/**
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
 */const HS=Math.log(2);class VS{constructor(e){const n=i=>parseInt(Math.log(i)/HS,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ma=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let d,f;if(h===0)return null;if(h===1)return d=t[c],f=n?n(d):d,new et(f,d.node,et.BLACK,null,null);{const m=parseInt(h/2,10)+c,v=s(c,m),w=s(m+1,u);return d=t[m],f=n?n(d):d,new et(f,d.node,et.BLACK,v,w)}},i=function(c){let u=null,h=null,d=t.length;const f=function(v,w){const k=d-v,_=d;d-=v;const p=s(k+1,_),y=t[k],b=n?n(y):y;m(new et(b,y.node,w,null,p))},m=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<c.count;++v){const w=c.nextBitIsOne(),k=Math.pow(2,c.count-(v+1));w?f(k,et.BLACK):(f(k,et.BLACK),f(k,et.RED))}return h},o=new VS(t.length),l=i(o);return new Tt(r||e,l)};/**
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
 */let Ru;const gs={};class Dn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return z(gs&&De,"ChildrenNode.ts has not been loaded"),Ru=Ru||new Dn({".priority":gs},{".priority":De}),Ru}get(e){const n=qs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Tt?n:null}hasIndex(e){return Nn(this.indexSet_,e.toString())}addIndex(e,n){z(e!==$s,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(oe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=Ma(r,e.getCompare()):l=gs;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new Dn(h,u)}addToIndexes(e,n){const r=Ea(this.indexes_,(s,i)=>{const o=qs(this.indexSet_,i);if(z(o,"Missing index implementation for "+i),s===gs)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(oe.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Ma(l,o.getCompare())}else return gs;else{const l=n.get(e.name);let c=s;return l&&(c=c.remove(new oe(e.name,l))),c.insert(e,e.node)}});return new Dn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ea(this.indexes_,s=>{if(s===gs)return s;{const i=n.get(e.name);return i?s.remove(new oe(e.name,i)):s}});return new Dn(r,this.indexSet_)}}/**
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
 */let Pi;class X{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Hv(this.priorityNode_),this.children_.isEmpty()&&z(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pi||(Pi=new X(new Tt(Df),null,Dn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(z(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Pi:this.priorityNode_;return new X(s,o,i)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{z(ie(e)!==".priority"||jr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ke(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(De,(o,l)=>{n[o]=l.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wv(this.getPriority().val())+":"),this.forEachChild(De,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":vv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new oe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zo?-1:0}withIndex(e){if(e===$s||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===$s||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(De),s=n.getIterator(De);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===$s?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YS extends X{constructor(){super(new Tt(Df),X.EMPTY_NODE,Dn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Zo=new YS;Object.defineProperties(oe,{MIN:{value:new oe(Zs,X.EMPTY_NODE)},MAX:{value:new oe(ss,Zo)}});$v.__EMPTY_NODE=X.EMPTY_NODE;Je.__childrenNodeConstructor=X;FS(Zo);$S(Zo);/**
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
 */const QS=!0;function Ge(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),z(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,Ge(e))}if(!(t instanceof Array)&&QS){const n=[];let r=!1;if(at(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ge(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new oe(o,c)))}}),n.length===0)return X.EMPTY_NODE;const i=Ma(n,zS,o=>o.name,Df);if(r){const o=Ma(n,De.getCompare());return new X(i,Ge(e),new Dn({".priority":o},{".priority":De}))}else return new X(i,Ge(e),Dn.Default)}else{let n=X.EMPTY_NODE;return at(t,(r,s)=>{if(Nn(t,r)&&r.substring(0,1)!=="."){const i=Ge(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ge(e))}}BS(Ge);/**
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
 */class GS extends bc{constructor(e){super(),this.indexPath_=e,z(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ds(e.name,n.name):i}makePost(e,n){const r=Ge(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Zo);return new oe(ss,e)}toString(){return Io(this.indexPath_,0).join("/")}}/**
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
 */class XS extends bc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ds(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=Ge(e);return new oe(n,r)}toString(){return".value"}}const KS=new XS;/**
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
 */function Qv(t){return{type:"value",snapshotNode:t}}function ei(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function To(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Mf{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){z(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(To(n,l)):z(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ei(n,r)):o.trackChildChange(Ro(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(De,(s,i)=>{n.hasChild(s)||r.trackChildChange(To(s,i))}),n.isLeafNode()||n.forEachChild(De,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ro(s,i,o))}else r.trackChildChange(ei(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class jo{constructor(e){this.indexedFilter_=new Mf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=jo.getStartPost_(e),this.endPost_=jo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new oe(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(De,(o,l)=>{i.matches(new oe(o,l))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class JS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new jo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new oe(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const l=e;z(l.numChildren()===this.limit_,"");const c=new oe(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,c);if(h&&!r.isEmpty()&&m>=0)return i!=null&&i.trackChildChange(Ro(n,r,d)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(To(n,d));const w=l.updateImmediateChild(n,X.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(ei(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(To(u.name,u.node)),i.trackChildChange(ei(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
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
 */class Uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return z(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return z(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zs}hasEnd(){return this.endSet_}getIndexEndValue(){return z(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return z(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ss}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return z(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Uf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZS(t){return t.loadsAllData()?new Mf(t.getIndex()):t.hasLimit()?new JS(t):new jo(t)}function k_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===De?n="$priority":t.index_===KS?n="$value":t.index_===$s?n="$key":(z(t.index_ instanceof GS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function C_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==De&&(e.i=t.index_.toString()),e}/**
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
 */class Ua extends Uv{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Jo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(z(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ua.getListenId_(e,r),l={};this.listens_[o]=l;const c=k_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),qs(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=Ua.getListenId_(e,n);delete this.listens_[r]}get(e){const n=k_(e._queryParams),r=e._path.toString(),s=new Yo;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ui(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Co(l.responseText)}catch{wt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&wt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class eE{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function za(){return{value:null,children:new Map}}function Gv(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,za());const s=t.children.get(r);e=ke(e),Gv(s,e,n)}}function qd(t,e,n){t.value!==null?n(e,t.value):tE(t,(r,s)=>{const i=new ye(e.toString()+"/"+r);qd(s,i,n)})}function tE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class nE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&at(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const N_=10*1e3,rE=30*1e3,sE=5*60*1e3;class iE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nE(e);const r=N_+(rE-N_)*Math.random();qi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;at(e,(s,i)=>{i>0&&Nn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),qi(this.reportStats_.bind(this),Math.floor(Math.random()*2*sE))}}/**
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
 */var on;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(on||(on={}));function zf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ff(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=on.ACK_USER_WRITE,this.source=zf()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return z(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Fa(de(),n,this.revert)}}else return z(ie(this.path)===e,"operationForChild called for unrelated child."),new Fa(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Po{constructor(e,n){this.source=e,this.path=n,this.type=on.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Po(this.source,de()):new Po(this.source,ke(this.path))}}/**
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
 */class is{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=on.OVERWRITE}operationForChild(e){return le(this.path)?new is(this.source,de(),this.snap.getImmediateChild(e)):new is(this.source,ke(this.path),this.snap)}}/**
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
 */class ti{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=on.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new is(this.source,de(),n.value):new ti(this.source,de(),n)}else return z(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ti(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class oE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lE(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qS(o.childName,o.snapshotNode))}),Ai(t,s,"child_removed",e,r,n),Ai(t,s,"child_added",e,r,n),Ai(t,s,"child_moved",i,r,n),Ai(t,s,"child_changed",e,r,n),Ai(t,s,"value",e,r,n),s}function Ai(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,c)=>cE(t,l,c)),o.forEach(l=>{const c=aE(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function aE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cE(t,e,n){if(e.childName==null||n.childName==null)throw ci("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),s=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function wc(t,e){return{eventCache:t,serverCache:e}}function Ji(t,e,n,r){return wc(new Pr(e,n,r),t.serverCache)}function Xv(t,e,n,r){return wc(t.eventCache,new Pr(e,n,r))}function Ba(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function os(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ju;const uE=()=>(ju||(ju=new Tt(GN)),ju);class we{constructor(e,n=uE()){this.value=e,this.children=n}static fromObject(e){let n=new we(null);return at(e,(r,s)=>{n=n.set(new ye(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(le(e))return null;{const r=ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ke(e),n);return i!=null?{path:Oe(new ye(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ke(e)):new we(null)}}set(e,n){if(le(e))return new we(n,this.children);{const r=ie(e),i=(this.children.get(r)||new we(null)).set(ke(e),n),o=this.children.insert(r,i);return new we(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const s=r.remove(ke(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new we(null):new we(this.value,i)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ke(e)):null}}setTree(e,n){if(le(e))return n;{const r=ie(e),i=(this.children.get(r)||new we(null)).setTree(ke(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new we(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Oe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(le(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(ke(e),Oe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const s=ie(e),i=this.children.get(s);return i?i.foreachOnPath_(ke(e),Oe(n,s),r):new we(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new we(null))}}function Zi(t,e,n){if(le(e))return new un(new we(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=xt(s,e);return i=i.updateChild(o,n),new un(t.writeTree_.set(s,i))}else{const s=new we(n),i=t.writeTree_.setTree(e,s);return new un(i)}}}function Jd(t,e,n){let r=t;return at(n,(s,i)=>{r=Zi(r,Oe(e,s),i)}),r}function S_(t,e){if(le(e))return un.empty();{const n=t.writeTree_.setTree(e,new we(null));return new un(n)}}function Zd(t,e){return hs(t,e)!=null}function hs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xt(n.path,e)):null}function E_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(r,s)=>{e.push(new oe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new oe(r,s.value))}),e}function Sr(t,e){if(le(e))return t;{const n=hs(t,e);return n!=null?new un(new we(n)):new un(t.writeTree_.subtree(e))}}function eh(t){return t.writeTree_.isEmpty()}function ni(t,e){return Kv(de(),t.writeTree_,e)}function Kv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(z(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Kv(Oe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Oe(t,".priority"),r)),n}}/**
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
 */function kc(t,e){return ex(e,t)}function dE(t,e,n,r,s){z(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=r}function hE(t,e,n,r){z(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Jd(t.visibleWrites,e,n),t.lastWriteId=r}function fE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function pE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);z(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&mE(l,r.path)?s=!1:Qt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return _E(t),!0;if(r.snap)t.visibleWrites=S_(t.visibleWrites,r.path);else{const l=r.children;at(l,c=>{t.visibleWrites=S_(t.visibleWrites,Oe(r.path,c))})}return!0}else return!1}function mE(t,e){if(t.snap)return Qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qt(Oe(t.path,n),e))return!0;return!1}function _E(t){t.visibleWrites=qv(t.allWrites,gE,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gE(t){return t.visible}function qv(t,e,n){let r=un.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Qt(n,o)?(l=xt(n,o),r=Zi(r,l,i.snap)):Qt(o,n)&&(l=xt(o,n),r=Zi(r,de(),i.snap.getChild(l)));else if(i.children){if(Qt(n,o))l=xt(n,o),r=Jd(r,l,i.children);else if(Qt(o,n))if(l=xt(o,n),le(l))r=Jd(r,de(),i.children);else{const c=qs(i.children,ie(l));if(c){const u=c.getChild(ke(l));r=Zi(r,de(),u)}}}else throw ci("WriteRecord should have .snap or .children")}}return r}function Jv(t,e,n,r,s){if(!r&&!s){const i=hs(t.visibleWrites,e);if(i!=null)return i;{const o=Sr(t.visibleWrites,e);if(eh(o))return n;if(n==null&&!Zd(o,de()))return null;{const l=n||X.EMPTY_NODE;return ni(o,l)}}}else{const i=Sr(t.visibleWrites,e);if(!s&&eh(i))return n;if(!s&&n==null&&!Zd(i,de()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Qt(u.path,e)||Qt(e,u.path))},l=qv(t.allWrites,o,e),c=n||X.EMPTY_NODE;return ni(l,c)}}}function yE(t,e,n){let r=X.EMPTY_NODE;const s=hs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(De,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Sr(t.visibleWrites,e);return n.forEachChild(De,(o,l)=>{const c=ni(Sr(i,new ye(o)),l);r=r.updateImmediateChild(o,c)}),E_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Sr(t.visibleWrites,e);return E_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function vE(t,e,n,r,s){z(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Oe(e,n);if(Zd(t.visibleWrites,i))return null;{const o=Sr(t.visibleWrites,i);return eh(o)?s.getChild(n):ni(o,s.getChild(n))}}function xE(t,e,n,r){const s=Oe(e,n),i=hs(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Sr(t.visibleWrites,s);return ni(o,r.getNode().getImmediateChild(n))}else return null}function bE(t,e){return hs(t.visibleWrites,e)}function wE(t,e,n,r,s,i,o){let l;const c=Sr(t.visibleWrites,e),u=hs(c,de());if(u!=null)l=u;else if(n!=null)l=ni(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=f.getNext();for(;m&&h.length<s;)d(m,r)!==0&&h.push(m),m=f.getNext();return h}else return[]}function kE(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function $a(t,e,n,r){return Jv(t.writeTree,t.treePath,e,n,r)}function $f(t,e){return yE(t.writeTree,t.treePath,e)}function I_(t,e,n,r){return vE(t.writeTree,t.treePath,e,n,r)}function Wa(t,e){return bE(t.writeTree,Oe(t.treePath,e))}function CE(t,e,n,r,s,i){return wE(t.writeTree,t.treePath,e,n,r,s,i)}function Wf(t,e,n){return xE(t.writeTree,t.treePath,e,n)}function Zv(t,e){return ex(Oe(t.treePath,e),t.writeTree)}function ex(t,e){return{treePath:t,writeTree:e}}/**
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
 */class NE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;z(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),z(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ro(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,To(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ei(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ro(r,e.snapshotNode,s.oldSnap));else throw ci("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class SE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tx=new SE;class Hf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:os(this.viewCache_),i=CE(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function EE(t){return{filter:t}}function IE(t,e){z(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),z(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TE(t,e,n,r,s){const i=new NE;let o,l;if(n.type===on.OVERWRITE){const u=n;u.source.fromUser?o=th(t,e,u.path,u.snap,r,s,i):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=Ha(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===on.MERGE){const u=n;u.source.fromUser?o=jE(t,e,u.path,u.children,r,s,i):(z(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=nh(t,e,u.path,u.children,r,s,l,i))}else if(n.type===on.ACK_USER_WRITE){const u=n;u.revert?o=LE(t,e,u.path,r,s,i):o=PE(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===on.LISTEN_COMPLETE)o=AE(t,e,n.path,r,i);else throw ci("Unknown operation type: "+n.type);const c=i.getChanges();return RE(e,o,c),{viewCache:o,changes:c}}function RE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Ba(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Qv(Ba(e)))}}function nx(t,e,n,r,s,i){const o=e.eventCache;if(Wa(r,n)!=null)return e;{let l,c;if(le(n))if(z(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=os(e),h=u instanceof X?u:X.EMPTY_NODE,d=$f(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=$a(r,os(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ie(n);if(u===".priority"){z(jr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=I_(r,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=ke(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const f=I_(r,n,o.getNode(),c);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Wf(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,s,i):l=o.getNode()}}return Ji(e,l,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Ha(t,e,n,r,s,i,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),m,null)}else{const m=ie(n);if(!c.isCompleteForPath(n)&&jr(n)>1)return e;const v=ke(n),k=c.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=h.updatePriority(c.getNode(),k):u=h.updateChild(c.getNode(),m,k,v,tx,null)}const d=Xv(e,u,c.isFullyInitialized()||le(n),h.filtersNodes()),f=new Hf(s,d,i);return nx(t,d,n,s,f,l)}function th(t,e,n,r,s,i,o){const l=e.eventCache;let c,u;const h=new Hf(s,e,i);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Ji(e,u,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=Ji(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=ke(n),m=l.getNode().getImmediateChild(d);let v;if(le(f))v=r;else{const w=h.getCompleteChild(d);w!=null?Af(f)===".priority"&&w.getChild(Fv(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=X.EMPTY_NODE}if(m.equals(v))c=e;else{const w=t.filter.updateChild(l.getNode(),d,v,f,h,o);c=Ji(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function T_(t,e){return t.eventCache.isCompleteForChild(e)}function jE(t,e,n,r,s,i,o){let l=e;return r.foreach((c,u)=>{const h=Oe(n,c);T_(e,ie(h))&&(l=th(t,l,h,u,s,i,o))}),r.foreach((c,u)=>{const h=Oe(n,c);T_(e,ie(h))||(l=th(t,l,h,u,s,i,o))}),l}function R_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function nh(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;le(n)?u=r:u=new we(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=R_(t,m,f);c=Ha(t,c,new ye(d),v,s,i,o,l)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),w=R_(t,v,f);c=Ha(t,c,new ye(d),w,s,i,o,l)}}),c}function PE(t,e,n,r,s,i,o){if(Wa(s,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(le(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ha(t,e,n,c.getNode().getChild(n),s,i,l,o);if(le(n)){let u=new we(null);return c.getNode().forEachChild($s,(h,d)=>{u=u.set(new ye(h),d)}),nh(t,e,n,u,s,i,l,o)}else return e}else{let u=new we(null);return r.foreach((h,d)=>{const f=Oe(n,h);c.isCompleteForPath(f)&&(u=u.set(h,c.getNode().getChild(f)))}),nh(t,e,n,u,s,i,l,o)}}function AE(t,e,n,r,s){const i=e.serverCache,o=Xv(e,i.getNode(),i.isFullyInitialized()||le(n),i.isFiltered());return nx(t,o,n,r,tx,s)}function LE(t,e,n,r,s,i){let o;if(Wa(r,n)!=null)return e;{const l=new Hf(r,e,s),c=e.eventCache.getNode();let u;if(le(n)||ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=$a(r,os(e));else{const d=e.serverCache.getNode();z(d instanceof X,"serverChildren would be complete if leaf node"),h=$f(r,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=ie(n);let d=Wf(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,ke(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,X.EMPTY_NODE,ke(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$a(r,os(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Wa(r,de())!=null,Ji(e,u,o,t.filter.filtersNodes())}}/**
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
 */class OE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Mf(r.getIndex()),i=ZS(r);this.processor_=EE(i);const o=n.serverCache,l=n.eventCache,c=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(X.EMPTY_NODE,l.getNode(),null),h=new Pr(c,o.isFullyInitialized(),s.filtersNodes()),d=new Pr(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=wc(d,h),this.eventGenerator_=new oE(this.query_)}get query(){return this.query_}}function DE(t){return t.viewCache_.serverCache.getNode()}function ME(t){return Ba(t.viewCache_)}function UE(t,e){const n=os(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function j_(t){return t.eventRegistrations_.length===0}function zE(t,e){t.eventRegistrations_.push(e)}function P_(t,e,n){const r=[];if(n){z(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function A_(t,e,n,r){e.type===on.MERGE&&e.source.queryId!==null&&(z(os(t.viewCache_),"We should always have a full cache before handling merges"),z(Ba(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=TE(t.processor_,s,e,n,r);return IE(t.processor_,i.viewCache),z(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,rx(t,i.changes,i.viewCache.eventCache.getNode(),null)}function FE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(i,o)=>{r.push(ei(i,o))}),n.isFullyInitialized()&&r.push(Qv(n.getNode())),rx(t,r,n.getNode(),e)}function rx(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return lE(t.eventGenerator_,e,n,s)}/**
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
 */let Va;class sx{constructor(){this.views=new Map}}function BE(t){z(!Va,"__referenceConstructor has already been defined"),Va=t}function $E(){return z(Va,"Reference.ts has not been loaded"),Va}function WE(t){return t.views.size===0}function Vf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return z(i!=null,"SyncTree gave us an op for an invalid query."),A_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(A_(o,e,n,r));return i}}function ix(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=$a(n,s?r:null),c=!1;l?c=!0:r instanceof X?(l=$f(n,r),c=!1):(l=X.EMPTY_NODE,c=!1);const u=wc(new Pr(l,c,!1),new Pr(r,s,!1));return new OE(e,u)}return o}function HE(t,e,n,r,s,i){const o=ix(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),zE(o,n),FE(o,n)}function VE(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Ar(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(P_(u,n,r)),j_(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(P_(c,n,r)),j_(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return l&&!Ar(t)&&i.push(new($E())(e._repo,e._path)),{removed:i,events:o}}function ox(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Er(t,e){let n=null;for(const r of t.views.values())n=n||UE(r,e);return n}function lx(t,e){if(e._queryParams.loadsAllData())return Cc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ax(t,e){return lx(t,e)!=null}function Ar(t){return Cc(t)!=null}function Cc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ya;function YE(t){z(!Ya,"__referenceConstructor has already been defined"),Ya=t}function QE(){return z(Ya,"Reference.ts has not been loaded"),Ya}let GE=1;class L_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=kE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function cx(t,e,n,r,s){return dE(t.pendingWriteTree_,e,n,r,s),s?fi(t,new is(zf(),e,n)):[]}function XE(t,e,n,r){hE(t.pendingWriteTree_,e,n,r);const s=we.fromObject(n);return fi(t,new ti(zf(),e,s))}function mr(t,e,n=!1){const r=fE(t.pendingWriteTree_,e);if(pE(t.pendingWriteTree_,e)){let i=new we(null);return r.snap!=null?i=i.set(de(),!0):at(r.children,o=>{i=i.set(new ye(o),!0)}),fi(t,new Fa(r.path,i,n))}else return[]}function el(t,e,n){return fi(t,new is(Ff(),e,n))}function KE(t,e,n){const r=we.fromObject(n);return fi(t,new ti(Ff(),e,r))}function qE(t,e){return fi(t,new Po(Ff(),e))}function JE(t,e,n){const r=Qf(t,n);if(r){const s=Gf(r),i=s.path,o=s.queryId,l=xt(i,e),c=new Po(Bf(o),l);return Xf(t,i,c)}else return[]}function Qa(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||ax(o,e))){const c=VE(o,e,n,r);WE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(l=c.events,!s){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,m)=>Ar(m));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const m=tI(f);for(let v=0;v<m.length;++v){const w=m[v],k=w.query,_=fx(t,w);t.listenProvider_.startListening(eo(k),Ao(t,k),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(eo(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Nc(f));t.listenProvider_.stopListening(eo(f),m)}))}nI(t,u)}return l}function ux(t,e,n,r){const s=Qf(t,r);if(s!=null){const i=Gf(s),o=i.path,l=i.queryId,c=xt(o,e),u=new is(Bf(l),c,n);return Xf(t,o,u)}else return[]}function ZE(t,e,n,r){const s=Qf(t,r);if(s){const i=Gf(s),o=i.path,l=i.queryId,c=xt(o,e),u=we.fromObject(n),h=new ti(Bf(l),c,u);return Xf(t,o,h)}else return[]}function rh(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,m)=>{const v=xt(f,s);i=i||Er(m,v),o=o||Ar(m)});let l=t.syncPointTree_.get(s);l?(o=o||Ar(l),i=i||Er(l,de())):(l=new sx,t.syncPointTree_=t.syncPointTree_.set(s,l));let c;i!=null?c=!0:(c=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((m,v)=>{const w=Er(v,de());w&&(i=i.updateImmediateChild(m,w))}));const u=ax(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Nc(e);z(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=rI();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const h=kc(t.pendingWriteTree_,s);let d=HE(l,e,n,h,i,c);if(!u&&!o&&!r){const f=lx(l,e);d=d.concat(sI(t,e,f))}return d}function Yf(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=xt(o,e),u=Er(l,c);if(u)return u});return Jv(s,e,i,n,!0)}function eI(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const d=xt(u,n);r=r||Er(h,d)});let s=t.syncPointTree_.get(n);s?r=r||Er(s,de()):(s=new sx,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Pr(r,!0,!1):null,l=kc(t.pendingWriteTree_,e._path),c=ix(s,e,l,i?o.getNode():X.EMPTY_NODE,i);return ME(c)}function fi(t,e){return dx(e,t.syncPointTree_,null,kc(t.pendingWriteTree_,de()))}function dx(t,e,n,r){if(le(t.path))return hx(t,e,n,r);{const s=e.get(de());n==null&&s!=null&&(n=Er(s,de()));let i=[];const o=ie(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=Zv(r,o);i=i.concat(dx(l,c,u,h))}return s&&(i=i.concat(Vf(s,t,r,n))),i}}function hx(t,e,n,r){const s=e.get(de());n==null&&s!=null&&(n=Er(s,de()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=Zv(r,o),h=t.operationForChild(o);h&&(i=i.concat(hx(h,l,c,u)))}),s&&(i=i.concat(Vf(s,t,r,n))),i}function fx(t,e){const n=e.query,r=Ao(t,n);return{hashFn:()=>(DE(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?JE(t,n._path,r):qE(t,n._path);{const i=qN(s,n);return Qa(t,n,null,i)}}}}function Ao(t,e){const n=Nc(e);return t.queryToTagMap.get(n)}function Nc(t){return t._path.toString()+"$"+t._queryIdentifier}function Qf(t,e){return t.tagToQueryMap.get(e)}function Gf(t){const e=t.indexOf("$");return z(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Xf(t,e,n){const r=t.syncPointTree_.get(e);z(r,"Missing sync point for query tag that we're tracking");const s=kc(t.pendingWriteTree_,e);return Vf(r,n,s,null)}function tI(t){return t.fold((e,n,r)=>{if(n&&Ar(n))return[Cc(n)];{let s=[];return n&&(s=ox(n)),at(r,(i,o)=>{s=s.concat(o)}),s}})}function eo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QE())(t._repo,t._path):t}function nI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Nc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function rI(){return GE++}function sI(t,e,n){const r=e._path,s=Ao(t,e),i=fx(t,n),o=t.listenProvider_.startListening(eo(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)z(!Ar(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,h,d)=>{if(!le(u)&&h&&Ar(h))return[Cc(h).query];{let f=[];return h&&(f=f.concat(ox(h).map(m=>m.query))),at(d,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(eo(h),Ao(t,h))}}return o}/**
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
 */class Kf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kf(n)}node(){return this.node_}}class qf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Oe(this.path_,e);return new qf(this.syncTree_,n)}node(){return Yf(this.syncTree_,this.path_)}}const iI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},O_=function(t,e,n){if(!t||typeof t!="object")return t;if(z(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return oI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lI(t[".sv"],e);z(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},oI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:z(!1,"Unexpected server value: "+t)}},lI=function(t,e,n){t.hasOwnProperty("increment")||z(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&z(!1,"Unexpected increment value: "+r);const s=e.node();if(z(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},px=function(t,e,n,r){return Jf(e,new qf(n,t),r)},mx=function(t,e,n){return Jf(t,new Kf(e),n)};function Jf(t,e,n){const r=t.getPriority().val(),s=O_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=O_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Je(l,Ge(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Je(s))),o.forEachChild(De,(l,c)=>{const u=Jf(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
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
 */class Zf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ep(t,e){let n=e instanceof ye?e:new ye(e),r=t,s=ie(n);for(;s!==null;){const i=qs(r.node.children,s)||{children:{},childCount:0};r=new Zf(s,r,i),n=ke(n),s=ie(n)}return r}function pi(t){return t.node.value}function _x(t,e){t.node.value=e,sh(t)}function gx(t){return t.node.childCount>0}function aI(t){return pi(t)===void 0&&!gx(t)}function Sc(t,e){at(t.node.children,(n,r)=>{e(new Zf(n,t,r))})}function yx(t,e,n,r){n&&e(t),Sc(t,s=>{yx(s,e,!0)})}function cI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tl(t){return new ye(t.parent===null?t.name:tl(t.parent)+"/"+t.name)}function sh(t){t.parent!==null&&uI(t.parent,t.name,t)}function uI(t,e,n){const r=aI(n),s=Nn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,sh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,sh(t))}/**
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
 */const dI=/[\[\].#$\/\u0000-\u001F\u007F]/,hI=/[\[\].#$\u0000-\u001F\u007F]/,Pu=10*1024*1024,tp=function(t){return typeof t=="string"&&t.length!==0&&!dI.test(t)},vx=function(t){return typeof t=="string"&&t.length!==0&&!hI.test(t)},fI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vx(t)},pI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!If(t)||t&&typeof t=="object"&&Nn(t,".sv")},xx=function(t,e,n,r){r&&e===void 0||Ec(mc(t,"value"),e,n)},Ec=function(t,e,n){const r=n instanceof ye?new jS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Br(r));if(typeof e=="function")throw new Error(t+"contains a function "+Br(r)+" with contents = "+e.toString());if(If(e))throw new Error(t+"contains "+e.toString()+" "+Br(r));if(typeof e=="string"&&e.length>Pu/3&&_c(e)>Pu)throw new Error(t+"contains a string greater than "+Pu+" utf8 bytes "+Br(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(at(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!tp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Br(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PS(r,o),Ec(t,l,r),AS(r)}),s&&i)throw new Error(t+' contains ".value" child '+Br(r)+" in addition to actual children.")}},mI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Io(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!tp(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(RS);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Qt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},_I=function(t,e,n,r){const s=mc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];at(e,(o,l)=>{const c=new ye(o);if(Ec(s,l,Oe(n,c)),Af(c)===".priority"&&!pI(l))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),mI(s,i)},bx=function(t,e,n,r){if(!vx(n))throw new Error(mc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bx(t,e,n)},wx=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},yI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fI(n))throw new Error(mc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class vI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ic(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Lf(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function kx(t,e,n){Ic(t,n),Cx(t,r=>Lf(r,e))}function qt(t,e,n){Ic(t,n),Cx(t,r=>Qt(r,e)||Qt(e,r))}function Cx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(xI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ki&&it("event: "+n.toString()),hi(r)}}}/**
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
 */const bI="repo_interrupt",wI=25;class kI{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=za(),this.transactionQueueTree_=new Zf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function CI(t,e,n){if(t.stats_=jf(t.repoInfo_),t.forceRestClient_||tS())t.server_=new Ua(t.repoInfo_,(r,s,i,o)=>{D_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>M_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Un(t.repoInfo_,e,(r,s,i,o)=>{D_(t,r,s,i,o)},r=>{M_(t,r)},r=>{NI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=oS(t.repoInfo_,()=>new iE(t.stats_,t.server_)),t.infoData_=new eE,t.infoSyncTree_=new L_({startListening:(r,s,i,o)=>{let l=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(l=el(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),np(t,"connected",!1),t.serverSyncTree_=new L_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,c)=>{const u=o(l,c);qt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Nx(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Tc(t){return iI({timestamp:Nx(t)})}function D_(t,e,n,r,s){t.dataUpdateCount++;const i=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=Ea(n,u=>Ge(u));o=ZE(t.serverSyncTree_,i,c,s)}else{const c=Ge(n);o=ux(t.serverSyncTree_,i,c,s)}else if(r){const c=Ea(n,u=>Ge(u));o=KE(t.serverSyncTree_,i,c)}else{const c=Ge(n);o=el(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=ri(t,i)),qt(t.eventQueue_,l,o)}function M_(t,e){np(t,"connected",e),e===!1&&TI(t)}function NI(t,e){at(e,(n,r)=>{np(t,n,r)})}function np(t,e,n){const r=new ye("/.info/"+e),s=Ge(n);t.infoData_.updateSnapshot(r,s);const i=el(t.infoSyncTree_,r,s);qt(t.eventQueue_,r,i)}function rp(t){return t.nextWriteId_++}function SI(t,e,n){const r=eI(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ge(s).withIndex(e._queryParams.getIndex());rh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=el(t.serverSyncTree_,e._path,i);else{const l=Ao(t.serverSyncTree_,e);o=ux(t.serverSyncTree_,e._path,i,l)}return qt(t.eventQueue_,e._path,o),Qa(t.serverSyncTree_,e,n,null,!0),i},s=>(nl(t,"get for query "+Xe(e)+" failed: "+s),Promise.reject(new Error(s))))}function EI(t,e,n,r,s){nl(t,"set",{path:e.toString(),value:n,priority:r});const i=Tc(t),o=Ge(n,r),l=Yf(t.serverSyncTree_,e),c=mx(o,l,i),u=rp(t),h=cx(t.serverSyncTree_,e,c,u,!0);Ic(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||wt("set at "+e+" failed: "+f);const w=mr(t.serverSyncTree_,u,!v);qt(t.eventQueue_,e,w),ih(t,s,f,m)});const d=ip(t,e);ri(t,d),qt(t.eventQueue_,d,[])}function II(t,e,n,r){nl(t,"update",{path:e.toString(),value:n});let s=!0;const i=Tc(t),o={};if(at(n,(l,c)=>{s=!1,o[l]=px(Oe(e,l),Ge(c),t.serverSyncTree_,i)}),s)it("update() called with empty data.  Don't do anything."),ih(t,r,"ok",void 0);else{const l=rp(t),c=XE(t.serverSyncTree_,e,o,l);Ic(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||wt("update at "+e+" failed: "+u);const f=mr(t.serverSyncTree_,l,!d),m=f.length>0?ri(t,e):e;qt(t.eventQueue_,m,f),ih(t,r,u,h)}),at(n,u=>{const h=ip(t,Oe(e,u));ri(t,h)}),qt(t.eventQueue_,e,[])}}function TI(t){nl(t,"onDisconnectEvents");const e=Tc(t),n=za();qd(t.onDisconnect_,de(),(s,i)=>{const o=px(s,i,t.serverSyncTree_,e);Gv(n,s,o)});let r=[];qd(n,de(),(s,i)=>{r=r.concat(el(t.serverSyncTree_,s,i));const o=ip(t,s);ri(t,o)}),t.onDisconnect_=za(),qt(t.eventQueue_,de(),r)}function RI(t,e,n){let r;ie(e._path)===".info"?r=rh(t.infoSyncTree_,e,n):r=rh(t.serverSyncTree_,e,n),kx(t.eventQueue_,e._path,r)}function U_(t,e,n){let r;ie(e._path)===".info"?r=Qa(t.infoSyncTree_,e,n):r=Qa(t.serverSyncTree_,e,n),kx(t.eventQueue_,e._path,r)}function jI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bI)}function nl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function ih(t,e,n,r){e&&hi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Sx(t,e,n){return Yf(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function sp(t,e=t.transactionQueueTree_){if(e||Rc(t,e),pi(e)){const n=Ix(t,e);z(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&PI(t,tl(e),n)}else gx(e)&&Sc(e,n=>{sp(t,n)})}function PI(t,e,n){const r=n.map(u=>u.currentWriteId),s=Sx(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];z(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=xt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{nl(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(mr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Rc(t,ep(t.transactionQueueTree_,e)),sp(t,t.transactionQueueTree_),qt(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)hi(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{wt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ri(t,e)}},o)}function ri(t,e){const n=Ex(t,e),r=tl(n),s=Ix(t,n);return AI(t,s,r),r}function AI(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=xt(n,c.path);let h=!1,d;if(z(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,s=s.concat(mr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=wI)h=!0,d="maxretry",s=s.concat(mr(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Sx(t,c.path,o);c.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){Ec("transaction failed: Data returned ",m,c.path);let v=Ge(m);typeof m=="object"&&m!=null&&Nn(m,".priority")||(v=v.updatePriority(f.getPriority()));const k=c.currentWriteId,_=Tc(t),p=mx(v,f,_);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=p,c.currentWriteId=rp(t),o.splice(o.indexOf(k),1),s=s.concat(cx(t.serverSyncTree_,c.path,p,c.currentWriteId,c.applyLocally)),s=s.concat(mr(t.serverSyncTree_,k,!0))}else h=!0,d="nodata",s=s.concat(mr(t.serverSyncTree_,c.currentWriteId,!0))}qt(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Rc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)hi(r[l]);sp(t,t.transactionQueueTree_)}function Ex(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&pi(r)===void 0;)r=ep(r,n),e=ke(e),n=ie(e);return r}function Ix(t,e){const n=[];return Tx(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Tx(t,e,n){const r=pi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Sc(e,s=>{Tx(t,s,n)})}function Rc(t,e){const n=pi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,_x(e,n.length>0?n:void 0)}Sc(e,r=>{Rc(t,r)})}function ip(t,e){const n=tl(Ex(t,e)),r=ep(t.transactionQueueTree_,e);return cI(r,s=>{Au(t,s)}),Au(t,r),yx(r,s=>{Au(t,s)}),n}function Au(t,e){const n=pi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(z(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(z(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(mr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?_x(e,void 0):n.length=i+1,qt(t.eventQueue_,tl(e),s);for(let o=0;o<r.length;o++)hi(r[o])}}/**
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
 */function LI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function OI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):wt(`Invalid query segment '${n}' in query '${t}'`)}return e}const z_=function(t,e){const n=DI(t),r=n.namespace;n.domain==="firebase.com"&&Vn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Vn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ye(n.pathString)}},DI=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=LI(t.substring(h,d)));const f=OI(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
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
 */const F_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",MI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=F_.charAt(n%64),n=Math.floor(n/64);z(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=F_.charAt(e[s]);return z(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class UI{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Xe(this.snapshot.exportVal())}}class zI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Rx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return z(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class op{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return le(this._path)?null:Af(this._path)}get ref(){return new Xn(this._repo,this._path)}get _queryIdentifier(){const e=C_(this._queryParams),n=Tf(e);return n==="{}"?"default":n}get _queryObject(){return C_(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof op))return!1;const n=this._repo===e._repo,r=Lf(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+TS(this._path)}}class Xn extends op{constructor(e,n){super(e,n,new Uf,!1)}get parent(){const e=Fv(this._path);return e===null?null:new Xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Lo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=Oo(this.ref,e);return new Lo(this._node.getChild(n),r,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Lo(s,Oo(this.ref,r),De)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Te(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?Oo(t._root,e):t._root}function Oo(t,e){return t=We(t),ie(t._path)===null?gI("child","path",e):bx("child","path",e),new Xn(t._repo,Oe(t._path,e))}function FI(t,e){t=We(t),wx("push",t._path),xx("push",e,t._path,!0);const n=Nx(t._repo),r=MI(n),s=Oo(t,r),i=Oo(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Tn(t,e){t=We(t),wx("set",t._path),xx("set",e,t._path,!1);const n=new Yo;return EI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Mr(t,e){_I("update",e,t._path);const n=new Yo;return II(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Lu(t){t=We(t);const e=new Rx(()=>{}),n=new jc(e);return SI(t._repo,t,n).then(r=>new Lo(r,new Xn(t._repo,t._path),t._queryParams.getIndex()))}class jc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new UI("value",this,new Lo(e.snapshotNode,new Xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zI(this,e,n):null}matches(e){return e instanceof jc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function BI(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const c=n,u=(h,d)=>{U_(t._repo,t,l),c(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Rx(n,i||void 0),l=new jc(o);return RI(t._repo,t,l),()=>U_(t._repo,t,l)}function Do(t,e,n,r){return BI(t,"value",e,n,r)}BE(Xn);YE(Xn);/**
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
 */const $I="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let WI=!1;function HI(t,e,n,r){t.repoInfo_=new jv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function VI(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Vn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=z_(i,s),l=o.repoInfo,c;typeof process<"u"&&o_&&(c=o_[$I]),c?(i=`http://${c}?ns=${l.namespace}`,o=z_(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new rS(t.name,t.options,e);yI("Invalid Firebase Database URL",o),le(o.path)||Vn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=QI(l,t,u,new nS(t.name,n));return new GI(h,t)}function YI(t,e){const n=oh[e];(!n||n[t.key]!==t)&&Vn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jI(t),delete n[t.key]}function QI(t,e,n,r){let s=oh[e.name];s||(s={},oh[e.name]=s);let i=s[t.toURLString()];return i&&Vn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new kI(t,WI,n,r),s[t.toURLString()]=i,i}class GI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(CI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Vn("Cannot call "+e+" on a deleted database.")}}function XI(t=_f(),e){const n=gc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ty("database");r&&KI(n,...r)}return n}function KI(t,e,n,r={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Vn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Vn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Zl(Zl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Py(r.mockUserToken,t.app.options.projectId);i=new Zl(o)}HI(s,e,n,i)}/**
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
 */function qI(t){FN(us),ns(new Rr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return VI(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),bn(l_,a_,t),bn(l_,a_,"esm2017")}Un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qI();var JI="firebase",ZI="10.14.1";/**
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
 */bn(JI,ZI,"app");/**
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
 */const jx="firebasestorage.googleapis.com",Px="storageBucket",e5=2*60*1e3,t5=10*60*1e3;/**
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
 */class Ue extends Gn{constructor(e,n,r=0){super(Ou(e),`Firebase Storage: ${n} (${Ou(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ou(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Me;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Me||(Me={}));function Ou(t){return"storage/"+t}function lp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ue(Me.UNKNOWN,t)}function n5(t){return new Ue(Me.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function r5(t){return new Ue(Me.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function s5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(Me.UNAUTHENTICATED,t)}function i5(){return new Ue(Me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function o5(t){return new Ue(Me.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function l5(){return new Ue(Me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function a5(){return new Ue(Me.CANCELED,"User canceled the upload/download.")}function c5(t){return new Ue(Me.INVALID_URL,"Invalid URL '"+t+"'.")}function u5(t){return new Ue(Me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function d5(){return new Ue(Me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Px+"' property when initializing the app?")}function h5(){return new Ue(Me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function f5(){return new Ue(Me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function p5(t){return new Ue(Me.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lh(t){return new Ue(Me.INVALID_ARGUMENT,t)}function Ax(){return new Ue(Me.APP_DELETED,"The Firebase app was deleted.")}function m5(t){return new Ue(Me.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function to(t,e){return new Ue(Me.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Li(t){throw new Ue(Me.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw u5(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=n===jx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",_=new RegExp(`^https?://${w}/${s}/${k}`,"i"),y=[{regex:l,indices:c,postModify:i},{regex:m,indices:v,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let b=0;b<y.length;b++){const x=y[b],C=x.regex.exec(e);if(C){const N=C[x.indices.bucket];let I=C[x.indices.path];I||(I=""),r=new Ut(N,I),x.postModify(r);break}}if(r==null)throw c5(e);return r}}class _5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function g5(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...k){u||(u=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(m,c())},k)}function f(){i&&clearTimeout(i)}function m(k,..._){if(u){f();return}if(k){f(),h.call(null,k,..._);return}if(c()||o){f(),h.call(null,k,..._);return}r<64&&(r*=2);let y;l===1?(l=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function w(k){v||(v=!0,f(),!u&&(s!==null?(k||(l=2),clearTimeout(s),d(0)):k||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function y5(t){t(!1)}/**
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
 */function v5(t){return t!==void 0}function x5(t){return typeof t=="object"&&!Array.isArray(t)}function ap(t){return typeof t=="string"||t instanceof String}function B_(t){return cp()&&t instanceof Blob}function cp(){return typeof Blob<"u"}function $_(t,e,n,r){if(r<e)throw lh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Pc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Lx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Kr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kr||(Kr={}));/**
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
 */function b5(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class w5{constructor(e,n,r,s,i,o,l,c,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new jl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Kr.NO_ERROR,c=i.getStatus();if(!l||b5(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Kr.ABORT;r(!1,new jl(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new jl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());v5(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=lp();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ax():a5();o(c)}else{const c=l5();o(c)}};this.canceled_?n(!1,new jl(!1,null,!0)):this.backoffId_=g5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function k5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function C5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function N5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function S5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function E5(t,e,n,r,s,i,o=!0){const l=Lx(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return N5(u,e),k5(u,n),C5(u,i),S5(u,r),new w5(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function I5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function T5(...t){const e=I5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cp())return new Blob(t);throw new Ue(Me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function R5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function j5(t){if(typeof atob>"u")throw p5("base-64");return atob(t)}/**
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
 */const yn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Du{constructor(e,n){this.data=e,this.contentType=n||null}}function P5(t,e){switch(t){case yn.RAW:return new Du(Ox(e));case yn.BASE64:case yn.BASE64URL:return new Du(Dx(t,e));case yn.DATA_URL:return new Du(L5(e),O5(e))}throw lp()}function Ox(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function A5(t){let e;try{e=decodeURIComponent(t)}catch{throw to(yn.DATA_URL,"Malformed data URL.")}return Ox(e)}function Dx(t,e){switch(t){case yn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw to(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case yn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw to(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=j5(e)}catch(s){throw s.message.includes("polyfill")?s:to(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Mx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw to(yn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=D5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function L5(t){const e=new Mx(t);return e.base64?Dx(yn.BASE64,e.rest):A5(e.rest)}function O5(t){return new Mx(t).contentType}function D5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class hr{constructor(e,n){let r=0,s="";B_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(B_(this.data_)){const r=this.data_,s=R5(r,e,n);return s===null?null:new hr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new hr(r,!0)}}static getBlob(...e){if(cp()){const n=e.map(r=>r instanceof hr?r.data_:r);return new hr(T5.apply(null,n))}else{const n=e.map(o=>ap(o)?P5(yn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new hr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Ux(t){let e;try{e=JSON.parse(t)}catch{return null}return x5(e)?e:null}/**
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
 */function M5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function U5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function z5(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||z5}}let Pl=null;function F5(t){return!ap(t)||t.length<2?t:zx(t)}function Fx(){if(Pl)return Pl;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return F5(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),Pl=t,Pl}function B5(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $5(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return B5(r,t),r}function Bx(t,e,n){const r=Ux(e);return r===null?null:$5(t,r,n)}function W5(t,e,n,r){const s=Ux(e);if(s===null||!ap(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),m=Pc(f,n,r),v=Lx({alt:"media",token:u});return m+v})[0]}function H5(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class up{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $x(t){if(!t)throw lp()}function V5(t,e){function n(r,s){const i=Bx(t,s,e);return $x(i!==null),i}return n}function Y5(t,e){function n(r,s){const i=Bx(t,s,e);return $x(i!==null),W5(i,s,t.host,t._protocol)}return n}function Wx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=i5():s=s5():n.getStatus()===402?s=r5(t.bucket):n.getStatus()===403?s=o5(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Hx(t){const e=Wx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=n5(t.path)),i.serverResponse=s.serverResponse,i}return n}function Q5(t,e,n){const r=e.fullServerUrl(),s=Pc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new up(s,i,Y5(t,n),o);return l.errorHandler=Hx(e),l}function G5(t,e){const n=e.fullServerUrl(),r=Pc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new up(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Hx(e),l}function X5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function K5(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=X5(null,e)),r}function q5(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=K5(e,r,s),h=H5(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=hr.getBlob(d,r,f);if(m===null)throw h5();const v={name:u.fullPath},w=Pc(i,t.host,t._protocol),k="POST",_=t.maxUploadRetryTime,p=new up(w,k,V5(t,n),_);return p.urlParams=v,p.headers=o,p.body=m.uploadData(),p.errorHandler=Wx(e),p}class J5{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Z5 extends J5{initXhr(){this.xhr_.responseType="text"}}function dp(){return new Z5}/**
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
 */class ls{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ls(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zx(this._location.path)}get storage(){return this._service}get parent(){const e=M5(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new ls(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw m5(e)}}function eT(t,e,n){t._throwIfRoot("uploadBytes");const r=q5(t.storage,t._location,Fx(),new hr(e,!0),n);return t.storage.makeRequestWithTokens(r,dp).then(s=>({metadata:s,ref:t}))}function tT(t){t._throwIfRoot("getDownloadURL");const e=Q5(t.storage,t._location,Fx());return t.storage.makeRequestWithTokens(e,dp).then(n=>{if(n===null)throw f5();return n})}function nT(t){t._throwIfRoot("deleteObject");const e=G5(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dp)}function rT(t,e){const n=U5(t._location.path,e),r=new Ut(t._location.bucket,n);return new ls(t.storage,r)}/**
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
 */function sT(t){return/^[A-Za-z]+:\/\//.test(t)}function iT(t,e){return new ls(t,e)}function Vx(t,e){if(t instanceof hp){const n=t;if(n._bucket==null)throw d5();const r=new ls(n,n._bucket);return e!=null?Vx(r,e):r}else return e!==void 0?rT(t,e):t}function oT(t,e){if(e&&sT(e)){if(t instanceof hp)return iT(t,e);throw lh("To use ref(service, url), the first argument must be a Storage instance.")}else return Vx(t,e)}function W_(t,e){const n=e==null?void 0:e[Px];return n==null?null:Ut.makeFromBucketSpec(n,t)}function lT(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Py(s,t.app.options.projectId))}class hp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=jx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=e5,this._maxUploadRetryTime=t5,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=W_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=W_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ls(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new _5(Ax());{const o=E5(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const H_="@firebase/storage",V_="0.13.2";/**
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
 */const Yx="storage";function aT(t,e,n){return t=We(t),eT(t,e,n)}function cT(t){return t=We(t),tT(t)}function uT(t){return t=We(t),nT(t)}function Y_(t,e){return t=We(t),oT(t,e)}function dT(t=_f(),e){t=We(t);const r=gc(t,Yx).getImmediate({identifier:e}),s=Ty("storage");return s&&hT(r,...s),r}function hT(t,e,n,r={}){lT(t,e,n,r)}function fT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new hp(n,r,s,e,us)}function pT(){ns(new Rr(Yx,fT,"PUBLIC").setMultipleInstances(!0)),bn(H_,V_,""),bn(H_,V_,"esm2017")}pT();const mT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},fp=My(mT),Mu=UN(fp),Re=XI(fp),Q_=dT(fp),Qx=new In;Qx.addScope("email");const Gx="packing-checklist-data",Uu=["必備","電子產品","個人物品","視天氣","旅行","運動"],Xx=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],zi={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[]};function ir(t){return t.toLowerCase().replace(/\./g,",")}function ah(t){return t.replace(/,/g,".")}function _T(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:Object.fromEntries(Object.entries(t.sharedWith||{}).map(([e,n])=>[e,n===!0?"view":n]))}:null}function Kx(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:zi.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],inlineItems:Array.isArray(e.inlineItems)?e.inlineItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):zi.lists,activeListId:t.activeListId||zi.activeListId,templates:Array.isArray(t.templates)?t.templates:[]}:zi}function gT(){try{const t=localStorage.getItem(Gx);if(t)return Kx(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return zi}function G_(t){try{localStorage.setItem(Gx,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function yT(t){const[e,n]=g.useState(null),[r,s]=g.useState(t),[i,o]=g.useState("offline"),l=g.useRef(null),c=g.useCallback(m=>{l.current&&l.current();const v=Te(Re,"users/"+m);l.current=Do(v,w=>{const k=w.val();if(k){const _=Kx(k);s(_),G_(_),o("synced")}else u(m,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=g.useCallback((m,v)=>{o("syncing");const w=Te(Re,"users/"+m);Tn(w,v).then(()=>{o("synced")}).catch(k=>{console.error("Firebase 儲存失敗",k),o("error")})},[]),h=g.useCallback(m=>{s(m),G_(m),e&&u(e.uid,m)},[e,u]),d=g.useCallback(()=>{QC(Mu,Qx).catch(m=>{console.error("登入失敗",m)})},[]),f=g.useCallback(()=>{l.current&&(l.current(),l.current=null),EC(Mu).then(()=>{n(null),o("offline")}).catch(m=>{console.error("登出失敗",m)})},[]);return g.useEffect(()=>{const m=SC(Mu,v=>{n(v),v?c(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{m(),l.current&&l.current()}},[c]),{user:e,data:r,syncStatus:i,saveData:h,handleLogin:d,handleLogout:f}}function vT(t,e){const[n,r]=g.useState({}),[s,i]=g.useState({}),o=g.useRef({}),l=g.useRef(null),c=g.useCallback(x=>{o.current[x]&&(o.current[x](),delete o.current[x])},[]),u=g.useCallback(()=>{Object.keys(o.current).forEach(c),l.current&&(l.current(),l.current=null),r({}),i({})},[c]),h=g.useCallback((x,C)=>{if(o.current[`${C}_${x}`])return;const N=Te(Re,`sharedLists/${x}`),I=Do(N,P=>{const S=P.val();if(!S){(C==="withMe"?r:i)(H=>{const K={...H};return delete K[x],K}),c(`${C}_${x}`);return}const E=_T(S);(C==="withMe"?r:i)(M=>({...M,[x]:E}))},P=>{console.error("共享清單讀取失敗",P)});o.current[`${C}_${x}`]=I},[c]);g.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const x=ir(t.email),C=Te(Re,`sharedIndex/${x}`);return l.current=Do(C,N=>{const I=N.val();if(!I){Object.keys(o.current).forEach(S=>{S.startsWith("withMe_")&&c(S)}),r({});return}const P=new Set(Object.keys(I));Object.keys(o.current).forEach(S=>{if(S.startsWith("withMe_")){const E=S.replace("withMe_","");P.has(E)||(c(S),r(R=>{const M={...R};return delete M[E],M}))}}),P.forEach(S=>{h(S,"withMe")})},N=>{console.error("共享索引讀取失敗",N)}),()=>{u()}},[t==null?void 0:t.email]),g.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const x=new Set;e.lists.forEach(C=>{C.sharedListId&&x.add(C.sharedListId)}),Object.keys(o.current).forEach(C=>{if(C.startsWith("byMe_")){const N=C.replace("byMe_","");x.has(N)||(c(C),i(I=>{const P={...I};return delete P[N],P}))}}),x.forEach(C=>{h(C,"byMe")})},[t,e==null?void 0:e.lists,h,c]),g.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(x=>{if(!x.sharedListId)return;const C=s[x.sharedListId];if(!C)return;const N=C.items||[];if(x.disposable){const H=Array.isArray(x.inlineItems)?x.inlineItems:[];if(JSON.stringify(H)!==JSON.stringify(N)){const te=Te(Re,`sharedLists/${x.sharedListId}`);Mr(te,{items:H,name:x.name,icon:x.icon})}return}const I=new Set(N.map(H=>H.id)),P=new Set(Array.isArray(x.items)?x.items:[]),S=N.map(H=>{if(!P.has(H.id))return H;const K=e.itemLibrary.find(Y=>Y.id===H.id);if(!K)return H;const{id:te,name:se,category:D,note:U,photoURL:B}=K;return{id:te,name:se,category:D,...U!=null&&{note:U},...B&&{photoURL:B}}}),E=(Array.isArray(x.items)?x.items:[]).filter(H=>!I.has(H)).map(H=>e.itemLibrary.find(K=>K.id===H)).filter(Boolean).map(({id:H,name:K,category:te,note:se,photoURL:D})=>({id:H,name:K,category:te,...se!=null&&{note:se},...D&&{photoURL:D}})),R=[...S,...E];if(JSON.stringify(R)!==JSON.stringify(N)){const H=Te(Re,`sharedLists/${x.sharedListId}`);Mr(H,{items:R,name:x.name,icon:x.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,s]);const d=g.useCallback(async(x,C,N)=>{if(!t)return null;const I=x.disposable?Array.isArray(x.inlineItems)?x.inlineItems:[]:(Array.isArray(x.items)?x.items:[]).map(H=>C.find(K=>K.id===H)).filter(Boolean).map(({id:H,name:K,category:te,note:se,photoURL:D})=>({id:H,name:K,category:te,...se!=null&&{note:se},...D&&{photoURL:D}})),P={};N.forEach(H=>{P[ir(H)]="edit"});const E=FI(Te(Re,"sharedLists")).key,R={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:x.name,icon:x.icon,items:I,checkedItems:Array.isArray(x.checkedItems)?x.checkedItems:[],sharedWith:P},M={};return M[`sharedLists/${E}`]=R,N.forEach(H=>{M[`sharedIndex/${ir(H)}/${E}`]=!0}),await Mr(Te(Re),M),E},[t]),f=g.useCallback(async(x,C)=>{const N=ir(C),I={};I[`sharedLists/${x}/sharedWith/${N}`]="edit",I[`sharedIndex/${N}/${x}`]=!0,await Mr(Te(Re),I)},[]),m=g.useCallback(async(x,C)=>{const N=ir(C),I={};I[`sharedLists/${x}/sharedWith/${N}`]=null,I[`sharedIndex/${N}/${x}`]=null,await Mr(Te(Re),I)},[]),v=g.useCallback(async x=>{const C=s[x];if(!C)return;const N={};N[`sharedLists/${x}`]=null;const I=C.sharedWith||{};Object.keys(I).forEach(P=>{N[`sharedIndex/${P}/${x}`]=null}),await Mr(Te(Re),N)},[s]),w=g.useCallback(async(x,C,N)=>{const I=ir(C);await Tn(Te(Re,`sharedLists/${x}/sharedWith/${I}`),N)},[]),k=g.useCallback(async(x,C)=>{const N=Te(Re,`sharedLists/${x}/items`),S=[...(await Lu(N)).val()||[],C];await Tn(N,S)},[]),_=g.useCallback(async(x,C)=>{const I=(await Lu(Te(Re,`sharedLists/${x}`))).val();if(!I)return;const P=(I.items||[]).filter(R=>R.id!==C),S=(I.checkedItems||[]).filter(R=>R!==C),E={};E[`sharedLists/${x}/items`]=P,E[`sharedLists/${x}/checkedItems`]=S,await Mr(Te(Re),E)},[]),p=g.useCallback(async(x,C)=>{const N=Te(Re,`sharedLists/${x}/checkedItems`),P=(await Lu(N)).val()||[],E=P.includes(C)?P.filter(R=>R!==C):[...P,C];await Tn(N,E)},[]),y=g.useCallback(async x=>{const C=Te(Re,`sharedLists/${x}/checkedItems`);await Tn(C,[])},[]),b=g.useCallback(async(x,C)=>{const N=Te(Re,`sharedLists/${x}/checkedItems`);await Tn(N,C)},[]);return{sharedWithMe:n,sharedByMe:s,shareList:d,addSharedUser:f,removeSharedUser:m,unshareList:v,setUserPermission:w,addSharedItem:k,removeSharedItem:_,toggleSharedCheck:p,resetSharedChecks:y,checkAllShared:b}}function xT(t){const[e,n]=g.useState([]),[r,s]=g.useState(!1),[i,o]=g.useState(!0);g.useEffect(()=>{const u=Te(Re,"adminEmails"),h=Do(u,d=>{const f=d.val(),m=Array.isArray(f)?f:[];n(m),o(!1)},()=>{n([]),o(!1)});return()=>h()},[]),g.useEffect(()=>{if(!(t!=null&&t.email)){s(!1);return}s(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=g.useCallback(async u=>{const h=u.toLowerCase().trim();if(!h)return;const d=[...new Set([...e,h])];await Tn(Te(Re,"adminEmails"),d)},[e]),c=g.useCallback(async u=>{var f;const h=u.toLowerCase().trim();if(((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())===h)return;const d=e.filter(m=>m!==h);await Tn(Te(Re,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:r,adminEmails:e,loading:i,addAdmin:l,removeAdmin:c}}function bT(){const[t,e]=g.useState(Uu);g.useEffect(()=>{const o=Te(Re,"categories"),l=Do(o,c=>{const u=c.val();Array.isArray(u)&&u.length>0?e(u):e(Uu)},()=>{e(Uu)});return()=>l()},[]);const n=g.useCallback(async o=>{await Tn(Te(Re,"categories"),o)},[]),r=g.useCallback(async o=>{const l=o.trim();if(!l||t.includes(l))return;const c=[...t,l];await n(c)},[t,n]),s=g.useCallback(async(o,l)=>{const c=l.trim();if(!c||c===o||t.includes(c))return;const u=t.map(h=>h===o?c:h);await n(u)},[t,n]),i=g.useCallback(async o=>{const l=t.filter(c=>c!==o);l.length!==0&&await n(l)},[t,n]);return{categories:t,addCategory:r,updateCategory:s,removeCategory:i}}const X_="packing-checklist-theme";function wT(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function zu(t){const e=t==="dark"||t==="system"&&wT();document.documentElement.classList.toggle("dark",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e?"#0f172a":"#4F46E5")}function kT(){const[t,e]=g.useState(()=>{try{return localStorage.getItem(X_)||"system"}catch{return"system"}}),n=g.useCallback(r=>{e(r);try{localStorage.setItem(X_,r)}catch{}zu(r)},[]);return g.useEffect(()=>{zu(t)},[t]),g.useEffect(()=>{if(t!=="system")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>zu("system");return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[t]),{preference:t,changeTheme:n}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=t=>{const e=NT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ST={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=g.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},c)=>g.createElement("svg",{ref:c,...ST,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:qx("lucide",s),...!i&&!ET(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,h])=>g.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(t,e)=>{const n=g.forwardRef(({className:r,...s},i)=>g.createElement(IT,{ref:i,iconNode:e,className:qx(`lucide-${CT(K_(t))}`,`lucide-${t}`,r),...s}));return n.displayName=K_(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Fu=W("arrow-left",TT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Jx=W("arrow-up-down",RT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],PT=W("backpack",jT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],LT=W("baby",AT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],DT=W("book-open",OT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],UT=W("briefcase",MT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ac=W("camera",zT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],BT=W("chart-column",FT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],WT=W("check-check",$T);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],si=W("check",HT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],q_=W("chevron-down",VT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],QT=W("chevron-left",YT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],XT=W("circle-alert",GT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ch=W("clipboard-list",KT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],JT=W("cloud-off",qT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],eR=W("cloud",ZT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],nR=W("coffee",tR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sR=W("copy",rR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],oR=W("download",iR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],aR=W("dumbbell",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Zx=W("ellipsis-vertical",cR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],dR=W("eye",uR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],eb=W("file-text",hR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],pR=W("footprints",fR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],_R=W("funnel",mR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],yR=W("gift",gR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],tb=W("grip-vertical",vR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],bR=W("heart",xR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],kR=W("inbox",wR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],nb=W("layout-dashboard",CR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],SR=W("layout-list",NR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],IR=W("list-checks",ER);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],pp=W("loader-circle",TR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],jR=W("loader",RR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],AR=W("log-in",PR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],OR=W("log-out",LR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],MR=W("menu",DR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M5 12h14",key:"1ays0h"}]],zR=W("minus",UR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],BR=W("monitor",FR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],WR=W("moon",$R);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],VR=W("mountain",HR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],QR=W("music",YR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Mo=W("package",GR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Uo=W("pen-line",XR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],qR=W("pencil",KR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],ZR=W("person-standing",JR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],t4=W("plane",e4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Yn=W("plus",n4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],s4=W("rotate-ccw",r4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],o4=W("scan-line",i4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],mp=W("search",l4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Lc=W("share-2",a4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],uh=W("shield",c4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],d4=W("shirt",u4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],f4=W("shopping-cart",h4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],m4=W("sticky-note",p4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],g4=W("sun",_4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],rb=W("tag",y4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],x4=W("target",v4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],w4=W("tent",b4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],dn=W("trash-2",k4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],N4=W("umbrella",C4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],E4=W("upload",S4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],T4=W("user",I4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],sb=W("users",R4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kt=W("x",j4);function P4(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>r=>{e.forEach(s=>s(r))},e)}const Oc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function mi(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function _p(t){return"nodeType"in t}function At(t){var e,n;return t?mi(t)?t:_p(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function gp(t){const{Document:e}=At(t);return t instanceof e}function rl(t){return mi(t)?!1:t instanceof At(t).HTMLElement}function ib(t){return t instanceof At(t).SVGElement}function _i(t){return t?mi(t)?t.document:_p(t)?gp(t)?t:rl(t)||ib(t)?t.ownerDocument:document:document:document}const Cn=Oc?g.useLayoutEffect:g.useEffect;function yp(t){const e=g.useRef(t);return Cn(()=>{e.current=t}),g.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e.current==null?void 0:e.current(...r)},[])}function A4(){const t=g.useRef(null),e=g.useCallback((r,s)=>{t.current=setInterval(r,s)},[]),n=g.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function zo(t,e){e===void 0&&(e=[t]);const n=g.useRef(t);return Cn(()=>{n.current!==t&&(n.current=t)},e),n}function sl(t,e){const n=g.useRef();return g.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Ga(t){const e=yp(t),n=g.useRef(null),r=g.useCallback(s=>{s!==n.current&&(e==null||e(s,n.current)),n.current=s},[]);return[n,r]}function dh(t){const e=g.useRef();return g.useEffect(()=>{e.current=t},[t]),e.current}let Bu={};function il(t,e){return g.useMemo(()=>{if(e)return e;const n=Bu[t]==null?0:Bu[t]+1;return Bu[t]=n,t+"-"+n},[t,e])}function ob(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.reduce((i,o)=>{const l=Object.entries(o);for(const[c,u]of l){const h=i[c];h!=null&&(i[c]=h+t*u)}return i},{...e})}}const Ws=ob(1),Xa=ob(-1);function L4(t){return"clientX"in t&&"clientY"in t}function vp(t){if(!t)return!1;const{KeyboardEvent:e}=At(t.target);return e&&t instanceof e}function O4(t){if(!t)return!1;const{TouchEvent:e}=At(t.target);return e&&t instanceof e}function hh(t){if(O4(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return L4(t)?{x:t.clientX,y:t.clientY}:null}const ii=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[ii.Translate.toString(t),ii.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),J_="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function D4(t){return t.matches(J_)?t:t.querySelector(J_)}const M4={display:"none"};function U4(t){let{id:e,value:n}=t;return vt.createElement("div",{id:e,style:M4},n)}function z4(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const s={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return vt.createElement("div",{id:e,style:s,role:"status","aria-live":r,"aria-atomic":!0},n)}function F4(){const[t,e]=g.useState("");return{announce:g.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const lb=g.createContext(null);function B4(t){const e=g.useContext(lb);g.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function $4(){const[t]=g.useState(()=>new Set),e=g.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[g.useCallback(r=>{let{type:s,event:i}=r;t.forEach(o=>{var l;return(l=o[s])==null?void 0:l.call(o,i)})},[t]),e]}const W4={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},H4={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function V4(t){let{announcements:e=H4,container:n,hiddenTextDescribedById:r,screenReaderInstructions:s=W4}=t;const{announce:i,announcement:o}=F4(),l=il("DndLiveRegion"),[c,u]=g.useState(!1);if(g.useEffect(()=>{u(!0)},[]),B4(g.useMemo(()=>({onDragStart(d){let{active:f}=d;i(e.onDragStart({active:f}))},onDragMove(d){let{active:f,over:m}=d;e.onDragMove&&i(e.onDragMove({active:f,over:m}))},onDragOver(d){let{active:f,over:m}=d;i(e.onDragOver({active:f,over:m}))},onDragEnd(d){let{active:f,over:m}=d;i(e.onDragEnd({active:f,over:m}))},onDragCancel(d){let{active:f,over:m}=d;i(e.onDragCancel({active:f,over:m}))}}),[i,e])),!c)return null;const h=vt.createElement(vt.Fragment,null,vt.createElement(U4,{id:r,value:s.draggable}),vt.createElement(z4,{id:l,announcement:o}));return n?Rs.createPortal(h,n):h}var Qe;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(Qe||(Qe={}));function Ka(){}function qa(t,e){return g.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function ab(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const fn=Object.freeze({x:0,y:0});function Y4(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Q4(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function G4(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function X4(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function Z_(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const cb=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=Z_(e,e.left,e.top),i=[];for(const o of r){const{id:l}=o,c=n.get(l);if(c){const u=Y4(Z_(c),s);i.push({id:l,data:{droppableContainer:o,value:u}})}}return i.sort(Q4)};function K4(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),s=Math.min(e.left+e.width,t.left+t.width),i=Math.min(e.top+e.height,t.top+t.height),o=s-r,l=i-n;if(r<s&&n<i){const c=e.width*e.height,u=t.width*t.height,h=o*l,d=h/(c+u-h);return Number(d.toFixed(4))}return 0}const q4=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=[];for(const i of r){const{id:o}=i,l=n.get(o);if(l){const c=K4(l,e);c>0&&s.push({id:o,data:{droppableContainer:i,value:c}})}}return s.sort(G4)};function J4(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function ub(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:fn}function Z4(t){return function(n){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return s.reduce((o,l)=>({...o,top:o.top+t*l.y,bottom:o.bottom+t*l.y,left:o.left+t*l.x,right:o.right+t*l.x}),{...n})}}const ej=Z4(1);function tj(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function nj(t,e,n){const r=tj(e);if(!r)return t;const{scaleX:s,scaleY:i,x:o,y:l}=r,c=t.left-o-(1-s)*parseFloat(n),u=t.top-l-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),h=s?t.width/s:t.width,d=i?t.height/i:t.height;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c}}const rj={ignoreTransform:!1};function gi(t,e){e===void 0&&(e=rj);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:u,transformOrigin:h}=At(t).getComputedStyle(t);u&&(n=nj(n,u,h))}const{top:r,left:s,width:i,height:o,bottom:l,right:c}=n;return{top:r,left:s,width:i,height:o,bottom:l,right:c}}function e0(t){return gi(t,{ignoreTransform:!0})}function sj(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function ij(t,e){return e===void 0&&(e=At(t).getComputedStyle(t)),e.position==="fixed"}function oj(t,e){e===void 0&&(e=At(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const i=e[s];return typeof i=="string"?n.test(i):!1})}function xp(t,e){const n=[];function r(s){if(e!=null&&n.length>=e||!s)return n;if(gp(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!rl(s)||ib(s)||n.includes(s))return n;const i=At(t).getComputedStyle(s);return s!==t&&oj(s,i)&&n.push(s),ij(s,i)?n:r(s.parentNode)}return t?r(t):n}function db(t){const[e]=xp(t,1);return e??null}function $u(t){return!Oc||!t?null:mi(t)?t:_p(t)?gp(t)||t===_i(t).scrollingElement?window:rl(t)?t:null:null}function hb(t){return mi(t)?t.scrollX:t.scrollLeft}function fb(t){return mi(t)?t.scrollY:t.scrollTop}function fh(t){return{x:hb(t),y:fb(t)}}var tt;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(tt||(tt={}));function pb(t){return!Oc||!t?!1:t===document.scrollingElement}function mb(t){const e={x:0,y:0},n=pb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},s=t.scrollTop<=e.y,i=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,l=t.scrollLeft>=r.x;return{isTop:s,isLeft:i,isBottom:o,isRight:l,maxScroll:r,minScroll:e}}const lj={x:.2,y:.2};function aj(t,e,n,r,s){let{top:i,left:o,right:l,bottom:c}=n;r===void 0&&(r=10),s===void 0&&(s=lj);const{isTop:u,isBottom:h,isLeft:d,isRight:f}=mb(t),m={x:0,y:0},v={x:0,y:0},w={height:e.height*s.y,width:e.width*s.x};return!u&&i<=e.top+w.height?(m.y=tt.Backward,v.y=r*Math.abs((e.top+w.height-i)/w.height)):!h&&c>=e.bottom-w.height&&(m.y=tt.Forward,v.y=r*Math.abs((e.bottom-w.height-c)/w.height)),!f&&l>=e.right-w.width?(m.x=tt.Forward,v.x=r*Math.abs((e.right-w.width-l)/w.width)):!d&&o<=e.left+w.width&&(m.x=tt.Backward,v.x=r*Math.abs((e.left+w.width-o)/w.width)),{direction:m,speed:v}}function cj(t){if(t===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:e,left:n,right:r,bottom:s}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:s,width:t.clientWidth,height:t.clientHeight}}function _b(t){return t.reduce((e,n)=>Ws(e,fh(n)),fn)}function uj(t){return t.reduce((e,n)=>e+hb(n),0)}function dj(t){return t.reduce((e,n)=>e+fb(n),0)}function hj(t,e){if(e===void 0&&(e=gi),!t)return;const{top:n,left:r,bottom:s,right:i}=e(t);db(t)&&(s<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const fj=[["x",["left","right"],uj],["y",["top","bottom"],dj]];class bp{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=xp(n),s=_b(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,l]of fj)for(const c of o)Object.defineProperty(this,c,{get:()=>{const u=l(r),h=s[i]-u;return this.rect[c]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class no{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var s;(s=this.target)==null||s.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function pj(t){const{EventTarget:e}=At(t);return t instanceof e?t:_i(t)}function Wu(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Wt;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Wt||(Wt={}));function t0(t){t.preventDefault()}function mj(t){t.stopPropagation()}var he;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(he||(he={}));const gb={start:[he.Space,he.Enter],cancel:[he.Esc],end:[he.Space,he.Enter,he.Tab]},_j=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case he.Right:return{...n,x:n.x+25};case he.Left:return{...n,x:n.x-25};case he.Down:return{...n,y:n.y+25};case he.Up:return{...n,y:n.y-25}}};class yb{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new no(_i(n)),this.windowListeners=new no(At(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Wt.Resize,this.handleCancel),this.windowListeners.add(Wt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Wt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&hj(r),n(fn)}handleKeyDown(e){if(vp(e)){const{active:n,context:r,options:s}=this.props,{keyboardCodes:i=gb,coordinateGetter:o=_j,scrollBehavior:l="smooth"}=s,{code:c}=e;if(i.end.includes(c)){this.handleEnd(e);return}if(i.cancel.includes(c)){this.handleCancel(e);return}const{collisionRect:u}=r.current,h=u?{x:u.left,y:u.top}:fn;this.referenceCoordinates||(this.referenceCoordinates=h);const d=o(e,{active:n,context:r.current,currentCoordinates:h});if(d){const f=Xa(d,h),m={x:0,y:0},{scrollableAncestors:v}=r.current;for(const w of v){const k=e.code,{isTop:_,isRight:p,isLeft:y,isBottom:b,maxScroll:x,minScroll:C}=mb(w),N=cj(w),I={x:Math.min(k===he.Right?N.right-N.width/2:N.right,Math.max(k===he.Right?N.left:N.left+N.width/2,d.x)),y:Math.min(k===he.Down?N.bottom-N.height/2:N.bottom,Math.max(k===he.Down?N.top:N.top+N.height/2,d.y))},P=k===he.Right&&!p||k===he.Left&&!y,S=k===he.Down&&!b||k===he.Up&&!_;if(P&&I.x!==d.x){const E=w.scrollLeft+f.x,R=k===he.Right&&E<=x.x||k===he.Left&&E>=C.x;if(R&&!f.y){w.scrollTo({left:E,behavior:l});return}R?m.x=w.scrollLeft-E:m.x=k===he.Right?w.scrollLeft-x.x:w.scrollLeft-C.x,m.x&&w.scrollBy({left:-m.x,behavior:l});break}else if(S&&I.y!==d.y){const E=w.scrollTop+f.y,R=k===he.Down&&E<=x.y||k===he.Up&&E>=C.y;if(R&&!f.x){w.scrollTo({top:E,behavior:l});return}R?m.y=w.scrollTop-E:m.y=k===he.Down?w.scrollTop-x.y:w.scrollTop-C.y,m.y&&w.scrollBy({top:-m.y,behavior:l});break}}this.handleMove(e,Ws(Xa(d,this.referenceCoordinates),m))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}yb.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=gb,onActivation:s}=e,{active:i}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const l=i.activatorNode.current;return l&&t.target!==l?!1:(t.preventDefault(),s==null||s({event:t.nativeEvent}),!0)}return!1}}];function n0(t){return!!(t&&"distance"in t)}function r0(t){return!!(t&&"delay"in t)}class wp{constructor(e,n,r){var s;r===void 0&&(r=pj(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:i}=e,{target:o}=i;this.props=e,this.events=n,this.document=_i(o),this.documentListeners=new no(this.document),this.listeners=new no(r),this.windowListeners=new no(At(o)),this.initialCoordinates=(s=hh(i))!=null?s:fn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Wt.Resize,this.handleCancel),this.windowListeners.add(Wt.DragStart,t0),this.windowListeners.add(Wt.VisibilityChange,this.handleCancel),this.windowListeners.add(Wt.ContextMenu,t0),this.documentListeners.add(Wt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(r0(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(n0(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:s}=this.props;s(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Wt.Click,mj,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Wt.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:s,props:i}=this,{onMove:o,options:{activationConstraint:l}}=i;if(!s)return;const c=(n=hh(e))!=null?n:fn,u=Xa(s,c);if(!r&&l){if(n0(l)){if(l.tolerance!=null&&Wu(u,l.tolerance))return this.handleCancel();if(Wu(u,l.distance))return this.handleStart()}if(r0(l)&&Wu(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}e.cancelable&&e.preventDefault(),o(c)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===he.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const gj={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Dc extends wp{constructor(e){const{event:n}=e,r=_i(n.target);super(e,gj,r)}}Dc.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const yj={move:{name:"mousemove"},end:{name:"mouseup"}};var ph;(function(t){t[t.RightClick=2]="RightClick"})(ph||(ph={}));class vj extends wp{constructor(e){super(e,yj,_i(e.event.target))}}vj.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===ph.RightClick?!1:(r==null||r({event:n}),!0)}}];const Hu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class kp extends wp{constructor(e){super(e,Hu)}static setup(){return window.addEventListener(Hu.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Hu.move.name,e)};function e(){}}}kp.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:s}=n;return s.length>1?!1:(r==null||r({event:n}),!0)}}];var ro;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(ro||(ro={}));var Ja;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(Ja||(Ja={}));function xj(t){let{acceleration:e,activator:n=ro.Pointer,canScroll:r,draggingRect:s,enabled:i,interval:o=5,order:l=Ja.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:h,delta:d,threshold:f}=t;const m=wj({delta:d,disabled:!i}),[v,w]=A4(),k=g.useRef({x:0,y:0}),_=g.useRef({x:0,y:0}),p=g.useMemo(()=>{switch(n){case ro.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case ro.DraggableRect:return s}},[n,s,c]),y=g.useRef(null),b=g.useCallback(()=>{const C=y.current;if(!C)return;const N=k.current.x*_.current.x,I=k.current.y*_.current.y;C.scrollBy(N,I)},[]),x=g.useMemo(()=>l===Ja.TreeOrder?[...u].reverse():u,[l,u]);g.useEffect(()=>{if(!i||!u.length||!p){w();return}for(const C of x){if((r==null?void 0:r(C))===!1)continue;const N=u.indexOf(C),I=h[N];if(!I)continue;const{direction:P,speed:S}=aj(C,I,p,e,f);for(const E of["x","y"])m[E][P[E]]||(S[E]=0,P[E]=0);if(S.x>0||S.y>0){w(),y.current=C,v(b,o),k.current=S,_.current=P;return}}k.current={x:0,y:0},_.current={x:0,y:0},w()},[e,b,r,w,i,o,JSON.stringify(p),JSON.stringify(m),v,u,x,h,JSON.stringify(f)])}const bj={x:{[tt.Backward]:!1,[tt.Forward]:!1},y:{[tt.Backward]:!1,[tt.Forward]:!1}};function wj(t){let{delta:e,disabled:n}=t;const r=dh(e);return sl(s=>{if(n||!r||!s)return bj;const i={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[tt.Backward]:s.x[tt.Backward]||i.x===-1,[tt.Forward]:s.x[tt.Forward]||i.x===1},y:{[tt.Backward]:s.y[tt.Backward]||i.y===-1,[tt.Forward]:s.y[tt.Forward]||i.y===1}}},[n,e,r])}function kj(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return sl(s=>{var i;return e==null?null:(i=r??s)!=null?i:null},[r,e])}function Cj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{const{sensor:s}=r,i=s.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...i]},[]),[t,e])}var Fo;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Fo||(Fo={}));var mh;(function(t){t.Optimized="optimized"})(mh||(mh={}));const s0=new Map;function Nj(t,e){let{dragging:n,dependencies:r,config:s}=e;const[i,o]=g.useState(null),{frequency:l,measure:c,strategy:u}=s,h=g.useRef(t),d=k(),f=zo(d),m=g.useCallback(function(_){_===void 0&&(_=[]),!f.current&&o(p=>p===null?_:p.concat(_.filter(y=>!p.includes(y))))},[f]),v=g.useRef(null),w=sl(_=>{if(d&&!n)return s0;if(!_||_===s0||h.current!==t||i!=null){const p=new Map;for(let y of t){if(!y)continue;if(i&&i.length>0&&!i.includes(y.id)&&y.rect.current){p.set(y.id,y.rect.current);continue}const b=y.node.current,x=b?new bp(c(b),b):null;y.rect.current=x,x&&p.set(y.id,x)}return p}return _},[t,i,n,d,c]);return g.useEffect(()=>{h.current=t},[t]),g.useEffect(()=>{d||m()},[n,d]),g.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),g.useEffect(()=>{d||typeof l!="number"||v.current!==null||(v.current=setTimeout(()=>{m(),v.current=null},l))},[l,d,m,...r]),{droppableRects:w,measureDroppableContainers:m,measuringScheduled:i!=null};function k(){switch(u){case Fo.Always:return!1;case Fo.BeforeDragging:return n;default:return!n}}}function vb(t,e){return sl(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function Sj(t,e){return vb(t,e)}function Ej(t){let{callback:e,disabled:n}=t;const r=yp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Mc(t){let{callback:e,disabled:n}=t;const r=yp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Ij(t){return new bp(gi(t),t)}function i0(t,e,n){e===void 0&&(e=Ij);const[r,s]=g.useState(null);function i(){s(c=>{if(!t)return null;if(t.isConnected===!1){var u;return(u=c??n)!=null?u:null}const h=e(t);return JSON.stringify(c)===JSON.stringify(h)?c:h})}const o=Ej({callback(c){if(t)for(const u of c){const{type:h,target:d}=u;if(h==="childList"&&d instanceof HTMLElement&&d.contains(t)){i();break}}}}),l=Mc({callback:i});return Cn(()=>{i(),t?(l==null||l.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),o==null||o.disconnect())},[t]),r}function Tj(t){const e=vb(t);return ub(t,e)}const o0=[];function Rj(t){const e=g.useRef(t),n=sl(r=>t?r&&r!==o0&&t&&e.current&&t.parentNode===e.current.parentNode?r:xp(t):o0,[t]);return g.useEffect(()=>{e.current=t},[t]),n}function jj(t){const[e,n]=g.useState(null),r=g.useRef(t),s=g.useCallback(i=>{const o=$u(i.target);o&&n(l=>l?(l.set(o,fh(o)),new Map(l)):null)},[]);return g.useEffect(()=>{const i=r.current;if(t!==i){o(i);const l=t.map(c=>{const u=$u(c);return u?(u.addEventListener("scroll",s,{passive:!0}),[u,fh(u)]):null}).filter(c=>c!=null);n(l.length?new Map(l):null),r.current=t}return()=>{o(t),o(i)};function o(l){l.forEach(c=>{const u=$u(c);u==null||u.removeEventListener("scroll",s)})}},[s,t]),g.useMemo(()=>t.length?e?Array.from(e.values()).reduce((i,o)=>Ws(i,o),fn):_b(t):fn,[t,e])}function l0(t,e){e===void 0&&(e=[]);const n=g.useRef(null);return g.useEffect(()=>{n.current=null},e),g.useEffect(()=>{const r=t!==fn;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Xa(t,n.current):fn}function Pj(t){g.useEffect(()=>{if(!Oc)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function Aj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{let{eventName:s,handler:i}=r;return n[s]=o=>{i(o,e)},n},{}),[t,e])}function xb(t){return g.useMemo(()=>t?sj(t):null,[t])}const a0=[];function Lj(t,e){e===void 0&&(e=gi);const[n]=t,r=xb(n?At(n):null),[s,i]=g.useState(a0);function o(){i(()=>t.length?t.map(c=>pb(c)?r:new bp(e(c),c)):a0)}const l=Mc({callback:o});return Cn(()=>{l==null||l.disconnect(),o(),t.forEach(c=>l==null?void 0:l.observe(c))},[t]),s}function Oj(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return rl(e)?e:t}function Dj(t){let{measure:e}=t;const[n,r]=g.useState(null),s=g.useCallback(u=>{for(const{target:h}of u)if(rl(h)){r(d=>{const f=e(h);return d?{...d,width:f.width,height:f.height}:f});break}},[e]),i=Mc({callback:s}),o=g.useCallback(u=>{const h=Oj(u);i==null||i.disconnect(),h&&(i==null||i.observe(h)),r(h?e(h):null)},[e,i]),[l,c]=Ga(o);return g.useMemo(()=>({nodeRef:l,rect:n,setRef:c}),[n,l,c])}const Mj=[{sensor:Dc,options:{}},{sensor:yb,options:{}}],Uj={current:{}},ea={draggable:{measure:e0},droppable:{measure:e0,strategy:Fo.WhileDragging,frequency:mh.Optimized},dragOverlay:{measure:gi}};class so extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const zj={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new so,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ka},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ea,measureDroppableContainers:Ka,windowRect:null,measuringScheduled:!1},Fj={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ka,draggableNodes:new Map,over:null,measureDroppableContainers:Ka},Uc=g.createContext(Fj),bb=g.createContext(zj);function Bj(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new so}}}function $j(t,e){switch(e.type){case Qe.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case Qe.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case Qe.DragEnd:case Qe.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Qe.RegisterDroppable:{const{element:n}=e,{id:r}=n,s=new so(t.droppable.containers);return s.set(r,n),{...t,droppable:{...t.droppable,containers:s}}}case Qe.SetDroppableDisabled:{const{id:n,key:r,disabled:s}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const o=new so(t.droppable.containers);return o.set(n,{...i,disabled:s}),{...t,droppable:{...t.droppable,containers:o}}}case Qe.UnregisterDroppable:{const{id:n,key:r}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const i=new so(t.droppable.containers);return i.delete(n),{...t,droppable:{...t.droppable,containers:i}}}default:return t}}function Wj(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:s}=g.useContext(Uc),i=dh(r),o=dh(n==null?void 0:n.id);return g.useEffect(()=>{if(!e&&!r&&i&&o!=null){if(!vp(i)||document.activeElement===i.target)return;const l=s.get(o);if(!l)return;const{activatorNode:c,node:u}=l;if(!c.current&&!u.current)return;requestAnimationFrame(()=>{for(const h of[c.current,u.current]){if(!h)continue;const d=D4(h);if(d){d.focus();break}}})}},[r,e,s,o,i]),null}function Hj(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((s,i)=>i({transform:s,...r}),n):n}function Vj(t){return g.useMemo(()=>({draggable:{...ea.draggable,...t==null?void 0:t.draggable},droppable:{...ea.droppable,...t==null?void 0:t.droppable},dragOverlay:{...ea.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function Yj(t){let{activeNode:e,measure:n,initialRect:r,config:s=!0}=t;const i=g.useRef(!1),{x:o,y:l}=typeof s=="boolean"?{x:s,y:s}:s;Cn(()=>{if(!o&&!l||!e){i.current=!1;return}if(i.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const h=n(u),d=ub(h,r);if(o||(d.x=0),l||(d.y=0),i.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const f=db(u);f&&f.scrollBy({top:d.y,left:d.x})}},[e,o,l,r,n])}const wb=g.createContext({...fn,scaleX:1,scaleY:1});var or;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(or||(or={}));const kb=g.memo(function(e){var n,r,s,i;let{id:o,accessibility:l,autoScroll:c=!0,children:u,sensors:h=Mj,collisionDetection:d=q4,measuring:f,modifiers:m,...v}=e;const w=g.useReducer($j,void 0,Bj),[k,_]=w,[p,y]=$4(),[b,x]=g.useState(or.Uninitialized),C=b===or.Initialized,{draggable:{active:N,nodes:I,translate:P},droppable:{containers:S}}=k,E=N!=null?I.get(N):null,R=g.useRef({initial:null,translated:null}),M=g.useMemo(()=>{var Ve;return N!=null?{id:N,data:(Ve=E==null?void 0:E.data)!=null?Ve:Uj,rect:R}:null},[N,E]),H=g.useRef(null),[K,te]=g.useState(null),[se,D]=g.useState(null),U=zo(v,Object.values(v)),B=il("DndDescribedBy",o),Y=g.useMemo(()=>S.getEnabled(),[S]),J=Vj(f),{droppableRects:ee,measureDroppableContainers:me,measuringScheduled:He}=Nj(Y,{dragging:C,dependencies:[P.x,P.y],config:J.droppable}),fe=kj(I,N),qe=g.useMemo(()=>se?hh(se):null,[se]),Be=ul(),A=Sj(fe,J.draggable.measure);Yj({activeNode:N!=null?I.get(N):null,config:Be.layoutShiftCompensation,initialRect:A,measure:J.draggable.measure});const L=i0(fe,J.draggable.measure,A),G=i0(fe?fe.parentElement:null),_e=g.useRef({activatorEvent:null,active:null,activeNode:fe,collisionRect:null,collisions:null,droppableRects:ee,draggableNodes:I,draggingNode:null,draggingNodeRect:null,droppableContainers:S,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),ce=S.getNodeFor((n=_e.current.over)==null?void 0:n.id),j=Dj({measure:J.dragOverlay.measure}),re=(r=j.nodeRef.current)!=null?r:fe,Q=C?(s=j.rect)!=null?s:L:null,ve=!!(j.nodeRef.current&&j.rect),_t=Tj(ve?null:L),Jt=xb(re?At(re):null),ct=Rj(C?ce??fe:null),Kn=Lj(ct),Lt=Hj(m,{transform:{x:P.x-_t.x,y:P.y-_t.y,scaleX:1,scaleY:1},activatorEvent:se,active:M,activeNodeRect:L,containerNodeRect:G,draggingNodeRect:Q,over:_e.current.over,overlayNodeRect:j.rect,scrollableAncestors:ct,scrollableAncestorRects:Kn,windowRect:Jt}),Ot=qe?Ws(qe,P):null,ol=jj(ct),ll=l0(ol),Fc=l0(ol,[L]),qn=Ws(Lt,ll),Jn=Q?ej(Q,Lt):null,Zn=M&&Jn?d({active:M,collisionRect:Jn,droppableRects:ee,droppableContainers:Y,pointerCoordinates:Ot}):null,al=X4(Zn,"id"),[pn,yi]=g.useState(null),Bc=ve?Lt:Ws(Lt,Fc),$c=J4(Bc,(i=pn==null?void 0:pn.rect)!=null?i:null,L),fs=g.useRef(null),cl=g.useCallback((Ve,ut)=>{let{sensor:dt,options:Zt}=ut;if(H.current==null)return;const T=I.get(H.current);if(!T)return;const F=Ve.nativeEvent,V=new dt({active:H.current,activeNode:T,event:F,options:Zt,context:_e,onAbort(q){if(!I.get(q))return;const{onDragAbort:xe}=U.current,Ne={id:q};xe==null||xe(Ne),p({type:"onDragAbort",event:Ne})},onPending(q,ze,xe,Ne){if(!I.get(q))return;const{onDragPending:xi}=U.current,er={id:q,constraint:ze,initialCoordinates:xe,offset:Ne};xi==null||xi(er),p({type:"onDragPending",event:er})},onStart(q){const ze=H.current;if(ze==null)return;const xe=I.get(ze);if(!xe)return;const{onDragStart:Ne}=U.current,vi={activatorEvent:F,active:{id:ze,data:xe.data,rect:R}};Rs.unstable_batchedUpdates(()=>{Ne==null||Ne(vi),x(or.Initializing),_({type:Qe.DragStart,initialCoordinates:q,active:ze}),p({type:"onDragStart",event:vi}),te(fs.current),D(F)})},onMove(q){_({type:Qe.DragMove,coordinates:q})},onEnd:ne(Qe.DragEnd),onCancel:ne(Qe.DragCancel)});fs.current=V;function ne(q){return async function(){const{active:xe,collisions:Ne,over:vi,scrollAdjustedTranslate:xi}=_e.current;let er=null;if(xe&&xi){const{cancelDrop:bi}=U.current;er={activatorEvent:F,active:xe,collisions:Ne,delta:xi,over:vi},q===Qe.DragEnd&&typeof bi=="function"&&await Promise.resolve(bi(er))&&(q=Qe.DragCancel)}H.current=null,Rs.unstable_batchedUpdates(()=>{_({type:q}),x(or.Uninitialized),yi(null),te(null),D(null),fs.current=null;const bi=q===Qe.DragEnd?"onDragEnd":"onDragCancel";if(er){const Yc=U.current[bi];Yc==null||Yc(er),p({type:bi,event:er})}})}}},[I]),Wc=g.useCallback((Ve,ut)=>(dt,Zt)=>{const T=dt.nativeEvent,F=I.get(Zt);if(H.current!==null||!F||T.dndKit||T.defaultPrevented)return;const V={active:F};Ve(dt,ut.options,V)===!0&&(T.dndKit={capturedBy:ut.sensor},H.current=Zt,cl(dt,ut))},[I,cl]),ps=Cj(h,Wc);Pj(h),Cn(()=>{L&&b===or.Initializing&&x(or.Initialized)},[L,b]),g.useEffect(()=>{const{onDragMove:Ve}=U.current,{active:ut,activatorEvent:dt,collisions:Zt,over:T}=_e.current;if(!ut||!dt)return;const F={active:ut,activatorEvent:dt,collisions:Zt,delta:{x:qn.x,y:qn.y},over:T};Rs.unstable_batchedUpdates(()=>{Ve==null||Ve(F),p({type:"onDragMove",event:F})})},[qn.x,qn.y]),g.useEffect(()=>{const{active:Ve,activatorEvent:ut,collisions:dt,droppableContainers:Zt,scrollAdjustedTranslate:T}=_e.current;if(!Ve||H.current==null||!ut||!T)return;const{onDragOver:F}=U.current,V=Zt.get(al),ne=V&&V.rect.current?{id:V.id,rect:V.rect.current,data:V.data,disabled:V.disabled}:null,q={active:Ve,activatorEvent:ut,collisions:dt,delta:{x:T.x,y:T.y},over:ne};Rs.unstable_batchedUpdates(()=>{yi(ne),F==null||F(q),p({type:"onDragOver",event:q})})},[al]),Cn(()=>{_e.current={activatorEvent:se,active:M,activeNode:fe,collisionRect:Jn,collisions:Zn,droppableRects:ee,draggableNodes:I,draggingNode:re,draggingNodeRect:Q,droppableContainers:S,over:pn,scrollableAncestors:ct,scrollAdjustedTranslate:qn},R.current={initial:Q,translated:Jn}},[M,fe,Zn,Jn,I,re,Q,ee,S,pn,ct,qn]),xj({...Be,delta:P,draggingRect:Jn,pointerCoordinates:Ot,scrollableAncestors:ct,scrollableAncestorRects:Kn});const Hc=g.useMemo(()=>({active:M,activeNode:fe,activeNodeRect:L,activatorEvent:se,collisions:Zn,containerNodeRect:G,dragOverlay:j,draggableNodes:I,droppableContainers:S,droppableRects:ee,over:pn,measureDroppableContainers:me,scrollableAncestors:ct,scrollableAncestorRects:Kn,measuringConfiguration:J,measuringScheduled:He,windowRect:Jt}),[M,fe,L,se,Zn,G,j,I,S,ee,pn,me,ct,Kn,J,He,Jt]),Vc=g.useMemo(()=>({activatorEvent:se,activators:ps,active:M,activeNodeRect:L,ariaDescribedById:{draggable:B},dispatch:_,draggableNodes:I,over:pn,measureDroppableContainers:me}),[se,ps,M,L,_,B,I,pn,me]);return vt.createElement(lb.Provider,{value:y},vt.createElement(Uc.Provider,{value:Vc},vt.createElement(bb.Provider,{value:Hc},vt.createElement(wb.Provider,{value:$c},u)),vt.createElement(Wj,{disabled:(l==null?void 0:l.restoreFocus)===!1})),vt.createElement(V4,{...l,hiddenTextDescribedById:B}));function ul(){const Ve=(K==null?void 0:K.autoScrollEnabled)===!1,ut=typeof c=="object"?c.enabled===!1:c===!1,dt=C&&!Ve&&!ut;return typeof c=="object"?{...c,enabled:dt}:{enabled:dt}}}),Qj=g.createContext(null),c0="button",Gj="Draggable";function Xj(t){let{id:e,data:n,disabled:r=!1,attributes:s}=t;const i=il(Gj),{activators:o,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:h,draggableNodes:d,over:f}=g.useContext(Uc),{role:m=c0,roleDescription:v="draggable",tabIndex:w=0}=s??{},k=(c==null?void 0:c.id)===e,_=g.useContext(k?wb:Qj),[p,y]=Ga(),[b,x]=Ga(),C=Aj(o,e),N=zo(n);Cn(()=>(d.set(e,{id:e,key:i,node:p,activatorNode:b,data:N}),()=>{const P=d.get(e);P&&P.key===i&&d.delete(e)}),[d,e]);const I=g.useMemo(()=>({role:m,tabIndex:w,"aria-disabled":r,"aria-pressed":k&&m===c0?!0:void 0,"aria-roledescription":v,"aria-describedby":h.draggable}),[r,m,w,k,v,h.draggable]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:I,isDragging:k,listeners:r?void 0:C,node:p,over:f,setNodeRef:y,setActivatorNodeRef:x,transform:_}}function Kj(){return g.useContext(bb)}const qj="Droppable",Jj={timeout:25};function Zj(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:s}=t;const i=il(qj),{active:o,dispatch:l,over:c,measureDroppableContainers:u}=g.useContext(Uc),h=g.useRef({disabled:n}),d=g.useRef(!1),f=g.useRef(null),m=g.useRef(null),{disabled:v,updateMeasurementsFor:w,timeout:k}={...Jj,...s},_=zo(w??r),p=g.useCallback(()=>{if(!d.current){d.current=!0;return}m.current!=null&&clearTimeout(m.current),m.current=setTimeout(()=>{u(Array.isArray(_.current)?_.current:[_.current]),m.current=null},k)},[k]),y=Mc({callback:p,disabled:v||!o}),b=g.useCallback((I,P)=>{y&&(P&&(y.unobserve(P),d.current=!1),I&&y.observe(I))},[y]),[x,C]=Ga(b),N=zo(e);return g.useEffect(()=>{!y||!x.current||(y.disconnect(),d.current=!1,y.observe(x.current))},[x,y]),g.useEffect(()=>(l({type:Qe.RegisterDroppable,element:{id:r,key:i,disabled:n,node:x,rect:f,data:N}}),()=>l({type:Qe.UnregisterDroppable,key:i,id:r})),[r]),g.useEffect(()=>{n!==h.current.disabled&&(l({type:Qe.SetDroppableDisabled,id:r,key:i,disabled:n}),h.current.disabled=n)},[r,i,n,l]),{active:o,rect:f,isOver:(c==null?void 0:c.id)===r,node:x,over:c,setNodeRef:C}}function zc(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function eP(t,e){return t.reduce((n,r,s)=>{const i=e.get(r);return i&&(n[s]=i),n},Array(t.length))}function Al(t){return t!==null&&t>=0}function tP(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function nP(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const Cb=t=>{let{rects:e,activeIndex:n,overIndex:r,index:s}=t;const i=zc(e,r,n),o=e[s],l=i[s];return!l||!o?null:{x:l.left-o.left,y:l.top-o.top,scaleX:l.width/o.width,scaleY:l.height/o.height}},Ll={scaleX:1,scaleY:1},Nb=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:s,rects:i,overIndex:o}=t;const l=(e=i[n])!=null?e:r;if(!l)return null;if(s===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(l.top+l.height):u.top-l.top,...Ll}:null}const c=rP(i,s,n);return s>n&&s<=o?{x:0,y:-l.height-c,...Ll}:s<n&&s>=o?{x:0,y:l.height+c,...Ll}:{x:0,y:0,...Ll}};function rP(t,e,n){const r=t[e],s=t[e-1],i=t[e+1];return r?n<e?s?r.top-(s.top+s.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):s?r.top-(s.top+s.height):0:0}const Sb="Sortable",Eb=vt.createContext({activeIndex:-1,containerId:Sb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Cb,disabled:{draggable:!1,droppable:!1}});function Ib(t){let{children:e,id:n,items:r,strategy:s=Cb,disabled:i=!1}=t;const{active:o,dragOverlay:l,droppableRects:c,over:u,measureDroppableContainers:h}=Kj(),d=il(Sb,n),f=l.rect!==null,m=g.useMemo(()=>r.map(C=>typeof C=="object"&&"id"in C?C.id:C),[r]),v=o!=null,w=o?m.indexOf(o.id):-1,k=u?m.indexOf(u.id):-1,_=g.useRef(m),p=!tP(m,_.current),y=k!==-1&&w===-1||p,b=nP(i);Cn(()=>{p&&v&&h(m)},[p,m,v,h]),g.useEffect(()=>{_.current=m},[m]);const x=g.useMemo(()=>({activeIndex:w,containerId:d,disabled:b,disableTransforms:y,items:m,overIndex:k,useDragOverlay:f,sortedRects:eP(m,c),strategy:s}),[w,d,b.draggable,b.droppable,y,m,k,c,f,s]);return vt.createElement(Eb.Provider,{value:x},e)}const sP=t=>{let{id:e,items:n,activeIndex:r,overIndex:s}=t;return zc(n,r,s).indexOf(e)},iP=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:s,items:i,newIndex:o,previousItems:l,previousContainerId:c,transition:u}=t;return!u||!r||l!==i&&s===o?!1:n?!0:o!==s&&e===c},oP={duration:200,easing:"ease"},Tb="transform",lP=ii.Transition.toString({property:Tb,duration:0,easing:"linear"}),aP={roleDescription:"sortable"};function cP(t){let{disabled:e,index:n,node:r,rect:s}=t;const[i,o]=g.useState(null),l=g.useRef(n);return Cn(()=>{if(!e&&n!==l.current&&r.current){const c=s.current;if(c){const u=gi(r.current,{ignoreTransform:!0}),h={x:c.left-u.left,y:c.top-u.top,scaleX:c.width/u.width,scaleY:c.height/u.height};(h.x||h.y)&&o(h)}}n!==l.current&&(l.current=n)},[e,n,r,s]),g.useEffect(()=>{i&&o(null)},[i]),i}function Rb(t){let{animateLayoutChanges:e=iP,attributes:n,disabled:r,data:s,getNewIndex:i=sP,id:o,strategy:l,resizeObserverConfig:c,transition:u=oP}=t;const{items:h,containerId:d,activeIndex:f,disabled:m,disableTransforms:v,sortedRects:w,overIndex:k,useDragOverlay:_,strategy:p}=g.useContext(Eb),y=uP(r,m),b=h.indexOf(o),x=g.useMemo(()=>({sortable:{containerId:d,index:b,items:h},...s}),[d,s,b,h]),C=g.useMemo(()=>h.slice(h.indexOf(o)),[h,o]),{rect:N,node:I,isOver:P,setNodeRef:S}=Zj({id:o,data:x,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:C,...c}}),{active:E,activatorEvent:R,activeNodeRect:M,attributes:H,setNodeRef:K,listeners:te,isDragging:se,over:D,setActivatorNodeRef:U,transform:B}=Xj({id:o,data:x,attributes:{...aP,...n},disabled:y.draggable}),Y=P4(S,K),J=!!E,ee=J&&!v&&Al(f)&&Al(k),me=!_&&se,He=me&&ee?B:null,qe=ee?He??(l??p)({rects:w,activeNodeRect:M,activeIndex:f,overIndex:k,index:b}):null,Be=Al(f)&&Al(k)?i({id:o,items:h,activeIndex:f,overIndex:k}):b,A=E==null?void 0:E.id,L=g.useRef({activeId:A,items:h,newIndex:Be,containerId:d}),G=h!==L.current.items,_e=e({active:E,containerId:d,isDragging:se,isSorting:J,id:o,index:b,items:h,newIndex:L.current.newIndex,previousItems:L.current.items,previousContainerId:L.current.containerId,transition:u,wasDragging:L.current.activeId!=null}),ce=cP({disabled:!_e,index:b,node:I,rect:N});return g.useEffect(()=>{J&&L.current.newIndex!==Be&&(L.current.newIndex=Be),d!==L.current.containerId&&(L.current.containerId=d),h!==L.current.items&&(L.current.items=h)},[J,Be,d,h]),g.useEffect(()=>{if(A===L.current.activeId)return;if(A!=null&&L.current.activeId==null){L.current.activeId=A;return}const re=setTimeout(()=>{L.current.activeId=A},50);return()=>clearTimeout(re)},[A]),{active:E,activeIndex:f,attributes:H,data:x,rect:N,index:b,newIndex:Be,items:h,isOver:P,isSorting:J,isDragging:se,listeners:te,node:I,overIndex:k,over:D,setNodeRef:Y,setActivatorNodeRef:U,setDroppableNodeRef:S,setDraggableNodeRef:K,transform:ce??qe,transition:j()};function j(){if(ce||G&&L.current.newIndex===b)return lP;if(!(me&&!vp(R)||!u)&&(J||_e))return ii.Transition.toString({...u,property:Tb})}}function uP(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}he.Down,he.Right,he.Up,he.Left;const u0={"clipboard-list":ch,footprints:pR,briefcase:UT,plane:t4,"person-standing":ZR,backpack:PT,umbrella:N4,tent:w4,target:x4,"shopping-cart":f4,shirt:d4,dumbbell:aR,mountain:VR,baby:LT,camera:Ac,heart:bR,music:QR,"book-open":DT,coffee:nR,gift:yR},d0={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function dP(t){return d0[t]?u0[d0[t]]||ch:u0[t]||ch}function io({name:t,size:e=20,className:n=""}){const r=dP(t);return a.jsx(r,{size:e,className:n})}function hP({message:t,onUndo:e,onDismiss:n}){const r=g.useRef(null);return g.useEffect(()=>(r.current=setTimeout(n,4e3),()=>clearTimeout(r.current)),[t,n]),a.jsxs("div",{className:"fixed left-4 right-4 bottom-[calc(4rem+env(safe-area-inset-bottom)+0.5rem)] z-50 flex items-center justify-between bg-slate-800 dark:bg-slate-700 text-white rounded-xl px-4 py-3 shadow-lg animate-slide-up",children:[a.jsx("span",{className:"text-sm truncate mr-3",children:t}),a.jsx("button",{onClick:()=>{clearTimeout(r.current),e()},className:"text-sm font-semibold text-indigo-300 active:text-indigo-200 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center",children:"復原"})]})}function fP(t,e=800,n=.7){return new Promise((r,s)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:c}=i;(l>e||c>e)&&(l>c?(c=Math.round(c*e/l),l=e):(l=Math.round(l*e/c),c=e));const u=document.createElement("canvas");u.width=l,u.height=c,u.getContext("2d").drawImage(i,0,0,l,c),u.toBlob(d=>{if(!d){s(new Error("Canvas toBlob failed"));return}r(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),s(new Error("Failed to load image"))},i.src=o})}function jb(t){const[e,n]=g.useState(!1),[r,s]=g.useState(null);return{uploadPhoto:async(l,c)=>{if(!t)throw new Error("Not logged in");n(!0),s(null);try{const u=await fP(c),h=`users/${t.uid}/items/${l}/photo.jpg`,d=Y_(Q_,h);return await aT(d,u,{contentType:"image/jpeg"}),await cT(d)}catch(u){throw s(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const c=`users/${t.uid}/items/${l}/photo.jpg`,u=Y_(Q_,c);await uT(u)}catch(c){c.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",c)}},uploading:e,error:r}}function Ol({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function pP(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return a.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>a.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"animate-celebration-text text-center",children:[a.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),a.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function mP({item:t}){const{attributes:e,listeners:n,setNodeRef:r,transform:s,transition:i,isDragging:o}=Rb({id:t.id}),l={transform:ii.Transform.toString(s),transition:i,zIndex:o?50:void 0,position:"relative"};return a.jsx("div",{ref:r,style:l,children:a.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${o?"shadow-lg opacity-90":""}`,children:[a.jsx("div",{...e,...n,className:"w-6 h-6 mr-4 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:a.jsx(tb,{size:20})}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx("div",{className:"text-lg text-slate-800 dark:text-slate-100",children:t.name})})]})})}function _P({data:t,user:e,syncStatus:n,onLogin:r,onLogout:s,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:c,categories:u=[]}){var ut,dt,Zt;const[h,d]=g.useState([]),[f,m]=g.useState(null),[v,w]=g.useState(null),[k,_]=g.useState([]),[p,y]=g.useState(!1),[b,x]=g.useState("default"),[C,N]=g.useState(!1),[I,P]=g.useState(""),[S,E]=g.useState(u[0]||""),[R,M]=g.useState(null),[H,K]=g.useState(null),[te,se]=g.useState(""),[D,U]=g.useState(null),[B,Y]=g.useState(null),[J,ee]=g.useState(!1),me=g.useRef(null),{uploadPhoto:He,deletePhoto:fe,uploading:qe}=jb(e),Be=c&&((ut=l==null?void 0:l.sharedWithMe)==null?void 0:ut[c]),A=c&&((dt=l==null?void 0:l.sharedByMe)==null?void 0:dt[c]),L=Be?"shared-with-me":A?"own-shared":"local",G=Be?l.sharedWithMe[c]:A?l.sharedByMe[c]:null,_e=L!=="shared-with-me"||(()=>{if(!(e!=null&&e.email)||!(G!=null&&G.sharedWith))return!1;const T=ir(e.email);return G.sharedWith[T]==="edit"})(),ce=(Zt=t.lists)==null?void 0:Zt.find(T=>T.id===t.activeListId),j=ce?{...ce,items:Array.isArray(ce.items)?ce.items:[],checkedItems:Array.isArray(ce.checkedItems)?ce.checkedItems:[],inlineItems:Array.isArray(ce.inlineItems)?ce.inlineItems:[]}:null,re=!!(j!=null&&j.disposable);let Q=[],ve=[],_t="",Jt="",ct="";L==="shared-with-me"&&G?(Q=(G.items||[]).filter(Boolean),ve=G.checkedItems||[],_t=G.name||"清單",Jt=G.icon||"clipboard-list",ct=G.ownerName||G.ownerEmail||""):L==="own-shared"&&j&&G?(re?Q=j.inlineItems:Q=j.items.map(T=>{var F;return(F=t.itemLibrary)==null?void 0:F.find(V=>V.id===T)}).filter(Boolean),ve=G.checkedItems||[],_t=j.name||"清單",Jt=j.icon||"clipboard-list"):re&&j?(Q=j.inlineItems,ve=j.checkedItems,_t=j.name||"清單",Jt=j.icon||"clipboard-list"):(Q=j?j.items.map(T=>{var F;return(F=t.itemLibrary)==null?void 0:F.find(V=>V.id===T)}).filter(Boolean):[],ve=(j==null?void 0:j.checkedItems)||[],_t=(j==null?void 0:j.name)||"清單",Jt=(j==null?void 0:j.icon)||"clipboard-list");const Kn=ve.length,Lt=Q.length,Ot=Lt>0&&Kn===Lt,ol=Lt>0?Kn/Lt*100:0,ll=g.useRef(Ot);g.useEffect(()=>{if(Ot&&!ll.current){y(!0);const T=setTimeout(()=>y(!1),2500);return()=>clearTimeout(T)}ll.current=Ot},[Ot]);const Fc=(()=>{const T=[],F={};return Q.forEach(V=>{const ne=V.category||"其他";F[ne]||(F[ne]=[]),F[ne].push(V)}),u.forEach(V=>{F[V]&&(T.push({category:V,items:F[V]}),delete F[V])}),Object.keys(F).forEach(V=>{T.push({category:V,items:F[V]})}),T})(),qn=b==="name"?[...Q].sort((T,F)=>T.name.localeCompare(F.name,"zh-Hant")):b==="unchecked"?[...Q].sort((T,F)=>{const V=ve.includes(T.id)?1:0,ne=ve.includes(F.id)?1:0;return V-ne}):Q,Jn=()=>{x(T=>T==="default"?"name":T==="name"?"unchecked":T==="unchecked"?L==="shared-with-me"?"default":"manual":"default")},Zn=b==="name"?"名稱":b==="unchecked"?"未勾選":b==="manual"?"手動":"",al=ab(qa(Dc,{activationConstraint:{distance:5}}),qa(kp,{activationConstraint:{delay:150,tolerance:5}})),pn=T=>{const{active:F,over:V}=T;if(!V||F.id===V.id)return;const ne=j.items.indexOf(F.id),q=j.items.indexOf(V.id);if(ne===-1||q===-1)return;const ze=zc(j.items,ne,q),xe={...t,lists:t.lists.map(Ne=>Ne.id===t.activeListId?{...Ne,items:ze}:Ne)};o(xe)},yi=(T,F)=>{w(T);const V=ve.includes(T);if(L==="shared-with-me"||L==="own-shared")l.toggleSharedCheck(c,T);else{const ne={...t,lists:t.lists.map(q=>{if(q.id!==t.activeListId)return q;const ze=Array.isArray(q.checkedItems)?q.checkedItems:[],xe=ze.includes(T);return{...q,checkedItems:xe?ze.filter(Ne=>Ne!==T):[...ze,T]}})};o(ne)}if(!F){const ne=Q.find(q=>q.id===T);ne&&K({itemId:T,itemName:ne.name,isChecked:!V})}},Bc=()=>{if(L==="shared-with-me"||L==="own-shared")l.resetSharedChecks(c);else{const T={...t,lists:t.lists.map(F=>F.id===t.activeListId?{...F,checkedItems:[]}:F)};o(T)}},$c=()=>{if(L==="shared-with-me"||L==="own-shared"){const T=Q.map(F=>F.id);l.checkAllShared(c,T)}else{if(!j)return;const T={...t,lists:t.lists.map(F=>F.id===t.activeListId?{...F,checkedItems:[...j.items]}:F)};o(T)}},fs=async(T,F)=>{if(!j||!T.trim())return;const V="d_"+Date.now();let ne;if(F&&e)try{ne=await He(V,F)}catch{}const q={id:V,name:T.trim(),...ne&&{photoURL:ne}},ze={...t,lists:t.lists.map(xe=>xe.id===t.activeListId?{...xe,inlineItems:[...Array.isArray(xe.inlineItems)?xe.inlineItems:[],q]}:xe)};o(ze)},cl=T=>{if(!j)return;const F=(j.inlineItems||[]).find(ne=>ne.id===T);F!=null&&F.photoURL&&fe(T);const V={...t,lists:t.lists.map(ne=>ne.id!==t.activeListId?ne:{...ne,inlineItems:(ne.inlineItems||[]).filter(q=>q.id!==T),checkedItems:(ne.checkedItems||[]).filter(q=>q!==T)})};o(V)},Wc=()=>{const T=t.lists.filter(V=>V.id!==t.activeListId),F={...t,lists:T,activeListId:T.length>0?T[0].id:t.activeListId};o(F),i("lists")},ps=g.useRef(!1);g.useEffect(()=>{if(re&&Ot&&Lt>0&&!ps.current){const T=setTimeout(()=>ee(!0),2600);return ps.current=!0,()=>clearTimeout(T)}Ot||(ps.current=!1)},[re,Ot,Lt]);const Hc=T=>{d(F=>F.includes(T)?F.filter(V=>V!==T):[...F,T])},Vc=T=>{_(F=>F.includes(T)?F.filter(V=>V!==T):[...F,T])},ul=()=>{const T=I.trim();if(T){if(L==="shared-with-me"){const V={id:"shared_item_"+Date.now(),name:T,category:S};l.addSharedItem(c,V)}else{if(!j)return;const F="item_"+Date.now(),V={id:F,name:T,category:S},ne={...t,itemLibrary:[...t.itemLibrary||[],V],lists:t.lists.map(q=>q.id!==t.activeListId?q:{...q,items:[...Array.isArray(q.items)?q.items:[],F]})};o(ne)}P(""),N(!1)}},Ve=T=>{var xe;const F=ve.includes(T.id),V=(xe=T.note)==null?void 0:xe.trim(),ne=V||T.photoURL,q=h.includes(T.id),ze=v===T.id;return a.jsxs("div",{children:[a.jsxs("div",{onClick:()=>yi(T.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${F?"bg-slate-50 dark:bg-slate-800/50":""} ${ne&&q?"rounded-b-none border-b-0":""}`,children:[a.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${F?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}
              ${ze&&F?"animate-check-bounce":""}`,onAnimationEnd:()=>w(null),children:F&&a.jsx(si,{size:14,className:`text-white ${ze?"animate-check-icon-in":""}`})}),T.photoURL&&a.jsx("img",{src:T.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Ne=>{Ne.target.style.display="none"}}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx("div",{className:`text-lg transition-all duration-300 ${F?"line-through text-slate-400 dark:text-slate-500 opacity-60":"text-slate-800 dark:text-slate-100"}`,children:T.name})}),ne&&a.jsx("button",{onClick:Ne=>{Ne.stopPropagation(),Hc(T.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${q?"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400":"text-slate-400"}`,"aria-label":"展開詳情",children:a.jsx(q_,{size:18,className:`transition-transform duration-200 ${q?"rotate-180":""}`})}),L==="shared-with-me"&&_e&&a.jsx("button",{onClick:Ne=>{Ne.stopPropagation(),M(T.id)},className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"移除物品",children:a.jsx(dn,{size:16})}),re&&L!=="shared-with-me"&&a.jsx("button",{onClick:Ne=>{Ne.stopPropagation(),cl(T.id)},className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"移除項目",children:a.jsx(dn,{size:16})})]}),ne&&q&&a.jsxs("div",{className:"px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl",children:[V&&a.jsxs("div",{className:"flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2",children:[a.jsx(m4,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),a.jsx("span",{children:T.note})]}),T.photoURL&&a.jsx("div",{className:V?"mt-2":"",children:a.jsx("img",{src:T.photoURL,alt:T.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Ne=>{Ne.target.style.display="none"}})})]})]},T.id)};return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[a.jsx("button",{onClick:()=>i("lists"),className:"p-1 -ml-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0","aria-label":"返回所有清單",children:a.jsx(QT,{size:22,className:"text-slate-500 dark:text-slate-400"})}),a.jsx(io,{name:Jt,size:22,className:"text-indigo-600 dark:text-indigo-400 flex-shrink-0"}),a.jsx("span",{className:"text-lg font-bold truncate",children:_t}),L==="shared-with-me"&&ct&&a.jsxs("span",{className:"text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0",children:["來自 ",ct]}),re&&a.jsx("span",{className:"text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex-shrink-0",children:"一次性"}),L==="own-shared"&&a.jsx("span",{className:"text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"flex items-center flex-shrink-0",children:[Q.length>0&&a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("button",{onClick:Jn,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                    ${b!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:a.jsx(Jx,{size:20})}),Zn&&a.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:Zn})]}),L!=="shared-with-me"&&!re&&a.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:a.jsx(Yn,{size:22,className:"text-indigo-600 dark:text-indigo-400"})})]})]}),Lt>0&&a.jsxs("div",{className:"mt-3",children:[a.jsxs("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1",children:[a.jsx("span",{children:"完成進度"}),a.jsxs("span",{children:[Kn,"/",Lt]})]}),a.jsx("div",{className:"h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300",style:{width:`${ol}%`}})})]})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[Q.length===0?a.jsxs("div",{className:"text-center py-16 text-slate-400",children:[a.jsx(kR,{size:48,className:"mx-auto mb-4 text-slate-300 dark:text-slate-600"}),a.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),re?a.jsx("div",{className:"text-sm",children:"點右下角按鈕新增項目"}):L!=="shared-with-me"?a.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150",children:"從物品庫加入物品"}):null]}):a.jsx("div",{className:"space-y-4",children:b==="manual"?a.jsx(kb,{sensors:al,collisionDetection:cb,onDragEnd:pn,children:a.jsx(Ib,{items:Q.map(T=>T.id),strategy:Nb,children:a.jsx("div",{className:"space-y-2",children:Q.map(T=>a.jsx(mP,{item:T},T.id))})})}):b==="default"&&!re?Fc.map(({category:T,items:F})=>{const V=k.includes(T),ne=F.filter(xe=>ve.includes(xe.id)).length,q=F.length,ze=ne===q;return a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>Vc(T),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[a.jsx(q_,{size:16,className:`text-slate-400 transition-transform duration-200 ${V?"-rotate-90":""}`}),a.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:T}),a.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${ze?"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,children:[ne,"/",q]})]}),!V&&a.jsx("div",{className:"space-y-2 animate-slide-down",children:F.map(xe=>Ve(xe))})]},T)}):a.jsx("div",{className:"space-y-2",children:qn.map(T=>Ve(T))})}),Q.length>0&&a.jsx("div",{className:"pt-4 pb-16",children:a.jsxs("div",{className:"flex gap-3",children:[a.jsxs("button",{onClick:()=>m("reset"),className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:[a.jsx(s4,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),a.jsxs("button",{onClick:()=>m("checkAll"),disabled:Ot,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${Ot?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400":"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600"}`,children:[a.jsx(WT,{size:16,className:"inline mr-1.5 -mt-0.5"}),Ot?"準備完成！":"全部確認"]})]})})]}),f==="reset"&&a.jsx(Ol,{message:"確定要重設所有勾選？",onConfirm:()=>{Bc(),m(null)},onCancel:()=>m(null)}),f==="checkAll"&&a.jsx(Ol,{message:"確定要勾選全部項目？",onConfirm:()=>{$c(),m(null)},onCancel:()=>m(null)}),p&&a.jsx(pP,{}),R!==null&&a.jsx(Ol,{message:"確定要移除此物品？",onConfirm:()=>{l.removeSharedItem(c,R),M(null)},onCancel:()=>M(null)}),_e&&a.jsxs(a.Fragment,{children:[C&&a.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{N(!1),P(""),se(""),B&&URL.revokeObjectURL(B),U(null),Y(null)}}),C&&a.jsxs("div",{className:"fixed right-4 bottom-24 z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:re?"新增項目":"快速新增物品"}),re?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",placeholder:"項目名稱",value:te,onChange:T=>se(T.target.value),onKeyDown:async T=>{T.key==="Enter"&&te.trim()&&(await fs(te,D),se(""),B&&URL.revokeObjectURL(B),U(null),Y(null))},className:"w-full pl-3 pr-9 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),e&&a.jsx("button",{type:"button",onClick:()=>{var T;return(T=me.current)==null?void 0:T.click()},className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-0.5 flex items-center justify-center","aria-label":"拍照",children:a.jsx(Ac,{size:16})})]}),a.jsx("input",{ref:me,type:"file",accept:"image/*",onChange:T=>{var V;const F=(V=T.target.files)==null?void 0:V[0];F&&(B&&URL.revokeObjectURL(B),U(F),Y(URL.createObjectURL(F)),T.target.value="")},className:"hidden"}),B&&a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("img",{src:B,alt:"預覽",className:"w-12 h-12 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsx("button",{onClick:()=>{URL.revokeObjectURL(B),U(null),Y(null)},className:"text-xs text-rose-500 px-2 py-1 border border-rose-200 dark:border-rose-800 rounded-lg",children:"移除"})]}),a.jsxs("button",{onClick:async()=>{te.trim()&&(await fs(te,D),se(""),B&&URL.revokeObjectURL(B),U(null),Y(null))},disabled:!te.trim()||qe,className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150 flex items-center justify-center gap-1.5",children:[qe&&a.jsx(pp,{size:14,className:"animate-spin"}),qe?"上傳中...":"新增"]})]}):a.jsxs(a.Fragment,{children:[a.jsx("input",{type:"text",placeholder:"物品名稱",value:I,onChange:T=>P(T.target.value),onKeyDown:T=>{T.key==="Enter"&&ul()},className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("select",{value:S,onChange:T=>E(T.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:u.map(T=>a.jsx("option",{value:T,children:T},T))}),a.jsx("button",{onClick:ul,disabled:!I.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]})]}),a.jsx("button",{onClick:()=>{N(T=>!T),C&&(P(""),se(""),B&&URL.revokeObjectURL(B),U(null),Y(null))},className:"fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":C?"關閉新增表單":"新增項目",children:C?a.jsx(kt,{size:24}):a.jsx(Yn,{size:24})})]}),H&&a.jsx(hP,{message:H.isChecked?`✓ 已勾選 ${H.itemName}`:`已取消勾選 ${H.itemName}`,onUndo:()=>{yi(H.itemId,!0),K(null)},onDismiss:()=>K(null)}),J&&a.jsx(Ol,{message:"清單完成！要刪除嗎？",onConfirm:()=>{ee(!1),Wc()},onCancel:()=>ee(!1)})]})}function gP({sharedData:t,onAddUser:e,onRemoveUser:n,onSetPermission:r,onUnshare:s,onClose:i}){const[o,l]=g.useState(""),[c,u]=g.useState(""),h=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(ah):[],d=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),f=()=>{const v=o.trim().toLowerCase();if(v){if(!d(v)){u("請輸入有效的 Email");return}if(h.includes(v)){u("已經分享給此帳號");return}u(""),e(v),l("")}},m=v=>{v.key==="Enter"&&f()};return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"分享清單"}),a.jsxs("div",{className:"flex gap-2 mb-2",children:[a.jsx("input",{type:"email",value:o,onChange:v=>{l(v.target.value),u("")},onKeyDown:m,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:f,className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),c&&a.jsx("div",{className:"text-sm text-rose-500 mb-3",children:c}),h.length>0&&a.jsxs("div",{className:"mt-4",children:[a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2",children:"已分享給"}),a.jsx("div",{className:"space-y-2",children:h.map(v=>{var _;const w=ir(v),k=((_=t==null?void 0:t.sharedWith)==null?void 0:_[w])||"view";return a.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600",children:[a.jsx("span",{className:"text-slate-700 dark:text-slate-200 text-sm truncate flex-1",children:v}),a.jsx("button",{onClick:()=>r(v,k==="edit"?"view":"edit"),className:`ml-2 p-2 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150
                          ${k==="edit"?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-slate-400"}`,"aria-label":k==="edit"?"切換為檢視":"切換為編輯",title:k==="edit"?"可編輯":"僅檢視",children:k==="edit"?a.jsx(qR,{size:16}):a.jsx(dR,{size:16})}),a.jsx("button",{onClick:()=>n(v),className:"ml-1 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:a.jsx(kt,{size:16})})]},v)})})]}),h.length>0&&a.jsx("button",{onClick:s,className:"w-full mt-4 py-3 border border-rose-300 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),a.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})}function yP({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function vP({list:t,isActive:e}){const{attributes:n,listeners:r,setNodeRef:s,transform:i,transition:o,isDragging:l}=Rb({id:t.id}),c={transform:ii.Transform.toString(i),transition:o,zIndex:l?50:void 0,position:"relative"},u=t.disposable?(t.inlineItems||[]).length:(t.items||[]).length,h=(t.checkedItems||[]).length,d=!!t.sharedListId;return a.jsx("div",{ref:s,style:c,children:a.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${l?"shadow-lg opacity-90":""} ${e?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{...n,...r,className:"w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:a.jsx(tb,{size:20})}),a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(io,{name:t.icon,size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[a.jsx("span",{className:"truncate",children:t.name}),d&&a.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"text-sm text-slate-400",children:[h,"/",u," 已確認"]})]})]})})}function xP({data:t,user:e,onNavigate:n,onSaveData:r,shared:s}){var Be;const[i,o]=g.useState(""),[l,c]=g.useState("clipboard-list"),[u,h]=g.useState(!1),[d,f]=g.useState(null),[m,v]=g.useState(null),[w,k]=g.useState(null),[_,p]=g.useState(!1),[y,b]=g.useState(""),[x,C]=g.useState("default"),[N,I]=g.useState(null),P=(A,L)=>{const G={...t,activeListId:A};r(G),n("checklist",{sharedListId:L||null})},S=A=>{n("checklist",{sharedListId:A})},E=()=>{if(!i.trim())return;const A={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[],...u?{disposable:!0,inlineItems:[]}:{}},L={...t,lists:[...t.lists,A],activeListId:A.id};r(L),o(""),c("clipboard-list"),h(!1),p(!1),n("checklist",{sharedListId:null})},R=async A=>{if(t.lists.length<=1)return;const L=t.lists.find(ce=>ce.id===A);if(L!=null&&L.sharedListId&&s)try{await s.unshareList(L.sharedListId)}catch(ce){console.error("清理分享資料失敗",ce)}const G=t.lists.filter(ce=>ce.id!==A),_e={...t,lists:G,activeListId:t.activeListId===A?G[0].id:t.activeListId};r(_e),k(null)},M=(A,L)=>{L.stopPropagation(),!(t.lists.length<=1)&&k(A)},H=(A,L)=>{L.stopPropagation(),f(A.id),v(A.sharedListId||null)},K=async A=>{const L=t.lists.find(G=>G.id===d);if(!(!L||!s))try{const G=await s.shareList(L,t.itemLibrary,[A]),_e={...t,lists:t.lists.map(ce=>ce.id===d?{...ce,sharedListId:G}:ce)};r(_e),v(G)}catch(G){console.error("分享失敗",G),alert("分享失敗："+G.message)}},te=async A=>{if(m)try{await s.addSharedUser(m,A)}catch(L){console.error("新增分享對象失敗",L)}else await K(A)},se=async A=>{if(!(!m||!s))try{await s.removeSharedUser(m,A)}catch(L){console.error("移除分享對象失敗",L)}},D=async(A,L)=>{if(m&&s)try{await s.setUserPermission(m,A,L)}catch(G){console.error("設定權限失敗",G)}},U=async()=>{if(!(!m||!s))try{await s.unshareList(m);const A={...t,lists:t.lists.map(L=>L.id===d?{...L,sharedListId:void 0}:L)};r(A),f(null),v(null)}catch(A){console.error("停止分享失敗",A)}},B=()=>{C(A=>A==="default"?"name":A==="name"?"progress":A==="progress"?"manual":"default")},Y=x==="name"?"名稱":x==="progress"?"完成度":x==="manual"?"手動":"",J=ab(qa(Dc,{activationConstraint:{distance:5}}),qa(kp,{activationConstraint:{delay:150,tolerance:5}})),ee=A=>{const{active:L,over:G}=A;if(!G||L.id===G.id)return;const _e=t.lists||[],ce=_e.findIndex(Q=>Q.id===L.id),j=_e.findIndex(Q=>Q.id===G.id);if(ce===-1||j===-1)return;const re=zc(_e,ce,j);r({...t,lists:re})},me=y.toLowerCase(),He=(t.lists||[]).filter(A=>!me||A.name.toLowerCase().includes(me)),fe=(()=>{if(x==="name")return[...He].sort((A,L)=>A.name.localeCompare(L.name,"zh-Hant"));if(x==="progress"){const A=L=>{const G=L.disposable?(L.inlineItems||[]).length:(L.items||[]).length;return G===0?0:(L.checkedItems||[]).length/G};return[...He].sort((L,G)=>A(L)-A(G))}return He})(),qe=(s?Object.entries(s.sharedWithMe):[]).filter(([,A])=>!me||(A.name||"").toLowerCase().includes(me));return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"}),a.jsxs("div",{className:"flex flex-col items-center w-10",children:[a.jsx("button",{onClick:B,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                ${x!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:a.jsx(Jx,{size:20})}),Y&&a.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:Y})]})]})}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-4 pb-4 no-scrollbar",children:[a.jsx("div",{className:"mb-4",children:a.jsxs("div",{className:"relative",children:[a.jsx(mp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:y,onChange:A=>b(A.target.value),placeholder:"搜尋清單...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),y&&a.jsx("button",{onClick:()=>b(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(kt,{size:16})})]})}),x==="manual"?a.jsx(kb,{sensors:J,collisionDetection:cb,onDragEnd:ee,children:a.jsx(Ib,{items:(t.lists||[]).map(A=>A.id),strategy:Nb,children:a.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(A=>a.jsx(vP,{list:A,isActive:A.id===t.activeListId},A.id))})})}):a.jsx("div",{className:"space-y-2",children:fe.map(A=>{const L=A.disposable?(A.inlineItems||[]).length:(A.items||[]).length,G=(A.checkedItems||[]).length,_e=A.id===t.activeListId,ce=!!A.sharedListId;return a.jsxs("div",{onClick:()=>P(A.id,A.sharedListId),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                    ${_e?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(io,{name:A.icon,size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[a.jsx("span",{className:"truncate",children:A.name}),A.disposable&&a.jsx("span",{className:"ml-2 text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex-shrink-0",children:"一次性"}),ce&&a.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"text-sm text-slate-400",children:[G,"/",L," 已確認"]})]}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{onClick:j=>{j.stopPropagation(),I(N===A.id?null:A.id)},className:"p-2 text-slate-400 dark:text-slate-500 active:bg-slate-100 dark:active:bg-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"更多操作",children:a.jsx(Zx,{size:18})}),N===A.id&&a.jsxs("div",{className:"absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-50 min-w-[140px] py-1 overflow-hidden",children:[e&&a.jsxs("button",{onClick:j=>{H(A,j),I(null)},className:"w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(Lc,{size:16,className:ce?"text-emerald-500":"text-slate-400"}),"分享"]}),t.lists.length>1&&a.jsxs("button",{onClick:j=>{M(A.id,j),I(null)},className:"w-full flex items-center gap-3 px-4 py-3 text-sm text-rose-500 active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[a.jsx(dn,{size:16}),"刪除"]})]})]})]},A.id)})}),qe.length>0&&a.jsxs("div",{className:"mt-6",children:[a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2 px-1",children:"與我分享的清單"}),a.jsx("div",{className:"space-y-2",children:qe.map(([A,L])=>{const G=(L.items||[]).length,_e=(L.checkedItems||[]).length;return a.jsxs("div",{onClick:()=>S(A),className:"flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(io,{name:L.icon||"clipboard-list",size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-100",children:L.name}),a.jsxs("div",{className:"text-sm text-slate-400",children:[_e,"/",G," 已確認",a.jsxs("span",{className:"ml-2 text-indigo-500 dark:text-indigo-400",children:["來自 ",L.ownerName||L.ownerEmail]})]})]})]},A)})})]}),a.jsx("div",{className:"mt-4",children:a.jsxs("button",{onClick:()=>p(!0),className:"w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 font-medium active:bg-slate-50 dark:active:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2",children:[a.jsx(Yn,{size:18}),"新增清單"]})})]}),_&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{p(!1),o(""),c("clipboard-list"),h(!1)}}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"新增清單"}),a.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:Xx.map(A=>a.jsx("button",{onClick:()=>c(A),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                      ${l===A?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400":"text-slate-500 dark:text-slate-400"}`,"aria-label":A,children:a.jsx(io,{name:A,size:20})},A))}),a.jsxs("label",{className:"flex items-center justify-between mb-3 px-1",children:[a.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"一次性清單"}),a.jsx("button",{type:"button",role:"switch","aria-checked":u,onClick:()=>h(A=>!A),className:`relative w-11 h-6 rounded-full transition-colors duration-200 ${u?"bg-indigo-600 dark:bg-indigo-500":"bg-slate-300 dark:bg-slate-600"}`,children:a.jsx("span",{className:`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${u?"translate-x-5":""}`})})]}),u&&a.jsx("div",{className:"text-xs text-amber-600 dark:text-amber-400 mb-3 px-1",children:"純文字項目，用完即刪，不會加入物品庫"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:i,onChange:A=>o(A.target.value),onKeyDown:A=>{A.key==="Enter"&&E()},placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:E,className:"px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})})]}),d!==null&&a.jsx(gP,{sharedData:m&&((Be=s==null?void 0:s.sharedByMe)==null?void 0:Be[m])||null,onAddUser:te,onRemoveUser:se,onSetPermission:D,onUnshare:U,onClose:()=>{f(null),v(null)}}),N!==null&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>I(null)}),w!==null&&a.jsx(yP,{message:"確定刪除此清單？",onConfirm:()=>R(w),onCancel:()=>k(null)})]})}function bP({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function wP({data:t,user:e,onNavigate:n,onSaveData:r,categories:s=[],onAddCategory:i,onUpdateCategory:o,onRemoveCategory:l}){const[c,u]=g.useState(""),[h,d]=g.useState(s[0]||""),[f,m]=g.useState(""),[v,w]=g.useState(null),[k,_]=g.useState(null),[p,y]=g.useState(null),[b,x]=g.useState(null),[C,N]=g.useState(!1),[I,P]=g.useState(!1),[S,E]=g.useState(!1),[R,M]=g.useState(""),[H,K]=g.useState(null),[te,se]=g.useState(""),[D,U]=g.useState("全部"),[B,Y]=g.useState(null),J=g.useRef(null),{uploadPhoto:ee,deletePhoto:me,uploading:He}=jb(e),fe={};s.forEach(j=>{fe[j]=[]}),(t.itemLibrary||[]).forEach(j=>{fe[j.category]&&fe[j.category].push(j)});const qe=j=>{var Q;const re=(Q=j.target.files)==null?void 0:Q[0];re&&(w(re),_(URL.createObjectURL(re)),j.target.value="")},Be=()=>{k&&URL.revokeObjectURL(k),w(null),_(null)},A=async()=>{if(!c.trim())return;N(!0);const j=Date.now();let re;if(v&&e)try{re=await ee(j,v)}catch{}const Q={id:j,name:c.trim(),category:h,note:f.trim(),...re&&{photoURL:re}},ve={...t,itemLibrary:[...t.itemLibrary,Q]};r(ve),u(""),m(""),Be(),N(!1),P(!1)},L=async(j,re,Q,ve,_t)=>{const Jt={...t,itemLibrary:t.itemLibrary.map(ct=>ct.id===j?{...ct,name:re,category:Q,note:ve,..._t?{photoURL:_t}:{photoURL:null}}:ct)};r(Jt),y(null)},G=async j=>{const re=t.itemLibrary.find(ve=>ve.id===j);re!=null&&re.photoURL&&me(j);const Q={...t,itemLibrary:t.itemLibrary.filter(ve=>ve.id!==j),lists:t.lists.map(ve=>({...ve,items:(ve.items||[]).filter(_t=>_t!==j),checkedItems:(ve.checkedItems||[]).filter(_t=>_t!==j)}))};r(Q),x(null)},_e=p?t.itemLibrary.find(j=>j.id===p):null,ce=D==="全部"?s:s.filter(j=>j===D);return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"}),a.jsx("div",{className:"w-10"})]})}),a.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-2 overflow-x-auto no-scrollbar",children:a.jsx("div",{className:"flex gap-2 w-max",children:["全部",...s].map(j=>a.jsx("button",{onClick:()=>U(j),className:`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-150 ${D===j?"bg-indigo-600 dark:bg-indigo-500 text-white":"border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"}`,children:j},j))})}),a.jsx("div",{className:"flex-1 overflow-y-auto px-4 pt-4 pb-4 no-scrollbar",children:ce.map(j=>{const re=fe[j]||[];return re.length===0?null:a.jsxs("div",{className:"mb-4",children:[a.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:j}),a.jsx("div",{className:"space-y-2",children:re.map(Q=>a.jsx("div",{className:"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:a.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1 flex-wrap",children:[Q.photoURL&&a.jsx("img",{src:Q.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:ve=>{ve.target.style.display="none"}}),a.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:Q.name}),Q.note&&a.jsx("span",{className:"text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full",children:Q.note})]}),a.jsxs("div",{className:"relative flex-shrink-0 ml-2",children:[a.jsx("button",{onClick:()=>Y(B===Q.id?null:Q.id),className:"p-1.5 text-slate-400 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[36px] min-h-[36px] flex items-center justify-center","aria-label":"更多選項",children:a.jsx(Zx,{size:18})}),B===Q.id&&a.jsxs("div",{className:"absolute right-0 top-full mt-1 w-28 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-50 overflow-hidden",children:[a.jsx("button",{onClick:()=>{y(Q.id),Y(null)},className:"w-full text-left px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150",children:"編輯"}),a.jsx("button",{onClick:()=>{x(Q.id),Y(null)},className:"w-full text-left px-4 py-2.5 text-sm text-rose-500 active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"刪除"})]})]})]})},Q.id))})]},j)})}),B!==null&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>Y(null)}),a.jsx("button",{onClick:()=>P(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":"新增物品",children:a.jsx(Yn,{size:24})}),I&&a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>{P(!1),u(""),m(""),Be()},children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:j=>j.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"新增物品"}),a.jsx("button",{onClick:()=>{P(!1),u(""),m(""),Be()},className:"p-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700",children:a.jsx(kt,{size:20,className:"text-slate-400"})})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1",children:"物品名稱"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",value:c,onChange:j=>u(j.target.value),placeholder:"輸入完整以利搜尋",className:"w-full pl-4 pr-20 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5",children:[a.jsx("button",{type:"button",onClick:()=>alert("掃描功能即將推出"),className:"text-slate-400 p-0.5 flex items-center justify-center","aria-label":"掃描",children:a.jsx(o4,{size:18})}),a.jsx("span",{className:"text-slate-300 dark:text-slate-600 select-none",children:"|"}),a.jsx("button",{type:"button",onClick:()=>{var j;return(j=J.current)==null?void 0:j.click()},className:"text-slate-400 p-0.5 flex items-center justify-center","aria-label":"拍照",children:a.jsx(Ac,{size:18})})]})]})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"類別（選填）"}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[s.map(j=>a.jsx("button",{type:"button",onClick:()=>d(j),className:`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-150 ${h===j?"bg-indigo-600 dark:bg-indigo-500 text-white":"border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"}`,children:j},j)),a.jsx("button",{type:"button",onClick:()=>{P(!1),u(""),m(""),Be(),E(!0)},className:"px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-150",children:"⚙ 設定"})]})]}),a.jsx("div",{className:"mb-4",children:a.jsx("input",{type:"text",value:f,onChange:j=>m(j.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"})}),e&&a.jsxs("div",{className:"mb-4",children:[a.jsx("input",{ref:J,type:"file",accept:"image/*",onChange:qe,className:"hidden"}),k&&a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("img",{src:k,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsx("button",{onClick:Be,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}),a.jsxs("button",{onClick:A,disabled:C||He,className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(C||He)&&a.jsx(pp,{size:18,className:"animate-spin"}),C||He?"新增中...":"+ 新增物品"]})]})}),_e&&a.jsx(kP,{item:_e,user:e,categories:s,onSave:L,onClose:()=>y(null),uploadPhoto:ee,deletePhoto:me}),b!==null&&a.jsx(bP,{message:"確定刪除此物品？",onConfirm:()=>G(b),onCancel:()=>x(null)}),S&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{E(!1),M(""),K(null)}}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"管理分類"}),a.jsx("div",{className:"max-h-64 overflow-y-auto mb-4 space-y-1",children:s.map((j,re)=>a.jsx("div",{className:"flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-slate-700 rounded-xl",children:H===re?a.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[a.jsx("input",{value:te,onChange:Q=>se(Q.target.value),onKeyDown:Q=>{Q.key==="Enter"&&(o(j,te),K(null)),Q.key==="Escape"&&K(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("button",{onClick:()=>{o(j,te),K(null)},className:"p-1.5 text-emerald-600 active:bg-emerald-50 dark:active:bg-emerald-900/30 rounded-lg",children:a.jsx(si,{size:16})}),a.jsx("button",{onClick:()=>K(null),className:"p-1.5 text-slate-400 active:bg-slate-100 dark:active:bg-slate-600 rounded-lg",children:a.jsx(kt,{size:16})})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-sm font-medium text-slate-700 dark:text-slate-200",children:j}),a.jsxs("div",{className:"flex gap-0.5",children:[a.jsx("button",{onClick:()=>{K(re),se(j)},className:"p-1.5 text-slate-400 active:text-indigo-600 rounded-lg min-w-[32px] min-h-[32px] flex items-center justify-center",children:a.jsx(Uo,{size:14})}),s.length>1&&a.jsx("button",{onClick:()=>{confirm(`確定刪除分類「${j}」？`)&&l(j)},className:"p-1.5 text-slate-400 active:text-rose-500 rounded-lg min-w-[32px] min-h-[32px] flex items-center justify-center",children:a.jsx(dn,{size:14})})]})]})},j))}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:R,onChange:j=>M(j.target.value),onKeyDown:j=>{j.key==="Enter"&&R.trim()&&(i(R),M(""))},placeholder:"新增分類...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:()=>{R.trim()&&(i(R),M(""))},disabled:!R.trim(),className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-40",children:"新增"})]}),a.jsx("button",{onClick:()=>{E(!1),M(""),K(null)},className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})]})}function kP({item:t,user:e,categories:n,onSave:r,onClose:s,uploadPhoto:i,deletePhoto:o}){const[l,c]=g.useState(t.name),[u,h]=g.useState(t.category),[d,f]=g.useState(t.note||""),[m,v]=g.useState(t.photoURL||""),[w,k]=g.useState(null),[_,p]=g.useState(null),[y,b]=g.useState(!1),[x,C]=g.useState(!1),N=g.useRef(null),I=R=>{var H;const M=(H=R.target.files)==null?void 0:H[0];M&&(k(M),_&&URL.revokeObjectURL(_),p(URL.createObjectURL(M)),b(!1),R.target.value="")},P=()=>{_&&URL.revokeObjectURL(_),k(null),p(null),b(!0)},S=async()=>{C(!0);let R=m;if(y&&!w&&(t.photoURL&&o(t.id),R=""),w&&e)try{R=await i(t.id,w)}catch{R=y?"":m}r(t.id,l,u,d,R),C(!1)},E=_||!y&&m;return a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:s,children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:R=>R.stopPropagation(),children:[a.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900 dark:text-slate-50",children:"編輯物品"}),a.jsx("input",{type:"text",value:l,onChange:R=>c(R.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"類別"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:n.map(R=>a.jsx("button",{type:"button",onClick:()=>h(R),className:`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-150 ${u===R?"bg-indigo-600 dark:bg-indigo-500 text-white":"border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300"}`,children:R},R))})]}),a.jsx("input",{type:"text",value:d,onChange:R=>f(R.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&a.jsxs("div",{className:"mb-4",children:[a.jsx("input",{ref:N,type:"file",accept:"image/*",capture:"environment",onChange:I,className:"hidden"}),E?a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("img",{src:_||m,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:()=>{var R;return(R=N.current)==null?void 0:R.click()},className:"text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150",children:"更換照片"}),a.jsx("button",{onClick:P,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}):a.jsxs("button",{onClick:()=>{var R;return(R=N.current)==null?void 0:R.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(Ac,{size:18}),a.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:s,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsxs("button",{onClick:S,disabled:x,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[x&&a.jsx(pp,{size:18,className:"animate-spin"}),x?"儲存中...":"儲存"]})]})]})})}function CP({data:t,onNavigate:e,onSaveData:n,categories:r=[]}){var p,y;const[s,i]=g.useState(""),[o,l]=g.useState(!1),c=(p=t.lists)==null?void 0:p.find(b=>b.id===t.activeListId),u=c?{...c,items:Array.isArray(c.items)?c.items:[],checkedItems:Array.isArray(c.checkedItems)?c.checkedItems:[]}:null,h=((y=u==null?void 0:u.items)==null?void 0:y.length)||0,d={};r.forEach(b=>{d[b]=[]}),(t.itemLibrary||[]).forEach(b=>{d[b.category]&&d[b.category].push(b)});const f=b=>{const x={...t,lists:t.lists.map(C=>{if(C.id!==t.activeListId)return C;const N=Array.isArray(C.items)?C.items:[],I=Array.isArray(C.checkedItems)?C.checkedItems:[],P=N.includes(b);return{...C,items:P?N.filter(S=>S!==b):[...N,b],checkedItems:P?I.filter(S=>S!==b):I}})};n(x)},m=()=>{const b=s.trim();if(!b)return;const x="item_"+Date.now(),C={id:x,name:b,category:r[0]||"其他"},N={...t,itemLibrary:[...t.itemLibrary||[],C],lists:t.lists.map(I=>{if(I.id!==t.activeListId)return I;const P=Array.isArray(I.items)?I.items:[];return{...I,items:[...P,x]}})};n(N),i("")},v=s.trim(),w=v?(t.itemLibrary||[]).some(b=>{var x;return((x=b.name)==null?void 0:x.toLowerCase())===v.toLowerCase()}):!1,k=v!==""&&!w,_=(t.itemLibrary||[]).filter(b=>{var x;return(x=u==null?void 0:u.items)==null?void 0:x.includes(b.id)}).map(b=>b.name);return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsxs("div",{className:"text-lg font-bold truncate",children:["加入物品到 ",u==null?void 0:u.name]}),a.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"關閉",children:a.jsx(kt,{size:22,className:"text-slate-600 dark:text-slate-300"})})]})}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[a.jsx("div",{className:"mb-2",children:a.jsxs("div",{className:"relative",children:[a.jsx(mp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:s,onChange:b=>i(b.target.value),placeholder:"搜尋物品名稱...",className:"w-full pl-9 pr-8 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),s&&a.jsx("button",{onClick:()=>i(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(kt,{size:16})})]})}),a.jsxs("button",{onClick:()=>l(b=>!b),className:"text-sm text-slate-500 dark:text-slate-400 py-2 flex items-center gap-1",children:["已選 ",h," 個 ",o?"▲":"▼"]}),o&&h>0&&a.jsx("div",{className:"bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 mb-2 space-y-1",children:_.map((b,x)=>a.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:b},x))}),r.map(b=>{const x=s?d[b].filter(C=>{var I,P,S;const N=s.toLowerCase();return((I=C.name)==null?void 0:I.toLowerCase().includes(N))||((P=C.category)==null?void 0:P.toLowerCase().includes(N))||((S=C.note)==null?void 0:S.toLowerCase().includes(N))}):d[b];return x.length===0?null:a.jsxs("div",{className:"mb-4",children:[a.jsx("div",{className:"mb-2",children:a.jsx("span",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold",children:b})}),a.jsx("div",{className:"space-y-2",children:x.map(C=>{const N=u==null?void 0:u.items.includes(C.id);return a.jsxs("div",{onClick:()=>f(C.id),className:"flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[C.photoURL&&a.jsx("img",{src:C.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:I=>{I.target.style.display="none"}}),a.jsxs("div",{className:"flex-1 flex items-center gap-2 min-w-0 flex-wrap",children:[a.jsx("span",{className:`${N?"text-slate-800 dark:text-slate-100 font-medium":"text-slate-600 dark:text-slate-300"}`,children:C.name}),C.note&&a.jsx("span",{className:"text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full flex-shrink-0",children:C.note})]}),a.jsx("button",{onClick:I=>{I.stopPropagation(),f(C.id)},className:`ml-3 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-150
                          ${N?"border-rose-500 text-rose-500":"border-indigo-500 text-indigo-500"}`,"aria-label":N?"從清單移除":"加入清單",children:N?a.jsx(zR,{size:16}):a.jsx(Yn,{size:16})})]},C.id)})})]},b)}),k&&a.jsxs("button",{onClick:m,className:"text-indigo-600 dark:text-indigo-400 text-sm py-4 text-center w-full active:opacity-70 transition-opacity",children:["+ 建立新物品「",v,"」"]})]})]})}function NP({user:t,syncStatus:e,onLogin:n,onLogout:r,onNavigate:s,isAdmin:i,themePreference:o,onThemeChange:l}){const c={offline:{icon:JT,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50 dark:bg-slate-800"},syncing:{icon:jR,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50 dark:bg-amber-900/30"},synced:{icon:eR,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50 dark:bg-emerald-900/30"},error:{icon:XT,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50 dark:bg-rose-900/30"}},u=c[e]||c.offline,h=u.icon,d=[{value:"light",label:"淺色",icon:g4},{value:"system",label:"系統",icon:BR},{value:"dark",label:"深色",icon:WR}];return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top",children:a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center",children:"設定"})}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-4 pb-4 no-scrollbar",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"帳號"}),t?a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&a.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:f=>f.target.style.display="none"}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-50 truncate",children:t.displayName||"使用者"}),a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 truncate",children:t.email})]})]}),a.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[a.jsx(OR,{size:18}),"登出"]})]}):a.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[a.jsx(AR,{size:18}),"使用 Google 登入"]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"同步狀態"}),a.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${u.bg}`,children:[a.jsx(h,{size:20,className:`${u.color} ${e==="syncing"?"animate-spin":""}`}),a.jsx("span",{className:`font-medium ${u.color}`,children:u.label})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"外觀"}),a.jsx("div",{className:"flex gap-2",children:d.map(({value:f,label:m,icon:v})=>a.jsxs("button",{onClick:()=>l(f),className:`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${o===f?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500":"bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600"}`,children:[a.jsx(v,{size:20}),m]},f))})]}),t&&i&&a.jsxs("button",{onClick:()=>s("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[a.jsx(nb,{size:18}),"管理後台"]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"關於"}),a.jsxs("div",{className:"text-sm text-slate-600 dark:text-slate-300",children:[a.jsxs("div",{className:"flex justify-between py-2",children:[a.jsx("span",{children:"應用程式"}),a.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"打包清單"})]}),a.jsx("div",{className:"border-t border-slate-100 dark:border-slate-700"}),a.jsxs("div",{className:"flex justify-between py-2",children:[a.jsx("span",{children:"版本"}),a.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"1.1.12"})]})]})]})]})]})}function Dl({icon:t,label:e,value:n,color:r="text-indigo-600"}){return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx(t,{size:20,className:r}),a.jsx("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:e})]}),a.jsx("div",{className:`text-3xl font-bold ${r}`,children:n})]})}function SP({data:t,shared:e}){const n=t.itemLibrary.length,r=t.lists.length,s=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,f)=>f[1]-d[1]),c={};t.itemLibrary.forEach(d=>{c[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(f=>{c[f]!==void 0&&c[f]++})});const u=Object.entries(c).sort((d,f)=>f[1]-d[1]).slice(0,5).map(([d,f])=>{const m=t.itemLibrary.find(v=>v.id===Number(d));return m?{name:m.name,count:f}:null}).filter(Boolean),h=l.length>0?l[0][1]:1;return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"數據總覽"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[a.jsx(Dl,{icon:Mo,label:"物品總數",value:n,color:"text-indigo-600"}),a.jsx(Dl,{icon:IR,label:"清單總數",value:r,color:"text-emerald-600"}),a.jsx(Dl,{icon:Lc,label:"已分享清單",value:s,color:"text-amber-600"}),a.jsx(Dl,{icon:sb,label:"收到分享",value:i,color:"text-rose-600"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(BT,{size:18,className:"text-slate-500 dark:text-slate-400"}),a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"分類統計"})]}),l.length===0?a.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):a.jsx("div",{className:"space-y-3",children:l.map(([d,f])=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[a.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:d}),a.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:f})]}),a.jsx("div",{className:"h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${f/h*100}%`}})})]},d))})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(Mo,{size:18,className:"text-slate-500 dark:text-slate-400"}),a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"最常使用物品 Top 5"})]}),u.length===0?a.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):a.jsx("div",{className:"space-y-2",children:u.map((d,f)=>a.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:f+1}),a.jsx("span",{className:"text-slate-800 dark:text-slate-100",children:d.name})]}),a.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:["出現在 ",d.count," 個清單"]})]},f))})]})]})]})}function EP({data:t,onSaveData:e,categories:n=[]}){const[r,s]=g.useState(""),[i,o]=g.useState(""),[l,c]=g.useState(new Set),[u,h]=g.useState(null),[d,f]=g.useState({name:"",category:"",note:""}),[m,v]=g.useState(""),[w,k]=g.useState(!1),_=g.useRef(null),p=t.itemLibrary.filter(E=>{const R=!r||E.name.toLowerCase().includes(r.toLowerCase())||(E.note||"").toLowerCase().includes(r.toLowerCase()),M=!i||E.category===i;return R&&M}),y=E=>{c(R=>{const M=new Set(R);return M.has(E)?M.delete(E):M.add(E),M})},b=()=>{l.size===p.length?c(new Set):c(new Set(p.map(E=>E.id)))},x=E=>{h(E.id),f({name:E.name,category:E.category,note:E.note||""})},C=()=>{const E=t.itemLibrary.map(R=>R.id===u?{...R,...d}:R);e({...t,itemLibrary:E}),h(null)},N=E=>{const R=new Set(E),M=t.itemLibrary.filter(K=>!R.has(K.id)),H=t.lists.map(K=>({...K,items:(K.items||[]).filter(te=>!R.has(te)),checkedItems:(K.checkedItems||[]).filter(te=>!R.has(te))}));e({...t,itemLibrary:M,lists:H}),c(new Set)},I=()=>{if(!m)return;const E=t.itemLibrary.map(R=>l.has(R.id)?{...R,category:m}:R);e({...t,itemLibrary:E}),c(new Set),k(!1),v("")},P=()=>{const E=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),R=URL.createObjectURL(E),M=document.createElement("a");M.href=R,M.download="item-library.json",M.click(),URL.revokeObjectURL(R)},S=E=>{var H;const R=(H=E.target.files)==null?void 0:H[0];if(!R)return;const M=new FileReader;M.onload=K=>{try{const te=JSON.parse(K.target.result);if(!Array.isArray(te)){alert("格式錯誤：需要 JSON 陣列");return}if(!te.every(ee=>ee.name&&ee.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const D=Math.max(0,...t.itemLibrary.map(ee=>ee.id)),U=new Set(t.itemLibrary.map(ee=>ee.name)),B=te.filter(ee=>!U.has(ee.name)).map((ee,me)=>({id:ee.id||D+me+1,name:ee.name,category:ee.category,note:ee.note||"",...ee.photoURL?{photoURL:ee.photoURL}:{}}));if(B.length===0){alert("沒有新物品可匯入（全部重複）");return}const Y=new Set(t.itemLibrary.map(ee=>ee.id));let J=D+1;B.forEach(ee=>{for(;Y.has(J);)J++;ee.id=J,Y.add(J),J++}),e({...t,itemLibrary:[...t.itemLibrary,...B]}),alert(`已匯入 ${B.length} 個物品`)}catch{alert("JSON 解析失敗")}},M.readAsText(R),E.target.value=""};return a.jsxs("div",{children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"物品管理"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("button",{onClick:P,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[a.jsx(oR,{size:16})," 匯出"]}),a.jsxs("button",{onClick:()=>{var E;return(E=_.current)==null?void 0:E.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[a.jsx(E4,{size:16})," 匯入"]}),a.jsx("input",{ref:_,type:"file",accept:".json",onChange:S,className:"hidden"})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(mp,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",placeholder:"搜尋物品...",value:r,onChange:E=>s(E.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),a.jsxs("div",{className:"relative",children:[a.jsx(_R,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsxs("select",{value:i,onChange:E=>o(E.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[a.jsx("option",{value:"",children:"所有分類"}),n.map(E=>a.jsx("option",{value:E,children:E},E))]})]})]}),l.size>0&&a.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg",children:[a.jsxs("span",{className:"text-sm font-medium text-indigo-700 dark:text-indigo-400",children:["已選 ",l.size," 項"]}),a.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${l.size} 個物品？`)&&N([...l])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[a.jsx(dn,{size:14})," 批量刪除"]}),w?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("select",{value:m,onChange:E=>v(E.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇分類"}),n.map(E=>a.jsx("option",{value:E,children:E},E))]}),a.jsx("button",{onClick:I,disabled:!m,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:a.jsx(si,{size:14})}),a.jsx("button",{onClick:()=>{k(!1),v("")},className:"px-2 py-1.5 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:a.jsx(kt,{size:14})})]}):a.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[a.jsx(rb,{size:14})," 批量改分類"]})]}),a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700",children:a.jsxs("tr",{children:[a.jsx("th",{className:"w-10 px-4 py-3",children:a.jsx("input",{type:"checkbox",checked:p.length>0&&l.size===p.length,onChange:b,className:"rounded"})}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分類"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"備註"}),a.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),a.jsxs("tbody",{children:[p.map(E=>a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700",children:[a.jsx("td",{className:"px-4 py-3",children:a.jsx("input",{type:"checkbox",checked:l.has(E.id),onChange:()=>y(E.id),className:"rounded"})}),u===E.id?a.jsxs(a.Fragment,{children:[a.jsx("td",{className:"px-4 py-2",children:a.jsx("input",{value:d.name,onChange:R=>f(M=>({...M,name:R.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("select",{value:d.category,onChange:R=>f(M=>({...M,category:R.target.value})),className:"px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(R=>a.jsx("option",{value:R,children:R},R))})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("input",{value:d.note,onChange:R=>f(M=>({...M,note:R.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:C,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:a.jsx(si,{size:16})}),a.jsx("button",{onClick:()=>h(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:a.jsx(kt,{size:16})})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("td",{className:"px-4 py-3 text-sm text-slate-800 dark:text-slate-100",children:E.name}),a.jsx("td",{className:"px-4 py-3",children:a.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:E.category})}),a.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:E.note||"-"}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>x(E),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:a.jsx(Uo,{size:16})}),a.jsx("button",{onClick:()=>{confirm(`刪除「${E.name}」？`)&&N([E.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:a.jsx(dn,{size:16})})]})})]})]},E.id)),p.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),a.jsxs("div",{className:"lg:hidden space-y-2",children:[p.length===0&&a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),p.map(E=>a.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("input",{type:"checkbox",checked:l.has(E.id),onChange:()=>y(E.id),className:"mt-1 rounded"}),u===E.id?a.jsxs("div",{className:"flex-1 space-y-2",children:[a.jsx("input",{value:d.name,onChange:R=>f(M=>({...M,name:R.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("select",{value:d.category,onChange:R=>f(M=>({...M,category:R.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(R=>a.jsx("option",{value:R,children:R},R))}),a.jsx("input",{value:d.note,onChange:R=>f(M=>({...M,note:R.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"備註"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:C,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),a.jsx("button",{onClick:()=>h(null),className:"px-3 py-1 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg",children:"取消"})]})]}):a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:E.name}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>x(E),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:a.jsx(Uo,{size:16})}),a.jsx("button",{onClick:()=>{confirm(`刪除「${E.name}」？`)&&N([E.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:a.jsx(dn,{size:16})})]})]}),a.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:E.category}),E.note&&a.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1",children:E.note})]})]})},E.id))]})]})}function IP({data:t,onSaveData:e}){const n=t.templates||[],[r,s]=g.useState(!1),[i,o]=g.useState("list"),[l,c]=g.useState(""),[u,h]=g.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,f]=g.useState(null),[m,v]=g.useState(null),[w,k]=g.useState(""),_=()=>{h({name:"",icon:"clipboard-list",description:"",itemIds:[]}),c(""),o("list"),s(!1)},p=()=>{const S=t.lists.find(E=>E.id===Number(l));S&&(h({name:S.name+" 範本",icon:S.icon||"clipboard-list",description:"",itemIds:[...S.items||[]]}),o("manual"))},y=S=>{h(E=>({...E,itemIds:E.itemIds.includes(S)?E.itemIds.filter(R=>R!==S):[...E.itemIds,S]}))},b=()=>{if(!u.name.trim())return;const E={id:Math.max(0,...n.map(R=>R.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,E]}),_()},x=()=>{if(!u.name.trim())return;const S=n.map(E=>E.id===d?{...E,...u,name:u.name.trim()}:E);e({...t,templates:S}),f(null),_()},C=S=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(E=>E.id!==S)})},N=S=>{f(S.id),h({name:S.name,icon:S.icon,description:S.description||"",itemIds:[...S.itemIds]}),s(!0)},I=()=>{const S=n.find(M=>M.id===m),E=t.lists.find(M=>M.id===Number(w));if(!S||!E)return;const R=t.lists.map(M=>M.id===E.id?{...M,items:[...new Set([...M.items||[],...S.itemIds])]}:M);e({...t,lists:R}),v(null),k(""),alert(`已將範本「${S.name}」套用到「${E.name}」`)},P=S=>S.map(E=>t.itemLibrary.find(R=>R.id===E)).filter(Boolean).map(E=>E.name);return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"清單範本"}),!r&&a.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[a.jsx(Yn,{size:16})," 建立範本"]})]}),r&&a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"從現有清單建立"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:l,onChange:S=>c(S.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(S=>a.jsx("option",{value:S.id,children:S.name},S.id))]}),a.jsx("button",{onClick:p,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:a.jsx(sR,{size:16})})]}),a.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"範本名稱"}),a.jsx("input",{value:u.name,onChange:S=>h(E=>({...E,name:S.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"例：出國旅行"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"圖示"}),a.jsx("select",{value:u.icon,onChange:S=>h(E=>({...E,icon:S.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Xx.map(S=>a.jsx("option",{value:S,children:S},S))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"說明"}),a.jsx("input",{value:u.description,onChange:S=>h(E=>({...E,description:S.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"選填"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),a.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg",children:t.itemLibrary.map(S=>a.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("input",{type:"checkbox",checked:u.itemIds.includes(S.id),onChange:()=>y(S.id),className:"rounded"}),a.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100",children:S.name}),a.jsx("span",{className:"text-xs text-slate-400",children:S.category})]},S.id))})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:d?x:b,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),a.jsx("button",{onClick:()=>{f(null),_()},className:"px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:"取消"})]})]})]}),m&&a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-2",children:"套用範本"}),a.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mb-3",children:"選擇要套用的目標清單："}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:w,onChange:S=>k(S.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(S=>a.jsx("option",{value:S.id,children:S.name},S.id))]}),a.jsxs("button",{onClick:I,disabled:!w,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[a.jsx(si,{size:16})," 套用"]}),a.jsx("button",{onClick:()=>{v(null),k("")},className:"px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:a.jsx(kt,{size:16})})]})]}),n.length===0&&!r&&a.jsxs("div",{className:"text-center py-12 text-slate-400",children:[a.jsx(eb,{size:48,className:"mx-auto mb-3 opacity-50"}),a.jsx("p",{children:"尚未建立任何範本"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(S=>a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-start justify-between mb-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:S.name}),S.description&&a.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:S.description})]}),a.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:S.icon})]}),a.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[P(S.itemIds).slice(0,5).map((E,R)=>a.jsx("span",{className:"text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full",children:E},R)),S.itemIds.length>5&&a.jsxs("span",{className:"text-xs text-slate-400",children:["+",S.itemIds.length-5," 更多"]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:[a.jsx(Mo,{size:14,className:"inline mr-1"}),S.itemIds.length," 個物品"]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>v(S.id),className:"px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50",children:"套用"}),a.jsx("button",{onClick:()=>N(S),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:a.jsx(Uo,{size:14})}),a.jsx("button",{onClick:()=>C(S.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:a.jsx(dn,{size:14})})]})]})]},S.id))})]})}function TP({data:t,shared:e}){const[n,r]=g.useState("byMe"),[s,i]=g.useState({}),[o,l]=g.useState(""),c=e.sharedByMe||{},u=e.sharedWithMe||{},h=k=>{var p;const _=t.lists.find(y=>y.sharedListId===k);return(_==null?void 0:_.name)||((p=c[k])==null?void 0:p.name)||"未知清單"},d=async k=>{const _=o.trim();if(_)try{await e.addSharedUser(k,_),i({}),l("")}catch(p){alert("新增失敗："+p.message)}},f=async(k,_)=>{if(confirm(`移除 ${_} 的存取權限？`))try{await e.removeSharedUser(k,_)}catch(p){alert("移除失敗："+p.message)}},m=async k=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(k)}catch(_){alert("取消分享失敗："+_.message)}},v=Object.entries(c),w=Object.entries(u);return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分享管理"}),a.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-700 mb-4",children:[a.jsxs("button",{onClick:()=>r("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[a.jsx(Lc,{size:16})," 我分享的 (",v.length,")"]}),a.jsxs("button",{onClick:()=>r("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[a.jsx(sb,{size:16})," 分享給我的 (",w.length,")"]})]}),n==="byMe"&&a.jsx("div",{children:v.length===0?a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分享對象"}),a.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),a.jsx("tbody",{children:v.map(([k,_])=>{const p=Object.keys(_.sharedWith||{}).map(ah);return a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:h(k)}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[p.map(y=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,a.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:a.jsx(kt,{size:12})})]},y)),s[k]?a.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"inline-flex gap-1",children:[a.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 dark:border-slate-600 rounded w-40 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("button",{type:"submit",className:"text-emerald-600 dark:text-emerald-400",children:a.jsx(Yn,{size:14})}),a.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:a.jsx(kt,{size:14})})]}):a.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-xs text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增"})]})}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("button",{onClick:()=>m(k),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg",children:[a.jsx(dn,{size:14})," 取消分享"]})})]},k)})})]})}),a.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([k,_])=>{const p=Object.keys(_.sharedWith||{}).map(ah);return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:h(k)}),a.jsx("button",{onClick:()=>m(k),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),a.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:p.map(y=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,a.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:a.jsx(kt,{size:12})})]},y))}),s[k]?a.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"flex gap-2",children:[a.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),a.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 dark:bg-slate-600 dark:text-slate-200 rounded-lg",children:"取消"})]}):a.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增分享對象"})]},k)})})]})}),n==="withMe"&&a.jsx("div",{children:w.length===0?a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"來源"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"勾選進度"})]})}),a.jsx("tbody",{children:w.map(([k,_])=>{const p=(_.items||[]).length,y=(_.checkedItems||[]).length;return a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:_.name}),a.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:_.ownerName||_.ownerEmail}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:p>0?`${y/p*100}%`:"0%"}})}),a.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",p]})]})})]},k)})})]})}),a.jsx("div",{className:"lg:hidden space-y-3",children:w.map(([k,_])=>{const p=(_.items||[]).length,y=(_.checkedItems||[]).length;return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:_.name}),a.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:["來自 ",_.ownerName||_.ownerEmail]}),a.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[a.jsx("div",{className:"flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:p>0?`${y/p*100}%`:"0%"}})}),a.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",p]})]})]},k)})})]})})]})}function RP({user:t,admin:e}){const{adminEmails:n,addAdmin:r,removeAdmin:s}=e,[i,o]=g.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await r(i),o(""))},c=async u=>{var h;if(u===((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await s(u)};return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"帳號管理"}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:"新增管理員"}),a.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[a.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[a.jsx(Yn,{size:16})," 新增"]})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:[a.jsx("div",{className:"px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700",children:a.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?a.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[a.jsx(uh,{size:32,className:"mx-auto mb-2 opacity-50"}),a.jsx("p",{children:"尚未設定管理員"}),a.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):a.jsx("ul",{children:n.map(u=>{var d;const h=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return a.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[a.jsx(uh,{size:16,className:"text-indigo-500 dark:text-indigo-400 shrink-0"}),a.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100 truncate",children:u}),h&&a.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),a.jsx("button",{onClick:()=>c(u),disabled:h,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:h?"無法移除自己":"移除管理員",children:a.jsx(dn,{size:16})})]},u)})})]})]})}function jP({categories:t,addCategory:e,updateCategory:n,removeCategory:r}){const[s,i]=g.useState(""),[o,l]=g.useState(null),[c,u]=g.useState(""),h=async()=>{const v=s.trim();v&&(await e(v),i(""))},d=v=>{l(v),u(t[v])},f=async()=>{o!==null&&(await n(t[o],c),l(null),u(""))},m=async v=>{t.length<=1||confirm(`確定刪除分類「${v}」？已使用此分類的物品不會被刪除。`)&&await r(v)};return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分類管理"}),a.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-4",children:t.map((v,w)=>a.jsx("div",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:o===w?a.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[a.jsx("input",{value:c,onChange:k=>u(k.target.value),onKeyDown:k=>{k.key==="Enter"&&f(),k.key==="Escape"&&l(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("button",{onClick:f,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:a.jsx(si,{size:16})}),a.jsx("button",{onClick:()=>l(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:a.jsx(kt,{size:16})})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-100",children:v}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>d(w),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:a.jsx(Uo,{size:16})}),t.length>1&&a.jsx("button",{onClick:()=>m(v),className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:a.jsx(dn,{size:16})})]})]})},v))}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:s,onChange:v=>i(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},placeholder:"新增分類名稱...",className:"flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsxs("button",{onClick:h,disabled:!s.trim(),className:"flex items-center gap-1.5 px-4 py-2.5 text-sm bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition-colors",children:[a.jsx(Yn,{size:16})," 新增"]})]})]})}const Vu=[{key:"dashboard",label:"總覽",icon:nb},{key:"items",label:"物品管理",icon:Mo},{key:"categories",label:"分類管理",icon:rb},{key:"templates",label:"清單範本",icon:eb},{key:"sharing",label:"分享管理",icon:Lc},{key:"accounts",label:"帳號管理",icon:uh}];function PP({data:t,user:e,shared:n,onNavigate:r,onSaveData:s,admin:i,categories:o,categoryActions:l}){var w;const[c,u]=g.useState("dashboard"),[h,d]=g.useState(!1),f=k=>{u(k),d(!1)},m=a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-700",children:[a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),a.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),a.jsx("nav",{className:"flex-1 p-2",children:Vu.map(({key:k,label:_,icon:p})=>a.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${c===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"}`,children:[a.jsx(p,{size:18}),_]},k))}),a.jsx("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700",children:a.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",children:[a.jsx(Fu,{size:18}),"返回應用"]})})]}),v=()=>{switch(c){case"dashboard":return a.jsx(SP,{data:t,shared:n});case"items":return a.jsx(EP,{data:t,onSaveData:s,categories:o});case"categories":return a.jsx(jP,{categories:o,...l});case"templates":return a.jsx(IP,{data:t,onSaveData:s});case"sharing":return a.jsx(TP,{data:t,shared:n});case"accounts":return a.jsx(RP,{user:e,admin:i});default:return null}};return a.jsxs("div",{className:"h-full bg-slate-50 dark:bg-slate-900",children:[a.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[a.jsx("aside",{className:"bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto",children:m}),a.jsx("main",{className:"overflow-y-auto p-6",children:a.jsx("div",{className:"max-w-6xl mx-auto",children:v()})})]}),a.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[a.jsxs("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top",children:[a.jsx("button",{onClick:()=>d(!0),className:"p-1 -ml-1 text-slate-600 dark:text-slate-300",children:a.jsx(MR,{size:24})}),a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:((w=Vu.find(k=>k.key===c))==null?void 0:w.label)||"管理後台"}),a.jsx("button",{onClick:()=>r("profile"),className:"p-1 -mr-1 text-slate-600 dark:text-slate-300",children:a.jsx(Fu,{size:24})})]}),h&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>d(!1)}),a.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",children:[a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),a.jsx("button",{onClick:()=>d(!1),className:"p-1 text-slate-400",children:a.jsx(kt,{size:20})})]}),a.jsx("nav",{className:"p-2",children:Vu.map(({key:k,label:_,icon:p})=>a.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${c===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,children:[a.jsx(p,{size:18}),_]},k))}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom",children:a.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[a.jsx(Fu,{size:18}),"返回應用"]})})]})]}),a.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:v()})]})]})}const AP=[{id:"lists",label:"所有清單",icon:SR},{id:"library",label:"物品庫",icon:Mo},{id:"profile",label:"設定",icon:T4}];function LP({currentView:t,onNavigate:e}){return a.jsx("div",{className:"flex-shrink-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 safe-bottom",children:a.jsx("div",{className:"flex",children:AP.map(n=>{const r=t===n.id,s=n.icon;return a.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600 dark:text-indigo-400":"text-slate-400 active:text-slate-600 dark:active:text-slate-300"}`,"aria-label":n.label,children:[a.jsx(s,{size:22,strokeWidth:r?2.5:2}),a.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function OP(){const[t,e]=g.useState("lists"),[n,r]=g.useState(null),s=gT(),{user:i,data:o,syncStatus:l,saveData:c,handleLogin:u,handleLogout:h}=yT(s),d=vT(i,o),f=xT(i),{categories:m,addCategory:v,updateCategory:w,removeCategory:k}=bT(),{preference:_,changeTheme:p}=kT(),y=(x,C)=>{(C==null?void 0:C.sharedListId)!==void 0&&r(C.sharedListId),e(x)},b=t!=="addItems"&&t!=="admin";return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"flex-1 min-h-0",children:[t==="checklist"&&a.jsx(_P,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:y,onSaveData:c,shared:d,activeSharedListId:n,categories:m}),t==="lists"&&a.jsx(xP,{data:o,user:i,onNavigate:y,onSaveData:c,shared:d}),t==="library"&&a.jsx(wP,{data:o,user:i,onNavigate:y,onSaveData:c,categories:m,onAddCategory:v,onUpdateCategory:w,onRemoveCategory:k}),t==="addItems"&&a.jsx(CP,{data:o,onNavigate:y,onSaveData:c,categories:m}),t==="profile"&&a.jsx(NP,{user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:y,isAdmin:f.isAdmin,themePreference:_,onThemeChange:p}),t==="admin"&&f.isAdmin&&a.jsx(PP,{data:o,user:i,shared:d,onNavigate:y,onSaveData:c,admin:f,categories:m,categoryActions:{addCategory:v,updateCategory:w,removeCategory:k}}),t==="admin"&&!f.isAdmin&&!f.loading&&a.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-4",children:[a.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-4",children:"你沒有管理後台的存取權限"}),a.jsx("button",{onClick:()=>y("profile"),className:"px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg",children:"返回設定"})]})]}),b&&a.jsx(LP,{currentView:t==="checklist"?"lists":t,onNavigate:x=>y(x,{sharedListId:null})}),!1]})}Yu.createRoot(document.getElementById("root")).render(a.jsx(vt.StrictMode,{children:a.jsx(OP,{})}));
