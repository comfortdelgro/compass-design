import{a as l,j as e,R as a}from"./index-9137807e.js";import{C as d,R as s}from"./components-17c10c6a.js";import{T as t}from"./index-f10ada5c.js";import"./use-dom-ref-17bb3812.js";const m=()=>l(d,{children:[e("h3",{children:"Small"}),l(s,{children:[e(t,{size:"sm"}),e(t,{size:"sm",defaultSelected:!0}),e(t,{size:"sm",isDisabled:!0}),e(t,{size:"sm",defaultSelected:!0,isDisabled:!0})]}),e("h3",{children:"Large"}),l(s,{children:[e(t,{size:"lg"}),e(t,{size:"lg",defaultSelected:!0}),e(t,{size:"lg",isDisabled:!0}),e(t,{size:"lg",defaultSelected:!0,isDisabled:!0})]})]}),g=()=>{const[r,n]=a.useState(!0);return l(d,{children:[e("h3",{children:"Controlled"}),e(t,{size:"lg",isSelected:r,onChange:i=>{console.log("value",i),n(i)}}),e("h3",{children:"UnControlled"}),e(t,{size:"lg",defaultSelected:!0}),e("h3",{children:"Disabled"}),e(t,{size:"lg",isDisabled:!0}),e("h3",{children:"ReadOnly"}),e(t,{size:"lg",isReadOnly:!0}),e("h3",{children:"Required"}),e(t,{size:"lg",isRequired:!0})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as State,m as Variants};
