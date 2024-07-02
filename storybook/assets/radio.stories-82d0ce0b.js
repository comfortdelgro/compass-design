import{j as i}from"./jsx-runtime-9ef10904.js";import{H as v}from"./heart-filled-5f2b210b.js";import{r as h}from"./index-6c164b11.js";import{R as e}from"./index-cb5ba4ca.js";import"./string-b39bd50e.js";import"./use-dom-ref-7c72e1a5.js";const t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},s=()=>{const[l,u]=h.useState("1");return i.jsxs("div",{style:{...t},children:[i.jsx("h3",{children:"Outlined"}),i.jsx("div",{style:{flexDirection:"row",...t},children:i.jsxs(e.Group,{children:[i.jsx(e,{variant:"outlined",label:i.jsxs(i.Fragment,{children:["test ",i.jsx(v,{})]}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"}),i.jsx(e,{variant:"outlined",label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"}),i.jsx(e,{variant:"outlined",label:"test3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"3",isDisabled:!0})]})}),i.jsx("h3",{children:"Simple"}),i.jsx("div",{style:{flexDirection:"row",...t},children:i.jsxs(e.Group,{children:[i.jsx(e,{variant:"simple",label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{variant:"simple",label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"}),i.jsx(e,{variant:"simple",label:"test3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"3",isDisabled:!0})]})}),i.jsx("h3",{children:"Controlled"}),i.jsxs("h4",{children:["Selected Value: ",l]}),i.jsx("div",{style:{flexDirection:"row",...t},children:i.jsxs(e.Group,{value:l,onChange:m=>{console.log("onChange"),u(m)},onBlur:()=>{console.log("onBlur")},children:[i.jsx(e,{variant:"simple",label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{variant:"simple",label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"}),i.jsx(e,{variant:"simple",label:"test3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"3",isDisabled:!0})]})})]})},o=()=>i.jsxs("div",{style:{...t},children:[i.jsx("h3",{children:"Horizontal"}),i.jsx("div",{style:{flexDirection:"row",...t},children:i.jsxs(e.Group,{orientation:"horizontal",children:[i.jsx(e,{label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"})]})}),i.jsx("h3",{children:"Vertical"}),i.jsx("div",{style:{flexDirection:"row",...t},children:i.jsxs(e.Group,{orientation:"vertical",children:[i.jsx(e,{label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"})]})})]}),L={title:"Example/Radio",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};s.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"Orientation"};var n,r,a;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('1');
  return <div style={{
    ...style
  }}>
      <h3>Outlined</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <Radio.Group>
          <Radio variant='outlined' label={<>
                test <HeartFilled />
              </>} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' id='item1' />
          <Radio variant='outlined' label='test2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='2' />
          <Radio variant='outlined' label='test3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='3' isDisabled />
        </Radio.Group>
      </div>
      <h3>Simple</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <Radio.Group>
          <Radio variant='simple' label='test' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' />
          <Radio variant='simple' label='test2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='2' />
          <Radio variant='simple' label='test3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='3' isDisabled />
        </Radio.Group>
      </div>

      <h3>Controlled</h3>
      <h4>Selected Value: {value}</h4>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <Radio.Group value={value} onChange={value => {
        console.log('onChange');
        setValue(value);
      }} onBlur={() => {
        console.log('onBlur');
      }}>
          <Radio variant='simple' label='test' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' />
          <Radio variant='simple' label='test2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='2' />
          <Radio variant='simple' label='test3' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='3' isDisabled />
        </Radio.Group>
      </div>
    </div>;
}`,...(a=(r=s.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <h3>Horizontal</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Radio.Group orientation='horizontal'>
        <Radio label='test' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' />
        <Radio label='test2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='2' />
      </Radio.Group>
    </div>
    <h3>Vertical</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Radio.Group orientation='vertical'>
        <Radio label='test' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='1' tooltip='This is tooltip' />
        <Radio label='test2' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' value='2' />
      </Radio.Group>
    </div>
  </div>`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const f=["Variants","Orientation"];export{o as Orientation,s as Variants,f as __namedExportsOrder,L as default};
