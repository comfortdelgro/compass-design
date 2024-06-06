import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as n}from"./heart-filled-5f2b210b.js";import{r as h}from"./index-6c164b11.js";import{M as i}from"./index-77063761.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const l=()=>{const[a,s]=h.useState([]),o=c=>{s(c)};return e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("div",{style:{width:"374px",marginBottom:"20px"},children:e.jsxs(i,{onChange:o,children:[e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"Safe Driving",index:0}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"Clean & Tidy Vehicle",index:1}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"Friendly Driver",index:2}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"On Time",index:3}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"Safe Driving",index:4}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"Clean & Tidy Vehicle",index:5}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"Friendly Driver",index:6}),e.jsx(i.Item,{icon:e.jsx(n,{width:40}),label:"On Time",index:7})]})}),e.jsxs("pre",{style:{width:"374px",padding:"var(--space-2)",margin:0,minHeight:"var(--sizes-5)",borderRadius:"var(--radii-lg)",backgroundColor:"var(--colors-secondaryBg)",fontSize:"var(--fontSizes-label1)",whiteSpace:"pre-wrap",overflowWrap:"anywhere"},children:["Selected keys:",JSON.stringify(a)]})]})},y={title:"Example/Multiple choices slider",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};var t,r,d;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const [selectedKeys, setSelectedKeys] = useState<number[]>([]);
  const handleChange = (e: number[]) => {
    setSelectedKeys(e);
  };
  return <div style={{
    padding: '1rem'
  }}>
      <div style={{
      width: '374px',
      marginBottom: '20px'
    }}>
        <MultipleChoicesSlider onChange={handleChange}>
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'Safe Driving'} index={0} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'Clean & Tidy Vehicle'} index={1} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'Friendly Driver'} index={2} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'On Time'} index={3} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'Safe Driving'} index={4} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'Clean & Tidy Vehicle'} index={5} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'Friendly Driver'} index={6} />
          <MultipleChoicesSlider.Item icon={<HeartFilled width={40} />} label={'On Time'} index={7} />
        </MultipleChoicesSlider>
      </div>

      <pre style={{
      width: '374px',
      padding: 'var(--space-2)',
      margin: 0,
      minHeight: 'var(--sizes-5)',
      borderRadius: 'var(--radii-lg)',
      backgroundColor: 'var(--colors-secondaryBg)',
      fontSize: 'var(--fontSizes-label1)',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'anywhere'
    }}>
        Selected keys:
        {JSON.stringify(selectedKeys)}
      </pre>
    </div>;
}`,...(d=(r=l.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const w=["Default"];export{l as Default,w as __namedExportsOrder,y as default};
