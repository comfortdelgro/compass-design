import{S as Ee,c as Ke,B as ie,e as le,g as Te,f as We,P as Oe,D as Fe}from"./index.styles-ac211df5.js";import{I as Ne,p as je,a as ze,t as He,L as Ae,D as se,b as Pe}from"./utils-dc869cf7.js";import{u as _e,c as Ze,e as Ve,D as Ue,f as Xe,z as qe}from"./floating-ui.react.esm-0975127c.js";import{s as N,R as r,a as m,j as e,F as A}from"./index-6eb6f04c.js";import{e as re}from"./dropdown.styles-10e447d6.js";import{u as H}from"./use-dom-ref-d9196554.js";const Ge=N("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$6",height:"$6",variants:{isSelected:{true:{div:{border:0,background:"$cdgBlue100",svg:{display:"block"}}},false:{svg:{display:"none"}}},checkmark:{checkbox:{div:{border:"1px solid $black",borderRadius:"3px",width:"$4",height:"$4",display:"flex",alignItems:"center",justifyContent:"center",background:"$background"},svg:{color:"$whiteText"}},none:{},tick:{svg:{color:"$cdgBlue"}}}},compoundVariants:[{isSelected:!0,checkmark:"checkbox",css:{div:{background:"$cdgBlue100"}}}]}),Je=r.forwardRef(({item:i,currentKeys:a,focusKey:u,disabledKeys:c,onSelect:d},h)=>{const{checkmark:p="checkbox"}=i.props,s=r.useMemo(()=>i.key?a.some(g=>g==i.key):!1,[a]),$=r.useMemo(()=>u==i.key,[u]),k=r.useMemo(()=>i.key?c.includes(i.key):!1,[c]);return m(Ee,{ref:h,isFocused:$,isSelected:s,onClick:()=>{i.key&&!k&&d(i.key)},isDisabled:k,children:[e(Ke,{children:i.props.children}),e(Ge,{isSelected:s,checkmark:p,children:p==="checkbox"?e("div",{children:e(Qe,{})}):p==="tick"?e(Ye,{}):null})]})}),ce=Je,Qe=()=>e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),Ye=()=>e("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})});function et(i){const a=r.useRef(null),{listRef:u,focusKey:c,isLoading:d,collection:h,currentKeys:p,disabledKeys:s,rootChildren:$,listBoxRef:k=a,sectionCollection:S,onSelect:g,onLoadMore:v}=i,I=()=>e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),_=()=>e("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})}),R=(E,l,b)=>{if(!l||!b)return e(A,{});switch(E){case"checkbox":return e(I,{});case"tick":return e(_,{});default:return e(A,{})}};return e(ie,{isLoading:d,listBoxRef:k,collection:h,sectionCollection:S,rootChildren:$,onLoadMore:v,renderOptions:E=>E.map((l,b)=>m("div",{children:[l.title&&m(le,{isClickable:l.isClickable??!1,onClick:()=>{var y;return(y=l.onClick)==null?void 0:y.call(l,l.title)},children:[l.title,e(Te,{children:R(l.checkmark??"tick",l.isClickable??!1,l.isChecked??!1)})]}),l.children.map(y=>y?e(ce,{ref:j=>{u.current[b]=j},item:y,focusKey:c,currentKeys:p,disabledKeys:s,onSelect:g},y.key):null)]},l.id))})}const de=N("div",{maxWidth:"100%",minHeight:"$11",borderRadius:"$md",cursor:"text",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"$1_5 $4",gap:"$1",backgroundColor:"$background",transition:"$default",borderWidth:"1px",borderStyle:"solid",borderColor:"#E6E6E6",".dropdown-icon":{cursor:"pointer",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center",padding:0,border:"none",background:"transparent",svg:{width:"$4",height:"$4",color:"$primaryText"}},"&:focus-within":{borderColor:"$cdgBlue"},input:{height:"$6_5",width:4,padding:0,margin:0,border:"none",backgroundColor:"$background",color:"$primaryText","&:focus":{outline:"none"},"&:focus-visible":{outline:"none"}},variants:{isEmpty:{true:{button:{p:{color:"#B4B4B4"}}}},isDisabled:{true:{backgroundColor:"$gray20","*":{color:"$disabledText",cursor:"not-allowed !important"}}},isErrored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}}}}),ae=N("div",{flexGrow:1,alignItems:"center",minHeight:"$7",display:"flex",gap:"$2_5",flexWrap:"wrap",".placeholder":{color:"#B4B4B4",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:"$label1",fontWeight:"$semibold",maxWidth:"100%",height:"fit-content",lineHeight:"1em",border:"none",textAlign:"left",padding:0,margin:0},".multiple-dropdown-chip-icon":{svg:{color:"$primaryText"}}}),tt=N("div",{borderWidth:"1px",borderStyle:"solid",borderColor:"#E6E6E6",borderRadius:"$full",padding:"$1 $3",fontSize:"$label1",cursor:"default",fontWeight:"$semibold",display:"flex",justifyContent:"center",alignItems:"center",gap:"$2",color:"$primaryText",div:{width:"fit-content",height:"fit-content"},variants:{isErrored:{true:{borderColor:"$danger",backgroundColor:"$dangerBg"},false:{}}}}),ot=N("div",{width:"100%",label:{fontSize:"$label1",fontWeight:"$semibold",marginBottom:"$2",display:"inline-block",width:"100%",span:{marginLeft:"$1",color:"$danger"}},variants:{displayedValue:{chip:{},string:{[`${ae}`]:{flexWrap:"nowrap",justifyContent:"flex-start",maxWidth:"calc(100% - 1rem - 1rem)",".itemListString":{maxWidth:"100%",height:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"$primaryText"}}}},variant:{combobox:{},select:{[`${de}`]:{cursor:"pointer"}}}}}),rt=r.forwardRef((i,a)=>{const{collection:u,rootChildren:c,sectionCollection:d,listBoxRef:h,isLoading:p,numberOfRows:s,onLoadMore:$}=i,k=H(a);return s&&s>=0?e(We,{ref:k,children:e(ie,{isLoading:p,collection:u,listBoxRef:h,rootChildren:c,sectionCollection:d,renderOptions:S=>S.slice(0,Math.min(s,u.length)).map(g=>m("div",{children:[g.title&&e(le,{children:g.title}),g.children.map(v=>v?e(ce,{item:v,focusKey:void 0,currentKeys:[],disabledKeys:[],onSelect:()=>{}},v.key):null)]},g.id)),onLoadMore:$})}):null}),nt=rt,it=()=>m("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:[e("g",{clipPath:"url(#clip0_5299_13653)",children:e("path",{d:"M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z",fill:"currentColor"})}),e("defs",{children:e("clipPath",{id:"clip0_5299_13653",children:e("rect",{width:"10",height:"10",fill:"white"})})})]});function ne(i,a,u){if(a!=null&&a.length>=0){const c=[];for(const d of a)c.push(d);return c}else if(i!=null&&i.length>0&&u){const c=[];for(const d of i)c.push(d);return c}return[]}const lt=r.forwardRef((i,a)=>{const{id:u=`cdg-element-${Math.random().toString(36).substring(2)}`,css:c={},isOpen:d,children:h,isErrored:p,isDisabled:s,isRequired:$,isReadOnly:k,helperText:S,defaultOpen:g,errorMessage:v,selectedKeys:I,numberOfRows:_,displayedValue:R="chip",icon:E=e(Ne,{}),erroredKeys:l=[],disabledKeys:b=[],isLoading:y=!1,variant:j="combobox",customDisplayValue:Z,defaultSelectedKeys:q=[],label:ue,placeholder:he,onLoadMore:fe=()=>{},onBlur:pe=()=>{},onFocus:ge=()=>{},onSelectionChange:V=()=>{},onOpenChange:U=()=>{},...ye}=i,[B,L]=r.useState(!1),[we,G]=r.useState(!1),[K,me]=r.useState(""),[C,J]=r.useState(ne(q,I)),[w,T]=r.useState(),be=H(a),z=H(null),W=H(null),Ce=r.useRef(null),ke=r.useRef(null),Q=r.useRef(null),Y=r.useRef([]),{refs:ee,floatingStyles:ve,context:xe}=_e({open:B,onOpenChange:L,middleware:[Ue(8),Xe()],whileElementsMounted:qe}),$e=Ze(xe),{getReferenceProps:Se,getFloatingProps:Le}=Ve([$e]),x=r.useMemo(()=>je(h,se),[h]),te=r.useMemo(()=>ze(h),[h]),O=r.useMemo(()=>K===""?x:x.filter(t=>{const n=He(t);return n==null?void 0:n.toLowerCase().includes(K.toLowerCase())}),[x,K]),F=r.useMemo(()=>new Ae(O,b),[O,b]),M=r.useMemo(()=>{const t=[];return x.length>0&&C&&C.length>0&&C.forEach(n=>{const o=x.find(f=>f.key==n);o&&t.push({key:n,rendered:o==null?void 0:o.props.children})}),t},[C,x,C.length]);r.useEffect(()=>{J(ne(q,I,!0))},[JSON.stringify(I),x]),r.useEffect(()=>{!d&&g&&L(g),d&&L(d)},[d]),r.useEffect(()=>{var t,n;T([...C].pop()),U==null||U(B),B?(t=W.current)==null||t.focus():(n=W.current)==null||n.blur()},[B]);const Re=t=>{if(z.current){const n=t.target.value;if(me(n),L(!0),n!==""){const o=document.createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="-9999px",o.style.overflow="hidden",o.style.visibility="hidden",o.style.whiteSpace="nowrap",o.style.height="0",o.style.width="fit-content",o.style.maxWidth=`${z.current.clientWidth-62}px`,o.innerHTML=n.replace(/\s/g,"&nbsp;"),document.body.appendChild(o),t.target.focus(),t.target.style.width=`${o.clientWidth+4}px`,o.remove()}else t.target.style.width="4px"}},Be=t=>{const n=o=>{var D;const f=F.getKeyIndex(o);f!=null&&((D=Y.current[f])==null||D.scrollIntoView({block:"nearest"}))};switch(t.key){case"ArrowUp":case"ArrowLeft":{t.preventDefault();const o=w!=null&&w!=-1?F.getKeyAbove(w):F.getFirstKey();o&&(T(o),n(o));break}case"ArrowDown":case"ArrowRight":{t.preventDefault();const o=w!=null&&w!=-1?F.getKeyBelow(w):F.getFirstKey();o&&(T(o),n(o));break}case"Enter":{t.preventDefault(),w&&X(w);break}case"Escape":{t.preventDefault(),L(!1);break}case"Tab":{L(!1);break}}},X=(t,n=!1)=>{var o;if(!k){const f=new Set(C),D=C.find(Ie=>Ie==t);D?(f.delete(D),D==w&&T(Array.from(f).pop()??void 0)):n||(f.add(t),T(t)),J([...f]),V==null||V([...f]),(o=W.current)==null||o.focus()}},Me=t=>{X(t,!0)},oe=()=>{var t;s||(L(!0),(t=W.current)==null||t.focus())},De=()=>{const t=M.map(n=>n.rendered);return t.length>0?e(A,{children:t.join(", ")}):""};return m(ot,{css:c,ref:be,...ye,displayedValue:R,variant:j,children:[ue&&m("label",{onClick:oe,htmlFor:u,children:[i.label,$&&e("span",{children:"*"})]}),e("div",{ref:ee.setReference,...Se,children:m(de,{className:"dropdownContainer",ref:z,isErrored:!!p,isDisabled:!!s,onClick:oe,children:[m(ae,{className:"selectedItemWrapper",children:[M.length===0&&K===""&&!B&&!we&&e("p",{className:"placeholder",children:he}),R=="chip"&&M.length>0&&M.map(t=>{const n=s||b.includes(t.key),o=l.some(f=>f==t.key);return m(tt,{isErrored:o,style:{cursor:s?"not-allowed":"pointer"},className:"multiple-dropdown-chip",children:[e("div",{children:t.rendered}),n?e(A,{}):e("div",{className:"multiple-dropdown-chip-icon",onClick:()=>{!s&&![...b].includes(t.key)&&Me(t.key)},children:e(it,{})})]},t.key)}),R=="string"&&Z&&M.length>0?e("div",{className:"itemListString",children:Z}):R=="string"&&!Z&&M.length>0?e("div",{className:"itemListString",children:De()}):null,!s&&j=="combobox"&&e("input",{id:u,type:"text",ref:W,value:K,onChange:Re,onBlur:()=>G(!1),onFocus:()=>G(!0)})]}),e("div",{className:"dropdown-icon",children:E})]})}),O&&B&&e("div",{className:"Popover",ref:ee.setFloating,style:{...ve,zIndex:60},...Le,children:e(Oe,{isEmpty:y?!1:O.length===0,visualizeRef:Q,triggerRef:z,onBlur:pe,onFocus:ge,handleKeyDown:Be,children:e(et,{listRef:Y,focusKey:w,isLoading:y,collection:O,rootChildren:h,listBoxRef:Ce,currentKeys:C,disabledKeys:b,sectionCollection:te,onSelect:X,onLoadMore:fe})})}),e(nt,{ref:ke,isLoading:y,collection:x,listBoxRef:Q,rootChildren:h,numberOfRows:_,sectionCollection:te,onLoadMore:()=>{}}),p&&v&&e(re,{error:!!p,children:v}),S&&e(re,{children:S})]})}),P=lt;P.Item=se;P.Header=Fe;P.Section=Pe;P.displayName="MultipleDropdown";export{P as M};