(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9958],{88447:function(o,e,r){"use strict";r.d(e,{Z:function(){return p}});var n,t,i=r(20544),a=r.n(i),c=r(55340),d=r(64890),l=r(97458),s="https://comfortdelgro.github.io/compass-design";function p(o){var e=o.card,r=void 0===e?(0,d.l)("/static/social-previews/default-preview.jpg"):e,i=o.children,p=o.description,g=void 0===p?"React Compass provides a simple, customizable, and accessible library of React components.":p,u=o.largeCard,h=o.title,f=void 0===h?"React Compass: A popular React UI framework":h,m=o.type,x=(0,c.useRouter)(),y=r.startsWith("http")?r:"".concat(s).concat(r);return(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:f}),(0,l.jsx)("meta",{name:"description",content:g}),(0,l.jsx)("meta",{name:"twitter:card",content:void 0===u||u?"summary_large_image":"summary"}),(0,l.jsx)("meta",{property:"og:type",content:void 0===m?"website":m}),(0,l.jsx)("meta",{property:"og:title",content:f}),(0,l.jsx)("meta",{property:"og:url",content:"".concat(s).concat(x.asPath)}),(0,l.jsx)("meta",{property:"og:description",content:g}),(0,l.jsx)("meta",{property:"og:image",content:y}),n||(n=(0,l.jsx)("meta",{property:"og:ttl",content:"604800"})),t||(t=(0,l.jsx)("meta",{name:"docsearch:version",content:"master"})),i]})}},61692:function(o,e,r){"use strict";r.d(e,{Z:function(){return B}});var n,t,i,a,c=r(2815),d=r(81905),l=r(91542),s=r.n(l),p=r(38443),g=r(57294),u=r(22478),h=r(88024),f=r(17058),m=r(52983),x=r(12717),y=r(20312),b=r.n(y),$=r(97458),C=["code"];function v(o){var e,r,l,s,p,y,v,w,k=o.code,j=(0,d.Z)(o,C),B=(e=m.useState(!1),l=(r=(0,x.Z)(e,2))[0],s=r[1],p=m.useRef(),y=m.useRef(!1),m.useEffect(function(){return y.current=!0,function(){y.current=!1}},[]),{copy:(v=(0,u.Z)((0,g.Z)().mark(function o(e){return(0,g.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s(!0),clearTimeout(p.current),p.current=setTimeout(function(){y&&s(!1)},1200),o.next=6,b()(e);case 6:o.next=10;break;case 8:o.prev=8,o.t0=o.catch(0);case 10:case"end":return o.stop()}},o,null,[[0,8]])})),function(o){return v.apply(this,arguments)}),isCopied:l}),S=B.copy,Z=B.isCopied,R=(0,m.useState)("Ctrl +"),W=R[0],T=R[1];return(0,m.useEffect)(function(){T(window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"Ctrl + ")}),(0,$.jsxs)("button",(0,c.Z)((0,c.Z)({},j),{},{"aria-label":"Copy the code",type:"button",className:"cdg-copy",onClick:(w=(0,u.Z)((0,g.Z)().mark(function o(e){return(0,g.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e.stopPropagation(),o.next=3,S(k);case 3:case"end":return o.stop()}},o)})),function(o){return w.apply(this,arguments)}),children:[Z?n||(n=(0,$.jsx)(f.default,{})):t||(t=(0,$.jsx)(h.default,{})),(0,$.jsxs)("span",{className:"cdg-copyKeypress",children:[i||(i=(0,$.jsx)("span",{children:"(or"}))," ",W,"C",a||(a=(0,$.jsx)("span",{children:")"}))]})]}))}var w=r(44805),k=r(36335),j=["copyButtonHidden","code","language","component"],B=m.forwardRef(function(o,e){var r=o.copyButtonHidden,n=o.code,t=o.language,i=o.component,a=void 0===i?w.Z:i,l=(0,d.Z)(o,j),g=m.useMemo(function(){return s()(n.trim(),t)},[n,t]),u=(0,k.Y)();return(0,$.jsx)(a,(0,c.Z)((0,c.Z)({ref:e},l),{},{children:(0,$.jsxs)("div",(0,c.Z)((0,c.Z)({},u),{},{children:[(0,$.jsx)("pre",{children:(0,$.jsx)("code",{className:"language-".concat(t),dangerouslySetInnerHTML:{__html:g}})}),void 0!==r&&r?null:(0,$.jsx)(p.NoSsr,{children:(0,$.jsx)(v,{code:n})})]}))}))})},44805:function(o,e,r){"use strict";var n=r(2815),t=r(81905),i=r(38443),a=r(14517),c=r(52983),d=r(97458),l=["className","renderedMarkdown"],s=(0,i.styled)("div",{lineHeight:1.5625,wordBreak:"break-word","& pre":{lineHeight:1.5,margin:"$2 0",padding:"$2",backgroundColor:"$gray20",color:"#f8f8f2",border:"1px solid",borderColor:"$gray30",overflow:"auto",WebkitOverflowScrolling:"touch",fontSize:13,maxWidth:"calc(100vw - 32px)",maxHeight:"400px",marginTop:0},"& code":{fontWeight:400,WebkitFontSmoothing:"subpixel-antialiased"},"& pre > code":{fontSize:"inherit",color:"$gray110"},"& :not(pre) > code":{display:"inline-block",padding:"0 5px",color:"$primaryText",backgroundColor:"$primaryBg",borderRadius:5,fontSize:13,direction:"ltr /*! @noflip */"},"& h1":{fontSize:36,margin:"10px 0",color:"$cdgBlue140",fontWeight:800},"& .description":{fontWeight:400,margin:"0 0 28px"},"& .component-tabs":{margin:"0 0 40px"},"& h2":{fontWeight:700,color:"$gray110",margin:"40px 0 4px"},"& h3":{fontWeight:"bold",color:"$gray110",margin:"24px 0 8px"},"& h4":{fontWeight:"bold",color:"$gray110",margin:"24px 0 8px"},"& h5":{fontWeight:"bold",color:"$gray110",margin:"20px 0 8px"},"& p, & ul, & ol":{marginTop:0,marginBottom:16,color:"$gray110"},"& ul":{paddingLeft:30},"& h1, & h2, & h3, & h4":{position:"relative",paddingRight:62,"& code":{fontSize:"inherit",lineHeight:"inherit",wordBreak:"break-all"},"& .anchor-link":{display:"none"},"& a:not(.anchor-link):hover":{color:"currentColor",borderBottom:"1px solid currentColor",textDecoration:"none"},"&:hover .anchor-link, & .comment-link":{lineHeight:"21.5px",position:"absolute",textAlign:"center",marginLeft:10,marginTop:5,height:26,width:26,backgroundColor:"$cdgBlue70",border:"1px solid",borderColor:"$gray30",borderRadius:8,color:"$primaryText",cursor:"pointer",display:"inline-block","&:hover":{backgroundColor:"$gray50",borderColor:"$gray10",color:"$primaryText"},"& svg":{width:"0.875rem",height:"0.875rem",fill:"currentColor",pointerEvents:"none"}}},"& h1 code, & h2 code, & h3 code":{color:"$gray110"},"& h1 code":{fontWeight:"bold"},"& h2 code":{fontSize:24,fontWeight:"bold"},"& h3 code":{fontSize:18},"& table":{width:"100%",display:"table",wordBreak:"normal",overflowX:"auto",WebkitOverflowScrolling:"touch",borderCollapse:"collapse",marginBottom:"20px",borderSpacing:0,border:"1px solid $gray40",borderRadius:12,"& .prop-name, & .prop-type, & .prop-default, & .slot-name, & .slot-defaultClass, & .slot-default":{fontWeight:400,WebkitFontSmoothing:"subpixel-antialiased",fontSize:13},"& .required":{color:"#006500"},"& .optional":{color:"#45529f"},"& .prop-type, & .slot-defaultClass":{color:"#932981"},"& .prop-default, & .slot-default":{borderBottom:"1px dotted $gray40"}},"& td":{borderBottom:"1px solid $gray40",padding:"$3",color:"$primaryText"},"& td code":{lineHeight:1.6},"& th":{fontSize:14,fontWeight:500,color:"$primaryText",background:"$gray20",whiteSpace:"pre",borderBottom:"1px solid $gray40",padding:"$3"},"& blockquote":{borderRadius:12,border:"1px solid",borderLeft:"8px solid",borderColor:"$warning",backgroundColor:"$warningBg",padding:"10px 20px",margin:"20px 0","& p":{marginTop:10,color:"$warning"}},"& .CdgCallout-root":{padding:"16px",margin:"16px 0",border:"1px solid",borderRadius:12,"& > ul, & > p":{"&:last-child":{margin:0}},"& > p, & ul, li":{color:"inherit"},"&.CdgCallout-error":{color:"$danger",backgroundColor:"$dangerBg",borderColor:"$dangerBg","& strong":{color:"$danger",fontWeight:"bold"},"& a":{color:"red",textDecorationColor:"red","&:hover":{textDecorationColor:"inherit"}}},"&.CdgCallout-info":{color:"$info",backgroundColor:"$infoBg",borderColor:"$info","& strong":{color:"$info"}},"&.CdgCallout-success":{color:"$success",backgroundColor:"$successBg",borderColor:"$success","& strong":{color:"green",fontWeight:"bold"},"& a":{color:"$success",textDecorationColor:"red","&:hover":{textDecorationColor:"inherit"}}},"&.CdgCallout-warning":{color:"$warning",backgroundColor:"$warningBg",borderColor:"$warning","& strong":{color:"$warning"},"& a":{color:"$warning",textDecorationColor:"$warning","&:hover":{textDecorationColor:"inherit"}}}},"& a, & a code":{color:"$cdgBlue60",textDecoration:"underline",textDecorationColor:"red","&:hover":{textDecorationColor:"inherit"}},"& a code":{color:"red"},"& img, & video":{maxWidth:"100% !important",height:"auto"},"& img":{display:"inline-block",borderRadius:2},"& hr":{height:1,margin:"$5 0",border:0,flexShrink:0,backgroundColor:"#201F1E"},"& kbd.key":{padding:"5px",display:"inline-block",whiteSpace:"nowrap",margin:"0 1px",font:"11px Consolas,Liberation Mono,Menlo,monospace",lineHeight:"10px",color:"$primaryText",verticalAlign:"middle",backgroundColor:"$gray50",border:"1px solid $gray30",borderRadius:5,boxShadow:"inset 0 -1px 0 $gray30"},"& details":{marginBottom:15,padding:10,"& pre":{marginTop:10}},"& summary":{cursor:"pointer"},"& .cdg-root":{direction:"ltr /*! @noflip */",position:"relative",fontSize:10},"& .cdg-copy":{display:"inline-flex",flexDirection:"row-reverse",alignItems:"center",width:26,height:26,cursor:"pointer",position:"absolute",top:"$1",right:"$1",padding:"$1",fontFamily:"inherit",fontWeight:500,borderRadius:6,border:"none",backgroundColor:"transparent",color:"#FFF",opacity:.6,"& svg":{userSelect:"none",width:16,height:16,display:"inline-block",fill:"$gray110",flexShrink:0,fontSize:"18px",margin:"auto"},"& .cdg-copied-icon":{display:"none"},"&:hover, &:focus":{opacity:1,backgroundColor:"$gray40","& .cdg-copyKeypress":{color:"$gray110",display:"block","@media (any-hover: none)":{display:"none"}}},"& .cdg-copyKeypress":{display:"none",position:"absolute",right:26},"&[data-copied]":{borderColor:"$cdgBlue60",color:"#fff",backgroundColor:"$cdgBlue40","& .cdg-copy-icon":{display:"none"},"& .cdg-copied-icon":{display:"block"}},"&:focus-visible":{outline:"2px solid",outlineOffset:2,outlineColor:"$cdgBlue40"}},"& .cdg-copyKeypress":{pointerEvents:"none",userSelect:"none",marginRight:"$1",marginBottom:"$1",whiteSpace:"nowrap",opacity:.6},"& li":{marginBottom:4,"& pre":{marginTop:"$1"},"& > p":{marginBottom:"$!"}}}),p=c.forwardRef(function(o,e){var r=o.className,i=o.renderedMarkdown,c=(0,t.Z)(o,l),p={};return"string"!=typeof i||i.includes('class="description hidden"')||(p.dangerouslySetInnerHTML={__html:i}),(0,d.jsx)(s,(0,n.Z)((0,n.Z)((0,n.Z)({className:(0,a.default)("markdown-body",r)},p),c),{},{ref:e}))});e.Z=p},48639:function(o,e,r){"use strict";r.d(e,{Z:function(){return s}});var n,t=r(84308),i=r(38443),a=r(48329),c=r.n(a),d=r(2378),l=r(97458);function s(o){return(0,l.jsx)(i.Box,{css:{padding:"$6 0",background:"$gray20"},children:(0,l.jsxs)(d.Z,{css:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsxs)(i.Box,{css:{display:"flex"},children:[n||(n=(0,l.jsx)(c(),{href:"/",children:(0,l.jsx)(t.default,{width:25,height:25})})),(0,l.jsx)(i.Typography.Body,{variant:"body2",css:{marginLeft:5},children:"\xa9 2023 CDG Zig. All rights reserved."})]}),(0,l.jsxs)(i.Box,{css:{display:"flex"},children:[(0,l.jsx)(i.Typography.Body,{variant:"body2",css:{marginRight:10},children:"Privacy"}),(0,l.jsx)(i.Typography.Body,{variant:"body2",css:{whiteSpace:"nowrap"},children:"Terms & Conditions"})]})]})})}},2378:function(o,e,r){"use strict";r.d(e,{Z:function(){return a}});var n=r(2815),t=r(38443),i=r(97458);function a(o){var e=o.children,r=o.css,a=o.className;return(0,i.jsx)(t.Box,{className:"container ".concat(void 0===a?"":a),css:(0,n.Z)({"@media (min-width: 1200px)":{maxWidth:1200,margin:"auto"},"@media (min-width: 600px)":{paddingLeft:24,paddingRight:24},"@media (max-width: 599px)":{paddingLeft:16,paddingRight:16}},r),children:e})}},91542:function(o,e,r){let n=r(89652);r(1751),r(61735),r(86890),r(24158),r(82719),r(47107),r(43815),r(71633),o.exports=function(o,e){let r;switch(e){case"ts":r=n.languages.tsx;break;case"js":r=n.languages.jsx;break;case"sh":throw Error(['docs-infra: Unsupported language: "sh" in:',"","```sh",o,"```","",'Use "bash" instead.',""].join("\n"));case"diff":(r={...n.languages.diff}).deleted=/^[-].*$/m;break;default:r=n.languages[e]}if(!r){if(e)throw Error(`unsupported language: "${e}", "${o}"`);r=n.languages.jsx}return n.highlight(o,r)}}}]);