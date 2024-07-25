import{j as e}from"./jsx-runtime-9ef10904.js";import{B as n}from"./index-a6cd513d.js";import"./index-6c164b11.js";import"./objectToCSS-e90bd687.js";import"./pick-child-1fb557e7.js";import"./use-dom-ref-7c72e1a5.js";const m={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},r="https://images.unsplash.com/photo-1614227154650-69524d5fb1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",s=()=>e.jsxs("div",{style:{...m},children:[e.jsx("h3",{children:"Default banner is medium sized"}),e.jsxs(n,{children:[e.jsx(n.Image,{src:r}),e.jsx(n.Title,{children:"My Title"}),e.jsx(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste corrupti esse qui earum dolorum."})]})]}),i=()=>e.jsxs("div",{style:{...m},children:[e.jsx("h3",{children:"Small sized Banner"}),e.jsxs(n,{size:"sm",children:[e.jsx(n.Image,{src:r}),e.jsx(n.Title,{children:"My Title"}),e.jsx(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]}),e.jsx("h3",{children:"Medium sized Banner"}),e.jsxs(n,{size:"md",children:[e.jsx(n.Image,{src:r}),e.jsx(n.Title,{children:"My Title"}),e.jsx(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]}),e.jsx("h3",{children:"Large sized Banner"}),e.jsxs(n,{size:"lg",children:[e.jsx(n.Image,{src:r}),e.jsx(n.Title,{children:"My Title"}),e.jsx(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]}),e.jsx("h3",{children:"Full sized Banner"}),e.jsxs(n,{size:"full",children:[e.jsx(n.Image,{src:r}),e.jsx(n.Title,{children:"My Title"}),e.jsx(n.Description,{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."})]})]}),j={title:"Example/Banner",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Basic"};i.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var t,a,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Default banner is medium sized</h3>
      <Banner>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
          corrupti esse qui earum dolorum.
        </Banner.Description>
      </Banner>
    </div>;
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var o,l,d;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Small sized Banner</h3>
      <Banner size='sm'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Medium sized Banner</h3>
      <Banner size='md'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Large sized Banner</h3>
      <Banner size='lg'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>

      <h3>Full sized Banner</h3>
      <Banner size='full'>
        <Banner.Image src={backgroundSrc} />
        <Banner.Title>My Title</Banner.Title>
        <Banner.Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Banner.Description>
      </Banner>
    </div>;
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const T=["Basic","Sizes"];export{s as Basic,i as Sizes,T as __namedExportsOrder,j as default};
