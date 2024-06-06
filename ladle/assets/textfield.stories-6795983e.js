import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as l}from"./heart-filled-5f2b210b.js";import{R as b}from"./index-6c164b11.js";import{T as r}from"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";const u={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"3rem"},n={display:"flex",flexDirection:"row",gap:"8px"},f=e.jsx("input",{value:"+64",onChange:()=>{},style:{fontSize:"0.8em",lineHeight:"1em",display:"flex",justifyContent:"center",alignItems:"center",appearance:"none",border:"none",width:"3rem"}}),s=()=>{const[o,y]=b.useState("");return e.jsxs("div",{style:{...u},children:[e.jsx("div",{style:{...n},children:e.jsx(r,{type:"number",placeholder:"Enter your name",isErrored:!0,helperText:"my helper text",errorMessage:"my error message",className:"my-class",onKeyDown:a=>console.log("onKeyDownTest",a)})}),e.jsx("h3",{children:"Controlled (min-max number input)"}),e.jsx("div",{style:{...n},children:e.jsx(r,{placeholder:"Pick a number from 1 - 100",value:o,onChange:a=>{const i=Number(a);(i>=0&&i<=100||a==="")&&y(a)}})}),e.jsx("h3",{children:"With Label"}),e.jsx("div",{style:{...n},children:e.jsx(r,{label:e.jsxs(e.Fragment,{children:["Name ",e.jsx(l,{})]}),placeholder:"Enter your name",isRequired:!0})}),e.jsx("h3",{children:"With Helper Text"}),e.jsx("div",{style:{...n},children:e.jsx(r,{label:"Name",placeholder:"Enter your name",helperText:"Helper Text"})}),e.jsx("h3",{children:"Error"}),e.jsx("div",{style:{...n},children:e.jsx(r,{isErrored:!0,label:"Name",placeholder:"Enter your name",helperText:"This is helpers text",errorMessage:"Errror"})}),e.jsx("h3",{children:"With Icons"}),e.jsxs("div",{style:{...n},children:[e.jsx(r,{label:"Name",leftIcon:e.jsx(l,{}),placeholder:"Enter your name"}),e.jsx(r,{label:"Name",rightIcon:e.jsx(l,{}),placeholder:"Enter your name"}),e.jsx(r,{label:"Name",leftIcon:e.jsx(l,{}),rightIcon:e.jsx(l,{}),placeholder:"Enter your name"})]}),e.jsx("h3",{children:"Disabled"}),e.jsxs("div",{style:{...n},children:[e.jsx(r,{label:"Name",placeholder:"Enter your name",isDisabled:!0}),e.jsx(r,{label:"Name",leftIcon:e.jsx(l,{}),placeholder:"Enter your name",isDisabled:!0}),e.jsx(r,{label:"Name",rightIcon:e.jsx(l,{}),placeholder:"Enter your name",isDisabled:!0}),e.jsx(r,{label:"Name",leftIcon:e.jsx(l,{}),rightIcon:e.jsx(l,{}),placeholder:"Enter your name",isDisabled:!0})]}),e.jsx("h3",{children:"Prefix"}),e.jsx("div",{style:{...n},children:e.jsx(r,{label:"Name",prefix:f,placeholder:"Enter your phone number"})}),e.jsx("h3",{children:"Password"}),e.jsx(r,{css:{width:"16rem"},label:"Password",placeholder:"Enter your password",helperText:"Your password should contain at least 18 characters.",password:!0}),e.jsx("h3",{children:"Max length"}),e.jsx(r,{css:{width:"16rem"},label:"Password",placeholder:"This has a max length of 10",helperText:"Your input should be equal or less than 10 characters.",maxLength:10}),e.jsx("h3",{children:"Min length"}),e.jsx(r,{css:{width:"16rem"},label:"Password",placeholder:"This has a min length of 5",helperText:"Your input should be equal or more than 5 characters.",minLength:5})]})},t=()=>e.jsx("div",{style:{...u},children:e.jsx(r,{type:"text",label:"Name",placeholder:"Enter your name",helperText:"my helper text",errorMessage:"my error message",className:"my-class",onKeyDown:o=>console.log("onKeyDownTest",o),h5:!0})}),D={title:"Example/Textfield ",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"ForH5Variant"};var d,h,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState('');
  return <div style={{
    ...style
  }}>
      <div style={{
      ...styleRow
    }}>
        <Textfield type='number' placeholder='Enter your name' isErrored helperText='my helper text' errorMessage='my error message' className='my-class' onKeyDown={e => console.log('onKeyDownTest', e)} />
      </div>
      <h3>Controlled (min-max number input)</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield placeholder='Pick a number from 1 - 100' value={value} onChange={value => {
        const valueAsNumber = Number(value);
        if (valueAsNumber >= 0 && valueAsNumber <= 100 || value === '') {
          setValue((value as string));
        }
        return;
      }} />
      </div>

      <h3>With Label</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield label={<>
              Name <HeartFilled />
            </>} placeholder='Enter your name' isRequired />
      </div>

      <h3>With Helper Text</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield label='Name' placeholder='Enter your name' helperText='Helper Text' />
      </div>

      <h3>Error</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield isErrored label='Name' placeholder='Enter your name' helperText='This is helpers text' errorMessage='Errror' />
      </div>

      <h3>With Icons</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield label='Name' leftIcon={<HeartFilled />} placeholder='Enter your name' />
        <Textfield label='Name' rightIcon={<HeartFilled />} placeholder='Enter your name' />
        <Textfield label='Name' leftIcon={<HeartFilled />} rightIcon={<HeartFilled />} placeholder='Enter your name' />
      </div>

      <h3>Disabled</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield label='Name' placeholder='Enter your name' isDisabled />
        <Textfield label='Name' leftIcon={<HeartFilled />} placeholder='Enter your name' isDisabled />
        <Textfield label='Name' rightIcon={<HeartFilled />} placeholder='Enter your name' isDisabled />
        <Textfield label='Name' leftIcon={<HeartFilled />} rightIcon={<HeartFilled />} placeholder='Enter your name' isDisabled />
      </div>
      <h3>Prefix</h3>
      <div style={{
      ...styleRow
    }}>
        <Textfield label='Name' prefix={Select} placeholder='Enter your phone number' />
      </div>
      <h3>Password</h3>
      <Textfield css={{
      width: '16rem'
    }} label='Password' placeholder='Enter your password' helperText='Your password should contain at least 18 characters.' password={true} />
      <h3>Max length</h3>
      <Textfield css={{
      width: '16rem'
    }} label='Password' placeholder='This has a max length of 10' helperText='Your input should be equal or less than 10 characters.' maxLength={10} />
      <h3>Min length</h3>
      <Textfield css={{
      width: '16rem'
    }} label='Password' placeholder='This has a min length of 5' helperText='Your input should be equal or more than 5 characters.' minLength={5} />
    </div>;
}`,...(c=(h=s.parameters)==null?void 0:h.docs)==null?void 0:c.source}}};var m,x,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <Textfield type='text' label='Name' placeholder='Enter your name'
    // isErrored
    helperText='my helper text' errorMessage='my error message' className='my-class' onKeyDown={e => console.log('onKeyDownTest', e)} h5 />
    </div>;
}`,...(p=(x=t.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};const H=["Basic","ForH5Variant"];export{s as Basic,t as ForH5Variant,H as __namedExportsOrder,D as default};
