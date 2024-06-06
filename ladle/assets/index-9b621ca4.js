import{j as a}from"./jsx-runtime-ea7736fc.js";import{R as m}from"./index-6c164b11.js";import{C as p}from"./objectToCSS-aff350d4.js";const N="_body_1cjbl_6",j="_bold_1cjbl_16",q="_semibold_1cjbl_20",C="_body1_1cjbl_26",x="_body2_1cjbl_31",K="_body3_1cjbl_36",h={body:N,bold:j,semibold:q,body1:C,body2:x,body3:K},w=s=>{const{css:t={},children:i,variant:e="body1",weight:n,component:l,className:r,...o}=s,d=m.useMemo(()=>l||"p",[l]),u=m.useMemo(()=>[e&&h[e],n&&h[n],h.body,r,"cdg-body"].filter(Boolean).join(" "),[e,n,r]);return a.jsx(a.Fragment,{children:a.jsx(p,{css:t,children:a.jsx(d,{className:u,...o,children:i})})})};w.__docgenInfo={description:"",methods:[],displayName:"Body",props:{variant:{required:!1,tsType:{name:"union",raw:"'body1' | 'body2' | 'body3'",elements:[{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'body3'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'span'
| 'p'
| 'label'
| 'div'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'label'"},{name:"literal",value:"'div'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'none' | 'bold' | 'semibold'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'semibold'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const P="_display_nxh0k_6",T="_bold_nxh0k_16",B="_semibold_nxh0k_20",R="_display1_nxh0k_26",$="_display2_nxh0k_31",M="_display3_nxh0k_36",b={display:P,bold:T,semibold:B,display1:R,display2:$,display3:M},S=s=>{const{css:t={},children:i,variant:e="display1",weight:n="bold",component:l,className:r,...o}=s,d=m.useMemo(()=>{if(l)return l;switch(e){case"display1":return"h1";case"display2":return"h2";case"display3":return"h3"}},[l,e]),u=m.useMemo(()=>[b.display,e&&b[e],n&&b[n],r,"cdg-display"].filter(Boolean).join(" "),[r,e,n]);return a.jsx(a.Fragment,{children:a.jsx(p,{css:t,children:a.jsx(d,{...o,className:u,children:i})})})};S.__docgenInfo={description:"",methods:[],displayName:"Display",props:{variant:{required:!1,tsType:{name:"union",raw:"'display1' | 'display2' | 'display3'",elements:[{name:"literal",value:"'display1'"},{name:"literal",value:"'display2'"},{name:"literal",value:"'display3'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'semibold'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'semibold'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'span'
| 'p'
| 'label'
| 'div'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'label'"},{name:"literal",value:"'div'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const L="_header_17qtj_6",z="_bold_17qtj_16",I="_semibold_17qtj_20",F="_header0_17qtj_26",D="_header1_17qtj_31",H="_header2_17qtj_36",E="_header3_17qtj_41",A="_header4_17qtj_46",G="_header5_17qtj_51",_={header:L,bold:z,semibold:I,header0:F,header1:D,header2:H,header3:E,header4:A,header5:G},k=s=>{const{css:t={},children:i,variant:e="header1",weight:n="semibold",component:l,className:r,...o}=s,d=m.useMemo(()=>{if(l)return l;switch(e){case"header0":return"h1";case"header1":return"h1";case"header2":return"h2";case"header3":return"h3";case"header4":return"h4";case"header5":return"h5";default:return"h1"}},[l,e]),u=m.useMemo(()=>[_.header,e&&_[e],n&&_[n],r&&r,"cdg-header"].filter(Boolean).join(" "),[r,e,n]);return a.jsx(a.Fragment,{children:a.jsx(p,{css:t,children:a.jsx(d,{...o,className:u,children:i})})})};k.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'header0'
| 'header1'
| 'header2'
| 'header3'
| 'header4'
| 'header5'`,elements:[{name:"literal",value:"'header0'"},{name:"literal",value:"'header1'"},{name:"literal",value:"'header2'"},{name:"literal",value:"'header3'"},{name:"literal",value:"'header4'"},{name:"literal",value:"'header5'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'span'
| 'p'
| 'label'
| 'div'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'label'"},{name:"literal",value:"'div'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'semibold' | 'bold'",elements:[{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""}}};const J="_label_rmxzp_6",O="_bold_rmxzp_16",Q="_semibold_rmxzp_20",U="_light_rmxzp_24",W="_label1_rmxzp_30",X="_label2_rmxzp_35",Y="_label3_rmxzp_40",v={label:J,bold:O,semibold:Q,light:U,label1:W,label2:X,label3:Y},V=s=>{const{css:t={},children:i,variant:e="label1",weight:n,component:l,className:r,...o}=s,d=m.useMemo(()=>l||"label",[l]),u=m.useMemo(()=>[v.label,e&&v[e],n&&v[n],r&&r,"cdg-label"].filter(Boolean).join(" "),[r,e,n]);return a.jsx(a.Fragment,{children:a.jsx(p,{css:t,children:a.jsx(d,{...o,className:u,children:i})})})};V.__docgenInfo={description:"",methods:[],displayName:"Label",props:{variant:{required:!1,tsType:{name:"union",raw:"'label1' | 'label2' | 'label3'",elements:[{name:"literal",value:"'label1'"},{name:"literal",value:"'label2'"},{name:"literal",value:"'label3'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'span'
| 'p'
| 'label'
| 'div'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'span'"},{name:"literal",value:"'p'"},{name:"literal",value:"'label'"},{name:"literal",value:"'div'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'semibold' | 'light'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'light'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const Z="_link_txig6_6",ee="_bold_txig6_17",ae="_semibold_txig6_21",ne="_link1_txig6_27",le="_link2_txig6_32",re="_link3_txig6_37",g={link:Z,bold:ee,semibold:ae,link1:ne,link2:le,link3:re},f=s=>{const{css:t={},children:i,weight:e,variant:n="link1",className:l,...r}=s,o=m.useMemo(()=>[g.link,n&&g[n],e&&g[e],l&&l,"cdg-link"].filter(Boolean).join(" "),[l,n,e]);return a.jsx(a.Fragment,{children:a.jsx(p,{css:t,children:a.jsx("a",{...r,className:o,children:i})})})};f.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{required:!1,tsType:{name:"union",raw:"'link1' | 'link2' | 'link3'",elements:[{name:"literal",value:"'link1'"},{name:"literal",value:"'link2'"},{name:"literal",value:"'link3'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'semibold' | 'bold'",elements:[{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const c={Body:w,Display:S,Header:k,Label:V,Link:f};c.Body.displayName="Typography.Body";c.Display.displayName="Typography.Display";c.Header.displayName="Typography.Header";c.Label.displayName="Typography.Label";c.Link.displayName="Typography.Link";const oe=c;export{oe as T};
