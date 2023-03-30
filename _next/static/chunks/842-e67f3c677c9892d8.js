"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{69156:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>u});let l=(a=n(52983),a&&a.__esModule?a:{default:a}),r=n(78810),i=n(13124),o=n(88349),d=l.default.forwardRef((e,t)=>{let{css:n={},display:a=4,children:d,size:u="md",disabledAnimation:c=!1}=e,s=(0,r.useDOMRef)(t),f=l.default.Children.toArray(d);return l.default.createElement(i.StyledAvatarGroup,{css:n,ref:s,disabledAnimation:c},f.slice(0,a).map(e=>e),a<f.length&&l.default.createElement(o.StyledAvatar,{size:u,css:{".initials":{fontSize:"lg"==u||"md"==u?"1rem":"sm"==u&&f.length-a>9||"xs"==u&&f.length-a<10?"0.8rem":"xs"==u&&f.length-a>9?"0.5rem":"1rem"}}},l.default.createElement("span",{className:"initials count"},"+",f.length-a)))}),u=d},13124:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"StyledAvatarGroup",{enumerable:!0,get:()=>r});let a=n(37250),l=n(88349),r=(0,a.styled)("div",{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"fit-content",[`& ${l.StyledAvatar}`]:{marginRight:"-$2","&:hover":{marginTop:"-$4"}},variants:{disabledAnimation:{false:{},true:{[`& ${l.StyledAvatar}`]:{marginRight:"-$2","&:hover":{marginTop:"0px"}}}}}})},70742:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>s});let l=(a=n(52983),a&&a.__esModule?a:{default:a}),r=n(63622),i=n(78810),o=n(88349);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let u=(e,t)=>{let n=e.toUpperCase().split(" ").map(e=>e[0]).join("").slice(0,"sm"===t||"xs"===t?1:2);return n},c=l.default.forwardRef((e,t)=>{let{css:n={},label:a,icon:c,image:s,size:f="md",...p}=e,g=(0,i.useDOMRef)(t);return l.default.createElement(o.StyledAvatar,d({css:n,ref:g},{size:f},p),a?l.default.createElement("span",{className:"initials"},u(a,f)):null,c?l.default.createElement("div",{className:"icon-wrapper"},l.default.createElement(r.Icon,{className:"icon",icon:c})):null,s?l.default.createElement("img",{className:"image",src:s,alt:a||"Avatar"}):null)}),s=c},88349:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"StyledAvatar",{enumerable:!0,get:()=>l});let a=n(37250),l=(0,a.styled)("span",{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",aspectRatio:"1 / 1",borderRadius:"$full",overflow:"hidden",userSelect:"none",color:"$info",transition:"$default",boxSizing:"border-box",".initials, .icon-wrapper, .image":{width:"100%",height:"100%",position:"absolute",background:"$infoBg",top:0,left:0},".initials, .icon-wrapper":{display:"grid",placeItems:"center"},".initials":{fontFamily:"$sans",fontSize:"$body2",fontWeight:"$semibold",zIndex:1},".icon-wrapper":{zIndex:2},".image":{zIndex:3,color:"transparent",background:"transparent"},".initials.count":{zIndex:4},variants:{size:{lg:{width:"$12",".icon-wrapper > .icon":{width:"$6",height:"$6"}},md:{width:"$10",".icon-wrapper > .icon":{width:"$6",height:"$6"}},sm:{width:"$8",".icon-wrapper > .icon":{width:"$4",height:"$4"}},xs:{width:"$6",".icon-wrapper > .icon":{width:"$4",height:"$4"}}}},defaultVariants:{size:"md"}})},358:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>i});let a=r(n(70742)),l=r(n(69156));function r(e){return e&&e.__esModule?e:{default:e}}a.default.Group=l.default,a.default.Group.displayName="Avatar.Group",a.default.displayName="Avatar";let i=a.default},16815:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>s});let a=n(60321),l=u(n(52983)),r=n(78810),i=n(12235),o=u(n(73713));function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e){return e&&e.__esModule?e:{default:e}}let c=l.default.forwardRef((e,t)=>{let{css:n={},children:u,className:c,leftIcon:s,rightIcon:f,variant:p,size:g,fullWidth:m,loading:b,onMouseDown:y,ripple:h=!1,...$}=e,v=(0,r.useDOMRef)(t),x=(0,a.useButton)($,v).buttonProps,_={variant:p,size:g,fullWidth:m,loading:b},O=b?{className:c,css:n,..._}:{className:c,css:n,...x,...$,..._};return l.default.createElement(l.default.Fragment,null,h?l.default.createElement(o.default,null,l.default.createElement(i.StyledButton,d({},O,{ref:v,onMouseDown:y}),b?l.default.createElement(i.StyledLoading,{hidden:!b,"aria-hidden":!b},l.default.createElement("div",{className:"dots"},l.default.createElement("i",null),l.default.createElement("i",null),l.default.createElement("i",null))):l.default.createElement(l.default.Fragment,null),l.default.createElement(i.StyledButtonContent,null,s||m&&f?l.default.createElement("div",{className:"icon left"},s):null,l.default.createElement("span",{className:"children"},u),f||m&&s?l.default.createElement("div",{className:"icon right"},f):null))):l.default.createElement(i.StyledButton,d({},O,{ref:v,onMouseDown:y}),b?l.default.createElement(i.StyledLoading,{hidden:!b,"aria-hidden":!b},l.default.createElement("div",{className:"dots"},l.default.createElement("i",null),l.default.createElement("i",null),l.default.createElement("i",null))):l.default.createElement(l.default.Fragment,null),l.default.createElement(i.StyledButtonContent,null,s||m&&f?l.default.createElement("div",{className:"icon left"},s):null,l.default.createElement("span",{className:"children"},u),f||m&&s?l.default.createElement("div",{className:"icon right"},f):null)))}),s=c},23153:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"blink",{enumerable:!0,get:()=>l});let a=n(23797),l=(0,a.keyframes)({"0%":{opacity:"0.2"},"20%":{opacity:1},"100%":{opacity:"0.2"}})},12235:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{StyledLoading:()=>o,StyledButtonContent:()=>d,StyledButton:()=>u});let a=n(61367),l=n(37250),r=n(23153),i=(0,a.keyframes)({to:{transform:"scale(4)",opacity:0}}),o=(0,l.styled)("span",{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"wait",".dots":{display:"inline-flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"2px"},".dots i":{display:"inline-block",flexShrink:0,width:".375em",height:".375em",borderRadius:"$full",background:"currentColor",animation:`${r.blink} 1.4s infinite both`},".dots i:nth-child(1)":{animationDelay:"0s"},".dots i:nth-child(2)":{animationDelay:"0.2s"},".dots i:nth-child(3)":{animationDelay:"0.4s"}}),d=(0,l.styled)("div",{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"nowrap",flexShrink:0,".icon":{width:"$4",height:"$4"},".icon.left":{marginRight:"$2",display:"flex",alignItems:"center",justifyContent:"center"},".icon.right":{marginLeft:"$2",display:"flex",alignItems:"center",justifyContent:"center"}}),u=(0,l.styled)("button",{position:"relative",flexShrink:0,fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",borderWidth:"$light",borderStyle:"solid",borderRadius:"$md",cursor:"pointer",transition:"$button",[`${o}`]:{display:"none"},[`${d}`]:{visibility:"visible"},"&:disabled":{background:"$divider",color:"$disabledText",borderColor:"$divider",cursor:"not-allowed"},"&:focus":{outline:"none",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"},"& .ripple":{position:"absolute",borderRadius:"50%",transform:"scale(0)",animation:`${i} 600ms linear`,backgroundColor:"rgba(255, 255, 255, 0.7)"},variants:{size:{lg:{fontSize:"$body2",padding:"$2 $6"},md:{fontSize:"$body3",padding:"$1_5 $4"},sm:{fontSize:"$label2",padding:"$1 $2_5"}},variant:{primary:{background:"$cdgBlue",color:"$whiteText",borderColor:"$cdgBlue","&:hover:enabled":{background:"$cdgBlue120",borderColor:"$cdgBlue120"}},secondary:{background:"transparent",color:"$cdgBlue",borderColor:"$cdgBlue","&:hover:enabled":{color:"$cdgBlue100",background:"$cdgBlue10",borderColor:"$cdgBlue120"}},danger:{background:"transparent",color:"$danger",borderColor:"$danger","&:hover:enabled":{background:"$dangerBg",borderColor:"$dangerBg"}},ghost:{background:"transparent",color:"$typeHeading",borderColor:"transparent","&:hover:enabled":{color:"$cdgBlue",background:"$cdgBlue10"}}},fullWidth:{true:{width:"100%",[`${d}`]:{".children":{flexGrow:1}}}},loading:{true:{[`${o}`]:{display:"flex"},[`${d}`]:{visibility:"hidden"}}},iconOnly:{true:{aspectRatio:"1 / 1",padding:0,[`${d}`]:{".children":{display:"flex",alignItems:"center",justifyContent:"center"}}}}},compoundVariants:[{size:"lg",iconOnly:!0,css:{height:"calc((1.5*$4) + (2*$2))"}},{size:"md",iconOnly:!0,css:{height:"calc((1.5*$3_5) + (2*$1_5))"}},{size:"sm",iconOnly:!0,css:{height:"calc((1.5*$3) + (2*$1))"}}],defaultVariants:{size:"md",variant:"primary",fullWidth:!1,loading:!1,iconOnly:!1}})},94335:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>r});let l=(a=n(16815),a&&a.__esModule?a:{default:a});l.default.displayName="Button";let r=l.default},73713:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>i});let l=(a=n(52983),a&&a.__esModule?a:{default:a}),r=({children:e})=>{let t=e=>{let t=e.currentTarget,n=document.createElement("span"),a=Math.max(t.clientWidth,t.clientHeight),l=a/2;n.style.width=n.style.height=`${a}px`,n.style.left=`${e.clientX-t.getBoundingClientRect().left-l}px`,n.style.top=`${e.clientY-t.getBoundingClientRect().top-l}px`,n.classList.add("ripple");let r=t.getElementsByClassName("ripple")[0];r&&r.remove(),t.appendChild(n)};return l.default.cloneElement(e,{onClick:t,style:{overflow:"hidden",position:"relative"}})},i=r},47614:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>u});let l=(a=n(52983),a&&a.__esModule?a:{default:a}),r=n(78810),i=n(67086);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let d=l.default.forwardRef((e,t)=>{let{children:n,css:a={},...d}=e,u=(0,r.useDOMRef)(t);return l.default.createElement(i.StyledDashboardSidecardContainer,o({css:a,ref:u},d),n)}),u=d},67086:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{StyledDashboardHeader:()=>l,StyledDashboardContent:()=>r,StyledDashboardSidecardContainer:()=>i});let a=n(37250),l=(0,a.styled)("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",paddingTop:"$2",paddingBottom:"$2",paddingLeft:"$4",paddingRight:"$4",backgroundColor:"$cdgBlue10",borderBottom:"1px solid rgba(0, 0, 0, 0.02)","& *":{fontFamily:"$sans",fontWeight:"$medium",fontSize:"$body2",lineHeight:"$normal"}}),r=(0,a.styled)("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",paddingTop:"$4",paddingBottom:"$4",paddingLeft:"$6",paddingRight:"$6",backgroundColor:"$primaryBg",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"$4",alignItems:"center"}),i=(0,a.styled)("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",width:"$90_75",borderRadius:"$lg",overflow:"clip",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"0px",boxShadow:"0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)"})},39384:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let l=(a=n(52983),a&&a.__esModule?a:{default:a}),r=n(67086);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let o=l.default.forwardRef((e,t)=>{let{children:n,css:a={},...o}=e;return l.default.createElement(r.StyledDashboardContent,i({css:a,ref:t},o),n)}),d=o},98700:function(e,t,n){var a;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>d});let l=(a=n(52983),a&&a.__esModule?a:{default:a}),r=n(67086);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let o=l.default.forwardRef((e,t)=>{let{children:n,css:a={},...o}=e;return l.default.createElement(r.StyledDashboardHeader,i({css:a,ref:t},o),n)}),d=o},23518:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>o});let a=i(n(47614)),l=i(n(39384)),r=i(n(98700));function i(e){return e&&e.__esModule?e:{default:e}}a.default.Header=r.default,a.default.Content=l.default,a.default.displayName="DashboardSidecard",a.default.Header.displayName="DashboardSidecard.Header",a.default.Content.displayName="DashboardSidecard.Content";let o=a.default}}]);