import{D as C}from"./index-1156f3dc.js";import{s as u,R as c,j as e,F as O,a as d}from"./index-2f0c84ee.js";import"./index-4892002e.js";import{a as R}from"./index-f83fd3c9.js";import{T as w}from"./index-e8c86899.js";import{T as E,a as v}from"./index-0be9f9a3.js";import{C as T}from"./components-34eec0a4.js";import{p as b}from"./pick-child-a7d8a01a.js";import{u as f}from"./use-dom-ref-894e841d.js";import{B as a}from"./button-c82a9896.js";import"./module-dad1b6d9.js";import"./module-f9a02953.js";import"./module-8203fd97.js";import"./module-fd182f49.js";import"./_define_property-1764bf98.js";import"./module-c212b86e.js";import"./textfield.styles-be468aff.js";import"./module-7ae53c25.js";import"./module-ff92bab8.js";import"./real-module-4602f142.js";import"./module-f6e21ecc.js";import"./module-f1247eca.js";import"./module-74dee838.js";const A=u("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",paddingLeft:"$4",paddingRight:"$4",width:"100%",height:"32.143%",display:"flex",justifyContent:"space-between",alignItems:"center"}),P=u("h3",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",paddingTop:"$4",paddingBottom:"$4",width:"80%",height:"100%",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$header3",lineHeight:"$normal",color:"$black"}),I=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",width:"100%",height:"10.124%",fontFamily:"$sans",fontWeight:"$normal",fontSize:"$body2",lineHeight:"$normal",color:"$secondaryText",borderTop:"1px solid rgba(0, 0, 0, 0.1)",borderBottom:"1px solid rgba(0, 0, 0, 0.1)"}),k=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",backgroundColor:"$primaryBg",width:"100%",height:"17.857%",display:"flex",flexDirection:"row",justifyContent:"flex-end",gap:"$2"}),B=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"#00000066",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"49"}),L=u("div",{appearance:"none",border:"none",boxSizing:"border-box",background:"transparent",margin:"0px",padding:"0px",width:"$3_5",height:"$3_5",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer","& *":{width:"100%",height:"100%"}}),j=u("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",zIndex:"50",width:"$120",minHeight:"$56",backgroundColor:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",borderRadius:"$lg",overflow:"clip",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",variants:{size:{sm:{width:"$75"},md:{width:"$125"},lg:{width:"$200"}}},defaultVariants:{size:"md"}}),F=c.forwardRef((l,s)=>{const{children:n,css:t={},...r}=l,o=f(s);return e(k,{css:t,ref:o,...r,children:n})}),$=F,N=c.forwardRef((l,s)=>{const{children:n,css:t={},onClose:r,...o}=l,p=f(s);return e(L,{css:t,ref:p,...o,onClick:()=>r==null?void 0:r(),children:n})}),S=N,W=c.forwardRef((l,s)=>{const{children:n,css:t={},...r}=l,o=f(s);return e(I,{css:t,ref:o,...r,children:n})}),z=W,q=c.forwardRef((l,s)=>{const{children:n,css:t={},...r}=l,o=f(s);return e(P,{css:t,ref:o,...r,children:n})}),D=q,H=c.forwardRef((l,s)=>{const{css:n={},children:t,isOpen:r=!1,handleClose:o,size:p="md"}=l,m=f(s),{child:h}=b(t,i);return c.useEffect(()=>{function g(x){var M;m.current&&!((M=m==null?void 0:m.current)!=null&&M.contains(x.target))&&(x.preventDefault(),o==null||o())}return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[m]),e(O,{children:r&&e(B,{css:n,children:h&&c.cloneElement(h,{onClose:()=>o==null?void 0:o(),ref:m,size:p,handleClose:()=>o==null?void 0:o()})})})}),V=H,_=c.forwardRef((l,s)=>{const{css:n={},children:t,handleClose:r,size:o="md",...p}=l,m={size:o},h=f(s),{child:g}=b(t,D),{child:x}=b(t,z),{child:M}=b(t,$),{child:y}=b(t,S);return d(j,{css:n,ref:h,...p,...m,children:[d(A,{children:[g,y&&c.cloneElement(y,{onClose:()=>r==null?void 0:r()})]}),x,M]})}),i=_;i.Trigger=V;i.Title=D;i.Description=z;i.Actions=$;i.CloseIcon=S;i.Trigger.displayName="Modal.Trigger";i.Title.displayName="Modal.Title";i.Description.displayName="Modal.Description";i.Actions.displayName="Modal.Actions";i.displayName="Modal";const ue=()=>{const l="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[s,n]=c.useState(!1),t=()=>{n(!1)},r=[{triggerElement:e("a",{href:"#",children:"Right tooltip"}),placement:"right"},{triggerElement:e("a",{href:"#",children:"Right-bottom tooltip"}),placement:"right bottom"},{triggerElement:e("a",{href:"#",children:"Right-top tooltip"}),placement:"right top"}];return d(T,{children:[e("h3",{children:"Default Modal is Medium sized"}),e(a,{css:{width:"7.8rem"},onPress:()=>n(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:s,handleClose:()=>t==null?void 0:t(),children:d(i,{children:[e(i.Title,{children:"My small title"}),e(i.CloseIcon,{children:e(R,{icon:C})}),d(i.Description,{children:[l,e(w,{}),r.map(o=>{const p=o.placement;return d(E,{placement:p,children:[o.triggerElement,d(v,{title:"Tooltip",dismissible:!0,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis laborum commodi mollitia officiis minus ipsum totam fuga odit, dicta magnam numquam reprehenderit et sequi dignissimos iusto deleniti. Quia, modi"}),d("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",marginTop:"16px",gap:"16px"},children:[e(a,{fullWidth:!0,variant:"primary",children:"Button"}),e(a,{fullWidth:!0,variant:"secondary",css:{backgroundColor:"white"},children:"Button"})]})]})]})})]}),d(i.Actions,{children:[e(a,{onPress:()=>n(!1),children:"Cancel"}),e(a,{onPress:()=>n(!1),children:"Do it"})]})]})})]})},fe=()=>{const l="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[s,n]=c.useState(!1),t=()=>{n(!1)},[r,o]=c.useState(!1),p=()=>{o(!1)},[m,h]=c.useState(!1),g=()=>{h(!1)};return d(T,{children:[e("h3",{children:"Small sized modal"}),e(a,{css:{width:"7.8rem"},onPress:()=>n(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:s,handleClose:()=>t==null?void 0:t(),size:"sm",children:d(i,{children:[e(i.Title,{children:"My small title"}),d(i.Description,{children:[l,e(w,{})]}),d(i.Actions,{children:[e(a,{onPress:()=>n(!1),children:"Cancel"}),e(a,{onPress:()=>n(!1),children:"Do it"})]})]})}),e("h3",{children:"Medium sized modal"}),e(a,{css:{width:"7.8rem"},onPress:()=>o(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:r,handleClose:()=>p==null?void 0:p(),size:"md",children:d(i,{children:[e(i.Title,{children:"My medium title"}),d(i.Description,{children:[l," ",e(w,{})]}),d(i.Actions,{children:[e(a,{onPress:()=>o(!1),children:"Cancel"}),e(a,{onPress:()=>o(!1),children:"Do it"})]})]})}),e("h3",{children:"Large sized modal"}),e(a,{css:{width:"7.8rem"},onPress:()=>h(!0),children:"Open Modal"}),e(i.Trigger,{isOpen:m,handleClose:()=>g==null?void 0:g(),size:"lg",children:d(i,{children:[e(i.Title,{children:"My large title"}),d(i.Description,{children:[l," ",e(w,{})]}),d(i.Actions,{children:[e(a,{onPress:()=>h(!1),children:"Cancel"}),e(a,{onPress:()=>h(!1),children:"Do it"})]})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{ue as Default,fe as Variants};
