import{j as o}from"./jsx-runtime-ea7736fc.js";import{r as g,R as V}from"./index-6c164b11.js";import{C}from"./objectToCSS-aff350d4.js";import{u as N}from"./use-dom-ref-7c72e1a5.js";import{P,a as D}from"./pointer-a81ef452.js";const H="_gutter_1muhi_7",b="_collapse_1muhi_33",M="_gutterVariantLeft_1muhi_67",z="_gutterVariantRight_1muhi_72",E={gutter:H,collapse:b,gutterVariantLeft:M,gutterVariantRight:z},T=({side:e,isExpand:t})=>o.jsxs("svg",{viewBox:"0 0 320 512",style:{width:14,height:14},children:[(!t&&e===a.LEFT||t&&e===a.RIGHT)&&o.jsx("path",{fill:"currentColor",d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"}),(!t&&e===a.RIGHT||t&&e===a.LEFT)&&o.jsx("path",{fill:"currentColor",d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})]});T.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{side:{required:!1,tsType:{name:"literal",value:"`${GutterSide}`"},description:""},isExpand:{required:!0,tsType:{name:"boolean"},description:""}}};const B=(e,t)=>{var I;const{parentRef:n,isExpand:r,side:_=a.RIGHT,minCollapse:L,maxExpand:u}=e,[h,s]=g.useState((I=n==null?void 0:n.current)==null?void 0:I.clientWidth),[i,d]=g.useState(r);g.useEffect(()=>{d(r)},[r]),g.useEffect(()=>{i===!0?m():i===!1&&f()},[i]);const w=c=>{var R;const y=((R=n==null?void 0:n.current)==null?void 0:R.clientWidth)??0,x=new D;if(x.start(new P(c.pageX,c.pageY)),t!=null&&t.current){c.target.setPointerCapture(c.pointerId);const j=l=>{l.preventDefault(),x.update(new P(l.pageX,l.pageY));let p=y+(_===a.RIGHT?x.distance.x:-x.distance.x);p=p<0?0:p,p===0&&d(!1),s(p)},G=()=>{var l;(l=t.current)==null||l.removeEventListener("pointermove",j)};t.current.addEventListener("pointermove",j),t.current.addEventListener("pointerup",G,{once:!0}),t.current.addEventListener("pointercancel",G,{once:!0})}},m=()=>{s(u??"100%")},f=()=>{s(L??0)};return{width:h,isExpand:i,setWidth:s,toggleExpand:()=>{d(c=>!c)},expand:m,collapse:f,handlePointerDown:w}};var a=(e=>(e.RIGHT="right",e.LEFT="left",e))(a||{});const v=V.forwardRef((e,t)=>{const{css:n={},onChange:r,className:_,hasExpandButton:L,side:u="right"}=e,h=N(t),{width:s,isExpand:i,toggleExpand:d,handlePointerDown:w}=B(e,h);g.useEffect(()=>{r==null||r(s)},[r,s]);const m=[E.gutter,u==="left"&&E.gutterVariantLeft,u==="right"&&E.gutterVariantRight,"cdg-gutter",_].filter(Boolean).join(" ");return o.jsx(C,{css:n,children:o.jsx("div",{ref:h,className:m,onPointerDown:w,children:L&&o.jsx("button",{type:"button",onClick:f=>{f.stopPropagation(),d()},className:`${E.collapse} cdg-gutter-collapse-button`,children:o.jsx(T,{side:u,isExpand:i})})})})});v.__docgenInfo={description:"",methods:[],displayName:"Gutter"};v.displayName="Gutter";export{v as G};