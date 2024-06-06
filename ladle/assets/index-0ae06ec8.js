import{j as t}from"./jsx-runtime-ea7736fc.js";import{r as D,R as l}from"./index-6c164b11.js";import{C as pt}from"./index-33fba25f.js";import{P as at}from"./index-f318de67.js";import{C as ce}from"./objectToCSS-aff350d4.js";import{u as W}from"./use-dom-ref-7c72e1a5.js";import{p as $e}from"./pick-child-c116e6b4.js";const de=D.createContext({isLoadingMore:!1,isPositioned:!1,open:!1,searchValue:"",labelId:"",selectedItems:[],disabledKeys:[],selectedKeys:[],defaultSelectedKeys:[],selectedSectionIndexes:[],setSelectedSectionIndexes:()=>{},setSelectedItems:()=>{},onItemClick:()=>{},onSectionClick:()=>{},onHeaderClick:()=>{}}),ut="_multipleDropdownItemContent_1s56q_14",mt="_multipleDropdownOption_1s56q_21",wt="_multipleDropdownItemIsFocused_1s56q_37",ht="_multipleDropdownItemIsSelected_1s56q_41",It="_multipleDropdownItemIsSelectedFocused_1s56q_45",ft="_multipleDropdownItemIsDisabled_1s56q_49",gt="_multipleDropdownItemRightIcon_1s56q_62",Dt="_multipleDropdownItemRightIconCheckMarkCheckbox_1s56q_71",Ct="_multipleDropdownItemRightIconContent_1s56q_72",St="_multipleDropdownItemRightIconCheckMarkTick_1s56q_87",_t="_multipleDropdownItemRightIconSelected_1s56q_97",xt="_multipleDropdownLoading_1s56q_113",kt="_multipleDropdownLoadingSpinner_1s56q_119",yt="_multipleDropdownLoadingSpinnerItem_1s56q_126",bt="_spin_1s56q_1",vt="_multipleDropdownLoadingSpinnerItem1_1s56q_140",Lt="_multipleDropdownLoadingSpinnerItem2_1s56q_146",jt="_multipleDropdownLoadingSpinnerItem3_1s56q_152",Rt="_multipleDropdownListItem_1s56q_155",$t="_multipleDropdownListEmptyData_1s56q_158",Mt="_multipleDropdownSection_1s56q_165",qt="_multipleDropdownSectionContent_1s56q_174",Nt="_IsClickable_1s56q_186",Et="_multipleDropdownRightIcon_1s56q_186",Vt="_multipleDropdownRightIconSelected_1s56q_207",Tt="_multipleDropdownSectionCheckbox_1s56q_208",Pt="_multipleDropdownRightIconCheckbox_1s56q_219",Kt="_multipleDropdownRightIconTick_1s56q_235",Bt="_multipleDropdownControl_1s56q_239",Wt="_multipleDropdownControlIsDisabled_1s56q_279",Ht="_multipleDropdownControlIsErrored_1s56q_291",At="_multipleDropdownControlIsOpen_1s56q_298",Ft="_multipleDropdownControlIcon_1s56q_299",Ot="_multipleDropdownSelectedItemWrapper_1s56q_324",Zt="_placeholderSelectedItemWrapper_1s56q_332",Ut="_multipleDropdownWrapper_1s56q_352",zt="_displayedValueString_1s56q_368",Gt="_itemListString_1s56q_377",Jt="_variantSelect_1s56q_386",Qt="_dropdownHelperText_1s56q_390",Xt="_dropdownHelperIsErrored_1s56q_398",Yt="_dropdownButtonIcon_1s56q_401",eo="_dropdownPopover_1s56q_405",to="_multipleDropdownList_1s56q_155",n={multipleDropdownItemContent:ut,multipleDropdownOption:mt,multipleDropdownItemIsFocused:wt,multipleDropdownItemIsSelected:ht,multipleDropdownItemIsSelectedFocused:It,multipleDropdownItemIsDisabled:ft,multipleDropdownItemRightIcon:gt,multipleDropdownItemRightIconCheckMarkCheckbox:Dt,multipleDropdownItemRightIconContent:Ct,multipleDropdownItemRightIconCheckMarkTick:St,multipleDropdownItemRightIconSelected:_t,multipleDropdownLoading:xt,multipleDropdownLoadingSpinner:kt,multipleDropdownLoadingSpinnerItem:yt,spin:bt,multipleDropdownLoadingSpinnerItem1:vt,multipleDropdownLoadingSpinnerItem2:Lt,multipleDropdownLoadingSpinnerItem3:jt,multipleDropdownListItem:Rt,multipleDropdownListEmptyData:$t,multipleDropdownSection:Mt,multipleDropdownSectionContent:qt,IsClickable:Nt,multipleDropdownRightIcon:Et,multipleDropdownRightIconSelected:Vt,multipleDropdownSectionCheckbox:Tt,multipleDropdownRightIconCheckbox:Pt,multipleDropdownRightIconTick:Kt,multipleDropdownControl:Bt,multipleDropdownControlIsDisabled:Wt,multipleDropdownControlIsErrored:Ht,multipleDropdownControlIsOpen:At,multipleDropdownControlIcon:Ft,multipleDropdownSelectedItemWrapper:Ot,placeholderSelectedItemWrapper:Zt,"multiple-dropdown-chip-icon":"_multiple-dropdown-chip-icon_1s56q_348",multipleDropdownWrapper:Ut,displayedValueString:zt,itemListString:Gt,variantSelect:Jt,dropdownHelperText:Qt,dropdownHelperIsErrored:Xt,dropdownButtonIcon:Yt,dropdownPopover:eo,multipleDropdownList:to},we=l.forwardRef((s,c)=>{const{children:i,css:o={},onClick:r}=s,a=W(c),{onHeaderClick:m}=D.useContext(de),w=v=>{m(),r==null||r(v)};return t.jsx(ce,{css:o,childrenRef:a,children:t.jsx("div",{ref:a,onClick:w,children:i})})});we.__docgenInfo={description:"",methods:[],displayName:"MultipleDropdownHeader"};function G(s){var i,o;if(!s)return"";if(typeof s=="string")return s;if((i=s.props)!=null&&i.textValue)return s.props.textValue;if(s instanceof Array)return s.map(G).join(" ");const c=(o=s.props)==null?void 0:o.children;return c instanceof Array?c.map(G).join(" "):G(c)}const Me=(s,c,i=[])=>{var o;for(const r of s)if(r.props){if(((o=r.props.value)==null?void 0:o.toString())===c.toString()&&!i.includes(r.props.value))return r;if(r.props.children){const a=Me(l.Children.toArray(r.props.children),c);if(a)return a}}return null},oo=(s,c,i=[])=>{if(!i.length)return null;const o=i.filter(a=>a.visibility);if(o.length){const a=o.findIndex(m=>m.value.toString()===s.toString());if(a!==-1){const m=o[a-1]??o[o.length-1];if(m)return X(m.value,c)}}return Ne(c,i)},no=(s,c,i=[])=>{if(!i.length)return null;const o=i.filter(a=>a.visibility);if(o.length){const a=o.findIndex(m=>m.value.toString()===s.toString());if(a!==-1){const m=o[a+1]??o[0];if(m)return X(m.value,c)}}return qe(c,i)},qe=(s,c=[])=>{if(!c.length)return null;let i=null;for(const o of c)if(o.visibility){i=X(o.value,s);break}return i},Ne=(s,c=[])=>{if(!c.length)return null;let i=null;for(let o=c.length-1;o>=0;o--){const r=c[o];if(r!=null&&r.visibility){i=X(r.value,s);break}}return i},X=(s,c)=>{const{rest:i}=$e(c,we);return l.Children.toArray(i).length?Me(l.Children.toArray(c),s)??null:null},lo=(s,c)=>{const i=a=>{const{top:m}=a.getBoundingClientRect();return m},o=i(s),r=i(c);return Math.hypot(o-r)},fe=l.forwardRef((s,c)=>{const{children:i,value:o="",checkmark:r="checkbox",css:a={},...m}=s,{textValue:w,...v}=m,{isPositioned:S,disabledKeys:R=[],searchValue:$,focusKey:y,selectedItems:b,setDropdownItemKeys:L,onItemClick:_}=l.useContext(de),x=W(c),h=l.useMemo(()=>(b==null?void 0:b.findIndex(u=>u.value.toString()===o.toString()))!==-1,[b,o]),T=l.useMemo(()=>(y==null?void 0:y.toString())===o.toString(),[y,o]),q=l.useMemo(()=>R.findIndex(u=>u.toString()===o.toString())!==-1,[R,o]),P=l.useMemo(()=>!$||G(i).toLocaleLowerCase().includes($.toLocaleLowerCase()),[$,i]);l.useEffect(()=>{q||L==null||L(u=>{const C=u.findIndex(J=>J.value.toString()===o.toString());return C===-1?u.push({value:o,visibility:!0}):u[C]={value:o,visibility:P},u})},[o,q,P,L]),l.useEffect(()=>{S&&y&&y.toString()===o.toString()&&x.current&&setTimeout(()=>{x.current.scrollIntoView({block:"nearest"})})},[y,o,S,x]),l.useEffect(()=>{h&&S&&x.current&&setTimeout(()=>{x.current.scrollIntoView({block:"nearest"})})},[S,h,x]);const Y=()=>{q||_({value:o.toString(),displayValue:w||i})},k=D.useMemo(()=>{let u=`${n.multipleDropdownOption}`;return T&&!h&&(u+=` ${n.multipleDropdownItemIsFocused}`),h&&!T&&(u+=` ${n.multipleDropdownItemIsSelected}`),h&&T&&(u+=` ${n.multipleDropdownItemIsSelectedFocused}`),q&&(u+=` ${n.multipleDropdownItemIsDisabled}`),u},[q,T,h]),K=D.useMemo(()=>{let u=`${n.multipleDropdownItemRightIcon}`;return h&&(u+=` ${n.multipleDropdownItemRightIconSelected}`),r==="checkbox"?u+=` ${n.multipleDropdownItemRightIconCheckMarkCheckbox}`:r==="tick"&&(u+=` ${n.multipleDropdownItemRightIconCheckMarkTick}`),u},[r,h]);return P?t.jsx(ce,{css:a,childrenRef:x,children:t.jsxs("li",{className:`${k} cdg-dropdown-item`,onClick:Y,ref:x,role:"option","aria-selected":h,...v,children:[t.jsx("div",{className:`${n.multipleDropdownItemContent}`,children:i}),t.jsx("div",{className:K,children:r==="checkbox"?t.jsx("div",{className:`${n.multipleDropdownItemRightIconContent}`,children:t.jsx(io,{})}):r==="tick"?t.jsx(ro,{}):null})]})}):null}),io=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:t.jsx("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),ro=()=>t.jsx("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:t.jsx("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})});fe.__docgenInfo={description:"",methods:[],displayName:"MultipleDropdownItem"};function so(s){const[c,i]=D.useState(!1),o=D.useMemo(()=>new IntersectionObserver(([r])=>i(!!(r!=null&&r.isIntersecting))),[]);return D.useEffect(()=>(s.current&&o.observe(s.current),()=>{o.disconnect()}),[s,o]),c}function Ee(){return t.jsx("div",{className:`${n.multipleDropdownLoading}`,children:t.jsxs("div",{className:n.multipleDropdownLoadingSpinner,children:[t.jsx("div",{className:`${n.multipleDropdownLoadingSpinnerItem} ${n.multipleDropdownLoadingSpinnerItem1}`}),t.jsx("div",{className:`${n.multipleDropdownLoadingSpinnerItem} ${n.multipleDropdownLoadingSpinnerItem2}`}),t.jsx("div",{className:`${n.multipleDropdownLoadingSpinnerItem} ${n.multipleDropdownLoadingSpinnerItem3}`}),t.jsx("div",{})]})})}Ee.__docgenInfo={description:"",methods:[],displayName:"DropdownLoading"};const Ve=s=>{const{children:c,isLoading:i,css:o={},noDataMessage:r,onLoadMore:a}=s,m=W(null),w=W(null),v=so(m),{searchValue:S,labelId:R,isLoadingMore:$}=l.useContext(de),{child:y,rest:b}=$e(c,we),L=D.useMemo(()=>{let _=0;return l.Children.map(b,x=>{G(x).toLocaleLowerCase().includes(S.toLocaleLowerCase())&&_++}),_},[b,S]);return l.useEffect(()=>{if(m.current&&w.current){const _=lo(m.current,w.current);v&&_>=0&&_<4&&!$&&(a==null||a())}},[v]),t.jsxs(ce,{css:o,children:[y&&y,t.jsxs("ul",{role:"listbox","aria-labelledby":R,className:`${n.multipleDropdownList} cdg-multiple-dropdown-list`,children:[i?t.jsx(Ee,{}):L===0?t.jsx("div",{className:`${n.multipleDropdownListEmptyData}`,children:r||"No data"}):b,l.Children.toArray(b).length>0&&t.jsx("div",{className:`${n.multipleDropdownListItem}`,ref:m}),t.jsx("div",{className:`${n.multipleDropdownListItem}`,ref:w})]})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"MultipleDropdownList",props:{searchValue:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},noDataMessage:{required:!1,tsType:{name:"string"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ge=l.forwardRef((s,c)=>{const{id:i=`cdg-element-${Math.random().toString(36).substring(2)}`,children:o,title:r,isClickable:a,css:m={},checkmark:w="checkbox",isChecked:v,index:S=-1,onClick:R,onSectionClick:$,...y}=s,{onSectionClick:b,selectedSectionIndexes:L,setSelectedSectionIndexes:_,selectedItems:x}=D.useContext(de),[h,T]=l.useState(v??L.includes(S)),q=W(c);l.useEffect(()=>{const K=l.Children.toArray(o).some(u=>{const C=u;return x.findIndex(J=>{var ae;return J.value.toString()===((ae=C.props.value)==null?void 0:ae.toString())})===-1});T(!K),_(u=>{const C=new Set(u);return K?C.delete(S):C.add(S),[...C]})},[x,o,_]);const P=()=>{if(!a)return;R==null||R(r);const k=l.Children.toArray(o).map(K=>{var C;const u=K;return{value:((C=u.props.value)==null?void 0:C.toString())??"",displayValue:u.props.textValue??u.props.children}});b(k,!h,i,S),$==null||$(k,!h,i,S),T(!h)},Y=D.useMemo(()=>{let k=`cdg-multiple-dropdown-section ${n.multipleDropdownRightIcon}`;return h&&(k+=` ${n.multipleDropdownRightIconSelected}`),w==="checkbox"?k+=` ${n.multipleDropdownRightIconCheckbox}`:w==="tick"&&(k+=` ${n.multipleDropdownRightIconTick}`),k},[w,h]);return t.jsx(ce,{css:m,childrenRef:q,children:t.jsxs("div",{className:`${n.multipleDropdownSection}`,ref:q,...y,children:[r&&t.jsxs("div",{className:`${n.multipleDropdownSectionContent} ${a?n.IsClickable:""}`,onClick:P,children:[r,t.jsx("div",{className:Y,children:w==="checkbox"?t.jsx("div",{className:`${n.multipleDropdownSectionCheckbox}`,children:t.jsx(co,{})}):w==="tick"?t.jsx(po,{}):null})]}),o]})})}),co=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:t.jsx("path",{d:"M9.39158 1.86239C9.64736 2.12284 9.64736 2.54372 9.39158 2.80416L4.15319 8.13808C3.89741 8.39853 3.48407 8.39853 3.22829 8.13808L0.608522 5.47112C0.352823 5.21068 0.352823 4.7898 0.608522 4.52935C0.864262 4.26891 1.27883 4.26891 1.53461 4.52935L3.67232 6.72334L8.46668 1.86239C8.72246 1.60153 9.1358 1.60153 9.39158 1.86239Z",fill:"currentColor"})}),po=()=>t.jsx("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:t.jsx("path",{d:"M15.0265 3.47966C15.4357 3.89637 15.4357 4.56978 15.0265 4.98649L6.64506 13.5208C6.23581 13.9375 5.57446 13.9375 5.16521 13.5208L0.973587 9.25363C0.564469 8.83691 0.564469 8.16351 0.973587 7.74679C1.38277 7.33008 2.04608 7.33008 2.45533 7.74679L5.87567 11.2572L13.5466 3.47966C13.9559 3.06228 14.6172 3.06228 15.0265 3.47966Z",fill:"currentColor"})});ge.__docgenInfo={description:"",methods:[],displayName:"MultipleDropdownSection"};const Te=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",className:`${n.dropdownButtonIcon} cdg-dropdown-button-icon`,children:t.jsx("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"currentColor"})}),pe=l.forwardRef((s,c)=>{const{id:i=`cdg-element-${Math.random().toString(36).substring(2)}`,css:o={},popoverCSS:r={},isOpen:a,children:m,isErrored:w,isDisabled:v,isRequired:S,isReadOnly:R,helperText:$,defaultOpen:y,errorMessage:b,selectedKeys:L,values:_,numberOfRows:x,displayedValue:h="chip",icon:T=t.jsx(Te,{}),disabledKeys:q=[],disabledValues:P=[],isLoading:Y=!1,variant:k="combobox",customDisplayValue:K,defaultSelectedKeys:u,defaultValues:C,label:J,placeholder:ae,erroredKeys:De,erroredValues:ee,noDataMessage:Pe="",isLoadingMore:Ke=!1,className:Ce="",isFloatingPortal:Be=!0,onLoadMore:We=()=>{},onBlur:He=()=>{},onFocus:Ae=()=>{},onSelectionChange:H=()=>{},onValuesChange:A=()=>{},onOpenChange:B=()=>{},onKeyDown:Se=()=>{},...Fe}=s,[j,F]=l.useState(a??y??!1),[Oe,Ze]=l.useState(!1),[Ue,_e]=l.useState(!1),[he,ze]=l.useState(""),[ue,O]=l.useState(),[xe,ke]=l.useState([]),[M,te]=l.useState([]),[Q,Ge]=l.useState([]),[E,Je]=l.useState(null),[Qe,Xe]=D.useState("100%"),ye=W(c),Z=W(null),oe=W(null),be=l.useRef(!1),ve=l.useMemo(()=>P.length?P:q,[P,q]),N=l.useMemo(()=>C!=null&&C.length?C:u,[C,u]),U=l.useMemo(()=>_!=null&&_.length?_:L,[_,L]),Ie=l.useMemo(()=>N&&(N==null?void 0:N.length)>0||!N&&!L,[N,L]),me=l.useMemo(()=>ee!=null&&ee.length?ee:De,[ee,De]),Le=e=>{if(typeof e=="string")return e;let p=-1;return l.Children.map(e,d=>{if(!d)return d;if(l.isValidElement(d)){if(d.type===fe){const f=d;if(!("value"in f.props))return l.cloneElement(f,{value:`${d.key}`||""})}const I=d;if(I.props.children){const f={children:Le(I.props.children)};return I.type===ge&&(p++,f.index=p),l.cloneElement(I,{...f})}}return d})};D.useEffect(()=>{var e;j&&Xe(r.width??((e=Z==null?void 0:Z.current)==null?void 0:e.clientWidth)??"100%")},[j,r.width,Z]),D.useEffect(()=>{Je(Le(m))},[m]),l.useEffect(()=>{if(!be.current){be.current=!0;return}F(!!a),a||O("")},[a]),l.useEffect(()=>{j||O("")},[j]),l.useEffect(()=>{if(!E||!(U&&(U==null?void 0:U.length)>0||N&&N.length>0)){te([]);return}const e=N??U??[];let p="";const d=[];for(const I of e){const f=X(I,E);f&&(d.push({value:I.toString(),displayValue:f}),p=I.toString())}te(d),O(I=>I??p)},[E,U,N]);const ne=l.useCallback(e=>{var p;if(!R){const d=[...M],I=d.findIndex(V=>V.value.toString()===e.value.toString());I===-1?d.push(e):d.splice(I,1),Ie&&te([...d]);const f=d.map(V=>V.value);H==null||H(f),A==null||A(f),(p=oe.current)==null||p.focus()}},[R,M,Ie,H,A]),Ye=l.useCallback(e=>{var d,I,f,V,le,ie,z,re;if(Se(e),!j)return;const p=(ue||(M.length?(d=M[0])==null?void 0:d.value:""))??"";switch(e.key){case"ArrowUp":case"ArrowLeft":if(e.preventDefault(),p){const g=oo(p,E,Q),se=(g==null?void 0:g.props.value)??((I=g==null?void 0:g.key)==null?void 0:I.toString().replace(".$",""))??"";se&&O(se)}else O(((V=(f=Ne(E,Q))==null?void 0:f.props.value)==null?void 0:V.toString())??"");break;case"ArrowDown":case"ArrowRight":if(e.preventDefault(),p){const g=no(p,E,Q),se=(g==null?void 0:g.props.value)??((le=g==null?void 0:g.key)==null?void 0:le.toString().replace(".$",""))??"";se&&O(se)}else O(((z=(ie=qe(E,Q))==null?void 0:ie.props.value)==null?void 0:z.toString())??"");break;case"Enter":if(e.preventDefault(),F(!0),p){const g=X(p,E);g&&ne({value:((re=g.props.value)==null?void 0:re.toString())||"",displayValue:g.props.textValue||g.props.children})}break;case"Escape":case"Tab":e.preventDefault(),F(!1),B(!1);break}},[j,ue,E,M,Q,ne,B,Se]),je=()=>{var e;v||(F(!0),B(!0),(e=oe.current)==null||e.focus())},et=e=>{if(Z.current){const p=e.target.value;if(ze(p),F(!0),B(!0),p!==""){const d=document.createElement("div");d.style.position="absolute",d.style.top="0",d.style.left="-9999px",d.style.overflow="hidden",d.style.visibility="hidden",d.style.whiteSpace="nowrap",d.style.height="0",d.style.width="fit-content",d.style.maxWidth=`${Z.current.clientWidth-62}px`,d.innerHTML=p.replace(/\s/g,"&nbsp;"),document.body.appendChild(d),e.target.focus(),e.target.style.width=`${d.clientWidth+4}px`,d.remove()}else e.target.style.width="4px"}},tt=()=>{const e=M.map(p=>G(p.displayValue));return e.length>0?t.jsx(t.Fragment,{children:e.join(", ")}):""},ot=D.useCallback(e=>p=>{p.stopPropagation(),p.preventDefault(),ne(e)},[ne]),nt=D.useCallback(e=>!!(me!=null&&me.some(p=>p.toString()===e)),[me]),lt=(e,p,d,I)=>{var ie;if(I===-1)return;const f=[...M];e.forEach(z=>{if(!R){const re=f.findIndex(g=>g.value.toString()===z.value.toString());re===-1?p&&f.push(z):p||f.splice(re,1)}});const V=new Set(xe);p?V.add(I):V.delete(I),ke([...V]),Ie&&te([...f]);const le=f.map(z=>z.value);H==null||H(le),A==null||A(le),(ie=oe.current)==null||ie.focus()},it=D.useCallback(()=>{F(!1)},[]),rt=D.useCallback(e=>{if(!j)switch(e.stopPropagation(),e.key){case"ArrowUp":case"ArrowDown":e.preventDefault(),F(!0),B==null||B(!0);break}},[B]),Re=()=>{setTimeout(()=>{var e;(e=oe.current)==null||e.focus()},0)},st=D.useCallback(e=>{Ze(e)},[]),ct=D.useMemo(()=>{let e=`dropdownContainer ${n.multipleDropdownControl}`;return j&&(e+=` ${n.multipleDropdownControlIsOpen}`),w&&(e+=` ${n.multipleDropdownControlIsErrored}`),v&&(e+=` ${n.multipleDropdownControlIsDisabled}`),e},[v,w,j]),dt=D.useMemo(()=>{let e=`cdg-multiple-dropdown-wrapper ${Ce} ${n.multipleDropdownWrapper}`;return h==="string"?e+=` ${n.displayedValueString}`:h==="chip"&&(e+=` ${n.displayedValueChip}`),k==="select"?e+=` ${n.variantSelect}`:k==="combobox"&&(e+=` ${n.variantCombobox}`),e},[Ce,h,k]);return t.jsx(ce,{css:o,childrenRef:ye,children:t.jsxs("div",{className:dt,ref:ye,onKeyDown:Ye,...Fe,children:[t.jsxs(de.Provider,{value:{isLoadingMore:Ke,open:j,focusKey:ue??"",selectedKeys:U??[],defaultSelectedKeys:N??[],disabledKeys:ve,searchValue:he,selectedItems:M,labelId:`${i}-label`,setSelectedItems:te,dropdownItemKeys:Q,setDropdownItemKeys:Ge,selectedSectionIndexes:xe,setSelectedSectionIndexes:ke,onItemClick:ne,onSectionClick:lt,onHeaderClick:Re,isPositioned:Oe},children:[J&&t.jsxs("label",{onClick:je,htmlFor:i,id:`${i}-label`,children:[J,S&&t.jsx("span",{children:"*"})]}),t.jsx(at,{isOpen:j,onPositionedChange:st,isFloatingPortal:Be,anchor:t.jsxs("div",{className:ct,ref:Z,onClick:je,onBlur:He,onFocus:Ae,role:"button",children:[t.jsxs("div",{className:`${n.multipleDropdownSelectedItemWrapper} cdg-selectedItemWrapper`,children:[M.length===0&&he===""&&!j&&!Ue&&t.jsx("p",{className:`${n.placeholderSelectedItemWrapper} cdg-placeholder`,children:ae}),h==="chip"&&M.length>0&&M.map(e=>t.jsx(pt,{hasCloseButton:ve.findIndex(p=>p.toString()===e.value.toString())===-1,onCloseClick:ot(e),isErrored:nt(e.value.toString()),children:e.displayValue instanceof Array?e.displayValue:G(e.displayValue)},e.value)),h==="string"&&M.length>0?t.jsx("div",{className:`${n.itemListString}`,children:K??tt()}):null,!v&&k==="combobox"&&t.jsx("input",{id:i,type:"text",ref:oe,value:he,onKeyDown:rt,onChange:et,onBlur:()=>_e(!1),onFocus:()=>_e(!0),"aria-autocomplete":"list",role:"combobox","aria-required":S,"aria-invalid":w,"aria-expanded":j})]}),t.jsx("div",{className:`${n.multipleDropdownControlIcon} dropdown-icon`,children:T})]}),css:{width:"100%"},direction:"bottom-left",onClose:it,children:t.jsx("div",{className:`${n.dropdownPopover}`,onClick:Re,style:{...r,width:r.width??Qe},children:t.jsx(Ve,{searchValue:"",isLoading:Y,css:{maxHeight:x?`${x*40}px`:"16rem"},onLoadMore:We,noDataMessage:Pe,children:E})})})]}),w&&b&&t.jsx("div",{className:`${n.dropdownHelperText} ${w?n.dropdownHelperIsErrored:""}`,children:b}),$&&t.jsx("div",{className:`${n.dropdownHelperText}`,children:$})]})})});Te.__docgenInfo={description:"",methods:[],displayName:"Icon"};pe.__docgenInfo={description:"",methods:[],displayName:"MultipleDropdown"};pe.Item=fe;pe.Header=we;pe.Section=ge;pe.displayName="MultipleDropdown";export{pe as M};