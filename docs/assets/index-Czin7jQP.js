(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Pb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var f0={exports:{}},rc={},p0={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),Ab=Symbol.for("react.portal"),Lb=Symbol.for("react.fragment"),Ob=Symbol.for("react.strict_mode"),Db=Symbol.for("react.profiler"),Mb=Symbol.for("react.provider"),zb=Symbol.for("react.context"),Ub=Symbol.for("react.forward_ref"),Fb=Symbol.for("react.suspense"),Bb=Symbol.for("react.memo"),$b=Symbol.for("react.lazy"),Np=Symbol.iterator;function Wb(t){return t===null||typeof t!="object"?null:(t=Np&&t[Np]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,g0={};function li(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||m0}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y0(){}y0.prototype=li.prototype;function _h(t,e,n){this.props=t,this.context=e,this.refs=g0,this.updater=n||m0}var gh=_h.prototype=new y0;gh.constructor=_h;_0(gh,li.prototype);gh.isPureReactComponent=!0;var Sp=Array.isArray,v0=Object.prototype.hasOwnProperty,yh={current:null},x0={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)v0.call(e,r)&&!x0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Ho,type:t,key:i,ref:o,props:s,_owner:yh.current}}function Hb(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function Vb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ip=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vb(""+t.key):e.toString(36)}function Bl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case Ab:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Qc(o,0):r,Sp(s)?(n="",t!=null&&(n=t.replace(Ip,"$&/")+"/"),Bl(s,e,n,"",function(u){return u})):s!=null&&(vh(s)&&(s=Hb(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Ip,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Sp(t))for(var l=0;l<t.length;l++){i=t[l];var c=r+Qc(i,l);o+=Bl(i,e,n,c,s)}else if(c=Wb(t),typeof c=="function")for(t=c.call(t),l=0;!(i=t.next()).done;)i=i.value,c=r+Qc(i,l++),o+=Bl(i,e,n,c,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(t,e,n){if(t==null)return t;var r=[],s=0;return Bl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Yb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},$l={transition:null},Qb={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:$l,ReactCurrentOwner:yh};function w0(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:ml,forEach:function(t,e,n){ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ml(t,function(){e++}),e},toArray:function(t){return ml(t,function(e){return e})||[]},only:function(t){if(!vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=li;ae.Fragment=Lb;ae.Profiler=Db;ae.PureComponent=_h;ae.StrictMode=Ob;ae.Suspense=Fb;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb;ae.act=w0;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=yh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)v0.call(e,c)&&!x0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ho,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:zb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mb,_context:t},t.Consumer=t};ae.createElement=b0;ae.createFactory=function(t){var e=b0.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:Ub,render:t}};ae.isValidElement=vh;ae.lazy=function(t){return{$$typeof:$b,_payload:{_status:-1,_result:t},_init:Yb}};ae.memo=function(t,e){return{$$typeof:Bb,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};ae.unstable_act=w0;ae.useCallback=function(t,e){return xt.current.useCallback(t,e)};ae.useContext=function(t){return xt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return xt.current.useEffect(t,e)};ae.useId=function(){return xt.current.useId()};ae.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return xt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};ae.useRef=function(t){return xt.current.useRef(t)};ae.useState=function(t){return xt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return xt.current.useTransition()};ae.version="18.3.1";p0.exports=ae;var g=p0.exports;const mt=Pb(g);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gb=g,Xb=Symbol.for("react.element"),Kb=Symbol.for("react.fragment"),qb=Object.prototype.hasOwnProperty,Jb=Gb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zb={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)qb.call(e,r)&&!Zb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Xb,type:t,key:i,ref:o,props:s,_owner:Jb.current}}rc.Fragment=Kb;rc.jsx=k0;rc.jsxs=k0;f0.exports=rc;var a=f0.exports,Yu={},C0={exports:{}},Ot={},N0={exports:{}},S0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,z){var B=O.length;O.push(z);e:for(;0<B;){var q=B-1>>>1,V=O[q];if(0<s(V,z))O[q]=z,O[B]=V,B=q;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],B=O.pop();if(B!==z){O[0]=B;e:for(var q=0,V=O.length,Q=V>>>1;q<Q;){var he=2*(q+1)-1,Se=O[he],Y=he+1,xe=O[Y];if(0>s(Se,B))Y<V&&0>s(xe,Se)?(O[q]=xe,O[Y]=B,q=Y):(O[q]=Se,O[he]=B,q=he);else if(Y<V&&0>s(xe,B))O[q]=xe,O[Y]=B,q=Y;else break e}}return z}function s(O,z){var B=O.sortIndex-z.sortIndex;return B!==0?B:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],u=[],h=1,d=null,f=3,p=!1,v=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=O)r(u),z.sortIndex=z.expirationTime,e(c,z);else break;z=n(u)}}function x(O){if(w=!1,y(O),!v)if(n(c)!==null)v=!0,se(b);else{var z=n(u);z!==null&&ne(x,z.startTime-O)}}function b(O,z){v=!1,w&&(w=!1,_(C),C=-1),p=!0;var B=f;try{for(y(z),d=n(c);d!==null&&(!(d.expirationTime>z)||O&&!I());){var q=d.callback;if(typeof q=="function"){d.callback=null,f=d.priorityLevel;var V=q(d.expirationTime<=z);z=t.unstable_now(),typeof V=="function"?d.callback=V:d===n(c)&&r(c),y(z)}else r(c);d=n(c)}if(d!==null)var Q=!0;else{var he=n(u);he!==null&&ne(x,he.startTime-z),Q=!1}return Q}finally{d=null,f=B,p=!1}}var N=!1,S=null,C=-1,j=5,E=-1;function I(){return!(t.unstable_now()-E<j)}function T(){if(S!==null){var O=t.unstable_now();E=O;var z=!0;try{z=S(!0,O)}finally{z?M():(N=!1,S=null)}}else N=!1}var M;if(typeof m=="function")M=function(){m(T)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,J=F.port2;F.port1.onmessage=T,M=function(){J.postMessage(null)}}else M=function(){k(T,0)};function se(O){S=O,N||(N=!0,M())}function ne(O,z){C=k(function(){O(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,se(b))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var B=f;f=z;try{return O()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=f;f=O;try{return z()}finally{f=B}},t.unstable_scheduleCallback=function(O,z,B){var q=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?q+B:q):B=q,O){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=B+V,O={id:h++,callback:z,priorityLevel:O,startTime:B,expirationTime:V,sortIndex:-1},B>q?(O.sortIndex=B,e(u,O),n(c)===null&&O===n(u)&&(w?(_(C),C=-1):w=!0,ne(x,B-q))):(O.sortIndex=V,e(c,O),v||p||(v=!0,se(b))),O},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(O){var z=f;return function(){var B=f;f=z;try{return O.apply(this,arguments)}finally{f=B}}}})(S0);N0.exports=S0;var e1=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=g,Lt=e1;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I0=new Set,co={};function as(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(co[t]=e,t=0;t<e.length;t++)I0.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,n1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ep={},Tp={};function r1(t){return Qu.call(Tp,t)?!0:Qu.call(Ep,t)?!1:n1.test(t)?Tp[t]=!0:(Ep[t]=!0,!1)}function s1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function i1(t,e,n,r){if(e===null||typeof e>"u"||s1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function bh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,bh);ot[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,bh);ot[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,bh);ot[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wh(t,e,n,r){var s=ot.hasOwnProperty(e)?ot[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(i1(e,n,s,r)&&(n=null),r||s===null?r1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_l=Symbol.for("react.element"),xs=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),T0=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Xu=Symbol.for("react.suspense"),Ku=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Gc;function zi(t){if(Gc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gc=e&&e[1]||""}return`
`+Gc+t}var Xc=!1;function Kc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function o1(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=Kc(t.type,!1),t;case 11:return t=Kc(t.type.render,!1),t;case 1:return t=Kc(t.type,!0),t;default:return""}}function qu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case xs:return"Portal";case Gu:return"Profiler";case kh:return"StrictMode";case Xu:return"Suspense";case Ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case T0:return(t.displayName||"Context")+".Consumer";case E0:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:qu(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return qu(t(e))}catch{}}return null}function l1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qu(e);case 8:return e===kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function j0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function a1(t){var e=j0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=a1(t))}function P0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=j0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ia(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A0(t,e){e=e.checked,e!=null&&wh(t,"checked",e,!1)}function Zu(t,e){A0(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&ed(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Pp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ed(t,e,n){(e!=="number"||ia(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Ls(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ap(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Ui(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function L0(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function O0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?O0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var yl,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(yl=yl||document.createElement("div"),yl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=yl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){c1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function M0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=M0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var u1=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rd(t,e){if(e){if(u1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function sd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=null;function Sh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var od=null,Os=null,Ds=null;function Op(t){if(t=Qo(t)){if(typeof od!="function")throw Error(L(280));var e=t.stateNode;e&&(e=ac(e),od(t.stateNode,t.type,e))}}function U0(t){Os?Ds?Ds.push(t):Ds=[t]:Os=t}function F0(){if(Os){var t=Os,e=Ds;if(Ds=Os=null,Op(t),e)for(t=0;t<e.length;t++)Op(e[t])}}function B0(t,e){return t(e)}function $0(){}var qc=!1;function W0(t,e,n){if(qc)return t(e,n);qc=!0;try{return B0(t,e,n)}finally{qc=!1,(Os!==null||Ds!==null)&&($0(),F0())}}function ho(t,e){var n=t.stateNode;if(n===null)return null;var r=ac(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var ld=!1;if(zn)try{var Si={};Object.defineProperty(Si,"passive",{get:function(){ld=!0}}),window.addEventListener("test",Si,Si),window.removeEventListener("test",Si,Si)}catch{ld=!1}function d1(t,e,n,r,s,i,o,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Hi=!1,oa=null,la=!1,ad=null,h1={onError:function(t){Hi=!0,oa=t}};function f1(t,e,n,r,s,i,o,l,c){Hi=!1,oa=null,d1.apply(h1,arguments)}function p1(t,e,n,r,s,i,o,l,c){if(f1.apply(this,arguments),Hi){if(Hi){var u=oa;Hi=!1,oa=null}else throw Error(L(198));la||(la=!0,ad=u)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function H0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dp(t){if(cs(t)!==t)throw Error(L(188))}function m1(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Dp(s),t;if(i===r)return Dp(s),e;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function V0(t){return t=m1(t),t!==null?Y0(t):null}function Y0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Y0(t);if(e!==null)return e;t=t.sibling}return null}var Q0=Lt.unstable_scheduleCallback,Mp=Lt.unstable_cancelCallback,_1=Lt.unstable_shouldYield,g1=Lt.unstable_requestPaint,Be=Lt.unstable_now,y1=Lt.unstable_getCurrentPriorityLevel,Ih=Lt.unstable_ImmediatePriority,G0=Lt.unstable_UserBlockingPriority,aa=Lt.unstable_NormalPriority,v1=Lt.unstable_LowPriority,X0=Lt.unstable_IdlePriority,sc=null,mn=null;function x1(t){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:k1,b1=Math.log,w1=Math.LN2;function k1(t){return t>>>=0,t===0?32:31-(b1(t)/w1|0)|0}var vl=64,xl=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ca(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Fi(l):(i&=o,i!==0&&(r=Fi(i)))}else o=n&~s,o!==0?r=Fi(o):i!==0&&(r=Fi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),s=1<<n,r|=t[n],e&=~s;return r}function C1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Zt(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=C1(l,e)):c<=e&&(t.expiredLanes|=l),i&=~l}}function cd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function K0(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function Jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function S1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Zt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var _e=0;function q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J0,Th,Z0,eg,tg,ud=!1,bl=[],fr=null,pr=null,mr=null,fo=new Map,po=new Map,sr=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(e.pointerId)}}function Ii(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Qo(e),e!==null&&Th(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function E1(t,e,n,r,s){switch(e){case"focusin":return fr=Ii(fr,t,e,n,r,s),!0;case"dragenter":return pr=Ii(pr,t,e,n,r,s),!0;case"mouseover":return mr=Ii(mr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return fo.set(i,Ii(fo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,po.set(i,Ii(po.get(i)||null,t,e,n,r,s)),!0}return!1}function ng(t){var e=Br(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=H0(n),e!==null){t.blockedOn=e,tg(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=dd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);id=r,n.target.dispatchEvent(r),id=null}else return e=Qo(n),e!==null&&Th(e),t.blockedOn=n,!1;e.shift()}return!0}function Up(t,e,n){Wl(t)&&n.delete(e)}function T1(){ud=!1,fr!==null&&Wl(fr)&&(fr=null),pr!==null&&Wl(pr)&&(pr=null),mr!==null&&Wl(mr)&&(mr=null),fo.forEach(Up),po.forEach(Up)}function Ei(t,e){t.blockedOn===e&&(t.blockedOn=null,ud||(ud=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,T1)))}function mo(t){function e(s){return Ei(s,t)}if(0<bl.length){Ei(bl[0],t);for(var n=1;n<bl.length;n++){var r=bl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fr!==null&&Ei(fr,t),pr!==null&&Ei(pr,t),mr!==null&&Ei(mr,t),fo.forEach(e),po.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&sr.shift()}var Ms=Yn.ReactCurrentBatchConfig,ua=!0;function R1(t,e,n,r){var s=_e,i=Ms.transition;Ms.transition=null;try{_e=1,Rh(t,e,n,r)}finally{_e=s,Ms.transition=i}}function j1(t,e,n,r){var s=_e,i=Ms.transition;Ms.transition=null;try{_e=4,Rh(t,e,n,r)}finally{_e=s,Ms.transition=i}}function Rh(t,e,n,r){if(ua){var s=dd(t,e,n,r);if(s===null)au(t,e,r,da,n),zp(t,r);else if(E1(s,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<I1.indexOf(t)){for(;s!==null;){var i=Qo(s);if(i!==null&&J0(i),i=dd(t,e,n,r),i===null&&au(t,e,r,da,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else au(t,e,r,null,n)}}var da=null;function dd(t,e,n,r){if(da=null,t=Sh(r),t=Br(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=H0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return da=t,null}function rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case Ih:return 1;case G0:return 4;case aa:case v1:return 16;case X0:return 536870912;default:return 16}default:return 16}}var ur=null,jh=null,Hl=null;function sg(){if(Hl)return Hl;var t,e=jh,n=e.length,r,s="value"in ur?ur.value:ur.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Hl=s.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Fp(){return!1}function Dt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wl:Fp,this.isPropagationStopped=Fp,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ph=Dt(ai),Yo=Oe({},ai,{view:0,detail:0}),P1=Dt(Yo),Zc,eu,Ti,ic=Oe({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ah,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Zc=t.screenX-Ti.screenX,eu=t.screenY-Ti.screenY):eu=Zc=0,Ti=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Bp=Dt(ic),A1=Oe({},ic,{dataTransfer:0}),L1=Dt(A1),O1=Oe({},Yo,{relatedTarget:0}),tu=Dt(O1),D1=Oe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),M1=Dt(D1),z1=Oe({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U1=Dt(z1),F1=Oe({},ai,{data:0}),$p=Dt(F1),B1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function H1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=W1[t])?!!e[t]:!1}function Ah(){return H1}var V1=Oe({},Yo,{key:function(t){if(t.key){var e=B1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ah,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Y1=Dt(V1),Q1=Oe({},ic,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Dt(Q1),G1=Oe({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ah}),X1=Dt(G1),K1=Oe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),q1=Dt(K1),J1=Oe({},ic,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=Dt(J1),ew=[9,13,27,32],Lh=zn&&"CompositionEvent"in window,Vi=null;zn&&"documentMode"in document&&(Vi=document.documentMode);var tw=zn&&"TextEvent"in window&&!Vi,ig=zn&&(!Lh||Vi&&8<Vi&&11>=Vi),Hp=" ",Vp=!1;function og(t,e){switch(t){case"keyup":return ew.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function nw(t,e){switch(t){case"compositionend":return lg(e);case"keypress":return e.which!==32?null:(Vp=!0,Hp);case"textInput":return t=e.data,t===Hp&&Vp?null:t;default:return null}}function rw(t,e){if(ws)return t==="compositionend"||!Lh&&og(t,e)?(t=sg(),Hl=jh=ur=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ig&&e.locale!=="ko"?null:e.data;default:return null}}var sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sw[t.type]:e==="textarea"}function ag(t,e,n,r){U0(r),e=ha(e,"onChange"),0<e.length&&(n=new Ph("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Yi=null,_o=null;function iw(t){vg(t,0)}function oc(t){var e=Ns(t);if(P0(e))return t}function ow(t,e){if(t==="change")return e}var cg=!1;if(zn){var nu;if(zn){var ru="oninput"in document;if(!ru){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),ru=typeof Qp.oninput=="function"}nu=ru}else nu=!1;cg=nu&&(!document.documentMode||9<document.documentMode)}function Gp(){Yi&&(Yi.detachEvent("onpropertychange",ug),_o=Yi=null)}function ug(t){if(t.propertyName==="value"&&oc(_o)){var e=[];ag(e,_o,t,Sh(t)),W0(iw,e)}}function lw(t,e,n){t==="focusin"?(Gp(),Yi=e,_o=n,Yi.attachEvent("onpropertychange",ug)):t==="focusout"&&Gp()}function aw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oc(_o)}function cw(t,e){if(t==="click")return oc(e)}function uw(t,e){if(t==="input"||t==="change")return oc(e)}function dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:dw;function go(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Qu.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function Xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kp(t,e){var n=Xp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xp(n)}}function dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hg(){for(var t=window,e=ia();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ia(t.document)}return e}function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hw(t){var e=hg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dg(n.ownerDocument.documentElement,n)){if(r!==null&&Oh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Kp(n,i);var o=Kp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fw=zn&&"documentMode"in document&&11>=document.documentMode,ks=null,hd=null,Qi=null,fd=!1;function qp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fd||ks==null||ks!==ia(r)||(r=ks,"selectionStart"in r&&Oh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qi&&go(Qi,r)||(Qi=r,r=ha(hd,"onSelect"),0<r.length&&(e=new Ph("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ks)))}function kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},su={},fg={};zn&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function lc(t){if(su[t])return su[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fg)return su[t]=e[n];return t}var pg=lc("animationend"),mg=lc("animationiteration"),_g=lc("animationstart"),gg=lc("transitionend"),yg=new Map,Jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(t,e){yg.set(t,e),as(e,[t])}for(var iu=0;iu<Jp.length;iu++){var ou=Jp[iu],pw=ou.toLowerCase(),mw=ou[0].toUpperCase()+ou.slice(1);jr(pw,"on"+mw)}jr(pg,"onAnimationEnd");jr(mg,"onAnimationIteration");jr(_g,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(gg,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);as("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));as("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));as("onBeforeInput",["compositionend","keypress","textInput","paste"]);as("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));as("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));as("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));function Zp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,p1(r,e,void 0,t),t.currentTarget=null}function vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Zp(s,l,u),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Zp(s,l,u),i=c}}}if(la)throw t=ad,la=!1,ad=null,t}function Ce(t,e){var n=e[yd];n===void 0&&(n=e[yd]=new Set);var r=t+"__bubble";n.has(r)||(xg(e,t,2,!1),n.add(r))}function lu(t,e,n){var r=0;e&&(r|=4),xg(n,t,r,e)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Cl]){t[Cl]=!0,I0.forEach(function(n){n!=="selectionchange"&&(_w.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Cl]||(e[Cl]=!0,lu("selectionchange",!1,e))}}function xg(t,e,n,r){switch(rg(e)){case 1:var s=R1;break;case 4:s=j1;break;default:s=Rh}n=s.bind(null,e,n,t),s=void 0,!ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function au(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}W0(function(){var u=i,h=Sh(n),d=[];e:{var f=yg.get(t);if(f!==void 0){var p=Ph,v=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":p=Y1;break;case"focusin":v="focus",p=tu;break;case"focusout":v="blur",p=tu;break;case"beforeblur":case"afterblur":p=tu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=L1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=X1;break;case pg:case mg:case _g:p=M1;break;case gg:p=q1;break;case"scroll":p=P1;break;case"wheel":p=Z1;break;case"copy":case"cut":case"paste":p=U1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wp}var w=(e&4)!==0,k=!w&&t==="scroll",_=w?f!==null?f+"Capture":null:f;w=[];for(var m=u,y;m!==null;){y=m;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,_!==null&&(x=ho(m,_),x!=null&&w.push(vo(m,x,y)))),k)break;m=m.return}0<w.length&&(f=new p(f,v,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==id&&(v=n.relatedTarget||n.fromElement)&&(Br(v)||v[Un]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Br(v):null,v!==null&&(k=cs(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(w=Bp,x="onMouseLeave",_="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(w=Wp,x="onPointerLeave",_="onPointerEnter",m="pointer"),k=p==null?f:Ns(p),y=v==null?f:Ns(v),f=new w(x,m+"leave",p,n,h),f.target=k,f.relatedTarget=y,x=null,Br(h)===u&&(w=new w(_,m+"enter",v,n,h),w.target=y,w.relatedTarget=k,x=w),k=x,p&&v)t:{for(w=p,_=v,m=0,y=w;y;y=gs(y))m++;for(y=0,x=_;x;x=gs(x))y++;for(;0<m-y;)w=gs(w),m--;for(;0<y-m;)_=gs(_),y--;for(;m--;){if(w===_||_!==null&&w===_.alternate)break t;w=gs(w),_=gs(_)}w=null}else w=null;p!==null&&em(d,f,p,w,!1),v!==null&&k!==null&&em(d,k,v,w,!0)}}e:{if(f=u?Ns(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=ow;else if(Yp(f))if(cg)b=uw;else{b=aw;var N=lw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=cw);if(b&&(b=b(t,u))){ag(d,b,n,h);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&ed(f,"number",f.value)}switch(N=u?Ns(u):window,t){case"focusin":(Yp(N)||N.contentEditable==="true")&&(ks=N,hd=u,Qi=null);break;case"focusout":Qi=hd=ks=null;break;case"mousedown":fd=!0;break;case"contextmenu":case"mouseup":case"dragend":fd=!1,qp(d,n,h);break;case"selectionchange":if(fw)break;case"keydown":case"keyup":qp(d,n,h)}var S;if(Lh)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ws?og(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(ig&&n.locale!=="ko"&&(ws||C!=="onCompositionStart"?C==="onCompositionEnd"&&ws&&(S=sg()):(ur=h,jh="value"in ur?ur.value:ur.textContent,ws=!0)),N=ha(u,C),0<N.length&&(C=new $p(C,t,null,n,h),d.push({event:C,listeners:N}),S?C.data=S:(S=lg(n),S!==null&&(C.data=S)))),(S=tw?nw(t,n):rw(t,n))&&(u=ha(u,"onBeforeInput"),0<u.length&&(h=new $p("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=S))}vg(d,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ha(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ho(t,n),i!=null&&r.unshift(vo(t,i,s)),i=ho(t,e),i!=null&&r.push(vo(t,i,s))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function em(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=ho(n,i),c!=null&&o.unshift(vo(n,c,l))):s||(c=ho(n,i),c!=null&&o.push(vo(n,c,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gw=/\r\n?/g,yw=/\u0000|\uFFFD/g;function tm(t){return(typeof t=="string"?t:""+t).replace(gw,`
`).replace(yw,"")}function Nl(t,e,n){if(e=tm(e),tm(t)!==e&&n)throw Error(L(425))}function fa(){}var pd=null,md=null;function _d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gd=typeof setTimeout=="function"?setTimeout:void 0,vw=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,xw=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(t){return nm.resolve(null).then(t).catch(bw)}:gd;function bw(t){setTimeout(function(){throw t})}function cu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);mo(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ci=Math.random().toString(36).slice(2),fn="__reactFiber$"+ci,xo="__reactProps$"+ci,Un="__reactContainer$"+ci,yd="__reactEvents$"+ci,ww="__reactListeners$"+ci,kw="__reactHandles$"+ci;function Br(t){var e=t[fn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[fn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rm(t);t!==null;){if(n=t[fn])return n;t=rm(t)}return e}t=n,n=t.parentNode}return null}function Qo(t){return t=t[fn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function ac(t){return t[xo]||null}var vd=[],Ss=-1;function Pr(t){return{current:t}}function Ne(t){0>Ss||(t.current=vd[Ss],vd[Ss]=null,Ss--)}function ke(t,e){Ss++,vd[Ss]=t.current,t.current=e}var Sr={},ht=Pr(Sr),Nt=Pr(!1),Kr=Sr;function Qs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function pa(){Ne(Nt),Ne(ht)}function sm(t,e,n){if(ht.current!==Sr)throw Error(L(168));ke(ht,e),ke(Nt,n)}function bg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(L(108,l1(t)||"Unknown",s));return Oe({},n,r)}function ma(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,Kr=ht.current,ke(ht,t),ke(Nt,Nt.current),!0}function im(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=bg(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,Ne(Nt),Ne(ht),ke(ht,t)):Ne(Nt),ke(Nt,n)}var Sn=null,cc=!1,uu=!1;function wg(t){Sn===null?Sn=[t]:Sn.push(t)}function Cw(t){cc=!0,wg(t)}function Ar(){if(!uu&&Sn!==null){uu=!0;var t=0,e=_e;try{var n=Sn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,cc=!1}catch(s){throw Sn!==null&&(Sn=Sn.slice(t+1)),Q0(Ih,Ar),s}finally{_e=e,uu=!1}}return null}var Is=[],Es=0,_a=null,ga=0,Ut=[],Ft=0,qr=null,Tn=1,Rn="";function Mr(t,e){Is[Es++]=ga,Is[Es++]=_a,_a=t,ga=e}function kg(t,e,n){Ut[Ft++]=Tn,Ut[Ft++]=Rn,Ut[Ft++]=qr,qr=t;var r=Tn;t=Rn;var s=32-Zt(r)-1;r&=~(1<<s),n+=1;var i=32-Zt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Tn=1<<32-Zt(e)+s|n<<s|r,Rn=i+t}else Tn=1<<i|n<<s|r,Rn=t}function Dh(t){t.return!==null&&(Mr(t,1),kg(t,1,0))}function Mh(t){for(;t===_a;)_a=Is[--Es],Is[Es]=null,ga=Is[--Es],Is[Es]=null;for(;t===qr;)qr=Ut[--Ft],Ut[Ft]=null,Rn=Ut[--Ft],Ut[Ft]=null,Tn=Ut[--Ft],Ut[Ft]=null}var At=null,jt=null,Re=!1,Kt=null;function Cg(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,At=t,jt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,At=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:Tn,overflow:Rn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,At=t,jt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bd(t){if(Re){var e=jt;if(e){var n=e;if(!om(t,e)){if(xd(t))throw Error(L(418));e=_r(n.nextSibling);var r=At;e&&om(t,e)?Cg(r,n):(t.flags=t.flags&-4097|2,Re=!1,At=t)}}else{if(xd(t))throw Error(L(418));t.flags=t.flags&-4097|2,Re=!1,At=t}}}function lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;At=t}function Sl(t){if(t!==At)return!1;if(!Re)return lm(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_d(t.type,t.memoizedProps)),e&&(e=jt)){if(xd(t))throw Ng(),Error(L(418));for(;e;)Cg(t,e),e=_r(e.nextSibling)}if(lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=At?_r(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=jt;t;)t=_r(t.nextSibling)}function Gs(){jt=At=null,Re=!1}function zh(t){Kt===null?Kt=[t]:Kt.push(t)}var Nw=Yn.ReactCurrentBatchConfig;function Ri(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function am(t){var e=t._init;return e(t._payload)}function Sg(t){function e(_,m){if(t){var y=_.deletions;y===null?(_.deletions=[m],_.flags|=16):y.push(m)}}function n(_,m){if(!t)return null;for(;m!==null;)e(_,m),m=m.sibling;return null}function r(_,m){for(_=new Map;m!==null;)m.key!==null?_.set(m.key,m):_.set(m.index,m),m=m.sibling;return _}function s(_,m){return _=xr(_,m),_.index=0,_.sibling=null,_}function i(_,m,y){return _.index=y,t?(y=_.alternate,y!==null?(y=y.index,y<m?(_.flags|=2,m):y):(_.flags|=2,m)):(_.flags|=1048576,m)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,m,y,x){return m===null||m.tag!==6?(m=gu(y,_.mode,x),m.return=_,m):(m=s(m,y),m.return=_,m)}function c(_,m,y,x){var b=y.type;return b===bs?h(_,m,y.props.children,x,y.key):m!==null&&(m.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&am(b)===m.type)?(x=s(m,y.props),x.ref=Ri(_,m,y),x.return=_,x):(x=Jl(y.type,y.key,y.props,null,_.mode,x),x.ref=Ri(_,m,y),x.return=_,x)}function u(_,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=yu(y,_.mode,x),m.return=_,m):(m=s(m,y.children||[]),m.return=_,m)}function h(_,m,y,x,b){return m===null||m.tag!==7?(m=Qr(y,_.mode,x,b),m.return=_,m):(m=s(m,y),m.return=_,m)}function d(_,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=gu(""+m,_.mode,y),m.return=_,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _l:return y=Jl(m.type,m.key,m.props,null,_.mode,y),y.ref=Ri(_,null,m),y.return=_,y;case xs:return m=yu(m,_.mode,y),m.return=_,m;case er:var x=m._init;return d(_,x(m._payload),y)}if(Ui(m)||Ni(m))return m=Qr(m,_.mode,y,null),m.return=_,m;Il(_,m)}return null}function f(_,m,y,x){var b=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:l(_,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:return y.key===b?c(_,m,y,x):null;case xs:return y.key===b?u(_,m,y,x):null;case er:return b=y._init,f(_,m,b(y._payload),x)}if(Ui(y)||Ni(y))return b!==null?null:h(_,m,y,x,null);Il(_,y)}return null}function p(_,m,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return _=_.get(y)||null,l(m,_,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _l:return _=_.get(x.key===null?y:x.key)||null,c(m,_,x,b);case xs:return _=_.get(x.key===null?y:x.key)||null,u(m,_,x,b);case er:var N=x._init;return p(_,m,y,N(x._payload),b)}if(Ui(x)||Ni(x))return _=_.get(y)||null,h(m,_,x,b,null);Il(m,x)}return null}function v(_,m,y,x){for(var b=null,N=null,S=m,C=m=0,j=null;S!==null&&C<y.length;C++){S.index>C?(j=S,S=null):j=S.sibling;var E=f(_,S,y[C],x);if(E===null){S===null&&(S=j);break}t&&S&&E.alternate===null&&e(_,S),m=i(E,m,C),N===null?b=E:N.sibling=E,N=E,S=j}if(C===y.length)return n(_,S),Re&&Mr(_,C),b;if(S===null){for(;C<y.length;C++)S=d(_,y[C],x),S!==null&&(m=i(S,m,C),N===null?b=S:N.sibling=S,N=S);return Re&&Mr(_,C),b}for(S=r(_,S);C<y.length;C++)j=p(S,_,C,y[C],x),j!==null&&(t&&j.alternate!==null&&S.delete(j.key===null?C:j.key),m=i(j,m,C),N===null?b=j:N.sibling=j,N=j);return t&&S.forEach(function(I){return e(_,I)}),Re&&Mr(_,C),b}function w(_,m,y,x){var b=Ni(y);if(typeof b!="function")throw Error(L(150));if(y=b.call(y),y==null)throw Error(L(151));for(var N=b=null,S=m,C=m=0,j=null,E=y.next();S!==null&&!E.done;C++,E=y.next()){S.index>C?(j=S,S=null):j=S.sibling;var I=f(_,S,E.value,x);if(I===null){S===null&&(S=j);break}t&&S&&I.alternate===null&&e(_,S),m=i(I,m,C),N===null?b=I:N.sibling=I,N=I,S=j}if(E.done)return n(_,S),Re&&Mr(_,C),b;if(S===null){for(;!E.done;C++,E=y.next())E=d(_,E.value,x),E!==null&&(m=i(E,m,C),N===null?b=E:N.sibling=E,N=E);return Re&&Mr(_,C),b}for(S=r(_,S);!E.done;C++,E=y.next())E=p(S,_,C,E.value,x),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?C:E.key),m=i(E,m,C),N===null?b=E:N.sibling=E,N=E);return t&&S.forEach(function(T){return e(_,T)}),Re&&Mr(_,C),b}function k(_,m,y,x){if(typeof y=="object"&&y!==null&&y.type===bs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case _l:e:{for(var b=y.key,N=m;N!==null;){if(N.key===b){if(b=y.type,b===bs){if(N.tag===7){n(_,N.sibling),m=s(N,y.props.children),m.return=_,_=m;break e}}else if(N.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&am(b)===N.type){n(_,N.sibling),m=s(N,y.props),m.ref=Ri(_,N,y),m.return=_,_=m;break e}n(_,N);break}else e(_,N);N=N.sibling}y.type===bs?(m=Qr(y.props.children,_.mode,x,y.key),m.return=_,_=m):(x=Jl(y.type,y.key,y.props,null,_.mode,x),x.ref=Ri(_,m,y),x.return=_,_=x)}return o(_);case xs:e:{for(N=y.key;m!==null;){if(m.key===N)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(_,m.sibling),m=s(m,y.children||[]),m.return=_,_=m;break e}else{n(_,m);break}else e(_,m);m=m.sibling}m=yu(y,_.mode,x),m.return=_,_=m}return o(_);case er:return N=y._init,k(_,m,N(y._payload),x)}if(Ui(y))return v(_,m,y,x);if(Ni(y))return w(_,m,y,x);Il(_,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(_,m.sibling),m=s(m,y),m.return=_,_=m):(n(_,m),m=gu(y,_.mode,x),m.return=_,_=m),o(_)):n(_,m)}return k}var Xs=Sg(!0),Ig=Sg(!1),ya=Pr(null),va=null,Ts=null,Uh=null;function Fh(){Uh=Ts=va=null}function Bh(t){var e=ya.current;Ne(ya),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){va=t,Uh=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kt=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(va===null)throw Error(L(308));Ts=t,va.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var $r=null;function $h(t){$r===null?$r=[t]:$r.push(t)}function Eg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,$h(e)):(n.next=s.next,s.next=n),e.interleaved=n,Fn(t,r)}function Fn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Fn(t,n)}return s=r.interleaved,s===null?(e.next=e,$h(r)):(e.next=s.next,s.next=e),r.interleaved=e,Fn(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eh(t,n)}}function cm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xa(t,e,n,r){var s=t.updateQueue;tr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,o===null?i=u:o.next=u,o=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(i!==null){var d=s.baseState;o=0,h=u=c=null,l=i;do{var f=l.lane,p=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,p=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=Oe({},d,f);break e;case 2:tr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=p,c=d):h=h.next=p,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(c=d),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=d}}function um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(L(191,s));s.call(r)}}}var Go={},_n=Pr(Go),bo=Pr(Go),wo=Pr(Go);function Wr(t){if(t===Go)throw Error(L(174));return t}function Hh(t,e){switch(ke(wo,e),ke(bo,t),ke(_n,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nd(e,t)}Ne(_n),ke(_n,e)}function Ks(){Ne(_n),Ne(bo),Ne(wo)}function Rg(t){Wr(wo.current);var e=Wr(_n.current),n=nd(e,t.type);e!==n&&(ke(bo,t),ke(_n,n))}function Vh(t){bo.current===t&&(Ne(_n),Ne(bo))}var Ae=Pr(0);function ba(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var du=[];function Yh(){for(var t=0;t<du.length;t++)du[t]._workInProgressVersionPrimary=null;du.length=0}var Ql=Yn.ReactCurrentDispatcher,hu=Yn.ReactCurrentBatchConfig,Jr=0,Le=null,He=null,Ke=null,wa=!1,Gi=!1,ko=0,Sw=0;function at(){throw Error(L(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function Gh(t,e,n,r,s,i){if(Jr=i,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?Rw:jw,t=n(r,s),Gi){i=0;do{if(Gi=!1,ko=0,25<=i)throw Error(L(301));i+=1,Ke=He=null,e.updateQueue=null,Ql.current=Pw,t=n(r,s)}while(Gi)}if(Ql.current=ka,e=He!==null&&He.next!==null,Jr=0,Ke=He=Le=null,wa=!1,e)throw Error(L(300));return t}function Xh(){var t=ko!==0;return ko=0,t}function hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Le.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Vt(){if(He===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ke===null?Le.memoizedState:Ke.next;if(e!==null)Ke=e,He=t;else{if(t===null)throw Error(L(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ke===null?Le.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Co(t,e){return typeof e=="function"?e(t):e}function fu(t){var e=Vt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,u=i;do{var h=u.lane;if((Jr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=d,o=r):c=c.next=d,Le.lanes|=h,Zr|=h}u=u.next}while(u!==null&&u!==i);c===null?o=r:c.next=l,sn(r,e.memoizedState)||(kt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Le.lanes|=i,Zr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pu(t){var e=Vt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(kt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function jg(){}function Pg(t,e){var n=Le,r=Vt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,kt=!0),r=r.queue,Kh(Og.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,No(9,Lg.bind(null,n,r,s,e),void 0,null),Ze===null)throw Error(L(349));Jr&30||Ag(n,e,s)}return s}function Ag(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lg(t,e,n,r){e.value=n,e.getSnapshot=r,Dg(e)&&Mg(t)}function Og(t,e,n){return n(function(){Dg(e)&&Mg(t)})}function Dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function Mg(t){var e=Fn(t,1);e!==null&&en(e,t,1,-1)}function dm(t){var e=hn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=Tw.bind(null,Le,t),[e.memoizedState,t]}function No(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function zg(){return Vt().memoizedState}function Gl(t,e,n,r){var s=hn();Le.flags|=t,s.memoizedState=No(1|e,n,void 0,r===void 0?null:r)}function uc(t,e,n,r){var s=Vt();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&Qh(r,o.deps)){s.memoizedState=No(e,n,i,r);return}}Le.flags|=t,s.memoizedState=No(1|e,n,i,r)}function hm(t,e){return Gl(8390656,8,t,e)}function Kh(t,e){return uc(2048,8,t,e)}function Ug(t,e){return uc(4,2,t,e)}function Fg(t,e){return uc(4,4,t,e)}function Bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,uc(4,4,Bg.bind(null,e,t),n)}function qh(){}function Wg(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return Jr&21?(sn(n,e)||(n=K0(),Le.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kt=!0),t.memoizedState=n)}function Iw(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=hu.transition;hu.transition={};try{t(!1),e()}finally{_e=n,hu.transition=r}}function Yg(){return Vt().memoizedState}function Ew(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Gg(e,n);else if(n=Eg(t,e,n,r),n!==null){var s=gt();en(n,t,r,s),Xg(n,e,r)}}function Tw(t,e,n){var r=vr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Gg(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,sn(l,o)){var c=e.interleaved;c===null?(s.next=s,$h(e)):(s.next=c.next,c.next=s),e.interleaved=s;return}}catch{}finally{}n=Eg(t,e,s,r),n!==null&&(s=gt(),en(n,t,r,s),Xg(n,e,r))}}function Qg(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function Gg(t,e){Gi=wa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Eh(t,n)}}var ka={readContext:Ht,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},Rw={readContext:Ht,useCallback:function(t,e){return hn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,Bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=hn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ew.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=hn();return t={current:t},e.memoizedState=t},useState:dm,useDebugValue:qh,useDeferredValue:function(t){return hn().memoizedState=t},useTransition:function(){var t=dm(!1),e=t[0];return t=Iw.bind(null,t[1]),hn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,s=hn();if(Re){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Ze===null)throw Error(L(349));Jr&30||Ag(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,hm(Og.bind(null,r,i,t),[t]),r.flags|=2048,No(9,Lg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=hn(),e=Ze.identifierPrefix;if(Re){var n=Rn,r=Tn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jw={readContext:Ht,useCallback:Wg,useContext:Ht,useEffect:Kh,useImperativeHandle:$g,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Hg,useReducer:fu,useRef:zg,useState:function(){return fu(Co)},useDebugValue:qh,useDeferredValue:function(t){var e=Vt();return Vg(e,He.memoizedState,t)},useTransition:function(){var t=fu(Co)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Pg,useId:Yg,unstable_isNewReconciler:!1},Pw={readContext:Ht,useCallback:Wg,useContext:Ht,useEffect:Kh,useImperativeHandle:$g,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:Hg,useReducer:pu,useRef:zg,useState:function(){return pu(Co)},useDebugValue:qh,useDeferredValue:function(t){var e=Vt();return He===null?e.memoizedState=t:Vg(e,He.memoizedState,t)},useTransition:function(){var t=pu(Co)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Pg,useId:Yg,unstable_isNewReconciler:!1};function Gt(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),s=vr(t),i=Dn(r,s);i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(en(e,t,s,r),Yl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),s=vr(t),i=Dn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=gr(t,i,s),e!==null&&(en(e,t,s,r),Yl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=vr(t),s=Dn(n,r);s.tag=2,e!=null&&(s.callback=e),e=gr(t,s,r),e!==null&&(en(e,t,r,n),Yl(e,t,r))}};function fm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(s,i):!0}function Kg(t,e,n){var r=!1,s=Sr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=St(e)?Kr:ht.current,r=e.contextTypes,i=(r=r!=null)?Qs(t,s):Sr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function pm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&dc.enqueueReplaceState(e,e.state,null)}function Cd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Wh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=St(e)?Kr:ht.current,s.context=Qs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(kd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&dc.enqueueReplaceState(s,s.state,null),xa(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=o1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Aw=typeof WeakMap=="function"?WeakMap:Map;function qg(t,e,n){n=Dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Na||(Na=!0,Od=r),Nd(t,e)},n}function Jg(t,e,n){n=Dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Nd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Aw;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Qw.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var Lw=Yn.ReactCurrentOwner,kt=!1;function pt(t,e,n,r){e.child=t===null?Ig(e,null,n,r):Xs(e,t.child,n,r)}function ym(t,e,n,r,s){n=n.render;var i=e.ref;return zs(e,s),r=Gh(t,e,n,r,i,s),n=Xh(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Bn(t,e,s)):(Re&&n&&Dh(e),e.flags|=1,pt(t,e,r,s),e.child)}function vm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Zg(t,e,i,r,s)):(t=Jl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Bn(t,e,s)}return e.flags|=1,t=xr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Zg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(go(i,r)&&t.ref===e.ref)if(kt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(kt=!0);else return e.lanes=t.lanes,Bn(t,e,s)}return Sd(t,e,n,r,s)}function ey(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(js,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ke(js,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ke(js,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ke(js,Rt),Rt|=r;return pt(t,e,s,n),e.child}function ty(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,r,s){var i=St(n)?Kr:ht.current;return i=Qs(e,i),zs(e,s),n=Gh(t,e,n,r,i,s),r=Xh(),t!==null&&!kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Bn(t,e,s)):(Re&&r&&Dh(e),e.flags|=1,pt(t,e,n,s),e.child)}function xm(t,e,n,r,s){if(St(n)){var i=!0;ma(e)}else i=!1;if(zs(e,s),e.stateNode===null)Xl(t,e),Kg(e,n,r),Cd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=St(n)?Kr:ht.current,u=Qs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==u)&&pm(e,o,r,u),tr=!1;var f=e.memoizedState;o.state=f,xa(e,r,o,s),c=e.memoizedState,l!==r||f!==c||Nt.current||tr?(typeof h=="function"&&(kd(e,n,h,r),c=e.memoizedState),(l=tr||fm(e,n,l,r,f,c,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),o.props=r,o.state=c,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Gt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ht(c):(c=St(n)?Kr:ht.current,c=Qs(e,c));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==c)&&pm(e,o,r,c),tr=!1,f=e.memoizedState,o.state=f,xa(e,r,o,s);var v=e.memoizedState;l!==d||f!==v||Nt.current||tr?(typeof p=="function"&&(kd(e,n,p,r),v=e.memoizedState),(u=tr||fm(e,n,u,r,f,v,c)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=c,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Id(t,e,n,r,i,s)}function Id(t,e,n,r,s,i){ty(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&im(e,n,!1),Bn(t,e,i);r=e.stateNode,Lw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xs(e,t.child,null,i),e.child=Xs(e,null,l,i)):pt(t,e,l,i),e.memoizedState=r.state,s&&im(e,n,!0),e.child}function ny(t){var e=t.stateNode;e.pendingContext?sm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sm(t,e.context,!1),Hh(t,e.containerInfo)}function bm(t,e,n,r,s){return Gs(),zh(s),e.flags|=256,pt(t,e,n,r),e.child}var Ed={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function ry(t,e,n){var r=e.pendingProps,s=Ae.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ke(Ae,s&1),t===null)return bd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=pc(o,r,0,null),t=Qr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Td(n),e.memoizedState=Ed,t):Jh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Ow(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=xr(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=xr(l,i):(i=Qr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ed,r}return i=t.child,t=i.sibling,r=xr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=pc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function El(t,e,n,r){return r!==null&&zh(r),Xs(e,t.child,null,n),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ow(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=mu(Error(L(422))),El(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=pc({mode:"visible",children:r.children},s,0,null),i=Qr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Xs(e,t.child,null,o),e.child.memoizedState=Td(o),e.memoizedState=Ed,i);if(!(e.mode&1))return El(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=mu(i,r,void 0),El(t,e,o,r)}if(l=(o&t.childLanes)!==0,kt||l){if(r=Ze,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Fn(t,s),en(r,t,s,-1))}return sf(),r=mu(Error(L(421))),El(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Gw.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,jt=_r(s.nextSibling),At=e,Re=!0,Kt=null,t!==null&&(Ut[Ft++]=Tn,Ut[Ft++]=Rn,Ut[Ft++]=qr,Tn=t.id,Rn=t.overflow,qr=e),e=Jh(e,r.children),e.flags|=4096,e)}function wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wd(t.return,e,n)}function _u(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function sy(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(pt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,n,e);else if(t.tag===19)wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ke(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ba(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),_u(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ba(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}_u(e,!0,n,null,i);break;case"together":_u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=xr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dw(t,e,n){switch(e.tag){case 3:ny(e),Gs();break;case 5:Rg(e);break;case 1:St(e.type)&&ma(e);break;case 4:Hh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ke(ya,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?ry(t,e,n):(ke(Ae,Ae.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);ke(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return sy(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,ey(t,e,n)}return Bn(t,e,n)}var iy,Rd,oy,ly;iy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rd=function(){};oy=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Wr(_n.current);var i=null;switch(n){case"input":s=Ju(t,s),r=Ju(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=td(t,s),r=td(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=fa)}rd(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ce("scroll",t),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ly=function(t,e,n,r){n!==r&&(e.flags|=4)};function ji(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ct(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mw(t,e,n){var r=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(e),null;case 1:return St(e.type)&&pa(),ct(e),null;case 3:return r=e.stateNode,Ks(),Ne(Nt),Ne(ht),Yh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Sl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(zd(Kt),Kt=null))),Rd(t,e),ct(e),null;case 5:Vh(e);var s=Wr(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)oy(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return ct(e),null}if(t=Wr(_n.current),Sl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[fn]=e,r[xo]=i,t=(e.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(s=0;s<Bi.length;s++)Ce(Bi[s],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":jp(r,i),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ce("invalid",r);break;case"textarea":Ap(r,i),Ce("invalid",r)}rd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Nl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Nl(r.textContent,l,t),s=["children",""+l]):co.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ce("scroll",r)}switch(n){case"input":gl(r),Pp(r,i,!0);break;case"textarea":gl(r),Lp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=fa)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=O0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[fn]=e,t[xo]=r,iy(t,e,!1,!1),e.stateNode=t;e:{switch(o=sd(n,r),n){case"dialog":Ce("cancel",t),Ce("close",t),s=r;break;case"iframe":case"object":case"embed":Ce("load",t),s=r;break;case"video":case"audio":for(s=0;s<Bi.length;s++)Ce(Bi[s],t);s=r;break;case"source":Ce("error",t),s=r;break;case"img":case"image":case"link":Ce("error",t),Ce("load",t),s=r;break;case"details":Ce("toggle",t),s=r;break;case"input":jp(t,r),s=Ju(t,r),Ce("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),Ce("invalid",t);break;case"textarea":Ap(t,r),s=td(t,r),Ce("invalid",t);break;default:s=r}rd(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?z0(t,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&D0(t,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&uo(t,c):typeof c=="number"&&uo(t,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(co.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ce("scroll",t):c!=null&&wh(t,i,c,o))}switch(n){case"input":gl(t),Pp(t,r,!1);break;case"textarea":gl(t),Lp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ls(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=fa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ct(e),null;case 6:if(t&&e.stateNode!=null)ly(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Wr(wo.current),Wr(_n.current),Sl(e)){if(r=e.stateNode,n=e.memoizedProps,r[fn]=e,(i=r.nodeValue!==n)&&(t=At,t!==null))switch(t.tag){case 3:Nl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fn]=e,e.stateNode=r}return ct(e),null;case 13:if(Ne(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&jt!==null&&e.mode&1&&!(e.flags&128))Ng(),Gs(),e.flags|=98560,i=!1;else if(i=Sl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[fn]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ct(e),i=!1}else Kt!==null&&(zd(Kt),Kt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?Ge===0&&(Ge=3):sf())),e.updateQueue!==null&&(e.flags|=4),ct(e),null);case 4:return Ks(),Rd(t,e),t===null&&yo(e.stateNode.containerInfo),ct(e),null;case 10:return Bh(e.type._context),ct(e),null;case 17:return St(e.type)&&pa(),ct(e),null;case 19:if(Ne(Ae),i=e.memoizedState,i===null)return ct(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ji(i,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ba(t),o!==null){for(e.flags|=128,ji(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ke(Ae,Ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&Be()>Js&&(e.flags|=128,r=!0,ji(i,!1),e.lanes=4194304)}else{if(!r)if(t=ba(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ji(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Re)return ct(e),null}else 2*Be()-i.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,ji(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Be(),e.sibling=null,n=Ae.current,ke(Ae,r?n&1|2:n&1),e):(ct(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ct(e),e.subtreeFlags&6&&(e.flags|=8192)):ct(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function zw(t,e){switch(Mh(e),e.tag){case 1:return St(e.type)&&pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Ne(Nt),Ne(ht),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vh(e),null;case 13:if(Ne(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Ae),null;case 4:return Ks(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var Tl=!1,ut=!1,Uw=typeof WeakSet=="function"?WeakSet:Set,$=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function jd(t,e,n){try{n()}catch(r){De(t,e,r)}}var km=!1;function Fw(t,e){if(pd=ua,t=hg(),Oh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==i||r!==0&&d.nodeType!==3||(c=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++h===r&&(c=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(md={focusedElem:t,selectionRange:n},ua=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,k=v.memoizedState,_=e.stateNode,m=_.getSnapshotBeforeUpdate(e.elementType===e.type?w:Gt(e.type,w),k);_.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(x){De(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return v=km,km=!1,v}function Xi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&jd(e,n,i)}s=s.next}while(s!==r)}}function hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ay(t){var e=t.alternate;e!==null&&(t.alternate=null,ay(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[fn],delete e[xo],delete e[yd],delete e[ww],delete e[kw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cy(t){return t.tag===5||t.tag===3||t.tag===4}function Cm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fa));else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function Ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ld(t,e,n),t=t.sibling;t!==null;)Ld(t,e,n),t=t.sibling}var rt=null,Xt=!1;function Jn(t,e,n){for(n=n.child;n!==null;)uy(t,e,n),n=n.sibling}function uy(t,e,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:ut||Rs(n,e);case 6:var r=rt,s=Xt;rt=null,Jn(t,e,n),rt=r,Xt=s,rt!==null&&(Xt?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(Xt?(t=rt,n=n.stateNode,t.nodeType===8?cu(t.parentNode,n):t.nodeType===1&&cu(t,n),mo(t)):cu(rt,n.stateNode));break;case 4:r=rt,s=Xt,rt=n.stateNode.containerInfo,Xt=!0,Jn(t,e,n),rt=r,Xt=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&jd(n,e,o),s=s.next}while(s!==r)}Jn(t,e,n);break;case 1:if(!ut&&(Rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Jn(t,e,n),ut=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function Nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uw),e.forEach(function(r){var s=Xw.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,Xt=!1;break e;case 3:rt=l.stateNode.containerInfo,Xt=!0;break e;case 4:rt=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(rt===null)throw Error(L(160));uy(i,o,s),rt=null,Xt=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){De(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dy(e,t),e=e.sibling}function dy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),dn(t),r&4){try{Xi(3,t,t.return),hc(3,t)}catch(w){De(t,t.return,w)}try{Xi(5,t,t.return)}catch(w){De(t,t.return,w)}}break;case 1:Qt(e,t),dn(t),r&512&&n!==null&&Rs(n,n.return);break;case 5:if(Qt(e,t),dn(t),r&512&&n!==null&&Rs(n,n.return),t.flags&32){var s=t.stateNode;try{uo(s,"")}catch(w){De(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&A0(s,i),sd(l,o);var u=sd(l,i);for(o=0;o<c.length;o+=2){var h=c[o],d=c[o+1];h==="style"?z0(s,d):h==="dangerouslySetInnerHTML"?D0(s,d):h==="children"?uo(s,d):wh(s,h,d,u)}switch(l){case"input":Zu(s,i);break;case"textarea":L0(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Ls(s,!!i.multiple,p,!1):f!==!!i.multiple&&(i.defaultValue!=null?Ls(s,!!i.multiple,i.defaultValue,!0):Ls(s,!!i.multiple,i.multiple?[]:"",!1))}s[xo]=i}catch(w){De(t,t.return,w)}}break;case 6:if(Qt(e,t),dn(t),r&4){if(t.stateNode===null)throw Error(L(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){De(t,t.return,w)}}break;case 3:if(Qt(e,t),dn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(e.containerInfo)}catch(w){De(t,t.return,w)}break;case 4:Qt(e,t),dn(t);break;case 13:Qt(e,t),dn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(tf=Be())),r&4&&Nm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||h,Qt(e,t),ut=u):Qt(e,t),dn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(d=$=h;$!==null;){switch(f=$,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xi(4,f,f.return);break;case 1:Rs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){De(r,n,w)}}break;case 5:Rs(f,f.return);break;case 22:if(f.memoizedState!==null){Im(d);continue}}p!==null?(p.return=f,$=p):Im(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,c=d.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=M0("display",o))}catch(w){De(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){De(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qt(e,t),dn(t),r&4&&Nm(t);break;case 21:break;default:Qt(e,t),dn(t)}}function dn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cy(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(uo(s,""),r.flags&=-33);var i=Cm(t);Ld(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cm(t);Ad(t,l,o);break;default:throw Error(L(161))}}catch(c){De(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bw(t,e,n){$=t,hy(t)}function hy(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Tl;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||ut;l=Tl;var u=ut;if(Tl=o,(ut=c)&&!u)for($=s;$!==null;)o=$,c=o.child,o.tag===22&&o.memoizedState!==null?Em(s):c!==null?(c.return=o,$=c):Em(s);for(;i!==null;)$=i,hy(i),i=i.sibling;$=s,Tl=l,ut=u}Sm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Sm(t)}}function Sm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||hc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Gt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&um(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}um(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ut||e.flags&512&&Pd(e)}catch(f){De(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Im(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Em(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hc(4,e)}catch(c){De(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(c){De(e,s,c)}}var i=e.return;try{Pd(e)}catch(c){De(e,i,c)}break;case 5:var o=e.return;try{Pd(e)}catch(c){De(e,o,c)}}}catch(c){De(e,e.return,c)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var $w=Math.ceil,Ca=Yn.ReactCurrentDispatcher,Zh=Yn.ReactCurrentOwner,Wt=Yn.ReactCurrentBatchConfig,ue=0,Ze=null,$e=null,it=0,Rt=0,js=Pr(0),Ge=0,So=null,Zr=0,fc=0,ef=0,Ki=null,wt=null,tf=0,Js=1/0,Nn=null,Na=!1,Od=null,yr=null,Rl=!1,dr=null,Sa=0,qi=0,Dd=null,Kl=-1,ql=0;function gt(){return ue&6?Be():Kl!==-1?Kl:Kl=Be()}function vr(t){return t.mode&1?ue&2&&it!==0?it&-it:Nw.transition!==null?(ql===0&&(ql=K0()),ql):(t=_e,t!==0||(t=window.event,t=t===void 0?16:rg(t.type)),t):1}function en(t,e,n,r){if(50<qi)throw qi=0,Dd=null,Error(L(185));Vo(t,n,r),(!(ue&2)||t!==Ze)&&(t===Ze&&(!(ue&2)&&(fc|=n),Ge===4&&ir(t,it)),It(t,r),n===1&&ue===0&&!(e.mode&1)&&(Js=Be()+500,cc&&Ar()))}function It(t,e){var n=t.callbackNode;N1(t,e);var r=ca(t,t===Ze?it:0);if(r===0)n!==null&&Mp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mp(n),e===1)t.tag===0?Cw(Tm.bind(null,t)):wg(Tm.bind(null,t)),xw(function(){!(ue&6)&&Ar()}),n=null;else{switch(q0(r)){case 1:n=Ih;break;case 4:n=G0;break;case 16:n=aa;break;case 536870912:n=X0;break;default:n=aa}n=xy(n,fy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fy(t,e){if(Kl=-1,ql=0,ue&6)throw Error(L(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var r=ca(t,t===Ze?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ia(t,r);else{e=r;var s=ue;ue|=2;var i=my();(Ze!==t||it!==e)&&(Nn=null,Js=Be()+500,Yr(t,e));do try{Vw();break}catch(l){py(t,l)}while(!0);Fh(),Ca.current=i,ue=s,$e!==null?e=0:(Ze=null,it=0,e=Ge)}if(e!==0){if(e===2&&(s=cd(t),s!==0&&(r=s,e=Md(t,s))),e===1)throw n=So,Yr(t,0),ir(t,r),It(t,Be()),n;if(e===6)ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!Ww(s)&&(e=Ia(t,r),e===2&&(i=cd(t),i!==0&&(r=i,e=Md(t,i))),e===1))throw n=So,Yr(t,0),ir(t,r),It(t,Be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:zr(t,wt,Nn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=tf+500-Be(),10<e)){if(ca(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=gd(zr.bind(null,t,wt,Nn),e);break}zr(t,wt,Nn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Zt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$w(r/1960))-r,10<r){t.timeoutHandle=gd(zr.bind(null,t,wt,Nn),r);break}zr(t,wt,Nn);break;case 5:zr(t,wt,Nn);break;default:throw Error(L(329))}}}return It(t,Be()),t.callbackNode===n?fy.bind(null,t):null}function Md(t,e){var n=Ki;return t.current.memoizedState.isDehydrated&&(Yr(t,e).flags|=256),t=Ia(t,e),t!==2&&(e=wt,wt=n,e!==null&&zd(e)),t}function zd(t){wt===null?wt=t:wt.push.apply(wt,t)}function Ww(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~ef,e&=~fc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Tm(t){if(ue&6)throw Error(L(327));Us();var e=ca(t,0);if(!(e&1))return It(t,Be()),null;var n=Ia(t,e);if(t.tag!==0&&n===2){var r=cd(t);r!==0&&(e=r,n=Md(t,r))}if(n===1)throw n=So,Yr(t,0),ir(t,e),It(t,Be()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,wt,Nn),It(t,Be()),null}function nf(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Js=Be()+500,cc&&Ar())}}function es(t){dr!==null&&dr.tag===0&&!(ue&6)&&Us();var e=ue;ue|=1;var n=Wt.transition,r=_e;try{if(Wt.transition=null,_e=1,t)return t()}finally{_e=r,Wt.transition=n,ue=e,!(ue&6)&&Ar()}}function rf(){Rt=js.current,Ne(js)}function Yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vw(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pa();break;case 3:Ks(),Ne(Nt),Ne(ht),Yh();break;case 5:Vh(r);break;case 4:Ks();break;case 13:Ne(Ae);break;case 19:Ne(Ae);break;case 10:Bh(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Ze=t,$e=t=xr(t.current,null),it=Rt=e,Ge=0,So=null,ef=fc=Zr=0,wt=Ki=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}$r=null}return t}function py(t,e){do{var n=$e;try{if(Fh(),Ql.current=ka,wa){for(var r=Le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}wa=!1}if(Jr=0,Ke=He=Le=null,Gi=!1,ko=0,Zh.current=null,n===null||n.return===null){Ge=1,So=e,$e=null;break}e:{var i=t,o=n.return,l=n,c=e;if(e=it,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=_m(o);if(p!==null){p.flags&=-257,gm(p,o,l,i,e),p.mode&1&&mm(i,u,e),e=p,c=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(c),e.updateQueue=w}else v.add(c);break e}else{if(!(e&1)){mm(i,u,e),sf();break e}c=Error(L(426))}}else if(Re&&l.mode&1){var k=_m(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),gm(k,o,l,i,e),zh(qs(c,l));break e}}i=c=qs(c,l),Ge!==4&&(Ge=2),Ki===null?Ki=[i]:Ki.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=qg(i,c,e);cm(i,_);break e;case 1:l=c;var m=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yr===null||!yr.has(y)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Jg(i,l,e);cm(i,x);break e}}i=i.return}while(i!==null)}gy(n)}catch(b){e=b,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function my(){var t=Ca.current;return Ca.current=ka,t===null?ka:t}function sf(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ze===null||!(Zr&268435455)&&!(fc&268435455)||ir(Ze,it)}function Ia(t,e){var n=ue;ue|=2;var r=my();(Ze!==t||it!==e)&&(Nn=null,Yr(t,e));do try{Hw();break}catch(s){py(t,s)}while(!0);if(Fh(),ue=n,Ca.current=r,$e!==null)throw Error(L(261));return Ze=null,it=0,Ge}function Hw(){for(;$e!==null;)_y($e)}function Vw(){for(;$e!==null&&!_1();)_y($e)}function _y(t){var e=vy(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?gy(t):$e=e,Zh.current=null}function gy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zw(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,$e=null;return}}else if(n=Mw(n,e,Rt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Ge===0&&(Ge=5)}function zr(t,e,n){var r=_e,s=Wt.transition;try{Wt.transition=null,_e=1,Yw(t,e,n,r)}finally{Wt.transition=s,_e=r}return null}function Yw(t,e,n,r){do Us();while(dr!==null);if(ue&6)throw Error(L(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(S1(t,i),t===Ze&&($e=Ze=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,xy(aa,function(){return Us(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Wt.transition,Wt.transition=null;var o=_e;_e=1;var l=ue;ue|=4,Zh.current=null,Fw(t,n),dy(n,t),hw(md),ua=!!pd,md=pd=null,t.current=n,Bw(n),g1(),ue=l,_e=o,Wt.transition=i}else t.current=n;if(Rl&&(Rl=!1,dr=t,Sa=s),i=t.pendingLanes,i===0&&(yr=null),x1(n.stateNode),It(t,Be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Na)throw Na=!1,t=Od,Od=null,t;return Sa&1&&t.tag!==0&&Us(),i=t.pendingLanes,i&1?t===Dd?qi++:(qi=0,Dd=t):qi=0,Ar(),null}function Us(){if(dr!==null){var t=q0(Sa),e=Wt.transition,n=_e;try{if(Wt.transition=null,_e=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,Sa=0,ue&6)throw Error(L(331));var s=ue;for(ue|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Xi(8,h,i)}var d=h.child;if(d!==null)d.return=h,$=d;else for(;$!==null;){h=$;var f=h.sibling,p=h.return;if(ay(h),h===u){$=null;break}if(f!==null){f.return=p,$=f;break}$=p}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xi(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,$=_;break e}$=i.return}}var m=t.current;for($=m;$!==null;){o=$;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,$=y;else e:for(o=m;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hc(9,l)}}catch(b){De(l,l.return,b)}if(l===o){$=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,$=x;break e}$=l.return}}if(ue=s,Ar(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(sc,t)}catch{}r=!0}return r}finally{_e=n,Wt.transition=e}}return!1}function Rm(t,e,n){e=qs(n,e),e=qg(t,e,1),t=gr(t,e,1),e=gt(),t!==null&&(Vo(t,1,e),It(t,e))}function De(t,e,n){if(t.tag===3)Rm(t,t,n);else for(;e!==null;){if(e.tag===3){Rm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=qs(n,t),t=Jg(e,t,1),e=gr(e,t,1),t=gt(),e!==null&&(Vo(e,1,t),It(e,t));break}}e=e.return}}function Qw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,Ze===t&&(it&n)===n&&(Ge===4||Ge===3&&(it&130023424)===it&&500>Be()-tf?Yr(t,0):ef|=n),It(t,e)}function yy(t,e){e===0&&(t.mode&1?(e=xl,xl<<=1,!(xl&130023424)&&(xl=4194304)):e=1);var n=gt();t=Fn(t,e),t!==null&&(Vo(t,e,n),It(t,n))}function Gw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yy(t,n)}function Xw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),yy(t,n)}var vy;vy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kt=!1,Dw(t,e,n);kt=!!(t.flags&131072)}else kt=!1,Re&&e.flags&1048576&&kg(e,ga,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xl(t,e),t=e.pendingProps;var s=Qs(e,ht.current);zs(e,n),s=Gh(null,e,r,t,s,n);var i=Xh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,ma(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Wh(e),s.updater=dc,e.stateNode=s,s._reactInternals=e,Cd(e,r,t,n),e=Id(null,e,r,!0,i,n)):(e.tag=0,Re&&i&&Dh(e),pt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=qw(r),t=Gt(r,t),s){case 0:e=Sd(null,e,r,t,n);break e;case 1:e=xm(null,e,r,t,n);break e;case 11:e=ym(null,e,r,t,n);break e;case 14:e=vm(null,e,r,Gt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),Sd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),xm(t,e,r,s,n);case 3:e:{if(ny(e),t===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Tg(t,e),xa(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qs(Error(L(423)),e),e=bm(t,e,r,n,s);break e}else if(r!==s){s=qs(Error(L(424)),e),e=bm(t,e,r,n,s);break e}else for(jt=_r(e.stateNode.containerInfo.firstChild),At=e,Re=!0,Kt=null,n=Ig(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),r===s){e=Bn(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return Rg(e),t===null&&bd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,_d(r,s)?o=null:i!==null&&_d(r,i)&&(e.flags|=32),ty(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&bd(e),null;case 13:return ry(t,e,n);case 4:return Hh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),ym(t,e,r,s,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ke(ya,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!Nt.current){e=Bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Dn(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),wd(i.return,n,e),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}pt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,zs(e,n),s=Ht(s),r=r(s),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,s=Gt(r,e.pendingProps),s=Gt(r.type,s),vm(t,e,r,s,n);case 15:return Zg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Gt(r,s),Xl(t,e),e.tag=1,St(r)?(t=!0,ma(e)):t=!1,zs(e,n),Kg(e,r,s),Cd(e,r,s,n),Id(null,e,r,!0,t,n);case 19:return sy(t,e,n);case 22:return ey(t,e,n)}throw Error(L(156,e.tag))};function xy(t,e){return Q0(t,e)}function Kw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new Kw(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qw(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===Nh)return 14}return 2}function xr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Jl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bs:return Qr(n.children,s,i,e);case kh:o=8,s|=8;break;case Gu:return t=Bt(12,n,e,s|2),t.elementType=Gu,t.lanes=i,t;case Xu:return t=Bt(13,n,e,s),t.elementType=Xu,t.lanes=i,t;case Ku:return t=Bt(19,n,e,s),t.elementType=Ku,t.lanes=i,t;case R0:return pc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E0:o=10;break e;case T0:o=9;break e;case Ch:o=11;break e;case Nh:o=14;break e;case er:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Qr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function pc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=R0,t.lanes=n,t.stateNode={isHidden:!1},t}function gu(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function yu(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jc(0),this.expirationTimes=Jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,s,i,o,l,c){return t=new Jw(t,e,n,l,c),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(i),t}function Zw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function by(t){if(!t)return Sr;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(St(n))return bg(t,n,e)}return e}function wy(t,e,n,r,s,i,o,l,c){return t=lf(n,r,!0,t,s,i,o,l,c),t.context=by(null),n=t.current,r=gt(),s=vr(n),i=Dn(r,s),i.callback=e??null,gr(n,i,s),t.current.lanes=s,Vo(t,s,r),It(t,r),t}function mc(t,e,n,r){var s=e.current,i=gt(),o=vr(s);return n=by(n),e.context===null?e.context=n:e.pendingContext=n,e=Dn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(s,e,o),t!==null&&(en(t,s,o,i),Yl(t,s,o)),o}function Ea(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){jm(t,e),(t=t.alternate)&&jm(t,e)}function ek(){return null}var ky=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}_c.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));mc(t,e,null,null)};_c.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){mc(null,t,null,null)}),e[Un]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var e=eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&ng(t)}};function uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Pm(){}function tk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Ea(o);i.call(u)}}var o=wy(e,r,t,0,null,!1,!1,"",Pm);return t._reactRootContainer=o,t[Un]=o.current,yo(t.nodeType===8?t.parentNode:t),es(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=Ea(c);l.call(u)}}var c=lf(t,0,!1,null,null,!1,!1,"",Pm);return t._reactRootContainer=c,t[Un]=c.current,yo(t.nodeType===8?t.parentNode:t),es(function(){mc(e,c,n,r)}),c}function yc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Ea(o);l.call(c)}}mc(e,o,t,s)}else o=tk(n,e,t,s,r);return Ea(o)}J0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Eh(e,n|1),It(e,Be()),!(ue&6)&&(Js=Be()+500,Ar()))}break;case 13:es(function(){var r=Fn(t,1);if(r!==null){var s=gt();en(r,t,1,s)}}),af(t,1)}};Th=function(t){if(t.tag===13){var e=Fn(t,134217728);if(e!==null){var n=gt();en(e,t,134217728,n)}af(t,134217728)}};Z0=function(t){if(t.tag===13){var e=vr(t),n=Fn(t,e);if(n!==null){var r=gt();en(n,t,e,r)}af(t,e)}};eg=function(){return _e};tg=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};od=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=ac(r);if(!s)throw Error(L(90));P0(r),Zu(r,s)}}}break;case"textarea":L0(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};B0=nf;$0=es;var nk={usingClientEntryPoint:!1,Events:[Qo,Ns,ac,U0,F0,nf]},Pi={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rk={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V0(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{sc=jl.inject(rk),mn=jl}catch{}}Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nk;Ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uf(e))throw Error(L(200));return Zw(t,e,null,n)};Ot.createRoot=function(t,e){if(!uf(t))throw Error(L(299));var n=!1,r="",s=ky;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,s),t[Un]=e.current,yo(t.nodeType===8?t.parentNode:t),new cf(e)};Ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=V0(e),t=t===null?null:t.stateNode,t};Ot.flushSync=function(t){return es(t)};Ot.hydrate=function(t,e,n){if(!gc(e))throw Error(L(200));return yc(null,t,e,!0,n)};Ot.hydrateRoot=function(t,e,n){if(!uf(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=ky;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wy(e,null,t,1,n??null,s,!1,i,o),t[Un]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new _c(e)};Ot.render=function(t,e,n){if(!gc(e))throw Error(L(200));return yc(null,t,e,!1,n)};Ot.unmountComponentAtNode=function(t){if(!gc(t))throw Error(L(40));return t._reactRootContainer?(es(function(){yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Ot.unstable_batchedUpdates=nf;Ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gc(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return yc(t,e,n,!1,r)};Ot.version="18.3.1-next-f1338f8080-20240426";function Cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cy)}catch(t){console.error(t)}}Cy(),C0.exports=Ot;var Ps=C0.exports,Am=Ps;Yu.createRoot=Am.createRoot,Yu.hydrateRoot=Am.hydrateRoot;var sk=`svg[fill=none] {
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
}`,ik={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=sk,document.head.appendChild(t))}var ve=ik,ok=({size:t=24})=>a.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),vu="__agentation_freeze";function lk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[vu]||(t[vu]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[vu]}var nt=lk();typeof window<"u"&&!nt.installed&&(nt.origSetTimeout=window.setTimeout.bind(window),nt.origSetInterval=window.setInterval.bind(window),nt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?nt.origSetTimeout(t,e):nt.origSetTimeout((...r)=>{nt.frozen?nt.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?nt.origSetInterval(t,e):nt.origSetInterval((...r)=>{nt.frozen||t(...r)},e,...n),window.requestAnimationFrame=t=>nt.origRAF(e=>{nt.frozen?nt.frozenRAFQueue.push(t):t(e)}),nt.installed=!0);var ys=nt.origSetTimeout;nt.origSetInterval;g.forwardRef(function({element:e,timestamp:n,selectedText:r,placeholder:s="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:c,onDelete:u,style:h,accentColor:d="#3c82f7",isExiting:f=!1,lightMode:p=!1,computedStyles:v},w){const[k,_]=g.useState(i),[m,y]=g.useState(!1),[x,b]=g.useState("initial"),[N,S]=g.useState(!1),[C,j]=g.useState(!1),E=g.useRef(null),I=g.useRef(null),T=g.useRef(null),M=g.useRef(null);g.useEffect(()=>{f&&x!=="exit"&&b("exit")},[f,x]),g.useEffect(()=>{ys(()=>{b("enter")},0);const z=ys(()=>{b("entered")},200),B=ys(()=>{const q=E.current;q&&(q.focus(),q.selectionStart=q.selectionEnd=q.value.length,q.scrollTop=q.scrollHeight)},50);return()=>{clearTimeout(z),clearTimeout(B),T.current&&clearTimeout(T.current),M.current&&clearTimeout(M.current)}},[]);const F=g.useCallback(()=>{M.current&&clearTimeout(M.current),y(!0),M.current=ys(()=>{var z;y(!1),(z=E.current)==null||z.focus()},250)},[]);g.useImperativeHandle(w,()=>({shake:F}),[F]);const J=g.useCallback(()=>{b("exit"),T.current=ys(()=>{c()},150)},[c]),se=g.useCallback(()=>{k.trim()&&l(k.trim())},[k,l]),ne=g.useCallback(z=>{z.nativeEvent.isComposing||(z.key==="Enter"&&!z.shiftKey&&(z.preventDefault(),se()),z.key==="Escape"&&J())},[se,J]),O=[ve.popup,p?ve.light:"",x==="enter"?ve.enter:"",x==="entered"?ve.entered:"",x==="exit"?ve.exit:"",m?ve.shake:""].filter(Boolean).join(" ");return a.jsxs("div",{ref:I,className:O,"data-annotation-popup":!0,style:h,onClick:z=>z.stopPropagation(),children:[a.jsxs("div",{className:ve.header,children:[v&&Object.keys(v).length>0?a.jsxs("button",{className:ve.headerToggle,onClick:()=>{const z=C;j(!C),z&&ys(()=>{var B;return(B=E.current)==null?void 0:B.focus()},0)},type:"button",children:[a.jsx("svg",{className:`${ve.chevron} ${C?ve.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a.jsx("span",{className:ve.element,children:e})]}):a.jsx("span",{className:ve.element,children:e}),n&&a.jsx("span",{className:ve.timestamp,children:n})]}),v&&Object.keys(v).length>0&&a.jsx("div",{className:`${ve.stylesWrapper} ${C?ve.expanded:""}`,children:a.jsx("div",{className:ve.stylesInner,children:a.jsx("div",{className:ve.stylesBlock,children:Object.entries(v).map(([z,B])=>a.jsxs("div",{className:ve.styleLine,children:[a.jsx("span",{className:ve.styleProperty,children:z.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",a.jsx("span",{className:ve.styleValue,children:B}),";"]},z))})})}),r&&a.jsxs("div",{className:ve.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),a.jsx("textarea",{ref:E,className:ve.textarea,style:{borderColor:N?d:void 0},placeholder:s,value:k,onChange:z=>_(z.target.value),onFocus:()=>S(!0),onBlur:()=>S(!1),rows:2,onKeyDown:ne}),a.jsxs("div",{className:ve.actions,children:[u&&a.jsx("div",{className:ve.deleteWrapper,children:a.jsx("button",{className:ve.deleteButton,onClick:u,type:"button",children:a.jsx(ok,{size:22})})}),a.jsx("button",{className:ve.cancel,onClick:J,children:"Cancel"}),a.jsx("button",{className:ve.submit,style:{backgroundColor:d,opacity:k.trim()?1:.4},onClick:se,disabled:!k.trim(),children:o})]})]})});var ak=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=ak,document.head.appendChild(t))}var Lm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const D=function(t,e){if(!t)throw ui(e)},ui=function(t){return new Error("Firebase Database ("+Ny.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ck=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,p=u&63;c||(p=64,o||(f=64)),r.push(n[h],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ck(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new uk;const f=i<<2|l>>4;if(r.push(f),u!==64){const p=l<<4&240|u>>2;if(r.push(p),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iy=function(t){const e=Sy(t);return df.encodeByteArray(e,!0)},Ta=function(t){return Iy(t).replace(/\./g,"")},Ra=function(t){try{return df.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pk=()=>fk().__FIREBASE_DEFAULTS__,mk=()=>{if(typeof process>"u"||typeof Lm>"u")return;const t=Lm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_k=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ra(t[1]);return e&&JSON.parse(e)},hf=()=>{try{return pk()||mk()||_k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ty=t=>{var e,n;return(n=(e=hf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ry=t=>{const e=Ty(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jy=()=>{var t;return(t=hf())===null||t===void 0?void 0:t.config},Py=t=>{var e;return(e=hf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ay(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ff(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function gk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ly(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vk(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xk(){return Ny.NODE_ADMIN===!0}function bk(){try{return typeof indexedDB=="object"}catch{return!1}}function wk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk="FirebaseError";class Qn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=kk,Object.setPrototypeOf(this,Qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ko.prototype.create)}}class Ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ck(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Qn(s,l,r)}}function Ck(t,e){return t.replace(Nk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t){return JSON.parse(t)}function Qe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Io(Ra(i[0])||""),n=Io(Ra(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},Sk=function(t){const e=Oy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ik=function(t){const e=Oy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Zs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ja(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Pa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Om(i)&&Om(o)){if(!Pa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Om(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const f=(s<<5|s>>>27)+u+c+h+r[d]&4294967295;c=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function Tk(t,e){const n=new Rk(t,e);return n.subscribe.bind(n)}class Rk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=xu),s.error===void 0&&(s.error=xu),s.complete===void 0&&(s.complete=xu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xu(){}function vc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class Ak{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ok(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lk(t){return t===Ur?void 0:t}function Ok(t){return t.instantiationMode==="EAGER"}/**
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
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const Mk={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},zk=ge.INFO,Uk={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},Fk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Uk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pf{constructor(e){this.name=e,this._logLevel=zk,this._logHandler=Fk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const Bk=(t,e)=>e.some(n=>t instanceof n);let Dm,Mm;function $k(){return Dm||(Dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wk(){return Mm||(Mm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dy=new WeakMap,Fd=new WeakMap,My=new WeakMap,bu=new WeakMap,mf=new WeakMap;function Hk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dy.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function Vk(t){if(Fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fd.set(t,e)}let Bd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||My.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yk(t){Bd=t(Bd)}function Qk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wu(this),e,...n);return My.set(r,e.sort?e.sort():[e]),br(r)}:Wk().includes(t)?function(...e){return t.apply(wu(this),e),br(Dy.get(this))}:function(...e){return br(t.apply(wu(this),e))}}function Gk(t){return typeof t=="function"?Qk(t):(t instanceof IDBTransaction&&Vk(t),Bk(t,$k())?new Proxy(t,Bd):t)}function br(t){if(t instanceof IDBRequest)return Hk(t);if(bu.has(t))return bu.get(t);const e=Gk(t);return e!==t&&(bu.set(t,e),mf.set(e,t)),e}const wu=t=>mf.get(t);function Xk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",c=>{r(br(o.result),c.oldVersion,c.newVersion,br(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Kk=["get","getKey","getAll","getAllKeys","count"],qk=["put","add","delete","clear"],ku=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ku.get(e))return ku.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kk.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return ku.set(e,i),i}Yk(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
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
 */const $n=new pf("@firebase/app"),e2="@firebase/app-compat",t2="@firebase/analytics-compat",n2="@firebase/analytics",r2="@firebase/app-check-compat",s2="@firebase/app-check",i2="@firebase/auth",o2="@firebase/auth-compat",l2="@firebase/database",a2="@firebase/data-connect",c2="@firebase/database-compat",u2="@firebase/functions",d2="@firebase/functions-compat",h2="@firebase/installations",f2="@firebase/installations-compat",p2="@firebase/messaging",m2="@firebase/messaging-compat",_2="@firebase/performance",g2="@firebase/performance-compat",y2="@firebase/remote-config",v2="@firebase/remote-config-compat",x2="@firebase/storage",b2="@firebase/storage-compat",w2="@firebase/firestore",k2="@firebase/vertexai-preview",C2="@firebase/firestore-compat",N2="firebase",S2="10.14.1";/**
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
 */const Wd="[DEFAULT]",I2={[$d]:"fire-core",[e2]:"fire-core-compat",[n2]:"fire-analytics",[t2]:"fire-analytics-compat",[s2]:"fire-app-check",[r2]:"fire-app-check-compat",[i2]:"fire-auth",[o2]:"fire-auth-compat",[l2]:"fire-rtdb",[a2]:"fire-data-connect",[c2]:"fire-rtdb-compat",[u2]:"fire-fn",[d2]:"fire-fn-compat",[h2]:"fire-iid",[f2]:"fire-iid-compat",[p2]:"fire-fcm",[m2]:"fire-fcm-compat",[_2]:"fire-perf",[g2]:"fire-perf-compat",[y2]:"fire-rc",[v2]:"fire-rc-compat",[x2]:"fire-gcs",[b2]:"fire-gcs-compat",[w2]:"fire-fst",[C2]:"fire-fst-compat",[k2]:"fire-vertex","fire-js":"fire-js",[N2]:"fire-js-all"};/**
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
 */const Aa=new Map,E2=new Map,Hd=new Map;function Fm(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Hd.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;Hd.set(e,t);for(const n of Aa.values())Fm(n,t);for(const n of E2.values())Fm(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jn(t){return t.settings!==void 0}/**
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
 */const T2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new Ko("app","Firebase",T2);/**
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
 */class R2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const us=S2;function zy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=jy()),!n)throw wr.create("no-options");const i=Aa.get(s);if(i){if(Pa(n,i.options)&&Pa(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new Dk(s);for(const c of Hd.values())o.addComponent(c);const l=new R2(n,r,o);return Aa.set(s,l),l}function _f(t=Wd){const e=Aa.get(t);if(!e&&t===Wd&&jy())return zy();if(!e)throw wr.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=I2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}ts(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const j2="firebase-heartbeat-database",P2=1,Eo="firebase-heartbeat-store";let Cu=null;function Uy(){return Cu||(Cu=Xk(j2,P2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Cu}async function A2(t){try{const n=(await Uy()).transaction(Eo),r=await n.objectStore(Eo).get(Fy(t));return await n.done,r}catch(e){if(e instanceof Qn)$n.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function Bm(t,e){try{const r=(await Uy()).transaction(Eo,"readwrite");await r.objectStore(Eo).put(e,Fy(t)),await r.done}catch(n){if(n instanceof Qn)$n.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function Fy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const L2=1024,O2=30*24*60*60*1e3;class D2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$m();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=O2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$m(),{heartbeatsToSend:r,unsentEntries:s}=M2(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function $m(){return new Date().toISOString().substring(0,10)}function M2(t,e=L2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bk()?wk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await A2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wm(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function U2(t){ts(new Ir("platform-logger",e=>new Jk(e),"PRIVATE")),ts(new Ir("heartbeat",e=>new D2(e),"PRIVATE")),gn($d,Um,t),gn($d,Um,"esm2017"),gn("fire-js","")}U2("");function gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function By(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const F2=By,$y=new Ko("auth","Firebase",By());/**
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
 */const La=new pf("@firebase/auth");function B2(t,...e){La.logLevel<=ge.WARN&&La.warn(`Auth (${us}): ${t}`,...e)}function Zl(t,...e){La.logLevel<=ge.ERROR&&La.error(`Auth (${us}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw vf(t,...e)}function tn(t,...e){return vf(t,...e)}function yf(t,e,n){const r=Object.assign(Object.assign({},F2()),{[e]:n});return new Ko("auth","Firebase",r).create(e,{appName:t.name})}function Gr(t){return yf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&vn(t,"argument-error"),yf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return $y.create(t,...e)}function ee(t,e,...n){if(!t)throw vf(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function Wn(t,e){t||Pn(e)}/**
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
 */function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function W2(){return Hm()==="http:"||Hm()==="https:"}function Hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=ff()||Ly()}get(){return H2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xf(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Q2=new qo(3e4,6e4);function bf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hi(t,e,n,r,s={}){return Hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=di(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return gk()||(u.referrerPolicy="no-referrer"),Wy.fetch()(Vy(t,t.config.apiHost,n,l),u)})}async function Hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Y2),e);try{const s=new X2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Pl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pl(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pl(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pl(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yf(t,h,u);vn(t,h)}}catch(s){if(s instanceof Qn)throw s;vn(t,"network-request-failed",{message:String(s)})}}async function G2(t,e,n,r,s={}){const i=await hi(t,e,n,r,s);return"mfaPendingCredential"in i&&vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xf(t.config,s):`${t.config.apiScheme}://${s}`}class X2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),Q2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function K2(t,e){return hi(t,"POST","/v1/accounts:delete",e)}async function Yy(t,e){return hi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function q2(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=wf(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ji(Nu(s.auth_time)),issuedAtTime:Ji(Nu(s.iat)),expirationTime:Ji(Nu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nu(t){return Number(t)*1e3}function wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ra(n);return s?JSON.parse(s):(Zl("Failed to decode base64 JWT payload"),null)}catch(s){return Zl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vm(t){const e=wf(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function To(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qn&&J2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function J2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await To(t,Yy(n,{idToken:r}));ee(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Qy(i.providerUserInfo):[],l=tC(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Yd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function eC(t){const e=We(t);await Oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qy(t){return t.map(e=>{var{providerId:n}=e,r=gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nC(t,e){const n=await Hy(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Wy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function rC(t,e){return hi(t,"POST","/v2/accounts:revokeToken",bf(t,e))}/**
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
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Vm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await nC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Fs;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
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
 */function Zn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class An{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Z2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await To(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return q2(this,e)}reload(){return eC(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new An(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await To(this,K2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,_=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:x,isAnonymous:b,providerData:N,stsTokenManager:S}=n;ee(y&&S,e,"internal-error");const C=Fs.fromJSON(this.name,S);ee(typeof y=="string",e,"internal-error"),Zn(d,e.name),Zn(f,e.name),ee(typeof x=="boolean",e,"internal-error"),ee(typeof b=="boolean",e,"internal-error"),Zn(p,e.name),Zn(v,e.name),Zn(w,e.name),Zn(k,e.name),Zn(_,e.name),Zn(m,e.name);const j=new An({uid:y,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:b,photoURL:v,phoneNumber:p,tenantId:w,stsTokenManager:C,createdAt:_,lastLoginAt:m});return N&&Array.isArray(N)&&(j.providerData=N.map(E=>Object.assign({},E))),k&&(j._redirectEventId=k),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new Fs;s.updateFromServerResponse(n);const i=new An({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Fs;l.updateFromIdToken(r);const c=new An({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Ym=new Map;function Ln(t){Wn(t instanceof Function,"Expected a class definition");let e=Ym.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ym.set(t,e),e)}/**
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
 */class Gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gy.type="NONE";const Qm=Gy;/**
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
 */function ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=ea("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?An._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Ln(Qm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Ln(Qm);const o=ea(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=An._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Bs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Bs(i,e,r))}}/**
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
 */function Gm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ev(e))return"Blackberry";if(tv(e))return"Webos";if(Ky(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Zy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xy(t=vt()){return/firefox\//i.test(t)}function Ky(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(t=vt()){return/crios\//i.test(t)}function Jy(t=vt()){return/iemobile/i.test(t)}function Zy(t=vt()){return/android/i.test(t)}function ev(t=vt()){return/blackberry/i.test(t)}function tv(t=vt()){return/webos/i.test(t)}function kf(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sC(t=vt()){var e;return kf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iC(){return vk()&&document.documentMode===10}function nv(t=vt()){return kf(t)||Zy(t)||tv(t)||ev(t)||/windows phone/i.test(t)||Jy(t)}/**
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
 */function rv(t,e=[]){let n;switch(t){case"Browser":n=Gm(vt());break;case"Worker":n=`${Gm(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${us}/${r}`}/**
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
 */async function lC(t,e={}){return hi(t,"GET","/v2/passwordPolicy",bf(t,e))}/**
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
 */class uC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new oC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$y,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Yy(this,{idToken:e}),r=await An._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=V2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(Gr(this));const n=e?We(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lC(this),n=new cC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ko("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await rC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&B2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wc(t){return We(t)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tk(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mC(t,e){const n=bc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pa(i,e??{}))return s;vn(s,"already-initialized")}return n.initialize({options:e})}function _C(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gC(t,e,n){const r=wc(t);ee(r._canInitEmulator,r,"emulator-config-failed"),ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sv(e),{host:o,port:l}=yC(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),vC()}function sv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yC(t){const e=sv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Km(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Km(o)}}}function Km(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class iv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}/**
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
 */async function $s(t,e){return G2(t,"POST","/v1/accounts:signInWithIdp",bf(t,e))}/**
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
 */const xC="http://localhost";class ns extends iv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ns(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:xC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class Jo extends Nf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class or extends Jo{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
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
 */class In extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ns._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return In.credential(n,r)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
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
 */class lr extends Jo{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.GITHUB_SIGN_IN_METHOD="github.com";lr.PROVIDER_ID="github.com";/**
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
 */class ar extends Jo{constructor(){super("twitter.com")}static credential(e,n){return ns._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await An._fromIdTokenResponse(e,r,s),o=qm(r);return new ei({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qm(r);return new ei({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Da extends Qn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Da.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Da(e,n,r,s)}}function ov(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Da._fromErrorAndOperation(t,i,e,r):i})}async function bC(t,e,n=!1){const r=await To(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
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
 */async function wC(t,e,n=!1){const{auth:r}=t;if(jn(r.app))return Promise.reject(Gr(r));const s="reauthenticate";try{const i=await To(t,ov(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=wf(i.idToken);ee(o,r,"internal-error");const{sub:l}=o;return ee(t.uid===l,r,"user-mismatch"),ei._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),i}}/**
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
 */async function kC(t,e,n=!1){if(jn(t.app))return Promise.reject(Gr(t));const r="signIn",s=await ov(t,r,e),i=await ei._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function CC(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function NC(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function SC(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function IC(t){return We(t).signOut()}const Ma="__sak";/**
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
 */class lv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EC=1e3,TC=10;class av extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);iC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const RC=av;/**
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
 */class cv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cv.type="SESSION";const uv=cv;/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await jC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function yn(){return window}function AC(t){yn().location.href=t}/**
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
 */function dv(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function LC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DC(){return dv()?self:null}/**
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
 */const hv="firebaseLocalStorageDb",MC=1,za="firebaseLocalStorage",fv="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cc(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function zC(){const t=indexedDB.deleteDatabase(hv);return new Zo(t).toPromise()}function Qd(){const t=indexedDB.open(hv,MC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:fv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await zC(),e(await Qd()))})})}async function Jm(t,e,n){const r=Cc(t,!0).put({[fv]:e,value:n});return new Zo(r).toPromise()}async function UC(t,e){const n=Cc(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function Zm(t,e){const n=Cc(t,!0).delete(e);return new Zo(n).toPromise()}const FC=800,BC=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>BC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(DC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LC(),!this.activeServiceWorker)return;this.sender=new PC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Jm(e,Ma,"1"),await Zm(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>UC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cc(s,!1).getAll();return new Zo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const $C=pv;new qo(3e4,6e4);/**
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
 */function mv(t,e){return e?Ln(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class If extends iv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WC(t){return kC(t.auth,new If(t),t.bypassAuthState)}function HC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),wC(n,new If(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),bC(n,new If(t),t.bypassAuthState)}/**
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
 */class _v{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return HC;default:vn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const YC=new qo(2e3,1e4);async function QC(t,e,n){if(jn(t.app))return Promise.reject(tn(t,"operation-not-supported-in-this-environment"));const r=wc(t);$2(t,e,Nf);const s=mv(r,n);return new Hr(r,"signInViaPopup",e,s).executeNotNull()}class Hr extends _v{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YC.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const GC="pendingRedirect",ta=new Map;class XC extends _v{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ta.get(this.auth._key());if(!e){try{const r=await KC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ta.set(this.auth._key(),e)}return this.bypassAuthState||ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KC(t,e){const n=ZC(e),r=JC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qC(t,e){ta.set(t._key(),e)}function JC(t){return Ln(t._redirectPersistence)}function ZC(t){return ea(GC,t.config.apiKey,t.name)}async function eN(t,e,n=!1){if(jn(t.app))return Promise.reject(Gr(t));const r=wc(t),s=mv(r,e),o=await new XC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tN=10*60*1e3;class nN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tN&&this.cachedEventUids.clear(),this.cachedEventUids.has(e_(e))}saveEventToCache(e){this.cachedEventUids.add(e_(e)),this.lastProcessedEventTime=Date.now()}}function e_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gv(t);default:return!1}}/**
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
 */async function sN(t,e={}){return hi(t,"GET","/v1/projects",e)}/**
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
 */const iN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oN=/^https?/;async function lN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sN(t);for(const n of e)try{if(aN(n))return}catch{}vn(t,"unauthorized-domain")}function aN(t){const e=Vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!oN.test(n))return!1;if(iN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const cN=new qo(3e4,6e4);function t_(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uN(t){return new Promise((e,n)=>{var r,s,i;function o(){t_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{t_(),n(tn(t,"network-request-failed"))},timeout:cN.get()})}if(!((s=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=yn().gapi)===null||i===void 0)&&i.load)o();else{const l=pC("iframefcb");return yn()[l]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},hC(`${fC()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw na=null,e})}let na=null;function dN(t){return na=na||uN(t),na}/**
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
 */const hN=new qo(5e3,15e3),fN="__/auth/iframe",pN="emulator/auth/iframe",mN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_N=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gN(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xf(e,pN):`https://${t.config.authDomain}/${fN}`,r={apiKey:e.apiKey,appName:t.name,v:us},s=_N.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${di(r).slice(1)}`}async function yN(t){const e=await dN(t),n=yn().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:gN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),l=yn().setTimeout(()=>{i(o)},hN.get());function c(){yn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xN=500,bN=600,wN="_blank",kN="http://localhost";class n_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function CN(t,e,n,r=xN,s=bN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},vN),{width:r.toString(),height:s.toString(),top:i,left:o}),u=vt().toLowerCase();n&&(l=qy(u)?wN:n),Xy(u)&&(e=e||kN,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(sC(u)&&l!=="_self")return NN(e||"",l),new n_(null);const d=window.open(e||"",l,h);ee(d,t,"popup-blocked");try{d.focus()}catch{}return new n_(d)}function NN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const SN="__/auth/handler",IN="emulator/auth/handler",EN=encodeURIComponent("fac");async function r_(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:us,eventId:s};if(e instanceof Nf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Jo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${EN}=${encodeURIComponent(c)}`:"";return`${TN(t)}?${di(l).slice(1)}${u}`}function TN({config:t}){return t.emulator?xf(t,IN):`https://${t.authDomain}/${SN}`}/**
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
 */const Su="webStorageSupport";class RN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uv,this._completeRedirectFn=eN,this._overrideRedirectResult=qC}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await r_(e,n,r,Vd(),s);return CN(e,o,Sf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await r_(e,n,r,Vd(),s);return AC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yN(e),r=new nN(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Su,{type:Su},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Su];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nv()||Ky()||kf()}}const jN=RN;var s_="@firebase/auth",i_="1.7.9";/**
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
 */class PN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function AN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LN(t){ts(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rv(t)},u=new uC(r,s,i,c);return _C(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new Ir("auth-internal",e=>{const n=wc(e.getProvider("auth").getImmediate());return(r=>new PN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(s_,i_,AN(t)),gn(s_,i_,"esm2017")}/**
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
 */const ON=5*60,DN=Py("authIdTokenMaxAge")||ON;let o_=null;const MN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DN)return;const s=n==null?void 0:n.token;o_!==s&&(o_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zN(t=_f()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mC(t,{popupRedirectResolver:jN,persistence:[$C,RC,uv]}),r=Py("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=MN(i.toString());NC(n,o,()=>o(n.currentUser)),CC(n,l=>o(l))}}const s=Ty("auth");return s&&gC(n,`http://${s}`),n}function UN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",UN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LN("Browser");var l_={};const a_="@firebase/database",c_="1.0.8";/**
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
 */let yv="";function FN(t){yv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Qe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Io(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BN(e)}}catch{}return new $N},Vr=vv("localStorage"),WN=vv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new pf("@firebase/database"),HN=function(){let t=1;return function(){return t++}}(),xv=function(t){const e=Pk(t),n=new Ek;n.update(e);const r=n.digest();return df.encodeByteArray(r)},el=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=el.apply(null,r):typeof r=="object"?e+=Qe(r):e+=r,e+=" "}return e};let Zi=null,u_=!0;const VN=function(t,e){D(!0,"Can't turn on custom loggers persistently."),Ws.logLevel=ge.VERBOSE,Zi=Ws.log.bind(Ws)},st=function(...t){if(u_===!0&&(u_=!1,Zi===null&&WN.get("logging_enabled")===!0&&VN()),Zi){const e=el.apply(null,t);Zi(e)}},tl=function(t){return function(...e){st(t,...e)}},Gd=function(...t){const e="FIREBASE INTERNAL ERROR: "+el(...t);Ws.error(e)},Hn=function(...t){const e=`FIREBASE FATAL ERROR: ${el(...t)}`;throw Ws.error(e),new Error(e)},yt=function(...t){const e="FIREBASE WARNING: "+el(...t);Ws.warn(e)},YN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ef=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},QN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ti="[MIN_NAME]",rs="[MAX_NAME]",ds=function(t,e){if(t===e)return 0;if(t===ti||e===rs)return-1;if(e===ti||t===rs)return 1;{const n=d_(t),r=d_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GN=function(t,e){return t===e?0:t<e?-1:1},Ai=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Qe(e))},Tf=function(t){if(typeof t!="object"||t===null)return Qe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Qe(e[r]),n+=":",n+=Tf(t[e[r]]);return n+="}",n},bv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function lt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wv=function(t){D(!Ef(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,c;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let f=parseInt(h.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},XN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const JN=new RegExp("^-?(0*)\\d{1,10}$"),ZN=-2147483648,eS=2147483647,d_=function(t){if(JN.test(t)){const e=Number(t);if(e>=ZN&&e<=eS)return e}return null},fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},tS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},eo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class nS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(st("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class ra{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ra.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="5",kv="v",Cv="s",Nv="r",Sv="f",Iv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ev="ls",Tv="p",Xd="ac",Rv="websocket",jv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,n,r,s,i=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function sS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Av(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===Rv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sS(t)&&(n.ns=t.namespace);const s=[];return lt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.counters_={}}incrementCounter(e,n=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dk(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu={},Eu={};function jf(t){const e=t.toString();return Iu[e]||(Iu[e]=new iS),Iu[e]}function oS(t,e){const n=t.toString();return Eu[n]||(Eu[n]=e()),Eu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&fi(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="start",aS="close",cS="pLPCommand",uS="pRTLPCB",Lv="id",Ov="pw",Dv="ser",dS="cb",hS="seg",fS="ts",pS="d",mS="dframe",Mv=1870,zv=30,_S=Mv-zv,gS=25e3,yS=3e4;class As{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tl(e),this.stats_=jf(n),this.urlFn=c=>(this.appCheckToken&&(c[Xd]=this.appCheckToken),Av(n,jv,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new lS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(yS)),QN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pf((...i)=>{const[o,l,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===h_)this.id=l,this.password=c;else if(o===aS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[h_]="t",r[Dv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[dS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[kv]=Rf,this.transportSessionId&&(r[Cv]=this.transportSessionId),this.lastSessionId&&(r[Ev]=this.lastSessionId),this.applicationId&&(r[Tv]=this.applicationId),this.appCheckToken&&(r[Xd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Iv.test(location.hostname)&&(r[Nv]=Sv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){As.forceAllow_=!0}static forceDisallow(){As.forceDisallow_=!0}static isAvailable(){return As.forceAllow_?!0:!As.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!XN()&&!KN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iy(n),s=bv(r,_S);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[mS]="t",r[Lv]=e,r[Ov]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Qe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=HN(),window[cS+this.uniqueCallbackIdentifier]=e,window[uS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){st("frame writing exception"),l.stack&&st(l.stack),st(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||st("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lv]=this.myID,e[Ov]=this.myPW,e[Dv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zv+r.length<=Mv;){const o=this.pendingSegs.shift();r=r+"&"+hS+s+"="+o.seg+"&"+fS+s+"="+o.ts+"&"+pS+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(gS)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{st("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=16384,xS=45e3;let Ua=null;typeof MozWebSocket<"u"?Ua=MozWebSocket:typeof WebSocket<"u"&&(Ua=WebSocket);class qt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tl(this.connId),this.stats_=jf(n),this.connURL=qt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[kv]=Rf,typeof location<"u"&&location.hostname&&Iv.test(location.hostname)&&(o[Nv]=Sv),n&&(o[Cv]=n),r&&(o[Ev]=r),s&&(o[Xd]=s),i&&(o[Tv]=i),Av(e,Rv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vr.set("previous_websocket_failure",!0);try{let r;xk(),this.mySock=new Ua(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ua!==null&&!qt.forceDisallow_}static previouslyFailed(){return Vr.isInMemoryStorage||Vr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Io(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Qe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bv(n,vS);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}qt.responsesRequiredToBeHealthy=2;qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[As,qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=qt&&qt.isAvailable();let r=n&&!qt.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[qt];else{const s=this.transports_=[];for(const i of Ro.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ro.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ro.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=6e4,wS=5e3,kS=10*1024,CS=100*1024,Tu="t",f_="d",NS="s",p_="r",SS="e",m_="o",__="a",g_="n",y_="p",IS="h";class ES{constructor(e,n,r,s,i,o,l,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tl("c:"+this.id+":"),this.transportManager_=new Ro(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=eo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>kS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Tu in e){const n=e[Tu];n===__?this.upgradeIfSecondaryHealthy_():n===p_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===m_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:y_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:__,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:g_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ai("t",e),r=Ai("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ai(Tu,e);if(f_ in e){const r=e[f_];if(n===IS){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===g_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NS?this.onConnectionShutdown_(r):n===p_?this.onReset_(r):n===SS?Gd("Server Error: "+r):n===m_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Rf!==r&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),eo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):eo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:y_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fv{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends Fv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ff()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Fa}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=32,x_=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ye("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function we(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function Af(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Bv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Me(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ye(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return _t(we(t),we(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function RS(t,e){const n=jo(t,0),r=jo(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=ds(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Lf(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function $t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class jS{constructor(e,n){this.errorPrefix_=n,this.parts_=jo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xc(this.parts_[r]);$v(this)}}function PS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xc(e),$v(t)}function AS(t){const e=t.parts_.pop();t.byteLength_-=xc(e),t.parts_.length>0&&(t.byteLength_-=1)}function $v(t){if(t.byteLength_>x_)throw new Error(t.errorPrefix_+"has a key path longer than "+x_+" bytes ("+t.byteLength_+").");if(t.parts_.length>v_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+v_+") or object contains a cycle "+Fr(t))}function Fr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of extends Fv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Of}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=1e3,LS=60*5*1e3,b_=30*1e3,OS=1.3,DS=3e4,MS="server_kill",w_=3;class Mn extends Uv{constructor(e,n,r,s,i,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Mn.nextPersistentConnectionId_++,this.log_=tl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Li,this.maxReconnectDelay_=LS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Of.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Qe(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Xo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const c=l.d,u=l.s;Mn.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bn(e,"w")){const r=Zs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ik(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=b_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Qe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Gd("Unrecognized action received from server: "+Qe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DS&&(this.reconnectDelay_=Li),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*OS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Mn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,r())},u=function(d){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?st("getToken() completed but was canceled"):(st("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new ES(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{yt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(MS)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&yt(d),c())}}}interrupt(e){st("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){st("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ud(this.interruptReasons_)&&(this.reconnectDelay_=Li,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Tf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){st("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=w_&&(this.reconnectDelay_=b_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){st("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=w_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yv.replace(/\./g,"-")]=1,ff()?e["framework.cordova"]=1:Ly()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fa.getInstance().currentlyOnline();return Ud(this.interruptReasons_)&&e}}Mn.nextPersistentConnectionId_=0;Mn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(ti,e),s=new oe(ti,n);return this.compare(r,s)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Al;class Wv extends Nc{static get __EMPTY_NODE(){return Al}static set __EMPTY_NODE(e){Al=e}compare(e,n){return ds(e.name,n.name)}isDefinedOn(e){throw ui("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(rs,Al)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Al)}toString(){return".key"}}const Hs=new Wv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??qe.RED,this.left=s??Ct.EMPTY_NODE,this.right=i??Ct.EMPTY_NODE}copy(e,n,r,s,i){return new qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ct.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qe.RED=!0;qe.BLACK=!1;class zS{copy(e,n,r,s,i){return this}insert(e,n,r){return new qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,n=Ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ll(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ll(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ll(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new zS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t,e){return ds(t.name,e.name)}function Df(t,e){return ds(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd;function FS(t){Kd=t}const Hv=function(t){return typeof t=="number"?"number:"+wv(t):"string:"+t},Vv=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else D(t===Kd||t.isEmpty(),"priority of unexpected type.");D(t===Kd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k_;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vv(this.priorityNode_)}static set __childrenNodeConstructor(e){k_=e}static get __childrenNodeConstructor(){return k_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(we(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wv(this.value_):e+=this.value_,this.lazyHash_=xv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Xe.VALUE_TYPE_ORDER.indexOf(n),i=Xe.VALUE_TYPE_ORDER.indexOf(r);return D(s>=0,"Unknown leaf type: "+n),D(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yv,Qv;function BS(t){Yv=t}function $S(t){Qv=t}class WS extends Nc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ds(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(rs,new Xe("[PRIORITY-POST]",Qv))}makePost(e,n){const r=Yv(e);return new oe(n,new Xe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ze=new WS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=Math.log(2);class VS{constructor(e){const n=i=>parseInt(Math.log(i)/HS,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ba=function(t,e,n,r){t.sort(e);const s=function(c,u){const h=u-c;let d,f;if(h===0)return null;if(h===1)return d=t[c],f=n?n(d):d,new qe(f,d.node,qe.BLACK,null,null);{const p=parseInt(h/2,10)+c,v=s(c,p),w=s(p+1,u);return d=t[p],f=n?n(d):d,new qe(f,d.node,qe.BLACK,v,w)}},i=function(c){let u=null,h=null,d=t.length;const f=function(v,w){const k=d-v,_=d;d-=v;const m=s(k+1,_),y=t[k],x=n?n(y):y;p(new qe(x,y.node,w,null,m))},p=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<c.count;++v){const w=c.nextBitIsOne(),k=Math.pow(2,c.count-(v+1));w?f(k,qe.BLACK):(f(k,qe.BLACK),f(k,qe.RED))}return h},o=new VS(t.length),l=i(o);return new Ct(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;const vs={};class On{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(vs&&ze,"ChildrenNode.ts has not been loaded"),Ru=Ru||new On({".priority":vs},{".priority":ze}),Ru}get(e){const n=Zs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ct?n:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Hs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(oe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=Ba(r,e.getCompare()):l=vs;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new On(h,u)}addToIndexes(e,n){const r=ja(this.indexes_,(s,i)=>{const o=Zs(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),s===vs)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(oe.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Ba(l,o.getCompare())}else return vs;else{const l=n.get(e.name);let c=s;return l&&(c=c.remove(new oe(e.name,l))),c.insert(e,e.node)}});return new On(r,this.indexSet_)}removeFromIndexes(e,n){const r=ja(this.indexes_,s=>{if(s===vs)return s;{const i=n.get(e.name);return i?s.remove(new oe(e.name,i)):s}});return new On(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi;class K{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Vv(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Oi||(Oi=new K(new Ct(Df),null,On.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Oi}updatePriority(e){return this.children_.isEmpty()?this:new K(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Oi:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(we(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Oi:this.priorityNode_;return new K(s,o,i)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{D(ie(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(we(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ze,(o,l)=>{n[o]=l.val(e),r++,i&&K.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hv(this.getPriority().val())+":"),this.forEachChild(ze,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":xv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new oe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nl?-1:0}withIndex(e){if(e===Hs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new K(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ze),s=n.getIterator(ze);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hs?null:this.indexMap_.get(e.toString())}}K.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YS extends K{constructor(){super(new Ct(Df),K.EMPTY_NODE,On.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return K.EMPTY_NODE}isEmpty(){return!1}}const nl=new YS;Object.defineProperties(oe,{MIN:{value:new oe(ti,K.EMPTY_NODE)},MAX:{value:new oe(rs,nl)}});Wv.__EMPTY_NODE=K.EMPTY_NODE;Xe.__childrenNodeConstructor=K;FS(nl);$S(nl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=!0;function Ye(t,e=null){if(t===null)return K.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,Ye(e))}if(!(t instanceof Array)&&QS){const n=[];let r=!1;if(lt(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Ye(l);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new oe(o,c)))}}),n.length===0)return K.EMPTY_NODE;const i=Ba(n,US,o=>o.name,Df);if(r){const o=Ba(n,ze.getCompare());return new K(i,Ye(e),new On({".priority":o},{".priority":ze}))}else return new K(i,Ye(e),On.Default)}else{let n=K.EMPTY_NODE;return lt(t,(r,s)=>{if(bn(t,r)&&r.substring(0,1)!=="."){const i=Ye(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ye(e))}}BS(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS extends Nc{constructor(e){super(),this.indexPath_=e,D(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ds(e.name,n.name):i}makePost(e,n){const r=Ye(e),s=K.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,s)}maxPost(){const e=K.EMPTY_NODE.updateChild(this.indexPath_,nl);return new oe(rs,e)}toString(){return jo(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS extends Nc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ds(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=Ye(e);return new oe(n,r)}toString(){return".value"}}const KS=new XS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(t){return{type:"value",snapshotNode:t}}function ni(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Po(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ao(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function qS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Po(n,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ni(n,r)):o.trackChildChange(Ao(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ze,(s,i)=>{n.hasChild(s)||r.trackChildChange(Po(s,i))}),n.isLeafNode()||n.forEachChild(ze,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ao(s,i,o))}else r.trackChildChange(ni(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?K.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.indexedFilter_=new Mf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Lo.getStartPost_(e),this.endPost_=Lo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new oe(n,r))||(r=K.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=K.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(K.EMPTY_NODE);const i=this;return n.forEachChild(ze,(o,l)=>{i.matches(new oe(o,l))||(s=s.updateImmediateChild(o,K.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Lo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new oe(n,r))||(r=K.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=K.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=K.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(K.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,K.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const c=new oe(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,c);if(h&&!r.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Ao(n,r,d)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Po(n,d));const w=l.updateImmediateChild(n,K.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(ni(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(u,c)>=0?(i!=null&&(i.trackChildChange(Po(u.name,u.node)),i.trackChildChange(ni(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,K.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ze}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ti}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ze}copy(){const e=new zf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ZS(t){return t.loadsAllData()?new Mf(t.getIndex()):t.hasLimit()?new JS(t):new Lo(t)}function C_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ze?n="$priority":t.index_===KS?n="$value":t.index_===Hs?n="$key":(D(t.index_ instanceof GS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Qe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Qe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Qe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Qe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Qe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function N_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ze&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends Uv{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=tl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=$a.getListenId_(e,r),l={};this.listens_[o]=l;const c=C_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Zs(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=$a.getListenId_(e,n);delete this.listens_[r]}get(e){const n=C_(e._queryParams),r=e._path.toString(),s=new Xo;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+di(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Io(l.responseText)}catch{yt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,c)}else l.status!==401&&l.status!==404&&yt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(){this.rootNode_=K.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){return{value:null,children:new Map}}function Xv(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,Wa());const s=t.children.get(r);e=we(e),Xv(s,e,n)}}function qd(t,e,n){t.value!==null?n(e,t.value):tI(t,(r,s)=>{const i=new ye(e.toString()+"/"+r);qd(s,i,n)})}function tI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&lt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=10*1e3,rI=30*1e3,sI=5*60*1e3;class iI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new nI(e);const r=S_+(rI-S_)*Math.random();eo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;lt(e,(s,i)=>{i>0&&bn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),eo(this.reportStats_.bind(this),Math.floor(Math.random()*2*sI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jt||(Jt={}));function Uf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ff(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Jt.ACK_USER_WRITE,this.source=Uf()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new Ha(de(),n,this.revert)}}else return D(ie(this.path)===e,"operationForChild called for unrelated child."),new Ha(we(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n){this.source=e,this.path=n,this.type=Jt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new Oo(this.source,de()):new Oo(this.source,we(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Jt.OVERWRITE}operationForChild(e){return le(this.path)?new ss(this.source,de(),this.snap.getImmediateChild(e)):new ss(this.source,we(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Jt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new ss(this.source,de(),n.value):new ri(this.source,de(),n)}else return D(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ri(this.source,we(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function lI(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(qS(o.childName,o.snapshotNode))}),Di(t,s,"child_removed",e,r,n),Di(t,s,"child_added",e,r,n),Di(t,s,"child_moved",i,r,n),Di(t,s,"child_changed",e,r,n),Di(t,s,"value",e,r,n),s}function Di(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,c)=>cI(t,l,c)),o.forEach(l=>{const c=aI(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,t.query_))})})}function aI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cI(t,e,n){if(e.childName==null||n.childName==null)throw ui("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),s=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e){return{eventCache:t,serverCache:e}}function to(t,e,n,r){return Sc(new Tr(e,n,r),t.serverCache)}function Kv(t,e,n,r){return Sc(t.eventCache,new Tr(e,n,r))}function Va(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function is(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju;const uI=()=>(ju||(ju=new Ct(GN)),ju);class be{constructor(e,n=uI()){this.value=e,this.children=n}static fromObject(e){let n=new be(null);return lt(e,(r,s)=>{n=n.set(new ye(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(le(e))return null;{const r=ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(we(e),n);return i!=null?{path:Me(new ye(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(we(e)):new be(null)}}set(e,n){if(le(e))return new be(n,this.children);{const r=ie(e),i=(this.children.get(r)||new be(null)).set(we(e),n),o=this.children.insert(r,i);return new be(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const s=r.remove(we(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new be(null):new be(this.value,i)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(we(e)):null}}setTree(e,n){if(le(e))return n;{const r=ie(e),i=(this.children.get(r)||new be(null)).setTree(we(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new be(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Me(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(le(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(we(e),Me(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,r){if(le(e))return this;{this.value&&r(n,this.value);const s=ie(e),i=this.children.get(s);return i?i.foreachOnPath_(we(e),Me(n,s),r):new be(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Me(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.writeTree_=e}static empty(){return new nn(new be(null))}}function no(t,e,n){if(le(e))return new nn(new be(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=_t(s,e);return i=i.updateChild(o,n),new nn(t.writeTree_.set(s,i))}else{const s=new be(n),i=t.writeTree_.setTree(e,s);return new nn(i)}}}function Jd(t,e,n){let r=t;return lt(n,(s,i)=>{r=no(r,Me(e,s),i)}),r}function I_(t,e){if(le(e))return nn.empty();{const n=t.writeTree_.setTree(e,new be(null));return new nn(n)}}function Zd(t,e){return hs(t,e)!=null}function hs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function E_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ze,(r,s)=>{e.push(new oe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new oe(r,s.value))}),e}function kr(t,e){if(le(e))return t;{const n=hs(t,e);return n!=null?new nn(new be(n)):new nn(t.writeTree_.subtree(e))}}function eh(t){return t.writeTree_.isEmpty()}function si(t,e){return qv(de(),t.writeTree_,e)}function qv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=qv(Me(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Me(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e){return tx(e,t)}function dI(t,e,n,r,s){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=no(t.visibleWrites,e,n)),t.lastWriteId=r}function hI(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Jd(t.visibleWrites,e,n),t.lastWriteId=r}function fI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function pI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&mI(l,r.path)?s=!1:$t(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return _I(t),!0;if(r.snap)t.visibleWrites=I_(t.visibleWrites,r.path);else{const l=r.children;lt(l,c=>{t.visibleWrites=I_(t.visibleWrites,Me(r.path,c))})}return!0}else return!1}function mI(t,e){if(t.snap)return $t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$t(Me(t.path,n),e))return!0;return!1}function _I(t){t.visibleWrites=Jv(t.allWrites,gI,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function gI(t){return t.visible}function Jv(t,e,n){let r=nn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)$t(n,o)?(l=_t(n,o),r=no(r,l,i.snap)):$t(o,n)&&(l=_t(o,n),r=no(r,de(),i.snap.getChild(l)));else if(i.children){if($t(n,o))l=_t(n,o),r=Jd(r,l,i.children);else if($t(o,n))if(l=_t(o,n),le(l))r=Jd(r,de(),i.children);else{const c=Zs(i.children,ie(l));if(c){const u=c.getChild(we(l));r=no(r,de(),u)}}}else throw ui("WriteRecord should have .snap or .children")}}return r}function Zv(t,e,n,r,s){if(!r&&!s){const i=hs(t.visibleWrites,e);if(i!=null)return i;{const o=kr(t.visibleWrites,e);if(eh(o))return n;if(n==null&&!Zd(o,de()))return null;{const l=n||K.EMPTY_NODE;return si(o,l)}}}else{const i=kr(t.visibleWrites,e);if(!s&&eh(i))return n;if(!s&&n==null&&!Zd(i,de()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&($t(u.path,e)||$t(e,u.path))},l=Jv(t.allWrites,o,e),c=n||K.EMPTY_NODE;return si(l,c)}}}function yI(t,e,n){let r=K.EMPTY_NODE;const s=hs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ze,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=kr(t.visibleWrites,e);return n.forEachChild(ze,(o,l)=>{const c=si(kr(i,new ye(o)),l);r=r.updateImmediateChild(o,c)}),E_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=kr(t.visibleWrites,e);return E_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function vI(t,e,n,r,s){D(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Me(e,n);if(Zd(t.visibleWrites,i))return null;{const o=kr(t.visibleWrites,i);return eh(o)?s.getChild(n):si(o,s.getChild(n))}}function xI(t,e,n,r){const s=Me(e,n),i=hs(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=kr(t.visibleWrites,s);return si(o,r.getNode().getImmediateChild(n))}else return null}function bI(t,e){return hs(t.visibleWrites,e)}function wI(t,e,n,r,s,i,o){let l;const c=kr(t.visibleWrites,e),u=hs(c,de());if(u!=null)l=u;else if(n!=null)l=si(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=f.getNext();for(;p&&h.length<s;)d(p,r)!==0&&h.push(p),p=f.getNext();return h}else return[]}function kI(){return{visibleWrites:nn.empty(),allWrites:[],lastWriteId:-1}}function Ya(t,e,n,r){return Zv(t.writeTree,t.treePath,e,n,r)}function $f(t,e){return yI(t.writeTree,t.treePath,e)}function T_(t,e,n,r){return vI(t.writeTree,t.treePath,e,n,r)}function Qa(t,e){return bI(t.writeTree,Me(t.treePath,e))}function CI(t,e,n,r,s,i){return wI(t.writeTree,t.treePath,e,n,r,s,i)}function Wf(t,e,n){return xI(t.writeTree,t.treePath,e,n)}function ex(t,e){return tx(Me(t.treePath,e),t.writeTree)}function tx(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ao(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Po(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ni(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ao(r,e.snapshotNode,s.oldSnap));else throw ui("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const nx=new SI;class Hf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Tr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:is(this.viewCache_),i=CI(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t){return{filter:t}}function EI(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TI(t,e,n,r,s){const i=new NI;let o,l;if(n.type===Jt.OVERWRITE){const u=n;u.source.fromUser?o=th(t,e,u.path,u.snap,r,s,i):(D(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!le(u.path),o=Ga(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===Jt.MERGE){const u=n;u.source.fromUser?o=jI(t,e,u.path,u.children,r,s,i):(D(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=nh(t,e,u.path,u.children,r,s,l,i))}else if(n.type===Jt.ACK_USER_WRITE){const u=n;u.revert?o=LI(t,e,u.path,r,s,i):o=PI(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Jt.LISTEN_COMPLETE)o=AI(t,e,n.path,r,i);else throw ui("Unknown operation type: "+n.type);const c=i.getChanges();return RI(e,o,c),{viewCache:o,changes:c}}function RI(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Va(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Gv(Va(e)))}}function rx(t,e,n,r,s,i){const o=e.eventCache;if(Qa(r,n)!=null)return e;{let l,c;if(le(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=is(e),h=u instanceof K?u:K.EMPTY_NODE,d=$f(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Ya(r,is(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ie(n);if(u===".priority"){D(Er(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=T_(r,n,h,c);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=we(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const f=T_(r,n,o.getNode(),c);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Wf(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,s,i):l=o.getNode()}}return to(e,l,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function Ga(t,e,n,r,s,i,o,l){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(le(n))u=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(n,r);u=h.updateFullNode(c.getNode(),p,null)}else{const p=ie(n);if(!c.isCompleteForPath(n)&&Er(n)>1)return e;const v=we(n),k=c.getNode().getImmediateChild(p).updateChild(v,r);p===".priority"?u=h.updatePriority(c.getNode(),k):u=h.updateChild(c.getNode(),p,k,v,nx,null)}const d=Kv(e,u,c.isFullyInitialized()||le(n),h.filtersNodes()),f=new Hf(s,d,i);return rx(t,d,n,s,f,l)}function th(t,e,n,r,s,i,o){const l=e.eventCache;let c,u;const h=new Hf(s,e,i);if(le(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=to(e,u,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),c=to(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=we(n),p=l.getNode().getImmediateChild(d);let v;if(le(f))v=r;else{const w=h.getCompleteChild(d);w!=null?Af(f)===".priority"&&w.getChild(Bv(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=K.EMPTY_NODE}if(p.equals(v))c=e;else{const w=t.filter.updateChild(l.getNode(),d,v,f,h,o);c=to(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function R_(t,e){return t.eventCache.isCompleteForChild(e)}function jI(t,e,n,r,s,i,o){let l=e;return r.foreach((c,u)=>{const h=Me(n,c);R_(e,ie(h))&&(l=th(t,l,h,u,s,i,o))}),r.foreach((c,u)=>{const h=Me(n,c);R_(e,ie(h))||(l=th(t,l,h,u,s,i,o))}),l}function j_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function nh(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;le(n)?u=r:u=new be(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),v=j_(t,p,f);c=Ga(t,c,new ye(d),v,s,i,o,l)}}),u.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!p){const v=e.serverCache.getNode().getImmediateChild(d),w=j_(t,v,f);c=Ga(t,c,new ye(d),w,s,i,o,l)}}),c}function PI(t,e,n,r,s,i,o){if(Qa(s,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(le(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ga(t,e,n,c.getNode().getChild(n),s,i,l,o);if(le(n)){let u=new be(null);return c.getNode().forEachChild(Hs,(h,d)=>{u=u.set(new ye(h),d)}),nh(t,e,n,u,s,i,l,o)}else return e}else{let u=new be(null);return r.foreach((h,d)=>{const f=Me(n,h);c.isCompleteForPath(f)&&(u=u.set(h,c.getNode().getChild(f)))}),nh(t,e,n,u,s,i,l,o)}}function AI(t,e,n,r,s){const i=e.serverCache,o=Kv(e,i.getNode(),i.isFullyInitialized()||le(n),i.isFiltered());return rx(t,o,n,r,nx,s)}function LI(t,e,n,r,s,i){let o;if(Qa(r,n)!=null)return e;{const l=new Hf(r,e,s),c=e.eventCache.getNode();let u;if(le(n)||ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ya(r,is(e));else{const d=e.serverCache.getNode();D(d instanceof K,"serverChildren would be complete if leaf node"),h=$f(r,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=ie(n);let d=Wf(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,we(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,K.EMPTY_NODE,we(n),l,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ya(r,is(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Qa(r,de())!=null,to(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Mf(r.getIndex()),i=ZS(r);this.processor_=II(i);const o=n.serverCache,l=n.eventCache,c=s.updateFullNode(K.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(K.EMPTY_NODE,l.getNode(),null),h=new Tr(c,o.isFullyInitialized(),s.filtersNodes()),d=new Tr(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=Sc(d,h),this.eventGenerator_=new oI(this.query_)}get query(){return this.query_}}function DI(t){return t.viewCache_.serverCache.getNode()}function MI(t){return Va(t.viewCache_)}function zI(t,e){const n=is(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function P_(t){return t.eventRegistrations_.length===0}function UI(t,e){t.eventRegistrations_.push(e)}function A_(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function L_(t,e,n,r){e.type===Jt.MERGE&&e.source.queryId!==null&&(D(is(t.viewCache_),"We should always have a full cache before handling merges"),D(Va(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=TI(t.processor_,s,e,n,r);return EI(t.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,sx(t,i.changes,i.viewCache.eventCache.getNode(),null)}function FI(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ze,(i,o)=>{r.push(ni(i,o))}),n.isFullyInitialized()&&r.push(Gv(n.getNode())),sx(t,r,n.getNode(),e)}function sx(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return lI(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa;class ix{constructor(){this.views=new Map}}function BI(t){D(!Xa,"__referenceConstructor has already been defined"),Xa=t}function $I(){return D(Xa,"Reference.ts has not been loaded"),Xa}function WI(t){return t.views.size===0}function Vf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return D(i!=null,"SyncTree gave us an op for an invalid query."),L_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(L_(o,e,n,r));return i}}function ox(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Ya(n,s?r:null),c=!1;l?c=!0:r instanceof K?(l=$f(n,r),c=!1):(l=K.EMPTY_NODE,c=!1);const u=Sc(new Tr(l,c,!1),new Tr(r,s,!1));return new OI(e,u)}return o}function HI(t,e,n,r,s,i){const o=ox(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UI(o,n),FI(o,n)}function VI(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Rr(t);if(s==="default")for(const[c,u]of t.views.entries())o=o.concat(A_(u,n,r)),P_(u)&&(t.views.delete(c),u.query._queryParams.loadsAllData()||i.push(u.query));else{const c=t.views.get(s);c&&(o=o.concat(A_(c,n,r)),P_(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||i.push(c.query)))}return l&&!Rr(t)&&i.push(new($I())(e._repo,e._path)),{removed:i,events:o}}function lx(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Cr(t,e){let n=null;for(const r of t.views.values())n=n||zI(r,e);return n}function ax(t,e){if(e._queryParams.loadsAllData())return Ec(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cx(t,e){return ax(t,e)!=null}function Rr(t){return Ec(t)!=null}function Ec(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;function YI(t){D(!Ka,"__referenceConstructor has already been defined"),Ka=t}function QI(){return D(Ka,"Reference.ts has not been loaded"),Ka}let GI=1;class O_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=kI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ux(t,e,n,r,s){return dI(t.pendingWriteTree_,e,n,r,s),s?pi(t,new ss(Uf(),e,n)):[]}function XI(t,e,n,r){hI(t.pendingWriteTree_,e,n,r);const s=be.fromObject(n);return pi(t,new ri(Uf(),e,s))}function hr(t,e,n=!1){const r=fI(t.pendingWriteTree_,e);if(pI(t.pendingWriteTree_,e)){let i=new be(null);return r.snap!=null?i=i.set(de(),!0):lt(r.children,o=>{i=i.set(new ye(o),!0)}),pi(t,new Ha(r.path,i,n))}else return[]}function rl(t,e,n){return pi(t,new ss(Ff(),e,n))}function KI(t,e,n){const r=be.fromObject(n);return pi(t,new ri(Ff(),e,r))}function qI(t,e){return pi(t,new Oo(Ff(),e))}function JI(t,e,n){const r=Qf(t,n);if(r){const s=Gf(r),i=s.path,o=s.queryId,l=_t(i,e),c=new Oo(Bf(o),l);return Xf(t,i,c)}else return[]}function qa(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||cx(o,e))){const c=VI(o,e,n,r);WI(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=c.removed;if(l=c.events,!s){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,p)=>Rr(p));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=tE(f);for(let v=0;v<p.length;++v){const w=p[v],k=w.query,_=px(t,w);t.listenProvider_.startListening(ro(k),Do(t,k),_.hashFn,_.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(ro(e),null):u.forEach(f=>{const p=t.queryToTagMap.get(Tc(f));t.listenProvider_.stopListening(ro(f),p)}))}nE(t,u)}return l}function dx(t,e,n,r){const s=Qf(t,r);if(s!=null){const i=Gf(s),o=i.path,l=i.queryId,c=_t(o,e),u=new ss(Bf(l),c,n);return Xf(t,o,u)}else return[]}function ZI(t,e,n,r){const s=Qf(t,r);if(s){const i=Gf(s),o=i.path,l=i.queryId,c=_t(o,e),u=be.fromObject(n),h=new ri(Bf(l),c,u);return Xf(t,o,h)}else return[]}function rh(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const v=_t(f,s);i=i||Cr(p,v),o=o||Rr(p)});let l=t.syncPointTree_.get(s);l?(o=o||Rr(l),i=i||Cr(l,de())):(l=new ix,t.syncPointTree_=t.syncPointTree_.set(s,l));let c;i!=null?c=!0:(c=!1,i=K.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,v)=>{const w=Cr(v,de());w&&(i=i.updateImmediateChild(p,w))}));const u=cx(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Tc(e);D(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=rE();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const h=Ic(t.pendingWriteTree_,s);let d=HI(l,e,n,h,i,c);if(!u&&!o&&!r){const f=ax(l,e);d=d.concat(sE(t,e,f))}return d}function Yf(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=_t(o,e),u=Cr(l,c);if(u)return u});return Zv(s,e,i,n,!0)}function eE(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const d=_t(u,n);r=r||Cr(h,d)});let s=t.syncPointTree_.get(n);s?r=r||Cr(s,de()):(s=new ix,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Tr(r,!0,!1):null,l=Ic(t.pendingWriteTree_,e._path),c=ox(s,e,l,i?o.getNode():K.EMPTY_NODE,i);return MI(c)}function pi(t,e){return hx(e,t.syncPointTree_,null,Ic(t.pendingWriteTree_,de()))}function hx(t,e,n,r){if(le(t.path))return fx(t,e,n,r);{const s=e.get(de());n==null&&s!=null&&(n=Cr(s,de()));let i=[];const o=ie(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const u=n?n.getImmediateChild(o):null,h=ex(r,o);i=i.concat(hx(l,c,u,h))}return s&&(i=i.concat(Vf(s,t,r,n))),i}}function fx(t,e,n,r){const s=e.get(de());n==null&&s!=null&&(n=Cr(s,de()));let i=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,u=ex(r,o),h=t.operationForChild(o);h&&(i=i.concat(fx(h,l,c,u)))}),s&&(i=i.concat(Vf(s,t,r,n))),i}function px(t,e){const n=e.query,r=Do(t,n);return{hashFn:()=>(DI(e)||K.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?JI(t,n._path,r):qI(t,n._path);{const i=qN(s,n);return qa(t,n,null,i)}}}}function Do(t,e){const n=Tc(e);return t.queryToTagMap.get(n)}function Tc(t){return t._path.toString()+"$"+t._queryIdentifier}function Qf(t,e){return t.tagToQueryMap.get(e)}function Gf(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function Xf(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const s=Ic(t.pendingWriteTree_,e);return Vf(r,n,s,null)}function tE(t){return t.fold((e,n,r)=>{if(n&&Rr(n))return[Ec(n)];{let s=[];return n&&(s=lx(n)),lt(r,(i,o)=>{s=s.concat(o)}),s}})}function ro(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(QI())(t._repo,t._path):t}function nE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Tc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function rE(){return GI++}function sE(t,e,n){const r=e._path,s=Do(t,e),i=px(t,n),o=t.listenProvider_.startListening(ro(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)D(!Rr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,h,d)=>{if(!le(u)&&h&&Rr(h))return[Ec(h).query];{let f=[];return h&&(f=f.concat(lx(h).map(p=>p.query))),lt(d,(p,v)=>{f=f.concat(v)}),f}});for(let u=0;u<c.length;++u){const h=c[u];t.listenProvider_.stopListening(ro(h),Do(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Kf(n)}node(){return this.node_}}class qf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new qf(this.syncTree_,n)}node(){return Yf(this.syncTree_,this.path_)}}const iE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},D_=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return oE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return lE(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},oE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},lE=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},mx=function(t,e,n,r){return Jf(e,new qf(n,t),r)},_x=function(t,e,n){return Jf(t,new Kf(e),n)};function Jf(t,e,n){const r=t.getPriority().val(),s=D_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=D_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Xe(l,Ye(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Xe(s))),o.forEachChild(ze,(l,c)=>{const u=Jf(c,e.getImmediateChild(l),n);u!==c&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ep(t,e){let n=e instanceof ye?e:new ye(e),r=t,s=ie(n);for(;s!==null;){const i=Zs(r.node.children,s)||{children:{},childCount:0};r=new Zf(s,r,i),n=we(n),s=ie(n)}return r}function mi(t){return t.node.value}function gx(t,e){t.node.value=e,sh(t)}function yx(t){return t.node.childCount>0}function aE(t){return mi(t)===void 0&&!yx(t)}function Rc(t,e){lt(t.node.children,(n,r)=>{e(new Zf(n,t,r))})}function vx(t,e,n,r){n&&e(t),Rc(t,s=>{vx(s,e,!0)})}function cE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function sl(t){return new ye(t.parent===null?t.name:sl(t.parent)+"/"+t.name)}function sh(t){t.parent!==null&&uE(t.parent,t.name,t)}function uE(t,e,n){const r=aE(n),s=bn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,sh(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,sh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=/[\[\].#$\/\u0000-\u001F\u007F]/,hE=/[\[\].#$\u0000-\u001F\u007F]/,Pu=10*1024*1024,tp=function(t){return typeof t=="string"&&t.length!==0&&!dE.test(t)},xx=function(t){return typeof t=="string"&&t.length!==0&&!hE.test(t)},fE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),xx(t)},pE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ef(t)||t&&typeof t=="object"&&bn(t,".sv")},bx=function(t,e,n,r){r&&e===void 0||jc(vc(t,"value"),e,n)},jc=function(t,e,n){const r=n instanceof ye?new jS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fr(r)+" with contents = "+e.toString());if(Ef(e))throw new Error(t+"contains "+e.toString()+" "+Fr(r));if(typeof e=="string"&&e.length>Pu/3&&xc(e)>Pu)throw new Error(t+"contains a string greater than "+Pu+" utf8 bytes "+Fr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(lt(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!tp(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);PS(r,o),jc(t,l,r),AS(r)}),s&&i)throw new Error(t+' contains ".value" child '+Fr(r)+" in addition to actual children.")}},mE=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=jo(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!tp(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(RS);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&$t(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},_E=function(t,e,n,r){const s=vc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];lt(e,(o,l)=>{const c=new ye(o);if(jc(s,l,Me(n,c)),Af(c)===".priority"&&!pE(l))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(c)}),mE(s,i)},wx=function(t,e,n,r){if(!xx(n))throw new Error(vc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},gE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wx(t,e,n)},kx=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},yE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!tp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fE(n))throw new Error(vc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Lf(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Cx(t,e,n){Pc(t,n),Nx(t,r=>Lf(r,e))}function Yt(t,e,n){Pc(t,n),Nx(t,r=>$t(r,e)||$t(e,r))}function Nx(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(xE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function xE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zi&&st("event: "+n.toString()),fi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="repo_interrupt",wE=25;class kE{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wa(),this.transactionQueueTree_=new Zf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function CE(t,e,n){if(t.stats_=jf(t.repoInfo_),t.forceRestClient_||tS())t.server_=new $a(t.repoInfo_,(r,s,i,o)=>{M_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>z_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Qe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Mn(t.repoInfo_,e,(r,s,i,o)=>{M_(t,r,s,i,o)},r=>{z_(t,r)},r=>{NE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=oS(t.repoInfo_,()=>new iI(t.stats_,t.server_)),t.infoData_=new eI,t.infoSyncTree_=new O_({startListening:(r,s,i,o)=>{let l=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(l=rl(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),np(t,"connected",!1),t.serverSyncTree_=new O_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,c)=>{const u=o(l,c);Yt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Sx(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ac(t){return iE({timestamp:Sx(t)})}function M_(t,e,n,r,s){t.dataUpdateCount++;const i=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const c=ja(n,u=>Ye(u));o=ZI(t.serverSyncTree_,i,c,s)}else{const c=Ye(n);o=dx(t.serverSyncTree_,i,c,s)}else if(r){const c=ja(n,u=>Ye(u));o=KI(t.serverSyncTree_,i,c)}else{const c=Ye(n);o=rl(t.serverSyncTree_,i,c)}let l=i;o.length>0&&(l=ii(t,i)),Yt(t.eventQueue_,l,o)}function z_(t,e){np(t,"connected",e),e===!1&&TE(t)}function NE(t,e){lt(e,(n,r)=>{np(t,n,r)})}function np(t,e,n){const r=new ye("/.info/"+e),s=Ye(n);t.infoData_.updateSnapshot(r,s);const i=rl(t.infoSyncTree_,r,s);Yt(t.eventQueue_,r,i)}function rp(t){return t.nextWriteId_++}function SE(t,e,n){const r=eE(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ye(s).withIndex(e._queryParams.getIndex());rh(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=rl(t.serverSyncTree_,e._path,i);else{const l=Do(t.serverSyncTree_,e);o=dx(t.serverSyncTree_,e._path,i,l)}return Yt(t.eventQueue_,e._path,o),qa(t.serverSyncTree_,e,n,null,!0),i},s=>(il(t,"get for query "+Qe(e)+" failed: "+s),Promise.reject(new Error(s))))}function IE(t,e,n,r,s){il(t,"set",{path:e.toString(),value:n,priority:r});const i=Ac(t),o=Ye(n,r),l=Yf(t.serverSyncTree_,e),c=_x(o,l,i),u=rp(t),h=ux(t.serverSyncTree_,e,c,u,!0);Pc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const v=f==="ok";v||yt("set at "+e+" failed: "+f);const w=hr(t.serverSyncTree_,u,!v);Yt(t.eventQueue_,e,w),ih(t,s,f,p)});const d=ip(t,e);ii(t,d),Yt(t.eventQueue_,d,[])}function EE(t,e,n,r){il(t,"update",{path:e.toString(),value:n});let s=!0;const i=Ac(t),o={};if(lt(n,(l,c)=>{s=!1,o[l]=mx(Me(e,l),Ye(c),t.serverSyncTree_,i)}),s)st("update() called with empty data.  Don't do anything."),ih(t,r,"ok",void 0);else{const l=rp(t),c=XI(t.serverSyncTree_,e,o,l);Pc(t.eventQueue_,c),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||yt("update at "+e+" failed: "+u);const f=hr(t.serverSyncTree_,l,!d),p=f.length>0?ii(t,e):e;Yt(t.eventQueue_,p,f),ih(t,r,u,h)}),lt(n,u=>{const h=ip(t,Me(e,u));ii(t,h)}),Yt(t.eventQueue_,e,[])}}function TE(t){il(t,"onDisconnectEvents");const e=Ac(t),n=Wa();qd(t.onDisconnect_,de(),(s,i)=>{const o=mx(s,i,t.serverSyncTree_,e);Xv(n,s,o)});let r=[];qd(n,de(),(s,i)=>{r=r.concat(rl(t.serverSyncTree_,s,i));const o=ip(t,s);ii(t,o)}),t.onDisconnect_=Wa(),Yt(t.eventQueue_,de(),r)}function RE(t,e,n){let r;ie(e._path)===".info"?r=rh(t.infoSyncTree_,e,n):r=rh(t.serverSyncTree_,e,n),Cx(t.eventQueue_,e._path,r)}function U_(t,e,n){let r;ie(e._path)===".info"?r=qa(t.infoSyncTree_,e,n):r=qa(t.serverSyncTree_,e,n),Cx(t.eventQueue_,e._path,r)}function jE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(bE)}function il(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),st(n,...e)}function ih(t,e,n,r){e&&fi(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Ix(t,e,n){return Yf(t.serverSyncTree_,e,n)||K.EMPTY_NODE}function sp(t,e=t.transactionQueueTree_){if(e||Lc(t,e),mi(e)){const n=Tx(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&PE(t,sl(e),n)}else yx(e)&&Rc(e,n=>{sp(t,n)})}function PE(t,e,n){const r=n.map(u=>u.currentWriteId),s=Ix(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];D(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=_t(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),c=e;t.server_.put(c.toString(),l,u=>{il(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(hr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Lc(t,ep(t.transactionQueueTree_,e)),sp(t,t.transactionQueueTree_),Yt(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)fi(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{yt("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ii(t,e)}},o)}function ii(t,e){const n=Ex(t,e),r=sl(n),s=Tx(t,n);return AE(t,s,r),r}function AE(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=_t(n,c.path);let h=!1,d;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,s=s.concat(hr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=wE)h=!0,d="maxretry",s=s.concat(hr(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Ix(t,c.path,o);c.currentInputSnapshot=f;const p=e[l].update(f.val());if(p!==void 0){jc("transaction failed: Data returned ",p,c.path);let v=Ye(p);typeof p=="object"&&p!=null&&bn(p,".priority")||(v=v.updatePriority(f.getPriority()));const k=c.currentWriteId,_=Ac(t),m=_x(v,f,_);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=m,c.currentWriteId=rp(t),o.splice(o.indexOf(k),1),s=s.concat(ux(t.serverSyncTree_,c.path,m,c.currentWriteId,c.applyLocally)),s=s.concat(hr(t.serverSyncTree_,k,!0))}else h=!0,d="nodata",s=s.concat(hr(t.serverSyncTree_,c.currentWriteId,!0))}Yt(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Lc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)fi(r[l]);sp(t,t.transactionQueueTree_)}function Ex(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&mi(r)===void 0;)r=ep(r,n),e=we(e),n=ie(e);return r}function Tx(t,e){const n=[];return Rx(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Rx(t,e,n){const r=mi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Rc(e,s=>{Rx(t,s,n)})}function Lc(t,e){const n=mi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,gx(e,n.length>0?n:void 0)}Rc(e,r=>{Lc(t,r)})}function ip(t,e){const n=sl(Ex(t,e)),r=ep(t.transactionQueueTree_,e);return cE(r,s=>{Au(t,s)}),Au(t,r),vx(r,s=>{Au(t,s)}),n}function Au(t,e){const n=mi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?gx(e,void 0):n.length=i+1,Yt(t.eventQueue_,sl(e),s);for(let o=0;o<r.length;o++)fi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function OE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const F_=function(t,e){const n=DE(t),r=n.namespace;n.domain==="firebase.com"&&Hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Pv(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ye(n.pathString)}},DE=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=LE(t.substring(h,d)));const f=OE(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ME=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=B_.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=B_.charAt(e[s]);return D(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Qe(this.snapshot.exportVal())}}class UE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class op{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return le(this._path)?null:Af(this._path)}get ref(){return new Gn(this._repo,this._path)}get _queryIdentifier(){const e=N_(this._queryParams),n=Tf(e);return n==="{}"?"default":n}get _queryObject(){return N_(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof op))return!1;const n=this._repo===e._repo,r=Lf(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+TS(this._path)}}class Gn extends op{constructor(e,n){super(e,n,new zf,!1)}get parent(){const e=Bv(this._path);return e===null?null:new Gn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=zo(this.ref,e);return new Mo(this._node.getChild(n),r,ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Mo(s,zo(this.ref,r),ze)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function je(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?zo(t._root,e):t._root}function zo(t,e){return t=We(t),ie(t._path)===null?gE("child","path",e):wx("child","path",e),new Gn(t._repo,Me(t._path,e))}function FE(t,e){t=We(t),kx("push",t._path),bx("push",e,t._path,!0);const n=Sx(t._repo),r=ME(n),s=zo(t,r),i=zo(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function En(t,e){t=We(t),kx("set",t._path),bx("set",e,t._path,!1);const n=new Xo;return IE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Dr(t,e){_E("update",e,t._path);const n=new Xo;return EE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Lu(t){t=We(t);const e=new jx(()=>{}),n=new Oc(e);return SE(t._repo,t,n).then(r=>new Mo(r,new Gn(t._repo,t._path),t._queryParams.getIndex()))}class Oc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new zE("value",this,new Mo(e.snapshotNode,new Gn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new UE(this,e,n):null}matches(e){return e instanceof Oc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function BE(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const c=n,u=(h,d)=>{U_(t._repo,t,l),c(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new jx(n,i||void 0),l=new Oc(o);return RE(t._repo,t,l),()=>U_(t._repo,t,l)}function Uo(t,e,n,r){return BE(t,"value",e,n,r)}BI(Gn);YI(Gn);/**
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
 */const $E="FIREBASE_DATABASE_EMULATOR_HOST",oh={};let WE=!1;function HE(t,e,n,r){t.repoInfo_=new Pv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function VE(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),st("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=F_(i,s),l=o.repoInfo,c;typeof process<"u"&&l_&&(c=l_[$E]),c?(i=`http://${c}?ns=${l.namespace}`,o=F_(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new rS(t.name,t.options,e);yE("Invalid Firebase Database URL",o),le(o.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=QE(l,t,u,new nS(t.name,n));return new GE(h,t)}function YE(t,e){const n=oh[e];(!n||n[t.key]!==t)&&Hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jE(t),delete n[t.key]}function QE(t,e,n,r){let s=oh[e.name];s||(s={},oh[e.name]=s);let i=s[t.toURLString()];return i&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new kE(t,WE,n,r),s[t.toURLString()]=i,i}class GE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(CE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function XE(t=_f(),e){const n=bc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ry("database");r&&KE(n,...r)}return n}function KE(t,e,n,r={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new ra(ra.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ay(r.mockUserToken,t.app.options.projectId);i=new ra(o)}HE(s,e,n,i)}/**
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
 */function qE(t){FN(us),ts(new Ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return VE(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),gn(a_,c_,t),gn(a_,c_,"esm2017")}Mn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Mn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};qE();var JE="firebase",ZE="10.14.1";/**
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
 */gn(JE,ZE,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="firebasestorage.googleapis.com",Ax="storageBucket",e5=2*60*1e3,t5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends Qn{constructor(e,n,r=0){super(Ou(e),`Firebase Storage: ${n} (${Ou(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ou(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ue||(Ue={}));function Ou(t){return"storage/"+t}function lp(){const t="An unknown error occurred, please check the error payload for server response.";return new Fe(Ue.UNKNOWN,t)}function n5(t){return new Fe(Ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function r5(t){return new Fe(Ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function s5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Fe(Ue.UNAUTHENTICATED,t)}function i5(){return new Fe(Ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function o5(t){return new Fe(Ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function l5(){return new Fe(Ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function a5(){return new Fe(Ue.CANCELED,"User canceled the upload/download.")}function c5(t){return new Fe(Ue.INVALID_URL,"Invalid URL '"+t+"'.")}function u5(t){return new Fe(Ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function d5(){return new Fe(Ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ax+"' property when initializing the app?")}function h5(){return new Fe(Ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function f5(){return new Fe(Ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function p5(t){return new Fe(Ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function lh(t){return new Fe(Ue.INVALID_ARGUMENT,t)}function Lx(){return new Fe(Ue.APP_DELETED,"The Firebase app was deleted.")}function m5(t){return new Fe(Ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function so(t,e){return new Fe(Ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Mi(t){throw new Fe(Ue.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Pt.makeFromUrl(e,n)}catch{return new Pt(e,"")}if(r.path==="")return r;throw u5(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=n===Px?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",_=new RegExp(`^https?://${w}/${s}/${k}`,"i"),y=[{regex:l,indices:c,postModify:i},{regex:p,indices:v,postModify:u},{regex:_,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<y.length;x++){const b=y[x],N=b.regex.exec(e);if(N){const S=N[b.indices.bucket];let C=N[b.indices.path];C||(C=""),r=new Pt(S,C),b.postModify(r);break}}if(r==null)throw c5(e);return r}}class _5{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g5(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function h(...k){u||(u=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(p,c())},k)}function f(){i&&clearTimeout(i)}function p(k,..._){if(u){f();return}if(k){f(),h.call(null,k,..._);return}if(c()||o){f(),h.call(null,k,..._);return}r<64&&(r*=2);let y;l===1?(l=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function w(k){v||(v=!0,f(),!u&&(s!==null?(k||(l=2),clearTimeout(s),d(0)):k||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function y5(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v5(t){return t!==void 0}function x5(t){return typeof t=="object"&&!Array.isArray(t)}function ap(t){return typeof t=="string"||t instanceof String}function $_(t){return cp()&&t instanceof Blob}function cp(){return typeof Blob<"u"}function W_(t,e,n,r){if(r<e)throw lh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw lh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Ox(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Xr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xr||(Xr={}));/**
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
 */class w5{constructor(e,n,r,s,i,o,l,c,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ol(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Xr.NO_ERROR,c=i.getStatus();if(!l||b5(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Xr.ABORT;r(!1,new Ol(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ol(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());v5(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=lp();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Lx():a5();o(c)}else{const c=l5();o(c)}};this.canceled_?n(!1,new Ol(!1,null,!0)):this.backoffId_=g5(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y5(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function k5(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function C5(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function N5(t,e){e&&(t["X-Firebase-GMPID"]=e)}function S5(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function I5(t,e,n,r,s,i,o=!0){const l=Ox(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return N5(u,e),k5(u,n),C5(u,i),S5(u,r),new w5(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E5(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function T5(...t){const e=E5();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(cp())return new Blob(t);throw new Fe(Ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function R5(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */const pn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Du{constructor(e,n){this.data=e,this.contentType=n||null}}function P5(t,e){switch(t){case pn.RAW:return new Du(Dx(e));case pn.BASE64:case pn.BASE64URL:return new Du(Mx(t,e));case pn.DATA_URL:return new Du(L5(e),O5(e))}throw lp()}function Dx(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function A5(t){let e;try{e=decodeURIComponent(t)}catch{throw so(pn.DATA_URL,"Malformed data URL.")}return Dx(e)}function Mx(t,e){switch(t){case pn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw so(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case pn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw so(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=j5(e)}catch(s){throw s.message.includes("polyfill")?s:so(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class zx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw so(pn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=D5(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function L5(t){const e=new zx(t);return e.base64?Mx(pn.BASE64,e.rest):A5(e.rest)}function O5(t){return new zx(t).contentType}function D5(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){let r=0,s="";$_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if($_(this.data_)){const r=this.data_,s=R5(r,e,n);return s===null?null:new cr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new cr(r,!0)}}static getBlob(...e){if(cp()){const n=e.map(r=>r instanceof cr?r.data_:r);return new cr(T5.apply(null,n))}else{const n=e.map(o=>ap(o)?P5(pn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new cr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function M5(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function z5(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Fx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U5(t,e){return e}class ft{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||U5}}let Dl=null;function F5(t){return!ap(t)||t.length<2?t:Fx(t)}function Bx(){if(Dl)return Dl;const t=[];t.push(new ft("bucket")),t.push(new ft("generation")),t.push(new ft("metageneration")),t.push(new ft("name","fullPath",!0));function e(i,o){return F5(o)}const n=new ft("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ft("size");return s.xform=r,t.push(s),t.push(new ft("timeCreated")),t.push(new ft("updated")),t.push(new ft("md5Hash",null,!0)),t.push(new ft("cacheControl",null,!0)),t.push(new ft("contentDisposition",null,!0)),t.push(new ft("contentEncoding",null,!0)),t.push(new ft("contentLanguage",null,!0)),t.push(new ft("contentType",null,!0)),t.push(new ft("metadata","customMetadata",!0)),Dl=t,Dl}function B5(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Pt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $5(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return B5(r,t),r}function $x(t,e,n){const r=Ux(e);return r===null?null:$5(t,r,n)}function W5(t,e,n,r){const s=Ux(e);if(s===null||!ap(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),p=Dc(f,n,r),v=Ox({alt:"media",token:u});return p+v})[0]}function H5(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class up{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){if(!t)throw lp()}function V5(t,e){function n(r,s){const i=$x(t,s,e);return Wx(i!==null),i}return n}function Y5(t,e){function n(r,s){const i=$x(t,s,e);return Wx(i!==null),W5(i,s,t.host,t._protocol)}return n}function Hx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=i5():s=s5():n.getStatus()===402?s=r5(t.bucket):n.getStatus()===403?s=o5(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Vx(t){const e=Hx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=n5(t.path)),i.serverResponse=s.serverResponse,i}return n}function Q5(t,e,n){const r=e.fullServerUrl(),s=Dc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new up(s,i,Y5(t,n),o);return l.errorHandler=Vx(e),l}function G5(t,e){const n=e.fullServerUrl(),r=Dc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new up(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Vx(e),l}function X5(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function K5(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=X5(null,e)),r}function q5(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let y="";for(let x=0;x<2;x++)y=y+Math.random().toString().slice(2);return y}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=K5(e,r,s),h=H5(u,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=cr.getBlob(d,r,f);if(p===null)throw h5();const v={name:u.fullPath},w=Dc(i,t.host,t._protocol),k="POST",_=t.maxUploadRetryTime,m=new up(w,k,V5(t,n),_);return m.urlParams=v,m.headers=o,m.body=p.uploadData(),m.errorHandler=Hx(e),m}class J5{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Mi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Mi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Mi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Mi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Mi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Z5 extends J5{initXhr(){this.xhr_.responseType="text"}}function dp(){return new Z5}/**
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
 */class os{constructor(e,n){this._service=e,n instanceof Pt?this._location=n:this._location=Pt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new os(e,n)}get root(){const e=new Pt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Fx(this._location.path)}get storage(){return this._service}get parent(){const e=M5(this._location.path);if(e===null)return null;const n=new Pt(this._location.bucket,e);return new os(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw m5(e)}}function eT(t,e,n){t._throwIfRoot("uploadBytes");const r=q5(t.storage,t._location,Bx(),new cr(e,!0),n);return t.storage.makeRequestWithTokens(r,dp).then(s=>({metadata:s,ref:t}))}function tT(t){t._throwIfRoot("getDownloadURL");const e=Q5(t.storage,t._location,Bx());return t.storage.makeRequestWithTokens(e,dp).then(n=>{if(n===null)throw f5();return n})}function nT(t){t._throwIfRoot("deleteObject");const e=G5(t.storage,t._location);return t.storage.makeRequestWithTokens(e,dp)}function rT(t,e){const n=z5(t._location.path,e),r=new Pt(t._location.bucket,n);return new os(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(t){return/^[A-Za-z]+:\/\//.test(t)}function iT(t,e){return new os(t,e)}function Yx(t,e){if(t instanceof hp){const n=t;if(n._bucket==null)throw d5();const r=new os(n,n._bucket);return e!=null?Yx(r,e):r}else return e!==void 0?rT(t,e):t}function oT(t,e){if(e&&sT(e)){if(t instanceof hp)return iT(t,e);throw lh("To use ref(service, url), the first argument must be a Storage instance.")}else return Yx(t,e)}function H_(t,e){const n=e==null?void 0:e[Ax];return n==null?null:Pt.makeFromBucketSpec(n,t)}function lT(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ay(s,t.app.options.projectId))}class hp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Px,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=e5,this._maxUploadRetryTime=t5,this._requests=new Set,s!=null?this._bucket=Pt.makeFromBucketSpec(s,this._host):this._bucket=H_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Pt.makeFromBucketSpec(this._url,e):this._bucket=H_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new os(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new _5(Lx());{const o=I5(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const V_="@firebase/storage",Y_="0.13.2";/**
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
 */const Qx="storage";function aT(t,e,n){return t=We(t),eT(t,e,n)}function cT(t){return t=We(t),tT(t)}function uT(t){return t=We(t),nT(t)}function Q_(t,e){return t=We(t),oT(t,e)}function dT(t=_f(),e){t=We(t);const r=bc(t,Qx).getImmediate({identifier:e}),s=Ry("storage");return s&&hT(r,...s),r}function hT(t,e,n,r={}){lT(t,e,n,r)}function fT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new hp(n,r,s,e,us)}function pT(){ts(new Ir(Qx,fT,"PUBLIC").setMultipleInstances(!0)),gn(V_,Y_,""),gn(V_,Y_,"esm2017")}pT();const mT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},fp=zy(mT),Mu=zN(fp),Pe=XE(fp),G_=dT(fp),Gx=new In;Gx.addScope("email");const Xx="packing-checklist-data",zu=["必備","電子產品","個人物品","視天氣","旅行","運動"],Kx=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],$i={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[]};function nr(t){return t.toLowerCase().replace(/\./g,",")}function ah(t){return t.replace(/,/g,".")}function _T(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:Object.fromEntries(Object.entries(t.sharedWith||{}).map(([e,n])=>[e,n===!0?"view":n]))}:null}function qx(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:$i.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],inlineItems:Array.isArray(e.inlineItems)?e.inlineItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):$i.lists,activeListId:t.activeListId||$i.activeListId,templates:Array.isArray(t.templates)?t.templates:[]}:$i}function gT(){try{const t=localStorage.getItem(Xx);if(t)return qx(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return $i}function X_(t){try{localStorage.setItem(Xx,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function yT(t){const[e,n]=g.useState(null),[r,s]=g.useState(t),[i,o]=g.useState("offline"),l=g.useRef(null),c=g.useCallback(p=>{l.current&&l.current();const v=je(Pe,"users/"+p);l.current=Uo(v,w=>{const k=w.val();if(k){const _=qx(k);s(_),X_(_),o("synced")}else u(p,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=g.useCallback((p,v)=>{o("syncing");const w=je(Pe,"users/"+p);En(w,v).then(()=>{o("synced")}).catch(k=>{console.error("Firebase 儲存失敗",k),o("error")})},[]),h=g.useCallback(p=>{s(p),X_(p),e&&u(e.uid,p)},[e,u]),d=g.useCallback(()=>{QC(Mu,Gx).catch(p=>{console.error("登入失敗",p)})},[]),f=g.useCallback(()=>{l.current&&(l.current(),l.current=null),IC(Mu).then(()=>{n(null),o("offline")}).catch(p=>{console.error("登出失敗",p)})},[]);return g.useEffect(()=>{const p=SC(Mu,v=>{n(v),v?c(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{p(),l.current&&l.current()}},[c]),{user:e,data:r,syncStatus:i,saveData:h,handleLogin:d,handleLogout:f}}function vT(t,e){const[n,r]=g.useState({}),[s,i]=g.useState({}),o=g.useRef({}),l=g.useRef(null),c=g.useCallback(b=>{o.current[b]&&(o.current[b](),delete o.current[b])},[]),u=g.useCallback(()=>{Object.keys(o.current).forEach(c),l.current&&(l.current(),l.current=null),r({}),i({})},[c]),h=g.useCallback((b,N)=>{if(o.current[`${N}_${b}`])return;const S=je(Pe,`sharedLists/${b}`),C=Uo(S,j=>{const E=j.val();if(!E){(N==="withMe"?r:i)(F=>{const J={...F};return delete J[b],J}),c(`${N}_${b}`);return}const I=_T(E);(N==="withMe"?r:i)(M=>({...M,[b]:I}))},j=>{console.error("共享清單讀取失敗",j)});o.current[`${N}_${b}`]=C},[c]);g.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const b=nr(t.email),N=je(Pe,`sharedIndex/${b}`);return l.current=Uo(N,S=>{const C=S.val();if(!C){Object.keys(o.current).forEach(E=>{E.startsWith("withMe_")&&c(E)}),r({});return}const j=new Set(Object.keys(C));Object.keys(o.current).forEach(E=>{if(E.startsWith("withMe_")){const I=E.replace("withMe_","");j.has(I)||(c(E),r(T=>{const M={...T};return delete M[I],M}))}}),j.forEach(E=>{h(E,"withMe")})},S=>{console.error("共享索引讀取失敗",S)}),()=>{u()}},[t==null?void 0:t.email]),g.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const b=new Set;e.lists.forEach(N=>{N.sharedListId&&b.add(N.sharedListId)}),Object.keys(o.current).forEach(N=>{if(N.startsWith("byMe_")){const S=N.replace("byMe_","");b.has(S)||(c(N),i(C=>{const j={...C};return delete j[S],j}))}}),b.forEach(N=>{h(N,"byMe")})},[t,e==null?void 0:e.lists,h,c]),g.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(b=>{if(!b.sharedListId)return;const N=s[b.sharedListId];if(!N)return;const S=N.items||[];if(b.disposable){const F=Array.isArray(b.inlineItems)?b.inlineItems:[];if(JSON.stringify(F)!==JSON.stringify(S)){const se=je(Pe,`sharedLists/${b.sharedListId}`);Dr(se,{items:F,name:b.name,icon:b.icon})}return}const C=new Set(S.map(F=>F.id)),j=new Set(Array.isArray(b.items)?b.items:[]),E=S.map(F=>{if(!j.has(F.id))return F;const J=e.itemLibrary.find(q=>q.id===F.id);if(!J)return F;const{id:se,name:ne,category:O,note:z,photoURL:B}=J;return{id:se,name:ne,category:O,...z!=null&&{note:z},...B&&{photoURL:B}}}),I=(Array.isArray(b.items)?b.items:[]).filter(F=>!C.has(F)).map(F=>e.itemLibrary.find(J=>J.id===F)).filter(Boolean).map(({id:F,name:J,category:se,note:ne,photoURL:O})=>({id:F,name:J,category:se,...ne!=null&&{note:ne},...O&&{photoURL:O}})),T=[...E,...I];if(JSON.stringify(T)!==JSON.stringify(S)){const F=je(Pe,`sharedLists/${b.sharedListId}`);Dr(F,{items:T,name:b.name,icon:b.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,s]);const d=g.useCallback(async(b,N,S)=>{if(!t)return null;const C=b.disposable?Array.isArray(b.inlineItems)?b.inlineItems:[]:(Array.isArray(b.items)?b.items:[]).map(F=>N.find(J=>J.id===F)).filter(Boolean).map(({id:F,name:J,category:se,note:ne,photoURL:O})=>({id:F,name:J,category:se,...ne!=null&&{note:ne},...O&&{photoURL:O}})),j={};S.forEach(F=>{j[nr(F)]="view"});const I=FE(je(Pe,"sharedLists")).key,T={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:b.name,icon:b.icon,items:C,checkedItems:Array.isArray(b.checkedItems)?b.checkedItems:[],sharedWith:j},M={};return M[`sharedLists/${I}`]=T,S.forEach(F=>{M[`sharedIndex/${nr(F)}/${I}`]=!0}),await Dr(je(Pe),M),I},[t]),f=g.useCallback(async(b,N)=>{const S=nr(N),C={};C[`sharedLists/${b}/sharedWith/${S}`]="view",C[`sharedIndex/${S}/${b}`]=!0,await Dr(je(Pe),C)},[]),p=g.useCallback(async(b,N)=>{const S=nr(N),C={};C[`sharedLists/${b}/sharedWith/${S}`]=null,C[`sharedIndex/${S}/${b}`]=null,await Dr(je(Pe),C)},[]),v=g.useCallback(async b=>{const N=s[b];if(!N)return;const S={};S[`sharedLists/${b}`]=null;const C=N.sharedWith||{};Object.keys(C).forEach(j=>{S[`sharedIndex/${j}/${b}`]=null}),await Dr(je(Pe),S)},[s]),w=g.useCallback(async(b,N,S)=>{const C=nr(N);await En(je(Pe,`sharedLists/${b}/sharedWith/${C}`),S)},[]),k=g.useCallback(async(b,N)=>{const S=je(Pe,`sharedLists/${b}/items`),E=[...(await Lu(S)).val()||[],N];await En(S,E)},[]),_=g.useCallback(async(b,N)=>{const C=(await Lu(je(Pe,`sharedLists/${b}`))).val();if(!C)return;const j=(C.items||[]).filter(T=>T.id!==N),E=(C.checkedItems||[]).filter(T=>T!==N),I={};I[`sharedLists/${b}/items`]=j,I[`sharedLists/${b}/checkedItems`]=E,await Dr(je(Pe),I)},[]),m=g.useCallback(async(b,N)=>{const S=je(Pe,`sharedLists/${b}/checkedItems`),j=(await Lu(S)).val()||[],I=j.includes(N)?j.filter(T=>T!==N):[...j,N];await En(S,I)},[]),y=g.useCallback(async b=>{const N=je(Pe,`sharedLists/${b}/checkedItems`);await En(N,[])},[]),x=g.useCallback(async(b,N)=>{const S=je(Pe,`sharedLists/${b}/checkedItems`);await En(S,N)},[]);return{sharedWithMe:n,sharedByMe:s,shareList:d,addSharedUser:f,removeSharedUser:p,unshareList:v,setUserPermission:w,addSharedItem:k,removeSharedItem:_,toggleSharedCheck:m,resetSharedChecks:y,checkAllShared:x}}function xT(t){const[e,n]=g.useState([]),[r,s]=g.useState(!1),[i,o]=g.useState(!0);g.useEffect(()=>{const u=je(Pe,"adminEmails"),h=Uo(u,d=>{const f=d.val(),p=Array.isArray(f)?f:[];n(p),o(!1)},()=>{n([]),o(!1)});return()=>h()},[]),g.useEffect(()=>{if(!(t!=null&&t.email)){s(!1);return}s(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=g.useCallback(async u=>{const h=u.toLowerCase().trim();if(!h)return;const d=[...new Set([...e,h])];await En(je(Pe,"adminEmails"),d)},[e]),c=g.useCallback(async u=>{var f;const h=u.toLowerCase().trim();if(((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())===h)return;const d=e.filter(p=>p!==h);await En(je(Pe,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:r,adminEmails:e,loading:i,addAdmin:l,removeAdmin:c}}function bT(){const[t,e]=g.useState(zu);g.useEffect(()=>{const o=je(Pe,"categories"),l=Uo(o,c=>{const u=c.val();Array.isArray(u)&&u.length>0?e(u):e(zu)},()=>{e(zu)});return()=>l()},[]);const n=g.useCallback(async o=>{await En(je(Pe,"categories"),o)},[]),r=g.useCallback(async o=>{const l=o.trim();if(!l||t.includes(l))return;const c=[...t,l];await n(c)},[t,n]),s=g.useCallback(async(o,l)=>{const c=l.trim();if(!c||c===o||t.includes(c))return;const u=t.map(h=>h===o?c:h);await n(u)},[t,n]),i=g.useCallback(async o=>{const l=t.filter(c=>c!==o);l.length!==0&&await n(l)},[t,n]);return{categories:t,addCategory:r,updateCategory:s,removeCategory:i}}const K_="packing-checklist-theme";function wT(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Uu(t){const e=t==="dark"||t==="system"&&wT();document.documentElement.classList.toggle("dark",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e?"#0f172a":"#4F46E5")}function kT(){const[t,e]=g.useState(()=>{try{return localStorage.getItem(K_)||"system"}catch{return"system"}}),n=g.useCallback(r=>{e(r);try{localStorage.setItem(K_,r)}catch{}Uu(r)},[]);return g.useEffect(()=>{Uu(t)},[t]),g.useEffect(()=>{if(t!=="system")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>Uu("system");return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[t]),{preference:t,changeTheme:n}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
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
 */const q_=t=>{const e=NT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ST={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=g.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},c)=>g.createElement("svg",{ref:c,...ST,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Jx("lucide",s),...!i&&!IT(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,h])=>g.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(t,e)=>{const n=g.forwardRef(({className:r,...s},i)=>g.createElement(ET,{ref:i,iconNode:e,className:Jx(`lucide-${CT(q_(t))}`,`lucide-${t}`,r),...s}));return n.displayName=q_(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Fu=W("arrow-left",TT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Zx=W("arrow-up-down",RT);/**
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
 */const MT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],zT=W("briefcase",MT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],pp=W("camera",UT);/**
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
 */const HT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ls=W("check",HT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],J_=W("chevron-down",VT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],eb=W("chevron-left",YT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],GT=W("circle-alert",QT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ch=W("clipboard-list",XT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],qT=W("cloud-off",KT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],ZT=W("cloud",JT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],t4=W("coffee",e4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],r4=W("copy",n4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],i4=W("download",s4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],l4=W("dumbbell",o4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],c4=W("ellipsis-vertical",a4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],d4=W("eye",u4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],tb=W("file-text",h4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],p4=W("footprints",f4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],_4=W("funnel",m4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],y4=W("gift",g4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],nb=W("grip-vertical",v4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],b4=W("heart",x4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],k4=W("inbox",w4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],rb=W("layout-dashboard",C4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],S4=W("layout-list",N4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],E4=W("list-checks",I4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],sb=W("loader-circle",T4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],j4=W("loader",R4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],A4=W("log-in",P4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],O4=W("log-out",L4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],M4=W("menu",D4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],U4=W("monitor",z4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],B4=W("moon",F4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],W4=W("mountain",$4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],V4=W("music",H4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Fo=W("package",Y4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Bo=W("pen-line",Q4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],X4=W("pencil",G4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],q4=W("person-standing",K4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],Z4=W("plane",J4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Vn=W("plus",eR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],nR=W("rotate-ccw",tR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Mc=W("search",rR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],iR=W("send",sR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],zc=W("share-2",oR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],uh=W("shield",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],cR=W("shirt",aR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],dR=W("shopping-cart",uR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],mp=W("sticky-note",hR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],pR=W("sun",fR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],_p=W("tag",mR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],gR=W("target",_R);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],vR=W("tent",yR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],rn=W("trash-2",xR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],wR=W("umbrella",bR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],CR=W("upload",kR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],SR=W("user",NR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],ib=W("users",IR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],dt=W("x",ER);function TR(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>r=>{e.forEach(s=>s(r))},e)}const Uc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function _i(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function gp(t){return"nodeType"in t}function Et(t){var e,n;return t?_i(t)?t:gp(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function yp(t){const{Document:e}=Et(t);return t instanceof e}function ol(t){return _i(t)?!1:t instanceof Et(t).HTMLElement}function ob(t){return t instanceof Et(t).SVGElement}function gi(t){return t?_i(t)?t.document:gp(t)?yp(t)?t:ol(t)||ob(t)?t.ownerDocument:document:document:document}const xn=Uc?g.useLayoutEffect:g.useEffect;function vp(t){const e=g.useRef(t);return xn(()=>{e.current=t}),g.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e.current==null?void 0:e.current(...r)},[])}function RR(){const t=g.useRef(null),e=g.useCallback((r,s)=>{t.current=setInterval(r,s)},[]),n=g.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function $o(t,e){e===void 0&&(e=[t]);const n=g.useRef(t);return xn(()=>{n.current!==t&&(n.current=t)},e),n}function ll(t,e){const n=g.useRef();return g.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Ja(t){const e=vp(t),n=g.useRef(null),r=g.useCallback(s=>{s!==n.current&&(e==null||e(s,n.current)),n.current=s},[]);return[n,r]}function dh(t){const e=g.useRef();return g.useEffect(()=>{e.current=t},[t]),e.current}let Bu={};function al(t,e){return g.useMemo(()=>{if(e)return e;const n=Bu[t]==null?0:Bu[t]+1;return Bu[t]=n,t+"-"+n},[t,e])}function lb(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.reduce((i,o)=>{const l=Object.entries(o);for(const[c,u]of l){const h=i[c];h!=null&&(i[c]=h+t*u)}return i},{...e})}}const Vs=lb(1),Za=lb(-1);function jR(t){return"clientX"in t&&"clientY"in t}function xp(t){if(!t)return!1;const{KeyboardEvent:e}=Et(t.target);return e&&t instanceof e}function PR(t){if(!t)return!1;const{TouchEvent:e}=Et(t.target);return e&&t instanceof e}function hh(t){if(PR(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return jR(t)?{x:t.clientX,y:t.clientY}:null}const oi=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[oi.Translate.toString(t),oi.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),Z_="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function AR(t){return t.matches(Z_)?t:t.querySelector(Z_)}const LR={display:"none"};function OR(t){let{id:e,value:n}=t;return mt.createElement("div",{id:e,style:LR},n)}function DR(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const s={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return mt.createElement("div",{id:e,style:s,role:"status","aria-live":r,"aria-atomic":!0},n)}function MR(){const[t,e]=g.useState("");return{announce:g.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const ab=g.createContext(null);function zR(t){const e=g.useContext(ab);g.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function UR(){const[t]=g.useState(()=>new Set),e=g.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[g.useCallback(r=>{let{type:s,event:i}=r;t.forEach(o=>{var l;return(l=o[s])==null?void 0:l.call(o,i)})},[t]),e]}const FR={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},BR={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function $R(t){let{announcements:e=BR,container:n,hiddenTextDescribedById:r,screenReaderInstructions:s=FR}=t;const{announce:i,announcement:o}=MR(),l=al("DndLiveRegion"),[c,u]=g.useState(!1);if(g.useEffect(()=>{u(!0)},[]),zR(g.useMemo(()=>({onDragStart(d){let{active:f}=d;i(e.onDragStart({active:f}))},onDragMove(d){let{active:f,over:p}=d;e.onDragMove&&i(e.onDragMove({active:f,over:p}))},onDragOver(d){let{active:f,over:p}=d;i(e.onDragOver({active:f,over:p}))},onDragEnd(d){let{active:f,over:p}=d;i(e.onDragEnd({active:f,over:p}))},onDragCancel(d){let{active:f,over:p}=d;i(e.onDragCancel({active:f,over:p}))}}),[i,e])),!c)return null;const h=mt.createElement(mt.Fragment,null,mt.createElement(OR,{id:r,value:s.draggable}),mt.createElement(DR,{id:l,announcement:o}));return n?Ps.createPortal(h,n):h}var Ve;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(Ve||(Ve={}));function ec(){}function tc(t,e){return g.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function cb(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return g.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const on=Object.freeze({x:0,y:0});function WR(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function HR(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function VR(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function YR(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function e0(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const ub=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=e0(e,e.left,e.top),i=[];for(const o of r){const{id:l}=o,c=n.get(l);if(c){const u=WR(e0(c),s);i.push({id:l,data:{droppableContainer:o,value:u}})}}return i.sort(HR)};function QR(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),s=Math.min(e.left+e.width,t.left+t.width),i=Math.min(e.top+e.height,t.top+t.height),o=s-r,l=i-n;if(r<s&&n<i){const c=e.width*e.height,u=t.width*t.height,h=o*l,d=h/(c+u-h);return Number(d.toFixed(4))}return 0}const GR=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=[];for(const i of r){const{id:o}=i,l=n.get(o);if(l){const c=QR(l,e);c>0&&s.push({id:o,data:{droppableContainer:i,value:c}})}}return s.sort(VR)};function XR(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function db(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:on}function KR(t){return function(n){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return s.reduce((o,l)=>({...o,top:o.top+t*l.y,bottom:o.bottom+t*l.y,left:o.left+t*l.x,right:o.right+t*l.x}),{...n})}}const qR=KR(1);function JR(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function ZR(t,e,n){const r=JR(e);if(!r)return t;const{scaleX:s,scaleY:i,x:o,y:l}=r,c=t.left-o-(1-s)*parseFloat(n),u=t.top-l-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),h=s?t.width/s:t.width,d=i?t.height/i:t.height;return{width:h,height:d,top:u,right:c+h,bottom:u+d,left:c}}const ej={ignoreTransform:!1};function yi(t,e){e===void 0&&(e=ej);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:u,transformOrigin:h}=Et(t).getComputedStyle(t);u&&(n=ZR(n,u,h))}const{top:r,left:s,width:i,height:o,bottom:l,right:c}=n;return{top:r,left:s,width:i,height:o,bottom:l,right:c}}function t0(t){return yi(t,{ignoreTransform:!0})}function tj(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function nj(t,e){return e===void 0&&(e=Et(t).getComputedStyle(t)),e.position==="fixed"}function rj(t,e){e===void 0&&(e=Et(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const i=e[s];return typeof i=="string"?n.test(i):!1})}function bp(t,e){const n=[];function r(s){if(e!=null&&n.length>=e||!s)return n;if(yp(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!ol(s)||ob(s)||n.includes(s))return n;const i=Et(t).getComputedStyle(s);return s!==t&&rj(s,i)&&n.push(s),nj(s,i)?n:r(s.parentNode)}return t?r(t):n}function hb(t){const[e]=bp(t,1);return e??null}function $u(t){return!Uc||!t?null:_i(t)?t:gp(t)?yp(t)||t===gi(t).scrollingElement?window:ol(t)?t:null:null}function fb(t){return _i(t)?t.scrollX:t.scrollLeft}function pb(t){return _i(t)?t.scrollY:t.scrollTop}function fh(t){return{x:fb(t),y:pb(t)}}var Je;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(Je||(Je={}));function mb(t){return!Uc||!t?!1:t===document.scrollingElement}function _b(t){const e={x:0,y:0},n=mb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},s=t.scrollTop<=e.y,i=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,l=t.scrollLeft>=r.x;return{isTop:s,isLeft:i,isBottom:o,isRight:l,maxScroll:r,minScroll:e}}const sj={x:.2,y:.2};function ij(t,e,n,r,s){let{top:i,left:o,right:l,bottom:c}=n;r===void 0&&(r=10),s===void 0&&(s=sj);const{isTop:u,isBottom:h,isLeft:d,isRight:f}=_b(t),p={x:0,y:0},v={x:0,y:0},w={height:e.height*s.y,width:e.width*s.x};return!u&&i<=e.top+w.height?(p.y=Je.Backward,v.y=r*Math.abs((e.top+w.height-i)/w.height)):!h&&c>=e.bottom-w.height&&(p.y=Je.Forward,v.y=r*Math.abs((e.bottom-w.height-c)/w.height)),!f&&l>=e.right-w.width?(p.x=Je.Forward,v.x=r*Math.abs((e.right-w.width-l)/w.width)):!d&&o<=e.left+w.width&&(p.x=Je.Backward,v.x=r*Math.abs((e.left+w.width-o)/w.width)),{direction:p,speed:v}}function oj(t){if(t===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:e,left:n,right:r,bottom:s}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:s,width:t.clientWidth,height:t.clientHeight}}function gb(t){return t.reduce((e,n)=>Vs(e,fh(n)),on)}function lj(t){return t.reduce((e,n)=>e+fb(n),0)}function aj(t){return t.reduce((e,n)=>e+pb(n),0)}function cj(t,e){if(e===void 0&&(e=yi),!t)return;const{top:n,left:r,bottom:s,right:i}=e(t);hb(t)&&(s<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const uj=[["x",["left","right"],lj],["y",["top","bottom"],aj]];class wp{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=bp(n),s=gb(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,l]of uj)for(const c of o)Object.defineProperty(this,c,{get:()=>{const u=l(r),h=s[i]-u;return this.rect[c]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class io{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var s;(s=this.target)==null||s.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function dj(t){const{EventTarget:e}=Et(t);return t instanceof e?t:gi(t)}function Wu(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var zt;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(zt||(zt={}));function n0(t){t.preventDefault()}function hj(t){t.stopPropagation()}var pe;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(pe||(pe={}));const yb={start:[pe.Space,pe.Enter],cancel:[pe.Esc],end:[pe.Space,pe.Enter,pe.Tab]},fj=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case pe.Right:return{...n,x:n.x+25};case pe.Left:return{...n,x:n.x-25};case pe.Down:return{...n,y:n.y+25};case pe.Up:return{...n,y:n.y-25}}};class vb{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new io(gi(n)),this.windowListeners=new io(Et(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(zt.Resize,this.handleCancel),this.windowListeners.add(zt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(zt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&cj(r),n(on)}handleKeyDown(e){if(xp(e)){const{active:n,context:r,options:s}=this.props,{keyboardCodes:i=yb,coordinateGetter:o=fj,scrollBehavior:l="smooth"}=s,{code:c}=e;if(i.end.includes(c)){this.handleEnd(e);return}if(i.cancel.includes(c)){this.handleCancel(e);return}const{collisionRect:u}=r.current,h=u?{x:u.left,y:u.top}:on;this.referenceCoordinates||(this.referenceCoordinates=h);const d=o(e,{active:n,context:r.current,currentCoordinates:h});if(d){const f=Za(d,h),p={x:0,y:0},{scrollableAncestors:v}=r.current;for(const w of v){const k=e.code,{isTop:_,isRight:m,isLeft:y,isBottom:x,maxScroll:b,minScroll:N}=_b(w),S=oj(w),C={x:Math.min(k===pe.Right?S.right-S.width/2:S.right,Math.max(k===pe.Right?S.left:S.left+S.width/2,d.x)),y:Math.min(k===pe.Down?S.bottom-S.height/2:S.bottom,Math.max(k===pe.Down?S.top:S.top+S.height/2,d.y))},j=k===pe.Right&&!m||k===pe.Left&&!y,E=k===pe.Down&&!x||k===pe.Up&&!_;if(j&&C.x!==d.x){const I=w.scrollLeft+f.x,T=k===pe.Right&&I<=b.x||k===pe.Left&&I>=N.x;if(T&&!f.y){w.scrollTo({left:I,behavior:l});return}T?p.x=w.scrollLeft-I:p.x=k===pe.Right?w.scrollLeft-b.x:w.scrollLeft-N.x,p.x&&w.scrollBy({left:-p.x,behavior:l});break}else if(E&&C.y!==d.y){const I=w.scrollTop+f.y,T=k===pe.Down&&I<=b.y||k===pe.Up&&I>=N.y;if(T&&!f.x){w.scrollTo({top:I,behavior:l});return}T?p.y=w.scrollTop-I:p.y=k===pe.Down?w.scrollTop-b.y:w.scrollTop-N.y,p.y&&w.scrollBy({top:-p.y,behavior:l});break}}this.handleMove(e,Vs(Za(d,this.referenceCoordinates),p))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}vb.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=yb,onActivation:s}=e,{active:i}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const l=i.activatorNode.current;return l&&t.target!==l?!1:(t.preventDefault(),s==null||s({event:t.nativeEvent}),!0)}return!1}}];function r0(t){return!!(t&&"distance"in t)}function s0(t){return!!(t&&"delay"in t)}class kp{constructor(e,n,r){var s;r===void 0&&(r=dj(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:i}=e,{target:o}=i;this.props=e,this.events=n,this.document=gi(o),this.documentListeners=new io(this.document),this.listeners=new io(r),this.windowListeners=new io(Et(o)),this.initialCoordinates=(s=hh(i))!=null?s:on,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(zt.Resize,this.handleCancel),this.windowListeners.add(zt.DragStart,n0),this.windowListeners.add(zt.VisibilityChange,this.handleCancel),this.windowListeners.add(zt.ContextMenu,n0),this.documentListeners.add(zt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(s0(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(r0(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:s}=this.props;s(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(zt.Click,hj,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(zt.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:s,props:i}=this,{onMove:o,options:{activationConstraint:l}}=i;if(!s)return;const c=(n=hh(e))!=null?n:on,u=Za(s,c);if(!r&&l){if(r0(l)){if(l.tolerance!=null&&Wu(u,l.tolerance))return this.handleCancel();if(Wu(u,l.distance))return this.handleStart()}if(s0(l)&&Wu(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}e.cancelable&&e.preventDefault(),o(c)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===pe.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const pj={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Fc extends kp{constructor(e){const{event:n}=e,r=gi(n.target);super(e,pj,r)}}Fc.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const mj={move:{name:"mousemove"},end:{name:"mouseup"}};var ph;(function(t){t[t.RightClick=2]="RightClick"})(ph||(ph={}));class _j extends kp{constructor(e){super(e,mj,gi(e.event.target))}}_j.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===ph.RightClick?!1:(r==null||r({event:n}),!0)}}];const Hu={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class Cp extends kp{constructor(e){super(e,Hu)}static setup(){return window.addEventListener(Hu.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Hu.move.name,e)};function e(){}}}Cp.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:s}=n;return s.length>1?!1:(r==null||r({event:n}),!0)}}];var oo;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(oo||(oo={}));var nc;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(nc||(nc={}));function gj(t){let{acceleration:e,activator:n=oo.Pointer,canScroll:r,draggingRect:s,enabled:i,interval:o=5,order:l=nc.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:h,delta:d,threshold:f}=t;const p=vj({delta:d,disabled:!i}),[v,w]=RR(),k=g.useRef({x:0,y:0}),_=g.useRef({x:0,y:0}),m=g.useMemo(()=>{switch(n){case oo.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case oo.DraggableRect:return s}},[n,s,c]),y=g.useRef(null),x=g.useCallback(()=>{const N=y.current;if(!N)return;const S=k.current.x*_.current.x,C=k.current.y*_.current.y;N.scrollBy(S,C)},[]),b=g.useMemo(()=>l===nc.TreeOrder?[...u].reverse():u,[l,u]);g.useEffect(()=>{if(!i||!u.length||!m){w();return}for(const N of b){if((r==null?void 0:r(N))===!1)continue;const S=u.indexOf(N),C=h[S];if(!C)continue;const{direction:j,speed:E}=ij(N,C,m,e,f);for(const I of["x","y"])p[I][j[I]]||(E[I]=0,j[I]=0);if(E.x>0||E.y>0){w(),y.current=N,v(x,o),k.current=E,_.current=j;return}}k.current={x:0,y:0},_.current={x:0,y:0},w()},[e,x,r,w,i,o,JSON.stringify(m),JSON.stringify(p),v,u,b,h,JSON.stringify(f)])}const yj={x:{[Je.Backward]:!1,[Je.Forward]:!1},y:{[Je.Backward]:!1,[Je.Forward]:!1}};function vj(t){let{delta:e,disabled:n}=t;const r=dh(e);return ll(s=>{if(n||!r||!s)return yj;const i={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[Je.Backward]:s.x[Je.Backward]||i.x===-1,[Je.Forward]:s.x[Je.Forward]||i.x===1},y:{[Je.Backward]:s.y[Je.Backward]||i.y===-1,[Je.Forward]:s.y[Je.Forward]||i.y===1}}},[n,e,r])}function xj(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return ll(s=>{var i;return e==null?null:(i=r??s)!=null?i:null},[r,e])}function bj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{const{sensor:s}=r,i=s.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...i]},[]),[t,e])}var Wo;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Wo||(Wo={}));var mh;(function(t){t.Optimized="optimized"})(mh||(mh={}));const i0=new Map;function wj(t,e){let{dragging:n,dependencies:r,config:s}=e;const[i,o]=g.useState(null),{frequency:l,measure:c,strategy:u}=s,h=g.useRef(t),d=k(),f=$o(d),p=g.useCallback(function(_){_===void 0&&(_=[]),!f.current&&o(m=>m===null?_:m.concat(_.filter(y=>!m.includes(y))))},[f]),v=g.useRef(null),w=ll(_=>{if(d&&!n)return i0;if(!_||_===i0||h.current!==t||i!=null){const m=new Map;for(let y of t){if(!y)continue;if(i&&i.length>0&&!i.includes(y.id)&&y.rect.current){m.set(y.id,y.rect.current);continue}const x=y.node.current,b=x?new wp(c(x),x):null;y.rect.current=b,b&&m.set(y.id,b)}return m}return _},[t,i,n,d,c]);return g.useEffect(()=>{h.current=t},[t]),g.useEffect(()=>{d||p()},[n,d]),g.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),g.useEffect(()=>{d||typeof l!="number"||v.current!==null||(v.current=setTimeout(()=>{p(),v.current=null},l))},[l,d,p,...r]),{droppableRects:w,measureDroppableContainers:p,measuringScheduled:i!=null};function k(){switch(u){case Wo.Always:return!1;case Wo.BeforeDragging:return n;default:return!n}}}function xb(t,e){return ll(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function kj(t,e){return xb(t,e)}function Cj(t){let{callback:e,disabled:n}=t;const r=vp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Bc(t){let{callback:e,disabled:n}=t;const r=vp(e),s=g.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return g.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Nj(t){return new wp(yi(t),t)}function o0(t,e,n){e===void 0&&(e=Nj);const[r,s]=g.useState(null);function i(){s(c=>{if(!t)return null;if(t.isConnected===!1){var u;return(u=c??n)!=null?u:null}const h=e(t);return JSON.stringify(c)===JSON.stringify(h)?c:h})}const o=Cj({callback(c){if(t)for(const u of c){const{type:h,target:d}=u;if(h==="childList"&&d instanceof HTMLElement&&d.contains(t)){i();break}}}}),l=Bc({callback:i});return xn(()=>{i(),t?(l==null||l.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),o==null||o.disconnect())},[t]),r}function Sj(t){const e=xb(t);return db(t,e)}const l0=[];function Ij(t){const e=g.useRef(t),n=ll(r=>t?r&&r!==l0&&t&&e.current&&t.parentNode===e.current.parentNode?r:bp(t):l0,[t]);return g.useEffect(()=>{e.current=t},[t]),n}function Ej(t){const[e,n]=g.useState(null),r=g.useRef(t),s=g.useCallback(i=>{const o=$u(i.target);o&&n(l=>l?(l.set(o,fh(o)),new Map(l)):null)},[]);return g.useEffect(()=>{const i=r.current;if(t!==i){o(i);const l=t.map(c=>{const u=$u(c);return u?(u.addEventListener("scroll",s,{passive:!0}),[u,fh(u)]):null}).filter(c=>c!=null);n(l.length?new Map(l):null),r.current=t}return()=>{o(t),o(i)};function o(l){l.forEach(c=>{const u=$u(c);u==null||u.removeEventListener("scroll",s)})}},[s,t]),g.useMemo(()=>t.length?e?Array.from(e.values()).reduce((i,o)=>Vs(i,o),on):gb(t):on,[t,e])}function a0(t,e){e===void 0&&(e=[]);const n=g.useRef(null);return g.useEffect(()=>{n.current=null},e),g.useEffect(()=>{const r=t!==on;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Za(t,n.current):on}function Tj(t){g.useEffect(()=>{if(!Uc)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function Rj(t,e){return g.useMemo(()=>t.reduce((n,r)=>{let{eventName:s,handler:i}=r;return n[s]=o=>{i(o,e)},n},{}),[t,e])}function bb(t){return g.useMemo(()=>t?tj(t):null,[t])}const c0=[];function jj(t,e){e===void 0&&(e=yi);const[n]=t,r=bb(n?Et(n):null),[s,i]=g.useState(c0);function o(){i(()=>t.length?t.map(c=>mb(c)?r:new wp(e(c),c)):c0)}const l=Bc({callback:o});return xn(()=>{l==null||l.disconnect(),o(),t.forEach(c=>l==null?void 0:l.observe(c))},[t]),s}function Pj(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return ol(e)?e:t}function Aj(t){let{measure:e}=t;const[n,r]=g.useState(null),s=g.useCallback(u=>{for(const{target:h}of u)if(ol(h)){r(d=>{const f=e(h);return d?{...d,width:f.width,height:f.height}:f});break}},[e]),i=Bc({callback:s}),o=g.useCallback(u=>{const h=Pj(u);i==null||i.disconnect(),h&&(i==null||i.observe(h)),r(h?e(h):null)},[e,i]),[l,c]=Ja(o);return g.useMemo(()=>({nodeRef:l,rect:n,setRef:c}),[n,l,c])}const Lj=[{sensor:Fc,options:{}},{sensor:vb,options:{}}],Oj={current:{}},sa={draggable:{measure:t0},droppable:{measure:t0,strategy:Wo.WhileDragging,frequency:mh.Optimized},dragOverlay:{measure:yi}};class lo extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const Dj={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new lo,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ec},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:sa,measureDroppableContainers:ec,windowRect:null,measuringScheduled:!1},Mj={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ec,draggableNodes:new Map,over:null,measureDroppableContainers:ec},$c=g.createContext(Mj),wb=g.createContext(Dj);function zj(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new lo}}}function Uj(t,e){switch(e.type){case Ve.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case Ve.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case Ve.DragEnd:case Ve.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Ve.RegisterDroppable:{const{element:n}=e,{id:r}=n,s=new lo(t.droppable.containers);return s.set(r,n),{...t,droppable:{...t.droppable,containers:s}}}case Ve.SetDroppableDisabled:{const{id:n,key:r,disabled:s}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const o=new lo(t.droppable.containers);return o.set(n,{...i,disabled:s}),{...t,droppable:{...t.droppable,containers:o}}}case Ve.UnregisterDroppable:{const{id:n,key:r}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const i=new lo(t.droppable.containers);return i.delete(n),{...t,droppable:{...t.droppable,containers:i}}}default:return t}}function Fj(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:s}=g.useContext($c),i=dh(r),o=dh(n==null?void 0:n.id);return g.useEffect(()=>{if(!e&&!r&&i&&o!=null){if(!xp(i)||document.activeElement===i.target)return;const l=s.get(o);if(!l)return;const{activatorNode:c,node:u}=l;if(!c.current&&!u.current)return;requestAnimationFrame(()=>{for(const h of[c.current,u.current]){if(!h)continue;const d=AR(h);if(d){d.focus();break}}})}},[r,e,s,o,i]),null}function Bj(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((s,i)=>i({transform:s,...r}),n):n}function $j(t){return g.useMemo(()=>({draggable:{...sa.draggable,...t==null?void 0:t.draggable},droppable:{...sa.droppable,...t==null?void 0:t.droppable},dragOverlay:{...sa.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function Wj(t){let{activeNode:e,measure:n,initialRect:r,config:s=!0}=t;const i=g.useRef(!1),{x:o,y:l}=typeof s=="boolean"?{x:s,y:s}:s;xn(()=>{if(!o&&!l||!e){i.current=!1;return}if(i.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const h=n(u),d=db(h,r);if(o||(d.x=0),l||(d.y=0),i.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const f=hb(u);f&&f.scrollBy({top:d.y,left:d.x})}},[e,o,l,r,n])}const kb=g.createContext({...on,scaleX:1,scaleY:1});var rr;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(rr||(rr={}));const Cb=g.memo(function(e){var n,r,s,i;let{id:o,accessibility:l,autoScroll:c=!0,children:u,sensors:h=Lj,collisionDetection:d=GR,measuring:f,modifiers:p,...v}=e;const w=g.useReducer(Uj,void 0,zj),[k,_]=w,[m,y]=UR(),[x,b]=g.useState(rr.Uninitialized),N=x===rr.Initialized,{draggable:{active:S,nodes:C,translate:j},droppable:{containers:E}}=k,I=S!=null?C.get(S):null,T=g.useRef({initial:null,translated:null}),M=g.useMemo(()=>{var re;return S!=null?{id:S,data:(re=I==null?void 0:I.data)!=null?re:Oj,rect:T}:null},[S,I]),F=g.useRef(null),[J,se]=g.useState(null),[ne,O]=g.useState(null),z=$o(v,Object.values(v)),B=al("DndDescribedBy",o),q=g.useMemo(()=>E.getEnabled(),[E]),V=$j(f),{droppableRects:Q,measureDroppableContainers:he,measuringScheduled:Se}=wj(q,{dragging:N,dependencies:[j.x,j.y],config:V.droppable}),Y=xj(C,S),xe=g.useMemo(()=>ne?hh(ne):null,[ne]),fe=ce(),P=kj(Y,V.draggable.measure);Wj({activeNode:S!=null?C.get(S):null,config:fe.layoutShiftCompensation,initialRect:P,measure:V.draggable.measure});const U=o0(Y,V.draggable.measure,P),A=o0(Y?Y.parentElement:null),Z=g.useRef({activatorEvent:null,active:null,activeNode:Y,collisionRect:null,collisions:null,droppableRects:Q,draggableNodes:C,draggingNode:null,draggingNodeRect:null,droppableContainers:E,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),G=E.getNodeFor((n=Z.current.over)==null?void 0:n.id),te=Aj({measure:V.dragOverlay.measure}),me=(r=te.nodeRef.current)!=null?r:Y,et=N?(s=te.rect)!=null?s:U:null,wn=!!(te.nodeRef.current&&te.rect),cl=Sj(wn?null:U),vi=bb(me?Et(me):null),ln=Ij(N?G??Y:null),Lr=jj(ln),fs=Bj(p,{transform:{x:j.x-cl.x,y:j.y-cl.y,scaleX:1,scaleY:1},activatorEvent:ne,active:M,activeNodeRect:U,containerNodeRect:A,draggingNodeRect:et,over:Z.current.over,overlayNodeRect:te.rect,scrollableAncestors:ln,scrollableAncestorRects:Lr,windowRect:vi}),ul=xe?Vs(xe,j):null,xi=Ej(ln),Hc=a0(xi),Vc=a0(xi,[U]),kn=Vs(fs,Hc),Xn=et?qR(et,fs):null,Or=M&&Xn?d({active:M,collisionRect:Xn,droppableRects:Q,droppableContainers:q,pointerCoordinates:ul}):null,ps=YR(Or,"id"),[an,dl]=g.useState(null),hl=wn?fs:Vs(fs,Vc),fl=XR(hl,(i=an==null?void 0:an.rect)!=null?i:null,U),ms=g.useRef(null),bi=g.useCallback((re,Ie)=>{let{sensor:Ee,options:Te}=Ie;if(F.current==null)return;const Mt=C.get(F.current);if(!Mt)return;const Tt=re.nativeEvent,cn=new Ee({active:F.current,activeNode:Mt,event:Tt,options:Te,context:Z,onAbort(tt){if(!C.get(tt))return;const{onDragAbort:un}=z.current,Cn={id:tt};un==null||un(Cn),m({type:"onDragAbort",event:Cn})},onPending(tt,Kn,un,Cn){if(!C.get(tt))return;const{onDragPending:ki}=z.current,qn={id:tt,constraint:Kn,initialCoordinates:un,offset:Cn};ki==null||ki(qn),m({type:"onDragPending",event:qn})},onStart(tt){const Kn=F.current;if(Kn==null)return;const un=C.get(Kn);if(!un)return;const{onDragStart:Cn}=z.current,wi={activatorEvent:Tt,active:{id:Kn,data:un.data,rect:T}};Ps.unstable_batchedUpdates(()=>{Cn==null||Cn(wi),b(rr.Initializing),_({type:Ve.DragStart,initialCoordinates:tt,active:Kn}),m({type:"onDragStart",event:wi}),se(ms.current),O(Tt)})},onMove(tt){_({type:Ve.DragMove,coordinates:tt})},onEnd:_s(Ve.DragEnd),onCancel:_s(Ve.DragCancel)});ms.current=cn;function _s(tt){return async function(){const{active:un,collisions:Cn,over:wi,scrollAdjustedTranslate:ki}=Z.current;let qn=null;if(un&&ki){const{cancelDrop:Ci}=z.current;qn={activatorEvent:Tt,active:un,collisions:Cn,delta:ki,over:wi},tt===Ve.DragEnd&&typeof Ci=="function"&&await Promise.resolve(Ci(qn))&&(tt=Ve.DragCancel)}F.current=null,Ps.unstable_batchedUpdates(()=>{_({type:tt}),b(rr.Uninitialized),dl(null),se(null),O(null),ms.current=null;const Ci=tt===Ve.DragEnd?"onDragEnd":"onDragCancel";if(qn){const Yc=z.current[Ci];Yc==null||Yc(qn),m({type:Ci,event:qn})}})}}},[C]),pl=g.useCallback((re,Ie)=>(Ee,Te)=>{const Mt=Ee.nativeEvent,Tt=C.get(Te);if(F.current!==null||!Tt||Mt.dndKit||Mt.defaultPrevented)return;const cn={active:Tt};re(Ee,Ie.options,cn)===!0&&(Mt.dndKit={capturedBy:Ie.sensor},F.current=Te,bi(Ee,Ie))},[C,bi]),R=bj(h,pl);Tj(h),xn(()=>{U&&x===rr.Initializing&&b(rr.Initialized)},[U,x]),g.useEffect(()=>{const{onDragMove:re}=z.current,{active:Ie,activatorEvent:Ee,collisions:Te,over:Mt}=Z.current;if(!Ie||!Ee)return;const Tt={active:Ie,activatorEvent:Ee,collisions:Te,delta:{x:kn.x,y:kn.y},over:Mt};Ps.unstable_batchedUpdates(()=>{re==null||re(Tt),m({type:"onDragMove",event:Tt})})},[kn.x,kn.y]),g.useEffect(()=>{const{active:re,activatorEvent:Ie,collisions:Ee,droppableContainers:Te,scrollAdjustedTranslate:Mt}=Z.current;if(!re||F.current==null||!Ie||!Mt)return;const{onDragOver:Tt}=z.current,cn=Te.get(ps),_s=cn&&cn.rect.current?{id:cn.id,rect:cn.rect.current,data:cn.data,disabled:cn.disabled}:null,tt={active:re,activatorEvent:Ie,collisions:Ee,delta:{x:Mt.x,y:Mt.y},over:_s};Ps.unstable_batchedUpdates(()=>{dl(_s),Tt==null||Tt(tt),m({type:"onDragOver",event:tt})})},[ps]),xn(()=>{Z.current={activatorEvent:ne,active:M,activeNode:Y,collisionRect:Xn,collisions:Or,droppableRects:Q,draggableNodes:C,draggingNode:me,draggingNodeRect:et,droppableContainers:E,over:an,scrollableAncestors:ln,scrollAdjustedTranslate:kn},T.current={initial:et,translated:Xn}},[M,Y,Or,Xn,C,me,et,Q,E,an,ln,kn]),gj({...fe,delta:j,draggingRect:Xn,pointerCoordinates:ul,scrollableAncestors:ln,scrollableAncestorRects:Lr});const H=g.useMemo(()=>({active:M,activeNode:Y,activeNodeRect:U,activatorEvent:ne,collisions:Or,containerNodeRect:A,dragOverlay:te,draggableNodes:C,droppableContainers:E,droppableRects:Q,over:an,measureDroppableContainers:he,scrollableAncestors:ln,scrollableAncestorRects:Lr,measuringConfiguration:V,measuringScheduled:Se,windowRect:vi}),[M,Y,U,ne,Or,A,te,C,E,Q,an,he,ln,Lr,V,Se,vi]),X=g.useMemo(()=>({activatorEvent:ne,activators:R,active:M,activeNodeRect:U,ariaDescribedById:{draggable:B},dispatch:_,draggableNodes:C,over:an,measureDroppableContainers:he}),[ne,R,M,U,_,B,C,an,he]);return mt.createElement(ab.Provider,{value:y},mt.createElement($c.Provider,{value:X},mt.createElement(wb.Provider,{value:H},mt.createElement(kb.Provider,{value:fl},u)),mt.createElement(Fj,{disabled:(l==null?void 0:l.restoreFocus)===!1})),mt.createElement($R,{...l,hiddenTextDescribedById:B}));function ce(){const re=(J==null?void 0:J.autoScrollEnabled)===!1,Ie=typeof c=="object"?c.enabled===!1:c===!1,Ee=N&&!re&&!Ie;return typeof c=="object"?{...c,enabled:Ee}:{enabled:Ee}}}),Hj=g.createContext(null),u0="button",Vj="Draggable";function Yj(t){let{id:e,data:n,disabled:r=!1,attributes:s}=t;const i=al(Vj),{activators:o,activatorEvent:l,active:c,activeNodeRect:u,ariaDescribedById:h,draggableNodes:d,over:f}=g.useContext($c),{role:p=u0,roleDescription:v="draggable",tabIndex:w=0}=s??{},k=(c==null?void 0:c.id)===e,_=g.useContext(k?kb:Hj),[m,y]=Ja(),[x,b]=Ja(),N=Rj(o,e),S=$o(n);xn(()=>(d.set(e,{id:e,key:i,node:m,activatorNode:x,data:S}),()=>{const j=d.get(e);j&&j.key===i&&d.delete(e)}),[d,e]);const C=g.useMemo(()=>({role:p,tabIndex:w,"aria-disabled":r,"aria-pressed":k&&p===u0?!0:void 0,"aria-roledescription":v,"aria-describedby":h.draggable}),[r,p,w,k,v,h.draggable]);return{active:c,activatorEvent:l,activeNodeRect:u,attributes:C,isDragging:k,listeners:r?void 0:N,node:m,over:f,setNodeRef:y,setActivatorNodeRef:b,transform:_}}function Qj(){return g.useContext(wb)}const Gj="Droppable",Xj={timeout:25};function Kj(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:s}=t;const i=al(Gj),{active:o,dispatch:l,over:c,measureDroppableContainers:u}=g.useContext($c),h=g.useRef({disabled:n}),d=g.useRef(!1),f=g.useRef(null),p=g.useRef(null),{disabled:v,updateMeasurementsFor:w,timeout:k}={...Xj,...s},_=$o(w??r),m=g.useCallback(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{u(Array.isArray(_.current)?_.current:[_.current]),p.current=null},k)},[k]),y=Bc({callback:m,disabled:v||!o}),x=g.useCallback((C,j)=>{y&&(j&&(y.unobserve(j),d.current=!1),C&&y.observe(C))},[y]),[b,N]=Ja(x),S=$o(e);return g.useEffect(()=>{!y||!b.current||(y.disconnect(),d.current=!1,y.observe(b.current))},[b,y]),g.useEffect(()=>(l({type:Ve.RegisterDroppable,element:{id:r,key:i,disabled:n,node:b,rect:f,data:S}}),()=>l({type:Ve.UnregisterDroppable,key:i,id:r})),[r]),g.useEffect(()=>{n!==h.current.disabled&&(l({type:Ve.SetDroppableDisabled,id:r,key:i,disabled:n}),h.current.disabled=n)},[r,i,n,l]),{active:o,rect:f,isOver:(c==null?void 0:c.id)===r,node:b,over:c,setNodeRef:N}}function Wc(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function qj(t,e){return t.reduce((n,r,s)=>{const i=e.get(r);return i&&(n[s]=i),n},Array(t.length))}function Ml(t){return t!==null&&t>=0}function Jj(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Zj(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const Nb=t=>{let{rects:e,activeIndex:n,overIndex:r,index:s}=t;const i=Wc(e,r,n),o=e[s],l=i[s];return!l||!o?null:{x:l.left-o.left,y:l.top-o.top,scaleX:l.width/o.width,scaleY:l.height/o.height}},zl={scaleX:1,scaleY:1},Sb=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:s,rects:i,overIndex:o}=t;const l=(e=i[n])!=null?e:r;if(!l)return null;if(s===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(l.top+l.height):u.top-l.top,...zl}:null}const c=eP(i,s,n);return s>n&&s<=o?{x:0,y:-l.height-c,...zl}:s<n&&s>=o?{x:0,y:l.height+c,...zl}:{x:0,y:0,...zl}};function eP(t,e,n){const r=t[e],s=t[e-1],i=t[e+1];return r?n<e?s?r.top-(s.top+s.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):s?r.top-(s.top+s.height):0:0}const Ib="Sortable",Eb=mt.createContext({activeIndex:-1,containerId:Ib,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Nb,disabled:{draggable:!1,droppable:!1}});function Tb(t){let{children:e,id:n,items:r,strategy:s=Nb,disabled:i=!1}=t;const{active:o,dragOverlay:l,droppableRects:c,over:u,measureDroppableContainers:h}=Qj(),d=al(Ib,n),f=l.rect!==null,p=g.useMemo(()=>r.map(N=>typeof N=="object"&&"id"in N?N.id:N),[r]),v=o!=null,w=o?p.indexOf(o.id):-1,k=u?p.indexOf(u.id):-1,_=g.useRef(p),m=!Jj(p,_.current),y=k!==-1&&w===-1||m,x=Zj(i);xn(()=>{m&&v&&h(p)},[m,p,v,h]),g.useEffect(()=>{_.current=p},[p]);const b=g.useMemo(()=>({activeIndex:w,containerId:d,disabled:x,disableTransforms:y,items:p,overIndex:k,useDragOverlay:f,sortedRects:qj(p,c),strategy:s}),[w,d,x.draggable,x.droppable,y,p,k,c,f,s]);return mt.createElement(Eb.Provider,{value:b},e)}const tP=t=>{let{id:e,items:n,activeIndex:r,overIndex:s}=t;return Wc(n,r,s).indexOf(e)},nP=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:s,items:i,newIndex:o,previousItems:l,previousContainerId:c,transition:u}=t;return!u||!r||l!==i&&s===o?!1:n?!0:o!==s&&e===c},rP={duration:200,easing:"ease"},Rb="transform",sP=oi.Transition.toString({property:Rb,duration:0,easing:"linear"}),iP={roleDescription:"sortable"};function oP(t){let{disabled:e,index:n,node:r,rect:s}=t;const[i,o]=g.useState(null),l=g.useRef(n);return xn(()=>{if(!e&&n!==l.current&&r.current){const c=s.current;if(c){const u=yi(r.current,{ignoreTransform:!0}),h={x:c.left-u.left,y:c.top-u.top,scaleX:c.width/u.width,scaleY:c.height/u.height};(h.x||h.y)&&o(h)}}n!==l.current&&(l.current=n)},[e,n,r,s]),g.useEffect(()=>{i&&o(null)},[i]),i}function jb(t){let{animateLayoutChanges:e=nP,attributes:n,disabled:r,data:s,getNewIndex:i=tP,id:o,strategy:l,resizeObserverConfig:c,transition:u=rP}=t;const{items:h,containerId:d,activeIndex:f,disabled:p,disableTransforms:v,sortedRects:w,overIndex:k,useDragOverlay:_,strategy:m}=g.useContext(Eb),y=lP(r,p),x=h.indexOf(o),b=g.useMemo(()=>({sortable:{containerId:d,index:x,items:h},...s}),[d,s,x,h]),N=g.useMemo(()=>h.slice(h.indexOf(o)),[h,o]),{rect:S,node:C,isOver:j,setNodeRef:E}=Kj({id:o,data:b,disabled:y.droppable,resizeObserverConfig:{updateMeasurementsFor:N,...c}}),{active:I,activatorEvent:T,activeNodeRect:M,attributes:F,setNodeRef:J,listeners:se,isDragging:ne,over:O,setActivatorNodeRef:z,transform:B}=Yj({id:o,data:b,attributes:{...iP,...n},disabled:y.draggable}),q=TR(E,J),V=!!I,Q=V&&!v&&Ml(f)&&Ml(k),he=!_&&ne,Se=he&&Q?B:null,xe=Q?Se??(l??m)({rects:w,activeNodeRect:M,activeIndex:f,overIndex:k,index:x}):null,fe=Ml(f)&&Ml(k)?i({id:o,items:h,activeIndex:f,overIndex:k}):x,P=I==null?void 0:I.id,U=g.useRef({activeId:P,items:h,newIndex:fe,containerId:d}),A=h!==U.current.items,Z=e({active:I,containerId:d,isDragging:ne,isSorting:V,id:o,index:x,items:h,newIndex:U.current.newIndex,previousItems:U.current.items,previousContainerId:U.current.containerId,transition:u,wasDragging:U.current.activeId!=null}),G=oP({disabled:!Z,index:x,node:C,rect:S});return g.useEffect(()=>{V&&U.current.newIndex!==fe&&(U.current.newIndex=fe),d!==U.current.containerId&&(U.current.containerId=d),h!==U.current.items&&(U.current.items=h)},[V,fe,d,h]),g.useEffect(()=>{if(P===U.current.activeId)return;if(P!=null&&U.current.activeId==null){U.current.activeId=P;return}const me=setTimeout(()=>{U.current.activeId=P},50);return()=>clearTimeout(me)},[P]),{active:I,activeIndex:f,attributes:F,data:b,rect:S,index:x,newIndex:fe,items:h,isOver:j,isSorting:V,isDragging:ne,listeners:se,node:C,overIndex:k,over:O,setNodeRef:q,setActivatorNodeRef:z,setDroppableNodeRef:E,setDraggableNodeRef:J,transform:G??xe,transition:te()};function te(){if(G||A&&U.current.newIndex===x)return sP;if(!(he&&!xp(T)||!u)&&(V||Z))return oi.Transition.toString({...u,property:Rb})}}function lP(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}pe.Down,pe.Right,pe.Up,pe.Left;const d0={"clipboard-list":ch,footprints:p4,briefcase:zT,plane:Z4,"person-standing":q4,backpack:PT,umbrella:wR,tent:vR,target:gR,"shopping-cart":dR,shirt:cR,dumbbell:l4,mountain:W4,baby:LT,camera:pp,heart:b4,music:V4,"book-open":DT,coffee:t4,gift:y4},h0={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function aP(t){return h0[t]?d0[h0[t]]||ch:d0[t]||ch}function ao({name:t,size:e=20,className:n=""}){const r=aP(t);return a.jsx(r,{size:e,className:n})}function cP({message:t,onUndo:e,onDismiss:n}){const r=g.useRef(null);return g.useEffect(()=>(r.current=setTimeout(n,4e3),()=>clearTimeout(r.current)),[t,n]),a.jsxs("div",{className:"fixed left-4 right-4 bottom-[calc(4rem+env(safe-area-inset-bottom)+0.5rem)] z-50 flex items-center justify-between bg-slate-800 dark:bg-slate-700 text-white rounded-xl px-4 py-3 shadow-lg animate-slide-up",children:[a.jsx("span",{className:"text-sm truncate mr-3",children:t}),a.jsx("button",{onClick:()=>{clearTimeout(r.current),e()},className:"text-sm font-semibold text-indigo-300 active:text-indigo-200 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center",children:"復原"})]})}function Ul({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function uP(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return a.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>a.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:a.jsxs("div",{className:"animate-celebration-text text-center",children:[a.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),a.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function dP({item:t}){const{attributes:e,listeners:n,setNodeRef:r,transform:s,transition:i,isDragging:o}=jb({id:t.id}),l={transform:oi.Transform.toString(s),transition:i,zIndex:o?50:void 0,position:"relative"};return a.jsx("div",{ref:r,style:l,children:a.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${o?"shadow-lg opacity-90":""}`,children:[a.jsx("div",{...e,...n,className:"w-6 h-6 mr-4 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:a.jsx(nb,{size:20})}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx("div",{className:"text-lg text-slate-800 dark:text-slate-100",children:t.name})})]})})}function hP({data:t,user:e,syncStatus:n,onLogin:r,onLogout:s,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:c,categories:u=[]}){var ms,bi,pl;const[h,d]=g.useState([]),[f,p]=g.useState(null),[v,w]=g.useState(null),[k,_]=g.useState([]),[m,y]=g.useState(!1),[x,b]=g.useState("default"),[N,S]=g.useState(!1),[C,j]=g.useState(""),[E,I]=g.useState(u[0]||""),[T,M]=g.useState(null),[F,J]=g.useState(null),[se,ne]=g.useState(""),[O,z]=g.useState(!1),B=c&&((ms=l==null?void 0:l.sharedWithMe)==null?void 0:ms[c]),q=c&&((bi=l==null?void 0:l.sharedByMe)==null?void 0:bi[c]),V=B?"shared-with-me":q?"own-shared":"local",Q=B?l.sharedWithMe[c]:q?l.sharedByMe[c]:null,he=V!=="shared-with-me"||(()=>{if(!(e!=null&&e.email)||!(Q!=null&&Q.sharedWith))return!1;const R=nr(e.email);return Q.sharedWith[R]==="edit"})(),Se=(pl=t.lists)==null?void 0:pl.find(R=>R.id===t.activeListId),Y=Se?{...Se,items:Array.isArray(Se.items)?Se.items:[],checkedItems:Array.isArray(Se.checkedItems)?Se.checkedItems:[],inlineItems:Array.isArray(Se.inlineItems)?Se.inlineItems:[]}:null,xe=!!(Y!=null&&Y.disposable);let fe=[],P=[],U="",A="",Z="";V==="shared-with-me"&&Q?(fe=(Q.items||[]).filter(Boolean),P=Q.checkedItems||[],U=Q.name||"清單",A=Q.icon||"clipboard-list",Z=Q.ownerName||Q.ownerEmail||""):V==="own-shared"&&Y&&Q?(xe?fe=Y.inlineItems:fe=Y.items.map(R=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(X=>X.id===R)}).filter(Boolean),P=Q.checkedItems||[],U=Y.name||"清單",A=Y.icon||"clipboard-list"):xe&&Y?(fe=Y.inlineItems,P=Y.checkedItems,U=Y.name||"清單",A=Y.icon||"clipboard-list"):(fe=Y?Y.items.map(R=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(X=>X.id===R)}).filter(Boolean):[],P=(Y==null?void 0:Y.checkedItems)||[],U=(Y==null?void 0:Y.name)||"清單",A=(Y==null?void 0:Y.icon)||"clipboard-list");const G=P.length,te=fe.length,me=te>0&&G===te,et=te>0?G/te*100:0,wn=g.useRef(me);g.useEffect(()=>{if(me&&!wn.current){y(!0);const R=setTimeout(()=>y(!1),2500);return()=>clearTimeout(R)}wn.current=me},[me]);const cl=(()=>{const R=[],H={};return fe.forEach(X=>{const ce=X.category||"其他";H[ce]||(H[ce]=[]),H[ce].push(X)}),u.forEach(X=>{H[X]&&(R.push({category:X,items:H[X]}),delete H[X])}),Object.keys(H).forEach(X=>{R.push({category:X,items:H[X]})}),R})(),vi=x==="name"?[...fe].sort((R,H)=>R.name.localeCompare(H.name,"zh-Hant")):x==="unchecked"?[...fe].sort((R,H)=>{const X=P.includes(R.id)?1:0,ce=P.includes(H.id)?1:0;return X-ce}):fe,ln=()=>{b(R=>R==="default"?"name":R==="name"?"unchecked":R==="unchecked"?V==="shared-with-me"?"default":"manual":"default")},Lr=x==="name"?"名稱":x==="unchecked"?"未勾選":x==="manual"?"手動":"",fs=cb(tc(Fc,{activationConstraint:{distance:5}}),tc(Cp,{activationConstraint:{delay:150,tolerance:5}})),ul=R=>{const{active:H,over:X}=R;if(!X||H.id===X.id)return;const ce=Y.items.indexOf(H.id),re=Y.items.indexOf(X.id);if(ce===-1||re===-1)return;const Ie=Wc(Y.items,ce,re),Ee={...t,lists:t.lists.map(Te=>Te.id===t.activeListId?{...Te,items:Ie}:Te)};o(Ee)},xi=(R,H)=>{w(R);const X=P.includes(R);if(V==="shared-with-me"||V==="own-shared")l.toggleSharedCheck(c,R);else{const ce={...t,lists:t.lists.map(re=>{if(re.id!==t.activeListId)return re;const Ie=Array.isArray(re.checkedItems)?re.checkedItems:[],Ee=Ie.includes(R);return{...re,checkedItems:Ee?Ie.filter(Te=>Te!==R):[...Ie,R]}})};o(ce)}if(!H){const ce=fe.find(re=>re.id===R);ce&&J({itemId:R,itemName:ce.name,isChecked:!X})}},Hc=()=>{if(V==="shared-with-me"||V==="own-shared")l.resetSharedChecks(c);else{const R={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[]}:H)};o(R)}},Vc=()=>{if(V==="shared-with-me"||V==="own-shared"){const R=fe.map(H=>H.id);l.checkAllShared(c,R)}else{if(!Y)return;const R={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[...Y.items]}:H)};o(R)}},kn=R=>{if(!Y||!R.trim())return;const H={id:"d_"+Date.now(),name:R.trim()},X={...t,lists:t.lists.map(ce=>ce.id===t.activeListId?{...ce,inlineItems:[...Array.isArray(ce.inlineItems)?ce.inlineItems:[],H]}:ce)};o(X)},Xn=R=>{if(!Y)return;const H={...t,lists:t.lists.map(X=>X.id!==t.activeListId?X:{...X,inlineItems:(X.inlineItems||[]).filter(ce=>ce.id!==R),checkedItems:(X.checkedItems||[]).filter(ce=>ce!==R)})};o(H)},Or=()=>{const R=t.lists.filter(X=>X.id!==t.activeListId),H={...t,lists:R,activeListId:R.length>0?R[0].id:t.activeListId};o(H),i("lists")},ps=g.useRef(!1);g.useEffect(()=>{if(xe&&me&&te>0&&!ps.current){const R=setTimeout(()=>z(!0),2600);return ps.current=!0,()=>clearTimeout(R)}me||(ps.current=!1)},[xe,me,te]);const an=R=>{d(H=>H.includes(R)?H.filter(X=>X!==R):[...H,R])},dl=R=>{_(H=>H.includes(R)?H.filter(X=>X!==R):[...H,R])},hl=()=>{const R=C.trim();if(R){if(V==="shared-with-me"){const X={id:"shared_item_"+Date.now(),name:R,category:E};l.addSharedItem(c,X)}else{if(!Y)return;const H="item_"+Date.now(),X={id:H,name:R,category:E},ce={...t,itemLibrary:[...t.itemLibrary||[],X],lists:t.lists.map(re=>re.id!==t.activeListId?re:{...re,items:[...Array.isArray(re.items)?re.items:[],H]})};o(ce)}j(""),S(!1)}},fl=R=>{var Ee;const H=P.includes(R.id),X=(Ee=R.note)==null?void 0:Ee.trim(),ce=X||R.photoURL,re=h.includes(R.id),Ie=v===R.id;return a.jsxs("div",{children:[a.jsxs("div",{onClick:()=>xi(R.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${H?"bg-slate-50 dark:bg-slate-800/50":""} ${ce&&re?"rounded-b-none border-b-0":""}`,children:[a.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${H?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}
              ${Ie&&H?"animate-check-bounce":""}`,onAnimationEnd:()=>w(null),children:H&&a.jsx(ls,{size:14,className:`text-white ${Ie?"animate-check-icon-in":""}`})}),R.photoURL&&a.jsx("img",{src:R.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Te=>{Te.target.style.display="none"}}),a.jsx("div",{className:"flex-1 min-w-0",children:a.jsx("div",{className:`text-lg transition-all duration-300 ${H?"line-through text-slate-400 dark:text-slate-500 opacity-60":"text-slate-800 dark:text-slate-100"}`,children:R.name})}),ce&&a.jsx("button",{onClick:Te=>{Te.stopPropagation(),an(R.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${re?"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400":"text-slate-400"}`,"aria-label":"展開詳情",children:a.jsx(J_,{size:18,className:`transition-transform duration-200 ${re?"rotate-180":""}`})}),V==="shared-with-me"&&he&&a.jsx("button",{onClick:Te=>{Te.stopPropagation(),M(R.id)},className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"移除物品",children:a.jsx(rn,{size:16})}),xe&&V!=="shared-with-me"&&a.jsx("button",{onClick:Te=>{Te.stopPropagation(),Xn(R.id)},className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"移除項目",children:a.jsx(rn,{size:16})})]}),ce&&re&&a.jsxs("div",{className:"px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl",children:[X&&a.jsxs("div",{className:"flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2",children:[a.jsx(mp,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),a.jsx("span",{children:R.note})]}),R.photoURL&&a.jsx("div",{className:X?"mt-2":"",children:a.jsx("img",{src:R.photoURL,alt:R.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Te=>{Te.target.style.display="none"}})})]})]},R.id)};return a.jsxs("div",{className:"flex flex-col h-screen pb-tabbar",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-1 min-w-0 flex-1",children:[a.jsx("button",{onClick:()=>i("lists"),className:"p-1 -ml-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[36px] min-h-[36px] flex items-center justify-center flex-shrink-0","aria-label":"返回所有清單",children:a.jsx(eb,{size:22,className:"text-slate-500 dark:text-slate-400"})}),a.jsx(ao,{name:A,size:22,className:"text-indigo-600 dark:text-indigo-400 flex-shrink-0"}),a.jsx("span",{className:"text-lg font-bold truncate",children:U}),V==="shared-with-me"&&Z&&a.jsxs("span",{className:"text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0",children:["來自 ",Z]}),xe&&a.jsx("span",{className:"text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex-shrink-0",children:"一次性"}),V==="own-shared"&&a.jsx("span",{className:"text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"flex items-center flex-shrink-0",children:[fe.length>0&&a.jsxs("div",{className:"flex flex-col items-center",children:[a.jsx("button",{onClick:ln,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                    ${x!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:a.jsx(Zx,{size:20})}),Lr&&a.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:Lr})]}),V!=="shared-with-me"&&!xe&&a.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:a.jsx(Vn,{size:22,className:"text-indigo-600 dark:text-indigo-400"})})]})]}),te>0&&a.jsxs("div",{className:"mt-3",children:[a.jsxs("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1",children:[a.jsx("span",{children:"完成進度"}),a.jsxs("span",{children:[G,"/",te]})]}),a.jsx("div",{className:"h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300",style:{width:`${et}%`}})})]})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[fe.length===0?a.jsxs("div",{className:"text-center py-16 text-slate-400",children:[a.jsx(k4,{size:48,className:"mx-auto mb-4 text-slate-300 dark:text-slate-600"}),a.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),xe?a.jsx("div",{className:"text-sm",children:"在下方輸入框新增項目"}):V!=="shared-with-me"?a.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150",children:"從物品庫加入物品"}):null]}):a.jsx("div",{className:"space-y-4",children:x==="manual"?a.jsx(Cb,{sensors:fs,collisionDetection:ub,onDragEnd:ul,children:a.jsx(Tb,{items:fe.map(R=>R.id),strategy:Sb,children:a.jsx("div",{className:"space-y-2",children:fe.map(R=>a.jsx(dP,{item:R},R.id))})})}):x==="default"&&!xe?cl.map(({category:R,items:H})=>{const X=k.includes(R),ce=H.filter(Ee=>P.includes(Ee.id)).length,re=H.length,Ie=ce===re;return a.jsxs("div",{children:[a.jsxs("button",{onClick:()=>dl(R),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[a.jsx(J_,{size:16,className:`text-slate-400 transition-transform duration-200 ${X?"-rotate-90":""}`}),a.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:R}),a.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${Ie?"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,children:[ce,"/",re]})]}),!X&&a.jsx("div",{className:"space-y-2 animate-slide-down",children:H.map(Ee=>fl(Ee))})]},R)}):a.jsx("div",{className:"space-y-2",children:vi.map(R=>fl(R))})}),fe.length>0&&a.jsx("div",{className:"pt-4 pb-16",children:a.jsxs("div",{className:"flex gap-3",children:[a.jsxs("button",{onClick:()=>p("reset"),className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:[a.jsx(nR,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),a.jsxs("button",{onClick:()=>p("checkAll"),disabled:me,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${me?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400":"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600"}`,children:[a.jsx(WT,{size:16,className:"inline mr-1.5 -mt-0.5"}),me?"準備完成！":"全部確認"]})]})})]}),f==="reset"&&a.jsx(Ul,{message:"確定要重設所有勾選？",onConfirm:()=>{Hc(),p(null)},onCancel:()=>p(null)}),f==="checkAll"&&a.jsx(Ul,{message:"確定要勾選全部項目？",onConfirm:()=>{Vc(),p(null)},onCancel:()=>p(null)}),m&&a.jsx(uP,{}),T!==null&&a.jsx(Ul,{message:"確定要移除此物品？",onConfirm:()=>{l.removeSharedItem(c,T),M(null)},onCancel:()=>M(null)}),he&&!xe&&a.jsxs(a.Fragment,{children:[N&&a.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{S(!1),j("")}}),N&&a.jsxs("div",{className:"fixed right-4 bottom-24 z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),a.jsx("input",{type:"text",placeholder:"物品名稱",value:C,onChange:R=>j(R.target.value),onKeyDown:R=>{R.key==="Enter"&&hl()},className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("select",{value:E,onChange:R=>I(R.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:u.map(R=>a.jsx("option",{value:R,children:R},R))}),a.jsx("button",{onClick:hl,disabled:!C.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),a.jsx("button",{onClick:()=>{S(R=>!R),N&&j("")},className:"fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":N?"關閉新增表單":"快速新增物品",children:N?a.jsx(dt,{size:24}):a.jsx(Vn,{size:24})})]}),F&&a.jsx(cP,{message:F.isChecked?`✓ 已勾選 ${F.itemName}`:`已取消勾選 ${F.itemName}`,onUndo:()=>{xi(F.itemId,!0),J(null)},onDismiss:()=>J(null)}),xe&&V!=="shared-with-me"&&a.jsx("div",{className:"border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-3 safe-bottom",children:a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:se,onChange:R=>ne(R.target.value),onKeyDown:R=>{R.key==="Enter"&&se.trim()&&(kn(se),ne(""))},placeholder:"新增項目...",className:"flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:()=>{se.trim()&&(kn(se),ne(""))},disabled:!se.trim(),className:"px-4 py-2.5 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150 min-h-[44px] flex items-center justify-center","aria-label":"新增",children:a.jsx(iR,{size:18})})]})}),O&&a.jsx(Ul,{message:"清單完成！要刪除嗎？",onConfirm:()=>{z(!1),Or()},onCancel:()=>z(!1)})]})}function fP({sharedData:t,onAddUser:e,onRemoveUser:n,onSetPermission:r,onUnshare:s,onClose:i}){const[o,l]=g.useState(""),[c,u]=g.useState(""),h=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(ah):[],d=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),f=()=>{const v=o.trim().toLowerCase();if(v){if(!d(v)){u("請輸入有效的 Email");return}if(h.includes(v)){u("已經分享給此帳號");return}u(""),e(v),l("")}},p=v=>{v.key==="Enter"&&f()};return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"分享清單"}),a.jsxs("div",{className:"flex gap-2 mb-2",children:[a.jsx("input",{type:"email",value:o,onChange:v=>{l(v.target.value),u("")},onKeyDown:p,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:f,className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),c&&a.jsx("div",{className:"text-sm text-rose-500 mb-3",children:c}),h.length>0&&a.jsxs("div",{className:"mt-4",children:[a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2",children:"已分享給"}),a.jsx("div",{className:"space-y-2",children:h.map(v=>{var _;const w=nr(v),k=((_=t==null?void 0:t.sharedWith)==null?void 0:_[w])||"view";return a.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600",children:[a.jsx("span",{className:"text-slate-700 dark:text-slate-200 text-sm truncate flex-1",children:v}),a.jsx("button",{onClick:()=>r(v,k==="edit"?"view":"edit"),className:`ml-2 p-2 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150
                          ${k==="edit"?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-slate-400"}`,"aria-label":k==="edit"?"切換為檢視":"切換為編輯",title:k==="edit"?"可編輯":"僅檢視",children:k==="edit"?a.jsx(X4,{size:16}):a.jsx(d4,{size:16})}),a.jsx("button",{onClick:()=>n(v),className:"ml-1 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:a.jsx(dt,{size:16})})]},v)})})]}),h.length>0&&a.jsx("button",{onClick:s,className:"w-full mt-4 py-3 border border-rose-300 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),a.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})}function pP({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function mP({list:t,isActive:e}){const{attributes:n,listeners:r,setNodeRef:s,transform:i,transition:o,isDragging:l}=jb({id:t.id}),c={transform:oi.Transform.toString(i),transition:o,zIndex:l?50:void 0,position:"relative"},u=t.disposable?(t.inlineItems||[]).length:(t.items||[]).length,h=(t.checkedItems||[]).length,d=!!t.sharedListId;return a.jsx("div",{ref:s,style:c,children:a.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${l?"shadow-lg opacity-90":""} ${e?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{...n,...r,className:"w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:a.jsx(nb,{size:20})}),a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(ao,{name:t.icon,size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[a.jsx("span",{className:"truncate",children:t.name}),d&&a.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"text-sm text-slate-400",children:[h,"/",u," 已確認"]})]})]})})}function _P({data:t,user:e,onNavigate:n,onSaveData:r,shared:s}){var fe;const[i,o]=g.useState(""),[l,c]=g.useState("clipboard-list"),[u,h]=g.useState(!1),[d,f]=g.useState(null),[p,v]=g.useState(null),[w,k]=g.useState(null),[_,m]=g.useState(!1),[y,x]=g.useState(""),[b,N]=g.useState("default"),[S,C]=g.useState(null),j=(P,U)=>{const A={...t,activeListId:P};r(A),n("checklist",{sharedListId:U||null})},E=P=>{n("checklist",{sharedListId:P})},I=()=>{if(!i.trim())return;const P={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[],...u?{disposable:!0,inlineItems:[]}:{}},U={...t,lists:[...t.lists,P],activeListId:P.id};r(U),o(""),c("clipboard-list"),h(!1),m(!1),n("checklist",{sharedListId:null})},T=async P=>{if(t.lists.length<=1)return;const U=t.lists.find(G=>G.id===P);if(U!=null&&U.sharedListId&&s)try{await s.unshareList(U.sharedListId)}catch(G){console.error("清理分享資料失敗",G)}const A=t.lists.filter(G=>G.id!==P),Z={...t,lists:A,activeListId:t.activeListId===P?A[0].id:t.activeListId};r(Z),k(null)},M=(P,U)=>{U.stopPropagation(),!(t.lists.length<=1)&&k(P)},F=(P,U)=>{U.stopPropagation(),f(P.id),v(P.sharedListId||null)},J=async P=>{const U=t.lists.find(A=>A.id===d);if(!(!U||!s))try{const A=await s.shareList(U,t.itemLibrary,[P]),Z={...t,lists:t.lists.map(G=>G.id===d?{...G,sharedListId:A}:G)};r(Z),v(A)}catch(A){console.error("分享失敗",A),alert("分享失敗："+A.message)}},se=async P=>{if(p)try{await s.addSharedUser(p,P)}catch(U){console.error("新增分享對象失敗",U)}else await J(P)},ne=async P=>{if(!(!p||!s))try{await s.removeSharedUser(p,P)}catch(U){console.error("移除分享對象失敗",U)}},O=async(P,U)=>{if(p&&s)try{await s.setUserPermission(p,P,U)}catch(A){console.error("設定權限失敗",A)}},z=async()=>{if(!(!p||!s))try{await s.unshareList(p);const P={...t,lists:t.lists.map(U=>U.id===d?{...U,sharedListId:void 0}:U)};r(P),f(null),v(null)}catch(P){console.error("停止分享失敗",P)}},B=()=>{N(P=>P==="default"?"name":P==="name"?"progress":P==="progress"?"manual":"default")},q=b==="name"?"名稱":b==="progress"?"完成度":b==="manual"?"手動":"",V=cb(tc(Fc,{activationConstraint:{distance:5}}),tc(Cp,{activationConstraint:{delay:150,tolerance:5}})),Q=P=>{const{active:U,over:A}=P;if(!A||U.id===A.id)return;const Z=t.lists||[],G=Z.findIndex(et=>et.id===U.id),te=Z.findIndex(et=>et.id===A.id);if(G===-1||te===-1)return;const me=Wc(Z,G,te);r({...t,lists:me})},he=y.toLowerCase(),Se=(t.lists||[]).filter(P=>!he||P.name.toLowerCase().includes(he)),Y=(()=>{if(b==="name")return[...Se].sort((P,U)=>P.name.localeCompare(U.name,"zh-Hant"));if(b==="progress"){const P=U=>{const A=U.disposable?(U.inlineItems||[]).length:(U.items||[]).length;return A===0?0:(U.checkedItems||[]).length/A};return[...Se].sort((U,A)=>P(U)-P(A))}return Se})(),xe=(s?Object.entries(s.sharedWithMe):[]).filter(([,P])=>!he||(P.name||"").toLowerCase().includes(he));return a.jsxs("div",{className:"flex flex-col h-screen pb-tabbar",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"}),a.jsxs("div",{className:"flex flex-col items-center w-10",children:[a.jsx("button",{onClick:B,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                ${b!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:a.jsx(Zx,{size:20})}),q&&a.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:q})]})]})}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[a.jsx("div",{className:"mb-4",children:a.jsxs("div",{className:"relative",children:[a.jsx(Mc,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:y,onChange:P=>x(P.target.value),placeholder:"搜尋清單...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),y&&a.jsx("button",{onClick:()=>x(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(dt,{size:16})})]})}),b==="manual"?a.jsx(Cb,{sensors:V,collisionDetection:ub,onDragEnd:Q,children:a.jsx(Tb,{items:(t.lists||[]).map(P=>P.id),strategy:Sb,children:a.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(P=>a.jsx(mP,{list:P,isActive:P.id===t.activeListId},P.id))})})}):a.jsx("div",{className:"space-y-2",children:Y.map(P=>{const U=P.disposable?(P.inlineItems||[]).length:(P.items||[]).length,A=(P.checkedItems||[]).length,Z=P.id===t.activeListId,G=!!P.sharedListId;return a.jsxs("div",{onClick:()=>j(P.id,P.sharedListId),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                    ${Z?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(ao,{name:P.icon,size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[a.jsx("span",{className:"truncate",children:P.name}),P.disposable&&a.jsx("span",{className:"ml-2 text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-800 flex-shrink-0",children:"一次性"}),G&&a.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),a.jsxs("div",{className:"text-sm text-slate-400",children:[A,"/",U," 已確認"]})]}),a.jsxs("div",{className:"relative",children:[a.jsx("button",{onClick:te=>{te.stopPropagation(),C(S===P.id?null:P.id)},className:"p-2 text-slate-400 dark:text-slate-500 active:bg-slate-100 dark:active:bg-slate-700 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"更多操作",children:a.jsx(c4,{size:18})}),S===P.id&&a.jsxs("div",{className:"absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg z-50 min-w-[140px] py-1 overflow-hidden",children:[e&&a.jsxs("button",{onClick:te=>{F(P,te),C(null)},className:"w-full flex items-center gap-3 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(zc,{size:16,className:G?"text-emerald-500":"text-slate-400"}),"分享"]}),t.lists.length>1&&a.jsxs("button",{onClick:te=>{M(P.id,te),C(null)},className:"w-full flex items-center gap-3 px-4 py-3 text-sm text-rose-500 active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[a.jsx(rn,{size:16}),"刪除"]})]})]})]},P.id)})}),xe.length>0&&a.jsxs("div",{className:"mt-6",children:[a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2 px-1",children:"與我分享的清單"}),a.jsx("div",{className:"space-y-2",children:xe.map(([P,U])=>{const A=(U.items||[]).length,Z=(U.checkedItems||[]).length;return a.jsxs("div",{onClick:()=>E(P),className:"flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[a.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:a.jsx(ao,{name:U.icon||"clipboard-list",size:24})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-100",children:U.name}),a.jsxs("div",{className:"text-sm text-slate-400",children:[Z,"/",A," 已確認",a.jsxs("span",{className:"ml-2 text-indigo-500 dark:text-indigo-400",children:["來自 ",U.ownerName||U.ownerEmail]})]})]})]},P)})})]}),a.jsx("div",{className:"mt-4",children:a.jsxs("button",{onClick:()=>m(!0),className:"w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 font-medium active:bg-slate-50 dark:active:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2",children:[a.jsx(Vn,{size:18}),"新增清單"]})})]}),_&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{m(!1),o(""),c("clipboard-list"),h(!1)}}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"新增清單"}),a.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:Kx.map(P=>a.jsx("button",{onClick:()=>c(P),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                      ${l===P?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400":"text-slate-500 dark:text-slate-400"}`,"aria-label":P,children:a.jsx(ao,{name:P,size:20})},P))}),a.jsxs("label",{className:"flex items-center justify-between mb-3 px-1",children:[a.jsx("span",{className:"text-sm text-slate-600 dark:text-slate-300",children:"一次性清單"}),a.jsx("button",{type:"button",role:"switch","aria-checked":u,onClick:()=>h(P=>!P),className:`relative w-11 h-6 rounded-full transition-colors duration-200 ${u?"bg-indigo-600 dark:bg-indigo-500":"bg-slate-300 dark:bg-slate-600"}`,children:a.jsx("span",{className:`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${u?"translate-x-5":""}`})})]}),u&&a.jsx("div",{className:"text-xs text-amber-600 dark:text-amber-400 mb-3 px-1",children:"純文字項目，用完即刪，不會加入物品庫"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:i,onChange:P=>o(P.target.value),onKeyDown:P=>{P.key==="Enter"&&I()},placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:I,className:"px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})})]}),d!==null&&a.jsx(fP,{sharedData:p&&((fe=s==null?void 0:s.sharedByMe)==null?void 0:fe[p])||null,onAddUser:se,onRemoveUser:ne,onSetPermission:O,onUnshare:z,onClose:()=>{f(null),v(null)}}),S!==null&&a.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>C(null)}),w!==null&&a.jsx(pP,{message:"確定刪除此清單？",onConfirm:()=>T(w),onCancel:()=>k(null)})]})}function gP(t,e=800,n=.7){return new Promise((r,s)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:c}=i;(l>e||c>e)&&(l>c?(c=Math.round(c*e/l),l=e):(l=Math.round(l*e/c),c=e));const u=document.createElement("canvas");u.width=l,u.height=c,u.getContext("2d").drawImage(i,0,0,l,c),u.toBlob(d=>{if(!d){s(new Error("Canvas toBlob failed"));return}r(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),s(new Error("Failed to load image"))},i.src=o})}function yP(t){const[e,n]=g.useState(!1),[r,s]=g.useState(null);return{uploadPhoto:async(l,c)=>{if(!t)throw new Error("Not logged in");n(!0),s(null);try{const u=await gP(c),h=`users/${t.uid}/items/${l}/photo.jpg`,d=Q_(G_,h);return await aT(d,u,{contentType:"image/jpeg"}),await cT(d)}catch(u){throw s(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const c=`users/${t.uid}/items/${l}/photo.jpg`,u=Q_(G_,c);await uT(u)}catch(c){c.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",c)}},uploading:e,error:r}}function vP({message:t,onConfirm:e,onCancel:n}){return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:a.jsxs("div",{className:"p-6",children:[a.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function xP({data:t,user:e,onNavigate:n,onSaveData:r,categories:s=[],onAddCategory:i,onUpdateCategory:o,onRemoveCategory:l}){const[c,u]=g.useState(""),[h,d]=g.useState(s[0]||""),[f,p]=g.useState(""),[v,w]=g.useState(null),[k,_]=g.useState(null),[m,y]=g.useState(null),[x,b]=g.useState(""),[N,S]=g.useState(null),[C,j]=g.useState(!1),[E,I]=g.useState(!1),[T,M]=g.useState(!1),[F,J]=g.useState(""),[se,ne]=g.useState(null),[O,z]=g.useState(""),B=g.useRef(null),{uploadPhoto:q,deletePhoto:V,uploading:Q}=yP(e),he={};s.forEach(A=>{he[A]=[]}),(t.itemLibrary||[]).forEach(A=>{he[A.category]&&he[A.category].push(A)});const Se=A=>{var G;const Z=(G=A.target.files)==null?void 0:G[0];Z&&(w(Z),_(URL.createObjectURL(Z)),A.target.value="")},Y=()=>{k&&URL.revokeObjectURL(k),w(null),_(null)},xe=async()=>{if(!c.trim())return;j(!0);const A=Date.now();let Z;if(v&&e)try{Z=await q(A,v)}catch{}const G={id:A,name:c.trim(),category:h,note:f.trim(),...Z&&{photoURL:Z}},te={...t,itemLibrary:[...t.itemLibrary,G]};r(te),u(""),p(""),Y(),j(!1),I(!1)},fe=async(A,Z,G,te,me)=>{const et={...t,itemLibrary:t.itemLibrary.map(wn=>wn.id===A?{...wn,name:Z,category:G,note:te,...me?{photoURL:me}:{photoURL:null}}:wn)};r(et),y(null)},P=async A=>{const Z=t.itemLibrary.find(te=>te.id===A);Z!=null&&Z.photoURL&&V(A);const G={...t,itemLibrary:t.itemLibrary.filter(te=>te.id!==A),lists:t.lists.map(te=>({...te,items:(te.items||[]).filter(me=>me!==A),checkedItems:(te.checkedItems||[]).filter(me=>me!==A)}))};r(G),S(null)},U=m?t.itemLibrary.find(A=>A.id===m):null;return a.jsxs("div",{className:"flex flex-col h-screen pb-tabbar",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10"}),a.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"}),a.jsx("button",{onClick:()=>M(!0),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-400 dark:text-slate-500","aria-label":"管理分類",children:a.jsx(_p,{size:20})})]})}),a.jsx("div",{className:"px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700",children:a.jsxs("div",{className:"relative",children:[a.jsx(Mc,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:x,onChange:A=>b(A.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),x&&a.jsx("button",{onClick:()=>b(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(dt,{size:16})})]})}),a.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:s.map(A=>{const Z=x?he[A].filter(G=>{var me,et;const te=x.toLowerCase();return((me=G.name)==null?void 0:me.toLowerCase().includes(te))||((et=G.note)==null?void 0:et.toLowerCase().includes(te))}):he[A];return Z.length===0?null:a.jsxs("div",{className:"mb-4",children:[a.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:A}),a.jsx("div",{className:"space-y-2",children:Z.map(G=>a.jsxs("div",{className:"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:[a.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[G.photoURL&&a.jsx("img",{src:G.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:te=>{te.target.style.display="none"}}),a.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:G.name})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:()=>y(G.id),className:"text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[32px]",children:"編輯"}),a.jsx("button",{onClick:()=>S(G.id),className:"text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[32px]",children:"刪除"})]})]}),G.note&&a.jsxs("div",{className:"text-sm text-slate-400 mt-1 flex items-center gap-1",children:[a.jsx(mp,{size:12,className:"flex-shrink-0"}),G.note]})]},G.id))})]},A)})}),a.jsx("button",{onClick:()=>I(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":"新增物品",children:a.jsx(Vn,{size:24})}),E&&a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>{I(!1),u(""),p(""),Y()},children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"新增物品"}),a.jsx("button",{onClick:()=>{I(!1),u(""),p(""),Y()},className:"p-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700",children:a.jsx(dt,{size:20,className:"text-slate-400"})})]}),a.jsx("input",{type:"text",value:c,onChange:A=>u(A.target.value),placeholder:"物品名稱...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("select",{value:h,onChange:A=>d(A.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:s.map(A=>a.jsx("option",{value:A,children:A},A))}),a.jsx("input",{type:"text",value:f,onChange:A=>p(A.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&a.jsxs("div",{className:"mb-2",children:[a.jsx("input",{ref:B,type:"file",accept:"image/*",capture:"environment",onChange:Se,className:"hidden"}),k?a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("img",{src:k,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsx("button",{onClick:Y,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]}):a.jsxs("button",{onClick:()=>{var A;return(A=B.current)==null?void 0:A.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(pp,{size:18}),a.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),a.jsxs("button",{onClick:xe,disabled:C||Q,className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(C||Q)&&a.jsx(sb,{size:18,className:"animate-spin"}),C||Q?"新增中...":"+ 新增物品"]})]})}),U&&a.jsx(bP,{item:U,user:e,categories:s,onSave:fe,onClose:()=>y(null),uploadPhoto:q,deletePhoto:V}),N!==null&&a.jsx(vP,{message:"確定刪除此物品？",onConfirm:()=>P(N),onCancel:()=>S(null)}),T&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:()=>{M(!1),J(""),ne(null)}}),a.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:a.jsxs("div",{className:"p-4",children:[a.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),a.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"管理分類"}),a.jsx("div",{className:"max-h-64 overflow-y-auto mb-4 space-y-1",children:s.map((A,Z)=>a.jsx("div",{className:"flex items-center justify-between px-3 py-2.5 bg-slate-50 dark:bg-slate-700 rounded-xl",children:se===Z?a.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[a.jsx("input",{value:O,onChange:G=>z(G.target.value),onKeyDown:G=>{G.key==="Enter"&&(o(A,O),ne(null)),G.key==="Escape"&&ne(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("button",{onClick:()=>{o(A,O),ne(null)},className:"p-1.5 text-emerald-600 active:bg-emerald-50 dark:active:bg-emerald-900/30 rounded-lg",children:a.jsx(ls,{size:16})}),a.jsx("button",{onClick:()=>ne(null),className:"p-1.5 text-slate-400 active:bg-slate-100 dark:active:bg-slate-600 rounded-lg",children:a.jsx(dt,{size:16})})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-sm font-medium text-slate-700 dark:text-slate-200",children:A}),a.jsxs("div",{className:"flex gap-0.5",children:[a.jsx("button",{onClick:()=>{ne(Z),z(A)},className:"p-1.5 text-slate-400 active:text-indigo-600 rounded-lg min-w-[32px] min-h-[32px] flex items-center justify-center",children:a.jsx(Bo,{size:14})}),s.length>1&&a.jsx("button",{onClick:()=>{confirm(`確定刪除分類「${A}」？`)&&l(A)},className:"p-1.5 text-slate-400 active:text-rose-500 rounded-lg min-w-[32px] min-h-[32px] flex items-center justify-center",children:a.jsx(rn,{size:14})})]})]})},A))}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:F,onChange:A=>J(A.target.value),onKeyDown:A=>{A.key==="Enter"&&F.trim()&&(i(F),J(""))},placeholder:"新增分類...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("button",{onClick:()=>{F.trim()&&(i(F),J(""))},disabled:!F.trim(),className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-40",children:"新增"})]}),a.jsx("button",{onClick:()=>{M(!1),J(""),ne(null)},className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})]})}function bP({item:t,user:e,categories:n,onSave:r,onClose:s,uploadPhoto:i,deletePhoto:o}){const[l,c]=g.useState(t.name),[u,h]=g.useState(t.category),[d,f]=g.useState(t.note||""),[p,v]=g.useState(t.photoURL||""),[w,k]=g.useState(null),[_,m]=g.useState(null),[y,x]=g.useState(!1),[b,N]=g.useState(!1),S=g.useRef(null),C=T=>{var F;const M=(F=T.target.files)==null?void 0:F[0];M&&(k(M),_&&URL.revokeObjectURL(_),m(URL.createObjectURL(M)),x(!1),T.target.value="")},j=()=>{_&&URL.revokeObjectURL(_),k(null),m(null),x(!0)},E=async()=>{N(!0);let T=p;if(y&&!w&&(t.photoURL&&o(t.id),T=""),w&&e)try{T=await i(t.id,w)}catch{T=y?"":p}r(t.id,l,u,d,T),N(!1)},I=_||!y&&p;return a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:s,children:a.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:T=>T.stopPropagation(),children:[a.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900 dark:text-slate-50",children:"編輯物品"}),a.jsx("input",{type:"text",value:l,onChange:T=>c(T.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),a.jsx("select",{value:u,onChange:T=>h(T.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:n.map(T=>a.jsx("option",{value:T,children:T},T))}),a.jsx("input",{type:"text",value:d,onChange:T=>f(T.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&a.jsxs("div",{className:"mb-4",children:[a.jsx("input",{ref:S,type:"file",accept:"image/*",capture:"environment",onChange:C,className:"hidden"}),I?a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("img",{src:_||p,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:()=>{var T;return(T=S.current)==null?void 0:T.click()},className:"text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150",children:"更換照片"}),a.jsx("button",{onClick:j,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}):a.jsxs("button",{onClick:()=>{var T;return(T=S.current)==null?void 0:T.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[a.jsx(pp,{size:18}),a.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:s,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),a.jsxs("button",{onClick:E,disabled:b,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[b&&a.jsx(sb,{size:18,className:"animate-spin"}),b?"儲存中...":"儲存"]})]})]})})}function wP({data:t,onNavigate:e,onSaveData:n,categories:r=[]}){var m,y;const[s,i]=g.useState(!1),[o,l]=g.useState(""),[c,u]=g.useState(r[0]||""),[h,d]=g.useState(""),f=(m=t.lists)==null?void 0:m.find(x=>x.id===t.activeListId),p=f?{...f,items:Array.isArray(f.items)?f.items:[],checkedItems:Array.isArray(f.checkedItems)?f.checkedItems:[]}:null,v={};r.forEach(x=>{v[x]=[]}),(t.itemLibrary||[]).forEach(x=>{v[x.category]&&v[x.category].push(x)});const w=x=>{const b={...t,lists:t.lists.map(N=>{if(N.id!==t.activeListId)return N;const S=Array.isArray(N.items)?N.items:[],C=Array.isArray(N.checkedItems)?N.checkedItems:[],j=S.includes(x);return{...N,items:j?S.filter(E=>E!==x):[...S,x],checkedItems:j?C.filter(E=>E!==x):C}})};n(b)},k=x=>{const b=(p==null?void 0:p.items)||[],N=x.every(C=>b.includes(C.id)),S={...t,lists:t.lists.map(C=>{if(C.id!==t.activeListId)return C;const j=Array.isArray(C.items)?C.items:[],E=Array.isArray(C.checkedItems)?C.checkedItems:[];if(N){const I=new Set(x.map(T=>T.id));return{...C,items:j.filter(T=>!I.has(T)),checkedItems:E.filter(T=>!I.has(T))}}else{const I=x.filter(T=>!j.includes(T.id)).map(T=>T.id);return{...C,items:[...j,...I]}}})};n(S)},_=()=>{const x=o.trim();if(!x)return;const b="item_"+Date.now(),N={id:b,name:x,category:c},S={...t,itemLibrary:[...t.itemLibrary||[],N],lists:t.lists.map(C=>{if(C.id!==t.activeListId)return C;const j=Array.isArray(C.items)?C.items:[];return{...C,items:[...j,b]}})};n(S),l(""),i(!1)};return a.jsxs("div",{className:"flex flex-col h-screen",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"返回",children:a.jsx(eb,{size:22,className:"text-slate-600 dark:text-slate-300"})}),a.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),a.jsx("div",{className:"w-10"})]}),a.jsxs("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 mt-1",children:["選擇要加入「",p==null?void 0:p.name,"」的物品"]})]}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[a.jsx("div",{className:"mb-4",children:a.jsxs("div",{className:"relative",children:[a.jsx(Mc,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",value:h,onChange:x=>d(x.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),h&&a.jsx("button",{onClick:()=>d(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:a.jsx(dt,{size:16})})]})}),h&&r.every(x=>{const b=h.toLowerCase();return v[x].filter(N=>{var S,C,j;return((S=N.name)==null?void 0:S.toLowerCase().includes(b))||((C=N.category)==null?void 0:C.toLowerCase().includes(b))||((j=N.note)==null?void 0:j.toLowerCase().includes(b))}).length===0})&&a.jsxs("div",{className:"text-center py-8 text-slate-400",children:["找不到「",h,"」相關物品"]}),r.map(x=>{const b=h?v[x].filter(C=>{var E,I,T;const j=h.toLowerCase();return((E=C.name)==null?void 0:E.toLowerCase().includes(j))||((I=C.category)==null?void 0:I.toLowerCase().includes(j))||((T=C.note)==null?void 0:T.toLowerCase().includes(j))}):v[x];if(b.length===0)return null;const N=(p==null?void 0:p.items)||[],S=b.length>0&&b.every(C=>N.includes(C.id));return a.jsxs("div",{className:"mb-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("span",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold",children:x}),a.jsx("button",{onClick:()=>k(b),className:`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors duration-150 min-h-[28px]
                    ${S?"text-rose-500 bg-rose-50 dark:bg-rose-900/30 active:bg-rose-100 dark:active:bg-rose-900/50":"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 active:bg-indigo-100 dark:active:bg-indigo-900/50"}`,children:S?"全部移除":"全部加入"})]}),a.jsx("div",{className:"space-y-2",children:b.map(C=>{const j=p==null?void 0:p.items.includes(C.id);return a.jsxs("div",{onClick:()=>w(C.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${j?"ring-2 ring-indigo-500":""}`,children:[a.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${j?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}`,children:j&&a.jsx(ls,{size:14,className:"text-white"})}),C.photoURL&&a.jsx("img",{src:C.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:E=>{E.target.style.display="none"}}),a.jsxs("div",{className:"flex-1",children:[a.jsx("div",{className:j?"text-slate-800 dark:text-slate-100 font-medium":"text-slate-600 dark:text-slate-300",children:C.name}),C.note&&a.jsxs("div",{className:"text-xs text-slate-400 mt-0.5 flex items-center gap-1",children:[a.jsx(mp,{size:10,className:"flex-shrink-0"}),C.note]})]})]},C.id)})})]},x)})]}),s&&a.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{i(!1),l("")}}),s&&a.jsxs("div",{className:"fixed right-4 bottom-[168px] z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),a.jsx("input",{type:"text",placeholder:"物品名稱",value:o,onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&_()},className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("select",{value:c,onChange:x=>u(x.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:r.map(x=>a.jsx("option",{value:x,children:x},x))}),a.jsx("button",{onClick:_,disabled:!o.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),a.jsx("button",{onClick:()=>{i(x=>!x),s&&l("")},className:"fixed right-4 bottom-[112px] z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":s?"關閉新增表單":"新增物品",children:s?a.jsx(dt,{size:24}):a.jsx(Vn,{size:24})}),a.jsxs("div",{className:"p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700",children:[a.jsxs("div",{className:"text-center text-slate-500 dark:text-slate-400 mb-3",children:["已選擇 ",((y=p==null?void 0:p.items)==null?void 0:y.length)||0," 個物品"]}),a.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"完成"})]})]})}function kP({user:t,syncStatus:e,onLogin:n,onLogout:r,onNavigate:s,isAdmin:i,themePreference:o,onThemeChange:l}){const c={offline:{icon:qT,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50 dark:bg-slate-800"},syncing:{icon:j4,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50 dark:bg-amber-900/30"},synced:{icon:ZT,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50 dark:bg-emerald-900/30"},error:{icon:GT,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50 dark:bg-rose-900/30"}},u=c[e]||c.offline,h=u.icon,d=[{value:"light",label:"淺色",icon:pR},{value:"system",label:"系統",icon:U4},{value:"dark",label:"深色",icon:B4}];return a.jsxs("div",{className:"flex flex-col h-screen pb-tabbar",children:[a.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top",children:a.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center",children:"設定"})}),a.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"帳號"}),t?a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&a.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:f=>f.target.style.display="none"}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-50 truncate",children:t.displayName||"使用者"}),a.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 truncate",children:t.email})]})]}),a.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[a.jsx(O4,{size:18}),"登出"]})]}):a.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[a.jsx(A4,{size:18}),"使用 Google 登入"]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"同步狀態"}),a.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${u.bg}`,children:[a.jsx(h,{size:20,className:`${u.color} ${e==="syncing"?"animate-spin":""}`}),a.jsx("span",{className:`font-medium ${u.color}`,children:u.label})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"外觀"}),a.jsx("div",{className:"flex gap-2",children:d.map(({value:f,label:p,icon:v})=>a.jsxs("button",{onClick:()=>l(f),className:`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${o===f?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500":"bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600"}`,children:[a.jsx(v,{size:20}),p]},f))})]}),t&&i&&a.jsxs("button",{onClick:()=>s("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[a.jsx(rb,{size:18}),"管理後台"]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"關於"}),a.jsxs("div",{className:"text-sm text-slate-600 dark:text-slate-300",children:[a.jsxs("div",{className:"flex justify-between py-2",children:[a.jsx("span",{children:"應用程式"}),a.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"打包清單"})]}),a.jsx("div",{className:"border-t border-slate-100 dark:border-slate-700"}),a.jsxs("div",{className:"flex justify-between py-2",children:[a.jsx("span",{children:"版本"}),a.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"1.1.7"})]})]})]})]})]})}function Fl({icon:t,label:e,value:n,color:r="text-indigo-600"}){return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[a.jsx(t,{size:20,className:r}),a.jsx("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:e})]}),a.jsx("div",{className:`text-3xl font-bold ${r}`,children:n})]})}function CP({data:t,shared:e}){const n=t.itemLibrary.length,r=t.lists.length,s=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,f)=>f[1]-d[1]),c={};t.itemLibrary.forEach(d=>{c[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(f=>{c[f]!==void 0&&c[f]++})});const u=Object.entries(c).sort((d,f)=>f[1]-d[1]).slice(0,5).map(([d,f])=>{const p=t.itemLibrary.find(v=>v.id===Number(d));return p?{name:p.name,count:f}:null}).filter(Boolean),h=l.length>0?l[0][1]:1;return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"數據總覽"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[a.jsx(Fl,{icon:Fo,label:"物品總數",value:n,color:"text-indigo-600"}),a.jsx(Fl,{icon:E4,label:"清單總數",value:r,color:"text-emerald-600"}),a.jsx(Fl,{icon:zc,label:"已分享清單",value:s,color:"text-amber-600"}),a.jsx(Fl,{icon:ib,label:"收到分享",value:i,color:"text-rose-600"})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(BT,{size:18,className:"text-slate-500 dark:text-slate-400"}),a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"分類統計"})]}),l.length===0?a.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):a.jsx("div",{className:"space-y-3",children:l.map(([d,f])=>a.jsxs("div",{children:[a.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[a.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:d}),a.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:f})]}),a.jsx("div",{className:"h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${f/h*100}%`}})})]},d))})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(Fo,{size:18,className:"text-slate-500 dark:text-slate-400"}),a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"最常使用物品 Top 5"})]}),u.length===0?a.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):a.jsx("div",{className:"space-y-2",children:u.map((d,f)=>a.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:f+1}),a.jsx("span",{className:"text-slate-800 dark:text-slate-100",children:d.name})]}),a.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:["出現在 ",d.count," 個清單"]})]},f))})]})]})]})}function NP({data:t,onSaveData:e,categories:n=[]}){const[r,s]=g.useState(""),[i,o]=g.useState(""),[l,c]=g.useState(new Set),[u,h]=g.useState(null),[d,f]=g.useState({name:"",category:"",note:""}),[p,v]=g.useState(""),[w,k]=g.useState(!1),_=g.useRef(null),m=t.itemLibrary.filter(I=>{const T=!r||I.name.toLowerCase().includes(r.toLowerCase())||(I.note||"").toLowerCase().includes(r.toLowerCase()),M=!i||I.category===i;return T&&M}),y=I=>{c(T=>{const M=new Set(T);return M.has(I)?M.delete(I):M.add(I),M})},x=()=>{l.size===m.length?c(new Set):c(new Set(m.map(I=>I.id)))},b=I=>{h(I.id),f({name:I.name,category:I.category,note:I.note||""})},N=()=>{const I=t.itemLibrary.map(T=>T.id===u?{...T,...d}:T);e({...t,itemLibrary:I}),h(null)},S=I=>{const T=new Set(I),M=t.itemLibrary.filter(J=>!T.has(J.id)),F=t.lists.map(J=>({...J,items:(J.items||[]).filter(se=>!T.has(se)),checkedItems:(J.checkedItems||[]).filter(se=>!T.has(se))}));e({...t,itemLibrary:M,lists:F}),c(new Set)},C=()=>{if(!p)return;const I=t.itemLibrary.map(T=>l.has(T.id)?{...T,category:p}:T);e({...t,itemLibrary:I}),c(new Set),k(!1),v("")},j=()=>{const I=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),T=URL.createObjectURL(I),M=document.createElement("a");M.href=T,M.download="item-library.json",M.click(),URL.revokeObjectURL(T)},E=I=>{var F;const T=(F=I.target.files)==null?void 0:F[0];if(!T)return;const M=new FileReader;M.onload=J=>{try{const se=JSON.parse(J.target.result);if(!Array.isArray(se)){alert("格式錯誤：需要 JSON 陣列");return}if(!se.every(Q=>Q.name&&Q.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const O=Math.max(0,...t.itemLibrary.map(Q=>Q.id)),z=new Set(t.itemLibrary.map(Q=>Q.name)),B=se.filter(Q=>!z.has(Q.name)).map((Q,he)=>({id:Q.id||O+he+1,name:Q.name,category:Q.category,note:Q.note||"",...Q.photoURL?{photoURL:Q.photoURL}:{}}));if(B.length===0){alert("沒有新物品可匯入（全部重複）");return}const q=new Set(t.itemLibrary.map(Q=>Q.id));let V=O+1;B.forEach(Q=>{for(;q.has(V);)V++;Q.id=V,q.add(V),V++}),e({...t,itemLibrary:[...t.itemLibrary,...B]}),alert(`已匯入 ${B.length} 個物品`)}catch{alert("JSON 解析失敗")}},M.readAsText(T),I.target.value=""};return a.jsxs("div",{children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"物品管理"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("button",{onClick:j,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[a.jsx(i4,{size:16})," 匯出"]}),a.jsxs("button",{onClick:()=>{var I;return(I=_.current)==null?void 0:I.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[a.jsx(CR,{size:16})," 匯入"]}),a.jsx("input",{ref:_,type:"file",accept:".json",onChange:E,className:"hidden"})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(Mc,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsx("input",{type:"text",placeholder:"搜尋物品...",value:r,onChange:I=>s(I.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),a.jsxs("div",{className:"relative",children:[a.jsx(_4,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),a.jsxs("select",{value:i,onChange:I=>o(I.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[a.jsx("option",{value:"",children:"所有分類"}),n.map(I=>a.jsx("option",{value:I,children:I},I))]})]})]}),l.size>0&&a.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg",children:[a.jsxs("span",{className:"text-sm font-medium text-indigo-700 dark:text-indigo-400",children:["已選 ",l.size," 項"]}),a.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${l.size} 個物品？`)&&S([...l])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[a.jsx(rn,{size:14})," 批量刪除"]}),w?a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("select",{value:p,onChange:I=>v(I.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇分類"}),n.map(I=>a.jsx("option",{value:I,children:I},I))]}),a.jsx("button",{onClick:C,disabled:!p,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:a.jsx(ls,{size:14})}),a.jsx("button",{onClick:()=>{k(!1),v("")},className:"px-2 py-1.5 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:a.jsx(dt,{size:14})})]}):a.jsxs("button",{onClick:()=>k(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[a.jsx(_p,{size:14})," 批量改分類"]})]}),a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700",children:a.jsxs("tr",{children:[a.jsx("th",{className:"w-10 px-4 py-3",children:a.jsx("input",{type:"checkbox",checked:m.length>0&&l.size===m.length,onChange:x,className:"rounded"})}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分類"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"備註"}),a.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),a.jsxs("tbody",{children:[m.map(I=>a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700",children:[a.jsx("td",{className:"px-4 py-3",children:a.jsx("input",{type:"checkbox",checked:l.has(I.id),onChange:()=>y(I.id),className:"rounded"})}),u===I.id?a.jsxs(a.Fragment,{children:[a.jsx("td",{className:"px-4 py-2",children:a.jsx("input",{value:d.name,onChange:T=>f(M=>({...M,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("select",{value:d.category,onChange:T=>f(M=>({...M,category:T.target.value})),className:"px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(T=>a.jsx("option",{value:T,children:T},T))})}),a.jsx("td",{className:"px-4 py-2",children:a.jsx("input",{value:d.note,onChange:T=>f(M=>({...M,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),a.jsx("td",{className:"px-4 py-2",children:a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:N,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:a.jsx(ls,{size:16})}),a.jsx("button",{onClick:()=>h(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:a.jsx(dt,{size:16})})]})})]}):a.jsxs(a.Fragment,{children:[a.jsx("td",{className:"px-4 py-3 text-sm text-slate-800 dark:text-slate-100",children:I.name}),a.jsx("td",{className:"px-4 py-3",children:a.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:I.category})}),a.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:I.note||"-"}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>b(I),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:a.jsx(Bo,{size:16})}),a.jsx("button",{onClick:()=>{confirm(`刪除「${I.name}」？`)&&S([I.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:a.jsx(rn,{size:16})})]})})]})]},I.id)),m.length===0&&a.jsx("tr",{children:a.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),a.jsxs("div",{className:"lg:hidden space-y-2",children:[m.length===0&&a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),m.map(I=>a.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx("input",{type:"checkbox",checked:l.has(I.id),onChange:()=>y(I.id),className:"mt-1 rounded"}),u===I.id?a.jsxs("div",{className:"flex-1 space-y-2",children:[a.jsx("input",{value:d.name,onChange:T=>f(M=>({...M,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("select",{value:d.category,onChange:T=>f(M=>({...M,category:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:n.map(T=>a.jsx("option",{value:T,children:T},T))}),a.jsx("input",{value:d.note,onChange:T=>f(M=>({...M,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"備註"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:N,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),a.jsx("button",{onClick:()=>h(null),className:"px-3 py-1 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg",children:"取消"})]})]}):a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:I.name}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>b(I),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:a.jsx(Bo,{size:16})}),a.jsx("button",{onClick:()=>{confirm(`刪除「${I.name}」？`)&&S([I.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:a.jsx(rn,{size:16})})]})]}),a.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:I.category}),I.note&&a.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1",children:I.note})]})]})},I.id))]})]})}function SP({data:t,onSaveData:e}){const n=t.templates||[],[r,s]=g.useState(!1),[i,o]=g.useState("list"),[l,c]=g.useState(""),[u,h]=g.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,f]=g.useState(null),[p,v]=g.useState(null),[w,k]=g.useState(""),_=()=>{h({name:"",icon:"clipboard-list",description:"",itemIds:[]}),c(""),o("list"),s(!1)},m=()=>{const E=t.lists.find(I=>I.id===Number(l));E&&(h({name:E.name+" 範本",icon:E.icon||"clipboard-list",description:"",itemIds:[...E.items||[]]}),o("manual"))},y=E=>{h(I=>({...I,itemIds:I.itemIds.includes(E)?I.itemIds.filter(T=>T!==E):[...I.itemIds,E]}))},x=()=>{if(!u.name.trim())return;const I={id:Math.max(0,...n.map(T=>T.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,I]}),_()},b=()=>{if(!u.name.trim())return;const E=n.map(I=>I.id===d?{...I,...u,name:u.name.trim()}:I);e({...t,templates:E}),f(null),_()},N=E=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(I=>I.id!==E)})},S=E=>{f(E.id),h({name:E.name,icon:E.icon,description:E.description||"",itemIds:[...E.itemIds]}),s(!0)},C=()=>{const E=n.find(M=>M.id===p),I=t.lists.find(M=>M.id===Number(w));if(!E||!I)return;const T=t.lists.map(M=>M.id===I.id?{...M,items:[...new Set([...M.items||[],...E.itemIds])]}:M);e({...t,lists:T}),v(null),k(""),alert(`已將範本「${E.name}」套用到「${I.name}」`)},j=E=>E.map(I=>t.itemLibrary.find(T=>T.id===I)).filter(Boolean).map(I=>I.name);return a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"清單範本"}),!r&&a.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[a.jsx(Vn,{size:16})," 建立範本"]})]}),r&&a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"從現有清單建立"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:l,onChange:E=>c(E.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(E=>a.jsx("option",{value:E.id,children:E.name},E.id))]}),a.jsx("button",{onClick:m,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:a.jsx(r4,{size:16})})]}),a.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"範本名稱"}),a.jsx("input",{value:u.name,onChange:E=>h(I=>({...I,name:E.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"例：出國旅行"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"圖示"}),a.jsx("select",{value:u.icon,onChange:E=>h(I=>({...I,icon:E.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Kx.map(E=>a.jsx("option",{value:E,children:E},E))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"說明"}),a.jsx("input",{value:u.description,onChange:E=>h(I=>({...I,description:E.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"選填"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),a.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg",children:t.itemLibrary.map(E=>a.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("input",{type:"checkbox",checked:u.itemIds.includes(E.id),onChange:()=>y(E.id),className:"rounded"}),a.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100",children:E.name}),a.jsx("span",{className:"text-xs text-slate-400",children:E.category})]},E.id))})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:d?b:x,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),a.jsx("button",{onClick:()=>{f(null),_()},className:"px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:"取消"})]})]})]}),p&&a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-2",children:"套用範本"}),a.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mb-3",children:"選擇要套用的目標清單："}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs("select",{value:w,onChange:E=>k(E.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[a.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(E=>a.jsx("option",{value:E.id,children:E.name},E.id))]}),a.jsxs("button",{onClick:C,disabled:!w,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[a.jsx(ls,{size:16})," 套用"]}),a.jsx("button",{onClick:()=>{v(null),k("")},className:"px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:a.jsx(dt,{size:16})})]})]}),n.length===0&&!r&&a.jsxs("div",{className:"text-center py-12 text-slate-400",children:[a.jsx(tb,{size:48,className:"mx-auto mb-3 opacity-50"}),a.jsx("p",{children:"尚未建立任何範本"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(E=>a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-start justify-between mb-2",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:E.name}),E.description&&a.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:E.description})]}),a.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:E.icon})]}),a.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[j(E.itemIds).slice(0,5).map((I,T)=>a.jsx("span",{className:"text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full",children:I},T)),E.itemIds.length>5&&a.jsxs("span",{className:"text-xs text-slate-400",children:["+",E.itemIds.length-5," 更多"]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:[a.jsx(Fo,{size:14,className:"inline mr-1"}),E.itemIds.length," 個物品"]}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>v(E.id),className:"px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50",children:"套用"}),a.jsx("button",{onClick:()=>S(E),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:a.jsx(Bo,{size:14})}),a.jsx("button",{onClick:()=>N(E.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:a.jsx(rn,{size:14})})]})]})]},E.id))})]})}function IP({data:t,shared:e}){const[n,r]=g.useState("byMe"),[s,i]=g.useState({}),[o,l]=g.useState(""),c=e.sharedByMe||{},u=e.sharedWithMe||{},h=k=>{var m;const _=t.lists.find(y=>y.sharedListId===k);return(_==null?void 0:_.name)||((m=c[k])==null?void 0:m.name)||"未知清單"},d=async k=>{const _=o.trim();if(_)try{await e.addSharedUser(k,_),i({}),l("")}catch(m){alert("新增失敗："+m.message)}},f=async(k,_)=>{if(confirm(`移除 ${_} 的存取權限？`))try{await e.removeSharedUser(k,_)}catch(m){alert("移除失敗："+m.message)}},p=async k=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(k)}catch(_){alert("取消分享失敗："+_.message)}},v=Object.entries(c),w=Object.entries(u);return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分享管理"}),a.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-700 mb-4",children:[a.jsxs("button",{onClick:()=>r("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[a.jsx(zc,{size:16})," 我分享的 (",v.length,")"]}),a.jsxs("button",{onClick:()=>r("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[a.jsx(ib,{size:16})," 分享給我的 (",w.length,")"]})]}),n==="byMe"&&a.jsx("div",{children:v.length===0?a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分享對象"}),a.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),a.jsx("tbody",{children:v.map(([k,_])=>{const m=Object.keys(_.sharedWith||{}).map(ah);return a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:h(k)}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[m.map(y=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,a.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:a.jsx(dt,{size:12})})]},y)),s[k]?a.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"inline-flex gap-1",children:[a.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 dark:border-slate-600 rounded w-40 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("button",{type:"submit",className:"text-emerald-600 dark:text-emerald-400",children:a.jsx(Vn,{size:14})}),a.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:a.jsx(dt,{size:14})})]}):a.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-xs text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增"})]})}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("button",{onClick:()=>p(k),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg",children:[a.jsx(rn,{size:14})," 取消分享"]})})]},k)})})]})}),a.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([k,_])=>{const m=Object.keys(_.sharedWith||{}).map(ah);return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:h(k)}),a.jsx("button",{onClick:()=>p(k),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),a.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:m.map(y=>a.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[y,a.jsx("button",{onClick:()=>f(k,y),className:"text-slate-400 hover:text-rose-500",children:a.jsx(dt,{size:12})})]},y))}),s[k]?a.jsxs("form",{onSubmit:y=>{y.preventDefault(),d(k)},className:"flex gap-2",children:[a.jsx("input",{value:o,onChange:y=>l(y.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),a.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),a.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 dark:bg-slate-600 dark:text-slate-200 rounded-lg",children:"取消"})]}):a.jsx("button",{onClick:()=>i({[k]:!0}),className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增分享對象"})]},k)})})]})}),n==="withMe"&&a.jsx("div",{children:w.length===0?a.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:a.jsxs("table",{className:"w-full",children:[a.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:a.jsxs("tr",{children:[a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"來源"}),a.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"勾選進度"})]})}),a.jsx("tbody",{children:w.map(([k,_])=>{const m=(_.items||[]).length,y=(_.checkedItems||[]).length;return a.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:_.name}),a.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:_.ownerName||_.ownerEmail}),a.jsx("td",{className:"px-4 py-3",children:a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:m>0?`${y/m*100}%`:"0%"}})}),a.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",m]})]})})]},k)})})]})}),a.jsx("div",{className:"lg:hidden space-y-3",children:w.map(([k,_])=>{const m=(_.items||[]).length,y=(_.checkedItems||[]).length;return a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[a.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:_.name}),a.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:["來自 ",_.ownerName||_.ownerEmail]}),a.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[a.jsx("div",{className:"flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:a.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:m>0?`${y/m*100}%`:"0%"}})}),a.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[y,"/",m]})]})]},k)})})]})})]})}function EP({user:t,admin:e}){const{adminEmails:n,addAdmin:r,removeAdmin:s}=e,[i,o]=g.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await r(i),o(""))},c=async u=>{var h;if(u===((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await s(u)};return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"帳號管理"}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[a.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:"新增管理員"}),a.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[a.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[a.jsx(Vn,{size:16})," 新增"]})]})]}),a.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:[a.jsx("div",{className:"px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700",children:a.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?a.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[a.jsx(uh,{size:32,className:"mx-auto mb-2 opacity-50"}),a.jsx("p",{children:"尚未設定管理員"}),a.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):a.jsx("ul",{children:n.map(u=>{var d;const h=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return a.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[a.jsx(uh,{size:16,className:"text-indigo-500 dark:text-indigo-400 shrink-0"}),a.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100 truncate",children:u}),h&&a.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),a.jsx("button",{onClick:()=>c(u),disabled:h,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:h?"無法移除自己":"移除管理員",children:a.jsx(rn,{size:16})})]},u)})})]})]})}function TP({categories:t,addCategory:e,updateCategory:n,removeCategory:r}){const[s,i]=g.useState(""),[o,l]=g.useState(null),[c,u]=g.useState(""),h=async()=>{const v=s.trim();v&&(await e(v),i(""))},d=v=>{l(v),u(t[v])},f=async()=>{o!==null&&(await n(t[o],c),l(null),u(""))},p=async v=>{t.length<=1||confirm(`確定刪除分類「${v}」？已使用此分類的物品不會被刪除。`)&&await r(v)};return a.jsxs("div",{children:[a.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分類管理"}),a.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden mb-4",children:t.map((v,w)=>a.jsx("div",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:o===w?a.jsxs("div",{className:"flex items-center gap-2 flex-1",children:[a.jsx("input",{value:c,onChange:k=>u(k.target.value),onKeyDown:k=>{k.key==="Enter"&&f(),k.key==="Escape"&&l(null)},className:"flex-1 px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsx("button",{onClick:f,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:a.jsx(ls,{size:16})}),a.jsx("button",{onClick:()=>l(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:a.jsx(dt,{size:16})})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"text-sm font-medium text-slate-800 dark:text-slate-100",children:v}),a.jsxs("div",{className:"flex gap-1",children:[a.jsx("button",{onClick:()=>d(w),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:a.jsx(Bo,{size:16})}),t.length>1&&a.jsx("button",{onClick:()=>p(v),className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:a.jsx(rn,{size:16})})]})]})},v))}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:s,onChange:v=>i(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},placeholder:"新增分類名稱...",className:"flex-1 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),a.jsxs("button",{onClick:h,disabled:!s.trim(),className:"flex items-center gap-1.5 px-4 py-2.5 text-sm bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 disabled:opacity-50 transition-colors",children:[a.jsx(Vn,{size:16})," 新增"]})]})]})}const Vu=[{key:"dashboard",label:"總覽",icon:rb},{key:"items",label:"物品管理",icon:Fo},{key:"categories",label:"分類管理",icon:_p},{key:"templates",label:"清單範本",icon:tb},{key:"sharing",label:"分享管理",icon:zc},{key:"accounts",label:"帳號管理",icon:uh}];function RP({data:t,user:e,shared:n,onNavigate:r,onSaveData:s,admin:i,categories:o,categoryActions:l}){var w;const[c,u]=g.useState("dashboard"),[h,d]=g.useState(!1),f=k=>{u(k),d(!1)},p=a.jsxs("div",{className:"flex flex-col h-full",children:[a.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-700",children:[a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),a.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),a.jsx("nav",{className:"flex-1 p-2",children:Vu.map(({key:k,label:_,icon:m})=>a.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${c===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"}`,children:[a.jsx(m,{size:18}),_]},k))}),a.jsx("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700",children:a.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",children:[a.jsx(Fu,{size:18}),"返回應用"]})})]}),v=()=>{switch(c){case"dashboard":return a.jsx(CP,{data:t,shared:n});case"items":return a.jsx(NP,{data:t,onSaveData:s,categories:o});case"categories":return a.jsx(TP,{categories:o,...l});case"templates":return a.jsx(SP,{data:t,onSaveData:s});case"sharing":return a.jsx(IP,{data:t,shared:n});case"accounts":return a.jsx(EP,{user:e,admin:i});default:return null}};return a.jsxs("div",{className:"h-screen bg-slate-50 dark:bg-slate-900",children:[a.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[a.jsx("aside",{className:"bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto",children:p}),a.jsx("main",{className:"overflow-y-auto p-6",children:a.jsx("div",{className:"max-w-6xl mx-auto",children:v()})})]}),a.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[a.jsxs("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top",children:[a.jsx("button",{onClick:()=>d(!0),className:"p-1 -ml-1 text-slate-600 dark:text-slate-300",children:a.jsx(M4,{size:24})}),a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:((w=Vu.find(k=>k.key===c))==null?void 0:w.label)||"管理後台"}),a.jsx("button",{onClick:()=>r("profile"),className:"p-1 -mr-1 text-slate-600 dark:text-slate-300",children:a.jsx(Fu,{size:24})})]}),h&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>d(!1)}),a.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top",children:[a.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",children:[a.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),a.jsx("button",{onClick:()=>d(!1),className:"p-1 text-slate-400",children:a.jsx(dt,{size:20})})]}),a.jsx("nav",{className:"p-2",children:Vu.map(({key:k,label:_,icon:m})=>a.jsxs("button",{onClick:()=>f(k),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${c===k?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,children:[a.jsx(m,{size:18}),_]},k))}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom",children:a.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[a.jsx(Fu,{size:18}),"返回應用"]})})]})]}),a.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:v()})]})]})}const jP=[{id:"lists",label:"所有清單",icon:S4},{id:"library",label:"物品庫",icon:Fo},{id:"profile",label:"設定",icon:SR}];function PP({currentView:t,onNavigate:e}){return a.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 z-40 safe-bottom",children:a.jsx("div",{className:"flex",children:jP.map(n=>{const r=t===n.id,s=n.icon;return a.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600 dark:text-indigo-400":"text-slate-400 active:text-slate-600 dark:active:text-slate-300"}`,"aria-label":n.label,children:[a.jsx(s,{size:22,strokeWidth:r?2.5:2}),a.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function AP(){const[t,e]=g.useState("lists"),[n,r]=g.useState(null),s=gT(),{user:i,data:o,syncStatus:l,saveData:c,handleLogin:u,handleLogout:h}=yT(s),d=vT(i,o),f=xT(i),{categories:p,addCategory:v,updateCategory:w,removeCategory:k}=bT(),{preference:_,changeTheme:m}=kT(),y=(b,N)=>{(N==null?void 0:N.sharedListId)!==void 0&&r(N.sharedListId),e(b)},x=t!=="addItems"&&t!=="admin";return a.jsxs(a.Fragment,{children:[t==="checklist"&&a.jsx(hP,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:y,onSaveData:c,shared:d,activeSharedListId:n,categories:p}),t==="lists"&&a.jsx(_P,{data:o,user:i,onNavigate:y,onSaveData:c,shared:d}),t==="library"&&a.jsx(xP,{data:o,user:i,onNavigate:y,onSaveData:c,categories:p,onAddCategory:v,onUpdateCategory:w,onRemoveCategory:k}),t==="addItems"&&a.jsx(wP,{data:o,onNavigate:y,onSaveData:c,categories:p}),t==="profile"&&a.jsx(kP,{user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:y,isAdmin:f.isAdmin,themePreference:_,onThemeChange:m}),t==="admin"&&f.isAdmin&&a.jsx(RP,{data:o,user:i,shared:d,onNavigate:y,onSaveData:c,admin:f,categories:p,categoryActions:{addCategory:v,updateCategory:w,removeCategory:k}}),t==="admin"&&!f.isAdmin&&!f.loading&&a.jsxs("div",{className:"flex flex-col items-center justify-center h-screen p-4",children:[a.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-4",children:"你沒有管理後台的存取權限"}),a.jsx("button",{onClick:()=>y("profile"),className:"px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg",children:"返回設定"})]}),x&&a.jsx(PP,{currentView:t==="checklist"?"lists":t,onNavigate:b=>y(b,{sharedListId:null})}),!1]})}Yu.createRoot(document.getElementById("root")).render(a.jsx(mt.StrictMode,{children:a.jsx(AP,{})}));
