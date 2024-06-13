import{j as s}from"./jsx-runtime-ea7736fc.js";import{R as r}from"./index-6c164b11.js";import{c as u,C as M}from"./string-cf4adbb3.js";import{p as j}from"./pick-child-1fb557e7.js";import{u as h}from"./use-dom-ref-7c72e1a5.js";import{P as G}from"./index-8ce02b55.js";const H="_header_130cc_8",J="_title_130cc_24",Q="_description_130cc_41",U="_actionsContainer_130cc_59",V="_wrapper_130cc_74",X="_closeIcon_130cc_92",Y="_content_130cc_116",Z="_modal_130cc_126",B="_sm_130cc_149",ee="_md_130cc_152",oe="_lg_130cc_155",p={header:H,title:J,description:Q,actionsContainer:U,wrapper:V,closeIcon:X,content:Y,modal:Z,sm:B,md:ee,lg:oe},A=r.forwardRef((i,d)=>{const{children:m,css:c={},className:o,...t}=i,n=h(d),a=u(p.actionsContainer,o,"cdg-modal-actions");return s.jsx(M,{css:c,children:s.jsx("div",{...t,ref:n,className:a,children:m})})});A.__docgenInfo={description:"",methods:[],displayName:"ModalActions"};const D=r.forwardRef((i,d)=>{const{children:m,css:c={},onClose:o,className:t,...n}=i,a=h(d),N=u(p.closeIcon,t,"cdg-modal-close-icon");return s.jsx(M,{css:c,children:s.jsx("div",{ref:a,onClick:()=>o==null?void 0:o(),tabIndex:0,className:N,...n,children:m})})});D.__docgenInfo={description:"",methods:[],displayName:"ModalCloseIcon"};const P=r.forwardRef((i,d)=>{const{children:m,css:c={},className:o,...t}=i,n=h(d),a=u(p.description,o,"cdg-modal-description");return s.jsx(M,{css:c,children:s.jsx("div",{className:a,ref:n,...t,children:m})})});P.__docgenInfo={description:"",methods:[],displayName:"ModalDescription"};const w=r.forwardRef((i,d)=>{const{children:m,css:c={},className:o,...t}=i,n=h(d),a=u(p.title,o,"cdg-modal-title");return s.jsx(M,{css:c,children:s.jsx("div",{className:a,ref:n,...t,children:m})})});w.__docgenInfo={description:"",methods:[],displayName:"ModalTitle"};const l=r.forwardRef((i,d)=>{const{css:m={},children:c,handleClose:o,onClick:t,onKeyDown:n,size:a="md",triggerId:N,className:b,...v}=i,x=h(d),f=r.useRef(null),y=r.useRef(null),R=r.useRef(null),_=r.useRef(null),{child:z}=j(c,w),{child:O}=j(c,P),{child:K}=j(c,A),{child:k}=j(c,D),T=e=>{e.stopPropagation(),t==null||t()},C=e=>{var g,I;e.stopPropagation(),n==null||n(e),e.key==="Escape"&&(o==null||o()),document.activeElement===R.current&&e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),(g=y.current)==null||g.focus()),document.activeElement===f.current&&e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),(I=R.current)==null||I.focus()),document.activeElement===_.current&&e.key==="Enter"&&(e.preventDefault(),o==null||o())};r.useEffect(()=>{var F;const e=Array.from(((F=x.current)==null?void 0:F.querySelectorAll(`
        button,
        a[href],
        input[type="button"],
        input[type="submit"],
        input[type="text"],
        textarea,
        select,
        input[type="checkbox"],
        input[type="radio"],
        [tabindex]:not([tabindex="-1"])
      `))??[]),g=Array.from((document==null?void 0:document.querySelectorAll('[role="dialog"]'))??[]);f.current=e[0]??null,y.current=e[1]??null,R.current=e[e.length-1]??null,f.current&&f.current.focus();const I=g.findIndex(E=>E===x.current);return()=>{var E;if(g.length>1&&I>0&&g[I-1])(E=g[I-1])==null||E.focus();else{const S=document==null?void 0:document.querySelector(`[data-target= ${N}]`);S&&S.focus()}}},[x,f,R,N]);const L=u(p.modal,a&&p[a],b,"cdg-modal-container"),W=u(p.content,"cdg-modal-content"),$=u(p.header,"cdg-modal-header");return s.jsx(M,{css:m,children:s.jsx("div",{...v,ref:x,tabIndex:0,role:"dialog","aria-modal":!0,className:L,onClick:e=>T==null?void 0:T(e),onKeyDown:e=>C==null?void 0:C(e),children:s.jsxs("div",{tabIndex:0,className:W,children:[s.jsxs("div",{className:$,children:[z,k&&r.cloneElement(k,{onClose:()=>o==null?void 0:o(),ref:_})]}),O,K]})})})});l.__docgenInfo={description:"",methods:[],displayName:"Modal"};const q=r.forwardRef((i,d)=>{const{css:m={},children:c,isOpen:o=!1,handleClose:t,id:n,size:a="md",className:N,...b}=i,v=h(d),x=h(null),{child:f}=j(c,l),y=_=>{_.stopPropagation(),_.preventDefault(),t==null||t()},R=u(p.wrapper,N,"cdg-modal-wrapper");return s.jsx(G,{open:o,children:s.jsx(M,{css:m,children:s.jsx("div",{...b,ref:x,className:R,onClick:_=>y==null?void 0:y(_),children:f&&r.cloneElement(f,{onClose:()=>t==null?void 0:t(),ref:v,size:a,handleClose:()=>t==null?void 0:t(),triggerId:n})})})})});q.__docgenInfo={description:"",methods:[],displayName:"ModalTrigger"};l.Trigger=q;l.Title=w;l.Description=P;l.Actions=A;l.CloseIcon=D;l.Trigger.displayName="Modal.Trigger";l.Title.displayName="Modal.Title";l.Description.displayName="Modal.Description";l.Actions.displayName="Modal.Actions";l.displayName="Modal";export{l as M};
