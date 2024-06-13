var v=Object.defineProperty;var g=(r,e,t)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(g(r,typeof e!="symbol"?e+"":e,t),t);import{j as P}from"./jsx-runtime-ea7736fc.js";import{R as d,r as i}from"./index-6c164b11.js";import{c as y}from"./string-cf4adbb3.js";function T(...r){return(...e)=>{for(const t of r)typeof t=="function"&&t(...e)}}function p(...r){const e={...r[0]};for(let t=1;t<r.length;t++){const n=r[t];for(const o in n){const s=e[o],u=n[o];typeof s=="function"&&typeof u=="function"&&o.startsWith("o")&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?e[o]=T(s,u):(o==="className"||o==="UNSAFE_className")&&typeof s=="string"&&typeof u=="string"?e[o]=y(s,u):e[o]=u!==void 0?u:s}}return e}const b=typeof window<"u"?d.useLayoutEffect:()=>{};class S{constructor(e,t){c(this,"nativeEvent");c(this,"target");c(this,"currentTarget");c(this,"relatedTarget");c(this,"bubbles");c(this,"cancelable");c(this,"defaultPrevented");c(this,"eventPhase");c(this,"isTrusted");c(this,"timeStamp");c(this,"type");this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}}function E(r){const e=i.useRef({isFocused:!1,onBlur:r,observer:null});return e.current.onBlur=r,b(()=>{const t=e.current;return()=>{t.observer&&(t.observer.disconnect(),t.observer=null)}},[]),i.useCallback(t=>{if(t.target instanceof HTMLButtonElement||t.target instanceof HTMLInputElement||t.target instanceof HTMLTextAreaElement||t.target instanceof HTMLSelectElement){e.current.isFocused=!0;const n=t.target,o=s=>{e.current.isFocused=!1,n.disabled&&e.current.onBlur(new S("blur",s)),e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};n.addEventListener("focusout",o,{once:!0}),e.current.observer=new MutationObserver(()=>{var s;e.current.isFocused&&n.disabled&&((s=e.current.observer)==null||s.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),e.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[])}function F(r){const{isDisabled:e,onFocus:t,onBlur:n,onFocusChange:o}=r,s=i.useCallback(a=>(a.target===a.currentTarget&&(n&&n(a),o&&o(!1)),!0),[n,o]),u=E(s),l=i.useCallback(a=>{a.target===a.currentTarget&&document.activeElement===a.target&&(t&&t(a),o&&o(!0),u(a))},[o,t,u]);return{focusProps:{onFocus:!e&&(t||o||n)?l:void 0,onBlur:!e&&(n||o)?s:void 0}}}function w(r){if(R())r.focus({preventScroll:!0});else{const e=L(r);r.focus(),C(e)}}let f=!1;function R(){if(!f){f=!1;try{document.createElement("div").focus({get preventScroll(){return f=!0,!0}})}catch{}}return f}function L(r){let e=r.parentNode;const t=[],n=document.scrollingElement??document.documentElement;for(;e instanceof HTMLElement&&e!==n;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&t.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return n instanceof HTMLElement&&t.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),t}function C(r){for(const{element:e,scrollTop:t,scrollLeft:n}of r)e.scrollTop=t,e.scrollLeft=n}function m(r){if(r){let e=!0;return t=>{const n={...t,preventDefault(){t.preventDefault()},isDefaultPrevented(){return t.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){e=!1}};r(n),e&&t.stopPropagation()}}else return()=>{}}function D(r){return{keyboardProps:r.isDisabled?{}:{onKeyDown:m(r.onKeyDown),onKeyUp:m(r.onKeyUp)}}}function x(r,e){b(()=>{var t;return(t=r.ref)!=null&&t.current&&(r.ref.current=e.current),()=>{var n;(n=r.ref)!=null&&n.current&&(r.ref.current=null)}},[r,e])}const h=d.createContext(null);function H(r){const e=i.useContext(h)||{};x(e,r);let{ref:t,...n}=e;return n}function N(r,e){const{children:t,...n}=r,o={...n,ref:e};return P.jsx(h.Provider,{value:o,children:t})}const B=d.forwardRef(N);function _(r,e){const{focusProps:t}=F(r),{keyboardProps:n}=D(r),o=p(t,n),s=H(e),u=r.isDisabled?{}:s,l=i.useRef(r.autoFocus);return i.useEffect(()=>{l.current&&e.current&&w(e.current),l.current=!1},[e]),{focusableProps:p({...o,tabIndex:r.excludeFromTabOrder&&!r.isDisabled?-1:void 0},u)}}B.__docgenInfo={description:"",methods:[],displayName:"_FocusableProvider",props:{id:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},tabIndex:{required:!1,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},className:{required:!1,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},role:{required:!1,tsType:{name:"union",raw:"React.AriaRole | undefined",elements:[{name:"ReactAriaRole",raw:"React.AriaRole"},{name:"undefined"}]},description:""},style:{required:!1,tsType:{name:"union",raw:"React.CSSProperties | undefined",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"undefined"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{F as a,b,D as c,w as f,p as m,_ as u};
