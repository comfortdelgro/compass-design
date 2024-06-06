import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as d}from"./heart-filled-5f2b210b.js";import{a as s,S as i}from"./index-aea15489.js";import"./index-6c164b11.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const t=()=>e.jsxs("div",{style:{padding:"20px",background:"#f2f2f2",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:Object.keys(s).map(n=>e.jsx(i,{type:"online",size:n}))}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:Object.keys(s).map(n=>e.jsx(i,{type:"offline",size:n}))}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:Object.keys(s).map(n=>e.jsx(i,{type:"verified",size:n}))}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:Object.keys(s).map(n=>e.jsx(i,{type:"zig",size:n}))}),e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:Object.keys(s).map((n,p)=>e.jsx(i,{type:"icon",icon:e.jsx("div",{style:{width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"#6554C0",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",fontSize:6+p*2+"px"},children:e.jsx(d,{})}),size:n}))})]}),u={title:"Example/Status",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};var a,r,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`() => <div style={{
  padding: '20px',
  background: '#f2f2f2',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
}}>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      {Object.keys(STATUS_SIZE_MAP).map(size => {
      return <Status type='online' size={(size as StatusSize)} />;
    })}
    </div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      {Object.keys(STATUS_SIZE_MAP).map(size => {
      return <Status type='offline' size={(size as StatusSize)} />;
    })}
    </div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      {Object.keys(STATUS_SIZE_MAP).map(size => {
      return <Status type='verified' size={(size as StatusSize)} />;
    })}
    </div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      {Object.keys(STATUS_SIZE_MAP).map(size => {
      return <Status type='zig' size={(size as StatusSize)} />;
    })}
    </div>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      {Object.keys(STATUS_SIZE_MAP).map((size, index) => {
      return <Status type='icon' icon={<div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#6554C0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 6 + index * 2 + 'px'
      }}>
                <HeartFilled />
              </div>} size={(size as StatusSize)} />;
    })}
    </div>
  </div>`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const S=["Variants"];export{t as Variants,S as __namedExportsOrder,u as default};
