import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as f}from"./index-6c164b11.js";import{C as t}from"./index-e7f2b220.js";import"./useCurrentTheme-474309da.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const n=()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1. Default"}),e.jsxs("div",{children:[e.jsx(t,{isSelected:!1,children:"Unselected"}),e.jsx(t,{isSelected:!0,children:"Selected"}),e.jsx(t,{isDisabled:!0,children:"Unselected (disabled)"}),e.jsx(t,{isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e.jsx(t,{isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e.jsx(t,{isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"}),e.jsx(t,{isSelected:!0,isReadOnly:!0,children:"Read only"})]}),e.jsx("h3",{children:"2. Rounded"}),e.jsxs("div",{children:[e.jsx(t,{variant:"rounded",isSelected:!1,children:"Unselected"}),e.jsx(t,{variant:"rounded",isSelected:!0,children:"Selected"}),e.jsx(t,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),e.jsx(t,{variant:"rounded",isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e.jsx(t,{variant:"rounded",isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e.jsx(t,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"})]}),e.jsx("h3",{children:"3. Without Labels"}),e.jsxs("div",{children:[e.jsx(t,{}),e.jsx(t,{defaultSelected:!0}),e.jsx(t,{isDisabled:!0}),e.jsx(t,{defaultSelected:!0,isDisabled:!0}),e.jsx(t,{isIndeterminate:!0,defaultSelected:!0}),e.jsx(t,{isIndeterminate:!0,isDisabled:!0,defaultSelected:!0}),e.jsx(t,{variant:"rounded"}),e.jsx(t,{variant:"rounded",defaultSelected:!0}),e.jsx(t,{variant:"rounded",isDisabled:!0}),e.jsx(t,{variant:"rounded",defaultSelected:!0,isDisabled:!0}),e.jsx(t,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0}),e.jsx(t,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0})]}),e.jsx("h3",{children:"4. HTML forms"}),e.jsx("div",{children:e.jsx(t,{name:"newsletter",value:"subscribe",children:"Subscribe"})})]}),s=()=>{const[d,a]=f.useState(!1);return e.jsx(t,{isSelected:d,onChange:()=>a(!d),children:d?"Selected":"Unselected"})},i=()=>e.jsx(t,{defaultSelected:!0,children:"Checkbox"}),r=()=>{const[d,a]=f.useState(!1);return e.jsx(t,{isSelected:d,variant:"h5",onChange:()=>a(!d),children:e.jsx("b",{style:{fontSize:"16px",lineHeight:"24px"},children:"I'm picking with/for a child below 1.35m"})})},y={title:"Example/Checkbox",component:n,tags:["autodocs"],parameters:{layout:"center"}};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};i.__docgenInfo={description:"",methods:[],displayName:"Uncontrolled"};r.__docgenInfo={description:"",methods:[],displayName:"H5Checkbox"};var c,l,o;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <>
      <h3>1. Default</h3>
      <div>
        <Checkbox isSelected={false}>Unselected</Checkbox>
        <Checkbox isSelected>Selected</Checkbox>
        <Checkbox isDisabled>Unselected (disabled)</Checkbox>
        <Checkbox isSelected isDisabled>
          Selected (disabled)
        </Checkbox>
        <Checkbox isIndeterminate isSelected>
          Indeterminate
        </Checkbox>
        <Checkbox isIndeterminate isDisabled isSelected>
          Indeterminate (disabled)
        </Checkbox>
        <Checkbox isSelected isReadOnly>
          Read only
        </Checkbox>
      </div>

      <h3>2. Rounded</h3>
      <div>
        <Checkbox variant='rounded' isSelected={false}>
          Unselected
        </Checkbox>
        <Checkbox variant='rounded' isSelected>
          Selected
        </Checkbox>
        <Checkbox variant='rounded' isDisabled>
          Unselected (disabled)
        </Checkbox>
        <Checkbox variant='rounded' isSelected isDisabled>
          Selected (disabled)
        </Checkbox>
        <Checkbox variant='rounded' isIndeterminate isSelected>
          Indeterminate
        </Checkbox>
        <Checkbox variant='rounded' isIndeterminate isDisabled isSelected>
          Indeterminate (disabled)
        </Checkbox>
      </div>

      <h3>3. Without Labels</h3>
      <div>
        <Checkbox />
        <Checkbox defaultSelected />
        <Checkbox isDisabled />
        <Checkbox defaultSelected isDisabled />
        <Checkbox isIndeterminate defaultSelected />
        <Checkbox isIndeterminate isDisabled defaultSelected />
        <Checkbox variant='rounded' />
        <Checkbox variant='rounded' defaultSelected />
        <Checkbox variant='rounded' isDisabled />
        <Checkbox variant='rounded' defaultSelected isDisabled />
        <Checkbox variant='rounded' isIndeterminate defaultSelected />
        <Checkbox variant='rounded' isIndeterminate isDisabled defaultSelected />
      </div>

      <h3>4. HTML forms</h3>
      <div>
        <Checkbox name='newsletter' value='subscribe'>
          Subscribe
        </Checkbox>
      </div>
    </>;
}`,...(o=(l=n.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var u,h,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState(false);
  return <Checkbox isSelected={isSelected} onChange={() => setIsSelected(!isSelected)}>
      {isSelected ? 'Selected' : 'Unselected'}
    </Checkbox>;
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,S,m;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Checkbox defaultSelected>Checkbox</Checkbox>;
}`,...(m=(S=i.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var C,k,p;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Checkbox isSelected={checked} variant='h5' onChange={() => setChecked(!checked)}>
      <b style={{
      fontSize: '16px',
      lineHeight: '24px'
    }}>
        I'm picking with/for a child below 1.35m
      </b>
    </Checkbox>;
}`,...(p=(k=r.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};const _=["Variants","Controlled","Uncontrolled","H5Checkbox"];export{s as Controlled,r as H5Checkbox,i as Uncontrolled,n as Variants,_ as __namedExportsOrder,y as default};
