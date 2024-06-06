import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as i}from"./index-6c164b11.js";import{N as c}from"./index-1e91b611.js";const n=()=>{function d(){return Array.from(new Array(5e3)).map((p,l)=>e.jsx("span",{children:"."},l))}const[t,r]=i.useState({open:!1,defer:!1});return e.jsxs("div",{children:[e.jsx("h3",{children:"1. No-SSR is a component that prevents rendering its children on the server. It has various uses:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"It's helpful when dealing with dependencies that don't support server-side rendering (SSR)."}),e.jsx("li",{children:"It improves the initial loading time by only rendering the visible content."}),e.jsx("li",{children:"It reduces server rendering workload and can improve performance."}),e.jsx("li",{children:"It allows for service degradation during heavy server load."}),e.jsx("li",{children:'With the "defer" option, it prioritizes essential content for quicker interactivity.'})]}),e.jsx("h3",{children:"2. Delay client-side rendering"}),e.jsx("p",{children:"No-SSR can be used to delay rendering certain components on the client side. This is useful when you want the rest of the application to load before dealing with complex or data-heavy components."}),e.jsx("h5",{children:"Click these 2 buttons for the demo"}),e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"start",gap:"3rem"},children:[e.jsx("button",{type:"button",onClick:()=>r({open:!t.open,defer:!1}),children:'Render NoSsr defer="false"'}),e.jsx("button",{type:"button",onClick:()=>r({open:!t.open,defer:!0}),children:'Render NoSsr defer="true"'})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{style:{width:300,display:"flex",flexWrap:"wrap"},children:t.open?e.jsxs(i.Fragment,{children:[e.jsx("div",{children:"Outside NoSsr"}),e.jsxs(c,{defer:t.defer,children:[".....Inside NoSsr",e.jsx(d,{})]})]}):null})]})},m={title:"Example/No Ssr",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};var s,o,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function LargeTree(): any {
    return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);
  }
  const [state, setState] = React.useState({
    open: false,
    defer: false
  });
  return <div>
      <h3>
        1. No-SSR is a component that prevents rendering its children on the
        server. It has various uses:
      </h3>

      <ul>
        <li>
          It's helpful when dealing with dependencies that don't support
          server-side rendering (SSR).
        </li>
        <li>
          It improves the initial loading time by only rendering the visible
          content.
        </li>
        <li>
          It reduces server rendering workload and can improve performance.
        </li>
        <li>It allows for service degradation during heavy server load.</li>
        <li>
          With the "defer" option, it prioritizes essential content for quicker
          interactivity.
        </li>
      </ul>

      <h3>2. Delay client-side rendering</h3>
      <p>
        No-SSR can be used to delay rendering certain components on the client
        side. This is useful when you want the rest of the application to load
        before dealing with complex or data-heavy components.
      </p>
      <h5>Click these 2 buttons for the demo</h5>
      <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'start',
      gap: '3rem'
    }}>
        <button type='button' onClick={() => setState({
        open: !state.open,
        defer: false
      })}>
          {'Render NoSsr defer="false"'}
        </button>
        <button type='button' onClick={() => setState({
        open: !state.open,
        defer: true
      })}>
          {'Render NoSsr defer="true"'}
        </button>
      </div>
      <br />
      <br />
      <div style={{
      width: 300,
      display: 'flex',
      flexWrap: 'wrap'
    }}>
        {state.open ? <React.Fragment>
            <div>Outside NoSsr</div>
            <NoSsr defer={state.defer}>
              .....Inside NoSsr
              <LargeTree />
            </NoSsr>
          </React.Fragment> : null}
      </div>
    </div>;
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const y=["Basic"];export{n as Basic,y as __namedExportsOrder,m as default};
