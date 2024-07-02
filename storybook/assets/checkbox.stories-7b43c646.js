import{j as e}from"./jsx-runtime-9ef10904.js";import{r as m}from"./index-6c164b11.js";import{C as d}from"./index-3b7e403c.js";import"./useCurrentTheme-3076cf6b.js";import"./string-b39bd50e.js";import"./use-dom-ref-7c72e1a5.js";const t=()=>e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1. Default"}),e.jsxs("div",{children:[e.jsx(d,{isSelected:!1,children:"Unselected"}),e.jsx(d,{isSelected:!0,children:"Selected"}),e.jsx(d,{isDisabled:!0,children:"Unselected (disabled)"}),e.jsx(d,{isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e.jsx(d,{isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e.jsx(d,{isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"}),e.jsx(d,{isSelected:!0,isReadOnly:!0,children:"Read only"})]}),e.jsx("h3",{children:"2. Rounded"}),e.jsxs("div",{children:[e.jsx(d,{variant:"rounded",isSelected:!1,children:"Unselected"}),e.jsx(d,{variant:"rounded",isSelected:!0,children:"Selected"}),e.jsx(d,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),e.jsx(d,{variant:"rounded",isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),e.jsx(d,{variant:"rounded",isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),e.jsx(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"})]}),e.jsx("h3",{children:"3. Without Labels"}),e.jsxs("div",{children:[e.jsx(d,{}),e.jsx(d,{defaultSelected:!0}),e.jsx(d,{isDisabled:!0}),e.jsx(d,{defaultSelected:!0,isDisabled:!0}),e.jsx(d,{isIndeterminate:!0,defaultSelected:!0}),e.jsx(d,{isIndeterminate:!0,isDisabled:!0,defaultSelected:!0}),e.jsx(d,{variant:"rounded"}),e.jsx(d,{variant:"rounded",defaultSelected:!0}),e.jsx(d,{variant:"rounded",isDisabled:!0}),e.jsx(d,{variant:"rounded",defaultSelected:!0,isDisabled:!0}),e.jsx(d,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0}),e.jsx(d,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0})]}),e.jsx("h3",{children:"4. HTML forms"}),e.jsx("div",{children:e.jsx(d,{name:"newsletter",value:"subscribe",children:"Subscribe"})})]}),n=()=>{const[r,S]=m.useState(!1);return e.jsx(d,{isSelected:r,onChange:()=>S(!r),children:r?"Selected":"Unselected"})},s=()=>e.jsx(d,{defaultSelected:!0,children:"Checkbox"}),I={title:"Example/Checkbox",component:t,tags:["autodocs"],parameters:{layout:"center"}};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};n.__docgenInfo={description:"",methods:[],displayName:"Controlled"};s.__docgenInfo={description:"",methods:[],displayName:"Uncontrolled"};var i,a,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,o,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState(false);
  return <Checkbox isSelected={isSelected} onChange={() => setIsSelected(!isSelected)}>
      {isSelected ? 'Selected' : 'Unselected'}
    </Checkbox>;
}`,...(u=(o=n.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var b,h,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <Checkbox defaultSelected>Checkbox</Checkbox>;
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const D=["Variants","Controlled","Uncontrolled"];export{n as Controlled,s as Uncontrolled,t as Variants,D as __namedExportsOrder,I as default};
