import{j as e}from"./jsx-runtime-ea7736fc.js";import{C as S}from"./cross-bdcb89a4.js";import{r as o}from"./index-6c164b11.js";import"./index-c28b9cd4.js";import{D as r}from"./index-c444fdb6.js";import{B as n}from"./button-8faa8e19.js";import"./string-cf4adbb3.js";import"./use-dom-ref-7c72e1a5.js";const N=(s,t)=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:t,...s},o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M31 16C31 17.2906 30.1009 18.3333 28.9132 18.3333H8.33368L15.406 26.0187C16.2447 26.9302 16.2447 28.4068 15.406 29.3182C14.9833 29.774 14.4331 30 13.8828 30C13.3326 30 12.7837 29.7721 12.365 29.3164L1.62906 17.6497C0.790313 16.7383 0.790313 15.2617 1.62906 14.3503L12.365 2.68359C13.2038 1.77214 14.5626 1.77214 15.4013 2.68359C16.24 3.59505 16.24 5.07161 15.4013 5.98307L8.33368 13.6667H28.9132C30.1009 13.6667 31 14.7094 31 16Z"}))),O=o.forwardRef(N),f=O,E=(s,t)=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:t,...s},o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M30.3718 17.6487L19.657 29.3146C19.2418 29.774 18.6927 30 18.1435 30C17.5944 30 17.0466 29.7722 16.6287 29.3165C15.7916 28.4051 15.7916 26.9286 16.6287 26.0172L23.6884 18.3341H3.14285C1.95953 18.3341 1 17.2915 1 16.0009C1 14.7104 1.95953 13.6677 3.14285 13.6677H23.6884L16.6301 5.98281C15.793 5.07141 15.793 3.59495 16.6301 2.68355C17.4672 1.77215 18.8232 1.77215 19.6603 2.68355L30.3751 14.3495C31.2089 15.2645 31.2089 16.7373 30.3718 17.6487Z"}))),P=o.forwardRef(E),y=P,T="_drawerStories_nnyr4_1",_="_description_nnyr4_13",q="_container_nnyr4_18",L="_drawerExample_nnyr4_30",F="_previewCode_nnyr4_48",a={drawerStories:T,description:_,container:q,drawerExample:L,previewCode:F};function i(){const[s,t]=o.useState(!1),[C,k]=o.useState(""),[w,d]=o.useState(!1),[j,m]=o.useState(!1),[p,c]=o.useState(void 0),v=l=>{l.preventDefault();const g=new FormData(l.currentTarget);k(g.get("keyword")||""),g.get("keep")||l.currentTarget.reset(),u()},u=()=>{t(!1)},B=()=>{t(!1)},h=l=>{c(l),m(!0)};return e.jsxs("div",{className:a.drawerStories,children:[e.jsx("h4",{children:"Drawer"}),e.jsxs("p",{children:["Drawer form value: ",C]}),e.jsx(n,{type:"button",onClick:()=>t(!0),children:"Open Drawer"}),e.jsxs(r,{className:a.drawerExample,open:s,onClose:B,children:[e.jsxs(r.Header,{children:[e.jsx("h2",{style:{marginBlock:0},children:"Drawer controlled by form"}),e.jsx(n,{css:{padding:"0.25rem","& svg":{width:"fit-content !important"}},type:"button",variant:"ghost",onClick:u,children:e.jsx(S,{})})]}),e.jsxs("form",{id:"form-in-drawer",method:"dialog",onSubmit:v,children:[e.jsx("h3",{children:"Drawer Form"}),e.jsx("label",{htmlFor:"keyword",children:"Keyword"}),e.jsx("input",{type:"search",name:"keyword",id:"keyword",placeholder:"Enter anything"}),e.jsx("br",{}),e.jsx("label",{htmlFor:"keepValue",children:"Keep form value "}),e.jsx("input",{name:"keep",type:"checkbox",id:"keepValue",style:{marginTop:"1rem"}})]}),e.jsxs("section",{style:{height:"50vh",marginTop:"5rem"},children:[e.jsx("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,color:"var(--cdg-color-primaryText)",backgroundColor:"var(--cdg-color-background)"},children:"Section 1: Very long content here, scroll down ⏬ for more content"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi."})]}),e.jsxs("section",{style:{height:"100vh"},children:[e.jsx("h3",{style:{position:"sticky",insetInline:0,top:"-1rem",paddingBlock:"1rem",marginBlock:0,color:"var(--cdg-color-primaryText)",backgroundColor:"var(--cdg-color-background)"},children:"Section 2: No idea"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo molestiae tenetur in, dicta veniam quisquam iste officia deleniti, nemo cum nesciunt repudiandae fugiat sapiente nihil eius ut culpa quis modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem omnis architecto aliquam id dicta dolor magnam, sapiente, itaque quaerat laboriosam reiciendis placeat tempore animi ratione! Neque doloribus vel esse."})]}),e.jsxs(r.Footer,{css:{display:"flex",gap:"1rem"},children:[e.jsx(n,{variant:"secondary",form:"form-in-drawer",type:"reset",onClick:u,children:"Cancel"}),e.jsx(n,{form:"form-in-drawer",type:"submit",children:"Submit"})]})]}),e.jsx("h4",{children:"Position"}),e.jsxs("div",{className:a.container,children:[e.jsx(n,{type:"button",leftIcon:e.jsx(f,{}),onClick:()=>h("left"),children:"Open on the left"}),e.jsx(n,{variant:"secondary",type:"button",onClick:()=>h("bottom"),children:"Open on the bottom"}),e.jsx(n,{type:"button",rightIcon:e.jsx(y,{}),onClick:()=>h("right"),children:"Open on the right"})]}),e.jsxs(r,{className:a.drawerExample,open:j,onClose:()=>m(!1),position:p,children:[e.jsx(r.Header,{children:e.jsxs("h2",{children:["Drawer ",p||""]})}),e.jsx("p",{children:"Article contents"}),e.jsx(n,{type:"button",onClick:()=>m(!1),children:"Close Drawer"})]}),e.jsx("h4",{children:"Non-modal mode"}),e.jsxs("p",{className:a.description,children:["A Drawer that has no backdrop and also doesn't render on the top-layer. It can ",e.jsx("strong",{children:"NOT"})," be closed by pressing the ",e.jsx("kbd",{children:"ESC"})," ","key.",e.jsx("br",{}),"The content below the non-modal drawer can be interacted."]}),e.jsx(n,{type:"button",onClick:()=>d(!w),children:"Toggle Non-modal Drawer"}),e.jsxs(r,{className:a.drawerExample,open:w,onClose:()=>d(!1),drawerMode:"non-modal",position:p,children:[e.jsx(r.Header,{children:e.jsx("h2",{children:"Non-modal Drawer"})}),e.jsxs("p",{children:[e.jsx("a",{href:"https:developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog#accessibility_considerations",target:"_blank",children:"Read more"})," ","about non-modal mode and accessibility considerations."]}),e.jsxs("div",{className:a.container,children:[e.jsx(n,{type:"button",leftIcon:e.jsx(f,{}),onClick:()=>c("left"),children:"Open on the left"}),e.jsx(n,{variant:"secondary",type:"button",onClick:()=>c("bottom"),children:"Open on the bottom"}),e.jsx(n,{type:"button",rightIcon:e.jsx(y,{}),onClick:()=>c("right"),children:"Open on the right"})]}),e.jsx(n,{css:{marginTop:"1rem"},type:"button",variant:"danger",onClick:()=>d(!1),children:"Close Drawer"})]})]})}const U={title:"Example/Drawer",tags:["autodocs"],component:i,parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Default"};var D,b,x;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`function Default() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [openDrawerNonModal, setOpenDrawerNonModal] = useState(false);
  const [openDrawerPosition, setOpenDrawerPosition] = useState(false);
  const [drawerPosition, setDrawerPosition] = useState<DrawerProps['position']>(undefined);
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

      <Drawer className={storiesStyles.drawerExample} open={openDrawer} onClose={listenOnCloseDrawer}>
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

        <Drawer.Footer css={{
        display: 'flex',
        gap: '1rem'
      }}>
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

      <Button type='button' onClick={() => setOpenDrawerNonModal(!openDrawerNonModal)}>
        Toggle Non-modal Drawer
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
    </div>;
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,U as default};
