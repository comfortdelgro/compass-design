import{b as C,v as c}from"./real-module-772929b6.js";import{c as R,d as w,C as B,b as l}from"./calendar-header-d2c6678f.js";import{s as j,R as P,a as n,j as r}from"./index-057be2bb.js";import"./index-58d69964.js";import{u as D}from"./use-dom-ref-53244fc2.js";import{$ as N,c as T}from"./real-module-75f8e53f.js";import{B as f}from"./button-f4266f10.js";const z=j("div",{width:"fit-content",backgroundColor:"$background",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.08)",borderRadius:"$md",padding:"$4","& .calendar-body":{display:"flex",justifyContent:"space-between",gap:"$2"},"& .calendar-footer":{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"$2",marginTop:"$6",paddingTop:"$6",borderTop:"1px solid $gray40"},"& .calendar-footer .preview-date":{margin:0,fontSize:"$body3"},"& .calendar-footer button":{padding:"$1 $2_5",height:"$8",fontSize:"$label2"}}),A=P.forwardRef((i,p)=>{const{state:a,hasFooter:$,css:b={},onCancelCallback:t,onApplyCallback:o,...d}=i,{locale:m}=N(),e=R({...d,visibleDuration:{months:2},locale:m,createCalendar:C}),s=D(p),{calendarProps:g,prevButtonProps:u,nextButtonProps:x}=w(d,e,s),h=T({}),v=()=>{t==null||t(),a==null||a.close()},y=()=>{a&&(o==null||o(a.value)),a==null||a.close()};return n(z,{ref:s,css:b,children:[r(B,{state:e,variant:"range",calendarProps:g,prevButtonProps:u,nextButtonProps:x}),n("div",{className:"calendar-body",children:[r(l,{state:e}),r(l,{state:e,offset:{months:1}})]}),$&&n("div",{className:"calendar-footer",children:[r("p",{className:"preview-date",children:e.value&&h.formatRange(e.value.start.toDate(c()),e.value.end.toDate(c()))}),r(f,{variant:"ghost",onPress:v,children:"Cancel"}),r(f,{variant:"primary",onPress:y,children:"Apply"})]})]})}),_=A;export{_ as R};
