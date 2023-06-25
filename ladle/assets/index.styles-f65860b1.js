import{j as n,F as p,s as e,k as $,R as r,a as h}from"./index-4f639d7a.js";import{p as b}from"./pick-child-6c82c64d.js";import{u as x,c as v,d as S}from"./utils-c3c92495.js";const w=i=>n(p,{children:i.children}),k=w,H=e("li",{fontSize:"$label1",fontWeight:"$medium",padding:"$2 $4",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"$2",color:"$primaryText","&:hover":{backgroundColor:"$gray20"},variants:{isFocused:{true:{backgroundColor:"$gray20"}},isSelected:{true:{backgroundColor:"$gray20"}},isDisabled:{true:{opacity:.4,cursor:"not-allowed"}}}}),L=e("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$4",height:"$4",overflow:"hidden"}),F=e("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$6",height:"$6",overflow:"hidden",svg:{width:"$6",height:"$6"}}),N=e("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$6",height:"$6",borderRadius:"$md",background:"$$bg"}),W=e("div",{display:"flex",alignItems:"center",flexGrow:1}),C=$({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),I=e("div",{display:"flex",justifyContent:"center",margin:"$4 auto",".spinner":{display:"inline-block",position:"relative",width:"$4",height:"$4",div:{boxSizing:"border-box",display:"block",position:"absolute",width:"$4",height:"$4",border:"2px solid $divider",borderRadius:"50%",animation:`${C} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,borderColor:"$divider transparent transparent transparent"},".spinner-1":{animationDelay:"-0.45s"},".spinner-2":{animationDelay:"-0.3s"},".spinner-3":{animationDelay:"-0.15s"}}}),P=e("div",{backgroundColor:"$cdgBlue10",padding:"$2 $4",fontSize:"$label2",fontWeight:"$semibold",color:"$gray100",display:"flex",alignItems:"center",justifyContent:"space-between",variants:{isClickable:{true:{cursor:"pointer","&:hover":{backgroundColor:"$cdgBlue20"}}}}}),M=e("div",{boxSizing:"border-box",margin:0,padding:0,border:"none",outline:"none",display:"flex",alignItems:"center",width:"1.5rem",height:"1.5rem",justifyContent:"center",color:"#0142af",fontSize:"0.875rem",overflow:"hidden"});function V(i){const t=r.useRef(null),{listBoxRef:o=t,collection:a,rootChildren:c,sectionCollection:d,renderOptions:l}=i,s=r.useRef(null),u=r.useRef(null),m=x(s),y=r.useMemo(()=>v(d,a),[d,a]);r.useEffect(()=>{if(s.current&&u.current){const g=S(s.current,u.current);m&&g>=0&&g<4&&i.onLoadMore()}},[m]);const{child:f}=b(c,k);return h(p,{children:[f,n("ul",{ref:o,children:i.isLoading?n(I,{children:h("div",{className:"spinner",children:[n("div",{className:"spinner-1"}),n("div",{className:"spinner-2"}),n("div",{className:"spinner-3"}),n("div",{})]})}):h(p,{children:[l==null?void 0:l(y),[...a].length>0&&n("div",{style:{height:1},ref:s})]})}),n("div",{style:{height:1},ref:u})]})}const B=e("div",{margin:0,padding:"$2 0",borderRadius:"$md",width:"fit-content",height:"fit-content",minWidth:"100%",background:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",ul:{overscrollBehavior:"contain",maxHeight:"$64",overflowY:"auto",listStyle:"none",marginBlockStart:0,marginBlockEnd:0,marginInlineStart:0,marginInlineEnd:0,paddingInlineStart:0,"&:focus":{outline:"none"}}});function Y({children:i,triggerRef:t,visualizeRef:o,handleKeyDown:a,onFocus:c,onBlur:d,...l}){const{isEmpty:s=!1}=l;return r.useEffect(()=>(document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)})),r.useEffect(()=>(c(),()=>{d()}),[]),n(B,{style:{width:t!=null&&t.current?(t==null?void 0:t.current.clientWidth)+2:"100%",display:s?"none":""},css:{ul:{maxHeight:o!=null&&o.current?`${o==null?void 0:o.current.clientHeight}px`:"16rem"}},children:i})}const G=e("div",{padding:"$2 0",position:"absolute",top:0,left:"-9999px",overflow:"hidden",visibility:"hidden",whiteSpace:"nowrap",ul:{overscrollBehavior:"contain",maxHeight:"$64",overflowY:"auto",listStyle:"none",marginBlockStart:0,marginBlockEnd:0,marginInlineStart:0,marginInlineEnd:0,paddingInlineStart:0,"&:focus":{outline:"none"}}});export{V as B,k as D,Y as P,H as S,F as a,L as b,W as c,N as d,P as e,G as f,M as g};