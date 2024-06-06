import{j as r}from"./jsx-runtime-ea7736fc.js";import{H as d}from"./heart-filled-5f2b210b.js";import"./index-7972436d.js";import{A as n}from"./index-44f80ede.js";import{B as t}from"./button-be34d763.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";const e=()=>r.jsx("div",{style:{padding:"20px"},children:r.jsxs(n,{children:[r.jsx(n.LeftGroup,{children:r.jsx(t,{variant:"primary",children:r.jsx(d,{})})}),r.jsx(n.CenterGroup,{children:r.jsx(t,{isDisabled:!0,children:r.jsx(d,{})})}),r.jsxs(n.RightGroup,{children:[r.jsx(t,{variant:"primary",children:"Primary"}),r.jsx(t,{variant:"secondary",children:"Secondary"})]})]})}),a=()=>r.jsx("div",{style:{padding:"20px"},children:r.jsxs(n,{children:[r.jsx(n.LeftGroup,{children:r.jsx(t,{variant:"primary",children:r.jsx(d,{})})}),r.jsxs(n.RightGroup,{children:[r.jsx(t,{variant:"primary",children:"Primary"}),r.jsx(t,{variant:"secondary",children:"Secondary"})]})]})}),i=()=>r.jsx("div",{style:{padding:"20px"},children:r.jsx(n,{children:r.jsx(n.LeftGroup,{children:r.jsx(t,{variant:"primary",children:r.jsx(d,{})})})})}),o=()=>r.jsx("div",{style:{padding:"20px"},children:r.jsx(n,{children:r.jsxs(n.RightGroup,{children:[r.jsx(t,{variant:"primary",children:"Primary"}),r.jsx(t,{variant:"secondary",children:"Secondary"})]})})}),s=()=>r.jsx("div",{style:{padding:"20px"},children:r.jsx(n,{children:r.jsx(n.CenterGroup,{children:r.jsx(t,{isDisabled:!0,children:r.jsx(d,{})})})})}),N={title:"Example/Action Bar",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Basic"};a.__docgenInfo={description:"",methods:[],displayName:"LeftAndRight"};i.__docgenInfo={description:"",methods:[],displayName:"Left"};o.__docgenInfo={description:"",methods:[],displayName:"Right"};s.__docgenInfo={description:"",methods:[],displayName:"Center"};var c,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <ActionBar>
        <ActionBar.LeftGroup>
          <Button variant='primary'>
            <HeartFilled />
          </Button>
        </ActionBar.LeftGroup>
        <ActionBar.CenterGroup>
          <Button isDisabled>
            <HeartFilled />
          </Button>
        </ActionBar.CenterGroup>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </div>;
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,B;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <ActionBar>
        <ActionBar.LeftGroup>
          <Button variant='primary'>
            <HeartFilled />
          </Button>
        </ActionBar.LeftGroup>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </div>;
}`,...(B=(m=a.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var h,x,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <ActionBar>
        <ActionBar.LeftGroup>
          <Button variant='primary'>
            <HeartFilled />
          </Button>
        </ActionBar.LeftGroup>
      </ActionBar>
    </div>;
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var g,j,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <ActionBar>
        <ActionBar.RightGroup>
          <Button variant='primary'>Primary</Button>
          <Button variant='secondary'>Secondary</Button>
        </ActionBar.RightGroup>
      </ActionBar>
    </div>;
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var A,f,G;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <ActionBar>
        <ActionBar.CenterGroup>
          <Button isDisabled>
            <HeartFilled />
          </Button>
        </ActionBar.CenterGroup>
      </ActionBar>
    </div>;
}`,...(G=(f=s.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};const b=["Basic","LeftAndRight","Left","Right","Center"];export{e as Basic,s as Center,i as Left,a as LeftAndRight,o as Right,b as __namedExportsOrder,N as default};
