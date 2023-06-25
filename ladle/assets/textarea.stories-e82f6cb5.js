import{N as s}from"./index-bbc6e670.js";import{F as n}from"./index.es-d62ae1d4.js";import{a as t,j as e,r as d,F as i}from"./index-4f639d7a.js";import{C as m}from"./components-4ae9f9ca.js";import{T as r}from"./index-43674d30.js";import"./use-dom-ref-172c1966.js";const p=()=>{const[a,o]=d.useState("My initial value");return t(m,{children:[e("h3",{children:" Simple textarea"}),e(r,{placeholder:"Enter your message"}),e("br",{}),e("h3",{children:" Textarea with label and isRequired"}),e(r,{label:t(i,{children:["My custom label  ",e(n,{icon:s,style:{fontSize:"0.9em"}})]}),placeholder:"Enter your message",isRequired:!0}),e("br",{}),e("h3",{children:" Textarea with word count and max length"}),e(r,{label:"Text Label",placeholder:"Enter your message",wordCount:!0}),e(r,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50}),e("br",{}),e("h3",{children:"Textarea with isErrored and error message (error message is only visible when isErrored == true)"}),e(r,{label:"Text Label",placeholder:"Enter your message",wordCount:!0,maxLength:50,isErrored:!0,errorMessage:"Error Message"}),e("br",{}),e("h3",{children:" Textarea with isDisabled"}),e(r,{label:"Disabled Text Label",placeholder:"Enter your message",isDisabled:!0}),e("br",{}),e("h3",{children:" Controlled Textarea"}),e(r,{label:"Controlled Text Label",placeholder:"Enter your message",value:a,onChange:l=>o(l)}),e("br",{}),e("br",{})]})},w={decorators:[a=>t("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(a,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Variants,w as default};