import{b as M,y as Y,z as ee,D as O,e as ne,i as ae,$ as re,m as te,k as se,G}from"./import-48ca4fc0.js";import{r as g,s as ie,R as oe,a as F,j as x}from"./index-06645c1d.js";import"./index-b2111d6b.js";import{f as le,y as Z,l as ce,t as ue,b as de,B as fe,z as be,i as I,D as H,E as ge,F as ve,C as me,A as _}from"./useCalendarState-74ae3c0e.js";import{u as $e,a as P}from"./useEvent-f3a840a8.js";import{u as De}from"./use-dom-ref-1eeb366d.js";import{B as q}from"./button-f9a915f3.js";function pe(n,e){var p,u,R,h;const l=le(n);if(e.visibleRange==null)return{};const m=Z(e.visibleRange.start,e.timeZone??"UTC"),$=Z(e.visibleRange.start,e.timeZone??"UTC"),b=$e([!!n.errorMessage,n.validationState]);ce.set(e,{ariaLabel:n["aria-label"]??"",ariaLabelledBy:n["aria-labelledby"],errorMessageId:b});const c=g.useRef(!1),t=n.isDisabled||((p=e.isNextVisibleRangeInvalid)==null?void 0:p.call(e));t&&c.current&&(c.current=!1,(u=e.setFocused)==null||u.call(e,!0));const i=g.useRef(!1),o=n.isDisabled||((R=e.isPreviousVisibleRangeInvalid)==null?void 0:R.call(e));o&&i.current&&(i.current=!1,(h=e.setFocused)==null||h.call(e,!0));const a=ue({id:n.id,"aria-label":[n["aria-label"],$].filter(Boolean).join(", "),"aria-labelledby":n["aria-labelledby"]});return{calendarProps:{...l,...a,role:"group","aria-describedby":n["aria-describedby"]||void 0},nextButtonProps:{onPress:()=>{var d;return(d=e.focusNextPage)==null?void 0:d.call(e)},"aria-label":"next",isDisabled:t,onFocus:()=>c.current=!0,onBlur:()=>c.current=!1},prevButtonProps:{onPress:()=>{var d;return(d=e.focusPreviousPage)==null?void 0:d.call(e)},"aria-label":"previous",isDisabled:o,onFocus:()=>i.current=!0,onBlur:()=>i.current=!1},title:m}}function Re(n,e,l){const m=pe(n,e),$=g.useRef(!1),b=g.useRef(typeof window<"u"?window:null);P(b,"pointerdown",t=>{$.current=t.width===0&&t.height===0});const c=t=>{var a;if($.current){$.current=!1;return}if(e.setDragging(!1),!e.anchorDate)return;const i=t.target,o=document.getElementById(m.calendarProps.id);o&&o.contains(document.activeElement)&&(!o.contains(i)||!i.closest('button, [role="button"]'))&&((a=e.selectFocusedDate)==null||a.call(e))};return P(b,"pointerup",c),P(b,"pointercancel",c),m.calendarProps.onBlur=t=>{var i;(!t.relatedTarget||!l.current.contains(t.relatedTarget))&&e.anchorDate&&((i=e.selectFocusedDate)==null||i.call(e))},P(l,"touchmove",t=>{e.isDragging&&t.preventDefault()},{passive:!1,capture:!0}),m}function he(n){var N,E,z,k;const{value:e,defaultValue:l,onChange:m,createCalendar:$,locale:b,visibleDuration:c={months:1},minValue:t,maxValue:i,...o}=n,[a,p]=de(e,l||null,m),[u,R]=g.useState(null);let h="center";if(a&&a.start&&a.end){const f=fe(M(a.start),c,b,t,i).add(c).subtract({days:1});a.end.compare(f)>0&&(h="start")}const d=g.useRef(null),[v,T]=g.useState(),U=g.useMemo(()=>Y(t,v==null?void 0:v.start),[t,v]),V=g.useMemo(()=>ee(i,v==null?void 0:v.end),[i,v]),s=be({...o,value:a&&a.start,createCalendar:$,locale:b,visibleDuration:c,minValue:U,maxValue:V,selectionAlignment:h}),B=r=>{r&&n.isDateUnavailable&&!n.allowsNonContiguousRanges?(d.current={start:H(r,s,-1),end:H(r,s,1)},T(d.current)):(d.current=null,T(void 0))},S=g.useRef(s.visibleRange);(!O((N=s.visibleRange)==null?void 0:N.start,(E=S.current)==null?void 0:E.start)||!O((z=s.visibleRange)==null?void 0:z.end,(k=S.current)==null?void 0:k.end))&&(B(u),S.current=s.visibleRange);const w=r=>{r?(R(r),B(r)):(R(null),B(null))},C=u?A(u,s.focusedDate):a&&A(a.start,a.end),j=r=>{var f;if(!n.isReadOnly&&(r=ge(r,U,V),r=ve(r,(f=s.visibleRange)==null?void 0:f.start,n.isDateUnavailable),!!r))if(!u)w(r);else{const D=A(u,r);p({start:J(D.start,a==null?void 0:a.start),end:J(D.end,a==null?void 0:a.end)}),w(null)}},[K,Q]=g.useState(!1),{isDateUnavailable:y}=n,W=g.useMemo(()=>!a||u?!1:y&&(y(a.start)||y(a.end))?!0:I(a.start,t,i)||I(a.end,t,i),[y,a,u,t,i]),X=n.validationState||(W?"invalid":null);return{...s,value:a,setValue:p,anchorDate:u,setAnchorDate:w,highlightedRange:C,validationState:X,selectFocusedDate(){j(s.focusedDate)},selectDate:j,highlightDate(r){var f;u&&((f=s.setFocusedDate)==null||f.call(s,r))},isSelected(r){var f,D;return C&&r.compare(C.start)>=0&&r.compare(C.end)<=0&&!((f=s.isCellDisabled)!=null&&f.call(s,r))&&!((D=s.isCellUnavailable)!=null&&D.call(s,r))},isInvalid(r){var f,D,L;return((f=s.isInvalid)==null?void 0:f.call(s,r))||I(r,(D=d.current)==null?void 0:D.start,(L=d.current)==null?void 0:L.end)},isDragging:K,setDragging:Q}}function A(n,e){return!n||!e?null:(e.compare(n)<0&&([n,e]=[e,n]),{start:M(n),end:M(e)})}function J(n,e){return n=ne(n,e.calendar||new ae),e&&"hour"in e?e.set(n):n}const xe=ie("div",{width:"fit-content",backgroundColor:"$background",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.08)",borderRadius:"$md",padding:"$4","& .calendar-body":{display:"flex",justifyContent:"space-between",gap:"$2"},"& .calendar-footer":{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"$2",marginTop:"$6",paddingTop:"$6",borderTop:"1px solid $gray40"},"& .calendar-footer .preview-date":{margin:0,fontSize:"$body3"},"& .calendar-footer button":{padding:"$1 $2_5",height:"$8",fontSize:"$label2"}}),Ce=oe.forwardRef((n,e)=>{const{state:l,hasFooter:m,css:$={},onCancelCallback:b,onApplyCallback:c,...t}=n,{locale:i}=re(),o=he({...t,visibleDuration:{months:2},locale:i,createCalendar:te}),a=De(e),{calendarProps:p,prevButtonProps:u,nextButtonProps:R}=Re(t,o,a),h=se({}),d=()=>{b==null||b(),l==null||l.close()},v=()=>{l&&(c==null||c(l.value)),l==null||l.close()};return F(xe,{ref:a,css:$,children:[x(me,{state:o,variant:"range",calendarProps:p,prevButtonProps:u,nextButtonProps:R}),F("div",{className:"calendar-body",children:[x(_,{state:o}),x(_,{state:o,offset:{months:1}})]}),m&&F("div",{className:"calendar-footer",children:[x("p",{className:"preview-date",children:o.value&&h.formatRange(o.value.start.toDate(G()),o.value.end.toDate(G()))}),x(q,{variant:"ghost",onPress:d,children:"Cancel"}),x(q,{variant:"primary",onPress:v,children:"Apply"})]})]})}),Ae=Ce;export{Ae as R};
