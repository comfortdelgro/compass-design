import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as m}from"./heart-filled-5f2b210b.js";import{R as r}from"./index-6c164b11.js";import"./index-7972436d.js";import{C as b}from"./index-e7f2b220.js";import{T as y}from"./index-898776bc.js";import{T as p}from"./index-9b621ca4.js";import{D as i}from"./index-579e501f.js";import{T as P}from"./index-9fb2cabb.js";import{B as n}from"./button-be34d763.js";import{D as B}from"./date-picker-2b47ac6c.js";import"./useCurrentTheme-474309da.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";import"./pick-child-c116e6b4.js";import"./string-de12cf5f.js";import"./index-8ce02b55.js";import"./index-4593f2b5.js";import"./calendar-17db7acc.js";import"./arrow-right-20c3256f.js";import"./NumberParser-bd499a26.js";const s=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[o,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx("h3",{children:"Default dialog is confirmation variant"}),e.jsx(n,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Dialog"}),e.jsx(i.Trigger,{isOpen:o,handleClose:()=>t(!1),children:e.jsxs(i,{children:[e.jsx(i.Title,{children:"My title"}),e.jsxs(i.Description,{children:[a,e.jsx("input",{type:"file",id:"avatar",name:"avatar",accept:"image/png, image/jpeg"})]}),e.jsxs(i.Actions,{children:[e.jsx(n,{onPress:()=>t(!1),children:"Cancel"}),e.jsx(n,{onPress:()=>t(!1),children:"Do it"})]})]})})]})},A=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[o,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Child"}),e.jsx(i.Trigger,{isOpen:o,handleClose:()=>t(!1),children:e.jsxs(i,{css:{width:"20rem"},children:[e.jsx(i.Title,{children:"My Child dialog"}),e.jsx(i.Description,{children:a}),e.jsx(i.Actions,{children:e.jsx(n,{variant:"secondary",onPress:()=>t(!1),children:"Cancel"})})]})})]})},u=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[o,t]=r.useState(!1);return e.jsxs("div",{children:[e.jsx("h3",{children:"Nested Dialog"}),e.jsx(n,{variant:"secondary",css:{width:"7.8rem"},onPress:()=>t(!0),"data-target":"parent-dialog",children:"Open Parent"}),e.jsx(i.Trigger,{isOpen:o,handleClose:()=>t(!1),id:"parent-dialog",children:e.jsxs(i,{children:[e.jsx(i.Title,{children:"My Parent dialog"}),e.jsx(i.Description,{children:a}),e.jsxs(i.Actions,{children:[e.jsx(n,{variant:"secondary",onPress:()=>t(!1),children:"Cancel"}),e.jsx(A,{})]})]})})]})},d=()=>{const a="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",[o,t]=r.useState(!1),[T,l]=r.useState(!1),[C,c]=r.useState(!1);return e.jsxs("div",{children:[e.jsx("h3",{children:"Confirmation dialog"}),e.jsx(n,{css:{width:"7.8rem"},onPress:()=>t(!0),children:"Open Dialog"}),e.jsx(i.Trigger,{isOpen:o,handleClose:()=>t(!1),variant:"confirmation",children:e.jsxs(i,{children:[e.jsx(i.Title,{children:"My title"}),e.jsx(i.Description,{children:a}),e.jsxs(i.Actions,{children:[e.jsx(n,{onPress:()=>t(!1),children:"Cancel"}),e.jsx(n,{onPress:()=>t(!1),children:"Do it"})]})]})}),e.jsx("h3",{children:"Alert dialog"}),e.jsx(n,{css:{width:"7.8rem"},onPress:()=>l(!0),children:"Open Dialog"}),e.jsx(i.Trigger,{isOpen:T,handleClose:()=>l(!1),variant:"alert",children:e.jsxs(i,{children:[e.jsx(i.Title,{children:"My title"}),e.jsx(i.Description,{children:a}),e.jsx(i.Actions,{children:e.jsx(n,{onPress:()=>l(!1),children:"Ok"})}),e.jsx(i.Icon,{children:e.jsx(m,{})})]})}),e.jsx("h3",{children:"Custom & Large Content Dialog"}),e.jsx(n,{css:{width:"7.8rem"},onPress:()=>c(!0),children:"Open Dialog"}),e.jsx(i.Trigger,{isOpen:C,handleClose:()=>c(!1),children:e.jsxs(i,{css:{overflow:"hidden",".cdg-dialog-content":{height:"40rem"}},children:[e.jsx(i.Title,{children:"My title"}),e.jsx(i.Description,{children:e.jsxs("div",{style:{gap:"$4"},children:[e.jsx(B,{css:{width:"100%"},label:"Date picker"}),e.jsx(y,{label:"Text field"}),e.jsx(P,{css:{width:"100%",textarea:{width:"100%",minHeight:"120px"}},label:"Text area"}),e.jsx(b,{children:"I agree to this term and condition"}),e.jsx(p.Label,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit"}),e.jsx(p.Label,{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"})]})}),e.jsxs(i.Actions,{isMobile:!0,children:[e.jsx(n,{onPress:()=>l(!1),variant:"ghost",children:"Cancel"}),e.jsx(n,{onPress:()=>l(!1),children:"Ok"})]}),e.jsx(i.Icon,{children:e.jsx(m,{})})]})})]})},Y={title:"Example/Dialog",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};u.__docgenInfo={description:"",methods:[],displayName:"NestedDialog"};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};var g,h,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [defaultOpen, setDefaultOpen] = React.useState(false);
  return <div>
      <h3>Default dialog is confirmation variant</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setDefaultOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger isOpen={defaultOpen} handleClose={() => setDefaultOpen(false)}>
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>
            {lorem}
            <input type='file' id='avatar' name='avatar' accept='image/png, image/jpeg' />
          </Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setDefaultOpen(false)}>Cancel</Button>
            <Button onPress={() => setDefaultOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </div>;
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var D,x,q;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [defaultOpen, setDefaultOpen] = React.useState(false);
  return <div>
      <h3>Nested Dialog</h3>
      <Button variant='secondary' css={{
      width: '7.8rem'
    }} onPress={() => setDefaultOpen(true)} data-target='parent-dialog' // this is required for the focus trap to work
    >
        Open Parent
      </Button>
      <Dialog.Trigger isOpen={defaultOpen} handleClose={() => setDefaultOpen(false)} id='parent-dialog' // this is required for the focus trap to work
    >
        <Dialog>
          <Dialog.Title>My Parent dialog</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>
              Cancel
            </Button>
            <Child />
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>
    </div>;
}`,...(q=(x=u.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var v,O,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.';
  const [confirmationOpen, setConfirmationOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [customOpen, setCustomOpen] = React.useState(false);
  return <div>
      <h3>Confirmation dialog</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setConfirmationOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger isOpen={confirmationOpen} handleClose={() => setConfirmationOpen(false)} variant='confirmation'>
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setConfirmationOpen(false)}>Cancel</Button>
            <Button onPress={() => setConfirmationOpen(false)}>Do it</Button>
          </Dialog.Actions>
        </Dialog>
      </Dialog.Trigger>

      <h3>Alert dialog</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setAlertOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger isOpen={alertOpen} handleClose={() => setAlertOpen(false)} variant='alert'>
        <Dialog>
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>{lorem}</Dialog.Description>
          <Dialog.Actions>
            <Button onPress={() => setAlertOpen(false)}>Ok</Button>
          </Dialog.Actions>
          <Dialog.Icon>
            <HeartFilled />
          </Dialog.Icon>
        </Dialog>
      </Dialog.Trigger>

      <h3>Custom & Large Content Dialog</h3>
      <Button css={{
      width: '7.8rem'
    }} onPress={() => setCustomOpen(true)}>
        Open Dialog
      </Button>
      <Dialog.Trigger isOpen={customOpen} handleClose={() => setCustomOpen(false)}>
        <Dialog css={{
        overflow: 'hidden',
        '.cdg-dialog-content': {
          height: '40rem'
        }
      }}>
          {/* css above is to set the border-radius of the scroll bar  */}
          <Dialog.Title>My title</Dialog.Title>
          <Dialog.Description>
            <div style={{
            gap: '$4'
          }}>
              <DatePicker css={{
              width: '100%'
            }} label='Date picker' />
              <TextField label='Text field' />
              <Textarea css={{
              width: '100%',
              textarea: {
                width: '100%',
                minHeight: '120px'
              }
            }} label='Text area' />
              <Checkbox>I agree to this term and condition</Checkbox>
              <Typography.Label>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit
              </Typography.Label>
              <Typography.Label>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Typography.Label>
            </div>
          </Dialog.Description>
          <Dialog.Actions isMobile>
            <Button onPress={() => setAlertOpen(false)} variant='ghost'>
              Cancel
            </Button>
            <Button onPress={() => setAlertOpen(false)}>Ok</Button>
          </Dialog.Actions>
          <Dialog.Icon>
            <HeartFilled />
          </Dialog.Icon>
        </Dialog>
      </Dialog.Trigger>
    </div>;
}`,...(j=(O=d.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const Z=["Default","NestedDialog","Variants"];export{s as Default,u as NestedDialog,d as Variants,Z as __namedExportsOrder,Y as default};
