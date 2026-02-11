(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Zy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fp={exports:{}},Ol={},_p={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fi=Symbol.for("react.element"),ev=Symbol.for("react.portal"),tv=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),rv=Symbol.for("react.profiler"),sv=Symbol.for("react.provider"),iv=Symbol.for("react.context"),ov=Symbol.for("react.forward_ref"),lv=Symbol.for("react.suspense"),av=Symbol.for("react.memo"),cv=Symbol.for("react.lazy"),Ah=Symbol.iterator;function uv(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mp=Object.assign,gp={};function gs(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||pp}gs.prototype.isReactComponent={};gs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yp(){}yp.prototype=gs.prototype;function Ru(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||pp}var Pu=Ru.prototype=new yp;Pu.constructor=Ru;mp(Pu,gs.prototype);Pu.isPureReactComponent=!0;var Lh=Array.isArray,vp=Object.prototype.hasOwnProperty,ju={current:null},xp={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)vp.call(e,r)&&!xp.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];s.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Fi,type:t,key:i,ref:o,props:s,_owner:ju.current}}function dv(t,e){return{$$typeof:Fi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Au(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fi}function hv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oh=/\/+/g;function ma(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hv(""+t.key):e.toString(36)}function wo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fi:case ev:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ma(o,0):r,Lh(s)?(n="",t!=null&&(n=t.replace(Oh,"$&/")+"/"),wo(s,e,n,"",function(u){return u})):s!=null&&(Au(s)&&(s=dv(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Oh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Lh(t))for(var l=0;l<t.length;l++){i=t[l];var a=r+ma(i,l);o+=wo(i,e,n,a,s)}else if(a=uv(t),typeof a=="function")for(t=a.call(t),l=0;!(i=t.next()).done;)i=i.value,a=r+ma(i,l++),o+=wo(i,e,n,a,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Zi(t,e,n){if(t==null)return t;var r=[],s=0;return wo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function fv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qe={current:null},Co={transition:null},_v={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:Co,ReactCurrentOwner:ju};function kp(){throw Error("act(...) is not supported in production builds of React.")}q.Children={map:Zi,forEach:function(t,e,n){Zi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zi(t,function(){e++}),e},toArray:function(t){return Zi(t,function(e){return e})||[]},only:function(t){if(!Au(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=gs;q.Fragment=tv;q.Profiler=rv;q.PureComponent=Ru;q.StrictMode=nv;q.Suspense=lv;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_v;q.act=kp;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mp({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ju.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)vp.call(e,a)&&!xp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Fi,type:t.type,key:s,ref:i,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sv,_context:t},t.Consumer=t};q.createElement=bp;q.createFactory=function(t){var e=bp.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:ov,render:t}};q.isValidElement=Au;q.lazy=function(t){return{$$typeof:cv,_payload:{_status:-1,_result:t},_init:fv}};q.memo=function(t,e){return{$$typeof:av,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Co.transition;Co.transition={};try{t()}finally{Co.transition=e}};q.unstable_act=kp;q.useCallback=function(t,e){return qe.current.useCallback(t,e)};q.useContext=function(t){return qe.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return qe.current.useDeferredValue(t)};q.useEffect=function(t,e){return qe.current.useEffect(t,e)};q.useId=function(){return qe.current.useId()};q.useImperativeHandle=function(t,e,n){return qe.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return qe.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return qe.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return qe.current.useMemo(t,e)};q.useReducer=function(t,e,n){return qe.current.useReducer(t,e,n)};q.useRef=function(t){return qe.current.useRef(t)};q.useState=function(t){return qe.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return qe.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return qe.current.useTransition()};q.version="18.3.1";_p.exports=q;var N=_p.exports;const pv=Zy(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mv=N,gv=Symbol.for("react.element"),yv=Symbol.for("react.fragment"),vv=Object.prototype.hasOwnProperty,xv=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bv={key:!0,ref:!0,__self:!0,__source:!0};function wp(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)vv.call(e,r)&&!bv.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:gv,type:t,key:i,ref:o,props:s,_owner:xv.current}}Ol.Fragment=yv;Ol.jsx=wp;Ol.jsxs=wp;fp.exports=Ol;var c=fp.exports,cc={},Cp={exports:{}},dt={},Np={exports:{}},Ep={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,R){var L=A.length;A.push(R);e:for(;0<L;){var D=L-1>>>1,F=A[D];if(0<s(F,R))A[D]=R,A[L]=F,L=D;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var R=A[0],L=A.pop();if(L!==R){A[0]=L;e:for(var D=0,F=A.length,Ce=F>>>1;D<Ce;){var Xe=2*(D+1)-1,Vt=A[Xe],Lt=Xe+1,Gn=A[Lt];if(0>s(Vt,L))Lt<F&&0>s(Gn,Vt)?(A[D]=Gn,A[Lt]=L,D=Lt):(A[D]=Vt,A[Xe]=L,D=Xe);else if(Lt<F&&0>s(Gn,L))A[D]=Gn,A[Lt]=L,D=Lt;else break e}}return R}function s(A,R){var L=A.sortIndex-R.sortIndex;return L!==0?L:A.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,d=null,h=3,g=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(A){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=A)r(u),R.sortIndex=R.expirationTime,e(a,R);else break;R=n(u)}}function x(A){if(w=!1,p(A),!v)if(n(a)!==null)v=!0,fe(k);else{var R=n(u);R!==null&&ft(x,R.startTime-A)}}function k(A,R){v=!1,w&&(w=!1,m(T),T=-1),g=!0;var L=h;try{for(p(R),d=n(a);d!==null&&(!(d.expirationTime>R)||A&&!b());){var D=d.callback;if(typeof D=="function"){d.callback=null,h=d.priorityLevel;var F=D(d.expirationTime<=R);R=t.unstable_now(),typeof F=="function"?d.callback=F:d===n(a)&&r(a),p(R)}else r(a);d=n(a)}if(d!==null)var Ce=!0;else{var Xe=n(u);Xe!==null&&ft(x,Xe.startTime-R),Ce=!1}return Ce}finally{d=null,h=L,g=!1}}var E=!1,I=null,T=-1,U=5,y=-1;function b(){return!(t.unstable_now()-y<U)}function S(){if(I!==null){var A=t.unstable_now();y=A;var R=!0;try{R=I(!0,A)}finally{R?z():(E=!1,I=null)}}else E=!1}var z;if(typeof _=="function")z=function(){_(S)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,V=K.port2;K.port1.onmessage=S,z=function(){V.postMessage(null)}}else z=function(){C(S,0)};function fe(A){I=A,E||(E=!0,z())}function ft(A,R){T=C(function(){A(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,fe(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(A){switch(h){case 1:case 2:case 3:var R=3;break;default:R=h}var L=h;h=R;try{return A()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,R){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=h;h=A;try{return R()}finally{h=L}},t.unstable_scheduleCallback=function(A,R,L){var D=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,A){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=L+F,A={id:f++,callback:R,priorityLevel:A,startTime:L,expirationTime:F,sortIndex:-1},L>D?(A.sortIndex=L,e(u,A),n(a)===null&&A===n(u)&&(w?(m(T),T=-1):w=!0,ft(x,L-D))):(A.sortIndex=F,e(a,A),v||g||(v=!0,fe(k))),A},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(A){var R=h;return function(){var L=h;h=R;try{return A.apply(this,arguments)}finally{h=L}}}})(Ep);Np.exports=Ep;var kv=Np.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv=N,ut=kv;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sp=new Set,ui={};function br(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(ui[t]=e,t=0;t<e.length;t++)Sp.add(e[t])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=Object.prototype.hasOwnProperty,Cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mh={},Dh={};function Nv(t){return uc.call(Dh,t)?!0:uc.call(Mh,t)?!1:Cv.test(t)?Dh[t]=!0:(Mh[t]=!0,!1)}function Ev(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Sv(t,e,n,r){if(e===null||typeof e>"u"||Ev(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lu=/[\-:]([a-z])/g;function Ou(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lu,Ou);Oe[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lu,Ou);Oe[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lu,Ou);Oe[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mu(t,e,n,r){var s=Oe.hasOwnProperty(e)?Oe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Sv(e,n,s,r)&&(n=null),r||s===null?Nv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fn=wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Du=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),Uu=Symbol.for("react.forward_ref"),hc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),Fu=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),Rp=Symbol.for("react.offscreen"),Uh=Symbol.iterator;function Is(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,ga;function $s(t){if(ga===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ga=e&&e[1]||""}return`
`+ga+t}var ya=!1;function va(t,e){if(!t||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var a=`
`+s[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function Iv(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=va(t.type,!1),t;case 11:return t=va(t.type.render,!1),t;case 1:return t=va(t.type,!0),t;default:return""}}function _c(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jr:return"Fragment";case Pr:return"Portal";case dc:return"Profiler";case Du:return"StrictMode";case hc:return"Suspense";case fc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tp:return(t.displayName||"Context")+".Consumer";case Ip:return(t._context.displayName||"Context")+".Provider";case Uu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fu:return e=t.displayName||null,e!==null?e:_c(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return _c(t(e))}catch{}}return null}function Tv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _c(e);case 8:return e===Du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Rv(t){var e=Pp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=Rv(t))}function jp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pc(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ap(t,e){e=e.checked,e!=null&&Mu(t,"checked",e,!1)}function mc(t,e){Ap(t,e);var n=Fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&gc(t,e.type,Fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gc(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Hr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Hs(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fn(n)}}function Lp(t,e){var n=Fn(e.value),r=Fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Op(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Op(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,Mp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function di(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pv=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(t){Pv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gs[e]=Gs[t]})});function Dp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gs.hasOwnProperty(t)&&Gs[t]?(""+e).trim():e+"px"}function Up(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Dp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var jv=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(t,e){if(e){if(jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function bc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kc=null;function zu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wc=null,Vr=null,Yr=null;function $h(t){if(t=Wi(t)){if(typeof wc!="function")throw Error(P(280));var e=t.stateNode;e&&(e=zl(e),wc(t.stateNode,t.type,e))}}function Fp(t){Vr?Yr?Yr.push(t):Yr=[t]:Vr=t}function zp(){if(Vr){var t=Vr,e=Yr;if(Yr=Vr=null,$h(t),e)for(t=0;t<e.length;t++)$h(e[t])}}function Bp(t,e){return t(e)}function Wp(){}var xa=!1;function $p(t,e,n){if(xa)return t(e,n);xa=!0;try{return Bp(t,e,n)}finally{xa=!1,(Vr!==null||Yr!==null)&&(Wp(),zp())}}function hi(t,e){var n=t.stateNode;if(n===null)return null;var r=zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Cc=!1;if(on)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Cc=!1}function Av(t,e,n,r,s,i,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var qs=!1,Wo=null,$o=!1,Nc=null,Lv={onError:function(t){qs=!0,Wo=t}};function Ov(t,e,n,r,s,i,o,l,a){qs=!1,Wo=null,Av.apply(Lv,arguments)}function Mv(t,e,n,r,s,i,o,l,a){if(Ov.apply(this,arguments),qs){if(qs){var u=Wo;qs=!1,Wo=null}else throw Error(P(198));$o||($o=!0,Nc=u)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hh(t){if(kr(t)!==t)throw Error(P(188))}function Dv(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Hh(s),t;if(i===r)return Hh(s),e;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function Vp(t){return t=Dv(t),t!==null?Yp(t):null}function Yp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yp(t);if(e!==null)return e;t=t.sibling}return null}var Qp=ut.unstable_scheduleCallback,Vh=ut.unstable_cancelCallback,Uv=ut.unstable_shouldYield,Fv=ut.unstable_requestPaint,ve=ut.unstable_now,zv=ut.unstable_getCurrentPriorityLevel,Bu=ut.unstable_ImmediatePriority,Gp=ut.unstable_UserBlockingPriority,Ho=ut.unstable_NormalPriority,Bv=ut.unstable_LowPriority,qp=ut.unstable_IdlePriority,Ml=null,Ft=null;function Wv(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Vv,$v=Math.log,Hv=Math.LN2;function Vv(t){return t>>>=0,t===0?32:31-($v(t)/Hv|0)|0}var ro=64,so=4194304;function Vs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Vs(l):(i&=o,i!==0&&(r=Vs(i)))}else o=n&~s,o!==0?r=Vs(o):i!==0&&(r=Vs(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),s=1<<n,r|=t[n],e&=~s;return r}function Yv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-It(i),l=1<<o,a=s[o];a===-1?(!(l&n)||l&r)&&(s[o]=Yv(l,e)):a<=e&&(t.expiredLanes|=l),i&=~l}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kp(){var t=ro;return ro<<=1,!(ro&4194240)&&(ro=64),t}function ba(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function Gv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-It(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Wu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ee=0;function Xp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jp,$u,Zp,em,tm,Sc=!1,io=[],In=null,Tn=null,Rn=null,fi=new Map,_i=new Map,vn=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yh(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":fi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(e.pointerId)}}function Rs(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Wi(e),e!==null&&$u(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Kv(t,e,n,r,s){switch(e){case"focusin":return In=Rs(In,t,e,n,r,s),!0;case"dragenter":return Tn=Rs(Tn,t,e,n,r,s),!0;case"mouseover":return Rn=Rs(Rn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return fi.set(i,Rs(fi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,_i.set(i,Rs(_i.get(i)||null,t,e,n,r,s)),!0}return!1}function nm(t){var e=Zn(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hp(n),e!==null){t.blockedOn=e,tm(t.priority,function(){Zp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function No(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);kc=r,n.target.dispatchEvent(r),kc=null}else return e=Wi(n),e!==null&&$u(e),t.blockedOn=n,!1;e.shift()}return!0}function Qh(t,e,n){No(t)&&n.delete(e)}function Xv(){Sc=!1,In!==null&&No(In)&&(In=null),Tn!==null&&No(Tn)&&(Tn=null),Rn!==null&&No(Rn)&&(Rn=null),fi.forEach(Qh),_i.forEach(Qh)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,Xv)))}function pi(t){function e(s){return Ps(s,t)}if(0<io.length){Ps(io[0],t);for(var n=1;n<io.length;n++){var r=io[n];r.blockedOn===t&&(r.blockedOn=null)}}for(In!==null&&Ps(In,t),Tn!==null&&Ps(Tn,t),Rn!==null&&Ps(Rn,t),fi.forEach(e),_i.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)nm(n),n.blockedOn===null&&vn.shift()}var Qr=fn.ReactCurrentBatchConfig,Yo=!0;function Jv(t,e,n,r){var s=ee,i=Qr.transition;Qr.transition=null;try{ee=1,Hu(t,e,n,r)}finally{ee=s,Qr.transition=i}}function Zv(t,e,n,r){var s=ee,i=Qr.transition;Qr.transition=null;try{ee=4,Hu(t,e,n,r)}finally{ee=s,Qr.transition=i}}function Hu(t,e,n,r){if(Yo){var s=Ic(t,e,n,r);if(s===null)Pa(t,e,r,Qo,n),Yh(t,r);else if(Kv(s,t,e,n,r))r.stopPropagation();else if(Yh(t,r),e&4&&-1<qv.indexOf(t)){for(;s!==null;){var i=Wi(s);if(i!==null&&Jp(i),i=Ic(t,e,n,r),i===null&&Pa(t,e,r,Qo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Pa(t,e,r,null,n)}}var Qo=null;function Ic(t,e,n,r){if(Qo=null,t=zu(r),t=Zn(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Qo=t,null}function rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zv()){case Bu:return 1;case Gp:return 4;case Ho:case Bv:return 16;case qp:return 536870912;default:return 16}default:return 16}}var Nn=null,Vu=null,Eo=null;function sm(){if(Eo)return Eo;var t,e=Vu,n=e.length,r,s="value"in Nn?Nn.value:Nn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Eo=s.slice(t,1<r?1-r:void 0)}function So(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function oo(){return!0}function Gh(){return!1}function ht(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?oo:Gh,this.isPropagationStopped=Gh,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),e}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=ht(ys),Bi=he({},ys,{view:0,detail:0}),ex=ht(Bi),ka,wa,js,Dl=he({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(ka=t.screenX-js.screenX,wa=t.screenY-js.screenY):wa=ka=0,js=t),ka)},movementY:function(t){return"movementY"in t?t.movementY:wa}}),qh=ht(Dl),tx=he({},Dl,{dataTransfer:0}),nx=ht(tx),rx=he({},Bi,{relatedTarget:0}),Ca=ht(rx),sx=he({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),ix=ht(sx),ox=he({},ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lx=ht(ox),ax=he({},ys,{data:0}),Kh=ht(ax),cx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dx[t])?!!e[t]:!1}function Qu(){return hx}var fx=he({},Bi,{key:function(t){if(t.key){var e=cx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ux[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=ht(fx),px=he({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=ht(px),mx=he({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),gx=ht(mx),yx=he({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),vx=ht(yx),xx=he({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),bx=ht(xx),kx=[9,13,27,32],Gu=on&&"CompositionEvent"in window,Ks=null;on&&"documentMode"in document&&(Ks=document.documentMode);var wx=on&&"TextEvent"in window&&!Ks,im=on&&(!Gu||Ks&&8<Ks&&11>=Ks),Jh=" ",Zh=!1;function om(t,e){switch(t){case"keyup":return kx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function Cx(t,e){switch(t){case"compositionend":return lm(e);case"keypress":return e.which!==32?null:(Zh=!0,Jh);case"textInput":return t=e.data,t===Jh&&Zh?null:t;default:return null}}function Nx(t,e){if(Ar)return t==="compositionend"||!Gu&&om(t,e)?(t=sm(),Eo=Vu=Nn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return im&&e.locale!=="ko"?null:e.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ex[t.type]:e==="textarea"}function am(t,e,n,r){Fp(r),e=Go(e,"onChange"),0<e.length&&(n=new Yu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xs=null,mi=null;function Sx(t){vm(t,0)}function Ul(t){var e=Mr(t);if(jp(e))return t}function Ix(t,e){if(t==="change")return e}var cm=!1;if(on){var Na;if(on){var Ea="oninput"in document;if(!Ea){var tf=document.createElement("div");tf.setAttribute("oninput","return;"),Ea=typeof tf.oninput=="function"}Na=Ea}else Na=!1;cm=Na&&(!document.documentMode||9<document.documentMode)}function nf(){Xs&&(Xs.detachEvent("onpropertychange",um),mi=Xs=null)}function um(t){if(t.propertyName==="value"&&Ul(mi)){var e=[];am(e,mi,t,zu(t)),$p(Sx,e)}}function Tx(t,e,n){t==="focusin"?(nf(),Xs=e,mi=n,Xs.attachEvent("onpropertychange",um)):t==="focusout"&&nf()}function Rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(mi)}function Px(t,e){if(t==="click")return Ul(e)}function jx(t,e){if(t==="input"||t==="change")return Ul(e)}function Ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:Ax;function gi(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!uc.call(e,s)||!jt(t[s],e[s]))return!1}return!0}function rf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sf(t,e){var n=rf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rf(n)}}function dm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hm(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function qu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lx(t){var e=hm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dm(n.ownerDocument.documentElement,n)){if(r!==null&&qu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=sf(n,i);var o=sf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ox=on&&"documentMode"in document&&11>=document.documentMode,Lr=null,Tc=null,Js=null,Rc=!1;function of(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rc||Lr==null||Lr!==Bo(r)||(r=Lr,"selectionStart"in r&&qu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Js&&gi(Js,r)||(Js=r,r=Go(Tc,"onSelect"),0<r.length&&(e=new Yu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Lr)))}function lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Or={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},Sa={},fm={};on&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Fl(t){if(Sa[t])return Sa[t];if(!Or[t])return t;var e=Or[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fm)return Sa[t]=e[n];return t}var _m=Fl("animationend"),pm=Fl("animationiteration"),mm=Fl("animationstart"),gm=Fl("transitionend"),ym=new Map,lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){ym.set(t,e),br(e,[t])}for(var Ia=0;Ia<lf.length;Ia++){var Ta=lf[Ia],Mx=Ta.toLowerCase(),Dx=Ta[0].toUpperCase()+Ta.slice(1);Hn(Mx,"on"+Dx)}Hn(_m,"onAnimationEnd");Hn(pm,"onAnimationIteration");Hn(mm,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(gm,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function af(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Mv(r,e,void 0,t),t.currentTarget=null}function vm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&s.isPropagationStopped())break e;af(s,l,u),i=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&s.isPropagationStopped())break e;af(s,l,u),i=a}}}if($o)throw t=Nc,$o=!1,Nc=null,t}function le(t,e){var n=e[Oc];n===void 0&&(n=e[Oc]=new Set);var r=t+"__bubble";n.has(r)||(xm(e,t,2,!1),n.add(r))}function Ra(t,e,n){var r=0;e&&(r|=4),xm(n,t,r,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function yi(t){if(!t[ao]){t[ao]=!0,Sp.forEach(function(n){n!=="selectionchange"&&(Ux.has(n)||Ra(n,!1,t),Ra(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,Ra("selectionchange",!1,e))}}function xm(t,e,n,r){switch(rm(e)){case 1:var s=Jv;break;case 4:s=Zv;break;default:s=Hu}n=s.bind(null,e,n,t),s=void 0,!Cc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Pa(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Zn(l),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}l=l.parentNode}}r=r.return}$p(function(){var u=i,f=zu(n),d=[];e:{var h=ym.get(t);if(h!==void 0){var g=Yu,v=t;switch(t){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":g=_x;break;case"focusin":v="focus",g=Ca;break;case"focusout":v="blur",g=Ca;break;case"beforeblur":case"afterblur":g=Ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gx;break;case _m:case pm:case mm:g=ix;break;case gm:g=vx;break;case"scroll":g=ex;break;case"wheel":g=bx;break;case"copy":case"cut":case"paste":g=lx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xh}var w=(e&4)!==0,C=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var _=u,p;_!==null;){p=_;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,m!==null&&(x=hi(_,m),x!=null&&w.push(vi(_,x,p)))),C)break;_=_.return}0<w.length&&(h=new g(h,v,null,n,f),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==kc&&(v=n.relatedTarget||n.fromElement)&&(Zn(v)||v[ln]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Zn(v):null,v!==null&&(C=kr(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=qh,x="onMouseLeave",m="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(w=Xh,x="onPointerLeave",m="onPointerEnter",_="pointer"),C=g==null?h:Mr(g),p=v==null?h:Mr(v),h=new w(x,_+"leave",g,n,f),h.target=C,h.relatedTarget=p,x=null,Zn(f)===u&&(w=new w(m,_+"enter",v,n,f),w.target=p,w.relatedTarget=C,x=w),C=x,g&&v)t:{for(w=g,m=v,_=0,p=w;p;p=Ir(p))_++;for(p=0,x=m;x;x=Ir(x))p++;for(;0<_-p;)w=Ir(w),_--;for(;0<p-_;)m=Ir(m),p--;for(;_--;){if(w===m||m!==null&&w===m.alternate)break t;w=Ir(w),m=Ir(m)}w=null}else w=null;g!==null&&cf(d,h,g,w,!1),v!==null&&C!==null&&cf(d,C,v,w,!0)}}e:{if(h=u?Mr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var k=Ix;else if(ef(h))if(cm)k=jx;else{k=Rx;var E=Tx}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=Px);if(k&&(k=k(t,u))){am(d,k,n,f);break e}E&&E(t,h,u),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&gc(h,"number",h.value)}switch(E=u?Mr(u):window,t){case"focusin":(ef(E)||E.contentEditable==="true")&&(Lr=E,Tc=u,Js=null);break;case"focusout":Js=Tc=Lr=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,of(d,n,f);break;case"selectionchange":if(Ox)break;case"keydown":case"keyup":of(d,n,f)}var I;if(Gu)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ar?om(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(im&&n.locale!=="ko"&&(Ar||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ar&&(I=sm()):(Nn=f,Vu="value"in Nn?Nn.value:Nn.textContent,Ar=!0)),E=Go(u,T),0<E.length&&(T=new Kh(T,t,null,n,f),d.push({event:T,listeners:E}),I?T.data=I:(I=lm(n),I!==null&&(T.data=I)))),(I=wx?Cx(t,n):Nx(t,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(f=new Kh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=I))}vm(d,e)})}function vi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Go(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=hi(t,n),i!=null&&r.unshift(vi(t,i,s)),i=hi(t,e),i!=null&&r.push(vi(t,i,s))),t=t.return}return r}function Ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cf(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,s?(a=hi(n,i),a!=null&&o.unshift(vi(n,a,l))):s||(a=hi(n,i),a!=null&&o.push(vi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Fx=/\r\n?/g,zx=/\u0000|\uFFFD/g;function uf(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(zx,"")}function co(t,e,n){if(e=uf(e),uf(t)!==e&&n)throw Error(P(425))}function qo(){}var Pc=null,jc=null;function Ac(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,Bx=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,Wx=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(t){return df.resolve(null).then(t).catch($x)}:Lc;function $x(t){setTimeout(function(){throw t})}function ja(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),pi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);pi(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),Dt="__reactFiber$"+vs,xi="__reactProps$"+vs,ln="__reactContainer$"+vs,Oc="__reactEvents$"+vs,Hx="__reactListeners$"+vs,Vx="__reactHandles$"+vs;function Zn(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hf(t);t!==null;){if(n=t[Dt])return n;t=hf(t)}return e}t=n,n=t.parentNode}return null}function Wi(t){return t=t[Dt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function zl(t){return t[xi]||null}var Mc=[],Dr=-1;function Vn(t){return{current:t}}function ae(t){0>Dr||(t.current=Mc[Dr],Mc[Dr]=null,Dr--)}function oe(t,e){Dr++,Mc[Dr]=t.current,t.current=e}var zn={},We=Vn(zn),rt=Vn(!1),cr=zn;function ss(t,e){var n=t.type.contextTypes;if(!n)return zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function st(t){return t=t.childContextTypes,t!=null}function Ko(){ae(rt),ae(We)}function ff(t,e,n){if(We.current!==zn)throw Error(P(168));oe(We,e),oe(rt,n)}function bm(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(P(108,Tv(t)||"Unknown",s));return he({},n,r)}function Xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zn,cr=We.current,oe(We,t),oe(rt,rt.current),!0}function _f(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=bm(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,ae(rt),ae(We),oe(We,t)):ae(rt),oe(rt,n)}var Gt=null,Bl=!1,Aa=!1;function km(t){Gt===null?Gt=[t]:Gt.push(t)}function Yx(t){Bl=!0,km(t)}function Yn(){if(!Aa&&Gt!==null){Aa=!0;var t=0,e=ee;try{var n=Gt;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Gt=null,Bl=!1}catch(s){throw Gt!==null&&(Gt=Gt.slice(t+1)),Qp(Bu,Yn),s}finally{ee=e,Aa=!1}}return null}var Ur=[],Fr=0,Jo=null,Zo=0,_t=[],pt=0,ur=null,Kt=1,Xt="";function qn(t,e){Ur[Fr++]=Zo,Ur[Fr++]=Jo,Jo=t,Zo=e}function wm(t,e,n){_t[pt++]=Kt,_t[pt++]=Xt,_t[pt++]=ur,ur=t;var r=Kt;t=Xt;var s=32-It(r)-1;r&=~(1<<s),n+=1;var i=32-It(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Kt=1<<32-It(e)+s|n<<s|r,Xt=i+t}else Kt=1<<i|n<<s|r,Xt=t}function Ku(t){t.return!==null&&(qn(t,1),wm(t,1,0))}function Xu(t){for(;t===Jo;)Jo=Ur[--Fr],Ur[Fr]=null,Zo=Ur[--Fr],Ur[Fr]=null;for(;t===ur;)ur=_t[--pt],_t[pt]=null,Xt=_t[--pt],_t[pt]=null,Kt=_t[--pt],_t[pt]=null}var ct=null,lt=null,ce=!1,Nt=null;function Cm(t,e){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ct=t,lt=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ct=t,lt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ur!==null?{id:Kt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ct=t,lt=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Uc(t){if(ce){var e=lt;if(e){var n=e;if(!pf(t,e)){if(Dc(t))throw Error(P(418));e=Pn(n.nextSibling);var r=ct;e&&pf(t,e)?Cm(r,n):(t.flags=t.flags&-4097|2,ce=!1,ct=t)}}else{if(Dc(t))throw Error(P(418));t.flags=t.flags&-4097|2,ce=!1,ct=t}}}function mf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ct=t}function uo(t){if(t!==ct)return!1;if(!ce)return mf(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ac(t.type,t.memoizedProps)),e&&(e=lt)){if(Dc(t))throw Nm(),Error(P(418));for(;e;)Cm(t,e),e=Pn(e.nextSibling)}if(mf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){lt=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}lt=null}}else lt=ct?Pn(t.stateNode.nextSibling):null;return!0}function Nm(){for(var t=lt;t;)t=Pn(t.nextSibling)}function is(){lt=ct=null,ce=!1}function Ju(t){Nt===null?Nt=[t]:Nt.push(t)}var Qx=fn.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function ho(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gf(t){var e=t._init;return e(t._payload)}function Em(t){function e(m,_){if(t){var p=m.deletions;p===null?(m.deletions=[_],m.flags|=16):p.push(_)}}function n(m,_){if(!t)return null;for(;_!==null;)e(m,_),_=_.sibling;return null}function r(m,_){for(m=new Map;_!==null;)_.key!==null?m.set(_.key,_):m.set(_.index,_),_=_.sibling;return m}function s(m,_){return m=On(m,_),m.index=0,m.sibling=null,m}function i(m,_,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<_?(m.flags|=2,_):p):(m.flags|=2,_)):(m.flags|=1048576,_)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,_,p,x){return _===null||_.tag!==6?(_=za(p,m.mode,x),_.return=m,_):(_=s(_,p),_.return=m,_)}function a(m,_,p,x){var k=p.type;return k===jr?f(m,_,p.props.children,x,p.key):_!==null&&(_.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===gn&&gf(k)===_.type)?(x=s(_,p.props),x.ref=As(m,_,p),x.return=m,x):(x=Lo(p.type,p.key,p.props,null,m.mode,x),x.ref=As(m,_,p),x.return=m,x)}function u(m,_,p,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==p.containerInfo||_.stateNode.implementation!==p.implementation?(_=Ba(p,m.mode,x),_.return=m,_):(_=s(_,p.children||[]),_.return=m,_)}function f(m,_,p,x,k){return _===null||_.tag!==7?(_=ir(p,m.mode,x,k),_.return=m,_):(_=s(_,p),_.return=m,_)}function d(m,_,p){if(typeof _=="string"&&_!==""||typeof _=="number")return _=za(""+_,m.mode,p),_.return=m,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case eo:return p=Lo(_.type,_.key,_.props,null,m.mode,p),p.ref=As(m,null,_),p.return=m,p;case Pr:return _=Ba(_,m.mode,p),_.return=m,_;case gn:var x=_._init;return d(m,x(_._payload),p)}if(Hs(_)||Is(_))return _=ir(_,m.mode,p,null),_.return=m,_;ho(m,_)}return null}function h(m,_,p,x){var k=_!==null?_.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:l(m,_,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:return p.key===k?a(m,_,p,x):null;case Pr:return p.key===k?u(m,_,p,x):null;case gn:return k=p._init,h(m,_,k(p._payload),x)}if(Hs(p)||Is(p))return k!==null?null:f(m,_,p,x,null);ho(m,p)}return null}function g(m,_,p,x,k){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(p)||null,l(_,m,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case eo:return m=m.get(x.key===null?p:x.key)||null,a(_,m,x,k);case Pr:return m=m.get(x.key===null?p:x.key)||null,u(_,m,x,k);case gn:var E=x._init;return g(m,_,p,E(x._payload),k)}if(Hs(x)||Is(x))return m=m.get(p)||null,f(_,m,x,k,null);ho(_,x)}return null}function v(m,_,p,x){for(var k=null,E=null,I=_,T=_=0,U=null;I!==null&&T<p.length;T++){I.index>T?(U=I,I=null):U=I.sibling;var y=h(m,I,p[T],x);if(y===null){I===null&&(I=U);break}t&&I&&y.alternate===null&&e(m,I),_=i(y,_,T),E===null?k=y:E.sibling=y,E=y,I=U}if(T===p.length)return n(m,I),ce&&qn(m,T),k;if(I===null){for(;T<p.length;T++)I=d(m,p[T],x),I!==null&&(_=i(I,_,T),E===null?k=I:E.sibling=I,E=I);return ce&&qn(m,T),k}for(I=r(m,I);T<p.length;T++)U=g(I,m,T,p[T],x),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?T:U.key),_=i(U,_,T),E===null?k=U:E.sibling=U,E=U);return t&&I.forEach(function(b){return e(m,b)}),ce&&qn(m,T),k}function w(m,_,p,x){var k=Is(p);if(typeof k!="function")throw Error(P(150));if(p=k.call(p),p==null)throw Error(P(151));for(var E=k=null,I=_,T=_=0,U=null,y=p.next();I!==null&&!y.done;T++,y=p.next()){I.index>T?(U=I,I=null):U=I.sibling;var b=h(m,I,y.value,x);if(b===null){I===null&&(I=U);break}t&&I&&b.alternate===null&&e(m,I),_=i(b,_,T),E===null?k=b:E.sibling=b,E=b,I=U}if(y.done)return n(m,I),ce&&qn(m,T),k;if(I===null){for(;!y.done;T++,y=p.next())y=d(m,y.value,x),y!==null&&(_=i(y,_,T),E===null?k=y:E.sibling=y,E=y);return ce&&qn(m,T),k}for(I=r(m,I);!y.done;T++,y=p.next())y=g(I,m,T,y.value,x),y!==null&&(t&&y.alternate!==null&&I.delete(y.key===null?T:y.key),_=i(y,_,T),E===null?k=y:E.sibling=y,E=y);return t&&I.forEach(function(S){return e(m,S)}),ce&&qn(m,T),k}function C(m,_,p,x){if(typeof p=="object"&&p!==null&&p.type===jr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case eo:e:{for(var k=p.key,E=_;E!==null;){if(E.key===k){if(k=p.type,k===jr){if(E.tag===7){n(m,E.sibling),_=s(E,p.props.children),_.return=m,m=_;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===gn&&gf(k)===E.type){n(m,E.sibling),_=s(E,p.props),_.ref=As(m,E,p),_.return=m,m=_;break e}n(m,E);break}else e(m,E);E=E.sibling}p.type===jr?(_=ir(p.props.children,m.mode,x,p.key),_.return=m,m=_):(x=Lo(p.type,p.key,p.props,null,m.mode,x),x.ref=As(m,_,p),x.return=m,m=x)}return o(m);case Pr:e:{for(E=p.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===p.containerInfo&&_.stateNode.implementation===p.implementation){n(m,_.sibling),_=s(_,p.children||[]),_.return=m,m=_;break e}else{n(m,_);break}else e(m,_);_=_.sibling}_=Ba(p,m.mode,x),_.return=m,m=_}return o(m);case gn:return E=p._init,C(m,_,E(p._payload),x)}if(Hs(p))return v(m,_,p,x);if(Is(p))return w(m,_,p,x);ho(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,_!==null&&_.tag===6?(n(m,_.sibling),_=s(_,p),_.return=m,m=_):(n(m,_),_=za(p,m.mode,x),_.return=m,m=_),o(m)):n(m,_)}return C}var os=Em(!0),Sm=Em(!1),el=Vn(null),tl=null,zr=null,Zu=null;function ed(){Zu=zr=tl=null}function td(t){var e=el.current;ae(el),t._currentValue=e}function Fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gr(t,e){tl=t,Zu=zr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Zu!==t)if(t={context:t,memoizedValue:e,next:null},zr===null){if(tl===null)throw Error(P(308));zr=t,tl.dependencies={lanes:0,firstContext:t}}else zr=zr.next=t;return e}var er=null;function nd(t){er===null?er=[t]:er.push(t)}function Im(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,nd(e)):(n.next=s.next,s.next=n),e.interleaved=n,an(t,r)}function an(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,an(t,n)}return s=r.interleaved,s===null?(e.next=e,nd(r)):(e.next=s.next,s.next=e),r.interleaved=e,an(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wu(t,n)}}function yf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var s=t.updateQueue;yn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?i=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(i!==null){var d=s.baseState;o=0,f=u=a=null,l=i;do{var h=l.lane,g=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(h=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=he({},d,h);break e;case 2:yn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=s.effects,h===null?s.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,a=d):f=f.next=g,o|=h;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;h=l,l=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(f===null&&(a=d),s.baseState=a,s.firstBaseUpdate=u,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);hr|=o,t.lanes=o,t.memoizedState=d}}function vf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(P(191,s));s.call(r)}}}var $i={},zt=Vn($i),bi=Vn($i),ki=Vn($i);function tr(t){if(t===$i)throw Error(P(174));return t}function sd(t,e){switch(oe(ki,e),oe(bi,t),oe(zt,$i),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vc(e,t)}ae(zt),oe(zt,e)}function ls(){ae(zt),ae(bi),ae(ki)}function Rm(t){tr(ki.current);var e=tr(zt.current),n=vc(e,t.type);e!==n&&(oe(bi,t),oe(zt,n))}function id(t){bi.current===t&&(ae(zt),ae(bi))}var ue=Vn(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var La=[];function od(){for(var t=0;t<La.length;t++)La[t]._workInProgressVersionPrimary=null;La.length=0}var To=fn.ReactCurrentDispatcher,Oa=fn.ReactCurrentBatchConfig,dr=0,de=null,be=null,Ee=null,sl=!1,Zs=!1,wi=0,Gx=0;function De(){throw Error(P(321))}function ld(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function ad(t,e,n,r,s,i){if(dr=i,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,To.current=t===null||t.memoizedState===null?Jx:Zx,t=n(r,s),Zs){i=0;do{if(Zs=!1,wi=0,25<=i)throw Error(P(301));i+=1,Ee=be=null,e.updateQueue=null,To.current=e1,t=n(r,s)}while(Zs)}if(To.current=il,e=be!==null&&be.next!==null,dr=0,Ee=be=de=null,sl=!1,e)throw Error(P(300));return t}function cd(){var t=wi!==0;return wi=0,t}function Mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?de.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function bt(){if(be===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=be.next;var e=Ee===null?de.memoizedState:Ee.next;if(e!==null)Ee=e,be=t;else{if(t===null)throw Error(P(310));be=t,t={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ee===null?de.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function Ci(t,e){return typeof e=="function"?e(t):e}function Ma(t){var e=bt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,a=null,u=i;do{var f=u.lane;if((dr&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,de.lanes|=f,hr|=f}u=u.next}while(u!==null&&u!==i);a===null?o=r:a.next=l,jt(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,de.lanes|=i,hr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Da(t){var e=bt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);jt(i,e.memoizedState)||(et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Pm(){}function jm(t,e){var n=de,r=bt(),s=e(),i=!jt(r.memoizedState,s);if(i&&(r.memoizedState=s,et=!0),r=r.queue,ud(Om.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,Ni(9,Lm.bind(null,n,r,s,e),void 0,null),Re===null)throw Error(P(349));dr&30||Am(n,e,s)}return s}function Am(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lm(t,e,n,r){e.value=n,e.getSnapshot=r,Mm(e)&&Dm(t)}function Om(t,e,n){return n(function(){Mm(e)&&Dm(t)})}function Mm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function Dm(t){var e=an(t,1);e!==null&&Tt(e,t,1,-1)}function xf(t){var e=Mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:t},e.queue=t,t=t.dispatch=Xx.bind(null,de,t),[e.memoizedState,t]}function Ni(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Um(){return bt().memoizedState}function Ro(t,e,n,r){var s=Mt();de.flags|=t,s.memoizedState=Ni(1|e,n,void 0,r===void 0?null:r)}function Wl(t,e,n,r){var s=bt();r=r===void 0?null:r;var i=void 0;if(be!==null){var o=be.memoizedState;if(i=o.destroy,r!==null&&ld(r,o.deps)){s.memoizedState=Ni(e,n,i,r);return}}de.flags|=t,s.memoizedState=Ni(1|e,n,i,r)}function bf(t,e){return Ro(8390656,8,t,e)}function ud(t,e){return Wl(2048,8,t,e)}function Fm(t,e){return Wl(4,2,t,e)}function zm(t,e){return Wl(4,4,t,e)}function Bm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wm(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Bm.bind(null,e,t),n)}function dd(){}function $m(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ld(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hm(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ld(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vm(t,e,n){return dr&21?(jt(n,e)||(n=Kp(),de.lanes|=n,hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function qx(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Oa.transition;Oa.transition={};try{t(!1),e()}finally{ee=n,Oa.transition=r}}function Ym(){return bt().memoizedState}function Kx(t,e,n){var r=Ln(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qm(t))Gm(e,n);else if(n=Im(t,e,n,r),n!==null){var s=Ye();Tt(n,t,r,s),qm(n,e,r)}}function Xx(t,e,n){var r=Ln(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qm(t))Gm(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,jt(l,o)){var a=e.interleaved;a===null?(s.next=s,nd(e)):(s.next=a.next,a.next=s),e.interleaved=s;return}}catch{}finally{}n=Im(t,e,s,r),n!==null&&(s=Ye(),Tt(n,t,r,s),qm(n,e,r))}}function Qm(t){var e=t.alternate;return t===de||e!==null&&e===de}function Gm(t,e){Zs=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wu(t,n)}}var il={readContext:xt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},Jx={readContext:xt,useCallback:function(t,e){return Mt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:bf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ro(4194308,4,Bm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ro(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ro(4,2,t,e)},useMemo:function(t,e){var n=Mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Kx.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=Mt();return t={current:t},e.memoizedState=t},useState:xf,useDebugValue:dd,useDeferredValue:function(t){return Mt().memoizedState=t},useTransition:function(){var t=xf(!1),e=t[0];return t=qx.bind(null,t[1]),Mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,s=Mt();if(ce){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Re===null)throw Error(P(349));dr&30||Am(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,bf(Om.bind(null,r,i,t),[t]),r.flags|=2048,Ni(9,Lm.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Mt(),e=Re.identifierPrefix;if(ce){var n=Xt,r=Kt;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Zx={readContext:xt,useCallback:$m,useContext:xt,useEffect:ud,useImperativeHandle:Wm,useInsertionEffect:Fm,useLayoutEffect:zm,useMemo:Hm,useReducer:Ma,useRef:Um,useState:function(){return Ma(Ci)},useDebugValue:dd,useDeferredValue:function(t){var e=bt();return Vm(e,be.memoizedState,t)},useTransition:function(){var t=Ma(Ci)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:jm,useId:Ym,unstable_isNewReconciler:!1},e1={readContext:xt,useCallback:$m,useContext:xt,useEffect:ud,useImperativeHandle:Wm,useInsertionEffect:Fm,useLayoutEffect:zm,useMemo:Hm,useReducer:Da,useRef:Um,useState:function(){return Da(Ci)},useDebugValue:dd,useDeferredValue:function(t){var e=bt();return be===null?e.memoizedState=t:Vm(e,be.memoizedState,t)},useTransition:function(){var t=Da(Ci)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Pm,useSyncExternalStore:jm,useId:Ym,unstable_isNewReconciler:!1};function wt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $l={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),s=Ln(t),i=rn(r,s);i.payload=e,n!=null&&(i.callback=n),e=jn(t,i,s),e!==null&&(Tt(e,t,s,r),Io(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),s=Ln(t),i=rn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=jn(t,i,s),e!==null&&(Tt(e,t,s,r),Io(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=Ln(t),s=rn(n,r);s.tag=2,e!=null&&(s.callback=e),e=jn(t,s,r),e!==null&&(Tt(e,t,r,n),Io(e,t,r))}};function kf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!gi(n,r)||!gi(s,i):!0}function Km(t,e,n){var r=!1,s=zn,i=e.contextType;return typeof i=="object"&&i!==null?i=xt(i):(s=st(e)?cr:We.current,r=e.contextTypes,i=(r=r!=null)?ss(t,s):zn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$l,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function wf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$l.enqueueReplaceState(e,e.state,null)}function Bc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},rd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=xt(i):(i=st(e)?cr:We.current,s.context=ss(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(zc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&$l.enqueueReplaceState(s,s.state,null),nl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e){try{var n="",r=e;do n+=Iv(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ua(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var t1=typeof WeakMap=="function"?WeakMap:Map;function Xm(t,e,n){n=rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ll||(ll=!0,Jc=r),Wc(t,e)},n}function Jm(t,e,n){n=rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Wc(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Wc(t,e),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Cf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new t1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=p1.bind(null,t,e,n),e.then(t,t))}function Nf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ef(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rn(-1,1),e.tag=2,jn(n,e,1))),n.lanes|=1),t)}var n1=fn.ReactCurrentOwner,et=!1;function He(t,e,n,r){e.child=t===null?Sm(e,null,n,r):os(e,t.child,n,r)}function Sf(t,e,n,r,s){n=n.render;var i=e.ref;return Gr(e,s),r=ad(t,e,n,r,i,s),n=cd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,cn(t,e,s)):(ce&&n&&Ku(e),e.flags|=1,He(t,e,r,s),e.child)}function If(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!vd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Zm(t,e,i,r,s)):(t=Lo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:gi,n(o,r)&&t.ref===e.ref)return cn(t,e,s)}return e.flags|=1,t=On(i,r),t.ref=e.ref,t.return=e,e.child=t}function Zm(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(gi(i,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,cn(t,e,s)}return $c(t,e,n,r,s)}function e0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Wr,ot),ot|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Wr,ot),ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,oe(Wr,ot),ot|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,oe(Wr,ot),ot|=r;return He(t,e,s,n),e.child}function t0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $c(t,e,n,r,s){var i=st(n)?cr:We.current;return i=ss(e,i),Gr(e,s),n=ad(t,e,n,r,i,s),r=cd(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,cn(t,e,s)):(ce&&r&&Ku(e),e.flags|=1,He(t,e,n,s),e.child)}function Tf(t,e,n,r,s){if(st(n)){var i=!0;Xo(e)}else i=!1;if(Gr(e,s),e.stateNode===null)Po(t,e),Km(e,n,r),Bc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xt(u):(u=st(n)?cr:We.current,u=ss(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&wf(e,o,r,u),yn=!1;var h=e.memoizedState;o.state=h,nl(e,r,o,s),a=e.memoizedState,l!==r||h!==a||rt.current||yn?(typeof f=="function"&&(zc(e,n,f,r),a=e.memoizedState),(l=yn||kf(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:wt(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=xt(a):(a=st(n)?cr:We.current,a=ss(e,a));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&wf(e,o,r,a),yn=!1,h=e.memoizedState,o.state=h,nl(e,r,o,s);var v=e.memoizedState;l!==d||h!==v||rt.current||yn?(typeof g=="function"&&(zc(e,n,g,r),v=e.memoizedState),(u=yn||kf(e,n,u,r,h,v,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Hc(t,e,n,r,i,s)}function Hc(t,e,n,r,s,i){t0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&_f(e,n,!1),cn(t,e,i);r=e.stateNode,n1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,i),e.child=os(e,null,l,i)):He(t,e,l,i),e.memoizedState=r.state,s&&_f(e,n,!0),e.child}function n0(t){var e=t.stateNode;e.pendingContext?ff(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ff(t,e.context,!1),sd(t,e.containerInfo)}function Rf(t,e,n,r,s){return is(),Ju(s),e.flags|=256,He(t,e,n,r),e.child}var Vc={dehydrated:null,treeContext:null,retryLane:0};function Yc(t){return{baseLanes:t,cachePool:null,transitions:null}}function r0(t,e,n){var r=e.pendingProps,s=ue.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),oe(ue,s&1),t===null)return Uc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Yl(o,r,0,null),t=ir(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Yc(n),e.memoizedState=Vc,t):hd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return r1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=On(s,a),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=On(l,i):(i=ir(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Yc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Vc,r}return i=t.child,t=i.sibling,r=On(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function hd(t,e){return e=Yl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function fo(t,e,n,r){return r!==null&&Ju(r),os(e,t.child,null,n),t=hd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ua(Error(P(422))),fo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Yl({mode:"visible",children:r.children},s,0,null),i=ir(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&os(e,t.child,null,o),e.child.memoizedState=Yc(o),e.memoizedState=Vc,i);if(!(e.mode&1))return fo(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(P(419)),r=Ua(i,r,void 0),fo(t,e,o,r)}if(l=(o&t.childLanes)!==0,et||l){if(r=Re,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,an(t,s),Tt(r,t,s,-1))}return yd(),r=Ua(Error(P(421))),fo(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=m1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,lt=Pn(s.nextSibling),ct=e,ce=!0,Nt=null,t!==null&&(_t[pt++]=Kt,_t[pt++]=Xt,_t[pt++]=ur,Kt=t.id,Xt=t.overflow,ur=e),e=hd(e,r.children),e.flags|=4096,e)}function Pf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fc(t.return,e,n)}function Fa(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function s0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(He(t,e,r.children,n),r=ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pf(t,n,e);else if(t.tag===19)Pf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(ue,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Fa(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&rl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Fa(e,!0,n,null,i);break;case"together":Fa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Po(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=On(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=On(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function s1(t,e,n){switch(e.tag){case 3:n0(e),is();break;case 5:Rm(e);break;case 1:st(e.type)&&Xo(e);break;case 4:sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;oe(el,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(ue,ue.current&1),e.flags|=128,null):n&e.child.childLanes?r0(t,e,n):(oe(ue,ue.current&1),t=cn(t,e,n),t!==null?t.sibling:null);oe(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return s0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),oe(ue,ue.current),r)break;return null;case 22:case 23:return e.lanes=0,e0(t,e,n)}return cn(t,e,n)}var i0,Qc,o0,l0;i0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qc=function(){};o0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,tr(zt.current);var i=null;switch(n){case"input":s=pc(t,s),r=pc(t,r),i=[];break;case"select":s=he({},s,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":s=yc(t,s),r=yc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=qo)}xc(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ui.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ui.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&le("scroll",t),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};l0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ls(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ue(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function i1(t,e,n){var r=e.pendingProps;switch(Xu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(e),null;case 1:return st(e.type)&&Ko(),Ue(e),null;case 3:return r=e.stateNode,ls(),ae(rt),ae(We),od(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nt!==null&&(tu(Nt),Nt=null))),Qc(t,e),Ue(e),null;case 5:id(e);var s=tr(ki.current);if(n=e.type,t!==null&&e.stateNode!=null)o0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Ue(e),null}if(t=tr(zt.current),uo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Dt]=e,r[xi]=i,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(s=0;s<Ys.length;s++)le(Ys[s],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Fh(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":Bh(r,i),le("invalid",r)}xc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&co(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&co(r.textContent,l,t),s=["children",""+l]):ui.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":to(r),zh(r,i,!0);break;case"textarea":to(r),Wh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qo)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Op(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[xi]=r,i0(t,e,!1,!1),e.stateNode=t;e:{switch(o=bc(n,r),n){case"dialog":le("cancel",t),le("close",t),s=r;break;case"iframe":case"object":case"embed":le("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ys.length;s++)le(Ys[s],t);s=r;break;case"source":le("error",t),s=r;break;case"img":case"image":case"link":le("error",t),le("load",t),s=r;break;case"details":le("toggle",t),s=r;break;case"input":Fh(t,r),s=pc(t,r),le("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=he({},r,{value:void 0}),le("invalid",t);break;case"textarea":Bh(t,r),s=yc(t,r),le("invalid",t);break;default:s=r}xc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Up(t,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Mp(t,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&di(t,a):typeof a=="number"&&di(t,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ui.hasOwnProperty(i)?a!=null&&i==="onScroll"&&le("scroll",t):a!=null&&Mu(t,i,a,o))}switch(n){case"input":to(t),zh(t,r,!1);break;case"textarea":to(t),Wh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Hr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ue(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=tr(ki.current),tr(zt.current),uo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(i=r.nodeValue!==n)&&(t=ct,t!==null))switch(t.tag){case 3:co(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Ue(e),null;case 13:if(ae(ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&lt!==null&&e.mode&1&&!(e.flags&128))Nm(),is(),e.flags|=98560,i=!1;else if(i=uo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(P(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Dt]=e}else is(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ue(e),i=!1}else Nt!==null&&(tu(Nt),Nt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?ke===0&&(ke=3):yd())),e.updateQueue!==null&&(e.flags|=4),Ue(e),null);case 4:return ls(),Qc(t,e),t===null&&yi(e.stateNode.containerInfo),Ue(e),null;case 10:return td(e.type._context),Ue(e),null;case 17:return st(e.type)&&Ko(),Ue(e),null;case 19:if(ae(ue),i=e.memoizedState,i===null)return Ue(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ls(i,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,Ls(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(ue,ue.current&1|2),e.child}t=t.sibling}i.tail!==null&&ve()>cs&&(e.flags|=128,r=!0,Ls(i,!1),e.lanes=4194304)}else{if(!r)if(t=rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ls(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ce)return Ue(e),null}else 2*ve()-i.renderingStartTime>cs&&n!==1073741824&&(e.flags|=128,r=!0,Ls(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ve(),e.sibling=null,n=ue.current,oe(ue,r?n&1|2:n&1),e):(Ue(e),null);case 22:case 23:return gd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ot&1073741824&&(Ue(e),e.subtreeFlags&6&&(e.flags|=8192)):Ue(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function o1(t,e){switch(Xu(e),e.tag){case 1:return st(e.type)&&Ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ls(),ae(rt),ae(We),od(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return id(e),null;case 13:if(ae(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));is()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(ue),null;case 4:return ls(),null;case 10:return td(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var _o=!1,Be=!1,l1=typeof WeakSet=="function"?WeakSet:Set,O=null;function Br(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Gc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var jf=!1;function a1(t,e){if(Pc=Yo,t=hm(),qu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var g;d!==n||s!==0&&d.nodeType!==3||(l=o+s),d!==i||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===s&&(l=o),h===i&&++f===r&&(a=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Yo=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,m=e.stateNode,_=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:wt(e.type,w),C);m.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(x){_e(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=jf,jf=!1,v}function ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Gc(e,n,i)}s=s.next}while(s!==r)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function a0(t){var e=t.alternate;e!==null&&(t.alternate=null,a0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[xi],delete e[Oc],delete e[Hx],delete e[Vx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qo));else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}function Xc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xc(t,e,n),t=t.sibling;t!==null;)Xc(t,e,n),t=t.sibling}var je=null,Ct=!1;function pn(t,e,n){for(n=n.child;n!==null;)u0(t,e,n),n=n.sibling}function u0(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Be||Br(n,e);case 6:var r=je,s=Ct;je=null,pn(t,e,n),je=r,Ct=s,je!==null&&(Ct?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ct?(t=je,n=n.stateNode,t.nodeType===8?ja(t.parentNode,n):t.nodeType===1&&ja(t,n),pi(t)):ja(je,n.stateNode));break;case 4:r=je,s=Ct,je=n.stateNode.containerInfo,Ct=!0,pn(t,e,n),je=r,Ct=s;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Gc(n,e,o),s=s.next}while(s!==r)}pn(t,e,n);break;case 1:if(!Be&&(Br(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,pn(t,e,n),Be=r):pn(t,e,n);break;default:pn(t,e,n)}}function Lf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l1),e.forEach(function(r){var s=g1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function kt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ct=!1;break e;case 3:je=l.stateNode.containerInfo,Ct=!0;break e;case 4:je=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(je===null)throw Error(P(160));u0(i,o,s),je=null,Ct=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(u){_e(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d0(e,t),e=e.sibling}function d0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kt(e,t),Ot(t),r&4){try{ei(3,t,t.return),Hl(3,t)}catch(w){_e(t,t.return,w)}try{ei(5,t,t.return)}catch(w){_e(t,t.return,w)}}break;case 1:kt(e,t),Ot(t),r&512&&n!==null&&Br(n,n.return);break;case 5:if(kt(e,t),Ot(t),r&512&&n!==null&&Br(n,n.return),t.flags&32){var s=t.stateNode;try{di(s,"")}catch(w){_e(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ap(s,i),bc(l,o);var u=bc(l,i);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?Up(s,d):f==="dangerouslySetInnerHTML"?Mp(s,d):f==="children"?di(s,d):Mu(s,f,d,u)}switch(l){case"input":mc(s,i);break;case"textarea":Lp(s,i);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Hr(s,!!i.multiple,g,!1):h!==!!i.multiple&&(i.defaultValue!=null?Hr(s,!!i.multiple,i.defaultValue,!0):Hr(s,!!i.multiple,i.multiple?[]:"",!1))}s[xi]=i}catch(w){_e(t,t.return,w)}}break;case 6:if(kt(e,t),Ot(t),r&4){if(t.stateNode===null)throw Error(P(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){_e(t,t.return,w)}}break;case 3:if(kt(e,t),Ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(e.containerInfo)}catch(w){_e(t,t.return,w)}break;case 4:kt(e,t),Ot(t);break;case 13:kt(e,t),Ot(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(pd=ve())),r&4&&Lf(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Be=(u=Be)||f,kt(e,t),Be=u):kt(e,t),Ot(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(O=t,f=t.child;f!==null;){for(d=O=f;O!==null;){switch(h=O,g=h.child,h.tag){case 0:case 11:case 14:case 15:ei(4,h,h.return);break;case 1:Br(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){_e(r,n,w)}}break;case 5:Br(h,h.return);break;case 22:if(h.memoizedState!==null){Mf(d);continue}}g!==null?(g.return=h,O=g):Mf(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{s=d.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Dp("display",o))}catch(w){_e(t,t.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){_e(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:kt(e,t),Ot(t),r&4&&Lf(t);break;case 21:break;default:kt(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c0(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(di(s,""),r.flags&=-33);var i=Af(t);Xc(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Af(t);Kc(t,l,o);break;default:throw Error(P(161))}}catch(a){_e(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function c1(t,e,n){O=t,h0(t)}function h0(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var s=O,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||_o;if(!o){var l=s.alternate,a=l!==null&&l.memoizedState!==null||Be;l=_o;var u=Be;if(_o=o,(Be=a)&&!u)for(O=s;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?Df(s):a!==null?(a.return=o,O=a):Df(s);for(;i!==null;)O=i,h0(i),i=i.sibling;O=s,_o=l,Be=u}Of(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,O=i):Of(t)}}function Of(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Be||Hl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Be)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:wt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&vf(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&pi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Be||e.flags&512&&qc(e)}catch(h){_e(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Mf(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Df(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(a){_e(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(a){_e(e,s,a)}}var i=e.return;try{qc(e)}catch(a){_e(e,i,a)}break;case 5:var o=e.return;try{qc(e)}catch(a){_e(e,o,a)}}}catch(a){_e(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var u1=Math.ceil,ol=fn.ReactCurrentDispatcher,fd=fn.ReactCurrentOwner,yt=fn.ReactCurrentBatchConfig,X=0,Re=null,xe=null,Le=0,ot=0,Wr=Vn(0),ke=0,Ei=null,hr=0,Vl=0,_d=0,ti=null,Ze=null,pd=0,cs=1/0,Qt=null,ll=!1,Jc=null,An=null,po=!1,En=null,al=0,ni=0,Zc=null,jo=-1,Ao=0;function Ye(){return X&6?ve():jo!==-1?jo:jo=ve()}function Ln(t){return t.mode&1?X&2&&Le!==0?Le&-Le:Qx.transition!==null?(Ao===0&&(Ao=Kp()),Ao):(t=ee,t!==0||(t=window.event,t=t===void 0?16:rm(t.type)),t):1}function Tt(t,e,n,r){if(50<ni)throw ni=0,Zc=null,Error(P(185));zi(t,n,r),(!(X&2)||t!==Re)&&(t===Re&&(!(X&2)&&(Vl|=n),ke===4&&xn(t,Le)),it(t,r),n===1&&X===0&&!(e.mode&1)&&(cs=ve()+500,Bl&&Yn()))}function it(t,e){var n=t.callbackNode;Qv(t,e);var r=Vo(t,t===Re?Le:0);if(r===0)n!==null&&Vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vh(n),e===1)t.tag===0?Yx(Uf.bind(null,t)):km(Uf.bind(null,t)),Wx(function(){!(X&6)&&Yn()}),n=null;else{switch(Xp(r)){case 1:n=Bu;break;case 4:n=Gp;break;case 16:n=Ho;break;case 536870912:n=qp;break;default:n=Ho}n=x0(n,f0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function f0(t,e){if(jo=-1,Ao=0,X&6)throw Error(P(327));var n=t.callbackNode;if(qr()&&t.callbackNode!==n)return null;var r=Vo(t,t===Re?Le:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var s=X;X|=2;var i=p0();(Re!==t||Le!==e)&&(Qt=null,cs=ve()+500,sr(t,e));do try{f1();break}catch(l){_0(t,l)}while(!0);ed(),ol.current=i,X=s,xe!==null?e=0:(Re=null,Le=0,e=ke)}if(e!==0){if(e===2&&(s=Ec(t),s!==0&&(r=s,e=eu(t,s))),e===1)throw n=Ei,sr(t,0),xn(t,r),it(t,ve()),n;if(e===6)xn(t,r);else{if(s=t.current.alternate,!(r&30)&&!d1(s)&&(e=cl(t,r),e===2&&(i=Ec(t),i!==0&&(r=i,e=eu(t,i))),e===1))throw n=Ei,sr(t,0),xn(t,r),it(t,ve()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Kn(t,Ze,Qt);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=pd+500-ve(),10<e)){if(Vo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Lc(Kn.bind(null,t,Ze,Qt),e);break}Kn(t,Ze,Qt);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-It(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u1(r/1960))-r,10<r){t.timeoutHandle=Lc(Kn.bind(null,t,Ze,Qt),r);break}Kn(t,Ze,Qt);break;case 5:Kn(t,Ze,Qt);break;default:throw Error(P(329))}}}return it(t,ve()),t.callbackNode===n?f0.bind(null,t):null}function eu(t,e){var n=ti;return t.current.memoizedState.isDehydrated&&(sr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=Ze,Ze=n,e!==null&&tu(e)),t}function tu(t){Ze===null?Ze=t:Ze.push.apply(Ze,t)}function d1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!jt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~_d,e&=~Vl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function Uf(t){if(X&6)throw Error(P(327));qr();var e=Vo(t,0);if(!(e&1))return it(t,ve()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=Ec(t);r!==0&&(e=r,n=eu(t,r))}if(n===1)throw n=Ei,sr(t,0),xn(t,e),it(t,ve()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kn(t,Ze,Qt),it(t,ve()),null}function md(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(cs=ve()+500,Bl&&Yn())}}function fr(t){En!==null&&En.tag===0&&!(X&6)&&qr();var e=X;X|=1;var n=yt.transition,r=ee;try{if(yt.transition=null,ee=1,t)return t()}finally{ee=r,yt.transition=n,X=e,!(X&6)&&Yn()}}function gd(){ot=Wr.current,ae(Wr)}function sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Bx(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:ls(),ae(rt),ae(We),od();break;case 5:id(r);break;case 4:ls();break;case 13:ae(ue);break;case 19:ae(ue);break;case 10:td(r.type._context);break;case 22:case 23:gd()}n=n.return}if(Re=t,xe=t=On(t.current,null),Le=ot=e,ke=0,Ei=null,_d=Vl=hr=0,Ze=ti=null,er!==null){for(e=0;e<er.length;e++)if(n=er[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}er=null}return t}function _0(t,e){do{var n=xe;try{if(ed(),To.current=il,sl){for(var r=de.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}sl=!1}if(dr=0,Ee=be=de=null,Zs=!1,wi=0,fd.current=null,n===null||n.return===null){ke=1,Ei=e,xe=null;break}e:{var i=t,o=n.return,l=n,a=e;if(e=Le,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Nf(o);if(g!==null){g.flags&=-257,Ef(g,o,l,i,e),g.mode&1&&Cf(i,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Cf(i,u,e),yd();break e}a=Error(P(426))}}else if(ce&&l.mode&1){var C=Nf(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Ef(C,o,l,i,e),Ju(as(a,l));break e}}i=a=as(a,l),ke!==4&&(ke=2),ti===null?ti=[i]:ti.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var m=Xm(i,a,e);yf(i,m);break e;case 1:l=a;var _=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof _.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(An===null||!An.has(p)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=Jm(i,l,e);yf(i,x);break e}}i=i.return}while(i!==null)}g0(n)}catch(k){e=k,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function p0(){var t=ol.current;return ol.current=il,t===null?il:t}function yd(){(ke===0||ke===3||ke===2)&&(ke=4),Re===null||!(hr&268435455)&&!(Vl&268435455)||xn(Re,Le)}function cl(t,e){var n=X;X|=2;var r=p0();(Re!==t||Le!==e)&&(Qt=null,sr(t,e));do try{h1();break}catch(s){_0(t,s)}while(!0);if(ed(),X=n,ol.current=r,xe!==null)throw Error(P(261));return Re=null,Le=0,ke}function h1(){for(;xe!==null;)m0(xe)}function f1(){for(;xe!==null&&!Uv();)m0(xe)}function m0(t){var e=v0(t.alternate,t,ot);t.memoizedProps=t.pendingProps,e===null?g0(t):xe=e,fd.current=null}function g0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=o1(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,xe=null;return}}else if(n=i1(n,e,ot),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);ke===0&&(ke=5)}function Kn(t,e,n){var r=ee,s=yt.transition;try{yt.transition=null,ee=1,_1(t,e,n,r)}finally{yt.transition=s,ee=r}return null}function _1(t,e,n,r){do qr();while(En!==null);if(X&6)throw Error(P(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Gv(t,i),t===Re&&(xe=Re=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||po||(po=!0,x0(Ho,function(){return qr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=yt.transition,yt.transition=null;var o=ee;ee=1;var l=X;X|=4,fd.current=null,a1(t,n),d0(n,t),Lx(jc),Yo=!!Pc,jc=Pc=null,t.current=n,c1(n),Fv(),X=l,ee=o,yt.transition=i}else t.current=n;if(po&&(po=!1,En=t,al=s),i=t.pendingLanes,i===0&&(An=null),Wv(n.stateNode),it(t,ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ll)throw ll=!1,t=Jc,Jc=null,t;return al&1&&t.tag!==0&&qr(),i=t.pendingLanes,i&1?t===Zc?ni++:(ni=0,Zc=t):ni=0,Yn(),null}function qr(){if(En!==null){var t=Xp(al),e=yt.transition,n=ee;try{if(yt.transition=null,ee=16>t?16:t,En===null)var r=!1;else{if(t=En,En=null,al=0,X&6)throw Error(P(331));var s=X;for(X|=4,O=t.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:ei(8,f,i)}var d=f.child;if(d!==null)d.return=f,O=d;else for(;O!==null;){f=O;var h=f.sibling,g=f.return;if(a0(f),f===u){O=null;break}if(h!==null){h.return=g,O=h;break}O=g}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ei(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,O=m;break e}O=i.return}}var _=t.current;for(O=_;O!==null;){o=O;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,O=p;else e:for(o=_;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hl(9,l)}}catch(k){_e(l,l.return,k)}if(l===o){O=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,O=x;break e}O=l.return}}if(X=s,Yn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Ml,t)}catch{}r=!0}return r}finally{ee=n,yt.transition=e}}return!1}function Ff(t,e,n){e=as(n,e),e=Xm(t,e,1),t=jn(t,e,1),e=Ye(),t!==null&&(zi(t,1,e),it(t,e))}function _e(t,e,n){if(t.tag===3)Ff(t,t,n);else for(;e!==null;){if(e.tag===3){Ff(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){t=as(n,t),t=Jm(e,t,1),e=jn(e,t,1),t=Ye(),e!==null&&(zi(e,1,t),it(e,t));break}}e=e.return}}function p1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Re===t&&(Le&n)===n&&(ke===4||ke===3&&(Le&130023424)===Le&&500>ve()-pd?sr(t,0):_d|=n),it(t,e)}function y0(t,e){e===0&&(t.mode&1?(e=so,so<<=1,!(so&130023424)&&(so=4194304)):e=1);var n=Ye();t=an(t,e),t!==null&&(zi(t,e,n),it(t,n))}function m1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),y0(t,n)}function g1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),y0(t,n)}var v0;v0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,s1(t,e,n);et=!!(t.flags&131072)}else et=!1,ce&&e.flags&1048576&&wm(e,Zo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Po(t,e),t=e.pendingProps;var s=ss(e,We.current);Gr(e,n),s=ad(null,e,r,t,s,n);var i=cd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)?(i=!0,Xo(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,rd(e),s.updater=$l,e.stateNode=s,s._reactInternals=e,Bc(e,r,t,n),e=Hc(null,e,r,!0,i,n)):(e.tag=0,ce&&i&&Ku(e),He(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Po(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=v1(r),t=wt(r,t),s){case 0:e=$c(null,e,r,t,n);break e;case 1:e=Tf(null,e,r,t,n);break e;case 11:e=Sf(null,e,r,t,n);break e;case 14:e=If(null,e,r,wt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wt(r,s),$c(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wt(r,s),Tf(t,e,r,s,n);case 3:e:{if(n0(e),t===null)throw Error(P(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Tm(t,e),nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=as(Error(P(423)),e),e=Rf(t,e,r,n,s);break e}else if(r!==s){s=as(Error(P(424)),e),e=Rf(t,e,r,n,s);break e}else for(lt=Pn(e.stateNode.containerInfo.firstChild),ct=e,ce=!0,Nt=null,n=Sm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(is(),r===s){e=cn(t,e,n);break e}He(t,e,r,n)}e=e.child}return e;case 5:return Rm(e),t===null&&Uc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ac(r,s)?o=null:i!==null&&Ac(r,i)&&(e.flags|=32),t0(t,e),He(t,e,o,n),e.child;case 6:return t===null&&Uc(e),null;case 13:return r0(t,e,n);case 4:return sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):He(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wt(r,s),Sf(t,e,r,s,n);case 7:return He(t,e,e.pendingProps,n),e.child;case 8:return He(t,e,e.pendingProps.children,n),e.child;case 12:return He(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,oe(el,r._currentValue),r._currentValue=o,i!==null)if(jt(i.value,o)){if(i.children===s.children&&!rt.current){e=cn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=rn(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Fc(i.return,n,e),l.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}He(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Gr(e,n),s=xt(s),r=r(s),e.flags|=1,He(t,e,r,n),e.child;case 14:return r=e.type,s=wt(r,e.pendingProps),s=wt(r.type,s),If(t,e,r,s,n);case 15:return Zm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wt(r,s),Po(t,e),e.tag=1,st(r)?(t=!0,Xo(e)):t=!1,Gr(e,n),Km(e,r,s),Bc(e,r,s,n),Hc(null,e,r,!0,t,n);case 19:return s0(t,e,n);case 22:return e0(t,e,n)}throw Error(P(156,e.tag))};function x0(t,e){return Qp(t,e)}function y1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(t,e,n,r){return new y1(t,e,n,r)}function vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v1(t){if(typeof t=="function")return vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uu)return 11;if(t===Fu)return 14}return 2}function On(t,e){var n=t.alternate;return n===null?(n=mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Lo(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jr:return ir(n.children,s,i,e);case Du:o=8,s|=8;break;case dc:return t=mt(12,n,e,s|2),t.elementType=dc,t.lanes=i,t;case hc:return t=mt(13,n,e,s),t.elementType=hc,t.lanes=i,t;case fc:return t=mt(19,n,e,s),t.elementType=fc,t.lanes=i,t;case Rp:return Yl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ip:o=10;break e;case Tp:o=9;break e;case Uu:o=11;break e;case Fu:o=14;break e;case gn:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=mt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ir(t,e,n,r){return t=mt(7,t,r,e),t.lanes=n,t}function Yl(t,e,n,r){return t=mt(22,t,r,e),t.elementType=Rp,t.lanes=n,t.stateNode={isHidden:!1},t}function za(t,e,n){return t=mt(6,t,null,e),t.lanes=n,t}function Ba(t,e,n){return e=mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ba(0),this.expirationTimes=ba(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ba(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function xd(t,e,n,r,s,i,o,l,a){return t=new x1(t,e,n,l,a),e===1?(e=1,i===!0&&(e|=8)):e=0,i=mt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rd(i),t}function b1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function b0(t){if(!t)return zn;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(st(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(st(n))return bm(t,n,e)}return e}function k0(t,e,n,r,s,i,o,l,a){return t=xd(n,r,!0,t,s,i,o,l,a),t.context=b0(null),n=t.current,r=Ye(),s=Ln(n),i=rn(r,s),i.callback=e??null,jn(n,i,s),t.current.lanes=s,zi(t,s,r),it(t,r),t}function Ql(t,e,n,r){var s=e.current,i=Ye(),o=Ln(s);return n=b0(n),e.context===null?e.context=n:e.pendingContext=n,e=rn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=jn(s,e,o),t!==null&&(Tt(t,s,o,i),Io(t,s,o)),o}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bd(t,e){zf(t,e),(t=t.alternate)&&zf(t,e)}function k1(){return null}var w0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kd(t){this._internalRoot=t}Gl.prototype.render=kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Ql(t,e,null,null)};Gl.prototype.unmount=kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fr(function(){Ql(null,t,null,null)}),e[ln]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=em();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&nm(t)}};function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bf(){}function w1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=ul(o);i.call(u)}}var o=k0(e,r,t,0,null,!1,!1,"",Bf);return t._reactRootContainer=o,t[ln]=o.current,yi(t.nodeType===8?t.parentNode:t),fr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=ul(a);l.call(u)}}var a=xd(t,0,!1,null,null,!1,!1,"",Bf);return t._reactRootContainer=a,t[ln]=a.current,yi(t.nodeType===8?t.parentNode:t),fr(function(){Ql(e,a,n,r)}),a}function Kl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var a=ul(o);l.call(a)}}Ql(e,o,t,s)}else o=w1(n,e,t,s,r);return ul(o)}Jp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Vs(e.pendingLanes);n!==0&&(Wu(e,n|1),it(e,ve()),!(X&6)&&(cs=ve()+500,Yn()))}break;case 13:fr(function(){var r=an(t,1);if(r!==null){var s=Ye();Tt(r,t,1,s)}}),bd(t,1)}};$u=function(t){if(t.tag===13){var e=an(t,134217728);if(e!==null){var n=Ye();Tt(e,t,134217728,n)}bd(t,134217728)}};Zp=function(t){if(t.tag===13){var e=Ln(t),n=an(t,e);if(n!==null){var r=Ye();Tt(n,t,e,r)}bd(t,e)}};em=function(){return ee};tm=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};wc=function(t,e,n){switch(e){case"input":if(mc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=zl(r);if(!s)throw Error(P(90));jp(r),mc(r,s)}}}break;case"textarea":Lp(t,n);break;case"select":e=n.value,e!=null&&Hr(t,!!n.multiple,e,!1)}};Bp=md;Wp=fr;var C1={usingClientEntryPoint:!1,Events:[Wi,Mr,zl,Fp,zp,md]},Os={findFiberByHostInstance:Zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N1={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vp(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||k1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ml=mo.inject(N1),Ft=mo}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C1;dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(e))throw Error(P(200));return b1(t,e,null,n)};dt.createRoot=function(t,e){if(!wd(t))throw Error(P(299));var n=!1,r="",s=w0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=xd(t,1,!1,null,null,n,!1,r,s),t[ln]=e.current,yi(t.nodeType===8?t.parentNode:t),new kd(e)};dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=Vp(e),t=t===null?null:t.stateNode,t};dt.flushSync=function(t){return fr(t)};dt.hydrate=function(t,e,n){if(!ql(e))throw Error(P(200));return Kl(null,t,e,!0,n)};dt.hydrateRoot=function(t,e,n){if(!wd(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=w0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k0(e,null,t,1,n??null,s,!1,i,o),t[ln]=e.current,yi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Gl(e)};dt.render=function(t,e,n){if(!ql(e))throw Error(P(200));return Kl(null,t,e,!1,n)};dt.unmountComponentAtNode=function(t){if(!ql(t))throw Error(P(40));return t._reactRootContainer?(fr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};dt.unstable_batchedUpdates=md;dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ql(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Kl(t,e,n,!1,r)};dt.version="18.3.1-next-f1338f8080-20240426";function C0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C0)}catch(t){console.error(t)}}C0(),Cp.exports=dt;var E1=Cp.exports,Wf=E1;cc.createRoot=Wf.createRoot,cc.hydrateRoot=Wf.hydrateRoot;var S1=`svg[fill=none] {
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
}`,I1={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=S1,document.head.appendChild(t))}var re=I1,T1=({size:t=24})=>c.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Wa="__agentation_freeze";function R1(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:e=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Wa]||(t[Wa]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Wa]}var Pe=R1();typeof window<"u"&&!Pe.installed&&(Pe.origSetTimeout=window.setTimeout.bind(window),Pe.origSetInterval=window.setInterval.bind(window),Pe.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,e,...n)=>typeof t=="string"?Pe.origSetTimeout(t,e):Pe.origSetTimeout((...r)=>{Pe.frozen?Pe.frozenTimeoutQueue.push(()=>t(...r)):t(...r)},e,...n),window.setInterval=(t,e,...n)=>typeof t=="string"?Pe.origSetInterval(t,e):Pe.origSetInterval((...r)=>{Pe.frozen||t(...r)},e,...n),window.requestAnimationFrame=t=>Pe.origRAF(e=>{Pe.frozen?Pe.frozenRAFQueue.push(t):t(e)}),Pe.installed=!0);var Tr=Pe.origSetTimeout;Pe.origSetInterval;N.forwardRef(function({element:e,timestamp:n,selectedText:r,placeholder:s="What should change?",initialValue:i="",submitLabel:o="Add",onSubmit:l,onCancel:a,onDelete:u,style:f,accentColor:d="#3c82f7",isExiting:h=!1,lightMode:g=!1,computedStyles:v},w){const[C,m]=N.useState(i),[_,p]=N.useState(!1),[x,k]=N.useState("initial"),[E,I]=N.useState(!1),[T,U]=N.useState(!1),y=N.useRef(null),b=N.useRef(null),S=N.useRef(null),z=N.useRef(null);N.useEffect(()=>{h&&x!=="exit"&&k("exit")},[h,x]),N.useEffect(()=>{Tr(()=>{k("enter")},0);const R=Tr(()=>{k("entered")},200),L=Tr(()=>{const D=y.current;D&&(D.focus(),D.selectionStart=D.selectionEnd=D.value.length,D.scrollTop=D.scrollHeight)},50);return()=>{clearTimeout(R),clearTimeout(L),S.current&&clearTimeout(S.current),z.current&&clearTimeout(z.current)}},[]);const K=N.useCallback(()=>{z.current&&clearTimeout(z.current),p(!0),z.current=Tr(()=>{var R;p(!1),(R=y.current)==null||R.focus()},250)},[]);N.useImperativeHandle(w,()=>({shake:K}),[K]);const V=N.useCallback(()=>{k("exit"),S.current=Tr(()=>{a()},150)},[a]),fe=N.useCallback(()=>{C.trim()&&l(C.trim())},[C,l]),ft=N.useCallback(R=>{R.nativeEvent.isComposing||(R.key==="Enter"&&!R.shiftKey&&(R.preventDefault(),fe()),R.key==="Escape"&&V())},[fe,V]),A=[re.popup,g?re.light:"",x==="enter"?re.enter:"",x==="entered"?re.entered:"",x==="exit"?re.exit:"",_?re.shake:""].filter(Boolean).join(" ");return c.jsxs("div",{ref:b,className:A,"data-annotation-popup":!0,style:f,onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:re.header,children:[v&&Object.keys(v).length>0?c.jsxs("button",{className:re.headerToggle,onClick:()=>{const R=T;U(!T),R&&Tr(()=>{var L;return(L=y.current)==null?void 0:L.focus()},0)},type:"button",children:[c.jsx("svg",{className:`${re.chevron} ${T?re.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),c.jsx("span",{className:re.element,children:e})]}):c.jsx("span",{className:re.element,children:e}),n&&c.jsx("span",{className:re.timestamp,children:n})]}),v&&Object.keys(v).length>0&&c.jsx("div",{className:`${re.stylesWrapper} ${T?re.expanded:""}`,children:c.jsx("div",{className:re.stylesInner,children:c.jsx("div",{className:re.stylesBlock,children:Object.entries(v).map(([R,L])=>c.jsxs("div",{className:re.styleLine,children:[c.jsx("span",{className:re.styleProperty,children:R.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",c.jsx("span",{className:re.styleValue,children:L}),";"]},R))})})}),r&&c.jsxs("div",{className:re.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),c.jsx("textarea",{ref:y,className:re.textarea,style:{borderColor:E?d:void 0},placeholder:s,value:C,onChange:R=>m(R.target.value),onFocus:()=>I(!0),onBlur:()=>I(!1),rows:2,onKeyDown:ft}),c.jsxs("div",{className:re.actions,children:[u&&c.jsx("div",{className:re.deleteWrapper,children:c.jsx("button",{className:re.deleteButton,onClick:u,type:"button",children:c.jsx(T1,{size:22})})}),c.jsx("button",{className:re.cancel,onClick:V,children:"Cancel"}),c.jsx("button",{className:re.submit,style:{backgroundColor:d,opacity:C.trim()?1:.4},onClick:fe,disabled:!C.trim(),children:o})]})]})});var P1=`svg[fill=none] {
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
}`;if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=P1,document.head.appendChild(t))}var $f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw xs(e)},xs=function(t){return new Error("Firebase Database ("+N0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},j1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,f=i>>2,d=(i&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[f],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):j1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||d==null)throw new A1;const h=i<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S0=function(t){const e=E0(t);return Cd.encodeByteArray(e,!0)},dl=function(t){return S0(t).replace(/\./g,"")},hl=function(t){try{return Cd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L1(t){return I0(void 0,t)}function I0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!O1(n)||(t[n]=I0(t[n],e[n]));return t}function O1(t){return t!=="__proto__"}/**
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
 */function M1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const D1=()=>M1().__FIREBASE_DEFAULTS__,U1=()=>{if(typeof process>"u"||typeof $f>"u")return;const t=$f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},F1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hl(t[1]);return e&&JSON.parse(e)},Nd=()=>{try{return D1()||U1()||F1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T0=t=>{var e,n;return(n=(e=Nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},R0=t=>{const e=T0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P0=()=>{var t;return(t=Nd())===null||t===void 0?void 0:t.config},j0=t=>{var e;return(e=Nd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function A0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ed(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function z1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function B1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function L0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W1(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $1(){return N0.NODE_ADMIN===!0}function H1(){try{return typeof indexedDB=="object"}catch{return!1}}function V1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Y1,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vi.prototype.create)}}class Vi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Q1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new _n(s,l,r)}}function Q1(t,e){return t.replace(G1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const G1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const O0=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Si(hl(i[0])||""),n=Si(hl(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},q1=function(t){const e=O0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},K1=function(t){const e=O0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function us(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fl(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Hf(i)&&Hf(o)){if(!_l(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Hf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let d=0;d<80;d++){d<40?d<20?(u=l^i&(o^l),f=1518500249):(u=i^o^l,f=1859775393):d<60?(u=i&o|l&(i|o),f=2400959708):(u=i^o^l,f=3395469782);const h=(s<<5|s>>>27)+u+a+f+r[d]&4294967295;a=l,l=o,o=(i<<30|i>>>2)&4294967295,i=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function J1(t,e){const n=new Z1(t,e);return n.subscribe.bind(n)}class Z1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}function Xl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,j(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Hi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sb(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===Xn?void 0:t}function sb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const ob={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},lb=te.INFO,ab={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},cb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ab[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=lb,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const ub=(t,e)=>e.some(n=>t instanceof n);let Vf,Yf;function db(){return Vf||(Vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hb(){return Yf||(Yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const M0=new WeakMap,ru=new WeakMap,D0=new WeakMap,Ha=new WeakMap,Id=new WeakMap;function fb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&M0.set(n,t)}).catch(()=>{}),Id.set(e,t),e}function _b(t){if(ru.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ru.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pb(t){su=t(su)}function mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Va(this),e,...n);return D0.set(r,e.sort?e.sort():[e]),Mn(r)}:hb().includes(t)?function(...e){return t.apply(Va(this),e),Mn(M0.get(this))}:function(...e){return Mn(t.apply(Va(this),e))}}function gb(t){return typeof t=="function"?mb(t):(t instanceof IDBTransaction&&_b(t),ub(t,db())?new Proxy(t,su):t)}function Mn(t){if(t instanceof IDBRequest)return fb(t);if(Ha.has(t))return Ha.get(t);const e=gb(t);return e!==t&&(Ha.set(t,e),Id.set(e,t)),e}const Va=t=>Id.get(t);function yb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Mn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Mn(o.result),a.oldVersion,a.newVersion,Mn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vb=["get","getKey","getAll","getAllKeys","count"],xb=["put","add","delete","clear"],Ya=new Map;function Qf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ya.get(e))return Ya.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vb.includes(n)))return;const i=async function(o,...l){const a=this.transaction(o,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&a.done]))[0]};return Ya.set(e,i),i}pb(t=>({...t,get:(e,n,r)=>Qf(e,n)||t.get(e,n,r),has:(e,n)=>!!Qf(e,n)||t.has(e,n)}));/**
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
 */class bb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",Gf="0.10.13";/**
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
 */const un=new Sd("@firebase/app"),wb="@firebase/app-compat",Cb="@firebase/analytics-compat",Nb="@firebase/analytics",Eb="@firebase/app-check-compat",Sb="@firebase/app-check",Ib="@firebase/auth",Tb="@firebase/auth-compat",Rb="@firebase/database",Pb="@firebase/data-connect",jb="@firebase/database-compat",Ab="@firebase/functions",Lb="@firebase/functions-compat",Ob="@firebase/installations",Mb="@firebase/installations-compat",Db="@firebase/messaging",Ub="@firebase/messaging-compat",Fb="@firebase/performance",zb="@firebase/performance-compat",Bb="@firebase/remote-config",Wb="@firebase/remote-config-compat",$b="@firebase/storage",Hb="@firebase/storage-compat",Vb="@firebase/firestore",Yb="@firebase/vertexai-preview",Qb="@firebase/firestore-compat",Gb="firebase",qb="10.14.1";/**
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
 */const ou="[DEFAULT]",Kb={[iu]:"fire-core",[wb]:"fire-core-compat",[Nb]:"fire-analytics",[Cb]:"fire-analytics-compat",[Sb]:"fire-app-check",[Eb]:"fire-app-check-compat",[Ib]:"fire-auth",[Tb]:"fire-auth-compat",[Rb]:"fire-rtdb",[Pb]:"fire-data-connect",[jb]:"fire-rtdb-compat",[Ab]:"fire-fn",[Lb]:"fire-fn-compat",[Ob]:"fire-iid",[Mb]:"fire-iid-compat",[Db]:"fire-fcm",[Ub]:"fire-fcm-compat",[Fb]:"fire-perf",[zb]:"fire-perf-compat",[Bb]:"fire-rc",[Wb]:"fire-rc-compat",[$b]:"fire-gcs",[Hb]:"fire-gcs-compat",[Vb]:"fire-fst",[Qb]:"fire-fst-compat",[Yb]:"fire-vertex","fire-js":"fire-js",[Gb]:"fire-js-all"};/**
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
 */const pl=new Map,Xb=new Map,lu=new Map;function qf(t,e){try{t.container.addComponent(e)}catch(n){un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(lu.has(e))return un.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of pl.values())qf(n,t);for(const n of Xb.values())qf(n,t);return!0}function Zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const Jb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new Vi("app","Firebase",Jb);/**
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
 */class Zb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=qb;function U0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dn.create("bad-app-name",{appName:String(s)});if(n||(n=P0()),!n)throw Dn.create("no-options");const i=pl.get(s);if(i){if(_l(n,i.options)&&_l(r,i.config))return i;throw Dn.create("duplicate-app",{appName:s})}const o=new ib(s);for(const a of lu.values())o.addComponent(a);const l=new Zb(n,r,o);return pl.set(s,l),l}function Td(t=ou){const e=pl.get(t);if(!e&&t===ou&&P0())return U0();if(!e)throw Dn.create("no-app",{appName:t});return e}function Bt(t,e,n){var r;let s=(r=Kb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),un.warn(l.join(" "));return}_r(new Bn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ek="firebase-heartbeat-database",tk=1,Ii="firebase-heartbeat-store";let Qa=null;function F0(){return Qa||(Qa=yb(ek,tk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),Qa}async function nk(t){try{const n=(await F0()).transaction(Ii),r=await n.objectStore(Ii).get(z0(t));return await n.done,r}catch(e){if(e instanceof _n)un.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});un.warn(n.message)}}}async function Kf(t,e){try{const r=(await F0()).transaction(Ii,"readwrite");await r.objectStore(Ii).put(e,z0(t)),await r.done}catch(n){if(n instanceof _n)un.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});un.warn(r.message)}}}function z0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rk=1024,sk=30*24*60*60*1e3;class ik{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=sk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){un.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xf(),{heartbeatsToSend:r,unsentEntries:s}=ok(this._heartbeatsCache.heartbeats),i=dl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return un.warn(n),""}}}function Xf(){return new Date().toISOString().substring(0,10)}function ok(t,e=rk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Jf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H1()?V1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jf(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ak(t){_r(new Bn("platform-logger",e=>new bb(e),"PRIVATE")),_r(new Bn("heartbeat",e=>new ik(e),"PRIVATE")),Bt(iu,Gf,t),Bt(iu,Gf,"esm2017"),Bt("fire-js","")}ak("");function Rd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function B0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=B0,W0=new Vi("auth","Firebase",B0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Sd("@firebase/auth");function uk(t,...e){ml.logLevel<=te.WARN&&ml.warn(`Auth (${wr}): ${t}`,...e)}function Oo(t,...e){ml.logLevel<=te.ERROR&&ml.error(`Auth (${wr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t,...e){throw jd(t,...e)}function Rt(t,...e){return jd(t,...e)}function Pd(t,e,n){const r=Object.assign(Object.assign({},ck()),{[e]:n});return new Vi("auth","Firebase",r).create(e,{appName:t.name})}function or(t){return Pd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&$t(t,"argument-error"),Pd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return W0.create(t,...e)}function $(t,e,...n){if(!t)throw jd(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Oo(e),new Error(e)}function dn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hk(){return Zf()==="http:"||Zf()==="https:"}function Zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hk()||B1()||"connection"in navigator)?navigator.onLine:!0}function _k(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ed()||L0()}get(){return fk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new Yi(3e4,6e4);function Ld(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,r,s={}){return H0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=bs(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},i);return z1()||(u.referrerPolicy="no-referrer"),$0.fetch()(V0(t,t.config.apiHost,n,l),u)})}async function H0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pk),e);try{const s=new yk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw go(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pd(t,f,u);$t(t,f)}}catch(s){if(s instanceof _n)throw s;$t(t,"network-request-failed",{message:String(s)})}}async function gk(t,e,n,r,s={}){const i=await ks(t,e,n,r,s);return"mfaPendingCredential"in i&&$t(t,"multi-factor-auth-required",{_serverResponse:i}),i}function V0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ad(t.config,s):`${t.config.apiScheme}://${s}`}class yk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),mk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Rt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function Y0(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xk(t,e=!1){const n=we(t),r=await n.getIdToken(e),s=Od(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(Ga(s.auth_time)),issuedAtTime:ri(Ga(s.iat)),expirationTime:ri(Ga(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ga(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const s=hl(n);return s?JSON.parse(s):(Oo("Failed to decode base64 JWT payload"),null)}catch(s){return Oo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function e_(t){const e=Od(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&bk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function bk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ti(t,Y0(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Q0(i.providerUserInfo):[],l=Ck(t.providerData,o),a=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=a?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new cu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function wk(t){const e=we(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ck(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Q0(t){return t.map(e=>{var{providerId:n}=e,r=Rd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(t,e){const n=await H0(t,{},async()=>{const r=bs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=V0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ek(t,e){return ks(t,"POST","/v2/accounts:revokeToken",Ld(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):e_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=e_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Nk(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Kr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class en{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Rd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new cu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xk(this,e)}reload(){return wk(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new en(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await Ti(this,vk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,a,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:x,isAnonymous:k,providerData:E,stsTokenManager:I}=n;$(p&&I,e,"internal-error");const T=Kr.fromJSON(this.name,I);$(typeof p=="string",e,"internal-error"),mn(d,e.name),mn(h,e.name),$(typeof x=="boolean",e,"internal-error"),$(typeof k=="boolean",e,"internal-error"),mn(g,e.name),mn(v,e.name),mn(w,e.name),mn(C,e.name),mn(m,e.name),mn(_,e.name);const U=new en({uid:p,auth:e,email:h,emailVerified:x,displayName:d,isAnonymous:k,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:T,createdAt:m,lastLoginAt:_});return E&&Array.isArray(E)&&(U.providerData=E.map(y=>Object.assign({},y))),C&&(U._redirectEventId=C),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new Kr;s.updateFromServerResponse(n);const i=new en({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Q0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Kr;l.updateFromIdToken(r);const a=new en({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new cu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new Map;function tn(t){dn(t instanceof Function,"Expected a class definition");let e=t_.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,t_.set(t,e),e)}/**
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
 */class G0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}G0.type="NONE";const n_=G0;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?en._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(tn(n_),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||tn(n_);const o=Mo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const d=en._fromJSON(e,f);u!==i&&(l=d),i=u;break}}catch{}const a=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Xr(i,e,r):(i=a[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Xr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eg(e))return"Blackberry";if(tg(e))return"Webos";if(K0(e))return"Safari";if((e.includes("chrome/")||X0(e))&&!e.includes("edge/"))return"Chrome";if(Z0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q0(t=Ge()){return/firefox\//i.test(t)}function K0(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X0(t=Ge()){return/crios\//i.test(t)}function J0(t=Ge()){return/iemobile/i.test(t)}function Z0(t=Ge()){return/android/i.test(t)}function eg(t=Ge()){return/blackberry/i.test(t)}function tg(t=Ge()){return/webos/i.test(t)}function Md(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sk(t=Ge()){var e;return Md(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ik(){return W1()&&document.documentMode===10}function ng(t=Ge()){return Md(t)||Z0(t)||tg(t)||eg(t)||/windows phone/i.test(t)||J0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e=[]){let n;switch(t){case"Browser":n=r_(Ge());break;case"Worker":n=`${r_(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class Tk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const a=e(i);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Rk(t,e={}){return ks(t,"GET","/v2/passwordPolicy",Ld(t,e))}/**
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
 */const Pk=6;class jk{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new s_(this),this.idTokenSubscription=new s_(this),this.beforeStateQueue=new Tk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Y0(this,{idToken:e}),r=await en._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(or(this));const n=e?we(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rk(this),n=new jk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ek(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(t){return we(t)}class s_{constructor(e){this.auth=e,this.observer=null,this.addObserver=J1(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(t){Dd=t}function Ok(t){return Dd.loadJS(t)}function Mk(){return Dd.gapiScript}function Dk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t,e){const n=Zl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_l(i,e??{}))return s;$t(s,"already-initialized")}return n.initialize({options:e})}function Fk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zk(t,e,n){const r=ea(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sg(e),{host:o,port:l}=Bk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Wk()}function sg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bk(t){const e=sg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:i_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:i_(o)}}}function i_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t,e){return gk(t,"POST","/v1/accounts:signInWithIdp",Ld(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k="http://localhost";class pr extends ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Rd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new pr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jr(e,n)}buildRequest(){const e={requestUri:$k,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Qi{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qt.credential(n,r)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Qi{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.GITHUB_SIGN_IN_METHOD="github.com";kn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await en._fromIdTokenResponse(e,r,s),o=o_(r);return new ds({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=o_(r);return new ds({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function o_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yl(e,n,r,s)}}function og(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,i,e,r):i})}async function Hk(t,e,n=!1){const r=await Ti(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
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
 */async function Vk(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await Ti(t,og(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Od(i.idToken);$(o,r,"internal-error");const{sub:l}=o;return $(t.uid===l,r,"user-mismatch"),ds._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$t(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yk(t,e,n=!1){if(Jt(t.app))return Promise.reject(or(t));const r="signIn",s=await og(t,r,e),i=await ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Qk(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function Gk(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function qk(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function Kk(t){return we(t).signOut()}const vl="__sak";/**
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
 */class lg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vl,"1"),this.storage.removeItem(vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=1e3,Jk=10;class ag extends lg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ik()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jk):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ag.type="LOCAL";const Zk=ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg extends lg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cg.type="SESSION";const ug=cg;/**
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
 */function ew(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),a=await ew(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,a)=>{const u=Fd("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(h.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function nw(t){Wt().location.href=t}/**
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
 */function dg(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function rw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sw(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iw(){return dg()?self:null}/**
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
 */const hg="firebaseLocalStorageDb",ow=1,xl="firebaseLocalStorage",fg="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([xl],e?"readwrite":"readonly").objectStore(xl)}function lw(){const t=indexedDB.deleteDatabase(hg);return new Gi(t).toPromise()}function uu(){const t=indexedDB.open(hg,ow);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xl,{keyPath:fg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xl)?e(r):(r.close(),await lw(),e(await uu()))})})}async function l_(t,e,n){const r=na(t,!0).put({[fg]:e,value:n});return new Gi(r).toPromise()}async function aw(t,e){const n=na(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function a_(t,e){const n=na(t,!0).delete(e);return new Gi(n).toPromise()}const cw=800,uw=3;class _g{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(iw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rw(),!this.activeServiceWorker)return;this.sender=new tw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uu();return await l_(e,vl,"1"),await a_(e,vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>l_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>a_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=na(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_g.type="LOCAL";const dw=_g;new Yi(3e4,6e4);/**
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
 */function pg(t,e){return e?tn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zd extends ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hw(t){return Yk(t.auth,new zd(t),t.bypassAuthState)}function fw(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Vk(n,new zd(t),t.bypassAuthState)}async function _w(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Hk(n,new zd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hw;case"linkViaPopup":case"linkViaRedirect":return _w;case"reauthViaPopup":case"reauthViaRedirect":return fw;default:$t(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=new Yi(2e3,1e4);async function mw(t,e,n){if(Jt(t.app))return Promise.reject(Rt(t,"operation-not-supported-in-this-environment"));const r=ea(t);dk(t,e,Ud);const s=pg(r,n);return new nr(r,"signInViaPopup",e,s).executeNotNull()}class nr extends mg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pw.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="pendingRedirect",Do=new Map;class yw extends mg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Do.get(this.auth._key());if(!e){try{const r=await vw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Do.set(this.auth._key(),e)}return this.bypassAuthState||Do.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vw(t,e){const n=kw(e),r=bw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xw(t,e){Do.set(t._key(),e)}function bw(t){return tn(t._redirectPersistence)}function kw(t){return Mo(gw,t.config.apiKey,t.name)}async function ww(t,e,n=!1){if(Jt(t.app))return Promise.reject(or(t));const r=ea(t),s=pg(r,e),o=await new yw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=10*60*1e3;class Nw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cw&&this.cachedEventUids.clear(),this.cachedEventUids.has(c_(e))}saveEventToCache(e){this.cachedEventUids.add(c_(e)),this.lastProcessedEventTime=Date.now()}}function c_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Rw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sw(t);for(const n of e)try{if(Pw(n))return}catch{}$t(t,"unauthorized-domain")}function Pw(t){const e=au(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tw.test(n))return!1;if(Iw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jw=new Yi(3e4,6e4);function u_(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Aw(t){return new Promise((e,n)=>{var r,s,i;function o(){u_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{u_(),n(Rt(t,"network-request-failed"))},timeout:jw.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const l=Dk("iframefcb");return Wt()[l]=()=>{gapi.load?o():n(Rt(t,"network-request-failed"))},Ok(`${Mk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Uo=null,e})}let Uo=null;function Lw(t){return Uo=Uo||Aw(t),Uo}/**
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
 */const Ow=new Yi(5e3,15e3),Mw="__/auth/iframe",Dw="emulator/auth/iframe",Uw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zw(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ad(e,Dw):`https://${t.config.authDomain}/${Mw}`,r={apiKey:e.apiKey,appName:t.name,v:wr},s=Fw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bs(r).slice(1)}`}async function Bw(t){const e=await Lw(t),n=Wt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:zw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Uw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=Wt().setTimeout(()=>{i(o)},Ow.get());function a(){Wt().clearTimeout(l),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Ww={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$w=500,Hw=600,Vw="_blank",Yw="http://localhost";class d_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qw(t,e,n,r=$w,s=Hw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},Ww),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ge().toLowerCase();n&&(l=X0(u)?Vw:n),q0(u)&&(e=e||Yw,a.scrollbars="yes");const f=Object.entries(a).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(Sk(u)&&l!=="_self")return Gw(e||"",l),new d_(null);const d=window.open(e||"",l,f);$(d,t,"popup-blocked");try{d.focus()}catch{}return new d_(d)}function Gw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qw="__/auth/handler",Kw="emulator/auth/handler",Xw=encodeURIComponent("fac");async function h_(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:s};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Qi){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),u=a?`#${Xw}=${encodeURIComponent(a)}`:"";return`${Jw(t)}?${bs(l).slice(1)}${u}`}function Jw({config:t}){return t.emulator?Ad(t,Kw):`https://${t.authDomain}/${qw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="webStorageSupport";class Zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ug,this._completeRedirectFn=ww,this._overrideRedirectResult=xw}async _openPopup(e,n,r,s){var i;dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await h_(e,n,r,au(),s);return Qw(e,o,Fd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await h_(e,n,r,au(),s);return nw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Bw(e),r=new Nw(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qa,{type:qa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qa];o!==void 0&&n(!!o),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ng()||K0()||Md()}}const e2=Zw;var f_="@firebase/auth",__="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function r2(t){_r(new Bn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rg(t)},u=new Ak(r,s,i,a);return Fk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_r(new Bn("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(r=>new t2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(f_,__,n2(t)),Bt(f_,__,"esm2017")}/**
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
 */const s2=5*60,i2=j0("authIdTokenMaxAge")||s2;let p_=null;const o2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>i2)return;const s=n==null?void 0:n.token;p_!==s&&(p_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function l2(t=Td()){const e=Zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Uk(t,{popupRedirectResolver:e2,persistence:[dw,Zk,ug]}),r=j0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=o2(i.toString());Gk(n,o,()=>o(n.currentUser)),Qk(n,l=>o(l))}}const s=T0("auth");return s&&zk(n,`http://${s}`),n}function a2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Rt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",a2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});r2("Browser");var m_={};const g_="@firebase/database",y_="1.0.8";/**
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
 */let yg="";function c2(t){yg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Si(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new u2(e)}}catch{}return new d2},rr=vg("localStorage"),h2=vg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new Sd("@firebase/database"),f2=function(){let t=1;return function(){return t++}}(),xg=function(t){const e=tb(t),n=new X1;n.update(e);const r=n.digest();return Cd.encodeByteArray(r)},qi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qi.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let si=null,v_=!0;const _2=function(t,e){j(!0,"Can't turn on custom loggers persistently."),Zr.logLevel=te.VERBOSE,si=Zr.log.bind(Zr)},Ae=function(...t){if(v_===!0&&(v_=!1,si===null&&h2.get("logging_enabled")===!0&&_2()),si){const e=qi.apply(null,t);si(e)}},Ki=function(t){return function(...e){Ae(t,...e)}},du=function(...t){const e="FIREBASE INTERNAL ERROR: "+qi(...t);Zr.error(e)},hn=function(...t){const e=`FIREBASE FATAL ERROR: ${qi(...t)}`;throw Zr.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+qi(...t);Zr.warn(e)},p2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},m2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hs="[MIN_NAME]",mr="[MAX_NAME]",Cr=function(t,e){if(t===e)return 0;if(t===hs||e===mr)return-1;if(e===hs||t===mr)return 1;{const n=x_(t),r=x_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},g2=function(t,e){return t===e?0:t<e?-1:1},Ms=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Wd=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=Wd(t[e[r]]);return n+="}",n},bg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kg=function(t){j(!Bd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,l,a;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const f=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(f.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},y2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},v2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function x2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const b2=new RegExp("^-?(0*)\\d{1,10}$"),k2=-2147483648,w2=2147483647,x_=function(t){if(b2.test(t)){const e=Number(t);if(e>=k2&&e<=w2)return e}return null},ws=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},C2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ii=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class N2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class Fo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="5",wg="v",Cg="s",Ng="r",Eg="f",Sg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ig="ls",Tg="p",hu="ac",Rg="websocket",Pg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n,r,s,i=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function S2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ag(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let r;if(e===Rg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Pg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);S2(t)&&(n.ns=t.namespace);const s=[];return Me(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(){this.counters_={}}incrementCounter(e,n=1){Ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return L1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka={},Xa={};function Hd(t){const e=t.toString();return Ka[e]||(Ka[e]=new I2),Ka[e]}function T2(t,e){const n=t.toString();return Xa[n]||(Xa[n]=e()),Xa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ws(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="start",P2="close",j2="pLPCommand",A2="pRTLPCB",Lg="id",Og="pw",Mg="ser",L2="cb",O2="seg",M2="ts",D2="d",U2="dframe",Dg=1870,Ug=30,F2=Dg-Ug,z2=25e3,B2=3e4;class $r{constructor(e,n,r,s,i,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ki(e),this.stats_=Hd(n),this.urlFn=a=>(this.appCheckToken&&(a[hu]=this.appCheckToken),Ag(n,Pg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new R2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(B2)),m2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...i)=>{const[o,l,a,u,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===b_)this.id=l,this.password=a;else if(o===P2)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,l]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[b_]="t",r[Mg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[L2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wg]=$d,this.transportSessionId&&(r[Cg]=this.transportSessionId),this.lastSessionId&&(r[Ig]=this.lastSessionId),this.applicationId&&(r[Tg]=this.applicationId),this.appCheckToken&&(r[hu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(r[Ng]=Eg);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$r.forceAllow_=!0}static forceDisallow(){$r.forceDisallow_=!0}static isAvailable(){return $r.forceAllow_?!0:!$r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!y2()&&!v2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S0(n),s=bg(r,F2);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[U2]="t",r[Lg]=e,r[Og]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vd{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=f2(),window[j2+this.uniqueCallbackIdentifier]=e,window[A2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Lg]=this.myID,e[Og]=this.myPW,e[Mg]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ug+r.length<=Dg;){const o=this.pendingSegs.shift();r=r+"&"+O2+s+"="+o.seg+"&"+M2+s+"="+o.ts+"&"+D2+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(z2)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W2=16384,$2=45e3;let bl=null;typeof MozWebSocket<"u"?bl=MozWebSocket:typeof WebSocket<"u"&&(bl=WebSocket);class Et{constructor(e,n,r,s,i,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ki(this.connId),this.stats_=Hd(n),this.connURL=Et.connectionURL_(n,o,l,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[wg]=$d,typeof location<"u"&&location.hostname&&Sg.test(location.hostname)&&(o[Ng]=Eg),n&&(o[Cg]=n),r&&(o[Ig]=r),s&&(o[hu]=s),i&&(o[Tg]=i),Ag(e,Rg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rr.set("previous_websocket_failure",!0);try{let r;$1(),this.mySock=new bl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bl!==null&&!Et.forceDisallow_}static previouslyFailed(){return rr.isInMemoryStorage||rr.get("previous_websocket_failure")===!0}markConnectionHealthy(){rr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Si(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bg(n,W2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Et.responsesRequiredToBeHealthy=2;Et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$r,Et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Et&&Et.isAvailable();let r=n&&!Et.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Et];else{const s=this.transports_=[];for(const i of Ri.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ri.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=6e4,V2=5e3,Y2=10*1024,Q2=100*1024,Ja="t",k_="d",G2="s",w_="r",q2="e",C_="o",N_="a",E_="n",S_="p",K2="h";class X2{constructor(e,n,r,s,i,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ki("c:"+this.id+":"),this.transportManager_=new Ri(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ii(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Q2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Y2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ja in e){const n=e[Ja];n===N_?this.upgradeIfSecondaryHealthy_():n===w_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===C_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ms("t",e),r=Ms("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:S_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:N_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:E_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ms("t",e),r=Ms("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ms(Ja,e);if(k_ in e){const r=e[k_];if(n===K2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===E_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===G2?this.onConnectionShutdown_(r):n===w_?this.onReset_(r):n===q2?du("Server Error: "+r):n===C_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):du("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$d!==r&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ii(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(H2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ii(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(V2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:S_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl extends zg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ed()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new kl}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=32,T_=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function Yd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function J2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Pi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Bg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ne(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function tt(t,e){const n=Y(t),r=Y(e);if(n===null)return e;if(n===r)return tt(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Z2(t,e){const n=Pi(t,0),r=Pi(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Cr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Qd(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class eC{constructor(e,n){this.errorPrefix_=n,this.parts_=Pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Jl(this.parts_[r]);Wg(this)}}function tC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Jl(e),Wg(t)}function nC(t){const e=t.parts_.pop();t.byteLength_-=Jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Wg(t){if(t.byteLength_>T_)throw new Error(t.errorPrefix_+"has a key path longer than "+T_+" bytes ("+t.byteLength_+").");if(t.parts_.length>I_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+I_+") or object contains a cycle "+Jn(t))}function Jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd extends zg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Gd}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e3,rC=60*5*1e3,R_=30*1e3,sC=1.3,iC=3e4,oC="server_kill",P_=3;class sn extends Fg{constructor(e,n,r,s,i,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=sn.nextPersistentConnectionId_++,this.log_=Ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ds,this.maxReconnectDelay_=rC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Gd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Te(i)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Hi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,l=>{const a=l.d,u=l.s;sn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ht(e,"w")){const r=us(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||K1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=R_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=q1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):du("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>iC&&(this.reconnectDelay_=Ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+sn.nextConnectionId_++,i=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){j(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new X2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Qe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(oC)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Qe(d),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nu(this.interruptReasons_)&&(this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Wd(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ne(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P_&&(this.reconnectDelay_=R_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yg.replace(/\./g,"-")]=1,Ed()?e["framework.cordova"]=1:L0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kl.getInstance().currentlyOnline();return nu(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(hs,e),s=new Q(hs,n);return this.compare(r,s)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;class $g extends ra{static get __EMPTY_NODE(){return yo}static set __EMPTY_NODE(e){yo=e}compare(e,n){return Cr(e.name,n.name)}isDefinedOn(e){throw xs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(mr,yo)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,yo)}toString(){return".key"}}const es=new $g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Se{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Se.RED,this.left=s??nt.EMPTY_NODE,this.right=i??nt.EMPTY_NODE}copy(e,n,r,s,i){return new Se(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return nt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return nt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Se.RED=!0;Se.BLACK=!1;class lC{copy(e,n,r,s,i){return this}insert(e,n,r){return new Se(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class nt{constructor(e,n=nt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new nt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Se.BLACK,null,null))}remove(e){return new nt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Se.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vo(this.root_,null,this.comparator_,!0,e)}}nt.EMPTY_NODE=new lC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aC(t,e){return Cr(t.name,e.name)}function qd(t,e){return Cr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu;function cC(t){fu=t}const Hg=function(t){return typeof t=="number"?"number:"+kg(t):"string:"+t},Vg=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ht(e,".sv"),"Priority must be a string or number.")}else j(t===fu||t.isEmpty(),"priority of unexpected type.");j(t===fu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let j_;class Ne{constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Vg(this.priorityNode_)}static set __childrenNodeConstructor(e){j_=e}static get __childrenNodeConstructor(){return j_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:Y(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Y(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kg(this.value_):e+=this.value_,this.lazyHash_=xg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ne.VALUE_TYPE_ORDER.indexOf(n),i=Ne.VALUE_TYPE_ORDER.indexOf(r);return j(s>=0,"Unknown leaf type: "+n),j(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg,Qg;function uC(t){Yg=t}function dC(t){Qg=t}class hC extends ra{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Cr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(mr,new Ne("[PRIORITY-POST]",Qg))}makePost(e,n){const r=Yg(e);return new Q(n,new Ne("[PRIORITY-POST]",r))}toString(){return".priority"}}const me=new hC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=Math.log(2);class _C{constructor(e){const n=i=>parseInt(Math.log(i)/fC,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wl=function(t,e,n,r){t.sort(e);const s=function(a,u){const f=u-a;let d,h;if(f===0)return null;if(f===1)return d=t[a],h=n?n(d):d,new Se(h,d.node,Se.BLACK,null,null);{const g=parseInt(f/2,10)+a,v=s(a,g),w=s(g+1,u);return d=t[g],h=n?n(d):d,new Se(h,d.node,Se.BLACK,v,w)}},i=function(a){let u=null,f=null,d=t.length;const h=function(v,w){const C=d-v,m=d;d-=v;const _=s(C+1,m),p=t[C],x=n?n(p):p;g(new Se(x,p.node,w,null,_))},g=function(v){u?(u.left=v,u=v):(f=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),C=Math.pow(2,a.count-(v+1));w?h(C,Se.BLACK):(h(C,Se.BLACK),h(C,Se.RED))}return f},o=new _C(t.length),l=i(o);return new nt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za;const Rr={};class nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(Rr&&me,"ChildrenNode.ts has not been loaded"),Za=Za||new nn({".priority":Rr},{".priority":me}),Za}get(e){const n=us(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof nt?n:null}hasIndex(e){return Ht(this.indexSet_,e.toString())}addIndex(e,n){j(e!==es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Q.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let l;s?l=wl(r,e.getCompare()):l=Rr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const f=Object.assign({},this.indexes_);return f[a]=l,new nn(f,u)}addToIndexes(e,n){const r=fl(this.indexes_,(s,i)=>{const o=us(this.indexSet_,i);if(j(o,"Missing index implementation for "+i),s===Rr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(Q.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),wl(l,o.getCompare())}else return Rr;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new Q(e.name,l))),a.insert(e,e.node)}});return new nn(r,this.indexSet_)}removeFromIndexes(e,n){const r=fl(this.indexes_,s=>{if(s===Rr)return s;{const i=n.get(e.name);return i?s.remove(new Q(e.name,i)):s}});return new nn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Vg(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Us||(Us=new W(new nt(qd),null,nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Us:this.priorityNode_;return new W(s,o,i)}}updateChild(e,n){const r=Y(e);if(r===null)return n;{j(Y(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ie(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),r++,i&&W.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hg(this.getPriority().val())+":"),this.forEachChild(me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":xg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Q(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xi?-1:0}withIndex(e){if(e===es||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(me),s=n.getIterator(me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===es?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pC extends W{constructor(){super(new nt(qd),W.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Xi=new pC;Object.defineProperties(Q,{MIN:{value:new Q(hs,W.EMPTY_NODE)},MAX:{value:new Q(mr,Xi)}});$g.__EMPTY_NODE=W.EMPTY_NODE;Ne.__childrenNodeConstructor=W;cC(Xi);dC(Xi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=!0;function Ie(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Ie(e))}if(!(t instanceof Array)&&mC){const n=[];let r=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ie(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new Q(o,a)))}}),n.length===0)return W.EMPTY_NODE;const i=wl(n,aC,o=>o.name,qd);if(r){const o=wl(n,me.getCompare());return new W(i,Ie(e),new nn({".priority":o},{".priority":me}))}else return new W(i,Ie(e),nn.Default)}else{let n=W.EMPTY_NODE;return Me(t,(r,s)=>{if(Ht(t,r)&&r.substring(0,1)!=="."){const i=Ie(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ie(e))}}uC(Ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC extends ra{constructor(e){super(),this.indexPath_=e,j(!G(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Cr(e.name,n.name):i}makePost(e,n){const r=Ie(e),s=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,s)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Xi);return new Q(mr,e)}toString(){return Pi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC extends ra{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=Ie(e);return new Q(n,r)}toString(){return".value"}}const vC=new yC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){return{type:"value",snapshotNode:t}}function fs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ji(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ai(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(r.getChild(s))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ji(n,l)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(fs(n,r)):o.trackChildChange(Ai(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(me,(s,i)=>{n.hasChild(s)||r.trackChildChange(ji(s,i))}),n.isLeafNode()||n.forEachChild(me,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ai(s,i,o))}else r.trackChildChange(fs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.indexedFilter_=new Kd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Li.getStartPost_(e),this.endPost_=Li.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new Q(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(W.EMPTY_NODE);const i=this;return n.forEachChild(me,(o,l)=>{i.matches(new Q(o,l))||(s=s.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Li(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new Q(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=W.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const l=i.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))s=s.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(W.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const l=i.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:s=s.updateImmediateChild(l.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const l=e;j(l.numChildren()===this.limit_,"");const a=new Q(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(f&&!r.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(Ai(n,r,d)),l.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(ji(n,d));const w=l.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(i!=null&&i.trackChildChange(fs(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:f&&o(u,a)>=0?(i!=null&&(i.trackChildChange(ji(u.name,u.node)),i.trackChildChange(fs(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hs}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Xd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kC(t){return t.loadsAllData()?new Kd(t.getIndex()):t.hasLimit()?new bC(t):new Li(t)}function A_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===vC?n="$value":t.index_===es?n="$key":(j(t.index_ instanceof gC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function L_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Fg{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Cl.getListenId_(e,r),l={};this.listens_[o]=l;const a=A_(e._queryParams);this.restRequest_(i+".json",a,(u,f)=>{let d=f;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),us(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",s(h,null)}})}unlisten(e,n){const r=Cl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=A_(e._queryParams),r=e._path.toString(),s=new Hi;return this.restRequest_(r+".json",n,(i,o)=>{let l=o;i===404&&(l=null,i=null),i===null?(this.onDataUpdate_(r,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bs(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Si(l.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Nl(){return{value:null,children:new Map}}function qg(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Y(e);t.children.has(r)||t.children.set(r,Nl());const s=t.children.get(r);e=ie(e),qg(s,e,n)}}function _u(t,e,n){t.value!==null?n(e,t.value):CC(t,(r,s)=>{const i=new ne(e.toString()+"/"+r);_u(s,i,n)})}function CC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=10*1e3,EC=30*1e3,SC=5*60*1e3;class IC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new NC(e);const r=O_+(EC-O_)*Math.random();ii(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Me(e,(s,i)=>{i>0&&Ht(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ii(this.reportStats_.bind(this),Math.floor(Math.random()*2*SC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Jd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function eh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=Jd()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new El(Z(),n,this.revert)}}else return j(Y(this.path)===e,"operationForChild called for unrelated child."),new El(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return G(this.path)?new gr(this.source,Z(),this.snap.getImmediateChild(e)):new gr(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new gr(this.source,Z(),n.value):new _s(this.source,Z(),n)}else return j(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _s(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function RC(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(xC(o.childName,o.snapshotNode))}),Fs(t,s,"child_removed",e,r,n),Fs(t,s,"child_added",e,r,n),Fs(t,s,"child_moved",i,r,n),Fs(t,s,"child_changed",e,r,n),Fs(t,s,"value",e,r,n),s}function Fs(t,e,n,r,s,i){const o=r.filter(l=>l.type===n);o.sort((l,a)=>jC(t,l,a)),o.forEach(l=>{const a=PC(t,l,i);s.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function PC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function jC(t,e,n){if(e.childName==null||n.childName==null)throw xs("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),s=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(t,e){return{eventCache:t,serverCache:e}}function oi(t,e,n,r){return sa(new yr(e,n,r),t.serverCache)}function Kg(t,e,n,r){return sa(t.eventCache,new yr(e,n,r))}function pu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function vr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;const AC=()=>(ec||(ec=new nt(g2)),ec);class se{constructor(e,n=AC()){this.value=e,this.children=n}static fromObject(e){let n=new se(null);return Me(e,(r,s)=>{n=n.set(new ne(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const r=Y(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ie(e),n);return i!=null?{path:pe(new ne(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=Y(e),r=this.children.get(n);return r!==null?r.subtree(ie(e)):new se(null)}}set(e,n){if(G(e))return new se(n,this.children);{const r=Y(e),i=(this.children.get(r)||new se(null)).set(ie(e),n),o=this.children.insert(r,i);return new se(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new se(null):new se(null,this.children);{const n=Y(e),r=this.children.get(n);if(r){const s=r.remove(ie(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new se(null):new se(this.value,i)}else return this}}get(e){if(G(e))return this.value;{const n=Y(e),r=this.children.get(n);return r?r.get(ie(e)):null}}setTree(e,n){if(G(e))return n;{const r=Y(e),i=(this.children.get(r)||new se(null)).setTree(ie(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new se(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(pe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(G(e))return null;{const i=Y(e),o=this.children.get(i);return o?o.findOnPath_(ie(e),pe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const s=Y(e),i=this.children.get(s);return i?i.foreachOnPath_(ie(e),pe(n,s),r):new se(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.writeTree_=e}static empty(){return new Pt(new se(null))}}function li(t,e,n){if(G(e))return new Pt(new se(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=tt(s,e);return i=i.updateChild(o,n),new Pt(t.writeTree_.set(s,i))}else{const s=new se(n),i=t.writeTree_.setTree(e,s);return new Pt(i)}}}function mu(t,e,n){let r=t;return Me(n,(s,i)=>{r=li(r,pe(e,s),i)}),r}function M_(t,e){if(G(e))return Pt.empty();{const n=t.writeTree_.setTree(e,new se(null));return new Pt(n)}}function gu(t,e){return Nr(t,e)!=null}function Nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(tt(n.path,e)):null}function D_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(r,s)=>{e.push(new Q(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Q(r,s.value))}),e}function Un(t,e){if(G(e))return t;{const n=Nr(t,e);return n!=null?new Pt(new se(n)):new Pt(t.writeTree_.subtree(e))}}function yu(t){return t.writeTree_.isEmpty()}function ps(t,e){return Xg(Z(),t.writeTree_,e)}function Xg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(j(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Xg(pe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(pe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(t,e){return ty(e,t)}function LC(t,e,n,r,s){j(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=li(t.visibleWrites,e,n)),t.lastWriteId=r}function OC(t,e,n,r){j(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=mu(t.visibleWrites,e,n),t.lastWriteId=r}function MC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function DC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&UC(l,r.path)?s=!1:gt(r.path,l.path)&&(i=!0)),o--}if(s){if(i)return FC(t),!0;if(r.snap)t.visibleWrites=M_(t.visibleWrites,r.path);else{const l=r.children;Me(l,a=>{t.visibleWrites=M_(t.visibleWrites,pe(r.path,a))})}return!0}else return!1}function UC(t,e){if(t.snap)return gt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gt(pe(t.path,n),e))return!0;return!1}function FC(t){t.visibleWrites=Jg(t.allWrites,zC,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zC(t){return t.visible}function Jg(t,e,n){let r=Pt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let l;if(i.snap)gt(n,o)?(l=tt(n,o),r=li(r,l,i.snap)):gt(o,n)&&(l=tt(o,n),r=li(r,Z(),i.snap.getChild(l)));else if(i.children){if(gt(n,o))l=tt(n,o),r=mu(r,l,i.children);else if(gt(o,n))if(l=tt(o,n),G(l))r=mu(r,Z(),i.children);else{const a=us(i.children,Y(l));if(a){const u=a.getChild(ie(l));r=li(r,Z(),u)}}}else throw xs("WriteRecord should have .snap or .children")}}return r}function Zg(t,e,n,r,s){if(!r&&!s){const i=Nr(t.visibleWrites,e);if(i!=null)return i;{const o=Un(t.visibleWrites,e);if(yu(o))return n;if(n==null&&!gu(o,Z()))return null;{const l=n||W.EMPTY_NODE;return ps(o,l)}}}else{const i=Un(t.visibleWrites,e);if(!s&&yu(i))return n;if(!s&&n==null&&!gu(i,Z()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(gt(u.path,e)||gt(e,u.path))},l=Jg(t.allWrites,o,e),a=n||W.EMPTY_NODE;return ps(l,a)}}}function BC(t,e,n){let r=W.EMPTY_NODE;const s=Nr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Un(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=ps(Un(i,new ne(o)),l);r=r.updateImmediateChild(o,a)}),D_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Un(t.visibleWrites,e);return D_(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function WC(t,e,n,r,s){j(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=pe(e,n);if(gu(t.visibleWrites,i))return null;{const o=Un(t.visibleWrites,i);return yu(o)?s.getChild(n):ps(o,s.getChild(n))}}function $C(t,e,n,r){const s=pe(e,n),i=Nr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Un(t.visibleWrites,s);return ps(o,r.getNode().getImmediateChild(n))}else return null}function HC(t,e){return Nr(t.visibleWrites,e)}function VC(t,e,n,r,s,i,o){let l;const a=Un(t.visibleWrites,e),u=Nr(a,Z());if(u!=null)l=u;else if(n!=null)l=ps(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),h=i?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&f.length<s;)d(g,r)!==0&&f.push(g),g=h.getNext();return f}else return[]}function YC(){return{visibleWrites:Pt.empty(),allWrites:[],lastWriteId:-1}}function Sl(t,e,n,r){return Zg(t.writeTree,t.treePath,e,n,r)}function nh(t,e){return BC(t.writeTree,t.treePath,e)}function U_(t,e,n,r){return WC(t.writeTree,t.treePath,e,n,r)}function Il(t,e){return HC(t.writeTree,pe(t.treePath,e))}function QC(t,e,n,r,s,i){return VC(t.writeTree,t.treePath,e,n,r,s,i)}function rh(t,e,n){return $C(t.writeTree,t.treePath,e,n)}function ey(t,e){return ty(pe(t.treePath,e),t.writeTree)}function ty(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ai(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,ji(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,fs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ai(r,e.snapshotNode,s.oldSnap));else throw xs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ny=new qC;class sh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:vr(this.viewCache_),i=QC(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){return{filter:t}}function XC(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function JC(t,e,n,r,s){const i=new GC;let o,l;if(n.type===St.OVERWRITE){const u=n;u.source.fromUser?o=vu(t,e,u.path,u.snap,r,s,i):(j(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Tl(t,e,u.path,u.snap,r,s,l,i))}else if(n.type===St.MERGE){const u=n;u.source.fromUser?o=e5(t,e,u.path,u.children,r,s,i):(j(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=xu(t,e,u.path,u.children,r,s,l,i))}else if(n.type===St.ACK_USER_WRITE){const u=n;u.revert?o=r5(t,e,u.path,r,s,i):o=t5(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===St.LISTEN_COMPLETE)o=n5(t,e,n.path,r,i);else throw xs("Unknown operation type: "+n.type);const a=i.getChanges();return ZC(e,o,a),{viewCache:o,changes:a}}function ZC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=pu(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Gg(pu(e)))}}function ry(t,e,n,r,s,i){const o=e.eventCache;if(Il(r,n)!=null)return e;{let l,a;if(G(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=vr(e),f=u instanceof W?u:W.EMPTY_NODE,d=nh(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=Sl(r,vr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Y(n);if(u===".priority"){j(Wn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const d=U_(r,n,f,a);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=ie(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=U_(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(f,h):d=o.getNode().getImmediateChild(u)}else d=rh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,f,s,i):l=o.getNode()}}return oi(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Tl(t,e,n,r,s,i,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),g,null)}else{const g=Y(n);if(!a.isCompleteForPath(n)&&Wn(n)>1)return e;const v=ie(n),C=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=f.updatePriority(a.getNode(),C):u=f.updateChild(a.getNode(),g,C,v,ny,null)}const d=Kg(e,u,a.isFullyInitialized()||G(n),f.filtersNodes()),h=new sh(s,d,i);return ry(t,d,n,s,h,l)}function vu(t,e,n,r,s,i,o){const l=e.eventCache;let a,u;const f=new sh(s,e,i);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=oi(e,u,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=oi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=ie(n),g=l.getNode().getImmediateChild(d);let v;if(G(h))v=r;else{const w=f.getCompleteChild(d);w!=null?Yd(h)===".priority"&&w.getChild(Bg(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=W.EMPTY_NODE}if(g.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),d,v,h,f,o);a=oi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function F_(t,e){return t.eventCache.isCompleteForChild(e)}function e5(t,e,n,r,s,i,o){let l=e;return r.foreach((a,u)=>{const f=pe(n,a);F_(e,Y(f))&&(l=vu(t,l,f,u,s,i,o))}),r.foreach((a,u)=>{const f=pe(n,a);F_(e,Y(f))||(l=vu(t,l,f,u,s,i,o))}),l}function z_(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function xu(t,e,n,r,s,i,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=r:u=new se(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(f.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=z_(t,g,h);a=Tl(t,a,new ne(d),v,s,i,o,l)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!f.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),w=z_(t,v,h);a=Tl(t,a,new ne(d),w,s,i,o,l)}}),a}function t5(t,e,n,r,s,i,o){if(Il(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Tl(t,e,n,a.getNode().getChild(n),s,i,l,o);if(G(n)){let u=new se(null);return a.getNode().forEachChild(es,(f,d)=>{u=u.set(new ne(f),d)}),xu(t,e,n,u,s,i,l,o)}else return e}else{let u=new se(null);return r.foreach((f,d)=>{const h=pe(n,f);a.isCompleteForPath(h)&&(u=u.set(f,a.getNode().getChild(h)))}),xu(t,e,n,u,s,i,l,o)}}function n5(t,e,n,r,s){const i=e.serverCache,o=Kg(e,i.getNode(),i.isFullyInitialized()||G(n),i.isFiltered());return ry(t,o,n,r,ny,s)}function r5(t,e,n,r,s,i){let o;if(Il(r,n)!=null)return e;{const l=new sh(r,e,s),a=e.eventCache.getNode();let u;if(G(n)||Y(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Sl(r,vr(e));else{const d=e.serverCache.getNode();j(d instanceof W,"serverChildren would be complete if leaf node"),f=nh(r,d)}f=f,u=t.filter.updateFullNode(a,f,i)}else{const f=Y(n);let d=rh(r,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=a.getImmediateChild(f)),d!=null?u=t.filter.updateChild(a,f,d,ie(n),l,i):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,W.EMPTY_NODE,ie(n),l,i):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sl(r,vr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Il(r,Z())!=null,oi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Kd(r.getIndex()),i=kC(r);this.processor_=KC(i);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(W.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(W.EMPTY_NODE,l.getNode(),null),f=new yr(a,o.isFullyInitialized(),s.filtersNodes()),d=new yr(u,l.isFullyInitialized(),i.filtersNodes());this.viewCache_=sa(d,f),this.eventGenerator_=new TC(this.query_)}get query(){return this.query_}}function i5(t){return t.viewCache_.serverCache.getNode()}function o5(t,e){const n=vr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function B_(t){return t.eventRegistrations_.length===0}function l5(t,e){t.eventRegistrations_.push(e)}function W_(t,e,n){const r=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function $_(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(j(vr(t.viewCache_),"We should always have a full cache before handling merges"),j(pu(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=JC(t.processor_,s,e,n,r);return XC(t.processor_,i.viewCache),j(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,sy(t,i.changes,i.viewCache.eventCache.getNode(),null)}function a5(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(i,o)=>{r.push(fs(i,o))}),n.isFullyInitialized()&&r.push(Gg(n.getNode())),sy(t,r,n.getNode(),e)}function sy(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return RC(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rl;class c5{constructor(){this.views=new Map}}function u5(t){j(!Rl,"__referenceConstructor has already been defined"),Rl=t}function d5(){return j(Rl,"Reference.ts has not been loaded"),Rl}function h5(t){return t.views.size===0}function ih(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return j(i!=null,"SyncTree gave us an op for an invalid query."),$_(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat($_(o,e,n,r));return i}}function f5(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let l=Sl(n,s?r:null),a=!1;l?a=!0:r instanceof W?(l=nh(n,r),a=!1):(l=W.EMPTY_NODE,a=!1);const u=sa(new yr(l,a,!1),new yr(r,s,!1));return new s5(e,u)}return o}function _5(t,e,n,r,s,i){const o=f5(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),l5(o,n),a5(o,n)}function p5(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const l=$n(t);if(s==="default")for(const[a,u]of t.views.entries())o=o.concat(W_(u,n,r)),B_(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||i.push(u.query));else{const a=t.views.get(s);a&&(o=o.concat(W_(a,n,r)),B_(a)&&(t.views.delete(s),a.query._queryParams.loadsAllData()||i.push(a.query)))}return l&&!$n(t)&&i.push(new(d5())(e._repo,e._path)),{removed:i,events:o}}function iy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ts(t,e){let n=null;for(const r of t.views.values())n=n||o5(r,e);return n}function oy(t,e){if(e._queryParams.loadsAllData())return ia(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ly(t,e){return oy(t,e)!=null}function $n(t){return ia(t)!=null}function ia(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;function m5(t){j(!Pl,"__referenceConstructor has already been defined"),Pl=t}function g5(){return j(Pl,"Reference.ts has not been loaded"),Pl}let y5=1;class H_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new se(null),this.pendingWriteTree_=YC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ay(t,e,n,r,s){return LC(t.pendingWriteTree_,e,n,r,s),s?Cs(t,new gr(Jd(),e,n)):[]}function v5(t,e,n,r){OC(t.pendingWriteTree_,e,n,r);const s=se.fromObject(n);return Cs(t,new _s(Jd(),e,s))}function Sn(t,e,n=!1){const r=MC(t.pendingWriteTree_,e);if(DC(t.pendingWriteTree_,e)){let i=new se(null);return r.snap!=null?i=i.set(Z(),!0):Me(r.children,o=>{i=i.set(new ne(o),!0)}),Cs(t,new El(r.path,i,n))}else return[]}function oa(t,e,n){return Cs(t,new gr(Zd(),e,n))}function x5(t,e,n){const r=se.fromObject(n);return Cs(t,new _s(Zd(),e,r))}function b5(t,e){return Cs(t,new Oi(Zd(),e))}function k5(t,e,n){const r=lh(t,n);if(r){const s=ah(r),i=s.path,o=s.queryId,l=tt(i,e),a=new Oi(eh(o),l);return ch(t,i,a)}else return[]}function bu(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let l=[];if(o&&(e._queryIdentifier==="default"||ly(o,e))){const a=p5(o,e,n,r);h5(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=a.removed;if(l=a.events,!s){const f=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(h,g)=>$n(g));if(f&&!d){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const g=N5(h);for(let v=0;v<g.length;++v){const w=g[v],C=w.query,m=dy(t,w);t.listenProvider_.startListening(ai(C),jl(t,C),m.hashFn,m.onComplete)}}}!d&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(ai(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(la(h));t.listenProvider_.stopListening(ai(h),g)}))}E5(t,u)}return l}function w5(t,e,n,r){const s=lh(t,r);if(s!=null){const i=ah(s),o=i.path,l=i.queryId,a=tt(o,e),u=new gr(eh(l),a,n);return ch(t,o,u)}else return[]}function C5(t,e,n,r){const s=lh(t,r);if(s){const i=ah(s),o=i.path,l=i.queryId,a=tt(o,e),u=se.fromObject(n),f=new _s(eh(l),a,u);return ch(t,o,f)}else return[]}function V_(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(h,g)=>{const v=tt(h,s);i=i||ts(g,v),o=o||$n(g)});let l=t.syncPointTree_.get(s);l?(o=o||$n(l),i=i||ts(l,Z())):(l=new c5,t.syncPointTree_=t.syncPointTree_.set(s,l));let a;i!=null?a=!0:(a=!1,i=W.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,v)=>{const w=ts(v,Z());w&&(i=i.updateImmediateChild(g,w))}));const u=ly(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=la(e);j(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=S5();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const f=th(t.pendingWriteTree_,s);let d=_5(l,e,n,f,i,a);if(!u&&!o&&!r){const h=oy(l,e);d=d.concat(I5(t,e,h))}return d}function oh(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=tt(o,e),u=ts(l,a);if(u)return u});return Zg(s,e,i,n,!0)}function Cs(t,e){return cy(e,t.syncPointTree_,null,th(t.pendingWriteTree_,Z()))}function cy(t,e,n,r){if(G(t.path))return uy(t,e,n,r);{const s=e.get(Z());n==null&&s!=null&&(n=ts(s,Z()));let i=[];const o=Y(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=ey(r,o);i=i.concat(cy(l,a,u,f))}return s&&(i=i.concat(ih(s,t,r,n))),i}}function uy(t,e,n,r){const s=e.get(Z());n==null&&s!=null&&(n=ts(s,Z()));let i=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ey(r,o),f=t.operationForChild(o);f&&(i=i.concat(uy(f,l,a,u)))}),s&&(i=i.concat(ih(s,t,r,n))),i}function dy(t,e){const n=e.query,r=jl(t,n);return{hashFn:()=>(i5(e)||W.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?k5(t,n._path,r):b5(t,n._path);{const i=x2(s,n);return bu(t,n,null,i)}}}}function jl(t,e){const n=la(e);return t.queryToTagMap.get(n)}function la(t){return t._path.toString()+"$"+t._queryIdentifier}function lh(t,e){return t.tagToQueryMap.get(e)}function ah(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function ch(t,e,n){const r=t.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const s=th(t.pendingWriteTree_,e);return ih(r,n,s,null)}function N5(t){return t.fold((e,n,r)=>{if(n&&$n(n))return[ia(n)];{let s=[];return n&&(s=iy(n)),Me(r,(i,o)=>{s=s.concat(o)}),s}})}function ai(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(g5())(t._repo,t._path):t}function E5(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=la(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function S5(){return y5++}function I5(t,e,n){const r=e._path,s=jl(t,e),i=dy(t,n),o=t.listenProvider_.startListening(ai(e),s,i.hashFn,i.onComplete),l=t.syncPointTree_.subtree(r);if(s)j(!$n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,d)=>{if(!G(u)&&f&&$n(f))return[ia(f).query];{let h=[];return f&&(h=h.concat(iy(f).map(g=>g.query))),Me(d,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(ai(f),jl(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new uh(n)}node(){return this.node_}}class dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new dh(this.syncTree_,n)}node(){return oh(this.syncTree_,this.path_)}}const T5=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Y_=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return R5(t[".sv"],e,n);if(typeof t[".sv"]=="object")return P5(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},R5=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},P5=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const s=e.node();if(j(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},hy=function(t,e,n,r){return hh(e,new dh(n,t),r)},fy=function(t,e,n){return hh(t,new uh(e),n)};function hh(t,e,n){const r=t.getPriority().val(),s=Y_(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,l=Y_(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ne(l,Ie(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ne(s))),o.forEachChild(me,(l,a)=>{const u=hh(a,e.getImmediateChild(l),n);u!==a&&(i=i.updateImmediateChild(l,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _h(t,e){let n=e instanceof ne?e:new ne(e),r=t,s=Y(n);for(;s!==null;){const i=us(r.node.children,s)||{children:{},childCount:0};r=new fh(s,r,i),n=ie(n),s=Y(n)}return r}function Ns(t){return t.node.value}function _y(t,e){t.node.value=e,ku(t)}function py(t){return t.node.childCount>0}function j5(t){return Ns(t)===void 0&&!py(t)}function aa(t,e){Me(t.node.children,(n,r)=>{e(new fh(n,t,r))})}function my(t,e,n,r){n&&e(t),aa(t,s=>{my(s,e,!0)})}function A5(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ji(t){return new ne(t.parent===null?t.name:Ji(t.parent)+"/"+t.name)}function ku(t){t.parent!==null&&L5(t.parent,t.name,t)}function L5(t,e,n){const r=j5(n),s=Ht(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,ku(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ku(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O5=/[\[\].#$\/\u0000-\u001F\u007F]/,M5=/[\[\].#$\u0000-\u001F\u007F]/,tc=10*1024*1024,ph=function(t){return typeof t=="string"&&t.length!==0&&!O5.test(t)},gy=function(t){return typeof t=="string"&&t.length!==0&&!M5.test(t)},D5=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gy(t)},U5=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bd(t)||t&&typeof t=="object"&&Ht(t,".sv")},yy=function(t,e,n,r){r&&e===void 0||ca(Xl(t,"value"),e,n)},ca=function(t,e,n){const r=n instanceof ne?new eC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Jn(r)+" with contents = "+e.toString());if(Bd(e))throw new Error(t+"contains "+e.toString()+" "+Jn(r));if(typeof e=="string"&&e.length>tc/3&&Jl(e)>tc)throw new Error(t+"contains a string greater than "+tc+" utf8 bytes "+Jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Me(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!ph(o)))throw new Error(t+" contains an invalid key ("+o+") "+Jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tC(r,o),ca(t,l,r),nC(r)}),s&&i)throw new Error(t+' contains ".value" child '+Jn(r)+" in addition to actual children.")}},F5=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Pi(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!ph(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Z2);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&gt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},z5=function(t,e,n,r){const s=Xl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Me(e,(o,l)=>{const a=new ne(o);if(ca(s,l,pe(n,a)),Yd(a)===".priority"&&!U5(l))throw new Error(s+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(a)}),F5(s,i)},vy=function(t,e,n,r){if(!gy(n))throw new Error(Xl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B5=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vy(t,e,n)},xy=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},W5=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ph(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!D5(n))throw new Error(Xl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ua(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Qd(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function by(t,e,n){ua(t,n),ky(t,r=>Qd(r,e))}function At(t,e,n){ua(t,n),ky(t,r=>gt(r,e)||gt(e,r))}function ky(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(H5(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function H5(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();si&&Ae("event: "+n.toString()),ws(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V5="repo_interrupt",Y5=25;class Q5{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Nl(),this.transactionQueueTree_=new fh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function G5(t,e,n){if(t.stats_=Hd(t.repoInfo_),t.forceRestClient_||C2())t.server_=new Cl(t.repoInfo_,(r,s,i,o)=>{Q_(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>G_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new sn(t.repoInfo_,e,(r,s,i,o)=>{Q_(t,r,s,i,o)},r=>{G_(t,r)},r=>{q5(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=T2(t.repoInfo_,()=>new IC(t.stats_,t.server_)),t.infoData_=new wC,t.infoSyncTree_=new H_({startListening:(r,s,i,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=oa(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),mh(t,"connected",!1),t.serverSyncTree_=new H_({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(l,a)=>{const u=o(l,a);At(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function wy(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function da(t){return T5({timestamp:wy(t)})}function Q_(t,e,n,r,s){t.dataUpdateCount++;const i=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const a=fl(n,u=>Ie(u));o=C5(t.serverSyncTree_,i,a,s)}else{const a=Ie(n);o=w5(t.serverSyncTree_,i,a,s)}else if(r){const a=fl(n,u=>Ie(u));o=x5(t.serverSyncTree_,i,a)}else{const a=Ie(n);o=oa(t.serverSyncTree_,i,a)}let l=i;o.length>0&&(l=ms(t,i)),At(t.eventQueue_,l,o)}function G_(t,e){mh(t,"connected",e),e===!1&&J5(t)}function q5(t,e){Me(e,(n,r)=>{mh(t,n,r)})}function mh(t,e,n){const r=new ne("/.info/"+e),s=Ie(n);t.infoData_.updateSnapshot(r,s);const i=oa(t.infoSyncTree_,r,s);At(t.eventQueue_,r,i)}function gh(t){return t.nextWriteId_++}function K5(t,e,n,r,s){ha(t,"set",{path:e.toString(),value:n,priority:r});const i=da(t),o=Ie(n,r),l=oh(t.serverSyncTree_,e),a=fy(o,l,i),u=gh(t),f=ay(t.serverSyncTree_,e,a,u,!0);ua(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const v=h==="ok";v||Qe("set at "+e+" failed: "+h);const w=Sn(t.serverSyncTree_,u,!v);At(t.eventQueue_,e,w),wu(t,s,h,g)});const d=vh(t,e);ms(t,d),At(t.eventQueue_,d,[])}function X5(t,e,n,r){ha(t,"update",{path:e.toString(),value:n});let s=!0;const i=da(t),o={};if(Me(n,(l,a)=>{s=!1,o[l]=hy(pe(e,l),Ie(a),t.serverSyncTree_,i)}),s)Ae("update() called with empty data.  Don't do anything."),wu(t,r,"ok",void 0);else{const l=gh(t),a=v5(t.serverSyncTree_,e,o,l);ua(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,f)=>{const d=u==="ok";d||Qe("update at "+e+" failed: "+u);const h=Sn(t.serverSyncTree_,l,!d),g=h.length>0?ms(t,e):e;At(t.eventQueue_,g,h),wu(t,r,u,f)}),Me(n,u=>{const f=vh(t,pe(e,u));ms(t,f)}),At(t.eventQueue_,e,[])}}function J5(t){ha(t,"onDisconnectEvents");const e=da(t),n=Nl();_u(t.onDisconnect_,Z(),(s,i)=>{const o=hy(s,i,t.serverSyncTree_,e);qg(n,s,o)});let r=[];_u(n,Z(),(s,i)=>{r=r.concat(oa(t.serverSyncTree_,s,i));const o=vh(t,s);ms(t,o)}),t.onDisconnect_=Nl(),At(t.eventQueue_,Z(),r)}function Z5(t,e,n){let r;Y(e._path)===".info"?r=V_(t.infoSyncTree_,e,n):r=V_(t.serverSyncTree_,e,n),by(t.eventQueue_,e._path,r)}function q_(t,e,n){let r;Y(e._path)===".info"?r=bu(t.infoSyncTree_,e,n):r=bu(t.serverSyncTree_,e,n),by(t.eventQueue_,e._path,r)}function eN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(V5)}function ha(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function wu(t,e,n,r){e&&ws(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function Cy(t,e,n){return oh(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function yh(t,e=t.transactionQueueTree_){if(e||fa(t,e),Ns(e)){const n=Ey(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&tN(t,Ji(e),n)}else py(e)&&aa(e,n=>{yh(t,n)})}function tN(t,e,n){const r=n.map(u=>u.currentWriteId),s=Cy(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const f=n[u];j(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=tt(e,f.path);i=i.updateChild(d,f.currentOutputSnapshotRaw)}const l=i.val(!0),a=e;t.server_.put(a.toString(),l,u=>{ha(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(Sn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();fa(t,_h(t.transactionQueueTree_,e)),yh(t,t.transactionQueueTree_),At(t.eventQueue_,e,f);for(let h=0;h<d.length;h++)ws(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Qe("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ms(t,e)}},o)}function ms(t,e){const n=Ny(t,e),r=Ji(n),s=Ey(t,n);return nN(t,s,r),r}function nN(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=tt(n,a.path);let f=!1,d;if(j(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,d=a.abortReason,s=s.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Y5)f=!0,d="maxretry",s=s.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Cy(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){ca("transaction failed: Data returned ",g,a.path);let v=Ie(g);typeof g=="object"&&g!=null&&Ht(g,".priority")||(v=v.updatePriority(h.getPriority()));const C=a.currentWriteId,m=da(t),_=fy(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=_,a.currentWriteId=gh(t),o.splice(o.indexOf(C),1),s=s.concat(ay(t.serverSyncTree_,a.path,_,a.currentWriteId,a.applyLocally)),s=s.concat(Sn(t.serverSyncTree_,C,!0))}else f=!0,d="nodata",s=s.concat(Sn(t.serverSyncTree_,a.currentWriteId,!0))}At(t.eventQueue_,n,s),s=[],f&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}fa(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ws(r[l]);yh(t,t.transactionQueueTree_)}function Ny(t,e){let n,r=t.transactionQueueTree_;for(n=Y(e);n!==null&&Ns(r)===void 0;)r=_h(r,n),e=ie(e),n=Y(e);return r}function Ey(t,e){const n=[];return Sy(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Sy(t,e,n){const r=Ns(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);aa(e,s=>{Sy(t,s,n)})}function fa(t,e){const n=Ns(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,_y(e,n.length>0?n:void 0)}aa(e,r=>{fa(t,r)})}function vh(t,e){const n=Ji(Ny(t,e)),r=_h(t.transactionQueueTree_,e);return A5(r,s=>{nc(t,s)}),nc(t,r),my(r,s=>{nc(t,s)}),n}function nc(t,e){const n=Ns(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Sn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?_y(e,void 0):n.length=i+1,At(t.eventQueue_,Ji(e),s);for(let o=0;o<r.length;o++)ws(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function sN(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const K_=function(t,e){const n=iN(t),r=n.namespace;n.domain==="firebase.com"&&hn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||p2();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new jg(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ne(n.pathString)}},iN=function(t){let e="",n="",r="",s="",i="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(s=rN(t.substring(f,d)));const h=sN(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),i=r}"ns"in h&&(i=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",oN=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=X_.charAt(n%64),n=Math.floor(n/64);j(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=X_.charAt(e[s]);return j(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class aN{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return G(this._path)?null:Yd(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=L_(this._queryParams),n=Wd(e);return n==="{}"?"default":n}get _queryObject(){return L_(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof xh))return!1;const n=this._repo===e._repo,r=Qd(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+J2(this._path)}}class Qn extends xh{constructor(e,n){super(e,n,new Xd,!1)}get parent(){const e=Bg(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Al{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),r=Mi(this.ref,e);return new Al(this._node.getChild(n),r,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Al(s,Mi(this.ref,r),me)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fe(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?Mi(t._root,e):t._root}function Mi(t,e){return t=we(t),Y(t._path)===null?B5("child","path",e):vy("child","path",e),new Qn(t._repo,pe(t._path,e))}function uN(t,e){t=we(t),xy("push",t._path),yy("push",e,t._path,!0);const n=wy(t._repo),r=oN(n),s=Mi(t,r),i=Mi(t,r);let o;return o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function ns(t,e){t=we(t),xy("set",t._path),yy("set",e,t._path,!1);const n=new Hi;return K5(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function zs(t,e){z5("update",e,t._path);const n=new Hi;return X5(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class bh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lN("value",this,new Al(e.snapshotNode,new Qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new aN(this,e,n):null}matches(e){return e instanceof bh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dN(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const a=n,u=(f,d)=>{q_(t._repo,t,l),a(f,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new cN(n,i||void 0),l=new bh(o);return Z5(t._repo,t,l),()=>q_(t._repo,t,l)}function Ll(t,e,n,r){return dN(t,"value",e,n,r)}u5(Qn);m5(Qn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="FIREBASE_DATABASE_EMULATOR_HOST",Cu={};let fN=!1;function _N(t,e,n,r){t.repoInfo_=new jg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pN(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=K_(i,s),l=o.repoInfo,a;typeof process<"u"&&m_&&(a=m_[hN]),a?(i=`http://${a}?ns=${l.namespace}`,o=K_(i,s),l=o.repoInfo):o.repoInfo.secure;const u=new E2(t.name,t.options,e);W5("Invalid Firebase Database URL",o),G(o.path)||hn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=gN(l,t,u,new N2(t.name,n));return new yN(f,t)}function mN(t,e){const n=Cu[e];(!n||n[t.key]!==t)&&hn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eN(t),delete n[t.key]}function gN(t,e,n,r){let s=Cu[e.name];s||(s={},Cu[e.name]=s);let i=s[t.toURLString()];return i&&hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Q5(t,fN,n,r),s[t.toURLString()]=i,i}class yN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(G5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hn("Cannot call "+e+" on a deleted database.")}}function vN(t=Td(),e){const n=Zl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=R0("database");r&&xN(n,...r)}return n}function xN(t,e,n,r={}){t=we(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&hn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Fo(Fo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:A0(r.mockUserToken,t.app.options.projectId);i=new Fo(o)}_N(s,e,n,i)}/**
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
 */function bN(t){c2(wr),_r(new Bn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return pN(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Bt(g_,y_,t),Bt(g_,y_,"esm2017")}sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bN();var kN="firebase",wN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bt(kN,wN,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebasestorage.googleapis.com",Ty="storageBucket",CN=2*60*1e3,NN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends _n{constructor(e,n,r=0){super(rc(e),`Firebase Storage: ${n} (${rc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return rc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function rc(t){return"storage/"+t}function kh(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(ge.UNKNOWN,t)}function EN(t){return new ye(ge.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function SN(t){return new ye(ge.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ge.UNAUTHENTICATED,t)}function TN(){return new ye(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function RN(t){return new ye(ge.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function PN(){return new ye(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function jN(){return new ye(ge.CANCELED,"User canceled the upload/download.")}function AN(t){return new ye(ge.INVALID_URL,"Invalid URL '"+t+"'.")}function LN(t){return new ye(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ON(){return new ye(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ty+"' property when initializing the app?")}function MN(){return new ye(ge.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function DN(){return new ye(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function UN(t){return new ye(ge.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nu(t){return new ye(ge.INVALID_ARGUMENT,t)}function Ry(){return new ye(ge.APP_DELETED,"The Firebase app was deleted.")}function FN(t){return new ye(ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ci(t,e){return new ye(ge.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bs(t){throw new ye(ge.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=at.makeFromUrl(e,n)}catch{return new at(e,"")}if(r.path==="")return r;throw LN(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),a={bucket:1,path:3};function u(x){x.path_=decodeURIComponent(x.path)}const f="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${f}/b/${s}/o${h}`,"i"),v={bucket:1,path:3},w=n===Iy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${w}/${s}/${C}`,"i"),p=[{regex:l,indices:a,postModify:i},{regex:g,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let x=0;x<p.length;x++){const k=p[x],E=k.regex.exec(e);if(E){const I=E[k.indices.bucket];let T=E[k.indices.path];T||(T=""),r=new at(I,T),k.postModify(r);break}}if(r==null)throw AN(e);return r}}class zN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function a(){return l===2}let u=!1;function f(...C){u||(u=!0,e.apply(null,C))}function d(C){s=setTimeout(()=>{s=null,t(g,a())},C)}function h(){i&&clearTimeout(i)}function g(C,...m){if(u){h();return}if(C){h(),f.call(null,C,...m);return}if(a()||o){h(),f.call(null,C,...m);return}r<64&&(r*=2);let p;l===1?(l=2,p=0):p=(r+Math.random())*1e3,d(p)}let v=!1;function w(C){v||(v=!0,h(),!u&&(s!==null?(C||(l=2),clearTimeout(s),d(0)):C||(l=1)))}return d(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function WN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(t){return t!==void 0}function HN(t){return typeof t=="object"&&!Array.isArray(t)}function wh(t){return typeof t=="string"||t instanceof String}function J_(t){return Ch()&&t instanceof Blob}function Ch(){return typeof Blob<"u"}function Z_(t,e,n,r){if(r<e)throw Nu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Py(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var lr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(lr||(lr={}));/**
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
 */function VN(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r,s,i,o,l,a,u,f,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new xo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===lr.NO_ERROR,a=i.getStatus();if(!l||VN(a,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===lr.ABORT;r(!1,new xo(!1,null,f));return}const u=this.successCodes_.indexOf(a)!==-1;r(!0,new xo(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());$N(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=kh();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(s.canceled){const a=this.appDelete_?Ry():jN();o(a)}else{const a=PN();o(a)}};this.canceled_?n(!1,new xo(!1,null,!0)):this.backoffId_=BN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function GN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XN(t,e,n,r,s,i,o=!0){const l=Py(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return qN(u,e),QN(u,n),GN(u,i),KN(u,r),new YN(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ZN(...t){const e=JN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ch())return new Blob(t);throw new ye(ge.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eE(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function tE(t){if(typeof atob>"u")throw UN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sc{constructor(e,n){this.data=e,this.contentType=n||null}}function nE(t,e){switch(t){case Ut.RAW:return new sc(jy(e));case Ut.BASE64:case Ut.BASE64URL:return new sc(Ay(t,e));case Ut.DATA_URL:return new sc(sE(e),iE(e))}throw kh()}function jy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function rE(t){let e;try{e=decodeURIComponent(t)}catch{throw ci(Ut.DATA_URL,"Malformed data URL.")}return jy(e)}function Ay(t,e){switch(t){case Ut.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ci(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ci(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tE(e)}catch(s){throw s.message.includes("polyfill")?s:ci(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Ly{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ci(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=oE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sE(t){const e=new Ly(t);return e.base64?Ay(Ut.BASE64,e.rest):rE(e.rest)}function iE(t){return new Ly(t).contentType}function oE(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n){let r=0,s="";J_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(J_(this.data_)){const r=this.data_,s=eE(r,e,n);return s===null?null:new Cn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cn(r,!0)}}static getBlob(...e){if(Ch()){const n=e.map(r=>r instanceof Cn?r.data_:r);return new Cn(ZN.apply(null,n))}else{const n=e.map(o=>wh(o)?nE(Ut.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new Cn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(t){let e;try{e=JSON.parse(t)}catch{return null}return HN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aE(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function My(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(t,e){return e}class $e{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||cE}}let bo=null;function uE(t){return!wh(t)||t.length<2?t:My(t)}function Dy(){if(bo)return bo;const t=[];t.push(new $e("bucket")),t.push(new $e("generation")),t.push(new $e("metageneration")),t.push(new $e("name","fullPath",!0));function e(i,o){return uE(o)}const n=new $e("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new $e("size");return s.xform=r,t.push(s),t.push(new $e("timeCreated")),t.push(new $e("updated")),t.push(new $e("md5Hash",null,!0)),t.push(new $e("cacheControl",null,!0)),t.push(new $e("contentDisposition",null,!0)),t.push(new $e("contentEncoding",null,!0)),t.push(new $e("contentLanguage",null,!0)),t.push(new $e("contentType",null,!0)),t.push(new $e("metadata","customMetadata",!0)),bo=t,bo}function dE(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new at(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function hE(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return dE(r,t),r}function Uy(t,e,n){const r=Oy(e);return r===null?null:hE(t,r,n)}function fE(t,e,n,r){const s=Oy(e);if(s===null||!wh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const f=t.bucket,d=t.fullPath,h="/b/"+o(f)+"/o/"+o(d),g=_a(h,n,r),v=Py({alt:"media",token:u});return g+v})[0]}function _E(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Nh{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t){if(!t)throw kh()}function pE(t,e){function n(r,s){const i=Uy(t,s,e);return Fy(i!==null),i}return n}function mE(t,e){function n(r,s){const i=Uy(t,s,e);return Fy(i!==null),fE(i,s,t.host,t._protocol)}return n}function zy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TN():s=IN():n.getStatus()===402?s=SN(t.bucket):n.getStatus()===403?s=RN(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function By(t){const e=zy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=EN(t.path)),i.serverResponse=s.serverResponse,i}return n}function gE(t,e,n){const r=e.fullServerUrl(),s=_a(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new Nh(s,i,mE(t,n),o);return l.errorHandler=By(e),l}function yE(t,e){const n=e.fullServerUrl(),r=_a(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(a,u){}const l=new Nh(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=By(e),l}function vE(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vE(null,e)),r}function bE(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let p="";for(let x=0;x<2;x++)p=p+Math.random().toString().slice(2);return p}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=xE(e,r,s),f=_E(u,n),d="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+a+"--",g=Cn.getBlob(d,r,h);if(g===null)throw MN();const v={name:u.fullPath},w=_a(i,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,_=new Nh(w,C,pE(t,n),m);return _.urlParams=v,_.headers=o,_.body=g.uploadData(),_.errorHandler=zy(e),_}class kE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=lr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=lr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Bs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class wE extends kE{initXhr(){this.xhr_.responseType="text"}}function Eh(){return new wE}/**
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
 */class xr{constructor(e,n){this._service=e,n instanceof at?this._location=n:this._location=at.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xr(e,n)}get root(){const e=new at(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return My(this._location.path)}get storage(){return this._service}get parent(){const e=lE(this._location.path);if(e===null)return null;const n=new at(this._location.bucket,e);return new xr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw FN(e)}}function CE(t,e,n){t._throwIfRoot("uploadBytes");const r=bE(t.storage,t._location,Dy(),new Cn(e,!0),n);return t.storage.makeRequestWithTokens(r,Eh).then(s=>({metadata:s,ref:t}))}function NE(t){t._throwIfRoot("getDownloadURL");const e=gE(t.storage,t._location,Dy());return t.storage.makeRequestWithTokens(e,Eh).then(n=>{if(n===null)throw DN();return n})}function EE(t){t._throwIfRoot("deleteObject");const e=yE(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Eh)}function SE(t,e){const n=aE(t._location.path,e),r=new at(t._location.bucket,n);return new xr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IE(t){return/^[A-Za-z]+:\/\//.test(t)}function TE(t,e){return new xr(t,e)}function Wy(t,e){if(t instanceof Sh){const n=t;if(n._bucket==null)throw ON();const r=new xr(n,n._bucket);return e!=null?Wy(r,e):r}else return e!==void 0?SE(t,e):t}function RE(t,e){if(e&&IE(e)){if(t instanceof Sh)return TE(t,e);throw Nu("To use ref(service, url), the first argument must be a Storage instance.")}else return Wy(t,e)}function ep(t,e){const n=e==null?void 0:e[Ty];return n==null?null:at.makeFromBucketSpec(n,t)}function PE(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:A0(s,t.app.options.projectId))}class Sh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Iy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=CN,this._maxUploadRetryTime=NN,this._requests=new Set,s!=null?this._bucket=at.makeFromBucketSpec(s,this._host):this._bucket=ep(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=at.makeFromBucketSpec(this._url,e):this._bucket=ep(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Z_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Z_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new zN(Ry());{const o=XN(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const tp="@firebase/storage",np="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="storage";function jE(t,e,n){return t=we(t),CE(t,e,n)}function AE(t){return t=we(t),NE(t)}function LE(t){return t=we(t),EE(t)}function rp(t,e){return t=we(t),RE(t,e)}function OE(t=Td(),e){t=we(t);const r=Zl(t,$y).getImmediate({identifier:e}),s=R0("storage");return s&&ME(r,...s),r}function ME(t,e,n,r={}){PE(t,e,n,r)}function DE(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Sh(n,r,s,e,wr)}function UE(){_r(new Bn($y,DE,"PUBLIC").setMultipleInstances(!0)),Bt(tp,np,""),Bt(tp,np,"esm2017")}UE();const FE={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},Ih=U0(FE),ic=l2(Ih),ze=vN(Ih),sp=OE(Ih),Hy=new qt;Hy.addScope("email");const Vy="packing-checklist-data",Ve=["必備","電子產品","個人物品","視天氣","旅行","運動"],Yy=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],Qs={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1,templates:[]};function Ws(t){return t.toLowerCase().replace(/\./g,",")}function Eu(t){return t.replace(/,/g,".")}function zE(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:t.sharedWith||{}}:null}function Qy(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:Qs.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):Qs.lists,activeListId:t.activeListId||Qs.activeListId,templates:Array.isArray(t.templates)?t.templates:[]}:Qs}function BE(){try{const t=localStorage.getItem(Vy);if(t)return Qy(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return Qs}function ip(t){try{localStorage.setItem(Vy,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function WE(t){const[e,n]=N.useState(null),[r,s]=N.useState(t),[i,o]=N.useState("offline"),l=N.useRef(null),a=N.useCallback(g=>{l.current&&l.current();const v=Fe(ze,"users/"+g);l.current=Ll(v,w=>{const C=w.val();if(C){const m=Qy(C);s(m),ip(m),o("synced")}else u(g,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=N.useCallback((g,v)=>{o("syncing");const w=Fe(ze,"users/"+g);ns(w,v).then(()=>{o("synced")}).catch(C=>{console.error("Firebase 儲存失敗",C),o("error")})},[]),f=N.useCallback(g=>{s(g),ip(g),e&&u(e.uid,g)},[e,u]),d=N.useCallback(()=>{mw(ic,Hy).catch(g=>{console.error("登入失敗",g),alert("登入失敗："+g.message)})},[]),h=N.useCallback(()=>{l.current&&(l.current(),l.current=null),Kk(ic).then(()=>{n(null),o("offline")}).catch(g=>{console.error("登出失敗",g)})},[]);return N.useEffect(()=>{const g=qk(ic,v=>{n(v),v?a(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{g(),l.current&&l.current()}},[a]),{user:e,data:r,syncStatus:i,saveData:f,handleLogin:d,handleLogout:h}}function $E(t,e){const[n,r]=N.useState({}),[s,i]=N.useState({}),o=N.useRef({}),l=N.useRef(null),a=N.useCallback(_=>{o.current[_]&&(o.current[_](),delete o.current[_])},[]),u=N.useCallback(()=>{Object.keys(o.current).forEach(a),l.current&&(l.current(),l.current=null),r({}),i({})},[a]),f=N.useCallback((_,p)=>{if(o.current[`${p}_${_}`])return;const x=Fe(ze,`sharedLists/${_}`),k=Ll(x,E=>{const I=E.val();if(!I){(p==="withMe"?r:i)(b=>{const S={...b};return delete S[_],S}),a(`${p}_${_}`);return}const T=zE(I);(p==="withMe"?r:i)(y=>({...y,[_]:T}))},E=>{console.error("共享清單讀取失敗",E)});o.current[`${p}_${_}`]=k},[a]);N.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const _=Ws(t.email),p=Fe(ze,`sharedIndex/${_}`);return l.current=Ll(p,x=>{const k=x.val();if(!k){Object.keys(o.current).forEach(I=>{I.startsWith("withMe_")&&a(I)}),r({});return}const E=new Set(Object.keys(k));Object.keys(o.current).forEach(I=>{if(I.startsWith("withMe_")){const T=I.replace("withMe_","");E.has(T)||(a(I),r(U=>{const y={...U};return delete y[T],y}))}}),E.forEach(I=>{f(I,"withMe")})},x=>{console.error("共享索引讀取失敗",x)}),()=>{u()}},[t==null?void 0:t.email]),N.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const _=new Set;e.lists.forEach(p=>{p.sharedListId&&_.add(p.sharedListId)}),Object.keys(o.current).forEach(p=>{if(p.startsWith("byMe_")){const x=p.replace("byMe_","");_.has(x)||(a(p),i(k=>{const E={...k};return delete E[x],E}))}}),_.forEach(p=>{f(p,"byMe")})},[t,e==null?void 0:e.lists,f,a]),N.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(_=>{if(!_.sharedListId)return;const p=s[_.sharedListId];if(!p)return;const x=(Array.isArray(_.items)?_.items:[]).map(I=>e.itemLibrary.find(T=>T.id===I)).filter(Boolean).map(({id:I,name:T,category:U,note:y,photoURL:b})=>({id:I,name:T,category:U,note:y,...b&&{photoURL:b}})),k=p.items||[];if(JSON.stringify(x)!==JSON.stringify(k)){const I=Fe(ze,`sharedLists/${_.sharedListId}`);zs(I,{items:x,name:_.name,icon:_.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,s]);const d=N.useCallback(async(_,p,x)=>{if(!t)return null;const k=(Array.isArray(_.items)?_.items:[]).map(b=>p.find(S=>S.id===b)).filter(Boolean).map(({id:b,name:S,category:z,note:K,photoURL:V})=>({id:b,name:S,category:z,note:K,...V&&{photoURL:V}})),E={};x.forEach(b=>{E[Ws(b)]=!0});const T=uN(Fe(ze,"sharedLists")).key,U={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:_.name,icon:_.icon,items:k,checkedItems:Array.isArray(_.checkedItems)?_.checkedItems:[],sharedWith:E},y={};return y[`sharedLists/${T}`]=U,x.forEach(b=>{y[`sharedIndex/${Ws(b)}/${T}`]=!0}),await zs(Fe(ze),y),T},[t]),h=N.useCallback(async(_,p)=>{const x=Ws(p),k={};k[`sharedLists/${_}/sharedWith/${x}`]=!0,k[`sharedIndex/${x}/${_}`]=!0,await zs(Fe(ze),k)},[]),g=N.useCallback(async(_,p)=>{const x=Ws(p),k={};k[`sharedLists/${_}/sharedWith/${x}`]=null,k[`sharedIndex/${x}/${_}`]=null,await zs(Fe(ze),k)},[]),v=N.useCallback(async _=>{const p=s[_];if(!p)return;const x={};x[`sharedLists/${_}`]=null;const k=p.sharedWith||{};Object.keys(k).forEach(E=>{x[`sharedIndex/${E}/${_}`]=null}),await zs(Fe(ze),x)},[s]),w=N.useCallback(async(_,p)=>{const x=n[_]||s[_];if(!x)return;const k=Array.isArray(x.checkedItems)?x.checkedItems:[],I=k.includes(p)?k.filter(U=>U!==p):[...k,p],T=Fe(ze,`sharedLists/${_}/checkedItems`);await ns(T,I)},[n,s]),C=N.useCallback(async _=>{const p=Fe(ze,`sharedLists/${_}/checkedItems`);await ns(p,[])},[]),m=N.useCallback(async(_,p)=>{const x=Fe(ze,`sharedLists/${_}/checkedItems`);await ns(x,p)},[]);return{sharedWithMe:n,sharedByMe:s,shareList:d,addSharedUser:h,removeSharedUser:g,unshareList:v,toggleSharedCheck:w,resetSharedChecks:C,checkAllShared:m}}function HE(t){const[e,n]=N.useState([]),[r,s]=N.useState(!1),[i,o]=N.useState(!0);N.useEffect(()=>{const u=Fe(ze,"adminEmails"),f=Ll(u,d=>{const h=d.val(),g=Array.isArray(h)?h:[];n(g),o(!1)},()=>{n([]),o(!1)});return()=>f()},[]),N.useEffect(()=>{if(!(t!=null&&t.email)){s(!1);return}s(e.some(u=>u.toLowerCase()===t.email.toLowerCase()))},[t==null?void 0:t.email,e]);const l=N.useCallback(async u=>{const f=u.toLowerCase().trim();if(!f)return;const d=[...new Set([...e,f])];await ns(Fe(ze,"adminEmails"),d)},[e]),a=N.useCallback(async u=>{var h;const f=u.toLowerCase().trim();if(((h=t==null?void 0:t.email)==null?void 0:h.toLowerCase())===f)return;const d=e.filter(g=>g!==f);await ns(Fe(ze,"adminEmails"),d)},[e,t==null?void 0:t.email]);return{isAdmin:r,adminEmails:e,loading:i,addAdmin:l,removeAdmin:a}}const VE="modulepreload",YE=function(t){return"/"+t},op={},QE=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(a=>{if(a=YE(a),a in op)return;op[a]=!0;const u=a.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":VE,u||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function GE(){const[t,e]=N.useState(!1),[n,r]=N.useState(null);return N.useEffect(()=>{QE(async()=>{const{registerSW:o}=await import("./virtual_pwa-register-Dt5ty4X5.js");return{registerSW:o}},[]).then(({registerSW:o})=>{const l=o({onNeedRefresh(){e(!0)},onOfflineReady(){console.log("PWA: 離線模式已就緒")}});r(()=>l)}).catch(()=>{})},[]),{needRefresh:t,refresh:()=>{n&&n(!0)},dismiss:()=>{e(!1)}}}const lp="packing-checklist-theme";function qE(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function oc(t){const e=t==="dark"||t==="system"&&qE();document.documentElement.classList.toggle("dark",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e?"#0f172a":"#4F46E5")}function KE(){const[t,e]=N.useState(()=>{try{return localStorage.getItem(lp)||"system"}catch{return"system"}}),n=N.useCallback(r=>{e(r);try{localStorage.setItem(lp,r)}catch{}oc(r)},[]);return N.useEffect(()=>{oc(t)},[t]),N.useEffect(()=>{if(t!=="system")return;const r=window.matchMedia("(prefers-color-scheme: dark)"),s=()=>oc("system");return r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[t]),{preference:t,changeTheme:n}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=t=>{const e=JE(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=N.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},a)=>N.createElement("svg",{ref:a,...ZE,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Gy("lucide",s),...!i&&!eS(l)&&{"aria-hidden":"true"},...l},[...o.map(([u,f])=>N.createElement(u,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=(t,e)=>{const n=N.forwardRef(({className:r,...s},i)=>N.createElement(tS,{ref:i,iconNode:e,className:Gy(`lucide-${XE(ap(t))}`,`lucide-${t}`,r),...s}));return n.displayName=ap(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],lc=M("arrow-left",nS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],sS=M("backpack",rS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],oS=M("baby",iS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],aS=M("book-open",lS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],uS=M("briefcase",cS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Th=M("camera",dS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],fS=M("chart-column",hS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]],pS=M("check-check",_S);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Di=M("check",mS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],cp=M("chevron-down",gS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],vS=M("chevron-left",yS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],bS=M("circle-alert",xS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Su=M("clipboard-list",kS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],CS=M("cloud-off",wS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],ES=M("cloud",NS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],IS=M("coffee",SS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],RS=M("copy",TS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],jS=M("download",PS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],LS=M("dumbbell",AS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],qy=M("file-text",OS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],DS=M("footprints",MS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],FS=M("funnel",US);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],BS=M("gift",zS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],$S=M("heart",WS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],VS=M("inbox",HS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],Ky=M("layout-dashboard",YS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],GS=M("layout-list",QS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],KS=M("list-checks",qS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Xy=M("loader-circle",XS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],ZS=M("loader",JS);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],tI=M("log-in",eI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],rI=M("log-out",nI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],iI=M("menu",sI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],lI=M("monitor",oI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],cI=M("moon",aI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],dI=M("mountain",uI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],fI=M("music",hI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _I=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Ui=M("package",_I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pI=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],Iu=M("pen-line",pI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mI=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],gI=M("person-standing",mI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yI=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],vI=M("plane",yI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xI=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Es=M("plus",xI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bI=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],kI=M("rotate-ccw",bI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wI=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Rh=M("search",wI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CI=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],pa=M("share-2",CI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NI=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Tu=M("shield",NI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EI=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],SI=M("shirt",EI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const II=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],TI=M("shopping-cart",II);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RI=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],PI=M("sparkles",RI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jI=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],AI=M("square-check-big",jI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LI=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],Ph=M("sticky-note",LI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OI=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],MI=M("sun",OI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DI=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],UI=M("tag",DI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FI=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],zI=M("target",FI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BI=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],WI=M("tent",BI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $I=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ar=M("trash-2",$I);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],VI=M("umbrella",HI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],QI=M("upload",YI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],qI=M("user",GI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Jy=M("users",KI);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vt=M("x",XI),up={"clipboard-list":Su,footprints:DS,briefcase:uS,plane:vI,"person-standing":gI,backpack:sS,umbrella:VI,tent:WI,target:zI,"shopping-cart":TI,shirt:SI,dumbbell:LS,mountain:dI,baby:oS,camera:Th,heart:$S,music:fI,"book-open":aS,coffee:IS,gift:BS},dp={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function JI(t){return dp[t]?up[dp[t]]||Su:up[t]||Su}function zo({name:t,size:e=20,className:n=""}){const r=JI(t);return c.jsx(r,{size:e,className:n})}function hp({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function ZI(){const t=["bg-red-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-purple-400","bg-pink-400","bg-indigo-400","bg-emerald-400","bg-orange-400","bg-cyan-400"];return c.jsxs("div",{className:"fixed inset-0 z-40 pointer-events-none overflow-hidden",children:[Array.from({length:30}).map((e,n)=>c.jsx("div",{className:`absolute w-2.5 h-2.5 rounded-sm animate-confetti ${t[n%t.length]}`,style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*.8}s`,animationDuration:`${1.5+Math.random()*1}s`}},n)),c.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c.jsxs("div",{className:"animate-celebration-text text-center",children:[c.jsx("div",{className:"text-6xl mb-2",children:"🎉"}),c.jsx("div",{className:"text-2xl font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 bg-opacity-90 dark:bg-opacity-90 px-6 py-3 rounded-2xl shadow-lg",children:"準備完成！"})]})})]})}function eT({data:t,user:e,syncStatus:n,onLogin:r,onLogout:s,onNavigate:i,onSaveData:o,shared:l,activeSharedListId:a}){var Lt,Gn,jh;const[u,f]=N.useState([]),[d,h]=N.useState(null),[g,v]=N.useState(null),[w,C]=N.useState([]),[m,_]=N.useState(!1),p=a&&((Lt=l==null?void 0:l.sharedWithMe)==null?void 0:Lt[a]),x=a&&((Gn=l==null?void 0:l.sharedByMe)==null?void 0:Gn[a]),k=p?"shared-with-me":x?"own-shared":"local",E=p?l.sharedWithMe[a]:x?l.sharedByMe[a]:null,I=(jh=t.lists)==null?void 0:jh.find(B=>B.id===t.activeListId),T=I?{...I,items:Array.isArray(I.items)?I.items:[],checkedItems:Array.isArray(I.checkedItems)?I.checkedItems:[]}:null;let U=[],y=[],b="",S="",z="";k==="shared-with-me"&&E?(U=(E.items||[]).filter(Boolean),y=E.checkedItems||[],b=E.name||"清單",S=E.icon||"clipboard-list",z=E.ownerName||E.ownerEmail||""):k==="own-shared"&&T&&E?(U=T.items.map(B=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(J=>J.id===B)}).filter(Boolean),y=E.checkedItems||[],b=T.name||"清單",S=T.icon||"clipboard-list"):(U=T?T.items.map(B=>{var H;return(H=t.itemLibrary)==null?void 0:H.find(J=>J.id===B)}).filter(Boolean):[],y=(T==null?void 0:T.checkedItems)||[],b=(T==null?void 0:T.name)||"清單",S=(T==null?void 0:T.icon)||"clipboard-list");const K=y.length,V=U.length,fe=V>0&&K===V,ft=V>0?K/V*100:0,A=N.useRef(fe);N.useEffect(()=>{if(fe&&!A.current){_(!0);const B=setTimeout(()=>_(!1),2500);return()=>clearTimeout(B)}A.current=fe},[fe]);const R=(()=>{const B=[],H={};return U.forEach(J=>{const Je=J.category||"其他";H[Je]||(H[Je]=[]),H[Je].push(J)}),Ve.forEach(J=>{H[J]&&(B.push({category:J,items:H[J]}),delete H[J])}),Object.keys(H).forEach(J=>{B.push({category:J,items:H[J]})}),B})(),L=B=>{if(v(B),k==="shared-with-me"||k==="own-shared")l.toggleSharedCheck(a,B);else{const H={...t,lists:t.lists.map(J=>{if(J.id!==t.activeListId)return J;const Je=Array.isArray(J.checkedItems)?J.checkedItems:[],Yt=Je.includes(B);return{...J,checkedItems:Yt?Je.filter(Er=>Er!==B):[...Je,B]}})};o(H)}},D=()=>{if(k==="shared-with-me"||k==="own-shared")l.resetSharedChecks(a);else{const B={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[]}:H)};o(B)}},F=()=>{if(k==="shared-with-me"||k==="own-shared"){const B=U.map(H=>H.id);l.checkAllShared(a,B)}else{if(!T)return;const B={...t,lists:t.lists.map(H=>H.id===t.activeListId?{...H,checkedItems:[...T.items]}:H)};o(B)}},Ce=B=>{f(H=>H.includes(B)?H.filter(J=>J!==B):[...H,B])},Xe=B=>{C(H=>H.includes(B)?H.filter(J=>J!==B):[...H,B])},Vt=B=>{var Sr;const H=y.includes(B.id),J=(Sr=B.note)==null?void 0:Sr.trim(),Je=J||B.photoURL,Yt=u.includes(B.id),Er=g===B.id;return c.jsxs("div",{children:[c.jsxs("div",{onClick:()=>L(B.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150 cursor-pointer min-h-[56px]
            ${H?"bg-slate-50 dark:bg-slate-800/50":""} ${Je&&Yt?"rounded-b-none border-b-0":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
              ${H?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}
              ${Er&&H?"animate-check-bounce":""}`,onAnimationEnd:()=>v(null),children:H&&c.jsx(Di,{size:14,className:`text-white ${Er?"animate-check-icon-in":""}`})}),B.photoURL&&c.jsx("img",{src:B.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Ss=>{Ss.target.style.display="none"}}),c.jsx("div",{className:"flex-1 min-w-0",children:c.jsx("div",{className:`text-lg transition-all duration-300 ${H?"line-through text-slate-400 dark:text-slate-500 opacity-60":"text-slate-800 dark:text-slate-100"}`,children:B.name})}),Je&&c.jsx("button",{onClick:Ss=>{Ss.stopPropagation(),Ce(B.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                ${Yt?"bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400":"text-slate-400"}`,"aria-label":"展開詳情",children:c.jsx(cp,{size:18,className:`transition-transform duration-200 ${Yt?"rotate-180":""}`})})]}),Je&&Yt&&c.jsxs("div",{className:"px-4 py-3 bg-indigo-50 dark:bg-indigo-900/30 border border-slate-200 dark:border-slate-700 border-t-0 rounded-b-xl",children:[J&&c.jsxs("div",{className:"flex items-start text-sm text-slate-600 dark:text-slate-300 gap-2",children:[c.jsx(Ph,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),c.jsx("span",{children:B.note})]}),B.photoURL&&c.jsx("div",{className:J?"mt-2":"",children:c.jsx("img",{src:B.photoURL,alt:B.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Ss=>{Ss.target.style.display="none"}})})]})]},B.id)};return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[c.jsx(zo,{name:S,size:22,className:"text-indigo-600 dark:text-indigo-400 flex-shrink-0"}),c.jsx("span",{className:"text-lg font-bold truncate",children:b}),k==="shared-with-me"&&z&&c.jsxs("span",{className:"text-xs text-indigo-500 dark:text-indigo-400 flex-shrink-0",children:["來自 ",z]}),k==="own-shared"&&c.jsx("span",{className:"text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),k!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:c.jsx(Es,{size:22,className:"text-indigo-600 dark:text-indigo-400"})})]}),V>0&&c.jsxs("div",{className:"mt-3",children:[c.jsxs("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1",children:[c.jsx("span",{children:"完成進度"}),c.jsxs("span",{children:[K,"/",V]})]}),c.jsx("div",{className:"h-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300",style:{width:`${ft}%`}})})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-4 pt-6 pb-4 no-scrollbar",children:[U.length===0?c.jsxs("div",{className:"text-center py-16 text-slate-400",children:[c.jsx(VS,{size:48,className:"mx-auto mb-4 text-slate-300 dark:text-slate-600"}),c.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),k!=="shared-with-me"&&c.jsx("button",{onClick:()=>i("addItems"),className:"text-indigo-600 dark:text-indigo-400 font-medium active:text-indigo-700 dark:active:text-indigo-300 transition-colors duration-150",children:"從物品庫加入物品"})]}):c.jsx("div",{className:"space-y-4",children:R.map(({category:B,items:H})=>{const J=w.includes(B),Je=H.filter(Sr=>y.includes(Sr.id)).length,Yt=H.length,Er=Je===Yt;return c.jsxs("div",{children:[c.jsxs("button",{onClick:()=>Xe(B),className:"w-full flex items-center gap-2 py-2 px-1 mb-1",children:[c.jsx(cp,{size:16,className:`text-slate-400 transition-transform duration-200 ${J?"-rotate-90":""}`}),c.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:B}),c.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full ${Er?"bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400":"bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"}`,children:[Je,"/",Yt]})]}),!J&&c.jsx("div",{className:"space-y-2 animate-slide-down",children:H.map(Sr=>Vt(Sr))})]},B)})}),U.length>0&&c.jsx("div",{className:"pt-4 pb-16",children:c.jsxs("div",{className:"flex gap-3",children:[c.jsxs("button",{onClick:()=>h("reset"),className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:[c.jsx(kI,{size:16,className:"inline mr-1.5 -mt-0.5"}),"重設"]}),c.jsxs("button",{onClick:()=>h("checkAll"),disabled:fe,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                  ${fe?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-400":"bg-indigo-600 dark:bg-indigo-500 text-white active:bg-indigo-700 dark:active:bg-indigo-600"}`,children:[c.jsx(pS,{size:16,className:"inline mr-1.5 -mt-0.5"}),fe?"準備完成！":"全部確認"]})]})})]}),d==="reset"&&c.jsx(hp,{message:"確定要重設所有勾選？",onConfirm:()=>{D(),h(null)},onCancel:()=>h(null)}),d==="checkAll"&&c.jsx(hp,{message:"確定要勾選全部項目？",onConfirm:()=>{F(),h(null)},onCancel:()=>h(null)}),m&&c.jsx(ZI,{})]})}function tT({sharedData:t,onAddUser:e,onRemoveUser:n,onUnshare:r,onClose:s}){const[i,o]=N.useState(""),[l,a]=N.useState(""),u=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(Eu):[],f=g=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g),d=()=>{const g=i.trim().toLowerCase();if(g){if(!f(g)){a("請輸入有效的 Email");return}if(u.includes(g)){a("已經分享給此帳號");return}a(""),e(g),o("")}},h=g=>{g.key==="Enter"&&d()};return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:s}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",children:c.jsxs("div",{className:"p-4",children:[c.jsx("div",{className:"w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"}),c.jsx("div",{className:"text-lg font-bold text-slate-800 dark:text-slate-100 mb-4",children:"分享清單"}),c.jsxs("div",{className:"flex gap-2 mb-2",children:[c.jsx("input",{type:"email",value:i,onChange:g=>{o(g.target.value),a("")},onKeyDown:h,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:d,className:"px-5 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),l&&c.jsx("div",{className:"text-sm text-rose-500 mb-3",children:l}),u.length>0&&c.jsxs("div",{className:"mt-4",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2",children:"已分享給"}),c.jsx("div",{className:"space-y-2",children:u.map(g=>c.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600",children:[c.jsx("span",{className:"text-slate-700 dark:text-slate-200 text-sm truncate flex-1",children:g}),c.jsx("button",{onClick:()=>n(g),className:"ml-2 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:c.jsx(vt,{size:16})})]},g))})]}),u.length>0&&c.jsx("button",{onClick:r,className:"w-full mt-4 py-3 border border-rose-300 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),c.jsx("button",{onClick:s,className:"w-full mt-3 py-3 text-slate-500 dark:text-slate-400 font-medium min-h-[44px]",children:"關閉"})]})})]})}function nT({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function rT({data:t,user:e,onNavigate:n,onSaveData:r,shared:s}){var y;const[i,o]=N.useState(""),[l,a]=N.useState("clipboard-list"),[u,f]=N.useState(null),[d,h]=N.useState(null),[g,v]=N.useState(null),w=(b,S)=>{const z={...t,activeListId:b};r(z),n("checklist",{sharedListId:S||null})},C=b=>{n("checklist",{sharedListId:b})},m=()=>{if(!i.trim())return;const b={id:Date.now(),name:i.trim(),icon:l,items:[],checkedItems:[]},S={...t,lists:[...t.lists,b],activeListId:b.id};r(S),o(""),a("clipboard-list"),n("checklist",{sharedListId:null})},_=async b=>{if(t.lists.length<=1)return;const S=t.lists.find(V=>V.id===b);if(S!=null&&S.sharedListId&&s)try{await s.unshareList(S.sharedListId)}catch(V){console.error("清理分享資料失敗",V)}const z=t.lists.filter(V=>V.id!==b),K={...t,lists:z,activeListId:t.activeListId===b?z[0].id:t.activeListId};r(K),v(null)},p=(b,S)=>{S.stopPropagation(),!(t.lists.length<=1)&&v(b)},x=(b,S)=>{S.stopPropagation(),f(b.id),h(b.sharedListId||null)},k=async b=>{const S=t.lists.find(z=>z.id===u);if(!(!S||!s))try{const z=await s.shareList(S,t.itemLibrary,[b]),K={...t,lists:t.lists.map(V=>V.id===u?{...V,sharedListId:z}:V)};r(K),h(z)}catch(z){console.error("分享失敗",z),alert("分享失敗："+z.message)}},E=async b=>{if(d)try{await s.addSharedUser(d,b)}catch(S){console.error("新增分享對象失敗",S)}else await k(b)},I=async b=>{if(!(!d||!s))try{await s.removeSharedUser(d,b)}catch(S){console.error("移除分享對象失敗",S)}},T=async()=>{if(!(!d||!s))try{await s.unshareList(d);const b={...t,lists:t.lists.map(S=>S.id===u?{...S,sharedListId:void 0}:S)};r(b),f(null),h(null)}catch(b){console.error("停止分享失敗",b)}},U=s?Object.entries(s.sharedWithMe):[];return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(b=>{const S=(b.items||[]).length,z=(b.checkedItems||[]).length,K=b.id===t.activeListId,V=!!b.sharedListId;return c.jsxs("div",{onClick:()=>w(b.id,b.sharedListId),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                  ${K?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(zo,{name:b.icon,size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"font-medium text-slate-800 dark:text-slate-100 flex items-center",children:[c.jsx("span",{className:"truncate",children:b.name}),V&&c.jsx("span",{className:"ml-2 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 flex-shrink-0",children:"已分享"})]}),c.jsxs("div",{className:"text-sm text-slate-400",children:[z,"/",S," 已確認"]})]}),e&&c.jsx("button",{onClick:fe=>x(b,fe),className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                      ${V?"text-emerald-500 active:bg-emerald-50 dark:active:bg-emerald-900/30":"text-slate-400 active:bg-slate-100 dark:active:bg-slate-700"}`,"aria-label":"分享清單",children:c.jsx(pa,{size:18})}),t.lists.length>1&&c.jsx("button",{onClick:fe=>p(b.id,fe),className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"刪除清單",children:c.jsx(ar,{size:18})})]},b.id)})}),U.length>0&&c.jsxs("div",{className:"mt-6",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-2 px-1",children:"與我分享的清單"}),c.jsx("div",{className:"space-y-2",children:U.map(([b,S])=>{const z=(S.items||[]).length,K=(S.checkedItems||[]).length;return c.jsxs("div",{onClick:()=>C(b),className:"flex items-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800 active:bg-indigo-100 dark:active:bg-indigo-900/50 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[c.jsx("div",{className:"mr-3 text-indigo-600 dark:text-indigo-400",children:c.jsx(zo,{name:S.icon||"clipboard-list",size:24})}),c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-100",children:S.name}),c.jsxs("div",{className:"text-sm text-slate-400",children:[K,"/",z," 已確認",c.jsxs("span",{className:"ml-2 text-indigo-500 dark:text-indigo-400",children:["來自 ",S.ownerName||S.ownerEmail]})]})]})]},b)})})]}),c.jsxs("div",{className:"mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:[c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 mb-3",children:"新增清單"}),c.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:Yy.map(b=>c.jsx("button",{onClick:()=>a(b),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100 dark:active:bg-indigo-900/50
                  ${l===b?"bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400":"text-slate-500 dark:text-slate-400"}`,"aria-label":b,children:c.jsx(zo,{name:b,size:20})},b))}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"text",value:i,onChange:b=>o(b.target.value),placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("button",{onClick:m,className:"px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})]}),u!==null&&c.jsx(tT,{sharedData:d&&((y=s==null?void 0:s.sharedByMe)==null?void 0:y[d])||null,onAddUser:E,onRemoveUser:I,onUnshare:T,onClose:()=>{f(null),h(null)}}),g!==null&&c.jsx(nT,{message:"確定刪除此清單？",onConfirm:()=>_(g),onCancel:()=>v(null)})]})}function sT(t,e=800,n=.7){return new Promise((r,s)=>{const i=new Image,o=URL.createObjectURL(t);i.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:a}=i;(l>e||a>e)&&(l>a?(a=Math.round(a*e/l),l=e):(l=Math.round(l*e/a),a=e));const u=document.createElement("canvas");u.width=l,u.height=a,u.getContext("2d").drawImage(i,0,0,l,a),u.toBlob(d=>{if(!d){s(new Error("Canvas toBlob failed"));return}r(d)},"image/jpeg",n)},i.onerror=()=>{URL.revokeObjectURL(o),s(new Error("Failed to load image"))},i.src=o})}function iT(t){const[e,n]=N.useState(!1),[r,s]=N.useState(null);return{uploadPhoto:async(l,a)=>{if(!t)throw new Error("Not logged in");n(!0),s(null);try{const u=await sT(a),f=`users/${t.uid}/items/${l}/photo.jpg`,d=rp(sp,f);return await jE(d,u,{contentType:"image/jpeg"}),await AE(d)}catch(u){throw s(u.message),u}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const a=`users/${t.uid}/items/${l}/photo.jpg`,u=rp(sp,a);await LE(u)}catch(a){a.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",a)}},uploading:e,error:r}}function oT({message:t,onConfirm:e,onCancel:n}){return c.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[c.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),c.jsx("div",{className:"relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:c.jsxs("div",{className:"p-6",children:[c.jsx("p",{className:"text-center text-lg text-slate-800 dark:text-slate-100 mb-6",children:t}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 rounded-xl font-medium active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function lT({data:t,user:e,onNavigate:n,onSaveData:r}){const[s,i]=N.useState(""),[o,l]=N.useState(Ve[0]),[a,u]=N.useState(""),[f,d]=N.useState(null),[h,g]=N.useState(null),[v,w]=N.useState(null),[C,m]=N.useState(""),[_,p]=N.useState(null),[x,k]=N.useState(!1),[E,I]=N.useState(!1),T=N.useRef(null),{uploadPhoto:U,deletePhoto:y,uploading:b}=iT(e),S={};Ve.forEach(R=>{S[R]=[]}),(t.itemLibrary||[]).forEach(R=>{S[R.category]&&S[R.category].push(R)});const z=R=>{var D;const L=(D=R.target.files)==null?void 0:D[0];L&&(d(L),g(URL.createObjectURL(L)),R.target.value="")},K=()=>{h&&URL.revokeObjectURL(h),d(null),g(null)},V=async()=>{if(!s.trim())return;k(!0);const R=Date.now();let L;if(f&&e)try{L=await U(R,f)}catch{}const D={id:R,name:s.trim(),category:o,note:a.trim(),...L&&{photoURL:L}},F={...t,itemLibrary:[...t.itemLibrary,D]};r(F),i(""),u(""),K(),k(!1),I(!1)},fe=async(R,L,D,F,Ce)=>{const Xe={...t,itemLibrary:t.itemLibrary.map(Vt=>Vt.id===R?{...Vt,name:L,category:D,note:F,...Ce?{photoURL:Ce}:{photoURL:null}}:Vt)};r(Xe),w(null)},ft=async R=>{const L=t.itemLibrary.find(F=>F.id===R);L!=null&&L.photoURL&&y(R);const D={...t,itemLibrary:t.itemLibrary.filter(F=>F.id!==R),lists:t.lists.map(F=>({...F,items:(F.items||[]).filter(Ce=>Ce!==R),checkedItems:(F.checkedItems||[]).filter(Ce=>Ce!==R)}))};r(D),p(null)},A=v?t.itemLibrary.find(R=>R.id===v):null;return c.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"})}),c.jsx("div",{className:"px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700",children:c.jsxs("div",{className:"relative",children:[c.jsx(Rh,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:C,onChange:R=>m(R.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),C&&c.jsx("button",{onClick:()=>m(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(vt,{size:16})})]})}),c.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:Ve.map(R=>{const L=C?S[R].filter(D=>{var Ce,Xe;const F=C.toLowerCase();return((Ce=D.name)==null?void 0:Ce.toLowerCase().includes(F))||((Xe=D.note)==null?void 0:Xe.toLowerCase().includes(F))}):S[R];return L.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:R}),c.jsx("div",{className:"space-y-2",children:L.map(D=>c.jsxs("div",{className:"p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[D.photoURL&&c.jsx("img",{src:D.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:F=>{F.target.style.display="none"}}),c.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:D.name})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:()=>w(D.id),className:"text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[32px]",children:"編輯"}),c.jsx("button",{onClick:()=>p(D.id),className:"text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150 min-h-[32px]",children:"刪除"})]})]}),D.note&&c.jsxs("div",{className:"text-sm text-slate-400 mt-1 flex items-center gap-1",children:[c.jsx(Ph,{size:12,className:"flex-shrink-0"}),D.note]})]},D.id))})]},R)})}),c.jsx("button",{onClick:()=>I(!0),className:"fixed right-4 bottom-20 z-30 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":"新增物品",children:c.jsx(Es,{size:24})}),E&&c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:()=>{I(!1),i(""),u(""),K()},children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom animate-slide-up",onClick:R=>R.stopPropagation(),children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"新增物品"}),c.jsx("button",{onClick:()=>{I(!1),i(""),u(""),K()},className:"p-1 rounded-lg active:bg-slate-100 dark:active:bg-slate-700",children:c.jsx(vt,{size:20,className:"text-slate-400"})})]}),c.jsx("input",{type:"text",value:s,onChange:R=>i(R.target.value),placeholder:"物品名稱...",autoFocus:!0,className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:o,onChange:R=>l(R.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:Ve.map(R=>c.jsx("option",{value:R,children:R},R))}),c.jsx("input",{type:"text",value:a,onChange:R=>u(R.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-2",children:[c.jsx("input",{ref:T,type:"file",accept:"image/*",capture:"environment",onChange:z,className:"hidden"}),h?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:h,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),c.jsx("button",{onClick:K,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]}):c.jsxs("button",{onClick:()=>{var R;return(R=T.current)==null?void 0:R.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[c.jsx(Th,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("button",{onClick:V,disabled:x||b,className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(x||b)&&c.jsx(Xy,{size:18,className:"animate-spin"}),x||b?"新增中...":"+ 新增物品"]})]})}),A&&c.jsx(aT,{item:A,user:e,categories:Ve,onSave:fe,onClose:()=>w(null),uploadPhoto:U,deletePhoto:y}),_!==null&&c.jsx(oT,{message:"確定刪除此物品？",onConfirm:()=>ft(_),onCancel:()=>p(null)})]})}function aT({item:t,user:e,categories:n,onSave:r,onClose:s,uploadPhoto:i,deletePhoto:o}){const[l,a]=N.useState(t.name),[u,f]=N.useState(t.category),[d,h]=N.useState(t.note||""),[g,v]=N.useState(t.photoURL||""),[w,C]=N.useState(null),[m,_]=N.useState(null),[p,x]=N.useState(!1),[k,E]=N.useState(!1),I=N.useRef(null),T=S=>{var K;const z=(K=S.target.files)==null?void 0:K[0];z&&(C(z),m&&URL.revokeObjectURL(m),_(URL.createObjectURL(z)),x(!1),S.target.value="")},U=()=>{m&&URL.revokeObjectURL(m),C(null),_(null),x(!0)},y=async()=>{E(!0);let S=g;if(p&&!w&&(t.photoURL&&o(t.id),S=""),w&&e)try{S=await i(t.id,w)}catch{S=p?"":g}r(t.id,l,u,d,S),E(!1)},b=m||!p&&g;return c.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:s,children:c.jsxs("div",{className:"bg-white dark:bg-slate-800 w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:S=>S.stopPropagation(),children:[c.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900 dark:text-slate-50",children:"編輯物品"}),c.jsx("input",{type:"text",value:l,onChange:S=>a(S.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),c.jsx("select",{value:u,onChange:S=>f(S.target.value),className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:n.map(S=>c.jsx("option",{value:S,children:S},S))}),c.jsx("input",{type:"text",value:d,onChange:S=>h(S.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl mb-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&c.jsxs("div",{className:"mb-4",children:[c.jsx("input",{ref:I,type:"file",accept:"image/*",capture:"environment",onChange:T,className:"hidden"}),b?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:m||g,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200 dark:border-slate-700"}),c.jsxs("div",{className:"flex flex-col gap-2",children:[c.jsx("button",{onClick:()=>{var S;return(S=I.current)==null?void 0:S.click()},className:"text-sm text-indigo-600 dark:text-indigo-400 px-3 py-1.5 border border-indigo-200 dark:border-indigo-800 rounded-lg active:bg-indigo-50 dark:active:bg-indigo-900/30 transition-colors duration-150",children:"更換照片"}),c.jsx("button",{onClick:U,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 dark:border-rose-800 rounded-lg active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:"移除照片"})]})]}):c.jsxs("button",{onClick:()=>{var S;return(S=I.current)==null?void 0:S.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-500 dark:text-slate-400 active:bg-slate-50 dark:active:bg-slate-700 transition-colors duration-150",children:[c.jsx(Th,{size:18}),c.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),c.jsxs("div",{className:"flex gap-3",children:[c.jsx("button",{onClick:s,className:"flex-1 py-3 border border-slate-300 dark:border-slate-600 rounded-xl font-medium text-slate-600 dark:text-slate-300 active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-h-[44px]",children:"取消"}),c.jsxs("button",{onClick:y,disabled:k,className:"flex-1 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[k&&c.jsx(Xy,{size:18,className:"animate-spin"}),k?"儲存中...":"儲存"]})]})]})})}function cT({data:t,onNavigate:e,onSaveData:n}){var C,m;const[r,s]=N.useState(!1),[i,o]=N.useState(""),[l,a]=N.useState(Ve[0]),[u,f]=N.useState(""),d=(C=t.lists)==null?void 0:C.find(_=>_.id===t.activeListId),h=d?{...d,items:Array.isArray(d.items)?d.items:[],checkedItems:Array.isArray(d.checkedItems)?d.checkedItems:[]}:null,g={};Ve.forEach(_=>{g[_]=[]}),(t.itemLibrary||[]).forEach(_=>{g[_.category]&&g[_.category].push(_)});const v=_=>{const p={...t,lists:t.lists.map(x=>{if(x.id!==t.activeListId)return x;const k=Array.isArray(x.items)?x.items:[],E=Array.isArray(x.checkedItems)?x.checkedItems:[],I=k.includes(_);return{...x,items:I?k.filter(T=>T!==_):[...k,_],checkedItems:I?E.filter(T=>T!==_):E}})};n(p)},w=()=>{const _=i.trim();if(!_)return;const p="item_"+Date.now(),x={id:p,name:_,category:l},k={...t,itemLibrary:[...t.itemLibrary||[],x],lists:t.lists.map(E=>{if(E.id!==t.activeListId)return E;const I=Array.isArray(E.items)?E.items:[];return{...E,items:[...I,p]}})};n(k),o(""),s(!1)};return c.jsxs("div",{className:"flex flex-col h-screen",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 px-4 py-3 border-b border-slate-200 dark:border-slate-700 safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg active:bg-slate-100 dark:active:bg-slate-700 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"返回",children:c.jsx(vS,{size:22,className:"text-slate-600 dark:text-slate-300"})}),c.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),c.jsx("div",{className:"w-10"})]}),c.jsxs("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 mt-1",children:["選擇要加入「",h==null?void 0:h.name,"」的物品"]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsx("div",{className:"mb-4",children:c.jsxs("div",{className:"relative",children:[c.jsx(Rh,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",value:u,onChange:_=>f(_.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),u&&c.jsx("button",{onClick:()=>f(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:c.jsx(vt,{size:16})})]})}),u&&Ve.every(_=>{const p=u.toLowerCase();return g[_].filter(x=>{var k,E,I;return((k=x.name)==null?void 0:k.toLowerCase().includes(p))||((E=x.category)==null?void 0:E.toLowerCase().includes(p))||((I=x.note)==null?void 0:I.toLowerCase().includes(p))}).length===0})&&c.jsxs("div",{className:"text-center py-8 text-slate-400",children:["找不到「",u,"」相關物品"]}),Ve.map(_=>{const p=u?g[_].filter(x=>{var E,I,T;const k=u.toLowerCase();return((E=x.name)==null?void 0:E.toLowerCase().includes(k))||((I=x.category)==null?void 0:I.toLowerCase().includes(k))||((T=x.note)==null?void 0:T.toLowerCase().includes(k))}):g[_];return p.length===0?null:c.jsxs("div",{className:"mb-4",children:[c.jsx("div",{className:"text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2",children:_}),c.jsx("div",{className:"space-y-2",children:p.map(x=>{const k=h==null?void 0:h.items.includes(x.id);return c.jsxs("div",{onClick:()=>v(x.id),className:`flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 active:bg-slate-50 dark:active:bg-slate-700 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${k?"ring-2 ring-indigo-500":""}`,children:[c.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${k?"border-indigo-600 bg-indigo-600 dark:border-indigo-500 dark:bg-indigo-500":"border-slate-300 dark:border-slate-600"}`,children:k&&c.jsx(Di,{size:14,className:"text-white"})}),x.photoURL&&c.jsx("img",{src:x.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:E=>{E.target.style.display="none"}}),c.jsxs("div",{className:"flex-1",children:[c.jsx("div",{className:k?"text-slate-800 dark:text-slate-100 font-medium":"text-slate-600 dark:text-slate-300",children:x.name}),x.note&&c.jsxs("div",{className:"text-xs text-slate-400 mt-0.5 flex items-center gap-1",children:[c.jsx(Ph,{size:10,className:"flex-shrink-0"}),x.note]})]})]},x.id)})})]},_)})]}),r&&c.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:()=>{s(!1),o("")}}),r&&c.jsxs("div",{className:"fixed right-4 bottom-[168px] z-50 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 space-y-3",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-700 dark:text-slate-200",children:"快速新增物品"}),c.jsx("input",{type:"text",placeholder:"物品名稱",value:i,onChange:_=>o(_.target.value),onKeyDown:_=>{_.key==="Enter"&&w()},autoFocus:!0,className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsx("select",{value:l,onChange:_=>a(_.target.value),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:Ve.map(_=>c.jsx("option",{value:_,children:_},_))}),c.jsx("button",{onClick:w,disabled:!i.trim(),className:"w-full py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg text-sm font-medium active:bg-indigo-700 dark:active:bg-indigo-600 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}),c.jsx("button",{onClick:()=>{s(_=>!_),r&&o("")},className:"fixed right-4 bottom-[112px] z-50 w-14 h-14 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg flex items-center justify-center active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150","aria-label":r?"關閉新增表單":"新增物品",children:r?c.jsx(vt,{size:24}):c.jsx(Es,{size:24})}),c.jsxs("div",{className:"p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700",children:[c.jsxs("div",{className:"text-center text-slate-500 dark:text-slate-400 mb-3",children:["已選擇 ",((m=h==null?void 0:h.items)==null?void 0:m.length)||0," 個物品"]}),c.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150 min-h-[44px]",children:"完成"})]})]})}function uT({user:t,syncStatus:e,onLogin:n,onLogout:r,onNavigate:s,isAdmin:i,themePreference:o,onThemeChange:l}){const a={offline:{icon:CS,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50 dark:bg-slate-800"},syncing:{icon:ZS,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50 dark:bg-amber-900/30"},synced:{icon:ES,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50 dark:bg-emerald-900/30"},error:{icon:bS,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50 dark:bg-rose-900/30"}},u=a[e]||a.offline,f=u.icon,d=[{value:"light",label:"淺色",icon:MI},{value:"system",label:"系統",icon:lI},{value:"dark",label:"深色",icon:cI}];return c.jsxs("div",{className:"flex flex-col h-full pb-20",children:[c.jsx("div",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 safe-top",children:c.jsx("div",{className:"text-lg font-bold text-slate-900 dark:text-slate-50 text-center",children:"設定"})}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"帳號"}),t?c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&c.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:h=>h.target.style.display="none"}),c.jsxs("div",{className:"min-w-0 flex-1",children:[c.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-50 truncate",children:t.displayName||"使用者"}),c.jsx("div",{className:"text-sm text-slate-500 dark:text-slate-400 truncate",children:t.email})]})]}),c.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 dark:border-rose-800 text-rose-500 rounded-xl font-medium active:bg-rose-50 dark:active:bg-rose-900/30 transition-colors duration-150",children:[c.jsx(rI,{size:18}),"登出"]})]}):c.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[c.jsx(tI,{size:18}),"使用 Google 登入"]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"同步狀態"}),c.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${u.bg}`,children:[c.jsx(f,{size:20,className:`${u.color} ${e==="syncing"?"animate-spin":""}`}),c.jsx("span",{className:`font-medium ${u.color}`,children:u.label})]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"外觀"}),c.jsx("div",{className:"flex gap-2",children:d.map(({value:h,label:g,icon:v})=>c.jsxs("button",{onClick:()=>l(h),className:`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl font-medium text-sm transition-colors duration-150
                  ${o===h?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-500":"bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-2 border-transparent active:bg-slate-100 dark:active:bg-slate-600"}`,children:[c.jsx(v,{size:20}),g]},h))})]}),t&&i&&c.jsxs("button",{onClick:()=>s("admin"),className:"w-full flex items-center justify-center gap-2 py-3 mb-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl font-medium active:bg-indigo-700 dark:active:bg-indigo-600 transition-colors duration-150",children:[c.jsx(Ky,{size:18}),"管理後台"]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsx("div",{className:"text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3",children:"關於"}),c.jsxs("div",{className:"text-sm text-slate-600 dark:text-slate-300",children:[c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"應用程式"}),c.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"打包清單"})]}),c.jsx("div",{className:"border-t border-slate-100 dark:border-slate-700"}),c.jsxs("div",{className:"flex justify-between py-2",children:[c.jsx("span",{children:"版本"}),c.jsx("span",{className:"text-slate-900 dark:text-slate-100 font-medium",children:"1.0.0"})]})]})]})]})]})}function ko({icon:t,label:e,value:n,color:r="text-indigo-600"}){return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[c.jsx(t,{size:20,className:r}),c.jsx("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:e})]}),c.jsx("div",{className:`text-3xl font-bold ${r}`,children:n})]})}function dT({data:t,shared:e}){const n=t.itemLibrary.length,r=t.lists.length,s=Object.keys(e.sharedByMe||{}).length,i=Object.keys(e.sharedWithMe||{}).length,o={};t.itemLibrary.forEach(d=>{o[d.category]=(o[d.category]||0)+1});const l=Object.entries(o).sort((d,h)=>h[1]-d[1]),a={};t.itemLibrary.forEach(d=>{a[d.id]=0}),t.lists.forEach(d=>{(d.items||[]).forEach(h=>{a[h]!==void 0&&a[h]++})});const u=Object.entries(a).sort((d,h)=>h[1]-d[1]).slice(0,5).map(([d,h])=>{const g=t.itemLibrary.find(v=>v.id===Number(d));return g?{name:g.name,count:h}:null}).filter(Boolean),f=l.length>0?l[0][1]:1;return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"數據總覽"}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6",children:[c.jsx(ko,{icon:Ui,label:"物品總數",value:n,color:"text-indigo-600"}),c.jsx(ko,{icon:KS,label:"清單總數",value:r,color:"text-emerald-600"}),c.jsx(ko,{icon:pa,label:"已分享清單",value:s,color:"text-amber-600"}),c.jsx(ko,{icon:Jy,label:"收到分享",value:i,color:"text-rose-600"})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(fS,{size:18,className:"text-slate-500 dark:text-slate-400"}),c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"分類統計"})]}),l.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無物品"}):c.jsx("div",{className:"space-y-3",children:l.map(([d,h])=>c.jsxs("div",{children:[c.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[c.jsx("span",{className:"text-slate-700 dark:text-slate-200",children:d}),c.jsx("span",{className:"text-slate-500 dark:text-slate-400",children:h})]}),c.jsx("div",{className:"h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-indigo-500 rounded-full transition-all",style:{width:`${h/f*100}%`}})})]},d))})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6",children:[c.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[c.jsx(Ui,{size:18,className:"text-slate-500 dark:text-slate-400"}),c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:"最常使用物品 Top 5"})]}),u.length===0?c.jsx("p",{className:"text-sm text-slate-400",children:"尚無資料"}):c.jsx("div",{className:"space-y-2",children:u.map((d,h)=>c.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("span",{className:"text-sm font-bold text-slate-400 w-5",children:h+1}),c.jsx("span",{className:"text-slate-800 dark:text-slate-100",children:d.name})]}),c.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:["出現在 ",d.count," 個清單"]})]},h))})]})]})]})}function hT({data:t,onSaveData:e}){const[n,r]=N.useState(""),[s,i]=N.useState(""),[o,l]=N.useState(new Set),[a,u]=N.useState(null),[f,d]=N.useState({name:"",category:"",note:""}),[h,g]=N.useState(""),[v,w]=N.useState(!1),C=N.useRef(null),m=t.itemLibrary.filter(y=>{const b=!n||y.name.toLowerCase().includes(n.toLowerCase())||(y.note||"").toLowerCase().includes(n.toLowerCase()),S=!s||y.category===s;return b&&S}),_=y=>{l(b=>{const S=new Set(b);return S.has(y)?S.delete(y):S.add(y),S})},p=()=>{o.size===m.length?l(new Set):l(new Set(m.map(y=>y.id)))},x=y=>{u(y.id),d({name:y.name,category:y.category,note:y.note||""})},k=()=>{const y=t.itemLibrary.map(b=>b.id===a?{...b,...f}:b);e({...t,itemLibrary:y}),u(null)},E=y=>{const b=new Set(y),S=t.itemLibrary.filter(K=>!b.has(K.id)),z=t.lists.map(K=>({...K,items:(K.items||[]).filter(V=>!b.has(V)),checkedItems:(K.checkedItems||[]).filter(V=>!b.has(V))}));e({...t,itemLibrary:S,lists:z}),l(new Set)},I=()=>{if(!h)return;const y=t.itemLibrary.map(b=>o.has(b.id)?{...b,category:h}:b);e({...t,itemLibrary:y}),l(new Set),w(!1),g("")},T=()=>{const y=new Blob([JSON.stringify(t.itemLibrary,null,2)],{type:"application/json"}),b=URL.createObjectURL(y),S=document.createElement("a");S.href=b,S.download="item-library.json",S.click(),URL.revokeObjectURL(b)},U=y=>{var z;const b=(z=y.target.files)==null?void 0:z[0];if(!b)return;const S=new FileReader;S.onload=K=>{try{const V=JSON.parse(K.target.result);if(!Array.isArray(V)){alert("格式錯誤：需要 JSON 陣列");return}if(!V.every(F=>F.name&&F.category)){alert("格式錯誤：每個物品需包含 name 和 category");return}const ft=Math.max(0,...t.itemLibrary.map(F=>F.id)),A=new Set(t.itemLibrary.map(F=>F.name)),R=V.filter(F=>!A.has(F.name)).map((F,Ce)=>({id:F.id||ft+Ce+1,name:F.name,category:F.category,note:F.note||"",...F.photoURL?{photoURL:F.photoURL}:{}}));if(R.length===0){alert("沒有新物品可匯入（全部重複）");return}const L=new Set(t.itemLibrary.map(F=>F.id));let D=ft+1;R.forEach(F=>{for(;L.has(D);)D++;F.id=D,L.add(D),D++}),e({...t,itemLibrary:[...t.itemLibrary,...R]}),alert(`已匯入 ${R.length} 個物品`)}catch{alert("JSON 解析失敗")}},S.readAsText(b),y.target.value=""};return c.jsxs("div",{children:[c.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"物品管理"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("button",{onClick:T,className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[c.jsx(jS,{size:16})," 匯出"]}),c.jsxs("button",{onClick:()=>{var y;return(y=C.current)==null?void 0:y.click()},className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200",children:[c.jsx(QI,{size:16})," 匯入"]}),c.jsx("input",{ref:C,type:"file",accept:".json",onChange:U,className:"hidden"})]})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-4",children:[c.jsxs("div",{className:"relative flex-1",children:[c.jsx(Rh,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsx("input",{type:"text",placeholder:"搜尋物品...",value:n,onChange:y=>r(y.target.value),className:"w-full pl-9 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"})]}),c.jsxs("div",{className:"relative",children:[c.jsx(FS,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),c.jsxs("select",{value:s,onChange:y=>i(y.target.value),className:"pl-9 pr-8 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none",children:[c.jsx("option",{value:"",children:"所有分類"}),Ve.map(y=>c.jsx("option",{value:y,children:y},y))]})]})]}),o.size>0&&c.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-lg",children:[c.jsxs("span",{className:"text-sm font-medium text-indigo-700 dark:text-indigo-400",children:["已選 ",o.size," 項"]}),c.jsxs("button",{onClick:()=>{confirm(`確定刪除 ${o.size} 個物品？`)&&E([...o])},className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600",children:[c.jsx(ar,{size:14})," 批量刪除"]}),v?c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("select",{value:h,onChange:y=>g(y.target.value),className:"px-2 py-1.5 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇分類"}),Ve.map(y=>c.jsx("option",{value:y,children:y},y))]}),c.jsx("button",{onClick:I,disabled:!h,className:"px-2 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(Di,{size:14})}),c.jsx("button",{onClick:()=>{w(!1),g("")},className:"px-2 py-1.5 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:c.jsx(vt,{size:14})})]}):c.jsxs("button",{onClick:()=>w(!0),className:"flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 text-white rounded-lg hover:bg-amber-600",children:[c.jsx(UI,{size:14})," 批量改分類"]})]}),c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700",children:c.jsxs("tr",{children:[c.jsx("th",{className:"w-10 px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:m.length>0&&o.size===m.length,onChange:p,className:"rounded"})}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分類"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"備註"}),c.jsx("th",{className:"w-24 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),c.jsxs("tbody",{children:[m.map(y=>c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-700",children:[c.jsx("td",{className:"px-4 py-3",children:c.jsx("input",{type:"checkbox",checked:o.has(y.id),onChange:()=>_(y.id),className:"rounded"})}),a===y.id?c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:f.name,onChange:b=>d(S=>({...S,name:b.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("select",{value:f.category,onChange:b=>d(S=>({...S,category:b.target.value})),className:"px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Ve.map(b=>c.jsx("option",{value:b,children:b},b))})}),c.jsx("td",{className:"px-4 py-2",children:c.jsx("input",{value:f.note,onChange:b=>d(S=>({...S,note:b.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"})}),c.jsx("td",{className:"px-4 py-2",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:k,className:"p-1.5 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded",children:c.jsx(Di,{size:16})}),c.jsx("button",{onClick:()=>u(null),className:"p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded",children:c.jsx(vt,{size:16})})]})})]}):c.jsxs(c.Fragment,{children:[c.jsx("td",{className:"px-4 py-3 text-sm text-slate-800 dark:text-slate-100",children:y.name}),c.jsx("td",{className:"px-4 py-3",children:c.jsx("span",{className:"inline-block px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:y.category})}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:y.note||"-"}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>x(y),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded",children:c.jsx(Iu,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${y.name}」？`)&&E([y.id])},className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded",children:c.jsx(ar,{size:16})})]})})]})]},y.id)),m.length===0&&c.jsx("tr",{children:c.jsx("td",{colSpan:5,className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"})})]})]})}),c.jsxs("div",{className:"lg:hidden space-y-2",children:[m.length===0&&c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有符合的物品"}),m.map(y=>c.jsx("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:c.jsxs("div",{className:"flex items-start gap-3",children:[c.jsx("input",{type:"checkbox",checked:o.has(y.id),onChange:()=>_(y.id),className:"mt-1 rounded"}),a===y.id?c.jsxs("div",{className:"flex-1 space-y-2",children:[c.jsx("input",{value:f.name,onChange:b=>d(S=>({...S,name:b.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"}),c.jsx("select",{value:f.category,onChange:b=>d(S=>({...S,category:b.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Ve.map(b=>c.jsx("option",{value:b,children:b},b))}),c.jsx("input",{value:f.note,onChange:b=>d(S=>({...S,note:b.target.value})),className:"w-full px-2 py-1 border border-slate-300 dark:border-slate-600 rounded text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"備註"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:k,className:"px-3 py-1 text-sm bg-emerald-500 text-white rounded-lg",children:"儲存"}),c.jsx("button",{onClick:()=>u(null),className:"px-3 py-1 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg",children:"取消"})]})]}):c.jsxs("div",{className:"flex-1 min-w-0",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsx("span",{className:"font-medium text-slate-800 dark:text-slate-100",children:y.name}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>x(y),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:c.jsx(Iu,{size:16})}),c.jsx("button",{onClick:()=>{confirm(`刪除「${y.name}」？`)&&E([y.id])},className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(ar,{size:16})})]})]}),c.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:y.category}),y.note&&c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1",children:y.note})]})]})},y.id))]})]})}function fT({data:t,onSaveData:e}){const n=t.templates||[],[r,s]=N.useState(!1),[i,o]=N.useState("list"),[l,a]=N.useState(""),[u,f]=N.useState({name:"",icon:"clipboard-list",description:"",itemIds:[]}),[d,h]=N.useState(null),[g,v]=N.useState(null),[w,C]=N.useState(""),m=()=>{f({name:"",icon:"clipboard-list",description:"",itemIds:[]}),a(""),o("list"),s(!1)},_=()=>{const y=t.lists.find(b=>b.id===Number(l));y&&(f({name:y.name+" 範本",icon:y.icon||"clipboard-list",description:"",itemIds:[...y.items||[]]}),o("manual"))},p=y=>{f(b=>({...b,itemIds:b.itemIds.includes(y)?b.itemIds.filter(S=>S!==y):[...b.itemIds,y]}))},x=()=>{if(!u.name.trim())return;const b={id:Math.max(0,...n.map(S=>S.id))+1,...u,name:u.name.trim()};e({...t,templates:[...n,b]}),m()},k=()=>{if(!u.name.trim())return;const y=n.map(b=>b.id===d?{...b,...u,name:u.name.trim()}:b);e({...t,templates:y}),h(null),m()},E=y=>{confirm("確定刪除此範本？")&&e({...t,templates:n.filter(b=>b.id!==y)})},I=y=>{h(y.id),f({name:y.name,icon:y.icon,description:y.description||"",itemIds:[...y.itemIds]}),s(!0)},T=()=>{const y=n.find(z=>z.id===g),b=t.lists.find(z=>z.id===Number(w));if(!y||!b)return;const S=t.lists.map(z=>z.id===b.id?{...z,items:[...new Set([...z.items||[],...y.itemIds])]}:z);e({...t,lists:S}),v(null),C(""),alert(`已將範本「${y.name}」套用到「${b.name}」`)},U=y=>y.map(b=>t.itemLibrary.find(S=>S.id===b)).filter(Boolean).map(b=>b.name);return c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50",children:"清單範本"}),!r&&c.jsxs("button",{onClick:()=>s(!0),className:"flex items-center gap-1.5 px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:[c.jsx(Es,{size:16})," 建立範本"]})]}),r&&c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:d?"編輯範本":"建立範本"}),!d&&i==="list"&&c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"從現有清單建立"}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:l,onChange:y=>a(y.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(y=>c.jsx("option",{value:y.id,children:y.name},y.id))]}),c.jsx("button",{onClick:_,disabled:!l,className:"px-3 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:c.jsx(RS,{size:16})})]}),c.jsx("button",{onClick:()=>o("manual"),className:"mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"或手動挑選物品"})]}),(i==="manual"||d)&&c.jsxs("div",{className:"space-y-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"範本名稱"}),c.jsx("input",{value:u.name,onChange:y=>f(b=>({...b,name:y.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"例：出國旅行"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"圖示"}),c.jsx("select",{value:u.icon,onChange:y=>f(b=>({...b,icon:y.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:Yy.map(y=>c.jsx("option",{value:y,children:y},y))})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:"說明"}),c.jsx("input",{value:u.description,onChange:y=>f(b=>({...b,description:y.target.value})),className:"w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",placeholder:"選填"})]}),c.jsxs("div",{children:[c.jsxs("label",{className:"block text-sm text-slate-600 dark:text-slate-300 mb-1",children:["選擇物品 (",u.itemIds.length,")"]}),c.jsx("div",{className:"max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-700 rounded-lg",children:t.itemLibrary.map(y=>c.jsxs("label",{className:"flex items-center gap-2 px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("input",{type:"checkbox",checked:u.itemIds.includes(y.id),onChange:()=>p(y.id),className:"rounded"}),c.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100",children:y.name}),c.jsx("span",{className:"text-xs text-slate-400",children:y.category})]},y.id))})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:d?k:x,disabled:!u.name.trim(),className:"px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:d?"更新":"建立"}),c.jsx("button",{onClick:()=>{h(null),m()},className:"px-4 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:"取消"})]})]})]}),g&&c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-2",children:"套用範本"}),c.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 mb-3",children:"選擇要套用的目標清單："}),c.jsxs("div",{className:"flex gap-2",children:[c.jsxs("select",{value:w,onChange:y=>C(y.target.value),className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",children:[c.jsx("option",{value:"",children:"選擇清單..."}),t.lists.map(y=>c.jsx("option",{value:y.id,children:y.name},y.id))]}),c.jsxs("button",{onClick:T,disabled:!w,className:"flex items-center gap-1 px-3 py-2 text-sm bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50",children:[c.jsx(Di,{size:16})," 套用"]}),c.jsx("button",{onClick:()=>{v(null),C("")},className:"px-3 py-2 text-sm bg-slate-200 dark:bg-slate-600 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500",children:c.jsx(vt,{size:16})})]})]}),n.length===0&&!r&&c.jsxs("div",{className:"text-center py-12 text-slate-400",children:[c.jsx(qy,{size:48,className:"mx-auto mb-3 opacity-50"}),c.jsx("p",{children:"尚未建立任何範本"})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",children:n.map(y=>c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-start justify-between mb-2",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50",children:y.name}),y.description&&c.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:y.description})]}),c.jsx("span",{className:"text-xs text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:y.icon})]}),c.jsxs("div",{className:"flex flex-wrap gap-1 mb-3",children:[U(y.itemIds).slice(0,5).map((b,S)=>c.jsx("span",{className:"text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full",children:b},S)),y.itemIds.length>5&&c.jsxs("span",{className:"text-xs text-slate-400",children:["+",y.itemIds.length-5," 更多"]})]}),c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("span",{className:"text-sm text-slate-500 dark:text-slate-400",children:[c.jsx(Ui,{size:14,className:"inline mr-1"}),y.itemIds.length," 個物品"]}),c.jsxs("div",{className:"flex gap-1",children:[c.jsx("button",{onClick:()=>v(y.id),className:"px-2.5 py-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50",children:"套用"}),c.jsx("button",{onClick:()=>I(y),className:"p-1.5 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400",children:c.jsx(Iu,{size:14})}),c.jsx("button",{onClick:()=>E(y.id),className:"p-1.5 text-slate-400 hover:text-rose-600",children:c.jsx(ar,{size:14})})]})]})]},y.id))})]})}function _T({data:t,shared:e}){const[n,r]=N.useState("byMe"),[s,i]=N.useState({}),[o,l]=N.useState(""),a=e.sharedByMe||{},u=e.sharedWithMe||{},f=C=>{var _;const m=t.lists.find(p=>p.sharedListId===C);return(m==null?void 0:m.name)||((_=a[C])==null?void 0:_.name)||"未知清單"},d=async C=>{const m=o.trim();if(m)try{await e.addSharedUser(C,m),i({}),l("")}catch(_){alert("新增失敗："+_.message)}},h=async(C,m)=>{if(confirm(`移除 ${m} 的存取權限？`))try{await e.removeSharedUser(C,m)}catch(_){alert("移除失敗："+_.message)}},g=async C=>{if(confirm("確定取消分享此清單？所有分享對象將失去存取權限。"))try{await e.unshareList(C)}catch(m){alert("取消分享失敗："+m.message)}},v=Object.entries(a),w=Object.entries(u);return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"分享管理"}),c.jsxs("div",{className:"flex border-b border-slate-200 dark:border-slate-700 mb-4",children:[c.jsxs("button",{onClick:()=>r("byMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="byMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[c.jsx(pa,{size:16})," 我分享的 (",v.length,")"]}),c.jsxs("button",{onClick:()=>r("withMe"),className:`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${n==="withMe"?"border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400":"border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`,children:[c.jsx(Jy,{size:16})," 分享給我的 (",w.length,")"]})]}),n==="byMe"&&c.jsx("div",{children:v.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"尚未分享任何清單"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"分享對象"}),c.jsx("th",{className:"w-32 px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"操作"})]})}),c.jsx("tbody",{children:v.map(([C,m])=>{const _=Object.keys(m.sharedWith||{}).map(Eu);return c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:f(C)}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[_.map(p=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[p,c.jsx("button",{onClick:()=>h(C,p),className:"text-slate-400 hover:text-rose-500",children:c.jsx(vt,{size:12})})]},p)),s[C]?c.jsxs("form",{onSubmit:p=>{p.preventDefault(),d(C)},className:"inline-flex gap-1",children:[c.jsx("input",{value:o,onChange:p=>l(p.target.value),placeholder:"email",className:"px-2 py-0.5 text-xs border border-slate-300 dark:border-slate-600 rounded w-40 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",autoFocus:!0}),c.jsx("button",{type:"submit",className:"text-emerald-600 dark:text-emerald-400",children:c.jsx(Es,{size:14})}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"text-slate-400",children:c.jsx(vt,{size:14})})]}):c.jsx("button",{onClick:()=>i({[C]:!0}),className:"text-xs text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增"})]})}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("button",{onClick:()=>g(C),className:"flex items-center gap-1 px-2 py-1 text-xs text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded-lg",children:[c.jsx(ar,{size:14})," 取消分享"]})})]},C)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:v.map(([C,m])=>{const _=Object.keys(m.sharedWith||{}).map(Eu);return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsxs("div",{className:"flex items-center justify-between mb-2",children:[c.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:f(C)}),c.jsx("button",{onClick:()=>g(C),className:"text-xs text-rose-500 hover:underline",children:"取消分享"})]}),c.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:_.map(p=>c.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full",children:[p,c.jsx("button",{onClick:()=>h(C,p),className:"text-slate-400 hover:text-rose-500",children:c.jsx(vt,{size:12})})]},p))}),s[C]?c.jsxs("form",{onSubmit:p=>{p.preventDefault(),d(C)},className:"flex gap-2",children:[c.jsx("input",{value:o,onChange:p=>l(p.target.value),placeholder:"輸入 email",className:"flex-1 px-2 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100",autoFocus:!0}),c.jsx("button",{type:"submit",className:"px-2 py-1 text-sm bg-indigo-600 text-white rounded-lg",children:"新增"}),c.jsx("button",{type:"button",onClick:()=>{i({}),l("")},className:"px-2 py-1 text-sm bg-slate-200 dark:bg-slate-600 dark:text-slate-200 rounded-lg",children:"取消"})]}):c.jsx("button",{onClick:()=>i({[C]:!0}),className:"text-sm text-indigo-600 dark:text-indigo-400 hover:underline",children:"+ 新增分享對象"})]},C)})})]})}),n==="withMe"&&c.jsx("div",{children:w.length===0?c.jsx("p",{className:"text-center py-8 text-sm text-slate-400",children:"沒有人分享清單給你"}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"hidden lg:block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:c.jsxs("table",{className:"w-full",children:[c.jsx("thead",{className:"bg-slate-50 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-600",children:c.jsxs("tr",{children:[c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"清單名稱"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"來源"}),c.jsx("th",{className:"text-left px-4 py-3 text-sm font-semibold text-slate-600 dark:text-slate-300",children:"勾選進度"})]})}),c.jsx("tbody",{children:w.map(([C,m])=>{const _=(m.items||[]).length,p=(m.checkedItems||[]).length;return c.jsxs("tr",{className:"border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsx("td",{className:"px-4 py-3 text-sm font-medium text-slate-800 dark:text-slate-100",children:m.name}),c.jsx("td",{className:"px-4 py-3 text-sm text-slate-500 dark:text-slate-400",children:m.ownerName||m.ownerEmail}),c.jsx("td",{className:"px-4 py-3",children:c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("div",{className:"w-24 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:_>0?`${p/_*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[p,"/",_]})]})})]},C)})})]})}),c.jsx("div",{className:"lg:hidden space-y-3",children:w.map(([C,m])=>{const _=(m.items||[]).length,p=(m.checkedItems||[]).length;return c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4",children:[c.jsx("h3",{className:"font-medium text-slate-800 dark:text-slate-100",children:m.name}),c.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-0.5",children:["來自 ",m.ownerName||m.ownerEmail]}),c.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[c.jsx("div",{className:"flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden",children:c.jsx("div",{className:"h-full bg-emerald-500 rounded-full",style:{width:_>0?`${p/_*100}%`:"0%"}})}),c.jsxs("span",{className:"text-xs text-slate-500 dark:text-slate-400",children:[p,"/",_]})]})]},C)})})]})})]})}function pT({user:t,admin:e}){const{adminEmails:n,addAdmin:r,removeAdmin:s}=e,[i,o]=N.useState(""),l=async u=>{u.preventDefault(),i.trim()&&(await r(i),o(""))},a=async u=>{var f;if(u===((f=t==null?void 0:t.email)==null?void 0:f.toLowerCase())){alert("無法移除自己的管理員權限");return}confirm(`確定移除 ${u} 的管理員權限？`)&&await s(u)};return c.jsxs("div",{children:[c.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-slate-50 mb-4",children:"帳號管理"}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-4",children:[c.jsx("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 mb-3",children:"新增管理員"}),c.jsxs("form",{onSubmit:l,className:"flex gap-2",children:[c.jsx("input",{type:"email",value:i,onChange:u=>o(u.target.value),placeholder:"輸入 email 地址",className:"flex-1 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),c.jsxs("button",{type:"submit",disabled:!i.trim(),className:"flex items-center gap-1.5 px-4 py-2 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50",children:[c.jsx(Es,{size:16})," 新增"]})]})]}),c.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden",children:[c.jsx("div",{className:"px-4 py-3 border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700",children:c.jsxs("h3",{className:"font-semibold text-slate-900 dark:text-slate-50 text-sm",children:["管理員清單 (",n.length,")"]})}),n.length===0?c.jsxs("div",{className:"p-8 text-center text-sm text-slate-400",children:[c.jsx(Tu,{size:32,className:"mx-auto mb-2 opacity-50"}),c.jsx("p",{children:"尚未設定管理員"}),c.jsx("p",{className:"text-xs mt-1",children:"請至 Firebase Console 手動新增第一位管理員"})]}):c.jsx("ul",{children:n.map(u=>{var d;const f=((d=t==null?void 0:t.email)==null?void 0:d.toLowerCase())===u;return c.jsxs("li",{className:"flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700 last:border-0",children:[c.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[c.jsx(Tu,{size:16,className:"text-indigo-500 dark:text-indigo-400 shrink-0"}),c.jsx("span",{className:"text-sm text-slate-800 dark:text-slate-100 truncate",children:u}),f&&c.jsx("span",{className:"text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded-full shrink-0",children:"你"})]}),c.jsx("button",{onClick:()=>a(u),disabled:f,className:"p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30 rounded disabled:opacity-30 disabled:hover:text-slate-400 disabled:hover:bg-transparent shrink-0",title:f?"無法移除自己":"移除管理員",children:c.jsx(ar,{size:16})})]},u)})})]})]})}const ac=[{key:"dashboard",label:"總覽",icon:Ky},{key:"items",label:"物品管理",icon:Ui},{key:"templates",label:"清單範本",icon:qy},{key:"sharing",label:"分享管理",icon:pa},{key:"accounts",label:"帳號管理",icon:Tu}];function mT({data:t,user:e,shared:n,onNavigate:r,onSaveData:s,admin:i}){var g;const[o,l]=N.useState("dashboard"),[a,u]=N.useState(!1),f=v=>{l(v),u(!1)},d=c.jsxs("div",{className:"flex flex-col h-full",children:[c.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-700",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),c.jsx("p",{className:"text-xs text-slate-500 dark:text-slate-400 mt-0.5",children:(e==null?void 0:e.displayName)||(e==null?void 0:e.email)})]}),c.jsx("nav",{className:"flex-1 p-2",children:ac.map(({key:v,label:w,icon:C})=>c.jsxs("button",{onClick:()=>f(v),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${o===v?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100"}`,children:[c.jsx(C,{size:18}),w]},v))}),c.jsx("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700",children:c.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 transition-colors",children:[c.jsx(lc,{size:18}),"返回應用"]})})]}),h=()=>{switch(o){case"dashboard":return c.jsx(dT,{data:t,shared:n});case"items":return c.jsx(hT,{data:t,onSaveData:s});case"templates":return c.jsx(fT,{data:t,onSaveData:s});case"sharing":return c.jsx(_T,{data:t,shared:n});case"accounts":return c.jsx(pT,{user:e,admin:i});default:return null}};return c.jsxs("div",{className:"h-screen bg-slate-50 dark:bg-slate-900",children:[c.jsxs("div",{className:"hidden lg:grid lg:grid-cols-[240px_1fr] h-full",children:[c.jsx("aside",{className:"bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 overflow-y-auto",children:d}),c.jsx("main",{className:"overflow-y-auto p-6",children:c.jsx("div",{className:"max-w-6xl mx-auto",children:h()})})]}),c.jsxs("div",{className:"lg:hidden flex flex-col h-full",children:[c.jsxs("header",{className:"bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center justify-between safe-top",children:[c.jsx("button",{onClick:()=>u(!0),className:"p-1 -ml-1 text-slate-600 dark:text-slate-300",children:c.jsx(iI,{size:24})}),c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:((g=ac.find(v=>v.key===o))==null?void 0:g.label)||"管理後台"}),c.jsx("button",{onClick:()=>r("profile"),className:"p-1 -mr-1 text-slate-600 dark:text-slate-300",children:c.jsx(lc,{size:24})})]}),a&&c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"fixed inset-0 bg-black/40 z-40",onClick:()=>u(!1)}),c.jsxs("div",{className:"fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-800 z-50 shadow-xl safe-top",children:[c.jsxs("div",{className:"flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700",children:[c.jsx("h1",{className:"text-lg font-bold text-slate-900 dark:text-slate-50",children:"管理後台"}),c.jsx("button",{onClick:()=>u(!1),className:"p-1 text-slate-400",children:c.jsx(vt,{size:20})})]}),c.jsx("nav",{className:"p-2",children:ac.map(({key:v,label:w,icon:C})=>c.jsxs("button",{onClick:()=>f(v),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${o===v?"bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400":"text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`,children:[c.jsx(C,{size:18}),w]},v))}),c.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-2 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 safe-bottom",children:c.jsxs("button",{onClick:()=>r("profile"),className:"w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700",children:[c.jsx(lc,{size:18}),"返回應用"]})})]})]}),c.jsx("main",{className:"flex-1 overflow-y-auto p-4",children:h()})]})]})}const gT=[{id:"checklist",label:"清單",icon:AI},{id:"lists",label:"所有清單",icon:GS},{id:"library",label:"物品庫",icon:Ui},{id:"profile",label:"設定",icon:qI}];function yT({currentView:t,onNavigate:e}){return c.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 z-40",children:c.jsx("div",{className:"flex",children:gT.map(n=>{const r=t===n.id,s=n.icon;return c.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600 dark:text-indigo-400":"text-slate-400 active:text-slate-600 dark:active:text-slate-300"}`,"aria-label":n.label,children:[c.jsx(s,{size:22,strokeWidth:r?2.5:2}),c.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function vT({onRefresh:t,onDismiss:e}){return c.jsx("div",{className:"fixed bottom-20 left-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white rounded-xl border border-indigo-500 dark:border-indigo-400 p-4 z-50 animate-slide-up",children:c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(PI,{size:24}),c.jsxs("div",{children:[c.jsx("div",{className:"font-medium",children:"有新版本可用"}),c.jsx("div",{className:"text-sm text-indigo-200 dark:text-indigo-100",children:"點擊更新以取得最新功能"})]})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("button",{onClick:e,className:"px-3 py-2 text-indigo-200 dark:text-indigo-100 active:text-white text-sm transition-colors duration-150 min-h-[44px]",children:"稍後"}),c.jsx("button",{onClick:t,className:"px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm active:bg-indigo-50 transition-colors duration-150 min-h-[44px]",children:"更新"})]})]})})}function xT(){const[t,e]=N.useState("checklist"),[n,r]=N.useState(null),s=BE(),{user:i,data:o,syncStatus:l,saveData:a,handleLogin:u,handleLogout:f}=WE(s),d=$E(i,o),h=HE(i),{needRefresh:g,refresh:v,dismiss:w}=GE(),{preference:C,changeTheme:m}=KE(),_=(x,k)=>{(k==null?void 0:k.sharedListId)!==void 0&&r(k.sharedListId),e(x)},p=t!=="addItems"&&t!=="admin";return c.jsxs(c.Fragment,{children:[t==="checklist"&&c.jsx(eT,{data:o,user:i,syncStatus:l,onLogin:u,onLogout:f,onNavigate:_,onSaveData:a,shared:d,activeSharedListId:n}),t==="lists"&&c.jsx(rT,{data:o,user:i,onNavigate:_,onSaveData:a,shared:d}),t==="library"&&c.jsx(lT,{data:o,user:i,onNavigate:_,onSaveData:a}),t==="addItems"&&c.jsx(cT,{data:o,onNavigate:_,onSaveData:a}),t==="profile"&&c.jsx(uT,{user:i,syncStatus:l,onLogin:u,onLogout:f,onNavigate:_,isAdmin:h.isAdmin,themePreference:C,onThemeChange:m}),t==="admin"&&h.isAdmin&&c.jsx(mT,{data:o,user:i,shared:d,onNavigate:_,onSaveData:a,admin:h}),t==="admin"&&!h.isAdmin&&!h.loading&&c.jsxs("div",{className:"flex flex-col items-center justify-center h-screen p-4",children:[c.jsx("p",{className:"text-slate-500 dark:text-slate-400 mb-4",children:"你沒有管理後台的存取權限"}),c.jsx("button",{onClick:()=>_("profile"),className:"px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg",children:"返回設定"})]}),p&&c.jsx(yT,{currentView:t,onNavigate:x=>_(x,{sharedListId:null})}),g&&c.jsx(vT,{onRefresh:v,onDismiss:w}),!1]})}cc.createRoot(document.getElementById("root")).render(c.jsx(pv.StrictMode,{children:c.jsx(xT,{})}));export{QE as _};
