import{j as r}from"./jsx-runtime-ea7736fc.js";import{H as t}from"./heart-filled-5f2b210b.js";import"./index-7972436d.js";import{E as o}from"./index-9b877fe0.js";import{B as s}from"./button-be34d763.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./pick-child-c116e6b4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";const p={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},n=()=>{const i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.";return r.jsxs("div",{style:{...p},children:[r.jsx("h3",{children:"Default error is primary variant"}),r.jsxs(o,{children:[r.jsx(o.Icon,{children:r.jsx(t,{})}),r.jsx(o.Title,{children:"Error: some bugs"}),r.jsx(o.Description,{children:i}),r.jsx(o.Action,{children:r.jsx(s,{onPress:()=>{console.log("click ok")},children:"OK"})})]})]})},e=()=>{const i="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.";return r.jsxs("div",{style:{...p},children:[r.jsx("h3",{children:"Primary variant"}),r.jsxs(o,{variant:"primary",children:[r.jsx(o.Icon,{children:r.jsx(t,{})}),r.jsx(o.Title,{children:"Error: some bugs"}),r.jsx(o.Description,{children:i}),r.jsx(o.Action,{children:r.jsx(s,{onPress:()=>{console.log("click ok")},children:"OK"})})]}),r.jsx("h3",{children:"Secondary variant"}),r.jsxs(o,{variant:"secondary",children:[r.jsx(o.Image,{children:r.jsx(t,{style:{height:"inherit"}})}),r.jsx(o.Title,{children:"Error: some bugs"}),r.jsx(o.Description,{children:i}),r.jsx(o.Action,{children:r.jsx(s,{onPress:()=>{console.log("click ok")},children:"OK"})})]})]})},I={title:"Example/Error",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"Variant"};var a,c,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  return <div style={{
    ...style
  }}>
      <h3>Default error is primary variant</h3>

      <Error>
        <Error.Icon>
          <HeartFilled />
        </Error.Icon>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button onPress={() => {
          console.log('click ok');
        }}>
            OK
          </Button>
        </Error.Action>
      </Error>
    </div>;
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  return <div style={{
    ...style
  }}>
      <h3>Primary variant</h3>
      <Error variant='primary'>
        <Error.Icon>
          <HeartFilled />
        </Error.Icon>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button onPress={() => {
          console.log('click ok');
        }}>
            OK
          </Button>
        </Error.Action>
      </Error>

      <h3>Secondary variant</h3>
      <Error variant='secondary'>
        <Error.Image>
          <HeartFilled style={{
          height: 'inherit'
        }} />
        </Error.Image>
        <Error.Title>Error: some bugs</Error.Title>
        <Error.Description>{lorem}</Error.Description>
        <Error.Action>
          <Button onPress={() => {
          console.log('click ok');
        }}>
            OK
          </Button>
        </Error.Action>
      </Error>
    </div>;
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const b=["Default","Variant"];export{n as Default,e as Variant,b as __namedExportsOrder,I as default};
