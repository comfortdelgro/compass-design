import{j as t}from"./jsx-runtime-ea7736fc.js";import{L as n}from"./layout-5fac5c12.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const o=()=>t.jsx("div",{style:{padding:"20px"},children:t.jsxs(n,{direction:"column",children:[t.jsx(n,{children:"Col 1"}),t.jsx(n,{children:"Col 2"}),t.jsx(n,{children:"Col 3"})]})}),r=()=>t.jsx("div",{style:{padding:"20px"},children:t.jsxs(n,{direction:"row",children:[t.jsx(n,{children:"Col 1"}),t.jsx(n,{children:"Col 2"}),t.jsx(n,{children:"Col 3"})]})}),e={height:"100px",border:"1px solid rgba(0,0,0,0.1)"},a=()=>t.jsxs(n,{style:{padding:"20px",gap:"20px"},children:[t.jsx(n,{direction:"row",align:"start-start",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"center-start",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"end-start",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"start-center",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"center-center",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"end-center",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"start-end",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"center-end",style:e,children:t.jsx(n,{children:"Content"})}),t.jsx(n,{direction:"row",align:"end-end",style:e,children:t.jsx(n,{children:"Content"})})]}),C={title:"Example/Layout",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"Row"};a.__docgenInfo={description:"",methods:[],displayName:"Align"};var i,s,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <Layout direction='column'>
        <Layout>Col 1</Layout>
        <Layout>Col 2</Layout>
        <Layout>Col 3</Layout>
      </Layout>
    </div>;
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,y;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <Layout direction='row'>
        <Layout>Col 1</Layout>
        <Layout>Col 2</Layout>
        <Layout>Col 3</Layout>
      </Layout>
    </div>;
}`,...(y=(c=r.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var u,p,L;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Layout style={{
    padding: '20px',
    gap: '20px'
  }}>
      <Layout direction='row' align='start-start' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='center-start' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='end-start' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='start-center' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='center-center' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='end-center' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='start-end' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='center-end' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
      <Layout direction='row' align='end-end' style={wrapperStyle}>
        <Layout>Content</Layout>
      </Layout>
    </Layout>;
}`,...(L=(p=a.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};const S=["Basic","Row","Align"];export{a as Align,o as Basic,r as Row,S as __namedExportsOrder,C as default};
