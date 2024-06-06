import{j as e}from"./jsx-runtime-ea7736fc.js";import{G as n}from"./index-58b33020.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const i=()=>{const t=e.jsx("div",{style:{padding:"16px",borderRadius:"4px",textAlign:"center",color:"#ede9f9",fontWeight:"700",backgroundColor:"#47b0b0",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.25)"},children:"Box"});return e.jsxs("div",{style:{padding:"3rem"},children:[e.jsxs("section",{children:[e.jsx("h3",{children:"Fluid grids"}),"Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.",e.jsx("h3",{children:"How it works:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"It uses CSS's Flexible Box module for high flexibility."}),e.jsx("li",{children:"There are two types of layout: containers and items."}),e.jsx("li",{children:"Item widths are set in percentages, so they're always fluid and sized relative to their parent element."}),e.jsx("li",{children:"Items have padding to create the spacing between individual items."}),e.jsx("li",{children:"There are five grid breakpoints: xs, sm, md, lg, and xl."}),e.jsx("li",{children:"Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints."})]}),e.jsx("h3",{children:"Default breakpoints"}),e.jsxs("ol",{children:[e.jsx("li",{children:"xs, extra-small: 0px"}),e.jsx("li",{children:"sm, small: 600px"}),e.jsx("li",{children:"md, medium: 900px"}),e.jsx("li",{children:"lg, large: 1200px"}),e.jsx("li",{children:"xl, extra-large: 1536px"})]})]}),e.jsx("h3",{children:"Example: "}),e.jsxs(n,{spacing:"sm",alignItems:"center",children:[e.jsx(n.Item,{xs:12,sm:6,md:4,lg:3,xl:3,children:t}),e.jsx(n.Item,{xs:12,sm:6,md:4,lg:3,xl:3,children:t}),e.jsx(n.Item,{xs:12,sm:6,md:4,lg:3,xl:3,children:t}),e.jsx(n.Item,{xs:12,sm:6,md:4,lg:3,xl:3,children:t})]})]})},h={title:"Example/Grid",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,s,r;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const box = <div style={{
    padding: '16px',
    borderRadius: '4px',
    textAlign: 'center',
    color: '#ede9f9',
    fontWeight: '700',
    backgroundColor: '#47b0b0',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)'
  }}>
      Box
    </div>;
  return <div style={{
    padding: '3rem'
  }}>
      <section>
        <h3>Fluid grids</h3>
        Fluid grids use columns that scale and resize content. A fluid grid's
        layout can use breakpoints to determine if the layout needs to change
        dramatically.
        <h3>How it works:</h3>
        <ol>
          <li>It uses CSS's Flexible Box module for high flexibility.</li>
          <li>There are two types of layout: containers and items.</li>
          <li>
            Item widths are set in percentages, so they're always fluid and
            sized relative to their parent element.
          </li>
          <li>
            Items have padding to create the spacing between individual items.
          </li>
          <li>There are five grid breakpoints: xs, sm, md, lg, and xl.</li>
          <li>
            Integer values can be given to each breakpoint, indicating how many
            of the 12 available columns are occupied by the component when the
            viewport width satisfies the breakpoint constraints.
          </li>
        </ol>
        <h3>Default breakpoints</h3>
        <ol>
          <li>xs, extra-small: 0px</li>
          <li>sm, small: 600px</li>
          <li>md, medium: 900px</li>
          <li>lg, large: 1200px</li>
          <li>xl, extra-large: 1536px</li>
        </ol>
      </section>
      <h3>Example: </h3>
      <Grid spacing='sm' alignItems='center'>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4} lg={3} xl={3}>
          {box}
        </Grid.Item>
      </Grid>
    </div>;
}`,...(r=(s=i.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const p=["Default"];export{i as Default,p as __namedExportsOrder,h as default};
