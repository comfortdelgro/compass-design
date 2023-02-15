import{s as y,R as w,j as e,a as l,r as v}from"./index-2f0c84ee.js";import{C,R as h}from"./components-34eec0a4.js";import{$ as k,a as S,b as P}from"./module-95fa510c.js";import{u as x}from"./use-dom-ref-894e841d.js";import{I as B}from"./real-module-4602f142.js";import"./module-f9a02953.js";import"./module-c212b86e.js";import"./module-8203fd97.js";import"./module-fd182f49.js";import"./_define_property-1764bf98.js";import"./module-f1247eca.js";const N=y("div",{position:"relative",touchAction:"none",".slider-track-wrapper":{position:"relative",width:"100%",".slider-rail":{position:"absolute",backgroundColor:"$cdgBlue10",borderRadius:"$full",height:"$1",width:"100%"},".slider-filled-rail":{position:"absolute",backgroundColor:"$cdgBlue100",height:"$1",borderRadius:"$full",left:"0"},".slider-track":{position:"relative",height:"$1",width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}}}),D=y("div",{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",transform:"translateX(-50%)",zIndex:1,".slider-thumb-handle":{width:"$4",height:"$4",cursor:"pointer",borderRadius:"50%",boxSizing:"border-box",border:"2px solid $cdgBlue10",backgroundColor:"$background",boxShadow:"0 0 4px rgba(0, 0, 0, 0.16)"},".slider-value":{position:"absolute",width:"$16",height:"$16",color:"$whiteText",borderRadius:"$md",backgroundColor:"$gray110",fontSize:"$header4",fontWeight:"$bold",display:"flex",justifyContent:"center",alignItems:"center",bottom:"$6","&:after":{content:"",position:"absolute",width:"$4",height:"$4",transform:"rotate(45deg)",borderRadius:"$md 0",backgroundColor:"$gray110",bottom:"-$2"}}}),j=w.forwardRef((t,n)=>{const{css:o={},tooltip:m=!0,...f}=t,d=w.useRef(null),c=x(n),b=B(t.formatOptions),u={...f,onChangeEnd:r=>{var a;return(a=t.onChangeEnd)==null?void 0:a.call(t,typeof r=="number"?r:r[0]?r[0]:0)},onChange:r=>{var a;return(a=t.onChange)==null?void 0:a.call(t,typeof r=="number"?r:r[0]?r[0]:0)}},i=k({...u,numberFormatter:b}),{groupProps:g,trackProps:R}=S(u,i,d),$=i.values[0]??0,p=t.minValue??0;return e(N,{...g,ref:c,css:o,children:l("div",{className:"slider-track-wrapper",children:[e("div",{className:"slider-rail"}),e("div",{className:"slider-filled-rail",style:{left:`${i.getValuePercent(Math.min($,p))*100}%`,width:`${(i.getValuePercent(Math.max($,p))-i.getValuePercent(Math.min($,p)))*100}%`}}),e("div",{...R,ref:d,className:"slider-track",children:e(E,{tooltip:m,state:i,trackRef:d})})]})})}),E=w.forwardRef((t,n)=>{const{state:o,trackRef:m,tooltip:f}=t,d=o.values[0]??0,c=x(n),b={index:0,trackRef:m,inputRef:c},{thumbProps:u,inputProps:i,isDragging:g}=P(b,o);return l(D,{style:{left:`${o.getThumbPercent(0)*100}%`},children:[e("div",{...u,className:"slider-thumb-handle",children:e("input",{ref:c,...i,style:{display:"none"}})}),f&&g&&e("div",{className:"slider-value",children:d})]})}),s=j;s.displayName="Slider";const q=()=>{const[t,n]=v.useState(20);return l(C,{children:[e("h1",{children:"Slider"}),e(h,{children:l("div",{style:{width:"100%",marginBottom:"2rem"},children:[e("h3",{children:"Uncontrolled slider"}),e(s,{})]})}),e(h,{children:l("div",{style:{width:"100%",marginBottom:"2rem"},children:[e("h3",{children:"Controlled slider"}),e(s,{value:t,onChange:o=>n(o)})]})}),e(h,{children:l("div",{style:{width:"100%",marginBottom:"2rem"},children:[e("h3",{children:"Disabled slider"}),e(s,{isDisabled:!0})]})}),e(h,{children:l("div",{style:{width:"100%",marginBottom:"2rem"},children:[e("h3",{children:"Tooltip disabled"}),e(s,{tooltip:!1})]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{q as Sliders};
