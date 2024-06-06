import{j as n}from"./jsx-runtime-ea7736fc.js";import{C as A}from"./cross-bdcb89a4.js";import{H as x}from"./heart-filled-5f2b210b.js";import"./index-7972436d.js";import{A as e}from"./index-0c922b64.js";import{B as u}from"./button-be34d763.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./pick-child-c116e6b4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";const j={width:"100%",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"center",gap:"1.5rem",marginBottom:"2rem"},o=()=>n.jsx("div",{style:{width:"48px",height:"48px",background:"#FFF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(x,{width:22})}),i=()=>n.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[n.jsx("div",{style:{width:"48px",height:"48px",background:"#FFF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center"},children:n.jsx(x,{width:22})}),n.jsx(u,{variant:"ghost",css:{width:24,height:24,span:{padding:0}},children:n.jsx(A,{width:22})})]}),t=()=>n.jsxs(n.Fragment,{children:[n.jsx("h5",{style:{margin:0,fontSize:"16px",fontWeight:600,lineHeight:"24px"},children:"Stay up to date with the latest news and updates"}),n.jsx("p",{style:{margin:0,fontSize:"16px",fontWeight:400,lineHeight:"24px"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."})]}),r=()=>n.jsx(u,{variant:"secondary",css:{background:"white"},children:"Button"}),a=()=>n.jsxs("div",{style:j,children:[n.jsxs(e.Banner,{children:[n.jsx(e.Banner.Left,{children:n.jsx(o,{})}),n.jsx(e.Banner.Body,{children:n.jsx(t,{})}),n.jsx(e.Banner.Right,{children:n.jsx(r,{})})]}),n.jsxs(e.Banner,{variant:"primary-dark",children:[n.jsx(e.Banner.Left,{children:n.jsx(o,{})}),n.jsx(e.Banner.Body,{children:n.jsx(t,{})}),n.jsx(e.Banner.Right,{children:n.jsx(r,{})})]}),n.jsxs(e.Banner,{variant:"gray-light",children:[n.jsx(e.Banner.Left,{children:n.jsx(o,{})}),n.jsx(e.Banner.Body,{children:n.jsx(t,{})}),n.jsx(e.Banner.Right,{children:n.jsx(r,{})})]}),n.jsxs(e.Card,{css:{width:"300px"},children:[n.jsx(e.Card.Header,{children:n.jsx(i,{})}),n.jsx(e.Card.Body,{children:n.jsx(t,{})}),n.jsx(e.Card.Footer,{children:n.jsx(r,{})})]}),n.jsxs(e.Card,{variant:"primary-dark",css:{width:"300px"},children:[n.jsx(e.Card.Header,{children:n.jsx(i,{})}),n.jsx(e.Card.Body,{children:n.jsx(t,{})}),n.jsx(e.Card.Footer,{children:n.jsx(r,{})})]}),n.jsxs(e.Card,{variant:"gray-light",css:{width:"300px"},children:[n.jsx(e.Card.Header,{children:n.jsx(i,{})}),n.jsx(e.Card.Body,{children:n.jsx(t,{})}),n.jsx(e.Card.Footer,{children:n.jsx(r,{})})]})]}),d=()=>n.jsxs("div",{style:j,children:[n.jsxs(e.Banner,{children:[n.jsx(e.Banner.Left,{children:n.jsx(o,{})}),n.jsx(e.Banner.Body,{align:"left",children:n.jsx(t,{})}),n.jsx(e.Banner.Right,{children:n.jsx(r,{})})]}),n.jsxs(e.Banner,{children:[n.jsx(e.Banner.Left,{children:n.jsx(o,{})}),n.jsx(e.Banner.Body,{align:"center",children:n.jsx(t,{})}),n.jsx(e.Banner.Right,{children:n.jsx(r,{})})]}),n.jsxs(e.Banner,{children:[n.jsx(e.Banner.Left,{children:n.jsx(o,{})}),n.jsx(e.Banner.Body,{align:"right",children:n.jsx(t,{})}),n.jsx(e.Banner.Right,{children:n.jsx(r,{})})]})]}),S={title:"Example/Announcement",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Variant"};d.__docgenInfo={description:"",methods:[],displayName:"Align"};var s,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div style={Style}>
    <Announcement.Banner>
      <Announcement.Banner.Left>
        <Left />
      </Announcement.Banner.Left>
      <Announcement.Banner.Body>
        <Body />
      </Announcement.Banner.Body>
      <Announcement.Banner.Right>
        <Right />
      </Announcement.Banner.Right>
    </Announcement.Banner>

    <Announcement.Banner variant='primary-dark'>
      <Announcement.Banner.Left>
        <Left />
      </Announcement.Banner.Left>
      <Announcement.Banner.Body>
        <Body />
      </Announcement.Banner.Body>
      <Announcement.Banner.Right>
        <Right />
      </Announcement.Banner.Right>
    </Announcement.Banner>

    <Announcement.Banner variant='gray-light'>
      <Announcement.Banner.Left>
        <Left />
      </Announcement.Banner.Left>
      <Announcement.Banner.Body>
        <Body />
      </Announcement.Banner.Body>
      <Announcement.Banner.Right>
        <Right />
      </Announcement.Banner.Right>
    </Announcement.Banner>

    <Announcement.Card css={{
    width: '300px'
  }}>
      <Announcement.Card.Header>
        <Header />
      </Announcement.Card.Header>
      <Announcement.Card.Body>
        <Body />
      </Announcement.Card.Body>
      <Announcement.Card.Footer>
        <Right />
      </Announcement.Card.Footer>
    </Announcement.Card>

    <Announcement.Card variant='primary-dark' css={{
    width: '300px'
  }}>
      <Announcement.Card.Header>
        <Header />
      </Announcement.Card.Header>
      <Announcement.Card.Body>
        <Body />
      </Announcement.Card.Body>
      <Announcement.Card.Footer>
        <Right />
      </Announcement.Card.Footer>
    </Announcement.Card>

    <Announcement.Card variant='gray-light' css={{
    width: '300px'
  }}>
      <Announcement.Card.Header>
        <Header />
      </Announcement.Card.Header>
      <Announcement.Card.Body>
        <Body />
      </Announcement.Card.Body>
      <Announcement.Card.Footer>
        <Right />
      </Announcement.Card.Footer>
    </Announcement.Card>
  </div>`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var B,h,l;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={Style}>
    <Announcement.Banner>
      <Announcement.Banner.Left>
        <Left />
      </Announcement.Banner.Left>
      <Announcement.Banner.Body align='left'>
        <Body />
      </Announcement.Banner.Body>
      <Announcement.Banner.Right>
        <Right />
      </Announcement.Banner.Right>
    </Announcement.Banner>

    <Announcement.Banner>
      <Announcement.Banner.Left>
        <Left />
      </Announcement.Banner.Left>
      <Announcement.Banner.Body align='center'>
        <Body />
      </Announcement.Banner.Body>
      <Announcement.Banner.Right>
        <Right />
      </Announcement.Banner.Right>
    </Announcement.Banner>

    <Announcement.Banner>
      <Announcement.Banner.Left>
        <Left />
      </Announcement.Banner.Left>
      <Announcement.Banner.Body align='right'>
        <Body />
      </Announcement.Banner.Body>
      <Announcement.Banner.Right>
        <Right />
      </Announcement.Banner.Right>
    </Announcement.Banner>
  </div>`,...(l=(h=d.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};const k=["Variant","Align"];export{d as Align,a as Variant,k as __namedExportsOrder,S as default};
