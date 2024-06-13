import{j as t}from"./jsx-runtime-ea7736fc.js";import{r as e}from"./index-6c164b11.js";import{t as x}from"./toString-0ef0ca41.js";import{D as s}from"./dropdown-textfield-5e606f52.js";import"./isObjectLike-c4ff7b99.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./index-d8a01d3f.js";import"./use-dom-ref-7c72e1a5.js";import"./color-214871c7.js";import"./pick-child-1fb557e7.js";import"./string-cf4adbb3.js";import"./index-53a599f3.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./useId-133e3351.js";import"./index-2802fc62.js";import"./useCurrentTheme-474309da.js";const y=(a,o)=>e.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 4320 2880",ref:o,...a},e.createElement("path",{fill:"#ed2939",d:"M0 0h4320v2880H0z"}),e.createElement("path",{fill:"#fff",d:"M0 1440h4320v1440H0zM1481.678 720a541.5 541.5 0 11-1083 0 541.5 541.5 0 111083 0z"}),e.createElement("path",{fill:"#ed2939",d:"M1651.835 720a511.735 511.735 0 11-1023.47 0 511.735 511.735 0 111023.47 0z"}),e.createElement("path",{fill:"#fff",id:"sgp_svg__a",d:"M1007.195 733.064l-73.56-56.43-73.542 56.457 28.313-90.994-73.795-56.092 91.06.193 27.934-91.123 27.964 91.113 91.06-.226-73.777 56.119 28.343 90.983z"}),e.createElement("use",{transform:"translate(577.189)",href:"#sgp_svg__a"}),e.createElement("use",{transform:"translate(288.889 -214.211)",href:"#sgp_svg__a"}),e.createElement("use",{transform:"translate(108 342.749)",href:"#sgp_svg__a"}),e.createElement("use",{transform:"translate(469.189 342.749)",href:"#sgp_svg__a"})),_=e.forwardRef(y),b=_,v=(a,o)=>e.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 7410 3900",ref:o,...a},e.createElement("path",{fill:"#b22234",d:"M0 0h7410v3900H0z"}),e.createElement("path",{d:"M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0",stroke:"#fff",strokeWidth:300}),e.createElement("path",{fill:"#3c3b6e",d:"M0 0h2964v2100H0z"}),e.createElement("g",{fill:"#fff"},e.createElement("g",{id:"usa_svg__d"},e.createElement("g",{id:"usa_svg__c"},e.createElement("g",{id:"usa_svg__e"},e.createElement("g",{id:"usa_svg__b"},e.createElement("path",{id:"usa_svg__a",d:"M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"}),e.createElement("use",{y:420,href:"#usa_svg__a"}),e.createElement("use",{y:840,href:"#usa_svg__a"}),e.createElement("use",{y:1260,href:"#usa_svg__a"})),e.createElement("use",{y:1680,href:"#usa_svg__a"})),e.createElement("use",{x:247,y:210,href:"#usa_svg__b"})),e.createElement("use",{x:494,href:"#usa_svg__c"})),e.createElement("use",{x:988,href:"#usa_svg__d"}),e.createElement("use",{x:1976,href:"#usa_svg__c"}),e.createElement("use",{x:2470,href:"#usa_svg__e"}))),E=e.forwardRef(v),w=E,p={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"3rem"},T={display:"flex",flexDirection:"row",gap:"8px"},l=[{value:"mr",label:"Mr",icon:null},{value:"ms",label:"Ms",icon:null},{value:"mrs",label:"Mrs",icon:null}],i=[{value:"+65",label:"65",icon:t.jsx(b,{})},{value:"+1",label:"1",icon:t.jsx(w,{})}],r=()=>{const[a,o]=e.useState(""),[c,d]=e.useState(""),n=(g,f)=>{o(g),d(x(f))};return e.useEffect(()=>{setTimeout(()=>{o("mr"),d("test")},1e3)},[]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{...p},children:[t.jsx("h3",{children:"Default"}),t.jsx(s,{options:l,inputType:"text",onChange:n,label:"Name",defaultInputValue:c,defaultSelectedKey:a}),t.jsx("h3",{children:"Errored"}),t.jsx(s,{options:l,inputType:"text",onChange:n,label:"Name",isErrored:!0,errorMessage:"Oops, something happens."}),t.jsx("h3",{children:"Readonly"}),t.jsx(s,{options:l,inputType:"text",onChange:n,label:"Name",isReadOnly:!0}),t.jsx("h3",{children:"Disabled"}),t.jsx(s,{options:l,inputType:"text",onChange:n,label:"Name",isDisabled:!0}),t.jsx("h3",{children:"With icons"}),t.jsx(s,{options:i,inputType:"text",onChange:n,label:"Enter your mobile number"}),t.jsx("h3",{children:"Required"}),t.jsx(s,{options:i,inputType:"password",onChange:n,label:"Enter your mobile number",isRequired:!0})]}),t.jsxs("div",{style:{...T},children:[t.jsxs("div",{style:{...p},children:[t.jsx("h3",{children:"Min length"}),t.jsx(s,{options:i,inputType:"text",onChange:n,label:"Enter your mobile number",minLength:5})]}),t.jsxs("div",{style:{...p},children:[t.jsx("h3",{children:"Max length"}),t.jsx(s,{options:i,inputType:"text",onChange:n,label:"Enter your mobile number",maxLength:10})]})]})]})},U={title:"Example/Dropdown Textfield",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};r.__docgenInfo={description:"",methods:[],displayName:"Variants"};var h,u,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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

          <DropdownTextfield options={phoneDropdownOptions} inputType='text' onChange={handleInputsChange} label='Enter your mobile number' minLength={5} />
        </div>
        <div style={{
        ...style
      }}>
          <h3>Max length</h3>

          <DropdownTextfield options={phoneDropdownOptions} inputType='text' onChange={handleInputsChange} label='Enter your mobile number' maxLength={10} />
        </div>
      </div>
    </>;
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["Variants"];export{r as Variants,A as __namedExportsOrder,U as default};
