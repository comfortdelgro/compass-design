import{j as e}from"./jsx-runtime-9ef10904.js";import{r}from"./index-6c164b11.js";import{A as f}from"./arrow-right-20c3256f.js";import{C as N}from"./cross-bdcb89a4.js";import{D as o}from"./index-4419a936.js";import"./index-68dd90e7.js";import{s as t}from"./drawer-stories.module-6ddd36d3.js";import{B as n}from"./button-03dcac20.js";import"./Row-cb35b7d4.js";import"./string-b39bd50e.js";import"./use-dom-ref-7c72e1a5.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_equalByTag-6cd86198.js";const P=(c,i)=>r.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:i,...c},r.createElement("g",{fill:"currentColor"},r.createElement("path",{d:"M21.7146 0.999998C22.2995 0.999998 22.8846 1.24412 23.3304 1.73237C24.2232 2.70887 24.2232 4.2908 23.3304 5.2673L13.5146 15.999L23.3304 26.7327C24.2232 27.7092 24.2232 29.2911 23.3304 30.2676C22.4375 31.2441 20.9911 31.2441 20.0982 30.2676L8.66964 17.7684C7.77679 16.7919 7.77679 15.21 8.66964 14.2335L20.0982 1.73433C20.5446 1.24217 21.1296 0.999998 21.7146 0.999998Z"}))),E=r.forwardRef(P),b=E;function a(){const[c,i]=r.useState(!1),[C,j]=r.useState(""),[l,p]=r.useState(!1),[v,m]=r.useState(!1),[u,d]=r.useState(void 0),[B,h]=r.useState(!1),S=s=>{s.preventDefault();const y=new FormData(s.currentTarget);j(y.get("keyword")||""),y.get("keep")||s.currentTarget.reset(),w()},w=()=>{i(!1)},O=()=>{i(!1)},g=s=>{d(s),m(!0)};return e.jsxs("div",{className:t.drawerStories,children:[e.jsx("h4",{children:"Drawer"}),e.jsxs("p",{children:["Drawer form value: ",C]}),e.jsx(n,{type:"button",onClick:()=>i(!0),children:"Open Drawer"}),e.jsxs(o,{className:t.drawerExample,open:c,onClose:O,styles:{footer:{display:"flex",gap:"1rem"}},children:[e.jsxs(o.Header,{children:[e.jsx("h2",{style:{marginBlock:0},children:"Drawer controlled by form"}),e.jsx(n,{css:{padding:"0.25rem","& svg":{width:"fit-content !important"}},type:"button",variant:"ghost",onClick:w,children:e.jsx(N,{})})]}),e.jsxs("form",{id:"form-in-drawer",method:"dialog",onSubmit:S,children:[e.jsx("h3",{children:"Drawer Form"}),e.jsx("label",{htmlFor:"keyword",children:"Keyword"}),e.jsx("input",{type:"search",name:"keyword",id:"keyword",placeholder:"Enter anything"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"keepValue",children:"Keep form value "}),e.jsx("input",{name:"keep",type:"checkbox",id:"keepValue",style:{marginTop:"1rem"}})]}),e.jsxs("section",{style:{height:"50vh",marginTop:"5rem"},children:[e.jsx("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,color:"var(--cdg-color-primaryText)",backgroundColor:"var(--cdg-color-background)"},children:"Section 1: Very long content here, scroll down ⏬ for more content"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi."})]}),e.jsxs("section",{style:{height:"100vh"},children:[e.jsx("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,color:"var(--cdg-color-primaryText)",backgroundColor:"var(--cdg-color-background)"},children:"Section 2: No idea"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem omnis architecto aliquam id dicta dolor magnam, sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi ratione! Neque doloribus vel esse."})]}),e.jsxs(o.Footer,{children:[e.jsx(n,{variant:"secondary",form:"form-in-drawer",type:"reset",onClick:w,children:"Cancel"}),e.jsx(n,{form:"form-in-drawer",type:"submit",children:"Submit"})]})]}),e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:t.container,children:[e.jsx(n,{type:"button",leftIcon:e.jsx(b,{}),onClick:()=>g("left"),children:"Open on the left"}),e.jsx(n,{variant:"secondary",type:"button",onClick:()=>g("bottom"),children:"Open on the bottom"}),e.jsx(n,{type:"button",rightIcon:e.jsx(f,{}),onClick:()=>g("right"),children:"Open on the right"})]}),e.jsxs(o,{className:t.drawerExample,open:v,onClose:()=>m(!1),position:u,children:[e.jsx(o.Header,{children:e.jsxs("h2",{children:["Drawer ",u||""]})}),e.jsx("p",{children:"Article contents"}),e.jsx(n,{type:"button",onClick:()=>m(!1),children:"Close Drawer"})]}),e.jsx("h4",{children:"Non-modal mode"}),e.jsxs("p",{className:t.description,children:["A Drawer that has no backdrop and also doesn't render on the top-layer. It can ",e.jsx("strong",{children:"NOT"})," be closed by pressing the ",e.jsx("kbd",{children:"ESC"})," ","key.",e.jsx("br",{}),"The content below the non-modal drawer can be interacted."]}),e.jsxs(n,{variant:l?"danger":"secondary",type:"button",onClick:()=>p(!l),children:[l?"Close":"Open"," Non-modal Drawer"]}),e.jsxs(o,{className:t.drawerExample,open:l,onClose:()=>p(!1),drawerMode:"non-modal",position:u,children:[e.jsx(o.Header,{children:e.jsx("h2",{children:"Non-modal Drawer"})}),e.jsxs("p",{children:[e.jsx("a",{href:"https:developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations",target:"_blank",children:"Read more"})," ","about non-modal mode and accessibility considerations."]}),e.jsxs("div",{className:t.container,children:[e.jsx(n,{type:"button",leftIcon:e.jsx(b,{}),onClick:()=>d("left"),children:"Open on the left"}),e.jsx(n,{variant:"secondary",type:"button",onClick:()=>d("bottom"),children:"Open on the bottom"}),e.jsx(n,{type:"button",rightIcon:e.jsx(f,{}),onClick:()=>d("right"),children:"Open on the right"})]}),e.jsx(n,{css:{marginTop:"1rem"},type:"button",variant:"danger",onClick:()=>p(!1),children:"Close Drawer"})]}),e.jsx("h4",{children:"Backdrop styling"}),e.jsxs("p",{className:t.description,children:["We can customize the backdrop of the drawer by using the"," ",e.jsx("code",{children:"backdropProps"})," prop, update related CSS variables or",e.jsx("br",{}),"apply styles directly to the ",e.jsx("code",{children:"::backdrop"})," CSS pseudo-element."]}),e.jsx(n,{variant:"secondary",type:"button",onClick:()=>h(!0),children:"Open Drawer"}),e.jsxs(o,{className:t.drawerExample,open:B,onClose:()=>h(!1),styles:{header:{fontWeight:600},content:{paddingBlock:0}},backdropProps:{blur:1,opacity:.9,background:"linear-gradient(-25deg,rgba(238,174,202,0.6) 0%,rgba(148,187,233,0.6) 100%)"},children:[e.jsx(o.Header,{children:"Backdrop styling"}),e.jsx("p",{children:"Article contents"}),e.jsx(o.Footer,{children:e.jsx(n,{type:"button",onClick:()=>h(!1),children:"Close Drawer"})})]})]})}const G={title:"Example/Drawer",tags:["autodocs"],component:a,parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};var D,k,x;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`function Default() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [openDrawerNonModal, setOpenDrawerNonModal] = useState(false);
  const [openDrawerPosition, setOpenDrawerPosition] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<DrawerProps['position']>(undefined);
  const [openDrawerBackdropCustomized, setOpenDrawerBackdropCustomized] = useState(false);
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setKeyword((formData.get('keyword') as string) || '');
    if (!formData.get('keep')) {
      e.currentTarget.reset();
    }
    handleCloseDrawer();
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const listenOnCloseDrawer = () => {
    setOpenDrawer(false);

    //Do other stuff when drawer close
  };
  const handleChangePosition = (position: DrawerProps['position']) => {
    setDrawerPosition(position);
    setOpenDrawerPosition(true);
  };
  return <div className={storiesStyles.drawerStories}>
      <h4>Drawer</h4>
      <p>Drawer form value: {keyword}</p>

      <Button type='button' onClick={() => setOpenDrawer(true)}>
        Open Drawer
      </Button>

      <Drawer className={storiesStyles.drawerExample} open={openDrawer} onClose={listenOnCloseDrawer} styles={{
      footer: {
        display: 'flex',
        gap: '1rem'
      }
    }}>
        <Drawer.Header>
          <h2 style={{
          marginBlock: 0
        }}>Drawer controlled by form</h2>

          <Button css={{
          padding: '0.25rem',
          '& svg': {
            width: 'fit-content !important'
          }
        }} type='button' variant='ghost' onClick={handleCloseDrawer}>
            <Cross />
          </Button>
        </Drawer.Header>

        <form id='form-in-drawer' method='dialog' onSubmit={handleFormSubmit}>
          <h3>Drawer Form</h3>

          <label htmlFor='keyword'>Keyword</label>
          <input type='search' name='keyword' id='keyword' placeholder='Enter anything' />
          <br />

          <label htmlFor='keepValue'>Keep form value </label>
          <input name='keep' type='checkbox' id='keepValue' style={{
          marginTop: '1rem'
        }} />
        </form>

        <section style={{
        height: '50vh',
        marginTop: '5rem'
      }}>
          <h3 style={{
          position: 'sticky',
          insetInline: 0,
          top: '-1rem',
          paddingBlock: '1rem',
          marginBlock: 0,
          color: 'var(--cdg-color-primaryText)',
          backgroundColor: 'var(--cdg-color-background)'
        }}>
            Section 1: Very long content here, scroll down ⏬ for more content
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi.
          </p>
        </section>

        <section style={{
        height: '100vh'
      }}>
          <h3 style={{
          position: 'sticky',
          insetInline: 0,
          top: '-1rem',
          paddingBlock: '1rem',
          marginBlock: 0,
          color: 'var(--cdg-color-primaryText)',
          backgroundColor: 'var(--cdg-color-background)'
        }}>
            Section 2: No idea
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            molestiae tenetur in, dicta veniam quisquam iste officia deleniti,
            nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa
            quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem quidem omnis architecto aliquam id dicta dolor magnam,
            sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi
            ratione! Neque doloribus vel esse.
          </p>
        </section>

        <Drawer.Footer>
          <Button variant='secondary' form='form-in-drawer' type='reset' onClick={handleCloseDrawer}>
            Cancel
          </Button>

          <Button form='form-in-drawer' type='submit'>
            Submit
          </Button>
        </Drawer.Footer>
      </Drawer>

      <h4>Position</h4>
      <div className={storiesStyles.container}>
        <Button type='button' leftIcon={<ArrowLeft />} onClick={() => handleChangePosition('left')}>
          Open on the left
        </Button>

        <Button variant='secondary' type='button' onClick={() => handleChangePosition('bottom')}>
          Open on the bottom
        </Button>

        <Button type='button' rightIcon={<ArrowRight />} onClick={() => handleChangePosition('right')}>
          Open on the right
        </Button>
      </div>

      <Drawer className={storiesStyles.drawerExample} open={openDrawerPosition} onClose={() => setOpenDrawerPosition(false)} position={drawerPosition}>
        <Drawer.Header>
          <h2>Drawer {drawerPosition || ''}</h2>
        </Drawer.Header>

        <p>Article contents</p>

        <Button type='button' onClick={() => setOpenDrawerPosition(false)}>
          Close Drawer
        </Button>
      </Drawer>

      <h4>Non-modal mode</h4>
      <p className={storiesStyles.description}>
        A Drawer that has no backdrop and also doesn't render on the top-layer.
        It can <strong>NOT</strong> be closed by pressing the <kbd>ESC</kbd>{' '}
        key.
        <br />
        The content below the non-modal drawer can be interacted.
      </p>

      <Button variant={openDrawerNonModal ? 'danger' : 'secondary'} type='button' onClick={() => setOpenDrawerNonModal(!openDrawerNonModal)}>
        {openDrawerNonModal ? 'Close' : 'Open'} Non-modal Drawer
      </Button>

      <Drawer className={storiesStyles.drawerExample} open={openDrawerNonModal} onClose={() => setOpenDrawerNonModal(false)} drawerMode='non-modal' position={drawerPosition}>
        <Drawer.Header>
          <h2>Non-modal Drawer</h2>
        </Drawer.Header>

        <p>
          <a href='https:developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations' target='_blank'>
            Read more
          </a>{' '}
          about non-modal mode and accessibility considerations.
        </p>

        <div className={storiesStyles.container}>
          <Button type='button' leftIcon={<ArrowLeft />} onClick={() => setDrawerPosition('left')}>
            Open on the left
          </Button>

          <Button variant='secondary' type='button' onClick={() => setDrawerPosition('bottom')}>
            Open on the bottom
          </Button>

          <Button type='button' rightIcon={<ArrowRight />} onClick={() => setDrawerPosition('right')}>
            Open on the right
          </Button>
        </div>

        <Button css={{
        marginTop: '1rem'
      }} type='button' variant='danger' onClick={() => setOpenDrawerNonModal(false)}>
          Close Drawer
        </Button>
      </Drawer>

      <h4>Backdrop styling</h4>
      <p className={storiesStyles.description}>
        We can customize the backdrop of the drawer by using the{' '}
        <code>backdropProps</code> prop, update related CSS variables or
        <br />
        apply styles directly to the <code>::backdrop</code> CSS pseudo-element.
      </p>

      <Button variant='secondary' type='button' onClick={() => setOpenDrawerBackdropCustomized(true)}>
        Open Drawer
      </Button>

      <Drawer className={storiesStyles.drawerExample} open={openDrawerBackdropCustomized} onClose={() => setOpenDrawerBackdropCustomized(false)} styles={{
      header: {
        fontWeight: 600
      },
      content: {
        paddingBlock: 0
      }
    }} backdropProps={{
      blur: 1,
      opacity: 0.9,
      background: 'linear-gradient(-25deg,rgba(238,174,202,0.6) 0%,rgba(148,187,233,0.6) 100%)'
    }}>
        <Drawer.Header>Backdrop styling</Drawer.Header>

        <p>Article contents</p>

        <Drawer.Footer>
          <Button type='button' onClick={() => setOpenDrawerBackdropCustomized(false)}>
            Close Drawer
          </Button>
        </Drawer.Footer>
      </Drawer>
    </div>;
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const J=["Default"];export{a as Default,J as __namedExportsOrder,G as default};
