import{_ as C}from"./_define_property-1764bf98.js";import{r as b,R as T}from"./index-2f0c84ee.js";import{$ as M,b as W,c as A,d as g,e as j}from"./module-f9a02953.js";import{a as q,b as z,c as I,d as H,e as U,f as G}from"./module-c212b86e.js";function V(t){if(G()==="virtual"){let e=document.activeElement;W(()=>{document.activeElement===e&&document.contains(t)&&A(t)})}else A(t)}function J(t){if(!(t instanceof HTMLElement)&&!(t instanceof SVGElement))return!1;let{display:e,visibility:r}=t.style,n=e!=="none"&&r!=="hidden"&&r!=="collapse";if(n){const{getComputedStyle:c}=t.ownerDocument.defaultView;let{display:o,visibility:i}=c(t);n=o!=="none"&&i!=="hidden"&&i!=="collapse"}return n}function Y(t,e){return!t.hasAttribute("hidden")&&(t.nodeName==="DETAILS"&&e&&e.nodeName!=="SUMMARY"?t.hasAttribute("open"):!0)}function D(t,e){return t.nodeName!=="#comment"&&J(t)&&Y(t,e)&&(!t.parentElement||D(t.parentElement,t))}const _=T.createContext(null);let d=null;function se(t){let{children:e,contain:r,restoreFocus:n,autoFocus:c}=t,o=b.useRef(),i=b.useRef(),a=b.useRef([]),u=b.useContext(_);var l;let s=(l=u==null?void 0:u.scopeRef)!==null&&l!==void 0?l:null,$=b.useMemo(()=>d&&f.getTreeNode(d)&&!w(d,s)?d:s,[s]);g(()=>{let h=o.current.nextSibling,P=[];for(;h&&h!==i.current;)P.push(h),h=h.nextSibling;a.current=P},[e,$]),f.getTreeNode($)&&!f.getTreeNode(a)&&f.addTreeNode(a,$);let E=f.getTreeNode(a);E.contain=r,te(a,n,r),O(a,r),ne(a,n,r),ee(a,c),g(()=>{if(a)return()=>{let h=f.getTreeNode(a).parent.scopeRef;(a===d||w(a,d))&&(!h||f.getTreeNode(h))&&(d=h),f.removeTreeNode(a)}},[a,$]);let x=Q(a);return T.createElement(_.Provider,{value:{scopeRef:a,focusManager:x}},T.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:o}),e,T.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:i}))}function Q(t){return{focusNext(e={}){let r=t.current,{from:n,tabbable:c,wrap:o,accept:i}=e,a=n||document.activeElement,u=r[0].previousElementSibling,l=m(N(r),{tabbable:c,accept:i},r);l.currentNode=p(a,r)?a:u;let s=l.nextNode();return!s&&o&&(l.currentNode=u,s=l.nextNode()),s&&v(s,!0),s},focusPrevious(e={}){let r=t.current,{from:n,tabbable:c,wrap:o,accept:i}=e,a=n||document.activeElement,u=r[r.length-1].nextElementSibling,l=m(N(r),{tabbable:c,accept:i},r);l.currentNode=p(a,r)?a:u;let s=l.previousNode();return!s&&o&&(l.currentNode=u,s=l.previousNode()),s&&v(s,!0),s},focusFirst(e={}){let r=t.current,{tabbable:n,accept:c}=e,o=m(N(r),{tabbable:n,accept:c},r);o.currentNode=r[0].previousElementSibling;let i=o.nextNode();return i&&v(i,!0),i},focusLast(e={}){let r=t.current,{tabbable:n,accept:c}=e,o=m(N(r),{tabbable:n,accept:c},r);o.currentNode=r[r.length-1].nextElementSibling;let i=o.previousNode();return i&&v(i,!0),i}}}const k=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],X=k.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";k.push('[tabindex]:not([tabindex="-1"]):not([disabled])');const Z=k.join(':not([hidden]):not([tabindex="-1"]),');function N(t){return t[0].parentElement}function F(t){let e=f.getTreeNode(d);for(;e&&e.scopeRef!==t;){if(e.contain)return!1;e=e.parent}return!0}function O(t,e){let r=b.useRef(),n=b.useRef(null);g(()=>{let c=t.current;if(!e){n.current&&(cancelAnimationFrame(n.current),n.current=null);return}let o=u=>{if(u.key!=="Tab"||u.altKey||u.ctrlKey||u.metaKey||!F(t))return;let l=document.activeElement,s=t.current;if(!p(l,s))return;let $=m(N(s),{tabbable:!0},s);$.currentNode=l;let E=u.shiftKey?$.previousNode():$.nextNode();E||($.currentNode=u.shiftKey?s[s.length-1].nextElementSibling:s[0].previousElementSibling,E=u.shiftKey?$.previousNode():$.nextNode()),u.preventDefault(),E&&v(E,!0)},i=u=>{(!d||w(d,t))&&p(u.target,t.current)?(d=t,r.current=u.target):F(t)&&!y(u.target,t)?r.current?r.current.focus():d&&S(d.current):F(t)&&(r.current=u.target)},a=u=>{n.current=requestAnimationFrame(()=>{F(t)&&!y(document.activeElement,t)&&(d=t,document.body.contains(u.target)?(r.current=u.target,r.current.focus()):d&&S(d.current))})};return document.addEventListener("keydown",o,!1),document.addEventListener("focusin",i,!1),c.forEach(u=>u.addEventListener("focusin",i,!1)),c.forEach(u=>u.addEventListener("focusout",a,!1)),()=>{document.removeEventListener("keydown",o,!1),document.removeEventListener("focusin",i,!1),c.forEach(u=>u.removeEventListener("focusin",i,!1)),c.forEach(u=>u.removeEventListener("focusout",a,!1))}},[t,e]),b.useEffect(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n])}function B(t){return y(t)}function p(t,e){return e.some(r=>r.contains(t))}function y(t,e=null){for(let{scopeRef:r}of f.traverse(f.getTreeNode(e)))if(p(t,r.current))return!0;return!1}function de(t){return y(t,d)}function w(t,e){var r;let n=(r=f.getTreeNode(e))===null||r===void 0?void 0:r.parent;for(;n;){if(n.scopeRef===t)return!0;n=n.parent}return!1}function v(t,e=!1){if(t!=null&&!e)try{V(t)}catch{}else if(t!=null)try{t.focus()}catch{}}function S(t,e=!0){let r=t[0].previousElementSibling,n=m(N(t),{tabbable:e},t);n.currentNode=r;let c=n.nextNode();e&&!c&&(n=m(N(t),{tabbable:!1},t),n.currentNode=r,c=n.nextNode()),v(c)}function ee(t,e){const r=T.useRef(e);b.useEffect(()=>{r.current&&(d=t,p(document.activeElement,d.current)||S(t.current)),r.current=!1},[t])}function te(t,e,r){g(()=>{if(e||r)return;let n=t.current,c=o=>{let i=o.target;p(i,t.current)?d=t:B(i)||(d=null)};return document.addEventListener("focusin",c,!1),n.forEach(o=>o.addEventListener("focusin",c,!1)),()=>{document.removeEventListener("focusin",c,!1),n.forEach(o=>o.removeEventListener("focusin",c,!1))}},[t,e,r])}function re(t){let e=f.getTreeNode(d);for(;e&&e.scopeRef!==t;){if(e.nodeToRestore)return!1;e=e.parent}return(e==null?void 0:e.scopeRef)===t}function ne(t,e,r){const n=b.useRef(typeof document<"u"?document.activeElement:null);g(()=>{let c=t.current;if(!e||r)return;let o=()=>{(!d||w(d,t))&&(d=t)};return document.addEventListener("focusin",o,!1),c.forEach(i=>i.addEventListener("focusin",o,!1)),()=>{document.removeEventListener("focusin",o,!1),c.forEach(i=>i.removeEventListener("focusin",o,!1))}},[t,r]),g(()=>{if(!e)return;f.getTreeNode(t).nodeToRestore=n.current;let c=o=>{if(o.key!=="Tab"||o.altKey||o.ctrlKey||o.metaKey)return;let i=document.activeElement;if(!p(i,t.current))return;let a=f.getTreeNode(t).nodeToRestore,u=m(document.body,{tabbable:!0});u.currentNode=i;let l=o.shiftKey?u.previousNode():u.nextNode();if((!document.body.contains(a)||a===document.body)&&(a=null,f.getTreeNode(t).nodeToRestore=null),(!l||!p(l,t.current))&&a){u.currentNode=a;do l=o.shiftKey?u.previousNode():u.nextNode();while(p(l,t.current));o.preventDefault(),o.stopPropagation(),l?v(l,!0):B(a)?v(a,!0):i.blur()}};return r||document.addEventListener("keydown",c,!0),()=>{r||document.removeEventListener("keydown",c,!0);let o=f.getTreeNode(t).nodeToRestore;if(e&&o&&(p(document.activeElement,t.current)||document.activeElement===document.body&&re(t))){let i=f.clone();requestAnimationFrame(()=>{if(document.activeElement===document.body){let a=i.getTreeNode(t);for(;a;){if(a.nodeToRestore&&document.body.contains(a.nodeToRestore)){v(a.nodeToRestore);return}a=a.parent}for(a=i.getTreeNode(t);a;){if(a.scopeRef&&f.getTreeNode(a.scopeRef)){S(a.scopeRef.current,!0);return}a=a.parent}}})}}},[t,e,r])}function m(t,e,r){let n=e!=null&&e.tabbable?Z:X,c=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode(o){var i;return!(e==null||(i=e.from)===null||i===void 0)&&i.contains(o)?NodeFilter.FILTER_REJECT:o.matches(n)&&D(o)&&(!r||p(o,r))&&(!(e!=null&&e.accept)||e.accept(o))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return e!=null&&e.from&&(c.currentNode=e.from),c}function fe(t,e={}){return{focusNext(r={}){let n=t.current;if(!n)return;let{from:c,tabbable:o=e.tabbable,wrap:i=e.wrap,accept:a=e.accept}=r,u=c||document.activeElement,l=m(n,{tabbable:o,accept:a});n.contains(u)&&(l.currentNode=u);let s=l.nextNode();return!s&&i&&(l.currentNode=n,s=l.nextNode()),s&&v(s,!0),s},focusPrevious(r=e){let n=t.current;if(!n)return;let{from:c,tabbable:o=e.tabbable,wrap:i=e.wrap,accept:a=e.accept}=r,u=c||document.activeElement,l=m(n,{tabbable:o,accept:a});if(n.contains(u))l.currentNode=u;else{let $=L(l);return $&&v($,!0),$}let s=l.previousNode();return!s&&i&&(l.currentNode=n,s=L(l)),s&&v(s,!0),s},focusFirst(r=e){let n=t.current;if(!n)return;let{tabbable:c=e.tabbable,accept:o=e.accept}=r,a=m(n,{tabbable:c,accept:o}).nextNode();return a&&v(a,!0),a},focusLast(r=e){let n=t.current;if(!n)return;let{tabbable:c=e.tabbable,accept:o=e.accept}=r,i=m(n,{tabbable:c,accept:o}),a=L(i);return a&&v(a,!0),a}}}function L(t){let e,r;do r=t.lastChild(),r&&(e=r);while(r);return e}class R{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,r,n){let c=this.fastMap.get(r??null),o=new K({scopeRef:e});c.addChild(o),o.parent=c,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}removeTreeNode(e){if(e===null)return;let r=this.fastMap.get(e),n=r.parent;for(let o of this.traverse())o!==r&&r.nodeToRestore&&o.nodeToRestore&&r.scopeRef.current&&p(o.nodeToRestore,r.scopeRef.current)&&(o.nodeToRestore=r.nodeToRestore);let c=r.children;n.removeChild(r),c.length>0&&c.forEach(o=>n.addChild(o)),this.fastMap.delete(r.scopeRef)}*traverse(e=this.root){if(e.scopeRef!=null&&(yield e),e.children.length>0)for(let r of e.children)yield*this.traverse(r)}clone(){let e=new R;for(let r of this.traverse())e.addTreeNode(r.scopeRef,r.parent.scopeRef,r.nodeToRestore);return e}constructor(){C(this,"fastMap",new Map),this.root=new K({scopeRef:null}),this.fastMap.set(null,this.root)}}class K{addChild(e){this.children.push(e),e.parent=this}removeChild(e){this.children.splice(this.children.indexOf(e),1),e.parent=void 0}constructor(e){C(this,"children",[]),C(this,"contain",!1),this.scopeRef=e.scopeRef}}let f=new R;function be(t={}){let{autoFocus:e=!1,isTextInput:r,within:n}=t,c=b.useRef({isFocused:!1,isFocusVisible:e||q()}),[o,i]=b.useState(!1),[a,u]=b.useState(()=>c.current.isFocused&&c.current.isFocusVisible),l=b.useCallback(()=>u(c.current.isFocused&&c.current.isFocusVisible),[]),s=b.useCallback(x=>{c.current.isFocused=x,i(x),l()},[l]);z(x=>{c.current.isFocusVisible=x,l()},[],{isTextInput:r});let{focusProps:$}=I({isDisabled:n,onFocusChange:s}),{focusWithinProps:E}=H({isDisabled:!n,onFocusWithinChange:s});return{isFocused:o,isFocusVisible:c.current.isFocused&&a,focusProps:n?E:$}}let oe=T.createContext(null);function ae(t){let e=b.useContext(oe)||{};j(e,t);let{ref:r,...n}=e;return n}function $e(t,e){let{focusProps:r}=I(t),{keyboardProps:n}=U(t),c=M(r,n),o=ae(e),i=t.isDisabled?{}:o,a=b.useRef(t.autoFocus);return b.useEffect(()=>{a.current&&e.current&&V(e.current),a.current=!1},[e]),{focusableProps:M({...c,tabIndex:t.excludeFromTabOrder&&!t.isDisabled?-1:void 0},i)}}export{$e as $,be as a,fe as b,m as c,V as d,se as e,de as f};
