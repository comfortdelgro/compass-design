import{j as e}from"./jsx-runtime-ea7736fc.js";import{W as t}from"./index-14d7a7b1.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const n=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Default with items"}),e.jsx(t,{items:["Value1","Value2","Value3","Value4"],currentStep:3,onStepClick:i=>console.log(i)}),e.jsx("h3",{children:"With customize items css"}),e.jsxs(t,{currentStep:5,children:[e.jsx(t.Item,{title:"Value1",children:e.jsx("div",{style:{width:20,height:20,background:"#0142AF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#FFFFFF"},children:"1"})}),e.jsx(t.Item,{title:"Value2",children:e.jsx("div",{style:{width:20,height:20,background:"#99b3df",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#0142AF"},children:e.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:e.jsx("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})})})}),e.jsx(t.Item,{title:"Value3",children:e.jsx("div",{style:{width:20,height:20,background:"#0142AF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem"}})}),e.jsx(t.Item,{title:"Value4",children:e.jsx("div",{style:{width:20,height:20,background:"#99b3df",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#0142AF"},children:e.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:e.jsx("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})})})}),e.jsx(t.Item,{title:"Value5",children:e.jsx("div",{style:{width:20,height:20,background:"#0142AF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#fff"},children:e.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:e.jsx("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})})})}),e.jsx(t.Item,{title:"Value6",children:e.jsx("div",{style:{width:20,height:20,background:"#e6ecf7",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#1d3a6b",fontWeight:500},children:"6"})})]}),e.jsx("h3",{children:"With error items"}),e.jsx(t,{items:["Value1","Value2","Value3","Value4"],erroredSteps:[2],currentStep:3,onStepClick:i=>console.log(i)})]}),u={title:"Example/Wizard",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};var r,l,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => <div>
    <h3>Default with items</h3>
    <Wizard items={['Value1', 'Value2', 'Value3', 'Value4']} currentStep={3} onStepClick={n => console.log(n)} />
    <h3>With customize items css</h3>
    <Wizard currentStep={5}>
      <Wizard.Item title='Value1'>
        <div style={{
        width: 20,
        height: 20,
        background: '#0142AF',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#FFFFFF'
      }}>
          1
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value2'>
        <div style={{
        width: 20,
        height: 20,
        background: '#99b3df',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#0142AF'
      }}>
          <svg width='10' height='8' viewBox='0 0 10 8'>
            <path d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z' fill='currentColor' />
          </svg>
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value3'>
        <div style={{
        width: 20,
        height: 20,
        background: '#0142AF',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem'
      }} />
      </Wizard.Item>
      <Wizard.Item title='Value4'>
        <div style={{
        width: 20,
        height: 20,
        background: '#99b3df',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#0142AF'
      }}>
          <svg width='10' height='8' viewBox='0 0 10 8'>
            <path d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z' fill='currentColor' />
          </svg>
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value5'>
        <div style={{
        width: 20,
        height: 20,
        background: '#0142AF',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#fff'
      }}>
          <svg width='10' height='8' viewBox='0 0 10 8'>
            <path d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z' fill='currentColor' />
          </svg>
        </div>
      </Wizard.Item>
      <Wizard.Item title='Value6'>
        <div style={{
        width: 20,
        height: 20,
        background: '#e6ecf7',
        borderRadius: '99999px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.75rem',
        color: '#1d3a6b',
        fontWeight: 500
      }}>
          6
        </div>
      </Wizard.Item>
    </Wizard>
    <h3>With error items</h3>
    <Wizard items={['Value1', 'Value2', 'Value3', 'Value4']} erroredSteps={[2]} currentStep={3} onStepClick={n => console.log(n)} />
  </div>`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const m=["Variants"];export{n as Variants,m as __namedExportsOrder,u as default};
