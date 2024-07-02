import{j as e}from"./jsx-runtime-9ef10904.js";import{r as l}from"./index-6c164b11.js";import"./index-68dd90e7.js";import{D as b}from"./index-f6675da2.js";import{T as o}from"./index-89d309b6.js";import{c as v}from"./string-b39bd50e.js";import{S as n}from"./slide-action-408e0278.js";import{B as x}from"./button-03dcac20.js";import"./use-dom-ref-7c72e1a5.js";import"./Row-cb35b7d4.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_equalByTag-6cd86198.js";const j="_sliderActionStories_1j644_1",C="_gradientWave_1j644_1",k="_description_1j644_16",A="_slideActionGradient_1j644_34",T="_colorPickerWrapper_1j644_41",w="_colorPicker_1j644_41",_="_iphoneFake_1j644_68",H="_showCase_1j644_75",q="_turnedOff_1j644_110",i={sliderActionStories:j,gradientWave:C,description:k,slideActionGradient:A,colorPickerWrapper:T,colorPicker:w,iphoneFake:_,showCase:H,turnedOff:q};function a(){const r=l.useRef(null),c=l.useCallback(t=>{setTimeout(()=>{t()},1e3)},[]);return e.jsxs("div",{className:i.sliderActionStories,children:[e.jsx(n,{onChange:t=>console.log("Status change: ",t),children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate fugit reprehenderit minus beatae hic dolor rerum, labore architecto facere nam numquam?"}),e.jsx(b,{}),e.jsx(o.Header,{variant:"header3",children:"How to reset component?"}),e.jsxs(o.Body,{variant:"body2",children:["1. Call ",e.jsx("code",{children:"reset"})," function that ",e.jsx("code",{children:"onSwipeEnd"})," ","callback provided. Type: ",e.jsx("code",{children:"SlideActionOnSwipeEnd"}),e.jsx("br",{}),e.jsx("br",{}),"Below SlideAction will be reset after 1000ms:"]}),e.jsx(n,{onSwipeEnd:c,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit"}),e.jsxs(o.Body,{variant:"body2",style:{marginTop:"2rem"},children:["2. Call ",e.jsx("code",{children:"resetState"})," function from component ref."]}),e.jsx(x,{variant:"danger",type:"button",onClick:()=>{var t;return(t=r.current)==null?void 0:t.resetState()},style:{marginBottom:"1rem"},children:"Reset below SlideAction"}),e.jsx(n,{ref:r,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit"})]})}const p=["#475569","#ea580c","#059669","var(--cdg-color-cdgBlue)","#0891b2","#7c3aed","#e11d48"];function s(){const[r,c]=l.useState(p[0]),[t,y]=l.useState(!1);return e.jsxs("div",{className:i.sliderActionStories,children:[e.jsx(o.Header,{variant:"header3",children:"Default"}),e.jsx("pre",{children:"color: --cdg-color-cdgBlue #0142AF"}),e.jsx(n,{css:{marginTop:"var(--cdg-spacing-4)"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt"}),e.jsx(o.Header,{variant:"header3",children:"Compact"}),e.jsx(n,{compact:!0,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt, excepturi et voluptates laudantium exercitationem similique. Libero id quo eligendi sunt. Cupiditate dignissimos qui inventore dolores hic."}),e.jsx(o.Header,{variant:"header3",children:"More colors 🎨"}),e.jsxs("div",{className:i.colorPickerWrapper,children:[p.map(d=>e.jsx("button",{className:i.colorPicker,title:d,style:{backgroundColor:d},type:"button",onClick:()=>c(d)},d)),e.jsx("button",{className:i.colorPicker,type:"button",style:{background:"linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)"},onClick:()=>c(`#${(Math.random()*16777215|0).toString(16).padStart(6,"0")}`),children:"Random"})]}),e.jsx(n,{color:r,children:"Slide background"}),e.jsx(n,{css:{marginTop:"var(--cdg-spacing-4)"},color:r,slideType:"static",children:"Fadein background"}),e.jsx(o.Header,{variant:"header5",children:"Label slide effect"}),e.jsx(n,{labelType:"slide",color:r,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa deleniti!"}),e.jsx(o.Header,{variant:"header5",children:"Gradient slide background"}),e.jsx(n,{className:i.slideActionGradient,children:"Slide to see bg color change"}),e.jsx(o.Header,{variant:"header5",children:"With custom icon"}),e.jsx("div",{className:i.iphoneFake,children:e.jsx("div",{className:v(i.showCase,t?i.turnedOff:""),children:e.jsx(n,{style:{border:"none",backgroundColor:"rgba(61, 127, 118, 0.5)"},color:"#fff",icon:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",color:"red",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e.jsx("path",{d:"M7 6a7.75 7.75 0 1 0 10 0"}),e.jsx("path",{d:"M12 4l0 8"})]}),labelType:"slide",onSwipeEnd:()=>y(!0),children:"Slide to power off"})})})]})}const K={title:"Example/Slide Action | Swiper",tags:["autodocs"],component:a,parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Customize"};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`function Default() {
  const lastSlideRef = useRef<SlideActionRef>(null);
  const handleOnSwipeEnd = useCallback<SlideActionOnSwipeEnd>(reset => {
    // do sth when users swiped to the end
    setTimeout(() => {
      reset();
    }, 1000);
  }, []);
  return <div className={classes.sliderActionStories}>
      <SlideAction onChange={isSuccess => console.log('Status change: ', isSuccess)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate
        fugit reprehenderit minus beatae hic dolor rerum, labore architecto
        facere nam numquam?
      </SlideAction>

      <Divider />

      <Typography.Header variant='header3'>
        How to reset component?
      </Typography.Header>
      <Typography.Body variant='body2'>
        1. Call <code>reset</code> function that <code>onSwipeEnd</code>{' '}
        callback provided. Type: <code>SlideActionOnSwipeEnd</code>
        <br />
        <br />
        Below SlideAction will be reset after 1000ms:
      </Typography.Body>
      <SlideAction onSwipeEnd={handleOnSwipeEnd}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </SlideAction>

      <Typography.Body variant='body2' style={{
      marginTop: '2rem'
    }}>
        2. Call <code>resetState</code> function from component ref.
      </Typography.Body>
      <Button variant='danger' type='button' onClick={() => lastSlideRef.current?.resetState()} style={{
      marginBottom: '1rem'
    }}>
        Reset below SlideAction
      </Button>
      <SlideAction ref={lastSlideRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </SlideAction>
    </div>;
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,g,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function Customize() {
  const [themeColor, setThemeColor] = useState(slideColors[0]);
  const [turnedOff, setTurnedOff] = useState(false);
  return <div className={classes.sliderActionStories}>
      <Typography.Header variant='header3'>Default</Typography.Header>
      <pre>color: --cdg-color-cdgBlue #0142AF</pre>
      <SlideAction css={{
      marginTop: 'var(--cdg-spacing-4)'
    }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt
      </SlideAction>

      <Typography.Header variant='header3'>Compact</Typography.Header>
      <SlideAction compact>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim
        sint labore nesciunt, excepturi et voluptates laudantium exercitationem
        similique. Libero id quo eligendi sunt. Cupiditate dignissimos qui
        inventore dolores hic.
      </SlideAction>

      <Typography.Header variant='header3'>More colors 🎨</Typography.Header>

      <div className={classes.colorPickerWrapper}>
        {slideColors.map(color => <button key={color} className={classes.colorPicker} title={color} style={{
        backgroundColor: color
      }} type='button' onClick={() => setThemeColor(color)} />)}

        <button className={classes.colorPicker} type='button' style={{
        background: 'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)'
      }} onClick={() => setThemeColor(\`#\${(Math.random() * 0xffffff | 0).toString(16).padStart(6, '0')}\`)}>
          Random
        </button>
      </div>

      <SlideAction color={themeColor}>Slide background</SlideAction>

      <SlideAction css={{
      marginTop: 'var(--cdg-spacing-4)'
    }} color={themeColor} slideType='static'>
        Fadein background
      </SlideAction>

      <Typography.Header variant='header5'>
        Label slide effect
      </Typography.Header>

      <SlideAction labelType='slide' color={themeColor}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Typography.Header variant='header5'>
        Gradient slide background
      </Typography.Header>
      <SlideAction className={classes.slideActionGradient}>
        Slide to see bg color change
      </SlideAction>

      <Typography.Header variant='header5'>With custom icon</Typography.Header>
      <div className={classes.iphoneFake}>
        <div className={classNames(classes.showCase, turnedOff ? classes.turnedOff : '')}>
          <SlideAction style={{
          border: 'none',
          backgroundColor: 'rgba(61, 127, 118, 0.5)'
        }} color='#fff' icon={<svg xmlns='http://www.w3.org/2000/svg' color='red' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M7 6a7.75 7.75 0 1 0 10 0' />
                <path d='M12 4l0 8' />
              </svg>} labelType='slide' onSwipeEnd={() => setTurnedOff(true)}>
            Slide to power off
          </SlideAction>
        </div>
      </div>
    </div>;
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const Q=["Default","Customize"];export{s as Customize,a as Default,Q as __namedExportsOrder,K as default};
