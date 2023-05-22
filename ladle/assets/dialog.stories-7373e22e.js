import{m as O}from"./index-cf8b885c.js";import{s as p,R as s,j as e,F as R,a as g}from"./index-7868a988.js";import"./index-da2da10e.js";import{I as E}from"./index-a05fd082.js";import{C as w}from"./components-737ca3e4.js";import{p as m}from"./pick-child-adddb2ce.js";import{u as f}from"./use-dom-ref-7ffc5cd9.js";import{B as d}from"./button-cbf8d934.js";import"./index.es-35e7e983.js";const z=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"$57",display:"flex",justifyContent:"center",alignItems:"center","& *":{height:"100%"}}),$=p("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$black"}),T=p("p",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",flexGrow:1,width:"100%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText"}),v=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2"}),j=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"#00000066",position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",zIndex:"49",display:"flex",justifyContent:"center",alignItems:"center"}),P=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",padding:"$4",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",display:"flex",flexDirection:"column",gap:"$4",borderRadius:"$lg",variants:{variant:{confirmation:{},alert:{[`& ${v}`]:{display:"flex",justifyContent:"center",alignItems:"center"},[`& ${$}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},[`& ${T}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}}},defaultVariants:{variant:"confirmation"}}),k=s.forwardRef((o,l)=>{const{children:i,css:t={},...r}=o,a=f(l);return e(v,{css:t,ref:a,...r,children:i})}),C=k,N=s.forwardRef((o,l)=>{const{children:i,css:t={},...r}=o,a=f(l);return e(T,{css:t,ref:a,...r,children:i})}),I=N,F=s.forwardRef((o,l)=>{const{children:i,css:t={},...r}=o,a=f(l);return e(z,{css:t,ref:a,...r,children:i})}),S=F,L=s.forwardRef((o,l)=>{const{children:i,css:t={},...r}=o,a=f(l);return e($,{css:t,ref:a,...r,children:i})}),A=L,M=s.forwardRef((o,l)=>{const{css:i={},children:t,isOpen:r=!1,handleClose:a,variant:x="confirmation",...b}=o,{child:h}=m(t,n),c=f(l);return s.useEffect(()=>{function u(D){var y;c.current&&!((y=c==null?void 0:c.current)!=null&&y.contains(D.target))&&(D.preventDefault(),a==null||a())}return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[c]),e(R,{children:r&&e(j,{css:i,...b,children:h&&s.cloneElement(h,{onClose:()=>a==null?void 0:a(),ref:c,variant:x})})})}),B=M,W=s.forwardRef((o,l)=>{const{css:i={},children:t,variant:r="confirmation",...a}=o,x={variant:r},b=f(l),{child:h}=m(t,A),{child:c}=m(t,I),{child:u}=m(t,C),{child:D}=m(t,S);return g(P,{css:i,ref:b,...x,...a,children:[r=="alert"?D:null,h,c,u]})}),n=W;n.Trigger=B;n.Title=A;n.Description=I;n.Actions=C;n.Icon=S;n.Trigger.displayName="Dialog.Trigger";n.Title.displayName="Dialog.Title";n.Description.displayName="Dialog.Description";n.Actions.displayName="Dialog.Actions";n.Icon.displayName="Dialog.Icon";n.displayName="Dialog";const Y=()=>{const o="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,i]=s.useState(!1);return g(w,{children:[e("h3",{children:"Default dialog is confirmation variant"}),e(d,{css:{width:"7.8rem"},onPress:()=>i(!0),children:"Open Dialog"}),e(n.Trigger,{isOpen:l,handleClose:()=>i(!1),children:g(n,{children:[e(n.Title,{children:"My title"}),e(n.Description,{children:o}),g(n.Actions,{children:[e(d,{onPress:()=>i(!1),children:"Cancel"}),e(d,{onPress:()=>i(!1),children:"Do it"})]})]})})]})},Z=()=>{const o="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,i]=s.useState(!1),[t,r]=s.useState(!1);return g(w,{children:[e("h3",{children:"Confirmation dialog"}),e(d,{css:{width:"7.8rem"},onPress:()=>i(!0),children:"Open Dialog"}),e(n.Trigger,{isOpen:l,handleClose:()=>i(!1),variant:"confirmation",children:g(n,{children:[e(n.Title,{children:"My title"}),e(n.Description,{children:o}),g(n.Actions,{children:[e(d,{onPress:()=>i(!1),children:"Cancel"}),e(d,{onPress:()=>i(!1),children:"Do it"})]})]})}),e("h3",{children:"Alert dialog"}),e(d,{css:{width:"7.8rem"},onPress:()=>r(!0),children:"Open Dialog"}),e(n.Trigger,{isOpen:t,handleClose:()=>r(!1),variant:"alert",children:g(n,{children:[e(n.Title,{children:"My title"}),e(n.Description,{children:o}),e(n.Actions,{children:e(d,{onPress:()=>r(!1),children:"Ok"})}),e(n.Icon,{children:e(E,{icon:O})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as Default,Z as Variants};
