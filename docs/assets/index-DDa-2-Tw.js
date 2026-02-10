(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dp={exports:{}},Ol={},hp={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),Jy=Symbol.for("react.portal"),Zy=Symbol.for("react.fragment"),ev=Symbol.for("react.strict_mode"),tv=Symbol.for("react.profiler"),nv=Symbol.for("react.provider"),sv=Symbol.for("react.context"),rv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),ov=Symbol.for("react.memo"),lv=Symbol.for("react.lazy"),jh=Symbol.iterator;function av(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_p=Object.assign,pp={};function gr(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||fp}gr.prototype.isReactComponent={};gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mp(){}mp.prototype=gr.prototype;function Tu(t,e,n){this.props=t,this.context=e,this.refs=pp,this.updater=n||fp}var Ru=Tu.prototype=new mp;Ru.constructor=Tu;_p(Ru,gr.prototype);Ru.isPureReactComponent=!0;var Ah=Array.isArray,gp=Object.prototype.hasOwnProperty,Pu={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function vp(t,e,n){var s,r={},i=null,o=null;if(e!=null)for(s in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)gp.call(e,s)&&!yp.hasOwnProperty(s)&&(r[s]=e[s]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}if(t&&t.defaultProps)for(s in l=t.defaultProps,l)r[s]===void 0&&(r[s]=l[s]);return{$$typeof:Fi,type:t,key:i,ref:o,props:r,_owner:Pu.current}}function cv(t,e){return{$$typeof:Fi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fi}function uv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lh=/\/+/g;function ma(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uv(""+t.key):e.toString(36)}function ko(t,e,n,s,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fi:case Jy:o=!0}}if(o)return o=t,r=r(o),t=s===""?"."+ma(o,0):s,Ah(r)?(n="",t!=null&&(n=t.replace(Lh,"$&/")+"/"),ko(r,e,n,"",function(u){return u})):r!=null&&(ju(r)&&(r=cv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,s=s===""?".":s+":",Ah(t))for(var l=0;l<t.length;l++){i=t[l];var a=s+ma(i,l);o+=ko(i,e,n,a,r)}else if(a=av(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=s+ma(i,l++),o+=ko(i,e,n,a,r);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zi(t,e,n){if(t==null)return t;var s=[],r=0;return ko(t,s,"","",function(i){return e.call(n,i,r++)}),s}function dv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qe={current:null},Co={transition:null},hv={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Pu};function xp(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Zi,forEach:function(t,e,n){Zi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zi(t,function(){e++}),e},toArray:function(t){return Zi(t,function(e){return e})||[]},only:function(t){if(!ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=gr;q.Fragment=Zy;q.Profiler=tv;q.PureComponent=Tu;q.StrictMode=ev;q.Suspense=iv;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;q.act=xp;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var s=_p({},t.props),r=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Pu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)gp.call(e,a)&&!yp.hasOwnProperty(a)&&(s[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:Fi,type:t.type,key:r,ref:i,props:s,_owner:o}};q.createContext=function(t){return t={$$typeof:sv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nv,_context:t},t.Consumer=t};q.createElement=vp;q.createFactory=function(t){var e=vp.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:rv,render:t}};q.isValidElement=ju;q.lazy=function(t){return{$$typeof:lv,_payload:{_status:-1,_result:t},_init:dv}};q.memo=function(t,e){return{$$typeof:ov,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Co.transition;Co.transition={};try{t()}finally{Co.transition=e}};q.unstable_act=xp;q.useCallback=function(t,e){return qe.current.useCallback(t,e)};q.useContext=function(t){return qe.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return qe.current.useDeferredValue(t)};q.useEffect=function(t,e){return qe.current.useEffect(t,e)};q.useId=function(){return qe.current.useId()};q.useImperativeHandle=function(t,e,n){return qe.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return qe.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return qe.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return qe.current.useMemo(t,e)};q.useReducer=function(t,e,n){return qe.current.useReducer(t,e,n)};q.useRef=function(t){return qe.current.useRef(t)};q.useState=function(t){return qe.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return qe.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return qe.current.useTransition()};q.version="18.3.1";hp.exports=q;var N=hp.exports;const fv=Xy(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v=N,pv=Symbol.for("react.element"),mv=Symbol.for("react.fragment"),gv=Object.prototype.hasOwnProperty,yv=_v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function wp(t,e,n){var s,r={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(s in e)gv.call(e,s)&&!vv.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps,e)r[s]===void 0&&(r[s]=e[s]);return{$$typeof:pv,type:t,key:i,ref:o,props:r,_owner:yv.current}}Ol.Fragment=mv;Ol.jsx=wp;Ol.jsxs=wp;dp.exports=Ol;var c=dp.exports,ac={},bp={exports:{}},dt={},kp={exports:{}},Cp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,R){var L=A.length;A.push(R);e:for(;0<L;){var M=L-1>>>1,F=A[M];if(0<r(F,R))A[M]=R,A[L]=F,L=M;else break e}}function n(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var R=A[0],L=A.pop();if(L!==R){A[0]=L;e:for(var M=0,F=A.length,Ce=F>>>1;M<Ce;){var Xe=2*(M+1)-1,Vt=A[Xe],Lt=Xe+1,Gn=A[Lt];if(0>r(Vt,L))Lt<F&&0>r(Gn,Vt)?(A[M]=Gn,A[Lt]=L,M=Lt):(A[M]=Vt,A[Xe]=L,M=Xe);else if(Lt<F&&0>r(Gn,L))A[M]=Gn,A[Lt]=L,M=Lt;else break e}}return R}function r(A,R){var L=A.sortIndex-R.sortIndex;return L!==0?L:A.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],h=1,d=null,f=3,g=!1,v=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var R=n(u);R!==null;){if(R.callback===null)s(u);else if(R.startTime<=A)s(u),R.sortIndex=R.expirationTime,e(a,R);else break;R=n(u)}}function x(A){if(b=!1,p(A),!v)if(n(a)!==null)v=!0,fe(k);else{var R=n(u);R!==null&&ft(x,R.startTime-A)}}function k(A,R){v=!1,b&&(b=!1,m(T),T=-1),g=!0;var L=f;try{for(p(R),d=n(a);d!==null&&(!(d.expirationTime>R)||A&&!w());){var M=d.callback;if(typeof M=="function"){d.callback=null,f=d.priorityLevel;var F=M(d.expirationTime<=R);R=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(a)&&s(a),p(R)}else s(a);d=n(a)}if(d!==null)var Ce=!0;else{var Xe=n(u);Xe!==null&&ft(x,Xe.startTime-R),Ce=!1}return Ce}finally{d=null,f=L,g=!1}}var E=!1,I=null,T=-1,U=5,y=-1;function w(){return!(t.unstable_now()-y<U)}function S(){if(I!==null){var A=t.unstable_now();y=A;var R=!0;try{R=I(!0,A)}finally{R?z():(E=!1,I=null)}}else E=!1}var z;if(typeof _=="function")z=function(){_(S)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,V=K.port2;K.port1.onmessage=S,z=function(){V.postMessage(null)}}else z=function(){C(S,0)};function fe(A){I=A,E||(E=!0,z())}function ft(A,R){T=C(function(){A(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,fe(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var L=f;f=R;try{return A()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=f;f=A;try{return R()}finally{f=L}},t.unstable_scheduleCallback=function(A,R,L){var M=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?M+L:M):L=M,A){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,A={id:h++,callback:R,priorityLevel:A,startTime:L,expirationTime:F,sortIndex:-1},L>M?(A.sortIndex=L,e(u,A),n(a)===null&&A===n(u)&&(b?(m(T),T=-1):b=!0,ft(x,L-M))):(A.sortIndex=F,e(a,A),v||g||(v=!0,fe(k))),A},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(A){var R=f;return function(){var L=f;f=R;try{return A.apply(this,arguments)}finally{f=L}}}})(Cp);kp.exports=Cp;var xv=kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=N,ut=xv;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Np=new Set,ui={};function ws(t,e){sr(t,e),sr(t+"Capture",e)}function sr(t,e){for(ui[t]=e,t=0;t<e.length;t++)Np.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=Object.prototype.hasOwnProperty,bv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oh={},Mh={};function kv(t){return cc.call(Mh,t)?!0:cc.call(Oh,t)?!1:bv.test(t)?Mh[t]=!0:(Oh[t]=!0,!1)}function Cv(t,e,n,s){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nv(t,e,n,s){if(e===null||typeof e>"u"||Cv(t,e,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,s,r,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Au=/[\-:]([a-z])/g;function Lu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Au,Lu);Oe[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Au,Lu);Oe[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Au,Lu);Oe[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ou(t,e,n,s){var r=Oe.hasOwnProperty(e)?Oe[e]:null;(r!==null?r.type!==0:s||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nv(e,n,r,s)&&(n=null),s||r===null?kv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,s=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,s?t.setAttributeNS(s,e,n):t.setAttribute(e,n))))}var fn=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Sp=Symbol.for("react.context"),Du=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Ip=Symbol.for("react.offscreen"),Dh=Symbol.iterator;function Ir(t){return t===null||typeof t!="object"?null:(t=Dh&&t[Dh]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,ga;function $r(t){if(ga===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ga=e&&e[1]||""}return`
`+ga+t}var ya=!1;function va(t,e){if(!t||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var s=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){s=u}t.call(e.prototype)}else{try{throw Error()}catch(u){s=u}t()}}catch(u){if(u&&s&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=s.stack.split(`
`),o=r.length-1,l=i.length-1;1<=o&&0<=l&&r[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==i[l]){var a=`
`+r[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$r(t):""}function Ev(t){switch(t.tag){case 5:return $r(t.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return t=va(t.type,!1),t;case 11:return t=va(t.type.render,!1),t;case 1:return t=va(t.type,!0),t;default:return""}}function fc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Ps:return"Portal";case uc:return"Profiler";case Mu:return"StrictMode";case dc:return"Suspense";case hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sp:return(t.displayName||"Context")+".Consumer";case Ep:return(t._context.displayName||"Context")+".Provider";case Du:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Uu:return e=t.displayName||null,e!==null?e:fc(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return fc(t(e))}catch{}}return null}function Sv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fc(e);case 8:return e===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Tp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iv(t){var e=Tp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),s=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){s=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(o){s=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=Iv(t))}function Rp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),s="";return t&&(s=Tp(t)?t.checked?"true":"false":t.value),t=s,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _c(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,s=e.checked!=null?e.checked:e.defaultChecked;n=Fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:s,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pp(t,e){e=e.checked,e!=null&&Ou(t,"checked",e,!1)}function pc(t,e){Pp(t,e);var n=Fn(e.value),s=e.type;if(n!=null)s==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(s==="submit"||s==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mc(t,e.type,n):e.hasOwnProperty("defaultValue")&&mc(t,e.type,Fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var s=e.type;if(!(s!=="submit"&&s!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mc(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hr=Array.isArray;function Hs(t,e,n,s){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&s&&(t[n].defaultSelected=!0)}else{for(n=""+Fn(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,s&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Hr(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fn(n)}}function jp(t,e){var n=Fn(e.value),s=Fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),s!=null&&(t.defaultValue=""+s)}function Bh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ap(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ap(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,Lp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,s,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,s,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function di(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tv=["Webkit","ms","Moz","O"];Object.keys(Gr).forEach(function(t){Tv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gr[e]=Gr[t]})});function Op(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gr.hasOwnProperty(t)&&Gr[t]?(""+e).trim():e+"px"}function Mp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var s=n.indexOf("--")===0,r=Op(n,e[n],s);n==="float"&&(n="cssFloat"),s?t.setProperty(n,r):t[n]=r}}var Rv=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(Rv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,Vs=null,Ys=null;function Wh(t){if(t=Wi(t)){if(typeof bc!="function")throw Error(P(280));var e=t.stateNode;e&&(e=zl(e),bc(t.stateNode,t.type,e))}}function Dp(t){Vs?Ys?Ys.push(t):Ys=[t]:Vs=t}function Up(){if(Vs){var t=Vs,e=Ys;if(Ys=Vs=null,Wh(t),e)for(t=0;t<e.length;t++)Wh(e[t])}}function Fp(t,e){return t(e)}function zp(){}var xa=!1;function Bp(t,e,n){if(xa)return t(e,n);xa=!0;try{return Fp(t,e,n)}finally{xa=!1,(Vs!==null||Ys!==null)&&(zp(),Up())}}function hi(t,e){var n=t.stateNode;if(n===null)return null;var s=zl(n);if(s===null)return null;n=s[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var kc=!1;if(on)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{kc=!1}function Pv(t,e,n,s,r,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var qr=!1,Wo=null,$o=!1,Cc=null,jv={onError:function(t){qr=!0,Wo=t}};function Av(t,e,n,s,r,i,o,l,a){qr=!1,Wo=null,Pv.apply(jv,arguments)}function Lv(t,e,n,s,r,i,o,l,a){if(Av.apply(this,arguments),qr){if(qr){var u=Wo;qr=!1,Wo=null}else throw Error(P(198));$o||($o=!0,Cc=u)}}function bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $h(t){if(bs(t)!==t)throw Error(P(188))}function Ov(t){var e=t.alternate;if(!e){if(e=bs(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,s=e;;){var r=n.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){n=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===n)return $h(r),t;if(i===s)return $h(r),e;i=i.sibling}throw Error(P(188))}if(n.return!==s.return)n=r,s=i;else{for(var o=!1,l=r.child;l;){if(l===n){o=!0,n=r,s=i;break}if(l===s){o=!0,s=r,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,s=r;break}if(l===s){o=!0,s=i,n=r;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==s)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function $p(t){return t=Ov(t),t!==null?Hp(t):null}function Hp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hp(t);if(e!==null)return e;t=t.sibling}return null}var Vp=ut.unstable_scheduleCallback,Hh=ut.unstable_cancelCallback,Mv=ut.unstable_shouldYield,Dv=ut.unstable_requestPaint,ve=ut.unstable_now,Uv=ut.unstable_getCurrentPriorityLevel,zu=ut.unstable_ImmediatePriority,Yp=ut.unstable_UserBlockingPriority,Ho=ut.unstable_NormalPriority,Fv=ut.unstable_LowPriority,Qp=ut.unstable_IdlePriority,Ml=null,Ft=null;function zv(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:$v,Bv=Math.log,Wv=Math.LN2;function $v(t){return t>>>=0,t===0?32:31-(Bv(t)/Wv|0)|0}var so=64,ro=4194304;function Vr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var s=0,r=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~r;l!==0?s=Vr(l):(i&=o,i!==0&&(s=Vr(i)))}else o=n&~r,o!==0?s=Vr(o):i!==0&&(s=Vr(i));if(s===0)return 0;if(e!==0&&e!==s&&!(e&r)&&(r=s&-s,i=e&-e,r>=i||r===16&&(i&4194240)!==0))return e;if(s&4&&(s|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=s;0<e;)n=31-It(e),r=1<<n,s|=t[n],e&=~r;return s}function Hv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vv(t,e){for(var n=t.suspendedLanes,s=t.pingedLanes,r=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-It(i),l=1<<o,a=r[o];a===-1?(!(l&n)||l&s)&&(r[o]=Hv(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gp(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function wa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function Yv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var s=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-It(n),i=1<<r;e[r]=0,s[r]=-1,t[r]=-1,n&=~i}}function Bu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var s=31-It(n),r=1<<s;r&e|t[s]&e&&(t[s]|=e),n&=~r}}var ee=0;function qp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kp,Wu,Xp,Jp,Zp,Ec=!1,io=[],In=null,Tn=null,Rn=null,fi=new Map,_i=new Map,vn=[],Qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vh(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Rr(t,e,n,s,r,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},e!==null&&(e=Wi(e),e!==null&&Wu(e)),t):(t.eventSystemFlags|=s,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Gv(t,e,n,s,r){switch(e){case"focusin":return In=Rr(In,t,e,n,s,r),!0;case"dragenter":return Tn=Rr(Tn,t,e,n,s,r),!0;case"mouseover":return Rn=Rr(Rn,t,e,n,s,r),!0;case"pointerover":var i=r.pointerId;return fi.set(i,Rr(fi.get(i)||null,t,e,n,s,r)),!0;case"gotpointercapture":return i=r.pointerId,_i.set(i,Rr(_i.get(i)||null,t,e,n,s,r)),!0}return!1}function em(t){var e=Zn(t.target);if(e!==null){var n=bs(e);if(n!==null){if(e=n.tag,e===13){if(e=Wp(n),e!==null){t.blockedOn=e,Zp(t.priority,function(){Xp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var s=new n.constructor(n.type,n);wc=s,n.target.dispatchEvent(s),wc=null}else return e=Wi(n),e!==null&&Wu(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){No(t)&&n.delete(e)}function qv(){Ec=!1,In!==null&&No(In)&&(In=null),Tn!==null&&No(Tn)&&(Tn=null),Rn!==null&&No(Rn)&&(Rn=null),fi.forEach(Yh),_i.forEach(Yh)}function Pr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ec||(Ec=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,qv)))}function pi(t){function e(r){return Pr(r,t)}if(0<io.length){Pr(io[0],t);for(var n=1;n<io.length;n++){var s=io[n];s.blockedOn===t&&(s.blockedOn=null)}}for(In!==null&&Pr(In,t),Tn!==null&&Pr(Tn,t),Rn!==null&&Pr(Rn,t),fi.forEach(e),_i.forEach(e),n=0;n<vn.length;n++)s=vn[n],s.blockedOn===t&&(s.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)em(n),n.blockedOn===null&&vn.shift()}var Qs=fn.ReactCurrentBatchConfig,Yo=!0;function Kv(t,e,n,s){var r=ee,i=Qs.transition;Qs.transition=null;try{ee=1,$u(t,e,n,s)}finally{ee=r,Qs.transition=i}}function Xv(t,e,n,s){var r=ee,i=Qs.transition;Qs.transition=null;try{ee=4,$u(t,e,n,s)}finally{ee=r,Qs.transition=i}}function $u(t,e,n,s){if(Yo){var r=Sc(t,e,n,s);if(r===null)Pa(t,e,s,Qo,n),Vh(t,s);else if(Gv(r,t,e,n,s))s.stopPropagation();else if(Vh(t,s),e&4&&-1<Qv.indexOf(t)){for(;r!==null;){var i=Wi(r);if(i!==null&&Kp(i),i=Sc(t,e,n,s),i===null&&Pa(t,e,s,Qo,n),i===r)break;r=i}r!==null&&s.stopPropagation()}else Pa(t,e,s,null,n)}}var Qo=null;function Sc(t,e,n,s){if(Qo=null,t=Fu(s),t=Zn(t),t!==null)if(e=bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qo=t,null}function tm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uv()){case zu:return 1;case Yp:return 4;case Ho:case Fv:return 16;case Qp:return 536870912;default:return 16}default:return 16}}var Nn=null,Hu=null,Eo=null;function nm(){if(Eo)return Eo;var t,e=Hu,n=e.length,s,r="value"in Nn?Nn.value:Nn.textContent,i=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(s=1;s<=o&&e[n-s]===r[i-s];s++);return Eo=r.slice(t,1<s?1-s:void 0)}function So(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Qh(){return!1}function ht(t){function e(n,s,r,i,o){this._reactName=n,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oo:Qh,this.isPropagationStopped=Qh,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=ht(yr),Bi=he({},yr,{view:0,detail:0}),Jv=ht(Bi),ba,ka,jr,Dl=he({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jr&&(jr&&t.type==="mousemove"?(ba=t.screenX-jr.screenX,ka=t.screenY-jr.screenY):ka=ba=0,jr=t),ba)},movementY:function(t){return"movementY"in t?t.movementY:ka}}),Gh=ht(Dl),Zv=he({},Dl,{dataTransfer:0}),ex=ht(Zv),tx=he({},Bi,{relatedTarget:0}),Ca=ht(tx),nx=he({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),sx=ht(nx),rx=he({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ix=ht(rx),ox=he({},yr,{data:0}),qh=ht(ox),lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ux(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cx[t])?!!e[t]:!1}function Yu(){return ux}var dx=he({},Bi,{key:function(t){if(t.key){var e=lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ax[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yu,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hx=ht(dx),fx=he({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=ht(fx),_x=he({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yu}),px=ht(_x),mx=he({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=ht(mx),yx=he({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=ht(yx),xx=[9,13,27,32],Qu=on&&"CompositionEvent"in window,Kr=null;on&&"documentMode"in document&&(Kr=document.documentMode);var wx=on&&"TextEvent"in window&&!Kr,sm=on&&(!Qu||Kr&&8<Kr&&11>=Kr),Xh=" ",Jh=!1;function rm(t,e){switch(t){case"keyup":return xx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var As=!1;function bx(t,e){switch(t){case"compositionend":return im(e);case"keypress":return e.which!==32?null:(Jh=!0,Xh);case"textInput":return t=e.data,t===Xh&&Jh?null:t;default:return null}}function kx(t,e){if(As)return t==="compositionend"||!Qu&&rm(t,e)?(t=nm(),Eo=Hu=Nn=null,As=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sm&&e.locale!=="ko"?null:e.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cx[t.type]:e==="textarea"}function om(t,e,n,s){Dp(s),e=Go(e,"onChange"),0<e.length&&(n=new Vu("onChange","change",null,n,s),t.push({event:n,listeners:e}))}var Xr=null,mi=null;function Nx(t){gm(t,0)}function Ul(t){var e=Ms(t);if(Rp(e))return t}function Ex(t,e){if(t==="change")return e}var lm=!1;if(on){var Na;if(on){var Ea="oninput"in document;if(!Ea){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),Ea=typeof ef.oninput=="function"}Na=Ea}else Na=!1;lm=Na&&(!document.documentMode||9<document.documentMode)}function tf(){Xr&&(Xr.detachEvent("onpropertychange",am),mi=Xr=null)}function am(t){if(t.propertyName==="value"&&Ul(mi)){var e=[];om(e,mi,t,Fu(t)),Bp(Nx,e)}}function Sx(t,e,n){t==="focusin"?(tf(),Xr=e,mi=n,Xr.attachEvent("onpropertychange",am)):t==="focusout"&&tf()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(mi)}function Tx(t,e){if(t==="click")return Ul(e)}function Rx(t,e){if(t==="input"||t==="change")return Ul(e)}function Px(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:Px;function gi(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),s=Object.keys(e);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var r=n[s];if(!cc.call(e,r)||!jt(t[r],e[r]))return!1}return!0}function nf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,e){var n=nf(t);t=0;for(var s;n;){if(n.nodeType===3){if(s=t+n.textContent.length,t<=e&&s>=e)return{node:n,offset:e-t};t=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nf(n)}}function cm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function um(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function Gu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jx(t){var e=um(),n=t.focusedElem,s=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cm(n.ownerDocument.documentElement,n)){if(s!==null&&Gu(n)){if(e=s.start,t=s.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!t.extend&&i>s&&(r=s,s=i,i=r),r=sf(n,i);var o=sf(n,s);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),i>s?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ax=on&&"documentMode"in document&&11>=document.documentMode,Ls=null,Ic=null,Jr=null,Tc=!1;function rf(t,e,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tc||Ls==null||Ls!==Bo(s)||(s=Ls,"selectionStart"in s&&Gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Jr&&gi(Jr,s)||(Jr=s,s=Go(Ic,"onSelect"),0<s.length&&(e=new Vu("onSelect","select",null,e,n),t.push({event:e,listeners:s}),e.target=Ls)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Sa={},dm={};on&&(dm=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Fl(t){if(Sa[t])return Sa[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dm)return Sa[t]=e[n];return t}var hm=Fl("animationend"),fm=Fl("animationiteration"),_m=Fl("animationstart"),pm=Fl("transitionend"),mm=new Map,of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){mm.set(t,e),ws(e,[t])}for(var Ia=0;Ia<of.length;Ia++){var Ta=of[Ia],Lx=Ta.toLowerCase(),Ox=Ta[0].toUpperCase()+Ta.slice(1);Hn(Lx,"on"+Ox)}Hn(hm,"onAnimationEnd");Hn(fm,"onAnimationIteration");Hn(_m,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(pm,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yr));function lf(t,e,n){var s=t.type||"unknown-event";t.currentTarget=n,Lv(s,e,void 0,t),t.currentTarget=null}function gm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var s=t[n],r=s.event;s=s.listeners;e:{var i=void 0;if(e)for(var o=s.length-1;0<=o;o--){var l=s[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&r.isPropagationStopped())break e;lf(r,l,u),i=a}else for(o=0;o<s.length;o++){if(l=s[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&r.isPropagationStopped())break e;lf(r,l,u),i=a}}}if($o)throw t=Cc,$o=!1,Cc=null,t}function le(t,e){var n=e[Lc];n===void 0&&(n=e[Lc]=new Set);var s=t+"__bubble";n.has(s)||(ym(e,t,2,!1),n.add(s))}function Ra(t,e,n){var s=0;e&&(s|=4),ym(n,t,s,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function yi(t){if(!t[ao]){t[ao]=!0,Np.forEach(function(n){n!=="selectionchange"&&(Mx.has(n)||Ra(n,!1,t),Ra(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,Ra("selectionchange",!1,e))}}function ym(t,e,n,s){switch(tm(e)){case 1:var r=Kv;break;case 4:r=Xv;break;default:r=$u}n=r.bind(null,e,n,t),r=void 0,!kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),s?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pa(t,e,n,s,r){var i=s;if(!(e&1)&&!(e&2)&&s!==null)e:for(;;){if(s===null)return;var o=s.tag;if(o===3||o===4){var l=s.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=s.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;o=o.return}for(;l!==null;){if(o=Zn(l),o===null)return;if(a=o.tag,a===5||a===6){s=i=o;continue e}l=l.parentNode}}s=s.return}Bp(function(){var u=i,h=Fu(n),d=[];e:{var f=mm.get(t);if(f!==void 0){var g=Vu,v=t;switch(t){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":g=hx;break;case"focusin":v="focus",g=Ca;break;case"focusout":v="blur",g=Ca;break;case"beforeblur":case"afterblur":g=Ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=px;break;case hm:case fm:case _m:g=sx;break;case pm:g=gx;break;case"scroll":g=Jv;break;case"wheel":g=vx;break;case"copy":case"cut":case"paste":g=ix;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kh}var b=(e&4)!==0,C=!b&&t==="scroll",m=b?f!==null?f+"Capture":null:f;b=[];for(var _=u,p;_!==null;){p=_;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,m!==null&&(x=hi(_,m),x!=null&&b.push(vi(_,x,p)))),C)break;_=_.return}0<b.length&&(f=new g(f,v,null,n,h),d.push({event:f,listeners:b}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==wc&&(v=n.relatedTarget||n.fromElement)&&(Zn(v)||v[ln]))break e;if((g||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Zn(v):null,v!==null&&(C=bs(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(b=Gh,x="onMouseLeave",m="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(b=Kh,x="onPointerLeave",m="onPointerEnter",_="pointer"),C=g==null?f:Ms(g),p=v==null?f:Ms(v),f=new b(x,_+"leave",g,n,h),f.target=C,f.relatedTarget=p,x=null,Zn(h)===u&&(b=new b(m,_+"enter",v,n,h),b.target=p,b.relatedTarget=C,x=b),C=x,g&&v)t:{for(b=g,m=v,_=0,p=b;p;p=Is(p))_++;for(p=0,x=m;x;x=Is(x))p++;for(;0<_-p;)b=Is(b),_--;for(;0<p-_;)m=Is(m),p--;for(;_--;){if(b===m||m!==null&&b===m.alternate)break t;b=Is(b),m=Is(m)}b=null}else b=null;g!==null&&af(d,f,g,b,!1),v!==null&&C!==null&&af(d,C,v,b,!0)}}e:{if(f=u?Ms(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=Ex;else if(Zh(f))if(lm)k=Rx;else{k=Ix;var E=Sx}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Tx);if(k&&(k=k(t,u))){om(d,k,n,h);break e}E&&E(t,f,u),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&mc(f,"number",f.value)}switch(E=u?Ms(u):window,t){case"focusin":(Zh(E)||E.contentEditable==="true")&&(Ls=E,Ic=u,Jr=null);break;case"focusout":Jr=Ic=Ls=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,rf(d,n,h);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":rf(d,n,h)}var I;if(Qu)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else As?rm(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(sm&&n.locale!=="ko"&&(As||T!=="onCompositionStart"?T==="onCompositionEnd"&&As&&(I=nm()):(Nn=h,Hu="value"in Nn?Nn.value:Nn.textContent,As=!0)),E=Go(u,T),0<E.length&&(T=new qh(T,t,null,n,h),d.push({event:T,listeners:E}),I?T.data=I:(I=im(n),I!==null&&(T.data=I)))),(I=wx?bx(t,n):kx(t,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(h=new qh("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=I))}gm(d,e)})}function vi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",s=[];t!==null;){var r=t,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=hi(t,n),i!=null&&s.unshift(vi(t,i,r)),i=hi(t,e),i!=null&&s.push(vi(t,i,r))),t=t.return}return s}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function af(t,e,n,s,r){for(var i=e._reactName,o=[];n!==null&&n!==s;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===s)break;l.tag===5&&u!==null&&(l=u,r?(a=hi(n,i),a!=null&&o.unshift(vi(n,a,l))):r||(a=hi(n,i),a!=null&&o.push(vi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Dx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function cf(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Ux,"")}function co(t,e,n){if(e=cf(e),cf(t)!==e&&n)throw Error(P(425))}function qo(){}var Rc=null,Pc=null;function jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ac=typeof setTimeout=="function"?setTimeout:void 0,Fx=typeof clearTimeout=="function"?clearTimeout:void 0,uf=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof uf<"u"?function(t){return uf.resolve(null).then(t).catch(Bx)}:Ac;function Bx(t){setTimeout(function(){throw t})}function ja(t,e){var n=e,s=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(s===0){t.removeChild(r),pi(e);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=r}while(n);pi(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function df(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+vr,xi="__reactProps$"+vr,ln="__reactContainer$"+vr,Lc="__reactEvents$"+vr,Wx="__reactListeners$"+vr,$x="__reactHandles$"+vr;function Zn(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=df(t);t!==null;){if(n=t[Dt])return n;t=df(t)}return e}t=n,n=t.parentNode}return null}function Wi(t){return t=t[Dt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function zl(t){return t[xi]||null}var Oc=[],Ds=-1;function Vn(t){return{current:t}}function ae(t){0>Ds||(t.current=Oc[Ds],Oc[Ds]=null,Ds--)}function oe(t,e){Ds++,Oc[Ds]=t.current,t.current=e}var zn={},We=Vn(zn),st=Vn(!1),cs=zn;function rr(t,e){var n=t.type.contextTypes;if(!n)return zn;var s=t.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===e)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in n)r[i]=e[i];return s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rt(t){return t=t.childContextTypes,t!=null}function Ko(){ae(st),ae(We)}function hf(t,e,n){if(We.current!==zn)throw Error(P(168));oe(We,e),oe(st,n)}function vm(t,e,n){var s=t.stateNode;if(e=e.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var r in s)if(!(r in e))throw Error(P(108,Sv(t)||"Unknown",r));return he({},n,s)}function Xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,cs=We.current,oe(We,t),oe(st,st.current),!0}function ff(t,e,n){var s=t.stateNode;if(!s)throw Error(P(169));n?(t=vm(t,e,cs),s.__reactInternalMemoizedMergedChildContext=t,ae(st),ae(We),oe(We,t)):ae(st),oe(st,n)}var Gt=null,Bl=!1,Aa=!1;function xm(t){Gt===null?Gt=[t]:Gt.push(t)}function Hx(t){Bl=!0,xm(t)}function Yn(){if(!Aa&&Gt!==null){Aa=!0;var t=0,e=ee;try{var n=Gt;for(ee=1;t<n.length;t++){var s=n[t];do s=s(!0);while(s!==null)}Gt=null,Bl=!1}catch(r){throw Gt!==null&&(Gt=Gt.slice(t+1)),Vp(zu,Yn),r}finally{ee=e,Aa=!1}}return null}var Us=[],Fs=0,Jo=null,Zo=0,_t=[],pt=0,us=null,Kt=1,Xt="";function qn(t,e){Us[Fs++]=Zo,Us[Fs++]=Jo,Jo=t,Zo=e}function wm(t,e,n){_t[pt++]=Kt,_t[pt++]=Xt,_t[pt++]=us,us=t;var s=Kt;t=Xt;var r=32-It(s)-1;s&=~(1<<r),n+=1;var i=32-It(e)+r;if(30<i){var o=r-r%5;i=(s&(1<<o)-1).toString(32),s>>=o,r-=o,Kt=1<<32-It(e)+r|n<<r|s,Xt=i+t}else Kt=1<<i|n<<r|s,Xt=t}function qu(t){t.return!==null&&(qn(t,1),wm(t,1,0))}function Ku(t){for(;t===Jo;)Jo=Us[--Fs],Us[Fs]=null,Zo=Us[--Fs],Us[Fs]=null;for(;t===us;)us=_t[--pt],_t[pt]=null,Xt=_t[--pt],_t[pt]=null,Kt=_t[--pt],_t[pt]=null}var ct=null,lt=null,ce=!1,Nt=null;function bm(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _f(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ct=t,lt=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ct=t,lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=us!==null?{id:Kt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ct=t,lt=null,!0):!1;default:return!1}}function Mc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(ce){var e=lt;if(e){var n=e;if(!_f(t,e)){if(Mc(t))throw Error(P(418));e=Pn(n.nextSibling);var s=ct;e&&_f(t,e)?bm(s,n):(t.flags=t.flags&-4097|2,ce=!1,ct=t)}}else{if(Mc(t))throw Error(P(418));t.flags=t.flags&-4097|2,ce=!1,ct=t}}}function pf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ct=t}function uo(t){if(t!==ct)return!1;if(!ce)return pf(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!jc(t.type,t.memoizedProps)),e&&(e=lt)){if(Mc(t))throw km(),Error(P(418));for(;e;)bm(t,e),e=Pn(e.nextSibling)}if(pf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){lt=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}lt=null}}else lt=ct?Pn(t.stateNode.nextSibling):null;return!0}function km(){for(var t=lt;t;)t=Pn(t.nextSibling)}function ir(){lt=ct=null,ce=!1}function Xu(t){Nt===null?Nt=[t]:Nt.push(t)}var Vx=fn.ReactCurrentBatchConfig;function Ar(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var s=n.stateNode}if(!s)throw Error(P(147,t));var r=s,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=r.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mf(t){var e=t._init;return e(t._payload)}function Cm(t){function e(m,_){if(t){var p=m.deletions;p===null?(m.deletions=[_],m.flags|=16):p.push(_)}}function n(m,_){if(!t)return null;for(;_!==null;)e(m,_),_=_.sibling;return null}function s(m,_){for(m=new Map;_!==null;)_.key!==null?m.set(_.key,_):m.set(_.index,_),_=_.sibling;return m}function r(m,_){return m=On(m,_),m.index=0,m.sibling=null,m}function i(m,_,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<_?(m.flags|=2,_):p):(m.flags|=2,_)):(m.flags|=1048576,_)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,_,p,x){return _===null||_.tag!==6?(_=za(p,m.mode,x),_.return=m,_):(_=r(_,p),_.return=m,_)}function a(m,_,p,x){var k=p.type;return k===js?h(m,_,p.props.children,x,p.key):_!==null&&(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===gn&&mf(k)===_.type)?(x=r(_,p.props),x.ref=Ar(m,_,p),x.return=m,x):(x=Lo(p.type,p.key,p.props,null,m.mode,x),x.ref=Ar(m,_,p),x.return=m,x)}function u(m,_,p,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=Ba(p,m.mode,x),_.return=m,_):(_=r(_,p.children||[]),_.return=m,_)}function h(m,_,p,x,k){return _===null||_.tag!==7?(_=is(p,m.mode,x,k),_.return=m,_):(_=r(_,p),_.return=m,_)}function d(m,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=za(""+_,m.mode,p),_.return=m,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case eo:return p=Lo(_.type,_.key,_.props,null,m.mode,p),p.ref=Ar(m,null,_),p.return=m,p;case Ps:return _=Ba(_,m.mode,p),_.return=m,_;case gn:var x=_._init;return d(m,x(_._payload),p)}if(Hr(_)||Ir(_))return _=is(_,m.mode,p,null),_.return=m,_;ho(m,_)}return null}function f(m,_,p,x){var k=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(m,_,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:return p.key===k?a(m,_,p,x):null;case Ps:return p.key===k?u(m,_,p,x):null;case gn:return k=p._init,f(m,_,k(p._payload),x)}if(Hr(p)||Ir(p))return k!==null?null:h(m,_,p,x,null);ho(m,p)}return null}function g(m,_,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(p)||null,l(_,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case eo:return m=m.get(x.key===null?p:x.key)||null,a(_,m,x,k);case Ps:return m=m.get(x.key===null?p:x.key)||null,u(_,m,x,k);case gn:var E=x._init;return g(m,_,p,E(x._payload),k)}if(Hr(x)||Ir(x))return m=m.get(p)||null,h(_,m,x,k,null);ho(_,x)}return null}function v(m,_,p,x){for(var k=null,E=null,I=_,T=_=0,U=null;I!==null&&T<p.length;T++){I.index>T?(U=I,I=null):U=I.sibling;var y=f(m,I,p[T],x);if(y===null){I===null&&(I=U);break}t&&I&&y.alternate===null&&e(m,I),_=i(y,_,T),E===null?k=y:E.sibling=y,E=y,I=U}if(T===p.length)return n(m,I),ce&&qn(m,T),k;if(I===null){for(;T<p.length;T++)I=d(m,p[T],x),I!==null&&(_=i(I,_,T),E===null?k=I:E.sibling=I,E=I);return ce&&qn(m,T),k}for(I=s(m,I);T<p.length;T++)U=g(I,m,T,p[T],x),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?T:U.key),_=i(U,_,T),E===null?k=U:E.sibling=U,E=U);return t&&I.forEach(function(w){return e(m,w)}),ce&&qn(m,T),k}function b(m,_,p,x){var k=Ir(p);if(typeof k!="function")throw Error(P(150));if(p=k.call(p),p==null)throw Error(P(151));for(var E=k=null,I=_,T=_=0,U=null,y=p.next();I!==null&&!y.done;T++,y=p.next()){I.index>T?(U=I,I=null):U=I.sibling;var w=f(m,I,y.value,x);if(w===null){I===null&&(I=U);break}t&&I&&w.alternate===null&&e(m,I),_=i(w,_,T),E===null?k=w:E.sibling=w,E=w,I=U}if(y.done)return n(m,I),ce&&qn(m,T),k;if(I===null){for(;!y.done;T++,y=p.next())y=d(m,y.value,x),y!==null&&(_=i(y,_,T),E===null?k=y:E.sibling=y,E=y);return ce&&qn(m,T),k}for(I=s(m,I);!y.done;T++,y=p.next())y=g(I,m,T,y.value,x),y!==null&&(t&&y.alternate!==null&&I.delete(y.key===null?T:y.key),_=i(y,_,T),E===null?k=y:E.sibling=y,E=y);return t&&I.forEach(function(S){return e(m,S)}),ce&&qn(m,T),k}function C(m,_,p,x){if(typeof p=="object"&&p!==null&&p.type===js&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:e:{for(var k=p.key,E=_;E!==null;){if(E.key===k){if(k=p.type,k===js){if(E.tag===7){n(m,E.sibling),_=r(E,p.props.children),_.return=m,m=_;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===gn&&mf(k)===E.type){n(m,E.sibling),_=r(E,p.props),_.ref=Ar(m,E,p),_.return=m,m=_;break e}n(m,E);break}else e(m,E);E=E.sibling}p.type===js?(_=is(p.props.children,m.mode,x,p.key),_.return=m,m=_):(x=Lo(p.type,p.key,p.props,null,m.mode,x),x.ref=Ar(m,_,p),x.return=m,m=x)}return o(m);case Ps:e:{for(E=p.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(m,_.sibling),_=r(_,p.children||[]),_.return=m,m=_;break e}else{n(m,_);break}else e(m,_);_=_.sibling}_=Ba(p,m.mode,x),_.return=m,m=_}return o(m);case gn:return E=p._init,C(m,_,E(p._payload),x)}if(Hr(p))return v(m,_,p,x);if(Ir(p))return b(m,_,p,x);ho(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(m,_.sibling),_=r(_,p),_.return=m,m=_):(n(m,_),_=za(p,m.mode,x),_.return=m,m=_),o(m)):n(m,_)}return C}var or=Cm(!0),Nm=Cm(!1),el=Vn(null),tl=null,zs=null,Ju=null;function Zu(){Ju=zs=tl=null}function ed(t){var e=el.current;ae(el),t._currentValue=e}function Uc(t,e,n){for(;t!==null;){var s=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,s!==null&&(s.childLanes|=e)):s!==null&&(s.childLanes&e)!==e&&(s.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){tl=t,Ju=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Ju!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(tl===null)throw Error(P(308));zs=t,tl.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var es=null;function td(t){es===null?es=[t]:es.push(t)}function Em(t,e,n,s){var r=e.interleaved;return r===null?(n.next=n,td(e)):(n.next=r.next,r.next=n),e.interleaved=n,an(t,s)}function an(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,X&2){var r=s.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),s.pending=e,an(t,n)}return r=s.interleaved,r===null?(e.next=e,td(s)):(e.next=r.next,r.next=e),s.interleaved=e,an(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var s=e.lanes;s&=t.pendingLanes,n|=s,e.lanes=n,Bu(t,n)}}function gf(t,e){var n=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var r=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?r=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?r=i=e:i=i.next=e}else r=i=e;n={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,s){var r=t.updateQueue;yn=!1;var i=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==o&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=a))}if(i!==null){var d=r.baseState;o=0,h=u=a=null,l=i;do{var f=l.lane,g=l.eventTime;if((s&f)===f){h!==null&&(h=h.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,b=l;switch(f=e,g=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=he({},d,f);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=g,a=d):h=h.next=g,o|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(a=d),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else i===null&&(r.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=d}}function yf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var s=t[e],r=s.callback;if(r!==null){if(s.callback=null,s=n,typeof r!="function")throw Error(P(191,r));r.call(s)}}}var $i={},zt=Vn($i),wi=Vn($i),bi=Vn($i);function ts(t){if(t===$i)throw Error(P(174));return t}function sd(t,e){switch(oe(bi,e),oe(wi,t),oe(zt,$i),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yc(e,t)}ae(zt),oe(zt,e)}function lr(){ae(zt),ae(wi),ae(bi)}function Im(t){ts(bi.current);var e=ts(zt.current),n=yc(e,t.type);e!==n&&(oe(wi,t),oe(zt,n))}function rd(t){wi.current===t&&(ae(zt),ae(wi))}var ue=Vn(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var La=[];function id(){for(var t=0;t<La.length;t++)La[t]._workInProgressVersionPrimary=null;La.length=0}var To=fn.ReactCurrentDispatcher,Oa=fn.ReactCurrentBatchConfig,ds=0,de=null,we=null,Ee=null,rl=!1,Zr=!1,ki=0,Yx=0;function De(){throw Error(P(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function ld(t,e,n,s,r,i){if(ds=i,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,To.current=t===null||t.memoizedState===null?Kx:Xx,t=n(s,r),Zr){i=0;do{if(Zr=!1,ki=0,25<=i)throw Error(P(301));i+=1,Ee=we=null,e.updateQueue=null,To.current=Jx,t=n(s,r)}while(Zr)}if(To.current=il,e=we!==null&&we.next!==null,ds=0,Ee=we=de=null,rl=!1,e)throw Error(P(300));return t}function ad(){var t=ki!==0;return ki=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function wt(){if(we===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Ee===null?de.memoizedState:Ee.next;if(e!==null)Ee=e,we=t;else{if(t===null)throw Error(P(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?de.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Ci(t,e){return typeof e=="function"?e(t):e}function Ma(t){var e=wt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var s=we,r=s.baseQueue,i=n.pending;if(i!==null){if(r!==null){var o=r.next;r.next=i.next,i.next=o}s.baseQueue=r=i,n.pending=null}if(r!==null){i=r.next,s=s.baseState;var l=o=null,a=null,u=i;do{var h=u.lane;if((ds&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),s=u.hasEagerState?u.eagerState:t(s,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=s):a=a.next=d,de.lanes|=h,hs|=h}u=u.next}while(u!==null&&u!==i);a===null?o=s:a.next=l,jt(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseState=o,e.baseQueue=a,n.lastRenderedState=s}if(t=n.interleaved,t!==null){r=t;do i=r.lane,de.lanes|=i,hs|=i,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Da(t){var e=wt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var s=n.dispatch,r=n.pending,i=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do i=t(i,o.action),o=o.next;while(o!==r);jt(i,e.memoizedState)||(et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,s]}function Tm(){}function Rm(t,e){var n=de,s=wt(),r=e(),i=!jt(s.memoizedState,r);if(i&&(s.memoizedState=r,et=!0),s=s.queue,cd(Am.bind(null,n,s,t),[t]),s.getSnapshot!==e||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ni(9,jm.bind(null,n,s,r,e),void 0,null),Re===null)throw Error(P(349));ds&30||Pm(n,e,r)}return r}function Pm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jm(t,e,n,s){e.value=n,e.getSnapshot=s,Lm(e)&&Om(t)}function Am(t,e,n){return n(function(){Lm(e)&&Om(t)})}function Lm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function Om(t){var e=an(t,1);e!==null&&Tt(e,t,1,-1)}function vf(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:t},e.queue=t,t=t.dispatch=qx.bind(null,de,t),[e.memoizedState,t]}function Ni(t,e,n,s){return t={tag:t,create:e,destroy:n,deps:s,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(s=n.next,n.next=t,t.next=s,e.lastEffect=t)),t}function Mm(){return wt().memoizedState}function Ro(t,e,n,s){var r=Mt();de.flags|=t,r.memoizedState=Ni(1|e,n,void 0,s===void 0?null:s)}function Wl(t,e,n,s){var r=wt();s=s===void 0?null:s;var i=void 0;if(we!==null){var o=we.memoizedState;if(i=o.destroy,s!==null&&od(s,o.deps)){r.memoizedState=Ni(e,n,i,s);return}}de.flags|=t,r.memoizedState=Ni(1|e,n,i,s)}function xf(t,e){return Ro(8390656,8,t,e)}function cd(t,e){return Wl(2048,8,t,e)}function Dm(t,e){return Wl(4,2,t,e)}function Um(t,e){return Wl(4,4,t,e)}function Fm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zm(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Fm.bind(null,e,t),n)}function ud(){}function Bm(t,e){var n=wt();e=e===void 0?null:e;var s=n.memoizedState;return s!==null&&e!==null&&od(e,s[1])?s[0]:(n.memoizedState=[t,e],t)}function Wm(t,e){var n=wt();e=e===void 0?null:e;var s=n.memoizedState;return s!==null&&e!==null&&od(e,s[1])?s[0]:(t=t(),n.memoizedState=[t,e],t)}function $m(t,e,n){return ds&21?(jt(n,e)||(n=Gp(),de.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function Qx(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var s=Oa.transition;Oa.transition={};try{t(!1),e()}finally{ee=n,Oa.transition=s}}function Hm(){return wt().memoizedState}function Gx(t,e,n){var s=Ln(t);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},Vm(t))Ym(e,n);else if(n=Em(t,e,n,s),n!==null){var r=Ye();Tt(n,t,s,r),Qm(n,e,s)}}function qx(t,e,n){var s=Ln(t),r={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vm(t))Ym(e,r);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(r.hasEagerState=!0,r.eagerState=l,jt(l,o)){var a=e.interleaved;a===null?(r.next=r,td(e)):(r.next=a.next,a.next=r),e.interleaved=r;return}}catch{}finally{}n=Em(t,e,r,s),n!==null&&(r=Ye(),Tt(n,t,s,r),Qm(n,e,s))}}function Vm(t){var e=t.alternate;return t===de||e!==null&&e===de}function Ym(t,e){Zr=rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qm(t,e,n){if(n&4194240){var s=e.lanes;s&=t.pendingLanes,n|=s,e.lanes=n,Bu(t,n)}}var il={readContext:xt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Kx={readContext:xt,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:xf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ro(4194308,4,Fm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ro(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ro(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var s=Mt();return e=n!==void 0?n(e):e,s.memoizedState=s.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},s.queue=t,t=t.dispatch=Gx.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:vf,useDebugValue:ud,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=vf(!1),e=t[0];return t=Qx.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var s=de,r=Mt();if(ce){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Re===null)throw Error(P(349));ds&30||Pm(s,e,n)}r.memoizedState=n;var i={value:n,getSnapshot:e};return r.queue=i,xf(Am.bind(null,s,i,t),[t]),s.flags|=2048,Ni(9,jm.bind(null,s,i,n,e),void 0,null),n},useId:function(){var t=Mt(),e=Re.identifierPrefix;if(ce){var n=Xt,s=Kt;n=(s&~(1<<32-It(s)-1)).toString(32)+n,e=":"+e+"R"+n,n=ki++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xx={readContext:xt,useCallback:Bm,useContext:xt,useEffect:cd,useImperativeHandle:zm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Wm,useReducer:Ma,useRef:Mm,useState:function(){return Ma(Ci)},useDebugValue:ud,useDeferredValue:function(t){var e=wt();return $m(e,we.memoizedState,t)},useTransition:function(){var t=Ma(Ci)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Tm,useSyncExternalStore:Rm,useId:Hm,unstable_isNewReconciler:!1},Jx={readContext:xt,useCallback:Bm,useContext:xt,useEffect:cd,useImperativeHandle:zm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Wm,useReducer:Da,useRef:Mm,useState:function(){return Da(Ci)},useDebugValue:ud,useDeferredValue:function(t){var e=wt();return we===null?e.memoizedState=t:$m(e,we.memoizedState,t)},useTransition:function(){var t=Da(Ci)[0],e=wt().memoizedState;return[t,e]},useMutableSource:Tm,useSyncExternalStore:Rm,useId:Hm,unstable_isNewReconciler:!1};function kt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Fc(t,e,n,s){e=t.memoizedState,n=n(s,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var s=Ye(),r=Ln(t),i=sn(s,r);i.payload=e,n!=null&&(i.callback=n),e=jn(t,i,r),e!==null&&(Tt(e,t,r,s),Io(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var s=Ye(),r=Ln(t),i=sn(s,r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=jn(t,i,r),e!==null&&(Tt(e,t,r,s),Io(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),s=Ln(t),r=sn(n,s);r.tag=2,e!=null&&(r.callback=e),e=jn(t,r,s),e!==null&&(Tt(e,t,s,n),Io(e,t,s))}};function wf(t,e,n,s,r,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,i,o):e.prototype&&e.prototype.isPureReactComponent?!gi(n,s)||!gi(r,i):!0}function Gm(t,e,n){var s=!1,r=zn,i=e.contextType;return typeof i=="object"&&i!==null?i=xt(i):(r=rt(e)?cs:We.current,s=e.contextTypes,i=(s=s!=null)?rr(t,r):zn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,s&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=i),e}function bf(t,e,n,s){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,s),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,s),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function zc(t,e,n,s){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nd(t);var i=e.contextType;typeof i=="object"&&i!==null?r.context=xt(i):(i=rt(e)?cs:We.current,r.context=rr(t,i)),r.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Fc(t,e,i,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$l.enqueueReplaceState(r,r.state,null),nl(t,n,r,s),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ar(t,e){try{var n="",s=e;do n+=Ev(s),s=s.return;while(s);var r=n}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:r,digest:null}}function Ua(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Zx=typeof WeakMap=="function"?WeakMap:Map;function qm(t,e,n){n=sn(-1,n),n.tag=3,n.payload={element:null};var s=e.value;return n.callback=function(){ll||(ll=!0,Xc=s),Bc(t,e)},n}function Km(t,e,n){n=sn(-1,n),n.tag=3;var s=t.type.getDerivedStateFromError;if(typeof s=="function"){var r=e.value;n.payload=function(){return s(r)},n.callback=function(){Bc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Bc(t,e),typeof s!="function"&&(An===null?An=new Set([this]):An.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function kf(t,e,n){var s=t.pingCache;if(s===null){s=t.pingCache=new Zx;var r=new Set;s.set(e,r)}else r=s.get(e),r===void 0&&(r=new Set,s.set(e,r));r.has(n)||(r.add(n),t=f1.bind(null,t,e,n),e.then(t,t))}function Cf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Nf(t,e,n,s,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sn(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var e1=fn.ReactCurrentOwner,et=!1;function He(t,e,n,s){e.child=t===null?Nm(e,null,n,s):or(e,t.child,n,s)}function Ef(t,e,n,s,r){n=n.render;var i=e.ref;return Gs(e,r),s=ld(t,e,n,s,i,r),n=ad(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cn(t,e,r)):(ce&&n&&qu(e),e.flags|=1,He(t,e,s,r),e.child)}function Sf(t,e,n,s,r){if(t===null){var i=n.type;return typeof i=="function"&&!yd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Xm(t,e,i,s,r)):(t=Lo(n.type,null,s,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&r)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(o,s)&&t.ref===e.ref)return cn(t,e,r)}return e.flags|=1,t=On(i,s),t.ref=e.ref,t.return=e,e.child=t}function Xm(t,e,n,s,r){if(t!==null){var i=t.memoizedProps;if(gi(i,s)&&t.ref===e.ref)if(et=!1,e.pendingProps=s=i,(t.lanes&r)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,cn(t,e,r)}return Wc(t,e,n,s,r)}function Jm(t,e,n){var s=e.pendingProps,r=s.children,i=t!==null?t.memoizedState:null;if(s.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Ws,ot),ot|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Ws,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:n,oe(Ws,ot),ot|=s}else i!==null?(s=i.baseLanes|n,e.memoizedState=null):s=n,oe(Ws,ot),ot|=s;return He(t,e,r,n),e.child}function Zm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wc(t,e,n,s,r){var i=rt(n)?cs:We.current;return i=rr(e,i),Gs(e,r),n=ld(t,e,n,s,i,r),s=ad(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cn(t,e,r)):(ce&&s&&qu(e),e.flags|=1,He(t,e,n,r),e.child)}function If(t,e,n,s,r){if(rt(n)){var i=!0;Xo(e)}else i=!1;if(Gs(e,r),e.stateNode===null)Po(t,e),Gm(e,n,s),zc(e,n,s,r),s=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=rt(n)?cs:We.current,u=rr(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==s||a!==u)&&bf(e,o,s,u),yn=!1;var f=e.memoizedState;o.state=f,nl(e,s,o,r),a=e.memoizedState,l!==s||f!==a||st.current||yn?(typeof h=="function"&&(Fc(e,n,h,s),a=e.memoizedState),(l=yn||wf(e,n,l,s,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=s,e.memoizedState=a),o.props=s,o.state=a,o.context=u,s=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),s=!1)}else{o=e.stateNode,Sm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:kt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=xt(a):(a=rt(n)?cs:We.current,a=rr(e,a));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&bf(e,o,s,a),yn=!1,f=e.memoizedState,o.state=f,nl(e,s,o,r);var v=e.memoizedState;l!==d||f!==v||st.current||yn?(typeof g=="function"&&(Fc(e,n,g,s),v=e.memoizedState),(u=yn||wf(e,n,u,s,f,v,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(s,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(s,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=s,e.memoizedState=v),o.props=s,o.state=v,o.context=a,s=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),s=!1)}return $c(t,e,n,s,i,r)}function $c(t,e,n,s,r,i){Zm(t,e);var o=(e.flags&128)!==0;if(!s&&!o)return r&&ff(e,n,!1),cn(t,e,i);s=e.stateNode,e1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:s.render();return e.flags|=1,t!==null&&o?(e.child=or(e,t.child,null,i),e.child=or(e,null,l,i)):He(t,e,l,i),e.memoizedState=s.state,r&&ff(e,n,!0),e.child}function eg(t){var e=t.stateNode;e.pendingContext?hf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hf(t,e.context,!1),sd(t,e.containerInfo)}function Tf(t,e,n,s,r){return ir(),Xu(r),e.flags|=256,He(t,e,n,s),e.child}var Hc={dehydrated:null,treeContext:null,retryLane:0};function Vc(t){return{baseLanes:t,cachePool:null,transitions:null}}function tg(t,e,n){var s=e.pendingProps,r=ue.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),oe(ue,r&1),t===null)return Dc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=s.children,t=s.fallback,i?(s=e.mode,i=e.child,o={mode:"hidden",children:o},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Yl(o,s,0,null),t=is(t,s,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Vc(n),e.memoizedState=Hc,t):dd(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return t1(t,e,o,s,l,r,n);if(i){i=s.fallback,o=e.mode,r=t.child,l=r.sibling;var a={mode:"hidden",children:s.children};return!(o&1)&&e.child!==r?(s=e.child,s.childLanes=0,s.pendingProps=a,e.deletions=null):(s=On(r,a),s.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=On(l,i):(i=is(i,o,n,null),i.flags|=2),i.return=e,s.return=e,s.sibling=i,e.child=s,s=i,i=e.child,o=t.child.memoizedState,o=o===null?Vc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Hc,s}return i=t.child,t=i.sibling,s=On(i,{mode:"visible",children:s.children}),!(e.mode&1)&&(s.lanes=n),s.return=e,s.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=s,e.memoizedState=null,s}function dd(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,s){return s!==null&&Xu(s),or(e,t.child,null,n),t=dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function t1(t,e,n,s,r,i,o){if(n)return e.flags&256?(e.flags&=-257,s=Ua(Error(P(422))),fo(t,e,o,s)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=s.fallback,r=e.mode,s=Yl({mode:"visible",children:s.children},r,0,null),i=is(i,r,o,null),i.flags|=2,s.return=e,i.return=e,s.sibling=i,e.child=s,e.mode&1&&or(e,t.child,null,o),e.child.memoizedState=Vc(o),e.memoizedState=Hc,i);if(!(e.mode&1))return fo(t,e,o,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var l=s.dgst;return s=l,i=Error(P(419)),s=Ua(i,s,void 0),fo(t,e,o,s)}if(l=(o&t.childLanes)!==0,et||l){if(s=Re,s!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|o)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,an(t,r),Tt(s,t,r,-1))}return gd(),s=Ua(Error(P(421))),fo(t,e,o,s)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=_1.bind(null,t),r._reactRetry=e,null):(t=i.treeContext,lt=Pn(r.nextSibling),ct=e,ce=!0,Nt=null,t!==null&&(_t[pt++]=Kt,_t[pt++]=Xt,_t[pt++]=us,Kt=t.id,Xt=t.overflow,us=e),e=dd(e,s.children),e.flags|=4096,e)}function Rf(t,e,n){t.lanes|=e;var s=t.alternate;s!==null&&(s.lanes|=e),Uc(t.return,e,n)}function Fa(t,e,n,s,r){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:r}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=n,i.tailMode=r)}function ng(t,e,n){var s=e.pendingProps,r=s.revealOrder,i=s.tail;if(He(t,e,s.children,n),s=ue.current,s&2)s=s&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rf(t,n,e);else if(t.tag===19)Rf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}if(oe(ue,s),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fa(e,!1,r,n,i);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fa(e,!0,n,null,i);break;case"together":Fa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=On(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=On(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function n1(t,e,n){switch(e.tag){case 3:eg(e),ir();break;case 5:Im(e);break;case 1:rt(e.type)&&Xo(e);break;case 4:sd(e,e.stateNode.containerInfo);break;case 10:var s=e.type._context,r=e.memoizedProps.value;oe(el,s._currentValue),s._currentValue=r;break;case 13:if(s=e.memoizedState,s!==null)return s.dehydrated!==null?(oe(ue,ue.current&1),e.flags|=128,null):n&e.child.childLanes?tg(t,e,n):(oe(ue,ue.current&1),t=cn(t,e,n),t!==null?t.sibling:null);oe(ue,ue.current&1);break;case 19:if(s=(n&e.childLanes)!==0,t.flags&128){if(s)return ng(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oe(ue,ue.current),s)break;return null;case 22:case 23:return e.lanes=0,Jm(t,e,n)}return cn(t,e,n)}var sg,Yc,rg,ig;sg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};rg=function(t,e,n,s){var r=t.memoizedProps;if(r!==s){t=e.stateNode,ts(zt.current);var i=null;switch(n){case"input":r=_c(t,r),s=_c(t,s),i=[];break;case"select":r=he({},r,{value:void 0}),s=he({},s,{value:void 0}),i=[];break;case"textarea":r=gc(t,r),s=gc(t,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(t.onclick=qo)}vc(n,s);var o;n=null;for(u in r)if(!s.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ui.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in s){var a=s[u];if(l=r!=null?r[u]:void 0,s.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ui.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&le("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ig=function(t,e,n,s){n!==s&&(e.flags|=4)};function Lr(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,s=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=s,t.childLanes=n,e}function s1(t,e,n){var s=e.pendingProps;switch(Ku(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(e),null;case 1:return rt(e.type)&&Ko(),Ue(e),null;case 3:return s=e.stateNode,lr(),ae(st),ae(We),id(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(eu(Nt),Nt=null))),Yc(t,e),Ue(e),null;case 5:rd(e);var r=ts(bi.current);if(n=e.type,t!==null&&e.stateNode!=null)rg(t,e,n,s,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!s){if(e.stateNode===null)throw Error(P(166));return Ue(e),null}if(t=ts(zt.current),uo(e)){s=e.stateNode,n=e.type;var i=e.memoizedProps;switch(s[Dt]=e,s[xi]=i,t=(e.mode&1)!==0,n){case"dialog":le("cancel",s),le("close",s);break;case"iframe":case"object":case"embed":le("load",s);break;case"video":case"audio":for(r=0;r<Yr.length;r++)le(Yr[r],s);break;case"source":le("error",s);break;case"img":case"image":case"link":le("error",s),le("load",s);break;case"details":le("toggle",s);break;case"input":Uh(s,i),le("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},le("invalid",s);break;case"textarea":zh(s,i),le("invalid",s)}vc(n,i),r=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?s.textContent!==l&&(i.suppressHydrationWarning!==!0&&co(s.textContent,l,t),r=["children",l]):typeof l=="number"&&s.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&co(s.textContent,l,t),r=["children",""+l]):ui.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",s)}switch(n){case"input":to(s),Fh(s,i,!0);break;case"textarea":to(s),Bh(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=qo)}s=r,e.updateQueue=s,s!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ap(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof s.is=="string"?t=o.createElement(n,{is:s.is}):(t=o.createElement(n),n==="select"&&(o=t,s.multiple?o.multiple=!0:s.size&&(o.size=s.size))):t=o.createElementNS(t,n),t[Dt]=e,t[xi]=s,sg(t,e,!1,!1),e.stateNode=t;e:{switch(o=xc(n,s),n){case"dialog":le("cancel",t),le("close",t),r=s;break;case"iframe":case"object":case"embed":le("load",t),r=s;break;case"video":case"audio":for(r=0;r<Yr.length;r++)le(Yr[r],t);r=s;break;case"source":le("error",t),r=s;break;case"img":case"image":case"link":le("error",t),le("load",t),r=s;break;case"details":le("toggle",t),r=s;break;case"input":Uh(t,s),r=_c(t,s),le("invalid",t);break;case"option":r=s;break;case"select":t._wrapperState={wasMultiple:!!s.multiple},r=he({},s,{value:void 0}),le("invalid",t);break;case"textarea":zh(t,s),r=gc(t,s),le("invalid",t);break;default:r=s}vc(n,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Mp(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lp(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&di(t,a):typeof a=="number"&&di(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ui.hasOwnProperty(i)?a!=null&&i==="onScroll"&&le("scroll",t):a!=null&&Ou(t,i,a,o))}switch(n){case"input":to(t),Fh(t,s,!1);break;case"textarea":to(t),Bh(t);break;case"option":s.value!=null&&t.setAttribute("value",""+Fn(s.value));break;case"select":t.multiple=!!s.multiple,i=s.value,i!=null?Hs(t,!!s.multiple,i,!1):s.defaultValue!=null&&Hs(t,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ue(e),null;case 6:if(t&&e.stateNode!=null)ig(t,e,t.memoizedProps,s);else{if(typeof s!="string"&&e.stateNode===null)throw Error(P(166));if(n=ts(bi.current),ts(zt.current),uo(e)){if(s=e.stateNode,n=e.memoizedProps,s[Dt]=e,(i=s.nodeValue!==n)&&(t=ct,t!==null))switch(t.tag){case 3:co(s.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(s.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[Dt]=e,e.stateNode=s}return Ue(e),null;case 13:if(ae(ue),s=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&lt!==null&&e.mode&1&&!(e.flags&128))km(),ir(),e.flags|=98560,i=!1;else if(i=uo(e),s!==null&&s.dehydrated!==null){if(t===null){if(!i)throw Error(P(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Dt]=e}else ir(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ue(e),i=!1}else Nt!==null&&(eu(Nt),Nt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(s=s!==null,s!==(t!==null&&t.memoizedState!==null)&&s&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?be===0&&(be=3):gd())),e.updateQueue!==null&&(e.flags|=4),Ue(e),null);case 4:return lr(),Yc(t,e),t===null&&yi(e.stateNode.containerInfo),Ue(e),null;case 10:return ed(e.type._context),Ue(e),null;case 17:return rt(e.type)&&Ko(),Ue(e),null;case 19:if(ae(ue),i=e.memoizedState,i===null)return Ue(e),null;if(s=(e.flags&128)!==0,o=i.rendering,o===null)if(s)Lr(i,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=sl(t),o!==null){for(e.flags|=128,Lr(i,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),e.subtreeFlags=0,s=n,n=e.child;n!==null;)i=n,t=s,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(ue,ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&ve()>cr&&(e.flags|=128,s=!0,Lr(i,!1),e.lanes=4194304)}else{if(!s)if(t=sl(o),t!==null){if(e.flags|=128,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ce)return Ue(e),null}else 2*ve()-i.renderingStartTime>cr&&n!==1073741824&&(e.flags|=128,s=!0,Lr(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ve(),e.sibling=null,n=ue.current,oe(ue,s?n&1|2:n&1),e):(Ue(e),null);case 22:case 23:return md(),s=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==s&&(e.flags|=8192),s&&e.mode&1?ot&1073741824&&(Ue(e),e.subtreeFlags&6&&(e.flags|=8192)):Ue(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function r1(t,e){switch(Ku(e),e.tag){case 1:return rt(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lr(),ae(st),ae(We),id(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rd(e),null;case 13:if(ae(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));ir()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(ue),null;case 4:return lr(),null;case 10:return ed(e.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var _o=!1,Be=!1,i1=typeof WeakSet=="function"?WeakSet:Set,O=null;function Bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){_e(t,e,s)}else n.current=null}function Qc(t,e,n){try{n()}catch(s){_e(t,e,s)}}var Pf=!1;function o1(t,e){if(Rc=Yo,t=um(),Gu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,h=0,d=t,f=null;t:for(;;){for(var g;d!==n||r!==0&&d.nodeType!==3||(l=o+r),d!==i||s!==0&&d.nodeType!==3||(a=o+s),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===r&&(l=o),f===i&&++h===s&&(a=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pc={focusedElem:t,selectionRange:n},Yo=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,C=v.memoizedState,m=e.stateNode,_=m.getSnapshotBeforeUpdate(e.elementType===e.type?b:kt(e.type,b),C);m.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){_e(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=Pf,Pf=!1,v}function ei(t,e,n){var s=e.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&t)===t){var i=r.destroy;r.destroy=void 0,i!==void 0&&Qc(e,n,i)}r=r.next}while(r!==s)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var s=n.create;n.destroy=s()}n=n.next}while(n!==e)}}function Gc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function og(t){var e=t.alternate;e!==null&&(t.alternate=null,og(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[xi],delete e[Lc],delete e[Wx],delete e[$x])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lg(t){return t.tag===5||t.tag===3||t.tag===4}function jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qc(t,e,n){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(s!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}function Kc(t,e,n){var s=t.tag;if(s===5||s===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(s!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}var je=null,Ct=!1;function pn(t,e,n){for(n=n.child;n!==null;)ag(t,e,n),n=n.sibling}function ag(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Be||Bs(n,e);case 6:var s=je,r=Ct;je=null,pn(t,e,n),je=s,Ct=r,je!==null&&(Ct?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ct?(t=je,n=n.stateNode,t.nodeType===8?ja(t.parentNode,n):t.nodeType===1&&ja(t,n),pi(t)):ja(je,n.stateNode));break;case 4:s=je,r=Ct,je=n.stateNode.containerInfo,Ct=!0,pn(t,e,n),je=s,Ct=r;break;case 0:case 11:case 14:case 15:if(!Be&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Qc(n,e,o),r=r.next}while(r!==s)}pn(t,e,n);break;case 1:if(!Be&&(Bs(n,e),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(l){_e(n,e,l)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(Be=(s=Be)||n.memoizedState!==null,pn(t,e,n),Be=s):pn(t,e,n);break;default:pn(t,e,n)}}function Af(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new i1),e.forEach(function(s){var r=p1.bind(null,t,s);n.has(s)||(n.add(s),s.then(r,r))})}}function bt(t,e){var n=e.deletions;if(n!==null)for(var s=0;s<n.length;s++){var r=n[s];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ct=!1;break e;case 3:je=l.stateNode.containerInfo,Ct=!0;break e;case 4:je=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(je===null)throw Error(P(160));ag(i,o,r),je=null,Ct=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){_e(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cg(e,t),e=e.sibling}function cg(t,e){var n=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bt(e,t),Ot(t),s&4){try{ei(3,t,t.return),Hl(3,t)}catch(b){_e(t,t.return,b)}try{ei(5,t,t.return)}catch(b){_e(t,t.return,b)}}break;case 1:bt(e,t),Ot(t),s&512&&n!==null&&Bs(n,n.return);break;case 5:if(bt(e,t),Ot(t),s&512&&n!==null&&Bs(n,n.return),t.flags&32){var r=t.stateNode;try{di(r,"")}catch(b){_e(t,t.return,b)}}if(s&4&&(r=t.stateNode,r!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Pp(r,i),xc(l,o);var u=xc(l,i);for(o=0;o<a.length;o+=2){var h=a[o],d=a[o+1];h==="style"?Mp(r,d):h==="dangerouslySetInnerHTML"?Lp(r,d):h==="children"?di(r,d):Ou(r,h,d,u)}switch(l){case"input":pc(r,i);break;case"textarea":jp(r,i);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Hs(r,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?Hs(r,!!i.multiple,i.defaultValue,!0):Hs(r,!!i.multiple,i.multiple?[]:"",!1))}r[xi]=i}catch(b){_e(t,t.return,b)}}break;case 6:if(bt(e,t),Ot(t),s&4){if(t.stateNode===null)throw Error(P(162));r=t.stateNode,i=t.memoizedProps;try{r.nodeValue=i}catch(b){_e(t,t.return,b)}}break;case 3:if(bt(e,t),Ot(t),s&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(e.containerInfo)}catch(b){_e(t,t.return,b)}break;case 4:bt(e,t),Ot(t);break;case 13:bt(e,t),Ot(t),r=t.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(_d=ve())),s&4&&Af(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||h,bt(e,t),Be=u):bt(e,t),Ot(t),s&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(O=t,h=t.child;h!==null;){for(d=O=h;O!==null;){switch(f=O,g=f.child,f.tag){case 0:case 11:case 14:case 15:ei(4,f,f.return);break;case 1:Bs(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){s=f,n=f.return;try{e=s,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(b){_e(s,n,b)}}break;case 5:Bs(f,f.return);break;case 22:if(f.memoizedState!==null){Of(d);continue}}g!==null?(g.return=f,O=g):Of(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{r=d.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Op("display",o))}catch(b){_e(t,t.return,b)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(b){_e(t,t.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bt(e,t),Ot(t),s&4&&Af(t);break;case 21:break;default:bt(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lg(n)){var s=n;break e}n=n.return}throw Error(P(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(di(r,""),s.flags&=-33);var i=jf(t);Kc(t,i,r);break;case 3:case 4:var o=s.stateNode.containerInfo,l=jf(t);qc(t,l,o);break;default:throw Error(P(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l1(t,e,n){O=t,ug(t)}function ug(t,e,n){for(var s=(t.mode&1)!==0;O!==null;){var r=O,i=r.child;if(r.tag===22&&s){var o=r.memoizedState!==null||_o;if(!o){var l=r.alternate,a=l!==null&&l.memoizedState!==null||Be;l=_o;var u=Be;if(_o=o,(Be=a)&&!u)for(O=r;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?Mf(r):a!==null?(a.return=o,O=a):Mf(r);for(;i!==null;)O=i,ug(i),i=i.sibling;O=r,_o=l,Be=u}Lf(t)}else r.subtreeFlags&8772&&i!==null?(i.return=r,O=i):Lf(t)}}function Lf(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||Hl(5,e);break;case 1:var s=e.stateNode;if(e.flags&4&&!Be)if(n===null)s.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kt(e.type,n.memoizedProps);s.componentDidUpdate(r,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&yf(e,i,s);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&pi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Be||e.flags&512&&Gc(e)}catch(f){_e(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Of(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Mf(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(a){_e(e,n,a)}break;case 1:var s=e.stateNode;if(typeof s.componentDidMount=="function"){var r=e.return;try{s.componentDidMount()}catch(a){_e(e,r,a)}}var i=e.return;try{Gc(e)}catch(a){_e(e,i,a)}break;case 5:var o=e.return;try{Gc(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var a1=Math.ceil,ol=fn.ReactCurrentDispatcher,hd=fn.ReactCurrentOwner,yt=fn.ReactCurrentBatchConfig,X=0,Re=null,xe=null,Le=0,ot=0,Ws=Vn(0),be=0,Ei=null,hs=0,Vl=0,fd=0,ti=null,Ze=null,_d=0,cr=1/0,Qt=null,ll=!1,Xc=null,An=null,po=!1,En=null,al=0,ni=0,Jc=null,jo=-1,Ao=0;function Ye(){return X&6?ve():jo!==-1?jo:jo=ve()}function Ln(t){return t.mode&1?X&2&&Le!==0?Le&-Le:Vx.transition!==null?(Ao===0&&(Ao=Gp()),Ao):(t=ee,t!==0||(t=window.event,t=t===void 0?16:tm(t.type)),t):1}function Tt(t,e,n,s){if(50<ni)throw ni=0,Jc=null,Error(P(185));zi(t,n,s),(!(X&2)||t!==Re)&&(t===Re&&(!(X&2)&&(Vl|=n),be===4&&xn(t,Le)),it(t,s),n===1&&X===0&&!(e.mode&1)&&(cr=ve()+500,Bl&&Yn()))}function it(t,e){var n=t.callbackNode;Vv(t,e);var s=Vo(t,t===Re?Le:0);if(s===0)n!==null&&Hh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=s&-s,t.callbackPriority!==e){if(n!=null&&Hh(n),e===1)t.tag===0?Hx(Df.bind(null,t)):xm(Df.bind(null,t)),zx(function(){!(X&6)&&Yn()}),n=null;else{switch(qp(s)){case 1:n=zu;break;case 4:n=Yp;break;case 16:n=Ho;break;case 536870912:n=Qp;break;default:n=Ho}n=yg(n,dg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dg(t,e){if(jo=-1,Ao=0,X&6)throw Error(P(327));var n=t.callbackNode;if(qs()&&t.callbackNode!==n)return null;var s=Vo(t,t===Re?Le:0);if(s===0)return null;if(s&30||s&t.expiredLanes||e)e=cl(t,s);else{e=s;var r=X;X|=2;var i=fg();(Re!==t||Le!==e)&&(Qt=null,cr=ve()+500,rs(t,e));do try{d1();break}catch(l){hg(t,l)}while(!0);Zu(),ol.current=i,X=r,xe!==null?e=0:(Re=null,Le=0,e=be)}if(e!==0){if(e===2&&(r=Nc(t),r!==0&&(s=r,e=Zc(t,r))),e===1)throw n=Ei,rs(t,0),xn(t,s),it(t,ve()),n;if(e===6)xn(t,s);else{if(r=t.current.alternate,!(s&30)&&!c1(r)&&(e=cl(t,s),e===2&&(i=Nc(t),i!==0&&(s=i,e=Zc(t,i))),e===1))throw n=Ei,rs(t,0),xn(t,s),it(t,ve()),n;switch(t.finishedWork=r,t.finishedLanes=s,e){case 0:case 1:throw Error(P(345));case 2:Kn(t,Ze,Qt);break;case 3:if(xn(t,s),(s&130023424)===s&&(e=_d+500-ve(),10<e)){if(Vo(t,0)!==0)break;if(r=t.suspendedLanes,(r&s)!==s){Ye(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ac(Kn.bind(null,t,Ze,Qt),e);break}Kn(t,Ze,Qt);break;case 4:if(xn(t,s),(s&4194240)===s)break;for(e=t.eventTimes,r=-1;0<s;){var o=31-It(s);i=1<<o,o=e[o],o>r&&(r=o),s&=~i}if(s=r,s=ve()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*a1(s/1960))-s,10<s){t.timeoutHandle=Ac(Kn.bind(null,t,Ze,Qt),s);break}Kn(t,Ze,Qt);break;case 5:Kn(t,Ze,Qt);break;default:throw Error(P(329))}}}return it(t,ve()),t.callbackNode===n?dg.bind(null,t):null}function Zc(t,e){var n=ti;return t.current.memoizedState.isDehydrated&&(rs(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&eu(e)),t}function eu(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function c1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var r=n[s],i=r.getSnapshot;r=r.value;try{if(!jt(i(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~fd,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),s=1<<n;t[n]=-1,e&=~s}}function Df(t){if(X&6)throw Error(P(327));qs();var e=Vo(t,0);if(!(e&1))return it(t,ve()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var s=Nc(t);s!==0&&(e=s,n=Zc(t,s))}if(n===1)throw n=Ei,rs(t,0),xn(t,e),it(t,ve()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kn(t,Ze,Qt),it(t,ve()),null}function pd(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(cr=ve()+500,Bl&&Yn())}}function fs(t){En!==null&&En.tag===0&&!(X&6)&&qs();var e=X;X|=1;var n=yt.transition,s=ee;try{if(yt.transition=null,ee=1,t)return t()}finally{ee=s,yt.transition=n,X=e,!(X&6)&&Yn()}}function md(){ot=Ws.current,ae(Ws)}function rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Fx(n)),xe!==null)for(n=xe.return;n!==null;){var s=n;switch(Ku(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ko();break;case 3:lr(),ae(st),ae(We),id();break;case 5:rd(s);break;case 4:lr();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:ed(s.type._context);break;case 22:case 23:md()}n=n.return}if(Re=t,xe=t=On(t.current,null),Le=ot=e,be=0,Ei=null,fd=Vl=hs=0,Ze=ti=null,es!==null){for(e=0;e<es.length;e++)if(n=es[e],s=n.interleaved,s!==null){n.interleaved=null;var r=s.next,i=n.pending;if(i!==null){var o=i.next;i.next=r,s.next=o}n.pending=s}es=null}return t}function hg(t,e){do{var n=xe;try{if(Zu(),To.current=il,rl){for(var s=de.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}rl=!1}if(ds=0,Ee=we=de=null,Zr=!1,ki=0,hd.current=null,n===null||n.return===null){be=1,Ei=e,xe=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Le,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=l,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=Cf(o);if(g!==null){g.flags&=-257,Nf(g,o,l,i,e),g.mode&1&&kf(i,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var b=new Set;b.add(a),e.updateQueue=b}else v.add(a);break e}else{if(!(e&1)){kf(i,u,e),gd();break e}a=Error(P(426))}}else if(ce&&l.mode&1){var C=Cf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Nf(C,o,l,i,e),Xu(ar(a,l));break e}}i=a=ar(a,l),be!==4&&(be=2),ti===null?ti=[i]:ti.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=qm(i,a,e);gf(i,m);break e;case 1:l=a;var _=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(An===null||!An.has(p)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Km(i,l,e);gf(i,x);break e}}i=i.return}while(i!==null)}pg(n)}catch(k){e=k,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function fg(){var t=ol.current;return ol.current=il,t===null?il:t}function gd(){(be===0||be===3||be===2)&&(be=4),Re===null||!(hs&268435455)&&!(Vl&268435455)||xn(Re,Le)}function cl(t,e){var n=X;X|=2;var s=fg();(Re!==t||Le!==e)&&(Qt=null,rs(t,e));do try{u1();break}catch(r){hg(t,r)}while(!0);if(Zu(),X=n,ol.current=s,xe!==null)throw Error(P(261));return Re=null,Le=0,be}function u1(){for(;xe!==null;)_g(xe)}function d1(){for(;xe!==null&&!Mv();)_g(xe)}function _g(t){var e=gg(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?pg(t):xe=e,hd.current=null}function pg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=r1(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=s1(n,e,ot),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function Kn(t,e,n){var s=ee,r=yt.transition;try{yt.transition=null,ee=1,h1(t,e,n,s)}finally{yt.transition=r,ee=s}return null}function h1(t,e,n,s){do qs();while(En!==null);if(X&6)throw Error(P(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Yv(t,i),t===Re&&(xe=Re=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,yg(Ho,function(){return qs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var o=ee;ee=1;var l=X;X|=4,hd.current=null,o1(t,n),cg(n,t),jx(Pc),Yo=!!Rc,Pc=Rc=null,t.current=n,l1(n),Dv(),X=l,ee=o,yt.transition=i}else t.current=n;if(po&&(po=!1,En=t,al=r),i=t.pendingLanes,i===0&&(An=null),zv(n.stateNode),it(t,ve()),e!==null)for(s=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],s(r.value,{componentStack:r.stack,digest:r.digest});if(ll)throw ll=!1,t=Xc,Xc=null,t;return al&1&&t.tag!==0&&qs(),i=t.pendingLanes,i&1?t===Jc?ni++:(ni=0,Jc=t):ni=0,Yn(),null}function qs(){if(En!==null){var t=qp(al),e=yt.transition,n=ee;try{if(yt.transition=null,ee=16>t?16:t,En===null)var s=!1;else{if(t=En,En=null,al=0,X&6)throw Error(P(331));var r=X;for(X|=4,O=t.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:ei(8,h,i)}var d=h.child;if(d!==null)d.return=h,O=d;else for(;O!==null;){h=O;var f=h.sibling,g=h.return;if(og(h),h===u){O=null;break}if(f!==null){f.return=g,O=f;break}O=g}}}var v=i.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var C=b.sibling;b.sibling=null,b=C}while(b!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ei(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var _=t.current;for(O=_;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=_;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(k){_e(l,l.return,k)}if(l===o){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(X=r,Yn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ml,t)}catch{}s=!0}return s}finally{ee=n,yt.transition=e}}return!1}function Uf(t,e,n){e=ar(n,e),e=qm(t,e,1),t=jn(t,e,1),e=Ye(),t!==null&&(zi(t,1,e),it(t,e))}function _e(t,e,n){if(t.tag===3)Uf(t,t,n);else for(;e!==null;){if(e.tag===3){Uf(e,t,n);break}else if(e.tag===1){var s=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(An===null||!An.has(s))){t=ar(n,t),t=Km(e,t,1),e=jn(e,t,1),t=Ye(),e!==null&&(zi(e,1,t),it(e,t));break}}e=e.return}}function f1(t,e,n){var s=t.pingCache;s!==null&&s.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(Le&n)===n&&(be===4||be===3&&(Le&130023424)===Le&&500>ve()-_d?rs(t,0):fd|=n),it(t,e)}function mg(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=Ye();t=an(t,e),t!==null&&(zi(t,e,n),it(t,n))}function _1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mg(t,n)}function p1(t,e){var n=0;switch(t.tag){case 13:var s=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:s=t.stateNode;break;default:throw Error(P(314))}s!==null&&s.delete(e),mg(t,n)}var gg;gg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||st.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,n1(t,e,n);et=!!(t.flags&131072)}else et=!1,ce&&e.flags&1048576&&wm(e,Zo,e.index);switch(e.lanes=0,e.tag){case 2:var s=e.type;Po(t,e),t=e.pendingProps;var r=rr(e,We.current);Gs(e,n),r=ld(null,e,s,t,r,n);var i=ad();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rt(s)?(i=!0,Xo(e)):i=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nd(e),r.updater=$l,e.stateNode=r,r._reactInternals=e,zc(e,s,t,n),e=$c(null,e,s,!0,i,n)):(e.tag=0,ce&&i&&qu(e),He(null,e,r,n),e=e.child),e;case 16:s=e.elementType;e:{switch(Po(t,e),t=e.pendingProps,r=s._init,s=r(s._payload),e.type=s,r=e.tag=g1(s),t=kt(s,t),r){case 0:e=Wc(null,e,s,t,n);break e;case 1:e=If(null,e,s,t,n);break e;case 11:e=Ef(null,e,s,t,n);break e;case 14:e=Sf(null,e,s,kt(s.type,t),n);break e}throw Error(P(306,s,""))}return e;case 0:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:kt(s,r),Wc(t,e,s,r,n);case 1:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:kt(s,r),If(t,e,s,r,n);case 3:e:{if(eg(e),t===null)throw Error(P(387));s=e.pendingProps,i=e.memoizedState,r=i.element,Sm(t,e),nl(e,s,null,n);var o=e.memoizedState;if(s=o.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){r=ar(Error(P(423)),e),e=Tf(t,e,s,n,r);break e}else if(s!==r){r=ar(Error(P(424)),e),e=Tf(t,e,s,n,r);break e}else for(lt=Pn(e.stateNode.containerInfo.firstChild),ct=e,ce=!0,Nt=null,n=Nm(e,null,s,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),s===r){e=cn(t,e,n);break e}He(t,e,s,n)}e=e.child}return e;case 5:return Im(e),t===null&&Dc(e),s=e.type,r=e.pendingProps,i=t!==null?t.memoizedProps:null,o=r.children,jc(s,r)?o=null:i!==null&&jc(s,i)&&(e.flags|=32),Zm(t,e),He(t,e,o,n),e.child;case 6:return t===null&&Dc(e),null;case 13:return tg(t,e,n);case 4:return sd(e,e.stateNode.containerInfo),s=e.pendingProps,t===null?e.child=or(e,null,s,n):He(t,e,s,n),e.child;case 11:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:kt(s,r),Ef(t,e,s,r,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(s=e.type._context,r=e.pendingProps,i=e.memoizedProps,o=r.value,oe(el,s._currentValue),s._currentValue=o,i!==null)if(jt(i.value,o)){if(i.children===r.children&&!st.current){e=cn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===s){if(i.tag===1){a=sn(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Uc(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}He(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,s=e.pendingProps.children,Gs(e,n),r=xt(r),s=s(r),e.flags|=1,He(t,e,s,n),e.child;case 14:return s=e.type,r=kt(s,e.pendingProps),r=kt(s.type,r),Sf(t,e,s,r,n);case 15:return Xm(t,e,e.type,e.pendingProps,n);case 17:return s=e.type,r=e.pendingProps,r=e.elementType===s?r:kt(s,r),Po(t,e),e.tag=1,rt(s)?(t=!0,Xo(e)):t=!1,Gs(e,n),Gm(e,s,r),zc(e,s,r,n),$c(null,e,s,!0,t,n);case 19:return ng(t,e,n);case 22:return Jm(t,e,n)}throw Error(P(156,e.tag))};function yg(t,e){return Vp(t,e)}function m1(t,e,n,s){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,s){return new m1(t,e,n,s)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function g1(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Du)return 11;if(t===Uu)return 14}return 2}function On(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,s,r,i){var o=2;if(s=t,typeof t=="function")yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return is(n.children,r,i,e);case Mu:o=8,r|=8;break;case uc:return t=mt(12,n,e,r|2),t.elementType=uc,t.lanes=i,t;case dc:return t=mt(13,n,e,r),t.elementType=dc,t.lanes=i,t;case hc:return t=mt(19,n,e,r),t.elementType=hc,t.lanes=i,t;case Ip:return Yl(n,r,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ep:o=10;break e;case Sp:o=9;break e;case Du:o=11;break e;case Uu:o=14;break e;case gn:o=16,s=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=mt(o,n,e,r),e.elementType=t,e.type=s,e.lanes=i,e}function is(t,e,n,s){return t=mt(7,t,s,e),t.lanes=n,t}function Yl(t,e,n,s){return t=mt(22,t,s,e),t.elementType=Ip,t.lanes=n,t.stateNode={isHidden:!1},t}function za(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function Ba(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function y1(t,e,n,s,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vd(t,e,n,s,r,i,o,l,a){return t=new y1(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=mt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(i),t}function v1(t,e,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:s==null?null:""+s,children:t,containerInfo:e,implementation:n}}function vg(t){if(!t)return zn;t=t._reactInternals;e:{if(bs(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(rt(n))return vm(t,n,e)}return e}function xg(t,e,n,s,r,i,o,l,a){return t=vd(n,s,!0,t,r,i,o,l,a),t.context=vg(null),n=t.current,s=Ye(),r=Ln(n),i=sn(s,r),i.callback=e??null,jn(n,i,r),t.current.lanes=r,zi(t,r,s),it(t,s),t}function Ql(t,e,n,s){var r=e.current,i=Ye(),o=Ln(r);return n=vg(n),e.context===null?e.context=n:e.pendingContext=n,e=sn(i,o),e.payload={element:t},s=s===void 0?null:s,s!==null&&(e.callback=s),t=jn(r,e,o),t!==null&&(Tt(t,r,o,i),Io(t,r,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ff(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xd(t,e){Ff(t,e),(t=t.alternate)&&Ff(t,e)}function x1(){return null}var wg=typeof reportError=="function"?reportError:function(t){console.error(t)};function wd(t){this._internalRoot=t}Gl.prototype.render=wd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Ql(t,e,null,null)};Gl.prototype.unmount=wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fs(function(){Ql(null,t,null,null)}),e[ln]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&em(t)}};function bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zf(){}function w1(t,e,n,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var u=ul(o);i.call(u)}}var o=xg(e,s,t,0,null,!1,!1,"",zf);return t._reactRootContainer=o,t[ln]=o.current,yi(t.nodeType===8?t.parentNode:t),fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof s=="function"){var l=s;s=function(){var u=ul(a);l.call(u)}}var a=vd(t,0,!1,null,null,!1,!1,"",zf);return t._reactRootContainer=a,t[ln]=a.current,yi(t.nodeType===8?t.parentNode:t),fs(function(){Ql(e,a,n,s)}),a}function Kl(t,e,n,s,r){var i=n._reactRootContainer;if(i){var o=i;if(typeof r=="function"){var l=r;r=function(){var a=ul(o);l.call(a)}}Ql(e,o,t,r)}else o=w1(n,e,t,r,s);return ul(o)}Kp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vr(e.pendingLanes);n!==0&&(Bu(e,n|1),it(e,ve()),!(X&6)&&(cr=ve()+500,Yn()))}break;case 13:fs(function(){var s=an(t,1);if(s!==null){var r=Ye();Tt(s,t,1,r)}}),xd(t,1)}};Wu=function(t){if(t.tag===13){var e=an(t,134217728);if(e!==null){var n=Ye();Tt(e,t,134217728,n)}xd(t,134217728)}};Xp=function(t){if(t.tag===13){var e=Ln(t),n=an(t,e);if(n!==null){var s=Ye();Tt(n,t,e,s)}xd(t,e)}};Jp=function(){return ee};Zp=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};bc=function(t,e,n){switch(e){case"input":if(pc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var s=n[e];if(s!==t&&s.form===t.form){var r=zl(s);if(!r)throw Error(P(90));Rp(s),pc(s,r)}}}break;case"textarea":jp(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};Fp=pd;zp=fs;var b1={usingClientEntryPoint:!1,Events:[Wi,Ms,zl,Dp,Up,pd]},Or={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k1={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$p(t),t===null?null:t.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||x1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ml=mo.inject(k1),Ft=mo}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b1;dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(e))throw Error(P(200));return v1(t,e,null,n)};dt.createRoot=function(t,e){if(!bd(t))throw Error(P(299));var n=!1,s="",r=wg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(s=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vd(t,1,!1,null,null,n,!1,s,r),t[ln]=e.current,yi(t.nodeType===8?t.parentNode:t),new wd(e)};dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=$p(e),t=t===null?null:t.stateNode,t};dt.flushSync=function(t){return fs(t)};dt.hydrate=function(t,e,n){if(!ql(e))throw Error(P(200));return Kl(null,t,e,!0,n)};dt.hydrateRoot=function(t,e,n){if(!bd(t))throw Error(P(405));var s=n!=null&&n.hydratedSources||null,r=!1,i="",o=wg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xg(e,null,t,1,n??null,r,!1,i,o),t[ln]=e.current,yi(t),s)for(t=0;t<s.length;t++)n=s[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};dt.render=function(t,e,n){if(!ql(e))throw Error(P(200));return Kl(null,t,e,!1,n)};dt.unmountComponentAtNode=function(t){if(!ql(t))throw Error(P(40));return t._reactRootContainer?(fs(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};dt.unstable_batchedUpdates=pd;dt.unstable_renderSubtreeIntoContainer=function(t,e,n,s){if(!ql(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Kl(t,e,n,!1,s)};dt.version="18.3.1-next-f1338f8080-20240426";function bg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)}catch(t){console.error(t)}}bg(),bp.exports=dt;var C1=bp.exports,Bf=C1;ac.createRoot=Bf.createRoot,ac.hydrateRoot=Bf.hydrateRoot;var N1=`svg[fill=none] {
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
}`,E1={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=N1,document.head.appendChild(t))}var se=E1,S1=({size:t=24})=>c.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Wa="__agentation_freeze";function I1(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Wa]||(t[Wa]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Wa]}var Pe=I1();typeof window<"u"&&!Pe.installed&&(Pe.origSetTimeout=window.setTimeout.bind(window),Pe.origSetInterval=window.setInterval.bind(window),Pe.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?Pe.origSetTimeout(t,e):Pe.origSetTimeout((...s)=>{Pe.frozen?Pe.frozenTimeoutQueue.push(()=>t(...s)):t(...s)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?Pe.origSetInterval(t,e):Pe.origSetInterval((...s)=>{Pe.frozen||t(...s)},e,...n),window.requestAnimationFrame=t=>Pe.origRAF(e=>{Pe.frozen?Pe.frozenRAFQueue.push(t):t(e)}),Pe.installed=!0);var Ts=Pe.origSetTimeout;Pe.origSetInterval;N.forwardRef(function({element:e,timestamp:n,selectedText:s,placeholder:r="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:a,onDelete:u,style:h,accentColor:d="#3c82f7",isExiting:f=!1,lightMode:g=!1,computedStyles:v},b){const[C,m]=N.useState(i),[_,p]=N.useState(!1),[x,k]=N.useState("initial"),[E,I]=N.useState(!1),[T,U]=N.useState(!1),y=N.useRef(null),w=N.useRef(null),S=N.useRef(null),z=N.useRef(null);N.useEffect(()=>{f&&x!=="exit"&&k("exit")},[f,x]),N.useEffect(()=>{Ts(()=>{k("enter")},0);const R=Ts(()=>{k("entered")},200),L=Ts(()=>{const M=y.current;M&&(M.focus(),M.selectionStart=M.selectionEnd=M.value.length,M.scrollTop=M.scrollHeight)},50);return()=>{clearTimeout(R),clearTimeout(L),S.current&&clearTimeout(S.current),z.current&&clearTimeout(z.current)}},[]);const K=N.useCallback(()=>{z.current&&clearTimeout(z.current),p(!0),z.current=Ts(()=>{var R;p(!1),(R=y.current)==null||R.focus()},250)},[]);N.useImperativeHandle(b,()=>({shake:K}),[K]);const V=N.useCallback(()=>{k("exit"),S.current=Ts(()=>{a()},150)},[a]),fe=N.useCallback(()=>{C.trim()&&l(C.trim())},[C,l]),ft=N.useCallback(R=>{R.nativeEvent.isComposing||(R.key==="Enter"&&!R.shiftKey&&(R.preventDefault(),fe()),R.key==="Escape"&&V())},[fe,V]),A=[se.popup,g?se.light:"",x==="enter"?se.enter:"",x==="entered"?se.entered:"",x==="exit"?se.exit:"",_?se.shake:""].filter(Boolean).join(" ");return c.jsxs("div",{ref:w,className:A,"data-annotation-popup":!0,style:h,onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:se.header,children:[v&&Object.keys(v).length>0?c.jsxs("button",{className:se.headerToggle,onClick:()=>{const R=T;U(!T),R&&Ts(()=>{var L;return(L=y.current)==null?void 0:L.focus()},0)},type:"button",children:[c.jsx("svg",{className:`${se.chevron} ${T?se.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{className:se.element,children:e})]}):c.jsx("span",{className:se.element,children:e}),n&&c.jsx("span",{className:se.timestamp,children:n})]}),v&&Object.keys(v).length>0&&c.jsx("div",{className:`${se.stylesWrapper} ${T?se.expanded:""}`,children:c.jsx("div",{className:se.stylesInner,children:c.jsx("div",{className:se.stylesBlock,children:Object.entries(v).map(([R,L])=>c.jsxs("div",{className:se.styleLine,children:[c.jsx("span",{className:se.styleProperty,children:R.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",c.jsx("span",{className:se.styleValue,children:L}),";"]},R))})})}),s&&c.jsxs("div",{className:se.quote,children:["“",s.slice(0,80),s.length>80?"...":"","”"]}),c.jsx("textarea",{ref:y,className:se.textarea,style:{borderColor:E?d:void 0},placeholder:r,value:C,onChange:R=>m(R.target.value),onFocus:()=>I(!0),onBlur:()=>I(!1),rows:2,onKeyDown:ft}),c.jsxs("div",{className:se.actions,children:[u&&c.jsx("div",{className:se.deleteWrapper,children:c.jsx("button",{className:se.deleteButton,onClick:u,type:"button",children:c.jsx(S1,{size:22})})}),c.jsx("button",{className:se.cancel,onClick:V,children:"Cancel"}),c.jsx("button",{className:se.submit,style:{backgroundColor:d,opacity:C.trim()?1:.4},onClick:fe,disabled:!C.trim(),children:o})]})]})});var T1=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=T1,document.head.appendChild(t))}var Wf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw xr(e)},xr=function(t){return new Error("Firebase Database ("+kg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},R1=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},kd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,a=r+2<t.length,u=a?t[r+2]:0,h=i>>2,d=(i&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),s.push(n[h],n[d],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):R1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||d==null)throw new P1;const f=i<<2|l>>4;if(s.push(f),u!==64){const g=l<<4&240|u>>2;if(s.push(g),d!==64){const v=u<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class P1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ng=function(t){const e=Cg(t);return kd.encodeByteArray(e,!0)},dl=function(t){return Ng(t).replace(/\./g,"")},hl=function(t){try{return kd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){return Eg(void 0,t)}function Eg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!A1(n)||(t[n]=Eg(t[n],e[n]));return t}function A1(t){return t!=="__proto__"}/**
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
 */function L1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O1=()=>L1().__FIREBASE_DEFAULTS__,M1=()=>{if(typeof process>"u"||typeof Wf>"u")return;const t=Wf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},D1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hl(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return O1()||M1()||D1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sg=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ig=t=>{const e=Sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Tg=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config},Rg=t=>{var e;return(e=Cd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Pg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function U1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function F1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z1(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B1(){return kg.NODE_ADMIN===!0}function W1(){try{return typeof indexedDB=="object"}catch{return!1}}function $1(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1="FirebaseError";class _n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=H1,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?V1(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new _n(r,l,s)}}function V1(t,e){return t.replace(Y1,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Y1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=Si(hl(i[0])||""),n=Si(hl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},Q1=function(t){const e=Ag(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},G1=function(t){const e=Ag(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function tu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if($f(i)&&$f(o)){if(!_l(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),h=1518500249):(u=i^o^l,h=1859775393):d<60?(u=i&o|l&(i|o),h=2400959708):(u=i^o^l,h=3395469782);const f=(r<<5|r>>>27)+u+a+h+s[d]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function K1(t,e){const n=new X1(t,e);return n.subscribe.bind(n)}class X1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");J1(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=$a),r.error===void 0&&(r.error=$a),r.complete===void 0&&(r.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function J1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}function Xl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,j(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Jl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xn="[DEFAULT]";/**
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
 */class ew{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Hi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nw(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tw(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tw(t){return t===Xn?void 0:t}function nw(t){return t.instantiationMode==="EAGER"}/**
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
 */class sw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ew(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const rw={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},iw=te.INFO,ow={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},lw=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ow[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ed{constructor(e){this.name=e,this._logLevel=iw,this._logHandler=lw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const aw=(t,e)=>e.some(n=>t instanceof n);let Hf,Vf;function cw(){return Hf||(Hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uw(){return Vf||(Vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lg=new WeakMap,nu=new WeakMap,Og=new WeakMap,Ha=new WeakMap,Sd=new WeakMap;function dw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lg.set(n,t)}).catch(()=>{}),Sd.set(e,t),e}function hw(t){if(nu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});nu.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Og.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fw(t){su=t(su)}function _w(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Va(this),e,...n);return Og.set(s,e.sort?e.sort():[e]),Mn(s)}:uw().includes(t)?function(...e){return t.apply(Va(this),e),Mn(Lg.get(this))}:function(...e){return Mn(t.apply(Va(this),e))}}function pw(t){return typeof t=="function"?_w(t):(t instanceof IDBTransaction&&hw(t),aw(t,cw())?new Proxy(t,su):t)}function Mn(t){if(t instanceof IDBRequest)return dw(t);if(Ha.has(t))return Ha.get(t);const e=pw(t);return e!==t&&(Ha.set(t,e),Sd.set(e,t)),e}const Va=t=>Sd.get(t);function mw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=Mn(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Mn(o.result),a.oldVersion,a.newVersion,Mn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const gw=["get","getKey","getAll","getAllKeys","count"],yw=["put","add","delete","clear"],Ya=new Map;function Yf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||gw.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,r?"readwrite":"readonly");let u=a.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&a.done]))[0]};return Ya.set(e,i),i}fw(t=>({...t,get:(e,n,s)=>Yf(e,n)||t.get(e,n,s),has:(e,n)=>!!Yf(e,n)||t.has(e,n)}));/**
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
 */class vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ru="@firebase/app",Qf="0.10.13";/**
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
 */const un=new Ed("@firebase/app"),ww="@firebase/app-compat",bw="@firebase/analytics-compat",kw="@firebase/analytics",Cw="@firebase/app-check-compat",Nw="@firebase/app-check",Ew="@firebase/auth",Sw="@firebase/auth-compat",Iw="@firebase/database",Tw="@firebase/data-connect",Rw="@firebase/database-compat",Pw="@firebase/functions",jw="@firebase/functions-compat",Aw="@firebase/installations",Lw="@firebase/installations-compat",Ow="@firebase/messaging",Mw="@firebase/messaging-compat",Dw="@firebase/performance",Uw="@firebase/performance-compat",Fw="@firebase/remote-config",zw="@firebase/remote-config-compat",Bw="@firebase/storage",Ww="@firebase/storage-compat",$w="@firebase/firestore",Hw="@firebase/vertexai-preview",Vw="@firebase/firestore-compat",Yw="firebase",Qw="10.14.1";/**
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
 */const iu="[DEFAULT]",Gw={[ru]:"fire-core",[ww]:"fire-core-compat",[kw]:"fire-analytics",[bw]:"fire-analytics-compat",[Nw]:"fire-app-check",[Cw]:"fire-app-check-compat",[Ew]:"fire-auth",[Sw]:"fire-auth-compat",[Iw]:"fire-rtdb",[Tw]:"fire-data-connect",[Rw]:"fire-rtdb-compat",[Pw]:"fire-fn",[jw]:"fire-fn-compat",[Aw]:"fire-iid",[Lw]:"fire-iid-compat",[Ow]:"fire-fcm",[Mw]:"fire-fcm-compat",[Dw]:"fire-perf",[Uw]:"fire-perf-compat",[Fw]:"fire-rc",[zw]:"fire-rc-compat",[Bw]:"fire-gcs",[Ww]:"fire-gcs-compat",[$w]:"fire-fst",[Vw]:"fire-fst-compat",[Hw]:"fire-vertex","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
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
 */const pl=new Map,qw=new Map,ou=new Map;function Gf(t,e){try{t.container.addComponent(e)}catch(n){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(ou.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;ou.set(e,t);for(const n of pl.values())Gf(n,t);for(const n of qw.values())Gf(n,t);return!0}function Zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const Kw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new Vi("app","Firebase",Kw);/**
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
 */class Xw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const ks=Qw;function Mg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:iu,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Dn.create("bad-app-name",{appName:String(r)});if(n||(n=Tg()),!n)throw Dn.create("no-options");const i=pl.get(r);if(i){if(_l(n,i.options)&&_l(s,i.config))return i;throw Dn.create("duplicate-app",{appName:r})}const o=new sw(r);for(const a of ou.values())o.addComponent(a);const l=new Xw(n,s,o);return pl.set(r,l),l}function Id(t=iu){const e=pl.get(t);if(!e&&t===iu&&Tg())return Mg();if(!e)throw Dn.create("no-app",{appName:t});return e}function Bt(t,e,n){var s;let r=(s=Gw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(l.join(" "));return}_s(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Jw="firebase-heartbeat-database",Zw=1,Ii="firebase-heartbeat-store";let Qa=null;function Dg(){return Qa||(Qa=mw(Jw,Zw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),Qa}async function eb(t){try{const n=(await Dg()).transaction(Ii),s=await n.objectStore(Ii).get(Ug(t));return await n.done,s}catch(e){if(e instanceof _n)un.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(n.message)}}}async function qf(t,e){try{const s=(await Dg()).transaction(Ii,"readwrite");await s.objectStore(Ii).put(e,Ug(t)),await s.done}catch(n){if(n instanceof _n)un.warn(n.message);else{const s=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(s.message)}}}function Ug(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tb=1024,nb=30*24*60*60*1e3;class sb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ib(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Kf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=nb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){un.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kf(),{heartbeatsToSend:s,unsentEntries:r}=rb(this._heartbeatsCache.heartbeats),i=dl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return un.warn(n),""}}}function Kf(){return new Date().toISOString().substring(0,10)}function rb(t,e=tb){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Xf(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Xf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ib{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W1()?$1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await eb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xf(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ob(t){_s(new Bn("platform-logger",e=>new vw(e),"PRIVATE")),_s(new Bn("heartbeat",e=>new sb(e),"PRIVATE")),Bt(ru,Qf,t),Bt(ru,Qf,"esm2017"),Bt("fire-js","")}ob("");function Td(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Fg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lb=Fg,zg=new Vi("auth","Firebase",Fg());/**
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
 */const ml=new Ed("@firebase/auth");function ab(t,...e){ml.logLevel<=te.WARN&&ml.warn(`Auth (${ks}): ${t}`,...e)}function Oo(t,...e){ml.logLevel<=te.ERROR&&ml.error(`Auth (${ks}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw Pd(t,...e)}function Rt(t,...e){return Pd(t,...e)}function Rd(t,e,n){const s=Object.assign(Object.assign({},lb()),{[e]:n});return new Vi("auth","Firebase",s).create(e,{appName:t.name})}function os(t){return Rd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cb(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$t(t,"argument-error"),Rd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Pd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zg.create(t,...e)}function $(t,e,...n){if(!t)throw Pd(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function dn(t,e){t||Zt(e)}/**
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
 */function lu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ub(){return Jf()==="http:"||Jf()==="https:"}function Jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function db(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ub()||F1()||"connection"in navigator)?navigator.onLine:!0}function hb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Nd()||jg()}get(){return db()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jd(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _b=new Yi(3e4,6e4);function Ad(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function br(t,e,n,s,r={}){return Wg(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=wr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return U1()||(u.referrerPolicy="no-referrer"),Bg.fetch()($g(t,t.config.apiHost,n,l),u)})}async function Wg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fb),e);try{const r=new mb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw go(t,"user-disabled",o);const h=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rd(t,h,u);$t(t,h)}}catch(r){if(r instanceof _n)throw r;$t(t,"network-request-failed",{message:String(r)})}}async function pb(t,e,n,s,r={}){const i=await br(t,e,n,s,r);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $g(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?jd(t.config,r):`${t.config.apiScheme}://${r}`}class mb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rt(this.auth,"network-request-failed")),_b.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function gb(t,e){return br(t,"POST","/v1/accounts:delete",e)}async function Hg(t,e){return br(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yb(t,e=!1){const n=ke(t),s=await n.getIdToken(e),r=Ld(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:si(Ga(r.auth_time)),issuedAtTime:si(Ga(r.iat)),expirationTime:si(Ga(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ga(t){return Number(t)*1e3}function Ld(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=hl(n);return r?JSON.parse(r):(Oo("Failed to decode base64 JWT payload"),null)}catch(r){return Oo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Zf(t){const e=Ld(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof _n&&vb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class xb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Ti(t,Hg(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vg(i.providerUserInfo):[],l=bb(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),h=a?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new au(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function wb(t){const e=ke(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Vg(t){return t.map(e=>{var{providerId:n}=e,s=Td(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function kb(t,e){const n=await Wg(t,{},async()=>{const s=wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=$g(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Bg.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cb(t,e){return br(t,"POST","/v2/accounts:revokeToken",Ad(t,e))}/**
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
 */class Ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=Zf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await kb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ks;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ks,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function mn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new au(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yb(this,e)}reload(){return wb(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(os(this.auth));const e=await this.getIdToken();return await Ti(this,gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,a,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:p,emailVerified:x,isAnonymous:k,providerData:E,stsTokenManager:I}=n;$(p&&I,e,"internal-error");const T=Ks.fromJSON(this.name,I);$(typeof p=="string",e,"internal-error"),mn(d,e.name),mn(f,e.name),$(typeof x=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),mn(g,e.name),mn(v,e.name),mn(b,e.name),mn(C,e.name),mn(m,e.name),mn(_,e.name);const U=new en({uid:p,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:b,stsTokenManager:T,createdAt:m,lastLoginAt:_});return E&&Array.isArray(E)&&(U.providerData=E.map(y=>Object.assign({},y))),C&&(U._redirectEventId=C),U}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ks;r.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await gl(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];$(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Vg(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Ks;l.updateFromIdToken(s);const a=new en({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new au(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
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
 */const e_=new Map;function tn(t){dn(t instanceof Function,"Expected a class definition");let e=e_.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,e_.set(t,e),e)}/**
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
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yg.type="NONE";const t_=Yg;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,r.apiKey,i),this.fullPersistenceKey=Mo("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xs(tn(t_),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||tn(t_);const o=Mo(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){const d=en._fromJSON(e,h);u!==i&&(l=d),i=u;break}}catch{}const a=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Xs(i,e,s):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Xs(i,e,s))}}/**
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
 */function n_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jg(e))return"Blackberry";if(Zg(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||qg(e))&&!e.includes("edge/"))return"Chrome";if(Xg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Qg(t=Ge()){return/firefox\//i.test(t)}function Gg(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qg(t=Ge()){return/crios\//i.test(t)}function Kg(t=Ge()){return/iemobile/i.test(t)}function Xg(t=Ge()){return/android/i.test(t)}function Jg(t=Ge()){return/blackberry/i.test(t)}function Zg(t=Ge()){return/webos/i.test(t)}function Od(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Nb(t=Ge()){var e;return Od(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Eb(){return z1()&&document.documentMode===10}function e0(t=Ge()){return Od(t)||Xg(t)||Zg(t)||Jg(t)||/windows phone/i.test(t)||Kg(t)}/**
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
 */function t0(t,e=[]){let n;switch(t){case"Browser":n=n_(Ge());break;case"Worker":n=`${n_(Ge())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ks}/${s}`}/**
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
 */class Sb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Ib(t,e={}){return br(t,"GET","/v2/passwordPolicy",Ad(t,e))}/**
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
 */const Tb=6;class Rb{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Tb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Pb{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s_(this),this.idTokenSubscription=new s_(this),this.beforeStateQueue=new Sb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hg(this,{idToken:e}),s=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(os(this));const n=e?ke(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ib(this),n=new Rb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Cb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ab(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(t){return ke(t)}class s_{constructor(e){this.auth=e,this.observer=null,this.addObserver=K1(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jb(t){Md=t}function Ab(t){return Md.loadJS(t)}function Lb(){return Md.gapiScript}function Ob(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Mb(t,e){const n=Zl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(_l(i,e??{}))return r;$t(r,"already-initialized")}return n.initialize({options:e})}function Db(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ub(t,e,n){const s=ea(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=n0(e),{host:o,port:l}=Fb(e),a=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),zb()}function n0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Fb(t){const e=n0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:r_(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:r_(o)}}}function r_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class s0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
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
 */async function Js(t,e){return pb(t,"POST","/v1/accounts:signInWithIdp",Ad(t,e))}/**
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
 */const Bb="http://localhost";class ps extends s0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ps(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Td(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ps(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Js(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Js(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Js(e,n)}buildRequest(){const e={requestUri:Bb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wr(n)}return e}}/**
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
 */class Dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends Dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class wn extends Qi{constructor(){super("facebook.com")}static credential(e){return ps._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
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
 */class qt extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ps._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qt.credential(n,s)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
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
 */class bn extends Qi{constructor(){super("github.com")}static credential(e){return ps._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class kn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return ps._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await en._fromIdTokenResponse(e,s,r),o=i_(s);return new dr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=i_(s);return new dr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function i_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yl extends _n{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new yl(e,n,s,r)}}function r0(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,i,e,s):i})}async function Wb(t,e,n=!1){const s=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",s)}/**
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
 */async function $b(t,e,n=!1){const{auth:s}=t;if(Jt(s.app))return Promise.reject(os(s));const r="reauthenticate";try{const i=await Ti(t,r0(s,r,e,t),n);$(i.idToken,s,"internal-error");const o=Ld(i.idToken);$(o,s,"internal-error");const{sub:l}=o;return $(t.uid===l,s,"user-mismatch"),dr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(s,"user-mismatch"),i}}/**
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
 */async function Hb(t,e,n=!1){if(Jt(t.app))return Promise.reject(os(t));const s="signIn",r=await r0(t,s,e),i=await dr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Vb(t,e,n,s){return ke(t).onIdTokenChanged(e,n,s)}function Yb(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function Qb(t,e,n,s){return ke(t).onAuthStateChanged(e,n,s)}function Gb(t){return ke(t).signOut()}const vl="__sak";/**
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
 */class i0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qb=1e3,Kb=10;class o0 extends i0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Eb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Kb):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o0.type="LOCAL";const Xb=o0;/**
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
 */class l0 extends i0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}l0.type="SESSION";const a0=l0;/**
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
 */function Jb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ta(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await Jb(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function Ud(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=Ud("",20);r.port1.start();const h=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(f.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Wt(){return window}function ek(t){Wt().location.href=t}/**
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
 */function c0(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function tk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sk(){return c0()?self:null}/**
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
 */const u0="firebaseLocalStorageDb",rk=1,xl="firebaseLocalStorage",d0="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function ik(){const t=indexedDB.deleteDatabase(u0);return new Gi(t).toPromise()}function cu(){const t=indexedDB.open(u0,rk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xl,{keyPath:d0})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xl)?e(s):(s.close(),await ik(),e(await cu()))})})}async function o_(t,e,n){const s=na(t,!0).put({[d0]:e,value:n});return new Gi(s).toPromise()}async function ok(t,e){const n=na(t,!1).get(e),s=await new Gi(n).toPromise();return s===void 0?null:s.value}function l_(t,e){const n=na(t,!0).delete(e);return new Gi(n).toPromise()}const lk=800,ak=3;class h0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ak)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tk(),!this.activeServiceWorker)return;this.sender=new Zb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cu();return await o_(e,vl,"1"),await l_(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>o_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ok(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>l_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=na(r,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h0.type="LOCAL";const ck=h0;new Yi(3e4,6e4);/**
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
 */function f0(t,e){return e?tn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fd extends s0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uk(t){return Hb(t.auth,new Fd(t),t.bypassAuthState)}function dk(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),$b(n,new Fd(t),t.bypassAuthState)}async function hk(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Wb(n,new Fd(t),t.bypassAuthState)}/**
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
 */class _0{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uk;case"linkViaPopup":case"linkViaRedirect":return hk;case"reauthViaPopup":case"reauthViaRedirect":return dk;default:$t(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fk=new Yi(2e3,1e4);async function _k(t,e,n){if(Jt(t.app))return Promise.reject(Rt(t,"operation-not-supported-in-this-environment"));const s=ea(t);cb(t,e,Dd);const r=f0(s,n);return new ns(s,"signInViaPopup",e,r).executeNotNull()}class ns extends _0{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ns.currentPopupAction&&ns.currentPopupAction.cancel(),ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ud();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fk.get())};e()}}ns.currentPopupAction=null;/**
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
 */const pk="pendingRedirect",Do=new Map;class mk extends _0{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const s=await gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gk(t,e){const n=xk(e),s=vk(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function yk(t,e){Do.set(t._key(),e)}function vk(t){return tn(t._redirectPersistence)}function xk(t){return Mo(pk,t.config.apiKey,t.name)}async function wk(t,e,n=!1){if(Jt(t.app))return Promise.reject(os(t));const s=ea(t),r=f0(s,e),o=await new mk(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const bk=10*60*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ck(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!p0(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bk&&this.cachedEventUids.clear(),this.cachedEventUids.has(a_(e))}saveEventToCache(e){this.cachedEventUids.add(a_(e)),this.lastProcessedEventTime=Date.now()}}function a_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ck(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p0(t);default:return!1}}/**
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
 */async function Nk(t,e={}){return br(t,"GET","/v1/projects",e)}/**
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
 */const Ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sk=/^https?/;async function Ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Nk(t);for(const n of e)try{if(Tk(n))return}catch{}$t(t,"unauthorized-domain")}function Tk(t){const e=lu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Sk.test(n))return!1;if(Ek.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Rk=new Yi(3e4,6e4);function c_(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pk(t){return new Promise((e,n)=>{var s,r,i;function o(){c_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{c_(),n(Rt(t,"network-request-failed"))},timeout:Rk.get()})}if(!((r=(s=Wt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const l=Ob("iframefcb");return Wt()[l]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Ab(`${Lb()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function jk(t){return Uo=Uo||Pk(t),Uo}/**
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
 */const Ak=new Yi(5e3,15e3),Lk="__/auth/iframe",Ok="emulator/auth/iframe",Mk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uk(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jd(e,Ok):`https://${t.config.authDomain}/${Lk}`,s={apiKey:e.apiKey,appName:t.name,v:ks},r=Dk.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${wr(s).slice(1)}`}async function Fk(t){const e=await jk(t),n=Wt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Uk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mk,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=Wt().setTimeout(()=>{i(o)},Ak.get());function a(){Wt().clearTimeout(l),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const zk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bk=500,Wk=600,$k="_blank",Hk="http://localhost";class u_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vk(t,e,n,s=Bk,r=Wk){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const a=Object.assign(Object.assign({},zk),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Ge().toLowerCase();n&&(l=qg(u)?$k:n),Qg(u)&&(e=e||Hk,a.scrollbars="yes");const h=Object.entries(a).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(Nb(u)&&l!=="_self")return Yk(e||"",l),new u_(null);const d=window.open(e||"",l,h);$(d,t,"popup-blocked");try{d.focus()}catch{}return new u_(d)}function Yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Qk="__/auth/handler",Gk="emulator/auth/handler",qk=encodeURIComponent("fac");async function d_(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ks,eventId:r};if(e instanceof Dd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Qi){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const a=await t._getAppCheckToken(),u=a?`#${qk}=${encodeURIComponent(a)}`:"";return`${Kk(t)}?${wr(l).slice(1)}${u}`}function Kk({config:t}){return t.emulator?jd(t,Gk):`https://${t.authDomain}/${Qk}`}/**
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
 */const qa="webStorageSupport";class Xk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a0,this._completeRedirectFn=wk,this._overrideRedirectResult=yk}async _openPopup(e,n,s,r){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await d_(e,n,s,lu(),r);return Vk(e,o,Ud())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await d_(e,n,s,lu(),r);return ek(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Fk(e),s=new kk(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qa,{type:qa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qa];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e0()||Gg()||Od()}}const Jk=Xk;var h_="@firebase/auth",f_="1.7.9";/**
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
 */class Zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function e2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function t2(t){_s(new Bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t0(t)},u=new Pb(s,r,i,a);return Db(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Bn("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(s=>new Zk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(h_,f_,e2(t)),Bt(h_,f_,"esm2017")}/**
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
 */const n2=5*60,s2=Rg("authIdTokenMaxAge")||n2;let __=null;const r2=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>s2)return;const r=n==null?void 0:n.token;__!==r&&(__=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function i2(t=Id()){const e=Zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mb(t,{popupRedirectResolver:Jk,persistence:[ck,Xb,a0]}),s=Rg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=r2(i.toString());Yb(n,o,()=>o(n.currentUser)),Vb(n,l=>o(l))}}const r=Sg("auth");return r&&Ub(n,`http://${r}`),n}function o2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}jb({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",o2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});t2("Browser");var p_={};const m_="@firebase/database",g_="1.0.8";/**
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
 */let m0="";function l2(t){m0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Si(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new a2(e)}}catch{}return new c2},ss=g0("localStorage"),u2=g0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Ed("@firebase/database"),d2=function(){let t=1;return function(){return t++}}(),y0=function(t){const e=Z1(t),n=new q1;n.update(e);const s=n.digest();return kd.encodeByteArray(s)},qi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=qi.apply(null,s):typeof s=="object"?e+=Te(s):e+=s,e+=" "}return e};let ri=null,y_=!0;const h2=function(t,e){j(!0,"Can't turn on custom loggers persistently."),Zs.logLevel=te.VERBOSE,ri=Zs.log.bind(Zs)},Ae=function(...t){if(y_===!0&&(y_=!1,ri===null&&u2.get("logging_enabled")===!0&&h2()),ri){const e=qi.apply(null,t);ri(e)}},Ki=function(t){return function(...e){Ae(t,...e)}},uu=function(...t){const e="FIREBASE INTERNAL ERROR: "+qi(...t);Zs.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${qi(...t)}`;throw Zs.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+qi(...t);Zs.warn(e)},f2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},_2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hr="[MIN_NAME]",ms="[MAX_NAME]",Cs=function(t,e){if(t===e)return 0;if(t===hr||e===ms)return-1;if(e===hr||t===ms)return 1;{const n=v_(t),s=v_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},p2=function(t,e){return t===e?0:t<e?-1:1},Mr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Bd=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Te(e[s]),n+=":",n+=Bd(t[e[s]]);return n+="}",n},v0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const x0=function(t){j(!zd(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,l,a;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(h.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},m2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},g2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function y2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const v2=new RegExp("^-?(0*)\\d{1,10}$"),x2=-2147483648,w2=2147483647,v_=function(t){if(v2.test(t)){const e=Number(t);if(e>=x2&&e<=w2)return e}return null},kr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},b2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ii=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class k2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class Fo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="5",w0="v",b0="s",k0="r",C0="f",N0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,E0="ls",S0="p",du="ac",I0="websocket",T0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e,n,s,r,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ss.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ss.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function N2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function P0(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let s;if(e===I0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===T0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);N2(t)&&(n.ns=t.namespace);const r=[];return Me(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return j1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={},Xa={};function $d(t){const e=t.toString();return Ka[e]||(Ka[e]=new E2),Ka[e]}function S2(t,e){const n=t.toString();return Xa[n]||(Xa[n]=e()),Xa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&kr(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="start",T2="close",R2="pLPCommand",P2="pRTLPCB",j0="id",A0="pw",L0="ser",j2="cb",A2="seg",L2="ts",O2="d",M2="dframe",O0=1870,M0=30,D2=O0-M0,U2=25e3,F2=3e4;class $s{constructor(e,n,s,r,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ki(e),this.stats_=$d(n),this.urlFn=a=>(this.appCheckToken&&(a[du]=this.appCheckToken),P0(n,T0,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new I2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(F2)),_2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hd((...i)=>{const[o,l,a,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===x_)this.id=l,this.password=a;else if(o===T2)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[x_]="t",s[L0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[j2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[w0]=Wd,this.transportSessionId&&(s[b0]=this.transportSessionId),this.lastSessionId&&(s[E0]=this.lastSessionId),this.applicationId&&(s[S0]=this.applicationId),this.appCheckToken&&(s[du]=this.appCheckToken),typeof location<"u"&&location.hostname&&N0.test(location.hostname)&&(s[k0]=C0);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$s.forceAllow_=!0}static forceDisallow(){$s.forceDisallow_=!0}static isAvailable(){return $s.forceAllow_?!0:!$s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!m2()&&!g2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ng(n),r=v0(s,D2);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[M2]="t",s[j0]=e,s[A0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hd{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=d2(),window[R2+this.uniqueCallbackIdentifier]=e,window[P2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[j0]=this.myID,e[A0]=this.myPW,e[L0]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+M0+s.length<=O0;){const o=this.pendingSegs.shift();s=s+"&"+A2+r+"="+o.seg+"&"+L2+r+"="+o.ts+"&"+O2+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(U2)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=16384,B2=45e3;let wl=null;typeof MozWebSocket<"u"?wl=MozWebSocket:typeof WebSocket<"u"&&(wl=WebSocket);class Et{constructor(e,n,s,r,i,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ki(this.connId),this.stats_=$d(n),this.connURL=Et.connectionURL_(n,o,l,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[w0]=Wd,typeof location<"u"&&location.hostname&&N0.test(location.hostname)&&(o[k0]=C0),n&&(o[b0]=n),s&&(o[E0]=s),r&&(o[du]=r),i&&(o[S0]=i),P0(e,I0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ss.set("previous_websocket_failure",!0);try{let s;B1(),this.mySock=new wl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&wl!==null&&!Et.forceDisallow_}static previouslyFailed(){return ss.isInMemoryStorage||ss.get("previous_websocket_failure")===!0}markConnectionHealthy(){ss.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Si(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=v0(n,z2);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(B2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$s,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Et&&Et.isAvailable();let s=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Et];else{const r=this.transports_=[];for(const i of Ri.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ri.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=6e4,$2=5e3,H2=10*1024,V2=100*1024,Ja="t",w_="d",Y2="s",b_="r",Q2="e",k_="o",C_="a",N_="n",E_="p",G2="h";class q2{constructor(e,n,s,r,i,o,l,a,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ki("c:"+this.id+":"),this.transportManager_=new Ri(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ii(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>V2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>H2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ja in e){const n=e[Ja];n===C_?this.upgradeIfSecondaryHealthy_():n===b_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===k_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mr("t",e),s=Mr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:E_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:C_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:N_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mr("t",e),s=Mr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mr(Ja,e);if(w_ in e){const s=e[w_];if(n===G2){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===N_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Y2?this.onConnectionShutdown_(s):n===b_?this.onReset_(s):n===Q2?uu("Server Error: "+s):n===k_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):uu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wd!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ii(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(W2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ii(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:E_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ss.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends U0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new bl}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=32,I_=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function Vd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function K2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Pi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function F0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ne(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),s=Y(e);if(n===null)return e;if(n===s)return tt(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function X2(t,e){const n=Pi(t,0),s=Pi(e,0);for(let r=0;r<n.length&&r<s.length;r++){const i=Cs(n[r],s[r]);if(i!==0)return i}return n.length===s.length?0:n.length<s.length?-1:1}function Yd(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class J2{constructor(e,n){this.errorPrefix_=n,this.parts_=Pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Jl(this.parts_[s]);z0(this)}}function Z2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jl(e),z0(t)}function eC(t){const e=t.parts_.pop();t.byteLength_-=Jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function z0(t){if(t.byteLength_>I_)throw new Error(t.errorPrefix_+"has a key path longer than "+I_+" bytes ("+t.byteLength_+").");if(t.parts_.length>S_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+S_+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends U0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Qd}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=1e3,tC=60*5*1e3,T_=30*1e3,nC=1.3,sC=3e4,rC="server_kill",R_=3;class rn extends D0{constructor(e,n,s,r,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=rn.nextPersistentConnectionId_++,this.log_=Ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dr,this.maxReconnectDelay_=tC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Te(i)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Hi,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;rn.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const s=ur(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||G1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=T_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Q1(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):uu("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sC&&(this.reconnectDelay_=Dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+rn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},u=function(d){j(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new q2(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Qe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(rC)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Qe(d),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],tu(this.interruptReasons_)&&(this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Bd(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=R_&&(this.reconnectDelay_=T_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=R_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+m0.replace(/\./g,"-")]=1,Nd()?e["framework.cordova"]=1:jg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bl.getInstance().currentlyOnline();return tu(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Q(hr,e),r=new Q(hr,n);return this.compare(s,r)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;class B0 extends sa{static get __EMPTY_NODE(){return yo}static set __EMPTY_NODE(e){yo=e}compare(e,n){return Cs(e.name,n.name)}isDefinedOn(e){throw xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(ms,yo)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,yo)}toString(){return".key"}}const er=new B0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Se.RED,this.left=r??nt.EMPTY_NODE,this.right=i??nt.EMPTY_NODE}copy(e,n,s,r,i){return new Se(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class iC{copy(e,n,s,r,i){return this}insert(e,n,s){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vo(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new iC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e){return Cs(t.name,e.name)}function Gd(t,e){return Cs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hu;function lC(t){hu=t}const W0=function(t){return typeof t=="number"?"number:"+x0(t):"string:"+t},$0=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else j(t===hu||t.isEmpty(),"priority of unexpected type.");j(t===hu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$0(this.priorityNode_)}static set __childrenNodeConstructor(e){P_=e}static get __childrenNodeConstructor(){return P_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(j(s!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+W0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=x0(this.value_):e+=this.value_,this.lazyHash_=y0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=Ne.VALUE_TYPE_ORDER.indexOf(n),i=Ne.VALUE_TYPE_ORDER.indexOf(s);return j(r>=0,"Unknown leaf type: "+n),j(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H0,V0;function aC(t){H0=t}function cC(t){V0=t}class uC extends sa{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Cs(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(ms,new Ne("[PRIORITY-POST]",V0))}makePost(e,n){const s=H0(e);return new Q(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const me=new uC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=Math.log(2);class hC{constructor(e){const n=i=>parseInt(Math.log(i)/dC,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const kl=function(t,e,n,s){t.sort(e);const r=function(a,u){const h=u-a;let d,f;if(h===0)return null;if(h===1)return d=t[a],f=n?n(d):d,new Se(f,d.node,Se.BLACK,null,null);{const g=parseInt(h/2,10)+a,v=r(a,g),b=r(g+1,u);return d=t[g],f=n?n(d):d,new Se(f,d.node,Se.BLACK,v,b)}},i=function(a){let u=null,h=null,d=t.length;const f=function(v,b){const C=d-v,m=d;d-=v;const _=r(C+1,m),p=t[C],x=n?n(p):p;g(new Se(x,p.node,b,null,_))},g=function(v){u?(u.left=v,u=v):(h=v,u=v)};for(let v=0;v<a.count;++v){const b=a.nextBitIsOne(),C=Math.pow(2,a.count-(v+1));b?f(C,Se.BLACK):(f(C,Se.BLACK),f(C,Se.RED))}return h},o=new hC(t.length),l=i(o);return new nt(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;const Rs={};class nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(Rs&&me,"ChildrenNode.ts has not been loaded"),Za=Za||new nn({".priority":Rs},{".priority":me}),Za}get(e){const n=ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){j(e!==er,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Q.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let l;r?l=kl(s,e.getCompare()):l=Rs;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const h=Object.assign({},this.indexes_);return h[a]=l,new nn(h,u)}addToIndexes(e,n){const s=fl(this.indexes_,(r,i)=>{const o=ur(this.indexSet_,i);if(j(o,"Missing index implementation for "+i),r===Rs)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Q.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),kl(l,o.getCompare())}else return Rs;else{const l=n.get(e.name);let a=r;return l&&(a=a.remove(new Q(e.name,l))),a.insert(e,e.node)}});return new nn(s,this.indexSet_)}removeFromIndexes(e,n){const s=fl(this.indexes_,r=>{if(r===Rs)return r;{const i=n.get(e.name);return i?r.remove(new Q(e.name,i)):r}});return new nn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ur;class W{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&$0(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ur||(Ur=new W(new nt(Gd),null,nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ur}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ur:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Q(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Ur:this.priorityNode_;return new W(r,o,i)}}updateChild(e,n){const s=Y(e);if(s===null)return n;{j(Y(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ie(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),s++,i&&W.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+W0(this.getPriority().val())+":"),this.forEachChild(me,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":y0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Q(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Q.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xi?-1:0}withIndex(e){if(e===er||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===er||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(me),r=n.getIterator(me);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===er?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fC extends W{constructor(){super(new nt(Gd),W.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Xi=new fC;Object.defineProperties(Q,{MIN:{value:new Q(hr,W.EMPTY_NODE)},MAX:{value:new Q(ms,Xi)}});B0.__EMPTY_NODE=W.EMPTY_NODE;Ne.__childrenNodeConstructor=W;lC(Xi);cC(Xi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=!0;function Ie(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Ie(e))}if(!(t instanceof Array)&&_C){const n=[];let s=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new Q(o,a)))}}),n.length===0)return W.EMPTY_NODE;const i=kl(n,oC,o=>o.name,Gd);if(s){const o=kl(n,me.getCompare());return new W(i,Ie(e),new nn({".priority":o},{".priority":me}))}else return new W(i,Ie(e),nn.Default)}else{let n=W.EMPTY_NODE;return Me(t,(s,r)=>{if(Ht(t,s)&&s.substring(0,1)!=="."){const i=Ie(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Ie(e))}}aC(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC extends sa{constructor(e){super(),this.indexPath_=e,j(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Cs(e.name,n.name):i}makePost(e,n){const s=Ie(e),r=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new Q(n,r)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Xi);return new Q(ms,e)}toString(){return Pi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC extends sa{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Cs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const s=Ie(e);return new Q(n,s)}toString(){return".value"}}const gC=new mC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t){return{type:"value",snapshotNode:t}}function fr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function yC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.index_=e}updateChild(e,n,s,r,i,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(r).equals(s.getChild(r))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ji(n,l)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(fr(n,s)):o.trackChildChange(Ai(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(me,(r,i)=>{n.hasChild(r)||s.trackChildChange(ji(r,i))}),n.isLeafNode()||n.forEachChild(me,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||s.trackChildChange(Ai(r,i,o))}else s.trackChildChange(fr(r,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.indexedFilter_=new qd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Li.getStartPost_(e),this.endPost_=Li.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,r,i,o){return this.matches(new Q(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,r,i,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(W.EMPTY_NODE);const i=this;return n.forEachChild(me,(o,l)=>{i.matches(new Q(o,l))||(r=r.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,r,i,o){return this.rangedFilter_.matches(new Q(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,r,i,o):this.fullLimitUpdateChild_(e,n,s,i,o)}updateFullNode(e,n,s){let r;if(n.isLeafNode()||n.isEmpty())r=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=W.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))r=r.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(W.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:r=r.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,r,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const l=e;j(l.numChildren()===this.limit_,"");const a=new Q(n,s),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=r.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(h&&!s.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(Ai(n,s,d)),l.updateImmediateChild(n,s);{i!=null&&i.trackChildChange(ji(n,d));const b=l.updateImmediateChild(n,W.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(fr(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:h&&o(u,a)>=0?(i!=null&&(i.trackChildChange(ji(u.name,u.node)),i.trackChildChange(fr(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hr}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Kd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xC(t){return t.loadsAllData()?new qd(t.getIndex()):t.hasLimit()?new vC(t):new Li(t)}function j_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===gC?n="$value":t.index_===er?n="$key":(j(t.index_ instanceof pC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Te(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Te(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Te(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function A_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends D0{constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Cl.getListenId_(e,s),l={};this.listens_[o]=l;const a=j_(e._queryParams);this.restRequest_(i+".json",a,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),ur(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",r(f,null)}})}unlisten(e,n){const s=Cl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=j_(e._queryParams),s=e._path.toString(),r=new Hi;return this.restRequest_(s+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(s,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Si(l.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return{value:null,children:new Map}}function Q0(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Y(e);t.children.has(s)||t.children.set(s,Nl());const r=t.children.get(s);e=ie(e),Q0(r,e,n)}}function fu(t,e,n){t.value!==null?n(e,t.value):bC(t,(s,r)=>{const i=new ne(e.toString()+"/"+s);fu(r,i,n)})}function bC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=10*1e3,CC=30*1e3,NC=5*60*1e3;class EC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kC(e);const s=L_+(CC-L_)*Math.random();ii(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Me(e,(r,i)=>{i>0&&Ht(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),ii(this.reportStats_.bind(this),Math.floor(Math.random()*2*NC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Xd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Jd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=St.ACK_USER_WRITE,this.source=Xd()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new El(Z(),n,this.revert)}}else return j(Y(this.path)===e,"operationForChild called for unrelated child."),new El(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Oi(this.source,Z()):new Oi(this.source,ie(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=St.OVERWRITE}operationForChild(e){return G(this.path)?new gs(this.source,Z(),this.snap.getImmediateChild(e)):new gs(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=St.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new gs(this.source,Z(),n.value):new _r(this.source,Z(),n)}else return j(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _r(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function IC(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(yC(o.childName,o.snapshotNode))}),Fr(t,r,"child_removed",e,s,n),Fr(t,r,"child_added",e,s,n),Fr(t,r,"child_moved",i,s,n),Fr(t,r,"child_changed",e,s,n),Fr(t,r,"value",e,s,n),r}function Fr(t,e,n,s,r,i){const o=s.filter(l=>l.type===n);o.sort((l,a)=>RC(t,l,a)),o.forEach(l=>{const a=TC(t,l,i);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function TC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RC(t,e,n){if(e.childName==null||n.childName==null)throw xr("Should only compare child_ events.");const s=new Q(e.childName,e.snapshotNode),r=new Q(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e){return{eventCache:t,serverCache:e}}function oi(t,e,n,s){return ra(new ys(e,n,s),t.serverCache)}function G0(t,e,n,s){return ra(t.eventCache,new ys(e,n,s))}function _u(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;const PC=()=>(ec||(ec=new nt(p2)),ec);class re{constructor(e,n=PC()){this.value=e,this.children=n}static fromObject(e){let n=new re(null);return Me(e,(s,r)=>{n=n.set(new ne(s),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const s=Y(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ie(e),n);return i!=null?{path:pe(new ne(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=Y(e),s=this.children.get(n);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,n){if(G(e))return new re(n,this.children);{const s=Y(e),i=(this.children.get(s)||new re(null)).set(ie(e),n),o=this.children.insert(s,i);return new re(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const n=Y(e),s=this.children.get(n);if(s){const r=s.remove(ie(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new re(null):new re(this.value,i)}else return this}}get(e){if(G(e))return this.value;{const n=Y(e),s=this.children.get(n);return s?s.get(ie(e)):null}}setTree(e,n){if(G(e))return n;{const s=Y(e),i=(this.children.get(s)||new re(null)).setTree(ie(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new re(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(pe(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(G(e))return null;{const i=Y(e),o=this.children.get(i);return o?o.findOnPath_(ie(e),pe(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(G(e))return this;{this.value&&s(n,this.value);const r=Y(e),i=this.children.get(r);return i?i.foreachOnPath_(ie(e),pe(n,r),s):new re(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new re(null))}}function li(t,e,n){if(G(e))return new Pt(new re(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=tt(r,e);return i=i.updateChild(o,n),new Pt(t.writeTree_.set(r,i))}else{const r=new re(n),i=t.writeTree_.setTree(e,r);return new Pt(i)}}}function pu(t,e,n){let s=t;return Me(n,(r,i)=>{s=li(s,pe(e,r),i)}),s}function O_(t,e){if(G(e))return Pt.empty();{const n=t.writeTree_.setTree(e,new re(null));return new Pt(n)}}function mu(t,e){return Ns(t,e)!=null}function Ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function M_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(s,r)=>{e.push(new Q(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Q(s,r.value))}),e}function Un(t,e){if(G(e))return t;{const n=Ns(t,e);return n!=null?new Pt(new re(n)):new Pt(t.writeTree_.subtree(e))}}function gu(t){return t.writeTree_.isEmpty()}function pr(t,e){return q0(Z(),t.writeTree_,e)}function q0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(j(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=q0(pe(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t,e){return Z0(e,t)}function jC(t,e,n,s,r){j(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=li(t.visibleWrites,e,n)),t.lastWriteId=s}function AC(t,e,n,s){j(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=pu(t.visibleWrites,e,n),t.lastWriteId=s}function LC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function OC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&MC(l,s.path)?r=!1:gt(s.path,l.path)&&(i=!0)),o--}if(r){if(i)return DC(t),!0;if(s.snap)t.visibleWrites=O_(t.visibleWrites,s.path);else{const l=s.children;Me(l,a=>{t.visibleWrites=O_(t.visibleWrites,pe(s.path,a))})}return!0}else return!1}function MC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(pe(t.path,n),e))return!0;return!1}function DC(t){t.visibleWrites=K0(t.allWrites,UC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function UC(t){return t.visible}function K0(t,e,n){let s=Pt.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let l;if(i.snap)gt(n,o)?(l=tt(n,o),s=li(s,l,i.snap)):gt(o,n)&&(l=tt(o,n),s=li(s,Z(),i.snap.getChild(l)));else if(i.children){if(gt(n,o))l=tt(n,o),s=pu(s,l,i.children);else if(gt(o,n))if(l=tt(o,n),G(l))s=pu(s,Z(),i.children);else{const a=ur(i.children,Y(l));if(a){const u=a.getChild(ie(l));s=li(s,Z(),u)}}}else throw xr("WriteRecord should have .snap or .children")}}return s}function X0(t,e,n,s,r){if(!s&&!r){const i=Ns(t.visibleWrites,e);if(i!=null)return i;{const o=Un(t.visibleWrites,e);if(gu(o))return n;if(n==null&&!mu(o,Z()))return null;{const l=n||W.EMPTY_NODE;return pr(o,l)}}}else{const i=Un(t.visibleWrites,e);if(!r&&gu(i))return n;if(!r&&n==null&&!mu(i,Z()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(gt(u.path,e)||gt(e,u.path))},l=K0(t.allWrites,o,e),a=n||W.EMPTY_NODE;return pr(l,a)}}}function FC(t,e,n){let s=W.EMPTY_NODE;const r=Ns(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(me,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Un(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=pr(Un(i,new ne(o)),l);s=s.updateImmediateChild(o,a)}),M_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Un(t.visibleWrites,e);return M_(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zC(t,e,n,s,r){j(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=pe(e,n);if(mu(t.visibleWrites,i))return null;{const o=Un(t.visibleWrites,i);return gu(o)?r.getChild(n):pr(o,r.getChild(n))}}function BC(t,e,n,s){const r=pe(e,n),i=Ns(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Un(t.visibleWrites,r);return pr(o,s.getNode().getImmediateChild(n))}else return null}function WC(t,e){return Ns(t.visibleWrites,e)}function $C(t,e,n,s,r,i,o){let l;const a=Un(t.visibleWrites,e),u=Ns(a,Z());if(u!=null)l=u;else if(n!=null)l=pr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],d=o.getCompare(),f=i?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=f.getNext();return h}else return[]}function HC(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function Sl(t,e,n,s){return X0(t.writeTree,t.treePath,e,n,s)}function th(t,e){return FC(t.writeTree,t.treePath,e)}function D_(t,e,n,s){return zC(t.writeTree,t.treePath,e,n,s)}function Il(t,e){return WC(t.writeTree,pe(t.treePath,e))}function VC(t,e,n,s,r,i){return $C(t.writeTree,t.treePath,e,n,s,r,i)}function nh(t,e,n){return BC(t.writeTree,t.treePath,e,n)}function J0(t,e){return Z0(pe(t.treePath,e),t.writeTree)}function Z0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,Ai(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,ji(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,fr(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,Ai(s,e.snapshotNode,r.oldSnap));else throw xr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ey=new QC;class sh{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ys(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nh(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vs(this.viewCache_),i=VC(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){return{filter:t}}function qC(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function KC(t,e,n,s,r){const i=new YC;let o,l;if(n.type===St.OVERWRITE){const u=n;u.source.fromUser?o=yu(t,e,u.path,u.snap,s,r,i):(j(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Tl(t,e,u.path,u.snap,s,r,l,i))}else if(n.type===St.MERGE){const u=n;u.source.fromUser?o=JC(t,e,u.path,u.children,s,r,i):(j(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=vu(t,e,u.path,u.children,s,r,l,i))}else if(n.type===St.ACK_USER_WRITE){const u=n;u.revert?o=tN(t,e,u.path,s,r,i):o=ZC(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===St.LISTEN_COMPLETE)o=eN(t,e,n.path,s,i);else throw xr("Unknown operation type: "+n.type);const a=i.getChanges();return XC(e,o,a),{viewCache:o,changes:a}}function XC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=_u(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(Y0(_u(e)))}}function ty(t,e,n,s,r,i){const o=e.eventCache;if(Il(s,n)!=null)return e;{let l,a;if(G(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=vs(e),h=u instanceof W?u:W.EMPTY_NODE,d=th(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Sl(s,vs(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Y(n);if(u===".priority"){j(Wn(n)===1,"Can't have a priority with additional path components");const h=o.getNode();a=e.serverCache.getNode();const d=D_(s,n,h,a);d!=null?l=t.filter.updatePriority(h,d):l=o.getNode()}else{const h=ie(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=D_(s,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(h,f):d=o.getNode().getImmediateChild(u)}else d=nh(s,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,h,r,i):l=o.getNode()}}return oi(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Tl(t,e,n,s,r,i,o,l){const a=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=h.updateFullNode(a.getNode(),s,null);else if(h.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);u=h.updateFullNode(a.getNode(),g,null)}else{const g=Y(n);if(!a.isCompleteForPath(n)&&Wn(n)>1)return e;const v=ie(n),C=a.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?u=h.updatePriority(a.getNode(),C):u=h.updateChild(a.getNode(),g,C,v,ey,null)}const d=G0(e,u,a.isFullyInitialized()||G(n),h.filtersNodes()),f=new sh(r,d,i);return ty(t,d,n,r,f,l)}function yu(t,e,n,s,r,i,o){const l=e.eventCache;let a,u;const h=new sh(r,e,i);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=oi(e,u,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),a=oi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=ie(n),g=l.getNode().getImmediateChild(d);let v;if(G(f))v=s;else{const b=h.getCompleteChild(d);b!=null?Vd(f)===".priority"&&b.getChild(F0(f)).isEmpty()?v=b:v=b.updateChild(f,s):v=W.EMPTY_NODE}if(g.equals(v))a=e;else{const b=t.filter.updateChild(l.getNode(),d,v,f,h,o);a=oi(e,b,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function U_(t,e){return t.eventCache.isCompleteForChild(e)}function JC(t,e,n,s,r,i,o){let l=e;return s.foreach((a,u)=>{const h=pe(n,a);U_(e,Y(h))&&(l=yu(t,l,h,u,r,i,o))}),s.foreach((a,u)=>{const h=pe(n,a);U_(e,Y(h))||(l=yu(t,l,h,u,r,i,o))}),l}function F_(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function vu(t,e,n,s,r,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=s:u=new re(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=F_(t,g,f);a=Tl(t,a,new ne(d),v,r,i,o,l)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!h.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),b=F_(t,v,f);a=Tl(t,a,new ne(d),b,r,i,o,l)}}),a}function ZC(t,e,n,s,r,i,o){if(Il(r,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Tl(t,e,n,a.getNode().getChild(n),r,i,l,o);if(G(n)){let u=new re(null);return a.getNode().forEachChild(er,(h,d)=>{u=u.set(new ne(h),d)}),vu(t,e,n,u,r,i,l,o)}else return e}else{let u=new re(null);return s.foreach((h,d)=>{const f=pe(n,h);a.isCompleteForPath(f)&&(u=u.set(h,a.getNode().getChild(f)))}),vu(t,e,n,u,r,i,l,o)}}function eN(t,e,n,s,r){const i=e.serverCache,o=G0(e,i.getNode(),i.isFullyInitialized()||G(n),i.isFiltered());return ty(t,o,n,s,ey,r)}function tN(t,e,n,s,r,i){let o;if(Il(s,n)!=null)return e;{const l=new sh(s,e,r),a=e.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Sl(s,vs(e));else{const d=e.serverCache.getNode();j(d instanceof W,"serverChildren would be complete if leaf node"),h=th(s,d)}h=h,u=t.filter.updateFullNode(a,h,i)}else{const h=Y(n);let d=nh(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=a.getImmediateChild(h)),d!=null?u=t.filter.updateChild(a,h,d,ie(n),l,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(a,h,W.EMPTY_NODE,ie(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sl(s,vs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Il(s,Z())!=null,oi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,r=new qd(s.getIndex()),i=xC(s);this.processor_=GC(i);const o=n.serverCache,l=n.eventCache,a=r.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(W.EMPTY_NODE,l.getNode(),null),h=new ys(a,o.isFullyInitialized(),r.filtersNodes()),d=new ys(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=ra(d,h),this.eventGenerator_=new SC(this.query_)}get query(){return this.query_}}function sN(t){return t.viewCache_.serverCache.getNode()}function rN(t,e){const n=vs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function z_(t){return t.eventRegistrations_.length===0}function iN(t,e){t.eventRegistrations_.push(e)}function B_(t,e,n){const s=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,r);o&&s.push(o)})}if(e){let r=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return s}function W_(t,e,n,s){e.type===St.MERGE&&e.source.queryId!==null&&(j(vs(t.viewCache_),"We should always have a full cache before handling merges"),j(_u(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=KC(t.processor_,r,e,n,s);return qC(t.processor_,i.viewCache),j(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,ny(t,i.changes,i.viewCache.eventCache.getNode(),null)}function oN(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(i,o)=>{s.push(fr(i,o))}),n.isFullyInitialized()&&s.push(Y0(n.getNode())),ny(t,s,n.getNode(),e)}function ny(t,e,n,s){const r=s?[s]:t.eventRegistrations_;return IC(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class lN{constructor(){this.views=new Map}}function aN(t){j(!Rl,"__referenceConstructor has already been defined"),Rl=t}function cN(){return j(Rl,"Reference.ts has not been loaded"),Rl}function uN(t){return t.views.size===0}function rh(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return j(i!=null,"SyncTree gave us an op for an invalid query."),W_(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(W_(o,e,n,s));return i}}function dN(t,e,n,s,r){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Sl(n,r?s:null),a=!1;l?a=!0:s instanceof W?(l=th(n,s),a=!1):(l=W.EMPTY_NODE,a=!1);const u=ra(new ys(l,a,!1),new ys(s,r,!1));return new nN(e,u)}return o}function hN(t,e,n,s,r,i){const o=dN(t,e,s,r,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iN(o,n),oN(o,n)}function fN(t,e,n,s){const r=e._queryIdentifier,i=[];let o=[];const l=$n(t);if(r==="default")for(const[a,u]of t.views.entries())o=o.concat(B_(u,n,s)),z_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(r);a&&(o=o.concat(B_(a,n,s)),z_(a)&&(t.views.delete(r),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!$n(t)&&i.push(new(cN())(e._repo,e._path)),{removed:i,events:o}}function sy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function tr(t,e){let n=null;for(const s of t.views.values())n=n||rN(s,e);return n}function ry(t,e){if(e._queryParams.loadsAllData())return ia(t);{const s=e._queryIdentifier;return t.views.get(s)}}function iy(t,e){return ry(t,e)!=null}function $n(t){return ia(t)!=null}function ia(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;function _N(t){j(!Pl,"__referenceConstructor has already been defined"),Pl=t}function pN(){return j(Pl,"Reference.ts has not been loaded"),Pl}let mN=1;class $_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=HC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oy(t,e,n,s,r){return jC(t.pendingWriteTree_,e,n,s,r),r?Cr(t,new gs(Xd(),e,n)):[]}function gN(t,e,n,s){AC(t.pendingWriteTree_,e,n,s);const r=re.fromObject(n);return Cr(t,new _r(Xd(),e,r))}function Sn(t,e,n=!1){const s=LC(t.pendingWriteTree_,e);if(OC(t.pendingWriteTree_,e)){let i=new re(null);return s.snap!=null?i=i.set(Z(),!0):Me(s.children,o=>{i=i.set(new ne(o),!0)}),Cr(t,new El(s.path,i,n))}else return[]}function oa(t,e,n){return Cr(t,new gs(Jd(),e,n))}function yN(t,e,n){const s=re.fromObject(n);return Cr(t,new _r(Jd(),e,s))}function vN(t,e){return Cr(t,new Oi(Jd(),e))}function xN(t,e,n){const s=oh(t,n);if(s){const r=lh(s),i=r.path,o=r.queryId,l=tt(i,e),a=new Oi(Zd(o),l);return ah(t,i,a)}else return[]}function xu(t,e,n,s,r=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||iy(o,e))){const a=fN(o,e,n,s);uN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!r){const h=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,g)=>$n(g));if(h&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const g=kN(f);for(let v=0;v<g.length;++v){const b=g[v],C=b.query,m=cy(t,b);t.listenProvider_.startListening(ai(C),jl(t,C),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!s&&(h?t.listenProvider_.stopListening(ai(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(la(f));t.listenProvider_.stopListening(ai(f),g)}))}CN(t,u)}return l}function wN(t,e,n,s){const r=oh(t,s);if(r!=null){const i=lh(r),o=i.path,l=i.queryId,a=tt(o,e),u=new gs(Zd(l),a,n);return ah(t,o,u)}else return[]}function bN(t,e,n,s){const r=oh(t,s);if(r){const i=lh(r),o=i.path,l=i.queryId,a=tt(o,e),u=re.fromObject(n),h=new _r(Zd(l),a,u);return ah(t,o,h)}else return[]}function H_(t,e,n,s=!1){const r=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(r,(f,g)=>{const v=tt(f,r);i=i||tr(g,v),o=o||$n(g)});let l=t.syncPointTree_.get(r);l?(o=o||$n(l),i=i||tr(l,Z())):(l=new lN,t.syncPointTree_=t.syncPointTree_.set(r,l));let a;i!=null?a=!0:(a=!1,i=W.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((g,v)=>{const b=tr(v,Z());b&&(i=i.updateImmediateChild(g,b))}));const u=iy(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=la(e);j(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=NN();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=eh(t.pendingWriteTree_,r);let d=hN(l,e,n,h,i,a);if(!u&&!o&&!s){const f=ry(l,e);d=d.concat(EN(t,e,f))}return d}function ih(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=tt(o,e),u=tr(l,a);if(u)return u});return X0(r,e,i,n,!0)}function Cr(t,e){return ly(e,t.syncPointTree_,null,eh(t.pendingWriteTree_,Z()))}function ly(t,e,n,s){if(G(t.path))return ay(t,e,n,s);{const r=e.get(Z());n==null&&r!=null&&(n=tr(r,Z()));let i=[];const o=Y(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,h=J0(s,o);i=i.concat(ly(l,a,u,h))}return r&&(i=i.concat(rh(r,t,s,n))),i}}function ay(t,e,n,s){const r=e.get(Z());n==null&&r!=null&&(n=tr(r,Z()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=J0(s,o),h=t.operationForChild(o);h&&(i=i.concat(ay(h,l,a,u)))}),r&&(i=i.concat(rh(r,t,s,n))),i}function cy(t,e){const n=e.query,s=jl(t,n);return{hashFn:()=>(sN(e)||W.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return s?xN(t,n._path,s):vN(t,n._path);{const i=y2(r,n);return xu(t,n,null,i)}}}}function jl(t,e){const n=la(e);return t.queryToTagMap.get(n)}function la(t){return t._path.toString()+"$"+t._queryIdentifier}function oh(t,e){return t.tagToQueryMap.get(e)}function lh(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function ah(t,e,n){const s=t.syncPointTree_.get(e);j(s,"Missing sync point for query tag that we're tracking");const r=eh(t.pendingWriteTree_,e);return rh(s,n,r,null)}function kN(t){return t.fold((e,n,s)=>{if(n&&$n(n))return[ia(n)];{let r=[];return n&&(r=sy(n)),Me(s,(i,o)=>{r=r.concat(o)}),r}})}function ai(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pN())(t._repo,t._path):t}function CN(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const r=la(s),i=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(i)}}}function NN(){return mN++}function EN(t,e,n){const s=e._path,r=jl(t,e),i=cy(t,n),o=t.listenProvider_.startListening(ai(e),r,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(s);if(r)j(!$n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,h,d)=>{if(!G(u)&&h&&$n(h))return[ia(h).query];{let f=[];return h&&(f=f.concat(sy(h).map(g=>g.query))),Me(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const h=a[u];t.listenProvider_.stopListening(ai(h),jl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ch(n)}node(){return this.node_}}class uh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new uh(this.syncTree_,n)}node(){return ih(this.syncTree_,this.path_)}}const SN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},V_=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return IN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return TN(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},IN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},TN=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&j(!1,"Unexpected increment value: "+s);const r=e.node();if(j(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},uy=function(t,e,n,s){return dh(e,new uh(n,t),s)},dy=function(t,e,n){return dh(t,new ch(e),n)};function dh(t,e,n){const s=t.getPriority().val(),r=V_(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=V_(o.getValue(),e,n);return l!==o.getValue()||r!==o.getPriority().val()?new Ne(l,Ie(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ne(r))),o.forEachChild(me,(l,a)=>{const u=dh(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function fh(t,e){let n=e instanceof ne?e:new ne(e),s=t,r=Y(n);for(;r!==null;){const i=ur(s.node.children,r)||{children:{},childCount:0};s=new hh(r,s,i),n=ie(n),r=Y(n)}return s}function Nr(t){return t.node.value}function hy(t,e){t.node.value=e,wu(t)}function fy(t){return t.node.childCount>0}function RN(t){return Nr(t)===void 0&&!fy(t)}function aa(t,e){Me(t.node.children,(n,s)=>{e(new hh(n,t,s))})}function _y(t,e,n,s){n&&e(t),aa(t,r=>{_y(r,e,!0)})}function PN(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ji(t){return new ne(t.parent===null?t.name:Ji(t.parent)+"/"+t.name)}function wu(t){t.parent!==null&&jN(t.parent,t.name,t)}function jN(t,e,n){const s=RN(n),r=Ht(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,wu(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,wu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=/[\[\].#$\/\u0000-\u001F\u007F]/,LN=/[\[\].#$\u0000-\u001F\u007F]/,tc=10*1024*1024,_h=function(t){return typeof t=="string"&&t.length!==0&&!AN.test(t)},py=function(t){return typeof t=="string"&&t.length!==0&&!LN.test(t)},ON=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),py(t)},MN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zd(t)||t&&typeof t=="object"&&Ht(t,".sv")},my=function(t,e,n,s){s&&e===void 0||ca(Xl(t,"value"),e,n)},ca=function(t,e,n){const s=n instanceof ne?new J2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(s)+" with contents = "+e.toString());if(zd(e))throw new Error(t+"contains "+e.toString()+" "+Jn(s));if(typeof e=="string"&&e.length>tc/3&&Jl(e)>tc)throw new Error(t+"contains a string greater than "+tc+" utf8 bytes "+Jn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Me(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!_h(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Z2(s,o),ca(t,l,s),eC(s)}),r&&i)throw new Error(t+' contains ".value" child '+Jn(s)+" in addition to actual children.")}},DN=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const i=Pi(s);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!_h(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(X2);let r=null;for(n=0;n<e.length;n++){if(s=e[n],r!==null&&gt(r,s))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+s.toString());r=s}},UN=function(t,e,n,s){const r=Xl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const i=[];Me(e,(o,l)=>{const a=new ne(o);if(ca(r,l,pe(n,a)),Vd(a)===".priority"&&!MN(l))throw new Error(r+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),DN(r,i)},gy=function(t,e,n,s){if(!py(n))throw new Error(Xl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FN=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gy(t,e,n)},yy=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_h(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ON(n))throw new Error(Xl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ua(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!Yd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function vy(t,e,n){ua(t,n),xy(t,s=>Yd(s,e))}function At(t,e,n){ua(t,n),xy(t,s=>gt(s,e)||gt(e,s))}function xy(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(WN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ri&&Ae("event: "+n.toString()),kr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N="repo_interrupt",HN=25;class VN{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new hh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YN(t,e,n){if(t.stats_=$d(t.repoInfo_),t.forceRestClient_||b2())t.server_=new Cl(t.repoInfo_,(s,r,i,o)=>{Y_(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Q_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new rn(t.repoInfo_,e,(s,r,i,o)=>{Y_(t,s,r,i,o)},s=>{Q_(t,s)},s=>{QN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=S2(t.repoInfo_,()=>new EC(t.stats_,t.server_)),t.infoData_=new wC,t.infoSyncTree_=new $_({startListening:(s,r,i,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=oa(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ph(t,"connected",!1),t.serverSyncTree_=new $_({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(l,a)=>{const u=o(l,a);At(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function wy(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function da(t){return SN({timestamp:wy(t)})}function Y_(t,e,n,s,r){t.dataUpdateCount++;const i=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const a=fl(n,u=>Ie(u));o=bN(t.serverSyncTree_,i,a,r)}else{const a=Ie(n);o=wN(t.serverSyncTree_,i,a,r)}else if(s){const a=fl(n,u=>Ie(u));o=yN(t.serverSyncTree_,i,a)}else{const a=Ie(n);o=oa(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=mr(t,i)),At(t.eventQueue_,l,o)}function Q_(t,e){ph(t,"connected",e),e===!1&&KN(t)}function QN(t,e){Me(e,(n,s)=>{ph(t,n,s)})}function ph(t,e,n){const s=new ne("/.info/"+e),r=Ie(n);t.infoData_.updateSnapshot(s,r);const i=oa(t.infoSyncTree_,s,r);At(t.eventQueue_,s,i)}function mh(t){return t.nextWriteId_++}function GN(t,e,n,s,r){ha(t,"set",{path:e.toString(),value:n,priority:s});const i=da(t),o=Ie(n,s),l=ih(t.serverSyncTree_,e),a=dy(o,l,i),u=mh(t),h=oy(t.serverSyncTree_,e,a,u,!0);ua(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Qe("set at "+e+" failed: "+f);const b=Sn(t.serverSyncTree_,u,!v);At(t.eventQueue_,e,b),bu(t,r,f,g)});const d=yh(t,e);mr(t,d),At(t.eventQueue_,d,[])}function qN(t,e,n,s){ha(t,"update",{path:e.toString(),value:n});let r=!0;const i=da(t),o={};if(Me(n,(l,a)=>{r=!1,o[l]=uy(pe(e,l),Ie(a),t.serverSyncTree_,i)}),r)Ae("update() called with empty data.  Don't do anything."),bu(t,s,"ok",void 0);else{const l=mh(t),a=gN(t.serverSyncTree_,e,o,l);ua(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,h)=>{const d=u==="ok";d||Qe("update at "+e+" failed: "+u);const f=Sn(t.serverSyncTree_,l,!d),g=f.length>0?mr(t,e):e;At(t.eventQueue_,g,f),bu(t,s,u,h)}),Me(n,u=>{const h=yh(t,pe(e,u));mr(t,h)}),At(t.eventQueue_,e,[])}}function KN(t){ha(t,"onDisconnectEvents");const e=da(t),n=Nl();fu(t.onDisconnect_,Z(),(r,i)=>{const o=uy(r,i,t.serverSyncTree_,e);Q0(n,r,o)});let s=[];fu(n,Z(),(r,i)=>{s=s.concat(oa(t.serverSyncTree_,r,i));const o=yh(t,r);mr(t,o)}),t.onDisconnect_=Nl(),At(t.eventQueue_,Z(),s)}function XN(t,e,n){let s;Y(e._path)===".info"?s=H_(t.infoSyncTree_,e,n):s=H_(t.serverSyncTree_,e,n),vy(t.eventQueue_,e._path,s)}function G_(t,e,n){let s;Y(e._path)===".info"?s=xu(t.infoSyncTree_,e,n):s=xu(t.serverSyncTree_,e,n),vy(t.eventQueue_,e._path,s)}function JN(t){t.persistentConnection_&&t.persistentConnection_.interrupt($N)}function ha(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function bu(t,e,n,s){e&&kr(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let i=r;s&&(i+=": "+s);const o=new Error(i);o.code=r,e(o)}})}function by(t,e,n){return ih(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function gh(t,e=t.transactionQueueTree_){if(e||fa(t,e),Nr(e)){const n=Cy(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ZN(t,Ji(e),n)}else fy(e)&&aa(e,n=>{gh(t,n)})}function ZN(t,e,n){const s=n.map(u=>u.currentWriteId),r=by(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];j(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=tt(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ha(t,"transaction put response",{path:a.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(Sn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();fa(t,fh(t.transactionQueueTree_,e)),gh(t,t.transactionQueueTree_),At(t.eventQueue_,e,h);for(let f=0;f<d.length;f++)kr(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Qe("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}mr(t,e)}},o)}function mr(t,e){const n=ky(t,e),s=Ji(n),r=Cy(t,n);return eE(t,r,s),s}function eE(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=tt(n,a.path);let h=!1,d;if(j(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)h=!0,d=a.abortReason,r=r.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=HN)h=!0,d="maxretry",r=r.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=by(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){ca("transaction failed: Data returned ",g,a.path);let v=Ie(g);typeof g=="object"&&g!=null&&Ht(g,".priority")||(v=v.updatePriority(f.getPriority()));const C=a.currentWriteId,m=da(t),_=dy(v,f,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=_,a.currentWriteId=mh(t),o.splice(o.indexOf(C),1),r=r.concat(oy(t.serverSyncTree_,a.path,_,a.currentWriteId,a.applyLocally)),r=r.concat(Sn(t.serverSyncTree_,C,!0))}else h=!0,d="nodata",r=r.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0))}At(t.eventQueue_,n,r),r=[],h&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}fa(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)kr(s[l]);gh(t,t.transactionQueueTree_)}function ky(t,e){let n,s=t.transactionQueueTree_;for(n=Y(e);n!==null&&Nr(s)===void 0;)s=fh(s,n),e=ie(e),n=Y(e);return s}function Cy(t,e){const n=[];return Ny(t,e,n),n.sort((s,r)=>s.order-r.order),n}function Ny(t,e,n){const s=Nr(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);aa(e,r=>{Ny(t,r,n)})}function fa(t,e){const n=Nr(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,hy(e,n.length>0?n:void 0)}aa(e,s=>{fa(t,s)})}function yh(t,e){const n=Ji(ky(t,e)),s=fh(t.transactionQueueTree_,e);return PN(s,r=>{nc(t,r)}),nc(t,s),_y(s,r=>{nc(t,r)}),n}function nc(t,e){const n=Nr(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Sn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?hy(e,void 0):n.length=i+1,At(t.eventQueue_,Ji(e),r);for(let o=0;o<s.length;o++)kr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function nE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const q_=function(t,e){const n=sE(t),s=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||f2();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new R0(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ne(n.pathString)}},sE=function(t){let e="",n="",s="",r="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=tE(t.substring(h,d)));const f=nE(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=s}"ns"in f&&(i=f.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rE=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let r;const i=new Array(8);for(r=7;r>=0;r--)i[r]=K_.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let o=i.join("");if(s){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=K_.charAt(e[r]);return j(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,s,r){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class oE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class vh{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return G(this._path)?null:Vd(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=A_(this._queryParams),n=Bd(e);return n==="{}"?"default":n}get _queryObject(){return A_(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof vh))return!1;const n=this._repo===e._repo,s=Yd(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+K2(this._path)}}class Qn extends vh{constructor(e,n){super(e,n,new Kd,!1)}get parent(){const e=F0(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Al{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=Mi(this.ref,e);return new Al(this._node.getChild(n),s,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,r)=>e(new Al(r,Mi(this.ref,s),me)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fe(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?Mi(t._root,e):t._root}function Mi(t,e){return t=ke(t),Y(t._path)===null?FN("child","path",e):gy("child","path",e),new Qn(t._repo,pe(t._path,e))}function aE(t,e){t=ke(t),yy("push",t._path),my("push",e,t._path,!0);const n=wy(t._repo),s=rE(n),r=Mi(t,s),i=Mi(t,s);let o;return o=Promise.resolve(i),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function nr(t,e){t=ke(t),yy("set",t._path),my("set",e,t._path,!1);const n=new Hi;return GN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function zr(t,e){UN("update",e,t._path);const n=new Hi;return qN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class xh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new iE("value",this,new Al(e.snapshotNode,new Qn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oE(this,e,n):null}matches(e){return e instanceof xh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function cE(t,e,n,s,r){let i;if(typeof s=="object"&&(i=void 0,r=s),typeof s=="function"&&(i=s),r&&r.onlyOnce){const a=n,u=(h,d)=>{G_(t._repo,t,l),a(h,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new lE(n,i||void 0),l=new xh(o);return XN(t._repo,t,l),()=>G_(t._repo,t,l)}function Ll(t,e,n,s){return cE(t,"value",e,n,s)}aN(Qn);_N(Qn);/**
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
 */const uE="FIREBASE_DATABASE_EMULATOR_HOST",ku={};let dE=!1;function hE(t,e,n,s){t.repoInfo_=new R0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function fE(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=q_(i,r),l=o.repoInfo,a;typeof process<"u"&&p_&&(a=p_[uE]),a?(i=`http://${a}?ns=${l.namespace}`,o=q_(i,r),l=o.repoInfo):o.repoInfo.secure;const u=new C2(t.name,t.options,e);zN("Invalid Firebase Database URL",o),G(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const h=pE(l,t,u,new k2(t.name,n));return new mE(h,t)}function _E(t,e){const n=ku[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JN(t),delete n[t.key]}function pE(t,e,n,s){let r=ku[e.name];r||(r={},ku[e.name]=r);let i=r[t.toURLString()];return i&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new VN(t,dE,n,s),r[t.toURLString()]=i,i}class mE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_E(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function gE(t=Id(),e){const n=Zl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ig("database");s&&yE(n,...s)}return n}function yE(t,e,n,s={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let i;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Fo(Fo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Pg(s.mockUserToken,t.app.options.projectId);i=new Fo(o)}hE(r,e,n,i)}/**
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
 */function vE(t){l2(ks),_s(new Bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return fE(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Bt(m_,g_,t),Bt(m_,g_,"esm2017")}rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};vE();var xE="firebase",wE="10.14.1";/**
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
 */Bt(xE,wE,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="firebasestorage.googleapis.com",Sy="storageBucket",bE=2*60*1e3,kE=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends _n{constructor(e,n,s=0){super(sc(e),`Firebase Storage: ${n} (${sc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function sc(t){return"storage/"+t}function wh(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(ge.UNKNOWN,t)}function CE(t){return new ye(ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function NE(t){return new ye(ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function EE(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ge.UNAUTHENTICATED,t)}function SE(){return new ye(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function IE(t){return new ye(ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function TE(){return new ye(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function RE(){return new ye(ge.CANCELED,"User canceled the upload/download.")}function PE(t){return new ye(ge.INVALID_URL,"Invalid URL '"+t+"'.")}function jE(t){return new ye(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function AE(){return new ye(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Sy+"' property when initializing the app?")}function LE(){return new ye(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function OE(){return new ye(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ME(t){return new ye(ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Cu(t){return new ye(ge.INVALID_ARGUMENT,t)}function Iy(){return new ye(ge.APP_DELETED,"The Firebase app was deleted.")}function DE(t){return new ye(ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ci(t,e){return new ye(ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Br(t){throw new ye(ge.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=at.makeFromUrl(e,n)}catch{return new at(e,"")}if(s.path==="")return s;throw jE(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${f}`,"i"),v={bucket:1,path:3},b=n===Ey?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${b}/${r}/${C}`,"i"),p=[{regex:l,indices:a,postModify:i},{regex:g,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<p.length;x++){const k=p[x],E=k.regex.exec(e);if(E){const I=E[k.indices.bucket];let T=E[k.indices.path];T||(T=""),s=new at(I,T),k.postModify(s);break}}if(s==null)throw PE(e);return s}}class UE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function a(){return l===2}let u=!1;function h(...C){u||(u=!0,e.apply(null,C))}function d(C){r=setTimeout(()=>{r=null,t(g,a())},C)}function f(){i&&clearTimeout(i)}function g(C,...m){if(u){f();return}if(C){f(),h.call(null,C,...m);return}if(a()||o){f(),h.call(null,C,...m);return}s<64&&(s*=2);let p;l===1?(l=2,p=0):p=(s+Math.random())*1e3,d(p)}let v=!1;function b(C){v||(v=!0,f(),!u&&(r!==null?(C||(l=2),clearTimeout(r),d(0)):C||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function zE(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t){return t!==void 0}function WE(t){return typeof t=="object"&&!Array.isArray(t)}function bh(t){return typeof t=="string"||t instanceof String}function X_(t){return kh()&&t instanceof Blob}function kh(){return typeof Blob<"u"}function J_(t,e,n,s){if(s<e)throw Cu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Cu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Ty(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
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
 */function $E(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n,s,r,i,o,l,a,u,h,d,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new xo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===ls.NO_ERROR,a=i.getStatus();if(!l||$E(a,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ls.ABORT;s(!1,new xo(!1,null,h));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new xo(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());BE(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=wh();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(r.canceled){const a=this.appDelete_?Iy():RE();o(a)}else{const a=TE();o(a)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=FE(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zE(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function VE(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YE(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function QE(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GE(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qE(t,e,n,s,r,i,o=!0){const l=Ty(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return QE(u,e),VE(u,n),YE(u,i),GE(u,s),new HE(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XE(...t){const e=KE();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(kh())return new Blob(t);throw new ye(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function JE(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function ZE(t){if(typeof atob>"u")throw ME("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rc{constructor(e,n){this.data=e,this.contentType=n||null}}function eS(t,e){switch(t){case Ut.RAW:return new rc(Ry(e));case Ut.BASE64:case Ut.BASE64URL:return new rc(Py(t,e));case Ut.DATA_URL:return new rc(nS(e),sS(e))}throw wh()}function Ry(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function tS(t){let e;try{e=decodeURIComponent(t)}catch{throw ci(Ut.DATA_URL,"Malformed data URL.")}return Ry(e)}function Py(t,e){switch(t){case Ut.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw ci(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw ci(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZE(e)}catch(r){throw r.message.includes("polyfill")?r:ci(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class jy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ci(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=rS(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function nS(t){const e=new jy(t);return e.base64?Py(Ut.BASE64,e.rest):tS(e.rest)}function sS(t){return new jy(t).contentType}function rS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){let s=0,r="";X_(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(X_(this.data_)){const s=this.data_,r=JE(s,e,n);return r===null?null:new Cn(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new Cn(s,!0)}}static getBlob(...e){if(kh()){const n=e.map(s=>s instanceof Cn?s.data_:s);return new Cn(XE.apply(null,n))}else{const n=e.map(o=>bh(o)?eS(Ut.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)r[i++]=o[l]}),new Cn(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){let e;try{e=JSON.parse(t)}catch{return null}return WE(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function oS(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ly(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e){return e}class $e{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||lS}}let wo=null;function aS(t){return!bh(t)||t.length<2?t:Ly(t)}function Oy(){if(wo)return wo;const t=[];t.push(new $e("bucket")),t.push(new $e("generation")),t.push(new $e("metageneration")),t.push(new $e("name","fullPath",!0));function e(i,o){return aS(o)}const n=new $e("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new $e("size");return r.xform=s,t.push(r),t.push(new $e("timeCreated")),t.push(new $e("updated")),t.push(new $e("md5Hash",null,!0)),t.push(new $e("cacheControl",null,!0)),t.push(new $e("contentDisposition",null,!0)),t.push(new $e("contentEncoding",null,!0)),t.push(new $e("contentLanguage",null,!0)),t.push(new $e("contentType",null,!0)),t.push(new $e("metadata","customMetadata",!0)),wo=t,wo}function cS(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new at(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function uS(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return cS(s,t),s}function My(t,e,n){const s=Ay(e);return s===null?null:uS(t,s,n)}function dS(t,e,n,s){const r=Ay(e);if(r===null||!bh(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,f="/b/"+o(h)+"/o/"+o(d),g=_a(f,n,s),v=Ty({alt:"media",token:u});return g+v})[0]}function hS(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ch{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(t){if(!t)throw wh()}function fS(t,e){function n(s,r){const i=My(t,r,e);return Dy(i!==null),i}return n}function _S(t,e){function n(s,r){const i=My(t,r,e);return Dy(i!==null),dS(i,r,t.host,t._protocol)}return n}function Uy(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=SE():r=EE():n.getStatus()===402?r=NE(t.bucket):n.getStatus()===403?r=IE(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Fy(t){const e=Uy(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=CE(t.path)),i.serverResponse=r.serverResponse,i}return n}function pS(t,e,n){const s=e.fullServerUrl(),r=_a(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Ch(r,i,_S(t,n),o);return l.errorHandler=Fy(e),l}function mS(t,e){const n=e.fullServerUrl(),s=_a(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(a,u){}const l=new Ch(s,r,o,i);return l.successCodes=[200,204],l.errorHandler=Fy(e),l}function gS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yS(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=gS(null,e)),s}function vS(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let p="";for(let x=0;x<2;x++)p=p+Math.random().toString().slice(2);return p}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=yS(e,s,r),h=hS(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+a+"--",g=Cn.getBlob(d,s,f);if(g===null)throw LE();const v={name:u.fullPath},b=_a(i,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,_=new Ch(b,C,fS(t,n),m);return _.urlParams=v,_.headers=o,_.body=g.uploadData(),_.errorHandler=Uy(e),_}class xS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Br("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Br("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Br("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Br("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Br("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wS extends xS{initXhr(){this.xhr_.responseType="text"}}function Nh(){return new wS}/**
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
 */class xs{constructor(e,n){this._service=e,n instanceof at?this._location=n:this._location=at.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xs(e,n)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ly(this._location.path)}get storage(){return this._service}get parent(){const e=iS(this._location.path);if(e===null)return null;const n=new at(this._location.bucket,e);return new xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw DE(e)}}function bS(t,e,n){t._throwIfRoot("uploadBytes");const s=vS(t.storage,t._location,Oy(),new Cn(e,!0),n);return t.storage.makeRequestWithTokens(s,Nh).then(r=>({metadata:r,ref:t}))}function kS(t){t._throwIfRoot("getDownloadURL");const e=pS(t.storage,t._location,Oy());return t.storage.makeRequestWithTokens(e,Nh).then(n=>{if(n===null)throw OE();return n})}function CS(t){t._throwIfRoot("deleteObject");const e=mS(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Nh)}function NS(t,e){const n=oS(t._location.path,e),s=new at(t._location.bucket,n);return new xs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t){return/^[A-Za-z]+:\/\//.test(t)}function SS(t,e){return new xs(t,e)}function zy(t,e){if(t instanceof Eh){const n=t;if(n._bucket==null)throw AE();const s=new xs(n,n._bucket);return e!=null?zy(s,e):s}else return e!==void 0?NS(t,e):t}function IS(t,e){if(e&&ES(e)){if(t instanceof Eh)return SS(t,e);throw Cu("To use ref(service, url), the first argument must be a Storage instance.")}else return zy(t,e)}function Z_(t,e){const n=e==null?void 0:e[Sy];return n==null?null:at.makeFromBucketSpec(n,t)}function TS(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Pg(r,t.app.options.projectId))}class Eh{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Ey,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bE,this._maxUploadRetryTime=kE,this._requests=new Set,r!=null?this._bucket=at.makeFromBucketSpec(r,this._host):this._bucket=Z_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=Z_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){J_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xs(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new UE(Iy());{const o=qE(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const ep="@firebase/storage",tp="0.13.2";/**
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
 */const By="storage";function RS(t,e,n){return t=ke(t),bS(t,e,n)}function PS(t){return t=ke(t),kS(t)}function jS(t){return t=ke(t),CS(t)}function np(t,e){return t=ke(t),IS(t,e)}function AS(t=Id(),e){t=ke(t);const s=Zl(t,By).getImmediate({identifier:e}),r=Ig("storage");return r&&LS(s,...r),s}function LS(t,e,n,s={}){TS(t,e,n,s)}function OS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Eh(n,s,r,e,ks)}function MS(){_s(new Bn(By,OS,"PUBLIC").setMultipleInstances(!0)),Bt(ep,tp,""),Bt(ep,tp,"esm2017")}MS();const DS={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},Sh=Mg(DS),ic=i2(Sh),ze=gE(Sh),sp=AS(Sh),Wy=new qt;Wy.addScope("email");const $y="packing-checklist-data",Ve=["必備","電子產品","個人物品","視天氣","旅行","運動"],Hy=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],Qr={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[]};function Wr(t){return t.toLowerCase().replace(/\./g,",")}function Nu(t){return t.replace(/,/g,".")}function US(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:t.sharedWith||{}}:null}function Vy(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:Qr.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):Qr.lists,activeListId:t.activeListId||Qr.activeListId,templates:Array.isArray(t.templates)?t.templates:[]}:Qr}function FS(){try{const t=localStorage.getItem($y);if(t)return Vy(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return Qr}function rp(t){try{localStorage.setItem($y,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function zS(t){const[e,n]=N.useState(null),[s,r]=N.useState(t),[i,o]=N.useState("offline"),l=N.useRef(null),a=N.useCallback(g=>{l.current&&l.current();const v=Fe(ze,"users/"+g);l.current=Ll(v,b=>{const C=b.val();if(C){const m=Vy(C);r(m),rp(m),o("synced")}else u(g,s)},b=>{console.error("Firebase 讀取失敗",b),o("error")})},[]),u=N.useCallback((g,v)=>{o("syncing");const b=Fe(ze,"users/"+g);nr(b,v).then(()=>{o("synced")}).catch(C=>{console.error("Firebase 儲存失敗",C),o("error")})},[]),h=N.useCallback(g=>{r(g),rp(g),e&&u(e.uid,g)},[e,u]),d=N.useCallback(()=>{_k(ic,Wy).catch(g=>{console.error("登入失敗",g),alert("登入失敗："+g.message)})},[]),f=N.useCallback(()=>{l.current&&(l.current(),l.current=null),Gb(ic).then(()=>{n(null),o("offline")}).catch(g=>{console.error("登出失敗",g)})},[]);return N.useEffect(()=>{const g=Qb(ic,v=>{n(v),v?a(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{g(),l.current&&l.current()}},[a]),{user:e,data:s,syncStatus:i,saveData:h,handleLogin:d,handleLogout:f}}function BS(t,e){const[n,s]=N.useState({}),[r,i]=N.useState({}),o=N.useRef({}),l=N.useRef(null),a=N.useCallback(_=>{o.current[_]&&(o.current[_](),delete o.current[_])},[]),u=N.useCallback(()=>{Object.keys(o.current).forEach(a),l.current&&(l.current(),l.current=null),s({}),i({})},[a]),h=N.useCallback((_,p)=>{if(o.current[`${p}_${_}`])return;const x=Fe(ze,`sharedLists/${_}`),k=Ll(x,E=>{const I=E.val();if(!I){(p==="withMe"?s:i)(w=>{const S={...w};return delete S[_],S}),a(`${p}_${_}`);return}const T=US(I);(p==="withMe"?s:i)(y=>({...y,[_]:T}))},E=>{console.error("共享清單讀取失敗",E)});o.current[`${p}_${_}`]=k},[a]);N.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const _=Wr(t.email),p=Fe(ze,`sharedIndex/${_}`);return l.current=Ll(p,x=>{const k=x.val();if(!k){Object.keys(o.current).forEach(I=>{I.startsWith("withMe_")&&a(I)}),s({});return}const E=new Set(Object.keys(k));Object.keys(o.current).forEach(I=>{if(I.startsWith("withMe_")){const T=I.replace("withMe_","");E.has(T)||(a(I),s(U=>{const y={...U};return delete y[T],y}))}}),E.forEach(I=>{h(I,"withMe")})},x=>{console.error("共享索引讀取失敗",x)}),()=>{u()}},[t==null?void 0:t.email]),N.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const _=new Set;e.lists.forEach(p=>{p.sharedListId&&_.add(p.sharedListId)}),Object.keys(o.current).forEach(p=>{if(p.startsWith("byMe_")){const x=p.replace("byMe_","");_.has(x)||(a(p),i(k=>{const E={...k};return delete E[x],E}))}}),_.forEach(p=>{h(p,"byMe")})},[t,e==null?void 0:e.lists,h,a]),N.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(_=>{if(!_.sharedListId)return;const p=r[_.sharedListId];if(!p)return;const x=(Array.isArray(_.items)?_.items:[]).map(I=>e.itemLibrary.find(T=>T.id===I)).filter(Boolean).map(({id:I,name:T,category:U,note:y,photoURL:w})=>({id:I,name:T,category:U,note:y,...w&&{photoURL:w}})),k=p.items||[];if(JSON.stringify(x)!==JSON.stringify(k)){const I=Fe(ze,`sharedLists/${_.sharedListId}`);zr(I,{items:x,name:_.name,icon:_.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,r]);const d=N.useCallback(async(_,p,x)=>{if(!t)return null;const k=(Array.isArray(_.items)?_.items:[]).map(w=>p.find(S=>S.id===w)).filter(Boolean).map(({id:w,name:S,category:z,note:K,photoURL:V})=>({id:w,name:S,category:z,note:K,...V&&{photoURL:V}})),E={};x.forEach(w=>{E[Wr(w)]=!0});const T=aE(Fe(ze,"sharedLists")).key,U={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:_.name,icon:_.icon,items:k,checkedItems:Array.isArray(_.checkedItems)?_.checkedItems:[],sharedWith:E},y={};return y[`sharedLists/${T}`]=U,x.forEach(w=>{y[`sharedIndex/${Wr(w)}/${T}`]=!0}),await zr(Fe(ze),y),T},[t]),f=N.useCallback(async(_,p)=>{const x=Wr(p),k={};k[`sharedLists/${_}/sharedWith/${x}`]=!0,k[`sharedIndex/${x}/${_}`]=!0,await zr(Fe(ze),k)},[]),g=N.useCallback(async(_,p)=>{const x=Wr(p),k={};k[`sharedLists/${_}/sharedWith/${x}`]=null,k[`sharedIndex/${x}/${_}`]=null,await zr(Fe(ze),k)},[]),v=N.useCallback(async _=>{const p=r[_];if(!p)return;const x={};x[`sharedLists/${_}`]=null;const k=p.sharedWith||{};Object.keys(k).forEach(E=>{x[`sharedIndex/${E}/${_}`]=null}),await zr(Fe(ze),x)},[r]),b=N.useCallback(async(_,p)=>{const x=n[_]||r[_];if(!x)return;const k=Array.isArray(x.checkedItems)?x.checkedItems:[],I=k.includes(p)?k.filter(U=>U!==p):[...k,p],T=Fe(ze,`sharedLists/${_}/checkedItems`);await nr(T,I)},[n,r]),C=N.useCallback(async _=>{const p=Fe(ze,`sharedLists/${_}/checkedItems`);await nr(p,[])},[]),m=N.useCallback(async(_,p)=>{const x=Fe(ze,`sharedLists/${_}/checkedItems`);await nr(x,p)},[]);return{sharedWithMe:n,sharedByMe:r,shareList:d,addSharedUser:f,removeSharedUser:g,unshareList:v,toggleSharedCheck:b,resetSharedChecks:C,checkAllShared:m}}function WS(t){const[e,n]=N.useState([]),[s,r]=N.useState(!1),[i,o]=N.useState(!0);N.useEffect(()=>{const u=Fe(ze,"adminEmails"),h=Ll(u,d=>{const f=d.val(),g=Array.isArray(f)?f:[];n(g),o(!1)},()=>{n([]),o(!1)});return()=>h()},[]),N.useEffect(()=>{if(!(t!=null&&t.email)){r(!1);return}r(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=N.useCallback(async u=>{const h=u.toLowerCase().trim();if(!h)return;const d=[...new Set([...e,h])];await nr(Fe(ze,"adminEmails"),d)},[e]),a=N.useCallback(async u=>{var f;const h=u.toLowerCase().trim();if(((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())===h)return;const d=e.filter(g=>g!==h);await nr(Fe(ze,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:s,adminEmails:e,loading:i,addAdmin:l,removeAdmin:a}}const $S="modulepreload",HS=function(t){return"/packing-checklist/"+t},ip={},VS=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(a=>{if(a=HS(a),a in ip)return;ip[a]=!0;const u=a.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":$S,u||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function YS(){const[t,e]=N.useState(!1),[n,s]=N.useState(null);return N.useEffect(()=>{VS(async()=>{const{registerSW:o}=await import("./virtual_pwa-register-BHxD29Aw.js");return{registerSW:o}},[]).then(({registerSW:o})=>{const l=o({onNeedRefresh(){e(!0)},onOfflineReady(){console.log("PWA: 離線模式已就緒")}});s(()=>l)}).catch(()=>{})},[]),{needRefresh:t,refresh:()=>{n&&n(!0)},dismiss:()=>{e(!1)}}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=(...t)=>t.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=t=>{const e=GS(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:o,...l},a)=>N.createElement("svg",{ref:a,...qS,width:e,height:e,stroke:t,strokeWidth:s?Number(n)*24/Number(e):n,className:Yy("lucide",r),...!i&&!KS(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,h])=>N.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(t,e)=>{const n=N.forwardRef(({className:s,...r},i)=>N.createElement(XS,{ref:i,iconNode:e,className:Yy(`lucide-${QS(op(t))}`,`lucide-${t}`,s),...r}));return n.displayName=op(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],oc=D("arrow-left",JS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],eI=D("backpack",ZS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],nI=D("baby",tI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],rI=D("book-open",sI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],oI=D("briefcase",iI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ih=D("camera",lI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],cI=D("chart-column",aI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],dI=D("check-check",uI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Di=D("check",hI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fI=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],lp=D("chevron-down",fI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],pI=D("chevron-left",_I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],gI=D("circle-alert",mI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Eu=D("clipboard-list",yI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vI=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],xI=D("cloud-off",vI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],bI=D("cloud",wI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kI=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],CI=D("coffee",kI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],EI=D("copy",NI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SI=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],II=D("download",SI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TI=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],RI=D("dumbbell",TI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PI=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Qy=D("file-text",PI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],AI=D("footprints",jI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],OI=D("funnel",LI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MI=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],DI=D("gift",MI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UI=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],FI=D("heart",UI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zI=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],BI=D("inbox",zI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WI=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Gy=D("layout-dashboard",WI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],HI=D("layout-list",$I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VI=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],YI=D("list-checks",VI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],qy=D("loader-circle",QI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],qI=D("loader",GI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],XI=D("log-in",KI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],ZI=D("log-out",JI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],t5=D("menu",e5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],s5=D("mountain",n5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],i5=D("music",r5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Ui=D("package",o5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Su=D("pen-line",l5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],c5=D("person-standing",a5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],d5=D("plane",u5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Er=D("plus",h5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],_5=D("rotate-ccw",f5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Th=D("search",p5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],pa=D("share-2",m5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Iu=D("shield",g5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],v5=D("shirt",y5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],w5=D("shopping-cart",x5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],k5=D("sparkles",b5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],N5=D("square-check-big",C5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],Rh=D("sticky-note",E5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],I5=D("tag",S5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],R5=D("target",T5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],j5=D("tent",P5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],as=D("trash-2",A5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],O5=D("umbrella",L5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],D5=D("upload",M5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],F5=D("user",U5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ky=D("users",z5);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vt=D("x",B5),ap={"clipboard-list":Eu,footprints:AI,briefcase:oI,plane:d5,"person-standing":c5,backpack:eI,umbrella:O5,tent:j5,target:R5,"shopping-cart":w5,shirt:v5,dumbbell:RI,mountain:s5,baby:nI,camera:Ih,heart:FI,music:i5,"book-open":rI,coffee:CI,gift:DI},cp={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function W5(t){return cp[t]?ap[cp[t]]||Eu:ap[t]||Eu}function zo({name:t,size:e=20,className:n=""}){const s=W5(t);return c.jsx(s,{size:e,className:n})}function up({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",onClick:s=>s.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function $5(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return c.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>c.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsxs("div",{className:"animate-celebration-text text-center",children:[c.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),c.jsx("div",{className:"text-2xl font-bold text-indigo-600 bg-white bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function H5({data:t,user:e,syncStatus:n,onLogin:s,onLogout:r,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:a}){var Lt,Gn,Ph;const[u,h]=N.useState([]),[d,f]=N.useState(null),[g,v]=N.useState(null),[b,C]=N.useState([]),[m,_]=N.useState(!1),p=a&&((Lt=l==null?void 0:l.sharedWithMe)==null?void 0:Lt[a]),x=a&&((Gn=l==null?void 0:l.sharedByMe)==null?void 0:Gn[a]),k=p?"shared-with-me":x?"own-shared":"local",E=p?l.sharedWithMe[a]:x?l.sharedByMe[a]:null,I=(Ph=t.lists)==null?void 0:Ph.find(B=>B.id===t.activeListId),T=I?{...I,items:Array.isArray(I.items)?I.items:[],checkedItems:Array.isArray(I.checkedItems)?I.checkedItems:[]}:null;let U=[],y=[],w="",S="",z="";k==="shared-with-me"&&E?(U=(E.items||[]).filter(Boolean),y=E.checkedItems||[],w=E.name||"清單",S=E.icon||"clipboard-list",z=E.ownerName||E.ownerEmail||""):k==="own-shared"&&T&&E?(U=T.items.map(B=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(J=>J.id===B)}).filter(Boolean),y=E.checkedItems||[],w=T.name||"清單",S=T.icon||"clipboard-list"):(U=T?T.items.map(B=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(J=>J.id===B)}).filter(Boolean):[],y=(T==null?void 0:T.checkedItems)||[],w=(T==null?void 0:T.name)||"清單",S=(T==null?void 0:T.icon)||"clipboard-list");const K=y.length,V=U.length,fe=V>0&&K===V,ft=V>0?K/V*100:0,A=N.useRef(fe);N.useEffect(()=>{if(fe&&!A.current){_(!0);const B=setTimeout(()=>_(!1),2500);return()=>clearTimeout(B)}A.current=fe},[fe]);const R=(()=>{const B=[],H={};return U.forEach(J=>{const Je=J.category||"其他";H[Je]||(H[Je]=[]),H[Je].push(J)}),Ve.forEach(J=>{H[J]&&(B.push({category:J,items:H[J]}),delete H[J])}),Object.keys(H).forEach(J=>{B.push({category:J,items:H[J]})}),B})(),L=B=>{if(v(B),k==="shared-with-me"||k==="own-shared")l.toggleSharedCheck(a,B);else{const H={...t,lists:t.lists.map(J=>{if(J.id!==t.activeListId)return J;const Je=Array.isArray(J.checkedItems)?J.checkedItems:[],Yt=Je.includes(B);return{...J,checkedItems:Yt?Je.filter(Es=>Es!==B):[...Je,B]}})};o(H)}},M=()=>{if(k==="shared-with-me"||k==="own-shared")l.resetSharedChecks(a);else{const B={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[]}:H)};o(B)}},F=()=>{if(k==="shared-with-me"||k==="own-shared"){const B=U.map(H=>H.id);l.checkAllShared(a,B)}else{if(!T)return;const B={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[...T.items]}:H)};o(B)}},Ce=B=>{h(H=>H.includes(B)?H.filter(J=>J!==B):[...H,B])},Xe=B=>{C(H=>H.includes(B)?H.filter(J=>J!==B):[...H,B])},Vt=B=>{var Ss;const H=y.includes(B.id),J=(Ss=B.note)==null?void 0:Ss.trim(),Je=J||B.photoURL,Yt=u.includes(B.id),Es=g===B.id;return c.jsxs("div",{children:[c.jsxs("div",{onClick:()=>L(B.id),className:`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${H?"bg-slate-50":""} ${Je&&Yt?"rounded-b-none border-b-0":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${H?"border-indigo-600 bg-indigo-600":"border-slate-300"}
              ${Es&&H?"animate-check-bounce":""}`,onAnimationEnd:()=>v(null),children:H&&c.jsx(Di,{size:14,className:`text-white ${Es?"animate-check-icon-in":""}`})}),B.photoURL&&c.jsx("img",{src:B.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Sr=>{Sr.target.style.display="none"}}),c.jsx("div",{className:"flex-1 min-w-0",children:c.jsx("div",{className:`text-lg transition-all duration-300 ${H?"line-through text-slate-400 opacity-60":"text-slate-800"}`,children:B.name})}),Je&&c.jsx("button",{onClick:Sr=>{Sr.stopPropagation(),Ce(B.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${Yt?"bg-indigo-50 text-indigo-600":"text-slate-400"}`,"aria-label":"展開詳情",children:c.jsx(lp,{size:18,className:`transition-transform duration-200 ${Yt?"rotate-180":""}`})})]}),Je&&Yt&&c.jsxs("div",{className:"px-4 py-3 bg-indigo-50 border border-slate-200 border-t-0 rounded-b-xl",children:[J&&c.jsxs("div",{className:"flex items-start text-sm text-slate-600 gap-2",children:[c.jsx(Rh,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),c.jsx("span",{children:B.note})]}),B.photoURL&&c.jsx("div",{className:J?"mt-2":"",children:c.jsx("img",{src:B.photoURL,alt:B.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Sr=>{Sr.target.style.display="none"}})})]})]},B.id)};return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsxs("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[c.jsx(zo,{name:S,size:22,className:"text-indigo-600 flex-shrink-0"}),c.jsx("span",{className:"text-lg font-bold truncate",children:w}),k==="shared-with-me"&&z&&c.jsxs("span",{className:"text-xs text-indigo-500 flex-shrink-0",children:["來自 ",z]}),k==="own-shared"&&c.jsx("span",{className:"text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0",children:"已分享"})]}),k!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:c.jsx(Er,{size:22,className:"text-indigo-600"})})]}),V>0&&c.jsxs("div",{className:"mt-3",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1",children:[c.jsx("span",{children:"完成進度"}),c.jsxs("span",{children:[K,"/",V]})]}),c.jsx("div",{className:"h-2 bg-indigo-100 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-600 transition-all duration-300",style:{width:`${ft}%`}})})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[U.length===0?c.jsxs("div",{className:"text-center py-16 text-slate-400",children:[c.jsx(BI,{size:48,className:"mx-auto mb-4 text-slate-300"}),c.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),k!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 font-medium active:text-indigo-700 transition-colors duration-150",children:"從物品庫加入物品"})]}):c.jsx("div",{className:"space-y-4",children:R.map(({category:B,items:H})=>{const J=b.includes(B),Je=H.filter(Ss=>y.includes(Ss.id)).length,Yt=H.length,Es=Je===Yt;return c.jsxs("div",{children:[c.jsxs("button",{onClick:()=>Xe(B),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[c.jsx(lp,{size:16,className:`text-slate-400 transition-transform duration-200 ${J?"-rotate-90":""}`}),c.jsx("span",{className:"text-sm font-semibold text-slate-600",children:B}),c.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${Es?"bg-emerald-100 text-emerald-600":"bg-slate-100 text-slate-500"}`,children:[Je,"/",Yt]})]}),!J&&c.jsx("div",{className:"space-y-2 animate-slide-down",children:H.map(Ss=>Vt(Ss))})]},B)})}),U.length>0&&c.jsx("div",{className:"pt-4 pb-16",children:c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>f("reset"),className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:[c.jsx(_5,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),c.jsxs("button",{onClick:()=>f("checkAll"),disabled:fe,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${fe?"bg-indigo-100 text-indigo-400":"bg-indigo-600 text-white active:bg-indigo-700"}`,children:[c.jsx(dI,{size:16,className:"inline mr-1.5 -mt-0.5"}),fe?"準備完成！":"全部確認"]})]})})]}),d==="reset"&&c.jsx(up,{message:"確定要重設所有勾選？",onConfirm:()=>{M(),f(null)},onCancel:()=>f(null)}),d==="checkAll"&&c.jsx(up,{message:"確定要勾選全部項目？",onConfirm:()=>{F(),f(null)},onCancel:()=>f(null)}),m&&c.jsx($5,{})]})}function V5({sharedData:t,onAddUser:e,onRemoveUser:n,onUnshare:s,onClose:r}){const[i,o]=N.useState(""),[l,a]=N.useState(""),u=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(Nu):[],h=g=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g),d=()=>{const g=i.trim().toLowerCase();if(g){if(!h(g)){a("請輸入有效的 Email");return}if(u.includes(g)){a("已經分享給此帳號");return}a(""),e(g),o("")}},f=g=>{g.key==="Enter"&&d()};return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:r}),c.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",children:c.jsxs("div",{className:"p-4",children:[c.jsx("div",{className:"w-10 h-1 bg-slate-300 rounded-full mx-auto mb-4"}),c.jsx("div",{className:"text-lg font-bold text-slate-800 mb-4",children:"分享清單"}),c.jsxs("div",{className:"flex gap-2 mb-2",children:[c.jsx("input",{type:"email",value:i,onChange:g=>{o(g.target.value),a("")},onKeyDown:f,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:d,className:"px-5 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),l&&c.jsx("div",{className:"text-sm text-rose-500 mb-3",children:l}),u.length>0&&c.jsxs("div",{className:"mt-4",children:[c.jsx("div",{className:"text-sm text-slate-500 mb-2",children:"已分享給"}),c.jsx("div",{className:"space-y-2",children:u.map(g=>c.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200",children:[c.jsx("span",{className:"text-slate-700 text-sm truncate flex-1",children:g}),c.jsx("button",{onClick:()=>n(g),className:"ml-2 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:c.jsx(vt,{size:16})})]},g))})]}),u.length>0&&c.jsx("button",{onClick:s,className:"w-full mt-4 py-3 border border-rose-300 text-rose-500 rounded-xl font-medium active:bg-rose-50 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),c.jsx("button",{onClick:r,className:"w-full mt-3 py-3 text-slate-500 font-medium min-h-[44px]",children:"關閉"})]})})]})}function Y5({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",onClick:s=>s.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function Q5({data:t,user:e,onNavigate:n,onSaveData:s,shared:r}){var y;const[i,o]=N.useState(""),[l,a]=N.useState("clipboard-list"),[u,h]=N.useState(null),[d,f]=N.useState(null),[g,v]=N.useState(null),b=(w,S)=>{const z={...t,activeListId:w};s(z),n("checklist",{sharedListId:S||null})},C=w=>{n("checklist",{sharedListId:w})},m=()=>{if(!i.trim())return;const w={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[]},S={...t,lists:[...t.lists,w],activeListId:w.id};s(S),o(""),a("clipboard-list"),n("checklist",{sharedListId:null})},_=async w=>{if(t.lists.length<=1)return;const S=t.lists.find(V=>V.id===w);if(S!=null&&S.sharedListId&&r)try{await r.unshareList(S.sharedListId)}catch(V){console.error("清理分享資料失敗",V)}const z=t.lists.filter(V=>V.id!==w),K={...t,lists:z,activeListId:t.activeListId===w?z[0].id:t.activeListId};s(K),v(null)},p=(w,S)=>{S.stopPropagation(),!(t.lists.length<=1)&&v(w)},x=(w,S)=>{S.stopPropagation(),h(w.id),f(w.sharedListId||null)},k=async w=>{const S=t.lists.find(z=>z.id===u);if(!(!S||!r))try{const z=await r.shareList(S,t.itemLibrary,[w]),K={...t,lists:t.lists.map(V=>V.id===u?{...V,sharedListId:z}:V)};s(K),f(z)}catch(z){console.error("分享失敗",z),alert("分享失敗："+z.message)}},E=async w=>{if(d)try{await r.addSharedUser(d,w)}catch(S){console.error("新增分享對象失敗",S)}else await k(w)},I=async w=>{if(!(!d||!r))try{await r.removeSharedUser(d,w)}catch(S){console.error("移除分享對象失敗",S)}},T=async()=>{if(!(!d||!r))try{await r.unshareList(d);const w={...t,lists:t.lists.map(S=>S.id===u?{...S,sharedListId:void 0}:S)};s(w),h(null),f(null)}catch(w){console.error("停止分享失敗",w)}},U=r?Object.entries(r.sharedWithMe):[];return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(w=>{const S=(w.items||[]).length,z=(w.checkedItems||[]).length,K=w.id===t.activeListId,V=!!w.sharedListId;return c.jsxs("div",{onClick:()=>b(w.id,w.sharedListId),className:`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 cursor-pointer transition-colors duration-150 min-h-[56px]
                  ${K?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:"mr-3 text-indigo-600",children:c.jsx(zo,{name:w.icon,size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"font-medium text-slate-800 flex items-center",children:[c.jsx("span",{className:"truncate",children:w.name}),V&&c.jsx("span",{className:"ml-2 text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"text-sm text-slate-400",children:[z,"/",S," 已確認"]})]}),e&&c.jsx("button",{onClick:fe=>x(w,fe),className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                      ${V?"text-emerald-500 active:bg-emerald-50":"text-slate-400 active:bg-slate-100"}`,"aria-label":"分享清單",children:c.jsx(pa,{size:18})}),t.lists.length>1&&c.jsx("button",{onClick:fe=>p(w.id,fe),className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"刪除清單",children:c.jsx(as,{size:18})})]},w.id)})}),U.length>0&&c.jsxs("div",{className:"mt-6",children:[c.jsx("div",{className:"text-sm text-slate-500 mb-2 px-1",children:"與我分享的清單"}),c.jsx("div",{className:"space-y-2",children:U.map(([w,S])=>{const z=(S.items||[]).length,K=(S.checkedItems||[]).length;return c.jsxs("div",{onClick:()=>C(w),className:"flex items-center p-4 bg-indigo-50 rounded-xl border border-indigo-200 active:bg-indigo-100 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[c.jsx("div",{className:"mr-3 text-indigo-600",children:c.jsx(zo,{name:S.icon||"clipboard-list",size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-800",children:S.name}),c.jsxs("div",{className:"text-sm text-slate-400",children:[K,"/",z," 已確認",c.jsxs("span",{className:"ml-2 text-indigo-500",children:["來自 ",S.ownerName||S.ownerEmail]})]})]})]},w)})})]}),c.jsxs("div",{className:"mt-4 p-4 bg-white rounded-xl border border-slate-200",children:[c.jsx("div",{className:"text-sm text-slate-500 mb-3",children:"新增清單"}),c.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:Hy.map(w=>c.jsx("button",{onClick:()=>a(w),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100
                  ${l===w?"bg-indigo-100 text-indigo-600":"text-slate-500"}`,"aria-label":w,children:c.jsx(zo,{name:w,size:20})},w))}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:i,onChange:w=>o(w.target.value),placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:m,className:"px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})]}),u!==null&&c.jsx(V5,{sharedData:d&&((y=r==null?void 0:r.sharedByMe)==null?void 0:y[d])||null,onAddUser:E,onRemoveUser:I,onUnshare:T,onClose:()=>{h(null),f(null)}}),g!==null&&c.jsx(Y5,{message:"確定刪除此清單？",onConfirm:()=>_(g),onCancel:()=>v(null)})]})}function G5(t,e=800,n=.7){return new Promise((s,r)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:a}=i;(l>e||a>e)&&(l>a?(a=Math.round(a*e/l),l=e):(l=Math.round(l*e/a),a=e));const u=document.createElement("canvas");u.width=l,u.height=a,u.getContext("2d").drawImage(i,0,0,l,a),u.toBlob(d=>{if(!d){r(new Error("Canvas toBlob failed"));return}s(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),r(new Error("Failed to load image"))},i.src=o})}function q5(t){const[e,n]=N.useState(!1),[s,r]=N.useState(null);return{uploadPhoto:async(l,a)=>{if(!t)throw new Error("Not logged in");n(!0),r(null);try{const u=await G5(a),h=`users/${t.uid}/items/${l}/photo.jpg`,d=np(sp,h);return await RS(d,u,{contentType:"image/jpeg"}),await PS(d)}catch(u){throw r(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const a=`users/${t.uid}/items/${l}/photo.jpg`,u=np(sp,a);await jS(u)}catch(a){a.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",a)}},uploading:e,error:s}}function K5({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",onClick:s=>s.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function X5({data:t,user:e,onNavigate:n,onSaveData:s}){const[r,i]=N.useState(""),[o,l]=N.useState(Ve[0]),[a,u]=N.useState(""),[h,d]=N.useState(null),[f,g]=N.useState(null),[v,b]=N.useState(null),[C,m]=N.useState(""),[_,p]=N.useState(null),[x,k]=N.useState(!1),[E,I]=N.useState(!1),T=N.useRef(null),{uploadPhoto:U,deletePhoto:y,uploading:w}=q5(e),S={};Ve.forEach(R=>{S[R]=[]}),(t.itemLibrary||[]).forEach(R=>{S[R.category]&&S[R.category].push(R)});const z=R=>{var M;const L=(M=R.target.files)==null?void 0:M[0];L&&(d(L),g(URL.createObjectURL(L)),R.target.value="")},K=()=>{f&&URL.revokeObjectURL(f),d(null),g(null)},V=async()=>{if(!r.trim())return;k(!0);const R=Date.now();let L;if(h&&e)try{L=await U(R,h)}catch{}const M={id:R,name:r.trim(),category:o,note:a.trim(),...L&&{photoURL:L}},F={...t,itemLibrary:[...t.itemLibrary,M]};s(F),i(""),u(""),K(),k(!1),I(!1)},fe=async(R,L,M,F,Ce)=>{const Xe={...t,itemLibrary:t.itemLibrary.map(Vt=>Vt.id===R?{...Vt,name:L,category:M,note:F,...Ce?{photoURL:Ce}:{photoURL:null}}:Vt)};s(Xe),b(null)},ft=async R=>{const L=t.itemLibrary.find(F=>F.id===R);L!=null&&L.photoURL&&y(R);const M={...t,itemLibrary:t.itemLibrary.filter(F=>F.id!==R),lists:t.lists.map(F=>({...F,items:(F.items||[]).filter(Ce=>Ce!==R),checkedItems:(F.checkedItems||[]).filter(Ce=>Ce!==R)}))};s(M),p(null)},A=v?t.itemLibrary.find(R=>R.id===v):null;return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"})}),c.jsx("div",{className:"px-4 py-2 bg-white border-b border-slate-200",children:c.jsxs("div",{className:"relative",children:[c.jsx(Th,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:C,onChange:R=>m(R.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),C&&c.jsx("button",{onClick:()=>m(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(vt,{size:16})})]})}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:Ve.map(R=>{const L=C?S[R].filter(M=>{var Ce,Xe;const F=C.toLowerCase();return((Ce=M.name)==null?void 0:Ce.toLowerCase().includes(F))||((Xe=M.note)==null?void 0:Xe.toLowerCase().includes(F))}):S[R];return L.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 font-semibold mb-2",children:R}),c.jsx("div",{className:"space-y-2",children:L.map(M=>c.jsxs("div",{className:"p-3 bg-white rounded-xl border border-slate-200",children:[c.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[M.photoURL&&c.jsx("img",{src:M.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:F=>{F.target.style.display="none"}}),c.jsx("span",{className:"font-medium text-slate-800",children:M.name})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>b(M.id),className:"text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 transition-colors duration-150 min-h-[32px]",children:"編輯"}),c.jsx("button",{onClick:()=>p(M.id),className:"text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 transition-colors duration-150 min-h-[32px]",children:"刪除"})]})]}),M.note&&c.jsxs("div",{className:"text-sm text-slate-400 mt-1 flex items-center gap-1",children:[c.jsx(Rh,{size:12,className:"flex-shrink-0"}),M.note]})]},M.id))})]},R)})}),c.jsx("button",{onClick:()=>I(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 transition-colors duration-150","aria-label":"新增物品",children:c.jsx(Er,{size:24})}),E&&c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>{I(!1),i(""),u(""),K()},children:c.jsxs("div",{className:"bg-white w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("div",{className:"text-lg font-bold text-slate-900",children:"新增物品"}),c.jsx("button",{onClick:()=>{I(!1),i(""),u(""),K()},className:"p-1 rounded-lg active:bg-slate-100",children:c.jsx(vt,{size:20,className:"text-slate-400"})})]}),c.jsx("input",{type:"text",value:r,onChange:R=>i(R.target.value),placeholder:"物品名稱...",autoFocus:!0,className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:o,onChange:R=>l(R.target.value),className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:Ve.map(R=>c.jsx("option",{value:R,children:R},R))}),c.jsx("input",{type:"text",value:a,onChange:R=>u(R.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-2",children:[c.jsx("input",{ref:T,type:"file",accept:"image/*",capture:"environment",onChange:z,className:"hidden"}),f?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:f,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200"}),c.jsx("button",{onClick:K,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 rounded-lg active:bg-rose-50 transition-colors duration-150",children:"移除照片"})]}):c.jsxs("button",{onClick:()=>{var R;return(R=T.current)==null?void 0:R.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-500 active:bg-slate-50 transition-colors duration-150",children:[c.jsx(Ih,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("button",{onClick:V,disabled:x||w,className:"w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(x||w)&&c.jsx(qy,{size:18,className:"animate-spin"}),x||w?"新增中...":"+ 新增物品"]})]})}),A&&c.jsx(J5,{item:A,user:e,categories:Ve,onSave:fe,onClose:()=>b(null),uploadPhoto:U,deletePhoto:y}),_!==null&&c.jsx(K5,{message:"確定刪除此物品？",onConfirm:()=>ft(_),onCancel:()=>p(null)})]})}function J5({item:t,user:e,categories:n,onSave:s,onClose:r,uploadPhoto:i,deletePhoto:o}){const[l,a]=N.useState(t.name),[u,h]=N.useState(t.category),[d,f]=N.useState(t.note||""),[g,v]=N.useState(t.photoURL||""),[b,C]=N.useState(null),[m,_]=N.useState(null),[p,x]=N.useState(!1),[k,E]=N.useState(!1),I=N.useRef(null),T=S=>{var K;const z=(K=S.target.files)==null?void 0:K[0];z&&(C(z),m&&URL.revokeObjectURL(m),_(URL.createObjectURL(z)),x(!1),S.target.value="")},U=()=>{m&&URL.revokeObjectURL(m),C(null),_(null),x(!0)},y=async()=>{E(!0);let S=g;if(p&&!b&&(t.photoURL&&o(t.id),S=""),b&&e)try{S=await i(t.id,b)}catch{S=p?"":g}s(t.id,l,u,d,S),E(!1)},w=m||!p&&g;return c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:r,children:c.jsxs("div",{className:"bg-white w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:S=>S.stopPropagation(),children:[c.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900",children:"編輯物品"}),c.jsx("input",{type:"text",value:l,onChange:S=>a(S.target.value),className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:u,onChange:S=>h(S.target.value),className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:n.map(S=>c.jsx("option",{value:S,children:S},S))}),c.jsx("input",{type:"text",value:d,onChange:S=>f(S.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-4",children:[c.jsx("input",{ref:I,type:"file",accept:"image/*",capture:"environment",onChange:T,className:"hidden"}),w?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:m||g,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200"}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("button",{onClick:()=>{var S;return(S=I.current)==null?void 0:S.click()},className:"text-sm text-indigo-600 px-3 py-1.5 border border-indigo-200 rounded-lg active:bg-indigo-50 transition-colors duration-150",children:"更換照片"}),c.jsx("button",{onClick:U,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 rounded-lg active:bg-rose-50 transition-colors duration-150",children:"移除照片"})]})]}):c.jsxs("button",{onClick:()=>{var S;return(S=I.current)==null?void 0:S.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-500 active:bg-slate-50 transition-colors duration-150",children:[c.jsx(Ih,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:r,className:"flex-1 py-3 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsxs("button",{onClick:y,disabled:k,className:"flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[k&&c.jsx(qy,{size:18,className:"animate-spin"}),k?"儲存中...":"儲存"]})]})]})})}function Z5({data:t,onNavigate:e,onSaveData:n}){var C,m;const[s,r]=N.useState(!1),[i,o]=N.useState(""),[l,a]=N.useState(Ve[0]),[u,h]=N.useState(""),d=(C=t.lists)==null?void 0:C.find(_=>_.id===t.activeListId),f=d?{...d,items:Array.isArray(d.items)?d.items:[],checkedItems:Array.isArray(d.checkedItems)?d.checkedItems:[]}:null,g={};Ve.forEach(_=>{g[_]=[]}),(t.itemLibrary||[]).forEach(_=>{g[_.category]&&g[_.category].push(_)});const v=_=>{const p={...t,lists:t.lists.map(x=>{if(x.id!==t.activeListId)return x;const k=Array.isArray(x.items)?x.items:[],E=Array.isArray(x.checkedItems)?x.checkedItems:[],I=k.includes(_);return{...x,items:I?k.filter(T=>T!==_):[...k,_],checkedItems:I?E.filter(T=>T!==_):E}})};n(p)},b=()=>{const _=i.trim();if(!_)return;const p="item_"+Date.now(),x={id:p,name:_,category:l},k={...t,itemLibrary:[...t.itemLibrary||[],x],lists:t.lists.map(E=>{if(E.id!==t.activeListId)return E;const I=Array.isArray(E.items)?E.items:[];return{...E,items:[...I,p]}})};n(k),o(""),r(!1)};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsxs("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg active:bg-slate-100 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"返回",children:c.jsx(pI,{size:22,className:"text-slate-600"})}),c.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("div",{className:"text-sm text-indigo-600 mt-1",children:["選擇要加入「",f==null?void 0:f.name,"」的物品"]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"relative",children:[c.jsx(Th,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:u,onChange:_=>h(_.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),u&&c.jsx("button",{onClick:()=>h(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(vt,{size:16})})]})}),u&&Ve.every(_=>{const p=u.toLowerCase();return g[_].filter(x=>{var k,E,I;return((k=x.name)==null?void 0:k.toLowerCase().includes(p))||((E=x.category)==null?void 0:E.toLowerCase().includes(p))||((I=x.note)==null?void 0:I.toLowerCase().includes(p))}).length===0})&&c.jsxs("div",{className:"text-center py-8 text-slate-400",children:["找不到「",u,"」相關物品"]}),Ve.map(_=>{const p=u?g[_].filter(x=>{var E,I,T;const k=u.toLowerCase();return((E=x.name)==null?void 0:E.toLowerCase().includes(k))||((I=x.category)==null?void 0:I.toLowerCase().includes(k))||((T=x.note)==null?void 0:T.toLowerCase().includes(k))}):g[_];return p.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 font-semibold mb-2",children:_}),c.jsx("div",{className:"space-y-2",children:p.map(x=>{const k=f==null?void 0:f.items.includes(x.id);return c.jsxs("div",{onClick:()=>v(x.id),className:`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${k?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${k?"border-indigo-600 bg-indigo-600":"border-slate-300"}`,children:k&&c.jsx(Di,{size:14,className:"text-white"})}),x.photoURL&&c.jsx("img",{src:x.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:E=>{E.target.style.display="none"}}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:k?"text-slate-800 font-medium":"text-slate-600",children:x.name}),x.note&&c.jsxs("div",{className:"text-xs text-slate-400 mt-0.5 flex items-center gap-1",children:[c.jsx(Rh,{size:10,className:"flex-shrink-0"}),x.note]})]})]},x.id)})})]},_)})]}),s&&c.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{r(!1),o("")}}),s&&c.jsxs("div",{className:"fixed right-4 bottom-[168px] z-50 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-4 space-y-3",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-700",children:"快速新增物品"}),c.jsx("input",{type:"text",placeholder:"物品名稱",value:i,onChange:_=>o(_.target.value),onKeyDown:_=>{_.key==="Enter"&&b()},autoFocus:!0,className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("select",{value:l,onChange:_=>a(_.target.value),className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500",children:Ve.map(_=>c.jsx("option",{value:_,children:_},_))}),c.jsx("button",{onClick:b,disabled:!i.trim(),className:"w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium active:bg-indigo-700 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),c.jsx("button",{onClick:()=>{r(_=>!_),s&&o("")},className:"fixed right-4 bottom-[112px] z-50 w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 transition-colors duration-150","aria-label":s?"關閉新增表單":"新增物品",children:s?c.jsx(vt,{size:24}):c.jsx(Er,{size:24})}),c.jsxs("div",{className:"p-4 bg-white border-t border-slate-200",children:[c.jsxs("div",{className:"text-center text-slate-500 mb-3",children:["已選擇 ",((m=f==null?void 0:f.items)==null?void 0:m.length)||0," 個物品"]}),c.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"完成"})]})]})}function eT({user:t,syncStatus:e,onLogin:n,onLogout:s,onNavigate:r,isAdmin:i}){const o={offline:{icon:xI,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50"},syncing:{icon:qI,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50"},synced:{icon:bI,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50"},error:{icon:gI,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50"}},l=o[e]||o.offline,a=l.icon;return c.jsxs("div",{className:"flex flex-col h-full pb-20",children:[c.jsx("div",{className:"bg-white border-b border-slate-200 px-4 py-3 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-slate-900 text-center",children:"設定"})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 mb-3",children:"帳號"}),t?c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&c.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:u=>u.target.style.display="none"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-slate-900 truncate",children:t.displayName||"使用者"}),c.jsx("div",{className:"text-sm text-slate-500 truncate",children:t.email})]})]}),c.jsxs("button",{onClick:s,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 text-rose-500 rounded-xl font-medium active:bg-rose-50 transition-colors duration-150",children:[c.jsx(ZI,{size:18}),"登出"]})]}):c.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150",children:[c.jsx(XI,{size:18}),"使用 Google 登入"]})]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 mb-3",children:"同步狀態"}),c.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${l.bg}`,children:[c.jsx(a,{size:20,className:`${l.color} ${e==="syncing"?"animate-spin":""}`}),c.jsx("span",{className:`font-medium ${l.color}`,children:l.label})]})]}),t&&i&&c.jsxs("button",{onClick:()=>r("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150",children:[c.jsx(Gy,{size:18}),"管理後台"]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 mb-3",children:"關於"}),c.jsxs("div",{className:"text-sm text-slate-600",children:[c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"應用程式"}),c.jsx("span",{className:"text-slate-900 font-medium",children:"打包清單"})]}),c.jsx("div",{className:"border-t border-slate-100"}),c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"版本"}),c.jsx("span",{className:"text-slate-900 font-medium",children:"1.0.0"})]})]})]})]})]})}function bo({icon:t,label:e,value:n,color:s="text-indigo-600"}){return c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(t,{size:20,className:s}),c.jsx("span",{className:"text-sm text-slate-500",children:e})]}),c.jsx("div",{className:`text-3xl font-bold ${s}`,children:n})]})}function tT({data:t,shared:e}){const n=t.itemLibrary.length,s=t.lists.length,r=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,f)=>f[1]-d[1]),a={};t.itemLibrary.forEach(d=>{a[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(f=>{a[f]!==void 0&&a[f]++})});const u=Object.entries(a).sort((d,f)=>f[1]-d[1]).slice(0,5).map(([d,f])=>{const g=t.itemLibrary.find(v=>v.id===Number(d));return g?{name:g.name,count:f}:null}).filter(Boolean),h=l.length>0?l[0][1]:1;return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-4",children:"數據總覽"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[c.jsx(bo,{icon:Ui,label:"物品總數",value:n,color:"text-indigo-600"}),c.jsx(bo,{icon:YI,label:"清單總數",value:s,color:"text-emerald-600"}),c.jsx(bo,{icon:pa,label:"已分享清單",value:r,color:"text-amber-600"}),c.jsx(bo,{icon:Ky,label:"收到分享",value:i,color:"text-rose-600"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(cI,{size:18,className:"text-slate-500"}),c.jsx("h3",{className:"font-semibold text-slate-900",children:"分類統計"})]}),l.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):c.jsx("div",{className:"space-y-3",children:l.map(([d,f])=>c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[c.jsx("span",{className:"text-slate-700",children:d}),c.jsx("span",{className:"text-slate-500",children:f})]}),c.jsx("div",{className:"h-2 bg-slate-100 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${f/h*100}%`}})})]},d))})]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(Ui,{size:18,className:"text-slate-500"}),c.jsx("h3",{className:"font-semibold text-slate-900",children:"最常使用物品 Top 5"})]}),u.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):c.jsx("div",{className:"space-y-2",children:u.map((d,f)=>c.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:f+1}),c.jsx("span",{className:"text-slate-800",children:d.name})]}),c.jsxs("span",{className:"text-sm text-slate-500",children:["出現在 ",d.count," 個清單"]})]},f))})]})]})]})}function nT({data:t,onSaveData:e}){const[n,s]=N.useState(""),[r,i]=N.useState(""),[o,l]=N.useState(new Set),[a,u]=N.useState(null),[h,d]=N.useState({name:"",category:"",note:""}),[f,g]=N.useState(""),[v,b]=N.useState(!1),C=N.useRef(null),m=t.itemLibrary.filter(y=>{const w=!n||y.name.toLowerCase().includes(n.toLowerCase())||(y.note||"").toLowerCase().includes(n.toLowerCase()),S=!r||y.category===r;return w&&S}),_=y=>{l(w=>{const S=new Set(w);return S.has(y)?S.delete(y):S.add(y),S})},p=()=>{o.size===m.length?l(new Set):l(new Set(m.map(y=>y.id)))},x=y=>{u(y.id),d({name:y.name,category:y.category,note:y.note||""})},k=()=>{const y=t.itemLibrary.map(w=>w.id===a?{...w,...h}:w);e({...t,itemLibrary:y}),u(null)},E=y=>{const w=new Set(y),S=t.itemLibrary.filter(K=>!w.has(K.id)),z=t.lists.map(K=>({...K,items:(K.items||[]).filter(V=>!w.has(V)),checkedItems:(K.checkedItems||[]).filter(V=>!w.has(V))}));e({...t,itemLibrary:S,lists:z}),l(new Set)},I=()=>{if(!f)return;const y=t.itemLibrary.map(w=>o.has(w.id)?{...w,category:f}:w);e({...t,itemLibrary:y}),l(new Set),b(!1),g("")},T=()=>{const y=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),w=URL.createObjectURL(y),S=document.createElement("a");S.href=w,S.download="item-library.json",S.click(),URL.revokeObjectURL(w)},U=y=>{var z;const w=(z=y.target.files)==null?void 0:z[0];if(!w)return;const S=new FileReader;S.onload=K=>{try{const V=JSON.parse(K.target.result);if(!Array.isArray(V)){alert("格式錯誤：需要 JSON 陣列");return}if(!V.every(F=>F.name&&F.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const ft=Math.max(0,...t.itemLibrary.map(F=>F.id)),A=new Set(t.itemLibrary.map(F=>F.name)),R=V.filter(F=>!A.has(F.name)).map((F,Ce)=>({id:F.id||ft+Ce+1,name:F.name,category:F.category,note:F.note||"",...F.photoURL?{photoURL:F.photoURL}:{}}));if(R.length===0){alert("沒有新物品可匯入（全部重複）");return}const L=new Set(t.itemLibrary.map(F=>F.id));let M=ft+1;R.forEach(F=>{for(;L.has(M);)M++;F.id=M,L.add(M),M++}),e({...t,itemLibrary:[...t.itemLibrary,...R]}),alert(`已匯入 ${R.length} 個物品`)}catch{alert("JSON 解析失敗")}},S.readAsText(w),y.target.value=""};return c.jsxs("div",{children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"物品管理"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:T,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50",children:[c.jsx(II,{size:16})," 匯出"]}),c.jsxs("button",{onClick:()=>{var y;return(y=C.current)==null?void 0:y.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50",children:[c.jsx(D5,{size:16})," 匯入"]}),c.jsx("input",{ref:C,type:"file",accept:".json",onChange:U,className:"hidden"})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(Th,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",placeholder:"搜尋物品...",value:n,onChange:y=>s(y.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),c.jsxs("div",{className:"relative",children:[c.jsx(OI,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsxs("select",{value:r,onChange:y=>i(y.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[c.jsx("option",{value:"",children:"所有分類"}),Ve.map(y=>c.jsx("option",{value:y,children:y},y))]})]})]}),o.size>0&&c.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 border border-indigo-200 rounded-lg",children:[c.jsxs("span",{className:"text-sm font-medium text-indigo-700",children:["已選 ",o.size," 項"]}),c.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${o.size} 個物品？`)&&E([...o])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[c.jsx(as,{size:14})," 批量刪除"]}),v?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("select",{value:f,onChange:y=>g(y.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 rounded-lg bg-white",children:[c.jsx("option",{value:"",children:"選擇分類"}),Ve.map(y=>c.jsx("option",{value:y,children:y},y))]}),c.jsx("button",{onClick:I,disabled:!f,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(Di,{size:14})}),c.jsx("button",{onClick:()=>{b(!1),g("")},className:"px-2 py-1.5 text-sm bg-slate-200 rounded-lg hover:bg-slate-300",children:c.jsx(vt,{size:14})})]}):c.jsxs("button",{onClick:()=>b(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[c.jsx(I5,{size:14})," 批量改分類"]})]}),c.jsx("div",{className:"hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:c.jsxs("tr",{children:[c.jsx("th",{className:"w-10 px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:m.length>0&&o.size===m.length,onChange:p,className:"rounded"})}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"分類"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"備註"}),c.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600",children:"操作"})]})}),c.jsxs("tbody",{children:[m.map(y=>c.jsxs("tr",{className:"border-b border-slate-100 last:border-0 hover:bg-slate-50",children:[c.jsx("td",{className:"px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:o.has(y.id),onChange:()=>_(y.id),className:"rounded"})}),a===y.id?c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:h.name,onChange:w=>d(S=>({...S,name:w.target.value})),className:"w-full px-2 py-1 border border-slate-300 rounded text-sm"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("select",{value:h.category,onChange:w=>d(S=>({...S,category:w.target.value})),className:"px-2 py-1 border border-slate-300 rounded text-sm bg-white",children:Ve.map(w=>c.jsx("option",{value:w,children:w},w))})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:h.note,onChange:w=>d(S=>({...S,note:w.target.value})),className:"w-full px-2 py-1 border border-slate-300 rounded text-sm"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:k,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 rounded",children:c.jsx(Di,{size:16})}),c.jsx("button",{onClick:()=>u(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 rounded",children:c.jsx(vt,{size:16})})]})})]}):c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-3 text-sm text-slate-800",children:y.name}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full",children:y.category})}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500",children:y.note||"-"}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>x(y),className:"p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded",children:c.jsx(Su,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${y.name}」？`)&&E([y.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded",children:c.jsx(as,{size:16})})]})})]})]},y.id)),m.length===0&&c.jsx("tr",{children:c.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),c.jsxs("div",{className:"lg:hidden space-y-2",children:[m.length===0&&c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),m.map(y=>c.jsx("div",{className:"bg-white border border-slate-200 rounded-xl p-4",children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("input",{type:"checkbox",checked:o.has(y.id),onChange:()=>_(y.id),className:"mt-1 rounded"}),a===y.id?c.jsxs("div",{className:"flex-1 space-y-2",children:[c.jsx("input",{value:h.name,onChange:w=>d(S=>({...S,name:w.target.value})),className:"w-full px-2 py-1 border border-slate-300 rounded text-sm"}),c.jsx("select",{value:h.category,onChange:w=>d(S=>({...S,category:w.target.value})),className:"w-full px-2 py-1 border border-slate-300 rounded text-sm bg-white",children:Ve.map(w=>c.jsx("option",{value:w,children:w},w))}),c.jsx("input",{value:h.note,onChange:w=>d(S=>({...S,note:w.target.value})),className:"w-full px-2 py-1 border border-slate-300 rounded text-sm",placeholder:"備註"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:k,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),c.jsx("button",{onClick:()=>u(null),className:"px-3 py-1 text-sm bg-slate-200 rounded-lg",children:"取消"})]})]}):c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"font-medium text-slate-800",children:y.name}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>x(y),className:"p-1.5 text-slate-400 hover:text-indigo-600",children:c.jsx(Su,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${y.name}」？`)&&E([y.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(as,{size:16})})]})]}),c.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-600 rounded-full",children:y.category}),y.note&&c.jsx("p",{className:"text-sm text-slate-500 mt-1",children:y.note})]})]})},y.id))]})]})}function sT({data:t,onSaveData:e}){const n=t.templates||[],[s,r]=N.useState(!1),[i,o]=N.useState("list"),[l,a]=N.useState(""),[u,h]=N.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,f]=N.useState(null),[g,v]=N.useState(null),[b,C]=N.useState(""),m=()=>{h({name:"",icon:"clipboard-list",description:"",itemIds:[]}),a(""),o("list"),r(!1)},_=()=>{const y=t.lists.find(w=>w.id===Number(l));y&&(h({name:y.name+" 範本",icon:y.icon||"clipboard-list",description:"",itemIds:[...y.items||[]]}),o("manual"))},p=y=>{h(w=>({...w,itemIds:w.itemIds.includes(y)?w.itemIds.filter(S=>S!==y):[...w.itemIds,y]}))},x=()=>{if(!u.name.trim())return;const w={id:Math.max(0,...n.map(S=>S.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,w]}),m()},k=()=>{if(!u.name.trim())return;const y=n.map(w=>w.id===d?{...w,...u,name:u.name.trim()}:w);e({...t,templates:y}),f(null),m()},E=y=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(w=>w.id!==y)})},I=y=>{f(y.id),h({name:y.name,icon:y.icon,description:y.description||"",itemIds:[...y.itemIds]}),r(!0)},T=()=>{const y=n.find(z=>z.id===g),w=t.lists.find(z=>z.id===Number(b));if(!y||!w)return;const S=t.lists.map(z=>z.id===w.id?{...z,items:[...new Set([...z.items||[],...y.itemIds])]}:z);e({...t,lists:S}),v(null),C(""),alert(`已將範本「${y.name}」套用到「${w.name}」`)},U=y=>y.map(w=>t.itemLibrary.find(S=>S.id===w)).filter(Boolean).map(w=>w.name);return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900",children:"清單範本"}),!s&&c.jsxs("button",{onClick:()=>r(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[c.jsx(Er,{size:16})," 建立範本"]})]}),s&&c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm text-slate-600 mb-1",children:"從現有清單建立"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:l,onChange:y=>a(y.target.value),className:"flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(y=>c.jsx("option",{value:y.id,children:y.name},y.id))]}),c.jsx("button",{onClick:_,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(EI,{size:16})})]}),c.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 mb-1",children:"範本名稱"}),c.jsx("input",{value:u.name,onChange:y=>h(w=>({...w,name:y.target.value})),className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm",placeholder:"例：出國旅行"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 mb-1",children:"圖示"}),c.jsx("select",{value:u.icon,onChange:y=>h(w=>({...w,icon:y.target.value})),className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white",children:Hy.map(y=>c.jsx("option",{value:y,children:y},y))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 mb-1",children:"說明"}),c.jsx("input",{value:u.description,onChange:y=>h(w=>({...w,description:y.target.value})),className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm",placeholder:"選填"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm text-slate-600 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),c.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 rounded-lg",children:t.itemLibrary.map(y=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-0",children:[c.jsx("input",{type:"checkbox",checked:u.itemIds.includes(y.id),onChange:()=>p(y.id),className:"rounded"}),c.jsx("span",{className:"text-sm text-slate-800",children:y.name}),c.jsx("span",{className:"text-xs text-slate-400",children:y.category})]},y.id))})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:d?k:x,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),c.jsx("button",{onClick:()=>{f(null),m()},className:"px-4 py-2 text-sm bg-slate-200 rounded-lg hover:bg-slate-300",children:"取消"})]})]})]}),g&&c.jsxs("div",{className:"bg-white border border-indigo-200 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 mb-2",children:"套用範本"}),c.jsx("p",{className:"text-sm text-slate-600 mb-3",children:"選擇要套用的目標清單："}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:b,onChange:y=>C(y.target.value),className:"flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(y=>c.jsx("option",{value:y.id,children:y.name},y.id))]}),c.jsxs("button",{onClick:T,disabled:!b,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[c.jsx(Di,{size:16})," 套用"]}),c.jsx("button",{onClick:()=>{v(null),C("")},className:"px-3 py-2 text-sm bg-slate-200 rounded-lg hover:bg-slate-300",children:c.jsx(vt,{size:16})})]})]}),n.length===0&&!s&&c.jsxs("div",{className:"text-center py-12 text-slate-400",children:[c.jsx(Qy,{size:48,className:"mx-auto mb-3 opacity-50"}),c.jsx("p",{children:"尚未建立任何範本"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(y=>c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-2",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold text-slate-900",children:y.name}),y.description&&c.jsx("p",{className:"text-sm text-slate-500 mt-0.5",children:y.description})]}),c.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full",children:y.icon})]}),c.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[U(y.itemIds).slice(0,5).map((w,S)=>c.jsx("span",{className:"text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full",children:w},S)),y.itemIds.length>5&&c.jsxs("span",{className:"text-xs text-slate-400",children:["+",y.itemIds.length-5," 更多"]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-sm text-slate-500",children:[c.jsx(Ui,{size:14,className:"inline mr-1"}),y.itemIds.length," 個物品"]}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>v(y.id),className:"px-2.5 py-1 text-xs bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100",children:"套用"}),c.jsx("button",{onClick:()=>I(y),className:"p-1.5 text-slate-400 hover:text-indigo-600",children:c.jsx(Su,{size:14})}),c.jsx("button",{onClick:()=>E(y.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(as,{size:14})})]})]})]},y.id))})]})}function rT({data:t,shared:e}){const[n,s]=N.useState("byMe"),[r,i]=N.useState({}),[o,l]=N.useState(""),a=e.sharedByMe||{},u=e.sharedWithMe||{},h=C=>{var _;const m=t.lists.find(p=>p.sharedListId===C);return(m==null?void 0:m.name)||((_=a[C])==null?void 0:_.name)||"未知清單"},d=async C=>{const m=o.trim();if(m)try{await e.addSharedUser(C,m),i({}),l("")}catch(_){alert("新增失敗："+_.message)}},f=async(C,m)=>{if(confirm(`移除 ${m} 的存取權限？`))try{await e.removeSharedUser(C,m)}catch(_){alert("移除失敗："+_.message)}},g=async C=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(C)}catch(m){alert("取消分享失敗："+m.message)}},v=Object.entries(a),b=Object.entries(u);return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-4",children:"分享管理"}),c.jsxs("div",{className:"flex border-b border-slate-200 mb-4",children:[c.jsxs("button",{onClick:()=>s("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600":"border-transparent text-slate-500 hover:text-slate-700"}`,children:[c.jsx(pa,{size:16})," 我分享的 (",v.length,")"]}),c.jsxs("button",{onClick:()=>s("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600":"border-transparent text-slate-500 hover:text-slate-700"}`,children:[c.jsx(Ky,{size:16})," 分享給我的 (",b.length,")"]})]}),n==="byMe"&&c.jsx("div",{children:v.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"分享對象"}),c.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600",children:"操作"})]})}),c.jsx("tbody",{children:v.map(([C,m])=>{const _=Object.keys(m.sharedWith||{}).map(Nu);return c.jsxs("tr",{className:"border-b border-slate-100 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800",children:h(C)}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[_.map(p=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 text-slate-600 rounded-full",children:[p,c.jsx("button",{onClick:()=>f(C,p),className:"text-slate-400 hover:text-rose-500",children:c.jsx(vt,{size:12})})]},p)),r[C]?c.jsxs("form",{onSubmit:p=>{p.preventDefault(),d(C)},className:"inline-flex gap-1",children:[c.jsx("input",{value:o,onChange:p=>l(p.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 rounded w-40",autoFocus:!0}),c.jsx("button",{type:"submit",className:"text-emerald-600",children:c.jsx(Er,{size:14})}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:c.jsx(vt,{size:14})})]}):c.jsx("button",{onClick:()=>i({[C]:!0}),className:"text-xs text-indigo-600 hover:underline",children:"+ 新增"})]})}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("button",{onClick:()=>g(C),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 rounded-lg",children:[c.jsx(as,{size:14})," 取消分享"]})})]},C)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([C,m])=>{const _=Object.keys(m.sharedWith||{}).map(Nu);return c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("h3",{className:"font-medium text-slate-800",children:h(C)}),c.jsx("button",{onClick:()=>g(C),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),c.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:_.map(p=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 text-slate-600 rounded-full",children:[p,c.jsx("button",{onClick:()=>f(C,p),className:"text-slate-400 hover:text-rose-500",children:c.jsx(vt,{size:12})})]},p))}),r[C]?c.jsxs("form",{onSubmit:p=>{p.preventDefault(),d(C)},className:"flex gap-2",children:[c.jsx("input",{value:o,onChange:p=>l(p.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 rounded-lg",autoFocus:!0}),c.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 rounded-lg",children:"取消"})]}):c.jsx("button",{onClick:()=>i({[C]:!0}),className:"text-sm text-indigo-600 hover:underline",children:"+ 新增分享對象"})]},C)})})]})}),n==="withMe"&&c.jsx("div",{children:b.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white border border-slate-200 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 border-b border-slate-200",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"來源"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600",children:"勾選進度"})]})}),c.jsx("tbody",{children:b.map(([C,m])=>{const _=(m.items||[]).length,p=(m.checkedItems||[]).length;return c.jsxs("tr",{className:"border-b border-slate-100 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800",children:m.name}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500",children:m.ownerName||m.ownerEmail}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-24 h-2 bg-slate-100 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:_>0?`${p/_*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500",children:[p,"/",_]})]})})]},C)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:b.map(([C,m])=>{const _=(m.items||[]).length,p=(m.checkedItems||[]).length;return c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4",children:[c.jsx("h3",{className:"font-medium text-slate-800",children:m.name}),c.jsxs("p",{className:"text-sm text-slate-500 mt-0.5",children:["來自 ",m.ownerName||m.ownerEmail]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[c.jsx("div",{className:"flex-1 h-2 bg-slate-100 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:_>0?`${p/_*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500",children:[p,"/",_]})]})]},C)})})]})})]})}function iT({user:t,admin:e}){const{adminEmails:n,addAdmin:s,removeAdmin:r}=e,[i,o]=N.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await s(i),o(""))},a=async u=>{var h;if(u===((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await r(u)};return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 mb-4",children:"帳號管理"}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 mb-3",children:"新增管理員"}),c.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[c.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[c.jsx(Er,{size:16})," 新增"]})]})]}),c.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl overflow-hidden",children:[c.jsx("div",{className:"px-4 py-3 border-b border-slate-200 bg-slate-50",children:c.jsxs("h3",{className:"font-semibold text-slate-900 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?c.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[c.jsx(Iu,{size:32,className:"mx-auto mb-2 opacity-50"}),c.jsx("p",{children:"尚未設定管理員"}),c.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):c.jsx("ul",{children:n.map(u=>{var d;const h=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return c.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[c.jsx(Iu,{size:16,className:"text-indigo-500 shrink-0"}),c.jsx("span",{className:"text-sm text-slate-800 truncate",children:u}),h&&c.jsx("span",{className:"text-xs bg-indigo-100 text-indigo-600 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),c.jsx("button",{onClick:()=>a(u),disabled:h,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:h?"無法移除自己":"移除管理員",children:c.jsx(as,{size:16})})]},u)})})]})]})}const lc=[{key:"dashboard",label:"總覽",icon:Gy},{key:"items",label:"物品管理",icon:Ui},{key:"templates",label:"清單範本",icon:Qy},{key:"sharing",label:"分享管理",icon:pa},{key:"accounts",label:"帳號管理",icon:Iu}];function oT({data:t,user:e,shared:n,onNavigate:s,onSaveData:r,admin:i}){var g;const[o,l]=N.useState("dashboard"),[a,u]=N.useState(!1),h=v=>{l(v),u(!1)},d=c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"p-4 border-b border-slate-200",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900",children:"管理後台"}),c.jsx("p",{className:"text-xs text-slate-500 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),c.jsx("nav",{className:"flex-1 p-2",children:lc.map(({key:v,label:b,icon:C})=>c.jsxs("button",{onClick:()=>h(v),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${o===v?"bg-indigo-50 text-indigo-700":"text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`,children:[c.jsx(C,{size:18}),b]},v))}),c.jsx("div",{className:"p-2 border-t border-slate-200",children:c.jsxs("button",{onClick:()=>s("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors",children:[c.jsx(oc,{size:18}),"返回應用"]})})]}),f=()=>{switch(o){case"dashboard":return c.jsx(tT,{data:t,shared:n});case"items":return c.jsx(nT,{data:t,onSaveData:r});case"templates":return c.jsx(sT,{data:t,onSaveData:r});case"sharing":return c.jsx(rT,{data:t,shared:n});case"accounts":return c.jsx(iT,{user:e,admin:i});default:return null}};return c.jsxs("div",{className:"h-screen bg-slate-50",children:[c.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[c.jsx("aside",{className:"bg-white border-r border-slate-200 overflow-y-auto",children:d}),c.jsx("main",{className:"overflow-y-auto p-6",children:c.jsx("div",{className:"max-w-6xl mx-auto",children:f()})})]}),c.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[c.jsxs("header",{className:"bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between safe-top",children:[c.jsx("button",{onClick:()=>u(!0),className:"p-1 -ml-1 text-slate-600",children:c.jsx(t5,{size:24})}),c.jsx("h1",{className:"text-lg font-bold text-slate-900",children:((g=lc.find(v=>v.key===o))==null?void 0:g.label)||"管理後台"}),c.jsx("button",{onClick:()=>s("profile"),className:"p-1 -mr-1 text-slate-600",children:c.jsx(oc,{size:24})})]}),a&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>u(!1)}),c.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-xl safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900",children:"管理後台"}),c.jsx("button",{onClick:()=>u(!1),className:"p-1 text-slate-400",children:c.jsx(vt,{size:20})})]}),c.jsx("nav",{className:"p-2",children:lc.map(({key:v,label:b,icon:C})=>c.jsxs("button",{onClick:()=>h(v),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${o===v?"bg-indigo-50 text-indigo-700":"text-slate-600 hover:bg-slate-50"}`,children:[c.jsx(C,{size:18}),b]},v))}),c.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 bg-white safe-bottom",children:c.jsxs("button",{onClick:()=>s("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50",children:[c.jsx(oc,{size:18}),"返回應用"]})})]})]}),c.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:f()})]})]})}const lT=[{id:"checklist",label:"清單",icon:N5},{id:"lists",label:"所有清單",icon:HI},{id:"library",label:"物品庫",icon:Ui},{id:"profile",label:"設定",icon:F5}];function aT({currentView:t,onNavigate:e}){return c.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40",children:c.jsx("div",{className:"flex",children:lT.map(n=>{const s=t===n.id,r=n.icon;return c.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${s?"text-indigo-600":"text-slate-400 active:text-slate-600"}`,"aria-label":n.label,children:[c.jsx(r,{size:22,strokeWidth:s?2.5:2}),c.jsx("span",{className:`text-xs mt-1 ${s?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function cT({onRefresh:t,onDismiss:e}){return c.jsx("div",{className:"fixed bottom-20 left-4 right-4 bg-indigo-600 text-white rounded-xl border border-indigo-500 p-4 z-50 animate-slide-up",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(k5,{size:24}),c.jsxs("div",{children:[c.jsx("div",{className:"font-medium",children:"有新版本可用"}),c.jsx("div",{className:"text-sm text-indigo-200",children:"點擊更新以取得最新功能"})]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:e,className:"px-3 py-2 text-indigo-200 active:text-white text-sm transition-colors duration-150 min-h-[44px]",children:"稍後"}),c.jsx("button",{onClick:t,className:"px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm active:bg-indigo-50 transition-colors duration-150 min-h-[44px]",children:"更新"})]})]})})}function uT(){const[t,e]=N.useState("checklist"),[n,s]=N.useState(null),r=FS(),{user:i,data:o,syncStatus:l,saveData:a,handleLogin:u,handleLogout:h}=zS(r),d=BS(i,o),f=WS(i),{needRefresh:g,refresh:v,dismiss:b}=YS(),C=(_,p)=>{(p==null?void 0:p.sharedListId)!==void 0&&s(p.sharedListId),e(_)},m=t!=="addItems"&&t!=="admin";return c.jsxs(c.Fragment,{children:[t==="checklist"&&c.jsx(H5,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:C,onSaveData:a,shared:d,activeSharedListId:n}),t==="lists"&&c.jsx(Q5,{data:o,user:i,onNavigate:C,onSaveData:a,shared:d}),t==="library"&&c.jsx(X5,{data:o,user:i,onNavigate:C,onSaveData:a}),t==="addItems"&&c.jsx(Z5,{data:o,onNavigate:C,onSaveData:a}),t==="profile"&&c.jsx(eT,{user:i,syncStatus:l,onLogin:u,onLogout:h,onNavigate:C,isAdmin:f.isAdmin}),t==="admin"&&f.isAdmin&&c.jsx(oT,{data:o,user:i,shared:d,onNavigate:C,onSaveData:a,admin:f}),t==="admin"&&!f.isAdmin&&!f.loading&&c.jsxs("div",{className:"flex flex-col items-center justify-center h-screen p-4",children:[c.jsx("p",{className:"text-slate-500 mb-4",children:"你沒有管理後台的存取權限"}),c.jsx("button",{onClick:()=>C("profile"),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg",children:"返回設定"})]}),m&&c.jsx(aT,{currentView:t,onNavigate:_=>C(_,{sharedListId:null})}),g&&c.jsx(cT,{onRefresh:v,onDismiss:b}),!1]})}ac.createRoot(document.getElementById("root")).render(c.jsx(fv.StrictMode,{children:c.jsx(uT,{})}));export{VS as _};
