import{f as Q,$ as B,c as ue}from"./module-f9a02953.js";import{r as m}from"./index-2f0c84ee.js";import{m as Z,j as ie,e as le}from"./module-c212b86e.js";import{a as ee}from"./module-8203fd97.js";import{$ as oe}from"./module-fd182f49.js";import{a as Y,b as G,$ as ae}from"./module-f1247eca.js";import{e as te}from"./real-module-4602f142.js";const q=new WeakMap;function X(u,n){let e=q.get(u);if(!e)throw new Error("Unknown slider state");return`${e}-${n}`}function $e(u,n,e){let{labelProps:a,fieldProps:K}=ee(u),l=u.orientation==="vertical";var D;q.set(n,(D=a.id)!==null&&D!==void 0?D:K.id);let{direction:_}=te(),{addGlobalListener:P,removeGlobalListener:T}=Q();const f=m.useRef(null),y=m.useRef(null);y.current=n;const E=_==="rtl",c=m.useRef(null),{moveProps:k}=Z({onMoveStart(){c.current=null},onMove({deltaX:r,deltaY:g}){let{height:s,width:h}=e.current.getBoundingClientRect(),p=l?s:h;c.current==null&&(c.current=y.current.getThumbPercent(f.current)*p);let $=l?g:r;if((l||E)&&($=-$),c.current+=$,f.current!=null&&e.current){const R=Y(c.current/p,0,1);y.current.setThumbPercent(f.current,R)}},onMoveEnd(){f.current!=null&&(y.current.setThumbDragging(f.current,!1),f.current=null)}});let F=m.useRef(void 0),I=(r,g,s,h)=>{if(e.current&&!u.isDisabled&&n.values.every((p,$)=>!n.isThumbDragging($))){let{height:p,width:$,top:R,left:L}=e.current.getBoundingClientRect(),z=l?p:$,A=((l?h:s)-(l?R:L))/z;(_==="rtl"||l)&&(A=1-A);let i=n.getPercentValue(A),o,b=n.values.findIndex(V=>i-V<0);if(b===0)o=b;else if(b===-1)o=n.values.length-1;else{let V=n.values[b-1],t=n.values[b];Math.abs(V-i)<Math.abs(t-i)?o=b-1:o=b}o>=0&&n.isThumbEditable(o)?(r.preventDefault(),f.current=o,n.setFocusedThumb(o),F.current=g,n.setThumbDragging(f.current,!0),n.setThumbValue(o,i),P(window,"mouseup",w,!1),P(window,"touchend",w,!1),P(window,"pointerup",w,!1)):f.current=null}},w=r=>{var g,s;((s=r.pointerId)!==null&&s!==void 0?s:(g=r.changedTouches)===null||g===void 0?void 0:g[0].identifier)===F.current&&(f.current!=null&&(n.setThumbDragging(f.current,!1),f.current=null),T(window,"mouseup",w,!1),T(window,"touchend",w,!1),T(window,"pointerup",w,!1))};return"htmlFor"in a&&a.htmlFor&&(delete a.htmlFor,a.onClick=()=>{var r;(r=document.getElementById(X(n,0)))===null||r===void 0||r.focus(),ie("keyboard")}),{labelProps:a,groupProps:{role:"group",...K},trackProps:B({onMouseDown(r){r.button!==0||r.altKey||r.ctrlKey||r.metaKey||I(r,void 0,r.clientX,r.clientY)},onPointerDown(r){r.pointerType==="mouse"&&(r.button!==0||r.altKey||r.ctrlKey||r.metaKey)||I(r,r.pointerId,r.clientX,r.clientY)},onTouchStart(r){I(r,r.changedTouches[0].identifier,r.changedTouches[0].clientX,r.changedTouches[0].clientY)},style:{position:"relative",touchAction:"none"}},k),outputProps:{htmlFor:n.values.map((r,g)=>X(n,g)).join(" "),"aria-live":"off"}}}function ve(u,n){let{index:e,isRequired:a,validationState:K,trackRef:l,inputRef:D,orientation:_=n.orientation}=u,P=u.isDisabled||n.isDisabled,T=_==="vertical",{direction:f}=te(),{addGlobalListener:y,removeGlobalListener:E}=Q(),c=q.get(n);var k;const{labelProps:F,fieldProps:I}=ee({...u,id:X(n,e),"aria-labelledby":`${c} ${(k=u["aria-labelledby"])!==null&&k!==void 0?k:""}`.trim()}),w=n.values[e],r=m.useCallback(()=>{D.current&&ue(D.current)},[D]),g=n.focusedThumb===e;m.useEffect(()=>{g&&r()},[g,r]);const s=m.useRef(null);s.current=n;let h=f==="rtl",p=m.useRef(null),{keyboardProps:$}=le({onKeyDown(i){let{getThumbMaxValue:o,getThumbMinValue:b,decrementThumb:V,incrementThumb:t,setThumbValue:d,setThumbDragging:v,pageSize:U}=s.current;if(!/^(PageUp|PageDown|Home|End)$/.test(i.key)){i.continuePropagation();return}switch(i.preventDefault(),v(e,!0),i.key){case"PageUp":t(e,U);break;case"PageDown":V(e,U);break;case"Home":d(e,b(e));break;case"End":d(e,o(e));break}v(e,!1)}}),{moveProps:R}=Z({onMoveStart(){p.current=null,s.current.setThumbDragging(e,!0)},onMove({deltaX:i,deltaY:o,pointerType:b,shiftKey:V}){const{getThumbPercent:t,setThumbPercent:d,decrementThumb:v,incrementThumb:U,step:j,pageSize:H}=s.current;let{width:ne,height:re}=l.current.getBoundingClientRect(),N=T?re:ne;if(p.current==null&&(p.current=t(e)*N),b==="keyboard")i>0&&h||i<0&&!h||o>0?v(e,V?H:j):U(e,V?H:j);else{let C=T?o:i;(T||h)&&(C=-C),p.current+=C,d(e,Y(p.current/N,0,1))}},onMoveEnd(){s.current.setThumbDragging(e,!1)}});n.setThumbEditable(e,!P);const{focusableProps:L}=oe(B(u,{onFocus:()=>n.setFocusedThumb(e),onBlur:()=>n.setFocusedThumb(void 0)}),D);let z=m.useRef(void 0),M=i=>{r(),z.current=i,n.setThumbDragging(e,!0),y(window,"mouseup",x,!1),y(window,"touchend",x,!1),y(window,"pointerup",x,!1)},x=i=>{var o,b;((b=i.pointerId)!==null&&b!==void 0?b:(o=i.changedTouches)===null||o===void 0?void 0:o[0].identifier)===z.current&&(r(),n.setThumbDragging(e,!1),E(window,"mouseup",x,!1),E(window,"touchend",x,!1),E(window,"pointerup",x,!1))},S=n.getThumbPercent(e);(T||f==="rtl")&&(S=1-S);let A=P?{}:B($,R,{onMouseDown:i=>{i.button!==0||i.altKey||i.ctrlKey||i.metaKey||M()},onPointerDown:i=>{i.button!==0||i.altKey||i.ctrlKey||i.metaKey||M(i.pointerId)},onTouchStart:i=>{M(i.changedTouches[0].identifier)}});return{inputProps:B(L,I,{type:"range",tabIndex:P?void 0:0,min:n.getThumbMinValue(e),max:n.getThumbMaxValue(e),step:n.step,value:w,disabled:P,"aria-orientation":_,"aria-valuetext":n.getThumbValueLabel(e),"aria-required":a||void 0,"aria-invalid":K==="invalid"||void 0,"aria-errormessage":u["aria-errormessage"],onChange:i=>{s.current.setThumbValue(e,parseFloat(i.target.value))}}),thumbProps:{...A,style:{position:"absolute",[T?"top":"left"]:`${S*100}%`,transform:"translate(-50%, -50%)",touchAction:"none"}},labelProps:F,isDragging:n.isThumbDragging(e),isDisabled:P,isFocused:g}}const ce=0,se=100,de=1;function Pe(u){const{isDisabled:n=!1,minValue:e=ce,maxValue:a=se,numberFormatter:K,step:l=de,orientation:D="horizontal"}=u;let _=m.useMemo(()=>{let t=(a-e)/10;return t=G(t,0,t+l,l),Math.max(t,l)},[l,a,e]),P=m.useMemo(()=>W(u.value),[u.value]);var T;let f=m.useMemo(()=>(T=W(u.defaultValue))!==null&&T!==void 0?T:[e],[u.defaultValue,e]),y=J(u.value,u.defaultValue,u.onChange),E=J(u.value,u.defaultValue,u.onChangeEnd);const[c,k]=ae(P,f,y),[F,I]=m.useState(new Array(c.length).fill(!1)),w=m.useRef(new Array(c.length).fill(!0)),[r,g]=m.useState(void 0),s=m.useRef(null);s.current=c;const h=m.useRef(null);h.current=F;function p(t){return(t-e)/(a-e)}function $(t){return t===0?e:c[t-1]}function R(t){return t===c.length-1?a:c[t+1]}function L(t){return w.current[t]}function z(t,d){w.current[t]=d}function M(t,d){if(n||!L(t))return;const v=$(t),U=R(t);d=G(d,v,U,l),s.current=O(s.current,t,d),k(s.current)}function x(t,d){if(n||!L(t))return;const v=h.current[t];h.current=O(h.current,t,d),I(h.current),E&&v&&!h.current.some(Boolean)&&E(s.current)}function S(t){return K.format(t)}function A(t,d){M(t,o(d))}function i(t){return Math.round((t-e)/l)*l+e}function o(t){const d=t*(a-e)+e;return Y(i(d),e,a)}function b(t,d=1){let v=Math.max(d,l);M(t,G(c[t]+v,e,a,l))}function V(t,d=1){let v=Math.max(d,l);M(t,G(c[t]-v,e,a,l))}return{values:c,getThumbValue:t=>c[t],setThumbValue:M,setThumbPercent:A,isThumbDragging:t=>F[t],setThumbDragging:x,focusedThumb:r,setFocusedThumb:g,getThumbPercent:t=>p(c[t]),getValuePercent:p,getThumbValueLabel:t=>S(c[t]),getFormattedValue:S,getThumbMinValue:$,getThumbMaxValue:R,getPercentValue:o,isThumbEditable:L,setThumbEditable:z,incrementThumb:b,decrementThumb:V,step:l,pageSize:_,orientation:D,isDisabled:n}}function O(u,n,e){return u[n]===e?u:[...u.slice(0,n),e,...u.slice(n+1)]}function W(u){if(u!=null)return Array.isArray(u)?u:[u]}function J(u,n,e){return a=>{typeof u=="number"||typeof n=="number"?e==null||e(a[0]):e==null||e(a)}}export{Pe as $,$e as a,ve as b};
