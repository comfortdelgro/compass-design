import{j as o}from"./jsx-runtime-ea7736fc.js";import{R as f}from"./index-6c164b11.js";import{C as d}from"./objectToCSS-aff350d4.js";import{u as p}from"./use-dom-ref-7c72e1a5.js";import{L as h}from"./layout-5fac5c12.js";const x="_formLayout_cwc16_5",w="_column1_cwc16_14",N="_column2_cwc16_18",j="_column3_cwc16_22",F="_formLayoutRow_cwc16_26",$="_formLayoutGroup_cwc16_31",E="_formExplaination_cwc16_35",G="_breaksOnSmall_cwc16_42",l={formLayout:x,column1:w,column2:N,column3:j,formLayoutRow:F,formLayoutGroup:$,formExplaination:E,breaksOnSmall:G},i=f.forwardRef((r,t)=>{const{children:n,css:c,className:a,style:e,...m}=r,s=p(t);return o.jsx(d,{css:c,childrenRef:s,children:o.jsx("div",{ref:s,className:`cdg-form-layout ${a||""} ${l.formLayout}`,style:e,...m,children:n})})});i.__docgenInfo={description:"",methods:[],displayName:"FormLayout"};const _=f.forwardRef((r,t)=>{const{title:n,css:c={},className:a,description:e,style:m,...s}=r,u=p(t);return o.jsx(d,{css:c,childrenRef:u,children:o.jsxs("div",{ref:u,className:`${a} ${l.formExplaination}`,...s,children:[o.jsx("div",{className:"form-title",children:n}),o.jsx("div",{className:"form-explaination",children:e})]})})});_.__docgenInfo={description:"",methods:[],displayName:"FormLayoutExplaination"};const L=f.forwardRef((r,t)=>{const{children:n,css:c={},className:a="",style:e,...m}=r,s=p(t);return o.jsx(d,{css:c,childrenRef:s,children:o.jsx("div",{ref:s,className:`${a} ${l.formLayoutGroup}`,style:e,...m,children:n})})});L.__docgenInfo={description:"",methods:[],displayName:"FormLayoutGroup"};const R=f.forwardRef((r,t)=>{const{children:n,columns:c=3,css:a={},className:e="",breaksOnSmall:m=!1,style:s,...u}=r,y=p(t);return o.jsx(d,{css:a,childrenRef:y,children:o.jsx("div",{ref:y,style:s,className:`${l.formLayoutRow} ${e} ${m?l.breaksOnSmall:""} ${l["column"+c]}`,...u,children:n})})});R.__docgenInfo={description:"",methods:[],displayName:"FormLayoutRow"};i.Row=R;i.Group=L;i.Explaination=_;i.displayName="FormLayout";h.displayName="Layout";export{i as F};