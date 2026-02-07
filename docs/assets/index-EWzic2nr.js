(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function kv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fp={exports:{}},yl={},zp={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=Symbol.for("react.element"),Cv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),xv=Symbol.for("react.strict_mode"),Iv=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Rv=Symbol.for("react.forward_ref"),bv=Symbol.for("react.suspense"),Pv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),lh=Symbol.iterator;function Ov(t){return t===null||typeof t!="object"?null:(t=lh&&t[lh]||t["@@iterator"],typeof t=="function"?t:null)}var Bp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$p=Object.assign,Wp={};function ri(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Bp}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vp(){}Vp.prototype=ri.prototype;function lu(t,e,n){this.props=t,this.context=e,this.refs=Wp,this.updater=n||Bp}var au=lu.prototype=new Vp;au.constructor=lu;$p(au,ri.prototype);au.isPureReactComponent=!0;var ah=Array.isArray,Hp=Object.prototype.hasOwnProperty,cu={current:null},Gp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Hp.call(e,r)&&!Gp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Es,type:t,key:s,ref:o,props:i,_owner:cu.current}}function Lv(t,e){return{$$typeof:Es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Es}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ch=/\/+/g;function Zl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function io(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Es:case Cv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zl(o,0):r,ah(i)?(n="",t!=null&&(n=t.replace(ch,"$&/")+"/"),io(i,e,n,"",function(c){return c})):i!=null&&(uu(i)&&(i=Lv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ch,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ah(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Zl(s,l);o+=io(s,e,n,a,i)}else if(a=Ov(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Zl(s,l++),o+=io(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ms(t,e,n){if(t==null)return t;var r=[],i=0;return io(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Mv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ze={current:null},so={transition:null},jv={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:so,ReactCurrentOwner:cu};function qp(){throw Error("act(...) is not supported in production builds of React.")}H.Children={map:Ms,forEach:function(t,e,n){Ms(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ms(t,function(){e++}),e},toArray:function(t){return Ms(t,function(e){return e})||[]},only:function(t){if(!uu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=ri;H.Fragment=Sv;H.Profiler=Iv;H.PureComponent=lu;H.StrictMode=xv;H.Suspense=bv;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jv;H.act=qp;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$p({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Hp.call(e,a)&&!Gp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Es,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:Tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nv,_context:t},t.Consumer=t};H.createElement=Kp;H.createFactory=function(t){var e=Kp.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:Rv,render:t}};H.isValidElement=uu;H.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Mv}};H.memo=function(t,e){return{$$typeof:Pv,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=so.transition;so.transition={};try{t()}finally{so.transition=e}};H.unstable_act=qp;H.useCallback=function(t,e){return ze.current.useCallback(t,e)};H.useContext=function(t){return ze.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return ze.current.useDeferredValue(t)};H.useEffect=function(t,e){return ze.current.useEffect(t,e)};H.useId=function(){return ze.current.useId()};H.useImperativeHandle=function(t,e,n){return ze.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return ze.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return ze.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return ze.current.useMemo(t,e)};H.useReducer=function(t,e,n){return ze.current.useReducer(t,e,n)};H.useRef=function(t){return ze.current.useRef(t)};H.useState=function(t){return ze.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return ze.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return ze.current.useTransition()};H.version="18.3.1";zp.exports=H;var O=zp.exports;const Uv=kv(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=O,zv=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Wv=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vv={key:!0,ref:!0,__self:!0,__source:!0};function Qp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)$v.call(e,r)&&!Vv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zv,type:t,key:s,ref:o,props:i,_owner:Wv.current}}yl.Fragment=Bv;yl.jsx=Qp;yl.jsxs=Qp;Fp.exports=yl;var p=Fp.exports,$a={},Yp={exports:{}},it={},Xp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,S){var b=R.length;R.push(S);e:for(;0<b;){var U=b-1>>>1,q=R[U];if(0<i(q,S))R[U]=S,R[b]=q,b=U;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var S=R[0],b=R.pop();if(b!==S){R[0]=b;e:for(var U=0,q=R.length,$e=q>>>1;U<$e;){var ot=2*(U+1)-1,Mt=R[ot],Fn=ot+1,Ds=R[Fn];if(0>i(Mt,b))Fn<q&&0>i(Ds,Mt)?(R[U]=Ds,R[Fn]=b,U=Fn):(R[U]=Mt,R[ot]=b,U=ot);else if(Fn<q&&0>i(Ds,b))R[U]=Ds,R[Fn]=b,U=Fn;else break e}}return S}function i(R,S){var b=R.sortIndex-S.sortIndex;return b!==0?b:R.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,u=null,f=3,_=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var S=n(c);S!==null;){if(S.callback===null)r(c);else if(S.startTime<=R)r(c),S.sortIndex=S.expirationTime,e(a,S);else break;S=n(c)}}function y(R){if(w=!1,m(R),!v)if(n(a)!==null)v=!0,Ye(k);else{var S=n(c);S!==null&&j(y,S.startTime-R)}}function k(R,S){v=!1,w&&(w=!1,g(T),T=-1),_=!0;var b=f;try{for(m(S),u=n(a);u!==null&&(!(u.expirationTime>S)||R&&!P());){var U=u.callback;if(typeof U=="function"){u.callback=null,f=u.priorityLevel;var q=U(u.expirationTime<=S);S=t.unstable_now(),typeof q=="function"?u.callback=q:u===n(a)&&r(a),m(S)}else r(a);u=n(a)}if(u!==null)var $e=!0;else{var ot=n(c);ot!==null&&j(y,ot.startTime-S),$e=!1}return $e}finally{u=null,f=b,_=!1}}var C=!1,x=null,T=-1,M=5,D=-1;function P(){return!(t.unstable_now()-D<M)}function A(){if(x!==null){var R=t.unstable_now();D=R;var S=!0;try{S=x(!0,R)}finally{S?K():(C=!1,x=null)}}else C=!1}var K;if(typeof h=="function")K=function(){h(A)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,fe=ge.port2;ge.port1.onmessage=A,K=function(){fe.postMessage(null)}}else K=function(){E(A,0)};function Ye(R){x=R,C||(C=!0,K())}function j(R,S){T=E(function(){R(t.unstable_now())},S)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,Ye(k))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var S=3;break;default:S=f}var b=f;f=S;try{return R()}finally{f=b}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,S){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var b=f;f=R;try{return S()}finally{f=b}},t.unstable_scheduleCallback=function(R,S,b){var U=t.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?U+b:U):b=U,R){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=b+q,R={id:d++,callback:S,priorityLevel:R,startTime:b,expirationTime:q,sortIndex:-1},b>U?(R.sortIndex=b,e(c,R),n(a)===null&&R===n(c)&&(w?(g(T),T=-1):w=!0,j(y,b-U))):(R.sortIndex=q,e(a,R),v||_||(v=!0,Ye(k))),R},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(R){var S=f;return function(){var b=f;f=S;try{return R.apply(this,arguments)}finally{f=b}}}})(Jp);Xp.exports=Jp;var Hv=Xp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=O,rt=Hv;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zp=new Set,qi={};function dr(t,e){Wr(t,e),Wr(t+"Capture",e)}function Wr(t,e){for(qi[t]=e,t=0;t<e.length;t++)Zp.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wa=Object.prototype.hasOwnProperty,Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uh={},dh={};function qv(t){return Wa.call(dh,t)?!0:Wa.call(uh,t)?!1:Kv.test(t)?dh[t]=!0:(uh[t]=!0,!1)}function Qv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yv(t,e,n,r){if(e===null||typeof e>"u"||Qv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var du=/[\-:]([a-z])/g;function hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(du,hu);Re[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(du,hu);Re[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(du,hu);Re[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function fu(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yv(e,n,i,r)&&(n=null),r||i===null?qv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var rn=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,js=Symbol.for("react.element"),yr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),pu=Symbol.for("react.strict_mode"),Va=Symbol.for("react.profiler"),em=Symbol.for("react.provider"),tm=Symbol.for("react.context"),mu=Symbol.for("react.forward_ref"),Ha=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),gu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),nm=Symbol.for("react.offscreen"),hh=Symbol.iterator;function hi(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,ea;function Ni(t){if(ea===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ea=e&&e[1]||""}return`
`+ea+t}var ta=!1;function na(t,e){if(!t||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ni(t):""}function Xv(t){switch(t.tag){case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 2:case 15:return t=na(t.type,!1),t;case 11:return t=na(t.type.render,!1),t;case 1:return t=na(t.type,!0),t;default:return""}}function Ka(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vr:return"Fragment";case yr:return"Portal";case Va:return"Profiler";case pu:return"StrictMode";case Ha:return"Suspense";case Ga:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tm:return(t.displayName||"Context")+".Consumer";case em:return(t._context.displayName||"Context")+".Provider";case mu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gu:return e=t.displayName||null,e!==null?e:Ka(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return Ka(t(e))}catch{}}return null}function Jv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ka(e);case 8:return e===pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zv(t){var e=rm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=Zv(t))}function im(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function So(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qa(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function sm(t,e){e=e.checked,e!=null&&fu(t,"checked",e,!1)}function Qa(t,e){sm(t,e);var n=bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ya(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ya(t,e.type,bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ph(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ya(t,e,n){(e!=="number"||So(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ti=Array.isArray;function Pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Ti(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bn(n)}}function om(t,e){var n=bn(e.value),r=bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fs,am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fs=Fs||document.createElement("div"),Fs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(t){e0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ai[e]=Ai[t]})});function cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ai.hasOwnProperty(t)&&Ai[t]?(""+e).trim():e+"px"}function um(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var t0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(t,e){if(e){if(t0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tc=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nc=null,Ar=null,Or=null;function _h(t){if(t=Ss(t)){if(typeof nc!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Cl(e),nc(t.stateNode,t.type,e))}}function dm(t){Ar?Or?Or.push(t):Or=[t]:Ar=t}function hm(){if(Ar){var t=Ar,e=Or;if(Or=Ar=null,_h(t),e)for(t=0;t<e.length;t++)_h(e[t])}}function fm(t,e){return t(e)}function pm(){}var ra=!1;function mm(t,e,n){if(ra)return t(e,n);ra=!0;try{return fm(t,e,n)}finally{ra=!1,(Ar!==null||Or!==null)&&(pm(),hm())}}function Yi(t,e){var n=t.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var rc=!1;if(Yt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){rc=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{rc=!1}function n0(t,e,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Oi=!1,xo=null,Io=!1,ic=null,r0={onError:function(t){Oi=!0,xo=t}};function i0(t,e,n,r,i,s,o,l,a){Oi=!1,xo=null,n0.apply(r0,arguments)}function s0(t,e,n,r,i,s,o,l,a){if(i0.apply(this,arguments),Oi){if(Oi){var c=xo;Oi=!1,xo=null}else throw Error(I(198));Io||(Io=!0,ic=c)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yh(t){if(hr(t)!==t)throw Error(I(188))}function o0(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yh(i),t;if(s===r)return yh(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function _m(t){return t=o0(t),t!==null?ym(t):null}function ym(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ym(t);if(e!==null)return e;t=t.sibling}return null}var vm=rt.unstable_scheduleCallback,vh=rt.unstable_cancelCallback,l0=rt.unstable_shouldYield,a0=rt.unstable_requestPaint,pe=rt.unstable_now,c0=rt.unstable_getCurrentPriorityLevel,yu=rt.unstable_ImmediatePriority,wm=rt.unstable_UserBlockingPriority,No=rt.unstable_NormalPriority,u0=rt.unstable_LowPriority,Em=rt.unstable_IdlePriority,vl=null,bt=null;function d0(t){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(vl,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:p0,h0=Math.log,f0=Math.LN2;function p0(t){return t>>>=0,t===0?32:31-(h0(t)/f0|0)|0}var zs=64,Bs=4194304;function Ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function To(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ri(l):(s&=o,s!==0&&(r=Ri(s)))}else o=n&~i,o!==0?r=Ri(o):s!==0&&(r=Ri(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function m0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=m0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function km(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function ia(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function _0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Cm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sm,wu,xm,Im,Nm,oc=!1,$s=[],vn=null,wn=null,En=null,Xi=new Map,Ji=new Map,un=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wh(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":Xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ss(e),e!==null&&wu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function v0(t,e,n,r,i){switch(e){case"focusin":return vn=pi(vn,t,e,n,r,i),!0;case"dragenter":return wn=pi(wn,t,e,n,r,i),!0;case"mouseover":return En=pi(En,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xi.set(s,pi(Xi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ji.set(s,pi(Ji.get(s)||null,t,e,n,r,i)),!0}return!1}function Tm(t){var e=Vn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=gm(n),e!==null){t.blockedOn=e,Nm(t.priority,function(){xm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=lc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tc=r,n.target.dispatchEvent(r),tc=null}else return e=Ss(n),e!==null&&wu(e),t.blockedOn=n,!1;e.shift()}return!0}function Eh(t,e,n){oo(t)&&n.delete(e)}function w0(){oc=!1,vn!==null&&oo(vn)&&(vn=null),wn!==null&&oo(wn)&&(wn=null),En!==null&&oo(En)&&(En=null),Xi.forEach(Eh),Ji.forEach(Eh)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,oc||(oc=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,w0)))}function Zi(t){function e(i){return mi(i,t)}if(0<$s.length){mi($s[0],t);for(var n=1;n<$s.length;n++){var r=$s[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&mi(vn,t),wn!==null&&mi(wn,t),En!==null&&mi(En,t),Xi.forEach(e),Ji.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Tm(n),n.blockedOn===null&&un.shift()}var Lr=rn.ReactCurrentBatchConfig,Ro=!0;function E0(t,e,n,r){var i=Y,s=Lr.transition;Lr.transition=null;try{Y=1,Eu(t,e,n,r)}finally{Y=i,Lr.transition=s}}function k0(t,e,n,r){var i=Y,s=Lr.transition;Lr.transition=null;try{Y=4,Eu(t,e,n,r)}finally{Y=i,Lr.transition=s}}function Eu(t,e,n,r){if(Ro){var i=lc(t,e,n,r);if(i===null)pa(t,e,r,bo,n),wh(t,r);else if(v0(i,t,e,n,r))r.stopPropagation();else if(wh(t,r),e&4&&-1<y0.indexOf(t)){for(;i!==null;){var s=Ss(i);if(s!==null&&Sm(s),s=lc(t,e,n,r),s===null&&pa(t,e,r,bo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pa(t,e,r,null,n)}}var bo=null;function lc(t,e,n,r){if(bo=null,t=_u(r),t=Vn(t),t!==null)if(e=hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bo=t,null}function Rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case yu:return 1;case wm:return 4;case No:case u0:return 16;case Em:return 536870912;default:return 16}default:return 16}}var gn=null,ku=null,lo=null;function bm(){if(lo)return lo;var t,e=ku,n=e.length,r,i="value"in gn?gn.value:gn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lo=i.slice(t,1<r?1-r:void 0)}function ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ws(){return!0}function kh(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ws:kh,this.isPropagationStopped=kh,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ws)},persist:function(){},isPersistent:Ws}),e}var ii={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cu=st(ii),Cs=le({},ii,{view:0,detail:0}),C0=st(Cs),sa,oa,gi,wl=le({},Cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(sa=t.screenX-gi.screenX,oa=t.screenY-gi.screenY):oa=sa=0,gi=t),sa)},movementY:function(t){return"movementY"in t?t.movementY:oa}}),Ch=st(wl),S0=le({},wl,{dataTransfer:0}),x0=st(S0),I0=le({},Cs,{relatedTarget:0}),la=st(I0),N0=le({},ii,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=st(N0),R0=le({},ii,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=st(R0),P0=le({},ii,{data:0}),Sh=st(P0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=L0[t])?!!e[t]:!1}function Su(){return D0}var M0=le({},Cs,{key:function(t){if(t.key){var e=A0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(t){return t.type==="keypress"?ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j0=st(M0),U0=le({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=st(U0),F0=le({},Cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),z0=st(F0),B0=le({},ii,{propertyName:0,elapsedTime:0,pseudoElement:0}),$0=st(B0),W0=le({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=st(W0),H0=[9,13,27,32],xu=Yt&&"CompositionEvent"in window,Li=null;Yt&&"documentMode"in document&&(Li=document.documentMode);var G0=Yt&&"TextEvent"in window&&!Li,Pm=Yt&&(!xu||Li&&8<Li&&11>=Li),Ih=" ",Nh=!1;function Am(t,e){switch(t){case"keyup":return H0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function K0(t,e){switch(t){case"compositionend":return Om(e);case"keypress":return e.which!==32?null:(Nh=!0,Ih);case"textInput":return t=e.data,t===Ih&&Nh?null:t;default:return null}}function q0(t,e){if(wr)return t==="compositionend"||!xu&&Am(t,e)?(t=bm(),lo=ku=gn=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pm&&e.locale!=="ko"?null:e.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q0[t.type]:e==="textarea"}function Lm(t,e,n,r){dm(r),e=Po(e,"onChange"),0<e.length&&(n=new Cu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Di=null,es=null;function Y0(t){Hm(t,0)}function El(t){var e=Cr(t);if(im(e))return t}function X0(t,e){if(t==="change")return e}var Dm=!1;if(Yt){var aa;if(Yt){var ca="oninput"in document;if(!ca){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),ca=typeof Rh.oninput=="function"}aa=ca}else aa=!1;Dm=aa&&(!document.documentMode||9<document.documentMode)}function bh(){Di&&(Di.detachEvent("onpropertychange",Mm),es=Di=null)}function Mm(t){if(t.propertyName==="value"&&El(es)){var e=[];Lm(e,es,t,_u(t)),mm(Y0,e)}}function J0(t,e,n){t==="focusin"?(bh(),Di=e,es=n,Di.attachEvent("onpropertychange",Mm)):t==="focusout"&&bh()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(es)}function ew(t,e){if(t==="click")return El(e)}function tw(t,e){if(t==="input"||t==="change")return El(e)}function nw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var St=typeof Object.is=="function"?Object.is:nw;function ts(t,e){if(St(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wa.call(e,i)||!St(t[i],e[i]))return!1}return!0}function Ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ah(t,e){var n=Ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ph(n)}}function jm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Um(){for(var t=window,e=So();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=So(t.document)}return e}function Iu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rw(t){var e=Um(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jm(n.ownerDocument.documentElement,n)){if(r!==null&&Iu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ah(n,s);var o=Ah(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iw=Yt&&"documentMode"in document&&11>=document.documentMode,Er=null,ac=null,Mi=null,cc=!1;function Oh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cc||Er==null||Er!==So(r)||(r=Er,"selectionStart"in r&&Iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mi&&ts(Mi,r)||(Mi=r,r=Po(ac,"onSelect"),0<r.length&&(e=new Cu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Er)))}function Vs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:Vs("Animation","AnimationEnd"),animationiteration:Vs("Animation","AnimationIteration"),animationstart:Vs("Animation","AnimationStart"),transitionend:Vs("Transition","TransitionEnd")},ua={},Fm={};Yt&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function kl(t){if(ua[t])return ua[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Fm)return ua[t]=e[n];return t}var zm=kl("animationend"),Bm=kl("animationiteration"),$m=kl("animationstart"),Wm=kl("transitionend"),Vm=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(t,e){Vm.set(t,e),dr(e,[t])}for(var da=0;da<Lh.length;da++){var ha=Lh[da],sw=ha.toLowerCase(),ow=ha[0].toUpperCase()+ha.slice(1);Dn(sw,"on"+ow)}Dn(zm,"onAnimationEnd");Dn(Bm,"onAnimationIteration");Dn($m,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Wm,"onTransitionEnd");Wr("onMouseEnter",["mouseout","mouseover"]);Wr("onMouseLeave",["mouseout","mouseover"]);Wr("onPointerEnter",["pointerout","pointerover"]);Wr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function Dh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,s0(r,e,void 0,t),t.currentTarget=null}function Hm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Dh(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Dh(i,l,c),s=a}}}if(Io)throw t=ic,Io=!1,ic=null,t}function ne(t,e){var n=e[pc];n===void 0&&(n=e[pc]=new Set);var r=t+"__bubble";n.has(r)||(Gm(e,t,2,!1),n.add(r))}function fa(t,e,n){var r=0;e&&(r|=4),Gm(n,t,r,e)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function ns(t){if(!t[Hs]){t[Hs]=!0,Zp.forEach(function(n){n!=="selectionchange"&&(lw.has(n)||fa(n,!1,t),fa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hs]||(e[Hs]=!0,fa("selectionchange",!1,e))}}function Gm(t,e,n,r){switch(Rm(e)){case 1:var i=E0;break;case 4:i=k0;break;default:i=Eu}n=i.bind(null,e,n,t),i=void 0,!rc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}mm(function(){var c=s,d=_u(n),u=[];e:{var f=Vm.get(t);if(f!==void 0){var _=Cu,v=t;switch(t){case"keypress":if(ao(n)===0)break e;case"keydown":case"keyup":_=j0;break;case"focusin":v="focus",_=la;break;case"focusout":v="blur",_=la;break;case"beforeblur":case"afterblur":_=la;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Ch;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=z0;break;case zm:case Bm:case $m:_=T0;break;case Wm:_=$0;break;case"scroll":_=C0;break;case"wheel":_=V0;break;case"copy":case"cut":case"paste":_=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=xh}var w=(e&4)!==0,E=!w&&t==="scroll",g=w?f!==null?f+"Capture":null:f;w=[];for(var h=c,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,g!==null&&(y=Yi(h,g),y!=null&&w.push(rs(h,y,m)))),E)break;h=h.return}0<w.length&&(f=new _(f,v,null,n,d),u.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==tc&&(v=n.relatedTarget||n.fromElement)&&(Vn(v)||v[Xt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?Vn(v):null,v!==null&&(E=hr(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(w=Ch,y="onMouseLeave",g="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=xh,y="onPointerLeave",g="onPointerEnter",h="pointer"),E=_==null?f:Cr(_),m=v==null?f:Cr(v),f=new w(y,h+"leave",_,n,d),f.target=E,f.relatedTarget=m,y=null,Vn(d)===c&&(w=new w(g,h+"enter",v,n,d),w.target=m,w.relatedTarget=E,y=w),E=y,_&&v)t:{for(w=_,g=v,h=0,m=w;m;m=gr(m))h++;for(m=0,y=g;y;y=gr(y))m++;for(;0<h-m;)w=gr(w),h--;for(;0<m-h;)g=gr(g),m--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=gr(w),g=gr(g)}w=null}else w=null;_!==null&&Mh(u,f,_,w,!1),v!==null&&E!==null&&Mh(u,E,v,w,!0)}}e:{if(f=c?Cr(c):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var k=X0;else if(Th(f))if(Dm)k=tw;else{k=Z0;var C=J0}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=ew);if(k&&(k=k(t,c))){Lm(u,k,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Ya(f,"number",f.value)}switch(C=c?Cr(c):window,t){case"focusin":(Th(C)||C.contentEditable==="true")&&(Er=C,ac=c,Mi=null);break;case"focusout":Mi=ac=Er=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,Oh(u,n,d);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":Oh(u,n,d)}var x;if(xu)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else wr?Am(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Pm&&n.locale!=="ko"&&(wr||T!=="onCompositionStart"?T==="onCompositionEnd"&&wr&&(x=bm()):(gn=d,ku="value"in gn?gn.value:gn.textContent,wr=!0)),C=Po(c,T),0<C.length&&(T=new Sh(T,t,null,n,d),u.push({event:T,listeners:C}),x?T.data=x:(x=Om(n),x!==null&&(T.data=x)))),(x=G0?K0(t,n):q0(t,n))&&(c=Po(c,"onBeforeInput"),0<c.length&&(d=new Sh("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=x))}Hm(u,e)})}function rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Po(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yi(t,n),s!=null&&r.unshift(rs(t,s,i)),s=Yi(t,e),s!=null&&r.push(rs(t,s,i))),t=t.return}return r}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=Yi(n,s),a!=null&&o.unshift(rs(n,a,l))):i||(a=Yi(n,s),a!=null&&o.push(rs(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aw=/\r\n?/g,cw=/\u0000|\uFFFD/g;function jh(t){return(typeof t=="string"?t:""+t).replace(aw,`
`).replace(cw,"")}function Gs(t,e,n){if(e=jh(e),jh(t)!==e&&n)throw Error(I(425))}function Ao(){}var uc=null,dc=null;function hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fc=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,dw=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(t){return Uh.resolve(null).then(t).catch(hw)}:fc;function hw(t){setTimeout(function(){throw t})}function ma(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zi(e)}function kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var si=Math.random().toString(36).slice(2),Tt="__reactFiber$"+si,is="__reactProps$"+si,Xt="__reactContainer$"+si,pc="__reactEvents$"+si,fw="__reactListeners$"+si,pw="__reactHandles$"+si;function Vn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fh(t);t!==null;){if(n=t[Tt])return n;t=Fh(t)}return e}t=n,n=t.parentNode}return null}function Ss(t){return t=t[Tt]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Cl(t){return t[is]||null}var mc=[],Sr=-1;function Mn(t){return{current:t}}function re(t){0>Sr||(t.current=mc[Sr],mc[Sr]=null,Sr--)}function te(t,e){Sr++,mc[Sr]=t.current,t.current=e}var Pn={},Le=Mn(Pn),Ke=Mn(!1),Zn=Pn;function Vr(t,e){var n=t.type.contextTypes;if(!n)return Pn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function Oo(){re(Ke),re(Le)}function zh(t,e,n){if(Le.current!==Pn)throw Error(I(168));te(Le,e),te(Ke,n)}function Km(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Jv(t)||"Unknown",i));return le({},n,r)}function Lo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pn,Zn=Le.current,te(Le,t),te(Ke,Ke.current),!0}function Bh(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Km(t,e,Zn),r.__reactInternalMemoizedMergedChildContext=t,re(Ke),re(Le),te(Le,t)):re(Ke),te(Ke,n)}var Ut=null,Sl=!1,ga=!1;function qm(t){Ut===null?Ut=[t]:Ut.push(t)}function mw(t){Sl=!0,qm(t)}function jn(){if(!ga&&Ut!==null){ga=!0;var t=0,e=Y;try{var n=Ut;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,Sl=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),vm(yu,jn),i}finally{Y=e,ga=!1}}return null}var xr=[],Ir=0,Do=null,Mo=0,lt=[],at=0,er=null,Bt=1,$t="";function zn(t,e){xr[Ir++]=Mo,xr[Ir++]=Do,Do=t,Mo=e}function Qm(t,e,n){lt[at++]=Bt,lt[at++]=$t,lt[at++]=er,er=t;var r=Bt;t=$t;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bt=1<<32-wt(e)+i|n<<i|r,$t=s+t}else Bt=1<<s|n<<i|r,$t=t}function Nu(t){t.return!==null&&(zn(t,1),Qm(t,1,0))}function Tu(t){for(;t===Do;)Do=xr[--Ir],xr[Ir]=null,Mo=xr[--Ir],xr[Ir]=null;for(;t===er;)er=lt[--at],lt[at]=null,$t=lt[--at],lt[at]=null,Bt=lt[--at],lt[at]=null}var nt=null,et=null,ie=!1,_t=null;function Ym(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $h(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,nt=t,et=kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,nt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=er!==null?{id:Bt,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,nt=t,et=null,!0):!1;default:return!1}}function gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(ie){var e=et;if(e){var n=e;if(!$h(t,e)){if(gc(t))throw Error(I(418));e=kn(n.nextSibling);var r=nt;e&&$h(t,e)?Ym(r,n):(t.flags=t.flags&-4097|2,ie=!1,nt=t)}}else{if(gc(t))throw Error(I(418));t.flags=t.flags&-4097|2,ie=!1,nt=t}}}function Wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;nt=t}function Ks(t){if(t!==nt)return!1;if(!ie)return Wh(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hc(t.type,t.memoizedProps)),e&&(e=et)){if(gc(t))throw Xm(),Error(I(418));for(;e;)Ym(t,e),e=kn(e.nextSibling)}if(Wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=nt?kn(t.stateNode.nextSibling):null;return!0}function Xm(){for(var t=et;t;)t=kn(t.nextSibling)}function Hr(){et=nt=null,ie=!1}function Ru(t){_t===null?_t=[t]:_t.push(t)}var gw=rn.ReactCurrentBatchConfig;function _i(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function qs(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vh(t){var e=t._init;return e(t._payload)}function Jm(t){function e(g,h){if(t){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!t)return null;for(;h!==null;)e(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=In(g,h),g.index=0,g.sibling=null,g}function s(g,h,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,h,m,y){return h===null||h.tag!==6?(h=Ca(m,g.mode,y),h.return=g,h):(h=i(h,m),h.return=g,h)}function a(g,h,m,y){var k=m.type;return k===vr?d(g,h,m.props.children,y,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===an&&Vh(k)===h.type)?(y=i(h,m.props),y.ref=_i(g,h,m),y.return=g,y):(y=go(m.type,m.key,m.props,null,g.mode,y),y.ref=_i(g,h,m),y.return=g,y)}function c(g,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Sa(m,g.mode,y),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function d(g,h,m,y,k){return h===null||h.tag!==7?(h=Yn(m,g.mode,y,k),h.return=g,h):(h=i(h,m),h.return=g,h)}function u(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ca(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case js:return m=go(h.type,h.key,h.props,null,g.mode,m),m.ref=_i(g,null,h),m.return=g,m;case yr:return h=Sa(h,g.mode,m),h.return=g,h;case an:var y=h._init;return u(g,y(h._payload),m)}if(Ti(h)||hi(h))return h=Yn(h,g.mode,m,null),h.return=g,h;qs(g,h)}return null}function f(g,h,m,y){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(g,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case js:return m.key===k?a(g,h,m,y):null;case yr:return m.key===k?c(g,h,m,y):null;case an:return k=m._init,f(g,h,k(m._payload),y)}if(Ti(m)||hi(m))return k!==null?null:d(g,h,m,y,null);qs(g,m)}return null}function _(g,h,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(m)||null,l(h,g,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case js:return g=g.get(y.key===null?m:y.key)||null,a(h,g,y,k);case yr:return g=g.get(y.key===null?m:y.key)||null,c(h,g,y,k);case an:var C=y._init;return _(g,h,m,C(y._payload),k)}if(Ti(y)||hi(y))return g=g.get(m)||null,d(h,g,y,k,null);qs(h,y)}return null}function v(g,h,m,y){for(var k=null,C=null,x=h,T=h=0,M=null;x!==null&&T<m.length;T++){x.index>T?(M=x,x=null):M=x.sibling;var D=f(g,x,m[T],y);if(D===null){x===null&&(x=M);break}t&&x&&D.alternate===null&&e(g,x),h=s(D,h,T),C===null?k=D:C.sibling=D,C=D,x=M}if(T===m.length)return n(g,x),ie&&zn(g,T),k;if(x===null){for(;T<m.length;T++)x=u(g,m[T],y),x!==null&&(h=s(x,h,T),C===null?k=x:C.sibling=x,C=x);return ie&&zn(g,T),k}for(x=r(g,x);T<m.length;T++)M=_(x,g,T,m[T],y),M!==null&&(t&&M.alternate!==null&&x.delete(M.key===null?T:M.key),h=s(M,h,T),C===null?k=M:C.sibling=M,C=M);return t&&x.forEach(function(P){return e(g,P)}),ie&&zn(g,T),k}function w(g,h,m,y){var k=hi(m);if(typeof k!="function")throw Error(I(150));if(m=k.call(m),m==null)throw Error(I(151));for(var C=k=null,x=h,T=h=0,M=null,D=m.next();x!==null&&!D.done;T++,D=m.next()){x.index>T?(M=x,x=null):M=x.sibling;var P=f(g,x,D.value,y);if(P===null){x===null&&(x=M);break}t&&x&&P.alternate===null&&e(g,x),h=s(P,h,T),C===null?k=P:C.sibling=P,C=P,x=M}if(D.done)return n(g,x),ie&&zn(g,T),k;if(x===null){for(;!D.done;T++,D=m.next())D=u(g,D.value,y),D!==null&&(h=s(D,h,T),C===null?k=D:C.sibling=D,C=D);return ie&&zn(g,T),k}for(x=r(g,x);!D.done;T++,D=m.next())D=_(x,g,T,D.value,y),D!==null&&(t&&D.alternate!==null&&x.delete(D.key===null?T:D.key),h=s(D,h,T),C===null?k=D:C.sibling=D,C=D);return t&&x.forEach(function(A){return e(g,A)}),ie&&zn(g,T),k}function E(g,h,m,y){if(typeof m=="object"&&m!==null&&m.type===vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case js:e:{for(var k=m.key,C=h;C!==null;){if(C.key===k){if(k=m.type,k===vr){if(C.tag===7){n(g,C.sibling),h=i(C,m.props.children),h.return=g,g=h;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===an&&Vh(k)===C.type){n(g,C.sibling),h=i(C,m.props),h.ref=_i(g,C,m),h.return=g,g=h;break e}n(g,C);break}else e(g,C);C=C.sibling}m.type===vr?(h=Yn(m.props.children,g.mode,y,m.key),h.return=g,g=h):(y=go(m.type,m.key,m.props,null,g.mode,y),y.ref=_i(g,h,m),y.return=g,g=y)}return o(g);case yr:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else e(g,h);h=h.sibling}h=Sa(m,g.mode,y),h.return=g,g=h}return o(g);case an:return C=m._init,E(g,h,C(m._payload),y)}if(Ti(m))return v(g,h,m,y);if(hi(m))return w(g,h,m,y);qs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=Ca(m,g.mode,y),h.return=g,g=h),o(g)):n(g,h)}return E}var Gr=Jm(!0),Zm=Jm(!1),jo=Mn(null),Uo=null,Nr=null,bu=null;function Pu(){bu=Nr=Uo=null}function Au(t){var e=jo.current;re(jo),t._currentValue=e}function yc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dr(t,e){Uo=t,bu=Nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ve=!0),t.firstContext=null)}function ht(t){var e=t._currentValue;if(bu!==t)if(t={context:t,memoizedValue:e,next:null},Nr===null){if(Uo===null)throw Error(I(308));Nr=t,Uo.dependencies={lanes:0,firstContext:t}}else Nr=Nr.next=t;return e}var Hn=null;function Ou(t){Hn===null?Hn=[t]:Hn.push(t)}function eg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ou(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cn=!1;function Lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,Ou(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function co(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vu(t,n)}}function Hh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fo(t,e,n,r){var i=t.updateQueue;cn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var u=i.baseState;o=0,d=c=a=null,l=s;do{var f=l.lane,_=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,_=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){u=v.call(_,u,f);break e}u=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(_,u,f):v,f==null)break e;u=le({},u,f);break e;case 2:cn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else _={eventTime:_,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,a=u):d=d.next=_,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=u),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);nr|=o,t.lanes=o,t.memoizedState=u}}function Gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var xs={},Pt=Mn(xs),ss=Mn(xs),os=Mn(xs);function Gn(t){if(t===xs)throw Error(I(174));return t}function Du(t,e){switch(te(os,e),te(ss,t),te(Pt,xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ja(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ja(e,t)}re(Pt),te(Pt,e)}function Kr(){re(Pt),re(ss),re(os)}function ng(t){Gn(os.current);var e=Gn(Pt.current),n=Ja(e,t.type);e!==n&&(te(ss,t),te(Pt,n))}function Mu(t){ss.current===t&&(re(Pt),re(ss))}var se=Mn(0);function zo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _a=[];function ju(){for(var t=0;t<_a.length;t++)_a[t]._workInProgressVersionPrimary=null;_a.length=0}var uo=rn.ReactCurrentDispatcher,ya=rn.ReactCurrentBatchConfig,tr=0,oe=null,_e=null,Ee=null,Bo=!1,ji=!1,ls=0,_w=0;function Pe(){throw Error(I(321))}function Uu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!St(t[n],e[n]))return!1;return!0}function Fu(t,e,n,r,i,s){if(tr=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uo.current=t===null||t.memoizedState===null?Ew:kw,t=n(r,i),ji){s=0;do{if(ji=!1,ls=0,25<=s)throw Error(I(301));s+=1,Ee=_e=null,e.updateQueue=null,uo.current=Cw,t=n(r,i)}while(ji)}if(uo.current=$o,e=_e!==null&&_e.next!==null,tr=0,Ee=_e=oe=null,Bo=!1,e)throw Error(I(300));return t}function zu(){var t=ls!==0;return ls=0,t}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function ft(){if(_e===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Ee===null?oe.memoizedState:Ee.next;if(e!==null)Ee=e,_e=t;else{if(t===null)throw Error(I(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ee===null?oe.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function as(t,e){return typeof e=="function"?e(t):e}function va(t){var e=ft(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((tr&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=u,o=r):a=a.next=u,oe.lanes|=d,nr|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,St(r,e.memoizedState)||(Ve=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wa(t){var e=ft(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);St(s,e.memoizedState)||(Ve=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function rg(){}function ig(t,e){var n=oe,r=ft(),i=e(),s=!St(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,Bu(lg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,cs(9,og.bind(null,n,r,i,e),void 0,null),xe===null)throw Error(I(349));tr&30||sg(n,e,i)}return i}function sg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function og(t,e,n,r){e.value=n,e.getSnapshot=r,ag(e)&&cg(t)}function lg(t,e,n){return n(function(){ag(e)&&cg(t)})}function ag(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!St(t,n)}catch{return!0}}function cg(t){var e=Jt(t,1);e!==null&&Et(e,t,1,-1)}function Kh(t){var e=Nt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:t},e.queue=t,t=t.dispatch=ww.bind(null,oe,t),[e.memoizedState,t]}function cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ug(){return ft().memoizedState}function ho(t,e,n,r){var i=Nt();oe.flags|=t,i.memoizedState=cs(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Uu(r,o.deps)){i.memoizedState=cs(e,n,s,r);return}}oe.flags|=t,i.memoizedState=cs(1|e,n,s,r)}function qh(t,e){return ho(8390656,8,t,e)}function Bu(t,e){return xl(2048,8,t,e)}function dg(t,e){return xl(4,2,t,e)}function hg(t,e){return xl(4,4,t,e)}function fg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pg(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,fg.bind(null,e,t),n)}function $u(){}function mg(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gg(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Uu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function _g(t,e,n){return tr&21?(St(n,e)||(n=km(),oe.lanes|=n,nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ve=!0),t.memoizedState=n)}function yw(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=ya.transition;ya.transition={};try{t(!1),e()}finally{Y=n,ya.transition=r}}function yg(){return ft().memoizedState}function vw(t,e,n){var r=xn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vg(t))wg(e,n);else if(n=eg(t,e,n,r),n!==null){var i=je();Et(n,t,r,i),Eg(n,e,r)}}function ww(t,e,n){var r=xn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vg(t))wg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,St(l,o)){var a=e.interleaved;a===null?(i.next=i,Ou(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=eg(t,e,i,r),n!==null&&(i=je(),Et(n,t,r,i),Eg(n,e,r))}}function vg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function wg(t,e){ji=Bo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Eg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vu(t,n)}}var $o={readContext:ht,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Ew={readContext:ht,useCallback:function(t,e){return Nt().memoizedState=[t,e===void 0?null:e],t},useContext:ht,useEffect:qh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ho(4194308,4,fg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ho(4194308,4,t,e)},useInsertionEffect:function(t,e){return ho(4,2,t,e)},useMemo:function(t,e){var n=Nt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vw.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=Nt();return t={current:t},e.memoizedState=t},useState:Kh,useDebugValue:$u,useDeferredValue:function(t){return Nt().memoizedState=t},useTransition:function(){var t=Kh(!1),e=t[0];return t=yw.bind(null,t[1]),Nt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=Nt();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),xe===null)throw Error(I(349));tr&30||sg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,qh(lg.bind(null,r,s,t),[t]),r.flags|=2048,cs(9,og.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Nt(),e=xe.identifierPrefix;if(ie){var n=$t,r=Bt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ls++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_w++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kw={readContext:ht,useCallback:mg,useContext:ht,useEffect:Bu,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:gg,useReducer:va,useRef:ug,useState:function(){return va(as)},useDebugValue:$u,useDeferredValue:function(t){var e=ft();return _g(e,_e.memoizedState,t)},useTransition:function(){var t=va(as)[0],e=ft().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:ig,useId:yg,unstable_isNewReconciler:!1},Cw={readContext:ht,useCallback:mg,useContext:ht,useEffect:Bu,useImperativeHandle:pg,useInsertionEffect:dg,useLayoutEffect:hg,useMemo:gg,useReducer:wa,useRef:ug,useState:function(){return wa(as)},useDebugValue:$u,useDeferredValue:function(t){var e=ft();return _e===null?e.memoizedState=t:_g(e,_e.memoizedState,t)},useTransition:function(){var t=wa(as)[0],e=ft().memoizedState;return[t,e]},useMutableSource:rg,useSyncExternalStore:ig,useId:yg,unstable_isNewReconciler:!1};function mt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function vc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=xn(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(Et(e,t,i,r),co(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=xn(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cn(t,s,i),e!==null&&(Et(e,t,i,r),co(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=xn(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Cn(t,i,r),e!==null&&(Et(e,t,r,n),co(e,t,r))}};function Qh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ts(n,r)||!ts(i,s):!0}function kg(t,e,n){var r=!1,i=Pn,s=e.contextType;return typeof s=="object"&&s!==null?s=ht(s):(i=qe(e)?Zn:Le.current,r=e.contextTypes,s=(r=r!=null)?Vr(t,i):Pn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function wc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Lu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ht(s):(s=qe(e)?Zn:Le.current,i.context=Vr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Il.enqueueReplaceState(i,i.state,null),Fo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,e){try{var n="",r=e;do n+=Xv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ea(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ec(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Sw=typeof WeakMap=="function"?WeakMap:Map;function Cg(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Vo||(Vo=!0,Pc=r),Ec(t,e)},n}function Sg(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ec(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ec(t,e),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Xh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Sw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Uw.bind(null,t,e,n),e.then(t,t))}function Jh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,Cn(n,e,1))),n.lanes|=1),t)}var xw=rn.ReactCurrentOwner,Ve=!1;function Me(t,e,n,r){e.child=t===null?Zm(e,null,n,r):Gr(e,t.child,n,r)}function ef(t,e,n,r,i){n=n.render;var s=e.ref;return Dr(e,i),r=Fu(t,e,n,r,s,i),n=zu(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ie&&n&&Nu(e),e.flags|=1,Me(t,e,r,i),e.child)}function tf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xg(t,e,s,r,i)):(t=go(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=In(s,r),t.ref=e.ref,t.return=e,e.child=t}function xg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ts(s,r)&&t.ref===e.ref)if(Ve=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ve=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return kc(t,e,n,r,i)}function Ig(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Rr,Ze),Ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(Rr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,te(Rr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,te(Rr,Ze),Ze|=r;return Me(t,e,i,n),e.child}function Ng(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kc(t,e,n,r,i){var s=qe(n)?Zn:Le.current;return s=Vr(e,s),Dr(e,i),n=Fu(t,e,n,r,s,i),r=zu(),t!==null&&!Ve?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ie&&r&&Nu(e),e.flags|=1,Me(t,e,n,i),e.child)}function nf(t,e,n,r,i){if(qe(n)){var s=!0;Lo(e)}else s=!1;if(Dr(e,i),e.stateNode===null)fo(t,e),kg(e,n,r),wc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ht(c):(c=qe(n)?Zn:Le.current,c=Vr(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&Yh(e,o,r,c),cn=!1;var f=e.memoizedState;o.state=f,Fo(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Ke.current||cn?(typeof d=="function"&&(vc(e,n,d,r),a=e.memoizedState),(l=cn||Qh(e,n,l,r,f,a,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tg(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:mt(e.type,l),o.props=c,u=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ht(a):(a=qe(n)?Zn:Le.current,a=Vr(e,a));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==u||f!==a)&&Yh(e,o,r,a),cn=!1,f=e.memoizedState,o.state=f,Fo(e,r,o,i);var v=e.memoizedState;l!==u||f!==v||Ke.current||cn?(typeof _=="function"&&(vc(e,n,_,r),v=e.memoizedState),(c=cn||Qh(e,n,c,r,f,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Cc(t,e,n,r,s,i)}function Cc(t,e,n,r,i,s){Ng(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Bh(e,n,!1),Zt(t,e,s);r=e.stateNode,xw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gr(e,t.child,null,s),e.child=Gr(e,null,l,s)):Me(t,e,l,s),e.memoizedState=r.state,i&&Bh(e,n,!0),e.child}function Tg(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),Du(t,e.containerInfo)}function rf(t,e,n,r,i){return Hr(),Ru(i),e.flags|=256,Me(t,e,n,r),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rg(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),te(se,i&1),t===null)return _c(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,r,0,null),t=Yn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xc(n),e.memoizedState=Sc,t):Wu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Iw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=In(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=In(l,s):(s=Yn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sc,r}return s=t.child,t=s.sibling,r=In(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wu(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qs(t,e,n,r){return r!==null&&Ru(r),Gr(e,t.child,null,n),t=Wu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Iw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ea(Error(I(422))),Qs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=Yn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Gr(e,t.child,null,o),e.child.memoizedState=xc(o),e.memoizedState=Sc,s);if(!(e.mode&1))return Qs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=Ea(s,r,void 0),Qs(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ve||l){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),Et(r,t,i,-1))}return Qu(),r=Ea(Error(I(421))),Qs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Fw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=kn(i.nextSibling),nt=e,ie=!0,_t=null,t!==null&&(lt[at++]=Bt,lt[at++]=$t,lt[at++]=er,Bt=t.id,$t=t.overflow,er=e),e=Wu(e,r.children),e.flags|=4096,e)}function sf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yc(t.return,e,n)}function ka(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function bg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sf(t,n,e);else if(t.tag===19)sf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ka(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ka(e,!0,n,null,s);break;case"together":ka(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=In(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=In(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nw(t,e,n){switch(e.tag){case 3:Tg(e),Hr();break;case 5:ng(e);break;case 1:qe(e.type)&&Lo(e);break;case 4:Du(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;te(jo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Rg(t,e,n):(te(se,se.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return bg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Ig(t,e,n)}return Zt(t,e,n)}var Pg,Ic,Ag,Og;Pg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ic=function(){};Ag=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gn(Pt.current);var s=null;switch(n){case"input":i=qa(t,i),r=qa(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=Xa(t,i),r=Xa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ao)}Za(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qi.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qi.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&ne("scroll",t),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Og=function(t,e,n,r){n!==r&&(e.flags|=4)};function yi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tw(t,e,n){var r=e.pendingProps;switch(Tu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return qe(e.type)&&Oo(),Ae(e),null;case 3:return r=e.stateNode,Kr(),re(Ke),re(Le),ju(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ks(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_t!==null&&(Lc(_t),_t=null))),Ic(t,e),Ae(e),null;case 5:Mu(e);var i=Gn(os.current);if(n=e.type,t!==null&&e.stateNode!=null)Ag(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Ae(e),null}if(t=Gn(Pt.current),Ks(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[is]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)ne(bi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":fh(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":mh(r,s),ne("invalid",r)}Za(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Gs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Gs(r.textContent,l,t),i=["children",""+l]):qi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Us(r),ph(r,s,!0);break;case"textarea":Us(r),gh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ao)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[is]=r,Pg(t,e,!1,!1),e.stateNode=t;e:{switch(o=ec(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)ne(bi[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":fh(t,r),i=qa(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",t);break;case"textarea":mh(t,r),i=Xa(t,r),ne("invalid",t);break;default:i=r}Za(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?um(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&am(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Qi(t,a):typeof a=="number"&&Qi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&ne("scroll",t):a!=null&&fu(t,s,a,o))}switch(n){case"input":Us(t),ph(t,r,!1);break;case"textarea":Us(t),gh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)Og(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Gn(os.current),Gn(Pt.current),Ks(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=nt,t!==null))switch(t.tag){case 3:Gs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return Ae(e),null;case 13:if(re(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&et!==null&&e.mode&1&&!(e.flags&128))Xm(),Hr(),e.flags|=98560,s=!1;else if(s=Ks(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Tt]=e}else Hr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),s=!1}else _t!==null&&(Lc(_t),_t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?ye===0&&(ye=3):Qu())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return Kr(),Ic(t,e),t===null&&ns(e.stateNode.containerInfo),Ae(e),null;case 10:return Au(e.type._context),Ae(e),null;case 17:return qe(e.type)&&Oo(),Ae(e),null;case 19:if(re(se),s=e.memoizedState,s===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yi(s,!1);else{if(ye!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zo(t),o!==null){for(e.flags|=128,yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Qr&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=zo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Ae(e),null}else 2*pe()-s.renderingStartTime>Qr&&n!==1073741824&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=se.current,te(se,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return qu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Rw(t,e){switch(Tu(e),e.tag){case 1:return qe(e.type)&&Oo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Kr(),re(Ke),re(Le),ju(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Mu(e),null;case 13:if(re(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Hr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(se),null;case 4:return Kr(),null;case 10:return Au(e.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var Ys=!1,Oe=!1,bw=typeof WeakSet=="function"?WeakSet:Set,L=null;function Tr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function Nc(t,e,n){try{n()}catch(r){ae(t,e,r)}}var of=!1;function Pw(t,e){if(uc=Ro,t=Um(),Iu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var _;u!==n||i!==0&&u.nodeType!==3||(l=o+i),u!==s||r!==0&&u.nodeType!==3||(a=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)f=u,u=_;for(;;){if(u===t)break t;if(f===n&&++c===i&&(l=o),f===s&&++d===r&&(a=o),(_=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=_}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(dc={focusedElem:t,selectionRange:n},Ro=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,g=e.stateNode,h=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:mt(e.type,w),E);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){ae(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=of,of=!1,v}function Ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Nc(e,n,s)}i=i.next}while(i!==r)}}function Nl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Tc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lg(t){var e=t.alternate;e!==null&&(t.alternate=null,Lg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[is],delete e[pc],delete e[fw],delete e[pw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dg(t){return t.tag===5||t.tag===3||t.tag===4}function lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ao));else if(r!==4&&(t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}function bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}var Ie=null,gt=!1;function on(t,e,n){for(n=n.child;n!==null;)Mg(t,e,n),n=n.sibling}function Mg(t,e,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(vl,n)}catch{}switch(n.tag){case 5:Oe||Tr(n,e);case 6:var r=Ie,i=gt;Ie=null,on(t,e,n),Ie=r,gt=i,Ie!==null&&(gt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(gt?(t=Ie,n=n.stateNode,t.nodeType===8?ma(t.parentNode,n):t.nodeType===1&&ma(t,n),Zi(t)):ma(Ie,n.stateNode));break;case 4:r=Ie,i=gt,Ie=n.stateNode.containerInfo,gt=!0,on(t,e,n),Ie=r,gt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nc(n,e,o),i=i.next}while(i!==r)}on(t,e,n);break;case 1:if(!Oe&&(Tr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ae(n,e,l)}on(t,e,n);break;case 21:on(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,on(t,e,n),Oe=r):on(t,e,n);break;default:on(t,e,n)}}function af(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bw),e.forEach(function(r){var i=zw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,gt=!1;break e;case 3:Ie=l.stateNode.containerInfo,gt=!0;break e;case 4:Ie=l.stateNode.containerInfo,gt=!0;break e}l=l.return}if(Ie===null)throw Error(I(160));Mg(s,o,i),Ie=null,gt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){ae(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jg(e,t),e=e.sibling}function jg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pt(e,t),It(t),r&4){try{Ui(3,t,t.return),Nl(3,t)}catch(w){ae(t,t.return,w)}try{Ui(5,t,t.return)}catch(w){ae(t,t.return,w)}}break;case 1:pt(e,t),It(t),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(pt(e,t),It(t),r&512&&n!==null&&Tr(n,n.return),t.flags&32){var i=t.stateNode;try{Qi(i,"")}catch(w){ae(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&sm(i,s),ec(l,o);var c=ec(l,s);for(o=0;o<a.length;o+=2){var d=a[o],u=a[o+1];d==="style"?um(i,u):d==="dangerouslySetInnerHTML"?am(i,u):d==="children"?Qi(i,u):fu(i,d,u,c)}switch(l){case"input":Qa(i,s);break;case"textarea":om(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Pr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[is]=s}catch(w){ae(t,t.return,w)}}break;case 6:if(pt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ae(t,t.return,w)}}break;case 3:if(pt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(e.containerInfo)}catch(w){ae(t,t.return,w)}break;case 4:pt(e,t),It(t);break;case 13:pt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Gu=pe())),r&4&&af(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(c=Oe)||d,pt(e,t),Oe=c):pt(e,t),It(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(L=t,d=t.child;d!==null;){for(u=L=d;L!==null;){switch(f=L,_=f.child,f.tag){case 0:case 11:case 14:case 15:Ui(4,f,f.return);break;case 1:Tr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){ae(r,n,w)}}break;case 5:Tr(f,f.return);break;case 22:if(f.memoizedState!==null){uf(u);continue}}_!==null?(_.return=f,L=_):uf(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=u.stateNode,a=u.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=cm("display",o))}catch(w){ae(t,t.return,w)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){ae(t,t.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:pt(e,t),It(t),r&4&&af(t);break;case 21:break;default:pt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dg(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qi(i,""),r.flags&=-33);var s=lf(t);bc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lf(t);Rc(t,l,o);break;default:throw Error(I(161))}}catch(a){ae(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Aw(t,e,n){L=t,Ug(t)}function Ug(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ys;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Oe;l=Ys;var c=Oe;if(Ys=o,(Oe=a)&&!c)for(L=i;L!==null;)o=L,a=o.child,o.tag===22&&o.memoizedState!==null?df(i):a!==null?(a.return=o,L=a):df(i);for(;s!==null;)L=s,Ug(s),s=s.sibling;L=i,Ys=l,Oe=c}cf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):cf(t)}}function cf(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Oe||Nl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&Zi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Oe||e.flags&512&&Tc(e)}catch(f){ae(e,e.return,f)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function uf(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function df(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nl(4,e)}catch(a){ae(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ae(e,i,a)}}var s=e.return;try{Tc(e)}catch(a){ae(e,s,a)}break;case 5:var o=e.return;try{Tc(e)}catch(a){ae(e,o,a)}}}catch(a){ae(e,e.return,a)}if(e===t){L=null;break}var l=e.sibling;if(l!==null){l.return=e.return,L=l;break}L=e.return}}var Ow=Math.ceil,Wo=rn.ReactCurrentDispatcher,Vu=rn.ReactCurrentOwner,dt=rn.ReactCurrentBatchConfig,G=0,xe=null,me=null,Te=0,Ze=0,Rr=Mn(0),ye=0,us=null,nr=0,Tl=0,Hu=0,Fi=null,We=null,Gu=0,Qr=1/0,jt=null,Vo=!1,Pc=null,Sn=null,Xs=!1,_n=null,Ho=0,zi=0,Ac=null,po=-1,mo=0;function je(){return G&6?pe():po!==-1?po:po=pe()}function xn(t){return t.mode&1?G&2&&Te!==0?Te&-Te:gw.transition!==null?(mo===0&&(mo=km()),mo):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Rm(t.type)),t):1}function Et(t,e,n,r){if(50<zi)throw zi=0,Ac=null,Error(I(185));ks(t,n,r),(!(G&2)||t!==xe)&&(t===xe&&(!(G&2)&&(Tl|=n),ye===4&&dn(t,Te)),Qe(t,r),n===1&&G===0&&!(e.mode&1)&&(Qr=pe()+500,Sl&&jn()))}function Qe(t,e){var n=t.callbackNode;g0(t,e);var r=To(t,t===xe?Te:0);if(r===0)n!==null&&vh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vh(n),e===1)t.tag===0?mw(hf.bind(null,t)):qm(hf.bind(null,t)),dw(function(){!(G&6)&&jn()}),n=null;else{switch(Cm(r)){case 1:n=yu;break;case 4:n=wm;break;case 16:n=No;break;case 536870912:n=Em;break;default:n=No}n=Gg(n,Fg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fg(t,e){if(po=-1,mo=0,G&6)throw Error(I(327));var n=t.callbackNode;if(Mr()&&t.callbackNode!==n)return null;var r=To(t,t===xe?Te:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=G;G|=2;var s=Bg();(xe!==t||Te!==e)&&(jt=null,Qr=pe()+500,Qn(t,e));do try{Mw();break}catch(l){zg(t,l)}while(!0);Pu(),Wo.current=s,G=i,me!==null?e=0:(xe=null,Te=0,e=ye)}if(e!==0){if(e===2&&(i=sc(t),i!==0&&(r=i,e=Oc(t,i))),e===1)throw n=us,Qn(t,0),dn(t,r),Qe(t,pe()),n;if(e===6)dn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lw(i)&&(e=Go(t,r),e===2&&(s=sc(t),s!==0&&(r=s,e=Oc(t,s))),e===1))throw n=us,Qn(t,0),dn(t,r),Qe(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Bn(t,We,jt);break;case 3:if(dn(t,r),(r&130023424)===r&&(e=Gu+500-pe(),10<e)){if(To(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fc(Bn.bind(null,t,We,jt),e);break}Bn(t,We,jt);break;case 4:if(dn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ow(r/1960))-r,10<r){t.timeoutHandle=fc(Bn.bind(null,t,We,jt),r);break}Bn(t,We,jt);break;case 5:Bn(t,We,jt);break;default:throw Error(I(329))}}}return Qe(t,pe()),t.callbackNode===n?Fg.bind(null,t):null}function Oc(t,e){var n=Fi;return t.current.memoizedState.isDehydrated&&(Qn(t,e).flags|=256),t=Go(t,e),t!==2&&(e=We,We=n,e!==null&&Lc(e)),t}function Lc(t){We===null?We=t:We.push.apply(We,t)}function Lw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!St(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dn(t,e){for(e&=~Hu,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function hf(t){if(G&6)throw Error(I(327));Mr();var e=To(t,0);if(!(e&1))return Qe(t,pe()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=sc(t);r!==0&&(e=r,n=Oc(t,r))}if(n===1)throw n=us,Qn(t,0),dn(t,e),Qe(t,pe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Bn(t,We,jt),Qe(t,pe()),null}function Ku(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Qr=pe()+500,Sl&&jn())}}function rr(t){_n!==null&&_n.tag===0&&!(G&6)&&Mr();var e=G;G|=1;var n=dt.transition,r=Y;try{if(dt.transition=null,Y=1,t)return t()}finally{Y=r,dt.transition=n,G=e,!(G&6)&&jn()}}function qu(){Ze=Rr.current,re(Rr)}function Qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uw(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Oo();break;case 3:Kr(),re(Ke),re(Le),ju();break;case 5:Mu(r);break;case 4:Kr();break;case 13:re(se);break;case 19:re(se);break;case 10:Au(r.type._context);break;case 22:case 23:qu()}n=n.return}if(xe=t,me=t=In(t.current,null),Te=Ze=e,ye=0,us=null,Hu=Tl=nr=0,We=Fi=null,Hn!==null){for(e=0;e<Hn.length;e++)if(n=Hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Hn=null}return t}function zg(t,e){do{var n=me;try{if(Pu(),uo.current=$o,Bo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(tr=0,Ee=_e=oe=null,ji=!1,ls=0,Vu.current=null,n===null||n.return===null){ye=1,us=e,me=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Te,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=Jh(o);if(_!==null){_.flags&=-257,Zh(_,o,l,s,e),_.mode&1&&Xh(s,c,e),e=_,a=c;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Xh(s,c,e),Qu();break e}a=Error(I(426))}}else if(ie&&l.mode&1){var E=Jh(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Zh(E,o,l,s,e),Ru(qr(a,l));break e}}s=a=qr(a,l),ye!==4&&(ye=2),Fi===null?Fi=[s]:Fi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Cg(s,a,e);Hh(s,g);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Sg(s,l,e);Hh(s,y);break e}}s=s.return}while(s!==null)}Wg(n)}catch(k){e=k,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Bg(){var t=Wo.current;return Wo.current=$o,t===null?$o:t}function Qu(){(ye===0||ye===3||ye===2)&&(ye=4),xe===null||!(nr&268435455)&&!(Tl&268435455)||dn(xe,Te)}function Go(t,e){var n=G;G|=2;var r=Bg();(xe!==t||Te!==e)&&(jt=null,Qn(t,e));do try{Dw();break}catch(i){zg(t,i)}while(!0);if(Pu(),G=n,Wo.current=r,me!==null)throw Error(I(261));return xe=null,Te=0,ye}function Dw(){for(;me!==null;)$g(me)}function Mw(){for(;me!==null&&!l0();)$g(me)}function $g(t){var e=Hg(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?Wg(t):me=e,Vu.current=null}function Wg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Rw(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ye=6,me=null;return}}else if(n=Tw(n,e,Ze),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ye===0&&(ye=5)}function Bn(t,e,n){var r=Y,i=dt.transition;try{dt.transition=null,Y=1,jw(t,e,n,r)}finally{dt.transition=i,Y=r}return null}function jw(t,e,n,r){do Mr();while(_n!==null);if(G&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_0(t,s),t===xe&&(me=xe=null,Te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xs||(Xs=!0,Gg(No,function(){return Mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dt.transition,dt.transition=null;var o=Y;Y=1;var l=G;G|=4,Vu.current=null,Pw(t,n),jg(n,t),rw(dc),Ro=!!uc,dc=uc=null,t.current=n,Aw(n),a0(),G=l,Y=o,dt.transition=s}else t.current=n;if(Xs&&(Xs=!1,_n=t,Ho=i),s=t.pendingLanes,s===0&&(Sn=null),d0(n.stateNode),Qe(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,t=Pc,Pc=null,t;return Ho&1&&t.tag!==0&&Mr(),s=t.pendingLanes,s&1?t===Ac?zi++:(zi=0,Ac=t):zi=0,jn(),null}function Mr(){if(_n!==null){var t=Cm(Ho),e=dt.transition,n=Y;try{if(dt.transition=null,Y=16>t?16:t,_n===null)var r=!1;else{if(t=_n,_n=null,Ho=0,G&6)throw Error(I(331));var i=G;for(G|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Ui(8,d,s)}var u=d.child;if(u!==null)u.return=d,L=u;else for(;L!==null;){d=L;var f=d.sibling,_=d.return;if(Lg(d),d===c){L=null;break}if(f!==null){f.return=_,L=f;break}L=_}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var h=t.current;for(L=h;L!==null;){o=L;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,L=m;else e:for(o=h;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Nl(9,l)}}catch(k){ae(l,l.return,k)}if(l===o){L=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,L=y;break e}L=l.return}}if(G=i,jn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(vl,t)}catch{}r=!0}return r}finally{Y=n,dt.transition=e}}return!1}function ff(t,e,n){e=qr(n,e),e=Cg(t,e,1),t=Cn(t,e,1),e=je(),t!==null&&(ks(t,1,e),Qe(t,e))}function ae(t,e,n){if(t.tag===3)ff(t,t,n);else for(;e!==null;){if(e.tag===3){ff(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){t=qr(n,t),t=Sg(e,t,1),e=Cn(e,t,1),t=je(),e!==null&&(ks(e,1,t),Qe(e,t));break}}e=e.return}}function Uw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,xe===t&&(Te&n)===n&&(ye===4||ye===3&&(Te&130023424)===Te&&500>pe()-Gu?Qn(t,0):Hu|=n),Qe(t,e)}function Vg(t,e){e===0&&(t.mode&1?(e=Bs,Bs<<=1,!(Bs&130023424)&&(Bs=4194304)):e=1);var n=je();t=Jt(t,e),t!==null&&(ks(t,e,n),Qe(t,n))}function Fw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vg(t,n)}function zw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Vg(t,n)}var Hg;Hg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)Ve=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ve=!1,Nw(t,e,n);Ve=!!(t.flags&131072)}else Ve=!1,ie&&e.flags&1048576&&Qm(e,Mo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fo(t,e),t=e.pendingProps;var i=Vr(e,Le.current);Dr(e,n),i=Fu(null,e,r,t,i,n);var s=zu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(s=!0,Lo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lu(e),i.updater=Il,e.stateNode=i,i._reactInternals=e,wc(e,r,t,n),e=Cc(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&Nu(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=$w(r),t=mt(r,t),i){case 0:e=kc(null,e,r,t,n);break e;case 1:e=nf(null,e,r,t,n);break e;case 11:e=ef(null,e,r,t,n);break e;case 14:e=tf(null,e,r,mt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),kc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),nf(t,e,r,i,n);case 3:e:{if(Tg(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tg(t,e),Fo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qr(Error(I(423)),e),e=rf(t,e,r,n,i);break e}else if(r!==i){i=qr(Error(I(424)),e),e=rf(t,e,r,n,i);break e}else for(et=kn(e.stateNode.containerInfo.firstChild),nt=e,ie=!0,_t=null,n=Zm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){e=Zt(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return ng(e),t===null&&_c(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hc(r,i)?o=null:s!==null&&hc(r,s)&&(e.flags|=32),Ng(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&_c(e),null;case 13:return Rg(t,e,n);case 4:return Du(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gr(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),ef(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,te(jo,r._currentValue),r._currentValue=o,s!==null)if(St(s.value,o)){if(s.children===i.children&&!Ke.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=qt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),yc(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),yc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dr(e,n),i=ht(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=mt(r,e.pendingProps),i=mt(r.type,i),tf(t,e,r,i,n);case 15:return xg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mt(r,i),fo(t,e),e.tag=1,qe(r)?(t=!0,Lo(e)):t=!1,Dr(e,n),kg(e,r,i),wc(e,r,i,n),Cc(null,e,r,!0,t,n);case 19:return bg(t,e,n);case 22:return Ig(t,e,n)}throw Error(I(156,e.tag))};function Gg(t,e){return vm(t,e)}function Bw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new Bw(t,e,n,r)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $w(t){if(typeof t=="function")return Yu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mu)return 11;if(t===gu)return 14}return 2}function In(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function go(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vr:return Yn(n.children,i,s,e);case pu:o=8,i|=8;break;case Va:return t=ct(12,n,e,i|2),t.elementType=Va,t.lanes=s,t;case Ha:return t=ct(13,n,e,i),t.elementType=Ha,t.lanes=s,t;case Ga:return t=ct(19,n,e,i),t.elementType=Ga,t.lanes=s,t;case nm:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case em:o=10;break e;case tm:o=9;break e;case mu:o=11;break e;case gu:o=14;break e;case an:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yn(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=ct(22,t,r,e),t.elementType=nm,t.lanes=n,t.stateNode={isHidden:!1},t}function Ca(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function Sa(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ww(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xu(t,e,n,r,i,s,o,l,a){return t=new Ww(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lu(s),t}function Vw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Kg(t){if(!t)return Pn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(qe(n))return Km(t,n,e)}return e}function qg(t,e,n,r,i,s,o,l,a){return t=Xu(n,r,!0,t,i,s,o,l,a),t.context=Kg(null),n=t.current,r=je(),i=xn(n),s=qt(r,i),s.callback=e??null,Cn(n,s,i),t.current.lanes=i,ks(t,i,r),Qe(t,r),t}function bl(t,e,n,r){var i=e.current,s=je(),o=xn(i);return n=Kg(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cn(i,e,o),t!==null&&(Et(t,i,o,s),co(t,i,o)),o}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ju(t,e){pf(t,e),(t=t.alternate)&&pf(t,e)}function Hw(){return null}var Qg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zu(t){this._internalRoot=t}Pl.prototype.render=Zu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));bl(t,e,null,null)};Pl.prototype.unmount=Zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){bl(null,t,null,null)}),e[Xt]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Im();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&Tm(t)}};function ed(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Al(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function mf(){}function Gw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Ko(o);s.call(c)}}var o=qg(e,r,t,0,null,!1,!1,"",mf);return t._reactRootContainer=o,t[Xt]=o.current,ns(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Ko(a);l.call(c)}}var a=Xu(t,0,!1,null,null,!1,!1,"",mf);return t._reactRootContainer=a,t[Xt]=a.current,ns(t.nodeType===8?t.parentNode:t),rr(function(){bl(e,a,n,r)}),a}function Ol(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ko(o);l.call(a)}}bl(e,o,t,i)}else o=Gw(n,e,t,i,r);return Ko(o)}Sm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ri(e.pendingLanes);n!==0&&(vu(e,n|1),Qe(e,pe()),!(G&6)&&(Qr=pe()+500,jn()))}break;case 13:rr(function(){var r=Jt(t,1);if(r!==null){var i=je();Et(r,t,1,i)}}),Ju(t,1)}};wu=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=je();Et(e,t,134217728,n)}Ju(t,134217728)}};xm=function(t){if(t.tag===13){var e=xn(t),n=Jt(t,e);if(n!==null){var r=je();Et(n,t,e,r)}Ju(t,e)}};Im=function(){return Y};Nm=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};nc=function(t,e,n){switch(e){case"input":if(Qa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cl(r);if(!i)throw Error(I(90));im(r),Qa(r,i)}}}break;case"textarea":om(t,n);break;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}};fm=Ku;pm=rr;var Kw={usingClientEntryPoint:!1,Events:[Ss,Cr,Cl,dm,hm,Ku]},vi={findFiberByHostInstance:Vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qw={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_m(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||Hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Js=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Js.isDisabled&&Js.supportsFiber)try{vl=Js.inject(qw),bt=Js}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kw;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(e))throw Error(I(200));return Vw(t,e,null,n)};it.createRoot=function(t,e){if(!ed(t))throw Error(I(299));var n=!1,r="",i=Qg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xu(t,1,!1,null,null,n,!1,r,i),t[Xt]=e.current,ns(t.nodeType===8?t.parentNode:t),new Zu(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=_m(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return rr(t)};it.hydrate=function(t,e,n){if(!Al(e))throw Error(I(200));return Ol(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!ed(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Qg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qg(e,null,t,1,n??null,i,!1,s,o),t[Xt]=e.current,ns(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pl(e)};it.render=function(t,e,n){if(!Al(e))throw Error(I(200));return Ol(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!Al(t))throw Error(I(40));return t._reactRootContainer?(rr(function(){Ol(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};it.unstable_batchedUpdates=Ku;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Al(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Ol(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function Yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg)}catch(t){console.error(t)}}Yg(),Yp.exports=it;var Qw=Yp.exports,gf=Qw;$a.createRoot=gf.createRoot,$a.hydrateRoot=gf.hydrateRoot;var _f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw oi(e)},oi=function(t){return new Error("Firebase Database ("+Xg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},td={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,d=s>>2,u=(s&3)<<4|l>>4;let f=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(f=64)),r.push(n[d],n[u],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||u==null)throw new Xw;const f=s<<2|l>>4;if(r.push(f),c!==64){const _=l<<4&240|c>>2;if(r.push(_),u!==64){const v=c<<6&192|u;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zg=function(t){const e=Jg(t);return td.encodeByteArray(e,!0)},qo=function(t){return Zg(t).replace(/\./g,"")},Qo=function(t){try{return td.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t){return e_(void 0,t)}function e_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zw(n)||(t[n]=e_(t[n],e[n]));return t}function Zw(t){return t!=="__proto__"}/**
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
 */function e1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const t1=()=>e1().__FIREBASE_DEFAULTS__,n1=()=>{if(typeof process>"u"||typeof _f>"u")return;const t=_f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qo(t[1]);return e&&JSON.parse(e)},nd=()=>{try{return t1()||n1()||r1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},t_=t=>{var e,n;return(n=(e=nd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},n_=t=>{const e=t_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r_=()=>{var t;return(t=nd())===null||t===void 0?void 0:t.config},i_=t=>{var e;return(e=nd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function s_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qo(JSON.stringify(n)),qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function i1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function s1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function o_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function o1(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function l1(){return Xg.NODE_ADMIN===!0}function a1(){try{return typeof indexedDB=="object"}catch{return!1}}function c1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=u1,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ns.prototype.create)}}class Ns{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?d1(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new sn(i,l,r)}}function d1(t,e){return t.replace(h1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ds(Qo(s[0])||""),n=ds(Qo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},f1=function(t){const e=l_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},p1=function(t){const e=l_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Yr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Yo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yf(s)&&yf(o)){if(!Xo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=l^s&(o^l),d=1518500249):(c=s^o^l,d=1859775393):u<60?(c=s&o|l&(s|o),d=2400959708):(c=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+c+a+d+r[u]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function g1(t,e){const n=new _1(t,e);return n.subscribe.bind(n)}class _1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");y1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xa),i.error===void 0&&(i.error=xa),i.complete===void 0&&(i.complete=xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function y1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xa(){}function Ll(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ve(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class w1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Is;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k1(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E1(t){return t===$n?void 0:t}function k1(t){return t.instantiationMode==="EAGER"}/**
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
 */class C1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const S1={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},x1=X.INFO,I1={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},N1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=I1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=x1,this._logHandler=N1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?S1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const T1=(t,e)=>e.some(n=>t instanceof n);let vf,wf;function R1(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function b1(){return wf||(wf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const a_=new WeakMap,Mc=new WeakMap,c_=new WeakMap,Ia=new WeakMap,sd=new WeakMap;function P1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Nn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&a_.set(n,t)}).catch(()=>{}),sd.set(e,t),e}function A1(t){if(Mc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Mc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||c_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function O1(t){jc=t(jc)}function L1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Na(this),e,...n);return c_.set(r,e.sort?e.sort():[e]),Nn(r)}:b1().includes(t)?function(...e){return t.apply(Na(this),e),Nn(a_.get(this))}:function(...e){return Nn(t.apply(Na(this),e))}}function D1(t){return typeof t=="function"?L1(t):(t instanceof IDBTransaction&&A1(t),T1(t,R1())?new Proxy(t,jc):t)}function Nn(t){if(t instanceof IDBRequest)return P1(t);if(Ia.has(t))return Ia.get(t);const e=D1(t);return e!==t&&(Ia.set(t,e),sd.set(e,t)),e}const Na=t=>sd.get(t);function M1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Nn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Nn(o.result),a.oldVersion,a.newVersion,Nn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const j1=["get","getKey","getAll","getAllKeys","count"],U1=["put","add","delete","clear"],Ta=new Map;function Ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=U1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ta.set(e,s),s}O1(t=>({...t,get:(e,n,r)=>Ef(e,n)||t.get(e,n,r),has:(e,n)=>!!Ef(e,n)||t.has(e,n)}));/**
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
 */class F1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(z1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function z1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",kf="0.10.13";/**
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
 */const en=new id("@firebase/app"),B1="@firebase/app-compat",$1="@firebase/analytics-compat",W1="@firebase/analytics",V1="@firebase/app-check-compat",H1="@firebase/app-check",G1="@firebase/auth",K1="@firebase/auth-compat",q1="@firebase/database",Q1="@firebase/data-connect",Y1="@firebase/database-compat",X1="@firebase/functions",J1="@firebase/functions-compat",Z1="@firebase/installations",eE="@firebase/installations-compat",tE="@firebase/messaging",nE="@firebase/messaging-compat",rE="@firebase/performance",iE="@firebase/performance-compat",sE="@firebase/remote-config",oE="@firebase/remote-config-compat",lE="@firebase/storage",aE="@firebase/storage-compat",cE="@firebase/firestore",uE="@firebase/vertexai-preview",dE="@firebase/firestore-compat",hE="firebase",fE="10.14.1";/**
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
 */const Fc="[DEFAULT]",pE={[Uc]:"fire-core",[B1]:"fire-core-compat",[W1]:"fire-analytics",[$1]:"fire-analytics-compat",[H1]:"fire-app-check",[V1]:"fire-app-check-compat",[G1]:"fire-auth",[K1]:"fire-auth-compat",[q1]:"fire-rtdb",[Q1]:"fire-data-connect",[Y1]:"fire-rtdb-compat",[X1]:"fire-fn",[J1]:"fire-fn-compat",[Z1]:"fire-iid",[eE]:"fire-iid-compat",[tE]:"fire-fcm",[nE]:"fire-fcm-compat",[rE]:"fire-perf",[iE]:"fire-perf-compat",[sE]:"fire-rc",[oE]:"fire-rc-compat",[lE]:"fire-gcs",[aE]:"fire-gcs-compat",[cE]:"fire-fst",[dE]:"fire-fst-compat",[uE]:"fire-vertex","fire-js":"fire-js",[hE]:"fire-js-all"};/**
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
 */const Jo=new Map,mE=new Map,zc=new Map;function Cf(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(zc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of Jo.values())Cf(n,t);for(const n of mE.values())Cf(n,t);return!0}function Ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wt(t){return t.settings!==void 0}/**
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
 */const gE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Ns("app","Firebase",gE);/**
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
 */class _E{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const fr=fE;function u_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=r_()),!n)throw Tn.create("no-options");const s=Jo.get(i);if(s){if(Xo(n,s.options)&&Xo(r,s.config))return s;throw Tn.create("duplicate-app",{appName:i})}const o=new C1(i);for(const a of zc.values())o.addComponent(a);const l=new _E(n,r,o);return Jo.set(i,l),l}function od(t=Fc){const e=Jo.get(t);if(!e&&t===Fc&&r_())return u_();if(!e)throw Tn.create("no-app",{appName:t});return e}function At(t,e,n){var r;let i=(r=pE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(l.join(" "));return}ir(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yE="firebase-heartbeat-database",vE=1,hs="firebase-heartbeat-store";let Ra=null;function d_(){return Ra||(Ra=M1(yE,vE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Ra}async function wE(t){try{const n=(await d_()).transaction(hs),r=await n.objectStore(hs).get(h_(t));return await n.done,r}catch(e){if(e instanceof sn)en.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function Sf(t,e){try{const r=(await d_()).transaction(hs,"readwrite");await r.objectStore(hs).put(e,h_(t)),await r.done}catch(n){if(n instanceof sn)en.warn(n.message);else{const r=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function h_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EE=1024,kE=30*24*60*60*1e3;class CE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kE}),this._storage.overwrite(this._heartbeatsCache))}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=xf(),{heartbeatsToSend:r,unsentEntries:i}=SE(this._heartbeatsCache.heartbeats),s=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function xf(){return new Date().toISOString().substring(0,10)}function SE(t,e=EE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),If(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a1()?c1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function If(t){return qo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function IE(t){ir(new An("platform-logger",e=>new F1(e),"PRIVATE")),ir(new An("heartbeat",e=>new CE(e),"PRIVATE")),At(Uc,kf,t),At(Uc,kf,"esm2017"),At("fire-js","")}IE("");function ld(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function f_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NE=f_,p_=new Ns("auth","Firebase",f_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new id("@firebase/auth");function TE(t,...e){Zo.logLevel<=X.WARN&&Zo.warn(`Auth (${fr}): ${t}`,...e)}function _o(t,...e){Zo.logLevel<=X.ERROR&&Zo.error(`Auth (${fr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw cd(t,...e)}function kt(t,...e){return cd(t,...e)}function ad(t,e,n){const r=Object.assign(Object.assign({},NE()),{[e]:n});return new Ns("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return ad(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Lt(t,"argument-error"),ad(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return p_.create(t,...e)}function z(t,e,...n){if(!t)throw cd(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function tn(t,e){t||Vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function bE(){return Nf()==="http:"||Nf()==="https:"}function Nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bE()||s1()||"connection"in navigator)?navigator.onLine:!0}function AE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=rd()||o_()}get(){return PE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE=new Ts(3e4,6e4);function dd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ai(t,e,n,r,i={}){return g_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=li(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},s);return i1()||(c.referrerPolicy="no-referrer"),m_.fetch()(__(t,t.config.apiHost,n,l),c)})}async function g_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OE),e);try{const i=new ME(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Zs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Zs(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ad(t,d,c);Lt(t,d)}}catch(i){if(i instanceof sn)throw i;Lt(t,"network-request-failed",{message:String(i)})}}async function DE(t,e,n,r,i={}){const s=await ai(t,e,n,r,i);return"mfaPendingCredential"in s&&Lt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function __(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ud(t.config,i):`${t.config.apiScheme}://${i}`}class ME{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),LE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function y_(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UE(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=hd(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bi(ba(i.auth_time)),issuedAtTime:Bi(ba(i.iat)),expirationTime:Bi(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function hd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qo(n);return i?JSON.parse(i):(_o("Failed to decode base64 JWT payload"),null)}catch(i){return _o("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Tf(t){const e=hd(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&FE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fs(t,y_(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?v_(s.providerUserInfo):[],l=$E(t.providerData,o),a=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new $c(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function BE(t){const e=ve(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $E(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function v_(t){return t.map(e=>{var{providerId:n}=e,r=ld(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WE(t,e){const n=await g_(t,{},async()=>{const r=li({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=__(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",m_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VE(t,e){return ai(t,"POST","/v2/accounts:revokeToken",dd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Tf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await WE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jr;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ld(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $c(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return UE(this,e)}reload(){return BE(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wt(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await fs(this,jE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,E=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:y,isAnonymous:k,providerData:C,stsTokenManager:x}=n;z(m&&x,e,"internal-error");const T=jr.fromJSON(this.name,x);z(typeof m=="string",e,"internal-error"),ln(u,e.name),ln(f,e.name),z(typeof y=="boolean",e,"internal-error"),z(typeof k=="boolean",e,"internal-error"),ln(_,e.name),ln(v,e.name),ln(w,e.name),ln(E,e.name),ln(g,e.name),ln(h,e.name);const M=new Ht({uid:m,auth:e,email:f,emailVerified:y,displayName:u,isAnonymous:k,photoURL:v,phoneNumber:_,tenantId:w,stsTokenManager:T,createdAt:g,lastLoginAt:h});return C&&Array.isArray(C)&&(M.providerData=C.map(D=>Object.assign({},D))),E&&(M._redirectEventId=E),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new jr;i.updateFromServerResponse(n);const s=new Ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await el(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?v_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new jr;l.updateFromIdToken(r);const a=new Ht({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $c(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,c),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;function Gt(t){tn(t instanceof Function,"Expected a class definition");let e=Rf.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rf.set(t,e),e)}/**
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
 */class w_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}w_.type="NONE";const bf=w_;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ur{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ur(Gt(bf),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Gt(bf);const o=yo(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Ht._fromJSON(e,d);c!==s&&(l=u),s=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ur(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ur(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(S_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(I_(e))return"Blackberry";if(N_(e))return"Webos";if(k_(e))return"Safari";if((e.includes("chrome/")||C_(e))&&!e.includes("edge/"))return"Chrome";if(x_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E_(t=Fe()){return/firefox\//i.test(t)}function k_(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function C_(t=Fe()){return/crios\//i.test(t)}function S_(t=Fe()){return/iemobile/i.test(t)}function x_(t=Fe()){return/android/i.test(t)}function I_(t=Fe()){return/blackberry/i.test(t)}function N_(t=Fe()){return/webos/i.test(t)}function fd(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HE(t=Fe()){var e;return fd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GE(){return o1()&&document.documentMode===10}function T_(t=Fe()){return fd(t)||x_(t)||N_(t)||I_(t)||/windows phone/i.test(t)||S_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t,e=[]){let n;switch(t){case"Browser":n=Pf(Fe());break;case"Worker":n=`${Pf(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fr}/${r}`}/**
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
 */class KE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function qE(t,e={}){return ai(t,"GET","/v2/passwordPolicy",dd(t,e))}/**
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
 */const QE=6;class YE{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:QE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Af(this),this.idTokenSubscription=new Af(this),this.beforeStateQueue=new KE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ur.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await y_(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wt(this.app))return Promise.reject(Xn(this));const n=e?ve(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wt(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wt(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await qE(this),n=new YE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ns("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ur.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jl(t){return ve(t)}class Af{constructor(e){this.auth=e,this.observer=null,this.addObserver=g1(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JE(t){pd=t}function ZE(t){return pd.loadJS(t)}function ek(){return pd.gapiScript}function tk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t,e){const n=Ml(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Xo(s,e??{}))return i;Lt(i,"already-initialized")}return n.initialize({options:e})}function rk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ik(t,e,n){const r=jl(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=b_(e),{host:o,port:l}=sk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ok()}function b_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sk(t){const e=b_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Of(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Of(o)}}}function Of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ok(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(t,e){return DE(t,"POST","/v1/accounts:signInWithIdp",dd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="http://localhost";class sr extends P_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ld(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fr(e,n)}buildRequest(){const e={requestUri:lk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=li(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rs extends md{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Rs{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends Rs{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Rs{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ht._fromIdTokenResponse(e,r,i),o=Lf(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lf(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,tl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new tl(e,n,r,i)}}function A_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?tl._fromErrorAndOperation(t,s,e,r):s})}async function ak(t,e,n=!1){const r=await fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
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
 */async function ck(t,e,n=!1){const{auth:r}=t;if(Wt(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await fs(t,A_(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=hd(s.idToken);z(o,r,"internal-error");const{sub:l}=o;return z(t.uid===l,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Lt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e,n=!1){if(Wt(t.app))return Promise.reject(Xn(t));const r="signIn",i=await A_(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dk(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function hk(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function fk(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function pk(t){return ve(t).signOut()}const nl="__sak";/**
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
 */class O_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=1e3,gk=10;class L_ extends O_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);GE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}L_.type="LOCAL";const _k=L_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends O_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}D_.type="SESSION";const M_=D_;/**
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
 */function yk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),a=await yk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const c=gd("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function wk(t){Ot().location.href=t}/**
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
 */function j_(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function Ek(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ck(){return j_()?self:null}/**
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
 */const U_="firebaseLocalStorageDb",Sk=1,rl="firebaseLocalStorage",F_="fbase_key";class bs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fl(t,e){return t.transaction([rl],e?"readwrite":"readonly").objectStore(rl)}function xk(){const t=indexedDB.deleteDatabase(U_);return new bs(t).toPromise()}function Wc(){const t=indexedDB.open(U_,Sk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rl,{keyPath:F_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rl)?e(r):(r.close(),await xk(),e(await Wc()))})})}async function Df(t,e,n){const r=Fl(t,!0).put({[F_]:e,value:n});return new bs(r).toPromise()}async function Ik(t,e){const n=Fl(t,!1).get(e),r=await new bs(n).toPromise();return r===void 0?null:r.value}function Mf(t,e){const n=Fl(t,!0).delete(e);return new bs(n).toPromise()}const Nk=800,Tk=3;class z_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Tk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(Ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ek(),!this.activeServiceWorker)return;this.sender=new vk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await Df(e,nl,"1"),await Mf(e,nl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ik(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fl(i,!1).getAll();return new bs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z_.type="LOCAL";const Rk=z_;new Ts(3e4,6e4);/**
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
 */function B_(t,e){return e?Gt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class _d extends P_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bk(t){return uk(t.auth,new _d(t),t.bypassAuthState)}function Pk(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),ck(n,new _d(t),t.bypassAuthState)}async function Ak(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),ak(n,new _d(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bk;case"linkViaPopup":case"linkViaRedirect":return Ak;case"reauthViaPopup":case"reauthViaRedirect":return Pk;default:Lt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=new Ts(2e3,1e4);async function Lk(t,e,n){if(Wt(t.app))return Promise.reject(kt(t,"operation-not-supported-in-this-environment"));const r=jl(t);RE(t,e,md);const i=B_(r,n);return new Kn(r,"signInViaPopup",e,i).executeNotNull()}class Kn extends $_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=gd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ok.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk="pendingRedirect",vo=new Map;class Mk extends $_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await jk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jk(t,e){const n=zk(e),r=Fk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Uk(t,e){vo.set(t._key(),e)}function Fk(t){return Gt(t._redirectPersistence)}function zk(t){return yo(Dk,t.config.apiKey,t.name)}async function Bk(t,e,n=!1){if(Wt(t.app))return Promise.reject(Xn(t));const r=jl(t),i=B_(r,e),o=await new Mk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=10*60*1e3;class Wk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Vk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!W_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$k&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(e))}saveEventToCache(e){this.cachedEventUids.add(jf(e)),this.lastProcessedEventTime=Date.now()}}function jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Vk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kk=/^https?/;async function qk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hk(t);for(const n of e)try{if(Qk(n))return}catch{}Lt(t,"unauthorized-domain")}function Qk(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Kk.test(n))return!1;if(Gk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Yk=new Ts(3e4,6e4);function Uf(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xk(t){return new Promise((e,n)=>{var r,i,s;function o(){Uf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uf(),n(kt(t,"network-request-failed"))},timeout:Yk.get()})}if(!((i=(r=Ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ot().gapi)===null||s===void 0)&&s.load)o();else{const l=tk("iframefcb");return Ot()[l]=()=>{gapi.load?o():n(kt(t,"network-request-failed"))},ZE(`${ek()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw wo=null,e})}let wo=null;function Jk(t){return wo=wo||Xk(t),wo}/**
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
 */const Zk=new Ts(5e3,15e3),eC="__/auth/iframe",tC="emulator/auth/iframe",nC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iC(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ud(e,tC):`https://${t.config.authDomain}/${eC}`,r={apiKey:e.apiKey,appName:t.name,v:fr},i=rC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${li(r).slice(1)}`}async function sC(t){const e=await Jk(t),n=Ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:iC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),l=Ot().setTimeout(()=>{s(o)},Zk.get());function a(){Ot().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const oC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lC=500,aC=600,cC="_blank",uC="http://localhost";class Ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dC(t,e,n,r=lC,i=aC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},oC),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Fe().toLowerCase();n&&(l=C_(c)?cC:n),E_(c)&&(e=e||uC,a.scrollbars="yes");const d=Object.entries(a).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(HE(c)&&l!=="_self")return hC(e||"",l),new Ff(null);const u=window.open(e||"",l,d);z(u,t,"popup-blocked");try{u.focus()}catch{}return new Ff(u)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const fC="__/auth/handler",pC="emulator/auth/handler",mC=encodeURIComponent("fac");async function zf(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fr,eventId:i};if(e instanceof md){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Rs){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),c=a?`#${mC}=${encodeURIComponent(a)}`:"";return`${gC(t)}?${li(l).slice(1)}${c}`}function gC({config:t}){return t.emulator?ud(t,pC):`https://${t.authDomain}/${fC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=M_,this._completeRedirectFn=Bk,this._overrideRedirectResult=Uk}async _openPopup(e,n,r,i){var s;tn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zf(e,n,r,Bc(),i);return dC(e,o,gd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zf(e,n,r,Bc(),i);return wk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new Wk(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pa,{type:Pa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Pa];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=qk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T_()||k_()||fd()}}const yC=_C;var Bf="@firebase/auth",$f="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){ir(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R_(t)},c=new XE(r,i,s,a);return rk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new An("auth-internal",e=>{const n=jl(e.getProvider("auth").getImmediate());return(r=>new vC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Bf,$f,wC(t)),At(Bf,$f,"esm2017")}/**
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
 */const kC=5*60,CC=i_("authIdTokenMaxAge")||kC;let Wf=null;const SC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CC)return;const i=n==null?void 0:n.token;Wf!==i&&(Wf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xC(t=od()){const e=Ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nk(t,{popupRedirectResolver:yC,persistence:[Rk,_k,M_]}),r=i_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=SC(s.toString());hk(n,o,()=>o(n.currentUser)),dk(n,l=>o(l))}}const i=t_("auth");return i&&ik(n,`http://${i}`),n}function IC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",IC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var Vf={};const Hf="@firebase/database",Gf="1.0.8";/**
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
 */let V_="";function NC(t){V_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new TC(e)}}catch{}return new RC},qn=H_("localStorage"),bC=H_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new id("@firebase/database"),PC=function(){let t=1;return function(){return t++}}(),G_=function(t){const e=v1(t),n=new m1;n.update(e);const r=n.digest();return td.encodeByteArray(r)},Ps=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ps.apply(null,r):typeof r=="object"?e+=Se(r):e+=r,e+=" "}return e};let $i=null,Kf=!0;const AC=function(t,e){N(!0,"Can't turn on custom loggers persistently."),zr.logLevel=X.VERBOSE,$i=zr.log.bind(zr)},Ne=function(...t){if(Kf===!0&&(Kf=!1,$i===null&&bC.get("logging_enabled")===!0&&AC()),$i){const e=Ps.apply(null,t);$i(e)}},As=function(t){return function(...e){Ne(t,...e)}},Vc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ps(...t);zr.error(e)},nn=function(...t){const e=`FIREBASE FATAL ERROR: ${Ps(...t)}`;throw zr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+Ps(...t);zr.warn(e)},OC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},yd=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},LC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Jr="[MIN_NAME]",or="[MAX_NAME]",pr=function(t,e){if(t===e)return 0;if(t===Jr||e===or)return-1;if(e===Jr||t===or)return 1;{const n=qf(t),r=qf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},DC=function(t,e){return t===e?0:t<e?-1:1},wi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},vd=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Se(e[r]),n+=":",n+=vd(t[e[r]]);return n+="}",n},K_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const q_=function(t){N(!yd(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},MC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},jC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function UC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const FC=new RegExp("^-?(0*)\\d{1,10}$"),zC=-2147483648,BC=2147483647,qf=function(t){if(FC.test(t)){const e=Number(t);if(e>=zC&&e<=BC)return e}return null},ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},$C=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class WC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class Eo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Eo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="5",Q_="v",Y_="s",X_="r",J_="f",Z_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ey="ls",ty="p",Hc="ac",ny="websocket",ry="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function HC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function sy(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===ny)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ry)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);HC(t)&&(n.ns=t.namespace);const i=[];return be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.counters_={}}incrementCounter(e,n=1){Dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa={},Oa={};function Ed(t){const e=t.toString();return Aa[e]||(Aa[e]=new GC),Aa[e]}function KC(t,e){const n=t.toString();return Oa[n]||(Oa[n]=e()),Oa[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ci(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="start",QC="close",YC="pLPCommand",XC="pRTLPCB",oy="id",ly="pw",ay="ser",JC="cb",ZC="seg",eS="ts",tS="d",nS="dframe",cy=1870,uy=30,rS=cy-uy,iS=25e3,sS=3e4;class br{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=Ed(n),this.urlFn=a=>(this.appCheckToken&&(a[Hc]=this.appCheckToken),sy(n,ry,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sS)),LC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new kd((...s)=>{const[o,l,a,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qf)this.id=l,this.password=a;else if(o===QC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qf]="t",r[ay]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Q_]=wd,this.transportSessionId&&(r[Y_]=this.transportSessionId),this.lastSessionId&&(r[ey]=this.lastSessionId),this.applicationId&&(r[ty]=this.applicationId),this.appCheckToken&&(r[Hc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Z_.test(location.hostname)&&(r[X_]=J_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){br.forceAllow_=!0}static forceDisallow(){br.forceDisallow_=!0}static isAvailable(){return br.forceAllow_?!0:!br.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MC()&&!jC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Zg(n),i=K_(r,rS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nS]="t",r[oy]=e,r[ly]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class kd{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=PC(),window[YC+this.uniqueCallbackIdentifier]=e,window[XC+this.uniqueCallbackIdentifier]=n,this.myIFrame=kd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ne("frame writing exception"),l.stack&&Ne(l.stack),Ne(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oy]=this.myID,e[ly]=this.myPW,e[ay]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uy+r.length<=cy;){const o=this.pendingSegs.shift();r=r+"&"+ZC+i+"="+o.seg+"&"+eS+i+"="+o.ts+"&"+tS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS=16384,lS=45e3;let il=null;typeof MozWebSocket<"u"?il=MozWebSocket:typeof WebSocket<"u"&&(il=WebSocket);class yt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=Ed(n),this.connURL=yt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Q_]=wd,typeof location<"u"&&location.hostname&&Z_.test(location.hostname)&&(o[X_]=J_),n&&(o[Y_]=n),r&&(o[ey]=r),i&&(o[Hc]=i),s&&(o[ty]=s),sy(e,ny,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let r;l1(),this.mySock=new il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){yt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&il!==null&&!yt.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ds(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=K_(n,oS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yt.responsesRequiredToBeHealthy=2;yt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[br,yt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=yt&&yt.isAvailable();let r=n&&!yt.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[yt];else{const i=this.transports_=[];for(const s of ps.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=6e4,cS=5e3,uS=10*1024,dS=100*1024,La="t",Yf="d",hS="s",Xf="r",fS="e",Jf="o",Zf="a",ep="n",tp="p",pS="h";class mS{constructor(e,n,r,i,s,o,l,a,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(La in e){const n=e[La];n===Zf?this.upgradeIfSecondaryHealthy_():n===Xf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ep,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=wi("t",e),r=wi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=wi(La,e);if(Yf in e){const r=e[Yf];if(n===pS){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ep){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hS?this.onConnectionShutdown_(r):n===Xf?this.onReset_(r):n===fS?Vc("Server Error: "+r):n===Jf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),wd!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends hy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new sl}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np=32,rp=768;class J{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new J("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function On(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new J(t.pieces_,e)}function Cd(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ms(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new J(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof J)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new J(n,0)}function V(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return He(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _S(t,e){const n=ms(t,0),r=ms(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=pr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Sd(t,e){if(On(t)!==On(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(On(t)>On(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class yS{constructor(e,n){this.errorPrefix_=n,this.parts_=ms(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Dl(this.parts_[r]);py(this)}}function vS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Dl(e),py(t)}function wS(t){const e=t.parts_.pop();t.byteLength_-=Dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function py(t){if(t.byteLength_>rp)throw new Error(t.errorPrefix_+"has a key path longer than "+rp+" bytes ("+t.byteLength_+").");if(t.parts_.length>np)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+np+") or object contains a cycle "+Wn(t))}function Wn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd extends hy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new xd}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=1e3,ES=60*5*1e3,ip=30*1e3,kS=1.3,CS=3e4,SS="server_kill",sp=3;class Qt extends dy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Qt.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ei,this.maxReconnectDelay_=ES,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Se(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Is,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,c=l.s;Qt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Dt(e,"w")){const r=Yr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||p1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ip)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=f1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vc("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>CS&&(this.reconnectDelay_=Ei),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Qt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},c=function(u){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:a,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,l=new mS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ue(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(SS)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Ue(u),a())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dc(this.interruptReasons_)&&(this.reconnectDelay_=Ei,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>vd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new J(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sp&&(this.reconnectDelay_=ip,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+V_.replace(/\./g,"-")]=1,rd()?e["framework.cordova"]=1:o_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sl.getInstance().currentlyOnline();return Dc(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(Jr,e),i=new W(Jr,n);return this.compare(r,i)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;class my extends zl{static get __EMPTY_NODE(){return eo}static set __EMPTY_NODE(e){eo=e}compare(e,n){return pr(e.name,n.name)}isDefinedOn(e){throw oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(or,eo)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,eo)}toString(){return".key"}}const Br=new my;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class xS{copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new to(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new to(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new xS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IS(t,e){return pr(t.name,e.name)}function Id(t,e){return pr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc;function NS(t){Gc=t}const gy=function(t){return typeof t=="number"?"number:"+q_(t):"string:"+t},_y=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Dt(e,".sv"),"Priority must be a string or number.")}else N(t===Gc||t.isEmpty(),"priority of unexpected type.");N(t===Gc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let op;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),_y(this.priorityNode_)}static set __childrenNodeConstructor(e){op=e}static get __childrenNodeConstructor(){return op}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return V(e)?this:$(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||On(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+gy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=q_(this.value_):e+=this.value_,this.lazyHash_=G_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),s=we.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yy,vy;function TS(t){yy=t}function RS(t){vy=t}class bS extends zl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?pr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(or,new we("[PRIORITY-POST]",vy))}makePost(e,n){const r=yy(e);return new W(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const ue=new bS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=Math.log(2);class AS{constructor(e){const n=s=>parseInt(Math.log(s)/PS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ol=function(t,e,n,r){t.sort(e);const i=function(a,c){const d=c-a;let u,f;if(d===0)return null;if(d===1)return u=t[a],f=n?n(u):u,new ke(f,u.node,ke.BLACK,null,null);{const _=parseInt(d/2,10)+a,v=i(a,_),w=i(_+1,c);return u=t[_],f=n?n(u):u,new ke(f,u.node,ke.BLACK,v,w)}},s=function(a){let c=null,d=null,u=t.length;const f=function(v,w){const E=u-v,g=u;u-=v;const h=i(E+1,g),m=t[E],y=n?n(m):m;_(new ke(y,m.node,w,null,h))},_=function(v){c?(c.left=v,c=v):(d=v,c=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),E=Math.pow(2,a.count-(v+1));w?f(E,ke.BLACK):(f(E,ke.BLACK),f(E,ke.RED))}return d},o=new AS(t.length),l=s(o);return new Ge(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da;const _r={};class Kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(_r&&ue,"ChildrenNode.ts has not been loaded"),Da=Da||new Kt({".priority":_r},{".priority":ue}),Da}get(e){const n=Yr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Dt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(W.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=ol(r,e.getCompare()):l=_r;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Kt(d,c)}addToIndexes(e,n){const r=Yo(this.indexes_,(i,s)=>{const o=Yr(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===_r)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(W.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),ol(l,o.getCompare())}else return _r;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new W(e.name,l))),a.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Yo(this.indexes_,i=>{if(i===_r)return i;{const s=n.get(e.name);return s?i.remove(new W(e.name,s)):i}});return new Kt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&_y(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ki||(ki=new F(new Ge(Id),null,Kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ki}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ki:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ki:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=$(e);if(r===null)return n;{N($(e)!==".priority"||On(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+gy(this.getPriority().val())+":"),this.forEachChild(ue,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":G_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new W(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Os?-1:0}withIndex(e){if(e===Br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ue),i=n.getIterator(ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Br?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class OS extends F{constructor(){super(new Ge(Id),F.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Os=new OS;Object.defineProperties(W,{MIN:{value:new W(Jr,F.EMPTY_NODE)},MAX:{value:new W(or,Os)}});my.__EMPTY_NODE=F.EMPTY_NODE;we.__childrenNodeConstructor=F;NS(Os);RS(Os);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=!0;function Ce(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Ce(e))}if(!(t instanceof Array)&&LS){const n=[];let r=!1;if(be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Ce(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new W(o,a)))}}),n.length===0)return F.EMPTY_NODE;const s=ol(n,IS,o=>o.name,Id);if(r){const o=ol(n,ue.getCompare());return new F(s,Ce(e),new Kt({".priority":o},{".priority":ue}))}else return new F(s,Ce(e),Kt.Default)}else{let n=F.EMPTY_NODE;return be(t,(r,i)=>{if(Dt(t,r)&&r.substring(0,1)!=="."){const s=Ce(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ce(e))}}TS(Ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS extends zl{constructor(e){super(),this.indexPath_=e,N(!V(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?pr(e.name,n.name):s}makePost(e,n){const r=Ce(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Os);return new W(or,e)}toString(){return ms(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS extends zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?pr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=Ce(e);return new W(n,r)}toString(){return".value"}}const jS=new MS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){return{type:"value",snapshotNode:t}}function Zr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function _s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function US(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Zr(n,r)):o.trackChildChange(_s(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(gs(i,s))}),n.isLeafNode()||n.forEachChild(ue,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(_s(i,s,o))}else r.trackChildChange(Zr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.indexedFilter_=new Nd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new W(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(ue,(o,l)=>{s.matches(new W(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new W(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,_)=>u(_,f)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new W(n,r),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const u=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,a);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(_s(n,r,u)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gs(n,u));const w=l.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Zr(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:d&&o(c,a)>=0?(s!=null&&(s.trackChildChange(gs(c.name,c.node)),s.trackChildChange(Zr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Jr}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new Td;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zS(t){return t.loadsAllData()?new Nd(t.getIndex()):t.hasLimit()?new FS(t):new ys(t)}function lp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===jS?n="$value":t.index_===Br?n="$key":(N(t.index_ instanceof DS,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Se(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Se(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Se(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ap(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends dy{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ll.getListenId_(e,r),l={};this.listens_[o]=l;const a=lp(e._queryParams);this.restRequest_(s+".json",a,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),Yr(this.listens_,o)===l){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=lp(e._queryParams),r=e._path.toString(),i=new Is;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+li(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ds(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){return{value:null,children:new Map}}function Ey(t,e,n){if(V(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,al());const i=t.children.get(r);e=ee(e),Ey(i,e,n)}}function Kc(t,e,n){t.value!==null?n(e,t.value):$S(t,(r,i)=>{const s=new J(e.toString()+"/"+r);Kc(i,s,n)})}function $S(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=10*1e3,VS=30*1e3,HS=5*60*1e3;class GS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new WS(e);const r=cp+(VS-cp)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;be(e,(i,s)=>{s>0&&Dt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*HS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function Rd(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=Rd()}operationForChild(e){if(V(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new J(e));return new cl(Q(),n,this.revert)}}else return N($(this.path)===e,"operationForChild called for unrelated child."),new cl(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return V(this.path)?new vs(this.source,Q()):new vs(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return V(this.path)?new lr(this.source,Q(),this.snap.getImmediateChild(e)):new lr(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if(V(this.path)){const n=this.children.subtree(new J(e));return n.isEmpty()?null:n.value?new lr(this.source,Q(),n.value):new ei(this.source,Q(),n)}else return N($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ei(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(V(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(US(o.childName,o.snapshotNode))}),Ci(t,i,"child_removed",e,r,n),Ci(t,i,"child_added",e,r,n),Ci(t,i,"child_moved",s,r,n),Ci(t,i,"child_changed",e,r,n),Ci(t,i,"value",e,r,n),i}function Ci(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>YS(t,l,a)),o.forEach(l=>{const a=QS(t,l,s);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function QS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function YS(t,e,n){if(e.childName==null||n.childName==null)throw oi("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),i=new W(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(t,e){return{eventCache:t,serverCache:e}}function Vi(t,e,n,r){return Bl(new ar(e,n,r),t.serverCache)}function ky(t,e,n,r){return Bl(t.eventCache,new ar(e,n,r))}function qc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;const XS=()=>(Ma||(Ma=new Ge(DC)),Ma);class Z{constructor(e,n=XS()){this.value=e,this.children=n}static fromObject(e){let n=new Z(null);return be(e,(r,i)=>{n=n.set(new J(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(V(e))return null;{const r=$(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ee(e),n);return s!=null?{path:ce(new J(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(V(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new Z(null)}}set(e,n){if(V(e))return new Z(n,this.children);{const r=$(e),s=(this.children.get(r)||new Z(null)).set(ee(e),n),o=this.children.insert(r,s);return new Z(this.value,o)}}remove(e){if(V(e))return this.children.isEmpty()?new Z(null):new Z(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const i=r.remove(ee(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Z(null):new Z(this.value,s)}else return this}}get(e){if(V(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if(V(e))return n;{const r=$(e),s=(this.children.get(r)||new Z(null)).setTree(ee(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Z(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(V(e))return null;{const s=$(e),o=this.children.get(s);return o?o.findOnPath_(ee(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if(V(e))return this;{this.value&&r(n,this.value);const i=$(e),s=this.children.get(i);return s?s.foreachOnPath_(ee(e),ce(n,i),r):new Z(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new Z(null))}}function Hi(t,e,n){if(V(e))return new Ct(new Z(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=He(i,e);return s=s.updateChild(o,n),new Ct(t.writeTree_.set(i,s))}else{const i=new Z(n),s=t.writeTree_.setTree(e,i);return new Ct(s)}}}function Qc(t,e,n){let r=t;return be(n,(i,s)=>{r=Hi(r,ce(e,i),s)}),r}function up(t,e){if(V(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new Z(null));return new Ct(n)}}function Yc(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function dp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(r,i)=>{e.push(new W(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new W(r,i.value))}),e}function Rn(t,e){if(V(e))return t;{const n=mr(t,e);return n!=null?new Ct(new Z(n)):new Ct(t.writeTree_.subtree(e))}}function Xc(t){return t.writeTree_.isEmpty()}function ti(t,e){return Cy(Q(),t.writeTree_,e)}function Cy(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Cy(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){return Ny(e,t)}function JS(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Hi(t.visibleWrites,e,n)),t.lastWriteId=r}function ZS(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Qc(t.visibleWrites,e,n),t.lastWriteId=r}function ex(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function tx(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&nx(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return rx(t),!0;if(r.snap)t.visibleWrites=up(t.visibleWrites,r.path);else{const l=r.children;be(l,a=>{t.visibleWrites=up(t.visibleWrites,ce(r.path,a))})}return!0}else return!1}function nx(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(ce(t.path,n),e))return!0;return!1}function rx(t){t.visibleWrites=Sy(t.allWrites,ix,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ix(t){return t.visible}function Sy(t,e,n){let r=Ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=He(n,o),r=Hi(r,l,s.snap)):ut(o,n)&&(l=He(o,n),r=Hi(r,Q(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=He(n,o),r=Qc(r,l,s.children);else if(ut(o,n))if(l=He(o,n),V(l))r=Qc(r,Q(),s.children);else{const a=Yr(s.children,$(l));if(a){const c=a.getChild(ee(l));r=Hi(r,Q(),c)}}}else throw oi("WriteRecord should have .snap or .children")}}return r}function xy(t,e,n,r,i){if(!r&&!i){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=Rn(t.visibleWrites,e);if(Xc(o))return n;if(n==null&&!Yc(o,Q()))return null;{const l=n||F.EMPTY_NODE;return ti(o,l)}}}else{const s=Rn(t.visibleWrites,e);if(!i&&Xc(s))return n;if(!i&&n==null&&!Yc(s,Q()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ut(c.path,e)||ut(e,c.path))},l=Sy(t.allWrites,o,e),a=n||F.EMPTY_NODE;return ti(l,a)}}}function sx(t,e,n){let r=F.EMPTY_NODE;const i=mr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rn(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const a=ti(Rn(s,new J(o)),l);r=r.updateImmediateChild(o,a)}),dp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rn(t.visibleWrites,e);return dp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ox(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(Yc(t.visibleWrites,s))return null;{const o=Rn(t.visibleWrites,s);return Xc(o)?i.getChild(n):ti(o,i.getChild(n))}}function lx(t,e,n,r){const i=ce(e,n),s=mr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return ti(o,r.getNode().getImmediateChild(n))}else return null}function ax(t,e){return mr(t.visibleWrites,e)}function cx(t,e,n,r,i,s,o){let l;const a=Rn(t.visibleWrites,e),c=mr(a,Q());if(c!=null)l=c;else if(n!=null)l=ti(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],u=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)u(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function ux(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function ul(t,e,n,r){return xy(t.writeTree,t.treePath,e,n,r)}function Od(t,e){return sx(t.writeTree,t.treePath,e)}function hp(t,e,n,r){return ox(t.writeTree,t.treePath,e,n,r)}function dl(t,e){return ax(t.writeTree,ce(t.treePath,e))}function dx(t,e,n,r,i,s){return cx(t.writeTree,t.treePath,e,n,r,i,s)}function Ld(t,e,n){return lx(t.writeTree,t.treePath,e,n)}function Iy(t,e){return Ny(ce(t.treePath,e),t.writeTree)}function Ny(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,_s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Zr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,_s(r,e.snapshotNode,i.oldSnap));else throw oi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ty=new fx;class Dd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ar(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ld(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cr(this.viewCache_),s=dx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){return{filter:t}}function mx(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function gx(t,e,n,r,i){const s=new hx;let o,l;if(n.type===vt.OVERWRITE){const c=n;c.source.fromUser?o=Jc(t,e,c.path,c.snap,r,i,s):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!V(c.path),o=hl(t,e,c.path,c.snap,r,i,l,s))}else if(n.type===vt.MERGE){const c=n;c.source.fromUser?o=yx(t,e,c.path,c.children,r,i,s):(N(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Zc(t,e,c.path,c.children,r,i,l,s))}else if(n.type===vt.ACK_USER_WRITE){const c=n;c.revert?o=Ex(t,e,c.path,r,i,s):o=vx(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===vt.LISTEN_COMPLETE)o=wx(t,e,n.path,r,s);else throw oi("Unknown operation type: "+n.type);const a=s.getChanges();return _x(e,o,a),{viewCache:o,changes:a}}function _x(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(wy(qc(e)))}}function Ry(t,e,n,r,i,s){const o=e.eventCache;if(dl(r,n)!=null)return e;{let l,a;if(V(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=cr(e),d=c instanceof F?c:F.EMPTY_NODE,u=Od(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=ul(r,cr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=$(n);if(c===".priority"){N(On(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const u=hp(r,n,d,a);u!=null?l=t.filter.updatePriority(d,u):l=o.getNode()}else{const d=ee(n);let u;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const f=hp(r,n,o.getNode(),a);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=Ld(r,c,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),c,u,d,i,s):l=o.getNode()}}return Vi(e,l,o.isFullyInitialized()||V(n),t.filter.filtersNodes())}}function hl(t,e,n,r,i,s,o,l){const a=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(V(n))c=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,r);c=d.updateFullNode(a.getNode(),_,null)}else{const _=$(n);if(!a.isCompleteForPath(n)&&On(n)>1)return e;const v=ee(n),E=a.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=d.updatePriority(a.getNode(),E):c=d.updateChild(a.getNode(),_,E,v,Ty,null)}const u=ky(e,c,a.isFullyInitialized()||V(n),d.filtersNodes()),f=new Dd(i,u,s);return Ry(t,u,n,i,f,l)}function Jc(t,e,n,r,i,s,o){const l=e.eventCache;let a,c;const d=new Dd(i,e,s);if(V(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Vi(e,c,!0,t.filter.filtersNodes());else{const u=$(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),a=Vi(e,c,l.isFullyInitialized(),l.isFiltered());else{const f=ee(n),_=l.getNode().getImmediateChild(u);let v;if(V(f))v=r;else{const w=d.getCompleteChild(u);w!=null?Cd(f)===".priority"&&w.getChild(fy(f)).isEmpty()?v=w:v=w.updateChild(f,r):v=F.EMPTY_NODE}if(_.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),u,v,f,d,o);a=Vi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function fp(t,e){return t.eventCache.isCompleteForChild(e)}function yx(t,e,n,r,i,s,o){let l=e;return r.foreach((a,c)=>{const d=ce(n,a);fp(e,$(d))&&(l=Jc(t,l,d,c,i,s,o))}),r.foreach((a,c)=>{const d=ce(n,a);fp(e,$(d))||(l=Jc(t,l,d,c,i,s,o))}),l}function pp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;V(n)?c=r:c=new Z(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const _=e.serverCache.getNode().getImmediateChild(u),v=pp(t,_,f);a=hl(t,a,new J(u),v,i,s,o,l)}}),c.children.inorderTraversal((u,f)=>{const _=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!_){const v=e.serverCache.getNode().getImmediateChild(u),w=pp(t,v,f);a=hl(t,a,new J(u),w,i,s,o,l)}}),a}function vx(t,e,n,r,i,s,o){if(dl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return hl(t,e,n,a.getNode().getChild(n),i,s,l,o);if(V(n)){let c=new Z(null);return a.getNode().forEachChild(Br,(d,u)=>{c=c.set(new J(d),u)}),Zc(t,e,n,c,i,s,l,o)}else return e}else{let c=new Z(null);return r.foreach((d,u)=>{const f=ce(n,d);a.isCompleteForPath(f)&&(c=c.set(d,a.getNode().getChild(f)))}),Zc(t,e,n,c,i,s,l,o)}}function wx(t,e,n,r,i){const s=e.serverCache,o=ky(e,s.getNode(),s.isFullyInitialized()||V(n),s.isFiltered());return Ry(t,o,n,r,Ty,i)}function Ex(t,e,n,r,i,s){let o;if(dl(r,n)!=null)return e;{const l=new Dd(r,e,i),a=e.eventCache.getNode();let c;if(V(n)||$(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=ul(r,cr(e));else{const u=e.serverCache.getNode();N(u instanceof F,"serverChildren would be complete if leaf node"),d=Od(r,u)}d=d,c=t.filter.updateFullNode(a,d,s)}else{const d=$(n);let u=Ld(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=a.getImmediateChild(d)),u!=null?c=t.filter.updateChild(a,d,u,ee(n),l,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(a,d,F.EMPTY_NODE,ee(n),l,s):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ul(r,cr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||dl(r,Q())!=null,Vi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Nd(r.getIndex()),s=zS(r);this.processor_=px(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(F.EMPTY_NODE,l.getNode(),null),d=new ar(a,o.isFullyInitialized(),i.filtersNodes()),u=new ar(c,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bl(u,d),this.eventGenerator_=new KS(this.query_)}get query(){return this.query_}}function Cx(t){return t.viewCache_.serverCache.getNode()}function Sx(t,e){const n=cr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!V(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function mp(t){return t.eventRegistrations_.length===0}function xx(t,e){t.eventRegistrations_.push(e)}function gp(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function _p(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(N(cr(t.viewCache_),"We should always have a full cache before handling merges"),N(qc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=gx(t.processor_,i,e,n,r);return mx(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,by(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ix(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(s,o)=>{r.push(Zr(s,o))}),n.isFullyInitialized()&&r.push(wy(n.getNode())),by(t,r,n.getNode(),e)}function by(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return qS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;class Nx{constructor(){this.views=new Map}}function Tx(t){N(!fl,"__referenceConstructor has already been defined"),fl=t}function Rx(){return N(fl,"Reference.ts has not been loaded"),fl}function bx(t){return t.views.size===0}function Md(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),_p(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(_p(o,e,n,r));return s}}function Px(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=ul(n,i?r:null),a=!1;l?a=!0:r instanceof F?(l=Od(n,r),a=!1):(l=F.EMPTY_NODE,a=!1);const c=Bl(new ar(l,a,!1),new ar(r,i,!1));return new kx(e,c)}return o}function Ax(t,e,n,r,i,s){const o=Px(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xx(o,n),Ix(o,n)}function Ox(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Ln(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(gp(c,n,r)),mp(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||s.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(gp(a,n,r)),mp(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Ln(t)&&s.push(new(Rx())(e._repo,e._path)),{removed:s,events:o}}function Py(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $r(t,e){let n=null;for(const r of t.views.values())n=n||Sx(r,e);return n}function Ay(t,e){if(e._queryParams.loadsAllData())return $l(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Oy(t,e){return Ay(t,e)!=null}function Ln(t){return $l(t)!=null}function $l(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;function Lx(t){N(!pl,"__referenceConstructor has already been defined"),pl=t}function Dx(){return N(pl,"Reference.ts has not been loaded"),pl}let Mx=1;class yp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Z(null),this.pendingWriteTree_=ux(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ly(t,e,n,r,i){return JS(t.pendingWriteTree_,e,n,r,i),i?ui(t,new lr(Rd(),e,n)):[]}function jx(t,e,n,r){ZS(t.pendingWriteTree_,e,n,r);const i=Z.fromObject(n);return ui(t,new ei(Rd(),e,i))}function yn(t,e,n=!1){const r=ex(t.pendingWriteTree_,e);if(tx(t.pendingWriteTree_,e)){let s=new Z(null);return r.snap!=null?s=s.set(Q(),!0):be(r.children,o=>{s=s.set(new J(o),!0)}),ui(t,new cl(r.path,s,n))}else return[]}function Wl(t,e,n){return ui(t,new lr(bd(),e,n))}function Ux(t,e,n){const r=Z.fromObject(n);return ui(t,new ei(bd(),e,r))}function Fx(t,e){return ui(t,new vs(bd(),e))}function zx(t,e,n){const r=Ud(t,n);if(r){const i=Fd(r),s=i.path,o=i.queryId,l=He(s,e),a=new vs(Pd(o),l);return zd(t,s,a)}else return[]}function eu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Oy(o,e))){const a=Ox(o,e,n,r);bx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=a.removed;if(l=a.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,_)=>Ln(_));if(d&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=Wx(f);for(let v=0;v<_.length;++v){const w=_[v],E=w.query,g=jy(t,w);t.listenProvider_.startListening(Gi(E),ml(t,E),g.hashFn,g.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Gi(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(Vl(f));t.listenProvider_.stopListening(Gi(f),_)}))}Vx(t,c)}return l}function Bx(t,e,n,r){const i=Ud(t,r);if(i!=null){const s=Fd(i),o=s.path,l=s.queryId,a=He(o,e),c=new lr(Pd(l),a,n);return zd(t,o,c)}else return[]}function $x(t,e,n,r){const i=Ud(t,r);if(i){const s=Fd(i),o=s.path,l=s.queryId,a=He(o,e),c=Z.fromObject(n),d=new ei(Pd(l),a,c);return zd(t,o,d)}else return[]}function vp(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=He(f,i);s=s||$r(_,v),o=o||Ln(_)});let l=t.syncPointTree_.get(i);l?(o=o||Ln(l),s=s||$r(l,Q())):(l=new Nx,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const w=$r(v,Q());w&&(s=s.updateImmediateChild(_,w))}));const c=Oy(l,e);if(!c&&!e._queryParams.loadsAllData()){const f=Vl(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Hx();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=Ad(t.pendingWriteTree_,i);let u=Ax(l,e,n,d,s,a);if(!c&&!o&&!r){const f=Ay(l,e);u=u.concat(Gx(t,e,f))}return u}function jd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),c=$r(l,a);if(c)return c});return xy(i,e,s,n,!0)}function ui(t,e){return Dy(e,t.syncPointTree_,null,Ad(t.pendingWriteTree_,Q()))}function Dy(t,e,n,r){if(V(t.path))return My(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=$r(i,Q()));let s=[];const o=$(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,d=Iy(r,o);s=s.concat(Dy(l,a,c,d))}return i&&(s=s.concat(Md(i,t,r,n))),s}}function My(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=$r(i,Q()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Iy(r,o),d=t.operationForChild(o);d&&(s=s.concat(My(d,l,a,c)))}),i&&(s=s.concat(Md(i,t,r,n))),s}function jy(t,e){const n=e.query,r=ml(t,n);return{hashFn:()=>(Cx(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?zx(t,n._path,r):Fx(t,n._path);{const s=UC(i,n);return eu(t,n,null,s)}}}}function ml(t,e){const n=Vl(e);return t.queryToTagMap.get(n)}function Vl(t){return t._path.toString()+"$"+t._queryIdentifier}function Ud(t,e){return t.tagToQueryMap.get(e)}function Fd(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new J(t.substr(0,e))}}function zd(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=Ad(t.pendingWriteTree_,e);return Md(r,n,i,null)}function Wx(t){return t.fold((e,n,r)=>{if(n&&Ln(n))return[$l(n)];{let i=[];return n&&(i=Py(n)),be(r,(s,o)=>{i=i.concat(o)}),i}})}function Gi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dx())(t._repo,t._path):t}function Vx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Vl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Hx(){return Mx++}function Gx(t,e,n){const r=e._path,i=ml(t,e),s=jy(t,n),o=t.listenProvider_.startListening(Gi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)N(!Ln(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,d,u)=>{if(!V(c)&&d&&Ln(d))return[$l(d).query];{let f=[];return d&&(f=f.concat(Py(d).map(_=>_.query))),be(u,(_,v)=>{f=f.concat(v)}),f}});for(let c=0;c<a.length;++c){const d=a[c];t.listenProvider_.stopListening(Gi(d),ml(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Bd(n)}node(){return this.node_}}class $d{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new $d(this.syncTree_,n)}node(){return jd(this.syncTree_,this.path_)}}const Kx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wp=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return qx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Qx(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},qx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},Qx=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Uy=function(t,e,n,r){return Wd(e,new $d(n,t),r)},Fy=function(t,e,n){return Wd(t,new Bd(e),n)};function Wd(t,e,n){const r=t.getPriority().val(),i=wp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=wp(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new we(l,Ce(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new we(i))),o.forEachChild(ue,(l,a)=>{const c=Wd(a,e.getImmediateChild(l),n);c!==a&&(s=s.updateImmediateChild(l,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hd(t,e){let n=e instanceof J?e:new J(e),r=t,i=$(n);for(;i!==null;){const s=Yr(r.node.children,i)||{children:{},childCount:0};r=new Vd(i,r,s),n=ee(n),i=$(n)}return r}function di(t){return t.node.value}function zy(t,e){t.node.value=e,tu(t)}function By(t){return t.node.childCount>0}function Yx(t){return di(t)===void 0&&!By(t)}function Hl(t,e){be(t.node.children,(n,r)=>{e(new Vd(n,t,r))})}function $y(t,e,n,r){n&&e(t),Hl(t,i=>{$y(i,e,!0)})}function Xx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ls(t){return new J(t.parent===null?t.name:Ls(t.parent)+"/"+t.name)}function tu(t){t.parent!==null&&Jx(t.parent,t.name,t)}function Jx(t,e,n){const r=Yx(n),i=Dt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=/[\[\].#$\/\u0000-\u001F\u007F]/,eI=/[\[\].#$\u0000-\u001F\u007F]/,ja=10*1024*1024,Gd=function(t){return typeof t=="string"&&t.length!==0&&!Zx.test(t)},Wy=function(t){return typeof t=="string"&&t.length!==0&&!eI.test(t)},tI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wy(t)},nI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!yd(t)||t&&typeof t=="object"&&Dt(t,".sv")},Vy=function(t,e,n,r){r&&e===void 0||Gl(Ll(t,"value"),e,n)},Gl=function(t,e,n){const r=n instanceof J?new yS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wn(r)+" with contents = "+e.toString());if(yd(e))throw new Error(t+"contains "+e.toString()+" "+Wn(r));if(typeof e=="string"&&e.length>ja/3&&Dl(e)>ja)throw new Error(t+"contains a string greater than "+ja+" utf8 bytes "+Wn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Gd(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vS(r,o),Gl(t,l,r),wS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wn(r)+" in addition to actual children.")}},rI=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ms(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Gd(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(_S);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ut(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},iI=function(t,e,n,r){const i=Ll(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];be(e,(o,l)=>{const a=new J(o);if(Gl(i,l,ce(n,a)),Cd(a)===".priority"&&!nI(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),rI(i,s)},Hy=function(t,e,n,r){if(!Wy(n))throw new Error(Ll(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Hy(t,e,n)},Gy=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Gd(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tI(n))throw new Error(Ll(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Kl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Sd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ky(t,e,n){Kl(t,n),qy(t,r=>Sd(r,e))}function xt(t,e,n){Kl(t,n),qy(t,r=>ut(r,e)||ut(e,r))}function qy(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(aI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();$i&&Ne("event: "+n.toString()),ci(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI="repo_interrupt",uI=25;class dI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=al(),this.transactionQueueTree_=new Vd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hI(t,e,n){if(t.stats_=Ed(t.repoInfo_),t.forceRestClient_||$C())t.server_=new ll(t.repoInfo_,(r,i,s,o)=>{Ep(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qt(t.repoInfo_,e,(r,i,s,o)=>{Ep(t,r,i,s,o)},r=>{kp(t,r)},r=>{fI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KC(t.repoInfo_,()=>new GS(t.stats_,t.server_)),t.infoData_=new BS,t.infoSyncTree_=new yp({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Wl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Kd(t,"connected",!1),t.serverSyncTree_=new yp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const c=o(l,a);xt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Qy(t){const n=t.infoData_.getNode(new J(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ql(t){return Kx({timestamp:Qy(t)})}function Ep(t,e,n,r,i){t.dataUpdateCount++;const s=new J(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Yo(n,c=>Ce(c));o=$x(t.serverSyncTree_,s,a,i)}else{const a=Ce(n);o=Bx(t.serverSyncTree_,s,a,i)}else if(r){const a=Yo(n,c=>Ce(c));o=Ux(t.serverSyncTree_,s,a)}else{const a=Ce(n);o=Wl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ni(t,s)),xt(t.eventQueue_,l,o)}function kp(t,e){Kd(t,"connected",e),e===!1&&gI(t)}function fI(t,e){be(e,(n,r)=>{Kd(t,n,r)})}function Kd(t,e,n){const r=new J("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(r,i);const s=Wl(t.infoSyncTree_,r,i);xt(t.eventQueue_,r,s)}function qd(t){return t.nextWriteId_++}function pI(t,e,n,r,i){Ql(t,"set",{path:e.toString(),value:n,priority:r});const s=ql(t),o=Ce(n,r),l=jd(t.serverSyncTree_,e),a=Fy(o,l,s),c=qd(t),d=Ly(t.serverSyncTree_,e,a,c,!0);Kl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||Ue("set at "+e+" failed: "+f);const w=yn(t.serverSyncTree_,c,!v);xt(t.eventQueue_,e,w),nu(t,i,f,_)});const u=Yd(t,e);ni(t,u),xt(t.eventQueue_,u,[])}function mI(t,e,n,r){Ql(t,"update",{path:e.toString(),value:n});let i=!0;const s=ql(t),o={};if(be(n,(l,a)=>{i=!1,o[l]=Uy(ce(e,l),Ce(a),t.serverSyncTree_,s)}),i)Ne("update() called with empty data.  Don't do anything."),nu(t,r,"ok",void 0);else{const l=qd(t),a=jx(t.serverSyncTree_,e,o,l);Kl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,d)=>{const u=c==="ok";u||Ue("update at "+e+" failed: "+c);const f=yn(t.serverSyncTree_,l,!u),_=f.length>0?ni(t,e):e;xt(t.eventQueue_,_,f),nu(t,r,c,d)}),be(n,c=>{const d=Yd(t,ce(e,c));ni(t,d)}),xt(t.eventQueue_,e,[])}}function gI(t){Ql(t,"onDisconnectEvents");const e=ql(t),n=al();Kc(t.onDisconnect_,Q(),(i,s)=>{const o=Uy(i,s,t.serverSyncTree_,e);Ey(n,i,o)});let r=[];Kc(n,Q(),(i,s)=>{r=r.concat(Wl(t.serverSyncTree_,i,s));const o=Yd(t,i);ni(t,o)}),t.onDisconnect_=al(),xt(t.eventQueue_,Q(),r)}function _I(t,e,n){let r;$(e._path)===".info"?r=vp(t.infoSyncTree_,e,n):r=vp(t.serverSyncTree_,e,n),Ky(t.eventQueue_,e._path,r)}function Cp(t,e,n){let r;$(e._path)===".info"?r=eu(t.infoSyncTree_,e,n):r=eu(t.serverSyncTree_,e,n),Ky(t.eventQueue_,e._path,r)}function yI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cI)}function Ql(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function nu(t,e,n,r){e&&ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Yy(t,e,n){return jd(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Qd(t,e=t.transactionQueueTree_){if(e||Yl(t,e),di(e)){const n=Jy(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vI(t,Ls(e),n)}else By(e)&&Hl(e,n=>{Qd(t,n)})}function vI(t,e,n){const r=n.map(c=>c.currentWriteId),i=Yy(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=He(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ql(t,"transaction put response",{path:a.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(yn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Yl(t,Hd(t.transactionQueueTree_,e)),Qd(t,t.transactionQueueTree_),xt(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)ci(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Ue("transaction at "+a.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}ni(t,e)}},o)}function ni(t,e){const n=Xy(t,e),r=Ls(n),i=Jy(t,n);return wI(t,i,r),r}function wI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=He(n,a.path);let d=!1,u;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,u=a.abortReason,i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=uI)d=!0,u="maxretry",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Yy(t,a.path,o);a.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){Gl("transaction failed: Data returned ",_,a.path);let v=Ce(_);typeof _=="object"&&_!=null&&Dt(_,".priority")||(v=v.updatePriority(f.getPriority()));const E=a.currentWriteId,g=ql(t),h=Fy(v,f,g);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=h,a.currentWriteId=qd(t),o.splice(o.indexOf(E),1),i=i.concat(Ly(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(yn(t.serverSyncTree_,E,!0))}else d=!0,u="nodata",i=i.concat(yn(t.serverSyncTree_,a.currentWriteId,!0))}xt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(u),!1,null))))}Yl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)ci(r[l]);Qd(t,t.transactionQueueTree_)}function Xy(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&di(r)===void 0;)r=Hd(r,n),e=ee(e),n=$(e);return r}function Jy(t,e){const n=[];return Zy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Zy(t,e,n){const r=di(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Hl(e,i=>{Zy(t,i,n)})}function Yl(t,e){const n=di(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,zy(e,n.length>0?n:void 0)}Hl(e,r=>{Yl(t,r)})}function Yd(t,e){const n=Ls(Xy(t,e)),r=Hd(t.transactionQueueTree_,e);return Xx(r,i=>{Ua(t,i)}),Ua(t,r),$y(r,i=>{Ua(t,i)}),n}function Ua(t,e){const n=di(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zy(e,void 0):n.length=s+1,xt(t.eventQueue_,Ls(e),i);for(let o=0;o<r.length;o++)ci(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function kI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sp=function(t,e){const n=CI(t),r=n.namespace;n.domain==="firebase.com"&&nn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||OC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new iy(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new J(n.pathString)}},CI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=EI(t.substring(d,u)));const f=kI(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SI=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=xp.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=xp.charAt(e[i]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class II{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return V(this._path)?null:Cd(this._path)}get ref(){return new Un(this._repo,this._path)}get _queryIdentifier(){const e=ap(this._queryParams),n=vd(e);return n==="{}"?"default":n}get _queryObject(){return ap(this._queryParams)}isEqual(e){if(e=ve(e),!(e instanceof Xd))return!1;const n=this._repo===e._repo,r=Sd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gS(this._path)}}class Un extends Xd{constructor(e,n){super(e,n,new Td,!1)}get parent(){const e=fy(this._path);return e===null?null:new Un(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class gl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new J(e),r=ws(this.ref,e);return new gl(this._node.getChild(n),r,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new gl(i,ws(this.ref,r),ue)))}hasChild(e){const n=new J(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xe(t,e){return t=ve(t),t._checkNotDeleted("ref"),e!==void 0?ws(t._root,e):t._root}function ws(t,e){return t=ve(t),$(t._path)===null?sI("child","path",e):Hy("child","path",e),new Un(t._repo,ce(t._path,e))}function TI(t,e){t=ve(t),Gy("push",t._path),Vy("push",e,t._path,!0);const n=Qy(t._repo),r=SI(n),i=ws(t,r),s=ws(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function ko(t,e){t=ve(t),Gy("set",t._path),Vy("set",e,t._path,!1);const n=new Is;return pI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Si(t,e){iI("update",e,t._path);const n=new Is;return mI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Jd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xI("value",this,new gl(e.snapshotNode,new Un(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new II(this,e,n):null}matches(e){return e instanceof Jd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function RI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,c=(d,u)=>{Cp(t._repo,t,l),a(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new NI(n,s||void 0),l=new Jd(o);return _I(t._repo,t,l),()=>Cp(t._repo,t,l)}function ru(t,e,n,r){return RI(t,"value",e,n,r)}Tx(Un);Lx(Un);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="FIREBASE_DATABASE_EMULATOR_HOST",iu={};let PI=!1;function AI(t,e,n,r){t.repoInfo_=new iy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function OI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sp(s,i),l=o.repoInfo,a;typeof process<"u"&&Vf&&(a=Vf[bI]),a?(s=`http://${a}?ns=${l.namespace}`,o=Sp(s,i),l=o.repoInfo):o.repoInfo.secure;const c=new VC(t.name,t.options,e);oI("Invalid Firebase Database URL",o),V(o.path)||nn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=DI(l,t,c,new WC(t.name,n));return new MI(d,t)}function LI(t,e){const n=iu[e];(!n||n[t.key]!==t)&&nn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yI(t),delete n[t.key]}function DI(t,e,n,r){let i=iu[e.name];i||(i={},iu[e.name]=i);let s=i[t.toURLString()];return s&&nn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new dI(t,PI,n,r),i[t.toURLString()]=s,s}class MI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Un(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nn("Cannot call "+e+" on a deleted database.")}}function jI(t=od(),e){const n=Ml(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=n_("database");r&&UI(n,...r)}return n}function UI(t,e,n,r={}){t=ve(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&nn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Eo(Eo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:s_(r.mockUserToken,t.app.options.projectId);s=new Eo(o)}AI(i,e,n,s)}/**
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
 */function FI(t){NC(fr),ir(new An("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return OI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),At(Hf,Gf,t),At(Hf,Gf,"esm2017")}Qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FI();var zI="firebase",BI="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(zI,BI,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev="firebasestorage.googleapis.com",tv="storageBucket",$I=2*60*1e3,WI=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends sn{constructor(e,n,r=0){super(Fa(e),`Firebase Storage: ${n} (${Fa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function Fa(t){return"storage/"+t}function Zd(){const t="An unknown error occurred, please check the error payload for server response.";return new he(de.UNKNOWN,t)}function VI(t){return new he(de.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function HI(t){return new he(de.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function GI(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(de.UNAUTHENTICATED,t)}function KI(){return new he(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qI(t){return new he(de.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function QI(){return new he(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YI(){return new he(de.CANCELED,"User canceled the upload/download.")}function XI(t){return new he(de.INVALID_URL,"Invalid URL '"+t+"'.")}function JI(t){return new he(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ZI(){return new he(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tv+"' property when initializing the app?")}function eN(){return new he(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tN(){return new he(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nN(t){return new he(de.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function su(t){return new he(de.INVALID_ARGUMENT,t)}function nv(){return new he(de.APP_DELETED,"The Firebase app was deleted.")}function rN(t){return new he(de.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ki(t,e){return new he(de.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function xi(t){throw new he(de.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=tt.makeFromUrl(e,n)}catch{return new tt(e,"")}if(r.path==="")return r;throw JI(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),a={bucket:1,path:3};function c(y){y.path_=decodeURIComponent(y.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",_=new RegExp(`^https?://${u}/${d}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},w=n===ev?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",g=new RegExp(`^https?://${w}/${i}/${E}`,"i"),m=[{regex:l,indices:a,postModify:s},{regex:_,indices:v,postModify:c},{regex:g,indices:{bucket:1,path:2},postModify:c}];for(let y=0;y<m.length;y++){const k=m[y],C=k.regex.exec(e);if(C){const x=C[k.indices.bucket];let T=C[k.indices.path];T||(T=""),r=new tt(x,T),k.postModify(r);break}}if(r==null)throw XI(e);return r}}class iN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function a(){return l===2}let c=!1;function d(...E){c||(c=!0,e.apply(null,E))}function u(E){i=setTimeout(()=>{i=null,t(_,a())},E)}function f(){s&&clearTimeout(s)}function _(E,...g){if(c){f();return}if(E){f(),d.call(null,E,...g);return}if(a()||o){f(),d.call(null,E,...g);return}r<64&&(r*=2);let m;l===1?(l=2,m=0):m=(r+Math.random())*1e3,u(m)}let v=!1;function w(E){v||(v=!0,f(),!c&&(i!==null?(E||(l=2),clearTimeout(i),u(0)):E||(l=1)))}return u(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function oN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(t){return t!==void 0}function aN(t){return typeof t=="object"&&!Array.isArray(t)}function eh(t){return typeof t=="string"||t instanceof String}function Ip(t){return th()&&t instanceof Blob}function th(){return typeof Blob<"u"}function Np(t,e,n,r){if(r<e)throw su(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw su(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function rv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Jn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jn||(Jn={}));/**
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
 */function cN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,r,i,s,o,l,a,c,d,u,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new no(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const a=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Jn.NO_ERROR,a=s.getStatus();if(!l||cN(a,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===Jn.ABORT;r(!1,new no(!1,null,d));return}const c=this.successCodes_.indexOf(a)!==-1;r(!0,new no(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());lN(a)?s(a):s()}catch(a){o(a)}else if(l!==null){const a=Zd();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(i.canceled){const a=this.appDelete_?nv():YI();o(a)}else{const a=QI();o(a)}};this.canceled_?n(!1,new no(!1,null,!0)):this.backoffId_=sN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class no{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mN(t,e,n,r,i,s,o=!0){const l=rv(t.urlParams),a=t.url+l,c=Object.assign({},t.headers);return fN(c,e),dN(c,n),hN(c,s),pN(c,r),new uN(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _N(...t){const e=gN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(th())return new Blob(t);throw new he(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function vN(t){if(typeof atob>"u")throw nN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class za{constructor(e,n){this.data=e,this.contentType=n||null}}function wN(t,e){switch(t){case Rt.RAW:return new za(iv(e));case Rt.BASE64:case Rt.BASE64URL:return new za(sv(t,e));case Rt.DATA_URL:return new za(kN(e),CN(e))}throw Zd()}function iv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function EN(t){let e;try{e=decodeURIComponent(t)}catch{throw Ki(Rt.DATA_URL,"Malformed data URL.")}return iv(e)}function sv(t,e){switch(t){case Rt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ki(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ki(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=vN(e)}catch(i){throw i.message.includes("polyfill")?i:Ki(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ov{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ki(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=SN(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kN(t){const e=new ov(t);return e.base64?sv(Rt.BASE64,e.rest):EN(e.rest)}function CN(t){return new ov(t).contentType}function SN(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n){let r=0,i="";Ip(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ip(this.data_)){const r=this.data_,i=yN(r,e,n);return i===null?null:new mn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mn(r,!0)}}static getBlob(...e){if(th()){const n=e.map(r=>r instanceof mn?r.data_:r);return new mn(_N.apply(null,n))}else{const n=e.map(o=>eh(o)?wN(Rt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new mn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(t){let e;try{e=JSON.parse(t)}catch{return null}return aN(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function av(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NN(t,e){return e}class De{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||NN}}let ro=null;function TN(t){return!eh(t)||t.length<2?t:av(t)}function cv(){if(ro)return ro;const t=[];t.push(new De("bucket")),t.push(new De("generation")),t.push(new De("metageneration")),t.push(new De("name","fullPath",!0));function e(s,o){return TN(o)}const n=new De("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new De("size");return i.xform=r,t.push(i),t.push(new De("timeCreated")),t.push(new De("updated")),t.push(new De("md5Hash",null,!0)),t.push(new De("cacheControl",null,!0)),t.push(new De("contentDisposition",null,!0)),t.push(new De("contentEncoding",null,!0)),t.push(new De("contentLanguage",null,!0)),t.push(new De("contentType",null,!0)),t.push(new De("metadata","customMetadata",!0)),ro=t,ro}function RN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function bN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return RN(r,t),r}function uv(t,e,n){const r=lv(e);return r===null?null:bN(t,r,n)}function PN(t,e,n,r){const i=lv(e);if(i===null||!eh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,f="/b/"+o(d)+"/o/"+o(u),_=Xl(f,n,r),v=rv({alt:"media",token:c});return _+v})[0]}function AN(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class nh{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){if(!t)throw Zd()}function ON(t,e){function n(r,i){const s=uv(t,i,e);return dv(s!==null),s}return n}function LN(t,e){function n(r,i){const s=uv(t,i,e);return dv(s!==null),PN(s,i,t.host,t._protocol)}return n}function hv(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=KI():i=GI():n.getStatus()===402?i=HI(t.bucket):n.getStatus()===403?i=qI(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function fv(t){const e=hv(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=VI(t.path)),s.serverResponse=i.serverResponse,s}return n}function DN(t,e,n){const r=e.fullServerUrl(),i=Xl(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new nh(i,s,LN(t,n),o);return l.errorHandler=fv(e),l}function MN(t,e){const n=e.fullServerUrl(),r=Xl(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(a,c){}const l=new nh(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=fv(e),l}function jN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function UN(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=jN(null,e)),r}function FN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let m="";for(let y=0;y<2;y++)m=m+Math.random().toString().slice(2);return m}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const c=UN(e,r,i),d=AN(c,n),u="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+a+"--",_=mn.getBlob(u,r,f);if(_===null)throw eN();const v={name:c.fullPath},w=Xl(s,t.host,t._protocol),E="POST",g=t.maxUploadRetryTime,h=new nh(w,E,ON(t,n),g);return h.urlParams=v,h.headers=o,h.body=_.uploadData(),h.errorHandler=hv(e),h}class zN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class BN extends zN{initXhr(){this.xhr_.responseType="text"}}function rh(){return new BN}/**
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
 */class ur{constructor(e,n){this._service=e,n instanceof tt?this._location=n:this._location=tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ur(e,n)}get root(){const e=new tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return av(this._location.path)}get storage(){return this._service}get parent(){const e=xN(this._location.path);if(e===null)return null;const n=new tt(this._location.bucket,e);return new ur(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rN(e)}}function $N(t,e,n){t._throwIfRoot("uploadBytes");const r=FN(t.storage,t._location,cv(),new mn(e,!0),n);return t.storage.makeRequestWithTokens(r,rh).then(i=>({metadata:i,ref:t}))}function WN(t){t._throwIfRoot("getDownloadURL");const e=DN(t.storage,t._location,cv());return t.storage.makeRequestWithTokens(e,rh).then(n=>{if(n===null)throw tN();return n})}function VN(t){t._throwIfRoot("deleteObject");const e=MN(t.storage,t._location);return t.storage.makeRequestWithTokens(e,rh)}function HN(t,e){const n=IN(t._location.path,e),r=new tt(t._location.bucket,n);return new ur(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(t){return/^[A-Za-z]+:\/\//.test(t)}function KN(t,e){return new ur(t,e)}function pv(t,e){if(t instanceof ih){const n=t;if(n._bucket==null)throw ZI();const r=new ur(n,n._bucket);return e!=null?pv(r,e):r}else return e!==void 0?HN(t,e):t}function qN(t,e){if(e&&GN(e)){if(t instanceof ih)return KN(t,e);throw su("To use ref(service, url), the first argument must be a Storage instance.")}else return pv(t,e)}function Tp(t,e){const n=e==null?void 0:e[tv];return n==null?null:tt.makeFromBucketSpec(n,t)}function QN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:s_(i,t.app.options.projectId))}class ih{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=ev,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$I,this._maxUploadRetryTime=WI,this._requests=new Set,i!=null?this._bucket=tt.makeFromBucketSpec(i,this._host):this._bucket=Tp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=tt.makeFromBucketSpec(this._url,e):this._bucket=Tp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Np("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ur(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new iN(nv());{const o=mN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Rp="@firebase/storage",bp="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv="storage";function YN(t,e,n){return t=ve(t),$N(t,e,n)}function XN(t){return t=ve(t),WN(t)}function JN(t){return t=ve(t),VN(t)}function Pp(t,e){return t=ve(t),qN(t,e)}function ZN(t=od(),e){t=ve(t);const r=Ml(t,mv).getImmediate({identifier:e}),i=n_("storage");return i&&eT(r,...i),r}function eT(t,e,n,r={}){QN(t,e,n,r)}function tT(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ih(n,r,i,e,fr)}function nT(){ir(new An(mv,tT,"PUBLIC").setMultipleInstances(!0)),At(Rp,bp,""),At(Rp,bp,"esm2017")}nT();const rT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},sh=u_(rT),Ba=xC(sh),Je=jI(sh),Ap=ZN(sh),iT=new Ft,gv="packing-checklist-data",zt=["必備","電子產品","個人物品","視天氣","旅行","運動"],sT=["clipboard-list","footprints","briefcase","plane","person-standing","backpack","umbrella","tent","target","shopping-cart","shirt","dumbbell","mountain","baby","camera","heart","music","book-open","coffee","gift"],Pi={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"footprints",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"briefcase",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1};function Ii(t){return t.toLowerCase().replace(/\./g,",")}function oT(t){return t.replace(/,/g,".")}function lT(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:t.sharedWith||{}}:null}function _v(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:Pi.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):Pi.lists,activeListId:t.activeListId||Pi.activeListId}:Pi}function aT(){try{const t=localStorage.getItem(gv);if(t)return _v(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return Pi}function Op(t){try{localStorage.setItem(gv,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function cT(t){const[e,n]=O.useState(null),[r,i]=O.useState(t),[s,o]=O.useState("offline"),l=O.useRef(null),a=O.useCallback(_=>{l.current&&l.current();const v=Xe(Je,"users/"+_);l.current=ru(v,w=>{const E=w.val();if(E){const g=_v(E);i(g),Op(g),o("synced")}else c(_,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),c=O.useCallback((_,v)=>{o("syncing");const w=Xe(Je,"users/"+_);ko(w,v).then(()=>{o("synced")}).catch(E=>{console.error("Firebase 儲存失敗",E),o("error")})},[]),d=O.useCallback(_=>{i(_),Op(_),e&&c(e.uid,_)},[e,c]),u=O.useCallback(()=>{Lk(Ba,iT).catch(_=>{console.error("登入失敗",_),alert("登入失敗："+_.message)})},[]),f=O.useCallback(()=>{l.current&&(l.current(),l.current=null),pk(Ba).then(()=>{n(null),o("offline")}).catch(_=>{console.error("登出失敗",_)})},[]);return O.useEffect(()=>{const _=fk(Ba,v=>{n(v),v?a(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{_(),l.current&&l.current()}},[a]),{user:e,data:r,syncStatus:s,saveData:d,handleLogin:u,handleLogout:f}}function uT(t,e){const[n,r]=O.useState({}),[i,s]=O.useState({}),o=O.useRef({}),l=O.useRef(null),a=O.useCallback(h=>{o.current[h]&&(o.current[h](),delete o.current[h])},[]),c=O.useCallback(()=>{Object.keys(o.current).forEach(a),l.current&&(l.current(),l.current=null),r({}),s({})},[a]),d=O.useCallback((h,m)=>{if(o.current[`${m}_${h}`])return;const y=Xe(Je,`sharedLists/${h}`),k=ru(y,C=>{const x=C.val();if(!x){(m==="withMe"?r:s)(P=>{const A={...P};return delete A[h],A}),a(`${m}_${h}`);return}const T=lT(x);(m==="withMe"?r:s)(D=>({...D,[h]:T}))},C=>{console.error("共享清單讀取失敗",C)});o.current[`${m}_${h}`]=k},[a]);O.useEffect(()=>{if(!(t!=null&&t.email)){c();return}const h=Ii(t.email),m=Xe(Je,`sharedIndex/${h}`);return l.current=ru(m,y=>{const k=y.val();if(!k){Object.keys(o.current).forEach(x=>{x.startsWith("withMe_")&&a(x)}),r({});return}const C=new Set(Object.keys(k));Object.keys(o.current).forEach(x=>{if(x.startsWith("withMe_")){const T=x.replace("withMe_","");C.has(T)||(a(x),r(M=>{const D={...M};return delete D[T],D}))}}),C.forEach(x=>{d(x,"withMe")})},y=>{console.error("共享索引讀取失敗",y)}),()=>{c()}},[t==null?void 0:t.email]),O.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const h=new Set;e.lists.forEach(m=>{m.sharedListId&&h.add(m.sharedListId)}),Object.keys(o.current).forEach(m=>{if(m.startsWith("byMe_")){const y=m.replace("byMe_","");h.has(y)||(a(m),s(k=>{const C={...k};return delete C[y],C}))}}),h.forEach(m=>{d(m,"byMe")})},[t,e==null?void 0:e.lists,d,a]),O.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(h=>{if(!h.sharedListId)return;const m=i[h.sharedListId];if(!m)return;const y=(Array.isArray(h.items)?h.items:[]).map(x=>e.itemLibrary.find(T=>T.id===x)).filter(Boolean).map(({id:x,name:T,category:M,note:D,photoURL:P})=>({id:x,name:T,category:M,note:D,...P&&{photoURL:P}})),k=m.items||[];if(JSON.stringify(y)!==JSON.stringify(k)){const x=Xe(Je,`sharedLists/${h.sharedListId}`);Si(x,{items:y,name:h.name,icon:h.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,i]);const u=O.useCallback(async(h,m,y)=>{if(!t)return null;const k=(Array.isArray(h.items)?h.items:[]).map(P=>m.find(A=>A.id===P)).filter(Boolean).map(({id:P,name:A,category:K,note:ge,photoURL:fe})=>({id:P,name:A,category:K,note:ge,...fe&&{photoURL:fe}})),C={};y.forEach(P=>{C[Ii(P)]=!0});const T=TI(Xe(Je,"sharedLists")).key,M={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:h.name,icon:h.icon,items:k,checkedItems:Array.isArray(h.checkedItems)?h.checkedItems:[],sharedWith:C},D={};return D[`sharedLists/${T}`]=M,y.forEach(P=>{D[`sharedIndex/${Ii(P)}/${T}`]=!0}),await Si(Xe(Je),D),T},[t]),f=O.useCallback(async(h,m)=>{const y=Ii(m),k={};k[`sharedLists/${h}/sharedWith/${y}`]=!0,k[`sharedIndex/${y}/${h}`]=!0,await Si(Xe(Je),k)},[]),_=O.useCallback(async(h,m)=>{const y=Ii(m),k={};k[`sharedLists/${h}/sharedWith/${y}`]=null,k[`sharedIndex/${y}/${h}`]=null,await Si(Xe(Je),k)},[]),v=O.useCallback(async h=>{const m=i[h];if(!m)return;const y={};y[`sharedLists/${h}`]=null;const k=m.sharedWith||{};Object.keys(k).forEach(C=>{y[`sharedIndex/${C}/${h}`]=null}),await Si(Xe(Je),y)},[i]),w=O.useCallback(async(h,m)=>{const y=n[h]||i[h];if(!y)return;const k=Array.isArray(y.checkedItems)?y.checkedItems:[],x=k.includes(m)?k.filter(M=>M!==m):[...k,m],T=Xe(Je,`sharedLists/${h}/checkedItems`);await ko(T,x)},[n,i]),E=O.useCallback(async h=>{const m=Xe(Je,`sharedLists/${h}/checkedItems`);await ko(m,[])},[]),g=O.useCallback(async(h,m)=>{const y=Xe(Je,`sharedLists/${h}/checkedItems`);await ko(y,m)},[]);return{sharedWithMe:n,sharedByMe:i,shareList:u,addSharedUser:f,removeSharedUser:_,unshareList:v,toggleSharedCheck:w,resetSharedChecks:E,checkAllShared:g}}const dT="modulepreload",hT=function(t){return"/packing-checklist/"+t},Lp={},fT=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=hT(a),a in Lp)return;Lp[a]=!0;const c=a.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":dT,c||(u.as="script"),u.crossOrigin="",u.href=a,l&&u.setAttribute("nonce",l),document.head.appendChild(u),c)return new Promise((f,_)=>{u.addEventListener("load",f),u.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function pT(){const[t,e]=O.useState(!1),[n,r]=O.useState(null);return O.useEffect(()=>{fT(async()=>{const{registerSW:o}=await import("./virtual_pwa-register-5zJznIES.js");return{registerSW:o}},[]).then(({registerSW:o})=>{const l=o({onNeedRefresh(){e(!0)},onOfflineReady(){console.log("PWA: 離線模式已就緒")}});r(()=>l)}).catch(()=>{})},[]),{needRefresh:t,refresh:()=>{n&&n(!0)},dismiss:()=>{e(!1)}}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gT=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=t=>{const e=gT(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _T={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vT=O.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},a)=>O.createElement("svg",{ref:a,..._T,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:yv("lucide",i),...!s&&!yT(l)&&{"aria-hidden":"true"},...l},[...o.map(([c,d])=>O.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(t,e)=>{const n=O.forwardRef(({className:r,...i},s)=>O.createElement(vT,{ref:s,iconNode:e,className:yv(`lucide-${mT(Dp(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Dp(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]],ET=B("backpack",wT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT=[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]],CT=B("baby",kT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ST=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xT=B("book-open",ST);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],NT=B("briefcase",IT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TT=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Jl=B("camera",TT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RT=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vv=B("check",RT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bT=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],PT=B("chevron-left",bT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AT=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],OT=B("circle-alert",AT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LT=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],ou=B("clipboard-list",LT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DT=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],MT=B("cloud-off",DT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],UT=B("cloud",jT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],zT=B("coffee",FT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]],$T=B("dumbbell",BT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]],VT=B("footprints",WT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],GT=B("gift",HT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],qT=B("heart",KT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],YT=B("inbox",QT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]],JT=B("layout-list",XT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],wv=B("loader-circle",ZT);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],tR=B("loader",eR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nR=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],rR=B("log-in",nR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],sR=B("log-out",iR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],lR=B("mountain",oR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],cR=B("music",aR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],dR=B("package",uR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]],fR=B("person-standing",hR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],mR=B("plane",pR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ev=B("plus",gR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],yR=B("search",_R);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],wR=B("share-2",vR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],kR=B("shirt",ER);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],SR=B("shopping-cart",CR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],IR=B("sparkles",xR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],TR=B("square-check-big",NR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]],_l=B("sticky-note",RR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],PR=B("target",bR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]],OR=B("tent",AR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],DR=B("trash-2",LR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]],jR=B("umbrella",MR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],FR=B("user",UR);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],oh=B("x",zR),Mp={"clipboard-list":ou,footprints:VT,briefcase:NT,plane:mR,"person-standing":fR,backpack:ET,umbrella:jR,tent:OR,target:PR,"shopping-cart":SR,shirt:kR,dumbbell:$T,mountain:lR,baby:CT,camera:Jl,heart:qT,music:cR,"book-open":xT,coffee:zT,gift:GT},jp={"📋":"clipboard-list","🚶":"footprints","💼":"briefcase","✈️":"plane","🏃":"person-standing","🎒":"backpack","🏖️":"umbrella","🏕️":"tent","🎯":"target","🛒":"shopping-cart"};function BR(t){return jp[t]?Mp[jp[t]]||ou:Mp[t]||ou}function Co({name:t,size:e=20,className:n=""}){const r=BR(t);return p.jsx(r,{size:e,className:n})}function Up({message:t,onConfirm:e,onCancel:n}){return p.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[p.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),p.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:p.jsxs("div",{className:"p-6",children:[p.jsx("p",{className:"text-center text-lg text-slate-800 mb-6",children:t}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),p.jsx("button",{onClick:e,className:"flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function $R({data:t,user:e,syncStatus:n,onLogin:r,onLogout:i,onNavigate:s,onSaveData:o,shared:l,activeSharedListId:a}){var Ye,j,R;const[c,d]=O.useState([]),[u,f]=O.useState(null),_=a&&((Ye=l==null?void 0:l.sharedWithMe)==null?void 0:Ye[a]),v=a&&((j=l==null?void 0:l.sharedByMe)==null?void 0:j[a]),w=_?"shared-with-me":v?"own-shared":"local",E=_?l.sharedWithMe[a]:v?l.sharedByMe[a]:null,g=(R=t.lists)==null?void 0:R.find(S=>S.id===t.activeListId),h=g?{...g,items:Array.isArray(g.items)?g.items:[],checkedItems:Array.isArray(g.checkedItems)?g.checkedItems:[]}:null;let m=[],y=[],k="",C="",x="";w==="shared-with-me"&&E?(m=(E.items||[]).filter(Boolean),y=E.checkedItems||[],k=E.name||"清單",C=E.icon||"clipboard-list",x=E.ownerName||E.ownerEmail||""):w==="own-shared"&&h&&E?(m=h.items.map(S=>{var b;return(b=t.itemLibrary)==null?void 0:b.find(U=>U.id===S)}).filter(Boolean),y=E.checkedItems||[],k=h.name||"清單",C=h.icon||"clipboard-list"):(m=h?h.items.map(S=>{var b;return(b=t.itemLibrary)==null?void 0:b.find(U=>U.id===S)}).filter(Boolean):[],y=(h==null?void 0:h.checkedItems)||[],k=(h==null?void 0:h.name)||"清單",C=(h==null?void 0:h.icon)||"clipboard-list");const T=y.length,M=m.length,D=M>0&&T===M,P=M>0?T/M*100:0,A=S=>{if(w==="shared-with-me"||w==="own-shared")l.toggleSharedCheck(a,S);else{const b={...t,lists:t.lists.map(U=>{if(U.id!==t.activeListId)return U;const q=Array.isArray(U.checkedItems)?U.checkedItems:[],$e=q.includes(S);return{...U,checkedItems:$e?q.filter(ot=>ot!==S):[...q,S]}})};o(b)}},K=()=>{if(w==="shared-with-me"||w==="own-shared")l.resetSharedChecks(a);else{const S={...t,lists:t.lists.map(b=>b.id===t.activeListId?{...b,checkedItems:[]}:b)};o(S)}},ge=()=>{if(w==="shared-with-me"||w==="own-shared"){const S=m.map(b=>b.id);l.checkAllShared(a,S)}else{if(!h)return;const S={...t,lists:t.lists.map(b=>b.id===t.activeListId?{...b,checkedItems:[...h.items]}:b)};o(S)}},fe=S=>{d(b=>b.includes(S)?b.filter(U=>U!==S):[...b,S])};return p.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[p.jsxs("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[p.jsx(Co,{name:C,size:22,className:"text-indigo-600 flex-shrink-0"}),p.jsx("span",{className:"text-lg font-bold truncate",children:k}),w==="shared-with-me"&&x&&p.jsxs("span",{className:"text-xs text-indigo-500 flex-shrink-0",children:["來自 ",x]}),w==="own-shared"&&p.jsx("span",{className:"text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0",children:"已分享"})]}),w!=="shared-with-me"&&p.jsx("button",{onClick:()=>s("addItems"),className:"p-2 -mr-2 rounded-lg active:bg-slate-100 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"新增物品",children:p.jsx(Ev,{size:22,className:"text-indigo-600"})})]}),M>0&&p.jsxs("div",{className:"mt-3",children:[p.jsxs("div",{className:"flex justify-between text-xs text-slate-500 mb-1",children:[p.jsx("span",{children:"完成進度"}),p.jsxs("span",{children:[T,"/",M]})]}),p.jsx("div",{className:"h-2 bg-indigo-100 rounded-full overflow-hidden",children:p.jsx("div",{className:"h-full bg-indigo-600 transition-all duration-300",style:{width:`${P}%`}})})]})]}),p.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:m.length===0?p.jsxs("div",{className:"text-center py-16 text-slate-400",children:[p.jsx(YT,{size:48,className:"mx-auto mb-4 text-slate-300"}),p.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),w!=="shared-with-me"&&p.jsx("button",{onClick:()=>s("addItems"),className:"text-indigo-600 font-medium active:text-indigo-700 transition-colors duration-150",children:"從物品庫加入物品"})]}):p.jsx("div",{className:"space-y-2",children:m.map(S=>{var ot;const b=y.includes(S.id),U=(ot=S.note)==null?void 0:ot.trim(),q=U||S.photoURL,$e=c.includes(S.id);return p.jsxs("div",{children:[p.jsxs("div",{onClick:()=>A(S.id),className:`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 transition-colors duration-150 cursor-pointer min-h-[56px]
                      ${b?"bg-slate-50":""} ${q&&$e?"rounded-b-none border-b-0":""}`,children:[p.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                      ${b?"border-indigo-600 bg-indigo-600":"border-slate-300"}`,children:b&&p.jsx(vv,{size:14,className:"text-white"})}),S.photoURL&&p.jsx("img",{src:S.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg mr-3 flex-shrink-0",loading:"lazy",onError:Mt=>{Mt.target.style.display="none"}}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("div",{className:`${b?"line-through text-slate-400":"text-slate-800"} text-lg`,children:S.name}),p.jsx("div",{className:"text-xs text-slate-400",children:S.category})]}),q&&p.jsx("button",{onClick:Mt=>{Mt.stopPropagation(),fe(S.id)},className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                          ${$e?"bg-indigo-50 text-indigo-600":"text-slate-400"}`,"aria-label":"展開詳情",children:U?p.jsx(_l,{size:18}):p.jsx(Jl,{size:18})})]}),q&&$e&&p.jsxs("div",{className:"px-4 py-3 bg-indigo-50 border border-slate-200 border-t-0 rounded-b-xl",children:[U&&p.jsxs("div",{className:"flex items-start text-sm text-slate-600 gap-2",children:[p.jsx(_l,{size:14,className:"text-indigo-400 mt-0.5 flex-shrink-0"}),p.jsx("span",{children:S.note})]}),S.photoURL&&p.jsx("div",{className:U?"mt-2":"",children:p.jsx("img",{src:S.photoURL,alt:S.name,className:"max-w-[200px] rounded-lg",loading:"lazy",onError:Mt=>{Mt.target.style.display="none"}})})]})]},S.id)})})}),m.length>0&&p.jsx("div",{className:"p-4 bg-white border-t border-slate-200",children:p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:()=>f("reset"),className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"重設"}),p.jsx("button",{onClick:()=>f("checkAll"),disabled:D,className:`flex-1 py-3 rounded-xl font-medium transition-colors duration-150 min-h-[44px]
                ${D?"bg-indigo-100 text-indigo-400":"bg-indigo-600 text-white active:bg-indigo-700"}`,children:D?"準備完成！":"全部確認"})]})}),u==="reset"&&p.jsx(Up,{message:"確定要重設所有勾選？",onConfirm:()=>{K(),f(null)},onCancel:()=>f(null)}),u==="checkAll"&&p.jsx(Up,{message:"確定要勾選全部項目？",onConfirm:()=>{ge(),f(null)},onCancel:()=>f(null)})]})}function WR({sharedData:t,onAddUser:e,onRemoveUser:n,onUnshare:r,onClose:i}){const[s,o]=O.useState(""),[l,a]=O.useState(""),c=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(oT):[],d=_=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_),u=()=>{const _=s.trim().toLowerCase();if(_){if(!d(_)){a("請輸入有效的 Email");return}if(c.includes(_)){a("已經分享給此帳號");return}a(""),e(_),o("")}},f=_=>{_.key==="Enter"&&u()};return p.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[p.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),p.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",children:p.jsxs("div",{className:"p-4",children:[p.jsx("div",{className:"w-10 h-1 bg-slate-300 rounded-full mx-auto mb-4"}),p.jsx("div",{className:"text-lg font-bold text-slate-800 mb-4",children:"分享清單"}),p.jsxs("div",{className:"flex gap-2 mb-2",children:[p.jsx("input",{type:"email",value:s,onChange:_=>{o(_.target.value),a("")},onKeyDown:f,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),p.jsx("button",{onClick:u,className:"px-5 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"新增"})]}),l&&p.jsx("div",{className:"text-sm text-rose-500 mb-3",children:l}),c.length>0&&p.jsxs("div",{className:"mt-4",children:[p.jsx("div",{className:"text-sm text-slate-500 mb-2",children:"已分享給"}),p.jsx("div",{className:"space-y-2",children:c.map(_=>p.jsxs("div",{className:"flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200",children:[p.jsx("span",{className:"text-slate-700 text-sm truncate flex-1",children:_}),p.jsx("button",{onClick:()=>n(_),className:"ml-2 p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[36px] min-h-[36px] flex items-center justify-center transition-colors duration-150","aria-label":"移除分享對象",children:p.jsx(oh,{size:16})})]},_))})]}),c.length>0&&p.jsx("button",{onClick:r,className:"w-full mt-4 py-3 border border-rose-300 text-rose-500 rounded-xl font-medium active:bg-rose-50 transition-colors duration-150 min-h-[44px]",children:"停止分享"}),p.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-slate-500 font-medium min-h-[44px]",children:"關閉"})]})})]})}function VR({message:t,onConfirm:e,onCancel:n}){return p.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[p.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),p.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:p.jsxs("div",{className:"p-6",children:[p.jsx("p",{className:"text-center text-lg text-slate-800 mb-6",children:t}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),p.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定"})]})]})})]})}function HR({data:t,user:e,onNavigate:n,onSaveData:r,shared:i}){var D;const[s,o]=O.useState(""),[l,a]=O.useState("clipboard-list"),[c,d]=O.useState(null),[u,f]=O.useState(null),[_,v]=O.useState(null),w=(P,A)=>{const K={...t,activeListId:P};r(K),n("checklist",{sharedListId:A||null})},E=P=>{n("checklist",{sharedListId:P})},g=()=>{if(!s.trim())return;const P={id:Date.now(),name:s.trim(),icon:l,items:[],checkedItems:[]},A={...t,lists:[...t.lists,P],activeListId:P.id};r(A),o(""),a("clipboard-list"),n("checklist",{sharedListId:null})},h=async P=>{if(t.lists.length<=1)return;const A=t.lists.find(fe=>fe.id===P);if(A!=null&&A.sharedListId&&i)try{await i.unshareList(A.sharedListId)}catch(fe){console.error("清理分享資料失敗",fe)}const K=t.lists.filter(fe=>fe.id!==P),ge={...t,lists:K,activeListId:t.activeListId===P?K[0].id:t.activeListId};r(ge),v(null)},m=(P,A)=>{A.stopPropagation(),!(t.lists.length<=1)&&v(P)},y=(P,A)=>{A.stopPropagation(),d(P.id),f(P.sharedListId||null)},k=async P=>{const A=t.lists.find(K=>K.id===c);if(!(!A||!i))try{const K=await i.shareList(A,t.itemLibrary,[P]),ge={...t,lists:t.lists.map(fe=>fe.id===c?{...fe,sharedListId:K}:fe)};r(ge),f(K)}catch(K){console.error("分享失敗",K),alert("分享失敗："+K.message)}},C=async P=>{if(u)try{await i.addSharedUser(u,P)}catch(A){console.error("新增分享對象失敗",A)}else await k(P)},x=async P=>{if(!(!u||!i))try{await i.removeSharedUser(u,P)}catch(A){console.error("移除分享對象失敗",A)}},T=async()=>{if(!(!u||!i))try{await i.unshareList(u);const P={...t,lists:t.lists.map(A=>A.id===c?{...A,sharedListId:void 0}:A)};r(P),d(null),f(null)}catch(P){console.error("停止分享失敗",P)}},M=i?Object.entries(i.sharedWithMe):[];return p.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[p.jsx("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:p.jsx("div",{className:"text-lg font-bold text-center",children:"我的清單"})}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[p.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(P=>{const A=(P.items||[]).length,K=(P.checkedItems||[]).length,ge=P.id===t.activeListId,fe=!!P.sharedListId;return p.jsxs("div",{onClick:()=>w(P.id,P.sharedListId),className:`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 cursor-pointer transition-colors duration-150 min-h-[56px]
                  ${ge?"ring-2 ring-indigo-500":""}`,children:[p.jsx("div",{className:"mr-3 text-indigo-600",children:p.jsx(Co,{name:P.icon,size:24})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"font-medium text-slate-800 flex items-center",children:[p.jsx("span",{className:"truncate",children:P.name}),fe&&p.jsx("span",{className:"ml-2 text-xs bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200 flex-shrink-0",children:"已分享"})]}),p.jsxs("div",{className:"text-sm text-slate-400",children:[K,"/",A," 已確認"]})]}),e&&p.jsx("button",{onClick:Ye=>y(P,Ye),className:`p-2 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150
                      ${fe?"text-emerald-500 active:bg-emerald-50":"text-slate-400 active:bg-slate-100"}`,"aria-label":"分享清單",children:p.jsx(wR,{size:18})}),t.lists.length>1&&p.jsx("button",{onClick:Ye=>m(P.id,Ye),className:"p-2 text-slate-400 active:text-rose-500 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-150","aria-label":"刪除清單",children:p.jsx(DR,{size:18})})]},P.id)})}),M.length>0&&p.jsxs("div",{className:"mt-6",children:[p.jsx("div",{className:"text-sm text-slate-500 mb-2 px-1",children:"與我分享的清單"}),p.jsx("div",{className:"space-y-2",children:M.map(([P,A])=>{const K=(A.items||[]).length,ge=(A.checkedItems||[]).length;return p.jsxs("div",{onClick:()=>E(P),className:"flex items-center p-4 bg-indigo-50 rounded-xl border border-indigo-200 active:bg-indigo-100 cursor-pointer transition-colors duration-150 min-h-[56px]",children:[p.jsx("div",{className:"mr-3 text-indigo-600",children:p.jsx(Co,{name:A.icon||"clipboard-list",size:24})}),p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("div",{className:"font-medium text-slate-800",children:A.name}),p.jsxs("div",{className:"text-sm text-slate-400",children:[ge,"/",K," 已確認",p.jsxs("span",{className:"ml-2 text-indigo-500",children:["來自 ",A.ownerName||A.ownerEmail]})]})]})]},P)})})]}),p.jsxs("div",{className:"mt-4 p-4 bg-white rounded-xl border border-slate-200",children:[p.jsx("div",{className:"text-sm text-slate-500 mb-3",children:"新增清單"}),p.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:sT.map(P=>p.jsx("button",{onClick:()=>a(P),className:`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-150 active:bg-indigo-100
                  ${l===P?"bg-indigo-100 text-indigo-600":"text-slate-500"}`,"aria-label":P,children:p.jsx(Co,{name:P,size:20})},P))}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("input",{type:"text",value:s,onChange:P=>o(P.target.value),placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),p.jsx("button",{onClick:g,className:"px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"建立"})]})]})]}),c!==null&&p.jsx(WR,{sharedData:u&&((D=i==null?void 0:i.sharedByMe)==null?void 0:D[u])||null,onAddUser:C,onRemoveUser:x,onUnshare:T,onClose:()=>{d(null),f(null)}}),_!==null&&p.jsx(VR,{message:"確定刪除此清單？",onConfirm:()=>h(_),onCancel:()=>v(null)})]})}function GR(t,e=800,n=.7){return new Promise((r,i)=>{const s=new Image,o=URL.createObjectURL(t);s.onload=()=>{URL.revokeObjectURL(o);let{width:l,height:a}=s;(l>e||a>e)&&(l>a?(a=Math.round(a*e/l),l=e):(l=Math.round(l*e/a),a=e));const c=document.createElement("canvas");c.width=l,c.height=a,c.getContext("2d").drawImage(s,0,0,l,a),c.toBlob(u=>{if(!u){i(new Error("Canvas toBlob failed"));return}r(u)},"image/jpeg",n)},s.onerror=()=>{URL.revokeObjectURL(o),i(new Error("Failed to load image"))},s.src=o})}function KR(t){const[e,n]=O.useState(!1),[r,i]=O.useState(null);return{uploadPhoto:async(l,a)=>{if(!t)throw new Error("Not logged in");n(!0),i(null);try{const c=await GR(a),d=`users/${t.uid}/items/${l}/photo.jpg`,u=Pp(Ap,d);return await YN(u,c,{contentType:"image/jpeg"}),await XN(u)}catch(c){throw i(c.message),c}finally{n(!1)}},deletePhoto:async l=>{if(t)try{const a=`users/${t.uid}/items/${l}/photo.jpg`,c=Pp(Ap,a);await JN(c)}catch(a){a.code!=="storage/object-not-found"&&console.error("Failed to delete photo:",a)}},uploading:e,error:r}}function qR({message:t,onConfirm:e,onCancel:n}){return p.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",onClick:n,children:[p.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50"}),p.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",onClick:r=>r.stopPropagation(),children:p.jsxs("div",{className:"p-6",children:[p.jsx("p",{className:"text-center text-lg text-slate-800 mb-6",children:t}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:n,className:"flex-1 py-3 text-slate-600 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),p.jsx("button",{onClick:e,className:"flex-1 py-3 bg-rose-500 text-white rounded-xl font-medium active:bg-rose-600 transition-colors duration-150 min-h-[44px]",children:"確定刪除"})]})]})})]})}function QR({data:t,user:e,onNavigate:n,onSaveData:r}){const[i,s]=O.useState(""),[o,l]=O.useState(zt[0]),[a,c]=O.useState(""),[d,u]=O.useState(null),[f,_]=O.useState(null),[v,w]=O.useState(null),[E,g]=O.useState(""),[h,m]=O.useState(null),[y,k]=O.useState(!1),C=O.useRef(null),{uploadPhoto:x,deletePhoto:T,uploading:M}=KR(e),D={};zt.forEach(j=>{D[j]=[]}),(t.itemLibrary||[]).forEach(j=>{D[j.category]&&D[j.category].push(j)});const P=j=>{var S;const R=(S=j.target.files)==null?void 0:S[0];R&&(u(R),_(URL.createObjectURL(R)),j.target.value="")},A=()=>{f&&URL.revokeObjectURL(f),u(null),_(null)},K=async()=>{if(!i.trim())return;k(!0);const j=Date.now();let R;if(d&&e)try{R=await x(j,d)}catch{}const S={id:j,name:i.trim(),category:o,note:a.trim(),...R&&{photoURL:R}},b={...t,itemLibrary:[...t.itemLibrary,S]};r(b),s(""),c(""),A(),k(!1)},ge=async(j,R,S,b,U)=>{const q={...t,itemLibrary:t.itemLibrary.map($e=>$e.id===j?{...$e,name:R,category:S,note:b,...U?{photoURL:U}:{photoURL:null}}:$e)};r(q),w(null)},fe=async j=>{const R=t.itemLibrary.find(b=>b.id===j);R!=null&&R.photoURL&&T(j);const S={...t,itemLibrary:t.itemLibrary.filter(b=>b.id!==j),lists:t.lists.map(b=>({...b,items:(b.items||[]).filter(U=>U!==j),checkedItems:(b.checkedItems||[]).filter(U=>U!==j)}))};r(S),m(null)},Ye=v?t.itemLibrary.find(j=>j.id===v):null;return p.jsxs("div",{className:"flex flex-col h-screen pb-16",children:[p.jsx("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:p.jsx("div",{className:"text-lg font-bold text-center",children:"物品庫"})}),p.jsxs("div",{className:"p-4 bg-white border-b border-slate-200",children:[p.jsx("div",{className:"text-sm text-slate-500 mb-2",children:"新增物品"}),p.jsx("input",{type:"text",value:i,onChange:j=>s(j.target.value),placeholder:"物品名稱...",className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),p.jsx("select",{value:o,onChange:j=>l(j.target.value),className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:zt.map(j=>p.jsx("option",{value:j,children:j},j))}),p.jsx("input",{type:"text",value:a,onChange:j=>c(j.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&p.jsxs("div",{className:"mb-2",children:[p.jsx("input",{ref:C,type:"file",accept:"image/*",capture:"environment",onChange:P,className:"hidden"}),f?p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("img",{src:f,alt:"預覽",className:"w-20 h-20 object-cover rounded-lg border border-slate-200"}),p.jsx("button",{onClick:A,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 rounded-lg active:bg-rose-50 transition-colors duration-150",children:"移除照片"})]}):p.jsxs("button",{onClick:()=>{var j;return(j=C.current)==null?void 0:j.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-500 active:bg-slate-50 transition-colors duration-150",children:[p.jsx(Jl,{size:18}),p.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),p.jsxs("button",{onClick:K,disabled:y||M,className:"w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[(y||M)&&p.jsx(wv,{size:18,className:"animate-spin"}),y||M?"新增中...":"+ 新增物品"]})]}),p.jsx("div",{className:"px-4 py-2 bg-white border-b border-slate-200",children:p.jsxs("div",{className:"relative",children:[p.jsx(yR,{size:16,className:"absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),p.jsx("input",{type:"text",value:E,onChange:j=>g(j.target.value),placeholder:"搜尋物品...",className:"w-full pl-9 pr-8 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),E&&p.jsx("button",{onClick:()=>g(""),className:"absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 p-1 min-w-[28px] min-h-[28px] flex items-center justify-center","aria-label":"清除搜尋",children:p.jsx(oh,{size:16})})]})}),p.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:zt.map(j=>{const R=E?D[j].filter(S=>{var U,q;const b=E.toLowerCase();return((U=S.name)==null?void 0:U.toLowerCase().includes(b))||((q=S.note)==null?void 0:q.toLowerCase().includes(b))}):D[j];return R.length===0?null:p.jsxs("div",{className:"mb-4",children:[p.jsx("div",{className:"text-sm text-indigo-600 font-semibold mb-2",children:j}),p.jsx("div",{className:"space-y-2",children:R.map(S=>p.jsxs("div",{className:"p-3 bg-white rounded-xl border border-slate-200",children:[p.jsxs("div",{className:"flex items-center justify-between min-h-[36px]",children:[p.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[S.photoURL&&p.jsx("img",{src:S.photoURL,alt:"",className:"w-10 h-10 object-cover rounded-lg flex-shrink-0",loading:"lazy",onError:b=>{b.target.style.display="none"}}),p.jsx("span",{className:"font-medium text-slate-800",children:S.name})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:()=>w(S.id),className:"text-sm text-slate-400 px-2 py-1 rounded active:bg-slate-100 transition-colors duration-150 min-h-[32px]",children:"編輯"}),p.jsx("button",{onClick:()=>m(S.id),className:"text-sm text-rose-400 px-2 py-1 rounded active:bg-rose-50 transition-colors duration-150 min-h-[32px]",children:"刪除"})]})]}),S.note&&p.jsxs("div",{className:"text-sm text-slate-400 mt-1 flex items-center gap-1",children:[p.jsx(_l,{size:12,className:"flex-shrink-0"}),S.note]})]},S.id))})]},j)})}),Ye&&p.jsx(YR,{item:Ye,user:e,categories:zt,onSave:ge,onClose:()=>w(null),uploadPhoto:x,deletePhoto:T}),h!==null&&p.jsx(qR,{message:"確定刪除此物品？",onConfirm:()=>fe(h),onCancel:()=>m(null)})]})}function YR({item:t,user:e,categories:n,onSave:r,onClose:i,uploadPhoto:s,deletePhoto:o}){const[l,a]=O.useState(t.name),[c,d]=O.useState(t.category),[u,f]=O.useState(t.note||""),[_,v]=O.useState(t.photoURL||""),[w,E]=O.useState(null),[g,h]=O.useState(null),[m,y]=O.useState(!1),[k,C]=O.useState(!1),x=O.useRef(null),T=A=>{var ge;const K=(ge=A.target.files)==null?void 0:ge[0];K&&(E(K),g&&URL.revokeObjectURL(g),h(URL.createObjectURL(K)),y(!1),A.target.value="")},M=()=>{g&&URL.revokeObjectURL(g),E(null),h(null),y(!0)},D=async()=>{C(!0);let A=_;if(m&&!w&&(t.photoURL&&o(t.id),A=""),w&&e)try{A=await s(t.id,w)}catch{A=m?"":_}r(t.id,l,c,u,A),C(!1)},P=g||!m&&_;return p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:i,children:p.jsxs("div",{className:"bg-white w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:A=>A.stopPropagation(),children:[p.jsx("div",{className:"text-lg font-bold mb-4 text-slate-900",children:"編輯物品"}),p.jsx("input",{type:"text",value:l,onChange:A=>a(A.target.value),className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),p.jsx("select",{value:c,onChange:A=>d(A.target.value),className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-indigo-500 transition-colors duration-150",children:n.map(A=>p.jsx("option",{value:A,children:A},A))}),p.jsx("input",{type:"text",value:u,onChange:A=>f(A.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-slate-300 rounded-xl mb-2 focus:outline-none focus:border-indigo-500 transition-colors duration-150"}),e&&p.jsxs("div",{className:"mb-4",children:[p.jsx("input",{ref:x,type:"file",accept:"image/*",capture:"environment",onChange:T,className:"hidden"}),P?p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("img",{src:g||_,alt:"照片",className:"w-20 h-20 object-cover rounded-lg border border-slate-200"}),p.jsxs("div",{className:"flex flex-col gap-2",children:[p.jsx("button",{onClick:()=>{var A;return(A=x.current)==null?void 0:A.click()},className:"text-sm text-indigo-600 px-3 py-1.5 border border-indigo-200 rounded-lg active:bg-indigo-50 transition-colors duration-150",children:"更換照片"}),p.jsx("button",{onClick:M,className:"text-sm text-rose-500 px-3 py-1.5 border border-rose-200 rounded-lg active:bg-rose-50 transition-colors duration-150",children:"移除照片"})]})]}):p.jsxs("button",{onClick:()=>{var A;return(A=x.current)==null?void 0:A.click()},className:"flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-xl text-slate-500 active:bg-slate-50 transition-colors duration-150",children:[p.jsx(Jl,{size:18}),p.jsx("span",{className:"text-sm",children:"附加照片"})]})]}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{onClick:i,className:"flex-1 py-3 border border-slate-300 rounded-xl font-medium active:bg-slate-100 transition-colors duration-150 min-h-[44px]",children:"取消"}),p.jsxs("button",{onClick:D,disabled:k,className:"flex-1 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px] disabled:opacity-50 flex items-center justify-center gap-2",children:[k&&p.jsx(wv,{size:18,className:"animate-spin"}),k?"儲存中...":"儲存"]})]})]})})}function XR({data:t,onNavigate:e,onSaveData:n}){var v,w;const[r,i]=O.useState(!1),[s,o]=O.useState(""),[l,a]=O.useState(zt[0]),c=(v=t.lists)==null?void 0:v.find(E=>E.id===t.activeListId),d=c?{...c,items:Array.isArray(c.items)?c.items:[],checkedItems:Array.isArray(c.checkedItems)?c.checkedItems:[]}:null,u={};zt.forEach(E=>{u[E]=[]}),(t.itemLibrary||[]).forEach(E=>{u[E.category]&&u[E.category].push(E)});const f=E=>{const g={...t,lists:t.lists.map(h=>{if(h.id!==t.activeListId)return h;const m=Array.isArray(h.items)?h.items:[],y=Array.isArray(h.checkedItems)?h.checkedItems:[],k=m.includes(E);return{...h,items:k?m.filter(C=>C!==E):[...m,E],checkedItems:k?y.filter(C=>C!==E):y}})};n(g)},_=()=>{const E=s.trim();if(!E)return;const g="item_"+Date.now(),h={id:g,name:E,category:l},m={...t,itemLibrary:[...t.itemLibrary||[],h],lists:t.lists.map(y=>{if(y.id!==t.activeListId)return y;const k=Array.isArray(y.items)?y.items:[];return{...y,items:[...k,g]}})};n(m),o(""),i(!1)};return p.jsxs("div",{className:"flex flex-col h-screen",children:[p.jsxs("div",{className:"bg-white text-slate-900 px-4 py-3 border-b border-slate-200 safe-top",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg active:bg-slate-100 transition-colors duration-150 min-w-[44px] min-h-[44px] flex items-center justify-center","aria-label":"返回",children:p.jsx(PT,{size:22,className:"text-slate-600"})}),p.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),p.jsx("div",{className:"w-10"})]}),p.jsxs("div",{className:"text-sm text-indigo-600 mt-1",children:["選擇要加入「",d==null?void 0:d.name,"」的物品"]})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[p.jsx("div",{className:"mb-4",children:r?p.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-3 space-y-3",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("span",{className:"text-sm font-semibold text-slate-700",children:"快速新增物品"}),p.jsx("button",{onClick:()=>{i(!1),o("")},className:"p-1 rounded-lg active:bg-slate-100",children:p.jsx(oh,{size:18,className:"text-slate-400"})})]}),p.jsx("input",{type:"text",placeholder:"物品名稱",value:s,onChange:E=>o(E.target.value),onKeyDown:E=>{E.key==="Enter"&&_()},autoFocus:!0,className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"}),p.jsx("select",{value:l,onChange:E=>a(E.target.value),className:"w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500",children:zt.map(E=>p.jsx("option",{value:E,children:E},E))}),p.jsx("button",{onClick:_,disabled:!s.trim(),className:"w-full py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium active:bg-indigo-700 disabled:opacity-40 transition-colors duration-150",children:"新增並加入清單"})]}):p.jsxs("button",{onClick:()=>i(!0),className:"w-full flex items-center justify-center gap-2 py-2.5 border-2 border-dashed border-indigo-300 rounded-xl text-indigo-600 font-medium active:bg-indigo-50 transition-colors duration-150",children:[p.jsx(Ev,{size:18}),"新增物品"]})}),zt.map(E=>{const g=u[E];return g.length===0?null:p.jsxs("div",{className:"mb-4",children:[p.jsx("div",{className:"text-sm text-indigo-600 font-semibold mb-2",children:E}),p.jsx("div",{className:"space-y-2",children:g.map(h=>{const m=d==null?void 0:d.items.includes(h.id);return p.jsxs("div",{onClick:()=>f(h.id),className:`flex items-center p-4 bg-white rounded-xl border border-slate-200 active:bg-slate-50 cursor-pointer transition-colors duration-150 min-h-[56px]
                        ${m?"ring-2 ring-indigo-500":""}`,children:[p.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors duration-150
                        ${m?"border-indigo-600 bg-indigo-600":"border-slate-300"}`,children:m&&p.jsx(vv,{size:14,className:"text-white"})}),h.photoURL&&p.jsx("img",{src:h.photoURL,alt:"",className:"w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0",loading:"lazy",onError:y=>{y.target.style.display="none"}}),p.jsxs("div",{className:"flex-1",children:[p.jsx("div",{className:m?"text-slate-800 font-medium":"text-slate-600",children:h.name}),h.note&&p.jsxs("div",{className:"text-xs text-slate-400 mt-0.5 flex items-center gap-1",children:[p.jsx(_l,{size:10,className:"flex-shrink-0"}),h.note]})]})]},h.id)})})]},E)})]}),p.jsxs("div",{className:"p-4 bg-white border-t border-slate-200 safe-bottom",children:[p.jsxs("div",{className:"text-center text-slate-500 mb-3",children:["已選擇 ",((w=d==null?void 0:d.items)==null?void 0:w.length)||0," 個物品"]}),p.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150 min-h-[44px]",children:"完成"})]})]})}function JR({user:t,syncStatus:e,onLogin:n,onLogout:r}){const i={offline:{icon:MT,color:"text-slate-400",label:"離線模式",bg:"bg-slate-50"},syncing:{icon:tR,color:"text-amber-500",label:"同步中...",bg:"bg-amber-50"},synced:{icon:UT,color:"text-emerald-500",label:"已同步",bg:"bg-emerald-50"},error:{icon:OT,color:"text-rose-500",label:"同步失敗",bg:"bg-rose-50"}},s=i[e]||i.offline,o=s.icon;return p.jsxs("div",{className:"flex flex-col h-full pb-20",children:[p.jsx("div",{className:"bg-white border-b border-slate-200 px-4 py-3 safe-top",children:p.jsx("div",{className:"text-lg font-bold text-slate-900 text-center",children:"設定"})}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[p.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 mb-4",children:[p.jsx("div",{className:"text-sm font-semibold text-slate-500 mb-3",children:"帳號"}),t?p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[t.photoURL&&p.jsx("img",{src:t.photoURL,alt:"",className:"w-12 h-12 rounded-full",onError:l=>l.target.style.display="none"}),p.jsxs("div",{className:"min-w-0 flex-1",children:[p.jsx("div",{className:"font-semibold text-slate-900 truncate",children:t.displayName||"使用者"}),p.jsx("div",{className:"text-sm text-slate-500 truncate",children:t.email})]})]}),p.jsxs("button",{onClick:r,className:"w-full flex items-center justify-center gap-2 py-3 border border-rose-200 text-rose-500 rounded-xl font-medium active:bg-rose-50 transition-colors duration-150",children:[p.jsx(sR,{size:18}),"登出"]})]}):p.jsxs("button",{onClick:n,className:"w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-medium active:bg-indigo-700 transition-colors duration-150",children:[p.jsx(rR,{size:18}),"使用 Google 登入"]})]}),p.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4 mb-4",children:[p.jsx("div",{className:"text-sm font-semibold text-slate-500 mb-3",children:"同步狀態"}),p.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-xl ${s.bg}`,children:[p.jsx(o,{size:20,className:`${s.color} ${e==="syncing"?"animate-spin":""}`}),p.jsx("span",{className:`font-medium ${s.color}`,children:s.label})]})]}),p.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-4",children:[p.jsx("div",{className:"text-sm font-semibold text-slate-500 mb-3",children:"關於"}),p.jsxs("div",{className:"text-sm text-slate-600",children:[p.jsxs("div",{className:"flex justify-between py-2",children:[p.jsx("span",{children:"應用程式"}),p.jsx("span",{className:"text-slate-900 font-medium",children:"打包清單"})]}),p.jsx("div",{className:"border-t border-slate-100"}),p.jsxs("div",{className:"flex justify-between py-2",children:[p.jsx("span",{children:"版本"}),p.jsx("span",{className:"text-slate-900 font-medium",children:"1.0.0"})]})]})]})]})]})}const ZR=[{id:"checklist",label:"清單",icon:TR},{id:"lists",label:"所有清單",icon:JT},{id:"library",label:"物品庫",icon:dR},{id:"profile",label:"設定",icon:FR}];function eb({currentView:t,onNavigate:e}){return p.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 safe-bottom",children:p.jsx("div",{className:"flex",children:ZR.map(n=>{const r=t===n.id,i=n.icon;return p.jsxs("button",{onClick:()=>e(n.id),className:`flex-1 flex flex-col items-center justify-center min-h-16 py-2 transition-colors duration-150
                ${r?"text-indigo-600":"text-slate-400 active:text-slate-600"}`,"aria-label":n.label,children:[p.jsx(i,{size:22,strokeWidth:r?2.5:2}),p.jsx("span",{className:`text-xs mt-1 ${r?"font-semibold":"font-medium"}`,children:n.label})]},n.id)})})})}function tb({onRefresh:t,onDismiss:e}){return p.jsx("div",{className:"fixed bottom-20 left-4 right-4 bg-indigo-600 text-white rounded-xl border border-indigo-500 p-4 z-50 animate-slide-up",children:p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx(IR,{size:24}),p.jsxs("div",{children:[p.jsx("div",{className:"font-medium",children:"有新版本可用"}),p.jsx("div",{className:"text-sm text-indigo-200",children:"點擊更新以取得最新功能"})]})]}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("button",{onClick:e,className:"px-3 py-2 text-indigo-200 active:text-white text-sm transition-colors duration-150 min-h-[44px]",children:"稍後"}),p.jsx("button",{onClick:t,className:"px-4 py-2 bg-white text-indigo-700 rounded-lg font-medium text-sm active:bg-indigo-50 transition-colors duration-150 min-h-[44px]",children:"更新"})]})]})})}function nb(){const[t,e]=O.useState("checklist"),[n,r]=O.useState(null),i=aT(),{user:s,data:o,syncStatus:l,saveData:a,handleLogin:c,handleLogout:d}=cT(i),u=uT(s,o),{needRefresh:f,refresh:_,dismiss:v}=pT(),w=(g,h)=>{(h==null?void 0:h.sharedListId)!==void 0&&r(h.sharedListId),e(g)},E=t!=="addItems";return p.jsxs(p.Fragment,{children:[t==="checklist"&&p.jsx($R,{data:o,user:s,syncStatus:l,onLogin:c,onLogout:d,onNavigate:w,onSaveData:a,shared:u,activeSharedListId:n}),t==="lists"&&p.jsx(HR,{data:o,user:s,onNavigate:w,onSaveData:a,shared:u}),t==="library"&&p.jsx(QR,{data:o,user:s,onNavigate:w,onSaveData:a}),t==="addItems"&&p.jsx(XR,{data:o,onNavigate:w,onSaveData:a}),t==="profile"&&p.jsx(JR,{user:s,syncStatus:l,onLogin:c,onLogout:d}),E&&p.jsx(eb,{currentView:t,onNavigate:g=>w(g,{sharedListId:null})}),f&&p.jsx(tb,{onRefresh:_,onDismiss:v})]})}$a.createRoot(document.getElementById("root")).render(p.jsx(Uv.StrictMode,{children:p.jsx(nb,{})}));export{fT as _};
