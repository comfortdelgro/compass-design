import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as n,R as u}from"./index-6c164b11.js";import{S as i,a as S,u as j}from"./useSnackbar-234ef792.js";import{B as r}from"./button-be34d763.js";import{S as s}from"./index-3e7fd8c3.js";import"./index-8ce02b55.js";import"./index-4593f2b5.js";import"./objectToCSS-aff350d4.js";import"./pick-child-c116e6b4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";import"./color-214871c7.js";import"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-318acb9e.js";import"./useId-133e3351.js";const b=(t,c)=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",ref:c,...t},n.createElement("g",{fill:"currentColor"},n.createElement("path",{d:"M7.29289 5.73758C7.68342 6.12811 8.31658 6.12811 8.70711 5.73758L12.7376 1.70711C13.1281 1.31658 13.7613 1.31658 14.1518 1.70711L14.2929 1.8482C14.6834 2.23873 14.6834 2.87189 14.2929 3.26242L10.2624 7.29289C9.87189 7.68342 9.87189 8.31658 10.2624 8.70711L14.2929 12.7376C14.6834 13.1281 14.6834 13.7613 14.2929 14.1518L14.1518 14.2929C13.7613 14.6834 13.1281 14.6834 12.7376 14.2929L8.70711 10.2624C8.31658 9.87189 7.68342 9.87189 7.29289 10.2624L3.26242 14.2929C2.87189 14.6834 2.23873 14.6834 1.8482 14.2929L1.70711 14.1518C1.31658 13.7613 1.31658 13.1281 1.70711 12.7376L5.73758 8.70711C6.12811 8.31658 6.12811 7.68342 5.73758 7.29289L1.70711 3.26242C1.31658 2.87189 1.31658 2.23873 1.70711 1.8482L1.8482 1.70711C2.23873 1.31658 2.87189 1.31658 3.26242 1.70711L7.29289 5.73758Z",fill:"currentColor"}))),D=n.forwardRef(b),l=D,L=(t,c)=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 33",ref:c,...t},n.createElement("g",{fill:"currentColor"},n.createElement("path",{d:"M30.6651 25.8438L18.1666 4.71875C17.2097 3.09375 14.7949 3.09375 13.8316 4.71875L1.339 25.8438C0.37744 27.4629 1.57508 29.5 3.50236 29.5H28.4993C30.4189 29.5 31.6202 27.4688 30.6651 25.8438ZM14.5922 11.3929C14.5922 10.6239 15.2221 10 15.9985 10C16.7749 10 17.4048 10.6268 17.4048 11.3929V18.8214C17.4048 19.5904 16.7749 20.2143 16.0512 20.2143C15.3276 20.2143 14.5922 19.5933 14.5922 18.8214V11.3929ZM15.9985 25.7857C14.9813 25.7857 14.1563 24.9686 14.1563 23.9611C14.1563 22.9536 14.9807 22.1364 15.9985 22.1364C17.0163 22.1364 17.8408 22.9536 17.8408 23.9611C17.8384 24.9674 17.0181 25.7857 15.9985 25.7857Z"}))),v=n.forwardRef(L),m=v,k={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem",gap:"0.5rem"},a=()=>{const[t,c]=u.useState("success"),[y,d]=u.useState(!1);return e.jsxs("div",{style:{...k},children:[e.jsx("h3",{children:"Default snackbar"}),e.jsxs(s.Select,{css:{width:"44rem"},isRequired:!0,label:"Please select type",placeholder:"Choose a type",selectedKey:t,onSelectionChange:p=>c(p),children:[e.jsx(s.Item,{children:"Default"},"default"),e.jsx(s.Item,{children:"Error"},"error"),e.jsx(s.Item,{children:"Success"},"success"),e.jsx(s.Item,{children:"Warning"},"warning"),e.jsx(s.Item,{children:"Reminder"},"reminder"),e.jsx(s.Item,{children:"Ongoing"},"ongoing")]}),e.jsx(r,{css:{width:"10rem"},onPress:()=>d(!0),children:"Open Snackbar"}),e.jsxs(i,{id:"snackbar-1",isOpen:y,handleClose:()=>d(!1),type:t,onClick:(p,I)=>console.log(I),css:{width:"343px"},children:[e.jsx(i.PrefixIcon,{children:e.jsx(m,{})}),e.jsx(i.Text,{children:"Text goes here"}),e.jsx(i.SuffixIcon,{children:e.jsx(l,{})})]})]})},O=()=>{const t=j();return e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(r,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({type:"success",text:"Lorem ipsum dolor, sit amet consectetur Lorem ipsum  consectetur Lorem ipsum dolor, sit amet consectetur",prefixIcon:e.jsx(m,{}),suffixIcon:e.jsx(l,{}),autoClose:!1}),children:"Open snackbar"}),e.jsx(r,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",autoClose:!1,prefixIcon:e.jsx(m,{}),type:"success"}),children:"Without suffix icon"}),e.jsx(r,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",autoClose:!1,suffixIcon:e.jsx(l,{}),type:"success"}),children:"Without prefix icon"}),e.jsx(r,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",autoClose:!1,type:"success",suffixIcon:!1}),children:"With text only"}),e.jsx(r,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",suffixIcon:!1,type:"success",autoClose:3e3}),children:"Autoclose after 3000ms"}),e.jsx(r,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.clearAll(),children:"Clear all snackbars"})]})},o=()=>e.jsxs("div",{style:{...k},children:[e.jsx("h3",{children:"Snackbar as a service"}),e.jsx(S,{children:e.jsx(O,{})})]}),$={title:"Example/Snackbar",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var f,h,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [type, setType] = React.useState<'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'>('success');
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <h3>Default snackbar</h3>
      <Dropdown.Select css={{
      width: '44rem'
    }} isRequired label='Please select type' placeholder='Choose a type' selectedKey={type} onSelectionChange={(k: Key) => setType((k as 'default' | 'error' | 'success' | 'warning' | 'reminder' | 'ongoing'))}>
        <Dropdown.Item key='default'>Default</Dropdown.Item>
        <Dropdown.Item key='error'>Error</Dropdown.Item>
        <Dropdown.Item key='success'>Success</Dropdown.Item>
        <Dropdown.Item key='warning'>Warning</Dropdown.Item>
        <Dropdown.Item key='reminder'>Reminder</Dropdown.Item>
        <Dropdown.Item key='ongoing'>Ongoing</Dropdown.Item>
      </Dropdown.Select>
      <Button css={{
      width: '10rem'
    }} onPress={() => setIsDefaultOpen(true)}>
        Open Snackbar
      </Button>
      <Snackbar id='snackbar-1' isOpen={isDefaultOpen} handleClose={() => setIsDefaultOpen(false)} type={type} onClick={(e, id) => console.log(id)} css={{
      width: '343px'
    }}>
        <Snackbar.PrefixIcon>
          <WarningIcon />
        </Snackbar.PrefixIcon>
        <Snackbar.Text>Text goes here</Snackbar.Text>
        <Snackbar.SuffixIcon>
          <CloseIcon />
        </Snackbar.SuffixIcon>
      </Snackbar>
    </div>;
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var C,g,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Snackbar as a service</h3>
      <SnackbarContextProvider>
        <SubService />
      </SnackbarContextProvider>
    </div>;
}`,...(w=(g=o.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const z=["Default","Multiple"];export{a as Default,o as Multiple,z as __namedExportsOrder,$ as default};
