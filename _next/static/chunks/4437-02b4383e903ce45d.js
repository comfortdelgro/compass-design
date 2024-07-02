(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4437],{40578:function(e,n,o){"use strict";o.d(n,{Z:function(){return k}});var t,r,i,c,a=o(26098),s=o(66285),d=o(91542),l=o.n(d),u=o(15393),p=o(50436),f=o(37601),m=o(88024),h=o(17058),g=o(44194),v=o(73804),x=o(20312),j=o.n(x),b=o(31549),y=["code"];function w(e){var n,o,d,l,x,w,C,Z,k=e.code,T=(0,s.Z)(e,y),R=(n=g.useState(!1),d=(o=(0,v.Z)(n,2))[0],l=o[1],x=g.useRef(),w=g.useRef(!1),g.useEffect(function(){return w.current=!0,function(){w.current=!1}},[]),{copy:(C=(0,f.Z)((0,p.Z)().mark(function e(n){return(0,p.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l(!0),clearTimeout(x.current),x.current=setTimeout(function(){w&&l(!1)},1200),e.next=6,j()(n);case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,null,[[0,8]])})),function(e){return C.apply(this,arguments)}),isCopied:d}),D=R.copy,E=R.isCopied,S=(0,u.useToast)(),M=(0,g.useState)("Ctrl +"),L=M[0],P=M[1];return(0,g.useEffect)(function(){P(window.navigator.platform.toUpperCase().indexOf("MAC")>=0?"⌘":"Ctrl + ")},[]),(0,b.jsxs)("button",(0,a.Z)((0,a.Z)({},T),{},{"aria-label":"Copy the code",type:"button",className:"cdg-copy",onClick:(Z=(0,f.Z)((0,p.Z)().mark(function e(n){return(0,p.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,D(k);case 3:S.show({color:"positive",title:"Copy successfully"});case 4:case"end":return e.stop()}},e)})),function(e){return Z.apply(this,arguments)}),children:[E?t||(t=(0,b.jsx)(h.default,{})):r||(r=(0,b.jsx)(m.default,{})),(0,b.jsxs)("span",{className:"cdg-copyKeypress",children:[i||(i=(0,b.jsx)("span",{children:"(or"}))," ",L,"C",c||(c=(0,b.jsx)("span",{children:")"}))]})]}))}var C=o(35727),Z=["copyButtonHidden","code","component"],k=g.forwardRef(function(e,n){var o=e.copyButtonHidden,t=e.code,r=e.component,i=void 0===r?C.Z:r,c=(0,s.Z)(e,Z),d=g.useMemo(function(){return l()(t.trim())},[t]);return(0,b.jsx)(i,(0,a.Z)((0,a.Z)({ref:n},c),{},{children:(0,b.jsxs)("div",{children:[(0,b.jsx)("pre",{children:(0,b.jsx)("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:d}})}),void 0!==o&&o?null:(0,b.jsx)(u.NoSsr,{children:(0,b.jsx)(w,{code:t})})]})}))})},24437:function(e,n,o){"use strict";o.d(n,{Z:function(){return ew}});var t,r,i,c,a,s,d,l,u,p,f,m,h,g,v=o(26098),x=o(17097),j=o.n(x),b=o(73804),y=o(15393),w=o(39378),C=o(44194),Z=o(40578),k=o(66285),T=o(91542),R=o.n(T),D=o(42951),E=o.n(D),S=o(31549),M=["value","onChange","children"];function L(e){var n=e.value,o=e.onChange,t=e.children,r=(0,k.Z)(e,M),i=C.useRef(null),c=C.useRef(null);return(0,S.jsxs)("div",(0,v.Z)((0,v.Z)({ref:i,onKeyDown:function(e){if("Tab"!==e.key){if("Escape"===e.key){c.current.focus();return}if("Enter"===e.key){var n=i.current.querySelector("textarea");n!==document.activeElement&&(e.preventDefault(),e.stopPropagation(),n.focus())}}}},r),{},{children:[(0,S.jsx)(y.Box,{className:"cdg-copy",css:{maxHeight:500,background:"var(--cdg-color-gray10)",overflow:"auto",".cdg-code-editor":{fontSize:13,lineHeight:1.5,background:"var(--cdg-color-gray10)",pre:{outline:"none",padding:"var(--cdg-spacing-4) !important"},textarea:{outline:"none",padding:"var(--cdg-spacing-4) !important"}}},children:(0,S.jsx)(E(),{value:n,onValueChange:o,className:"cdg-code-editor",highlight:function(e){return'<code class="language-tsx">'.concat(R()(e),"</code>")}})}),t]}))}function P(e){return e.children?(0,S.jsx)(y.Box,{css:{position:"absolute",top:20,left:"50%",transform:"translateX(-50%) translateY(-50%)",py:"2px",px:"6px",background:"var(--cdg-color-dangerBg)",color:"var(--cdg-color-danger)",border:"1px solid var(--cdg-color-danger)",padding:"var(--cdg-spacing-2)",borderRadius:8},children:e.children}):null}var B=o(51019);function I(e){var n=e.code,o=e.scope,t=e.onError,r=(0,B.ud)({code:n,scope:o}),i=r.element,c=r.error;return C.useEffect(function(){t(c)},[c,t]),i}var N=o(32530),O=o(10265),F=o(47773),_=o(75339),H=o(14880),A=o(48243),z=o(56321),$=["children","name"],W=["children","iframe","name","onResetDemoClick"],Y=function(e){(0,_.Z)(o,e);var n=(0,H.Z)(o);function o(){var e;(0,N.Z)(this,o);for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),(0,A.Z)((0,F.Z)(e),"state",{error:null}),e}return(0,O.Z)(o,[{key:"render",value:function(){var e=this.props,n=e.children,o=e.onResetDemoClick,i=this.state.error;return i?(0,S.jsxs)("div",{children:[t||(t=(0,S.jsx)(y.Typography.Label,{color:"error",children:"This demo had a runtime error!"})),r||(r=(0,S.jsx)(y.Typography.Label,{children:"We would appreciate it if you directly in our issue tracker. You will be provided with a prefilled description that includes valuable information about this error."})),(0,S.jsx)("pre",{style:{whiteSpace:"pre-wrap"},children:i}),(0,S.jsx)(y.Button,{color:"secondary",onClick:o,children:"Reset demo"})]}):n}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),o}(C.Component);function q(e){var n,o=e.children,t=e.name,r=(0,k.Z)(e,$),i=C.useRef(null),c=C.useReducer(function(){return!0},!1),a=(0,b.Z)(c,2),s=a[0],d=a[1];C.useEffect(function(){var e=i.current.contentDocument;null==e||"complete"!==e.readyState||s||d()},[s]);var l=null===(n=i.current)||void 0===n?void 0:n.contentDocument;return(0,S.jsxs)(C.Fragment,{children:[(0,S.jsx)("iframe",(0,v.Z)({style:{backgroundColor:"#000",flexGrow:1,height:"400",border:"0"},onLoad:d,ref:i,title:"".concat(t," demo")},r)),!1!==s?z.createPortal((0,S.jsx)(S.Fragment,{children:o}),l.body):null]})}var G=C.memo(function(e){var n=e.children,o=e.iframe,t=void 0!==o&&o,r=e.name,i=e.onResetDemoClick,c=(0,k.Z)(e,W),a=t?q:C.Fragment,s=t?(0,v.Z)({name:r},c):{},d=(0,S.jsx)(a,(0,v.Z)((0,v.Z)({},s),{},{children:n}));return(0,S.jsx)(Y,{name:r,onResetDemoClick:i,children:d})}),J=o(50436),K=o(37601),V=o(42096),U=o(20312),X=o.n(U),Q=o(16371),ee=o.n(Q),en=o(86575),eo=o(27328),et=o.n(eo),er=o(80461),ei=o.n(er);function ec(e,n,o){var t=document.createElement("input");t.type="hidden",t.name=n,t.value=o,e.appendChild(t)}var ea=function(e){var n=e.title,o=e.language;return'<!DOCTYPE html>\n<html lang="'.concat(o,'">\n  <head>\n    <title>').concat(n,'</title>\n    <link\n      rel="stylesheet"\n      href="https://fonts.googleapis.com/css?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100&display=swap"\n    />\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>')},es=function(e){var n,o,t=e.title,r=e.githubLocation,i=(o={"public/index.html":{content:ea(e)}},(0,A.Z)(o,"index.tsx",{content:"import * as React from 'react';\nimport * as ReactDOM from 'react-dom/client';\nimport '@comfortdelgro/react-compass/style.css'\nimport Demo from './demo';\n\nReactDOM.createRoot(document.querySelector(\"#root\")).render(\n  <React.StrictMode>\n    <Demo />\n  </React.StrictMode>\n);"}),(0,A.Z)(o,"demo.tsx",{content:e.raw}),(0,A.Z)(o,"tsconfig.json",{content:'{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": [\n      "dom",\n      "dom.iterable",\n      "esnext"\n    ],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "noEmit": true,\n    "jsx": "react"\n  },\n  "include": [\n    "src"\n  ]\n}\n'}),o),c=(!function(e){var n=[""];j()(e).filter(function(e){return -1===n.indexOf(e)}).forEach(function(n){e["@types/".concat(n)]="latest"})}(n=function(e){for(var n,o,t={},r={react:"latest","react-dom":"latest"},i=/^import\s'([^']+)'|import\s[\s\S]*?\sfrom\s+'([^']+)/gm,c=null;c=i.exec(e);){var a,s=null!==(a=c[2])&&void 0!==a?a:c[1],d="@"===s.charAt(0)?s.split("/",2).join("/"):s.split("/",1)[0];t[d]||d.startsWith(".")||(t[d]=r[d]?r[d]:"latest")}return n=t,o=(0,v.Z)((0,v.Z)({},n),{},{"react-dom":r["react-dom"],react:r.react}),window.muiDocConfig&&(o=window.muiDocConfig.csbIncludePeerDependencies(o,{versions:r})),t=o}(e.raw)),n.typescript="latest",{dependencies:n,devDependencies:{"react-scripts":"latest"}}),a=c.dependencies,s=c.devDependencies;return i["package.json"]={content:{description:r,dependencies:a,devDependencies:s,main:"index.tsx",scripts:{start:"react-scripts start"}}},{title:t,description:r,files:i,dependencies:a,devDependencies:s,openSandbox:function(e){var n,o,t,r,c,a;return o=(n={files:i,initialFile:e}).files,r=void 0===(t=n.initialFile)?"/App":t,c=ei().compressToBase64(et()({files:o})).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),void((a=document.createElement("form")).method="POST",a.target="_blank",a.action="https://codesandbox.io/api/v1/sandboxes/define",ec(a,"parameters",c),ec(a,"query","file=".concat(r).concat(r.match(/(\.tsx|\.ts|\.js)$/)?"":".tsx")),document.body.appendChild(a),a.submit(),document.body.removeChild(a))}}};function ed(e){var n,o=e.codeOpen,t=e.demo,r=e.demoData,g=e.initialFocusRef,v=e.onCodeOpenChange,x=e.onResetDemoClick,j=(n=(0,K.Z)((0,J.Z)().mark(function e(){return(0,J.Z)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X()(t.rawTS);case 2:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),b=(0,en.C)();return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(y.Box,{css:{background:"var(--cdg-color-gray30)",borderTop:"1px solid var(--cdg-color-gray40)",borderRight:"1px solid var(--cdg-color-gray40)",borderLeft:"1px solid var(--cdg-color-gray40)",padding:"var(--cdg-spacing-2) var(--cdg-spacing-3)",display:"flex",justifyContent:"space-between"},children:[!b&&(0,S.jsx)(y.Box,{children:(0,S.jsx)(y.Badge,{label:"Typescript",css:{color:"var(--cdg-color-gray80)",backgroundColor:"var(--cdg-color-gray40)"}})}),(0,S.jsxs)(y.Box,{children:[(0,S.jsxs)(y.TooltipTrigger,{children:[(0,S.jsx)(y.Button,{variant:"ghost",size:"sm",onClick:function(){document.cookie="sourceHintSeen=true;path=/;max-age=31536000",v()},children:i||(i=(0,S.jsx)(y.Icon,{icon:V.faCode}))}),(0,S.jsx)(y.Tooltip,{children:o?"Hide the source":"Show the source"})]}),(0,S.jsxs)(y.TooltipTrigger,{children:[(0,S.jsx)(y.Button,{variant:"ghost",size:"sm",onClick:function(){return es(r).openSandbox("/demo")},children:c||(c=(0,S.jsx)(y.Icon,{icon:V.faCodeFork}))}),a||(a=(0,S.jsx)(y.Tooltip,{children:"Edit in code Sandbox"}))]}),(0,S.jsxs)(y.TooltipTrigger,{children:[(0,S.jsx)(y.Button,{variant:"ghost",size:"sm",onClick:j,children:s||(s=(0,S.jsx)(y.Icon,{icon:V.faCopy}))}),d||(d=(0,S.jsx)(y.Tooltip,{children:"Copy the source code"}))]}),(0,S.jsxs)(y.TooltipTrigger,{children:[(0,S.jsx)(y.Button,{variant:"ghost",size:"sm",onClick:function(){g.current.style.display="block",g.current.focus()},children:l||(l=(0,S.jsx)(y.Icon,{icon:V.faInfinity}))}),u||(u=(0,S.jsx)(y.Tooltip,{children:"Reset focus to test keyboard navigation"}))]}),(0,S.jsxs)(y.TooltipTrigger,{children:[(0,S.jsx)(y.Button,{variant:"ghost",size:"sm",onClick:x,children:p||(p=(0,S.jsx)(y.Icon,{icon:V.faRefresh}))}),f||(f=(0,S.jsx)(y.Tooltip,{children:"Reset demo"}))]}),(0,S.jsxs)(y.TooltipTrigger,{children:[(0,S.jsx)(ee(),{href:r.githubLocation,children:m||(m=(0,S.jsx)(y.Button,{variant:"ghost",size:"sm",children:(0,S.jsx)(y.Icon,{icon:V.faFileCode})}))}),h||(h=(0,S.jsx)(y.Tooltip,{children:"View the source on Github"}))]})]})]})})}var el=o(93133),eu=o.n(el);function ep(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/^\s+/gm,"")}function ef(e){return e.replace(/(.+?)(\w+)\.\w+$$/,"$2")}function em(e){var n,o,t,r,i,c,a,s,d,l=e.demo,u=e.demoOptions,p=e.githubLocation,f=C.useMemo(function(){var e={};e={githubLocation:p.replace(/\.js$/,".tsx"),raw:l.rawTS,Component:l.tsx};var n=l.jsxPreview;return(0,v.Z)((0,v.Z)({scope:l.scope,jsxPreview:n},e),{},{title:"".concat(ef(p)," demo — ").concat("React Compass")})},[l,p]),m=C.useState(!1),h=(0,b.Z)(m,2),g=h[0],x=h[1],j=function(e){x("mouseenter"===e.type)},k=ef(f.githubLocation),T=C.useMemo(function(){return{maxWidth:u.maxWidth,height:u.height}},[u.height,u.maxWidth]);null==u.bg&&(u.bg="outlined"),u.iframe&&(u.bg=!0);var R=C.useState(u.defaultCodeOpen||!1),D=(0,b.Z)(R,2),E=D[0],M=D[1],B=C.useRef(!1);E&&(B.current=!0),C.useEffect(function(){var e=ef(window.location.hash);e&&k===e&&M(!0)},[k]);var N=!1!==u.defaultCodeOpen&&!!f.jsxPreview,O=C.useReducer(function(e){return e+1},0),F=(0,b.Z)(O,2),_=F[0],H=F[1],A=E||N,z=C.useRef(null),$=!E&&N,W=$?f.jsxPreview:f.raw.replace(/\n$/,""),Y=C.useState({value:W,isPreview:$,initialEditorCode:W}),q=(0,b.Z)(Y,2),J=q[0],K=q[1],V=function(){K({value:W,isPreview:$,initialEditorCode:W}),H()};C.useEffect(function(){K({value:W,isPreview:$,initialEditorCode:W})},[W,$]);var U=C.useState(null),X=(0,b.Z)(U,2),Q=X[0],ee=X[1],en=C.useState(!1),eo=(0,b.Z)(en,2),et=eo[0],er=eo[1],ei=(t=(n={demoData:f,editorCode:J,setDebouncedError:ee,liveDemoActive:et}).demoData,r=n.editorCode,i=n.setDebouncedError,c=n.liveDemoActive,a=C.useMemo(function(){return(0,w.debounce)(i,300)},[i]),s=C.useMemo(function(){return o||(o=(0,S.jsx)(t.Component,{}))},[t]),d=C.useMemo(function(){return(0,S.jsx)(I,{scope:t.scope,onError:a,code:r.isPreview?ep(t.raw).replace(ep(t.jsxPreview),r.value):r.value})},[t,a,r.isPreview,r.value]),r.value===r.initialEditorCode&&!1===c?s:d);return(0,S.jsxs)(y.Box,{children:[(0,S.jsxs)(y.Box,{css:{position:"relative",outline:0,margin:"auto",display:"block",justifyContent:"center",background:"var(--cdg-color-background)",padding:"var(--cdg-spacing-8) var(--cdg-spacing-4)",borderTopRightRadius:"12px",borderTopLeftRadius:"12px",borderRight:"1px solid var(--cdg-color-gray40)",borderTop:"1px solid var(--cdg-color-gray40)",borderLeft:"1px solid var(--cdg-color-gray40)",marginTop:"var(--cdg-spacing-8) !important",overflow:"hidden"},onMouseEnter:j,onMouseLeave:j,children:[(0,S.jsx)(y.Button,{ref:z,tabIndex:-1,css:{position:"absolute",display:"none",top:"5px",left:"5px",width:"10px",maxWidth:"12px",height:"12px",pointerEvents:"none",background:"var(--cdg-color-gray40)",borderRadius:"10px",border:"none","&:focus":{background:"var(--cdg-color-cdgBlue40)"}}}),(0,S.jsx)(G,{style:T,iframe:u.iframe,name:k,onResetDemoClick:V,children:ei},_)]}),(0,S.jsx)(C.Suspense,{fallback:(0,S.jsx)(S.Fragment,{}),children:(0,S.jsx)(ed,{codeOpen:E,demo:l,demoData:f,demoHovered:g,demoName:k,demoOptions:u,initialFocusRef:z,onCodeOpenChange:function(){M(function(e){return!e})},onResetDemoClick:V,openDemoSource:A,showPreview:N})}),(0,S.jsx)(y.Box,{children:E?(0,S.jsx)(L,{value:J.value,onChange:function(e){K((0,v.Z)((0,v.Z)({},J),{},{value:e}))},onFocus:function(){er(!0)},children:(0,S.jsx)(P,{children:Q})}):(0,S.jsx)(Z.Z,{code:J.value,className:eu().demoHighlightedCode})})]})}var eh=o(35727),eg=o(28833),ev=o.n(eg),ex=o(60555),ej=o.n(ex),eb=o(66339),ey=ev()(function(){return Promise.all([o.e(4308),o.e(9823),o.e(2712),o.e(5178)]).then(o.bind(o,55178))},{ssr:!1,loadableGenerated:{webpack:function(){return[55178]}}});function ew(e){var n=e.disableAd,o=void 0!==n&&n,t=e.disableToc,r=e.demos,i=void 0===r?{}:r,c=e.docs,a=e.demoComponents,s=e.srcComponents,d=c.description,l=c.location,u=c.rendered,p=c.title,f=c.toc,m=(0,eb.Z)().setPageProps;return(0,C.useEffect)(function(){null==m||m(c)},[c,m]),(0,S.jsx)(ey,{description:d,disableAd:o,disableToc:void 0!==t&&t,location:l,title:p,toc:f,children:u.map(function(e,n){if("string"==typeof e)return(0,S.jsx)(eh.Z,{renderedMarkdown:e},n);if(e.component){var t,r,d,u=e.component,p=null==s?void 0:s[u];if(void 0===p)throw Error("No component found at the path ".concat(ej().join("docs/src",u)));return(0,S.jsx)(p,(0,v.Z)((0,v.Z)({},e),{},{markdown:c}),n)}var f=e.demo,m=null==i?void 0:i[f];if(void 0===m){console.log(["Missing demo: ".concat(f,". You can use one of the following:"),j()(i)].join("\n"));var h=g||(g=(0,S.jsx)("span",{role:"img",children:"⚠️"}));return(0,S.jsxs)("div",{children:[h," Missing demo `",f,"` ",h]},n)}var x=l.split("/");x.pop();var b="".concat(x.join("/"),"/").concat(f);return(0,S.jsx)(em,{demo:{raw:m.raw,js:null!==(r=a[m.module])&&void 0!==r?r:(t=m.module,function(){throw Error("No demo component provided for '".concat(t,"'"))}),scope:i.scope,jsxPreview:m.jsxPreview,rawTS:m.rawTS,tsx:null!==(d=a[m.moduleTS])&&void 0!==d?d:null,gaLabel:b.replace(/^\/docs\/data\//,"")},disableAd:o,demoOptions:e,githubLocation:"https://github.com/comfortdelgro/compass-design"},n)})})}},35727:function(e,n,o){"use strict";var t=o(26098),r=o(66285),i=o(44194),c=o(31549),a=["className","renderedMarkdown"],s=i.forwardRef(function(e,n){var o=e.className,i=e.renderedMarkdown,s=(0,r.Z)(e,a),d={};return"string"!=typeof i||i.includes('class="description hidden"')||(d.dangerouslySetInnerHTML={__html:i}),(0,c.jsx)("div",(0,t.Z)((0,t.Z)((0,t.Z)({className:["markdown-body",o,"markDownElement"].join(" ")},d),s),{},{ref:n}))});n.Z=s},86575:function(e,n,o){"use strict";o.d(n,{C:function(){return i},gp:function(){return c}});var t=o(44194),r=function(e){var n=function(e){return window.matchMedia(e).matches},o=(0,t.useState)(n(e)),r=o[0],i=o[1],c=(0,t.useCallback)(function(){i(n(e))},[e]);return(0,t.useEffect)(function(){var n=window.matchMedia(e);return c(),n.addListener?n.addListener(c):n.addEventListener("change",c),function(){n.removeListener?n.removeListener(c):n.removeEventListener("change",c)}},[c,e]),r},i=function(){return r("(max-width: 480px)")},c=function(){return r("(max-width: 768px)")}},66339:function(e,n,o){"use strict";var t=o(44194),r=o(32622);n.Z=function(){return(0,t.useContext)(r.Z)}},93133:function(e){e.exports={demoHighlightedCode:"styles_demoHighlightedCode__IocIm"}},91542:function(e,n,o){let t=o(89652);o(1751),o(61735),o(47107),o(71633),e.exports=function(e){return t.highlight(e,t.languages.tsx)}}}]);