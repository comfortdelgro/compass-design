import{e as L,g as W}from"./index-346ad547.js";import{R as d,a as c,j as n}from"./index-06645c1d.js";import{a as g}from"./index-af6d2776.js";import{u as k}from"./use-dom-ref-1eeb366d.js";import{S as q,a as V,b as $,c as z,d as I}from"./textfield.styles-cbabfb91.js";const H=d.forwardRef((e,w)=>{const{css:u={},label:m,id:f=`cdg-element-${Math.random().toString(36).substring(2)}`,name:R,value:D,type:t,isErrored:h,isReadOnly:N=!1,isRequired:y=!1,helperText:x,errorMessage:p,leftIcon:S,rightIcon:C,prefix:F,password:o=!1,maxLength:P,minLength:v,autoCapitalize:B,autoFocus:E,onChangeEvent:i,onChange:s,placeholder:K,isDisabled:l,...M}=e,O={...M},U=k(w),[a,T]=d.useState(!1),j=b=>{s==null||s(b.target.value),i==null||i(b)},r=d.useMemo(()=>o==!0&&a==!1?"password":o==!0&&a==!0?t:null,[o,a]);return c(q,{css:u,...O,children:[m&&c(V,{htmlFor:f,isDisabled:!!l,children:[m,y&&n("span",{children:"*"})]}),c($,{isDisabled:!!l,isErrored:!!h,children:[S?n("div",{className:"left-icon",children:S}):null,F?n("div",{className:"prefix",children:F}):null,n(z,{css:u,ref:U,id:f,...e,prefix:"",placeholder:K,autoFocus:E,autoCapitalize:B,readOnly:N,required:y,disabled:l,maxLength:P,minLength:v,name:R,value:D,type:r??t,onCut:e.onCut,onCopy:e.onCopy,onBlur:e.onBlur,onFocus:e.onFocus,onPaste:e.onPaste,onInput:e.onInput,onKeyUp:e.onKeyUp,onSelect:e.onSelect,onChange:j,onKeyDown:e.onKeyDown,onBeforeInput:e.onBeforeInput,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate}),C?n("div",{className:"right-icon",children:C}):null,o&&r=="password"?n("div",{className:"password-icon",style:{cursor:"pointer"},onClick:()=>T(!0),children:n(g,{icon:L})}):null,o&&r==t?n("div",{className:"password-icon",style:{cursor:"pointer"},onClick:()=>T(!1),children:n(g,{icon:W})}):null]}),h&&p&&n(I,{error:!0,children:p}),x?n(I,{children:x}):null]})}),A=H;A.displayName="TextField";export{A as T};
