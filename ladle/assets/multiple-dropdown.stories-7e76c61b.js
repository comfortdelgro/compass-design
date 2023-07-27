import{f as oe}from"./index-6d586102.js";import{F as le}from"./index.es-03e4d0cd.js";import{r as M,k as Je,s as S,R as o,j as e,a as h,F as Se}from"./index-01501350.js";import{C as Ye}from"./index-c8c8b5f8.js";import{P as Qe}from"./index-6b15c7be.js";import{u as B}from"./use-dom-ref-59870be1.js";import{p as we}from"./pick-child-46acd2c1.js";import{C as be}from"./components-ab932d89.js";import"./floating-ui.react.esm-1980a4a7.js";const ie=M.createContext({open:!1,searchValue:"",labelId:"",selectedItems:[],disabledKeys:[],selectedKeys:[],defaultSelectedKeys:[],selectedSectionIndexes:[],setSelectedSectionIndexes:()=>{},setSelectedItems:()=>{},onItemClick:()=>{},onSectionClick:()=>{}}),Xe=Je({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),xe=S("div",{maxWidth:"100%",minHeight:"$11",borderRadius:"$md",cursor:"text",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"$1_5 $4",gap:"$1",backgroundColor:"$background",transition:"$default",borderWidth:"1px",borderStyle:"solid",borderColor:"#E6E6E6",".dropdown-icon":{cursor:"pointer",flexShrink:0,display:"flex",justifyContent:"center",alignItems:"center",padding:0,border:"none",background:"transparent",svg:{width:"$4",height:"$4",color:"$primaryText"}},"&:focus-within":{borderColor:"$cdgBlue"},input:{height:"$6_5",width:4,padding:0,margin:0,border:"none",backgroundColor:"$background",color:"$primaryText","&:focus":{outline:"none"},"&:focus-visible":{outline:"none"}},"& .dropdown-icon":{transition:"transform 0.3s linear"},variants:{isEmpty:{true:{button:{p:{color:"#B4B4B4"}}}},isDisabled:{true:{backgroundColor:"$gray20","*":{color:"$disabledText",cursor:"not-allowed !important"},button:{span:{color:"$disabledText"}}}},isErrored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}},isOpen:{true:{".dropdown-icon":{transform:"rotate(180deg)",transition:"transform 0.3s linear"}}}}}),$e=S("div",{flexGrow:1,alignItems:"center",minHeight:"$7",display:"flex",gap:"$2_5",flexWrap:"wrap",".placeholder":{color:"#B4B4B4",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:"$label1",fontWeight:"$semibold",maxWidth:"100%",height:"fit-content",lineHeight:"1em",border:"none",textAlign:"left",padding:0,margin:0},".multiple-dropdown-chip-icon":{svg:{color:"$primaryText"}}});S("div",{border:"1px solid #E6E6E6",borderRadius:"$full",padding:"$1 $3",fontSize:"$label1",cursor:"default",fontWeight:"$semibold",display:"flex",justifyContent:"center",alignItems:"center",gap:"$2",color:"$primaryText",div:{width:"fit-content",height:"fit-content"}});const et=S("div",{width:"100%",label:{fontSize:"$label1",fontWeight:"$semibold",marginBottom:"$2",display:"inline-block",width:"100%",span:{marginLeft:"$1",color:"$danger"}},variants:{displayedValue:{chip:{},string:{[`${$e}`]:{flexWrap:"nowrap",justifyContent:"flex-start",maxWidth:"calc(100% - 1rem - 1rem)",".itemListString":{maxWidth:"100%",height:"100%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"$primaryText"}}}},variant:{combobox:{},select:{[`${xe}`]:{cursor:"pointer"}}}}}),tt=S("svg",{color:"$primaryText"}),nt=S("div",{margin:0,padding:"$2 0",borderRadius:"$md",width:"fit-content",height:"fit-content",minWidth:"100%",background:"$background",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",ul:{overscrollBehavior:"contain",overflowY:"auto",listStyle:"none",marginBlockStart:0,marginBlockEnd:0,marginInlineStart:0,marginInlineEnd:0,paddingInlineStart:0,"&:focus":{outline:"none"}}}),at=S("ul",{}),De=S("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$6",height:"$6",variants:{isSelected:{true:{div:{border:0,background:"$cdgBlue100 !important",svg:{display:"block"}}},false:{svg:{display:"none"}}},checkmark:{checkbox:{div:{border:"1px solid $black",borderRadius:"3px",width:"$4",height:"$4",display:"flex",alignItems:"center",justifyContent:"center",background:"$background"},svg:{color:"$whiteText"}},none:{},tick:{svg:{color:"$cdgBlue"}}}}}),rt=S("li",{fontSize:"$label1",fontWeight:"$medium",padding:"$2 $4",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"$2",color:"$primaryText","&:hover":{backgroundColor:"$gray20"},variants:{isFocused:{true:{backgroundColor:"$cdgBlue20"}},isSelected:{true:{backgroundColor:"$gray20"}},isDisabled:{true:{opacity:.4,cursor:"not-allowed"},button:{span:{color:"$disabledText"}}}}}),ot=S("div",{display:"flex",alignItems:"center",flexGrow:1,lineHeight:"$normal"}),lt=S("div",{display:"flex",justifyContent:"center",margin:"$4 auto",".spinner":{display:"inline-block",position:"relative",width:"$4",height:"$4",div:{boxSizing:"border-box",display:"block",position:"absolute",width:"$4",height:"$4",border:"2px solid $divider",borderRadius:"50%",animation:`${Xe} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,borderColor:"$divider transparent transparent transparent"},".spinner-1":{animationDelay:"-0.45s"},".spinner-2":{animationDelay:"-0.3s"},".spinner-3":{animationDelay:"-0.15s"}}}),it=S("div",{fontSize:"$label1",fontWeight:"$medium",color:"$disabledText",padding:"$2 $4",lineHeight:"$normal"}),Ie=S("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"},false:{color:"$gray70"}}}}),dt=S("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px"}),st=S("div",{backgroundColor:"$cdgBlue10",padding:"$2 $4",fontSize:"$label2",fontWeight:"$semibold",color:"$gray100",display:"flex",alignItems:"center",justifyContent:"space-between",lineHeight:"$normal",variants:{isClickable:{true:{cursor:"pointer","&:hover":{backgroundColor:"$cdgBlue20"}},false:{".cdg-multiple-dropdown-section":{display:"none"}}}}}),ct=S("div",{}),ye=S("div",{height:"$0_25"}),ut=o.forwardRef((l,r)=>{const{children:a,css:n={},...i}=l,c=B(r);return e(ct,{ref:c,css:n,...i,children:a})}),ue=ut;function O(l){var a,n;if(!l)return"";if(typeof l=="string")return l;if((a=l.props)!=null&&a.textValue)return l.props.textValue;if(l instanceof Array)return l.map(O).join(" ");const r=(n=l.props)==null?void 0:n.children;return r instanceof Array?r.map(O).join(" "):O(r)}const Ae=(l,r,a=[])=>{var n;for(const i of l)if(i.props){if(((n=i.props.value)==null?void 0:n.toString())===r.toString()&&!a.includes(i.props.value))return i;if(i.props.children){const c=Ae(o.Children.toArray(i.props.children),r);if(c)return c}}return null},ht=(l,r,a=[])=>{if(!a.length)return null;const n=a.filter(c=>c.visibility);if(n.length){const c=n.findIndex(m=>m.value.toString()===l.toString());if(c!==-1){const m=n[c-1]??n[n.length-1];if(m)return U(m.value,r)}}return Ee(r,a)},pt=(l,r,a=[])=>{if(!a.length)return null;const n=a.filter(c=>c.visibility);if(n.length){const c=n.findIndex(m=>m.value.toString()===l.toString());if(c!==-1){const m=n[c+1]??n[0];if(m)return U(m.value,r)}}return Me(r,a)},Me=(l,r=[])=>{if(!r.length)return null;let a=null;for(const n of r)if(n.visibility){a=U(n.value,l);break}return a},Ee=(l,r=[])=>{if(!r.length)return null;let a=null;for(let n=r.length-1;n>=0;n--){const i=r[n];if(i!=null&&i.visibility){a=U(i.value,l);break}}return a},U=(l,r)=>{const{rest:a}=we(r,ue);return o.Children.toArray(a).length?Ae(o.Children.toArray(r),l)??null:null},mt=(l,r)=>{const a=c=>{const{top:m}=c.getBoundingClientRect();return m},n=a(l),i=a(r);return Math.hypot(n-i)},gt=o.forwardRef((l,r)=>{const{children:a,value:n="",checkmark:i="checkbox",css:c={},...m}=l,{textValue:k,...$}=m,{disabledKeys:C=[],searchValue:w,focusKey:b,selectedItems:u,setDropdownItemKeys:v,onItemClick:D}=o.useContext(ie),x=B(r),F=o.useMemo(()=>(u==null?void 0:u.findIndex(g=>g.value.toString()===n.toString()))!==-1,[u,n]),W=o.useMemo(()=>(b==null?void 0:b.toString())===n.toString(),[b,n]),P=o.useMemo(()=>C.findIndex(g=>g.toString()===n.toString())!==-1,[C,n]),L=o.useMemo(()=>!w||O(a).toLocaleLowerCase().includes(w.toLocaleLowerCase()),[w,a]);return o.useEffect(()=>{P||v==null||v(g=>{const V=g.findIndex(de=>de.value.toString()===n.toString());return V===-1?g.push({value:n,visibility:!0}):g[V]={value:n,visibility:L},g})},[n,P,L]),o.useEffect(()=>{b&&b.toString()===n.toString()&&x.current&&x.current.scrollIntoView({block:"nearest"})},[b,n]),L?h(rt,{ref:x,isFocused:W,isSelected:F&&!W,onClick:()=>{P||D({value:n.toString(),displayValue:k||a})},isDisabled:P,css:c,role:"option","aria-selected":F,...$,children:[e(ot,{children:a}),e(De,{isSelected:F,checkmark:i,children:i==="checkbox"?e("div",{children:e(ft,{})}):i==="tick"?e(vt,{}):null})]}):null}),Le=gt,ft=()=>e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),vt=()=>e("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:e("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})});function kt(l){const[r,a]=M.useState(!1),n=M.useMemo(()=>new IntersectionObserver(([i])=>a(!!(i!=null&&i.isIntersecting))),[l.current]);return M.useEffect(()=>(l.current&&n.observe(l.current),()=>{n.disconnect()}),[l,n]),r}function bt(){return e(lt,{children:h("div",{className:"spinner",children:[e("div",{className:"spinner-1"}),e("div",{className:"spinner-2"}),e("div",{className:"spinner-3"}),e("div",{})]})})}const It=l=>{const{children:r,isLoading:a,css:n={},noDataMessage:i,onLoadMore:c}=l,m=B(null),k=B(null),$=kt(m),{searchValue:C,labelId:w}=o.useContext(ie),{child:b,rest:u}=we(r,ue),v=M.useMemo(()=>{let D=0;return o.Children.map(u,x=>{O(x).toLocaleLowerCase().includes(C.toLocaleLowerCase())&&D++}),D},[u,C]);return o.useEffect(()=>{if(m.current&&k.current){const D=mt(m.current,k.current);$&&D>=0&&D<4&&(c==null||c())}},[$]),M.useMemo(()=>h(Se,{children:[b&&b,h(at,{css:n,"aria-labelledby":w,children:[a?e(bt,{}):v===0?e(it,{children:i||"No data"}):u,o.Children.toArray(u).length>0&&e(ye,{ref:m}),e(ye,{ref:k})]})]}),[n,a,u])},yt=It,Ct=o.forwardRef((l,r)=>{const{id:a=`cdg-element-${Math.random().toString(36).substring(2)}`,children:n,title:i,isClickable:c,css:m={},checkmark:k="checkbox",isChecked:$,index:C=-1,onClick:w,onSectionClick:b,...u}=l,{onSectionClick:v,selectedSectionIndexes:D}=M.useContext(ie),[x,F]=o.useState($??D.includes(C)),W=B(r);return h(dt,{css:m,ref:W,...u,children:[i&&h(st,{isClickable:!!c,onClick:()=>{if(!c)return;w==null||w(i);const L=o.Children.toArray(n).map(X=>{var V;const g=X;return{value:((V=g.props.value)==null?void 0:V.toString())??"",displayValue:g.props.textValue??g.props.children}});v(L,!x,a,C),b==null||b(L,!x,a,C),F(!x)},children:[i,e(De,{isSelected:x,checkmark:k,className:"cdg-multiple-dropdown-section",children:k==="checkbox"?e("div",{children:e(St,{})}):k==="tick"?e(wt,{}):null})]}),n]})}),Re=Ct,St=()=>e("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:e("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),wt=()=>e("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:e("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})}),xt=()=>e(tt,{width:"16",height:"16",viewBox:"0 0 16 16",children:e("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"currentColor"})}),$t=o.forwardRef((l,r)=>{var ke;const{id:a=`cdg-element-${Math.random().toString(36).substring(2)}`,css:n={},isOpen:i,children:c,isErrored:m,isDisabled:k,isRequired:$,isReadOnly:C,helperText:w,defaultOpen:b,errorMessage:u,selectedKeys:v,numberOfRows:D,displayedValue:x="chip",icon:F=e(xt,{}),disabledKeys:W=[],isLoading:P=!1,variant:L="combobox",customDisplayValue:X,defaultSelectedKeys:g,label:V,placeholder:de,erroredKeys:ee,noDataMessage:Ve="",onLoadMore:Ke=()=>{},onBlur:Be=()=>{},onFocus:Fe=()=>{},onSelectionChange:j=()=>{},onOpenChange:K=()=>{},...We}=l,[R,T]=o.useState(i??b??!1),[Pe,he]=o.useState(!1),[se,Te]=o.useState(""),[te,N]=o.useState(),[pe,me]=o.useState([]),[A,Z]=o.useState([]),[z,Ne]=o.useState([]),[E,He]=o.useState(null),ge=o.useRef(!1),Oe=B(r),G=B(null),ne=B(null),ce=o.useMemo(()=>g&&(g==null?void 0:g.length)>0||!g&&!v,[g,v]),fe=d=>{if(typeof d=="string")return d;let p=-1;return o.Children.map(d,s=>{if(!s)return s;if(o.isValidElement(s)){if(s.type===Le){const f=s;if(!("value"in f.props))return o.cloneElement(f,{value:`${s.key}`||""})}const I=s;if(I.props.children){const f={children:fe(I.props.children)};return I.type===Re&&(p++,f.index=p),o.cloneElement(I,{...f})}}return s})};M.useEffect(()=>{He(fe(c))},[c]),o.useEffect(()=>{if(!ge.current){ge.current=!0;return}T(!!i),i||N("")},[i]),o.useEffect(()=>{i||N("")},[R]),o.useEffect(()=>{if(!E||!(v&&(v==null?void 0:v.length)>0||g&&g.length>0)){Z([]);return}const d=g??v??[];let p="";const s=[];for(const I of d){const f=U(I,E);f&&(s.push({value:I.toString(),displayValue:f}),p=I.toString())}Z(s),N(p)},[E,v,g]);const _=o.useCallback(d=>{var p;if(!C){const s=[...A],I=s.findIndex(f=>f.value.toString()===d.value.toString());I===-1?s.push(d):s.splice(I,1),ce&&Z([...s]),j==null||j(s.map(f=>f.value)),(p=ne.current)==null||p.focus()}},[C,A,ce]),ae=o.useCallback(d=>{var s,I,f,q,J,H,Y,re;const p=(te||(A.length?(s=A[0])==null?void 0:s.value:""))??"";switch(d.key){case"ArrowUp":case"ArrowLeft":if(d.preventDefault(),p){const y=ht(p,E,z),Q=(y==null?void 0:y.props.value)??((I=y==null?void 0:y.key)==null?void 0:I.toString().replace(".$",""))??"";Q&&N(Q)}else N(((q=(f=Ee(E,z))==null?void 0:f.props.value)==null?void 0:q.toString())??"");break;case"ArrowDown":case"ArrowRight":if(d.preventDefault(),p){const y=pt(p,E,z),Q=(y==null?void 0:y.props.value)??((J=y==null?void 0:y.key)==null?void 0:J.toString().replace(".$",""))??"";Q&&N(Q)}else N(((Y=(H=Me(E,z))==null?void 0:H.props.value)==null?void 0:Y.toString())??"");break;case"Enter":if(d.preventDefault(),T(!0),p){const y=U(p,E);y&&_({value:((re=y.props.value)==null?void 0:re.toString())||"",displayValue:y.props.textValue||y.props.children})}break;case"Escape":case"Tab":d.preventDefault(),T(!1),K(!1);break}},[te,E,A,z,_,K]);o.useEffect(()=>(R?document.addEventListener("keydown",ae):document.removeEventListener("keydown",ae),()=>{document.removeEventListener("keydown",ae)}),[R,ae]);const ve=()=>{var d;k||(T(!0),K(!0),(d=ne.current)==null||d.focus())},je=d=>{if(G.current){const p=d.target.value;if(Te(p),T(!0),K(!0),p!==""){const s=document.createElement("div");s.style.position="absolute",s.style.top="0",s.style.left="-9999px",s.style.overflow="hidden",s.style.visibility="hidden",s.style.whiteSpace="nowrap",s.style.height="0",s.style.width="fit-content",s.style.maxWidth=`${G.current.clientWidth-62}px`,s.innerHTML=p.replace(/\s/g,"&nbsp;"),document.body.appendChild(s),d.target.focus(),d.target.style.width=`${s.clientWidth+4}px`,s.remove()}else d.target.style.width="4px"}},ze=()=>{const d=A.map(p=>O(p.displayValue));return d.length>0?e(Se,{children:d.join(", ")}):""},Ge=M.useCallback(d=>p=>{p.stopPropagation(),p.preventDefault(),_(d)},[_]),qe=M.useCallback(d=>!!(ee!=null&&ee.some(p=>p.toString()===d)),[ee]),Ue=(d,p,s,I)=>{var J;if(I===-1)return;const f=[...A];d.forEach(H=>{if(!C){const Y=f.findIndex(re=>re.value.toString()===H.value.toString());Y===-1?p&&f.push(H):p||f.splice(Y,1)}});const q=new Set(pe);p?q.add(I):q.delete(I),me([...q]),ce&&Z([...f]),j==null||j(f.map(H=>H.value)),(J=ne.current)==null||J.focus()},Ze=M.useCallback(()=>{T(!1)},[]),_e=M.useCallback(d=>{if(!R)switch(d.key){case"ArrowUp":case"ArrowDown":d.preventDefault(),T(!0),K==null||K(!0);break}},[K]);return h(et,{css:n,ref:Oe,...We,displayedValue:x,variant:L,children:[h(ie.Provider,{value:{open:R,focusKey:te??"",selectedKeys:v??[],defaultSelectedKeys:g??[],disabledKeys:W,searchValue:se,selectedItems:A,labelId:`${a}-label`,setSelectedItems:Z,dropdownItemKeys:z,setDropdownItemKeys:Ne,selectedSectionIndexes:pe,setSelectedSectionIndexes:me,onItemClick:_,onSectionClick:Ue},children:[V&&h("label",{onClick:ve,htmlFor:a,id:`${a}-label`,children:[V,$&&e("span",{children:"*"})]}),e(Qe,{isOpen:R,anchor:h(xe,{className:"dropdownContainer",isOpen:R,ref:G,isErrored:!!m,isDisabled:!!k,onClick:ve,onBlur:Be,onFocus:Fe,role:"button",children:[h($e,{className:"selectedItemWrapper",children:[A.length===0&&se===""&&!R&&!Pe&&e("p",{className:"placeholder",children:de}),x==="chip"&&A.length>0&&A.map(d=>e(Ye,{hasCloseButton:W.findIndex(p=>p.toString()===d.value.toString())===-1,onCloseClick:Ge(d),isErrored:qe(d.value.toString()),children:d.displayValue instanceof Array?d.displayValue:O(d.displayValue)},d.value)),x==="string"&&A.length>0?e("div",{className:"itemListString",children:X??ze()}):null,!k&&L==="combobox"&&e("input",{id:a,type:"text",ref:ne,value:se,onKeyDown:_e,onChange:je,onBlur:()=>he(!1),onFocus:()=>he(!0),"aria-autocomplete":"list",role:"combobox","aria-required":$,"aria-invalid":m,"aria-expanded":R})]}),e("div",{className:"dropdown-icon",children:F})]}),css:{width:"100%"},direction:"bottom",onClose:Ze,children:e(nt,{style:{width:((ke=G==null?void 0:G.current)==null?void 0:ke.clientWidth)??"100%"},children:e(yt,{searchValue:"",isLoading:P,css:{maxHeight:D?`${D*40}px`:"16rem"},onLoadMore:Ke,noDataMessage:Ve,children:E})})})]}),m&&u&&e(Ie,{error:!!m,children:u}),w&&e(Ie,{children:w})]})}),t=$t;t.Item=Le;t.Header=ue;t.Section=Re;t.displayName="MultipleDropdown";function Dt(){const l=["Alice","Bob","Charlie","David","Emily","Frank","Gina","Haley","Isaac","John"],r=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor"],a=l[Math.floor(Math.random()*l.length)]??"",n=r[Math.floor(Math.random()*r.length)]??"";return{name:`${a} ${n}`,firstName:a,lastName:n}}function Ce(l,r=1){const a=[];for(let n=0;n<l;n++){const i=n+r,c=Dt(),m=c.name,k=c.firstName,$=c.lastName,C=Math.floor(Math.random()*60+5),w=Math.floor(Math.random()*10)%2===1?"Male":"Female";a.push({id:i,name:m,age:C,gender:w,firstName:k,lastName:$})}return a}const Wt=()=>{const[l,r]=o.useState(["cat"]),[a,n]=o.useState(["snake","cat","dog"]),[i,c]=o.useState(!1),[m,k]=o.useState([]),[$,C]=o.useState([]),[w,b]=o.useState(Ce(10));return o.useEffect(()=>{i&&m.includes("Group 1")&&r(["red panda","cat","dog","aardvark","kangaroo","snake"]),i||r([])},[i]),e(be,{children:h(be,{children:[e("h3",{children:"Controlled"}),h(t,{label:"Favorite Animal",disabledKeys:["cat"],placeholder:"Choose an animal",selectedKeys:l,erroredKeys:["red panda"],isRequired:!0,onSelectionChange:u=>r(u),onBlur:()=>console.log("blur"),onFocus:()=>console.log("focus"),css:{width:"50%"},children:[h(t.Item,{value:"red panda",textValue:"Panda",children:[e(le,{icon:oe,style:{marginRight:5}}),"Red Panda"]},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"UnControlled"}),h(t,{label:"Favorite Animal",disabledKeys:["snake"],defaultSelectedKeys:["snake"],placeholder:"Choose an animal",children:[e(t.Item,{value:"red panda ",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Errored"}),h(t,{label:"Favorite Animal",disabledKeys:["snake"],placeholder:"Choose an animal",isErrored:!0,errorMessage:"Error Message",helperText:"Helper Message",children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"displayedValue: String"}),h(t,{label:"Favorite Animal",displayedValue:"string",defaultSelectedKeys:["snake","cat","dog"],placeholder:"Choosesss an animal",css:{width:"200px"},children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Custom display value (only effective when using with displayedValue string)"}),h(t,{label:"Favorite Animal",displayedValue:"string",customDisplayValue:`${a.length} animals selected`,placeholder:"Choosesss an animal",css:{width:"290px"},selectedKeys:a,onSelectionChange:u=>n(u),children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Checkmark types"}),h(t,{label:"Favorite Animal",displayedValue:"string",defaultSelectedKeys:["snake","cat","dog"],placeholder:"Choosesss an animal",css:{width:"200px"},children:[e(t.Item,{value:"red panda",checkmark:"tick",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",checkmark:"tick",children:"Cat"},"cat"),e(t.Item,{value:"dog",checkmark:"tick",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",checkmark:"tick",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",checkmark:"tick",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",checkmark:"tick",children:"Snake"},"snake")]}),e("h3",{children:"Loading"}),h(t,{label:"Favorite Animal",placeholder:"Choose an animal",isLoading:!0,children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"With Header"}),h(t,{disabledKeys:["snake"],label:"Favorite Animal",placeholder:"Choose an animal",children:[e(t.Header,{children:h("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"8px 16px",borderBottom:"2px solid #EDEBE9"},children:[e("span",{style:{color:"#323130",fontSize:"12px",fontWeight:"bold",padding:0,margin:0},children:"Filter"}),e("button",{style:{fontSize:"12px",fontWeight:"bold",color:"#A4262C",border:0,cursor:"pointer",backgroundColor:"transparent"},children:"Clear"})]})}),e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"With Icon"}),h(t,{label:"Favorite Animal",placeholder:"Choose an animal",icon:e(le,{icon:oe}),children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Number of rows"}),h(t,{label:"Favorite Animal",placeholder:"Choose an animal",numberOfRows:4,children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"With Section"}),h(t,{label:"Favorite Animal",placeholder:"Choose an animal",children:[e(t.Item,{value:"fly",children:"Fly"},"fly"),h(t.Section,{title:"Group 1",children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog")]}),h(t.Section,{title:"Group 2",children:[e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]})]}),e("h3",{children:"Handle Section Click"}),e(t,{label:"Favorite Animal",placeholder:"Choose an animal",selectedKeys:l,isRequired:!0,onSelectionChange:u=>r(u),css:{width:"80%"},children:h(t.Section,{title:"Group 1",isClickable:!0,checkmark:"tick",isChecked:i,onClick:u=>{c(!i);const v=[...m];v.push(u),k(v)},children:[e(t.Item,{value:"red panda",checkmark:"tick",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",checkmark:"tick",children:"Cat"},"cat"),e(t.Item,{value:"dog",checkmark:"tick",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",checkmark:"tick",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",checkmark:"tick",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",checkmark:"tick",children:"Snake"},"snake")]})}),e("h3",{children:"Disabled"}),h(t,{label:"Favorite Animal",disabledKeys:["cat"],placeholder:"Choose an animal",selectedKeys:l,isRequired:!0,onSelectionChange:u=>r(u),isDisabled:!0,children:[h(t.Item,{value:"red panda",children:[e(le,{icon:oe,style:{marginRight:5}}),"Red Panda"]},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Variant: select"}),h(t,{label:"Favorite Animal",placeholder:"Choose an animal",defaultSelectedKeys:["cat"],variant:"select",displayedValue:"string",children:[h(t.Item,{value:"red panda",children:[e(le,{icon:oe,style:{marginRight:5}}),"Red Panda"]},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Errored keys"}),h(t,{label:"Favorite Animal",defaultSelectedKeys:["red panda","cat"],erroredKeys:["red panda"],isErrored:!0,errorMessage:"Red panda is not available",children:[e(t.Item,{value:"red panda",children:"Red Panda"},"red panda"),e(t.Item,{value:"cat",children:"Cat"},"cat"),e(t.Item,{value:"dog",children:"Dog"},"dog"),e(t.Item,{value:"aardvark",children:"Aardvark"},"aardvark"),e(t.Item,{value:"kangaroo",children:"Kangaroo"},"kangaroo"),e(t.Item,{value:"snake",children:"Snake"},"snake")]}),e("h3",{children:"Load more"}),e(t,{label:"Using load more",placeholder:"Select name",selectedKeys:$,onSelectionChange:u=>C(u),onLoadMore:()=>{b(u=>[...u,...Ce(10,u.length+1)])},noDataMessage:"There not one at all...",children:w.map(u=>e(t.Item,{value:u.id,children:u.name},u.id))}),e("div",{style:{height:"20rem"}})]})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Wt as Default};
