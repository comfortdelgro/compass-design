import{i as de,j as le,f as R}from"./index-bbc6e670.js";import{F}from"./index.es-d62ae1d4.js";import{s as d,R as n,j as e,F as T,a as o}from"./index-4f639d7a.js";import"./index-a4fa3985.js";import{C as K}from"./components-4ae9f9ca.js";import{p as B}from"./pick-child-6c82c64d.js";import{u as Q}from"./use-dom-ref-172c1966.js";import{B as i}from"./button-13e47faa.js";const U=d("img",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",width:"100%",height:"100%",position:"absolute",zIndex:-1}),ce=d("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",height:"100%",width:"100%",display:"flex",flexDirection:"row",gap:"0"}),X=d("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",height:"100%",width:"8.92%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",cursor:"pointer","& *":{color:"$whiteText",width:"$4",height:"$7_5"}}),Y=d("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",cursor:"pointer",height:"100%",width:"8.92%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center","& *":{color:"$whiteText",width:"$4",height:"$7_5"}}),j=d("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",height:"100%",width:"82.16%",display:"flex",flexDirection:"column",paddingTop:"$46"}),Z=d("h1",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",fontFamily:"$sans",fontSize:"$display1",color:"$whiteText",lineHeight:"$normal",fontWeight:"$bold",maxWidth:"$160",height:"$21",overflow:"hidden"}),ee=d("p",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",fontFamily:"$sans",fontSize:"$body2",color:"$whiteText",lineHeight:"$normal",fontWeight:"$normal",maxWidth:"$160",height:"$14",overflow:"hidden"}),_=d("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",height:"$14",display:"flex",justifyContent:"flex-start",gap:"$6"}),ae=d("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",height:"$4",width:"100%",display:"flex",justifyContent:"flex-between",marginTop:"$14"}),P=d("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",height:"100%",width:"50%",display:"flex",justifyContent:"flex-start",alignItems:"center"}),ne=d("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",height:"100%",width:"50%",display:"flex",justifyContent:"flex-end",alignItems:"center",gap:"$4_5","& *":{color:"$background",cursor:"pointer",width:"$3_5",height:"$3_5"}}),V=d("div",{appearance:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"$4",height:"$2",backgroundColor:"$cdgBlue100",borderRadius:"$full",border:"1px solid white",marginLeft:"$2_5",cursor:"pointer",variants:{current:{true:{},false:{width:"$2",height:"$2",borderRadius:"$full",border:"1px solid white",marginLeft:"$2_5",cursor:"pointer",backgroundColor:"transparent"}}},defaultVariants:{current:"true"}}),O=d("div",{appearance:"none",border:"none",backgroundColor:"transparent",boxSizing:"border-box",margin:"0px",padding:"0px",height:"$128",width:"$206",display:"flex",flexDirection:"column",position:"relative",variants:{size:{sm:{width:"$206"},md:{width:"$269"},lg:{width:"$328"},full:{width:"100%"}},view:{desktop:{},mobile:{width:"$80",height:"$131_5",display:"flex",flexDirection:"column",[`& ${ne}`]:{display:"none"},[`& ${X}`]:{display:"none"},[`& ${Y}`]:{display:"none"},[`& ${U}`]:{width:"100%",height:"53.232%",position:"static"},[`& ${j}`]:{width:"100%",height:"25.475%",margin:"0",padding:"0",backgroundColor:"$cdgBlue",paddingLeft:"$4",paddingTop:"$6"},[`& ${P}`]:{width:"100%",height:"$2_5",display:"flex",justifyContent:"center",alignItems:"center",border:"none",background:"transparent",position:"absolute",top:"50%"},[`& ${Z}`]:{fontSize:"$header3",fontWeight:"$semibold",height:"$9",marginBotton:"$2"},[`& ${ee}`]:{fontSize:"$body3",fontWeight:"$normal",height:"$10"},[`& ${_}`]:{width:"100%",height:"$28",display:"flex",gap:"0",flexDirection:"column","& *":{borderRadious:"0"}}}}},defaultVariants:{size:"md"}}),he=n.forwardRef((h,u)=>{const{children:l,css:a={},currentSlideIndex:c=0,...r}=h,[p,g]=n.useState(0),m=n.Children.toArray(l),D=()=>m.length?e(T,{children:m[p]}):e(T,{});return n.useEffect(()=>{g(c)},[c]),e(_,{css:a,ref:u,...r,children:D()})}),te=he,ue=n.forwardRef((h,u)=>{const{descriptions:l=[""],css:a={},currentSlideIndex:c=0,...r}=h,[p,g]=n.useState(0);return n.useEffect(()=>{g(c)},[c]),e(ee,{css:a,ref:u,...r,children:l[p]})}),oe=ue,pe=n.forwardRef((h,u)=>{const{css:l={},id:a="myId",addresses:c=[""],currentSlideIndex:r=0}=h,p=Q(u),[g,m]=n.useState(0);return n.useEffect(()=>{m(r)},[r]),e(T,{children:e(U,{src:c[g],css:l,ref:p,id:a})})}),ie=pe,ge=n.forwardRef((h,u)=>{const{titles:l=[""],css:a={},currentSlideIndex:c=0,...r}=h,[p,g]=n.useState(0);return n.useEffect(()=>{g(c)},[c]),e(Z,{css:a,ref:u,...r,children:l[p]})}),re=ge,me=n.forwardRef((h,u)=>{const{children:l,css:a={},size:c,auto:r,prevIcon:p=e("svg",{viewBox:"0 0 320 512",children:e("path",{fill:"currentColor",d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})}),nextIcon:g=e("svg",{viewBox:"0 0 320 512",children:e("path",{fill:"currentColor",d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})}),count:m=0,socialIcons:D=[],view:E="desktop",...A}=h,L=Q(u),{child:I}=B(l,ie),{child:v}=B(l,re),{child:z}=B(l,oe),{child:k}=B(l,te),M={size:c,view:E},[s,w]=n.useState(0),se=()=>{s==0?w(m-1):w(s-1)},N=()=>{s==m-1?w(0):w(s+1)},W=f=>{w(f)},H=()=>{const f=[];for(let C=0;C<m;C++)s==C?f.push(e(V,{current:"true",onClick:()=>W(C)})):f.push(e(V,{current:"false",onClick:()=>W(C)}));return f};return n.useEffect(()=>{r&&setTimeout(N,r)},[s]),o(T,{children:[E=="desktop"&&o(O,{css:a,ref:L,...M,...A,children:[I&&n.cloneElement(I,{currentSlideIndex:s,auto:r}),o(ce,{children:[e(X,{onClick:()=>se(),children:p}),o(j,{children:[v&&n.cloneElement(v,{currentSlideIndex:s,auto:r}),z&&n.cloneElement(z,{currentSlideIndex:s,auto:r}),k&&n.cloneElement(k,{currentSlideIndex:s,auto:r}),o(ae,{children:[e(P,{children:H()}),e(ne,{children:D.map((f,C)=>e(n.Fragment,{children:f.icon},C))})]})]}),e(Y,{onClick:()=>N(),children:g})]})]}),E=="mobile"&&o(O,{css:a,ref:L,...M,...A,children:[I&&n.cloneElement(I,{currentSlideIndex:s,auto:r}),e(P,{children:H()}),o(j,{children:[v&&n.cloneElement(v,{currentSlideIndex:s,auto:r}),z&&n.cloneElement(z,{currentSlideIndex:s,auto:r})]}),e(_,{children:k&&n.cloneElement(k,{currentSlideIndex:s,auto:r})})]})]})}),t=me;t.Image=ie;t.Title=re;t.Description=oe;t.Buttons=te;t.Image.displayName="Carousel.Image";t.Title.displayName="Carousel.Title";t.Description.displayName="Carousel.Description";t.Buttons.displayName="Carousel.Buttons";t.displayName="Carousel";const q=[{icon:e(F,{icon:R}),target:"https://www.pinterest.com.au/"},{icon:e(F,{icon:R}),target:"https://www.tiktok.com/"},{icon:e(F,{icon:R}),target:"https://telegram.org/"}],b={backgroundColor:"#0142AF",color:"#F7F8F9",height:"92.857%",border:"none"},x={backgroundColor:"#F7F8F9",color:"#0142AF",height:"92.857%",border:"none","&:hover":{color:"#F7F8F9"}},G={backgroundColor:"#0142AF",color:"#F7F8F9",height:"92.857%",border:"none",borderRadius:"0"},J={backgroundColor:"#F7F8F9",color:"#0142AF",height:"92.857%",border:"none",borderRadius:"0","&:hover":{color:"#F7F8F9"}},S=["https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"],$=["First slide label","Second slide label","Third slide label"],y=["First lorem ipsum dolor, sit amet consectetur adipisicing elit iste corrupti","Second lorem ipsum dolor, sit amet consectetur adipisicing elit iste corrupti","Third lorem ipsum dolor, sit amet consectetur adipisicing elit iste corrupti"],Fe=()=>o(K,{children:[e("h3",{children:"Default carousel is medium sized"}),o(t,{count:3,children:[e(t.Image,{addresses:S}),e(t.Title,{titles:$}),e(t.Description,{descriptions:y}),o(t.Buttons,{children:[o(n.Fragment,{children:[e(i,{css:b,children:"1st Slide"}),e(i,{css:x,children:"1st Slide"})]}),o(n.Fragment,{children:[e(i,{css:b,children:"2nd Slide"}),e(i,{css:x,children:"2nd Slide"})]}),e(n.Fragment,{children:e("h3",{style:{color:"white"},children:"Show no button"})})]})]}),e("h3",{children:"Small sized carousel with auto slide"}),o(t,{count:3,size:"sm",auto:2500,children:[e(t.Image,{addresses:S}),e(t.Title,{titles:$}),e(t.Description,{descriptions:y}),o(t.Buttons,{children:[o(n.Fragment,{children:[e(i,{css:b,children:"1st Slide"}),e(i,{css:x,children:"1st Slide"})]}),o(n.Fragment,{children:[e(i,{css:b,children:"2nd Slide"}),e(i,{css:x,children:"2nd Slide"})]}),e(n.Fragment,{children:e("h3",{style:{color:"white"},children:"Show no button"})})]})]}),e("h3",{children:" Large sized carousel with custom social icons"}),o(t,{count:3,size:"lg",socialIcons:q,children:[e(t.Image,{addresses:S}),e(t.Title,{titles:$}),e(t.Description,{descriptions:y}),o(t.Buttons,{children:[o(n.Fragment,{children:[e(i,{css:b,children:"1st Slide"}),e(i,{css:x,children:"1st Slide"})]}),o(n.Fragment,{children:[e(i,{css:b,children:"2nd Slide"}),e(i,{css:x,children:"2nd Slide"})]}),e(n.Fragment,{children:e("h3",{style:{color:"white"},children:"Show no button"})})]})]}),e("h3",{children:" Full sized carousel with custom previous/next slide button"}),o(t,{count:3,size:"lg",socialIcons:q,prevIcon:e(F,{icon:de}),nextIcon:e(F,{icon:le}),children:[e(t.Image,{addresses:S}),e(t.Title,{titles:$}),e(t.Description,{descriptions:y}),o(t.Buttons,{children:[o(n.Fragment,{children:[e(i,{css:b,children:"1st Slide"}),e(i,{css:x,children:"1st Slide"})]}),o(n.Fragment,{children:[e(i,{css:b,children:"2nd Slide"}),e(i,{css:x,children:"2nd Slide"})]}),e(n.Fragment,{children:e("h3",{style:{color:"white"},children:"Show no button"})})]})]})]}),Ie=()=>e(K,{children:o(t,{count:3,view:"mobile",children:[e(t.Image,{addresses:S}),e(t.Title,{titles:$}),e(t.Description,{descriptions:y}),o(t.Buttons,{children:[o(n.Fragment,{children:[e(i,{css:J,children:"1st Slide"}),e(i,{css:G,children:"1st Slide"})]}),o(n.Fragment,{children:[e(i,{css:J,children:"2nd Slide"}),e(i,{css:G,children:"2nd Slide"})]}),e(n.Fragment,{children:e("h3",{style:{color:"white"},children:"Show no button"})})]})]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Fe as DesktopView,Ie as MobileView};