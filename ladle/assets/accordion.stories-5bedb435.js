import{f as w}from"./index-6d586102.js";import{R as l,j as e,F as L,s as v,r as C,a as i}from"./index-6eb6f04c.js";import{I as D}from"./index-5319d547.js";import{C as M}from"./components-8b2cea38.js";import{p as R}from"./pick-child-a6483812.js";import{u as T}from"./use-dom-ref-d9196554.js";import"./index.es-ed68bd8f.js";const H=l.createContext({}),I=H,W=l.forwardRef((c,d)=>{const{children:r,css:t={}}=c,a=T(d);return e(L,{children:(()=>l.isValidElement(r)?l.cloneElement(r,{className:"accordion-chevron-icon",ref:a,css:t}):e("svg",{viewBox:"0 0 512 512",className:"accordion-chevron-icon",children:e("path",{fill:"currentColor",d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})}))()})}),B=W,j=v("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"$4 $12","& > *":{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"space-between"},"& > * > *":{width:"50%"}}),q=l.forwardRef((c,d)=>{const{children:r,css:t={},...a}=c,s=T(d);return e(j,{...a,css:t,ref:s,children:r})}),P=q,V=v("button",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",textAlign:"unset",position:"relative",borderRadius:"$lg",color:"$primaryText","&:focus-visible":{outline:"none",boxShadow:"0 0 2px 2px #CCD9EF"},variants:{expand:{close:{backgroundColor:"$background"},open:{backgroundColor:"$gray20",borderBottomLeftRadius:0,borderBottomRightRadius:0,"& .accordion-chevron-icon":{transform:"rotate(180deg)"}}}}}),F=l.forwardRef((c,d)=>{const{children:r,expand:t="close",className:a,css:s={},onMouseDown:u,...x}=c,p=T(d);return e(V,{expand:t,ref:p,className:a,css:s,onMouseDown:u,type:"button",...x,children:r})}),J=F,O=v("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",width:"100%",minHeight:"82px",display:"flex",position:"relative",padding:"$4 $6 $4 $5",borderWidth:"$light",borderStyle:"solid",borderColor:"$gray30",borderRadius:"$lg",userSelect:"none",cursor:"pointer","& *":{margin:0},"& .accordion-title":{display:"flex",alignItems:"center",flex:1},"& .accordion-left-icon-container":{marginRight:"$6"},"& svg":{width:"$5",height:"$5",marginTop:"12px"},"& .accordion-chevron-container":{marginLeft:"$6"},"& .accordion-chevron-icon":{width:"$5",height:"$0.75",marginTop:"12px"},variants:{expand:{close:{},open:{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),U=l.forwardRef((c,d)=>{const{icon:r=e(G,{}),children:t,expandIcon:a,css:s={},...u}=c,x=C.useContext(I),{expand:p,onExpandChange:y,setExpand:f}=x,h=()=>typeof t=="string"?e("h1",{children:t}):t,$=g=>{const m=g;f(),y&&y(m)};return e(J,{ref:d,css:s,className:`accordion-title-container ${p?"open":"close"}`,expand:p?"open":"close",onMouseDown:g=>$(g),children:i(O,{expand:p?"open":"close",...u,children:[(()=>r===!1?null:e("div",{className:"accordion-left-icon-container",children:r}))(),e("div",{className:"accordion-title",children:h()}),e("div",{className:"accordion-chevron-container",children:a||e("svg",{viewBox:"0 0 512 512",className:"accordion-chevron-icon",children:e("path",{fill:"currentColor",d:"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"})})})]})})}),G=()=>e("svg",{viewBox:"0 0 512 512",children:e("path",{fill:"currentColor",d:"M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"})}),S=U,Q=v("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",minHeight:"82px",position:"relative",backgroundColor:"$background",color:"$primaryText",borderRadius:"$lg","& .accordion-body":{backgroundColor:"inherit",color:"inherit",height:"auto",borderWidth:"$light",borderStyle:"solid",borderColor:"$gray30",borderTop:0,borderBottomLeftRadius:"$lg",borderBottomRightRadius:"$lg",overflow:"hidden",transition:"max-height 0.25s ease-in-out"},"& .accordion-body.collapsed":{border:"none"},"& .accordion-body-inner":{padding:"$4 $6 $4 $5"},lineHeight:"$normal"}),K=l.forwardRef((c,d)=>{const{css:r={},expand:t,defaultExpand:a=!1,children:s,onExpandChange:u,...x}=c,[p,y]=C.useState(a),f=T(null),h=(()=>t!==void 0?t:p)();C.useEffect(()=>{if(!f.current)return;const b=f.current;h?b.style.maxHeight=`${b.scrollHeight}px`:b.style.maxHeight="0px"},[h,f.current]);const $=l.useCallback(()=>{!t!==void 0&&y(b=>!b)},[]),E=l.useMemo(()=>({expand:h,setExpand:$,onExpandChange:u}),[h,$,u]),g=T(d),{child:m,rest:N}=R(s,S),{child:A,rest:k}=R(N,B),z=m&&A?l.cloneElement(m,{expandIcon:A}):m;return e(Q,{...x,css:r,ref:g,children:i(I.Provider,{value:E,children:[z,e("div",{className:`accordion-body ${h?"expanded":"collapsed"}`,ref:f,children:e("div",{className:"accordion-body-inner",children:k})})]})})}),n=K;n.Table=P;n.Title=S;n.ExpandIcon=B;n.Table.displayName="Accordion.Table";n.Title.displayName="Accordion.Title";n.displayName="Accordion";n.ExpandIcon.displayName="Accordion.ExpandIcon";const o=`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`,re=()=>{const[c,d]=C.useState(!1),r=t=>()=>{d(a=>a===t?!1:t)};return i(M,{children:[e("h3",{children:"Default with icon"}),i(n,{children:[e(n.Title,{children:"Title"}),o]}),i(n,{children:[e(n.Title,{children:e("p",{children:o})}),o]}),e("h3",{children:"Without left icon"}),i(n,{children:[e(n.Title,{icon:!1,children:"Title"}),o]}),i(n,{children:[e(n.Title,{icon:!1,children:e("p",{children:o})}),o]}),e("h3",{children:"Customize left icon"}),i(n,{children:[e(n.Title,{icon:e(D,{icon:w}),children:"Title"}),o]}),e("h3",{children:"Customize expand icon"}),i(n,{children:[e(n.ExpandIcon,{children:e("div",{style:{lineHeight:"1em",display:"flex",justifyContent:"center",alignItems:"center"},children:"Show"})}),e(n.Title,{children:"Title"}),o]}),i(n,{children:[e(n.ExpandIcon,{children:e(D,{icon:w})}),e(n.Title,{children:"Title"}),o]}),e("h3",{children:"Styling"}),i(n,{defaultExpand:!0,css:{background:"Wheat",color:"SaddleBrown"},children:[e(n.Title,{css:{background:"burlywood",textAlign:"center",color:"currentColor"},children:e("p",{children:o})}),o]}),e("h3",{children:"Controlled"}),i(n,{expand:c==="first",onExpandChange:r("first"),children:[e(n.Title,{children:e("p",{children:o})}),o,o]}),i(n,{expand:c==="second",onExpandChange:r("second"),children:[e(n.Title,{children:e("p",{children:o})}),o,o]}),i(n,{expand:c==="third",onExpandChange:r("third"),children:[e(n.Title,{children:e("p",{children:o})}),o,o]})]})},te=()=>{const c=[{id:1,leftData:"Job ID",rightData:"CDG180-1120"},{id:2,leftData:"Status",rightData:"Ended"},{id:3,leftData:"Job Title",rightData:"Demo 8"},{id:4,leftData:"Number of Pax",rightData:"4"},{id:5,leftData:"Job Type",rightData:"One-way Transfer"},{id:6,leftData:"Date/Time",rightData:"10/10/2022, 04:10 PM"},{id:7,leftData:"Pick-up Location",rightData:"Comfort Building"}],d=()=>c.map(r=>i("div",{children:[e("p",{children:e("b",{children:r.leftData})}),e("p",{style:{textAlign:"left"},children:r.rightData})]},r.id));return i(n,{children:[e(n.Title,{children:e("h2",{children:"Business Profile"})}),e("p",{children:o}),e(n.Table,{children:d()}),e("p",{children:o})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{re as Default,te as Table};