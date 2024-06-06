import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as i}from"./index-6c164b11.js";import{O as n}from"./index-b6f73d5b.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const t=()=>{const[a,l]=i.useState("12345678");return e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h2",{children:"Number OTP"}),e.jsx(n,{length:4,isNumberInput:!0,autoFocus:!0,onChangeOTP:o=>console.log("Number OTP: ",o)}),e.jsx("h2",{children:"6 Numbers"}),e.jsx(n,{isNumberInput:!0,autoFocus:!0,onChangeOTP:o=>console.log("Number OTP: ",o)}),e.jsx("h2",{children:"Controlled"}),e.jsx(n,{isNumberInput:!0,autoFocus:!0,otp:a,onChangeOTP:o=>l(o)}),e.jsx("h2",{children:"String OTP"}),e.jsx(n,{autoFocus:!0,length:4,onChangeOTP:o=>console.log("String OTP: ",o)}),e.jsx("h2",{children:"Disabled"}),e.jsx(n,{disabled:!0,length:4,onChangeOTP:o=>console.log("String OTP: ",o)}),e.jsx("h2",{children:"Error"}),e.jsx(n,{isErrored:!0,isNumberInput:!0,autoFocus:!0,onChangeOTP:o=>console.log("Number OTP: ",o)}),e.jsx("h2",{children:"Mobile view"}),e.jsx(n,{css:{marginBottom:"$8"},length:4,onChangeOTP:o=>console.log("String OTP: ",o),autoFocus:!0,isNumberInput:!0,isMobile:!0})]})},O={title:"Example/OTP Input",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};var r,s,u;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('12345678');
  return <div style={{
    padding: '2rem'
  }}>
      <h2>Number OTP</h2>
      <OTPInput length={4} isNumberInput autoFocus onChangeOTP={otp => console.log('Number OTP: ', otp)} />

      <h2>6 Numbers</h2>
      <OTPInput isNumberInput autoFocus onChangeOTP={otp => console.log('Number OTP: ', otp)} />

      <h2>Controlled</h2>
      <OTPInput isNumberInput autoFocus otp={value} onChangeOTP={otp => setValue(otp)} />

      <h2>String OTP</h2>
      <OTPInput autoFocus length={4} onChangeOTP={otp => console.log('String OTP: ', otp)} />

      <h2>Disabled</h2>
      <OTPInput disabled length={4} onChangeOTP={otp => console.log('String OTP: ', otp)} />

      <h2>Error</h2>
      <OTPInput isErrored isNumberInput autoFocus onChangeOTP={otp => console.log('Number OTP: ', otp)} />

      <h2>Mobile view</h2>
      <OTPInput css={{
      marginBottom: '$8'
    }} length={4} onChangeOTP={otp => console.log('String OTP: ', otp)} autoFocus isNumberInput isMobile />
    </div>;
}`,...(u=(s=t.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const P=["Variants"];export{t as Variants,P as __namedExportsOrder,O as default};
