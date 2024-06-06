import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as o}from"./index-6c164b11.js";import"./index-7972436d.js";import{T as u,a as d}from"./tooltip-trigger-04cfd43d.js";import{B as c}from"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const a=()=>{const[i,s]=o.useState(!1),[n,t]=o.useState(!1);return e.jsxs("div",{style:{marginLeft:"1.5rem"},children:[e.jsxs("h3",{children:["Tooltip State: ",i?"opened":"closed"]}),e.jsxs(u,{isOpen:i,onOpenChange:r=>{s(r)},children:[e.jsx(c,{children:"Trigger"}),e.jsx(d,{title:"Title",dismissible:!0,css:{backgroundColor:"#0142AF"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam ullam amet est rerum in enim doloribus laborum beatae veniam corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam. Tempora, sit?"})]}),e.jsxs("h3",{children:["Simple Tooltip State: ",n?"opened":"closed"]}),e.jsxs(u,{isOpen:n,onOpenChange:r=>{t(r)},children:[e.jsx(c,{children:"Trigger"}),e.jsx(d,{children:"This is simple tooltip"})]})]})},l=()=>{const i=["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],[s,n]=o.useState("bottom");return e.jsxs("div",{style:{marginLeft:"1.5rem"},children:[e.jsx("h3",{children:"Select direction for testing"}),e.jsx("select",{onChange:t=>{n(t.target.value)},children:i.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsx("div",{style:{height:"50%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(u,{placement:s,isOpen:!0,children:[e.jsx(c,{children:"Bottom"}),e.jsx(d,{title:"Title",dismissible:!0,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam ullam amet est rerum in enim doloribus laborum beatae veniam corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam. Tempora, sit?"})]})})]})},m=()=>{const[i,s]=o.useState(0),[n,t]=o.useState(0);return e.jsxs("div",{style:{marginLeft:"1.5rem"},children:[e.jsx("h3",{children:"Offset"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"200px",gap:"12px",marginBottom:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{htmlFor:"cross-axis",children:"Cross Axis"}),e.jsx("input",{id:"cross-axis",type:"number",placeholder:"Cross Axis",defaultValue:0,onChange:r=>{s(parseInt(r.target.value))}})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{htmlFor:"main-axis",children:"Main Axis"}),e.jsx("input",{id:"main-axis",type:"number",placeholder:"Main Axis",defaultValue:0,onChange:r=>{t(parseInt(r.target.value))}})]})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsxs(u,{offset:{crossAxis:i,mainAxis:n},isOpen:!0,children:[e.jsx(c,{children:"Trigger"}),e.jsx(d,{title:"Title",dismissible:!0,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam ullam amet est rerum in enim doloribus laborum beatae veniam corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam. Tempora, sit?"})]})})]})},p=()=>{const[i,s]=o.useState(0);return e.jsxs("div",{style:{marginLeft:"1.5rem"},children:[e.jsx("h3",{children:"Delay"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",width:"200px",gap:"12px",marginBottom:"24px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("label",{htmlFor:"delay-time",children:"Delay Time (Ms)"}),e.jsx("input",{id:"delay-time",type:"number",placeholder:"Cross Axis",defaultValue:0,onChange:n=>{s(parseInt(n.target.value))}})]})}),e.jsxs(u,{delay:i,children:[e.jsx(c,{children:"Trigger"}),e.jsx(d,{title:"Title",dismissible:!0,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quam ullam amet est rerum in enim doloribus laborum beatae veniam corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam. Tempora, sit?"})]})]})},V={title:"Example/Tooltip ",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};l.__docgenInfo={description:"",methods:[],displayName:"Placements"};m.__docgenInfo={description:"",methods:[],displayName:"Offset"};p.__docgenInfo={description:"",methods:[],displayName:"Delay"};var g,x,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSimple, setIsOpenSimple] = useState(false);
  return <div style={{
    marginLeft: '1.5rem'
  }}>
      <h3>Tooltip State: {isOpen ? 'opened' : 'closed'}</h3>
      <TooltipTrigger isOpen={isOpen} onOpenChange={isOpen => {
      setIsOpen(isOpen);
    }}>
        <Button>Trigger</Button>
        <Tooltip title='Title' dismissible css={{
        backgroundColor: '#0142AF'
      }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quam ullam amet est rerum in enim doloribus laborum beatae veniam
          corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
          Tempora, sit?
        </Tooltip>
      </TooltipTrigger>

      <h3>Simple Tooltip State: {isOpenSimple ? 'opened' : 'closed'}</h3>
      <TooltipTrigger isOpen={isOpenSimple} onOpenChange={isOpenSimple => {
      setIsOpenSimple(isOpenSimple);
    }}>
        <Button>Trigger</Button>
        <Tooltip>This is simple tooltip</Tooltip>
      </TooltipTrigger>
    </div>;
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const placements: Placement[] = ['bottom', 'bottom-end', 'bottom-start', 'left', 'left-end', 'left-start', 'right', 'right-end', 'right-start', 'top', 'top-end', 'top-start'];
  const [currentPlacement, setCurrentPlacement] = useState<Placement>('bottom');
  return <div style={{
    marginLeft: '1.5rem'
  }}>
      <h3>Select direction for testing</h3>
      <select onChange={e => {
      setCurrentPlacement((e.target.value as Placement));
    }}>
        {placements.map(placement => {
        return <option key={placement} value={placement}>
              {placement}
            </option>;
      })}
      </select>
      <div style={{
      height: '50%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <TooltipTrigger placement={currentPlacement} isOpen={true}>
          <Button>Bottom</Button>
          <Tooltip title='Title' dismissible>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quam ullam amet est rerum in enim doloribus laborum beatae veniam
            corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
            Tempora, sit?
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>;
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var y,v,j;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [crossAxis, setCrossAxis] = useState(0);
  const [mainAxis, setMainAxis] = useState(0);
  return <div style={{
    marginLeft: '1.5rem'
  }}>
      <h3>Offset</h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '200px',
      gap: '12px',
      marginBottom: '24px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <label htmlFor='cross-axis'>Cross Axis</label>
          <input id='cross-axis' type='number' placeholder='Cross Axis' defaultValue={0} onChange={e => {
          setCrossAxis(parseInt(e.target.value));
        }}></input>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <label htmlFor='main-axis'>Main Axis</label>
          <input id='main-axis' type='number' placeholder='Main Axis' defaultValue={0} onChange={e => {
          setMainAxis(parseInt(e.target.value));
        }}></input>
        </div>
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
        <TooltipTrigger offset={{
        crossAxis: crossAxis,
        mainAxis: mainAxis
      }} isOpen={true}>
          <Button>Trigger</Button>
          <Tooltip title='Title' dismissible>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quam ullam amet est rerum in enim doloribus laborum beatae veniam
            corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
            Tempora, sit?
          </Tooltip>
        </TooltipTrigger>
      </div>
    </div>;
}`,...(j=(v=m.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var S,O,C;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const [delayTime, setDelayTime] = useState(0);
  return <div style={{
    marginLeft: '1.5rem'
  }}>
      <h3>Delay</h3>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '200px',
      gap: '12px',
      marginBottom: '24px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <label htmlFor='delay-time'>Delay Time (Ms)</label>
          <input id='delay-time' type='number' placeholder='Cross Axis' defaultValue={0} onChange={e => {
          setDelayTime(parseInt(e.target.value));
        }}></input>
        </div>
      </div>
      <TooltipTrigger delay={delayTime}>
        <Button>Trigger</Button>
        <Tooltip title='Title' dismissible>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
          quam ullam amet est rerum in enim doloribus laborum beatae veniam
          corrupti blanditiis, neque fuga, ipsam ut consequuntur laboriosam.
          Tempora, sit?
        </Tooltip>
      </TooltipTrigger>
    </div>;
}`,...(C=(O=p.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};const E=["Controlled","Placements","Offset","Delay"];export{a as Controlled,p as Delay,m as Offset,l as Placements,E as __namedExportsOrder,V as default};
