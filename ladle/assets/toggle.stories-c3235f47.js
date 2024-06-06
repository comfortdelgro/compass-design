import{j as e}from"./jsx-runtime-ea7736fc.js";import{T as s}from"./index-1825d005.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";const i={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},l=()=>e.jsxs("div",{style:{...i},children:[e.jsx("h3",{children:"Small"}),e.jsxs("div",{style:{flexDirection:"row",...i},children:[e.jsx(s,{size:"sm"}),e.jsx(s,{size:"sm",defaultSelected:!0}),e.jsx(s,{size:"sm",isDisabled:!0}),e.jsx(s,{size:"sm",defaultSelected:!0,isDisabled:!0})]}),e.jsx("h3",{children:"Large"}),e.jsxs("div",{style:{flexDirection:"row",...i},children:[e.jsx(s,{size:"lg"}),e.jsx(s,{size:"lg",defaultSelected:!0}),e.jsx(s,{size:"lg",isDisabled:!0}),e.jsx(s,{size:"lg",defaultSelected:!0,isDisabled:!0})]}),e.jsx("h3",{children:"H5"}),e.jsxs("div",{style:{flexDirection:"row",...i},children:[e.jsx(s,{variant:"h5"}),e.jsx(s,{variant:"h5",defaultSelected:!0}),e.jsx(s,{variant:"h5",isDisabled:!0}),e.jsx(s,{variant:"h5",defaultSelected:!0,isDisabled:!0})]})]}),t=()=>e.jsxs("div",{style:{...i},children:[e.jsx("h3",{children:"Controlled"}),e.jsx(s,{size:"lg",isSelected:!0}),e.jsx("h3",{children:"UnControlled"}),e.jsx(s,{size:"lg",defaultSelected:!0}),e.jsx("h3",{children:"Disabled"}),e.jsx(s,{size:"lg",isDisabled:!0}),e.jsx("h3",{children:"ReadOnly"}),e.jsx(s,{size:"lg",isReadOnly:!0}),e.jsx("h3",{children:"Required"}),e.jsx(s,{size:"lg",isRequired:!0})]}),p={title:"Example/Toggle ",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}};l.__docgenInfo={description:"",methods:[],displayName:"Variants"};t.__docgenInfo={description:"",methods:[],displayName:"State"};var n,r,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <h3>Small</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Toggle size='sm' />
      <Toggle size='sm' defaultSelected />
      <Toggle size='sm' isDisabled />
      <Toggle size='sm' defaultSelected isDisabled />
    </div>
    <h3>Large</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Toggle size='lg' />
      <Toggle size='lg' defaultSelected />
      <Toggle size='lg' isDisabled />
      <Toggle size='lg' defaultSelected isDisabled />
    </div>
    <h3>H5</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Toggle variant='h5' />
      <Toggle variant='h5' defaultSelected />
      <Toggle variant='h5' isDisabled />
      <Toggle variant='h5' defaultSelected isDisabled />
    </div>
  </div>`,...(d=(r=l.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var a,o,g;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Controlled</h3>
      <Toggle size='lg' isSelected={true} />

      <h3>UnControlled</h3>
      <Toggle size='lg' defaultSelected={true} />

      <h3>Disabled</h3>
      <Toggle size='lg' isDisabled />

      <h3>ReadOnly</h3>
      <Toggle size='lg' isReadOnly />

      <h3>Required</h3>
      <Toggle size='lg' isRequired />
    </div>;
}`,...(g=(o=t.parameters)==null?void 0:o.docs)==null?void 0:g.source}}};const z=["Variants","State"];export{t as State,l as Variants,z as __namedExportsOrder,p as default};
