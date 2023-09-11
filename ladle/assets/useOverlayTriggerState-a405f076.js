import{r as p,s as G,R as j,j as N,a as Z,b as Wt}from"./index-4cf56b06.js";import{u as le}from"./use-dom-ref-e8fa133a.js";import{u as se,c as qe,a7 as Kt,a8 as jt,a9 as zt,aa as Ut,a as Zt,r as ge,f as Gt,ab as _e,d as qt,D as pe,e as Ye,ac as te,ad as _t,ae as Yt,h as Re,a0 as Pe,af as Xt,ag as oe,C as Xe,L as Jt,M as Qt,G as er,i as tr,ah as rr,ai as nr,a6 as ue,aj as or,b as ar,ak as ir,al as lr,am as sr,an as cr,x as ur,ao as Je,ap as dr,aq as fr,ar as J,as as mr,at as pr,au as hr,av as br,aw as $r,ax as gr,ay as vr,az as Ee,aA as Qe,aB as yr,aC as Me,aD as xr}from"./useCalendarState-da75e474.js";import{u as Le,a as ke}from"./useEvent-be6395d4.js";import{$ as wr}from"./import-103c32e0.js";import{a as Pr}from"./calendar-5dd2b518.js";function Se(e,t=-1/0,r=1/0){return Math.min(Math.max(e,t),r)}function Er(e,t,r){const{direction:n}=se(),o=p.useMemo(()=>qe(t),[t]),i=a=>{if(a.altKey&&(a.key==="ArrowDown"||a.key==="ArrowUp")&&"setOpen"in e&&(a.preventDefault(),a.stopPropagation(),e.setOpen(!0)),!r)switch(a.key){case"ArrowLeft":a.preventDefault(),a.stopPropagation(),n==="rtl"?o.focusNext():o.focusPrevious();break;case"ArrowRight":a.preventDefault(),a.stopPropagation(),n==="rtl"?o.focusPrevious():o.focusNext();break}},u=()=>{var h;let a=(h=window.event)==null?void 0:h.target;const s=jt(t.current,{tabbable:!0});if(a&&(s.currentNode=a,a=s.previousNode()),!a){let $;do $=s.lastChild(),$&&(a=$);while($)}for(;a!=null&&a.hasAttribute("data-placeholder");){const $=s.previousNode();if($&&$.hasAttribute("data-placeholder"))a=$;else break}a&&a.focus()},{pressProps:l}=Kt({preventFocusOnPress:!0,allowTextSelectionOnPress:!0,onPressStart(a){a.pointerType==="mouse"&&u()},onPress(a){a.pointerType!=="mouse"&&u()}});return{...l,onKeyDown:i}}function Sr(e){const{description:t,errorMessage:r,validationState:n}=e;let{labelProps:o,fieldProps:i}=zt(e);const u=Le([!!t,!!r,n]),l=Le([!!t,!!r,n]);return i={...i,"aria-describedby":[u,l,e["aria-describedby"]].filter(Boolean).join(" ")||void 0},{labelProps:o,fieldProps:i,descriptionProps:{id:u},errorMessageProps:{id:l}}}function Cr(e){const t=p.useRef({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,p.useLayoutEffect(()=>{const r=t.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]),p.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){t.current.isFocused=!0;const n=r.target,o=i=>{var u,l;t.current.isFocused=!1,n.disabled&&((l=(u=t.current).onBlur)==null||l.call(u,new Ut("blur",i))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",o,{once:!0}),t.current.observer=new MutationObserver(()=>{var i;t.current.isFocused&&n.disabled&&((i=t.current.observer)==null||i.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[])}function Dr(e){const{isDisabled:t,onBlurWithin:r,onFocusWithin:n,onFocusWithinChange:o}=e,i=p.useRef({isFocusWithin:!1}),u=p.useCallback(s=>{i.current.isFocusWithin&&!s.currentTarget.contains(s.relatedTarget)&&(i.current.isFocusWithin=!1,r&&r(s),o&&o(!1))},[r,o,i]),l=Cr(u),a=p.useCallback(s=>{!i.current.isFocusWithin&&document.activeElement===s.target&&(n&&n(s),o&&o(!0),i.current.isFocusWithin=!0,l(s))},[n,o,l]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:a,onBlur:u}}}function Tr(e,t,r){const{labelProps:n,fieldProps:o,descriptionProps:i,errorMessageProps:u}=Sr({...e,labelElementType:"span"}),{focusWithinProps:l}=Dr({...e,onBlurWithin:P=>{t.confirmPlaceholder(),e.onBlur&&e.onBlur(P)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),a=t.maxGranularity==="hour"?"selectedTimeDescription":"selectedDateDescription",s=t.value?a:"",h=Zt(s),$=e[ge]==="presentation"?o["aria-describedby"]:[h["aria-describedby"],o["aria-describedby"]].filter(Boolean).join(" ")||void 0,d=e[Gt],g=p.useMemo(()=>d||qe(r),[d,r]),c=Er(t,r,e[ge]==="presentation");_e.set(t,{ariaLabel:"",ariaLabelledBy:[e["aria-labelledby"],n.id].filter(Boolean).join(" ")||"",focusManager:g});const y=p.useRef(e.autoFocus);let w;e[ge]==="presentation"?w={role:"presentation"}:w={...o,role:"group","aria-disabled":e.isDisabled||void 0,"aria-describedby":$},p.useEffect(()=>{y.current&&g.focusFirst(),y.current=!1},[g]);const x=qt(e);return{labelProps:{...n,onClick:()=>{g.focusFirst()}},fieldProps:{...x,...w,...c,...l,onKeyDown(P){e.onKeyDown&&e.onKeyDown(P)},onKeyUp(P){e.onKeyUp&&e.onKeyUp(P)}},descriptionProps:i,errorMessageProps:u}}function Rr(e,t){const r=p.useRef(e);e&&(r.current=e),e=r.current;const{locale:n}=se(),o=p.useMemo(()=>new pe(n),[n]),i=p.useMemo(()=>o.resolvedOptions(),[o]),u=e&&"timeZone"in e?e.timeZone:i.timeZone;if(t=t||(e&&"minute"in e?"minute":"day"),e&&!(t in e))throw new Error("Invalid granularity "+t+" for value "+e.toString());return[t,u]}const de={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,era:!0},Oe={year:5,month:2,day:7,hour:2,minute:15,second:15},Mr={dayperiod:"dayPeriod"};function Lr(e){const{locale:t,createCalendar:r,hideTimeZone:n,isDisabled:o,isReadOnly:i,isRequired:u}=e,l=e.value||e.defaultValue||e.placeholderValue,[a,s]=Rr(l,e.granularity),h=s||"UTC";if(l&&!(a in l))throw new Error("Invalid granularity "+a+" for value "+l.toString());const $=p.useMemo(()=>new pe(t),[t]),d=p.useMemo(()=>r($.resolvedOptions().calendar),[r,$]),g=f=>{e.onChange&&(f!=null&&f.year&&f.year<oe?e.onChange(null):e.onChange(f))},[c,y]=Ye(e.value,e.defaultValue,g),w=p.useRef(c);p.useEffect(()=>{w.current!==c&&(c===null&&Object.keys(v).length===Object.keys(k).length&&R===void 0&&(v={},m(v),C(te(e.placeholderValue,a,d,s)),D(void 0)),w.current=c)},[c]);const x=p.useMemo(()=>_t(c,d),[c,d]),[P,C]=p.useState(()=>te(e.placeholderValue,a,d,s)),L=x||P,T=d.identifier==="gregory"&&(L==null?void 0:L.era)==="BC",F=p.useMemo(()=>({granularity:a,maxGranularity:e.maxGranularity??"year",timeZone:s,hideTimeZone:n,hourCycle:e.hourCycle,showEra:T}),[e.maxGranularity,a,e.hourCycle,s,n,T]),[R,D]=p.useState(void 0),{isReset:B,setIsReset:S}=Yt(),Q=()=>{y(null),v={},m(v),D(void 0)};p.useEffect(()=>{B===!0&&(Q(),S==null||S(!1))},[B]);const q=p.useMemo(()=>Re({},F),[F]),K=p.useMemo(()=>new pe(t,q),[t,q]),V=p.useMemo(()=>K.resolvedOptions(),[K]),k=p.useMemo(()=>K.formatToParts(new Date).filter(f=>de[f.type]).reduce((f,M)=>(f[M.type]=!0,f),{}),[K]);let[v,m]=p.useState(()=>e.value||e.defaultValue?{...k}:{});const E=p.useRef(d.identifier);p.useEffect(()=>{d.identifier!==E.current&&(E.current=d.identifier,C(f=>Object.keys(v).length>0?Pe(f,d):te(e.placeholderValue,a,d,s)))},[d,a,v,s,e.placeholderValue]),c&&Object.keys(v).length<Object.keys(k).length&&(v={...k},m(v)),c==null&&Object.keys(v).length===Object.keys(k).length&&R===!1&&!B&&(v={},m(v),C(te(e.placeholderValue,a,d,s)),D(void 0));let b=x&&Object.keys(v).length>=Object.keys(k).length?x:P,O=f=>{e.isDisabled||e.isReadOnly||(Object.keys(v).length>=Object.keys(k).length&&(f=Pe(f,(l==null?void 0:l.calendar)||new er),y(f)),C(f))};const I=p.useMemo(()=>b==null?void 0:b.toDate(h),[b,h]);let _=p.useMemo(()=>K.formatToParts(I).map(f=>{let M=de[f.type];f.type==="era"&&d.getEras().length===1&&(M=!1);let A=de[f.type]&&!v[f.type],ee=de[f.type]?Xt(f.type,f.value):null;return f.type==="year"&&(A=R?!1:A),{type:Mr[f.type]||f.type,text:A?ee:f.value,...kr(b,f.type,V),isPlaceholder:A,placeholder:ee,isEditable:M}}),[I,v,K,V,b,d,t]);k.era&&v.year&&!v.era?(v.era=!0,m({...v})):!k.era&&v.era&&(delete v.era,m({...v}));const ce=f=>{v[f]=!0,f==="year"&&k.era&&(v.era=!0),m({...v})},be=f=>{v[f]=!1,m({...v})},U=(f,M)=>{v[f]?O(Or(b,f,M,V)):(ce(f),Object.keys(v).length>=Object.keys(k).length&&O(b))};function $e(){const f=Object.values(v),M=Object.values(k);return c||f.length===0?!0:f.length!==M.length?!1:!!(f.every(A=>!A)&&!u||f.every(A=>A))}const Ht=(()=>e.validationState||(tr(x,e.minValue,e.maxValue)||null)||!c&&(P!=null&&P.year)&&P.year<oe&&R!==void 0||!$e()?"invalid":"valid")();return{value:x,dateValue:I,calendar:d,setValue:O,segments:_,dateFormatter:K,validationState:Ht,granularity:a,maxGranularity:e.maxGranularity??"year",isDisabled:!!o,isReadOnly:!!i,isRequired:!!u,increment(f){U(f,1)},decrement(f){U(f,-1)},incrementPage(f){U(f,Oe[f]||1)},decrementPage(f){U(f,-(Oe[f]||1))},setSegment(f,M){f==="year"&&M<oe?(be(f),D(!0),C(new Xe(M,(b==null?void 0:b.month)??0,(b==null?void 0:b.day)??0))):(f==="year"&&M>=oe&&D(!1),ce(f)),O(Fr(b,f,parseInt(M),V))},confirmPlaceholder(){if(e.isDisabled||e.isReadOnly)return;let f=Object.keys(v),M=Object.keys(k);f.length===M.length-1&&k.dayPeriod&&!v.dayPeriod&&(v={...k},m(v),O(b==null?void 0:b.copy()))},clearSegment(f){f==="year"&&D(void 0),delete v[f],m({...v});let M=te(e.placeholderValue,a,d,s),A=b;if(f==="dayPeriod"&&"hour"in b&&"hour"in M){let ee=b.hour>=12,Te=M.hour>=12;ee&&!Te?A=b.set({hour:b.hour-12}):!ee&&Te&&(A=b.set({hour:b.hour+12}))}else f in b&&(A=b==null?void 0:b.set({[f]:M==null?void 0:M[f]}));y(null),O(A)},formatValue(f){if(!x)return"";const M=Re(f,F);return new pe(t,M).format(I)}}}function kr(e,t,r){switch(t){case"era":{let n=e.calendar.getEras();return{value:n.indexOf(e.era),minValue:0,maxValue:n.length-1}}case"year":return{value:e.year,minValue:oe,maxValue:e.calendar.getYearsInEra(e)};case"month":return{value:e.month,minValue:Qt(e),maxValue:e.calendar.getMonthsInYear(e)};case"day":return{value:e.day,minValue:Jt(e),maxValue:e.calendar.getDaysInMonth(e)}}if("hour"in e)switch(t){case"dayPeriod":return{value:e.hour>=12?12:0,minValue:0,maxValue:12};case"hour":if(r.hour12){let n=e.hour>=12;return{value:e.hour,minValue:n?12:0,maxValue:n?23:11}}return{value:e.hour,minValue:0,maxValue:23};case"minute":return{value:e.minute,minValue:0,maxValue:59};case"second":return{value:e.second,minValue:0,maxValue:59}}return{}}function Or(e,t,r,n){switch(t){case"era":case"year":case"month":case"day":return e.cycle(t,r,{round:t==="year"})}if("hour"in e)switch(t){case"dayPeriod":{let o=e.hour,i=o>=12;return e.set({hour:i?o-12:o+12})}case"hour":case"minute":case"second":return e.cycle(t,r,{round:t!=="hour",hourCycle:n.hour12?12:24})}}function Fr(e,t,r,n){switch(t){case"day":case"month":case"year":case"era":return e.set({[t]:r})}if("hour"in e)switch(t){case"dayPeriod":{let o=e.hour,i=o>=12;return r>=12===i?e:e.set({hour:i?o-12:o+12})}case"hour":if(n.hour12){let i=e.hour>=12;!i&&r===12&&(r=0),i&&r<12&&(r+=12)}case"minute":case"second":return e.set({[t]:r})}}const et=G("div",{color:"$gray50",fontSize:"$body3",fontWeight:"$semibold",textTransform:"uppercase",letterSpacing:"1px","&:focus":{boxShadow:"none"},"&:focus-visible":{padding:"$0_5 0",outline:"none",boxShadow:"none",color:"$whiteText !important",backgroundColor:"$cdgBlue"},"&.number":{color:"$primaryText"}}),Ir=G("div",{display:"flex",flexDirection:"column",justifyContent:"flex-end","& .date-field-input:focus-within":{border:"1px solid $cdgBlue100",borderRadius:"$md"},"& .date-field-label":{fontSize:"$label1",fontWeight:"$semibold",marginBottom:"$2",display:"inline-block",width:"100%",span:{marginLeft:"$1",color:"$danger"}},"& .date-field-input":{minWidth:"$49",height:"$11",display:"flex",alignItems:"center",padding:"0 0 0 $4",backgroundColor:"$background",border:"1px solid $gray30",borderRadius:"$md"},"& .date-field-input.mobile:active":{backgroundColor:"$gray10"},"& .toggle-calendar-button":{marginLeft:"auto"},"& .toggle-calendar-button .toggle-calendar-icon":{width:"$3",height:"$3"},variants:{isDisabled:{true:{"& .date-field-input":{backgroundColor:"$gray20",cursor:"not-allowed !important","*":{color:"$disabledText",cursor:"not-allowed !important"}},[`& ${et}`]:{color:"$disabledText"}}},isInvalid:{true:{"& .date-field-input":{borderColor:"$danger"}}}}}),ve=G("span",{variants:{isError:{true:{color:"$danger"}},isText:{true:{fontSize:"$label2"}}}}),Nr=G("button",{border:"none",margin:"0",width:"auto",overflow:"visible",background:"transparent",color:"inherit",font:"inherit",lineHeight:"normal",WebkitFontSmoothing:"inherit",MozOsxFontSmoothing:"inherit",WebkitAppearance:"none",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"$2 $4","&:focus":{boxShadow:"none"},"&:focus-visible":{outline:"2px solid $cdgBlue80",borderRadius:"2px"}}),Fe=G("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"}}}}),Vr=G("svg",{color:"$primaryText"});class tt{getStringForLocale(t,r){let n=this.strings[r];n||(n=Ar(r,this.strings,this.defaultLocale),this.strings[r]=n);let o=n[t];if(!o)throw new Error(`Could not find intl message ${t} in ${r} locale`);return o}constructor(t,r="en-US"){this.strings={...t},this.defaultLocale=r}}function Ar(e,t,r="en-US"){if(t[e])return t[e];let n=Br(e);if(t[n])return t[n];for(let o in t)if(o.startsWith(n+"-"))return t[o];return t[r]}function Br(e){return Intl.Locale?new Intl.Locale(e).language:e.split("-")[0]}const Ie=new Map,Ne=new Map;class Hr{format(t,r){let n=this.strings.getStringForLocale(t,this.locale);return typeof n=="function"?n(r,this):n}plural(t,r,n="cardinal"){let o=r["="+t];if(o)return typeof o=="function"?o():o;let i=this.locale+":"+n,u=Ie.get(i);u||(u=new Intl.PluralRules(this.locale,{type:n}),Ie.set(i,u));let l=u.select(t);return o=r[l]||r.other,typeof o=="function"?o():o}number(t){let r=Ne.get(this.locale);return r||(r=new Intl.NumberFormat(this.locale),Ne.set(this.locale,r)),r.format(t)}select(t,r){let n=t[r]||t.other;return typeof n=="function"?n():n}constructor(t,r){this.locale=t,this.strings=r}}function Wr(){const{locale:e}=se();return p.useMemo(()=>{try{return new Intl.DisplayNames(e,{type:"dateTimeField"})}catch{return new Kr(e)}},[e])}class Kr{constructor(t){this.locale=t,this.dictionary=new tt(rr)}of(t){return this.dictionary.getStringForLocale(t,this.locale)}}function jr(e){const t=p.useRef();let{value:r,textValue:n,minValue:o,maxValue:i,isDisabled:u,isReadOnly:l,isRequired:a,onIncrement:s,onIncrementPage:h,onDecrement:$,onDecrementPage:d,onDecrementToMin:g,onIncrementToMax:c}=e;const y=p.useRef(e);y.current=e;const w=()=>clearTimeout(t.current);p.useEffect(()=>()=>w(),[]);let x=S=>{if(!(S.ctrlKey||S.metaKey||S.shiftKey||S.altKey||l)){switch(S.key){case"PageUp":if(h){S.preventDefault(),h();break}break;case"ArrowUp":case"Up":s&&(S.preventDefault(),s());break;case"PageDown":if(d){S.preventDefault(),d();break}break;case"ArrowDown":case"Down":$&&(S.preventDefault(),$());break;case"Home":g&&(S.preventDefault(),g());break;case"End":c&&(S.preventDefault(),c());break}return null}},P=p.useRef(!1),C=()=>{P.current=!0},L=()=>{P.current=!1};n=n===""?"Empty":(n||`${r}`).replace("-","−");const T=p.useCallback(S=>{w(),y.current.onIncrement(),t.current=window.setTimeout(()=>{(isNaN(i)||isNaN(r)||r<i)&&T(60)},S)},[s,i,r]),F=p.useCallback(S=>{w(),y.current.onDecrement(),t.current=window.setTimeout(()=>{(isNaN(o)||isNaN(r)||r>o)&&F(60)},S)},[$,o,r]);let R=S=>{S.preventDefault()},{addGlobalListener:D,removeAllGlobalListeners:B}=nr();return{spinButtonProps:{role:"spinbutton","aria-valuenow":isNaN(r)?null:r,"aria-valuetext":n,"aria-valuemin":o,"aria-valuemax":i,"aria-disabled":u||null,"aria-readonly":l||null,"aria-required":a||null,onKeyDown:x,onFocus:C,onBlur:L},incrementButtonProps:{onPressStart:()=>{T(400),D(window,"contextmenu",R)},onPressEnd:()=>{w(),B()},onFocus:C,onBlur:L},decrementButtonProps:{onPressStart:()=>{F(400),D(window,"contextmenu",R)},onPressEnd:()=>{w(),B()},onFocus:C,onBlur:L}}}function zr(e,t,r){const n=p.useRef(""),{locale:o}=se(),i=Wr();let{ariaLabel:u,ariaLabelledBy:l,ariaDescribedBy:a,focusManager:s}=_e.get(t),h=e.isPlaceholder?"":e.text;const $=p.useMemo(()=>t.dateFormatter.resolvedOptions(),[t.dateFormatter]),d=ue({month:"long",timeZone:$.timeZone}),g=ue({hour:"numeric",hour12:$.hour12,timeZone:$.timeZone});if(e.type==="month"&&!e.isPlaceholder){const m=d.format(t.dateValue);h=m!==h?`${h} – ${m}`:m}else e.type==="hour"&&!e.isPlaceholder&&(h=g.format(t.dateValue));const{spinButtonProps:c}=jr({value:e.value,textValue:h,minValue:e.minValue,maxValue:e.maxValue,isDisabled:!!t.isDisabled,isReadOnly:t.isReadOnly||!e.isEditable,isRequired:!!t.isRequired,onIncrement:()=>{n.current="",t.increment(e.type)},onDecrement:()=>{n.current="",t.decrement(e.type)},onIncrementPage:()=>{n.current="",t.incrementPage(e.type)},onDecrementPage:()=>{n.current="",t.decrementPage(e.type)},onIncrementToMax:()=>{n.current="",t.setSegment(e.type,e.maxValue)},onDecrementToMin:()=>{n.current="",t.setSegment(e.type,e.minValue)}}),y=p.useMemo(()=>new wr(o,{maximumFractionDigits:0}),[o]),w=()=>{if(y.isValidPartialNumber(e.text)&&!t.isReadOnly&&!e.isPlaceholder){const m="";t.clearSegment(e.type),n.current=m}else e.type==="dayPeriod"&&t.clearSegment(e.type)},x=m=>{var E;if(m.key==="a"&&(lr()?m.metaKey:m.ctrlKey)&&m.preventDefault(),!(m.ctrlKey||m.metaKey||m.shiftKey||m.altKey))switch(m.key){case"Backspace":case"Delete":{m.preventDefault(),m.stopPropagation(),w();break}default:{(E=c.onKeyDown)==null||E.call(c,m);break}}},{startsWith:P}=Pr({sensitivity:"base"}),C=ue({hour:"numeric",hour12:!0}),L=p.useMemo(()=>{var E;const m=new Date;return m.setHours(0),(E=C.formatToParts(m).find(b=>b.type==="dayPeriod"))==null?void 0:E.value},[C]),T=p.useMemo(()=>{var E;const m=new Date;return m.setHours(12),(E=C.formatToParts(m).find(b=>b.type==="dayPeriod"))==null?void 0:E.value},[C]),F=ue({year:"numeric",era:"narrow",timeZone:"UTC"}),R=p.useMemo(()=>{var O;if(e.type!=="era")return[];const m=Pe(new Xe(1,1,1),t.calendar),E=t.calendar.getEras().map(I=>{var U;const _=m.set({year:1,month:1,day:1,era:I}).toDate("UTC"),be=(U=F.formatToParts(_).find($e=>$e.type==="era"))==null?void 0:U.value;return{era:I,formatted:be}}),b=Ur(E.map(I=>I.formatted));if(b)for(const I of E)I.formatted=(O=I.formatted)==null?void 0:O.slice(b);return E},[F,t.calendar,e.type]),D=m=>{if(t.isDisabled||t.isReadOnly)return;const E=n.current+m;switch(e.type){case"dayPeriod":if(P(L,m))t.setSegment("dayPeriod",0);else if(P(T,m))t.setSegment("dayPeriod",12);else break;s.focusNext();break;case"era":{const b=R.find(O=>P(O.formatted,m));b&&(t.setSegment("era",b.era),s.focusNext());break}case"day":case"hour":case"minute":case"second":case"month":case"year":{if(!y.isValidPartialNumber(E))return;let b=y.parse(E),O=b,I=e.minValue===0;if(e.type==="hour"&&t.dateFormatter.resolvedOptions().hour12){switch(t.dateFormatter.resolvedOptions().hourCycle){case"h11":b>11&&(O=y.parse(m));break;case"h12":I=!1,b>12&&(O=y.parse(m));break}e.value>=12&&b>1&&(b+=12)}else b>e.maxValue&&(O=y.parse(m));if(isNaN(b))return;const _=O!==0||I;_&&t.setSegment(e.type,O),+(b+"0")>e.maxValue||E.length>=String(e.maxValue).length?(n.current="",_&&(s==null||s.focusNext())):n.current=E;break}}},B=()=>{n.current="",sr(r.current,{containingElement:cr(r.current)});const m=window.getSelection();m==null||m.collapse(r.current)},S=p.useRef("");ke(r,"beforeinput",m=>{var E,b;switch(m.preventDefault(),m.inputType){case"deleteContentBackward":case"deleteContentForward":y.isValidPartialNumber(e.text)&&!t.isReadOnly&&w();break;case"insertCompositionText":S.current=(E=r.current)==null?void 0:E.textContent,r.current.textContent=(b=r.current)==null?void 0:b.textContent;break;default:m.data!=null&&D(m.data);break}}),ke(r,"input",m=>{const{inputType:E,data:b}=m;switch(E){case"insertCompositionText":r.current.textContent=S.current,(P(L,b)||P(T,b))&&D(b);break}}),p.useLayoutEffect(()=>{const m=r.current;return()=>{document.activeElement===m&&(s.focusPrevious()||s.focusNext())}},[r,s]);const Q=or()||e.type==="timeZoneName"?{role:"textbox","aria-valuemax":null,"aria-valuemin":null,"aria-valuetext":null,"aria-valuenow":null}:{},q=p.useMemo(()=>{var m;return(m=t==null?void 0:t.segments)==null?void 0:m.find(E=>E.isEditable)},[t.segments]);e!==q&&t.validationState!=="invalid"&&(a="");const K=ar(),V=!t.isDisabled&&!t.isReadOnly&&e.isEditable,k=e.type==="literal"?"":i.of(e.type),v=ir({"aria-label":(u?u+" ":"")+k,"aria-labelledby":l});return e.type==="literal"?{segmentProps:{"aria-hidden":!0}}:{segmentProps:{...c,...v,id:K,...Q,"aria-invalid":t.validationState==="invalid"?"true":void 0,"aria-describedby":a,"aria-readonly":t.isReadOnly||!e.isEditable?"true":void 0,"data-placeholder":e.isPlaceholder||void 0,contentEditable:V,suppressContentEditableWarning:V,spellCheck:V?"false":void 0,autoCapitalize:V?"off":void 0,autoCorrect:V?"off":void 0,[parseInt(j.version,10)>=17?"enterKeyHint":"enterkeyhint"]:V?"next":void 0,inputMode:t.isDisabled||e.type==="dayPeriod"||e.type==="era"||!V?void 0:"numeric",tabIndex:t.isDisabled?void 0:0,onKeyDown:x,onFocus:B,style:{caretColor:"transparent"},onPointerDown(m){m.stopPropagation()},onMouseDown(m){m.stopPropagation()}}}}function Ur(e){e.sort();const t=e[0],r=e[e.length-1];for(let n=0;n<t.length;n++)if(t[n]!==r[n])return n;return 0}const Zr=j.forwardRef((e,t)=>{const{segment:r,state:n}=e,o=le(t),{segmentProps:i}=zr(r,n,o);return N(et,{...i,ref:o,className:`segment ${r.isPlaceholder?"placeholder":"number"}`,children:r.text})}),Gr=Zr,qr=()=>N(Vr,{width:"16",height:"16",viewBox:"0 0 16 16",children:N("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"currentColor"})}),_r=j.forwardRef((e,t)=>{const{locale:r}=se(),n=le(null),o=Lr({...e,isReadOnly:e.isReadOnly?!0:!!e.isMobile,locale:r,createCalendar:ur}),i=le(t),{labelProps:u,fieldProps:l}=Tr({...e,isReadOnly:e.isReadOnly?!0:!!e.isMobile},o,i),a=e.isDisabled??!1,s=e.isReadOnly??!1,h=!!e.isInvalid||o.validationState==="invalid",$=()=>{const c=e.necessityIndicator??"icon";return e.isRequired&&c==="icon"?N(ve,{isError:!0,children:"*"}):e.isRequired&&c==="label"?N(ve,{isError:!0,isText:!0,children:"(required)"}):!e.isRequired&&c==="label"?N(ve,{isText:!0,children:"(optional)"}):""},{onPress:d,...g}=e.buttonProps;return Z("div",{children:[Z(Ir,{className:"cdg-date-field",isDisabled:a,isInvalid:h,children:[typeof e.label=="string"?Z("span",{...u,className:"date-field-label",children:[e.label," ",$()]}):e.label,Z("div",{...l,ref:i,className:`date-field-input ${a||s?"":e.isMobile?"mobile":""}`,onClick:()=>{var c;a||s||e.isMobile&&((c=n.current)==null||c.click())},children:[o.segments.map((c,y)=>{var w;return c.type==="literal"&&(c.isPlaceholder=((w=o.segments[y-1])==null?void 0:w.isPlaceholder)??!1),N(Gr,{segment:c,state:o},y)}),N(Nr,{...g,ref:n,onClick:c=>{d==null||d(c)},type:"button",disabled:a||s,className:"toggle-calendar-button",children:N(qr,{})})]})]}),e.isInvalid&&e.errorMessage&&N(Fe,{className:"cdg-date-field-error",error:!0,children:e.errorMessage}),e.helperText?N(Fe,{className:"cdg-date-field-helper",children:e.helperText}):null]})}),Bn=_r,Yr=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),Xr=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function Jr(e){if(Intl.Locale){let r=new Intl.Locale(e).maximize().script;return Yr.has(r)}let t=e.split("-")[0];return Xr.has(t)}function rt(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch{e="en-US"}return{locale:e,direction:Jr(e)?"rtl":"ltr"}}let Ce=rt(),ae=new Set;function Ve(){Ce=rt();for(let e of ae)e(Ce)}function Qr(){let e=Je(),[t,r]=p.useState(Ce);return p.useEffect(()=>(ae.size===0&&window.addEventListener("languagechange",Ve),ae.add(r),()=>{ae.delete(r),ae.size===0&&window.removeEventListener("languagechange",Ve)}),[]),e?{locale:"en-US",direction:"ltr"}:t}const en=j.createContext(null);function nt(){let e=Qr();return p.useContext(en)||e}const Ae=new WeakMap;function tn(e){let t=Ae.get(e);return t||(t=new tt(e),Ae.set(e,t)),t}function rn(e){let{locale:t}=nt(),r=p.useMemo(()=>tn(e),[e]);return p.useMemo(()=>new Hr(t,r),[t,r])}function nn(e){return e&&e.__esModule?e.default:e}const Be={top:"top",bottom:"top",left:"left",right:"left"},he={top:"bottom",bottom:"top",left:"right",right:"left"},on={top:"left",left:"top"},De={top:"height",left:"width"},an={width:"totalWidth",height:"totalHeight"},fe={};let Y=typeof window<"u"&&window.visualViewport;function ln(e){let t=0,r=0,n=0,o=0,i=0,u=0,l={};if(e.tagName==="BODY"){let h=document.documentElement;n=h.clientWidth,o=h.clientHeight;var a;t=(a=Y==null?void 0:Y.width)!==null&&a!==void 0?a:n;var s;r=(s=Y==null?void 0:Y.height)!==null&&s!==void 0?s:o,l.top=h.scrollTop||e.scrollTop,l.left=h.scrollLeft||e.scrollLeft}else({width:t,height:r,top:i,left:u}=X(e)),l.top=e.scrollTop,l.left=e.scrollLeft,n=t,o=r;return{width:t,height:r,totalWidth:n,totalHeight:o,scroll:l,top:i,left:u}}function sn(e){return{top:e.scrollTop,left:e.scrollLeft,width:e.scrollWidth,height:e.scrollHeight}}function He(e,t,r,n,o){let i=n.scroll[e],u=n[De[e]],l=t-o-i,a=t+o-i+r;return l<0?-l:a>u?Math.max(u-a,-l):0}function cn(e){let t=window.getComputedStyle(e);return{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}}function We(e){if(fe[e])return fe[e];let[t,r]=e.split(" "),n=Be[t]||"right",o=on[n];Be[r]||(r="center");let i=De[n],u=De[o];return fe[e]={placement:t,crossPlacement:r,axis:n,crossAxis:o,size:i,crossSize:u},fe[e]}function ye(e,t,r,n,o,i,u,l,a,s){let{placement:h,crossPlacement:$,axis:d,crossAxis:g,size:c,crossSize:y}=n,w={};w[g]=e[g],$==="center"?w[g]+=(e[y]-r[y])/2:$!==g&&(w[g]+=e[y]-r[y]),w[g]+=i;const x=e[g]-r[y]+a+s,P=e[g]+e[y]-a-s;if(w[g]=Se(w[g],x,P),h===d){const C=l?u[c]:t[an[c]];w[he[d]]=Math.floor(C-e[d]+o)}else w[d]=Math.floor(e[d]+e[c]+o);return w}function un(e,t,r,n,o,i){return e.top!=null?Math.max(0,t.height+t.top+t.scroll.top-(r.top+e.top)-(o.top+o.bottom+i)):Math.max(0,n.top+r.top-(t.top+t.scroll.top)-(o.top+o.bottom+i))}function Ke(e,t,r,n,o,i){let{placement:u,axis:l,size:a}=i;return u===l?Math.max(0,r[l]-e[l]-e.scroll[l]+t[l]-n[l]-n[he[l]]-o):Math.max(0,e[a]+e[l]+e.scroll[l]-t[l]-r[l]-r[a]-n[l]-n[he[l]]-o)}function dn(e,t,r,n,o,i,u,l,a,s,h,$,d,g,c){let y=We(e),{size:w,crossAxis:x,crossSize:P,placement:C,crossPlacement:L}=y,T=ye(t,l,r,y,s,h,a,$,g,c),F=s,R=Ke(l,a,t,o,i+s,y);if(u&&n[w]>R){let m=We(`${he[C]} ${L}`),E=ye(t,l,r,m,s,h,a,$,g,c);Ke(l,a,t,o,i+s,m)>R&&(y=m,T=E,F=s)}let D=He(x,T[x],r[P],l,i);T[x]+=D;let B=un(T,l,a,t,o,i);d&&d<B&&(B=d),r.height=Math.min(r.height,B),T=ye(t,l,r,y,F,h,a,$,g,c),D=He(x,T[x],r[P],l,i),T[x]+=D;let S={},Q=t[x]+.5*t[P]-r[x];const q=g/2+c,K=r[P]-g/2-c,V=t[x]-r[x]+g/2,k=t[x]+t[P]-r[x]-g/2,v=Se(Q,V,k);return S[x]=Se(v,q,K),{position:T,maxHeight:B,arrowOffsetLeft:S.left,arrowOffsetTop:S.top,placement:y.placement}}function fn(e){let{placement:t,targetNode:r,overlayNode:n,scrollNode:o,padding:i,shouldFlip:u,boundaryElement:l,offset:a,crossOffset:s,maxHeight:h,arrowSize:$,arrowBoundaryOffset:d=0}=e,g=n instanceof HTMLElement?mn(n):document.documentElement,c=g===document.documentElement;const y=window.getComputedStyle(g).position;let w=!!y&&y!=="static",x=c?X(r):je(r,g);if(!c){let{marginTop:R,marginLeft:D}=window.getComputedStyle(r);x.top+=parseInt(R,10)||0,x.left+=parseInt(D,10)||0}let P=X(n),C=cn(n);P.width+=C.left+C.right,P.height+=C.top+C.bottom;let L=sn(o),T=ln(l),F=l.tagName==="BODY"?X(g):je(g,l);return dn(t,x,P,L,C,i,u,T,F,a,s,w,h,$,d)}function X(e){let{top:t,left:r,width:n,height:o}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:u,clientTop:l,clientLeft:a}=document.documentElement;return{top:t+i-l,left:r+u-a,width:n,height:o}}function je(e,t){let r=window.getComputedStyle(e),n;if(r.position==="fixed"){let{top:o,left:i,width:u,height:l}=e.getBoundingClientRect();n={top:o,left:i,width:u,height:l}}else{n=X(e);let o=X(t),i=window.getComputedStyle(t);o.top+=(parseInt(i.borderTopWidth,10)||0)-t.scrollTop,o.left+=(parseInt(i.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=o.top,n.left-=o.left}return n.top-=parseInt(r.marginTop,10)||0,n.left-=parseInt(r.marginLeft,10)||0,n}function mn(e){let t=e.offsetParent;if(t&&t===document.body&&window.getComputedStyle(t).position==="static"&&!ze(t)&&(t=document.documentElement),t==null)for(t=e.parentElement;t&&!ze(t);)t=t.parentElement;return t||document.documentElement}function ze(e){let t=window.getComputedStyle(e);return t.transform!=="none"||/transform|perspective/.test(t.willChange)||t.filter!=="none"||t.contain==="paint"||"backdropFilter"in t&&t.backdropFilter!=="none"||"WebkitBackdropFilter"in t&&t.WebkitBackdropFilter!=="none"}const pn=new WeakMap;function hn(e){let{triggerRef:t,isOpen:r,onClose:n}=e;p.useEffect(()=>{if(!r||n===null)return;let o=i=>{let u=i.target;if(!t.current||u instanceof Node&&!u.contains(t.current))return;let l=n||pn.get(t.current);l&&l()};return window.addEventListener("scroll",o,!0),()=>{window.removeEventListener("scroll",o,!0)}},[r,n,t])}let H=typeof window<"u"&&window.visualViewport;function bn(e){let{direction:t}=nt(),{arrowSize:r=0,targetRef:n,overlayRef:o,scrollRef:i=o,placement:u="bottom",containerPadding:l=12,shouldFlip:a=!0,boundaryElement:s=typeof document<"u"?document.body:null,offset:h=0,crossOffset:$=0,shouldUpdatePosition:d=!0,isOpen:g=!0,onClose:c,maxHeight:y,arrowBoundaryOffset:w=0}=e,[x,P]=p.useState({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),C=[d,u,o.current,n.current,i.current,l,a,s,h,$,g,t,y,w,r],L=p.useCallback(()=>{if(d===!1||!g||!o.current||!n.current||!i.current||!s)return;let R=fn({placement:gn(u,t),overlayNode:o.current,targetNode:n.current,scrollNode:i.current,padding:l,shouldFlip:a,boundaryElement:s,offset:h,crossOffset:$,maxHeight:y,arrowSize:r,arrowBoundaryOffset:w});Object.keys(R.position).forEach(D=>o.current.style[D]=R.position[D]+"px"),o.current.style.maxHeight=R.maxHeight!=null?R.maxHeight+"px":void 0,P(R)},C);J(L,C),$n(L),hr({ref:o,onResize:L});let T=p.useRef(!1);J(()=>{let R,D=()=>{T.current=!0,clearTimeout(R),R=setTimeout(()=>{T.current=!1},500),L()};return H==null||H.addEventListener("resize",D),H==null||H.addEventListener("scroll",D),()=>{H==null||H.removeEventListener("resize",D),H==null||H.removeEventListener("scroll",D)}},[L]);let F=p.useCallback(()=>{T.current||c()},[c,T]);return hn({triggerRef:n,isOpen:g,onClose:c&&F}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...x.position,maxHeight:x.maxHeight}},placement:x.placement,arrowProps:{style:{left:x.arrowOffsetLeft,top:x.arrowOffsetTop}},updatePosition:L}}function $n(e){J(()=>(window.addEventListener("resize",e,!1),()=>{window.removeEventListener("resize",e,!1)}),[e])}function gn(e,t){return t==="rtl"?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")}const z=[];function vn(e,t){let{onClose:r,shouldCloseOnBlur:n,isOpen:o,isDismissable:i=!1,isKeyboardDismissDisabled:u=!1,shouldCloseOnInteractOutside:l}=e;p.useEffect(()=>(o&&z.push(t),()=>{let c=z.indexOf(t);c>=0&&z.splice(c,1)}),[o,t]);let a=()=>{z[z.length-1]===t&&r&&r()},s=c=>{(!l||l(c.target))&&z[z.length-1]===t&&(c.stopPropagation(),c.preventDefault())},h=c=>{(!l||l(c.target))&&(z[z.length-1]===t&&(c.stopPropagation(),c.preventDefault()),a())},$=c=>{c.key==="Escape"&&!u&&(c.stopPropagation(),c.preventDefault(),a())};br({ref:t,onInteractOutside:i?h:null,onInteractOutsideStart:s});let{focusWithinProps:d}=$r({isDisabled:!n,onBlurWithin:c=>{c.relatedTarget&&gr(c.relatedTarget)||(!l||l(c.relatedTarget))&&r()}}),g=c=>{c.target===c.currentTarget&&c.preventDefault()};return{overlayProps:{onKeyDown:$,...d},underlayProps:{onPointerDown:g}}}const xe=typeof window<"u"&&window.visualViewport,yn=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let me=0,we;function xn(e={}){let{isDisabled:t}=e;J(()=>{if(!t)return me++,me===1&&(vr()?we=Pn():we=wn()),()=>{me--,me===0&&we()}},[t])}function wn(){return Ee(ie(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),ie(document.documentElement,"overflow","hidden"))}function Pn(){let e,t=0,r=$=>{e=Qe($.target),!(e===document.documentElement&&e===document.body)&&(t=$.changedTouches[0].pageY)},n=$=>{if(e===document.documentElement||e===document.body){$.preventDefault();return}let d=$.changedTouches[0].pageY,g=e.scrollTop,c=e.scrollHeight-e.clientHeight;(g<=0&&d>t||g>=c&&d<t)&&$.preventDefault(),t=d},o=$=>{let d=$.target;Ze(d)&&d!==document.activeElement&&($.preventDefault(),d.style.transform="translateY(-2000px)",d.focus(),requestAnimationFrame(()=>{d.style.transform=""}))},i=$=>{let d=$.target;Ze(d)&&(d.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{d.style.transform="",xe&&(xe.height<window.innerHeight?requestAnimationFrame(()=>{Ue(d)}):xe.addEventListener("resize",()=>Ue(d),{once:!0}))}))},u=()=>{window.scrollTo(0,0)},l=window.pageXOffset,a=window.pageYOffset,s=Ee(ie(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),ie(document.documentElement,"overflow","hidden"),ie(document.body,"marginTop",`-${a}px`));window.scrollTo(0,0);let h=Ee(re(document,"touchstart",r,{passive:!1,capture:!0}),re(document,"touchmove",n,{passive:!1,capture:!0}),re(document,"touchend",o,{passive:!1,capture:!0}),re(document,"focus",i,!0),re(window,"scroll",u));return()=>{s(),h(),window.scrollTo(l,a)}}function ie(e,t,r){let n=e.style[t];return e.style[t]=r,()=>{e.style[t]=n}}function re(e,t,r,n){return e.addEventListener(t,r,n),()=>{e.removeEventListener(t,r,n)}}function Ue(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let r=Qe(e);if(r!==document.documentElement&&r!==document.body&&r!==e){let n=r.getBoundingClientRect().top,o=e.getBoundingClientRect().top;o>n+e.clientHeight&&(r.scrollTop+=o-n)}e=r.parentElement}}function Ze(e){return e instanceof HTMLInputElement&&!yn.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var ot={},at={};at={dismiss:"تجاهل"};var it={};it={dismiss:"Отхвърляне"};var lt={};lt={dismiss:"Odstranit"};var st={};st={dismiss:"Luk"};var ct={};ct={dismiss:"Schließen"};var ut={};ut={dismiss:"Απόρριψη"};var dt={};dt={dismiss:"Dismiss"};var ft={};ft={dismiss:"Descartar"};var mt={};mt={dismiss:"Lõpeta"};var pt={};pt={dismiss:"Hylkää"};var ht={};ht={dismiss:"Rejeter"};var bt={};bt={dismiss:"התעלם"};var $t={};$t={dismiss:"Odbaci"};var gt={};gt={dismiss:"Elutasítás"};var vt={};vt={dismiss:"Ignora"};var yt={};yt={dismiss:"閉じる"};var xt={};xt={dismiss:"무시"};var wt={};wt={dismiss:"Atmesti"};var Pt={};Pt={dismiss:"Nerādīt"};var Et={};Et={dismiss:"Lukk"};var St={};St={dismiss:"Negeren"};var Ct={};Ct={dismiss:"Zignoruj"};var Dt={};Dt={dismiss:"Descartar"};var Tt={};Tt={dismiss:"Dispensar"};var Rt={};Rt={dismiss:"Revocare"};var Mt={};Mt={dismiss:"Пропустить"};var Lt={};Lt={dismiss:"Zrušiť"};var kt={};kt={dismiss:"Opusti"};var Ot={};Ot={dismiss:"Odbaci"};var Ft={};Ft={dismiss:"Avvisa"};var It={};It={dismiss:"Kapat"};var Nt={};Nt={dismiss:"Скасувати"};var Vt={};Vt={dismiss:"取消"};var At={};At={dismiss:"關閉"};ot={"ar-AE":at,"bg-BG":it,"cs-CZ":lt,"da-DK":st,"de-DE":ct,"el-GR":ut,"en-US":dt,"es-ES":ft,"et-EE":mt,"fi-FI":pt,"fr-FR":ht,"he-IL":bt,"hr-HR":$t,"hu-HU":gt,"it-IT":vt,"ja-JP":yt,"ko-KR":xt,"lt-LT":wt,"lv-LV":Pt,"nb-NO":Et,"nl-NL":St,"pl-PL":Ct,"pt-BR":Dt,"pt-PT":Tt,"ro-RO":Rt,"ru-RU":Mt,"sk-SK":Lt,"sl-SI":kt,"sr-SP":Ot,"sv-SE":Ft,"tr-TR":It,"uk-UA":Nt,"zh-CN":Vt,"zh-TW":At};function Ge(e){let{onDismiss:t,...r}=e,n=rn(nn(ot)),o=dr(r,n.format("dismiss")),i=()=>{t&&t()};return j.createElement(fr,null,j.createElement("button",{...o,tabIndex:-1,onClick:i}))}let ne=new WeakMap,W=[];function En(e,t=document.body){let r=new Set(e),n=new Set,o=a=>{for(let d of a.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(d);let s=d=>{if(r.has(d)||n.has(d.parentElement)&&d.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let g of r)if(d.contains(g))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},h=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:s}),$=s(a);if($===NodeFilter.FILTER_ACCEPT&&i(a),$!==NodeFilter.FILTER_REJECT){let d=h.nextNode();for(;d!=null;)i(d),d=h.nextNode()}},i=a=>{var s;let h=(s=ne.get(a))!==null&&s!==void 0?s:0;a.getAttribute("aria-hidden")==="true"&&h===0||(h===0&&a.setAttribute("aria-hidden","true"),n.add(a),ne.set(a,h+1))};W.length&&W[W.length-1].disconnect(),o(t);let u=new MutationObserver(a=>{for(let s of a)if(!(s.type!=="childList"||s.addedNodes.length===0)&&![...r,...n].some(h=>h.contains(s.target))){for(let h of s.removedNodes)h instanceof Element&&(r.delete(h),n.delete(h));for(let h of s.addedNodes)(h instanceof HTMLElement||h instanceof SVGElement)&&(h.dataset.liveAnnouncer==="true"||h.dataset.reactAriaTopLayer==="true")?r.add(h):h instanceof Element&&o(h)}});u.observe(t,{childList:!0,subtree:!0});let l={observe(){u.observe(t,{childList:!0,subtree:!0})},disconnect(){u.disconnect()}};return W.push(l),()=>{u.disconnect();for(let a of n){let s=ne.get(a);s===1?(a.removeAttribute("aria-hidden"),ne.delete(a)):ne.set(a,s-1)}l===W[W.length-1]?(W.pop(),W.length&&W[W.length-1].observe()):W.splice(W.indexOf(l),1)}}function Sn(e,t){let{triggerRef:r,popoverRef:n,isNonModal:o,isKeyboardDismissDisabled:i,...u}=e,{overlayProps:l,underlayProps:a}=vn({isOpen:t.isOpen,onClose:t.close,shouldCloseOnBlur:!0,isDismissable:!o,isKeyboardDismissDisabled:i},n),{overlayProps:s,arrowProps:h,placement:$}=bn({...u,targetRef:r,overlayRef:n,isOpen:t.isOpen,onClose:null});return xn({isDisabled:o}),J(()=>{if(t.isOpen&&!o&&n.current)return En([n.current])},[o,t.isOpen,n]),{popoverProps:mr(l,s),arrowProps:h,underlayProps:a,placement:$}}const Bt=j.createContext(null);function Cn(e){let t=Je(),{portalContainer:r=t?null:document.body}=e,[n,o]=p.useState(!1),i=p.useMemo(()=>({contain:n,setContain:o}),[n,o]);if(!r)return null;let u=j.createElement(Bt.Provider,{value:i},j.createElement(pr,{restoreFocus:!0,contain:n},e.children));return Wt.createPortal(u,r)}function Dn(){let e=p.useContext(Bt),t=e==null?void 0:e.setContain;J(()=>{t==null||t(!0)},[t])}function Tn(e,t){let{role:r="dialog"}=e,n=yr();n=e["aria-label"]?void 0:n;let o=p.useRef(!1);return p.useEffect(()=>{if(t.current&&!t.current.contains(document.activeElement)){Me(t.current);let i=setTimeout(()=>{document.activeElement===t.current&&(o.current=!0,t.current.blur(),Me(t.current),o.current=!1)},500);return()=>{clearTimeout(i)}}},[t]),Dn(),{dialogProps:{...xr(e,{labelable:!0}),role:r,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||n,onBlur:i=>{o.current&&i.stopPropagation()}},titleProps:{id:n}}}const Rn=G("div",{"&:focus-visible":{outline:"1px solid $cdgBlue100"}}),Mn=j.forwardRef((e,t)=>{const{children:r,title:n}=e,o=le(t),{dialogProps:i,titleProps:u}=Tn(e,o);return Z(Rn,{...i,ref:o,children:[n&&N("h3",{...u,style:{marginTop:0},children:n}),r]})}),Hn=Mn,Ln=j.forwardRef((e,t)=>{const{children:r,state:n}=e,o=le(t),{popoverProps:i,underlayProps:u}=Sn({...e,popoverRef:o},n);return Z(Cn,{children:[N("div",{...u}),Z("div",{...i,ref:o,style:{...i.style},children:[N(Ge,{onDismiss:n.close}),r,N(Ge,{onDismiss:n.close})]})]})}),Wn=Ln;function Kn(e){const[t,r]=Ye(e.isOpen,e.defaultOpen||!1,e.onOpenChange);return{isOpen:t,setOpen:r,open(){r(!0)},close(){r(!1)},toggle(){r(!t)}}}export{Bn as D,Wn as P,Er as a,Dr as b,Kn as c,Rr as d,Hn as e,Sr as u};
