import{j as o}from"./jsx-runtime-9ef10904.js";import{A as n}from"./index-946d64ba.js";import{F as t}from"./index-1dc17834.js";import"./index-68dd90e7.js";import{D as l}from"./index-f6675da2.js";import{S as e}from"./index-0e37f839.js";import{R as r}from"./index-cb5ba4ca.js";import{B as p}from"./button-03dcac20.js";import"./index-6c164b11.js";import"./string-b39bd50e.js";import"./use-dom-ref-7c72e1a5.js";import"./layout-71be561b.js";import"./color-214871c7.js";import"./pick-child-1fb557e7.js";import"./index-268c0602.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./useId-133e3351.js";const i=()=>o.jsx("div",{style:{padding:"20px"},children:o.jsxs(t,{children:[o.jsx(t.Row,{columns:3,children:o.jsx(t.Group,{children:o.jsxs(e.Select,{label:"Salutation",children:[o.jsx(e.Item,{children:"Mr"},"mr"),o.jsx(e.Item,{children:"Ms"},"ms"),o.jsx(e.Item,{children:"Mrs"},"mrs")]})})}),o.jsxs(t.Row,{columns:3,breaksOnSmall:!0,children:[o.jsx(t.Group,{children:o.jsx(r,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})}),o.jsx(t.Group,{children:o.jsx(r,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})}),o.jsx(t.Group,{children:o.jsx(r,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})})]}),o.jsxs(t.Row,{columns:2,breaksOnSmall:!0,children:[o.jsx(t.Group,{children:o.jsx(t.Explaination,{title:"Create New Time/Date Policy",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`})}),o.jsx(t.Group,{children:o.jsx(r,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})})]}),o.jsx(l,{}),o.jsx(n,{children:o.jsx(n.CenterGroup,{children:o.jsx(p,{type:"submit",children:"Submit"})})})]})}),I={title:"Example/Form Layout",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var s,a,m;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '20px'
  }}>
      <FormLayout>
        <FormLayout.Row columns={3}>
          <FormLayout.Group>
            <Dropdown.Select label='Salutation'>
              <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>
              <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>
              <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>
            </Dropdown.Select>
          </FormLayout.Group>
        </FormLayout.Row>
        <FormLayout.Row columns={3} breaksOnSmall={true}>
          <FormLayout.Group>
            <Radio variant='outlined' label={'option'} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' id='item1' />
          </FormLayout.Group>
          <FormLayout.Group>
            <Radio variant='outlined' label={'option'} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' id='item1' />
          </FormLayout.Group>
          <FormLayout.Group>
            <Radio variant='outlined' label={'option'} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' id='item1' />
          </FormLayout.Group>
        </FormLayout.Row>
        <FormLayout.Row columns={2} breaksOnSmall={true}>
          <FormLayout.Group>
            <FormLayout.Explaination title={'Create New Time/Date Policy'} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          </FormLayout.Group>
          <FormLayout.Group>
            <Radio variant='outlined' label={'option'} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' id='item1' />
          </FormLayout.Group>
        </FormLayout.Row>
        <Divider />
        <ActionBar>
          <ActionBar.CenterGroup>
            <Button type='submit'>Submit</Button>
          </ActionBar.CenterGroup>
        </ActionBar>
      </FormLayout>
    </div>;
}`,...(m=(a=i.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const T=["Basic"];export{i as Basic,T as __namedExportsOrder,I as default};
