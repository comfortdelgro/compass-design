import{a as r,j as t,R as s}from"./index-63360bd1.js";import{C as a}from"./index-d91aa221.js";import{C as l}from"./components-ac30a283.js";import"./real-module-9c0a69a4.js";import"./import-c5521a7a.js";import"./_define_property-1764bf98.js";import"./calendar-header-619bfd6b.js";import"./import-41853bb9.js";import"./import-c416c9ae.js";import"./import-fd958c92.js";import"./import-56691b36.js";import"./use-dom-ref-7f82451e.js";import"./index-6f8cafd2.js";import"./import-0a4e19f7.js";import"./index-0ff2d8ba.js";import"./button-20f5b3f4.js";import"./import-9f60b767.js";import"./index-00e367d0.js";const{useDateFormatter:p}=a.I18N,{getLocalTimeZone:o,parseDate:c,today:n}=a.InternationalizedDate,T=()=>{const[e,i]=s.useState(c(n(o()).toString())),m=p({dateStyle:"full"});return r(l,{children:[r("p",{children:[t("b",{children:"Selected date:"}),t("span",{style:{marginLeft:"4px"},children:m.format(e.toDate(o()))})]}),t(a,{value:e,maxValue:n(o()),onChange:d=>i(d)})]})},V={decorators:[e=>r("div",{children:[t("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),t(e,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Variants,V as default};
