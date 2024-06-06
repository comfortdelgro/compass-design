import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as n}from"./index-6c164b11.js";import{t as E}from"./toString-0ef0ca41.js";import{S as u}from"./index-3e7fd8c3.js";import{T}from"./index-9fb2cabb.js";import{T as m}from"./index-898776bc.js";import{D as t}from"./dropdown-textfield-210a5270.js";import"./isObjectLike-c4ff7b99.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./use-dom-ref-7c72e1a5.js";import"./color-214871c7.js";import"./pick-child-c116e6b4.js";import"./objectToCSS-aff350d4.js";import"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./useId-133e3351.js";import"./useCurrentTheme-474309da.js";const D=(a,o)=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 4320 2880",ref:o,...a},n.createElement("path",{fill:"#ed2939",d:"M0 0h4320v2880H0z"}),n.createElement("path",{fill:"#fff",d:"M0 1440h4320v1440H0zM1481.678 720a541.5 541.5 0 11-1083 0 541.5 541.5 0 111083 0z"}),n.createElement("path",{fill:"#ed2939",d:"M1651.835 720a511.735 511.735 0 11-1023.47 0 511.735 511.735 0 111023.47 0z"}),n.createElement("path",{fill:"#fff",id:"sgp_svg__a",d:"M1007.195 733.064l-73.56-56.43-73.542 56.457 28.313-90.994-73.795-56.092 91.06.193 27.934-91.123 27.964 91.113 91.06-.226-73.777 56.119 28.343 90.983z"}),n.createElement("use",{transform:"translate(577.189)",href:"#sgp_svg__a"}),n.createElement("use",{transform:"translate(288.889 -214.211)",href:"#sgp_svg__a"}),n.createElement("use",{transform:"translate(108 342.749)",href:"#sgp_svg__a"}),n.createElement("use",{transform:"translate(469.189 342.749)",href:"#sgp_svg__a"})),j=n.forwardRef(D),C=j,M=(a,o)=>n.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 7410 3900",ref:o,...a},n.createElement("path",{fill:"#b22234",d:"M0 0h7410v3900H0z"}),n.createElement("path",{d:"M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0",stroke:"#fff",strokeWidth:300}),n.createElement("path",{fill:"#3c3b6e",d:"M0 0h2964v2100H0z"}),n.createElement("g",{fill:"#fff"},n.createElement("g",{id:"usa_svg__d"},n.createElement("g",{id:"usa_svg__c"},n.createElement("g",{id:"usa_svg__e"},n.createElement("g",{id:"usa_svg__b"},n.createElement("path",{id:"usa_svg__a",d:"M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"}),n.createElement("use",{y:420,href:"#usa_svg__a"}),n.createElement("use",{y:840,href:"#usa_svg__a"}),n.createElement("use",{y:1260,href:"#usa_svg__a"})),n.createElement("use",{y:1680,href:"#usa_svg__a"})),n.createElement("use",{x:247,y:210,href:"#usa_svg__b"})),n.createElement("use",{x:494,href:"#usa_svg__c"})),n.createElement("use",{x:988,href:"#usa_svg__d"}),n.createElement("use",{x:1976,href:"#usa_svg__c"}),n.createElement("use",{x:2470,href:"#usa_svg__e"}))),S=n.forwardRef(M),I=S,p={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"3rem"},O={display:"flex",flexDirection:"row",gap:"8px"},s=[{value:"mr",label:"Mr",icon:null},{value:"ms",label:"Ms",icon:null},{value:"mrs",label:"Mrs",icon:null}],i=[{value:"+65",label:"65",icon:e.jsx(C,{})},{value:"+1",label:"1",icon:e.jsx(I,{})}],r=()=>{const[a,o]=n.useState(""),[_,h]=n.useState(""),l=(v,w)=>{o(v),h(E(w))};return n.useEffect(()=>{setTimeout(()=>{o("mr"),h("test")},1e3)},[]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{...p},children:[e.jsx("h3",{children:"Default"}),e.jsx(t,{options:s,inputType:"text",onChange:l,label:"Name",defaultInputValue:_,defaultSelectedKey:a}),e.jsx("h3",{children:"Errored"}),e.jsx(t,{options:s,inputType:"text",onChange:l,label:"Name",isErrored:!0,errorMessage:"Oops, something happens."}),e.jsx("h3",{children:"Readonly"}),e.jsx(t,{options:s,inputType:"text",onChange:l,label:"Name",isReadOnly:!0}),e.jsx("h3",{children:"Disabled"}),e.jsx(t,{options:s,inputType:"text",onChange:l,label:"Name",isDisabled:!0}),e.jsx("h3",{children:"With icons"}),e.jsx(t,{options:i,inputType:"text",onChange:l,label:"Enter your mobile number"}),e.jsx("h3",{children:"Required"}),e.jsx(t,{options:i,inputType:"password",onChange:l,label:"Enter your mobile number",isRequired:!0})]}),e.jsxs("div",{style:{...O},children:[e.jsxs("div",{style:{...p},children:[e.jsx("h3",{children:"Min length"}),e.jsx(t,{options:i,inputType:"text",onChange:l,label:"Enter your mobile number",minLength:5,placeholder:"Min length of 5"})]}),e.jsxs("div",{style:{...p},children:[e.jsx("h3",{children:"Max length"}),e.jsx(t,{options:i,inputType:"text",onChange:l,label:"Enter your mobile number",maxLength:10,placeholder:"Max length of 10"})]})]})]})},d=()=>e.jsxs("div",{style:{...p},children:[e.jsx("h4",{children:"Your Information"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{options:s,inputType:"text",label:"Name",h5:!0,dropdownPlaceholder:"Select gender",textfieldPlaceholder:"Enter name"}),e.jsx(t,{options:i,inputType:"text",label:"Mobile Number",h5:!0}),e.jsx(m,{h5:!0,type:"email",value:"sallylee@gmail.com",label:"Email"})]}),e.jsx("h4",{children:"Your Information"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(u.Select,{h5:!0,label:"Feedback",defaultSelectedKey:"General",children:e.jsx(u.Item,{children:"General"},"General")}),e.jsx(m,{placeholder:"Enter trip number",h5:!0}),e.jsx(T,{variant:"h5",placeholder:"Type your feedback here",resizable:!1,wordCount:!0,maxLength:200,label:"Details"})]})]}),X={title:"Example/Dropdown Textfield",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};r.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"H5Form"};var c,x,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [dropdownKey, setDropdownKey] = useState<string>('');
  const [textfieldValue, setTextfieldValue] = useState<string>('');
  const handleInputsChange = (selectedKey: string, value: string | number) => {
    setDropdownKey(selectedKey);
    setTextfieldValue(toString(value));
  };
  useEffect(() => {
    setTimeout(() => {
      setDropdownKey('mr');
      setTextfieldValue('test');
    }, 1000);
  }, []);
  return <>
      <div style={{
      ...style
    }}>
        <h3>Default</h3>

        <DropdownTextfield options={dropdownOptions} inputType='text' onChange={handleInputsChange} label='Name' defaultInputValue={textfieldValue} defaultSelectedKey={dropdownKey} />
        <h3>Errored</h3>

        <DropdownTextfield options={dropdownOptions} inputType='text' onChange={handleInputsChange} label='Name' isErrored errorMessage='Oops, something happens.' />

        <h3>Readonly</h3>

        <DropdownTextfield options={dropdownOptions} inputType='text' onChange={handleInputsChange} label='Name' isReadOnly />

        <h3>Disabled</h3>

        <DropdownTextfield options={dropdownOptions} inputType='text' onChange={handleInputsChange} label='Name' isDisabled />
        <h3>With icons</h3>

        <DropdownTextfield options={phoneDropdownOptions} inputType='text' onChange={handleInputsChange} label='Enter your mobile number' />
        <h3>Required</h3>

        <DropdownTextfield options={phoneDropdownOptions} inputType='password' onChange={handleInputsChange} label='Enter your mobile number' isRequired={true} />
      </div>
      <div style={{
      ...styleRow
    }}>
        <div style={{
        ...style
      }}>
          <h3>Min length</h3>

          <DropdownTextfield options={phoneDropdownOptions} inputType='text' onChange={handleInputsChange} label='Enter your mobile number' minLength={5} placeholder='Min length of 5' />
        </div>
        <div style={{
        ...style
      }}>
          <h3>Max length</h3>

          <DropdownTextfield options={phoneDropdownOptions} inputType='text' onChange={handleInputsChange} label='Enter your mobile number' maxLength={10} placeholder='Max length of 10' />
        </div>
      </div>
    </>;
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var g,y,b;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h4>Your Information</h4>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <DropdownTextfield options={dropdownOptions} inputType='text' label='Name' h5 dropdownPlaceholder='Select gender' textfieldPlaceholder='Enter name' />
        <DropdownTextfield options={phoneDropdownOptions} inputType='text' label='Mobile Number' h5 />
        <TextField h5 type='email' value={'sallylee@gmail.com'} label={'Email'} />
      </div>

      <h4>Your Information</h4>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Dropdown.Select h5 label='Feedback' defaultSelectedKey={'General'}>
          <Dropdown.Item key={'General'}>General</Dropdown.Item>
        </Dropdown.Select>
        <TextField placeholder='Enter trip number' h5 />
        <Textarea variant='h5' placeholder='Type your feedback here' resizable={false} wordCount maxLength={200} label={'Details'} />
      </div>
    </div>;
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const Z=["Variants","H5Form"];export{d as H5Form,r as Variants,Z as __namedExportsOrder,X as default};
