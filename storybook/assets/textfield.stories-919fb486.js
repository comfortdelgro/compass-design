import{j as e}from"./jsx-runtime-9ef10904.js";import{H as r}from"./heart-filled-5f2b210b.js";import{R as m}from"./index-6c164b11.js";import{T as l}from"./index-d7c7ead6.js";import"./useCurrentTheme-3076cf6b.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";const x={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"3rem"},n={display:"flex",flexDirection:"row",gap:"8px"},u=e.jsx("input",{value:"+64",onChange:()=>{},style:{fontSize:"0.8em",lineHeight:"1em",display:"flex",justifyContent:"center",alignItems:"center",appearance:"none",border:"none",width:"3rem"}}),a=()=>{const[h,c]=m.useState("");return e.jsxs("div",{style:{...x},children:[e.jsx("div",{style:{...n},children:e.jsx(l,{type:"number",placeholder:"Enter your name",isErrored:!0,helperText:"my helper text",errorMessage:"my error message",className:"my-class",onKeyDown:s=>console.log("onKeyDownTest",s)})}),e.jsx("h3",{children:"Controlled (min-max number input)"}),e.jsx("div",{style:{...n},children:e.jsx(l,{placeholder:"Pick a number from 1 - 100",value:h,onChange:s=>{const t=Number(s);(t>=0&&t<=100||s==="")&&c(s)}})}),e.jsx("h3",{children:"With Label"}),e.jsx("div",{style:{...n},children:e.jsx(l,{label:e.jsxs(e.Fragment,{children:["Name ",e.jsx(r,{})]}),placeholder:"Enter your name",isRequired:!0})}),e.jsx("h3",{children:"With Helper Text"}),e.jsx("div",{style:{...n},children:e.jsx(l,{label:"Name",placeholder:"Enter your name",helperText:"Helper Text"})}),e.jsx("h3",{children:"Error"}),e.jsx("div",{style:{...n},children:e.jsx(l,{isErrored:!0,label:"Name",placeholder:"Enter your name",helperText:"This is helpers text",errorMessage:"Errror"})}),e.jsx("h3",{children:"With Icons"}),e.jsxs("div",{style:{...n},children:[e.jsx(l,{label:"Name",leftIcon:e.jsx(r,{}),placeholder:"Enter your name"}),e.jsx(l,{label:"Name",rightIcon:e.jsx(r,{}),placeholder:"Enter your name"}),e.jsx(l,{label:"Name",leftIcon:e.jsx(r,{}),rightIcon:e.jsx(r,{}),placeholder:"Enter your name"})]}),e.jsx("h3",{children:"Disabled"}),e.jsxs("div",{style:{...n},children:[e.jsx(l,{label:"Name",placeholder:"Enter your name",isDisabled:!0}),e.jsx(l,{label:"Name",leftIcon:e.jsx(r,{}),placeholder:"Enter your name",isDisabled:!0}),e.jsx(l,{label:"Name",rightIcon:e.jsx(r,{}),placeholder:"Enter your name",isDisabled:!0}),e.jsx(l,{label:"Name",leftIcon:e.jsx(r,{}),rightIcon:e.jsx(r,{}),placeholder:"Enter your name",isDisabled:!0})]}),e.jsx("h3",{children:"Prefix"}),e.jsx("div",{style:{...n},children:e.jsx(l,{label:"Name",prefix:u,placeholder:"Enter your phone number"})}),e.jsx("h3",{children:"Password"}),e.jsx(l,{css:{width:"16rem"},label:"Password",placeholder:"Enter your password",helperText:"Your password should contain at least 18 characters.",password:!0}),e.jsx("h3",{children:"Max length"}),e.jsx(l,{css:{width:"16rem"},label:"Password",placeholder:"This has a max length of 10",helperText:"Your input should be equal or less than 10 characters.",maxLength:10}),e.jsx("h3",{children:"Min length"}),e.jsx(l,{css:{width:"16rem"},label:"Password",placeholder:"This has a min length of 5",helperText:"Your input should be equal or more than 5 characters.",minLength:5})]})},E={title:"Example/Textfield ",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var o,i,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const w=["Basic"];export{a as Basic,w as __namedExportsOrder,E as default};
