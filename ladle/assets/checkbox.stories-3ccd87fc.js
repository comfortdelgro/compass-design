import{a as t,j as e,r as a}from"./index-e285302b.js";import{C as r,R as n}from"./components-6c35209b.js";import{C as d}from"./checkbox-58526f5b.js";import"./use-dom-ref-58648911.js";import"./checkbox.styles-8eb6ff12.js";d.displayName="Checkbox";const m=()=>t(r,{children:[e("h3",{children:"1. Default"}),t(r,{children:[e(d,{isSelected:!1,children:"Unselected"}),e(d,{isSelected:!0,children:"Selected"}),e(d,{isDisabled:!0,children:"Unselected (disabled)"}),e(d,{isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e(d,{isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e(d,{isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"}),e(d,{isSelected:!0,isReadOnly:!0,children:"Read ony"})]}),e("h3",{children:"2. Rounded"}),t(r,{children:[e(d,{variant:"rounded",isSelected:!1,children:"Unselected"}),e(d,{variant:"rounded",isSelected:!0,children:"Selected"}),e(d,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),e(d,{variant:"rounded",isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e(d,{variant:"rounded",isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"})]}),e("h3",{children:"3. Without Labels"}),t(r,{children:[t(n,{children:[e(d,{}),e(d,{defaultSelected:!0}),e(d,{isDisabled:!0}),e(d,{defaultSelected:!0,isDisabled:!0}),e(d,{isIndeterminate:!0,defaultSelected:!0}),e(d,{isIndeterminate:!0,isDisabled:!0,defaultSelected:!0})]}),t(n,{children:[e(d,{variant:"rounded"}),e(d,{variant:"rounded",defaultSelected:!0}),e(d,{variant:"rounded",isDisabled:!0}),e(d,{variant:"rounded",defaultSelected:!0,isDisabled:!0}),e(d,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0}),e(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0})]})]}),e("h3",{children:"4. HTML forms"}),e(r,{children:e(n,{children:e(d,{name:"newsletter",value:"subscribe",children:"Subscribe"})})})]}),S=()=>{const[i,l]=a.useState(!1);return t(r,{children:[e("h3",{children:"Controlled"}),e(r,{children:e(d,{isSelected:i,onChange:()=>l(!i),children:i?"Selected":"Unselected"})})]})},b=()=>t(r,{children:[e("h3",{children:"Uncontrolled"}),t(r,{children:[e(d,{variant:"rounded",children:"Unselected"}),e(d,{variant:"rounded",defaultSelected:!0,children:"Selected"}),e(d,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),e(d,{variant:"rounded",defaultSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e(d,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0,children:"Indeterminate"}),e(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0,children:"Indeterminate (disabled)"})]})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{S as Controlled,b as Uncontrolled,m as Variants};
