import{s as r,R as a,a as d,j as e}from"./index-4f639d7a.js";import{u as S}from"./use-dom-ref-172c1966.js";const ee=r("div",{width:"100%",display:"block",fontFamily:"$sans"}),ie=r("label",{fontSize:"$label1",fontWeight:"$semibold",marginBottom:"$2",display:"inline-block",width:"100%",".asterisk":{marginLeft:"$1",color:"$danger"}}),re=r("div",{width:"100%",height:"$11",display:"flex",flexDirection:"row",alignItems:"center",borderWidth:"1px",borderStyle:"solid",borderColor:"$divider",borderRadius:"$md",color:"$typeHeading",backgroundColor:"$whiteText",transition:"$default","&:focus-within":{borderColor:"$cdgBlue",".left-icon":{color:"$cdgBlue"}},".left-icon, .right-icon":{color:"$typeHeading",transition:"$default"},".left-icon":{width:"$5",height:"$5",marginLeft:"$2_5",marginRight:"-$1"},".prefix":{minWidth:"$5",height:"$5",marginLeft:"$2_5",marginRight:"-$1",display:"flex",justifyContent:"center",alignItems:"center"},".right-icon":{width:"$4",height:"$4",marginRight:"$2_5",marginLeft:"-$1"},".password-icon":{fontSize:"0.8em",marginRight:"$2_5",marginLeft:"-$1",svg:{height:"1rem"}},variants:{isDisabled:{true:{backgroundColor:"$gray20","*":{color:"$disabledText",cursor:"not-allowed !important"}}},isErrored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}}}}),oe=r("input",{width:"100%",fontSize:"$label1",fontWeight:"$semibold",lineHeight:"$normal",padding:"$1_5 $3",border:0,borderRadius:"$md",backgroundColor:"transparent","&:focus":{outline:"none",boxShadow:"none"},"&::placeholder":{color:"#B4B4B4",fontSize:"$label1",fontWeight:"$semibold"}}),v=r("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"}}}}),te=a.forwardRef((z,R)=>{const{css:c={},label:u,id:h=`cdg-element-${Math.random().toString(36).substring(2)}`,name:T,value:F,type:o,isErrored:f,isReadOnly:L=!1,isRequired:g=!1,helperText:p,errorMessage:m,leftIcon:$,rightIcon:C,prefix:b,password:i=!1,maxLength:B,minLength:M,autoCapitalize:k,autoFocus:W,onChangeEvent:t,onChange:l,placeholder:I,isDisabled:x,inputRef:N,onCut:D,onCopy:P,onBlur:_,onFocus:j,onPaste:H,onInput:O,onKeyUp:E,onSelect:q,onKeyDown:K,onBeforeInput:U,onCompositionEnd:V,onCompositionStart:A,onCompositionUpdate:G,...J}=z,Q={...J},X=S(R),Y=S(N),[n,y]=a.useState(!1),Z=w=>{l==null||l(w.target.value),t==null||t(w)},s=a.useMemo(()=>i==!0&&n==!1?"password":i==!0&&n==!0?o:null,[i,n]);return d(ee,{css:c,...Q,ref:X,children:[u&&d(ie,{htmlFor:h,children:[u,g&&e("span",{className:"asterisk",children:"*"})]}),d(re,{isDisabled:!!x,isErrored:!!f,children:[$?e("div",{className:"left-icon",children:$}):null,b?e("div",{className:"prefix",children:b}):null,e(oe,{css:c,id:h,prefix:"",placeholder:I,autoFocus:W,autoCapitalize:k,readOnly:L,required:g,disabled:x,maxLength:B,minLength:M,name:T,value:F,type:s??o,onCut:D,onCopy:P,onBlur:_,onFocus:j,onPaste:H,onInput:O,onKeyUp:E,onSelect:q,onChange:Z,onKeyDown:K,onBeforeInput:U,onCompositionEnd:V,onCompositionStart:A,onCompositionUpdate:G,ref:Y}),C?e("div",{className:"right-icon",children:C}):null,i&&s=="password"?e("div",{className:"password-icon",style:{cursor:"pointer"},onClick:()=>y(!0),children:e("svg",{viewBox:"0 0 640 512",children:e("path",{fill:"currentColor",d:"M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z"})})}):null,i&&s==o?e("div",{className:"password-icon",style:{cursor:"pointer"},onClick:()=>y(!1),children:e("svg",{viewBox:"0 0 576 512",children:e("path",{fill:"currentColor",d:"M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"})})}):null]}),f&&m&&e(v,{error:!0,children:m}),p?e(v,{children:p}):null]})}),le=te;le.displayName="TextField";export{le as T};