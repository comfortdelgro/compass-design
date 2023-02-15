import{s as c,R as h,j as e,a as i}from"./index-2f0c84ee.js";import{B as n}from"./button-c82a9896.js";import{C as p}from"./components-34eec0a4.js";import{u as g}from"./use-dom-ref-894e841d.js";import"./module-74dee838.js";import"./module-f9a02953.js";import"./module-fd182f49.js";import"./_define_property-1764bf98.js";import"./module-c212b86e.js";const B=c("div",{}),v=h.forwardRef((t,o)=>{const{children:a,css:l={},...s}=t;return e(B,{css:l,ref:o,...s,children:a})}),w=v,y=c("div",{width:"100%",position:"relative",backgroundColor:"inherit",padding:"$4 $4",borderRadius:"$md",lineHeight:"$normal",color:"$gray80",fontSize:"$label2",display:"flex",flexDirection:"column",gap:"12px"}),$=h.forwardRef((t,o)=>{const{children:a,css:l={},...s}=t;return e(y,{css:l,ref:o,...s,children:a})}),T=$,A=c("img",{width:"100%",height:"$44",objectFit:"cover",borderTopLeftRadius:"$md",borderTopRightRadius:"$md"}),S=h.forwardRef((t,o)=>{const{css:a={},...l}=t,s=g(o);return e(A,{css:a,...l,ref:s})}),z=S,D=c("div",{width:"100%",position:"relative",backgroundColor:"inherit"}),f=c("h1",{fontSize:"$header5",margin:0,fontWeight:"$semibold",color:"#333333"}),R=h.forwardRef((t,o)=>{const{children:a,css:l={},...s}=t;return e(D,{css:l,ref:o,...s,children:(()=>typeof a=="string"?e(f,{children:a}):a)()})}),I=R,k=c("div",{width:"100%",position:"relative",backgroundColor:"$background",boxShadow:"0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)",borderRadius:"$md",display:"flex",flexDirection:"column",transition:"box-shadow 0.3s ease-in-out","& button+button":{marginLeft:"$3"},"&:focus-visible":{outline:"$cdgBlue60 solid 2px"},"&:hover":{boxShadow:"0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 7.2px rgba(0, 0, 0, 0.13)",transition:"box-shadow 0.3s ease-in-out"},variants:{isDisabled:{true:{backgroundColor:"$gray20",userSelect:"none",cursor:"not-allowed",[`& ${f}`]:{color:"$gray50"},[`& ${y}`]:{color:"$gray50"}}},isShadowless:{true:{boxShadow:"none"}},isClickable:{true:{cursor:"pointer","&:active":{backgroundColor:"$gray20"}}},size:{sm:{maxWidth:"245px"},lg:{maxWidth:"396px"},full:{width:"100%"}}}}),N=h.forwardRef((t,o)=>{const{children:a,css:l={},isDisabled:s=!1,isShadowless:u=!1,isClickable:m=!1,size:b="full",...x}=t,C=g(o);return e(k,{...{isDisabled:s,isShadowless:u,isClickable:m},size:b,css:l,ref:C,...m?{tabIndex:1,role:"button"}:{},...x,children:a})}),r=N;r.Body=T;r.Image=z;r.Title=I;r.Action=w;r.Body.displayName="Card.Body";r.Image.displayName="Card.Image";r.Title.displayName="Card.Title";r.Action.displayName="Card.Action";r.Action.displayName="Card.Action";r.displayName="Card";const d=` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`,Z=()=>{const t="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80";return i(p,{children:[e("h3",{children:"Basic card small size"}),i(r,{size:"sm",children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:d.slice(0,d.length/5)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"primary",children:"Button"})]})]})]}),e("h3",{children:"Basic card large size"}),i(r,{size:"lg",children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:d.slice(0,d.length/2)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})]}),e("h3",{children:"Basic card full size"}),i(r,{size:"full",children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:d}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})]}),e("h3",{children:"Basic card customized size"}),i(r,{css:{maxWidth:"400px"},isClickable:!0,children:[e(r.Image,{src:t}),i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:d}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})]})]})},G=()=>i(p,{children:[e("h3",{children:"Default"}),e(r,{size:"lg",children:i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:d.slice(0,d.length/2)}),i(r.Action,{children:[e(n,{variant:"primary",children:"Button"}),e(n,{variant:"secondary",children:"Button"})]})]})}),e("h3",{children:"Disabled"}),e(r,{isDisabled:!0,size:"lg",children:i(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:d.slice(0,d.length/2)}),i(r.Action,{children:[e(n,{isDisabled:!0,variant:"primary",children:"Button"}),e(n,{isDisabled:!0,variant:"secondary",children:"Button"})]})]})})]}),J={decorators:[t=>i("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(t,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Z as Sizes,G as Variants,J as default};
