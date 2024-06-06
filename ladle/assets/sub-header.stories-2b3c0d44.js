"use client";import{j as e}from"./jsx-runtime-ea7736fc.js";import"./index-7972436d.js";import{S as i}from"./index-b8816cdb.js";import{B as r}from"./button-be34d763.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const t={display:"flex",flexDirection:"column",height:"100%",width:"100%",gap:"0.5rem"},n=()=>e.jsxs("div",{style:{padding:"3em"},children:[e.jsxs("div",{style:{marginBottom:"2rem",...t,alignItems:"flex-start"},children:[e.jsx("h3",{children:"Default"}),e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx(i.Title,{children:"Title"})}),e.jsx(i.Description,{children:"Description."})]}),e.jsx("h3",{children:"With actions"}),e.jsxs(i,{variant:"h5",css:{"@mobile":{flexDirection:"column",alignItems:"unset"}},children:[e.jsxs("div",{style:{flex:1,...t},children:[e.jsx(i.Header,{children:e.jsx(i.Title,{children:"Title"})}),e.jsx(i.Description,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt harum quaerat earum vitae veritatis molestiae vel commodi iste tempore magni, officia eaque repudiandae pariatur voluptate maiores debitis sed, reprehenderit assumenda."})]}),e.jsxs("div",{style:{...t,width:"fit-content",flexWrap:"wrap",flexDirection:"row"},children:[e.jsx(r,{type:"button",size:"sm",children:"Call to action"}),e.jsx(r,{type:"button",variant:"secondary",size:"sm",children:"Call to action"})]})]})]}),e.jsx("h3",{children:"H5"}),e.jsx("div",{style:{position:"relative",width:375,height:500,backgroundColor:"#f4f4f4",border:"1px solid #f0f0f0"},children:e.jsx("div",{style:t,children:e.jsxs(i,{variant:"h5",children:[e.jsxs(i.Body,{children:[e.jsx(i.Header,{children:e.jsx(i.Title,{variant:"h5",children:"Main Title"})}),e.jsxs(i.Description,{variant:"h5",children:["First line description! ",e.jsx("br",{}),"Second line description!"]})]}),e.jsx(i.Image,{src:"https://i.ibb.co/Tr9kWZ9/Image.png"})]})})})]}),x={title:"Example/Sub Header",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};var a,s,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
        <SubHeader variant='h5' css={{
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

      <h3>H5</h3>
      <div style={{
      position: 'relative',
      width: 375,
      height: 500,
      backgroundColor: '#f4f4f4',
      border: '1px solid #f0f0f0'
    }}>
        <div style={style}>
          <SubHeader variant='h5'>
            <SubHeader.Body>
              <SubHeader.Header>
                <SubHeader.Title variant='h5'>Main Title</SubHeader.Title>
              </SubHeader.Header>
              <SubHeader.Description variant='h5'>
                First line description! <br />
                Second line description!
              </SubHeader.Description>
            </SubHeader.Body>
            <SubHeader.Image src='https://i.ibb.co/Tr9kWZ9/Image.png' />
          </SubHeader>
        </div>
      </div>
    </div>;
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const f=["Default"];export{n as Default,f as __namedExportsOrder,x as default};
