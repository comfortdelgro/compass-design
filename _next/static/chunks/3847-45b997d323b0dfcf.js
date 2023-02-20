"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3847],{47479:function(e,t,l){var r=l(36690),n=l(93089),a=l(97458),o=l(87495),i=(0,n.Z)((0,r.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,a.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,a.jsx)("div",{className:"w-7 aspect-square bg-no-repeat bg-cover",style:{backgroundImage:"url(/compass-design/logo.svg)"}}),(0,a.jsx)("div",{className:"font-bold",children:"Compass Design"})]})},getNextSeoProps:function(){var e=(0,o.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});t.Z=i},87692:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>g});let r=l(86925),n=l(64633),a=l(36517),o=p(l(52983)),i=l(78810),d=l(18098),u=p(l(97213)),s=p(l(93627)),f=l(49086);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function p(e){return e&&e.__esModule?e:{default:e}}let m=o.default.forwardRef((e,t)=>{let{css:l={},icon:p=o.default.createElement(f.Icon,null),isErrored:m,errorMessage:g}=e,b=(0,i.useDOMRef)(t),y=(0,n.useFilter)({sensitivity:"base"}),h=(e,t)=>y.contains(e,t),v=(0,a.useComboBoxState)({...e,defaultFilter:h}),E=o.default.useRef(null),O=o.default.useRef(null),$=o.default.useRef(null),S=o.default.useRef(null),{buttonProps:w,inputProps:x,listBoxProps:j,labelProps:_}=(0,r.useComboBox)({...e,inputRef:O,buttonRef:E,listBoxRef:$,popoverRef:S},v);return o.default.createElement(d.StyledDropdownWrapper,c({css:l,ref:b},{}),e.label&&o.default.createElement("label",c({},_),e.label),o.default.createElement(d.StyledDropdown,{isEmpty:!x.value,isErrored:!!m},o.default.createElement("input",c({},x,{ref:O})),o.default.createElement(f.Button,c({},w,{ref:E}),p),v.isOpen&&o.default.createElement(s.default,{state:v,triggerRef:O,popoverRef:S,isNonModal:!0,placement:"bottom start"},e.isLoading?o.default.createElement(d.StyledLoading,null,o.default.createElement("div",{className:"spinner"},o.default.createElement("div",{className:"spinner-1"}),o.default.createElement("div",{className:"spinner-2"}),o.default.createElement("div",{className:"spinner-3"}),o.default.createElement("div",null))):o.default.createElement(u.default,c({},j,{shouldFocusOnHover:!1,isLoading:!!e.isLoading,headerTitle:e.headerTitle,headerOnClick:t=>e?.headerOnClick?.(t),listBoxRef:$,state:v})))),g&&o.default.createElement(d.StyledTextFieldHelperText,{error:!!m},g))}),g=m},69606:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>m});let r=l(39181),n=l(99874),a=c(l(52983)),o=l(78810),i=l(18098),d=c(l(69838)),u=c(l(52836)),s=l(49086);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function c(e){return e&&e.__esModule?e:{default:e}}let p=a.default.forwardRef((e,t)=>{let{css:l={},icon:c=a.default.createElement(s.Icon,null),isErrored:p,errorMessage:m}=e,g=(0,o.useDOMRef)(t),b=(0,n.useSelectState)(e),y=a.default.useRef(null),h=a.default.useRef(null),{labelProps:v,triggerProps:E,valueProps:O,menuProps:$}=(0,r.useSelect)(e,b,g);return a.default.createElement(i.StyledDropdownWrapper,f({css:l},{}),e.label&&a.default.createElement("label",f({},v),e.label),a.default.createElement(r.HiddenSelect,{state:b,triggerRef:g,label:e.label}),a.default.createElement(i.StyledSelect,{isEmpty:!b.selectedItem,isErrored:!!p},a.default.createElement(s.Button,f({},E,{ref:g}),a.default.createElement("span",f({},O),b.selectedItem?""!==b.selectedItem.textValue?b.selectedItem.textValue:b.selectedItem.rendered:e.placeholder),c),b.isOpen&&a.default.createElement(u.default,{state:b,triggerRef:g,popoverRef:h,isNonModal:!0,placement:"bottom start"},a.default.createElement(d.default,f({},$,{shouldFocusOnHover:!1,headerTitle:e.headerTitle,isLoading:!!e.isLoading,headerOnClick:t=>e?.headerOnClick?.(t),listBoxRef:y,state:b})))),m&&a.default.createElement(i.StyledTextFieldHelperText,{error:!!p},m))}),m=p},18098:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{StyledDropdownWrapper:()=>o,StyledDropdown:()=>i,StyledSelect:()=>d,StyledPopover:()=>u,StyledHeaderList:()=>s,StyledPopoverWrapper:()=>f,StyledLoading:()=>c,StyledTextFieldHelperText:()=>p});let r=l(37250),n=l(23797),a=(0,n.keyframes)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),o=(0,r.styled)("div",{width:"100%",label:{fontSize:"$label1",fontWeight:"$semibold",marginBottom:"$2",display:"inline-block",width:"100%"}}),i=(0,r.styled)("div",{width:"100%",border:"1px solid #E6E6E6",background:"#FFFFFF",overflow:"hidden",borderRadius:"$md",position:"relative",zIndex:1,input:{boxSizing:"border-box",background:"#FFFFFF",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:"$label1",fontWeight:"$semibold",width:"100%",height:"$11",flexGrow:1,border:"none",padding:"$3 $11 $3 $4",margin:0},button:{position:"absolute",cursor:"pointer",top:"50%",right:"$3",transform:"translateY(-50%)",width:"$6",height:"$6",display:"flex",justifyContent:"center",alignItems:"center",padding:0,border:"none",background:"transparent",svg:{width:"$4",height:"$4"}},variants:{isEmpty:{true:{input:{"&::placeholder":{color:"#B4B4B4",fontSize:"$label1",fontWeight:"$semibold"}}}},isErrored:{true:{borderColor:"$danger",borderWidth:2,input:{"&:focus":{borderColor:"$danger",outlineColor:"$danger"},"&:focus-within":{borderColor:"$danger",outlineColor:"$danger"}}}}}}),d=(0,r.styled)("div",{width:"100%",border:"1px solid #E6E6E6",background:"#FFFFFF",overflow:"hidden",borderRadius:"$md",zIndex:1,button:{padding:"$3 $4",width:"100%",height:"$11",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",border:"none",gap:"$1",background:"transparent",fontSize:"$label1",fontWeight:"$semibold",svg:{flexShrink:0,width:"$4",height:"$4"},span:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",flexGrow:1,textAlign:"start"}},variants:{isEmpty:{true:{button:{span:{color:"#B4B4B4"}}}},isErrored:{true:{borderColor:"$danger",borderWidth:2,button:{"&:focus":{borderColor:"$danger",outlineColor:"$danger"},"&:focus-within":{borderColor:"$danger",outlineColor:"$danger"}}}}}}),u=(0,r.styled)("div",{margin:0,padding:"$2 0",borderRadius:"$md",width:"100%",background:"#FFFFFF",boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",ul:{maxHeight:"$64",overflowY:"auto",listStyle:"none",marginBlockStart:0,marginBlockEnd:0,marginInlineStart:0,marginInlineEnd:0,paddingInlineStart:0,"&:focus":{outline:"none"}}}),s=(0,r.styled)("div",{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"$2 $4",borderBottom:"2px solid #EDEBE9",span:{color:"#323130",fontSize:"$label2",fontWeight:"$bold",padding:0,margin:0},button:{fontSize:"$label2",fontWeight:"$bold",color:"#A4262C",border:0,cursor:"pointer",backgroundColor:"transparent"}}),f=(0,r.styled)("div",{position:"relative",zIndex:2,marginTop:"$1"}),c=(0,r.styled)("div",{display:"flex",justifyContent:"center",margin:"$4 auto",".spinner":{display:"inline-block",position:"relative",width:"$4",height:"$4",div:{boxSizing:"border-box",display:"block",position:"absolute",width:"$4",height:"$4",border:"2px solid #757575",borderRadius:"50%",animation:`${a} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,borderColor:"#757575 transparent transparent transparent"},".spinner-1":{animationDelay:"-0.45s"},".spinner-2":{animationDelay:"-0.3s"},".spinner-3":{animationDelay:"-0.15s"}}}),p=(0,r.styled)("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"},false:{color:"$gray70"}}}})},13735:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>u});let n=l(60321),a=(r=l(52983),r&&r.__esModule?r:{default:r}),o=l(18098);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let d=({title:e,...t})=>{let l=a.default.useRef(null),{buttonProps:r}=(0,n.useButton)(t,l);return a.default.createElement(o.StyledHeaderList,null,a.default.createElement("span",null,e),a.default.createElement("button",i({},r),"Clear"))},u=d},48044:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let r=l(76798),n=o(l(87692)),a=o(l(69606));function o(e){return e&&e.__esModule?e:{default:e}}let i={ComboBox:n.default,Select:a.default,Item:r.Item};i.Item=r.Item;let d=i},97213:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>s});let r=l(75064),n=u(l(52983)),a=l(18098),o=u(l(13735)),i=u(l(36519));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function u(e){return e&&e.__esModule?e:{default:e}}let s=function(e){let t=n.default.useRef(null),{listBoxRef:l=t,state:u}=e,{listBoxProps:s}=(0,r.useListBox)(e,u,l);return n.default.createElement(n.default.Fragment,null,e.headerTitle&&n.default.createElement(o.default,{title:e.headerTitle,onPress:e?.headerOnClick}),n.default.createElement("ul",d({},s,{ref:l}),e.isLoading?n.default.createElement(a.StyledLoading,null,n.default.createElement("div",{className:"spinner"},n.default.createElement("div",{className:"spinner-1"}),n.default.createElement("div",{className:"spinner-2"}),n.default.createElement("div",{className:"spinner-3"}),n.default.createElement("div",null))):n.default.createElement(n.default.Fragment,null,[...u.collection].map(e=>n.default.createElement(i.default,{key:e.key,item:e,state:u})))))}},69838:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>s});let r=l(75064),n=u(l(52983)),a=l(18098),o=u(l(13735)),i=u(l(84120));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function u(e){return e&&e.__esModule?e:{default:e}}let s=function(e){let t=n.default.useRef(null),{listBoxRef:l=t,state:u}=e,{listBoxProps:s}=(0,r.useListBox)(e,u,l);return n.default.createElement(n.default.Fragment,null,e.headerTitle&&n.default.createElement(o.default,{title:e.headerTitle,onPress:e?.headerOnClick}),n.default.createElement("ul",d({},s,{ref:l}),e.isLoading?n.default.createElement(a.StyledLoading,null,n.default.createElement("div",{className:"spinner"},n.default.createElement("div",{className:"spinner-1"}),n.default.createElement("div",{className:"spinner-2"}),n.default.createElement("div",{className:"spinner-3"}),n.default.createElement("div",null))):n.default.createElement(n.default.Fragment,null,[...u.collection].map(e=>n.default.createElement(i.default,{key:e.key,item:e,state:u})))))}},36519:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let n=l(75064),a=(r=l(52983),r&&r.__esModule?r:{default:r}),o=l(52779);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let d=function({item:e,state:t}){let l=a.default.useRef(null),{optionProps:r,isSelected:d,isFocused:u,isDisabled:s}=(0,n.useOption)({key:e.key},t,l),{type:f="icon",leftIcon:c,rightIcon:p,rightColor:m}=e.props??{};return a.default.createElement(o.StyledOption,i({},r,{ref:l,isFocused:u,isSelected:d,isDisabled:s}),c&&a.default.createElement(o.StyledIcon,null,c),a.default.createElement(o.StyledContent,null,e.rendered),"icon"===f&&p&&a.default.createElement(o.StyledIcon,null,p),"color"===f&&m&&a.default.createElement(o.StyledColor,{css:{$$bg:m}}))}},52779:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{StyledOption:()=>n,StyledIcon:()=>a,StyledColor:()=>o,StyledContent:()=>i});let r=l(37250),n=(0,r.styled)("li",{fontSize:"$label1",fontWeight:"$medium",padding:"$2 $4",outline:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:"$2",color:"333333","&:hover":{backgroundColor:"#F3F2F1"},variants:{isFocused:{true:{backgroundColor:"#F3F2F1"}},isSelected:{true:{backgroundColor:"#F3F2F1"}},isDisabled:{true:{backgroundColor:"transparent"}}}}),a=(0,r.styled)("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$4",height:"$4",overflow:"hidden"}),o=(0,r.styled)("div",{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:"$6",height:"$6",borderRadius:"$md",background:"$$bg"}),i=(0,r.styled)("div",{display:"flex",alignItems:"center",flexGrow:1})},84120:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let n=l(75064),a=(r=l(52983),r&&r.__esModule?r:{default:r}),o=l(52779);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let d=function({item:e,state:t}){let l=a.default.useRef(null),{optionProps:r,isSelected:d,isFocused:u,isDisabled:s}=(0,n.useOption)({key:e.key},t,l),{type:f="icon",leftIcon:c,rightIcon:p,rightColor:m}=e.props??{};return a.default.createElement(o.StyledOption,i({},r,{ref:l,isFocused:u,isSelected:d,isDisabled:s}),c&&a.default.createElement(o.StyledIcon,null,c),a.default.createElement(o.StyledContent,null,e.rendered),"icon"===f&&p&&a.default.createElement(o.StyledIcon,null,p),"color"===f&&m&&a.default.createElement(o.StyledColor,{css:{$$bg:m}}))}},93627:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let n=l(99929),a=(r=l(52983),r&&r.__esModule?r:{default:r}),o=l(18098);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let d=function({children:e,state:t,...l}){let r=a.default.useRef(null),{popoverRef:d=r}=l,{popoverProps:u}=(0,n.usePopover)({...l,offset:8,shouldFlip:!0,popoverRef:d},t),s=l.triggerRef.current?.clientWidth?{...u.style,width:"fit-content",minWidth:l.triggerRef.current.clientWidth+2}:{...u?.style};return a.default.createElement(n.Overlay,null,a.default.createElement(o.StyledPopover,i({},u,{ref:d,style:s}),e,a.default.createElement(n.DismissButton,{onDismiss:()=>t.close()})))}},52836:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let n=l(99929),a=(r=l(52983),r&&r.__esModule?r:{default:r}),o=l(18098);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let d=function({children:e,state:t,...l}){let r=a.default.useRef(null),{popoverRef:d=r}=l,{popoverProps:u}=(0,n.usePopover)({...l,offset:8,shouldFlip:!0,popoverRef:d},t),s=l.triggerRef.current?.clientWidth?{...u.style,width:"fit-content",minWidth:l.triggerRef.current.clientWidth+2}:{...u?.style};return a.default.createElement(n.Overlay,null,a.default.createElement(o.StyledPopover,i({},u,{ref:d,style:s}),e,a.default.createElement(n.DismissButton,{onDismiss:()=>t.close()})))}},49086:function(e,t,l){var r;Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{Button:()=>d,Icon:()=>u});let n=l(60321),a=(r=l(52983),r&&r.__esModule?r:{default:r}),o=l(78810);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}let d=a.default.forwardRef((e,t)=>{let l=(0,o.useDOMRef)(t),{buttonProps:r}=(0,n.useButton)(e,l);return a.default.createElement("button",i({},r,{ref:l}),e.children)}),u=()=>a.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},a.default.createElement("path",{d:"M8.33276 12.3334C8.02004 12.3334 7.70717 12.2125 7.46885 11.9707L1.35805 5.78022C0.880649 5.29658 0.880649 4.5131 1.35805 4.02947C1.83546 3.54584 2.60886 3.54584 3.08626 4.02947L8.33276 9.34651L13.5804 4.03044C14.0578 3.54681 14.8312 3.54681 15.3086 4.03044C15.786 4.51407 15.786 5.29755 15.3086 5.78118L9.19782 11.9717C8.95912 12.2135 8.64594 12.3334 8.33276 12.3334Z",fill:"#201F1E"}))},78810:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useDOMRef",{enumerable:!0,get:()=>n});let r=l(52983);function n(e){let t=(0,r.useRef)(null);return(0,r.useImperativeHandle)(e,()=>t.current),t}}}]);