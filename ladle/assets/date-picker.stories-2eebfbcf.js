import{j as e,a as n,r as c}from"./index-66ea3676.js";import"./index-5fc10a31.js";import{D as a}from"./index-3ad55f28.js";import{C as i}from"./calendar-b8b57b63.js";import{C as m}from"./components-e805f086.js";import"./useCalendarState-dc20e822.js";import"./use-dom-ref-dc5008e6.js";import"./arrow-right-39897212.js";import"./index-8280f91b.js";import"./button-912db37c.js";import"./useOverlayTriggerState-faf0cc91.js";import"./useEvent-f8d19b36.js";import"./import-103c32e0.js";const{I18nProvider:o,useDateFormatter:p}=i.I18N,{getLocalTimeZone:t,parseDate:h,today:l}=i.InternationalizedDate,E=()=>e(o,{locale:"en-SG",children:n(m,{children:[e("h3",{children:"Readonly"}),e(a,{isReadOnly:!0,label:"Date",defaultValue:l(t())}),e("h3",{children:"Disabled"}),e(a,{isDisabled:!0,label:"Date",defaultValue:l(t())}),e("h3",{children:"Invalid"}),e(a,{isInvalid:!0,label:"Date",defaultValue:l(t()),isRequired:!0,necessityIndicator:"icon"}),e("h3",{children:"MinValue"}),e(a,{label:"Date",defaultValue:l(t()).add({days:1}),minValue:l(t()).add({days:1})}),e("h3",{children:"MaxValue"}),e(a,{label:"Date",defaultValue:l(t()),maxValue:l(t())}),e("h3",{children:"Mobile version"}),e(a,{label:"Date",isMobile:!0}),e("h3",{children:"Helper texts"}),e(a,{label:"Date",helperText:"Helper text",errorMessage:"Error message",isInvalid:!0})]})}),R=()=>{const[r,d]=c.useState(h(l(t()).toString())),s=p({dateStyle:"full"});return n(o,{locale:"en-SG",children:[n("p",{children:[e("b",{children:"Selected date:"}),e("span",{style:{marginLeft:"4px"},children:r?s.format(r==null?void 0:r.toDate(t())):e("span",{style:{marginLeft:"4px"},children:"Invalid Date"})})]}),e(a,{label:"Date",value:r,defaultValue:l(t()),onChange:u=>{d(u)}})]})},j=()=>e(a,{label:"Date",isRequired:!0});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Controlled,j as Default,E as Variants};
