import{j as e}from"./jsx-runtime-ea7736fc.js";import{C as l}from"./cross-bdcb89a4.js";import{r as a,R as u}from"./index-6c164b11.js";import{S as c,a as C,u as j}from"./useSnackbar-4f49a84b.js";import{B as n}from"./button-8faa8e19.js";import{S as s}from"./index-d8a01d3f.js";import"./index-8ce02b55.js";import"./index-4593f2b5.js";import"./string-cf4adbb3.js";import"./pick-child-1fb557e7.js";import"./use-dom-ref-7c72e1a5.js";import"./color-214871c7.js";import"./index-53a599f3.js";import"./floating-ui.react.esm-06842318.js";import"./index-318acb9e.js";import"./useId-133e3351.js";const b=(t,i)=>a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 33",ref:i,...t},a.createElement("g",{fill:"currentColor"},a.createElement("path",{d:"M30.6651 25.8438L18.1666 4.71875C17.2097 3.09375 14.7949 3.09375 13.8316 4.71875L1.339 25.8438C0.37744 27.4629 1.57508 29.5 3.50236 29.5H28.4993C30.4189 29.5 31.6202 27.4688 30.6651 25.8438ZM14.5922 11.3929C14.5922 10.6239 15.2221 10 15.9985 10C16.7749 10 17.4048 10.6268 17.4048 11.3929V18.8214C17.4048 19.5904 16.7749 20.2143 16.0512 20.2143C15.3276 20.2143 14.5922 19.5933 14.5922 18.8214V11.3929ZM15.9985 25.7857C14.9813 25.7857 14.1563 24.9686 14.1563 23.9611C14.1563 22.9536 14.9807 22.1364 15.9985 22.1364C17.0163 22.1364 17.8408 22.9536 17.8408 23.9611C17.8384 24.9674 17.0181 25.7857 15.9985 25.7857Z"}))),D=a.forwardRef(b),m=D,y={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem",gap:"0.5rem"},o=()=>{const[t,i]=u.useState("success"),[S,d]=u.useState(!1);return e.jsxs("div",{style:{...y},children:[e.jsx("h3",{children:"Default snackbar"}),e.jsxs(s.Select,{css:{width:"44rem"},isRequired:!0,label:"Please select type",placeholder:"Choose a type",selectedKey:t,onSelectionChange:p=>i(p),children:[e.jsx(s.Item,{children:"Default"},"default"),e.jsx(s.Item,{children:"Error"},"error"),e.jsx(s.Item,{children:"Success"},"success"),e.jsx(s.Item,{children:"Warning"},"warning"),e.jsx(s.Item,{children:"Reminder"},"reminder"),e.jsx(s.Item,{children:"Ongoing"},"ongoing")]}),e.jsx(n,{css:{width:"10rem"},onPress:()=>d(!0),children:"Open Snackbar"}),e.jsxs(c,{id:"snackbar-1",isOpen:S,handleClose:()=>d(!1),type:t,onClick:(p,I)=>console.log(I),css:{width:"343px"},children:[e.jsx(c.PrefixIcon,{children:e.jsx(m,{})}),e.jsx(c.Text,{children:"Text goes here"}),e.jsx(c.SuffixIcon,{children:e.jsx(l,{})})]})]})},v=()=>{const t=j();return e.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[e.jsx(n,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({type:"success",text:"Lorem ipsum dolor, sit amet consectetur Lorem ipsum  consectetur Lorem ipsum dolor, sit amet consectetur",prefixIcon:e.jsx(m,{}),suffixIcon:e.jsx(l,{}),autoClose:!1}),children:"Open snackbar"}),e.jsx(n,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",autoClose:!1,prefixIcon:e.jsx(m,{}),type:"success"}),children:"Without suffix icon"}),e.jsx(n,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",autoClose:!1,suffixIcon:e.jsx(l,{}),type:"success"}),children:"Without prefix icon"}),e.jsx(n,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",autoClose:!1,type:"success",suffixIcon:!1}),children:"With text only"}),e.jsx(n,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.show({text:"Lorem ipsum dolor, sit amet consectetur",suffixIcon:!1,type:"success",autoClose:3e3}),children:"Autoclose after 3000ms"}),e.jsx(n,{css:{width:"fit-content",marginBottom:"1rem"},onClick:()=>t.clearAll(),children:"Clear all snackbars"})]})},r=()=>e.jsxs("div",{style:{...y},children:[e.jsx("h3",{children:"Snackbar as a service"}),e.jsx(C,{children:e.jsx(v,{})})]}),V={title:"Example/Snackbar",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,k,w;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Snackbar as a service</h3>
      <SnackbarContextProvider>
        <SubService />
      </SnackbarContextProvider>
    </div>;
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const H=["Default","Multiple"];export{o as Default,r as Multiple,H as __namedExportsOrder,V as default};
