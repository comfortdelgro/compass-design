import{s as P,R as n,r as O,j as i,a as Z}from"./index-8b5b37c7.js";import{S as Q}from"./index-dca9f66a.js";import{C as X}from"./components-18224b4c.js";import{P as _}from"./index-0238acaa.js";import{u as ee}from"./use-dom-ref-e4a9d554.js";import"./button-d99eb321.js";import"./useCurrentTheme-83587f44.js";import"./floating-ui.react.esm-a642d8de.js";const oe=P("div",{appearance:"none",backgroundColor:"transparent",boxSizing:"border-box",outline:"none",border:"none",margin:0,padding:0,background:"$background",boxShadow:"0 2px 5px rgba(0,0,0,0.2)",borderRadius:"$md",minHeight:"2rem",maxHeight:"16rem",overflowY:"auto"}),te=P("div",{appearance:"none",backgroundColor:"transparent",boxSizing:"border-box",outline:"none",border:"none",margin:0,padding:0,fontSize:"$label2",fontFamily:"$header5",color:"$disabledText",width:"100%",minHeight:"2rem",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}),ne=P("div",{appearance:"none",backgroundColor:"transparent",boxSizing:"border-box",outline:"none",border:"none",margin:0,width:"100%",fontSize:"$label1",lineHeight:"1em",fontFamily:"$sans",fontWeight:"$medium",padding:"$2 $4",cursor:"pointer",display:"flex",alignItems:"center",gap:"$2","&:hover":{backgroundColor:"$gray20"},"&.hover":{backgroundColor:"$gray20"},"&:focus-visible":{backgroundColor:"$cdgBlue20"},variants:{isFocused:{true:{backgroundColor:"$gray20"}},isSelected:{true:{backgroundColor:"$gray20"}},isDisabled:{true:{opacity:.4,cursor:"not-allowed"}}}}),re=P("div",{appearance:"none",backgroundColor:"transparent",boxSizing:"border-box",outline:"none",border:"none",margin:0,padding:0,"&:focus-visible":{outline:"none",border:"none",borderColor:"transparent"},width:"fit-content",height:"fit-content"}),ae=n.forwardRef((S,y)=>{var M,z;const{children:T,options:l,onSearch:c,onSelect:p,searchedValue:r,debounce:$,notFoundContent:R="No Results Found",css:o={},onLoadMore:a,isLoadingMore:m,...h}=S,[w,g]=n.useState(!1),[L,j]=n.useState(null),[q,B]=n.useState(null),d=ee(y),F=n.useRef(null),G=(M=d.current)==null?void 0:M.clientWidth,C=n.useRef(null),N=((z=C.current)==null?void 0:z.querySelector("input"))??C.current,W=()=>{!r||!c||c(r)},J=n.Children.map(T,e=>n.cloneElement(e,{ref:C,onFocus:()=>W(),onKeyDown:t=>{Y(t)}})),D=e=>{B(e),p&&p(e),g(!1)},x=O.useRef(null),U=()=>{const e=x.current;e&&e.scrollTop===e.scrollHeight&&a&&!m&&a()},k=(e,t)=>{const f=t.offsetTop,b=f+t.clientHeight,v=e.scrollTop,E=v+e.clientHeight;f<v?e.scrollTop=f:b>E&&(e.scrollTop=b-e.clientHeight+t.clientHeight)},Y=e=>{var f,b,v,E;const t=x.current;if(t&&N){const s=Array.from((document==null?void 0:document.querySelectorAll('[role="option"]'))??[]),A=s[0],I=s[s.length-1],K=t.querySelector(".hover");switch(e.key){case"ArrowUp":if(e.preventDefault(),A.classList.contains("hover"))A.classList.remove("hover"),I.classList.add("hover"),k(t,I);else{const u=s.findIndex(H=>H.classList.contains("hover"));(f=s[u])==null||f.classList.remove("hover"),(b=s[u-1])==null||b.classList.add("hover"),k(t,s[u-1])}break;case"ArrowDown":if(e.preventDefault(),I.classList.contains("hover"))a&&!m?a():(I.classList.remove("hover"),A.classList.add("hover"),k(t,A));else{const u=s.findIndex(H=>H.classList.contains("hover"));(v=s[u])==null||v.classList.remove("hover"),(E=s[u+1])==null||E.classList.add("hover"),k(t,s[u+1])}break;case"Enter":e.preventDefault(),K&&D(K.dataset.value??"");break;case"Escape":e.preventDefault(),g(!1);break}}};return n.useEffect(()=>{if(F.current=r,r&&r!==q){L&&clearTimeout(L);const e=setTimeout(()=>{F.current===r&&c&&c(r)},$);j(e)}else g(!1);return()=>{L&&clearTimeout(L)}},[r]),n.useEffect(()=>{r&&g(!0)},[l]),n.useEffect(()=>{const e=x.current;if(w&&e){const t=e.querySelector('[role="option"]');t?t.classList.add("hover"):e.classList.add("hover")}},[w,C]),n.useEffect(()=>{const e=t=>{d.current&&!d.current.contains(t.target)&&g(!1)};return document.addEventListener("pointerdown",e),()=>{document.removeEventListener("pointerdown",e)}},[d]),i(re,{ref:d,css:o,...h,"aria-haspopup":"true","aria-expanded":w?"true":"false","aria-controls":"autocomplete-popover",tabIndex:-1,children:i(_,{isOpen:w,anchor:J,direction:"bottom-center",isFloatingPortal:!1,attachToElement:d.current&&d.current.parentElement,children:i(oe,{ref:x,css:{width:G},onScroll:U,tabIndex:-1,children:(l==null?void 0:l.length)===0?i(te,{children:R}):l==null?void 0:l.map(e=>i(ne,{"data-value":e,onClick:()=>D(e),tabIndex:0,role:"option",children:e},e))})})})}),V=ae;V.displayName="AutoComplete";const me=()=>{const[S,y]=O.useState(""),[T,l]=O.useState([]),[c,p]=O.useState(!1),r=async o=>{try{await new Promise(h=>setTimeout(h,100));const m=["Lion","Giraffe","Elephant","Penguin","Dolphin","Koala","Cheetah","Kangaroo","Octopus","Gorilla","Tiger","Zebra","Hippopotamus","Panda","Snake","Leopard","Polar Bear","Lemur","Jaguar","Chimpanzee"].filter(h=>h.toLowerCase().includes(o.toLowerCase()));l([...m]),console.log("API call successful:",m)}catch(a){console.error("Error during API call:",a)}},$=async()=>{if(!c)try{p(!0),await new Promise(a=>setTimeout(a,500));const o=["Raccoon","Ostrich","Flamingo","Pangolin","Llama","Meerkat","Koala","Chameleon","Sloth","Armadillo","Puma","Jaguar","Gazelle","Mongoose","Platypus","Peacock","Tapir","Hedgehog","Kangaroo","Otter"];l(a=>[...a,...o]),p(!1),console.log("Load more successful:",o)}catch(o){p(!1),console.error("Error during Load more:",o)}},R=o=>{y(o),console.log("Selected value:",o)};return Z(X,{children:[i("h3",{children:"Full-featured Example: Auto Complete"}),i(V,{searchedValue:S,debounce:800,onSearch:o=>r(o),options:T,onSelect:o=>R(o),notFoundContent:"No data found",onLoadMore:()=>$(),isLoadingMore:c,children:i(Q,{placeholder:"Search",onInput:o=>y(o.target.value),value:S})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{me as FullFeatured};
