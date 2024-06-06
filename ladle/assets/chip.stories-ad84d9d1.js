import{j as e}from"./jsx-runtime-ea7736fc.js";import{C as n}from"./index-33fba25f.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const r={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},i=()=>e.jsxs("div",{style:{...r},children:[e.jsx("h3",{children:"Basic Chip"}),e.jsx(n,{children:"Basic Chip"})]}),t=()=>e.jsxs("div",{style:{...r},children:[e.jsx("h3",{children:"Close button"}),e.jsx(n,{hasCloseButton:!0,onClick:()=>{console.log("Chip click...")},onCloseClick:()=>{console.log("Close button click")},children:"Close button"}),e.jsx("h3",{children:"Errored Chip"}),e.jsx(n,{hasCloseButton:!0,isErrored:!0,children:"Errored Chip"}),e.jsx("h3",{children:"Large content"}),e.jsx(n,{hasCloseButton:!0,css:{maxWidth:"350px"},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum."})]}),s=()=>e.jsxs("div",{style:{...r},children:[e.jsx("h3",{children:"Custom Styling"}),e.jsx(n,{hasCloseButton:!0,css:{border:"1px solid purple","&:hover":{color:"$success"},"& > div:first-child":{display:"flex",alignItems:"center",justifyContent:"center","& svg":{height:"2rem",width:"2rem"}}},children:"Close button"})]}),v={title:"Example/Chip",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.__docgenInfo={description:"",methods:[],displayName:"CustomStyling"};var a,o,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Basic Chip</h3>
      <Chip>Basic Chip</Chip>
    </div>;
}`,...(u=(o=i.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var l,c,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Close button</h3>
      <Chip hasCloseButton onClick={() => {
      console.log('Chip click...');
    }} onCloseClick={() => {
      console.log('Close button click');
    }}>
        Close button
      </Chip>
      <h3>Errored Chip</h3>
      <Chip hasCloseButton isErrored>
        Errored Chip
      </Chip>
      <h3>Large content</h3>
      <Chip hasCloseButton css={{
      maxWidth: '350px'
    }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis
        modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
        error harum maxime adipisci amet laborum.
      </Chip>
    </div>;
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Custom Styling</h3>
      <Chip hasCloseButton css={{
      border: '1px solid purple',
      '&:hover': {
        color: '$success'
      },
      '& > div:first-child': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
          height: '2rem',
          width: '2rem'
        }
      }
    }}>
        Close button
      </Chip>
    </div>;
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const y=["Basic","Variants","CustomStyling"];export{i as Basic,s as CustomStyling,t as Variants,y as __namedExportsOrder,v as default};
