import{j as e}from"./jsx-runtime-ea7736fc.js";import{S as n}from"./index-5e221ed0.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const t=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Text"}),e.jsx(n,{variant:"text",children:e.jsx("h1",{children:"Text"})}),e.jsx("h3",{children:"Circular"}),e.jsx(n,{variant:"circular",width:40,height:40}),e.jsx("h3",{children:"Rectangular"}),e.jsx(n,{variant:"rectangular",width:210,height:60}),e.jsx("h3",{children:"Rounded"}),e.jsx(n,{variant:"rounded",width:210,height:60}),e.jsx("h3",{children:"Children Shape"}),e.jsx(n,{variant:"rectangular",children:e.jsx("div",{style:{width:210,height:120}})})]}),a=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Pulse"}),e.jsx(n,{}),e.jsx("h3",{children:"Wave"}),e.jsx(n,{animation:"wave"}),e.jsx("h3",{children:"False"}),e.jsx(n,{animation:!1})]}),p={title:"Example/Skeleton",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};a.__docgenInfo={description:"",methods:[],displayName:"Animations"};var r,i,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => <div>
    <h3>Text</h3>
    <Skeleton variant='text'>
      <h1>Text</h1>
    </Skeleton>
    <h3>Circular</h3>
    <Skeleton variant='circular' width={40} height={40} />
    <h3>Rectangular</h3>
    <Skeleton variant='rectangular' width={210} height={60} />
    <h3>Rounded</h3>
    <Skeleton variant='rounded' width={210} height={60} />
    <h3>Children Shape</h3>
    <Skeleton variant='rectangular'>
      <div style={{
      width: 210,
      height: 120
    }} />
    </Skeleton>
  </div>`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var h,o,d;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div>
    <h3>Pulse</h3>
    <Skeleton />
    <h3>Wave</h3>
    <Skeleton animation='wave' />
    <h3>False</h3>
    <Skeleton animation={false} />
  </div>`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const j=["Variants","Animations"];export{a as Animations,t as Variants,j as __namedExportsOrder,p as default};
