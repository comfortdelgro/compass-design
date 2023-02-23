import{m as f}from"./index-1156f3dc.js";import{s as b,R as a,j as e,a as p,r as J}from"./index-d46d4319.js";import"./index-aa23a8df.js";import{a as g}from"./index-0a370939.js";import{C as V}from"./components-f44f9ff7.js";import{a as Q}from"./module-5d007ed6.js";import{p as Y}from"./pick-child-6ed04095.js";import{u as D}from"./use-dom-ref-e537f89c.js";import{B as y}from"./button-2e91e6d6.js";import"./module-035cdbf0.js";import"./module-83a719b1.js";import"./module-ba5e3dab.js";import"./_define_property-1764bf98.js";import"./module-282ccf25.js";const ee=b("div",{width:"100%"}),te=b("div",{width:"100%",display:"flex",label:{fontSize:"$body3",fontWeight:"$semibold",display:"inline-block",span:{marginRight:"$1",color:"$danger"}},variants:{labelPosition:{top:{flexDirection:"column",gap:"$2"},left:{flexDirection:"row",gap:"$8",label:{maxWidth:"33%",flexShrink:0,width:"max-content"}}}}}),O=b("div",{marginTop:"$1",width:"$6",height:"$6",display:"flex",justifyContent:"center",alignItems:"center",userSelect:"none",svg:{width:"$4",height:"$4"}}),oe=b("div",{flexGrow:1,backgroundColor:"$background",border:"1px solid #EDEBE9",padding:"$2 $4",borderRadius:"$md",display:"flex",gap:"$4",variants:{collaspable:{true:{},false:{minHeight:"$32"}},isErrored:{true:{borderColor:"$danger",borderWidth:2}}}}),ne=b("div",{flexGrow:1,display:"flex",alignItems:"flex-start",height:"fit-content",flexWrap:"wrap",gap:"$4",input:{fontSize:"$body3",border:"none",background:"transparent",outline:"none",width:"25%",height:"$7_5",padding:0}}),Z=b("div",{fontSize:"$label2",fontWeight:"$semibold",backgroundColor:"#F5F5F6",padding:"$2",gap:"$3",height:"min-content",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"$md",svg:{width:"$3",height:"$3"},"&:hover":{backgroundColor:"#EAEBEB"},input:{fontSize:"$label2",fontWeight:"$semibold",height:"fit-content",padding:0,margin:0},variants:{isDisabled:{true:{background:"#F0F0F0",cursor:"not-allowed",opacity:.4},false:{"tag-box-x-icon":{cursor:"pointer"}}},isError:{true:{border:"1px solid #A4262C"}}}}),le=b("div",{width:"100%",marginTop:"$2",fontSize:"$label3",color:"$gray60",fontWeight:"$semibold",display:"flex",alignItems:"center",span:{flexGrow:1}}),ie=b("div",{width:"max-content",height:"min-content"}),re=b("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"},false:{color:"$gray70"}}}}),ce=a.forwardRef((t,n)=>{const{css:d={},children:m}=t,h=D(n);return e(ie,{css:d,ref:h,children:m})}),q=ce,ae=a.forwardRef((t,n)=>{const d=D(n);return e("input",{ref:d,type:"text",onFocus:t.onFocus,onBlur:t.onBlur,onKeyDown:m=>{const h=m.target.value;h!==""&&m.key==="Enter"&&(t.onEnter(h),d.current&&(d.current.value=""))}})}),se=ae,de=a.forwardRef((t,n)=>{const{isDisabled:d,isError:m,icon:h,value:x,id:$,wrapperRef:T,onRemove:R,onEdit:v}=t,[I,B]=a.useState(!1),[F,E]=a.useState(x),r=a.useRef(null),H=D(n),S=()=>{d||(B(!0),setTimeout(()=>{var i;(i=r==null?void 0:r.current)==null||i.focus()}))},w=(i,s)=>{const o=document.createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="-9999px",o.style.overflow="hidden",o.style.visibility="hidden",o.style.whiteSpace="nowrap",o.style.height="0",o.style.width="fit-content",o.style.fontSize="12px",o.style.fontWeight="600",o.style.maxWidth=`${T.current.clientWidth-62}px`,o.innerHTML=i.replace(/\s/g,"&nbsp;"),document.body.appendChild(o),s(o.clientWidth),o.remove()},M=i=>{const s=i.target.value;E(s),s!==""?w(s,o=>{i.target.focus(),i.target.style.width=`${o+4}px`}):i.target.style.width="4px"},P=i=>{var o;const s=i.target.value;s!==""&&i.key==="Enter"&&(v==null||v($,s),(o=r==null?void 0:r.current)==null||o.blur()),(i.key=="Escape"||i.keyCode==27)&&L()};a.useEffect(()=>{const i=x;i!==""&&w(i,s=>{r.current&&(r.current.focus(),r.current.style.width=`${s+4}px`,r.current.style.maxWidth=`${T.current.clientWidth-62}px`)})},[x]);const L=()=>{E(x),B(!1),w(x,i=>{r.current&&(r.current.style.width=`${i+4}px`)})};return p(Z,{isDisabled:d,isError:m,ref:H,children:[h,e("input",{ref:r,value:F,onKeyDown:P,onClick:S,onChange:M,onBlur:L,style:{display:I?"block":"none"}}),e("span",{onClick:S,style:{display:I?"none":"block",cursor:d?"not-allowed":"text"},children:x}),e("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",cursor:d?"not-allowed":"pointer"},children:e(he,{onClick:()=>R==null?void 0:R($),isDisabled:d})})]})}),he=({...t})=>e("svg",{...t,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e("path",{d:"M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z",fill:"#201F1E"})}),ue=de,pe=a.forwardRef((t,n)=>{const{css:d={},labelPosition:m="top",collaspable:h=!1,typeable:x=!1,items:$,helperText:T,children:R,isErrored:v,isRequired:I,errorMessage:B,onRemove:F,onAdd:E,onEdit:r,...H}=t,S=D(n),{child:w}=Y(R,q),{labelProps:M,fieldProps:P}=Q(H),[L,i]=a.useState(0),s=a.useRef(null),o=a.useRef(null),[k,K]=a.useState([]),[W,_]=a.useState(!1),U=()=>{o.current&&(o.current.style.outlineColor=v?"#A4262C":"-webkit-focus-ring-color",o.current.style.outlineStyle="auto")},X=()=>{o.current&&(o.current.style.outline="none")};return a.useEffect(()=>{K(c=>Array($.length).fill(0).map((A,C)=>c[C]||J.createRef()))},[$]),a.useEffect(()=>{var c,A;if(h&&!W){let C=((c=s.current)==null?void 0:c.clientWidth)??0,z=0;for(const j of k){const N=(A=j.current)==null?void 0:A.clientWidth;if(N){const G=C-N-16;G>37?C=G:(j.current.style.display="none",z++)}}i(Math.min(z,99))}else{for(const C of k)C.current&&(C.current.style.display="flex");i(0)}},[k,W,h]),p(ee,{css:d,ref:S,children:[p(te,{labelPosition:m,children:[t.label&&p("label",{...M,children:[I&&e("span",{children:"*"}),t.label]}),p("div",{children:[p(oe,{...P,ref:o,collaspable:h,isErrored:!!v,children:[t.icon&&e(O,{children:t.icon}),p(ne,{ref:s,children:[$.map((c,A)=>e(ue,{isDisabled:!!c.isDisabled,isError:!!c.isError,ref:k[A],wrapperRef:s,icon:c.icon,value:c.value,id:c.id,onRemove:F,onEdit:r},c.id)),L>0&&e(Z,{children:p("span",{children:["+",L]})},"remainingCount"),(!h&&x||h&&x&&W)&&e(se,{onFocus:U,onBlur:X,onEnter:c=>E==null?void 0:E(c)})]}),h&&e(O,{css:{cursor:"pointer"},onClick:()=>_(c=>!c),children:W?e(ge,{}):e(fe,{})})]}),B&&e(re,{error:!!v,children:B})]})]}),(T||w)&&p(le,{children:[e("span",{children:T})," ",w]})]})}),fe=({...t})=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...t,children:e("path",{d:"M11.9991 18C11.5301 18 11.0608 17.8186 10.7033 17.4559L1.53708 8.1702C0.820973 7.44475 0.820973 6.26953 1.53708 5.54408C2.25319 4.81864 3.41329 4.81864 4.12939 5.54408L11.9991 13.5196L19.8706 5.54554C20.5867 4.82009 21.7468 4.82009 22.4629 5.54554C23.179 6.27098 23.179 7.44621 22.4629 8.17165L13.2967 17.4574C12.9387 17.8201 12.4689 18 11.9991 18Z",fill:"#201F1E"})}),ge=({...t})=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...t,children:e("path",{d:"M12.0009 5C12.4699 5 12.9392 5.18136 13.2967 5.54409L22.4629 14.8298C23.179 15.5552 23.179 16.7305 22.4629 17.4559C21.7468 18.1814 20.5867 18.1814 19.8706 17.4559L12.0009 9.48036L4.12939 17.4545C3.41329 18.1799 2.25319 18.1799 1.53708 17.4545C0.820973 16.729 0.820973 15.5538 1.53708 14.8284L10.7033 5.54264C11.0613 5.17991 11.5311 5 12.0009 5Z",fill:"#201F1E"})}),l=pe;l.Action=q;l.displayName="TagBox";l.Action.displayName="TagBox.Action";const u=[{id:1,value:"Item 1",icon:e(g,{icon:f})},{id:2,value:"Item 2",isDisabled:!0},{id:3,value:"Item 3",icon:e(g,{icon:f})},{id:4,value:"Item 4",isDisabled:!0},{id:5,value:"Item 5",icon:e(g,{icon:f}),isError:!0},{id:6,value:"Item 6",isDisabled:!0},{id:7,value:"Item 7",icon:e(g,{icon:f})},{id:8,value:"Item 8",isDisabled:!0},{id:9,value:"Item 9",icon:e(g,{icon:f})},{id:10,value:"Item 10",isDisabled:!0}],Ie=()=>p(V,{children:[e("h3",{children:"Fully Functional"}),e(l,{label:"Text Label",items:u,icon:e(g,{icon:f}),isRequired:!0,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"Typeable"}),e(l,{label:"Text Label",items:u,typeable:!0,icon:e(g,{icon:f}),onAdd:t=>console.log(t),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"Error"}),e(l,{label:"Text Label",items:u,icon:e(g,{icon:f}),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"Positioned Label"}),e(l,{items:u,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"No Action"}),e(l,{label:"Text Label",items:u,onRemove:t=>console.log(t),helperText:"Helper text"}),e("h3",{children:"No Helper text and Action"}),e(l,{label:"Text Label",items:u,onRemove:t=>console.log(t)})]}),Se=()=>p(V,{children:[e("h3",{children:"Fully Functional"}),e(l,{label:"Text Label",collaspable:!0,items:u,icon:e(g,{icon:f}),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"Typeable"}),e(l,{label:"Text Label",collaspable:!0,typeable:!0,items:u,icon:e(g,{icon:f}),onAdd:t=>console.log(t),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"Error"}),e(l,{label:"Text Label",collaspable:!0,items:u,icon:e(g,{icon:f}),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"Positioned Label"}),e(l,{items:u,collaspable:!0,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e(l.Action,{children:e(y,{children:"Call to action"})})}),e("h3",{children:"No Action"}),e(l,{label:"Text Label",collaspable:!0,items:u,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text"}),e("h3",{children:"No Helper text and Action"}),e(l,{collaspable:!0,label:"Text Label",items:u,onRemove:t=>console.log(t)})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Se as Collaspable,Ie as TagBoxs};
