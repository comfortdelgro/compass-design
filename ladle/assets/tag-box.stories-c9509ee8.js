import{a as m}from"./index-6d586102.js";import{s as y,R as h,j as e,a as b,r as Q}from"./index-6eb6f04c.js";import"./index-ac6999a4.js";import{I as x}from"./index-5319d547.js";import{C as K}from"./components-8b2cea38.js";import{p as Y}from"./pick-child-a6483812.js";import{u as W}from"./use-dom-ref-d9196554.js";import{B as C}from"./button-b2164f2b.js";import"./index.es-ed68bd8f.js";const ee=y("div",{width:"100%"}),te=y("div",{width:"100%",display:"flex",label:{fontSize:"$body3",fontWeight:"$semibold",display:"inline-block",span:{marginLeft:"$1",color:"$danger"}},variants:{labelPosition:{top:{flexDirection:"column",gap:"$2"},left:{flexDirection:"row",gap:"$8",label:{maxWidth:"33%",flexShrink:0,width:"max-content"}}}}}),Z=y("div",{marginTop:"$1",width:"$6",height:"$6",display:"flex",flexShrink:0,justifyContent:"center",alignItems:"center",userSelect:"none",svg:{width:"$4",height:"$4"}}),oe=y("div",{flexGrow:1,backgroundColor:"$background",borderWidth:"1px",borderStyle:"solid",borderColor:"$divider",padding:"$2 $4",borderRadius:"$md",display:"flex",gap:"$4","&:focus-within":{borderColor:"$cdgBlue",".left-icon":{color:"$cdgBlue"}},variants:{collaspable:{true:{},false:{minHeight:"$32"}},isErrored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}}}}),ne=y("div",{flexGrow:1,display:"flex",alignItems:"flex-start",height:"fit-content",flexWrap:"wrap",gap:"$4",input:{fontSize:"$body3",border:"none",background:"transparent",outline:"none",width:4,height:"$6_5",padding:0}}),_=y("div",{fontSize:"$label2",fontWeight:"$semibold",backgroundColor:"$primaryBg",padding:"$2",gap:"$3",height:"min-content",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"$md",svg:{width:"$3",height:"$3"},"&:hover":{backgroundColor:"$darkerBg",color:"$black"},input:{fontSize:"$label2",fontWeight:"$semibold",height:"fit-content",padding:0,margin:0},button:{width:"16px",height:"16px",padding:0,margin:0,border:0,display:"flex",alignItems:"center",justifyContent:"center"},variants:{isDisabled:{true:{background:"$secondaryBg",cursor:"not-allowed",opacity:.4},false:{"tag-box-x-icon":{cursor:"pointer"}}},isError:{true:{border:"1px solid $danger"}}}}),le=y("div",{width:"100%",marginTop:"$2",fontSize:"$label3",color:"$gray60",fontWeight:"$semibold",display:"flex",alignItems:"center",span:{flexGrow:1}}),ie=y("div",{width:"max-content",height:"min-content"}),re=y("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"},false:{color:"$gray70"}}}}),ae=h.forwardRef((t,n)=>{const{css:g={},children:v,...w}=t,c=W(n);return e(ie,{css:g,ref:c,...w,children:v})}),U=ae,ce=h.forwardRef((t,n)=>{const{wrapperRef:g,onEnter:v=()=>{},...w}=t,c=W(n);return e("input",{ref:c,type:"text",onChange:u=>{if(g.current){const p=u.target.value;if(p!==""){const i=document.createElement("div");i.style.position="absolute",i.style.top="0",i.style.left="-9999px",i.style.overflow="hidden",i.style.visibility="hidden",i.style.whiteSpace="nowrap",i.style.fontSize="0.875rem",i.style.fontWeight="400",i.style.lineHeight="1.15",i.style.height="0",i.style.width="fit-content",i.style.maxWidth=`${g.current.clientWidth-62}px`,i.innerHTML=p.replace(/\s/g,"&nbsp;"),document.body.appendChild(i),u.target.focus(),u.target.style.width=`${i.clientWidth+4}px`,i.remove()}else u.target.style.width="4px"}},onKeyDown:u=>{const p=u.target.value;p!==""&&u.key==="Enter"&&(v(p),c.current&&(c.current.value="",c.current.style.width="4px"))},...w})}),se=ce,de=h.forwardRef((t,n)=>{const{isDisabled:g=!1,isError:v,icon:w,value:c,id:E,wrapperRef:u,onRemove:p,onEdit:i,calculateRemainingItems:S,...N}=t,[I,M]=h.useState(!1),[L,H]=h.useState(c),d=h.useRef(null),D=W(n),z=()=>{g||(M(!0),setTimeout(()=>{var r;(r=d==null?void 0:d.current)==null||r.focus()}))},T=(r,s)=>{const a=document.createElement("div");a.style.position="absolute",a.style.top="0",a.style.left="-9999px",a.style.overflow="hidden",a.style.visibility="hidden",a.style.whiteSpace="nowrap",a.style.height="0",a.style.width="fit-content",a.style.fontSize="12px",a.style.fontWeight="600",a.style.maxWidth=`${u.current.clientWidth-62}px`,a.innerHTML=r.replace(/\s/g,"&nbsp;"),document.body.appendChild(a),s(a.clientWidth),a.remove()},P=r=>{const s=r.target.value;H(s),S(),s!==""?T(s,a=>{r.target.focus(),r.target.style.width=`${a+4}px`}):r.target.style.width="4px"},F=r=>{var a;const s=r.target.value;s!==""&&r.key==="Enter"&&(i==null||i(E,s),(a=d==null?void 0:d.current)==null||a.blur()),(r.key=="Escape"||r.keyCode==27)&&B()};h.useEffect(()=>{const r=c;r!==""&&T(r,s=>{d.current&&(d.current.focus(),d.current.style.width=`${s+4}px`,d.current.style.maxWidth=`${u.current.clientWidth-62}px`)})},[c]);const B=()=>{H(c),M(!1),T(c,r=>{d.current&&(d.current.style.width=`${r+4}px`)})};return b(_,{isDisabled:g,isError:v,ref:D,...N,children:[w,e("input",{ref:d,value:L,onKeyDown:F,onClick:z,onChange:P,onBlur:B,style:{display:I?"block":"none"}}),e("span",{onClick:z,style:{display:I?"none":"block",cursor:g?"not-allowed":"text"},children:c}),e("button",{onClick:()=>p==null?void 0:p(E),tabIndex:g?0:1,style:{cursor:g?"not-allowed":"pointer"},children:e(he,{})})]})}),he=({...t})=>e("svg",{...t,width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e("path",{d:"M10.9408 9.45858C11.3509 9.8687 11.3509 10.5331 10.9408 10.9432C10.7373 11.1483 10.4683 11.25 10.1993 11.25C9.93022 11.25 9.66183 11.1475 9.4571 10.9424L5.99959 7.4867L2.54241 10.9416C2.33734 11.1483 2.06863 11.25 1.79992 11.25C1.5312 11.25 1.26282 11.1483 1.05759 10.9416C0.647469 10.5315 0.647469 9.86706 1.05759 9.45694L4.51576 5.99877L1.05759 2.54224C0.647469 2.13212 0.647469 1.46772 1.05759 1.05759C1.46772 0.647469 2.13212 0.647469 2.54224 1.05759L5.99959 4.5174L9.45776 1.05923C9.86788 0.64911 10.5323 0.64911 10.9424 1.05923C11.3525 1.46936 11.3525 2.13376 10.9424 2.54388L7.48424 6.00205L10.9408 9.45858Z",fill:"#201F1E"})}),ue=de,ge=h.forwardRef((t,n)=>{const{css:g={},id:v,labelPosition:w="top",collaspable:c=!1,typeable:E=!1,items:u,helperText:p,children:i,isErrored:S,isRequired:N,errorMessage:I,onRemove:M,onAdd:L,onEdit:H,label:d,icon:D,...z}=t,T=W(null),P=W(n),{child:F}=Y(i,U),[B,r]=h.useState(0),s=h.useRef(null),a=h.useRef(null),[k,X]=h.useState([]),[R,J]=h.useState(!1);h.useEffect(()=>{X(o=>Array(u.length).fill(0).map(($,j)=>o[j]||Q.createRef()))},[u]);const O=()=>{var j,q;let o=((j=s.current)==null?void 0:j.clientWidth)??0,$=0;for(const A of k)A.current&&A.current.removeAttribute("style");for(const A of k){const G=(q=A.current)==null?void 0:q.clientWidth;if(G){const V=o-G-16;V>37?o=V:(A.current.style.display="none",$++)}}r(Math.min($,99))};return h.useEffect(()=>{if(c&&!R)O();else{for(const o of k)o.current&&o.current.removeAttribute("style");r(0)}},[k,R,c]),h.useEffect(()=>{const o=s.current;if(!o)return;const $=new ResizeObserver(()=>{R||O()});return $.observe(o),()=>{$.disconnect()}},[s.current,R]),b(ee,{css:g,ref:P,...z,children:[b(te,{labelPosition:w,onClick:()=>{var o;return(o=T.current)==null?void 0:o.focus()},children:[d&&b("label",{htmlFor:v,children:[d,N&&e("span",{children:"*"})]}),b("div",{children:[b(oe,{id:v,ref:a,tabIndex:1,collaspable:c,isErrored:!!S,onFocus:()=>{var o;(o=T.current)==null||o.focus()},"aria-label":t["aria-label"],"aria-details":t["aria-details"],"aria-labelledby":t["aria-labelledby"],"aria-describedby":t["aria-describedby"],children:[D&&e(Z,{children:D}),b(ne,{ref:s,children:[u.map((o,$)=>e(ue,{isDisabled:!!o.isDisabled,isError:!!o.isError,ref:k[$],wrapperRef:s,icon:o.icon,value:o.value,id:o.id,onEdit:H,onRemove:M,calculateRemainingItems:O},o.id)),B>0&&e(_,{children:b("span",{children:["+",B]})},"remainingCount"),(!c&&E||c&&E&&R)&&e(se,{ref:T,wrapperRef:s,onEnter:o=>L==null?void 0:L(o)})]}),c&&e(Z,{css:{cursor:"pointer"},onClick:()=>J(o=>!o),children:R?e(fe,{}):e(pe,{})})]}),S&&I&&e(re,{error:!!S,children:I})]})]}),(p||F)&&b(le,{children:[e("span",{children:p})," ",F]})]})}),pe=({...t})=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...t,children:e("path",{d:"M11.9991 18C11.5301 18 11.0608 17.8186 10.7033 17.4559L1.53708 8.1702C0.820973 7.44475 0.820973 6.26953 1.53708 5.54408C2.25319 4.81864 3.41329 4.81864 4.12939 5.54408L11.9991 13.5196L19.8706 5.54554C20.5867 4.82009 21.7468 4.82009 22.4629 5.54554C23.179 6.27098 23.179 7.44621 22.4629 8.17165L13.2967 17.4574C12.9387 17.8201 12.4689 18 11.9991 18Z",fill:"#201F1E"})}),fe=({...t})=>e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",...t,children:e("path",{d:"M12.0009 5C12.4699 5 12.9392 5.18136 13.2967 5.54409L22.4629 14.8298C23.179 15.5552 23.179 16.7305 22.4629 17.4559C21.7468 18.1814 20.5867 18.1814 19.8706 17.4559L12.0009 9.48036L4.12939 17.4545C3.41329 18.1799 2.25319 18.1799 1.53708 17.4545C0.820973 16.729 0.820973 15.5538 1.53708 14.8284L10.7033 5.54264C11.0613 5.17991 11.5311 5 12.0009 5Z",fill:"#201F1E"})}),l=ge;l.Action=U;l.displayName="TagBox";l.Action.displayName="TagBox.Action";const f=[{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 1",icon:e(x,{icon:m})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 2",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 3",icon:e(x,{icon:m})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 4",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 5",icon:e(x,{icon:m}),isError:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 6",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 7",icon:e(x,{icon:m})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 8",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 9",icon:e(x,{icon:m})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 10",isDisabled:!0}],Ee=()=>b(K,{children:[e("h3",{children:"Fully Functional"}),e(l,{label:"Text Label",items:f,icon:e(x,{icon:m}),isRequired:!0,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"Typeable"}),e(l,{label:"Text Label",items:f,typeable:!0,icon:e(x,{icon:m}),onAdd:t=>console.log(t),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"Error"}),e(l,{label:"Text Label",items:f,icon:e(x,{icon:m}),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"Positioned Label"}),e(l,{items:f,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"No Action"}),e(l,{label:"Text Label",items:f,onRemove:t=>console.log(t),helperText:"Helper text"}),e("h3",{children:"No Helper text and Action"}),e(l,{label:"Text Label",items:f,onRemove:t=>console.log(t)})]}),Re=()=>b(K,{children:[e("h3",{children:"Fully Functional"}),e(l,{label:"Text Label",collaspable:!0,isRequired:!0,items:f,icon:e(x,{icon:m}),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"Typeable"}),e(l,{label:"Text Label",collaspable:!0,typeable:!0,items:f,icon:e(x,{icon:m}),onAdd:t=>console.log(t),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"Error"}),e(l,{label:"Text Label",collaspable:!0,items:f,icon:e(x,{icon:m}),onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"Positioned Label"}),e(l,{items:f,collaspable:!0,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e(l.Action,{children:e(C,{children:"Call to action"})})}),e("h3",{children:"No Action"}),e(l,{label:"Text Label",collaspable:!0,items:f,onRemove:t=>console.log(t),onEdit:(t,n)=>console.log(t,n),helperText:"Helper text"}),e("h3",{children:"No Helper text and Action"}),e(l,{collaspable:!0,label:"Text Label",items:f,onRemove:t=>console.log(t)})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Re as Collaspable,Ee as TagBoxs};