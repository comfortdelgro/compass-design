import{c as v,s as p,g as b,t as g,u}from"./index-cf8b885c.js";import{s as f,R as m,j as e,a as n}from"./index-06645c1d.js";import{A as l}from"./index-46eab789.js";import"./index-b2111d6b.js";import"./index-0752f36c.js";import{T as y}from"./index-a2b9bbf8.js";import{C as S}from"./components-10637cb6.js";import{a as C}from"./index-af6d2776.js";import{S as x}from"./searchfield-9fe51633.js";import{B as a}from"./button-f9a915f3.js";import"./use-dom-ref-1eeb366d.js";import"./index-346ad547.js";import"./textfield.styles-cbabfb91.js";import"./index.es-efcfe421.js";const w=f("div",{color:"#FFFFFF","& .navbar-brand-title":{fontSize:"$4",fontWeight:"$semibold",color:"inherit",margin:0}}),F=m.forwardRef((i,c)=>{const{children:o,className:t="",css:d={},...s}=i,h=()=>typeof o=="string"?e("h1",{className:"navbar-brand-title",children:o}):o;return e(w,{className:`${t} navbar-brand`,css:d,ref:c,...s,children:h()})}),H=F,$=f(C,{width:"$5",height:"$5",color:"$whiteText",cursor:"pointer"}),j=m.forwardRef((i,c)=>{const{icon:o,css:t={}}=i;return e($,{className:"navbar-icon",icon:o,css:t,ref:c})}),P=j,T=f("div",{display:"flex",flexDirection:"row",alignItems:"center",padding:"$2 $4",gap:"$4",variants:{color:{white:{backgroundColor:"#ffffff",[`& ${w}`]:{color:"$gray100"},[`& ${$}`]:{color:"$gray100"}},blue:{backgroundColor:"$cdgBlue"}},variant:{website:{minHeight:"$22",padding:"$4 $16"},portal:{}}}}),W=m.forwardRef((i,c)=>{const{children:o,color:t="blue",variant:d="portal",className:s="",css:h={},...I}=i,B={color:t,variant:d};return e(T,{className:`${s} navbar-${t}`,...I,...B,css:h,ref:c,children:o})}),r=W;r.Brand=H;r.Icon=P;r.Brand.displayName="Navbar.Brand";r.Brand.displayName="Navbar.Brand";r.displayName="Navbar";const N="https://i.pravatar.cc/150?img=32",K=()=>n(S,{children:[e("h2",{children:"Portal Navbar"}),e("h3",{children:"Blue color"}),n(r,{children:[e("a",{href:"#",children:e(r.Icon,{icon:v})}),e(r.Brand,{children:"Workbench Title"}),e(x,{placeholder:"Search"}),n("div",{children:[e("a",{href:"#",children:e(a,{children:"Home"})}),e("a",{href:"#",children:e(a,{children:"Services"})}),e("a",{href:"#",children:e(a,{children:"Products"})})]}),n("div",{style:{display:"flex",justifyContent:"flex-end",flexGrow:1,gap:"24px",alignItems:"center"},children:[e(r.Icon,{icon:p}),e(r.Icon,{icon:b}),e(r.Icon,{icon:g}),e(l,{label:"H",size:"xs",image:N})]})]}),e("h3",{children:"White color"}),n(r,{color:"white",children:[e("a",{href:"#",children:e(r.Icon,{icon:v})}),e(r.Brand,{children:"Workbench Title"}),e(x,{placeholder:"Search"}),n("div",{children:[e("a",{href:"#",children:e(a,{variant:"ghost",children:"Home"})}),e("a",{href:"#",children:e(a,{variant:"ghost",children:"Services"})}),e("a",{href:"#",children:e(a,{variant:"ghost",children:"Products"})})]}),n("div",{style:{display:"flex",justifyContent:"flex-end",flexGrow:1,gap:"24px",alignItems:"center"},children:[e(r.Icon,{icon:p}),e(r.Icon,{icon:b}),e(r.Icon,{icon:g}),e(l,{label:"H",size:"xs",image:N})]})]}),e("h2",{children:"Website Navbar"}),e("h3",{children:"Blue color"}),n(r,{color:"blue",variant:"website",children:[e("a",{href:"#",children:e(l,{label:"C",size:"lg"})}),n("div",{style:{display:"flex",justifyContent:"flex-end",flexGrow:1,gap:"12px",alignItems:"center"},children:[e("a",{href:"#",children:e(a,{variant:"primary",children:"Home"})}),e("a",{href:"#",children:e(a,{variant:"primary",children:"Services"})}),e("a",{href:"#",children:e(a,{variant:"primary",children:"Products"})}),e(y,{placeholder:"search"}),e(a,{variant:"ghost",children:e(r.Icon,{icon:u})})]})]}),e("h3",{children:"White color"}),n(r,{color:"white",variant:"website",children:[e("a",{href:"#",children:e(l,{label:"C",size:"lg"})}),n("div",{style:{display:"flex",justifyContent:"flex-end",flexGrow:1,gap:"12px",alignItems:"center"},children:[e("a",{href:"#",children:e(a,{variant:"ghost",children:"Home"})}),e("a",{href:"#",children:e(a,{variant:"ghost",children:"Services"})}),e("a",{href:"#",children:e(a,{variant:"ghost",children:"Products"})}),e(y,{placeholder:"search"}),e(a,{variant:"ghost",children:e(r.Icon,{icon:u})})]})]})]}),O={decorators:[i=>n("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(i,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{K as Variants,O as default};
