import{j as e}from"./jsx-runtime-9ef10904.js";import"./index-68dd90e7.js";import{S as t}from"./index-9ba5e071.js";import{B as r}from"./button-03dcac20.js";import"./index-6c164b11.js";import"./string-b39bd50e.js";import"./use-dom-ref-7c72e1a5.js";const n={display:"flex",flexDirection:"column",height:"100%",width:"100%",gap:"0.5rem"},i=()=>e.jsx("div",{style:{padding:"3em"},children:e.jsxs("div",{style:{marginBottom:"2rem",...n,alignItems:"flex-start"},children:[e.jsx("h3",{children:"Default"}),e.jsxs(t,{children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Title"})}),e.jsx(t.Description,{children:"Description."})]}),e.jsx("h3",{children:"With actions"}),e.jsxs(t,{css:{"@mobile":{flexDirection:"column",alignItems:"unset"}},children:[e.jsxs("div",{style:{flex:1,...n},children:[e.jsx(t.Header,{children:e.jsx(t.Title,{children:"Title"})}),e.jsx(t.Description,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum quaerat earum vitae veritatis molestiae vel commodi iste tempore magni, officia eaque repudiandae pariatur voluptate maiores debitis sed, reprehenderit assumenda."})]}),e.jsxs("div",{style:{...n,width:"fit-content",flexWrap:"wrap",flexDirection:"row"},children:[e.jsx(r,{type:"button",size:"sm",children:"Call to action"}),e.jsx(r,{type:"button",variant:"secondary",size:"sm",children:"Call to action"})]})]})]})}),x={title:"Example/Sub Header",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,s,o;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '3em'
  }}>
      <div style={{
      marginBottom: '2rem',
      ...style,
      alignItems: 'flex-start'
    }}>
        <h3>Default</h3>
        <SubHeader>
          <SubHeader.Header>
            <SubHeader.Title>Title</SubHeader.Title>
          </SubHeader.Header>
          <SubHeader.Description>Description.</SubHeader.Description>
        </SubHeader>

        <h3>With actions</h3>
        <SubHeader css={{
        '@mobile': {
          flexDirection: 'column',
          alignItems: 'unset'
        }
      }}>
          <div style={{
          flex: 1,
          ...style
        }}>
            <SubHeader.Header>
              <SubHeader.Title>Title</SubHeader.Title>
            </SubHeader.Header>
            <SubHeader.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              harum quaerat earum vitae veritatis molestiae vel commodi iste
              tempore magni, officia eaque repudiandae pariatur voluptate
              maiores debitis sed, reprehenderit assumenda.
            </SubHeader.Description>
          </div>
          <div style={{
          ...style,
          width: 'fit-content',
          flexWrap: 'wrap',
          flexDirection: 'row'
        }}>
            <Button type='button' size='sm'>
              Call to action
            </Button>
            <Button type='button' variant='secondary' size='sm'>
              Call to action
            </Button>
          </div>
        </SubHeader>
      </div>
    </div>;
}`,...(o=(s=i.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const f=["Default"];export{i as Default,f as __namedExportsOrder,x as default};
