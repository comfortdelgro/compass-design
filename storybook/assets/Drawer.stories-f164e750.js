import{j as e}from"./jsx-runtime-9ef10904.js";import{r as n}from"./index-6c164b11.js";import{N as r}from"./index-743890f1.js";import"./index-f0ea8199.js";import{B as c}from"./button-a57955c5.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";const R="_drawerStories_nnyr4_1",W="_description_nnyr4_13",P="_container_nnyr4_18",L="_drawerExample_nnyr4_30",M="_previewCode_nnyr4_48",u={drawerStories:R,description:W,container:P,drawerExample:L,previewCode:M};function p(){const[t,a]=n.useState(!1),[l,s]=n.useState(0),d=n.useCallback(g=>{s(g.target.scrollTop)},[]),o=n.useCallback(()=>{a(!1)},[]),i=n.useCallback(()=>{a(!0)},[]);return e.jsx("div",{className:u.drawerStories,style:{maxWidth:"680px",margin:"0 auto"},children:e.jsxs("div",{style:{position:"relative",overflow:"auto",display:"flex",flexDirection:"column",height:"600px"},children:[e.jsx("h4",{children:"Drawer"}),e.jsxs("p",{children:["Scrolled: ",l]}),e.jsx(r,{expanded:t,fullscreen:!1,header:e.jsx(r.Header,{onClick:()=>a(!t),useDrag:!0}),drawerScroll:d,onCollapsed:o,onExpanded:i,style:{flex:"1",maxHeight:"500px",border:"1px solid rgba(0,0,0,0.1)"},children:e.jsx("div",{style:{height:"800px",padding:"0 16px"},children:"Drawer content"})})]})})}function x(){const[t,a]=n.useState(!1),[l,s]=n.useState(0),d=n.useCallback(g=>{s(g.target.scrollTop)},[]),o=n.useCallback(()=>{a(!1)},[]),i=n.useCallback(()=>{a(!0)},[]);return e.jsxs("div",{className:u.drawerStories,style:{overflow:"auto",display:"flex",flexDirection:"column",height:"600px"},children:[e.jsx("h4",{children:"Drawer"}),e.jsxs("p",{children:["Scrolled: ",l]}),e.jsx(r,{expanded:t,header:e.jsx(r.Header,{onClick:()=>a(!t),useDrag:!0}),drawerScroll:d,onCollapsed:o,onExpanded:i,style:{flex:"1"},children:e.jsx("div",{style:{height:"800px",padding:"0 16px"},children:"Drawer content"})})]})}function h(){const[t,a]=n.useState(!1),[l,s]=n.useState(0),d=n.useCallback(()=>{a(!1)},[]),o=n.useCallback(()=>{a(!0)},[]);return e.jsx("div",{className:u.drawerStories,style:{padding:"20px",maxWidth:"680px",margin:"0 auto"},children:e.jsx("div",{style:{position:"relative",overflow:"auto",display:"flex",flexDirection:"column",height:"600px"},children:e.jsx(r,{expanded:t,fullscreen:!1,fixedContent:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("div",{children:"This content is under the drawer so that you still can interact with it."}),e.jsx("p",{children:l}),e.jsx("p",{children:e.jsx(c,{onClick:()=>{s(l+1)},variant:"secondary",children:"Count"})})]}),onCollapsed:d,onExpanded:o,style:{flex:"1",border:"1px solid rgba(0,0,0,0.1)"},children:e.jsxs("div",{style:{height:"800px",padding:"16px"},children:[e.jsx("p",{children:"Drawer content"}),e.jsx(c,{onClick:()=>a(!t),children:t?"Collapse":"Expand"})]})})})})}function f(){const[t,a]=n.useState(!1),[l,s]=n.useState(0),d=n.useCallback(()=>{a(!1)},[]),o=n.useCallback(()=>{a(!0)},[]);return e.jsx("div",{className:u.drawerStories,style:{overflow:"auto",display:"flex",flexDirection:"column",height:"600px"},children:e.jsx(r,{expanded:t,header:e.jsx(r.Header,{onClick:()=>a(!t),useDrag:!0}),fixedContent:e.jsxs("div",{style:{width:"100%",height:"100%",padding:"16px"},children:[e.jsx("div",{children:"This content is under the drawer so that you still can interact with it."}),e.jsx("p",{children:l}),e.jsx("p",{children:e.jsx(c,{onClick:()=>{s(l+1)},children:"Count"})})]}),onCollapsed:d,onExpanded:o,style:{flex:"1"},children:e.jsx("div",{style:{height:"800px",padding:"0 16px"},children:"Drawer content"})})})}function m(){const[t,a]=n.useState(!1),[l,s]=n.useState(!1),d=n.useCallback(()=>{a(!1)},[]),o=n.useCallback(()=>{s(!1)},[]),i=n.useCallback(()=>{s(!0)},[]);return e.jsxs("div",{className:u.drawerStories,style:{overflow:"auto",display:"flex",flexDirection:"column",height:"600px",maxWidth:"680px",border:"1px solid rgba(0,0,0,0.1)",margin:"0 auto",padding:"0"},children:[e.jsx("div",{style:{padding:"40px"},children:e.jsx(c,{onClick:()=>a(!0),children:"Open drawer"})}),t&&e.jsx(r,{type:"bottomSheet",expanded:l,fullscreen:!1,visibleHeight:180,onCollapsed:o,onExpanded:i,onReachBottom:d,children:e.jsxs("div",{style:{padding:"0 16px"},children:[e.jsx("p",{children:"Bottom sheet content"}),e.jsx(c,{onClick:()=>s(!1),children:"Close"}),e.jsx("div",{style:{height:"200px"}})]})})]})}function C(){const[t,a]=n.useState(!1),[l,s]=n.useState(!1),d=n.useCallback(()=>{a(!1)},[]),o=n.useCallback(()=>{s(!1)},[]),i=n.useCallback(()=>{s(!0)},[]);return e.jsxs("div",{className:u.drawerStories,style:{overflow:"auto",display:"flex",flexDirection:"column",height:"600px",padding:"0"},children:[e.jsx("div",{style:{padding:"40px"},children:e.jsx(c,{onClick:()=>a(!0),children:"Open drawer"})}),t&&e.jsx(r,{type:"bottomSheet",expanded:l,visibleHeight:330,onCollapsed:o,onExpanded:i,onReachBottom:d,children:e.jsxs("div",{style:{padding:"0 16px"},children:[e.jsx("p",{children:"Bottom sheet content"}),e.jsx(c,{onClick:()=>s(!1),children:"Close"}),e.jsx("div",{style:{height:"400px"}})]})})]})}const V={title:"Example/Natural Drawer",tags:["autodocs"],component:p,parameters:{layout:"fullscreen"}};p.__docgenInfo={description:"",methods:[],displayName:"Default"};x.__docgenInfo={description:"",methods:[],displayName:"FullScreen"};h.__docgenInfo={description:"",methods:[],displayName:"AccessibleBackground"};f.__docgenInfo={description:"",methods:[],displayName:"FullscreenAccessibleBackground"};m.__docgenInfo={description:"",methods:[],displayName:"BottomSheet"};C.__docgenInfo={description:"",methods:[],displayName:"BottomSheetFullScreen"};var v,w,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`function Default() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [distance, setDistance] = useState(0);
  const handleDrawerScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    setDistance((event.target as HTMLDivElement).scrollTop);
  }, []);
  const handleCollapsed = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleExpanded = useCallback(() => {
    setExpanded(true);
  }, []);
  return <div className={storiesStyles.drawerStories} style={{
    maxWidth: '680px',
    margin: '0 auto'
  }}>
      <div style={{
      position: 'relative',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '600px'
    }}>
        <h4>Drawer</h4>
        <p>Scrolled: {distance}</p>
        <NaturalDrawer expanded={expanded} fullscreen={false} header={<NaturalDrawer.Header onClick={() => setExpanded(!expanded)} useDrag></NaturalDrawer.Header>} drawerScroll={handleDrawerScroll} onCollapsed={handleCollapsed} onExpanded={handleExpanded} style={{
        flex: '1',
        maxHeight: '500px',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
          <div style={{
          height: '800px',
          padding: '0 16px'
        }}>Drawer content</div>
        </NaturalDrawer>
      </div>
    </div>;
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,D,E;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`function FullScreen() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [distance, setDistance] = useState(0);
  const handleDrawerScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    setDistance((event.target as HTMLDivElement).scrollTop);
  }, []);
  const handleCollapsed = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleExpanded = useCallback(() => {
    setExpanded(true);
  }, []);
  return <div className={storiesStyles.drawerStories} style={{
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '600px'
  }}>
      <h4>Drawer</h4>
      <p>Scrolled: {distance}</p>
      <NaturalDrawer expanded={expanded} header={<NaturalDrawer.Header onClick={() => setExpanded(!expanded)} useDrag></NaturalDrawer.Header>} drawerScroll={handleDrawerScroll} onCollapsed={handleCollapsed} onExpanded={handleExpanded} style={{
      flex: '1'
    }}>
        <div style={{
        height: '800px',
        padding: '0 16px'
      }}>Drawer content</div>
      </NaturalDrawer>
    </div>;
}`,...(E=(D=x.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var b,k,j;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`function AccessibleBackground() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const handleCollapsed = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleExpanded = useCallback(() => {
    setExpanded(true);
  }, []);
  return <div className={storiesStyles.drawerStories} style={{
    padding: '20px',
    maxWidth: '680px',
    margin: '0 auto'
  }}>
      <div style={{
      position: 'relative',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '600px'
    }}>
        <NaturalDrawer expanded={expanded} fullscreen={false} fixedContent={<div style={{
        padding: '16px'
      }}>
              <div>
                This content is under the drawer so that you still can interact
                with it.
              </div>
              <p>{count}</p>
              <p>
                <Button onClick={() => {
            setCount(count + 1);
          }} variant={'secondary'}>
                  Count
                </Button>
              </p>
            </div>} onCollapsed={handleCollapsed} onExpanded={handleExpanded} style={{
        flex: '1',
        border: '1px solid rgba(0,0,0,0.1)'
      }}>
          <div style={{
          height: '800px',
          padding: '16px'
        }}>
            <p>Drawer content</p>
            <Button onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Collapse' : 'Expand'}
            </Button>
          </div>
        </NaturalDrawer>
      </div>
    </div>;
}`,...(j=(k=h.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var B,N,_;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`function FullscreenAccessibleBackground() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const handleCollapsed = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleExpanded = useCallback(() => {
    setExpanded(true);
  }, []);
  return <div className={storiesStyles.drawerStories} style={{
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '600px'
  }}>
      <NaturalDrawer expanded={expanded} header={<NaturalDrawer.Header onClick={() => setExpanded(!expanded)} useDrag></NaturalDrawer.Header>} fixedContent={<div style={{
      width: '100%',
      height: '100%',
      padding: '16px'
    }}>
            <div>
              This content is under the drawer so that you still can interact
              with it.
            </div>
            <p>{count}</p>
            <p>
              <Button onClick={() => {
          setCount(count + 1);
        }}>
                Count
              </Button>
            </p>
          </div>} onCollapsed={handleCollapsed} onExpanded={handleExpanded} style={{
      flex: '1'
    }}>
        <div style={{
        height: '800px',
        padding: '0 16px'
      }}>Drawer content</div>
      </NaturalDrawer>
    </div>;
}`,...(_=(N=f.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var H,O,F;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`function BottomSheet() {
  const [open, setOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const handlePullDown = useCallback(() => {
    setOpen(false);
  }, []);
  const handleCollapsed = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleExpanded = useCallback(() => {
    setExpanded(true);
  }, []);
  return <div className={storiesStyles.drawerStories} style={{
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    maxWidth: '680px',
    border: '1px solid rgba(0,0,0,0.1)',
    margin: '0 auto',
    padding: '0'
  }}>
      <div style={{
      padding: '40px'
    }}>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
      </div>
      {open && <NaturalDrawer type={'bottomSheet'} expanded={expanded} fullscreen={false} visibleHeight={180} onCollapsed={handleCollapsed} onExpanded={handleExpanded} onReachBottom={handlePullDown}>
          <div style={{
        padding: '0 16px'
      }}>
            <p>Bottom sheet content</p>
            <Button onClick={() => setExpanded(false)}>Close</Button>
            <div style={{
          height: '200px'
        }}></div>
          </div>
        </NaturalDrawer>}
    </div>;
}`,...(F=(O=m.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var T,A,I;C.parameters={...C.parameters,docs:{...(T=C.parameters)==null?void 0:T.docs,source:{originalSource:`function BottomSheetFullScreen() {
  const [open, setOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const handlePullDown = useCallback(() => {
    setOpen(false);
  }, []);
  const handleCollapsed = useCallback(() => {
    setExpanded(false);
  }, []);
  const handleExpanded = useCallback(() => {
    setExpanded(true);
  }, []);
  return <div className={storiesStyles.drawerStories} style={{
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '600px',
    padding: '0'
  }}>
      <div style={{
      padding: '40px'
    }}>
        <Button onClick={() => setOpen(true)}>Open drawer</Button>
      </div>
      {open && <NaturalDrawer type={'bottomSheet'} expanded={expanded} visibleHeight={330} onCollapsed={handleCollapsed} onExpanded={handleExpanded} onReachBottom={handlePullDown}>
          <div style={{
        padding: '0 16px'
      }}>
            <p>Bottom sheet content</p>
            <Button onClick={() => setExpanded(false)}>Close</Button>
            <div style={{
          height: '400px'
        }}></div>
          </div>
        </NaturalDrawer>}
    </div>;
}`,...(I=(A=C.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const X=["Default","FullScreen","AccessibleBackground","FullscreenAccessibleBackground","BottomSheet","BottomSheetFullScreen"];export{h as AccessibleBackground,m as BottomSheet,C as BottomSheetFullScreen,p as Default,x as FullScreen,f as FullscreenAccessibleBackground,X as __namedExportsOrder,V as default};
