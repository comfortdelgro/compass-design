"use client";import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as g}from"./index-6c164b11.js";import{P as a}from"./index-b3d59218.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./index-3e7fd8c3.js";import"./color-214871c7.js";import"./pick-child-c116e6b4.js";import"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./useId-133e3351.js";const l={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},t=()=>{const[p,i]=g.useState(1);return e.jsxs("div",{style:{...l},children:[e.jsx("h3",{children:"1. Total pages prop"}),e.jsx(a,{total:1e9}),e.jsx("h3",{children:"2. Current page prop"}),e.jsx(a,{total:1e9,page:3}),e.jsx("h3",{children:"3. OnChange prop"}),e.jsx(a,{rowsOptions:[5,10,15,20],rowsPerPage:5,onRowsPerPageChange:o=>{console.log(o)},page:p,total:10,onChange:o=>i(o),count:100})]})},E={title:"Example/Pagination",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  return <div style={{
    ...style
  }}>
      <h3>1. Total pages prop</h3>
      <Pagination total={1000000000} />
      <h3>2. Current page prop</h3>
      <Pagination total={1000000000} page={3} />
      <h3>3. OnChange prop</h3>
      <Pagination rowsOptions={[5, 10, 15, 20]} rowsPerPage={5} onRowsPerPageChange={rows => {
      console.log(rows);
    }} page={page} total={10} onChange={page => setPage(page)} count={100}></Pagination>
    </div>;
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const _=["Variants"];export{t as Variants,_ as __namedExportsOrder,E as default};
