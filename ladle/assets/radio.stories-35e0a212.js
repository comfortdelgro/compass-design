import{j as i}from"./jsx-runtime-ea7736fc.js";import{H as j}from"./heart-filled-5f2b210b.js";import{r as y}from"./index-6c164b11.js";import{R as e}from"./index-8bd325fb.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const o={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},l=()=>{const[t,a]=y.useState("1");return i.jsxs("div",{style:{...o},children:[i.jsx("h3",{children:"Outlined"}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsxs(e.Group,{children:[i.jsx(e,{variant:"outlined",label:i.jsxs(i.Fragment,{children:["test ",i.jsx(j,{})]}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"}),i.jsx(e,{variant:"outlined",label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"}),i.jsx(e,{variant:"outlined",label:"test3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"3",isDisabled:!0})]})}),i.jsx("h3",{children:"Simple"}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsxs(e.Group,{children:[i.jsx(e,{variant:"simple",label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{variant:"simple",label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"}),i.jsx(e,{variant:"simple",label:"test3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"3",isDisabled:!0})]})}),i.jsx("h3",{children:"Controlled"}),i.jsxs("h4",{children:["Selected Value: ",t]}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsxs(e.Group,{value:t,onChange:s=>{console.log("onChange"),a(s)},onBlur:()=>{console.log("onBlur")},children:[i.jsx(e,{variant:"simple",label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{variant:"simple",label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"}),i.jsx(e,{variant:"simple",label:"test3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"3",isDisabled:!0})]})})]})},n=()=>i.jsxs("div",{style:{...o},children:[i.jsx("h3",{children:"Horizontal"}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsxs(e.Group,{orientation:"horizontal",children:[i.jsx(e,{label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"})]})}),i.jsx("h3",{children:"Vertical"}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsxs(e.Group,{orientation:"vertical",children:[i.jsx(e,{label:"test",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip"}),i.jsx(e,{label:"test2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"2"})]})})]}),d=[{label:"General"},{label:"App issue"},{label:"Booking issue"},{label:"Payment"},{label:"Promo code issue",disabled:!0},{label:"Vehicle condition"}],r=()=>i.jsxs(i.Fragment,{children:[i.jsx("h3",{style:{marginBottom:"$4"},children:"H5"}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsx(e.Group,{css:{padding:"0.5rem"},onChange:t=>console.log(t),children:d.map(({label:t,disabled:a=!1},s)=>i.jsx(e,{css:{".cdg-radio-content-wrapper":{".cdg-radio-label":{fontWeight:"400"}}},variant:"h5",label:t,value:s.toString(),isDisabled:a},s))})}),i.jsx("h3",{style:{marginBlock:"$6 $4"},children:"H5 with inputPosition: right"}),i.jsx("div",{style:{flexDirection:"row",...o},children:i.jsx(e.Group,{css:{padding:"0.5rem"},onChange:t=>console.log(t),children:d.map(({label:t,disabled:a=!1},s)=>i.jsx(e,{variant:"h5",label:t,description:t+" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam eaque nulla in! Magni fugiat aliquid atque accusantium culpa, eos, nostrum, facilis eius sint incidunt ipsam excepturi praesentium. Natus, iusto?",value:s.toString(),inputPosition:"right",isDisabled:a},s))})})]}),S={title:"Example/Radio",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};l.__docgenInfo={description:"",methods:[],displayName:"Variants"};n.__docgenInfo={description:"",methods:[],displayName:"Orientation"};r.__docgenInfo={description:"",methods:[],displayName:"H5"};var c,u,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,x,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <>
      <h3 style={{
      marginBottom: '$4'
    }}>H5</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <Radio.Group
      // begin fix and update later
      css={{
        padding: '0.5rem'
      }} onChange={value => console.log(value)}>
          {H5RadioData.map(({
          label,
          disabled = false
        }, index) => <Radio key={index}
        // begin fix and update later
        css={{
          '.cdg-radio-content-wrapper': {
            '.cdg-radio-label': {
              fontWeight: '400'
            }
          }
        }} variant='h5' label={label} value={index.toString()} isDisabled={disabled} />)}
        </Radio.Group>
      </div>

      <h3 style={{
      marginBlock: '$6 $4'
    }}>H5 with inputPosition: right</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <Radio.Group
      // begin fix and update later
      css={{
        padding: '0.5rem'
      }} onChange={value => console.log(value)}>
          {H5RadioData.map(({
          label,
          disabled = false
        }, index) => <Radio key={index} variant='h5' label={label} description={label + ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quisquam eaque nulla in! Magni fugiat aliquid atque accusantium culpa, eos, nostrum, facilis eius sint incidunt ipsam excepturi praesentium. Natus, iusto?'} value={index.toString()} inputPosition='right' isDisabled={disabled} />)}
        </Radio.Group>
      </div>
    </>;
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const C=["Variants","Orientation","H5"];export{r as H5,n as Orientation,l as Variants,C as __namedExportsOrder,S as default};
