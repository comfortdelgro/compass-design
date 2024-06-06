"use client";import{j as a}from"./jsx-runtime-ea7736fc.js";import{r as e}from"./index-6c164b11.js";import{a as D}from"./string-de12cf5f.js";import{u as b}from"./use-dom-ref-7c72e1a5.js";import{C as B}from"./objectToCSS-aff350d4.js";const Q="_naturalDrawerWrapper_t442r_4",U="_bottomSheet_t442r_14",X="_fullscreen_t442r_19",Y="_naturalDrawerStop_t442r_38",Z="_naturalDrawerTopOffset_t442r_44",ee="_bottomSheetBody_t442r_50",re="_naturalDrawer_t442r_4",te="_drawerOffsetTop_t442r_66",ae="_drawerScroller_t442r_70",ne="_naturalDrawerContent_t442r_71",oe="_maximized_t442r_75",se="_naturalDrawerDragger_t442r_80",le="_naturalDrawerHeader_t442r_87",ce="_naturalDrawerHeaderContent_t442r_97",ue="_fixedContent_t442r_101",de="_naturalDrawerHandle_t442r_112",ie="_naturalBookingBottomSelect_t442r_120",s={naturalDrawerWrapper:Q,bottomSheet:U,fullscreen:X,naturalDrawerStop:Y,naturalDrawerTopOffset:Z,bottomSheetBody:ee,naturalDrawer:re,drawerOffsetTop:te,drawerScroller:ae,naturalDrawerContent:ne,maximized:oe,naturalDrawerDragger:se,naturalDrawerHeader:le,naturalDrawerHeaderContent:ce,fixedContent:ue,naturalDrawerHandle:de,naturalBookingBottomSelect:ie},T=e.forwardRef(({children:i,header:f,setOffsetTop:n,css:w={},...p},u)=>{const[h,x]=e.useState(!1),l=b(u);return e.useEffect(()=>{h&&n(l.current.offsetTop)},[l,n,h]),e.useEffect(()=>{x(!0)},[]),a.jsx(B,{css:w,childrenRef:l,children:a.jsxs("div",{className:`${s.naturalDrawer} natural-drawer`,ref:l,children:[f,a.jsx("div",{className:`${s.naturalDrawerContent} natural-drawer-content`,...p,children:i})]})})});T.__docgenInfo={description:"",methods:[],displayName:"NaturalDrawerContent",props:{css:{defaultValue:{value:"{}",computed:!1},required:!1}}};const fe=500,S=e.forwardRef((i,f)=>{var O;const{type:n="drawer",children:w,className:p="",expanded:u=!1,fullscreen:h=!0,header:x,fixedContent:l,visibleHeight:E,style:M,drawerScroll:W=()=>{},onReachBottom:V=()=>{},onCollapsed:C=()=>{},onExpanded:_=()=>{},...z}=i,[m,I]=e.useState(!1),[$,L]=e.useState(0),[q,A]=e.useState(0),[F,G]=e.useState(!1),r=b(f),o=e.useRef(null),g=e.useRef(null),J=e.useRef(null),N=E||(((O=r.current)==null?void 0:O.clientHeight)||0)*.36,y=Math.floor(q||0),j=e.useCallback(()=>{var R;let t="";if(!r.current)return t;const c=(R=r.current)==null?void 0:R.clientHeight;return t=100-N*100/c+"%",t},[N,r]),K=()=>{var t,c;return((((t=r==null?void 0:r.current)==null?void 0:t.scrollTop)+(l?0:N))/((c=r==null?void 0:r.current)==null?void 0:c.scrollHeight)||0)*.8},d=e.useCallback(t=>{r.current&&o&&o.current&&r.current.scrollTo({top:t,behavior:"smooth"})},[r]),P=t=>{const c=t.target.scrollTop;L(c),c>=y?_():c===0&&C(),F&&c<=10&&V(),W(t)},H=e.useCallback(()=>{var t;d(((t=o==null?void 0:o.current)==null?void 0:t.offsetTop)||0),_()},[o,_,d]),v=e.useCallback(()=>{r.current&&o&&o.current&&(d(0),C())},[C,d,r]);return e.useEffect(()=>{u?H():v()},[v,H,u]),e.useEffect(()=>{m&&g&&g.current&&n==="bottomSheet"&&(d(g.current.offsetTop),setTimeout(()=>{G(!0),_()},fe)),m&&o&&o.current&&n==="drawer"&&(o.current.style.scrollSnapAlign="start")},[_,d,n,m]),e.useEffect(()=>{I(!0)},[H,n]),a.jsxs("div",{ref:r,className:D(p,"natural-drawer-wrapper",s[n],s.naturalDrawerWrapper,h?s.fullscreen:"",$>=y?D("maximized",s.maximized):""),onScroll:P,style:{backgroundColor:n==="bottomSheet"||!l?`rgba(0,0,0,${K()})`:"",...M},...z,children:[l&&a.jsx("div",{className:D("fixed-content",s.fixedContent),children:l}),n==="bottomSheet"?a.jsx("div",{ref:J,className:D("natural-drawer-stop",s.naturalDrawerStop),style:{height:`calc(100% - ${j()})`}}):"",m&&a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:g,className:D("natural-drawer-stop",s.naturalDrawerStop),style:{height:j()}}),a.jsx(T,{ref:o,header:x,setOffsetTop:A,style:{opacity:m?"":0},children:w})]})]})});S.__docgenInfo={description:"",methods:[],displayName:"NaturalDrawerWrapper"};const k=e.forwardRef(({children:i,useDrag:f=!1,css:n={},...w},p)=>{const u=b(p);return a.jsx(B,{css:n,childrenRef:u,children:a.jsxs("header",{ref:u,className:`${s.naturalDrawerHeader} natural-drawer-header`,...w,children:[f&&a.jsx("div",{className:s.naturalDrawerDragger,children:a.jsx("span",{className:s.naturalDrawerHandle})}),i]})})});k.__docgenInfo={description:"",methods:[],displayName:"NaturalDrawerHeader",props:{useDrag:{defaultValue:{value:"false",computed:!1},required:!1},css:{defaultValue:{value:"{}",computed:!1},required:!1}}};S.Header=k;S.Content=T;S.displayName="Drawer";export{S as N};