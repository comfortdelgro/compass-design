import{s as r,R as p,a as d,j as n}from"./index-e22c3083.js";import{C as D}from"./components-697085b9.js";import{u as k}from"./use-dom-ref-7b83d175.js";const E=o=>o>=1024&&o<1048576?`${(Math.round(o/1024*100)/100).toFixed(2)} KB`:o>=1048576&&o<1073741824?`${(Math.round(o/1048576*100)/100).toFixed(2)} MB`:o>=1073741824&&o<1099511627776?`${(Math.round(o/1073741824*100)/100).toFixed(2)} GB`:o>=1099511627776&&o<0x4000000000000?`${(Math.round(o/1099511627776*100)/100).toFixed(2)} TB`:o>=0x4000000000000?`${(Math.round(o/0x4000000000000*100)/100).toFixed(2)} PB`:`${o} Bytes`,B="audio/*,video/*,image/*, .docs, .docx, .pdf",A=9999999999;r("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",display:"flex",justifyContent:"center",justifyItems:"center"});const L=r("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$semibold",fontSize:"$label3",lineHeight:"$normal",color:"$gray50",display:"flex",justifyContent:"center",justifyItems:"center",pointerEvents:"none"}),M=r("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#E31617"}),R=r("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#B4B4B4"});r("h2",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontSize:"$label1",lineHeight:"$normal",color:"#333333",width:"85%",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"});r("h2",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontSize:"$label1",lineHeight:"$normal",display:"flex",justifyContent:"center",alignItems:"center",color:"#B4B4B4"});const w=r("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",flexGrow:1,height:"100%",display:"flex",alignItems:"center",fontSize:"$body3",fontWeight:"$semibold",pointerEvents:"none"}),W=r("label",{appearance:"none",boxSizing:"border-box",margin:"0px",background:"transparent",height:"100%",padding:"$2 $5",backgroundColor:"#FFFFFF",border:"1px solid $cdgBlue",color:"$cdgBlue",borderRadius:"$md",fontWeight:"$bold",fontSize:"$label2",fontFamily:"$sans",display:"flex",justifyContent:"center",alignItems:"center",gap:"$2_5",cursor:"pointer"}),H=r("div",{appearance:"none",boxSizing:"border-box",margin:"0px",width:"100%",border:"1px dashed #E6E6E6",background:"$primaryBg",padding:"$2",overflow:"hidden",borderRadius:"$lg",display:"flex",alignItems:"center",gap:"$2",variants:{variant:{field:{},area:{flexDirection:"column-reverse"}}}}),V=r("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",minWidth:"$96",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"$2","& input":{display:"none"},variants:{variant:{field:{},area:{}}}}),O=p.forwardRef((o,h)=>{const{css:x={},variant:i="field",getFile:m=()=>{},accept:g=B,fileSizeLimit:l=A,multiple:$=!1,...F}=o,S=k(h),b=p.useRef(null),[f,y]=p.useState(),C=e=>{e&&(e==null?void 0:e.length)>0&&(Array.from(e).some(c=>c.size>l)?y("Sorry, your file exceeds our size limit."):(y(void 0),m(Array.from(e))))};return d(V,{variant:i,css:x,...F,children:[d(H,{variant:i,ref:S,onDrop:e=>{e.target.removeAttribute("style"),e.preventDefault(),e.stopPropagation();const c=e.dataTransfer;if(!c)return;const j=c.files;C(j)},onDragOver:e=>{const a=e.target;a.tagName!=="LABEL"&&(console.log([e.target]),a.style.border="1px dashed #0142AF",a.style.backgroundColor="#E6ECF7"),e.preventDefault(),e.stopPropagation()},onDragLeave:e=>{e.target.removeAttribute("style")},children:[n("input",{ref:b,type:"file",accept:g,multiple:$,onChange:e=>{e.preventDefault();const a=e.target,c=a==null?void 0:a.files;C(c)}}),d(W,{onClick:()=>{var e;return(e=b.current)==null?void 0:e.click()},children:[i==="field"&&n("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",style:{pointerEvents:"none"},children:n("path",{d:"M12.2857 10.6249V12.375C12.2857 12.8581 11.9019 13.25 11.4286 13.25H4.57143C4.09812 13.25 3.71429 12.8581 3.71429 12.375V10.6249C3.71429 10.1418 3.33045 9.74993 2.85714 9.74993C2.38384 9.74993 2 10.1418 2 10.6249V12.375C2 13.8247 3.15125 15 4.57143 15H11.4286C12.8488 15 14 13.8247 14 12.375V10.6249C14 10.1418 13.6162 9.74993 13.1429 9.74993C12.6696 9.74993 12.2857 10.141 12.2857 10.6249ZM7.39464 1.25616L3.96607 4.75621C3.63098 5.09829 3.63152 5.652 3.96607 5.99353C4.30089 6.33533 4.8433 6.33533 5.17813 5.99353L7.14286 3.98852V9.74993C7.14286 10.2336 7.52616 10.6249 8 10.6249C8.47384 10.6249 8.85714 10.2336 8.85714 9.74993V3.98852L10.8227 5.99504C11.1575 6.33684 11.6999 6.33684 12.0347 5.99504C12.3696 5.65323 12.3696 5.09952 12.0347 4.75771L8.60616 1.25767C8.27054 0.914362 7.72946 0.914362 7.39464 1.25616Z",fill:"#0142AF"})}),i==="area"?n("span",{style:{pointerEvents:"none"},children:"Browse Files"}):n("span",{style:{pointerEvents:"none"},children:"Upload files"})]}),i==="area"&&n(L,{children:"or"}),i==="area"?n(w,{children:"Drag&Drop files here"}):n(w,{children:"or Drop Files"}),i==="area"&&n(w,{children:n("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",children:n("path",{d:"M8.4335 25.3332C4.78837 25.3332 1.8335 22.6457 1.8335 19.3332C1.8335 16.7165 3.67462 14.4915 6.24266 13.6707C6.2367 13.5582 6.2335 13.4457 6.2335 13.3332C6.2335 9.64984 9.51516 6.6665 13.5668 6.6665C16.2847 6.6665 18.6543 8.01025 19.9239 10.0082C20.6206 9.54567 21.4639 9.33317 22.3668 9.33317C24.796 9.33317 26.7668 11.0873 26.7668 13.3332C26.7668 13.8415 26.6614 14.3248 26.4735 14.7748C29.1502 15.2665 31.1668 17.4207 31.1668 19.9998C31.1668 22.9457 28.5406 25.3332 25.3002 25.3332H8.4335ZM12.0543 16.2915C11.6281 16.6832 11.6281 17.3165 12.0543 17.6707C12.4852 18.0957 13.1818 18.0957 13.5714 17.6707L15.4002 16.079V21.6665C15.4002 22.2207 15.8906 22.6665 16.5002 22.6665C17.1097 22.6665 17.6002 22.2207 17.6002 21.6665V16.079L19.3877 17.6707C19.8185 18.0957 20.5152 18.0957 20.9047 17.6707C21.3722 17.3165 21.3722 16.6832 20.9047 16.2915L17.2381 12.9582C16.8485 12.5707 16.1518 12.5707 15.721 12.9582L12.0543 16.2915Z",fill:"#0142AF"})})})]}),d(R,{children:["Maximum size: ",E(l)]}),n(M,{children:f})]})}),T=O,N=r("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#E31617"}),P=r("a",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",fontFamily:"$sans",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$normal",display:"flex",justifyContent:"left",alignItems:"center",color:"#B4B4B4"}),_=r("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",background:"transparent",flexGrow:1,height:"100%",display:"flex",alignItems:"center",borderLeft:"1px solid #E6E6E6",padding:"0 $4",fontSize:"$body2",fontWeight:"$semibold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",p:{margin:0,padding:0,wordWrap:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},variants:{fileSelected:{true:{color:"#333333"},false:{color:"#B4B4B4"}}}});r("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"30.275%",height:"100%",backgroundColor:"#F7F8F9",fontFamily:"$sans",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"1px 0 0 0 #E6E6E6"});const Z=r("div",{appearance:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",height:"$11",border:"1px solid #E6E6E6",overflow:"hidden",borderRadius:"$lg",display:"flex",gap:"0px"}),G=r("label",{appearance:"none",boxSizing:"border-box",margin:"0px",background:"transparent",width:"min-content",flexShrink:0,padding:"0 $3",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"$label1",fontWeight:"$semibold",lineHeight:"$normal",cursor:"pointer",backgroundColor:"$gray10",span:{width:"max-content"},"&:hover":{backgroundColor:"$gray20"}}),K=r("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",boxShadow:"1px solid #E6E6E6",minWidth:"$96",display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:"$2","& input":{display:"none"}}),q=p.forwardRef((o,h)=>{const{css:x={},getFile:i=()=>{},accept:m=B,fileSizeLimit:g=A,multiple:l=!1,placeholder:$="No file chosen",...F}=o,S=k(h),b=p.useRef(null),[f,y]=p.useState([]),[C,v]=p.useState(),z=t=>{t&&(t==null?void 0:t.length)>0&&(Array.from(t).some(a=>a.size>g)?v("Sorry, your file exceeds our size limit."):(v(void 0),y(Array.from(t)),i(Array.from(t))))};return d(K,{css:x,ref:S,...F,children:[d(Z,{children:[n("input",{ref:b,type:"file",accept:m,multiple:l,onChange:t=>{t.preventDefault();const e=t.target,a=e==null?void 0:e.files;z(a)}}),n(G,{onClick:()=>{var t;return(t=b.current)==null?void 0:t.click()},children:n("span",{children:"Browse file"})}),n(_,{fileSelected:f.length>0,children:f.length>0?n("p",{children:f.map(t=>t.name).join(", ")}):$})]}),d(P,{children:["Maximum size: ",E(g)]}),n(N,{children:C})]})}),s=q;s.DragAndDrop=T;s.DragAndDrop.displayName="Upload.DragAndDrop";s.displayName="Upload";const u=o=>{o.length<1||console.log(o)},Y=()=>d(D,{children:[n("h3",{children:"Default file upload is click-to-upload variant which allows only 1 uploaded file"}),n(s,{getFile:u,accept:"image/*, .docs, .docx"})]}),ee=()=>d(D,{children:[n("h3",{children:"Click-to-upload"}),n(s,{getFile:u,accept:"image/*, .docs, .docx",fileSizeLimit:3e4}),n("h3",{children:"Allow multiple uploaded file"}),n(s,{getFile:u,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0}),n("h3",{children:"Primary drag-and-drop"}),n(s.DragAndDrop,{getFile:u,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0}),n("h3",{children:"Secondary drag-and-drop"}),n(s.DragAndDrop,{getFile:u,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"area",multiple:!0})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as Default,ee as Variants};
