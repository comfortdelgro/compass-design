import{j as e}from"./jsx-runtime-ea7736fc.js";import{r}from"./index-6c164b11.js";import{P as u}from"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./objectToCSS-aff350d4.js";const h=()=>e.jsx("div",{className:"popover-content",style:{background:"#ffffff",border:"1px solid #b63f3f",borderRadius:"5px",width:"100px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},children:"Content"}),x=["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],n=()=>{const[a,o]=r.useState(!1),[c,p]=r.useState("bottom"),[i,m]=r.useState(10),f=()=>{o(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"1rem"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[e.jsx("label",{style:{fontSize:"0.85em",color:"red"},htmlFor:"directionSelect",children:"Direction"}),e.jsx("select",{id:"directionSelect",onChange:t=>{p(t.target.value)},style:{width:"6rem",height:"1.8rem"},children:x.map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[e.jsx("label",{style:{fontSize:"0.85em",color:"red"},htmlFor:"offsetInput",children:"Offset"}),e.jsx("input",{id:"offsetInput",style:{width:"6rem",height:"1.8rem"},type:"number",value:i,onChange:t=>m(Number(t.target.value))})]})]}),e.jsx("div",{style:{width:"50rem",height:"30rem",border:"1px solid black",borderRadius:"5px",padding:"10rem 10rem",marginTop:"0.5rem"},children:e.jsx(u,{isOpen:a,anchor:e.jsx("button",{style:{width:"5rem",height:"3rem",borderRadius:"0.5rem"},onClick:f,children:"Click me!"}),offset:i,direction:c,onClose:()=>{o(!1)},children:e.jsx(h,{})})})]})},S={title:"Example/Popover",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Controlled"};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [currentDirection, setCurrentDirection] = useState<PopoverDirection>('bottom');
  const [currentOffset, setCurrentOffset] = useState(10);
  const openPopover1 = () => {
    setIsOpen1(true);
  };
  return <>
      <div style={{
      display: 'flex',
      gap: '1rem'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem'
      }}>
          <label style={{
          fontSize: '0.85em',
          color: 'red'
        }} htmlFor='directionSelect'>
            Direction
          </label>
          <select id='directionSelect' onChange={e => {
          setCurrentDirection((e.target.value as PopoverDirection));
        }} style={{
          width: '6rem',
          height: '1.8rem'
        }}>
            {directions.map(direction => {
            return <option key={direction} value={direction}>
                  {direction}
                </option>;
          })}
          </select>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.2rem'
      }}>
          <label style={{
          fontSize: '0.85em',
          color: 'red'
        }} htmlFor='offsetInput'>
            Offset
          </label>
          <input id='offsetInput' style={{
          width: '6rem',
          height: '1.8rem'
        }} type='number' value={currentOffset} onChange={e => setCurrentOffset(Number(e.target.value))} />
        </div>
      </div>

      <div style={{
      width: '50rem',
      height: '30rem',
      border: '1px solid black',
      borderRadius: '5px',
      padding: '10rem 10rem',
      marginTop: '0.5rem'
    }}>
        <Popover isOpen={isOpen1} anchor={<button style={{
        width: '5rem',
        height: '3rem',
        borderRadius: '0.5rem'
      }} onClick={openPopover1}>
              Click me!
            </button>} offset={currentOffset} direction={currentDirection} onClose={() => {
        setIsOpen1(false);
      }}>
          <SamplePopover />
        </Popover>
      </div>
    </>;
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const D=["Controlled"];export{n as Controlled,D as __namedExportsOrder,S as default};
