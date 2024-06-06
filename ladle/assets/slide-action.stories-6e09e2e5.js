import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as b}from"./heart-filled-5f2b210b.js";import{r as l}from"./index-6c164b11.js";import{T as r}from"./index-9b621ca4.js";import{S as i}from"./slide-action-b34e09b0.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./useDrag-c728562f.js";const v="_sliderActionStories_1f0vc_1",C="_description_1f0vc_15",x="_colorPickerWrapper_1f0vc_21",T="_colorPicker_1f0vc_21",k="_iphoneFake_1f0vc_48",j="_showCase_1f0vc_55",_="_turnedOff_1f0vc_90",o={sliderActionStories:v,description:C,colorPickerWrapper:x,colorPicker:T,iphoneFake:k,showCase:j,turnedOff:_};function n(){const[t,c]=l.useState(!1);return e.jsxs("div",{className:o.sliderActionStories,children:[e.jsx(r.Body,{variant:"body2",className:o.description,children:"Component will be reset after 1000ms"}),e.jsxs(r.Body,{variant:"body3",children:["Slide status: ",e.jsx("strong",{children:`${t}`})]}),e.jsx(i,{color:"--cdg-color-cdgBlue",onChange:a=>c(a),onSwipeEnd:a=>{console.log("success"),setTimeout(()=>{a()},1e3)},children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate fugit reprehenderit minus beatae hic dolor rerum, labore architecto facere nam numquam?"})]})}const u=["#475569","#ea580c","#059669","--cdg-color-cdgBlue","#0891b2","#7c3aed","#e11d48"];function s(){const[t,c]=l.useState(u[0]||"--cdg-color-cdgBlue"),[a,S]=l.useState(!1);return e.jsxs("div",{className:o.sliderActionStories,children:[e.jsx(r.Header,{variant:"header3",children:"Default"}),e.jsx("pre",{children:"color: var(--cdg-color-dangerShades) // #E31617"}),e.jsx(i,{css:{marginTop:"var(--cdg-spacing-4)"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt"}),e.jsx(r.Header,{variant:"header3",children:"Compact"}),e.jsx(i,{compact:!0,children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt, excepturi et voluptates laudantium exercitationem similique. Libero id quo eligendi sunt. Cupiditate dignissimos qui inventore dolores hic."}),e.jsx(r.Header,{variant:"header3",children:"More colors 🎨"}),e.jsxs("div",{className:o.colorPickerWrapper,children:[u.map(d=>e.jsx("button",{className:o.colorPicker,title:d,style:{backgroundColor:d},type:"button",onClick:()=>c(d)},d)),e.jsx("button",{className:o.colorPicker,type:"button",style:{background:"linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)"},onClick:()=>c(`#${Math.floor(Math.random()*16777215).toString(16)}`),children:"Random"})]}),e.jsx(i,{color:t,children:"Slide background"}),e.jsx(i,{css:{marginTop:"var(--cdg-spacing-4)"},color:t,slideType:"static",children:"Fadein background"}),e.jsx(r.Header,{variant:"header5",children:"Label slide effect"}),e.jsx(i,{labelType:"slide",color:t,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa deleniti!"}),e.jsx(r.Header,{variant:"header5",children:"Default gradient background"}),e.jsx(i,{css:{marginTop:"var(--cdg-spacing-4)"},color:"#e11d48",slideColor:"gradient",children:"Slide to see bg color change"}),e.jsx(r.Header,{variant:"header5",children:"With custom icon"}),e.jsx("div",{className:o.iphoneFake,children:e.jsx("div",{className:[o.showCase,a&&o.turnedOff].filter(Boolean).join(" "),children:e.jsx(i,{css:{border:"none",backgroundColor:"rgba(61, 127, 118, 0.5)"},color:"#fff",icon:e.jsx(b,{color:"red"}),labelType:"slide",onSwipeEnd:()=>S(!0),children:"Slide to power off"})})})]})}const O={title:"Example/Slide Action | Swiper",tags:["autodocs"],component:n,parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"Customize"};var p,m,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`function Default() {
  const [slideStatus, setSlideStatus] = useState(false);
  return <div className={classes.sliderActionStories}>
      <Typography.Body variant='body2' className={classes.description}>
        Component will be reset after 1000ms
      </Typography.Body>
      <Typography.Body variant='body3'>
        Slide status: <strong>{\`\${slideStatus}\`}</strong>
      </Typography.Body>

      <SlideAction color='--cdg-color-cdgBlue' onChange={isSuccess => setSlideStatus(isSuccess)} onSwipeEnd={reset => {
      console.log('success');
      // do sth when users swiped to the end
      setTimeout(() => {
        reset();
      }, 1000);
    }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        minima quaerat, ipsum ad temporibus amet distinctio vitae cupiditate
        fugit reprehenderit minus beatae hic dolor rerum, labore architecto
        facere nam numquam?
      </SlideAction>
    </div>;
}`,...(g=(m=n.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`function Customize() {
  const [colorBg, setColorBg] = useState(slideBgColors[0] || '--cdg-color-cdgBlue');
  const [turnedOff, setTurnedOff] = useState(false);
  return <div className={classes.sliderActionStories}>
      <Typography.Header variant='header3'>Default</Typography.Header>
      <pre>color: var(--cdg-color-dangerShades) // #E31617</pre>
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
        {slideBgColors.map(color => <button key={color} className={classes.colorPicker} title={color} style={{
        backgroundColor: color
      }} type='button' onClick={() => setColorBg(color)} />)}

        <button className={classes.colorPicker} type='button' style={{
        background: 'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)'
      }} onClick={() => setColorBg(\`#\${Math.floor(Math.random() * 16777215).toString(16)}\`)}>
          Random
        </button>
      </div>

      <SlideAction color={colorBg}>Slide background</SlideAction>

      <SlideAction css={{
      marginTop: 'var(--cdg-spacing-4)'
    }} color={colorBg} slideType='static'>
        Fadein background
      </SlideAction>

      <Typography.Header variant='header5'>
        Label slide effect
      </Typography.Header>

      <SlideAction labelType='slide' color={colorBg}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non
        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur
        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa
        deleniti!
      </SlideAction>

      <Typography.Header variant='header5'>
        Default gradient background
      </Typography.Header>
      <SlideAction css={{
      marginTop: 'var(--cdg-spacing-4)'
    }} color='#e11d48' slideColor='gradient'>
        Slide to see bg color change
      </SlideAction>

      <Typography.Header variant='header5'>With custom icon</Typography.Header>
      <div className={classes.iphoneFake}>
        <div className={[classes.showCase, turnedOff && classes.turnedOff].filter(Boolean).join(' ')}>
          <SlideAction css={{
          border: 'none',
          backgroundColor: 'rgba(61, 127, 118, 0.5)'
        }} color='#fff' icon={<HeartFilled color='red' />} labelType='slide' onSwipeEnd={() => setTurnedOff(true)}>
            Slide to power off
          </SlideAction>
        </div>
      </div>
    </div>;
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const D=["Default","Customize"];export{s as Customize,n as Default,D as __namedExportsOrder,O as default};
