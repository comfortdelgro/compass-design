import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as i}from"./index-6c164b11.js";import{S as t}from"./index-27851459.js";import"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./useCurrentTheme-474309da.js";const c={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},n=()=>{const[a,h]=i.useState("My initial value");return e.jsxs("div",{style:{...c},children:[e.jsx("h3",{children:"Basic"}),e.jsx(t,{placeholder:"Search",onSubmit:r=>console.log(r),value:"Initial value",css:{width:"15rem"}}),e.jsx("h3",{children:"isErrored"}),e.jsx(t,{label:"SearchField isErrored = true",placeholder:"Search",onSubmit:r=>console.log(r),value:"Initial value",isErrored:!0,css:{width:"15rem"},errorMessage:"SearchField error message"}),e.jsx("h3",{children:"isDisabled"}),e.jsx(t,{isDisabled:!0,placeholder:"Search",css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:"isReadOnly"}),e.jsx(t,{isReadOnly:!0,placeholder:"Search",css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:"Controlled"}),e.jsx(t,{placeholder:"Search",value:a,onChange:r=>h(r),css:{width:"15rem"}}),e.jsx("h3",{children:" Max Length"}),e.jsx(t,{placeholder:"Search",maxLength:10,css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:" Min Length"}),e.jsx(t,{placeholder:"Search",minLength:5,css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:" H5"}),e.jsx(t,{placeholder:"Search",minLength:5,css:{width:"343px"},h5:!0,onSubmit:r=>console.log(r)}),e.jsx("h3",{children:" H5 Searchfield with box shadow"}),e.jsx(t,{placeholder:"Search",minLength:5,css:{width:"343px",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 4px;"},h5:!0,onSubmit:r=>console.log(r)})]})},w={title:"Example/SearchField",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};var l,s,o;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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

      <h3> H5</h3>
      <SearchField placeholder='Search' minLength={5} css={{
      width: '343px'
    }} h5 onSubmit={text => console.log(text)} />

      <h3> H5 Searchfield with box shadow</h3>
      <SearchField placeholder='Search' minLength={5} css={{
      width: '343px',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 4px;'
    }} h5 onSubmit={text => console.log(text)} />
    </div>;
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const j=["Variants"];export{n as Variants,j as __namedExportsOrder,w as default};
