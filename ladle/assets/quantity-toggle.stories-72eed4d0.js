import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as c}from"./index-6c164b11.js";import{Q as l}from"./index-73b3188c.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";import"./index-0d3b18cd.js";import"./NumberParser-bd499a26.js";const a=()=>{const[s,i]=c.useState(0);return e.jsxs("div",{children:[e.jsx("h3",{children:"Controlled"}),e.jsx(l,{placeholder:"Price",label:"Potato Price",value:s,onChange:n=>i(n),formatOptions:{style:"currency",currency:"USD"},onUpdate:(n,u)=>{console.log("onUpdate value",n),console.log("onUpdate number",u)}}),e.jsx("h3",{children:"Un-Controlled"}),e.jsx(l,{label:"Potato Price",placeholder:"Price",formatOptions:{style:"currency",currency:"USD"}}),e.jsx("h3",{children:"Step values"}),e.jsx(l,{label:"Step",step:10}),e.jsx(l,{label:"Step + minValue",minValue:2,step:3}),e.jsx(l,{label:"Step + minValue + maxValue",minValue:2,maxValue:21,step:3}),e.jsx("h3",{children:"Units"}),e.jsx(l,{label:"Package width",defaultValue:4,formatOptions:{style:"unit",unit:"inch",unitDisplay:"long"}}),e.jsx(l,{label:"Transaction amount",defaultValue:45,formatOptions:{style:"currency",currency:"EUR",currencyDisplay:"code",currencySign:"accounting"}}),e.jsx("h3",{children:"Enable Scroll"}),e.jsx(l,{label:"Potato Price",placeholder:"Price",disableScroll:!1}),e.jsx("h3",{children:"Disabled"}),e.jsx(l,{label:"Disabled",isDisabled:!0,defaultValue:25}),e.jsx("h3",{children:"Read only"}),e.jsx(l,{label:"Read only",isReadOnly:!0,defaultValue:32}),e.jsx("h3",{children:"Errored"}),e.jsx(l,{label:"Errored",defaultValue:2,isErrored:!0,errorMessage:"asdasdasd",helperText:"Bla Bla Bla"})]})},V={title:"Example/Quantity Toggle",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Variants"};var t,r,o;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState(0);
  return <div>
      <h3>Controlled</h3>
      <QuantityToggle placeholder='Price' label='Potato Price' value={value} onChange={e => setValue(e)} formatOptions={{
      style: 'currency',
      currency: 'USD'
    }} onUpdate={(value, number) => {
      console.log('onUpdate value', value);
      console.log('onUpdate number', number);
    }} />
      <h3>Un-Controlled</h3>
      <QuantityToggle label='Potato Price' placeholder='Price' formatOptions={{
      style: 'currency',
      currency: 'USD'
    }} />
      <h3>Step values</h3>
      <QuantityToggle label='Step' step={10} />
      <QuantityToggle label='Step + minValue' minValue={2} step={3} />
      <QuantityToggle label='Step + minValue + maxValue' minValue={2} maxValue={21} step={3} />
      <h3>Units</h3>
      <QuantityToggle label='Package width' defaultValue={4} formatOptions={{
      style: 'unit',
      unit: 'inch',
      unitDisplay: 'long'
    }} />
      <QuantityToggle label='Transaction amount' defaultValue={45} formatOptions={{
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'code',
      currencySign: 'accounting'
    }} />
      <h3>Enable Scroll</h3>
      <QuantityToggle label='Potato Price' placeholder='Price' disableScroll={false} />
      <h3>Disabled</h3>
      <QuantityToggle label='Disabled' isDisabled defaultValue={25} />
      <h3>Read only</h3>
      <QuantityToggle label='Read only' isReadOnly defaultValue={32} />
      <h3>Errored</h3>
      <QuantityToggle label='Errored' defaultValue={2} isErrored errorMessage='asdasdasd' helperText='Bla Bla Bla' />
    </div>;
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const f=["Variants"];export{a as Variants,f as __namedExportsOrder,V as default};
