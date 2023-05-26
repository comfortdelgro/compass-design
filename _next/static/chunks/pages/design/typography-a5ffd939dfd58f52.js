(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6118],{95532:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/design/typography",function(){return s(94023)}])},70501:function(e,n,s){"use strict";var r=s(97458),i=s(52983),o=s(53742),t=function(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw Error("Invalid HEX color.");var n=parseInt(e.slice(0,2),16),s=parseInt(e.slice(2,4),16),r=parseInt(e.slice(4,6),16);return .299*n+.587*s+.114*r>186?"#000000":"#FFFFFF"},l=function(e){if(e.startsWith("var(")){var n,s,r,i,o,t=e.replace("var(","").replace(")","");return window.getComputedStyle(document.documentElement).getPropertyValue(t)}return e.startsWith("rgb")?(i=((r=(n=e).replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i))&&r[4]||"").trim(),o=r?(256|Number(r[1])).toString(16).slice(1)+(256|Number(r[2])).toString(16).slice(1)+(256|Number(r[3])).toString(16).slice(1):n,"#"+(o+=(255*(""!==i?Number(i):1)|256).toString(16).slice(1))):e},a=function(e){var n=e.color,s=e.gradient,a=void 0!==s&&s,d=(0,i.useState)(null),c=d[0],h=d[1],x=(0,i.useState)(1),p=x[0],j=x[1];return(0,i.useEffect)(function(){if(!a){var e;h(((e=l(n.value)).startsWith("#")&&9===e.length?{color:e.slice(0,7),opacity:parseInt(e.slice(7),16)/255}:{color:e,opacity:1}).color),j(p)}},[n.value,a,p]),(0,r.jsxs)("div",{className:"scale",style:{width:"9rem",height:"6rem",padding:"0.5rem",fontSize:"0.75rem",lineHeight:"1rem",fontWeight:600,display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"space-between",cursor:"copy",flexShrink:0,transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",backgroundColor:a?"transparent":n.value,backgroundImage:a?"linear-gradient(to right, ".concat(n.value,")"):"none",opacity:p,color:c?t(c):"#000"},onClick:function(){navigator&&navigator.clipboard.writeText(c||""),o.ZP.success("Copied to clipboard")},children:[(0,r.jsx)("div",{children:n.token}),(0,r.jsx)("div",{children:a?n.value:c})]})};n.Z=a},47479:function(e,n,s){"use strict";var r=s(97458),i={banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("div",{style:{backgroundImage:"url(/compass-design/logo.svg)",width:"1.75rem",aspectRatio:"1 / 1",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,r.jsx)("div",{style:{fontWeight:700},children:"Compass Design"})]})},useNextSeoProps:function(){return{description:"Comfortdelgro's Compass Design System",openGraph:{images:[{url:"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}};n.Z=i},94023:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return k}});var r=s(36690),i=s(93089),o=s(97458),t=s(53956),l=s(45605),a=s(47479);s(83570);var d=s(61351);s(54505);var c=s(37250);s(70501);var h=s(30191),x=function(){return(0,o.jsx)("div",{style:{display:"flex",flexDirection:"row",marginTop:"1.25rem",gap:"0.5rem",flexWrap:"wrap"},children:Object.entries({regular:400,medium:500,semibold:600,bold:700}).map(function(e){var n=(0,h.Z)(e,2),s=n[0],r=n[1];return(0,o.jsxs)("div",{style:{border:"2px solid rgb(229 231 235)",flexShrink:0,width:"9rem",height:"6rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",padding:"0.75rem",fontWeight:r},children:[(0,o.jsx)("div",{className:"text-2xl text-[#080C4E]",children:"Aa"}),(0,o.jsx)("div",{className:"h-2"}),(0,o.jsx)("div",{className:"text-sm capitalize",children:s})]},s)})})},p=function(e){var n=e.size,s=e.weight,r=e.color;return(0,o.jsxs)("div",{style:{width:"100%",borderBottom:"1px gray solid",paddingTop:"1.25rem",paddingBottom:"1.25rem"},children:[(0,o.jsxs)("div",{style:{fontSize:"0.875rem",lineHeight:"1.25rem",display:"flex",gap:"2.5rem",color:"rgb(107 114 128)",marginBottom:"0.625rem"},children:[(0,o.jsx)("span",{children:n.token}),(0,o.jsxs)("span",{children:["size: ",n.value]}),(0,o.jsx)("span",{children:(0,o.jsx)("span",{style:{textTransform:"capitalize"},children:s})})]}),(0,o.jsx)("div",{style:{overflow:"hidden",whiteSpace:"nowrap",fontSize:n.value,lineHeight:1,fontWeight:c.theme.fontWeights[s].value,color:void 0===r?"#000000":r},children:"The quick brown fox jumps over the lazy dog."})]})};function j(e){var n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h4:"h4",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,d.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Typography"}),"\n",(0,o.jsx)(n.p,{children:"Good typography can help create clear hierarchies, organize information, and guide users through a product or experience."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"import",children:"Import:"}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Typography} "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})}),"\n",(0,o.jsx)(n.p,{children:"or"}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Typography "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/typography'"})]})})}),"\n",(0,o.jsx)(n.h3,{id:"fonts",children:"Fonts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Poppin is the primary digital product typeface of Pax app for both iOS and AOS."}),"\n",(0,o.jsx)(n.li,{children:"Native OS System feedback will use Roboto for AOS, and SF Sans Pro for IOS."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"weights",children:"Weights"}),"\n",(0,o.jsx)(n.p,{children:"The choice of font weight is also based on the principles of order, stability, and restraint. In most cases, just regular and bold should be enough."}),"\n",(0,o.jsx)(x,{}),"\n",(0,o.jsx)(n.h3,{id:"sizes",children:"Sizes"}),"\n",(0,o.jsx)(n.h4,{id:"display",children:"Display"}),"\n",(0,o.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,o.jsx)(p,{size:c.theme.fontSizes.display1,weight:"bold"}),(0,o.jsx)(p,{size:c.theme.fontSizes.display2,weight:"bold"}),(0,o.jsx)(p,{size:c.theme.fontSizes.display3,weight:"bold"})]}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Display"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'display1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Display"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Display"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'display2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Display"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Display"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'display3'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Display"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,o.jsx)(n.h4,{id:"header",children:"Header"}),"\n",(0,o.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,o.jsx)(p,{size:c.theme.fontSizes.header1,weight:"bold"}),(0,o.jsx)(p,{size:c.theme.fontSizes.header2,weight:"bold"}),(0,o.jsx)(p,{size:c.theme.fontSizes.header3,weight:"bold"}),(0,o.jsx)(p,{size:c.theme.fontSizes.header4,weight:"bold"}),(0,o.jsx)(p,{size:c.theme.fontSizes.header5,weight:"bold"})]}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'header0'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'header1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'header2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'header3'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'header4'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'header5'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Header"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,o.jsx)(n.h4,{id:"body",children:"Body"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"semibold"})," and ",(0,o.jsx)(n.code,{children:"bold"})," font weights on these font sizes for semiboldes."]}),"\n",(0,o.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,o.jsx)(p,{size:c.theme.fontSizes.body1,weight:"normal"}),(0,o.jsx)(p,{size:c.theme.fontSizes.body2,weight:"normal"}),(0,o.jsx)(p,{size:c.theme.fontSizes.body3,weight:"normal"})]}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Body"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Body"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Body"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Body"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Body"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'body3'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Body"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,o.jsx)(n.h4,{id:"labels",children:"Labels"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"light"}),", ",(0,o.jsx)(n.code,{children:"semibold"})," and ",(0,o.jsx)(n.code,{children:"bold"})," font weights on these font sizes for semiboldes."]}),"\n",(0,o.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,o.jsx)(p,{size:c.theme.fontSizes.label1,weight:"normal"}),(0,o.jsx)(p,{size:c.theme.fontSizes.label2,weight:"normal"}),(0,o.jsx)(p,{size:c.theme.fontSizes.label3,weight:"normal"})]}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'label1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'label2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'label3'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Label"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,o.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"semibold"})," font weight on these font sizes for semiboldes."]}),"\n",(0,o.jsxs)("div",{style:{marginTop:"0.5rem"},children:[(0,o.jsx)(p,{size:c.theme.fontSizes.link1,weight:"semibold",color:"#009EDA"}),(0,o.jsx)(p,{size:c.theme.fontSizes.link2,weight:"medium",color:"#009EDA"}),(0,o.jsx)(p,{size:c.theme.fontSizes.link3,weight:"medium",color:"#009EDA"})]}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Link"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'link1'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Link"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Link"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'link2'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Link"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Link"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'link3'"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">The quick brown</"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Typography.Link"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"props-body",children:"Props Body:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"variant"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"body1"}),"|",(0,o.jsx)(n.code,{children:"body2"}),"|",(0,o.jsx)(n.code,{children:"body3"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"body1"})}),(0,o.jsx)(n.td,{align:"left",children:"Font size of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"component"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Component"})}),(0,o.jsx)(n.td,{align:"left",children:"-"}),(0,o.jsx)(n.td,{align:"left",children:"Displayed as specific tag"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"weight"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"none"}),"|",(0,o.jsx)(n.code,{children:"bold"}),"|",(0,o.jsx)(n.code,{children:"semibold"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"none"})}),(0,o.jsx)(n.td,{align:"left",children:"Font weight of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"css"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"CSS"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"props-display",children:"Props Display:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"variant"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"display1"}),"|",(0,o.jsx)(n.code,{children:"display2"}),"|",(0,o.jsx)(n.code,{children:"display3"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"display1"})}),(0,o.jsx)(n.td,{align:"left",children:"Font size of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"component"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Component"})}),(0,o.jsx)(n.td,{align:"left",children:"-"}),(0,o.jsx)(n.td,{align:"left",children:"Displayed as specific tag"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"css"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"CSS"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"props-header",children:"Props Header:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"variant"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"header0"}),"|",(0,o.jsx)(n.code,{children:"header1"}),"|",(0,o.jsx)(n.code,{children:"header2"}),"|",(0,o.jsx)(n.code,{children:"header3"}),"|",(0,o.jsx)(n.code,{children:"header4"}),"|",(0,o.jsx)(n.code,{children:"header5"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"header1"})}),(0,o.jsx)(n.td,{align:"left",children:"Font size of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"component"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Component"})}),(0,o.jsx)(n.td,{align:"left",children:"-"}),(0,o.jsx)(n.td,{align:"left",children:"Displayed as specific tag"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"css"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"CSS"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"props-label",children:"Props Label:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"variant"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"label1"}),"|",(0,o.jsx)(n.code,{children:"label2"}),"|",(0,o.jsx)(n.code,{children:"label3"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"label1"})}),(0,o.jsx)(n.td,{align:"left",children:"Font size of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"component"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Component"})}),(0,o.jsx)(n.td,{align:"left",children:"-"}),(0,o.jsx)(n.td,{align:"left",children:"Displayed as specific tag"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"weight"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"none"}),"|",(0,o.jsx)(n.code,{children:"bold"}),"|",(0,o.jsx)(n.code,{children:"semibold"}),"|",(0,o.jsx)(n.code,{children:"light"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"none"})}),(0,o.jsx)(n.td,{align:"left",children:"Font weight of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"css"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"CSS"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"props-link",children:"Props Link:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{align:"left",children:"Name"}),(0,o.jsx)(n.th,{align:"left",children:"Type"}),(0,o.jsx)(n.th,{align:"left",children:"Default"}),(0,o.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"variant"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"link1"}),"|",(0,o.jsx)(n.code,{children:"link2"}),"|",(0,o.jsx)(n.code,{children:"link3"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"link1"})}),(0,o.jsx)(n.td,{align:"left",children:"Font size of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"component"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"Component"})}),(0,o.jsx)(n.td,{align:"left",children:"-"}),(0,o.jsx)(n.td,{align:"left",children:"Displayed as specific tag"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"weight"}),(0,o.jsxs)(n.td,{align:"left",children:[(0,o.jsx)(n.code,{children:"none"}),"|",(0,o.jsx)(n.code,{children:"semibold"})]}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"none"})}),(0,o.jsx)(n.td,{align:"left",children:"Font weight of text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{align:"left",children:"css"}),(0,o.jsx)(n.td,{align:"left",children:(0,o.jsx)(n.code,{children:"CSS"})}),(0,o.jsx)(n.td,{align:"left",children:"—"}),(0,o.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"component",children:"Component"}),"\n",(0,o.jsx)(n.p,{children:'Component type equals: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p" | "span"'}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(l.UW,{children:(0,o.jsxs)(n.p,{children:["Check out our ",(0,o.jsx)(n.a,{href:"/ladle?story=typography--body",children:"ladle"})," for more info on this\ncomponent."]})})]})}var g={MDXContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.ah)(),e.components).wrapper;return n?(0,o.jsx)(n,(0,i.Z)((0,r.Z)({},e),{children:(0,o.jsx)(j,(0,r.Z)({},e))})):j(e)},pageOpts:{filePath:"src/pages/design/typography.mdx",route:"/design/typography",headings:[{depth:1,value:"Typography",id:"typography"},{depth:3,value:"Import:",id:"import"},{depth:3,value:"Fonts",id:"fonts"},{depth:3,value:"Weights",id:"weights"},{depth:3,value:"Sizes",id:"sizes"},{depth:4,value:"Display",id:"display"},{depth:4,value:"Header",id:"header"},{depth:4,value:"Body",id:"body"},{depth:4,value:"Labels",id:"labels"},{depth:3,value:"Links",id:"links"},{depth:3,value:"Props Body:",id:"props-body"},{depth:3,value:"Props Display:",id:"props-display"},{depth:3,value:"Props Header:",id:"props-header"},{depth:3,value:"Props Label:",id:"props-label"},{depth:3,value:"Props Link:",id:"props-link"},{depth:3,value:"Component",id:"component"}],pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",banner:"Banner",box:"Box",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",carousel:"Carousel",chart:"Chart",checkbox:"Checkbox","dashboard-sidecard":"Dashboard Sidecard",dialog:"Dialog",divider:"Divider",dropdown:"Dropdown",error:"Error",file:"File",footer:"Footer",grid:"Grid",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists",modal:"Modal","multiple-dropdown":"Multiple Dropdown",navbar:"Navbar","otp-Input":"Otp Input","page-header":"Page Header",pagination:"Pagination",popover:"Popover",progress:"Progress","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio",rating:"Rating","rich-text-editor":"Rich Text Editor",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",skeleton:"Skeleton",slider:"Slider","speed-dial":"Speed Dial",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header","table-v2":"Table V2",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips","video-player":"Video Player",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"banner",route:"/components/banner"},{kind:"MdxPage",name:"box",route:"/components/box"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"carousel",route:"/components/carousel"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"checkbox",route:"/components/checkbox"},{kind:"MdxPage",name:"dashboard-sidecard",route:"/components/dashboard-sidecard"},{kind:"MdxPage",name:"dialog",route:"/components/dialog"},{kind:"MdxPage",name:"divider",route:"/components/divider"},{kind:"MdxPage",name:"dropdown",route:"/components/dropdown"},{kind:"MdxPage",name:"error",route:"/components/error"},{kind:"MdxPage",name:"file",route:"/components/file"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"grid",route:"/components/grid"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"modal",route:"/components/modal"},{kind:"MdxPage",name:"multiple-dropdown",route:"/components/multiple-dropdown"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"otp-Input",route:"/components/otp-Input"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"popover",route:"/components/popover"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"progress",route:"/components/progress"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"rating",route:"/components/rating"},{kind:"MdxPage",name:"rich-text-editor",route:"/components/rich-text-editor"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"skeleton",route:"/components/skeleton"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"speed-dial",route:"/components/speed-dial"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"table-v2",route:"/components/table-v2"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"video-player",route:"/components/video-player"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography",zindex:"Z-Index"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"},{kind:"MdxPage",name:"zindex",route:"/design/zindex"}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Typography"},pageNextRoute:"/design/typography",nextraLayout:l.ZP,themeConfig:a.Z},k=(0,t.j)(g)},30191:function(e,n,s){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var s=0,r=Array(n);s<n;s++)r[s]=e[s];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e,n)||function(e,n){if(e){if("string"==typeof e)return r(e,n);var s=Object.prototype.toString.call(e).slice(8,-1);if("Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return r(e,n)}}(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.d(n,{Z:function(){return i}})}},function(e){e.O(0,[9696,9774,2888,179],function(){return e(e.s=95532)}),_N_E=e.O()}]);