import{j as t}from"./jsx-runtime-9ef10904.js";import{H as m}from"./heart-filled-5f2b210b.js";import{R as j,r as a}from"./index-6c164b11.js";import{S as e}from"./index-8dd82c88.js";import"./index-3e1c9234.js";import"./index-284aca9d.js";import"./index-fa7e7d30.js";import"./index-37c7bf77.js";import"./index-06aea52e.js";import"./index-bdc47b33.js";import"./index-26609149.js";import"./index-5b7974a3.js";import"./index-68dd90e7.js";import"./index-1c61ccc3.js";import"./index-be7e1eee.js";import"./index-30602da6.js";import{C as c}from"./index-3b7e403c.js";import"./index-8cf671da.js";import"./index-0f166032.js";import"./index-c5f5a66a.js";import"./index-f6675da2.js";import"./index-4419a936.js";import"./index-0e37f839.js";import"./index-29cce5d8.js";import"./index-ceba8d97.js";import"./index-1f855692.js";import"./index-a2441fec.js";import"./Viewer-2b773ead.js";import"./calendar-6bc86dce.js";import"./NumberParser-89118490.js";import"./index-946d64ba.js";import"./index-1dc17834.js";import"./index-3fddcbe4.js";import"./index-eca25368.js";import"./index-133908b4.js";import"./index-083267d0.js";import"./index-cbf6a047.js";import"./index-3385e30c.js";import"./index-6fc6b3a7.js";import"./index-e2c6e307.js";import"./index-855e3f50.js";import"./index-13f3b7d0.js";import"./index-268c0602.js";import"./index-31578372.js";import"./index-634fd9bf.js";import"./index-1e7f5058.js";import{R as n}from"./index-cb5ba4ca.js";import"./index-358939c8.js";import"./index-34328747.js";import"./index-c10b40de.js";import"./index-f58a03c4.js";import"./index-dc6539d5.js";import"./index-9cbb795d.js";import"./video-player-646b1ee5.js";import"./useSnackbar-8c77c764.js";import"./index-2237786e.js";import"./index-18dff04f.js";import"./index-9ba5e071.js";import"./index-ea2c6002.js";import"./index-cabc11e8.js";import"./index-2a6bad3f.js";import"./index-0052e280.js";import"./index-e71babd2.js";import"./index-0844b8e9.js";import"./useCurrentTheme-3076cf6b.js";import"./index-96253ae6.js";import"./index-0fcfb6a9.js";import"./index-6b8d8845.js";import"./index-21379b2e.js";import"./index-89d309b6.js";import"./index-595b2ef9.js";import"./Row-cb35b7d4.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./string-b39bd50e.js";import"./index-21ddf7c2.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-623989eb.js";import"./button-03dcac20.js";import"./date-picker-091dbc07.js";import"./dropdown-textfield-2b001d61.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-e2bde112.js";import"./slide-action-408e0278.js";import"./speed-dial-54aee84a.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-5e726036.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-71be561b.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-a18291c8.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const o=()=>{const[l,g]=j.useState("up"),[r,s]=a.useState(!1),[p,v]=a.useState(!0),[d,f]=a.useState(!1),S=()=>{s(!r)};return t.jsxs("div",{style:{padding:"10px"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem",boxSizing:"border-box"},children:[t.jsx("div",{children:t.jsxs(n.Group,{value:l,onChange:i=>{g(i)},css:{flexDirection:"row"},children:[t.jsx(n,{description:"Up",value:"up",id:"item1"}),t.jsx(n,{description:"Down",value:"down"}),t.jsx(n,{description:"Left",value:"left"}),t.jsx(n,{description:"Right",value:"right"})]})}),t.jsxs("div",{children:[t.jsx(c,{isSelected:p,onChange:i=>{v(i)},children:"Use hover event"}),t.jsx(c,{isSelected:d,onChange:i=>{f(i)},children:"Float on bottom right"})]})]}),t.jsx("div",{style:{position:"relative",width:"100%",height:"400px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed #ccc"},children:t.jsx(e,{showing:r,actions:t.jsxs(e.Actions,{position:l,children:[t.jsx(e.Button,{children:t.jsx(m,{})}),t.jsx(e.Button,{children:t.jsx(m,{})})]}),style:d&&{position:"absolute",right:"20px",bottom:"20px"},onMouseLeave:()=>{p&&s(!1)},children:t.jsx(e.Button,{onClick:()=>S(),onMouseEnter:()=>{p&&s(!0)},children:t.jsx(m,{style:{...r&&{transform:"rotate(45deg)"},transition:"all 0.2s"}})})})})]})},Co={title:"Example/Speed Dial 2",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Positions"};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [position, setPosition] = React.useState<'up' | 'down' | 'left' | 'right'>('up');
  const [showing, setShowing] = useState(false);
  const [useHover, setUseHover] = useState(true);
  const [floatPosition, setFloatPosition] = useState(false);
  const toggleSpeedDial = () => {
    setShowing(!showing);
  };
  return <div style={{
    padding: '10px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      padding: '3rem',
      boxSizing: 'border-box'
    }}>
        <div>
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
        <div>
          <Checkbox isSelected={useHover} onChange={event => {
          setUseHover(event);
        }}>
            Use hover event
          </Checkbox>
          <Checkbox isSelected={floatPosition} onChange={event => {
          setFloatPosition(event);
        }}>
            Float on bottom right
          </Checkbox>
        </div>
      </div>
      <div style={{
      position: 'relative',
      width: '100%',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px dashed #ccc'
    }}>
        <SpeedDial2 showing={showing} actions={<SpeedDial2.Actions position={position}>
              <SpeedDial2.Button>
                <HeartFilled />
              </SpeedDial2.Button>
              <SpeedDial2.Button>
                <HeartFilled />
              </SpeedDial2.Button>
            </SpeedDial2.Actions>} style={floatPosition && {
        position: 'absolute',
        right: '20px',
        bottom: '20px'
      }} onMouseLeave={() => {
        if (!useHover) {
          return;
        }
        setShowing(false);
      }}>
          <SpeedDial2.Button onClick={() => toggleSpeedDial()} onMouseEnter={() => {
          if (!useHover) {
            return;
          }
          setShowing(true);
        }}>
            <HeartFilled style={{
            ...(showing && {
              transform: 'rotate(45deg)'
            }),
            ...{
              transition: 'all 0.2s'
            }
          }} />
          </SpeedDial2.Button>
        </SpeedDial2>
      </div>
    </div>;
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ro=["Positions"];export{o as Positions,Ro as __namedExportsOrder,Co as default};
