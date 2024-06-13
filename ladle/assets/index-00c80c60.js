import{D as W}from"./date-picker-edc34dcd.js";import{j as i}from"./jsx-runtime-ea7736fc.js";import{R as d}from"./index-6c164b11.js";import{c as _,C as I,a as G}from"./string-cf4adbb3.js";import{p as v}from"./pick-child-1fb557e7.js";import{u as D}from"./use-dom-ref-7c72e1a5.js";import{P as H}from"./index-8ce02b55.js";W.displayName="DatePicker";const J="_iconContainer_1m7ep_8",Q="_title_1m7ep_26",U="_description_1m7ep_41",V="_actionsContainer_1m7ep_57",X="_wrapper_1m7ep_71",Y="_content_1m7ep_90",Z="_dialog_1m7ep_102",B="_actionsContainerResponsive_1m7ep_122",ee="_dialogAlert_1m7ep_130",oe="_dialogTitle_1m7ep_136",te="_dialogDescription_1m7ep_137",p={iconContainer:J,title:Q,description:U,actionsContainer:V,wrapper:X,content:Y,dialog:Z,actionsContainerResponsive:B,dialogAlert:ee,dialogTitle:oe,dialogDescription:te},P=d.forwardRef((c,r)=>{const{children:l,css:t={},isMobile:s=!1,className:o,...n}=c,a=D(r),m=_(p.actionsContainer,s&&p.actionsContainerResponsive,o,"cdg-dialog-action");return i.jsx(I,{css:t,children:i.jsx("div",{...n,className:m,ref:a,children:l})})});P.__docgenInfo={description:"",methods:[],displayName:"DialogActions"};const b=d.forwardRef((c,r)=>{const{children:l,css:t={},className:s,...o}=c,n=D(r),a=_(p.description,s,"cdg-dialog-description");return i.jsx(I,{css:t,children:i.jsx("div",{...o,ref:n,className:a,children:l})})});b.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};const w=d.forwardRef((c,r)=>{const{children:l,css:t={},className:s,...o}=c,n=D(r),a=_(p.iconContainer,s,"cdg-dialog-icon");return i.jsx(I,{css:t,children:i.jsx("div",{...o,className:a,ref:n,children:l})})});w.__docgenInfo={description:"",methods:[],displayName:"DialogIcon"};const F=d.forwardRef((c,r)=>{const{children:l,css:t={},className:s,...o}=c,n=D(r),a=_(p.title,s,"cdg-dialog-title");return i.jsx(I,{css:t,children:i.jsx("div",{...o,className:a,ref:n,children:l})})});F.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};const k=d.forwardRef((c,r)=>{const{css:l={},children:t,handleClose:s,onClick:o,onKeyDown:n,triggerId:a,variant:m="confirmation",className:T,...C}=c,h=D(r),f=d.useRef(null),N=d.useRef(null),R=d.useRef(null),{child:x}=v(t,F),{child:M}=v(t,b),{child:O}=v(t,P),{child:$}=v(t,w),A=e=>{e.stopPropagation(),o==null||o()},E=e=>{var u,y;e.stopPropagation(),n==null||n(e),e.key==="Escape"&&(s==null||s()),document.activeElement===R.current&&e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),(u=N.current)==null||u.focus()),document.activeElement===f.current&&e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),(y=R.current)==null||y.focus())};d.useEffect(()=>{var S;const e=Array.from(((S=h.current)==null?void 0:S.querySelectorAll(`
          button,
          a[href],
          input,
          textarea,
          select,
          [tabindex]:not([tabindex="-1"])
        `))??[]),u=Array.from((document==null?void 0:document.querySelectorAll('[role="dialog"]'))??[]);f.current=e[0]??null,N.current=e[1]??null,R.current=e[e.length-1]??null,f.current&&f.current.focus();const y=u.findIndex(j=>j===h.current);return()=>{var j;if(u.length>1&&y>0&&u[y-1])(j=u[y-1])==null||j.focus();else{const q=document==null?void 0:document.querySelector(`[data-target= ${a}]`);q&&q.focus()}}},[h,f,R,a]);const z=_(p.dialog,m&&p["dialog"+G(m)],T,"cdg-dialog-container"),K=_(p.content,"cdg-dialog-content");return i.jsx(I,{css:l,children:i.jsx("div",{...C,ref:h,tabIndex:0,role:"dialog","aria-modal":!0,onClick:e=>A==null?void 0:A(e),onKeyDown:e=>E==null?void 0:E(e),className:z,children:i.jsxs("div",{tabIndex:0,className:K,children:[m=="alert"?$:null,x,M,O]})})})});k.__docgenInfo={description:"",methods:[],displayName:"Dialog"};const L=d.forwardRef((c,r)=>{const{css:l={},children:t,isOpen:s=!1,handleClose:o,id:n,variant:a="confirmation",className:m,...T}=c,{child:C}=v(t,k),h=D(r),f=D(null),N=x=>{x.stopPropagation(),x.preventDefault(),o==null||o()},R=_(p.wrapper,m,"cdg-dialog-trigger");return i.jsx(H,{open:s,children:i.jsx(I,{css:l,children:i.jsx("div",{...T,ref:f,className:R,onClick:x=>N==null?void 0:N(x),children:C&&d.cloneElement(C,{ref:h,variant:a,triggerId:n,handleClose:()=>o==null?void 0:o()})})})})});L.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const g=k;g.Trigger=L;g.Title=F;g.Description=b;g.Actions=P;g.Icon=w;g.Trigger.displayName="Dialog.Trigger";g.Title.displayName="Dialog.Title";g.Description.displayName="Dialog.Description";g.Actions.displayName="Dialog.Actions";g.Icon.displayName="Dialog.Icon";g.displayName="Dialog";export{g as D};
