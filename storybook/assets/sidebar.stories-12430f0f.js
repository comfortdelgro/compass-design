import{j as e}from"./jsx-runtime-9ef10904.js";import{R as o}from"./index-6c164b11.js";import"./index-f0ea8199.js";import{S as n}from"./index-7d11381a.js";import{B as t}from"./button-a57955c5.js";import"./objectToCSS-e90bd687.js";import"./pick-child-1fb557e7.js";import"./use-dom-ref-7c72e1a5.js";const m={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},i=()=>{const[h,s]=o.useState(!1),[l,r]=o.useState(!1);return e.jsxs("div",{style:{...m},children:[e.jsx("h3",{children:"Primary Sidebar"}),e.jsx(t,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:()=>s(!0),children:"Open sidebar"}),e.jsxs(n,{variant:"primary",isOpen:h,handleClose:()=>s(!1),children:[e.jsx(n.Title,{children:"My title"}),e.jsx(n.Content,{children:"My content"}),e.jsxs(n.Actions,{children:[e.jsx(t,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),e.jsx(t,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]}),e.jsx("h3",{children:"Secondary Sidebar"}),e.jsx(t,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:()=>r(!0),children:"Open sidebar"}),e.jsxs(n,{variant:"secondary",isOpen:l,handleClose:()=>r(!1),children:[e.jsx(n.Title,{children:"My title"}),e.jsx(n.Content,{children:"My content"}),e.jsxs(n.Actions,{children:[e.jsx(t,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),e.jsx(t,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]})]})},j={title:"Example/Sidebar",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};var a,d,c;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const [isPrimaryOpen, setIsPrimaryOpen] = React.useState(false);
  const [isSecondaryOpen, setIsSecondaryOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <h3>Primary Sidebar</h3>
      <Button css={{
      width: '9rem',
      height: '3.5rem',
      fontSize: '1em'
    }} onPress={() => setIsPrimaryOpen(true)}>
        Open sidebar
      </Button>
      <Sidebar variant='primary' isOpen={isPrimaryOpen} handleClose={() => setIsPrimaryOpen(false)}>
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{
          width: '45%',
          height: '100%',
          fontSize: '1em'
        }}>
            Action
          </Button>
          <Button css={{
          width: '45%',
          height: '100%',
          fontSize: '1em'
        }}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>

      <h3>Secondary Sidebar</h3>
      <Button css={{
      width: '9rem',
      height: '3.5rem',
      fontSize: '1em'
    }} onPress={() => setIsSecondaryOpen(true)}>
        Open sidebar
      </Button>
      <Sidebar variant='secondary' isOpen={isSecondaryOpen} handleClose={() => setIsSecondaryOpen(false)}>
        <Sidebar.Title>My title</Sidebar.Title>
        <Sidebar.Content>My content</Sidebar.Content>
        <Sidebar.Actions>
          <Button css={{
          width: '45%',
          height: '100%',
          fontSize: '1em'
        }}>
            Action
          </Button>
          <Button css={{
          width: '45%',
          height: '100%',
          fontSize: '1em'
        }}>
            Action
          </Button>
        </Sidebar.Actions>
      </Sidebar>
    </div>;
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const g=["Variants"];export{i as Variants,g as __namedExportsOrder,j as default};
