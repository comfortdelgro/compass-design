import{j as n}from"./jsx-runtime-9ef10904.js";import{R as a}from"./index-6c164b11.js";import{c as E,C as _}from"./objectToCSS-e90bd687.js";import{p as y}from"./pick-child-1fb557e7.js";import{u as h}from"./use-dom-ref-7c72e1a5.js";const w="_errorImage_1lmjh_7",P="_errorAction_1lmjh_29",$="_errorDescription_1lmjh_46",H="_errorTitle_1lmjh_64",k="_errorIcon_1lmjh_85",F="_errorHeader_1lmjh_102",M="_errorContainer_1lmjh_120",O="_primaryVariant_1lmjh_147",b="_secondaryVariant_1lmjh_156",q="_primaryVariantErrorImage_1lmjh_175",z="_secondaryVariantErrorImage_1lmjh_179",B="_primaryVariantErrorTitle_1lmjh_190",G="_secondaryVariantErrorTitle_1lmjh_194",J="_primaryVariantErrorDescription_1lmjh_207",K="_secondaryVariantErrorDescription_1lmjh_211",L="_primaryVariantErrorAction_1lmjh_216",Q="_secondaryVariantErrorAction_1lmjh_220",t={errorImage:w,errorAction:P,errorDescription:$,errorTitle:H,errorIcon:k,errorHeader:F,errorContainer:M,primaryVariant:O,secondaryVariant:b,primaryVariantErrorImage:q,secondaryVariantErrorImage:z,primaryVariantErrorTitle:B,secondaryVariantErrorTitle:G,primaryVariantErrorDescription:J,secondaryVariantErrorDescription:K,primaryVariantErrorAction:L,secondaryVariantErrorAction:Q},f=a.forwardRef((c,l)=>{const{children:m,css:d={},variant:r="primary",className:o="",...i}=c,e=h(l),p=E(t.errorTitle,r&&t[`${r}VariantErrorAction`],o,"cdg-error-action");return n.jsx(_,{css:d,childrenRef:e,children:n.jsx("div",{...i,className:p,ref:e,children:m})})});f.__docgenInfo={description:"",methods:[],displayName:"ErrorAction"};const V=a.forwardRef((c,l)=>{const{children:m,css:d={},variant:r="primary",className:o="",...i}=c,e=h(l),p=E(t.errorDescription,r&&t[`${r}VariantErrorDescription`],o,"cdg-error-description");return n.jsx(_,{css:d,childrenRef:e,children:n.jsx("p",{...i,className:p,ref:e,children:m})})});V.__docgenInfo={description:"",methods:[],displayName:"ErrorDescription"};const I=a.forwardRef((c,l)=>{const{children:m,css:d={},className:r="",...o}=c,i=h(l),e=E(t.errorIcon,r,"cdg-error-icon");return n.jsx(_,{css:d,childrenRef:i,children:n.jsx("div",{...o,className:e,ref:i,children:m})})});I.__docgenInfo={description:"",methods:[],displayName:"ErrorIcon"};const g=a.forwardRef((c,l)=>{const{children:m,css:d={},variant:r="primary",className:o="",...i}=c,e=h(l),p=E(t.errorImage,r&&t[`${r}VariantErrorImage`],o,"cdg-error-image");return n.jsx(_,{css:d,childrenRef:e,children:n.jsx("div",{...i,className:p,ref:e,children:m})})});g.__docgenInfo={description:"",methods:[],displayName:"ErrorImage"};const j=a.forwardRef((c,l)=>{const{children:m,css:d={},variant:r="primary",className:o="",...i}=c,e=h(l),p=E(t.errorTitle,r&&t[`${r}VariantErrorTitle`],o,"cdg-error-title");return n.jsx(_,{css:d,childrenRef:e,children:n.jsx("h3",{...i,className:p,ref:e,children:m})})});j.__docgenInfo={description:"",methods:[],displayName:"ErrorTitle"};const s=a.forwardRef((c,l)=>{const{css:m={},className:d="",children:r,variant:o="primary",...i}=c,e=h(l),{child:p}=y(r,j),N=()=>{if(a.isValidElement(p))return a.cloneElement(p,{variant:o})},{child:R}=y(r,V),A=()=>{if(a.isValidElement(R))return a.cloneElement(R,{variant:o})},{child:T}=y(r,f),C=()=>{if(a.isValidElement(T))return a.cloneElement(T,{variant:o})},{child:x}=y(r,I),{child:D}=y(r,g),u=()=>{if(a.isValidElement(D))return a.cloneElement(D,{variant:o})},v=E(t.errorContainer,o&&t[`${o}Variant`],d,"cdg-error-container");return n.jsx(_,{css:m,childrenRef:e,children:n.jsxs("div",{...i,className:v,ref:e,children:[o==="primary"&&n.jsxs("div",{className:E(t.errorHeader,"cdg-error-header"),children:[x,N()]}),o==="secondary"&&n.jsxs(n.Fragment,{children:[u(),N()]}),A(),C()]})})});s.__docgenInfo={description:"",methods:[],displayName:"Error"};s.Action=f;s.Description=V;s.Icon=I;s.Image=g;s.Title=j;s.Action.displayName="Error.Action";s.Description.displayName="Error.Description";s.Icon.displayName="Error.Icon";s.Image.displayName="Error.Image";s.Title.displayName="Error.Title";s.displayName="Error";export{s as E};