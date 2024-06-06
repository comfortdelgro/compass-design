import{j as e}from"./jsx-runtime-ea7736fc.js";import{B as o}from"./index-0d53bb30.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const n=()=>e.jsxs("div",{children:[e.jsxs("section",{children:[e.jsx("h3",{children:"'as' prop"}),"The 'as' prop refers to the HTML element that the Box component should render as. By default, the Box component will render as a div element, but if you pass a different value to the as prop, it will render as that element instead."]}),e.jsx("h3",{children:"Box as 'div' Element - default option"}),e.jsx(o,{style:{backgroundColor:"red",width:"8rem",textAlign:"center"},children:"My div"}),e.jsx("h3",{children:"Box as 'h2' Element"}),e.jsx(o,{as:"h2",color:"red",children:"My 'div' box"})]}),t=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"To style the Box component, you can use both 'css' and 'style' props."}),e.jsx("h3",{children:"1. Styling with 'css' prop, giving you much more power than the regular 'style' prop. But it is suitable for client side rendering only."}),e.jsx(o,{css:{backgroundColor:"grey",width:"8rem",textAlign:"center","& p":{color:"white"}},children:e.jsx("p",{children:"My box"})}),e.jsx("h3",{children:"1. Styling with 'style' prop"}),e.jsx(o,{style:{backgroundColor:"grey",width:"8rem",textAlign:"center",color:"red"},children:e.jsx("p",{children:"My box"})})]}),u={title:"Example/Box",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"ElementMapping"};t.__docgenInfo={description:"",methods:[],displayName:"DynamicStyling"};var r,s,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  return <div>
      <section>
        <h3>'as' prop</h3>
        The 'as' prop refers to the HTML element that the Box component should
        render as. By default, the Box component will render as a div element,
        but if you pass a different value to the as prop, it will render as that
        element instead.
      </section>
      <h3>Box as 'div' Element - default option</h3>
      <Box style={{
      backgroundColor: 'red',
      width: '8rem',
      textAlign: 'center'
    }}>
        My div
      </Box>
      <h3>Box as 'h2' Element</h3>
      <Box as='h2' color='red'>
        My 'div' box
      </Box>
    </div>;
}`,...(i=(s=n.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,a,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div>
      <h3>
        To style the Box component, you can use both 'css' and 'style' props.
      </h3>
      <h3>
        1. Styling with 'css' prop, giving you much more power than the regular
        'style' prop. But it is suitable for client side rendering only.
      </h3>
      <Box css={{
      backgroundColor: 'grey',
      width: '8rem',
      textAlign: 'center',
      '& p': {
        color: 'white'
      }
    }}>
        <p>My box</p>
      </Box>
      <h3>1. Styling with 'style' prop</h3>
      <Box style={{
      backgroundColor: 'grey',
      width: '8rem',
      textAlign: 'center',
      color: 'red'
    }}>
        <p>My box</p>
      </Box>
    </div>;
}`,...(d=(a=t.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const y=["ElementMapping","DynamicStyling"];export{t as DynamicStyling,n as ElementMapping,y as __namedExportsOrder,u as default};
