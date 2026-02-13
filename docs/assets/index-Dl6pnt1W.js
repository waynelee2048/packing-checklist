(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Eb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l0={exports:{}},Ya={},a0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uo=Symbol.for("react.element"),Nb=Symbol.for("react.portal"),Ib=Symbol.for("react.fragment"),Tb=Symbol.for("react.strict_mode"),Rb=Symbol.for("react.profiler"),Pb=Symbol.for("react.provider"),jb=Symbol.for("react.context"),Ab=Symbol.for("react.forward_ref"),Lb=Symbol.for("react.suspense"),Ob=Symbol.for("react.memo"),Db=Symbol.for("react.lazy"),gp=Symbol.iterator;function Mb(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var c0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u0=Object.assign,d0={};function si(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||c0}si.prototype.isReactComponent={};si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function h0(){}h0.prototype=si.prototype;function ih(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||c0}var oh=ih.prototype=new h0;oh.constructor=ih;u0(oh,si.prototype);oh.isPureReactComponent=!0;var yp=Array.isArray,f0=Object.prototype.hasOwnProperty,lh={current:null},p0={key:!0,ref:!0,__self:!0,__source:!0};function m0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)f0.call(e,r)&&!p0.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Uo,type:t,key:i,ref:o,props:s,_owner:lh.current}}function Ub(t,e){return{$$typeof:Uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Uo}function zb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vp=/\/+/g;function Oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zb(""+t.key):e.toString(36)}function Tl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Uo:case Nb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Oc(o,0):r,yp(s)?(n="",t!=null&&(n=t.replace(vp,"$&/")+"/"),Tl(s,e,n,"",function(u){return u})):s!=null&&(ah(s)&&(s=Ub(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(vp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",yp(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+Oc(i,l);o+=Tl(i,e,n,a,s)}else if(a=Mb(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+Oc(i,l++),o+=Tl(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sl(t,e,n){if(t==null)return t;var r=[],s=0;return Tl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Fb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},Rl={transition:null},Bb={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:Rl,ReactCurrentOwner:lh};function _0(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=si;te.Fragment=Ib;te.Profiler=Rb;te.PureComponent=ih;te.StrictMode=Tb;te.Suspense=Lb;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bb;te.act=_0;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=u0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=lh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)f0.call(e,a)&&!p0.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Uo,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:jb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pb,_context:t},t.Consumer=t};te.createElement=m0;te.createFactory=function(t){var e=m0.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:Ab,render:t}};te.isValidElement=ah;te.lazy=function(t){return{$$typeof:Db,_payload:{_status:-1,_result:t},_init:Fb}};te.memo=function(t,e){return{$$typeof:Ob,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=Rl.transition;Rl.transition={};try{t()}finally{Rl.transition=e}};te.unstable_act=_0;te.useCallback=function(t,e){return pt.current.useCallback(t,e)};te.useContext=function(t){return pt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};te.useEffect=function(t,e){return pt.current.useEffect(t,e)};te.useId=function(){return pt.current.useId()};te.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return pt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};te.useRef=function(t){return pt.current.useRef(t)};te.useState=function(t){return pt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return pt.current.useTransition()};te.version="18.3.1";a0.exports=te;var y=a0.exports;const ct=Eb(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $b=y,Wb=Symbol.for("react.element"),Hb=Symbol.for("react.fragment"),Vb=Object.prototype.hasOwnProperty,Yb=$b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qb={key:!0,ref:!0,__self:!0,__source:!0};function g0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Vb.call(e,r)&&!Qb.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Wb,type:t,key:i,ref:o,props:s,_owner:Yb.current}}Ya.Fragment=Hb;Ya.jsx=g0;Ya.jsxs=g0;l0.exports=Ya;var c=l0.exports,Au={},y0={exports:{}},At={},v0={exports:{}},x0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,I){var A=O.length;O.push(I);e:for(;0<A;){var z=A-1>>>1,U=O[z];if(0<s(U,I))O[z]=I,O[A]=U,A=z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var I=O[0],A=O.pop();if(A!==I){O[0]=A;e:for(var z=0,U=O.length,se=U>>>1;z<se;){var he=2*(z+1)-1,P=O[he],F=he+1,X=O[F];if(0>s(P,A))F<U&&0>s(X,P)?(O[z]=X,O[F]=A,z=F):(O[z]=P,O[he]=A,z=he);else if(F<U&&0>s(X,A))O[z]=X,O[F]=A,z=F;else break e}}return I}function s(O,I){var A=O.sortIndex-I.sortIndex;return A!==0?A:O.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,g=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=O)r(u),I.sortIndex=I.expirationTime,e(a,I);else break;I=n(u)}}function k(O){if(w=!1,_(O),!v)if(n(a)!==null)v=!0,ne(b);else{var I=n(u);I!==null&&re(k,I.startTime-O)}}function b(O,I){v=!1,w&&(w=!1,m(N),N=-1),g=!0;var A=f;try{for(_(I),d=n(a);d!==null&&(!(d.expirationTime>I)||O&&!T());){var z=d.callback;if(typeof z=="function"){d.callback=null,f=d.priorityLevel;var U=z(d.expirationTime<=I);I=t.unstable_now(),typeof U=="function"?d.callback=U:d===n(a)&&r(a),_(I)}else r(a);d=n(a)}if(d!==null)var se=!0;else{var he=n(u);he!==null&&re(k,he.startTime-I),se=!1}return se}finally{d=null,f=A,g=!1}}var S=!1,E=null,N=-1,M=5,x=-1;function T(){return!(t.unstable_now()-x<M)}function R(){if(E!==null){var O=t.unstable_now();x=O;var I=!0;try{I=E(!0,O)}finally{I?B():(S=!1,E=null)}}else S=!1}var B;if(typeof p=="function")B=function(){p(R)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Y=V.port2;V.port1.onmessage=R,B=function(){Y.postMessage(null)}}else B=function(){C(R,0)};function ne(O){E=O,S||(S=!0,B())}function re(O,I){N=C(function(){O(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,ne(b))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var I=3;break;default:I=f}var A=f;f=I;try{return O()}finally{f=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var A=f;f=O;try{return I()}finally{f=A}},t.unstable_scheduleCallback=function(O,I,A){var z=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?z+A:z):A=z,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=A+U,O={id:h++,callback:I,priorityLevel:O,startTime:A,expirationTime:U,sortIndex:-1},A>z?(O.sortIndex=A,e(u,O),n(a)===null&&O===n(u)&&(w?(m(N),N=-1):w=!0,re(k,A-z))):(O.sortIndex=U,e(a,O),v||g||(v=!0,ne(b))),O},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(O){var I=f;return function(){var A=f;f=I;try{return O.apply(this,arguments)}finally{f=A}}}})(x0);v0.exports=x0;var Gb=v0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qb=y,jt=Gb;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,oo={};function os(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(oo[t]=e,t=0;t<e.length;t++)b0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,Xb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xp={},bp={};function Kb(t){return Lu.call(bp,t)?!0:Lu.call(xp,t)?!1:Xb.test(t)?bp[t]=!0:(xp[t]=!0,!1)}function Jb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zb(t,e,n,r){if(e===null||typeof e>"u"||Jb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ch=/[\-:]([a-z])/g;function uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ch,uh);Ze[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ch,uh);Ze[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ch,uh);Ze[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function dh(t,e,n,r){var s=Ze.hasOwnProperty(e)?Ze[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zb(e,n,s,r)&&(n=null),r||s===null?Kb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),_s=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),hh=Symbol.for("react.strict_mode"),Ou=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),k0=Symbol.for("react.context"),fh=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),ph=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),C0=Symbol.for("react.offscreen"),wp=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=wp&&t[wp]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Object.assign,Dc;function Oi(t){if(Dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dc=e&&e[1]||""}return`
`+Dc+t}var Mc=!1;function Uc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function e1(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case _s:return"Portal";case Ou:return"Profiler";case hh:return"StrictMode";case Du:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k0:return(t.displayName||"Context")+".Consumer";case w0:return(t._context.displayName||"Context")+".Provider";case fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ph:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function t1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===hh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n1(t){var e=S0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ol(t){t._valueTracker||(t._valueTracker=n1(t))}function E0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=S0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zu(t,e){var n=e.checked;return ke({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function N0(t,e){e=e.checked,e!=null&&dh(t,"checked",e,!1)}function Fu(t,e){N0(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bu(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Cp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bu(t,e,n){(e!=="number"||Ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Rs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return ke({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(Di(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function I0(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,R0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r1=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){r1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function P0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=P0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var s1=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(s1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yu=null;function mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Ps=null,js=null;function Np(t){if(t=Bo(t)){if(typeof Qu!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Ka(e),Qu(t.stateNode,t.type,e))}}function A0(t){Ps?js?js.push(t):js=[t]:Ps=t}function L0(){if(Ps){var t=Ps,e=js;if(js=Ps=null,Np(t),e)for(t=0;t<e.length;t++)Np(e[t])}}function O0(t,e){return t(e)}function D0(){}var zc=!1;function M0(t,e,n){if(zc)return t(e,n);zc=!0;try{return O0(t,e,n)}finally{zc=!1,(Ps!==null||js!==null)&&(D0(),L0())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=Ka(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var Gu=!1;if(On)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{Gu=!1}function i1(t,e,n,r,s,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Bi=!1,Gl=null,ql=!1,qu=null,o1={onError:function(t){Bi=!0,Gl=t}};function l1(t,e,n,r,s,i,o,l,a){Bi=!1,Gl=null,i1.apply(o1,arguments)}function a1(t,e,n,r,s,i,o,l,a){if(l1.apply(this,arguments),Bi){if(Bi){var u=Gl;Bi=!1,Gl=null}else throw Error(j(198));ql||(ql=!0,qu=u)}}function ls(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ip(t){if(ls(t)!==t)throw Error(j(188))}function c1(t){var e=t.alternate;if(!e){if(e=ls(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Ip(s),t;if(i===r)return Ip(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function z0(t){return t=c1(t),t!==null?F0(t):null}function F0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F0(t);if(e!==null)return e;t=t.sibling}return null}var B0=jt.unstable_scheduleCallback,Tp=jt.unstable_cancelCallback,u1=jt.unstable_shouldYield,d1=jt.unstable_requestPaint,Pe=jt.unstable_now,h1=jt.unstable_getCurrentPriorityLevel,_h=jt.unstable_ImmediatePriority,$0=jt.unstable_UserBlockingPriority,Xl=jt.unstable_NormalPriority,f1=jt.unstable_LowPriority,W0=jt.unstable_IdlePriority,Qa=null,fn=null;function p1(t){if(fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Qa,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:g1,m1=Math.log,_1=Math.LN2;function g1(t){return t>>>=0,t===0?32:31-(m1(t)/_1|0)|0}var al=64,cl=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Mi(l):(i&=o,i!==0&&(r=Mi(i)))}else o=n&~s,o!==0?r=Mi(o):i!==0&&(r=Mi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),s=1<<n,r|=t[n],e&=~s;return r}function y1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Jt(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=y1(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function H0(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function x1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Jt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function gh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function V0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,yh,Q0,G0,q0,Ku=!1,ul=[],dr=null,hr=null,fr=null,co=new Map,uo=new Map,tr=[],b1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(e.pointerId)}}function Ci(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Bo(e),e!==null&&yh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function w1(t,e,n,r,s){switch(e){case"focusin":return dr=Ci(dr,t,e,n,r,s),!0;case"dragenter":return hr=Ci(hr,t,e,n,r,s),!0;case"mouseover":return fr=Ci(fr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return co.set(i,Ci(co.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,uo.set(i,Ci(uo.get(i)||null,t,e,n,r,s)),!0}return!1}function X0(t){var e=zr(t.target);if(e!==null){var n=ls(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,q0(t.priority,function(){Q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yu=r,n.target.dispatchEvent(r),Yu=null}else return e=Bo(n),e!==null&&yh(e),t.blockedOn=n,!1;e.shift()}return!0}function Pp(t,e,n){Pl(t)&&n.delete(e)}function k1(){Ku=!1,dr!==null&&Pl(dr)&&(dr=null),hr!==null&&Pl(hr)&&(hr=null),fr!==null&&Pl(fr)&&(fr=null),co.forEach(Pp),uo.forEach(Pp)}function Si(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,k1)))}function ho(t){function e(s){return Si(s,t)}if(0<ul.length){Si(ul[0],t);for(var n=1;n<ul.length;n++){var r=ul[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Si(dr,t),hr!==null&&Si(hr,t),fr!==null&&Si(fr,t),co.forEach(e),uo.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)X0(n),n.blockedOn===null&&tr.shift()}var As=$n.ReactCurrentBatchConfig,Jl=!0;function C1(t,e,n,r){var s=ae,i=As.transition;As.transition=null;try{ae=1,vh(t,e,n,r)}finally{ae=s,As.transition=i}}function S1(t,e,n,r){var s=ae,i=As.transition;As.transition=null;try{ae=4,vh(t,e,n,r)}finally{ae=s,As.transition=i}}function vh(t,e,n,r){if(Jl){var s=Ju(t,e,n,r);if(s===null)Xc(t,e,r,Zl,n),Rp(t,r);else if(w1(s,t,e,n,r))r.stopPropagation();else if(Rp(t,r),e&4&&-1<b1.indexOf(t)){for(;s!==null;){var i=Bo(s);if(i!==null&&Y0(i),i=Ju(t,e,n,r),i===null&&Xc(t,e,r,Zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Xc(t,e,r,null,n)}}var Zl=null;function Ju(t,e,n,r){if(Zl=null,t=mh(r),t=zr(t),t!==null)if(e=ls(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function K0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case _h:return 1;case $0:return 4;case Xl:case f1:return 16;case W0:return 536870912;default:return 16}default:return 16}}var ar=null,xh=null,jl=null;function J0(){if(jl)return jl;var t,e=xh,n=e.length,r,s="value"in ar?ar.value:ar.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return jl=s.slice(t,1<r?1-r:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function jp(){return!1}function Lt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dl:jp,this.isPropagationStopped=jp,this}return ke(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=Lt(ii),Fo=ke({},ii,{view:0,detail:0}),E1=Lt(Fo),Bc,$c,Ei,Ga=ke({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Bc=t.screenX-Ei.screenX,$c=t.screenY-Ei.screenY):$c=Bc=0,Ei=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Ap=Lt(Ga),N1=ke({},Ga,{dataTransfer:0}),I1=Lt(N1),T1=ke({},Fo,{relatedTarget:0}),Wc=Lt(T1),R1=ke({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),P1=Lt(R1),j1=ke({},ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A1=Lt(j1),L1=ke({},ii,{data:0}),Lp=Lt(L1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M1[t])?!!e[t]:!1}function wh(){return U1}var z1=ke({},Fo,{key:function(t){if(t.key){var e=O1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wh,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F1=Lt(z1),B1=ke({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=Lt(B1),$1=ke({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wh}),W1=Lt($1),H1=ke({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),V1=Lt(H1),Y1=ke({},Ga,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q1=Lt(Y1),G1=[9,13,27,32],kh=On&&"CompositionEvent"in window,$i=null;On&&"documentMode"in document&&($i=document.documentMode);var q1=On&&"TextEvent"in window&&!$i,Z0=On&&(!kh||$i&&8<$i&&11>=$i),Dp=" ",Mp=!1;function eg(t,e){switch(t){case"keyup":return G1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function X1(t,e){switch(t){case"compositionend":return tg(e);case"keypress":return e.which!==32?null:(Mp=!0,Dp);case"textInput":return t=e.data,t===Dp&&Mp?null:t;default:return null}}function K1(t,e){if(ys)return t==="compositionend"||!kh&&eg(t,e)?(t=J0(),jl=xh=ar=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Z0&&e.locale!=="ko"?null:e.data;default:return null}}var J1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!J1[t.type]:e==="textarea"}function ng(t,e,n,r){A0(r),e=ea(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wi=null,fo=null;function Z1(t){fg(t,0)}function qa(t){var e=bs(t);if(E0(e))return t}function ew(t,e){if(t==="change")return e}var rg=!1;if(On){var Hc;if(On){var Vc="oninput"in document;if(!Vc){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Vc=typeof zp.oninput=="function"}Hc=Vc}else Hc=!1;rg=Hc&&(!document.documentMode||9<document.documentMode)}function Fp(){Wi&&(Wi.detachEvent("onpropertychange",sg),fo=Wi=null)}function sg(t){if(t.propertyName==="value"&&qa(fo)){var e=[];ng(e,fo,t,mh(t)),M0(Z1,e)}}function tw(t,e,n){t==="focusin"?(Fp(),Wi=e,fo=n,Wi.attachEvent("onpropertychange",sg)):t==="focusout"&&Fp()}function nw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qa(fo)}function rw(t,e){if(t==="click")return qa(e)}function sw(t,e){if(t==="input"||t==="change")return qa(e)}function iw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:iw;function po(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Lu.call(e,s)||!nn(t[s],e[s]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $p(t,e){var n=Bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function ig(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ig(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function og(){for(var t=window,e=Ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ql(t.document)}return e}function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ow(t){var e=og(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ig(n.ownerDocument.documentElement,n)){if(r!==null&&Ch(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=$p(n,i);var o=$p(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lw=On&&"documentMode"in document&&11>=document.documentMode,vs=null,Zu=null,Hi=null,ed=!1;function Wp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||vs==null||vs!==Ql(r)||(r=vs,"selectionStart"in r&&Ch(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&po(Hi,r)||(Hi=r,r=ea(Zu,"onSelect"),0<r.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vs)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Yc={},lg={};On&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Xa(t){if(Yc[t])return Yc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lg)return Yc[t]=e[n];return t}var ag=Xa("animationend"),cg=Xa("animationiteration"),ug=Xa("animationstart"),dg=Xa("transitionend"),hg=new Map,Hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){hg.set(t,e),os(e,[t])}for(var Qc=0;Qc<Hp.length;Qc++){var Gc=Hp[Qc],aw=Gc.toLowerCase(),cw=Gc[0].toUpperCase()+Gc.slice(1);Tr(aw,"on"+cw)}Tr(ag,"onAnimationEnd");Tr(cg,"onAnimationIteration");Tr(ug,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(dg,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Vp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,a1(r,e,void 0,t),t.currentTarget=null}function fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;Vp(s,l,u),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;Vp(s,l,u),i=a}}}if(ql)throw t=qu,ql=!1,qu=null,t}function ye(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var r=t+"__bubble";n.has(r)||(pg(e,t,2,!1),n.add(r))}function qc(t,e,n){var r=0;e&&(r|=4),pg(n,t,r,e)}var fl="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[fl]){t[fl]=!0,b0.forEach(function(n){n!=="selectionchange"&&(uw.has(n)||qc(n,!1,t),qc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fl]||(e[fl]=!0,qc("selectionchange",!1,e))}}function pg(t,e,n,r){switch(K0(e)){case 1:var s=C1;break;case 4:s=S1;break;default:s=vh}n=s.bind(null,e,n,t),s=void 0,!Gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Xc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=zr(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}M0(function(){var u=i,h=mh(n),d=[];e:{var f=hg.get(t);if(f!==void 0){var g=bh,v=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":g=F1;break;case"focusin":v="focus",g=Wc;break;case"focusout":v="blur",g=Wc;break;case"beforeblur":case"afterblur":g=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=W1;break;case ag:case cg:case ug:g=P1;break;case dg:g=V1;break;case"scroll":g=E1;break;case"wheel":g=Q1;break;case"copy":case"cut":case"paste":g=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Op}var w=(e&4)!==0,C=!w&&t==="scroll",m=w?f!==null?f+"Capture":null:f;w=[];for(var p=u,_;p!==null;){_=p;var k=_.stateNode;if(_.tag===5&&k!==null&&(_=k,m!==null&&(k=ao(p,m),k!=null&&w.push(_o(p,k,_)))),C)break;p=p.return}0<w.length&&(f=new g(f,v,null,n,h),d.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Yu&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[Dn]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?zr(v):null,v!==null&&(C=ls(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Ap,k="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=Op,k="onPointerLeave",m="onPointerEnter",p="pointer"),C=g==null?f:bs(g),_=v==null?f:bs(v),f=new w(k,p+"leave",g,n,h),f.target=C,f.relatedTarget=_,k=null,zr(h)===u&&(w=new w(m,p+"enter",v,n,h),w.target=_,w.relatedTarget=C,k=w),C=k,g&&v)t:{for(w=g,m=v,p=0,_=w;_;_=hs(_))p++;for(_=0,k=m;k;k=hs(k))_++;for(;0<p-_;)w=hs(w),p--;for(;0<_-p;)m=hs(m),_--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=hs(w),m=hs(m)}w=null}else w=null;g!==null&&Yp(d,f,g,w,!1),v!==null&&C!==null&&Yp(d,C,v,w,!0)}}e:{if(f=u?bs(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var b=ew;else if(Up(f))if(rg)b=sw;else{b=nw;var S=tw}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=rw);if(b&&(b=b(t,u))){ng(d,b,n,h);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Bu(f,"number",f.value)}switch(S=u?bs(u):window,t){case"focusin":(Up(S)||S.contentEditable==="true")&&(vs=S,Zu=u,Hi=null);break;case"focusout":Hi=Zu=vs=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,Wp(d,n,h);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":Wp(d,n,h)}var E;if(kh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ys?eg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Z0&&n.locale!=="ko"&&(ys||N!=="onCompositionStart"?N==="onCompositionEnd"&&ys&&(E=J0()):(ar=h,xh="value"in ar?ar.value:ar.textContent,ys=!0)),S=ea(u,N),0<S.length&&(N=new Lp(N,t,null,n,h),d.push({event:N,listeners:S}),E?N.data=E:(E=tg(n),E!==null&&(N.data=E)))),(E=q1?X1(t,n):K1(t,n))&&(u=ea(u,"onBeforeInput"),0<u.length&&(h=new Lp("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=E))}fg(d,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ea(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ao(t,n),i!=null&&r.unshift(_o(t,i,s)),i=ao(t,e),i!=null&&r.push(_o(t,i,s))),t=t.return}return r}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yp(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,s?(a=ao(n,i),a!=null&&o.unshift(_o(n,a,l))):s||(a=ao(n,i),a!=null&&o.push(_o(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dw=/\r\n?/g,hw=/\u0000|\uFFFD/g;function Qp(t){return(typeof t=="string"?t:""+t).replace(dw,`
`).replace(hw,"")}function pl(t,e,n){if(e=Qp(e),Qp(t)!==e&&n)throw Error(j(425))}function ta(){}var td=null,nd=null;function rd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sd=typeof setTimeout=="function"?setTimeout:void 0,fw=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,pw=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(t){return Gp.resolve(null).then(t).catch(mw)}:sd;function mw(t){setTimeout(function(){throw t})}function Kc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ho(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oi=Math.random().toString(36).slice(2),dn="__reactFiber$"+oi,go="__reactProps$"+oi,Dn="__reactContainer$"+oi,id="__reactEvents$"+oi,_w="__reactListeners$"+oi,gw="__reactHandles$"+oi;function zr(t){var e=t[dn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[dn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qp(t);t!==null;){if(n=t[dn])return n;t=qp(t)}return e}t=n,n=t.parentNode}return null}function Bo(t){return t=t[dn]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ka(t){return t[go]||null}var od=[],ws=-1;function Rr(t){return{current:t}}function ve(t){0>ws||(t.current=od[ws],od[ws]=null,ws--)}function ge(t,e){ws++,od[ws]=t.current,t.current=e}var Cr={},ot=Rr(Cr),xt=Rr(!1),Gr=Cr;function Hs(t,e){var n=t.type.contextTypes;if(!n)return Cr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function bt(t){return t=t.childContextTypes,t!=null}function na(){ve(xt),ve(ot)}function Xp(t,e,n){if(ot.current!==Cr)throw Error(j(168));ge(ot,e),ge(xt,n)}function mg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,t1(t)||"Unknown",s));return ke({},n,r)}function ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,Gr=ot.current,ge(ot,t),ge(xt,xt.current),!0}function Kp(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=mg(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,ve(xt),ve(ot),ge(ot,t)):ve(xt),ge(xt,n)}var Cn=null,Ja=!1,Jc=!1;function _g(t){Cn===null?Cn=[t]:Cn.push(t)}function yw(t){Ja=!0,_g(t)}function Pr(){if(!Jc&&Cn!==null){Jc=!0;var t=0,e=ae;try{var n=Cn;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,Ja=!1}catch(s){throw Cn!==null&&(Cn=Cn.slice(t+1)),B0(_h,Pr),s}finally{ae=e,Jc=!1}}return null}var ks=[],Cs=0,sa=null,ia=0,Mt=[],Ut=0,qr=null,En=1,Nn="";function Or(t,e){ks[Cs++]=ia,ks[Cs++]=sa,sa=t,ia=e}function gg(t,e,n){Mt[Ut++]=En,Mt[Ut++]=Nn,Mt[Ut++]=qr,qr=t;var r=En;t=Nn;var s=32-Jt(r)-1;r&=~(1<<s),n+=1;var i=32-Jt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,En=1<<32-Jt(e)+s|n<<s|r,Nn=i+t}else En=1<<i|n<<s|r,Nn=t}function Sh(t){t.return!==null&&(Or(t,1),gg(t,1,0))}function Eh(t){for(;t===sa;)sa=ks[--Cs],ks[Cs]=null,ia=ks[--Cs],ks[Cs]=null;for(;t===qr;)qr=Mt[--Ut],Mt[Ut]=null,Nn=Mt[--Ut],Mt[Ut]=null,En=Mt[--Ut],Mt[Ut]=null}var Pt=null,Tt=null,xe=!1,qt=null;function yg(t,e){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Tt=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:En,overflow:Nn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Tt=null,!0):!1;default:return!1}}function ld(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(xe){var e=Tt;if(e){var n=e;if(!Jp(t,e)){if(ld(t))throw Error(j(418));e=pr(n.nextSibling);var r=Pt;e&&Jp(t,e)?yg(r,n):(t.flags=t.flags&-4097|2,xe=!1,Pt=t)}}else{if(ld(t))throw Error(j(418));t.flags=t.flags&-4097|2,xe=!1,Pt=t}}}function Zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function ml(t){if(t!==Pt)return!1;if(!xe)return Zp(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!rd(t.type,t.memoizedProps)),e&&(e=Tt)){if(ld(t))throw vg(),Error(j(418));for(;e;)yg(t,e),e=pr(e.nextSibling)}if(Zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=Pt?pr(t.stateNode.nextSibling):null;return!0}function vg(){for(var t=Tt;t;)t=pr(t.nextSibling)}function Vs(){Tt=Pt=null,xe=!1}function Nh(t){qt===null?qt=[t]:qt.push(t)}var vw=$n.ReactCurrentBatchConfig;function Ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function em(t){var e=t._init;return e(t._payload)}function xg(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function s(m,p){return m=yr(m,p),m.index=0,m.sibling=null,m}function i(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,_,k){return p===null||p.tag!==6?(p=iu(_,m.mode,k),p.return=m,p):(p=s(p,_),p.return=m,p)}function a(m,p,_,k){var b=_.type;return b===gs?h(m,p,_.props.children,k,_.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&em(b)===p.type)?(k=s(p,_.props),k.ref=Ni(m,p,_),k.return=m,k):(k=Fl(_.type,_.key,_.props,null,m.mode,k),k.ref=Ni(m,p,_),k.return=m,k)}function u(m,p,_,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=ou(_,m.mode,k),p.return=m,p):(p=s(p,_.children||[]),p.return=m,p)}function h(m,p,_,k,b){return p===null||p.tag!==7?(p=Vr(_,m.mode,k,b),p.return=m,p):(p=s(p,_),p.return=m,p)}function d(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=iu(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case il:return _=Fl(p.type,p.key,p.props,null,m.mode,_),_.ref=Ni(m,null,p),_.return=m,_;case _s:return p=ou(p,m.mode,_),p.return=m,p;case Kn:var k=p._init;return d(m,k(p._payload),_)}if(Di(p)||wi(p))return p=Vr(p,m.mode,_,null),p.return=m,p;_l(m,p)}return null}function f(m,p,_,k){var b=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:l(m,p,""+_,k);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case il:return _.key===b?a(m,p,_,k):null;case _s:return _.key===b?u(m,p,_,k):null;case Kn:return b=_._init,f(m,p,b(_._payload),k)}if(Di(_)||wi(_))return b!==null?null:h(m,p,_,k,null);_l(m,_)}return null}function g(m,p,_,k,b){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(_)||null,l(p,m,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case il:return m=m.get(k.key===null?_:k.key)||null,a(p,m,k,b);case _s:return m=m.get(k.key===null?_:k.key)||null,u(p,m,k,b);case Kn:var S=k._init;return g(m,p,_,S(k._payload),b)}if(Di(k)||wi(k))return m=m.get(_)||null,h(p,m,k,b,null);_l(p,k)}return null}function v(m,p,_,k){for(var b=null,S=null,E=p,N=p=0,M=null;E!==null&&N<_.length;N++){E.index>N?(M=E,E=null):M=E.sibling;var x=f(m,E,_[N],k);if(x===null){E===null&&(E=M);break}t&&E&&x.alternate===null&&e(m,E),p=i(x,p,N),S===null?b=x:S.sibling=x,S=x,E=M}if(N===_.length)return n(m,E),xe&&Or(m,N),b;if(E===null){for(;N<_.length;N++)E=d(m,_[N],k),E!==null&&(p=i(E,p,N),S===null?b=E:S.sibling=E,S=E);return xe&&Or(m,N),b}for(E=r(m,E);N<_.length;N++)M=g(E,m,N,_[N],k),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?N:M.key),p=i(M,p,N),S===null?b=M:S.sibling=M,S=M);return t&&E.forEach(function(T){return e(m,T)}),xe&&Or(m,N),b}function w(m,p,_,k){var b=wi(_);if(typeof b!="function")throw Error(j(150));if(_=b.call(_),_==null)throw Error(j(151));for(var S=b=null,E=p,N=p=0,M=null,x=_.next();E!==null&&!x.done;N++,x=_.next()){E.index>N?(M=E,E=null):M=E.sibling;var T=f(m,E,x.value,k);if(T===null){E===null&&(E=M);break}t&&E&&T.alternate===null&&e(m,E),p=i(T,p,N),S===null?b=T:S.sibling=T,S=T,E=M}if(x.done)return n(m,E),xe&&Or(m,N),b;if(E===null){for(;!x.done;N++,x=_.next())x=d(m,x.value,k),x!==null&&(p=i(x,p,N),S===null?b=x:S.sibling=x,S=x);return xe&&Or(m,N),b}for(E=r(m,E);!x.done;N++,x=_.next())x=g(E,m,N,x.value,k),x!==null&&(t&&x.alternate!==null&&E.delete(x.key===null?N:x.key),p=i(x,p,N),S===null?b=x:S.sibling=x,S=x);return t&&E.forEach(function(R){return e(m,R)}),xe&&Or(m,N),b}function C(m,p,_,k){if(typeof _=="object"&&_!==null&&_.type===gs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case il:e:{for(var b=_.key,S=p;S!==null;){if(S.key===b){if(b=_.type,b===gs){if(S.tag===7){n(m,S.sibling),p=s(S,_.props.children),p.return=m,m=p;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Kn&&em(b)===S.type){n(m,S.sibling),p=s(S,_.props),p.ref=Ni(m,S,_),p.return=m,m=p;break e}n(m,S);break}else e(m,S);S=S.sibling}_.type===gs?(p=Vr(_.props.children,m.mode,k,_.key),p.return=m,m=p):(k=Fl(_.type,_.key,_.props,null,m.mode,k),k.ref=Ni(m,p,_),k.return=m,m=k)}return o(m);case _s:e:{for(S=_.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=s(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=ou(_,m.mode,k),p.return=m,m=p}return o(m);case Kn:return S=_._init,C(m,p,S(_._payload),k)}if(Di(_))return v(m,p,_,k);if(wi(_))return w(m,p,_,k);_l(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=s(p,_),p.return=m,m=p):(n(m,p),p=iu(_,m.mode,k),p.return=m,m=p),o(m)):n(m,p)}return C}var Ys=xg(!0),bg=xg(!1),oa=Rr(null),la=null,Ss=null,Ih=null;function Th(){Ih=Ss=la=null}function Rh(t){var e=oa.current;ve(oa),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){la=t,Ih=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function $t(t){var e=t._currentValue;if(Ih!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(la===null)throw Error(j(308));Ss=t,la.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Fr=null;function Ph(t){Fr===null?Fr=[t]:Fr.push(t)}function wg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ph(e)):(n.next=s.next,s.next=n),e.interleaved=n,Mn(t,r)}function Mn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function jh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Mn(t,n)}return s=r.interleaved,s===null?(e.next=e,Ph(r)):(e.next=s.next,s.next=e),r.interleaved=e,Mn(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}function tm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function aa(t,e,n,r){var s=t.updateQueue;Jn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(i!==null){var d=s.baseState;o=0,h=u=a=null,l=i;do{var f=l.lane,g=l.eventTime;if((r&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=ke({},d,f);break e;case 2:Jn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,a=d):h=h.next=g,o|=f;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;f=l,l=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(h===null&&(a=d),s.baseState=a,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=d}}function nm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var $o={},pn=Rr($o),yo=Rr($o),vo=Rr($o);function Br(t){if(t===$o)throw Error(j(174));return t}function Ah(t,e){switch(ge(vo,e),ge(yo,t),ge(pn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wu(e,t)}ve(pn),ge(pn,e)}function Qs(){ve(pn),ve(yo),ve(vo)}function Cg(t){Br(vo.current);var e=Br(pn.current),n=Wu(e,t.type);e!==n&&(ge(yo,t),ge(pn,n))}function Lh(t){yo.current===t&&(ve(pn),ve(yo))}var be=Rr(0);function ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function Oh(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var Ol=$n.ReactCurrentDispatcher,eu=$n.ReactCurrentBatchConfig,Xr=0,we=null,Oe=null,Fe=null,ua=!1,Vi=!1,xo=0,xw=0;function rt(){throw Error(j(321))}function Dh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Mh(t,e,n,r,s,i){if(Xr=i,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?Cw:Sw,t=n(r,s),Vi){i=0;do{if(Vi=!1,xo=0,25<=i)throw Error(j(301));i+=1,Fe=Oe=null,e.updateQueue=null,Ol.current=Ew,t=n(r,s)}while(Vi)}if(Ol.current=da,e=Oe!==null&&Oe.next!==null,Xr=0,Fe=Oe=we=null,ua=!1,e)throw Error(j(300));return t}function Uh(){var t=xo!==0;return xo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?we.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Wt(){if(Oe===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?we.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(j(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?we.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function bo(t,e){return typeof e=="function"?e(t):e}function tu(t){var e=Wt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Oe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,u=i;do{var h=u.lane;if((Xr&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,we.lanes|=h,Kr|=h}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,nn(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,we.lanes|=i,Kr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function nu(t){var e=Wt(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);nn(i,e.memoizedState)||(gt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Sg(){}function Eg(t,e){var n=we,r=Wt(),s=e(),i=!nn(r.memoizedState,s);if(i&&(r.memoizedState=s,gt=!0),r=r.queue,zh(Tg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,wo(9,Ig.bind(null,n,r,s,e),void 0,null),Ve===null)throw Error(j(349));Xr&30||Ng(n,e,s)}return s}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ig(t,e,n,r){e.value=n,e.getSnapshot=r,Rg(e)&&Pg(t)}function Tg(t,e,n){return n(function(){Rg(e)&&Pg(t)})}function Rg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Pg(t){var e=Mn(t,1);e!==null&&Zt(e,t,1,-1)}function rm(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:t},e.queue=t,t=t.dispatch=kw.bind(null,we,t),[e.memoizedState,t]}function wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jg(){return Wt().memoizedState}function Dl(t,e,n,r){var s=un();we.flags|=t,s.memoizedState=wo(1|e,n,void 0,r===void 0?null:r)}function Za(t,e,n,r){var s=Wt();r=r===void 0?null:r;var i=void 0;if(Oe!==null){var o=Oe.memoizedState;if(i=o.destroy,r!==null&&Dh(r,o.deps)){s.memoizedState=wo(e,n,i,r);return}}we.flags|=t,s.memoizedState=wo(1|e,n,i,r)}function sm(t,e){return Dl(8390656,8,t,e)}function zh(t,e){return Za(2048,8,t,e)}function Ag(t,e){return Za(4,2,t,e)}function Lg(t,e){return Za(4,4,t,e)}function Og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dg(t,e,n){return n=n!=null?n.concat([t]):null,Za(4,4,Og.bind(null,e,t),n)}function Fh(){}function Mg(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ug(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Dh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zg(t,e,n){return Xr&21?(nn(n,e)||(n=H0(),we.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function bw(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=eu.transition;eu.transition={};try{t(!1),e()}finally{ae=n,eu.transition=r}}function Fg(){return Wt().memoizedState}function ww(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bg(t))$g(e,n);else if(n=wg(t,e,n,r),n!==null){var s=ut();Zt(n,t,r,s),Wg(n,e,r)}}function kw(t,e,n){var r=gr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bg(t))$g(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,nn(l,o)){var a=e.interleaved;a===null?(s.next=s,Ph(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=wg(t,e,s,r),n!==null&&(s=ut(),Zt(n,t,r,s),Wg(n,e,r))}}function Bg(t){var e=t.alternate;return t===we||e!==null&&e===we}function $g(t,e){Vi=ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gh(t,n)}}var da={readContext:$t,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},Cw={readContext:$t,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:$t,useEffect:sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4194308,4,Og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Dl(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ww.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:Fh,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=bw.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,s=un();if(xe){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),Ve===null)throw Error(j(349));Xr&30||Ng(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,sm(Tg.bind(null,r,i,t),[t]),r.flags|=2048,wo(9,Ig.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=un(),e=Ve.identifierPrefix;if(xe){var n=Nn,r=En;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sw={readContext:$t,useCallback:Mg,useContext:$t,useEffect:zh,useImperativeHandle:Dg,useInsertionEffect:Ag,useLayoutEffect:Lg,useMemo:Ug,useReducer:tu,useRef:jg,useState:function(){return tu(bo)},useDebugValue:Fh,useDeferredValue:function(t){var e=Wt();return zg(e,Oe.memoizedState,t)},useTransition:function(){var t=tu(bo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Fg,unstable_isNewReconciler:!1},Ew={readContext:$t,useCallback:Mg,useContext:$t,useEffect:zh,useImperativeHandle:Dg,useInsertionEffect:Ag,useLayoutEffect:Lg,useMemo:Ug,useReducer:nu,useRef:jg,useState:function(){return nu(bo)},useDebugValue:Fh,useDeferredValue:function(t){var e=Wt();return Oe===null?e.memoizedState=t:zg(e,Oe.memoizedState,t)},useTransition:function(){var t=nu(bo)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:Sg,useSyncExternalStore:Eg,useId:Fg,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=ke({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ke({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ec={isMounted:function(t){return(t=t._reactInternals)?ls(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),s=gr(t),i=An(r,s);i.payload=e,n!=null&&(i.callback=n),e=mr(t,i,s),e!==null&&(Zt(e,t,s,r),Ll(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),s=gr(t),i=An(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=mr(t,i,s),e!==null&&(Zt(e,t,s,r),Ll(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=gr(t),s=An(n,r);s.tag=2,e!=null&&(s.callback=e),e=mr(t,s,r),e!==null&&(Zt(e,t,r,n),Ll(e,t,r))}};function im(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(s,i):!0}function Hg(t,e,n){var r=!1,s=Cr,i=e.contextType;return typeof i=="object"&&i!==null?i=$t(i):(s=bt(e)?Gr:ot.current,r=e.contextTypes,i=(r=r!=null)?Hs(t,s):Cr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function om(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ec.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},jh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=$t(i):(i=bt(e)?Gr:ot.current,s.context=Hs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(ud(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&ec.enqueueReplaceState(s,s.state,null),aa(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",r=e;do n+=e1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nw=typeof WeakMap=="function"?WeakMap:Map;function Vg(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fa||(fa=!0,wd=r),hd(t,e)},n}function Yg(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){hd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){hd(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function lm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Nw;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Bw.bind(null,t,e,n),e.then(t,t))}function am(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var Iw=$n.ReactCurrentOwner,gt=!1;function at(t,e,n,r){e.child=t===null?bg(e,null,n,r):Ys(e,t.child,n,r)}function um(t,e,n,r,s){n=n.render;var i=e.ref;return Ls(e,s),r=Mh(t,e,n,r,i,s),n=Uh(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(xe&&n&&Sh(e),e.flags|=1,at(t,e,r,s),e.child)}function dm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Gh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Qg(t,e,i,r,s)):(t=Fl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return Un(t,e,s)}return e.flags|=1,t=yr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Qg(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(po(i,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Un(t,e,s)}return fd(t,e,n,r,s)}function Gg(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ns,It),It|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ns,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Ns,It),It|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Ns,It),It|=r;return at(t,e,s,n),e.child}function qg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,n,r,s){var i=bt(n)?Gr:ot.current;return i=Hs(e,i),Ls(e,s),n=Mh(t,e,n,r,i,s),r=Uh(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Un(t,e,s)):(xe&&r&&Sh(e),e.flags|=1,at(t,e,n,s),e.child)}function hm(t,e,n,r,s){if(bt(n)){var i=!0;ra(e)}else i=!1;if(Ls(e,s),e.stateNode===null)Ml(t,e),Hg(e,n,r),dd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=$t(u):(u=bt(n)?Gr:ot.current,u=Hs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&om(e,o,r,u),Jn=!1;var f=e.memoizedState;o.state=f,aa(e,r,o,s),a=e.memoizedState,l!==r||f!==a||xt.current||Jn?(typeof h=="function"&&(ud(e,n,h,r),a=e.memoizedState),(l=Jn||im(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,kg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Qt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=$t(a):(a=bt(n)?Gr:ot.current,a=Hs(e,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&om(e,o,r,a),Jn=!1,f=e.memoizedState,o.state=f,aa(e,r,o,s);var v=e.memoizedState;l!==d||f!==v||xt.current||Jn?(typeof g=="function"&&(ud(e,n,g,r),v=e.memoizedState),(u=Jn||im(e,n,u,r,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return pd(t,e,n,r,i,s)}function pd(t,e,n,r,s,i){qg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Kp(e,n,!1),Un(t,e,i);r=e.stateNode,Iw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ys(e,t.child,null,i),e.child=Ys(e,null,l,i)):at(t,e,l,i),e.memoizedState=r.state,s&&Kp(e,n,!0),e.child}function Xg(t){var e=t.stateNode;e.pendingContext?Xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xp(t,e.context,!1),Ah(t,e.containerInfo)}function fm(t,e,n,r,s){return Vs(),Nh(s),e.flags|=256,at(t,e,n,r),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function Kg(t,e,n){var r=e.pendingProps,s=be.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(be,s&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=rc(o,r,0,null),t=Vr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=_d(n),e.memoizedState=md,t):Bh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Tw(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=yr(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=yr(l,i):(i=Vr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=md,r}return i=t.child,t=i.sibling,r=yr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bh(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,r){return r!==null&&Nh(r),Ys(e,t.child,null,n),t=Bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Tw(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ru(Error(j(422))),gl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=rc({mode:"visible",children:r.children},s,0,null),i=Vr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Ys(e,t.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=md,i);if(!(e.mode&1))return gl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=ru(i,r,void 0),gl(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=Ve,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Mn(t,s),Zt(r,t,s,-1))}return Qh(),r=ru(Error(j(421))),gl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$w.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Tt=pr(s.nextSibling),Pt=e,xe=!0,qt=null,t!==null&&(Mt[Ut++]=En,Mt[Ut++]=Nn,Mt[Ut++]=qr,En=t.id,Nn=t.overflow,qr=e),e=Bh(e,r.children),e.flags|=4096,e)}function pm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cd(t.return,e,n)}function su(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Jg(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(at(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,n,e);else if(t.tag===19)pm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(be,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ca(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),su(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ca(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}su(e,!0,n,null,i);break;case"together":su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Rw(t,e,n){switch(e.tag){case 3:Xg(e),Vs();break;case 5:Cg(e);break;case 1:bt(e.type)&&ra(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(oa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?Kg(t,e,n):(ge(be,be.current&1),t=Un(t,e,n),t!==null?t.sibling:null);ge(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jg(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,Gg(t,e,n)}return Un(t,e,n)}var Zg,gd,ey,ty;Zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};ey=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Br(pn.current);var i=null;switch(n){case"input":s=zu(t,s),r=zu(t,r),i=[];break;case"select":s=ke({},s,{value:void 0}),r=ke({},r,{value:void 0}),i=[];break;case"textarea":s=$u(t,s),r=$u(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ta)}Hu(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ye("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ty=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ii(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Pw(t,e,n){var r=e.pendingProps;switch(Eh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return bt(e.type)&&na(),st(e),null;case 3:return r=e.stateNode,Qs(),ve(xt),ve(ot),Oh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ml(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Sd(qt),qt=null))),gd(t,e),st(e),null;case 5:Lh(e);var s=Br(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)ey(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return st(e),null}if(t=Br(pn.current),ml(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[dn]=e,r[go]=i,t=(e.mode&1)!==0,n){case"dialog":ye("cancel",r),ye("close",r);break;case"iframe":case"object":case"embed":ye("load",r);break;case"video":case"audio":for(s=0;s<Ui.length;s++)ye(Ui[s],r);break;case"source":ye("error",r);break;case"img":case"image":case"link":ye("error",r),ye("load",r);break;case"details":ye("toggle",r);break;case"input":kp(r,i),ye("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ye("invalid",r);break;case"textarea":Sp(r,i),ye("invalid",r)}Hu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&pl(r.textContent,l,t),s=["children",""+l]):oo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ye("scroll",r)}switch(n){case"input":ol(r),Cp(r,i,!0);break;case"textarea":ol(r),Ep(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ta)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dn]=e,t[go]=r,Zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vu(n,r),n){case"dialog":ye("cancel",t),ye("close",t),s=r;break;case"iframe":case"object":case"embed":ye("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ui.length;s++)ye(Ui[s],t);s=r;break;case"source":ye("error",t),s=r;break;case"img":case"image":case"link":ye("error",t),ye("load",t),s=r;break;case"details":ye("toggle",t),s=r;break;case"input":kp(t,r),s=zu(t,r),ye("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ke({},r,{value:void 0}),ye("invalid",t);break;case"textarea":Sp(t,r),s=$u(t,r),ye("invalid",t);break;default:s=r}Hu(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?j0(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&R0(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&lo(t,a):typeof a=="number"&&lo(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oo.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ye("scroll",t):a!=null&&dh(t,i,a,o))}switch(n){case"input":ol(t),Cp(t,r,!1);break;case"textarea":ol(t),Ep(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Rs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Rs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)ty(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=Br(vo.current),Br(pn.current),ml(e)){if(r=e.stateNode,n=e.memoizedProps,r[dn]=e,(i=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dn]=e,e.stateNode=r}return st(e),null;case 13:if(ve(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Tt!==null&&e.mode&1&&!(e.flags&128))vg(),Vs(),e.flags|=98560,i=!1;else if(i=ml(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[dn]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),i=!1}else qt!==null&&(Sd(qt),qt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Me===0&&(Me=3):Qh())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Qs(),gd(t,e),t===null&&mo(e.stateNode.containerInfo),st(e),null;case 10:return Rh(e.type._context),st(e),null;case 17:return bt(e.type)&&na(),st(e),null;case 19:if(ve(be),i=e.memoizedState,i===null)return st(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ii(i,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ca(t),o!==null){for(e.flags|=128,Ii(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(be,be.current&1|2),e.child}t=t.sibling}i.tail!==null&&Pe()>qs&&(e.flags|=128,r=!0,Ii(i,!1),e.lanes=4194304)}else{if(!r)if(t=ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ii(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return st(e),null}else 2*Pe()-i.renderingStartTime>qs&&n!==1073741824&&(e.flags|=128,r=!0,Ii(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pe(),e.sibling=null,n=be.current,ge(be,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Yh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function jw(t,e){switch(Eh(e),e.tag){case 1:return bt(e.type)&&na(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),ve(xt),ve(ot),Oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lh(e),null;case 13:if(ve(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ve(be),null;case 4:return Qs(),null;case 10:return Rh(e.type._context),null;case 22:case 23:return Yh(),null;case 24:return null;default:return null}}var yl=!1,it=!1,Aw=typeof WeakSet=="function"?WeakSet:Set,$=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function yd(t,e,n){try{n()}catch(r){Se(t,e,r)}}var mm=!1;function Lw(t,e){if(td=Jl,t=og(),Ch(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==i||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===s&&(l=o),f===i&&++h===r&&(a=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Jl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Qt(e.type,w),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(k){Se(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return v=mm,mm=!1,v}function Yi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&yd(e,n,i)}s=s.next}while(s!==r)}}function tc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ny(t){var e=t.alternate;e!==null&&(t.alternate=null,ny(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dn],delete e[go],delete e[id],delete e[_w],delete e[gw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ry(t){return t.tag===5||t.tag===3||t.tag===4}function _m(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ry(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ta));else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bd(t,e,n),t=t.sibling;t!==null;)bd(t,e,n),t=t.sibling}var qe=null,Gt=!1;function qn(t,e,n){for(n=n.child;n!==null;)sy(t,e,n),n=n.sibling}function sy(t,e,n){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Qa,n)}catch{}switch(n.tag){case 5:it||Es(n,e);case 6:var r=qe,s=Gt;qe=null,qn(t,e,n),qe=r,Gt=s,qe!==null&&(Gt?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(Gt?(t=qe,n=n.stateNode,t.nodeType===8?Kc(t.parentNode,n):t.nodeType===1&&Kc(t,n),ho(t)):Kc(qe,n.stateNode));break;case 4:r=qe,s=Gt,qe=n.stateNode.containerInfo,Gt=!0,qn(t,e,n),qe=r,Gt=s;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&yd(n,e,o),s=s.next}while(s!==r)}qn(t,e,n);break;case 1:if(!it&&(Es(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,qn(t,e,n),it=r):qn(t,e,n);break;default:qn(t,e,n)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Aw),e.forEach(function(r){var s=Ww.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:qe=l.stateNode,Gt=!1;break e;case 3:qe=l.stateNode.containerInfo,Gt=!0;break e;case 4:qe=l.stateNode.containerInfo,Gt=!0;break e}l=l.return}if(qe===null)throw Error(j(160));sy(i,o,s),qe=null,Gt=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(u){Se(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iy(e,t),e=e.sibling}function iy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yt(e,t),cn(t),r&4){try{Yi(3,t,t.return),tc(3,t)}catch(w){Se(t,t.return,w)}try{Yi(5,t,t.return)}catch(w){Se(t,t.return,w)}}break;case 1:Yt(e,t),cn(t),r&512&&n!==null&&Es(n,n.return);break;case 5:if(Yt(e,t),cn(t),r&512&&n!==null&&Es(n,n.return),t.flags&32){var s=t.stateNode;try{lo(s,"")}catch(w){Se(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&N0(s,i),Vu(l,o);var u=Vu(l,i);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?j0(s,d):h==="dangerouslySetInnerHTML"?R0(s,d):h==="children"?lo(s,d):dh(s,h,d,u)}switch(l){case"input":Fu(s,i);break;case"textarea":I0(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Rs(s,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?Rs(s,!!i.multiple,i.defaultValue,!0):Rs(s,!!i.multiple,i.multiple?[]:"",!1))}s[go]=i}catch(w){Se(t,t.return,w)}}break;case 6:if(Yt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){Se(t,t.return,w)}}break;case 3:if(Yt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(w){Se(t,t.return,w)}break;case 4:Yt(e,t),cn(t);break;case 13:Yt(e,t),cn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Hh=Pe())),r&4&&gm(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(it=(u=it)||h,Yt(e,t),it=u):Yt(e,t),cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(d=$=h;$!==null;){switch(f=$,g=f.child,f.tag){case 0:case 11:case 14:case 15:Yi(4,f,f.return);break;case 1:Es(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Se(r,n,w)}}break;case 5:Es(f,f.return);break;case 22:if(f.memoizedState!==null){vm(d);continue}}g!==null?(g.return=f,$=g):vm(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=P0("display",o))}catch(w){Se(t,t.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){Se(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yt(e,t),cn(t),r&4&&gm(t);break;case 21:break;default:Yt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ry(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(lo(s,""),r.flags&=-33);var i=_m(t);bd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_m(t);xd(t,l,o);break;default:throw Error(j(161))}}catch(a){Se(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ow(t,e,n){$=t,oy(t)}function oy(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||yl;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||it;l=yl;var u=it;if(yl=o,(it=a)&&!u)for($=s;$!==null;)o=$,a=o.child,o.tag===22&&o.memoizedState!==null?xm(s):a!==null?(a.return=o,$=a):xm(s);for(;i!==null;)$=i,oy(i),i=i.sibling;$=s,yl=l,it=u}ym(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):ym(t)}}function ym(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||tc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&nm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}it||e.flags&512&&vd(e)}catch(f){Se(e,e.return,f)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function vm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function xm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tc(4,e)}catch(a){Se(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){Se(e,s,a)}}var i=e.return;try{vd(e)}catch(a){Se(e,i,a)}break;case 5:var o=e.return;try{vd(e)}catch(a){Se(e,o,a)}}}catch(a){Se(e,e.return,a)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var Dw=Math.ceil,ha=$n.ReactCurrentDispatcher,$h=$n.ReactCurrentOwner,Bt=$n.ReactCurrentBatchConfig,ie=0,Ve=null,je=null,Je=0,It=0,Ns=Rr(0),Me=0,ko=null,Kr=0,nc=0,Wh=0,Qi=null,_t=null,Hh=0,qs=1/0,kn=null,fa=!1,wd=null,_r=null,vl=!1,cr=null,pa=0,Gi=0,kd=null,Ul=-1,zl=0;function ut(){return ie&6?Pe():Ul!==-1?Ul:Ul=Pe()}function gr(t){return t.mode&1?ie&2&&Je!==0?Je&-Je:vw.transition!==null?(zl===0&&(zl=H0()),zl):(t=ae,t!==0||(t=window.event,t=t===void 0?16:K0(t.type)),t):1}function Zt(t,e,n,r){if(50<Gi)throw Gi=0,kd=null,Error(j(185));zo(t,n,r),(!(ie&2)||t!==Ve)&&(t===Ve&&(!(ie&2)&&(nc|=n),Me===4&&nr(t,Je)),wt(t,r),n===1&&ie===0&&!(e.mode&1)&&(qs=Pe()+500,Ja&&Pr()))}function wt(t,e){var n=t.callbackNode;v1(t,e);var r=Kl(t,t===Ve?Je:0);if(r===0)n!==null&&Tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Tp(n),e===1)t.tag===0?yw(bm.bind(null,t)):_g(bm.bind(null,t)),pw(function(){!(ie&6)&&Pr()}),n=null;else{switch(V0(r)){case 1:n=_h;break;case 4:n=$0;break;case 16:n=Xl;break;case 536870912:n=W0;break;default:n=Xl}n=py(n,ly.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ly(t,e){if(Ul=-1,zl=0,ie&6)throw Error(j(327));var n=t.callbackNode;if(Os()&&t.callbackNode!==n)return null;var r=Kl(t,t===Ve?Je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ma(t,r);else{e=r;var s=ie;ie|=2;var i=cy();(Ve!==t||Je!==e)&&(kn=null,qs=Pe()+500,Hr(t,e));do try{zw();break}catch(l){ay(t,l)}while(!0);Th(),ha.current=i,ie=s,je!==null?e=0:(Ve=null,Je=0,e=Me)}if(e!==0){if(e===2&&(s=Xu(t),s!==0&&(r=s,e=Cd(t,s))),e===1)throw n=ko,Hr(t,0),nr(t,r),wt(t,Pe()),n;if(e===6)nr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Mw(s)&&(e=ma(t,r),e===2&&(i=Xu(t),i!==0&&(r=i,e=Cd(t,i))),e===1))throw n=ko,Hr(t,0),nr(t,r),wt(t,Pe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:Dr(t,_t,kn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Hh+500-Pe(),10<e)){if(Kl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=sd(Dr.bind(null,t,_t,kn),e);break}Dr(t,_t,kn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Jt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dw(r/1960))-r,10<r){t.timeoutHandle=sd(Dr.bind(null,t,_t,kn),r);break}Dr(t,_t,kn);break;case 5:Dr(t,_t,kn);break;default:throw Error(j(329))}}}return wt(t,Pe()),t.callbackNode===n?ly.bind(null,t):null}function Cd(t,e){var n=Qi;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=ma(t,e),t!==2&&(e=_t,_t=n,e!==null&&Sd(e)),t}function Sd(t){_t===null?_t=t:_t.push.apply(_t,t)}function Mw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!nn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Wh,e&=~nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function bm(t){if(ie&6)throw Error(j(327));Os();var e=Kl(t,0);if(!(e&1))return wt(t,Pe()),null;var n=ma(t,e);if(t.tag!==0&&n===2){var r=Xu(t);r!==0&&(e=r,n=Cd(t,r))}if(n===1)throw n=ko,Hr(t,0),nr(t,e),wt(t,Pe()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,_t,kn),wt(t,Pe()),null}function Vh(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(qs=Pe()+500,Ja&&Pr())}}function Jr(t){cr!==null&&cr.tag===0&&!(ie&6)&&Os();var e=ie;ie|=1;var n=Bt.transition,r=ae;try{if(Bt.transition=null,ae=1,t)return t()}finally{ae=r,Bt.transition=n,ie=e,!(ie&6)&&Pr()}}function Yh(){It=Ns.current,ve(Ns)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,fw(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Eh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:Qs(),ve(xt),ve(ot),Oh();break;case 5:Lh(r);break;case 4:Qs();break;case 13:ve(be);break;case 19:ve(be);break;case 10:Rh(r.type._context);break;case 22:case 23:Yh()}n=n.return}if(Ve=t,je=t=yr(t.current,null),Je=It=e,Me=0,ko=null,Wh=nc=Kr=0,_t=Qi=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Fr=null}return t}function ay(t,e){do{var n=je;try{if(Th(),Ol.current=da,ua){for(var r=we.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ua=!1}if(Xr=0,Fe=Oe=we=null,Vi=!1,xo=0,$h.current=null,n===null||n.return===null){Me=1,ko=e,je=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Je,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=am(o);if(g!==null){g.flags&=-257,cm(g,o,l,i,e),g.mode&1&&lm(i,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){lm(i,u,e),Qh();break e}a=Error(j(426))}}else if(xe&&l.mode&1){var C=am(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),cm(C,o,l,i,e),Nh(Gs(a,l));break e}}i=a=Gs(a,l),Me!==4&&(Me=2),Qi===null?Qi=[i]:Qi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Vg(i,a,e);tm(i,m);break e;case 1:l=a;var p=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(_r===null||!_r.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=Yg(i,l,e);tm(i,k);break e}}i=i.return}while(i!==null)}dy(n)}catch(b){e=b,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function cy(){var t=ha.current;return ha.current=da,t===null?da:t}function Qh(){(Me===0||Me===3||Me===2)&&(Me=4),Ve===null||!(Kr&268435455)&&!(nc&268435455)||nr(Ve,Je)}function ma(t,e){var n=ie;ie|=2;var r=cy();(Ve!==t||Je!==e)&&(kn=null,Hr(t,e));do try{Uw();break}catch(s){ay(t,s)}while(!0);if(Th(),ie=n,ha.current=r,je!==null)throw Error(j(261));return Ve=null,Je=0,Me}function Uw(){for(;je!==null;)uy(je)}function zw(){for(;je!==null&&!u1();)uy(je)}function uy(t){var e=fy(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?dy(t):je=e,$h.current=null}function dy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jw(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,je=null;return}}else if(n=Pw(n,e,It),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Me===0&&(Me=5)}function Dr(t,e,n){var r=ae,s=Bt.transition;try{Bt.transition=null,ae=1,Fw(t,e,n,r)}finally{Bt.transition=s,ae=r}return null}function Fw(t,e,n,r){do Os();while(cr!==null);if(ie&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(x1(t,i),t===Ve&&(je=Ve=null,Je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,py(Xl,function(){return Os(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Bt.transition,Bt.transition=null;var o=ae;ae=1;var l=ie;ie|=4,$h.current=null,Lw(t,n),iy(n,t),ow(nd),Jl=!!td,nd=td=null,t.current=n,Ow(n),d1(),ie=l,ae=o,Bt.transition=i}else t.current=n;if(vl&&(vl=!1,cr=t,pa=s),i=t.pendingLanes,i===0&&(_r=null),p1(n.stateNode),wt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fa)throw fa=!1,t=wd,wd=null,t;return pa&1&&t.tag!==0&&Os(),i=t.pendingLanes,i&1?t===kd?Gi++:(Gi=0,kd=t):Gi=0,Pr(),null}function Os(){if(cr!==null){var t=V0(pa),e=Bt.transition,n=ae;try{if(Bt.transition=null,ae=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,pa=0,ie&6)throw Error(j(331));var s=ie;for(ie|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Yi(8,h,i)}var d=h.child;if(d!==null)d.return=h,$=d;else for(;$!==null;){h=$;var f=h.sibling,g=h.return;if(ny(h),h===u){$=null;break}if(f!==null){f.return=g,$=f;break}$=g}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Yi(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,$=m;break e}$=i.return}}var p=t.current;for($=p;$!==null;){o=$;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,$=_;else e:for(o=p;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:tc(9,l)}}catch(b){Se(l,l.return,b)}if(l===o){$=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,$=k;break e}$=l.return}}if(ie=s,Pr(),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Qa,t)}catch{}r=!0}return r}finally{ae=n,Bt.transition=e}}return!1}function wm(t,e,n){e=Gs(n,e),e=Vg(t,e,1),t=mr(t,e,1),e=ut(),t!==null&&(zo(t,1,e),wt(t,e))}function Se(t,e,n){if(t.tag===3)wm(t,t,n);else for(;e!==null;){if(e.tag===3){wm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=Gs(n,t),t=Yg(e,t,1),e=mr(e,t,1),t=ut(),e!==null&&(zo(e,1,t),wt(e,t));break}}e=e.return}}function Bw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Je&n)===n&&(Me===4||Me===3&&(Je&130023424)===Je&&500>Pe()-Hh?Hr(t,0):Wh|=n),wt(t,e)}function hy(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=ut();t=Mn(t,e),t!==null&&(zo(t,e,n),wt(t,n))}function $w(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hy(t,n)}function Ww(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),hy(t,n)}var fy;fy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,Rw(t,e,n);gt=!!(t.flags&131072)}else gt=!1,xe&&e.flags&1048576&&gg(e,ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ml(t,e),t=e.pendingProps;var s=Hs(e,ot.current);Ls(e,n),s=Mh(null,e,r,t,s,n);var i=Uh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(i=!0,ra(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,jh(e),s.updater=ec,e.stateNode=s,s._reactInternals=e,dd(e,r,t,n),e=pd(null,e,r,!0,i,n)):(e.tag=0,xe&&i&&Sh(e),at(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Vw(r),t=Qt(r,t),s){case 0:e=fd(null,e,r,t,n);break e;case 1:e=hm(null,e,r,t,n);break e;case 11:e=um(null,e,r,t,n);break e;case 14:e=dm(null,e,r,Qt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),fd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),hm(t,e,r,s,n);case 3:e:{if(Xg(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,kg(t,e),aa(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Gs(Error(j(423)),e),e=fm(t,e,r,n,s);break e}else if(r!==s){s=Gs(Error(j(424)),e),e=fm(t,e,r,n,s);break e}else for(Tt=pr(e.stateNode.containerInfo.firstChild),Pt=e,xe=!0,qt=null,n=bg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),r===s){e=Un(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return Cg(e),t===null&&ad(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,rd(r,s)?o=null:i!==null&&rd(r,i)&&(e.flags|=32),qg(t,e),at(t,e,o,n),e.child;case 6:return t===null&&ad(e),null;case 13:return Kg(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ys(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),um(t,e,r,s,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(oa,r._currentValue),r._currentValue=o,i!==null)if(nn(i.value,o)){if(i.children===s.children&&!xt.current){e=Un(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=An(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),cd(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}at(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ls(e,n),s=$t(s),r=r(s),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,s=Qt(r,e.pendingProps),s=Qt(r.type,s),dm(t,e,r,s,n);case 15:return Qg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),Ml(t,e),e.tag=1,bt(r)?(t=!0,ra(e)):t=!1,Ls(e,n),Hg(e,r,s),dd(e,r,s,n),pd(null,e,r,!0,t,n);case 19:return Jg(t,e,n);case 22:return Gg(t,e,n)}throw Error(j(156,e.tag))};function py(t,e){return B0(t,e)}function Hw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(t,e,n,r){return new Hw(t,e,n,r)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vw(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fh)return 11;if(t===ph)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Gh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gs:return Vr(n.children,s,i,e);case hh:o=8,s|=8;break;case Ou:return t=zt(12,n,e,s|2),t.elementType=Ou,t.lanes=i,t;case Du:return t=zt(13,n,e,s),t.elementType=Du,t.lanes=i,t;case Mu:return t=zt(19,n,e,s),t.elementType=Mu,t.lanes=i,t;case C0:return rc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w0:o=10;break e;case k0:o=9;break e;case fh:o=11;break e;case ph:o=14;break e;case Kn:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=zt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Vr(t,e,n,r){return t=zt(7,t,r,e),t.lanes=n,t}function rc(t,e,n,r){return t=zt(22,t,r,e),t.elementType=C0,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=zt(6,t,null,e),t.lanes=n,t}function ou(t,e,n){return e=zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yw(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fc(0),this.expirationTimes=Fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function qh(t,e,n,r,s,i,o,l,a){return t=new Yw(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=zt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(i),t}function Qw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_s,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function my(t){if(!t)return Cr;t=t._reactInternals;e:{if(ls(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(bt(n))return mg(t,n,e)}return e}function _y(t,e,n,r,s,i,o,l,a){return t=qh(n,r,!0,t,s,i,o,l,a),t.context=my(null),n=t.current,r=ut(),s=gr(n),i=An(r,s),i.callback=e??null,mr(n,i,s),t.current.lanes=s,zo(t,s,r),wt(t,r),t}function sc(t,e,n,r){var s=e.current,i=ut(),o=gr(s);return n=my(n),e.context===null?e.context=n:e.pendingContext=n,e=An(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(s,e,o),t!==null&&(Zt(t,s,o,i),Ll(t,s,o)),o}function _a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function km(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xh(t,e){km(t,e),(t=t.alternate)&&km(t,e)}function Gw(){return null}var gy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kh(t){this._internalRoot=t}ic.prototype.render=Kh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));sc(t,e,null,null)};ic.prototype.unmount=Kh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){sc(null,t,null,null)}),e[Dn]=null}};function ic(t){this._internalRoot=t}ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=G0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&X0(t)}};function Jh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Cm(){}function qw(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=_a(o);i.call(u)}}var o=_y(e,r,t,0,null,!1,!1,"",Cm);return t._reactRootContainer=o,t[Dn]=o.current,mo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=_a(a);l.call(u)}}var a=qh(t,0,!1,null,null,!1,!1,"",Cm);return t._reactRootContainer=a,t[Dn]=a.current,mo(t.nodeType===8?t.parentNode:t),Jr(function(){sc(e,a,n,r)}),a}function lc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=_a(o);l.call(a)}}sc(e,o,t,s)}else o=qw(n,e,t,s,r);return _a(o)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(gh(e,n|1),wt(e,Pe()),!(ie&6)&&(qs=Pe()+500,Pr()))}break;case 13:Jr(function(){var r=Mn(t,1);if(r!==null){var s=ut();Zt(r,t,1,s)}}),Xh(t,1)}};yh=function(t){if(t.tag===13){var e=Mn(t,134217728);if(e!==null){var n=ut();Zt(e,t,134217728,n)}Xh(t,134217728)}};Q0=function(t){if(t.tag===13){var e=gr(t),n=Mn(t,e);if(n!==null){var r=ut();Zt(n,t,e,r)}Xh(t,e)}};G0=function(){return ae};q0=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Qu=function(t,e,n){switch(e){case"input":if(Fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ka(r);if(!s)throw Error(j(90));E0(r),Fu(r,s)}}}break;case"textarea":I0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};O0=Vh;D0=Jr;var Xw={usingClientEntryPoint:!1,Events:[Bo,bs,Ka,A0,L0,Vh]},Ti={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kw={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=z0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||Gw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Qa=xl.inject(Kw),fn=xl}catch{}}At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xw;At.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jh(e))throw Error(j(200));return Qw(t,e,null,n)};At.createRoot=function(t,e){if(!Jh(t))throw Error(j(299));var n=!1,r="",s=gy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=qh(t,1,!1,null,null,n,!1,r,s),t[Dn]=e.current,mo(t.nodeType===8?t.parentNode:t),new Kh(e)};At.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=z0(e),t=t===null?null:t.stateNode,t};At.flushSync=function(t){return Jr(t)};At.hydrate=function(t,e,n){if(!oc(e))throw Error(j(200));return lc(null,t,e,!0,n)};At.hydrateRoot=function(t,e,n){if(!Jh(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=gy;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=_y(e,null,t,1,n??null,s,!1,i,o),t[Dn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new ic(e)};At.render=function(t,e,n){if(!oc(e))throw Error(j(200));return lc(null,t,e,!1,n)};At.unmountComponentAtNode=function(t){if(!oc(t))throw Error(j(40));return t._reactRootContainer?(Jr(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};At.unstable_batchedUpdates=Vh;At.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!oc(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return lc(t,e,n,!1,r)};At.version="18.3.1-next-f1338f8080-20240426";function yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy)}catch(t){console.error(t)}}yy(),y0.exports=At;var Is=y0.exports,Sm=Is;Au.createRoot=Sm.createRoot,Au.hydrateRoot=Sm.hydrateRoot;var Jw=`svg[fill=none] {
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
}`,Zw={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=Jw,document.head.appendChild(t))}var pe=Zw,ek=({size:t=24})=>c.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),lu="__agentation_freeze";function tk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[lu]||(t[lu]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[lu]}var Ge=tk();typeof window<"u"&&!Ge.installed&&(Ge.origSetTimeout=window.setTimeout.bind(window),Ge.origSetInterval=window.setInterval.bind(window),Ge.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?Ge.origSetTimeout(t,e):Ge.origSetTimeout((...r)=>{Ge.frozen?Ge.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?Ge.origSetInterval(t,e):Ge.origSetInterval((...r)=>{Ge.frozen||t(...r)},e,...n),window.requestAnimationFrame=t=>Ge.origRAF(e=>{Ge.frozen?Ge.frozenRAFQueue.push(t):t(e)}),Ge.installed=!0);var fs=Ge.origSetTimeout;Ge.origSetInterval;y.forwardRef(function({element:e,timestamp:n,selectedText:r,placeholder:s="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:a,onDelete:u,style:h,accentColor:d="#3c82f7",isExiting:f=!1,lightMode:g=!1,computedStyles:v},w){const[C,m]=y.useState(i),[p,_]=y.useState(!1),[k,b]=y.useState("initial"),[S,E]=y.useState(!1),[N,M]=y.useState(!1),x=y.useRef(null),T=y.useRef(null),R=y.useRef(null),B=y.useRef(null);y.useEffect(()=>{f&&k!=="exit"&&b("exit")},[f,k]),y.useEffect(()=>{fs(()=>{b("enter")},0);const I=fs(()=>{b("entered")},200),A=fs(()=>{const z=x.current;z&&(z.focus(),z.selectionStart=z.selectionEnd=z.value.length,z.scrollTop=z.scrollHeight)},50);return()=>{clearTimeout(I),clearTimeout(A),R.current&&clearTimeout(R.current),B.current&&clearTimeout(B.current)}},[]);const V=y.useCallback(()=>{B.current&&clearTimeout(B.current),_(!0),B.current=fs(()=>{var I;_(!1),(I=x.current)==null||I.focus()},250)},[]);y.useImperativeHandle(w,()=>({shake:V}),[V]);const Y=y.useCallback(()=>{b("exit"),R.current=fs(()=>{a()},150)},[a]),ne=y.useCallback(()=>{C.trim()&&l(C.trim())},[C,l]),re=y.useCallback(I=>{I.nativeEvent.isComposing||(I.key==="Enter"&&!I.shiftKey&&(I.preventDefault(),ne()),I.key==="Escape"&&Y())},[ne,Y]),O=[pe.popup,g?pe.light:"",k==="enter"?pe.enter:"",k==="entered"?pe.entered:"",k==="exit"?pe.exit:"",p?pe.shake:""].filter(Boolean).join(" ");return c.jsxs("div",{ref:T,className:O,"data-annotation-popup":!0,style:h,onClick:I=>I.stopPropagation(),children:[c.jsxs("div",{className:pe.header,children:[v&&Object.keys(v).length>0?c.jsxs("button",{className:pe.headerToggle,onClick:()=>{const I=N;M(!N),I&&fs(()=>{var A;return(A=x.current)==null?void 0:A.focus()},0)},type:"button",children:[c.jsx("svg",{className:`${pe.chevron} ${N?pe.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{className:pe.element,children:e})]}):c.jsx("span",{className:pe.element,children:e}),n&&c.jsx("span",{className:pe.timestamp,children:n})]}),v&&Object.keys(v).length>0&&c.jsx("div",{className:`${pe.stylesWrapper} ${N?pe.expanded:""}`,children:c.jsx("div",{className:pe.stylesInner,children:c.jsx("div",{className:pe.stylesBlock,children:Object.entries(v).map(([I,A])=>c.jsxs("div",{className:pe.styleLine,children:[c.jsx("span",{className:pe.styleProperty,children:I.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",c.jsx("span",{className:pe.styleValue,children:A}),";"]},I))})})}),r&&c.jsxs("div",{className:pe.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),c.jsx("textarea",{ref:x,className:pe.textarea,style:{borderColor:S?d:void 0},placeholder:s,value:C,onChange:I=>m(I.target.value),onFocus:()=>E(!0),onBlur:()=>E(!1),rows:2,onKeyDown:re}),c.jsxs("div",{className:pe.actions,children:[u&&c.jsx("div",{className:pe.deleteWrapper,children:c.jsx("button",{className:pe.deleteButton,onClick:u,type:"button",children:c.jsx(ek,{size:22})})}),c.jsx("button",{className:pe.cancel,onClick:Y,children:"Cancel"}),c.jsx("button",{className:pe.submit,style:{backgroundColor:d,opacity:C.trim()?1:.4},onClick:ne,disabled:!C.trim(),children:o})]})]})});var nk=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=nk,document.head.appendChild(t))}var Em={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(t,e){if(!t)throw li(e)},li=function(t){return new Error("Firebase Database ("+vy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[h],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new sk;const f=i<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const by=function(t){const e=xy(t);return Zh.encodeByteArray(e,!0)},ga=function(t){return by(t).replace(/\./g,"")},ya=function(t){try{return Zh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(t){return wy(void 0,t)}function wy(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ok(n)||(t[n]=wy(t[n],e[n]));return t}function ok(t){return t!=="__proto__"}/**
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
 */function lk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ak=()=>lk().__FIREBASE_DEFAULTS__,ck=()=>{if(typeof process>"u"||typeof Em>"u")return;const t=Em.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ya(t[1]);return e&&JSON.parse(e)},ef=()=>{try{return ak()||ck()||uk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ky=t=>{var e,n;return(n=(e=ef())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cy=t=>{const e=ky(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sy=()=>{var t;return(t=ef())===null||t===void 0?void 0:t.config},Ey=t=>{var e;return(e=ef())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ny(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ga(JSON.stringify(n)),ga(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function dk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fk(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pk(){return vy.NODE_ADMIN===!0}function mk(){try{return typeof indexedDB=="object"}catch{return!1}}function _k(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gk,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yk(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,l,r)}}function yk(t,e){return t.replace(vk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vk=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){return JSON.parse(t)}function He(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Co(ya(i[0])||""),n=Co(ya(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},xk=function(t){const e=Ty(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},bk=function(t){const e=Ty(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function va(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Nm(i)&&Nm(o)){if(!xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const f=(s<<5|s>>>27)+u+a+h+r[d]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function kk(t,e){const n=new Ck(t,e);return n.subscribe.bind(n)}class Ck{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Sk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=au),s.error===void 0&&(s.error=au),s.complete===void 0&&(s.complete=au);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function au(){}function ac(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,D(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mr="[DEFAULT]";/**
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
 */class Nk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Wo;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tk(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ik(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ik(t){return t===Mr?void 0:t}function Tk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Pk={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},jk=ue.INFO,Ak={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Lk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ak[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nf{constructor(e){this.name=e,this._logLevel=jk,this._logHandler=Lk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Ok=(t,e)=>e.some(n=>t instanceof n);let Im,Tm;function Dk(){return Im||(Im=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mk(){return Tm||(Tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ry=new WeakMap,Nd=new WeakMap,Py=new WeakMap,cu=new WeakMap,rf=new WeakMap;function Uk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ry.set(n,t)}).catch(()=>{}),rf.set(e,t),e}function zk(t){if(Nd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nd.set(t,e)}let Id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Py.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fk(t){Id=t(Id)}function Bk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(uu(this),e,...n);return Py.set(r,e.sort?e.sort():[e]),vr(r)}:Mk().includes(t)?function(...e){return t.apply(uu(this),e),vr(Ry.get(this))}:function(...e){return vr(t.apply(uu(this),e))}}function $k(t){return typeof t=="function"?Bk(t):(t instanceof IDBTransaction&&zk(t),Ok(t,Dk())?new Proxy(t,Id):t)}function vr(t){if(t instanceof IDBRequest)return Uk(t);if(cu.has(t))return cu.get(t);const e=$k(t);return e!==t&&(cu.set(t,e),rf.set(e,t)),e}const uu=t=>rf.get(t);function Wk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(vr(o.result),a.oldVersion,a.newVersion,vr(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Hk=["get","getKey","getAll","getAllKeys","count"],Vk=["put","add","delete","clear"],du=new Map;function Rm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(du.get(e))return du.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hk.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return du.set(e,i),i}Fk(t=>({...t,get:(e,n,r)=>Rm(e,n)||t.get(e,n,r),has:(e,n)=>!!Rm(e,n)||t.has(e,n)}));/**
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
 */class Yk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Td="@firebase/app",Pm="0.10.13";/**
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
 */const zn=new nf("@firebase/app"),Gk="@firebase/app-compat",qk="@firebase/analytics-compat",Xk="@firebase/analytics",Kk="@firebase/app-check-compat",Jk="@firebase/app-check",Zk="@firebase/auth",e2="@firebase/auth-compat",t2="@firebase/database",n2="@firebase/data-connect",r2="@firebase/database-compat",s2="@firebase/functions",i2="@firebase/functions-compat",o2="@firebase/installations",l2="@firebase/installations-compat",a2="@firebase/messaging",c2="@firebase/messaging-compat",u2="@firebase/performance",d2="@firebase/performance-compat",h2="@firebase/remote-config",f2="@firebase/remote-config-compat",p2="@firebase/storage",m2="@firebase/storage-compat",_2="@firebase/firestore",g2="@firebase/vertexai-preview",y2="@firebase/firestore-compat",v2="firebase",x2="10.14.1";/**
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
 */const Rd="[DEFAULT]",b2={[Td]:"fire-core",[Gk]:"fire-core-compat",[Xk]:"fire-analytics",[qk]:"fire-analytics-compat",[Jk]:"fire-app-check",[Kk]:"fire-app-check-compat",[Zk]:"fire-auth",[e2]:"fire-auth-compat",[t2]:"fire-rtdb",[n2]:"fire-data-connect",[r2]:"fire-rtdb-compat",[s2]:"fire-fn",[i2]:"fire-fn-compat",[o2]:"fire-iid",[l2]:"fire-iid-compat",[a2]:"fire-fcm",[c2]:"fire-fcm-compat",[u2]:"fire-perf",[d2]:"fire-perf-compat",[h2]:"fire-rc",[f2]:"fire-rc-compat",[p2]:"fire-gcs",[m2]:"fire-gcs-compat",[_2]:"fire-fst",[y2]:"fire-fst-compat",[g2]:"fire-vertex","fire-js":"fire-js",[v2]:"fire-js-all"};/**
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
 */const ba=new Map,w2=new Map,Pd=new Map;function jm(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Pd.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;Pd.set(e,t);for(const n of ba.values())jm(n,t);for(const n of w2.values())jm(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
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
 */const k2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Ho("app","Firebase",k2);/**
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
 */class C2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
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
 */const as=x2;function jy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw xr.create("bad-app-name",{appName:String(s)});if(n||(n=Sy()),!n)throw xr.create("no-options");const i=ba.get(s);if(i){if(xa(n,i.options)&&xa(r,i.config))return i;throw xr.create("duplicate-app",{appName:s})}const o=new Rk(s);for(const a of Pd.values())o.addComponent(a);const l=new C2(n,r,o);return ba.set(s,l),l}function sf(t=Rd){const e=ba.get(t);if(!e&&t===Rd&&Sy())return jy();if(!e)throw xr.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let s=(r=b2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(l.join(" "));return}Zr(new Sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const S2="firebase-heartbeat-database",E2=1,So="firebase-heartbeat-store";let hu=null;function Ay(){return hu||(hu=Wk(S2,E2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(So)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),hu}async function N2(t){try{const n=(await Ay()).transaction(So),r=await n.objectStore(So).get(Ly(t));return await n.done,r}catch(e){if(e instanceof Wn)zn.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Am(t,e){try{const r=(await Ay()).transaction(So,"readwrite");await r.objectStore(So).put(e,Ly(t)),await r.done}catch(n){if(n instanceof Wn)zn.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function Ly(t){return`${t.name}!${t.options.appId}`}/**
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
 */const I2=1024,T2=30*24*60*60*1e3;class R2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Lm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=T2}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lm(),{heartbeatsToSend:r,unsentEntries:s}=P2(this._heartbeatsCache.heartbeats),i=ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zn.warn(n),""}}}function Lm(){return new Date().toISOString().substring(0,10)}function P2(t,e=I2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Om(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Om(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mk()?_k().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await N2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Om(t){return ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function A2(t){Zr(new Sr("platform-logger",e=>new Yk(e),"PRIVATE")),Zr(new Sr("heartbeat",e=>new R2(e),"PRIVATE")),mn(Td,Pm,t),mn(Td,Pm,"esm2017"),mn("fire-js","")}A2("");function of(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Oy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const L2=Oy,Dy=new Ho("auth","Firebase",Oy());/**
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
 */const wa=new nf("@firebase/auth");function O2(t,...e){wa.logLevel<=ue.WARN&&wa.warn(`Auth (${as}): ${t}`,...e)}function Bl(t,...e){wa.logLevel<=ue.ERROR&&wa.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw af(t,...e)}function en(t,...e){return af(t,...e)}function lf(t,e,n){const r=Object.assign(Object.assign({},L2()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function Yr(t){return lf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function D2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),lf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function af(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dy.create(t,...e)}function q(t,e,...n){if(!t)throw af(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bl(e),new Error(e)}function Fn(t,e){t||Tn(e)}/**
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
 */function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function M2(){return Dm()==="http:"||Dm()==="https:"}function Dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function U2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(M2()||hk()||"connection"in navigator)?navigator.onLine:!0}function z2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=tf()||Iy()}get(){return U2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cf(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class My{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const F2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const B2=new Vo(3e4,6e4);function uf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ci(t,e,n,r,s={}){return Uy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=ai(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return dk()||(u.referrerPolicy="no-referrer"),My.fetch()(zy(t,t.config.apiHost,n,l),u)})}async function Uy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},F2),e);try{const s=new W2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw bl(t,"user-disabled",o);const h=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lf(t,h,u);gn(t,h)}}catch(s){if(s instanceof Wn)throw s;gn(t,"network-request-failed",{message:String(s)})}}async function $2(t,e,n,r,s={}){const i=await ci(t,e,n,r,s);return"mfaPendingCredential"in i&&gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function zy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?cf(t.config,s):`${t.config.apiScheme}://${s}`}class W2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),B2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=en(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function H2(t,e){return ci(t,"POST","/v1/accounts:delete",e)}async function Fy(t,e){return ci(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V2(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=df(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:qi(fu(s.auth_time)),issuedAtTime:qi(fu(s.iat)),expirationTime:qi(fu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fu(t){return Number(t)*1e3}function df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bl("JWT malformed, contained fewer than 3 sections"),null;try{const s=ya(n);return s?JSON.parse(s):(Bl("Failed to decode base64 JWT payload"),null)}catch(s){return Bl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mm(t){const e=df(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&Y2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Y2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Q2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ad{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ka(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Eo(t,Fy(n,{idToken:r}));q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?By(i.providerUserInfo):[],l=q2(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ad(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function G2(t){const e=Ue(t);await ka(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function q2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function By(t){return t.map(e=>{var{providerId:n}=e,r=of(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function X2(t,e){const n=await Uy(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=zy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",My.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K2(t,e){return ci(t,"POST","/v2/accounts:revokeToken",uf(t,e))}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Mm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await X2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ds;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function Xn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=of(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ad(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Eo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V2(this,e)}reload(){return G2(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ka(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(Yr(this.auth));const e=await this.getIdToken();return await Eo(this,H2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:_,emailVerified:k,isAnonymous:b,providerData:S,stsTokenManager:E}=n;q(_&&E,e,"internal-error");const N=Ds.fromJSON(this.name,E);q(typeof _=="string",e,"internal-error"),Xn(d,e.name),Xn(f,e.name),q(typeof k=="boolean",e,"internal-error"),q(typeof b=="boolean",e,"internal-error"),Xn(g,e.name),Xn(v,e.name),Xn(w,e.name),Xn(C,e.name),Xn(m,e.name),Xn(p,e.name);const M=new Rn({uid:_,auth:e,email:f,emailVerified:k,displayName:d,isAnonymous:b,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:N,createdAt:m,lastLoginAt:p});return S&&Array.isArray(S)&&(M.providerData=S.map(x=>Object.assign({},x))),C&&(M._redirectEventId=C),M}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ds;s.updateFromServerResponse(n);const i=new Rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ka(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?By(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ds;l.updateFromIdToken(r);const a=new Rn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ad(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const Um=new Map;function Pn(t){Fn(t instanceof Function,"Expected a class definition");let e=Um.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Um.set(t,e),e)}/**
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
 */class $y{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$y.type="NONE";const zm=$y;/**
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
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class Ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=$l(this.userKey,s.apiKey,i),this.fullPersistenceKey=$l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ms(Pn(zm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Pn(zm);const o=$l(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Rn._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Ms(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ms(i,e,r))}}/**
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
 */function Fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gy(e))return"Blackberry";if(qy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||Vy(e))&&!e.includes("edge/"))return"Chrome";if(Qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wy(t=ft()){return/firefox\//i.test(t)}function Hy(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vy(t=ft()){return/crios\//i.test(t)}function Yy(t=ft()){return/iemobile/i.test(t)}function Qy(t=ft()){return/android/i.test(t)}function Gy(t=ft()){return/blackberry/i.test(t)}function qy(t=ft()){return/webos/i.test(t)}function hf(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function J2(t=ft()){var e;return hf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Z2(){return fk()&&document.documentMode===10}function Xy(t=ft()){return hf(t)||Qy(t)||qy(t)||Gy(t)||/windows phone/i.test(t)||Yy(t)}/**
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
 */function Ky(t,e=[]){let n;switch(t){case"Browser":n=Fm(ft());break;case"Worker":n=`${Fm(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
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
 */class eC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tC(t,e={}){return ci(t,"GET","/v2/passwordPolicy",uf(t,e))}/**
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
 */const nC=6;class rC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class sC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bm(this),this.idTokenSubscription=new Bm(this),this.beforeStateQueue=new eC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fy(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ka(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=z2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(Yr(this));const n=e?Ue(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(Yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(Yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tC(this),n=new rC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await K2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ms.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ky(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dc(t){return Ue(t)}class Bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=kk(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ff={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iC(t){ff=t}function oC(t){return ff.loadJS(t)}function lC(){return ff.gapiScript}function aC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function cC(t,e){const n=uc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xa(i,e??{}))return s;gn(s,"already-initialized")}return n.initialize({options:e})}function uC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dC(t,e,n){const r=dc(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Jy(e),{host:o,port:l}=hC(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),fC()}function Jy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hC(t){const e=Jy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$m(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$m(o)}}}function $m(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Zy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function Us(t,e){return $2(t,"POST","/v1/accounts:signInWithIdp",uf(t,e))}/**
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
 */const pC="http://localhost";class es extends Zy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=of(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Us(e,n)}buildRequest(){const e={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
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
 */class pf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yo extends pf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rr extends Yo{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class sr extends Yo{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
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
 */class ir extends Yo{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
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
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Rn._fromIdTokenResponse(e,r,s),o=Wm(r);return new Ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wm(r);return new Ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ca extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ca.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ca(e,n,r,s)}}function ev(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ca._fromErrorAndOperation(t,i,e,r):i})}async function mC(t,e,n=!1){const r=await Eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",r)}/**
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
 */async function _C(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(Yr(r));const s="reauthenticate";try{const i=await Eo(t,ev(r,s,e,t),n);q(i.idToken,r,"internal-error");const o=df(i.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Ks._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),i}}/**
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
 */async function gC(t,e,n=!1){if(In(t.app))return Promise.reject(Yr(t));const r="signIn",s=await ev(t,r,e),i=await Ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function yC(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function vC(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function xC(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function bC(t){return Ue(t).signOut()}const Sa="__sak";/**
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
 */class tv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const wC=1e3,kC=10;class nv extends tv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Z2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nv.type="LOCAL";const CC=nv;/**
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
 */class rv extends tv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rv.type="SESSION";const sv=rv;/**
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
 */function SC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await SC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function mf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class EC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=mf("",20);s.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function _n(){return window}function NC(t){_n().location.href=t}/**
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
 */function iv(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function IC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RC(){return iv()?self:null}/**
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
 */const ov="firebaseLocalStorageDb",PC=1,Ea="firebaseLocalStorage",lv="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function jC(){const t=indexedDB.deleteDatabase(ov);return new Qo(t).toPromise()}function Ld(){const t=indexedDB.open(ov,PC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ea,{keyPath:lv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ea)?e(r):(r.close(),await jC(),e(await Ld()))})})}async function Hm(t,e,n){const r=fc(t,!0).put({[lv]:e,value:n});return new Qo(r).toPromise()}async function AC(t,e){const n=fc(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function Vm(t,e){const n=fc(t,!0).delete(e);return new Qo(n).toPromise()}const LC=800,OC=3;class av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(RC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IC(),!this.activeServiceWorker)return;this.sender=new EC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await Hm(e,Sa,"1"),await Vm(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fc(s,!1).getAll();return new Qo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}av.type="LOCAL";const DC=av;new Vo(3e4,6e4);/**
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
 */function cv(t,e){return e?Pn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _f extends Zy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MC(t){return gC(t.auth,new _f(t),t.bypassAuthState)}function UC(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),_C(n,new _f(t),t.bypassAuthState)}async function zC(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),mC(n,new _f(t),t.bypassAuthState)}/**
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
 */class uv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MC;case"linkViaPopup":case"linkViaRedirect":return zC;case"reauthViaPopup":case"reauthViaRedirect":return UC;default:gn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FC=new Vo(2e3,1e4);async function BC(t,e,n){if(In(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const r=dc(t);D2(t,e,pf);const s=cv(r,n);return new $r(r,"signInViaPopup",e,s).executeNotNull()}class $r extends uv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,$r.currentPopupAction&&$r.currentPopupAction.cancel(),$r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=mf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FC.get())};e()}}$r.currentPopupAction=null;/**
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
 */const $C="pendingRedirect",Wl=new Map;class WC extends uv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wl.get(this.auth._key());if(!e){try{const r=await HC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wl.set(this.auth._key(),e)}return this.bypassAuthState||Wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HC(t,e){const n=QC(e),r=YC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function VC(t,e){Wl.set(t._key(),e)}function YC(t){return Pn(t._redirectPersistence)}function QC(t){return $l($C,t.config.apiKey,t.name)}async function GC(t,e,n=!1){if(In(t.app))return Promise.reject(Yr(t));const r=dc(t),s=cv(r,e),o=await new WC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qC=10*60*1e3;class XC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(e))}saveEventToCache(e){this.cachedEventUids.add(Ym(e)),this.lastProcessedEventTime=Date.now()}}function Ym(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dv(t);default:return!1}}/**
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
 */async function JC(t,e={}){return ci(t,"GET","/v1/projects",e)}/**
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
 */const ZC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eS=/^https?/;async function tS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await JC(t);for(const n of e)try{if(nS(n))return}catch{}gn(t,"unauthorized-domain")}function nS(t){const e=jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eS.test(n))return!1;if(ZC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const rS=new Vo(3e4,6e4);function Qm(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sS(t){return new Promise((e,n)=>{var r,s,i;function o(){Qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qm(),n(en(t,"network-request-failed"))},timeout:rS.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const l=aC("iframefcb");return _n()[l]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},oC(`${lC()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Hl=null,e})}let Hl=null;function iS(t){return Hl=Hl||sS(t),Hl}/**
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
 */const oS=new Vo(5e3,15e3),lS="__/auth/iframe",aS="emulator/auth/iframe",cS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dS(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cf(e,aS):`https://${t.config.authDomain}/${lS}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=uS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ai(r).slice(1)}`}async function hS(t){const e=await iS(t),n=_n().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:dS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),l=_n().setTimeout(()=>{i(o)},oS.get());function a(){_n().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const fS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pS=500,mS=600,_S="_blank",gS="http://localhost";class Gm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yS(t,e,n,r=pS,s=mS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},fS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ft().toLowerCase();n&&(l=Vy(u)?_S:n),Wy(u)&&(e=e||gS,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(J2(u)&&l!=="_self")return vS(e||"",l),new Gm(null);const d=window.open(e||"",l,h);q(d,t,"popup-blocked");try{d.focus()}catch{}return new Gm(d)}function vS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const xS="__/auth/handler",bS="emulator/auth/handler",wS=encodeURIComponent("fac");async function qm(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof pf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Yo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${wS}=${encodeURIComponent(a)}`:"";return`${kS(t)}?${ai(l).slice(1)}${u}`}function kS({config:t}){return t.emulator?cf(t,bS):`https://${t.authDomain}/${xS}`}/**
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
 */const pu="webStorageSupport";class CS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sv,this._completeRedirectFn=GC,this._overrideRedirectResult=VC}async _openPopup(e,n,r,s){var i;Fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await qm(e,n,r,jd(),s);return yS(e,o,mf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await qm(e,n,r,jd(),s);return NC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hS(e),r=new XC(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pu,{type:pu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[pu];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xy()||Hy()||hf()}}const SS=CS;var Xm="@firebase/auth",Km="1.7.9";/**
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
 */class ES{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IS(t){Zr(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ky(t)},u=new sC(r,s,i,a);return uC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new Sr("auth-internal",e=>{const n=dc(e.getProvider("auth").getImmediate());return(r=>new ES(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(Xm,Km,NS(t)),mn(Xm,Km,"esm2017")}/**
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
 */const TS=5*60,RS=Ey("authIdTokenMaxAge")||TS;let Jm=null;const PS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>RS)return;const s=n==null?void 0:n.token;Jm!==s&&(Jm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jS(t=sf()){const e=uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=cC(t,{popupRedirectResolver:SS,persistence:[DC,CC,sv]}),r=Ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=PS(i.toString());vC(n,o,()=>o(n.currentUser)),yC(n,l=>o(l))}}const s=ky("auth");return s&&dC(n,`http://${s}`),n}function AS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=en("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IS("Browser");var Zm={};const e_="@firebase/database",t_="1.0.8";/**
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
 */let hv="";function LS(t){hv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),He(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Co(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OS(e)}}catch{}return new DS},Wr=fv("localStorage"),MS=fv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new nf("@firebase/database"),US=function(){let t=1;return function(){return t++}}(),pv=function(t){const e=Ek(t),n=new wk;n.update(e);const r=n.digest();return Zh.encodeByteArray(r)},Go=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Go.apply(null,r):typeof r=="object"?e+=He(r):e+=r,e+=" "}return e};let Xi=null,n_=!0;const zS=function(t,e){D(!0,"Can't turn on custom loggers persistently."),zs.logLevel=ue.VERBOSE,Xi=zs.log.bind(zs)},Xe=function(...t){if(n_===!0&&(n_=!1,Xi===null&&MS.get("logging_enabled")===!0&&zS()),Xi){const e=Go.apply(null,t);Xi(e)}},qo=function(t){return function(...e){Xe(t,...e)}},Od=function(...t){const e="FIREBASE INTERNAL ERROR: "+Go(...t);zs.error(e)},Bn=function(...t){const e=`FIREBASE FATAL ERROR: ${Go(...t)}`;throw zs.error(e),new Error(e)},dt=function(...t){const e="FIREBASE WARNING: "+Go(...t);zs.warn(e)},FS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&dt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Js="[MIN_NAME]",ts="[MAX_NAME]",cs=function(t,e){if(t===e)return 0;if(t===Js||e===ts)return-1;if(e===Js||t===ts)return 1;{const n=r_(t),r=r_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},$S=function(t,e){return t===e?0:t<e?-1:1},Ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+He(e))},yf=function(t){if(typeof t!="object"||t===null)return He(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=He(e[r]),n+=":",n+=yf(t[e[r]]);return n+="}",n},mv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _v=function(t){D(!gf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},WS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const YS=new RegExp("^-?(0*)\\d{1,10}$"),QS=-2147483648,GS=2147483647,r_=function(t){if(YS.test(t)){const e=Number(t);if(e>=QS&&e<=GS)return e}return null},ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw dt("Exception was thrown by user callback.",n),e},Math.floor(0))}},qS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class XS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){dt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',dt(e)}}class Vl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Vl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="5",gv="v",yv="s",vv="r",xv="f",bv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wv="ls",kv="p",Dd="ac",Cv="websocket",Sv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Nv(t,e,n){D(typeof e=="string","typeof type must == string"),D(typeof n=="object","typeof params must == object");let r;if(e===Cv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Sv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JS(t)&&(n.ns=t.namespace);const s=[];return et(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(){this.counters_={}}incrementCounter(e,n=1){vn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return ik(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu={},_u={};function xf(t){const e=t.toString();return mu[e]||(mu[e]=new ZS),mu[e]}function eE(t,e){const n=t.toString();return _u[n]||(_u[n]=e()),_u[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ui(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="start",nE="close",rE="pLPCommand",sE="pRTLPCB",Iv="id",Tv="pw",Rv="ser",iE="cb",oE="seg",lE="ts",aE="d",cE="dframe",Pv=1870,jv=30,uE=Pv-jv,dE=25e3,hE=3e4;class Ts{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qo(e),this.stats_=xf(n),this.urlFn=a=>(this.appCheckToken&&(a[Dd]=this.appCheckToken),Nv(n,Sv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new tE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hE)),BS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new bf((...i)=>{const[o,l,a,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===s_)this.id=l,this.password=a;else if(o===nE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[s_]="t",r[Rv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gv]=vf,this.transportSessionId&&(r[yv]=this.transportSessionId),this.lastSessionId&&(r[wv]=this.lastSessionId),this.applicationId&&(r[kv]=this.applicationId),this.appCheckToken&&(r[Dd]=this.appCheckToken),typeof location<"u"&&location.hostname&&bv.test(location.hostname)&&(r[vv]=xv);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ts.forceAllow_=!0}static forceDisallow(){Ts.forceDisallow_=!0}static isAvailable(){return Ts.forceAllow_?!0:!Ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WS()&&!HS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=by(n),s=mv(r,uE);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[cE]="t",r[Iv]=e,r[Tv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=He(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class bf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=US(),window[rE+this.uniqueCallbackIdentifier]=e,window[sE+this.uniqueCallbackIdentifier]=n,this.myIFrame=bf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Xe("frame writing exception"),l.stack&&Xe(l.stack),Xe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Xe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Iv]=this.myID,e[Tv]=this.myPW,e[Rv]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jv+r.length<=Pv;){const o=this.pendingSegs.shift();r=r+"&"+oE+s+"="+o.seg+"&"+lE+s+"="+o.ts+"&"+aE+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(dE)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Xe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=16384,pE=45e3;let Na=null;typeof MozWebSocket<"u"?Na=MozWebSocket:typeof WebSocket<"u"&&(Na=WebSocket);class Xt{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qo(this.connId),this.stats_=xf(n),this.connURL=Xt.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[gv]=vf,typeof location<"u"&&location.hostname&&bv.test(location.hostname)&&(o[vv]=xv),n&&(o[yv]=n),r&&(o[wv]=r),s&&(o[Dd]=s),i&&(o[kv]=i),Nv(e,Cv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wr.set("previous_websocket_failure",!0);try{let r;pk(),this.mySock=new Na(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Na!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Wr.isInMemoryStorage||Wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Co(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=He(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mv(n,fE);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ts,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xt&&Xt.isAvailable();let r=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||dt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Xt];else{const s=this.transports_=[];for(const i of No.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);No.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}No.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=6e4,_E=5e3,gE=10*1024,yE=100*1024,gu="t",i_="d",vE="s",o_="r",xE="e",l_="o",a_="a",c_="n",u_="p",bE="h";class wE{constructor(e,n,r,s,i,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qo("c:"+this.id+":"),this.transportManager_=new No(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gu in e){const n=e[gu];n===a_?this.upgradeIfSecondaryHealthy_():n===o_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===l_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ri("t",e),r=Ri("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:a_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ri("t",e),r=Ri("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ri(gu,e);if(i_ in e){const r=e[i_];if(n===bE){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===c_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vE?this.onConnectionShutdown_(r):n===o_?this.onReset_(r):n===xE?Od("Server Error: "+r):n===l_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Od("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vf!==r&&dt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_E))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia extends Lv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!tf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ia}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=32,h_=768;class de{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function le(){return new de("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Er(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new de(t.pieces_,e)}function wf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function kE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Io(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ov(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new de(e,0)}function Ee(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof de)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new de(n,0)}function ee(t){return t.pieceNum_>=t.pieces_.length}function yt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return yt(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function CE(t,e){const n=Io(t,0),r=Io(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=cs(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function kf(t,e){if(Er(t)!==Er(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ft(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Er(t)>Er(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class SE{constructor(e,n){this.errorPrefix_=n,this.parts_=Io(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=cc(this.parts_[r]);Dv(this)}}function EE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=cc(e),Dv(t)}function NE(t){const e=t.parts_.pop();t.byteLength_-=cc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dv(t){if(t.byteLength_>h_)throw new Error(t.errorPrefix_+"has a key path longer than "+h_+" bytes ("+t.byteLength_+").");if(t.parts_.length>d_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d_+") or object contains a cycle "+Ur(t))}function Ur(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends Lv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Cf}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=1e3,IE=60*5*1e3,f_=30*1e3,TE=1.3,RE=3e4,PE="server_kill",p_=3;class Ln extends Av{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ln.nextPersistentConnectionId_++,this.log_=qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pi,this.maxReconnectDelay_=IE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Cf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ia.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(He(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Wo,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;Ln.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vn(e,"w")){const r=Xs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();dt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||bk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=f_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=xk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+He(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Od("Unrecognized action received from server: "+He(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RE&&(this.reconnectDelay_=Pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ln.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){D(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Xe("getToken() completed but was canceled"):(Xe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new wE(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{dt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(PE)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&dt(d),a())}}}interrupt(e){Xe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Xe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ed(this.interruptReasons_)&&(this.reconnectDelay_=Pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>yf(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new de(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Xe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=p_&&(this.reconnectDelay_=f_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Xe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=p_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hv.replace(/\./g,"-")]=1,tf()?e["framework.cordova"]=1:Iy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ia.getInstance().currentlyOnline();return Ed(this.interruptReasons_)&&e}}Ln.nextPersistentConnectionId_=0;Ln.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new J(Js,e),s=new J(Js,n);return this.compare(r,s)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl;class Mv extends pc{static get __EMPTY_NODE(){return wl}static set __EMPTY_NODE(e){wl=e}compare(e,n){return cs(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(ts,wl)}makePost(e,n){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,wl)}toString(){return".key"}}const Fs=new Mv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??vt.EMPTY_NODE,this.right=i??vt.EMPTY_NODE}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return vt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return vt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Be.RED=!0;Be.BLACK=!1;class jE{copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class vt{constructor(e,n=vt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new vt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Be.BLACK,null,null))}remove(e){return new vt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kl(this.root_,null,this.comparator_,!0,e)}}vt.EMPTY_NODE=new jE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e){return cs(t.name,e.name)}function Sf(t,e){return cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md;function LE(t){Md=t}const Uv=function(t){return typeof t=="number"?"number:"+_v(t):"string:"+t},zv=function(t){if(t.isLeafNode()){const e=t.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vn(e,".sv"),"Priority must be a string or number.")}else D(t===Md||t.isEmpty(),"priority of unexpected type.");D(t===Md||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m_;class ze{constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zv(this.priorityNode_)}static set __childrenNodeConstructor(e){m_=e}static get __childrenNodeConstructor(){return m_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ee(e)?this:K(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(D(r!==".priority"||Er(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_v(this.value_):e+=this.value_,this.lazyHash_=pv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ze.VALUE_TYPE_ORDER.indexOf(n),i=ze.VALUE_TYPE_ORDER.indexOf(r);return D(s>=0,"Unknown leaf type: "+n),D(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fv,Bv;function OE(t){Fv=t}function DE(t){Bv=t}class ME extends pc{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?cs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(ts,new ze("[PRIORITY-POST]",Bv))}makePost(e,n){const r=Fv(e);return new J(n,new ze("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ne=new ME;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=Math.log(2);class zE{constructor(e){const n=i=>parseInt(Math.log(i)/UE,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ta=function(t,e,n,r){t.sort(e);const s=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new Be(f,d.node,Be.BLACK,null,null);{const g=parseInt(h/2,10)+a,v=s(a,g),w=s(g+1,u);return d=t[g],f=n?n(d):d,new Be(f,d.node,Be.BLACK,v,w)}},i=function(a){let u=null,h=null,d=t.length;const f=function(v,w){const C=d-v,m=d;d-=v;const p=s(C+1,m),_=t[C],k=n?n(_):_;g(new Be(k,_.node,w,null,p))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),C=Math.pow(2,a.count-(v+1));w?f(C,Be.BLACK):(f(C,Be.BLACK),f(C,Be.RED))}return h},o=new zE(t.length),l=i(o);return new vt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;const ps={};class jn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return D(ps&&Ne,"ChildrenNode.ts has not been loaded"),yu=yu||new jn({".priority":ps},{".priority":Ne}),yu}get(e){const n=Xs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof vt?n:null}hasIndex(e){return vn(this.indexSet_,e.toString())}addIndex(e,n){D(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(J.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=Ta(r,e.getCompare()):l=ps;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new jn(h,u)}addToIndexes(e,n){const r=va(this.indexes_,(s,i)=>{const o=Xs(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),s===ps)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(J.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ta(l,o.getCompare())}else return ps;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new J(e.name,l))),a.insert(e,e.node)}});return new jn(r,this.indexSet_)}removeFromIndexes(e,n){const r=va(this.indexes_,s=>{if(s===ps)return s;{const i=n.get(e.name);return i?s.remove(new J(e.name,i)):s}});return new jn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zv(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ji||(ji=new G(new vt(Sf),null,jn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ji}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ji:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(D(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new J(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ji:this.priorityNode_;return new G(s,o,i)}}updateChild(e,n){const r=K(e);if(r===null)return n;{D(K(e)!==".priority"||Er(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(_e(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ne,(o,l)=>{n[o]=l.val(e),r++,i&&G.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uv(this.getPriority().val())+":"),this.forEachChild(Ne,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":pv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new J(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,J.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xo?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ne),s=n.getIterator(Ne);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FE extends G{constructor(){super(new vt(Sf),G.EMPTY_NODE,jn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Xo=new FE;Object.defineProperties(J,{MIN:{value:new J(Js,G.EMPTY_NODE)},MAX:{value:new J(ts,Xo)}});Mv.__EMPTY_NODE=G.EMPTY_NODE;ze.__childrenNodeConstructor=G;LE(Xo);DE(Xo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=!0;function We(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,We(e))}if(!(t instanceof Array)&&BE){const n=[];let r=!1;if(et(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=We(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new J(o,a)))}}),n.length===0)return G.EMPTY_NODE;const i=Ta(n,AE,o=>o.name,Sf);if(r){const o=Ta(n,Ne.getCompare());return new G(i,We(e),new jn({".priority":o},{".priority":Ne}))}else return new G(i,We(e),jn.Default)}else{let n=G.EMPTY_NODE;return et(t,(r,s)=>{if(vn(t,r)&&r.substring(0,1)!=="."){const i=We(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(We(e))}}OE(We);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends pc{constructor(e){super(),this.indexPath_=e,D(!ee(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?cs(e.name,n.name):i}makePost(e,n){const r=We(e),s=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new J(n,s)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Xo);return new J(ts,e)}toString(){return Io(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE extends pc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?cs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const r=We(e);return new J(n,r)}toString(){return".value"}}const HE=new WE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){return{type:"value",snapshotNode:t}}function Zs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function To(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function VE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){D(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(To(n,l)):D(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Zs(n,r)):o.trackChildChange(Ro(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ne,(s,i)=>{n.hasChild(s)||r.trackChildChange(To(s,i))}),n.isLeafNode()||n.forEachChild(Ne,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ro(s,i,o))}else r.trackChildChange(Zs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.indexedFilter_=new Ef(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Po.getStartPost_(e),this.endPost_=Po.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new J(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(G.EMPTY_NODE);const i=this;return n.forEachChild(Ne,(o,l)=>{i.matches(new J(o,l))||(s=s.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new J(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=G.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(G.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const l=e;D(l.numChildren()===this.limit_,"");const a=new J(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(h&&!r.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(Ro(n,r,d)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(To(n,d));const w=l.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Zs(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:h&&o(u,a)>=0?(i!=null&&(i.trackChildChange(To(u.name,u.node)),i.trackChildChange(Zs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Js}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ts}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ne}copy(){const e=new Nf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function QE(t){return t.loadsAllData()?new Ef(t.getIndex()):t.hasLimit()?new YE(t):new Po(t)}function __(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ne?n="$priority":t.index_===HE?n="$value":t.index_===Fs?n="$key":(D(t.index_ instanceof $E,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=He(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=He(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+He(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=He(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+He(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function g_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Av{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ra.getListenId_(e,r),l={};this.listens_[o]=l;const a=__(e._queryParams);this.restRequest_(i+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Xs(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",s(f,null)}})}unlisten(e,n){const r=Ra.getListenId_(e,n);delete this.listens_[r]}get(e){const n=__(e._queryParams),r=e._path.toString(),s=new Wo;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ai(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Co(l.responseText)}catch{dt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&dt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){return{value:null,children:new Map}}function Wv(t,e,n){if(ee(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Pa());const s=t.children.get(r);e=_e(e),Wv(s,e,n)}}function Ud(t,e,n){t.value!==null?n(e,t.value):qE(t,(r,s)=>{const i=new de(e.toString()+"/"+r);Ud(s,i,n)})}function qE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&et(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=10*1e3,KE=30*1e3,JE=5*60*1e3;class ZE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new XE(e);const r=y_+(KE-y_)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;et(e,(s,i)=>{i>0&&vn(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*JE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function If(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Rf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Kt.ACK_USER_WRITE,this.source=If()}operationForChild(e){if(ee(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(e));return new ja(le(),n,this.revert)}}else return D(K(this.path)===e,"operationForChild called for unrelated child."),new ja(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return ee(this.path)?new jo(this.source,le()):new jo(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Kt.OVERWRITE}operationForChild(e){return ee(this.path)?new ns(this.source,le(),this.snap.getImmediateChild(e)):new ns(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Kt.MERGE}operationForChild(e){if(ee(this.path)){const n=this.children.subtree(new de(e));return n.isEmpty()?null:n.value?new ns(this.source,le(),n.value):new ei(this.source,le(),n)}else return D(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ee(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function tN(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(VE(o.childName,o.snapshotNode))}),Ai(t,s,"child_removed",e,r,n),Ai(t,s,"child_added",e,r,n),Ai(t,s,"child_moved",i,r,n),Ai(t,s,"child_changed",e,r,n),Ai(t,s,"value",e,r,n),s}function Ai(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>rN(t,l,a)),o.forEach(l=>{const a=nN(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function nN(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function rN(t,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const r=new J(e.childName,e.snapshotNode),s=new J(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e){return{eventCache:t,serverCache:e}}function Ji(t,e,n,r){return mc(new rs(e,n,r),t.serverCache)}function Hv(t,e,n,r){return mc(t.eventCache,new rs(e,n,r))}function zd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vu;const sN=()=>(vu||(vu=new vt($S)),vu);class me{constructor(e,n=sN()){this.value=e,this.children=n}static fromObject(e){let n=new me(null);return et(e,(r,s)=>{n=n.set(new de(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:le(),value:this.value};if(ee(e))return null;{const r=K(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(_e(e),n);return i!=null?{path:Ee(new de(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ee(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(_e(e)):new me(null)}}set(e,n){if(ee(e))return new me(n,this.children);{const r=K(e),i=(this.children.get(r)||new me(null)).set(_e(e),n),o=this.children.insert(r,i);return new me(this.value,o)}}remove(e){if(ee(e))return this.children.isEmpty()?new me(null):new me(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const s=r.remove(_e(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new me(null):new me(this.value,i)}else return this}}get(e){if(ee(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(_e(e)):null}}setTree(e,n){if(ee(e))return n;{const r=K(e),i=(this.children.get(r)||new me(null)).setTree(_e(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new me(this.value,o)}}fold(e){return this.fold_(le(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ee(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,le(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ee(e))return null;{const i=K(e),o=this.children.get(i);return o?o.findOnPath_(_e(e),Ee(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,le(),n)}foreachOnPath_(e,n,r){if(ee(e))return this;{this.value&&r(n,this.value);const s=K(e),i=this.children.get(s);return i?i.foreachOnPath_(_e(e),Ee(n,s),r):new me(null)}}foreach(e){this.foreach_(le(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ee(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new me(null))}}function Zi(t,e,n){if(ee(e))return new tn(new me(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=yt(s,e);return i=i.updateChild(o,n),new tn(t.writeTree_.set(s,i))}else{const s=new me(n),i=t.writeTree_.setTree(e,s);return new tn(i)}}}function Fd(t,e,n){let r=t;return et(n,(s,i)=>{r=Zi(r,Ee(e,s),i)}),r}function v_(t,e){if(ee(e))return tn.empty();{const n=t.writeTree_.setTree(e,new me(null));return new tn(n)}}function Bd(t,e){return us(t,e)!=null}function us(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(yt(n.path,e)):null}function x_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ne,(r,s)=>{e.push(new J(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new J(r,s.value))}),e}function br(t,e){if(ee(e))return t;{const n=us(t,e);return n!=null?new tn(new me(n)):new tn(t.writeTree_.subtree(e))}}function $d(t){return t.writeTree_.isEmpty()}function ti(t,e){return Vv(le(),t.writeTree_,e)}function Vv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Vv(Ee(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ee(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e){return qv(e,t)}function iN(t,e,n,r,s){D(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Zi(t.visibleWrites,e,n)),t.lastWriteId=r}function oN(t,e,n,r){D(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Fd(t.visibleWrites,e,n),t.lastWriteId=r}function lN(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function aN(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);D(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&cN(l,r.path)?s=!1:Ft(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return uN(t),!0;if(r.snap)t.visibleWrites=v_(t.visibleWrites,r.path);else{const l=r.children;et(l,a=>{t.visibleWrites=v_(t.visibleWrites,Ee(r.path,a))})}return!0}else return!1}function cN(t,e){if(t.snap)return Ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ft(Ee(t.path,n),e))return!0;return!1}function uN(t){t.visibleWrites=Yv(t.allWrites,dN,le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function dN(t){return t.visible}function Yv(t,e,n){let r=tn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)Ft(n,o)?(l=yt(n,o),r=Zi(r,l,i.snap)):Ft(o,n)&&(l=yt(o,n),r=Zi(r,le(),i.snap.getChild(l)));else if(i.children){if(Ft(n,o))l=yt(n,o),r=Fd(r,l,i.children);else if(Ft(o,n))if(l=yt(o,n),ee(l))r=Fd(r,le(),i.children);else{const a=Xs(i.children,K(l));if(a){const u=a.getChild(_e(l));r=Zi(r,le(),u)}}}else throw li("WriteRecord should have .snap or .children")}}return r}function Qv(t,e,n,r,s){if(!r&&!s){const i=us(t.visibleWrites,e);if(i!=null)return i;{const o=br(t.visibleWrites,e);if($d(o))return n;if(n==null&&!Bd(o,le()))return null;{const l=n||G.EMPTY_NODE;return ti(o,l)}}}else{const i=br(t.visibleWrites,e);if(!s&&$d(i))return n;if(!s&&n==null&&!Bd(i,le()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(Ft(u.path,e)||Ft(e,u.path))},l=Yv(t.allWrites,o,e),a=n||G.EMPTY_NODE;return ti(l,a)}}}function hN(t,e,n){let r=G.EMPTY_NODE;const s=us(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ne,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=br(t.visibleWrites,e);return n.forEachChild(Ne,(o,l)=>{const a=ti(br(i,new de(o)),l);r=r.updateImmediateChild(o,a)}),x_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=br(t.visibleWrites,e);return x_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fN(t,e,n,r,s){D(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ee(e,n);if(Bd(t.visibleWrites,i))return null;{const o=br(t.visibleWrites,i);return $d(o)?s.getChild(n):ti(o,s.getChild(n))}}function pN(t,e,n,r){const s=Ee(e,n),i=us(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=br(t.visibleWrites,s);return ti(o,r.getNode().getImmediateChild(n))}else return null}function mN(t,e){return us(t.visibleWrites,e)}function _N(t,e,n,r,s,i,o){let l;const a=br(t.visibleWrites,e),u=us(a,le());if(u!=null)l=u;else if(n!=null)l=ti(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&h.length<s;)d(g,r)!==0&&h.push(g),g=f.getNext();return h}else return[]}function gN(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Aa(t,e,n,r){return Qv(t.writeTree,t.treePath,e,n,r)}function jf(t,e){return hN(t.writeTree,t.treePath,e)}function b_(t,e,n,r){return fN(t.writeTree,t.treePath,e,n,r)}function La(t,e){return mN(t.writeTree,Ee(t.treePath,e))}function yN(t,e,n,r,s,i){return _N(t.writeTree,t.treePath,e,n,r,s,i)}function Af(t,e,n){return pN(t.writeTree,t.treePath,e,n)}function Gv(t,e){return qv(Ee(t.treePath,e),t.writeTree)}function qv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;D(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),D(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ro(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,To(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Zs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ro(r,e.snapshotNode,s.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Xv=new xN;class Lf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Af(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),i=yN(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t){return{filter:t}}function wN(t,e){D(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function kN(t,e,n,r,s){const i=new vN;let o,l;if(n.type===Kt.OVERWRITE){const u=n;u.source.fromUser?o=Wd(t,e,u.path,u.snap,r,s,i):(D(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!ee(u.path),o=Oa(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===Kt.MERGE){const u=n;u.source.fromUser?o=SN(t,e,u.path,u.children,r,s,i):(D(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Hd(t,e,u.path,u.children,r,s,l,i))}else if(n.type===Kt.ACK_USER_WRITE){const u=n;u.revert?o=IN(t,e,u.path,r,s,i):o=EN(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Kt.LISTEN_COMPLETE)o=NN(t,e,n.path,r,i);else throw li("Unknown operation type: "+n.type);const a=i.getChanges();return CN(e,o,a),{viewCache:o,changes:a}}function CN(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=zd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push($v(zd(e)))}}function Kv(t,e,n,r,s,i){const o=e.eventCache;if(La(r,n)!=null)return e;{let l,a;if(ee(n))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ss(e),h=u instanceof G?u:G.EMPTY_NODE,d=jf(r,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Aa(r,ss(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=K(n);if(u===".priority"){D(Er(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=b_(r,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=_e(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=b_(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=Af(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,s,i):l=o.getNode()}}return Ji(e,l,o.isFullyInitialized()||ee(n),t.filter.filtersNodes())}}function Oa(t,e,n,r,s,i,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(ee(n))u=h.updateFullNode(a.getNode(),r,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=h.updateFullNode(a.getNode(),g,null)}else{const g=K(n);if(!a.isCompleteForPath(n)&&Er(n)>1)return e;const v=_e(n),C=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=h.updatePriority(a.getNode(),C):u=h.updateChild(a.getNode(),g,C,v,Xv,null)}const d=Hv(e,u,a.isFullyInitialized()||ee(n),h.filtersNodes()),f=new Lf(s,d,i);return Kv(t,d,n,s,f,l)}function Wd(t,e,n,r,s,i,o){const l=e.eventCache;let a,u;const h=new Lf(s,e,i);if(ee(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ji(e,u,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ji(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=_e(n),g=l.getNode().getImmediateChild(d);let v;if(ee(f))v=r;else{const w=h.getCompleteChild(d);w!=null?wf(f)===".priority"&&w.getChild(Ov(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=G.EMPTY_NODE}if(g.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=Ji(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function w_(t,e){return t.eventCache.isCompleteForChild(e)}function SN(t,e,n,r,s,i,o){let l=e;return r.foreach((a,u)=>{const h=Ee(n,a);w_(e,K(h))&&(l=Wd(t,l,h,u,s,i,o))}),r.foreach((a,u)=>{const h=Ee(n,a);w_(e,K(h))||(l=Wd(t,l,h,u,s,i,o))}),l}function k_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Hd(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;ee(n)?u=r:u=new me(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=k_(t,g,f);a=Oa(t,a,new de(d),v,s,i,o,l)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),w=k_(t,v,f);a=Oa(t,a,new de(d),w,s,i,o,l)}}),a}function EN(t,e,n,r,s,i,o){if(La(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(ee(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Oa(t,e,n,a.getNode().getChild(n),s,i,l,o);if(ee(n)){let u=new me(null);return a.getNode().forEachChild(Fs,(h,d)=>{u=u.set(new de(h),d)}),Hd(t,e,n,u,s,i,l,o)}else return e}else{let u=new me(null);return r.foreach((h,d)=>{const f=Ee(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),Hd(t,e,n,u,s,i,l,o)}}function NN(t,e,n,r,s){const i=e.serverCache,o=Hv(e,i.getNode(),i.isFullyInitialized()||ee(n),i.isFiltered());return Kv(t,o,n,r,Xv,s)}function IN(t,e,n,r,s,i){let o;if(La(r,n)!=null)return e;{const l=new Lf(r,e,s),a=e.eventCache.getNode();let u;if(ee(n)||K(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Aa(r,ss(e));else{const d=e.serverCache.getNode();D(d instanceof G,"serverChildren would be complete if leaf node"),h=jf(r,d)}h=h,u=t.filter.updateFullNode(a,h,i)}else{const h=K(n);let d=Af(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,_e(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,G.EMPTY_NODE,_e(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Aa(r,ss(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||La(r,le())!=null,Ji(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ef(r.getIndex()),i=QE(r);this.processor_=bN(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(G.EMPTY_NODE,l.getNode(),null),h=new rs(a,o.isFullyInitialized(),s.filtersNodes()),d=new rs(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=mc(d,h),this.eventGenerator_=new eN(this.query_)}get query(){return this.query_}}function RN(t){return t.viewCache_.serverCache.getNode()}function PN(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ee(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function C_(t){return t.eventRegistrations_.length===0}function jN(t,e){t.eventRegistrations_.push(e)}function S_(t,e,n){const r=[];if(n){D(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function E_(t,e,n,r){e.type===Kt.MERGE&&e.source.queryId!==null&&(D(ss(t.viewCache_),"We should always have a full cache before handling merges"),D(zd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=kN(t.processor_,s,e,n,r);return wN(t.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,Jv(t,i.changes,i.viewCache.eventCache.getNode(),null)}function AN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ne,(i,o)=>{r.push(Zs(i,o))}),n.isFullyInitialized()&&r.push($v(n.getNode())),Jv(t,r,n.getNode(),e)}function Jv(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return tN(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;class LN{constructor(){this.views=new Map}}function ON(t){D(!Da,"__referenceConstructor has already been defined"),Da=t}function DN(){return D(Da,"Reference.ts has not been loaded"),Da}function MN(t){return t.views.size===0}function Of(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return D(i!=null,"SyncTree gave us an op for an invalid query."),E_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(E_(o,e,n,r));return i}}function UN(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Aa(n,s?r:null),a=!1;l?a=!0:r instanceof G?(l=jf(n,r),a=!1):(l=G.EMPTY_NODE,a=!1);const u=mc(new rs(l,a,!1),new rs(r,s,!1));return new TN(e,u)}return o}function zN(t,e,n,r,s,i){const o=UN(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jN(o,n),AN(o,n)}function FN(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=Nr(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(S_(u,n,r)),C_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(S_(a,n,r)),C_(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!Nr(t)&&i.push(new(DN())(e._repo,e._path)),{removed:i,events:o}}function Zv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bs(t,e){let n=null;for(const r of t.views.values())n=n||PN(r,e);return n}function ex(t,e){if(e._queryParams.loadsAllData())return _c(t);{const r=e._queryIdentifier;return t.views.get(r)}}function tx(t,e){return ex(t,e)!=null}function Nr(t){return _c(t)!=null}function _c(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;function BN(t){D(!Ma,"__referenceConstructor has already been defined"),Ma=t}function $N(){return D(Ma,"Reference.ts has not been loaded"),Ma}let WN=1;class N_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new me(null),this.pendingWriteTree_=gN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nx(t,e,n,r,s){return iN(t.pendingWriteTree_,e,n,r,s),s?di(t,new ns(If(),e,n)):[]}function HN(t,e,n,r){oN(t.pendingWriteTree_,e,n,r);const s=me.fromObject(n);return di(t,new ei(If(),e,s))}function ur(t,e,n=!1){const r=lN(t.pendingWriteTree_,e);if(aN(t.pendingWriteTree_,e)){let i=new me(null);return r.snap!=null?i=i.set(le(),!0):et(r.children,o=>{i=i.set(new de(o),!0)}),di(t,new ja(r.path,i,n))}else return[]}function gc(t,e,n){return di(t,new ns(Tf(),e,n))}function VN(t,e,n){const r=me.fromObject(n);return di(t,new ei(Tf(),e,r))}function YN(t,e){return di(t,new jo(Tf(),e))}function QN(t,e,n){const r=Mf(t,n);if(r){const s=Uf(r),i=s.path,o=s.queryId,l=yt(i,e),a=new jo(Rf(o),l);return zf(t,i,a)}else return[]}function Vd(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||tx(o,e))){const a=FN(o,e,n,r);MN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!s){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,g)=>Nr(g));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const g=XN(f);for(let v=0;v<g.length;++v){const w=g[v],C=w.query,m=ix(t,w);t.listenProvider_.startListening(eo(C),Ua(t,C),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(eo(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(yc(f));t.listenProvider_.stopListening(eo(f),g)}))}KN(t,u)}return l}function GN(t,e,n,r){const s=Mf(t,r);if(s!=null){const i=Uf(s),o=i.path,l=i.queryId,a=yt(o,e),u=new ns(Rf(l),a,n);return zf(t,o,u)}else return[]}function qN(t,e,n,r){const s=Mf(t,r);if(s){const i=Uf(s),o=i.path,l=i.queryId,a=yt(o,e),u=me.fromObject(n),h=new ei(Rf(l),a,u);return zf(t,o,h)}else return[]}function I_(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,g)=>{const v=yt(f,s);i=i||Bs(g,v),o=o||Nr(g)});let l=t.syncPointTree_.get(s);l?(o=o||Nr(l),i=i||Bs(l,le())):(l=new LN,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=G.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,v)=>{const w=Bs(v,le());w&&(i=i.updateImmediateChild(g,w))}));const u=tx(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=yc(e);D(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=JN();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=Pf(t.pendingWriteTree_,s);let d=zN(l,e,n,h,i,a);if(!u&&!o&&!r){const f=ex(l,e);d=d.concat(ZN(t,e,f))}return d}function Df(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=yt(o,e),u=Bs(l,a);if(u)return u});return Qv(s,e,i,n,!0)}function di(t,e){return rx(e,t.syncPointTree_,null,Pf(t.pendingWriteTree_,le()))}function rx(t,e,n,r){if(ee(t.path))return sx(t,e,n,r);{const s=e.get(le());n==null&&s!=null&&(n=Bs(s,le()));let i=[];const o=K(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=Gv(r,o);i=i.concat(rx(l,a,u,h))}return s&&(i=i.concat(Of(s,t,r,n))),i}}function sx(t,e,n,r){const s=e.get(le());n==null&&s!=null&&(n=Bs(s,le()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Gv(r,o),h=t.operationForChild(o);h&&(i=i.concat(sx(h,l,a,u)))}),s&&(i=i.concat(Of(s,t,r,n))),i}function ix(t,e){const n=e.query,r=Ua(t,n);return{hashFn:()=>(RN(e)||G.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?QN(t,n._path,r):YN(t,n._path);{const i=VS(s,n);return Vd(t,n,null,i)}}}}function Ua(t,e){const n=yc(e);return t.queryToTagMap.get(n)}function yc(t){return t._path.toString()+"$"+t._queryIdentifier}function Mf(t,e){return t.tagToQueryMap.get(e)}function Uf(t){const e=t.indexOf("$");return D(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new de(t.substr(0,e))}}function zf(t,e,n){const r=t.syncPointTree_.get(e);D(r,"Missing sync point for query tag that we're tracking");const s=Pf(t.pendingWriteTree_,e);return Of(r,n,s,null)}function XN(t){return t.fold((e,n,r)=>{if(n&&Nr(n))return[_c(n)];{let s=[];return n&&(s=Zv(n)),et(r,(i,o)=>{s=s.concat(o)}),s}})}function eo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($N())(t._repo,t._path):t}function KN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=yc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function JN(){return WN++}function ZN(t,e,n){const r=e._path,s=Ua(t,e),i=ix(t,n),o=t.listenProvider_.startListening(eo(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)D(!Nr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,d)=>{if(!ee(u)&&h&&Nr(h))return[_c(h).query];{let f=[];return h&&(f=f.concat(Zv(h).map(g=>g.query))),et(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(eo(h),Ua(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ff(n)}node(){return this.node_}}class Bf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Bf(this.syncTree_,n)}node(){return Df(this.syncTree_,this.path_)}}const e5=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},T_=function(t,e,n){if(!t||typeof t!="object")return t;if(D(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return t5(t[".sv"],e,n);if(typeof t[".sv"]=="object")return n5(t[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},t5=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:D(!1,"Unexpected server value: "+t)}},n5=function(t,e,n){t.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&D(!1,"Unexpected increment value: "+r);const s=e.node();if(D(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},ox=function(t,e,n,r){return $f(e,new Bf(n,t),r)},lx=function(t,e,n){return $f(t,new Ff(e),n)};function $f(t,e,n){const r=t.getPriority().val(),s=T_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=T_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new ze(l,We(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ze(s))),o.forEachChild(Ne,(l,a)=>{const u=$f(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hf(t,e){let n=e instanceof de?e:new de(e),r=t,s=K(n);for(;s!==null;){const i=Xs(r.node.children,s)||{children:{},childCount:0};r=new Wf(s,r,i),n=_e(n),s=K(n)}return r}function hi(t){return t.node.value}function ax(t,e){t.node.value=e,Yd(t)}function cx(t){return t.node.childCount>0}function r5(t){return hi(t)===void 0&&!cx(t)}function vc(t,e){et(t.node.children,(n,r)=>{e(new Wf(n,t,r))})}function ux(t,e,n,r){n&&e(t),vc(t,s=>{ux(s,e,!0)})}function s5(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ko(t){return new de(t.parent===null?t.name:Ko(t.parent)+"/"+t.name)}function Yd(t){t.parent!==null&&i5(t.parent,t.name,t)}function i5(t,e,n){const r=r5(n),s=vn(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Yd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Yd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5=/[\[\].#$\/\u0000-\u001F\u007F]/,l5=/[\[\].#$\u0000-\u001F\u007F]/,xu=10*1024*1024,Vf=function(t){return typeof t=="string"&&t.length!==0&&!o5.test(t)},dx=function(t){return typeof t=="string"&&t.length!==0&&!l5.test(t)},a5=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),dx(t)},c5=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!gf(t)||t&&typeof t=="object"&&vn(t,".sv")},hx=function(t,e,n,r){r&&e===void 0||xc(ac(t,"value"),e,n)},xc=function(t,e,n){const r=n instanceof de?new SE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ur(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ur(r)+" with contents = "+e.toString());if(gf(e))throw new Error(t+"contains "+e.toString()+" "+Ur(r));if(typeof e=="string"&&e.length>xu/3&&cc(e)>xu)throw new Error(t+"contains a string greater than "+xu+" utf8 bytes "+Ur(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(et(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Vf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ur(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);EE(r,o),xc(t,l,r),NE(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ur(r)+" in addition to actual children.")}},u5=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Io(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Vf(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(CE);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&Ft(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},d5=function(t,e,n,r){const s=ac(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];et(e,(o,l)=>{const a=new de(o);if(xc(s,l,Ee(n,a)),wf(a)===".priority"&&!c5(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),u5(s,i)},fx=function(t,e,n,r){if(!dx(n))throw new Error(ac(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},h5=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fx(t,e,n)},px=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},f5=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Vf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!a5(n))throw new Error(ac(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!kf(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function mx(t,e,n){bc(t,n),_x(t,r=>kf(r,e))}function rn(t,e,n){bc(t,n),_x(t,r=>Ft(r,e)||Ft(e,r))}function _x(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(m5(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function m5(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xi&&Xe("event: "+n.toString()),ui(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5="repo_interrupt",g5=25;class y5{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Pa(),this.transactionQueueTree_=new Wf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function v5(t,e,n){if(t.stats_=xf(t.repoInfo_),t.forceRestClient_||qS())t.server_=new Ra(t.repoInfo_,(r,s,i,o)=>{R_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>P_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{He(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ln(t.repoInfo_,e,(r,s,i,o)=>{R_(t,r,s,i,o)},r=>{P_(t,r)},r=>{x5(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=eE(t.repoInfo_,()=>new ZE(t.stats_,t.server_)),t.infoData_=new GE,t.infoSyncTree_=new N_({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=gc(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Yf(t,"connected",!1),t.serverSyncTree_=new N_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const u=o(l,a);rn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function gx(t){const n=t.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wc(t){return e5({timestamp:gx(t)})}function R_(t,e,n,r,s){t.dataUpdateCount++;const i=new de(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=va(n,u=>We(u));o=qN(t.serverSyncTree_,i,a,s)}else{const a=We(n);o=GN(t.serverSyncTree_,i,a,s)}else if(r){const a=va(n,u=>We(u));o=VN(t.serverSyncTree_,i,a)}else{const a=We(n);o=gc(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=ni(t,i)),rn(t.eventQueue_,l,o)}function P_(t,e){Yf(t,"connected",e),e===!1&&k5(t)}function x5(t,e){et(e,(n,r)=>{Yf(t,n,r)})}function Yf(t,e,n){const r=new de("/.info/"+e),s=We(n);t.infoData_.updateSnapshot(r,s);const i=gc(t.infoSyncTree_,r,s);rn(t.eventQueue_,r,i)}function Qf(t){return t.nextWriteId_++}function b5(t,e,n,r,s){kc(t,"set",{path:e.toString(),value:n,priority:r});const i=wc(t),o=We(n,r),l=Df(t.serverSyncTree_,e),a=lx(o,l,i),u=Qf(t),h=nx(t.serverSyncTree_,e,a,u,!0);bc(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||dt("set at "+e+" failed: "+f);const w=ur(t.serverSyncTree_,u,!v);rn(t.eventQueue_,e,w),Qd(t,s,f,g)});const d=qf(t,e);ni(t,d),rn(t.eventQueue_,d,[])}function w5(t,e,n,r){kc(t,"update",{path:e.toString(),value:n});let s=!0;const i=wc(t),o={};if(et(n,(l,a)=>{s=!1,o[l]=ox(Ee(e,l),We(a),t.serverSyncTree_,i)}),s)Xe("update() called with empty data.  Don't do anything."),Qd(t,r,"ok",void 0);else{const l=Qf(t),a=HN(t.serverSyncTree_,e,o,l);bc(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||dt("update at "+e+" failed: "+u);const f=ur(t.serverSyncTree_,l,!d),g=f.length>0?ni(t,e):e;rn(t.eventQueue_,g,f),Qd(t,r,u,h)}),et(n,u=>{const h=qf(t,Ee(e,u));ni(t,h)}),rn(t.eventQueue_,e,[])}}function k5(t){kc(t,"onDisconnectEvents");const e=wc(t),n=Pa();Ud(t.onDisconnect_,le(),(s,i)=>{const o=ox(s,i,t.serverSyncTree_,e);Wv(n,s,o)});let r=[];Ud(n,le(),(s,i)=>{r=r.concat(gc(t.serverSyncTree_,s,i));const o=qf(t,s);ni(t,o)}),t.onDisconnect_=Pa(),rn(t.eventQueue_,le(),r)}function C5(t,e,n){let r;K(e._path)===".info"?r=I_(t.infoSyncTree_,e,n):r=I_(t.serverSyncTree_,e,n),mx(t.eventQueue_,e._path,r)}function j_(t,e,n){let r;K(e._path)===".info"?r=Vd(t.infoSyncTree_,e,n):r=Vd(t.serverSyncTree_,e,n),mx(t.eventQueue_,e._path,r)}function S5(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_5)}function kc(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Xe(n,...e)}function Qd(t,e,n,r){e&&ui(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function yx(t,e,n){return Df(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function Gf(t,e=t.transactionQueueTree_){if(e||Cc(t,e),hi(e)){const n=xx(t,e);D(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&E5(t,Ko(e),n)}else cx(e)&&vc(e,n=>{Gf(t,n)})}function E5(t,e,n){const r=n.map(u=>u.currentWriteId),s=yx(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];D(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=yt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{kc(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(ur(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Cc(t,Hf(t.transactionQueueTree_,e)),Gf(t,t.transactionQueueTree_),rn(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)ui(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{dt("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ni(t,e)}},o)}function ni(t,e){const n=vx(t,e),r=Ko(n),s=xx(t,n);return N5(t,s,r),r}function N5(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=yt(n,a.path);let h=!1,d;if(D(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,s=s.concat(ur(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=g5)h=!0,d="maxretry",s=s.concat(ur(t.serverSyncTree_,a.currentWriteId,!0));else{const f=yx(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){xc("transaction failed: Data returned ",g,a.path);let v=We(g);typeof g=="object"&&g!=null&&vn(g,".priority")||(v=v.updatePriority(f.getPriority()));const C=a.currentWriteId,m=wc(t),p=lx(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=p,a.currentWriteId=Qf(t),o.splice(o.indexOf(C),1),s=s.concat(nx(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),s=s.concat(ur(t.serverSyncTree_,C,!0))}else h=!0,d="nodata",s=s.concat(ur(t.serverSyncTree_,a.currentWriteId,!0))}rn(t.eventQueue_,n,s),s=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Cc(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ui(r[l]);Gf(t,t.transactionQueueTree_)}function vx(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&hi(r)===void 0;)r=Hf(r,n),e=_e(e),n=K(e);return r}function xx(t,e){const n=[];return bx(t,e,n),n.sort((r,s)=>r.order-s.order),n}function bx(t,e,n){const r=hi(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);vc(e,s=>{bx(t,s,n)})}function Cc(t,e){const n=hi(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,ax(e,n.length>0?n:void 0)}vc(e,r=>{Cc(t,r)})}function qf(t,e){const n=Ko(vx(t,e)),r=Hf(t.transactionQueueTree_,e);return s5(r,s=>{bu(t,s)}),bu(t,r),ux(r,s=>{bu(t,s)}),n}function bu(t,e){const n=hi(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(D(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ur(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?ax(e,void 0):n.length=i+1,rn(t.eventQueue_,Ko(e),s);for(let o=0;o<r.length;o++)ui(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I5(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function T5(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):dt(`Invalid query segment '${n}' in query '${t}'`)}return e}const A_=function(t,e){const n=R5(t),r=n.namespace;n.domain==="firebase.com"&&Bn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FS();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ev(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new de(n.pathString)}},R5=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=I5(t.substring(h,d)));const f=T5(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",P5=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=L_.charAt(n%64),n=Math.floor(n/64);D(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=L_.charAt(e[s]);return D(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j5{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+He(this.snapshot.exportVal())}}class A5{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return D(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Xf{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ee(this._path)?null:wf(this._path)}get ref(){return new jr(this._repo,this._path)}get _queryIdentifier(){const e=g_(this._queryParams),n=yf(e);return n==="{}"?"default":n}get _queryObject(){return g_(this._queryParams)}isEqual(e){if(e=Ue(e),!(e instanceof Xf))return!1;const n=this._repo===e._repo,r=kf(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+kE(this._path)}}class jr extends Xf{constructor(e,n){super(e,n,new Nf,!1)}get parent(){const e=Ov(this._path);return e===null?null:new jr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class za{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new de(e),r=Ao(this.ref,e);return new za(this._node.getChild(n),r,Ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new za(s,Ao(this.ref,r),Ne)))}hasChild(e){const n=new de(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ae(t,e){return t=Ue(t),t._checkNotDeleted("ref"),e!==void 0?Ao(t._root,e):t._root}function Ao(t,e){return t=Ue(t),K(t._path)===null?h5("child","path",e):fx("child","path",e),new jr(t._repo,Ee(t._path,e))}function O5(t,e){t=Ue(t),px("push",t._path),hx("push",e,t._path,!0);const n=gx(t._repo),r=P5(n),s=Ao(t,r),i=Ao(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function or(t,e){t=Ue(t),px("set",t._path),hx("set",e,t._path,!1);const n=new Wo;return b5(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ms(t,e){d5("update",e,t._path);const n=new Wo;return w5(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Kf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new j5("value",this,new za(e.snapshotNode,new jr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new A5(this,e,n):null}matches(e){return e instanceof Kf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function D5(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const a=n,u=(h,d)=>{j_(t._repo,t,l),a(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new L5(n,i||void 0),l=new Kf(o);return C5(t._repo,t,l),()=>j_(t._repo,t,l)}function Fa(t,e,n,r){return D5(t,"value",e,n,r)}ON(jr);BN(jr);/**
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
 */const M5="FIREBASE_DATABASE_EMULATOR_HOST",Gd={};let U5=!1;function z5(t,e,n,r){t.repoInfo_=new Ev(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function F5(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Bn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xe("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=A_(i,s),l=o.repoInfo,a;typeof process<"u"&&Zm&&(a=Zm[M5]),a?(i=`http://${a}?ns=${l.namespace}`,o=A_(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new KS(t.name,t.options,e);f5("Invalid Firebase Database URL",o),ee(o.path)||Bn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=$5(l,t,u,new XS(t.name,n));return new W5(h,t)}function B5(t,e){const n=Gd[e];(!n||n[t.key]!==t)&&Bn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),S5(t),delete n[t.key]}function $5(t,e,n,r){let s=Gd[e.name];s||(s={},Gd[e.name]=s);let i=s[t.toURLString()];return i&&Bn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new y5(t,U5,n,r),s[t.toURLString()]=i,i}class W5{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(v5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new jr(this._repo,le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bn("Cannot call "+e+" on a deleted database.")}}function H5(t=sf(),e){const n=uc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Cy("database");r&&V5(n,...r)}return n}function V5(t,e,n,r={}){t=Ue(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Bn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Vl(Vl.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Ny(r.mockUserToken,t.app.options.projectId);i=new Vl(o)}z5(s,e,n,i)}/**
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
 */function Y5(t){LS(as),Zr(new Sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return F5(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),mn(e_,t_,t),mn(e_,t_,"esm2017")}Ln.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ln.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Y5();var Q5="firebase",G5="10.14.1";/**
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
 */mn(Q5,G5,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="firebasestorage.googleapis.com",kx="storageBucket",q5=2*60*1e3,X5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Wn{constructor(e,n,r=0){super(wu(e),`Firebase Storage: ${n} (${wu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function wu(t){return"storage/"+t}function Jf(){const t="An unknown error occurred, please check the error payload for server response.";return new Te(Ie.UNKNOWN,t)}function K5(t){return new Te(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function J5(t){return new Te(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Z5(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Ie.UNAUTHENTICATED,t)}function eI(){return new Te(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tI(t){return new Te(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nI(){return new Te(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rI(){return new Te(Ie.CANCELED,"User canceled the upload/download.")}function sI(t){return new Te(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function iI(t){return new Te(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function oI(){return new Te(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kx+"' property when initializing the app?")}function lI(){return new Te(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aI(){return new Te(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cI(t){return new Te(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qd(t){return new Te(Ie.INVALID_ARGUMENT,t)}function Cx(){return new Te(Ie.APP_DELETED,"The Firebase app was deleted.")}function uI(t){return new Te(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function to(t,e){return new Te(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Li(t){throw new Te(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw iI(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function u(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${s}/o${f}`,"i"),v={bucket:1,path:3},w=n===wx?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${w}/${s}/${C}`,"i"),_=[{regex:l,indices:a,postModify:i},{regex:g,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let k=0;k<_.length;k++){const b=_[k],S=b.regex.exec(e);if(S){const E=S[b.indices.bucket];let N=S[b.indices.path];N||(N=""),r=new Rt(E,N),b.postModify(r);break}}if(r==null)throw sI(e);return r}}class dI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...C){u||(u=!0,e.apply(null,C))}function d(C){s=setTimeout(()=>{s=null,t(g,a())},C)}function f(){i&&clearTimeout(i)}function g(C,...m){if(u){f();return}if(C){f(),h.call(null,C,...m);return}if(a()||o){f(),h.call(null,C,...m);return}r<64&&(r*=2);let _;l===1?(l=2,_=0):_=(r+Math.random())*1e3,d(_)}let v=!1;function w(C){v||(v=!0,f(),!u&&(s!==null?(C||(l=2),clearTimeout(s),d(0)):C||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function fI(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(t){return t!==void 0}function mI(t){return typeof t=="object"&&!Array.isArray(t)}function Zf(t){return typeof t=="string"||t instanceof String}function O_(t){return ep()&&t instanceof Blob}function ep(){return typeof Blob<"u"}function D_(t,e,n,r){if(r<e)throw qd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw qd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Sx(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
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
 */function _I(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r,s,i,o,l,a,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Cl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Qr.NO_ERROR,a=i.getStatus();if(!l||_I(a,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Qr.ABORT;r(!1,new Cl(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new Cl(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());pI(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=Jf();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Cx():rI();o(a)}else{const a=nI();o(a)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=hI(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function yI(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vI(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xI(t,e){e&&(t["X-Firebase-GMPID"]=e)}function bI(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wI(t,e,n,r,s,i,o=!0){const l=Sx(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return xI(u,e),yI(u,n),vI(u,i),bI(u,r),new gI(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function CI(...t){const e=kI();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ep())return new Blob(t);throw new Te(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SI(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function EI(t){if(typeof atob>"u")throw cI("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ku{constructor(e,n){this.data=e,this.contentType=n||null}}function NI(t,e){switch(t){case hn.RAW:return new ku(Ex(e));case hn.BASE64:case hn.BASE64URL:return new ku(Nx(t,e));case hn.DATA_URL:return new ku(TI(e),RI(e))}throw Jf()}function Ex(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function II(t){let e;try{e=decodeURIComponent(t)}catch{throw to(hn.DATA_URL,"Malformed data URL.")}return Ex(e)}function Nx(t,e){switch(t){case hn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw to(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw to(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=EI(e)}catch(s){throw s.message.includes("polyfill")?s:to(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ix{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw to(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=PI(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TI(t){const e=new Ix(t);return e.base64?Nx(hn.BASE64,e.rest):II(e.rest)}function RI(t){return new Ix(t).contentType}function PI(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){let r=0,s="";O_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(O_(this.data_)){const r=this.data_,s=SI(r,e,n);return s===null?null:new lr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new lr(r,!0)}}static getBlob(...e){if(ep()){const n=e.map(r=>r instanceof lr?r.data_:r);return new lr(CI.apply(null,n))}else{const n=e.map(o=>Zf(o)?NI(hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new lr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tx(t){let e;try{e=JSON.parse(t)}catch{return null}return mI(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function AI(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Rx(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t,e){return e}class lt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||LI}}let Sl=null;function OI(t){return!Zf(t)||t.length<2?t:Rx(t)}function Px(){if(Sl)return Sl;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(i,o){return OI(o)}const n=new lt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new lt("size");return s.xform=r,t.push(s),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),Sl=t,Sl}function DI(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function MI(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return DI(r,t),r}function jx(t,e,n){const r=Tx(e);return r===null?null:MI(t,r,n)}function UI(t,e,n,r){const s=Tx(e);if(s===null||!Zf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),g=Sc(f,n,r),v=Sx({alt:"media",token:u});return g+v})[0]}function zI(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class tp{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(t){if(!t)throw Jf()}function FI(t,e){function n(r,s){const i=jx(t,s,e);return Ax(i!==null),i}return n}function BI(t,e){function n(r,s){const i=jx(t,s,e);return Ax(i!==null),UI(i,s,t.host,t._protocol)}return n}function Lx(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=eI():s=Z5():n.getStatus()===402?s=J5(t.bucket):n.getStatus()===403?s=tI(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Ox(t){const e=Lx(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=K5(t.path)),i.serverResponse=s.serverResponse,i}return n}function $I(t,e,n){const r=e.fullServerUrl(),s=Sc(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new tp(s,i,BI(t,n),o);return l.errorHandler=Ox(e),l}function WI(t,e){const n=e.fullServerUrl(),r=Sc(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(a,u){}const l=new tp(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=Ox(e),l}function HI(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function VI(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=HI(null,e)),r}function YI(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let _="";for(let k=0;k<2;k++)_=_+Math.random().toString().slice(2);return _}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=VI(e,r,s),h=zI(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+a+"--",g=lr.getBlob(d,r,f);if(g===null)throw lI();const v={name:u.fullPath},w=Sc(i,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,p=new tp(w,C,FI(t,n),m);return p.urlParams=v,p.headers=o,p.body=g.uploadData(),p.errorHandler=Lx(e),p}class QI{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GI extends QI{initXhr(){this.xhr_.responseType="text"}}function np(){return new GI}/**
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
 */class is{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new is(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rx(this._location.path)}get storage(){return this._service}get parent(){const e=jI(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new is(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uI(e)}}function qI(t,e,n){t._throwIfRoot("uploadBytes");const r=YI(t.storage,t._location,Px(),new lr(e,!0),n);return t.storage.makeRequestWithTokens(r,np).then(s=>({metadata:s,ref:t}))}function XI(t){t._throwIfRoot("getDownloadURL");const e=$I(t.storage,t._location,Px());return t.storage.makeRequestWithTokens(e,np).then(n=>{if(n===null)throw aI();return n})}function KI(t){t._throwIfRoot("deleteObject");const e=WI(t.storage,t._location);return t.storage.makeRequestWithTokens(e,np)}function JI(t,e){const n=AI(t._location.path,e),r=new Rt(t._location.bucket,n);return new is(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){return/^[A-Za-z]+:\/\//.test(t)}function eT(t,e){return new is(t,e)}function Dx(t,e){if(t instanceof rp){const n=t;if(n._bucket==null)throw oI();const r=new is(n,n._bucket);return e!=null?Dx(r,e):r}else return e!==void 0?JI(t,e):t}function tT(t,e){if(e&&ZI(e)){if(t instanceof rp)return eT(t,e);throw qd("To use ref(service, url), the first argument must be a Storage instance.")}else return Dx(t,e)}function M_(t,e){const n=e==null?void 0:e[kx];return n==null?null:Rt.makeFromBucketSpec(n,t)}function nT(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ny(s,t.app.options.projectId))}class rp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=wx,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=q5,this._maxUploadRetryTime=X5,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=M_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=M_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new is(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new dI(Cx());{const o=wI(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const U_="@firebase/storage",z_="0.13.2";/**
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
 */const Mx="storage";function rT(t,e,n){return t=Ue(t),qI(t,e,n)}function sT(t){return t=Ue(t),XI(t)}function iT(t){return t=Ue(t),KI(t)}function F_(t,e){return t=Ue(t),tT(t,e)}function oT(t=sf(),e){t=Ue(t);const r=uc(t,Mx).getImmediate({identifier:e}),s=Cy("storage");return s&&lT(r,...s),r}function lT(t,e,n,r={}){nT(t,e,n,r)}function aT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new rp(n,r,s,e,as)}function cT(){Zr(new Sr(Mx,aT,"PUBLIC").setMultipleInstances(!0)),mn(U_,z_,""),mn(U_,z_,"esm2017")}cT();const uT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},sp=jy(uT),Cu=jS(sp),Le=H5(sp),B_=oT(sp),Ux=new Sn;Ux.addScope("email");const zx="packing-checklist-data",Ke=["必備","電子產品","個人物品","視天氣","旅行","運動"],Fx=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],zi={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[]};function Zn(t){return t.toLowerCase().replace(/\./g,",")}function Xd(t){return t.replace(/,/g,".")}function dT(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:Object.fromEntries(Object.entries(t.sharedWith||{}).map(([e,n])=>[e,n===!0?"view":n]))}:null}function Bx(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:zi.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):zi.lists,activeListId:t.activeListId||zi.activeListId,templates:Array.isArray(t.templates)?t.templates:[]}:zi}function hT(){try{const t=localStorage.getItem(zx);if(t)return Bx(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return zi}function $_(t){try{localStorage.setItem(zx,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function fT(t){const[e,n]=y.useState(null),[r,s]=y.useState(t),[i,o]=y.useState("offline"),l=y.useRef(null),a=y.useCallback(g=>{l.current&&l.current();const v=Ae(Le,"users/"+g);l.current=Fa(v,w=>{const C=w.val();if(C){const m=Bx(C);s(m),$_(m),o("synced")}else u(g,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=y.useCallback((g,v)=>{o("syncing");const w=Ae(Le,"users/"+g);or(w,v).then(()=>{o("synced")}).catch(C=>{console.error("Firebase 儲存失敗",C),o("error")})},[]),h=y.useCallback(g=>{s(g),$_(g),e&&u(e.uid,g)},[e,u]),d=y.useCallback(()=>{BC(Cu,Ux).catch(g=>{console.error("登入失敗",g),alert("登入失敗："+g.message)})},[]),f=y.useCallback(()=>{l.current&&(l.current(),l.current=null),bC(Cu).then(()=>{n(null),o("offline")}).catch(g=>{console.error("登出失敗",g)})},[]);return y.useEffect(()=>{const g=xC(Cu,v=>{n(v),v?a(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{g(),l.current&&l.current()}},[a]),{user:e,data:r,syncStatus:i,saveData:h,handleLogin:d,handleLogout:f}}function pT(t,e){const[n,r]=y.useState({}),[s,i]=y.useState({}),o=y.useRef({}),l=y.useRef(null),a=y.useCallback(b=>{o.current[b]&&(o.current[b](),delete o.current[b])},[]),u=y.useCallback(()=>{Object.keys(o.current).forEach(a),l.current&&(l.current(),l.current=null),r({}),i({})},[a]),h=y.useCallback((b,S)=>{if(o.current[`${S}_${b}`])return;const E=Ae(Le,`sharedLists/${b}`),N=Fa(E,M=>{const x=M.val();if(!x){(S==="withMe"?r:i)(V=>{const Y={...V};return delete Y[b],Y}),a(`${S}_${b}`);return}const T=dT(x);(S==="withMe"?r:i)(B=>({...B,[b]:T}))},M=>{console.error("共享清單讀取失敗",M)});o.current[`${S}_${b}`]=N},[a]);y.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const b=Zn(t.email),S=Ae(Le,`sharedIndex/${b}`);return l.current=Fa(S,E=>{const N=E.val();if(!N){Object.keys(o.current).forEach(x=>{x.startsWith("withMe_")&&a(x)}),r({});return}const M=new Set(Object.keys(N));Object.keys(o.current).forEach(x=>{if(x.startsWith("withMe_")){const T=x.replace("withMe_","");M.has(T)||(a(x),r(R=>{const B={...R};return delete B[T],B}))}}),M.forEach(x=>{h(x,"withMe")})},E=>{console.error("共享索引讀取失敗",E)}),()=>{u()}},[t==null?void 0:t.email]),y.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const b=new Set;e.lists.forEach(S=>{S.sharedListId&&b.add(S.sharedListId)}),Object.keys(o.current).forEach(S=>{if(S.startsWith("byMe_")){const E=S.replace("byMe_","");b.has(E)||(a(S),i(N=>{const M={...N};return delete M[E],M}))}}),b.forEach(S=>{h(S,"byMe")})},[t,e==null?void 0:e.lists,h,a]),y.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(b=>{if(!b.sharedListId)return;const S=s[b.sharedListId];if(!S)return;const E=(Array.isArray(b.items)?b.items:[]).map(B=>e.itemLibrary.find(V=>V.id===B)).filter(Boolean).map(({id:B,name:V,category:Y,note:ne,photoURL:re})=>({id:B,name:V,category:Y,note:ne,...re&&{photoURL:re}})),N=new Set(Array.isArray(b.items)?b.items:[]),M=(S.items||[]).filter(B=>!N.has(B.id)),x=[...E,...M],T=S.items||[];if(JSON.stringify(x)!==JSON.stringify(T)){const B=Ae(Le,`sharedLists/${b.sharedListId}`);ms(B,{items:x,name:b.name,icon:b.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,s]);const d=y.useCallback(async(b,S,E)=>{if(!t)return null;const N=(Array.isArray(b.items)?b.items:[]).map(V=>S.find(Y=>Y.id===V)).filter(Boolean).map(({id:V,name:Y,category:ne,note:re,photoURL:O})=>({id:V,name:Y,category:ne,note:re,...O&&{photoURL:O}})),M={};E.forEach(V=>{M[Zn(V)]="view"});const T=O5(Ae(Le,"sharedLists")).key,R={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:b.name,icon:b.icon,items:N,checkedItems:Array.isArray(b.checkedItems)?b.checkedItems:[],sharedWith:M},B={};return B[`sharedLists/${T}`]=R,E.forEach(V=>{B[`sharedIndex/${Zn(V)}/${T}`]=!0}),await ms(Ae(Le),B),T},[t]),f=y.useCallback(async(b,S)=>{const E=Zn(S),N={};N[`sharedLists/${b}/sharedWith/${E}`]="view",N[`sharedIndex/${E}/${b}`]=!0,await ms(Ae(Le),N)},[]),g=y.useCallback(async(b,S)=>{const E=Zn(S),N={};N[`sharedLists/${b}/sharedWith/${E}`]=null,N[`sharedIndex/${E}/${b}`]=null,await ms(Ae(Le),N)},[]),v=y.useCallback(async b=>{const S=s[b];if(!S)return;const E={};E[`sharedLists/${b}`]=null;const N=S.sharedWith||{};Object.keys(N).forEach(M=>{E[`sharedIndex/${M}/${b}`]=null}),await ms(Ae(Le),E)},[s]),w=y.useCallback(async(b,S,E)=>{const N=Zn(S);await or(Ae(Le,`sharedLists/${b}/sharedWith/${N}`),E)},[]),C=y.useCallback(async(b,S)=>{const E=n[b];if(!E)return;const M=[...E.items||[],S];await or(Ae(Le,`sharedLists/${b}/items`),M)},[n]),m=y.useCallback(async(b,S)=>{const E=n[b]||s[b];if(!E)return;const N=(E.items||[]).filter(T=>T.id!==S),M=(E.checkedItems||[]).filter(T=>T!==S),x={};x[`sharedLists/${b}/items`]=N,x[`sharedLists/${b}/checkedItems`]=M,await ms(Ae(Le),x)},[n,s]),p=y.useCallback(async(b,S)=>{const E=n[b]||s[b];if(!E)return;const N=Array.isArray(E.checkedItems)?E.checkedItems:[],x=N.includes(S)?N.filter(R=>R!==S):[...N,S],T=Ae(Le,`sharedLists/${b}/checkedItems`);await or(T,x)},[n,s]),_=y.useCallback(async b=>{const S=Ae(Le,`sharedLists/${b}/checkedItems`);await or(S,[])},[]),k=y.useCallback(async(b,S)=>{const E=Ae(Le,`sharedLists/${b}/checkedItems`);await or(E,S)},[]);return{sharedWithMe:n,sharedByMe:s,shareList:d,addSharedUser:f,removeSharedUser:g,unshareList:v,setUserPermission:w,addSharedItem:C,removeSharedItem:m,toggleSharedCheck:p,resetSharedChecks:_,checkAllShared:k}}function mT(t){const[e,n]=y.useState([]),[r,s]=y.useState(!1),[i,o]=y.useState(!0);y.useEffect(()=>{const u=Ae(Le,"adminEmails"),h=Fa(u,d=>{const f=d.val(),g=Array.isArray(f)?f:[];n(g),o(!1)},()=>{n([]),o(!1)});return()=>h()},[]),y.useEffect(()=>{if(!(t!=null&&t.email)){s(!1);return}s(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=y.useCallback(async u=>{const h=u.toLowerCase().trim();if(!h)return;const d=[...new Set([...e,h])];await or(Ae(Le,"adminEmails"),d)},[e]),a=y.useCallback(async u=>{var f;const h=u.toLowerCase().trim();if(((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())===h)return;const d=e.filter(g=>g!==h);await or(Ae(Le,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:r,adminEmails:e,loading:i,addAdmin:l,removeAdmin:a}}const _T="modulepreload",gT=function(t){return"/"+t},W_={},yT=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=gT(a),a in W_)return;W_[a]=!0;const u=a.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":_T,u||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function vT(){const[t,e]=y.useState(!1),[n,r]=y.useState(null);return y.useEffect(()=>{yT(async()=>{const{registerSW:o}=await import("./virtual_pwa-register-XnH_Yo4Q.js");return{registerSW:o}},[]).then(({registerSW:o})=>{const l=o({onNeedRefresh(){e(!0)},onOfflineReady(){console.log("PWA: 離線模式已就緒")}});r(()=>l)}).catch(()=>{})},[]),{needRefresh:t,refresh:()=>{n&&n(!0)},dismiss:()=>{e(!1)}}}const H_="packing-checklist-theme";function xT(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function Su(t){const e=t==="dark"||t==="system"&&xT();document.documentElement.classList.toggle("dark",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e?"#0f172a":"#4F46E5")}function bT(){const[t,e]=y.useState(()=>{try{return localStorage.getItem(H_)||"system"}catch{return"system"}}),n=y.useCallback(r=>{e(r);try{localStorage.setItem(H_,r)}catch{}Su(r)},[]);return y.useEffect(()=>{Su(t)},[t]),y.useEffect(()=>{if(t!=="system")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>Su("system");return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[t]),{preference:t,changeTheme:n}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=t=>{const e=kT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=y.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},a)=>y.createElement("svg",{ref:a,...CT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:$x("lucide",s),...!i&&!ST(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,h])=>y.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(t,e)=>{const n=y.forwardRef(({className:r,...s},i)=>y.createElement(ET,{ref:i,iconNode:e,className:$x(`lucide-${wT(V_(t))}`,`lucide-${t}`,r),...s}));return n.displayName=V_(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Eu=W("arrow-left",NT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],Wx=W("arrow-up-down",IT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],RT=W("backpack",TT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],jT=W("baby",PT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],LT=W("book-open",AT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],DT=W("briefcase",OT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ip=W("camera",MT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],zT=W("chart-column",UT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],BT=W("check-check",FT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lo=W("check",$T);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Y_=W("chevron-down",WT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],VT=W("chevron-left",HT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],QT=W("circle-alert",YT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Kd=W("clipboard-list",GT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],XT=W("cloud-off",qT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],JT=W("cloud",KT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],eR=W("coffee",ZT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],nR=W("copy",tR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],sR=W("download",rR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],oR=W("dumbbell",iR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],aR=W("eye",lR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hx=W("file-text",cR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],dR=W("footprints",uR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],fR=W("funnel",hR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],mR=W("gift",pR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Vx=W("grip-vertical",_R);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],yR=W("heart",gR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],xR=W("inbox",vR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Yx=W("layout-dashboard",bR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],kR=W("layout-list",wR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],SR=W("list-checks",CR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Qx=W("loader-circle",ER);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],IR=W("loader",NR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],RR=W("log-in",TR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],jR=W("log-out",PR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],LR=W("menu",AR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],DR=W("monitor",OR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],UR=W("moon",MR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],FR=W("mountain",zR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],$R=W("music",BR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Oo=W("package",WR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Jd=W("pen-line",HR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],YR=W("pencil",VR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],GR=W("person-standing",QR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],XR=W("plane",qR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ir=W("plus",KR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ZR=W("rotate-ccw",JR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ec=W("search",e4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Nc=W("share-2",t4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Zd=W("shield",n4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],s4=W("shirt",r4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],o4=W("shopping-cart",i4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],a4=W("sparkles",l4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],u4=W("square-check-big",c4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],op=W("sticky-note",d4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],f4=W("sun",h4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],m4=W("tag",p4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],g4=W("target",_4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],v4=W("tent",y4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],wr=W("trash-2",x4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],w4=W("umbrella",b4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],C4=W("upload",k4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],E4=W("user",S4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Gx=W("users",N4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ht=W("x",I4);function T4(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.useMemo(()=>r=>{e.forEach(s=>s(r))},e)}const Ic=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function fi(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function lp(t){return"nodeType"in t}function kt(t){var e,n;return t?fi(t)?t:lp(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function ap(t){const{Document:e}=kt(t);return t instanceof e}function Jo(t){return fi(t)?!1:t instanceof kt(t).HTMLElement}function qx(t){return t instanceof kt(t).SVGElement}function pi(t){return t?fi(t)?t.document:lp(t)?ap(t)?t:Jo(t)||qx(t)?t.ownerDocument:document:document:document}const yn=Ic?y.useLayoutEffect:y.useEffect;function cp(t){const e=y.useRef(t);return yn(()=>{e.current=t}),y.useCallback(function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e.current==null?void 0:e.current(...r)},[])}function R4(){const t=y.useRef(null),e=y.useCallback((r,s)=>{t.current=setInterval(r,s)},[]),n=y.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function Do(t,e){e===void 0&&(e=[t]);const n=y.useRef(t);return yn(()=>{n.current!==t&&(n.current=t)},e),n}function Zo(t,e){const n=y.useRef();return y.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Ba(t){const e=cp(t),n=y.useRef(null),r=y.useCallback(s=>{s!==n.current&&(e==null||e(s,n.current)),n.current=s},[]);return[n,r]}function eh(t){const e=y.useRef();return y.useEffect(()=>{e.current=t},[t]),e.current}let Nu={};function el(t,e){return y.useMemo(()=>{if(e)return e;const n=Nu[t]==null?0:Nu[t]+1;return Nu[t]=n,t+"-"+n},[t,e])}function Xx(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),s=1;s<n;s++)r[s-1]=arguments[s];return r.reduce((i,o)=>{const l=Object.entries(o);for(const[a,u]of l){const h=i[a];h!=null&&(i[a]=h+t*u)}return i},{...e})}}const $s=Xx(1),$a=Xx(-1);function P4(t){return"clientX"in t&&"clientY"in t}function up(t){if(!t)return!1;const{KeyboardEvent:e}=kt(t.target);return e&&t instanceof e}function j4(t){if(!t)return!1;const{TouchEvent:e}=kt(t.target);return e&&t instanceof e}function th(t){if(j4(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return P4(t)?{x:t.clientX,y:t.clientY}:null}const ri=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[ri.Translate.toString(t),ri.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),Q_="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function A4(t){return t.matches(Q_)?t:t.querySelector(Q_)}const L4={display:"none"};function O4(t){let{id:e,value:n}=t;return ct.createElement("div",{id:e,style:L4},n)}function D4(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const s={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return ct.createElement("div",{id:e,style:s,role:"status","aria-live":r,"aria-atomic":!0},n)}function M4(){const[t,e]=y.useState("");return{announce:y.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const Kx=y.createContext(null);function U4(t){const e=y.useContext(Kx);y.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function z4(){const[t]=y.useState(()=>new Set),e=y.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[y.useCallback(r=>{let{type:s,event:i}=r;t.forEach(o=>{var l;return(l=o[s])==null?void 0:l.call(o,i)})},[t]),e]}const F4={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},B4={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function $4(t){let{announcements:e=B4,container:n,hiddenTextDescribedById:r,screenReaderInstructions:s=F4}=t;const{announce:i,announcement:o}=M4(),l=el("DndLiveRegion"),[a,u]=y.useState(!1);if(y.useEffect(()=>{u(!0)},[]),U4(y.useMemo(()=>({onDragStart(d){let{active:f}=d;i(e.onDragStart({active:f}))},onDragMove(d){let{active:f,over:g}=d;e.onDragMove&&i(e.onDragMove({active:f,over:g}))},onDragOver(d){let{active:f,over:g}=d;i(e.onDragOver({active:f,over:g}))},onDragEnd(d){let{active:f,over:g}=d;i(e.onDragEnd({active:f,over:g}))},onDragCancel(d){let{active:f,over:g}=d;i(e.onDragCancel({active:f,over:g}))}}),[i,e])),!a)return null;const h=ct.createElement(ct.Fragment,null,ct.createElement(O4,{id:r,value:s.draggable}),ct.createElement(D4,{id:l,announcement:o}));return n?Is.createPortal(h,n):h}var De;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(De||(De={}));function Wa(){}function Ha(t,e){return y.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function Jx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return y.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const sn=Object.freeze({x:0,y:0});function W4(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function H4(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function V4(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function Y4(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function G_(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const Zx=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=G_(e,e.left,e.top),i=[];for(const o of r){const{id:l}=o,a=n.get(l);if(a){const u=W4(G_(a),s);i.push({id:l,data:{droppableContainer:o,value:u}})}}return i.sort(H4)};function Q4(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),s=Math.min(e.left+e.width,t.left+t.width),i=Math.min(e.top+e.height,t.top+t.height),o=s-r,l=i-n;if(r<s&&n<i){const a=e.width*e.height,u=t.width*t.height,h=o*l,d=h/(a+u-h);return Number(d.toFixed(4))}return 0}const G4=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const s=[];for(const i of r){const{id:o}=i,l=n.get(o);if(l){const a=Q4(l,e);a>0&&s.push({id:o,data:{droppableContainer:i,value:a}})}}return s.sort(V4)};function q4(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function eb(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:sn}function X4(t){return function(n){for(var r=arguments.length,s=new Array(r>1?r-1:0),i=1;i<r;i++)s[i-1]=arguments[i];return s.reduce((o,l)=>({...o,top:o.top+t*l.y,bottom:o.bottom+t*l.y,left:o.left+t*l.x,right:o.right+t*l.x}),{...n})}}const K4=X4(1);function J4(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function Z4(t,e,n){const r=J4(e);if(!r)return t;const{scaleX:s,scaleY:i,x:o,y:l}=r,a=t.left-o-(1-s)*parseFloat(n),u=t.top-l-(1-i)*parseFloat(n.slice(n.indexOf(" ")+1)),h=s?t.width/s:t.width,d=i?t.height/i:t.height;return{width:h,height:d,top:u,right:a+h,bottom:u+d,left:a}}const eP={ignoreTransform:!1};function mi(t,e){e===void 0&&(e=eP);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:u,transformOrigin:h}=kt(t).getComputedStyle(t);u&&(n=Z4(n,u,h))}const{top:r,left:s,width:i,height:o,bottom:l,right:a}=n;return{top:r,left:s,width:i,height:o,bottom:l,right:a}}function q_(t){return mi(t,{ignoreTransform:!0})}function tP(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function nP(t,e){return e===void 0&&(e=kt(t).getComputedStyle(t)),e.position==="fixed"}function rP(t,e){e===void 0&&(e=kt(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(s=>{const i=e[s];return typeof i=="string"?n.test(i):!1})}function dp(t,e){const n=[];function r(s){if(e!=null&&n.length>=e||!s)return n;if(ap(s)&&s.scrollingElement!=null&&!n.includes(s.scrollingElement))return n.push(s.scrollingElement),n;if(!Jo(s)||qx(s)||n.includes(s))return n;const i=kt(t).getComputedStyle(s);return s!==t&&rP(s,i)&&n.push(s),nP(s,i)?n:r(s.parentNode)}return t?r(t):n}function tb(t){const[e]=dp(t,1);return e??null}function Iu(t){return!Ic||!t?null:fi(t)?t:lp(t)?ap(t)||t===pi(t).scrollingElement?window:Jo(t)?t:null:null}function nb(t){return fi(t)?t.scrollX:t.scrollLeft}function rb(t){return fi(t)?t.scrollY:t.scrollTop}function nh(t){return{x:nb(t),y:rb(t)}}var $e;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})($e||($e={}));function sb(t){return!Ic||!t?!1:t===document.scrollingElement}function ib(t){const e={x:0,y:0},n=sb(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},s=t.scrollTop<=e.y,i=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,l=t.scrollLeft>=r.x;return{isTop:s,isLeft:i,isBottom:o,isRight:l,maxScroll:r,minScroll:e}}const sP={x:.2,y:.2};function iP(t,e,n,r,s){let{top:i,left:o,right:l,bottom:a}=n;r===void 0&&(r=10),s===void 0&&(s=sP);const{isTop:u,isBottom:h,isLeft:d,isRight:f}=ib(t),g={x:0,y:0},v={x:0,y:0},w={height:e.height*s.y,width:e.width*s.x};return!u&&i<=e.top+w.height?(g.y=$e.Backward,v.y=r*Math.abs((e.top+w.height-i)/w.height)):!h&&a>=e.bottom-w.height&&(g.y=$e.Forward,v.y=r*Math.abs((e.bottom-w.height-a)/w.height)),!f&&l>=e.right-w.width?(g.x=$e.Forward,v.x=r*Math.abs((e.right-w.width-l)/w.width)):!d&&o<=e.left+w.width&&(g.x=$e.Backward,v.x=r*Math.abs((e.left+w.width-o)/w.width)),{direction:g,speed:v}}function oP(t){if(t===document.scrollingElement){const{innerWidth:i,innerHeight:o}=window;return{top:0,left:0,right:i,bottom:o,width:i,height:o}}const{top:e,left:n,right:r,bottom:s}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:s,width:t.clientWidth,height:t.clientHeight}}function ob(t){return t.reduce((e,n)=>$s(e,nh(n)),sn)}function lP(t){return t.reduce((e,n)=>e+nb(n),0)}function aP(t){return t.reduce((e,n)=>e+rb(n),0)}function cP(t,e){if(e===void 0&&(e=mi),!t)return;const{top:n,left:r,bottom:s,right:i}=e(t);tb(t)&&(s<=0||i<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const uP=[["x",["left","right"],lP],["y",["top","bottom"],aP]];class hp{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=dp(n),s=ob(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[i,o,l]of uP)for(const a of o)Object.defineProperty(this,a,{get:()=>{const u=l(r),h=s[i]-u;return this.rect[a]+h},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class no{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var s;(s=this.target)==null||s.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function dP(t){const{EventTarget:e}=kt(t);return t instanceof e?t:pi(t)}function Tu(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Dt;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Dt||(Dt={}));function X_(t){t.preventDefault()}function hP(t){t.stopPropagation()}var oe;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(oe||(oe={}));const lb={start:[oe.Space,oe.Enter],cancel:[oe.Esc],end:[oe.Space,oe.Enter,oe.Tab]},fP=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case oe.Right:return{...n,x:n.x+25};case oe.Left:return{...n,x:n.x-25};case oe.Down:return{...n,y:n.y+25};case oe.Up:return{...n,y:n.y-25}}};class ab{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new no(pi(n)),this.windowListeners=new no(kt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Dt.Resize,this.handleCancel),this.windowListeners.add(Dt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Dt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&cP(r),n(sn)}handleKeyDown(e){if(up(e)){const{active:n,context:r,options:s}=this.props,{keyboardCodes:i=lb,coordinateGetter:o=fP,scrollBehavior:l="smooth"}=s,{code:a}=e;if(i.end.includes(a)){this.handleEnd(e);return}if(i.cancel.includes(a)){this.handleCancel(e);return}const{collisionRect:u}=r.current,h=u?{x:u.left,y:u.top}:sn;this.referenceCoordinates||(this.referenceCoordinates=h);const d=o(e,{active:n,context:r.current,currentCoordinates:h});if(d){const f=$a(d,h),g={x:0,y:0},{scrollableAncestors:v}=r.current;for(const w of v){const C=e.code,{isTop:m,isRight:p,isLeft:_,isBottom:k,maxScroll:b,minScroll:S}=ib(w),E=oP(w),N={x:Math.min(C===oe.Right?E.right-E.width/2:E.right,Math.max(C===oe.Right?E.left:E.left+E.width/2,d.x)),y:Math.min(C===oe.Down?E.bottom-E.height/2:E.bottom,Math.max(C===oe.Down?E.top:E.top+E.height/2,d.y))},M=C===oe.Right&&!p||C===oe.Left&&!_,x=C===oe.Down&&!k||C===oe.Up&&!m;if(M&&N.x!==d.x){const T=w.scrollLeft+f.x,R=C===oe.Right&&T<=b.x||C===oe.Left&&T>=S.x;if(R&&!f.y){w.scrollTo({left:T,behavior:l});return}R?g.x=w.scrollLeft-T:g.x=C===oe.Right?w.scrollLeft-b.x:w.scrollLeft-S.x,g.x&&w.scrollBy({left:-g.x,behavior:l});break}else if(x&&N.y!==d.y){const T=w.scrollTop+f.y,R=C===oe.Down&&T<=b.y||C===oe.Up&&T>=S.y;if(R&&!f.x){w.scrollTo({top:T,behavior:l});return}R?g.y=w.scrollTop-T:g.y=C===oe.Down?w.scrollTop-b.y:w.scrollTop-S.y,g.y&&w.scrollBy({top:-g.y,behavior:l});break}}this.handleMove(e,$s($a(d,this.referenceCoordinates),g))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}ab.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=lb,onActivation:s}=e,{active:i}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const l=i.activatorNode.current;return l&&t.target!==l?!1:(t.preventDefault(),s==null||s({event:t.nativeEvent}),!0)}return!1}}];function K_(t){return!!(t&&"distance"in t)}function J_(t){return!!(t&&"delay"in t)}class fp{constructor(e,n,r){var s;r===void 0&&(r=dP(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:i}=e,{target:o}=i;this.props=e,this.events=n,this.document=pi(o),this.documentListeners=new no(this.document),this.listeners=new no(r),this.windowListeners=new no(kt(o)),this.initialCoordinates=(s=th(i))!=null?s:sn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Dt.Resize,this.handleCancel),this.windowListeners.add(Dt.DragStart,X_),this.windowListeners.add(Dt.VisibilityChange,this.handleCancel),this.windowListeners.add(Dt.ContextMenu,X_),this.documentListeners.add(Dt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(J_(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(K_(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:s}=this.props;s(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Dt.Click,hP,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Dt.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:s,props:i}=this,{onMove:o,options:{activationConstraint:l}}=i;if(!s)return;const a=(n=th(e))!=null?n:sn,u=$a(s,a);if(!r&&l){if(K_(l)){if(l.tolerance!=null&&Tu(u,l.tolerance))return this.handleCancel();if(Tu(u,l.distance))return this.handleStart()}if(J_(l)&&Tu(u,l.tolerance))return this.handleCancel();this.handlePending(l,u);return}e.cancelable&&e.preventDefault(),o(a)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===oe.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const pP={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class Tc extends fp{constructor(e){const{event:n}=e,r=pi(n.target);super(e,pP,r)}}Tc.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const mP={move:{name:"mousemove"},end:{name:"mouseup"}};var rh;(function(t){t[t.RightClick=2]="RightClick"})(rh||(rh={}));class _P extends fp{constructor(e){super(e,mP,pi(e.event.target))}}_P.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===rh.RightClick?!1:(r==null||r({event:n}),!0)}}];const Ru={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class pp extends fp{constructor(e){super(e,Ru)}static setup(){return window.addEventListener(Ru.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Ru.move.name,e)};function e(){}}}pp.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:s}=n;return s.length>1?!1:(r==null||r({event:n}),!0)}}];var ro;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(ro||(ro={}));var Va;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(Va||(Va={}));function gP(t){let{acceleration:e,activator:n=ro.Pointer,canScroll:r,draggingRect:s,enabled:i,interval:o=5,order:l=Va.TreeOrder,pointerCoordinates:a,scrollableAncestors:u,scrollableAncestorRects:h,delta:d,threshold:f}=t;const g=vP({delta:d,disabled:!i}),[v,w]=R4(),C=y.useRef({x:0,y:0}),m=y.useRef({x:0,y:0}),p=y.useMemo(()=>{switch(n){case ro.Pointer:return a?{top:a.y,bottom:a.y,left:a.x,right:a.x}:null;case ro.DraggableRect:return s}},[n,s,a]),_=y.useRef(null),k=y.useCallback(()=>{const S=_.current;if(!S)return;const E=C.current.x*m.current.x,N=C.current.y*m.current.y;S.scrollBy(E,N)},[]),b=y.useMemo(()=>l===Va.TreeOrder?[...u].reverse():u,[l,u]);y.useEffect(()=>{if(!i||!u.length||!p){w();return}for(const S of b){if((r==null?void 0:r(S))===!1)continue;const E=u.indexOf(S),N=h[E];if(!N)continue;const{direction:M,speed:x}=iP(S,N,p,e,f);for(const T of["x","y"])g[T][M[T]]||(x[T]=0,M[T]=0);if(x.x>0||x.y>0){w(),_.current=S,v(k,o),C.current=x,m.current=M;return}}C.current={x:0,y:0},m.current={x:0,y:0},w()},[e,k,r,w,i,o,JSON.stringify(p),JSON.stringify(g),v,u,b,h,JSON.stringify(f)])}const yP={x:{[$e.Backward]:!1,[$e.Forward]:!1},y:{[$e.Backward]:!1,[$e.Forward]:!1}};function vP(t){let{delta:e,disabled:n}=t;const r=eh(e);return Zo(s=>{if(n||!r||!s)return yP;const i={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[$e.Backward]:s.x[$e.Backward]||i.x===-1,[$e.Forward]:s.x[$e.Forward]||i.x===1},y:{[$e.Backward]:s.y[$e.Backward]||i.y===-1,[$e.Forward]:s.y[$e.Forward]||i.y===1}}},[n,e,r])}function xP(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return Zo(s=>{var i;return e==null?null:(i=r??s)!=null?i:null},[r,e])}function bP(t,e){return y.useMemo(()=>t.reduce((n,r)=>{const{sensor:s}=r,i=s.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...i]},[]),[t,e])}var Mo;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Mo||(Mo={}));var sh;(function(t){t.Optimized="optimized"})(sh||(sh={}));const Z_=new Map;function wP(t,e){let{dragging:n,dependencies:r,config:s}=e;const[i,o]=y.useState(null),{frequency:l,measure:a,strategy:u}=s,h=y.useRef(t),d=C(),f=Do(d),g=y.useCallback(function(m){m===void 0&&(m=[]),!f.current&&o(p=>p===null?m:p.concat(m.filter(_=>!p.includes(_))))},[f]),v=y.useRef(null),w=Zo(m=>{if(d&&!n)return Z_;if(!m||m===Z_||h.current!==t||i!=null){const p=new Map;for(let _ of t){if(!_)continue;if(i&&i.length>0&&!i.includes(_.id)&&_.rect.current){p.set(_.id,_.rect.current);continue}const k=_.node.current,b=k?new hp(a(k),k):null;_.rect.current=b,b&&p.set(_.id,b)}return p}return m},[t,i,n,d,a]);return y.useEffect(()=>{h.current=t},[t]),y.useEffect(()=>{d||g()},[n,d]),y.useEffect(()=>{i&&i.length>0&&o(null)},[JSON.stringify(i)]),y.useEffect(()=>{d||typeof l!="number"||v.current!==null||(v.current=setTimeout(()=>{g(),v.current=null},l))},[l,d,g,...r]),{droppableRects:w,measureDroppableContainers:g,measuringScheduled:i!=null};function C(){switch(u){case Mo.Always:return!1;case Mo.BeforeDragging:return n;default:return!n}}}function cb(t,e){return Zo(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function kP(t,e){return cb(t,e)}function CP(t){let{callback:e,disabled:n}=t;const r=cp(e),s=y.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:i}=window;return new i(r)},[r,n]);return y.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function Rc(t){let{callback:e,disabled:n}=t;const r=cp(e),s=y.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:i}=window;return new i(r)},[n]);return y.useEffect(()=>()=>s==null?void 0:s.disconnect(),[s]),s}function SP(t){return new hp(mi(t),t)}function e0(t,e,n){e===void 0&&(e=SP);const[r,s]=y.useState(null);function i(){s(a=>{if(!t)return null;if(t.isConnected===!1){var u;return(u=a??n)!=null?u:null}const h=e(t);return JSON.stringify(a)===JSON.stringify(h)?a:h})}const o=CP({callback(a){if(t)for(const u of a){const{type:h,target:d}=u;if(h==="childList"&&d instanceof HTMLElement&&d.contains(t)){i();break}}}}),l=Rc({callback:i});return yn(()=>{i(),t?(l==null||l.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(l==null||l.disconnect(),o==null||o.disconnect())},[t]),r}function EP(t){const e=cb(t);return eb(t,e)}const t0=[];function NP(t){const e=y.useRef(t),n=Zo(r=>t?r&&r!==t0&&t&&e.current&&t.parentNode===e.current.parentNode?r:dp(t):t0,[t]);return y.useEffect(()=>{e.current=t},[t]),n}function IP(t){const[e,n]=y.useState(null),r=y.useRef(t),s=y.useCallback(i=>{const o=Iu(i.target);o&&n(l=>l?(l.set(o,nh(o)),new Map(l)):null)},[]);return y.useEffect(()=>{const i=r.current;if(t!==i){o(i);const l=t.map(a=>{const u=Iu(a);return u?(u.addEventListener("scroll",s,{passive:!0}),[u,nh(u)]):null}).filter(a=>a!=null);n(l.length?new Map(l):null),r.current=t}return()=>{o(t),o(i)};function o(l){l.forEach(a=>{const u=Iu(a);u==null||u.removeEventListener("scroll",s)})}},[s,t]),y.useMemo(()=>t.length?e?Array.from(e.values()).reduce((i,o)=>$s(i,o),sn):ob(t):sn,[t,e])}function n0(t,e){e===void 0&&(e=[]);const n=y.useRef(null);return y.useEffect(()=>{n.current=null},e),y.useEffect(()=>{const r=t!==sn;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?$a(t,n.current):sn}function TP(t){y.useEffect(()=>{if(!Ic)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function RP(t,e){return y.useMemo(()=>t.reduce((n,r)=>{let{eventName:s,handler:i}=r;return n[s]=o=>{i(o,e)},n},{}),[t,e])}function ub(t){return y.useMemo(()=>t?tP(t):null,[t])}const r0=[];function PP(t,e){e===void 0&&(e=mi);const[n]=t,r=ub(n?kt(n):null),[s,i]=y.useState(r0);function o(){i(()=>t.length?t.map(a=>sb(a)?r:new hp(e(a),a)):r0)}const l=Rc({callback:o});return yn(()=>{l==null||l.disconnect(),o(),t.forEach(a=>l==null?void 0:l.observe(a))},[t]),s}function jP(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return Jo(e)?e:t}function AP(t){let{measure:e}=t;const[n,r]=y.useState(null),s=y.useCallback(u=>{for(const{target:h}of u)if(Jo(h)){r(d=>{const f=e(h);return d?{...d,width:f.width,height:f.height}:f});break}},[e]),i=Rc({callback:s}),o=y.useCallback(u=>{const h=jP(u);i==null||i.disconnect(),h&&(i==null||i.observe(h)),r(h?e(h):null)},[e,i]),[l,a]=Ba(o);return y.useMemo(()=>({nodeRef:l,rect:n,setRef:a}),[n,l,a])}const LP=[{sensor:Tc,options:{}},{sensor:ab,options:{}}],OP={current:{}},Yl={draggable:{measure:q_},droppable:{measure:q_,strategy:Mo.WhileDragging,frequency:sh.Optimized},dragOverlay:{measure:mi}};class so extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const DP={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new so,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Wa},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Yl,measureDroppableContainers:Wa,windowRect:null,measuringScheduled:!1},MP={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Wa,draggableNodes:new Map,over:null,measureDroppableContainers:Wa},Pc=y.createContext(MP),db=y.createContext(DP);function UP(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new so}}}function zP(t,e){switch(e.type){case De.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case De.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case De.DragEnd:case De.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case De.RegisterDroppable:{const{element:n}=e,{id:r}=n,s=new so(t.droppable.containers);return s.set(r,n),{...t,droppable:{...t.droppable,containers:s}}}case De.SetDroppableDisabled:{const{id:n,key:r,disabled:s}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const o=new so(t.droppable.containers);return o.set(n,{...i,disabled:s}),{...t,droppable:{...t.droppable,containers:o}}}case De.UnregisterDroppable:{const{id:n,key:r}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const i=new so(t.droppable.containers);return i.delete(n),{...t,droppable:{...t.droppable,containers:i}}}default:return t}}function FP(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:s}=y.useContext(Pc),i=eh(r),o=eh(n==null?void 0:n.id);return y.useEffect(()=>{if(!e&&!r&&i&&o!=null){if(!up(i)||document.activeElement===i.target)return;const l=s.get(o);if(!l)return;const{activatorNode:a,node:u}=l;if(!a.current&&!u.current)return;requestAnimationFrame(()=>{for(const h of[a.current,u.current]){if(!h)continue;const d=A4(h);if(d){d.focus();break}}})}},[r,e,s,o,i]),null}function BP(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((s,i)=>i({transform:s,...r}),n):n}function $P(t){return y.useMemo(()=>({draggable:{...Yl.draggable,...t==null?void 0:t.draggable},droppable:{...Yl.droppable,...t==null?void 0:t.droppable},dragOverlay:{...Yl.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function WP(t){let{activeNode:e,measure:n,initialRect:r,config:s=!0}=t;const i=y.useRef(!1),{x:o,y:l}=typeof s=="boolean"?{x:s,y:s}:s;yn(()=>{if(!o&&!l||!e){i.current=!1;return}if(i.current||!r)return;const u=e==null?void 0:e.node.current;if(!u||u.isConnected===!1)return;const h=n(u),d=eb(h,r);if(o||(d.x=0),l||(d.y=0),i.current=!0,Math.abs(d.x)>0||Math.abs(d.y)>0){const f=tb(u);f&&f.scrollBy({top:d.y,left:d.x})}},[e,o,l,r,n])}const hb=y.createContext({...sn,scaleX:1,scaleY:1});var er;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(er||(er={}));const fb=y.memo(function(e){var n,r,s,i;let{id:o,accessibility:l,autoScroll:a=!0,children:u,sensors:h=LP,collisionDetection:d=G4,measuring:f,modifiers:g,...v}=e;const w=y.useReducer(zP,void 0,UP),[C,m]=w,[p,_]=z4(),[k,b]=y.useState(er.Uninitialized),S=k===er.Initialized,{draggable:{active:E,nodes:N,translate:M},droppable:{containers:x}}=C,T=E!=null?N.get(E):null,R=y.useRef({initial:null,translated:null}),B=y.useMemo(()=>{var nt;return E!=null?{id:E,data:(nt=T==null?void 0:T.data)!=null?nt:OP,rect:R}:null},[E,T]),V=y.useRef(null),[Y,ne]=y.useState(null),[re,O]=y.useState(null),I=Do(v,Object.values(v)),A=el("DndDescribedBy",o),z=y.useMemo(()=>x.getEnabled(),[x]),U=$P(f),{droppableRects:se,measureDroppableContainers:he,measuringScheduled:P}=wP(z,{dragging:S,dependencies:[M.x,M.y],config:U.droppable}),F=xP(N,E),X=y.useMemo(()=>re?th(re):null,[re]),Ce=Sb(),ce=kP(F,U.draggable.measure);WP({activeNode:E!=null?N.get(E):null,config:Ce.layoutShiftCompensation,initialRect:ce,measure:U.draggable.measure});const Z=e0(F,U.draggable.measure,ce),xn=e0(F?F.parentElement:null),tt=y.useRef({activatorEvent:null,active:null,activeNode:F,collisionRect:null,collisions:null,droppableRects:se,draggableNodes:N,draggingNode:null,draggingNodeRect:null,droppableContainers:x,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),bn=x.getNodeFor((n=tt.current.over)==null?void 0:n.id),Ht=AP({measure:U.dragOverlay.measure}),Hn=(r=Ht.nodeRef.current)!=null?r:F,Vn=S?(s=Ht.rect)!=null?s:Z:null,tl=!!(Ht.nodeRef.current&&Ht.rect),nl=EP(tl?null:Z),_i=ub(Hn?kt(Hn):null),on=NP(S?bn??F:null),Ar=PP(on),Lr=BP(g,{transform:{x:M.x-nl.x,y:M.y-nl.y,scaleX:1,scaleY:1},activatorEvent:re,active:B,activeNodeRect:Z,containerNodeRect:xn,draggingNodeRect:Vn,over:tt.current.over,overlayNodeRect:Ht.rect,scrollableAncestors:on,scrollableAncestorRects:Ar,windowRect:_i}),gi=X?$s(X,M):null,yi=IP(on),rl=n0(yi),L=n0(yi,[Z]),H=$s(Lr,rl),Q=Vn?K4(Vn,Lr):null,fe=B&&Q?d({active:B,collisionRect:Q,droppableRects:se,droppableContainers:z,pointerCoordinates:gi}):null,Re=Y4(fe,"id"),[Ye,Vt]=y.useState(null),Ct=tl?Lr:$s(Lr,L),bb=q4(Ct,(i=Ye==null?void 0:Ye.rect)!=null?i:null,Z),Ac=y.useRef(null),mp=y.useCallback((nt,St)=>{let{sensor:Et,options:Yn}=St;if(V.current==null)return;const Ot=N.get(V.current);if(!Ot)return;const Nt=nt.nativeEvent,ln=new Et({active:V.current,activeNode:Ot,event:Nt,options:Yn,context:tt,onAbort(Qe){if(!N.get(Qe))return;const{onDragAbort:an}=I.current,wn={id:Qe};an==null||an(wn),p({type:"onDragAbort",event:wn})},onPending(Qe,Qn,an,wn){if(!N.get(Qe))return;const{onDragPending:xi}=I.current,Gn={id:Qe,constraint:Qn,initialCoordinates:an,offset:wn};xi==null||xi(Gn),p({type:"onDragPending",event:Gn})},onStart(Qe){const Qn=V.current;if(Qn==null)return;const an=N.get(Qn);if(!an)return;const{onDragStart:wn}=I.current,vi={activatorEvent:Nt,active:{id:Qn,data:an.data,rect:R}};Is.unstable_batchedUpdates(()=>{wn==null||wn(vi),b(er.Initializing),m({type:De.DragStart,initialCoordinates:Qe,active:Qn}),p({type:"onDragStart",event:vi}),ne(Ac.current),O(Nt)})},onMove(Qe){m({type:De.DragMove,coordinates:Qe})},onEnd:ds(De.DragEnd),onCancel:ds(De.DragCancel)});Ac.current=ln;function ds(Qe){return async function(){const{active:an,collisions:wn,over:vi,scrollAdjustedTranslate:xi}=tt.current;let Gn=null;if(an&&xi){const{cancelDrop:bi}=I.current;Gn={activatorEvent:Nt,active:an,collisions:wn,delta:xi,over:vi},Qe===De.DragEnd&&typeof bi=="function"&&await Promise.resolve(bi(Gn))&&(Qe=De.DragCancel)}V.current=null,Is.unstable_batchedUpdates(()=>{m({type:Qe}),b(er.Uninitialized),Vt(null),ne(null),O(null),Ac.current=null;const bi=Qe===De.DragEnd?"onDragEnd":"onDragCancel";if(Gn){const Lc=I.current[bi];Lc==null||Lc(Gn),p({type:bi,event:Gn})}})}}},[N]),wb=y.useCallback((nt,St)=>(Et,Yn)=>{const Ot=Et.nativeEvent,Nt=N.get(Yn);if(V.current!==null||!Nt||Ot.dndKit||Ot.defaultPrevented)return;const ln={active:Nt};nt(Et,St.options,ln)===!0&&(Ot.dndKit={capturedBy:St.sensor},V.current=Yn,mp(Et,St))},[N,mp]),_p=bP(h,wb);TP(h),yn(()=>{Z&&k===er.Initializing&&b(er.Initialized)},[Z,k]),y.useEffect(()=>{const{onDragMove:nt}=I.current,{active:St,activatorEvent:Et,collisions:Yn,over:Ot}=tt.current;if(!St||!Et)return;const Nt={active:St,activatorEvent:Et,collisions:Yn,delta:{x:H.x,y:H.y},over:Ot};Is.unstable_batchedUpdates(()=>{nt==null||nt(Nt),p({type:"onDragMove",event:Nt})})},[H.x,H.y]),y.useEffect(()=>{const{active:nt,activatorEvent:St,collisions:Et,droppableContainers:Yn,scrollAdjustedTranslate:Ot}=tt.current;if(!nt||V.current==null||!St||!Ot)return;const{onDragOver:Nt}=I.current,ln=Yn.get(Re),ds=ln&&ln.rect.current?{id:ln.id,rect:ln.rect.current,data:ln.data,disabled:ln.disabled}:null,Qe={active:nt,activatorEvent:St,collisions:Et,delta:{x:Ot.x,y:Ot.y},over:ds};Is.unstable_batchedUpdates(()=>{Vt(ds),Nt==null||Nt(Qe),p({type:"onDragOver",event:Qe})})},[Re]),yn(()=>{tt.current={activatorEvent:re,active:B,activeNode:F,collisionRect:Q,collisions:fe,droppableRects:se,draggableNodes:N,draggingNode:Hn,draggingNodeRect:Vn,droppableContainers:x,over:Ye,scrollableAncestors:on,scrollAdjustedTranslate:H},R.current={initial:Vn,translated:Q}},[B,F,fe,Q,N,Hn,Vn,se,x,Ye,on,H]),gP({...Ce,delta:M,draggingRect:Q,pointerCoordinates:gi,scrollableAncestors:on,scrollableAncestorRects:Ar});const kb=y.useMemo(()=>({active:B,activeNode:F,activeNodeRect:Z,activatorEvent:re,collisions:fe,containerNodeRect:xn,dragOverlay:Ht,draggableNodes:N,droppableContainers:x,droppableRects:se,over:Ye,measureDroppableContainers:he,scrollableAncestors:on,scrollableAncestorRects:Ar,measuringConfiguration:U,measuringScheduled:P,windowRect:_i}),[B,F,Z,re,fe,xn,Ht,N,x,se,Ye,he,on,Ar,U,P,_i]),Cb=y.useMemo(()=>({activatorEvent:re,activators:_p,active:B,activeNodeRect:Z,ariaDescribedById:{draggable:A},dispatch:m,draggableNodes:N,over:Ye,measureDroppableContainers:he}),[re,_p,B,Z,m,A,N,Ye,he]);return ct.createElement(Kx.Provider,{value:_},ct.createElement(Pc.Provider,{value:Cb},ct.createElement(db.Provider,{value:kb},ct.createElement(hb.Provider,{value:bb},u)),ct.createElement(FP,{disabled:(l==null?void 0:l.restoreFocus)===!1})),ct.createElement($4,{...l,hiddenTextDescribedById:A}));function Sb(){const nt=(Y==null?void 0:Y.autoScrollEnabled)===!1,St=typeof a=="object"?a.enabled===!1:a===!1,Et=S&&!nt&&!St;return typeof a=="object"?{...a,enabled:Et}:{enabled:Et}}}),HP=y.createContext(null),s0="button",VP="Draggable";function YP(t){let{id:e,data:n,disabled:r=!1,attributes:s}=t;const i=el(VP),{activators:o,activatorEvent:l,active:a,activeNodeRect:u,ariaDescribedById:h,draggableNodes:d,over:f}=y.useContext(Pc),{role:g=s0,roleDescription:v="draggable",tabIndex:w=0}=s??{},C=(a==null?void 0:a.id)===e,m=y.useContext(C?hb:HP),[p,_]=Ba(),[k,b]=Ba(),S=RP(o,e),E=Do(n);yn(()=>(d.set(e,{id:e,key:i,node:p,activatorNode:k,data:E}),()=>{const M=d.get(e);M&&M.key===i&&d.delete(e)}),[d,e]);const N=y.useMemo(()=>({role:g,tabIndex:w,"aria-disabled":r,"aria-pressed":C&&g===s0?!0:void 0,"aria-roledescription":v,"aria-describedby":h.draggable}),[r,g,w,C,v,h.draggable]);return{active:a,activatorEvent:l,activeNodeRect:u,attributes:N,isDragging:C,listeners:r?void 0:S,node:p,over:f,setNodeRef:_,setActivatorNodeRef:b,transform:m}}function QP(){return y.useContext(db)}const GP="Droppable",qP={timeout:25};function XP(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:s}=t;const i=el(GP),{active:o,dispatch:l,over:a,measureDroppableContainers:u}=y.useContext(Pc),h=y.useRef({disabled:n}),d=y.useRef(!1),f=y.useRef(null),g=y.useRef(null),{disabled:v,updateMeasurementsFor:w,timeout:C}={...qP,...s},m=Do(w??r),p=y.useCallback(()=>{if(!d.current){d.current=!0;return}g.current!=null&&clearTimeout(g.current),g.current=setTimeout(()=>{u(Array.isArray(m.current)?m.current:[m.current]),g.current=null},C)},[C]),_=Rc({callback:p,disabled:v||!o}),k=y.useCallback((N,M)=>{_&&(M&&(_.unobserve(M),d.current=!1),N&&_.observe(N))},[_]),[b,S]=Ba(k),E=Do(e);return y.useEffect(()=>{!_||!b.current||(_.disconnect(),d.current=!1,_.observe(b.current))},[b,_]),y.useEffect(()=>(l({type:De.RegisterDroppable,element:{id:r,key:i,disabled:n,node:b,rect:f,data:E}}),()=>l({type:De.UnregisterDroppable,key:i,id:r})),[r]),y.useEffect(()=>{n!==h.current.disabled&&(l({type:De.SetDroppableDisabled,id:r,key:i,disabled:n}),h.current.disabled=n)},[r,i,n,l]),{active:o,rect:f,isOver:(a==null?void 0:a.id)===r,node:b,over:a,setNodeRef:S}}function jc(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function KP(t,e){return t.reduce((n,r,s)=>{const i=e.get(r);return i&&(n[s]=i),n},Array(t.length))}function El(t){return t!==null&&t>=0}function JP(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function ZP(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const pb=t=>{let{rects:e,activeIndex:n,overIndex:r,index:s}=t;const i=jc(e,r,n),o=e[s],l=i[s];return!l||!o?null:{x:l.left-o.left,y:l.top-o.top,scaleX:l.width/o.width,scaleY:l.height/o.height}},Nl={scaleX:1,scaleY:1},mb=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:s,rects:i,overIndex:o}=t;const l=(e=i[n])!=null?e:r;if(!l)return null;if(s===n){const u=i[o];return u?{x:0,y:n<o?u.top+u.height-(l.top+l.height):u.top-l.top,...Nl}:null}const a=ej(i,s,n);return s>n&&s<=o?{x:0,y:-l.height-a,...Nl}:s<n&&s>=o?{x:0,y:l.height+a,...Nl}:{x:0,y:0,...Nl}};function ej(t,e,n){const r=t[e],s=t[e-1],i=t[e+1];return r?n<e?s?r.top-(s.top+s.height):i?i.top-(r.top+r.height):0:i?i.top-(r.top+r.height):s?r.top-(s.top+s.height):0:0}const _b="Sortable",gb=ct.createContext({activeIndex:-1,containerId:_b,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:pb,disabled:{draggable:!1,droppable:!1}});function yb(t){let{children:e,id:n,items:r,strategy:s=pb,disabled:i=!1}=t;const{active:o,dragOverlay:l,droppableRects:a,over:u,measureDroppableContainers:h}=QP(),d=el(_b,n),f=l.rect!==null,g=y.useMemo(()=>r.map(S=>typeof S=="object"&&"id"in S?S.id:S),[r]),v=o!=null,w=o?g.indexOf(o.id):-1,C=u?g.indexOf(u.id):-1,m=y.useRef(g),p=!JP(g,m.current),_=C!==-1&&w===-1||p,k=ZP(i);yn(()=>{p&&v&&h(g)},[p,g,v,h]),y.useEffect(()=>{m.current=g},[g]);const b=y.useMemo(()=>({activeIndex:w,containerId:d,disabled:k,disableTransforms:_,items:g,overIndex:C,useDragOverlay:f,sortedRects:KP(g,a),strategy:s}),[w,d,k.draggable,k.droppable,_,g,C,a,f,s]);return ct.createElement(gb.Provider,{value:b},e)}const tj=t=>{let{id:e,items:n,activeIndex:r,overIndex:s}=t;return jc(n,r,s).indexOf(e)},nj=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:s,items:i,newIndex:o,previousItems:l,previousContainerId:a,transition:u}=t;return!u||!r||l!==i&&s===o?!1:n?!0:o!==s&&e===a},rj={duration:200,easing:"ease"},vb="transform",sj=ri.Transition.toString({property:vb,duration:0,easing:"linear"}),ij={roleDescription:"sortable"};function oj(t){let{disabled:e,index:n,node:r,rect:s}=t;const[i,o]=y.useState(null),l=y.useRef(n);return yn(()=>{if(!e&&n!==l.current&&r.current){const a=s.current;if(a){const u=mi(r.current,{ignoreTransform:!0}),h={x:a.left-u.left,y:a.top-u.top,scaleX:a.width/u.width,scaleY:a.height/u.height};(h.x||h.y)&&o(h)}}n!==l.current&&(l.current=n)},[e,n,r,s]),y.useEffect(()=>{i&&o(null)},[i]),i}function xb(t){let{animateLayoutChanges:e=nj,attributes:n,disabled:r,data:s,getNewIndex:i=tj,id:o,strategy:l,resizeObserverConfig:a,transition:u=rj}=t;const{items:h,containerId:d,activeIndex:f,disabled:g,disableTransforms:v,sortedRects:w,overIndex:C,useDragOverlay:m,strategy:p}=y.useContext(gb),_=lj(r,g),k=h.indexOf(o),b=y.useMemo(()=>({sortable:{containerId:d,index:k,items:h},...s}),[d,s,k,h]),S=y.useMemo(()=>h.slice(h.indexOf(o)),[h,o]),{rect:E,node:N,isOver:M,setNodeRef:x}=XP({id:o,data:b,disabled:_.droppable,resizeObserverConfig:{updateMeasurementsFor:S,...a}}),{active:T,activatorEvent:R,activeNodeRect:B,attributes:V,setNodeRef:Y,listeners:ne,isDragging:re,over:O,setActivatorNodeRef:I,transform:A}=YP({id:o,data:b,attributes:{...ij,...n},disabled:_.draggable}),z=T4(x,Y),U=!!T,se=U&&!v&&El(f)&&El(C),he=!m&&re,P=he&&se?A:null,X=se?P??(l??p)({rects:w,activeNodeRect:B,activeIndex:f,overIndex:C,index:k}):null,Ce=El(f)&&El(C)?i({id:o,items:h,activeIndex:f,overIndex:C}):k,ce=T==null?void 0:T.id,Z=y.useRef({activeId:ce,items:h,newIndex:Ce,containerId:d}),xn=h!==Z.current.items,tt=e({active:T,containerId:d,isDragging:re,isSorting:U,id:o,index:k,items:h,newIndex:Z.current.newIndex,previousItems:Z.current.items,previousContainerId:Z.current.containerId,transition:u,wasDragging:Z.current.activeId!=null}),bn=oj({disabled:!tt,index:k,node:N,rect:E});return y.useEffect(()=>{U&&Z.current.newIndex!==Ce&&(Z.current.newIndex=Ce),d!==Z.current.containerId&&(Z.current.containerId=d),h!==Z.current.items&&(Z.current.items=h)},[U,Ce,d,h]),y.useEffect(()=>{if(ce===Z.current.activeId)return;if(ce!=null&&Z.current.activeId==null){Z.current.activeId=ce;return}const Hn=setTimeout(()=>{Z.current.activeId=ce},50);return()=>clearTimeout(Hn)},[ce]),{active:T,activeIndex:f,attributes:V,data:b,rect:E,index:k,newIndex:Ce,items:h,isOver:M,isSorting:U,isDragging:re,listeners:ne,node:N,overIndex:C,over:O,setNodeRef:z,setActivatorNodeRef:I,setDroppableNodeRef:x,setDraggableNodeRef:Y,transform:bn??X,transition:Ht()};function Ht(){if(bn||xn&&Z.current.newIndex===k)return sj;if(!(he&&!up(R)||!u)&&(U||tt))return ri.Transition.toString({...u,property:vb})}}function lj(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}oe.Down,oe.Right,oe.Up,oe.Left;const i0={"clipboard-list":Kd,footprints:dR,briefcase:DT,plane:XR,"person-standing":GR,backpack:RT,umbrella:w4,tent:v4,target:g4,"shopping-cart":o4,shirt:s4,dumbbell:oR,mountain:FR,baby:jT,camera:ip,heart:yR,music:$R,"book-open":LT,coffee:eR,gift:mR},o0={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function aj(t){return o0[t]?i0[o0[t]]||Kd:i0[t]||Kd}function io({name:t,size:e=20,className:n=""}){const r=aj(t);return c.jsx(r,{size:e,className:n})}function Pu({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function cj(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return c.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>c.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsxs("div",{className:"animate-celebration-text text-center",children:[c.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),c.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function uj({item:t}){const{attributes:e,listeners:n,setNodeRef:r,transform:s,transition:i,isDragging:o}=xb({id:t.id}),l={transform:ri.Transform.toString(s),transition:i,zIndex:o?50:void 0,position:"relative"};return c.jsx("div",{ref:r,style:l,children:c.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${o?"shadow-lg opacity-90":""}`,children:[c.jsx("div",{...e,...n,className:"w-6 h-6 mr-4 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:c.jsx(Vx,{size:20})}),c.jsx("div",{className:"flex-1 min-w-0",children:c.jsx("div",{className:"text-lg text-slate-800 dark:text-slate-100",children:t.name})})]})})}function dj({data:t,user:e,syncStatus:n,onLogin:r,onLogout:s,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:a}){var gi,yi,rl;const[u,h]=y.useState([]),[d,f]=y.useState(null),[g,v]=y.useState(null),[w,C]=y.useState([]),[m,p]=y.useState(!1),[_,k]=y.useState("default"),[b,S]=y.useState(!1),[E,N]=y.useState(""),[M,x]=y.useState(Ke[0]),[T,R]=y.useState(null),B=a&&((gi=l==null?void 0:l.sharedWithMe)==null?void 0:gi[a]),V=a&&((yi=l==null?void 0:l.sharedByMe)==null?void 0:yi[a]),Y=B?"shared-with-me":V?"own-shared":"local",ne=B?l.sharedWithMe[a]:V?l.sharedByMe[a]:null,re=Y!=="shared-with-me"||(()=>{if(!(e!=null&&e.email)||!(ne!=null&&ne.sharedWith))return!1;const L=Zn(e.email);return ne.sharedWith[L]==="edit"})(),O=(rl=t.lists)==null?void 0:rl.find(L=>L.id===t.activeListId),I=O?{...O,items:Array.isArray(O.items)?O.items:[],checkedItems:Array.isArray(O.checkedItems)?O.checkedItems:[]}:null;let A=[],z=[],U="",se="",he="";Y==="shared-with-me"&&ne?(A=(ne.items||[]).filter(Boolean),z=ne.checkedItems||[],U=ne.name||"清單",se=ne.icon||"clipboard-list",he=ne.ownerName||ne.ownerEmail||""):Y==="own-shared"&&I&&ne?(A=I.items.map(L=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(Q=>Q.id===L)}).filter(Boolean),z=ne.checkedItems||[],U=I.name||"清單",se=I.icon||"clipboard-list"):(A=I?I.items.map(L=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(Q=>Q.id===L)}).filter(Boolean):[],z=(I==null?void 0:I.checkedItems)||[],U=(I==null?void 0:I.name)||"清單",se=(I==null?void 0:I.icon)||"clipboard-list");const P=z.length,F=A.length,X=F>0&&P===F,Ce=F>0?P/F*100:0,ce=y.useRef(X);y.useEffect(()=>{if(X&&!ce.current){p(!0);const L=setTimeout(()=>p(!1),2500);return()=>clearTimeout(L)}ce.current=X},[X]);const Z=(()=>{const L=[],H={};return A.forEach(Q=>{const fe=Q.category||"其他";H[fe]||(H[fe]=[]),H[fe].push(Q)}),Ke.forEach(Q=>{H[Q]&&(L.push({category:Q,items:H[Q]}),delete H[Q])}),Object.keys(H).forEach(Q=>{L.push({category:Q,items:H[Q]})}),L})(),xn=_==="name"?[...A].sort((L,H)=>L.name.localeCompare(H.name,"zh-Hant")):_==="unchecked"?[...A].sort((L,H)=>{const Q=z.includes(L.id)?1:0,fe=z.includes(H.id)?1:0;return Q-fe}):A,tt=()=>{k(L=>L==="default"?"name":L==="name"?"unchecked":L==="unchecked"?Y==="shared-with-me"?"default":"manual":"default")},bn=_==="name"?"名稱":_==="unchecked"?"未勾選":_==="manual"?"手動":"",Ht=Jx(Ha(Tc,{activationConstraint:{distance:5}}),Ha(pp,{activationConstraint:{delay:150,tolerance:5}})),Hn=L=>{const{active:H,over:Q}=L;if(!Q||H.id===Q.id)return;const fe=I.items.indexOf(H.id),Re=I.items.indexOf(Q.id);if(fe===-1||Re===-1)return;const Ye=jc(I.items,fe,Re),Vt={...t,lists:t.lists.map(Ct=>Ct.id===t.activeListId?{...Ct,items:Ye}:Ct)};o(Vt)},Vn=L=>{if(v(L),Y==="shared-with-me"||Y==="own-shared")l.toggleSharedCheck(a,L);else{const H={...t,lists:t.lists.map(Q=>{if(Q.id!==t.activeListId)return Q;const fe=Array.isArray(Q.checkedItems)?Q.checkedItems:[],Re=fe.includes(L);return{...Q,checkedItems:Re?fe.filter(Ye=>Ye!==L):[...fe,L]}})};o(H)}},tl=()=>{if(Y==="shared-with-me"||Y==="own-shared")l.resetSharedChecks(a);else{const L={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[]}:H)};o(L)}},nl=()=>{if(Y==="shared-with-me"||Y==="own-shared"){const L=A.map(H=>H.id);l.checkAllShared(a,L)}else{if(!I)return;const L={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[...I.items]}:H)};o(L)}},_i=L=>{h(H=>H.includes(L)?H.filter(Q=>Q!==L):[...H,L])},on=L=>{C(H=>H.includes(L)?H.filter(Q=>Q!==L):[...H,L])},Ar=()=>{const L=E.trim();if(L){if(Y==="shared-with-me"){const Q={id:"shared_item_"+Date.now(),name:L,category:M};l.addSharedItem(a,Q)}else{if(!I)return;const H="item_"+Date.now(),Q={id:H,name:L,category:M},fe={...t,itemLibrary:[...t.itemLibrary||[],Q],lists:t.lists.map(Re=>Re.id!==t.activeListId?Re:{...Re,items:[...Array.isArray(Re.items)?Re.items:[],H]})};o(fe)}N(""),S(!1)}},Lr=L=>{var Vt;const H=z.includes(L.id),Q=(Vt=L.note)==null?void 0:Vt.trim(),fe=Q||L.photoURL,Re=u.includes(L.id),Ye=g===L.id;return c.jsxs("div",{children:[c.jsxs("div",{onClick:()=>Vn(L.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${H?"bg-slate-50 dark:bg-slate-800/50":""} ${fe&&Re?"rounded-b-none border-b-0":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${H?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}
              ${Ye&&H?"animate-check-bounce":""}`,onAnimationEnd:()=>v(null),children:H&&c.jsx(Lo,{size:14,className:`text-white ${Ye?"animate-check-icon-in":""}`})}),L.photoURL&&c.jsx("img",{src:L.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Ct=>{Ct.target.style.display="none"}}),c.jsx("div",{className:"flex-1 min-w-0",children:c.jsx("div",{className:`text-lg transition-all duration-300 ${H?"line-through text-slate-400 dark:text-slate-500 opacity-60":"text-slate-800 dark:text-slate-100"}`,children:L.name})}),fe&&c.jsx("button",{onClick:Ct=>{Ct.stopPropagation(),_i(L.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${Re?"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400":"text-slate-400"}`,"aria-label":"展開詳情",children:c.jsx(Y_,{size:18,className:`transition-transform duration-200 ${Re?"rotate-180":""}`})}),Y==="shared-with-me"&&re&&c.jsx("button",{onClick:Ct=>{Ct.stopPropagation(),R(L.id)},className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"移除物品",children:c.jsx(wr,{size:16})})]}),fe&&Re&&c.jsxs("div",{className:"px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl",children:[Q&&c.jsxs("div",{className:"flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2",children:[c.jsx(op,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),c.jsx("span",{children:L.note})]}),L.photoURL&&c.jsx("div",{className:Q?"mt-2":"",children:c.jsx("img",{src:L.photoURL,alt:L.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Ct=>{Ct.target.style.display="none"}})})]})]},L.id)};return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[c.jsx(io,{name:se,size:22,className:"text-indigo-600 dark:text-indigo-400 flex-shrink-0"}),c.jsx("span",{className:"text-lg font-bold truncate",children:U}),Y==="shared-with-me"&&he&&c.jsxs("span",{className:"text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0",children:["來自 ",he]}),Y==="own-shared"&&c.jsx("span",{className:"text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"flex items-center flex-shrink-0",children:[A.length>0&&c.jsxs("div",{className:"flex flex-col items-center",children:[c.jsx("button",{onClick:tt,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                    ${_!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:c.jsx(Wx,{size:20})}),bn&&c.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:bn})]}),Y!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:c.jsx(Ir,{size:22,className:"text-indigo-600 dark:text-indigo-400"})})]})]}),F>0&&c.jsxs("div",{className:"mt-3",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1",children:[c.jsx("span",{children:"完成進度"}),c.jsxs("span",{children:[P,"/",F]})]}),c.jsx("div",{className:"h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300",style:{width:`${Ce}%`}})})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[A.length===0?c.jsxs("div",{className:"text-center py-16 text-slate-400",children:[c.jsx(xR,{size:48,className:"mx-auto mb-4 text-slate-300 dark:text-slate-600"}),c.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),Y!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150",children:"從物品庫加入物品"})]}):c.jsx("div",{className:"space-y-4",children:_==="manual"?c.jsx(fb,{sensors:Ht,collisionDetection:Zx,onDragEnd:Hn,children:c.jsx(yb,{items:A.map(L=>L.id),strategy:mb,children:c.jsx("div",{className:"space-y-2",children:A.map(L=>c.jsx(uj,{item:L},L.id))})})}):_==="default"?Z.map(({category:L,items:H})=>{const Q=w.includes(L),fe=H.filter(Vt=>z.includes(Vt.id)).length,Re=H.length,Ye=fe===Re;return c.jsxs("div",{children:[c.jsxs("button",{onClick:()=>on(L),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[c.jsx(Y_,{size:16,className:`text-slate-400 transition-transform duration-200 ${Q?"-rotate-90":""}`}),c.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:L}),c.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${Ye?"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,children:[fe,"/",Re]})]}),!Q&&c.jsx("div",{className:"space-y-2 animate-slide-down",children:H.map(Vt=>Lr(Vt))})]},L)}):c.jsx("div",{className:"space-y-2",children:xn.map(L=>Lr(L))})}),A.length>0&&c.jsx("div",{className:"pt-4 pb-16",children:c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>f("reset"),className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:[c.jsx(ZR,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),c.jsxs("button",{onClick:()=>f("checkAll"),disabled:X,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${X?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400":"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600"}`,children:[c.jsx(BT,{size:16,className:"inline mr-1.5 -mt-0.5"}),X?"準備完成！":"全部確認"]})]})})]}),d==="reset"&&c.jsx(Pu,{message:"確定要重設所有勾選？",onConfirm:()=>{tl(),f(null)},onCancel:()=>f(null)}),d==="checkAll"&&c.jsx(Pu,{message:"確定要勾選全部項目？",onConfirm:()=>{nl(),f(null)},onCancel:()=>f(null)}),m&&c.jsx(cj,{}),T!==null&&c.jsx(Pu,{message:"確定要移除此物品？",onConfirm:()=>{l.removeSharedItem(a,T),R(null)},onCancel:()=>R(null)}),re&&c.jsxs(c.Fragment,{children:[b&&c.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{S(!1),N("")}}),b&&c.jsxs("div",{className:"fixed right-4 bottom-24 z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),c.jsx("input",{type:"text",placeholder:"物品名稱",value:E,onChange:L=>N(L.target.value),onKeyDown:L=>{L.key==="Enter"&&Ar()},autoFocus:!0,className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("select",{value:M,onChange:L=>x(L.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:Ke.map(L=>c.jsx("option",{value:L,children:L},L))}),c.jsx("button",{onClick:Ar,disabled:!E.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),c.jsx("button",{onClick:()=>{S(L=>!L),b&&N("")},className:"fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":b?"關閉新增表單":"快速新增物品",children:b?c.jsx(ht,{size:24}):c.jsx(Ir,{size:24})})]})]})}function hj({sharedData:t,onAddUser:e,onRemoveUser:n,onSetPermission:r,onUnshare:s,onClose:i}){const[o,l]=y.useState(""),[a,u]=y.useState(""),h=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(Xd):[],d=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),f=()=>{const v=o.trim().toLowerCase();if(v){if(!d(v)){u("請輸入有效的 Email");return}if(h.includes(v)){u("已經分享給此帳號");return}u(""),e(v),l("")}},g=v=>{v.key==="Enter"&&f()};return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:c.jsxs("div",{className:"p-4",children:[c.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),c.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"分享清單"}),c.jsxs("div",{className:"flex gap-2 mb-2",children:[c.jsx("input",{type:"email",value:o,onChange:v=>{l(v.target.value),u("")},onKeyDown:g,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:f,className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),a&&c.jsx("div",{className:"text-sm text-rose-500 mb-3",children:a}),h.length>0&&c.jsxs("div",{className:"mt-4",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2",children:"已分享給"}),c.jsx("div",{className:"space-y-2",children:h.map(v=>{var m;const w=Zn(v),C=((m=t==null?void 0:t.sharedWith)==null?void 0:m[w])||"view";return c.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600",children:[c.jsx("span",{className:"text-slate-700 dark:text-slate-200 text-sm truncate flex-1",children:v}),c.jsx("button",{onClick:()=>r(v,C==="edit"?"view":"edit"),className:`ml-2 p-2 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150
                          ${C==="edit"?"text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30":"text-slate-400"}`,"aria-label":C==="edit"?"切換為檢視":"切換為編輯",title:C==="edit"?"可編輯":"僅檢視",children:C==="edit"?c.jsx(YR,{size:16}):c.jsx(aR,{size:16})}),c.jsx("button",{onClick:()=>n(v),className:"ml-1 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:c.jsx(ht,{size:16})})]},v)})})]}),h.length>0&&c.jsx("button",{onClick:s,className:"w-full mt-4 py-3 border border-rose-300 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),c.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})}function fj({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function pj({list:t,isActive:e}){const{attributes:n,listeners:r,setNodeRef:s,transform:i,transition:o,isDragging:l}=xb({id:t.id}),a={transform:ri.Transform.toString(i),transition:o,zIndex:l?50:void 0,position:"relative"},u=(t.items||[]).length,h=(t.checkedItems||[]).length,d=!!t.sharedListId;return c.jsx("div",{ref:s,style:a,children:c.jsxs("div",{className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[56px]
          ${l?"shadow-lg opacity-90":""} ${e?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{...n,...r,className:"w-6 h-6 mr-3 flex items-center justify-center flex-shrink-0 text-slate-400 dark:text-slate-500 touch-none cursor-grab active:cursor-grabbing",children:c.jsx(Vx,{size:20})}),c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(io,{name:t.icon,size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[c.jsx("span",{className:"truncate",children:t.name}),d&&c.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"text-sm text-slate-400",children:[h,"/",u," 已確認"]})]})]})})}function mj({data:t,user:e,onNavigate:n,onSaveData:r,shared:s}){var he;const[i,o]=y.useState(""),[l,a]=y.useState("clipboard-list"),[u,h]=y.useState(null),[d,f]=y.useState(null),[g,v]=y.useState(null),[w,C]=y.useState(!1),[m,p]=y.useState(""),[_,k]=y.useState("default"),b=(P,F)=>{const X={...t,activeListId:P};r(X),n("checklist",{sharedListId:F||null})},S=P=>{n("checklist",{sharedListId:P})},E=()=>{if(!i.trim())return;const P={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[]},F={...t,lists:[...t.lists,P],activeListId:P.id};r(F),o(""),a("clipboard-list"),C(!1),n("checklist",{sharedListId:null})},N=async P=>{if(t.lists.length<=1)return;const F=t.lists.find(ce=>ce.id===P);if(F!=null&&F.sharedListId&&s)try{await s.unshareList(F.sharedListId)}catch(ce){console.error("清理分享資料失敗",ce)}const X=t.lists.filter(ce=>ce.id!==P),Ce={...t,lists:X,activeListId:t.activeListId===P?X[0].id:t.activeListId};r(Ce),v(null)},M=(P,F)=>{F.stopPropagation(),!(t.lists.length<=1)&&v(P)},x=(P,F)=>{F.stopPropagation(),h(P.id),f(P.sharedListId||null)},T=async P=>{const F=t.lists.find(X=>X.id===u);if(!(!F||!s))try{const X=await s.shareList(F,t.itemLibrary,[P]),Ce={...t,lists:t.lists.map(ce=>ce.id===u?{...ce,sharedListId:X}:ce)};r(Ce),f(X)}catch(X){console.error("分享失敗",X),alert("分享失敗："+X.message)}},R=async P=>{if(d)try{await s.addSharedUser(d,P)}catch(F){console.error("新增分享對象失敗",F)}else await T(P)},B=async P=>{if(!(!d||!s))try{await s.removeSharedUser(d,P)}catch(F){console.error("移除分享對象失敗",F)}},V=async(P,F)=>{if(d&&s)try{await s.setUserPermission(d,P,F)}catch(X){console.error("設定權限失敗",X)}},Y=async()=>{if(!(!d||!s))try{await s.unshareList(d);const P={...t,lists:t.lists.map(F=>F.id===u?{...F,sharedListId:void 0}:F)};r(P),h(null),f(null)}catch(P){console.error("停止分享失敗",P)}},ne=()=>{k(P=>P==="default"?"name":P==="name"?"progress":P==="progress"?"manual":"default")},re=_==="name"?"名稱":_==="progress"?"完成度":_==="manual"?"手動":"",O=Jx(Ha(Tc,{activationConstraint:{distance:5}}),Ha(pp,{activationConstraint:{delay:150,tolerance:5}})),I=P=>{const{active:F,over:X}=P;if(!X||F.id===X.id)return;const Ce=t.lists||[],ce=Ce.findIndex(tt=>tt.id===F.id),Z=Ce.findIndex(tt=>tt.id===X.id);if(ce===-1||Z===-1)return;const xn=jc(Ce,ce,Z);r({...t,lists:xn})},A=m.toLowerCase(),z=(t.lists||[]).filter(P=>!A||P.name.toLowerCase().includes(A)),U=(()=>{if(_==="name")return[...z].sort((P,F)=>P.name.localeCompare(F.name,"zh-Hant"));if(_==="progress"){const P=F=>{const X=(F.items||[]).length;return X===0?0:(F.checkedItems||[]).length/X};return[...z].sort((F,X)=>P(F)-P(X))}return z})(),se=(s?Object.entries(s.sharedWithMe):[]).filter(([,P])=>!A||(P.name||"").toLowerCase().includes(A));return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("div",{className:"w-10"}),c.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"}),c.jsxs("div",{className:"flex flex-col items-center w-10",children:[c.jsx("button",{onClick:ne,className:`p-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center
                ${_!=="default"?"text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"}`,"aria-label":"排序方式",children:c.jsx(Wx,{size:20})}),re&&c.jsx("span",{className:"text-[10px] text-indigo-600 dark:text-indigo-400 -mt-1 font-medium",children:re})]})]})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"relative",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:m,onChange:P=>p(P.target.value),placeholder:"搜尋清單...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),m&&c.jsx("button",{onClick:()=>p(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(ht,{size:16})})]})}),_==="manual"?c.jsx(fb,{sensors:O,collisionDetection:Zx,onDragEnd:I,children:c.jsx(yb,{items:(t.lists||[]).map(P=>P.id),strategy:mb,children:c.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(P=>c.jsx(pj,{list:P,isActive:P.id===t.activeListId},P.id))})})}):c.jsx("div",{className:"space-y-2",children:U.map(P=>{const F=(P.items||[]).length,X=(P.checkedItems||[]).length,Ce=P.id===t.activeListId,ce=!!P.sharedListId;return c.jsxs("div",{onClick:()=>b(P.id,P.sharedListId),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                    ${Ce?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(io,{name:P.icon,size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[c.jsx("span",{className:"truncate",children:P.name}),ce&&c.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"text-sm text-slate-400",children:[X,"/",F," 已確認"]})]}),e&&c.jsx("button",{onClick:Z=>x(P,Z),className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                        ${ce?"text-emerald-500 active:bg-emerald-50 dark:active:bg-emerald-900/30":"text-slate-400 active:bg-slate-100 dark:active:bg-slate-700"}`,"aria-label":"分享清單",children:c.jsx(Nc,{size:18})}),t.lists.length>1&&c.jsx("button",{onClick:Z=>M(P.id,Z),className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"刪除清單",children:c.jsx(wr,{size:18})})]},P.id)})}),se.length>0&&c.jsxs("div",{className:"mt-6",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2 px-1",children:"與我分享的清單"}),c.jsx("div",{className:"space-y-2",children:se.map(([P,F])=>{const X=(F.items||[]).length,Ce=(F.checkedItems||[]).length;return c.jsxs("div",{onClick:()=>S(P),className:"flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(io,{name:F.icon||"clipboard-list",size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-100",children:F.name}),c.jsxs("div",{className:"text-sm text-slate-400",children:[Ce,"/",X," 已確認",c.jsxs("span",{className:"ml-2 text-indigo-500 dark:text-indigo-400",children:["來自 ",F.ownerName||F.ownerEmail]})]})]})]},P)})})]}),c.jsx("div",{className:"mt-4",children:w?c.jsxs("div",{className:"p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400",children:"新增清單"}),c.jsx("button",{onClick:()=>{C(!1),o(""),a("clipboard-list")},className:"p-1 text-slate-400 active:text-slate-600 transition-colors duration-150","aria-label":"收起",children:c.jsx(ht,{size:18})})]}),c.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:Fx.map(P=>c.jsx("button",{onClick:()=>a(P),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                      ${l===P?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400":"text-slate-500 dark:text-slate-400"}`,"aria-label":P,children:c.jsx(io,{name:P,size:20})},P))}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:i,onChange:P=>o(P.target.value),onKeyDown:P=>{P.key==="Enter"&&E()},placeholder:"清單名稱...",autoFocus:!0,className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:E,className:"px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]}):c.jsxs("button",{onClick:()=>C(!0),className:"w-full py-3 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 font-medium active:bg-slate-50 dark:active:bg-slate-800 transition-colors duration-150 flex items-center justify-center gap-2",children:[c.jsx(Ir,{size:18}),"新增清單"]})})]}),u!==null&&c.jsx(hj,{sharedData:d&&((he=s==null?void 0:s.sharedByMe)==null?void 0:he[d])||null,onAddUser:R,onRemoveUser:B,onSetPermission:V,onUnshare:Y,onClose:()=>{h(null),f(null)}}),g!==null&&c.jsx(fj,{message:"確定刪除此清單？",onConfirm:()=>N(g),onCancel:()=>v(null)})]})}function _j(t,e=800,n=.7){return new Promise((r,s)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:a}=i;(l>e||a>e)&&(l>a?(a=Math.round(a*e/l),l=e):(l=Math.round(l*e/a),a=e));const u=document.createElement("canvas");u.width=l,u.height=a,u.getContext("2d").drawImage(i,0,0,l,a),u.toBlob(d=>{if(!d){s(new Error("Canvas toBlob failed"));return}r(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),s(new Error("Failed to load image"))},i.src=o})}function gj(t){const[e,n]=y.useState(!1),[r,s]=y.useState(null);return{uploadPhoto:async(l,a)=>{if(!t)throw new Error("Not logged in");n(!0),s(null);try{const u=await _j(a),h=`users/${t.uid}/items/${l}/photo.jpg`,d=F_(B_,h);return await rT(d,u,{contentType:"image/jpeg"}),await sT(d)}catch(u){throw s(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const a=`users/${t.uid}/items/${l}/photo.jpg`,u=F_(B_,a);await iT(u)}catch(a){a.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",a)}},uploading:e,error:r}}function yj({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function vj({data:t,user:e,onNavigate:n,onSaveData:r}){const[s,i]=y.useState(""),[o,l]=y.useState(Ke[0]),[a,u]=y.useState(""),[h,d]=y.useState(null),[f,g]=y.useState(null),[v,w]=y.useState(null),[C,m]=y.useState(""),[p,_]=y.useState(null),[k,b]=y.useState(!1),[S,E]=y.useState(!1),N=y.useRef(null),{uploadPhoto:M,deletePhoto:x,uploading:T}=gj(e),R={};Ke.forEach(I=>{R[I]=[]}),(t.itemLibrary||[]).forEach(I=>{R[I.category]&&R[I.category].push(I)});const B=I=>{var z;const A=(z=I.target.files)==null?void 0:z[0];A&&(d(A),g(URL.createObjectURL(A)),I.target.value="")},V=()=>{f&&URL.revokeObjectURL(f),d(null),g(null)},Y=async()=>{if(!s.trim())return;b(!0);const I=Date.now();let A;if(h&&e)try{A=await M(I,h)}catch{}const z={id:I,name:s.trim(),category:o,note:a.trim(),...A&&{photoURL:A}},U={...t,itemLibrary:[...t.itemLibrary,z]};r(U),i(""),u(""),V(),b(!1),E(!1)},ne=async(I,A,z,U,se)=>{const he={...t,itemLibrary:t.itemLibrary.map(P=>P.id===I?{...P,name:A,category:z,note:U,...se?{photoURL:se}:{photoURL:null}}:P)};r(he),w(null)},re=async I=>{const A=t.itemLibrary.find(U=>U.id===I);A!=null&&A.photoURL&&x(I);const z={...t,itemLibrary:t.itemLibrary.filter(U=>U.id!==I),lists:t.lists.map(U=>({...U,items:(U.items||[]).filter(se=>se!==I),checkedItems:(U.checkedItems||[]).filter(se=>se!==I)}))};r(z),_(null)},O=v?t.itemLibrary.find(I=>I.id===v):null;return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"})}),c.jsx("div",{className:"px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700",children:c.jsxs("div",{className:"relative",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:C,onChange:I=>m(I.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),C&&c.jsx("button",{onClick:()=>m(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(ht,{size:16})})]})}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:Ke.map(I=>{const A=C?R[I].filter(z=>{var se,he;const U=C.toLowerCase();return((se=z.name)==null?void 0:se.toLowerCase().includes(U))||((he=z.note)==null?void 0:he.toLowerCase().includes(U))}):R[I];return A.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:I}),c.jsx("div",{className:"space-y-2",children:A.map(z=>c.jsxs("div",{className:"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[z.photoURL&&c.jsx("img",{src:z.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:U=>{U.target.style.display="none"}}),c.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:z.name})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>w(z.id),className:"text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[32px]",children:"編輯"}),c.jsx("button",{onClick:()=>_(z.id),className:"text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[32px]",children:"刪除"})]})]}),z.note&&c.jsxs("div",{className:"text-sm text-slate-400 mt-1 flex items-center gap-1",children:[c.jsx(op,{size:12,className:"flex-shrink-0"}),z.note]})]},z.id))})]},I)})}),c.jsx("button",{onClick:()=>E(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":"新增物品",children:c.jsx(Ir,{size:24})}),S&&c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>{E(!1),i(""),u(""),V()},children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:I=>I.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"新增物品"}),c.jsx("button",{onClick:()=>{E(!1),i(""),u(""),V()},className:"p-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700",children:c.jsx(ht,{size:20,className:"text-slate-400"})})]}),c.jsx("input",{type:"text",value:s,onChange:I=>i(I.target.value),placeholder:"物品名稱...",autoFocus:!0,className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:o,onChange:I=>l(I.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:Ke.map(I=>c.jsx("option",{value:I,children:I},I))}),c.jsx("input",{type:"text",value:a,onChange:I=>u(I.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-2",children:[c.jsx("input",{ref:N,type:"file",accept:"image/*",capture:"environment",onChange:B,className:"hidden"}),f?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:f,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),c.jsx("button",{onClick:V,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]}):c.jsxs("button",{onClick:()=>{var I;return(I=N.current)==null?void 0:I.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[c.jsx(ip,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("button",{onClick:Y,disabled:k||T,className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(k||T)&&c.jsx(Qx,{size:18,className:"animate-spin"}),k||T?"新增中...":"+ 新增物品"]})]})}),O&&c.jsx(xj,{item:O,user:e,categories:Ke,onSave:ne,onClose:()=>w(null),uploadPhoto:M,deletePhoto:x}),p!==null&&c.jsx(yj,{message:"確定刪除此物品？",onConfirm:()=>re(p),onCancel:()=>_(null)})]})}function xj({item:t,user:e,categories:n,onSave:r,onClose:s,uploadPhoto:i,deletePhoto:o}){const[l,a]=y.useState(t.name),[u,h]=y.useState(t.category),[d,f]=y.useState(t.note||""),[g,v]=y.useState(t.photoURL||""),[w,C]=y.useState(null),[m,p]=y.useState(null),[_,k]=y.useState(!1),[b,S]=y.useState(!1),E=y.useRef(null),N=R=>{var V;const B=(V=R.target.files)==null?void 0:V[0];B&&(C(B),m&&URL.revokeObjectURL(m),p(URL.createObjectURL(B)),k(!1),R.target.value="")},M=()=>{m&&URL.revokeObjectURL(m),C(null),p(null),k(!0)},x=async()=>{S(!0);let R=g;if(_&&!w&&(t.photoURL&&o(t.id),R=""),w&&e)try{R=await i(t.id,w)}catch{R=_?"":g}r(t.id,l,u,d,R),S(!1)},T=m||!_&&g;return c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:s,children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:R=>R.stopPropagation(),children:[c.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900 dark:text-slate-50",children:"編輯物品"}),c.jsx("input",{type:"text",value:l,onChange:R=>a(R.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:u,onChange:R=>h(R.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:n.map(R=>c.jsx("option",{value:R,children:R},R))}),c.jsx("input",{type:"text",value:d,onChange:R=>f(R.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-4",children:[c.jsx("input",{ref:E,type:"file",accept:"image/*",capture:"environment",onChange:N,className:"hidden"}),T?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:m||g,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("button",{onClick:()=>{var R;return(R=E.current)==null?void 0:R.click()},className:"text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150",children:"更換照片"}),c.jsx("button",{onClick:M,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}):c.jsxs("button",{onClick:()=>{var R;return(R=E.current)==null?void 0:R.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[c.jsx(ip,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:s,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsxs("button",{onClick:x,disabled:b,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[b&&c.jsx(Qx,{size:18,className:"animate-spin"}),b?"儲存中...":"儲存"]})]})]})})}function bj({data:t,onNavigate:e,onSaveData:n}){var C,m;const[r,s]=y.useState(!1),[i,o]=y.useState(""),[l,a]=y.useState(Ke[0]),[u,h]=y.useState(""),d=(C=t.lists)==null?void 0:C.find(p=>p.id===t.activeListId),f=d?{...d,items:Array.isArray(d.items)?d.items:[],checkedItems:Array.isArray(d.checkedItems)?d.checkedItems:[]}:null,g={};Ke.forEach(p=>{g[p]=[]}),(t.itemLibrary||[]).forEach(p=>{g[p.category]&&g[p.category].push(p)});const v=p=>{const _={...t,lists:t.lists.map(k=>{if(k.id!==t.activeListId)return k;const b=Array.isArray(k.items)?k.items:[],S=Array.isArray(k.checkedItems)?k.checkedItems:[],E=b.includes(p);return{...k,items:E?b.filter(N=>N!==p):[...b,p],checkedItems:E?S.filter(N=>N!==p):S}})};n(_)},w=()=>{const p=i.trim();if(!p)return;const _="item_"+Date.now(),k={id:_,name:p,category:l},b={...t,itemLibrary:[...t.itemLibrary||[],k],lists:t.lists.map(S=>{if(S.id!==t.activeListId)return S;const E=Array.isArray(S.items)?S.items:[];return{...S,items:[...E,_]}})};n(b),o(""),s(!1)};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"返回",children:c.jsx(VT,{size:22,className:"text-slate-600 dark:text-slate-300"})}),c.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 mt-1",children:["選擇要加入「",f==null?void 0:f.name,"」的物品"]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"relative",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:u,onChange:p=>h(p.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),u&&c.jsx("button",{onClick:()=>h(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(ht,{size:16})})]})}),u&&Ke.every(p=>{const _=u.toLowerCase();return g[p].filter(k=>{var b,S,E;return((b=k.name)==null?void 0:b.toLowerCase().includes(_))||((S=k.category)==null?void 0:S.toLowerCase().includes(_))||((E=k.note)==null?void 0:E.toLowerCase().includes(_))}).length===0})&&c.jsxs("div",{className:"text-center py-8 text-slate-400",children:["找不到「",u,"」相關物品"]}),Ke.map(p=>{const _=u?g[p].filter(k=>{var S,E,N;const b=u.toLowerCase();return((S=k.name)==null?void 0:S.toLowerCase().includes(b))||((E=k.category)==null?void 0:E.toLowerCase().includes(b))||((N=k.note)==null?void 0:N.toLowerCase().includes(b))}):g[p];return _.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:p}),c.jsx("div",{className:"space-y-2",children:_.map(k=>{const b=f==null?void 0:f.items.includes(k.id);return c.jsxs("div",{onClick:()=>v(k.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${b?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${b?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}`,children:b&&c.jsx(Lo,{size:14,className:"text-white"})}),k.photoURL&&c.jsx("img",{src:k.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:S=>{S.target.style.display="none"}}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:b?"text-slate-800 dark:text-slate-100 font-medium":"text-slate-600 dark:text-slate-300",children:k.name}),k.note&&c.jsxs("div",{className:"text-xs text-slate-400 mt-0.5 flex items-center gap-1",children:[c.jsx(op,{size:10,className:"flex-shrink-0"}),k.note]})]})]},k.id)})})]},p)})]}),r&&c.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{s(!1),o("")}}),r&&c.jsxs("div",{className:"fixed right-4 bottom-[168px] z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),c.jsx("input",{type:"text",placeholder:"物品名稱",value:i,onChange:p=>o(p.target.value),onKeyDown:p=>{p.key==="Enter"&&w()},autoFocus:!0,className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("select",{value:l,onChange:p=>a(p.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:Ke.map(p=>c.jsx("option",{value:p,children:p},p))}),c.jsx("button",{onClick:w,disabled:!i.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),c.jsx("button",{onClick:()=>{s(p=>!p),r&&o("")},className:"fixed right-4 bottom-[112px] z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":r?"關閉新增表單":"新增物品",children:r?c.jsx(ht,{size:24}):c.jsx(Ir,{size:24})}),c.jsxs("div",{className:"p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"text-center text-slate-500 dark:text-slate-400 mb-3",children:["已選擇 ",((m=f==null?void 0:f.items)==null?void 0:m.length)||0," 個物品"]}),c.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"完成"})]})]})}function wj({user:t,syncStatus:e,onLogin:n,onLogout:r,onNavigate:s,isAdmin:i,themePreference:o,onThemeChange:l}){const a={offline:{icon:XT,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50 dark:bg-slate-800"},syncing:{icon:IR,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50 dark:bg-amber-900/30"},synced:{icon:JT,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50 dark:bg-emerald-900/30"},error:{icon:QT,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50 dark:bg-rose-900/30"}},u=a[e]||a.offline,h=u.icon,d=[{value:"light",label:"淺色",icon:f4},{value:"system",label:"系統",icon:DR},{value:"dark",label:"深色",icon:UR}];return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center",children:"設定"})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"帳號"}),t?c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&c.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:f=>f.target.style.display="none"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-50 truncate",children:t.displayName||"使用者"}),c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 truncate",children:t.email})]})]}),c.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[c.jsx(jR,{size:18}),"登出"]})]}):c.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[c.jsx(RR,{size:18}),"使用 Google 登入"]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"同步狀態"}),c.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${u.bg}`,children:[c.jsx(h,{size:20,className:`${u.color} ${e==="syncing"?"animate-spin":""}`}),c.jsx("span",{className:`font-medium ${u.color}`,children:u.label})]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"外觀"}),c.jsx("div",{className:"flex gap-2",children:d.map(({value:f,label:g,icon:v})=>c.jsxs("button",{onClick:()=>l(f),className:`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${o===f?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500":"bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600"}`,children:[c.jsx(v,{size:20}),g]},f))})]}),t&&i&&c.jsxs("button",{onClick:()=>s("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[c.jsx(Yx,{size:18}),"管理後台"]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"關於"}),c.jsxs("div",{className:"text-sm text-slate-600 dark:text-slate-300",children:[c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"應用程式"}),c.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"打包清單"})]}),c.jsx("div",{className:"border-t border-slate-100 dark:border-slate-700"}),c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"版本"}),c.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"1.0.0"})]})]})]})]})]})}function Il({icon:t,label:e,value:n,color:r="text-indigo-600"}){return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(t,{size:20,className:r}),c.jsx("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:e})]}),c.jsx("div",{className:`text-3xl font-bold ${r}`,children:n})]})}function kj({data:t,shared:e}){const n=t.itemLibrary.length,r=t.lists.length,s=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,f)=>f[1]-d[1]),a={};t.itemLibrary.forEach(d=>{a[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(f=>{a[f]!==void 0&&a[f]++})});const u=Object.entries(a).sort((d,f)=>f[1]-d[1]).slice(0,5).map(([d,f])=>{const g=t.itemLibrary.find(v=>v.id===Number(d));return g?{name:g.name,count:f}:null}).filter(Boolean),h=l.length>0?l[0][1]:1;return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"數據總覽"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[c.jsx(Il,{icon:Oo,label:"物品總數",value:n,color:"text-indigo-600"}),c.jsx(Il,{icon:SR,label:"清單總數",value:r,color:"text-emerald-600"}),c.jsx(Il,{icon:Nc,label:"已分享清單",value:s,color:"text-amber-600"}),c.jsx(Il,{icon:Gx,label:"收到分享",value:i,color:"text-rose-600"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(zT,{size:18,className:"text-slate-500 dark:text-slate-400"}),c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"分類統計"})]}),l.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):c.jsx("div",{className:"space-y-3",children:l.map(([d,f])=>c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[c.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:d}),c.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:f})]}),c.jsx("div",{className:"h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${f/h*100}%`}})})]},d))})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(Oo,{size:18,className:"text-slate-500 dark:text-slate-400"}),c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"最常使用物品 Top 5"})]}),u.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):c.jsx("div",{className:"space-y-2",children:u.map((d,f)=>c.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:f+1}),c.jsx("span",{className:"text-slate-800 dark:text-slate-100",children:d.name})]}),c.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:["出現在 ",d.count," 個清單"]})]},f))})]})]})]})}function Cj({data:t,onSaveData:e}){const[n,r]=y.useState(""),[s,i]=y.useState(""),[o,l]=y.useState(new Set),[a,u]=y.useState(null),[h,d]=y.useState({name:"",category:"",note:""}),[f,g]=y.useState(""),[v,w]=y.useState(!1),C=y.useRef(null),m=t.itemLibrary.filter(x=>{const T=!n||x.name.toLowerCase().includes(n.toLowerCase())||(x.note||"").toLowerCase().includes(n.toLowerCase()),R=!s||x.category===s;return T&&R}),p=x=>{l(T=>{const R=new Set(T);return R.has(x)?R.delete(x):R.add(x),R})},_=()=>{o.size===m.length?l(new Set):l(new Set(m.map(x=>x.id)))},k=x=>{u(x.id),d({name:x.name,category:x.category,note:x.note||""})},b=()=>{const x=t.itemLibrary.map(T=>T.id===a?{...T,...h}:T);e({...t,itemLibrary:x}),u(null)},S=x=>{const T=new Set(x),R=t.itemLibrary.filter(V=>!T.has(V.id)),B=t.lists.map(V=>({...V,items:(V.items||[]).filter(Y=>!T.has(Y)),checkedItems:(V.checkedItems||[]).filter(Y=>!T.has(Y))}));e({...t,itemLibrary:R,lists:B}),l(new Set)},E=()=>{if(!f)return;const x=t.itemLibrary.map(T=>o.has(T.id)?{...T,category:f}:T);e({...t,itemLibrary:x}),l(new Set),w(!1),g("")},N=()=>{const x=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),T=URL.createObjectURL(x),R=document.createElement("a");R.href=T,R.download="item-library.json",R.click(),URL.revokeObjectURL(T)},M=x=>{var B;const T=(B=x.target.files)==null?void 0:B[0];if(!T)return;const R=new FileReader;R.onload=V=>{try{const Y=JSON.parse(V.target.result);if(!Array.isArray(Y)){alert("格式錯誤：需要 JSON 陣列");return}if(!Y.every(U=>U.name&&U.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const re=Math.max(0,...t.itemLibrary.map(U=>U.id)),O=new Set(t.itemLibrary.map(U=>U.name)),I=Y.filter(U=>!O.has(U.name)).map((U,se)=>({id:U.id||re+se+1,name:U.name,category:U.category,note:U.note||"",...U.photoURL?{photoURL:U.photoURL}:{}}));if(I.length===0){alert("沒有新物品可匯入（全部重複）");return}const A=new Set(t.itemLibrary.map(U=>U.id));let z=re+1;I.forEach(U=>{for(;A.has(z);)z++;U.id=z,A.add(z),z++}),e({...t,itemLibrary:[...t.itemLibrary,...I]}),alert(`已匯入 ${I.length} 個物品`)}catch{alert("JSON 解析失敗")}},R.readAsText(T),x.target.value=""};return c.jsxs("div",{children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"物品管理"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:N,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[c.jsx(sR,{size:16})," 匯出"]}),c.jsxs("button",{onClick:()=>{var x;return(x=C.current)==null?void 0:x.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[c.jsx(C4,{size:16})," 匯入"]}),c.jsx("input",{ref:C,type:"file",accept:".json",onChange:M,className:"hidden"})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(Ec,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",placeholder:"搜尋物品...",value:n,onChange:x=>r(x.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),c.jsxs("div",{className:"relative",children:[c.jsx(fR,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsxs("select",{value:s,onChange:x=>i(x.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[c.jsx("option",{value:"",children:"所有分類"}),Ke.map(x=>c.jsx("option",{value:x,children:x},x))]})]})]}),o.size>0&&c.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg",children:[c.jsxs("span",{className:"text-sm font-medium text-indigo-700 dark:text-indigo-400",children:["已選 ",o.size," 項"]}),c.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${o.size} 個物品？`)&&S([...o])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[c.jsx(wr,{size:14})," 批量刪除"]}),v?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("select",{value:f,onChange:x=>g(x.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇分類"}),Ke.map(x=>c.jsx("option",{value:x,children:x},x))]}),c.jsx("button",{onClick:E,disabled:!f,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(Lo,{size:14})}),c.jsx("button",{onClick:()=>{w(!1),g("")},className:"px-2 py-1.5 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:c.jsx(ht,{size:14})})]}):c.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[c.jsx(m4,{size:14})," 批量改分類"]})]}),c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700",children:c.jsxs("tr",{children:[c.jsx("th",{className:"w-10 px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:m.length>0&&o.size===m.length,onChange:_,className:"rounded"})}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分類"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"備註"}),c.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),c.jsxs("tbody",{children:[m.map(x=>c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700",children:[c.jsx("td",{className:"px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:o.has(x.id),onChange:()=>p(x.id),className:"rounded"})}),a===x.id?c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:h.name,onChange:T=>d(R=>({...R,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("select",{value:h.category,onChange:T=>d(R=>({...R,category:T.target.value})),className:"px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Ke.map(T=>c.jsx("option",{value:T,children:T},T))})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:h.note,onChange:T=>d(R=>({...R,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:b,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:c.jsx(Lo,{size:16})}),c.jsx("button",{onClick:()=>u(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:c.jsx(ht,{size:16})})]})})]}):c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-3 text-sm text-slate-800 dark:text-slate-100",children:x.name}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:x.category})}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:x.note||"-"}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>k(x),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:c.jsx(Jd,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${x.name}」？`)&&S([x.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:c.jsx(wr,{size:16})})]})})]})]},x.id)),m.length===0&&c.jsx("tr",{children:c.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),c.jsxs("div",{className:"lg:hidden space-y-2",children:[m.length===0&&c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),m.map(x=>c.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("input",{type:"checkbox",checked:o.has(x.id),onChange:()=>p(x.id),className:"mt-1 rounded"}),a===x.id?c.jsxs("div",{className:"flex-1 space-y-2",children:[c.jsx("input",{value:h.name,onChange:T=>d(R=>({...R,name:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),c.jsx("select",{value:h.category,onChange:T=>d(R=>({...R,category:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Ke.map(T=>c.jsx("option",{value:T,children:T},T))}),c.jsx("input",{value:h.note,onChange:T=>d(R=>({...R,note:T.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"備註"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:b,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),c.jsx("button",{onClick:()=>u(null),className:"px-3 py-1 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg",children:"取消"})]})]}):c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:x.name}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>k(x),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:c.jsx(Jd,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${x.name}」？`)&&S([x.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(wr,{size:16})})]})]}),c.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:x.category}),x.note&&c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1",children:x.note})]})]})},x.id))]})]})}function Sj({data:t,onSaveData:e}){const n=t.templates||[],[r,s]=y.useState(!1),[i,o]=y.useState("list"),[l,a]=y.useState(""),[u,h]=y.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,f]=y.useState(null),[g,v]=y.useState(null),[w,C]=y.useState(""),m=()=>{h({name:"",icon:"clipboard-list",description:"",itemIds:[]}),a(""),o("list"),s(!1)},p=()=>{const x=t.lists.find(T=>T.id===Number(l));x&&(h({name:x.name+" 範本",icon:x.icon||"clipboard-list",description:"",itemIds:[...x.items||[]]}),o("manual"))},_=x=>{h(T=>({...T,itemIds:T.itemIds.includes(x)?T.itemIds.filter(R=>R!==x):[...T.itemIds,x]}))},k=()=>{if(!u.name.trim())return;const T={id:Math.max(0,...n.map(R=>R.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,T]}),m()},b=()=>{if(!u.name.trim())return;const x=n.map(T=>T.id===d?{...T,...u,name:u.name.trim()}:T);e({...t,templates:x}),f(null),m()},S=x=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(T=>T.id!==x)})},E=x=>{f(x.id),h({name:x.name,icon:x.icon,description:x.description||"",itemIds:[...x.itemIds]}),s(!0)},N=()=>{const x=n.find(B=>B.id===g),T=t.lists.find(B=>B.id===Number(w));if(!x||!T)return;const R=t.lists.map(B=>B.id===T.id?{...B,items:[...new Set([...B.items||[],...x.itemIds])]}:B);e({...t,lists:R}),v(null),C(""),alert(`已將範本「${x.name}」套用到「${T.name}」`)},M=x=>x.map(T=>t.itemLibrary.find(R=>R.id===T)).filter(Boolean).map(T=>T.name);return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"清單範本"}),!r&&c.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[c.jsx(Ir,{size:16})," 建立範本"]})]}),r&&c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"從現有清單建立"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:l,onChange:x=>a(x.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(x=>c.jsx("option",{value:x.id,children:x.name},x.id))]}),c.jsx("button",{onClick:p,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(nR,{size:16})})]}),c.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"範本名稱"}),c.jsx("input",{value:u.name,onChange:x=>h(T=>({...T,name:x.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"例：出國旅行"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"圖示"}),c.jsx("select",{value:u.icon,onChange:x=>h(T=>({...T,icon:x.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Fx.map(x=>c.jsx("option",{value:x,children:x},x))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"說明"}),c.jsx("input",{value:u.description,onChange:x=>h(T=>({...T,description:x.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"選填"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),c.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg",children:t.itemLibrary.map(x=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("input",{type:"checkbox",checked:u.itemIds.includes(x.id),onChange:()=>_(x.id),className:"rounded"}),c.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100",children:x.name}),c.jsx("span",{className:"text-xs text-slate-400",children:x.category})]},x.id))})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:d?b:k,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),c.jsx("button",{onClick:()=>{f(null),m()},className:"px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:"取消"})]})]})]}),g&&c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-2",children:"套用範本"}),c.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mb-3",children:"選擇要套用的目標清單："}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:w,onChange:x=>C(x.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(x=>c.jsx("option",{value:x.id,children:x.name},x.id))]}),c.jsxs("button",{onClick:N,disabled:!w,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[c.jsx(Lo,{size:16})," 套用"]}),c.jsx("button",{onClick:()=>{v(null),C("")},className:"px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:c.jsx(ht,{size:16})})]})]}),n.length===0&&!r&&c.jsxs("div",{className:"text-center py-12 text-slate-400",children:[c.jsx(Hx,{size:48,className:"mx-auto mb-3 opacity-50"}),c.jsx("p",{children:"尚未建立任何範本"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(x=>c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-2",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:x.name}),x.description&&c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:x.description})]}),c.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:x.icon})]}),c.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[M(x.itemIds).slice(0,5).map((T,R)=>c.jsx("span",{className:"text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full",children:T},R)),x.itemIds.length>5&&c.jsxs("span",{className:"text-xs text-slate-400",children:["+",x.itemIds.length-5," 更多"]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:[c.jsx(Oo,{size:14,className:"inline mr-1"}),x.itemIds.length," 個物品"]}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>v(x.id),className:"px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50",children:"套用"}),c.jsx("button",{onClick:()=>E(x),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:c.jsx(Jd,{size:14})}),c.jsx("button",{onClick:()=>S(x.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(wr,{size:14})})]})]})]},x.id))})]})}function Ej({data:t,shared:e}){const[n,r]=y.useState("byMe"),[s,i]=y.useState({}),[o,l]=y.useState(""),a=e.sharedByMe||{},u=e.sharedWithMe||{},h=C=>{var p;const m=t.lists.find(_=>_.sharedListId===C);return(m==null?void 0:m.name)||((p=a[C])==null?void 0:p.name)||"未知清單"},d=async C=>{const m=o.trim();if(m)try{await e.addSharedUser(C,m),i({}),l("")}catch(p){alert("新增失敗："+p.message)}},f=async(C,m)=>{if(confirm(`移除 ${m} 的存取權限？`))try{await e.removeSharedUser(C,m)}catch(p){alert("移除失敗："+p.message)}},g=async C=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(C)}catch(m){alert("取消分享失敗："+m.message)}},v=Object.entries(a),w=Object.entries(u);return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分享管理"}),c.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-700 mb-4",children:[c.jsxs("button",{onClick:()=>r("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[c.jsx(Nc,{size:16})," 我分享的 (",v.length,")"]}),c.jsxs("button",{onClick:()=>r("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[c.jsx(Gx,{size:16})," 分享給我的 (",w.length,")"]})]}),n==="byMe"&&c.jsx("div",{children:v.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分享對象"}),c.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),c.jsx("tbody",{children:v.map(([C,m])=>{const p=Object.keys(m.sharedWith||{}).map(Xd);return c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:h(C)}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[p.map(_=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[_,c.jsx("button",{onClick:()=>f(C,_),className:"text-slate-400 hover:text-rose-500",children:c.jsx(ht,{size:12})})]},_)),s[C]?c.jsxs("form",{onSubmit:_=>{_.preventDefault(),d(C)},className:"inline-flex gap-1",children:[c.jsx("input",{value:o,onChange:_=>l(_.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 dark:border-slate-600 rounded w-40 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",autoFocus:!0}),c.jsx("button",{type:"submit",className:"text-emerald-600 dark:text-emerald-400",children:c.jsx(Ir,{size:14})}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:c.jsx(ht,{size:14})})]}):c.jsx("button",{onClick:()=>i({[C]:!0}),className:"text-xs text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增"})]})}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("button",{onClick:()=>g(C),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg",children:[c.jsx(wr,{size:14})," 取消分享"]})})]},C)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([C,m])=>{const p=Object.keys(m.sharedWith||{}).map(Xd);return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:h(C)}),c.jsx("button",{onClick:()=>g(C),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),c.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:p.map(_=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[_,c.jsx("button",{onClick:()=>f(C,_),className:"text-slate-400 hover:text-rose-500",children:c.jsx(ht,{size:12})})]},_))}),s[C]?c.jsxs("form",{onSubmit:_=>{_.preventDefault(),d(C)},className:"flex gap-2",children:[c.jsx("input",{value:o,onChange:_=>l(_.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",autoFocus:!0}),c.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 dark:bg-slate-600 dark:text-slate-200 rounded-lg",children:"取消"})]}):c.jsx("button",{onClick:()=>i({[C]:!0}),className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增分享對象"})]},C)})})]})}),n==="withMe"&&c.jsx("div",{children:w.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"來源"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"勾選進度"})]})}),c.jsx("tbody",{children:w.map(([C,m])=>{const p=(m.items||[]).length,_=(m.checkedItems||[]).length;return c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:m.name}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:m.ownerName||m.ownerEmail}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:p>0?`${_/p*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[_,"/",p]})]})})]},C)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:w.map(([C,m])=>{const p=(m.items||[]).length,_=(m.checkedItems||[]).length;return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:m.name}),c.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:["來自 ",m.ownerName||m.ownerEmail]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[c.jsx("div",{className:"flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:p>0?`${_/p*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[_,"/",p]})]})]},C)})})]})})]})}function Nj({user:t,admin:e}){const{adminEmails:n,addAdmin:r,removeAdmin:s}=e,[i,o]=y.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await r(i),o(""))},a=async u=>{var h;if(u===((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await s(u)};return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"帳號管理"}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:"新增管理員"}),c.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[c.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[c.jsx(Ir,{size:16})," 新增"]})]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:[c.jsx("div",{className:"px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700",children:c.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?c.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[c.jsx(Zd,{size:32,className:"mx-auto mb-2 opacity-50"}),c.jsx("p",{children:"尚未設定管理員"}),c.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):c.jsx("ul",{children:n.map(u=>{var d;const h=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return c.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[c.jsx(Zd,{size:16,className:"text-indigo-500 dark:text-indigo-400 shrink-0"}),c.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100 truncate",children:u}),h&&c.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),c.jsx("button",{onClick:()=>a(u),disabled:h,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:h?"無法移除自己":"移除管理員",children:c.jsx(wr,{size:16})})]},u)})})]})]})}const ju=[{key:"dashboard",label:"總覽",icon:Yx},{key:"items",label:"物品管理",icon:Oo},{key:"templates",label:"清單範本",icon:Hx},{key:"sharing",label:"分享管理",icon:Nc},{key:"accounts",label:"帳號管理",icon:Zd}];function Ij({data:t,user:e,shared:n,onNavigate:r,onSaveData:s,admin:i}){var g;const[o,l]=y.useState("dashboard"),[a,u]=y.useState(!1),h=v=>{l(v),u(!1)},d=c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-700",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),c.jsx("nav",{className:"flex-1 p-2",children:ju.map(({key:v,label:w,icon:C})=>c.jsxs("button",{onClick:()=>h(v),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${o===v?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"}`,children:[c.jsx(C,{size:18}),w]},v))}),c.jsx("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700",children:c.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",children:[c.jsx(Eu,{size:18}),"返回應用"]})})]}),f=()=>{switch(o){case"dashboard":return c.jsx(kj,{data:t,shared:n});case"items":return c.jsx(Cj,{data:t,onSaveData:s});case"templates":return c.jsx(Sj,{data:t,onSaveData:s});case"sharing":return c.jsx(Ej,{data:t,shared:n});case"accounts":return c.jsx(Nj,{user:e,admin:i});default:return null}};return c.jsxs("div",{className:"h-screen bg-slate-50 dark:bg-slate-900",children:[c.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[c.jsx("aside",{className:"bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto",children:d}),c.jsx("main",{className:"overflow-y-auto p-6",children:c.jsx("div",{className:"max-w-6xl mx-auto",children:f()})})]}),c.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[c.jsxs("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top",children:[c.jsx("button",{onClick:()=>u(!0),className:"p-1 -ml-1 text-slate-600 dark:text-slate-300",children:c.jsx(LR,{size:24})}),c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:((g=ju.find(v=>v.key===o))==null?void 0:g.label)||"管理後台"}),c.jsx("button",{onClick:()=>r("profile"),className:"p-1 -mr-1 text-slate-600 dark:text-slate-300",children:c.jsx(Eu,{size:24})})]}),a&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>u(!1)}),c.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),c.jsx("button",{onClick:()=>u(!1),className:"p-1 text-slate-400",children:c.jsx(ht,{size:20})})]}),c.jsx("nav",{className:"p-2",children:ju.map(({key:v,label:w,icon:C})=>c.jsxs("button",{onClick:()=>h(v),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${o===v?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,children:[c.jsx(C,{size:18}),w]},v))}),c.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom",children:c.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[c.jsx(Eu,{size:18}),"返回應用"]})})]})]}),c.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:f()})]})]})}const Tj=[{id:"checklist",label:"清單",icon:u4},{id:"lists",label:"所有清單",icon:kR},{id:"library",label:"物品庫",icon:Oo},{id:"profile",label:"設定",icon:E4}];function Rj({currentView:t,onNavigate:e}){return c.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 z-40",children:c.jsx("div",{className:"flex",children:Tj.map(n=>{const r=t===n.id,s=n.icon;return c.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600 dark:text-indigo-400":"text-slate-400 active:text-slate-600 dark:active:text-slate-300"}`,"aria-label":n.label,children:[c.jsx(s,{size:22,strokeWidth:r?2.5:2}),c.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function Pj({onRefresh:t,onDismiss:e}){return c.jsx("div",{className:"fixed bottom-20 left-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl border border-indigo-500 dark:border-indigo-400 p-4 z-50 animate-slide-up",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(a4,{size:24}),c.jsxs("div",{children:[c.jsx("div",{className:"font-medium",children:"有新版本可用"}),c.jsx("div",{className:"text-sm text-indigo-200 dark:text-indigo-100",children:"點擊更新以取得最新功能"})]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:e,className:"px-3 py-2 text-indigo-200 dark:text-indigo-100 active:text-white text-sm transition-colors duration-150 min-h-[44px]",children:"稍後"}),c.jsx("button",{onClick:t,className:"px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm active:bg-indigo-50 transition-colors duration-150 min-h-[44px]",children:"更新"})]})]})})}function jj(){const[t,e]=y.useState("checklist"),[n,r]=y.useState(null),s=hT(),{user:i,data:o,syncStatus:l,saveData:a,handleLogin:u,handleLogout:h}=fT(s),d=pT(i,o),f=mT(i),{needRefresh:g,refresh:v,dismiss:w}=vT(),{preference:C,changeTheme:m}=bT(),p=(k,b)=>{(b==null?void 0:b.sharedListId)!==void 0&&r(b.sharedListId),e(k)},_=t!=="addItems"&&t!=="admin";return c.jsxs(c.Fragment,{children:[t==="checklist"&&c.jsx(dj,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:p,onSaveData:a,shared:d,activeSharedListId:n}),t==="lists"&&c.jsx(mj,{data:o,user:i,onNavigate:p,onSaveData:a,shared:d}),t==="library"&&c.jsx(vj,{data:o,user:i,onNavigate:p,onSaveData:a}),t==="addItems"&&c.jsx(bj,{data:o,onNavigate:p,onSaveData:a}),t==="profile"&&c.jsx(wj,{user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:p,isAdmin:f.isAdmin,themePreference:C,onThemeChange:m}),t==="admin"&&f.isAdmin&&c.jsx(Ij,{data:o,user:i,shared:d,onNavigate:p,onSaveData:a,admin:f}),t==="admin"&&!f.isAdmin&&!f.loading&&c.jsxs("div",{className:"flex flex-col items-center justify-center h-screen p-4",children:[c.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-4",children:"你沒有管理後台的存取權限"}),c.jsx("button",{onClick:()=>p("profile"),className:"px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg",children:"返回設定"})]}),_&&c.jsx(Rj,{currentView:t,onNavigate:k=>p(k,{sharedListId:null})}),g&&c.jsx(Pj,{onRefresh:v,onDismiss:w}),!1]})}Au.createRoot(document.getElementById("root")).render(c.jsx(ct.StrictMode,{children:c.jsx(jj,{})}));export{yT as _};
