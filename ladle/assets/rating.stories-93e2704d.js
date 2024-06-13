import{j as n}from"./jsx-runtime-ea7736fc.js";import{R as t}from"./rating-d8b894af.js";import"./index-6c164b11.js";import"./index-c28b9cd4.js";import"./button-8faa8e19.js";import"./string-cf4adbb3.js";import"./use-dom-ref-7c72e1a5.js";const s={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},e=()=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{...s},children:[n.jsx("h3",{children:"Default Rating Component"}),n.jsx(t,{})]}),n.jsxs("div",{style:{...s},children:[n.jsx("h3",{children:"Controlled Rating Component"}),n.jsx(t,{value:2})]}),n.jsxs("div",{style:{...s},children:[n.jsx("h3",{children:"Read-only Rating Component"}),n.jsx(t,{value:1,readOnly:!0})]}),n.jsxs("div",{style:{...s},children:[n.jsx("h3",{children:"Disabled Rating Component"}),n.jsx(t,{disabled:!0})]})]}),o=()=>n.jsxs("div",{style:{...s},children:[n.jsx("h3",{children:"Rating Component with icons"}),n.jsx(t,{useIcons:!0})]}),R={title:"Example/Rating",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"UsingIcons"};var i,r,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <div style={{
      ...style
    }}>
        <h3>Default Rating Component</h3>
        <RatingComponent />
      </div>
      <div style={{
      ...style
    }}>
        <h3>Controlled Rating Component</h3>
        <RatingComponent value={2} />
      </div>
      <div style={{
      ...style
    }}>
        <h3>Read-only Rating Component</h3>
        <RatingComponent value={1} readOnly />
      </div>
      <div style={{
      ...style
    }}>
        <h3>Disabled Rating Component</h3>
        <RatingComponent disabled />
      </div>
    </>;
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Rating Component with icons</h3>
      <RatingComponent useIcons />
    </div>;
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["Default","UsingIcons"];export{e as Default,o as UsingIcons,j as __namedExportsOrder,R as default};
