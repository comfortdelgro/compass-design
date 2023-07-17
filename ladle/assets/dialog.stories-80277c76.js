import{f as q}from"./index-6d586102.js";import{F as w}from"./index.es-ed68bd8f.js";import{s as p,R as s,j as e,a as d}from"./index-6eb6f04c.js";import"./index-ac6999a4.js";import"./index-3abe0b3e.js";import{D as R}from"./index-82093d29.js";import{T as k}from"./index-435bbf5d.js";import{T as E}from"./index-99d765b0.js";import{T}from"./index-62b054da.js";import{C as v}from"./components-8b2cea38.js";import{p as h}from"./pick-child-a6483812.js";import{u as g}from"./use-dom-ref-d9196554.js";import{P as z}from"./index-31288c90.js";import{B as c}from"./button-b2164f2b.js";import{C as j}from"./checkbox-edadb1ea.js";import"./import-27d1dd21.js";import"./clsx.m-30223e4c.js";import"./calendar-d86537b1.js";import"./useCalendarState-c99a8e8f.js";import"./useOverlayTriggerState-7b13ef67.js";import"./utils-dc869cf7.js";import"./isArray-6aeda2a2.js";import"./useEvent-09478ab2.js";import"./import-be6f212e.js";import"./useCurrentTheme-152cebfd.js";import"./checkbox.styles-8f956872.js";const N=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"$57",display:"flex",justifyContent:"center",alignItems:"center","& *":{height:"100%"}}),$=p("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$primaryText"}),C=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",flexGrow:1,width:"100%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText"}),O=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2",variants:{responsive:{true:{"@media (max-width: 900px)":{flexDirection:"column",button:{div:{display:"block"}}}},false:{}}},defaultVariants:{responsive:"false"}}),L=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"$overlayDark",padding:"$4",position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",zIndex:"49",display:"flex",justifyContent:"center",alignItems:"center"}),M=p("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",maxHeight:"100%",overflow:"auto",padding:"$4",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",display:"flex",flexDirection:"column",gap:"$4",borderRadius:"$lg",variants:{variant:{confirmation:{},alert:{[`& ${O}`]:{display:"flex",justifyContent:"center",alignItems:"center"},[`& ${$}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},[`& ${C}`]:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}}},defaultVariants:{variant:"confirmation"}}),F=s.forwardRef((r,l)=>{const{children:t,css:a={},isMobile:o=!1,...n}=r,m=g(l);return e(O,{css:a,ref:m,responsive:o,...n,children:t})}),S=F,H=s.forwardRef((r,l)=>{const{children:t,css:a={},...o}=r,n=g(l);return e(C,{css:a,ref:n,...o,children:t})}),I=H,B=s.forwardRef((r,l)=>{const{children:t,css:a={},...o}=r,n=g(l);return e(N,{css:a,ref:n,...o,children:t})}),A=B,V=s.forwardRef((r,l)=>{const{children:t,css:a={},...o}=r,n=g(l);return e($,{css:a,ref:n,...o,children:t})}),P=V,W=s.forwardRef((r,l)=>{const{css:t={},children:a,isOpen:o=!1,handleClose:n,variant:m="confirmation",...b}=r,{child:x}=h(a,i),u=g(l);return s.useEffect(()=>{function D(f){var y;u.current&&!((y=u==null?void 0:u.current)!=null&&y.contains(f.target))&&(f.preventDefault(),f.stopPropagation(),n==null||n())}return document.addEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}},[u]),e(z,{open:o,children:e(L,{css:t,...b,children:x&&s.cloneElement(x,{onClose:()=>n==null?void 0:n(),ref:u,variant:m})})})}),U=W,G=s.forwardRef((r,l)=>{const{css:t={},children:a,variant:o="confirmation",...n}=r,m={variant:o},b=g(l),{child:x}=h(a,P),{child:u}=h(a,I),{child:D}=h(a,S),{child:f}=h(a,A);return d(M,{css:t,ref:b,...m,...n,children:[o=="alert"?f:null,x,u,D]})}),i=G;i.Trigger=U;i.Title=P;i.Description=I;i.Actions=S;i.Icon=A;i.Trigger.displayName="Dialog.Trigger";i.Title.displayName="Dialog.Title";i.Description.displayName="Dialog.Description";i.Actions.displayName="Dialog.Actions";i.Icon.displayName="Dialog.Icon";i.displayName="Dialog";const be=()=>{const r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=s.useState(!1);return d(v,{children:[e("h3",{children:"Default dialog is confirmation variant"}),e(c,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:l,handleClose:()=>t(!1),children:d(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:r}),d(i.Actions,{children:[e(c,{onPress:()=>t(!1),children:"Cancel"}),e(c,{onPress:()=>t(!1),children:"Do it"})]})]})})]})},ve=()=>{const r="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,t]=s.useState(!1),[a,o]=s.useState(!1),[n,m]=s.useState(!1);return d(v,{children:[e("h3",{children:"Confirmation dialog"}),e(c,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:l,handleClose:()=>t(!1),variant:"confirmation",children:d(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:r}),d(i.Actions,{children:[e(c,{onPress:()=>t(!1),children:"Cancel"}),e(c,{onPress:()=>t(!1),children:"Do it"})]})]})}),e("h3",{children:"Alert dialog"}),e(c,{css:{width:"7.8rem"},onPress:()=>o(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:a,handleClose:()=>o(!1),variant:"alert",children:d(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:r}),e(i.Actions,{children:e(c,{onPress:()=>o(!1),children:"Ok"})}),e(i.Icon,{children:e(w,{icon:q})})]})}),e("h3",{children:"Custom dialog"}),e(c,{css:{width:"7.8rem"},onPress:()=>m(!0),children:"Open Dialog"}),e(i.Trigger,{isOpen:n,handleClose:()=>m(!1),children:d(i,{children:[e(i.Title,{children:"My title"}),e(i.Description,{children:d(v,{css:{gap:"$4"},children:[e(R,{css:{width:"100%"},label:"Date picker"}),e(E,{label:"Text field"}),e(k,{css:{width:"100%",textarea:{width:"100%",minHeight:"120px"}},label:"Text area"}),e(j,{children:"I agree to this term and condition"}),e(T.Label,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"}),e(T.Label,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})]})}),d(i.Actions,{isMobile:!0,children:[e(c,{onPress:()=>o(!1),variant:"ghost",children:"Cancel"}),e(c,{onPress:()=>o(!1),children:"Ok"})]}),e(i.Icon,{children:e(w,{icon:q})})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{be as Default,ve as Variants};