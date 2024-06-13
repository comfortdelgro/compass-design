import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as c}from"./index-6c164b11.js";import{S as l}from"./index-56e6e3a9.js";import"./button-8faa8e19.js";import"./string-cf4adbb3.js";import"./use-dom-ref-7c72e1a5.js";import"./useCurrentTheme-474309da.js";const h={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},t=()=>{const[o,i]=c.useState("My initial value");return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Basic"}),e.jsx(l,{placeholder:"Search",onSubmit:r=>console.log(r),value:"Initial value",css:{width:"15rem"}}),e.jsx("h3",{children:"isErrored"}),e.jsx(l,{label:"SearchField isErrored = true",placeholder:"Search",onSubmit:r=>console.log(r),value:"Initial value",isErrored:!0,css:{width:"15rem"},errorMessage:"SearchField error message"}),e.jsx("h3",{children:"isDisabled"}),e.jsx(l,{isDisabled:!0,placeholder:"Search",css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:"isReadOnly"}),e.jsx(l,{isReadOnly:!0,placeholder:"Search",css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:"Controlled"}),e.jsx(l,{placeholder:"Search",value:o,onChange:r=>i(r),css:{width:"15rem"}}),e.jsx("h3",{children:" Max Length"}),e.jsx(l,{placeholder:"Search",maxLength:10,css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:" Min Length"}),e.jsx(l,{placeholder:"Search",minLength:5,css:{width:"15rem"},onSubmit:r=>console.log(r)})]})},v={title:"Example/SearchField",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};var s,a,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('My initial value');
  return <div style={{
    ...style
  }}>
      <h3>Basic</h3>
      <SearchField placeholder='Search' onSubmit={text => console.log(text)} value={'Initial value'} css={{
      width: '15rem'
    }} />

      <h3>isErrored</h3>
      <SearchField label='SearchField isErrored = true' placeholder='Search' onSubmit={text => console.log(text)} value={'Initial value'} isErrored={true} css={{
      width: '15rem'
    }} errorMessage='SearchField error message' />

      <h3>isDisabled</h3>
      <SearchField isDisabled placeholder='Search' css={{
      width: '15rem'
    }} onSubmit={text => console.log(text)} />
      <h3>isReadOnly</h3>
      <SearchField isReadOnly placeholder='Search' css={{
      width: '15rem'
    }} onSubmit={text => console.log(text)} />

      <h3>Controlled</h3>
      <SearchField placeholder='Search' value={value} onChange={value => setValue(value)} css={{
      width: '15rem'
    }} />
      <h3> Max Length</h3>
      <SearchField placeholder='Search' maxLength={10} css={{
      width: '15rem'
    }} onSubmit={text => console.log(text)} />
      <h3> Min Length</h3>
      <SearchField placeholder='Search' minLength={5} css={{
      width: '15rem'
    }} onSubmit={text => console.log(text)} />
    </div>;
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const b=["Variants"];export{t as Variants,b as __namedExportsOrder,v as default};
