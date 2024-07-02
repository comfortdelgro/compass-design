import{j as e}from"./jsx-runtime-9ef10904.js";import{C as M}from"./cross-bdcb89a4.js";import{R as i}from"./index-6c164b11.js";import"./index-68dd90e7.js";import{M as n}from"./index-083267d0.js";import{B as t}from"./button-03dcac20.js";import"./string-b39bd50e.js";import"./pick-child-1fb557e7.js";import"./use-dom-ref-7c72e1a5.js";import"./index-8ce02b55.js";import"./index-4593f2b5.js";const r=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Default Modal is Medium sized"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),className:"my-modal-trigger",children:e.jsxs(n,{className:"my-modal",children:[e.jsx(n.Title,{children:"My small title"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{})}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>s(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>s(!1),children:"Do it"})]})]})})]})},d=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)},[y,m]=i.useState(!1),p=()=>{m(!1)},[B,u]=i.useState(!1),h=()=>{u(!1)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Small sized modal"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),size:"sm",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My small title"}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>s(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>s(!1),children:"Do it"})]})]})}),e.jsx("h3",{children:"Medium sized modal"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>m(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:y,handleClose:()=>p==null?void 0:p(),size:"md",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My medium title"}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>m(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>m(!1),children:"Do it"})]})]})}),e.jsx("h3",{children:"Large sized modal"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>u(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:B,handleClose:()=>h==null?void 0:h(),size:"lg",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My large title"}),e.jsxs(n.Description,{children:[a,e.jsx("div",{style:{height:"40rem",backgroundColor:"grey",margin:"2rem",borderRadius:"1rem"}})]}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>u(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>u(!1),children:"Do it"})]})]})})]})},S=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Child"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),className:"parent-modal-trigger",children:e.jsxs(n,{css:{width:"20rem"},children:[e.jsx(n.Title,{children:"My child modal"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{})}),e.jsx(n.Description,{children:a}),e.jsx(n.Actions,{children:e.jsx(t,{variant:"secondary",onPress:()=>s(!1),children:"Cancel"})})]})})]})},c=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Nested Modal"}),e.jsx(t,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>s(!0),"data-target":"parent-modal",children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),className:"my-modal-trigger",id:"parent-modal",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My parent modal"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{})}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{variant:"secondary",onPress:()=>s(!1),children:"Cancel"}),e.jsx(S,{})]})]})})]})},E={title:"Example/Modal",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};r.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};c.__docgenInfo={description:"",methods:[],displayName:"NestedModal"};var g,O,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [defaultOpen, setDefaultOpen] = React.useState(false);
  const handleDefaultClose = () => {
    setDefaultOpen(false);
  };
  return <div>
      <h3>Default Modal is Medium sized</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setDefaultOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger isOpen={defaultOpen} handleClose={() => handleDefaultClose?.()} className='my-modal-trigger'>
        <Modal className='my-modal'>
          <Modal.Title>My small title</Modal.Title>
          <Modal.CloseIcon>
            <Cross />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>
            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </div>;
}`,...(f=(O=r.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var x,j,C;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [smallOpen, setSmallOpen] = React.useState(false);
  const handleSmallClose = () => {
    setSmallOpen(false);
  };
  const [mediumOpen, setMediumOpen] = React.useState(false);
  const handleMediumClose = () => {
    setMediumOpen(false);
  };
  const [largeOpen, setLargeOpen] = React.useState(false);
  const handleLargeClose = () => {
    setLargeOpen(false);
  };
  return <div>
      <h3>Small sized modal</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setSmallOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger isOpen={smallOpen} handleClose={() => handleSmallClose?.()} size='sm'>
        <Modal>
          <Modal.Title>My small title</Modal.Title>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setSmallOpen(false)}>Cancel</Button>
            <Button onPress={() => setSmallOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>

      <h3>Medium sized modal</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setMediumOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger isOpen={mediumOpen} handleClose={() => handleMediumClose?.()} size='md'>
        <Modal>
          <Modal.Title>My medium title</Modal.Title>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setMediumOpen(false)}>Cancel</Button>
            <Button onPress={() => setMediumOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>

      <h3>Large sized modal</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setLargeOpen(true)}>
        Open Modal
      </Button>
      <Modal.Trigger isOpen={largeOpen} handleClose={() => handleLargeClose?.()} size='lg'>
        <Modal>
          <Modal.Title>My large title</Modal.Title>
          <Modal.Description>
            {lorem}
            <div style={{
            height: '40rem',
            backgroundColor: 'grey',
            margin: '2rem',
            borderRadius: '1rem'
          }} />
          </Modal.Description>
          <Modal.Actions>
            <Button onPress={() => setLargeOpen(false)}>Cancel</Button>
            <Button onPress={() => setLargeOpen(false)}>Do it</Button>
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </div>;
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,P,T;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [parentOpen, setParentOpen] = React.useState(false);
  const handleParentClose = () => {
    setParentOpen(false);
  };
  return <div>
      <h3>Nested Modal</h3>
      <Button variant='secondary' css={{
      width: '7.8rem'
    }} onPress={() => setParentOpen(true)} data-target='parent-modal' // This is needed for accessibility. When modal unmouts, focus will be set to this element
    >
        Open Modal
      </Button>
      <Modal.Trigger isOpen={parentOpen} handleClose={() => handleParentClose?.()} className='my-modal-trigger' id='parent-modal'>
        <Modal>
          <Modal.Title>My parent modal</Modal.Title>
          <Modal.CloseIcon>
            <Cross />
          </Modal.CloseIcon>
          <Modal.Description>{lorem}</Modal.Description>
          <Modal.Actions>
            <Button variant='secondary' onPress={() => setParentOpen(false)}>
              Cancel
            </Button>
            <ChildModal />
          </Modal.Actions>
        </Modal>
      </Modal.Trigger>
    </div>;
}`,...(T=(P=c.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const V=["Default","Variants","NestedModal"];export{r as Default,c as NestedModal,d as Variants,V as __namedExportsOrder,E as default};
