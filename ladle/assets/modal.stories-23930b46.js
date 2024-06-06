import{j as e}from"./jsx-runtime-ea7736fc.js";import{C as M}from"./cross-bdcb89a4.js";import{R as i}from"./index-6c164b11.js";import"./index-7972436d.js";import{M as n}from"./index-10d8d6ed.js";import{B as t}from"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./pick-child-c116e6b4.js";import"./use-dom-ref-7c72e1a5.js";import"./index-8ce02b55.js";import"./index-4593f2b5.js";import"./string-de12cf5f.js";const d=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Default Modal is Medium sized"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),className:"my-modal-trigger",children:e.jsxs(n,{className:"my-modal",children:[e.jsx(n.Title,{children:"My small title"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{})}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>s(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>s(!1),children:"Do it"})]})]})})]})},c=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)},[p,r]=i.useState(!1),g=()=>{r(!1)},[I,h]=i.useState(!1),O=()=>{h(!1)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Small sized modal"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),size:"sm",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My small title"}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>s(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>s(!1),children:"Do it"})]})]})}),e.jsx("h3",{children:"Medium sized modal"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>r(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:p,handleClose:()=>g==null?void 0:g(),size:"md",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My medium title"}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>r(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>r(!1),children:"Do it"})]})]})}),e.jsx("h3",{children:"Large sized modal"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>h(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:I,handleClose:()=>O==null?void 0:O(),size:"lg",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My large title"}),e.jsxs(n.Description,{children:[a,e.jsx("div",{style:{height:"40rem",backgroundColor:"grey",margin:"2rem",borderRadius:"1rem"}})]}),e.jsxs(n.Actions,{children:[e.jsx(t,{onPress:()=>h(!1),children:"Cancel"}),e.jsx(t,{onPress:()=>h(!1),children:"Do it"})]})]})})]})},b=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Child"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),className:"parent-modal-trigger",children:e.jsxs(n,{css:{width:"20rem"},children:[e.jsx(n.Title,{children:"My child modal"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{})}),e.jsx(n.Description,{children:a}),e.jsx(n.Actions,{children:e.jsx(t,{variant:"secondary",onPress:()=>s(!1),children:"Cancel"})})]})})]})},m=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),o=()=>{s(!1)};return e.jsxs("div",{children:[e.jsx("h3",{children:"Nested Modal"}),e.jsx(t,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>s(!0),"data-target":"parent-modal",children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>o==null?void 0:o(),className:"my-modal-trigger",id:"parent-modal",children:e.jsxs(n,{children:[e.jsx(n.Title,{children:"My parent modal"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{})}),e.jsx(n.Description,{children:a}),e.jsxs(n.Actions,{children:[e.jsx(t,{variant:"secondary",onPress:()=>s(!1),children:"Cancel"}),e.jsx(b,{})]})]})})]})},u=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[l,s]=i.useState(!1),[o,p]=i.useState(!1),r=()=>{s(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>s(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:l,handleClose:()=>r==null?void 0:r(),children:e.jsxs(n,{h5:!0,children:[e.jsx(n.Title,{h5:!0,children:"Are you sure that you want to remove “Starbucks, Junction 8”?"}),e.jsx(n.Description,{h5:!0,children:e.jsxs("div",{children:[e.jsx(t,{h5:!0,children:"Remove"}),e.jsx(t,{h5:!0,variant:"danger",children:"Cancel"})]})})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Open Modal with icon close"}),e.jsx(t,{css:{width:"7.8rem"},onPress:()=>p(!0),children:"Open Modal"}),e.jsx(n.Trigger,{isOpen:o,children:e.jsxs(n,{h5:!0,children:[e.jsx(n.Title,{h5:!0,children:"Feedback"}),e.jsx(n.CloseIcon,{children:e.jsx(M,{onClick:()=>p(!1),style:{width:25,height:25,paddingTop:24}})}),e.jsx(n.Description,{h5:!0,children:a})]})})]})]})},J={title:"Example/Modal",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"}};d.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"Variants"};m.__docgenInfo={description:"",methods:[],displayName:"NestedModal"};u.__docgenInfo={description:"",methods:[],displayName:"H5"};var x,j,f;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
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
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var C,T,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var P,y,B;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(B=(y=m.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var v,S,w;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [isOpenModal2, setIsOpenModal2] = React.useState(false);
  const handleModalClose = () => {
    setIsOpenModal(false);
  };
  return <>
      <div>
        <h3>Default</h3>
        <Button css={{
        width: '7.8rem'
      }} onPress={() => setIsOpenModal(true)}>
          Open Modal
        </Button>
        <Modal.Trigger isOpen={isOpenModal} handleClose={() => handleModalClose?.()}>
          <Modal h5>
            <Modal.Title h5>
              Are you sure that you want to remove “Starbucks, Junction 8”?
            </Modal.Title>
            <Modal.Description h5>
              <div>
                <Button h5>Remove</Button>
                <Button h5 variant='danger'>
                  Cancel
                </Button>
              </div>
            </Modal.Description>
          </Modal>
        </Modal.Trigger>
      </div>
      <div>
        <h3>Open Modal with icon close</h3>
        <Button css={{
        width: '7.8rem'
      }} onPress={() => setIsOpenModal2(true)}>
          Open Modal
        </Button>
        <Modal.Trigger isOpen={isOpenModal2}>
          <Modal h5>
            <Modal.Title h5>Feedback</Modal.Title>
            <Modal.CloseIcon>
              <Cross onClick={() => setIsOpenModal2(false)} style={{
              width: 25,
              height: 25,
              paddingTop: 24
            }} />
            </Modal.CloseIcon>
            <Modal.Description h5>{lorem}</Modal.Description>
          </Modal>
        </Modal.Trigger>
      </div>
    </>;
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const W=["Default","Variants","NestedModal","H5"];export{d as Default,u as H5,m as NestedModal,c as Variants,W as __namedExportsOrder,J as default};
