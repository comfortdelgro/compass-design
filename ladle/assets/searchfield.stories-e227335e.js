import{a as t,j as e,R as n}from"./index-4cf56b06.js";import{C as a}from"./components-c8fb4e9c.js";import{S as r}from"./index-42113918.js";import"./button-5ff0d000.js";import"./use-dom-ref-e8fa133a.js";import"./useCurrentTheme-eaeb8c44.js";const S=()=>{const[l,i]=n.useState("My initial value");return t(a,{children:[e("h3",{children:"Basic"}),e(r,{placeholder:"Search",onSubmit:o=>console.log(o),value:"Initial value",css:{width:"10rem"}}),e("h3",{children:"isErrored"}),e(r,{placeholder:"Search",onSubmit:o=>console.log(o),value:"Initial value",isErrored:!0,css:{width:"10rem"}}),e("h3",{children:"isDisabled"}),e(r,{isDisabled:!0,placeholder:"Search",css:{width:"10rem"},onSubmit:o=>console.log(o)}),e("h3",{children:"isReadOnly"}),e(r,{isReadOnly:!0,placeholder:"Search",css:{width:"10rem"},onSubmit:o=>console.log(o)}),e("h3",{children:"Controlled"}),e(r,{placeholder:"Search",value:l,onChange:o=>i(o),css:{width:"10rem"}}),e("h3",{children:" Max Length"}),e(r,{placeholder:"Search",maxLength:10,css:{width:"10rem"},onSubmit:o=>console.log(o)}),e("h3",{children:" Min Length"}),e(r,{placeholder:"Search",minLength:5,css:{width:"10rem"},onSubmit:o=>console.log(o)})]})},p={decorators:[l=>t("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(l,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Variants,p as default};
