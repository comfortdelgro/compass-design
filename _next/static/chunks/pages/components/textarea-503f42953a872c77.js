(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4283],{86496:function(e,n,t){"use strict";t.r(n),t.d(n,{useField:function(){return o},useLabel:function(){return r}});var s=t(80309);function r(e){let{id:n,label:t,"aria-labelledby":r,"aria-label":o,labelElementType:l="label"}=e;n=(0,s.useId)(n);let a=(0,s.useId)(),i={};return t?(r=r?`${r} ${a}`:a,i={id:a,htmlFor:"label"===l?n:void 0}):r||o||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:i,fieldProps:(0,s.useLabels)({id:n,"aria-label":o,"aria-labelledby":r})}}function o(e){let{description:n,errorMessage:t,validationState:o}=e,{labelProps:l,fieldProps:a}=r(e),i=(0,s.useSlotId)([Boolean(n),Boolean(t),o]),d=(0,s.useSlotId)([Boolean(n),Boolean(t),o]);return{labelProps:l,fieldProps:a=(0,s.mergeProps)(a,{"aria-describedby":[i,d,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),descriptionProps:{id:i},errorMessageProps:{id:d}}}},92529:function(e,n,t){"use strict";t.r(n),t.d(n,{useFormattedTextField:function(){return d},useTextField:function(){return a}});var s=t(80309),r=t(86496),o=t(24692),l=t(52983);function a(e,n){let{inputElementType:t="input",isDisabled:l=!1,isRequired:a=!1,isReadOnly:i=!1,validationState:d,type:c="text",onChange:h=()=>{}}=e,{focusableProps:p}=(0,o.useFocusable)(e,n),{labelProps:x,fieldProps:u,descriptionProps:m,errorMessageProps:g}=(0,r.useField)(e),k=(0,s.filterDOMProps)(e,{labelable:!0}),j={type:c,pattern:e.pattern};return{labelProps:x,inputProps:(0,s.mergeProps)(k,"input"===t&&j,{disabled:l,readOnly:i,"aria-required":a||void 0,"aria-invalid":"invalid"===d||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:e.value,defaultValue:e.value?void 0:e.defaultValue,onChange:e=>h(e.target.value),autoComplete:e.autoComplete,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...p,...u}),descriptionProps:m,errorMessageProps:g}}function i(){return"undefined"!=typeof window&&window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges}function d(e,n,t){let r=(0,l.useRef)(n);r.current=n,(0,l.useEffect)(()=>{if(!i())return;let e=t.current,n=n=>{let t=r.current,s;switch(n.inputType){case"historyUndo":case"historyRedo":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":s=e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteContentForward":s=e.selectionEnd===e.selectionStart?e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd+1):e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteContentBackward":s=e.selectionEnd===e.selectionStart?e.value.slice(0,e.selectionStart-1)+e.value.slice(e.selectionStart):e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":s=e.value.slice(e.selectionStart);break;default:null!=n.data&&(s=e.value.slice(0,e.selectionStart)+n.data+e.value.slice(e.selectionEnd))}null!=s&&t.validate(s)||n.preventDefault()};return e.addEventListener("beforeinput",n,!1),()=>{e.removeEventListener("beforeinput",n,!1)}},[t,r]);let o=i()?null:e=>{let t=e.target.value.slice(0,e.target.selectionStart)+e.data+e.target.value.slice(e.target.selectionEnd);n.validate(t)||e.preventDefault()},{labelProps:d,inputProps:c,descriptionProps:h,errorMessageProps:p}=a(e,t),x=(0,l.useRef)(null);return{inputProps:(0,s.mergeProps)(c,{onBeforeInput:o,onCompositionStart(){let{value:e,selectionStart:n,selectionEnd:s}=t.current;x.current={value:e,selectionStart:n,selectionEnd:s}},onCompositionEnd(){if(!n.validate(t.current.value)){let{value:e,selectionStart:s,selectionEnd:r}=x.current;t.current.value=e,t.current.setSelectionRange(s,r),n.setInputValue(e)}}}),labelProps:d,descriptionProps:h,errorMessageProps:p}}},54648:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textarea",function(){return t(47488)}])},47479:function(e,n,t){"use strict";var s=t(36690),r=t(93089),o=t(97458),l=t(87495),a=(0,r.Z)((0,s.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,o.jsx)("div",{style:{backgroundImage:"url(/compass-design/logo.svg)",width:"1.75rem",aspectRatio:"1 / 1",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,o.jsx)("div",{style:{fontWeight:700},children:"Compass Design"})]})},getNextSeoProps:function(){var e=(0,l.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});n.Z=a},47488:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c.ZP}});var s,r=t(36690),o=t(93089),l=t(97458),a=t(66038),i=t(47479);t(71505);var d=t(61351);t(54505);var c=t(87495),h=t(36042),p=t.n(h),x=t(67514),u={filePath:"src/pages/components/textarea.mdx",route:"/components/textarea",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{accordions:"Accordions",alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",calendar:"Calendar",cards:"Cards",carousel:"Carousel",chart:"Chart",checkbox:"Checkbox","dashboard-sidecard":"Dashboard Sidecard","date-picker":"Date Picker","date-range-picker":"Date Range Picker",dialog:"Dialog",dropdown:"Dropdown",file:"File",footer:"Footer",icon:"Icon",link:"Link",list:"List","menu-lists":"Menu Lists","multiple-dropdown":"Multiple Dropdown",navbar:"Navbar","page-header":"Page Header",pagination:"Pagination",popover:"Popover","progress-bar":"Progress Bar","quantity-toggle":"Quantity Toggle",radio:"Radio","range-calendar":"Range Calendar",searchField:"Searchfield",sidebar:"Sidebar",sidenav:"Sidenav",slider:"Slider",spinners:"Spinners","sub-banner":"Sub Banner","sub-header":"Sub Header","table-v2":"Table V2",tabs:"Tabs","tag-box":"Tag Box",textarea:"Textarea",textField:"Textfield",toast:"Toast",toggle:"Toggle",tooltips:"Tooltips","video-player":"Video Player",wizard:"Wizard"}},{kind:"MdxPage",name:"accordions",route:"/components/accordions"},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"calendar",route:"/components/calendar"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"carousel",route:"/components/carousel"},{kind:"MdxPage",name:"chart",route:"/components/chart"},{kind:"MdxPage",name:"checkbox",route:"/components/checkbox"},{kind:"MdxPage",name:"dashboard-sidecard",route:"/components/dashboard-sidecard"},{kind:"MdxPage",name:"date-picker",route:"/components/date-picker"},{kind:"MdxPage",name:"date-range-picker",route:"/components/date-range-picker"},{kind:"MdxPage",name:"dialog",route:"/components/dialog"},{kind:"MdxPage",name:"dropdown",route:"/components/dropdown"},{kind:"MdxPage",name:"file",route:"/components/file"},{kind:"MdxPage",name:"footer",route:"/components/footer"},{kind:"MdxPage",name:"icon",route:"/components/icon"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"list",route:"/components/list"},{kind:"MdxPage",name:"menu-lists",route:"/components/menu-lists"},{kind:"MdxPage",name:"multiple-dropdown",route:"/components/multiple-dropdown"},{kind:"MdxPage",name:"navbar",route:"/components/navbar"},{kind:"MdxPage",name:"page-header",route:"/components/page-header"},{kind:"MdxPage",name:"pagination",route:"/components/pagination"},{kind:"MdxPage",name:"popover",route:"/components/popover"},{kind:"MdxPage",name:"progress-bar",route:"/components/progress-bar"},{kind:"MdxPage",name:"quantity-toggle",route:"/components/quantity-toggle"},{kind:"MdxPage",name:"radio",route:"/components/radio"},{kind:"MdxPage",name:"range-calendar",route:"/components/range-calendar"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"sidebar",route:"/components/sidebar"},{kind:"MdxPage",name:"sidenav",route:"/components/sidenav"},{kind:"MdxPage",name:"slider",route:"/components/slider"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"sub-banner",route:"/components/sub-banner"},{kind:"MdxPage",name:"sub-header",route:"/components/sub-header"},{kind:"MdxPage",name:"table-v2",route:"/components/table-v2"},{kind:"MdxPage",name:"tabs",route:"/components/tabs"},{kind:"MdxPage",name:"tag-box",route:"/components/tag-box"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"},{kind:"MdxPage",name:"toast",route:"/components/toast"},{kind:"MdxPage",name:"toggle",route:"/components/toggle"},{kind:"MdxPage",name:"tooltips",route:"/components/tooltips"},{kind:"MdxPage",name:"video-player",route:"/components/video-player"},{kind:"MdxPage",name:"wizard",route:"/components/wizard"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Text areas",position:{start:{line:6,column:3,offset:226},end:{line:6,column:13,offset:236}}}],position:{start:{line:6,column:1,offset:224},end:{line:6,column:13,offset:236}},value:"Text areas"},{type:"heading",depth:3,children:[{type:"text",value:"Import:",position:{start:{line:12,column:5,offset:365},end:{line:12,column:12,offset:372}}}],position:{start:{line:12,column:1,offset:361},end:{line:12,column:12,offset:372}},value:"Import:"},{type:"heading",depth:3,children:[{type:"text",value:"Basic text areas:",position:{start:{line:26,column:5,offset:524},end:{line:26,column:22,offset:541}}}],position:{start:{line:26,column:1,offset:520},end:{line:26,column:22,offset:541}},value:"Basic text areas:"},{type:"heading",depth:3,children:[{type:"text",value:"Custom styling:",position:{start:{line:89,column:5,offset:1859},end:{line:89,column:20,offset:1874}}}],position:{start:{line:89,column:1,offset:1855},end:{line:89,column:20,offset:1874}},value:"Custom styling:"},{type:"heading",depth:3,children:[{type:"text",value:"Props:",position:{start:{line:118,column:5,offset:2406},end:{line:118,column:11,offset:2412}}}],position:{start:{line:118,column:1,offset:2402},end:{line:118,column:11,offset:2412}},value:"Props:"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:u.pageMap,route:u.route};var m="Text areas";function g(e){var n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",div:"div",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,d.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"Text areas"}),"\n",(0,l.jsx)(n.p,{children:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"import",children:"Import:"}),"\n",(0,l.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Textarea} "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})})}),"\n",(0,l.jsx)(n.p,{children:"or"}),"\n",(0,l.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Textarea "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/textarea'"})]})})})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"basic-text-areas",children:"Basic text areas:"}),"\n",(0,l.jsxs)("section",{className:p().textAreaShowcaseContainer,children:[(0,l.jsx)(x.default,{placeholder:"Enter your message"}),(0,l.jsx)(x.default,{label:"Text Label",placeholder:"Enter your message",isDisabled:!0}),(0,l.jsx)(x.default,{label:"Text Label",placeholder:"Enter your message",value:"Lorem ipsum dolor sit amet."}),(0,l.jsx)(x.default,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,value:"Lorem ipsum dolor sit amet."}),(0,l.jsx)(x.default,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50,value:"Lorem ipsum dolor sit amet.",onChange:function(){}}),(0,l.jsx)(x.default,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50,isErrored:!0})]}),"\n",(0,l.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(n.pre,{children:(0,l.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textarea"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your message'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textarea"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Text Label'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your message'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDisabled"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textarea"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Text Label'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your message'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"wordCount"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Lorem ipsum dolor sit amet.'"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textarea"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Text Label'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your message'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"wordCount"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"maxLength"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Lorem ipsum dolor sit amet.'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"onChange"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {}}"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textarea"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Text Label'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your message'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"wordCount"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"maxLength"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isErrored"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})})]})})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"custom-styling",children:"Custom styling:"}),"\n",(0,l.jsxs)(n.p,{children:["You can style React Compass's components with the css prop. ",(0,l.jsx)("br",{}),"\nWith css prop, you can basically do anything that css can do."]}),"\n",(0,l.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,l.jsx)(x.default,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50,isErrored:!0,css:{height:"10em",width:"50em"}})}),"\n",(0,l.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,l.jsx)(n.pre,{children:(0,l.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textarea"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Text Label'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your message'"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"wordCount"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"maxLength"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isErrored"})]}),"\n",(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"css"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{height"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'10em'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" width"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'50em'"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})]}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"props",children:"Props:"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{align:"left",children:"Name"}),(0,l.jsx)(n.th,{align:"left",children:"Type"}),(0,l.jsx)(n.th,{align:"left",children:"Default"}),(0,l.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"placeholder"})}),(0,l.jsxs)(n.td,{align:"left",children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"null"})]}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"null"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Placeholder of the text field"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"label"})}),(0,l.jsxs)(n.td,{align:"left",children:[(0,l.jsx)(n.code,{children:"string"})," | ",(0,l.jsx)(n.code,{children:"null"})]}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"null"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Label of the text field"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"isErrored"})}),(0,l.jsxs)(n.td,{align:"left",children:[(0,l.jsx)(n.code,{children:"true"})," | ",(0,l.jsx)(n.code,{children:"false"})]}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Throw error when input value is wrong"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"value"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"string"})}),(0,l.jsx)(n.td,{align:"left",children:"—"}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Input value"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"isDisabled"})}),(0,l.jsxs)(n.td,{align:"left",children:[(0,l.jsx)(n.code,{children:"false"}),"| ",(0,l.jsx)(n.code,{children:"true"})]}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Disable the text field when true"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"css "})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"CSS"})}),(0,l.jsx)(n.td,{align:"left",children:"—"}),(0,l.jsx)(n.td,{align:"left"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"wordCount"})}),(0,l.jsxs)(n.td,{align:"left",children:[(0,l.jsx)(n.code,{children:"false"}),"| ",(0,l.jsx)(n.code,{children:"true"})]}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"false"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Show word count of the input when true"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"maxLength"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"number"})}),(0,l.jsx)(n.td,{align:"left",children:"—"}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"Limit length of the input"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"onChange"})}),(0,l.jsx)(n.td,{align:"left",children:(0,l.jsx)(n.code,{children:"function"})}),(0,l.jsx)(n.td,{align:"left",children:"—"}),(0,l.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(c.UW,{children:(0,l.jsxs)(n.p,{children:["Check out our ",(0,l.jsx)(n.a,{href:"/ladle?story=textarea--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.ah)(),e.components).wrapper;return n?(0,l.jsx)(n,(0,o.Z)((0,r.Z)({},e),{children:(0,l.jsx)(g,(0,r.Z)({},e))})):g(e)}u.title="string"==typeof m&&m||"Textarea";var j=function(e){return(0,l.jsx)(a.mK.Provider,{value:e,children:(0,l.jsx)(k,{})})};(s=globalThis).__nextra_pageContext__||(s.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/components/textarea"]={Content:j,pageOpts:u,themeConfig:i.Z}},36042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi",iconWrapper:"Home_iconWrapper__pfdVa",contentSliderDemo:"Home_contentSliderDemo__C8wM5","slide-content":"Home_slide-content__7jA7J"}},67514:function(e,n,t){"use strict";var s;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:()=>o});let r=(s=t(81902),s&&s.__esModule?s:{default:s});r.default.displayName="Textarea";let o=r.default},81902:function(e,n,t){"use strict";var s;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:()=>h});let r=t(92529),o=(s=t(52983),s&&s.__esModule?s:{default:s}),l=t(32553),a=t(78810),i=t(57577);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}let c=o.default.forwardRef((e,n)=>{let{css:t={},label:s,isDisabled:c,isErrored:h,isRequired:p,errorMessage:x,wordCount:u,maxLength:m,onChange:g,onChangeEvent:k,...j}=e,f={label:s,maxLength:m,inputElementType:"textarea",...j},y=(0,a.useDOMRef)(n),{labelProps:v,inputProps:b,descriptionProps:P}=(0,r.useTextField)(f,y),w={...j},C=e=>{g?.(e.target.value),k?.(e)};return o.default.createElement(i.StyledTextareaWrapper,d({css:t},w),s&&o.default.createElement(l.StyledTextFieldLabel,d({},v,{isDisabled:!!c}),s,p&&o.default.createElement("span",null,"*")),o.default.createElement(i.StyledTextarea,d({},b,{isErrored:h},{ref:y,isErrored:!!h,disabled:!!c,onChange(e){C(e)}})),u&&o.default.createElement(l.StyledTextFieldHelperText,d({className:"word-count"},P),b.value?.toString().length??"0",m?`/${m}`:null),h&&x&&o.default.createElement(l.StyledTextFieldHelperText,{error:!0},x))}),h=c},57577:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{StyledTextareaWrapper:()=>r,StyledTextarea:()=>o});let s=t(37250),r=(0,s.styled)("div",{display:"flex",flexDirection:"column",alignItems:"flex-start",fontFamily:"$sans",width:"fit-content",".word-count":{width:"100%",display:"flex",justifyContent:"flex-end"}}),o=(0,s.styled)("textarea",{fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",padding:"$1_5 $3",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderRadius:"$md",color:"$typeHeading",backgroundColor:"$whiteText",transition:"border-color 250ms ease 0s","&:focus":{outline:"none",borderColor:"$cdgBlue"},"&:disabled":{cursor:"not-allowed"},variants:{isErrored:{true:{borderColor:"$danger","&:focus":{borderColor:"$danger"}}}},defaultVariants:{isErrored:!1}})},32553:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{StyledTextFieldWrapper:()=>r,StyledTextFieldLabel:()=>o,StyledTextFieldBox:()=>l,StyledTextField:()=>a,StyledTextFieldHelperText:()=>i});let s=t(37250),r=(0,s.styled)("div",{width:"100%",display:"block",fontFamily:"$sans"}),o=(0,s.styled)("label",{fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",display:"block",marginBottom:"$1",color:"$gray90",span:{marginLeft:"$1",color:"$danger"},variants:{isDisabled:{true:{color:"$disabledText"}}}}),l=(0,s.styled)("div",{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",borderWidth:"1px",borderStyle:"solid",borderColor:"$divider",borderRadius:"$md",color:"$typeHeading",backgroundColor:"$whiteText",transition:"$default","&:focus-within":{borderColor:"$cdgBlue",".left-icon":{color:"$cdgBlue"}},".left-icon, .right-icon":{color:"$typeHeading",transition:"$default"},".left-icon":{width:"$5",height:"$5",marginLeft:"$2_5",marginRight:"-$1"},".prefix":{minWidth:"$5",height:"$5",marginLeft:"$2_5",marginRight:"-$1",display:"flex",justifyContent:"center",alignItems:"center"},".right-icon":{width:"$4",height:"$4",marginRight:"$2_5",marginLeft:"-$1"},".password-icon":{fontSize:"0.8em",marginRight:"$2_5",marginLeft:"-$1"},variants:{isDisabled:{true:{color:"$disabledText",backgroundColor:"$gray20",".left-icon, .right-icon":{color:"$disabledText"}}},isErrored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}}}}),a=(0,s.styled)("input",{width:"100%",fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",padding:"$1_5 $3",border:0,borderRadius:"$md",backgroundColor:"transparent","&:focus":{outline:"none"},"&:disabled":{cursor:"not-allowed"}}),i=(0,s.styled)("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"}}}})},78810:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useDOMRef",{enumerable:!0,get:()=>r});let s=t(52983);function r(e){let n=(0,s.useRef)(null);return(0,s.useImperativeHandle)(e,()=>n.current),n}}},function(e){e.O(0,[7226,309,1950,4692,9774,2888,179],function(){return e(e.s=54648)}),_N_E=e.O()}]);