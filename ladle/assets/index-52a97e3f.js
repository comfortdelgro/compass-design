import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as b,r as x}from"./index-6c164b11.js";import{u as X}from"./useCurrentTheme-474309da.js";import{C as Z}from"./objectToCSS-aff350d4.js";import{u as H}from"./use-dom-ref-7c72e1a5.js";const G=n=>n>=1024&&n<1048576?`${(Math.round(n/1024*100)/100).toFixed(2)} KB`:n>=1048576&&n<1073741824?`${(Math.round(n/1048576*100)/100).toFixed(2)} MB`:n>=1073741824&&n<1099511627776?`${(Math.round(n/1073741824*100)/100).toFixed(2)} GB`:n>=1099511627776&&n<0x4000000000000?`${(Math.round(n/1099511627776*100)/100).toFixed(2)} TB`:n>=0x4000000000000?`${(Math.round(n/0x4000000000000*100)/100).toFixed(2)} PB`:`${n} Bytes`,K="audio/*,video/*,image/*, .docs, .docx, .pdf",J=9999999999,Y="_uploadWrapper_168es_10",ee="_browseFile_168es_27",se="_browseFileSpan_168es_52",oe="_uploadContent_168es_55",ne="_uploadContentText_168es_75",te="_label_168es_82",ae="_isRequiredSign_168es_96",re="_uploadContainer_168es_99",le="_uploadError_168es_117",ie="_helperText_168es_133",de="_fileSelected_168es_152",pe="_browseFileIsDisabled_168es_155",ce="_browseFileIsDarkTheme_168es_161",ue="_uploadContentIsDisabled_168es_165",fe="_uploadContentIsDarkTheme_168es_171",t={uploadWrapper:Y,browseFile:ee,browseFileSpan:se,uploadContent:oe,uploadContentText:ne,label:te,isRequiredSign:ae,uploadContainer:re,uploadError:le,helperText:ie,fileSelected:de,browseFileIsDisabled:pe,browseFileIsDarkTheme:ce,uploadContentIsDisabled:ue,uploadContentIsDarkTheme:fe},R=b.forwardRef((n,$)=>{const{css:T={},getFile:d=()=>{},accept:D=K,fileSizeLimit:_=J,multiple:c=!1,placeholder:B="No file chosen",helperText:j,label:F,isRequired:k=!1,isDisabled:a=!1,onError:u,customErrorMessages:v,className:y,...S}=n,C=X(),I=H($),w=b.useRef(null),[h,M]=b.useState([]),[W,E]=b.useState(void 0),z=o=>{if(o&&o.length>0){const s=Array.from(o).some(i=>i.size>_),r=D.split(",").map(i=>i.trim()),f=Array.from(o).filter(i=>{const p=i.name.split(".").pop()||"",N=i.type;return!r.some(g=>{if(g.endsWith("/*")){const m=g.substring(0,g.length-2);return N.startsWith(m)}else return(g.split(".").pop()||"")===p})});if(s)E("Sorry, your file exceeds our size limit."),u&&u("file size error");else if(f.length>0){const i=f.map(p=>p.name).join(", ");E(`Sorry, the following file(s) have an invalid file type: ${i}`),u&&u("file type error")}else E(void 0),M(Array.from(o)),d(Array.from(o))}},q=o=>{o.preventDefault();const s=o.target,r=s==null?void 0:s.files;z(r)},A=()=>{var o;return a?null:(o=w.current)==null?void 0:o.click()},U=o=>!v||!o?o:v,V=x.useMemo(()=>[t.uploadWrapper,a&&t.isDisabled,C&&t.isDarkTheme,y,"cdg-upload-wrapper"].filter(Boolean).join(" "),[y,C,a]),L=x.useMemo(()=>[t.browseFile,a&&t.browseFileIsDisabled,C&&t.browseFileIsDarkTheme].filter(Boolean).join(" "),[C,a]),P=x.useMemo(()=>[t.uploadContent,a&&t.uploadContentIsDisabled,C&&t.uploadContentIsDarkTheme,h.length>0&&t.fileSelected].filter(Boolean).join(" "),[C,a,h.length]);return e.jsx(Z,{css:T,childrenRef:I,children:e.jsxs("div",{ref:I,className:V,...S,children:[F&&e.jsx(e.Fragment,{children:e.jsxs("label",{className:`${t.label}`,children:[e.jsxs("span",{className:"cdg-label",children:[" ",F]}),e.jsx("span",{className:`cdg-isRequired-Sign ${t.isRequiredSign}`,children:k?" *":""})]})}),e.jsxs("div",{className:`${t.uploadContainer}`,children:[e.jsx("input",{ref:w,type:"file",accept:D,multiple:c,onChange:q}),e.jsx("button",{onClick:A,type:"button",role:"button",className:L,children:e.jsx("span",{className:`${t.browseFileSpan}`,children:"Browse file"})}),e.jsx("div",{onClick:A,className:P,children:h.length>0?e.jsx("p",{className:`${t.uploadContentText}`,children:h.map(o=>o.name).join(", ")}):B})]}),e.jsx("div",{className:`${t.helperText}`,children:j||`Maximum size: ${G(_)}`}),e.jsx("div",{className:`${t.uploadError}`,children:U(W)})]})})});R.__docgenInfo={description:"",methods:[],displayName:"Upload"};const Ce="_uploadWrapper_oji5f_10",he="_uploadContainer_oji5f_26",me="_uploadContent_oji5f_40",be="_uploadButton_oji5f_55",_e="_label_oji5f_75",ge="_isRequiredSign_oji5f_89",xe="_orLetter_oji5f_92",De="_uploadMaxSize_oji5f_109",je="_uploadError_oji5f_125",Fe="_uploadContainerArea_oji5f_144",ve="_uploadContainerisDisabled_oji5f_149",ye="_uploadContentIsDisabled_oji5f_153",Ie="_uploadButtonIsDisabled_oji5f_156",l={uploadWrapper:Ce,uploadContainer:he,uploadContent:me,uploadButton:be,label:_e,isRequiredSign:ge,orLetter:xe,uploadMaxSize:De,uploadError:je,uploadContainerArea:Fe,uploadContainerisDisabled:ve,uploadContentIsDisabled:ye,uploadButtonIsDisabled:Ie},Q=b.forwardRef((n,$)=>{const{css:T={},variant:d="field",getFile:D=()=>{},accept:_=K,fileSizeLimit:c=J,multiple:B=!1,helperText:j,label:F,isRequired:k=!1,isDisabled:a=!1,onError:u,customErrorMessages:v,className:y,...S}=n,C=H($),I=b.useRef(null),[w,h]=b.useState(),M=s=>{if(s&&s.length>0){const r=Array.from(s).some(p=>p.size>c),f=_.split(",").map(p=>p.trim()),i=Array.from(s).filter(p=>{const N=p.name.split(".").pop()||"",g=p.type;return!f.some(m=>{if(m.endsWith("/*")){const O=m.substring(0,m.length-2);return g.startsWith(O)}else return(m.split(".").pop()||"")===N})});if(r)h("Sorry, your file exceeds our size limit."),u&&u("file size error");else if(i.length>0){const p=i.map(N=>N.name).join(", ");h(`Sorry, the following file(s) have an invalid file type: ${p}`),u&&u("file type error")}else h(void 0),D(Array.from(s))}},W=s=>{s.target.removeAttribute("style"),s.preventDefault(),s.stopPropagation();const f=s.dataTransfer;if(!f)return;const i=f.files;M(i)},E=s=>{const r=s.target;r.tagName!=="LABEL"&&(r.style.border="1px dashed #0142AF",r.style.backgroundColor="#E6ECF7"),s.preventDefault(),s.stopPropagation()},z=s=>{s.target.removeAttribute("style")},q=s=>{s.preventDefault();const r=s.target,f=r==null?void 0:r.files;M(f)},A=s=>!v||!s?s:v,U=()=>{var s;return a?null:(s=I.current)==null?void 0:s.click()},V=()=>a?"#A19F9D":"#0142AF",L=x.useMemo(()=>[l.uploadWrapper,d==="area"&&l.uploadWrapperArea,y].filter(Boolean).join(" "),[y,d]),P=x.useMemo(()=>[l.uploadContainer,d==="area"&&l.uploadContainerArea,a&&l.uploadContainerisDisabled].filter(Boolean).join(" "),[a,d]),o=x.useMemo(()=>[l.uploadContent,a&&l.uploadContentIsDisabled].filter(Boolean).join(" "),[a]);return e.jsx(Z,{css:T,children:e.jsxs("div",{className:L,...S,children:[F&&e.jsx(e.Fragment,{children:e.jsxs("label",{className:`${l.label}`,children:[e.jsx("span",{className:"cdg-label",children:F}),e.jsx("span",{className:`cdg-isRequired-Sign ${l.isRequiredSign}`,children:k?" *":""})]})}),e.jsxs("div",{ref:C,onDrop:W,onDragOver:E,onDragLeave:z,className:P,children:[e.jsx("input",{ref:I,type:"file",accept:_,multiple:B,onChange:q}),e.jsxs("button",{onClick:U,disabled:a,type:"button",role:"button",className:`${l.uploadButton} ${a?l.uploadButtonIsDisabled:""}`,children:[d==="field"&&e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",style:{pointerEvents:"none"},children:e.jsx("path",{d:"M12.2857 10.6249V12.375C12.2857 12.8581 11.9019 13.25 11.4286 13.25H4.57143C4.09812 13.25 3.71429 12.8581 3.71429 12.375V10.6249C3.71429 10.1418 3.33045 9.74993 2.85714 9.74993C2.38384 9.74993 2 10.1418 2 10.6249V12.375C2 13.8247 3.15125 15 4.57143 15H11.4286C12.8488 15 14 13.8247 14 12.375V10.6249C14 10.1418 13.6162 9.74993 13.1429 9.74993C12.6696 9.74993 12.2857 10.141 12.2857 10.6249ZM7.39464 1.25616L3.96607 4.75621C3.63098 5.09829 3.63152 5.652 3.96607 5.99353C4.30089 6.33533 4.8433 6.33533 5.17813 5.99353L7.14286 3.98852V9.74993C7.14286 10.2336 7.52616 10.6249 8 10.6249C8.47384 10.6249 8.85714 10.2336 8.85714 9.74993V3.98852L10.8227 5.99504C11.1575 6.33684 11.6999 6.33684 12.0347 5.99504C12.3696 5.65323 12.3696 5.09952 12.0347 4.75771L8.60616 1.25767C8.27054 0.914362 7.72946 0.914362 7.39464 1.25616Z",fill:V()})}),d==="area"?e.jsx("span",{style:{pointerEvents:"none"},children:"Browse Files"}):e.jsx("span",{style:{pointerEvents:"none"},children:"Upload files"})]}),d==="area"&&e.jsx("a",{className:`${l.orLetter}`,children:"or"}),d==="area"?e.jsx("div",{className:o,children:"Drag&Drop files here"}):e.jsx("div",{className:o,children:"or Drop Files"}),d==="area"&&e.jsx("div",{className:o,children:e.jsx("svg",{width:"33",height:"32",viewBox:"0 0 33 32",fill:"none",children:e.jsx("path",{d:"M8.4335 25.3332C4.78837 25.3332 1.8335 22.6457 1.8335 19.3332C1.8335 16.7165 3.67462 14.4915 6.24266 13.6707C6.2367 13.5582 6.2335 13.4457 6.2335 13.3332C6.2335 9.64984 9.51516 6.6665 13.5668 6.6665C16.2847 6.6665 18.6543 8.01025 19.9239 10.0082C20.6206 9.54567 21.4639 9.33317 22.3668 9.33317C24.796 9.33317 26.7668 11.0873 26.7668 13.3332C26.7668 13.8415 26.6614 14.3248 26.4735 14.7748C29.1502 15.2665 31.1668 17.4207 31.1668 19.9998C31.1668 22.9457 28.5406 25.3332 25.3002 25.3332H8.4335ZM12.0543 16.2915C11.6281 16.6832 11.6281 17.3165 12.0543 17.6707C12.4852 18.0957 13.1818 18.0957 13.5714 17.6707L15.4002 16.079V21.6665C15.4002 22.2207 15.8906 22.6665 16.5002 22.6665C17.1097 22.6665 17.6002 22.2207 17.6002 21.6665V16.079L19.3877 17.6707C19.8185 18.0957 20.5152 18.0957 20.9047 17.6707C21.3722 17.3165 21.3722 16.6832 20.9047 16.2915L17.2381 12.9582C16.8485 12.5707 16.1518 12.5707 15.721 12.9582L12.0543 16.2915Z",fill:"#0142AF"})})})]}),e.jsx("a",{className:`${l.uploadMaxSize}`,children:j||`Maximum size: ${G(c)}`}),e.jsx("a",{className:`${l.uploadError}`,children:A(w)})]})})});Q.__docgenInfo={description:"",methods:[],displayName:"UploadDragAndDrop"};R.DragAndDrop=Q;R.DragAndDrop.displayName="Upload.DragAndDrop";R.displayName="Upload";export{R as U};