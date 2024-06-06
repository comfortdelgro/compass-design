import{j as e}from"./jsx-runtime-ea7736fc.js";import{C as r}from"./index-02337fb0.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const s=` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`,t=z=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray10)"},children:z.children}),i="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",n=()=>e.jsx(t,{children:e.jsxs(r,{size:"sm",children:[e.jsx(r.Image,{src:i}),e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/4)})]})]})}),l=()=>e.jsxs(t,{children:[e.jsx("h3",{children:"Basic card small size"}),e.jsxs(r,{size:"sm",children:[e.jsx(r.Image,{src:i}),e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/5)})]})]}),e.jsx("h3",{children:"Basic card large size"}),e.jsxs(r,{size:"lg",children:[e.jsx(r.Image,{src:i}),e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/2)})]})]}),e.jsx("h3",{children:"Basic card full size"}),e.jsxs(r,{size:"full",children:[e.jsx(r.Image,{src:i}),e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s})]})]}),e.jsx("h3",{children:"Basic card customized size"}),e.jsxs(r,{css:{maxWidth:"400px"},children:[e.jsx(r.Image,{src:i}),e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s})]})]})]}),a=()=>e.jsxs(t,{children:[e.jsx("h3",{children:"Default"}),e.jsx(r,{size:"lg",children:e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/2)})]})}),e.jsx("h3",{children:"Disabled"}),e.jsx(r,{isDisabled:!0,size:"lg",children:e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/2)})]})}),e.jsx("h3",{children:"Default - Shadowless"}),e.jsx(r,{size:"lg",isShadowless:!0,children:e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/2)})]})}),e.jsx("h3",{children:"Clickable"}),e.jsx(r,{size:"lg",isShadowless:!0,isClickable:!0,children:e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/2)})]})}),e.jsx("h3",{children:"Disabled - Shadowless"}),e.jsx(r,{isDisabled:!0,size:"lg",isShadowless:!0,children:e.jsxs(r.Body,{children:[e.jsx(r.Title,{children:"Card title"}),e.jsx("p",{style:{margin:0},children:s.slice(0,s.length/2)})]})})]}),d=()=>e.jsx(t,{children:e.jsx(r,{size:"sm",children:e.jsxs(r.Body,{css:{backgroundColor:"var(--cdg-color-cdgBlue40)"},children:[e.jsx(r.Title,{css:{fontSize:"1.5rem"},children:"Card title"}),e.jsx("p",{style:{margin:0,fontSize:"1rem"},children:s.slice(0,s.length/4)})]})})}),I={title:"Example/Card",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};l.__docgenInfo={description:"",methods:[],displayName:"Sizes"};a.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"Custom"};var c,o,h;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Container>
      <Card size='sm'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 4)}</p>
        </Card.Body>
      </Card>
    </Container>;
}`,...(h=(o=n.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};var m,C,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <Container>
      <h3>Basic card small size</h3>
      <Card size='sm'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 5)}</p>
        </Card.Body>
      </Card>

      <h3>Basic card large size</h3>
      <Card size='lg'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>

      <h3>Basic card full size</h3>
      <Card size='full'>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem}</p>
        </Card.Body>
      </Card>

      <h3>Basic card customized size</h3>
      <Card css={{
      maxWidth: '400px'
    }}>
        <Card.Image src={backgroundSrc} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem}</p>
        </Card.Body>
      </Card>
    </Container>;
}`,...(g=(C=l.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var u,p,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Container>
      <h3>Default</h3>
      <Card size='lg'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Disabled</h3>
      <Card isDisabled={true} size='lg'>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Default - Shadowless</h3>
      <Card size='lg' isShadowless={true}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Clickable</h3>
      <Card size='lg' isShadowless={true} isClickable>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
      <h3>Disabled - Shadowless</h3>
      <Card isDisabled={true} size='lg' isShadowless={true}>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <p style={{
          margin: 0
        }}>{lorem.slice(0, lorem.length / 2)}</p>
        </Card.Body>
      </Card>
    </Container>;
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var j,y,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <Container>
      <Card size='sm'>
        <Card.Body css={{
        backgroundColor: 'var(--cdg-color-cdgBlue40)'
      }}>
          <Card.Title css={{
          fontSize: '1.5rem'
        }}>Card title</Card.Title>
          <p style={{
          margin: 0,
          fontSize: '1rem'
        }}>
            {lorem.slice(0, lorem.length / 4)}
          </p>
        </Card.Body>
      </Card>
    </Container>;
}`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const k=["Basic","Sizes","Variants","Custom"];export{n as Basic,d as Custom,l as Sizes,a as Variants,k as __namedExportsOrder,I as default};
