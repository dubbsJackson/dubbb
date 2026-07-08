var DE=Object.defineProperty;var LE=(s,e,t)=>e in s?DE(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ut=(s,e,t)=>LE(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function NE(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var gp={exports:{}},xu={},_p={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function IE(){if(Yv)return Lt;Yv=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function x(k,Z,Be){this.props=k,this.context=Z,this.refs=E,this.updater=Be||_}x.prototype.isReactComponent={},x.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},x.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=x.prototype;function b(k,Z,Be){this.props=k,this.context=Z,this.refs=E,this.updater=Be||_}var L=b.prototype=new y;L.constructor=b,M(L,x.prototype),L.isPureReactComponent=!0;var T=Array.isArray,R=Object.prototype.hasOwnProperty,D={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function w(k,Z,Be){var ze,Ve={},se=null,ve=null;if(Z!=null)for(ze in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(se=""+Z.key),Z)R.call(Z,ze)&&!P.hasOwnProperty(ze)&&(Ve[ze]=Z[ze]);var he=arguments.length-2;if(he===1)Ve.children=Be;else if(1<he){for(var Ne=Array(he),je=0;je<he;je++)Ne[je]=arguments[je+2];Ve.children=Ne}if(k&&k.defaultProps)for(ze in he=k.defaultProps,he)Ve[ze]===void 0&&(Ve[ze]=he[ze]);return{$$typeof:s,type:k,key:se,ref:ve,props:Ve,_owner:D.current}}function N(k,Z){return{$$typeof:s,type:k.type,key:Z,ref:k.ref,props:k.props,_owner:k._owner}}function F(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Be){return Z[Be]})}var B=/\/+/g;function Q(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):Z.toString(36)}function ee(k,Z,Be,ze,Ve){var se=typeof k;(se==="undefined"||se==="boolean")&&(k=null);var ve=!1;if(k===null)ve=!0;else switch(se){case"string":case"number":ve=!0;break;case"object":switch(k.$$typeof){case s:case e:ve=!0}}if(ve)return ve=k,Ve=Ve(ve),k=ze===""?"."+Q(ve,0):ze,T(Ve)?(Be="",k!=null&&(Be=k.replace(B,"$&/")+"/"),ee(Ve,Z,Be,"",function(je){return je})):Ve!=null&&(F(Ve)&&(Ve=N(Ve,Be+(!Ve.key||ve&&ve.key===Ve.key?"":(""+Ve.key).replace(B,"$&/")+"/")+k)),Z.push(Ve)),1;if(ve=0,ze=ze===""?".":ze+":",T(k))for(var he=0;he<k.length;he++){se=k[he];var Ne=ze+Q(se,he);ve+=ee(se,Z,Be,Ne,Ve)}else if(Ne=m(k),typeof Ne=="function")for(k=Ne.call(k),he=0;!(se=k.next()).done;)se=se.value,Ne=ze+Q(se,he++),ve+=ee(se,Z,Be,Ne,Ve);else if(se==="object")throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function Y(k,Z,Be){if(k==null)return k;var ze=[],Ve=0;return ee(k,ze,"","",function(se){return Z.call(Be,se,Ve++)}),ze}function J(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(Be){(k._status===0||k._status===-1)&&(k._status=1,k._result=Be)},function(Be){(k._status===0||k._status===-1)&&(k._status=2,k._result=Be)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var H={current:null},G={transition:null},te={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:G,ReactCurrentOwner:D};function U(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:Y,forEach:function(k,Z,Be){Y(k,function(){Z.apply(this,arguments)},Be)},count:function(k){var Z=0;return Y(k,function(){Z++}),Z},toArray:function(k){return Y(k,function(Z){return Z})||[]},only:function(k){if(!F(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Lt.Component=x,Lt.Fragment=t,Lt.Profiler=r,Lt.PureComponent=b,Lt.StrictMode=n,Lt.Suspense=d,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Lt.act=U,Lt.cloneElement=function(k,Z,Be){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ze=M({},k.props),Ve=k.key,se=k.ref,ve=k._owner;if(Z!=null){if(Z.ref!==void 0&&(se=Z.ref,ve=D.current),Z.key!==void 0&&(Ve=""+Z.key),k.type&&k.type.defaultProps)var he=k.type.defaultProps;for(Ne in Z)R.call(Z,Ne)&&!P.hasOwnProperty(Ne)&&(ze[Ne]=Z[Ne]===void 0&&he!==void 0?he[Ne]:Z[Ne])}var Ne=arguments.length-2;if(Ne===1)ze.children=Be;else if(1<Ne){he=Array(Ne);for(var je=0;je<Ne;je++)he[je]=arguments[je+2];ze.children=he}return{$$typeof:s,type:k.type,key:Ve,ref:se,props:ze,_owner:ve}},Lt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},Lt.createElement=w,Lt.createFactory=function(k){var Z=w.bind(null,k);return Z.type=k,Z},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(k){return{$$typeof:c,render:k}},Lt.isValidElement=F,Lt.lazy=function(k){return{$$typeof:p,_payload:{_status:-1,_result:k},_init:J}},Lt.memo=function(k,Z){return{$$typeof:h,type:k,compare:Z===void 0?null:Z}},Lt.startTransition=function(k){var Z=G.transition;G.transition={};try{k()}finally{G.transition=Z}},Lt.unstable_act=U,Lt.useCallback=function(k,Z){return H.current.useCallback(k,Z)},Lt.useContext=function(k){return H.current.useContext(k)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(k){return H.current.useDeferredValue(k)},Lt.useEffect=function(k,Z){return H.current.useEffect(k,Z)},Lt.useId=function(){return H.current.useId()},Lt.useImperativeHandle=function(k,Z,Be){return H.current.useImperativeHandle(k,Z,Be)},Lt.useInsertionEffect=function(k,Z){return H.current.useInsertionEffect(k,Z)},Lt.useLayoutEffect=function(k,Z){return H.current.useLayoutEffect(k,Z)},Lt.useMemo=function(k,Z){return H.current.useMemo(k,Z)},Lt.useReducer=function(k,Z,Be){return H.current.useReducer(k,Z,Be)},Lt.useRef=function(k){return H.current.useRef(k)},Lt.useState=function(k){return H.current.useState(k)},Lt.useSyncExternalStore=function(k,Z,Be){return H.current.useSyncExternalStore(k,Z,Be)},Lt.useTransition=function(){return H.current.useTransition()},Lt.version="18.3.1",Lt}var qv;function Ng(){return qv||(qv=1,_p.exports=IE()),_p.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function UE(){if($v)return xu;$v=1;var s=Ng(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,v={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)n.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:c,key:m,ref:_,props:v,_owner:r.current}}return xu.Fragment=t,xu.jsx=u,xu.jsxs=u,xu}var Kv;function FE(){return Kv||(Kv=1,gp.exports=UE()),gp.exports}var me=FE(),$i=Ng();const OE=NE($i);var gf={},vp={exports:{}},Gi={},xp={exports:{}},yp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function kE(){return jv||(jv=1,(function(s){function e(G,te){var U=G.length;G.push(te);e:for(;0<U;){var k=U-1>>>1,Z=G[k];if(0<r(Z,te))G[k]=te,G[U]=Z,U=k;else break e}}function t(G){return G.length===0?null:G[0]}function n(G){if(G.length===0)return null;var te=G[0],U=G.pop();if(U!==te){G[0]=U;e:for(var k=0,Z=G.length,Be=Z>>>1;k<Be;){var ze=2*(k+1)-1,Ve=G[ze],se=ze+1,ve=G[se];if(0>r(Ve,U))se<Z&&0>r(ve,Ve)?(G[k]=ve,G[se]=U,k=se):(G[k]=Ve,G[ze]=U,k=ze);else if(se<Z&&0>r(ve,U))G[k]=ve,G[se]=U,k=se;else break e}}return te}function r(G,te){var U=G.sortIndex-te.sortIndex;return U!==0?U:G.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var u=Date,c=u.now();s.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,v=null,m=3,_=!1,M=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(G){for(var te=t(h);te!==null;){if(te.callback===null)n(h);else if(te.startTime<=G)n(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function T(G){if(E=!1,L(G),!M)if(t(d)!==null)M=!0,J(R);else{var te=t(h);te!==null&&H(T,te.startTime-G)}}function R(G,te){M=!1,E&&(E=!1,y(w),w=-1),_=!0;var U=m;try{for(L(te),v=t(d);v!==null&&(!(v.expirationTime>te)||G&&!z());){var k=v.callback;if(typeof k=="function"){v.callback=null,m=v.priorityLevel;var Z=k(v.expirationTime<=te);te=s.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(d)&&n(d),L(te)}else n(d);v=t(d)}if(v!==null)var Be=!0;else{var ze=t(h);ze!==null&&H(T,ze.startTime-te),Be=!1}return Be}finally{v=null,m=U,_=!1}}var D=!1,P=null,w=-1,N=5,F=-1;function z(){return!(s.unstable_now()-F<N)}function B(){if(P!==null){var G=s.unstable_now();F=G;var te=!0;try{te=P(!0,G)}finally{te?Q():(D=!1,P=null)}}else D=!1}var Q;if(typeof b=="function")Q=function(){b(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Y=ee.port2;ee.port1.onmessage=B,Q=function(){Y.postMessage(null)}}else Q=function(){x(B,0)};function J(G){P=G,D||(D=!0,Q())}function H(G,te){w=x(function(){G(s.unstable_now())},te)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){M||_||(M=!0,J(R))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(G){switch(m){case 1:case 2:case 3:var te=3;break;default:te=m}var U=m;m=te;try{return G()}finally{m=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var U=m;m=G;try{return te()}finally{m=U}},s.unstable_scheduleCallback=function(G,te,U){var k=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?k+U:k):U=k,G){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=U+Z,G={id:p++,callback:te,priorityLevel:G,startTime:U,expirationTime:Z,sortIndex:-1},U>k?(G.sortIndex=U,e(h,G),t(d)===null&&G===t(h)&&(E?(y(w),w=-1):E=!0,H(T,U-k))):(G.sortIndex=Z,e(d,G),M||_||(M=!0,J(R))),G},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(G){var te=m;return function(){var U=m;m=te;try{return G.apply(this,arguments)}finally{m=U}}}})(yp)),yp}var Zv;function BE(){return Zv||(Zv=1,xp.exports=kE()),xp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function zE(){if(Qv)return Gi;Qv=1;var s=Ng(),e=BE();function t(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,r={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(r[i]=o,i=0;i<o.length;i++)n.add(o[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function m(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,o,l,f){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,o,l,f){if(o===null||typeof o>"u"||_(i,o,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function E(i,o,l,f,g,S,C){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=g,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=S,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new E(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(y,b);x[o]=new E(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(y,b);x[o]=new E(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(y,b);x[o]=new E(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function L(i,o,l,f){var g=x.hasOwnProperty(o)?x[o]:null;(g!==null?g.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,l,g,f)&&(l=null),f||g===null?m(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):g.mustUseProperty?i[g.propertyName]=l===null?g.type===3?!1:"":l:(o=g.attributeName,f=g.attributeNamespace,l===null?i.removeAttribute(o):(g=g.type,l=g===3||g===4&&l===!0?"":""+l,f?i.setAttributeNS(f,o,l):i.setAttribute(o,l))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),D=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),F=Symbol.for("react.provider"),z=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),G=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var U=Object.assign,k;function Z(i){if(k===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);k=o&&o[1]||""}return`
`+k+i}var Be=!1;function ze(i,o){if(!i||Be)return"";Be=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(fe){var f=fe}Reflect.construct(i,[],o)}else{try{o.call()}catch(fe){f=fe}i.call(o.prototype)}else{try{throw Error()}catch(fe){f=fe}i()}}catch(fe){if(fe&&f&&typeof fe.stack=="string"){for(var g=fe.stack.split(`
`),S=f.stack.split(`
`),C=g.length-1,V=S.length-1;1<=C&&0<=V&&g[C]!==S[V];)V--;for(;1<=C&&0<=V;C--,V--)if(g[C]!==S[V]){if(C!==1||V!==1)do if(C--,V--,0>V||g[C]!==S[V]){var X=`
`+g[C].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=C&&0<=V);break}}}finally{Be=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Z(i):""}function Ve(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=ze(i.type,!1),i;case 11:return i=ze(i.type.render,!1),i;case 1:return i=ze(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case D:return"Portal";case N:return"Profiler";case w:return"StrictMode";case Q:return"Suspense";case ee:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case z:return(i.displayName||"Context")+".Consumer";case F:return(i._context.displayName||"Context")+".Provider";case B:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Y:return o=i.displayName||null,o!==null?o:se(i.type)||"Memo";case J:o=i._payload,i=i._init;try{return se(i(o))}catch{}}return null}function ve(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(o);case 8:return o===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function he(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ne(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function je(i){var o=Ne(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),f=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var g=l.get,S=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return g.call(this)},set:function(C){f=""+C,S.call(this,C)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(C){f=""+C},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function Xe(i){i._valueTracker||(i._valueTracker=je(i))}function At(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),f="";return i&&(f=Ne(i)?i.checked?"true":"false":i.value),i=f,i!==l?(o.setValue(i),!0):!1}function Ge(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ct(i,o){var l=o.checked;return U({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function _t(i,o){var l=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;l=he(o.value!=null?o.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function gt(i,o){o=o.checked,o!=null&&L(i,"checked",o,!1)}function le(i,o){gt(i,o);var l=he(o.value),f=o.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Xt(i,o.type,l):o.hasOwnProperty("defaultValue")&&Xt(i,o.type,he(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function Ft(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Xt(i,o,l){(o!=="number"||Ge(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Yt=Array.isArray;function ft(i,o,l,f){if(i=i.options,o){o={};for(var g=0;g<l.length;g++)o["$"+l[g]]=!0;for(l=0;l<i.length;l++)g=o.hasOwnProperty("$"+i[l].value),i[l].selected!==g&&(i[l].selected=g),g&&f&&(i[l].defaultSelected=!0)}else{for(l=""+he(l),o=null,g=0;g<i.length;g++){if(i[g].value===l){i[g].selected=!0,f&&(i[g].defaultSelected=!0);return}o!==null||i[g].disabled||(o=i[g])}o!==null&&(o.selected=!0)}}function Vt(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function q(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Yt(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:he(l)}}function cn(i,o){var l=he(o.value),f=he(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function pt(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function O(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?O(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var j,re=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,f,g){MSApp.execUnsafeLocalFunction(function(){return i(o,l,f,g)})}:i})(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for(j=j||document.createElement("div"),j.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=j.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function de(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},we=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(i){we.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),Ae[o]=Ae[i]})});function pe(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||Ae.hasOwnProperty(i)&&Ae[i]?(""+o).trim():o+"px"}function ge(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var f=l.indexOf("--")===0,g=pe(l,o[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,g):i[l]=g}}var Fe=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(i,o){if(o){if(Fe[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function Ie(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function be(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var et=null,it=null,W=null;function Re(i){if(i=ru(i)){if(typeof et!="function")throw Error(t(280));var o=i.stateNode;o&&(o=Pc(o),et(i.stateNode,i.type,o))}}function _e(i){it?W?W.push(i):W=[i]:it=i}function Ue(){if(it){var i=it,o=W;if(W=it=null,Re(i),o)for(i=0;i<o.length;i++)Re(o[i])}}function ke(i,o){return i(o)}function xe(){}var Se=!1;function ye(i,o,l){if(Se)return i(o,l);Se=!0;try{return ke(i,o,l)}finally{Se=!1,(it!==null||W!==null)&&(xe(),Ue())}}function st(i,o){var l=i.stateNode;if(l===null)return null;var f=Pc(l);if(f===null)return null;l=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Me=!1;if(c)try{var ot={};Object.defineProperty(ot,"passive",{get:function(){Me=!0}}),window.addEventListener("test",ot,ot),window.removeEventListener("test",ot,ot)}catch{Me=!1}function Ze(i,o,l,f,g,S,C,V,X){var fe=Array.prototype.slice.call(arguments,3);try{o.apply(l,fe)}catch(Te){this.onError(Te)}}var mt=!1,fn=null,Et=!1,jt=null,Un={onError:function(i){mt=!0,fn=i}};function rn(i,o,l,f,g,S,C,V,X){mt=!1,fn=null,Ze.apply(Un,arguments)}function Zt(i,o,l,f,g,S,C,V,X){if(rn.apply(this,arguments),mt){if(mt){var fe=fn;mt=!1,fn=null}else throw Error(t(198));Et||(Et=!0,jt=fe)}}function wt(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function $n(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function Qt(i){if(wt(i)!==i)throw Error(t(188))}function Kn(i){var o=i.alternate;if(!o){if(o=wt(i),o===null)throw Error(t(188));return o!==i?null:i}for(var l=i,f=o;;){var g=l.return;if(g===null)break;var S=g.alternate;if(S===null){if(f=g.return,f!==null){l=f;continue}break}if(g.child===S.child){for(S=g.child;S;){if(S===l)return Qt(g),i;if(S===f)return Qt(g),o;S=S.sibling}throw Error(t(188))}if(l.return!==f.return)l=g,f=S;else{for(var C=!1,V=g.child;V;){if(V===l){C=!0,l=g,f=S;break}if(V===f){C=!0,f=g,l=S;break}V=V.sibling}if(!C){for(V=S.child;V;){if(V===l){C=!0,l=S,f=g;break}if(V===f){C=!0,f=S,l=g;break}V=V.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:o}function jn(i){return i=Kn(i),i!==null?xn(i):null}function xn(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=xn(i);if(o!==null)return o;i=i.sibling}return null}var dn=e.unstable_scheduleCallback,Cn=e.unstable_cancelCallback,yr=e.unstable_shouldYield,Ws=e.unstable_requestPaint,bt=e.unstable_now,yn=e.unstable_getCurrentPriorityLevel,di=e.unstable_ImmediatePriority,I=e.unstable_UserBlockingPriority,K=e.unstable_NormalPriority,ce=e.unstable_LowPriority,ne=e.unstable_IdlePriority,oe=null,De=null;function He(i){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(oe,i,void 0,(i.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:yt,tt=Math.log,lt=Math.LN2;function yt(i){return i>>>=0,i===0?32:31-(tt(i)/lt|0)|0}var St=64,rt=4194304;function Ht(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function ln(i,o){var l=i.pendingLanes;if(l===0)return 0;var f=0,g=i.suspendedLanes,S=i.pingedLanes,C=l&268435455;if(C!==0){var V=C&~g;V!==0?f=Ht(V):(S&=C,S!==0&&(f=Ht(S)))}else C=l&~g,C!==0?f=Ht(C):S!==0&&(f=Ht(S));if(f===0)return 0;if(o!==0&&o!==f&&(o&g)===0&&(g=f&-f,S=o&-o,g>=S||g===16&&(S&4194240)!==0))return o;if((f&4)!==0&&(f|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=f;0<o;)l=31-Oe(o),g=1<<l,f|=i[l],o&=~g;return f}function gn(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jt(i,o){for(var l=i.suspendedLanes,f=i.pingedLanes,g=i.expirationTimes,S=i.pendingLanes;0<S;){var C=31-Oe(S),V=1<<C,X=g[C];X===-1?((V&l)===0||(V&f)!==0)&&(g[C]=gn(V,o)):X<=o&&(i.expiredLanes|=V),S&=~V}}function Fn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ye(){var i=St;return St<<=1,(St&4194240)===0&&(St=64),i}function ri(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function Rt(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-Oe(o),i[o]=l}function Fi(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var g=31-Oe(l),S=1<<g;o[g]=0,f[g]=-1,i[g]=-1,l&=~S}}function Oi(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var f=31-Oe(l),g=1<<f;g&o|i[f]&o&&(i[f]|=o),l&=~g}}var Dt=0;function _s(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var $t,hn,Ur,en,Fr,jr=!1,Oo=[],Xs=null,Ys=null,qs=null,Hl=new Map,Gl=new Map,$s=[],JM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function R_(i,o){switch(i){case"focusin":case"focusout":Xs=null;break;case"dragenter":case"dragleave":Ys=null;break;case"mouseover":case"mouseout":qs=null;break;case"pointerover":case"pointerout":Hl.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(o.pointerId)}}function Wl(i,o,l,f,g,S){return i===null||i.nativeEvent!==S?(i={blockedOn:o,domEventName:l,eventSystemFlags:f,nativeEvent:S,targetContainers:[g]},o!==null&&(o=ru(o),o!==null&&hn(o)),i):(i.eventSystemFlags|=f,o=i.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),i)}function e1(i,o,l,f,g){switch(o){case"focusin":return Xs=Wl(Xs,i,o,l,f,g),!0;case"dragenter":return Ys=Wl(Ys,i,o,l,f,g),!0;case"mouseover":return qs=Wl(qs,i,o,l,f,g),!0;case"pointerover":var S=g.pointerId;return Hl.set(S,Wl(Hl.get(S)||null,i,o,l,f,g)),!0;case"gotpointercapture":return S=g.pointerId,Gl.set(S,Wl(Gl.get(S)||null,i,o,l,f,g)),!0}return!1}function P_(i){var o=ko(i.target);if(o!==null){var l=wt(o);if(l!==null){if(o=l.tag,o===13){if(o=$n(l),o!==null){i.blockedOn=o,Fr(i.priority,function(){Ur(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function gc(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=Gd(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Pe=f,l.target.dispatchEvent(f),Pe=null}else return o=ru(l),o!==null&&hn(o),i.blockedOn=l,!1;o.shift()}return!0}function D_(i,o,l){gc(i)&&l.delete(o)}function t1(){jr=!1,Xs!==null&&gc(Xs)&&(Xs=null),Ys!==null&&gc(Ys)&&(Ys=null),qs!==null&&gc(qs)&&(qs=null),Hl.forEach(D_),Gl.forEach(D_)}function Xl(i,o){i.blockedOn===o&&(i.blockedOn=null,jr||(jr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,t1)))}function Yl(i){function o(g){return Xl(g,i)}if(0<Oo.length){Xl(Oo[0],i);for(var l=1;l<Oo.length;l++){var f=Oo[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Xs!==null&&Xl(Xs,i),Ys!==null&&Xl(Ys,i),qs!==null&&Xl(qs,i),Hl.forEach(o),Gl.forEach(o),l=0;l<$s.length;l++)f=$s[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<$s.length&&(l=$s[0],l.blockedOn===null);)P_(l),l.blockedOn===null&&$s.shift()}var ba=T.ReactCurrentBatchConfig,_c=!0;function n1(i,o,l,f){var g=Dt,S=ba.transition;ba.transition=null;try{Dt=1,Hd(i,o,l,f)}finally{Dt=g,ba.transition=S}}function i1(i,o,l,f){var g=Dt,S=ba.transition;ba.transition=null;try{Dt=4,Hd(i,o,l,f)}finally{Dt=g,ba.transition=S}}function Hd(i,o,l,f){if(_c){var g=Gd(i,o,l,f);if(g===null)oh(i,o,f,vc,l),R_(i,f);else if(e1(g,i,o,l,f))f.stopPropagation();else if(R_(i,f),o&4&&-1<JM.indexOf(i)){for(;g!==null;){var S=ru(g);if(S!==null&&$t(S),S=Gd(i,o,l,f),S===null&&oh(i,o,f,vc,l),S===g)break;g=S}g!==null&&f.stopPropagation()}else oh(i,o,f,null,l)}}var vc=null;function Gd(i,o,l,f){if(vc=null,i=be(f),i=ko(i),i!==null)if(o=wt(i),o===null)i=null;else if(l=o.tag,l===13){if(i=$n(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return vc=i,null}function L_(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yn()){case di:return 1;case I:return 4;case K:case ce:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Ks=null,Wd=null,xc=null;function N_(){if(xc)return xc;var i,o=Wd,l=o.length,f,g="value"in Ks?Ks.value:Ks.textContent,S=g.length;for(i=0;i<l&&o[i]===g[i];i++);var C=l-i;for(f=1;f<=C&&o[l-f]===g[S-f];f++);return xc=g.slice(i,1<f?1-f:void 0)}function yc(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Sc(){return!0}function I_(){return!1}function tr(i){function o(l,f,g,S,C){this._reactName=l,this._targetInst=g,this.type=f,this.nativeEvent=S,this.target=C,this.currentTarget=null;for(var V in i)i.hasOwnProperty(V)&&(l=i[V],this[V]=l?l(S):S[V]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?Sc:I_,this.isPropagationStopped=I_,this}return U(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sc)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sc)},persist:function(){},isPersistent:Sc}),o}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=tr(Ca),ql=U({},Ca,{view:0,detail:0}),r1=tr(ql),Yd,qd,$l,Mc=U({},ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==$l&&($l&&i.type==="mousemove"?(Yd=i.screenX-$l.screenX,qd=i.screenY-$l.screenY):qd=Yd=0,$l=i),Yd)},movementY:function(i){return"movementY"in i?i.movementY:qd}}),U_=tr(Mc),s1=U({},Mc,{dataTransfer:0}),o1=tr(s1),a1=U({},ql,{relatedTarget:0}),$d=tr(a1),l1=U({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=tr(l1),c1=U({},Ca,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),f1=tr(c1),d1=U({},Ca,{data:0}),F_=tr(d1),h1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g1(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=m1[i])?!!o[i]:!1}function Kd(){return g1}var _1=U({},ql,{key:function(i){if(i.key){var o=h1[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=yc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?p1[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kd,charCode:function(i){return i.type==="keypress"?yc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?yc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),v1=tr(_1),x1=U({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O_=tr(x1),y1=U({},ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kd}),S1=tr(y1),M1=U({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),E1=tr(M1),w1=U({},Mc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),T1=tr(w1),A1=[9,13,27,32],jd=c&&"CompositionEvent"in window,Kl=null;c&&"documentMode"in document&&(Kl=document.documentMode);var b1=c&&"TextEvent"in window&&!Kl,k_=c&&(!jd||Kl&&8<Kl&&11>=Kl),B_=" ",z_=!1;function V_(i,o){switch(i){case"keyup":return A1.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ra=!1;function C1(i,o){switch(i){case"compositionend":return H_(o);case"keypress":return o.which!==32?null:(z_=!0,B_);case"textInput":return i=o.data,i===B_&&z_?null:i;default:return null}}function R1(i,o){if(Ra)return i==="compositionend"||!jd&&V_(i,o)?(i=N_(),xc=Wd=Ks=null,Ra=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return k_&&o.locale!=="ko"?null:o.data;default:return null}}var P1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G_(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!P1[i.type]:o==="textarea"}function W_(i,o,l,f){_e(f),o=bc(o,"onChange"),0<o.length&&(l=new Xd("onChange","change",null,l,f),i.push({event:l,listeners:o}))}var jl=null,Zl=null;function D1(i){l0(i,0)}function Ec(i){var o=Ia(i);if(At(o))return i}function L1(i,o){if(i==="change")return o}var X_=!1;if(c){var Zd;if(c){var Qd="oninput"in document;if(!Qd){var Y_=document.createElement("div");Y_.setAttribute("oninput","return;"),Qd=typeof Y_.oninput=="function"}Zd=Qd}else Zd=!1;X_=Zd&&(!document.documentMode||9<document.documentMode)}function q_(){jl&&(jl.detachEvent("onpropertychange",$_),Zl=jl=null)}function $_(i){if(i.propertyName==="value"&&Ec(Zl)){var o=[];W_(o,Zl,i,be(i)),ye(D1,o)}}function N1(i,o,l){i==="focusin"?(q_(),jl=o,Zl=l,jl.attachEvent("onpropertychange",$_)):i==="focusout"&&q_()}function I1(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ec(Zl)}function U1(i,o){if(i==="click")return Ec(o)}function F1(i,o){if(i==="input"||i==="change")return Ec(o)}function O1(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var Or=typeof Object.is=="function"?Object.is:O1;function Ql(i,o){if(Or(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),f=Object.keys(o);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var g=l[f];if(!d.call(o,g)||!Or(i[g],o[g]))return!1}return!0}function K_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function j_(i,o){var l=K_(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=o&&f>=o)return{node:l,offset:o-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=K_(l)}}function Z_(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?Z_(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function Q_(){for(var i=window,o=Ge();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Ge(i.document)}return o}function Jd(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function k1(i){var o=Q_(),l=i.focusedElem,f=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Z_(l.ownerDocument.documentElement,l)){if(f!==null&&Jd(l)){if(o=f.start,i=f.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var g=l.textContent.length,S=Math.min(f.start,g);f=f.end===void 0?S:Math.min(f.end,g),!i.extend&&S>f&&(g=f,f=S,S=g),g=j_(l,S);var C=j_(l,f);g&&C&&(i.rangeCount!==1||i.anchorNode!==g.node||i.anchorOffset!==g.offset||i.focusNode!==C.node||i.focusOffset!==C.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),i.removeAllRanges(),S>f?(i.addRange(o),i.extend(C.node,C.offset)):(o.setEnd(C.node,C.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var B1=c&&"documentMode"in document&&11>=document.documentMode,Pa=null,eh=null,Jl=null,th=!1;function J_(i,o,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;th||Pa==null||Pa!==Ge(f)||(f=Pa,"selectionStart"in f&&Jd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Jl&&Ql(Jl,f)||(Jl=f,f=bc(eh,"onSelect"),0<f.length&&(o=new Xd("onSelect","select",null,o,l),i.push({event:o,listeners:f}),o.target=Pa)))}function wc(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var Da={animationend:wc("Animation","AnimationEnd"),animationiteration:wc("Animation","AnimationIteration"),animationstart:wc("Animation","AnimationStart"),transitionend:wc("Transition","TransitionEnd")},nh={},e0={};c&&(e0=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function Tc(i){if(nh[i])return nh[i];if(!Da[i])return i;var o=Da[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in e0)return nh[i]=o[l];return i}var t0=Tc("animationend"),n0=Tc("animationiteration"),i0=Tc("animationstart"),r0=Tc("transitionend"),s0=new Map,o0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function js(i,o){s0.set(i,o),a(o,[i])}for(var ih=0;ih<o0.length;ih++){var rh=o0[ih],z1=rh.toLowerCase(),V1=rh[0].toUpperCase()+rh.slice(1);js(z1,"on"+V1)}js(t0,"onAnimationEnd"),js(n0,"onAnimationIteration"),js(i0,"onAnimationStart"),js("dblclick","onDoubleClick"),js("focusin","onFocus"),js("focusout","onBlur"),js(r0,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H1=new Set("cancel close invalid load scroll toggle".split(" ").concat(eu));function a0(i,o,l){var f=i.type||"unknown-event";i.currentTarget=l,Zt(f,o,void 0,i),i.currentTarget=null}function l0(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],g=f.event;f=f.listeners;e:{var S=void 0;if(o)for(var C=f.length-1;0<=C;C--){var V=f[C],X=V.instance,fe=V.currentTarget;if(V=V.listener,X!==S&&g.isPropagationStopped())break e;a0(g,V,fe),S=X}else for(C=0;C<f.length;C++){if(V=f[C],X=V.instance,fe=V.currentTarget,V=V.listener,X!==S&&g.isPropagationStopped())break e;a0(g,V,fe),S=X}}}if(Et)throw i=jt,Et=!1,jt=null,i}function pn(i,o){var l=o[dh];l===void 0&&(l=o[dh]=new Set);var f=i+"__bubble";l.has(f)||(u0(o,i,2,!1),l.add(f))}function sh(i,o,l){var f=0;o&&(f|=4),u0(l,i,f,o)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function tu(i){if(!i[Ac]){i[Ac]=!0,n.forEach(function(l){l!=="selectionchange"&&(H1.has(l)||sh(l,!1,i),sh(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Ac]||(o[Ac]=!0,sh("selectionchange",!1,o))}}function u0(i,o,l,f){switch(L_(o)){case 1:var g=n1;break;case 4:g=i1;break;default:g=Hd}l=g.bind(null,o,l,i),g=void 0,!Me||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),f?g!==void 0?i.addEventListener(o,l,{capture:!0,passive:g}):i.addEventListener(o,l,!0):g!==void 0?i.addEventListener(o,l,{passive:g}):i.addEventListener(o,l,!1)}function oh(i,o,l,f,g){var S=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var C=f.tag;if(C===3||C===4){var V=f.stateNode.containerInfo;if(V===g||V.nodeType===8&&V.parentNode===g)break;if(C===4)for(C=f.return;C!==null;){var X=C.tag;if((X===3||X===4)&&(X=C.stateNode.containerInfo,X===g||X.nodeType===8&&X.parentNode===g))return;C=C.return}for(;V!==null;){if(C=ko(V),C===null)return;if(X=C.tag,X===5||X===6){f=S=C;continue e}V=V.parentNode}}f=f.return}ye(function(){var fe=S,Te=be(l),Ce=[];e:{var Ee=s0.get(i);if(Ee!==void 0){var qe=Xd,Je=i;switch(i){case"keypress":if(yc(l)===0)break e;case"keydown":case"keyup":qe=v1;break;case"focusin":Je="focus",qe=$d;break;case"focusout":Je="blur",qe=$d;break;case"beforeblur":case"afterblur":qe=$d;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=U_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=o1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=S1;break;case t0:case n0:case i0:qe=u1;break;case r0:qe=E1;break;case"scroll":qe=r1;break;case"wheel":qe=T1;break;case"copy":case"cut":case"paste":qe=f1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=O_}var nt=(o&4)!==0,Dn=!nt&&i==="scroll",ae=nt?Ee!==null?Ee+"Capture":null:Ee;nt=[];for(var $=fe,ue;$!==null;){ue=$;var Le=ue.stateNode;if(ue.tag===5&&Le!==null&&(ue=Le,ae!==null&&(Le=st($,ae),Le!=null&&nt.push(nu($,Le,ue)))),Dn)break;$=$.return}0<nt.length&&(Ee=new qe(Ee,Je,null,l,Te),Ce.push({event:Ee,listeners:nt}))}}if((o&7)===0){e:{if(Ee=i==="mouseover"||i==="pointerover",qe=i==="mouseout"||i==="pointerout",Ee&&l!==Pe&&(Je=l.relatedTarget||l.fromElement)&&(ko(Je)||Je[vs]))break e;if((qe||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,qe?(Je=l.relatedTarget||l.toElement,qe=fe,Je=Je?ko(Je):null,Je!==null&&(Dn=wt(Je),Je!==Dn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(qe=null,Je=fe),qe!==Je)){if(nt=U_,Le="onMouseLeave",ae="onMouseEnter",$="mouse",(i==="pointerout"||i==="pointerover")&&(nt=O_,Le="onPointerLeave",ae="onPointerEnter",$="pointer"),Dn=qe==null?Ee:Ia(qe),ue=Je==null?Ee:Ia(Je),Ee=new nt(Le,$+"leave",qe,l,Te),Ee.target=Dn,Ee.relatedTarget=ue,Le=null,ko(Te)===fe&&(nt=new nt(ae,$+"enter",Je,l,Te),nt.target=ue,nt.relatedTarget=Dn,Le=nt),Dn=Le,qe&&Je)t:{for(nt=qe,ae=Je,$=0,ue=nt;ue;ue=La(ue))$++;for(ue=0,Le=ae;Le;Le=La(Le))ue++;for(;0<$-ue;)nt=La(nt),$--;for(;0<ue-$;)ae=La(ae),ue--;for(;$--;){if(nt===ae||ae!==null&&nt===ae.alternate)break t;nt=La(nt),ae=La(ae)}nt=null}else nt=null;qe!==null&&c0(Ce,Ee,qe,nt,!1),Je!==null&&Dn!==null&&c0(Ce,Dn,Je,nt,!0)}}e:{if(Ee=fe?Ia(fe):window,qe=Ee.nodeName&&Ee.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Ee.type==="file")var at=L1;else if(G_(Ee))if(X_)at=F1;else{at=I1;var dt=N1}else(qe=Ee.nodeName)&&qe.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(at=U1);if(at&&(at=at(i,fe))){W_(Ce,at,l,Te);break e}dt&&dt(i,Ee,fe),i==="focusout"&&(dt=Ee._wrapperState)&&dt.controlled&&Ee.type==="number"&&Xt(Ee,"number",Ee.value)}switch(dt=fe?Ia(fe):window,i){case"focusin":(G_(dt)||dt.contentEditable==="true")&&(Pa=dt,eh=fe,Jl=null);break;case"focusout":Jl=eh=Pa=null;break;case"mousedown":th=!0;break;case"contextmenu":case"mouseup":case"dragend":th=!1,J_(Ce,l,Te);break;case"selectionchange":if(B1)break;case"keydown":case"keyup":J_(Ce,l,Te)}var ht;if(jd)e:{switch(i){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ra?V_(i,l)&&(xt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(k_&&l.locale!=="ko"&&(Ra||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ra&&(ht=N_()):(Ks=Te,Wd="value"in Ks?Ks.value:Ks.textContent,Ra=!0)),dt=bc(fe,xt),0<dt.length&&(xt=new F_(xt,i,null,l,Te),Ce.push({event:xt,listeners:dt}),ht?xt.data=ht:(ht=H_(l),ht!==null&&(xt.data=ht)))),(ht=b1?C1(i,l):R1(i,l))&&(fe=bc(fe,"onBeforeInput"),0<fe.length&&(Te=new F_("onBeforeInput","beforeinput",null,l,Te),Ce.push({event:Te,listeners:fe}),Te.data=ht))}l0(Ce,o)})}function nu(i,o,l){return{instance:i,listener:o,currentTarget:l}}function bc(i,o){for(var l=o+"Capture",f=[];i!==null;){var g=i,S=g.stateNode;g.tag===5&&S!==null&&(g=S,S=st(i,l),S!=null&&f.unshift(nu(i,S,g)),S=st(i,o),S!=null&&f.push(nu(i,S,g))),i=i.return}return f}function La(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function c0(i,o,l,f,g){for(var S=o._reactName,C=[];l!==null&&l!==f;){var V=l,X=V.alternate,fe=V.stateNode;if(X!==null&&X===f)break;V.tag===5&&fe!==null&&(V=fe,g?(X=st(l,S),X!=null&&C.unshift(nu(l,X,V))):g||(X=st(l,S),X!=null&&C.push(nu(l,X,V)))),l=l.return}C.length!==0&&i.push({event:o,listeners:C})}var G1=/\r\n?/g,W1=/\u0000|\uFFFD/g;function f0(i){return(typeof i=="string"?i:""+i).replace(G1,`
`).replace(W1,"")}function Cc(i,o,l){if(o=f0(o),f0(i)!==o&&l)throw Error(t(425))}function Rc(){}var ah=null,lh=null;function uh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,X1=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,Y1=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(i){return d0.resolve(null).then(i).catch(q1)}:ch;function q1(i){setTimeout(function(){throw i})}function fh(i,o){var l=o,f=0;do{var g=l.nextSibling;if(i.removeChild(l),g&&g.nodeType===8)if(l=g.data,l==="/$"){if(f===0){i.removeChild(g),Yl(o);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=g}while(l);Yl(o)}function Zs(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function h0(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Zr="__reactFiber$"+Na,iu="__reactProps$"+Na,vs="__reactContainer$"+Na,dh="__reactEvents$"+Na,$1="__reactListeners$"+Na,K1="__reactHandles$"+Na;function ko(i){var o=i[Zr];if(o)return o;for(var l=i.parentNode;l;){if(o=l[vs]||l[Zr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=h0(i);i!==null;){if(l=i[Zr])return l;i=h0(i)}return o}i=l,l=i.parentNode}return null}function ru(i){return i=i[Zr]||i[vs],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ia(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Pc(i){return i[iu]||null}var hh=[],Ua=-1;function Qs(i){return{current:i}}function mn(i){0>Ua||(i.current=hh[Ua],hh[Ua]=null,Ua--)}function un(i,o){Ua++,hh[Ua]=i.current,i.current=o}var Js={},hi=Qs(Js),ki=Qs(!1),Bo=Js;function Fa(i,o){var l=i.type.contextTypes;if(!l)return Js;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var g={},S;for(S in l)g[S]=o[S];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=g),g}function Bi(i){return i=i.childContextTypes,i!=null}function Dc(){mn(ki),mn(hi)}function p0(i,o,l){if(hi.current!==Js)throw Error(t(168));un(hi,o),un(ki,l)}function m0(i,o,l){var f=i.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var g in f)if(!(g in o))throw Error(t(108,ve(i)||"Unknown",g));return U({},l,f)}function Lc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Js,Bo=hi.current,un(hi,i),un(ki,ki.current),!0}function g0(i,o,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=m0(i,o,Bo),f.__reactInternalMemoizedMergedChildContext=i,mn(ki),mn(hi),un(hi,i)):mn(ki),un(ki,l)}var xs=null,Nc=!1,ph=!1;function _0(i){xs===null?xs=[i]:xs.push(i)}function j1(i){Nc=!0,_0(i)}function eo(){if(!ph&&xs!==null){ph=!0;var i=0,o=Dt;try{var l=xs;for(Dt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}xs=null,Nc=!1}catch(g){throw xs!==null&&(xs=xs.slice(i+1)),dn(di,eo),g}finally{Dt=o,ph=!1}}return null}var Oa=[],ka=0,Ic=null,Uc=0,Sr=[],Mr=0,zo=null,ys=1,Ss="";function Vo(i,o){Oa[ka++]=Uc,Oa[ka++]=Ic,Ic=i,Uc=o}function v0(i,o,l){Sr[Mr++]=ys,Sr[Mr++]=Ss,Sr[Mr++]=zo,zo=i;var f=ys;i=Ss;var g=32-Oe(f)-1;f&=~(1<<g),l+=1;var S=32-Oe(o)+g;if(30<S){var C=g-g%5;S=(f&(1<<C)-1).toString(32),f>>=C,g-=C,ys=1<<32-Oe(o)+g|l<<g|f,Ss=S+i}else ys=1<<S|l<<g|f,Ss=i}function mh(i){i.return!==null&&(Vo(i,1),v0(i,1,0))}function gh(i){for(;i===Ic;)Ic=Oa[--ka],Oa[ka]=null,Uc=Oa[--ka],Oa[ka]=null;for(;i===zo;)zo=Sr[--Mr],Sr[Mr]=null,Ss=Sr[--Mr],Sr[Mr]=null,ys=Sr[--Mr],Sr[Mr]=null}var nr=null,ir=null,_n=!1,kr=null;function x0(i,o){var l=Ar(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function y0(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,nr=i,ir=Zs(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,nr=i,ir=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=zo!==null?{id:ys,overflow:Ss}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Ar(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,nr=i,ir=null,!0):!1;default:return!1}}function _h(i){return(i.mode&1)!==0&&(i.flags&128)===0}function vh(i){if(_n){var o=ir;if(o){var l=o;if(!y0(i,o)){if(_h(i))throw Error(t(418));o=Zs(l.nextSibling);var f=nr;o&&y0(i,o)?x0(f,l):(i.flags=i.flags&-4097|2,_n=!1,nr=i)}}else{if(_h(i))throw Error(t(418));i.flags=i.flags&-4097|2,_n=!1,nr=i}}}function S0(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;nr=i}function Fc(i){if(i!==nr)return!1;if(!_n)return S0(i),_n=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!uh(i.type,i.memoizedProps)),o&&(o=ir)){if(_h(i))throw M0(),Error(t(418));for(;o;)x0(i,o),o=Zs(o.nextSibling)}if(S0(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){ir=Zs(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}ir=null}}else ir=nr?Zs(i.stateNode.nextSibling):null;return!0}function M0(){for(var i=ir;i;)i=Zs(i.nextSibling)}function Ba(){ir=nr=null,_n=!1}function xh(i){kr===null?kr=[i]:kr.push(i)}var Z1=T.ReactCurrentBatchConfig;function su(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var g=f,S=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===S?o.ref:(o=function(C){var V=g.refs;C===null?delete V[S]:V[S]=C},o._stringRef=S,o)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Oc(i,o){throw i=Object.prototype.toString.call(o),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function E0(i){var o=i._init;return o(i._payload)}function w0(i){function o(ae,$){if(i){var ue=ae.deletions;ue===null?(ae.deletions=[$],ae.flags|=16):ue.push($)}}function l(ae,$){if(!i)return null;for(;$!==null;)o(ae,$),$=$.sibling;return null}function f(ae,$){for(ae=new Map;$!==null;)$.key!==null?ae.set($.key,$):ae.set($.index,$),$=$.sibling;return ae}function g(ae,$){return ae=lo(ae,$),ae.index=0,ae.sibling=null,ae}function S(ae,$,ue){return ae.index=ue,i?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<$?(ae.flags|=2,$):ue):(ae.flags|=2,$)):(ae.flags|=1048576,$)}function C(ae){return i&&ae.alternate===null&&(ae.flags|=2),ae}function V(ae,$,ue,Le){return $===null||$.tag!==6?($=cp(ue,ae.mode,Le),$.return=ae,$):($=g($,ue),$.return=ae,$)}function X(ae,$,ue,Le){var at=ue.type;return at===P?Te(ae,$,ue.props.children,Le,ue.key):$!==null&&($.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===J&&E0(at)===$.type)?(Le=g($,ue.props),Le.ref=su(ae,$,ue),Le.return=ae,Le):(Le=lf(ue.type,ue.key,ue.props,null,ae.mode,Le),Le.ref=su(ae,$,ue),Le.return=ae,Le)}function fe(ae,$,ue,Le){return $===null||$.tag!==4||$.stateNode.containerInfo!==ue.containerInfo||$.stateNode.implementation!==ue.implementation?($=fp(ue,ae.mode,Le),$.return=ae,$):($=g($,ue.children||[]),$.return=ae,$)}function Te(ae,$,ue,Le,at){return $===null||$.tag!==7?($=Ko(ue,ae.mode,Le,at),$.return=ae,$):($=g($,ue),$.return=ae,$)}function Ce(ae,$,ue){if(typeof $=="string"&&$!==""||typeof $=="number")return $=cp(""+$,ae.mode,ue),$.return=ae,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case R:return ue=lf($.type,$.key,$.props,null,ae.mode,ue),ue.ref=su(ae,null,$),ue.return=ae,ue;case D:return $=fp($,ae.mode,ue),$.return=ae,$;case J:var Le=$._init;return Ce(ae,Le($._payload),ue)}if(Yt($)||te($))return $=Ko($,ae.mode,ue,null),$.return=ae,$;Oc(ae,$)}return null}function Ee(ae,$,ue,Le){var at=$!==null?$.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return at!==null?null:V(ae,$,""+ue,Le);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case R:return ue.key===at?X(ae,$,ue,Le):null;case D:return ue.key===at?fe(ae,$,ue,Le):null;case J:return at=ue._init,Ee(ae,$,at(ue._payload),Le)}if(Yt(ue)||te(ue))return at!==null?null:Te(ae,$,ue,Le,null);Oc(ae,ue)}return null}function qe(ae,$,ue,Le,at){if(typeof Le=="string"&&Le!==""||typeof Le=="number")return ae=ae.get(ue)||null,V($,ae,""+Le,at);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case R:return ae=ae.get(Le.key===null?ue:Le.key)||null,X($,ae,Le,at);case D:return ae=ae.get(Le.key===null?ue:Le.key)||null,fe($,ae,Le,at);case J:var dt=Le._init;return qe(ae,$,ue,dt(Le._payload),at)}if(Yt(Le)||te(Le))return ae=ae.get(ue)||null,Te($,ae,Le,at,null);Oc($,Le)}return null}function Je(ae,$,ue,Le){for(var at=null,dt=null,ht=$,xt=$=0,Jn=null;ht!==null&&xt<ue.length;xt++){ht.index>xt?(Jn=ht,ht=null):Jn=ht.sibling;var qt=Ee(ae,ht,ue[xt],Le);if(qt===null){ht===null&&(ht=Jn);break}i&&ht&&qt.alternate===null&&o(ae,ht),$=S(qt,$,xt),dt===null?at=qt:dt.sibling=qt,dt=qt,ht=Jn}if(xt===ue.length)return l(ae,ht),_n&&Vo(ae,xt),at;if(ht===null){for(;xt<ue.length;xt++)ht=Ce(ae,ue[xt],Le),ht!==null&&($=S(ht,$,xt),dt===null?at=ht:dt.sibling=ht,dt=ht);return _n&&Vo(ae,xt),at}for(ht=f(ae,ht);xt<ue.length;xt++)Jn=qe(ht,ae,xt,ue[xt],Le),Jn!==null&&(i&&Jn.alternate!==null&&ht.delete(Jn.key===null?xt:Jn.key),$=S(Jn,$,xt),dt===null?at=Jn:dt.sibling=Jn,dt=Jn);return i&&ht.forEach(function(uo){return o(ae,uo)}),_n&&Vo(ae,xt),at}function nt(ae,$,ue,Le){var at=te(ue);if(typeof at!="function")throw Error(t(150));if(ue=at.call(ue),ue==null)throw Error(t(151));for(var dt=at=null,ht=$,xt=$=0,Jn=null,qt=ue.next();ht!==null&&!qt.done;xt++,qt=ue.next()){ht.index>xt?(Jn=ht,ht=null):Jn=ht.sibling;var uo=Ee(ae,ht,qt.value,Le);if(uo===null){ht===null&&(ht=Jn);break}i&&ht&&uo.alternate===null&&o(ae,ht),$=S(uo,$,xt),dt===null?at=uo:dt.sibling=uo,dt=uo,ht=Jn}if(qt.done)return l(ae,ht),_n&&Vo(ae,xt),at;if(ht===null){for(;!qt.done;xt++,qt=ue.next())qt=Ce(ae,qt.value,Le),qt!==null&&($=S(qt,$,xt),dt===null?at=qt:dt.sibling=qt,dt=qt);return _n&&Vo(ae,xt),at}for(ht=f(ae,ht);!qt.done;xt++,qt=ue.next())qt=qe(ht,ae,xt,qt.value,Le),qt!==null&&(i&&qt.alternate!==null&&ht.delete(qt.key===null?xt:qt.key),$=S(qt,$,xt),dt===null?at=qt:dt.sibling=qt,dt=qt);return i&&ht.forEach(function(PE){return o(ae,PE)}),_n&&Vo(ae,xt),at}function Dn(ae,$,ue,Le){if(typeof ue=="object"&&ue!==null&&ue.type===P&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case R:e:{for(var at=ue.key,dt=$;dt!==null;){if(dt.key===at){if(at=ue.type,at===P){if(dt.tag===7){l(ae,dt.sibling),$=g(dt,ue.props.children),$.return=ae,ae=$;break e}}else if(dt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===J&&E0(at)===dt.type){l(ae,dt.sibling),$=g(dt,ue.props),$.ref=su(ae,dt,ue),$.return=ae,ae=$;break e}l(ae,dt);break}else o(ae,dt);dt=dt.sibling}ue.type===P?($=Ko(ue.props.children,ae.mode,Le,ue.key),$.return=ae,ae=$):(Le=lf(ue.type,ue.key,ue.props,null,ae.mode,Le),Le.ref=su(ae,$,ue),Le.return=ae,ae=Le)}return C(ae);case D:e:{for(dt=ue.key;$!==null;){if($.key===dt)if($.tag===4&&$.stateNode.containerInfo===ue.containerInfo&&$.stateNode.implementation===ue.implementation){l(ae,$.sibling),$=g($,ue.children||[]),$.return=ae,ae=$;break e}else{l(ae,$);break}else o(ae,$);$=$.sibling}$=fp(ue,ae.mode,Le),$.return=ae,ae=$}return C(ae);case J:return dt=ue._init,Dn(ae,$,dt(ue._payload),Le)}if(Yt(ue))return Je(ae,$,ue,Le);if(te(ue))return nt(ae,$,ue,Le);Oc(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,$!==null&&$.tag===6?(l(ae,$.sibling),$=g($,ue),$.return=ae,ae=$):(l(ae,$),$=cp(ue,ae.mode,Le),$.return=ae,ae=$),C(ae)):l(ae,$)}return Dn}var za=w0(!0),T0=w0(!1),kc=Qs(null),Bc=null,Va=null,yh=null;function Sh(){yh=Va=Bc=null}function Mh(i){var o=kc.current;mn(kc),i._currentValue=o}function Eh(i,o,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),i===l)break;i=i.return}}function Ha(i,o){Bc=i,yh=Va=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(zi=!0),i.firstContext=null)}function Er(i){var o=i._currentValue;if(yh!==i)if(i={context:i,memoizedValue:o,next:null},Va===null){if(Bc===null)throw Error(t(308));Va=i,Bc.dependencies={lanes:0,firstContext:i}}else Va=Va.next=i;return o}var Ho=null;function wh(i){Ho===null?Ho=[i]:Ho.push(i)}function A0(i,o,l,f){var g=o.interleaved;return g===null?(l.next=l,wh(o)):(l.next=g.next,g.next=l),o.interleaved=l,Ms(i,f)}function Ms(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var to=!1;function Th(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Es(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function no(i,o,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Gt&2)!==0){var g=f.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),f.pending=o,Ms(i,l)}return g=f.interleaved,g===null?(o.next=o,wh(f)):(o.next=g.next,g.next=o),f.interleaved=o,Ms(i,l)}function zc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var f=o.lanes;f&=i.pendingLanes,l|=f,o.lanes=l,Oi(i,l)}}function C0(i,o){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var g=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?g=S=C:S=S.next=C,l=l.next}while(l!==null);S===null?g=S=o:S=S.next=o}else g=S=o;l={baseState:f.baseState,firstBaseUpdate:g,lastBaseUpdate:S,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function Vc(i,o,l,f){var g=i.updateQueue;to=!1;var S=g.firstBaseUpdate,C=g.lastBaseUpdate,V=g.shared.pending;if(V!==null){g.shared.pending=null;var X=V,fe=X.next;X.next=null,C===null?S=fe:C.next=fe,C=X;var Te=i.alternate;Te!==null&&(Te=Te.updateQueue,V=Te.lastBaseUpdate,V!==C&&(V===null?Te.firstBaseUpdate=fe:V.next=fe,Te.lastBaseUpdate=X))}if(S!==null){var Ce=g.baseState;C=0,Te=fe=X=null,V=S;do{var Ee=V.lane,qe=V.eventTime;if((f&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:qe,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var Je=i,nt=V;switch(Ee=o,qe=l,nt.tag){case 1:if(Je=nt.payload,typeof Je=="function"){Ce=Je.call(qe,Ce,Ee);break e}Ce=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=nt.payload,Ee=typeof Je=="function"?Je.call(qe,Ce,Ee):Je,Ee==null)break e;Ce=U({},Ce,Ee);break e;case 2:to=!0}}V.callback!==null&&V.lane!==0&&(i.flags|=64,Ee=g.effects,Ee===null?g.effects=[V]:Ee.push(V))}else qe={eventTime:qe,lane:Ee,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Te===null?(fe=Te=qe,X=Ce):Te=Te.next=qe,C|=Ee;if(V=V.next,V===null){if(V=g.shared.pending,V===null)break;Ee=V,V=Ee.next,Ee.next=null,g.lastBaseUpdate=Ee,g.shared.pending=null}}while(!0);if(Te===null&&(X=Ce),g.baseState=X,g.firstBaseUpdate=fe,g.lastBaseUpdate=Te,o=g.shared.interleaved,o!==null){g=o;do C|=g.lane,g=g.next;while(g!==o)}else S===null&&(g.shared.lanes=0);Xo|=C,i.lanes=C,i.memoizedState=Ce}}function R0(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var f=i[o],g=f.callback;if(g!==null){if(f.callback=null,f=l,typeof g!="function")throw Error(t(191,g));g.call(f)}}}var ou={},Qr=Qs(ou),au=Qs(ou),lu=Qs(ou);function Go(i){if(i===ou)throw Error(t(174));return i}function Ah(i,o){switch(un(lu,o),un(au,i),un(Qr,ou),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:A(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=A(o,i)}mn(Qr),un(Qr,o)}function Ga(){mn(Qr),mn(au),mn(lu)}function P0(i){Go(lu.current);var o=Go(Qr.current),l=A(o,i.type);o!==l&&(un(au,i),un(Qr,l))}function bh(i){au.current===i&&(mn(Qr),mn(au))}var Sn=Qs(0);function Hc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Ch=[];function Rh(){for(var i=0;i<Ch.length;i++)Ch[i]._workInProgressVersionPrimary=null;Ch.length=0}var Gc=T.ReactCurrentDispatcher,Ph=T.ReactCurrentBatchConfig,Wo=0,Mn=null,Hn=null,Zn=null,Wc=!1,uu=!1,cu=0,Q1=0;function pi(){throw Error(t(321))}function Dh(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!Or(i[l],o[l]))return!1;return!0}function Lh(i,o,l,f,g,S){if(Wo=S,Mn=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Gc.current=i===null||i.memoizedState===null?nE:iE,i=l(f,g),uu){S=0;do{if(uu=!1,cu=0,25<=S)throw Error(t(301));S+=1,Zn=Hn=null,o.updateQueue=null,Gc.current=rE,i=l(f,g)}while(uu)}if(Gc.current=qc,o=Hn!==null&&Hn.next!==null,Wo=0,Zn=Hn=Mn=null,Wc=!1,o)throw Error(t(300));return i}function Nh(){var i=cu!==0;return cu=0,i}function Jr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?Mn.memoizedState=Zn=i:Zn=Zn.next=i,Zn}function wr(){if(Hn===null){var i=Mn.alternate;i=i!==null?i.memoizedState:null}else i=Hn.next;var o=Zn===null?Mn.memoizedState:Zn.next;if(o!==null)Zn=o,Hn=i;else{if(i===null)throw Error(t(310));Hn=i,i={memoizedState:Hn.memoizedState,baseState:Hn.baseState,baseQueue:Hn.baseQueue,queue:Hn.queue,next:null},Zn===null?Mn.memoizedState=Zn=i:Zn=Zn.next=i}return Zn}function fu(i,o){return typeof o=="function"?o(i):o}function Ih(i){var o=wr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Hn,g=f.baseQueue,S=l.pending;if(S!==null){if(g!==null){var C=g.next;g.next=S.next,S.next=C}f.baseQueue=g=S,l.pending=null}if(g!==null){S=g.next,f=f.baseState;var V=C=null,X=null,fe=S;do{var Te=fe.lane;if((Wo&Te)===Te)X!==null&&(X=X.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),f=fe.hasEagerState?fe.eagerState:i(f,fe.action);else{var Ce={lane:Te,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};X===null?(V=X=Ce,C=f):X=X.next=Ce,Mn.lanes|=Te,Xo|=Te}fe=fe.next}while(fe!==null&&fe!==S);X===null?C=f:X.next=V,Or(f,o.memoizedState)||(zi=!0),o.memoizedState=f,o.baseState=C,o.baseQueue=X,l.lastRenderedState=f}if(i=l.interleaved,i!==null){g=i;do S=g.lane,Mn.lanes|=S,Xo|=S,g=g.next;while(g!==i)}else g===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function Uh(i){var o=wr(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,g=l.pending,S=o.memoizedState;if(g!==null){l.pending=null;var C=g=g.next;do S=i(S,C.action),C=C.next;while(C!==g);Or(S,o.memoizedState)||(zi=!0),o.memoizedState=S,o.baseQueue===null&&(o.baseState=S),l.lastRenderedState=S}return[S,f]}function D0(){}function L0(i,o){var l=Mn,f=wr(),g=o(),S=!Or(f.memoizedState,g);if(S&&(f.memoizedState=g,zi=!0),f=f.queue,Fh(U0.bind(null,l,f,i),[i]),f.getSnapshot!==o||S||Zn!==null&&Zn.memoizedState.tag&1){if(l.flags|=2048,du(9,I0.bind(null,l,f,g,o),void 0,null),Qn===null)throw Error(t(349));(Wo&30)!==0||N0(l,o,g)}return g}function N0(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=Mn.updateQueue,o===null?(o={lastEffect:null,stores:null},Mn.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function I0(i,o,l,f){o.value=l,o.getSnapshot=f,F0(o)&&O0(i)}function U0(i,o,l){return l(function(){F0(o)&&O0(i)})}function F0(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!Or(i,l)}catch{return!0}}function O0(i){var o=Ms(i,1);o!==null&&Hr(o,i,1,-1)}function k0(i){var o=Jr();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fu,lastRenderedState:i},o.queue=i,i=i.dispatch=tE.bind(null,Mn,i),[o.memoizedState,i]}function du(i,o,l,f){return i={tag:i,create:o,destroy:l,deps:f,next:null},o=Mn.updateQueue,o===null?(o={lastEffect:null,stores:null},Mn.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,o.lastEffect=i)),i}function B0(){return wr().memoizedState}function Xc(i,o,l,f){var g=Jr();Mn.flags|=i,g.memoizedState=du(1|o,l,void 0,f===void 0?null:f)}function Yc(i,o,l,f){var g=wr();f=f===void 0?null:f;var S=void 0;if(Hn!==null){var C=Hn.memoizedState;if(S=C.destroy,f!==null&&Dh(f,C.deps)){g.memoizedState=du(o,l,S,f);return}}Mn.flags|=i,g.memoizedState=du(1|o,l,S,f)}function z0(i,o){return Xc(8390656,8,i,o)}function Fh(i,o){return Yc(2048,8,i,o)}function V0(i,o){return Yc(4,2,i,o)}function H0(i,o){return Yc(4,4,i,o)}function G0(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function W0(i,o,l){return l=l!=null?l.concat([i]):null,Yc(4,4,G0.bind(null,o,i),l)}function Oh(){}function X0(i,o){var l=wr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&Dh(o,f[1])?f[0]:(l.memoizedState=[i,o],i)}function Y0(i,o){var l=wr();o=o===void 0?null:o;var f=l.memoizedState;return f!==null&&o!==null&&Dh(o,f[1])?f[0]:(i=i(),l.memoizedState=[i,o],i)}function q0(i,o,l){return(Wo&21)===0?(i.baseState&&(i.baseState=!1,zi=!0),i.memoizedState=l):(Or(l,o)||(l=Ye(),Mn.lanes|=l,Xo|=l,i.baseState=!0),o)}function J1(i,o){var l=Dt;Dt=l!==0&&4>l?l:4,i(!0);var f=Ph.transition;Ph.transition={};try{i(!1),o()}finally{Dt=l,Ph.transition=f}}function $0(){return wr().memoizedState}function eE(i,o,l){var f=oo(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},K0(i))j0(o,l);else if(l=A0(i,o,l,f),l!==null){var g=Ai();Hr(l,i,f,g),Z0(l,o,f)}}function tE(i,o,l){var f=oo(i),g={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(K0(i))j0(o,g);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=o.lastRenderedReducer,S!==null))try{var C=o.lastRenderedState,V=S(C,l);if(g.hasEagerState=!0,g.eagerState=V,Or(V,C)){var X=o.interleaved;X===null?(g.next=g,wh(o)):(g.next=X.next,X.next=g),o.interleaved=g;return}}catch{}finally{}l=A0(i,o,g,f),l!==null&&(g=Ai(),Hr(l,i,f,g),Z0(l,o,f))}}function K0(i){var o=i.alternate;return i===Mn||o!==null&&o===Mn}function j0(i,o){uu=Wc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function Z0(i,o,l){if((l&4194240)!==0){var f=o.lanes;f&=i.pendingLanes,l|=f,o.lanes=l,Oi(i,l)}}var qc={readContext:Er,useCallback:pi,useContext:pi,useEffect:pi,useImperativeHandle:pi,useInsertionEffect:pi,useLayoutEffect:pi,useMemo:pi,useReducer:pi,useRef:pi,useState:pi,useDebugValue:pi,useDeferredValue:pi,useTransition:pi,useMutableSource:pi,useSyncExternalStore:pi,useId:pi,unstable_isNewReconciler:!1},nE={readContext:Er,useCallback:function(i,o){return Jr().memoizedState=[i,o===void 0?null:o],i},useContext:Er,useEffect:z0,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,Xc(4194308,4,G0.bind(null,o,i),l)},useLayoutEffect:function(i,o){return Xc(4194308,4,i,o)},useInsertionEffect:function(i,o){return Xc(4,2,i,o)},useMemo:function(i,o){var l=Jr();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var f=Jr();return o=l!==void 0?l(o):o,f.memoizedState=f.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},f.queue=i,i=i.dispatch=eE.bind(null,Mn,i),[f.memoizedState,i]},useRef:function(i){var o=Jr();return i={current:i},o.memoizedState=i},useState:k0,useDebugValue:Oh,useDeferredValue:function(i){return Jr().memoizedState=i},useTransition:function(){var i=k0(!1),o=i[0];return i=J1.bind(null,i[1]),Jr().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var f=Mn,g=Jr();if(_n){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),Qn===null)throw Error(t(349));(Wo&30)!==0||N0(f,o,l)}g.memoizedState=l;var S={value:l,getSnapshot:o};return g.queue=S,z0(U0.bind(null,f,S,i),[i]),f.flags|=2048,du(9,I0.bind(null,f,S,l,o),void 0,null),l},useId:function(){var i=Jr(),o=Qn.identifierPrefix;if(_n){var l=Ss,f=ys;l=(f&~(1<<32-Oe(f)-1)).toString(32)+l,o=":"+o+"R"+l,l=cu++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=Q1++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},iE={readContext:Er,useCallback:X0,useContext:Er,useEffect:Fh,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:H0,useMemo:Y0,useReducer:Ih,useRef:B0,useState:function(){return Ih(fu)},useDebugValue:Oh,useDeferredValue:function(i){var o=wr();return q0(o,Hn.memoizedState,i)},useTransition:function(){var i=Ih(fu)[0],o=wr().memoizedState;return[i,o]},useMutableSource:D0,useSyncExternalStore:L0,useId:$0,unstable_isNewReconciler:!1},rE={readContext:Er,useCallback:X0,useContext:Er,useEffect:Fh,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:H0,useMemo:Y0,useReducer:Uh,useRef:B0,useState:function(){return Uh(fu)},useDebugValue:Oh,useDeferredValue:function(i){var o=wr();return Hn===null?o.memoizedState=i:q0(o,Hn.memoizedState,i)},useTransition:function(){var i=Uh(fu)[0],o=wr().memoizedState;return[i,o]},useMutableSource:D0,useSyncExternalStore:L0,useId:$0,unstable_isNewReconciler:!1};function Br(i,o){if(i&&i.defaultProps){o=U({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function kh(i,o,l,f){o=i.memoizedState,l=l(f,o),l=l==null?o:U({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var $c={isMounted:function(i){return(i=i._reactInternals)?wt(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var f=Ai(),g=oo(i),S=Es(f,g);S.payload=o,l!=null&&(S.callback=l),o=no(i,S,g),o!==null&&(Hr(o,i,g,f),zc(o,i,g))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var f=Ai(),g=oo(i),S=Es(f,g);S.tag=1,S.payload=o,l!=null&&(S.callback=l),o=no(i,S,g),o!==null&&(Hr(o,i,g,f),zc(o,i,g))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=Ai(),f=oo(i),g=Es(l,f);g.tag=2,o!=null&&(g.callback=o),o=no(i,g,f),o!==null&&(Hr(o,i,f,l),zc(o,i,f))}};function Q0(i,o,l,f,g,S,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,S,C):o.prototype&&o.prototype.isPureReactComponent?!Ql(l,f)||!Ql(g,S):!0}function J0(i,o,l){var f=!1,g=Js,S=o.contextType;return typeof S=="object"&&S!==null?S=Er(S):(g=Bi(o)?Bo:hi.current,f=o.contextTypes,S=(f=f!=null)?Fa(i,g):Js),o=new o(l,S),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=$c,i.stateNode=o,o._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=g,i.__reactInternalMemoizedMaskedChildContext=S),o}function ev(i,o,l,f){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,f),o.state!==i&&$c.enqueueReplaceState(o,o.state,null)}function Bh(i,o,l,f){var g=i.stateNode;g.props=l,g.state=i.memoizedState,g.refs={},Th(i);var S=o.contextType;typeof S=="object"&&S!==null?g.context=Er(S):(S=Bi(o)?Bo:hi.current,g.context=Fa(i,S)),g.state=i.memoizedState,S=o.getDerivedStateFromProps,typeof S=="function"&&(kh(i,o,S,l),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&$c.enqueueReplaceState(g,g.state,null),Vc(i,l,g,f),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308)}function Wa(i,o){try{var l="",f=o;do l+=Ve(f),f=f.return;while(f);var g=l}catch(S){g=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:o,stack:g,digest:null}}function zh(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Vh(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var sE=typeof WeakMap=="function"?WeakMap:Map;function tv(i,o,l){l=Es(-1,l),l.tag=3,l.payload={element:null};var f=o.value;return l.callback=function(){tf||(tf=!0,np=f),Vh(i,o)},l}function nv(i,o,l){l=Es(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var g=o.value;l.payload=function(){return f(g)},l.callback=function(){Vh(i,o)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Vh(i,o),typeof f!="function"&&(ro===null?ro=new Set([this]):ro.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})}),l}function iv(i,o,l){var f=i.pingCache;if(f===null){f=i.pingCache=new sE;var g=new Set;f.set(o,g)}else g=f.get(o),g===void 0&&(g=new Set,f.set(o,g));g.has(l)||(g.add(l),i=xE.bind(null,i,o,l),o.then(i,i))}function rv(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function sv(i,o,l,f,g){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=Es(-1,1),o.tag=2,no(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=g,i)}var oE=T.ReactCurrentOwner,zi=!1;function Ti(i,o,l,f){o.child=i===null?T0(o,null,l,f):za(o,i.child,l,f)}function ov(i,o,l,f,g){l=l.render;var S=o.ref;return Ha(o,g),f=Lh(i,o,l,f,S,g),l=Nh(),i!==null&&!zi?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,ws(i,o,g)):(_n&&l&&mh(o),o.flags|=1,Ti(i,o,f,g),o.child)}function av(i,o,l,f,g){if(i===null){var S=l.type;return typeof S=="function"&&!up(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=S,lv(i,o,S,f,g)):(i=lf(l.type,null,f,o,o.mode,g),i.ref=o.ref,i.return=o,o.child=i)}if(S=i.child,(i.lanes&g)===0){var C=S.memoizedProps;if(l=l.compare,l=l!==null?l:Ql,l(C,f)&&i.ref===o.ref)return ws(i,o,g)}return o.flags|=1,i=lo(S,f),i.ref=o.ref,i.return=o,o.child=i}function lv(i,o,l,f,g){if(i!==null){var S=i.memoizedProps;if(Ql(S,f)&&i.ref===o.ref)if(zi=!1,o.pendingProps=f=S,(i.lanes&g)!==0)(i.flags&131072)!==0&&(zi=!0);else return o.lanes=i.lanes,ws(i,o,g)}return Hh(i,o,l,f,g)}function uv(i,o,l){var f=o.pendingProps,g=f.children,S=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},un(Ya,rr),rr|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,un(Ya,rr),rr|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=S!==null?S.baseLanes:l,un(Ya,rr),rr|=f}else S!==null?(f=S.baseLanes|l,o.memoizedState=null):f=l,un(Ya,rr),rr|=f;return Ti(i,o,g,l),o.child}function cv(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Hh(i,o,l,f,g){var S=Bi(l)?Bo:hi.current;return S=Fa(o,S),Ha(o,g),l=Lh(i,o,l,f,S,g),f=Nh(),i!==null&&!zi?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~g,ws(i,o,g)):(_n&&f&&mh(o),o.flags|=1,Ti(i,o,l,g),o.child)}function fv(i,o,l,f,g){if(Bi(l)){var S=!0;Lc(o)}else S=!1;if(Ha(o,g),o.stateNode===null)jc(i,o),J0(o,l,f),Bh(o,l,f,g),f=!0;else if(i===null){var C=o.stateNode,V=o.memoizedProps;C.props=V;var X=C.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=Er(fe):(fe=Bi(l)?Bo:hi.current,fe=Fa(o,fe));var Te=l.getDerivedStateFromProps,Ce=typeof Te=="function"||typeof C.getSnapshotBeforeUpdate=="function";Ce||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==f||X!==fe)&&ev(o,C,f,fe),to=!1;var Ee=o.memoizedState;C.state=Ee,Vc(o,f,C,g),X=o.memoizedState,V!==f||Ee!==X||ki.current||to?(typeof Te=="function"&&(kh(o,l,Te,f),X=o.memoizedState),(V=to||Q0(o,l,V,f,Ee,X,fe))?(Ce||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(o.flags|=4194308)):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=X),C.props=f,C.state=X,C.context=fe,f=V):(typeof C.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{C=o.stateNode,b0(i,o),V=o.memoizedProps,fe=o.type===o.elementType?V:Br(o.type,V),C.props=fe,Ce=o.pendingProps,Ee=C.context,X=l.contextType,typeof X=="object"&&X!==null?X=Er(X):(X=Bi(l)?Bo:hi.current,X=Fa(o,X));var qe=l.getDerivedStateFromProps;(Te=typeof qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==Ce||Ee!==X)&&ev(o,C,f,X),to=!1,Ee=o.memoizedState,C.state=Ee,Vc(o,f,C,g);var Je=o.memoizedState;V!==Ce||Ee!==Je||ki.current||to?(typeof qe=="function"&&(kh(o,l,qe,f),Je=o.memoizedState),(fe=to||Q0(o,l,fe,f,Ee,Je,X)||!1)?(Te||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(f,Je,X),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(f,Je,X)),typeof C.componentDidUpdate=="function"&&(o.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof C.componentDidUpdate!="function"||V===i.memoizedProps&&Ee===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&Ee===i.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=Je),C.props=f,C.state=Je,C.context=X,f=fe):(typeof C.componentDidUpdate!="function"||V===i.memoizedProps&&Ee===i.memoizedState||(o.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===i.memoizedProps&&Ee===i.memoizedState||(o.flags|=1024),f=!1)}return Gh(i,o,l,f,S,g)}function Gh(i,o,l,f,g,S){cv(i,o);var C=(o.flags&128)!==0;if(!f&&!C)return g&&g0(o,l,!1),ws(i,o,S);f=o.stateNode,oE.current=o;var V=C&&typeof l.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,i!==null&&C?(o.child=za(o,i.child,null,S),o.child=za(o,null,V,S)):Ti(i,o,V,S),o.memoizedState=f.state,g&&g0(o,l,!0),o.child}function dv(i){var o=i.stateNode;o.pendingContext?p0(i,o.pendingContext,o.pendingContext!==o.context):o.context&&p0(i,o.context,!1),Ah(i,o.containerInfo)}function hv(i,o,l,f,g){return Ba(),xh(g),o.flags|=256,Ti(i,o,l,f),o.child}var Wh={dehydrated:null,treeContext:null,retryLane:0};function Xh(i){return{baseLanes:i,cachePool:null,transitions:null}}function pv(i,o,l){var f=o.pendingProps,g=Sn.current,S=!1,C=(o.flags&128)!==0,V;if((V=C)||(V=i!==null&&i.memoizedState===null?!1:(g&2)!==0),V?(S=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(g|=1),un(Sn,g&1),i===null)return vh(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(C=f.children,i=f.fallback,S?(f=o.mode,S=o.child,C={mode:"hidden",children:C},(f&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=C):S=uf(C,f,0,null),i=Ko(i,f,l,null),S.return=o,i.return=o,S.sibling=i,o.child=S,o.child.memoizedState=Xh(l),o.memoizedState=Wh,i):Yh(o,C));if(g=i.memoizedState,g!==null&&(V=g.dehydrated,V!==null))return aE(i,o,C,f,V,g,l);if(S){S=f.fallback,C=o.mode,g=i.child,V=g.sibling;var X={mode:"hidden",children:f.children};return(C&1)===0&&o.child!==g?(f=o.child,f.childLanes=0,f.pendingProps=X,o.deletions=null):(f=lo(g,X),f.subtreeFlags=g.subtreeFlags&14680064),V!==null?S=lo(V,S):(S=Ko(S,C,l,null),S.flags|=2),S.return=o,f.return=o,f.sibling=S,o.child=f,f=S,S=o.child,C=i.child.memoizedState,C=C===null?Xh(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},S.memoizedState=C,S.childLanes=i.childLanes&~l,o.memoizedState=Wh,f}return S=i.child,i=S.sibling,f=lo(S,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=l),f.return=o,f.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=f,o.memoizedState=null,f}function Yh(i,o){return o=uf({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function Kc(i,o,l,f){return f!==null&&xh(f),za(o,i.child,null,l),i=Yh(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function aE(i,o,l,f,g,S,C){if(l)return o.flags&256?(o.flags&=-257,f=zh(Error(t(422))),Kc(i,o,C,f)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(S=f.fallback,g=o.mode,f=uf({mode:"visible",children:f.children},g,0,null),S=Ko(S,g,C,null),S.flags|=2,f.return=o,S.return=o,f.sibling=S,o.child=f,(o.mode&1)!==0&&za(o,i.child,null,C),o.child.memoizedState=Xh(C),o.memoizedState=Wh,S);if((o.mode&1)===0)return Kc(i,o,C,null);if(g.data==="$!"){if(f=g.nextSibling&&g.nextSibling.dataset,f)var V=f.dgst;return f=V,S=Error(t(419)),f=zh(S,f,void 0),Kc(i,o,C,f)}if(V=(C&i.childLanes)!==0,zi||V){if(f=Qn,f!==null){switch(C&-C){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(f.suspendedLanes|C))!==0?0:g,g!==0&&g!==S.retryLane&&(S.retryLane=g,Ms(i,g),Hr(f,i,g,-1))}return lp(),f=zh(Error(t(421))),Kc(i,o,C,f)}return g.data==="$?"?(o.flags|=128,o.child=i.child,o=yE.bind(null,i),g._reactRetry=o,null):(i=S.treeContext,ir=Zs(g.nextSibling),nr=o,_n=!0,kr=null,i!==null&&(Sr[Mr++]=ys,Sr[Mr++]=Ss,Sr[Mr++]=zo,ys=i.id,Ss=i.overflow,zo=o),o=Yh(o,f.children),o.flags|=4096,o)}function mv(i,o,l){i.lanes|=o;var f=i.alternate;f!==null&&(f.lanes|=o),Eh(i.return,o,l)}function qh(i,o,l,f,g){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:g}:(S.isBackwards=o,S.rendering=null,S.renderingStartTime=0,S.last=f,S.tail=l,S.tailMode=g)}function gv(i,o,l){var f=o.pendingProps,g=f.revealOrder,S=f.tail;if(Ti(i,o,f.children,l),f=Sn.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&mv(i,l,o);else if(i.tag===19)mv(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(un(Sn,f),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(l=o.child,g=null;l!==null;)i=l.alternate,i!==null&&Hc(i)===null&&(g=l),l=l.sibling;l=g,l===null?(g=o.child,o.child=null):(g=l.sibling,l.sibling=null),qh(o,!1,g,l,S);break;case"backwards":for(l=null,g=o.child,o.child=null;g!==null;){if(i=g.alternate,i!==null&&Hc(i)===null){o.child=g;break}i=g.sibling,g.sibling=l,l=g,g=i}qh(o,!0,l,null,S);break;case"together":qh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function jc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ws(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Xo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(t(153));if(o.child!==null){for(i=o.child,l=lo(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=lo(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function lE(i,o,l){switch(o.tag){case 3:dv(o),Ba();break;case 5:P0(o);break;case 1:Bi(o.type)&&Lc(o);break;case 4:Ah(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,g=o.memoizedProps.value;un(kc,f._currentValue),f._currentValue=g;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(un(Sn,Sn.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?pv(i,o,l):(un(Sn,Sn.current&1),i=ws(i,o,l),i!==null?i.sibling:null);un(Sn,Sn.current&1);break;case 19:if(f=(l&o.childLanes)!==0,(i.flags&128)!==0){if(f)return gv(i,o,l);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),un(Sn,Sn.current),f)break;return null;case 22:case 23:return o.lanes=0,uv(i,o,l)}return ws(i,o,l)}var _v,$h,vv,xv;_v=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},$h=function(){},vv=function(i,o,l,f){var g=i.memoizedProps;if(g!==f){i=o.stateNode,Go(Qr.current);var S=null;switch(l){case"input":g=ct(i,g),f=ct(i,f),S=[];break;case"select":g=U({},g,{value:void 0}),f=U({},f,{value:void 0}),S=[];break;case"textarea":g=Vt(i,g),f=Vt(i,f),S=[];break;default:typeof g.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Rc)}$e(l,f);var C;l=null;for(fe in g)if(!f.hasOwnProperty(fe)&&g.hasOwnProperty(fe)&&g[fe]!=null)if(fe==="style"){var V=g[fe];for(C in V)V.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(r.hasOwnProperty(fe)?S||(S=[]):(S=S||[]).push(fe,null));for(fe in f){var X=f[fe];if(V=g!=null?g[fe]:void 0,f.hasOwnProperty(fe)&&X!==V&&(X!=null||V!=null))if(fe==="style")if(V){for(C in V)!V.hasOwnProperty(C)||X&&X.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in X)X.hasOwnProperty(C)&&V[C]!==X[C]&&(l||(l={}),l[C]=X[C])}else l||(S||(S=[]),S.push(fe,l)),l=X;else fe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,V=V?V.__html:void 0,X!=null&&V!==X&&(S=S||[]).push(fe,X)):fe==="children"?typeof X!="string"&&typeof X!="number"||(S=S||[]).push(fe,""+X):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(r.hasOwnProperty(fe)?(X!=null&&fe==="onScroll"&&pn("scroll",i),S||V===X||(S=[])):(S=S||[]).push(fe,X))}l&&(S=S||[]).push("style",l);var fe=S;(o.updateQueue=fe)&&(o.flags|=4)}},xv=function(i,o,l,f){l!==f&&(o.flags|=4)};function hu(i,o){if(!_n)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function mi(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(o)for(var g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags&14680064,f|=g.flags&14680064,g.return=i,g=g.sibling;else for(g=i.child;g!==null;)l|=g.lanes|g.childLanes,f|=g.subtreeFlags,f|=g.flags,g.return=i,g=g.sibling;return i.subtreeFlags|=f,i.childLanes=l,o}function uE(i,o,l){var f=o.pendingProps;switch(gh(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mi(o),null;case 1:return Bi(o.type)&&Dc(),mi(o),null;case 3:return f=o.stateNode,Ga(),mn(ki),mn(hi),Rh(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Fc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,kr!==null&&(sp(kr),kr=null))),$h(i,o),mi(o),null;case 5:bh(o);var g=Go(lu.current);if(l=o.type,i!==null&&o.stateNode!=null)vv(i,o,l,f,g),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return mi(o),null}if(i=Go(Qr.current),Fc(o)){f=o.stateNode,l=o.type;var S=o.memoizedProps;switch(f[Zr]=o,f[iu]=S,i=(o.mode&1)!==0,l){case"dialog":pn("cancel",f),pn("close",f);break;case"iframe":case"object":case"embed":pn("load",f);break;case"video":case"audio":for(g=0;g<eu.length;g++)pn(eu[g],f);break;case"source":pn("error",f);break;case"img":case"image":case"link":pn("error",f),pn("load",f);break;case"details":pn("toggle",f);break;case"input":_t(f,S),pn("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!S.multiple},pn("invalid",f);break;case"textarea":q(f,S),pn("invalid",f)}$e(l,S),g=null;for(var C in S)if(S.hasOwnProperty(C)){var V=S[C];C==="children"?typeof V=="string"?f.textContent!==V&&(S.suppressHydrationWarning!==!0&&Cc(f.textContent,V,i),g=["children",V]):typeof V=="number"&&f.textContent!==""+V&&(S.suppressHydrationWarning!==!0&&Cc(f.textContent,V,i),g=["children",""+V]):r.hasOwnProperty(C)&&V!=null&&C==="onScroll"&&pn("scroll",f)}switch(l){case"input":Xe(f),Ft(f,S,!0);break;case"textarea":Xe(f),pt(f);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(f.onclick=Rc)}f=g,o.updateQueue=f,f!==null&&(o.flags|=4)}else{C=g.nodeType===9?g:g.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=O(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=C.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=C.createElement(l,{is:f.is}):(i=C.createElement(l),l==="select"&&(C=i,f.multiple?C.multiple=!0:f.size&&(C.size=f.size))):i=C.createElementNS(i,l),i[Zr]=o,i[iu]=f,_v(i,o,!1,!1),o.stateNode=i;e:{switch(C=Ie(l,f),l){case"dialog":pn("cancel",i),pn("close",i),g=f;break;case"iframe":case"object":case"embed":pn("load",i),g=f;break;case"video":case"audio":for(g=0;g<eu.length;g++)pn(eu[g],i);g=f;break;case"source":pn("error",i),g=f;break;case"img":case"image":case"link":pn("error",i),pn("load",i),g=f;break;case"details":pn("toggle",i),g=f;break;case"input":_t(i,f),g=ct(i,f),pn("invalid",i);break;case"option":g=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},g=U({},f,{value:void 0}),pn("invalid",i);break;case"textarea":q(i,f),g=Vt(i,f),pn("invalid",i);break;default:g=f}$e(l,g),V=g;for(S in V)if(V.hasOwnProperty(S)){var X=V[S];S==="style"?ge(i,X):S==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&re(i,X)):S==="children"?typeof X=="string"?(l!=="textarea"||X!=="")&&de(i,X):typeof X=="number"&&de(i,""+X):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(r.hasOwnProperty(S)?X!=null&&S==="onScroll"&&pn("scroll",i):X!=null&&L(i,S,X,C))}switch(l){case"input":Xe(i),Ft(i,f,!1);break;case"textarea":Xe(i),pt(i);break;case"option":f.value!=null&&i.setAttribute("value",""+he(f.value));break;case"select":i.multiple=!!f.multiple,S=f.value,S!=null?ft(i,!!f.multiple,S,!1):f.defaultValue!=null&&ft(i,!!f.multiple,f.defaultValue,!0);break;default:typeof g.onClick=="function"&&(i.onclick=Rc)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return mi(o),null;case 6:if(i&&o.stateNode!=null)xv(i,o,i.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(l=Go(lu.current),Go(Qr.current),Fc(o)){if(f=o.stateNode,l=o.memoizedProps,f[Zr]=o,(S=f.nodeValue!==l)&&(i=nr,i!==null))switch(i.tag){case 3:Cc(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Cc(f.nodeValue,l,(i.mode&1)!==0)}S&&(o.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Zr]=o,o.stateNode=f}return mi(o),null;case 13:if(mn(Sn),f=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(_n&&ir!==null&&(o.mode&1)!==0&&(o.flags&128)===0)M0(),Ba(),o.flags|=98560,S=!1;else if(S=Fc(o),f!==null&&f.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=o.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Zr]=o}else Ba(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;mi(o),S=!1}else kr!==null&&(sp(kr),kr=null),S=!0;if(!S)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(Sn.current&1)!==0?Gn===0&&(Gn=3):lp())),o.updateQueue!==null&&(o.flags|=4),mi(o),null);case 4:return Ga(),$h(i,o),i===null&&tu(o.stateNode.containerInfo),mi(o),null;case 10:return Mh(o.type._context),mi(o),null;case 17:return Bi(o.type)&&Dc(),mi(o),null;case 19:if(mn(Sn),S=o.memoizedState,S===null)return mi(o),null;if(f=(o.flags&128)!==0,C=S.rendering,C===null)if(f)hu(S,!1);else{if(Gn!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(C=Hc(i),C!==null){for(o.flags|=128,hu(S,!1),f=C.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=l,l=o.child;l!==null;)S=l,i=f,S.flags&=14680066,C=S.alternate,C===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=C.childLanes,S.lanes=C.lanes,S.child=C.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=C.memoizedProps,S.memoizedState=C.memoizedState,S.updateQueue=C.updateQueue,S.type=C.type,i=C.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return un(Sn,Sn.current&1|2),o.child}i=i.sibling}S.tail!==null&&bt()>qa&&(o.flags|=128,f=!0,hu(S,!1),o.lanes=4194304)}else{if(!f)if(i=Hc(C),i!==null){if(o.flags|=128,f=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),hu(S,!0),S.tail===null&&S.tailMode==="hidden"&&!C.alternate&&!_n)return mi(o),null}else 2*bt()-S.renderingStartTime>qa&&l!==1073741824&&(o.flags|=128,f=!0,hu(S,!1),o.lanes=4194304);S.isBackwards?(C.sibling=o.child,o.child=C):(l=S.last,l!==null?l.sibling=C:o.child=C,S.last=C)}return S.tail!==null?(o=S.tail,S.rendering=o,S.tail=o.sibling,S.renderingStartTime=bt(),o.sibling=null,l=Sn.current,un(Sn,f?l&1|2:l&1),o):(mi(o),null);case 22:case 23:return ap(),f=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(rr&1073741824)!==0&&(mi(o),o.subtreeFlags&6&&(o.flags|=8192)):mi(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function cE(i,o){switch(gh(o),o.tag){case 1:return Bi(o.type)&&Dc(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return Ga(),mn(ki),mn(hi),Rh(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return bh(o),null;case 13:if(mn(Sn),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ba()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return mn(Sn),null;case 4:return Ga(),null;case 10:return Mh(o.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var Zc=!1,gi=!1,fE=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Xa(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Rn(i,o,f)}else l.current=null}function Kh(i,o,l){try{l()}catch(f){Rn(i,o,f)}}var yv=!1;function dE(i,o){if(ah=_c,i=Q_(),Jd(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var g=f.anchorOffset,S=f.focusNode;f=f.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var C=0,V=-1,X=-1,fe=0,Te=0,Ce=i,Ee=null;t:for(;;){for(var qe;Ce!==l||g!==0&&Ce.nodeType!==3||(V=C+g),Ce!==S||f!==0&&Ce.nodeType!==3||(X=C+f),Ce.nodeType===3&&(C+=Ce.nodeValue.length),(qe=Ce.firstChild)!==null;)Ee=Ce,Ce=qe;for(;;){if(Ce===i)break t;if(Ee===l&&++fe===g&&(V=C),Ee===S&&++Te===f&&(X=C),(qe=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=qe}l=V===-1||X===-1?null:{start:V,end:X}}else l=null}l=l||{start:0,end:0}}else l=null;for(lh={focusedElem:i,selectionRange:l},_c=!1,Ke=o;Ke!==null;)if(o=Ke,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,Ke=i;else for(;Ke!==null;){o=Ke;try{var Je=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var nt=Je.memoizedProps,Dn=Je.memoizedState,ae=o.stateNode,$=ae.getSnapshotBeforeUpdate(o.elementType===o.type?nt:Br(o.type,nt),Dn);ae.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ue=o.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Le){Rn(o,o.return,Le)}if(i=o.sibling,i!==null){i.return=o.return,Ke=i;break}Ke=o.return}return Je=yv,yv=!1,Je}function pu(i,o,l){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var g=f=f.next;do{if((g.tag&i)===i){var S=g.destroy;g.destroy=void 0,S!==void 0&&Kh(o,l,S)}g=g.next}while(g!==f)}}function Qc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==o)}}function jh(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Sv(i){var o=i.alternate;o!==null&&(i.alternate=null,Sv(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Zr],delete o[iu],delete o[dh],delete o[$1],delete o[K1])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Mv(i){return i.tag===5||i.tag===3||i.tag===4}function Ev(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Mv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Zh(i,o,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Rc));else if(f!==4&&(i=i.child,i!==null))for(Zh(i,o,l),i=i.sibling;i!==null;)Zh(i,o,l),i=i.sibling}function Qh(i,o,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Qh(i,o,l),i=i.sibling;i!==null;)Qh(i,o,l),i=i.sibling}var si=null,zr=!1;function io(i,o,l){for(l=l.child;l!==null;)wv(i,o,l),l=l.sibling}function wv(i,o,l){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:gi||Xa(l,o);case 6:var f=si,g=zr;si=null,io(i,o,l),si=f,zr=g,si!==null&&(zr?(i=si,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):si.removeChild(l.stateNode));break;case 18:si!==null&&(zr?(i=si,l=l.stateNode,i.nodeType===8?fh(i.parentNode,l):i.nodeType===1&&fh(i,l),Yl(i)):fh(si,l.stateNode));break;case 4:f=si,g=zr,si=l.stateNode.containerInfo,zr=!0,io(i,o,l),si=f,zr=g;break;case 0:case 11:case 14:case 15:if(!gi&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){g=f=f.next;do{var S=g,C=S.destroy;S=S.tag,C!==void 0&&((S&2)!==0||(S&4)!==0)&&Kh(l,o,C),g=g.next}while(g!==f)}io(i,o,l);break;case 1:if(!gi&&(Xa(l,o),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(V){Rn(l,o,V)}io(i,o,l);break;case 21:io(i,o,l);break;case 22:l.mode&1?(gi=(f=gi)||l.memoizedState!==null,io(i,o,l),gi=f):io(i,o,l);break;default:io(i,o,l)}}function Tv(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new fE),o.forEach(function(f){var g=SE.bind(null,i,f);l.has(f)||(l.add(f),f.then(g,g))})}}function Vr(i,o){var l=o.deletions;if(l!==null)for(var f=0;f<l.length;f++){var g=l[f];try{var S=i,C=o,V=C;e:for(;V!==null;){switch(V.tag){case 5:si=V.stateNode,zr=!1;break e;case 3:si=V.stateNode.containerInfo,zr=!0;break e;case 4:si=V.stateNode.containerInfo,zr=!0;break e}V=V.return}if(si===null)throw Error(t(160));wv(S,C,g),si=null,zr=!1;var X=g.alternate;X!==null&&(X.return=null),g.return=null}catch(fe){Rn(g,o,fe)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Av(o,i),o=o.sibling}function Av(i,o){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Vr(o,i),es(i),f&4){try{pu(3,i,i.return),Qc(3,i)}catch(nt){Rn(i,i.return,nt)}try{pu(5,i,i.return)}catch(nt){Rn(i,i.return,nt)}}break;case 1:Vr(o,i),es(i),f&512&&l!==null&&Xa(l,l.return);break;case 5:if(Vr(o,i),es(i),f&512&&l!==null&&Xa(l,l.return),i.flags&32){var g=i.stateNode;try{de(g,"")}catch(nt){Rn(i,i.return,nt)}}if(f&4&&(g=i.stateNode,g!=null)){var S=i.memoizedProps,C=l!==null?l.memoizedProps:S,V=i.type,X=i.updateQueue;if(i.updateQueue=null,X!==null)try{V==="input"&&S.type==="radio"&&S.name!=null&&gt(g,S),Ie(V,C);var fe=Ie(V,S);for(C=0;C<X.length;C+=2){var Te=X[C],Ce=X[C+1];Te==="style"?ge(g,Ce):Te==="dangerouslySetInnerHTML"?re(g,Ce):Te==="children"?de(g,Ce):L(g,Te,Ce,fe)}switch(V){case"input":le(g,S);break;case"textarea":cn(g,S);break;case"select":var Ee=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!S.multiple;var qe=S.value;qe!=null?ft(g,!!S.multiple,qe,!1):Ee!==!!S.multiple&&(S.defaultValue!=null?ft(g,!!S.multiple,S.defaultValue,!0):ft(g,!!S.multiple,S.multiple?[]:"",!1))}g[iu]=S}catch(nt){Rn(i,i.return,nt)}}break;case 6:if(Vr(o,i),es(i),f&4){if(i.stateNode===null)throw Error(t(162));g=i.stateNode,S=i.memoizedProps;try{g.nodeValue=S}catch(nt){Rn(i,i.return,nt)}}break;case 3:if(Vr(o,i),es(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Yl(o.containerInfo)}catch(nt){Rn(i,i.return,nt)}break;case 4:Vr(o,i),es(i);break;case 13:Vr(o,i),es(i),g=i.child,g.flags&8192&&(S=g.memoizedState!==null,g.stateNode.isHidden=S,!S||g.alternate!==null&&g.alternate.memoizedState!==null||(tp=bt())),f&4&&Tv(i);break;case 22:if(Te=l!==null&&l.memoizedState!==null,i.mode&1?(gi=(fe=gi)||Te,Vr(o,i),gi=fe):Vr(o,i),es(i),f&8192){if(fe=i.memoizedState!==null,(i.stateNode.isHidden=fe)&&!Te&&(i.mode&1)!==0)for(Ke=i,Te=i.child;Te!==null;){for(Ce=Ke=Te;Ke!==null;){switch(Ee=Ke,qe=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:pu(4,Ee,Ee.return);break;case 1:Xa(Ee,Ee.return);var Je=Ee.stateNode;if(typeof Je.componentWillUnmount=="function"){f=Ee,l=Ee.return;try{o=f,Je.props=o.memoizedProps,Je.state=o.memoizedState,Je.componentWillUnmount()}catch(nt){Rn(f,l,nt)}}break;case 5:Xa(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Rv(Ce);continue}}qe!==null?(qe.return=Ee,Ke=qe):Rv(Ce)}Te=Te.sibling}e:for(Te=null,Ce=i;;){if(Ce.tag===5){if(Te===null){Te=Ce;try{g=Ce.stateNode,fe?(S=g.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(V=Ce.stateNode,X=Ce.memoizedProps.style,C=X!=null&&X.hasOwnProperty("display")?X.display:null,V.style.display=pe("display",C))}catch(nt){Rn(i,i.return,nt)}}}else if(Ce.tag===6){if(Te===null)try{Ce.stateNode.nodeValue=fe?"":Ce.memoizedProps}catch(nt){Rn(i,i.return,nt)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===i)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===i)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===i)break e;Te===Ce&&(Te=null),Ce=Ce.return}Te===Ce&&(Te=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Vr(o,i),es(i),f&4&&Tv(i);break;case 21:break;default:Vr(o,i),es(i)}}function es(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Mv(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var g=f.stateNode;f.flags&32&&(de(g,""),f.flags&=-33);var S=Ev(i);Qh(i,S,g);break;case 3:case 4:var C=f.stateNode.containerInfo,V=Ev(i);Zh(i,V,C);break;default:throw Error(t(161))}}catch(X){Rn(i,i.return,X)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function hE(i,o,l){Ke=i,bv(i)}function bv(i,o,l){for(var f=(i.mode&1)!==0;Ke!==null;){var g=Ke,S=g.child;if(g.tag===22&&f){var C=g.memoizedState!==null||Zc;if(!C){var V=g.alternate,X=V!==null&&V.memoizedState!==null||gi;V=Zc;var fe=gi;if(Zc=C,(gi=X)&&!fe)for(Ke=g;Ke!==null;)C=Ke,X=C.child,C.tag===22&&C.memoizedState!==null?Pv(g):X!==null?(X.return=C,Ke=X):Pv(g);for(;S!==null;)Ke=S,bv(S),S=S.sibling;Ke=g,Zc=V,gi=fe}Cv(i)}else(g.subtreeFlags&8772)!==0&&S!==null?(S.return=g,Ke=S):Cv(i)}}function Cv(i){for(;Ke!==null;){var o=Ke;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:gi||Qc(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!gi)if(l===null)f.componentDidMount();else{var g=o.elementType===o.type?l.memoizedProps:Br(o.type,l.memoizedProps);f.componentDidUpdate(g,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var S=o.updateQueue;S!==null&&R0(o,S,f);break;case 3:var C=o.updateQueue;if(C!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}R0(o,C,l)}break;case 5:var V=o.stateNode;if(l===null&&o.flags&4){l=V;var X=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&l.focus();break;case"img":X.src&&(l.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var fe=o.alternate;if(fe!==null){var Te=fe.memoizedState;if(Te!==null){var Ce=Te.dehydrated;Ce!==null&&Yl(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gi||o.flags&512&&jh(o)}catch(Ee){Rn(o,o.return,Ee)}}if(o===i){Ke=null;break}if(l=o.sibling,l!==null){l.return=o.return,Ke=l;break}Ke=o.return}}function Rv(i){for(;Ke!==null;){var o=Ke;if(o===i){Ke=null;break}var l=o.sibling;if(l!==null){l.return=o.return,Ke=l;break}Ke=o.return}}function Pv(i){for(;Ke!==null;){var o=Ke;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{Qc(4,o)}catch(X){Rn(o,l,X)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var g=o.return;try{f.componentDidMount()}catch(X){Rn(o,g,X)}}var S=o.return;try{jh(o)}catch(X){Rn(o,S,X)}break;case 5:var C=o.return;try{jh(o)}catch(X){Rn(o,C,X)}}}catch(X){Rn(o,o.return,X)}if(o===i){Ke=null;break}var V=o.sibling;if(V!==null){V.return=o.return,Ke=V;break}Ke=o.return}}var pE=Math.ceil,Jc=T.ReactCurrentDispatcher,Jh=T.ReactCurrentOwner,Tr=T.ReactCurrentBatchConfig,Gt=0,Qn=null,On=null,oi=0,rr=0,Ya=Qs(0),Gn=0,mu=null,Xo=0,ef=0,ep=0,gu=null,Vi=null,tp=0,qa=1/0,Ts=null,tf=!1,np=null,ro=null,nf=!1,so=null,rf=0,_u=0,ip=null,sf=-1,of=0;function Ai(){return(Gt&6)!==0?bt():sf!==-1?sf:sf=bt()}function oo(i){return(i.mode&1)===0?1:(Gt&2)!==0&&oi!==0?oi&-oi:Z1.transition!==null?(of===0&&(of=Ye()),of):(i=Dt,i!==0||(i=window.event,i=i===void 0?16:L_(i.type)),i)}function Hr(i,o,l,f){if(50<_u)throw _u=0,ip=null,Error(t(185));Rt(i,l,f),((Gt&2)===0||i!==Qn)&&(i===Qn&&((Gt&2)===0&&(ef|=l),Gn===4&&ao(i,oi)),Hi(i,f),l===1&&Gt===0&&(o.mode&1)===0&&(qa=bt()+500,Nc&&eo()))}function Hi(i,o){var l=i.callbackNode;Jt(i,o);var f=ln(i,i===Qn?oi:0);if(f===0)l!==null&&Cn(l),i.callbackNode=null,i.callbackPriority=0;else if(o=f&-f,i.callbackPriority!==o){if(l!=null&&Cn(l),o===1)i.tag===0?j1(Lv.bind(null,i)):_0(Lv.bind(null,i)),Y1(function(){(Gt&6)===0&&eo()}),l=null;else{switch(_s(f)){case 1:l=di;break;case 4:l=I;break;case 16:l=K;break;case 536870912:l=ne;break;default:l=K}l=zv(l,Dv.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Dv(i,o){if(sf=-1,of=0,(Gt&6)!==0)throw Error(t(327));var l=i.callbackNode;if($a()&&i.callbackNode!==l)return null;var f=ln(i,i===Qn?oi:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||o)o=af(i,f);else{o=f;var g=Gt;Gt|=2;var S=Iv();(Qn!==i||oi!==o)&&(Ts=null,qa=bt()+500,qo(i,o));do try{_E();break}catch(V){Nv(i,V)}while(!0);Sh(),Jc.current=S,Gt=g,On!==null?o=0:(Qn=null,oi=0,o=Gn)}if(o!==0){if(o===2&&(g=Fn(i),g!==0&&(f=g,o=rp(i,g))),o===1)throw l=mu,qo(i,0),ao(i,f),Hi(i,bt()),l;if(o===6)ao(i,f);else{if(g=i.current.alternate,(f&30)===0&&!mE(g)&&(o=af(i,f),o===2&&(S=Fn(i),S!==0&&(f=S,o=rp(i,S))),o===1))throw l=mu,qo(i,0),ao(i,f),Hi(i,bt()),l;switch(i.finishedWork=g,i.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:$o(i,Vi,Ts);break;case 3:if(ao(i,f),(f&130023424)===f&&(o=tp+500-bt(),10<o)){if(ln(i,0)!==0)break;if(g=i.suspendedLanes,(g&f)!==f){Ai(),i.pingedLanes|=i.suspendedLanes&g;break}i.timeoutHandle=ch($o.bind(null,i,Vi,Ts),o);break}$o(i,Vi,Ts);break;case 4:if(ao(i,f),(f&4194240)===f)break;for(o=i.eventTimes,g=-1;0<f;){var C=31-Oe(f);S=1<<C,C=o[C],C>g&&(g=C),f&=~S}if(f=g,f=bt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*pE(f/1960))-f,10<f){i.timeoutHandle=ch($o.bind(null,i,Vi,Ts),f);break}$o(i,Vi,Ts);break;case 5:$o(i,Vi,Ts);break;default:throw Error(t(329))}}}return Hi(i,bt()),i.callbackNode===l?Dv.bind(null,i):null}function rp(i,o){var l=gu;return i.current.memoizedState.isDehydrated&&(qo(i,o).flags|=256),i=af(i,o),i!==2&&(o=Vi,Vi=l,o!==null&&sp(o)),i}function sp(i){Vi===null?Vi=i:Vi.push.apply(Vi,i)}function mE(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var g=l[f],S=g.getSnapshot;g=g.value;try{if(!Or(S(),g))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ao(i,o){for(o&=~ep,o&=~ef,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-Oe(o),f=1<<l;i[l]=-1,o&=~f}}function Lv(i){if((Gt&6)!==0)throw Error(t(327));$a();var o=ln(i,0);if((o&1)===0)return Hi(i,bt()),null;var l=af(i,o);if(i.tag!==0&&l===2){var f=Fn(i);f!==0&&(o=f,l=rp(i,f))}if(l===1)throw l=mu,qo(i,0),ao(i,o),Hi(i,bt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,$o(i,Vi,Ts),Hi(i,bt()),null}function op(i,o){var l=Gt;Gt|=1;try{return i(o)}finally{Gt=l,Gt===0&&(qa=bt()+500,Nc&&eo())}}function Yo(i){so!==null&&so.tag===0&&(Gt&6)===0&&$a();var o=Gt;Gt|=1;var l=Tr.transition,f=Dt;try{if(Tr.transition=null,Dt=1,i)return i()}finally{Dt=f,Tr.transition=l,Gt=o,(Gt&6)===0&&eo()}}function ap(){rr=Ya.current,mn(Ya)}function qo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,X1(l)),On!==null)for(l=On.return;l!==null;){var f=l;switch(gh(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Dc();break;case 3:Ga(),mn(ki),mn(hi),Rh();break;case 5:bh(f);break;case 4:Ga();break;case 13:mn(Sn);break;case 19:mn(Sn);break;case 10:Mh(f.type._context);break;case 22:case 23:ap()}l=l.return}if(Qn=i,On=i=lo(i.current,null),oi=rr=o,Gn=0,mu=null,ep=ef=Xo=0,Vi=gu=null,Ho!==null){for(o=0;o<Ho.length;o++)if(l=Ho[o],f=l.interleaved,f!==null){l.interleaved=null;var g=f.next,S=l.pending;if(S!==null){var C=S.next;S.next=g,f.next=C}l.pending=f}Ho=null}return i}function Nv(i,o){do{var l=On;try{if(Sh(),Gc.current=qc,Wc){for(var f=Mn.memoizedState;f!==null;){var g=f.queue;g!==null&&(g.pending=null),f=f.next}Wc=!1}if(Wo=0,Zn=Hn=Mn=null,uu=!1,cu=0,Jh.current=null,l===null||l.return===null){Gn=1,mu=o,On=null;break}e:{var S=i,C=l.return,V=l,X=o;if(o=oi,V.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var fe=X,Te=V,Ce=Te.tag;if((Te.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var qe=rv(C);if(qe!==null){qe.flags&=-257,sv(qe,C,V,S,o),qe.mode&1&&iv(S,fe,o),o=qe,X=fe;var Je=o.updateQueue;if(Je===null){var nt=new Set;nt.add(X),o.updateQueue=nt}else Je.add(X);break e}else{if((o&1)===0){iv(S,fe,o),lp();break e}X=Error(t(426))}}else if(_n&&V.mode&1){var Dn=rv(C);if(Dn!==null){(Dn.flags&65536)===0&&(Dn.flags|=256),sv(Dn,C,V,S,o),xh(Wa(X,V));break e}}S=X=Wa(X,V),Gn!==4&&(Gn=2),gu===null?gu=[S]:gu.push(S),S=C;do{switch(S.tag){case 3:S.flags|=65536,o&=-o,S.lanes|=o;var ae=tv(S,X,o);C0(S,ae);break e;case 1:V=X;var $=S.type,ue=S.stateNode;if((S.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(ro===null||!ro.has(ue)))){S.flags|=65536,o&=-o,S.lanes|=o;var Le=nv(S,V,o);C0(S,Le);break e}}S=S.return}while(S!==null)}Fv(l)}catch(at){o=at,On===l&&l!==null&&(On=l=l.return);continue}break}while(!0)}function Iv(){var i=Jc.current;return Jc.current=qc,i===null?qc:i}function lp(){(Gn===0||Gn===3||Gn===2)&&(Gn=4),Qn===null||(Xo&268435455)===0&&(ef&268435455)===0||ao(Qn,oi)}function af(i,o){var l=Gt;Gt|=2;var f=Iv();(Qn!==i||oi!==o)&&(Ts=null,qo(i,o));do try{gE();break}catch(g){Nv(i,g)}while(!0);if(Sh(),Gt=l,Jc.current=f,On!==null)throw Error(t(261));return Qn=null,oi=0,Gn}function gE(){for(;On!==null;)Uv(On)}function _E(){for(;On!==null&&!yr();)Uv(On)}function Uv(i){var o=Bv(i.alternate,i,rr);i.memoizedProps=i.pendingProps,o===null?Fv(i):On=o,Jh.current=null}function Fv(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=uE(l,o,rr),l!==null){On=l;return}}else{if(l=cE(l,o),l!==null){l.flags&=32767,On=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Gn=6,On=null;return}}if(o=o.sibling,o!==null){On=o;return}On=o=i}while(o!==null);Gn===0&&(Gn=5)}function $o(i,o,l){var f=Dt,g=Tr.transition;try{Tr.transition=null,Dt=1,vE(i,o,l,f)}finally{Tr.transition=g,Dt=f}return null}function vE(i,o,l,f){do $a();while(so!==null);if((Gt&6)!==0)throw Error(t(327));l=i.finishedWork;var g=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(Fi(i,S),i===Qn&&(On=Qn=null,oi=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||nf||(nf=!0,zv(K,function(){return $a(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=Tr.transition,Tr.transition=null;var C=Dt;Dt=1;var V=Gt;Gt|=4,Jh.current=null,dE(i,l),Av(l,i),k1(lh),_c=!!ah,lh=ah=null,i.current=l,hE(l),Ws(),Gt=V,Dt=C,Tr.transition=S}else i.current=l;if(nf&&(nf=!1,so=i,rf=g),S=i.pendingLanes,S===0&&(ro=null),He(l.stateNode),Hi(i,bt()),o!==null)for(f=i.onRecoverableError,l=0;l<o.length;l++)g=o[l],f(g.value,{componentStack:g.stack,digest:g.digest});if(tf)throw tf=!1,i=np,np=null,i;return(rf&1)!==0&&i.tag!==0&&$a(),S=i.pendingLanes,(S&1)!==0?i===ip?_u++:(_u=0,ip=i):_u=0,eo(),null}function $a(){if(so!==null){var i=_s(rf),o=Tr.transition,l=Dt;try{if(Tr.transition=null,Dt=16>i?16:i,so===null)var f=!1;else{if(i=so,so=null,rf=0,(Gt&6)!==0)throw Error(t(331));var g=Gt;for(Gt|=4,Ke=i.current;Ke!==null;){var S=Ke,C=S.child;if((Ke.flags&16)!==0){var V=S.deletions;if(V!==null){for(var X=0;X<V.length;X++){var fe=V[X];for(Ke=fe;Ke!==null;){var Te=Ke;switch(Te.tag){case 0:case 11:case 15:pu(8,Te,S)}var Ce=Te.child;if(Ce!==null)Ce.return=Te,Ke=Ce;else for(;Ke!==null;){Te=Ke;var Ee=Te.sibling,qe=Te.return;if(Sv(Te),Te===fe){Ke=null;break}if(Ee!==null){Ee.return=qe,Ke=Ee;break}Ke=qe}}}var Je=S.alternate;if(Je!==null){var nt=Je.child;if(nt!==null){Je.child=null;do{var Dn=nt.sibling;nt.sibling=null,nt=Dn}while(nt!==null)}}Ke=S}}if((S.subtreeFlags&2064)!==0&&C!==null)C.return=S,Ke=C;else e:for(;Ke!==null;){if(S=Ke,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:pu(9,S,S.return)}var ae=S.sibling;if(ae!==null){ae.return=S.return,Ke=ae;break e}Ke=S.return}}var $=i.current;for(Ke=$;Ke!==null;){C=Ke;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,Ke=ue;else e:for(C=$;Ke!==null;){if(V=Ke,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:Qc(9,V)}}catch(at){Rn(V,V.return,at)}if(V===C){Ke=null;break e}var Le=V.sibling;if(Le!==null){Le.return=V.return,Ke=Le;break e}Ke=V.return}}if(Gt=g,eo(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(oe,i)}catch{}f=!0}return f}finally{Dt=l,Tr.transition=o}}return!1}function Ov(i,o,l){o=Wa(l,o),o=tv(i,o,1),i=no(i,o,1),o=Ai(),i!==null&&(Rt(i,1,o),Hi(i,o))}function Rn(i,o,l){if(i.tag===3)Ov(i,i,l);else for(;o!==null;){if(o.tag===3){Ov(o,i,l);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(ro===null||!ro.has(f))){i=Wa(l,i),i=nv(o,i,1),o=no(o,i,1),i=Ai(),o!==null&&(Rt(o,1,i),Hi(o,i));break}}o=o.return}}function xE(i,o,l){var f=i.pingCache;f!==null&&f.delete(o),o=Ai(),i.pingedLanes|=i.suspendedLanes&l,Qn===i&&(oi&l)===l&&(Gn===4||Gn===3&&(oi&130023424)===oi&&500>bt()-tp?qo(i,0):ep|=l),Hi(i,o)}function kv(i,o){o===0&&((i.mode&1)===0?o=1:(o=rt,rt<<=1,(rt&130023424)===0&&(rt=4194304)));var l=Ai();i=Ms(i,o),i!==null&&(Rt(i,o,l),Hi(i,l))}function yE(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),kv(i,l)}function SE(i,o){var l=0;switch(i.tag){case 13:var f=i.stateNode,g=i.memoizedState;g!==null&&(l=g.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),kv(i,l)}var Bv;Bv=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||ki.current)zi=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return zi=!1,lE(i,o,l);zi=(i.flags&131072)!==0}else zi=!1,_n&&(o.flags&1048576)!==0&&v0(o,Uc,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;jc(i,o),i=o.pendingProps;var g=Fa(o,hi.current);Ha(o,l),g=Lh(null,o,f,i,g,l);var S=Nh();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,Bi(f)?(S=!0,Lc(o)):S=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,Th(o),g.updater=$c,o.stateNode=g,g._reactInternals=o,Bh(o,f,i,l),o=Gh(null,o,f,!0,S,l)):(o.tag=0,_n&&S&&mh(o),Ti(null,o,g,l),o=o.child),o;case 16:f=o.elementType;e:{switch(jc(i,o),i=o.pendingProps,g=f._init,f=g(f._payload),o.type=f,g=o.tag=EE(f),i=Br(f,i),g){case 0:o=Hh(null,o,f,i,l);break e;case 1:o=fv(null,o,f,i,l);break e;case 11:o=ov(null,o,f,i,l);break e;case 14:o=av(null,o,f,Br(f.type,i),l);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Br(f,g),Hh(i,o,f,g,l);case 1:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Br(f,g),fv(i,o,f,g,l);case 3:e:{if(dv(o),i===null)throw Error(t(387));f=o.pendingProps,S=o.memoizedState,g=S.element,b0(i,o),Vc(o,f,null,l);var C=o.memoizedState;if(f=C.element,S.isDehydrated)if(S={element:f,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},o.updateQueue.baseState=S,o.memoizedState=S,o.flags&256){g=Wa(Error(t(423)),o),o=hv(i,o,f,l,g);break e}else if(f!==g){g=Wa(Error(t(424)),o),o=hv(i,o,f,l,g);break e}else for(ir=Zs(o.stateNode.containerInfo.firstChild),nr=o,_n=!0,kr=null,l=T0(o,null,f,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ba(),f===g){o=ws(i,o,l);break e}Ti(i,o,f,l)}o=o.child}return o;case 5:return P0(o),i===null&&vh(o),f=o.type,g=o.pendingProps,S=i!==null?i.memoizedProps:null,C=g.children,uh(f,g)?C=null:S!==null&&uh(f,S)&&(o.flags|=32),cv(i,o),Ti(i,o,C,l),o.child;case 6:return i===null&&vh(o),null;case 13:return pv(i,o,l);case 4:return Ah(o,o.stateNode.containerInfo),f=o.pendingProps,i===null?o.child=za(o,null,f,l):Ti(i,o,f,l),o.child;case 11:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Br(f,g),ov(i,o,f,g,l);case 7:return Ti(i,o,o.pendingProps,l),o.child;case 8:return Ti(i,o,o.pendingProps.children,l),o.child;case 12:return Ti(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(f=o.type._context,g=o.pendingProps,S=o.memoizedProps,C=g.value,un(kc,f._currentValue),f._currentValue=C,S!==null)if(Or(S.value,C)){if(S.children===g.children&&!ki.current){o=ws(i,o,l);break e}}else for(S=o.child,S!==null&&(S.return=o);S!==null;){var V=S.dependencies;if(V!==null){C=S.child;for(var X=V.firstContext;X!==null;){if(X.context===f){if(S.tag===1){X=Es(-1,l&-l),X.tag=2;var fe=S.updateQueue;if(fe!==null){fe=fe.shared;var Te=fe.pending;Te===null?X.next=X:(X.next=Te.next,Te.next=X),fe.pending=X}}S.lanes|=l,X=S.alternate,X!==null&&(X.lanes|=l),Eh(S.return,l,o),V.lanes|=l;break}X=X.next}}else if(S.tag===10)C=S.type===o.type?null:S.child;else if(S.tag===18){if(C=S.return,C===null)throw Error(t(341));C.lanes|=l,V=C.alternate,V!==null&&(V.lanes|=l),Eh(C,l,o),C=S.sibling}else C=S.child;if(C!==null)C.return=S;else for(C=S;C!==null;){if(C===o){C=null;break}if(S=C.sibling,S!==null){S.return=C.return,C=S;break}C=C.return}S=C}Ti(i,o,g.children,l),o=o.child}return o;case 9:return g=o.type,f=o.pendingProps.children,Ha(o,l),g=Er(g),f=f(g),o.flags|=1,Ti(i,o,f,l),o.child;case 14:return f=o.type,g=Br(f,o.pendingProps),g=Br(f.type,g),av(i,o,f,g,l);case 15:return lv(i,o,o.type,o.pendingProps,l);case 17:return f=o.type,g=o.pendingProps,g=o.elementType===f?g:Br(f,g),jc(i,o),o.tag=1,Bi(f)?(i=!0,Lc(o)):i=!1,Ha(o,l),J0(o,f,g),Bh(o,f,g,l),Gh(null,o,f,!0,i,l);case 19:return gv(i,o,l);case 22:return uv(i,o,l)}throw Error(t(156,o.tag))};function zv(i,o){return dn(i,o)}function ME(i,o,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ar(i,o,l,f){return new ME(i,o,l,f)}function up(i){return i=i.prototype,!(!i||!i.isReactComponent)}function EE(i){if(typeof i=="function")return up(i)?1:0;if(i!=null){if(i=i.$$typeof,i===B)return 11;if(i===Y)return 14}return 2}function lo(i,o){var l=i.alternate;return l===null?(l=Ar(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function lf(i,o,l,f,g,S){var C=2;if(f=i,typeof i=="function")up(i)&&(C=1);else if(typeof i=="string")C=5;else e:switch(i){case P:return Ko(l.children,g,S,o);case w:C=8,g|=8;break;case N:return i=Ar(12,l,o,g|2),i.elementType=N,i.lanes=S,i;case Q:return i=Ar(13,l,o,g),i.elementType=Q,i.lanes=S,i;case ee:return i=Ar(19,l,o,g),i.elementType=ee,i.lanes=S,i;case H:return uf(l,g,S,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case F:C=10;break e;case z:C=9;break e;case B:C=11;break e;case Y:C=14;break e;case J:C=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return o=Ar(C,l,o,g),o.elementType=i,o.type=f,o.lanes=S,o}function Ko(i,o,l,f){return i=Ar(7,i,f,o),i.lanes=l,i}function uf(i,o,l,f){return i=Ar(22,i,f,o),i.elementType=H,i.lanes=l,i.stateNode={isHidden:!1},i}function cp(i,o,l){return i=Ar(6,i,null,o),i.lanes=l,i}function fp(i,o,l){return o=Ar(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function wE(i,o,l,f,g){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=f,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function dp(i,o,l,f,g,S,C,V,X){return i=new wE(i,o,l,V,X),o===1?(o=1,S===!0&&(o|=8)):o=0,S=Ar(3,null,null,o),i.current=S,S.stateNode=i,S.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Th(S),i}function TE(i,o,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:f==null?null:""+f,children:i,containerInfo:o,implementation:l}}function Vv(i){if(!i)return Js;i=i._reactInternals;e:{if(wt(i)!==i||i.tag!==1)throw Error(t(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(Bi(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Bi(l))return m0(i,l,o)}return o}function Hv(i,o,l,f,g,S,C,V,X){return i=dp(l,f,!0,i,g,S,C,V,X),i.context=Vv(null),l=i.current,f=Ai(),g=oo(l),S=Es(f,g),S.callback=o??null,no(l,S,g),i.current.lanes=g,Rt(i,g,f),Hi(i,f),i}function cf(i,o,l,f){var g=o.current,S=Ai(),C=oo(g);return l=Vv(l),o.context===null?o.context=l:o.pendingContext=l,o=Es(S,C),o.payload={element:i},f=f===void 0?null:f,f!==null&&(o.callback=f),i=no(g,o,C),i!==null&&(Hr(i,g,C,S),zc(i,g,C)),C}function ff(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Gv(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function hp(i,o){Gv(i,o),(i=i.alternate)&&Gv(i,o)}function AE(){return null}var Wv=typeof reportError=="function"?reportError:function(i){console.error(i)};function pp(i){this._internalRoot=i}df.prototype.render=pp.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(t(409));cf(i,o,null,null)},df.prototype.unmount=pp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Yo(function(){cf(null,i,null,null)}),o[vs]=null}};function df(i){this._internalRoot=i}df.prototype.unstable_scheduleHydration=function(i){if(i){var o=en();i={blockedOn:null,target:i,priority:o};for(var l=0;l<$s.length&&o!==0&&o<$s[l].priority;l++);$s.splice(l,0,i),l===0&&P_(i)}};function mp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function hf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Xv(){}function bE(i,o,l,f,g){if(g){if(typeof f=="function"){var S=f;f=function(){var fe=ff(C);S.call(fe)}}var C=Hv(o,f,i,0,null,!1,!1,"",Xv);return i._reactRootContainer=C,i[vs]=C.current,tu(i.nodeType===8?i.parentNode:i),Yo(),C}for(;g=i.lastChild;)i.removeChild(g);if(typeof f=="function"){var V=f;f=function(){var fe=ff(X);V.call(fe)}}var X=dp(i,0,!1,null,null,!1,!1,"",Xv);return i._reactRootContainer=X,i[vs]=X.current,tu(i.nodeType===8?i.parentNode:i),Yo(function(){cf(o,X,l,f)}),X}function pf(i,o,l,f,g){var S=l._reactRootContainer;if(S){var C=S;if(typeof g=="function"){var V=g;g=function(){var X=ff(C);V.call(X)}}cf(o,C,i,g)}else C=bE(l,o,i,g,f);return ff(C)}$t=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=Ht(o.pendingLanes);l!==0&&(Oi(o,l|1),Hi(o,bt()),(Gt&6)===0&&(qa=bt()+500,eo()))}break;case 13:Yo(function(){var f=Ms(i,1);if(f!==null){var g=Ai();Hr(f,i,1,g)}}),hp(i,1)}},hn=function(i){if(i.tag===13){var o=Ms(i,134217728);if(o!==null){var l=Ai();Hr(o,i,134217728,l)}hp(i,134217728)}},Ur=function(i){if(i.tag===13){var o=oo(i),l=Ms(i,o);if(l!==null){var f=Ai();Hr(l,i,o,f)}hp(i,o)}},en=function(){return Dt},Fr=function(i,o){var l=Dt;try{return Dt=i,o()}finally{Dt=l}},et=function(i,o,l){switch(o){case"input":if(le(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var f=l[o];if(f!==i&&f.form===i.form){var g=Pc(f);if(!g)throw Error(t(90));At(f),le(f,g)}}}break;case"textarea":cn(i,l);break;case"select":o=l.value,o!=null&&ft(i,!!l.multiple,o,!1)}},ke=op,xe=Yo;var CE={usingClientEntryPoint:!1,Events:[ru,Ia,Pc,_e,Ue,op]},vu={findFiberByHostInstance:ko,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RE={bundleType:vu.bundleType,version:vu.version,rendererPackageName:vu.rendererPackageName,rendererConfig:vu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=jn(i),i===null?null:i.stateNode},findFiberByHostInstance:vu.findFiberByHostInstance||AE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mf.isDisabled&&mf.supportsFiber)try{oe=mf.inject(RE),De=mf}catch{}}return Gi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CE,Gi.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mp(o))throw Error(t(200));return TE(i,o,null,l)},Gi.createRoot=function(i,o){if(!mp(i))throw Error(t(299));var l=!1,f="",g=Wv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=dp(i,1,!1,null,null,l,!1,f,g),i[vs]=o.current,tu(i.nodeType===8?i.parentNode:i),new pp(o)},Gi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=jn(o),i=i===null?null:i.stateNode,i},Gi.flushSync=function(i){return Yo(i)},Gi.hydrate=function(i,o,l){if(!hf(o))throw Error(t(200));return pf(null,i,o,!0,l)},Gi.hydrateRoot=function(i,o,l){if(!mp(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,g=!1,S="",C=Wv;if(l!=null&&(l.unstable_strictMode===!0&&(g=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),o=Hv(o,null,i,1,l??null,g,!1,S,C),i[vs]=o.current,tu(i),f)for(i=0;i<f.length;i++)l=f[i],g=l._getVersion,g=g(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,g]:o.mutableSourceEagerHydrationData.push(l,g);return new df(o)},Gi.render=function(i,o,l){if(!hf(o))throw Error(t(200));return pf(null,i,o,!1,l)},Gi.unmountComponentAtNode=function(i){if(!hf(i))throw Error(t(40));return i._reactRootContainer?(Yo(function(){pf(null,null,i,!1,function(){i._reactRootContainer=null,i[vs]=null})}),!0):!1},Gi.unstable_batchedUpdates=op,Gi.unstable_renderSubtreeIntoContainer=function(i,o,l,f){if(!hf(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return pf(i,o,l,!1,f)},Gi.version="18.3.1-next-f1338f8080-20240426",Gi}var Jv;function VE(){if(Jv)return vp.exports;Jv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),vp.exports=zE(),vp.exports}var ex;function HE(){if(ex)return gf;ex=1;var s=VE();return gf.createRoot=s.createRoot,gf.hydrateRoot=s.hydrateRoot,gf}var GE=HE();function Ds(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Gy(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _r={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qu={duration:.5,overwrite:!1,delay:0},Ig,ui,vn,Lr=1e8,on=1/Lr,gm=Math.PI*2,WE=gm/4,XE=0,Wy=Math.sqrt,YE=Math.cos,qE=Math.sin,ii=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},zs=function(e){return typeof e=="number"},Ug=function(e){return typeof e>"u"},ps=function(e){return typeof e=="object"},Ki=function(e){return e!==!1},Fg=function(){return typeof window<"u"},_f=function(e){return Pn(e)||ii(e)},Xy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,$E=/random\([^)]+\)/g,KE=/,\s*/g,tx=/(?:-?\.?\d|\.)+/gi,Yy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ml=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qy=/[+-]=-?[.\d]+/,jE=/[^,'"\[\]\s]+/gi,ZE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wn,is,_m,Og,vr={},md={},$y,Ky=function(e){return(md=Cl(e,vr))&&er},kg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ju=function(e,t){return!t&&console.warn(e)},jy=function(e,t){return e&&(vr[e]=t)&&md&&(md[e]=t)||vr},ec=function(){return 0},QE={suppressEvents:!0,isStart:!0,kill:!1},ed={suppressEvents:!0,kill:!1},JE={suppressEvents:!0},Bg={},Ao=[],vm={},Zy,ur={},Mp={},nx=30,td=[],zg="",Vg=function(e){var t=e[0],n,r;if(ps(t)||Pn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=td.length;r--&&!td[r].targetTest(t););n=td[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new xS(e[r],n)))||e.splice(r,1);return e},ha=function(e){return e._gsap||Vg(Nr(e))[0]._gsap},Qy=function(e,t,n){return(n=e[t])&&Pn(n)?e[t]():Ug(n)&&e.getAttribute&&e.getAttribute(t)||n},ji=function(e,t){return(e=e.split(",")).forEach(t)||e},Ln=function(e){return Math.round(e*1e5)/1e5||0},En=function(e){return Math.round(e*1e7)/1e7||0},vl=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},ew=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gd=function(){var e=Ao.length,t=Ao.slice(0),n,r;for(vm={},Ao.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Hg=function(e){return!!(e._initted||e._startAt||e.add)},Jy=function(e,t,n,r){Ao.length&&!ui&&gd(),e.render(t,n,!!(ui&&t<0&&Hg(e))),Ao.length&&!ui&&gd()},eS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jE).length<2?t:ii(e)?e.trim():e},tS=function(e){return e},xr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tw=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Cl=function(e,t){for(var n in t)e[n]=t[n];return e},ix=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ps(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},_d=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},zu=function(e){var t=e.parent||wn,n=e.keyframes?tw(wi(e.keyframes)):xr;if(Ki(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},nw=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},nS=function(e,t,n,r,a){var u=e[r],c;if(a)for(c=t[a];u&&u[a]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=u,t.parent=t._dp=e,t},Ld=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,u=t._next;a?a._next=u:e[n]===t&&(e[n]=u),u?u._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},Ro=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},pa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},iw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xm=function(e,t,n,r){return e._startAt&&(ui?e._startAt.revert(ed):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rw=function s(e){return!e||e._ts&&s(e.parent)},rx=function(e){return e._repeat?Rl(e._tTime,e=e.duration()+e._rDelay)*e:0},Rl=function(e,t){var n=Math.floor(e=En(e/t));return e&&n===e?n-1:n},vd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nd=function(e){return e._end=En(e._start+(e._tDur/Math.abs(e._ts||e._rts||on)||0))},Id=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=En(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nd(e),n._dirty||pa(n,e)),e},iS=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vd(e.rawTime(),t),(!t._dur||dc(0,t.totalDuration(),n)-t._tTime>on)&&t.render(n,!0)),pa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-on}},os=function(e,t,n,r){return t.parent&&Ro(t),t._start=En((zs(n)?n:n||e!==wn?Cr(e,n,t):e._time)+t._delay),t._end=En(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),nS(e,t,"_first","_last",e._sort?"_start":0),ym(t)||(e._recent=t),r||iS(e,t),e._ts<0&&Id(e,e._tTime),e},rS=function(e,t){return(vr.ScrollTrigger||kg("scrollTrigger",t))&&vr.ScrollTrigger.create(t,e)},sS=function(e,t,n,r,a){if(Wg(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!ui&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zy!==dr.frame)return Ao.push(e),e._lazy=[a,r],1},sw=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},ym=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ow=function(e,t,n,r){var a=e.ratio,u=t<0||!t&&(!e._start&&sw(e)&&!(!e._initted&&ym(e))||(e._ts<0||e._dp._ts<0)&&!ym(e))?0:1,c=e._rDelay,d=0,h,p,v;if(c&&e._repeat&&(d=dc(0,e._tDur,t),p=Rl(d,c),e._yoyo&&p&1&&(u=1-u),p!==Rl(e._tTime,c)&&(a=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==a||ui||r||e._zTime===on||!t&&e._zTime){if(!e._initted&&sS(e,t,r,n,d))return;for(v=e._zTime,e._zTime=t||(n?on:0),n||(n=t&&!v),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&xm(e,t,n,!0),e._onUpdate&&!n&&mr(e,"onUpdate"),d&&e._repeat&&!n&&e.parent&&mr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&Ro(e,1),!n&&!ui&&(mr(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aw=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Pl=function(e,t,n,r){var a=e._repeat,u=En(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=u/e._dur),e._dur=u,e._tDur=a?a<0?1e10:En(u*(a+1)+e._rDelay*a):u,c>0&&!r&&Id(e,e._tTime=e._tDur*c),e.parent&&Nd(e),n||pa(e.parent,e),e},sx=function(e){return e instanceof qi?pa(e):Pl(e,e._dur)},lw={_start:0,endTime:ec,totalDuration:ec},Cr=function s(e,t,n){var r=e.labels,a=e._recent||lw,u=e.duration()>=Lr?a.endTime(!1):e._dur,c,d,h;return ii(t)&&(isNaN(t)||t in r)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=u),r[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(d=d/100*(wi(n)?n[0]:n).totalDuration()),c>1?s(e,t.substr(0,c-1),n)+d:u+d)):t==null?u:+t},Vu=function(e,t,n){var r=zs(t[1]),a=(r?2:1)+(e<2?0:1),u=t[a],c,d;if(r&&(u.duration=t[1]),u.parent=n,e){for(c=u,d=n;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=Ki(d.vars.inherit)&&d.parent;u.immediateRender=Ki(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[a-1]}return new Vn(t[0],u,t[a+1])},Fo=function(e,t){return e||e===0?t(e):t},dc=function(e,t,n){return n<e?e:n>t?t:n},Si=function(e,t){return!ii(e)||!(t=ZE.exec(e))?"":t[1]},uw=function(e,t,n){return Fo(n,function(r){return dc(e,t,r)})},Sm=[].slice,oS=function(e,t){return e&&ps(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ps(e[0]))&&!e.nodeType&&e!==is},cw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return ii(r)&&!t||oS(r,1)?(a=n).push.apply(a,Nr(r)):n.push(r)})||n},Nr=function(e,t,n){return vn&&!t&&vn.selector?vn.selector(e):ii(e)&&!n&&(_m||!Dl())?Sm.call((t||Og).querySelectorAll(e),0):wi(e)?cw(e,n):oS(e)?Sm.call(e,0):e?[e]:[]},Mm=function(e){return e=Nr(e)[0]||Ju("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Nr(t,n.querySelectorAll?n:n===e?Ju("Invalid scope")||Og.createElement("div"):e)}},aS=function(e){return e.sort(function(){return .5-Math.random()})},lS=function(e){if(Pn(e))return e;var t=ps(e)?e:{each:e},n=ma(t.ease),r=t.from||0,a=parseFloat(t.base)||0,u={},c=r>0&&r<1,d=isNaN(r)||c,h=t.axis,p=r,v=r;return ii(r)?p=v={center:.5,edges:.5,end:1}[r]||0:!c&&d&&(p=r[0],v=r[1]),function(m,_,M){var E=(M||t).length,x=u[E],y,b,L,T,R,D,P,w,N;if(!x){if(N=t.grid==="auto"?0:(t.grid||[1,Lr])[1],!N){for(P=-Lr;P<(P=M[N++].getBoundingClientRect().left)&&N<E;);N<E&&N--}for(x=u[E]=[],y=d?Math.min(N,E)*p-.5:r%N,b=N===Lr?0:d?E*v/N-.5:r/N|0,P=0,w=Lr,D=0;D<E;D++)L=D%N-y,T=b-(D/N|0),x[D]=R=h?Math.abs(h==="y"?T:L):Wy(L*L+T*T),R>P&&(P=R),R<w&&(w=R);r==="random"&&aS(x),x.max=P-w,x.min=w,x.v=E=(parseFloat(t.amount)||parseFloat(t.each)*(N>E?E-1:h?h==="y"?E/N:N:Math.max(N,E/N))||0)*(r==="edges"?-1:1),x.b=E<0?a-E:a,x.u=Si(t.amount||t.each)||0,n=n&&E<0?Ew(n):n}return E=(x[m]-x.min)/x.max||0,En(x.b+(n?n(E):E)*x.v)+x.u}},Em=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=En(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(zs(n)?0:Si(n))}},uS=function(e,t){var n=wi(e),r,a;return!n&&ps(e)&&(r=n=e.radius||Lr,e.values?(e=Nr(e.values),(a=!zs(e[0]))&&(r*=r)):e=Em(e.increment)),Fo(t,n?Pn(e)?function(u){return a=e(u),Math.abs(a-u)<=r?a:u}:function(u){for(var c=parseFloat(a?u.x:u),d=parseFloat(a?u.y:0),h=Lr,p=0,v=e.length,m,_;v--;)a?(m=e[v].x-c,_=e[v].y-d,m=m*m+_*_):m=Math.abs(e[v]-c),m<h&&(h=m,p=v);return p=!r||h<=r?e[p]:u,a||p===u||zs(u)?p:p+Si(u)}:Em(e))},cS=function(e,t,n,r){return Fo(wi(e)?!t:n===!0?!!(n=0):!r,function(){return wi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},fw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,u){return u(a)},r)}},dw=function(e,t){return function(n){return e(parseFloat(n))+(t||Si(n))}},hw=function(e,t,n){return dS(e,t,0,1,n)},fS=function(e,t,n){return Fo(n,function(r){return e[~~t(r)]})},pw=function s(e,t,n){var r=t-e;return wi(e)?fS(e,s(0,e.length),t):Fo(n,function(a){return(r+(a-e)%r)%r+e})},mw=function s(e,t,n){var r=t-e,a=r*2;return wi(e)?fS(e,s(0,e.length-1),t):Fo(n,function(u){return u=(a+(u-e)%a)%a||0,e+(u>r?a-u:u)})},tc=function(e){return e.replace($E,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(KE);return cS(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},dS=function(e,t,n,r,a){var u=t-e,c=r-n;return Fo(a,function(d){return n+((d-e)/u*c||0)})},gw=function s(e,t,n,r){var a=isNaN(e+t)?0:function(_){return(1-_)*e+_*t};if(!a){var u=ii(e),c={},d,h,p,v,m;if(n===!0&&(r=1)&&(n=null),u)e={p:e},t={p:t};else if(wi(e)&&!wi(t)){for(p=[],v=e.length,m=v-2,h=1;h<v;h++)p.push(s(e[h-1],e[h]));v--,a=function(M){M*=v;var E=Math.min(m,~~M);return p[E](M-E)},n=t}else r||(e=Cl(wi(e)?[]:{},e));if(!p){for(d in t)Gg.call(c,e,d,"get",t[d]);a=function(M){return qg(M,c)||(u?e.p:e)}}}return Fo(n,a)},ox=function(e,t,n){var r=e.labels,a=Lr,u,c,d;for(u in r)c=r[u]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(d=u,a=c);return d},mr=function(e,t,n){var r=e.vars,a=r[t],u=vn,c=e._ctx,d,h,p;if(a)return d=r[t+"Params"],h=r.callbackScope||e,n&&Ao.length&&gd(),c&&(vn=c),p=d?a.apply(h,d):a.call(h),vn=u,p},Du=function(e){return Ro(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ui),e.progress()<1&&mr(e,"onInterrupt"),e},gl,hS=[],pS=function(e){if(e)if(e=!e.name&&e.default||e,Fg()||e.headless){var t=e.name,n=Pn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:ec,render:qg,add:Gg,kill:Nw,modifier:Lw,rawVars:0},u={targetTest:0,get:0,getSetter:Yg,aliases:{},register:0};if(Dl(),e!==r){if(ur[t])return;xr(r,xr(_d(e,a),u)),Cl(r.prototype,Cl(a,_d(e,u))),ur[r.prop=t]=r,e.targetTest&&(td.push(r),Bg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}jy(t,r),e.register&&e.register(er,r,Zi)}else hS.push(e)},sn=255,Lu={aqua:[0,sn,sn],lime:[0,sn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,sn],navy:[0,0,128],white:[sn,sn,sn],olive:[128,128,0],yellow:[sn,sn,0],orange:[sn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[sn,0,0],pink:[sn,192,203],cyan:[0,sn,sn],transparent:[sn,sn,sn,0]},Ep=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*sn+.5|0},mS=function(e,t,n){var r=e?zs(e)?[e>>16,e>>8&sn,e&sn]:0:Lu.black,a,u,c,d,h,p,v,m,_,M;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lu[e])r=Lu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+a+a+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&sn,r&sn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&sn,e&sn]}else if(e.substr(0,3)==="hsl"){if(r=M=e.match(tx),!t)d=+r[0]%360/360,h=+r[1]/100,p=+r[2]/100,u=p<=.5?p*(h+1):p+h-p*h,a=p*2-u,r.length>3&&(r[3]*=1),r[0]=Ep(d+1/3,a,u),r[1]=Ep(d,a,u),r[2]=Ep(d-1/3,a,u);else if(~e.indexOf("="))return r=e.match(Yy),n&&r.length<4&&(r[3]=1),r}else r=e.match(tx)||Lu.transparent;r=r.map(Number)}return t&&!M&&(a=r[0]/sn,u=r[1]/sn,c=r[2]/sn,v=Math.max(a,u,c),m=Math.min(a,u,c),p=(v+m)/2,v===m?d=h=0:(_=v-m,h=p>.5?_/(2-v-m):_/(v+m),d=v===a?(u-c)/_+(u<c?6:0):v===u?(c-a)/_+2:(a-u)/_+4,d*=60),r[0]=~~(d+.5),r[1]=~~(h*100+.5),r[2]=~~(p*100+.5)),n&&r.length<4&&(r[3]=1),r},gS=function(e){var t=[],n=[],r=-1;return e.split(bo).forEach(function(a){var u=a.match(ml)||[];t.push.apply(t,u),n.push(r+=u.length+1)}),t.c=n,t},ax=function(e,t,n){var r="",a=(e+r).match(bo),u=t?"hsla(":"rgba(",c=0,d,h,p,v;if(!a)return e;if(a=a.map(function(m){return(m=mS(m,t,1))&&u+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(p=gS(e),d=n.c,d.join(r)!==p.c.join(r)))for(h=e.replace(bo,"1").split(ml),v=h.length-1;c<v;c++)r+=h[c]+(~d.indexOf(c)?a.shift()||u+"0,0,0,0)":(p.length?p:a.length?a:n).shift());if(!h)for(h=e.split(bo),v=h.length-1;c<v;c++)r+=h[c]+a[c];return r+h[v]},bo=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lu)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),_w=/hsl[a]?\(/,_S=function(e){var t=e.join(" "),n;if(bo.lastIndex=0,bo.test(t))return n=_w.test(t),e[1]=ax(e[1],n),e[0]=ax(e[0],n,gS(e[1])),!0},nc,dr=(function(){var s=Date.now,e=500,t=33,n=s(),r=n,a=1e3/240,u=a,c=[],d,h,p,v,m,_,M=function E(x){var y=s()-r,b=x===!0,L,T,R,D;if((y>e||y<0)&&(n+=y-t),r+=y,R=r-n,L=R-u,(L>0||b)&&(D=++v.frame,m=R-v.time*1e3,v.time=R=R/1e3,u+=L+(L>=a?4:a-L),T=1),b||(d=h(E)),T)for(_=0;_<c.length;_++)c[_](R,m,D,x)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return m/(1e3/(x||60))},wake:function(){$y&&(!_m&&Fg()&&(is=_m=window,Og=is.document||{},vr.gsap=er,(is.gsapVersions||(is.gsapVersions=[])).push(er.version),Ky(md||is.GreenSockGlobals||!is.gsap&&is||{}),hS.forEach(pS)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&v.sleep(),h=p||function(x){return setTimeout(x,u-v.time*1e3+1|0)},nc=1,M(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),nc=0,h=ec},lagSmoothing:function(x,y){e=x||1/0,t=Math.min(y||33,e)},fps:function(x){a=1e3/(x||240),u=v.time*1e3+a},add:function(x,y,b){var L=y?function(T,R,D,P){x(T,R,D,P),v.remove(L)}:x;return v.remove(x),c[b?"unshift":"push"](L),Dl(),L},remove:function(x,y){~(y=c.indexOf(x))&&c.splice(y,1)&&_>=y&&_--},_listeners:c},v})(),Dl=function(){return!nc&&dr.wake()},Bt={},vw=/^[\d.\-M][\d.\-,\s]/,xw=/["']/g,yw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,u=n.length,c,d,h;a<u;a++)d=n[a],c=a!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[r]=isNaN(h)?h.replace(xw,"").trim():+h,r=d.substr(c+1).trim();return t},Sw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Mw=function(e){var t=(e+"").split("("),n=Bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[yw(t[1])]:Sw(e).split(",").map(eS)):Bt._CE&&vw.test(e)?Bt._CE("",e):n},Ew=function(e){return function(t){return 1-e(1-t)}},ma=function(e,t){return e&&(Pn(e)?e:Bt[e]||Mw(e))||t},Ta=function(e,t,n,r){n===void 0&&(n=function(d){return 1-t(1-d)}),r===void 0&&(r=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},u;return ji(e,function(c){Bt[c]=vr[c]=a,Bt[u=c.toLowerCase()]=n;for(var d in a)Bt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=Bt[c+"."+d]=a[d]}),a},vS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wp=function s(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),u=a/gm*(Math.asin(1/r)||0),c=function(p){return p===1?1:r*Math.pow(2,-10*p)*qE((p-u)*a)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:vS(c);return a=gm/a,d.config=function(h,p){return s(e,h,p)},d},Tp=function s(e,t){t===void 0&&(t=1.70158);var n=function(u){return u?--u*u*((t+1)*u+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:vS(n);return r.config=function(a){return s(e,a)},r};ji("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ta(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;Ta("Elastic",wp("in"),wp("out"),wp());(function(s,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?s*c*c:c<n?s*Math.pow(c-1.5/e,2)+.75:c<r?s*(c-=2.25/e)*c+.9375:s*Math.pow(c-2.625/e,2)+.984375};Ta("Bounce",function(u){return 1-a(1-u)},a)})(7.5625,2.75);Ta("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ta("Circ",function(s){return-(Wy(1-s*s)-1)});Ta("Sine",function(s){return s===1?1:-YE(s*WE)+1});Ta("Back",Tp("in"),Tp("out"),Tp());Bt.SteppedEase=Bt.steps=vr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,u=1-on;return function(c){return((r*dc(0,u,c)|0)+a)*n}}};Qu.ease=Bt["quad.out"];ji("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return zg+=s+","+s+"Params,"});var xS=function(e,t){this.id=XE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qy,this.set=t?t.getSetter:Yg},ic=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Pl(this,+t.duration,1,1),this.data=t.data,vn&&(this._ctx=vn,vn.data.push(this)),nc||dr.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Pl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Dl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Id(this,n),!a._dp||a.parent||iS(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&os(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===on||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Jy(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rx(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?Rl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-on?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?vd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-on?0:this._rts,this.totalTime(dc(-Math.abs(this._delay),this.totalDuration(),a),r!==!1),Nd(this),iw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Dl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==on&&(this._tTime-=on)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=En(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&os(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ki(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vd(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=JE);var r=ui;return ui=n,Hg(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ui=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,sx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Cr(this,n),Ki(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ki(r)),this._dur||(this._zTime=-on),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-on:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-on,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-on)},e.eventCallback=function(n,r,a){var u=this.vars;return arguments.length>1?(r?(u[n]=r,a&&(u[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete u[n],this):u[n]},e.then=function(n){var r=this,a=r._prom;return new Promise(function(u){var c=Pn(n)?n:tS,d=function(){var p=r.then;r.then=null,a&&a(),Pn(c)&&(c=c(r))&&(c.then||c===r)&&(r.then=p),u(c),r.then=p};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?d():r._prom=d})},e.kill=function(){Du(this)},s})();xr(ic.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-on,_prom:0,_ps:!1,_rts:1});var qi=(function(s){Gy(e,s);function e(n,r){var a;return n===void 0&&(n={}),a=s.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Ki(n.sortChildren),wn&&os(n.parent||wn,Ds(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&rS(Ds(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,u){return Vu(0,arguments,this),this},t.from=function(r,a,u){return Vu(1,arguments,this),this},t.fromTo=function(r,a,u,c){return Vu(2,arguments,this),this},t.set=function(r,a,u){return a.duration=0,a.parent=this,zu(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new Vn(r,a,Cr(this,u),1),this},t.call=function(r,a,u){return os(this,Vn.delayedCall(0,r,a),u)},t.staggerTo=function(r,a,u,c,d,h,p){return u.duration=a,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new Vn(r,u,Cr(this,d)),this},t.staggerFrom=function(r,a,u,c,d,h,p){return u.runBackwards=1,zu(u).immediateRender=Ki(u.immediateRender),this.staggerTo(r,a,u,c,d,h,p)},t.staggerFromTo=function(r,a,u,c,d,h,p,v){return c.startAt=u,zu(c).immediateRender=Ki(c.immediateRender),this.staggerTo(r,a,c,d,h,p,v)},t.render=function(r,a,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=r<=0?0:En(r),v=this._zTime<0!=r<0&&(this._initted||!h),m,_,M,E,x,y,b,L,T,R,D,P;if(this!==wn&&p>d&&r>=0&&(p=d),p!==this._tTime||u||v){if(c!==this._time&&h&&(p+=this._time-c,r+=this._time-c),m=p,T=this._start,L=this._ts,y=!L,v&&(h||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(D=this._yoyo,x=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(x*100+r,a,u);if(m=En(p%x),p===d?(E=this._repeat,m=h):(R=En(p/x),E=~~R,E&&E===R&&(m=h,E--),m>h&&(m=h)),R=Rl(this._tTime,x),!c&&this._tTime&&R!==E&&this._tTime-R*x-this._dur<=0&&(R=E),D&&E&1&&(m=h-m,P=1),E!==R&&!this._lock){var w=D&&R&1,N=w===(D&&E&1);if(E<R&&(w=!w),c=w?0:p%h?h:p,this._lock=1,this.render(c||(P?0:En(E*x)),a,!h)._lock=0,this._tTime=p,!a&&this.parent&&mr(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1,R=E),c&&c!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,N&&(this._lock=2,c=w?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=aw(this,En(c),En(m)),b&&(p-=m-(m=b._start))),this._tTime=p,this._time=m,this._act=!!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&p&&h&&!a&&!R&&(mr(this,"onStart"),this._tTime!==p))return this;if(m>=c&&r>=0)for(_=this._first;_;){if(M=_._next,(_._act||m>=_._start)&&_._ts&&b!==_){if(_.parent!==this)return this.render(r,a,u);if(_.render(_._ts>0?(m-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(m-_._start)*_._ts,a,u),m!==this._time||!this._ts&&!y){b=0,M&&(p+=this._zTime=-on);break}}_=M}else{_=this._last;for(var F=r<0?r:m;_;){if(M=_._prev,(_._act||F<=_._end)&&_._ts&&b!==_){if(_.parent!==this)return this.render(r,a,u);if(_.render(_._ts>0?(F-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(F-_._start)*_._ts,a,u||ui&&Hg(_)),m!==this._time||!this._ts&&!y){b=0,M&&(p+=this._zTime=F?-on:on);break}}_=M}}if(b&&!a&&(this.pause(),b.render(m>=c?0:-on)._zTime=m>=c?1:-1,this._ts))return this._start=T,Nd(this),this.render(r,a,u);this._onUpdate&&!a&&mr(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(T===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&Ro(this,1),!a&&!(r<0&&!c)&&(p||c||!d)&&(mr(this,p===d&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var u=this;if(zs(a)||(a=Cr(this,a,r)),!(r instanceof ic)){if(wi(r))return r.forEach(function(c){return u.add(c,a)}),this;if(ii(r))return this.addLabel(r,a);if(Pn(r))r=Vn.delayedCall(0,r);else return this}return this!==r?os(this,r,a):this},t.getChildren=function(r,a,u,c){r===void 0&&(r=!0),a===void 0&&(a=!0),u===void 0&&(u=!0),c===void 0&&(c=-Lr);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof Vn?a&&d.push(h):(u&&d.push(h),r&&d.push.apply(d,h.getChildren(!0,a,u)))),h=h._next;return d},t.getById=function(r){for(var a=this.getChildren(1,1,1),u=a.length;u--;)if(a[u].vars.id===r)return a[u]},t.remove=function(r){return ii(r)?this.removeLabel(r):Pn(r)?this.killTweensOf(r):(r.parent===this&&Ld(this,r),r===this._recent&&(this._recent=this._last),pa(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=En(dr.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=Cr(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,u){var c=Vn.delayedCall(0,a||ec,u);return c.data="isPause",this._hasPause=1,os(this,c,Cr(this,r))},t.removePause=function(r){var a=this._first;for(r=Cr(this,r);a;)a._start===r&&a.data==="isPause"&&Ro(a),a=a._next},t.killTweensOf=function(r,a,u){for(var c=this.getTweensOf(r,u),d=c.length;d--;)yo!==c[d]&&c[d].kill(r,a);return this},t.getTweensOf=function(r,a){for(var u=[],c=Nr(r),d=this._first,h=zs(a),p;d;)d instanceof Vn?ew(d._targets,c)&&(h?(!yo||d._initted&&d._ts)&&d.globalTime(0)<=a&&d.globalTime(d.totalDuration())>a:!a||d.isActive())&&u.push(d):(p=d.getTweensOf(c,a)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(r,a){a=a||{};var u=this,c=Cr(u,r),d=a,h=d.startAt,p=d.onStart,v=d.onStartParams,m=d.immediateRender,_,M=Vn.to(u,xr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||on,onStart:function(){if(u.pause(),!_){var x=a.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());M._dur!==x&&Pl(M,x,0,1).render(M._time,!0,!0),_=1}p&&p.apply(M,v||[])}},a));return m?M.render(0):M},t.tweenFromTo=function(r,a,u){return this.tweenTo(a,xr({startAt:{time:Cr(this,r)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ox(this,Cr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ox(this,Cr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+on)},t.shiftChildren=function(r,a,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(r=En(r);c;)c._start>=u&&(c._start+=r,c._end+=r),c=c._next;if(a)for(h in d)d[h]>=u&&(d[h]+=r);return pa(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,u;a;)u=a._next,this.remove(a),a=u;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),pa(this)},t.totalDuration=function(r){var a=0,u=this,c=u._last,d=Lr,h,p,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-r:r));if(u._dirty){for(v=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,os(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(a-=p,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=En(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>a&&c._ts&&(a=c._end),c=h;Pl(u,u===wn&&u._time>a?u._time:a,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(r){if(wn._ts&&(Jy(wn,vd(r,wn)),Zy=dr.frame),dr.frame>=nx){nx+=_r.autoSleep||120;var a=wn._first;if((!a||!a._ts)&&_r.autoSleep&&dr._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||dr.sleep()}}},e})(ic);xr(qi.prototype,{_lock:0,_hasPause:0,_forcing:0});var ww=function(e,t,n,r,a,u,c){var d=new Zi(this._pt,e,t,0,1,TS,null,a),h=0,p=0,v,m,_,M,E,x,y,b;for(d.b=n,d.e=r,n+="",r+="",(y=~r.indexOf("random("))&&(r=tc(r)),u&&(b=[n,r],u(b,e,t),n=b[0],r=b[1]),m=n.match(Sp)||[];v=Sp.exec(r);)M=v[0],E=r.substring(h,v.index),_?_=(_+1)%5:E.substr(-5)==="rgba("&&(_=1),M!==m[p++]&&(x=parseFloat(m[p-1])||0,d._pt={_next:d._pt,p:E||p===1?E:",",s:x,c:M.charAt(1)==="="?vl(x,M)-x:parseFloat(M)-x,m:_&&_<4?Math.round:0},h=Sp.lastIndex);return d.c=h<r.length?r.substring(h,r.length):"",d.fp=c,(qy.test(r)||y)&&(d.e=0),this._pt=d,d},Gg=function(e,t,n,r,a,u,c,d,h,p){Pn(r)&&(r=r(a||0,e,u));var v=e[t],m=n!=="get"?n:Pn(v)?h?e[t.indexOf("set")||!Pn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():v,_=Pn(v)?h?Rw:ES:Xg,M;if(ii(r)&&(~r.indexOf("random(")&&(r=tc(r)),r.charAt(1)==="="&&(M=vl(m,r)+(Si(m)||0),(M||M===0)&&(r=M))),!p||m!==r||wm)return!isNaN(m*r)&&r!==""?(M=new Zi(this._pt,e,t,+m||0,r-(m||0),typeof v=="boolean"?Dw:wS,0,_),h&&(M.fp=h),c&&M.modifier(c,this,e),this._pt=M):(!v&&!(t in e)&&kg(t,r),ww.call(this,e,t,m,r,_,d||_r.stringFilter,h))},Tw=function(e,t,n,r,a){if(Pn(e)&&(e=Hu(e,a,t,n,r)),!ps(e)||e.style&&e.nodeType||wi(e)||Xy(e))return ii(e)?Hu(e,a,t,n,r):e;var u={},c;for(c in e)u[c]=Hu(e[c],a,t,n,r);return u},yS=function(e,t,n,r,a,u){var c,d,h,p;if(ur[e]&&(c=new ur[e]).init(a,c.rawVars?t[e]:Tw(t[e],r,a,u,n),n,r,u)!==!1&&(n._pt=d=new Zi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==gl))for(h=n._ptLookup[n._targets.indexOf(a)],p=c._props.length;p--;)h[c._props[p]]=d;return c},yo,wm,Wg=function s(e,t,n){var r=e.vars,a=r.ease,u=r.startAt,c=r.immediateRender,d=r.lazy,h=r.onUpdate,p=r.runBackwards,v=r.yoyoEase,m=r.keyframes,_=r.autoRevert,M=e._dur,E=e._startAt,x=e._targets,y=e.parent,b=y&&y.data==="nested"?y.vars.targets:x,L=e._overwrite==="auto"&&!Ig,T=e.timeline,R=r.easeReverse||v,D,P,w,N,F,z,B,Q,ee,Y,J,H,G;if(T&&(!m||!a)&&(a="none"),e._ease=ma(a,Qu.ease),e._rEase=R&&(ma(R)||e._ease),e._from=!T&&!!r.runBackwards,e._from&&(e.ratio=1),!T||m&&!r.stagger){if(Q=x[0]?ha(x[0]).harness:0,H=Q&&r[Q.prop],D=_d(r,Bg),E&&(E._zTime<0&&E.progress(1),t<0&&p&&c&&!_?E.render(-1,!0):E.revert(p&&M?ed:QE),E._lazy=0),u){if(Ro(e._startAt=Vn.set(x,xr({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&Ki(d),startAt:null,delay:0,onUpdate:h&&function(){return mr(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ui||!c&&!_)&&e._startAt.revert(ed),c&&M&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(p&&M&&!E){if(t&&(c=!1),w=xr({overwrite:!1,data:"isFromStart",lazy:c&&!E&&Ki(d),immediateRender:c,stagger:0,parent:y},D),H&&(w[Q.prop]=H),Ro(e._startAt=Vn.set(x,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ui?e._startAt.revert(ed):e._startAt.render(-1,!0)),e._zTime=t,!c)s(e._startAt,on,on);else if(!t)return}for(e._pt=e._ptCache=0,d=M&&Ki(d)||d&&!M,P=0;P<x.length;P++){if(F=x[P],B=F._gsap||Vg(x)[P]._gsap,e._ptLookup[P]=Y={},vm[B.id]&&Ao.length&&gd(),J=b===x?P:b.indexOf(F),Q&&(ee=new Q).init(F,H||D,e,J,b)!==!1&&(e._pt=N=new Zi(e._pt,F,ee.name,0,1,ee.render,ee,0,ee.priority),ee._props.forEach(function(te){Y[te]=N}),ee.priority&&(z=1)),!Q||H)for(w in D)ur[w]&&(ee=yS(w,D,e,J,F,b))?ee.priority&&(z=1):Y[w]=N=Gg.call(e,F,w,"get",D[w],J,b,0,r.stringFilter);e._op&&e._op[P]&&e.kill(F,e._op[P]),L&&e._pt&&(yo=e,wn.killTweensOf(F,Y,e.globalTime(t)),G=!e.parent,yo=0),e._pt&&d&&(vm[B.id]=1)}z&&AS(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!G,m&&t<=0&&T.render(Lr,!0,!0)},Aw=function(e,t,n,r,a,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,v,m,_;if(!h)for(h=e._ptCache[t]=[],m=e._ptLookup,_=e._targets.length;_--;){if(p=m[_][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return wm=1,e.vars[t]="+=0",Wg(e,c),wm=0,d?Ju(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(_=h.length;_--;)v=h[_],p=v._pt||v,p.s=(r||r===0)&&!a?r:p.s+(r||0)+u*p.c,p.c=n-p.s,v.e&&(v.e=Ln(n)+Si(v.e)),v.b&&(v.b=p.s+Si(v.b))},bw=function(e,t){var n=e[0]?ha(e[0]).harness:0,r=n&&n.aliases,a,u,c,d;if(!r)return t;a=Cl({},t);for(u in r)if(u in a)for(d=r[u].split(","),c=d.length;c--;)a[d[c]]=a[u];return a},Cw=function(e,t,n,r){var a=t.ease||r||"power1.inOut",u,c;if(wi(t))c=n[e]||(n[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:a})});else for(u in t)c=n[u]||(n[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:a})},Hu=function(e,t,n,r,a){return Pn(e)?e.call(t,n,r,a):ii(e)&&~e.indexOf("random(")?tc(e):e},SS=zg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",MS={};ji(SS+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return MS[s]=1});var Vn=(function(s){Gy(e,s);function e(n,r,a,u){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=s.call(this,u?r:zu(r))||this;var d=c.vars,h=d.duration,p=d.delay,v=d.immediateRender,m=d.stagger,_=d.overwrite,M=d.keyframes,E=d.defaults,x=d.scrollTrigger,y=r.parent||wn,b=(wi(n)||Xy(n)?zs(n[0]):"length"in r)?[n]:Nr(n),L,T,R,D,P,w,N,F;if(c._targets=b.length?Vg(b):Ju("GSAP target "+n+" not found. https://gsap.com",!_r.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=_,M||m||_f(h)||_f(p)){r=c.vars;var z=r.easeReverse||r.yoyoEase;if(L=c.timeline=new qi({data:"nested",defaults:E||{},targets:y&&y.data==="nested"?y.vars.targets:b}),L.kill(),L.parent=L._dp=Ds(c),L._start=0,m||_f(h)||_f(p)){if(D=b.length,N=m&&lS(m),ps(m))for(P in m)~SS.indexOf(P)&&(F||(F={}),F[P]=m[P]);for(T=0;T<D;T++)R=_d(r,MS),R.stagger=0,z&&(R.easeReverse=z),F&&Cl(R,F),w=b[T],R.duration=+Hu(h,Ds(c),T,w,b),R.delay=(+Hu(p,Ds(c),T,w,b)||0)-c._delay,!m&&D===1&&R.delay&&(c._delay=p=R.delay,c._start+=p,R.delay=0),L.to(w,R,N?N(T,w,b):0),L._ease=Bt.none;L.duration()?h=p=0:c.timeline=0}else if(M){zu(xr(L.vars.defaults,{ease:"none"})),L._ease=ma(M.ease||r.ease||"none");var B=0,Q,ee,Y;if(wi(M))M.forEach(function(J){return L.to(b,J,">")}),L.duration();else{R={};for(P in M)P==="ease"||P==="easeEach"||Cw(P,M[P],R,M.easeEach);for(P in R)for(Q=R[P].sort(function(J,H){return J.t-H.t}),B=0,T=0;T<Q.length;T++)ee=Q[T],Y={ease:ee.e,duration:(ee.t-(T?Q[T-1].t:0))/100*h},Y[P]=ee.v,L.to(b,Y,B),B+=Y.duration;L.duration()<h&&L.to({},{duration:h-L.duration()})}}h||c.duration(h=L.duration())}else c.timeline=0;return _===!0&&!Ig&&(yo=Ds(c),wn.killTweensOf(b),yo=0),os(y,Ds(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(v||!h&&!M&&c._start===En(y._time)&&Ki(v)&&rw(Ds(c))&&y.data!=="nested")&&(c._tTime=-on,c.render(Math.max(0,-p)||0)),x&&rS(Ds(c),x),c}var t=e.prototype;return t.render=function(r,a,u){var c=this._time,d=this._tDur,h=this._dur,p=r<0,v=r>d-on&&!p?d:r<on?0:r,m,_,M,E,x,y,b,L;if(!h)ow(this,r,a,u);else if(v!==this._tTime||!r||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(m=v,L=this.timeline,this._repeat){if(E=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(E*100+r,a,u);if(m=En(v%E),v===d?(M=this._repeat,m=h):(x=En(v/E),M=~~x,M&&M===x?(m=h,M--):m>h&&(m=h)),y=this._yoyo&&M&1,y&&(m=h-m),x=Rl(this._tTime,E),m===c&&!u&&this._initted&&M===x)return this._tTime=v,this;M!==x&&this.vars.repeatRefresh&&!y&&!this._lock&&m!==E&&this._initted&&(this._lock=u=1,this.render(En(E*M),!0).invalidate()._lock=0)}if(!this._initted){if(sS(this,p?r:m,u,a,v))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&M!==x))return this;if(h!==this._dur)return this.render(r,a,u)}if(this._rEase){var T=m<c;if(T!==this._inv){var R=T?c:h-c;this._inv=T,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=R?(T?-1:1)/R:0,this._invScale=T?-this.ratio:1-this.ratio,this._invEase=T?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((m-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(m/h);if(this._from&&(this.ratio=b=1-b),this._tTime=v,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&v&&!a&&!x&&(mr(this,"onStart"),this._tTime!==v))return this;for(_=this._pt;_;)_.r(b,_.d),_=_._next;L&&L.render(r<0?r:L._dur*L._ease(m/this._dur),a,u)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(p&&xm(this,r,a,u),mr(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!a&&this.parent&&mr(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(p&&!this._onUpdate&&xm(this,r,!0,!0),(r||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Ro(this,1),!a&&!(p&&!c)&&(v||c||y)&&(mr(this,v===d?"onComplete":"onReverseComplete",!0),this._prom&&!(v<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,u,c,d){nc||dr.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Wg(this,h),p=this._ease(h/this._dur),Aw(this,r,a,u,c,p,h,d)?this.resetTo(r,a,u,c,1):(Id(this,0),this.parent||nS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Du(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ui),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,yo&&yo.vars.overwrite!==!0)._first||Du(this),this.parent&&u!==this.timeline.totalDuration()&&Pl(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=r?Nr(r):c,h=this._ptLookup,p=this._pt,v,m,_,M,E,x,y;if((!a||a==="all")&&nw(c,d))return a==="all"&&(this._pt=0),Du(this);for(v=this._op=this._op||[],a!=="all"&&(ii(a)&&(E={},ji(a,function(b){return E[b]=1}),a=E),a=bw(c,a)),y=c.length;y--;)if(~d.indexOf(c[y])){m=h[y],a==="all"?(v[y]=a,M=m,_={}):(_=v[y]=v[y]||{},M=a);for(E in M)x=m&&m[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&Ld(this,x,"_pt"),delete m[E]),_!=="all"&&(_[E]=1)}return this._initted&&!this._pt&&p&&Du(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Vu(1,arguments)},e.delayedCall=function(r,a,u,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(r,a,u){return Vu(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,u){return wn.killTweensOf(r,a,u)},e})(ic);xr(Vn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ji("staggerTo,staggerFrom,staggerFromTo",function(s){Vn[s]=function(){var e=new qi,t=Sm.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Xg=function(e,t,n){return e[t]=n},ES=function(e,t,n){return e[t](n)},Rw=function(e,t,n,r){return e[t](r.fp,n)},Pw=function(e,t,n){return e.setAttribute(t,n)},Yg=function(e,t){return Pn(e[t])?ES:Ug(e[t])&&e.setAttribute?Pw:Xg},wS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Dw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},TS=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},qg=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Lw=function(e,t,n,r){for(var a=this._pt,u;a;)u=a._next,a.p===r&&a.modifier(e,t,n),a=u},Nw=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ld(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Iw=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},AS=function(e){for(var t=e._pt,n,r,a,u;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:u)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:u=t,t=n}e._pt=a},Zi=(function(){function s(t,n,r,a,u,c,d,h,p){this.t=n,this.s=a,this.c=u,this.p=r,this.r=c||wS,this.d=d||this,this.set=h||Xg,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=Iw,this.m=n,this.mt=a,this.tween=r},s})();ji(zg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Bg[s]=1});vr.TweenMax=vr.TweenLite=Vn;vr.TimelineLite=vr.TimelineMax=qi;wn=new qi({sortChildren:!1,defaults:Qu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_r.stringFilter=_S;var ga=[],nd={},Uw=[],lx=0,Fw=0,Ap=function(e){return(nd[e]||Uw).map(function(t){return t()})},Tm=function(){var e=Date.now(),t=[];e-lx>2&&(Ap("matchMediaInit"),ga.forEach(function(n){var r=n.queries,a=n.conditions,u,c,d,h;for(c in r)u=is.matchMedia(r[c]).matches,u&&(d=1),u!==a[c]&&(a[c]=u,h=1);h&&(n.revert(),d&&t.push(n))}),Ap("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),lx=e,Ap("matchMedia"))},bS=(function(){function s(t,n){this.selector=n&&Mm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fw++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,r,a){Pn(n)&&(a=r,r=n,n=Pn);var u=this,c=function(){var h=vn,p=u.selector,v;return h&&h!==u&&h.data.push(u),a&&(u.selector=Mm(a)),vn=u,v=r.apply(u,arguments),Pn(v)&&u._r.push(v),vn=h,u.selector=p,u.isReverted=!1,v};return u.last=c,n===Pn?c(u,function(d){return u.add(null,d)}):n?u[n]=c:c},e.ignore=function(n){var r=vn;vn=null,n(this),vn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof s?n.push.apply(n,r.getTweens()):r instanceof Vn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?(function(){for(var c=a.getTweens(),d=a.data.length,h;d--;)h=a.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,v){return v.g-p.g||-1/0}).forEach(function(p){return p.t.revert(n)}),d=a.data.length;d--;)h=a.data[d],h instanceof qi?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Vn)&&h.revert&&h.revert(n);a._r.forEach(function(p){return p(n,a)}),a.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var u=ga.length;u--;)ga[u].id===this.id&&ga.splice(u,1)},e.revert=function(n){this.kill(n||{})},s})(),Ow=(function(){function s(t){this.contexts=[],this.scope=t,vn&&vn.data.push(this)}var e=s.prototype;return e.add=function(n,r,a){ps(n)||(n={matches:n});var u=new bS(0,a||this.scope),c=u.conditions={},d,h,p;vn&&!u.selector&&(u.selector=vn.selector),this.contexts.push(u),r=u.add("onMatch",r),u.queries=n;for(h in n)h==="all"?p=1:(d=is.matchMedia(n[h]),d&&(ga.indexOf(u)<0&&ga.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(Tm):d.addEventListener("change",Tm)));return p&&r(u,function(v){return u.add(null,v)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},s})(),xd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return pS(r)})},timeline:function(e){return new qi(e)},getTweensOf:function(e,t){return wn.getTweensOf(e,t)},getProperty:function(e,t,n,r){ii(e)&&(e=Nr(e)[0]);var a=ha(e||{}).get,u=n?tS:eS;return n==="native"&&(n=""),e&&(t?u((ur[t]&&ur[t].get||a)(e,t,n,r)):function(c,d,h){return u((ur[c]&&ur[c].get||a)(e,c,d,h))})},quickSetter:function(e,t,n){if(e=Nr(e),e.length>1){var r=e.map(function(p){return er.quickSetter(p,t,n)}),a=r.length;return function(p){for(var v=a;v--;)r[v](p)}}e=e[0]||{};var u=ur[t],c=ha(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var v=new u;gl._pt=0,v.init(e,n?p+n:p,gl,0,[e]),v.render(1,v),gl._pt&&qg(1,gl)}:c.set(e,d);return u?h:function(p){return h(e,d,n?p+n:p,c,1)}},quickTo:function(e,t,n){var r,a=er.to(e,xr((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),u=function(d,h,p){return a.resetTo(t,d,h,p)};return u.tween=a,u},isTweening:function(e){return wn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ma(e.ease,Qu.ease)),ix(Qu,e||{})},config:function(e){return ix(_r,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,u=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!ur[c]&&!vr[c]&&Ju(t+" effect requires "+c+" plugin.")}),Mp[t]=function(c,d,h){return n(Nr(c),xr(d||{},a),h)},u&&(qi.prototype[t]=function(c,d,h){return this.add(Mp[t](c,ps(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){Bt[e]=ma(t)},parseEase:function(e,t){return arguments.length?ma(e,t):Bt},getById:function(e){return wn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qi(e),r,a;for(n.smoothChildTiming=Ki(e.smoothChildTiming),wn.remove(n),n._dp=0,n._time=n._tTime=wn._time,r=wn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof Vn&&r.vars.onComplete===r._targets[0]))&&os(n,r,r._start-r._delay),r=a;return os(wn,n,0),n},context:function(e,t){return e?new bS(e,t):vn},matchMedia:function(e){return new Ow(e)},matchMediaRefresh:function(){return ga.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Tm()},addEventListener:function(e,t){var n=nd[e]||(nd[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=nd[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:pw,wrapYoyo:mw,distribute:lS,random:cS,snap:uS,normalize:hw,getUnit:Si,clamp:uw,splitColor:mS,toArray:Nr,selector:Mm,mapRange:dS,pipe:fw,unitize:dw,interpolate:gw,shuffle:aS},install:Ky,effects:Mp,ticker:dr,updateRoot:qi.updateRoot,plugins:ur,globalTimeline:wn,core:{PropTween:Zi,globals:jy,Tween:Vn,Timeline:qi,Animation:ic,getCache:ha,_removeLinkedListItem:Ld,reverting:function(){return ui},context:function(e){return e&&vn&&(vn.data.push(e),e._ctx=vn),vn},suppressOverwrites:function(e){return Ig=e}}};ji("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return xd[s]=Vn[s]});dr.add(qi.updateRoot);gl=xd.to({},{duration:0});var kw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Bw=function(e,t){var n=e._targets,r,a,u;for(r in t)for(a=n.length;a--;)u=e._ptLookup[a][r],u&&(u=u.d)&&(u._pt&&(u=kw(u,r)),u&&u.modifier&&u.modifier(t[r],e,n[a],r))},bp=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,a,u){u._onInit=function(c){var d,h;if(ii(a)&&(d={},ji(a,function(p){return d[p]=1}),a=d),t){d={};for(h in a)d[h]=t(a[h]);a=d}Bw(c,a)}}}},er=xd.registerPlugin({name:"attr",init:function(e,t,n,r,a){var u,c,d;this.tween=n;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],r,a,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var n=t._pt;n;)ui?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},bp("roundProps",Em),bp("modifiers"),bp("snap",uS))||xd;Vn.version=qi.version=er.version="3.15.0";$y=1;Fg()&&Dl();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ux,So,xl,$g,la,cx,Kg,zw=function(){return typeof window<"u"},Vs={},na=180/Math.PI,yl=Math.PI/180,Ka=Math.atan2,fx=1e8,jg=/([A-Z])/g,Vw=/(left|right|width|margin|padding|x)/i,Hw=/[\s,\(]\S/,as={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Am=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ww=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Yw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},CS=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},RS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qw=function(e,t,n){return e.style[t]=n},$w=function(e,t,n){return e.style.setProperty(t,n)},Kw=function(e,t,n){return e._gsap[t]=n},jw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Zw=function(e,t,n,r,a){var u=e._gsap;u.scaleX=u.scaleY=n,u.renderTransform(a,u)},Qw=function(e,t,n,r,a){var u=e._gsap;u[t]=n,u.renderTransform(a,u)},Tn="transform",Qi=Tn+"Origin",Jw=function s(e,t){var n=this,r=this.target,a=r.style,u=r._gsap;if(e in Vs&&a){if(this.tfm=this.tfm||{},e!=="transform")e=as[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Ls(r,c)}):this.tfm[e]=u.x?u[e]:Ls(r,e),e===Qi&&(this.tfm.zOrigin=u.zOrigin);else return as.transform.split(",").forEach(function(c){return s.call(n,c,t)});if(this.props.indexOf(Tn)>=0)return;u.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Qi,t,"")),e=Tn}(a||t)&&this.props.push(e,t,a[e])},PS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eT=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,u;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?t[e[a]](e[a+2]):t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(jg,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)r[u]=this.tfm[u];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=Kg(),(!a||!a.isStart)&&!n[Tn]&&(PS(n),r.zOrigin&&n[Qi]&&(n[Qi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},DS=function(e,t){var n={target:e,props:[],revert:eT,save:Jw};return e._gsap||er.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},LS,bm=function(e,t){var n=So.createElementNS?So.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):So.createElement(e);return n&&n.style?n:So.createElement(e)},gr=function s(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(jg,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&s(e,Ll(t)||t,1)||""},dx="O,Moz,ms,Ms,Webkit".split(","),Ll=function(e,t,n){var r=t||la,a=r.style,u=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(dx[u]+e in a););return u<0?null:(u===3?"ms":u>=0?dx[u]:"")+e},Cm=function(){zw()&&window.document&&(ux=window,So=ux.document,xl=So.documentElement,la=bm("div")||{style:{}},bm("div"),Tn=Ll(Tn),Qi=Tn+"Origin",la.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",LS=!!Ll("perspective"),Kg=er.core.reverting,$g=1)},hx=function(e){var t=e.ownerSVGElement,n=bm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),a;r.style.display="block",n.appendChild(r),xl.appendChild(n);try{a=r.getBBox()}catch{}return n.removeChild(r),xl.removeChild(n),a},px=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},NS=function(e){var t,n;try{t=e.getBBox()}catch{t=hx(e),n=1}return t&&(t.width||t.height)||n||(t=hx(e)),t&&!t.width&&!t.x&&!t.y?{x:+px(e,["x","cx","x1"])||0,y:+px(e,["y","cy","y1"])||0,width:0,height:0}:t},IS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&NS(e))},Po=function(e,t){if(t){var n=e.style,r;t in Vs&&t!==Qi&&(t=Tn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(jg,"-$1").toLowerCase())):n.removeAttribute(t)}},Mo=function(e,t,n,r,a,u){var c=new Zi(e._pt,t,n,0,1,u?RS:CS);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},mx={deg:1,rad:1,turn:1},tT={grid:1,flex:1},Do=function s(e,t,n,r){var a=parseFloat(n)||0,u=(n+"").trim().substr((a+"").length)||"px",c=la.style,d=Vw.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),v=100,m=r==="px",_=r==="%",M,E,x,y;if(r===u||!a||mx[r]||mx[u])return a;if(u!=="px"&&!m&&(a=s(e,t,n,"px")),y=e.getCTM&&IS(e),(_||u==="%")&&(Vs[t]||~t.indexOf("adius")))return M=y?e.getBBox()[d?"width":"height"]:e[p],Ln(_?a/M*v:a/100*M);if(c[d?"width":"height"]=v+(m?u:r),E=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,y&&(E=(e.ownerSVGElement||{}).parentNode),(!E||E===So||!E.appendChild)&&(E=So.body),x=E._gsap,x&&_&&x.width&&d&&x.time===dr.time&&!x.uncache)return Ln(a/x.width*v);if(_&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=v+r,M=e[p],b?e.style[t]=b:Po(e,t)}else(_||u==="%")&&!tT[gr(E,"display")]&&(c.position=gr(e,"position")),E===e&&(c.position="static"),E.appendChild(la),M=la[p],E.removeChild(la),c.position="absolute";return d&&_&&(x=ha(E),x.time=dr.time,x.width=E[p]),Ln(m?M*a/v:M&&a?v/M*a:0)},Ls=function(e,t,n,r){var a;return $g||Cm(),t in as&&t!=="transform"&&(t=as[t],~t.indexOf(",")&&(t=t.split(",")[0])),Vs[t]&&t!=="transform"?(a=sc(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:Sd(gr(e,Qi))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=yd[t]&&yd[t](e,t,n)||gr(e,t)||Qy(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?Do(e,t,a,n)+n:a},nT=function(e,t,n,r){if(!n||n==="none"){var a=Ll(t,e,1),u=a&&gr(e,a,1);u&&u!==n?(t=a,n=u):t==="borderColor"&&(n=gr(e,"borderTopColor"))}var c=new Zi(this._pt,e.style,t,0,1,TS),d=0,h=0,p,v,m,_,M,E,x,y,b,L,T,R;if(c.b=n,c.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=gr(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(E=e.style[t],e.style[t]=r,r=gr(e,t)||r,E?e.style[t]=E:Po(e,t)),p=[n,r],_S(p),n=p[0],r=p[1],m=n.match(ml)||[],R=r.match(ml)||[],R.length){for(;v=ml.exec(r);)x=v[0],b=r.substring(d,v.index),M?M=(M+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(M=1),x!==(E=m[h++]||"")&&(_=parseFloat(E)||0,T=E.substr((_+"").length),x.charAt(1)==="="&&(x=vl(_,x)+T),y=parseFloat(x),L=x.substr((y+"").length),d=ml.lastIndex-L.length,L||(L=L||_r.units[t]||T,d===r.length&&(r+=L,c.e+=L)),T!==L&&(_=Do(e,t,E,L)||0),c._pt={_next:c._pt,p:b||h===1?b:",",s:_,c:y-_,m:M&&M<4||t==="zIndex"?Math.round:0});c.c=d<r.length?r.substring(d,r.length):""}else c.r=t==="display"&&r==="none"?RS:CS;return qy.test(r)&&(c.e=0),this._pt=c,c},gx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iT=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=gx[n]||n,t[1]=gx[r]||r,t.join(" ")},rT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,u=n._gsap,c,d,h;if(a==="all"||a===!0)r.cssText="",d=1;else for(a=a.split(","),h=a.length;--h>-1;)c=a[h],Vs[c]&&(d=1,c=c==="transformOrigin"?Qi:Tn),Po(n,c);d&&(Po(n,Tn),u&&(u.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",sc(n,1),u.uncache=1,PS(r)))}},yd={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var u=e._pt=new Zi(e._pt,t,n,0,0,rT);return u.u=r,u.pr=-10,u.tween=a,e._props.push(n),1}}},rc=[1,0,0,1,0,0],US={},FS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_x=function(e){var t=gr(e,Tn);return FS(t)?rc:t.substr(7).match(Yy).map(Ln)},Zg=function(e,t){var n=e._gsap||ha(e),r=e.style,a=_x(e),u,c,d,h;return n.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,a=[d.a,d.b,d.c,d.d,d.e,d.f],a.join(",")==="1,0,0,1,0,0"?rc:a):(a===rc&&!e.offsetParent&&e!==xl&&!n.svg&&(d=r.display,r.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,xl.appendChild(e)),a=_x(e),d?r.display=d:Po(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):xl.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Rm=function(e,t,n,r,a,u){var c=e._gsap,d=a||Zg(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,v=c.xOffset||0,m=c.yOffset||0,_=d[0],M=d[1],E=d[2],x=d[3],y=d[4],b=d[5],L=t.split(" "),T=parseFloat(L[0])||0,R=parseFloat(L[1])||0,D,P,w,N;n?d!==rc&&(P=_*x-M*E)&&(w=T*(x/P)+R*(-E/P)+(E*b-x*y)/P,N=T*(-M/P)+R*(_/P)-(_*b-M*y)/P,T=w,R=N):(D=NS(e),T=D.x+(~L[0].indexOf("%")?T/100*D.width:T),R=D.y+(~(L[1]||L[0]).indexOf("%")?R/100*D.height:R)),r||r!==!1&&c.smooth?(y=T-h,b=R-p,c.xOffset=v+(y*_+b*E)-y,c.yOffset=m+(y*M+b*x)-b):c.xOffset=c.yOffset=0,c.xOrigin=T,c.yOrigin=R,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Qi]="0px 0px",u&&(Mo(u,c,"xOrigin",h,T),Mo(u,c,"yOrigin",p,R),Mo(u,c,"xOffset",v,c.xOffset),Mo(u,c,"yOffset",m,c.yOffset)),e.setAttribute("data-svg-origin",T+" "+R)},sc=function(e,t){var n=e._gsap||new xS(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=gr(e,Qi)||"0",p,v,m,_,M,E,x,y,b,L,T,R,D,P,w,N,F,z,B,Q,ee,Y,J,H,G,te,U,k,Z,Be,ze,Ve;return p=v=m=E=x=y=b=L=T=0,_=M=1,n.svg=!!(e.getCTM&&IS(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(r[Tn]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Tn]!=="none"?d[Tn]:"")),r.scale=r.rotate=r.translate="none"),P=Zg(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),h=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Rm(e,H||h,!!H||n.originIsAbsolute,n.smooth!==!1,P)),R=n.xOrigin||0,D=n.yOrigin||0,P!==rc&&(z=P[0],B=P[1],Q=P[2],ee=P[3],p=Y=P[4],v=J=P[5],P.length===6?(_=Math.sqrt(z*z+B*B),M=Math.sqrt(ee*ee+Q*Q),E=z||B?Ka(B,z)*na:0,b=Q||ee?Ka(Q,ee)*na+E:0,b&&(M*=Math.abs(Math.cos(b*yl))),n.svg&&(p-=R-(R*z+D*Q),v-=D-(R*B+D*ee))):(Ve=P[6],Be=P[7],U=P[8],k=P[9],Z=P[10],ze=P[11],p=P[12],v=P[13],m=P[14],w=Ka(Ve,Z),x=w*na,w&&(N=Math.cos(-w),F=Math.sin(-w),H=Y*N+U*F,G=J*N+k*F,te=Ve*N+Z*F,U=Y*-F+U*N,k=J*-F+k*N,Z=Ve*-F+Z*N,ze=Be*-F+ze*N,Y=H,J=G,Ve=te),w=Ka(-Q,Z),y=w*na,w&&(N=Math.cos(-w),F=Math.sin(-w),H=z*N-U*F,G=B*N-k*F,te=Q*N-Z*F,ze=ee*F+ze*N,z=H,B=G,Q=te),w=Ka(B,z),E=w*na,w&&(N=Math.cos(w),F=Math.sin(w),H=z*N+B*F,G=Y*N+J*F,B=B*N-z*F,J=J*N-Y*F,z=H,Y=G),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,y=180-y),_=Ln(Math.sqrt(z*z+B*B+Q*Q)),M=Ln(Math.sqrt(J*J+Ve*Ve)),w=Ka(Y,J),b=Math.abs(w)>2e-4?w*na:0,T=ze?1/(ze<0?-ze:ze):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!FS(gr(e,Tn)),H&&e.setAttribute("transform",H))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(_*=-1,b+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=p-((n.xPercent=p&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+u,n.y=v-((n.yPercent=v&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+u,n.z=m+u,n.scaleX=Ln(_),n.scaleY=Ln(M),n.rotation=Ln(E)+c,n.rotationX=Ln(x)+c,n.rotationY=Ln(y)+c,n.skewX=b+c,n.skewY=L+c,n.transformPerspective=T+u,(n.zOrigin=parseFloat(h.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Qi]=Sd(h)),n.xOffset=n.yOffset=0,n.force3D=_r.force3D,n.renderTransform=n.svg?oT:LS?OS:sT,n.uncache=0,n},Sd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Cp=function(e,t,n){var r=Si(t);return Ln(parseFloat(t)+parseFloat(Do(e,"x",n+"px",r)))+r},sT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,OS(e,t)},jo="0deg",yu="0px",Zo=") ",OS=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.z,h=n.rotation,p=n.rotationY,v=n.rotationX,m=n.skewX,_=n.skewY,M=n.scaleX,E=n.scaleY,x=n.transformPerspective,y=n.force3D,b=n.target,L=n.zOrigin,T="",R=y==="auto"&&e&&e!==1||y===!0;if(L&&(v!==jo||p!==jo)){var D=parseFloat(p)*yl,P=Math.sin(D),w=Math.cos(D),N;D=parseFloat(v)*yl,N=Math.cos(D),u=Cp(b,u,P*N*-L),c=Cp(b,c,-Math.sin(D)*-L),d=Cp(b,d,w*N*-L+L)}x!==yu&&(T+="perspective("+x+Zo),(r||a)&&(T+="translate("+r+"%, "+a+"%) "),(R||u!==yu||c!==yu||d!==yu)&&(T+=d!==yu||R?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Zo),h!==jo&&(T+="rotate("+h+Zo),p!==jo&&(T+="rotateY("+p+Zo),v!==jo&&(T+="rotateX("+v+Zo),(m!==jo||_!==jo)&&(T+="skew("+m+", "+_+Zo),(M!==1||E!==1)&&(T+="scale("+M+", "+E+Zo),b.style[Tn]=T||"translate(0, 0)"},oT=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,u=n.x,c=n.y,d=n.rotation,h=n.skewX,p=n.skewY,v=n.scaleX,m=n.scaleY,_=n.target,M=n.xOrigin,E=n.yOrigin,x=n.xOffset,y=n.yOffset,b=n.forceCSS,L=parseFloat(u),T=parseFloat(c),R,D,P,w,N;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=yl,h*=yl,R=Math.cos(d)*v,D=Math.sin(d)*v,P=Math.sin(d-h)*-m,w=Math.cos(d-h)*m,h&&(p*=yl,N=Math.tan(h-p),N=Math.sqrt(1+N*N),P*=N,w*=N,p&&(N=Math.tan(p),N=Math.sqrt(1+N*N),R*=N,D*=N)),R=Ln(R),D=Ln(D),P=Ln(P),w=Ln(w)):(R=v,w=m,D=P=0),(L&&!~(u+"").indexOf("px")||T&&!~(c+"").indexOf("px"))&&(L=Do(_,"x",u,"px"),T=Do(_,"y",c,"px")),(M||E||x||y)&&(L=Ln(L+M-(M*R+E*P)+x),T=Ln(T+E-(M*D+E*w)+y)),(r||a)&&(N=_.getBBox(),L=Ln(L+r/100*N.width),T=Ln(T+a/100*N.height)),N="matrix("+R+","+D+","+P+","+w+","+L+","+T+")",_.setAttribute("transform",N),b&&(_.style[Tn]=N)},aT=function(e,t,n,r,a){var u=360,c=ii(a),d=parseFloat(a)*(c&&~a.indexOf("rad")?na:1),h=d-r,p=r+h+"deg",v,m;return c&&(v=a.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),v==="cw"&&h<0?h=(h+u*fx)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*fx)%u-~~(h/u)*u)),e._pt=m=new Zi(e._pt,t,n,r,h,Gw),m.e=p,m.u="deg",e._props.push(n),m},vx=function(e,t){for(var n in t)e[n]=t[n];return e},lT=function(e,t,n){var r=vx({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",u=n.style,c,d,h,p,v,m,_,M;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),u[Tn]=t,c=sc(n,1),Po(n,Tn),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Tn],u[Tn]=t,c=sc(n,1),u[Tn]=h);for(d in Vs)h=r[d],p=c[d],h!==p&&a.indexOf(d)<0&&(_=Si(h),M=Si(p),v=_!==M?Do(n,d,h,M):parseFloat(h),m=parseFloat(p),e._pt=new Zi(e._pt,c,d,v,m-v,Am),e._pt.u=M||0,e._props.push(d));vx(c,r)};ji("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",r="Bottom",a="Left",u=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?s+c:"border"+c+s});yd[e>1?"border"+s:s]=function(c,d,h,p,v){var m,_;if(arguments.length<4)return m=u.map(function(M){return Ls(c,M,h)}),_=m.join(" "),_.split(m[0]).length===5?m[0]:_;m=(p+"").split(" "),_={},u.forEach(function(M,E){return _[M]=m[E]=m[E]||m[(E-1)/2|0]}),c.init(d,_,v)}});var kS={name:"css",register:Cm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var u=this._props,c=e.style,d=n.vars.startAt,h,p,v,m,_,M,E,x,y,b,L,T,R,D,P,w,N;$g||Cm(),this.styles=this.styles||DS(e),w=this.styles.props,this.tween=n;for(E in t)if(E!=="autoRound"&&(p=t[E],!(ur[E]&&yS(E,t,n,r,e,a)))){if(_=typeof p,M=yd[E],_==="function"&&(p=p.call(n,r,e,a),_=typeof p),_==="string"&&~p.indexOf("random(")&&(p=tc(p)),M)M(this,e,E,p,n)&&(P=1);else if(E.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(E)+"").trim(),p+="",bo.lastIndex=0,bo.test(h)||(x=Si(h),y=Si(p),y?x!==y&&(h=Do(e,E,h,y)+y):x&&(p+=x)),this.add(c,"setProperty",h,p,r,a,0,0,E),u.push(E),w.push(E,0,c[E]);else if(_!=="undefined"){if(d&&E in d?(h=typeof d[E]=="function"?d[E].call(n,r,e,a):d[E],ii(h)&&~h.indexOf("random(")&&(h=tc(h)),Si(h+"")||h==="auto"||(h+=_r.units[E]||Si(Ls(e,E))||""),(h+"").charAt(1)==="="&&(h=Ls(e,E))):h=Ls(e,E),m=parseFloat(h),b=_==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),v=parseFloat(p),E in as&&(E==="autoAlpha"&&(m===1&&Ls(e,"visibility")==="hidden"&&v&&(m=0),w.push("visibility",0,c.visibility),Mo(this,c,"visibility",m?"inherit":"hidden",v?"inherit":"hidden",!v)),E!=="scale"&&E!=="transform"&&(E=as[E],~E.indexOf(",")&&(E=E.split(",")[0]))),L=E in Vs,L){if(this.styles.save(E),N=p,_==="string"&&p.substring(0,6)==="var(--"){if(p=gr(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var F=e.style.perspective;e.style.perspective=p,p=gr(e,"perspective"),F?e.style.perspective=F:Po(e,"perspective")}v=parseFloat(p)}if(T||(R=e._gsap,R.renderTransform&&!t.parseTransform||sc(e,t.parseTransform),D=t.smoothOrigin!==!1&&R.smooth,T=this._pt=new Zi(this._pt,c,Tn,0,1,R.renderTransform,R,0,-1),T.dep=1),E==="scale")this._pt=new Zi(this._pt,R,"scaleY",R.scaleY,(b?vl(R.scaleY,b+v):v)-R.scaleY||0,Am),this._pt.u=0,u.push("scaleY",E),E+="X";else if(E==="transformOrigin"){w.push(Qi,0,c[Qi]),p=iT(p),R.svg?Rm(e,p,0,D,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==R.zOrigin&&Mo(this,R,"zOrigin",R.zOrigin,y),Mo(this,c,E,Sd(h),Sd(p)));continue}else if(E==="svgOrigin"){Rm(e,p,1,D,0,this);continue}else if(E in US){aT(this,R,E,m,b?vl(m,b+p):p);continue}else if(E==="smoothOrigin"){Mo(this,R,"smooth",R.smooth,p);continue}else if(E==="force3D"){R[E]=p;continue}else if(E==="transform"){lT(this,p,e);continue}}else E in c||(E=Ll(E)||E);if(L||(v||v===0)&&(m||m===0)&&!Hw.test(p)&&E in c)x=(h+"").substr((m+"").length),v||(v=0),y=Si(p)||(E in _r.units?_r.units[E]:x),x!==y&&(m=Do(e,E,h,y)),this._pt=new Zi(this._pt,L?R:c,E,m,(b?vl(m,b+v):v)-m,!L&&(y==="px"||E==="zIndex")&&t.autoRound!==!1?Yw:Am),this._pt.u=y||0,L&&N!==p?(this._pt.b=h,this._pt.e=N,this._pt.r=Xw):x!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=Ww);else if(E in c)nT.call(this,e,E,h,b?b+p:p);else if(E in e)this.add(e,E,h||e[E],b?b+p:p,r,a);else if(E!=="parseTransform"){kg(E,p);continue}L||(E in c?w.push(E,0,c[E]):typeof e[E]=="function"?w.push(E,2,e[E]()):w.push(E,1,h||e[E])),u.push(E)}}P&&AS(this)},render:function(e,t){if(t.tween._time||!Kg())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ls,aliases:as,getSetter:function(e,t,n){var r=as[t];return r&&r.indexOf(",")<0&&(t=r),t in Vs&&t!==Qi&&(e._gsap.x||Ls(e,"x"))?n&&cx===n?t==="scale"?jw:Kw:(cx=n||{})&&(t==="scale"?Zw:Qw):e.style&&!Ug(e.style[t])?qw:~t.indexOf("-")?$w:Yg(e,t)},core:{_removeProperty:Po,_getMatrix:Zg}};er.utils.checkPrefix=Ll;er.core.getStyleSaver=DS;(function(s,e,t,n){var r=ji(s+","+e+","+t,function(a){Vs[a]=1});ji(e,function(a){_r.units[a]="deg",US[a]=1}),as[r[13]]=s+","+e,ji(n,function(a){var u=a.split(":");as[u[1]]=r[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ji("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){_r.units[s]="px"});er.registerPlugin(kS);var an=er.registerPlugin(kS)||er;an.core.Tween;function uT(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function cT(s,e,t){return e&&uT(s.prototype,e),s}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ai,id,hr,Eo,wo,Sl,BS,ia,Ml,zS,Us,Yr,VS,HS=function(){return ai||typeof window<"u"&&(ai=window.gsap)&&ai.registerPlugin&&ai},GS=1,_l=[],It=[],fs=[],Gu=Date.now,Pm=function(e,t){return t},fT=function(){var e=Ml.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,It),r.push.apply(r,fs),It=n,fs=r,Pm=function(u,c){return t[u](c)}},Co=function(e,t){return~fs.indexOf(e)&&fs[fs.indexOf(e)+1][t]},Wu=function(e){return!!~zS.indexOf(e)},Ci=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},bi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},vf="scrollLeft",xf="scrollTop",Dm=function(){return Us&&Us.isPressed||It.cache++},Md=function(e,t){var n=function r(a){if(a||a===0){GS&&(hr.history.scrollRestoration="manual");var u=Us&&Us.isPressed;a=r.v=Math.round(a)||(Us&&Us.iOS?1:0),e(a),r.cacheID=It.cache,u&&Pm("ss",a)}else(t||It.cache!==r.cacheID||Pm("ref"))&&(r.cacheID=It.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Ni={s:vf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Md(function(s){return arguments.length?hr.scrollTo(s,Xn.sc()):hr.pageXOffset||Eo[vf]||wo[vf]||Sl[vf]||0})},Xn={s:xf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ni,sc:Md(function(s){return arguments.length?hr.scrollTo(Ni.sc(),s):hr.pageYOffset||Eo[xf]||wo[xf]||Sl[xf]||0})},Yi=function(e,t){return(t&&t._ctx&&t._ctx.selector||ai.utils.toArray)(e)[0]||(typeof e=="string"&&ai.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},dT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Lo=function(e,t){var n=t.s,r=t.sc;Wu(e)&&(e=Eo.scrollingElement||wo);var a=It.indexOf(e),u=r===Xn.sc?1:2;!~a&&(a=It.push(e)-1),It[a+u]||Ci(e,"scroll",Dm);var c=It[a+u],d=c||(It[a+u]=Md(Co(e,n),!0)||(Wu(e)?r:Md(function(h){return arguments.length?e[n]=h:e[n]})));return d.target=e,c||(d.smooth=ai.getProperty(e,"scrollBehavior")==="smooth"),d},Lm=function(e,t,n){var r=e,a=e,u=Gu(),c=u,d=t||50,h=Math.max(500,d*3),p=function(M,E){var x=Gu();E||x-u>d?(a=r,r=M,c=u,u=x):n?r+=M:r=a+(M-a)/(x-c)*(u-c)},v=function(){a=r=n?0:r,c=u=0},m=function(M){var E=c,x=a,y=Gu();return(M||M===0)&&M!==r&&p(M),u===c||y-c>h?0:(r+(n?x:-x))/((n?y:u)-E)*1e3};return{update:p,reset:v,getVelocity:m}},Su=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},WS=function(){Ml=ai.core.globals().ScrollTrigger,Ml&&Ml.core&&fT()},XS=function(e){return ai=e||HS(),!id&&ai&&typeof document<"u"&&document.body&&(hr=window,Eo=document,wo=Eo.documentElement,Sl=Eo.body,zS=[hr,Eo,wo,Sl],ai.utils.clamp,VS=ai.core.context||function(){},ia="onpointerenter"in Sl?"pointer":"mouse",BS=Nn.isTouch=hr.matchMedia&&hr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in hr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yr=Nn.eventTypes=("ontouchstart"in wo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in wo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return GS=0},500),id=1),Ml||WS(),id};Ni.op=Xn;It.cache=0;var Nn=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){id||XS(ai)||console.warn("Please gsap.registerPlugin(Observer)"),Ml||WS();var r=n.tolerance,a=n.dragMinimum,u=n.type,c=n.target,d=n.lineHeight,h=n.debounce,p=n.preventDefault,v=n.onStop,m=n.onStopDelay,_=n.ignore,M=n.wheelSpeed,E=n.event,x=n.onDragStart,y=n.onDragEnd,b=n.onDrag,L=n.onPress,T=n.onRelease,R=n.onRight,D=n.onLeft,P=n.onUp,w=n.onDown,N=n.onChangeX,F=n.onChangeY,z=n.onChange,B=n.onToggleX,Q=n.onToggleY,ee=n.onHover,Y=n.onHoverEnd,J=n.onMove,H=n.ignoreCheck,G=n.isNormalizer,te=n.onGestureStart,U=n.onGestureEnd,k=n.onWheel,Z=n.onEnable,Be=n.onDisable,ze=n.onClick,Ve=n.scrollSpeed,se=n.capture,ve=n.allowClicks,he=n.lockAxis,Ne=n.onLockAxis;this.target=c=Yi(c)||wo,this.vars=n,_&&(_=ai.utils.toArray(_)),r=r||1e-9,a=a||0,M=M||1,Ve=Ve||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(hr.getComputedStyle(Sl).lineHeight)||22);var je,Xe,At,Ge,ct,_t,gt,le=this,Ft=0,Xt=0,Yt=n.passive||!p&&n.passive!==!1,ft=Lo(c,Ni),Vt=Lo(c,Xn),q=ft(),cn=Vt(),pt=~u.indexOf("touch")&&!~u.indexOf("pointer")&&Yr[0]==="pointerdown",O=Wu(c),A=c.ownerDocument||Eo,j=[0,0,0],re=[0,0,0],de=0,Ae=function(){return de=Gu()},we=function(ye,st){return(le.event=ye)&&_&&dT(ye.target,_)||st&&pt&&ye.pointerType!=="touch"||H&&H(ye,st)},pe=function(){le._vx.reset(),le._vy.reset(),Xe.pause(),v&&v(le)},ge=function(){var ye=le.deltaX=xx(j),st=le.deltaY=xx(re),Me=Math.abs(ye)>=r,ot=Math.abs(st)>=r;z&&(Me||ot)&&z(le,ye,st,j,re),Me&&(R&&le.deltaX>0&&R(le),D&&le.deltaX<0&&D(le),N&&N(le),B&&le.deltaX<0!=Ft<0&&B(le),Ft=le.deltaX,j[0]=j[1]=j[2]=0),ot&&(w&&le.deltaY>0&&w(le),P&&le.deltaY<0&&P(le),F&&F(le),Q&&le.deltaY<0!=Xt<0&&Q(le),Xt=le.deltaY,re[0]=re[1]=re[2]=0),(Ge||At)&&(J&&J(le),At&&(x&&At===1&&x(le),b&&b(le),At=0),Ge=!1),_t&&!(_t=!1)&&Ne&&Ne(le),ct&&(k(le),ct=!1),je=0},Fe=function(ye,st,Me){j[Me]+=ye,re[Me]+=st,le._vx.update(ye),le._vy.update(st),h?je||(je=requestAnimationFrame(ge)):ge()},$e=function(ye,st){he&&!gt&&(le.axis=gt=Math.abs(ye)>Math.abs(st)?"x":"y",_t=!0),gt!=="y"&&(j[2]+=ye,le._vx.update(ye,!0)),gt!=="x"&&(re[2]+=st,le._vy.update(st,!0)),h?je||(je=requestAnimationFrame(ge)):ge()},Ie=function(ye){if(!we(ye,1)){ye=Su(ye,p);var st=ye.clientX,Me=ye.clientY,ot=st-le.x,Ze=Me-le.y,mt=le.isDragging;le.x=st,le.y=Me,(mt||(ot||Ze)&&(Math.abs(le.startX-st)>=a||Math.abs(le.startY-Me)>=a))&&(At||(At=mt?2:1),mt||(le.isDragging=!0),$e(ot,Ze))}},Pe=le.onPress=function(Se){we(Se,1)||Se&&Se.button||(le.axis=gt=null,Xe.pause(),le.isPressed=!0,Se=Su(Se),Ft=Xt=0,le.startX=le.x=Se.clientX,le.startY=le.y=Se.clientY,le._vx.reset(),le._vy.reset(),Ci(G?c:A,Yr[1],Ie,Yt,!0),le.deltaX=le.deltaY=0,L&&L(le))},be=le.onRelease=function(Se){if(!we(Se,1)){bi(G?c:A,Yr[1],Ie,!0);var ye=!isNaN(le.y-le.startY),st=le.isDragging,Me=st&&(Math.abs(le.x-le.startX)>3||Math.abs(le.y-le.startY)>3),ot=Su(Se);!Me&&ye&&(le._vx.reset(),le._vy.reset(),p&&ve&&ai.delayedCall(.08,function(){if(Gu()-de>300&&!Se.defaultPrevented){if(Se.target.click)Se.target.click();else if(A.createEvent){var Ze=A.createEvent("MouseEvents");Ze.initMouseEvent("click",!0,!0,hr,1,ot.screenX,ot.screenY,ot.clientX,ot.clientY,!1,!1,!1,!1,0,null),Se.target.dispatchEvent(Ze)}}})),le.isDragging=le.isGesturing=le.isPressed=!1,v&&st&&!G&&Xe.restart(!0),At&&ge(),y&&st&&y(le),T&&T(le,Me)}},et=function(ye){return ye.touches&&ye.touches.length>1&&(le.isGesturing=!0)&&te(ye,le.isDragging)},it=function(){return(le.isGesturing=!1)||U(le)},W=function(ye){if(!we(ye)){var st=ft(),Me=Vt();Fe((st-q)*Ve,(Me-cn)*Ve,1),q=st,cn=Me,v&&Xe.restart(!0)}},Re=function(ye){if(!we(ye)){ye=Su(ye,p),k&&(ct=!0);var st=(ye.deltaMode===1?d:ye.deltaMode===2?hr.innerHeight:1)*M;Fe(ye.deltaX*st,ye.deltaY*st,0),v&&!G&&Xe.restart(!0)}},_e=function(ye){if(!we(ye)){var st=ye.clientX,Me=ye.clientY,ot=st-le.x,Ze=Me-le.y;le.x=st,le.y=Me,Ge=!0,v&&Xe.restart(!0),(ot||Ze)&&$e(ot,Ze)}},Ue=function(ye){le.event=ye,ee(le)},ke=function(ye){le.event=ye,Y(le)},xe=function(ye){return we(ye)||Su(ye,p)&&ze(le)};Xe=le._dc=ai.delayedCall(m||.25,pe).pause(),le.deltaX=le.deltaY=0,le._vx=Lm(0,50,!0),le._vy=Lm(0,50,!0),le.scrollX=ft,le.scrollY=Vt,le.isDragging=le.isGesturing=le.isPressed=!1,VS(this),le.enable=function(Se){return le.isEnabled||(Ci(O?A:c,"scroll",Dm),u.indexOf("scroll")>=0&&Ci(O?A:c,"scroll",W,Yt,se),u.indexOf("wheel")>=0&&Ci(c,"wheel",Re,Yt,se),(u.indexOf("touch")>=0&&BS||u.indexOf("pointer")>=0)&&(Ci(c,Yr[0],Pe,Yt,se),Ci(A,Yr[2],be),Ci(A,Yr[3],be),ve&&Ci(c,"click",Ae,!0,!0),ze&&Ci(c,"click",xe),te&&Ci(A,"gesturestart",et),U&&Ci(A,"gestureend",it),ee&&Ci(c,ia+"enter",Ue),Y&&Ci(c,ia+"leave",ke),J&&Ci(c,ia+"move",_e)),le.isEnabled=!0,le.isDragging=le.isGesturing=le.isPressed=Ge=At=!1,le._vx.reset(),le._vy.reset(),q=ft(),cn=Vt(),Se&&Se.type&&Pe(Se),Z&&Z(le)),le},le.disable=function(){le.isEnabled&&(_l.filter(function(Se){return Se!==le&&Wu(Se.target)}).length||bi(O?A:c,"scroll",Dm),le.isPressed&&(le._vx.reset(),le._vy.reset(),bi(G?c:A,Yr[1],Ie,!0)),bi(O?A:c,"scroll",W,se),bi(c,"wheel",Re,se),bi(c,Yr[0],Pe,se),bi(A,Yr[2],be),bi(A,Yr[3],be),bi(c,"click",Ae,!0),bi(c,"click",xe),bi(A,"gesturestart",et),bi(A,"gestureend",it),bi(c,ia+"enter",Ue),bi(c,ia+"leave",ke),bi(c,ia+"move",_e),le.isEnabled=le.isPressed=le.isDragging=!1,Be&&Be(le))},le.kill=le.revert=function(){le.disable();var Se=_l.indexOf(le);Se>=0&&_l.splice(Se,1),Us===le&&(Us=0)},_l.push(le),G&&Wu(c)&&(Us=le),le.enable(E)},cT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Nn.version="3.15.0";Nn.create=function(s){return new Nn(s)};Nn.register=XS;Nn.getAll=function(){return _l.slice()};Nn.getById=function(s){return _l.filter(function(e){return e.vars.id===s})[0]};HS()&&ai.registerPlugin(Nn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Qe,hl,Nt,tn,cr,Kt,Qg,Ed,oc,Xu,Nu,yf,xi,Ud,Nm,Di,yx,Sx,pl,YS,Rp,qS,Pi,Im,$S,KS,vo,Um,Jg,El,e_,Yu,Fm,Pp,Sf=1,yi=Date.now,Dp=yi(),Ir=0,Iu=0,Mx=function(e,t,n){var r=lr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ex=function(e,t){return t&&(!lr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hT=function s(){return Iu&&requestAnimationFrame(s)},wx=function(){return Ud=1},Tx=function(){return Ud=0},rs=function(e){return e},Uu=function(e){return Math.round(e*1e5)/1e5||0},jS=function(){return typeof window<"u"},ZS=function(){return Qe||jS()&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},ya=function(e){return!!~Qg.indexOf(e)},QS=function(e){return(e==="Height"?e_:Nt["inner"+e])||cr["client"+e]||Kt["client"+e]},JS=function(e){return Co(e,"getBoundingClientRect")||(ya(e)?function(){return ld.width=Nt.innerWidth,ld.height=e_,ld}:function(){return Ns(e)})},pT=function(e,t,n){var r=n.d,a=n.d2,u=n.a;return(u=Co(e,"getBoundingClientRect"))?function(){return u()[r]}:function(){return(t?QS(a):e["client"+a])||0}},mT=function(e,t){return!t||~fs.indexOf(e)?JS(e):function(){return ld}},ls=function(e,t){var n=t.s,r=t.d2,a=t.d,u=t.a;return Math.max(0,(n="scroll"+r)&&(u=Co(e,n))?u()-JS(e)()[a]:ya(e)?(cr[n]||Kt[n])-QS(r):e[n]-e["offset"+r])},Mf=function(e,t){for(var n=0;n<pl.length;n+=3)(!t||~t.indexOf(pl[n+1]))&&e(pl[n],pl[n+1],pl[n+2])},lr=function(e){return typeof e=="string"},Mi=function(e){return typeof e=="function"},Fu=function(e){return typeof e=="number"},ra=function(e){return typeof e=="object"},Mu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ja=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},Za=Math.abs,eM="left",tM="top",t_="right",n_="bottom",_a="width",va="height",qu="Right",$u="Left",Ku="Top",ju="Bottom",zn="padding",Pr="margin",Nl="Width",i_="Height",Wn="px",Dr=function(e){return Nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},gT=function(e){var t=Dr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ax=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ns=function(e,t){var n=t&&Dr(e)[Nm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},wd=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},nM=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},_T=function(e){return function(t){return Qe.utils.snap(nM(e),t)}},r_=function(e){var t=Qe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,u){u===void 0&&(u=.001);var c;if(!a)return t(r);if(a>0){for(r-=u,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=u;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,u){u===void 0&&(u=.001);var c=t(r);return!a||Math.abs(c-r)<u||c-r<0==a<0?c:t(a<0?r-e:r+e)}},vT=function(e){return function(t,n){return r_(nM(e))(t,n.direction)}},Ef=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},ni=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},ti=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},wf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},bx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Tf={toggleActions:"play",anticipatePin:0},Td={top:0,left:0,center:.5,bottom:1,right:1},rd=function(e,t){if(lr(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Td?Td[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Af=function(e,t,n,r,a,u,c,d){var h=a.startColor,p=a.endColor,v=a.fontSize,m=a.indent,_=a.fontWeight,M=tn.createElement("div"),E=ya(n)||Co(n,"pinType")==="fixed",x=e.indexOf("scroller")!==-1,y=E?Kt:n.tagName==="IFRAME"?n.contentDocument.body:n,b=e.indexOf("start")!==-1,L=b?h:p,T="border-color:"+L+";font-size:"+v+";color:"+L+";font-weight:"+_+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((x||d)&&E?"fixed;":"absolute;"),(x||d||!E)&&(T+=(r===Xn?t_:n_)+":"+(u+parseFloat(m))+"px;"),c&&(T+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),M._isStart=b,M.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),M.style.cssText=T,M.innerText=t||t===0?e+"-"+t:e,y.children[0]?y.insertBefore(M,y.children[0]):y.appendChild(M),M._offset=M["offset"+r.op.d2],sd(M,0,r,b),M},sd=function(e,t,n,r){var a={display:"block"},u=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+u+Nl]=1,a["border"+c+Nl]=0,a[n.p]=t+"px",Qe.set(e,a)},Pt=[],Om={},ac,Cx=function(){return yi()-Ir>34&&(ac||(ac=requestAnimationFrame(Os)))},Qa=function(){(!Pi||!Pi.isPressed||Pi.startX>Kt.clientWidth)&&(It.cache++,Pi?ac||(ac=requestAnimationFrame(Os)):Os(),Ir||Ma("scrollStart"),Ir=yi())},Lp=function(){KS=Nt.innerWidth,$S=Nt.innerHeight},Ou=function(e){It.cache++,(e===!0||!xi&&!qS&&!tn.fullscreenElement&&!tn.webkitFullscreenElement&&(!Im||KS!==Nt.innerWidth||Math.abs(Nt.innerHeight-$S)>Nt.innerHeight*.25))&&Ed.restart(!0)},Sa={},xT=[],iM=function s(){return ti(Tt,"scrollEnd",s)||ua(!0)},Ma=function(e){return Sa[e]&&Sa[e].map(function(t){return t()})||xT},ar=[],rM=function(e){for(var t=0;t<ar.length;t+=5)(!e||ar[t+4]&&ar[t+4].query===e)&&(ar[t].style.cssText=ar[t+1],ar[t].getBBox&&ar[t].setAttribute("transform",ar[t+2]||""),ar[t+3].uncache=1)},sM=function(){return It.forEach(function(e){return Mi(e)&&++e.cacheID&&(e.rec=e())})},s_=function(e,t){var n;for(Di=0;Di<Pt.length;Di++)n=Pt[Di],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Yu=!0,t&&rM(t),t||Ma("revert")},oM=function(e,t){It.cache++,(t||!Li)&&It.forEach(function(n){return Mi(n)&&n.cacheID++&&(n.rec=0)}),lr(e)&&(Nt.history.scrollRestoration=Jg=e)},Li,xa=0,Rx,yT=function(){if(Rx!==xa){var e=Rx=xa;requestAnimationFrame(function(){return e===xa&&ua(!0)})}},aM=function(){Kt.appendChild(El),e_=!Pi&&El.offsetHeight||Nt.innerHeight,Kt.removeChild(El)},Px=function(e){return oc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ua=function(e,t){if(cr=tn.documentElement,Kt=tn.body,Qg=[Nt,tn,cr,Kt],Ir&&!e&&!Yu){ni(Tt,"scrollEnd",iM);return}aM(),Li=Tt.isRefreshing=!0,Yu||sM();var n=Ma("refreshInit");YS&&Tt.sort(),t||s_(),It.forEach(function(r){Mi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Pt.slice(0).forEach(function(r){return r.refresh()}),Yu=!1,Pt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",u=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-u),r.refresh()}}),Fm=1,Px(!0),Pt.forEach(function(r){var a=ls(r.scroller,r._dir),u=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(u||c)&&r.setPositions(c?a-1:r.start,u?Math.max(c?a:r.start+1,a):r.end,!0)}),Px(!1),Fm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),It.forEach(function(r){Mi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),oM(Jg,1),Ed.pause(),xa++,Li=2,Os(2),Pt.forEach(function(r){return Mi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Li=Tt.isRefreshing=!1,Ma("refresh")},km=0,od=1,Zu,Os=function(e){if(e===2||!Li&&!Yu){Tt.isUpdating=!0,Zu&&Zu.update(0);var t=Pt.length,n=yi(),r=n-Dp>=50,a=t&&Pt[0].scroll();if(od=km>a?-1:1,Li||(km=a),r&&(Ir&&!Ud&&n-Ir>200&&(Ir=0,Ma("scrollEnd")),Nu=Dp,Dp=n),od<0){for(Di=t;Di-- >0;)Pt[Di]&&Pt[Di].update(0,r);od=1}else for(Di=0;Di<t;Di++)Pt[Di]&&Pt[Di].update(0,r);Tt.isUpdating=!1}ac=0},Bm=[eM,tM,n_,t_,Pr+ju,Pr+qu,Pr+Ku,Pr+$u,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ad=Bm.concat([_a,va,"boxSizing","max"+Nl,"max"+i_,"position",Pr,zn,zn+Ku,zn+qu,zn+ju,zn+$u]),ST=function(e,t,n){wl(n);var r=e._gsap;if(r.spacerIsNative)wl(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},Np=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=Bm.length,u=t.style,c=e.style,d;a--;)d=Bm[a],u[d]=n[d];u.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(u.display="inline-block"),c[n_]=c[t_]="auto",u.flexBasis=n.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[_a]=wd(e,Ni)+Wn,u[va]=wd(e,Xn)+Wn,u[zn]=c[Pr]=c[tM]=c[eM]="0",wl(r),c[_a]=c["max"+Nl]=n[_a],c[va]=c["max"+i_]=n[va],c[zn]=n[zn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},MT=/([A-Z])/g,wl=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,u;for((e.t._gsap||Qe.core.getCache(e.t)).uncache=1;r<n;r+=2)u=e[r+1],a=e[r],u?t[a]=u:t[a]&&t.removeProperty(a.replace(MT,"-$1").toLowerCase())}},bf=function(e){for(var t=ad.length,n=e.style,r=[],a=0;a<t;a++)r.push(ad[a],n[ad[a]]);return r.t=e,r},ET=function(e,t,n){for(var r=[],a=e.length,u=n?8:0,c;u<a;u+=2)c=e[u],r.push(c,c in t?t[c]:e[u+1]);return r.t=e.t,r},ld={left:0,top:0},Dx=function(e,t,n,r,a,u,c,d,h,p,v,m,_,M){Mi(e)&&(e=e(d)),lr(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?rd("0"+e.substr(3),n):0));var E=_?_.time():0,x,y,b;if(_&&_.seek(0),isNaN(e)||(e=+e),Fu(e))_&&(e=Qe.utils.mapRange(_.scrollTrigger.start,_.scrollTrigger.end,0,m,e)),c&&sd(c,n,r,!0);else{Mi(t)&&(t=t(d));var L=(e||"0").split(" "),T,R,D,P;b=Yi(t,d)||Kt,T=Ns(b)||{},(!T||!T.left&&!T.top)&&Dr(b).display==="none"&&(P=b.style.display,b.style.display="block",T=Ns(b),P?b.style.display=P:b.style.removeProperty("display")),R=rd(L[0],T[r.d]),D=rd(L[1]||"0",n),e=T[r.p]-h[r.p]-p+R+a-D,c&&sd(c,D,r,n-D<20||c._isStart&&D>20),n-=n-D}if(M&&(d[M]=e||-.001,e<0&&(e=0)),u){var w=e+n,N=u._isStart;x="scroll"+r.d2,sd(u,w,r,N&&w>20||!N&&(v?Math.max(Kt[x],cr[x]):u.parentNode[x])<=w+1),v&&(h=Ns(c),v&&(u.style[r.op.p]=h[r.op.p]-r.op.m-u._offset+Wn))}return _&&b&&(x=Ns(b),_.seek(m),y=Ns(b),_._caScrollDist=x[r.p]-y[r.p],e=e/_._caScrollDist*m),_&&_.seek(E),_?e:Math.round(e)},wT=/(webkit|moz|length|cssText|inset)/i,Lx=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,u,c;if(t===Kt){e._stOrig=a.cssText,c=Dr(e);for(u in c)!+u&&!wT.test(u)&&c[u]&&typeof a[u]=="string"&&u!=="0"&&(a[u]=c[u]);a.top=n,a.left=r}else a.cssText=e._stOrig;Qe.core.getCache(e).uncache=1,t.appendChild(e)}},lM=function(e,t,n){var r=t,a=r;return function(u){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(u=c,n&&n()),a=r,r=Math.round(u),r}},Cf=function(e,t,n){var r={};r[t.p]="+="+n,Qe.set(e,r)},Nx=function(e,t){var n=Lo(e,t),r="_scroll"+t.p2,a=function u(c,d,h,p,v){var m=u.tween,_=d.onComplete,M={};h=h||n();var E=lM(n,h,function(){m.kill(),u.tween=0});return v=p&&v||0,p=p||c-h,m&&m.kill(),d[r]=c,d.inherit=!1,d.modifiers=M,M[r]=function(){return E(h+p*m.ratio+v*m.ratio*m.ratio)},d.onUpdate=function(){It.cache++,u.tween&&Os()},d.onComplete=function(){u.tween=0,_&&_.call(m)},m=u.tween=Qe.to(e,d),m};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},ni(e,"wheel",n.wheelHandler),Tt.isTouch&&ni(e,"touchmove",n.wheelHandler),a},Tt=(function(){function s(t,n){hl||s.register(Qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Um(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Iu){this.update=this.refresh=this.kill=rs;return}n=Ax(lr(n)||Fu(n)||n.nodeType?{trigger:n}:n,Tf);var a=n,u=a.onUpdate,c=a.toggleClass,d=a.id,h=a.onToggle,p=a.onRefresh,v=a.scrub,m=a.trigger,_=a.pin,M=a.pinSpacing,E=a.invalidateOnRefresh,x=a.anticipatePin,y=a.onScrubComplete,b=a.onSnapComplete,L=a.once,T=a.snap,R=a.pinReparent,D=a.pinSpacer,P=a.containerAnimation,w=a.fastScrollEnd,N=a.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Ni:Xn,z=!v&&v!==0,B=Yi(n.scroller||Nt),Q=Qe.core.getCache(B),ee=ya(B),Y=("pinType"in n?n.pinType:Co(B,"pinType")||ee&&"fixed")==="fixed",J=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=z&&n.toggleActions.split(" "),G="markers"in n?n.markers:Tf.markers,te=ee?0:parseFloat(Dr(B)["border"+F.p2+Nl])||0,U=this,k=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Z=pT(B,ee,F),Be=mT(B,ee),ze=0,Ve=0,se=0,ve=Lo(B,F),he,Ne,je,Xe,At,Ge,ct,_t,gt,le,Ft,Xt,Yt,ft,Vt,q,cn,pt,O,A,j,re,de,Ae,we,pe,ge,Fe,$e,Ie,Pe,be,et,it,W,Re,_e,Ue,ke;if(U._startClamp=U._endClamp=!1,U._dir=F,x*=45,U.scroller=B,U.scroll=P?P.time.bind(P):ve,Xe=ve(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(YS=1,n.refreshPriority===-9999&&(Zu=U)),Q.tweenScroll=Q.tweenScroll||{top:Nx(B,Xn),left:Nx(B,Ni)},U.tweenTo=he=Q.tweenScroll[F.p],U.scrubDuration=function(Me){et=Fu(Me)&&Me,et?be?be.duration(Me):be=Qe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:et,paused:!0,onComplete:function(){return y&&y(U)}}):(be&&be.progress(1).kill(),be=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(v),Ie=0,d||(d=r.vars.id)),T&&((!ra(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in Kt.style&&Qe.set(ee?[Kt,cr]:B,{scrollBehavior:"auto"}),It.forEach(function(Me){return Mi(Me)&&Me.target===(ee?tn.scrollingElement||cr:B)&&(Me.smooth=!1)}),je=Mi(T.snapTo)?T.snapTo:T.snapTo==="labels"?_T(r):T.snapTo==="labelsDirectional"?vT(r):T.directional!==!1?function(Me,ot){return r_(T.snapTo)(Me,yi()-Ve<500?0:ot.direction)}:Qe.utils.snap(T.snapTo),it=T.duration||{min:.1,max:2},it=ra(it)?Xu(it.min,it.max):Xu(it,it),W=Qe.delayedCall(T.delay||et/2||.1,function(){var Me=ve(),ot=yi()-Ve<500,Ze=he.tween;if((ot||Math.abs(U.getVelocity())<10)&&!Ze&&!Ud&&ze!==Me){var mt=(Me-Ge)/ft,fn=r&&!z?r.totalProgress():mt,Et=ot?0:(fn-Pe)/(yi()-Nu)*1e3||0,jt=Qe.utils.clamp(-mt,1-mt,Za(Et/2)*Et/.185),Un=mt+(T.inertia===!1?0:jt),rn,Zt,wt=T,$n=wt.onStart,Qt=wt.onInterrupt,Kn=wt.onComplete;if(rn=je(Un,U),Fu(rn)||(rn=Un),Zt=Math.max(0,Math.round(Ge+rn*ft)),Me<=ct&&Me>=Ge&&Zt!==Me){if(Ze&&!Ze._initted&&Ze.data<=Za(Zt-Me))return;T.inertia===!1&&(jt=rn-mt),he(Zt,{duration:it(Za(Math.max(Za(Un-fn),Za(rn-fn))*.185/Et/.05||0)),ease:T.ease||"power3",data:Za(Zt-Me),onInterrupt:function(){return W.restart(!0)&&Qt&&ja(U,Qt)},onComplete:function(){U.update(),ze=ve(),r&&!z&&(be?be.resetTo("totalProgress",rn,r._tTime/r._tDur):r.progress(rn)),Ie=Pe=r&&!z?r.totalProgress():U.progress,b&&b(U),Kn&&ja(U,Kn)}},Me,jt*ft,Zt-Me-jt*ft),$n&&ja(U,$n,he.tween)}}else U.isActive&&ze!==Me&&W.restart(!0)}).pause()),d&&(Om[d]=U),m=U.trigger=Yi(m||_!==!0&&_),ke=m&&m._gsap&&m._gsap.stRevert,ke&&(ke=ke(U)),_=_===!0?m:Yi(_),lr(c)&&(c={targets:m,className:c}),_&&(M===!1||M===Pr||(M=!M&&_.parentNode&&_.parentNode.style&&Dr(_.parentNode).display==="flex"?!1:zn),U.pin=_,Ne=Qe.core.getCache(_),Ne.spacer?Vt=Ne.pinState:(D&&(D=Yi(D),D&&!D.nodeType&&(D=D.current||D.nativeElement),Ne.spacerIsNative=!!D,D&&(Ne.spacerState=bf(D))),Ne.spacer=pt=D||tn.createElement("div"),pt.classList.add("pin-spacer"),d&&pt.classList.add("pin-spacer-"+d),Ne.pinState=Vt=bf(_)),n.force3D!==!1&&Qe.set(_,{force3D:!0}),U.spacer=pt=Ne.spacer,$e=Dr(_),Ae=$e[M+F.os2],A=Qe.getProperty(_),j=Qe.quickSetter(_,F.a,Wn),Np(_,pt,$e),cn=bf(_)),G){Xt=ra(G)?Ax(G,bx):bx,le=Af("scroller-start",d,B,F,Xt,0),Ft=Af("scroller-end",d,B,F,Xt,0,le),O=le["offset"+F.op.d2];var xe=Yi(Co(B,"content")||B);_t=this.markerStart=Af("start",d,xe,F,Xt,O,0,P),gt=this.markerEnd=Af("end",d,xe,F,Xt,O,0,P),P&&(Ue=Qe.quickSetter([_t,gt],F.a,Wn)),!Y&&!(fs.length&&Co(B,"fixedMarkers")===!0)&&(gT(ee?Kt:B),Qe.set([le,Ft],{force3D:!0}),pe=Qe.quickSetter(le,F.a,Wn),Fe=Qe.quickSetter(Ft,F.a,Wn))}if(P){var Se=P.vars.onUpdate,ye=P.vars.onUpdateParams;P.eventCallback("onUpdate",function(){U.update(0,0,1),Se&&Se.apply(P,ye||[])})}if(U.previous=function(){return Pt[Pt.indexOf(U)-1]},U.next=function(){return Pt[Pt.indexOf(U)+1]},U.revert=function(Me,ot){if(!ot)return U.kill(!0);var Ze=Me!==!1||!U.enabled,mt=xi;Ze!==U.isReverted&&(Ze&&(Re=Math.max(ve(),U.scroll.rec||0),se=U.progress,_e=r&&r.progress()),_t&&[_t,gt,le,Ft].forEach(function(fn){return fn.style.display=Ze?"none":"block"}),Ze&&(xi=U,U.update(Ze)),_&&(!R||!U.isActive)&&(Ze?ST(_,pt,Vt):Np(_,pt,Dr(_),we)),Ze||U.update(Ze),xi=mt,U.isReverted=Ze)},U.refresh=function(Me,ot,Ze,mt){if(!((xi||!U.enabled)&&!ot)){if(_&&Me&&Ir){ni(s,"scrollEnd",iM);return}!Li&&k&&k(U),xi=U,he.tween&&!Ze&&(he.tween.kill(),he.tween=0),be&&be.pause(),E&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(He){return He.vars.immediateRender&&He.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var fn=Z(),Et=Be(),jt=P?P.duration():ls(B,F),Un=ft<=.01||!ft,rn=0,Zt=mt||0,wt=ra(Ze)?Ze.end:n.end,$n=n.endTrigger||m,Qt=ra(Ze)?Ze.start:n.start||(n.start===0||!m?0:_?"0 0":"0 100%"),Kn=U.pinnedContainer=n.pinnedContainer&&Yi(n.pinnedContainer,U),jn=m&&Math.max(0,Pt.indexOf(U))||0,xn=jn,dn,Cn,yr,Ws,bt,yn,di,I,K,ce,ne,oe,De;for(G&&ra(Ze)&&(oe=Qe.getProperty(le,F.p),De=Qe.getProperty(Ft,F.p));xn-- >0;)yn=Pt[xn],yn.end||yn.refresh(0,1)||(xi=U),di=yn.pin,di&&(di===m||di===_||di===Kn)&&!yn.isReverted&&(ce||(ce=[]),ce.unshift(yn),yn.revert(!0,!0)),yn!==Pt[xn]&&(jn--,xn--);for(Mi(Qt)&&(Qt=Qt(U)),Qt=Mx(Qt,"start",U),Ge=Dx(Qt,m,fn,F,ve(),_t,le,U,Et,te,Y,jt,P,U._startClamp&&"_startClamp")||(_?-.001:0),Mi(wt)&&(wt=wt(U)),lr(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(lr(Qt)?Qt.split(" ")[0]:"")+wt:(rn=rd(wt.substr(2),fn),wt=lr(Qt)?Qt:(P?Qe.utils.mapRange(0,P.duration(),P.scrollTrigger.start,P.scrollTrigger.end,Ge):Ge)+rn,$n=m)),wt=Mx(wt,"end",U),ct=Math.max(Ge,Dx(wt||($n?"100% 0":jt),$n,fn,F,ve()+rn,gt,Ft,U,Et,te,Y,jt,P,U._endClamp&&"_endClamp"))||-.001,rn=0,xn=jn;xn--;)yn=Pt[xn]||{},di=yn.pin,di&&yn.start-yn._pinPush<=Ge&&!P&&yn.end>0&&(dn=yn.end-(U._startClamp?Math.max(0,yn.start):yn.start),(di===m&&yn.start-yn._pinPush<Ge||di===Kn)&&isNaN(Qt)&&(rn+=dn*(1-yn.progress)),di===_&&(Zt+=dn));if(Ge+=rn,ct+=rn,U._startClamp&&(U._startClamp+=rn),U._endClamp&&!Li&&(U._endClamp=ct||-.001,ct=Math.min(ct,ls(B,F))),ft=ct-Ge||(Ge-=.01)&&.001,Un&&(se=Qe.utils.clamp(0,1,Qe.utils.normalize(Ge,ct,Re))),U._pinPush=Zt,_t&&rn&&(dn={},dn[F.a]="+="+rn,Kn&&(dn[F.p]="-="+ve()),Qe.set([_t,gt],dn)),_&&!(Fm&&U.end>=ls(B,F)))dn=Dr(_),Ws=F===Xn,yr=ve(),re=parseFloat(A(F.a))+Zt,!jt&&ct>1&&(ne=(ee?tn.scrollingElement||cr:B).style,ne={style:ne,value:ne["overflow"+F.a.toUpperCase()]},ee&&Dr(Kt)["overflow"+F.a.toUpperCase()]!=="scroll"&&(ne.style["overflow"+F.a.toUpperCase()]="scroll")),Np(_,pt,dn),cn=bf(_),Cn=Ns(_,!0),I=Y&&Lo(B,Ws?Ni:Xn)(),M?(we=[M+F.os2,ft+Zt+Wn],we.t=pt,xn=M===zn?wd(_,F)+ft+Zt:0,xn&&(we.push(F.d,xn+Wn),pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=xn+Wn)),wl(we),Kn&&Pt.forEach(function(He){He.pin===Kn&&He.vars.pinSpacing!==!1&&(He._subPinOffset=!0)}),Y&&ve(Re)):(xn=wd(_,F),xn&&pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=xn+Wn)),Y&&(bt={top:Cn.top+(Ws?yr-Ge:I)+Wn,left:Cn.left+(Ws?I:yr-Ge)+Wn,boxSizing:"border-box",position:"fixed"},bt[_a]=bt["max"+Nl]=Math.ceil(Cn.width)+Wn,bt[va]=bt["max"+i_]=Math.ceil(Cn.height)+Wn,bt[Pr]=bt[Pr+Ku]=bt[Pr+qu]=bt[Pr+ju]=bt[Pr+$u]="0",bt[zn]=dn[zn],bt[zn+Ku]=dn[zn+Ku],bt[zn+qu]=dn[zn+qu],bt[zn+ju]=dn[zn+ju],bt[zn+$u]=dn[zn+$u],q=ET(Vt,bt,R),Li&&ve(0)),r?(K=r._initted,Rp(1),r.render(r.duration(),!0,!0),de=A(F.a)-re+ft+Zt,ge=Math.abs(ft-de)>1,Y&&ge&&q.splice(q.length-2,2),r.render(0,!0,!0),K||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Rp(0)):de=ft,ne&&(ne.value?ne.style["overflow"+F.a.toUpperCase()]=ne.value:ne.style.removeProperty("overflow-"+F.a));else if(m&&ve()&&!P)for(Cn=m.parentNode;Cn&&Cn!==Kt;)Cn._pinOffset&&(Ge-=Cn._pinOffset,ct-=Cn._pinOffset),Cn=Cn.parentNode;ce&&ce.forEach(function(He){return He.revert(!1,!0)}),U.start=Ge,U.end=ct,Xe=At=Li?Re:ve(),!P&&!Li&&(Xe<Re&&ve(Re),U.scroll.rec=0),U.revert(!1,!0),Ve=yi(),W&&(ze=-1,W.restart(!0)),xi=0,r&&z&&(r._initted||_e)&&r.progress()!==_e&&r.progress(_e||0,!0).render(r.time(),!0,!0),(Un||se!==U.progress||P||E||r&&!r._initted)&&(r&&!z&&(r._initted||se||r.vars.immediateRender!==!1)&&r.totalProgress(P&&Ge<-.001&&!se?Qe.utils.normalize(Ge,ct,0):se,!0),U.progress=Un||(Xe-Ge)/ft===se?0:se),_&&M&&(pt._pinOffset=Math.round(U.progress*de)),be&&be.invalidate(),isNaN(oe)||(oe-=Qe.getProperty(le,F.p),De-=Qe.getProperty(Ft,F.p),Cf(le,F,oe),Cf(_t,F,oe-(mt||0)),Cf(Ft,F,De),Cf(gt,F,De-(mt||0))),Un&&!Li&&U.update(),p&&!Li&&!Yt&&(Yt=!0,p(U),Yt=!1)}},U.getVelocity=function(){return(ve()-At)/(yi()-Nu)*1e3||0},U.endAnimation=function(){Mu(U.callbackAnimation),r&&(be?be.progress(1):r.paused()?z||Mu(r,U.direction<0,1):Mu(r,r.reversed()))},U.labelToScroll=function(Me){return r&&r.labels&&(Ge||U.refresh()||Ge)+r.labels[Me]/r.duration()*ft||0},U.getTrailing=function(Me){var ot=Pt.indexOf(U),Ze=U.direction>0?Pt.slice(0,ot).reverse():Pt.slice(ot+1);return(lr(Me)?Ze.filter(function(mt){return mt.vars.preventOverlaps===Me}):Ze).filter(function(mt){return U.direction>0?mt.end<=Ge:mt.start>=ct})},U.update=function(Me,ot,Ze){if(!(P&&!Ze&&!Me)){var mt=Li===!0?Re:U.scroll(),fn=Me?0:(mt-Ge)/ft,Et=fn<0?0:fn>1?1:fn||0,jt=U.progress,Un,rn,Zt,wt,$n,Qt,Kn,jn;if(ot&&(At=Xe,Xe=P?ve():mt,T&&(Pe=Ie,Ie=r&&!z?r.totalProgress():Et)),x&&_&&!xi&&!Sf&&Ir&&(!Et&&Ge<mt+(mt-At)/(yi()-Nu)*x?Et=1e-4:Et===1&&ct>mt+(mt-At)/(yi()-Nu)*x&&(Et=.9999)),Et!==jt&&U.enabled){if(Un=U.isActive=!!Et&&Et<1,rn=!!jt&&jt<1,Qt=Un!==rn,$n=Qt||!!Et!=!!jt,U.direction=Et>jt?1:-1,U.progress=Et,$n&&!xi&&(Zt=Et&&!jt?0:Et===1?1:jt===1?2:3,z&&(wt=!Qt&&H[Zt+1]!=="none"&&H[Zt+1]||H[Zt],jn=r&&(wt==="complete"||wt==="reset"||wt in r))),N&&(Qt||jn)&&(jn||v||!r)&&(Mi(N)?N(U):U.getTrailing(N).forEach(function(yr){return yr.endAnimation()})),z||(be&&!xi&&!Sf?(be._dp._time-be._start!==be._time&&be.render(be._dp._time-be._start),be.resetTo?be.resetTo("totalProgress",Et,r._tTime/r._tDur):(be.vars.totalProgress=Et,be.invalidate().restart())):r&&r.totalProgress(Et,!!(xi&&(Ve||Me)))),_){if(Me&&M&&(pt.style[M+F.os2]=Ae),!Y)j(Uu(re+de*Et));else if($n){if(Kn=!Me&&Et>jt&&ct+1>mt&&mt+1>=ls(B,F),R)if(!Me&&(Un||Kn)){var xn=Ns(_,!0),dn=mt-Ge;Lx(_,Kt,xn.top+(F===Xn?dn:0)+Wn,xn.left+(F===Xn?0:dn)+Wn)}else Lx(_,pt);wl(Un||Kn?q:cn),ge&&Et<1&&Un||j(re+(Et===1&&!Kn?de:0))}}T&&!he.tween&&!xi&&!Sf&&W.restart(!0),c&&(Qt||L&&Et&&(Et<1||!Pp))&&oc(c.targets).forEach(function(yr){return yr.classList[Un||L?"add":"remove"](c.className)}),u&&!z&&!Me&&u(U),$n&&!xi?(z&&(jn&&(wt==="complete"?r.pause().totalProgress(1):wt==="reset"?r.restart(!0).pause():wt==="restart"?r.restart(!0):r[wt]()),u&&u(U)),(Qt||!Pp)&&(h&&Qt&&ja(U,h),J[Zt]&&ja(U,J[Zt]),L&&(Et===1?U.kill(!1,1):J[Zt]=0),Qt||(Zt=Et===1?1:3,J[Zt]&&ja(U,J[Zt]))),w&&!Un&&Math.abs(U.getVelocity())>(Fu(w)?w:2500)&&(Mu(U.callbackAnimation),be?be.progress(1):Mu(r,wt==="reverse"?1:!Et,1))):z&&u&&!xi&&u(U)}if(Fe){var Cn=P?mt/P.duration()*(P._caScrollDist||0):mt;pe(Cn+(le._isFlipped?1:0)),Fe(Cn)}Ue&&Ue(-mt/P.duration()*(P._caScrollDist||0))}},U.enable=function(Me,ot){U.enabled||(U.enabled=!0,ni(B,"resize",Ou),ee||ni(B,"scroll",Qa),k&&ni(s,"refreshInit",k),Me!==!1&&(U.progress=se=0,Xe=At=ze=ve()),ot!==!1&&U.refresh())},U.getTween=function(Me){return Me&&he?he.tween:be},U.setPositions=function(Me,ot,Ze,mt){if(P){var fn=P.scrollTrigger,Et=P.duration(),jt=fn.end-fn.start;Me=fn.start+jt*Me/Et,ot=fn.start+jt*ot/Et}U.refresh(!1,!1,{start:Ex(Me,Ze&&!!U._startClamp),end:Ex(ot,Ze&&!!U._endClamp)},mt),U.update()},U.adjustPinSpacing=function(Me){if(we&&Me){var ot=we.indexOf(F.d)+1;we[ot]=parseFloat(we[ot])+Me+Wn,we[1]=parseFloat(we[1])+Me+Wn,wl(we)}},U.disable=function(Me,ot){if(Me!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,ot||be&&be.pause(),Re=0,Ne&&(Ne.uncache=1),k&&ti(s,"refreshInit",k),W&&(W.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!ee)){for(var Ze=Pt.length;Ze--;)if(Pt[Ze].scroller===B&&Pt[Ze]!==U)return;ti(B,"resize",Ou),ee||ti(B,"scroll",Qa)}},U.kill=function(Me,ot){U.disable(Me,ot),be&&!ot&&be.kill(),d&&delete Om[d];var Ze=Pt.indexOf(U);Ze>=0&&Pt.splice(Ze,1),Ze===Di&&od>0&&Di--,Ze=0,Pt.forEach(function(mt){return mt.scroller===U.scroller&&(Ze=1)}),Ze||Li||(U.scroll.rec=0),r&&(r.scrollTrigger=null,Me&&r.revert({kill:!1}),ot||r.kill()),_t&&[_t,gt,le,Ft].forEach(function(mt){return mt.parentNode&&mt.parentNode.removeChild(mt)}),Zu===U&&(Zu=0),_&&(Ne&&(Ne.uncache=1),Ze=0,Pt.forEach(function(mt){return mt.pin===_&&Ze++}),Ze||(Ne.spacer=0)),n.onKill&&n.onKill(U)},Pt.push(U),U.enable(!1,!1),ke&&ke(U),r&&r.add&&!ft){var st=U.update;U.update=function(){U.update=st,It.cache++,Ge||ct||U.refresh()},Qe.delayedCall(.01,U.update),ft=.01,Ge=ct=0}else U.refresh();_&&yT()},s.register=function(n){return hl||(Qe=n||ZS(),jS()&&window.document&&s.enable(),hl=Iu),hl},s.defaults=function(n){if(n)for(var r in n)Tf[r]=n[r];return Tf},s.disable=function(n,r){Iu=0,Pt.forEach(function(u){return u[r?"kill":"disable"](n)}),ti(Nt,"wheel",Qa),ti(tn,"scroll",Qa),clearInterval(yf),ti(tn,"touchcancel",rs),ti(Kt,"touchstart",rs),Ef(ti,tn,"pointerdown,touchstart,mousedown",wx),Ef(ti,tn,"pointerup,touchend,mouseup",Tx),Ed.kill(),Mf(ti);for(var a=0;a<It.length;a+=3)wf(ti,It[a],It[a+1]),wf(ti,It[a],It[a+2])},s.enable=function(){if(Nt=window,tn=document,cr=tn.documentElement,Kt=tn.body,Qe){if(oc=Qe.utils.toArray,Xu=Qe.utils.clamp,Um=Qe.core.context||rs,Rp=Qe.core.suppressOverwrites||rs,Jg=Nt.history.scrollRestoration||"auto",km=Nt.pageYOffset||0,Qe.core.globals("ScrollTrigger",s),Kt){Iu=1,El=document.createElement("div"),El.style.height="100vh",El.style.position="absolute",aM(),hT(),Nn.register(Qe),s.isTouch=Nn.isTouch,vo=Nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Im=Nn.isTouch===1,ni(Nt,"wheel",Qa),Qg=[Nt,tn,cr,Kt],Qe.matchMedia?(s.matchMedia=function(p){var v=Qe.matchMedia(),m;for(m in p)v.add(m,p[m]);return v},Qe.addEventListener("matchMediaInit",function(){sM(),s_()}),Qe.addEventListener("matchMediaRevert",function(){return rM()}),Qe.addEventListener("matchMedia",function(){ua(0,1),Ma("matchMedia")}),Qe.matchMedia().add("(orientation: portrait)",function(){return Lp(),Lp})):console.warn("Requires GSAP 3.11.0 or later"),Lp(),ni(tn,"scroll",Qa);var n=Kt.hasAttribute("style"),r=Kt.style,a=r.borderTopStyle,u=Qe.core.Animation.prototype,c,d;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",c=Ns(Kt),Xn.m=Math.round(c.top+Xn.sc())||0,Ni.m=Math.round(c.left+Ni.sc())||0,a?r.borderTopStyle=a:r.removeProperty("border-top-style"),n||(Kt.setAttribute("style",""),Kt.removeAttribute("style")),yf=setInterval(Cx,250),Qe.delayedCall(.5,function(){return Sf=0}),ni(tn,"touchcancel",rs),ni(Kt,"touchstart",rs),Ef(ni,tn,"pointerdown,touchstart,mousedown",wx),Ef(ni,tn,"pointerup,touchend,mouseup",Tx),Nm=Qe.utils.checkPrefix("transform"),ad.push(Nm),hl=yi(),Ed=Qe.delayedCall(.2,ua).pause(),pl=[tn,"visibilitychange",function(){var p=Nt.innerWidth,v=Nt.innerHeight;tn.hidden?(yx=p,Sx=v):(yx!==p||Sx!==v)&&Ou()},tn,"DOMContentLoaded",ua,Nt,"load",ua,Nt,"resize",Ou],Mf(ni),Pt.forEach(function(p){return p.enable(0,1)}),d=0;d<It.length;d+=3)wf(ti,It[d],It[d+1]),wf(ti,It[d],It[d+2])}else if(tn){var h=function p(){s.enable(),tn.removeEventListener("DOMContentLoaded",p)};tn.addEventListener("DOMContentLoaded",h)}}},s.config=function(n){"limitCallbacks"in n&&(Pp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(yf)||(yf=r)&&setInterval(Cx,r),"ignoreMobileResize"in n&&(Im=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Mf(ti)||Mf(ni,n.autoRefreshEvents||"none"),qS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,r){var a=Yi(n),u=It.indexOf(a),c=ya(a);~u&&It.splice(u,c?6:2),r&&(c?fs.unshift(Nt,r,Kt,r,cr,r):fs.unshift(a,r))},s.clearMatchMedia=function(n){Pt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},s.isInViewport=function(n,r,a){var u=(lr(n)?Yi(n):n).getBoundingClientRect(),c=u[a?_a:va]*r||0;return a?u.right-c>0&&u.left+c<Nt.innerWidth:u.bottom-c>0&&u.top+c<Nt.innerHeight},s.positionInViewport=function(n,r,a){lr(n)&&(n=Yi(n));var u=n.getBoundingClientRect(),c=u[a?_a:va],d=r==null?c/2:r in Td?Td[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(u.left+d)/Nt.innerWidth:(u.top+d)/Nt.innerHeight},s.killAll=function(n){if(Pt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=Sa.killAll||[];Sa={},r.forEach(function(a){return a()})}},s})();Tt.version="3.15.0";Tt.saveStyles=function(s){return s?oc(s).forEach(function(e){if(e&&e.style){var t=ar.indexOf(e);t>=0&&ar.splice(t,5),ar.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Qe.core.getCache(e),Um())}}):ar};Tt.revert=function(s,e){return s_(!s,e)};Tt.create=function(s,e){return new Tt(s,e)};Tt.refresh=function(s){return s?Ou(!0):(hl||Tt.register())&&ua(!0)};Tt.update=function(s){return++It.cache&&Os(s===!0?2:0)};Tt.clearScrollMemory=oM;Tt.maxScroll=function(s,e){return ls(s,e?Ni:Xn)};Tt.getScrollFunc=function(s,e){return Lo(Yi(s),e?Ni:Xn)};Tt.getById=function(s){return Om[s]};Tt.getAll=function(){return Pt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Tt.isScrolling=function(){return!!Ir};Tt.snapDirectional=r_;Tt.addEventListener=function(s,e){var t=Sa[s]||(Sa[s]=[]);~t.indexOf(e)||t.push(e)};Tt.removeEventListener=function(s,e){var t=Sa[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Tt.batch=function(s,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,u=function(h,p){var v=[],m=[],_=Qe.delayedCall(r,function(){p(v,m),v=[],m=[]}).pause();return function(M){v.length||_.restart(!0),v.push(M.trigger),m.push(M),a<=v.length&&_.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&Mi(e[c])&&c!=="onRefreshInit"?u(c,e[c]):e[c];return Mi(a)&&(a=a(),ni(Tt,"refresh",function(){return a=e.batchMax()})),oc(s).forEach(function(d){var h={};for(c in n)h[c]=n[c];h.trigger=d,t.push(Tt.create(h))}),t};var Ix=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Ip=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Nn.isTouch?" pinch-zoom":""):"none",e===cr&&s(Kt,t)},Rf={auto:1,scroll:1},TT=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,u=a._gsap||Qe.core.getCache(a),c=yi(),d;if(!u._isScrollT||c-u._isScrollT>2e3){for(;a&&a!==Kt&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(Rf[(d=Dr(a)).overflowY]||Rf[d.overflowX]));)a=a.parentNode;u._isScroll=a&&a!==n&&!ya(a)&&(Rf[(d=Dr(a)).overflowY]||Rf[d.overflowX]),u._isScrollT=c}(u._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},uM=function(e,t,n,r){return Nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&TT,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&ni(tn,Nn.eventTypes[0],Fx,!1,!0)},onDisable:function(){return ti(tn,Nn.eventTypes[0],Fx,!0)}})},AT=/(input|label|select|textarea)/i,Ux,Fx=function(e){var t=AT.test(e.target.tagName);(t||Ux)&&(e._gsapAllow=!0,Ux=t)},bT=function(e){ra(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,u=t.onRelease,c,d,h=Yi(e.target)||cr,p=Qe.core.globals().ScrollSmoother,v=p&&p.get(),m=vo&&(e.content&&Yi(e.content)||v&&e.content!==!1&&!v.smooth()&&v.content()),_=Lo(h,Xn),M=Lo(h,Ni),E=1,x=(Nn.isTouch&&Nt.visualViewport?Nt.visualViewport.scale*Nt.visualViewport.width:Nt.outerWidth)/Nt.innerWidth,y=0,b=Mi(r)?function(){return r(c)}:function(){return r||2.8},L,T,R=uM(h,e.type,!0,a),D=function(){return T=!1},P=rs,w=rs,N=function(){d=ls(h,Xn),w=Xu(vo?1:0,d),n&&(P=Xu(0,ls(h,Ni))),L=xa},F=function(){m._gsap.y=Uu(parseFloat(m._gsap.y)+_.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",_.offset=_.cacheID=0},z=function(){if(T){requestAnimationFrame(D);var G=Uu(c.deltaY/2),te=w(_.v-G);if(m&&te!==_.v+_.offset){_.offset=te-_.v;var U=Uu((parseFloat(m&&m._gsap.y)||0)-_.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",m._gsap.y=U+"px",_.cacheID=It.cache,Os()}return!0}_.offset&&F(),T=!0},B,Q,ee,Y,J=function(){N(),B.isActive()&&B.vars.scrollY>d&&(_()>d?B.progress(1)&&_(d):B.resetTo("scrollY",d))};return m&&Qe.set(m,{y:"+=0"}),e.ignoreCheck=function(H){return vo&&H.type==="touchmove"&&z()||E>1.05&&H.type!=="touchstart"||c.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){T=!1;var H=E;E=Uu((Nt.visualViewport&&Nt.visualViewport.scale||1)/x),B.pause(),H!==E&&Ip(h,E>1.01?!0:n?!1:"x"),Q=M(),ee=_(),N(),L=xa},e.onRelease=e.onGestureStart=function(H,G){if(_.offset&&F(),!G)Y.restart(!0);else{It.cache++;var te=b(),U,k;n&&(U=M(),k=U+te*.05*-H.velocityX/.227,te*=Ix(M,U,k,ls(h,Ni)),B.vars.scrollX=P(k)),U=_(),k=U+te*.05*-H.velocityY/.227,te*=Ix(_,U,k,ls(h,Xn)),B.vars.scrollY=w(k),B.invalidate().duration(te).play(.01),(vo&&B.vars.scrollY>=d||U>=d-1)&&Qe.to({},{onUpdate:J,duration:te})}u&&u(H)},e.onWheel=function(){B._ts&&B.pause(),yi()-y>1e3&&(L=0,y=yi())},e.onChange=function(H,G,te,U,k){if(xa!==L&&N(),G&&n&&M(P(U[2]===G?Q+(H.startX-H.x):M()+G-U[1])),te){_.offset&&F();var Z=k[2]===te,Be=Z?ee+H.startY-H.y:_()+te-k[1],ze=w(Be);Z&&Be!==ze&&(ee+=ze-Be),_(ze)}(te||G)&&Os()},e.onEnable=function(){Ip(h,n?!1:"x"),Tt.addEventListener("refresh",J),ni(Nt,"resize",J),_.smooth&&(_.target.style.scrollBehavior="auto",_.smooth=M.smooth=!1),R.enable()},e.onDisable=function(){Ip(h,!0),ti(Nt,"resize",J),Tt.removeEventListener("refresh",J),R.kill()},e.lockAxis=e.lockAxis!==!1,c=new Nn(e),c.iOS=vo,vo&&!_()&&_(1),vo&&Qe.ticker.add(rs),Y=c._dc,B=Qe.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:lM(_,_(),function(){return B.pause()})},onUpdate:Os,onComplete:Y.vars.onComplete}),c};Tt.sort=function(s){if(Mi(s))return Pt.sort(s);var e=Nt.pageYOffset||0;return Tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Nt.innerHeight}),Pt.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Tt.observe=function(s){return new Nn(s)};Tt.normalizeScroll=function(s){if(typeof s>"u")return Pi;if(s===!0&&Pi)return Pi.enable();if(s===!1){Pi&&Pi.kill(),Pi=s;return}var e=s instanceof Nn?s:bT(s);return Pi&&Pi.target===e.target&&Pi.kill(),ya(e.target)&&(Pi=e),e};Tt.core={_getVelocityProp:Lm,_inputObserver:uM,_scrollers:It,_proxies:fs,bridge:{ss:function(){Ir||Ma("scrollStart"),Ir=yi()},ref:function(){return xi}}};ZS()&&Qe.registerPlugin(Tt);var Ox="1.3.25";function cM(s,e,t){return Math.max(s,Math.min(e,t))}function CT(s,e,t){return(1-t)*s+t*e}function RT(s,e,t,n){return CT(s,e,1-Math.exp(-t*n))}function PT(s,e){return(s%e+e)%e}var DT=class{constructor(){ut(this,"isRunning",!1);ut(this,"value",0);ut(this,"from",0);ut(this,"to",0);ut(this,"currentTime",0);ut(this,"lerp");ut(this,"duration");ut(this,"easing");ut(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const n=cM(0,this.currentTime/this.duration,1);e=n>=1;const r=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=RT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:n,easing:r,onStart:a,onUpdate:u}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=n,this.easing=r,this.currentTime=0,this.isRunning=!0,a==null||a(),this.onUpdate=u}};function LT(s,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,n)},e)}}var NT=class{constructor(s,e,{autoResize:t=!0,debounce:n=250}={}){ut(this,"width",0);ut(this,"height",0);ut(this,"scrollHeight",0);ut(this,"scrollWidth",0);ut(this,"debouncedResize");ut(this,"wrapperResizeObserver");ut(this,"contentResizeObserver");ut(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ut(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ut(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=LT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fM=class{constructor(){ut(this,"events",{})}emit(s,...e){var n;const t=this.events[s]||[];for(let r=0,a=t.length;r<a;r++)(n=t[r])==null||n.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const IT=100/6,co={passive:!1};function kx(s,e){return s===1?IT:s===2?e:1}var UT=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){ut(this,"touchStart",{x:0,y:0});ut(this,"lastDelta",{x:0,y:0});ut(this,"window",{width:0,height:0});ut(this,"emitter",new fM);ut(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});ut(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,n=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:r},this.emitter.emit("scroll",{deltaX:n,deltaY:r,event:s})});ut(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});ut(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:n}=s;const r=kx(n,this.window.width),a=kx(n,this.window.height);e*=r,t*=a,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});ut(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,co),this.element.addEventListener("touchstart",this.onTouchStart,co),this.element.addEventListener("touchmove",this.onTouchMove,co),this.element.addEventListener("touchend",this.onTouchEnd,co)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,co),this.element.removeEventListener("touchstart",this.onTouchStart,co),this.element.removeEventListener("touchmove",this.onTouchMove,co),this.element.removeEventListener("touchend",this.onTouchEnd,co)}};const Bx=s=>Math.min(1,1.001-2**(-10*s));var FT=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:n=!0,syncTouch:r=!1,syncTouchLerp:a=.075,touchInertiaExponent:u=1.7,duration:c,easing:d,lerp:h=.1,infinite:p=!1,orientation:v="vertical",gestureOrientation:m=v==="horizontal"?"both":"vertical",touchMultiplier:_=1,wheelMultiplier:M=1,autoResize:E=!0,prevent:x,virtualScroll:y,overscroll:b=!0,autoRaf:L=!1,anchors:T=!1,autoToggle:R=!1,allowNestedScroll:D=!1,__experimental__naiveDimensions:P=!1,naiveDimensions:w=P,stopInertiaOnNavigate:N=!1}={}){ut(this,"_isScrolling",!1);ut(this,"_isStopped",!1);ut(this,"_isLocked",!1);ut(this,"_preventNextNativeScrollEvent",!1);ut(this,"_resetVelocityTimeout",null);ut(this,"_rafId",null);ut(this,"_isDraggingSelection",!1);ut(this,"isTouching");ut(this,"isIos");ut(this,"time",0);ut(this,"userData",{});ut(this,"lastVelocity",0);ut(this,"velocity",0);ut(this,"direction",0);ut(this,"options");ut(this,"targetScroll");ut(this,"animatedScroll");ut(this,"animate",new DT);ut(this,"emitter",new fM);ut(this,"dimensions");ut(this,"virtualScroll");ut(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});ut(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ut(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});ut(this,"onClick",s=>{const e=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(n){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,a=decodeURIComponent(n.hash);this.scrollTo(a,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});ut(this,"onPointerDown",s=>{s.button===1&&this.reset()});ut(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const r=n.type.includes("touch"),a=n.type.includes("wheel");if(r&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&r&&n.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const c=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||c)return;let d=n.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const h=this.options.prevent,p=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(d.find(M=>{var E,x,y,b,L;return M instanceof HTMLElement&&(typeof h=="function"&&(h==null?void 0:h(M))||((E=M.hasAttribute)==null?void 0:E.call(M,"data-lenis-prevent"))||p==="vertical"&&((x=M.hasAttribute)==null?void 0:x.call(M,"data-lenis-prevent-vertical"))||p==="horizontal"&&((y=M.hasAttribute)==null?void 0:y.call(M,"data-lenis-prevent-horizontal"))||r&&((b=M.hasAttribute)==null?void 0:b.call(M,"data-lenis-prevent-touch"))||a&&((L=M.hasAttribute)==null?void 0:L.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&a)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let v=t;this.options.gestureOrientation==="both"?v=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(v=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const m=r&&this.options.syncTouch,_=r&&n.type==="touchend";_&&(v=Math.sign(v)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ut(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ut(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Ox,window.lenis||(window.lenis={}),window.lenis.version=Ox,v==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof c=="number"&&typeof d!="function"?d=Bx:typeof d=="function"&&typeof c!="number"&&(c=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:n,syncTouch:r,syncTouchLerp:a,touchInertiaExponent:u,duration:c,easing:d,lerp:h,infinite:p,gestureOrientation:m,orientation:v,touchMultiplier:_,wheelMultiplier:M,autoResize:E,prevent:x,virtualScroll:y,overscroll:b,autoRaf:L,anchors:T,autoToggle:R,allowNestedScroll:D,naiveDimensions:w,stopInertiaOnNavigate:N},this.dimensions=new NT(s,e,{autoResize:E}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new UT(t,{touchMultiplier:_,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const r=n[0],a=n[n.length-1],u=40,c=Math.hypot(t.clientX-r.left,t.clientY-r.top)<=u,d=Math.hypot(t.clientX-a.right,t.clientY-a.bottom)<=u;return c||d}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:r=!0,lerp:a=r?this.options.lerp:void 0,duration:u=r?this.options.duration:void 0,easing:c=r?this.options.easing:void 0,onStart:d,onComplete:h,force:p=!1,userData:v}={}){if((this.isStopped||this.isLocked)&&!p)return;let m=s,_=e;if(typeof m=="string"&&["top","left","start","#"].includes(m))m=0;else if(typeof m=="string"&&["bottom","right","end"].includes(m))m=this.limit;else{let M=null;if(typeof m=="string"?(M=m.startsWith("#")?document.getElementById(m.slice(1)):document.querySelector(m),M||(m==="#top"?m=0:console.warn("Lenis: Target not found",m))):m instanceof HTMLElement&&(m!=null&&m.nodeType)&&(M=m),M){if(this.options.wrapper!==window){const T=this.rootElement.getBoundingClientRect();_-=this.isHorizontal?T.left:T.top}const E=M.getBoundingClientRect(),x=getComputedStyle(M),y=this.isHorizontal?Number.parseFloat(x.scrollMarginLeft):Number.parseFloat(x.scrollMarginTop),b=getComputedStyle(this.rootElement),L=this.isHorizontal?Number.parseFloat(b.scrollPaddingLeft):Number.parseFloat(b.scrollPaddingTop);m=(this.isHorizontal?E.left:E.top)+this.animatedScroll-(Number.isNaN(y)?0:y)-(Number.isNaN(L)?0:L)}}if(typeof m=="number"){if(m+=_,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const M=m-this.animatedScroll;M>this.limit/2?m-=this.limit:M<-this.limit/2&&(m+=this.limit)}}else m=cM(0,m,this.limit);if(m===this.targetScroll){d==null||d(this),h==null||h(this);return}if(this.userData=v??{},t){this.animatedScroll=this.targetScroll=m,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=m),typeof u=="number"&&typeof c!="function"?c=Bx:typeof c=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,m,{duration:u,easing:c,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",d==null||d(this)},onUpdate:(M,E)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),r&&(this.targetScroll=M),E||this.emit(),E&&(this.reset(),this.emit(),h==null||h(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const n=Date.now();s._lenis||(s._lenis={});const r=s._lenis;let a,u,c,d,h,p,v,m,_,M;if(n-(r.time??0)>2e3){r.time=Date.now();const D=window.getComputedStyle(s);if(r.computedStyle=D,a=["auto","overlay","scroll"].includes(D.overflowX),u=["auto","overlay","scroll"].includes(D.overflowY),h=["auto"].includes(D.overscrollBehaviorX),p=["auto"].includes(D.overscrollBehaviorY),r.hasOverflowX=a,r.hasOverflowY=u,!(a||u))return!1;v=s.scrollWidth,m=s.scrollHeight,_=s.clientWidth,M=s.clientHeight,c=v>_,d=m>M,r.isScrollableX=c,r.isScrollableY=d,r.scrollWidth=v,r.scrollHeight=m,r.clientWidth=_,r.clientHeight=M,r.hasOverscrollBehaviorX=h,r.hasOverscrollBehaviorY=p}else c=r.isScrollableX,d=r.isScrollableY,a=r.hasOverflowX,u=r.hasOverflowY,v=r.scrollWidth,m=r.scrollHeight,_=r.clientWidth,M=r.clientHeight,h=r.hasOverscrollBehaviorX,p=r.hasOverscrollBehaviorY;if(!(a&&c||u&&d))return!1;const E=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let x,y,b,L,T,R;if(E==="horizontal")x=Math.round(s.scrollLeft),y=v-_,b=e,L=a,T=c,R=h;else if(E==="vertical")x=Math.round(s.scrollTop),y=m-M,b=t,L=u,T=d,R=p;else return!1;return!R&&(x>=y||x<=0)?!0:(b>0?x<y:x>0)&&L&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?PT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};const No="https://dreambodxfitness.com",OT=[{id:"cardio",kicker:"01 — Burn",title:"Cardio & Weight Loss Equipment",blurb:"Studio-quality cardio at home. Machines built to torch calories without the membership, the commute, or the wait for a bike.",accent:"#c8ff2d",products:[{name:"Smart Magnetic Indoor Cycling Bike",review:"Whisper-quiet even at 5 a.m. — rides like a studio bike at a fraction of the price.",price:415,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/717y3TwoLXL.jpg",handle:"sunny-health-fitness-smart-magnetic-indoor-cycling-bike-stationary-exercise-cardio-equipment-free-sunnyfit-training-app",blurb:"Whisper-quiet belt drive. Ride-studio smooth, living-room sized."},{name:"Waver Vibration Plate",review:"Ten minutes on this and your legs know about it. The circulation boost is real.",price:315,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71VaXGNl5pL.jpg",handle:"lifepro-waver-vibration-plate-exercise-machine-high-intensity-vibration-plate-for-lymphatic-drainage-full-body-workout-vibrating-platform-with-loop-bands-fitness-equipment-for-strength-toning",blurb:"More muscle activation in less time — stand, squat, stretch."},{name:"Curved Vibration Plate Machine",review:"Sturdier than expected and easy on the knees — it became a daily habit fast.",price:115,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71zq9-fqQ9L.jpg",handle:"vibration-plate-exercise-machine-curved-vibration-plate-for-lymphatic-drainage-weight-loss-400-lbs-capacity-shake-platform-with-250-speeds-full-body-workout-equipment-for-home-women-men",blurb:"10 minutes a day. Zero joint stress. 400 lb capacity."}]},{id:"programs",kicker:"02 — Learn",title:"Weight Loss Programs & eBooks",blurb:"Digital guides written for real results — nutrition, training, and the science of keeping the weight off.",accent:"#ff5c2d",products:[{name:"The Complete GLP-1 & Ozempic Weight Loss Guide",price:39.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/FullSizeRender_2e6d6c38-9956-402e-8d9c-147c296bee91.jpg",handle:"the-complete-glp-1-ozempic-weight-loss-guide-exercise-nutrition-muscle-preservation-program-digital-pdf",checkoutVariant:48819711115479,blurb:"Exercise, nutrition & muscle preservation on GLP-1 medications. Digital PDF."},{name:"Healthy Grilled Chicken Cookbook",price:9.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/710rQJbxdyL_faae2280-93c1-4ddd-912a-579032bba26a.jpg",handle:"healthy-grilled-chicken-cookbook-for-weight-loss-high-protein-recipe-ebook",checkoutVariant:48816243540183,blurb:"High-protein recipes that make losing weight taste good. eBook."}]},{id:"mens",kicker:"03 — Train",title:"Men's Activewear",blurb:"Compression, quick-dry, sauna-heat — gear engineered to work as hard as you do.",accent:"#2da8ff",products:[{name:"Men's Compression Tank Tops — 5-Pack",review:"Snug without squeezing, dries fast — five solid shirts for the price of one elsewhere.",price:35,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/61BAbRy-v3L_0d528953-1ee4-47ee-9ca5-2e89fde59ed6.jpg",handle:"telaleo-5-pack-mens-athletic-compression-shirts-sleeveless-workout-tank-top-sports-base-layer-running-basketball",blurb:"Sweat-wicking base layers that hug muscle and stay dry."},{name:"Men's Athletic Running Shorts",review:"Pockets that actually hold a phone, and they're dry before the cooldown ends.",price:36,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/61EoCDx9l4L._AC_SL1500_3d2b3a99-5e8a-4cd0-a99f-f75584a9e387.jpg",handle:"northyard-mens-athletic-running-shorts-gym-workout-7-9-5-quick-dry-lightweight-sports-basketball-tennis-3-zipper-pockets",blurb:"Quick-dry, lightweight, three zipper pockets."},{name:"Men's 2-in-1 Running Pants",review:"The compression liner stays put — no ride-up, even on long runs.",price:19.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/510RYuMn73L.jpg",handle:"aolesy-mens-2-in-1-running-pants-gym-workout-compression-pants-for-men-training-athletic",blurb:"Compression layer inside, freedom outside."},{name:"Men's Sauna Sweat Shirt",review:"Sweat like a sauna session without the sauna. Wash, wear, repeat.",price:17.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71XsmZUE9uL.jpg",handle:"remebsweat-sauna-sweat-suits-shirt-for-men-sweat-suit-compression-t-shirt-workout-sports-shapewear-gym-exercise-jacket",blurb:"Traps heat to turn every session up a degree."}]},{id:"womens",kicker:"04 — Move",title:"Women's Activewear",blurb:"Squat-proof, buttery-soft, built to move — the pieces you reach for every gym day.",accent:"#ff2d8f",products:[{name:"Women's High-Waisted Workout Shorts — 4-Pack",review:"Squat-proof with a waistband that never rolls — worth buying a second set.",price:42,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71rC4NZOhjL.jpg",handle:"chrleisure-workout-shorts-sets-for-women-high-waisted-gym-butt-lifting-scrunch-butt-seamless-shorts",blurb:"Seamless, butt-lifting, holds everything in place."},{name:"Women's High-Waisted Leggings with Pockets",review:"The softest leggings in the drawer, and the pockets genuinely fit a phone.",price:16.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/51v6_86Lx5L_99f9cac3-089e-4596-9400-2f4ee066ea72.jpg",handle:"sinophant-high-waisted-leggings-with-pockets-women-full-length-capri-buttery-soft-stretchy-yoga-pants",blurb:"Buttery-soft with real side pockets. Live in them."},{name:"Scrunch Butt-Lifting Leggings",review:"Lifts where it should and stays fully opaque in every position.",price:25,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/612h-apGvxL._AC_SL1500.jpg",handle:"ieumaz-scrunch-butt-lifting-leggings-for-women-gym-seamless-workout-leggings-mid-low-waist-tummy-control-yoga-pants",blurb:"Sculpts curves, stays opaque through every squat."},{name:"Women's Weighted Vest",review:"Snug with zero bounce on runs — turns an ordinary walk into a workout.",price:46.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71CClo5DU3L_7cc14c84-c676-4bd4-b945-5514bde4019b.jpg",handle:"fuff-weighted-vest-woman-5-10-12-15-20-25-30-lb-womens-weight-vest-for-walking-strength-training-weight-vests-for-female-men-reflective-stripe-body-vest-for-workout-running-jogging-fitness",blurb:"Reflective, adjustable resistance for runs and walks."}]},{id:"shape",kicker:"05 — Sculpt",title:"Waist Trainers & Shapewear",blurb:"Instant shape, everyday support — smooth lines under clothes, extra sweat in the gym.",accent:"#b02dff",products:[{name:"Waist Trainer Trimmer Belt",review:"All-day back support and a noticeably smoother line under clothes.",price:45,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/61VjJUXHjLS_650a5987-1db9-466d-8ff2-3c2d27f049c4.jpg",handle:"feelingirl-waist-trainer-belt-waist-cincher-trimmer-ab-belt-tummy-control-body-shaper-with-triple-wrap-women-and-men",blurb:"Tummy control and lower-back support, all day."},{name:"Waist Trainer Corset with Zipper",review:"Zips on easily and cinches without pinching — comfortable enough to forget.",price:26.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71Axbxk3PiL.jpg",handle:"nebility-waist-trainer-for-women-corset-shapewear-with-zipper-womens-waist-cincher-tank-top-with-adjustable-straps",blurb:"Zip-front cinch with adjustable straps."},{name:"Deadlift & Weightlifting Shoes",review:"Like lifting barefoot but grippier — the ground contact on deadlifts is unreal.",price:45,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/71DmtXOxbYL.jpg",handle:"manueklear-deadlift-shoes-weight-lifting-shoes-for-men-women-weightlifting-squat-shoes-fitness-cross-trainer-barefoot-gym-training-sneakers",blurb:"Flat, hard-soled base to lift heavier from the ground up."}]}],Wi="https://cdn.shopify.com/s/files/1/0826/8860/6423/collections",kT=[{title:"DreamBodX Gear",handle:"dreambodx-gear",count:20,image:`${Wi}/06A78109-0E0E-4887-987C-82FEED7B1247.jpg?v=1780436234`},{title:"DreamBodX Gym",handle:"dreambodx-gym",count:26,image:`${Wi}/11E777E0-DA83-4D0C-969B-262306C7F336.jpg?v=1780436361`},{title:"DreamBodX Accessories",handle:"dreambodx-accessories",count:6,image:`${Wi}/FA5ACB3D-8376-4BF3-9A6E-18F8444D2C0D.jpg?v=1780436429`},{title:"Cardio & Weight Loss Equipment",handle:"cardio-weight-loss-equipment",count:7,image:`${Wi}/BE9ACF9C-E5F2-4AB1-B458-E943B776699D.jpg?v=1783203221`},{title:"Strength & Home Gym Equipment",handle:"strength-home-gym-equipment",count:11,image:`${Wi}/CED9EAF5-8010-4583-8A2D-C0ABD624EA3B.jpg?v=1783203222`},{title:"Resistance Bands & Accessories",handle:"resistance-bands-workout-accessories",count:10,image:`${Wi}/ECB27A04-0971-4E0B-824A-DA1BD1859918.jpg?v=1783203224`},{title:"Activewear & Training Apparel",handle:"activewear-training-apparel",count:9,image:`${Wi}/E645155C-12FB-4CC3-85A7-5CD4274419F7.jpg?v=1783203226`},{title:"Women's Activewear",handle:"womens-activewear",count:5,image:`${Wi}/DB3E23AD-BC0B-4222-83E9-5827313CF0CB.jpg?v=1783203205`},{title:"Men's Activewear",handle:"mens-activewear",count:7,image:`${Wi}/B067776E-A34D-40B5-BCEC-1235E2DD6707.jpg?v=1783203206`},{title:"Athletic Shoes & Footwear",handle:"athletic-shoes-footwear",count:5,image:`${Wi}/E8873B2B-4ADF-4C35-8CCD-FB4559486FD8.jpg?v=1783203208`},{title:"Waist Trainers & Shapewear",handle:"waist-trainers-shapewear",count:5,image:`${Wi}/25F31DC7-2A84-4ED1-9693-84524C65C37E.jpg?v=1783203238`},{title:"Water Bottles & Shakers",handle:"water-bottles-shakers",count:6,image:`${Wi}/E668FD94-6DF8-403D-9F5F-3EB0FF2B8468.jpg?v=1783203240`},{title:"Shop Weight Loss",handle:"shop-weight-loss",count:5,image:`${Wi}/32576542-B5EF-4A88-AF65-44477DAE2EFC.jpg?v=1783203211`},{title:"Workout Plans & eBooks",handle:"workout-plans-ebooks",count:10,image:`${Wi}/D66A219D-B0EC-440D-A0A5-DC5920F8CCDB.jpg?v=1783203242`}],BT=[{id:"glp1-ozempic-guide",title:"The Complete GLP-1 & Ozempic Weight Loss Guide",tag:"Weight Loss",badge:"Bestseller",price:39.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/FullSizeRender_2e6d6c38-9956-402e-8d9c-147c296bee91.jpg?v=1782499100",handle:"the-complete-glp-1-ozempic-weight-loss-guide-exercise-nutrition-muscle-preservation-program-digital-pdf",checkoutVariant:48819711115479,blurb:"Maximize your results on Ozempic®, Wegovy®, and Mounjaro®. Exercise, nutrition, and muscle-preservation strategies for every stage of GLP-1 treatment.",bullets:["Muscle-preservation protocol","GLP-1 nutrition framework","Instant PDF download"],rating:4.9,reviewCount:312,review:"Finally answered every question my doctor didn't have time for. Kept my muscle while the weight came off.",reviewer:"Danielle R."},{id:"semaglutide-diabetes-guide",title:"The Ultimate Semaglutide Nutrition Guide for Type 2 Diabetes",tag:"Weight Loss",badge:null,price:39.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/b662542c577c41d1b7bb27b7e8e07680.thumbnail.0000000000.jpg?v=1782451979",handle:"the-ultimate-semaglutide-nutrition-guide-for-type-2-diabetes-complete-ozempic-glp-1-meal-plan-ebook-digital-pdf",checkoutVariant:48819611926743,blurb:"A complete Ozempic® & GLP-1 meal plan built for managing type 2 diabetes while getting the most from your medication.",bullets:["Blood-sugar-friendly meals","Complete GLP-1 meal plan","Instant PDF download"],rating:4.8,reviewCount:176,review:"The meal plans made my numbers steadier than they've been in years. Clear, practical, no fluff.",reviewer:"Marcus T."},{id:"postpartum-recovery",title:"The Ultimate Postpartum Recovery Program",tag:"Weight Loss",badge:"New",price:45,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/ac25746b298849d384637a1324ad1ab3.thumbnail.0000000000.jpg?v=1782919326",handle:"the-ultimate-postpartum-recovery-program-safe-weight-loss-after-baby-ebook",checkoutVariant:48993417003223,blurb:"Heal first, rebuild strong, lose weight safely after baby. A science-backed fourth-trimester reset with workouts and meal plans for new moms.",bullets:["Safe post-baby workouts","Recovery meal plan","Instant PDF download"],rating:4.9,reviewCount:98,review:"Gentle, safe, and it actually respected my recovery. Wish I'd had this after my first baby.",reviewer:"Priya S."},{id:"30-day-reset",title:"The 30-Day Reset — Fat Loss Meal Plan & Home Workout",tag:"Weight Loss",badge:null,price:19.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/IMG_8954_2ae69dd4-867f-47dd-994e-97f36f4469e0.jpg?v=1781293582",handle:"30-day-reset-fat-loss-meal-plan-home-workout-ebook",checkoutVariant:48816184361175,blurb:"Lose fat without crash dieting. A science-backed 32-page plan that builds habits that actually last — meals and home workouts included.",bullets:["30-day meal plan","No-equipment home workouts","32-page PDF"],rating:4.7,reviewCount:264,review:"Down 9 lbs in the first month and I never felt like I was starving. The habits stuck.",reviewer:"Jenna M."},{id:"get-ripped-at-home",title:"Get Ripped At Home — 8-Week Bodyweight Program",tag:"Build Muscle",badge:null,price:14.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/ed35f28d373947daa6131cb595267a12.thumbnail.0000000000.jpg?v=1781850278",handle:"get-ripped-at-home-8-week-bodyweight-muscle-building-program-no-gym-home-workout-ebook-digital-pdf",checkoutVariant:48816418095319,blurb:"Build muscle and burn fat without ever stepping into a gym. A premium 8-week bodyweight training program you can do anywhere.",bullets:["8-week training split","Zero equipment needed","Instant PDF download"],rating:4.8,reviewCount:341,review:"No gym, no excuses. Eight weeks in and my shirts fit completely differently.",reviewer:"Andre W."},{id:"ultimate-chest-blueprint",title:"Ultimate Chest Blueprint — Science-Based Chest Growth",tag:"Build Muscle",badge:null,price:14.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/525099ca1da541d491f4d56624b24585.thumbnail.0000000000.jpg?v=1782461697",handle:"ultimate-chest-blueprint-science-based-chest-growth-program-build-a-bigger-chest-fast-digital-pdf",checkoutVariant:48816455286999,blurb:"Stop wasting years on random chest workouts. A proven, science-based program to build a bigger, fuller, stronger chest fast.",bullets:["Science-based programming","Progressive overload plan","Instant PDF download"],rating:4.7,reviewCount:152,review:"First program that actually grew my upper chest. The progression scheme is gold.",reviewer:"Tyler B."},{id:"bigger-arms",title:"How to Build Bigger Arms — 8-Week Growth Program",tag:"Build Muscle",badge:null,price:9.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/b15afa9a0ced4582adf67452d71398cd.thumbnail.0000000000.jpg?v=1782451979",handle:"how-to-build-bigger-arms-8-week-biceps-triceps-forearm-growth-program",checkoutVariant:48816435495127,blurb:"A science-based arm specialization program to maximize biceps, triceps, and forearm growth in just 8 weeks.",bullets:["Biceps, triceps & forearms","8-week specialization","Instant PDF download"],rating:4.6,reviewCount:129,review:"Added a solid half-inch on my arms. Simple to follow and worth way more than the price.",reviewer:"Chris L."},{id:"grilled-chicken-cookbook",title:"Healthy Grilled Chicken Cookbook",tag:"Nutrition",badge:"Under $10",price:9.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/710rQJbxdyL_faae2280-93c1-4ddd-912a-579032bba26a.jpg?v=1782457367",handle:"healthy-grilled-chicken-cookbook-for-weight-loss-high-protein-recipe-ebook",checkoutVariant:48816243540183,blurb:"Lose weight without giving up flavor. High-protein grilled chicken recipes that make lean eating genuinely delicious.",bullets:["High-protein recipes","Weight-loss friendly","Instant PDF download"],rating:4.9,reviewCount:287,review:"Meal prep stopped being boring. Every recipe has been a repeat in our house.",reviewer:"Sofia G."},{id:"couples-workout-challenge",title:"Couples Workout Challenge — Home Plan for Two",tag:"Home Workout",badge:null,price:14.99,image:"https://cdn.shopify.com/s/files/1/0826/8860/6423/files/preview_images/85ae6e44814b4d528db9eb5c9d3734c7.thumbnail.0000000000.jpg?v=1780482336",handle:"couples-workout-challenge-home-plan-for-two-ebook",checkoutVariant:48708518183127,blurb:"Get fit together, right at home. A complete home workout guide built for two — no equipment, no gym, no experience required.",bullets:["Workouts for two","No equipment needed","Instant PDF download"],rating:4.8,reviewCount:143,review:"A fun way for us to stay accountable together. We actually look forward to workout nights now.",reviewer:"Ray & Nia"}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const o_="185",zT=0,zx=1,VT=2,ud=1,HT=2,ku=3,Io=0,Ji=1,Is=2,ks=0,Tl=1,zm=2,Vx=3,Hx=4,GT=5,oa=100,WT=101,XT=102,YT=103,qT=104,$T=200,KT=201,jT=202,ZT=203,Vm=204,Hm=205,QT=206,JT=207,eA=208,tA=209,nA=210,iA=211,rA=212,sA=213,oA=214,Gm=0,Wm=1,Xm=2,Il=3,Ym=4,qm=5,$m=6,Km=7,dM=0,aA=1,lA=2,ds=0,hM=1,pM=2,mM=3,gM=4,_M=5,vM=6,xM=7,yM=300,Ea=301,Ul=302,Up=303,Fp=304,Fd=306,jm=1e3,Fs=1001,Zm=1002,li=1003,uA=1004,Pf=1005,Ei=1006,Op=1007,ca=1008,pr=1009,SM=1010,MM=1011,lc=1012,a_=1013,ms=1014,us=1015,Hs=1016,l_=1017,u_=1018,uc=1020,EM=35902,wM=35899,TM=1021,AM=1022,$r=1023,Gs=1026,fa=1027,bM=1028,c_=1029,wa=1030,f_=1031,d_=1033,cd=33776,fd=33777,dd=33778,hd=33779,Qm=35840,Jm=35841,eg=35842,tg=35843,ng=36196,ig=37492,rg=37496,sg=37488,og=37489,Ad=37490,ag=37491,lg=37808,ug=37809,cg=37810,fg=37811,dg=37812,hg=37813,pg=37814,mg=37815,gg=37816,_g=37817,vg=37818,xg=37819,yg=37820,Sg=37821,Mg=36492,Eg=36494,wg=36495,Tg=36283,Ag=36284,bd=36285,bg=36286,cA=3200,Cg=0,fA=1,xo="",Rr="srgb",Cd="srgb-linear",Rd="linear",nn="srgb",Ja=7680,Gx=519,dA=512,hA=513,pA=514,h_=515,mA=516,gA=517,p_=518,_A=519,Wx=35044,Xx="300 es",cs=2e3,cc=2001;function vA(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Pd(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xA(){const s=Pd("canvas");return s.style.display="block",s}const Yx={};function qx(...s){const e="THREE."+s.shift();console.log(e,...s)}function CM(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=CM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Wt(...s){s=CM(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Al(...s){const e=s.join(" ");e in Yx||(Yx[e]=!0,vt(...s))}function yA(s,e,t){return new Promise(function(n,r){function a(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const SA={[Gm]:Wm,[Xm]:$m,[Ym]:Km,[Il]:qm,[Wm]:Gm,[$m]:Xm,[Km]:Ym,[qm]:Il};class Aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,u=r.length;a<u;a++)r[a].call(this,e);e.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kp=Math.PI/180,Rg=180/Math.PI;function hc(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_i[s&255]+_i[s>>8&255]+_i[s>>16&255]+_i[s>>24&255]+"-"+_i[e&255]+_i[e>>8&255]+"-"+_i[e>>16&15|64]+_i[e>>24&255]+"-"+_i[t&63|128]+_i[t>>8&255]+"-"+_i[t>>16&255]+_i[t>>24&255]+_i[n&255]+_i[n>>8&255]+_i[n>>16&255]+_i[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function MA(s,e){return(s%e+e)%e}function Bp(s,e,t){return(1-t)*s+t*e}function Eu(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const w_=class w_{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*n-u*r+e.x,this.y=a*r+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};w_.prototype.isVector2=!0;let zt=w_;class Bl{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,u,c){let d=n[r+0],h=n[r+1],p=n[r+2],v=n[r+3],m=a[u+0],_=a[u+1],M=a[u+2],E=a[u+3];if(v!==E||d!==m||h!==_||p!==M){let x=d*m+h*_+p*M+v*E;x<0&&(m=-m,_=-_,M=-M,E=-E,x=-x);let y=1-c;if(x<.9995){const b=Math.acos(x),L=Math.sin(b);y=Math.sin(y*b)/L,c=Math.sin(c*b)/L,d=d*y+m*c,h=h*y+_*c,p=p*y+M*c,v=v*y+E*c}else{d=d*y+m*c,h=h*y+_*c,p=p*y+M*c,v=v*y+E*c;const b=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=b,h*=b,p*=b,v*=b}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,u){const c=n[r],d=n[r+1],h=n[r+2],p=n[r+3],v=a[u],m=a[u+1],_=a[u+2],M=a[u+3];return e[t]=c*M+p*v+d*_-h*m,e[t+1]=d*M+p*m+h*v-c*_,e[t+2]=h*M+p*_+c*m-d*v,e[t+3]=p*M-c*v-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(n/2),p=c(r/2),v=c(a/2),m=d(n/2),_=d(r/2),M=d(a/2);switch(u){case"XYZ":this._x=m*p*v+h*_*M,this._y=h*_*v-m*p*M,this._z=h*p*M+m*_*v,this._w=h*p*v-m*_*M;break;case"YXZ":this._x=m*p*v+h*_*M,this._y=h*_*v-m*p*M,this._z=h*p*M-m*_*v,this._w=h*p*v+m*_*M;break;case"ZXY":this._x=m*p*v-h*_*M,this._y=h*_*v+m*p*M,this._z=h*p*M+m*_*v,this._w=h*p*v-m*_*M;break;case"ZYX":this._x=m*p*v-h*_*M,this._y=h*_*v+m*p*M,this._z=h*p*M-m*_*v,this._w=h*p*v+m*_*M;break;case"YZX":this._x=m*p*v+h*_*M,this._y=h*_*v+m*p*M,this._z=h*p*M-m*_*v,this._w=h*p*v-m*_*M;break;case"XZY":this._x=m*p*v-h*_*M,this._y=h*_*v-m*p*M,this._z=h*p*M+m*_*v,this._w=h*p*v+m*_*M;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],v=t[10],m=n+c+v;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(u-r)*_}else if(n>c&&n>v){const _=2*Math.sqrt(1+n-c-v);this._w=(p-d)/_,this._x=.25*_,this._y=(r+u)/_,this._z=(a+h)/_}else if(c>v){const _=2*Math.sqrt(1+c-n-v);this._w=(a-h)/_,this._x=(r+u)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-n-c);this._w=(u-r)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=n*p+u*c+r*h-a*d,this._y=r*p+u*d+a*c-n*h,this._z=a*p+u*h+n*d-r*c,this._w=u*p-n*c-r*d-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,u=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+n*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const T_=class T_{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($x.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($x.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,u=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*u,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*u,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*r-c*n),p=2*(c*t-a*r),v=2*(a*n-u*t);return this.x=t+d*h+u*v-c*p,this.y=n+d*p+c*h-a*v,this.z=r+d*v+a*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,u=t.x,c=t.y,d=t.z;return this.x=r*d-a*c,this.y=a*u-n*d,this.z=n*c-r*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zp.copy(this).projectOnVector(e),this.sub(zp)}reflect(e){return this.sub(zp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};T_.prototype.isVector3=!0;let ie=T_;const zp=new ie,$x=new Bl,A_=class A_{constructor(e,t,n,r,a,u,c,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h)}set(e,t,n,r,a,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=r,p[2]=c,p[3]=t,p[4]=a,p[5]=d,p[6]=n,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[3],d=n[6],h=n[1],p=n[4],v=n[7],m=n[2],_=n[5],M=n[8],E=r[0],x=r[3],y=r[6],b=r[1],L=r[4],T=r[7],R=r[2],D=r[5],P=r[8];return a[0]=u*E+c*b+d*R,a[3]=u*x+c*L+d*D,a[6]=u*y+c*T+d*P,a[1]=h*E+p*b+v*R,a[4]=h*x+p*L+v*D,a[7]=h*y+p*T+v*P,a[2]=m*E+_*b+M*R,a[5]=m*x+_*L+M*D,a[8]=m*y+_*T+M*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-n*a*p+n*c*d+r*a*h-r*u*d}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=p*u-c*h,m=c*d-p*a,_=h*a-u*d,M=t*v+n*m+r*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(r*h-p*n)*E,e[2]=(c*n-r*u)*E,e[3]=m*E,e[4]=(p*t-r*d)*E,e[5]=(r*a-c*t)*E,e[6]=_*E,e[7]=(n*d-h*t)*E,e[8]=(u*t-n*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,u,c){const d=Math.cos(a),h=Math.sin(a);return this.set(n*d,n*h,-n*(d*u+h*c)+u+e,-r*h,r*d,-r*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return Al("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vp.makeScale(e,t)),this}rotate(e){return Al("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vp.makeRotation(-e)),this}translate(e,t){return Al("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};A_.prototype.isMatrix3=!0;let Mt=A_;const Vp=new Mt,Kx=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jx=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function EA(){const s={enabled:!0,workingColorSpace:Cd,spaces:{},convert:function(r,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===nn&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===nn&&(r.r=bl(r.r),r.g=bl(r.g),r.b=bl(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xo?Rd:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,u){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cd]:{primaries:e,whitePoint:n,transfer:Rd,toXYZ:Kx,fromXYZ:jx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rr},outputColorSpaceConfig:{drawingBufferColorSpace:Rr}},[Rr]:{primaries:e,whitePoint:n,transfer:nn,toXYZ:Kx,fromXYZ:jx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rr}}}),s}const Ot=EA();function Bs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let el;class wA{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{el===void 0&&(el=Pd("canvas")),el.width=e.width,el.height=e.height;const r=el.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=el}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pd("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let u=0;u<a.length;u++)a[u]=Bs(a[u]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bs(t[n]/255)*255):t[n]=Bs(t[n]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TA=0;class m_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=hc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let u=0,c=r.length;u<c;u++)r[u].isDataTexture?a.push(Hp(r[u].image)):a.push(Hp(r[u]))}else a=Hp(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Hp(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?wA.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let AA=0;const Gp=new ie;class Ii extends Aa{constructor(e=Ii.DEFAULT_IMAGE,t=Ii.DEFAULT_MAPPING,n=Fs,r=Fs,a=Ei,u=ca,c=$r,d=pr,h=Ii.DEFAULT_ANISOTROPY,p=xo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=hc(),this.name="",this.source=new m_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gp).x}get height(){return this.source.getSize(Gp).y}get depth(){return this.source.getSize(Gp).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jm:e.x=e.x-Math.floor(e.x);break;case Fs:e.x=e.x<0?0:1;break;case Zm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jm:e.y=e.y-Math.floor(e.y);break;case Fs:e.y=e.y<0?0:1;break;case Zm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ii.DEFAULT_IMAGE=null;Ii.DEFAULT_MAPPING=yM;Ii.DEFAULT_ANISOTROPY=1;const b_=class b_{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*r+u[12]*a,this.y=u[1]*t+u[5]*n+u[9]*r+u[13]*a,this.z=u[2]*t+u[6]*n+u[10]*r+u[14]*a,this.w=u[3]*t+u[7]*n+u[11]*r+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const d=e.elements,h=d[0],p=d[4],v=d[8],m=d[1],_=d[5],M=d[9],E=d[2],x=d[6],y=d[10];if(Math.abs(p-m)<.01&&Math.abs(v-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(p+m)<.1&&Math.abs(v+E)<.1&&Math.abs(M+x)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,T=(_+1)/2,R=(y+1)/2,D=(p+m)/4,P=(v+E)/4,w=(M+x)/4;return L>T&&L>R?L<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(L),r=D/n,a=P/n):T>R?T<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(T),n=D/r,a=w/r):R<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),n=P/a,r=w/a),this.set(n,r,a,t),this}let b=Math.sqrt((x-M)*(x-M)+(v-E)*(v-E)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(x-M)/b,this.y=(v-E)/b,this.z=(m-p)/b,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};b_.prototype.isVector4=!0;let An=b_;class bA extends Aa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new An(0,0,e,t),this.scissorTest=!1,this.viewport=new An(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new Ii(r),u=n.count;for(let c=0;c<u;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new m_(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends bA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class RM extends Ii{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CA extends Ii{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=class Dd{constructor(e,t,n,r,a,u,c,d,h,p,v,m,_,M,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,u,c,d,h,p,v,m,_,M,E,x)}set(e,t,n,r,a,u,c,d,h,p,v,m,_,M,E,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=r,y[1]=a,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=v,y[14]=m,y[3]=_,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dd().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/tl.setFromMatrixColumn(e,0).length(),a=1/tl.setFromMatrixColumn(e,1).length(),u=1/tl.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,u=Math.cos(n),c=Math.sin(n),d=Math.cos(r),h=Math.sin(r),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=u*p,_=u*v,M=c*p,E=c*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=m-E*h,t[9]=-c*d,t[2]=E-m*h,t[6]=M+_*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*p,_=d*v,M=h*p,E=h*v;t[0]=m+E*c,t[4]=M*c-_,t[8]=u*h,t[1]=u*v,t[5]=u*p,t[9]=-c,t[2]=_*c-M,t[6]=E+m*c,t[10]=u*d}else if(e.order==="ZXY"){const m=d*p,_=d*v,M=h*p,E=h*v;t[0]=m-E*c,t[4]=-u*v,t[8]=M+_*c,t[1]=_+M*c,t[5]=u*p,t[9]=E-m*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const m=u*p,_=u*v,M=c*p,E=c*v;t[0]=d*p,t[4]=M*h-_,t[8]=m*h+E,t[1]=d*v,t[5]=E*h+m,t[9]=_*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,_=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=E-m*v,t[8]=M*v+_,t[1]=v,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=_*v+M,t[10]=m-E*v}else if(e.order==="XZY"){const m=u*d,_=u*h,M=c*d,E=c*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=m*v+E,t[5]=u*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=c*p,t[10]=E*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RA,e,PA)}lookAt(e,t,n){const r=this.elements;return sr.subVectors(e,t),sr.lengthSq()===0&&(sr.z=1),sr.normalize(),fo.crossVectors(n,sr),fo.lengthSq()===0&&(Math.abs(n.z)===1?sr.x+=1e-4:sr.z+=1e-4,sr.normalize(),fo.crossVectors(n,sr)),fo.normalize(),Df.crossVectors(sr,fo),r[0]=fo.x,r[4]=Df.x,r[8]=sr.x,r[1]=fo.y,r[5]=Df.y,r[9]=sr.y,r[2]=fo.z,r[6]=Df.z,r[10]=sr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,u=n[0],c=n[4],d=n[8],h=n[12],p=n[1],v=n[5],m=n[9],_=n[13],M=n[2],E=n[6],x=n[10],y=n[14],b=n[3],L=n[7],T=n[11],R=n[15],D=r[0],P=r[4],w=r[8],N=r[12],F=r[1],z=r[5],B=r[9],Q=r[13],ee=r[2],Y=r[6],J=r[10],H=r[14],G=r[3],te=r[7],U=r[11],k=r[15];return a[0]=u*D+c*F+d*ee+h*G,a[4]=u*P+c*z+d*Y+h*te,a[8]=u*w+c*B+d*J+h*U,a[12]=u*N+c*Q+d*H+h*k,a[1]=p*D+v*F+m*ee+_*G,a[5]=p*P+v*z+m*Y+_*te,a[9]=p*w+v*B+m*J+_*U,a[13]=p*N+v*Q+m*H+_*k,a[2]=M*D+E*F+x*ee+y*G,a[6]=M*P+E*z+x*Y+y*te,a[10]=M*w+E*B+x*J+y*U,a[14]=M*N+E*Q+x*H+y*k,a[3]=b*D+L*F+T*ee+R*G,a[7]=b*P+L*z+T*Y+R*te,a[11]=b*w+L*B+T*J+R*U,a[15]=b*N+L*Q+T*H+R*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],v=e[6],m=e[10],_=e[14],M=e[3],E=e[7],x=e[11],y=e[15],b=d*_-h*m,L=c*_-h*v,T=c*m-d*v,R=u*_-h*p,D=u*m-d*p,P=u*v-c*p;return t*(E*b-x*L+y*T)-n*(M*b-x*R+y*D)+r*(M*L-E*R+y*P)-a*(M*T-E*D+x*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],u=e[5],c=e[9],d=e[2],h=e[6],p=e[10];return t*(u*p-c*h)-n*(a*p-c*d)+r*(a*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],v=e[9],m=e[10],_=e[11],M=e[12],E=e[13],x=e[14],y=e[15],b=t*c-n*u,L=t*d-r*u,T=t*h-a*u,R=n*d-r*c,D=n*h-a*c,P=r*h-a*d,w=p*E-v*M,N=p*x-m*M,F=p*y-_*M,z=v*x-m*E,B=v*y-_*E,Q=m*y-_*x,ee=b*Q-L*B+T*z+R*F-D*N+P*w;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ee;return e[0]=(c*Q-d*B+h*z)*Y,e[1]=(r*B-n*Q-a*z)*Y,e[2]=(E*P-x*D+y*R)*Y,e[3]=(m*D-v*P-_*R)*Y,e[4]=(d*F-u*Q-h*N)*Y,e[5]=(t*Q-r*F+a*N)*Y,e[6]=(x*T-M*P-y*L)*Y,e[7]=(p*P-m*T+_*L)*Y,e[8]=(u*B-c*F+h*w)*Y,e[9]=(n*F-t*B-a*w)*Y,e[10]=(M*D-E*T+y*b)*Y,e[11]=(v*T-p*D-_*b)*Y,e[12]=(c*N-u*z-d*w)*Y,e[13]=(t*z-n*N+r*w)*Y,e[14]=(E*L-M*R-x*b)*Y,e[15]=(p*R-v*L+m*b)*Y,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,u=e.x,c=e.y,d=e.z,h=a*u,p=a*c;return this.set(h*u+n,h*c-r*d,h*d+r*c,0,h*c+r*d,p*c+n,p*d-r*u,0,h*d-r*c,p*d+r*u,a*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,u){return this.set(1,n,a,0,e,1,u,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,u=t._y,c=t._z,d=t._w,h=a+a,p=u+u,v=c+c,m=a*h,_=a*p,M=a*v,E=u*p,x=u*v,y=c*v,b=d*h,L=d*p,T=d*v,R=n.x,D=n.y,P=n.z;return r[0]=(1-(E+y))*R,r[1]=(_+T)*R,r[2]=(M-L)*R,r[3]=0,r[4]=(_-T)*D,r[5]=(1-(m+y))*D,r[6]=(x+b)*D,r[7]=0,r[8]=(M+L)*P,r[9]=(x-b)*P,r[10]=(1-(m+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let u=tl.set(r[0],r[1],r[2]).length();const c=tl.set(r[4],r[5],r[6]).length(),d=tl.set(r[8],r[9],r[10]).length();a<0&&(u=-u),Gr.copy(this);const h=1/u,p=1/c,v=1/d;return Gr.elements[0]*=h,Gr.elements[1]*=h,Gr.elements[2]*=h,Gr.elements[4]*=p,Gr.elements[5]*=p,Gr.elements[6]*=p,Gr.elements[8]*=v,Gr.elements[9]*=v,Gr.elements[10]*=v,t.setFromRotationMatrix(Gr),n.x=u,n.y=c,n.z=d,this}makePerspective(e,t,n,r,a,u,c=cs,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(n-r),m=(t+e)/(t-e),_=(n+r)/(n-r);let M,E;if(d)M=a/(u-a),E=u*a/(u-a);else if(c===cs)M=-(u+a)/(u-a),E=-2*u*a/(u-a);else if(c===cc)M=-u/(u-a),E=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,u,c=cs,d=!1){const h=this.elements,p=2/(t-e),v=2/(n-r),m=-(t+e)/(t-e),_=-(n+r)/(n-r);let M,E;if(d)M=1/(u-a),E=u/(u-a);else if(c===cs)M=-2/(u-a),E=-(u+a)/(u-a);else if(c===cc)M=-1/(u-a),E=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Dd.prototype.isMatrix4=!0;let bn=Dd;const tl=new ie,Gr=new bn,RA=new ie(0,0,0),PA=new ie(1,1,1),fo=new ie,Df=new ie,sr=new ie,Zx=new bn,Qx=new Bl;class Uo{constructor(e=0,t=0,n=0,r=Uo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],u=r[4],c=r[8],d=r[1],h=r[5],p=r[9],v=r[2],m=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-kt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qx.setFromEuler(this),this.setFromQuaternion(Qx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uo.DEFAULT_ORDER="XYZ";class PM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DA=0;const Jx=new ie,nl=new Bl,As=new bn,Lf=new ie,wu=new ie,LA=new ie,NA=new Bl,ey=new ie(1,0,0),ty=new ie(0,1,0),ny=new ie(0,0,1),iy={type:"added"},IA={type:"removed"},il={type:"childadded",child:null},Wp={type:"childremoved",child:null};class ci extends Aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DA++}),this.uuid=hc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const e=new ie,t=new Uo,n=new Bl,r=new ie(1,1,1);function a(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bn},normalMatrix:{value:new Mt}}),this.matrix=new bn,this.matrixWorld=new bn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new PM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nl.setFromAxisAngle(e,t),this.quaternion.multiply(nl),this}rotateOnWorldAxis(e,t){return nl.setFromAxisAngle(e,t),this.quaternion.premultiply(nl),this}rotateX(e){return this.rotateOnAxis(ey,e)}rotateY(e){return this.rotateOnAxis(ty,e)}rotateZ(e){return this.rotateOnAxis(ny,e)}translateOnAxis(e,t){return Jx.copy(e).applyQuaternion(this.quaternion),this.position.add(Jx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ey,e)}translateY(e){return this.translateOnAxis(ty,e)}translateZ(e){return this.translateOnAxis(ny,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lf.copy(e):Lf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(wu,Lf,this.up):As.lookAt(Lf,wu,this.up),this.quaternion.setFromRotationMatrix(As),r&&(As.extractRotation(r.matrixWorld),nl.setFromRotationMatrix(As),this.quaternion.premultiply(nl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iy),il.child=e,this.dispatchEvent(il),il.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IA),Wp.child=e,this.dispatchEvent(Wp),Wp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),As.multiply(e.parent.matrixWorld)),e.applyMatrix4(As),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iy),il.child=e,this.dispatchEvent(il),il.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,u=r.length;a<u;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wu,e,LA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wu,NA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let u=0,c=a.length;u<c;u++)a[u].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(a(e.materials,this.material[d]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];r.animations.push(a(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),v=u(e.shapes),m=u(e.skeletons),_=u(e.animations),M=u(e.nodes);c.length>0&&(n.geometries=c),d.length>0&&(n.materials=d),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),v.length>0&&(n.shapes=v),m.length>0&&(n.skeletons=m),_.length>0&&(n.animations=_),M.length>0&&(n.nodes=M)}return n.object=r,n;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ci.DEFAULT_UP=new ie(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class da extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UA={type:"move"};class Xp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const x=t.getJointPose(E,n),y=this._getHandJoint(h,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&m>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(UA)))}return c!==null&&(c.visible=r!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new da;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const DM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ho={h:0,s:0,l:0},Nf={h:0,s:0,l:0};function Yp(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ot.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ot.workingColorSpace){if(e=MA(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,u=2*n-a;this.r=Yp(u,a,e+1/3),this.g=Yp(u,a,e),this.b=Yp(u,a,e-1/3)}return Ot.colorSpaceToWorking(this,r),this}setStyle(e,t=Rr){function n(a){a!==void 0&&parseFloat(a)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=r[1],c=r[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rr){const n=DM[e.toLowerCase()];return n!==void 0?this.setHex(n,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=bl(e.r),this.g=bl(e.g),this.b=bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rr){return Ot.workingToColorSpace(vi.copy(this),e),Math.round(kt(vi.r*255,0,255))*65536+Math.round(kt(vi.g*255,0,255))*256+Math.round(kt(vi.b*255,0,255))}getHexString(e=Rr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(vi.copy(this),t);const n=vi.r,r=vi.g,a=vi.b,u=Math.max(n,r,a),c=Math.min(n,r,a);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const v=u-c;switch(h=p<=.5?v/(u+c):v/(2-u-c),u){case n:d=(r-a)/v+(r<a?6:0);break;case r:d=(a-n)/v+2;break;case a:d=(n-r)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=Rr){Ot.workingToColorSpace(vi.copy(this),e);const t=vi.r,n=vi.g,r=vi.b;return e!==Rr?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ho),this.setHSL(ho.h+e,ho.s+t,ho.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ho),e.getHSL(Nf);const n=Bp(ho.h,Nf.h,t),r=Bp(ho.s,Nf.s,t),a=Bp(ho.l,Nf.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new Ut;Ut.NAMES=DM;class g_{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ut(e),this.density=t}clone(){return new g_(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FA extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Uo,this.environmentIntensity=1,this.environmentRotation=new Uo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wr=new ie,bs=new ie,qp=new ie,Cs=new ie,rl=new ie,sl=new ie,ry=new ie,$p=new ie,Kp=new ie,jp=new ie,Zp=new An,Qp=new An,Jp=new An;class qr{constructor(e=new ie,t=new ie,n=new ie){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Wr.subVectors(e,t),r.cross(Wr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Wr.subVectors(r,t),bs.subVectors(n,t),qp.subVectors(e,t);const u=Wr.dot(Wr),c=Wr.dot(bs),d=Wr.dot(qp),h=bs.dot(bs),p=bs.dot(qp),v=u*h-c*c;if(v===0)return a.set(0,0,0),null;const m=1/v,_=(h*d-c*p)*m,M=(u*p-c*d)*m;return a.set(1-_-M,M,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cs)===null?!1:Cs.x>=0&&Cs.y>=0&&Cs.x+Cs.y<=1}static getInterpolation(e,t,n,r,a,u,c,d){return this.getBarycoord(e,t,n,r,Cs)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,Cs.x),d.addScaledVector(u,Cs.y),d.addScaledVector(c,Cs.z),d)}static getInterpolatedAttribute(e,t,n,r,a,u){return Zp.setScalar(0),Qp.setScalar(0),Jp.setScalar(0),Zp.fromBufferAttribute(e,t),Qp.fromBufferAttribute(e,n),Jp.fromBufferAttribute(e,r),u.setScalar(0),u.addScaledVector(Zp,a.x),u.addScaledVector(Qp,a.y),u.addScaledVector(Jp,a.z),u}static isFrontFacing(e,t,n,r){return Wr.subVectors(n,t),bs.subVectors(e,t),Wr.cross(bs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wr.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Wr.cross(bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return qr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return qr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let u,c;rl.subVectors(r,n),sl.subVectors(a,n),$p.subVectors(e,n);const d=rl.dot($p),h=sl.dot($p);if(d<=0&&h<=0)return t.copy(n);Kp.subVectors(e,r);const p=rl.dot(Kp),v=sl.dot(Kp);if(p>=0&&v<=p)return t.copy(r);const m=d*v-p*h;if(m<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(n).addScaledVector(rl,u);jp.subVectors(e,a);const _=rl.dot(jp),M=sl.dot(jp);if(M>=0&&_<=M)return t.copy(a);const E=_*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(n).addScaledVector(sl,c);const x=p*M-_*v;if(x<=0&&v-p>=0&&_-M>=0)return ry.subVectors(a,r),c=(v-p)/(v-p+(_-M)),t.copy(r).addScaledVector(ry,c);const y=1/(x+E+m);return u=E*y,c=m*y,t.copy(n).addScaledVector(rl,u).addScaledVector(sl,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class pc{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=a.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Xr):Xr.fromBufferAttribute(a,u),Xr.applyMatrix4(e.matrixWorld),this.expandByPoint(Xr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),If.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),If.copy(n.boundingBox)),If.applyMatrix4(e.matrixWorld),this.union(If)}const r=e.children;for(let a=0,u=r.length;a<u;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xr),Xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tu),Uf.subVectors(this.max,Tu),ol.subVectors(e.a,Tu),al.subVectors(e.b,Tu),ll.subVectors(e.c,Tu),po.subVectors(al,ol),mo.subVectors(ll,al),Qo.subVectors(ol,ll);let t=[0,-po.z,po.y,0,-mo.z,mo.y,0,-Qo.z,Qo.y,po.z,0,-po.x,mo.z,0,-mo.x,Qo.z,0,-Qo.x,-po.y,po.x,0,-mo.y,mo.x,0,-Qo.y,Qo.x,0];return!em(t,ol,al,ll,Uf)||(t=[1,0,0,0,1,0,0,0,1],!em(t,ol,al,ll,Uf))?!1:(Ff.crossVectors(po,mo),t=[Ff.x,Ff.y,Ff.z],em(t,ol,al,ll,Uf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rs=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Xr=new ie,If=new pc,ol=new ie,al=new ie,ll=new ie,po=new ie,mo=new ie,Qo=new ie,Tu=new ie,Uf=new ie,Ff=new ie,Jo=new ie;function em(s,e,t,n,r){for(let a=0,u=s.length-3;a<=u;a+=3){Jo.fromArray(s,a);const c=r.x*Math.abs(Jo.x)+r.y*Math.abs(Jo.y)+r.z*Math.abs(Jo.z),d=e.dot(Jo),h=t.dot(Jo),p=n.dot(Jo);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const kn=new ie,Of=new zt;let OA=0;class Kr extends Aa{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OA++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wx,this.updateRanges=[],this.gpuType=us,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Of.fromBufferAttribute(this,t),Of.applyMatrix3(e),this.setXY(t,Of.x,Of.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix3(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Eu(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Eu(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Eu(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Eu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Eu(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xi(t,this.array),n=Xi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xi(t,this.array),n=Xi(n,this.array),r=Xi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Xi(t,this.array),n=Xi(n,this.array),r=Xi(r,this.array),a=Xi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class LM extends Kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class NM extends Kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class In extends Kr{constructor(e,t,n){super(new Float32Array(e),t,n)}}const kA=new pc,Au=new ie,tm=new ie;class Od{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kA.setFromPoints(e).getCenter(n);let r=0;for(let a=0,u=e.length;a<u;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Au.subVectors(e,this.center);const t=Au.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Au,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Au.copy(e.center).add(tm)),this.expandByPoint(Au.copy(e.center).sub(tm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let BA=0;const br=new bn,nm=new ci,ul=new ie,or=new pc,bu=new pc,ei=new ie;class Ui extends Aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=hc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vA(e)?NM:LM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Mt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return br.makeRotationFromQuaternion(e),this.applyMatrix4(br),this}rotateX(e){return br.makeRotationX(e),this.applyMatrix4(br),this}rotateY(e){return br.makeRotationY(e),this.applyMatrix4(br),this}rotateZ(e){return br.makeRotationZ(e),this.applyMatrix4(br),this}translate(e,t,n){return br.makeTranslation(e,t,n),this.applyMatrix4(br),this}scale(e,t,n){return br.makeScale(e,t,n),this.applyMatrix4(br),this}lookAt(e){return nm.lookAt(e),nm.updateMatrix(),this.applyMatrix4(nm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ul).negate(),this.translate(ul.x,ul.y,ul.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new In(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];or.setFromBufferAttribute(a),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,or.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,or.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(or.min),this.boundingBox.expandByPoint(or.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const n=this.boundingSphere.center;if(or.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const c=t[a];bu.setFromBufferAttribute(c),this.morphTargetsRelative?(ei.addVectors(or.min,bu.min),or.expandByPoint(ei),ei.addVectors(or.max,bu.max),or.expandByPoint(ei)):(or.expandByPoint(bu.min),or.expandByPoint(bu.max))}or.getCenter(n);let r=0;for(let a=0,u=e.count;a<u;a++)ei.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(ei));if(t)for(let a=0,u=t.length;a<u;a++){const c=t[a],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)ei.fromBufferAttribute(c,h),d&&(ul.fromBufferAttribute(e,h),ei.add(ul)),r=Math.max(r,n.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==n.count)&&(u=new Kr(new Float32Array(4*n.count),4),this.setAttribute("tangent",u));const c=[],d=[];for(let w=0;w<n.count;w++)c[w]=new ie,d[w]=new ie;const h=new ie,p=new ie,v=new ie,m=new zt,_=new zt,M=new zt,E=new ie,x=new ie;function y(w,N,F){h.fromBufferAttribute(n,w),p.fromBufferAttribute(n,N),v.fromBufferAttribute(n,F),m.fromBufferAttribute(a,w),_.fromBufferAttribute(a,N),M.fromBufferAttribute(a,F),p.sub(h),v.sub(h),_.sub(m),M.sub(m);const z=1/(_.x*M.y-M.x*_.y);isFinite(z)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(z),x.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(z),c[w].add(E),c[N].add(E),c[F].add(E),d[w].add(x),d[N].add(x),d[F].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,N=b.length;w<N;++w){const F=b[w],z=F.start,B=F.count;for(let Q=z,ee=z+B;Q<ee;Q+=3)y(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new ie,T=new ie,R=new ie,D=new ie;function P(w){R.fromBufferAttribute(r,w),D.copy(R);const N=c[w];L.copy(N),L.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(D,N);const z=T.dot(d[w])<0?-1:1;u.setXYZW(w,L.x,L.y,L.z,z)}for(let w=0,N=b.length;w<N;++w){const F=b[w],z=F.start,B=F.count;for(let Q=z,ee=z+B;Q<ee;Q+=3)P(e.getX(Q+0)),P(e.getX(Q+1)),P(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Kr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,_=n.count;m<_;m++)n.setXYZ(m,0,0,0);const r=new ie,a=new ie,u=new ie,c=new ie,d=new ie,h=new ie,p=new ie,v=new ie;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),E=e.getX(m+1),x=e.getX(m+2);r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),u.fromBufferAttribute(t,x),p.subVectors(u,a),v.subVectors(r,a),p.cross(v),c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,x),c.add(p),d.add(p),h.add(p),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(E,d.x,d.y,d.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)r.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),p.subVectors(u,a),v.subVectors(r,a),p.cross(v),n.setXYZ(m+0,p.x,p.y,p.z),n.setXYZ(m+1,p.x,p.y,p.z),n.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ei.fromBufferAttribute(e,t),ei.normalize(),e.setXYZ(t,ei.x,ei.y,ei.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,v=c.normalized,m=new h.constructor(d.length*p);let _=0,M=0;for(let E=0,x=d.length;E<x;E++){c.isInterleavedBufferAttribute?_=d[E]*c.data.stride+c.offset:_=d[E]*p;for(let y=0;y<p;y++)m[M++]=h[_++]}return new Kr(m,p,v)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ui,n=this.index.array,r=this.attributes;for(const c in r){const d=r[c],h=e(d,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const d=[],h=a[c];for(let p=0,v=h.length;p<v;p++){const m=h[p],_=e(m,n);d.push(_)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const h=n[d];e.data.attributes[d]=h.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,m=h.length;v<m;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(r[d]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const p=r[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let m=0,_=v.length;m<_;m++)p.push(v[m].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zA=0;class zl extends Aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=hc(),this.name="",this.type="Material",this.blending=Tl,this.side=Io,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vm,this.blendDst=Hm,this.blendEquation=oa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tl&&(n.blending=this.blending),this.side!==Io&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vm&&(n.blendSrc=this.blendSrc),this.blendDst!==Hm&&(n.blendDst=this.blendDst),this.blendEquation!==oa&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Il&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gx&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ja&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ja&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ja&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const u=[];for(const c in a){const d=a[c];delete d.metadata,u.push(d)}return u}if(t){const a=r(e.textures),u=r(e.images);a.length>0&&(n.textures=a),u.length>0&&(n.images=u)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ps=new ie,im=new ie,kf=new ie,go=new ie,rm=new ie,Bf=new ie,sm=new ie;class IM{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ps)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ps.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ps.copy(this.origin).addScaledVector(this.direction,t),Ps.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){im.copy(e).add(t).multiplyScalar(.5),kf.copy(t).sub(e).normalize(),go.copy(this.origin).sub(im);const a=e.distanceTo(t)*.5,u=-this.direction.dot(kf),c=go.dot(this.direction),d=-go.dot(kf),h=go.lengthSq(),p=Math.abs(1-u*u);let v,m,_,M;if(p>0)if(v=u*d-c,m=u*c-d,M=a*p,v>=0)if(m>=-M)if(m<=M){const E=1/p;v*=E,m*=E,_=v*(v+u*m+2*c)+m*(u*v+m+2*d)+h}else m=a,v=Math.max(0,-(u*m+c)),_=-v*v+m*(m+2*d)+h;else m=-a,v=Math.max(0,-(u*m+c)),_=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-u*a+c)),m=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-d),a),_=m*(m+2*d)+h):(v=Math.max(0,-(u*a+c)),m=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+m*(m+2*d)+h);else m=u>0?-a:a,v=Math.max(0,-(u*m+c)),_=-v*v+m*(m+2*d)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(im).addScaledVector(kf,m),_}intersectSphere(e,t){Ps.subVectors(e.center,this.origin);const n=Ps.dot(this.direction),r=Ps.dot(Ps)-n*n,a=e.radius*e.radius;if(r>a)return null;const u=Math.sqrt(a-r),c=n-u,d=n+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(n=(e.min.x-m.x)*h,r=(e.max.x-m.x)*h):(n=(e.max.x-m.x)*h,r=(e.min.x-m.x)*h),p>=0?(a=(e.min.y-m.y)*p,u=(e.max.y-m.y)*p):(a=(e.max.y-m.y)*p,u=(e.min.y-m.y)*p),n>u||a>r||((a>n||isNaN(n))&&(n=a),(u<r||isNaN(r))&&(r=u),v>=0?(c=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(c=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),n>d||c>r)||((c>n||n!==n)&&(n=c),(d<r||r!==r)&&(r=d),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ps)!==null}intersectTriangle(e,t,n,r,a){rm.subVectors(t,e),Bf.subVectors(n,e),sm.crossVectors(rm,Bf);let u=this.direction.dot(sm),c;if(u>0){if(r)return null;c=1}else if(u<0)c=-1,u=-u;else return null;go.subVectors(this.origin,e);const d=c*this.direction.dot(Bf.crossVectors(go,Bf));if(d<0)return null;const h=c*this.direction.dot(rm.cross(go));if(h<0||d+h>u)return null;const p=-c*go.dot(sm);return p<0?null:this.at(p/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class UM extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Uo,this.combine=dM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sy=new bn,ea=new IM,zf=new Od,oy=new ie,Vf=new ie,Hf=new ie,Gf=new ie,om=new ie,Wf=new ie,ay=new ie,Xf=new ie;class fi extends ci{constructor(e=new Ui,t=new UM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Wf.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=c[d],v=a[d];p!==0&&(om.fromBufferAttribute(v,e),u?Wf.addScaledVector(om,p):Wf.addScaledVector(om.sub(t),p))}t.add(Wf)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zf.copy(n.boundingSphere),zf.applyMatrix4(a),ea.copy(e.ray).recast(e.near),!(zf.containsPoint(ea.origin)===!1&&(ea.intersectSphere(zf,oy)===null||ea.origin.distanceToSquared(oy)>(e.far-e.near)**2))&&(sy.copy(a).invert(),ea.copy(e.ray).applyMatrix4(sy),!(n.boundingBox!==null&&ea.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}_computeIntersections(e,t,n){let r;const a=this.geometry,u=this.material,c=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,m=a.groups,_=a.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=m.length;M<E;M++){const x=m[M],y=u[x.materialIndex],b=Math.max(x.start,_.start),L=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let T=b,R=L;T<R;T+=3){const D=c.getX(T),P=c.getX(T+1),w=c.getX(T+2);r=Yf(this,y,e,n,h,p,v,D,P,w),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let x=M,y=E;x<y;x+=3){const b=c.getX(x),L=c.getX(x+1),T=c.getX(x+2);r=Yf(this,u,e,n,h,p,v,b,L,T),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=m.length;M<E;M++){const x=m[M],y=u[x.materialIndex],b=Math.max(x.start,_.start),L=Math.min(d.count,Math.min(x.start+x.count,_.start+_.count));for(let T=b,R=L;T<R;T+=3){const D=T,P=T+1,w=T+2;r=Yf(this,y,e,n,h,p,v,D,P,w),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const M=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let x=M,y=E;x<y;x+=3){const b=x,L=x+1,T=x+2;r=Yf(this,u,e,n,h,p,v,b,L,T),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function VA(s,e,t,n,r,a,u,c){let d;if(e.side===Ji?d=n.intersectTriangle(u,a,r,!0,c):d=n.intersectTriangle(r,a,u,e.side===Io,c),d===null)return null;Xf.copy(c),Xf.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Xf);return h<t.near||h>t.far?null:{distance:h,point:Xf.clone(),object:s}}function Yf(s,e,t,n,r,a,u,c,d,h){s.getVertexPosition(c,Vf),s.getVertexPosition(d,Hf),s.getVertexPosition(h,Gf);const p=VA(s,e,t,n,Vf,Hf,Gf,ay);if(p){const v=new ie;qr.getBarycoord(ay,Vf,Hf,Gf,v),r&&(p.uv=qr.getInterpolatedAttribute(r,c,d,h,v,new zt)),a&&(p.uv1=qr.getInterpolatedAttribute(a,c,d,h,v,new zt)),u&&(p.normal=qr.getInterpolatedAttribute(u,c,d,h,v,new ie),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const m={a:c,b:d,c:h,normal:new ie,materialIndex:0};qr.getNormal(Vf,Hf,Gf,m.normal),p.face=m,p.barycoord=v}return p}class HA extends Ii{constructor(e=null,t=1,n=1,r,a,u,c,d,h=li,p=li,v,m){super(null,u,c,d,h,p,r,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const am=new ie,GA=new ie,WA=new Mt;class sa{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=am.subVectors(n,t).cross(GA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(am),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||WA.getNormalMatrix(e),r=this.coplanarPoint(am).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ta=new Od,XA=new zt(.5,.5),qf=new ie;class __{constructor(e=new sa,t=new sa,n=new sa,r=new sa,a=new sa,u=new sa){this.planes=[e,t,n,r,a,u]}set(e,t,n,r,a,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cs,n=!1){const r=this.planes,a=e.elements,u=a[0],c=a[1],d=a[2],h=a[3],p=a[4],v=a[5],m=a[6],_=a[7],M=a[8],E=a[9],x=a[10],y=a[11],b=a[12],L=a[13],T=a[14],R=a[15];if(r[0].setComponents(h-u,_-p,y-M,R-b).normalize(),r[1].setComponents(h+u,_+p,y+M,R+b).normalize(),r[2].setComponents(h+c,_+v,y+E,R+L).normalize(),r[3].setComponents(h-c,_-v,y-E,R-L).normalize(),n)r[4].setComponents(d,m,x,T).normalize(),r[5].setComponents(h-d,_-m,y-x,R-T).normalize();else if(r[4].setComponents(h-d,_-m,y-x,R-T).normalize(),t===cs)r[5].setComponents(h+d,_+m,y+x,R+T).normalize();else if(t===cc)r[5].setComponents(d,m,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ta)}intersectsSprite(e){ta.center.set(0,0,0);const t=XA.distanceTo(e.center);return ta.radius=.7071067811865476+t,ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(ta)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qf.x=r.normal.x>0?e.max.x:e.min.x,qf.y=r.normal.y>0?e.max.y:e.min.y,qf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class FM extends zl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ly=new bn,Pg=new IM,$f=new Od,Kf=new ie;class YA extends ci{constructor(e=new Ui,t=new FM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$f.copy(n.boundingSphere),$f.applyMatrix4(r),$f.radius+=a,e.ray.intersectsSphere($f)===!1)return;ly.copy(r).invert(),Pg.copy(e.ray).applyMatrix4(ly);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=n.index,v=n.attributes.position;if(h!==null){const m=Math.max(0,u.start),_=Math.min(h.count,u.start+u.count);for(let M=m,E=_;M<E;M++){const x=h.getX(M);Kf.fromBufferAttribute(v,x),uy(Kf,x,d,r,e,t,this)}}else{const m=Math.max(0,u.start),_=Math.min(v.count,u.start+u.count);for(let M=m,E=_;M<E;M++)Kf.fromBufferAttribute(v,M),uy(Kf,M,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=r.length;a<u;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function uy(s,e,t,n,r,a,u){const c=Pg.distanceSqToPoint(s);if(c<t){const d=new ie;Pg.closestPointToPoint(s,d),d.applyMatrix4(n);const h=r.ray.origin.distanceTo(d);if(h<r.near||h>r.far)return;a.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class OM extends Ii{constructor(e=[],t=Ea,n,r,a,u,c,d,h,p){super(e,t,n,r,a,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fl extends Ii{constructor(e,t,n=ms,r,a,u,c=li,d=li,h,p=Gs,v=1){if(p!==Gs&&p!==fa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,r,a,u,c,d,p,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new m_(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qA extends Fl{constructor(e,t=ms,n=Ea,r,a,u=li,c=li,d,h=Gs){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,n,r,a,u,c,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kM extends Ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mc extends Ui{constructor(e=1,t=1,n=1,r=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:u};const c=this;r=Math.floor(r),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],p=[],v=[];let m=0,_=0;M("z","y","x",-1,-1,n,t,e,u,a,0),M("z","y","x",1,-1,n,t,-e,u,a,1),M("x","z","y",1,1,e,n,t,r,u,2),M("x","z","y",1,-1,e,n,-t,r,u,3),M("x","y","z",1,-1,e,t,n,r,a,4),M("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(d),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(p,3)),this.setAttribute("uv",new In(v,2));function M(E,x,y,b,L,T,R,D,P,w,N){const F=T/P,z=R/w,B=T/2,Q=R/2,ee=D/2,Y=P+1,J=w+1;let H=0,G=0;const te=new ie;for(let U=0;U<J;U++){const k=U*z-Q;for(let Z=0;Z<Y;Z++){const Be=Z*F-B;te[E]=Be*b,te[x]=k*L,te[y]=ee,h.push(te.x,te.y,te.z),te[E]=0,te[x]=0,te[y]=D>0?1:-1,p.push(te.x,te.y,te.z),v.push(Z/P),v.push(1-U/w),H+=1}}for(let U=0;U<w;U++)for(let k=0;k<P;k++){const Z=m+k+Y*U,Be=m+k+Y*(U+1),ze=m+(k+1)+Y*(U+1),Ve=m+(k+1)+Y*U;d.push(Z,Be,Ve),d.push(Be,ze,Ve),G+=6}c.addGroup(_,G,N),_+=G,m+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ol extends Ui{constructor(e=1,t=1,n=1,r=32,a=1,u=!1,c=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:u,thetaStart:c,thetaLength:d};const h=this;r=Math.floor(r),a=Math.floor(a);const p=[],v=[],m=[],_=[];let M=0;const E=[],x=n/2;let y=0;b(),u===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new In(v,3)),this.setAttribute("normal",new In(m,3)),this.setAttribute("uv",new In(_,2));function b(){const T=new ie,R=new ie;let D=0;const P=(t-e)/n;for(let w=0;w<=a;w++){const N=[],F=w/a,z=F*(t-e)+e;for(let B=0;B<=r;B++){const Q=B/r,ee=Q*d+c,Y=Math.sin(ee),J=Math.cos(ee);R.x=z*Y,R.y=-F*n+x,R.z=z*J,v.push(R.x,R.y,R.z),T.set(Y,P,J).normalize(),m.push(T.x,T.y,T.z),_.push(Q,1-F),N.push(M++)}E.push(N)}for(let w=0;w<r;w++)for(let N=0;N<a;N++){const F=E[N][w],z=E[N+1][w],B=E[N+1][w+1],Q=E[N][w+1];(e>0||N!==0)&&(p.push(F,z,Q),D+=3),(t>0||N!==a-1)&&(p.push(z,B,Q),D+=3)}h.addGroup(y,D,0),y+=D}function L(T){const R=M,D=new zt,P=new ie;let w=0;const N=T===!0?e:t,F=T===!0?1:-1;for(let B=1;B<=r;B++)v.push(0,x*F,0),m.push(0,F,0),_.push(.5,.5),M++;const z=M;for(let B=0;B<=r;B++){const ee=B/r*d+c,Y=Math.cos(ee),J=Math.sin(ee);P.x=N*J,P.y=x*F,P.z=N*Y,v.push(P.x,P.y,P.z),m.push(0,F,0),D.x=Y*.5+.5,D.y=J*.5*F+.5,_.push(D.x,D.y),M++}for(let B=0;B<r;B++){const Q=R+B,ee=z+B;T===!0?p.push(ee,ee+1,Q):p.push(ee+1,ee,Q),w+=3}h.addGroup(y,w,T===!0?1:2),y+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kd extends Ui{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,u=t/2,c=Math.floor(n),d=Math.floor(r),h=c+1,p=d+1,v=e/c,m=t/d,_=[],M=[],E=[],x=[];for(let y=0;y<p;y++){const b=y*m-u;for(let L=0;L<h;L++){const T=L*v-a;M.push(T,-b,0),E.push(0,0,1),x.push(L/c),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let b=0;b<c;b++){const L=b+h*y,T=b+h*(y+1),R=b+1+h*(y+1),D=b+1+h*y;_.push(L,T,D),_.push(T,R,D)}this.setIndex(_),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(E,3)),this.setAttribute("uv",new In(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.width,e.height,e.widthSegments,e.heightSegments)}}class v_ extends Ui{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,u=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:u,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(u+c,Math.PI);let h=0;const p=[],v=new ie,m=new ie,_=[],M=[],E=[],x=[];for(let y=0;y<=n;y++){const b=[],L=y/n,T=u+L*c,R=e*Math.cos(T),D=Math.sqrt(e*e-R*R);let P=0;y===0&&u===0?P=.5/t:y===n&&d===Math.PI&&(P=-.5/t);for(let w=0;w<=t;w++){const N=w/t,F=r+N*a;v.x=-D*Math.cos(F),v.y=R,v.z=D*Math.sin(F),M.push(v.x,v.y,v.z),m.copy(v).normalize(),E.push(m.x,m.y,m.z),x.push(N+P,1-L),b.push(h++)}p.push(b)}for(let y=0;y<n;y++)for(let b=0;b<t;b++){const L=p[y][b+1],T=p[y][b],R=p[y+1][b],D=p[y+1][b+1];(y!==0||u>0)&&_.push(L,T,D),(y!==n-1||d<Math.PI)&&_.push(T,R,D)}this.setIndex(_),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(E,3)),this.setAttribute("uv",new In(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new v_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bd extends Ui{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2,u=0,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a,thetaStart:u,thetaLength:c},n=Math.floor(n),r=Math.floor(r);const d=[],h=[],p=[],v=[],m=new ie,_=new ie,M=new ie;for(let E=0;E<=n;E++){const x=u+E/n*c;for(let y=0;y<=r;y++){const b=y/r*a;_.x=(e+t*Math.cos(x))*Math.cos(b),_.y=(e+t*Math.cos(x))*Math.sin(b),_.z=t*Math.sin(x),h.push(_.x,_.y,_.z),m.x=e*Math.cos(b),m.y=e*Math.sin(b),M.subVectors(_,m).normalize(),p.push(M.x,M.y,M.z),v.push(y/r),v.push(E/n)}}for(let E=1;E<=n;E++)for(let x=1;x<=r;x++){const y=(r+1)*E+x-1,b=(r+1)*(E-1)+x-1,L=(r+1)*(E-1)+x,T=(r+1)*E+x;d.push(y,b,T),d.push(b,L,T)}this.setIndex(d),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(p,3)),this.setAttribute("uv",new In(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class x_ extends Ui{constructor(e=1,t=.4,n=64,r=8,a=2,u=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:a,q:u},n=Math.floor(n),r=Math.floor(r);const c=[],d=[],h=[],p=[],v=new ie,m=new ie,_=new ie,M=new ie,E=new ie,x=new ie,y=new ie;for(let L=0;L<=n;++L){const T=L/n*a*Math.PI*2;b(T,a,u,e,_),b(T+.01,a,u,e,M),x.subVectors(M,_),y.addVectors(M,_),E.crossVectors(x,y),y.crossVectors(E,x),E.normalize(),y.normalize();for(let R=0;R<=r;++R){const D=R/r*Math.PI*2,P=-t*Math.cos(D),w=t*Math.sin(D);v.x=_.x+(P*y.x+w*E.x),v.y=_.y+(P*y.y+w*E.y),v.z=_.z+(P*y.z+w*E.z),d.push(v.x,v.y,v.z),m.subVectors(v,_).normalize(),h.push(m.x,m.y,m.z),p.push(L/n),p.push(R/r)}}for(let L=1;L<=n;L++)for(let T=1;T<=r;T++){const R=(r+1)*(L-1)+(T-1),D=(r+1)*L+(T-1),P=(r+1)*L+T,w=(r+1)*(L-1)+T;c.push(R,D,w),c.push(D,P,w)}this.setIndex(c),this.setAttribute("position",new In(d,3)),this.setAttribute("normal",new In(h,3)),this.setAttribute("uv",new In(p,2));function b(L,T,R,D,P){const w=Math.cos(L),N=Math.sin(L),F=R/T*L,z=Math.cos(F);P.x=D*(2+z)*.5*w,P.y=D*(2+z)*N*.5,P.z=D*Math.sin(F)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new x_(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function kl(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const r=s[t][n];if(cy(r))r.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(cy(r[0])){const a=[];for(let u=0,c=r.length;u<c;u++)a[u]=r[u].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ri(s){const e={};for(let t=0;t<s.length;t++){const n=kl(s[t]);for(const r in n)e[r]=n[r]}return e}function cy(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function $A(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function BM(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const KA={clone:kl,merge:Ri};var jA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gs extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jA,this.fragmentShader=ZA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kl(e.uniforms),this.uniformsGroups=$A(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?t.uniforms[r]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[r]={type:"m4",value:u.toArray()}:t.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(r.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new ie().fromArray(r.value);break;case"v4":this.uniforms[n].value=new An().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Mt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new bn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class QA extends gs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zM extends zl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cg,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Uo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class JA extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class y_ extends ci{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const lm=new bn,fy=new ie,dy=new ie;class VM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=pr,this.map=null,this.mapPass=null,this.matrix=new bn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new __,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new An(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fy.setFromMatrixPosition(e.matrixWorld),t.position.copy(fy),dy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dy),t.updateMatrixWorld(),lm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lm,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===cc||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const jf=new ie,Zf=new Bl,ts=new ie;class HM extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bn,this.projectionMatrix=new bn,this.projectionMatrixInverse=new bn,this.coordinateSystem=cs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jf,Zf,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jf,Zf,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jf,Zf,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jf,Zf,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _o=new ie,hy=new zt,py=new zt;class fr extends HM{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rg*2*Math.atan(Math.tan(kp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_o.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_o.x,_o.y).multiplyScalar(-e/_o.z),_o.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_o.x,_o.y).multiplyScalar(-e/_o.z)}getViewSize(e,t){return this.getViewBounds(e,hy,py),t.subVectors(py,hy)}setViewOffset(e,t,n,r,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(kp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*r/d,t-=u.offsetY*n/h,r*=u.width/d,n*=u.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tb extends VM{constructor(){super(new fr(90,1,.5,500)),this.isPointLightShadow=!0}}class my extends y_{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class S_ extends HM{constructor(e=-1,t=1,n=1,r=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,u=n+e,c=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(a,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class nb extends VM{constructor(){super(new S_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ib extends y_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.shadow=new nb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rb extends y_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const cl=-90,fl=1;class sb extends ci{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fr(cl,fl,e,t);r.layers=this.layers,this.add(r);const a=new fr(cl,fl,e,t);a.layers=this.layers,this.add(a);const u=new fr(cl,fl,e,t);u.layers=this.layers,this.add(u);const c=new fr(cl,fl,e,t);c.layers=this.layers,this.add(c);const d=new fr(cl,fl,e,t);d.layers=this.layers,this.add(d);const h=new fr(cl,fl,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,u,c,d]=t;for(const h of t)this.remove(h);if(e===cs)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===cc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,c,d,h,p]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,m,_),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class ob extends fr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ab{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const C_=class C_{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};C_.prototype.isMatrix2=!0;let gy=C_;function _y(s,e,t,n){const r=lb(n);switch(t){case TM:return s*e;case bM:return s*e/r.components*r.byteLength;case c_:return s*e/r.components*r.byteLength;case wa:return s*e*2/r.components*r.byteLength;case f_:return s*e*2/r.components*r.byteLength;case AM:return s*e*3/r.components*r.byteLength;case $r:return s*e*4/r.components*r.byteLength;case d_:return s*e*4/r.components*r.byteLength;case cd:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jm:case tg:return Math.max(s,16)*Math.max(e,8)/4;case Qm:case eg:return Math.max(s,8)*Math.max(e,8)/2;case ng:case ig:case sg:case og:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rg:case Ad:case ag:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lg:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ug:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case cg:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fg:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dg:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hg:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pg:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mg:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gg:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _g:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case vg:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case xg:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yg:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sg:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Mg:case Eg:case wg:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tg:case Ag:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bd:case bg:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lb(s){switch(s){case pr:case SM:return{byteLength:1,components:1};case lc:case MM:case Hs:return{byteLength:2,components:1};case l_:case u_:return{byteLength:2,components:4};case ms:case a_:case us:return{byteLength:4,components:1};case EM:case wM:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:o_}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=o_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function GM(){let s=null,e=!1,t=null,n=null;function r(a,u){t(a,u),n=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(r),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function ub(s){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,v=h.byteLength,m=s.createBuffer();s.bindBuffer(d,m),s.bufferData(d,h,p),c.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,d,h){const p=d.array,v=d.updateRanges;if(s.bindBuffer(h,c),v.length===0)s.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<v.length;_++){const M=v[m],E=v[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,v[m]=E)}v.length=m+1;for(let _=0,M=v.length;_<M;_++){const E=v[_];s.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(s.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,d),h.version=c.version}}return{get:r,remove:a,update:u}}var cb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Nb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dC=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_C=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$C=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_R=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:cb,alphahash_pars_fragment:fb,alphamap_fragment:db,alphamap_pars_fragment:hb,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:_b,batching_pars_vertex:vb,batching_vertex:xb,begin_vertex:yb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:bb,clipping_planes_vertex:Cb,color_fragment:Rb,color_pars_fragment:Pb,color_pars_vertex:Db,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Fb,displacementmap_vertex:Ob,emissivemap_fragment:kb,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Vb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Wb,envmap_pars_vertex:Xb,envmap_physical_pars_fragment:nC,envmap_vertex:Yb,fog_vertex:qb,fog_pars_vertex:$b,fog_fragment:Kb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Qb,lights_lambert_fragment:Jb,lights_lambert_pars_fragment:eC,lights_pars_begin:tC,lights_toon_fragment:iC,lights_toon_pars_fragment:rC,lights_phong_fragment:sC,lights_phong_pars_fragment:oC,lights_physical_fragment:aC,lights_physical_pars_fragment:lC,lights_fragment_begin:uC,lights_fragment_maps:cC,lights_fragment_end:fC,lightprobes_pars_fragment:dC,logdepthbuf_fragment:hC,logdepthbuf_pars_fragment:pC,logdepthbuf_pars_vertex:mC,logdepthbuf_vertex:gC,map_fragment:_C,map_pars_fragment:vC,map_particle_fragment:xC,map_particle_pars_fragment:yC,metalnessmap_fragment:SC,metalnessmap_pars_fragment:MC,morphinstance_vertex:EC,morphcolor_vertex:wC,morphnormal_vertex:TC,morphtarget_pars_vertex:AC,morphtarget_vertex:bC,normal_fragment_begin:CC,normal_fragment_maps:RC,normal_pars_fragment:PC,normal_pars_vertex:DC,normal_vertex:LC,normalmap_pars_fragment:NC,clearcoat_normal_fragment_begin:IC,clearcoat_normal_fragment_maps:UC,clearcoat_pars_fragment:FC,iridescence_pars_fragment:OC,opaque_fragment:kC,packing:BC,premultiplied_alpha_fragment:zC,project_vertex:VC,dithering_fragment:HC,dithering_pars_fragment:GC,roughnessmap_fragment:WC,roughnessmap_pars_fragment:XC,shadowmap_pars_fragment:YC,shadowmap_pars_vertex:qC,shadowmap_vertex:$C,shadowmask_pars_fragment:KC,skinbase_vertex:jC,skinning_pars_vertex:ZC,skinning_vertex:QC,skinnormal_vertex:JC,specularmap_fragment:eR,specularmap_pars_fragment:tR,tonemapping_fragment:nR,tonemapping_pars_fragment:iR,transmission_fragment:rR,transmission_pars_fragment:sR,uv_pars_fragment:oR,uv_pars_vertex:aR,uv_vertex:lR,worldpos_vertex:uR,background_vert:cR,background_frag:fR,backgroundCube_vert:dR,backgroundCube_frag:hR,cube_vert:pR,cube_frag:mR,depth_vert:gR,depth_frag:_R,distance_vert:vR,distance_frag:xR,equirect_vert:yR,equirect_frag:SR,linedashed_vert:MR,linedashed_frag:ER,meshbasic_vert:wR,meshbasic_frag:TR,meshlambert_vert:AR,meshlambert_frag:bR,meshmatcap_vert:CR,meshmatcap_frag:RR,meshnormal_vert:PR,meshnormal_frag:DR,meshphong_vert:LR,meshphong_frag:NR,meshphysical_vert:IR,meshphysical_frag:UR,meshtoon_vert:FR,meshtoon_frag:OR,points_vert:kR,points_frag:BR,shadow_vert:zR,shadow_frag:VR,sprite_vert:HR,sprite_frag:GR},We={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ss={basic:{uniforms:Ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ri([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ri([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ri([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ri([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ri([We.points,We.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ri([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ri([We.common,We.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ri([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ri([We.sprite,We.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Ri([We.common,We.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Ri([We.lights,We.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};ss.physical={uniforms:Ri([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Qf={r:0,b:0,g:0},WR=new bn,WM=new Mt;WM.set(-1,0,0,0,1,0,0,0,1);function XR(s,e,t,n,r,a){const u=new Ut(0);let c=r===!0?0:1,d,h,p=null,v=0,m=null;function _(b){let L=b.isScene===!0?b.background:null;if(L&&L.isTexture){const T=b.backgroundBlurriness>0;L=e.get(L,T)}return L}function M(b){let L=!1;const T=_(b);T===null?x(u,c):T&&T.isColor&&(x(T,1),L=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(b,L){const T=_(L);T&&(T.isCubeTexture||T.mapping===Fd)?(h===void 0&&(h=new fi(new mc(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:kl(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(WR.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(WM),h.material.toneMapped=Ot.getTransfer(T.colorSpace)!==nn,(p!==T||v!==T.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,p=T,v=T.version,m=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(d===void 0&&(d=new fi(new kd(2,2),new gs({name:"BackgroundMaterial",uniforms:kl(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:Io,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=T,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Ot.getTransfer(T.colorSpace)!==nn,T.matrixAutoUpdate===!0&&T.updateMatrix(),d.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||v!==T.version||m!==s.toneMapping)&&(d.material.needsUpdate=!0,p=T,v=T.version,m=s.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function x(b,L){b.getRGB(Qf,BM(s)),t.buffers.color.setClear(Qf.r,Qf.g,Qf.b,L,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,L=1){u.set(b),c=L,x(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,x(u,c)},render:M,addToRenderList:E,dispose:y}}function YR(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},r=m(null);let a=r,u=!1;function c(z,B,Q,ee,Y){let J=!1;const H=v(z,ee,Q,B);a!==H&&(a=H,h(a.object)),J=_(z,ee,Q,Y),J&&M(z,ee,Q,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,T(z,B,Q,ee),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return s.createVertexArray()}function h(z){return s.bindVertexArray(z)}function p(z){return s.deleteVertexArray(z)}function v(z,B,Q,ee){const Y=ee.wireframe===!0;let J=n[B.id];J===void 0&&(J={},n[B.id]=J);const H=z.isInstancedMesh===!0?z.id:0;let G=J[H];G===void 0&&(G={},J[H]=G);let te=G[Q.id];te===void 0&&(te={},G[Q.id]=te);let U=te[Y];return U===void 0&&(U=m(d()),te[Y]=U),U}function m(z){const B=[],Q=[],ee=[];for(let Y=0;Y<t;Y++)B[Y]=0,Q[Y]=0,ee[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:ee,object:z,attributes:{},index:null}}function _(z,B,Q,ee){const Y=a.attributes,J=B.attributes;let H=0;const G=Q.getAttributes();for(const te in G)if(G[te].location>=0){const k=Y[te];let Z=J[te];if(Z===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;H++}return a.attributesNum!==H||a.index!==ee}function M(z,B,Q,ee){const Y={},J=B.attributes;let H=0;const G=Q.getAttributes();for(const te in G)if(G[te].location>=0){let k=J[te];k===void 0&&(te==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),te==="instanceColor"&&z.instanceColor&&(k=z.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),Y[te]=Z,H++}a.attributes=Y,a.attributesNum=H,a.index=ee}function E(){const z=a.newAttributes;for(let B=0,Q=z.length;B<Q;B++)z[B]=0}function x(z){y(z,0)}function y(z,B){const Q=a.newAttributes,ee=a.enabledAttributes,Y=a.attributeDivisors;Q[z]=1,ee[z]===0&&(s.enableVertexAttribArray(z),ee[z]=1),Y[z]!==B&&(s.vertexAttribDivisor(z,B),Y[z]=B)}function b(){const z=a.newAttributes,B=a.enabledAttributes;for(let Q=0,ee=B.length;Q<ee;Q++)B[Q]!==z[Q]&&(s.disableVertexAttribArray(Q),B[Q]=0)}function L(z,B,Q,ee,Y,J,H){H===!0?s.vertexAttribIPointer(z,B,Q,Y,J):s.vertexAttribPointer(z,B,Q,ee,Y,J)}function T(z,B,Q,ee){E();const Y=ee.attributes,J=Q.getAttributes(),H=B.defaultAttributeValues;for(const G in J){const te=J[G];if(te.location>=0){let U=Y[G];if(U===void 0&&(G==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),G==="instanceColor"&&z.instanceColor&&(U=z.instanceColor)),U!==void 0){const k=U.normalized,Z=U.itemSize,Be=e.get(U);if(Be===void 0)continue;const ze=Be.buffer,Ve=Be.type,se=Be.bytesPerElement,ve=Ve===s.INT||Ve===s.UNSIGNED_INT||U.gpuType===a_;if(U.isInterleavedBufferAttribute){const he=U.data,Ne=he.stride,je=U.offset;if(he.isInstancedInterleavedBuffer){for(let Xe=0;Xe<te.locationSize;Xe++)y(te.location+Xe,he.meshPerAttribute);z.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Xe=0;Xe<te.locationSize;Xe++)x(te.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let Xe=0;Xe<te.locationSize;Xe++)L(te.location+Xe,Z/te.locationSize,Ve,k,Ne*se,(je+Z/te.locationSize*Xe)*se,ve)}else{if(U.isInstancedBufferAttribute){for(let he=0;he<te.locationSize;he++)y(te.location+he,U.meshPerAttribute);z.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let he=0;he<te.locationSize;he++)x(te.location+he);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let he=0;he<te.locationSize;he++)L(te.location+he,Z/te.locationSize,Ve,k,Z*se,Z/te.locationSize*he*se,ve)}}else if(H!==void 0){const k=H[G];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(te.location,k);break;case 3:s.vertexAttrib3fv(te.location,k);break;case 4:s.vertexAttrib4fv(te.location,k);break;default:s.vertexAttrib1fv(te.location,k)}}}}b()}function R(){N();for(const z in n){const B=n[z];for(const Q in B){const ee=B[Q];for(const Y in ee){const J=ee[Y];for(const H in J)p(J[H].object),delete J[H];delete ee[Y]}}delete n[z]}}function D(z){if(n[z.id]===void 0)return;const B=n[z.id];for(const Q in B){const ee=B[Q];for(const Y in ee){const J=ee[Y];for(const H in J)p(J[H].object),delete J[H];delete ee[Y]}}delete n[z.id]}function P(z){for(const B in n){const Q=n[B];for(const ee in Q){const Y=Q[ee];if(Y[z.id]===void 0)continue;const J=Y[z.id];for(const H in J)p(J[H].object),delete J[H];delete Y[z.id]}}}function w(z){for(const B in n){const Q=n[B],ee=z.isInstancedMesh===!0?z.id:0,Y=Q[ee];if(Y!==void 0){for(const J in Y){const H=Y[J];for(const G in H)p(H[G].object),delete H[G];delete Y[J]}delete Q[ee],Object.keys(Q).length===0&&delete n[B]}}}function N(){F(),u=!0,a!==r&&(a=r,h(a.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:N,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:x,disableUnusedAttributes:b}}function qR(s,e,t){let n;function r(d){n=d}function a(d,h){s.drawArrays(n,d,h),t.update(h,n,1)}function u(d,h,p){p!==0&&(s.drawArraysInstanced(n,d,h,p),t.update(h,n,p))}function c(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,p);let m=0;for(let _=0;_<p;_++)m+=h[_];t.update(m,n,1)}this.setMode=r,this.render=a,this.renderInstances=u,this.renderMultiDraw=c}function $R(s,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(P){return!(P!==$r&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(P){const w=P===Hs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==pr&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==us&&!w)}function d(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(vt("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:b,maxVaryings:L,maxFragmentUniforms:T,maxSamples:R,samples:D}}function KR(s){const e=this;let t=null,n=0,r=!1,a=!1;const u=new sa,c=new Mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const _=v.length!==0||m||n!==0||r;return r=m,n=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=p(v,m,0)},this.setState=function(v,m,_){const M=v.clippingPlanes,E=v.clipIntersection,x=v.clipShadows,y=s.get(v);if(!r||M===null||M.length===0||a&&!x)a?p(null):h();else{const b=a?0:n,L=b*4;let T=y.clippingState||null;d.value=T,T=p(M,m,L,_);for(let R=0;R!==L;++R)T[R]=t[R];y.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(v,m,_,M){const E=v!==null?v.length:0;let x=null;if(E!==0){if(x=d.value,M!==!0||x===null){const y=_+E*4,b=m.matrixWorldInverse;c.getNormalMatrix(b),(x===null||x.length<y)&&(x=new Float32Array(y));for(let L=0,T=_;L!==E;++L,T+=4)u.copy(v[L]).applyMatrix4(b,c),u.normal.toArray(x,T),x[T+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const To=4,vy=[.125,.215,.35,.446,.526,.582],aa=20,jR=256,Cu=new S_,xy=new Ut;let um=null,cm=0,fm=0,dm=!1;const ZR=new ie;class yy{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:u=256,position:c=ZR}=a;um=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),fm=this._renderer.getActiveMipmapLevel(),dm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,n,r,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ey(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=My(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(um,cm,fm),this._renderer.xr.enabled=dm,e.scissorTest=!1,dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ea||e.mapping===Ul?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),um=this._renderer.getRenderTarget(),cm=this._renderer.getActiveCubeFace(),fm=this._renderer.getActiveMipmapLevel(),dm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Hs,format:$r,colorSpace:Cd,depthBuffer:!1},r=Sy(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sy(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QR(a)),this._blurMaterial=eP(a,e,t),this._ggxMaterial=JR(a,e,t)}return r}_compileMaterial(e){const t=new fi(new Ui,e);this._renderer.compile(t,Cu)}_sceneToCubeUV(e,t,n,r,a){const d=new fr(90,1,t,n),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,_=v.toneMapping;v.getClearColor(xy),v.toneMapping=ds,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new mc,new UM({name:"PMREM.Background",side:Ji,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let y=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,y=!0):(x.color.copy(xy),y=!0);for(let L=0;L<6;L++){const T=L%3;T===0?(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[L],a.y,a.z)):T===1?(d.up.set(0,0,h[L]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[L],a.z)):(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[L]));const R=this._cubeSize;dl(r,T*R,L>2?R:0,R,R),v.setRenderTarget(r),y&&v.render(E,d),v.render(e,d)}v.toneMapping=_,v.autoClear=m,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ea||e.mapping===Ul;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ey()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=My());const a=r?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const c=a.uniforms;c.envMap.value=e;const d=this._cubeSize;dl(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(u,Cu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const d=u.uniforms,h=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),m=0+h*1.25,_=v*m,{_lodMax:M}=this,E=this._sizeLods[n],x=3*E*(n>M-To?n-M+To:0),y=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,dl(a,x,y,3*E,2*E),r.setRenderTarget(a),r.render(c,Cu),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-n,dl(e,x,y,3*E,2*E),r.setRenderTarget(e),r.render(c,Cu)}_blur(e,t,n,r,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,r,"latitudinal",a),this._halfBlur(u,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[r];v.material=h;const m=h.uniforms,_=this._sizeLods[n]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*aa-1),E=a/M,x=isFinite(a)?1+Math.floor(p*E):aa;x>aa&&vt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${aa}`);const y=[];let b=0;for(let P=0;P<aa;++P){const w=P/E,N=Math.exp(-w*w/2);y.push(N),P===0?b+=N:P<x&&(b+=2*N)}for(let P=0;P<y.length;P++)y[P]=y[P]/b;m.envMap.value=e.texture,m.samples.value=x,m.weights.value=y,m.latitudinal.value=u==="latitudinal",c&&(m.poleAxis.value=c);const{_lodMax:L}=this;m.dTheta.value=M,m.mipInt.value=L-n;const T=this._sizeLods[r],R=3*T*(r>L-To?r-L+To:0),D=4*(this._cubeSize-T);dl(t,R,D,3*T,2*T),d.setRenderTarget(t),d.render(v,Cu)}}function QR(s){const e=[],t=[],n=[];let r=s;const a=s-To+1+vy.length;for(let u=0;u<a;u++){const c=Math.pow(2,r);e.push(c);let d=1/c;u>s-To?d=vy[u-s+To-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,v=1+h,m=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,E=3,x=2,y=1,b=new Float32Array(E*M*_),L=new Float32Array(x*M*_),T=new Float32Array(y*M*_);for(let D=0;D<_;D++){const P=D%3*2/3-1,w=D>2?0:-1,N=[P,w,0,P+2/3,w,0,P+2/3,w+1,0,P,w,0,P+2/3,w+1,0,P,w+1,0];b.set(N,E*M*D),L.set(m,x*M*D);const F=[D,D,D,D,D,D];T.set(F,y*M*D)}const R=new Ui;R.setAttribute("position",new Kr(b,E)),R.setAttribute("uv",new Kr(L,x)),R.setAttribute("faceIndex",new Kr(T,y)),n.push(new fi(R,null)),r>To&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Sy(s,e,t){const n=new hs(s,e,t);return n.texture.mapping=Fd,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dl(s,e,t,n,r){s.viewport.set(e,t,n,r),s.scissor.set(e,t,n,r)}function JR(s,e,t){return new gs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function eP(s,e,t){const n=new Float32Array(aa),r=new ie(0,1,0);return new gs({name:"SphericalGaussianBlur",defines:{n:aa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function My(){return new gs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Ey(){return new gs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function zd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class XM extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new OM(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new mc(5,5,5),a=new gs({name:"CubemapFromEquirect",uniforms:kl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ji,blending:ks});a.uniforms.tEquirect.value=t;const u=new fi(r,a),c=t.minFilter;return t.minFilter===ca&&(t.minFilter=Ei),new sb(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,r);e.setRenderTarget(a)}}function tP(s){let e=new WeakMap,t=new WeakMap,n=null;function r(m,_=!1){return m==null?null:_?u(m):a(m)}function a(m){if(m&&m.isTexture){const _=m.mapping;if(_===Up||_===Fp)if(e.has(m)){const M=e.get(m).texture;return c(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const E=new XM(M.height);return E.fromEquirectangularTexture(s,m),e.set(m,E),m.addEventListener("dispose",h),c(E.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const _=m.mapping,M=_===Up||_===Fp,E=_===Ea||_===Ul;if(M||E){let x=t.get(m);const y=x!==void 0?x.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==y)return n===null&&(n=new yy(s)),x=M?n.fromEquirectangular(m,x):n.fromCubemap(m,x),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),x.texture;if(x!==void 0)return x.texture;{const b=m.image;return M&&b&&b.height>0||E&&b&&d(b)?(n===null&&(n=new yy(s)),x=M?n.fromEquirectangular(m):n.fromCubemap(m),x.texture.pmremVersion=m.pmremVersion,t.set(m,x),m.addEventListener("dispose",p),x.texture):null}}}return m}function c(m,_){return _===Up?m.mapping=Ea:_===Fp&&(m.mapping=Ul),m}function d(m){let _=0;const M=6;for(let E=0;E<M;E++)m[E]!==void 0&&_++;return _===M}function h(m){const _=m.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(m){const _=m.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:v}}function nP(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=s.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Al("WebGLRenderer: "+n+" extension not supported."),r}}}function iP(s,e,t,n){const r={},a=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete r[m.id];const _=a.get(m);_&&(e.remove(_),a.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(v,m){return r[m.id]===!0||(m.addEventListener("dispose",u),r[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const _ in m)e.update(m[_],s.ARRAY_BUFFER)}function h(v){const m=[],_=v.index,M=v.attributes.position;let E=0;if(M===void 0)return;if(_!==null){const b=_.array;E=_.version;for(let L=0,T=b.length;L<T;L+=3){const R=b[L+0],D=b[L+1],P=b[L+2];m.push(R,D,D,P,P,R)}}else{const b=M.array;E=M.version;for(let L=0,T=b.length/3-1;L<T;L+=3){const R=L+0,D=L+1,P=L+2;m.push(R,D,D,P,P,R)}}const x=new(M.count>=65535?NM:LM)(m,1);x.version=E;const y=a.get(v);y&&e.remove(y),a.set(v,x)}function p(v){const m=a.get(v);if(m){const _=v.index;_!==null&&m.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:c,update:d,getWireframeAttribute:p}}function rP(s,e,t){let n;function r(v){n=v}let a,u;function c(v){a=v.type,u=v.bytesPerElement}function d(v,m){s.drawElements(n,m,a,v*u),t.update(m,n,1)}function h(v,m,_){_!==0&&(s.drawElementsInstanced(n,m,a,v*u,_),t.update(m,n,_))}function p(v,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,v,0,_);let E=0;for(let x=0;x<_;x++)E+=m[x];t.update(E,n,1)}this.setMode=r,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function sP(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,u,c){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=c*(a/3);break;case s.LINES:t.lines+=c*(a/2);break;case s.LINE_STRIP:t.lines+=c*(a-1);break;case s.LINE_LOOP:t.lines+=c*a;break;case s.POINTS:t.points+=c*a;break;default:Wt("WebGLInfo: Unknown draw mode:",u);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function oP(s,e,t){const n=new WeakMap,r=new An;function a(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let m=n.get(c);if(m===void 0||m.count!==v){let F=function(){w.dispose(),n.delete(c),c.removeEventListener("dispose",F)};var _=F;m!==void 0&&m.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let T=0;M===!0&&(T=1),E===!0&&(T=2),x===!0&&(T=3);let R=c.attributes.position.count*T,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*D*4*v),w=new RM(P,R,D,v);w.type=us,w.needsUpdate=!0;const N=T*4;for(let z=0;z<v;z++){const B=y[z],Q=b[z],ee=L[z],Y=R*D*4*z;for(let J=0;J<B.count;J++){const H=J*N;M===!0&&(r.fromBufferAttribute(B,J),P[Y+H+0]=r.x,P[Y+H+1]=r.y,P[Y+H+2]=r.z,P[Y+H+3]=0),E===!0&&(r.fromBufferAttribute(Q,J),P[Y+H+4]=r.x,P[Y+H+5]=r.y,P[Y+H+6]=r.z,P[Y+H+7]=0),x===!0&&(r.fromBufferAttribute(ee,J),P[Y+H+8]=r.x,P[Y+H+9]=r.y,P[Y+H+10]=r.z,P[Y+H+11]=ee.itemSize===4?r.w:1)}}m={count:v,texture:w,size:new zt(R,D)},n.set(c,m),c.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<h.length;x++)M+=h[x];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:a}}function aP(s,e,t,n,r){let a=new WeakMap;function u(h){const p=r.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==p&&(e.update(m),a.set(m,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return m}function c(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const lP={[hM]:"LINEAR_TONE_MAPPING",[pM]:"REINHARD_TONE_MAPPING",[mM]:"CINEON_TONE_MAPPING",[gM]:"ACES_FILMIC_TONE_MAPPING",[vM]:"AGX_TONE_MAPPING",[xM]:"NEUTRAL_TONE_MAPPING",[_M]:"CUSTOM_TONE_MAPPING"};function uP(s,e,t,n,r,a){const u=new hs(e,t,{type:s,depthBuffer:r,stencilBuffer:a,samples:n?4:0,depthTexture:r?new Fl(e,t):void 0}),c=new hs(e,t,{type:Hs,depthBuffer:!1,stencilBuffer:!1}),d=new Ui;d.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new In([0,2,0,0,2,0],2));const h=new QA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new fi(d,h),v=new S_(-1,1,1,-1,0,1);let m=null,_=null,M=!1,E,x=null,y=[],b=!1;this.setSize=function(L,T){u.setSize(L,T),c.setSize(L,T);for(let R=0;R<y.length;R++){const D=y[R];D.setSize&&D.setSize(L,T)}},this.setEffects=function(L){y=L,b=y.length>0&&y[0].isRenderPass===!0;const T=u.width,R=u.height;for(let D=0;D<y.length;D++){const P=y[D];P.setSize&&P.setSize(T,R)}},this.begin=function(L,T){if(M||L.toneMapping===ds&&y.length===0)return!1;if(x=T,T!==null){const R=T.width,D=T.height;(u.width!==R||u.height!==D)&&this.setSize(R,D)}return b===!1&&L.setRenderTarget(u),E=L.toneMapping,L.toneMapping=ds,!0},this.hasRenderPass=function(){return b},this.end=function(L,T){L.toneMapping=E,M=!0;let R=u,D=c;for(let P=0;P<y.length;P++){const w=y[P];if(w.enabled!==!1&&(w.render(L,D,R,T),w.needsSwap!==!1)){const N=R;R=D,D=N}}if(m!==L.outputColorSpace||_!==L.toneMapping){m=L.outputColorSpace,_=L.toneMapping,h.defines={},Ot.getTransfer(m)===nn&&(h.defines.SRGB_TRANSFER="");const P=lP[_];P&&(h.defines[P]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,L.setRenderTarget(x),L.render(p,v),x=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),c.dispose(),d.dispose(),h.dispose()}}const YM=new Ii,Dg=new Fl(1,1),qM=new RM,$M=new CA,KM=new OM,wy=[],Ty=[],Ay=new Float32Array(16),by=new Float32Array(9),Cy=new Float32Array(4);function Vl(s,e,t){const n=s[0];if(n<=0||n>0)return s;const r=e*t;let a=wy[r];if(a===void 0&&(a=new Float32Array(r),wy[r]=a),e!==0){n.toArray(a,0);for(let u=1,c=0;u!==e;++u)c+=t,s[u].toArray(a,c)}return a}function Yn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function qn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Vd(s,e){let t=Ty[e];t===void 0&&(t=new Int32Array(e),Ty[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function cP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function fP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;s.uniform2fv(this.addr,e),qn(t,e)}}function dP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yn(t,e))return;s.uniform3fv(this.addr,e),qn(t,e)}}function hP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;s.uniform4fv(this.addr,e),qn(t,e)}}function pP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),qn(t,e)}else{if(Yn(t,n))return;Cy.set(n),s.uniformMatrix2fv(this.addr,!1,Cy),qn(t,n)}}function mP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),qn(t,e)}else{if(Yn(t,n))return;by.set(n),s.uniformMatrix3fv(this.addr,!1,by),qn(t,n)}}function gP(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),qn(t,e)}else{if(Yn(t,n))return;Ay.set(n),s.uniformMatrix4fv(this.addr,!1,Ay),qn(t,n)}}function _P(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;s.uniform2iv(this.addr,e),qn(t,e)}}function xP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;s.uniform3iv(this.addr,e),qn(t,e)}}function yP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;s.uniform4iv(this.addr,e),qn(t,e)}}function SP(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yn(t,e))return;s.uniform2uiv(this.addr,e),qn(t,e)}}function EP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yn(t,e))return;s.uniform3uiv(this.addr,e),qn(t,e)}}function wP(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yn(t,e))return;s.uniform4uiv(this.addr,e),qn(t,e)}}function TP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r);let a;this.type===s.SAMPLER_2D_SHADOW?(Dg.compareFunction=t.isReversedDepthBuffer()?p_:h_,a=Dg):a=YM,t.setTexture2D(e||a,r)}function AP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||$M,r)}function bP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||KM,r)}function CP(s,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(s.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||qM,r)}function RP(s){switch(s){case 5126:return cP;case 35664:return fP;case 35665:return dP;case 35666:return hP;case 35674:return pP;case 35675:return mP;case 35676:return gP;case 5124:case 35670:return _P;case 35667:case 35671:return vP;case 35668:case 35672:return xP;case 35669:case 35673:return yP;case 5125:return SP;case 36294:return MP;case 36295:return EP;case 36296:return wP;case 35678:case 36198:case 36298:case 36306:case 35682:return TP;case 35679:case 36299:case 36307:return AP;case 35680:case 36300:case 36308:case 36293:return bP;case 36289:case 36303:case 36311:case 36292:return CP}}function PP(s,e){s.uniform1fv(this.addr,e)}function DP(s,e){const t=Vl(e,this.size,2);s.uniform2fv(this.addr,t)}function LP(s,e){const t=Vl(e,this.size,3);s.uniform3fv(this.addr,t)}function NP(s,e){const t=Vl(e,this.size,4);s.uniform4fv(this.addr,t)}function IP(s,e){const t=Vl(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function UP(s,e){const t=Vl(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function FP(s,e){const t=Vl(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function OP(s,e){s.uniform1iv(this.addr,e)}function kP(s,e){s.uniform2iv(this.addr,e)}function BP(s,e){s.uniform3iv(this.addr,e)}function zP(s,e){s.uniform4iv(this.addr,e)}function VP(s,e){s.uniform1uiv(this.addr,e)}function HP(s,e){s.uniform2uiv(this.addr,e)}function GP(s,e){s.uniform3uiv(this.addr,e)}function WP(s,e){s.uniform4uiv(this.addr,e)}function XP(s,e,t){const n=this.cache,r=e.length,a=Vd(t,r);Yn(n,a)||(s.uniform1iv(this.addr,a),qn(n,a));let u;this.type===s.SAMPLER_2D_SHADOW?u=Dg:u=YM;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||u,a[c])}function YP(s,e,t){const n=this.cache,r=e.length,a=Vd(t,r);Yn(n,a)||(s.uniform1iv(this.addr,a),qn(n,a));for(let u=0;u!==r;++u)t.setTexture3D(e[u]||$M,a[u])}function qP(s,e,t){const n=this.cache,r=e.length,a=Vd(t,r);Yn(n,a)||(s.uniform1iv(this.addr,a),qn(n,a));for(let u=0;u!==r;++u)t.setTextureCube(e[u]||KM,a[u])}function $P(s,e,t){const n=this.cache,r=e.length,a=Vd(t,r);Yn(n,a)||(s.uniform1iv(this.addr,a),qn(n,a));for(let u=0;u!==r;++u)t.setTexture2DArray(e[u]||qM,a[u])}function KP(s){switch(s){case 5126:return PP;case 35664:return DP;case 35665:return LP;case 35666:return NP;case 35674:return IP;case 35675:return UP;case 35676:return FP;case 5124:case 35670:return OP;case 35667:case 35671:return kP;case 35668:case 35672:return BP;case 35669:case 35673:return zP;case 5125:return VP;case 36294:return HP;case 36295:return GP;case 36296:return WP;case 35678:case 36198:case 36298:case 36306:case 35682:return XP;case 35679:case 36299:case 36307:return YP;case 35680:case 36300:case 36308:case 36293:return qP;case 36289:case 36303:case 36311:case 36292:return $P}}class jP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=RP(t.type)}}class ZP{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KP(t.type)}}class QP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,u=r.length;a!==u;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const hm=/(\w+)(\])?(\[|\.)?/g;function Ry(s,e){s.seq.push(e),s.map[e.id]=e}function JP(s,e,t){const n=s.name,r=n.length;for(hm.lastIndex=0;;){const a=hm.exec(n),u=hm.lastIndex;let c=a[1];const d=a[2]==="]",h=a[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===r){Ry(t,h===void 0?new jP(c,s,e):new ZP(c,s,e));break}else{let v=t.map[c];v===void 0&&(v=new QP(c),Ry(t,v)),t=v}}}class pd{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);JP(c,d,this)}const r=[],a=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(u):a.push(u);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,u=t.length;a!==u;++a){const c=t[a],d=n[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const u=e[r];u.id in t&&n.push(u)}return n}}function Py(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const e2=37297;let t2=0;function n2(s,e){const t=s.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=r;u<a;u++){const c=u+1;n.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return n.join(`
`)}const Dy=new Mt;function i2(s){Ot._getMatrix(Dy,Ot.workingColorSpace,s);const e=`mat3( ${Dy.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(s)){case Rd:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ly(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),a=(s.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+n2(s.getShaderSource(e),c)}else return a}function r2(s,e){const t=i2(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const s2={[hM]:"Linear",[pM]:"Reinhard",[mM]:"Cineon",[gM]:"ACESFilmic",[vM]:"AgX",[xM]:"Neutral",[_M]:"Custom"};function o2(s,e){const t=s2[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jf=new ie;function a2(){Ot.getLuminanceCoefficients(Jf);const s=Jf.x.toFixed(4),e=Jf.y.toFixed(4),t=Jf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l2(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bu).join(`
`)}function u2(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c2(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=s.getActiveAttrib(e,r),u=a.name;let c=1;a.type===s.FLOAT_MAT2&&(c=2),a.type===s.FLOAT_MAT3&&(c=3),a.type===s.FLOAT_MAT4&&(c=4),t[u]={type:a.type,location:s.getAttribLocation(e,u),locationSize:c}}return t}function Bu(s){return s!==""}function Ny(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iy(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lg(s){return s.replace(f2,h2)}const d2=new Map;function h2(s,e){let t=Ct[e];if(t===void 0){const n=d2.get(e);if(n!==void 0)t=Ct[n],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Lg(t)}const p2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uy(s){return s.replace(p2,m2)}function m2(s,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Fy(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const g2={[ud]:"SHADOWMAP_TYPE_PCF",[ku]:"SHADOWMAP_TYPE_VSM"};function _2(s){return g2[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const v2={[Ea]:"ENVMAP_TYPE_CUBE",[Ul]:"ENVMAP_TYPE_CUBE",[Fd]:"ENVMAP_TYPE_CUBE_UV"};function x2(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":v2[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const y2={[Ul]:"ENVMAP_MODE_REFRACTION"};function S2(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":y2[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const M2={[dM]:"ENVMAP_BLENDING_MULTIPLY",[aA]:"ENVMAP_BLENDING_MIX",[lA]:"ENVMAP_BLENDING_ADD"};function E2(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":M2[s.combine]||"ENVMAP_BLENDING_NONE"}function w2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T2(s,e,t,n){const r=s.getContext(),a=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=_2(t),h=x2(t),p=S2(t),v=E2(t),m=w2(t),_=l2(t),M=u2(a),E=r.createProgram();let x,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Bu).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Bu).join(`
`),y.length>0&&(y+=`
`)):(x=[Fy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bu).join(`
`),y=[Fy(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?Ct.tonemapping_pars_fragment:"",t.toneMapping!==ds?o2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,r2("linearToOutputTexel",t.outputColorSpace),a2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bu).join(`
`)),u=Lg(u),u=Ny(u,t),u=Iy(u,t),c=Lg(c),c=Ny(c,t),c=Iy(c,t),u=Uy(u),c=Uy(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=b+x+u,T=b+y+c,R=Py(r,r.VERTEX_SHADER,L),D=Py(r,r.FRAGMENT_SHADER,T);r.attachShader(E,R),r.attachShader(E,D),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(z){if(s.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",Q=r.getShaderInfoLog(R)||"",ee=r.getShaderInfoLog(D)||"",Y=B.trim(),J=Q.trim(),H=ee.trim();let G=!0,te=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,E,R,D);else{const U=Ly(r,R,"vertex"),k=Ly(r,D,"fragment");Wt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+U+`
`+k)}else Y!==""?vt("WebGLProgram: Program Info Log:",Y):(J===""||H==="")&&(te=!1);te&&(z.diagnostics={runnable:G,programLog:Y,vertexShader:{log:J,prefix:x},fragmentShader:{log:H,prefix:y}})}r.deleteShader(R),r.deleteShader(D),w=new pd(r,E),N=c2(r,E)}let w;this.getUniforms=function(){return w===void 0&&P(this),w};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(E,e2)),F},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=D,this}let A2=0;class b2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new C2(e),t.set(e,n)),n}}class C2{constructor(e){this.id=A2++,this.code=e,this.usedTimes=0}}function R2(s){return s===wa||s===Ad||s===bd}function P2(s,e,t,n,r,a){const u=new PM,c=new b2,d=new Set,h=[],p=new Map,v=n.logarithmicDepthBuffer;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function E(w,N,F,z,B,Q){const ee=z.fog,Y=B.geometry,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,H=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,G=e.get(w.envMap||J,H),te=G&&G.mapping===Fd?G.image.height:null,U=_[w.type];w.precision!==null&&(m=n.getMaxPrecision(w.precision),m!==w.precision&&vt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const k=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Z=k!==void 0?k.length:0;let Be=0;Y.morphAttributes.position!==void 0&&(Be=1),Y.morphAttributes.normal!==void 0&&(Be=2),Y.morphAttributes.color!==void 0&&(Be=3);let ze,Ve,se,ve;if(U){const ye=ss[U];ze=ye.vertexShader,Ve=ye.fragmentShader}else{ze=w.vertexShader,Ve=w.fragmentShader;const ye=c.getVertexShaderStage(w),st=c.getFragmentShaderStage(w);c.update(w,ye,st),se=ye.id,ve=st.id}const he=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),je=B.isInstancedMesh===!0,Xe=B.isBatchedMesh===!0,At=!!w.map,Ge=!!w.matcap,ct=!!G,_t=!!w.aoMap,gt=!!w.lightMap,le=!!w.bumpMap&&w.wireframe===!1,Ft=!!w.normalMap,Xt=!!w.displacementMap,Yt=!!w.emissiveMap,ft=!!w.metalnessMap,Vt=!!w.roughnessMap,q=w.anisotropy>0,cn=w.clearcoat>0,pt=w.dispersion>0,O=w.iridescence>0,A=w.sheen>0,j=w.transmission>0,re=q&&!!w.anisotropyMap,de=cn&&!!w.clearcoatMap,Ae=cn&&!!w.clearcoatNormalMap,we=cn&&!!w.clearcoatRoughnessMap,pe=O&&!!w.iridescenceMap,ge=O&&!!w.iridescenceThicknessMap,Fe=A&&!!w.sheenColorMap,$e=A&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Pe=!!w.specularColorMap,be=!!w.specularIntensityMap,et=j&&!!w.transmissionMap,it=j&&!!w.thicknessMap,W=!!w.gradientMap,Re=!!w.alphaMap,_e=w.alphaTest>0,Ue=!!w.alphaHash,ke=!!w.extensions;let xe=ds;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(xe=s.toneMapping);const Se={shaderID:U,shaderType:w.type,shaderName:w.name,vertexShader:ze,fragmentShader:Ve,defines:w.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Xe,batchingColor:Xe&&B._colorsTexture!==null,instancing:je,instancingColor:je&&B.instanceColor!==null,instancingMorph:je&&B.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:At,matcap:Ge,envMap:ct,envMapMode:ct&&G.mapping,envMapCubeUVHeight:te,aoMap:_t,lightMap:gt,bumpMap:le,normalMap:Ft,displacementMap:Xt,emissiveMap:Yt,normalMapObjectSpace:Ft&&w.normalMapType===fA,normalMapTangentSpace:Ft&&w.normalMapType===Cg,packedNormalMap:Ft&&w.normalMapType===Cg&&R2(w.normalMap.format),metalnessMap:ft,roughnessMap:Vt,anisotropy:q,anisotropyMap:re,clearcoat:cn,clearcoatMap:de,clearcoatNormalMap:Ae,clearcoatRoughnessMap:we,dispersion:pt,iridescence:O,iridescenceMap:pe,iridescenceThicknessMap:ge,sheen:A,sheenColorMap:Fe,sheenRoughnessMap:$e,specularMap:Ie,specularColorMap:Pe,specularIntensityMap:be,transmission:j,transmissionMap:et,thicknessMap:it,gradientMap:W,opaque:w.transparent===!1&&w.blending===Tl&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:_e,alphaHash:Ue,combine:w.combine,mapUv:At&&M(w.map.channel),aoMapUv:_t&&M(w.aoMap.channel),lightMapUv:gt&&M(w.lightMap.channel),bumpMapUv:le&&M(w.bumpMap.channel),normalMapUv:Ft&&M(w.normalMap.channel),displacementMapUv:Xt&&M(w.displacementMap.channel),emissiveMapUv:Yt&&M(w.emissiveMap.channel),metalnessMapUv:ft&&M(w.metalnessMap.channel),roughnessMapUv:Vt&&M(w.roughnessMap.channel),anisotropyMapUv:re&&M(w.anisotropyMap.channel),clearcoatMapUv:de&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(w.sheenRoughnessMap.channel),specularMapUv:Ie&&M(w.specularMap.channel),specularColorMapUv:Pe&&M(w.specularColorMap.channel),specularIntensityMapUv:be&&M(w.specularIntensityMap.channel),transmissionMapUv:et&&M(w.transmissionMap.channel),thicknessMapUv:it&&M(w.thicknessMap.channel),alphaMapUv:Re&&M(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ft||q),vertexNormals:!!Y.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Y.attributes.uv&&(At||Re),fog:!!ee,useFog:w.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||Y.attributes.normal===void 0&&Ft===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Be,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:xe,decodeVideoTexture:At&&w.map.isVideoTexture===!0&&Ot.getTransfer(w.map.colorSpace)===nn,decodeVideoTextureEmissive:Yt&&w.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(w.emissiveMap.colorSpace)===nn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Is,flipSided:w.side===Ji,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Se.vertexUv1s=d.has(1),Se.vertexUv2s=d.has(2),Se.vertexUv3s=d.has(3),d.clear(),Se}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)N.push(F),N.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(y(N,w),b(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function y(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function b(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),N.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function L(w){const N=_[w.type];let F;if(N){const z=ss[N];F=KA.clone(z.uniforms)}else F=w.uniforms;return F}function T(w,N){let F=p.get(N);return F!==void 0?++F.usedTimes:(F=new T2(s,N,w,r),h.push(F),p.set(N,F)),F}function R(w){if(--w.usedTimes===0){const N=h.indexOf(w);h[N]=h[h.length-1],h.pop(),p.delete(w.cacheKey),w.destroy()}}function D(w){c.remove(w)}function P(){c.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:L,acquireProgram:T,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:P}}function D2(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let c=s.get(u);return c===void 0&&(c={},s.set(u,c)),c}function n(u){s.delete(u)}function r(u,c,d){s.get(u)[c]=d}function a(){s=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function L2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Oy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ky(){const s=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function u(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function c(m,_,M,E,x,y){let b=s[e];return b===void 0?(b={id:m.id,object:m,geometry:_,material:M,materialVariant:u(m),groupOrder:E,renderOrder:m.renderOrder,z:x,group:y},s[e]=b):(b.id=m.id,b.object=m,b.geometry=_,b.material=M,b.materialVariant=u(m),b.groupOrder=E,b.renderOrder=m.renderOrder,b.z=x,b.group=y),e++,b}function d(m,_,M,E,x,y){const b=c(m,_,M,E,x,y);M.transmission>0?n.push(b):M.transparent===!0?r.push(b):t.push(b)}function h(m,_,M,E,x,y){const b=c(m,_,M,E,x,y);M.transmission>0?n.unshift(b):M.transparent===!0?r.unshift(b):t.unshift(b)}function p(m,_,M){t.length>1&&t.sort(m||L2),n.length>1&&n.sort(_||Oy),r.length>1&&r.sort(_||Oy),M&&(t.reverse(),n.reverse(),r.reverse())}function v(){for(let m=e,_=s.length;m<_;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:d,unshift:h,finish:v,sort:p}}function N2(){let s=new WeakMap;function e(n,r){const a=s.get(n);let u;return a===void 0?(u=new ky,s.set(n,[u])):r>=a.length?(u=new ky,a.push(u)):u=a[r],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function I2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Ut};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function U2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let F2=0;function O2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function k2(s){const e=new I2,t=U2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new ie);const r=new ie,a=new bn,u=new bn;function c(h){let p=0,v=0,m=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let _=0,M=0,E=0,x=0,y=0,b=0,L=0,T=0,R=0,D=0,P=0;h.sort(O2);for(let N=0,F=h.length;N<F;N++){const z=h[N],B=z.color,Q=z.intensity,ee=z.distance;let Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===wa?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)p+=B.r*Q,v+=B.g*Q,m+=B.b*Q;else if(z.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(z.sh.coefficients[J],Q);P++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const H=z.shadow,G=t.get(z);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[_]=G,n.directionalShadowMap[_]=Y,n.directionalShadowMatrix[_]=z.shadow.matrix,b++}n.directional[_]=J,_++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy(B).multiplyScalar(Q),J.distance=ee,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,n.spot[E]=J;const H=z.shadow;if(z.map&&(n.spotLightMap[R]=z.map,R++,H.updateMatrices(z),z.castShadow&&D++),n.spotLightMatrix[E]=H.matrix,z.castShadow){const G=t.get(z);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[E]=G,n.spotShadowMap[E]=Y,T++}E++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy(B).multiplyScalar(Q),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),n.rectArea[x]=J,x++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const H=z.shadow,G=t.get(z);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[M]=G,n.pointShadowMap[M]=Y,n.pointShadowMatrix[M]=z.shadow.matrix,L++}n.point[M]=J,M++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(Q),J.groundColor.copy(z.groundColor).multiplyScalar(Q),n.hemi[y]=J,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=m;const w=n.hash;(w.directionalLength!==_||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==x||w.hemiLength!==y||w.numDirectionalShadows!==b||w.numPointShadows!==L||w.numSpotShadows!==T||w.numSpotMaps!==R||w.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=x,n.point.length=M,n.hemi.length=y,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=T+R-D,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,w.directionalLength=_,w.pointLength=M,w.spotLength=E,w.rectAreaLength=x,w.hemiLength=y,w.numDirectionalShadows=b,w.numPointShadows=L,w.numSpotShadows=T,w.numSpotMaps=R,w.numLightProbes=P,n.version=F2++)}function d(h,p){let v=0,m=0,_=0,M=0,E=0;const x=p.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){const L=h[y];if(L.isDirectionalLight){const T=n.directional[v];T.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),v++}else if(L.isSpotLight){const T=n.spot[_];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(x),_++}else if(L.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(x),u.identity(),a.copy(L.matrixWorld),a.premultiply(x),u.extractRotation(a),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),M++}else if(L.isPointLight){const T=n.point[m];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(x),m++}else if(L.isHemisphereLight){const T=n.hemi[E];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(x),E++}}}return{setup:c,setupView:d,state:n}}function By(s){const e=new k2(s),t=[],n=[],r=[];function a(m){v.camera=m,t.length=0,n.length=0,r.length=0}function u(m){t.push(m)}function c(m){n.push(m)}function d(m){r.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c,pushLightProbeGrid:d}}function B2(s){let e=new WeakMap;function t(r,a=0){const u=e.get(r);let c;return u===void 0?(c=new By(s),e.set(r,[c])):a>=u.length?(c=new By(s),u.push(c)):c=u[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H2=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],G2=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],zy=new bn,Ru=new ie,pm=new ie;function W2(s,e,t){let n=new __;const r=new zt,a=new zt,u=new An,c=new JA,d=new eb,h={},p=t.maxTextureSize,v={[Io]:Ji,[Ji]:Io,[Is]:Is},m=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:z2,fragmentShader:V2}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new Ui;M.setAttribute("position",new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new fi(M,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let y=this.type;this.render=function(D,P,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===HT&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ud);const N=s.getRenderTarget(),F=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ks),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Q=y!==this.type;Q&&P.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(Y=>Y.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,Y=D.length;ee<Y;ee++){const J=D[ee],H=J.shadow;if(H===void 0){vt("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const G=H.getFrameExtents();r.multiply(G),a.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/G.x),r.x=a.x*G.x,H.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/G.y),r.y=a.y*G.y,H.mapSize.y=a.y));const te=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||Q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ku){if(J.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new hs(r.x,r.y,{format:wa,type:Hs,minFilter:Ei,magFilter:Ei,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new Fl(r.x,r.y,us),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Gs,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=li,H.map.depthTexture.magFilter=li}else J.isPointLight?(H.map=new XM(r.x),H.map.depthTexture=new qA(r.x,ms)):(H.map=new hs(r.x,r.y),H.map.depthTexture=new Fl(r.x,r.y,ms)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Gs,this.type===ud?(H.map.depthTexture.compareFunction=te?p_:h_,H.map.depthTexture.minFilter=Ei,H.map.depthTexture.magFilter=Ei):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=li,H.map.depthTexture.magFilter=li);H.camera.updateProjectionMatrix()}const U=H.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<U;k++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,k),s.clear();else{k===0&&(s.setRenderTarget(H.map),s.clear());const Z=H.getViewport(k);u.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),B.viewport(u)}if(J.isPointLight){const Z=H.camera,Be=H.matrix,ze=J.distance||Z.far;ze!==Z.far&&(Z.far=ze,Z.updateProjectionMatrix()),Ru.setFromMatrixPosition(J.matrixWorld),Z.position.copy(Ru),pm.copy(Z.position),pm.add(H2[k]),Z.up.copy(G2[k]),Z.lookAt(pm),Z.updateMatrixWorld(),Be.makeTranslation(-Ru.x,-Ru.y,-Ru.z),zy.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(zy,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(J);n=H.getFrustum(),T(P,w,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===ku&&b(H,w),H.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(N,F,z)};function b(D,P){const w=e.update(E);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,_.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new hs(r.x,r.y,{format:wa,type:Hs})),m.uniforms.shadow_pass.value=D.map.depthTexture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(P,null,w,m,E,null),_.uniforms.shadow_pass.value=D.mapPass.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(P,null,w,_,E,null)}function L(D,P,w,N){let F=null;const z=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)F=z;else if(F=w.isPointLight===!0?d:c,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=F.uuid,Q=P.uuid;let ee=h[B];ee===void 0&&(ee={},h[B]=ee);let Y=ee[Q];Y===void 0&&(Y=F.clone(),ee[Q]=Y,P.addEventListener("dispose",R)),F=Y}if(F.visible=P.visible,F.wireframe=P.wireframe,N===ku?F.side=P.shadowSide!==null?P.shadowSide:P.side:F.side=P.shadowSide!==null?P.shadowSide:v[P.side],F.alphaMap=P.alphaMap,F.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,F.map=P.map,F.clipShadows=P.clipShadows,F.clippingPlanes=P.clippingPlanes,F.clipIntersection=P.clipIntersection,F.displacementMap=P.displacementMap,F.displacementScale=P.displacementScale,F.displacementBias=P.displacementBias,F.wireframeLinewidth=P.wireframeLinewidth,F.linewidth=P.linewidth,w.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const B=s.properties.get(F);B.light=w}return F}function T(D,P,w,N,F){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&F===ku)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const Q=e.update(D),ee=D.material;if(Array.isArray(ee)){const Y=Q.groups;for(let J=0,H=Y.length;J<H;J++){const G=Y[J],te=ee[G.materialIndex];if(te&&te.visible){const U=L(D,te,N,F);D.onBeforeShadow(s,D,P,w,Q,U,G),s.renderBufferDirect(w,null,Q,U,D,G),D.onAfterShadow(s,D,P,w,Q,U,G)}}}else if(ee.visible){const Y=L(D,ee,N,F);D.onBeforeShadow(s,D,P,w,Q,Y,null),s.renderBufferDirect(w,null,Q,Y,D,null),D.onAfterShadow(s,D,P,w,Q,Y,null)}}const B=D.children;for(let Q=0,ee=B.length;Q<ee;Q++)T(B[Q],P,w,N,F)}function R(D){D.target.removeEventListener("dispose",R);for(const w in h){const N=h[w],F=D.target.uuid;F in N&&(N[F].dispose(),delete N[F])}}}function X2(s,e){function t(){let W=!1;const Re=new An;let _e=null;const Ue=new An(0,0,0,0);return{setMask:function(ke){_e!==ke&&!W&&(s.colorMask(ke,ke,ke,ke),_e=ke)},setLocked:function(ke){W=ke},setClear:function(ke,xe,Se,ye,st){st===!0&&(ke*=ye,xe*=ye,Se*=ye),Re.set(ke,xe,Se,ye),Ue.equals(Re)===!1&&(s.clearColor(ke,xe,Se,ye),Ue.copy(Re))},reset:function(){W=!1,_e=null,Ue.set(-1,0,0,0)}}}function n(){let W=!1,Re=!1,_e=null,Ue=null,ke=null;return{setReversed:function(xe){if(Re!==xe){const Se=e.get("EXT_clip_control");xe?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),Re=xe;const ye=ke;ke=null,this.setClear(ye)}},getReversed:function(){return Re},setTest:function(xe){xe?he(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(xe){_e!==xe&&!W&&(s.depthMask(xe),_e=xe)},setFunc:function(xe){if(Re&&(xe=SA[xe]),Ue!==xe){switch(xe){case Gm:s.depthFunc(s.NEVER);break;case Wm:s.depthFunc(s.ALWAYS);break;case Xm:s.depthFunc(s.LESS);break;case Il:s.depthFunc(s.LEQUAL);break;case Ym:s.depthFunc(s.EQUAL);break;case qm:s.depthFunc(s.GEQUAL);break;case $m:s.depthFunc(s.GREATER);break;case Km:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=xe}},setLocked:function(xe){W=xe},setClear:function(xe){ke!==xe&&(ke=xe,Re&&(xe=1-xe),s.clearDepth(xe))},reset:function(){W=!1,_e=null,Ue=null,ke=null,Re=!1}}}function r(){let W=!1,Re=null,_e=null,Ue=null,ke=null,xe=null,Se=null,ye=null,st=null;return{setTest:function(Me){W||(Me?he(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Me){Re!==Me&&!W&&(s.stencilMask(Me),Re=Me)},setFunc:function(Me,ot,Ze){(_e!==Me||Ue!==ot||ke!==Ze)&&(s.stencilFunc(Me,ot,Ze),_e=Me,Ue=ot,ke=Ze)},setOp:function(Me,ot,Ze){(xe!==Me||Se!==ot||ye!==Ze)&&(s.stencilOp(Me,ot,Ze),xe=Me,Se=ot,ye=Ze)},setLocked:function(Me){W=Me},setClear:function(Me){st!==Me&&(s.clearStencil(Me),st=Me)},reset:function(){W=!1,Re=null,_e=null,Ue=null,ke=null,xe=null,Se=null,ye=null,st=null}}}const a=new t,u=new n,c=new r,d=new WeakMap,h=new WeakMap;let p={},v={},m={},_=new WeakMap,M=[],E=null,x=!1,y=null,b=null,L=null,T=null,R=null,D=null,P=null,w=new Ut(0,0,0),N=0,F=!1,z=null,B=null,Q=null,ee=null,Y=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,G=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=G>=1):te.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=G>=2);let U=null,k={};const Z=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),ze=new An().fromArray(Z),Ve=new An().fromArray(Be);function se(W,Re,_e,Ue){const ke=new Uint8Array(4),xe=s.createTexture();s.bindTexture(W,xe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Se=0;Se<_e;Se++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Re+Se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return xe}const ve={};ve[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),c.setClear(0),he(s.DEPTH_TEST),u.setFunc(Il),le(!1),Ft(zx),he(s.CULL_FACE),_t(ks);function he(W){p[W]!==!0&&(s.enable(W),p[W]=!0)}function Ne(W){p[W]!==!1&&(s.disable(W),p[W]=!1)}function je(W,Re){return m[W]!==Re?(s.bindFramebuffer(W,Re),m[W]=Re,W===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=Re),W===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Xe(W,Re){let _e=M,Ue=!1;if(W){_e=_.get(Re),_e===void 0&&(_e=[],_.set(Re,_e));const ke=W.textures;if(_e.length!==ke.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,Se=ke.length;xe<Se;xe++)_e[xe]=s.COLOR_ATTACHMENT0+xe;_e.length=ke.length,Ue=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(_e)}function At(W){return E!==W?(s.useProgram(W),E=W,!0):!1}const Ge={[oa]:s.FUNC_ADD,[WT]:s.FUNC_SUBTRACT,[XT]:s.FUNC_REVERSE_SUBTRACT};Ge[YT]=s.MIN,Ge[qT]=s.MAX;const ct={[$T]:s.ZERO,[KT]:s.ONE,[jT]:s.SRC_COLOR,[Vm]:s.SRC_ALPHA,[nA]:s.SRC_ALPHA_SATURATE,[eA]:s.DST_COLOR,[QT]:s.DST_ALPHA,[ZT]:s.ONE_MINUS_SRC_COLOR,[Hm]:s.ONE_MINUS_SRC_ALPHA,[tA]:s.ONE_MINUS_DST_COLOR,[JT]:s.ONE_MINUS_DST_ALPHA,[iA]:s.CONSTANT_COLOR,[rA]:s.ONE_MINUS_CONSTANT_COLOR,[sA]:s.CONSTANT_ALPHA,[oA]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(W,Re,_e,Ue,ke,xe,Se,ye,st,Me){if(W===ks){x===!0&&(Ne(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),W!==GT){if(W!==y||Me!==F){if((b!==oa||R!==oa)&&(s.blendEquation(s.FUNC_ADD),b=oa,R=oa),Me)switch(W){case Tl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFunc(s.ONE,s.ONE);break;case Vx:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hx:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Tl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vx:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hx:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",W);break}L=null,T=null,D=null,P=null,w.set(0,0,0),N=0,y=W,F=Me}return}ke=ke||Re,xe=xe||_e,Se=Se||Ue,(Re!==b||ke!==R)&&(s.blendEquationSeparate(Ge[Re],Ge[ke]),b=Re,R=ke),(_e!==L||Ue!==T||xe!==D||Se!==P)&&(s.blendFuncSeparate(ct[_e],ct[Ue],ct[xe],ct[Se]),L=_e,T=Ue,D=xe,P=Se),(ye.equals(w)===!1||st!==N)&&(s.blendColor(ye.r,ye.g,ye.b,st),w.copy(ye),N=st),y=W,F=!1}function gt(W,Re){W.side===Is?Ne(s.CULL_FACE):he(s.CULL_FACE);let _e=W.side===Ji;Re&&(_e=!_e),le(_e),W.blending===Tl&&W.transparent===!1?_t(ks):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ue=W.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Yt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){z!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),z=W)}function Ft(W){W!==zT?(he(s.CULL_FACE),W!==B&&(W===zx?s.cullFace(s.BACK):W===VT?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),B=W}function Xt(W){W!==Q&&(H&&s.lineWidth(W),Q=W)}function Yt(W,Re,_e){W?(he(s.POLYGON_OFFSET_FILL),(ee!==Re||Y!==_e)&&(ee=Re,Y=_e,u.getReversed()&&(Re=-Re),s.polygonOffset(Re,_e))):Ne(s.POLYGON_OFFSET_FILL)}function ft(W){W?he(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function Vt(W){W===void 0&&(W=s.TEXTURE0+J-1),U!==W&&(s.activeTexture(W),U=W)}function q(W,Re,_e){_e===void 0&&(U===null?_e=s.TEXTURE0+J-1:_e=U);let Ue=k[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},k[_e]=Ue),(Ue.type!==W||Ue.texture!==Re)&&(U!==_e&&(s.activeTexture(_e),U=_e),s.bindTexture(W,Re||ve[W]),Ue.type=W,Ue.texture=Re)}function cn(){const W=k[U];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pt(){try{s.compressedTexImage2D(...arguments)}catch(W){Wt("WebGLState:",W)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(W){Wt("WebGLState:",W)}}function A(){try{s.texSubImage2D(...arguments)}catch(W){Wt("WebGLState:",W)}}function j(){try{s.texSubImage3D(...arguments)}catch(W){Wt("WebGLState:",W)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Wt("WebGLState:",W)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Wt("WebGLState:",W)}}function Ae(){try{s.texStorage2D(...arguments)}catch(W){Wt("WebGLState:",W)}}function we(){try{s.texStorage3D(...arguments)}catch(W){Wt("WebGLState:",W)}}function pe(){try{s.texImage2D(...arguments)}catch(W){Wt("WebGLState:",W)}}function ge(){try{s.texImage3D(...arguments)}catch(W){Wt("WebGLState:",W)}}function Fe(W){return v[W]!==void 0?v[W]:s.getParameter(W)}function $e(W,Re){v[W]!==Re&&(s.pixelStorei(W,Re),v[W]=Re)}function Ie(W){ze.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ze.copy(W))}function Pe(W){Ve.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ve.copy(W))}function be(W,Re){let _e=h.get(Re);_e===void 0&&(_e=new WeakMap,h.set(Re,_e));let Ue=_e.get(W);Ue===void 0&&(Ue=s.getUniformBlockIndex(Re,W.name),_e.set(W,Ue))}function et(W,Re){const Ue=h.get(Re).get(W);d.get(Re)!==Ue&&(s.uniformBlockBinding(Re,Ue,W.__bindingPointIndex),d.set(Re,Ue))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),p={},v={},U=null,k={},m={},_=new WeakMap,M=[],E=null,x=!1,y=null,b=null,L=null,T=null,R=null,D=null,P=null,w=new Ut(0,0,0),N=0,F=!1,z=null,B=null,Q=null,ee=null,Y=null,ze.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),a.reset(),u.reset(),c.reset()}return{buffers:{color:a,depth:u,stencil:c},enable:he,disable:Ne,bindFramebuffer:je,drawBuffers:Xe,useProgram:At,setBlending:_t,setMaterial:gt,setFlipSided:le,setCullFace:Ft,setLineWidth:Xt,setPolygonOffset:Yt,setScissorTest:ft,activeTexture:Vt,bindTexture:q,unbindTexture:cn,compressedTexImage2D:pt,compressedTexImage3D:O,texImage2D:pe,texImage3D:ge,pixelStorei:$e,getParameter:Fe,updateUBOMapping:be,uniformBlockBinding:et,texStorage2D:Ae,texStorage3D:we,texSubImage2D:A,texSubImage3D:j,compressedTexSubImage2D:re,compressedTexSubImage3D:de,scissor:Ie,viewport:Pe,reset:it}}function Y2(s,e,t,n,r,a,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new zt,p=new WeakMap,v=new Set;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,A){return M?new OffscreenCanvas(O,A):Pd("canvas")}function x(O,A,j){let re=1;const de=pt(O);if((de.width>j||de.height>j)&&(re=j/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ae=Math.floor(re*de.width),we=Math.floor(re*de.height);m===void 0&&(m=E(Ae,we));const pe=A?E(Ae,we):m;return pe.width=Ae,pe.height=we,pe.getContext("2d").drawImage(O,0,0,Ae,we),vt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Ae+"x"+we+")."),pe}else return"data"in O&&vt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function y(O){return O.generateMipmaps}function b(O){s.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(O,A,j,re,de,Ae=!1){if(O!==null){if(s[O]!==void 0)return s[O];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let we;re&&(we=e.get("EXT_texture_norm16"),we||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=A;if(A===s.RED&&(j===s.FLOAT&&(pe=s.R32F),j===s.HALF_FLOAT&&(pe=s.R16F),j===s.UNSIGNED_BYTE&&(pe=s.R8),j===s.UNSIGNED_SHORT&&we&&(pe=we.R16_EXT),j===s.SHORT&&we&&(pe=we.R16_SNORM_EXT)),A===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.R8UI),j===s.UNSIGNED_SHORT&&(pe=s.R16UI),j===s.UNSIGNED_INT&&(pe=s.R32UI),j===s.BYTE&&(pe=s.R8I),j===s.SHORT&&(pe=s.R16I),j===s.INT&&(pe=s.R32I)),A===s.RG&&(j===s.FLOAT&&(pe=s.RG32F),j===s.HALF_FLOAT&&(pe=s.RG16F),j===s.UNSIGNED_BYTE&&(pe=s.RG8),j===s.UNSIGNED_SHORT&&we&&(pe=we.RG16_EXT),j===s.SHORT&&we&&(pe=we.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RG8UI),j===s.UNSIGNED_SHORT&&(pe=s.RG16UI),j===s.UNSIGNED_INT&&(pe=s.RG32UI),j===s.BYTE&&(pe=s.RG8I),j===s.SHORT&&(pe=s.RG16I),j===s.INT&&(pe=s.RG32I)),A===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),j===s.UNSIGNED_INT&&(pe=s.RGB32UI),j===s.BYTE&&(pe=s.RGB8I),j===s.SHORT&&(pe=s.RGB16I),j===s.INT&&(pe=s.RGB32I)),A===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),j===s.UNSIGNED_INT&&(pe=s.RGBA32UI),j===s.BYTE&&(pe=s.RGBA8I),j===s.SHORT&&(pe=s.RGBA16I),j===s.INT&&(pe=s.RGBA32I)),A===s.RGB&&(j===s.UNSIGNED_SHORT&&we&&(pe=we.RGB16_EXT),j===s.SHORT&&we&&(pe=we.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),A===s.RGBA){const ge=Ae?Rd:Ot.getTransfer(de);j===s.FLOAT&&(pe=s.RGBA32F),j===s.HALF_FLOAT&&(pe=s.RGBA16F),j===s.UNSIGNED_BYTE&&(pe=ge===nn?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&we&&(pe=we.RGBA16_EXT),j===s.SHORT&&we&&(pe=we.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function R(O,A){let j;return O?A===null||A===ms||A===uc?j=s.DEPTH24_STENCIL8:A===us?j=s.DEPTH32F_STENCIL8:A===lc&&(j=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ms||A===uc?j=s.DEPTH_COMPONENT24:A===us?j=s.DEPTH_COMPONENT32F:A===lc&&(j=s.DEPTH_COMPONENT16),j}function D(O,A){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==li&&O.minFilter!==Ei?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function P(O){const A=O.target;A.removeEventListener("dispose",P),N(A),A.isVideoTexture&&p.delete(A),A.isHTMLTexture&&v.delete(A)}function w(O){const A=O.target;A.removeEventListener("dispose",w),z(A)}function N(O){const A=n.get(O);if(A.__webglInit===void 0)return;const j=O.source,re=_.get(j);if(re){const de=re[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&F(O),Object.keys(re).length===0&&_.delete(j)}n.remove(O)}function F(O){const A=n.get(O);s.deleteTexture(A.__webglTexture);const j=O.source,re=_.get(j);delete re[A.__cacheKey],u.memory.textures--}function z(O){const A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let de=0;de<A.__webglFramebuffer[re].length;de++)s.deleteFramebuffer(A.__webglFramebuffer[re][de]);else s.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)s.deleteFramebuffer(A.__webglFramebuffer[re]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=O.textures;for(let re=0,de=j.length;re<de;re++){const Ae=n.get(j[re]);Ae.__webglTexture&&(s.deleteTexture(Ae.__webglTexture),u.memory.textures--),n.remove(j[re])}n.remove(O)}let B=0;function Q(){B=0}function ee(){return B}function Y(O){B=O}function J(){const O=B;return O>=r.maxTextures&&vt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),B+=1,O}function H(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function G(O,A){const j=n.get(O);if(O.isVideoTexture&&q(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){const re=O.image;if(re===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(j,O,A);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+A)}function te(O,A){const j=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Ne(j,O,A);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+A)}function U(O,A){const j=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){Ne(j,O,A);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+A)}function k(O,A){const j=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){je(j,O,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+A)}const Z={[jm]:s.REPEAT,[Fs]:s.CLAMP_TO_EDGE,[Zm]:s.MIRRORED_REPEAT},Be={[li]:s.NEAREST,[uA]:s.NEAREST_MIPMAP_NEAREST,[Pf]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Op]:s.LINEAR_MIPMAP_NEAREST,[ca]:s.LINEAR_MIPMAP_LINEAR},ze={[dA]:s.NEVER,[_A]:s.ALWAYS,[hA]:s.LESS,[h_]:s.LEQUAL,[pA]:s.EQUAL,[p_]:s.GEQUAL,[mA]:s.GREATER,[gA]:s.NOTEQUAL};function Ve(O,A){if(A.type===us&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ei||A.magFilter===Op||A.magFilter===Pf||A.magFilter===ca||A.minFilter===Ei||A.minFilter===Op||A.minFilter===Pf||A.minFilter===ca)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,Z[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,Z[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,Z[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Be[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Be[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,ze[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===li||A.minFilter!==Pf&&A.minFilter!==ca||A.type===us&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function se(O,A){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",P));const re=A.source;let de=_.get(re);de===void 0&&(de={},_.set(re,de));const Ae=H(A);if(Ae!==O.__cacheKey){de[Ae]===void 0&&(de[Ae]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,j=!0),de[Ae].usedTimes++;const we=de[O.__cacheKey];we!==void 0&&(de[O.__cacheKey].usedTimes--,we.usedTimes===0&&F(A)),O.__cacheKey=Ae,O.__webglTexture=de[Ae].texture}return j}function ve(O,A,j){return Math.floor(Math.floor(O/j)/A)}function he(O,A,j,re){const Ae=O.updateRanges;if(Ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,j,re,A.data);else{Ae.sort(($e,Ie)=>$e.start-Ie.start);let we=0;for(let $e=1;$e<Ae.length;$e++){const Ie=Ae[we],Pe=Ae[$e],be=Ie.start+Ie.count,et=ve(Pe.start,A.width,4),it=ve(Ie.start,A.width,4);Pe.start<=be+1&&et===it&&ve(Pe.start+Pe.count-1,A.width,4)===et?Ie.count=Math.max(Ie.count,Pe.start+Pe.count-Ie.start):(++we,Ae[we]=Pe)}Ae.length=we+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let $e=0,Ie=Ae.length;$e<Ie;$e++){const Pe=Ae[$e],be=Math.floor(Pe.start/4),et=Math.ceil(Pe.count/4),it=be%A.width,W=Math.floor(be/A.width),Re=et,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,it),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,it,W,Re,_e,j,re,A.data)}O.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function Ne(O,A,j){let re=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=s.TEXTURE_3D);const de=se(O,A),Ae=A.source;t.bindTexture(re,O.__webglTexture,s.TEXTURE0+j);const we=n.get(Ae);if(Ae.version!==we.__version||de===!0){if(t.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=Ot.getPrimaries(Ot.workingColorSpace),Ue=A.colorSpace===xo?null:Ot.getPrimaries(A.colorSpace),ke=A.colorSpace===xo||_e===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let ge=x(A.image,!1,r.maxTextureSize);ge=cn(A,ge);const Fe=a.convert(A.format,A.colorSpace),$e=a.convert(A.type);let Ie=T(A.internalFormat,Fe,$e,A.normalized,A.colorSpace,A.isVideoTexture);Ve(re,A);let Pe;const be=A.mipmaps,et=A.isVideoTexture!==!0,it=we.__version===void 0||de===!0,W=Ae.dataReady,Re=D(A,ge);if(A.isDepthTexture)Ie=R(A.format===fa,A.type),it&&(et?t.texStorage2D(s.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Fe,$e,null));else if(A.isDataTexture)if(be.length>0){et&&it&&t.texStorage2D(s.TEXTURE_2D,Re,Ie,be[0].width,be[0].height);for(let _e=0,Ue=be.length;_e<Ue;_e++)Pe=be[_e],et?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Fe,$e,Pe.data):t.texImage2D(s.TEXTURE_2D,_e,Ie,Pe.width,Pe.height,0,Fe,$e,Pe.data);A.generateMipmaps=!1}else et?(it&&t.texStorage2D(s.TEXTURE_2D,Re,Ie,ge.width,ge.height),W&&he(A,ge,Fe,$e)):t.texImage2D(s.TEXTURE_2D,0,Ie,ge.width,ge.height,0,Fe,$e,ge.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){et&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ie,be[0].width,be[0].height,ge.depth);for(let _e=0,Ue=be.length;_e<Ue;_e++)if(Pe=be[_e],A.format!==$r)if(Fe!==null)if(et){if(W)if(A.layerUpdates.size>0){const ke=_y(Pe.width,Pe.height,A.format,A.type);for(const xe of A.layerUpdates){const Se=Pe.data.subarray(xe*ke/Pe.data.BYTES_PER_ELEMENT,(xe+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,xe,Pe.width,Pe.height,1,Fe,Se)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ge.depth,Fe,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Ie,Pe.width,Pe.height,ge.depth,0,Pe.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,ge.depth,Fe,$e,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Ie,Pe.width,Pe.height,ge.depth,0,Fe,$e,Pe.data)}else{et&&it&&t.texStorage2D(s.TEXTURE_2D,Re,Ie,be[0].width,be[0].height);for(let _e=0,Ue=be.length;_e<Ue;_e++)Pe=be[_e],A.format!==$r?Fe!==null?et?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Fe,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Ie,Pe.width,Pe.height,0,Pe.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Fe,$e,Pe.data):t.texImage2D(s.TEXTURE_2D,_e,Ie,Pe.width,Pe.height,0,Fe,$e,Pe.data)}else if(A.isDataArrayTexture)if(et){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ie,ge.width,ge.height,ge.depth),W)if(A.layerUpdates.size>0){const _e=_y(ge.width,ge.height,A.format,A.type);for(const Ue of A.layerUpdates){const ke=ge.data.subarray(Ue*_e/ge.data.BYTES_PER_ELEMENT,(Ue+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,ge.width,ge.height,1,Fe,$e,ke)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Fe,$e,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,Fe,$e,ge.data);else if(A.isData3DTexture)et?(it&&t.texStorage3D(s.TEXTURE_3D,Re,Ie,ge.width,ge.height,ge.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Fe,$e,ge.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,Fe,$e,ge.data);else if(A.isFramebufferTexture){if(it)if(et)t.texStorage2D(s.TEXTURE_2D,Re,Ie,ge.width,ge.height);else{let _e=ge.width,Ue=ge.height;for(let ke=0;ke<Re;ke++)t.texImage2D(s.TEXTURE_2D,ke,Ie,_e,Ue,0,Fe,$e,null),_e>>=1,Ue>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),ge.parentNode!==_e){_e.appendChild(ge),v.add(A),_e.onpaint=Ue=>{const ke=Ue.changedElements;for(const xe of v)ke.includes(xe.image)&&(xe.needsUpdate=!0)},_e.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const ke=s.RGBA,xe=s.RGBA,Se=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ke,xe,Se,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(be.length>0){if(et&&it){const _e=pt(be[0]);t.texStorage2D(s.TEXTURE_2D,Re,Ie,_e.width,_e.height)}for(let _e=0,Ue=be.length;_e<Ue;_e++)Pe=be[_e],et?W&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Fe,$e,Pe):t.texImage2D(s.TEXTURE_2D,_e,Ie,Fe,$e,Pe);A.generateMipmaps=!1}else if(et){if(it){const _e=pt(ge);t.texStorage2D(s.TEXTURE_2D,Re,Ie,_e.width,_e.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,$e,ge)}else t.texImage2D(s.TEXTURE_2D,0,Ie,Fe,$e,ge);y(A)&&b(re),we.__version=Ae.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function je(O,A,j){if(A.image.length!==6)return;const re=se(O,A),de=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+j);const Ae=n.get(de);if(de.version!==Ae.__version||re===!0){t.activeTexture(s.TEXTURE0+j);const we=Ot.getPrimaries(Ot.workingColorSpace),pe=A.colorSpace===xo?null:Ot.getPrimaries(A.colorSpace),ge=A.colorSpace===xo||we===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=A.isCompressedTexture||A.image[0].isCompressedTexture,$e=A.image[0]&&A.image[0].isDataTexture,Ie=[];for(let xe=0;xe<6;xe++)!Fe&&!$e?Ie[xe]=x(A.image[xe],!0,r.maxCubemapSize):Ie[xe]=$e?A.image[xe].image:A.image[xe],Ie[xe]=cn(A,Ie[xe]);const Pe=Ie[0],be=a.convert(A.format,A.colorSpace),et=a.convert(A.type),it=T(A.internalFormat,be,et,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,Re=Ae.__version===void 0||re===!0,_e=de.dataReady;let Ue=D(A,Pe);Ve(s.TEXTURE_CUBE_MAP,A);let ke;if(Fe){W&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,it,Pe.width,Pe.height);for(let xe=0;xe<6;xe++){ke=Ie[xe].mipmaps;for(let Se=0;Se<ke.length;Se++){const ye=ke[Se];A.format!==$r?be!==null?W?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se,it,ye.width,ye.height,0,ye.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se,0,0,ye.width,ye.height,be,et,ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se,it,ye.width,ye.height,0,be,et,ye.data)}}}else{if(ke=A.mipmaps,W&&Re){ke.length>0&&Ue++;const xe=pt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,it,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if($e){W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ie[xe].width,Ie[xe].height,be,et,Ie[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,Ie[xe].width,Ie[xe].height,0,be,et,Ie[xe].data);for(let Se=0;Se<ke.length;Se++){const st=ke[Se].image[xe].image;W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se+1,0,0,st.width,st.height,be,et,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se+1,it,st.width,st.height,0,be,et,st.data)}}else{W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,be,et,Ie[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,it,be,et,Ie[xe]);for(let Se=0;Se<ke.length;Se++){const ye=ke[Se];W?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se+1,0,0,be,et,ye.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se+1,it,be,et,ye.image[xe])}}}y(A)&&b(s.TEXTURE_CUBE_MAP),Ae.__version=de.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Xe(O,A,j,re,de,Ae){const we=a.convert(j.format,j.colorSpace),pe=a.convert(j.type),ge=T(j.internalFormat,we,pe,j.normalized,j.colorSpace),Fe=n.get(A),$e=n.get(j);if($e.__renderTarget=A,!Fe.__hasExternalTextures){const Ie=Math.max(1,A.width>>Ae),Pe=Math.max(1,A.height>>Ae);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Ae,ge,Ie,Pe,A.depth,0,we,pe,null):t.texImage2D(de,Ae,ge,Ie,Pe,0,we,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),Vt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,de,$e.__webglTexture,0,ft(A)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,de,$e.__webglTexture,Ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(O,A,j){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer){const re=A.depthTexture,de=re&&re.isDepthTexture?re.type:null,Ae=R(A.stencilBuffer,de),we=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(A),Ae,A.width,A.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(A),Ae,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ae,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,O)}else{const re=A.textures;for(let de=0;de<re.length;de++){const Ae=re[de],we=a.convert(Ae.format,Ae.colorSpace),pe=a.convert(Ae.type),ge=T(Ae.internalFormat,we,pe,Ae.normalized,Ae.colorSpace);Vt(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(A),ge,A.width,A.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(A),ge,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ge,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(O,A,j){const re=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(A.depthTexture);if(de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,A.depthTexture);const Fe=a.convert(A.depthTexture.format),$e=a.convert(A.depthTexture.type);let Ie;A.depthTexture.format===Gs?Ie=s.DEPTH_COMPONENT24:A.depthTexture.format===fa&&(Ie=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ie,A.width,A.height,0,Fe,$e,null)}}else G(A.depthTexture,0);const Ae=de.__webglTexture,we=ft(A),pe=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,ge=A.depthTexture.format===fa?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Gs)Vt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ae,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ae,0);else if(A.depthTexture.format===fa)Vt(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,pe,Ae,0,we):s.framebufferTexture2D(s.FRAMEBUFFER,ge,pe,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(O){const A=n.get(O),j=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const re=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),re){const de=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),A.__depthDisposeCallback=de}A.__boundDepthTexture=re}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let re=0;re<6;re++)Ge(A.__webglFramebuffer[re],O,re);else{const re=O.texture.mipmaps;re&&re.length>0?Ge(A.__webglFramebuffer[0],O,0):Ge(A.__webglFramebuffer,O,0)}else if(j){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]===void 0)A.__webglDepthbuffer[re]=s.createRenderbuffer(),At(A.__webglDepthbuffer[re],O,!1);else{const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ae)}}else{const re=O.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),At(A.__webglDepthbuffer,O,!1);else{const de=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(O,A,j){const re=n.get(O);A!==void 0&&Xe(re.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&ct(O)}function gt(O){const A=O.texture,j=n.get(O),re=n.get(A);O.addEventListener("dispose",w);const de=O.textures,Ae=O.isWebGLCubeRenderTarget===!0,we=de.length>1;if(we||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=A.version,u.memory.textures++),Ae){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let ge=0;ge<A.mipmaps.length;ge++)j.__webglFramebuffer[pe][ge]=s.createFramebuffer()}else j.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)j.__webglFramebuffer[pe]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if(we)for(let pe=0,ge=de.length;pe<ge;pe++){const Fe=n.get(de[pe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),u.memory.textures++)}if(O.samples>0&&Vt(O)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const ge=de[pe];j.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const Fe=a.convert(ge.format,ge.colorSpace),$e=a.convert(ge.type),Ie=T(ge.internalFormat,Fe,$e,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),Pe=ft(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ie,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),At(j.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)Xe(j.__webglFramebuffer[pe][ge],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else Xe(j.__webglFramebuffer[pe],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(A)&&b(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let pe=0,ge=de.length;pe<ge;pe++){const Fe=de[pe],$e=n.get(Fe);let Ie=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,$e.__webglTexture),Ve(Ie,Fe),Xe(j.__webglFramebuffer,O,Fe,s.COLOR_ATTACHMENT0+pe,Ie,0),y(Fe)&&b(Ie)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(pe=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),Ve(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let ge=0;ge<A.mipmaps.length;ge++)Xe(j.__webglFramebuffer[ge],O,A,s.COLOR_ATTACHMENT0,pe,ge);else Xe(j.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,pe,0);y(A)&&b(pe),t.unbindTexture()}O.depthBuffer&&ct(O)}function le(O){const A=O.textures;for(let j=0,re=A.length;j<re;j++){const de=A[j];if(y(de)){const Ae=L(O),we=n.get(de).__webglTexture;t.bindTexture(Ae,we),b(Ae),t.unbindTexture()}}}const Ft=[],Xt=[];function Yt(O){if(O.samples>0){if(Vt(O)===!1){const A=O.textures,j=O.width,re=O.height;let de=s.COLOR_BUFFER_BIT;const Ae=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,we=n.get(O),pe=A.length>1;if(pe)for(let Fe=0;Fe<A.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const ge=O.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);const $e=n.get(A[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,j,re,0,0,j,re,de,s.NEAREST),d===!0&&(Ft.length=0,Xt.length=0,Ft.push(s.COLOR_ATTACHMENT0+Fe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ft.push(Ae),Xt.push(Ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Fe=0;Fe<A.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,we.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,we.__webglColorRenderbuffer[Fe]);const $e=n.get(A[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,we.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&d){const A=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ft(O){return Math.min(r.maxSamples,O.samples)}function Vt(O){const A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function q(O){const A=u.render.frame;p.get(O)!==A&&(p.set(O,A),O.update())}function cn(O,A){const j=O.colorSpace,re=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==Cd&&j!==xo&&(Ot.getTransfer(j)===nn?(re!==$r||de!==pr)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",j)),A}function pt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=Y,this.setTexture2D=G,this.setTexture2DArray=te,this.setTexture3D=U,this.setTextureCube=k,this.rebindTextures=_t,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function q2(s,e){function t(n,r=xo){let a;const u=Ot.getTransfer(r);if(n===pr)return s.UNSIGNED_BYTE;if(n===l_)return s.UNSIGNED_SHORT_4_4_4_4;if(n===u_)return s.UNSIGNED_SHORT_5_5_5_1;if(n===EM)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wM)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===SM)return s.BYTE;if(n===MM)return s.SHORT;if(n===lc)return s.UNSIGNED_SHORT;if(n===a_)return s.INT;if(n===ms)return s.UNSIGNED_INT;if(n===us)return s.FLOAT;if(n===Hs)return s.HALF_FLOAT;if(n===TM)return s.ALPHA;if(n===AM)return s.RGB;if(n===$r)return s.RGBA;if(n===Gs)return s.DEPTH_COMPONENT;if(n===fa)return s.DEPTH_STENCIL;if(n===bM)return s.RED;if(n===c_)return s.RED_INTEGER;if(n===wa)return s.RG;if(n===f_)return s.RG_INTEGER;if(n===d_)return s.RGBA_INTEGER;if(n===cd||n===fd||n===dd||n===hd)if(u===nn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===cd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===hd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===cd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===hd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qm||n===Jm||n===eg||n===tg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Qm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ng||n===ig||n===rg||n===sg||n===og||n===Ad||n===ag)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ng||n===ig)return u===nn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===rg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===sg)return a.COMPRESSED_R11_EAC;if(n===og)return a.COMPRESSED_SIGNED_R11_EAC;if(n===Ad)return a.COMPRESSED_RG11_EAC;if(n===ag)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lg||n===ug||n===cg||n===fg||n===dg||n===hg||n===pg||n===mg||n===gg||n===_g||n===vg||n===xg||n===yg||n===Sg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===lg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ug)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_g)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sg)return u===nn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mg||n===Eg||n===wg)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Mg)return u===nn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wg)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tg||n===Ag||n===bd||n===bg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Tg)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ag)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===uc?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const $2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new kM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gs({vertexShader:$2,fragmentShader:K2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new kd(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z2 extends Aa{constructor(e,t){super();const n=this;let r=null,a=1,u=null,c="local-floor",d=1,h=null,p=null,v=null,m=null,_=null,M=null;const E=typeof XRWebGLBinding<"u",x=new j2,y={},b=t.getContextAttributes();let L=null,T=null;const R=[],D=[],P=new zt;let w=null;const N=new fr;N.viewport=new An;const F=new fr;F.viewport=new An;const z=[N,F],B=new ob;let Q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=R[se];return ve===void 0&&(ve=new Xp,R[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=R[se];return ve===void 0&&(ve=new Xp,R[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=R[se];return ve===void 0&&(ve=new Xp,R[se]=ve),ve.getHandSpace()};function Y(se){const ve=D.indexOf(se.inputSource);if(ve===-1)return;const he=R[ve];he!==void 0&&(he.update(se.inputSource,se.frame,h||u),he.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",H);for(let se=0;se<R.length;se++){const ve=D[se];ve!==null&&(D[se]=null,R[se].disconnect(ve))}Q=null,ee=null,x.reset();for(const se in y)delete y[se];e.setRenderTarget(L),_=null,m=null,v=null,r=null,T=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,n.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){c=se,n.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(r,t)),v},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",J),r.addEventListener("inputsourceschange",H),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ne=null,je=null;b.depth&&(je=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?fa:Gs,Ne=b.stencil?uc:ms);const Xe={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(Xe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new hs(m.textureWidth,m.textureHeight,{format:$r,type:pr,depthTexture:new Fl(m.textureWidth,m.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new hs(_.framebufferWidth,_.framebufferHeight,{format:$r,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await r.requestReferenceSpace(c),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(se){for(let ve=0;ve<se.removed.length;ve++){const he=se.removed[ve],Ne=D.indexOf(he);Ne>=0&&(D[Ne]=null,R[Ne].disconnect(he))}for(let ve=0;ve<se.added.length;ve++){const he=se.added[ve];let Ne=D.indexOf(he);if(Ne===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=D.length){D.push(he),Ne=Xe;break}else if(D[Xe]===null){D[Xe]=he,Ne=Xe;break}if(Ne===-1)break}const je=R[Ne];je&&je.connect(he)}}const G=new ie,te=new ie;function U(se,ve,he){G.setFromMatrixPosition(ve.matrixWorld),te.setFromMatrixPosition(he.matrixWorld);const Ne=G.distanceTo(te),je=ve.projectionMatrix.elements,Xe=he.projectionMatrix.elements,At=je[14]/(je[10]-1),Ge=je[14]/(je[10]+1),ct=(je[9]+1)/je[5],_t=(je[9]-1)/je[5],gt=(je[8]-1)/je[0],le=(Xe[8]+1)/Xe[0],Ft=At*gt,Xt=At*le,Yt=Ne/(-gt+le),ft=Yt*-gt;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ft),se.translateZ(Yt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),je[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Vt=At+Yt,q=Ge+Yt,cn=Ft-ft,pt=Xt+(Ne-ft),O=ct*Ge/q*Vt,A=_t*Ge/q*Vt;se.projectionMatrix.makePerspective(cn,pt,O,A,Vt,q),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function k(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let ve=se.near,he=se.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(he=x.depthFar)),B.near=F.near=N.near=ve,B.far=F.far=N.far=he,(Q!==B.near||ee!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),Q=B.near,ee=B.far),B.layers.mask=se.layers.mask|6,N.layers.mask=B.layers.mask&-5,F.layers.mask=B.layers.mask&-3;const Ne=se.parent,je=B.cameras;k(B,Ne);for(let Xe=0;Xe<je.length;Xe++)k(je[Xe],Ne);je.length===2?U(B,N,F):B.projectionMatrix.copy(N.projectionMatrix),Z(se,B,Ne)};function Z(se,ve,he){he===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(he.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Rg*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(se){d=se,m!==null&&(m.fixedFoveation=se),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(se){return y[se]};let Be=null;function ze(se,ve){if(p=ve.getViewerPose(h||u),M=ve,p!==null){const he=p.views;_!==null&&(e.setRenderTargetFramebuffer(T,_.framebuffer),e.setRenderTarget(T));let Ne=!1;he.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let Ge=0;Ge<he.length;Ge++){const ct=he[Ge];let _t=null;if(_!==null)_t=_.getViewport(ct);else{const le=v.getViewSubImage(m,ct);_t=le.viewport,Ge===0&&(e.setRenderTargetTextures(T,le.colorTexture,le.depthStencilTexture),e.setRenderTarget(T))}let gt=z[Ge];gt===void 0&&(gt=new fr,gt.layers.enable(Ge),gt.viewport=new An,z[Ge]=gt),gt.matrix.fromArray(ct.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ct.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(_t.x,_t.y,_t.width,_t.height),Ge===0&&(B.matrix.copy(gt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(gt)}const je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){v=n.getBinding();const Ge=v.getDepthInformation(he[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(Ge,r.renderState)}if(je&&je.includes("camera-access")&&E){e.state.unbindTexture(),v=n.getBinding();for(let Ge=0;Ge<he.length;Ge++){const ct=he[Ge].camera;if(ct){let _t=y[ct];_t||(_t=new kM,y[ct]=_t);const gt=v.getCameraImage(ct);_t.sourceTexture=gt}}}}for(let he=0;he<R.length;he++){const Ne=D[he],je=R[he];Ne!==null&&je!==void 0&&je.update(Ne,ve,h||u)}Be&&Be(se,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Ve=new GM;Ve.setAnimationLoop(ze),this.setAnimationLoop=function(se){Be=se},this.dispose=function(){}}}const Q2=new bn,jM=new Mt;jM.set(-1,0,0,0,1,0,0,0,1);function J2(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function n(x,y){y.color.getRGB(x.fogColor.value,BM(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,b,L,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?a(x,y):y.isMeshLambertMaterial?(a(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(x,y),v(x,y)):y.isMeshPhongMaterial?(a(x,y),p(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(x,y),m(x,y),y.isMeshPhysicalMaterial&&_(x,y,T)):y.isMeshMatcapMaterial?(a(x,y),M(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),E(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?d(x,y,b,L):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Ji&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Ji&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const b=e.get(y),L=b.envMap,T=b.envMapRotation;L&&(x.envMap.value=L,x.envMapRotation.value.setFromMatrix4(Q2.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(jM),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,b,L){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*b,x.scale.value=L*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function m(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function _(x,y,b){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Ji&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const b=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e3(s,e,t,n){let r={},a={},u=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,R){const D=R.program;n.uniformBlockBinding(T,D)}function h(T,R){let D=r[T.id];D===void 0&&(x(T),D=p(T),r[T.id]=D,T.addEventListener("dispose",b));const P=R.program;n.updateUBOMapping(T,P);const w=e.render.frame;a[T.id]!==w&&(m(T),a[T.id]=w)}function p(T){const R=v();T.__bindingPointIndex=R;const D=s.createBuffer(),P=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,P,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,D),D}function v(){for(let T=0;T<c;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){const R=r[T.id],D=T.uniforms,P=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let w=0,N=D.length;w<N;w++){const F=D[w];if(Array.isArray(F))for(let z=0,B=F.length;z<B;z++)_(F[z],w,z,P);else _(F,w,0,P)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(T,R,D,P){if(E(T,R,D,P)===!0){const w=T.__offset,N=T.value;if(Array.isArray(N)){let F=0;for(let z=0;z<N.length;z++){const B=N[z],Q=y(B);M(B,T.__data,F),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(F+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(N,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,T.__data)}}function M(T,R,D){typeof T=="number"||typeof T=="boolean"?R[0]=T:T.isMatrix3?(R[0]=T.elements[0],R[1]=T.elements[1],R[2]=T.elements[2],R[3]=0,R[4]=T.elements[3],R[5]=T.elements[4],R[6]=T.elements[5],R[7]=0,R[8]=T.elements[6],R[9]=T.elements[7],R[10]=T.elements[8],R[11]=0):ArrayBuffer.isView(T)?R.set(new T.constructor(T.buffer,T.byteOffset,R.length)):T.toArray(R,D)}function E(T,R,D,P){const w=T.value,N=R+"_"+D;if(P[N]===void 0)return typeof w=="number"||typeof w=="boolean"?P[N]=w:ArrayBuffer.isView(w)?P[N]=w.slice():P[N]=w.clone(),!0;{const F=P[N];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return P[N]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(F.equals(w)===!1)return F.copy(w),!0}}return!1}function x(T){const R=T.uniforms;let D=0;const P=16;for(let N=0,F=R.length;N<F;N++){const z=Array.isArray(R[N])?R[N]:[R[N]];for(let B=0,Q=z.length;B<Q;B++){const ee=z[B],Y=Array.isArray(ee.value)?ee.value:[ee.value];for(let J=0,H=Y.length;J<H;J++){const G=Y[J],te=y(G),U=D%P,k=U%te.boundary,Z=U+k;D+=k,Z!==0&&P-Z<te.storage&&(D+=P-Z),ee.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=D,D+=te.storage}}}const w=D%P;return w>0&&(D+=P-w),T.__size=D,T.__cache={},this}function y(T){const R={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(R.boundary=4,R.storage=4):T.isVector2?(R.boundary=8,R.storage=8):T.isVector3||T.isColor?(R.boundary=16,R.storage=12):T.isVector4?(R.boundary=16,R.storage=16):T.isMatrix3?(R.boundary=48,R.storage=48):T.isMatrix4?(R.boundary=64,R.storage=64):T.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(R.boundary=16,R.storage=T.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",T),R}function b(T){const R=T.target;R.removeEventListener("dispose",b);const D=u.indexOf(R.__bindingPointIndex);u.splice(D,1),s.deleteBuffer(r[R.id]),delete r[R.id],delete a[R.id]}function L(){for(const T in r)s.deleteBuffer(r[T]);u=[],r={},a={}}return{bind:d,update:h,dispose:L}}const t3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ns=null;function n3(){return ns===null&&(ns=new HA(t3,16,16,wa,Hs),ns.name="DFG_LUT",ns.minFilter=Ei,ns.magFilter=Ei,ns.wrapS=Fs,ns.wrapT=Fs,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}class i3{constructor(e={}){const{canvas:t=xA(),context:n=null,depth:r=!0,stencil:a=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:_=pr}=e;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=u;const E=_,x=new Set([d_,f_,c_]),y=new Set([pr,ms,lc,uc,l_,u_]),b=new Uint32Array(4),L=new Int32Array(4),T=new ie;let R=null,D=null;const P=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let z=!1,B=null,Q=null,ee=null,Y=null;this._outputColorSpace=Rr;let J=0,H=0,G=null,te=-1,U=null;const k=new An,Z=new An;let Be=null;const ze=new Ut(0);let Ve=0,se=t.width,ve=t.height,he=1,Ne=null,je=null;const Xe=new An(0,0,se,ve),At=new An(0,0,se,ve);let Ge=!1;const ct=new __;let _t=!1,gt=!1;const le=new bn,Ft=new ie,Xt=new An,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Vt(){return G===null?he:1}let q=n;function cn(I,K){return t.getContext(I,K)}try{const I={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${o_}`),t.addEventListener("webglcontextlost",st,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ot,!1),q===null){const K="webgl2";if(q=cn(K,I),q===null)throw cn(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(I){throw Wt("WebGLRenderer: "+I.message),I}let pt,O,A,j,re,de,Ae,we,pe,ge,Fe,$e,Ie,Pe,be,et,it,W,Re,_e,Ue,ke,xe;function Se(){pt=new nP(q),pt.init(),Ue=new q2(q,pt),O=new $R(q,pt,e,Ue),A=new X2(q,pt),O.reversedDepthBuffer&&m&&A.buffers.depth.setReversed(!0),Q=q.createFramebuffer(),ee=q.createFramebuffer(),Y=q.createFramebuffer(),j=new sP(q),re=new D2,de=new Y2(q,pt,A,re,O,Ue,j),Ae=new tP(F),we=new ub(q),ke=new YR(q,we),pe=new iP(q,we,j,ke),ge=new aP(q,pe,we,ke,j),W=new oP(q,O,de),be=new KR(re),Fe=new P2(F,Ae,pt,O,ke,be),$e=new J2(F,re),Ie=new N2,Pe=new B2(pt),it=new XR(F,Ae,A,ge,M,d),et=new W2(F,ge,O),xe=new e3(q,j,O,A),Re=new qR(q,pt,j),_e=new rP(q,pt,j),j.programs=Fe.programs,F.capabilities=O,F.extensions=pt,F.properties=re,F.renderLists=Ie,F.shadowMap=et,F.state=A,F.info=j}Se(),E!==pr&&(N=new uP(E,t.width,t.height,c,r,a));const ye=new Z2(F,q);this.xr=ye,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const I=pt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=pt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(I){I!==void 0&&(he=I,this.setSize(se,ve,!1))},this.getSize=function(I){return I.set(se,ve)},this.setSize=function(I,K,ce=!0){if(ye.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=I,ve=K,t.width=Math.floor(I*he),t.height=Math.floor(K*he),ce===!0&&(t.style.width=I+"px",t.style.height=K+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(se*he,ve*he).floor()},this.setDrawingBufferSize=function(I,K,ce){se=I,ve=K,he=ce,t.width=Math.floor(I*ce),t.height=Math.floor(K*ce),this.setViewport(0,0,I,K)},this.setEffects=function(I){if(E===pr){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let K=0;K<I.length;K++)if(I[K].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(k)},this.getViewport=function(I){return I.copy(Xe)},this.setViewport=function(I,K,ce,ne){I.isVector4?Xe.set(I.x,I.y,I.z,I.w):Xe.set(I,K,ce,ne),A.viewport(k.copy(Xe).multiplyScalar(he).round())},this.getScissor=function(I){return I.copy(At)},this.setScissor=function(I,K,ce,ne){I.isVector4?At.set(I.x,I.y,I.z,I.w):At.set(I,K,ce,ne),A.scissor(Z.copy(At).multiplyScalar(he).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(I){A.setScissorTest(Ge=I)},this.setOpaqueSort=function(I){Ne=I},this.setTransparentSort=function(I){je=I},this.getClearColor=function(I){return I.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,ce=!0){let ne=0;if(I){let oe=!1;if(G!==null){const De=G.texture.format;oe=x.has(De)}if(oe){const De=G.texture.type,He=y.has(De),Oe=it.getClearColor(),tt=it.getClearAlpha(),lt=Oe.r,yt=Oe.g,St=Oe.b;He?(b[0]=lt,b[1]=yt,b[2]=St,b[3]=tt,q.clearBufferuiv(q.COLOR,0,b)):(L[0]=lt,L[1]=yt,L[2]=St,L[3]=tt,q.clearBufferiv(q.COLOR,0,L))}else ne|=q.COLOR_BUFFER_BIT}K&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),B=I},this.dispose=function(){t.removeEventListener("webglcontextlost",st,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ot,!1),it.dispose(),Ie.dispose(),Pe.dispose(),re.dispose(),Ae.dispose(),ge.dispose(),ke.dispose(),xe.dispose(),Fe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",rn),ye.removeEventListener("sessionend",Zt),wt.stop()};function st(I){I.preventDefault(),qx("WebGLRenderer: Context Lost."),z=!0}function Me(){qx("WebGLRenderer: Context Restored."),z=!1;const I=j.autoReset,K=et.enabled,ce=et.autoUpdate,ne=et.needsUpdate,oe=et.type;Se(),j.autoReset=I,et.enabled=K,et.autoUpdate=ce,et.needsUpdate=ne,et.type=oe}function ot(I){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Ze(I){const K=I.target;K.removeEventListener("dispose",Ze),mt(K)}function mt(I){fn(I),re.remove(I)}function fn(I){const K=re.get(I).programs;K!==void 0&&(K.forEach(function(ce){Fe.releaseProgram(ce)}),I.isShaderMaterial&&Fe.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,ce,ne,oe,De){K===null&&(K=Yt);const He=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Oe=bt(I,K,ce,ne,oe);A.setMaterial(ne,He);let tt=ce.index,lt=1;if(ne.wireframe===!0){if(tt=pe.getWireframeAttribute(ce),tt===void 0)return;lt=2}const yt=ce.drawRange,St=ce.attributes.position;let rt=yt.start*lt,Ht=(yt.start+yt.count)*lt;De!==null&&(rt=Math.max(rt,De.start*lt),Ht=Math.min(Ht,(De.start+De.count)*lt)),tt!==null?(rt=Math.max(rt,0),Ht=Math.min(Ht,tt.count)):St!=null&&(rt=Math.max(rt,0),Ht=Math.min(Ht,St.count));const ln=Ht-rt;if(ln<0||ln===1/0)return;ke.setup(oe,ne,Oe,ce,tt);let gn,Jt=Re;if(tt!==null&&(gn=we.get(tt),Jt=_e,Jt.setIndex(gn)),oe.isMesh)ne.wireframe===!0?(A.setLineWidth(ne.wireframeLinewidth*Vt()),Jt.setMode(q.LINES)):Jt.setMode(q.TRIANGLES);else if(oe.isLine){let Fn=ne.linewidth;Fn===void 0&&(Fn=1),A.setLineWidth(Fn*Vt()),oe.isLineSegments?Jt.setMode(q.LINES):oe.isLineLoop?Jt.setMode(q.LINE_LOOP):Jt.setMode(q.LINE_STRIP)}else oe.isPoints?Jt.setMode(q.POINTS):oe.isSprite&&Jt.setMode(q.TRIANGLES);if(oe.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Fn=oe._multiDrawStarts,Ye=oe._multiDrawCounts,ri=oe._multiDrawCount,Rt=tt?we.get(tt).bytesPerElement:1,Fi=re.get(ne).currentProgram.getUniforms();for(let Oi=0;Oi<ri;Oi++)Fi.setValue(q,"_gl_DrawID",Oi),Jt.render(Fn[Oi]/Rt,Ye[Oi])}else if(oe.isInstancedMesh)Jt.renderInstances(rt,ln,oe.count);else if(ce.isInstancedBufferGeometry){const Fn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ye=Math.min(ce.instanceCount,Fn);Jt.renderInstances(rt,ln,Ye)}else Jt.render(rt,ln)};function Et(I,K,ce){I.transparent===!0&&I.side===Is&&I.forceSinglePass===!1?(I.side=Ji,I.needsUpdate=!0,dn(I,K,ce),I.side=Io,I.needsUpdate=!0,dn(I,K,ce),I.side=Is):dn(I,K,ce)}this.compile=function(I,K,ce=null){ce===null&&(ce=I),D=Pe.get(ce),D.init(K),w.push(D),ce.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),I!==ce&&I.traverseVisible(function(oe){oe.isLight&&oe.layers.test(K.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),D.setupLights();const ne=new Set;return I.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const De=oe.material;if(De)if(Array.isArray(De))for(let He=0;He<De.length;He++){const Oe=De[He];Et(Oe,ce,oe),ne.add(Oe)}else Et(De,ce,oe),ne.add(De)}),D=w.pop(),ne},this.compileAsync=function(I,K,ce=null){const ne=this.compile(I,K,ce);return new Promise(oe=>{function De(){if(ne.forEach(function(He){re.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){oe(I);return}setTimeout(De,10)}pt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let jt=null;function Un(I){jt&&jt(I)}function rn(){wt.stop()}function Zt(){wt.start()}const wt=new GM;wt.setAnimationLoop(Un),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(I){jt=I,ye.setAnimationLoop(I),I===null?wt.stop():wt.start()},ye.addEventListener("sessionstart",rn),ye.addEventListener("sessionend",Zt),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;B!==null&&B.renderStart(I,K);const ce=ye.enabled===!0&&ye.isPresenting===!0,ne=N!==null&&(G===null||ce)&&N.begin(F,G);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(K),K=ye.getCamera()),I.isScene===!0&&I.onBeforeRender(F,I,K,G),D=Pe.get(I,w.length),D.init(K),D.state.textureUnits=de.getTextureUnits(),w.push(D),le.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ct.setFromProjectionMatrix(le,cs,K.reversedDepth),gt=this.localClippingEnabled,_t=be.init(this.clippingPlanes,gt),R=Ie.get(I,P.length),R.init(),P.push(R),ye.enabled===!0&&ye.isPresenting===!0){const He=F.xr.getDepthSensingMesh();He!==null&&$n(He,K,-1/0,F.sortObjects)}$n(I,K,0,F.sortObjects),R.finish(),F.sortObjects===!0&&R.sort(Ne,je,K.reversedDepth),ft=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ft&&it.addToRenderList(R,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&be.beginShadows();const oe=D.state.shadowsArray;if(et.render(oe,I,K),_t===!0&&be.endShadows(),(ne&&N.hasRenderPass())===!1){const He=R.opaque,Oe=R.transmissive;if(D.setupLights(),K.isArrayCamera){const tt=K.cameras;if(Oe.length>0)for(let lt=0,yt=tt.length;lt<yt;lt++){const St=tt[lt];Kn(He,Oe,I,St)}ft&&it.render(I);for(let lt=0,yt=tt.length;lt<yt;lt++){const St=tt[lt];Qt(R,I,St,St.viewport)}}else Oe.length>0&&Kn(He,Oe,I,K),ft&&it.render(I),Qt(R,I,K)}G!==null&&H===0&&(de.updateMultisampleRenderTarget(G),de.updateRenderTargetMipmap(G)),ne&&N.end(F),I.isScene===!0&&I.onAfterRender(F,I,K),ke.resetDefaultState(),te=-1,U=null,w.pop(),w.length>0?(D=w[w.length-1],de.setTextureUnits(D.state.textureUnits),_t===!0&&be.setGlobalState(F.clippingPlanes,D.state.camera)):D=null,P.pop(),P.length>0?R=P[P.length-1]:R=null,B!==null&&B.renderEnd()};function $n(I,K,ce,ne){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)ce=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLightProbeGrid)D.pushLightProbeGrid(I);else if(I.isLight)D.pushLight(I),I.castShadow&&D.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ct.intersectsSprite(I)){ne&&Xt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(le);const He=ge.update(I),Oe=I.material;Oe.visible&&R.push(I,He,Oe,ce,Xt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ct.intersectsObject(I))){const He=ge.update(I),Oe=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Xt.copy(I.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Xt.copy(He.boundingSphere.center)),Xt.applyMatrix4(I.matrixWorld).applyMatrix4(le)),Array.isArray(Oe)){const tt=He.groups;for(let lt=0,yt=tt.length;lt<yt;lt++){const St=tt[lt],rt=Oe[St.materialIndex];rt&&rt.visible&&R.push(I,He,rt,ce,Xt.z,St)}}else Oe.visible&&R.push(I,He,Oe,ce,Xt.z,null)}}const De=I.children;for(let He=0,Oe=De.length;He<Oe;He++)$n(De[He],K,ce,ne)}function Qt(I,K,ce,ne){const{opaque:oe,transmissive:De,transparent:He}=I;D.setupLightsView(ce),_t===!0&&be.setGlobalState(F.clippingPlanes,ce),ne&&A.viewport(k.copy(ne)),oe.length>0&&jn(oe,K,ce),De.length>0&&jn(De,K,ce),He.length>0&&jn(He,K,ce),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function Kn(I,K,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ne.id]===void 0){const rt=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ne.id]=new hs(1,1,{generateMipmaps:!0,type:rt?Hs:pr,minFilter:ca,samples:Math.max(4,O.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const De=D.state.transmissionRenderTarget[ne.id],He=ne.viewport||k;De.setSize(He.z*F.transmissionResolutionScale,He.w*F.transmissionResolutionScale);const Oe=F.getRenderTarget(),tt=F.getActiveCubeFace(),lt=F.getActiveMipmapLevel();F.setRenderTarget(De),F.getClearColor(ze),Ve=F.getClearAlpha(),Ve<1&&F.setClearColor(16777215,.5),F.clear(),ft&&it.render(ce);const yt=F.toneMapping;F.toneMapping=ds;const St=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),D.setupLightsView(ne),_t===!0&&be.setGlobalState(F.clippingPlanes,ne),jn(I,ce,ne),de.updateMultisampleRenderTarget(De),de.updateRenderTargetMipmap(De),pt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ht=0,ln=K.length;Ht<ln;Ht++){const gn=K[Ht],{object:Jt,geometry:Fn,material:Ye,group:ri}=gn;if(Ye.side===Is&&Jt.layers.test(ne.layers)){const Rt=Ye.side;Ye.side=Ji,Ye.needsUpdate=!0,xn(Jt,ce,ne,Fn,Ye,ri),Ye.side=Rt,Ye.needsUpdate=!0,rt=!0}}rt===!0&&(de.updateMultisampleRenderTarget(De),de.updateRenderTargetMipmap(De))}F.setRenderTarget(Oe,tt,lt),F.setClearColor(ze,Ve),St!==void 0&&(ne.viewport=St),F.toneMapping=yt}function jn(I,K,ce){const ne=K.isScene===!0?K.overrideMaterial:null;for(let oe=0,De=I.length;oe<De;oe++){const He=I[oe],{object:Oe,geometry:tt,group:lt}=He;let yt=He.material;yt.allowOverride===!0&&ne!==null&&(yt=ne),Oe.layers.test(ce.layers)&&xn(Oe,K,ce,tt,yt,lt)}}function xn(I,K,ce,ne,oe,De){I.onBeforeRender(F,K,ce,ne,oe,De),I.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),oe.onBeforeRender(F,K,ce,ne,I,De),oe.transparent===!0&&oe.side===Is&&oe.forceSinglePass===!1?(oe.side=Ji,oe.needsUpdate=!0,F.renderBufferDirect(ce,K,ne,oe,I,De),oe.side=Io,oe.needsUpdate=!0,F.renderBufferDirect(ce,K,ne,oe,I,De),oe.side=Is):F.renderBufferDirect(ce,K,ne,oe,I,De),I.onAfterRender(F,K,ce,ne,oe,De)}function dn(I,K,ce){K.isScene!==!0&&(K=Yt);const ne=re.get(I),oe=D.state.lights,De=D.state.shadowsArray,He=oe.state.version,Oe=Fe.getParameters(I,oe.state,De,K,ce,D.state.lightProbeGridArray),tt=Fe.getProgramCacheKey(Oe);let lt=ne.programs;ne.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?K.environment:null,ne.fog=K.fog;const yt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ne.envMap=Ae.get(I.envMap||ne.environment,yt),ne.envMapRotation=ne.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,lt===void 0&&(I.addEventListener("dispose",Ze),lt=new Map,ne.programs=lt);let St=lt.get(tt);if(St!==void 0){if(ne.currentProgram===St&&ne.lightsStateVersion===He)return yr(I,Oe),St}else Oe.uniforms=Fe.getUniforms(I),B!==null&&I.isNodeMaterial&&B.build(I,ce,Oe),I.onBeforeCompile(Oe,F),St=Fe.acquireProgram(Oe,tt),lt.set(tt,St),ne.uniforms=Oe.uniforms;const rt=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(rt.clippingPlanes=be.uniform),yr(I,Oe),ne.needsLights=di(I),ne.lightsStateVersion=He,ne.needsLights&&(rt.ambientLightColor.value=oe.state.ambient,rt.lightProbe.value=oe.state.probe,rt.directionalLights.value=oe.state.directional,rt.directionalLightShadows.value=oe.state.directionalShadow,rt.spotLights.value=oe.state.spot,rt.spotLightShadows.value=oe.state.spotShadow,rt.rectAreaLights.value=oe.state.rectArea,rt.ltc_1.value=oe.state.rectAreaLTC1,rt.ltc_2.value=oe.state.rectAreaLTC2,rt.pointLights.value=oe.state.point,rt.pointLightShadows.value=oe.state.pointShadow,rt.hemisphereLights.value=oe.state.hemi,rt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,rt.spotLightMatrix.value=oe.state.spotLightMatrix,rt.spotLightMap.value=oe.state.spotLightMap,rt.pointShadowMatrix.value=oe.state.pointShadowMatrix),ne.lightProbeGrid=D.state.lightProbeGridArray.length>0,ne.currentProgram=St,ne.uniformsList=null,St}function Cn(I){if(I.uniformsList===null){const K=I.currentProgram.getUniforms();I.uniformsList=pd.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function yr(I,K){const ce=re.get(I);ce.outputColorSpace=K.outputColorSpace,ce.batching=K.batching,ce.batchingColor=K.batchingColor,ce.instancing=K.instancing,ce.instancingColor=K.instancingColor,ce.instancingMorph=K.instancingMorph,ce.skinning=K.skinning,ce.morphTargets=K.morphTargets,ce.morphNormals=K.morphNormals,ce.morphColors=K.morphColors,ce.morphTargetsCount=K.morphTargetsCount,ce.numClippingPlanes=K.numClippingPlanes,ce.numIntersection=K.numClipIntersection,ce.vertexAlphas=K.vertexAlphas,ce.vertexTangents=K.vertexTangents,ce.toneMapping=K.toneMapping}function Ws(I,K){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;T.setFromMatrixPosition(K.matrixWorld);for(let ce=0,ne=I.length;ce<ne;ce++){const oe=I[ce];if(oe.texture!==null&&oe.boundingBox.containsPoint(T))return oe}return null}function bt(I,K,ce,ne,oe){K.isScene!==!0&&(K=Yt),de.resetTextureUnits();const De=K.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?K.environment:null,Oe=G===null?F.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Ot.workingColorSpace,tt=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,lt=Ae.get(ne.envMap||He,tt),yt=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,St=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),rt=!!ce.morphAttributes.position,Ht=!!ce.morphAttributes.normal,ln=!!ce.morphAttributes.color;let gn=ds;ne.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(gn=F.toneMapping);const Jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Fn=Jt!==void 0?Jt.length:0,Ye=re.get(ne),ri=D.state.lights;if(_t===!0&&(gt===!0||I!==U)){const en=I===U&&ne.id===te;be.setState(ne,I,en)}let Rt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ri.state.version||Ye.outputColorSpace!==Oe||oe.isBatchedMesh&&Ye.batching===!1||!oe.isBatchedMesh&&Ye.batching===!0||oe.isBatchedMesh&&Ye.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ye.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ye.instancing===!1||!oe.isInstancedMesh&&Ye.instancing===!0||oe.isSkinnedMesh&&Ye.skinning===!1||!oe.isSkinnedMesh&&Ye.skinning===!0||oe.isInstancedMesh&&Ye.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ye.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ye.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ye.instancingMorph===!1&&oe.morphTexture!==null||Ye.envMap!==lt||ne.fog===!0&&Ye.fog!==De||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==yt||Ye.vertexTangents!==St||Ye.morphTargets!==rt||Ye.morphNormals!==Ht||Ye.morphColors!==ln||Ye.toneMapping!==gn||Ye.morphTargetsCount!==Fn||!!Ye.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Rt=!0):(Rt=!0,Ye.__version=ne.version);let Fi=Ye.currentProgram;Rt===!0&&(Fi=dn(ne,K,oe),B&&ne.isNodeMaterial&&B.onUpdateProgram(ne,Fi,Ye));let Oi=!1,Dt=!1,_s=!1;const $t=Fi.getUniforms(),hn=Ye.uniforms;if(A.useProgram(Fi.program)&&(Oi=!0,Dt=!0,_s=!0),ne.id!==te&&(te=ne.id,Dt=!0),Ye.needsLights){const en=Ws(D.state.lightProbeGridArray,oe);Ye.lightProbeGrid!==en&&(Ye.lightProbeGrid=en,Dt=!0)}if(Oi||U!==I){A.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),$t.setValue(q,"projectionMatrix",I.projectionMatrix),$t.setValue(q,"viewMatrix",I.matrixWorldInverse);const Fr=$t.map.cameraPosition;Fr!==void 0&&Fr.setValue(q,Ft.setFromMatrixPosition(I.matrixWorld)),O.logarithmicDepthBuffer&&$t.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&$t.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),U!==I&&(U=I,Dt=!0,_s=!0)}if(Ye.needsLights&&(ri.state.directionalShadowMap.length>0&&$t.setValue(q,"directionalShadowMap",ri.state.directionalShadowMap,de),ri.state.spotShadowMap.length>0&&$t.setValue(q,"spotShadowMap",ri.state.spotShadowMap,de),ri.state.pointShadowMap.length>0&&$t.setValue(q,"pointShadowMap",ri.state.pointShadowMap,de)),oe.isSkinnedMesh){$t.setOptional(q,oe,"bindMatrix"),$t.setOptional(q,oe,"bindMatrixInverse");const en=oe.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),$t.setValue(q,"boneTexture",en.boneTexture,de))}oe.isBatchedMesh&&($t.setOptional(q,oe,"batchingTexture"),$t.setValue(q,"batchingTexture",oe._matricesTexture,de),$t.setOptional(q,oe,"batchingIdTexture"),$t.setValue(q,"batchingIdTexture",oe._indirectTexture,de),$t.setOptional(q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&$t.setValue(q,"batchingColorTexture",oe._colorsTexture,de));const Ur=ce.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&W.update(oe,ce,Fi),(Dt||Ye.receiveShadow!==oe.receiveShadow)&&(Ye.receiveShadow=oe.receiveShadow,$t.setValue(q,"receiveShadow",oe.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&K.environment!==null&&(hn.envMapIntensity.value=K.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=n3()),Dt){if($t.setValue(q,"toneMappingExposure",F.toneMappingExposure),Ye.needsLights&&yn(hn,_s),De&&ne.fog===!0&&$e.refreshFogUniforms(hn,De),$e.refreshMaterialUniforms(hn,ne,he,ve,D.state.transmissionRenderTarget[I.id]),Ye.needsLights&&Ye.lightProbeGrid){const en=Ye.lightProbeGrid;hn.probesSH.value=en.texture,hn.probesMin.value.copy(en.boundingBox.min),hn.probesMax.value.copy(en.boundingBox.max),hn.probesResolution.value.copy(en.resolution)}pd.upload(q,Cn(Ye),hn,de)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(pd.upload(q,Cn(Ye),hn,de),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&$t.setValue(q,"center",oe.center),$t.setValue(q,"modelViewMatrix",oe.modelViewMatrix),$t.setValue(q,"normalMatrix",oe.normalMatrix),$t.setValue(q,"modelMatrix",oe.matrixWorld),ne.uniformsGroups!==void 0){const en=ne.uniformsGroups;for(let Fr=0,jr=en.length;Fr<jr;Fr++){const Oo=en[Fr];xe.update(Oo,Fi),xe.bind(Oo,Fi)}}return Fi}function yn(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function di(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(I,K,ce){const ne=re.get(I);ne.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),re.get(I.texture).__webglTexture=K,re.get(I.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){const ce=re.get(I);ce.__webglFramebuffer=K,ce.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,ce=0){G=I,J=K,H=ce;let ne=null,oe=!1,De=!1;if(I){const Oe=re.get(I);if(Oe.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(q.FRAMEBUFFER,Oe.__webglFramebuffer),k.copy(I.viewport),Z.copy(I.scissor),Be=I.scissorTest,A.viewport(k),A.scissor(Z),A.setScissorTest(Be),te=-1;return}else if(Oe.__webglFramebuffer===void 0)de.setupRenderTarget(I);else if(Oe.__hasExternalTextures)de.rebindTextures(I,re.get(I.texture).__webglTexture,re.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const yt=I.depthTexture;if(Oe.__boundDepthTexture!==yt){if(yt!==null&&re.has(yt)&&(I.width!==yt.image.width||I.height!==yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(I)}}const tt=I.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(De=!0);const lt=re.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?ne=lt[K][ce]:ne=lt[K],oe=!0):I.samples>0&&de.useMultisampledRTT(I)===!1?ne=re.get(I).__webglMultisampledFramebuffer:Array.isArray(lt)?ne=lt[ce]:ne=lt,k.copy(I.viewport),Z.copy(I.scissor),Be=I.scissorTest}else k.copy(Xe).multiplyScalar(he).floor(),Z.copy(At).multiplyScalar(he).floor(),Be=Ge;if(ce!==0&&(ne=Q),A.bindFramebuffer(q.FRAMEBUFFER,ne)&&A.drawBuffers(I,ne),A.viewport(k),A.scissor(Z),A.setScissorTest(Be),oe){const Oe=re.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+K,Oe.__webglTexture,ce)}else if(De){const Oe=K;for(let tt=0;tt<I.textures.length;tt++){const lt=re.get(I.textures[tt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+tt,lt.__webglTexture,ce,Oe)}}else if(I!==null&&ce!==0){const Oe=re.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oe.__webglTexture,ce)}te=-1},this.readRenderTargetPixels=function(I,K,ce,ne,oe,De,He,Oe=0){if(!(I&&I.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&(tt=tt[He]),tt){A.bindFramebuffer(q.FRAMEBUFFER,tt);try{const lt=I.textures[Oe],yt=lt.format,St=lt.type;if(I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!O.textureFormatReadable(yt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(St)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ne&&ce>=0&&ce<=I.height-oe&&q.readPixels(K,ce,ne,oe,Ue.convert(yt),Ue.convert(St),De)}finally{const lt=G!==null?re.get(G).__webglFramebuffer:null;A.bindFramebuffer(q.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(I,K,ce,ne,oe,De,He,Oe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=re.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&He!==void 0&&(tt=tt[He]),tt)if(K>=0&&K<=I.width-ne&&ce>=0&&ce<=I.height-oe){A.bindFramebuffer(q.FRAMEBUFFER,tt);const lt=I.textures[Oe],yt=lt.format,St=lt.type;if(I.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Oe),!O.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,rt),q.bufferData(q.PIXEL_PACK_BUFFER,De.byteLength,q.STREAM_READ),q.readPixels(K,ce,ne,oe,Ue.convert(yt),Ue.convert(St),0);const Ht=G!==null?re.get(G).__webglFramebuffer:null;A.bindFramebuffer(q.FRAMEBUFFER,Ht);const ln=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await yA(q,ln,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,rt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,De),q.deleteBuffer(rt),q.deleteSync(ln),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,ce=0){const ne=Math.pow(2,-ce),oe=Math.floor(I.image.width*ne),De=Math.floor(I.image.height*ne),He=K!==null?K.x:0,Oe=K!==null?K.y:0;de.setTexture2D(I,0),q.copyTexSubImage2D(q.TEXTURE_2D,ce,0,0,He,Oe,oe,De),A.unbindTexture()},this.copyTextureToTexture=function(I,K,ce=null,ne=null,oe=0,De=0){let He,Oe,tt,lt,yt,St,rt,Ht,ln;const gn=I.isCompressedTexture?I.mipmaps[De]:I.image;if(ce!==null)He=ce.max.x-ce.min.x,Oe=ce.max.y-ce.min.y,tt=ce.isBox3?ce.max.z-ce.min.z:1,lt=ce.min.x,yt=ce.min.y,St=ce.isBox3?ce.min.z:0;else{const hn=Math.pow(2,-oe);He=Math.floor(gn.width*hn),Oe=Math.floor(gn.height*hn),I.isDataArrayTexture?tt=gn.depth:I.isData3DTexture?tt=Math.floor(gn.depth*hn):tt=1,lt=0,yt=0,St=0}ne!==null?(rt=ne.x,Ht=ne.y,ln=ne.z):(rt=0,Ht=0,ln=0);const Jt=Ue.convert(K.format),Fn=Ue.convert(K.type);let Ye;K.isData3DTexture?(de.setTexture3D(K,0),Ye=q.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(de.setTexture2DArray(K,0),Ye=q.TEXTURE_2D_ARRAY):(de.setTexture2D(K,0),Ye=q.TEXTURE_2D),A.activeTexture(q.TEXTURE0),A.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,K.flipY),A.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),A.pixelStorei(q.UNPACK_ALIGNMENT,K.unpackAlignment);const ri=A.getParameter(q.UNPACK_ROW_LENGTH),Rt=A.getParameter(q.UNPACK_IMAGE_HEIGHT),Fi=A.getParameter(q.UNPACK_SKIP_PIXELS),Oi=A.getParameter(q.UNPACK_SKIP_ROWS),Dt=A.getParameter(q.UNPACK_SKIP_IMAGES);A.pixelStorei(q.UNPACK_ROW_LENGTH,gn.width),A.pixelStorei(q.UNPACK_IMAGE_HEIGHT,gn.height),A.pixelStorei(q.UNPACK_SKIP_PIXELS,lt),A.pixelStorei(q.UNPACK_SKIP_ROWS,yt),A.pixelStorei(q.UNPACK_SKIP_IMAGES,St);const _s=I.isDataArrayTexture||I.isData3DTexture,$t=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){const hn=re.get(I),Ur=re.get(K),en=re.get(hn.__renderTarget),Fr=re.get(Ur.__renderTarget);A.bindFramebuffer(q.READ_FRAMEBUFFER,en.__webglFramebuffer),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let jr=0;jr<tt;jr++)_s&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(I).__webglTexture,oe,St+jr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,re.get(K).__webglTexture,De,ln+jr)),q.blitFramebuffer(lt,yt,He,Oe,rt,Ht,He,Oe,q.DEPTH_BUFFER_BIT,q.NEAREST);A.bindFramebuffer(q.READ_FRAMEBUFFER,null),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||I.isRenderTargetTexture||re.has(I)){const hn=re.get(I),Ur=re.get(K);A.bindFramebuffer(q.READ_FRAMEBUFFER,ee),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,Y);for(let en=0;en<tt;en++)_s?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,hn.__webglTexture,oe,St+en):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,hn.__webglTexture,oe),$t?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ur.__webglTexture,De,ln+en):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ur.__webglTexture,De),oe!==0?q.blitFramebuffer(lt,yt,He,Oe,rt,Ht,He,Oe,q.COLOR_BUFFER_BIT,q.NEAREST):$t?q.copyTexSubImage3D(Ye,De,rt,Ht,ln+en,lt,yt,He,Oe):q.copyTexSubImage2D(Ye,De,rt,Ht,lt,yt,He,Oe);A.bindFramebuffer(q.READ_FRAMEBUFFER,null),A.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else $t?I.isDataTexture||I.isData3DTexture?q.texSubImage3D(Ye,De,rt,Ht,ln,He,Oe,tt,Jt,Fn,gn.data):K.isCompressedArrayTexture?q.compressedTexSubImage3D(Ye,De,rt,Ht,ln,He,Oe,tt,Jt,gn.data):q.texSubImage3D(Ye,De,rt,Ht,ln,He,Oe,tt,Jt,Fn,gn):I.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,De,rt,Ht,He,Oe,Jt,Fn,gn.data):I.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,De,rt,Ht,gn.width,gn.height,Jt,gn.data):q.texSubImage2D(q.TEXTURE_2D,De,rt,Ht,He,Oe,Jt,Fn,gn);A.pixelStorei(q.UNPACK_ROW_LENGTH,ri),A.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Rt),A.pixelStorei(q.UNPACK_SKIP_PIXELS,Fi),A.pixelStorei(q.UNPACK_SKIP_ROWS,Oi),A.pixelStorei(q.UNPACK_SKIP_IMAGES,Dt),De===0&&K.generateMipmaps&&q.generateMipmap(Ye),A.unbindTexture()},this.initRenderTarget=function(I){re.get(I).__webglFramebuffer===void 0&&de.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?de.setTextureCube(I,0):I.isData3DTexture?de.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?de.setTexture2DArray(I,0):de.setTexture2D(I,0),A.unbindTexture()},this.resetState=function(){J=0,H=0,G=null,A.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}const mm=46,Bn={progress:0,accent:new Ut("#c8ff2d"),targetAccent:new Ut("#c8ff2d"),pointer:{x:0,y:0},handle:null},fc=(s=14211294)=>new zM({color:s,metalness:.92,roughness:.22}),M_=()=>new zM({color:1710623,metalness:.4,roughness:.6});function r3(){const s=new da,e=new fi(new Ol(.09,.09,2.2,24),fc());e.rotation.z=Math.PI/2,s.add(e);for(const t of[-1,1])for(let n=0;n<3;n++){const r=.55-n*.13,a=new fi(new Ol(r,r,.16,36),M_());a.rotation.z=Math.PI/2,a.position.x=t*(.85+n*.18),s.add(a)}return s}function s3(){const s=new da,e=new fi(new v_(.62,36,24),M_());e.scale.y=.94,s.add(e);const t=new fi(new Bd(.42,.09,18,40,Math.PI),fc());return t.position.y=.55,s.add(t),s}function o3(){const s=new da,e=new fi(new Ol(.85,.85,.14,48),M_());s.add(e);const t=new fi(new Ol(.22,.22,.18,24),fc());s.add(t);const n=new fi(new Bd(.85,.05,12,48),fc(11184818));return n.rotation.x=Math.PI/2,s.add(n),s}function a3(){return new fi(new x_(.5,.15,128,20),fc(12632264))}function l3(s){if(Bn.handle)return Bn.handle;const e=new i3({canvas:s,antialias:!0,alpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setSize(window.innerWidth,window.innerHeight);const t=new FA;t.fog=new g_(658974,.05);const n=new fr(60,window.innerWidth/window.innerHeight,.1,80);n.position.set(0,0,6),t.add(new rb(2763314,1.6));const r=new my(Bn.accent.getHex(),90,40,1.8);r.position.set(2,3,4),t.add(r);const a=new ib(16777215,.7);a.position.set(-4,6,2),t.add(a);const u=new my(Bn.accent.getHex(),40,30,2);u.position.set(0,-2,-18),t.add(u);const c=[r3,s3,o3,a3],d=[];for(let b=0;b<14;b++){const L=c[b%c.length](),T=b/13,R=b*2.39996;L.position.set(Math.cos(R)*(1.8+b%3*.9),Math.sin(R)*(1.4+b%2*.8),2-T*(mm+8)),L.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),L.userData.spin=.15+Math.random()*.25,L.userData.bobPhase=Math.random()*Math.PI*2,t.add(L),d.push(L)}const h=900,p=new Float32Array(h*3);for(let b=0;b<h;b++)p[b*3]=(Math.random()-.5)*14,p[b*3+1]=(Math.random()-.5)*10,p[b*3+2]=4-Math.random()*(mm+14);const v=new Ui;v.setAttribute("position",new Kr(p,3));const m=new FM({color:Bn.accent.getHex(),size:.045,transparent:!0,opacity:.75,blending:zm,depthWrite:!1});t.add(new YA(v,m));const _=new ab;let M;const E=window.matchMedia("(prefers-reduced-motion: reduce)").matches;function x(){const b=_.getElapsedTime(),L=Bn.progress;Bn.accent.lerp(Bn.targetAccent,.06),r.color.copy(Bn.accent),u.color.copy(Bn.accent),m.color.copy(Bn.accent),n.position.z=6-L*mm,n.position.x=Math.sin(L*Math.PI*2)*1.2+Bn.pointer.x*.35,n.position.y=Math.cos(L*Math.PI*1.5)*.7+Bn.pointer.y*.25,n.lookAt(Math.sin((L+.06)*Math.PI*2)*1.2,Math.cos((L+.06)*Math.PI*1.5)*.7,n.position.z-6),u.position.z=n.position.z-14;for(const T of d)T.rotation.x+=.0016*T.userData.spin*60,T.rotation.y+=.0011*T.userData.spin*60,T.position.y+=Math.sin(b*.6+T.userData.bobPhase)*.0012;e.render(t,n),E||(M=requestAnimationFrame(x))}x(),E&&e.render(t,n);function y(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),E&&e.render(t,n)}return window.addEventListener("resize",y),Bn.handle={destroy(){cancelAnimationFrame(M),window.removeEventListener("resize",y),e.dispose(),Bn.handle=null}},Bn.handle}function u3(s){Bn.progress=Math.min(1,Math.max(0,s))}function E_(s){Bn.targetAccent.set(s)}function c3(s,e){Bn.pointer.x=s,Bn.pointer.y=e}an.registerPlugin(Tt);const ZM=s=>s%1===0?`$${s}`:`$${s.toFixed(2)}`;function f3({product:s,accent:e}){const t=s.checkoutVariant?`${No}/cart/${s.checkoutVariant}:1`:`${No}/products/${s.handle}`;return me.jsx("a",{className:"buy-btn",style:{"--accent":e},href:t,target:"_blank",rel:"noreferrer",children:`Buy Now — ${ZM(s.price)}`})}function QM(){return me.jsx("span",{className:"stars","aria-hidden":"true",children:"★★★★★"})}function d3({rating:s,count:e}){const t=`${s/5*100}%`;return me.jsxs("div",{className:"rating","aria-label":`Rated ${s} out of 5 from ${e} reviews`,children:[me.jsxs("span",{className:"stars-wrap","aria-hidden":"true",children:[me.jsx("span",{className:"stars-bg",children:"★★★★★"}),me.jsx("span",{className:"stars-fg",style:{width:t},children:"★★★★★"})]}),me.jsx("span",{className:"rating-num",children:s.toFixed(1)}),me.jsxs("span",{className:"rating-count",children:["(",e,")"]})]})}function Pu({text:s,className:e}){return me.jsx("span",{className:e,"aria-label":s,role:"text",children:s.split("").map((t,n)=>me.jsx("span",{className:"char","aria-hidden":"true",children:t===" "?" ":t},n))})}const Vy="REAL GEAR · REAL PROGRAMS · REAL RESULTS · FREE YOUR DREAM BODY · DREAMBODX FITNESS · ";function h3(){const s=$i.useRef(null),e=$i.useRef(null);return $i.useEffect(()=>{const t=an.context(()=>{an.from(".char",{yPercent:130,rotate:10,stagger:.03,duration:1.2,ease:"power4.out",delay:.25}),an.from(".hero-sub, .hero-chips, .hero-actions, .hero-scroll-cue, .rot-badge",{opacity:0,y:26,stagger:.1,duration:.9,delay:1.2,ease:"power3.out"}),an.to(".hero-line.l1",{yPercent:-60,ease:"none",scrollTrigger:{trigger:s.current,start:"top top",end:"bottom top",scrub:!0}}),an.to(".hero-line.l2",{yPercent:-30,xPercent:6,ease:"none",scrollTrigger:{trigger:s.current,start:"top top",end:"bottom top",scrub:!0}}),an.to(".hero-line.l3",{yPercent:-12,ease:"none",scrollTrigger:{trigger:s.current,start:"top top",end:"bottom top",scrub:!0}}),an.to(".hero-media video",{scale:1.18,ease:"none",scrollTrigger:{trigger:s.current,start:"top top",end:"bottom top",scrub:!0}}),an.to(".hero-inner",{opacity:0,ease:"none",scrollTrigger:{trigger:s.current,start:"40% top",end:"bottom top",scrub:!0}})},s);return()=>t.revert()},[]),me.jsxs("header",{className:"hero",ref:s,children:[me.jsxs("div",{className:"hero-media","aria-hidden":"true",children:[me.jsx("video",{ref:e,src:"/hero-video.mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,onError:()=>e.current&&(e.current.style.display="none")}),me.jsx("div",{className:"hero-duotone"})]}),me.jsx("div",{className:"hero-band top","aria-hidden":"true",children:me.jsx("span",{className:"hero-band-track",children:Vy.repeat(4)})}),me.jsxs("div",{className:"hero-inner",children:[me.jsx("p",{className:"hero-sub",children:"DreamBodX Fitness"}),me.jsxs("h1",{className:"hero-title",children:[me.jsx("span",{className:"hero-line l1",children:me.jsx(Pu,{text:"BUILD"})}),me.jsx("span",{className:"hero-line l2",children:me.jsx(Pu,{text:"THE BODY"})}),me.jsxs("span",{className:"hero-line l3",children:[me.jsx(Pu,{text:"YOU "}),me.jsx("em",{className:"grad",children:me.jsx(Pu,{text:"DREAM"})}),me.jsx(Pu,{text:" OF"})]})]}),me.jsxs("div",{className:"hero-chips","aria-hidden":"true",children:[me.jsx("span",{children:"eBooks & Programs"}),me.jsx("span",{children:"Instant Download"}),me.jsx("span",{children:"Gym Equipment"}),me.jsx("span",{children:"Activewear"})]}),me.jsxs("div",{className:"hero-actions",children:[me.jsx("a",{className:"btn-primary",href:"#ebooks",children:"Shop eBooks ↓"}),me.jsx("a",{className:"btn-ghost",href:"#cardio",children:"Browse Gear →"})]}),me.jsxs("div",{className:"hero-scroll-cue","aria-hidden":"true",children:[me.jsx("span",{className:"cue-dot"})," scroll to enter the gym"]})]}),me.jsxs("div",{className:"rot-badge","aria-hidden":"true",children:[me.jsxs("svg",{viewBox:"0 0 100 100",children:[me.jsx("defs",{children:me.jsx("path",{id:"badge-circle",d:"M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"})}),me.jsx("text",{children:me.jsx("textPath",{href:"#badge-circle",children:"TRAIN HARD · DREAM BIG · DBX ·"})})]}),me.jsx("span",{className:"badge-arrow",children:"↓"})]}),me.jsx("div",{className:"hero-band bottom","aria-hidden":"true",children:me.jsx("span",{className:"hero-band-track",children:Vy.repeat(4)})})]})}const Hy="#ff5c2d";function p3(){const s=$i.useRef(null);return $i.useEffect(()=>{const e=an.context(()=>{Tt.create({trigger:s.current,start:"top 55%",end:"bottom 55%",onToggle:t=>t.isActive&&E_(Hy)}),an.from(".ebook-head > *",{opacity:0,y:40,stagger:.1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 72%"}}),an.from(".ebook-trust span",{opacity:0,y:16,stagger:.08,duration:.6,ease:"power2.out",scrollTrigger:{trigger:".ebook-trust",start:"top 90%"}}),an.utils.toArray(".ebook-card",s.current).forEach((t,n)=>{an.from(t,{opacity:0,y:80,rotateX:-5,duration:.9,delay:n%3*.08,ease:"power3.out",scrollTrigger:{trigger:t,start:"top 92%"}})})},s);return()=>e.revert()},[]),me.jsxs("section",{className:"ebooks",id:"ebooks",ref:s,style:{"--accent":Hy},children:[me.jsx("div",{className:"cat-index","aria-hidden":"true",children:"📚"}),me.jsxs("div",{className:"ebook-head cat-head",children:[me.jsx("p",{className:"cat-kicker",children:"Digital Library — Instant Download"}),me.jsx("h2",{children:"DreamBodX eBooks & Programs"}),me.jsx("p",{className:"cat-blurb",children:"Science-backed weight-loss guides, muscle-building programs, and healthy cookbooks — written for real results. Buy once, download instantly, and start today. No shipping, no waiting, yours forever."})]}),me.jsxs("div",{className:"ebook-trust",role:"list",children:[me.jsx("span",{role:"listitem",children:"⚡ Instant PDF download"}),me.jsx("span",{role:"listitem",children:"🔒 Secure Shopify checkout"}),me.jsx("span",{role:"listitem",children:"📱 Read on any device"}),me.jsx("span",{role:"listitem",children:"♾️ Yours to keep forever"})]}),me.jsx("div",{className:"ebook-grid",children:BT.map(e=>{const t=`${No}/cart/${e.checkoutVariant}:1`,n=`${No}/products/${e.handle}`;return me.jsxs("article",{className:"ebook-card",children:[me.jsxs("a",{className:"ebook-cover",href:n,target:"_blank",rel:"noreferrer","aria-label":`${e.title} — view details`,children:[me.jsx("img",{src:e.image,alt:`${e.title} — DreamBodX Fitness eBook cover`,loading:"lazy"}),e.badge&&me.jsx("span",{className:"ebook-badge",children:e.badge}),me.jsx("span",{className:"ebook-tag",children:e.tag})]}),me.jsxs("div",{className:"ebook-body",children:[me.jsx(d3,{rating:e.rating,count:e.reviewCount}),me.jsx("h3",{children:e.title}),me.jsx("p",{className:"ebook-blurb",children:e.blurb}),me.jsx("ul",{className:"ebook-bullets",children:e.bullets.map(r=>me.jsx("li",{children:r},r))}),me.jsxs("blockquote",{className:"ebook-review",children:[me.jsx(QM,{}),me.jsxs("span",{className:"ebook-review-text",children:["“",e.review,"”"]}),me.jsxs("cite",{className:"ebook-review-name",children:["— ",e.reviewer]})]}),me.jsxs("div",{className:"ebook-foot",children:[me.jsx("span",{className:"ebook-price",children:ZM(e.price)}),me.jsx("a",{className:"buy-btn ebook-buy",href:t,target:"_blank",rel:"noreferrer",children:"Get Instant Access"})]})]})]},e.id)})})]})}function m3({category:s,flip:e,index:t}){const n=$i.useRef(null);return $i.useEffect(()=>{const r=an.context(()=>{Tt.create({trigger:n.current,start:"top 55%",end:"bottom 55%",onToggle:a=>a.isActive&&E_(s.accent)}),an.from(".cat-head > *",{opacity:0,y:46,stagger:.1,duration:.9,ease:"power3.out",scrollTrigger:{trigger:n.current,start:"top 70%"}}),an.utils.toArray(".product-card",n.current).forEach((a,u)=>{an.from(a,{opacity:0,y:90,rotateX:-6,duration:1,delay:u%4*.09,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 90%"}});const c=a.querySelector(".product-img img");c&&an.fromTo(c,{yPercent:-7},{yPercent:7,ease:"none",scrollTrigger:{trigger:a,start:"top bottom",end:"bottom top",scrub:!0}})})},n);return()=>r.revert()},[s.accent]),me.jsxs("section",{className:`category ${e?"flip":""}`,id:s.id,ref:n,style:{"--accent":s.accent},children:[me.jsx("div",{className:"cat-index","aria-hidden":"true",children:String(t+1).padStart(2,"0")}),me.jsxs("div",{className:"cat-head",children:[me.jsx("p",{className:"cat-kicker",children:s.kicker}),me.jsx("h2",{children:s.title}),me.jsx("p",{className:"cat-blurb",children:s.blurb})]}),me.jsx("div",{className:"product-grid",children:s.products.map(r=>me.jsxs("article",{className:"product-card",children:[me.jsx("a",{className:"product-img",href:`${No}/products/${r.handle}`,target:"_blank",rel:"noreferrer","aria-label":`${r.name} on DreamBodX Fitness`,children:me.jsx("img",{src:r.image,alt:r.name,loading:"lazy"})}),me.jsxs("div",{className:"product-meta",children:[me.jsx("h3",{children:r.name}),me.jsx("p",{children:r.blurb}),r.review&&me.jsxs("blockquote",{className:"product-review",children:[me.jsx(QM,{}),me.jsxs("span",{children:["“",r.review,"”"]})]}),me.jsx(f3,{product:r,accent:s.accent})]})]},r.handle))})]})}function g3(){const s=$i.useRef(null);return $i.useEffect(()=>{const t=an.context(()=>{an.to(".marquee-track",{xPercent:-50,ease:"none",scrollTrigger:{trigger:s.current,start:"top bottom",end:"bottom top",scrub:1}})},s);return()=>t.revert()},[]),me.jsx("div",{className:"marquee",ref:s,"aria-hidden":"true",children:me.jsx("div",{className:"marquee-track",children:"TRAIN · SWEAT · SCULPT · REPEAT · ".repeat(6)})})}function _3(){const s=$i.useRef(null);return $i.useEffect(()=>{const e=an.context(()=>{Tt.create({trigger:s.current,start:"top 55%",end:"bottom 55%",onToggle:t=>t.isActive&&E_("#c8ff2d")}),an.from(".coll-tile",{opacity:0,y:60,scale:.96,stagger:.05,duration:.8,ease:"power3.out",scrollTrigger:{trigger:s.current,start:"top 72%"}})},s);return()=>e.revert()},[]),me.jsxs("section",{className:"collections",ref:s,children:[me.jsxs("div",{className:"cat-head",children:[me.jsx("p",{className:"cat-kicker",children:"06 — Everything"}),me.jsx("h2",{children:"Shop the Full Collection"}),me.jsx("p",{className:"cat-blurb",children:"The complete DreamBodX catalog — over 60 products across fourteen collections."})]}),me.jsx("div",{className:"coll-grid",children:kT.map(e=>me.jsxs("a",{className:"coll-tile",href:`${No}/collections/${e.handle}`,target:"_blank",rel:"noreferrer",children:[me.jsx("img",{src:e.image,alt:e.title,loading:"lazy"}),me.jsxs("div",{className:"coll-tile-info",children:[me.jsx("span",{className:"coll-title",children:e.title}),me.jsxs("span",{className:"coll-count",children:[e.count," products →"]})]})]},e.handle))})]})}const v3=OT.filter(s=>s.id!=="programs");function x3(){const s=$i.useRef(null);return $i.useEffect(()=>{const e=l3(s.current);Tt.create({trigger:document.body,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:u=>u3(u.progress)});const t=u=>{c3((u.clientX/window.innerWidth-.5)*2,-(u.clientY/window.innerHeight-.5)*2)};window.addEventListener("pointermove",t);const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let r,a;return n||(r=new FT({lerp:.1,smoothWheel:!0}),r.on("scroll",Tt.update),a=u=>r.raf(u*1e3),an.ticker.add(a),an.ticker.lagSmoothing(0)),()=>{window.removeEventListener("pointermove",t),a&&an.ticker.remove(a),r==null||r.destroy(),e.destroy()}},[]),me.jsxs(me.Fragment,{children:[me.jsxs("div",{className:"aurora","aria-hidden":"true",children:[me.jsx("span",{}),me.jsx("span",{}),me.jsx("span",{}),me.jsx("span",{})]}),me.jsx("canvas",{className:"bg-canvas",ref:s,"aria-hidden":"true"}),me.jsx("div",{className:"grain","aria-hidden":"true"}),me.jsxs("nav",{className:"topbar",children:[me.jsx("span",{className:"logo",children:"DREAMBODX"}),me.jsx("a",{className:"topbar-link",href:No,target:"_blank",rel:"noreferrer",children:"Full Store ↗"})]}),me.jsx(h3,{}),me.jsxs("main",{children:[me.jsx(p3,{}),v3.map((e,t)=>me.jsxs("div",{children:[me.jsx(m3,{category:e,flip:t%2===1,index:t}),t===0&&me.jsx(g3,{})]},e.id)),me.jsx(_3,{})]}),me.jsxs("footer",{className:"footer",children:[me.jsx("p",{className:"footer-logo",children:"DREAMBODX FITNESS"}),me.jsxs("p",{children:["Secure checkout powered by Shopify ·"," ",me.jsx("a",{href:No,target:"_blank",rel:"noreferrer",children:"dreambodxfitness.com"})]}),me.jsx("p",{className:"footer-fine",children:"Ratings & review highlights are illustrative — replace with your verified buyer feedback before publishing."}),me.jsxs("p",{className:"footer-fine",children:["© ",new Date().getFullYear()," DreamBodX Fitness. All rights reserved."]})]})]})}GE.createRoot(document.getElementById("root")).render(me.jsx(OE.StrictMode,{children:me.jsx(x3,{})}));
