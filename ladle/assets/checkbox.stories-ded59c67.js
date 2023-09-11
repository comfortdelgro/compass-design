import{a as t,j as e,r as a}from"./index-4cf56b06.js";import{C as r,R as l}from"./components-c8fb4e9c.js";import{C as d}from"./index-3021d4e4.js";import"./use-dom-ref-e8fa133a.js";import"./checkbox.styles-95571ad4.js";import"./useCurrentTheme-eaeb8c44.js";const S=()=>t(r,{children:[e("h3",{children:"1. Default"}),t(r,{children:[e(d,{isSelected:!1,children:"Unselected"}),e(d,{isSelected:!0,children:"Selected"}),e(d,{isDisabled:!0,children:"Unselected (disabled)"}),e(d,{isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e(d,{isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e(d,{isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"}),e(d,{isSelected:!0,isReadOnly:!0,children:"Read only"})]}),e("h3",{children:"2. Rounded"}),t(r,{children:[e(d,{variant:"rounded",isSelected:!1,children:"Unselected"}),e(d,{variant:"rounded",isSelected:!0,children:"Selected"}),e(d,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),e(d,{variant:"rounded",isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e(d,{variant:"rounded",isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"})]}),e("h3",{children:"3. Without Labels"}),t(r,{children:[t(l,{css:{gap:"1em"},children:[e(d,{}),e(d,{defaultSelected:!0}),e(d,{isDisabled:!0}),e(d,{defaultSelected:!0,isDisabled:!0}),e(d,{isIndeterminate:!0,defaultSelected:!0}),e(d,{isIndeterminate:!0,isDisabled:!0,defaultSelected:!0})]}),t(l,{css:{gap:"1em"},children:[e(d,{variant:"rounded"}),e(d,{variant:"rounded",defaultSelected:!0}),e(d,{variant:"rounded",isDisabled:!0}),e(d,{variant:"rounded",defaultSelected:!0,isDisabled:!0}),e(d,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0}),e(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0})]})]}),e("h3",{children:"4. HTML forms"}),e(r,{children:e(l,{children:e(d,{name:"newsletter",value:"subscribe",children:"Subscribe"})})})]}),b=()=>{const[i,n]=a.useState(!1);return t(r,{children:[e("h3",{children:"Controlled"}),e(r,{children:e(d,{isSelected:i,onChange:()=>n(!i),children:i?"Selected":"Unselected"})})]})},f=()=>t(r,{children:[e("h3",{children:"Uncontrolled"}),t(r,{children:[e(d,{variant:"rounded",children:"Unselected"}),e(d,{variant:"rounded",defaultSelected:!0,children:"Selected"}),e(d,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),e(d,{variant:"rounded",defaultSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e(d,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0,children:"Indeterminate"}),e(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0,children:"Indeterminate (disabled)"})]})]}),v=()=>{const[i,n]=a.useState(!1);return t(r,{children:[e("h3",{children:"H5 Checkbox"}),e(d,{isSelected:i,variant:"h5",onChange:()=>n(!i),children:e("b",{style:{fontSize:"16px",lineHeight:"24px"},children:"I'm picking with/for a child below 1.35m"})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Controlled,v as H5Checkbox,f as Uncontrolled,S as Variants};
