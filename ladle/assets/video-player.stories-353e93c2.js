import{j as t}from"./jsx-runtime-ea7736fc.js";import{V as o}from"./video-player-e278bccf.js";import"./index-6c164b11.js";import"./index-0d3b18cd.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const i={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"90%",padding:"3rem"},e=()=>{const s="http://techslides.com/demos/sample-videos/small.webm";return t.jsxs("div",{style:{...i},children:[t.jsx("h3",{children:"Video Player with default"}),t.jsx(o,{src:s}),t.jsx("h3",{children:"Video Player with poster"}),t.jsx(o,{src:s,poster:"http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg"})]})},u={title:"Example/Video Player ",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var r,a,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const src = 'http://techslides.com/demos/sample-videos/small.webm';
  return <div style={{
    ...style
  }}>
      <h3>Video Player with default</h3>
      <VideoPlayer src={src} />
      <h3>Video Player with poster</h3>
      <VideoPlayer src={src} poster='http://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg' />
    </div>;
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,u as default};
