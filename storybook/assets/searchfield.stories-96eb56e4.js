import{j as e}from"./jsx-runtime-9ef10904.js";import{R as c}from"./index-6c164b11.js";import{S as t}from"./index-219208da.js";import"./button-a57955c5.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";import"./useCurrentTheme-3076cf6b.js";import"./useId-133e3351.js";const h={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},l=()=>{const[o,i]=c.useState("My initial value");return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Basic"}),e.jsx(t,{placeholder:"Search",onSubmit:r=>console.log(r),value:"Initial value",css:{width:"15rem"}}),e.jsx("h3",{children:"isErrored"}),e.jsx(t,{label:"SearchField isErrored = true",placeholder:"Search",onSubmit:r=>console.log(r),value:"Initial value",isErrored:!0,css:{width:"15rem"},errorMessage:"SearchField error message"}),e.jsx("h3",{children:"isDisabled"}),e.jsx(t,{isDisabled:!0,placeholder:"Search",css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:"isReadOnly"}),e.jsx(t,{isReadOnly:!0,placeholder:"Search",css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:"Controlled"}),e.jsx(t,{placeholder:"Search",value:o,onChange:r=>i(r),css:{width:"15rem"}}),e.jsx("h3",{children:" Max Length"}),e.jsx(t,{placeholder:"Search",maxLength:10,css:{width:"15rem"},onSubmit:r=>console.log(r)}),e.jsx("h3",{children:" Min Length"}),e.jsx(t,{placeholder:"Search",minLength:5,css:{width:"15rem"},onSubmit:r=>console.log(r)})]})},b={title:"Example/SearchField",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}};l.__docgenInfo={description:"",methods:[],displayName:"Variants"};var s,a,n;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(n=(a=l.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const j=["Variants"];export{l as Variants,j as __namedExportsOrder,b as default};
