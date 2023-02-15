import{r as f,R as h}from"./index-2f0c84ee.js";const m={prefix:String(Math.round(Math.random()*1e10)),current:0},E=h.createContext(m);let R=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function T(e){let t=f.useContext(E);return t===m&&!R&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),f.useMemo(()=>e||`react-aria${t.prefix}-${++t.current}`,[e])}function B(){let t=f.useContext(E)!==m,[n,r]=f.useState(t);return typeof window<"u"&&t&&f.useLayoutEffect(()=>{r(!1)},[]),n}function L(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=L(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function P(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=L(e))&&(r&&(r+=" "),r+=t);return r}const d=typeof window<"u"?h.useLayoutEffect:()=>{};function M(e){let[t,n]=f.useState(e),r=f.useRef(t),a=f.useRef(null);r.current=t;let o=f.useRef(null);o.current=()=>{let c=a.current.next();if(c.done){a.current=null;return}t===c.value?o.current():n(c.value)},d(()=>{a.current&&o.current()});let l=f.useCallback(c=>{a.current=c(r.current),o.current()},[a,o]);return[t,l]}let b=new Map;function S(e){let[t,n]=f.useState(e),r=f.useRef(null),a=T(t),o=f.useCallback(l=>{r.current=l},[]);return b.set(a,o),d(()=>{let l=a;return()=>{b.delete(l)}},[a]),f.useEffect(()=>{let l=r.current;l&&(r.current=null,n(l))}),a}function I(e,t){if(e===t)return e;let n=b.get(e);if(n)return n(t),t;let r=b.get(t);return r?(r(e),e):t}function K(e=[]){let t=S(),[n,r]=M(t),a=f.useCallback(()=>{r(function*(){yield t,yield document.getElementById(t)?t:void 0})},[t,r]);return d(a,[t,a,...e]),n}function k(...e){return(...t)=>{for(let n of e)typeof n=="function"&&n(...t)}}function J(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let a in r){let o=t[a],l=r[a];typeof o=="function"&&typeof l=="function"&&a[0]==="o"&&a[1]==="n"&&a.charCodeAt(2)>=65&&a.charCodeAt(2)<=90?t[a]=k(o,l):(a==="className"||a==="UNSAFE_className")&&typeof o=="string"&&typeof l=="string"?t[a]=P(o,l):a==="id"&&o&&l?t.id=I(o,l):t[a]=l!==void 0?l:o}}return t}const z=new Set(["id"]),A=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),N=/^(data-.*)$/;function Q(e,t={}){let{labelable:n,propNames:r}=t,a={};for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(z.has(o)||n&&A.has(o)||r!=null&&r.has(o)||N.test(o))&&(a[o]=e[o]);return a}function Z(e){if(O())e.focus({preventScroll:!0});else{let t=_(e);e.focus(),D(t)}}let $=null;function O(){if($==null){$=!1;try{var e=document.createElement("div");e.focus({get preventScroll(){return $=!0,!0}})}catch{}}return $}function _(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function D(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}let u=new Map,v=new Set;function y(){if(typeof window>"u")return;let e=n=>{let r=u.get(n.target);r||(r=new Set,u.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{let r=u.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),u.delete(n.target)),u.size===0)){for(let a of v)a();v.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?y():document.addEventListener("DOMContentLoaded",y));function V(e){requestAnimationFrame(()=>{u.size===0?e():v.add(e)})}function ee(){let e=f.useRef(new Map),t=f.useCallback((a,o,l,c)=>{let i=c!=null&&c.once?(...s)=>{e.current.delete(l),l(...s)}:l;e.current.set(l,{type:o,eventTarget:a,fn:i,options:c}),a.addEventListener(o,l,c)},[]),n=f.useCallback((a,o,l,c)=>{var i;let s=((i=e.current.get(l))===null||i===void 0?void 0:i.fn)||l;a.removeEventListener(o,s,c),e.current.delete(l)},[]),r=f.useCallback(()=>{e.current.forEach((a,o)=>{n(a.eventTarget,a.type,o,a.options)})},[n]);return f.useEffect(()=>r,[r]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:r}}function te(e,t){let{id:n,"aria-label":r,"aria-labelledby":a}=e;return n=S(n),a&&r?a=[...new Set([...a.trim().split(/\s+/),n])].join(" "):a&&(a=a.trim().split(/\s+/).join(" ")),!r&&!a&&t&&(r=t),{id:n,"aria-label":r,"aria-labelledby":a}}function re(e,t){const n=f.useRef(!0);f.useEffect(()=>{n.current?n.current=!1:e()},t)}function G(){return typeof window.ResizeObserver<"u"}function ne(e){const{ref:t,onResize:n}=e;f.useEffect(()=>{let r=t==null?void 0:t.current;if(r)if(G()){const a=new window.ResizeObserver(o=>{o.length&&n()});return a.observe(r),()=>{r&&a.unobserve(r)}}else return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)}},[n,t])}function ae(e,t){d(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}},[e,t])}function oe(e){for(;e&&!H(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function H(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}let W=0;const p=new Map;function le(e){let[t,n]=f.useState(void 0);return d(()=>{if(!e)return;let r=p.get(e);if(r)n(r.element.id);else{let a=`react-aria-description-${W++}`;n(a);let o=document.createElement("div");o.id=a,o.style.display="none",o.textContent=e,document.body.appendChild(o),r={refCount:0,element:o},p.set(e,r)}return r.refCount++,()=>{--r.refCount===0&&(r.element.remove(),p.delete(e))}},[e]),{"aria-describedby":e?t:void 0}}function w(e){var t;return typeof window>"u"||window.navigator==null?!1:((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands.some(n=>e.test(n.brand)))||e.test(window.navigator.userAgent)}function g(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function C(){return g(/^Mac/i)}function j(){return g(/^iPhone/i)}function U(){return g(/^iPad/i)||C()&&navigator.maxTouchPoints>1}function q(){return j()||U()}function fe(){return C()||q()}function ce(){return w(/AppleWebKit/i)&&!X()}function X(){return w(/Chrome/i)}function Y(){return w(/Android/i)}function ie(e,t,n,r){let a=f.useRef(n);a.current=n;let o=n==null;f.useEffect(()=>{if(o)return;let l=e.current,c=i=>a.current.call(this,i);return l.addEventListener(t,c,r),()=>{l.removeEventListener(t,c,r)}},[e,t,r,o])}function se(e,t){let n=x(e,t,"left"),r=x(e,t,"top"),a=t.offsetWidth,o=t.offsetHeight,l=e.scrollLeft,c=e.scrollTop,i=l+e.offsetWidth,s=c+e.offsetHeight;n<=l?l=n:n+a>i&&(l+=n+a-i),r<=c?c=r:r+o>s&&(c+=r+o-s),e.scrollLeft=l,e.scrollTop=c}function x(e,t,n){const r=n==="left"?"offsetLeft":"offsetTop";let a=0;for(;t.offsetParent&&(a+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){a-=e[r];break}t=t.offsetParent}return a}function ue(e){return e.mozInputSource===0&&e.isTrusted?!0:Y()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function de(e){return e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}export{J as $,Q as a,V as b,Z as c,d,ae as e,ee as f,de as g,ue as h,q as i,ie as j,C as k,le as l,B as m,re as n,K as o,te as p,se as q,oe as r,k as s,S as t,ne as u,fe as v,ce as w,U as x,j as y,Y as z};
