import{j as s}from"./jsx-runtime-ea7736fc.js";import{R as y}from"./index-6c164b11.js";import{B as p}from"./button-be34d763.js";import{g as j}from"./get-icon-from-color-ca1cae80.js";import{C as h}from"./objectToCSS-aff350d4.js";import{u as N}from"./use-dom-ref-7c72e1a5.js";const B="_alert_674xy_7",w="_icon_674xy_25",v="_dismissButton_674xy_33",C="_content_674xy_37",R="_closeIcon_674xy_41",A="_info_674xy_51",L="_infoIcon_674xy_56",b="_success_674xy_64",z="_successIcon_674xy_69",F="_warning_674xy_73",M="_warningIcon_674xy_78",P="_danger_674xy_82",$="_dangerIcon_674xy_87",n={alert:B,icon:w,dismissButton:v,content:C,closeIcon:R,info:A,infoIcon:L,success:b,successIcon:z,warning:F,warningIcon:M,danger:P,dangerIcon:$},t=y.forwardRef((i,r)=>{const{css:a={},icon:c,dismissible:l,onDismiss:e,children:_,color:o="info",className:m,...d}=i,f=N(r),x=typeof c>"u"?j(o):c===!1?null:c,u=[m,o&&n[o],n.alert,"cdg-button"].filter(Boolean).join(" "),I=["alert-close-icon",n.closeIcon].filter(Boolean).join(" "),g=["alert-icon",n.icon,o&&n[o+"Icon"]].filter(Boolean).join(" ");return s.jsx(s.Fragment,{children:s.jsx(h,{css:a,children:s.jsxs("div",{ref:f,...d,className:u,children:[c!==!1&&s.jsx("div",{className:g,children:x}),s.jsx("div",{className:`${n.content} alert-content`,children:_}),l&&s.jsx(p,{size:"sm",variant:"ghost",className:`${n.dismissButton} alert-dismiss-button custom`,onPress:()=>e==null?void 0:e(),children:s.jsx("svg",{className:I,viewBox:"0 0 384 512",children:s.jsx("path",{fill:"currentColor",d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})})})]})})})});t.__docgenInfo={description:"",methods:[],displayName:"Alert"};t.displayName="Alert";export{t as A};