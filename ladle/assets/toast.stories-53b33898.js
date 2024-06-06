import{j as e}from"./jsx-runtime-ea7736fc.js";import{C as l}from"./cross-bdcb89a4.js";import{H as a}from"./heart-filled-5f2b210b.js";import{R as r}from"./index-6c164b11.js";import{l as t,m as F,n as K}from"./index-cdf7513e.js";import"./index-9178f86c.js";import"./index-0c922b64.js";import"./index-cc86efa4.js";import"./index-03cff320.js";import"./index-47a1c304.js";import"./index-ce1c8671.js";import"./index-0d53bb30.js";import"./index-3170d50c.js";import"./index-7972436d.js";import"./index-d697583f.js";import"./index-02337fb0.js";import"./index-7a7498f5.js";import"./index-e7f2b220.js";import"./index-33fba25f.js";import"./index-4cb193f3.js";import"./index-579e501f.js";import"./index-82dc4608.js";import"./index-14a5a860.js";import{S as n}from"./index-3e7fd8c3.js";import"./index-9b877fe0.js";import"./index-1fd2fc01.js";import"./index-58b33020.js";import"./index-3c6de7b1.js";import"./Viewer-a8f46180.js";import"./calendar-17db7acc.js";import"./NumberParser-bd499a26.js";import"./index-44f80ede.js";import"./index-9cc0ffcb.js";import"./index-489b6ecb.js";import"./index-f93f9dc9.js";import"./index-6f96fe02.js";import"./index-10d8d6ed.js";import"./index-77063761.js";import"./index-0ae06ec8.js";import"./index-9ee83bda.js";import"./index-1e91b611.js";import"./index-b6f73d5b.js";import"./index-b3d59218.js";import"./index-f318de67.js";import"./index-be599a31.js";import"./index-f484f2a1.js";import"./index-73b3188c.js";import"./index-8bd325fb.js";import"./index-584a999a.js";import"./index-252633e7.js";import"./index-27851459.js";import"./index-109ea52a.js";import"./index-5a173c15.js";import"./index-5e221ed0.js";import"./video-player-e278bccf.js";import"./useSnackbar-234ef792.js";import"./index-d488ea9b.js";import"./index-aea15489.js";import"./index-b8816cdb.js";import"./index-16d9e09a.js";import"./index-90af5112.js";import"./index-b1157fd5.js";import"./index-34b8f82d.js";import"./index-9fb2cabb.js";import"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./index-722c9b20.js";import"./Row-e65f206d.js";import"./index-1825d005.js";import"./index-0a0dc8f5.js";import"./index-9b621ca4.js";import"./index-52a97e3f.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-aff350d4.js";import"./index-14d7a7b1.js";import{B as o}from"./button-be34d763.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-c116e6b4.js";import"./date-picker-2b47ac6c.js";import"./index-4593f2b5.js";import"./dropdown-textfield-210a5270.js";import"./index-eb8c837f.js";import"./string-de12cf5f.js";import"./rating-ca365a65.js";import"./slide-action-b34e09b0.js";import"./useDrag-c728562f.js";import"./speed-dial-f74b5546.js";import"./floating-ui.react.esm-06842318.js";import"./index-318acb9e.js";import"./tooltip-trigger-04cfd43d.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./arrow-right-20c3256f.js";import"./layout-5fac5c12.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-0d3b18cd.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const h={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},d=()=>{const[s,i]=r.useState("right"),[c,p]=r.useState("top"),[m,u]=r.useState(!1);return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Default toast"}),e.jsxs(n.Select,{isRequired:!0,label:"Please select horizontal",placeholder:"Choose a horizontal",selectedKey:s,onSelectionChange:T=>i(T),children:[e.jsx(n.Item,{children:"Left"},"left"),e.jsx(n.Item,{children:"Center"},"center"),e.jsx(n.Item,{children:"Right"},"right")]}),e.jsxs(n.Select,{isRequired:!0,label:"Please select vertical",placeholder:"Choose a vertical",selectedKey:c,onSelectionChange:T=>p(T),children:[e.jsx(n.Item,{children:"Top"},"top"),e.jsx(n.Item,{children:"Center"},"center"),e.jsx(n.Item,{children:"Bottom"},"bottom")]}),e.jsx(o,{css:{width:"8rem"},onPress:()=>u(!0),children:"Open toast"}),e.jsxs(t,{isOpen:m,handleClose:()=>u(!1),anchorOrigin:{horizontal:s,vertical:c},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]}),e.jsx("div",{style:{height:"1500px"}})]})},x=()=>{const[s,i]=r.useState(!1),[c,p]=r.useState(!1),[m,u]=r.useState(!1),[T,C]=r.useState(!1);return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Informative: blue"}),e.jsx(o,{css:{width:"8rem"},onPress:()=>i(!0),children:"Open toast"}),e.jsxs(t,{isOpen:s,handleClose:()=>i(!1),color:"informative",anchorOrigin:{horizontal:"left",vertical:"top"},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]}),e.jsx("h3",{children:"Neutral: white"}),e.jsx(o,{css:{width:"8rem"},onPress:()=>p(!0),children:"Open toast"}),e.jsxs(t,{isOpen:c,handleClose:()=>p(!1),color:"neutral",anchorOrigin:{horizontal:"right",vertical:"top"},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]}),e.jsx("h3",{children:"Negative: red"}),e.jsx(o,{css:{width:"8rem"},onPress:()=>C(!0),children:"Open toast"}),e.jsxs(t,{isOpen:T,handleClose:()=>C(!1),color:"negative",anchorOrigin:{horizontal:"left",vertical:"bottom"},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]}),e.jsx("h3",{children:"Positive: green"}),e.jsx(o,{css:{width:"8rem"},onPress:()=>u(!0),children:"Open toast"}),e.jsxs(t,{isOpen:m,handleClose:()=>u(!1),color:"positive",anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]})]})},j=()=>{const[s,i]=r.useState(!1);return e.jsxs("div",{style:{...h},children:[e.jsx(o,{css:{width:"8rem"},onPress:()=>i(!0),children:"Open toast"}),e.jsxs(t,{withHeader:!0,isOpen:s,handleClose:()=>i(!1),color:"informative",anchorOrigin:{horizontal:"center",vertical:"center"},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]})]})},I=()=>{const[s,i]=r.useState(!1);return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Auto-close toast"}),e.jsx(o,{css:{width:"8rem"},onPress:()=>i(!0),children:"Open toast"}),e.jsxs(t,{isOpen:s,handleClose:()=>i(!1),autoClose:1e3,color:"informative",anchorOrigin:{horizontal:"right",vertical:"top"},children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]})]})},g=()=>{const[s,i]=r.useState(!1);return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Portals to body"}),e.jsx(o,{css:{width:"8rem"},onPress:()=>i(!0),children:"Open toast"}),e.jsxs(t,{isOpen:s,portalTo:document.body,handleClose:()=>i(!1),color:"informative",children:[e.jsx(t.Icon,{children:e.jsx(a,{})}),e.jsx(t.Title,{children:"My Title"}),e.jsx(t.Label,{children:"a few minutes ago"}),e.jsx(t.CloseIcon,{children:e.jsx(l,{})}),e.jsx(t.Message,{children:"Lorem ipsum dolor, sit amet consectetur."}),e.jsxs(t.Actions,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]})]})]})},q=()=>{const s=K();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"center",marginTop:16,marginBottom:16},children:[e.jsx(o,{css:{width:"fit-content"},onClick:()=>s.show({color:"informative",title:"Lorem ipsum dolor, sit amet consectetur",itemClassName:"test-tomato-bg"}),children:"Open toast"}),e.jsx(o,{css:{width:"fit-content"},onClick:()=>s.show({title:"Lorem ipsum dolor, sit amet consectetur",hasCloseIcon:!1,itemClassName:"test-aqua-bg"}),children:"Open toast without close button"})]})},V=()=>{const s=K();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"center"},children:[e.jsx(o,{css:{width:"fit-content"},onClick:()=>s.show({autoClose:!1,message:"Lorem ipsum dolor, sit amet consectetur.",icon:e.jsx(a,{}),title:"My Title",actions:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:"Take action"}),e.jsx(o,{children:"Take action"})]}),label:"a few minutes ago"}),children:"Open toast autoClose: false"}),e.jsx(o,{css:{width:"fit-content"},onClick:()=>s.clearAll(),children:"Clear all toasts"})]})},f=()=>{const[s,i]=r.useState("right"),[c,p]=r.useState("top");return e.jsxs("div",{style:{...h},children:[e.jsx("h3",{children:"Toast as a service"}),e.jsxs(n.Select,{isRequired:!0,label:"Please select horizontal",placeholder:"Choose a horizontal",selectedKey:s,onSelectionChange:m=>i(m),children:[e.jsx(n.Item,{children:"Left"},"left"),e.jsx(n.Item,{children:"Center"},"center"),e.jsx(n.Item,{children:"Right"},"right")]}),e.jsxs(n.Select,{isRequired:!0,label:"Please select vertical",placeholder:"Choose a vertical",selectedKey:c,onSelectionChange:m=>p(m),children:[e.jsx(n.Item,{children:"Top"},"top"),e.jsx(n.Item,{children:"Center"},"center"),e.jsx(n.Item,{children:"Bottom"},"bottom")]}),e.jsx(F,{anchorOrigin:{horizontal:s,vertical:c},children:e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(V,{})]})})]})},Ut={title:"Example/Toast ",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"}};d.__docgenInfo={description:"",methods:[],displayName:"Basic"};x.__docgenInfo={description:"",methods:[],displayName:"Colors"};j.__docgenInfo={description:"",methods:[],displayName:"WithHeader"};I.__docgenInfo={description:"",methods:[],displayName:"AutoClose"};g.__docgenInfo={description:"",methods:[],displayName:"Portal"};f.__docgenInfo={description:"",methods:[],displayName:"Multiple"};var O,v,y;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [horizontal, setHorizontal] = React.useState<'center' | 'left' | 'right'>('right');
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>('top');
  const [isDefaultOpen, setIsDefaultOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <h3>Default toast</h3>
      <Dropdown.Select isRequired label='Please select horizontal' placeholder='Choose a horizontal' selectedKey={horizontal} onSelectionChange={(k: Key) => setHorizontal((k as 'center' | 'left' | 'right'))}>
        <Dropdown.Item key='left'>Left</Dropdown.Item>
        <Dropdown.Item key='center'>Center</Dropdown.Item>
        <Dropdown.Item key='right'>Right</Dropdown.Item>
      </Dropdown.Select>
      <Dropdown.Select isRequired label='Please select vertical' placeholder='Choose a vertical' selectedKey={vertical} onSelectionChange={(k: Key) => setVertical((k as 'center' | 'top' | 'bottom'))}>
        <Dropdown.Item key='top'>Top</Dropdown.Item>
        <Dropdown.Item key='center'>Center</Dropdown.Item>
        <Dropdown.Item key='bottom'>Bottom</Dropdown.Item>
      </Dropdown.Select>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsDefaultOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isDefaultOpen} handleClose={() => setIsDefaultOpen(false)} anchorOrigin={{
      horizontal,
      vertical
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
      <div style={{
      height: '1500px'
    }}></div>
    </div>;
}`,...(y=(v=d.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var w,S,b;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const [isInformativeOpen, setIsInformativeOpen] = React.useState(false);
  const [isNeutralOpen, setIsNeutralOpen] = React.useState(false);
  const [isPositiveOpen, setIsPositiveOpen] = React.useState(false);
  const [isNegativeOpen, setIsNegativeOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <h3>Informative: blue</h3>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsInformativeOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isInformativeOpen} handleClose={() => setIsInformativeOpen(false)} color='informative' anchorOrigin={{
      horizontal: 'left',
      vertical: 'top'
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>

      <h3>Neutral: white</h3>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsNeutralOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isNeutralOpen} handleClose={() => setIsNeutralOpen(false)} color='neutral' anchorOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>

      <h3>Negative: red</h3>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsNegativeOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isNegativeOpen} handleClose={() => setIsNegativeOpen(false)} color='negative' anchorOrigin={{
      horizontal: 'left',
      vertical: 'bottom'
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>

      <h3>Positive: green</h3>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsPositiveOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isPositiveOpen} handleClose={() => setIsPositiveOpen(false)} color='positive' anchorOrigin={{
      horizontal: 'right',
      vertical: 'bottom'
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </div>;
}`,...(b=(S=x.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,B,L;j.parameters={...j.parameters,docs:{...(k=j.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsOpen(true)}>
        Open toast
      </Button>
      <Toast withHeader isOpen={isOpen} handleClose={() => setIsOpen(false)} color='informative' anchorOrigin={{
      horizontal: 'center',
      vertical: 'center'
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </div>;
}`,...(L=(B=j.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,D,M;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <h3>Auto-close toast</h3>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsAutoCloseOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isAutoCloseOpen} handleClose={() => setIsAutoCloseOpen(false)} autoClose={1000} color='informative' anchorOrigin={{
      horizontal: 'right',
      vertical: 'top'
    }}>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </div>;
}`,...(M=(D=I.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,z,R;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [isAutoCloseOpen, setIsAutoCloseOpen] = React.useState(false);
  return <div style={{
    ...style
  }}>
      <h3>Portals to body</h3>
      <Button css={{
      width: '8rem'
    }} onPress={() => setIsAutoCloseOpen(true)}>
        Open toast
      </Button>
      <Toast isOpen={isAutoCloseOpen} portalTo={document.body} handleClose={() => setIsAutoCloseOpen(false)} color='informative'>
        <Toast.Icon>
          <HeartFilled />
        </Toast.Icon>
        <Toast.Title>My Title</Toast.Title>
        <Toast.Label>a few minutes ago</Toast.Label>
        <Toast.CloseIcon>
          <Cross />
        </Toast.CloseIcon>
        <Toast.Message>Lorem ipsum dolor, sit amet consectetur.</Toast.Message>
        <Toast.Actions>
          <Button>Take action</Button>
          <Button>Take action</Button>
        </Toast.Actions>
      </Toast>
    </div>;
}`,...(R=(z=g.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var N,H,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const [horizontal, setHorizontal] = React.useState<'center' | 'left' | 'right'>('right');
  const [vertical, setVertical] = React.useState<'center' | 'top' | 'bottom'>('top');
  return <div style={{
    ...style
  }}>
      <h3>Toast as a service</h3>
      <Dropdown.Select isRequired label='Please select horizontal' placeholder='Choose a horizontal' selectedKey={horizontal} onSelectionChange={(k: Key) => setHorizontal((k as 'center' | 'left' | 'right'))}>
        <Dropdown.Item key='left'>Left</Dropdown.Item>
        <Dropdown.Item key='center'>Center</Dropdown.Item>
        <Dropdown.Item key='right'>Right</Dropdown.Item>
      </Dropdown.Select>
      <Dropdown.Select isRequired label='Please select vertical' placeholder='Choose a vertical' selectedKey={vertical} onSelectionChange={(k: Key) => setVertical((k as 'center' | 'top' | 'bottom'))}>
        <Dropdown.Item key='top'>Top</Dropdown.Item>
        <Dropdown.Item key='center'>Center</Dropdown.Item>
        <Dropdown.Item key='bottom'>Bottom</Dropdown.Item>
      </Dropdown.Select>
      <ToastContextProvider anchorOrigin={{
      horizontal,
      vertical
    }}>
        <>
          <SubService1 />
          <SubService2 />
        </>
      </ToastContextProvider>
    </div>;
}`,...(_=(H=f.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const Xt=["Basic","Colors","WithHeader","AutoClose","Portal","Multiple"];export{I as AutoClose,d as Basic,x as Colors,f as Multiple,g as Portal,j as WithHeader,Xt as __namedExportsOrder,Ut as default};
