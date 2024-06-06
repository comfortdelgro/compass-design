import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as s}from"./index-6c164b11.js";import"./index-7972436d.js";import{V as i}from"./Viewer-a8f46180.js";import{B as a}from"./button-be34d763.js";import"./noop-4f713d1a.js";import"./objectToCSS-aff350d4.js";import"./index-d488ea9b.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const o=Array.from(Array(8).keys()).map(n=>({src:`https://picsum.photos/id/${n+1}/5000/3333`,alt:`Image ${n+1}`,srcPreview:`https://picsum.photos/id/${n+1}/60/50`})),t=()=>{const[n,l]=s.useState(!1),[I,r]=s.useState(!1),[S,m]=s.useState(!1),[p,c]=s.useState(!1),[x,b]=s.useState(!1),[C,h]=s.useState(!1),[j,u]=s.useState(!1),[k,f]=s.useState(!1),[B,w]=s.useState(!1);return e.jsxs("div",{style:{width:"100%",height:"100%",padding:"2rem"},children:[e.jsx("h3",{children:"Default "}),e.jsx(a,{onClick:()=>l(!0),children:"Open image viewer"}),e.jsx(i,{visible:n,onClose:()=>{l(!1)},images:o,onMaskClick:()=>{l(!1)}}),e.jsx("h3",{children:"Active index"}),e.jsx(a,{onClick:()=>r(!0),children:"Open image viewer"}),e.jsx(i,{visible:I,activeIndex:1,onClose:()=>{r(!1)},images:o}),e.jsx("h3",{children:"Disable drag"}),e.jsx(a,{onClick:()=>m(!0),children:"Open image viewer"}),e.jsx(i,{visible:S,drag:!1,onClose:()=>{m(!1)},images:o}),e.jsx("h3",{children:"Disable zoomable"}),e.jsx(a,{onClick:()=>c(!0),children:"Open image viewer"}),e.jsx(i,{visible:p,zoomable:!1,onClose:()=>{c(!1)},images:o}),e.jsx("h3",{children:"Disable rotatable"}),e.jsx(a,{onClick:()=>b(!0),children:"Open image viewer"}),e.jsx(i,{visible:x,zoomable:!1,disableMouseZoom:!0,onClose:()=>{b(!1)},images:o}),e.jsx("h3",{children:"Disable scalable"}),e.jsx(a,{onClick:()=>h(!0),children:"Open image viewer"}),e.jsx(i,{visible:C,scalable:!1,onClose:()=>{h(!1)},images:o}),e.jsx("h3",{children:"Hidden image information"}),e.jsx(a,{onClick:()=>u(!0),children:"Open image viewer"}),e.jsx(i,{visible:j,isShowImageInformation:!1,onClose:()=>{u(!1)},images:o}),e.jsx("h3",{children:"Hidden preview"}),e.jsx(a,{onClick:()=>f(!0),children:"Open image viewer"}),e.jsx(i,{visible:k,isShowPreview:!1,onClose:()=>{f(!1)},images:o}),e.jsx("h3",{children:"Hidden toolbar"}),e.jsx(a,{onClick:()=>w(!0),children:"Open image viewer"}),e.jsx(i,{visible:B,isShowToolbar:!1,onClose:()=>{w(!1)},images:o})]})},H={title:"Example/ImageViewer",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};t.__docgenInfo={description:"",methods:[],displayName:"Variations"};var d,g,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isActiveIndex, setIsActiveIndex] = useState<boolean>(false);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [isZoomable, setIsZoomable] = useState<boolean>(false);
  const [isRotatable, setIsRotatable] = useState<boolean>(false);
  const [isScalable, setIsScalable] = useState<boolean>(false);
  const [isShowImageInformation, setIsShowImageInformation] = useState<boolean>(false);
  const [isShowPreview, setIsShowPreview] = useState<boolean>(false);
  const [isShowToolbar, setIsShowToolbar] = useState<boolean>(false);
  return <div style={{
    width: '100%',
    height: '100%',
    padding: '2rem'
  }}>
      <h3>Default </h3>
      <Button onClick={() => setVisible(true)}>Open image viewer</Button>
      <Viewer visible={visible} onClose={() => {
      setVisible(false);
    }} images={images} onMaskClick={() => {
      setVisible(false);
    }} />
      <h3>Active index</h3>
      <Button onClick={() => setIsActiveIndex(true)}>Open image viewer</Button>
      <Viewer visible={isActiveIndex} activeIndex={1} onClose={() => {
      setIsActiveIndex(false);
    }} images={images} />
      <h3>Disable drag</h3>
      <Button onClick={() => setIsDrag(true)}>Open image viewer</Button>
      <Viewer visible={isDrag} drag={false} onClose={() => {
      setIsDrag(false);
    }} images={images} />
      <h3>Disable zoomable</h3>
      <Button onClick={() => setIsZoomable(true)}>Open image viewer</Button>
      <Viewer visible={isZoomable} zoomable={false} onClose={() => {
      setIsZoomable(false);
    }} images={images} />
      <h3>Disable rotatable</h3>
      <Button onClick={() => setIsRotatable(true)}>Open image viewer</Button>
      <Viewer visible={isRotatable} zoomable={false} disableMouseZoom={true} onClose={() => {
      setIsRotatable(false);
    }} images={images} />
      <h3>Disable scalable</h3>
      <Button onClick={() => setIsScalable(true)}>Open image viewer</Button>
      <Viewer visible={isScalable} scalable={false} onClose={() => {
      setIsScalable(false);
    }} images={images} />
      <h3>Hidden image information</h3>
      <Button onClick={() => setIsShowImageInformation(true)}>
        Open image viewer
      </Button>
      <Viewer visible={isShowImageInformation} isShowImageInformation={false} onClose={() => {
      setIsShowImageInformation(false);
    }} images={images} />
      <h3>Hidden preview</h3>
      <Button onClick={() => setIsShowPreview(true)}>Open image viewer</Button>
      <Viewer visible={isShowPreview} isShowPreview={false} onClose={() => {
      setIsShowPreview(false);
    }} images={images} />
      <h3>Hidden toolbar</h3>
      <Button onClick={() => setIsShowToolbar(true)}>Open image viewer</Button>
      <Viewer visible={isShowToolbar} isShowToolbar={false} onClose={() => {
      setIsShowToolbar(false);
    }} images={images} />
    </div>;
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["Variations"];export{t as Variations,E as __namedExportsOrder,H as default};
