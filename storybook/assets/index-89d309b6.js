import{j as e}from"./jsx-runtime-9ef10904.js";import{R as y}from"./index-6c164b11.js";import{c as u,C as p}from"./string-b39bd50e.js";const C="_body_1cjbl_6",N="_bold_1cjbl_16",j="_semibold_1cjbl_20",q="_body1_1cjbl_26",x="_body2_1cjbl_31",K="_body3_1cjbl_36",h={body:C,bold:N,semibold:j,body1:q,body2:x,body3:K},w=s=>{const{css:t={},children:i,variant:a="body1",weight:l,component:n,className:r,...o}=s,d=y.useMemo(()=>n||"p",[n]),m=u(a&&h[a],l&&h[l],h.body,r,"cdg-typography-body");return e.jsx(e.Fragment,{children:e.jsx(p,{css:t,children:e.jsx(d,{className:m,...o,children:i})})})};w.__docgenInfo={description:"",methods:[],displayName:"Body",props:{variant:{required:!1,tsType:{name:"union",raw:"'body1' | 'body2' | 'body3'",elements:[{name:"literal",value:"'body1'"},{name:"literal",value:"'body2'"},{name:"literal",value:"'body3'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
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
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const P="_display_nxh0k_6",T="_bold_nxh0k_16",R="_semibold_nxh0k_20",B="_display1_nxh0k_26",$="_display2_nxh0k_31",L="_display3_nxh0k_36",b={display:P,bold:T,semibold:R,display1:B,display2:$,display3:L},S=s=>{const{css:t={},children:i,variant:a="display1",weight:l="bold",component:n,className:r,...o}=s,d=y.useMemo(()=>{if(n)return n;switch(a){case"display1":return"h1";case"display2":return"h2";case"display3":return"h3"}},[n,a]),m=u(b.display,a&&b[a],l&&b[l],r,"cdg-typography-display");return e.jsx(e.Fragment,{children:e.jsx(p,{css:t,children:e.jsx(d,{...o,className:m,children:i})})})};S.__docgenInfo={description:"",methods:[],displayName:"Display",props:{variant:{required:!1,tsType:{name:"union",raw:"'display1' | 'display2' | 'display3'",elements:[{name:"literal",value:"'display1'"},{name:"literal",value:"'display2'"},{name:"literal",value:"'display3'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'bold' | 'semibold'",elements:[{name:"literal",value:"'bold'"},{name:"literal",value:"'semibold'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
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
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const z="_header_17qtj_6",I="_bold_17qtj_16",F="_semibold_17qtj_20",D="_header0_17qtj_26",H="_header1_17qtj_31",M="_header2_17qtj_36",E="_header3_17qtj_41",A="_header4_17qtj_46",G="_header5_17qtj_51",_={header:z,bold:I,semibold:F,header0:D,header1:H,header2:M,header3:E,header4:A,header5:G},k=s=>{const{css:t={},children:i,variant:a="header1",weight:l="semibold",component:n,className:r,...o}=s,d=y.useMemo(()=>{if(n)return n;switch(a){case"header0":return"h1";case"header1":return"h1";case"header2":return"h2";case"header3":return"h3";case"header4":return"h4";case"header5":return"h5";default:return"h1"}},[n,a]),m=u(_.header,a&&_[a],l&&_[l],r,"cdg-typography-header");return e.jsx(e.Fragment,{children:e.jsx(p,{css:t,children:e.jsx(d,{...o,className:m,children:i})})})};k.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'header0'
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
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'semibold' | 'bold'",elements:[{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""}}};const J="_label_rmxzp_6",O="_bold_rmxzp_16",Q="_semibold_rmxzp_20",U="_light_rmxzp_24",W="_label1_rmxzp_30",X="_label2_rmxzp_35",Y="_label3_rmxzp_40",v={label:J,bold:O,semibold:Q,light:U,label1:W,label2:X,label3:Y},V=s=>{const{css:t={},children:i,variant:a="label1",weight:l,component:n,className:r,...o}=s,d=y.useMemo(()=>n||"label",[n]),m=u(v.label,a&&v[a],l&&v[l],r&&r,"cdg-typography-label");return e.jsx(e.Fragment,{children:e.jsx(p,{css:t,children:e.jsx(d,{...o,className:m,children:i})})})};V.__docgenInfo={description:"",methods:[],displayName:"Label",props:{variant:{required:!1,tsType:{name:"union",raw:"'label1' | 'label2' | 'label3'",elements:[{name:"literal",value:"'label1'"},{name:"literal",value:"'label2'"},{name:"literal",value:"'label3'"}]},description:""},component:{required:!1,tsType:{name:"union",raw:`| 'h1'
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
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const Z="_link_txig6_6",ee="_bold_txig6_17",ae="_semibold_txig6_21",ne="_link1_txig6_27",le="_link2_txig6_32",re="_link3_txig6_37",g={link:Z,bold:ee,semibold:ae,link1:ne,link2:le,link3:re},f=s=>{const{css:t={},children:i,weight:a,variant:l="link1",className:n,...r}=s,o=u(g.link,l&&g[l],a&&g[a],n,"cdg-typography-link");return e.jsx(e.Fragment,{children:e.jsx(p,{css:t,children:e.jsx("a",{...r,className:o,children:i})})})};f.__docgenInfo={description:"",methods:[],displayName:"Link",props:{variant:{required:!1,tsType:{name:"union",raw:"'link1' | 'link2' | 'link3'",elements:[{name:"literal",value:"'link1'"},{name:"literal",value:"'link2'"},{name:"literal",value:"'link3'"}]},description:""},weight:{required:!1,tsType:{name:"union",raw:"'semibold' | 'bold'",elements:[{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""}}};const c={Body:w,Display:S,Header:k,Label:V,Link:f};c.Body.displayName="Typography.Body";c.Display.displayName="Typography.Display";c.Header.displayName="Typography.Header";c.Label.displayName="Typography.Label";c.Link.displayName="Typography.Link";export{c as T};
