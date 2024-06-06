import{j as e}from"./jsx-runtime-ea7736fc.js";import"./index-7972436d.js";import{C as t}from"./index-02337fb0.js";import{S as l}from"./index-27851459.js";import{D as n}from"./index-4cb193f3.js";import{B as s}from"./button-be34d763.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./useCurrentTheme-474309da.js";import"./string-de12cf5f.js";const d=` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
  corrupti esse qui earum dolorum nulla assumenda excepturi, a
  quibusdam rem eligendi vero hic, doloremque nam deserunt,
  consequuntur aut atque eveniet.
  `,r=()=>{const a=e.jsx(t,{size:"lg",children:e.jsxs(t.Body,{children:[e.jsx(t.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:d.slice(0,d.length/2)})]})});return e.jsxs("div",{children:[e.jsx("h3",{children:"Default"}),e.jsxs(n,{children:[e.jsx(n.Header,{children:"My header"}),e.jsxs(n.Content,{children:[a,a,e.jsx(l,{}),e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[e.jsx(s,{css:{width:"48%"},children:"Action"}),e.jsx(s,{variant:"danger",css:{width:"48%"},children:"Warning"})]})]})]})]})},S={title:"Example/Dashboard Sidecard",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const CustomCard = <Card size='lg'>
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <p style={{
        margin: 0
      }}>{lorem.slice(0, lorem.length / 2)}</p>
      </Card.Body>
    </Card>;
  return <div>
      <h3>Default</h3>
      <DashboardSidecard>
        <DashboardSidecard.Header>My header</DashboardSidecard.Header>
        <DashboardSidecard.Content>
          {CustomCard}
          {CustomCard}
          <SearchField />
          <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
            <Button css={{
            width: '48%'
          }}>Action</Button>
            <Button variant='danger' css={{
            width: '48%'
          }}>
              Warning
            </Button>
          </div>
        </DashboardSidecard.Content>
      </DashboardSidecard>
    </div>;
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,S as default};
