(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3866],{45785:function(e,n,r){"use strict";r.d(n,{Z:function(){return u}});var t,o,a=r(9576),i=r.n(a),c=r(82191),s=r(1145),d=r(31549),l="https://comfortdelgro.github.io/compass-design";function u(e){var n=e.card,r=void 0===n?(0,s.getStaticPath)("/static/social-previews/default-preview.jpg"):n,a=e.children,u=e.description,p=void 0===u?"React Compass provides a simple, customizable, and accessible library of React components.":u,g=e.largeCard,h=e.title,f=void 0===h?"React Compass: A popular React UI framework":h,m=e.type,x=(0,c.useRouter)(),v=r.startsWith("http")?r:"".concat(l).concat(r);return(0,d.jsxs)(i(),{children:[(0,d.jsx)("title",{children:f}),(0,d.jsx)("meta",{name:"description",content:p}),(0,d.jsx)("meta",{name:"twitter:card",content:void 0===g||g?"summary_large_image":"summary"}),(0,d.jsx)("meta",{property:"og:type",content:void 0===m?"website":m}),(0,d.jsx)("meta",{property:"og:title",content:f}),(0,d.jsx)("meta",{property:"og:url",content:"".concat(l).concat(x.asPath)}),(0,d.jsx)("meta",{property:"og:description",content:p}),(0,d.jsx)("meta",{property:"og:image",content:v}),t||(t=(0,d.jsx)("meta",{property:"og:ttl",content:"604800"})),o||(o=(0,d.jsx)("meta",{name:"docsearch:version",content:"master"})),a]})}},68195:function(e,n,r){"use strict";r.d(n,{Z:function(){return E}});var t,o,a,i,c=r(26098),s=r(66285),d=r(91542),l=r.n(d),u=r(15393),p=r(50436),g=r(37601),h=r(88024),f=r(17058),m=r(44194),x=r(73804),v=r(20312),j=r.n(v),y=r(31549),w=["code"];function b(e){var n,r,d,l,v,b,C,Z,k=e.code,E=(0,s.Z)(e,w),T=(n=m.useState(!1),d=(r=(0,x.Z)(n,2))[0],l=r[1],v=m.useRef(),b=m.useRef(!1),m.useEffect(function(){return b.current=!0,function(){b.current=!1}},[]),{copy:(C=(0,g.Z)((0,p.Z)().mark(function e(n){return(0,p.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),clearTimeout(v.current),v.current=setTimeout(function(){b&&l(!1)},1200),e.next=6,j()(n);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return C.apply(this,arguments)}),isCopied:d}),S=T.copy,R=T.isCopied,D=(0,u.useToast)(),B=(0,m.useState)("Ctrl +"),_=B[0],L=B[1];return(0,m.useEffect)(function(){L(window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"Ctrl + ")}),(0,y.jsxs)("button",(0,c.Z)((0,c.Z)({},E),{},{"aria-label":"Copy the code",type:"button",className:"cdg-copy",onClick:(Z=(0,g.Z)((0,p.Z)().mark(function e(n){return(0,p.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,S(k);case 3:D.show({color:"positive",title:"Copy successfully"});case 4:case"end":return e.stop()}},e)})),function(e){return Z.apply(this,arguments)}),children:[R?t||(t=(0,y.jsx)(f.default,{})):o||(o=(0,y.jsx)(h.default,{})),(0,y.jsxs)("span",{className:"cdg-copyKeypress",children:[a||(a=(0,y.jsx)("span",{children:"(or"}))," ",_,"C",i||(i=(0,y.jsx)("span",{children:")"}))]})]}))}var C=r(62903),Z=r(2663),k=["copyButtonHidden","code","language","component"],E=m.forwardRef(function(e,n){var r=e.copyButtonHidden,t=e.code,o=e.language,a=e.component,i=void 0===a?C.Z:a,d=(0,s.Z)(e,k),p=m.useMemo(function(){return l()(t.trim(),o)},[t,o]),g=(0,Z.Y)();return(0,y.jsx)(i,(0,c.Z)((0,c.Z)({ref:n},d),{},{children:(0,y.jsxs)("div",(0,c.Z)((0,c.Z)({},g),{},{children:[(0,y.jsx)("pre",{children:(0,y.jsx)("code",{className:"language-".concat(o),dangerouslySetInnerHTML:{__html:p}})}),void 0!==r&&r?null:(0,y.jsx)(u.NoSsr,{children:(0,y.jsx)(b,{code:t})})]}))}))})},43866:function(e,n,r){"use strict";r.d(n,{Z:function(){return ey}});var t,o,a,i,c,s=r(26098),d=r(17097),l=r.n(d),u=r(73804),p=r(15393),g=r(66285),h=r(91542),f=r.n(h),m=r(44194),x=r(42951),v=r.n(x),j=r(2663),y=r(93377),w=r.n(y),b=r(93855),C=r.n(b),Z=r(31549),k=["language","value","onChange","children","id"];function E(e){var n=e.language,r=e.value,t=e.onChange,o=e.children,a=e.id,i=(0,g.Z)(e,k),c=m.useRef(null),d=m.useRef(null),l=(0,j.Y)();return(0,Z.jsx)("div",(0,s.Z)((0,s.Z)({className:"markDownElement",ref:c,onKeyDown:function(e){if("Tab"!==e.key){if("Escape"===e.key){d.current.focus();return}if("Enter"===e.key){var n=c.current.querySelector("textarea");n!==document.activeElement&&(e.preventDefault(),e.stopPropagation(),n.focus())}}}},i),{},{children:(0,Z.jsxs)("div",(0,s.Z)((0,s.Z)({className:"cdg-root ".concat("cdg-root")},l),{},{children:[(0,Z.jsx)("div",{className:"scrollContainer ".concat("scrollContainer"),children:(0,Z.jsx)(v(),{className:C().simpleCodeEditor,highlight:function(e){return'<code class="language-'.concat(n,'">').concat(f()(e,n),"</code>")},id:a,value:r,onValueChange:t})}),(0,Z.jsx)(p.Box,{ref:d,tabIndex:0,className:"".concat(w().CdgDemoEditorInfo),dangerouslySetInnerHTML:{__html:"Press <kbd>Enter</kbd> to start editing"}}),o]}))}))}function T(e){return e.children?(0,Z.jsx)(p.Box,{css:{position:"absolute",top:20,left:"50%",transform:"translateX(-50%) translateY(-50%)",py:"2px",px:"6px",background:"$dangerBg",color:"$danger",border:"1px solid $danger",padding:"var(--cdg-spacing-2)",borderRadius:8},children:e.children}):null}var S=r(32530),R=r(10265),D=r(47773),B=r(75339),_=r(14880),L=r(48243),P=function(e){(0,B.Z)(r,e);var n=(0,_.Z)(r);function r(){var e;(0,S.Z)(this,r);for(var t=arguments.length,o=Array(t),a=0;a<t;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),(0,L.Z)((0,D.Z)(e),"state",{error:null}),e}return(0,R.Z)(r,[{key:"render",value:function(){var e=this.props,n=e.children,r=e.onResetDemoClick,a=this.state.error;return a?(0,Z.jsxs)("div",{children:[t||(t=(0,Z.jsx)(p.Typography.Label,{color:"error",children:"This demo had a runtime error!"})),o||(o=(0,Z.jsx)(p.Typography.Label,{children:"We would appreciate it if you directly in our issue tracker. You will be provided with a prefilled description that includes valuable information about this error."})),(0,Z.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:a}),(0,Z.jsx)(p.Button,{color:"secondary",onClick:r,children:"Reset demo"})]}):n}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),r}(m.Component),N=r(56321),I=r(82512),M=r.n(I),O=["children","name"],V=["children","iframe","name","onResetDemoClick"];function F(e){var n,r=e.children,t=e.name,o=(0,g.Z)(e,O),a=m.useRef(null),i=m.useReducer(function(){return!0},!1),c=(0,u.Z)(i,2),d=c[0],l=c[1];m.useEffect(function(){var e=a.current.contentDocument;null==e||"complete"!==e.readyState||d||l()},[d]);var p=null===(n=a.current)||void 0===n?void 0:n.contentDocument;return(0,Z.jsxs)(m.Fragment,{children:[(0,Z.jsx)("iframe",(0,s.Z)({className:M().demoIframe,onLoad:l,ref:a,title:"".concat(t," demo")},o)),!1!==d?N.createPortal((0,Z.jsx)(Z.Fragment,{children:r}),p.body):null]})}var H=m.memo(function(e){var n=e.children,r=e.iframe,t=void 0!==r&&r,o=e.name,a=e.onResetDemoClick,i=(0,g.Z)(e,V),c=t?F:m.Fragment,d=t?(0,s.Z)({name:o},i):{},l=(0,Z.jsx)(c,(0,s.Z)((0,s.Z)({},d),{},{children:n}));return(0,Z.jsx)(P,{name:o,onResetDemoClick:a,children:l})}),$=r(68195),A=r(51019);function W(e){var n=e.code,r=e.scope,t=e.onError,o=(0,A.ud)({code:n,scope:r}),a=o.element,i=o.error;return m.useEffect(function(){t(i)},[i,t]),a}var q=r(39378),Y=r(26405);r(99254);var z=m.createContext({codeVariant:Y.wp.TS,setCodeVariant:function(){}}),U=r(10473),K=r.n(U);function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/^\s+/gm,"")}var J=m.lazy(function(){return r.e(2856).then(r.bind(r,12856))});function Q(e){return e.replace(/(.+?)(\w+)\.\w+$$/,"$2")}function X(e){var n,r,t,o,a,i,c,d,l,g=e.demo,h=e.demoOptions,f=e.githubLocation,x=m.useContext(z).codeVariant,v=m.useMemo(function(){var e={};e="TS"===x&&g.rawTS?{codeVariant:"TS",githubLocation:f.replace(/\.js$/,".tsx"),raw:g.rawTS,Component:g.tsx,sourceLanguage:"tsx"}:{codeVariant:"JS",githubLocation:f,raw:g.raw,Component:g.js,sourceLanguage:"jsx"};var n=g.jsxPreview;return(0,s.Z)((0,s.Z)({scope:g.scope,jsxPreview:n},e),{},{title:"".concat(Q(f)," demo — ").concat("React Compass"),language:"en"})},[x,g,f,"en"]),j=m.useState(!1),y=(0,u.Z)(j,2),w=y[0],b=y[1],C=function(e){b("mouseenter"===e.type)},k=Q(v.githubLocation),S=m.useMemo(function(){return{maxWidth:h.maxWidth,height:h.height}},[h.height,h.maxWidth]);null==h.bg&&(h.bg="outlined"),h.iframe&&(h.bg=!0);var R=m.useState(h.defaultCodeOpen||!1),D=(0,u.Z)(R,2),B=D[0],_=D[1],L=m.useRef(!1);B&&(L.current=!0),m.useEffect(function(){var e=Q(window.location.hash);e&&k===e&&_(!0)},[k]);var P=!1!==h.defaultCodeOpen&&!!v.jsxPreview,N=m.useReducer(function(e){return e+1},0),I=(0,u.Z)(N,2),M=I[0],O=I[1],V="demo-".concat((0,q.uniqueId)()),F="demoSource-".concat((0,q.uniqueId)()),A=B||P,Y=m.useRef(null),U=!B&&P,X=U?v.jsxPreview:v.raw.replace(/\n$/,""),ee=m.useState({value:X,isPreview:U,initialEditorCode:X}),en=(0,u.Z)(ee,2),er=en[0],et=en[1],eo=function(){et({value:X,isPreview:U,initialEditorCode:X}),O()};m.useEffect(function(){et({value:X,isPreview:U,initialEditorCode:X})},[X,U]);var ea=m.useState(null),ei=(0,u.Z)(ea,2),ec=ei[0],es=ei[1],ed=m.useState(!1),el=(0,u.Z)(ed,2),eu=el[0],ep=el[1],eg=(t=(n={demoData:v,editorCode:er,setDebouncedError:es,liveDemoActive:eu}).demoData,o=n.editorCode,a=n.setDebouncedError,i=n.liveDemoActive,c=m.useMemo(function(){return(0,q.debounce)(a,300)},[a]),d=m.useMemo(function(){return r||(r=(0,Z.jsx)(t.Component,{}))},[t]),l=m.useMemo(function(){return(0,Z.jsx)(W,{scope:t.scope,onError:c,code:o.isPreview?G(t.raw).replace(G(t.jsxPreview),o.value):o.value})},[t,c,o.isPreview,o.value]),o.value===o.initialEditorCode&&!1===i?d:l);return(0,Z.jsxs)(p.Box,{children:[(0,Z.jsxs)(p.Box,{css:{position:"relative",outline:0,margin:"auto",display:"block",justifyContent:"center",background:"var(--cdg-color-background)",padding:"var(--cdg-spacing-8) var(--cdg-spacing-4)",borderTopRightRadius:"12px",borderTopLeftRadius:"12px",borderRight:"1px solid var(--cdg-color-gray40)",borderTop:"1px solid var(--cdg-color-gray40)",borderLeft:"1px solid var(--cdg-color-gray40)",marginTop:"var(--cdg-spacing-8) !important",overflow:"hidden"},onMouseEnter:C,onMouseLeave:C,children:[(0,Z.jsx)(p.Button,{ref:Y,tabIndex:-1,css:{position:"absolute",display:"none",top:"5px",left:"5px",width:"10px",maxWidth:"12px",height:"12px",pointerEvents:"none",background:"var(--cdg-color-gray40)",borderRadius:"10px",border:"none","&:focus":{background:"var(--cdg-color-cdgBlue40)"}}}),(0,Z.jsx)(H,{style:S,iframe:h.iframe,name:k,onResetDemoClick:eo,children:eg},M)]}),(0,Z.jsx)(m.Suspense,{fallback:(0,Z.jsx)(Z.Fragment,{}),children:(0,Z.jsx)(J,{codeOpen:B,codeVariant:x,demo:g,demoData:v,demoHovered:w,demoId:V,demoName:k,demoOptions:h,demoSourceId:F,initialFocusRef:Y,onCodeOpenChange:function(){_(function(e){return!e})},onResetDemoClick:eo,openDemoSource:A,showPreview:P})}),(0,Z.jsx)(p.Box,{children:B?(0,Z.jsx)(E,{value:er.value,onChange:function(e){et((0,s.Z)((0,s.Z)({},er),{},{value:e}))},onFocus:function(){ep(!0)},id:F,language:v.sourceLanguage,children:(0,Z.jsx)(T,{children:ec})}):(0,Z.jsx)($.Z,{className:K().demoCodeViewer,code:er.value,id:F,language:v.sourceLanguage})})]})}var ee=r(62903),en=r(65929),er=r(60555),et=r.n(er),eo=r(93674),ea=r(16371),ei=r.n(ea);function ec(e){var n=e.sourceLocation;return(0,Z.jsx)(ei(),{href:"https://github.com/comfortdelgro/compass-design/edit/main/apps".concat(n),target:"_blank",children:a||(a=(0,Z.jsx)(p.Button,{variant:"ghost",size:"sm",leftIcon:(0,Z.jsx)(eo.default,{}),children:"Edit page"}))})}var es=r(45785),ed=r(98187),el=r(53046),eu=r(45037),ep=r(14633),eg=r.n(ep),eh=r(56413),ef=r.n(eh);function em(e){var n,r,t=e.toc,o=m.useMemo(function(){var e;return e=[],t.forEach(function(n){e.push(n),n.children.length>0&&n.children.forEach(function(n){e.push(n)})}),e},[t]),a=m.useState(null),i=(0,u.Z)(a,2),c=i[0],s=i[1],d=m.useRef(!1),l=(0,eu.gp)(),g=m.useRef(null),h=m.useCallback(function(){if(!d.current){var e,n=document.querySelector("#document");if(n){for(var r=o.length-1;r>=0;r-=1){if(n.scrollTop<200){e={hash:null};break}var t=o[r],a=document.getElementById(t.hash);if(a&&a.offsetTop<n.scrollTop+n.clientHeight/8){e=t;break}}e&&c!==e.hash&&s(e.hash)}}},[c,o]);n=o.length>0?h:null,r=m.useMemo(function(){return n?eg()(n,166):q.noop},[n,166]),m.useEffect(function(){if(r!==q.noop){var e=document.querySelector("#document");return e&&e.addEventListener("scroll",r),function(){var e=document.querySelector("#document");e&&e.removeEventListener("scroll",r)}}},[r]),m.useEffect(function(){return function(){clearTimeout(g.current)}},[]);var f=function(e){var n,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return(0,Z.jsx)(ei(),{href:"#".concat(e.hash),onClick:(n=e.hash,function(e){(0,el.N)(e)||(d.current=!0,g.current=setTimeout(function(){d.current=!1},1e3),c!==n&&s(n))}),style:{textDecoration:"none"},children:(0,Z.jsx)(p.Box,{className:ef().DocsTOC,dangerouslySetInnerHTML:{__html:e.text},css:{color:c===e.hash?"var(--cdg-color-gray80)":"var(--cdg-color-gray70)",background:c===e.hash?"var(--cdg-color-gray30)":"none",borderRadius:5,textDecoration:"none",fontWeight:c===e.hash?"bold":"600",fontSize:14,paddingTop:r?"var(--cdg-spacing-1)":"var(--cdg-spacing-2)",paddingBottom:"var(--cdg-spacing-1)",paddingLeft:"var(--cdg-spacing-2)"}})})};return l||0===t.length?(0,Z.jsx)(Z.Fragment,{}):(0,Z.jsx)(p.Box,{css:{width:300,maxHeight:"calc(100vh - 51px)",overflowY:"scroll",padding:"var(--cdg-spacing-4)",position:"sticky",top:0},children:t.length>0?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(p.Typography.Header,{variant:"header5",css:{marginBottom:"var(--cdg-spacing-2)",fontWeight:"bold"},children:"Contents"}),(0,Z.jsx)(p.Box,{children:t.map(function(e){return(0,Z.jsxs)(p.Box,{children:[f(e),e.children.length>0?(0,Z.jsx)(p.Typography.Label,{children:e.children.map(function(e){return(0,Z.jsx)(p.Box,{css:{paddingLeft:"var(--cdg-spacing-3)"},children:f(e,!0)},e.text)})}):null]},e.text)})})]}):null})}var ex=r(12785),ev=r(94537);function ej(e){var n=e.children,r=e.description,t=e.location,o=e.title,a=e.toc;if(void 0===r)throw Error("Missing description in the page");return(0,Z.jsxs)(ed.Z,{children:[(0,Z.jsx)(es.Z,{title:"".concat(o," - React Compass"),description:r,largeCard:!1,card:"https://github.com/comfortdelgro/compass-design"}),(0,Z.jsxs)(p.Box,{css:{display:"flex",width:"100%"},children:[(0,Z.jsxs)(p.Box,{css:{overflowY:"scroll",width:"100%",minHeight:"calc(100vh - 51px)",display:"flex",flexDirection:"column",justifyContent:"space-between"},id:"document",children:[(0,Z.jsxs)(p.Box,{css:{padding:"var(--cdg-spacing-5) var(--cdg-spacing-16)",width:"100%","@max_1024":{padding:"var(--cdg-spacing-4)"}},children:[(0,Z.jsx)(ec,{sourceLocation:t}),n,(0,Z.jsx)(ev.Z,{tableOfContents:a})]}),i||(i=(0,Z.jsx)(ex.Z,{}))]}),(0,Z.jsx)(em,{toc:a})]})]})}function ey(e){var n=e.disableAd,r=void 0!==n&&n,t=e.disableToc,o=e.demos,a=void 0===o?{}:o,i=e.docs,d=e.demoComponents,u=e.srcComponents,p=i.en,g=p.description,h=p.location,f=p.rendered,x=p.title,v=p.toc,j=(0,en.V)().setPageProps;return(0,m.useEffect)(function(){null==j||j(p)},[p]),(0,Z.jsx)(ej,{description:g,disableAd:r,disableToc:void 0!==t&&t,location:h,title:x,toc:v,children:f.map(function(e,n){if("string"==typeof e)return(0,Z.jsx)(ee.Z,{renderedMarkdown:e},n);if(e.component){var t,o,i,g=e.component,f=null==u?void 0:u[g];if(void 0===f)throw Error("No component found at the path ".concat(et().join("docs/src",g)));return(0,Z.jsx)(f,(0,s.Z)((0,s.Z)({},e),{},{markdown:p}),n)}var m=e.demo,x=null==a?void 0:a[m];if(void 0===x){console.log(["Missing demo: ".concat(m,". You can use one of the following:"),l()(a)].join("\n"));var v=c||(c=(0,Z.jsx)("span",{role:"img",children:"⚠️"}));return(0,Z.jsxs)("div",{children:[v," Missing demo `",m,"` ",v]},n)}var j=h.split("/");j.pop();var y="".concat(j.join("/"),"/").concat(m);return(0,Z.jsx)(X,{demo:{raw:x.raw,js:null!==(o=d[x.module])&&void 0!==o?o:(t=x.module,function(){throw Error("No demo component provided for '".concat(t,"'"))}),scope:a.scope,jsxPreview:x.jsxPreview,rawTS:x.rawTS,tsx:null!==(i=d[x.moduleTS])&&void 0!==i?i:null,gaLabel:y.replace(/^\/docs\/data\//,"")},disableAd:r,demoOptions:e,githubLocation:"https://github.com/comfortdelgro/compass-design"},n)})})}},62903:function(e,n,r){"use strict";var t=r(26098),o=r(66285),a=r(44194),i=r(31549),c=["className","renderedMarkdown"],s=a.forwardRef(function(e,n){var r=e.className,a=e.renderedMarkdown,s=(0,o.Z)(e,c),d={};return"string"!=typeof a||a.includes('class="description hidden"')||(d.dangerouslySetInnerHTML={__html:a}),(0,i.jsx)("div",(0,t.Z)((0,t.Z)((0,t.Z)({className:["markdown-body",r,"markDownElement"].join(" ")},d),s),{},{ref:n}))});n.Z=s},12785:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t,o=r(84308),a=r(15393),i=r(16371),c=r.n(i),s=r(96526),d=r(31549);function l(e){return(0,d.jsx)(a.Box,{css:{padding:"var(--cdg-spacing-6) 0",background:"var(--cdg-color-gray20)"},children:(0,d.jsxs)(s.Z,{css:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsxs)(a.Box,{css:{display:"flex",alignItems:"center"},children:[t||(t=(0,d.jsx)(c(),{href:"/",children:(0,d.jsx)(o.default,{width:25,height:25})})),(0,d.jsx)(a.Typography.Body,{variant:"body2",css:{marginLeft:5},children:"\xa9 2023 CDG Zig. All rights reserved."})]}),(0,d.jsxs)(a.Box,{css:{display:"flex"},children:[(0,d.jsx)(a.Typography.Body,{variant:"body2",css:{marginRight:10},children:"Privacy"}),(0,d.jsx)(a.Typography.Body,{variant:"body2",css:{whiteSpace:"nowrap"},children:"Terms & Conditions"})]})]})})}},96526:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(26098),o=r(15393),a=r(31549);function i(e){var n=e.children,r=e.css,i=e.className;return(0,a.jsx)(o.Box,{className:"container ".concat(void 0===i?"":i),css:(0,t.Z)({"@media (min-width: 1200px)":{maxWidth:"1200px",margin:"auto"},"@media (min-width: 600px)":{paddingLeft:"24px",paddingRight:"24px"},"@media (max-width: 599px)":{paddingLeft:"16px",paddingRight:"16px"}},r),children:n})}},94537:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t,o,a,i=r(94291),c=r(33807),s=r(15393),d=r(16371),l=r.n(d),u=r(31549);function p(e){var n,r,d,p,g=-1===(p=(d=function e(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.reduce(function(n,r){return r.children&&r.children.length>1?n=e(r.children,n):n.push(r.children&&1===r.children.length?r.children[0]:r),n},r).filter(function(e){return!1!==e.inSideNav&&e.pathname.startsWith("/")})}([])).indexOf("/"))?{prevPage:null,nextPage:null}:{prevPage:null!==(n=d[p-1])&&void 0!==n?n:null,nextPage:null!==(r=d[p+1])&&void 0!==r?r:null},h=g.nextPage,f=g.prevPage;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(s.Box,{css:{display:"flex",justifyContent:"space-between",padding:"var(--cdg-spacing-4) 0",marginTop:"var(--cdg-spacing-4)"},children:[null!==f?(0,u.jsx)(l(),{href:h.pathname,children:(0,u.jsx)(s.Button,{variant:"ghost",leftIcon:t||(t=(0,u.jsx)(i.default,{})),children:f.title})}):o||(o=(0,u.jsx)("div",{})),null!==h?(0,u.jsx)(l(),{href:h.pathname,children:(0,u.jsx)(s.Button,{variant:"ghost",leftIcon:a||(a=(0,u.jsx)(c.default,{})),children:h.title})}):null]})})}},10473:function(e){e.exports={demoCodeViewer:"DemoCodeViewer_demoCodeViewer__Q5cmx"}},93377:function(e){e.exports={CdgDemoEditorInfo:"DemoEditor_CdgDemoEditorInfo__VPUk7"}},82512:function(e){e.exports={demoIframe:"DemoSandbox_demoIframe__MpeCf"}},93855:function(e){e.exports={simpleCodeEditor:"SimpleCodeEditor_simpleCodeEditor__FS10d"}},56413:function(e){e.exports={DocsTOC:"DocsAppToc_DocsTOC__zqp8e"}},91542:function(e,n,r){let t=r(89652);r(1751),r(61735),r(86890),r(24158),r(82719),r(47107),r(43815),r(71633),e.exports=function(e,n){let r;switch(n){case"ts":r=t.languages.tsx;break;case"js":r=t.languages.jsx;break;case"sh":throw Error(['docs-infra: Unsupported language: "sh" in:',"","```sh",e,"```","",'Use "bash" instead.',""].join("\n"));case"diff":(r={...t.languages.diff}).deleted=/^[-].*$/m;break;default:r=t.languages[n]}if(!r){if(n)throw Error(`unsupported language: "${n}", "${e}"`);r=t.languages.jsx}return t.highlight(e,r)}}}]);