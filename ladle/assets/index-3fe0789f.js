import{j as r}from"./jsx-runtime-ea7736fc.js";import{i as H,l as O}from"./floating-ui.react.esm-06842318.js";import{R as l}from"./index-6c164b11.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import{u as V,a as z,K as W}from"./useKeyboardNavigation-819d3b4a.js";import{c as w,C as E}from"./string-cf4adbb3.js";import{u as S}from"./use-dom-ref-7c72e1a5.js";const k=e=>r.jsx(r.Fragment,{children:e.children});k.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{key:{required:!0,tsType:{name:"ReactKey",raw:"React.Key"},description:""},title:{required:!0,tsType:{name:"string"},description:""},textValue:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const Z="_wrapper_gq3tf_4",G="_tabs_gq3tf_10",J="_rounded_gq3tf_22",Q="_simple_gq3tf_27",X="_horizontal_gq3tf_32",Y="_vertical_gq3tf_37",ee="_roundedVertical_gq3tf_44",y={wrapper:Z,tabs:G,rounded:J,simple:Q,horizontal:X,vertical:Y,roundedVertical:ee},ne="_tab_vgxcr_6",oe="_icon_vgxcr_27",re="_rounded_vgxcr_49",ce="_simple_vgxcr_64",se="_simpleIcon_vgxcr_77",te="_disabledTrue_vgxcr_90",ie="_activeTrue_vgxcr_96",ae="_iconNoneIcon_vgxcr_101",le="_iconLeft_vgxcr_105",de="_iconLeftIcon_vgxcr_110",ue="_iconRight_vgxcr_115",_e="_iconRightIcon_vgxcr_120",pe="_iconTop_vgxcr_125",fe="_iconTopIcon_vgxcr_130",be="_simpleDisabledTrue_vgxcr_137",he="_simpleDisabledTrueIcon_vgxcr_142",ge="_roundedDisabledTrue_vgxcr_167",ve="_roundedActiveTrue_vgxcr_178",Te="_roundedActiveTrueIcon_vgxcr_183",me="_simpleActiveTrue_vgxcr_196",ye="_simpleActiveTrueIcon_vgxcr_203",xe="_roundedDisabledTrueIcon_vgxcr_216",c={tab:ne,icon:oe,rounded:re,simple:ce,simpleIcon:se,disabledTrue:te,activeTrue:ie,iconNoneIcon:ae,iconLeft:le,iconLeftIcon:de,iconRight:ue,iconRightIcon:_e,iconTop:pe,iconTopIcon:fe,simpleDisabledTrue:be,simpleDisabledTrueIcon:he,roundedDisabledTrue:ge,roundedActiveTrue:ve,roundedActiveTrueIcon:Te,simpleActiveTrue:me,simpleActiveTrueIcon:ye,roundedDisabledTrueIcon:xe},F=l.forwardRef(({item:e,isDisabled:s,textColor:n,currentKey:i,indicatorColor:o,disabledKeys:d,variant:a="rounded",icon:v="none",id:A,onSelect:I,css:j={},...C},N)=>{const{title:q}=e.props,T=S(N),b=l.useMemo(()=>i===e.key,[i,e.key]),D=l.useMemo(()=>e.key?[...d].includes(e.key):!1,[d,e.key]),u=s||D,h=()=>{e.key&&!u&&I(e.key)},K=p=>{const M=p.key;(M==="Enter"||M===" ")&&(p.preventDefault(),h())},{useDescendant:f}=V(),{index:L,register:m}=f({disabled:u}),{onFocus:_}=z(),g=()=>{_==null||_(L)()},R=H([T,m]),$=w(c.tab,c[`icon${v.charAt(0).toUpperCase()+v.slice(1)}`],c[`${a}`],c[`active${b?"True":"False"}`],c[`disabled${u?"True":"False"}`],c[a+`Disabled${u?"True":"False"}`],c[a+`Active${b?"True":"False"}`],"cdg-tab-item-wrapper"),P=w(c.icon,c[`icon${v.charAt(0).toUpperCase()+v.slice(1)}Icon`],a&&c[a+"Icon"],a&&u&&c[a+`Disabled${u?"True":"False"}Icon`],a&&b&&c[a+`Active${b?"True":"False"}Icon`],"cdg-tab-icon"),t={[c.simple]:{"&:focus-visible":{boxShadow:`0px -2px ${o}`,color:`${n}`},"&:hover":{color:`${n}`}},[c.simpleActiveTrue]:{borderBottom:`${o} 2px solid`,color:`${n}`},[c.simpleActiveTrueIcon]:{backgroundColor:`${n}`,"& path":{fill:`${n}`}},[c.rounded]:{color:`${n}`},[c.icon]:{backgroundColor:`${n}`},[c.activeTrue]:{backgroundColor:`${n}`},...j};return r.jsx(E,{css:t,childrenRef:R,children:r.jsxs("div",{className:$,id:A,ref:R,tabIndex:b&&!u?0:-1,onClick:h,onKeyDown:K,onFocus:g,role:"tab","aria-selected":b,...C,children:[q,v!=="none"&&r.jsx("div",{className:P,children:u?r.jsx(Ie,{}):r.jsx(De,{})})]})})}),Ie=()=>r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M8.87822 1.83335H1.12182C0.732011 1.83335 0.416687 1.46044 0.416687 0.99976C0.416687 0.539083 0.732011 0.166687 1.12182 0.166687H8.87822C9.26803 0.166687 9.58335 0.539083 9.58335 0.99976C9.58335 1.46044 9.26825 1.83335 8.87822 1.83335Z",fill:"white"})}),De=()=>r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:r.jsx("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})});F.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{variant:{defaultValue:{value:"'rounded'",computed:!1},required:!1},icon:{defaultValue:{value:"'none'",computed:!1},required:!1},css:{defaultValue:{value:"{}",computed:!1},required:!1}}};const U=l.forwardRef(({selectedItem:e,"aria-labelledby":s},n)=>{const i=S(n);return r.jsx("div",{ref:i,"aria-labelledby":s,className:"cdg-tab-panel-wrapper",role:"tabpanel",children:e==null?void 0:e.props.children})});U.__docgenInfo={description:"",methods:[],displayName:"TabPanel"};const Re=(e,s)=>{const n=[];return l.Children.forEach(e,o=>(l.isValidElement(o)&&o.type===s&&n.push(o),o)),n.length>=0?n:[]};function $e(e,s,n,i){let o;if(s!==void 0&&(i.includes(s)||(o=s)),n!==void 0&&!i.includes(n))return n;for(const d of e)if(d.key&&!i.includes(d.key))return d.key;return o}function we(e,s,n,i){const o=l.useMemo(()=>Re(e,k),[e]),[d,a]=l.useState($e(o,s,n,i));return{collection:o,currentKey:d,setCurrentKey:a}}const ke=l.forwardRef((e,s)=>{const{textColor:n="#0142AF",indicatorColor:i="#0142AF",orientation:o="horizontal",variant:d="rounded",children:a,isDisabled:v=!1,hidePanel:A=!1,disabledKeys:I=[],selectedKey:j,defaultSelectedKey:C,css:N={},className:q="",onKeyDown:T,...b}=e,D=S(s),{collection:u,currentKey:h,setCurrentKey:K}=we(a,C,j,I),f=u.find(t=>t.key===h),L=t=>{K(t)};l.useEffect(()=>{var t;h&&((t=e.onSelectionChange)==null||t.call(e,h))},[h,e]);const{onKeyDown:m,nextFocus:_,prevFocus:g}=z(),R=t=>{m==null||m({ArrowLeft:p=>{p.preventDefault(),o==="horizontal"&&(g==null||g())},ArrowRight:p=>{p.preventDefault(),o==="horizontal"&&(_==null||_())},ArrowUp:p=>{p.preventDefault(),o==="vertical"&&(g==null||g())},ArrowDown:p=>{p.preventDefault(),o==="vertical"&&(_==null||_())}})(t),T==null||T(t)},$=O(),P=`${$}_${f==null?void 0:f.key}`;return r.jsx("div",{className:w(y.wrapper,q,"cdg-tab-wrapper"),children:r.jsxs(E,{css:N,childrenRef:D,children:[r.jsx("div",{ref:D,...b,className:w(y.tabs,y[`${o}`],y[`${d}`],y[d+`${o.charAt(0).toUpperCase()+o.slice(1)}`],"cdg-tabs"),onKeyDown:R,role:"tablist","aria-orientation":o,children:[...u].map(t=>r.jsx(F,{icon:e.icon,variant:e.variant,disabledKeys:I,currentKey:h,textColor:n,indicatorColor:i,item:t,isDisabled:v,onSelect:L,id:`${$}_${t.key}`},t.key))}),!A&&r.jsx(U,{"aria-labelledby":P,selectedItem:f},f==null?void 0:f.key)]})})}),x=l.forwardRef((e,s)=>{const{provider:n}=V();return r.jsx(W,{...n,children:r.jsx(ke,{...e,ref:s})})});x.__docgenInfo={description:"",methods:[],displayName:"TabsContextWrapper"};const B=l.forwardRef((e,s)=>r.jsx(x,{ref:s,...e,hidePanel:!0,children:[...e.items].map(n=>r.jsx(k,{title:n.title,children:n.key},n.key))}));B.__docgenInfo={description:"",methods:[],displayName:"TabsPaneless"};x.Item=k;x.Paneless=B;x.displayName="Tabs";export{x as T};
