import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as h}from"./heart-filled-5f2b210b.js";import{r as d}from"./index-6c164b11.js";import{T as r}from"./index-9fb2cabb.js";import"./useCurrentTheme-474309da.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";const x={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:"3rem"},a=()=>{const[n,o]=d.useState("My initial value");return e.jsxs("div",{style:{...x},children:[e.jsx("h3",{children:" H5"}),e.jsx(r,{variant:"h5",placeholder:"Type your feedback here",css:{textarea:{height:"129px"}},label:"Details",resizable:!1,wordCount:!0,maxLength:200}),e.jsx("h3",{children:" Simple textarea"}),e.jsx(r,{placeholder:"Enter your message"}),e.jsx("br",{}),e.jsx("h3",{children:" Textarea with label and isRequired"}),e.jsx(r,{label:e.jsxs(e.Fragment,{children:["My custom label  ",e.jsx(h,{style:{fontSize:"0.9em"}})]}),placeholder:"Enter your message",isRequired:!0}),e.jsx("br",{}),e.jsx("h3",{children:" Textarea with word count and max length"}),e.jsx(r,{label:"Text Label",placeholder:"Enter your message",wordCount:!0}),e.jsx(r,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50}),e.jsx("br",{}),e.jsx("h3",{children:"Textarea with isErrored and error message (error message is only visible when isErrored == true)"}),e.jsx(r,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50,isErrored:!0,errorMessage:"Error Message"}),e.jsx("br",{}),e.jsx("h3",{children:" Textarea with isDisabled"}),e.jsx(r,{label:"Disabled Text Label",placeholder:"Enter your message",isDisabled:!0}),e.jsx("br",{}),e.jsx("h3",{children:" Controlled Textarea"}),e.jsx(r,{label:"Controlled Text Label",placeholder:"Enter your message",value:n,onChange:i=>o(i)}),e.jsx("br",{}),e.jsx("h3",{children:"Custom width and height"}),e.jsx(r,{label:"Disabled Text Label",placeholder:"Enter your message",css:{"& textarea":{width:"600px",height:"300px"}}})]})},j={title:"Example/Textarea ",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Basic"};var t,s,l;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('My initial value');
  return <div style={{
    ...style
  }}>
      <h3> H5</h3>
      <Textarea variant='h5' placeholder='Type your feedback here' css={{
      textarea: {
        height: '129px'
      }
    }} label='Details' resizable={false} wordCount maxLength={200} />
      <h3> Simple textarea</h3>
      <Textarea placeholder='Enter your message' />
      <br />
      <h3> Textarea with label and isRequired</h3>
      <Textarea label={<>
            My custom label &nbsp;
            <HeartFilled style={{
        fontSize: '0.9em'
      }} />
          </>} placeholder='Enter your message' isRequired />
      <br />
      <h3> Textarea with word count and max length</h3>
      <Textarea label='Text Label' placeholder='Enter your message' wordCount />
      <Textarea label='Text Label' placeholder='Enter your message' wordCount maxLength={50} />
      <br />
      <h3>
        Textarea with isErrored and error message (error message is only visible
        when isErrored == true)
      </h3>
      <Textarea label='Text Label' placeholder='Enter your message' wordCount maxLength={50} isErrored errorMessage='Error Message' />
      <br />
      <h3> Textarea with isDisabled</h3>
      <Textarea label='Disabled Text Label' placeholder='Enter your message' isDisabled />
      <br />
      <h3> Controlled Textarea</h3>
      <Textarea label='Controlled Text Label' placeholder='Enter your message' value={value} onChange={value => setValue(value)} />
      <br />
      <h3>Custom width and height</h3>
      <Textarea label='Disabled Text Label' placeholder='Enter your message' css={{
      '& textarea': {
        width: '600px',
        height: '300px'
      }
    }} />
    </div>;
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const E=["Basic"];export{a as Basic,E as __namedExportsOrder,j as default};
