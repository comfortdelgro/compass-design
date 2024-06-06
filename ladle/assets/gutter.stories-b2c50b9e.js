import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as i}from"./index-6c164b11.js";import"./index-7972436d.js";import{G as r}from"./index-3c6de7b1.js";import{B}from"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./pointer-a81ef452.js";import"./string-de12cf5f.js";const s=()=>{const t=i.useRef(null),[n,d]=i.useState(void 0);return e.jsxs("div",{style:{display:"flex",height:"100%",minHeight:"400px"},children:[e.jsxs("div",{ref:t,style:{position:"relative",width:n},children:[e.jsx("div",{style:{overflow:"hidden"},children:"Right side"}),e.jsx(r,{parentRef:t,onChange:d,hasExpandButton:!0})]}),e.jsx("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},o=()=>{const t=i.useRef(null),[n,d]=i.useState(void 0);return e.jsxs("div",{style:{display:"flex",height:"100%",minHeight:"400px"},children:[e.jsx("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsxs("div",{ref:t,style:{position:"relative",width:n,paddingLeft:"12px"},children:[e.jsx("div",{style:{overflow:"hidden"},children:"Left side"}),e.jsx(r,{parentRef:t,onChange:d,side:"left",hasExpandButton:!0})]})]})},a=()=>{const t=i.useRef(null),n=i.useRef(null),[d,h]=i.useState(void 0),[p,f]=i.useState(void 0);return e.jsxs("div",{style:{display:"flex",height:"100%",minHeight:"400px",margin:50},children:[e.jsxs("div",{ref:n,style:{position:"relative",width:p},children:[e.jsx("div",{style:{overflow:"hidden"},children:"Right side"}),e.jsx(r,{parentRef:n,onChange:f,hasExpandButton:!0})]}),e.jsx("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),e.jsxs("div",{ref:t,style:{position:"relative",width:d,paddingLeft:"12px"},children:[e.jsx("div",{style:{overflow:"hidden"},children:"Left side"}),e.jsx(r,{parentRef:t,onChange:h,side:"left",hasExpandButton:!0})]})]})},l=()=>{const t=i.useRef(null),[n,d]=i.useState(void 0),[h,p]=i.useState(!1);return e.jsxs("div",{style:{display:"flex",height:"100%",minHeight:"400px",margin:50},children:[e.jsxs("div",{ref:t,style:{position:"relative",width:n},children:[e.jsx("div",{style:{overflow:"hidden"},children:"Right side"}),e.jsx(r,{isExpand:h,parentRef:t,onChange:d,hasExpandButton:!0})]}),e.jsx("div",{style:{flex:1},children:e.jsx(B,{onPress:()=>{p(f=>!f)},children:"Toggle expand"})})]})},u=()=>{const t=i.useRef(null),[n,d]=i.useState(void 0);return e.jsxs("div",{style:{display:"flex",height:"100%",minHeight:"400px"},children:[e.jsxs("div",{ref:t,style:{position:"relative",width:n??"20%",maxWidth:"50%",minWidth:"10%"},children:[e.jsx("div",{style:{overflow:"hidden"},children:"Right side"}),e.jsx(r,{parentRef:t,onChange:d,hasExpandButton:!0,minCollapse:"20%",maxExpand:"40%"})]}),e.jsx("div",{style:{flex:1},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},N={title:"Example/Gutter",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"LeftSide"};a.__docgenInfo={description:"",methods:[],displayName:"BothSide"};l.__docgenInfo={description:"",methods:[],displayName:"ControlledCollapse"};u.__docgenInfo={description:"",methods:[],displayName:"Advanced"};var m,c,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(undefined);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <div ref={ref} style={{
      position: 'relative',
      width: width
    }}>
        <div style={{
        overflow: 'hidden'
      }}>Right side</div>
        <Gutter parentRef={ref} onChange={setWidth} hasExpandButton />
      </div>
      <div style={{
      flex: 1
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>;
}`,...(v=(c=s.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};var x,g,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<CSSProperties['width']>(undefined);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <div style={{
      flex: 1
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div ref={ref} style={{
      position: 'relative',
      width: width,
      paddingLeft: '12px'
    }}>
        <div style={{
        overflow: 'hidden'
      }}>Left side</div>
        <Gutter parentRef={ref} onChange={setWidth} side='left' hasExpandButton />
      </div>
    </div>;
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var R,w,S;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const leftGutterRef = useRef<HTMLDivElement>(null);
  const rightGutterRef = useRef<HTMLDivElement>(null);
  const [leftGutterWidth, setLeftGutterWidth] = useState<CSSProperties['width']>(undefined);
  const [rightGutterWidth, setRightGutterWidth] = useState<CSSProperties['width']>(undefined);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px',
    margin: 50
  }}>
      <div ref={rightGutterRef} style={{
      position: 'relative',
      width: rightGutterWidth
    }}>
        <div style={{
        overflow: 'hidden'
      }}>Right side</div>
        <Gutter parentRef={rightGutterRef} onChange={setRightGutterWidth} hasExpandButton />
      </div>
      <div style={{
      flex: 1
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <div ref={leftGutterRef} style={{
      position: 'relative',
      width: leftGutterWidth,
      paddingLeft: '12px'
    }}>
        <div style={{
        overflow: 'hidden'
      }}>Left side</div>
        <Gutter parentRef={leftGutterRef} onChange={setLeftGutterWidth} side='left' hasExpandButton />
      </div>
    </div>;
}`,...(S=(w=a.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var j,E,G;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<CSSProperties['width']>(undefined);
  const [isExpand, setIsExpand] = useState(false);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px',
    margin: 50
  }}>
      <div ref={ref} style={{
      position: 'relative',
      width: width
    }}>
        <div style={{
        overflow: 'hidden'
      }}>Right side</div>
        <Gutter isExpand={isExpand} parentRef={ref} onChange={setWidth} hasExpandButton />
      </div>
      <div style={{
      flex: 1
    }}>
        <Button onPress={() => {
        setIsExpand(prev => !prev);
      }}>
          Toggle expand
        </Button>
      </div>
    </div>;
}`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var L,W,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<CSSProperties['width']>(undefined);
  return <div style={{
    display: 'flex',
    height: '100%',
    minHeight: '400px'
  }}>
      <div ref={ref} style={{
      position: 'relative',
      width: width ?? '20%',
      // default value
      maxWidth: '50%',
      // maximum width
      minWidth: '10%' // minimum width
    }}>
        <div style={{
        overflow: 'hidden'
      }}>Right side</div>
        <Gutter parentRef={ref} onChange={setWidth} hasExpandButton minCollapse={'20%'} // minimum value if collapse
      maxExpand={'40%'} // maximum value if expand
      />
      </div>
      <div style={{
      flex: 1
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>;
}`,...(C=(W=u.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};const A=["Default","LeftSide","BothSide","ControlledCollapse","Advanced"];export{u as Advanced,a as BothSide,l as ControlledCollapse,s as Default,o as LeftSide,A as __namedExportsOrder,N as default};
