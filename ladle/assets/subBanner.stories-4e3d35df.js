"use client";import{j as e}from"./jsx-runtime-ea7736fc.js";import{S as r}from"./index-16d9e09a.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./pick-child-c116e6b4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";const l={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},m="https://images.unsplash.com/photo-1603015445413-ffb825cedab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",d="https://images.unsplash.com/photo-1603015268794-b0a30631554d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",i=()=>e.jsxs("div",{style:{...l},children:[e.jsx("h3",{children:"Default Sub-banner is primary variant"}),e.jsxs(r,{children:[e.jsx(r.Image,{src:m}),e.jsx(r.Title,{children:"My Title"}),e.jsx(r.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]})]}),n=()=>e.jsxs("div",{style:{...l},children:[e.jsx("h3",{children:"Primary"}),e.jsxs(r,{variant:"primary",children:[e.jsx(r.Image,{src:m}),e.jsx(r.Title,{children:"My Title"}),e.jsx(r.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]}),e.jsx("h3",{children:"Secondary"}),e.jsxs(r,{variant:"secondary",children:[e.jsx(r.Image,{src:d}),e.jsx(r.Title,{children:"My Title"}),e.jsx(r.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]})]}),y={title:"Example/SubBanner",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Variant"};var t,s,a;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Default Sub-banner is primary variant</h3>
      <SubBanner>
        <SubBanner.Image src={horizontalBackgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    </div>;
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var o,c,u;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Primary</h3>
      <SubBanner variant='primary'>
        <SubBanner.Image src={horizontalBackgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>

      <h3>Secondary</h3>
      <SubBanner variant='secondary'>
        <SubBanner.Image src={verticalBackgroundSrc} />
        <SubBanner.Title>My Title</SubBanner.Title>
        <SubBanner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </SubBanner.Description>
      </SubBanner>
    </div>;
}`,...(u=(c=n.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const g=["Default","Variant"];export{i as Default,n as Variant,g as __namedExportsOrder,y as default};
