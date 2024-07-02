import{j as t}from"./jsx-runtime-9ef10904.js";import{A as s}from"./arrow-right-20c3256f.js";import{R as z}from"./index-6c164b11.js";import{A as e,a as g}from"./index-06aea52e.js";import{L as r,a as p,b as n,c as h,I as x,D as u}from"./index-eca25368.js";import"./string-b39bd50e.js";import"./use-dom-ref-7c72e1a5.js";import"./index-4593f2b5.js";import"./index-68dd90e7.js";import"./button-03dcac20.js";const i="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",a=()=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{width:300},children:[t.jsx("h3",{children:"Interactive"}),t.jsx(r,{title:"Title",description:"Line 1",leftInfo:t.jsx(p,{src:i,alt:"singapore"}),rightInfo:{text:"Details",icon:t.jsx(s,{})}})]}),t.jsxs("div",{style:{width:300},children:[t.jsx("h3",{children:"Item"}),t.jsx(r,{title:"Title",variant:"item",description:"Line 1 adasdsadasdasdas",leftInfo:t.jsx(e,{label:"A"}),rightInfo:{text:"Details",icon:t.jsx(s,{})}})]}),t.jsxs("div",{style:{width:300},children:[t.jsx("h3",{children:"Interactive Disabled"}),t.jsx(r,{isDisabled:!0,title:"Title",description:"Line 1",leftInfo:t.jsx(p,{src:i,alt:"singapore"}),rightInfo:{text:"Details",icon:t.jsx(s,{})}})]}),t.jsxs("div",{style:{width:300},children:[t.jsx("h3",{children:"Item Disabled"}),t.jsx(r,{isDisabled:!0,title:"Title",variant:"item",description:"Line 1 adasdsadasdasdas",leftInfo:t.jsx(e,{label:"A"}),rightInfo:{text:"Details",icon:t.jsx(s,{})}})]})]}),o=()=>t.jsxs("div",{style:{width:300},children:[t.jsx("h3",{children:"SM"}),t.jsx(r,{size:"sm",leftInfo:t.jsx(s,{}),title:"Title",description:"Lorem Ipsum",css:{maxWidth:"198px"}}),t.jsx(r,{size:"sm",isDisabled:!0,leftInfo:t.jsx(s,{}),title:"Title",description:"Lorem Ipsum",css:{maxWidth:"198px"}})]}),d=()=>t.jsxs("div",{style:{width:300},children:[t.jsx("h3",{children:"SM"}),t.jsxs(n,{showActionButton:!0,title:"Lorem Ipsum",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:t.jsx(p,{src:i,alt:"singapore"}),css:{width:"347px",backgroundColor:"$background"},children:[t.jsx(n.Detail,{title:"Detail 1",avatar:t.jsx(e,{label:"A"}),description:"Lorem Ipsum"}),t.jsx(n.Detail,{title:"Detail 1",avatar:t.jsx(e,{label:"A"}),description:"Lorem Ipsum"})]}),t.jsxs(n,{title:"Lorem Ipsum",showActionButton:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",badge:t.jsx(p,{src:i,alt:"singapore"}),css:{width:"347px",backgroundColor:"$background"},children:[t.jsx(h,{title:"Detail 1",avatar:t.jsxs(g,{children:[t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i})]})}),t.jsx(h,{title:"Detail 1",avatar:t.jsxs(g,{children:[t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i})]})})]})]}),N=t.jsx("div",{style:{width:"84px",height:"58px",backgroundColor:"#009EDA",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"4px",color:"white",fontSize:"28px",fontWeight:"bold"},children:"XXX"}),c=()=>t.jsxs("div",{style:{width:300},children:[t.jsx(x,{groupLabel:N,avatar:t.jsxs(g,{children:[t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i}),t.jsx(e,{image:i})]}),title:"Title",description:"Lorem ipsum dolor sit amet",css:{width:"315px",height:"fit-content"}}),t.jsx(x,{showIcon:!0,variant:"dropdown",avatar:t.jsx(e,{image:i}),title:"Profile Name",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}),l=()=>{const[_,G]=z.useState(["red","green","blue"]);return t.jsx("div",{style:{width:400},children:t.jsx(u,{onReorderByKeys:m=>G(m),children:_.map(m=>t.jsx(u.Item,{children:t.jsx(n,{title:String(m),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",style:{background:"white"}})},m))})})},O={title:"Example/List ",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"Size"};d.__docgenInfo={description:"",methods:[],displayName:"ListCards"};c.__docgenInfo={description:"",methods:[],displayName:"InteractiveLists"};l.__docgenInfo={description:"",methods:[],displayName:"DragAndDrops"};var v,j,L;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <>
      <div style={{
      width: 300
    }}>
        <h3>Interactive</h3>
        <List title='Title' description='Line 1' leftInfo={<ListImage src={imgSrc} alt='singapore' />} rightInfo={{
        text: 'Details',
        icon: <ArrowRight />
      }} />
      </div>

      <div style={{
      width: 300
    }}>
        <h3>Item</h3>
        <List title='Title' variant='item' description='Line 1 adasdsadasdasdas' leftInfo={<Avatar label='A' />} rightInfo={{
        text: 'Details',
        icon: <ArrowRight />
      }} />
      </div>

      <div style={{
      width: 300
    }}>
        <h3>Interactive Disabled</h3>
        <List isDisabled title='Title' description='Line 1' leftInfo={<ListImage src={imgSrc} alt='singapore' />} rightInfo={{
        text: 'Details',
        icon: <ArrowRight />
      }} />
      </div>

      <div style={{
      width: 300
    }}>
        <h3>Item Disabled</h3>
        <List isDisabled title='Title' variant='item' description='Line 1 adasdsadasdasdas' leftInfo={<Avatar label='A' />} rightInfo={{
        text: 'Details',
        icon: <ArrowRight />
      }} />
      </div>
    </>;
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var A,I,f;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <div style={{
    width: 300
  }}>
      <h3>SM</h3>
      <List size='sm' leftInfo={<ArrowRight />} title='Title' description='Lorem Ipsum' css={{
      maxWidth: '198px'
    }} />
      <List size='sm' isDisabled leftInfo={<ArrowRight />} title='Title' description='Lorem Ipsum' css={{
      maxWidth: '198px'
    }} />
    </div>;
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var D,b,w;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <div style={{
    width: 300
  }}>
      <h3>SM</h3>
      <ListCard showActionButton title='Lorem Ipsum' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' badge={<ListImage src={imgSrc} alt='singapore' />} css={{
      width: '347px',
      backgroundColor: '$background'
    }}>
        <ListCard.Detail title='Detail 1' avatar={<Avatar label='A' />} description='Lorem Ipsum' />
        <ListCard.Detail title='Detail 1' avatar={<Avatar label='A' />} description='Lorem Ipsum' />
      </ListCard>

      <ListCard title='Lorem Ipsum' showActionButton description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' badge={<ListImage src={imgSrc} alt='singapore' />} css={{
      width: '347px',
      backgroundColor: '$background'
    }}>
        <ListCardDetail title='Detail 1' avatar={<AvatarGroup>
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
            </AvatarGroup>} />
        <ListCardDetail title='Detail 1' avatar={<AvatarGroup>
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
              <Avatar image={imgSrc} />
            </AvatarGroup>} />
      </ListCard>
    </div>;
}`,...(w=(b=d.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,y,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <div style={{
    width: 300
  }}>
      <InteractiveList groupLabel={GroupLabel} avatar={<AvatarGroup>
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
            <Avatar image={imgSrc} />
          </AvatarGroup>} title='Title' description='Lorem ipsum dolor sit amet' css={{
      width: '315px',
      height: 'fit-content'
    }} />

      <InteractiveList showIcon variant='dropdown' avatar={<Avatar image={imgSrc} />} title='Profile Name' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' />
    </div>;
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var R,T,k;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const [arr, setArr] = React.useState<React.Key[]>(['red', 'green', 'blue']);
  return <div style={{
    width: 400
  }}>
      <DragAndDropList onReorderByKeys={a => setArr(a)}>
        {arr.map(a => <DragAndDropList.Item key={a}>
            <ListCard title={String(a)} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit' style={{
          background: 'white'
        }} />
          </DragAndDropList.Item>)}
      </DragAndDropList>
    </div>;
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const q=["Variants","Size","ListCards","InteractiveLists","DragAndDrops"];export{l as DragAndDrops,c as InteractiveLists,d as ListCards,o as Size,a as Variants,q as __namedExportsOrder,O as default};
