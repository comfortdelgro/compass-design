import{s,R as l,j as e,a as d,F as h}from"./index-66ea3676.js";import"./index-8280f91b.js";import{B as m}from"./button-912db37c.js";import{C as u,R as f}from"./components-e805f086.js";import"./use-dom-ref-dc5008e6.js";const p=s("div",{paddingLeft:"$4"}),g=l.forwardRef((r,i)=>{const{children:a,css:n={},...o}=r;return e(p,{ref:i,css:n,...o,children:a})}),b=g,H=s("p",{margin:"0",variants:{variant:{default:{fontSize:"$label1",color:"$gray70",margin:"0"},h5:{fontSize:"$label1",fontWeight:"$medium",lineHeight:"20px"}}}}),S=l.forwardRef((r,i)=>{const{children:a,css:n={},variant:o="default",...c}=r;return e(H,{ref:i,css:n,variant:o,...c,children:a})}),y=S,v=s("div",{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"$3"}),w=l.forwardRef((r,i)=>{const{children:a,css:n={},...o}=r;return e(v,{ref:i,css:n,...o,children:a})}),$=w,D=s("img",{margin:"0",height:104}),x=l.forwardRef((r,i)=>{const{css:a={},...n}=r;return e(D,{ref:i,css:a,...n})}),T=x,I=s("h1",{margin:0,color:"$grayShades100 !important",variants:{variant:{default:{fontWeight:"$semibold",fontSize:"$header5",lineHeight:"$normal"},h5:{fontSize:"$header2",fontWeight:"700",lineHeight:"42px"}}}}),B=l.forwardRef((r,i)=>{const{children:a,css:n={},variant:o="default",...c}=r;return e(I,{ref:i,css:n,...c,variant:o,children:a})}),R=B,W=s("div",{display:"flex",gap:"$2",variants:{variant:{default:{flexDirection:"column"},h5:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}}}),z=l.forwardRef((r,i)=>{const{children:a,css:n={},variant:o="default",...c}=r;return e(W,{ref:i,css:n,variant:o,...c,children:a})}),t=z;t.Header=$;t.Title=R;t.Description=y;t.Image=T;t.Body=b;t.Header.displayName="SubHeader.Header";t.Title.displayName="SubHeader.Title";t.Description.displayName="SubHeader.Description";t.Image.displayName="SubHeader.Image";t.Body.displayName="SubHeader.Body";const L=()=>d(h,{children:[d(u,{css:{marginBottom:"$8"},children:[e("h3",{children:"Default"}),d(t,{children:[e(t.Header,{children:e(t.Title,{children:"Title"})}),e(t.Description,{children:"Description."})]}),e("h3",{children:"With actions"}),d(t,{variant:"h5",css:{"@mobile":{flexDirection:"column",alignItems:"unset"}},children:[d(u,{css:{flex:1},children:[e(t.Header,{children:e(t.Title,{children:"Title"})}),e(t.Description,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum quaerat earum vitae veritatis molestiae vel commodi iste tempore magni, officia eaque repudiandae pariatur voluptate maiores debitis sed, reprehenderit assumenda."})]}),d(f,{css:{width:"fit-content",flexWrap:"wrap"},children:[e(m,{type:"button",size:"sm",children:"Call to action"}),e(m,{type:"button",variant:"secondary",size:"sm",children:"Call to action"})]})]})]}),e("h3",{children:"H5"}),e("div",{style:{position:"relative",width:375,height:500,backgroundColor:"#f4f4f4",border:"1px solid #f0f0f0"},children:e(u,{children:d(t,{variant:"h5",children:[d(t.Body,{children:[e(t.Header,{children:e(t.Title,{variant:"h5",children:"Main Title"})}),d(t.Description,{variant:"h5",children:["First line description! ",e("br",{}),"Second line description!"]})]}),e(t.Image,{src:"https://i.ibb.co/Tr9kWZ9/Image.png"})]})})})]}),_={decorators:[r=>d("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(r,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{L as Default,_ as default};
