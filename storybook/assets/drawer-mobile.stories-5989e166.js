import{j as e}from"./jsx-runtime-9ef10904.js";import{r as l}from"./index-6c164b11.js";import"./index-f0ea8199.js";import{T as a}from"./index-8de6e878.js";import{D as t}from"./index-6fbcb633.js";import{s as n}from"./drawer-stories.module-8eee24a8.js";import{B as d}from"./button-a57955c5.js";import"./objectToCSS-e90bd687.js";import"./Row-7065e1c2.js";import"./use-dom-ref-7c72e1a5.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_equalByTag-6cd86198.js";function o(){const[u,s]=l.useState(!1),[r,i]=l.useState(!1);return e.jsxs("div",{className:n.drawerStories,children:[e.jsx("h4",{children:"Mobile Drawer"}),e.jsxs("p",{className:n.description,children:["A variant that utilizes modern web technologies to replicate the iOS drawer (sheets) experience on the web."," ",e.jsx("a",{href:"https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS",target:"_blank",rel:"noopener noreferrer",children:"https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS"})]}),e.jsxs("p",{className:n.description,children:["⚠️ ",e.jsx("strong",{children:"Browser compatibility warning"}),": This variant experiments with the latest web technology concepts and CSS features such as view transitions, transitioning discrete animations, the inert attribute, etc... Consider using the Drawer's h5 variant or the Dialog component for a more stable and widely browser supported experience."]}),e.jsx(d,{type:"button",onClick:()=>s(!0),children:"Open Drawer"}),e.jsx("h4",{children:"Non-modal mode"}),e.jsxs("p",{className:n.description,children:["A Drawer that has no backdrop and also doesn't render on the top-layer. It can ",e.jsx("strong",{children:"NOT"})," be closed by pressing the ",e.jsx("kbd",{children:"ESC"})," ","key.",e.jsx("br",{}),"The content below the non-modal drawer can be interacted."]}),e.jsxs(d,{type:"button",variant:r?"danger":"secondary",onClick:()=>i(!r),children:[r?"Close":"Open"," Non-modal Drawer"]}),e.jsxs(t,{open:u,variant:"mobile",onClose:()=>s(!1),enableScaleBg:!0,scaleBgClassName:n.bgScaleOverride,scaleBgOffset:16,styles:{content:{paddingInline:"1rem"},footer:{color:"red"}},backdropProps:{blur:1,background:"linear-gradient(-25deg,rgba(238,174,202,0.6) 0%,rgba(148,187,233,0.6) 100%)"},children:[e.jsx("p",{style:{textAlign:"center"},children:"Pull up to expand the drawer"}),e.jsx("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga qui corporis alias molestiae, excepturi suscipit natus autem ut nulla quis placeat, animi nisi ipsum, blanditiis possimus nihil eos ex."}),e.jsx(t.Footer,{children:"Footer"})]}),e.jsxs("div",{className:n.nonModalBlock,children:[e.jsx("div",{className:n.nonModalBlockDesc,children:"Relative block"}),e.jsxs(a.Body,{variant:"body3",weight:"semibold",children:["The mobile drawer in ",e.jsx("code",{children:"non-modal"})," mode should be displayed inside nearest relative (position) block."]}),e.jsxs(t,{className:n.drawerMobileExample,classNames:{root:n.drawerMobileNonModal},open:r,onClose:()=>i(!1),variant:"mobile",drawerMode:"non-modal",styles:{content:{paddingInline:"1rem"}},children:[e.jsxs(t.Header,{children:[e.jsx(a.Body,{variant:"body3",weight:"semibold",children:"Your ride is on the way"}),e.jsx(a.Body,{variant:"body3",weight:"semibold",children:"Arriving in 8 - 10 min"})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Drag to bottom"})," ⏬ of the screen to close or",e.jsx("br",{})," just ",e.jsx("strong",{children:"tap"})," on the Toggle Non-modal button"]}),e.jsx("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quod itaque fugiat ipsa eveniet illum quae eligendi, qui hic officia sequi perferendis laborum vel nostrum praesentium doloremque, dolorum debitis unde!"})]})]})]})}const C={title:"Example/Drawer",tags:["autodocs"],component:o,parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Mobile"};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`function Mobile() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openNonModalDrawer, setOpenNonModalDrawer] = useState(false);
  return <div className={storiesStyles.drawerStories}>
      <h4>Mobile Drawer</h4>
      <p className={storiesStyles.description}>
        A variant that utilizes modern web technologies to replicate the iOS
        drawer (sheets) experience on the web.{' '}
        <a href='https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS' target='_blank' rel='noopener noreferrer'>
          https://developer.apple.com/design/human-interface-guidelines/sheets#iOS-iPadOS
        </a>
      </p>
      <p className={storiesStyles.description}>
        ⚠️ <strong>Browser compatibility warning</strong>: This variant
        experiments with the latest web technology concepts and CSS features
        such as view transitions, transitioning discrete animations, the inert
        attribute, etc... Consider using the Drawer's h5 variant or the Dialog
        component for a more stable and widely browser supported experience.
      </p>
      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <h4>Non-modal mode</h4>
      <p className={storiesStyles.description}>
        A Drawer that has no backdrop and also doesn't render on the top-layer.
        It can <strong>NOT</strong> be closed by pressing the <kbd>ESC</kbd>{' '}
        key.
        <br />
        The content below the non-modal drawer can be interacted.
      </p>
      <Button type='button' variant={openNonModalDrawer ? 'danger' : 'secondary'} onClick={() => setOpenNonModalDrawer(!openNonModalDrawer)}>
        {openNonModalDrawer ? 'Close' : 'Open'} Non-modal Drawer
      </Button>

      <Drawer open={openDrawer} variant='mobile' onClose={() => setOpenDrawer(false)} enableScaleBg scaleBgClassName={storiesStyles.bgScaleOverride} scaleBgOffset={16} styles={{
      content: {
        paddingInline: '1rem'
      },
      footer: {
        color: 'red'
      }
    }} backdropProps={{
      blur: 1,
      // opacity: 0.55,
      // background: 'rgb(0 0 0 / 0.35)',
      background: 'linear-gradient(-25deg,rgba(238,174,202,0.6) 0%,rgba(148,187,233,0.6) 100%)'
    }}>
        <p style={{
        textAlign: 'center'
      }}>Pull up to expand the drawer</p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi fuga
          qui corporis alias molestiae, excepturi suscipit natus autem ut nulla
          quis placeat, animi nisi ipsum, blanditiis possimus nihil eos ex.
        </p>
        <Drawer.Footer>Footer</Drawer.Footer>
      </Drawer>

      <div className={storiesStyles.nonModalBlock}>
        <div className={storiesStyles.nonModalBlockDesc}>Relative block</div>
        <Typography.Body variant='body3' weight='semibold'>
          The mobile drawer in <code>non-modal</code> mode should be displayed
          inside nearest relative (position) block.
        </Typography.Body>

        <Drawer className={storiesStyles.drawerMobileExample} classNames={{
        root: storiesStyles.drawerMobileNonModal
      }} open={openNonModalDrawer} onClose={() => setOpenNonModalDrawer(false)} variant='mobile' drawerMode='non-modal' styles={{
        content: {
          paddingInline: '1rem'
        }
      }}>
          <Drawer.Header>
            <Typography.Body variant='body3' weight='semibold'>
              Your ride is on the way
            </Typography.Body>
            <Typography.Body variant='body3' weight='semibold'>
              Arriving in 8 - 10 min
            </Typography.Body>
          </Drawer.Header>
          <p>
            <strong>Drag to bottom</strong> ⏬ of the screen to close or
            <br /> just <strong>tap</strong> on the Toggle Non-modal button
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            quod itaque fugiat ipsa eveniet illum quae eligendi, qui hic officia
            sequi perferendis laborum vel nostrum praesentium doloremque,
            dolorum debitis unde!
          </p>
        </Drawer>
      </div>
    </div>;
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Mobile"];export{o as Mobile,T as __namedExportsOrder,C as default};
