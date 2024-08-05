import{j as f}from"./jsx-runtime-9ef10904.js";import{r as d}from"./index-6c164b11.js";import"./Row-7065e1c2.js";import{u as _e}from"./useKeyboardNavigation-7c849a98.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import{c as E,C as Q}from"./objectToCSS-e90bd687.js";import{u as V}from"./use-dom-ref-7c72e1a5.js";import{u as we}from"./useDrag-6ba0f8b4.js";const he="data-cdg-drawer-scalable-bg",me=16,w={ROOT:"cdg-drawer",HEADER:"cdg-drawer-header",FOOTER:"cdg-drawer-footer",CONTENT:"cdg-drawer-content",CONTENT_SCROLLABLE:"cdg-drawer-content-scrollable",SCALE_DOCUMENT:"cdg-webpage-scaled-by-drawer",SCALE_TARGET:"cdg-drawer-scale-layer",SCALE_DRAWER_OPENED:"cdg-drawer-scale-layer-scaled"},u={BACKDROP_BG:"--cdg-drawer-backdrop-bg",BACKDROP_BLUR:"--cdg-drawer-backdrop-blur",BACKDROP_OPACITY:"--cdg-drawer-backdrop-opacity",BACKDROP_TRANSITION:"--cdg-drawer-backdrop-transition",SCALE:"--cdg-drawer-scale",SCALE_OFFSET:"--cdg-drawer-scale-offset"},ge="_drawer_1adt9_5",Ee="_modal_1adt9_5",De="_drawerHeader_1adt9_11",Oe="_drawerContent_1adt9_12",pe="_drawerFooter_1adt9_13",Ce="_slideInLeft_1adt9_1",Re="_slideOutLeft_1adt9_1",Se="_slideInRight_1adt9_1",ye="_slideOutRight_1adt9_1",Ae="_slideInUp_1adt9_1",Le="_slideOutUp_1adt9_1",be="_slideInDown_1adt9_1",Ie="_slideOutDown_1adt9_1",re={drawer:ge,modal:Ee,drawerHeader:De,drawerContent:Oe,drawerFooter:pe,slideInLeft:Ce,slideOutLeft:Re,slideInRight:Se,slideOutRight:ye,slideInUp:Ae,slideOutUp:Le,slideInDown:be,slideOutDown:Ie},K=d.forwardRef(({children:t,className:r="",css:n,...a},s)=>{const e=V(s),l=f.jsx("footer",{...a,ref:e,className:E(re.drawerFooter,w.FOOTER,r),children:t});return n?f.jsx(Q,{css:n,childrenRef:e,children:l}):l});K.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const Y=d.forwardRef(({children:t,className:r="",css:n,...a},s)=>{const e=V(s),l=f.jsx("header",{...a,ref:e,className:E(re.drawerHeader,w.HEADER,r),children:t});return n?f.jsx(Q,{css:n,childrenRef:e,children:l}):l});Y.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};const U=new WeakMap;function T(t,r,n={cache:!1}){if(!t||!(t instanceof HTMLElement))return;const a={};Object.entries(r).forEach(([s,e])=>{n.ignoreNilValue&&e==null||(a[s]=t.style.getPropertyValue(s),t.style.setProperty(s,e??null))}),n.cache&&(n.cache==="once"&&U.has(t)||U.set(t,a))}function M(t,r){if(!t||!(t instanceof HTMLElement))return;const n=U.get(t);if(!r){n&&(T(t,n),U.delete(t));return}for(const a of r)t.style.setProperty(a,(n==null?void 0:n[a])??null)}const Ne=t=>{var n;return d.isValidElement(t)&&t.type.toString()===Symbol.for("react.fragment").toString()&&((n=t.props)==null?void 0:n.children)||t},j=(t,r,n)=>{const a=[],s=d.Children.map(Ne(t),e=>{var l;return!d.isValidElement(e)||e.type!==r?e:n?(a.push(d.cloneElement(e,{...e.props,...n,className:E(((l=e.props)==null?void 0:l.className)??"",(n==null?void 0:n.className)??""),style:e.props.style??n.style})),null):(a.push(d.cloneElement(e,e.props)),null)});return{matchedNode:a.length>0?a[0]:void 0,rest:s}},ne=(t,r)=>{const{backdropStyles:n,customStyles:a}=d.useMemo(()=>{const s=r==null?void 0:r.blur,e={[u.BACKDROP_OPACITY]:r==null?void 0:r.opacity,[u.BACKDROP_BLUR]:typeof s=="number"?`${s}px`:s,[u.BACKDROP_BG]:r==null?void 0:r.background};if(typeof window>"u"||!t.current)return{backdropStyles:e,customStyles:e};const l=window.getComputedStyle(t.current);return{backdropStyles:Object.assign({[u.BACKDROP_OPACITY]:l.getPropertyValue(u.BACKDROP_OPACITY),[u.BACKDROP_BLUR]:l.getPropertyValue(u.BACKDROP_BLUR),[u.BACKDROP_BG]:l.getPropertyValue(u.BACKDROP_BG)},e),customStyles:e}},[r==null?void 0:r.background,r==null?void 0:r.blur,r==null?void 0:r.opacity,t]);return d.useEffect(()=>{typeof document>"u"||T(t.current,a,{ignoreNilValue:!0})},[a,t]),{backdropStyles:n}},Te=({enable:t=!1,scaleLayerClassName:r="",scaleLayerOffset:n=16}={})=>{const a=typeof document<"u"?document.querySelector(`[${he}]`)||document.body:null,s=d.useCallback(()=>t&&typeof window<"u"?Math.round(((window.innerWidth-n*2)/window.innerWidth+Number.EPSILON)*100)/100:1,[t,n]),e=d.useCallback((l=!1)=>{if(!(!t||typeof document>"u")&&a){if(a.classList.add(w.SCALE_TARGET),l){document.documentElement.classList.add(w.SCALE_DOCUMENT,r),T(a,{[u.SCALE]:s(),[u.SCALE_OFFSET]:`${n}px`}),a.classList.add(w.SCALE_DRAWER_OPENED);return}document.documentElement.classList.remove(w.SCALE_DOCUMENT,r),a.classList.remove(w.SCALE_DRAWER_OPENED)}},[t,r,n,a,s]);return _e(()=>{e()},[e]),d.useEffect(()=>e,[]),{scaleElement:a,getScaleValue:s,controlScaleEffect:e}},xe="_drawer_h73ds_6",He="_modal_h73ds_1",Fe="_drawerHeader_h73ds_1",$e="_drawerContent_h73ds_10",Be="_drawerFooter_h73ds_1",ve="_left_h73ds_71",Me="_slideOutLeft_h73ds_1",Ue="_slideInLeft_h73ds_1",je="_right_h73ds_80",Ve="_slideOutRight_h73ds_1",Ke="_slideInRight_h73ds_1",Ye="_top_h73ds_89",We="_bottom_h73ds_90",Ge="_slideOutUp_h73ds_1",Pe="_slideInUp_h73ds_1",qe="_slideOutDown_h73ds_1",ze="_slideInDown_h73ds_1",I={drawer:xe,modal:He,drawerHeader:Fe,drawerContent:$e,drawerFooter:Be,default:"_default_h73ds_60","non-modal":"_non-modal_h73ds_65",left:ve,slideOutLeft:Me,slideInLeft:Ue,right:je,slideOutRight:Ve,slideInRight:Ke,top:Ye,bottom:We,slideOutUp:Ge,slideInUp:Pe,slideOutDown:qe,slideInDown:ze},oe=d.forwardRef((t,r)=>{const{drawerMode:n="modal",open:a=!1,onMouseDown:s,classNames:e,className:l="",styles:o,backdropProps:c,css:S,children:y,preventFocus:O=!1,preventClose:m=!1,variant:x="default",position:W="right",...p}=t,A=V(r),h=A.current,L=d.useCallback(g=>{typeof document>"u"||!h||h.close(g)},[h]),H=d.useCallback(g=>{h&&(s==null||s(g),!(!(g.target instanceof HTMLDialogElement)||m)&&g.target.nodeName==="DIALOG"&&L("dismiss"))},[h,m,s,L]),D=d.useCallback(g=>{m&&g.preventDefault()},[m]),{matchedNode:_,rest:G}=j(y,Y,{className:e==null?void 0:e.header,style:o==null?void 0:o.header}),{matchedNode:P,rest:q}=j(G,K,{className:e==null?void 0:e.footer,style:o==null?void 0:o.footer});return ne(A,c),d.useEffect(()=>{if(!(typeof document>"u"||!h)){if(a){O&&h.setAttribute("inert",""),n==="modal"?h.showModal():h.show(),h.removeAttribute("inert");return}L()}},[a,h,O,L,n]),f.jsx(Q,{css:S,childrenRef:A,children:f.jsxs("dialog",{...p,ref:A,className:E(I.drawer,I[n],I[x],I[W],w.ROOT,(e==null?void 0:e.root)??"",l),onMouseDown:H,onCancel:D,style:p.style||(o==null?void 0:o.root),children:[_,f.jsx("article",{className:E(I.drawerContent,w.CONTENT,(e==null?void 0:e.content)??""),style:o==null?void 0:o.content,children:q}),P]})})});oe.__docgenInfo={description:"",methods:[],displayName:"DrawerDefault"};const Je="_drawer_h3lbt_35",Qe="_modal_h3lbt_1",Xe="_drawerHeader_h3lbt_1",Ze="_drawerContent_h3lbt_48",ke="_drawerFooter_h3lbt_1",et="_slideOutUp_h3lbt_1",tt="_slideInUp_h3lbt_1",rt="_enableScaleEffect_h3lbt_96",nt="_slideInLeft_h3lbt_1",ot="_slideOutLeft_h3lbt_1",at="_slideInRight_h3lbt_1",st="_slideOutRight_h3lbt_1",dt="_slideInDown_h3lbt_1",lt="_slideOutDown_h3lbt_1",N={drawer:Je,modal:Qe,drawerHeader:Xe,drawerContent:Ze,drawerFooter:ke,slideOutUp:et,slideInUp:tt,"non-modal":"_non-modal_h3lbt_91",enableScaleEffect:rt,slideInLeft:nt,slideOutLeft:ot,slideInRight:at,slideOutRight:st,slideInDown:dt,slideOutDown:lt},ae=({className:t="",style:r,children:n})=>{const a=d.useRef(null),s=d.useRef(0);return d.useEffect(()=>{if(typeof window>"u"||!a.current)return;const e=new ResizeObserver(l=>{const o=l[0].target,c=o.scrollHeight>o.clientHeight;o.classList.toggle(w.CONTENT_SCROLLABLE,c)});return e.observe(a.current),()=>e.disconnect()},[]),f.jsx("article",{ref:a,className:E(N.drawerContent,w.CONTENT,t),onTouchStart:e=>{const l=e.currentTarget;l.scrollHeight>l.clientHeight&&(s.current=e.touches[0].clientY,l.style.removeProperty("touch-action"))},onTouchMove:e=>{if(!(e.currentTarget.scrollHeight>e.currentTarget.clientHeight))return;const o=e.currentTarget,c=e.touches[0].clientY;if(c===s.current)return;const S=e.currentTarget.scrollTop,y=c>s.current,O=S===0,m=S+o.clientHeight===o.scrollHeight;if(O&&y||m&&!y){o.style.setProperty("touch-action","none");return}o.style.removeProperty("touch-action")},style:r,children:n})};ae.__docgenInfo={description:"",methods:[],displayName:"DrawerMobileContent",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const ct="_drawerExpander_1opgt_2",it="_expanderLine_1opgt_16",te={drawerExpander:ct,expanderLine:it},se=d.forwardRef((t,r)=>{const{drawerMode:n="modal",variant:a,open:s=!1,onMouseDown:e,className:l="",classNames:o,styles:c,backdropProps:S,disableResize:y=!1,disableDragClose:O=!1,preventClose:m=!1,preventFocus:x=!1,enableScaleLayer:W=!1,scaleLayerOffset:p=me,scaleLayerClassName:A=w.SCALE_DOCUMENT,snapPoints:h,children:L,...H}=t,D=n==="modal"&&W,_=V(r),{matchedNode:G,rest:P}=j(L,Y,{className:o==null?void 0:o.header,style:c==null?void 0:c.header}),{matchedNode:q,rest:g}=j(P,K,{className:o==null?void 0:o.footer,style:c==null?void 0:c.footer}),{scaleElement:C,getScaleValue:X,controlScaleEffect:F}=Te({enable:D,scaleLayerClassName:A,scaleLayerOffset:p}),R=d.useCallback(i=>{typeof document>"u"||!_.current||(F(!1),_.current.close(i))},[_,F]),{backdropStyles:de}=ne(_,S),Z=de[u.BACKDROP_OPACITY]??1,le=d.useCallback((i,$)=>{var B;if(D&&C){const z=$.y;if(z>0){const J=((B=i.current)==null?void 0:B.getBoundingClientRect().height)??1,v=z/J,ee=X(),ue=Math.min(ee+v*(1-ee),1),fe=Math.max(0,p-v*p);T(C,{"border-radius":`${(8-v*8).toFixed(2)}px`,transform:`scale(${ue}) translate3d(0, calc(env(safe-area-inset-top) + ${fe}px), 0)`,transition:"none"}),T(i.current,{[u.BACKDROP_OPACITY]:Math.min(1-v,Z).toFixed(2),[u.BACKDROP_TRANSITION]:"none"},{cache:"once"})}else M(C,["transform","border-radius","transition"]),M(i.current)}},[D,C,X,p,Z]),ce=d.useCallback((i,$,B)=>{if($.y>0){const J=$.y>200;D&&C&&(M(C,["transform","border-radius","transition"]),M(i.current)),!O&&J?R():B({x:0,y:0},{skipCalulateStep:!0,transition:!0})}},[D,C,O,R]),{setPosition:k}=we({targetRef:_,direction:"vertical",limit:{y:{min:0}},onMove:le,onEnd:ce,decelerationEffect:!0,addBrowserHintStyles:!1}),ie=d.useCallback(i=>{_.current&&(e==null||e(i),!(!(i.target instanceof HTMLDialogElement)||m)&&i.target.nodeName==="DIALOG"&&R("dismiss"))},[_,e,m,R]);return d.useEffect(()=>{if(typeof document>"u"||!_.current)return;const i=_.current;if(!s){R();return}x&&i.setAttribute("inert",""),F(!0),k({x:0,y:0},{skipCalulateStep:!0}),n==="modal"?i.showModal():i.show(),i.removeAttribute("inert")},[s,_,x,R,n,F,k]),f.jsxs("dialog",{ref:_,...H,className:E(N.drawer,N[n],N[a],D?N.enableScaleEffect:"",w.ROOT,(o==null?void 0:o.root)??"",l),onMouseDown:ie,onCancel:m?i=>i.preventDefault():void 0,style:H.style||(c==null?void 0:c.root),children:[!y&&f.jsx("div",{className:E(te.drawerExpander,"cdg-drawer-expander"),onDoubleClick:()=>R(),children:f.jsx("div",{className:E(te.expanderLine,"cdg-drawer-expander-line")})}),G,f.jsx(ae,{className:o==null?void 0:o.content,style:c==null?void 0:c.content,children:g}),q]})});se.__docgenInfo={description:"",methods:[],displayName:"DrawerMobile"};const b=d.forwardRef((t,r)=>t.variant==="mobile"?f.jsx(se,{ref:r,...t}):f.jsx(oe,{ref:r,...t}));b.__docgenInfo={description:"",methods:[],displayName:"Drawer"};b.Header=Y;b.Footer=K;b.Header.displayName="Drawer.Header";b.Footer.displayName="Drawer.Footer";b.displayName="Drawer";export{b as D};