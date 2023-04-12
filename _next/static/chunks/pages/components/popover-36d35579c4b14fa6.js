(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7380],{38093:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover",function(){return n(64428)}])},64428:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var o=n(36690),r=n(93089),a=n(97458),l=n(53956),s=n(17864),i=n(47479);n(83570);var c=n(61351);n(54505);var d=n(36042),h=n.n(d),p=n(94335),u=n(48044),x=n(12174),m=n(52983),f=function(){return(0,a.jsx)("div",{className:"popover-content",style:{padding:"10px",background:"#ffffff",boxShadow:"0 2px 5px rgba(0,0,0,0.2)",borderRadius:"5px",width:"300px",height:"200px"},children:"Popover content here"})},g=function(){var e=(0,m.useState)("bottom-left"),t=e[0],n=e[1],o=(0,m.useState)(!1),r=o[0],l=o[1],s=(0,m.useState)(!1),i=s[0],c=s[1],d=function(){l(!0)},h=function(){c(!0)},g=function(e){n(e)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{width:"300px",padding:"20px"},children:(0,a.jsxs)(u.default.Select,{label:"Select direction",placeholder:"Select direction",onSelectionChange:g,selectedKey:t,children:[(0,a.jsx)(u.default.Item,{children:"bottom-left"},"bottom-left"),(0,a.jsx)(u.default.Item,{children:"bottom-right"},"bottom-right"),(0,a.jsx)(u.default.Item,{children:"bottom-center"},"bottom-center"),(0,a.jsx)(u.default.Item,{children:"top-right"},"top-right"),(0,a.jsx)(u.default.Item,{children:"top-left"},"top-left"),(0,a.jsx)(u.default.Item,{children:"top-center"},"top-center")]})}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"20px"},children:[(0,a.jsx)(x.default,{isOpen:r,anchor:(0,a.jsx)(p.default,{variant:"secondary",onPress:d,children:"Open"}),direction:t,onClose:function(){l(!1)},children:(0,a.jsx)(f,{})}),(0,a.jsx)(x.default,{isOpen:i,anchor:(0,a.jsx)(p.default,{variant:"secondary",onPress:h,children:"Open"}),direction:t,onClose:function(){c(!1)},children:(0,a.jsx)(f,{})})]})]})};function k(e){var t=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre",span:"span",a:"a"},(0,c.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"Popover"}),"\n",(0,a.jsx)(t.p,{children:"When you want to show a content on above and anchor with an element when user click on it, just use this component follow this guidelines."}),"\n",(0,a.jsx)(t.p,{children:"This component can be used for some cases like notification list, user menu."}),"\n",(0,a.jsx)(t.p,{children:"Actually, you can put whatever you want into the popover content, which is the children of Popover. Default display of popover is inline-block to keep it wraps around the anchor element."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"props",children:"Props:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{align:"left",children:"Name"}),(0,a.jsx)(t.th,{align:"left",children:"Type"}),(0,a.jsx)(t.th,{align:"left",children:"Default"}),(0,a.jsx)(t.th,{align:"left",children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{align:"left",children:"anchor"}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"React.ReactNode"})}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"-"})}),(0,a.jsx)(t.td,{align:"left",children:"Element that when you click on to show the Popover"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{align:"left",children:"isOpen"}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"boolean"})}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"-"})}),(0,a.jsx)(t.td,{align:"left",children:"Let Popover content open"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{align:"left",children:"offset"}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"number"})}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"10"})}),(0,a.jsx)(t.td,{align:"left",children:"Distance from anchor to popover content"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{align:"left",children:"attachToElement"}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"HTMLELement"})}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"document.body"})}),(0,a.jsx)(t.td,{align:"left",children:"Where to attach the popover"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{align:"left",children:"direction"}),(0,a.jsxs)(t.td,{align:"left",children:[(0,a.jsx)(t.code,{children:"bottom-right"})," ",(0,a.jsx)(t.code,{children:"bottom-left"})," ",(0,a.jsx)(t.code,{children:"bottom-center"})," ",(0,a.jsx)(t.code,{children:"top-right"})," ",(0,a.jsx)(t.code,{children:"top-left"})," ",(0,a.jsx)(t.code,{children:"top-center"})]}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"bottom-right"})}),(0,a.jsx)(t.td,{align:"left",children:"Direction of Popover content"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"methods",children:"Methods:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{align:"left",children:"Name"}),(0,a.jsx)(t.th,{align:"left",children:"Type"}),(0,a.jsx)(t.th,{align:"left",children:"Default"}),(0,a.jsx)(t.th,{align:"left",children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{align:"left",children:"onClose"}),(0,a.jsx)(t.td,{align:"left",children:(0,a.jsx)(t.code,{children:"() => void"})}),(0,a.jsx)(t.td,{align:"left",children:"Event that calls when use has clicked outside"}),(0,a.jsx)(t.td,{align:"left"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"import",children:"Import:"}),"\n",(0,a.jsx)(t.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsx)(t.code,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Popover"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {PopoverDirection} "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/popover'"})]})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h3,{id:"samples",children:"Samples:"}),"\n",(0,a.jsx)("section",{className:h().contentSliderDemo,children:(0,a.jsx)(g,{})}),"\n",(0,a.jsx)(t.pre,{"data-language":"js","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"js","data-theme":"default",children:[(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"isOpen"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setIsOpen"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"direction"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bottom-right'"})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:" "}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Popover"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"isOpen"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{isOpen}"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"anchor"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'secondary'"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"onPress"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"setIsOpen"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        }}"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      >"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"        Open"})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"direction"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{direction}"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"onClose"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"setIsLeftOpen"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }}"})}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  >"})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"SampleTopPopover"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Popover"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:")"})})]})}),"\n",(0,a.jsx)(s.UW,{children:(0,a.jsxs)(t.p,{children:["Check out our ",(0,a.jsx)(t.a,{href:"/ladle?story=badge--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}var j={MDXContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,c.ah)(),e.components).wrapper;return t?(0,a.jsx)(t,(0,r.Z)((0,o.Z)({},e),{children:(0,a.jsx)(k,(0,o.Z)({},e))})):k(e)},pageOpts:{filePath:"src/pages/components/popover.mdx",route:"/components/popover",headings:[{depth:1,value:"Popover",id:"popover"},{depth:3,value:"Props:",id:"props"},{depth:3,value:"Methods:",id:"methods"},{depth:3,value:"Import:",id:"import"},{depth:3,value:"Samples:",id:"samples"}],pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",carousel:"Carousel",chart:"Chart",checkbox:"Checkbox","dashboard-sidecard":"Dashboard Sidecard","date-picker":"Date Picker","date-range-picker":"Date Range Picker",dialog:"Dialog",dropdown:"Dropdown",file:"File",footer:"Footer",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists","multiple-dropdown":"Multiple Dropdown",navbar:"Navbar","page-header":"Page Header",pagination:"Pagination",popover:"Popover","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio","range-calendar":"Range Calendar","rich-text-editor":"Rich Text Editor",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",slider:"Slider",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header","table-v2":"Table V2",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips","video-player":"Video Player",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"carousel",route:"/components/carousel"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"checkbox",route:"/components/checkbox"},{kind:"MdxPage",name:"dashboard-sidecard",route:"/components/dashboard-sidecard"},{kind:"MdxPage",name:"date-picker",route:"/components/date-picker"},{kind:"MdxPage",name:"date-range-picker",route:"/components/date-range-picker"},{kind:"MdxPage",name:"dialog",route:"/components/dialog"},{kind:"MdxPage",name:"dropdown",route:"/components/dropdown"},{kind:"MdxPage",name:"file",route:"/components/file"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"multiple-dropdown",route:"/components/multiple-dropdown"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"popover",route:"/components/popover"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"range-calendar",route:"/components/range-calendar"},{kind:"MdxPage",name:"rich-text-editor",route:"/components/rich-text-editor"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"table-v2",route:"/components/table-v2"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"video-player",route:"/components/video-player"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],flexsearch:{codeblocks:!0},title:"Popover"},pageNextRoute:"/components/popover",nextraLayout:s.ZP,themeConfig:i.Z},y=(0,l.j)(j)},36042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi",iconWrapper:"Home_iconWrapper__pfdVa",contentSliderDemo:"Home_contentSliderDemo__C8wM5","slide-content":"Home_slide-content__7jA7J"}},16815:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>h});let o=n(60321),r=c(n(52983)),a=n(78810),l=n(12235),s=c(n(73713));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e){return e&&e.__esModule?e:{default:e}}let d=r.default.forwardRef((e,t)=>{let{css:n={},children:c,className:d,leftIcon:h,rightIcon:p,variant:u,size:x,fullWidth:m,loading:f,onMouseDown:g,ripple:k=!1,...j}=e,y=(0,a.useDOMRef)(t),v=(0,o.useButton)(j,y).buttonProps,b={variant:u,size:x,fullWidth:m,loading:f},P=f?{className:d,css:n,...b}:{className:d,css:n,...v,...j,...b};return r.default.createElement(r.default.Fragment,null,k?r.default.createElement(s.default,null,r.default.createElement(l.StyledButton,i({},P,{ref:y,onMouseDown:g}),f?r.default.createElement(l.StyledLoading,{hidden:!f,"aria-hidden":!f},r.default.createElement("div",{className:"dots"},r.default.createElement("i",null),r.default.createElement("i",null),r.default.createElement("i",null))):r.default.createElement(r.default.Fragment,null),r.default.createElement(l.StyledButtonContent,null,h||m&&p?r.default.createElement("div",{className:"icon left"},h):null,r.default.createElement("span",{className:"children"},c),p||m&&h?r.default.createElement("div",{className:"icon right"},p):null))):r.default.createElement(l.StyledButton,i({},P,{ref:y,onMouseDown:g}),f?r.default.createElement(l.StyledLoading,{hidden:!f,"aria-hidden":!f},r.default.createElement("div",{className:"dots"},r.default.createElement("i",null),r.default.createElement("i",null),r.default.createElement("i",null))):r.default.createElement(r.default.Fragment,null),r.default.createElement(l.StyledButtonContent,null,h||m&&p?r.default.createElement("div",{className:"icon left"},h):null,r.default.createElement("span",{className:"children"},c),p||m&&h?r.default.createElement("div",{className:"icon right"},p):null)))}),h=d},23153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"blink",{enumerable:!0,get:()=>r});let o=n(23797),r=(0,o.keyframes)({"0%":{opacity:"0.2"},"20%":{opacity:1},"100%":{opacity:"0.2"}})},12235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{StyledLoading:()=>s,StyledButtonContent:()=>i,StyledButton:()=>c});let o=n(61367),r=n(37250),a=n(23153),l=(0,o.keyframes)({to:{transform:"scale(4)",opacity:0}}),s=(0,r.styled)("span",{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"wait",".dots":{display:"inline-flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"2px"},".dots i":{display:"inline-block",flexShrink:0,width:".375em",height:".375em",borderRadius:"$full",background:"currentColor",animation:`${a.blink} 1.4s infinite both`},".dots i:nth-child(1)":{animationDelay:"0s"},".dots i:nth-child(2)":{animationDelay:"0.2s"},".dots i:nth-child(3)":{animationDelay:"0.4s"}}),i=(0,r.styled)("div",{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"nowrap",flexShrink:0,".icon":{width:"$4",height:"$4"},".icon.left":{marginRight:"$2",display:"flex",alignItems:"center",justifyContent:"center"},".icon.right":{marginLeft:"$2",display:"flex",alignItems:"center",justifyContent:"center"}}),c=(0,r.styled)("button",{position:"relative",flexShrink:0,fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",borderWidth:"$light",borderStyle:"solid",borderRadius:"$md",cursor:"pointer",transition:"$button",[`${s}`]:{display:"none"},[`${i}`]:{visibility:"visible"},"&:disabled":{background:"$divider",color:"$disabledText",borderColor:"$divider",cursor:"not-allowed"},"&:focus":{outline:"none",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"},"& .ripple":{position:"absolute",borderRadius:"50%",transform:"scale(0)",animation:`${l} 600ms linear`,backgroundColor:"rgba(255, 255, 255, 0.7)"},variants:{size:{lg:{fontSize:"$body2",padding:"$2 $6"},md:{fontSize:"$body3",padding:"$1_5 $4"},sm:{fontSize:"$label2",padding:"$1 $2_5"}},variant:{primary:{background:"$cdgBlue",color:"$whiteText",borderColor:"$cdgBlue","&:hover:enabled":{background:"$cdgBlue120",borderColor:"$cdgBlue120"}},secondary:{background:"transparent",color:"$cdgBlue",borderColor:"$cdgBlue","&:hover:enabled":{color:"$cdgBlue100",background:"$cdgBlue10",borderColor:"$cdgBlue120"}},danger:{background:"transparent",color:"$danger",borderColor:"$danger","&:hover:enabled":{background:"$dangerBg",borderColor:"$dangerBg"}},ghost:{background:"transparent",color:"$typeHeading",borderColor:"transparent","&:hover:enabled":{color:"$cdgBlue",background:"$cdgBlue10"}}},fullWidth:{true:{width:"100%",[`${i}`]:{".children":{flexGrow:1}}}},loading:{true:{[`${s}`]:{display:"flex"},[`${i}`]:{visibility:"hidden"}}},iconOnly:{true:{aspectRatio:"1 / 1",padding:0,[`${i}`]:{".children":{display:"flex",alignItems:"center",justifyContent:"center"}}}}},compoundVariants:[{size:"lg",iconOnly:!0,css:{height:"calc((1.5*$4) + (2*$2))"}},{size:"md",iconOnly:!0,css:{height:"calc((1.5*$3_5) + (2*$1_5))"}},{size:"sm",iconOnly:!0,css:{height:"calc((1.5*$3) + (2*$1))"}}],defaultVariants:{size:"md",variant:"primary",fullWidth:!1,loading:!1,iconOnly:!1}})},94335:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>a});let r=(o=n(16815),o&&o.__esModule?o:{default:o});r.default.displayName="Button";let a=r.default},73713:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>l});let r=(o=n(52983),o&&o.__esModule?o:{default:o}),a=({children:e})=>{let t=e=>{let t=e.currentTarget,n=document.createElement("span"),o=Math.max(t.clientWidth,t.clientHeight),r=o/2;n.style.width=n.style.height=`${o}px`,n.style.left=`${e.clientX-t.getBoundingClientRect().left-r}px`,n.style.top=`${e.clientY-t.getBoundingClientRect().top-r}px`,n.classList.add("ripple");let a=t.getElementsByClassName("ripple")[0];a&&a.remove(),t.appendChild(n)};return r.default.cloneElement(e,{onClick:t,style:{overflow:"hidden",position:"relative"}})},l=a},12174:function(e,t,n){"use strict";var o;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>a});let r=(o=n(38517),o&&o.__esModule?o:{default:o}),a=r.default},38517:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:()=>c});let o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=r?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(52983)),r=n(78810),a=n(3179);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}let i=o.default.forwardRef((e,t)=>{let{children:n,anchor:s,isOpen:i,offset:c=10,css:d={},direction:h="bottom-left",attachToElement:p,onClose:u=()=>{},...x}=e,[m,f]=(0,o.useState)({top:"0",right:"auto",bottom:"auto",left:"0"}),g=(0,r.useDOMRef)(t),k=(0,r.useDOMRef)();(0,o.useEffect)(()=>{if(k.current&&g.current){if(i){let e=p||document.body;j(),e.appendChild(k.current)}else k.current.parentElement&&k.current.parentElement.removeChild(k.current)}},[i]),(0,o.useEffect)(()=>{k.current&&g.current&&j()},[k.current,g.current]);let j=()=>{if(g.current&&k.current){let e=p||document.body;e.style.position="relative";let t={...m},n=g.current.children[0]||g.current,o=n.offsetParent||e,r=g.current,a=r.getBoundingClientRect();switch(h){case"bottom-left":default:t.top=n.offsetTop+a.height+c+"px",t.left=n.offsetLeft+"px",t.bottom="auto",t.right="auto";break;case"bottom-center":t.top=n.offsetTop+a.height+c+"px",t.left=n.offsetLeft+a.width/2+"px",t.bottom="auto",t.right="auto";break;case"bottom-right":t.top=n.offsetTop+a.height+c+"px",t.left="auto",t.bottom="auto",t.right=o.clientWidth-n.offsetLeft-a.width+"px";break;case"top-left":t.top="auto",t.left=n.offsetLeft+"px",t.bottom=o.clientHeight-n.offsetTop+c+"px",t.right="auto";break;case"top-center":t.top="auto",t.left=n.offsetLeft+a.width/2+"px",t.bottom=o.clientHeight-n.offsetTop+c+"px",t.right="auto";break;case"top-right":t.top="auto",t.left="auto",t.bottom=o.clientHeight-n.offsetTop+c+"px",t.right=o.clientWidth-n.offsetLeft-a.width+"px"}f(t)}},y=()=>{u()},v=(0,o.useCallback)(()=>{requestAnimationFrame(()=>{k.current&&!k.current.contains(document.activeElement)&&k.current&&!k.current.contains(document.activeElement)&&y()})},[g,y]);return o.default.createElement(a.StyledPopover,l({className:"cdg-popover",ref:g,css:d},x,{onBlur:v,tabIndex:0}),s,o.default.createElement(a.StyledPopoverContent,{ref:k,className:`cdg-popover-content ${h}`,style:{top:m.top,left:m.left,right:m.right,bottom:m.bottom},onBlur:v,tabIndex:0},n))}),c=i},3179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{StyledPopover:()=>r,StyledPopoverContent:()=>a});let o=n(37250),r=(0,o.styled)("div",{display:"inline-block"}),a=(0,o.styled)("div",{display:"block",position:"absolute",zIndex:"60","&.bottom-center":{transform:"translateX(-50%)"},"&.top-center":{transform:"translateX(-50%)"}})}},function(e){e.O(0,[9712,309,1950,4692,9634,7844,9929,80,6914,1867,3847,9774,2888,179],function(){return e(e.s=38093)}),_N_E=e.O()}]);