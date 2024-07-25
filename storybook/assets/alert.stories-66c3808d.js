import{j as e}from"./jsx-runtime-9ef10904.js";import{H as m}from"./heart-filled-5f2b210b.js";import{A as r}from"./index-e81b8c34.js";import"./index-6c164b11.js";import"./button-a57955c5.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";import"./get-icon-from-color-db7992f5.js";const n=()=>e.jsxs(e.Fragment,{children:["A simple alert text. We can have a ",e.jsx("a",{href:"#",children:"link"}),"."]}),s=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Basic Alert"}),e.jsx(r,{children:e.jsx(n,{})})]}),o=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"1. Colors"}),e.jsx(r,{color:"info",children:e.jsx(n,{})}),e.jsx(r,{color:"success",children:e.jsx(n,{})}),e.jsx(r,{color:"danger",children:e.jsx(n,{})}),e.jsx(r,{color:"warning",children:e.jsx(n,{})}),e.jsx("h3",{children:"2. Without Icons"}),e.jsx(r,{icon:!1,children:e.jsx(n,{})}),e.jsx("h3",{children:"3. Custom Icons"}),e.jsx(r,{color:"success",icon:e.jsx(m,{}),children:e.jsx(n,{})})]}),g={title:"Example/Alert",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"Indismissible"};var t,l,c;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`() => <div>
    <h3>Basic Alert</h3>
    <Alert>
      <AlertContent />
    </Alert>
  </div>`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,a,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => <div>
    <h3>1. Colors</h3>
    <Alert color='info'>
      <AlertContent />
    </Alert>

    <Alert color='success'>
      <AlertContent />
    </Alert>

    <Alert color='danger'>
      <AlertContent />
    </Alert>

    <Alert color='warning'>
      <AlertContent />
    </Alert>

    <h3>2. Without Icons</h3>

    <Alert icon={false}>
      <AlertContent />
    </Alert>

    <h3>3. Custom Icons</h3>

    <Alert color='success' icon={<HeartFilled />}>
      <AlertContent />
    </Alert>
  </div>`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const I=["Basic","Indismissible"];export{s as Basic,o as Indismissible,I as __namedExportsOrder,g as default};
