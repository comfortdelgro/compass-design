import{j as t}from"./jsx-runtime-ea7736fc.js";import{H as m}from"./heart-filled-5f2b210b.js";import{R as j,r as a}from"./index-6c164b11.js";import{S as e}from"./index-7d873515.js";import"./index-ef59e57a.js";import"./index-42ac8d43.js";import"./index-c4f93812.js";import"./index-3ab66ea1.js";import"./index-ba9672c4.js";import"./index-36749e01.js";import"./index-1481820f.js";import"./index-785af938.js";import"./index-c28b9cd4.js";import"./index-01d394d9.js";import"./index-b844ebee.js";import"./index-05878d10.js";import{C as c}from"./index-db162ed9.js";import"./index-4f1d1dd5.js";import"./index-a62a93be.js";import"./index-00c80c60.js";import"./index-0c0b2fdc.js";import"./index-c444fdb6.js";import"./index-d8a01d3f.js";import"./index-1a491ca7.js";import"./index-25cc2dc8.js";import"./index-3811d87e.js";import"./index-3ff3ef4a.js";import"./Viewer-de9ece4e.js";import"./calendar-b4f421e9.js";import"./NumberParser-89118490.js";import"./index-899c47f1.js";import"./index-febbedd6.js";import"./index-dbd28b7b.js";import"./index-a749d917.js";import"./index-02da530b.js";import"./index-a1733458.js";import"./index-e5c7f637.js";import"./index-3095c07e.js";import"./index-47ed11ed.js";import"./index-1e91b611.js";import"./index-87eb7dd0.js";import"./index-95d58e40.js";import"./index-53a599f3.js";import"./index-a4cde574.js";import"./index-0981a571.js";import"./index-b38ed74c.js";import{R as n}from"./index-014daaba.js";import"./index-fd3ebdd5.js";import"./index-fb6db828.js";import"./index-56e6e3a9.js";import"./index-bf22c748.js";import"./index-23ef5d9f.js";import"./index-3a481d55.js";import"./video-player-28059ce7.js";import"./useSnackbar-4f49a84b.js";import"./index-4fda0bf4.js";import"./index-8adbe5ee.js";import"./index-3d780d5e.js";import"./index-8c30b973.js";import"./index-3fe0789f.js";import"./index-b2163232.js";import"./index-7a07e922.js";import"./index-b2c9f1c0.js";import"./index-2802fc62.js";import"./useCurrentTheme-474309da.js";import"./index-8cd84d59.js";import"./Row-74a318ea.js";import"./index-feb29144.js";import"./index-0a0dc8f5.js";import"./index-97062572.js";import"./index-de2e4c53.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./string-cf4adbb3.js";import"./index-4ba38acb.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-fa787fee.js";import"./button-8faa8e19.js";import"./date-picker-edc34dcd.js";import"./dropdown-textfield-5e606f52.js";import"./index-eb8c837f.js";import"./rating-d8b894af.js";import"./slide-action-f7eaf4f1.js";import"./speed-dial-0ea5b6b9.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-b2a8cea5.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./layout-9ff37ead.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-f28bb353.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const o=()=>{const[l,g]=j.useState("up"),[r,s]=a.useState(!1),[p,v]=a.useState(!0),[d,f]=a.useState(!1),S=()=>{s(!r)};return t.jsxs("div",{style:{padding:"10px"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem",boxSizing:"border-box"},children:[t.jsx("div",{children:t.jsxs(n.Group,{value:l,onChange:i=>{g(i)},css:{flexDirection:"row"},children:[t.jsx(n,{description:"Up",value:"up",id:"item1"}),t.jsx(n,{description:"Down",value:"down"}),t.jsx(n,{description:"Left",value:"left"}),t.jsx(n,{description:"Right",value:"right"})]})}),t.jsxs("div",{children:[t.jsx(c,{isSelected:p,onChange:i=>{v(i)},children:"Use hover event"}),t.jsx(c,{isSelected:d,onChange:i=>{f(i)},children:"Float on bottom right"})]})]}),t.jsx("div",{style:{position:"relative",width:"100%",height:"400px",display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed #ccc"},children:t.jsx(e,{showing:r,actions:t.jsxs(e.Actions,{position:l,children:[t.jsx(e.Button,{children:t.jsx(m,{})}),t.jsx(e.Button,{children:t.jsx(m,{})})]}),style:d&&{position:"absolute",right:"20px",bottom:"20px"},onMouseLeave:()=>{p&&s(!1)},children:t.jsx(e.Button,{onClick:()=>S(),onMouseEnter:()=>{p&&s(!0)},children:t.jsx(m,{style:{...r&&{transform:"rotate(45deg)"},transition:"all 0.2s"}})})})})]})},bo={title:"Example/Speed Dial 2",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Positions"};var u,h,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Co=["Positions"];export{o as Positions,Co as __namedExportsOrder,bo as default};
