(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function mv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jf={exports:{}},nl={},Zf={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),gv=Symbol.for("react.portal"),_v=Symbol.for("react.fragment"),vv=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Iv=Symbol.for("react.memo"),kv=Symbol.for("react.lazy"),Ad=Symbol.iterator;function Tv(t){return t===null||typeof t!="object"?null:(t=Ad&&t[Ad]||t["@@iterator"],typeof t=="function"?t:null)}var ep={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tp=Object.assign,np={};function $r(t,e,n){this.props=t,this.context=e,this.refs=np,this.updater=n||ep}$r.prototype.isReactComponent={};$r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};$r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rp(){}rp.prototype=$r.prototype;function Uu(t,e,n){this.props=t,this.context=e,this.refs=np,this.updater=n||ep}var zu=Uu.prototype=new rp;zu.constructor=Uu;tp(zu,$r.prototype);zu.isPureReactComponent=!0;var Od=Array.isArray,ip=Object.prototype.hasOwnProperty,Wu={current:null},sp={key:!0,ref:!0,__self:!0,__source:!0};function op(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ip.call(e,r)&&!sp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:as,type:t,key:s,ref:o,props:i,_owner:Wu.current}}function xv(t,e){return{$$typeof:as,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===as}function Nv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ld=/\/+/g;function bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nv(""+t.key):e.toString(36)}function Hs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case as:case gv:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+bl(o,0):r,Od(i)?(n="",t!=null&&(n=t.replace(Ld,"$&/")+"/"),Hs(i,e,n,"",function(u){return u})):i!=null&&(Bu(i)&&(i=xv(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ld,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Od(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+bl(s,l);o+=Hs(s,e,n,a,i)}else if(a=Tv(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+bl(s,l++),o+=Hs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Is(t,e,n){if(t==null)return t;var r=[],i=0;return Hs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Rv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},$s={transition:null},Pv={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:$s,ReactCurrentOwner:Wu};function lp(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Is,forEach:function(t,e,n){Is(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Is(t,function(){e++}),e},toArray:function(t){return Is(t,function(e){return e})||[]},only:function(t){if(!Bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=$r;z.Fragment=_v;z.Profiler=yv;z.PureComponent=Uu;z.StrictMode=vv;z.Suspense=Cv;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;z.act=lp;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=tp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)ip.call(e,a)&&!sp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:as,type:t.type,key:i,ref:s,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:Ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};z.createElement=op;z.createFactory=function(t){var e=op.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Sv,render:t}};z.isValidElement=Bu;z.lazy=function(t){return{$$typeof:kv,_payload:{_status:-1,_result:t},_init:Rv}};z.memo=function(t,e){return{$$typeof:Iv,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=$s.transition;$s.transition={};try{t()}finally{$s.transition=e}};z.unstable_act=lp;z.useCallback=function(t,e){return Oe.current.useCallback(t,e)};z.useContext=function(t){return Oe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};z.useEffect=function(t,e){return Oe.current.useEffect(t,e)};z.useId=function(){return Oe.current.useId()};z.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return Oe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};z.useRef=function(t){return Oe.current.useRef(t)};z.useState=function(t){return Oe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return Oe.current.useTransition()};z.version="18.3.1";Zf.exports=z;var D=Zf.exports;const Av=mv(D);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=D,Lv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,Mv=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Fv={key:!0,ref:!0,__self:!0,__source:!0};function ap(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bv.call(e,r)&&!Fv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lv,type:t,key:s,ref:o,props:i,_owner:Mv.current}}nl.Fragment=Dv;nl.jsx=ap;nl.jsxs=ap;Jf.exports=nl;var _=Jf.exports,Sa={},up={exports:{}},Qe={},cp={exports:{}},dp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,P){var L=I.length;I.push(P);e:for(;0<L;){var H=L-1>>>1,ie=I[H];if(0<i(ie,P))I[H]=P,I[L]=ie,L=H;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var P=I[0],L=I.pop();if(L!==P){I[0]=L;e:for(var H=0,ie=I.length,nr=ie>>>1;H<nr;){var Cn=2*(H+1)-1,Dl=I[Cn],In=Cn+1,Cs=I[In];if(0>i(Dl,L))In<ie&&0>i(Cs,Dl)?(I[H]=Cs,I[In]=L,H=In):(I[H]=Dl,I[Cn]=L,H=Cn);else if(In<ie&&0>i(Cs,L))I[H]=Cs,I[In]=L,H=In;else break e}}return P}function i(I,P){var L=I.sortIndex-P.sortIndex;return L!==0?L:I.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,g=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(I){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=I)r(u),P.sortIndex=P.expirationTime,e(a,P);else break;P=n(u)}}function y(I){if(w=!1,p(I),!v)if(n(a)!==null)v=!0,er(C);else{var P=n(u);P!==null&&tr(y,P.startTime-I)}}function C(I,P){v=!1,w&&(w=!1,m(E),E=-1),g=!0;var L=h;try{for(p(P),c=n(a);c!==null&&(!(c.expirationTime>P)||I&&!B());){var H=c.callback;if(typeof H=="function"){c.callback=null,h=c.priorityLevel;var ie=H(c.expirationTime<=P);P=t.unstable_now(),typeof ie=="function"?c.callback=ie:c===n(a)&&r(a),p(P)}else r(a);c=n(a)}if(c!==null)var nr=!0;else{var Cn=n(u);Cn!==null&&tr(y,Cn.startTime-P),nr=!1}return nr}finally{c=null,h=L,g=!1}}var N=!1,T=null,E=-1,O=5,R=-1;function B(){return!(t.unstable_now()-R<O)}function ee(){if(T!==null){var I=t.unstable_now();R=I;var P=!0;try{P=T(!0,I)}finally{P?ce():(N=!1,T=null)}}else N=!1}var ce;if(typeof f=="function")ce=function(){f(ee)};else if(typeof MessageChannel<"u"){var Zn=new MessageChannel,Ss=Zn.port2;Zn.port1.onmessage=ee,ce=function(){Ss.postMessage(null)}}else ce=function(){S(ee,0)};function er(I){T=I,N||(N=!0,ce())}function tr(I,P){E=S(function(){I(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,er(C))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var L=h;h=P;try{return I()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var L=h;h=I;try{return P()}finally{h=L}},t.unstable_scheduleCallback=function(I,P,L){var H=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,I){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=L+ie,I={id:d++,callback:P,priorityLevel:I,startTime:L,expirationTime:ie,sortIndex:-1},L>H?(I.sortIndex=L,e(u,I),n(a)===null&&I===n(u)&&(w?(m(E),E=-1):w=!0,tr(y,L-H))):(I.sortIndex=ie,e(a,I),v||g||(v=!0,er(C))),I},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(I){var P=h;return function(){var L=h;h=P;try{return I.apply(this,arguments)}finally{h=L}}}})(dp);cp.exports=dp;var jv=cp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv=D,Ke=jv;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hp=new Set,bi={};function qn(t,e){Pr(t,e),Pr(t+"Capture",e)}function Pr(t,e){for(bi[t]=e,t=0;t<e.length;t++)hp.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dd={},bd={};function Wv(t){return Ca.call(bd,t)?!0:Ca.call(Dd,t)?!1:zv.test(t)?bd[t]=!0:(Dd[t]=!0,!1)}function Bv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vv(t,e,n,r){if(e===null||typeof e>"u"||Bv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vu=/[\-:]([a-z])/g;function Hu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vu,Hu);Se[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vu,Hu);Se[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vu,Hu);Se[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function $u(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vv(e,n,i,r)&&(n=null),r||i===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bt=Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ks=Symbol.for("react.element"),sr=Symbol.for("react.portal"),or=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Ia=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),pp=Symbol.for("react.context"),Ku=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Qu=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),mp=Symbol.for("react.offscreen"),Md=Symbol.iterator;function ti(t){return t===null||typeof t!="object"?null:(t=Md&&t[Md]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,Ml;function mi(t){if(Ml===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ml=e&&e[1]||""}return`
`+Ml+t}var Fl=!1;function jl(t,e){if(!t||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mi(t):""}function Hv(t){switch(t.tag){case 5:return mi(t.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return t=jl(t.type,!1),t;case 11:return t=jl(t.type.render,!1),t;case 1:return t=jl(t.type,!0),t;default:return""}}function xa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case or:return"Fragment";case sr:return"Portal";case Ia:return"Profiler";case Gu:return"StrictMode";case ka:return"Suspense";case Ta:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pp:return(t.displayName||"Context")+".Consumer";case fp:return(t._context.displayName||"Context")+".Provider";case Ku:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qu:return e=t.displayName||null,e!==null?e:xa(t.type)||"Memo";case $t:e=t._payload,t=t._init;try{return xa(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gv(t){var e=gp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ts(t){t._valueTracker||(t._valueTracker=Gv(t))}function _p(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ao(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Na(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Fd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vp(t,e){e=e.checked,e!=null&&$u(t,"checked",e,!1)}function Ra(t,e){vp(t,e);var n=pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pa(t,e.type,pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pa(t,e,n){(e!=="number"||ao(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gi=Array.isArray;function vr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Aa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ud(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(gi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pn(n)}}function yp(t,e){var n=pn(e.value),r=pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xs,Ep=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xs=xs||document.createElement("div"),xs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(t){Kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wi[e]=wi[t]})});function Sp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wi.hasOwnProperty(t)&&wi[t]?(""+e).trim():e+"px"}function Cp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Qv=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function La(t,e){if(e){if(Qv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Da(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=null;function qu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ma=null,yr=null,wr=null;function Wd(t){if(t=ds(t)){if(typeof Ma!="function")throw Error(k(280));var e=t.stateNode;e&&(e=ll(e),Ma(t.stateNode,t.type,e))}}function Ip(t){yr?wr?wr.push(t):wr=[t]:yr=t}function kp(){if(yr){var t=yr,e=wr;if(wr=yr=null,Wd(t),e)for(t=0;t<e.length;t++)Wd(e[t])}}function Tp(t,e){return t(e)}function xp(){}var Ul=!1;function Np(t,e,n){if(Ul)return t(e,n);Ul=!0;try{return Tp(t,e,n)}finally{Ul=!1,(yr!==null||wr!==null)&&(xp(),kp())}}function Fi(t,e){var n=t.stateNode;if(n===null)return null;var r=ll(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Fa=!1;if(bt)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){Fa=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{Fa=!1}function qv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ei=!1,uo=null,co=!1,ja=null,Yv={onError:function(t){Ei=!0,uo=t}};function Xv(t,e,n,r,i,s,o,l,a){Ei=!1,uo=null,qv.apply(Yv,arguments)}function Jv(t,e,n,r,i,s,o,l,a){if(Xv.apply(this,arguments),Ei){if(Ei){var u=uo;Ei=!1,uo=null}else throw Error(k(198));co||(co=!0,ja=u)}}function Yn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bd(t){if(Yn(t)!==t)throw Error(k(188))}function Zv(t){var e=t.alternate;if(!e){if(e=Yn(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bd(i),t;if(s===r)return Bd(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function Pp(t){return t=Zv(t),t!==null?Ap(t):null}function Ap(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ap(t);if(e!==null)return e;t=t.sibling}return null}var Op=Ke.unstable_scheduleCallback,Vd=Ke.unstable_cancelCallback,ey=Ke.unstable_shouldYield,ty=Ke.unstable_requestPaint,ae=Ke.unstable_now,ny=Ke.unstable_getCurrentPriorityLevel,Yu=Ke.unstable_ImmediatePriority,Lp=Ke.unstable_UserBlockingPriority,ho=Ke.unstable_NormalPriority,ry=Ke.unstable_LowPriority,Dp=Ke.unstable_IdlePriority,rl=null,vt=null;function iy(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(rl,t,void 0,(t.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:ly,sy=Math.log,oy=Math.LN2;function ly(t){return t>>>=0,t===0?32:31-(sy(t)/oy|0)|0}var Ns=64,Rs=4194304;function _i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=_i(l):(s&=o,s!==0&&(r=_i(s)))}else o=n&~i,o!==0?r=_i(o):s!==0&&(r=_i(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ut(e),i=1<<n,r|=t[n],e&=~i;return r}function ay(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ut(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=ay(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ua(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bp(){var t=Ns;return Ns<<=1,!(Ns&4194240)&&(Ns=64),t}function zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ut(e),t[e]=n}function cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function Mp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fp,Ju,jp,Up,zp,za=!1,Ps=[],tn=null,nn=null,rn=null,ji=new Map,Ui=new Map,Kt=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,e){switch(t){case"focusin":case"focusout":tn=null;break;case"dragenter":case"dragleave":nn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(e.pointerId)}}function ri(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ds(e),e!==null&&Ju(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hy(t,e,n,r,i){switch(e){case"focusin":return tn=ri(tn,t,e,n,r,i),!0;case"dragenter":return nn=ri(nn,t,e,n,r,i),!0;case"mouseover":return rn=ri(rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ji.set(s,ri(ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ui.set(s,ri(Ui.get(s)||null,t,e,n,r,i)),!0}return!1}function Wp(t){var e=Pn(t.target);if(e!==null){var n=Yn(e);if(n!==null){if(e=n.tag,e===13){if(e=Rp(n),e!==null){t.blockedOn=e,zp(t.priority,function(){jp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ba=r,n.target.dispatchEvent(r),ba=null}else return e=ds(n),e!==null&&Ju(e),t.blockedOn=n,!1;e.shift()}return!0}function $d(t,e,n){Gs(t)&&n.delete(e)}function fy(){za=!1,tn!==null&&Gs(tn)&&(tn=null),nn!==null&&Gs(nn)&&(nn=null),rn!==null&&Gs(rn)&&(rn=null),ji.forEach($d),Ui.forEach($d)}function ii(t,e){t.blockedOn===e&&(t.blockedOn=null,za||(za=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,fy)))}function zi(t){function e(i){return ii(i,t)}if(0<Ps.length){ii(Ps[0],t);for(var n=1;n<Ps.length;n++){var r=Ps[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tn!==null&&ii(tn,t),nn!==null&&ii(nn,t),rn!==null&&ii(rn,t),ji.forEach(e),Ui.forEach(e),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Wp(n),n.blockedOn===null&&Kt.shift()}var Er=Bt.ReactCurrentBatchConfig,po=!0;function py(t,e,n,r){var i=$,s=Er.transition;Er.transition=null;try{$=1,Zu(t,e,n,r)}finally{$=i,Er.transition=s}}function my(t,e,n,r){var i=$,s=Er.transition;Er.transition=null;try{$=4,Zu(t,e,n,r)}finally{$=i,Er.transition=s}}function Zu(t,e,n,r){if(po){var i=Wa(t,e,n,r);if(i===null)Yl(t,e,r,mo,n),Hd(t,r);else if(hy(i,t,e,n,r))r.stopPropagation();else if(Hd(t,r),e&4&&-1<dy.indexOf(t)){for(;i!==null;){var s=ds(i);if(s!==null&&Fp(s),s=Wa(t,e,n,r),s===null&&Yl(t,e,r,mo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Yl(t,e,r,null,n)}}var mo=null;function Wa(t,e,n,r){if(mo=null,t=qu(r),t=Pn(t),t!==null)if(e=Yn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return mo=t,null}function Bp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ny()){case Yu:return 1;case Lp:return 4;case ho:case ry:return 16;case Dp:return 536870912;default:return 16}default:return 16}}var Jt=null,ec=null,Ks=null;function Vp(){if(Ks)return Ks;var t,e=ec,n=e.length,r,i="value"in Jt?Jt.value:Jt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ks=i.slice(t,1<r?1-r:void 0)}function Qs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function As(){return!0}function Gd(){return!1}function qe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?As:Gd,this.isPropagationStopped=Gd,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=As)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=As)},persist:function(){},isPersistent:As}),e}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=qe(Gr),cs=re({},Gr,{view:0,detail:0}),gy=qe(cs),Wl,Bl,si,il=re({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(Wl=t.screenX-si.screenX,Bl=t.screenY-si.screenY):Bl=Wl=0,si=t),Wl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),Kd=qe(il),_y=re({},il,{dataTransfer:0}),vy=qe(_y),yy=re({},cs,{relatedTarget:0}),Vl=qe(yy),wy=re({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ey=qe(wy),Sy=re({},Gr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cy=qe(Sy),Iy=re({},Gr,{data:0}),Qd=qe(Iy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ny(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=xy[t])?!!e[t]:!1}function nc(){return Ny}var Ry=re({},cs,{key:function(t){if(t.key){var e=ky[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ty[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nc,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=qe(Ry),Ay=re({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=qe(Ay),Oy=re({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nc}),Ly=qe(Oy),Dy=re({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=qe(Dy),My=re({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Fy=qe(My),jy=[9,13,27,32],rc=bt&&"CompositionEvent"in window,Si=null;bt&&"documentMode"in document&&(Si=document.documentMode);var Uy=bt&&"TextEvent"in window&&!Si,Hp=bt&&(!rc||Si&&8<Si&&11>=Si),Yd=" ",Xd=!1;function $p(t,e){switch(t){case"keyup":return jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lr=!1;function zy(t,e){switch(t){case"compositionend":return Gp(e);case"keypress":return e.which!==32?null:(Xd=!0,Yd);case"textInput":return t=e.data,t===Yd&&Xd?null:t;default:return null}}function Wy(t,e){if(lr)return t==="compositionend"||!rc&&$p(t,e)?(t=Vp(),Ks=ec=Jt=null,lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Hp&&e.locale!=="ko"?null:e.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!By[t.type]:e==="textarea"}function Kp(t,e,n,r){Ip(r),e=go(e,"onChange"),0<e.length&&(n=new tc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ci=null,Wi=null;function Vy(t){im(t,0)}function sl(t){var e=cr(t);if(_p(e))return t}function Hy(t,e){if(t==="change")return e}var Qp=!1;if(bt){var Hl;if(bt){var $l="oninput"in document;if(!$l){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),$l=typeof Zd.oninput=="function"}Hl=$l}else Hl=!1;Qp=Hl&&(!document.documentMode||9<document.documentMode)}function eh(){Ci&&(Ci.detachEvent("onpropertychange",qp),Wi=Ci=null)}function qp(t){if(t.propertyName==="value"&&sl(Wi)){var e=[];Kp(e,Wi,t,qu(t)),Np(Vy,e)}}function $y(t,e,n){t==="focusin"?(eh(),Ci=e,Wi=n,Ci.attachEvent("onpropertychange",qp)):t==="focusout"&&eh()}function Gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sl(Wi)}function Ky(t,e){if(t==="click")return sl(e)}function Qy(t,e){if(t==="input"||t==="change")return sl(e)}function qy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:qy;function Bi(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ca.call(e,i)||!ft(t[i],e[i]))return!1}return!0}function th(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nh(t,e){var n=th(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=th(n)}}function Yp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Xp(){for(var t=window,e=ao();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ao(t.document)}return e}function ic(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yy(t){var e=Xp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yp(n.ownerDocument.documentElement,n)){if(r!==null&&ic(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nh(n,s);var o=nh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Xy=bt&&"documentMode"in document&&11>=document.documentMode,ar=null,Ba=null,Ii=null,Va=!1;function rh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Va||ar==null||ar!==ao(r)||(r=ar,"selectionStart"in r&&ic(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ii&&Bi(Ii,r)||(Ii=r,r=go(Ba,"onSelect"),0<r.length&&(e=new tc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ar)))}function Os(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ur={animationend:Os("Animation","AnimationEnd"),animationiteration:Os("Animation","AnimationIteration"),animationstart:Os("Animation","AnimationStart"),transitionend:Os("Transition","TransitionEnd")},Gl={},Jp={};bt&&(Jp=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function ol(t){if(Gl[t])return Gl[t];if(!ur[t])return t;var e=ur[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jp)return Gl[t]=e[n];return t}var Zp=ol("animationend"),em=ol("animationiteration"),tm=ol("animationstart"),nm=ol("transitionend"),rm=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(t,e){rm.set(t,e),qn(e,[t])}for(var Kl=0;Kl<ih.length;Kl++){var Ql=ih[Kl],Jy=Ql.toLowerCase(),Zy=Ql[0].toUpperCase()+Ql.slice(1);vn(Jy,"on"+Zy)}vn(Zp,"onAnimationEnd");vn(em,"onAnimationIteration");vn(tm,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(nm,"onTransitionEnd");Pr("onMouseEnter",["mouseout","mouseover"]);Pr("onMouseLeave",["mouseout","mouseover"]);Pr("onPointerEnter",["pointerout","pointerover"]);Pr("onPointerLeave",["pointerout","pointerover"]);qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function sh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jv(r,e,void 0,t),t.currentTarget=null}function im(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;sh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;sh(i,l,u),s=a}}}if(co)throw t=ja,co=!1,ja=null,t}function X(t,e){var n=e[Qa];n===void 0&&(n=e[Qa]=new Set);var r=t+"__bubble";n.has(r)||(sm(e,t,2,!1),n.add(r))}function ql(t,e,n){var r=0;e&&(r|=4),sm(n,t,r,e)}var Ls="_reactListening"+Math.random().toString(36).slice(2);function Vi(t){if(!t[Ls]){t[Ls]=!0,hp.forEach(function(n){n!=="selectionchange"&&(e0.has(n)||ql(n,!1,t),ql(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ls]||(e[Ls]=!0,ql("selectionchange",!1,e))}}function sm(t,e,n,r){switch(Bp(e)){case 1:var i=py;break;case 4:i=my;break;default:i=Zu}n=i.bind(null,e,n,t),i=void 0,!Fa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Yl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Np(function(){var u=s,d=qu(n),c=[];e:{var h=rm.get(t);if(h!==void 0){var g=tc,v=t;switch(t){case"keypress":if(Qs(n)===0)break e;case"keydown":case"keyup":g=Py;break;case"focusin":v="focus",g=Vl;break;case"focusout":v="blur",g=Vl;break;case"beforeblur":case"afterblur":g=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=vy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Ly;break;case Zp:case em:case tm:g=Ey;break;case nm:g=by;break;case"scroll":g=gy;break;case"wheel":g=Fy;break;case"copy":case"cut":case"paste":g=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=qd}var w=(e&4)!==0,S=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,p;f!==null;){p=f;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,m!==null&&(y=Fi(f,m),y!=null&&w.push(Hi(f,y,p)))),S)break;f=f.return}0<w.length&&(h=new g(h,v,null,n,d),c.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==ba&&(v=n.relatedTarget||n.fromElement)&&(Pn(v)||v[Mt]))break e;if((g||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Pn(v):null,v!==null&&(S=Yn(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(w=Kd,y="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=qd,y="onPointerLeave",m="onPointerEnter",f="pointer"),S=g==null?h:cr(g),p=v==null?h:cr(v),h=new w(y,f+"leave",g,n,d),h.target=S,h.relatedTarget=p,y=null,Pn(d)===u&&(w=new w(m,f+"enter",v,n,d),w.target=p,w.relatedTarget=S,y=w),S=y,g&&v)t:{for(w=g,m=v,f=0,p=w;p;p=rr(p))f++;for(p=0,y=m;y;y=rr(y))p++;for(;0<f-p;)w=rr(w),f--;for(;0<p-f;)m=rr(m),p--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=rr(w),m=rr(m)}w=null}else w=null;g!==null&&oh(c,h,g,w,!1),v!==null&&S!==null&&oh(c,S,v,w,!0)}}e:{if(h=u?cr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var C=Hy;else if(Jd(h))if(Qp)C=Qy;else{C=Gy;var N=$y}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ky);if(C&&(C=C(t,u))){Kp(c,C,n,d);break e}N&&N(t,h,u),t==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Pa(h,"number",h.value)}switch(N=u?cr(u):window,t){case"focusin":(Jd(N)||N.contentEditable==="true")&&(ar=N,Ba=u,Ii=null);break;case"focusout":Ii=Ba=ar=null;break;case"mousedown":Va=!0;break;case"contextmenu":case"mouseup":case"dragend":Va=!1,rh(c,n,d);break;case"selectionchange":if(Xy)break;case"keydown":case"keyup":rh(c,n,d)}var T;if(rc)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else lr?$p(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Hp&&n.locale!=="ko"&&(lr||E!=="onCompositionStart"?E==="onCompositionEnd"&&lr&&(T=Vp()):(Jt=d,ec="value"in Jt?Jt.value:Jt.textContent,lr=!0)),N=go(u,E),0<N.length&&(E=new Qd(E,t,null,n,d),c.push({event:E,listeners:N}),T?E.data=T:(T=Gp(n),T!==null&&(E.data=T)))),(T=Uy?zy(t,n):Wy(t,n))&&(u=go(u,"onBeforeInput"),0<u.length&&(d=new Qd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}im(c,e)})}function Hi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function go(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fi(t,n),s!=null&&r.unshift(Hi(t,s,i)),s=Fi(t,e),s!=null&&r.push(Hi(t,s,i))),t=t.return}return r}function rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Fi(n,s),a!=null&&o.unshift(Hi(n,a,l))):i||(a=Fi(n,s),a!=null&&o.push(Hi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var t0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function lh(t){return(typeof t=="string"?t:""+t).replace(t0,`
`).replace(n0,"")}function Ds(t,e,n){if(e=lh(e),lh(t)!==e&&n)throw Error(k(425))}function _o(){}var Ha=null,$a=null;function Ga(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,ah=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof ah<"u"?function(t){return ah.resolve(null).then(t).catch(s0)}:Ka;function s0(t){setTimeout(function(){throw t})}function Xl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(e)}function sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),_t="__reactFiber$"+Kr,$i="__reactProps$"+Kr,Mt="__reactContainer$"+Kr,Qa="__reactEvents$"+Kr,o0="__reactListeners$"+Kr,l0="__reactHandles$"+Kr;function Pn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uh(t);t!==null;){if(n=t[_t])return n;t=uh(t)}return e}t=n,n=t.parentNode}return null}function ds(t){return t=t[_t]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function ll(t){return t[$i]||null}var qa=[],dr=-1;function yn(t){return{current:t}}function J(t){0>dr||(t.current=qa[dr],qa[dr]=null,dr--)}function Y(t,e){dr++,qa[dr]=t.current,t.current=e}var mn={},xe=yn(mn),je=yn(!1),jn=mn;function Ar(t,e){var n=t.type.contextTypes;if(!n)return mn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function vo(){J(je),J(xe)}function ch(t,e,n){if(xe.current!==mn)throw Error(k(168));Y(xe,e),Y(je,n)}function om(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,$v(t)||"Unknown",i));return re({},n,r)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mn,jn=xe.current,Y(xe,t),Y(je,je.current),!0}function dh(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=om(t,e,jn),r.__reactInternalMemoizedMergedChildContext=t,J(je),J(xe),Y(xe,t)):J(je),Y(je,n)}var It=null,al=!1,Jl=!1;function lm(t){It===null?It=[t]:It.push(t)}function a0(t){al=!0,lm(t)}function wn(){if(!Jl&&It!==null){Jl=!0;var t=0,e=$;try{var n=It;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,al=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Op(Yu,wn),i}finally{$=e,Jl=!1}}return null}var hr=[],fr=0,wo=null,Eo=0,Ye=[],Xe=0,Un=null,Tt=1,xt="";function kn(t,e){hr[fr++]=Eo,hr[fr++]=wo,wo=t,Eo=e}function am(t,e,n){Ye[Xe++]=Tt,Ye[Xe++]=xt,Ye[Xe++]=Un,Un=t;var r=Tt;t=xt;var i=32-ut(r)-1;r&=~(1<<i),n+=1;var s=32-ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tt=1<<32-ut(e)+i|n<<i|r,xt=s+t}else Tt=1<<s|n<<i|r,xt=t}function sc(t){t.return!==null&&(kn(t,1),am(t,1,0))}function oc(t){for(;t===wo;)wo=hr[--fr],hr[fr]=null,Eo=hr[--fr],hr[fr]=null;for(;t===Un;)Un=Ye[--Xe],Ye[Xe]=null,xt=Ye[--Xe],Ye[Xe]=null,Tt=Ye[--Xe],Ye[Xe]=null}var Ge=null,$e=null,Z=!1,ot=null;function um(t,e){var n=Je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ge=t,$e=sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ge=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:Tt,overflow:xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ge=t,$e=null,!0):!1;default:return!1}}function Ya(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xa(t){if(Z){var e=$e;if(e){var n=e;if(!hh(t,e)){if(Ya(t))throw Error(k(418));e=sn(n.nextSibling);var r=Ge;e&&hh(t,e)?um(r,n):(t.flags=t.flags&-4097|2,Z=!1,Ge=t)}}else{if(Ya(t))throw Error(k(418));t.flags=t.flags&-4097|2,Z=!1,Ge=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ge=t}function bs(t){if(t!==Ge)return!1;if(!Z)return fh(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ga(t.type,t.memoizedProps)),e&&(e=$e)){if(Ya(t))throw cm(),Error(k(418));for(;e;)um(t,e),e=sn(e.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ge?sn(t.stateNode.nextSibling):null;return!0}function cm(){for(var t=$e;t;)t=sn(t.nextSibling)}function Or(){$e=Ge=null,Z=!1}function lc(t){ot===null?ot=[t]:ot.push(t)}var u0=Bt.ReactCurrentBatchConfig;function oi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function Ms(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ph(t){var e=t._init;return e(t._payload)}function dm(t){function e(m,f){if(t){var p=m.deletions;p===null?(m.deletions=[f],m.flags|=16):p.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=un(m,f),m.index=0,m.sibling=null,m}function s(m,f,p){return m.index=p,t?(p=m.alternate,p!==null?(p=p.index,p<f?(m.flags|=2,f):p):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,p,y){return f===null||f.tag!==6?(f=sa(p,m.mode,y),f.return=m,f):(f=i(f,p),f.return=m,f)}function a(m,f,p,y){var C=p.type;return C===or?d(m,f,p.props.children,y,p.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$t&&ph(C)===f.type)?(y=i(f,p.props),y.ref=oi(m,f,p),y.return=m,y):(y=to(p.type,p.key,p.props,null,m.mode,y),y.ref=oi(m,f,p),y.return=m,y)}function u(m,f,p,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=oa(p,m.mode,y),f.return=m,f):(f=i(f,p.children||[]),f.return=m,f)}function d(m,f,p,y,C){return f===null||f.tag!==7?(f=Mn(p,m.mode,y,C),f.return=m,f):(f=i(f,p),f.return=m,f)}function c(m,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sa(""+f,m.mode,p),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ks:return p=to(f.type,f.key,f.props,null,m.mode,p),p.ref=oi(m,null,f),p.return=m,p;case sr:return f=oa(f,m.mode,p),f.return=m,f;case $t:var y=f._init;return c(m,y(f._payload),p)}if(gi(f)||ti(f))return f=Mn(f,m.mode,p,null),f.return=m,f;Ms(m,f)}return null}function h(m,f,p,y){var C=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:l(m,f,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ks:return p.key===C?a(m,f,p,y):null;case sr:return p.key===C?u(m,f,p,y):null;case $t:return C=p._init,h(m,f,C(p._payload),y)}if(gi(p)||ti(p))return C!==null?null:d(m,f,p,y,null);Ms(m,p)}return null}function g(m,f,p,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(p)||null,l(f,m,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ks:return m=m.get(y.key===null?p:y.key)||null,a(f,m,y,C);case sr:return m=m.get(y.key===null?p:y.key)||null,u(f,m,y,C);case $t:var N=y._init;return g(m,f,p,N(y._payload),C)}if(gi(y)||ti(y))return m=m.get(p)||null,d(f,m,y,C,null);Ms(f,y)}return null}function v(m,f,p,y){for(var C=null,N=null,T=f,E=f=0,O=null;T!==null&&E<p.length;E++){T.index>E?(O=T,T=null):O=T.sibling;var R=h(m,T,p[E],y);if(R===null){T===null&&(T=O);break}t&&T&&R.alternate===null&&e(m,T),f=s(R,f,E),N===null?C=R:N.sibling=R,N=R,T=O}if(E===p.length)return n(m,T),Z&&kn(m,E),C;if(T===null){for(;E<p.length;E++)T=c(m,p[E],y),T!==null&&(f=s(T,f,E),N===null?C=T:N.sibling=T,N=T);return Z&&kn(m,E),C}for(T=r(m,T);E<p.length;E++)O=g(T,m,E,p[E],y),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?E:O.key),f=s(O,f,E),N===null?C=O:N.sibling=O,N=O);return t&&T.forEach(function(B){return e(m,B)}),Z&&kn(m,E),C}function w(m,f,p,y){var C=ti(p);if(typeof C!="function")throw Error(k(150));if(p=C.call(p),p==null)throw Error(k(151));for(var N=C=null,T=f,E=f=0,O=null,R=p.next();T!==null&&!R.done;E++,R=p.next()){T.index>E?(O=T,T=null):O=T.sibling;var B=h(m,T,R.value,y);if(B===null){T===null&&(T=O);break}t&&T&&B.alternate===null&&e(m,T),f=s(B,f,E),N===null?C=B:N.sibling=B,N=B,T=O}if(R.done)return n(m,T),Z&&kn(m,E),C;if(T===null){for(;!R.done;E++,R=p.next())R=c(m,R.value,y),R!==null&&(f=s(R,f,E),N===null?C=R:N.sibling=R,N=R);return Z&&kn(m,E),C}for(T=r(m,T);!R.done;E++,R=p.next())R=g(T,m,E,R.value,y),R!==null&&(t&&R.alternate!==null&&T.delete(R.key===null?E:R.key),f=s(R,f,E),N===null?C=R:N.sibling=R,N=R);return t&&T.forEach(function(ee){return e(m,ee)}),Z&&kn(m,E),C}function S(m,f,p,y){if(typeof p=="object"&&p!==null&&p.type===or&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ks:e:{for(var C=p.key,N=f;N!==null;){if(N.key===C){if(C=p.type,C===or){if(N.tag===7){n(m,N.sibling),f=i(N,p.props.children),f.return=m,m=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===$t&&ph(C)===N.type){n(m,N.sibling),f=i(N,p.props),f.ref=oi(m,N,p),f.return=m,m=f;break e}n(m,N);break}else e(m,N);N=N.sibling}p.type===or?(f=Mn(p.props.children,m.mode,y,p.key),f.return=m,m=f):(y=to(p.type,p.key,p.props,null,m.mode,y),y.ref=oi(m,f,p),y.return=m,m=y)}return o(m);case sr:e:{for(N=p.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(m,f.sibling),f=i(f,p.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=oa(p,m.mode,y),f.return=m,m=f}return o(m);case $t:return N=p._init,S(m,f,N(p._payload),y)}if(gi(p))return v(m,f,p,y);if(ti(p))return w(m,f,p,y);Ms(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,p),f.return=m,m=f):(n(m,f),f=sa(p,m.mode,y),f.return=m,m=f),o(m)):n(m,f)}return S}var Lr=dm(!0),hm=dm(!1),So=yn(null),Co=null,pr=null,ac=null;function uc(){ac=pr=Co=null}function cc(t){var e=So.current;J(So),t._currentValue=e}function Ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Sr(t,e){Co=t,ac=pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(be=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(ac!==t)if(t={context:t,memoizedValue:e,next:null},pr===null){if(Co===null)throw Error(k(308));pr=t,Co.dependencies={lanes:0,firstContext:t}}else pr=pr.next=t;return e}var An=null;function dc(t){An===null?An=[t]:An.push(t)}function fm(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ft(t,r)}function Ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gt=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function on(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ft(t,n)}return i=r.interleaved,i===null?(e.next=e,dc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ft(t,n)}function qs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xu(t,n)}}function mh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Io(t,e,n,r){var i=t.updateQueue;Gt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,g=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(h=e,g=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){c=v.call(g,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(g,c,h):v,h==null)break e;c=re({},c,h);break e;case 2:Gt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=c}}function gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var hs={},yt=yn(hs),Gi=yn(hs),Ki=yn(hs);function On(t){if(t===hs)throw Error(k(174));return t}function fc(t,e){switch(Y(Ki,e),Y(Gi,t),Y(yt,hs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oa(e,t)}J(yt),Y(yt,e)}function Dr(){J(yt),J(Gi),J(Ki)}function mm(t){On(Ki.current);var e=On(yt.current),n=Oa(e,t.type);e!==n&&(Y(Gi,t),Y(yt,n))}function pc(t){Gi.current===t&&(J(yt),J(Gi))}var te=yn(0);function ko(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zl=[];function mc(){for(var t=0;t<Zl.length;t++)Zl[t]._workInProgressVersionPrimary=null;Zl.length=0}var Ys=Bt.ReactCurrentDispatcher,ea=Bt.ReactCurrentBatchConfig,zn=0,ne=null,de=null,pe=null,To=!1,ki=!1,Qi=0,c0=0;function Ie(){throw Error(k(321))}function gc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function _c(t,e,n,r,i,s){if(zn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ys.current=t===null||t.memoizedState===null?p0:m0,t=n(r,i),ki){s=0;do{if(ki=!1,Qi=0,25<=s)throw Error(k(301));s+=1,pe=de=null,e.updateQueue=null,Ys.current=g0,t=n(r,i)}while(ki)}if(Ys.current=xo,e=de!==null&&de.next!==null,zn=0,pe=de=ne=null,To=!1,e)throw Error(k(300));return t}function vc(){var t=Qi!==0;return Qi=0,t}function gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=t:pe=pe.next=t,pe}function nt(){if(de===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=de.next;var e=pe===null?ne.memoizedState:pe.next;if(e!==null)pe=e,de=t;else{if(t===null)throw Error(k(310));de=t,t={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},pe===null?ne.memoizedState=pe=t:pe=pe.next=t}return pe}function qi(t,e){return typeof e=="function"?e(t):e}function ta(t){var e=nt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=de,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((zn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,ne.lanes|=d,Wn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ft(r,e.memoizedState)||(be=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function na(t){var e=nt(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(be=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gm(){}function _m(t,e){var n=ne,r=nt(),i=e(),s=!ft(r.memoizedState,i);if(s&&(r.memoizedState=i,be=!0),r=r.queue,yc(wm.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Yi(9,ym.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(k(349));zn&30||vm(n,e,i)}return i}function vm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ym(t,e,n,r){e.value=n,e.getSnapshot=r,Em(e)&&Sm(t)}function wm(t,e,n){return n(function(){Em(e)&&Sm(t)})}function Em(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ft(t,n)}catch{return!0}}function Sm(t){var e=Ft(t,1);e!==null&&ct(e,t,1,-1)}function _h(t){var e=gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},e.queue=t,t=t.dispatch=f0.bind(null,ne,t),[e.memoizedState,t]}function Yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cm(){return nt().memoizedState}function Xs(t,e,n,r){var i=gt();ne.flags|=t,i.memoizedState=Yi(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(de!==null){var o=de.memoizedState;if(s=o.destroy,r!==null&&gc(r,o.deps)){i.memoizedState=Yi(e,n,s,r);return}}ne.flags|=t,i.memoizedState=Yi(1|e,n,s,r)}function vh(t,e){return Xs(8390656,8,t,e)}function yc(t,e){return ul(2048,8,t,e)}function Im(t,e){return ul(4,2,t,e)}function km(t,e){return ul(4,4,t,e)}function Tm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xm(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,Tm.bind(null,e,t),n)}function wc(){}function Nm(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rm(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Pm(t,e,n){return zn&21?(ft(n,e)||(n=bp(),ne.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,be=!0),t.memoizedState=n)}function d0(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=ea.transition;ea.transition={};try{t(!1),e()}finally{$=n,ea.transition=r}}function Am(){return nt().memoizedState}function h0(t,e,n){var r=an(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Om(t))Lm(e,n);else if(n=fm(t,e,n,r),n!==null){var i=Re();ct(n,t,r,i),Dm(n,e,r)}}function f0(t,e,n){var r=an(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Om(t))Lm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var a=e.interleaved;a===null?(i.next=i,dc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=fm(t,e,i,r),n!==null&&(i=Re(),ct(n,t,r,i),Dm(n,e,r))}}function Om(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Lm(t,e){ki=To=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xu(t,n)}}var xo={readContext:tt,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},p0={readContext:tt,useCallback:function(t,e){return gt().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:vh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xs(4194308,4,Tm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xs(4,2,t,e)},useMemo:function(t,e){var n=gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=h0.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=gt();return t={current:t},e.memoizedState=t},useState:_h,useDebugValue:wc,useDeferredValue:function(t){return gt().memoizedState=t},useTransition:function(){var t=_h(!1),e=t[0];return t=d0.bind(null,t[1]),gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=gt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),ve===null)throw Error(k(349));zn&30||vm(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vh(wm.bind(null,r,s,t),[t]),r.flags|=2048,Yi(9,ym.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=gt(),e=ve.identifierPrefix;if(Z){var n=xt,r=Tt;n=(r&~(1<<32-ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m0={readContext:tt,useCallback:Nm,useContext:tt,useEffect:yc,useImperativeHandle:xm,useInsertionEffect:Im,useLayoutEffect:km,useMemo:Rm,useReducer:ta,useRef:Cm,useState:function(){return ta(qi)},useDebugValue:wc,useDeferredValue:function(t){var e=nt();return Pm(e,de.memoizedState,t)},useTransition:function(){var t=ta(qi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:gm,useSyncExternalStore:_m,useId:Am,unstable_isNewReconciler:!1},g0={readContext:tt,useCallback:Nm,useContext:tt,useEffect:yc,useImperativeHandle:xm,useInsertionEffect:Im,useLayoutEffect:km,useMemo:Rm,useReducer:na,useRef:Cm,useState:function(){return na(qi)},useDebugValue:wc,useDeferredValue:function(t){var e=nt();return de===null?e.memoizedState=t:Pm(e,de.memoizedState,t)},useTransition:function(){var t=na(qi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:gm,useSyncExternalStore:_m,useId:Am,unstable_isNewReconciler:!1};function it(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Za(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cl={isMounted:function(t){return(t=t._reactInternals)?Yn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=an(t),s=Lt(r,i);s.payload=e,n!=null&&(s.callback=n),e=on(t,s,i),e!==null&&(ct(e,t,i,r),qs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=an(t),s=Lt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=on(t,s,i),e!==null&&(ct(e,t,i,r),qs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=an(t),i=Lt(n,r);i.tag=2,e!=null&&(i.callback=e),e=on(t,i,r),e!==null&&(ct(e,t,r,n),qs(e,t,r))}};function yh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,s):!0}function bm(t,e,n){var r=!1,i=mn,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=Ue(e)?jn:xe.current,r=e.contextTypes,s=(r=r!=null)?Ar(t,i):mn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&cl.enqueueReplaceState(e,e.state,null)}function eu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=Ue(e)?jn:xe.current,i.context=Ar(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Za(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&cl.enqueueReplaceState(i,i.state,null),Io(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function br(t,e){try{var n="",r=e;do n+=Hv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ra(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function Mm(t,e,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ro||(Ro=!0,du=r),tu(t,e)},n}function Fm(t,e,n){n=Lt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){tu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tu(t,e),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=A0.bind(null,t,e,n),e.then(t,t))}function Sh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ch(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lt(-1,1),e.tag=2,on(n,e,1))),n.lanes|=1),t)}var v0=Bt.ReactCurrentOwner,be=!1;function Ne(t,e,n,r){e.child=t===null?hm(e,null,n,r):Lr(e,t.child,n,r)}function Ih(t,e,n,r,i){n=n.render;var s=e.ref;return Sr(e,i),r=_c(t,e,n,r,s,i),n=vc(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(Z&&n&&sc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function kh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jm(t,e,s,r,i)):(t=to(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=un(s,r),t.ref=e.ref,t.return=e,e.child=t}function jm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bi(s,r)&&t.ref===e.ref)if(be=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(be=!0);else return e.lanes=t.lanes,jt(t,e,i)}return nu(t,e,n,r,i)}function Um(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(gr,He),He|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(gr,He),He|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(gr,He),He|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(gr,He),He|=r;return Ne(t,e,i,n),e.child}function zm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nu(t,e,n,r,i){var s=Ue(n)?jn:xe.current;return s=Ar(e,s),Sr(e,i),n=_c(t,e,n,r,s,i),r=vc(),t!==null&&!be?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(Z&&r&&sc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function Th(t,e,n,r,i){if(Ue(n)){var s=!0;yo(e)}else s=!1;if(Sr(e,i),e.stateNode===null)Js(t,e),bm(e,n,r),eu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ue(n)?jn:xe.current,u=Ar(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&wh(e,o,r,u),Gt=!1;var h=e.memoizedState;o.state=h,Io(e,r,o,i),a=e.memoizedState,l!==r||h!==a||je.current||Gt?(typeof d=="function"&&(Za(e,n,d,r),a=e.memoizedState),(l=Gt||yh(e,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pm(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:it(e.type,l),o.props=u,c=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Ue(n)?jn:xe.current,a=Ar(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&wh(e,o,r,a),Gt=!1,h=e.memoizedState,o.state=h,Io(e,r,o,i);var v=e.memoizedState;l!==c||h!==v||je.current||Gt?(typeof g=="function"&&(Za(e,n,g,r),v=e.memoizedState),(u=Gt||yh(e,n,u,r,h,v,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ru(t,e,n,r,s,i)}function ru(t,e,n,r,i,s){zm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dh(e,n,!1),jt(t,e,s);r=e.stateNode,v0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lr(e,t.child,null,s),e.child=Lr(e,null,l,s)):Ne(t,e,l,s),e.memoizedState=r.state,i&&dh(e,n,!0),e.child}function Wm(t){var e=t.stateNode;e.pendingContext?ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ch(t,e.context,!1),fc(t,e.containerInfo)}function xh(t,e,n,r,i){return Or(),lc(i),e.flags|=256,Ne(t,e,n,r),e.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function su(t){return{baseLanes:t,cachePool:null,transitions:null}}function Bm(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(te,i&1),t===null)return Xa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fl(o,r,0,null),t=Mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=su(n),e.memoizedState=iu,t):Ec(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return y0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=un(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=un(l,s):(s=Mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?su(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=iu,r}return s=t.child,t=s.sibling,r=un(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ec(t,e){return e=fl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fs(t,e,n,r){return r!==null&&lc(r),Lr(e,t.child,null,n),t=Ec(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ra(Error(k(422))),Fs(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=fl({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Lr(e,t.child,null,o),e.child.memoizedState=su(o),e.memoizedState=iu,s);if(!(e.mode&1))return Fs(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(k(419)),r=ra(s,r,void 0),Fs(t,e,o,r)}if(l=(o&t.childLanes)!==0,be||l){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(t,i),ct(r,t,i,-1))}return xc(),r=ra(Error(k(421))),Fs(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=O0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=sn(i.nextSibling),Ge=e,Z=!0,ot=null,t!==null&&(Ye[Xe++]=Tt,Ye[Xe++]=xt,Ye[Xe++]=Un,Tt=t.id,xt=t.overflow,Un=e),e=Ec(e,r.children),e.flags|=4096,e)}function Nh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ja(t.return,e,n)}function ia(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Vm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Nh(t,n,e);else if(t.tag===19)Nh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ko(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ia(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ko(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ia(e,!0,n,null,s);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Js(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=un(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=un(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function w0(t,e,n){switch(e.tag){case 3:Wm(e),Or();break;case 5:mm(e);break;case 1:Ue(e.type)&&yo(e);break;case 4:fc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(So,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?Bm(t,e,n):(Y(te,te.current&1),t=jt(t,e,n),t!==null?t.sibling:null);Y(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Um(t,e,n)}return jt(t,e,n)}var Hm,ou,$m,Gm;Hm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ou=function(){};$m=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,On(yt.current);var s=null;switch(n){case"input":i=Na(t,i),r=Na(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Aa(t,i),r=Aa(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_o)}La(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&X("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gm=function(t,e,n,r){n!==r&&(e.flags|=4)};function li(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function E0(t,e,n){var r=e.pendingProps;switch(oc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return Ue(e.type)&&vo(),ke(e),null;case 3:return r=e.stateNode,Dr(),J(je),J(xe),mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(pu(ot),ot=null))),ou(t,e),ke(e),null;case 5:pc(e);var i=On(Ki.current);if(n=e.type,t!==null&&e.stateNode!=null)$m(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return ke(e),null}if(t=On(yt.current),bs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[$i]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<vi.length;i++)X(vi[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Fd(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":Ud(r,s),X("invalid",r)}La(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ds(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ds(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Ts(r),jd(r,s,!0);break;case"textarea":Ts(r),zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_o)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[$i]=r,Hm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Da(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<vi.length;i++)X(vi[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Fd(t,r),i=Na(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",t);break;case"textarea":Ud(t,r),i=Aa(t,r),X("invalid",t);break;default:i=r}La(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Cp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ep(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mi(t,a):typeof a=="number"&&Mi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&X("scroll",t):a!=null&&$u(t,s,a,o))}switch(n){case"input":Ts(t),jd(t,r,!1);break;case"textarea":Ts(t),zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vr(t,!!r.multiple,s,!1):r.defaultValue!=null&&vr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_o)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ke(e),null;case 6:if(t&&e.stateNode!=null)Gm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=On(Ki.current),On(yt.current),bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=Ge,t!==null))switch(t.tag){case 3:Ds(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ds(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return ke(e),null;case 13:if(J(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&$e!==null&&e.mode&1&&!(e.flags&128))cm(),Or(),e.flags|=98560,s=!1;else if(s=bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[_t]=e}else Or(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),s=!1}else ot!==null&&(pu(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?he===0&&(he=3):xc())),e.updateQueue!==null&&(e.flags|=4),ke(e),null);case 4:return Dr(),ou(t,e),t===null&&Vi(e.stateNode.containerInfo),ke(e),null;case 10:return cc(e.type._context),ke(e),null;case 17:return Ue(e.type)&&vo(),ke(e),null;case 19:if(J(te),s=e.memoizedState,s===null)return ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)li(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ko(t),o!==null){for(e.flags|=128,li(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>Mr&&(e.flags|=128,r=!0,li(s,!1),e.lanes=4194304)}else{if(!r)if(t=ko(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return ke(e),null}else 2*ae()-s.renderingStartTime>Mr&&n!==1073741824&&(e.flags|=128,r=!0,li(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=te.current,Y(te,r?n&1|2:n&1),e):(ke(e),null);case 22:case 23:return Tc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?He&1073741824&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function S0(t,e){switch(oc(e),e.tag){case 1:return Ue(e.type)&&vo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Dr(),J(je),J(xe),mc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pc(e),null;case 13:if(J(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));Or()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(te),null;case 4:return Dr(),null;case 10:return cc(e.type._context),null;case 22:case 23:return Tc(),null;case 24:return null;default:return null}}var js=!1,Te=!1,C0=typeof WeakSet=="function"?WeakSet:Set,A=null;function mr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function lu(t,e,n){try{n()}catch(r){se(t,e,r)}}var Rh=!1;function I0(t,e){if(Ha=po,t=Xp(),ic(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,h=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)h=c,c=g;for(;;){if(c===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:t,selectionRange:n},po=!1,A=e;A!==null;)if(e=A,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,A=t;else for(;A!==null;){e=A;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:it(e.type,w),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(y){se(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,A=t;break}A=e.return}return v=Rh,Rh=!1,v}function Ti(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&lu(e,n,s)}i=i.next}while(i!==r)}}function dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Km(t){var e=t.alternate;e!==null&&(t.alternate=null,Km(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[$i],delete e[Qa],delete e[o0],delete e[l0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qm(t){return t.tag===5||t.tag===3||t.tag===4}function Ph(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_o));else if(r!==4&&(t=t.child,t!==null))for(uu(t,e,n),t=t.sibling;t!==null;)uu(t,e,n),t=t.sibling}function cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cu(t,e,n),t=t.sibling;t!==null;)cu(t,e,n),t=t.sibling}var ye=null,st=!1;function Vt(t,e,n){for(n=n.child;n!==null;)qm(t,e,n),n=n.sibling}function qm(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(rl,n)}catch{}switch(n.tag){case 5:Te||mr(n,e);case 6:var r=ye,i=st;ye=null,Vt(t,e,n),ye=r,st=i,ye!==null&&(st?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(t=ye,n=n.stateNode,t.nodeType===8?Xl(t.parentNode,n):t.nodeType===1&&Xl(t,n),zi(t)):Xl(ye,n.stateNode));break;case 4:r=ye,i=st,ye=n.stateNode.containerInfo,st=!0,Vt(t,e,n),ye=r,st=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lu(n,e,o),i=i.next}while(i!==r)}Vt(t,e,n);break;case 1:if(!Te&&(mr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,e,l)}Vt(t,e,n);break;case 21:Vt(t,e,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Vt(t,e,n),Te=r):Vt(t,e,n);break;default:Vt(t,e,n)}}function Ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new C0),e.forEach(function(r){var i=L0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,st=!1;break e;case 3:ye=l.stateNode.containerInfo,st=!0;break e;case 4:ye=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(ye===null)throw Error(k(160));qm(s,o,i),ye=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ym(e,t),e=e.sibling}function Ym(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),mt(t),r&4){try{Ti(3,t,t.return),dl(3,t)}catch(w){se(t,t.return,w)}try{Ti(5,t,t.return)}catch(w){se(t,t.return,w)}}break;case 1:rt(e,t),mt(t),r&512&&n!==null&&mr(n,n.return);break;case 5:if(rt(e,t),mt(t),r&512&&n!==null&&mr(n,n.return),t.flags&32){var i=t.stateNode;try{Mi(i,"")}catch(w){se(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&vp(i,s),Da(l,o);var u=Da(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Cp(i,c):d==="dangerouslySetInnerHTML"?Ep(i,c):d==="children"?Mi(i,c):$u(i,d,c,u)}switch(l){case"input":Ra(i,s);break;case"textarea":yp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?vr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?vr(i,!!s.multiple,s.defaultValue,!0):vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[$i]=s}catch(w){se(t,t.return,w)}}break;case 6:if(rt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){se(t,t.return,w)}}break;case 3:if(rt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(e.containerInfo)}catch(w){se(t,t.return,w)}break;case 4:rt(e,t),mt(t);break;case 13:rt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=ae())),r&4&&Ah(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Te=(u=Te)||d,rt(e,t),Te=u):rt(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(A=t,d=t.child;d!==null;){for(c=A=d;A!==null;){switch(h=A,g=h.child,h.tag){case 0:case 11:case 14:case 15:Ti(4,h,h.return);break;case 1:mr(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){se(r,n,w)}}break;case 5:mr(h,h.return);break;case 22:if(h.memoizedState!==null){Lh(c);continue}}g!==null?(g.return=h,A=g):Lh(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Sp("display",o))}catch(w){se(t,t.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){se(t,t.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:rt(e,t),mt(t),r&4&&Ah(t);break;case 21:break;default:rt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qm(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mi(i,""),r.flags&=-33);var s=Ph(t);cu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ph(t);uu(t,l,o);break;default:throw Error(k(161))}}catch(a){se(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function k0(t,e,n){A=t,Xm(t)}function Xm(t,e,n){for(var r=(t.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||js;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Te;l=js;var u=Te;if(js=o,(Te=a)&&!u)for(A=i;A!==null;)o=A,a=o.child,o.tag===22&&o.memoizedState!==null?Dh(i):a!==null?(a.return=o,A=a):Dh(i);for(;s!==null;)A=s,Xm(s),s=s.sibling;A=i,js=l,Te=u}Oh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):Oh(t)}}function Oh(t){for(;A!==null;){var e=A;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Te||dl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&zi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Te||e.flags&512&&au(e)}catch(h){se(e,e.return,h)}}if(e===t){A=null;break}if(n=e.sibling,n!==null){n.return=e.return,A=n;break}A=e.return}}function Lh(t){for(;A!==null;){var e=A;if(e===t){A=null;break}var n=e.sibling;if(n!==null){n.return=e.return,A=n;break}A=e.return}}function Dh(t){for(;A!==null;){var e=A;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dl(4,e)}catch(a){se(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){se(e,i,a)}}var s=e.return;try{au(e)}catch(a){se(e,s,a)}break;case 5:var o=e.return;try{au(e)}catch(a){se(e,o,a)}}}catch(a){se(e,e.return,a)}if(e===t){A=null;break}var l=e.sibling;if(l!==null){l.return=e.return,A=l;break}A=e.return}}var T0=Math.ceil,No=Bt.ReactCurrentDispatcher,Sc=Bt.ReactCurrentOwner,et=Bt.ReactCurrentBatchConfig,W=0,ve=null,ue=null,Ee=0,He=0,gr=yn(0),he=0,Xi=null,Wn=0,hl=0,Cc=0,xi=null,De=null,Ic=0,Mr=1/0,Ct=null,Ro=!1,du=null,ln=null,Us=!1,Zt=null,Po=0,Ni=0,hu=null,Zs=-1,eo=0;function Re(){return W&6?ae():Zs!==-1?Zs:Zs=ae()}function an(t){return t.mode&1?W&2&&Ee!==0?Ee&-Ee:u0.transition!==null?(eo===0&&(eo=bp()),eo):(t=$,t!==0||(t=window.event,t=t===void 0?16:Bp(t.type)),t):1}function ct(t,e,n,r){if(50<Ni)throw Ni=0,hu=null,Error(k(185));us(t,n,r),(!(W&2)||t!==ve)&&(t===ve&&(!(W&2)&&(hl|=n),he===4&&Qt(t,Ee)),ze(t,r),n===1&&W===0&&!(e.mode&1)&&(Mr=ae()+500,al&&wn()))}function ze(t,e){var n=t.callbackNode;uy(t,e);var r=fo(t,t===ve?Ee:0);if(r===0)n!==null&&Vd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vd(n),e===1)t.tag===0?a0(bh.bind(null,t)):lm(bh.bind(null,t)),i0(function(){!(W&6)&&wn()}),n=null;else{switch(Mp(r)){case 1:n=Yu;break;case 4:n=Lp;break;case 16:n=ho;break;case 536870912:n=Dp;break;default:n=ho}n=sg(n,Jm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jm(t,e){if(Zs=-1,eo=0,W&6)throw Error(k(327));var n=t.callbackNode;if(Cr()&&t.callbackNode!==n)return null;var r=fo(t,t===ve?Ee:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ao(t,r);else{e=r;var i=W;W|=2;var s=eg();(ve!==t||Ee!==e)&&(Ct=null,Mr=ae()+500,bn(t,e));do try{R0();break}catch(l){Zm(t,l)}while(!0);uc(),No.current=s,W=i,ue!==null?e=0:(ve=null,Ee=0,e=he)}if(e!==0){if(e===2&&(i=Ua(t),i!==0&&(r=i,e=fu(t,i))),e===1)throw n=Xi,bn(t,0),Qt(t,r),ze(t,ae()),n;if(e===6)Qt(t,r);else{if(i=t.current.alternate,!(r&30)&&!x0(i)&&(e=Ao(t,r),e===2&&(s=Ua(t),s!==0&&(r=s,e=fu(t,s))),e===1))throw n=Xi,bn(t,0),Qt(t,r),ze(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:Tn(t,De,Ct);break;case 3:if(Qt(t,r),(r&130023424)===r&&(e=Ic+500-ae(),10<e)){if(fo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ka(Tn.bind(null,t,De,Ct),e);break}Tn(t,De,Ct);break;case 4:if(Qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T0(r/1960))-r,10<r){t.timeoutHandle=Ka(Tn.bind(null,t,De,Ct),r);break}Tn(t,De,Ct);break;case 5:Tn(t,De,Ct);break;default:throw Error(k(329))}}}return ze(t,ae()),t.callbackNode===n?Jm.bind(null,t):null}function fu(t,e){var n=xi;return t.current.memoizedState.isDehydrated&&(bn(t,e).flags|=256),t=Ao(t,e),t!==2&&(e=De,De=n,e!==null&&pu(e)),t}function pu(t){De===null?De=t:De.push.apply(De,t)}function x0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qt(t,e){for(e&=~Cc,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ut(e),r=1<<n;t[n]=-1,e&=~r}}function bh(t){if(W&6)throw Error(k(327));Cr();var e=fo(t,0);if(!(e&1))return ze(t,ae()),null;var n=Ao(t,e);if(t.tag!==0&&n===2){var r=Ua(t);r!==0&&(e=r,n=fu(t,r))}if(n===1)throw n=Xi,bn(t,0),Qt(t,e),ze(t,ae()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tn(t,De,Ct),ze(t,ae()),null}function kc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(Mr=ae()+500,al&&wn())}}function Bn(t){Zt!==null&&Zt.tag===0&&!(W&6)&&Cr();var e=W;W|=1;var n=et.transition,r=$;try{if(et.transition=null,$=1,t)return t()}finally{$=r,et.transition=n,W=e,!(W&6)&&wn()}}function Tc(){He=gr.current,J(gr)}function bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,r0(n)),ue!==null)for(n=ue.return;n!==null;){var r=n;switch(oc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:Dr(),J(je),J(xe),mc();break;case 5:pc(r);break;case 4:Dr();break;case 13:J(te);break;case 19:J(te);break;case 10:cc(r.type._context);break;case 22:case 23:Tc()}n=n.return}if(ve=t,ue=t=un(t.current,null),Ee=He=e,he=0,Xi=null,Cc=hl=Wn=0,De=xi=null,An!==null){for(e=0;e<An.length;e++)if(n=An[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}An=null}return t}function Zm(t,e){do{var n=ue;try{if(uc(),Ys.current=xo,To){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(zn=0,pe=de=ne=null,ki=!1,Qi=0,Sc.current=null,n===null||n.return===null){he=1,Xi=e,ue=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Ee,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Sh(o);if(g!==null){g.flags&=-257,Ch(g,o,l,s,e),g.mode&1&&Eh(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(a),e.updateQueue=w}else v.add(a);break e}else{if(!(e&1)){Eh(s,u,e),xc();break e}a=Error(k(426))}}else if(Z&&l.mode&1){var S=Sh(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ch(S,o,l,s,e),lc(br(a,l));break e}}s=a=br(a,l),he!==4&&(he=2),xi===null?xi=[s]:xi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Mm(s,a,e);mh(s,m);break e;case 1:l=a;var f=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ln===null||!ln.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Fm(s,l,e);mh(s,y);break e}}s=s.return}while(s!==null)}ng(n)}catch(C){e=C,ue===n&&n!==null&&(ue=n=n.return);continue}break}while(!0)}function eg(){var t=No.current;return No.current=xo,t===null?xo:t}function xc(){(he===0||he===3||he===2)&&(he=4),ve===null||!(Wn&268435455)&&!(hl&268435455)||Qt(ve,Ee)}function Ao(t,e){var n=W;W|=2;var r=eg();(ve!==t||Ee!==e)&&(Ct=null,bn(t,e));do try{N0();break}catch(i){Zm(t,i)}while(!0);if(uc(),W=n,No.current=r,ue!==null)throw Error(k(261));return ve=null,Ee=0,he}function N0(){for(;ue!==null;)tg(ue)}function R0(){for(;ue!==null&&!ey();)tg(ue)}function tg(t){var e=ig(t.alternate,t,He);t.memoizedProps=t.pendingProps,e===null?ng(t):ue=e,Sc.current=null}function ng(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=S0(n,e),n!==null){n.flags&=32767,ue=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ue=null;return}}else if(n=E0(n,e,He),n!==null){ue=n;return}if(e=e.sibling,e!==null){ue=e;return}ue=e=t}while(e!==null);he===0&&(he=5)}function Tn(t,e,n){var r=$,i=et.transition;try{et.transition=null,$=1,P0(t,e,n,r)}finally{et.transition=i,$=r}return null}function P0(t,e,n,r){do Cr();while(Zt!==null);if(W&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cy(t,s),t===ve&&(ue=ve=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Us||(Us=!0,sg(ho,function(){return Cr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=$;$=1;var l=W;W|=4,Sc.current=null,I0(t,n),Ym(n,t),Yy($a),po=!!Ha,$a=Ha=null,t.current=n,k0(n),ty(),W=l,$=o,et.transition=s}else t.current=n;if(Us&&(Us=!1,Zt=t,Po=i),s=t.pendingLanes,s===0&&(ln=null),iy(n.stateNode),ze(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,t=du,du=null,t;return Po&1&&t.tag!==0&&Cr(),s=t.pendingLanes,s&1?t===hu?Ni++:(Ni=0,hu=t):Ni=0,wn(),null}function Cr(){if(Zt!==null){var t=Mp(Po),e=et.transition,n=$;try{if(et.transition=null,$=16>t?16:t,Zt===null)var r=!1;else{if(t=Zt,Zt=null,Po=0,W&6)throw Error(k(331));var i=W;for(W|=4,A=t.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Ti(8,d,s)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var h=d.sibling,g=d.return;if(Km(d),d===u){A=null;break}if(h!==null){h.return=g,A=h;break}A=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ti(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var f=t.current;for(A=f;A!==null;){o=A;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,A=p;else e:for(o=f;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:dl(9,l)}}catch(C){se(l,l.return,C)}if(l===o){A=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,A=y;break e}A=l.return}}if(W=i,wn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(rl,t)}catch{}r=!0}return r}finally{$=n,et.transition=e}}return!1}function Mh(t,e,n){e=br(n,e),e=Mm(t,e,1),t=on(t,e,1),e=Re(),t!==null&&(us(t,1,e),ze(t,e))}function se(t,e,n){if(t.tag===3)Mh(t,t,n);else for(;e!==null;){if(e.tag===3){Mh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){t=br(n,t),t=Fm(e,t,1),e=on(e,t,1),t=Re(),e!==null&&(us(e,1,t),ze(e,t));break}}e=e.return}}function A0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(Ee&n)===n&&(he===4||he===3&&(Ee&130023424)===Ee&&500>ae()-Ic?bn(t,0):Cc|=n),ze(t,e)}function rg(t,e){e===0&&(t.mode&1?(e=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):e=1);var n=Re();t=Ft(t,e),t!==null&&(us(t,e,n),ze(t,n))}function O0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rg(t,n)}function L0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),rg(t,n)}var ig;ig=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)be=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return be=!1,w0(t,e,n);be=!!(t.flags&131072)}else be=!1,Z&&e.flags&1048576&&am(e,Eo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Js(t,e),t=e.pendingProps;var i=Ar(e,xe.current);Sr(e,n),i=_c(null,e,r,t,i,n);var s=vc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,yo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hc(e),i.updater=cl,e.stateNode=i,i._reactInternals=e,eu(e,r,t,n),e=ru(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&sc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Js(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=b0(r),t=it(r,t),i){case 0:e=nu(null,e,r,t,n);break e;case 1:e=Th(null,e,r,t,n);break e;case 11:e=Ih(null,e,r,t,n);break e;case 14:e=kh(null,e,r,it(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),nu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Th(t,e,r,i,n);case 3:e:{if(Wm(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pm(t,e),Io(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=br(Error(k(423)),e),e=xh(t,e,r,n,i);break e}else if(r!==i){i=br(Error(k(424)),e),e=xh(t,e,r,n,i);break e}else for($e=sn(e.stateNode.containerInfo.firstChild),Ge=e,Z=!0,ot=null,n=hm(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Or(),r===i){e=jt(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return mm(e),t===null&&Xa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ga(r,i)?o=null:s!==null&&Ga(r,s)&&(e.flags|=32),zm(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&Xa(e),null;case 13:return Bm(t,e,n);case 4:return fc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lr(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Ih(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(So,r._currentValue),r._currentValue=o,s!==null)if(ft(s.value,o)){if(s.children===i.children&&!je.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Lt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ja(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ja(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Sr(e,n),i=tt(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),kh(t,e,r,i,n);case 15:return jm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),Js(t,e),e.tag=1,Ue(r)?(t=!0,yo(e)):t=!1,Sr(e,n),bm(e,r,i),eu(e,r,i,n),ru(null,e,r,!0,t,n);case 19:return Vm(t,e,n);case 22:return Um(t,e,n)}throw Error(k(156,e.tag))};function sg(t,e){return Op(t,e)}function D0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Je(t,e,n,r){return new D0(t,e,n,r)}function Nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function b0(t){if(typeof t=="function")return Nc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ku)return 11;if(t===Qu)return 14}return 2}function un(t,e){var n=t.alternate;return n===null?(n=Je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function to(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case or:return Mn(n.children,i,s,e);case Gu:o=8,i|=8;break;case Ia:return t=Je(12,n,e,i|2),t.elementType=Ia,t.lanes=s,t;case ka:return t=Je(13,n,e,i),t.elementType=ka,t.lanes=s,t;case Ta:return t=Je(19,n,e,i),t.elementType=Ta,t.lanes=s,t;case mp:return fl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fp:o=10;break e;case pp:o=9;break e;case Ku:o=11;break e;case Qu:o=14;break e;case $t:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=Je(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mn(t,e,n,r){return t=Je(7,t,r,e),t.lanes=n,t}function fl(t,e,n,r){return t=Je(22,t,r,e),t.elementType=mp,t.lanes=n,t.stateNode={isHidden:!1},t}function sa(t,e,n){return t=Je(6,t,null,e),t.lanes=n,t}function oa(t,e,n){return e=Je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function M0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rc(t,e,n,r,i,s,o,l,a){return t=new M0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Je(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(s),t}function F0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function og(t){if(!t)return mn;t=t._reactInternals;e:{if(Yn(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Ue(n))return om(t,n,e)}return e}function lg(t,e,n,r,i,s,o,l,a){return t=Rc(n,r,!0,t,i,s,o,l,a),t.context=og(null),n=t.current,r=Re(),i=an(n),s=Lt(r,i),s.callback=e??null,on(n,s,i),t.current.lanes=i,us(t,i,r),ze(t,r),t}function pl(t,e,n,r){var i=e.current,s=Re(),o=an(i);return n=og(n),e.context===null?e.context=n:e.pendingContext=n,e=Lt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=on(i,e,o),t!==null&&(ct(t,i,o,s),qs(t,i,o)),o}function Oo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pc(t,e){Fh(t,e),(t=t.alternate)&&Fh(t,e)}function j0(){return null}var ag=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ac(t){this._internalRoot=t}ml.prototype.render=Ac.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));pl(t,e,null,null)};ml.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Bn(function(){pl(null,t,null,null)}),e[Mt]=null}};function ml(t){this._internalRoot=t}ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=Up();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kt.length&&e!==0&&e<Kt[n].priority;n++);Kt.splice(n,0,t),n===0&&Wp(t)}};function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jh(){}function U0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Oo(o);s.call(u)}}var o=lg(e,r,t,0,null,!1,!1,"",jh);return t._reactRootContainer=o,t[Mt]=o.current,Vi(t.nodeType===8?t.parentNode:t),Bn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Oo(a);l.call(u)}}var a=Rc(t,0,!1,null,null,!1,!1,"",jh);return t._reactRootContainer=a,t[Mt]=a.current,Vi(t.nodeType===8?t.parentNode:t),Bn(function(){pl(e,a,n,r)}),a}function _l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Oo(o);l.call(a)}}pl(e,o,t,i)}else o=U0(n,e,t,i,r);return Oo(o)}Fp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_i(e.pendingLanes);n!==0&&(Xu(e,n|1),ze(e,ae()),!(W&6)&&(Mr=ae()+500,wn()))}break;case 13:Bn(function(){var r=Ft(t,1);if(r!==null){var i=Re();ct(r,t,1,i)}}),Pc(t,1)}};Ju=function(t){if(t.tag===13){var e=Ft(t,134217728);if(e!==null){var n=Re();ct(e,t,134217728,n)}Pc(t,134217728)}};jp=function(t){if(t.tag===13){var e=an(t),n=Ft(t,e);if(n!==null){var r=Re();ct(n,t,e,r)}Pc(t,e)}};Up=function(){return $};zp=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Ma=function(t,e,n){switch(e){case"input":if(Ra(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ll(r);if(!i)throw Error(k(90));_p(r),Ra(r,i)}}}break;case"textarea":yp(t,n);break;case"select":e=n.value,e!=null&&vr(t,!!n.multiple,e,!1)}};Tp=kc;xp=Bn;var z0={usingClientEntryPoint:!1,Events:[ds,cr,ll,Ip,kp,kc]},ai={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W0={bundleType:ai.bundleType,version:ai.version,rendererPackageName:ai.rendererPackageName,rendererConfig:ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pp(t),t===null?null:t.stateNode},findFiberByHostInstance:ai.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zs.isDisabled&&zs.supportsFiber)try{rl=zs.inject(W0),vt=zs}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z0;Qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(e))throw Error(k(200));return F0(t,e,null,n)};Qe.createRoot=function(t,e){if(!Oc(t))throw Error(k(299));var n=!1,r="",i=ag;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rc(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,Vi(t.nodeType===8?t.parentNode:t),new Ac(e)};Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=Pp(e),t=t===null?null:t.stateNode,t};Qe.flushSync=function(t){return Bn(t)};Qe.hydrate=function(t,e,n){if(!gl(e))throw Error(k(200));return _l(null,t,e,!0,n)};Qe.hydrateRoot=function(t,e,n){if(!Oc(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ag;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lg(e,null,t,1,n??null,i,!1,s,o),t[Mt]=e.current,Vi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ml(e)};Qe.render=function(t,e,n){if(!gl(e))throw Error(k(200));return _l(null,t,e,!1,n)};Qe.unmountComponentAtNode=function(t){if(!gl(t))throw Error(k(40));return t._reactRootContainer?(Bn(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};Qe.unstable_batchedUpdates=kc;Qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!gl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return _l(t,e,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)}catch(t){console.error(t)}}ug(),up.exports=Qe;var B0=up.exports,Uh=B0;Sa.createRoot=Uh.createRoot,Sa.hydrateRoot=Uh.hydrateRoot;var zh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=function(t,e){if(!t)throw Qr(e)},Qr=function(t){return new Error("Firebase Database ("+cg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},V0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(h=64)),r.push(n[d],n[c],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):V0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new H0;const h=s<<2|l>>4;if(r.push(h),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class H0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hg=function(t){const e=dg(t);return Lc.encodeByteArray(e,!0)},Lo=function(t){return hg(t).replace(/\./g,"")},Do=function(t){try{return Lc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $0(t){return fg(void 0,t)}function fg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!G0(n)||(t[n]=fg(t[n],e[n]));return t}function G0(t){return t!=="__proto__"}/**
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
 */function K0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Q0=()=>K0().__FIREBASE_DEFAULTS__,q0=()=>{if(typeof process>"u"||typeof zh>"u")return;const t=zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Y0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Do(t[1]);return e&&JSON.parse(e)},Dc=()=>{try{return Q0()||q0()||Y0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pg=t=>{var e,n;return(n=(e=Dc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},X0=t=>{const e=pg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mg=()=>{var t;return(t=Dc())===null||t===void 0?void 0:t.config},gg=t=>{var e;return(e=Dc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function J0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Z0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ew(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tw(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nw(){return cg.NODE_ADMIN===!0}function rw(){try{return typeof indexedDB=="object"}catch{return!1}}function iw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sw,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ps.prototype.create)}}class ps{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?ow(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function ow(t,e){return t.replace(lw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const lw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return JSON.parse(t)}function _e(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ji(Do(s[0])||""),n=Ji(Do(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},aw=function(t){const e=vg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uw=function(t){const e=vg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Mo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wh(s)&&Wh(o)){if(!Mo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function dw(t,e){const n=new hw(t,e);return n.subscribe.bind(n)}class hw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}function vl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function We(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */class mw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new fs;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_w(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gw(t){return t===xn?void 0:t}function _w(t){return t.instantiationMode==="EAGER"}/**
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
 */class vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const yw={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},ww=G.INFO,Ew={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Sw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Ew[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=ww,this._logHandler=Sw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Cw=(t,e)=>e.some(n=>t instanceof n);let Bh,Vh;function Iw(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kw(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,gu=new WeakMap,wg=new WeakMap,aa=new WeakMap,Fc=new WeakMap;function Tw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(cn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&yg.set(n,t)}).catch(()=>{}),Fc.set(e,t),e}function xw(t){if(gu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gu.set(t,e)}let _u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nw(t){_u=t(_u)}function Rw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ua(this),e,...n);return wg.set(r,e.sort?e.sort():[e]),cn(r)}:kw().includes(t)?function(...e){return t.apply(ua(this),e),cn(yg.get(this))}:function(...e){return cn(t.apply(ua(this),e))}}function Pw(t){return typeof t=="function"?Rw(t):(t instanceof IDBTransaction&&xw(t),Cw(t,Iw())?new Proxy(t,_u):t)}function cn(t){if(t instanceof IDBRequest)return Tw(t);if(aa.has(t))return aa.get(t);const e=Pw(t);return e!==t&&(aa.set(t,e),Fc.set(e,t)),e}const ua=t=>Fc.get(t);function Aw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=cn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(cn(o.result),a.oldVersion,a.newVersion,cn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ow=["get","getKey","getAll","getAllKeys","count"],Lw=["put","add","delete","clear"],ca=new Map;function Hh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ca.get(e))return ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ow.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ca.set(e,s),s}Nw(t=>({...t,get:(e,n,r)=>Hh(e,n)||t.get(e,n,r),has:(e,n)=>!!Hh(e,n)||t.has(e,n)}));/**
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
 */class Dw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",$h="0.10.13";/**
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
 */const Ut=new Mc("@firebase/app"),Mw="@firebase/app-compat",Fw="@firebase/analytics-compat",jw="@firebase/analytics",Uw="@firebase/app-check-compat",zw="@firebase/app-check",Ww="@firebase/auth",Bw="@firebase/auth-compat",Vw="@firebase/database",Hw="@firebase/data-connect",$w="@firebase/database-compat",Gw="@firebase/functions",Kw="@firebase/functions-compat",Qw="@firebase/installations",qw="@firebase/installations-compat",Yw="@firebase/messaging",Xw="@firebase/messaging-compat",Jw="@firebase/performance",Zw="@firebase/performance-compat",eE="@firebase/remote-config",tE="@firebase/remote-config-compat",nE="@firebase/storage",rE="@firebase/storage-compat",iE="@firebase/firestore",sE="@firebase/vertexai-preview",oE="@firebase/firestore-compat",lE="firebase",aE="10.14.1";/**
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
 */const yu="[DEFAULT]",uE={[vu]:"fire-core",[Mw]:"fire-core-compat",[jw]:"fire-analytics",[Fw]:"fire-analytics-compat",[zw]:"fire-app-check",[Uw]:"fire-app-check-compat",[Ww]:"fire-auth",[Bw]:"fire-auth-compat",[Vw]:"fire-rtdb",[Hw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[Gw]:"fire-fn",[Kw]:"fire-fn-compat",[Qw]:"fire-iid",[qw]:"fire-iid-compat",[Yw]:"fire-fcm",[Xw]:"fire-fcm-compat",[Jw]:"fire-perf",[Zw]:"fire-perf-compat",[eE]:"fire-rc",[tE]:"fire-rc-compat",[nE]:"fire-gcs",[rE]:"fire-gcs-compat",[iE]:"fire-fst",[oE]:"fire-fst-compat",[sE]:"fire-vertex","fire-js":"fire-js",[lE]:"fire-js-all"};/**
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
 */const Fo=new Map,cE=new Map,wu=new Map;function Gh(t,e){try{t.container.addComponent(e)}catch(n){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(wu.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;wu.set(e,t);for(const n of Fo.values())Gh(n,t);for(const n of cE.values())Gh(n,t);return!0}function jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nt(t){return t.settings!==void 0}/**
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
 */const dE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new ps("app","Firebase",dE);/**
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
 */class hE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Yr=aE;function Eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:yu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=mg()),!n)throw dn.create("no-options");const s=Fo.get(i);if(s){if(Mo(n,s.options)&&Mo(r,s.config))return s;throw dn.create("duplicate-app",{appName:i})}const o=new vw(i);for(const a of wu.values())o.addComponent(a);const l=new hE(n,r,o);return Fo.set(i,l),l}function Sg(t=yu){const e=Fo.get(t);if(!e&&t===yu&&mg())return Eg();if(!e)throw dn.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let i=(r=uE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}jr(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const fE="firebase-heartbeat-database",pE=1,Zi="firebase-heartbeat-store";let da=null;function Cg(){return da||(da=Aw(fE,pE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),da}async function mE(t){try{const n=(await Cg()).transaction(Zi),r=await n.objectStore(Zi).get(Ig(t));return await n.done,r}catch(e){if(e instanceof En)Ut.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(n.message)}}}async function Kh(t,e){try{const r=(await Cg()).transaction(Zi,"readwrite");await r.objectStore(Zi).put(e,Ig(t)),await r.done}catch(n){if(n instanceof En)Ut.warn(n.message);else{const r=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ut.warn(r.message)}}}function Ig(t){return`${t.name}!${t.options.appId}`}/**
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
 */const gE=1024,_E=30*24*60*60*1e3;class vE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Qh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_E}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qh(),{heartbeatsToSend:r,unsentEntries:i}=yE(this._heartbeatsCache.heartbeats),s=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ut.warn(n),""}}}function Qh(){return new Date().toISOString().substring(0,10)}function yE(t,e=gE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rw()?iw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qh(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function EE(t){jr(new Vn("platform-logger",e=>new Dw(e),"PRIVATE")),jr(new Vn("heartbeat",e=>new vE(e),"PRIVATE")),hn(vu,$h,t),hn(vu,$h,"esm2017"),hn("fire-js","")}EE("");function Uc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function kg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SE=kg,Tg=new ps("auth","Firebase",kg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Mc("@firebase/auth");function CE(t,...e){jo.logLevel<=G.WARN&&jo.warn(`Auth (${Yr}): ${t}`,...e)}function no(t,...e){jo.logLevel<=G.ERROR&&jo.error(`Auth (${Yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw Wc(t,...e)}function dt(t,...e){return Wc(t,...e)}function zc(t,e,n){const r=Object.assign(Object.assign({},SE()),{[e]:n});return new ps("auth","Firebase",r).create(e,{appName:t.name})}function Fn(t){return zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function IE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Tg.create(t,...e)}function M(t,e,...n){if(!t)throw Wc(e,...n)}function Rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw no(e),new Error(e)}function zt(t,e){t||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kE(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kE()||ew()||"connection"in navigator)?navigator.onLine:!0}function xE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=bc()||_g()}get(){return TE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new ms(3e4,6e4);function Vc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xr(t,e,n,r,i={}){return Ng(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=qr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return Z0()||(u.referrerPolicy="no-referrer"),xg.fetch()(Rg(t,t.config.apiHost,n,l),u)})}async function Ng(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NE),e);try{const i=new AE(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ws(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Ws(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Ws(t,"user-disabled",o);const d=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw zc(t,d,u);Et(t,d)}}catch(i){if(i instanceof En)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function PE(t,e,n,r,i={}){const s=await Xr(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Rg(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bc(t.config,i):`${t.config.apiScheme}://${i}`}class AE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dt(this.auth,"network-request-failed")),RE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OE(t,e){return Xr(t,"POST","/v1/accounts:delete",e)}async function Pg(t,e){return Xr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LE(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Hc(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ri(ha(i.auth_time)),issuedAtTime:Ri(ha(i.iat)),expirationTime:Ri(ha(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ha(t){return Number(t)*1e3}function Hc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return no("JWT malformed, contained fewer than 3 sections"),null;try{const i=Do(n);return i?JSON.parse(i):(no("Failed to decode base64 JWT payload"),null)}catch(i){return no("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Xh(t){const e=Hc(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&DE(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function DE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Uo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await es(t,Pg(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ag(s.providerUserInfo):[],l=FE(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=a?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function ME(t){const e=We(t);await Uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FE(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ag(t){return t.map(e=>{var{providerId:n}=e,r=Uc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(t,e){const n=await Ng(t,{},async()=>{const r=qr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Rg(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",xg.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UE(t,e){return Xr(t,"POST","/v2/accounts:revokeToken",Vc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Xh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jE(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ir;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Uc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Su(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LE(this,e)}reload(){return ME(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(Fn(this.auth));const e=await this.getIdToken();return await es(this,OE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:C,providerData:N,stsTokenManager:T}=n;M(p&&T,e,"internal-error");const E=Ir.fromJSON(this.name,T);M(typeof p=="string",e,"internal-error"),Ht(c,e.name),Ht(h,e.name),M(typeof y=="boolean",e,"internal-error"),M(typeof C=="boolean",e,"internal-error"),Ht(g,e.name),Ht(v,e.name),Ht(w,e.name),Ht(S,e.name),Ht(m,e.name),Ht(f,e.name);const O=new Pt({uid:p,auth:e,email:h,emailVerified:y,displayName:c,isAnonymous:C,photoURL:v,phoneNumber:g,tenantId:w,stsTokenManager:E,createdAt:m,lastLoginAt:f});return N&&Array.isArray(N)&&(O.providerData=N.map(R=>Object.assign({},R))),S&&(O._redirectEventId=S),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ir;i.updateFromServerResponse(n);const s=new Pt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Uo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ag(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ir;l.updateFromIdToken(r);const a=new Pt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=new Map;function At(t){zt(t instanceof Function,"Expected a class definition");let e=Jh.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jh.set(t,e),e)}/**
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
 */class Og{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Og.type="NONE";const Zh=Og;/**
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
 */function ro(t,e,n){return`firebase:${t}:${e}:${n}`}class kr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ro(this.userKey,i.apiKey,s),this.fullPersistenceKey=ro("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new kr(At(Zh),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||At(Zh);const o=ro(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Pt._fromJSON(e,d);u!==s&&(l=c),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new kr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new kr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jg(e))return"Blackberry";if(Ug(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||bg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lg(t=Ae()){return/firefox\//i.test(t)}function Dg(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bg(t=Ae()){return/crios\//i.test(t)}function Mg(t=Ae()){return/iemobile/i.test(t)}function Fg(t=Ae()){return/android/i.test(t)}function jg(t=Ae()){return/blackberry/i.test(t)}function Ug(t=Ae()){return/webos/i.test(t)}function $c(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zE(t=Ae()){var e;return $c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WE(){return tw()&&document.documentMode===10}function zg(t=Ae()){return $c(t)||Fg(t)||Ug(t)||jg(t)||/windows phone/i.test(t)||Mg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e=[]){let n;switch(t){case"Browser":n=ef(Ae());break;case"Worker":n=`${ef(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
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
 */class BE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function VE(t,e={}){return Xr(t,"GET","/v2/passwordPolicy",Vc(t,e))}/**
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
 */const HE=6;class $E{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new BE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=At(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pg(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Uo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(Fn(this));const n=e?We(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(Fn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(Fn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(At(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VE(this),n=new $E(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ps("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await UE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&At(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[At(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wl(t){return We(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=dw(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KE(t){Gc=t}function QE(t){return Gc.loadJS(t)}function qE(){return Gc.gapiScript}function YE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e){const n=jc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Mo(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function JE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(At);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZE(t,e,n){const r=wl(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Bg(e),{host:o,port:l}=eS(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),tS()}function Bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eS(t){const e=Bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:nf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:nf(o)}}}function nf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,n){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(t,e){return PE(t,"POST","/v1/accounts:signInWithIdp",Vc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="http://localhost";class Hn extends Vg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Uc(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Tr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Tr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Tr(e,n)}buildRequest(){const e={requestUri:nS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gs extends Kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends gs{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends gs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends gs{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.GITHUB_SIGN_IN_METHOD="github.com";Yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends gs{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pt._fromIdTokenResponse(e,r,i),o=rf(r);return new Ur({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=rf(r);return new Ur({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function rf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zo(e,n,r,i)}}function Hg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zo._fromErrorAndOperation(t,s,e,r):s})}async function rS(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ur._forOperation(t,"link",r)}/**
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
 */async function iS(t,e,n=!1){const{auth:r}=t;if(Nt(r.app))return Promise.reject(Fn(r));const i="reauthenticate";try{const s=await es(t,Hg(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Hc(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),Ur._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(t,e,n=!1){if(Nt(t.app))return Promise.reject(Fn(t));const r="signIn",i=await Hg(t,r,e),s=await Ur._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function oS(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function lS(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function aS(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function uS(t){return We(t).signOut()}const Wo="__sak";/**
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
 */class $g{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wo,"1"),this.storage.removeItem(Wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=1e3,dS=10;class Gg extends $g{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,dS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gg.type="LOCAL";const hS=Gg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg extends $g{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kg.type="SESSION";const Qg=Kg;/**
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
 */function fS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class El{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new El(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await fS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}El.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Qc("",20);i.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const h=c;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(d),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function mS(t){wt().location.href=t}/**
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
 */function qg(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function gS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _S(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vS(){return qg()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",yS=1,Bo="firebaseLocalStorage",Xg="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sl(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function wS(){const t=indexedDB.deleteDatabase(Yg);return new _s(t).toPromise()}function Cu(){const t=indexedDB.open(Yg,yS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:Xg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await wS(),e(await Cu()))})})}async function sf(t,e,n){const r=Sl(t,!0).put({[Xg]:e,value:n});return new _s(r).toPromise()}async function ES(t,e){const n=Sl(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function of(t,e){const n=Sl(t,!0).delete(e);return new _s(n).toPromise()}const SS=800,CS=3;class Jg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=El._getInstance(vS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gS(),!this.activeServiceWorker)return;this.sender=new pS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_S()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cu();return await sf(e,Wo,"1"),await of(e,Wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ES(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>of(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Sl(i,!1).getAll();return new _s(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jg.type="LOCAL";const IS=Jg;new ms(3e4,6e4);/**
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
 */function Zg(t,e){return e?At(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qc extends Vg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Tr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Tr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return sS(t.auth,new qc(t),t.bypassAuthState)}function TS(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),iS(n,new qc(t),t.bypassAuthState)}async function xS(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),rS(n,new qc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return xS;case"reauthViaPopup":case"reauthViaRedirect":return TS;default:Et(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new ms(2e3,1e4);async function RS(t,e,n){if(Nt(t.app))return Promise.reject(dt(t,"operation-not-supported-in-this-environment"));const r=wl(t);IE(t,e,Kc);const i=Zg(r,n);return new Ln(r,"signInViaPopup",e,i).executeNotNull()}class Ln extends e_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NS.get())};e()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS="pendingRedirect",io=new Map;class AS extends e_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const r=await OS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function OS(t,e){const n=bS(e),r=DS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function LS(t,e){io.set(t._key(),e)}function DS(t){return At(t._redirectPersistence)}function bS(t){return ro(PS,t.config.apiKey,t.name)}async function MS(t,e,n=!1){if(Nt(t.app))return Promise.reject(Fn(t));const r=wl(t),i=Zg(r,e),o=await new AS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!US(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!t_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=FS&&this.cachedEventUids.clear(),this.cachedEventUids.has(lf(e))}saveEventToCache(e){this.cachedEventUids.add(lf(e)),this.lastProcessedEventTime=Date.now()}}function lf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function t_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function US(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return t_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e={}){return Xr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,BS=/^https?/;async function VS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zS(t);for(const n of e)try{if(HS(n))return}catch{}Et(t,"unauthorized-domain")}function HS(t){const e=Eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!BS.test(n))return!1;if(WS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $S=new ms(3e4,6e4);function af(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GS(t){return new Promise((e,n)=>{var r,i,s;function o(){af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{af(),n(dt(t,"network-request-failed"))},timeout:$S.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const l=YE("iframefcb");return wt()[l]=()=>{gapi.load?o():n(dt(t,"network-request-failed"))},QE(`${qE()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw so=null,e})}let so=null;function KS(t){return so=so||GS(t),so}/**
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
 */const QS=new ms(5e3,15e3),qS="__/auth/iframe",YS="emulator/auth/iframe",XS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZS(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bc(e,YS):`https://${t.config.authDomain}/${qS}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=JS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qr(r).slice(1)}`}async function eC(t){const e=await KS(t),n=wt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:ZS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dt(t,"network-request-failed"),l=wt().setTimeout(()=>{s(o)},QS.get());function a(){wt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,iC="_blank",sC="http://localhost";class uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oC(t,e,n,r=nC,i=rC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},tC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(l=bg(u)?iC:n),Lg(u)&&(e=e||sC,a.scrollbars="yes");const d=Object.entries(a).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if(zE(u)&&l!=="_self")return lC(e||"",l),new uf(null);const c=window.open(e||"",l,d);M(c,t,"popup-blocked");try{c.focus()}catch{}return new uf(c)}function lC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aC="__/auth/handler",uC="emulator/auth/handler",cC=encodeURIComponent("fac");async function cf(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof Kc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof gs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const a=await t._getAppCheckToken(),u=a?`#${cC}=${encodeURIComponent(a)}`:"";return`${dC(t)}?${qr(l).slice(1)}${u}`}function dC({config:t}){return t.emulator?Bc(t,uC):`https://${t.authDomain}/${aC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="webStorageSupport";class hC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qg,this._completeRedirectFn=MS,this._overrideRedirectResult=LS}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cf(e,n,r,Eu(),i);return oC(e,o,Qc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await cf(e,n,r,Eu(),i);return mS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eC(e),r=new jS(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fa,{type:fa},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fa];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zg()||Dg()||$c()}}const fC=hC;var df="@firebase/auth",hf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(t){jr(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wg(t)},u=new GE(r,i,s,a);return JE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new Vn("auth-internal",e=>{const n=wl(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(df,hf,mC(t)),hn(df,hf,"esm2017")}/**
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
 */const _C=5*60,vC=gg("authIdTokenMaxAge")||_C;let ff=null;const yC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vC)return;const i=n==null?void 0:n.token;ff!==i&&(ff=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wC(t=Sg()){const e=jc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XE(t,{popupRedirectResolver:fC,persistence:[IS,hS,Qg]}),r=gg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=yC(s.toString());lS(n,o,()=>o(n.currentUser)),oS(n,l=>o(l))}}const i=pg("auth");return i&&ZE(n,`http://${i}`),n}function EC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}KE({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");var pf={};const mf="@firebase/database",gf="1.0.8";/**
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
 */let n_="";function SC(t){n_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_e(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CC(e)}}catch{}return new IC},Dn=r_("localStorage"),kC=r_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Mc("@firebase/database"),TC=function(){let t=1;return function(){return t++}}(),i_=function(t){const e=pw(t),n=new cw;n.update(e);const r=n.digest();return Lc.encodeByteArray(r)},vs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vs.apply(null,r):typeof r=="object"?e+=_e(r):e+=r,e+=" "}return e};let Pi=null,_f=!0;const xC=function(t,e){x(!0,"Can't turn on custom loggers persistently."),xr.logLevel=G.VERBOSE,Pi=xr.log.bind(xr)},we=function(...t){if(_f===!0&&(_f=!1,Pi===null&&kC.get("logging_enabled")===!0&&xC()),Pi){const e=vs.apply(null,t);Pi(e)}},ys=function(t){return function(...e){we(t,...e)}},Iu=function(...t){const e="FIREBASE INTERNAL ERROR: "+vs(...t);xr.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${vs(...t)}`;throw xr.error(e),new Error(e)},Pe=function(...t){const e="FIREBASE WARNING: "+vs(...t);xr.warn(e)},NC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Pe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Yc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",$n="[MAX_NAME]",Xn=function(t,e){if(t===e)return 0;if(t===zr||e===$n)return-1;if(e===zr||t===$n)return 1;{const n=vf(t),r=vf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},PC=function(t,e){return t===e?0:t<e?-1:1},ui=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_e(e))},Xc=function(t){if(typeof t!="object"||t===null)return _e(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=_e(e[r]),n+=":",n+=Xc(t[e[r]]);return n+="}",n},s_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const o_=function(t){x(!Yc(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},AC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const DC=new RegExp("^-?(0*)\\d{1,10}$"),bC=-2147483648,MC=2147483647,vf=function(t){if(DC.test(t)){const e=Number(t);if(e>=bC&&e<=MC)return e}return null},Jr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Pe("Exception was thrown by user callback.",n),e},Math.floor(0))}},FC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class jC{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Pe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Pe(e)}}class oo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}oo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="5",l_="v",a_="s",u_="r",c_="f",d_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,h_="ls",f_="p",ku="ac",p_="websocket",m_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function __(t,e,n){x(typeof e=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(e===p_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===m_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zC(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $0(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa={},ma={};function Zc(t){const e=t.toString();return pa[e]||(pa[e]=new WC),pa[e]}function BC(t,e){const n=t.toString();return ma[n]||(ma[n]=e()),ma[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Jr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="start",HC="close",$C="pLPCommand",GC="pRTLPCB",v_="id",y_="pw",w_="ser",KC="cb",QC="seg",qC="ts",YC="d",XC="dframe",E_=1870,S_=30,JC=E_-S_,ZC=25e3,eI=3e4;class _r{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ys(e),this.stats_=Zc(n),this.urlFn=a=>(this.appCheckToken&&(a[ku]=this.appCheckToken),__(n,m_,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eI)),RC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ed((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yf)this.id=l,this.password=a;else if(o===HC)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[yf]="t",r[w_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KC]=this.scriptTagHolder.uniqueCallbackIdentifier),r[l_]=Jc,this.transportSessionId&&(r[a_]=this.transportSessionId),this.lastSessionId&&(r[h_]=this.lastSessionId),this.applicationId&&(r[f_]=this.applicationId),this.appCheckToken&&(r[ku]=this.appCheckToken),typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(r[u_]=c_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!AC()&&!OC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hg(n),i=s_(r,JC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[XC]="t",r[v_]=e,r[y_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_e(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ed{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TC(),window[$C+this.uniqueCallbackIdentifier]=e,window[GC+this.uniqueCallbackIdentifier]=n,this.myIFrame=ed.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){we("frame writing exception"),l.stack&&we(l.stack),we(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[v_]=this.myID,e[y_]=this.myPW,e[w_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+S_+r.length<=E_;){const o=this.pendingSegs.shift();r=r+"&"+QC+i+"="+o.seg+"&"+qC+i+"="+o.ts+"&"+YC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=16384,nI=45e3;let Vo=null;typeof MozWebSocket<"u"?Vo=MozWebSocket:typeof WebSocket<"u"&&(Vo=WebSocket);class lt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ys(this.connId),this.stats_=Zc(n),this.connURL=lt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[l_]=Jc,typeof location<"u"&&location.hostname&&d_.test(location.hostname)&&(o[u_]=c_),n&&(o[a_]=n),r&&(o[h_]=r),i&&(o[ku]=i),s&&(o[f_]=s),__(e,p_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let r;nw(),this.mySock=new Vo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Vo!==null&&!lt.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ji(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(x(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=_e(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s_(n,tI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}lt.responsesRequiredToBeHealthy=2;lt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_r,lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=lt&&lt.isAvailable();let r=n&&!lt.previouslyFailed();if(e.webSocketOnly&&(n||Pe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[lt];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=6e4,iI=5e3,sI=10*1024,oI=100*1024,ga="t",wf="d",lI="s",Ef="r",aI="e",Sf="o",Cf="a",If="n",kf="p",uI="h";class cI{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ys("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ga in e){const n=e[ga];n===Cf?this.upgradeIfSecondaryHealthy_():n===Ef?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ui("t",e),r=ui("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:kf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:If,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ui("t",e),r=ui("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ui(ga,e);if(wf in e){const r=e[wf];if(n===uI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===If){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lI?this.onConnectionShutdown_(r):n===Ef?this.onReset_(r):n===aI?Iu("Server Error: "+r):n===Sf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Iu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Jc!==r&&Pe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:kf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.allowedEvents_=e,this.listeners_={},x(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){x(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends I_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ho}getInitialEvent(e){return x(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=32,xf=768;class K{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function V(){return new K("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new K(t.pieces_,e)}function td(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function dI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ns(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function k_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new K(e,0)}function oe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof K)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new K(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Me(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hI(t,e){const n=ns(t,0),r=ns(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Xn(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function nd(t,e){if(gn(t)!==gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ze(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(gn(t)>gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class fI{constructor(e,n){this.errorPrefix_=n,this.parts_=ns(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=yl(this.parts_[r]);T_(this)}}function pI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yl(e),T_(t)}function mI(t){const e=t.parts_.pop();t.byteLength_-=yl(e),t.parts_.length>0&&(t.byteLength_-=1)}function T_(t){if(t.byteLength_>xf)throw new Error(t.errorPrefix_+"has a key path longer than "+xf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tf+") or object contains a cycle "+Nn(t))}function Nn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends I_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new rd}getInitialEvent(e){return x(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=1e3,gI=60*5*1e3,Nf=30*1e3,_I=1.3,vI=3e4,yI="server_kill",Rf=3;class Dt extends C_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Dt.nextPersistentConnectionId_++,this.log_=ys("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ci,this.maxReconnectDelay_=gI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ho.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(_e(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new fs,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Dt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const r=Fr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Pe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=aw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_e(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Iu("Unrecognized action received from server: "+_e(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vI&&(this.reconnectDelay_=ci),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_I)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new cI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Pe(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(yI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Pe(c),a())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mu(this.interruptReasons_)&&(this.reconnectDelay_=ci,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Xc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new K(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rf&&(this.reconnectDelay_=Nf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+n_.replace(/\./g,"-")]=1,bc()?e["framework.cordova"]=1:_g()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ho.getInstance().currentlyOnline();return mu(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(zr,e),i=new j(zr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs;class x_ extends Cl{static get __EMPTY_NODE(){return Bs}static set __EMPTY_NODE(e){Bs=e}compare(e,n){return Xn(e.name,n.name)}isDefinedOn(e){throw Qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j($n,Bs)}makePost(e,n){return x(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Bs)}toString(){return".key"}}const Nr=new x_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??me.RED,this.left=i??Fe.EMPTY_NODE,this.right=s??Fe.EMPTY_NODE}copy(e,n,r,i,s){return new me(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Fe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Fe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}me.RED=!0;me.BLACK=!1;class wI{copy(e,n,r,i,s){return this}insert(e,n,r){return new me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Fe{constructor(e,n=Fe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Fe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,me.BLACK,null,null))}remove(e){return new Fe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,me.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vs(this.root_,null,this.comparator_,!0,e)}}Fe.EMPTY_NODE=new wI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(t,e){return Xn(t.name,e.name)}function id(t,e){return Xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;function SI(t){Tu=t}const N_=function(t){return typeof t=="number"?"number:"+o_(t):"string:"+t},R_=function(t){if(t.isLeafNode()){const e=t.val();x(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else x(t===Tu||t.isEmpty(),"priority of unexpected type.");x(t===Tu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf;class fe{constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),R_(this.priorityNode_)}static set __childrenNodeConstructor(e){Pf=e}static get __childrenNodeConstructor(){return Pf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:F(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+N_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=o_(this.value_):e+=this.value_,this.lazyHash_=i_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(x(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P_,A_;function CI(t){P_=t}function II(t){A_=t}class kI extends Cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Xn(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j($n,new fe("[PRIORITY-POST]",A_))}makePost(e,n){const r=P_(e);return new j(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const le=new kI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=Math.log(2);class xI{constructor(e){const n=s=>parseInt(Math.log(s)/TI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $o=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=t[a],h=n?n(c):c,new me(h,c.node,me.BLACK,null,null);{const g=parseInt(d/2,10)+a,v=i(a,g),w=i(g+1,u);return c=t[g],h=n?n(c):c,new me(h,c.node,me.BLACK,v,w)}},s=function(a){let u=null,d=null,c=t.length;const h=function(v,w){const S=c-v,m=c;c-=v;const f=i(S+1,m),p=t[S],y=n?n(p):p;g(new me(y,p.node,w,null,f))},g=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<a.count;++v){const w=a.nextBitIsOne(),S=Math.pow(2,a.count-(v+1));w?h(S,me.BLACK):(h(S,me.BLACK),h(S,me.RED))}return d},o=new xI(t.length),l=s(o);return new Fe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;const ir={};class Ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return x(ir&&le,"ChildrenNode.ts has not been loaded"),_a=_a||new Ot({".priority":ir},{".priority":le}),_a}get(e){const n=Fr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Fe?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){x(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=$o(r,e.getCompare()):l=ir;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new Ot(d,u)}addToIndexes(e,n){const r=bo(this.indexes_,(i,s)=>{const o=Fr(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===ir)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),$o(l,o.getCompare())}else return ir;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Ot(r,this.indexSet_)}removeFromIndexes(e,n){const r=bo(this.indexes_,i=>{if(i===ir)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Ot(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di;class b{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&R_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return di||(di=new b(new Fe(id),null,Ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||di}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?di:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(x(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?di:this.priorityNode_;return new b(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{x(F(e)!==".priority"||gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(le,(o,l)=>{n[o]=l.val(e),r++,s&&b.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+N_(this.getPriority().val())+":"),this.forEachChild(le,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":i_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ws?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(le),i=n.getIterator(le);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NI extends b{constructor(){super(new Fe(id),b.EMPTY_NODE,Ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const ws=new NI;Object.defineProperties(j,{MIN:{value:new j(zr,b.EMPTY_NODE)},MAX:{value:new j($n,ws)}});x_.__EMPTY_NODE=b.EMPTY_NODE;fe.__childrenNodeConstructor=b;SI(ws);II(ws);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=!0;function ge(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),x(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ge(e))}if(!(t instanceof Array)&&RI){const n=[];let r=!1;if(Ce(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ge(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return b.EMPTY_NODE;const s=$o(n,EI,o=>o.name,id);if(r){const o=$o(n,le.getCompare());return new b(s,ge(e),new Ot({".priority":o},{".priority":le}))}else return new b(s,ge(e),Ot.Default)}else{let n=b.EMPTY_NODE;return Ce(t,(r,i)=>{if(St(t,r)&&r.substring(0,1)!=="."){const s=ge(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ge(e))}}CI(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI extends Cl{constructor(e){super(),this.indexPath_=e,x(!U(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Xn(e.name,n.name):s}makePost(e,n){const r=ge(e),i=b.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,ws);return new j($n,e)}toString(){return ns(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI extends Cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Xn(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ge(e);return new j(n,r)}toString(){return".value"}}const OI=new AI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t){return{type:"value",snapshotNode:t}}function Wr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function is(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LI(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){x(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(rs(n,l)):x(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Wr(n,r)):o.trackChildChange(is(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(le,(i,s)=>{n.hasChild(i)||r.trackChildChange(rs(i,s))}),n.isLeafNode()||n.forEachChild(le,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(is(i,s,o))}else r.trackChildChange(Wr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.indexedFilter_=new sd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=b.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(b.EMPTY_NODE);const s=this;return n.forEachChild(le,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=b.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=b.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(b.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(h,g)=>c(g,h)}else o=this.index_.getCompare();const l=e;x(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(is(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(rs(n,c));const w=l.updateImmediateChild(n,b.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Wr(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(rs(u.name,u.node)),s.trackChildChange(Wr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,b.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$n}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===le}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bI(t){return t.loadsAllData()?new sd(t.getIndex()):t.hasLimit()?new DI(t):new ss(t)}function Af(t){const e={};if(t.isDefault())return e;let n;if(t.index_===le?n="$priority":t.index_===OI?n="$value":t.index_===Nr?n="$key":(x(t.index_ instanceof PI,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_e(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=_e(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+_e(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=_e(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+_e(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Of(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends C_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ys("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(x(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Go.getListenId_(e,r),l={};this.listens_[o]=l;const a=Af(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Fr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Go.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Af(e._queryParams),r=e._path.toString(),i=new fs;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ji(l.responseText)}catch{Pe("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Pe("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(){return{value:null,children:new Map}}function L_(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Ko());const i=t.children.get(r);e=q(e),L_(i,e,n)}}function xu(t,e,n){t.value!==null?n(e,t.value):FI(t,(r,i)=>{const s=new K(e.toString()+"/"+r);xu(i,s,n)})}function FI(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=10*1e3,UI=30*1e3,zI=5*60*1e3;class WI{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jI(e);const r=Lf+(UI-Lf)*Math.random();Ai(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ce(e,(i,s)=>{s>0&&St(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*zI))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function ld(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ad(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ud(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=ld()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new K(e));return new Qo(V(),n,this.revert)}}else return x(F(this.path)===e,"operationForChild called for unrelated child."),new Qo(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new os(this.source,V()):new os(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return U(this.path)?new Gn(this.source,V(),this.snap.getImmediateChild(e)):new Gn(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new K(e));return n.isEmpty()?null:n.value?new Gn(this.source,V(),n.value):new Br(this.source,V(),n)}else return x(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Br(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function VI(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LI(o.childName,o.snapshotNode))}),hi(t,i,"child_removed",e,r,n),hi(t,i,"child_added",e,r,n),hi(t,i,"child_moved",s,r,n),hi(t,i,"child_changed",e,r,n),hi(t,i,"value",e,r,n),i}function hi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>$I(t,l,a)),o.forEach(l=>{const a=HI(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function HI(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $I(t,e,n){if(e.childName==null||n.childName==null)throw Qr("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){return{eventCache:t,serverCache:e}}function Oi(t,e,n,r){return Il(new Kn(e,n,r),t.serverCache)}function D_(t,e,n,r){return Il(t.eventCache,new Kn(e,n,r))}function Nu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va;const GI=()=>(va||(va=new Fe(PC)),va);class Q{constructor(e,n=GI()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return Ce(e,(r,i)=>{n=n.set(new K(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:V(),value:this.value};if(U(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:oe(new K(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Q(null)}}set(e,n){if(U(e))return new Q(n,this.children);{const r=F(e),s=(this.children.get(r)||new Q(null)).set(q(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(U(e))return n;{const r=F(e),s=(this.children.get(r)||new Q(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(V(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(oe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,V(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(q(e),oe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,V(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),oe(n,i),r):new Q(null)}}foreach(e){this.foreach_(V(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(oe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.writeTree_=e}static empty(){return new ht(new Q(null))}}function Li(t,e,n){if(U(e))return new ht(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new ht(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ht(s)}}}function Ru(t,e,n){let r=t;return Ce(n,(i,s)=>{r=Li(r,oe(e,i),s)}),r}function Df(t,e){if(U(e))return ht.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ht(n)}}function Pu(t,e){return Jn(t,e)!=null}function Jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function bf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(le,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function fn(t,e){if(U(e))return t;{const n=Jn(t,e);return n!=null?new ht(new Q(n)):new ht(t.writeTree_.subtree(e))}}function Au(t){return t.writeTree_.isEmpty()}function Vr(t,e){return b_(V(),t.writeTree_,e)}function b_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=b_(oe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(oe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t,e){return U_(e,t)}function KI(t,e,n,r,i){x(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Li(t.visibleWrites,e,n)),t.lastWriteId=r}function QI(t,e,n,r){x(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Ru(t.visibleWrites,e,n),t.lastWriteId=r}function qI(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function YI(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);x(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&XI(l,r.path)?i=!1:Ze(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return JI(t),!0;if(r.snap)t.visibleWrites=Df(t.visibleWrites,r.path);else{const l=r.children;Ce(l,a=>{t.visibleWrites=Df(t.visibleWrites,oe(r.path,a))})}return!0}else return!1}function XI(t,e){if(t.snap)return Ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ze(oe(t.path,n),e))return!0;return!1}function JI(t){t.visibleWrites=M_(t.allWrites,ZI,V()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function ZI(t){return t.visible}function M_(t,e,n){let r=ht.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)Ze(n,o)?(l=Me(n,o),r=Li(r,l,s.snap)):Ze(o,n)&&(l=Me(o,n),r=Li(r,V(),s.snap.getChild(l)));else if(s.children){if(Ze(n,o))l=Me(n,o),r=Ru(r,l,s.children);else if(Ze(o,n))if(l=Me(o,n),U(l))r=Ru(r,V(),s.children);else{const a=Fr(s.children,F(l));if(a){const u=a.getChild(q(l));r=Li(r,V(),u)}}}else throw Qr("WriteRecord should have .snap or .children")}}return r}function F_(t,e,n,r,i){if(!r&&!i){const s=Jn(t.visibleWrites,e);if(s!=null)return s;{const o=fn(t.visibleWrites,e);if(Au(o))return n;if(n==null&&!Pu(o,V()))return null;{const l=n||b.EMPTY_NODE;return Vr(o,l)}}}else{const s=fn(t.visibleWrites,e);if(!i&&Au(s))return n;if(!i&&n==null&&!Pu(s,V()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Ze(u.path,e)||Ze(e,u.path))},l=M_(t.allWrites,o,e),a=n||b.EMPTY_NODE;return Vr(l,a)}}}function ek(t,e,n){let r=b.EMPTY_NODE;const i=Jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(le,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fn(t.visibleWrites,e);return n.forEachChild(le,(o,l)=>{const a=Vr(fn(s,new K(o)),l);r=r.updateImmediateChild(o,a)}),bf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fn(t.visibleWrites,e);return bf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function tk(t,e,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=oe(e,n);if(Pu(t.visibleWrites,s))return null;{const o=fn(t.visibleWrites,s);return Au(o)?i.getChild(n):Vr(o,i.getChild(n))}}function nk(t,e,n,r){const i=oe(e,n),s=Jn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return Vr(o,r.getNode().getImmediateChild(n))}else return null}function rk(t,e){return Jn(t.visibleWrites,e)}function ik(t,e,n,r,i,s,o){let l;const a=fn(t.visibleWrites,e),u=Jn(a,V());if(u!=null)l=u;else if(n!=null)l=Vr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function sk(){return{visibleWrites:ht.empty(),allWrites:[],lastWriteId:-1}}function qo(t,e,n,r){return F_(t.writeTree,t.treePath,e,n,r)}function dd(t,e){return ek(t.writeTree,t.treePath,e)}function Mf(t,e,n,r){return tk(t.writeTree,t.treePath,e,n,r)}function Yo(t,e){return rk(t.writeTree,oe(t.treePath,e))}function ok(t,e,n,r,i,s){return ik(t.writeTree,t.treePath,e,n,r,i,s)}function hd(t,e,n){return nk(t.writeTree,t.treePath,e,n)}function j_(t,e){return U_(oe(t.treePath,e),t.writeTree)}function U_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,is(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,rs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Wr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,is(r,e.snapshotNode,i.oldSnap));else throw Qr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const z_=new ak;class fd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qn(this.viewCache_),s=ok(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(t){return{filter:t}}function ck(t,e){x(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),x(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function dk(t,e,n,r,i){const s=new lk;let o,l;if(n.type===at.OVERWRITE){const u=n;u.source.fromUser?o=Ou(t,e,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Xo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===at.MERGE){const u=n;u.source.fromUser?o=fk(t,e,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Lu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===at.ACK_USER_WRITE){const u=n;u.revert?o=gk(t,e,u.path,r,i,s):o=pk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=mk(t,e,n.path,r,s);else throw Qr("Unknown operation type: "+n.type);const a=s.getChanges();return hk(e,o,a),{viewCache:o,changes:a}}function hk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Nu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(O_(Nu(e)))}}function W_(t,e,n,r,i,s){const o=e.eventCache;if(Yo(r,n)!=null)return e;{let l,a;if(U(n))if(x(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Qn(e),d=u instanceof b?u:b.EMPTY_NODE,c=dd(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=qo(r,Qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){x(gn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=Mf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Mf(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=hd(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Oi(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Xo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=F(n);if(!a.isCompleteForPath(n)&&gn(n)>1)return e;const v=q(n),S=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=d.updatePriority(a.getNode(),S):u=d.updateChild(a.getNode(),g,S,v,z_,null)}const c=D_(e,u,a.isFullyInitialized()||U(n),d.filtersNodes()),h=new fd(i,c,s);return W_(t,c,n,i,h,l)}function Ou(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new fd(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Oi(e,u,!0,t.filter.filtersNodes());else{const c=F(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Oi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=q(n),g=l.getNode().getImmediateChild(c);let v;if(U(h))v=r;else{const w=d.getCompleteChild(c);w!=null?td(h)===".priority"&&w.getChild(k_(h)).isEmpty()?v=w:v=w.updateChild(h,r):v=b.EMPTY_NODE}if(g.equals(v))a=e;else{const w=t.filter.updateChild(l.getNode(),c,v,h,d,o);a=Oi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ff(t,e){return t.eventCache.isCompleteForChild(e)}function fk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=oe(n,a);Ff(e,F(d))&&(l=Ou(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=oe(n,a);Ff(e,F(d))||(l=Ou(t,l,d,u,i,s,o))}),l}function jf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Lu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),v=jf(t,g,h);a=Xo(t,a,new K(c),v,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const g=!e.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!g){const v=e.serverCache.getNode().getImmediateChild(c),w=jf(t,v,h);a=Xo(t,a,new K(c),w,i,s,o,l)}}),a}function pk(t,e,n,r,i,s,o){if(Yo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Xo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new Q(null);return a.getNode().forEachChild(Nr,(d,c)=>{u=u.set(new K(d),c)}),Lu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const h=oe(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Lu(t,e,n,u,i,s,l,o)}}function mk(t,e,n,r,i){const s=e.serverCache,o=D_(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return W_(t,o,n,r,z_,i)}function gk(t,e,n,r,i,s){let o;if(Yo(r,n)!=null)return e;{const l=new fd(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||F(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=qo(r,Qn(e));else{const c=e.serverCache.getNode();x(c instanceof b,"serverChildren would be complete if leaf node"),d=dd(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=F(n);let c=hd(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,q(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,b.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qo(r,Qn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Yo(r,V())!=null,Oi(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new sd(r.getIndex()),s=bI(r);this.processor_=uk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(b.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(b.EMPTY_NODE,l.getNode(),null),d=new Kn(a,o.isFullyInitialized(),i.filtersNodes()),c=new Kn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Il(c,d),this.eventGenerator_=new BI(this.query_)}get query(){return this.query_}}function vk(t){return t.viewCache_.serverCache.getNode()}function yk(t,e){const n=Qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function Uf(t){return t.eventRegistrations_.length===0}function wk(t,e){t.eventRegistrations_.push(e)}function zf(t,e,n){const r=[];if(n){x(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wf(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(x(Qn(t.viewCache_),"We should always have a full cache before handling merges"),x(Nu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=dk(t.processor_,i,e,n,r);return ck(t.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,B_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Ek(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(le,(s,o)=>{r.push(Wr(s,o))}),n.isFullyInitialized()&&r.push(O_(n.getNode())),B_(t,r,n.getNode(),e)}function B_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return VI(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;class Sk{constructor(){this.views=new Map}}function Ck(t){x(!Jo,"__referenceConstructor has already been defined"),Jo=t}function Ik(){return x(Jo,"Reference.ts has not been loaded"),Jo}function kk(t){return t.views.size===0}function pd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Wf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wf(o,e,n,r));return s}}function Tk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=qo(n,i?r:null),a=!1;l?a=!0:r instanceof b?(l=dd(n,r),a=!1):(l=b.EMPTY_NODE,a=!1);const u=Il(new Kn(l,a,!1),new Kn(r,i,!1));return new _k(e,u)}return o}function xk(t,e,n,r,i,s){const o=Tk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wk(o,n),Ek(o,n)}function Nk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=_n(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(zf(u,n,r)),Uf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(zf(a,n,r)),Uf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!_n(t)&&s.push(new(Ik())(e._repo,e._path)),{removed:s,events:o}}function V_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Rr(t,e){let n=null;for(const r of t.views.values())n=n||yk(r,e);return n}function H_(t,e){if(e._queryParams.loadsAllData())return kl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $_(t,e){return H_(t,e)!=null}function _n(t){return kl(t)!=null}function kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;function Rk(t){x(!Zo,"__referenceConstructor has already been defined"),Zo=t}function Pk(){return x(Zo,"Reference.ts has not been loaded"),Zo}let Ak=1;class Bf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=sk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function G_(t,e,n,r,i){return KI(t.pendingWriteTree_,e,n,r,i),i?Zr(t,new Gn(ld(),e,n)):[]}function Ok(t,e,n,r){QI(t.pendingWriteTree_,e,n,r);const i=Q.fromObject(n);return Zr(t,new Br(ld(),e,i))}function en(t,e,n=!1){const r=qI(t.pendingWriteTree_,e);if(YI(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(V(),!0):Ce(r.children,o=>{s=s.set(new K(o),!0)}),Zr(t,new Qo(r.path,s,n))}else return[]}function Tl(t,e,n){return Zr(t,new Gn(ad(),e,n))}function Lk(t,e,n){const r=Q.fromObject(n);return Zr(t,new Br(ad(),e,r))}function Dk(t,e){return Zr(t,new os(ad(),e))}function bk(t,e,n){const r=gd(t,n);if(r){const i=_d(r),s=i.path,o=i.queryId,l=Me(s,e),a=new os(ud(o),l);return vd(t,s,a)}else return[]}function Du(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$_(o,e))){const a=Nk(o,e,n,r);kk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(h,g)=>_n(g));if(d&&!c){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=jk(h);for(let v=0;v<g.length;++v){const w=g[v],S=w.query,m=q_(t,w);t.listenProvider_.startListening(Di(S),el(t,S),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Di(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(xl(h));t.listenProvider_.stopListening(Di(h),g)}))}Uk(t,u)}return l}function Mk(t,e,n,r){const i=gd(t,r);if(i!=null){const s=_d(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Gn(ud(l),a,n);return vd(t,o,u)}else return[]}function Fk(t,e,n,r){const i=gd(t,r);if(i){const s=_d(i),o=s.path,l=s.queryId,a=Me(o,e),u=Q.fromObject(n),d=new Br(ud(l),a,u);return vd(t,o,d)}else return[]}function Vf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=Me(h,i);s=s||Rr(g,v),o=o||_n(g)});let l=t.syncPointTree_.get(i);l?(o=o||_n(l),s=s||Rr(l,V())):(l=new Sk,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=b.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const w=Rr(v,V());w&&(s=s.updateImmediateChild(g,w))}));const u=$_(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=xl(e);x(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=zk();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=cd(t.pendingWriteTree_,i);let c=xk(l,e,n,d,s,a);if(!u&&!o&&!r){const h=H_(l,e);c=c.concat(Wk(t,e,h))}return c}function md(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Rr(l,a);if(u)return u});return F_(i,e,s,n,!0)}function Zr(t,e){return K_(e,t.syncPointTree_,null,cd(t.pendingWriteTree_,V()))}function K_(t,e,n,r){if(U(t.path))return Q_(t,e,n,r);{const i=e.get(V());n==null&&i!=null&&(n=Rr(i,V()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=j_(r,o);s=s.concat(K_(l,a,u,d))}return i&&(s=s.concat(pd(i,t,r,n))),s}}function Q_(t,e,n,r){const i=e.get(V());n==null&&i!=null&&(n=Rr(i,V()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=j_(r,o),d=t.operationForChild(o);d&&(s=s.concat(Q_(d,l,a,u)))}),i&&(s=s.concat(pd(i,t,r,n))),s}function q_(t,e){const n=e.query,r=el(t,n);return{hashFn:()=>(vk(e)||b.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?bk(t,n._path,r):Dk(t,n._path);{const s=LC(i,n);return Du(t,n,null,s)}}}}function el(t,e){const n=xl(e);return t.queryToTagMap.get(n)}function xl(t){return t._path.toString()+"$"+t._queryIdentifier}function gd(t,e){return t.tagToQueryMap.get(e)}function _d(t){const e=t.indexOf("$");return x(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new K(t.substr(0,e))}}function vd(t,e,n){const r=t.syncPointTree_.get(e);x(r,"Missing sync point for query tag that we're tracking");const i=cd(t.pendingWriteTree_,e);return pd(r,n,i,null)}function jk(t){return t.fold((e,n,r)=>{if(n&&_n(n))return[kl(n)];{let i=[];return n&&(i=V_(n)),Ce(r,(s,o)=>{i=i.concat(o)}),i}})}function Di(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Pk())(t._repo,t._path):t}function Uk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=xl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function zk(){return Ak++}function Wk(t,e,n){const r=e._path,i=el(t,e),s=q_(t,n),o=t.listenProvider_.startListening(Di(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)x(!_n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!U(u)&&d&&_n(d))return[kl(d).query];{let h=[];return d&&(h=h.concat(V_(d).map(g=>g.query))),Ce(c,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Di(d),el(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yd(n)}node(){return this.node_}}class wd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=oe(this.path_,e);return new wd(this.syncTree_,n)}node(){return md(this.syncTree_,this.path_)}}const Bk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Hf=function(t,e,n){if(!t||typeof t!="object")return t;if(x(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Vk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Hk(t[".sv"],e);x(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Vk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+t)}},Hk=function(t,e,n){t.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=e.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Y_=function(t,e,n,r){return Ed(e,new wd(n,t),r)},X_=function(t,e,n){return Ed(t,new yd(e),n)};function Ed(t,e,n){const r=t.getPriority().val(),i=Hf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Hf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ge(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(le,(l,a)=>{const u=Ed(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Cd(t,e){let n=e instanceof K?e:new K(e),r=t,i=F(n);for(;i!==null;){const s=Fr(r.node.children,i)||{children:{},childCount:0};r=new Sd(i,r,s),n=q(n),i=F(n)}return r}function ei(t){return t.node.value}function J_(t,e){t.node.value=e,bu(t)}function Z_(t){return t.node.childCount>0}function $k(t){return ei(t)===void 0&&!Z_(t)}function Nl(t,e){Ce(t.node.children,(n,r)=>{e(new Sd(n,t,r))})}function ev(t,e,n,r){n&&e(t),Nl(t,i=>{ev(i,e,!0)})}function Gk(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Es(t){return new K(t.parent===null?t.name:Es(t.parent)+"/"+t.name)}function bu(t){t.parent!==null&&Kk(t.parent,t.name,t)}function Kk(t,e,n){const r=$k(n),i=St(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,bu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,bu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qk=/[\[\].#$\/\u0000-\u001F\u007F]/,qk=/[\[\].#$\u0000-\u001F\u007F]/,ya=10*1024*1024,Id=function(t){return typeof t=="string"&&t.length!==0&&!Qk.test(t)},tv=function(t){return typeof t=="string"&&t.length!==0&&!qk.test(t)},Yk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tv(t)},Xk=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Yc(t)||t&&typeof t=="object"&&St(t,".sv")},nv=function(t,e,n,r){r&&e===void 0||Rl(vl(t,"value"),e,n)},Rl=function(t,e,n){const r=n instanceof K?new fI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Nn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Nn(r)+" with contents = "+e.toString());if(Yc(e))throw new Error(t+"contains "+e.toString()+" "+Nn(r));if(typeof e=="string"&&e.length>ya/3&&yl(e)>ya)throw new Error(t+"contains a string greater than "+ya+" utf8 bytes "+Nn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ce(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Id(o)))throw new Error(t+" contains an invalid key ("+o+") "+Nn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pI(r,o),Rl(t,l,r),mI(r)}),i&&s)throw new Error(t+' contains ".value" child '+Nn(r)+" in addition to actual children.")}},Jk=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ns(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Id(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hI);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ze(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Zk=function(t,e,n,r){const i=vl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ce(e,(o,l)=>{const a=new K(o);if(Rl(i,l,oe(n,a)),td(a)===".priority"&&!Xk(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),Jk(i,s)},rv=function(t,e,n,r){if(!tv(n))throw new Error(vl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eT=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),rv(t,e,n)},iv=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},tT=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Id(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Yk(n))throw new Error(vl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!nd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function sv(t,e,n){Pl(t,n),ov(t,r=>nd(r,e))}function pt(t,e,n){Pl(t,n),ov(t,r=>Ze(r,e)||Ze(e,r))}function ov(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(rT(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rT(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pi&&we("event: "+n.toString()),Jr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="repo_interrupt",sT=25;class oT{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ko(),this.transactionQueueTree_=new Sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lT(t,e,n){if(t.stats_=Zc(t.repoInfo_),t.forceRestClient_||FC())t.server_=new Go(t.repoInfo_,(r,i,s,o)=>{$f(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_e(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(r,i,s,o)=>{$f(t,r,i,s,o)},r=>{Gf(t,r)},r=>{aT(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=BC(t.repoInfo_,()=>new WI(t.stats_,t.server_)),t.infoData_=new MI,t.infoSyncTree_=new Bf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Tl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),kd(t,"connected",!1),t.serverSyncTree_=new Bf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);pt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function lv(t){const n=t.infoData_.getNode(new K(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Al(t){return Bk({timestamp:lv(t)})}function $f(t,e,n,r,i){t.dataUpdateCount++;const s=new K(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=bo(n,u=>ge(u));o=Fk(t.serverSyncTree_,s,a,i)}else{const a=ge(n);o=Mk(t.serverSyncTree_,s,a,i)}else if(r){const a=bo(n,u=>ge(u));o=Lk(t.serverSyncTree_,s,a)}else{const a=ge(n);o=Tl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Hr(t,s)),pt(t.eventQueue_,l,o)}function Gf(t,e){kd(t,"connected",e),e===!1&&dT(t)}function aT(t,e){Ce(e,(n,r)=>{kd(t,n,r)})}function kd(t,e,n){const r=new K("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(r,i);const s=Tl(t.infoSyncTree_,r,i);pt(t.eventQueue_,r,s)}function Td(t){return t.nextWriteId_++}function uT(t,e,n,r,i){Ol(t,"set",{path:e.toString(),value:n,priority:r});const s=Al(t),o=ge(n,r),l=md(t.serverSyncTree_,e),a=X_(o,l,s),u=Td(t),d=G_(t.serverSyncTree_,e,a,u,!0);Pl(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const v=h==="ok";v||Pe("set at "+e+" failed: "+h);const w=en(t.serverSyncTree_,u,!v);pt(t.eventQueue_,e,w),Mu(t,i,h,g)});const c=Nd(t,e);Hr(t,c),pt(t.eventQueue_,c,[])}function cT(t,e,n,r){Ol(t,"update",{path:e.toString(),value:n});let i=!0;const s=Al(t),o={};if(Ce(n,(l,a)=>{i=!1,o[l]=Y_(oe(e,l),ge(a),t.serverSyncTree_,s)}),i)we("update() called with empty data.  Don't do anything."),Mu(t,r,"ok",void 0);else{const l=Td(t),a=Ok(t.serverSyncTree_,e,o,l);Pl(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,d)=>{const c=u==="ok";c||Pe("update at "+e+" failed: "+u);const h=en(t.serverSyncTree_,l,!c),g=h.length>0?Hr(t,e):e;pt(t.eventQueue_,g,h),Mu(t,r,u,d)}),Ce(n,u=>{const d=Nd(t,oe(e,u));Hr(t,d)}),pt(t.eventQueue_,e,[])}}function dT(t){Ol(t,"onDisconnectEvents");const e=Al(t),n=Ko();xu(t.onDisconnect_,V(),(i,s)=>{const o=Y_(i,s,t.serverSyncTree_,e);L_(n,i,o)});let r=[];xu(n,V(),(i,s)=>{r=r.concat(Tl(t.serverSyncTree_,i,s));const o=Nd(t,i);Hr(t,o)}),t.onDisconnect_=Ko(),pt(t.eventQueue_,V(),r)}function hT(t,e,n){let r;F(e._path)===".info"?r=Vf(t.infoSyncTree_,e,n):r=Vf(t.serverSyncTree_,e,n),sv(t.eventQueue_,e._path,r)}function Kf(t,e,n){let r;F(e._path)===".info"?r=Du(t.infoSyncTree_,e,n):r=Du(t.serverSyncTree_,e,n),sv(t.eventQueue_,e._path,r)}function fT(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iT)}function Ol(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Mu(t,e,n,r){e&&Jr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function av(t,e,n){return md(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function xd(t,e=t.transactionQueueTree_){if(e||Ll(t,e),ei(e)){const n=cv(t,e);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&pT(t,Es(e),n)}else Z_(e)&&Nl(e,n=>{xd(t,n)})}function pT(t,e,n){const r=n.map(u=>u.currentWriteId),i=av(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Me(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Ol(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(en(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ll(t,Cd(t.transactionQueueTree_,e)),xd(t,t.transactionQueueTree_),pt(t.eventQueue_,e,d);for(let h=0;h<c.length;h++)Jr(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Pe("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Hr(t,e)}},o)}function Hr(t,e){const n=uv(t,e),r=Es(n),i=cv(t,n);return mT(t,i,r),r}function mT(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let d=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=sT)d=!0,c="maxretry",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0));else{const h=av(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Rl("transaction failed: Data returned ",g,a.path);let v=ge(g);typeof g=="object"&&g!=null&&St(g,".priority")||(v=v.updatePriority(h.getPriority()));const S=a.currentWriteId,m=Al(t),f=X_(v,h,m);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=f,a.currentWriteId=Td(t),o.splice(o.indexOf(S),1),i=i.concat(G_(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(en(t.serverSyncTree_,S,!0))}else d=!0,c="nodata",i=i.concat(en(t.serverSyncTree_,a.currentWriteId,!0))}pt(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Ll(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Jr(r[l]);xd(t,t.transactionQueueTree_)}function uv(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&ei(r)===void 0;)r=Cd(r,n),e=q(e),n=F(e);return r}function cv(t,e){const n=[];return dv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function dv(t,e,n){const r=ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Nl(e,i=>{dv(t,i,n)})}function Ll(t,e){const n=ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,J_(e,n.length>0?n:void 0)}Nl(e,r=>{Ll(t,r)})}function Nd(t,e){const n=Es(uv(t,e)),r=Cd(t.transactionQueueTree_,e);return Gk(r,i=>{wa(t,i)}),wa(t,r),ev(r,i=>{wa(t,i)}),n}function wa(t,e){const n=ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(en(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?J_(e,void 0):n.length=s+1,pt(t.eventQueue_,Es(e),i);for(let o=0;o<r.length;o++)Jr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _T(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Pe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qf=function(t,e){const n=vT(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||NC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new g_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new K(n.pathString)}},vT=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=gT(t.substring(d,c)));const h=_T(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yT=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=qf.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=qf.charAt(e[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+_e(this.snapshot.exportVal())}}class ET{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:td(this._path)}get ref(){return new Sn(this._repo,this._path)}get _queryIdentifier(){const e=Of(this._queryParams),n=Xc(e);return n==="{}"?"default":n}get _queryObject(){return Of(this._queryParams)}isEqual(e){if(e=We(e),!(e instanceof Rd))return!1;const n=this._repo===e._repo,r=nd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dI(this._path)}}class Sn extends Rd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=k_(this._path);return e===null?null:new Sn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class tl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new K(e),r=ls(this.ref,e);return new tl(this._node.getChild(n),r,le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new tl(i,ls(this.ref,r),le)))}hasChild(e){const n=new K(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Be(t,e){return t=We(t),t._checkNotDeleted("ref"),e!==void 0?ls(t._root,e):t._root}function ls(t,e){return t=We(t),F(t._path)===null?eT("child","path",e):rv("child","path",e),new Sn(t._repo,oe(t._path,e))}function CT(t,e){t=We(t),iv("push",t._path),nv("push",e,t._path,!0);const n=lv(t._repo),r=yT(n),i=ls(t,r),s=ls(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function lo(t,e){t=We(t),iv("set",t._path),nv("set",e,t._path,!1);const n=new fs;return uT(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function fi(t,e){Zk("update",e,t._path);const n=new fs;return cT(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Pd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new wT("value",this,new tl(e.snapshotNode,new Sn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ET(this,e,n):null}matches(e){return e instanceof Pd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IT(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Kf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new ST(n,s||void 0),l=new Pd(o);return hT(t._repo,t,l),()=>Kf(t._repo,t,l)}function Fu(t,e,n,r){return IT(t,"value",e,n,r)}Ck(Sn);Rk(Sn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="FIREBASE_DATABASE_EMULATOR_HOST",ju={};let TT=!1;function xT(t,e,n,r){t.repoInfo_=new g_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function NT(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qf(s,i),l=o.repoInfo,a;typeof process<"u"&&pf&&(a=pf[kT]),a?(s=`http://${a}?ns=${l.namespace}`,o=Qf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new UC(t.name,t.options,e);tT("Invalid Firebase Database URL",o),U(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=PT(l,t,u,new jC(t.name,n));return new AT(d,t)}function RT(t,e){const n=ju[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),fT(t),delete n[t.key]}function PT(t,e,n,r){let i=ju[e.name];i||(i={},ju[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new oT(t,TT,n,r),i[t.toURLString()]=s,s}class AT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Sn(this._repo,V())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function OT(t=Sg(),e){const n=jc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=X0("database");r&&LT(n,...r)}return n}function LT(t,e,n,r={}){t=We(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new oo(oo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:J0(r.mockUserToken,t.app.options.projectId);s=new oo(o)}xT(i,e,n,s)}/**
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
 */function DT(t){SC(Yr),jr(new Vn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return NT(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),hn(mf,gf,t),hn(mf,gf,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};DT();var bT="firebase",MT="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(bT,MT,"app");const FT={apiKey:"AIzaSyC3tTgAIVm0qz5irkqb7AkjwY7FOMJz4RM",authDomain:"packing-8b3de.firebaseapp.com",databaseURL:"https://packing-8b3de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"packing-8b3de",storageBucket:"packing-8b3de.firebasestorage.app",messagingSenderId:"109766093944",appId:"1:109766093944:web:35b8d72158750ab522d18d",measurementId:"G-GRY36B729W"},hv=Eg(FT),Ea=wC(hv),Ve=OT(hv),jT=new kt,fv="packing-checklist-data",Rn=["必備","電子產品","個人物品","視天氣","旅行","運動"],UT=["📋","🚶","💼","✈️","🏃","🎒","🏖️","🏕️","🎯","🛒"],yi={itemLibrary:[{id:1,name:"錢包",category:"必備",note:"放在玄關抽屜"},{id:2,name:"鑰匙",category:"必備",note:"大門+機車"},{id:3,name:"手機",category:"必備",note:""},{id:4,name:"悠遊卡",category:"必備",note:"記得加值"},{id:5,name:"耳機",category:"電子產品",note:"充電盒在書桌"},{id:6,name:"行動電源",category:"電子產品",note:"出門前確認電量"},{id:7,name:"充電線",category:"電子產品",note:"Type-C"},{id:8,name:"口罩",category:"個人物品",note:"備用放包包內袋"},{id:9,name:"面紙",category:"個人物品",note:""},{id:10,name:"水壺",category:"個人物品",note:"裝滿水"},{id:11,name:"雨傘",category:"視天氣",note:"摺疊傘在門口"},{id:12,name:"護照",category:"旅行",note:"效期到 2027/05"},{id:13,name:"換洗衣物",category:"旅行",note:"依天數準備"}],lists:[{id:1,name:"日常出門",icon:"🚶",items:[1,2,3,4,8,9],checkedItems:[]},{id:2,name:"上班通勤",icon:"💼",items:[1,2,3,4,5,6,7,8],checkedItems:[]}],activeListId:1};function pi(t){return t.toLowerCase().replace(/\./g,",")}function zT(t){return t.replace(/,/g,".")}function WT(t){return t?{...t,items:Array.isArray(t.items)?t.items:[],checkedItems:Array.isArray(t.checkedItems)?t.checkedItems:[],sharedWith:t.sharedWith||{}}:null}function pv(t){return t?{itemLibrary:Array.isArray(t.itemLibrary)?t.itemLibrary:yi.itemLibrary,lists:Array.isArray(t.lists)?t.lists.map(e=>({...e,items:Array.isArray(e.items)?e.items:[],checkedItems:Array.isArray(e.checkedItems)?e.checkedItems:[],...e.sharedListId?{sharedListId:e.sharedListId}:{}})):yi.lists,activeListId:t.activeListId||yi.activeListId}:yi}function BT(){try{const t=localStorage.getItem(fv);if(t)return pv(JSON.parse(t))}catch(t){console.error("載入本地資料失敗",t)}return yi}function Yf(t){try{localStorage.setItem(fv,JSON.stringify(t))}catch(e){console.error("儲存本地資料失敗",e)}}function VT(t){const[e,n]=D.useState(null),[r,i]=D.useState(t),[s,o]=D.useState("offline"),l=D.useRef(null),a=D.useCallback(g=>{l.current&&l.current();const v=Be(Ve,"users/"+g);l.current=Fu(v,w=>{const S=w.val();if(S){const m=pv(S);i(m),Yf(m),o("synced")}else u(g,r)},w=>{console.error("Firebase 讀取失敗",w),o("error")})},[]),u=D.useCallback((g,v)=>{o("syncing");const w=Be(Ve,"users/"+g);lo(w,v).then(()=>{o("synced")}).catch(S=>{console.error("Firebase 儲存失敗",S),o("error")})},[]),d=D.useCallback(g=>{i(g),Yf(g),e&&u(e.uid,g)},[e,u]),c=D.useCallback(()=>{RS(Ea,jT).catch(g=>{console.error("登入失敗",g),alert("登入失敗："+g.message)})},[]),h=D.useCallback(()=>{l.current&&(l.current(),l.current=null),uS(Ea).then(()=>{n(null),o("offline")}).catch(g=>{console.error("登出失敗",g)})},[]);return D.useEffect(()=>{const g=aS(Ea,v=>{n(v),v?a(v.uid):(o("offline"),l.current&&(l.current(),l.current=null))});return()=>{g(),l.current&&l.current()}},[a]),{user:e,data:r,syncStatus:s,saveData:d,handleLogin:c,handleLogout:h}}function HT(t,e){const[n,r]=D.useState({}),[i,s]=D.useState({}),o=D.useRef({}),l=D.useRef(null),a=D.useCallback(f=>{o.current[f]&&(o.current[f](),delete o.current[f])},[]),u=D.useCallback(()=>{Object.keys(o.current).forEach(a),l.current&&(l.current(),l.current=null),r({}),s({})},[a]),d=D.useCallback((f,p)=>{if(o.current[`${p}_${f}`])return;const y=Be(Ve,`sharedLists/${f}`),C=Fu(y,N=>{const T=N.val();if(!T){(p==="withMe"?r:s)(B=>{const ee={...B};return delete ee[f],ee}),a(`${p}_${f}`);return}const E=WT(T);(p==="withMe"?r:s)(R=>({...R,[f]:E}))},N=>{console.error("共享清單讀取失敗",N)});o.current[`${p}_${f}`]=C},[a]);D.useEffect(()=>{if(!(t!=null&&t.email)){u();return}const f=pi(t.email),p=Be(Ve,`sharedIndex/${f}`);return l.current=Fu(p,y=>{const C=y.val();if(!C){Object.keys(o.current).forEach(T=>{T.startsWith("withMe_")&&a(T)}),r({});return}const N=new Set(Object.keys(C));Object.keys(o.current).forEach(T=>{if(T.startsWith("withMe_")){const E=T.replace("withMe_","");N.has(E)||(a(T),r(O=>{const R={...O};return delete R[E],R}))}}),N.forEach(T=>{d(T,"withMe")})},y=>{console.error("共享索引讀取失敗",y)}),()=>{u()}},[t==null?void 0:t.email]),D.useEffect(()=>{if(!t||!(e!=null&&e.lists))return;const f=new Set;e.lists.forEach(p=>{p.sharedListId&&f.add(p.sharedListId)}),Object.keys(o.current).forEach(p=>{if(p.startsWith("byMe_")){const y=p.replace("byMe_","");f.has(y)||(a(p),s(C=>{const N={...C};return delete N[y],N}))}}),f.forEach(p=>{d(p,"byMe")})},[t,e==null?void 0:e.lists,d,a]),D.useEffect(()=>{!t||!(e!=null&&e.lists)||!(e!=null&&e.itemLibrary)||e.lists.forEach(f=>{if(!f.sharedListId)return;const p=i[f.sharedListId];if(!p)return;const y=(Array.isArray(f.items)?f.items:[]).map(T=>e.itemLibrary.find(E=>E.id===T)).filter(Boolean).map(({id:T,name:E,category:O,note:R})=>({id:T,name:E,category:O,note:R})),C=p.items||[];if(JSON.stringify(y)!==JSON.stringify(C)){const T=Be(Ve,`sharedLists/${f.sharedListId}`);fi(T,{items:y,name:f.name,icon:f.icon})}})},[t,e==null?void 0:e.lists,e==null?void 0:e.itemLibrary,i]);const c=D.useCallback(async(f,p,y)=>{if(!t)return null;const C=(Array.isArray(f.items)?f.items:[]).map(B=>p.find(ee=>ee.id===B)).filter(Boolean).map(({id:B,name:ee,category:ce,note:Zn})=>({id:B,name:ee,category:ce,note:Zn})),N={};y.forEach(B=>{N[pi(B)]=!0});const E=CT(Be(Ve,"sharedLists")).key,O={owner:t.uid,ownerEmail:t.email,ownerName:t.displayName||t.email,name:f.name,icon:f.icon,items:C,checkedItems:Array.isArray(f.checkedItems)?f.checkedItems:[],sharedWith:N},R={};return R[`sharedLists/${E}`]=O,y.forEach(B=>{R[`sharedIndex/${pi(B)}/${E}`]=!0}),await fi(Be(Ve),R),E},[t]),h=D.useCallback(async(f,p)=>{const y=pi(p),C={};C[`sharedLists/${f}/sharedWith/${y}`]=!0,C[`sharedIndex/${y}/${f}`]=!0,await fi(Be(Ve),C)},[]),g=D.useCallback(async(f,p)=>{const y=pi(p),C={};C[`sharedLists/${f}/sharedWith/${y}`]=null,C[`sharedIndex/${y}/${f}`]=null,await fi(Be(Ve),C)},[]),v=D.useCallback(async f=>{const p=i[f];if(!p)return;const y={};y[`sharedLists/${f}`]=null;const C=p.sharedWith||{};Object.keys(C).forEach(N=>{y[`sharedIndex/${N}/${f}`]=null}),await fi(Be(Ve),y)},[i]),w=D.useCallback(async(f,p)=>{const y=n[f]||i[f];if(!y)return;const C=Array.isArray(y.checkedItems)?y.checkedItems:[],T=C.includes(p)?C.filter(O=>O!==p):[...C,p],E=Be(Ve,`sharedLists/${f}/checkedItems`);await lo(E,T)},[n,i]),S=D.useCallback(async f=>{const p=Be(Ve,`sharedLists/${f}/checkedItems`);await lo(p,[])},[]),m=D.useCallback(async(f,p)=>{const y=Be(Ve,`sharedLists/${f}/checkedItems`);await lo(y,p)},[]);return{sharedWithMe:n,sharedByMe:i,shareList:c,addSharedUser:h,removeSharedUser:g,unshareList:v,toggleSharedCheck:w,resetSharedChecks:S,checkAllShared:m}}const $T="modulepreload",GT=function(t){return"/packing-checklist/"+t},Xf={},KT=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(a=>{if(a=GT(a),a in Xf)return;Xf[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":$T,u||(c.as="script"),c.crossOrigin="",c.href=a,l&&c.setAttribute("nonce",l),document.head.appendChild(c),u)return new Promise((h,g)=>{c.addEventListener("load",h),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function QT(){const[t,e]=D.useState(!1),[n,r]=D.useState(null);return D.useEffect(()=>{KT(async()=>{const{registerSW:o}=await import("./virtual_pwa-register-CLZVzF4Y.js");return{registerSW:o}},[]).then(({registerSW:o})=>{const l=o({onNeedRefresh(){e(!0)},onOfflineReady(){console.log("PWA: 離線模式已就緒")}});r(()=>l)}).catch(()=>{})},[]),{needRefresh:t,refresh:()=>{n&&n(!0)},dismiss:()=>{e(!1)}}}function qT({user:t,syncStatus:e,onLogin:n,onLogout:r}){const i={offline:{icon:"○",color:"text-gray-400",title:"離線模式"},syncing:{icon:"↻",color:"text-yellow-300 animate-spin",title:"同步中..."},synced:{icon:"●",color:"text-green-400",title:"已同步"},error:{icon:"!",color:"text-red-400",title:"同步失敗"}},s=i[e]||i.offline;return t?_.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 bg-gray-600 rounded-lg",children:[t.photoURL&&_.jsx("img",{src:t.photoURL,alt:"",className:"w-6 h-6 rounded-full",onError:o=>o.target.style.display="none"}),_.jsx("span",{className:"text-sm max-w-[80px] truncate",children:t.displayName||t.email}),_.jsx("span",{className:s.color,title:s.title,children:s.icon}),_.jsx("button",{onClick:r,className:"text-xs text-gray-300 hover:text-white ml-1",children:"登出"})]}):_.jsxs("button",{onClick:n,className:"flex items-center gap-2 px-3 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100",children:[_.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",children:[_.jsx("path",{fill:"currentColor",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),_.jsx("path",{fill:"currentColor",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),_.jsx("path",{fill:"currentColor",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"}),_.jsx("path",{fill:"currentColor",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),"登入"]})}function YT({data:t,user:e,syncStatus:n,onLogin:r,onLogout:i,onNavigate:s,onSaveData:o,shared:l,activeSharedListId:a}){var Ss,er,tr;const[u,d]=D.useState([]),c=a&&((Ss=l==null?void 0:l.sharedWithMe)==null?void 0:Ss[a]),h=a&&((er=l==null?void 0:l.sharedByMe)==null?void 0:er[a]),g=c?"shared-with-me":h?"own-shared":"local",v=c?l.sharedWithMe[a]:h?l.sharedByMe[a]:null,w=(tr=t.lists)==null?void 0:tr.find(I=>I.id===t.activeListId),S=w?{...w,items:Array.isArray(w.items)?w.items:[],checkedItems:Array.isArray(w.checkedItems)?w.checkedItems:[]}:null;let m=[],f=[],p="",y="",C="";g==="shared-with-me"&&v?(m=(v.items||[]).filter(Boolean),f=v.checkedItems||[],p=v.name||"清單",y=v.icon||"📋",C=v.ownerName||v.ownerEmail||""):g==="own-shared"&&S&&v?(m=S.items.map(I=>{var P;return(P=t.itemLibrary)==null?void 0:P.find(L=>L.id===I)}).filter(Boolean),f=v.checkedItems||[],p=S.name||"清單",y=S.icon||"📋"):(m=S?S.items.map(I=>{var P;return(P=t.itemLibrary)==null?void 0:P.find(L=>L.id===I)}).filter(Boolean):[],f=(S==null?void 0:S.checkedItems)||[],p=(S==null?void 0:S.name)||"清單",y=(S==null?void 0:S.icon)||"📋");const N=f.length,T=m.length,E=T>0&&N===T,O=T>0?N/T*100:0,R=I=>{if(g==="shared-with-me"||g==="own-shared")l.toggleSharedCheck(a,I);else{const P={...t,lists:t.lists.map(L=>{if(L.id!==t.activeListId)return L;const H=Array.isArray(L.checkedItems)?L.checkedItems:[],ie=H.includes(I);return{...L,checkedItems:ie?H.filter(nr=>nr!==I):[...H,I]}})};o(P)}},B=()=>{if(g==="shared-with-me"||g==="own-shared")l.resetSharedChecks(a);else{const I={...t,lists:t.lists.map(P=>P.id===t.activeListId?{...P,checkedItems:[]}:P)};o(I)}},ee=()=>{if(g==="shared-with-me"||g==="own-shared"){const I=m.map(P=>P.id);l.checkAllShared(a,I)}else{if(!S)return;const I={...t,lists:t.lists.map(P=>P.id===t.activeListId?{...P,checkedItems:[...S.items]}:P)};o(I)}},ce=I=>{d(P=>P.includes(I)?P.filter(L=>L!==I):[...P,I])},Zn=()=>{s("lists",{sharedListId:null})};return _.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsxs("div",{className:"bg-gray-700 text-white px-4 py-3 safe-top",children:[_.jsxs("div",{className:"flex items-center justify-between mb-3",children:[_.jsxs("div",{className:"text-sm text-gray-300",children:["打包清單",g==="shared-with-me"&&C&&_.jsxs("span",{className:"ml-2 text-blue-300",children:["來自 ",C]}),g==="own-shared"&&_.jsx("span",{className:"ml-2 text-green-300",children:"已分享"})]}),_.jsx(qT,{user:e,syncStatus:n,onLogin:r,onLogout:i})]}),_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("button",{onClick:Zn,className:"p-2 -ml-2 rounded-lg hover:bg-gray-600",children:_.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})}),_.jsx("div",{className:"text-center",children:_.jsxs("div",{className:"text-lg font-bold flex items-center justify-center",children:[_.jsx("span",{className:"mr-2",children:y}),p]})}),g==="shared-with-me"?_.jsx("div",{className:"p-2 -mr-2 w-10"}):_.jsx("button",{onClick:()=>s("addItems"),className:"p-2 -mr-2 rounded-lg hover:bg-gray-600",children:_.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})]}),T>0&&_.jsxs("div",{className:"mt-3",children:[_.jsxs("div",{className:"flex justify-between text-xs text-gray-300 mb-1",children:[_.jsx("span",{children:"完成進度"}),_.jsxs("span",{children:[N,"/",T]})]}),_.jsx("div",{className:"h-2 bg-gray-600 rounded-full overflow-hidden",children:_.jsx("div",{className:"h-full bg-white transition-all duration-300",style:{width:`${O}%`}})})]})]}),_.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:m.length===0?_.jsxs("div",{className:"text-center py-16 text-gray-400",children:[_.jsx("div",{className:"text-5xl mb-4",children:"📭"}),_.jsx("div",{className:"text-lg mb-2",children:"清單是空的"}),g!=="shared-with-me"&&_.jsx("button",{onClick:()=>s("addItems"),className:"text-gray-500 underline",children:"從物品庫加入物品"})]}):_.jsx("div",{className:"space-y-2",children:m.map(I=>{const P=f.includes(I.id),L=I.note&&I.note.trim(),H=u.includes(I.id);return _.jsxs("div",{className:"group",children:[_.jsxs("div",{onClick:()=>R(I.id),className:`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 transition-all cursor-pointer
                      ${P?"bg-gray-50":""} ${H?"rounded-b-none":""}`,children:[_.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0 transition-colors
                      ${P?"border-gray-600 bg-gray-600":"border-gray-300"}`,children:P&&_.jsx("svg",{className:"w-4 h-4 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),_.jsxs("div",{className:"flex-1 min-w-0",children:[_.jsx("div",{className:`${P?"line-through text-gray-400":"text-gray-800"} text-lg`,children:I.name}),_.jsx("div",{className:"text-xs text-gray-400",children:I.category})]}),L&&_.jsx("button",{onClick:ie=>{ie.stopPropagation(),ce(I.id)},className:`p-2 rounded-lg ${H?"bg-gray-200 text-gray-600":"text-gray-400"}`,children:_.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})})})]}),L&&H&&_.jsx("div",{className:"px-4 py-3 bg-gray-50 border-t border-gray-100 rounded-b-xl",children:_.jsxs("div",{className:"flex items-start text-sm text-gray-600",children:[_.jsx("span",{className:"mr-2",children:"📝"}),_.jsx("span",{children:I.note})]})})]},I.id)})})}),m.length>0&&_.jsx("div",{className:"p-4 bg-white border-t border-gray-200 safe-bottom",children:_.jsxs("div",{className:"flex gap-3",children:[_.jsx("button",{onClick:B,className:"flex-1 py-3 text-gray-600 border border-gray-300 rounded-xl font-medium active:bg-gray-100",children:"重設"}),_.jsx("button",{onClick:ee,disabled:E,className:`flex-1 py-3 rounded-xl font-medium transition-colors
                ${E?"bg-gray-200 text-gray-400":"bg-gray-700 text-white active:bg-gray-800"}`,children:E?"✓ 準備完成！":"全部確認"})]})})]})}function XT({sharedData:t,onAddUser:e,onRemoveUser:n,onUnshare:r,onClose:i}){const[s,o]=D.useState(""),[l,a]=D.useState(""),u=t!=null&&t.sharedWith?Object.keys(t.sharedWith).map(zT):[],d=g=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g),c=()=>{const g=s.trim().toLowerCase();if(g){if(!d(g)){a("請輸入有效的 Email");return}if(u.includes(g)){a("已經分享給此帳號");return}a(""),e(g),o("")}},h=g=>{g.key==="Enter"&&c()};return _.jsxs("div",{className:"fixed inset-0 z-50 flex items-end justify-center",children:[_.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:i}),_.jsx("div",{className:"relative w-full max-w-lg bg-white rounded-t-2xl animate-slide-up safe-bottom",children:_.jsxs("div",{className:"p-4",children:[_.jsx("div",{className:"w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"}),_.jsx("div",{className:"text-lg font-bold text-gray-800 mb-4",children:"分享清單"}),_.jsxs("div",{className:"flex gap-2 mb-2",children:[_.jsx("input",{type:"email",value:s,onChange:g=>{o(g.target.value),a("")},onKeyDown:h,placeholder:"輸入 Gmail 帳號...",className:"flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"}),_.jsx("button",{onClick:c,className:"px-5 py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800",children:"新增"})]}),l&&_.jsx("div",{className:"text-sm text-red-500 mb-3",children:l}),u.length>0&&_.jsxs("div",{className:"mt-4",children:[_.jsx("div",{className:"text-sm text-gray-500 mb-2",children:"已分享給"}),_.jsx("div",{className:"space-y-2",children:u.map(g=>_.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-xl",children:[_.jsx("span",{className:"text-gray-700 text-sm truncate flex-1",children:g}),_.jsx("button",{onClick:()=>n(g),className:"ml-2 p-1 text-gray-400 hover:text-red-500",children:_.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]},g))})]}),u.length>0&&_.jsx("button",{onClick:r,className:"w-full mt-4 py-3 border border-red-300 text-red-500 rounded-xl font-medium active:bg-red-50",children:"停止分享"}),_.jsx("button",{onClick:i,className:"w-full mt-3 py-3 text-gray-500 font-medium",children:"關閉"})]})})]})}function JT({data:t,user:e,onNavigate:n,onSaveData:r,shared:i}){var T;const[s,o]=D.useState(""),[l,a]=D.useState("📋"),[u,d]=D.useState(null),[c,h]=D.useState(null),g=(E,O)=>{const R={...t,activeListId:E};r(R),n("checklist",{sharedListId:O||null})},v=E=>{n("checklist",{sharedListId:E})},w=()=>{if(!s.trim())return;const E={id:Date.now(),name:s.trim(),icon:l,items:[],checkedItems:[]},O={...t,lists:[...t.lists,E],activeListId:E.id};r(O),o(""),a("📋"),n("checklist",{sharedListId:null})},S=async(E,O)=>{if(O.stopPropagation(),t.lists.length<=1||!confirm("確定刪除此清單？"))return;const R=t.lists.find(ce=>ce.id===E);if(R!=null&&R.sharedListId&&i)try{await i.unshareList(R.sharedListId)}catch(ce){console.error("清理分享資料失敗",ce)}const B=t.lists.filter(ce=>ce.id!==E),ee={...t,lists:B,activeListId:t.activeListId===E?B[0].id:t.activeListId};r(ee)},m=(E,O)=>{O.stopPropagation(),d(E.id),h(E.sharedListId||null)},f=async E=>{const O=t.lists.find(R=>R.id===u);if(!(!O||!i))try{const R=await i.shareList(O,t.itemLibrary,[E]),B={...t,lists:t.lists.map(ee=>ee.id===u?{...ee,sharedListId:R}:ee)};r(B),h(R)}catch(R){console.error("分享失敗",R),alert("分享失敗："+R.message)}},p=async E=>{if(c)try{await i.addSharedUser(c,E)}catch(O){console.error("新增分享對象失敗",O)}else await f(E)},y=async E=>{if(!(!c||!i))try{await i.removeSharedUser(c,E)}catch(O){console.error("移除分享對象失敗",O)}},C=async()=>{if(!(!c||!i)&&confirm("確定停止分享？所有被分享者將無法看到此清單。"))try{await i.unshareList(c);const E={...t,lists:t.lists.map(O=>O.id===u?{...O,sharedListId:void 0}:O)};r(E),d(null),h(null)}catch(E){console.error("停止分享失敗",E)}},N=i?Object.entries(i.sharedWithMe):[];return _.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx("div",{className:"bg-gray-700 text-white px-4 py-3",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("button",{onClick:()=>n("checklist",{sharedListId:null}),className:"p-2 -ml-2 rounded-lg hover:bg-gray-600",children:_.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),_.jsx("div",{className:"text-lg font-bold",children:"我的清單"}),_.jsx("button",{onClick:()=>n("library"),className:"p-2 -mr-2 rounded-lg hover:bg-gray-600",children:_.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"})})})]})}),_.jsxs("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:[_.jsx("div",{className:"space-y-2",children:(t.lists||[]).map(E=>{const O=(E.items||[]).length,R=(E.checkedItems||[]).length,B=E.id===t.activeListId,ee=!!E.sharedListId;return _.jsxs("div",{onClick:()=>g(E.id,E.sharedListId),className:`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 cursor-pointer
                  ${B?"ring-2 ring-gray-400":""}`,children:[_.jsx("span",{className:"text-2xl mr-3",children:E.icon}),_.jsxs("div",{className:"flex-1",children:[_.jsxs("div",{className:"font-medium text-gray-800 flex items-center",children:[E.name,ee&&_.jsx("span",{className:"ml-2 text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full",children:"已分享"})]}),_.jsxs("div",{className:"text-sm text-gray-400",children:[R,"/",O," 已確認"]})]}),e&&_.jsx("button",{onClick:ce=>m(E,ce),className:`p-2 mr-1 rounded-lg ${ee?"text-green-500":"text-gray-400"} hover:bg-gray-100`,children:_.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})})}),t.lists.length>1&&_.jsx("button",{onClick:ce=>S(E.id,ce),className:"p-2 text-gray-400 hover:text-red-500",children:_.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},E.id)})}),N.length>0&&_.jsxs("div",{className:"mt-6",children:[_.jsx("div",{className:"text-sm text-gray-500 mb-2 px-1",children:"與我分享的清單"}),_.jsx("div",{className:"space-y-2",children:N.map(([E,O])=>{const R=(O.items||[]).length,B=(O.checkedItems||[]).length;return _.jsxs("div",{onClick:()=>v(E),className:"flex items-center p-4 bg-blue-50 rounded-xl shadow-sm active:bg-blue-100 cursor-pointer border border-blue-100",children:[_.jsx("span",{className:"text-2xl mr-3",children:O.icon||"📋"}),_.jsxs("div",{className:"flex-1",children:[_.jsx("div",{className:"font-medium text-gray-800",children:O.name}),_.jsxs("div",{className:"text-sm text-gray-400",children:[B,"/",R," 已確認",_.jsxs("span",{className:"ml-2 text-blue-400",children:["來自 ",O.ownerName||O.ownerEmail]})]})]})]},E)})})]}),_.jsxs("div",{className:"mt-4 p-4 bg-white rounded-xl shadow-sm",children:[_.jsx("div",{className:"text-sm text-gray-500 mb-3",children:"新增清單"}),_.jsx("div",{className:"flex gap-1 mb-3 flex-wrap",children:UT.map(E=>_.jsx("button",{onClick:()=>a(E),className:`w-10 h-10 rounded-lg text-xl hover:bg-gray-100
                  ${l===E?"bg-gray-200":""}`,children:E},E))}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("input",{type:"text",value:s,onChange:E=>o(E.target.value),placeholder:"清單名稱...",className:"flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-500"}),_.jsx("button",{onClick:w,className:"px-6 py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800",children:"建立"})]})]})]}),_.jsx("div",{className:"p-4 bg-white border-t border-gray-200 safe-bottom",children:_.jsx("button",{onClick:()=>n("library"),className:"w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium active:bg-gray-50",children:"管理物品庫"})}),u!==null&&_.jsx(XT,{sharedData:c&&((T=i==null?void 0:i.sharedByMe)==null?void 0:T[c])||null,onAddUser:p,onRemoveUser:y,onUnshare:C,onClose:()=>{d(null),h(null)}})]})}function ZT({data:t,onNavigate:e,onSaveData:n}){const[r,i]=D.useState(""),[s,o]=D.useState(Rn[0]),[l,a]=D.useState(""),[u,d]=D.useState(null),c={};Rn.forEach(S=>{c[S]=[]}),(t.itemLibrary||[]).forEach(S=>{c[S.category]&&c[S.category].push(S)});const h=()=>{if(!r.trim())return;const S={id:Date.now(),name:r.trim(),category:s,note:l.trim()},m={...t,itemLibrary:[...t.itemLibrary,S]};n(m),i(""),a("")},g=(S,m,f,p)=>{const y={...t,itemLibrary:t.itemLibrary.map(C=>C.id===S?{...C,name:m,category:f,note:p}:C)};n(y),d(null)},v=S=>{if(!confirm("確定刪除？"))return;const m={...t,itemLibrary:t.itemLibrary.filter(f=>f.id!==S),lists:t.lists.map(f=>({...f,items:(f.items||[]).filter(p=>p!==S),checkedItems:(f.checkedItems||[]).filter(p=>p!==S)}))};n(m)},w=u?t.itemLibrary.find(S=>S.id===u):null;return _.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsx("div",{className:"bg-gray-700 text-white px-4 py-3",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("button",{onClick:()=>e("lists"),className:"p-2 -ml-2 rounded-lg hover:bg-gray-600",children:_.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),_.jsx("div",{className:"text-lg font-bold",children:"📚 物品庫"}),_.jsx("div",{className:"w-10"})]})}),_.jsxs("div",{className:"p-4 bg-gray-50 border-b border-gray-200",children:[_.jsx("div",{className:"text-sm text-gray-500 mb-2",children:"新增物品"}),_.jsx("input",{type:"text",value:r,onChange:S=>i(S.target.value),placeholder:"物品名稱...",className:"w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-500"}),_.jsx("select",{value:s,onChange:S=>o(S.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-gray-500",children:Rn.map(S=>_.jsx("option",{value:S,children:S},S))}),_.jsx("input",{type:"text",value:l,onChange:S=>a(S.target.value),placeholder:"備註（選填）：存放位置、提醒事項...",className:"w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 text-gray-600 focus:outline-none focus:border-gray-500"}),_.jsx("button",{onClick:h,className:"w-full py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800",children:"+ 新增物品"})]}),_.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:Rn.map(S=>{const m=c[S];return m.length===0?null:_.jsxs("div",{className:"mb-4",children:[_.jsx("div",{className:"text-sm text-gray-500 font-medium mb-2",children:S}),_.jsx("div",{className:"space-y-2",children:m.map(f=>_.jsxs("div",{className:"p-3 bg-white rounded-xl shadow-sm",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("span",{className:"font-medium text-gray-800",children:f.name}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("button",{onClick:()=>d(f.id),className:"text-sm text-gray-400 px-2",children:"編輯"}),_.jsx("button",{onClick:()=>v(f.id),className:"text-sm text-red-400 px-2",children:"刪除"})]})]}),f.note&&_.jsxs("div",{className:"text-sm text-gray-400 mt-1",children:["📝 ",f.note]})]},f.id))})]},S)})}),w&&_.jsx(ex,{item:w,categories:Rn,onSave:g,onClose:()=>d(null)})]})}function ex({item:t,categories:e,onSave:n,onClose:r}){const[i,s]=D.useState(t.name),[o,l]=D.useState(t.category),[a,u]=D.useState(t.note||"");return _.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50",onClick:r,children:_.jsxs("div",{className:"bg-white w-full max-w-lg rounded-t-2xl p-6 safe-bottom",onClick:d=>d.stopPropagation(),children:[_.jsx("div",{className:"text-lg font-bold mb-4",children:"編輯物品"}),_.jsx("input",{type:"text",value:i,onChange:d=>s(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 focus:outline-none focus:border-gray-500"}),_.jsx("select",{value:o,onChange:d=>l(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-xl mb-2 bg-white focus:outline-none focus:border-gray-500",children:e.map(d=>_.jsx("option",{value:d,children:d},d))}),_.jsx("input",{type:"text",value:a,onChange:d=>u(d.target.value),placeholder:"備註（選填）",className:"w-full px-4 py-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:border-gray-500"}),_.jsxs("div",{className:"flex gap-3",children:[_.jsx("button",{onClick:r,className:"flex-1 py-3 border border-gray-300 rounded-xl font-medium",children:"取消"}),_.jsx("button",{onClick:()=>n(t.id,i,o,a),className:"flex-1 py-3 bg-gray-700 text-white rounded-xl font-medium",children:"儲存"})]})]})})}function tx({data:t,onNavigate:e,onSaveData:n}){var l,a;const r=(l=t.lists)==null?void 0:l.find(u=>u.id===t.activeListId),i=r?{...r,items:Array.isArray(r.items)?r.items:[],checkedItems:Array.isArray(r.checkedItems)?r.checkedItems:[]}:null,s={};Rn.forEach(u=>{s[u]=[]}),(t.itemLibrary||[]).forEach(u=>{s[u.category]&&s[u.category].push(u)});const o=u=>{const d={...t,lists:t.lists.map(c=>{if(c.id!==t.activeListId)return c;const h=Array.isArray(c.items)?c.items:[],g=Array.isArray(c.checkedItems)?c.checkedItems:[],v=h.includes(u);return{...c,items:v?h.filter(w=>w!==u):[...h,u],checkedItems:v?g.filter(w=>w!==u):g}})};n(d)};return _.jsxs("div",{className:"flex flex-col h-screen",children:[_.jsxs("div",{className:"bg-gray-700 text-white px-4 py-3",children:[_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsx("button",{onClick:()=>e("checklist"),className:"p-2 -ml-2 rounded-lg hover:bg-gray-600",children:_.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),_.jsx("div",{className:"text-lg font-bold",children:"加入物品"}),_.jsx("div",{className:"w-10"})]}),_.jsxs("div",{className:"text-sm text-gray-300 mt-1",children:["選擇要加入「",i==null?void 0:i.name,"」的物品"]})]}),_.jsx("div",{className:"flex-1 overflow-y-auto p-4 no-scrollbar",children:Rn.map(u=>{const d=s[u];return d.length===0?null:_.jsxs("div",{className:"mb-4",children:[_.jsx("div",{className:"text-sm text-gray-500 font-medium mb-2",children:u}),_.jsx("div",{className:"space-y-2",children:d.map(c=>{const h=i==null?void 0:i.items.includes(c.id);return _.jsxs("div",{onClick:()=>o(c.id),className:`flex items-center p-4 bg-white rounded-xl shadow-sm active:bg-gray-50 cursor-pointer
                        ${h?"ring-2 ring-gray-400":""}`,children:[_.jsx("div",{className:`w-6 h-6 border-2 rounded-full mr-4 flex items-center justify-center flex-shrink-0
                        ${h?"border-gray-600 bg-gray-600":"border-gray-300"}`,children:h&&_.jsx("svg",{className:"w-4 h-4 text-white",fill:"currentColor",viewBox:"0 0 20 20",children:_.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),_.jsxs("div",{className:"flex-1",children:[_.jsx("div",{className:h?"text-gray-800 font-medium":"text-gray-600",children:c.name}),c.note&&_.jsxs("div",{className:"text-xs text-gray-400 mt-0.5",children:["📝 ",c.note]})]})]},c.id)})})]},u)})}),_.jsxs("div",{className:"p-4 bg-white border-t border-gray-200 safe-bottom",children:[_.jsxs("div",{className:"text-center text-gray-500 mb-3",children:["已選擇 ",((a=i==null?void 0:i.items)==null?void 0:a.length)||0," 個物品"]}),_.jsx("button",{onClick:()=>e("checklist"),className:"w-full py-3 bg-gray-700 text-white rounded-xl font-medium active:bg-gray-800",children:"完成"})]})]})}function nx({onRefresh:t,onDismiss:e}){return _.jsx("div",{className:"fixed bottom-20 left-4 right-4 bg-gray-800 text-white rounded-xl shadow-lg p-4 z-50 animate-slide-up",children:_.jsxs("div",{className:"flex items-center justify-between",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("span",{className:"text-2xl",children:"🆕"}),_.jsxs("div",{children:[_.jsx("div",{className:"font-medium",children:"有新版本可用"}),_.jsx("div",{className:"text-sm text-gray-300",children:"點擊更新以取得最新功能"})]})]}),_.jsxs("div",{className:"flex gap-2",children:[_.jsx("button",{onClick:e,className:"px-3 py-2 text-gray-300 hover:text-white text-sm",children:"稍後"}),_.jsx("button",{onClick:t,className:"px-4 py-2 bg-white text-gray-800 rounded-lg font-medium text-sm",children:"更新"})]})]})})}function rx(){const[t,e]=D.useState("checklist"),[n,r]=D.useState(null),i=BT(),{user:s,data:o,syncStatus:l,saveData:a,handleLogin:u,handleLogout:d}=VT(i),c=HT(s,o),{needRefresh:h,refresh:g,dismiss:v}=QT(),w=(S,m)=>{(m==null?void 0:m.sharedListId)!==void 0&&r(m.sharedListId),e(S)};return _.jsxs(_.Fragment,{children:[t==="checklist"&&_.jsx(YT,{data:o,user:s,syncStatus:l,onLogin:u,onLogout:d,onNavigate:w,onSaveData:a,shared:c,activeSharedListId:n}),t==="lists"&&_.jsx(JT,{data:o,user:s,onNavigate:w,onSaveData:a,shared:c}),t==="library"&&_.jsx(ZT,{data:o,onNavigate:w,onSaveData:a}),t==="addItems"&&_.jsx(tx,{data:o,onNavigate:w,onSaveData:a}),h&&_.jsx(nx,{onRefresh:g,onDismiss:v})]})}Sa.createRoot(document.getElementById("root")).render(_.jsx(Av.StrictMode,{children:_.jsx(rx,{})}));export{KT as _};
