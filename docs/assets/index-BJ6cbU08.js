(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Lb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p0={exports:{}},nc={},m0={exports:{}},le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Ob=Symbol.for("react.portal"),Db=Symbol.for("react.fragment"),Mb=Symbol.for("react.strict_mode"),Ub=Symbol.for("react.profiler"),zb=Symbol.for("react.provider"),Fb=Symbol.for("react.context"),Bb=Symbol.for("react.forward_ref"),$b=Symbol.for("react.suspense"),Wb=Symbol.for("react.memo"),Hb=Symbol.for("react.lazy"),Ip=Symbol.iterator;function Vb(t){return t===null||typeof t!="object"?null:(t=Ip&&t[Ip]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,y0={};function di(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}di.prototype.isReactComponent={};di.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};di.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function v0(){}v0.prototype=di.prototype;function vh(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}var xh=vh.prototype=new v0;xh.constructor=vh;g0(xh,di.prototype);xh.isPureReactComponent=!0;var Ep=Array.isArray,x0=Object.prototype.hasOwnProperty,bh={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)x0.call(e,r)&&!b0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:$o,type:t,key:i,ref:o,props:s,_owner:bh.current}}function Yb(t,e){return{$$typeof:$o,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wh(t){return typeof t=="object"&&t!==null&&t.$$typeof===$o}function Qb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tp=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qb(""+t.key):e.toString(36)}function zl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $o:case Ob:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Xc(o,0):r,Ep(s)?(n="",t!=null&&(n=t.replace(Tp,"$&/")+"/"),zl(s,e,n,"",function(u){return u})):s!=null&&(wh(s)&&(s=Yb(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Tp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Ep(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Xc(i,l);o+=zl(i,e,n,c,s)}else if(c=Vb(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Xc(i,l++),o+=zl(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fl(t,e,n){if(t==null)return t;var r=[],s=0;return zl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Gb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},Fl={transition:null},Xb={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Fl,ReactCurrentOwner:bh};function k0(){throw Error("act(...) is not supported in production builds of React.")}le.Children={map:fl,forEach:function(t,e,n){fl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fl(t,function(){e++}),e},toArray:function(t){return fl(t,function(e){return e})||[]},only:function(t){if(!wh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};le.Component=di;le.Fragment=Db;le.Profiler=Ub;le.PureComponent=vh;le.StrictMode=Mb;le.Suspense=$b;le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xb;le.act=k0;le.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=bh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)x0.call(e,c)&&!b0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$o,type:t.type,key:s,ref:i,props:r,_owner:o}};le.createContext=function(t){return t={$$typeof:Fb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zb,_context:t},t.Consumer=t};le.createElement=w0;le.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};le.createRef=function(){return{current:null}};le.forwardRef=function(t){return{$$typeof:Bb,render:t}};le.isValidElement=wh;le.lazy=function(t){return{$$typeof:Hb,_payload:{_status:-1,_result:t},_init:Gb}};le.memo=function(t,e){return{$$typeof:Wb,type:t,compare:e===void 0?null:e}};le.startTransition=function(t){var e=Fl.transition;Fl.transition={};try{t()}finally{Fl.transition=e}};le.unstable_act=k0;le.useCallback=function(t,e){return Ct.current.useCallback(t,e)};le.useContext=function(t){return Ct.current.useContext(t)};le.useDebugValue=function(){};le.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};le.useEffect=function(t,e){return Ct.current.useEffect(t,e)};le.useId=function(){return Ct.current.useId()};le.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};le.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};le.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};le.useMemo=function(t,e){return Ct.current.useMemo(t,e)};le.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};le.useRef=function(t){return Ct.current.useRef(t)};le.useState=function(t){return Ct.current.useState(t)};le.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};le.useTransition=function(){return Ct.current.useTransition()};le.version="18.3.1";m0.exports=le;var g=m0.exports;const ut=Lb(g);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kb=g,qb=Symbol.for("react.element"),Jb=Symbol.for("react.fragment"),Zb=Object.prototype.hasOwnProperty,e1=Kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t1={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zb.call(e,r)&&!t1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:qb,type:t,key:i,ref:o,props:s,_owner:e1.current}}nc.Fragment=Jb;nc.jsx=C0;nc.jsxs=C0;p0.exports=nc;var a=p0.exports,Gu={},S0={exports:{}},Wt={},N0={exports:{}},I0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,O){var V=j.length;j.push(O);e:for(;0<V;){var X=V-1>>>1,q=j[X];if(0<s(q,O))j[X]=O,j[V]=q,V=X;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var O=j[0],V=j.pop();if(V!==O){j[0]=V;e:for(var X=0,q=j.length,te=q>>>1;X<te;){var ve=2*(X+1)-1,Ze=j[ve],xe=ve+1,Nt=j[xe];if(0>s(Ze,V))xe<q&&0>s(Nt,Ze)?(j[X]=Nt,j[xe]=V,X=xe):(j[X]=Ze,j[ve]=V,X=ve);else if(xe<q&&0>s(Nt,V))j[X]=Nt,j[xe]=V,X=xe;else break e}}return O}function s(j,O){var V=j.sortIndex-O.sortIndex;return V!==0?V:j.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,d=null,f=3,m=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(j){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=j)r(u),O.sortIndex=O.expirationTime,e(c,O);else break;O=n(u)}}function b(j){if(w=!1,y(j),!v)if(n(c)!==null)v=!0,K(E);else{var O=n(u);O!==null&&Y(b,O.startTime-j)}}function E(j,O){v=!1,w&&(w=!1,_(S),S=-1),m=!0;var V=f;try{for(y(O),d=n(c);d!==null&&(!(d.expirationTime>O)||j&&!I());){var X=d.callback;if(typeof X=="function"){d.callback=null,f=d.priorityLevel;var q=X(d.expirationTime<=O);O=t.unstable_now(),typeof q=="function"?d.callback=q:d===n(c)&&r(c),y(O)}else r(c);d=n(c)}if(d!==null)var te=!0;else{var ve=n(u);ve!==null&&Y(b,ve.startTime-O),te=!1}return te}finally{d=null,f=V,m=!1}}var x=!1,C=null,S=-1,P=5,N=-1;function I(){return!(t.unstable_now()-N<P)}function T(){if(C!==null){var j=t.unstable_now();N=j;var O=!0;try{O=C(!0,j)}finally{O?L():(x=!1,C=null)}}else x=!1}var L;if(typeof p=="function")L=function(){p(T)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,B=z.port2;z.port1.onmessage=T,L=function(){B.postMessage(null)}}else L=function(){k(T,0)};function K(j){C=j,x||(x=!0,L())}function Y(j,O){S=k(function(){j(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,K(E))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(j){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var V=f;f=O;try{return j()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,O){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var V=f;f=j;try{return O()}finally{f=V}},t.unstable_scheduleCallback=function(j,O,V){var X=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?X+V:X):V=X,j){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=V+q,j={id:h++,callback:O,priorityLevel:j,startTime:V,expirationTime:q,sortIndex:-1},V>X?(j.sortIndex=V,e(u,j),n(c)===null&&j===n(u)&&(w?(_(S),S=-1):w=!0,Y(b,V-X))):(j.sortIndex=q,e(c,j),v||m||(v=!0,K(E))),j},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(j){var O=f;return function(){var V=f;f=O;try{return j.apply(this,arguments)}finally{f=V}}}})(I0);N0.exports=I0;var n1=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=g,$t=n1;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E0=new Set,lo={};function ps(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for(lo[t]=e,t=0;t<e.length;t++)E0.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},jp={};function i1(t){return Xu.call(jp,t)?!0:Xu.call(Rp,t)?!1:s1.test(t)?jp[t]=!0:(Rp[t]=!0,!1)}function o1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,r){if(e===null||typeof e>"u"||o1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var it={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){it[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];it[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){it[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){it[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){it[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){it[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){it[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){it[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){it[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var kh=/[\-:]([a-z])/g;function Ch(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(kh,Ch);it[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(kh,Ch);it[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(kh,Ch);it[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});it.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){it[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,n,r){var s=it.hasOwnProperty(e)?it[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,s,r)&&(n=null),r||s===null?i1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Jn=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),Ku=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),R0=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),Eh=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),j0=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function Ci(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Kc;function Mi(t){if(Kc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kc=e&&e[1]||""}return`
`+Kc+t}var qc=!1;function Jc(t,e){if(!t||qc)return"";qc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{qc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mi(t):""}function a1(t){switch(t.tag){case 5:return Mi(t.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return t=Jc(t.type,!1),t;case 11:return t=Jc(t.type.render,!1),t;case 1:return t=Jc(t.type,!0),t;default:return""}}function Zu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case Cs:return"Portal";case Ku:return"Profiler";case Nh:return"StrictMode";case qu:return"Suspense";case Ju:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case R0:return(t.displayName||"Context")+".Consumer";case T0:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Eh:return e=t.displayName||null,e!==null?e:Zu(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Zu(t(e))}catch{}}return null}function c1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zu(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function u1(t){var e=P0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=u1(t))}function A0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=P0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ra(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L0(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function td(t,e){L0(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||ra(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Us(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Op(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Ui(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function O0(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function D0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?D0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,M0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d1=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(t){d1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bi[e]=Bi[t]})});function U0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bi.hasOwnProperty(t)&&Bi[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=U0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var h1=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function id(t,e){if(e){if(h1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ld=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ad=null,zs=null,Fs=null;function Mp(t){if(t=Vo(t)){if(typeof ad!="function")throw Error(D(280));var e=t.stateNode;e&&(e=lc(e),ad(t.stateNode,t.type,e))}}function F0(t){zs?Fs?Fs.push(t):Fs=[t]:zs=t}function B0(){if(zs){var t=zs,e=Fs;if(Fs=zs=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function $0(t,e){return t(e)}function W0(){}var Zc=!1;function H0(t,e,n){if(Zc)return t(e,n);Zc=!0;try{return $0(t,e,n)}finally{Zc=!1,(zs!==null||Fs!==null)&&(W0(),B0())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var cd=!1;if(Hn)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){cd=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{cd=!1}function f1(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var $i=!1,sa=null,ia=!1,ud=null,p1={onError:function(t){$i=!0,sa=t}};function m1(t,e,n,r,s,i,o,l,c){$i=!1,sa=null,f1.apply(p1,arguments)}function _1(t,e,n,r,s,i,o,l,c){if(m1.apply(this,arguments),$i){if($i){var u=sa;$i=!1,sa=null}else throw Error(D(198));ia||(ia=!0,ud=u)}}function ms(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Up(t){if(ms(t)!==t)throw Error(D(188))}function g1(t){var e=t.alternate;if(!e){if(e=ms(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Up(s),t;if(i===r)return Up(s),e;i=i.sibling}throw Error(D(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function Y0(t){return t=g1(t),t!==null?Q0(t):null}function Q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q0(t);if(e!==null)return e;t=t.sibling}return null}var G0=$t.unstable_scheduleCallback,zp=$t.unstable_cancelCallback,y1=$t.unstable_shouldYield,v1=$t.unstable_requestPaint,De=$t.unstable_now,x1=$t.unstable_getCurrentPriorityLevel,Rh=$t.unstable_ImmediatePriority,X0=$t.unstable_UserBlockingPriority,oa=$t.unstable_NormalPriority,b1=$t.unstable_LowPriority,K0=$t.unstable_IdlePriority,rc=null,kn=null;function w1(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(rc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:S1,k1=Math.log,C1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(k1(t)/C1|0)|0}var gl=64,yl=4194304;function zi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function la(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=zi(l):(i&=o,i!==0&&(r=zi(i)))}else o=n&~s,o!==0?r=zi(o):i!==0&&(r=zi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function N1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=N1(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function q0(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function E1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var he=0;function J0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z0,Ph,eg,tg,ng,hd=!1,vl=[],yr=null,vr=null,xr=null,uo=new Map,ho=new Map,cr=[],T1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fp(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Ni(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Vo(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function R1(t,e,n,r,s){switch(e){case"focusin":return yr=Ni(yr,t,e,n,r,s),!0;case"dragenter":return vr=Ni(vr,t,e,n,r,s),!0;case"mouseover":return xr=Ni(xr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return uo.set(i,Ni(uo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ho.set(i,Ni(ho.get(i)||null,t,e,n,r,s)),!0}return!1}function rg(t){var e=Qr(t.target);if(e!==null){var n=ms(e);if(n!==null){if(e=n.tag,e===13){if(e=V0(n),e!==null){t.blockedOn=e,ng(t.priority,function(){eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ld=r,n.target.dispatchEvent(r),ld=null}else return e=Vo(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Bp(t,e,n){Bl(t)&&n.delete(e)}function j1(){hd=!1,yr!==null&&Bl(yr)&&(yr=null),vr!==null&&Bl(vr)&&(vr=null),xr!==null&&Bl(xr)&&(xr=null),uo.forEach(Bp),ho.forEach(Bp)}function Ii(t,e){t.blockedOn===e&&(t.blockedOn=null,hd||(hd=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,j1)))}function fo(t){function e(s){return Ii(s,t)}if(0<vl.length){Ii(vl[0],t);for(var n=1;n<vl.length;n++){var r=vl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&Ii(yr,t),vr!==null&&Ii(vr,t),xr!==null&&Ii(xr,t),uo.forEach(e),ho.forEach(e),n=0;n<cr.length;n++)r=cr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)rg(n),n.blockedOn===null&&cr.shift()}var Bs=Jn.ReactCurrentBatchConfig,aa=!0;function P1(t,e,n,r){var s=he,i=Bs.transition;Bs.transition=null;try{he=1,Ah(t,e,n,r)}finally{he=s,Bs.transition=i}}function A1(t,e,n,r){var s=he,i=Bs.transition;Bs.transition=null;try{he=4,Ah(t,e,n,r)}finally{he=s,Bs.transition=i}}function Ah(t,e,n,r){if(aa){var s=fd(t,e,n,r);if(s===null)uu(t,e,r,ca,n),Fp(t,r);else if(R1(s,t,e,n,r))r.stopPropagation();else if(Fp(t,r),e&4&&-1<T1.indexOf(t)){for(;s!==null;){var i=Vo(s);if(i!==null&&Z0(i),i=fd(t,e,n,r),i===null&&uu(t,e,r,ca,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else uu(t,e,r,null,n)}}var ca=null;function fd(t,e,n,r){if(ca=null,t=Th(r),t=Qr(t),t!==null)if(e=ms(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ca=t,null}function sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(x1()){case Rh:return 1;case X0:return 4;case oa:case b1:return 16;case K0:return 536870912;default:return 16}default:return 16}}var mr=null,Lh=null,$l=null;function ig(){if($l)return $l;var t,e=Lh,n=e.length,r,s="value"in mr?mr.value:mr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return $l=s.slice(t,1<r?1-r:void 0)}function Wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function $p(){return!1}function Ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xl:$p,this.isPropagationStopped=$p,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=Ht(hi),Ho=Te({},hi,{view:0,detail:0}),L1=Ht(Ho),tu,nu,Ei,sc=Te({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(tu=t.screenX-Ei.screenX,nu=t.screenY-Ei.screenY):nu=tu=0,Ei=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:nu}}),Wp=Ht(sc),O1=Te({},sc,{dataTransfer:0}),D1=Ht(O1),M1=Te({},Ho,{relatedTarget:0}),ru=Ht(M1),U1=Te({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),z1=Ht(U1),F1=Te({},hi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),B1=Ht(F1),$1=Te({},hi,{data:0}),Hp=Ht($1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V1[t])?!!e[t]:!1}function Dh(){return Y1}var Q1=Te({},Ho,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(t){return t.type==="keypress"?Wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G1=Ht(Q1),X1=Te({},sc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Ht(X1),K1=Te({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),q1=Ht(K1),J1=Te({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z1=Ht(J1),ew=Te({},sc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tw=Ht(ew),nw=[9,13,27,32],Mh=Hn&&"CompositionEvent"in window,Wi=null;Hn&&"documentMode"in document&&(Wi=document.documentMode);var rw=Hn&&"TextEvent"in window&&!Wi,og=Hn&&(!Mh||Wi&&8<Wi&&11>=Wi),Yp=" ",Qp=!1;function lg(t,e){switch(t){case"keyup":return nw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function sw(t,e){switch(t){case"compositionend":return ag(e);case"keypress":return e.which!==32?null:(Qp=!0,Yp);case"textInput":return t=e.data,t===Yp&&Qp?null:t;default:return null}}function iw(t,e){if(Ns)return t==="compositionend"||!Mh&&lg(t,e)?(t=ig(),$l=Lh=mr=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return og&&e.locale!=="ko"?null:e.data;default:return null}}var ow={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ow[t.type]:e==="textarea"}function cg(t,e,n,r){F0(r),e=ua(e,"onChange"),0<e.length&&(n=new Oh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,po=null;function lw(t){xg(t,0)}function ic(t){var e=Ts(t);if(A0(e))return t}function aw(t,e){if(t==="change")return e}var ug=!1;if(Hn){var su;if(Hn){var iu="oninput"in document;if(!iu){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),iu=typeof Xp.oninput=="function"}su=iu}else su=!1;ug=su&&(!document.documentMode||9<document.documentMode)}function Kp(){Hi&&(Hi.detachEvent("onpropertychange",dg),po=Hi=null)}function dg(t){if(t.propertyName==="value"&&ic(po)){var e=[];cg(e,po,t,Th(t)),H0(lw,e)}}function cw(t,e,n){t==="focusin"?(Kp(),Hi=e,po=n,Hi.attachEvent("onpropertychange",dg)):t==="focusout"&&Kp()}function uw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(po)}function dw(t,e){if(t==="click")return ic(e)}function hw(t,e){if(t==="input"||t==="change")return ic(e)}function fw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:fw;function mo(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Xu.call(e,s)||!mn(t[s],e[s]))return!1}return!0}function qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jp(t,e){var n=qp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qp(n)}}function hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fg(){for(var t=window,e=ra();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ra(t.document)}return e}function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pw(t){var e=fg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hg(n.ownerDocument.documentElement,n)){if(r!==null&&Uh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Jp(n,i);var o=Jp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mw=Hn&&"documentMode"in document&&11>=document.documentMode,Is=null,pd=null,Vi=null,md=!1;function Zp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Is==null||Is!==ra(r)||(r=Is,"selectionStart"in r&&Uh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vi&&mo(Vi,r)||(Vi=r,r=ua(pd,"onSelect"),0<r.length&&(e=new Oh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},ou={},pg={};Hn&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function oc(t){if(ou[t])return ou[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pg)return ou[t]=e[n];return t}var mg=oc("animationend"),_g=oc("animationiteration"),gg=oc("animationstart"),yg=oc("transitionend"),vg=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){vg.set(t,e),ps(e,[t])}for(var lu=0;lu<em.length;lu++){var au=em[lu],_w=au.toLowerCase(),gw=au[0].toUpperCase()+au.slice(1);Mr(_w,"on"+gw)}Mr(mg,"onAnimationEnd");Mr(_g,"onAnimationIteration");Mr(gg,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(yg,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));function tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_1(r,e,void 0,t),t.currentTarget=null}function xg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;tm(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;tm(s,l,u),i=c}}}if(ia)throw t=ud,ia=!1,ud=null,t}function we(t,e){var n=e[xd];n===void 0&&(n=e[xd]=new Set);var r=t+"__bubble";n.has(r)||(bg(e,t,2,!1),n.add(r))}function cu(t,e,n){var r=0;e&&(r|=4),bg(n,t,r,e)}var wl="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[wl]){t[wl]=!0,E0.forEach(function(n){n!=="selectionchange"&&(yw.has(n)||cu(n,!1,t),cu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wl]||(e[wl]=!0,cu("selectionchange",!1,e))}}function bg(t,e,n,r){switch(sg(e)){case 1:var s=P1;break;case 4:s=A1;break;default:s=Ah}n=s.bind(null,e,n,t),s=void 0,!cd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function uu(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Qr(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}H0(function(){var u=i,h=Th(n),d=[];e:{var f=vg.get(t);if(f!==void 0){var m=Oh,v=t;switch(t){case"keypress":if(Wl(n)===0)break e;case"keydown":case"keyup":m=G1;break;case"focusin":v="focus",m=ru;break;case"focusout":v="blur",m=ru;break;case"beforeblur":case"afterblur":m=ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=D1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=q1;break;case mg:case _g:case gg:m=z1;break;case yg:m=Z1;break;case"scroll":m=L1;break;case"wheel":m=tw;break;case"copy":case"cut":case"paste":m=B1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vp}var w=(e&4)!==0,k=!w&&t==="scroll",_=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,y;p!==null;){y=p;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,_!==null&&(b=co(p,_),b!=null&&w.push(go(p,b,y)))),k)break;p=p.return}0<w.length&&(f=new m(f,v,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==ld&&(v=n.relatedTarget||n.fromElement)&&(Qr(v)||v[Vn]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Qr(v):null,v!==null&&(k=ms(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Wp,b="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Vp,b="onPointerLeave",_="onPointerEnter",p="pointer"),k=m==null?f:Ts(m),y=v==null?f:Ts(v),f=new w(b,p+"leave",m,n,h),f.target=k,f.relatedTarget=y,b=null,Qr(h)===u&&(w=new w(_,p+"enter",v,n,h),w.target=y,w.relatedTarget=k,b=w),k=b,m&&v)t:{for(w=m,_=v,p=0,y=w;y;y=xs(y))p++;for(y=0,b=_;b;b=xs(b))y++;for(;0<p-y;)w=xs(w),p--;for(;0<y-p;)_=xs(_),y--;for(;p--;){if(w===_||_!==null&&w===_.alternate)break t;w=xs(w),_=xs(_)}w=null}else w=null;m!==null&&nm(d,f,m,w,!1),v!==null&&k!==null&&nm(d,k,v,w,!0)}}e:{if(f=u?Ts(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var E=aw;else if(Gp(f))if(ug)E=hw;else{E=uw;var x=cw}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=dw);if(E&&(E=E(t,u))){cg(d,E,n,h);break e}x&&x(t,f,u),t==="focusout"&&(x=f._wrapperState)&&x.controlled&&f.type==="number"&&nd(f,"number",f.value)}switch(x=u?Ts(u):window,t){case"focusin":(Gp(x)||x.contentEditable==="true")&&(Is=x,pd=u,Vi=null);break;case"focusout":Vi=pd=Is=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Zp(d,n,h);break;case"selectionchange":if(mw)break;case"keydown":case"keyup":Zp(d,n,h)}var C;if(Mh)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ns?lg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(og&&n.locale!=="ko"&&(Ns||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ns&&(C=ig()):(mr=h,Lh="value"in mr?mr.value:mr.textContent,Ns=!0)),x=ua(u,S),0<x.length&&(S=new Hp(S,t,null,n,h),d.push({event:S,listeners:x}),C?S.data=C:(C=ag(n),C!==null&&(S.data=C)))),(C=rw?sw(t,n):iw(t,n))&&(u=ua(u,"onBeforeInput"),0<u.length&&(h=new Hp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=C))}xg(d,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ua(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=co(t,n),i!=null&&r.unshift(go(t,i,s)),i=co(t,e),i!=null&&r.push(go(t,i,s))),t=t.return}return r}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function nm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=co(n,i),c!=null&&o.unshift(go(n,c,l))):s||(c=co(n,i),c!=null&&o.push(go(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vw=/\r\n?/g,xw=/\u0000|\uFFFD/g;function rm(t){return(typeof t=="string"?t:""+t).replace(vw,`
`).replace(xw,"")}function kl(t,e,n){if(e=rm(e),rm(t)!==e&&n)throw Error(D(425))}function da(){}var _d=null,gd=null;function yd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var vd=typeof setTimeout=="function"?setTimeout:void 0,bw=typeof clearTimeout=="function"?clearTimeout:void 0,sm=typeof Promise=="function"?Promise:void 0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof sm<"u"?function(t){return sm.resolve(null).then(t).catch(kw)}:vd;function kw(t){setTimeout(function(){throw t})}function du(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fo(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function im(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fi=Math.random().toString(36).slice(2),bn="__reactFiber$"+fi,yo="__reactProps$"+fi,Vn="__reactContainer$"+fi,xd="__reactEvents$"+fi,Cw="__reactListeners$"+fi,Sw="__reactHandles$"+fi;function Qr(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=im(t);t!==null;){if(n=t[bn])return n;t=im(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[bn]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function lc(t){return t[yo]||null}var bd=[],Rs=-1;function Ur(t){return{current:t}}function ke(t){0>Rs||(t.current=bd[Rs],bd[Rs]=null,Rs--)}function ye(t,e){Rs++,bd[Rs]=t.current,t.current=e}var Pr={},ht=Ur(Pr),Pt=Ur(!1),ns=Pr;function qs(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function At(t){return t=t.childContextTypes,t!=null}function ha(){ke(Pt),ke(ht)}function om(t,e,n){if(ht.current!==Pr)throw Error(D(168));ye(ht,e),ye(Pt,n)}function wg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(D(108,c1(t)||"Unknown",s));return Te({},n,r)}function fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ns=ht.current,ye(ht,t),ye(Pt,Pt.current),!0}function lm(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=wg(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,ke(Pt),ke(ht),ye(ht,t)):ke(Pt),ye(Pt,n)}var An=null,ac=!1,hu=!1;function kg(t){An===null?An=[t]:An.push(t)}function Nw(t){ac=!0,kg(t)}function zr(){if(!hu&&An!==null){hu=!0;var t=0,e=he;try{var n=An;for(he=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,ac=!1}catch(s){throw An!==null&&(An=An.slice(t+1)),G0(Rh,zr),s}finally{he=e,hu=!1}}return null}var js=[],Ps=0,pa=null,ma=0,Qt=[],Gt=0,rs=null,On=1,Dn="";function $r(t,e){js[Ps++]=ma,js[Ps++]=pa,pa=t,ma=e}function Cg(t,e,n){Qt[Gt++]=On,Qt[Gt++]=Dn,Qt[Gt++]=rs,rs=t;var r=On;t=Dn;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,On=1<<32-dn(e)+s|n<<s|r,Dn=i+t}else On=1<<i|n<<s|r,Dn=t}function zh(t){t.return!==null&&($r(t,1),Cg(t,1,0))}function Fh(t){for(;t===pa;)pa=js[--Ps],js[Ps]=null,ma=js[--Ps],js[Ps]=null;for(;t===rs;)rs=Qt[--Gt],Qt[Gt]=null,Dn=Qt[--Gt],Qt[Gt]=null,On=Qt[--Gt],Qt[Gt]=null}var Bt=null,zt=null,Ne=!1,an=null;function Sg(t,e){var n=Xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function am(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,zt=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:On,overflow:Dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,zt=null,!0):!1;default:return!1}}function wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kd(t){if(Ne){var e=zt;if(e){var n=e;if(!am(t,e)){if(wd(t))throw Error(D(418));e=br(n.nextSibling);var r=Bt;e&&am(t,e)?Sg(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Bt=t)}}else{if(wd(t))throw Error(D(418));t.flags=t.flags&-4097|2,Ne=!1,Bt=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Cl(t){if(t!==Bt)return!1;if(!Ne)return cm(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yd(t.type,t.memoizedProps)),e&&(e=zt)){if(wd(t))throw Ng(),Error(D(418));for(;e;)Sg(t,e),e=br(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Bt?br(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=zt;t;)t=br(t.nextSibling)}function Js(){zt=Bt=null,Ne=!1}function Bh(t){an===null?an=[t]:an.push(t)}var Iw=Jn.ReactCurrentBatchConfig;function Ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Sl(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function um(t){var e=t._init;return e(t._payload)}function Ig(t){function e(_,p){if(t){var y=_.deletions;y===null?(_.deletions=[p],_.flags|=16):y.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function s(_,p){return _=Sr(_,p),_.index=0,_.sibling=null,_}function i(_,p,y){return _.index=y,t?(y=_.alternate,y!==null?(y=y.index,y<p?(_.flags|=2,p):y):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,p,y,b){return p===null||p.tag!==6?(p=vu(y,_.mode,b),p.return=_,p):(p=s(p,y),p.return=_,p)}function c(_,p,y,b){var E=y.type;return E===Ss?h(_,p,y.props.children,b,y.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&um(E)===p.type)?(b=s(p,y.props),b.ref=Ti(_,p,y),b.return=_,b):(b=Kl(y.type,y.key,y.props,null,_.mode,b),b.ref=Ti(_,p,y),b.return=_,b)}function u(_,p,y,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=xu(y,_.mode,b),p.return=_,p):(p=s(p,y.children||[]),p.return=_,p)}function h(_,p,y,b,E){return p===null||p.tag!==7?(p=Zr(y,_.mode,b,E),p.return=_,p):(p=s(p,y),p.return=_,p)}function d(_,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=vu(""+p,_.mode,y),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case pl:return y=Kl(p.type,p.key,p.props,null,_.mode,y),y.ref=Ti(_,null,p),y.return=_,y;case Cs:return p=xu(p,_.mode,y),p.return=_,p;case ir:var b=p._init;return d(_,b(p._payload),y)}if(Ui(p)||Ci(p))return p=Zr(p,_.mode,y,null),p.return=_,p;Sl(_,p)}return null}function f(_,p,y,b){var E=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:l(_,p,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return y.key===E?c(_,p,y,b):null;case Cs:return y.key===E?u(_,p,y,b):null;case ir:return E=y._init,f(_,p,E(y._payload),b)}if(Ui(y)||Ci(y))return E!==null?null:h(_,p,y,b,null);Sl(_,y)}return null}function m(_,p,y,b,E){if(typeof b=="string"&&b!==""||typeof b=="number")return _=_.get(y)||null,l(p,_,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case pl:return _=_.get(b.key===null?y:b.key)||null,c(p,_,b,E);case Cs:return _=_.get(b.key===null?y:b.key)||null,u(p,_,b,E);case ir:var x=b._init;return m(_,p,y,x(b._payload),E)}if(Ui(b)||Ci(b))return _=_.get(y)||null,h(p,_,b,E,null);Sl(p,b)}return null}function v(_,p,y,b){for(var E=null,x=null,C=p,S=p=0,P=null;C!==null&&S<y.length;S++){C.index>S?(P=C,C=null):P=C.sibling;var N=f(_,C,y[S],b);if(N===null){C===null&&(C=P);break}t&&C&&N.alternate===null&&e(_,C),p=i(N,p,S),x===null?E=N:x.sibling=N,x=N,C=P}if(S===y.length)return n(_,C),Ne&&$r(_,S),E;if(C===null){for(;S<y.length;S++)C=d(_,y[S],b),C!==null&&(p=i(C,p,S),x===null?E=C:x.sibling=C,x=C);return Ne&&$r(_,S),E}for(C=r(_,C);S<y.length;S++)P=m(C,_,S,y[S],b),P!==null&&(t&&P.alternate!==null&&C.delete(P.key===null?S:P.key),p=i(P,p,S),x===null?E=P:x.sibling=P,x=P);return t&&C.forEach(function(I){return e(_,I)}),Ne&&$r(_,S),E}function w(_,p,y,b){var E=Ci(y);if(typeof E!="function")throw Error(D(150));if(y=E.call(y),y==null)throw Error(D(151));for(var x=E=null,C=p,S=p=0,P=null,N=y.next();C!==null&&!N.done;S++,N=y.next()){C.index>S?(P=C,C=null):P=C.sibling;var I=f(_,C,N.value,b);if(I===null){C===null&&(C=P);break}t&&C&&I.alternate===null&&e(_,C),p=i(I,p,S),x===null?E=I:x.sibling=I,x=I,C=P}if(N.done)return n(_,C),Ne&&$r(_,S),E;if(C===null){for(;!N.done;S++,N=y.next())N=d(_,N.value,b),N!==null&&(p=i(N,p,S),x===null?E=N:x.sibling=N,x=N);return Ne&&$r(_,S),E}for(C=r(_,C);!N.done;S++,N=y.next())N=m(C,_,S,N.value,b),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?S:N.key),p=i(N,p,S),x===null?E=N:x.sibling=N,x=N);return t&&C.forEach(function(T){return e(_,T)}),Ne&&$r(_,S),E}function k(_,p,y,b){if(typeof y=="object"&&y!==null&&y.type===Ss&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:e:{for(var E=y.key,x=p;x!==null;){if(x.key===E){if(E=y.type,E===Ss){if(x.tag===7){n(_,x.sibling),p=s(x,y.props.children),p.return=_,_=p;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ir&&um(E)===x.type){n(_,x.sibling),p=s(x,y.props),p.ref=Ti(_,x,y),p.return=_,_=p;break e}n(_,x);break}else e(_,x);x=x.sibling}y.type===Ss?(p=Zr(y.props.children,_.mode,b,y.key),p.return=_,_=p):(b=Kl(y.type,y.key,y.props,null,_.mode,b),b.ref=Ti(_,p,y),b.return=_,_=b)}return o(_);case Cs:e:{for(x=y.key;p!==null;){if(p.key===x)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(_,p.sibling),p=s(p,y.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=xu(y,_.mode,b),p.return=_,_=p}return o(_);case ir:return x=y._init,k(_,p,x(y._payload),b)}if(Ui(y))return v(_,p,y,b);if(Ci(y))return w(_,p,y,b);Sl(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(_,p.sibling),p=s(p,y),p.return=_,_=p):(n(_,p),p=vu(y,_.mode,b),p.return=_,_=p),o(_)):n(_,p)}return k}var Zs=Ig(!0),Eg=Ig(!1),_a=Ur(null),ga=null,As=null,$h=null;function Wh(){$h=As=ga=null}function Hh(t){var e=_a.current;ke(_a),t._currentValue=e}function Cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){ga=t,$h=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(ga===null)throw Error(D(308));As=t,ga.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Gr=null;function Vh(t){Gr===null?Gr=[t]:Gr.push(t)}function Tg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Vh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Yn(t,r)}function Yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Yh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Yn(t,n)}return s=r.interleaved,s===null?(e.next=e,Vh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Yn(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}function dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ya(t,e,n,r){var s=t.updateQueue;or=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(i!==null){var d=s.baseState;o=0,h=u=c=null,l=i;do{var f=l.lane,m=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(m,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(m,d,f):v,f==null)break e;d=Te({},d,f);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,c=d):h=h.next=m,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(c=d),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=d}}function hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(D(191,s));s.call(r)}}}var Yo={},Cn=Ur(Yo),vo=Ur(Yo),xo=Ur(Yo);function Xr(t){if(t===Yo)throw Error(D(174));return t}function Qh(t,e){switch(ye(xo,e),ye(vo,t),ye(Cn,Yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}ke(Cn),ye(Cn,e)}function ei(){ke(Cn),ke(vo),ke(xo)}function jg(t){Xr(xo.current);var e=Xr(Cn.current),n=sd(e,t.type);e!==n&&(ye(vo,t),ye(Cn,n))}function Gh(t){vo.current===t&&(ke(Cn),ke(vo))}var Ie=Ur(0);function va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Xh(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var Vl=Jn.ReactCurrentDispatcher,pu=Jn.ReactCurrentBatchConfig,ss=0,Ee=null,$e=null,Xe=null,xa=!1,Yi=!1,bo=0,Ew=0;function at(){throw Error(D(321))}function Kh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function qh(t,e,n,r,s,i){if(ss=i,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?Pw:Aw,t=n(r,s),Yi){i=0;do{if(Yi=!1,bo=0,25<=i)throw Error(D(301));i+=1,Xe=$e=null,e.updateQueue=null,Vl.current=Lw,t=n(r,s)}while(Yi)}if(Vl.current=ba,e=$e!==null&&$e.next!==null,ss=0,Xe=$e=Ee=null,xa=!1,e)throw Error(D(300));return t}function Jh(){var t=bo!==0;return bo=0,t}function vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Ee.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function Zt(){if($e===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Xe===null?Ee.memoizedState:Xe.next;if(e!==null)Xe=e,$e=t;else{if(t===null)throw Error(D(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Xe===null?Ee.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function wo(t,e){return typeof e=="function"?e(t):e}function mu(t){var e=Zt(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=$e,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var h=u.lane;if((ss&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=d,o=r):c=c.next=d,Ee.lanes|=h,is|=h}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,mn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ee.lanes|=i,is|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=Zt(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);mn(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Pg(){}function Ag(t,e){var n=Ee,r=Zt(),s=e(),i=!mn(r.memoizedState,s);if(i&&(r.memoizedState=s,Rt=!0),r=r.queue,Zh(Dg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,ko(9,Og.bind(null,n,r,s,e),void 0,null),Je===null)throw Error(D(349));ss&30||Lg(n,e,s)}return s}function Lg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,r){e.value=n,e.getSnapshot=r,Mg(e)&&Ug(t)}function Dg(t,e,n){return n(function(){Mg(e)&&Ug(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function Ug(t){var e=Yn(t,1);e!==null&&hn(e,t,1,-1)}function fm(t){var e=vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wo,lastRenderedState:t},e.queue=t,t=t.dispatch=jw.bind(null,Ee,t),[e.memoizedState,t]}function ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zg(){return Zt().memoizedState}function Yl(t,e,n,r){var s=vn();Ee.flags|=t,s.memoizedState=ko(1|e,n,void 0,r===void 0?null:r)}function cc(t,e,n,r){var s=Zt();r=r===void 0?null:r;var i=void 0;if($e!==null){var o=$e.memoizedState;if(i=o.destroy,r!==null&&Kh(r,o.deps)){s.memoizedState=ko(e,n,i,r);return}}Ee.flags|=t,s.memoizedState=ko(1|e,n,i,r)}function pm(t,e){return Yl(8390656,8,t,e)}function Zh(t,e){return cc(2048,8,t,e)}function Fg(t,e){return cc(4,2,t,e)}function Bg(t,e){return cc(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wg(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,$g.bind(null,e,t),n)}function ef(){}function Hg(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Vg(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yg(t,e,n){return ss&21?(mn(n,e)||(n=q0(),Ee.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function Tw(t,e){var n=he;he=n!==0&&4>n?n:4,t(!0);var r=pu.transition;pu.transition={};try{t(!1),e()}finally{he=n,pu.transition=r}}function Qg(){return Zt().memoizedState}function Rw(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Xg(e,n);else if(n=Tg(t,e,n,r),n!==null){var s=xt();hn(n,t,r,s),Kg(n,e,r)}}function jw(t,e,n){var r=Cr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Xg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,mn(l,o)){var c=e.interleaved;c===null?(s.next=s,Vh(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=Tg(t,e,s,r),n!==null&&(s=xt(),hn(n,t,r,s),Kg(n,e,r))}}function Gg(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function Xg(t,e){Yi=xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jh(t,n)}}var ba={readContext:Jt,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},Pw={readContext:Jt,useCallback:function(t,e){return vn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:pm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yl(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yl(4,2,t,e)},useMemo:function(t,e){var n=vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Rw.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=vn();return t={current:t},e.memoizedState=t},useState:fm,useDebugValue:ef,useDeferredValue:function(t){return vn().memoizedState=t},useTransition:function(){var t=fm(!1),e=t[0];return t=Tw.bind(null,t[1]),vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,s=vn();if(Ne){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Je===null)throw Error(D(349));ss&30||Lg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,pm(Dg.bind(null,r,i,t),[t]),r.flags|=2048,ko(9,Og.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=vn(),e=Je.identifierPrefix;if(Ne){var n=Dn,r=On;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ew++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Aw={readContext:Jt,useCallback:Hg,useContext:Jt,useEffect:Zh,useImperativeHandle:Wg,useInsertionEffect:Fg,useLayoutEffect:Bg,useMemo:Vg,useReducer:mu,useRef:zg,useState:function(){return mu(wo)},useDebugValue:ef,useDeferredValue:function(t){var e=Zt();return Yg(e,$e.memoizedState,t)},useTransition:function(){var t=mu(wo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Ag,useId:Qg,unstable_isNewReconciler:!1},Lw={readContext:Jt,useCallback:Hg,useContext:Jt,useEffect:Zh,useImperativeHandle:Wg,useInsertionEffect:Fg,useLayoutEffect:Bg,useMemo:Vg,useReducer:_u,useRef:zg,useState:function(){return _u(wo)},useDebugValue:ef,useDeferredValue:function(t){var e=Zt();return $e===null?e.memoizedState=t:Yg(e,$e.memoizedState,t)},useTransition:function(){var t=_u(wo)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:Pg,useSyncExternalStore:Ag,useId:Qg,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?ms(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=Cr(t),i=$n(r,s);i.payload=e,n!=null&&(i.callback=n),e=wr(t,i,s),e!==null&&(hn(e,t,s,r),Hl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=Cr(t),i=$n(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=wr(t,i,s),e!==null&&(hn(e,t,s,r),Hl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=Cr(t),s=$n(n,r);s.tag=2,e!=null&&(s.callback=e),e=wr(t,s,r),e!==null&&(hn(e,t,r,n),Hl(e,t,r))}};function mm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(s,i):!0}function qg(t,e,n){var r=!1,s=Pr,i=e.contextType;return typeof i=="object"&&i!==null?i=Jt(i):(s=At(e)?ns:ht.current,r=e.contextTypes,i=(r=r!=null)?qs(t,s):Pr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function _m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function Nd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Yh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Jt(i):(i=At(e)?ns:ht.current,s.context=qs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Sd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&uc.enqueueReplaceState(s,s.state,null),ya(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,e){try{var n="",r=e;do n+=a1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ow=typeof WeakMap=="function"?WeakMap:Map;function Jg(t,e,n){n=$n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ka||(ka=!0,Md=r),Id(t,e)},n}function Zg(t,e,n){n=$n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Id(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ow;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Xw.bind(null,t,e,n),e.then(t,t))}function ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$n(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var Dw=Jn.ReactCurrentOwner,Rt=!1;function yt(t,e,n,r){e.child=t===null?Eg(e,null,n,r):Zs(e,t.child,n,r)}function xm(t,e,n,r,s){n=n.render;var i=e.ref;return $s(e,s),r=qh(t,e,n,r,i,s),n=Jh(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Qn(t,e,s)):(Ne&&n&&zh(e),e.flags|=1,yt(t,e,r,s),e.child)}function bm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!cf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ey(t,e,i,r,s)):(t=Kl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return Qn(t,e,s)}return e.flags|=1,t=Sr(i,r),t.ref=e.ref,t.return=e,e.child=t}function ey(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(mo(i,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Qn(t,e,s)}return Ed(t,e,n,r,s)}function ty(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Os,Ut),Ut|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Os,Ut),Ut|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(Os,Ut),Ut|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ye(Os,Ut),Ut|=r;return yt(t,e,s,n),e.child}function ny(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ed(t,e,n,r,s){var i=At(n)?ns:ht.current;return i=qs(e,i),$s(e,s),n=qh(t,e,n,r,i,s),r=Jh(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Qn(t,e,s)):(Ne&&r&&zh(e),e.flags|=1,yt(t,e,n,s),e.child)}function wm(t,e,n,r,s){if(At(n)){var i=!0;fa(e)}else i=!1;if($s(e,s),e.stateNode===null)Ql(t,e),qg(e,n,r),Nd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Jt(u):(u=At(n)?ns:ht.current,u=qs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&_m(e,o,r,u),or=!1;var f=e.memoizedState;o.state=f,ya(e,r,o,s),c=e.memoizedState,l!==r||f!==c||Pt.current||or?(typeof h=="function"&&(Sd(e,n,h,r),c=e.memoizedState),(l=or||mm(e,n,l,r,f,c,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Rg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:on(e.type,l),o.props=u,d=e.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Jt(c):(c=At(n)?ns:ht.current,c=qs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==c)&&_m(e,o,r,c),or=!1,f=e.memoizedState,o.state=f,ya(e,r,o,s);var v=e.memoizedState;l!==d||f!==v||Pt.current||or?(typeof m=="function"&&(Sd(e,n,m,r),v=e.memoizedState),(u=or||mm(e,n,u,r,f,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,i,s)}function Td(t,e,n,r,s,i){ny(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&lm(e,n,!1),Qn(t,e,i);r=e.stateNode,Dw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zs(e,t.child,null,i),e.child=Zs(e,null,l,i)):yt(t,e,l,i),e.memoizedState=r.state,s&&lm(e,n,!0),e.child}function ry(t){var e=t.stateNode;e.pendingContext?om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&om(t,e.context,!1),Qh(t,e.containerInfo)}function km(t,e,n,r,s){return Js(),Bh(s),e.flags|=256,yt(t,e,n,r),e.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function jd(t){return{baseLanes:t,cachePool:null,transitions:null}}function sy(t,e,n){var r=e.pendingProps,s=Ie.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ye(Ie,s&1),t===null)return kd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=fc(o,r,0,null),t=Zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=jd(n),e.memoizedState=Rd,t):tf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Mw(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Sr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Sr(l,i):(i=Zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?jd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Rd,r}return i=t.child,t=i.sibling,r=Sr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tf(t,e){return e=fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,r){return r!==null&&Bh(r),Zs(e,t.child,null,n),t=tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=gu(Error(D(422))),Nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=fc({mode:"visible",children:r.children},s,0,null),i=Zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Zs(e,t.child,null,o),e.child.memoizedState=jd(o),e.memoizedState=Rd,i);if(!(e.mode&1))return Nl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(D(419)),r=gu(i,r,void 0),Nl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Rt||l){if(r=Je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Yn(t,s),hn(r,t,s,-1))}return af(),r=gu(Error(D(421))),Nl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Kw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,zt=br(s.nextSibling),Bt=e,Ne=!0,an=null,t!==null&&(Qt[Gt++]=On,Qt[Gt++]=Dn,Qt[Gt++]=rs,On=t.id,Dn=t.overflow,rs=e),e=tf(e,r.children),e.flags|=4096,e)}function Cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cd(t.return,e,n)}function yu(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function iy(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(yt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&va(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),yu(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&va(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}yu(e,!0,n,null,i);break;case"together":yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uw(t,e,n){switch(e.tag){case 3:ry(e),Js();break;case 5:jg(e);break;case 1:At(e.type)&&fa(e);break;case 4:Qh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ye(_a,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?sy(t,e,n):(ye(Ie,Ie.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return iy(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,ty(t,e,n)}return Qn(t,e,n)}var oy,Pd,ly,ay;oy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pd=function(){};ly=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Xr(Cn.current);var i=null;switch(n){case"input":s=ed(t,s),r=ed(t,r),i=[];break;case"select":s=Te({},s,{value:void 0}),r=Te({},r,{value:void 0}),i=[];break;case"textarea":s=rd(t,s),r=rd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=da)}id(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lo.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&we("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ay=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ri(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function zw(t,e,n){var r=e.pendingProps;switch(Fh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return At(e.type)&&ha(),ct(e),null;case 3:return r=e.stateNode,ei(),ke(Pt),ke(ht),Xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,an!==null&&(Fd(an),an=null))),Pd(t,e),ct(e),null;case 5:Gh(e);var s=Xr(xo.current);if(n=e.type,t!==null&&e.stateNode!=null)ly(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return ct(e),null}if(t=Xr(Cn.current),Cl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[bn]=e,r[yo]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<Fi.length;s++)we(Fi[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Ap(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":Op(r,i),we("invalid",r)}id(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&kl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&kl(r.textContent,l,t),s=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ml(r),Lp(r,i,!0);break;case"textarea":ml(r),Dp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=da)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=D0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[yo]=r,oy(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<Fi.length;s++)we(Fi[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":Ap(t,r),s=ed(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Te({},r,{value:void 0}),we("invalid",t);break;case"textarea":Op(t,r),s=rd(t,r),we("invalid",t);break;default:s=r}id(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?z0(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&M0(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ao(t,c):typeof c=="number"&&ao(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?c!=null&&i==="onScroll"&&we("scroll",t):c!=null&&Sh(t,i,c,o))}switch(n){case"input":ml(t),Lp(t,r,!1);break;case"textarea":ml(t),Dp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Us(t,!!r.multiple,i,!1):r.defaultValue!=null&&Us(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=da)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)ay(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Xr(xo.current),Xr(Cn.current),Cl(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(i=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:kl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&kl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return ct(e),null;case 13:if(ke(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&zt!==null&&e.mode&1&&!(e.flags&128))Ng(),Js(),e.flags|=98560,i=!1;else if(i=Cl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(D(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(D(317));i[bn]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),i=!1}else an!==null&&(Fd(an),an=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Ye===0&&(Ye=3):af())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return ei(),Pd(t,e),t===null&&_o(e.stateNode.containerInfo),ct(e),null;case 10:return Hh(e.type._context),ct(e),null;case 17:return At(e.type)&&ha(),ct(e),null;case 19:if(ke(Ie),i=e.memoizedState,i===null)return ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ri(i,!1);else{if(Ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=va(t),o!==null){for(e.flags|=128,Ri(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}i.tail!==null&&De()>ni&&(e.flags|=128,r=!0,Ri(i,!1),e.lanes=4194304)}else{if(!r)if(t=va(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ne)return ct(e),null}else 2*De()-i.renderingStartTime>ni&&n!==1073741824&&(e.flags|=128,r=!0,Ri(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=De(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return lf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ut&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function Fw(t,e){switch(Fh(e),e.tag){case 1:return At(e.type)&&ha(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ei(),ke(Pt),ke(ht),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gh(e),null;case 13:if(ke(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Js()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Ie),null;case 4:return ei(),null;case 10:return Hh(e.type._context),null;case 22:case 23:return lf(),null;case 24:return null;default:return null}}var Il=!1,dt=!1,Bw=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Ad(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Sm=!1;function $w(t,e){if(_d=aa,t=fg(),Uh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var m;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==i||r!==0&&d.nodeType!==3||(c=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++h===r&&(c=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gd={focusedElem:t,selectionRange:n},aa=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?w:on(e.type,w),k);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(b){Re(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return v=Sm,Sm=!1,v}function Qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ad(e,n,i)}s=s.next}while(s!==r)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cy(t){var e=t.alternate;e!==null&&(t.alternate=null,cy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[yo],delete e[xd],delete e[Cw],delete e[Sw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function uy(t){return t.tag===5||t.tag===3||t.tag===4}function Nm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||uy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=da));else if(r!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var nt=null,ln=!1;function rr(t,e,n){for(n=n.child;n!==null;)dy(t,e,n),n=n.sibling}function dy(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(rc,n)}catch{}switch(n.tag){case 5:dt||Ls(n,e);case 6:var r=nt,s=ln;nt=null,rr(t,e,n),nt=r,ln=s,nt!==null&&(ln?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(ln?(t=nt,n=n.stateNode,t.nodeType===8?du(t.parentNode,n):t.nodeType===1&&du(t,n),fo(t)):du(nt,n.stateNode));break;case 4:r=nt,s=ln,nt=n.stateNode.containerInfo,ln=!0,rr(t,e,n),nt=r,ln=s;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ad(n,e,o),s=s.next}while(s!==r)}rr(t,e,n);break;case 1:if(!dt&&(Ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,rr(t,e,n),dt=r):rr(t,e,n);break;default:rr(t,e,n)}}function Im(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bw),e.forEach(function(r){var s=qw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,ln=!1;break e;case 3:nt=l.stateNode.containerInfo,ln=!0;break e;case 4:nt=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(nt===null)throw Error(D(160));dy(i,o,s),nt=null,ln=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){Re(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hy(e,t),e=e.sibling}function hy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),yn(t),r&4){try{Qi(3,t,t.return),dc(3,t)}catch(w){Re(t,t.return,w)}try{Qi(5,t,t.return)}catch(w){Re(t,t.return,w)}}break;case 1:sn(e,t),yn(t),r&512&&n!==null&&Ls(n,n.return);break;case 5:if(sn(e,t),yn(t),r&512&&n!==null&&Ls(n,n.return),t.flags&32){var s=t.stateNode;try{ao(s,"")}catch(w){Re(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&L0(s,i),od(l,o);var u=od(l,i);for(o=0;o<c.length;o+=2){var h=c[o],d=c[o+1];h==="style"?z0(s,d):h==="dangerouslySetInnerHTML"?M0(s,d):h==="children"?ao(s,d):Sh(s,h,d,u)}switch(l){case"input":td(s,i);break;case"textarea":O0(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Us(s,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?Us(s,!!i.multiple,i.defaultValue,!0):Us(s,!!i.multiple,i.multiple?[]:"",!1))}s[yo]=i}catch(w){Re(t,t.return,w)}}break;case 6:if(sn(e,t),yn(t),r&4){if(t.stateNode===null)throw Error(D(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){Re(t,t.return,w)}}break;case 3:if(sn(e,t),yn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(w){Re(t,t.return,w)}break;case 4:sn(e,t),yn(t);break;case 13:sn(e,t),yn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(sf=De())),r&4&&Im(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(u=dt)||h,sn(e,t),dt=u):sn(e,t),yn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(d=H=h;H!==null;){switch(f=H,m=f.child,f.tag){case 0:case 11:case 14:case 15:Qi(4,f,f.return);break;case 1:Ls(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Re(r,n,w)}}break;case 5:Ls(f,f.return);break;case 22:if(f.memoizedState!==null){Tm(d);continue}}m!==null?(m.return=f,H=m):Tm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,c=d.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=U0("display",o))}catch(w){Re(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Re(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:sn(e,t),yn(t),r&4&&Im(t);break;case 21:break;default:sn(e,t),yn(t)}}function yn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(uy(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ao(s,""),r.flags&=-33);var i=Nm(t);Dd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Nm(t);Od(t,l,o);break;default:throw Error(D(161))}}catch(c){Re(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ww(t,e,n){H=t,fy(t)}function fy(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Il;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||dt;l=Il;var u=dt;if(Il=o,(dt=c)&&!u)for(H=s;H!==null;)o=H,c=o.child,o.tag===22&&o.memoizedState!==null?Rm(s):c!==null?(c.return=o,H=c):Rm(s);for(;i!==null;)H=i,fy(i),i=i.sibling;H=s,Il=l,dt=u}Em(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Em(t)}}function Em(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&hm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&fo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}dt||e.flags&512&&Ld(e)}catch(f){Re(e,e.return,f)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Tm(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Rm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(c){Re(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){Re(e,s,c)}}var i=e.return;try{Ld(e)}catch(c){Re(e,i,c)}break;case 5:var o=e.return;try{Ld(e)}catch(c){Re(e,o,c)}}}catch(c){Re(e,e.return,c)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var Hw=Math.ceil,wa=Jn.ReactCurrentDispatcher,nf=Jn.ReactCurrentOwner,qt=Jn.ReactCurrentBatchConfig,ce=0,Je=null,ze=null,st=0,Ut=0,Os=Ur(0),Ye=0,Co=null,is=0,hc=0,rf=0,Gi=null,Tt=null,sf=0,ni=1/0,Pn=null,ka=!1,Md=null,kr=null,El=!1,_r=null,Ca=0,Xi=0,Ud=null,Gl=-1,Xl=0;function xt(){return ce&6?De():Gl!==-1?Gl:Gl=De()}function Cr(t){return t.mode&1?ce&2&&st!==0?st&-st:Iw.transition!==null?(Xl===0&&(Xl=q0()),Xl):(t=he,t!==0||(t=window.event,t=t===void 0?16:sg(t.type)),t):1}function hn(t,e,n,r){if(50<Xi)throw Xi=0,Ud=null,Error(D(185));Wo(t,n,r),(!(ce&2)||t!==Je)&&(t===Je&&(!(ce&2)&&(hc|=n),Ye===4&&ur(t,st)),Lt(t,r),n===1&&ce===0&&!(e.mode&1)&&(ni=De()+500,ac&&zr()))}function Lt(t,e){var n=t.callbackNode;I1(t,e);var r=la(t,t===Je?st:0);if(r===0)n!==null&&zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zp(n),e===1)t.tag===0?Nw(jm.bind(null,t)):kg(jm.bind(null,t)),ww(function(){!(ce&6)&&zr()}),n=null;else{switch(J0(r)){case 1:n=Rh;break;case 4:n=X0;break;case 16:n=oa;break;case 536870912:n=K0;break;default:n=oa}n=by(n,py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function py(t,e){if(Gl=-1,Xl=0,ce&6)throw Error(D(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var r=la(t,t===Je?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sa(t,r);else{e=r;var s=ce;ce|=2;var i=_y();(Je!==t||st!==e)&&(Pn=null,ni=De()+500,Jr(t,e));do try{Qw();break}catch(l){my(t,l)}while(!0);Wh(),wa.current=i,ce=s,ze!==null?e=0:(Je=null,st=0,e=Ye)}if(e!==0){if(e===2&&(s=dd(t),s!==0&&(r=s,e=zd(t,s))),e===1)throw n=Co,Jr(t,0),ur(t,r),Lt(t,De()),n;if(e===6)ur(t,r);else{if(s=t.current.alternate,!(r&30)&&!Vw(s)&&(e=Sa(t,r),e===2&&(i=dd(t),i!==0&&(r=i,e=zd(t,i))),e===1))throw n=Co,Jr(t,0),ur(t,r),Lt(t,De()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:Wr(t,Tt,Pn);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=sf+500-De(),10<e)){if(la(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=vd(Wr.bind(null,t,Tt,Pn),e);break}Wr(t,Tt,Pn);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hw(r/1960))-r,10<r){t.timeoutHandle=vd(Wr.bind(null,t,Tt,Pn),r);break}Wr(t,Tt,Pn);break;case 5:Wr(t,Tt,Pn);break;default:throw Error(D(329))}}}return Lt(t,De()),t.callbackNode===n?py.bind(null,t):null}function zd(t,e){var n=Gi;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Sa(t,e),t!==2&&(e=Tt,Tt=n,e!==null&&Fd(e)),t}function Fd(t){Tt===null?Tt=t:Tt.push.apply(Tt,t)}function Vw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!mn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~rf,e&=~hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function jm(t){if(ce&6)throw Error(D(327));Ws();var e=la(t,0);if(!(e&1))return Lt(t,De()),null;var n=Sa(t,e);if(t.tag!==0&&n===2){var r=dd(t);r!==0&&(e=r,n=zd(t,r))}if(n===1)throw n=Co,Jr(t,0),ur(t,e),Lt(t,De()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,Tt,Pn),Lt(t,De()),null}function of(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(ni=De()+500,ac&&zr())}}function os(t){_r!==null&&_r.tag===0&&!(ce&6)&&Ws();var e=ce;ce|=1;var n=qt.transition,r=he;try{if(qt.transition=null,he=1,t)return t()}finally{he=r,qt.transition=n,ce=e,!(ce&6)&&zr()}}function lf(){Ut=Os.current,ke(Os)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bw(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Fh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ha();break;case 3:ei(),ke(Pt),ke(ht),Xh();break;case 5:Gh(r);break;case 4:ei();break;case 13:ke(Ie);break;case 19:ke(Ie);break;case 10:Hh(r.type._context);break;case 22:case 23:lf()}n=n.return}if(Je=t,ze=t=Sr(t.current,null),st=Ut=e,Ye=0,Co=null,rf=hc=is=0,Tt=Gi=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Gr=null}return t}function my(t,e){do{var n=ze;try{if(Wh(),Vl.current=ba,xa){for(var r=Ee.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}xa=!1}if(ss=0,Xe=$e=Ee=null,Yi=!1,bo=0,nf.current=null,n===null||n.return===null){Ye=1,Co=e,ze=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=st,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=ym(o);if(m!==null){m.flags&=-257,vm(m,o,l,i,e),m.mode&1&&gm(i,u,e),e=m,c=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(c),e.updateQueue=w}else v.add(c);break e}else{if(!(e&1)){gm(i,u,e),af();break e}c=Error(D(426))}}else if(Ne&&l.mode&1){var k=ym(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),vm(k,o,l,i,e),Bh(ti(c,l));break e}}i=c=ti(c,l),Ye!==4&&(Ye=2),Gi===null?Gi=[i]:Gi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=Jg(i,c,e);dm(i,_);break e;case 1:l=c;var p=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(kr===null||!kr.has(y)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Zg(i,l,e);dm(i,b);break e}}i=i.return}while(i!==null)}yy(n)}catch(E){e=E,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function _y(){var t=wa.current;return wa.current=ba,t===null?ba:t}function af(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||!(is&268435455)&&!(hc&268435455)||ur(Je,st)}function Sa(t,e){var n=ce;ce|=2;var r=_y();(Je!==t||st!==e)&&(Pn=null,Jr(t,e));do try{Yw();break}catch(s){my(t,s)}while(!0);if(Wh(),ce=n,wa.current=r,ze!==null)throw Error(D(261));return Je=null,st=0,Ye}function Yw(){for(;ze!==null;)gy(ze)}function Qw(){for(;ze!==null&&!y1();)gy(ze)}function gy(t){var e=xy(t.alternate,t,Ut);t.memoizedProps=t.pendingProps,e===null?yy(t):ze=e,nf.current=null}function yy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fw(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ye=6,ze=null;return}}else if(n=zw(n,e,Ut),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Ye===0&&(Ye=5)}function Wr(t,e,n){var r=he,s=qt.transition;try{qt.transition=null,he=1,Gw(t,e,n,r)}finally{qt.transition=s,he=r}return null}function Gw(t,e,n,r){do Ws();while(_r!==null);if(ce&6)throw Error(D(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(E1(t,i),t===Je&&(ze=Je=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,by(oa,function(){return Ws(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=qt.transition,qt.transition=null;var o=he;he=1;var l=ce;ce|=4,nf.current=null,$w(t,n),hy(n,t),pw(gd),aa=!!_d,gd=_d=null,t.current=n,Ww(n),v1(),ce=l,he=o,qt.transition=i}else t.current=n;if(El&&(El=!1,_r=t,Ca=s),i=t.pendingLanes,i===0&&(kr=null),w1(n.stateNode),Lt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ka)throw ka=!1,t=Md,Md=null,t;return Ca&1&&t.tag!==0&&Ws(),i=t.pendingLanes,i&1?t===Ud?Xi++:(Xi=0,Ud=t):Xi=0,zr(),null}function Ws(){if(_r!==null){var t=J0(Ca),e=qt.transition,n=he;try{if(qt.transition=null,he=16>t?16:t,_r===null)var r=!1;else{if(t=_r,_r=null,Ca=0,ce&6)throw Error(D(331));var s=ce;for(ce|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(H=u;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:Qi(8,h,i)}var d=h.child;if(d!==null)d.return=h,H=d;else for(;H!==null;){h=H;var f=h.sibling,m=h.return;if(cy(h),h===u){H=null;break}if(f!==null){f.return=m,H=f;break}H=m}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qi(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,H=_;break e}H=i.return}}var p=t.current;for(H=p;H!==null;){o=H;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,H=y;else e:for(o=p;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dc(9,l)}}catch(E){Re(l,l.return,E)}if(l===o){H=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,H=b;break e}H=l.return}}if(ce=s,zr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(rc,t)}catch{}r=!0}return r}finally{he=n,qt.transition=e}}return!1}function Pm(t,e,n){e=ti(n,e),e=Jg(t,e,1),t=wr(t,e,1),e=xt(),t!==null&&(Wo(t,1,e),Lt(t,e))}function Re(t,e,n){if(t.tag===3)Pm(t,t,n);else for(;e!==null;){if(e.tag===3){Pm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=ti(n,t),t=Zg(e,t,1),e=wr(e,t,1),t=xt(),e!==null&&(Wo(e,1,t),Lt(e,t));break}}e=e.return}}function Xw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(st&n)===n&&(Ye===4||Ye===3&&(st&130023424)===st&&500>De()-sf?Jr(t,0):rf|=n),Lt(t,e)}function vy(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=xt();t=Yn(t,e),t!==null&&(Wo(t,e,n),Lt(t,n))}function Kw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vy(t,n)}function qw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),vy(t,n)}var xy;xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Uw(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,Ne&&e.flags&1048576&&Cg(e,ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ql(t,e),t=e.pendingProps;var s=qs(e,ht.current);$s(e,n),s=qh(null,e,r,t,s,n);var i=Jh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(i=!0,fa(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yh(e),s.updater=uc,e.stateNode=s,s._reactInternals=e,Nd(e,r,t,n),e=Td(null,e,r,!0,i,n)):(e.tag=0,Ne&&i&&zh(e),yt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ql(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Zw(r),t=on(r,t),s){case 0:e=Ed(null,e,r,t,n);break e;case 1:e=wm(null,e,r,t,n);break e;case 11:e=xm(null,e,r,t,n);break e;case 14:e=bm(null,e,r,on(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Ed(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),wm(t,e,r,s,n);case 3:e:{if(ry(e),t===null)throw Error(D(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Rg(t,e),ya(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ti(Error(D(423)),e),e=km(t,e,r,n,s);break e}else if(r!==s){s=ti(Error(D(424)),e),e=km(t,e,r,n,s);break e}else for(zt=br(e.stateNode.containerInfo.firstChild),Bt=e,Ne=!0,an=null,n=Eg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Js(),r===s){e=Qn(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return jg(e),t===null&&kd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,yd(r,s)?o=null:i!==null&&yd(r,i)&&(e.flags|=32),ny(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&kd(e),null;case 13:return sy(t,e,n);case 4:return Qh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zs(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),xm(t,e,r,s,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ye(_a,r._currentValue),r._currentValue=o,i!==null)if(mn(i.value,o)){if(i.children===s.children&&!Pt.current){e=Qn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=$n(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Cd(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(D(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}yt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,$s(e,n),s=Jt(s),r=r(s),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,s=on(r,e.pendingProps),s=on(r.type,s),bm(t,e,r,s,n);case 15:return ey(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Ql(t,e),e.tag=1,At(r)?(t=!0,fa(e)):t=!1,$s(e,n),qg(e,r,s),Nd(e,r,s,n),Td(null,e,r,!0,t,n);case 19:return iy(t,e,n);case 22:return ty(t,e,n)}throw Error(D(156,e.tag))};function by(t,e){return G0(t,e)}function Jw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,e,n,r){return new Jw(t,e,n,r)}function cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zw(t){if(typeof t=="function")return cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Eh)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return Zr(n.children,s,i,e);case Nh:o=8,s|=8;break;case Ku:return t=Xt(12,n,e,s|2),t.elementType=Ku,t.lanes=i,t;case qu:return t=Xt(13,n,e,s),t.elementType=qu,t.lanes=i,t;case Ju:return t=Xt(19,n,e,s),t.elementType=Ju,t.lanes=i,t;case j0:return fc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T0:o=10;break e;case R0:o=9;break e;case Ih:o=11;break e;case Eh:o=14;break e;case ir:o=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=Xt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Zr(t,e,n,r){return t=Xt(7,t,r,e),t.lanes=n,t}function fc(t,e,n,r){return t=Xt(22,t,r,e),t.elementType=j0,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=Xt(6,t,null,e),t.lanes=n,t}function xu(t,e,n){return e=Xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ek(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eu(0),this.expirationTimes=eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function uf(t,e,n,r,s,i,o,l,c){return t=new ek(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Xt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yh(i),t}function tk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wy(t){if(!t)return Pr;t=t._reactInternals;e:{if(ms(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(At(n))return wg(t,n,e)}return e}function ky(t,e,n,r,s,i,o,l,c){return t=uf(n,r,!0,t,s,i,o,l,c),t.context=wy(null),n=t.current,r=xt(),s=Cr(n),i=$n(r,s),i.callback=e??null,wr(n,i,s),t.current.lanes=s,Wo(t,s,r),Lt(t,r),t}function pc(t,e,n,r){var s=e.current,i=xt(),o=Cr(s);return n=wy(n),e.context===null?e.context=n:e.pendingContext=n,e=$n(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(s,e,o),t!==null&&(hn(t,s,o,i),Hl(t,s,o)),o}function Na(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function df(t,e){Am(t,e),(t=t.alternate)&&Am(t,e)}function nk(){return null}var Cy=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}mc.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));pc(t,e,null,null)};mc.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){pc(null,t,null,null)}),e[Vn]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&rg(t)}};function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function rk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Na(o);i.call(u)}}var o=ky(e,r,t,0,null,!1,!1,"",Lm);return t._reactRootContainer=o,t[Vn]=o.current,_o(t.nodeType===8?t.parentNode:t),os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Na(c);l.call(u)}}var c=uf(t,0,!1,null,null,!1,!1,"",Lm);return t._reactRootContainer=c,t[Vn]=c.current,_o(t.nodeType===8?t.parentNode:t),os(function(){pc(e,c,n,r)}),c}function gc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Na(o);l.call(c)}}pc(e,o,t,s)}else o=rk(n,e,t,s,r);return Na(o)}Z0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zi(e.pendingLanes);n!==0&&(jh(e,n|1),Lt(e,De()),!(ce&6)&&(ni=De()+500,zr()))}break;case 13:os(function(){var r=Yn(t,1);if(r!==null){var s=xt();hn(r,t,1,s)}}),df(t,1)}};Ph=function(t){if(t.tag===13){var e=Yn(t,134217728);if(e!==null){var n=xt();hn(e,t,134217728,n)}df(t,134217728)}};eg=function(t){if(t.tag===13){var e=Cr(t),n=Yn(t,e);if(n!==null){var r=xt();hn(n,t,e,r)}df(t,e)}};tg=function(){return he};ng=function(t,e){var n=he;try{return he=t,e()}finally{he=n}};ad=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=lc(r);if(!s)throw Error(D(90));A0(r),td(r,s)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&Us(t,!!n.multiple,e,!1)}};$0=of;W0=os;var sk={usingClientEntryPoint:!1,Events:[Vo,Ts,lc,F0,B0,of]},ji={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ik={bundleType:ji.bundleType,version:ji.version,rendererPackageName:ji.rendererPackageName,rendererConfig:ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:ji.findFiberByHostInstance||nk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{rc=Tl.inject(ik),kn=Tl}catch{}}Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sk;Wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ff(e))throw Error(D(200));return tk(t,e,null,n)};Wt.createRoot=function(t,e){if(!ff(t))throw Error(D(299));var n=!1,r="",s=Cy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=uf(t,1,!1,null,null,n,!1,r,s),t[Vn]=e.current,_o(t.nodeType===8?t.parentNode:t),new hf(e)};Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Wt.flushSync=function(t){return os(t)};Wt.hydrate=function(t,e,n){if(!_c(e))throw Error(D(200));return gc(null,t,e,!0,n)};Wt.hydrateRoot=function(t,e,n){if(!ff(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Cy;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ky(e,null,t,1,n??null,s,!1,i,o),t[Vn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new mc(e)};Wt.render=function(t,e,n){if(!_c(e))throw Error(D(200));return gc(null,t,e,!1,n)};Wt.unmountComponentAtNode=function(t){if(!_c(t))throw Error(D(40));return t._reactRootContainer?(os(function(){gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Wt.unstable_batchedUpdates=of;Wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_c(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return gc(t,e,n,!1,r)};Wt.version="18.3.1-next-f1338f8080-20240426";function Sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sy)}catch(t){console.error(t)}}Sy(),S0.exports=Wt;var Ds=S0.exports,Om=Ds;Gu.createRoot=Om.createRoot,Gu.hydrateRoot=Om.hydrateRoot;var ok=`svg[fill=none] {
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
}`,lk={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=ok,document.head.appendChild(t))}var me=lk,ak=({size:t=24})=>a.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),bu="__agentation_freeze";function ck(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[bu]||(t[bu]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[bu]}var tt=ck();typeof window<"u"&&!tt.installed&&(tt.origSetTimeout=window.setTimeout.bind(window),tt.origSetInterval=window.setInterval.bind(window),tt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?tt.origSetTimeout(t,e):tt.origSetTimeout((...r)=>{tt.frozen?tt.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?tt.origSetInterval(t,e):tt.origSetInterval((...r)=>{tt.frozen||t(...r)},e,...n),window.requestAnimationFrame=t=>tt.origRAF(e=>{tt.frozen?tt.frozenRAFQueue.push(t):t(e)}),tt.installed=!0);var bs=tt.origSetTimeout;tt.origSetInterval;g.forwardRef(function({element:e,timestamp:n,selectedText:r,placeholder:s="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:c,onDelete:u,style:h,accentColor:d="#3c82f7",isExiting:f=!1,lightMode:m=!1,computedStyles:v},w){const[k,_]=g.useState(i),[p,y]=g.useState(!1),[b,E]=g.useState("initial"),[x,C]=g.useState(!1),[S,P]=g.useState(!1),N=g.useRef(null),I=g.useRef(null),T=g.useRef(null),L=g.useRef(null);g.useEffect(()=>{f&&b!=="exit"&&E("exit")},[f,b]),g.useEffect(()=>{bs(()=>{E("enter")},0);const O=bs(()=>{E("entered")},200),V=bs(()=>{const X=N.current;X&&(X.focus(),X.selectionStart=X.selectionEnd=X.value.length,X.scrollTop=X.scrollHeight)},50);return()=>{clearTimeout(O),clearTimeout(V),T.current&&clearTimeout(T.current),L.current&&clearTimeout(L.current)}},[]);const z=g.useCallback(()=>{L.current&&clearTimeout(L.current),y(!0),L.current=bs(()=>{var O;y(!1),(O=N.current)==null||O.focus()},250)},[]);g.useImperativeHandle(w,()=>({shake:z}),[z]);const B=g.useCallback(()=>{E("exit"),T.current=bs(()=>{c()},150)},[c]),K=g.useCallback(()=>{k.trim()&&l(k.trim())},[k,l]),Y=g.useCallback(O=>{O.nativeEvent.isComposing||(O.key==="Enter"&&!O.shiftKey&&(O.preventDefault(),K()),O.key==="Escape"&&B())},[K,B]),j=[me.popup,m?me.light:"",b==="enter"?me.enter:"",b==="entered"?me.entered:"",b==="exit"?me.exit:"",p?me.shake:""].filter(Boolean).join(" ");return a.jsxs("div",{ref:I,className:j,"data-annotation-popup":!0,style:h,onClick:O=>O.stopPropagation(),children:[a.jsxs("div",{className:me.header,children:[v&&Object.keys(v).length>0?a.jsxs("button",{className:me.headerToggle,onClick:()=>{const O=S;P(!S),O&&bs(()=>{var V;return(V=N.current)==null?void 0:V.focus()},0)},type:"button",children:[a.jsx("svg",{className:`${me.chevron} ${S?me.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a.jsx("span",{className:me.element,children:e})]}):a.jsx("span",{className:me.element,children:e}),n&&a.jsx("span",{className:me.timestamp,children:n})]}),v&&Object.keys(v).length>0&&a.jsx("div",{className:`${me.stylesWrapper} ${S?me.expanded:""}`,children:a.jsx("div",{className:me.stylesInner,children:a.jsx("div",{className:me.stylesBlock,children:Object.entries(v).map(([O,V])=>a.jsxs("div",{className:me.styleLine,children:[a.jsx("span",{className:me.styleProperty,children:O.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",a.jsx("span",{className:me.styleValue,children:V}),";"]},O))})})}),r&&a.jsxs("div",{className:me.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),a.jsx("textarea",{ref:N,className:me.textarea,style:{borderColor:x?d:void 0},placeholder:s,value:k,onChange:O=>_(O.target.value),onFocus:()=>C(!0),onBlur:()=>C(!1),rows:2,onKeyDown:Y}),a.jsxs("div",{className:me.actions,children:[u&&a.jsx("div",{className:me.deleteWrapper,children:a.jsx("button",{className:me.deleteButton,onClick:u,type:"button",children:a.jsx(ak,{size:22})})}),a.jsx("button",{className:me.cancel,onClick:B,children:"Cancel"}),a.jsx("button",{className:me.submit,style:{backgroundColor:d,opacity:k.trim()?1:.4},onClick:K,disabled:!k.trim(),children:o})]})]})});var uk=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=uk,document.head.appendChild(t))}var Dm={};/**
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
 */const Ny={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const M=function(t,e){if(!t)throw pi(e)},pi=function(t){return new Error("Firebase Database ("+Ny.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Iy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},pf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,m=u&63;c||(m=64,o||(f=64)),r.push(n[h],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new hk;const f=i<<2|l>>4;if(r.push(f),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ey=function(t){const e=Iy(t);return pf.encodeByteArray(e,!0)},Ia=function(t){return Ey(t).replace(/\./g,"")},Ea=function(t){try{return pf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fk(t){return Ty(void 0,t)}function Ty(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pk(n)||(t[n]=Ty(t[n],e[n]));return t}function pk(t){return t!=="__proto__"}/**
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
 */function mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _k=()=>mk().__FIREBASE_DEFAULTS__,gk=()=>{if(typeof process>"u"||typeof Dm>"u")return;const t=Dm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ea(t[1]);return e&&JSON.parse(e)},mf=()=>{try{return _k()||gk()||yk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ry=t=>{var e,n;return(n=(e=mf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jy=t=>{const e=Ry(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Py=()=>{var t;return(t=mf())===null||t===void 0?void 0:t.config},Ay=t=>{var e;return(e=mf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ly(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ia(JSON.stringify(n)),Ia(JSON.stringify(o)),""].join(".")}/**
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
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function vk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Oy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bk(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wk(){return Ny.NODE_ADMIN===!0}function kk(){try{return typeof indexedDB=="object"}catch{return!1}}function Ck(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Sk="FirebaseError";class Zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sk,Object.setPrototypeOf(this,Zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Go.prototype.create)}}class Go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Zn(s,l,r)}}function Nk(t,e){return t.replace(Ik,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ik=/\{\$([^}]+)}/g;/**
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
 */function So(t){return JSON.parse(t)}function Ve(t){return JSON.stringify(t)}/**
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
 */const Dy=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=So(Ea(i[0])||""),n=So(Ea(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Ek=function(t){const e=Dy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tk=function(t){const e=Dy(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Bd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ta(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Mm(i)&&Mm(o)){if(!Ra(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Mm(t){return t!==null&&typeof t=="object"}/**
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
 */function mi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Rk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const f=(s<<5|s>>>27)+u+c+h+r[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function jk(t,e){const n=new Pk(t,e);return n.subscribe.bind(n)}class Pk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ak(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=wu),s.error===void 0&&(s.error=wu),s.complete===void 0&&(s.complete=wu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ak(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wu(){}function yc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Lk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,M(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class Ok{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mk(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dk(t){return t===Hr?void 0:t}function Mk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Uk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ok(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const zk={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Fk=fe.INFO,Bk={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},$k=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gf{constructor(e){this.name=e,this._logLevel=Fk,this._logHandler=$k,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Wk=(t,e)=>e.some(n=>t instanceof n);let Um,zm;function Hk(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return zm||(zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const My=new WeakMap,$d=new WeakMap,Uy=new WeakMap,ku=new WeakMap,yf=new WeakMap;function Yk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&My.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function Qk(t){if($d.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$d.set(t,e)}let Wd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gk(t){Wd=t(Wd)}function Xk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cu(this),e,...n);return Uy.set(r,e.sort?e.sort():[e]),Nr(r)}:Vk().includes(t)?function(...e){return t.apply(Cu(this),e),Nr(My.get(this))}:function(...e){return Nr(t.apply(Cu(this),e))}}function Kk(t){return typeof t=="function"?Xk(t):(t instanceof IDBTransaction&&Qk(t),Wk(t,Hk())?new Proxy(t,Wd):t)}function Nr(t){if(t instanceof IDBRequest)return Yk(t);if(ku.has(t))return ku.get(t);const e=Kk(t);return e!==t&&(ku.set(t,e),yf.set(e,t)),e}const Cu=t=>yf.get(t);function qk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Nr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Nr(o.result),c.oldVersion,c.newVersion,Nr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Jk=["get","getKey","getAll","getAllKeys","count"],Zk=["put","add","delete","clear"],Su=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Su.get(e))return Su.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jk.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Su.set(e,i),i}Gk(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
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
 */class e2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function t2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hd="@firebase/app",Bm="0.10.13";/**
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
 */const Gn=new gf("@firebase/app"),n2="@firebase/app-compat",r2="@firebase/analytics-compat",s2="@firebase/analytics",i2="@firebase/app-check-compat",o2="@firebase/app-check",l2="@firebase/auth",a2="@firebase/auth-compat",c2="@firebase/database",u2="@firebase/data-connect",d2="@firebase/database-compat",h2="@firebase/functions",f2="@firebase/functions-compat",p2="@firebase/installations",m2="@firebase/installations-compat",_2="@firebase/messaging",g2="@firebase/messaging-compat",y2="@firebase/performance",v2="@firebase/performance-compat",x2="@firebase/remote-config",b2="@firebase/remote-config-compat",w2="@firebase/storage",k2="@firebase/storage-compat",C2="@firebase/firestore",S2="@firebase/vertexai-preview",N2="@firebase/firestore-compat",I2="firebase",E2="10.14.1";/**
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
 */const Vd="[DEFAULT]",T2={[Hd]:"fire-core",[n2]:"fire-core-compat",[s2]:"fire-analytics",[r2]:"fire-analytics-compat",[o2]:"fire-app-check",[i2]:"fire-app-check-compat",[l2]:"fire-auth",[a2]:"fire-auth-compat",[c2]:"fire-rtdb",[u2]:"fire-data-connect",[d2]:"fire-rtdb-compat",[h2]:"fire-fn",[f2]:"fire-fn-compat",[p2]:"fire-iid",[m2]:"fire-iid-compat",[_2]:"fire-fcm",[g2]:"fire-fcm-compat",[y2]:"fire-perf",[v2]:"fire-perf-compat",[x2]:"fire-rc",[b2]:"fire-rc-compat",[w2]:"fire-gcs",[k2]:"fire-gcs-compat",[C2]:"fire-fst",[N2]:"fire-fst-compat",[S2]:"fire-vertex","fire-js":"fire-js",[I2]:"fire-js-all"};/**
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
 */const ja=new Map,R2=new Map,Yd=new Map;function $m(t,e){try{t.container.addComponent(e)}catch(n){Gn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Yd.has(e))return Gn.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,t);for(const n of ja.values())$m(n,t);for(const n of R2.values())$m(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mn(t){return t.settings!==void 0}/**
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
 */const j2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new Go("app","Firebase",j2);/**
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
 */class P2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=E2;function zy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=Py()),!n)throw Ir.create("no-options");const i=ja.get(s);if(i){if(Ra(n,i.options)&&Ra(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new Uk(s);for(const c of Yd.values())o.addComponent(c);const l=new P2(n,r,o);return ja.set(s,l),l}function vf(t=Vd){const e=ja.get(t);if(!e&&t===Vd&&Py())return zy();if(!e)throw Ir.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let s=(r=T2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gn.warn(l.join(" "));return}ls(new Ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const A2="firebase-heartbeat-database",L2=1,No="firebase-heartbeat-store";let Nu=null;function Fy(){return Nu||(Nu=qk(A2,L2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),Nu}async function O2(t){try{const n=(await Fy()).transaction(No),r=await n.objectStore(No).get(By(t));return await n.done,r}catch(e){if(e instanceof Zn)Gn.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gn.warn(n.message)}}}async function Wm(t,e){try{const r=(await Fy()).transaction(No,"readwrite");await r.objectStore(No).put(e,By(t)),await r.done}catch(n){if(n instanceof Zn)Gn.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gn.warn(r.message)}}}function By(t){return`${t.name}!${t.options.appId}`}/**
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
 */const D2=1024,M2=30*24*60*60*1e3;class U2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new F2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=M2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Gn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hm(),{heartbeatsToSend:r,unsentEntries:s}=z2(this._heartbeatsCache.heartbeats),i=Ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Gn.warn(n),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function z2(t,e=D2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Vm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class F2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kk()?Ck().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await O2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vm(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function B2(t){ls(new Ar("platform-logger",e=>new e2(e),"PRIVATE")),ls(new Ar("heartbeat",e=>new U2(e),"PRIVATE")),Sn(Hd,Bm,t),Sn(Hd,Bm,"esm2017"),Sn("fire-js","")}B2("");function xf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $2=$y,Wy=new Go("auth","Firebase",$y());/**
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
 */const Pa=new gf("@firebase/auth");function W2(t,...e){Pa.logLevel<=fe.WARN&&Pa.warn(`Auth (${_s}): ${t}`,...e)}function ql(t,...e){Pa.logLevel<=fe.ERROR&&Pa.error(`Auth (${_s}): ${t}`,...e)}/**
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
 */function In(t,...e){throw wf(t,...e)}function fn(t,...e){return wf(t,...e)}function bf(t,e,n){const r=Object.assign(Object.assign({},$2()),{[e]:n});return new Go("auth","Firebase",r).create(e,{appName:t.name})}function es(t){return bf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&In(t,"argument-error"),bf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wy.create(t,...e)}function J(t,e,...n){if(!t)throw wf(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Xn(t,e){t||Un(e)}/**
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
 */function Qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function V2(){return Ym()==="http:"||Ym()==="https:"}function Ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Y2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(V2()||xk()||"connection"in navigator)?navigator.onLine:!0}function Q2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=_f()||Oy()}get(){return Y2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kf(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const G2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const X2=new Xo(3e4,6e4);function Cf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _i(t,e,n,r,s={}){return Vy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=mi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return vk()||(u.referrerPolicy="no-referrer"),Hy.fetch()(Yy(t,t.config.apiHost,n,l),u)})}async function Vy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},G2),e);try{const s=new q2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Rl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Rl(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw bf(t,h,u);In(t,h)}}catch(s){if(s instanceof Zn)throw s;In(t,"network-request-failed",{message:String(s)})}}async function K2(t,e,n,r,s={}){const i=await _i(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Yy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?kf(t.config,s):`${t.config.apiScheme}://${s}`}class q2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),X2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function J2(t,e){return _i(t,"POST","/v1/accounts:delete",e)}async function Qy(t,e){return _i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Z2(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Sf(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ki(Iu(s.auth_time)),issuedAtTime:Ki(Iu(s.iat)),expirationTime:Ki(Iu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Iu(t){return Number(t)*1e3}function Sf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ea(n);return s?JSON.parse(s):(ql("Failed to decode base64 JWT payload"),null)}catch(s){return ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qm(t){const e=Sf(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Zn&&eC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function eC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Io(t,Qy(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Gy(i.providerUserInfo):[],l=rC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Gd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function nC(t){const e=Fe(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Gy(t){return t.map(e=>{var{providerId:n}=e,r=xf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sC(t,e){const n=await Vy(t,{},async()=>{const r=mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Yy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function iC(t,e){return _i(t,"POST","/v2/accounts:revokeToken",Cf(t,e))}/**
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
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Qm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await sC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hs;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function sr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Io(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Z2(this,e)}reload(){return nC(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(es(this.auth));const e=await this.getIdToken();return await Io(this,J2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:b,isAnonymous:E,providerData:x,stsTokenManager:C}=n;J(y&&C,e,"internal-error");const S=Hs.fromJSON(this.name,C);J(typeof y=="string",e,"internal-error"),sr(d,e.name),sr(f,e.name),J(typeof b=="boolean",e,"internal-error"),J(typeof E=="boolean",e,"internal-error"),sr(m,e.name),sr(v,e.name),sr(w,e.name),sr(k,e.name),sr(_,e.name),sr(p,e.name);const P=new zn({uid:y,auth:e,email:f,emailVerified:b,displayName:d,isAnonymous:E,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:S,createdAt:_,lastLoginAt:p});return x&&Array.isArray(x)&&(P.providerData=x.map(N=>Object.assign({},N))),k&&(P._redirectEventId=k),P}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hs;s.updateFromServerResponse(n);const i=new zn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Hs;l.updateFromIdToken(r);const c=new zn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Gm=new Map;function Fn(t){Xn(t instanceof Function,"Expected a class definition");let e=Gm.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gm.set(t,e),e)}/**
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
 */class Xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xy.type="NONE";const Xm=Xy;/**
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
 */function Jl(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Fn(Xm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(Xm);const o=Jl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=zn._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Vs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vs(i,e,r))}}/**
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
 */function Km(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ky(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tv(e))return"Blackberry";if(nv(e))return"Webos";if(qy(e))return"Safari";if((e.includes("chrome/")||Jy(e))&&!e.includes("edge/"))return"Chrome";if(ev(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ky(t=kt()){return/firefox\//i.test(t)}function qy(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jy(t=kt()){return/crios\//i.test(t)}function Zy(t=kt()){return/iemobile/i.test(t)}function ev(t=kt()){return/android/i.test(t)}function tv(t=kt()){return/blackberry/i.test(t)}function nv(t=kt()){return/webos/i.test(t)}function Nf(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oC(t=kt()){var e;return Nf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lC(){return bk()&&document.documentMode===10}function rv(t=kt()){return Nf(t)||ev(t)||nv(t)||tv(t)||/windows phone/i.test(t)||Zy(t)}/**
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
 */function sv(t,e=[]){let n;switch(t){case"Browser":n=Km(kt());break;case"Worker":n=`${Km(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
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
 */class aC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function cC(t,e={}){return _i(t,"GET","/v2/passwordPolicy",Cf(t,e))}/**
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
 */const uC=6;class dC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qm(this),this.idTokenSubscription=new qm(this),this.beforeStateQueue=new aC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qy(this,{idToken:e}),r=await zn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Q2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(es(this));const n=e?Fe(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cC(this),n=new dC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await iC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&W2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bc(t){return Fe(t)}class qm{constructor(e){this.auth=e,this.observer=null,this.addObserver=jk(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let If={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fC(t){If=t}function pC(t){return If.loadJS(t)}function mC(){return If.gapiScript}function _C(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gC(t,e){const n=xc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ra(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function yC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vC(t,e,n){const r=bc(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=iv(e),{host:o,port:l}=xC(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),bC()}function iv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xC(t){const e=iv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jm(o)}}}function Jm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ov{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}/**
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
 */async function Ys(t,e){return K2(t,"POST","/v1/accounts:signInWithIdp",Cf(t,e))}/**
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
 */const wC="http://localhost";class as extends ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new as(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:wC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mi(n)}return e}}/**
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
 */class Ef{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ko extends Ef{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dr extends Ko{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
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
 */class Ln extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.GOOGLE_SIGN_IN_METHOD="google.com";Ln.PROVIDER_ID="google.com";/**
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
 */class hr extends Ko{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class fr extends Ko{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
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
 */class si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zn._fromIdTokenResponse(e,r,s),o=Zm(r);return new si({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zm(r);return new si({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class La extends Zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new La(e,n,r,s)}}function lv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,i,e,r):i})}async function kC(t,e,n=!1){const r=await Io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return si._forOperation(t,"link",r)}/**
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
 */async function CC(t,e,n=!1){const{auth:r}=t;if(Mn(r.app))return Promise.reject(es(r));const s="reauthenticate";try{const i=await Io(t,lv(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Sf(i.idToken);J(o,r,"internal-error");const{sub:l}=o;return J(t.uid===l,r,"user-mismatch"),si._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
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
 */async function SC(t,e,n=!1){if(Mn(t.app))return Promise.reject(es(t));const r="signIn",s=await lv(t,r,e),i=await si._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function NC(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function IC(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function EC(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function TC(t){return Fe(t).signOut()}const Oa="__sak";/**
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
 */class av{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oa,"1"),this.storage.removeItem(Oa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RC=1e3,jC=10;class cv extends av{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cv.type="LOCAL";const PC=cv;/**
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
 */class uv extends av{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uv.type="SESSION";const dv=uv;/**
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
 */function AC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new wc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await AC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wc.receivers=[];/**
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
 */function Tf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class LC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Tf("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Nn(){return window}function OC(t){Nn().location.href=t}/**
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
 */function hv(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function DC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function MC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function UC(){return hv()?self:null}/**
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
 */const fv="firebaseLocalStorageDb",zC=1,Da="firebaseLocalStorage",pv="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kc(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function FC(){const t=indexedDB.deleteDatabase(fv);return new qo(t).toPromise()}function Xd(){const t=indexedDB.open(fv,zC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Da,{keyPath:pv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Da)?e(r):(r.close(),await FC(),e(await Xd()))})})}async function e_(t,e,n){const r=kc(t,!0).put({[pv]:e,value:n});return new qo(r).toPromise()}async function BC(t,e){const n=kc(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function t_(t,e){const n=kc(t,!0).delete(e);return new qo(n).toPromise()}const $C=800,WC=3;class mv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wc._getInstance(UC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DC(),!this.activeServiceWorker)return;this.sender=new LC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||MC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await e_(e,Oa,"1"),await t_(e,Oa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>e_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>BC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>t_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kc(s,!1).getAll();return new qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mv.type="LOCAL";const HC=mv;new Xo(3e4,6e4);/**
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
 */function _v(t,e){return e?Fn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rf extends ov{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function VC(t){return SC(t.auth,new Rf(t),t.bypassAuthState)}function YC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),CC(n,new Rf(t),t.bypassAuthState)}async function QC(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),kC(n,new Rf(t),t.bypassAuthState)}/**
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
 */class gv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return VC;case"linkViaPopup":case"linkViaRedirect":return QC;case"reauthViaPopup":case"reauthViaRedirect":return YC;default:In(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const GC=new Xo(2e3,1e4);async function XC(t,e,n){if(Mn(t.app))return Promise.reject(fn(t,"operation-not-supported-in-this-environment"));const r=bc(t);H2(t,e,Ef);const s=_v(r,n);return new Kr(r,"signInViaPopup",e,s).executeNotNull()}class Kr extends gv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GC.get())};e()}}Kr.currentPopupAction=null;/**
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
 */const KC="pendingRedirect",Zl=new Map;class qC extends gv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zl.get(this.auth._key());if(!e){try{const r=await JC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zl.set(this.auth._key(),e)}return this.bypassAuthState||Zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JC(t,e){const n=tS(e),r=eS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ZC(t,e){Zl.set(t._key(),e)}function eS(t){return Fn(t._redirectPersistence)}function tS(t){return Jl(KC,t.config.apiKey,t.name)}async function nS(t,e,n=!1){if(Mn(t.app))return Promise.reject(es(t));const r=bc(t),s=_v(r,e),o=await new qC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rS=10*60*1e3;class sS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rS&&this.cachedEventUids.clear(),this.cachedEventUids.has(n_(e))}saveEventToCache(e){this.cachedEventUids.add(n_(e)),this.lastProcessedEventTime=Date.now()}}function n_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yv(t);default:return!1}}/**
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
 */async function oS(t,e={}){return _i(t,"GET","/v1/projects",e)}/**
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
 */const lS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aS=/^https?/;async function cS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oS(t);for(const n of e)try{if(uS(n))return}catch{}In(t,"unauthorized-domain")}function uS(t){const e=Qd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aS.test(n))return!1;if(lS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const dS=new Xo(3e4,6e4);function r_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hS(t){return new Promise((e,n)=>{var r,s,i;function o(){r_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{r_(),n(fn(t,"network-request-failed"))},timeout:dS.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const l=_C("iframefcb");return Nn()[l]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},pC(`${mC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw ea=null,e})}let ea=null;function fS(t){return ea=ea||hS(t),ea}/**
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
 */const pS=new Xo(5e3,15e3),mS="__/auth/iframe",_S="emulator/auth/iframe",gS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vS(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kf(e,_S):`https://${t.config.authDomain}/${mS}`,r={apiKey:e.apiKey,appName:t.name,v:_s},s=yS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mi(r).slice(1)}`}async function xS(t){const e=await fS(t),n=Nn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:vS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=Nn().setTimeout(()=>{i(o)},pS.get());function c(){Nn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const bS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wS=500,kS=600,CS="_blank",SS="http://localhost";class s_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NS(t,e,n,r=wS,s=kS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},bS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=kt().toLowerCase();n&&(l=Jy(u)?CS:n),Ky(u)&&(e=e||SS,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(oC(u)&&l!=="_self")return IS(e||"",l),new s_(null);const d=window.open(e||"",l,h);J(d,t,"popup-blocked");try{d.focus()}catch{}return new s_(d)}function IS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ES="__/auth/handler",TS="emulator/auth/handler",RS=encodeURIComponent("fac");async function i_(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:s};if(e instanceof Ef){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Bd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Ko){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${RS}=${encodeURIComponent(c)}`:"";return`${jS(t)}?${mi(l).slice(1)}${u}`}function jS({config:t}){return t.emulator?kf(t,TS):`https://${t.authDomain}/${ES}`}/**
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
 */const Eu="webStorageSupport";class PS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dv,this._completeRedirectFn=nS,this._overrideRedirectResult=ZC}async _openPopup(e,n,r,s){var i;Xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await i_(e,n,r,Qd(),s);return NS(e,o,Tf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await i_(e,n,r,Qd(),s);return OC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xS(e),r=new sS(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Eu,{type:Eu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Eu];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rv()||qy()||Nf()}}const AS=PS;var o_="@firebase/auth",l_="1.7.9";/**
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
 */class LS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DS(t){ls(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sv(t)},u=new hC(r,s,i,c);return yC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new Ar("auth-internal",e=>{const n=bc(e.getProvider("auth").getImmediate());return(r=>new LS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(o_,l_,OS(t)),Sn(o_,l_,"esm2017")}/**
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
 */const MS=5*60,US=Ay("authIdTokenMaxAge")||MS;let a_=null;const zS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>US)return;const s=n==null?void 0:n.token;a_!==s&&(a_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function FS(t=vf()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gC(t,{popupRedirectResolver:AS,persistence:[HC,PC,dv]}),r=Ay("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zS(i.toString());IC(n,o,()=>o(n.currentUser)),NC(n,l=>o(l))}}const s=Ry("auth");return s&&vC(n,`http://${s}`),n}function BS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}fC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DS("Browser");var c_={};const u_="@firebase/database",d_="1.0.8";/**
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
 */let vv="";function $S(t){vv=t}/**
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
 */class WS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:So(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class HS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Tn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new WS(e)}}catch{}return new HS},qr=xv("localStorage"),VS=xv("sessionStorage");/**
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
 */const Qs=new gf("@firebase/database"),YS=function(){let t=1;return function(){return t++}}(),bv=function(t){const e=Lk(t),n=new Rk;n.update(e);const r=n.digest();return pf.encodeByteArray(r)},Jo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Jo.apply(null,r):typeof r=="object"?e+=Ve(r):e+=r,e+=" "}return e};let qi=null,h_=!0;const QS=function(t,e){M(!0,"Can't turn on custom loggers persistently."),Qs.logLevel=fe.VERBOSE,qi=Qs.log.bind(Qs)},rt=function(...t){if(h_===!0&&(h_=!1,qi===null&&VS.get("logging_enabled")===!0&&QS()),qi){const e=Jo.apply(null,t);qi(e)}},Zo=function(t){return function(...e){rt(t,...e)}},Kd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jo(...t);Qs.error(e)},Kn=function(...t){const e=`FIREBASE FATAL ERROR: ${Jo(...t)}`;throw Qs.error(e),new Error(e)},bt=function(...t){const e="FIREBASE WARNING: "+Jo(...t);Qs.warn(e)},GS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ii="[MIN_NAME]",cs="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===ii||e===cs)return-1;if(e===ii||t===cs)return 1;{const n=f_(t),r=f_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},KS=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ve(e))},Pf=function(t){if(typeof t!="object"||t===null)return Ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ve(e[r]),n+=":",n+=Pf(t[e[r]]);return n+="}",n},wv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function ot(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kv=function(t){M(!jf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let f=parseInt(h.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},qS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},JS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ZS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const eN=new RegExp("^-?(0*)\\d{1,10}$"),tN=-2147483648,nN=2147483647,f_=function(t){if(eN.test(t)){const e=Number(t);if(e>=tN&&e<=nN)return e}return null},gi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},rN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ji=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class sN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class iN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(rt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class ta{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ta.OWNER="owner";/**
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
 */const Af="5",Cv="v",Sv="s",Nv="r",Iv="f",Ev=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Tv="ls",Rv="p",qd="ac",jv="websocket",Pv="long_polling";/**
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
 */class Av{constructor(e,n,r,s,i=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lv(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let r;if(e===jv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(t)&&(n.ns=t.namespace);const s=[];return ot(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class lN{constructor(){this.counters_={}}incrementCounter(e,n=1){Tn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fk(this.counters_)}}/**
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
 */const Tu={},Ru={};function Lf(t){const e=t.toString();return Tu[e]||(Tu[e]=new lN),Tu[e]}function aN(t,e){const n=t.toString();return Ru[n]||(Ru[n]=e()),Ru[n]}/**
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
 */class cN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&gi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const p_="start",uN="close",dN="pLPCommand",hN="pRTLPCB",Ov="id",Dv="pw",Mv="ser",fN="cb",pN="seg",mN="ts",_N="d",gN="dframe",Uv=1870,zv=30,yN=Uv-zv,vN=25e3,xN=3e4;class Ms{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zo(e),this.stats_=Lf(n),this.urlFn=c=>(this.appCheckToken&&(c[qd]=this.appCheckToken),Lv(n,Pv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xN)),XS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Of((...i)=>{const[o,l,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===p_)this.id=l,this.password=c;else if(o===uN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[p_]="t",r[Mv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[fN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Cv]=Af,this.transportSessionId&&(r[Sv]=this.transportSessionId),this.lastSessionId&&(r[Tv]=this.lastSessionId),this.applicationId&&(r[Rv]=this.applicationId),this.appCheckToken&&(r[qd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(r[Nv]=Iv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ms.forceAllow_=!0}static forceDisallow(){Ms.forceDisallow_=!0}static isAvailable(){return Ms.forceAllow_?!0:!Ms.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qS()&&!JS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ey(n),s=wv(r,yN);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[gN]="t",r[Ov]=e,r[Dv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Of{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YS(),window[dN+this.uniqueCallbackIdentifier]=e,window[hN+this.uniqueCallbackIdentifier]=n,this.myIFrame=Of.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){rt("frame writing exception"),l.stack&&rt(l.stack),rt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||rt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ov]=this.myID,e[Dv]=this.myPW,e[Mv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zv+r.length<=Uv;){const o=this.pendingSegs.shift();r=r+"&"+pN+s+"="+o.seg+"&"+mN+s+"="+o.ts+"&"+_N+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(vN)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{rt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bN=16384,wN=45e3;let Ma=null;typeof MozWebSocket<"u"?Ma=MozWebSocket:typeof WebSocket<"u"&&(Ma=WebSocket);class cn{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zo(this.connId),this.stats_=Lf(n),this.connURL=cn.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[Cv]=Af,typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(o[Nv]=Iv),n&&(o[Sv]=n),r&&(o[Tv]=r),s&&(o[qd]=s),i&&(o[Rv]=i),Lv(e,jv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qr.set("previous_websocket_failure",!0);try{let r;wk(),this.mySock=new Ma(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ma!==null&&!cn.forceDisallow_}static previouslyFailed(){return qr.isInMemoryStorage||qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=So(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wv(n,bN);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cn.responsesRequiredToBeHealthy=2;cn.healthyTimeout=3e4;/**
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
 */class Eo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ms,cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=cn&&cn.isAvailable();let r=n&&!cn.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cn];else{const s=this.transports_=[];for(const i of Eo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Eo.globalTransportInitialized_=!1;/**
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
 */const kN=6e4,CN=5e3,SN=10*1024,NN=100*1024,ju="t",m_="d",IN="s",__="r",EN="e",g_="o",y_="a",v_="n",x_="p",TN="h";class RN{constructor(e,n,r,s,i,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zo("c:"+this.id+":"),this.transportManager_=new Eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ji(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ju in e){const n=e[ju];n===y_?this.upgradeIfSecondaryHealthy_():n===__?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===g_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:x_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:y_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:v_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),r=Pi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(ju,e);if(m_ in e){const r=e[m_];if(n===TN){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===v_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===IN?this.onConnectionShutdown_(r):n===__?this.onReset_(r):n===EN?Kd("Server Error: "+r):n===g_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Af!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ji(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ji(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:x_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Fv{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Bv{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ua extends Bv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_f()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ua}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const b_=32,w_=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ue(){return new pe("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Lr(t){return t.pieces_.length-t.pieceNum_}function ge(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Df(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function jN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function To(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $v(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function je(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof pe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new pe(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function vt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return vt(ge(t),ge(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function PN(t,e){const n=To(t,0),r=To(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=gs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Mf(t,e){if(Lr(t)!==Lr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Kt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Lr(t)>Lr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class AN{constructor(e,n){this.errorPrefix_=n,this.parts_=To(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=vc(this.parts_[r]);Wv(this)}}function LN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=vc(e),Wv(t)}function ON(t){const e=t.parts_.pop();t.byteLength_-=vc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wv(t){if(t.byteLength_>w_)throw new Error(t.errorPrefix_+"has a key path longer than "+w_+" bytes ("+t.byteLength_+").");if(t.parts_.length>b_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+b_+") or object contains a cycle "+Vr(t))}function Vr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Uf extends Bv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Uf}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ai=1e3,DN=60*5*1e3,k_=30*1e3,MN=1.3,UN=3e4,zN="server_kill",C_=3;class Wn extends Fv{constructor(e,n,r,s,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Wn.nextPersistentConnectionId_++,this.log_=Zo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ai,this.maxReconnectDelay_=DN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ua.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Ve(i)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Qo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Wn.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Tn(e,"w")){const r=ri(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=k_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ek(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kd("Unrecognized action received from server: "+Ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=Ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*MN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Wn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,r())},u=function(d){M(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?rt("getToken() completed but was canceled"):(rt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new RN(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{bt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(zN)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&bt(d),c())}}}interrupt(e){rt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){rt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bd(this.interruptReasons_)&&(this.reconnectDelay_=Ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Pf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new pe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){rt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=C_&&(this.reconnectDelay_=k_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){rt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=C_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vv.replace(/\./g,"-")]=1,_f()?e["framework.cordova"]=1:Oy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ua.getInstance().currentlyOnline();return Bd(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0;Wn.nextConnectionId_=0;/**
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
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
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
 */class Cc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(ii,e),s=new ie(ii,n);return this.compare(r,s)!==0}minPost(){return ie.MIN}}/**
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
 */let jl;class Hv extends Cc{static get __EMPTY_NODE(){return jl}static set __EMPTY_NODE(e){jl=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw pi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(cs,jl)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,jl)}toString(){return".key"}}const Gs=new Hv;/**
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
 */class Pl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??jt.EMPTY_NODE,this.right=i??jt.EMPTY_NODE}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return jt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return jt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class FN{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class jt{constructor(e,n=jt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new jt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new jt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Pl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Pl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Pl(this.root_,null,this.comparator_,!0,e)}}jt.EMPTY_NODE=new FN;/**
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
 */function BN(t,e){return gs(t.name,e.name)}function zf(t,e){return gs(t,e)}/**
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
 */let Jd;function $N(t){Jd=t}const Vv=function(t){return typeof t=="number"?"number:"+kv(t):"string:"+t},Yv=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tn(e,".sv"),"Priority must be a string or number.")}else M(t===Jd||t.isEmpty(),"priority of unexpected type.");M(t===Jd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let S_;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yv(this.priorityNode_)}static set __childrenNodeConstructor(e){S_=e}static get __childrenNodeConstructor(){return S_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:se(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(M(r!==".priority"||Lr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(ge(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Vv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kv(this.value_):e+=this.value_,this.lazyHash_=bv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ge.VALUE_TYPE_ORDER.indexOf(n),i=Ge.VALUE_TYPE_ORDER.indexOf(r);return M(s>=0,"Unknown leaf type: "+n),M(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Qv,Gv;function WN(t){Qv=t}function HN(t){Gv=t}class VN extends Cc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?gs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(cs,new Ge("[PRIORITY-POST]",Gv))}makePost(e,n){const r=Qv(e);return new ie(n,new Ge("[PRIORITY-POST]",r))}toString(){return".priority"}}const Pe=new VN;/**
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
 */const YN=Math.log(2);class QN{constructor(e){const n=i=>parseInt(Math.log(i)/YN,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const za=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let d,f;if(h===0)return null;if(h===1)return d=t[c],f=n?n(d):d,new Ke(f,d.node,Ke.BLACK,null,null);{const m=parseInt(h/2,10)+c,v=s(c,m),w=s(m+1,u);return d=t[m],f=n?n(d):d,new Ke(f,d.node,Ke.BLACK,v,w)}},i=function(c){let u=null,h=null,d=t.length;const f=function(v,w){const k=d-v,_=d;d-=v;const p=s(k+1,_),y=t[k],b=n?n(y):y;m(new Ke(b,y.node,w,null,p))},m=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<c.count;++v){const w=c.nextBitIsOne(),k=Math.pow(2,c.count-(v+1));w?f(k,Ke.BLACK):(f(k,Ke.BLACK),f(k,Ke.RED))}return h},o=new QN(t.length),l=i(o);return new jt(r||e,l)};/**
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
 */let Pu;const ws={};class Bn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return M(ws&&Pe,"ChildrenNode.ts has not been loaded"),Pu=Pu||new Bn({".priority":ws},{".priority":Pe}),Pu}get(e){const n=ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof jt?n:null}hasIndex(e){return Tn(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Gs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ie.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=za(r,e.getCompare()):l=ws;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new Bn(h,u)}addToIndexes(e,n){const r=Ta(this.indexes_,(s,i)=>{const o=ri(this.indexSet_,i);if(M(o,"Missing index implementation for "+i),s===ws)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(ie.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),za(l,o.getCompare())}else return ws;else{const l=n.get(e.name);let c=s;return l&&(c=c.remove(new ie(e.name,l))),c.insert(e,e.node)}});return new Bn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ta(this.indexes_,s=>{if(s===ws)return s;{const i=n.get(e.name);return i?s.remove(new ie(e.name,i)):s}});return new Bn(r,this.indexSet_)}}/**
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
 */let Li;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yv(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Li||(Li=new G(new jt(zf),null,Bn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Li}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Li:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(ge(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Li:this.priorityNode_;return new G(s,o,i)}}updateChild(e,n){const r=se(e);if(r===null)return n;{M(se(e)!==".priority"||Lr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ge(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Pe,(o,l)=>{n[o]=l.val(e),r++,i&&G.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Vv(this.getPriority().val())+":"),this.forEachChild(Pe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":bv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ie(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ie.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===el?-1:0}withIndex(e){if(e===Gs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Gs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Pe),s=n.getIterator(Pe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Gs?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GN extends G{constructor(){super(new jt(zf),G.EMPTY_NODE,Bn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const el=new GN;Object.defineProperties(ie,{MIN:{value:new ie(ii,G.EMPTY_NODE)},MAX:{value:new ie(cs,el)}});Hv.__EMPTY_NODE=G.EMPTY_NODE;Ge.__childrenNodeConstructor=G;$N(el);HN(el);/**
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
 */const XN=!0;function He(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,He(e))}if(!(t instanceof Array)&&XN){const n=[];let r=!1;if(ot(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=He(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new ie(o,c)))}}),n.length===0)return G.EMPTY_NODE;const i=za(n,BN,o=>o.name,zf);if(r){const o=za(n,Pe.getCompare());return new G(i,He(e),new Bn({".priority":o},{".priority":Pe}))}else return new G(i,He(e),Bn.Default)}else{let n=G.EMPTY_NODE;return ot(t,(r,s)=>{if(Tn(t,r)&&r.substring(0,1)!=="."){const i=He(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(He(e))}}WN(He);/**
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
 */class KN extends Cc{constructor(e){super(),this.indexPath_=e,M(!oe(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?gs(e.name,n.name):i}makePost(e,n){const r=He(e),s=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,s)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,el);return new ie(cs,e)}toString(){return To(this.indexPath_,0).join("/")}}/**
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
 */class qN extends Cc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=He(e);return new ie(n,r)}toString(){return".value"}}const JN=new qN;/**
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
 */function Xv(t){return{type:"value",snapshotNode:t}}function oi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ro(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function jo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ff{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ro(n,l)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(oi(n,r)):o.trackChildChange(jo(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Pe,(s,i)=>{n.hasChild(s)||r.trackChildChange(Ro(s,i))}),n.isLeafNode()||n.forEachChild(Pe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(jo(s,i,o))}else r.trackChildChange(oi(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Po{constructor(e){this.indexedFilter_=new Ff(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Po.getStartPost_(e),this.endPost_=Po.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ie(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(G.EMPTY_NODE);const i=this;return n.forEachChild(Pe,(o,l)=>{i.matches(new ie(o,l))||(s=s.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class eI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ie(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=G.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(G.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const l=e;M(l.numChildren()===this.limit_,"");const c=new ie(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,c);if(h&&!r.isEmpty()&&m>=0)return i!=null&&i.trackChildChange(jo(n,r,d)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Ro(n,d));const w=l.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(oi(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(Ro(u.name,u.node)),i.trackChildChange(oi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
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
 */class Bf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ii}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new Bf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tI(t){return t.loadsAllData()?new Ff(t.getIndex()):t.hasLimit()?new eI(t):new Po(t)}function N_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===JN?n="$value":t.index_===Gs?n="$key":(M(t.index_ instanceof KN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function I_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
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
 */class Fa extends Fv{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Zo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Fa.getListenId_(e,r),l={};this.listens_[o]=l;const c=N_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),ri(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=Fa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=N_(e._queryParams),r=e._path.toString(),s=new Qo;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=So(l.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class nI{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ba(){return{value:null,children:new Map}}function Kv(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Ba());const s=t.children.get(r);e=ge(e),Kv(s,e,n)}}function Zd(t,e,n){t.value!==null?n(e,t.value):rI(t,(r,s)=>{const i=new pe(e.toString()+"/"+r);Zd(s,i,n)})}function rI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class sI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ot(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const E_=10*1e3,iI=30*1e3,oI=5*60*1e3;class lI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new sI(e);const r=E_+(iI-E_)*Math.random();Ji(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ot(e,(s,i)=>{i>0&&Tn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ji(this.reportStats_.bind(this),Math.floor(Math.random()*2*oI))}}/**
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
 */var un;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(un||(un={}));function $f(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $a{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=un.ACK_USER_WRITE,this.source=$f()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new $a(ue(),n,this.revert)}}else return M(se(this.path)===e,"operationForChild called for unrelated child."),new $a(ge(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ao{constructor(e,n){this.source=e,this.path=n,this.type=un.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Ao(this.source,ue()):new Ao(this.source,ge(this.path))}}/**
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
 */class us{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=un.OVERWRITE}operationForChild(e){return oe(this.path)?new us(this.source,ue(),this.snap.getImmediateChild(e)):new us(this.source,ge(this.path),this.snap)}}/**
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
 */class li{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=un.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new us(this.source,ue(),n.value):new li(this.source,ue(),n)}else return M(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new li(this.source,ge(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Or{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class aI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cI(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(ZN(o.childName,o.snapshotNode))}),Oi(t,s,"child_removed",e,r,n),Oi(t,s,"child_added",e,r,n),Oi(t,s,"child_moved",i,r,n),Oi(t,s,"child_changed",e,r,n),Oi(t,s,"value",e,r,n),s}function Oi(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,c)=>dI(t,l,c)),o.forEach(l=>{const c=uI(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function uI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function dI(t,e,n){if(e.childName==null||n.childName==null)throw pi("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),s=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Sc(t,e){return{eventCache:t,serverCache:e}}function Zi(t,e,n,r){return Sc(new Or(e,n,r),t.serverCache)}function qv(t,e,n,r){return Sc(t.eventCache,new Or(e,n,r))}function Wa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ds(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Au;const hI=()=>(Au||(Au=new jt(KS)),Au);class _e{constructor(e,n=hI()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return ot(e,(r,s)=>{n=n.set(new pe(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ue(),value:this.value};if(oe(e))return null;{const r=se(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ge(e),n);return i!=null?{path:je(new pe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(ge(e)):new _e(null)}}set(e,n){if(oe(e))return new _e(n,this.children);{const r=se(e),i=(this.children.get(r)||new _e(null)).set(ge(e),n),o=this.children.insert(r,i);return new _e(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const s=r.remove(ge(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new _e(null):new _e(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(ge(e)):null}}setTree(e,n){if(oe(e))return n;{const r=se(e),i=(this.children.get(r)||new _e(null)).setTree(ge(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new _e(this.value,o)}}fold(e){return this.fold_(ue(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(je(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ue(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=se(e),o=this.children.get(i);return o?o.findOnPath_(ge(e),je(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ue(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=se(e),i=this.children.get(s);return i?i.foreachOnPath_(ge(e),je(n,s),r):new _e(null)}}foreach(e){this.foreach_(ue(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(je(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class pn{constructor(e){this.writeTree_=e}static empty(){return new pn(new _e(null))}}function eo(t,e,n){if(oe(e))return new pn(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=vt(s,e);return i=i.updateChild(o,n),new pn(t.writeTree_.set(s,i))}else{const s=new _e(n),i=t.writeTree_.setTree(e,s);return new pn(i)}}}function eh(t,e,n){let r=t;return ot(n,(s,i)=>{r=eo(r,je(e,s),i)}),r}function T_(t,e){if(oe(e))return pn.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new pn(n)}}function th(t,e){return ys(t,e)!=null}function ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function R_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(r,s)=>{e.push(new ie(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ie(r,s.value))}),e}function Er(t,e){if(oe(e))return t;{const n=ys(t,e);return n!=null?new pn(new _e(n)):new pn(t.writeTree_.subtree(e))}}function nh(t){return t.writeTree_.isEmpty()}function ai(t,e){return Jv(ue(),t.writeTree_,e)}function Jv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(M(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Jv(je(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(je(t,".priority"),r)),n}}/**
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
 */function Nc(t,e){return nx(e,t)}function fI(t,e,n,r,s){M(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=eo(t.visibleWrites,e,n)),t.lastWriteId=r}function pI(t,e,n,r){M(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=eh(t.visibleWrites,e,n),t.lastWriteId=r}function mI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function _I(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&gI(l,r.path)?s=!1:Kt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return yI(t),!0;if(r.snap)t.visibleWrites=T_(t.visibleWrites,r.path);else{const l=r.children;ot(l,c=>{t.visibleWrites=T_(t.visibleWrites,je(r.path,c))})}return!0}else return!1}function gI(t,e){if(t.snap)return Kt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Kt(je(t.path,n),e))return!0;return!1}function yI(t){t.visibleWrites=Zv(t.allWrites,vI,ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function vI(t){return t.visible}function Zv(t,e,n){let r=pn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Kt(n,o)?(l=vt(n,o),r=eo(r,l,i.snap)):Kt(o,n)&&(l=vt(o,n),r=eo(r,ue(),i.snap.getChild(l)));else if(i.children){if(Kt(n,o))l=vt(n,o),r=eh(r,l,i.children);else if(Kt(o,n))if(l=vt(o,n),oe(l))r=eh(r,ue(),i.children);else{const c=ri(i.children,se(l));if(c){const u=c.getChild(ge(l));r=eo(r,ue(),u)}}}else throw pi("WriteRecord should have .snap or .children")}}return r}function ex(t,e,n,r,s){if(!r&&!s){const i=ys(t.visibleWrites,e);if(i!=null)return i;{const o=Er(t.visibleWrites,e);if(nh(o))return n;if(n==null&&!th(o,ue()))return null;{const l=n||G.EMPTY_NODE;return ai(o,l)}}}else{const i=Er(t.visibleWrites,e);if(!s&&nh(i))return n;if(!s&&n==null&&!th(i,ue()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Kt(u.path,e)||Kt(e,u.path))},l=Zv(t.allWrites,o,e),c=n||G.EMPTY_NODE;return ai(l,c)}}}function xI(t,e,n){let r=G.EMPTY_NODE;const s=ys(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Pe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Er(t.visibleWrites,e);return n.forEachChild(Pe,(o,l)=>{const c=ai(Er(i,new pe(o)),l);r=r.updateImmediateChild(o,c)}),R_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Er(t.visibleWrites,e);return R_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bI(t,e,n,r,s){M(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=je(e,n);if(th(t.visibleWrites,i))return null;{const o=Er(t.visibleWrites,i);return nh(o)?s.getChild(n):ai(o,s.getChild(n))}}function wI(t,e,n,r){const s=je(e,n),i=ys(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Er(t.visibleWrites,s);return ai(o,r.getNode().getImmediateChild(n))}else return null}function kI(t,e){return ys(t.visibleWrites,e)}function CI(t,e,n,r,s,i,o){let l;const c=Er(t.visibleWrites,e),u=ys(c,ue());if(u!=null)l=u;else if(n!=null)l=ai(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=f.getNext();for(;m&&h.length<s;)d(m,r)!==0&&h.push(m),m=f.getNext();return h}else return[]}function SI(){return{visibleWrites:pn.empty(),allWrites:[],lastWriteId:-1}}function Ha(t,e,n,r){return ex(t.writeTree,t.treePath,e,n,r)}function Vf(t,e){return xI(t.writeTree,t.treePath,e)}function j_(t,e,n,r){return bI(t.writeTree,t.treePath,e,n,r)}function Va(t,e){return kI(t.writeTree,je(t.treePath,e))}function NI(t,e,n,r,s,i){return CI(t.writeTree,t.treePath,e,n,r,s,i)}function Yf(t,e,n){return wI(t.writeTree,t.treePath,e,n)}function tx(t,e){return nx(je(t.treePath,e),t.writeTree)}function nx(t,e){return{treePath:t,writeTree:e}}/**
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
 */class II{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,jo(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Ro(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,oi(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,jo(r,e.snapshotNode,s.oldSnap));else throw pi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class EI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const rx=new EI;class Qf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ds(this.viewCache_),i=NI(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function TI(t){return{filter:t}}function RI(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function jI(t,e,n,r,s){const i=new II;let o,l;if(n.type===un.OVERWRITE){const u=n;u.source.fromUser?o=rh(t,e,u.path,u.snap,r,s,i):(M(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!oe(u.path),o=Ya(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===un.MERGE){const u=n;u.source.fromUser?o=AI(t,e,u.path,u.children,r,s,i):(M(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=sh(t,e,u.path,u.children,r,s,l,i))}else if(n.type===un.ACK_USER_WRITE){const u=n;u.revert?o=DI(t,e,u.path,r,s,i):o=LI(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===un.LISTEN_COMPLETE)o=OI(t,e,n.path,r,i);else throw pi("Unknown operation type: "+n.type);const c=i.getChanges();return PI(e,o,c),{viewCache:o,changes:c}}function PI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Wa(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Xv(Wa(e)))}}function sx(t,e,n,r,s,i){const o=e.eventCache;if(Va(r,n)!=null)return e;{let l,c;if(oe(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ds(e),h=u instanceof G?u:G.EMPTY_NODE,d=Vf(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Ha(r,ds(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=se(n);if(u===".priority"){M(Lr(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=j_(r,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=ge(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const f=j_(r,n,o.getNode(),c);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Yf(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,s,i):l=o.getNode()}}return Zi(e,l,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Ya(t,e,n,r,s,i,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(oe(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),m,null)}else{const m=se(n);if(!c.isCompleteForPath(n)&&Lr(n)>1)return e;const v=ge(n),k=c.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=h.updatePriority(c.getNode(),k):u=h.updateChild(c.getNode(),m,k,v,rx,null)}const d=qv(e,u,c.isFullyInitialized()||oe(n),h.filtersNodes()),f=new Qf(s,d,i);return sx(t,d,n,s,f,l)}function rh(t,e,n,r,s,i,o){const l=e.eventCache;let c,u;const h=new Qf(s,e,i);if(oe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Zi(e,u,!0,t.filter.filtersNodes());else{const d=se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=Zi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=ge(n),m=l.getNode().getImmediateChild(d);let v;if(oe(f))v=r;else{const w=h.getCompleteChild(d);w!=null?Df(f)===".priority"&&w.getChild($v(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=G.EMPTY_NODE}if(m.equals(v))c=e;else{const w=t.filter.updateChild(l.getNode(),d,v,f,h,o);c=Zi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function P_(t,e){return t.eventCache.isCompleteForChild(e)}function AI(t,e,n,r,s,i,o){let l=e;return r.foreach((c,u)=>{const h=je(n,c);P_(e,se(h))&&(l=rh(t,l,h,u,s,i,o))}),r.foreach((c,u)=>{const h=je(n,c);P_(e,se(h))||(l=rh(t,l,h,u,s,i,o))}),l}function A_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function sh(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;oe(n)?u=r:u=new _e(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=A_(t,m,f);c=Ya(t,c,new pe(d),v,s,i,o,l)}}),u.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),w=A_(t,v,f);c=Ya(t,c,new pe(d),w,s,i,o,l)}}),c}function LI(t,e,n,r,s,i,o){if(Va(s,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(oe(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ya(t,e,n,c.getNode().getChild(n),s,i,l,o);if(oe(n)){let u=new _e(null);return c.getNode().forEachChild(Gs,(h,d)=>{u=u.set(new pe(h),d)}),sh(t,e,n,u,s,i,l,o)}else return e}else{let u=new _e(null);return r.foreach((h,d)=>{const f=je(n,h);c.isCompleteForPath(f)&&(u=u.set(h,c.getNode().getChild(f)))}),sh(t,e,n,u,s,i,l,o)}}function OI(t,e,n,r,s){const i=e.serverCache,o=qv(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return sx(t,o,n,r,rx,s)}function DI(t,e,n,r,s,i){let o;if(Va(r,n)!=null)return e;{const l=new Qf(r,e,s),c=e.eventCache.getNode();let u;if(oe(n)||se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ha(r,ds(e));else{const d=e.serverCache.getNode();M(d instanceof G,"serverChildren would be complete if leaf node"),h=Vf(r,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=se(n);let d=Yf(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,ge(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,G.EMPTY_NODE,ge(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ha(r,ds(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Va(r,ue())!=null,Zi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class MI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ff(r.getIndex()),i=tI(r);this.processor_=TI(i);const o=n.serverCache,l=n.eventCache,c=s.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(G.EMPTY_NODE,l.getNode(),null),h=new Or(c,o.isFullyInitialized(),s.filtersNodes()),d=new Or(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Sc(d,h),this.eventGenerator_=new aI(this.query_)}get query(){return this.query_}}function UI(t){return t.viewCache_.serverCache.getNode()}function zI(t){return Wa(t.viewCache_)}function FI(t,e){const n=ds(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function L_(t){return t.eventRegistrations_.length===0}function BI(t,e){t.eventRegistrations_.push(e)}function O_(t,e,n){const r=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function D_(t,e,n,r){e.type===un.MERGE&&e.source.queryId!==null&&(M(ds(t.viewCache_),"We should always have a full cache before handling merges"),M(Wa(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=jI(t.processor_,s,e,n,r);return RI(t.processor_,i.viewCache),M(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,ix(t,i.changes,i.viewCache.eventCache.getNode(),null)}function $I(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(i,o)=>{r.push(oi(i,o))}),n.isFullyInitialized()&&r.push(Xv(n.getNode())),ix(t,r,n.getNode(),e)}function ix(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return cI(t.eventGenerator_,e,n,s)}/**
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
 */let Qa;class ox{constructor(){this.views=new Map}}function WI(t){M(!Qa,"__referenceConstructor has already been defined"),Qa=t}function HI(){return M(Qa,"Reference.ts has not been loaded"),Qa}function VI(t){return t.views.size===0}function Gf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return M(i!=null,"SyncTree gave us an op for an invalid query."),D_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(D_(o,e,n,r));return i}}function lx(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Ha(n,s?r:null),c=!1;l?c=!0:r instanceof G?(l=Vf(n,r),c=!1):(l=G.EMPTY_NODE,c=!1);const u=Sc(new Or(l,c,!1),new Or(r,s,!1));return new MI(e,u)}return o}function YI(t,e,n,r,s,i){const o=lx(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),BI(o,n),$I(o,n)}function QI(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Dr(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(O_(u,n,r)),L_(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(O_(c,n,r)),L_(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return l&&!Dr(t)&&i.push(new(HI())(e._repo,e._path)),{removed:i,events:o}}function ax(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Tr(t,e){let n=null;for(const r of t.views.values())n=n||FI(r,e);return n}function cx(t,e){if(e._queryParams.loadsAllData())return Ic(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ux(t,e){return cx(t,e)!=null}function Dr(t){return Ic(t)!=null}function Ic(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ga;function GI(t){M(!Ga,"__referenceConstructor has already been defined"),Ga=t}function XI(){return M(Ga,"Reference.ts has not been loaded"),Ga}let KI=1;class M_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=SI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dx(t,e,n,r,s){return fI(t.pendingWriteTree_,e,n,r,s),s?yi(t,new us($f(),e,n)):[]}function qI(t,e,n,r){pI(t.pendingWriteTree_,e,n,r);const s=_e.fromObject(n);return yi(t,new li($f(),e,s))}function gr(t,e,n=!1){const r=mI(t.pendingWriteTree_,e);if(_I(t.pendingWriteTree_,e)){let i=new _e(null);return r.snap!=null?i=i.set(ue(),!0):ot(r.children,o=>{i=i.set(new pe(o),!0)}),yi(t,new $a(r.path,i,n))}else return[]}function tl(t,e,n){return yi(t,new us(Wf(),e,n))}function JI(t,e,n){const r=_e.fromObject(n);return yi(t,new li(Wf(),e,r))}function ZI(t,e){return yi(t,new Ao(Wf(),e))}function e5(t,e,n){const r=Kf(t,n);if(r){const s=qf(r),i=s.path,o=s.queryId,l=vt(i,e),c=new Ao(Hf(o),l);return Jf(t,i,c)}else return[]}function Xa(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||ux(o,e))){const c=QI(o,e,n,r);VI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(l=c.events,!s){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,m)=>Dr(m));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const m=r5(f);for(let v=0;v<m.length;++v){const w=m[v],k=w.query,_=mx(t,w);t.listenProvider_.startListening(to(k),Lo(t,k),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(to(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Ec(f));t.listenProvider_.stopListening(to(f),m)}))}s5(t,u)}return l}function hx(t,e,n,r){const s=Kf(t,r);if(s!=null){const i=qf(s),o=i.path,l=i.queryId,c=vt(o,e),u=new us(Hf(l),c,n);return Jf(t,o,u)}else return[]}function t5(t,e,n,r){const s=Kf(t,r);if(s){const i=qf(s),o=i.path,l=i.queryId,c=vt(o,e),u=_e.fromObject(n),h=new li(Hf(l),c,u);return Jf(t,o,h)}else return[]}function ih(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,m)=>{const v=vt(f,s);i=i||Tr(m,v),o=o||Dr(m)});let l=t.syncPointTree_.get(s);l?(o=o||Dr(l),i=i||Tr(l,ue())):(l=new ox,t.syncPointTree_=t.syncPointTree_.set(s,l));let c;i!=null?c=!0:(c=!1,i=G.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((m,v)=>{const w=Tr(v,ue());w&&(i=i.updateImmediateChild(m,w))}));const u=ux(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ec(e);M(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=i5();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const h=Nc(t.pendingWriteTree_,s);let d=YI(l,e,n,h,i,c);if(!u&&!o&&!r){const f=cx(l,e);d=d.concat(o5(t,e,f))}return d}function Xf(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=vt(o,e),u=Tr(l,c);if(u)return u});return ex(s,e,i,n,!0)}function n5(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const d=vt(u,n);r=r||Tr(h,d)});let s=t.syncPointTree_.get(n);s?r=r||Tr(s,ue()):(s=new ox,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Or(r,!0,!1):null,l=Nc(t.pendingWriteTree_,e._path),c=lx(s,e,l,i?o.getNode():G.EMPTY_NODE,i);return zI(c)}function yi(t,e){return fx(e,t.syncPointTree_,null,Nc(t.pendingWriteTree_,ue()))}function fx(t,e,n,r){if(oe(t.path))return px(t,e,n,r);{const s=e.get(ue());n==null&&s!=null&&(n=Tr(s,ue()));let i=[];const o=se(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=tx(r,o);i=i.concat(fx(l,c,u,h))}return s&&(i=i.concat(Gf(s,t,r,n))),i}}function px(t,e,n,r){const s=e.get(ue());n==null&&s!=null&&(n=Tr(s,ue()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=tx(r,o),h=t.operationForChild(o);h&&(i=i.concat(px(h,l,c,u)))}),s&&(i=i.concat(Gf(s,t,r,n))),i}function mx(t,e){const n=e.query,r=Lo(t,n);return{hashFn:()=>(UI(e)||G.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?e5(t,n._path,r):ZI(t,n._path);{const i=ZS(s,n);return Xa(t,n,null,i)}}}}function Lo(t,e){const n=Ec(e);return t.queryToTagMap.get(n)}function Ec(t){return t._path.toString()+"$"+t._queryIdentifier}function Kf(t,e){return t.tagToQueryMap.get(e)}function qf(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function Jf(t,e,n){const r=t.syncPointTree_.get(e);M(r,"Missing sync point for query tag that we're tracking");const s=Nc(t.pendingWriteTree_,e);return Gf(r,n,s,null)}function r5(t){return t.fold((e,n,r)=>{if(n&&Dr(n))return[Ic(n)];{let s=[];return n&&(s=ax(n)),ot(r,(i,o)=>{s=s.concat(o)}),s}})}function to(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(XI())(t._repo,t._path):t}function s5(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Ec(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function i5(){return KI++}function o5(t,e,n){const r=e._path,s=Lo(t,e),i=mx(t,n),o=t.listenProvider_.startListening(to(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)M(!Dr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,h,d)=>{if(!oe(u)&&h&&Dr(h))return[Ic(h).query];{let f=[];return h&&(f=f.concat(ax(h).map(m=>m.query))),ot(d,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(to(h),Lo(t,h))}}return o}/**
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
 */class Zf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zf(n)}node(){return this.node_}}class ep{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new ep(this.syncTree_,n)}node(){return Xf(this.syncTree_,this.path_)}}const l5=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},U_=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return a5(t[".sv"],e,n);if(typeof t[".sv"]=="object")return c5(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},a5=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},c5=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&M(!1,"Unexpected increment value: "+r);const s=e.node();if(M(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},_x=function(t,e,n,r){return tp(e,new ep(n,t),r)},gx=function(t,e,n){return tp(t,new Zf(e),n)};function tp(t,e,n){const r=t.getPriority().val(),s=U_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=U_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ge(l,He(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ge(s))),o.forEachChild(Pe,(l,c)=>{const u=tp(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
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
 */class np{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function rp(t,e){let n=e instanceof pe?e:new pe(e),r=t,s=se(n);for(;s!==null;){const i=ri(r.node.children,s)||{children:{},childCount:0};r=new np(s,r,i),n=ge(n),s=se(n)}return r}function vi(t){return t.node.value}function yx(t,e){t.node.value=e,oh(t)}function vx(t){return t.node.childCount>0}function u5(t){return vi(t)===void 0&&!vx(t)}function Tc(t,e){ot(t.node.children,(n,r)=>{e(new np(n,t,r))})}function xx(t,e,n,r){n&&e(t),Tc(t,s=>{xx(s,e,!0)})}function d5(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function nl(t){return new pe(t.parent===null?t.name:nl(t.parent)+"/"+t.name)}function oh(t){t.parent!==null&&h5(t.parent,t.name,t)}function h5(t,e,n){const r=u5(n),s=Tn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,oh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,oh(t))}/**
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
 */const f5=/[\[\].#$\/\u0000-\u001F\u007F]/,p5=/[\[\].#$\u0000-\u001F\u007F]/,Lu=10*1024*1024,sp=function(t){return typeof t=="string"&&t.length!==0&&!f5.test(t)},bx=function(t){return typeof t=="string"&&t.length!==0&&!p5.test(t)},m5=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bx(t)},_5=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!jf(t)||t&&typeof t=="object"&&Tn(t,".sv")},wx=function(t,e,n,r){r&&e===void 0||Rc(yc(t,"value"),e,n)},Rc=function(t,e,n){const r=n instanceof pe?new AN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vr(r)+" with contents = "+e.toString());if(jf(e))throw new Error(t+"contains "+e.toString()+" "+Vr(r));if(typeof e=="string"&&e.length>Lu/3&&vc(e)>Lu)throw new Error(t+"contains a string greater than "+Lu+" utf8 bytes "+Vr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(ot(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!sp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LN(r,o),Rc(t,l,r),ON(r)}),s&&i)throw new Error(t+' contains ".value" child '+Vr(r)+" in addition to actual children.")}},g5=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=To(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!sp(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(PN);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Kt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},y5=function(t,e,n,r){const s=yc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];ot(e,(o,l)=>{const c=new pe(o);if(Rc(s,l,je(n,c)),Df(c)===".priority"&&!_5(l))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),g5(s,i)},kx=function(t,e,n,r){if(!bx(n))throw new Error(yc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},v5=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kx(t,e,n)},Cx=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},x5=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!sp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!m5(n))throw new Error(yc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class b5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Mf(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Sx(t,e,n){jc(t,n),Nx(t,r=>Mf(r,e))}function en(t,e,n){jc(t,n),Nx(t,r=>Kt(r,e)||Kt(e,r))}function Nx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(w5(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w5(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qi&&rt("event: "+n.toString()),gi(r)}}}/**
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
 */const k5="repo_interrupt",C5=25;class S5{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new b5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ba(),this.transactionQueueTree_=new np,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N5(t,e,n){if(t.stats_=Lf(t.repoInfo_),t.forceRestClient_||rN())t.server_=new Fa(t.repoInfo_,(r,s,i,o)=>{z_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>F_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Wn(t.repoInfo_,e,(r,s,i,o)=>{z_(t,r,s,i,o)},r=>{F_(t,r)},r=>{I5(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=aN(t.repoInfo_,()=>new lI(t.stats_,t.server_)),t.infoData_=new nI,t.infoSyncTree_=new M_({startListening:(r,s,i,o)=>{let l=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(l=tl(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ip(t,"connected",!1),t.serverSyncTree_=new M_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,c)=>{const u=o(l,c);en(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Ix(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Pc(t){return l5({timestamp:Ix(t)})}function z_(t,e,n,r,s){t.dataUpdateCount++;const i=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=Ta(n,u=>He(u));o=t5(t.serverSyncTree_,i,c,s)}else{const c=He(n);o=hx(t.serverSyncTree_,i,c,s)}else if(r){const c=Ta(n,u=>He(u));o=JI(t.serverSyncTree_,i,c)}else{const c=He(n);o=tl(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=ci(t,i)),en(t.eventQueue_,l,o)}function F_(t,e){ip(t,"connected",e),e===!1&&j5(t)}function I5(t,e){ot(e,(n,r)=>{ip(t,n,r)})}function ip(t,e,n){const r=new pe("/.info/"+e),s=He(n);t.infoData_.updateSnapshot(r,s);const i=tl(t.infoSyncTree_,r,s);en(t.eventQueue_,r,i)}function op(t){return t.nextWriteId_++}function E5(t,e,n){const r=n5(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=He(s).withIndex(e._queryParams.getIndex());ih(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=tl(t.serverSyncTree_,e._path,i);else{const l=Lo(t.serverSyncTree_,e);o=hx(t.serverSyncTree_,e._path,i,l)}return en(t.eventQueue_,e._path,o),Xa(t.serverSyncTree_,e,n,null,!0),i},s=>(rl(t,"get for query "+Ve(e)+" failed: "+s),Promise.reject(new Error(s))))}function T5(t,e,n,r,s){rl(t,"set",{path:e.toString(),value:n,priority:r});const i=Pc(t),o=He(n,r),l=Xf(t.serverSyncTree_,e),c=gx(o,l,i),u=op(t),h=dx(t.serverSyncTree_,e,c,u,!0);jc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||bt("set at "+e+" failed: "+f);const w=gr(t.serverSyncTree_,u,!v);en(t.eventQueue_,e,w),lh(t,s,f,m)});const d=ap(t,e);ci(t,d),en(t.eventQueue_,d,[])}function R5(t,e,n,r){rl(t,"update",{path:e.toString(),value:n});let s=!0;const i=Pc(t),o={};if(ot(n,(l,c)=>{s=!1,o[l]=_x(je(e,l),He(c),t.serverSyncTree_,i)}),s)rt("update() called with empty data.  Don't do anything."),lh(t,r,"ok",void 0);else{const l=op(t),c=qI(t.serverSyncTree_,e,o,l);jc(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||bt("update at "+e+" failed: "+u);const f=gr(t.serverSyncTree_,l,!d),m=f.length>0?ci(t,e):e;en(t.eventQueue_,m,f),lh(t,r,u,h)}),ot(n,u=>{const h=ap(t,je(e,u));ci(t,h)}),en(t.eventQueue_,e,[])}}function j5(t){rl(t,"onDisconnectEvents");const e=Pc(t),n=Ba();Zd(t.onDisconnect_,ue(),(s,i)=>{const o=_x(s,i,t.serverSyncTree_,e);Kv(n,s,o)});let r=[];Zd(n,ue(),(s,i)=>{r=r.concat(tl(t.serverSyncTree_,s,i));const o=ap(t,s);ci(t,o)}),t.onDisconnect_=Ba(),en(t.eventQueue_,ue(),r)}function P5(t,e,n){let r;se(e._path)===".info"?r=ih(t.infoSyncTree_,e,n):r=ih(t.serverSyncTree_,e,n),Sx(t.eventQueue_,e._path,r)}function B_(t,e,n){let r;se(e._path)===".info"?r=Xa(t.infoSyncTree_,e,n):r=Xa(t.serverSyncTree_,e,n),Sx(t.eventQueue_,e._path,r)}function A5(t){t.persistentConnection_&&t.persistentConnection_.interrupt(k5)}function rl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),rt(n,...e)}function lh(t,e,n,r){e&&gi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Ex(t,e,n){return Xf(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function lp(t,e=t.transactionQueueTree_){if(e||Ac(t,e),vi(e)){const n=Rx(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&L5(t,nl(e),n)}else vx(e)&&Tc(e,n=>{lp(t,n)})}function L5(t,e,n){const r=n.map(u=>u.currentWriteId),s=Ex(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];M(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=vt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{rl(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(gr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ac(t,rp(t.transactionQueueTree_,e)),lp(t,t.transactionQueueTree_),en(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)gi(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{bt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ci(t,e)}},o)}function ci(t,e){const n=Tx(t,e),r=nl(n),s=Rx(t,n);return O5(t,s,r),r}function O5(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=vt(n,c.path);let h=!1,d;if(M(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,s=s.concat(gr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=C5)h=!0,d="maxretry",s=s.concat(gr(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Ex(t,c.path,o);c.currentInputSnapshot=f;const m=e[l].update(f.val());if(m!==void 0){Rc("transaction failed: Data returned ",m,c.path);let v=He(m);typeof m=="object"&&m!=null&&Tn(m,".priority")||(v=v.updatePriority(f.getPriority()));const k=c.currentWriteId,_=Pc(t),p=gx(v,f,_);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=p,c.currentWriteId=op(t),o.splice(o.indexOf(k),1),s=s.concat(dx(t.serverSyncTree_,c.path,p,c.currentWriteId,c.applyLocally)),s=s.concat(gr(t.serverSyncTree_,k,!0))}else h=!0,d="nodata",s=s.concat(gr(t.serverSyncTree_,c.currentWriteId,!0))}en(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Ac(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)gi(r[l]);lp(t,t.transactionQueueTree_)}function Tx(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&vi(r)===void 0;)r=rp(r,n),e=ge(e),n=se(e);return r}function Rx(t,e){const n=[];return jx(t,e,n),n.sort((r,s)=>r.order-s.order),n}function jx(t,e,n){const r=vi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Tc(e,s=>{jx(t,s,n)})}function Ac(t,e){const n=vi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,yx(e,n.length>0?n:void 0)}Tc(e,r=>{Ac(t,r)})}function ap(t,e){const n=nl(Tx(t,e)),r=rp(t.transactionQueueTree_,e);return d5(r,s=>{Ou(t,s)}),Ou(t,r),xx(r,s=>{Ou(t,s)}),n}function Ou(t,e){const n=vi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(gr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?yx(e,void 0):n.length=i+1,en(t.eventQueue_,nl(e),s);for(let o=0;o<r.length;o++)gi(r[o])}}/**
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
 */function D5(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function M5(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const $_=function(t,e){const n=U5(t),r=n.namespace;n.domain==="firebase.com"&&Kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||GS();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Av(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new pe(n.pathString)}},U5=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=D5(t.substring(h,d)));const f=M5(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
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
 */const W_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",z5=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=W_.charAt(n%64),n=Math.floor(n/64);M(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=W_.charAt(e[s]);return M(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class F5{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ve(this.snapshot.exportVal())}}class B5{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Px{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cp{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:Df(this._path)}get ref(){return new er(this._repo,this._path)}get _queryIdentifier(){const e=I_(this._queryParams),n=Pf(e);return n==="{}"?"default":n}get _queryObject(){return I_(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof cp))return!1;const n=this._repo===e._repo,r=Mf(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+jN(this._path)}}class er extends cp{constructor(e,n){super(e,n,new Bf,!1)}get parent(){const e=$v(this._path);return e===null?null:new er(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),r=Do(this.ref,e);return new Oo(this._node.getChild(n),r,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Oo(s,Do(this.ref,r),Pe)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ce(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?Do(t._root,e):t._root}function Do(t,e){return t=Fe(t),se(t._path)===null?v5("child","path",e):kx("child","path",e),new er(t._repo,je(t._path,e))}function $5(t,e){t=Fe(t),Cx("push",t._path),wx("push",e,t._path,!0);const n=Ix(t._repo),r=z5(n),s=Do(t,r),i=Do(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function xn(t,e){t=Fe(t),Cx("set",t._path),wx("set",e,t._path,!1);const n=new Qo;return T5(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Br(t,e){y5("update",e,t._path);const n=new Qo;return R5(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Du(t){t=Fe(t);const e=new Px(()=>{}),n=new Lc(e);return E5(t._repo,t,n).then(r=>new Oo(r,new er(t._repo,t._path),t._queryParams.getIndex()))}class Lc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new F5("value",this,new Oo(e.snapshotNode,new er(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new B5(this,e,n):null}matches(e){return e instanceof Lc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function W5(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const c=n,u=(h,d)=>{B_(t._repo,t,l),c(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Px(n,i||void 0),l=new Lc(o);return P5(t._repo,t,l),()=>B_(t._repo,t,l)}function Mo(t,e,n,r){return W5(t,"value",e,n,r)}WI(er);GI(er);/**
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
 */const H5="FIREBASE_DATABASE_EMULATOR_HOST",ah={};let V5=!1;function Y5(t,e,n,r){t.repoInfo_=new Av(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Q5(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),rt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=$_(i,s),l=o.repoInfo,c;typeof process<"u"&&c_&&(c=c_[H5]),c?(i=`http://${c}?ns=${l.namespace}`,o=$_(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new iN(t.name,t.options,e);x5("Invalid Firebase Database URL",o),oe(o.path)||Kn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=X5(l,t,u,new sN(t.name,n));return new K5(h,t)}function G5(t,e){const n=ah[e];(!n||n[t.key]!==t)&&Kn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),A5(t),delete n[t.key]}function X5(t,e,n,r){let s=ah[e.name];s||(s={},ah[e.name]=s);let i=s[t.toURLString()];return i&&Kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new S5(t,V5,n,r),s[t.toURLString()]=i,i}class K5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new er(this._repo,ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(G5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kn("Cannot call "+e+" on a deleted database.")}}function q5(t=vf(),e){const n=xc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=jy("database");r&&J5(n,...r)}return n}function J5(t,e,n,r={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new ta(ta.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ly(r.mockUserToken,t.app.options.projectId);i=new ta(o)}Y5(s,e,n,i)}/**
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
 */function Z5(t){$S(_s),ls(new Ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return Q5(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Sn(u_,d_,t),Sn(u_,d_,"esm2017")}Wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Z5();var eE="firebase",tE="10.14.1";/**
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
 */Sn(eE,tE,"app");/**
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
 */const Ax="firebasestorage.googleapis.com",Lx="storageBucket",nE=2*60*1e3,rE=10*60*1e3;/**
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
 */class Le extends Zn{constructor(e,n,r=0){super(Mu(e),`Firebase Storage: ${n} (${Mu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function Mu(t){return"storage/"+t}function up(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(Ae.UNKNOWN,t)}function sE(t){return new Le(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function iE(t){return new Le(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function oE(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(Ae.UNAUTHENTICATED,t)}function lE(){return new Le(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function aE(t){return new Le(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function cE(){return new Le(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function uE(){return new Le(Ae.CANCELED,"User canceled the upload/download.")}function dE(t){return new Le(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function hE(t){return new Le(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function fE(){return new Le(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Lx+"' property when initializing the app?")}function pE(){return new Le(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mE(){return new Le(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _E(t){return new Le(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ch(t){return new Le(Ae.INVALID_ARGUMENT,t)}function Ox(){return new Le(Ae.APP_DELETED,"The Firebase app was deleted.")}function gE(t){return new Le(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function no(t,e){return new Le(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Di(t){throw new Le(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw hE(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(b){b.path_=decodeURIComponent(b.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=n===Ax?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",_=new RegExp(`^https?://${w}/${s}/${k}`,"i"),y=[{regex:l,indices:c,postModify:i},{regex:m,indices:v,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let b=0;b<y.length;b++){const E=y[b],x=E.regex.exec(e);if(x){const C=x[E.indices.bucket];let S=x[E.indices.path];S||(S=""),r=new Ft(C,S),E.postModify(r);break}}if(r==null)throw dE(e);return r}}class yE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vE(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...k){u||(u=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(m,c())},k)}function f(){i&&clearTimeout(i)}function m(k,..._){if(u){f();return}if(k){f(),h.call(null,k,..._);return}if(c()||o){f(),h.call(null,k,..._);return}r<64&&(r*=2);let y;l===1?(l=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function w(k){v||(v=!0,f(),!u&&(s!==null?(k||(l=2),clearTimeout(s),d(0)):k||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function xE(t){t(!1)}/**
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
 */function bE(t){return t!==void 0}function wE(t){return typeof t=="object"&&!Array.isArray(t)}function dp(t){return typeof t=="string"||t instanceof String}function H_(t){return hp()&&t instanceof Blob}function hp(){return typeof Blob<"u"}function V_(t,e,n,r){if(r<e)throw ch(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ch(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Oc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Dx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
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
 */function kE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class CE{constructor(e,n,r,s,i,o,l,c,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Al(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ts.NO_ERROR,c=i.getStatus();if(!l||kE(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ts.ABORT;r(!1,new Al(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Al(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());bE(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=up();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ox():uE();o(c)}else{const c=cE();o(c)}};this.canceled_?n(!1,new Al(!1,null,!0)):this.backoffId_=vE(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Al{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function SE(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function NE(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function IE(t,e){e&&(t["X-Firebase-GMPID"]=e)}function EE(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TE(t,e,n,r,s,i,o=!0){const l=Dx(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return IE(u,e),SE(u,n),NE(u,i),EE(u,r),new CE(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function RE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jE(...t){const e=RE();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(hp())return new Blob(t);throw new Le(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function PE(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function AE(t){if(typeof atob>"u")throw _E("base-64");return atob(t)}/**
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
 */const wn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Uu{constructor(e,n){this.data=e,this.contentType=n||null}}function LE(t,e){switch(t){case wn.RAW:return new Uu(Mx(e));case wn.BASE64:case wn.BASE64URL:return new Uu(Ux(t,e));case wn.DATA_URL:return new Uu(DE(e),ME(e))}throw up()}function Mx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function OE(t){let e;try{e=decodeURIComponent(t)}catch{throw no(wn.DATA_URL,"Malformed data URL.")}return Mx(e)}function Ux(t,e){switch(t){case wn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw no(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case wn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw no(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=AE(e)}catch(s){throw s.message.includes("polyfill")?s:no(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class zx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw no(wn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=UE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DE(t){const e=new zx(t);return e.base64?Ux(wn.BASE64,e.rest):OE(e.rest)}function ME(t){return new zx(t).contentType}function UE(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class pr{constructor(e,n){let r=0,s="";H_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(H_(this.data_)){const r=this.data_,s=PE(r,e,n);return s===null?null:new pr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(hp()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(jE.apply(null,n))}else{const n=e.map(o=>dp(o)?LE(wn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new pr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function Fx(t){let e;try{e=JSON.parse(t)}catch{return null}return wE(e)?e:null}/**
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
 */function zE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function FE(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Bx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function BE(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||BE}}let Ll=null;function $E(t){return!dp(t)||t.length<2?t:Bx(t)}function $x(){if(Ll)return Ll;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return $E(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),Ll=t,Ll}function WE(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function HE(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return WE(r,t),r}function Wx(t,e,n){const r=Fx(e);return r===null?null:HE(t,r,n)}function VE(t,e,n,r){const s=Fx(e);if(s===null||!dp(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),m=Oc(f,n,r),v=Dx({alt:"media",token:u});return m+v})[0]}function YE(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class fp{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Hx(t){if(!t)throw up()}function QE(t,e){function n(r,s){const i=Wx(t,s,e);return Hx(i!==null),i}return n}function GE(t,e){function n(r,s){const i=Wx(t,s,e);return Hx(i!==null),VE(i,s,t.host,t._protocol)}return n}function Vx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=lE():s=oE():n.getStatus()===402?s=iE(t.bucket):n.getStatus()===403?s=aE(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Yx(t){const e=Vx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=sE(t.path)),i.serverResponse=s.serverResponse,i}return n}function XE(t,e,n){const r=e.fullServerUrl(),s=Oc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new fp(s,i,GE(t,n),o);return l.errorHandler=Yx(e),l}function KE(t,e){const n=e.fullServerUrl(),r=Oc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new fp(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Yx(e),l}function qE(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function JE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qE(null,e)),r}function ZE(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=JE(e,r,s),h=YE(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",m=pr.getBlob(d,r,f);if(m===null)throw pE();const v={name:u.fullPath},w=Oc(i,t.host,t._protocol),k="POST",_=t.maxUploadRetryTime,p=new fp(w,k,QE(t,n),_);return p.urlParams=v,p.headers=o,p.body=m.uploadData(),p.errorHandler=Vx(e),p}class eT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Di("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Di("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Di("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Di("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Di("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class tT extends eT{initXhr(){this.xhr_.responseType="text"}}function pp(){return new tT}/**
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
 */class hs{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hs(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Bx(this._location.path)}get storage(){return this._service}get parent(){const e=zE(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw gE(e)}}function nT(t,e,n){t._throwIfRoot("uploadBytes");const r=ZE(t.storage,t._location,$x(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,pp).then(s=>({metadata:s,ref:t}))}function rT(t){t._throwIfRoot("getDownloadURL");const e=XE(t.storage,t._location,$x());return t.storage.makeRequestWithTokens(e,pp).then(n=>{if(n===null)throw mE();return n})}function sT(t){t._throwIfRoot("deleteObject");const e=KE(t.storage,t._location);return t.storage.makeRequestWithTokens(e,pp)}function iT(t,e){const n=FE(t._location.path,e),r=new Ft(t._location.bucket,n);return new hs(t.storage,r)}/**
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
 */function oT(t){return/^[A-Za-z]+:\/\//.test(t)}function lT(t,e){return new hs(t,e)}function Qx(t,e){if(t instanceof mp){const n=t;if(n._bucket==null)throw fE();const r=new hs(n,n._bucket);return e!=null?Qx(r,e):r}else return e!==void 0?iT(t,e):t}function aT(t,e){if(e&&oT(e)){if(t instanceof mp)return lT(t,e);throw ch("To use ref(service, url), the first argument must be a Storage instance.")}else return Qx(t,e)}function Y_(t,e){const n=e==null?void 0:e[Lx];return n==null?null:Ft.makeFromBucketSpec(n,t)}function cT(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ly(s,t.app.options.projectId))}class mp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ax,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nE,this._maxUploadRetryTime=rE,this._requests=new Set,s!=null?this._bucket=Ft.makeFromBucketSpec(s,this._host):this._bucket=Y_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=Y_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new yE(Ox());{const o=TE(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Q_="@firebase/storage",G_="0.13.2";/**
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
 */const Gx="storage";function uT(t,e,n){return t=Fe(t),nT(t,e,n)}function dT(t){return t=Fe(t),rT(t)}function hT(t){return t=Fe(t),sT(t)}function X_(t,e){return t=Fe(t),aT(t,e)}function fT(t=vf(),e){t=Fe(t);const r=xc(t,Gx).getImmediate({identifier:e}),s=jy("storage");return s&&pT(r,...s),r}function pT(t,e,n,r={}){cT(t,e,n,r)}function mT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new mp(n,r,s,e,_s)}function _T(){ls(new Ar(Gx,mT,"PUBLIC").setMultipleInstances(!0)),Sn(Q_,G_,""),Sn(Q_,G_,"esm2017")}_T();const gT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},_p=zy(gT),zu=FS(_p),Se=q5(_p),K_=fT(_p),Xx=new Ln;Xx.addScope("email");const Kx="packing-checklist-data",Fu=["必備","電子產品","個人物品","視天氣","旅行","運動"],qx=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],ks={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"",location:"玄關抽屜",spaceId:"space_default"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車",location:"",spaceId:"space_default"},{id:3,name:"手機",category:"必備",note:"",location:"",spaceId:"space_default"},{id:4,name:"悠遊卡",category:"必備",note:"記得加值",location:"",spaceId:"space_default"},{id:5,name:"耳機",category:"電子產品",note:"",location:"書桌",spaceId:"space_default"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量",location:"",spaceId:"space_default"},{id:7,name:"充電線",category:"電子產品",note:"Type-C",location:"",spaceId:"space_default"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋",location:"",spaceId:"space_default"},{id:9,name:"面紙",category:"個人物品",note:"",location:"",spaceId:"space_default"},{id:10,name:"水壺",category:"個人物品",note:"裝滿水",location:"",spaceId:"space_default"},{id:11,name:"雨傘",category:"視天氣",note:"",location:"門口",spaceId:"space_default"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05",location:"",spaceId:"space_default"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備",location:"",spaceId:"space_default"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[],spaces:[{id:"space_default",name:"個人空間"},{id:"space_family",name:"家庭共享空間"}],activeSpaceId:"space_default"};function lr(t){return t.toLowerCase().replace(/\./g,",")}function uh(t){return t.replace(/,/g,".")}function Yr(t){return Array.isArray(t)?t.map(Yr):t!==null&&typeof t=="object"?Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0).map(([e,n])=>[e,Yr(n)])):t}function yT(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:Object.fromEntries(Object.entries(t.sharedWith||{}).map(([e,n])=>[e,n===!0?"view":n]))}:null}function Jx(t){if(!t)return ks;const e=Array.isArray(t.spaces)&&t.spaces.length>0?t.spaces:ks.spaces,n=t.activeSpaceId||e[0].id,r=e[0].id;return{itemLibrary:(Array.isArray(t.itemLibrary)?t.itemLibrary:ks.itemLibrary).map(i=>({...i,note:i.note||"",location:i.location||"",spaceId:i.spaceId||r})),lists:Array.isArray(t.lists)?t.lists.map(i=>({...i,items:Array.isArray(i.items)?i.items:[],checkedItems:Array.isArray(i.checkedItems)?i.checkedItems:[],inlineItems:Array.isArray(i.inlineItems)?i.inlineItems:[],...i.sharedListId?{sharedListId:i.sharedListId}:{}})):ks.lists,activeListId:t.activeListId||ks.activeListId,templates:Array.isArray(t.templates)?t.templates:[],spaces:e,activeSpaceId:n}}function vT(){try{const t=localStorage.getItem(Kx);if(t)return Jx(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return ks}function q_(t){try{localStorage.setItem(Kx,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function xT(t){const[e,n]=g.useState(null),[r,s]=g.useState(t),[i,o]=g.useState("offline"),l=g.useRef(null),c=g.useCallback(m=>{l.current&&l.current();const v=Ce(Se,"users/"+m);l.current=Mo(v,w=>{const k=w.val();if(k){const _=Jx(k);s(_),q_(_),o("synced")}else u(m,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=g.useCallback((m,v)=>{o("syncing");const w=Ce(Se,"users/"+m);xn(w,v).then(()=>{o("synced")}).catch(k=>{console.error("Firebase 儲存失敗",k),o("error")})},[]),h=g.useCallback(m=>{s(m),q_(m),e&&u(e.uid,m)},[e,u]),d=g.useCallback(()=>{XC(zu,Xx).catch(m=>{console.error("登入失敗",m)})},[]),f=g.useCallback(()=>{l.current&&(l.current(),l.current=null),TC(zu).then(()=>{n(null),o("offline")}).catch(m=>{console.error("登出失敗",m)})},[]);return g.useEffect(()=>{const m=EC(zu,v=>{n(v),v?c(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{m(),l.current&&l.current()}},[c]),{user:e,data:r,syncStatus:i,saveData:h,handleLogin:d,handleLogout:f}}function bT(t,e){const[n,r]=g.useState({}),[s,i]=g.useState({}),o=g.useRef({}),l=g.useRef(null),c=g.useCallback(x=>{o.current[x]&&(o.current[x](),delete o.current[x])},[]),u=g.useCallback(()=>{Object.keys(o.current).forEach(c),l.current&&(l.current(),l.current=null),r({}),i({})},[c]),h=g.useCallback((x,C)=>{if(o.current[`${C}_${x}`])return;const S=Ce(Se,`sharedLists/${x}`),P=Mo(S,N=>{const I=N.val();if(!I){(C==="withMe"?r:i)(B=>{const K={...B};return delete K[x],K}),c(`${C}_${x}`);return}const T=yT(I);(C==="withMe"?r:i)(z=>({...z,[x]:T}))},N=>{console.error("共享清單讀取失敗",N)});o.current[`${C}_${x}`]=P},[c]);g.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const x=lr(t.email),C=Ce(Se,`sharedIndex/${x}`);return l.current=Mo(C,S=>{const P=S.val();if(!P){Object.keys(o.current).forEach(I=>{I.startsWith("withMe_")&&c(I)}),r({});return}const N=new Set(Object.keys(P));Object.keys(o.current).forEach(I=>{if(I.startsWith("withMe_")){const T=I.replace("withMe_","");N.has(T)||(c(I),r(L=>{const z={...L};return delete z[T],z}))}}),N.forEach(I=>{h(I,"withMe")})},S=>{console.error("共享索引讀取失敗",S)}),()=>{u()}},[t==null?void 0:t.email]),g.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const x=new Set;e.lists.forEach(C=>{C.sharedListId&&x.add(C.sharedListId)}),Object.keys(o.current).forEach(C=>{if(C.startsWith("byMe_")){const S=C.replace("byMe_","");x.has(S)||(c(C),i(P=>{const N={...P};return delete N[S],N}))}}),x.forEach(C=>{h(C,"byMe")})},[t,e==null?void 0:e.lists,h,c]),g.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(x=>{if(!x.sharedListId)return;const C=s[x.sharedListId];if(!C)return;const S=C.items||[];if(x.disposable){const B=Array.isArray(x.inlineItems)?x.inlineItems:[];if(JSON.stringify(B)!==JSON.stringify(S)){const Y=Ce(Se,`sharedLists/${x.sharedListId}`);Br(Y,{items:Yr(B),name:x.name,icon:x.icon})}return}const P=new Set(S.map(B=>String(B.id))),N=new Set((Array.isArray(x.items)?x.items:[]).map(String)),I=S.map(B=>{if(!N.has(String(B.id)))return B;const K=e.itemLibrary.find(q=>String(q.id)===String(B.id));if(!K)return B;const{id:Y,name:j,category:O,note:V,photoURL:X}=K;return{id:Y,name:j,category:O,...V!=null&&{note:V},...X&&{photoURL:X}}}),T=(Array.isArray(x.items)?x.items:[]).filter(B=>!P.has(String(B))).map(B=>e.itemLibrary.find(K=>String(K.id)===String(B))).filter(Boolean).map(({id:B,name:K,category:Y,note:j,photoURL:O})=>({id:B,name:K,category:Y,...j!=null&&{note:j},...O&&{photoURL:O}})),L=[...I,...T];if(JSON.stringify(L)!==JSON.stringify(S)){const B=Ce(Se,`sharedLists/${x.sharedListId}`);Br(B,{items:Yr(L),name:x.name,icon:x.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,s]);const d=g.useCallback(async(x,C,S)=>{if(!t)return null;const P=x.disposable?Array.isArray(x.inlineItems)?x.inlineItems:[]:(Array.isArray(x.items)?x.items:[]).map(B=>C.find(K=>K.id===B)).filter(Boolean).map(({id:B,name:K,category:Y,note:j,photoURL:O})=>({id:B,name:K,category:Y,...j!=null&&{note:j},...O&&{photoURL:O}})),N={};S.forEach(B=>{N[lr(B)]="edit"});const T=$5(Ce(Se,"sharedLists")).key,L={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:x.name,icon:x.icon,items:Yr(P),checkedItems:Array.isArray(x.checkedItems)?x.checkedItems:[],sharedWith:N},z={};return z[`sharedLists/${T}`]=L,S.forEach(B=>{z[`sharedIndex/${lr(B)}/${T}`]=!0}),await Br(Ce(Se),z),T},[t]),f=g.useCallback(async(x,C)=>{const S=lr(C),P={};P[`sharedLists/${x}/sharedWith/${S}`]="edit",P[`sharedIndex/${S}/${x}`]=!0,await Br(Ce(Se),P)},[]),m=g.useCallback(async(x,C)=>{const S=lr(C),P={};P[`sharedLists/${x}/sharedWith/${S}`]=null,P[`sharedIndex/${S}/${x}`]=null,await Br(Ce(Se),P)},[]),v=g.useCallback(async x=>{const C=s[x];if(!C)return;const S={};S[`sharedLists/${x}`]=null;const P=C.sharedWith||{};Object.keys(P).forEach(N=>{S[`sharedIndex/${N}/${x}`]=null}),await Br(Ce(Se),S)},[s]),w=g.useCallback(async(x,C,S)=>{const P=lr(C);await xn(Ce(Se,`sharedLists/${x}/sharedWith/${P}`),S)},[]),k=g.useCallback(async(x,C)=>{const S=Ce(Se,`sharedLists/${x}/items`),I=[...(await Du(S)).val()||[],Yr(C)];await xn(S,I)},[]),_=g.useCallback(async(x,C)=>{const P=(await Du(Ce(Se,`sharedLists/${x}`))).val();if(!P)return;const N=(P.items||[]).filter(L=>L.id!==C),I=(P.checkedItems||[]).filter(L=>L!==C),T={};T[`sharedLists/${x}/items`]=N,T[`sharedLists/${x}/checkedItems`]=I,await Br(Ce(Se),T)},[]),p=g.useCallback(async(x,C)=>{const S=Ce(Se,`sharedLists/${x}/items`);await xn(S,C.map(Yr))},[]),y=g.useCallback(async(x,C)=>{const S=Ce(Se,`sharedLists/${x}/checkedItems`),N=(await Du(S)).val()||[],T=N.includes(C)?N.filter(L=>L!==C):[...N,C];await xn(S,T)},[]),b=g.useCallback(async x=>{const C=Ce(Se,`sharedLists/${x}/checkedItems`);await xn(C,[])},[]),E=g.useCallback(async(x,C)=>{const S=Ce(Se,`sharedLists/${x}/checkedItems`);await xn(S,C)},[]);return{sharedWithMe:n,sharedByMe:s,shareList:d,addSharedUser:f,removeSharedUser:m,unshareList:v,setUserPermission:w,addSharedItem:k,removeSharedItem:_,updateSharedListItems:p,toggleSharedCheck:y,resetSharedChecks:b,checkAllShared:E}}function wT(t){const[e,n]=g.useState([]),[r,s]=g.useState(!1),[i,o]=g.useState(!0);g.useEffect(()=>{const u=Ce(Se,"adminEmails"),h=Mo(u,d=>{const f=d.val(),m=Array.isArray(f)?f:[];n(m),o(!1)},()=>{n([]),o(!1)});return()=>h()},[]),g.useEffect(()=>{if(!(t!=null&&t.email)){s(!1);return}s(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=g.useCallback(async u=>{const h=u.toLowerCase().trim();if(!h)return;const d=[...new Set([...e,h])];await xn(Ce(Se,"adminEmails"),d)},[e]),c=g.useCallback(async u=>{var f;const h=u.toLowerCase().trim();if(((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())===h)return;const d=e.filter(m=>m!==h);await xn(Ce(Se,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:r,adminEmails:e,loading:i,addAdmin:l,removeAdmin:c}}function kT(){const[t,e]=g.useState(Fu);g.useEffect(()=>{const o=Ce(Se,"categories"),l=Mo(o,c=>{const u=c.val();Array.isArray(u)&&u.length>0?e(u):e(Fu)},()=>{e(Fu)});return()=>l()},[]);const n=g.useCallback(async o=>{await xn(Ce(Se,"categories"),o)},[]),r=g.useCallback(async o=>{const l=o.trim();if(!l||t.includes(l))return;const c=[...t,l];await n(c)},[t,n]),s=g.useCallback(async(o,l)=>{const c=l.trim();if(!c||c===o||t.includes(c))return;const u=t.map(h=>h===o?c:h);await n(u)},[t,n]),i=g.useCallback(async o=>{const l=t.filter(c=>c!==o);l.length!==0&&await n(l)},[t,n]);return{categories:t,addCategory:r,updateCategory:s,removeCategory:i}}const J_="packing-checklist-theme";function CT(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Bu(t){const e=t==="dark"||t==="system"&&CT();document.documentElement.classList.toggle("dark",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e?"#0f172a":"#4F46E5")}function ST(){const[t,e]=g.useState(()=>{try{return localStorage.getItem(J_)||"system"}catch{return"system"}}),n=g.useCallback(r=>{e(r);try{localStorage.setItem(J_,r)}catch{}Bu(r)},[]);return g.useEffect(()=>{Bu(t)},[t]),g.useEffect(()=>{if(t!=="system")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>Bu("system");return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[t]),{preference:t,changeTheme:n}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=t=>{const e=IT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ET={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=g.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},c)=>g.createElement("svg",{ref:c,...ET,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Zx("lucide",s),...!i&&!TT(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,h])=>g.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(t,e)=>{const n=g.forwardRef(({className:r,...s},i)=>g.createElement(RT,{ref:i,iconNode:e,className:Zx(`lucide-${NT(Z_(t))}`,`lucide-${t}`,r),...s}));return n.displayName=Z_(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],$u=W("arrow-left",jT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],eb=W("arrow-up-down",PT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],LT=W("backpack",AT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],DT=W("baby",OT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],UT=W("book-open",MT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],FT=W("briefcase",zT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Dc=W("camera",BT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],WT=W("chart-column",$T);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],VT=W("check-check",HT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],fs=W("check",YT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],dh=W("chevron-down",QT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],XT=W("chevron-left",GT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],qT=W("circle-alert",KT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],hh=W("clipboard-list",JT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],e4=W("cloud-off",ZT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],n4=W("cloud",t4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],s4=W("coffee",r4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],o4=W("copy",i4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],a4=W("download",l4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],u4=W("dumbbell",c4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],h4=W("ellipsis-vertical",d4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],p4=W("eye",f4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tb=W("file-text",m4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],g4=W("footprints",_4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],v4=W("funnel",y4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],b4=W("gift",x4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],nb=W("grip-vertical",w4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],C4=W("heart",k4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],N4=W("inbox",S4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],rb=W("layout-dashboard",I4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],T4=W("layout-list",E4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],j4=W("list-checks",R4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],gp=W("loader-circle",P4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],L4=W("loader",A4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],D4=W("log-in",O4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],U4=W("log-out",M4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],F4=W("map-pin",z4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],$4=W("menu",B4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=[["path",{d:"M5 12h14",key:"1ays0h"}]],H4=W("minus",W4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Y4=W("monitor",V4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],G4=W("moon",Q4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],K4=W("mountain",X4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],J4=W("music",q4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Uo=W("package",Z4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Ka=W("pen-line",eR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],sb=W("pencil",tR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],rR=W("person-standing",nR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],iR=W("plane",sR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],qn=W("plus",oR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],aR=W("rotate-ccw",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],uR=W("scan-line",cR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zo=W("search",dR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Mc=W("share-2",hR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],fh=W("shield",fR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],mR=W("shirt",pR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],gR=W("shopping-cart",_R);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],ib=W("sticky-note",yR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],xR=W("sun",vR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],ob=W("tag",bR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],kR=W("target",wR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],SR=W("tent",CR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Rr=W("trash-2",NR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],ER=W("umbrella",IR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],RR=W("upload",TR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],PR=W("user",jR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],lb=W("users",AR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wt=W("x",LR);function OR(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>r=>{e.forEach(s=>s(r))},e)}const Uc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xi(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function yp(t){return"nodeType"in t}function Ot(t){var e,n;return t?xi(t)?t:yp(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function vp(t){const{Document:e}=Ot(t);return t instanceof e}function sl(t){return xi(t)?!1:t instanceof Ot(t).HTMLElement}function ab(t){return t instanceof Ot(t).SVGElement}function bi(t){return t?xi(t)?t.document:yp(t)?vp(t)?t:sl(t)||ab(t)?t.ownerDocument:document:document:document}const En=Uc?g.useLayoutEffect:g.useEffect;function xp(t){const e=g.useRef(t);return En(()=>{e.current=t}),g.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e.current==null?void 0:e.current(...r)},[])}function DR(){const t=g.useRef(null),e=g.useCallback((r,s)=>{t.current=setInterval(r,s)},[]),n=g.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function Fo(t,e){e===void 0&&(e=[t]);const n=g.useRef(t);return En(()=>{n.current!==t&&(n.current=t)},e),n}function il(t,e){const n=g.useRef();return g.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function qa(t){const e=xp(t),n=g.useRef(null),r=g.useCallback(s=>{s!==n.current&&(e==null||e(s,n.current)),n.current=s},[]);return[n,r]}function ph(t){const e=g.useRef();return g.useEffect(()=>{e.current=t},[t]),e.current}let Wu={};function ol(t,e){return g.useMemo(()=>{if(e)return e;const n=Wu[t]==null?0:Wu[t]+1;return Wu[t]=n,t+"-"+n},[t,e])}function cb(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.reduce((i,o)=>{const l=Object.entries(o);for(const[c,u]of l){const h=i[c];h!=null&&(i[c]=h+t*u)}return i},{...e})}}const Xs=cb(1),Ja=cb(-1);function MR(t){return"clientX"in t&&"clientY"in t}function bp(t){if(!t)return!1;const{KeyboardEvent:e}=Ot(t.target);return e&&t instanceof e}function UR(t){if(!t)return!1;const{TouchEvent:e}=Ot(t.target);return e&&t instanceof e}function mh(t){if(UR(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return MR(t)?{x:t.clientX,y:t.clientY}:null}const ui=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[ui.Translate.toString(t),ui.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),e0="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function zR(t){return t.matches(e0)?t:t.querySelector(e0)}const FR={display:"none"};function BR(t){let{id:e,value:n}=t;return ut.createElement("div",{id:e,style:FR},n)}function $R(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const s={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ut.createElement("div",{id:e,style:s,role:"status","aria-live":r,"aria-atomic":!0},n)}function WR(){const[t,e]=g.useState("");return{announce:g.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const ub=g.createContext(null);function HR(t){const e=g.useContext(ub);g.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function VR(){const[t]=g.useState(()=>new Set),e=g.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[g.useCallback(r=>{let{type:s,event:i}=r;t.forEach(o=>{var l;return(l=o[s])==null?void 0:l.call(o,i)})},[t]),e]}const YR={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},QR={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function GR(t){let{announcements:e=QR,container:n,hiddenTextDescribedById:r,screenReaderInstructions:s=YR}=t;const{announce:i,announcement:o}=WR(),l=ol("DndLiveRegion"),[c,u]=g.useState(!1);if(g.useEffect(()=>{u(!0)},[]),HR(g.useMemo(()=>({onDragStart(d){let{active:f}=d;i(e.onDragStart({active:f}))},onDragMove(d){let{active:f,over:m}=d;e.onDragMove&&i(e.onDragMove({active:f,over:m}))},onDragOver(d){let{active:f,over:m}=d;i(e.onDragOver({active:f,over:m}))},onDragEnd(d){let{active:f,over:m}=d;i(e.onDragEnd({active:f,over:m}))},onDragCancel(d){let{active:f,over:m}=d;i(e.onDragCancel({active:f,over:m}))}}),[i,e])),!c)return null;const h=ut.createElement(ut.Fragment,null,ut.createElement(BR,{id:r,value:s.draggable}),ut.createElement($R,{id:l,announcement:o}));return n?Ds.createPortal(h,n):h}var We;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(We||(We={}));function Za(){}function ec(t,e){return g.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function db(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const _n=Object.freeze({x:0,y:0});function XR(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function KR(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function qR(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function JR(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function t0(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const hb=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=t0(e,e.left,e.top),i=[];for(const o of r){const{id:l}=o,c=n.get(l);if(c){const u=XR(t0(c),s);i.push({id:l,data:{droppableContainer:o,value:u}})}}return i.sort(KR)};function ZR(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),s=Math.min(e.left+e.width,t.left+t.width),i=Math.min(e.top+e.height,t.top+t.height),o=s-r,l=i-n;if(r<s&&n<i){const c=e.width*e.height,u=t.width*t.height,h=o*l,d=h/(c+u-h);return Number(d.toFixed(4))}return 0}const ej=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=[];for(const i of r){const{id:o}=i,l=n.get(o);if(l){const c=ZR(l,e);c>0&&s.push({id:o,data:{droppableContainer:i,value:c}})}}return s.sort(qR)};function tj(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function fb(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:_n}function nj(t){return function(n){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return s.reduce((o,l)=>({...o,top:o.top+t*l.y,bottom:o.bottom+t*l.y,left:o.left+t*l.x,right:o.right+t*l.x}),{...n})}}const rj=nj(1);function sj(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function ij(t,e,n){const r=sj(e);if(!r)return t;const{scaleX:s,scaleY:i,x:o,y:l}=r,c=t.left-o-(1-s)*parseFloat(n),u=t.top-l-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),h=s?t.width/s:t.width,d=i?t.height/i:t.height;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c}}const oj={ignoreTransform:!1};function wi(t,e){e===void 0&&(e=oj);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:u,transformOrigin:h}=Ot(t).getComputedStyle(t);u&&(n=ij(n,u,h))}const{top:r,left:s,width:i,height:o,bottom:l,right:c}=n;return{top:r,left:s,width:i,height:o,bottom:l,right:c}}function n0(t){return wi(t,{ignoreTransform:!0})}function lj(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function aj(t,e){return e===void 0&&(e=Ot(t).getComputedStyle(t)),e.position==="fixed"}function cj(t,e){e===void 0&&(e=Ot(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const i=e[s];return typeof i=="string"?n.test(i):!1})}function wp(t,e){const n=[];function r(s){if(e!=null&&n.length>=e||!s)return n;if(vp(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!sl(s)||ab(s)||n.includes(s))return n;const i=Ot(t).getComputedStyle(s);return s!==t&&cj(s,i)&&n.push(s),aj(s,i)?n:r(s.parentNode)}return t?r(t):n}function pb(t){const[e]=wp(t,1);return e??null}function Hu(t){return!Uc||!t?null:xi(t)?t:yp(t)?vp(t)||t===bi(t).scrollingElement?window:sl(t)?t:null:null}function mb(t){return xi(t)?t.scrollX:t.scrollLeft}function _b(t){return xi(t)?t.scrollY:t.scrollTop}function _h(t){return{x:mb(t),y:_b(t)}}var qe;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(qe||(qe={}));function gb(t){return!Uc||!t?!1:t===document.scrollingElement}function yb(t){const e={x:0,y:0},n=gb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},s=t.scrollTop<=e.y,i=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,l=t.scrollLeft>=r.x;return{isTop:s,isLeft:i,isBottom:o,isRight:l,maxScroll:r,minScroll:e}}const uj={x:.2,y:.2};function dj(t,e,n,r,s){let{top:i,left:o,right:l,bottom:c}=n;r===void 0&&(r=10),s===void 0&&(s=uj);const{isTop:u,isBottom:h,isLeft:d,isRight:f}=yb(t),m={x:0,y:0},v={x:0,y:0},w={height:e.height*s.y,width:e.width*s.x};return!u&&i<=e.top+w.height?(m.y=qe.Backward,v.y=r*Math.abs((e.top+w.height-i)/w.height)):!h&&c>=e.bottom-w.height&&(m.y=qe.Forward,v.y=r*Math.abs((e.bottom-w.height-c)/w.height)),!f&&l>=e.right-w.width?(m.x=qe.Forward,v.x=r*Math.abs((e.right-w.width-l)/w.width)):!d&&o<=e.left+w.width&&(m.x=qe.Backward,v.x=r*Math.abs((e.left+w.width-o)/w.width)),{direction:m,speed:v}}function hj(t){if(t===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:e,left:n,right:r,bottom:s}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:s,width:t.clientWidth,height:t.clientHeight}}function vb(t){return t.reduce((e,n)=>Xs(e,_h(n)),_n)}function fj(t){return t.reduce((e,n)=>e+mb(n),0)}function pj(t){return t.reduce((e,n)=>e+_b(n),0)}function mj(t,e){if(e===void 0&&(e=wi),!t)return;const{top:n,left:r,bottom:s,right:i}=e(t);pb(t)&&(s<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const _j=[["x",["left","right"],fj],["y",["top","bottom"],pj]];class kp{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=wp(n),s=vb(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,l]of _j)for(const c of o)Object.defineProperty(this,c,{get:()=>{const u=l(r),h=s[i]-u;return this.rect[c]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ro{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var s;(s=this.target)==null||s.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function gj(t){const{EventTarget:e}=Ot(t);return t instanceof e?t:bi(t)}function Vu(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Yt;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Yt||(Yt={}));function r0(t){t.preventDefault()}function yj(t){t.stopPropagation()}var de;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(de||(de={}));const xb={start:[de.Space,de.Enter],cancel:[de.Esc],end:[de.Space,de.Enter,de.Tab]},vj=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case de.Right:return{...n,x:n.x+25};case de.Left:return{...n,x:n.x-25};case de.Down:return{...n,y:n.y+25};case de.Up:return{...n,y:n.y-25}}};class bb{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new ro(bi(n)),this.windowListeners=new ro(Ot(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Yt.Resize,this.handleCancel),this.windowListeners.add(Yt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Yt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&mj(r),n(_n)}handleKeyDown(e){if(bp(e)){const{active:n,context:r,options:s}=this.props,{keyboardCodes:i=xb,coordinateGetter:o=vj,scrollBehavior:l="smooth"}=s,{code:c}=e;if(i.end.includes(c)){this.handleEnd(e);return}if(i.cancel.includes(c)){this.handleCancel(e);return}const{collisionRect:u}=r.current,h=u?{x:u.left,y:u.top}:_n;this.referenceCoordinates||(this.referenceCoordinates=h);const d=o(e,{active:n,context:r.current,currentCoordinates:h});if(d){const f=Ja(d,h),m={x:0,y:0},{scrollableAncestors:v}=r.current;for(const w of v){const k=e.code,{isTop:_,isRight:p,isLeft:y,isBottom:b,maxScroll:E,minScroll:x}=yb(w),C=hj(w),S={x:Math.min(k===de.Right?C.right-C.width/2:C.right,Math.max(k===de.Right?C.left:C.left+C.width/2,d.x)),y:Math.min(k===de.Down?C.bottom-C.height/2:C.bottom,Math.max(k===de.Down?C.top:C.top+C.height/2,d.y))},P=k===de.Right&&!p||k===de.Left&&!y,N=k===de.Down&&!b||k===de.Up&&!_;if(P&&S.x!==d.x){const I=w.scrollLeft+f.x,T=k===de.Right&&I<=E.x||k===de.Left&&I>=x.x;if(T&&!f.y){w.scrollTo({left:I,behavior:l});return}T?m.x=w.scrollLeft-I:m.x=k===de.Right?w.scrollLeft-E.x:w.scrollLeft-x.x,m.x&&w.scrollBy({left:-m.x,behavior:l});break}else if(N&&S.y!==d.y){const I=w.scrollTop+f.y,T=k===de.Down&&I<=E.y||k===de.Up&&I>=x.y;if(T&&!f.x){w.scrollTo({top:I,behavior:l});return}T?m.y=w.scrollTop-I:m.y=k===de.Down?w.scrollTop-E.y:w.scrollTop-x.y,m.y&&w.scrollBy({top:-m.y,behavior:l});break}}this.handleMove(e,Xs(Ja(d,this.referenceCoordinates),m))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}bb.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=xb,onActivation:s}=e,{active:i}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const l=i.activatorNode.current;return l&&t.target!==l?!1:(t.preventDefault(),s==null||s({event:t.nativeEvent}),!0)}return!1}}];function s0(t){return!!(t&&"distance"in t)}function i0(t){return!!(t&&"delay"in t)}class Cp{constructor(e,n,r){var s;r===void 0&&(r=gj(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:i}=e,{target:o}=i;this.props=e,this.events=n,this.document=bi(o),this.documentListeners=new ro(this.document),this.listeners=new ro(r),this.windowListeners=new ro(Ot(o)),this.initialCoordinates=(s=mh(i))!=null?s:_n,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Yt.Resize,this.handleCancel),this.windowListeners.add(Yt.DragStart,r0),this.windowListeners.add(Yt.VisibilityChange,this.handleCancel),this.windowListeners.add(Yt.ContextMenu,r0),this.documentListeners.add(Yt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(i0(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(s0(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:s}=this.props;s(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Yt.Click,yj,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Yt.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:s,props:i}=this,{onMove:o,options:{activationConstraint:l}}=i;if(!s)return;const c=(n=mh(e))!=null?n:_n,u=Ja(s,c);if(!r&&l){if(s0(l)){if(l.tolerance!=null&&Vu(u,l.tolerance))return this.handleCancel();if(Vu(u,l.distance))return this.handleStart()}if(i0(l)&&Vu(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}e.cancelable&&e.preventDefault(),o(c)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===de.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const xj={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class zc extends Cp{constructor(e){const{event:n}=e,r=bi(n.target);super(e,xj,r)}}zc.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const bj={move:{name:"mousemove"},end:{name:"mouseup"}};var gh;(function(t){t[t.RightClick=2]="RightClick"})(gh||(gh={}));class wj extends Cp{constructor(e){super(e,bj,bi(e.event.target))}}wj.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===gh.RightClick?!1:(r==null||r({event:n}),!0)}}];const Yu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Sp extends Cp{constructor(e){super(e,Yu)}static setup(){return window.addEventListener(Yu.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Yu.move.name,e)};function e(){}}}Sp.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:s}=n;return s.length>1?!1:(r==null||r({event:n}),!0)}}];var so;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(so||(so={}));var tc;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(tc||(tc={}));function kj(t){let{acceleration:e,activator:n=so.Pointer,canScroll:r,draggingRect:s,enabled:i,interval:o=5,order:l=tc.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:h,delta:d,threshold:f}=t;const m=Sj({delta:d,disabled:!i}),[v,w]=DR(),k=g.useRef({x:0,y:0}),_=g.useRef({x:0,y:0}),p=g.useMemo(()=>{switch(n){case so.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case so.DraggableRect:return s}},[n,s,c]),y=g.useRef(null),b=g.useCallback(()=>{const x=y.current;if(!x)return;const C=k.current.x*_.current.x,S=k.current.y*_.current.y;x.scrollBy(C,S)},[]),E=g.useMemo(()=>l===tc.TreeOrder?[...u].reverse():u,[l,u]);g.useEffect(()=>{if(!i||!u.length||!p){w();return}for(const x of E){if((r==null?void 0:r(x))===!1)continue;const C=u.indexOf(x),S=h[C];if(!S)continue;const{direction:P,speed:N}=dj(x,S,p,e,f);for(const I of["x","y"])m[I][P[I]]||(N[I]=0,P[I]=0);if(N.x>0||N.y>0){w(),y.current=x,v(b,o),k.current=N,_.current=P;return}}k.current={x:0,y:0},_.current={x:0,y:0},w()},[e,b,r,w,i,o,JSON.stringify(p),JSON.stringify(m),v,u,E,h,JSON.stringify(f)])}const Cj={x:{[qe.Backward]:!1,[qe.Forward]:!1},y:{[qe.Backward]:!1,[qe.Forward]:!1}};function Sj(t){let{delta:e,disabled:n}=t;const r=ph(e);return il(s=>{if(n||!r||!s)return Cj;const i={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[qe.Backward]:s.x[qe.Backward]||i.x===-1,[qe.Forward]:s.x[qe.Forward]||i.x===1},y:{[qe.Backward]:s.y[qe.Backward]||i.y===-1,[qe.Forward]:s.y[qe.Forward]||i.y===1}}},[n,e,r])}function Nj(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return il(s=>{var i;return e==null?null:(i=r??s)!=null?i:null},[r,e])}function Ij(t,e){return g.useMemo(()=>t.reduce((n,r)=>{const{sensor:s}=r,i=s.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...i]},[]),[t,e])}var Bo;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Bo||(Bo={}));var yh;(function(t){t.Optimized="optimized"})(yh||(yh={}));const o0=new Map;function Ej(t,e){let{dragging:n,dependencies:r,config:s}=e;const[i,o]=g.useState(null),{frequency:l,measure:c,strategy:u}=s,h=g.useRef(t),d=k(),f=Fo(d),m=g.useCallback(function(_){_===void 0&&(_=[]),!f.current&&o(p=>p===null?_:p.concat(_.filter(y=>!p.includes(y))))},[f]),v=g.useRef(null),w=il(_=>{if(d&&!n)return o0;if(!_||_===o0||h.current!==t||i!=null){const p=new Map;for(let y of t){if(!y)continue;if(i&&i.length>0&&!i.includes(y.id)&&y.rect.current){p.set(y.id,y.rect.current);continue}const b=y.node.current,E=b?new kp(c(b),b):null;y.rect.current=E,E&&p.set(y.id,E)}return p}return _},[t,i,n,d,c]);return g.useEffect(()=>{h.current=t},[t]),g.useEffect(()=>{d||m()},[n,d]),g.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),g.useEffect(()=>{d||typeof l!="number"||v.current!==null||(v.current=setTimeout(()=>{m(),v.current=null},l))},[l,d,m,...r]),{droppableRects:w,measureDroppableContainers:m,measuringScheduled:i!=null};function k(){switch(u){case Bo.Always:return!1;case Bo.BeforeDragging:return n;default:return!n}}}function wb(t,e){return il(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function Tj(t,e){return wb(t,e)}function Rj(t){let{callback:e,disabled:n}=t;const r=xp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Fc(t){let{callback:e,disabled:n}=t;const r=xp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function jj(t){return new kp(wi(t),t)}function l0(t,e,n){e===void 0&&(e=jj);const[r,s]=g.useState(null);function i(){s(c=>{if(!t)return null;if(t.isConnected===!1){var u;return(u=c??n)!=null?u:null}const h=e(t);return JSON.stringify(c)===JSON.stringify(h)?c:h})}const o=Rj({callback(c){if(t)for(const u of c){const{type:h,target:d}=u;if(h==="childList"&&d instanceof HTMLElement&&d.contains(t)){i();break}}}}),l=Fc({callback:i});return En(()=>{i(),t?(l==null||l.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),o==null||o.disconnect())},[t]),r}function Pj(t){const e=wb(t);return fb(t,e)}const a0=[];function Aj(t){const e=g.useRef(t),n=il(r=>t?r&&r!==a0&&t&&e.current&&t.parentNode===e.current.parentNode?r:wp(t):a0,[t]);return g.useEffect(()=>{e.current=t},[t]),n}function Lj(t){const[e,n]=g.useState(null),r=g.useRef(t),s=g.useCallback(i=>{const o=Hu(i.target);o&&n(l=>l?(l.set(o,_h(o)),new Map(l)):null)},[]);return g.useEffect(()=>{const i=r.current;if(t!==i){o(i);const l=t.map(c=>{const u=Hu(c);return u?(u.addEventListener("scroll",s,{passive:!0}),[u,_h(u)]):null}).filter(c=>c!=null);n(l.length?new Map(l):null),r.current=t}return()=>{o(t),o(i)};function o(l){l.forEach(c=>{const u=Hu(c);u==null||u.removeEventListener("scroll",s)})}},[s,t]),g.useMemo(()=>t.length?e?Array.from(e.values()).reduce((i,o)=>Xs(i,o),_n):vb(t):_n,[t,e])}function c0(t,e){e===void 0&&(e=[]);const n=g.useRef(null);return g.useEffect(()=>{n.current=null},e),g.useEffect(()=>{const r=t!==_n;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Ja(t,n.current):_n}function Oj(t){g.useEffect(()=>{if(!Uc)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function Dj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{let{eventName:s,handler:i}=r;return n[s]=o=>{i(o,e)},n},{}),[t,e])}function kb(t){return g.useMemo(()=>t?lj(t):null,[t])}const u0=[];function Mj(t,e){e===void 0&&(e=wi);const[n]=t,r=kb(n?Ot(n):null),[s,i]=g.useState(u0);function o(){i(()=>t.length?t.map(c=>gb(c)?r:new kp(e(c),c)):u0)}const l=Fc({callback:o});return En(()=>{l==null||l.disconnect(),o(),t.forEach(c=>l==null?void 0:l.observe(c))},[t]),s}function Uj(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return sl(e)?e:t}function zj(t){let{measure:e}=t;const[n,r]=g.useState(null),s=g.useCallback(u=>{for(const{target:h}of u)if(sl(h)){r(d=>{const f=e(h);return d?{...d,width:f.width,height:f.height}:f});break}},[e]),i=Fc({callback:s}),o=g.useCallback(u=>{const h=Uj(u);i==null||i.disconnect(),h&&(i==null||i.observe(h)),r(h?e(h):null)},[e,i]),[l,c]=qa(o);return g.useMemo(()=>({nodeRef:l,rect:n,setRef:c}),[n,l,c])}const Fj=[{sensor:zc,options:{}},{sensor:bb,options:{}}],Bj={current:{}},na={draggable:{measure:n0},droppable:{measure:n0,strategy:Bo.WhileDragging,frequency:yh.Optimized},dragOverlay:{measure:wi}};class io extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const $j={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new io,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Za},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:na,measureDroppableContainers:Za,windowRect:null,measuringScheduled:!1},Wj={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Za,draggableNodes:new Map,over:null,measureDroppableContainers:Za},Bc=g.createContext(Wj),Cb=g.createContext($j);function Hj(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new io}}}function Vj(t,e){switch(e.type){case We.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case We.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case We.DragEnd:case We.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case We.RegisterDroppable:{const{element:n}=e,{id:r}=n,s=new io(t.droppable.containers);return s.set(r,n),{...t,droppable:{...t.droppable,containers:s}}}case We.SetDroppableDisabled:{const{id:n,key:r,disabled:s}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const o=new io(t.droppable.containers);return o.set(n,{...i,disabled:s}),{...t,droppable:{...t.droppable,containers:o}}}case We.UnregisterDroppable:{const{id:n,key:r}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const i=new io(t.droppable.containers);return i.delete(n),{...t,droppable:{...t.droppable,containers:i}}}default:return t}}function Yj(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:s}=g.useContext(Bc),i=ph(r),o=ph(n==null?void 0:n.id);return g.useEffect(()=>{if(!e&&!r&&i&&o!=null){if(!bp(i)||document.activeElement===i.target)return;const l=s.get(o);if(!l)return;const{activatorNode:c,node:u}=l;if(!c.current&&!u.current)return;requestAnimationFrame(()=>{for(const h of[c.current,u.current]){if(!h)continue;const d=zR(h);if(d){d.focus();break}}})}},[r,e,s,o,i]),null}function Qj(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((s,i)=>i({transform:s,...r}),n):n}function Gj(t){return g.useMemo(()=>({draggable:{...na.draggable,...t==null?void 0:t.draggable},droppable:{...na.droppable,...t==null?void 0:t.droppable},dragOverlay:{...na.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function Xj(t){let{activeNode:e,measure:n,initialRect:r,config:s=!0}=t;const i=g.useRef(!1),{x:o,y:l}=typeof s=="boolean"?{x:s,y:s}:s;En(()=>{if(!o&&!l||!e){i.current=!1;return}if(i.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const h=n(u),d=fb(h,r);if(o||(d.x=0),l||(d.y=0),i.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const f=pb(u);f&&f.scrollBy({top:d.y,left:d.x})}},[e,o,l,r,n])}const Sb=g.createContext({..._n,scaleX:1,scaleY:1});var ar;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(ar||(ar={}));const Nb=g.memo(function(e){var n,r,s,i;let{id:o,accessibility:l,autoScroll:c=!0,children:u,sensors:h=Fj,collisionDetection:d=ej,measuring:f,modifiers:m,...v}=e;const w=g.useReducer(Vj,void 0,Hj),[k,_]=w,[p,y]=VR(),[b,E]=g.useState(ar.Uninitialized),x=b===ar.Initialized,{draggable:{active:C,nodes:S,translate:P},droppable:{containers:N}}=k,I=C!=null?S.get(C):null,T=g.useRef({initial:null,translated:null}),L=g.useMemo(()=>{var Ue;return C!=null?{id:C,data:(Ue=I==null?void 0:I.data)!=null?Ue:Bj,rect:T}:null},[C,I]),z=g.useRef(null),[B,K]=g.useState(null),[Y,j]=g.useState(null),O=Fo(v,Object.values(v)),V=ol("DndDescribedBy",o),X=g.useMemo(()=>N.getEnabled(),[N]),q=Gj(f),{droppableRects:te,measureDroppableContainers:ve,measuringScheduled:Ze}=Ej(X,{dragging:x,dependencies:[P.x,P.y],config:q.droppable}),xe=Nj(S,C),Nt=g.useMemo(()=>Y?mh(Y):null,[Y]),Dt=Qc(),A=Tj(xe,q.draggable.measure);Xj({activeNode:C!=null?S.get(C):null,config:Dt.layoutShiftCompensation,initialRect:A,measure:q.draggable.measure});const F=l0(xe,q.draggable.measure,A),ae=l0(xe?xe.parentElement:null),ne=g.useRef({activatorEvent:null,active:null,activeNode:xe,collisionRect:null,collisions:null,droppableRects:te,draggableNodes:S,draggingNode:null,draggingNodeRect:null,droppableContainers:N,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),re=N.getNodeFor((n=ne.current.over)==null?void 0:n.id),Oe=zj({measure:q.dragOverlay.measure}),et=(r=Oe.nodeRef.current)!=null?r:xe,Z=x?(s=Oe.rect)!=null?s:F:null,ft=!!(Oe.nodeRef.current&&Oe.rect),Me=Pj(ft?null:F),It=kb(et?Ot(et):null),Et=Aj(x?re??xe:null),gn=Mj(Et),tr=Qj(m,{transform:{x:P.x-Me.x,y:P.y-Me.y,scaleX:1,scaleY:1},activatorEvent:Y,active:L,activeNodeRect:F,containerNodeRect:ae,draggingNodeRect:Z,over:ne.current.over,overlayNodeRect:Oe.rect,scrollableAncestors:Et,scrollableAncestorRects:gn,windowRect:It}),vs=Nt?Xs(Nt,P):null,tn=Lj(Et),Vt=c0(tn),Wc=c0(tn,[F]),Rn=Xs(tr,Vt),nr=Z?rj(Z,tr):null,Fr=L&&nr?d({active:L,collisionRect:nr,droppableRects:te,droppableContainers:X,pointerCoordinates:vs}):null,ll=JR(Fr,"id"),[nn,al]=g.useState(null),Hc=ft?tr:Xs(tr,Wc),cl=tj(Hc,(i=nn==null?void 0:nn.rect)!=null?i:null,F),ki=g.useRef(null),ul=g.useCallback((Ue,pt)=>{let{sensor:mt,options:rn}=pt;if(z.current==null)return;const _t=S.get(z.current);if(!_t)return;const lt=Ue.nativeEvent,Mt=new mt({active:z.current,activeNode:_t,event:lt,options:rn,context:ne,onAbort(R){if(!S.get(R))return;const{onDragAbort:$}=O.current,Q={id:R};$==null||$(Q),p({type:"onDragAbort",event:Q})},onPending(R,U,$,Q){if(!S.get(R))return;const{onDragPending:Qe}=O.current,be={id:R,constraint:U,initialCoordinates:$,offset:Q};Qe==null||Qe(be),p({type:"onDragPending",event:be})},onStart(R){const U=z.current;if(U==null)return;const $=S.get(U);if(!$)return;const{onDragStart:Q}=O.current,ee={activatorEvent:lt,active:{id:U,data:$.data,rect:T}};Ds.unstable_batchedUpdates(()=>{Q==null||Q(ee),E(ar.Initializing),_({type:We.DragStart,initialCoordinates:R,active:U}),p({type:"onDragStart",event:ee}),K(ki.current),j(lt)})},onMove(R){_({type:We.DragMove,coordinates:R})},onEnd:jn(We.DragEnd),onCancel:jn(We.DragCancel)});ki.current=Mt;function jn(R){return async function(){const{active:$,collisions:Q,over:ee,scrollAdjustedTranslate:Qe}=ne.current;let be=null;if($&&Qe){const{cancelDrop:Be}=O.current;be={activatorEvent:lt,active:$,collisions:Q,delta:Qe,over:ee},R===We.DragEnd&&typeof Be=="function"&&await Promise.resolve(Be(be))&&(R=We.DragCancel)}z.current=null,Ds.unstable_batchedUpdates(()=>{_({type:R}),E(ar.Uninitialized),al(null),K(null),j(null),ki.current=null;const Be=R===We.DragEnd?"onDragEnd":"onDragCancel";if(be){const Gc=O.current[Be];Gc==null||Gc(be),p({type:Be,event:be})}})}}},[S]),dl=g.useCallback((Ue,pt)=>(mt,rn)=>{const _t=mt.nativeEvent,lt=S.get(rn);if(z.current!==null||!lt||_t.dndKit||_t.defaultPrevented)return;const Mt={active:lt};Ue(mt,pt.options,Mt)===!0&&(_t.dndKit={capturedBy:pt.sensor},z.current=rn,ul(mt,pt))},[S,ul]),hl=Ij(h,dl);Oj(h),En(()=>{F&&b===ar.Initializing&&E(ar.Initialized)},[F,b]),g.useEffect(()=>{const{onDragMove:Ue}=O.current,{active:pt,activatorEvent:mt,collisions:rn,over:_t}=ne.current;if(!pt||!mt)return;const lt={active:pt,activatorEvent:mt,collisions:rn,delta:{x:Rn.x,y:Rn.y},over:_t};Ds.unstable_batchedUpdates(()=>{Ue==null||Ue(lt),p({type:"onDragMove",event:lt})})},[Rn.x,Rn.y]),g.useEffect(()=>{const{active:Ue,activatorEvent:pt,collisions:mt,droppableContainers:rn,scrollAdjustedTranslate:_t}=ne.current;if(!Ue||z.current==null||!pt||!_t)return;const{onDragOver:lt}=O.current,Mt=rn.get(ll),jn=Mt&&Mt.rect.current?{id:Mt.id,rect:Mt.rect.current,data:Mt.data,disabled:Mt.disabled}:null,R={active:Ue,activatorEvent:pt,collisions:mt,delta:{x:_t.x,y:_t.y},over:jn};Ds.unstable_batchedUpdates(()=>{al(jn),lt==null||lt(R),p({type:"onDragOver",event:R})})},[ll]),En(()=>{ne.current={activatorEvent:Y,active:L,activeNode:xe,collisionRect:nr,collisions:Fr,droppableRects:te,draggableNodes:S,draggingNode:et,draggingNodeRect:Z,droppableContainers:N,over:nn,scrollableAncestors:Et,scrollAdjustedTranslate:Rn},T.current={initial:Z,translated:nr}},[L,xe,Fr,nr,S,et,Z,te,N,nn,Et,Rn]),kj({...Dt,delta:P,draggingRect:nr,pointerCoordinates:vs,scrollableAncestors:Et,scrollableAncestorRects:gn});const Vc=g.useMemo(()=>({active:L,activeNode:xe,activeNodeRect:F,activatorEvent:Y,collisions:Fr,containerNodeRect:ae,dragOverlay:Oe,draggableNodes:S,droppableContainers:N,droppableRects:te,over:nn,measureDroppableContainers:ve,scrollableAncestors:Et,scrollableAncestorRects:gn,measuringConfiguration:q,measuringScheduled:Ze,windowRect:It}),[L,xe,F,Y,Fr,ae,Oe,S,N,te,nn,ve,Et,gn,q,Ze,It]),Yc=g.useMemo(()=>({activatorEvent:Y,activators:hl,active:L,activeNodeRect:F,ariaDescribedById:{draggable:V},dispatch:_,draggableNodes:S,over:nn,measureDroppableContainers:ve}),[Y,hl,L,F,_,V,S,nn,ve]);return ut.createElement(ub.Provider,{value:y},ut.createElement(Bc.Provider,{value:Yc},ut.createElement(Cb.Provider,{value:Vc},ut.createElement(Sb.Provider,{value:cl},u)),ut.createElement(Yj,{disabled:(l==null?void 0:l.restoreFocus)===!1})),ut.createElement(GR,{...l,hiddenTextDescribedById:V}));function Qc(){const Ue=(B==null?void 0:B.autoScrollEnabled)===!1,pt=typeof c=="object"?c.enabled===!1:c===!1,mt=x&&!Ue&&!pt;return typeof c=="object"?{...c,enabled:mt}:{enabled:mt}}}),Kj=g.createContext(null),d0="button",qj="Draggable";function Jj(t){let{id:e,data:n,disabled:r=!1,attributes:s}=t;const i=ol(qj),{activators:o,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:h,draggableNodes:d,over:f}=g.useContext(Bc),{role:m=d0,roleDescription:v="draggable",tabIndex:w=0}=s??{},k=(c==null?void 0:c.id)===e,_=g.useContext(k?Sb:Kj),[p,y]=qa(),[b,E]=qa(),x=Dj(o,e),C=Fo(n);En(()=>(d.set(e,{id:e,key:i,node:p,activatorNode:b,data:C}),()=>{const P=d.get(e);P&&P.key===i&&d.delete(e)}),[d,e]);const S=g.useMemo(()=>({role:m,tabIndex:w,"aria-disabled":r,"aria-pressed":k&&m===d0?!0:void 0,"aria-roledescription":v,"aria-describedby":h.draggable}),[r,m,w,k,v,h.draggable]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:S,isDragging:k,listeners:r?void 0:x,node:p,over:f,setNodeRef:y,setActivatorNodeRef:E,transform:_}}function Zj(){return g.useContext(Cb)}const eP="Droppable",tP={timeout:25};function nP(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:s}=t;const i=ol(eP),{active:o,dispatch:l,over:c,measureDroppableContainers:u}=g.useContext(Bc),h=g.useRef({disabled:n}),d=g.useRef(!1),f=g.useRef(null),m=g.useRef(null),{disabled:v,updateMeasurementsFor:w,timeout:k}={...tP,...s},_=Fo(w??r),p=g.useCallback(()=>{if(!d.current){d.current=!0;return}m.current!=null&&clearTimeout(m.current),m.current=setTimeout(()=>{u(Array.isArray(_.current)?_.current:[_.current]),m.current=null},k)},[k]),y=Fc({callback:p,disabled:v||!o}),b=g.useCallback((S,P)=>{y&&(P&&(y.unobserve(P),d.current=!1),S&&y.observe(S))},[y]),[E,x]=qa(b),C=Fo(e);return g.useEffect(()=>{!y||!E.current||(y.disconnect(),d.current=!1,y.observe(E.current))},[E,y]),g.useEffect(()=>(l({type:We.RegisterDroppable,element:{id:r,key:i,disabled:n,node:E,rect:f,data:C}}),()=>l({type:We.UnregisterDroppable,key:i,id:r})),[r]),g.useEffect(()=>{n!==h.current.disabled&&(l({type:We.SetDroppableDisabled,id:r,key:i,disabled:n}),h.current.disabled=n)},[r,i,n,l]),{active:o,rect:f,isOver:(c==null?void 0:c.id)===r,node:E,over:c,setNodeRef:x}}function $c(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function rP(t,e){return t.reduce((n,r,s)=>{const i=e.get(r);return i&&(n[s]=i),n},Array(t.length))}function Ol(t){return t!==null&&t>=0}function sP(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function iP(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const Ib=t=>{let{rects:e,activeIndex:n,overIndex:r,index:s}=t;const i=$c(e,r,n),o=e[s],l=i[s];return!l||!o?null:{x:l.left-o.left,y:l.top-o.top,scaleX:l.width/o.width,scaleY:l.height/o.height}},Dl={scaleX:1,scaleY:1},Eb=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:s,rects:i,overIndex:o}=t;const l=(e=i[n])!=null?e:r;if(!l)return null;if(s===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(l.top+l.height):u.top-l.top,...Dl}:null}const c=oP(i,s,n);return s>n&&s<=o?{x:0,y:-l.height-c,...Dl}:s<n&&s>=o?{x:0,y:l.height+c,...Dl}:{x:0,y:0,...Dl}};function oP(t,e,n){const r=t[e],s=t[e-1],i=t[e+1];return r?n<e?s?r.top-(s.top+s.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):s?r.top-(s.top+s.height):0:0}const Tb="Sortable",Rb=ut.createContext({activeIndex:-1,containerId:Tb,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ib,disabled:{draggable:!1,droppable:!1}});function jb(t){let{children:e,id:n,items:r,strategy:s=Ib,disabled:i=!1}=t;const{active:o,dragOverlay:l,droppableRects:c,over:u,measureDroppableContainers:h}=Zj(),d=ol(Tb,n),f=l.rect!==null,m=g.useMemo(()=>r.map(x=>typeof x=="object"&&"id"in x?x.id:x),[r]),v=o!=null,w=o?m.indexOf(o.id):-1,k=u?m.indexOf(u.id):-1,_=g.useRef(m),p=!sP(m,_.current),y=k!==-1&&w===-1||p,b=iP(i);En(()=>{p&&v&&h(m)},[p,m,v,h]),g.useEffect(()=>{_.current=m},[m]);const E=g.useMemo(()=>({activeIndex:w,containerId:d,disabled:b,disableTransforms:y,items:m,overIndex:k,useDragOverlay:f,sortedRects:rP(m,c),strategy:s}),[w,d,b.draggable,b.droppable,y,m,k,c,f,s]);return ut.createElement(Rb.Provider,{value:E},e)}const lP=t=>{let{id:e,items:n,activeIndex:r,overIndex:s}=t;return $c(n,r,s).indexOf(e)},aP=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:s,items:i,newIndex:o,previousItems:l,previousContainerId:c,transition:u}=t;return!u||!r||l!==i&&s===o?!1:n?!0:o!==s&&e===c},cP={duration:200,easing:"ease"},Pb="transform",uP=ui.Transition.toString({property:Pb,duration:0,easing:"linear"}),dP={roleDescription:"sortable"};function hP(t){let{disabled:e,index:n,node:r,rect:s}=t;const[i,o]=g.useState(null),l=g.useRef(n);return En(()=>{if(!e&&n!==l.current&&r.current){const c=s.current;if(c){const u=wi(r.current,{ignoreTransform:!0}),h={x:c.left-u.left,y:c.top-u.top,scaleX:c.width/u.width,scaleY:c.height/u.height};(h.x||h.y)&&o(h)}}n!==l.current&&(l.current=n)},[e,n,r,s]),g.useEffect(()=>{i&&o(null)},[i]),i}function Ab(t){let{animateLayoutChanges:e=aP,attributes:n,disabled:r,data:s,getNewIndex:i=lP,id:o,strategy:l,resizeObserverConfig:c,transition:u=cP}=t;const{items:h,containerId:d,activeIndex:f,disabled:m,disableTransforms:v,sortedRects:w,overIndex:k,useDragOverlay:_,strategy:p}=g.useContext(Rb),y=fP(r,m),b=h.indexOf(o),E=g.useMemo(()=>({sortable:{containerId:d,index:b,items:h},...s}),[d,s,b,h]),x=g.useMemo(()=>h.slice(h.indexOf(o)),[h,o]),{rect:C,node:S,isOver:P,setNodeRef:N}=nP({id:o,data:E,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:x,...c}}),{active:I,activatorEvent:T,activeNodeRect:L,attributes:z,setNodeRef:B,listeners:K,isDragging:Y,over:j,setActivatorNodeRef:O,transform:V}=Jj({id:o,data:E,attributes:{...dP,...n},disabled:y.draggable}),X=OR(N,B),q=!!I,te=q&&!v&&Ol(f)&&Ol(k),ve=!_&&Y,Ze=ve&&te?V:null,Nt=te?Ze??(l??p)({rects:w,activeNodeRect:L,activeIndex:f,overIndex:k,index:b}):null,Dt=Ol(f)&&Ol(k)?i({id:o,items:h,activeIndex:f,overIndex:k}):b,A=I==null?void 0:I.id,F=g.useRef({activeId:A,items:h,newIndex:Dt,containerId:d}),ae=h!==F.current.items,ne=e({active:I,containerId:d,isDragging:Y,isSorting:q,id:o,index:b,items:h,newIndex:F.current.newIndex,previousItems:F.current.items,previousContainerId:F.current.containerId,transition:u,wasDragging:F.current.activeId!=null}),re=hP({disabled:!ne,index:b,node:S,rect:C});return g.useEffect(()=>{q&&F.current.newIndex!==Dt&&(F.current.newIndex=Dt),d!==F.current.containerId&&(F.current.containerId=d),h!==F.current.items&&(F.current.items=h)},[q,Dt,d,h]),g.useEffect(()=>{if(A===F.current.activeId)return;if(A!=null&&F.current.activeId==null){F.current.activeId=A;return}const et=setTimeout(()=>{F.current.activeId=A},50);return()=>clearTimeout(et)},[A]),{active:I,activeIndex:f,attributes:z,data:E,rect:C,index:b,newIndex:Dt,items:h,isOver:P,isSorting:q,isDragging:Y,listeners:K,node:S,overIndex:k,over:j,setNodeRef:X,setActivatorNodeRef:O,setDroppableNodeRef:N,setDraggableNodeRef:B,transform:re??Nt,transition:Oe()};function Oe(){if(re||ae&&F.current.newIndex===b)return uP;if(!(ve&&!bp(T)||!u)&&(q||ne))return ui.Transition.toString({...u,property:Pb})}}function fP(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}de.Down,de.Right,de.Up,de.Left;const h0={"clipboard-list":hh,footprints:g4,briefcase:FT,plane:iR,"person-standing":rR,backpack:LT,umbrella:ER,tent:SR,target:kR,"shopping-cart":gR,shirt:mR,dumbbell:u4,mountain:K4,baby:DT,camera:Dc,heart:C4,music:J4,"book-open":UT,coffee:s4,gift:b4},f0={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function pP(t){return f0[t]?h0[f0[t]]||hh:h0[t]||hh}function oo({name:t,size:e=20,className:n=""}){const r=pP(t);return a.jsx(r,{size:e,className:n})}function mP({message:t,onUndo:e,onDismiss:n}){const r=g.useRef(null);return g.useEffect(()=>(r.current=setTimeout(n,4e3),()=>clearTimeout(r.current)),[t,n]),a.jsxs("div",{className:"fixed left-4 right-4 bottom-[calc(4rem+env(safe-area-inset-bottom)+0.5rem)] z-50 flex items-center justify-between bg-slate-800 dark:bg-slate-700 text-white rounded-xl px-4 py-3 shadow-lg animate-slide-up",children:[a.jsx("span",{className:"text-sm truncate mr-3",children:t}),a.jsx("button",{onClick:()=>{clearTimeout(r.current),e()},className:"text-sm font-semibold text-indigo-300 active:text-indigo-200 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center",children:"復原"})]})}function _P(t,e=800,n=.7){return new Promise((r,s)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:c}=i;(l>e||c>e)&&(l>c?(c=Math.round(c*e/l),l=e):(l=Math.round(l*e/c),c=e));const u=document.createElement("canvas");u.width=l,u.height=c,u.getContext("2d").drawImage(i,0,0,l,c),u.toBlob(d=>{if(!d){s(new Error("Canvas toBlob failed"));return}r(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),s(new Error("Failed to load image"))},i.src=o})}function Np(t){const[e,n]=g.useState(!1),[r,s]=g.useState(null);return{uploadPhoto:async(l,c)=>{if(!t)throw new Error("Not logged in");n(!0),s(null);try{const u=await _P(c),h=`users/${t.uid}/items/${l}/photo.jpg`,d=X_(K_,h);return await uT(d,u,{contentType:"image/jpeg"}),await dT(d)}catch(u){throw s(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const c=`users/${t.uid}/items/${l}/photo.jpg`,u=X_(K_,c);await hT(u)}catch(c){c.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",c)}},uploading:e,error:r}}function Ml({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function gP(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return a.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>a.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"animate-celebration-text text-center",children:[a.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),a.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function yP({item:t}){const{attributes:e,listeners:n,setNodeRef:r,transform:s,transition:i,isDragging:o}=Ab({id:t.id}),l={transform:ui.Transform.toString(s),transition:i,zIndex:o?50:void 0,position:"relative"};return a.jsx("div",{ref:r,style:l,children:a.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${o?"shadow-lg opacity-90":""}`,children:[a.jsx("div",{...e,...n,className:"w-6 h-6 mr-4 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:a.jsx(nb,{size:20})}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx("div",{className:"text-lg text-slate-800 dark:text-slate-100",children:t.name})})]})})}function vP({item:t,onSave:e,onDelete:n,onClose:r}){const[s,i]=g.useState(t.name),[o,l]=g.useState(t.note||"");return a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:r,children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:c=>c.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"編輯物品"}),a.jsx("button",{onClick:()=>n(t.id),className:"text-sm text-rose-500 px-3 py-1.5 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"從清單移除"})]}),a.jsx("input",{type:"text",value:s,onChange:c=>i(c.target.value),placeholder:"物品名稱",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("input",{type:"text",value:o,onChange:c=>l(c.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:r,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:()=>e(t.id,{name:s.trim()||t.name,note:o}),className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"儲存"})]})]})})}function xP({data:t,user:e,syncStatus:n,onLogin:r,onLogout:s,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:c,categories:u=[]}){var lt,Mt,jn;const[h,d]=g.useState([]),[f,m]=g.useState(null),[v,w]=g.useState(null),[k,_]=g.useState([]),[p,y]=g.useState(!1),[b,E]=g.useState("default"),[x,C]=g.useState(!1),[S,P]=g.useState(""),[N,I]=g.useState(u[0]||""),[T,L]=g.useState(null),[z,B]=g.useState(""),[K,Y]=g.useState(null),[j,O]=g.useState(null),[V,X]=g.useState(!1),[q,te]=g.useState(null),[ve,Ze]=g.useState(null),xe=g.useRef(null),{uploadPhoto:Nt,deletePhoto:Dt,uploading:A}=Np(e),F=c&&((lt=l==null?void 0:l.sharedWithMe)==null?void 0:lt[c]),ae=c&&((Mt=l==null?void 0:l.sharedByMe)==null?void 0:Mt[c]),ne=F?"shared-with-me":ae?"own-shared":"local",re=F?l.sharedWithMe[c]:ae?l.sharedByMe[c]:null,Oe=ne!=="shared-with-me"||(()=>{if(!(e!=null&&e.email)||!(re!=null&&re.sharedWith))return!1;const R=lr(e.email);return re.sharedWith[R]==="edit"})(),et=(jn=t.lists)==null?void 0:jn.find(R=>R.id===t.activeListId),Z=et?{...et,items:Array.isArray(et.items)?et.items:[],checkedItems:Array.isArray(et.checkedItems)?et.checkedItems:[],inlineItems:Array.isArray(et.inlineItems)?et.inlineItems:[]}:null,ft=!!(Z!=null&&Z.disposable);let Me=[],It=[],Et="",gn="",tr="";ne==="shared-with-me"&&re?(Me=(re.items||[]).filter(Boolean),It=re.checkedItems||[],Et=re.name||"清單",gn=re.icon||"clipboard-list",tr=re.ownerName||re.ownerEmail||""):ne==="own-shared"&&Z&&re?(ft?Me=Z.inlineItems:Me=Z.items.map(R=>{var U;return(U=t.itemLibrary)==null?void 0:U.find($=>$.id===R)}).filter(Boolean),It=re.checkedItems||[],Et=Z.name||"清單",gn=Z.icon||"clipboard-list"):ft&&Z?(Me=Z.inlineItems,It=Z.checkedItems,Et=Z.name||"清單",gn=Z.icon||"clipboard-list"):(Me=Z?Z.items.map(R=>{var U;return(U=t.itemLibrary)==null?void 0:U.find($=>$.id===R)}).filter(Boolean):[],It=(Z==null?void 0:Z.checkedItems)||[],Et=(Z==null?void 0:Z.name)||"清單",gn=(Z==null?void 0:Z.icon)||"clipboard-list");const vs=It.length,tn=Me.length,Vt=tn>0&&vs===tn,Wc=tn>0?vs/tn*100:0,Rn=g.useRef(Vt);g.useEffect(()=>{if(Vt&&!Rn.current){y(!0);const R=setTimeout(()=>y(!1),2500);return()=>clearTimeout(R)}Rn.current=Vt},[Vt]);const nr=(()=>{const R=[],U={};return Me.forEach($=>{const Q=$.category||"其他";U[Q]||(U[Q]=[]),U[Q].push($)}),u.forEach($=>{U[$]&&(R.push({category:$,items:U[$]}),delete U[$])}),Object.keys(U).forEach($=>{R.push({category:$,items:U[$]})}),R})(),Fr=b==="name"?[...Me].sort((R,U)=>R.name.localeCompare(U.name,"zh-Hant")):b==="unchecked"?[...Me].sort((R,U)=>{const $=It.includes(R.id)?1:0,Q=It.includes(U.id)?1:0;return $-Q}):Me,ll=()=>{E(R=>R==="default"?"name":R==="name"?"unchecked":R==="unchecked"?ne==="shared-with-me"?"default":"manual":"default")},nn=b==="name"?"名稱":b==="unchecked"?"未勾選":b==="manual"?"手動":"",al=db(ec(zc,{activationConstraint:{distance:5}}),ec(Sp,{activationConstraint:{delay:150,tolerance:5}})),Hc=R=>{const{active:U,over:$}=R;if(!$||U.id===$.id)return;const Q=Z.items.indexOf(U.id),ee=Z.items.indexOf($.id);if(Q===-1||ee===-1)return;const Qe=$c(Z.items,Q,ee),be={...t,lists:t.lists.map(Be=>Be.id===t.activeListId?{...Be,items:Qe}:Be)};o(be)},cl=(R,U)=>{w(R);const $=It.includes(R);if(ne==="shared-with-me"||ne==="own-shared")l.toggleSharedCheck(c,R);else{const Q={...t,lists:t.lists.map(ee=>{if(ee.id!==t.activeListId)return ee;const Qe=Array.isArray(ee.checkedItems)?ee.checkedItems:[],be=Qe.includes(R);return{...ee,checkedItems:be?Qe.filter(Be=>Be!==R):[...Qe,R]}})};o(Q)}if(!U){const Q=Me.find(ee=>ee.id===R);Q&&L({itemId:R,itemName:Q.name,isChecked:!$})}},ki=()=>{if(ne==="shared-with-me"||ne==="own-shared")l.resetSharedChecks(c);else{const R={...t,lists:t.lists.map(U=>U.id===t.activeListId?{...U,checkedItems:[]}:U)};o(R)}},ul=()=>{if(ne==="shared-with-me"||ne==="own-shared"){const R=Me.map(U=>U.id);l.checkAllShared(c,R)}else{if(!Z)return;const R={...t,lists:t.lists.map(U=>U.id===t.activeListId?{...U,checkedItems:[...Z.items]}:U)};o(R)}},dl=async(R,U)=>{if(!Z||!R.trim())return;const $="d_"+Date.now();let Q;if(U&&e)try{Q=await Nt($,U)}catch{}const ee={id:$,name:R.trim(),...Q&&{photoURL:Q}},Qe={...t,lists:t.lists.map(be=>be.id===t.activeListId?{...be,inlineItems:[...Array.isArray(be.inlineItems)?be.inlineItems:[],ee]}:be)};o(Qe)},hl=R=>{if(!Z)return;const U=(Z.inlineItems||[]).find(Q=>Q.id===R);U!=null&&U.photoURL&&Dt(R);const $={...t,lists:t.lists.map(Q=>Q.id!==t.activeListId?Q:{...Q,inlineItems:(Q.inlineItems||[]).filter(ee=>ee.id!==R),checkedItems:(Q.checkedItems||[]).filter(ee=>ee!==R)})};o($)},Vc=(R,U)=>{if(ne==="shared-with-me"){const Q=((re==null?void 0:re.items)||[]).map(ee=>String(ee.id)===String(R)?{...ee,...U}:ee);l.updateSharedListItems(c,Q)}else if(ft){const $={...t,lists:t.lists.map(Q=>Q.id!==t.activeListId?Q:{...Q,inlineItems:(Q.inlineItems||[]).map(ee=>ee.id===R?{...ee,...U}:ee)})};o($)}else{const $={...t,itemLibrary:t.itemLibrary.map(Q=>Q.id===R?{...Q,...U}:Q)};o($)}te(null)},Yc=R=>{if(ne==="shared-with-me")l.removeSharedItem(c,R);else if(ft)hl(R);else{const U={...t,lists:t.lists.map($=>$.id!==t.activeListId?$:{...$,items:($.items||[]).filter(Q=>Q!==R),checkedItems:($.checkedItems||[]).filter(Q=>Q!==R)})};o(U)}te(null),Ze(null)},Qc=()=>{const R=t.lists.filter($=>$.id!==t.activeListId),U={...t,lists:R,activeListId:R.length>0?R[0].id:t.activeListId};o(U),i("lists")},Ue=g.useRef(!1);g.useEffect(()=>{if(ft&&Vt&&tn>0&&!Ue.current){const R=setTimeout(()=>X(!0),2600);return Ue.current=!0,()=>clearTimeout(R)}Vt||(Ue.current=!1)},[ft,Vt,tn]);const pt=R=>{d(U=>U.includes(R)?U.filter($=>$!==R):[...U,R])},mt=R=>{_(U=>U.includes(R)?U.filter($=>$!==R):[...U,R])},rn=()=>{const R=S.trim();if(R){if(ne==="shared-with-me"){const $={id:"shared_item_"+Date.now(),name:R,category:N};l.addSharedItem(c,$)}else{if(!Z)return;const U="item_"+Date.now(),$={id:U,name:R,category:N},Q={...t,itemLibrary:[...t.itemLibrary||[],$],lists:t.lists.map(ee=>ee.id!==t.activeListId?ee:{...ee,items:[...Array.isArray(ee.items)?ee.items:[],U]})};o(Q)}P(""),C(!1)}},_t=R=>{var be;const U=It.includes(R.id),$=(be=R.note)==null?void 0:be.trim(),Q=$||R.photoURL,ee=h.includes(R.id),Qe=v===R.id;return a.jsxs("div",{children:[a.jsxs("div",{onClick:()=>cl(R.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${U?"bg-slate-50 dark:bg-slate-800/50":""} ${Q&&ee?"rounded-b-none border-b-0":""}`,children:[a.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${U?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}
              ${Qe&&U?"animate-check-bounce":""}`,onAnimationEnd:()=>w(null),children:U&&a.jsx(fs,{size:14,className:`text-white ${Qe?"animate-check-icon-in":""}`})}),R.photoURL&&a.jsx("img",{src:R.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Be=>{Be.target.style.display="none"}}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx("div",{className:`text-lg transition-all duration-300 ${U?"line-through text-slate-400 dark:text-slate-500 opacity-60":"text-slate-800 dark:text-slate-100"}`,children:R.name})}),Q&&a.jsx("button",{onClick:Be=>{Be.stopPropagation(),pt(R.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${ee?"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400":"text-slate-400"}`,"aria-label":"展開詳情",children:a.jsx(dh,{size:18,className:`transition-transform duration-200 ${ee?"rotate-180":""}`})}),Oe&&a.jsx("button",{onClick:Be=>{Be.stopPropagation(),te(R)},className:"p-2 text-slate-400 active:text-indigo-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"編輯物品",children:a.jsx(sb,{size:16})})]}),Q&&ee&&a.jsxs("div",{className:"px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl",children:[$&&a.jsxs("div",{className:"flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2",children:[a.jsx(ib,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),a.jsx("span",{children:R.note})]}),R.photoURL&&a.jsx("div",{className:$?"mt-2":"",children:a.jsx("img",{src:R.photoURL,alt:R.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Be=>{Be.target.style.display="none"}})})]})]},R.id)};return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[a.jsx("button",{onClick:()=>i("lists"),className:"p-1 -ml-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0","aria-label":"返回所有清單",children:a.jsx(XT,{size:22,className:"text-slate-500 dark:text-slate-400"})}),a.jsx(oo,{name:gn,size:22,className:"text-indigo-600 dark:text-indigo-400 flex-shrink-0"}),a.jsx("span",{className:"text-lg font-bold truncate",children:Et}),ne==="shared-with-me"&&tr&&a.jsxs("span",{className:"text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0",children:["來自 ",tr]}),ft&&a.jsx("span",{className:"text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex-shrink-0",children:"一次性"}),ne==="own-shared"&&a.jsx("span",{className:"text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"flex items-center flex-shrink-0",children:[Me.length>0&&a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("button",{onClick:ll,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                    ${b!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:a.jsx(eb,{size:20})}),nn&&a.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:nn})]}),ne!=="shared-with-me"&&!ft&&a.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:a.jsx(qn,{size:22,className:"text-indigo-600 dark:text-indigo-400"})})]})]}),tn>0&&a.jsxs("div",{className:"mt-3",children:[a.jsxs("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1",children:[a.jsx("span",{children:"完成進度"}),a.jsxs("span",{children:[vs,"/",tn]})]}),a.jsx("div",{className:"h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300",style:{width:`${Wc}%`}})})]})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[Me.length===0?a.jsxs("div",{className:"text-center py-16 text-slate-400",children:[a.jsx(N4,{size:48,className:"mx-auto mb-4 text-slate-300 dark:text-slate-600"}),a.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),ft?a.jsx("div",{className:"text-sm",children:"點右下角按鈕新增項目"}):ne!=="shared-with-me"?a.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150",children:"從物品庫加入物品"}):null]}):a.jsx("div",{className:"space-y-4",children:b==="manual"?a.jsx(Nb,{sensors:al,collisionDetection:hb,onDragEnd:Hc,children:a.jsx(jb,{items:Me.map(R=>R.id),strategy:Eb,children:a.jsx("div",{className:"space-y-2",children:Me.map(R=>a.jsx(yP,{item:R},R.id))})})}):b==="default"&&!ft?nr.map(({category:R,items:U})=>{const $=k.includes(R),Q=U.filter(be=>It.includes(be.id)).length,ee=U.length,Qe=Q===ee;return a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>mt(R),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[a.jsx(dh,{size:16,className:`text-slate-400 transition-transform duration-200 ${$?"-rotate-90":""}`}),a.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:R}),a.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${Qe?"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,children:[Q,"/",ee]})]}),!$&&a.jsx("div",{className:"space-y-2 animate-slide-down",children:U.map(be=>_t(be))})]},R)}):a.jsx("div",{className:"space-y-2",children:Fr.map(R=>_t(R))})}),Me.length>0&&a.jsx("div",{className:"pt-4 pb-16",children:a.jsxs("div",{className:"flex gap-3",children:[a.jsxs("button",{onClick:()=>m("reset"),className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:[a.jsx(aR,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),a.jsxs("button",{onClick:()=>m("checkAll"),disabled:Vt,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${Vt?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400":"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600"}`,children:[a.jsx(VT,{size:16,className:"inline mr-1.5 -mt-0.5"}),Vt?"準備完成！":"全部確認"]})]})})]}),f==="reset"&&a.jsx(Ml,{message:"確定要重設所有勾選？",onConfirm:()=>{ki(),m(null)},onCancel:()=>m(null)}),f==="checkAll"&&a.jsx(Ml,{message:"確定要勾選全部項目？",onConfirm:()=>{ul(),m(null)},onCancel:()=>m(null)}),p&&a.jsx(gP,{}),q&&a.jsx(vP,{item:q,onSave:Vc,onDelete:R=>{te(null),Ze(R)},onClose:()=>te(null)}),ve!==null&&a.jsx(Ml,{message:"確定要從清單移除此物品？",onConfirm:()=>Yc(ve),onCancel:()=>Ze(null)}),Oe&&a.jsxs(a.Fragment,{children:[x&&a.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{C(!1),P(""),B(""),j&&URL.revokeObjectURL(j),Y(null),O(null)}}),x&&a.jsxs("div",{className:"fixed right-4 bottom-24 z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:ft?"新增項目":"快速新增物品"}),ft?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",placeholder:"項目名稱",value:z,onChange:R=>B(R.target.value),onKeyDown:async R=>{R.key==="Enter"&&z.trim()&&(await dl(z,K),B(""),j&&URL.revokeObjectURL(j),Y(null),O(null))},className:"w-full pl-3 pr-9 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),e&&a.jsx("button",{type:"button",onClick:()=>{var R;return(R=xe.current)==null?void 0:R.click()},className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-0.5 flex items-center justify-center","aria-label":"拍照",children:a.jsx(Dc,{size:16})})]}),a.jsx("input",{ref:xe,type:"file",accept:"image/*",onChange:R=>{var $;const U=($=R.target.files)==null?void 0:$[0];U&&(j&&URL.revokeObjectURL(j),Y(U),O(URL.createObjectURL(U)),R.target.value="")},className:"hidden"}),j&&a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("img",{src:j,alt:"預覽",className:"w-12 h-12 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsx("button",{onClick:()=>{URL.revokeObjectURL(j),Y(null),O(null)},className:"text-xs text-rose-500 px-2 py-1 border border-rose-200 dark:border-rose-800 rounded-lg",children:"移除"})]}),a.jsxs("button",{onClick:async()=>{z.trim()&&(await dl(z,K),B(""),j&&URL.revokeObjectURL(j),Y(null),O(null))},disabled:!z.trim()||A,className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150 flex items-center justify-center gap-1.5",children:[A&&a.jsx(gp,{size:14,className:"animate-spin"}),A?"上傳中...":"新增"]})]}):a.jsxs(a.Fragment,{children:[a.jsx("input",{type:"text",placeholder:"物品名稱",value:S,onChange:R=>P(R.target.value),onKeyDown:R=>{R.key==="Enter"&&rn()},className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("select",{value:N,onChange:R=>I(R.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:u.map(R=>a.jsx("option",{value:R,children:R},R))}),a.jsx("button",{onClick:rn,disabled:!S.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]})]}),a.jsx("button",{onClick:()=>{C(R=>!R),x&&(P(""),B(""),j&&URL.revokeObjectURL(j),Y(null),O(null))},className:"fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":x?"關閉新增表單":"新增項目",children:x?a.jsx(wt,{size:24}):a.jsx(qn,{size:24})})]}),T&&a.jsx(mP,{message:T.isChecked?`✓ 已勾選 ${T.itemName}`:`已取消勾選 ${T.itemName}`,onUndo:()=>{cl(T.itemId,!0),L(null)},onDismiss:()=>L(null)}),V&&a.jsx(Ml,{message:"清單完成！要刪除嗎？",onConfirm:()=>{X(!1),Qc()},onCancel:()=>X(!1)})]})}function bP({sharedData:t,onAddUser:e,onRemoveUser:n,onSetPermission:r,onUnshare:s,onClose:i}){const[o,l]=g.useState(""),[c,u]=g.useState(""),h=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(uh):[],d=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),f=()=>{const v=o.trim().toLowerCase();if(v){if(!d(v)){u("請輸入有效的 Email");return}if(h.includes(v)){u("已經分享給此帳號");return}u(""),e(v),l("")}},m=v=>{v.key==="Enter"&&f()};return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"分享清單"}),a.jsxs("div",{className:"flex gap-2 mb-2",children:[a.jsx("input",{type:"email",value:o,onChange:v=>{l(v.target.value),u("")},onKeyDown:m,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:f,className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),c&&a.jsx("div",{className:"text-sm text-rose-500 mb-3",children:c}),h.length>0&&a.jsxs("div",{className:"mt-4",children:[a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2",children:"已分享給"}),a.jsx("div",{className:"space-y-2",children:h.map(v=>{var _;const w=lr(v),k=((_=t==null?void 0:t.sharedWith)==null?void 0:_[w])||"view";return a.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600",children:[a.jsx("span",{className:"text-slate-700 dark:text-slate-200 text-sm truncate flex-1",children:v}),a.jsx("button",{onClick:()=>r(v,k==="edit"?"view":"edit"),className:`ml-2 p-2 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150
                          ${k==="edit"?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-slate-400"}`,"aria-label":k==="edit"?"切換為檢視":"切換為編輯",title:k==="edit"?"可編輯":"僅檢視",children:k==="edit"?a.jsx(sb,{size:16}):a.jsx(p4,{size:16})}),a.jsx("button",{onClick:()=>n(v),className:"ml-1 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:a.jsx(wt,{size:16})})]},v)})})]}),h.length>0&&a.jsx("button",{onClick:s,className:"w-full mt-4 py-3 border border-rose-300 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),a.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})}function wP({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function kP({list:t,isActive:e}){const{attributes:n,listeners:r,setNodeRef:s,transform:i,transition:o,isDragging:l}=Ab({id:t.id}),c={transform:ui.Transform.toString(i),transition:o,zIndex:l?50:void 0,position:"relative"},u=t.disposable?(t.inlineItems||[]).length:(t.items||[]).length,h=(t.checkedItems||[]).length,d=!!t.sharedListId;return a.jsx("div",{ref:s,style:c,children:a.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${l?"shadow-lg opacity-90":""} ${e?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{...n,...r,className:"w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:a.jsx(nb,{size:20})}),a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(oo,{name:t.icon,size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[a.jsx("span",{className:"truncate",children:t.name}),d&&a.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"text-sm text-slate-400",children:[h,"/",u," 已確認"]})]})]})})}function CP({data:t,user:e,onNavigate:n,onSaveData:r,shared:s}){var Dt;const[i,o]=g.useState(""),[l,c]=g.useState("clipboard-list"),[u,h]=g.useState(!1),[d,f]=g.useState(null),[m,v]=g.useState(null),[w,k]=g.useState(null),[_,p]=g.useState(!1),[y,b]=g.useState(""),[E,x]=g.useState("default"),[C,S]=g.useState(null),P=(A,F)=>{const ae={...t,activeListId:A};r(ae),n("checklist",{sharedListId:F||null})},N=A=>{n("checklist",{sharedListId:A})},I=()=>{if(!i.trim())return;const A={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[],...u?{disposable:!0,inlineItems:[]}:{}},F={...t,lists:[...t.lists,A],activeListId:A.id};r(F),o(""),c("clipboard-list"),h(!1),p(!1),n("checklist",{sharedListId:null})},T=async A=>{if(t.lists.length<=1)return;const F=t.lists.find(re=>re.id===A);if(F!=null&&F.sharedListId&&s)try{await s.unshareList(F.sharedListId)}catch(re){console.error("清理分享資料失敗",re)}const ae=t.lists.filter(re=>re.id!==A),ne={...t,lists:ae,activeListId:t.activeListId===A?ae[0].id:t.activeListId};r(ne),k(null)},L=(A,F)=>{F.stopPropagation(),!(t.lists.length<=1)&&k(A)},z=(A,F)=>{F.stopPropagation(),f(A.id),v(A.sharedListId||null)},B=async A=>{const F=t.lists.find(ae=>ae.id===d);if(!(!F||!s))try{const ae=await s.shareList(F,t.itemLibrary,[A]),ne={...t,lists:t.lists.map(re=>re.id===d?{...re,sharedListId:ae}:re)};r(ne),v(ae)}catch(ae){console.error("分享失敗",ae),alert("分享失敗："+ae.message)}},K=async A=>{if(m)try{await s.addSharedUser(m,A)}catch(F){console.error("新增分享對象失敗",F)}else await B(A)},Y=async A=>{if(!(!m||!s))try{await s.removeSharedUser(m,A)}catch(F){console.error("移除分享對象失敗",F)}},j=async(A,F)=>{if(m&&s)try{await s.setUserPermission(m,A,F)}catch(ae){console.error("設定權限失敗",ae)}},O=async()=>{if(!(!m||!s))try{await s.unshareList(m);const A={...t,lists:t.lists.map(F=>F.id===d?{...F,sharedListId:void 0}:F)};r(A),f(null),v(null)}catch(A){console.error("停止分享失敗",A)}},V=()=>{x(A=>A==="default"?"name":A==="name"?"progress":A==="progress"?"manual":"default")},X=E==="name"?"名稱":E==="progress"?"完成度":E==="manual"?"手動":"",q=db(ec(zc,{activationConstraint:{distance:5}}),ec(Sp,{activationConstraint:{delay:150,tolerance:5}})),te=A=>{const{active:F,over:ae}=A;if(!ae||F.id===ae.id)return;const ne=t.lists||[],re=ne.findIndex(Z=>Z.id===F.id),Oe=ne.findIndex(Z=>Z.id===ae.id);if(re===-1||Oe===-1)return;const et=$c(ne,re,Oe);r({...t,lists:et})},ve=y.toLowerCase(),Ze=(t.lists||[]).filter(A=>!ve||A.name.toLowerCase().includes(ve)),xe=(()=>{if(E==="name")return[...Ze].sort((A,F)=>A.name.localeCompare(F.name,"zh-Hant"));if(E==="progress"){const A=F=>{const ae=F.disposable?(F.inlineItems||[]).length:(F.items||[]).length;return ae===0?0:(F.checkedItems||[]).length/ae};return[...Ze].sort((F,ae)=>A(F)-A(ae))}return Ze})(),Nt=(s?Object.entries(s.sharedWithMe):[]).filter(([,A])=>!ve||(A.name||"").toLowerCase().includes(ve));return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"}),a.jsxs("div",{className:"flex flex-col items-center w-10",children:[a.jsx("button",{onClick:V,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                ${E!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:a.jsx(eb,{size:20})}),X&&a.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:X})]})]})}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-4 pb-4 no-scrollbar",children:[a.jsx("div",{className:"mb-4",children:a.jsxs("div",{className:"relative",children:[a.jsx(zo,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:y,onChange:A=>b(A.target.value),placeholder:"搜尋清單...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),y&&a.jsx("button",{onClick:()=>b(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(wt,{size:16})})]})}),E==="manual"?a.jsx(Nb,{sensors:q,collisionDetection:hb,onDragEnd:te,children:a.jsx(jb,{items:(t.lists||[]).map(A=>A.id),strategy:Eb,children:a.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(A=>a.jsx(kP,{list:A,isActive:A.id===t.activeListId},A.id))})})}):a.jsx("div",{className:"space-y-2",children:xe.map(A=>{const F=A.disposable?(A.inlineItems||[]).length:(A.items||[]).length,ae=(A.checkedItems||[]).length,ne=A.id===t.activeListId,re=!!A.sharedListId;return a.jsxs("div",{onClick:()=>P(A.id,A.sharedListId),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                    ${ne?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(oo,{name:A.icon,size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[a.jsx("span",{className:"truncate",children:A.name}),A.disposable&&a.jsx("span",{className:"ml-2 text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex-shrink-0",children:"一次性"}),re&&a.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"text-sm text-slate-400",children:[ae,"/",F," 已確認"]})]}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{onClick:Oe=>{Oe.stopPropagation(),S(C===A.id?null:A.id)},className:"p-2 text-slate-400 dark:text-slate-500 active:bg-slate-100 dark:active:bg-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"更多操作",children:a.jsx(h4,{size:18})}),C===A.id&&a.jsxs("div",{className:"absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-50 min-w-[140px] py-1 overflow-hidden",children:[e&&a.jsxs("button",{onClick:Oe=>{z(A,Oe),S(null)},className:"w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(Mc,{size:16,className:re?"text-emerald-500":"text-slate-400"}),"分享"]}),t.lists.length>1&&a.jsxs("button",{onClick:Oe=>{L(A.id,Oe),S(null)},className:"w-full flex items-center gap-3 px-4 py-3 text-sm text-rose-500 active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[a.jsx(Rr,{size:16}),"刪除"]})]})]})]},A.id)})}),Nt.length>0&&a.jsxs("div",{className:"mt-6",children:[a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2 px-1",children:"與我分享的清單"}),a.jsx("div",{className:"space-y-2",children:Nt.map(([A,F])=>{const ae=(F.items||[]).length,ne=(F.checkedItems||[]).length;return a.jsxs("div",{onClick:()=>N(A),className:"flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(oo,{name:F.icon||"clipboard-list",size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-100",children:F.name}),a.jsxs("div",{className:"text-sm text-slate-400",children:[ne,"/",ae," 已確認",a.jsxs("span",{className:"ml-2 text-indigo-500 dark:text-indigo-400",children:["來自 ",F.ownerName||F.ownerEmail]})]})]})]},A)})})]}),a.jsx("div",{className:"mt-4",children:a.jsxs("button",{onClick:()=>p(!0),className:"w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 font-medium active:bg-slate-50 dark:active:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2",children:[a.jsx(qn,{size:18}),"新增清單"]})})]}),_&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{p(!1),o(""),c("clipboard-list"),h(!1)}}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"新增清單"}),a.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:qx.map(A=>a.jsx("button",{onClick:()=>c(A),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                      ${l===A?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400":"text-slate-500 dark:text-slate-400"}`,"aria-label":A,children:a.jsx(oo,{name:A,size:20})},A))}),a.jsxs("label",{className:"flex items-center justify-between mb-3 px-1",children:[a.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"一次性清單"}),a.jsx("button",{type:"button",role:"switch","aria-checked":u,onClick:()=>h(A=>!A),className:`relative w-11 h-6 rounded-full transition-colors duration-200 ${u?"bg-indigo-600 dark:bg-indigo-500":"bg-slate-300 dark:bg-slate-600"}`,children:a.jsx("span",{className:`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${u?"translate-x-5":""}`})})]}),u&&a.jsx("div",{className:"text-xs text-amber-600 dark:text-amber-400 mb-3 px-1",children:"純文字項目，用完即刪，不會加入物品庫"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:i,onChange:A=>o(A.target.value),onKeyDown:A=>{A.key==="Enter"&&I()},placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:I,className:"px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})})]}),d!==null&&a.jsx(bP,{sharedData:m&&((Dt=s==null?void 0:s.sharedByMe)==null?void 0:Dt[m])||null,onAddUser:K,onRemoveUser:Y,onSetPermission:j,onUnshare:O,onClose:()=>{f(null),v(null)}}),C!==null&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>S(null)}),w!==null&&a.jsx(wP,{message:"確定刪除此清單？",onConfirm:()=>T(w),onCancel:()=>k(null)})]})}function SP({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function NP({data:t,user:e,onNavigate:n,onSaveData:r,categories:s=[]}){var I;const[i,o]=g.useState(""),[l,c]=g.useState(""),[u,h]=g.useState(null),[d,f]=g.useState(null),[m,v]=g.useState(!1),[w,k]=g.useState(!1),_=t.spaces||[{id:"space_default",name:"個人空間"}],p=t.activeSpaceId||((I=_[0])==null?void 0:I.id),y=_.find(T=>T.id===p)||_[0];g.useEffect(()=>{const T=setTimeout(()=>c(i),300);return()=>clearTimeout(T)},[i]);const b=(t.itemLibrary||[]).filter(T=>T.spaceId===p),E=l?b.filter(T=>{var z,B;const L=l.toLowerCase();return((z=T.name)==null?void 0:z.toLowerCase().includes(L))||((B=T.note)==null?void 0:B.toLowerCase().includes(L))}):b,x=T=>{r({...t,activeSpaceId:T}),k(!1)},C=()=>{const T=prompt("輸入新空間名稱");if(!(T!=null&&T.trim()))return;const L={id:"space_"+Date.now(),name:T.trim()};r({...t,spaces:[..._,L]})},S=u?t.itemLibrary.find(T=>T.id===u):null,P=(T,L)=>{const z={...t,itemLibrary:t.itemLibrary.map(B=>B.id===T?{...B,...L}:B)};r(z),h(null)},N=T=>{const L={...t,itemLibrary:t.itemLibrary.filter(z=>z.id!==T),lists:t.lists.map(z=>({...z,items:(z.items||[]).filter(B=>B!==T),checkedItems:(z.checkedItems||[]).filter(B=>B!==T)}))};r(L),f(null)};return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex flex-col",children:[a.jsx("div",{className:"text-lg font-bold",children:"物品庫"}),a.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:[y.name,a.jsx(dh,{size:14})]})]})}),a.jsx("div",{className:"bg-white dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-700",children:a.jsxs("div",{className:"relative",children:[a.jsx(zo,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:i,onChange:T=>o(T.target.value),placeholder:`搜尋 ${b.length} 項物品`,className:"w-full pl-9 pr-8 py-2.5 text-sm bg-slate-100 dark:bg-slate-800 rounded-full text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-150"}),i&&a.jsx("button",{onClick:()=>o(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(wt,{size:16})})]})}),a.jsx("div",{className:"flex-1 overflow-y-auto no-scrollbar",children:E.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-20 text-slate-400 dark:text-slate-500",children:[a.jsx(zo,{size:40,className:"mb-3 opacity-50"}),a.jsx("p",{className:"text-sm",children:l?"找不到符合的物品":"尚未新增任何物品"})]}):a.jsx("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:E.map(T=>a.jsxs("div",{onClick:()=>h(T.id),className:"flex items-center px-4 py-3 active:bg-slate-50 dark:active:bg-slate-800 cursor-pointer transition-colors duration-150",children:[a.jsxs("div",{className:"flex-1 min-w-0 mr-3 flex items-center gap-2",children:[a.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-100 truncate",children:T.name}),T.location&&a.jsx("span",{className:"flex-shrink-0 text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full",children:T.location})]}),T.photoURL&&a.jsx("div",{className:"w-12 h-12 rounded-lg flex-shrink-0 overflow-hidden",onClick:L=>{L.stopPropagation(),window.open(T.photoURL,"_blank")},children:a.jsx("img",{src:T.photoURL,alt:"",className:"w-full h-full object-cover",loading:"lazy"})})]},T.id))})}),a.jsx("button",{onClick:()=>v(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":"新增物品",children:a.jsx(qn,{size:24})}),m&&a.jsx(IP,{data:t,user:e,spaces:_,activeSpaceId:p,categories:s,onSaveData:r,onClose:()=>v(!1)}),S&&a.jsx(EP,{item:S,user:e,data:t,spaces:_,onSave:P,onDelete:T=>{h(null),f(T)},onClose:()=>h(null)}),d!==null&&a.jsx(SP,{message:"確定刪除此物品？",onConfirm:()=>N(d),onCancel:()=>f(null)}),w&&a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>k(!1),children:a.jsx("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl safe-bottom animate-slide-up",onClick:T=>T.stopPropagation(),children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 text-center",children:"切換"}),a.jsx("div",{className:"space-y-1 mb-4",children:_.map(T=>a.jsxs("button",{onClick:()=>x(T.id),className:"w-full flex items-center gap-3 px-4 py-3 rounded-xl active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${T.id===p?"border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400":"border-slate-300 dark:border-slate-500"}`,children:T.id===p&&a.jsx(fs,{size:12,className:"text-white"})}),a.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-100",children:T.name})]},T.id))}),a.jsx("button",{onClick:C,className:"w-full py-3 text-sm text-indigo-600 dark:text-indigo-400 font-medium active:opacity-70 transition-opacity",children:"+ 新增其他空間"})]})})})]})}function IP({data:t,user:e,spaces:n,activeSpaceId:r,categories:s,onSaveData:i,onClose:o}){const[l,c]=g.useState(""),[u,h]=g.useState(r),[d,f]=g.useState(""),[m,v]=g.useState(""),[w,k]=g.useState(!1),[_,p]=g.useState(!1),[y,b]=g.useState(null),[E,x]=g.useState(null),[C,S]=g.useState(!1),P=g.useRef(null),{uploadPhoto:N,uploading:I}=Np(e),T=Y=>{var O;const j=(O=Y.target.files)==null?void 0:O[0];j&&(b(j),x(URL.createObjectURL(j)),Y.target.value="")},L=()=>{E&&URL.revokeObjectURL(E),b(null),x(null)},z=()=>{L(),o()},B=async()=>{if(!l.trim())return;S(!0);const Y=Date.now();let j;if(y&&e)try{j=await N(Y,y)}catch{}const O={id:Y,name:l.trim(),category:s[0]||"其他",note:m.trim(),location:d.trim(),spaceId:u,...j&&{photoURL:j}};i({...t,itemLibrary:[...t.itemLibrary,O]}),S(!1),z()},K=l.trim().length>0;return a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:z,children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:Y=>Y.stopPropagation(),children:[a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center mb-4",children:"新增物品"}),e&&a.jsx("input",{ref:P,type:"file",accept:"image/*",onChange:T,className:"hidden"}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1",children:"物品名稱"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx("input",{type:"text",value:l,onChange:Y=>c(Y.target.value),placeholder:"輸入完整以利搜尋",className:"w-full pl-4 pr-12 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5",children:[a.jsx("button",{type:"button",onClick:()=>alert("掃描功能即將推出"),className:"text-slate-400 p-0.5 flex items-center justify-center","aria-label":"掃描",children:a.jsx(uR,{size:18})}),!E&&e&&a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-slate-300 dark:text-slate-600 select-none",children:"|"}),a.jsx("button",{type:"button",onClick:()=>{var Y;return(Y=P.current)==null?void 0:Y.click()},className:"text-slate-400 p-0.5 flex items-center justify-center","aria-label":"拍照",children:a.jsx(Dc,{size:18})})]})]})]}),E&&a.jsxs("div",{className:"relative flex-shrink-0",children:[a.jsx("img",{src:E,alt:"預覽",className:"w-11 h-11 object-cover rounded-full"}),a.jsx("button",{onClick:L,className:"absolute -top-1 -right-1 w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center","aria-label":"移除照片",children:a.jsx(wt,{size:12,className:"text-white"})})]})]})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2",children:"空間"}),a.jsx("div",{className:"space-y-2",children:n.map(Y=>a.jsxs("button",{type:"button",onClick:()=>h(Y.id),className:"w-full flex items-center gap-3 py-1",children:[a.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150 ${u===Y.id?"border-indigo-600 dark:border-indigo-400 bg-indigo-600 dark:bg-indigo-400":"border-slate-300 dark:border-slate-500"}`,children:u===Y.id&&a.jsx(fs,{size:12,className:"text-white"})}),a.jsx("span",{className:"text-sm text-slate-700 dark:text-slate-300",children:Y.name})]},Y.id))})]}),a.jsxs("div",{className:"mb-4 space-y-3",children:[(!w||!_)&&a.jsxs("div",{className:"flex gap-3",children:[!w&&a.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 py-1.5 px-3 border border-slate-200 dark:border-slate-600 rounded-full",children:[a.jsx(F4,{size:14}),"+ 存放位置"]}),!_&&a.jsxs("button",{onClick:()=>p(!0),className:"flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 py-1.5 px-3 border border-slate-200 dark:border-slate-600 rounded-full",children:[a.jsx(ib,{size:14}),"+ 備註"]})]}),w&&a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1",children:"存放位置"}),a.jsx("textarea",{value:d,onChange:Y=>f(Y.target.value),rows:2,autoFocus:!0,className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150 resize-none"})]}),_&&a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1",children:"備註"}),a.jsx("textarea",{value:m,onChange:Y=>v(Y.target.value),rows:2,autoFocus:!w,className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150 resize-none"})]})]}),a.jsxs("button",{onClick:B,disabled:!K||C||I,className:`w-full py-3 rounded-full font-medium min-h-[44px] flex items-center justify-center gap-2 transition-colors duration-150 ${K?"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600":"bg-slate-200 dark:bg-slate-700 text-slate-400 dark:text-slate-500"} disabled:opacity-50`,children:[(C||I)&&a.jsx(gp,{size:18,className:"animate-spin"}),C||I?"新增中...":"新增"]})]})})}function EP({item:t,user:e,data:n,spaces:r,onSave:s,onDelete:i,onClose:o}){const[l,c]=g.useState(t.name),[u,h]=g.useState(t.note||""),[d,f]=g.useState(t.location||""),[m,v]=g.useState(t.photoURL||""),[w,k]=g.useState(null),[_,p]=g.useState(null),[y,b]=g.useState(!1),[E,x]=g.useState(!1),C=g.useRef(null),{uploadPhoto:S,deletePhoto:P}=Np(e),N=z=>{var K;const B=(K=z.target.files)==null?void 0:K[0];B&&(k(B),_&&URL.revokeObjectURL(_),p(URL.createObjectURL(B)),b(!1),z.target.value="")},I=()=>{_&&URL.revokeObjectURL(_),k(null),p(null),b(!0)},T=async()=>{x(!0);let z=m;if(y&&!w&&(t.photoURL&&P(t.id),z=""),w&&e)try{z=await S(t.id,w)}catch{z=y?"":m}s(t.id,{name:l,note:u,location:d,...z?{photoURL:z}:{photoURL:null}}),x(!1)},L=_||!y&&m;return a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:o,children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:z=>z.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"編輯物品"}),a.jsx("button",{onClick:()=>i(t.id),className:"text-sm text-rose-500 px-3 py-1.5 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"刪除"})]}),a.jsx("input",{type:"text",value:l,onChange:z=>c(z.target.value),placeholder:"物品名稱",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("input",{type:"text",value:d,onChange:z=>f(z.target.value),placeholder:"存放位置（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("input",{type:"text",value:u,onChange:z=>h(z.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-3 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&a.jsxs("div",{className:"mb-4",children:[a.jsx("input",{ref:C,type:"file",accept:"image/*",capture:"environment",onChange:N,className:"hidden"}),L?a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("img",{src:_||m,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:()=>{var z;return(z=C.current)==null?void 0:z.click()},className:"text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150",children:"更換照片"}),a.jsx("button",{onClick:I,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}):a.jsxs("button",{onClick:()=>{var z;return(z=C.current)==null?void 0:z.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(Dc,{size:18}),a.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:o,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsxs("button",{onClick:T,disabled:E,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[E&&a.jsx(gp,{size:18,className:"animate-spin"}),E?"儲存中...":"儲存"]})]})]})})}function TP({data:t,onNavigate:e,onSaveData:n,categories:r=[]}){var p,y;const[s,i]=g.useState(""),[o,l]=g.useState(!1),c=(p=t.lists)==null?void 0:p.find(b=>b.id===t.activeListId),u=c?{...c,items:Array.isArray(c.items)?c.items:[],checkedItems:Array.isArray(c.checkedItems)?c.checkedItems:[]}:null,h=((y=u==null?void 0:u.items)==null?void 0:y.length)||0,d={};r.forEach(b=>{d[b]=[]}),(t.itemLibrary||[]).forEach(b=>{d[b.category]&&d[b.category].push(b)});const f=b=>{const E={...t,lists:t.lists.map(x=>{if(x.id!==t.activeListId)return x;const C=Array.isArray(x.items)?x.items:[],S=Array.isArray(x.checkedItems)?x.checkedItems:[],P=C.includes(b);return{...x,items:P?C.filter(N=>N!==b):[...C,b],checkedItems:P?S.filter(N=>N!==b):S}})};n(E)},m=()=>{const b=s.trim();if(!b)return;const E="item_"+Date.now(),x={id:E,name:b,category:r[0]||"其他"},C={...t,itemLibrary:[...t.itemLibrary||[],x],lists:t.lists.map(S=>{if(S.id!==t.activeListId)return S;const P=Array.isArray(S.items)?S.items:[];return{...S,items:[...P,E]}})};n(C),i("")},v=s.trim(),w=v?(t.itemLibrary||[]).some(b=>{var E;return((E=b.name)==null?void 0:E.toLowerCase())===v.toLowerCase()}):!1,k=v!==""&&!w,_=(t.itemLibrary||[]).filter(b=>{var E;return(E=u==null?void 0:u.items)==null?void 0:E.includes(b.id)}).map(b=>b.name);return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsxs("div",{className:"text-lg font-bold truncate",children:["加入物品到 ",u==null?void 0:u.name]}),a.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"關閉",children:a.jsx(wt,{size:22,className:"text-slate-600 dark:text-slate-300"})})]})}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[a.jsx("div",{className:"mb-2",children:a.jsxs("div",{className:"relative",children:[a.jsx(zo,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:s,onChange:b=>i(b.target.value),placeholder:"搜尋物品名稱...",className:"w-full pl-9 pr-8 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),s&&a.jsx("button",{onClick:()=>i(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(wt,{size:16})})]})}),a.jsxs("button",{onClick:()=>l(b=>!b),className:"text-sm text-slate-500 dark:text-slate-400 py-2 flex items-center gap-1",children:["已選 ",h," 個 ",o?"▲":"▼"]}),o&&h>0&&a.jsx("div",{className:"bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 mb-2 space-y-1",children:_.map((b,E)=>a.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-400",children:b},E))}),r.map(b=>{const E=s?d[b].filter(x=>{var S,P,N,I;const C=s.toLowerCase();return((S=x.name)==null?void 0:S.toLowerCase().includes(C))||((P=x.category)==null?void 0:P.toLowerCase().includes(C))||((N=x.note)==null?void 0:N.toLowerCase().includes(C))||((I=x.location)==null?void 0:I.toLowerCase().includes(C))}):d[b];return E.length===0?null:a.jsxs("div",{className:"mb-4",children:[a.jsx("div",{className:"mb-2",children:a.jsx("span",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold",children:b})}),a.jsx("div",{className:"space-y-2",children:E.map(x=>{const C=u==null?void 0:u.items.includes(x.id);return a.jsxs("div",{onClick:()=>f(x.id),className:"flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[x.photoURL&&a.jsx("img",{src:x.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:S=>{S.target.style.display="none"}}),a.jsxs("div",{className:"flex-1 flex items-center gap-2 min-w-0 flex-wrap",children:[a.jsx("span",{className:`${C?"text-slate-800 dark:text-slate-100 font-medium":"text-slate-600 dark:text-slate-300"}`,children:x.name}),x.location&&a.jsx("span",{className:"text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 px-2 py-0.5 rounded-full flex-shrink-0",children:x.location})]}),a.jsx("button",{onClick:S=>{S.stopPropagation(),f(x.id)},className:`ml-3 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-150
                          ${C?"border-rose-500 text-rose-500":"border-indigo-500 text-indigo-500"}`,"aria-label":C?"從清單移除":"加入清單",children:C?a.jsx(H4,{size:16}):a.jsx(qn,{size:16})})]},x.id)})})]},b)}),k&&a.jsxs("button",{onClick:m,className:"text-indigo-600 dark:text-indigo-400 text-sm py-4 text-center w-full active:opacity-70 transition-opacity",children:["+ 建立新物品「",v,"」"]})]})]})}function RP({user:t,syncStatus:e,onLogin:n,onLogout:r,onNavigate:s,isAdmin:i,themePreference:o,onThemeChange:l}){const c={offline:{icon:e4,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50 dark:bg-slate-800"},syncing:{icon:L4,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50 dark:bg-amber-900/30"},synced:{icon:n4,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50 dark:bg-emerald-900/30"},error:{icon:qT,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50 dark:bg-rose-900/30"}},u=c[e]||c.offline,h=u.icon,d=[{value:"light",label:"淺色",icon:xR},{value:"system",label:"系統",icon:Y4},{value:"dark",label:"深色",icon:G4}];return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top",children:a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center",children:"設定"})}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-4 pb-4 no-scrollbar",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"帳號"}),t?a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&a.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:f=>f.target.style.display="none"}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-50 truncate",children:t.displayName||"使用者"}),a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 truncate",children:t.email})]})]}),a.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[a.jsx(U4,{size:18}),"登出"]})]}):a.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[a.jsx(D4,{size:18}),"使用 Google 登入"]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"同步狀態"}),a.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${u.bg}`,children:[a.jsx(h,{size:20,className:`${u.color} ${e==="syncing"?"animate-spin":""}`}),a.jsx("span",{className:`font-medium ${u.color}`,children:u.label})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"外觀"}),a.jsx("div",{className:"flex gap-2",children:d.map(({value:f,label:m,icon:v})=>a.jsxs("button",{onClick:()=>l(f),className:`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${o===f?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500":"bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600"}`,children:[a.jsx(v,{size:20}),m]},f))})]}),t&&i&&a.jsxs("button",{onClick:()=>s("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[a.jsx(rb,{size:18}),"管理後台"]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"關於"}),a.jsxs("div",{className:"text-sm text-slate-600 dark:text-slate-300",children:[a.jsxs("div",{className:"flex justify-between py-2",children:[a.jsx("span",{children:"應用程式"}),a.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"打包清單"})]}),a.jsx("div",{className:"border-t border-slate-100 dark:border-slate-700"}),a.jsxs("div",{className:"flex justify-between py-2",children:[a.jsx("span",{children:"版本"}),a.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"1.1.16"})]})]})]})]})]})}function Ul({icon:t,label:e,value:n,color:r="text-indigo-600"}){return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx(t,{size:20,className:r}),a.jsx("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:e})]}),a.jsx("div",{className:`text-3xl font-bold ${r}`,children:n})]})}function jP({data:t,shared:e}){const n=t.itemLibrary.length,r=t.lists.length,s=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,f)=>f[1]-d[1]),c={};t.itemLibrary.forEach(d=>{c[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(f=>{c[f]!==void 0&&c[f]++})});const u=Object.entries(c).sort((d,f)=>f[1]-d[1]).slice(0,5).map(([d,f])=>{const m=t.itemLibrary.find(v=>v.id===Number(d));return m?{name:m.name,count:f}:null}).filter(Boolean),h=l.length>0?l[0][1]:1;return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"數據總覽"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[a.jsx(Ul,{icon:Uo,label:"物品總數",value:n,color:"text-indigo-600"}),a.jsx(Ul,{icon:j4,label:"清單總數",value:r,color:"text-emerald-600"}),a.jsx(Ul,{icon:Mc,label:"已分享清單",value:s,color:"text-amber-600"}),a.jsx(Ul,{icon:lb,label:"收到分享",value:i,color:"text-rose-600"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(WT,{size:18,className:"text-slate-500 dark:text-slate-400"}),a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"分類統計"})]}),l.length===0?a.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):a.jsx("div",{className:"space-y-3",children:l.map(([d,f])=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[a.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:d}),a.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:f})]}),a.jsx("div",{className:"h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${f/h*100}%`}})})]},d))})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(Uo,{size:18,className:"text-slate-500 dark:text-slate-400"}),a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"最常使用物品 Top 5"})]}),u.length===0?a.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):a.jsx("div",{className:"space-y-2",children:u.map((d,f)=>a.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:f+1}),a.jsx("span",{className:"text-slate-800 dark:text-slate-100",children:d.name})]}),a.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:["出現在 ",d.count," 個清單"]})]},f))})]})]})]})}function PP({data:t,onSaveData:e,categories:n=[]}){const[r,s]=g.useState(""),[i,o]=g.useState(""),[l,c]=g.useState(new Set),[u,h]=g.useState(null),[d,f]=g.useState({name:"",category:"",note:""}),[m,v]=g.useState(""),[w,k]=g.useState(!1),_=g.useRef(null),p=t.itemLibrary.filter(I=>{const T=!r||I.name.toLowerCase().includes(r.toLowerCase())||(I.note||"").toLowerCase().includes(r.toLowerCase()),L=!i||I.category===i;return T&&L}),y=I=>{c(T=>{const L=new Set(T);return L.has(I)?L.delete(I):L.add(I),L})},b=()=>{l.size===p.length?c(new Set):c(new Set(p.map(I=>I.id)))},E=I=>{h(I.id),f({name:I.name,category:I.category,note:I.note||""})},x=()=>{const I=t.itemLibrary.map(T=>T.id===u?{...T,...d}:T);e({...t,itemLibrary:I}),h(null)},C=I=>{const T=new Set(I),L=t.itemLibrary.filter(B=>!T.has(B.id)),z=t.lists.map(B=>({...B,items:(B.items||[]).filter(K=>!T.has(K)),checkedItems:(B.checkedItems||[]).filter(K=>!T.has(K))}));e({...t,itemLibrary:L,lists:z}),c(new Set)},S=()=>{if(!m)return;const I=t.itemLibrary.map(T=>l.has(T.id)?{...T,category:m}:T);e({...t,itemLibrary:I}),c(new Set),k(!1),v("")},P=()=>{const I=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),T=URL.createObjectURL(I),L=document.createElement("a");L.href=T,L.download="item-library.json",L.click(),URL.revokeObjectURL(T)},N=I=>{var z;const T=(z=I.target.files)==null?void 0:z[0];if(!T)return;const L=new FileReader;L.onload=B=>{try{const K=JSON.parse(B.target.result);if(!Array.isArray(K)){alert("格式錯誤：需要 JSON 陣列");return}if(!K.every(te=>te.name&&te.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const j=Math.max(0,...t.itemLibrary.map(te=>te.id)),O=new Set(t.itemLibrary.map(te=>te.name)),V=K.filter(te=>!O.has(te.name)).map((te,ve)=>({id:te.id||j+ve+1,name:te.name,category:te.category,note:te.note||"",...te.photoURL?{photoURL:te.photoURL}:{}}));if(V.length===0){alert("沒有新物品可匯入（全部重複）");return}const X=new Set(t.itemLibrary.map(te=>te.id));let q=j+1;V.forEach(te=>{for(;X.has(q);)q++;te.id=q,X.add(q),q++}),e({...t,itemLibrary:[...t.itemLibrary,...V]}),alert(`已匯入 ${V.length} 個物品`)}catch{alert("JSON 解析失敗")}},L.readAsText(T),I.target.value=""};return a.jsxs("div",{children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"物品管理"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("button",{onClick:P,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[a.jsx(a4,{size:16})," 匯出"]}),a.jsxs("button",{onClick:()=>{var I;return(I=_.current)==null?void 0:I.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[a.jsx(RR,{size:16})," 匯入"]}),a.jsx("input",{ref:_,type:"file",accept:".json",onChange:N,className:"hidden"})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(zo,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",placeholder:"搜尋物品...",value:r,onChange:I=>s(I.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),a.jsxs("div",{className:"relative",children:[a.jsx(v4,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsxs("select",{value:i,onChange:I=>o(I.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[a.jsx("option",{value:"",children:"所有分類"}),n.map(I=>a.jsx("option",{value:I,children:I},I))]})]})]}),l.size>0&&a.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg",children:[a.jsxs("span",{className:"text-sm font-medium text-indigo-700 dark:text-indigo-400",children:["已選 ",l.size," 項"]}),a.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${l.size} 個物品？`)&&C([...l])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[a.jsx(Rr,{size:14})," 批量刪除"]}),w?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("select",{value:m,onChange:I=>v(I.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇分類"}),n.map(I=>a.jsx("option",{value:I,children:I},I))]}),a.jsx("button",{onClick:S,disabled:!m,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:a.jsx(fs,{size:14})}),a.jsx("button",{onClick:()=>{k(!1),v("")},className:"px-2 py-1.5 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:a.jsx(wt,{size:14})})]}):a.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[a.jsx(ob,{size:14})," 批量改分類"]})]}),a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700",children:a.jsxs("tr",{children:[a.jsx("th",{className:"w-10 px-4 py-3",children:a.jsx("input",{type:"checkbox",checked:p.length>0&&l.size===p.length,onChange:b,className:"rounded"})}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分類"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"備註"}),a.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),a.jsxs("tbody",{children:[p.map(I=>a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700",children:[a.jsx("td",{className:"px-4 py-3",children:a.jsx("input",{type:"checkbox",checked:l.has(I.id),onChange:()=>y(I.id),className:"rounded"})}),u===I.id?a.jsxs(a.Fragment,{children:[a.jsx("td",{className:"px-4 py-2",children:a.jsx("input",{value:d.name,onChange:T=>f(L=>({...L,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("select",{value:d.category,onChange:T=>f(L=>({...L,category:T.target.value})),className:"px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(T=>a.jsx("option",{value:T,children:T},T))})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("input",{value:d.note,onChange:T=>f(L=>({...L,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:x,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:a.jsx(fs,{size:16})}),a.jsx("button",{onClick:()=>h(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:a.jsx(wt,{size:16})})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("td",{className:"px-4 py-3 text-sm text-slate-800 dark:text-slate-100",children:I.name}),a.jsx("td",{className:"px-4 py-3",children:a.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:I.category})}),a.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:I.note||"-"}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>E(I),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:a.jsx(Ka,{size:16})}),a.jsx("button",{onClick:()=>{confirm(`刪除「${I.name}」？`)&&C([I.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:a.jsx(Rr,{size:16})})]})})]})]},I.id)),p.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),a.jsxs("div",{className:"lg:hidden space-y-2",children:[p.length===0&&a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),p.map(I=>a.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("input",{type:"checkbox",checked:l.has(I.id),onChange:()=>y(I.id),className:"mt-1 rounded"}),u===I.id?a.jsxs("div",{className:"flex-1 space-y-2",children:[a.jsx("input",{value:d.name,onChange:T=>f(L=>({...L,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("select",{value:d.category,onChange:T=>f(L=>({...L,category:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(T=>a.jsx("option",{value:T,children:T},T))}),a.jsx("input",{value:d.note,onChange:T=>f(L=>({...L,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"備註"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:x,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),a.jsx("button",{onClick:()=>h(null),className:"px-3 py-1 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg",children:"取消"})]})]}):a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:I.name}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>E(I),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:a.jsx(Ka,{size:16})}),a.jsx("button",{onClick:()=>{confirm(`刪除「${I.name}」？`)&&C([I.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:a.jsx(Rr,{size:16})})]})]}),a.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:I.category}),I.note&&a.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1",children:I.note})]})]})},I.id))]})]})}function AP({data:t,onSaveData:e}){const n=t.templates||[],[r,s]=g.useState(!1),[i,o]=g.useState("list"),[l,c]=g.useState(""),[u,h]=g.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,f]=g.useState(null),[m,v]=g.useState(null),[w,k]=g.useState(""),_=()=>{h({name:"",icon:"clipboard-list",description:"",itemIds:[]}),c(""),o("list"),s(!1)},p=()=>{const N=t.lists.find(I=>I.id===Number(l));N&&(h({name:N.name+" 範本",icon:N.icon||"clipboard-list",description:"",itemIds:[...N.items||[]]}),o("manual"))},y=N=>{h(I=>({...I,itemIds:I.itemIds.includes(N)?I.itemIds.filter(T=>T!==N):[...I.itemIds,N]}))},b=()=>{if(!u.name.trim())return;const I={id:Math.max(0,...n.map(T=>T.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,I]}),_()},E=()=>{if(!u.name.trim())return;const N=n.map(I=>I.id===d?{...I,...u,name:u.name.trim()}:I);e({...t,templates:N}),f(null),_()},x=N=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(I=>I.id!==N)})},C=N=>{f(N.id),h({name:N.name,icon:N.icon,description:N.description||"",itemIds:[...N.itemIds]}),s(!0)},S=()=>{const N=n.find(L=>L.id===m),I=t.lists.find(L=>L.id===Number(w));if(!N||!I)return;const T=t.lists.map(L=>L.id===I.id?{...L,items:[...new Set([...L.items||[],...N.itemIds])]}:L);e({...t,lists:T}),v(null),k(""),alert(`已將範本「${N.name}」套用到「${I.name}」`)},P=N=>N.map(I=>t.itemLibrary.find(T=>T.id===I)).filter(Boolean).map(I=>I.name);return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"清單範本"}),!r&&a.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[a.jsx(qn,{size:16})," 建立範本"]})]}),r&&a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"從現有清單建立"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:l,onChange:N=>c(N.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(N=>a.jsx("option",{value:N.id,children:N.name},N.id))]}),a.jsx("button",{onClick:p,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:a.jsx(o4,{size:16})})]}),a.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"範本名稱"}),a.jsx("input",{value:u.name,onChange:N=>h(I=>({...I,name:N.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"例：出國旅行"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"圖示"}),a.jsx("select",{value:u.icon,onChange:N=>h(I=>({...I,icon:N.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:qx.map(N=>a.jsx("option",{value:N,children:N},N))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"說明"}),a.jsx("input",{value:u.description,onChange:N=>h(I=>({...I,description:N.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"選填"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),a.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg",children:t.itemLibrary.map(N=>a.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("input",{type:"checkbox",checked:u.itemIds.includes(N.id),onChange:()=>y(N.id),className:"rounded"}),a.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100",children:N.name}),a.jsx("span",{className:"text-xs text-slate-400",children:N.category})]},N.id))})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:d?E:b,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),a.jsx("button",{onClick:()=>{f(null),_()},className:"px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:"取消"})]})]})]}),m&&a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-2",children:"套用範本"}),a.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mb-3",children:"選擇要套用的目標清單："}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:w,onChange:N=>k(N.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(N=>a.jsx("option",{value:N.id,children:N.name},N.id))]}),a.jsxs("button",{onClick:S,disabled:!w,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[a.jsx(fs,{size:16})," 套用"]}),a.jsx("button",{onClick:()=>{v(null),k("")},className:"px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:a.jsx(wt,{size:16})})]})]}),n.length===0&&!r&&a.jsxs("div",{className:"text-center py-12 text-slate-400",children:[a.jsx(tb,{size:48,className:"mx-auto mb-3 opacity-50"}),a.jsx("p",{children:"尚未建立任何範本"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(N=>a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-start justify-between mb-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:N.name}),N.description&&a.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:N.description})]}),a.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:N.icon})]}),a.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[P(N.itemIds).slice(0,5).map((I,T)=>a.jsx("span",{className:"text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full",children:I},T)),N.itemIds.length>5&&a.jsxs("span",{className:"text-xs text-slate-400",children:["+",N.itemIds.length-5," 更多"]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:[a.jsx(Uo,{size:14,className:"inline mr-1"}),N.itemIds.length," 個物品"]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>v(N.id),className:"px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50",children:"套用"}),a.jsx("button",{onClick:()=>C(N),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:a.jsx(Ka,{size:14})}),a.jsx("button",{onClick:()=>x(N.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:a.jsx(Rr,{size:14})})]})]})]},N.id))})]})}function LP({data:t,shared:e}){const[n,r]=g.useState("byMe"),[s,i]=g.useState({}),[o,l]=g.useState(""),c=e.sharedByMe||{},u=e.sharedWithMe||{},h=k=>{var p;const _=t.lists.find(y=>y.sharedListId===k);return(_==null?void 0:_.name)||((p=c[k])==null?void 0:p.name)||"未知清單"},d=async k=>{const _=o.trim();if(_)try{await e.addSharedUser(k,_),i({}),l("")}catch(p){alert("新增失敗："+p.message)}},f=async(k,_)=>{if(confirm(`移除 ${_} 的存取權限？`))try{await e.removeSharedUser(k,_)}catch(p){alert("移除失敗："+p.message)}},m=async k=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(k)}catch(_){alert("取消分享失敗："+_.message)}},v=Object.entries(c),w=Object.entries(u);return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分享管理"}),a.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-700 mb-4",children:[a.jsxs("button",{onClick:()=>r("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[a.jsx(Mc,{size:16})," 我分享的 (",v.length,")"]}),a.jsxs("button",{onClick:()=>r("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[a.jsx(lb,{size:16})," 分享給我的 (",w.length,")"]})]}),n==="byMe"&&a.jsx("div",{children:v.length===0?a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分享對象"}),a.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),a.jsx("tbody",{children:v.map(([k,_])=>{const p=Object.keys(_.sharedWith||{}).map(uh);return a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:h(k)}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[p.map(y=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,a.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:a.jsx(wt,{size:12})})]},y)),s[k]?a.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"inline-flex gap-1",children:[a.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 dark:border-slate-600 rounded w-40 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("button",{type:"submit",className:"text-emerald-600 dark:text-emerald-400",children:a.jsx(qn,{size:14})}),a.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:a.jsx(wt,{size:14})})]}):a.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-xs text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增"})]})}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("button",{onClick:()=>m(k),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg",children:[a.jsx(Rr,{size:14})," 取消分享"]})})]},k)})})]})}),a.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([k,_])=>{const p=Object.keys(_.sharedWith||{}).map(uh);return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:h(k)}),a.jsx("button",{onClick:()=>m(k),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),a.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:p.map(y=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,a.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:a.jsx(wt,{size:12})})]},y))}),s[k]?a.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"flex gap-2",children:[a.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),a.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 dark:bg-slate-600 dark:text-slate-200 rounded-lg",children:"取消"})]}):a.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增分享對象"})]},k)})})]})}),n==="withMe"&&a.jsx("div",{children:w.length===0?a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"來源"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"勾選進度"})]})}),a.jsx("tbody",{children:w.map(([k,_])=>{const p=(_.items||[]).length,y=(_.checkedItems||[]).length;return a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:_.name}),a.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:_.ownerName||_.ownerEmail}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:p>0?`${y/p*100}%`:"0%"}})}),a.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",p]})]})})]},k)})})]})}),a.jsx("div",{className:"lg:hidden space-y-3",children:w.map(([k,_])=>{const p=(_.items||[]).length,y=(_.checkedItems||[]).length;return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:_.name}),a.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:["來自 ",_.ownerName||_.ownerEmail]}),a.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[a.jsx("div",{className:"flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:p>0?`${y/p*100}%`:"0%"}})}),a.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",p]})]})]},k)})})]})})]})}function OP({user:t,admin:e}){const{adminEmails:n,addAdmin:r,removeAdmin:s}=e,[i,o]=g.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await r(i),o(""))},c=async u=>{var h;if(u===((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await s(u)};return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"帳號管理"}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:"新增管理員"}),a.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[a.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[a.jsx(qn,{size:16})," 新增"]})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:[a.jsx("div",{className:"px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700",children:a.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?a.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[a.jsx(fh,{size:32,className:"mx-auto mb-2 opacity-50"}),a.jsx("p",{children:"尚未設定管理員"}),a.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):a.jsx("ul",{children:n.map(u=>{var d;const h=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return a.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[a.jsx(fh,{size:16,className:"text-indigo-500 dark:text-indigo-400 shrink-0"}),a.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100 truncate",children:u}),h&&a.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),a.jsx("button",{onClick:()=>c(u),disabled:h,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:h?"無法移除自己":"移除管理員",children:a.jsx(Rr,{size:16})})]},u)})})]})]})}function DP({categories:t,addCategory:e,updateCategory:n,removeCategory:r}){const[s,i]=g.useState(""),[o,l]=g.useState(null),[c,u]=g.useState(""),h=async()=>{const v=s.trim();v&&(await e(v),i(""))},d=v=>{l(v),u(t[v])},f=async()=>{o!==null&&(await n(t[o],c),l(null),u(""))},m=async v=>{t.length<=1||confirm(`確定刪除分類「${v}」？已使用此分類的物品不會被刪除。`)&&await r(v)};return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分類管理"}),a.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-4",children:t.map((v,w)=>a.jsx("div",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:o===w?a.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[a.jsx("input",{value:c,onChange:k=>u(k.target.value),onKeyDown:k=>{k.key==="Enter"&&f(),k.key==="Escape"&&l(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("button",{onClick:f,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:a.jsx(fs,{size:16})}),a.jsx("button",{onClick:()=>l(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:a.jsx(wt,{size:16})})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-100",children:v}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>d(w),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:a.jsx(Ka,{size:16})}),t.length>1&&a.jsx("button",{onClick:()=>m(v),className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:a.jsx(Rr,{size:16})})]})]})},v))}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:s,onChange:v=>i(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},placeholder:"新增分類名稱...",className:"flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsxs("button",{onClick:h,disabled:!s.trim(),className:"flex items-center gap-1.5 px-4 py-2.5 text-sm bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition-colors",children:[a.jsx(qn,{size:16})," 新增"]})]})]})}const Qu=[{key:"dashboard",label:"總覽",icon:rb},{key:"items",label:"物品管理",icon:Uo},{key:"categories",label:"分類管理",icon:ob},{key:"templates",label:"清單範本",icon:tb},{key:"sharing",label:"分享管理",icon:Mc},{key:"accounts",label:"帳號管理",icon:fh}];function MP({data:t,user:e,shared:n,onNavigate:r,onSaveData:s,admin:i,categories:o,categoryActions:l}){var w;const[c,u]=g.useState("dashboard"),[h,d]=g.useState(!1),f=k=>{u(k),d(!1)},m=a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-700",children:[a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),a.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),a.jsx("nav",{className:"flex-1 p-2",children:Qu.map(({key:k,label:_,icon:p})=>a.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${c===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"}`,children:[a.jsx(p,{size:18}),_]},k))}),a.jsx("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700",children:a.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",children:[a.jsx($u,{size:18}),"返回應用"]})})]}),v=()=>{switch(c){case"dashboard":return a.jsx(jP,{data:t,shared:n});case"items":return a.jsx(PP,{data:t,onSaveData:s,categories:o});case"categories":return a.jsx(DP,{categories:o,...l});case"templates":return a.jsx(AP,{data:t,onSaveData:s});case"sharing":return a.jsx(LP,{data:t,shared:n});case"accounts":return a.jsx(OP,{user:e,admin:i});default:return null}};return a.jsxs("div",{className:"h-full bg-slate-50 dark:bg-slate-900",children:[a.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[a.jsx("aside",{className:"bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto",children:m}),a.jsx("main",{className:"overflow-y-auto p-6",children:a.jsx("div",{className:"max-w-6xl mx-auto",children:v()})})]}),a.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[a.jsxs("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top",children:[a.jsx("button",{onClick:()=>d(!0),className:"p-1 -ml-1 text-slate-600 dark:text-slate-300",children:a.jsx($4,{size:24})}),a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:((w=Qu.find(k=>k.key===c))==null?void 0:w.label)||"管理後台"}),a.jsx("button",{onClick:()=>r("profile"),className:"p-1 -mr-1 text-slate-600 dark:text-slate-300",children:a.jsx($u,{size:24})})]}),h&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>d(!1)}),a.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",children:[a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),a.jsx("button",{onClick:()=>d(!1),className:"p-1 text-slate-400",children:a.jsx(wt,{size:20})})]}),a.jsx("nav",{className:"p-2",children:Qu.map(({key:k,label:_,icon:p})=>a.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${c===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,children:[a.jsx(p,{size:18}),_]},k))}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom",children:a.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[a.jsx($u,{size:18}),"返回應用"]})})]})]}),a.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:v()})]})]})}const UP=[{id:"lists",label:"所有清單",icon:T4},{id:"library",label:"物品庫",icon:Uo},{id:"profile",label:"設定",icon:PR}];function zP({currentView:t,onNavigate:e}){return a.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 z-40 safe-bottom",children:a.jsx("div",{className:"flex",children:UP.map(n=>{const r=t===n.id,s=n.icon;return a.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600 dark:text-indigo-400":"text-slate-400 active:text-slate-600 dark:active:text-slate-300"}`,"aria-label":n.label,children:[a.jsx(s,{size:22,strokeWidth:r?2.5:2}),a.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function FP(){const[t,e]=g.useState("lists"),[n,r]=g.useState(null),s=vT(),{user:i,data:o,syncStatus:l,saveData:c,handleLogin:u,handleLogout:h}=xT(s),d=bT(i,o),f=wT(i),{categories:m,addCategory:v,updateCategory:w,removeCategory:k}=kT(),{preference:_,changeTheme:p}=ST(),y=(E,x)=>{(x==null?void 0:x.sharedListId)!==void 0&&r(x.sharedListId),e(E)},b=t!=="addItems"&&t!=="admin";return a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"flex-1 min-h-0",children:[t==="checklist"&&a.jsx(xP,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:y,onSaveData:c,shared:d,activeSharedListId:n,categories:m}),t==="lists"&&a.jsx(CP,{data:o,user:i,onNavigate:y,onSaveData:c,shared:d}),t==="library"&&a.jsx(NP,{data:o,user:i,onNavigate:y,onSaveData:c,categories:m}),t==="addItems"&&a.jsx(TP,{data:o,onNavigate:y,onSaveData:c,categories:m}),t==="profile"&&a.jsx(RP,{user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:y,isAdmin:f.isAdmin,themePreference:_,onThemeChange:p}),t==="admin"&&f.isAdmin&&a.jsx(MP,{data:o,user:i,shared:d,onNavigate:y,onSaveData:c,admin:f,categories:m,categoryActions:{addCategory:v,updateCategory:w,removeCategory:k}}),t==="admin"&&!f.isAdmin&&!f.loading&&a.jsxs("div",{className:"flex flex-col items-center justify-center h-full p-4",children:[a.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-4",children:"你沒有管理後台的存取權限"}),a.jsx("button",{onClick:()=>y("profile"),className:"px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg",children:"返回設定"})]})]}),b&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"flex-shrink-0",style:{height:"calc(4rem + env(safe-area-inset-bottom, 0px))"}}),a.jsx(zP,{currentView:t==="checklist"?"lists":t,onNavigate:E=>y(E,{sharedListId:null})})]}),!1]})}class BP extends ut.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,n){console.error("ErrorBoundary caught an error:",e,n)}render(){return this.state.hasError?a.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-white dark:bg-slate-900 p-6",children:a.jsxs("div",{className:"text-center max-w-sm",children:[a.jsx("p",{className:"text-5xl mb-4",children:"😵"}),a.jsx("h1",{className:"text-xl font-bold text-slate-900 dark:text-white mb-2",children:"發生錯誤"}),a.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-6",children:"應用程式遇到問題，請重新載入再試一次。"}),a.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-2.5 bg-sky-500 text-white rounded-lg font-medium active:bg-sky-600",children:"重新載入"})]})}):this.props.children}}Gu.createRoot(document.getElementById("root")).render(a.jsx(ut.StrictMode,{children:a.jsx(BP,{children:a.jsx(FP,{})})}));
