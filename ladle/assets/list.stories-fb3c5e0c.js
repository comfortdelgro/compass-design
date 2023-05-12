import{a as T,e as j}from"./index-e5127d2d.js";import{l as g,r as H}from"./index-ba5d2b59.js";import{s as B,j as i,F as f,R as b,r as P,a as l}from"./index-56d078fc.js";import{S as E,a as _,A as t,b as I}from"./index-ce0eb240.js";import"./index-b7d05e27.js";import{a as s}from"./index-43a44c94.js";import{C as u}from"./components-d15b83dd.js";import{u as F}from"./use-dom-ref-da3a6937.js";import"./index-78b61260.js";import{S as V,B as p}from"./badge-ff8add38.js";import{B as M}from"./button-8d97c815.js";import"./index.es-af965b1b.js";import"./get-icon-from-color-75bda0bf.js";const X=B("ul",{width:"100%",display:"flex",flexDirection:"column",listStyleType:"none",gap:"$6",marginBlockStart:0,marginBlockEnd:0,marginInlineStart:0,marginInlineEnd:0,paddingInlineStart:0,".dnd-list-drop-target":{background:"$cdgBlue",height:2},li:{cursor:"pointer","&:focus-visible":{outline:"none",borderRadius:0}}}),U=a=>i(f,{children:a.children}),q=U,J=a=>{const m=b.useRef(null),{item:o,onDragStart:c,onDragEnter:n,onDragEnd:d}=a;return i("li",{onDragStart:c,onDragEnter:n,onDragEnd:d,draggable:!0,ref:m,children:o})},K=J,Q=(a,m)=>{const o=[];return b.Children.forEach(a,n=>(b.isValidElement(n)&&n.type===m&&o.push(n),n)),o.length>=0?o:[]},Y=b.forwardRef((a,m)=>{const{css:o={},children:c,onReorderByKeys:n}=a,d=F(m),[h,L]=P.useState(-1),[D,C]=P.useState(-1),N=b.useMemo(()=>Q(c,q),[c]),R=x=>{L(x)},S=x=>{C(x)},k=()=>{const x=[...N],y=x[h];y&&(x.splice(h,1),x.splice(D,0,y),L(-1),C(-1),n==null||n(x.map(W=>W.key??"")))};return i(X,{ref:d,css:o,children:N.map((x,y)=>l(f,{children:[D===y&&h>y&&i("li",{className:"dnd-list-drop-target"}),i(K,{item:x,onDragStart:()=>R(y),onDragEnter:()=>S(y),onDragEnd:k}),D===y&&h<y&&i("li",{className:"dnd-list-drop-target"})]}))})}),O=Y,G=B("div",{padding:"$4",backgroundColor:"$background",borderRadius:"$md","& .interactive-list-header":{display:"flex",justifyContent:"space-between",alignItems:"center"},[`& ${E}`]:{height:"$8",width:"$8"},[`.interactive-list-header ${_}`]:{marginRight:"$1"},[`.interactive-list-header ${_} ${E}`]:{marginRight:"-$1",fontSize:"1px"},"& .interactive-list-body":{marginTop:"$6",display:"flex",flexDirection:"column",gap:"$2"},"& .interactive-list-title":{margin:0,fontSize:"$header5",color:"$gray90",lineHeight:"24px",fontWeight:"bold"},"& .interactive-list-description":{margin:0,fontSize:"$body3",color:"$gray70",lineHeight:"21px"},"& .interactive-list-icon-wrapper":{display:"flex",alignItems:"center"},"& .interactive-list-chevron-icon":{width:"$4",height:"$6_5",color:"black"},variants:{variant:{dropdown:{display:"flex",flexDirection:"row",gap:"$2","& .interactive-list-dropdown-body":{display:"flex",flexDirection:"column",gap:"$2"}},default:{}}}}),Z=b.forwardRef((a,m)=>{const{groupLabel:o,avatar:c,title:n,description:d,variant:h="default",showIcon:L=!1,css:D={},...C}=a;return h==="dropdown"?l(G,{variant:h,ref:m,css:D,...C,children:[i("div",{className:"interactive-list-avatar",children:c||i(f,{})}),l("div",{className:"interactive-list-dropdown-body",children:[i("h2",{className:"interactive-list-title",children:n}),i("span",{className:"interactive-list-description",children:d})]}),L?i("div",{className:"interactive-list-icon-wrapper",children:i(s,{icon:g,className:"interactive-list-chevron-icon"})}):i(f,{})]}):i(G,{ref:m,css:D,variant:h,...C,children:l("div",{children:[l("div",{className:"interactive-list-header",children:[i(f,{children:o||i(f,{})}),i(f,{children:c||i(f,{})})]}),l("div",{className:"interactive-list-body",children:[n?i("h2",{className:"interactive-list-title",children:n}):i(f,{})," ",d?i("span",{className:"interactive-list-description",children:d}):i(f,{})]})]})})}),v=Z,ii=B("img",{width:"$10",height:"$10",borderRadius:"$lg",objectFit:"cover"}),ti=b.forwardRef((a,m)=>{const{css:o={},...c}=a;return i(ii,{ref:m,css:o,...c})}),A=ti,ei=B("div",{display:"flex",flexDirection:"row",padding:"$4",justifyContent:"space-between",alignItems:"center",borderRadius:"$md",cursor:"pointer",outline:"none","&:focus-visible":{outline:"$cdgBlue40 solid 2px"},"& .list-left-info":{display:"flex",alignItems:"center"},"& .list-left-side":{display:"flex",gap:"$6",alignItems:"center"},"& .list-left-side svg":{width:"$5_5",height:"$5_5"},"& .list-text-wrapper":{display:"flex",flexDirection:"column",gap:"$1"},"& .list-text-title":{fontSize:"$header4",fontWeight:"$semibold",margin:0},"& .list-text-description":{fontSize:"$body3"},"& .list-right-side":{display:"flex",flexDirection:"row",alignItems:"center",gap:"8px"},"& .list-right-side-text":{fontSize:"$body3"},"& .list-right-side svg":{width:"$3_5",height:"$6"},variants:{variant:{item:{backgroundColor:"transparent","&:hover .list-text-title, &:hover .list-text-description, &:hover .list-right-side-text, &:hover .list-right-side svg, &:hover .list-left-info svg":{color:"$cdgBlue40"},"&.pressed .list-text-title, &.pressed .list-text-description, &.pressed .list-right-side-text, &.pressed .list-right-side svg, &.pressed .list-left-info svg ":{color:"$cdgBlue100"},"& .list-text-title":{color:"$gray80"},"& .list-text-description":{color:"$gray80"},"& .list-right-side-text":{color:"$gray80"},"& .list-right-side svg":{color:"$gray80"}},interactive:{backgroundColor:"white","&:hover":{backgroundColor:"$cdgBlue10"},"&.pressed":{backgroundColor:"$cdgBlue100"},"& .list-text-title":{color:"#3B3A39"},"&.pressed .list-text-title":{color:"$whiteText"},"& .list-text-description":{color:"$gray80"},"&.pressed .list-text-description":{color:"$whiteText"},"& .list-right-side-text":{color:"#3B3A39"},"&.pressed .list-right-side-text":{color:"$whiteText"},"&.pressed .list-right-side svg":{color:"$whiteText"},"&.pressed .list-left-info svg":{color:"$whiteText"}}},isDisabled:{true:{cursor:"not-allowed","&:focus-visible":{outline:"none"},"&.interactive":{backgroundColor:"#E6E6E6 !important"},"&.interactive:hover":{backgroundColor:"#E6E6E6"},"&.interactive.pressed .list-text-title":{color:"#3B3A39"},"&.interactive.pressed .list-text-description":{color:"$gray80"},"&.interactive.pressed .list-right-side svg":{color:"#3B3A39"},"&.interactive.pressed .list-right-side-text":{color:"$gray90 !important"},"&.item .list-text-title, &.item .list-text-description, &.item .list-right-side-text, &.item .list-right-side svg":{color:"$gray60 !important"}}},size:{sm:{padding:"$2_5 $4","& .list-left-info":{display:"flex",justifyContent:"center",alignItems:"center",width:"$8",height:"$8",borderRadius:"100%",backgroundColor:"$background"},"& .list-left-info svg":{width:"$3_5",height:"$3_5",color:"$gray60"},"& .list-text-title":{fontSize:"$label2",fontWeight:"$normal",color:"$gray60"},"& .list-text-description":{fontSize:"$body3",color:"$gray70"},"& .list-text-wrapper":{gap:"$2"},"&:hover .list-left-info":{backgroundColor:"$cdgBlue100"},"&:hover .list-left-info svg":{color:"$whiteText"},"&:hover .list-text-title":{color:"$cdgBlue60"},"&.pressed .list-left-info":{backgroundColor:"$background !important"},"&.pressed .list-left-info svg":{color:"$gray60 !important"},"&.pressed .list-text-title":{color:"$whiteText"},"&.disabled .list-text-title":{color:"$gray70 !important"},"&.disabled .list-text-description":{color:"$gray70 !important"},"&.disabled:hover .list-left-info":{backgroundColor:"$background !important"},"&.disabled.pressed .list-left-info":{backgroundColor:"$background !important"},"&.disabled:hover .list-left-info svg":{color:"$gray60 !important"}},md:{}}}}),ri=b.forwardRef((a,m)=>{const{leftInfo:o,title:c,description:n,rightInfo:d,variant:h="interactive",isDisabled:L=!1,size:D="md",css:C={},className:N="",...R}=a,[S,k]=P.useState(!1),x={isDisabled:L,size:D,variant:h},y=W=>{L||a.onClick&&a.onClick(W)};return l(ei,{ref:m,tabIndex:0,role:"button",css:C,className:`${N} ${S?"pressed":""} ${L?"disabled":""} ${h==="interactive"?"interactive":"item"}`,onClick:y,onMouseDown:()=>k(!0),onMouseUp:()=>k(!1),...x,...R,children:[l("div",{className:"list-left-side",children:[o&&i("div",{className:"list-left-info",children:o}),(c||n)&&l("div",{className:"list-text-wrapper",children:[c&&i("h2",{className:"list-text-title",children:c}),n&&i("span",{className:"list-text-description",children:n})]})]}),d&&l("div",{className:"list-right-side",children:[d.text&&i("span",{className:"list-right-side-text",children:d==null?void 0:d.text}),d==null?void 0:d.icon]})]})}),r=ri,li=B("div",{width:"50%",display:"flex",flexDirection:"column",gap:"$1",marginTop:"$6",".list-card-detail-title":{margin:0,fontSize:"$label2",lineHeight:"18px",color:"$gray80",fontWeight:"$medium"},[`.list-card-detail-avatars ${E}`]:{height:"$4",width:"$4"},[`.list-card-detail-avatars ${_} ${E}`]:{marginRight:"-$1",fontSize:"1px"},[".list-card-detail-avatars .initials"]:{fontSize:"$label3"},".list-card-detail-footer":{display:"flex",flexDirection:"row",gap:"$1"},".list-card-detail-description":{color:"$gray80",fontSize:"$label3",lineHeight:"16px",fontWeight:"$medium"},variants:{isDisabled:{true:{"& .list-card-detail-title":{color:"$gray60"},"& .list-card-detail-description":{color:"$gray60"},[`& .list-card-detail-avatars ${E}`]:{filter:"grayscale(1)"}}}}}),si=b.forwardRef((a,m)=>{const{title:o,description:c,avatar:n,css:d={},...h}=a;return l(li,{ref:m,css:d,...h,children:[o?i("h3",{className:"list-card-detail-title",children:o}):i(f,{}),l("div",{className:"list-card-detail-footer",children:[n?i("div",{className:"list-card-detail-avatars",children:n}):i(f,{}),c?i("span",{className:"list-card-detail-description",children:c}):i(f,{})]})]})}),$=si,ai=B("div",{padding:"$4",border:"1px solid $primaryBg",borderRadius:"$md",".list-card-header":{display:"flex",justifyContent:"space-between",alignItems:"center"},".list-card-header-right-side":{display:"flex",alignItems:"center",gap:"$4"},".list-card-title":{margin:0,fontSize:"$header5",fontWeight:"$semibold",color:"$gray100",lineHeight:"24px"},".list-card-description":{margin:0,marginTop:"$2",fontSize:"$body3",lineHeight:"21px",color:"$gray80"},".list-card-footer":{display:"flex",alignItems:"flex-start"},".list-card-detail-wrapper":{display:"flex",flexWrap:"wrap",flex:1},".list-card-ellipsis-icon":{width:"$1_5",height:"23px"},variants:{isDisabled:{true:{cursor:"not-allowed",".list-card-title":{color:"$gray60"},".list-card-description":{color:"$gray60"},[`& ${V}`]:{backgroundColor:"$gray40",color:"$gray60"}}}}}),oi=b.forwardRef((a,m)=>{const{title:o,badge:c,description:n,children:d,isDisabled:h=!1,showActionButton:L=!1,css:D={},...C}=a,N={isDisabled:h},R=b.Children.toArray(d).map(S=>{const k=S;return b.cloneElement(k,{isDisabled:h})});return l(ai,{ref:m,css:D,...N,...C,children:[l("div",{className:"list-card-header",children:[o?i("h2",{className:"list-card-title",children:o}):i(f,{}),l("div",{className:"list-card-header-right-side",children:[c||i(f,{}),!d&&L?i(M,{isDisabled:!!h,variant:"ghost",children:i(s,{icon:H,className:"list-card-ellipsis-icon"})}):i(f,{})]})]}),i("div",{className:"list-card-description",children:n?i("span",{children:n}):i(f,{})}),l("div",{className:"list-card-footer",children:[i("div",{className:"list-card-detail-wrapper",children:R.map(S=>S)}),d&&L?i(M,{isDisabled:!!h,variant:"ghost",css:{marginTop:"$4"},children:i(s,{icon:H,className:"list-card-ellipsis-icon"})}):i(f,{})]})]})}),w=oi,e="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",z={display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"24px 12px",marginBottom:"12px"},Ii=()=>l(u,{children:[l("div",{style:z,children:[l(u,{children:[i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(t,{label:"A"})})]}),l(u,{children:[i(r,{title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"})})]}),l(u,{children:[i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1",leftInfo:i(s,{icon:T})})]}),l(u,{children:[i(r,{title:"Title",description:"Line 1",rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",description:"Line 1",rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{title:"Title",description:"Line 1"})]}),l(u,{children:[i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{icon:i(s,{icon:g})}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{isDisabled:!0,title:"Title",description:"Line 1"})]}),l(u,{children:[i(r,{size:"sm",leftInfo:i(s,{icon:j}),title:"Title",description:"Lorem Ipsum",css:{maxWidth:"198px"}}),i(r,{size:"sm",isDisabled:!0,leftInfo:i(s,{icon:j}),title:"Title",description:"Lorem Ipsum",css:{maxWidth:"198px"}})]})]}),l("div",{style:z,children:[l(u,{children:[i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"}),rightInfo:{text:"Details"}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(t,{label:"A"})})]}),l(u,{children:[i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{icon:i(s,{icon:g})}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"}),rightInfo:{text:"Details"}}),i(r,{variant:"item",title:"Title",description:"Line 1",leftInfo:i(A,{src:e,alt:"singapore"})})]}),l(u,{children:[i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(s,{icon:T}),rightInfo:{text:"Details"}}),i(r,{title:"Title",variant:"item",description:"Line 1",leftInfo:i(s,{icon:T})})]}),l(u,{children:[i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{icon:i(s,{icon:g})}}),i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{title:"Title",variant:"item",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{title:"Title",variant:"item",description:"Line 1"})]}),l(u,{children:[i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{text:"Details",icon:i(s,{icon:g})}}),i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{icon:i(s,{icon:g})}}),i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{icon:i(p,{color:"danger",label:"+99"})}}),i(r,{isDisabled:!0,variant:"item",title:"Title",description:"Line 1",rightInfo:{text:"Details"}}),i(r,{variant:"item",isDisabled:!0,title:"Title",description:"Line 1"})]})]})]}),Li=()=>l(u,{children:[i("h3",{children:"Without details"}),i(w,{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"}}),i(w,{title:"Lorem Ipsum",showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"}}),i(w,{title:"Lorem Ipsum",isDisabled:!0,showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"}}),i("h3",{children:"With details (Avatar)"}),i(w,{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:i($,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})}),i(w,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:i($,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})}),l(w,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:[i($,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"}),i($,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})]}),i(w,{isDisabled:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:i($,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})}),i("h3",{children:"With details (Avatar Group)"}),i(w,{title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:i($,{title:"Detail 1",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})})}),l(w,{title:"Lorem Ipsum",showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:[i($,{title:"Detail 1",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})}),i($,{title:"Detail 1",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})})]}),l(w,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:[i($,{title:"Detail 1",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})}),i($,{title:"Detail 1",avatar:i(t,{label:"A"}),description:"Lorem Ipsum"})]}),l(w,{isDisabled:!0,showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:i(p,{label:"Active",color:"success",variant:"secondary"}),css:{width:"347px"},children:[i($,{title:"Detail 1",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})}),i($,{title:"Detail 1",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]})})]})]}),yi=()=>{const a=i("div",{style:{width:"84px",height:"58px",backgroundColor:"#009EDA",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"white",fontSize:"28px",fontWeight:"bold"},children:"XXX"});return l(u,{children:[l("div",{style:z,children:[i(v,{groupLabel:a,avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(v,{groupLabel:a,title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(v,{avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(v,{groupLabel:a,avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),title:"Title",css:{width:"315px",height:"fit-content"}}),i(v,{groupLabel:a,title:"Title",css:{width:"315px",height:"fit-content"}}),i(v,{title:"Title",avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),css:{width:"315px",height:"fit-content"}}),i(v,{groupLabel:a,avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(v,{groupLabel:a,description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),i(v,{avatar:l(I,{children:[i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e}),i(t,{image:e})]}),description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}})]}),l("div",{style:z,children:[i(v,{variant:"dropdown",avatar:i(t,{image:e}),title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}}),i(v,{variant:"dropdown",title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}}),i(v,{showIcon:!0,variant:"dropdown",avatar:i(t,{image:e}),title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}}),i(v,{showIcon:!0,variant:"dropdown",title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",css:{width:"315px",height:"fit-content"}})]})]})},wi=()=>{const[a,m]=b.useState(["red","green","blue"]);return i(O,{onReorderByKeys:o=>m(o),children:a.map(o=>i(O.Item,{children:i("div",{children:o})},o))})},Di={decorators:[a=>l("div",{children:[i("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),i(a,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{wi as DragAndDrop,yi as InteractiveLists,Li as ListCards,Ii as Variants,Di as default};
