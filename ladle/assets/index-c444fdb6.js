"use client";import{j as c}from"./jsx-runtime-ea7736fc.js";import{r as t,R as H}from"./index-6c164b11.js";import{C as h,c as _}from"./string-cf4adbb3.js";import{u as g}from"./use-dom-ref-7c72e1a5.js";const T="_drawer_154j9_7",$="_drawerHeader_154j9_8",z="_drawerContent_154j9_9",B="_drawerFooter_154j9_10",J="_left_154j9_93",K="_slideOutLeft_154j9_1",Q="_slideInLeft_154j9_1",W="_right_154j9_102",X="_slideOutRight_154j9_1",Y="_slideInRight_154j9_1",Z="_bottom_154j9_111",ee="_slideOutUp_154j9_1",re="_slideInUp_154j9_1",d={drawer:T,drawerHeader:$,drawerContent:z,drawerFooter:B,default:"_default_154j9_84","non-modal":"_non-modal_154j9_89",left:J,slideOutLeft:K,slideInLeft:Q,right:W,slideOutRight:X,slideInRight:Y,bottom:Z,slideOutUp:ee,slideInUp:re},j=t.forwardRef(({children:r,css:o={},...s},l)=>{const n=g(l);return c.jsx(h,{css:o,childrenRef:n,children:c.jsx("footer",{...s,ref:n,className:_(d.drawerFooter,"cdg-drawer-footer"),children:r})})});j.__docgenInfo={description:"",methods:[],displayName:"DrawerFooter",props:{css:{defaultValue:{value:"{}",computed:!1},required:!1}}};const D=t.forwardRef(({children:r,css:o={},...s},l)=>{const n=g(l);return c.jsx(h,{css:o,childrenRef:n,children:c.jsx("header",{...s,ref:n,className:_(d.drawerHeader,"cdg-drawer-header"),children:r})})});D.__docgenInfo={description:"",methods:[],displayName:"DrawerHeader",props:{css:{defaultValue:{value:"{}",computed:!1},required:!1}}};const te=r=>{var s;return t.isValidElement(r)&&r.type.toString()===Symbol.for("react.fragment").toString()&&((s=r.props)==null?void 0:s.children)||r},x=(r,o)=>{const s=[],l=t.Children.map(te(r),a=>t.isValidElement(a)?a.type===o?(s.push(H.cloneElement(a,a.props)),null):H.cloneElement(a,a.props):a);return{child:s.length>=0?s[0]:void 0,rest:l}},f=t.forwardRef((r,o)=>{const{drawerMode:s="modal",className:l="",css:n={},style:a,children:E,open:C=!1,onClose:F,onMouseDown:u,preventFocus:R=!1,preventClose:p=!1,variant:y="default",position:N="right",...O}=r,b=N,w=g(o),e=w.current,[v,L]=t.useState(0),[I,U]=t.useState(!1),m=t.useCallback(i=>{typeof document>"u"||!e||e.close(i)},[e,v]),k=t.useCallback(i=>{e&&(u==null||u(i),!(!(i.target instanceof HTMLDialogElement)||p)&&i.target.nodeName==="DIALOG"&&m("dismiss"))},[e,p,u,m]),M=t.useCallback(i=>{p&&i.preventDefault()},[p]),S=()=>{I&&U(!1)};t.useImperativeHandle(o,()=>({...e,triggerCollapse:S}));const{child:A,rest:V}=x(E,D),{child:q,rest:P}=x(V,j);t.useEffect(()=>{if(!(typeof document>"u"||!e)){if(C){R&&e.setAttribute("inert",""),s==="modal"?e.showModal():e.show(),e.removeAttribute("inert");return}m()}},[C,e,R,m]),t.useEffect(()=>{L((e==null?void 0:e.offsetHeight)??0)},[e]);const G=_(d.drawer,d[s],d[y],d[b],I&&`${d.drawerExpanded} cdg-drawer-expanded`,l,"cdg-drawer");return c.jsx(h,{css:n,childrenRef:w,children:c.jsxs("dialog",{...O,style:a,ref:w,className:G,onClose:F,onMouseDown:k,onCancel:M,children:[A,c.jsx("article",{className:_(d.drawerContent,"cdg-drawer-content"),children:P}),q]})})});f.__docgenInfo={description:"",methods:[{name:"triggerCollapse",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Drawer"};f.Header=D;f.Footer=j;f.Header.displayName="Drawer.Header";f.Footer.displayName="Drawer.Footer";f.displayName="Drawer";export{f as D};
