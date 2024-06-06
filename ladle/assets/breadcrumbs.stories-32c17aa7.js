import{j as r}from"./jsx-runtime-ea7736fc.js";import{H as l}from"./heart-filled-5f2b210b.js";import{B as e}from"./index-3170d50c.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const n=u=>window&&window.location?window.location.hash===`#${u}`:!1,s=()=>r.jsxs(e,{isCurrent:n,children:[r.jsx(e.Item,{href:"#0",children:"Home"}),r.jsx(e.Item,{href:"#1",children:"Library"}),r.jsx(e.Item,{href:"#2",isDisabled:!0,children:"Disabled"}),r.jsx(e.Item,{href:"#3",children:"Data"})]}),t=()=>r.jsxs(e,{dividerIcon:r.jsx(l,{}),isCurrent:n,children:[r.jsx(e.Item,{href:"#0",children:"Home"}),r.jsx(e.Item,{href:"#1",children:"Library"}),r.jsx(e.Item,{href:"#2",children:"Data"})]}),x={title:"Example/Breadcrumbs",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"CustomDivider"};var a,m,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Breadcrumbs isCurrent={isCurrent}>
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2' isDisabled>
        Disabled
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href='#3'>Data</Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var i,o,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Breadcrumbs dividerIcon={<HeartFilled />} isCurrent={isCurrent}>
      <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>
      <Breadcrumbs.Item href='#2'>Data</Breadcrumbs.Item>
    </Breadcrumbs>;
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const j=["Basic","CustomDivider"];export{s as Basic,t as CustomDivider,j as __namedExportsOrder,x as default};
