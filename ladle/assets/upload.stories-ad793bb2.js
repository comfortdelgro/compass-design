import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as D}from"./index-6c164b11.js";import{U as i}from"./index-52a97e3f.js";import"./useCurrentTheme-474309da.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const c={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"3rem"},t=l=>{l.length<1||console.log(l)},o=()=>e.jsxs("div",{style:{...c},children:[e.jsx("h3",{children:"Default file upload is click-to-upload variant which allows only 1 uploaded file"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4})]}),r=()=>{const[l,s]=D.useState("");return e.jsxs("div",{style:{...c},children:[e.jsx("h3",{children:"Click-to-upload"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:999999999999999}),e.jsx("h3",{children:"Custom helper text"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,helperText:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Only files with the following extensions are allowed: pdf, image extension, excel, word, powerpoint"}),e.jsx("br",{}),e.jsx("span",{children:"Maximum file size is 30MB"})]})}),e.jsx("h3",{children:"Custom error message"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,onError:d=>s(d),customErrorMessages:e.jsxs("span",{children:["No no no! You have a ",l]})}),e.jsx("h3",{children:"Add label"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,helperText:"Custom helper text",label:"Upload label"}),e.jsx("h3",{children:"isRequired"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,isRequired:!0,label:"Upload label"}),e.jsx("h3",{children:"isDisabled"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,isDisabled:!0}),e.jsx("h3",{children:"Allow multiple uploaded file"}),e.jsx(i,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:999e4,multiple:!0})]})},a=()=>{const[l,s]=D.useState("");return e.jsxs("div",{style:{...c},children:[e.jsx("h3",{children:"Primary drag-and-drop"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e25,multiple:!0}),e.jsx("h3",{children:"Secondary drag-and-drop"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,variant:"area",multiple:!0}),e.jsx("h3",{children:"drag-and-drop with custom helper text"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0,helperText:"Custom helper text"}),e.jsx("h3",{children:" drag-and-drop with custom error message"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e5,multiple:!0,onError:d=>s(d),customErrorMessages:e.jsxs("span",{children:["No no no! You have a ",l]})}),e.jsx("h3",{children:"drag-and-drop with custom label"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0,label:"Custom label"}),e.jsx("h3",{children:"drag-and-drop with isRequired"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:3e4,multiple:!0,label:"Custom label",isRequired:!0}),e.jsx("h3",{children:"drag-and-drop with isDisabled"}),e.jsx(i.DragAndDrop,{getFile:t,accept:"image/*, .docs, .docx",fileSizeLimit:999e4,multiple:!0,label:"Custom label",isDisabled:!0})]})},C={title:"Example/Upload ",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Basic"};r.__docgenInfo={description:"",methods:[],displayName:"ClickToUpload"};a.__docgenInfo={description:"",methods:[],displayName:"DragAndDrop"};var n,p,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>
        Default file upload is click-to-upload variant which allows only 1
        uploaded file
      </h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} />
    </div>;
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [customError, setCustomError] = React.useState<string>('');
  return <div style={{
    ...style
  }}>
      <h3>Click-to-upload</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={999999999999999} />

      <h3>Custom helper text</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} helperText={<>
            <span>
              Only files with the following extensions are allowed: pdf, image
              extension, excel, word, powerpoint
            </span>
            <br />
            <span>Maximum file size is 30MB</span>
          </>} />
      <h3>Custom error message</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} onError={error => setCustomError(error)} customErrorMessages={<span>No no no! You have a {customError}</span>} />
      <h3>Add label</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} helperText={'Custom helper text'} label='Upload label' />

      <h3>isRequired</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} isRequired label='Upload label' />
      <h3>isDisabled</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} isDisabled />

      <h3>Allow multiple uploaded file</h3>
      <Upload getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={9990000} multiple />
    </div>;
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,F,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [customError, setCustomError] = React.useState<string>('');
  return <div style={{
    ...style
  }}>
      <h3>Primary drag-and-drop</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000000000000000000000000} multiple />

      <h3>Secondary drag-and-drop</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} variant='area' multiple={true} />

      <h3>drag-and-drop with custom helper text</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} multiple helperText='Custom helper text' />

      <h3> drag-and-drop with custom error message</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={300000} multiple onError={error => setCustomError(error)} customErrorMessages={<span>No no no! You have a {customError}</span>} />

      <h3>drag-and-drop with custom label</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} multiple label='Custom label' />

      <h3>drag-and-drop with isRequired</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={30000} multiple label='Custom label' isRequired />
      <h3>drag-and-drop with isDisabled</h3>
      <Upload.DragAndDrop getFile={getFileFunc} accept='image/*, .docs, .docx' fileSizeLimit={9990000} multiple label='Custom label' isDisabled />
    </div>;
}`,...(f=(F=a.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const U=["Basic","ClickToUpload","DragAndDrop"];export{o as Basic,r as ClickToUpload,a as DragAndDrop,U as __namedExportsOrder,C as default};
