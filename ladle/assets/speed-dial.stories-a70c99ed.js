import{j as i}from"./jsx-runtime-ea7736fc.js";import{R as c}from"./index-6c164b11.js";import{R as t}from"./index-8bd325fb.js";import{S as d}from"./speed-dial-f74b5546.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_equalByTag-6cd86198.js";import"./useKeyboardNavigation-819d3b4a.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";const l={display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},m=[{name:"Action 1",icon:"+",onClick:()=>console.log("Action 1 clicked")},{name:"Action 2",icon:"-",onClick:()=>console.log("Action 2 clicked")}],o=()=>{const[e,p]=c.useState("up");return i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{...l},children:i.jsxs(t.Group,{value:e,onChange:a=>{p(a)},css:{flexDirection:"row"},children:[i.jsx(t,{description:"Up",value:"up",id:"item1"}),i.jsx(t,{description:"Down",value:"down"}),i.jsx(t,{description:"Left",value:"left"}),i.jsx(t,{description:"Right",value:"right"})]})}),i.jsxs("div",{style:{position:"relative",width:"600px",height:"400px"},children:[i.jsx("br",{}),i.jsx(d,{actions:m,position:e})]})]})},_={title:"Example/Speed Dial",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Positions"};var n,s,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [position, setPosition] = React.useState<'up' | 'down' | 'left' | 'right'>('up');
  return <>
      <div style={{
      ...style
    }}>
        <Radio.Group value={position} onChange={position => {
        setPosition((position as 'up' | 'down' | 'left' | 'right'));
      }} css={{
        flexDirection: 'row'
      }}>
          <Radio description='Up' value='up' id='item1' />
          <Radio description='Down' value='down' />
          <Radio description='Left' value='left' />
          <Radio description='Right' value='right' />
        </Radio.Group>
      </div>
      <div style={{
      position: 'relative',
      width: '600px',
      height: '400px'
    }}>
        <br />
        {/* Render other content */}
        {/* Render the SpeedDial component with the actions prop */}
        <SpeedDial actions={actions} position={position} />
      </div>
    </>;
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const E=["Positions"];export{o as Positions,E as __namedExportsOrder,_ as default};
