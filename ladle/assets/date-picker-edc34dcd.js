var Te=Object.defineProperty;var Ie=(e,t,a)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var q=(e,t,a)=>(Ie(e,typeof t!="symbol"?t+"":t,a),a);import{j as C}from"./jsx-runtime-ea7736fc.js";import{r as c,R as J}from"./index-6c164b11.js";import{a as A,$ as ue,a0 as Ee,a1 as _e,a2 as z,a3 as je,a4 as Ne,a5 as ve,a6 as re,a7 as Be,a8 as Pe,a9 as xe,D as Q,aa as de,ab as $,ac as Le,ad as Ke,ae as le,Q as ce,af as pe,ag as Y,b as De,r as We,v as Ze,G as Ue,ah as Fe,ai as Ae,aj as Ge,u as ae,_ as He,ak as qe,al as $e,am as Ye,an as ze,ao as Qe,m as Je,ap as me,R as Xe,S as et,p as Oe,aq as tt,C as at}from"./calendar-b4f421e9.js";import{c as N,C as nt}from"./string-cf4adbb3.js";import{u as ie}from"./use-dom-ref-7c72e1a5.js";import{a as rt}from"./NumberParser-89118490.js";import{P as it}from"./index-53a599f3.js";function Se(e,t,a){const{direction:n}=A(),r=c.useMemo(()=>ue(t),[t]),l=o=>{if(o.altKey&&(o.key==="ArrowDown"||o.key==="ArrowUp")&&"setOpen"in e&&(o.preventDefault(),o.stopPropagation(),e.setOpen(!0)),!a)switch(o.key){case"ArrowLeft":o.preventDefault(),o.stopPropagation(),n==="rtl"?r.focusNext():r.focusPrevious();break;case"ArrowRight":o.preventDefault(),o.stopPropagation(),n==="rtl"?r.focusPrevious():r.focusNext();break}},f=()=>{var P;let o=(P=window.event)==null?void 0:P.target;const d=_e(t.current,{tabbable:!0});if(o&&(d.currentNode=o,o=d.previousNode()),!o){let g;do g=d.lastChild(),g&&(o=g);while(g)}for(;o!=null&&o.hasAttribute("data-placeholder");){const g=d.previousNode();if(g&&g.hasAttribute("data-placeholder"))o=g;else break}o&&o.focus()},{pressProps:m}=Ee({preventFocusOnPress:!0,allowTextSelectionOnPress:!0,onPressStart(o){o.pointerType==="mouse"&&f()},onPress(o){o.pointerType!=="mouse"&&f()}});return{...m,onKeyDown:l}}function he(e=[]){const t=z(),[a,n]=c.useState(t),r=c.useCallback(()=>{const f=function*(){yield t,yield document.getElementById(t)?t:void 0}();n(f.next().value)},[t]);return c.useLayoutEffect(r,[t,...e]),a??""}function we(e){const{description:t,errorMessage:a,validationState:n}=e;let{labelProps:r,fieldProps:l}=je(e);const f=he([!!t,!!a,n]),m=he([!!t,!!a,n]);return l={...l,"aria-describedby":[f,m,e["aria-describedby"]].filter(Boolean).join(" ")||void 0},{labelProps:r,fieldProps:l,descriptionProps:{id:f},errorMessageProps:{id:m}}}function ot(e){const t=c.useRef({isFocused:!1,onBlur:e,observer:null});return t.current.onBlur=e,c.useLayoutEffect(()=>{const a=t.current;return()=>{a.observer&&(a.observer.disconnect(),a.observer=null)}},[]),c.useCallback(a=>{if(a.target instanceof HTMLButtonElement||a.target instanceof HTMLInputElement||a.target instanceof HTMLTextAreaElement||a.target instanceof HTMLSelectElement){t.current.isFocused=!0;const n=a.target,r=l=>{var f,m;t.current.isFocused=!1,n.disabled&&((m=(f=t.current).onBlur)==null||m.call(f,new Ne("blur",l))),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};n.addEventListener("focusout",r,{once:!0}),t.current.observer=new MutationObserver(()=>{var l;t.current.isFocused&&n.disabled&&((l=t.current.observer)==null||l.disconnect(),n.dispatchEvent(new FocusEvent("blur")),n.dispatchEvent(new FocusEvent("focusout",{bubbles:!0})))}),t.current.observer.observe(n,{attributes:!0,attributeFilter:["disabled"]})}},[])}function Ce(e){const{isDisabled:t,onBlurWithin:a,onFocusWithin:n,onFocusWithinChange:r}=e,l=c.useRef({isFocusWithin:!1}),f=c.useCallback(d=>{l.current.isFocusWithin&&!d.currentTarget.contains(d.relatedTarget)&&(l.current.isFocusWithin=!1,a&&a(d),r&&r(!1))},[a,r,l]),m=ot(f),o=c.useCallback(d=>{!l.current.isFocusWithin&&document.activeElement===d.target&&(n&&n(d),r&&r(!0),l.current.isFocusWithin=!0,m(d))},[n,r,m]);return t?{focusWithinProps:{onFocus:null,onBlur:null}}:{focusWithinProps:{onFocus:o,onBlur:f}}}function st(e,t,a){const{labelProps:n,fieldProps:r,descriptionProps:l,errorMessageProps:f}=we({...e,labelElementType:"span"}),{focusWithinProps:m}=Ce({...e,onBlurWithin:D=>{t.confirmPlaceholder(),e.onBlur&&e.onBlur(D)},onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange}),o=t.maxGranularity==="hour"?"selectedTimeDescription":"selectedDateDescription",d=t.value?o:"",P=ve(d),g=e[re]==="presentation"?r["aria-describedby"]:[P["aria-describedby"],r["aria-describedby"]].filter(Boolean).join(" ")||void 0,y=e[Be],S=c.useMemo(()=>y||ue(a),[y,a]),v=Se(t,a,e[re]==="presentation");Pe.set(t,{ariaLabel:"",ariaLabelledBy:[e["aria-labelledby"],n.id].filter(Boolean).join(" ")||"",focusManager:S});const O=c.useRef(e.autoFocus);let b;e[re]==="presentation"?b={role:"presentation"}:b={...r,role:"group","aria-disabled":e.isDisabled||void 0,"aria-describedby":g},c.useEffect(()=>{O.current&&S.focusFirst(),O.current=!1},[S]);const k=xe(e);return{labelProps:{...n,onClick:()=>{S.focusFirst()}},fieldProps:{...k,...b,...v,...m,onKeyDown(D){e.onKeyDown&&e.onKeyDown(D)},onKeyUp(D){e.onKeyUp&&e.onKeyUp(D)}},descriptionProps:l,errorMessageProps:f}}function Me(e,t){const a=c.useRef(e);e&&(a.current=e),e=a.current;const{locale:n}=A(),r=c.useMemo(()=>new Q(n),[n]),l=c.useMemo(()=>r.resolvedOptions(),[r]),f=e&&"timeZone"in e?e.timeZone:l.timeZone;if(t=t||(e&&"minute"in e?"minute":"day"),e&&!(t in e))throw new Error("Invalid granularity "+t+" for value "+e.toString());return[t,f]}const ne={year:!0,month:!0,day:!0,hour:!0,minute:!0,second:!0,dayPeriod:!0,era:!0},ye={year:5,month:2,day:7,hour:2,minute:15,second:15},lt={dayperiod:"dayPeriod"};function ct(e){const{locale:t,createCalendar:a,hideTimeZone:n,isDisabled:r,isReadOnly:l,isRequired:f}=e,m=e.value||e.defaultValue||e.placeholderValue,[o,d]=Me(m,e.granularity),P=d||"UTC";if(m&&!(o in m))throw new Error("Invalid granularity "+o+" for value "+m.toString());const g=c.useMemo(()=>new Q(t),[t]),y=c.useMemo(()=>a(g.resolvedOptions().calendar),[a,g]),S=i=>{e.onChange&&(i!=null&&i.year&&i.year<Y?e.onChange(null):e.onChange(i))},[v,O]=de(e.value,e.defaultValue,S),b=c.useRef(v);c.useEffect(()=>{b.current!==v&&(v===null&&Object.keys(h).length===Object.keys(V).length&&w===void 0&&(h={},s(h),x($(e.placeholderValue,o,y,d)),K(void 0)),b.current=v)},[v]);const k=c.useMemo(()=>Le(v,y),[v,y]),[D,x]=c.useState(()=>$(e.placeholderValue,o,y,d)),R=k||D,B=y.identifier==="gregory"&&(R==null?void 0:R.era)==="BC",L=c.useMemo(()=>({granularity:o,maxGranularity:e.maxGranularity??"year",timeZone:d,hideTimeZone:n,hourCycle:e.hourCycle,showEra:B}),[e.maxGranularity,o,e.hourCycle,d,n,B]),[w,K]=c.useState(void 0),{isReset:G,setIsReset:W}=Ke(),X=c.useCallback(()=>{O(null),h={},s(h),K(void 0)},[]);c.useEffect(()=>{G===!0&&(X(),W==null||W(!1))},[G,X,W]);const ee=c.useMemo(()=>le({},L),[L]),p=c.useMemo(()=>new Q(t,ee),[t,ee]),j=c.useMemo(()=>p.resolvedOptions(),[p]),V=c.useMemo(()=>p.formatToParts(new Date).filter(i=>ne[i.type]).reduce((i,M)=>(i[M.type]=!0,i),{}),[p]);let[h,s]=c.useState(()=>e.value||e.defaultValue?{...V}:{});const F=c.useRef(y.identifier);c.useEffect(()=>{y.identifier!==F.current&&(F.current=y.identifier,x(i=>Object.keys(h).length>0?ce(i,y):$(e.placeholderValue,o,y,d)))},[y,o,h,d,e.placeholderValue]),v&&Object.keys(h).length<Object.keys(V).length&&(h={...V},s(h)),v==null&&Object.keys(h).length===Object.keys(V).length&&w===!1&&!G&&(h={},s(h),x($(e.placeholderValue,o,y,d)),K(void 0));let u=k&&Object.keys(h).length>=Object.keys(V).length?k:D,T=i=>{e.isDisabled||e.isReadOnly||(Object.keys(h).length>=Object.keys(V).length&&(i=ce(i,(m==null?void 0:m.calendar)||new Ue),O(i)),x(i))};const I=c.useMemo(()=>u==null?void 0:u.toDate(P),[u,P]);let U=c.useMemo(()=>p.formatToParts(I).map(i=>{let M=ne[i.type];i.type==="era"&&y.getEras().length===1&&(M=!1);let _=ne[i.type]&&!h[i.type],H=ne[i.type]?pe(i.type,i.value):null;return i.type==="year"&&(_=w?!1:_),{type:lt[i.type]||i.type,text:_?H:i.value,...ut(u,i.type,j),isPlaceholder:_,placeholder:H,isEditable:M}}),[p,I,y,h,u,j,w]);V.era&&h.year&&!h.era?(h.era=!0,s({...h})):!V.era&&h.era&&(delete h.era,s({...h}));const te=i=>{h[i]=!0,i==="year"&&V.era&&(h.era=!0),s({...h})},oe=i=>{h[i]=!1,s({...h})},Z=(i,M)=>{h[i]?T(dt(u,i,M,j)):(te(i),Object.keys(h).length>=Object.keys(V).length&&T(u))};function se(){const i=Object.values(h),M=Object.values(V);return v||i.length===0?!0:i.length!==M.length?!1:!!(i.every(_=>!_)&&!f||i.every(_=>_))}const Ve=(()=>e.validationState||(Fe(k,e.minValue,e.maxValue)||null)||!v&&(D!=null&&D.year)&&D.year<Y&&w!==void 0||!se()?"invalid":"valid")();return{value:k,dateValue:I,calendar:y,setValue:T,segments:U,dateFormatter:p,validationState:Ve,granularity:o,maxGranularity:e.maxGranularity??"year",isDisabled:!!r,isReadOnly:!!l,isRequired:!!f,increment(i){Z(i,1)},decrement(i){Z(i,-1)},incrementPage(i){Z(i,ye[i]||1)},decrementPage(i){Z(i,-(ye[i]||1))},setSegment(i,M){i==="year"&&M<Y?(oe(i),K(!0),x(new De(M,(u==null?void 0:u.month)??0,(u==null?void 0:u.day)??0))):(i==="year"&&M>=Y&&K(!1),te(i)),T(ft(u,i,parseInt(M),j))},confirmPlaceholder(){if(e.isDisabled||e.isReadOnly)return;let i=Object.keys(h),M=Object.keys(V);i.length===M.length-1&&V.dayPeriod&&!h.dayPeriod&&(h={...V},s(h),T(u==null?void 0:u.copy()))},clearSegment(i){i==="year"&&K(void 0),delete h[i],s({...h});let M=$(e.placeholderValue,o,y,d),_=u;if(i==="dayPeriod"&&"hour"in u&&"hour"in M){let H=u.hour>=12,fe=M.hour>=12;H&&!fe?_=u.set({hour:u.hour-12}):!H&&fe&&(_=u.set({hour:u.hour+12}))}else i in u&&(_=u==null?void 0:u.set({[i]:M==null?void 0:M[i]}));O(null),T(_)},formatValue(i){if(!k)return"";const M=le(i,L);return new Q(t,M).format(I)}}}function ut(e,t,a){switch(t){case"era":{let n=e.calendar.getEras();return{value:n.indexOf(e.era),minValue:0,maxValue:n.length-1}}case"year":return{value:e.year,minValue:Y,maxValue:e.calendar.getYearsInEra(e)};case"month":return{value:e.month,minValue:Ze(e),maxValue:e.calendar.getMonthsInYear(e)};case"day":return{value:e.day,minValue:We(e),maxValue:e.calendar.getDaysInMonth(e)}}if("hour"in e)switch(t){case"dayPeriod":return{value:e.hour>=12?12:0,minValue:0,maxValue:12};case"hour":if(a.hour12){let n=e.hour>=12;return{value:e.hour,minValue:n?12:0,maxValue:n?23:11}}return{value:e.hour,minValue:0,maxValue:23};case"minute":return{value:e.minute,minValue:0,maxValue:59};case"second":return{value:e.second,minValue:0,maxValue:59}}return{}}function dt(e,t,a,n){switch(t){case"era":case"year":case"month":case"day":return e.cycle(t,a,{round:t==="year"})}if("hour"in e)switch(t){case"dayPeriod":{let r=e.hour,l=r>=12;return e.set({hour:l?r-12:r+12})}case"hour":case"minute":case"second":return e.cycle(t,a,{round:t!=="hour",hourCycle:n.hour12?12:24})}}function ft(e,t,a,n){switch(t){case"day":case"month":case"year":case"era":return e.set({[t]:a})}if("hour"in e)switch(t){case"dayPeriod":{let r=e.hour,l=r>=12;return a>=12===l?e:e.set({hour:l?r-12:r+12})}case"hour":if(n.hour12){let l=e.hour>=12;!l&&a===12&&(a=0),l&&a<12&&(a+=12)}case"minute":case"second":return e.set({[t]:a})}}class mt{constructor(t,a="en-US"){q(this,"strings");q(this,"defaultLocale");this.strings={...t},this.defaultLocale=a}getStringForLocale(t,a){let n=this.strings[a];n||(n=ht(a,this.strings,this.defaultLocale),this.strings[a]=n);const r=n[t];if(!r)throw new Error(`Could not find intl message ${t} in ${a} locale`);return r}}function ht(e,t,a="en-US"){if(t[e])return t[e];const n=yt(e);if(t[n])return t[n];for(const r in t)if(r.startsWith(n+"-"))return t[r];return t[a]}function yt(e){return Intl.Locale?new Intl.Locale(e).language:e.split("-")[0]}function bt(){const{locale:e}=A();return c.useMemo(()=>{try{return new Intl.DisplayNames(e,{type:"dateTimeField"})}catch{return new gt(e)}},[e])}class gt{constructor(t){q(this,"locale");q(this,"dictionary");this.locale=t,this.dictionary=new mt(Ae)}of(t){return this.dictionary.getStringForLocale(t,this.locale)}}function be(e,t,a,n){const r=c.useRef(a);r.current=a;const l=a==null;c.useEffect(()=>{if(l)return;const f=e.current,m=o=>r.current.call(this,o);return f.addEventListener(t,m,n),()=>{f.removeEventListener(t,m,n)}},[e,t,n,l])}function vt(e){const t=c.useRef(),{value:a,minValue:n,maxValue:r,isReadOnly:l,onIncrement:f,onIncrementPage:m,onDecrement:o,onDecrementPage:d,onDecrementToMin:P,onIncrementToMax:g}=e,y=c.useRef(e);y.current=e;const S=()=>clearTimeout(t.current);c.useEffect(()=>()=>S(),[]);const v=w=>{if(!(w.ctrlKey||w.metaKey||w.shiftKey||w.altKey||l)){switch(w.key){case"PageUp":if(m){w.preventDefault(),m();break}break;case"ArrowUp":case"Up":f&&(w.preventDefault(),f());break;case"PageDown":if(d){w.preventDefault(),d();break}break;case"ArrowDown":case"Down":o&&(w.preventDefault(),o());break;case"Home":P&&(w.preventDefault(),P());break;case"End":g&&(w.preventDefault(),g());break}return null}},O=c.useRef(!1),b=()=>{O.current=!0},k=()=>{O.current=!1},D=c.useCallback(w=>{S(),y.current.onIncrement(),t.current=window.setTimeout(()=>{(isNaN(r)||isNaN(a)||a<r)&&D(60)},w)},[r,a]),x=c.useCallback(w=>{S(),y.current.onDecrement(),t.current=window.setTimeout(()=>{(isNaN(n)||isNaN(a)||a>n)&&x(60)},w)},[n,a]),R=w=>{w.preventDefault()},{addGlobalListener:B,removeAllGlobalListeners:L}=Ge();return{spinButtonProps:{onKeyDown:v,onFocus:b,onBlur:k},incrementButtonProps:{onPressStart:()=>{D(400),B(window,"contextmenu",R)},onPressEnd:()=>{S(),L()},onFocus:b,onBlur:k},decrementButtonProps:{onPressStart:()=>{x(400),B(window,"contextmenu",R)},onPressEnd:()=>{S(),L()},onFocus:b,onBlur:k}}}function Pt(e,t,a){const n=c.useRef(""),{locale:r}=A(),l=bt();let{ariaLabel:f,ariaLabelledBy:m,ariaDescribedBy:o,focusManager:d}=Pe.get(t),P=e.isPlaceholder?"":e.text;const g=c.useMemo(()=>t.dateFormatter.resolvedOptions(),[t.dateFormatter]),y=ae({month:"long",timeZone:g.timeZone}),S=ae({hour:"numeric",hour12:g.hour12,timeZone:g.timeZone});if(e.type==="month"&&!e.isPlaceholder){const s=y.format(t.dateValue);P=s!==P?`${P} – ${s}`:s}else e.type==="hour"&&!e.isPlaceholder&&(P=S.format(t.dateValue));const{spinButtonProps:v}=vt({value:e.value,textValue:P,minValue:e.minValue,maxValue:e.maxValue,isDisabled:!!t.isDisabled,isReadOnly:t.isReadOnly||!e.isEditable,isRequired:!!t.isRequired,onIncrement:()=>{n.current="",t.increment(e.type)},onDecrement:()=>{n.current="",t.decrement(e.type)},onIncrementPage:()=>{n.current="",t.incrementPage(e.type)},onDecrementPage:()=>{n.current="",t.decrementPage(e.type)},onIncrementToMax:()=>{n.current="",t.setSegment(e.type,e.maxValue)},onDecrementToMin:()=>{n.current="",t.setSegment(e.type,e.minValue)}}),O=c.useMemo(()=>new rt(r,{maximumFractionDigits:0}),[r]),b=()=>{if(O.isValidPartialNumber(e.text)&&!t.isReadOnly&&!e.isPlaceholder){const s="";t.clearSegment(e.type),n.current=s}else e.type==="dayPeriod"&&t.clearSegment(e.type)},k=s=>{var F;if(s.key==="a"&&(Ye()?s.metaKey:s.ctrlKey)&&s.preventDefault(),!(s.ctrlKey||s.metaKey||s.shiftKey||s.altKey))switch(s.key){case"Backspace":case"Delete":{s.preventDefault(),s.stopPropagation(),b();break}default:{(F=v.onKeyDown)==null||F.call(v,s);break}}},{startsWith:D}=He({sensitivity:"base"}),x=ae({hour:"numeric",hour12:!0}),R=c.useMemo(()=>{var F;const s=new Date;return s.setHours(0),(F=x.formatToParts(s).find(u=>u.type==="dayPeriod"))==null?void 0:F.value},[x]),B=c.useMemo(()=>{var F;const s=new Date;return s.setHours(12),(F=x.formatToParts(s).find(u=>u.type==="dayPeriod"))==null?void 0:F.value},[x]),L=ae({year:"numeric",era:"narrow",timeZone:"UTC"}),w=c.useMemo(()=>{var T;if(e.type!=="era")return[];const s=ce(new De(1,1,1),t.calendar),F=t.calendar.getEras().map(I=>{var Z;const U=s.set({year:1,month:1,day:1,era:I}).toDate("UTC"),oe=(Z=L.formatToParts(U).find(se=>se.type==="era"))==null?void 0:Z.value;return{era:I,formatted:oe}}),u=xt(F.map(I=>I.formatted));if(u)for(const I of F)I.formatted=(T=I.formatted)==null?void 0:T.slice(u);return F},[L,t.calendar,e.type]),K=s=>{if(t.isDisabled||t.isReadOnly)return;const F=n.current+s;switch(e.type){case"dayPeriod":if(D(R,s))t.setSegment("dayPeriod",0);else if(D(B,s))t.setSegment("dayPeriod",12);else break;d.focusNext();break;case"era":{const u=w.find(T=>D(T.formatted,s));u&&(t.setSegment("era",u.era),d.focusNext());break}case"day":case"hour":case"minute":case"second":case"month":case"year":{if(!O.isValidPartialNumber(F))return;let u=O.parse(F),T=u,I=e.minValue===0;if(e.type==="hour"&&t.dateFormatter.resolvedOptions().hour12){switch(t.dateFormatter.resolvedOptions().hourCycle){case"h11":u>11&&(T=O.parse(s));break;case"h12":I=!1,u>12&&(T=O.parse(s));break}e.value>=12&&u>1&&(u+=12)}else u>e.maxValue&&(T=O.parse(s));if(isNaN(u))return;const U=T!==0||I;U&&t.setSegment(e.type,T),+(u+"0")>e.maxValue||F.length>=String(e.maxValue).length?(n.current="",U&&(d==null||d.focusNext())):n.current=F;break}}},G=()=>{n.current="",ze(a.current,{containingElement:Qe(a.current)});const s=window.getSelection();s==null||s.collapse(a.current)},W=c.useRef("");be(a,"beforeinput",s=>{var F,u;switch(s.preventDefault(),s.inputType){case"deleteContentBackward":case"deleteContentForward":O.isValidPartialNumber(e.text)&&!t.isReadOnly&&b();break;case"insertCompositionText":W.current=(F=a.current)==null?void 0:F.textContent,a.current.textContent=(u=a.current)==null?void 0:u.textContent;break;default:s.data!=null&&K(s.data);break}}),be(a,"input",s=>{const{inputType:F,data:u}=s;switch(F){case"insertCompositionText":a.current.textContent=W.current,(D(R,u)||D(B,u))&&K(u);break}}),c.useLayoutEffect(()=>{const s=a.current;return()=>{document.activeElement===s&&(d.focusPrevious()||d.focusNext())}},[a,d]);const X=qe()||e.type==="timeZoneName"?{role:"textbox","aria-valuemax":null,"aria-valuemin":null,"aria-valuetext":null,"aria-valuenow":null}:{},ee=c.useMemo(()=>{var s;return(s=t==null?void 0:t.segments)==null?void 0:s.find(F=>F.isEditable)},[t]);e!==ee&&t.validationState!=="invalid"&&(o="");const p=z(),j=!t.isDisabled&&!t.isReadOnly&&e.isEditable,V=e.type==="literal"?"":l.of(e.type),h=$e({"aria-label":(f?f+" ":"")+V,"aria-labelledby":m});return e.type==="literal"?{segmentProps:{onKeyDown:()=>{},onKeyUp:()=>{},onClick:()=>{}}}:{segmentProps:{...v,...h,id:p,...X,"aria-invalid":t.validationState==="invalid"?"true":void 0,"aria-describedby":o,"aria-readonly":t.isReadOnly||!e.isEditable?"true":void 0,"data-placeholder":e.isPlaceholder||void 0,contentEditable:j,suppressContentEditableWarning:j,spellCheck:j?"false":void 0,autoCapitalize:j?"off":void 0,autoCorrect:j?"off":void 0,[parseInt(J.version,10)>=17?"enterKeyHint":"enterkeyhint"]:j?"next":void 0,inputMode:t.isDisabled||e.type==="dayPeriod"||e.type==="era"||!j?void 0:"numeric",tabIndex:t.isDisabled?void 0:0,onKeyDown:k,onFocus:G,style:{caretColor:"transparent"},onPointerDown(s){s.stopPropagation()},onMouseDown(s){s.stopPropagation()}}}}function xt(e){e.sort();const t=e[0],a=e[e.length-1];for(let n=0;n<t.length;n++)if(t[n]!==a[n])return n;return 0}const Dt="_dateSegment_g4170_7",Ft="_number_g4170_21",ge={dateSegment:Dt,number:Ft},Re=J.forwardRef((e,t)=>{const{segment:a,state:n}=e,r=ie(t),{segmentProps:l}=Pt(a,n,r);return C.jsx("div",{...l,ref:r,className:N(ge.dateSegment,a.isPlaceholder?"placeholder":ge.number,"cdg-calendar-segment"),children:a.text})});Re.__docgenInfo={description:"",methods:[],displayName:"DateSegment"};const Ot="_dateField_1p2tb_9",St="_dateFieldInput_1p2tb_15",wt="_dateFieldLabel_1p2tb_31",Ct="_calendarToggleIcon_1p2tb_45",Mt="_expandButton_1p2tb_50",Rt="_textFieldHelperText_1p2tb_69",kt="_icon_1p2tb_77",Vt="_mobile_1p2tb_85",Tt="_disabled_1p2tb_89",It="_invalid_1p2tb_99",Et="_error_1p2tb_105",_t="_text_1p2tb_69",jt="_helperTextError_1p2tb_126",E={dateField:Ot,dateFieldInput:St,dateFieldLabel:wt,calendarToggleIcon:Ct,expandButton:Mt,textFieldHelperText:Rt,icon:kt,mobile:Vt,disabled:Tt,invalid:It,error:Et,text:_t,helperTextError:jt},Nt=()=>C.jsx("svg",{className:N(E.calendarToggleIcon,"cdg-calendar-toogle-icon"),width:"16",height:"16",viewBox:"0 0 16 16",children:C.jsx("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"currentColor"})}),ke=J.forwardRef((e,t)=>{const{locale:a}=A(),n=ie(null),r=ct({...e,isReadOnly:e.isReadOnly?!0:!!e.isMobile,locale:a,createCalendar:Je}),l=ie(t),{labelProps:f,fieldProps:m}=st({...e,isReadOnly:e.isReadOnly?!0:!!e.isMobile},r,l),o=e.isDisabled??!1,d=e.isReadOnly??!1,P=!!e.isInvalid||r.validationState==="invalid",g=()=>{const b=e.necessityIndicator??"icon";return e.isRequired&&b==="icon"?C.jsx("span",{className:N(E.error,"cdg-date-field-asterisk"),children:"*"}):e.isRequired&&b==="label"?C.jsx("span",{className:N(E.error,E.text,"cdg-date-field-required"),children:"(required)"}):!e.isRequired&&b==="label"?C.jsx("span",{className:N(E.text,"cdg-date-field-label"),children:"(optional)"}):""},{onPress:y,...S}=e.buttonProps,v=N(E.dateField,o&&E.disabled,P&&E.invalid,"cdg-date-field"),O=N(E.dateFieldInput,o||d?"":e.isMobile?E.mobile:"","cdg-date-field-input");return C.jsxs("div",{children:[C.jsxs("div",{className:v,children:[typeof e.label=="string"?C.jsxs("span",{...f,className:N(E.dateFieldLabel,"cdg-date-field-label"),children:[e.label," ",g()]}):e.label,C.jsxs("div",{...m,ref:l,className:O,onClick:()=>{var b;o||d||e.isMobile&&((b=n.current)==null||b.click())},children:[r.segments.map((b,k)=>{var D;return b.type==="literal"&&(b.isPlaceholder=((D=r.segments[k-1])==null?void 0:D.isPlaceholder)??!1),C.jsx(Re,{segment:b,state:r},k)}),C.jsx("button",{...S,ref:n,onClick:b=>{y==null||y(b)},type:"button",disabled:o||d,className:N(E.expandButton,"cdg-date-field-expand-button"),children:C.jsx(Nt,{})})]})]}),e.isInvalid&&e.errorMessage&&C.jsx("div",{className:N(E.textFieldHelperText,E.helperTextError,"cdg-date-field-error"),children:e.errorMessage}),e.helperText?C.jsx("div",{className:N(E.textFieldHelperText,"cdg-date-field-helper"),children:e.helperText}):null]})});ke.__docgenInfo={description:"",methods:[],displayName:"DateField"};function Bt(e,t,a){const n=z(),r=z(),l=z(),{labelProps:f,fieldProps:m,descriptionProps:o,errorMessageProps:d}=we({...e,labelElementType:"span"}),P=Se(t,a),g=m["aria-labelledby"]||m.id,{locale:y}=A(),S=t.formatValue(y,{month:"long"}),v=S?`selectedDateDescription ${S}`:"",O=ve(v),b=[O["aria-describedby"],m["aria-describedby"]].filter(Boolean).join(" ")||void 0,k=xe(e),D=c.useMemo(()=>ue(a),[a]),{focusWithinProps:x}=Ce({...e,isDisabled:t.isOpen,onBlurWithin:e.onBlur,onFocusWithin:e.onFocus,onFocusWithinChange:e.onFocusChange});return{groupProps:{...k,...P,...m,...O,...x,role:"group","aria-disabled":e.isDisabled||null,"aria-labelledby":g,"aria-describedby":b,onKeyDown(R){t.isOpen||e.onKeyDown&&e.onKeyDown(R)},onKeyUp(R){t.isOpen||e.onKeyUp&&e.onKeyUp(R)}},labelProps:{...f,onClick:()=>{D.focusFirst()}},fieldProps:{...m,id:l,[re]:"presentation","aria-describedby":b,value:t.value,onChange:t.setValue,minValue:e.minValue,maxValue:e.maxValue,placeholderValue:e.placeholderValue,hideTimeZone:e.hideTimeZone,hourCycle:e.hourCycle,granularity:e.granularity,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isRequired:e.isRequired,validationState:t.validationState,autoFocus:e.autoFocus},descriptionProps:o,errorMessageProps:d,buttonProps:{...O,id:n,"aria-haspopup":"dialog","aria-label":"calendar","aria-labelledby":`${g} ${n}`,"aria-describedby":b,"aria-expanded":t.isOpen||void 0,onPress:()=>t.setOpen(!0)},dialogProps:{id:r,"aria-labelledby":`${g} ${n}`},calendarProps:{autoFocus:!0,value:t.dateValue,onChange:t.setDateValue,minValue:e.minValue,maxValue:e.maxValue,isDisabled:e.isDisabled,isReadOnly:e.isReadOnly,isDateUnavailable:e.isDateUnavailable,defaultFocusedValue:t.dateValue?void 0:e.placeholderValue,validationState:t.validationState,errorMessage:e.errorMessage}}}function Lt(e){const[t,a]=de(e.isOpen,e.defaultOpen||!1,e.onOpenChange);return{isOpen:t,setOpen:a,open(){a(!0)},close(){a(!1)},toggle(){a(!t)}}}function Kt(e){var D;const t=Lt(e),[a,n]=de(e.value,e.defaultValue,e.onChange),r=a||e.placeholderValue,[l,f]=Me(r,e.granularity),m=a!=null?a.toDate(f??"UTC"):null,o=l==="hour"||l==="minute"||l==="second",d=e.shouldCloseOnSelect??!0,[P,g]=c.useState(),[y,S]=c.useState();if(c.useEffect(()=>{a&&(g(a),"hour"in a&&S(a))},[a]),r&&!(l in r))throw new Error("Invalid granularity "+l+" for value "+r.toString());const v=(x,R)=>{n("timeZone"in R?R.set(Xe(x)):et(x,R)),g(void 0),S(void 0)},O=x=>{const R=typeof d=="function"?d():d;o?y||R?v(x,y||me(e.placeholderValue)):g(x):n(x),R&&setTimeout(()=>{t.setOpen(!1)},0)},b=x=>{P?v(P,x):S(x)},k=e.validationState||(Fe(a,e.minValue,e.maxValue)?"invalid":null)||(a&&((D=e.isDateUnavailable)!=null&&D.call(e,a))?"invalid":null);return{value:a,setValue:n,dateValue:P,timeValue:y,setDateValue:O,setTimeValue:b,granularity:l,hasTime:o,...t,setOpen(x){!x&&!a&&P&&o&&v(P,y||me(e.placeholderValue)),t.setOpen(x)},validationState:k,formatValue(x,R){if(!m)return"";const B=le(R,{granularity:l,timeZone:f,hideTimeZone:!!e.hideTimeZone,hourCycle:e.hourCycle??24,showEra:a.calendar.identifier==="gregory"&&a.era==="BC"});return new Q(x,B).format(m)}}}const pt="_datePicker_xie8a_6",Wt="_dateRangeFields_xie8a_10",Zt={datePicker:pt,dateRangeFields:Wt},Ut=J.forwardRef((e,t)=>{const{css:a={},maxValue:n=Oe("2999-03-10"),ctaButtonRender:r,className:l}=e,f=Kt({...e,isReadOnly:e.isReadOnly?!0:!!e.isMobile,shouldCloseOnSelect:e.granularity?!0:e.shouldCloseOnSelect??!1}),m=ie(t),{groupProps:o,fieldProps:d,buttonProps:P,calendarProps:g}=Bt({...e,isReadOnly:e.isReadOnly?!0:!!e.isMobile},f,m),y={necessityIndicator:e.necessityIndicator,...d},S=()=>e.isReadOnly?!0:!(!e.isReadOnly&&!e.isMobile||e.isMobile);g.isReadOnly=S();const v=c.useRef(null),O=N(Zt.datePicker,l,"cdg-date-picker");return C.jsx(nt,{css:a,childrenRef:v,children:C.jsx("div",{ref:v,className:O,children:C.jsx(tt,{children:C.jsx(it,{isOpen:f.isOpen,anchor:C.jsx(At,{ref:m,groupProps:o,fieldProps:y,buttonProps:P,isInvalid:e.isInvalid,isReadOnly:e.isReadOnly,isMobile:e.isMobile,label:e.label,errorMessage:e.errorMessage,helperText:e.helperText}),css:{width:"100%"},direction:"bottom-left",onOpenChange:b=>f.setOpen(b),onOutsidePress:()=>f.close(),children:C.jsx(Gt,{maxValue:n,state:f,calendarProps:g,calendarRef:m,css:e.calendarCSS,ctaButtonRender:r})})})})})}),At=J.forwardRef((e,t)=>{const{groupProps:a,fieldProps:n,buttonProps:r,label:l,isInvalid:f,isMobile:m,isReadOnly:o=!1,errorMessage:d,helperText:P}=e;return C.jsx("div",{...a,ref:t,children:C.jsx(ke,{...n,"aria-describedby":n["aria-describedby"]??"",buttonProps:r,label:l,isInvalid:f,isMobile:m,isReadOnly:o,errorMessage:d,helperText:P})})}),Gt=e=>{const{state:t,calendarProps:a,maxValue:n=Oe("2999-03-10"),ctaButtonRender:r,css:l={}}=e;return C.jsx(at,{state:t,hasFooter:!0,...a,maxValue:n,css:l,ctaButtonRender:r})};Ut.__docgenInfo={description:"",methods:[],displayName:"DatePicker"};export{Ut as D,Se as a,Ce as b,Lt as c,Me as d,he as e,be as f,ke as g,we as u};
