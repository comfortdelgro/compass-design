import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as s}from"./heart-filled-5f2b210b.js";import{R as I}from"./index-6c164b11.js";import"./index-7972436d.js";import{T as t}from"./index-b1157fd5.js";import{B as d}from"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./pick-child-c116e6b4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";const A=[{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 1",icon:e.jsx(s,{})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 2",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 3",icon:e.jsx(s,{})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 4",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 5",icon:e.jsx(s,{}),isError:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 6",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 7",icon:e.jsx(s,{})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 8",isDisabled:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 9",icon:e.jsx(s,{})},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Item 10",isDisabled:!0}],B=(o,a)=>a(n=>n.filter(l=>l.id!==o)),j=(o,a)=>a(n=>[...n,{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:o}]),E=(o,a,n)=>n(l=>{const i=[...l];return i.forEach((r,c)=>{if(r.id===o){const h={...i[c]};h.value=a,i[c]=h}}),i}),m=()=>{const[o,a]=I.useState(A),n=r=>B(r,a),l=r=>j(r,a),i=(r,c)=>E(r,c,a);return e.jsxs("div",{children:[e.jsx("h3",{children:"Fully Functional"}),e.jsx(t,{label:"Text Label",items:o,icon:e.jsx(s,{}),isRequired:!0,onAdd:l,onEdit:i,onRemove:n,helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"Typeable"}),e.jsx(t,{label:"Text Label",items:o,typeable:!0,collaspable:!0,icon:e.jsx(s,{}),onAdd:l,onEdit:i,onRemove:n,helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"Error"}),e.jsx(t,{label:"Text Label",items:o,icon:e.jsx(s,{}),onAdd:l,onEdit:i,onRemove:n,isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"Positioned Label"}),e.jsx(t,{items:o,onAdd:l,onEdit:i,onRemove:n,labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"No Action"}),e.jsx(t,{label:"Text Label",items:o,onAdd:l,onEdit:i,onRemove:n,helperText:"Helper text"}),e.jsx("h3",{children:"No Helper text and Action"}),e.jsx(t,{label:"Text Label",items:o,onAdd:l,onEdit:i,onRemove:n})]})},x=()=>{const[o,a]=I.useState(A),n=r=>B(r,a),l=r=>j(r,a),i=(r,c)=>E(r,c,a);return e.jsxs("div",{children:[e.jsx("h3",{children:"Fully Functional"}),e.jsx(t,{label:"Text Label",collaspable:!0,isRequired:!0,items:o,icon:e.jsx(s,{}),onAdd:l,onEdit:i,onRemove:n,helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"Typeable"}),e.jsx(t,{label:"Text Label",collaspable:!0,typeable:!0,items:o,icon:e.jsx(s,{}),onAdd:l,onEdit:i,onRemove:n,helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"Error"}),e.jsx(t,{label:"Text Label",collaspable:!0,items:o,icon:e.jsx(s,{}),onAdd:l,onEdit:i,onRemove:n,isErrored:!0,errorMessage:"Error Message",helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"Positioned Label"}),e.jsx(t,{collaspable:!0,items:o,onAdd:l,onEdit:i,onRemove:n,labelPosition:"left",label:"Text Label",helperText:"Helper text",children:e.jsx(t.Action,{children:e.jsx(d,{children:"Call to action"})})}),e.jsx("h3",{children:"No Action"}),e.jsx(t,{label:"Text Label",collaspable:!0,items:o,onAdd:l,onEdit:i,onRemove:n,helperText:"Helper text"}),e.jsx("h3",{children:"No Helper text and Action"}),e.jsx(t,{collaspable:!0,label:"Text Label",items:o,onAdd:l,onEdit:i,onRemove:n})]})},N={title:"Example/Tag Box",component:m,tags:["autodocs"],parameters:{layout:"fullscreen"}};m.__docgenInfo={description:"",methods:[],displayName:"TagBoxs"};x.__docgenInfo={description:"",methods:[],displayName:"Collaspable"};var u,b,p;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [list, setList] = React.useState<Item[]>(items);
  const removeItem = (id: string | number) => onRemove(id, setList);
  const addItem = (value: string) => onAdd(value, setList);
  const editItem = (id: string | number, value: string) => onEdit(id, value, setList);
  return <div>
      <h3>Fully Functional</h3>
      <TagBox label='Text Label' items={list} icon={<HeartFilled />} isRequired onAdd={addItem} onEdit={editItem} onRemove={removeItem} helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>Typeable</h3>
      <TagBox label='Text Label' items={list} typeable collaspable icon={<HeartFilled />} onAdd={addItem} onEdit={editItem} onRemove={removeItem} helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>Error</h3>
      <TagBox label='Text Label' items={list} icon={<HeartFilled />} onAdd={addItem} onEdit={editItem} onRemove={removeItem} isErrored errorMessage='Error Message' helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>Positioned Label</h3>
      <TagBox items={list} onAdd={addItem} onEdit={editItem} onRemove={removeItem} labelPosition='left' label='Text Label' helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>No Action</h3>
      <TagBox label='Text Label' items={list} onAdd={addItem} onEdit={editItem} onRemove={removeItem} helperText='Helper text' />
      <h3>No Helper text and Action</h3>
      <TagBox label='Text Label' items={list} onAdd={addItem} onEdit={editItem} onRemove={removeItem} />
    </div>;
}`,...(p=(b=m.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var g,T,v;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [list, setList] = React.useState<Item[]>(items);
  const removeItem = (id: string | number) => onRemove(id, setList);
  const addItem = (value: string) => onAdd(value, setList);
  const editItem = (id: string | number, value: string) => onEdit(id, value, setList);
  return <div>
      <h3>Fully Functional</h3>
      <TagBox label='Text Label' collaspable isRequired items={list} icon={<HeartFilled />} onAdd={addItem} onEdit={editItem} onRemove={removeItem} helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>Typeable</h3>
      <TagBox label='Text Label' collaspable typeable items={list} icon={<HeartFilled />} onAdd={addItem} onEdit={editItem} onRemove={removeItem} helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>Error</h3>
      <TagBox label='Text Label' collaspable items={list} icon={<HeartFilled />} onAdd={addItem} onEdit={editItem} onRemove={removeItem} isErrored errorMessage='Error Message' helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>Positioned Label</h3>
      <TagBox collaspable items={list} onAdd={addItem} onEdit={editItem} onRemove={removeItem} labelPosition='left' label='Text Label' helperText='Helper text'>
        <TagBox.Action>
          <Button>Call to action</Button>
        </TagBox.Action>
      </TagBox>
      <h3>No Action</h3>
      <TagBox label='Text Label' collaspable items={list} onAdd={addItem} onEdit={editItem} onRemove={removeItem} helperText='Helper text' />
      <h3>No Helper text and Action</h3>
      <TagBox collaspable label='Text Label' items={list} onAdd={addItem} onEdit={editItem} onRemove={removeItem} />
    </div>;
}`,...(v=(T=x.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const P=["TagBoxs","Collaspable"];export{x as Collaspable,m as TagBoxs,P as __namedExportsOrder,N as default};
