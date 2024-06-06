import{j as n}from"./jsx-runtime-ea7736fc.js";import{A as r}from"./arrow-down-b8d0786b.js";import{C as d}from"./cross-bdcb89a4.js";import{r as i}from"./index-6c164b11.js";import{M as c}from"./menu-d1e4e072.js";import{N as h}from"./notification-filled-ccad4b3e.js";import"./index-7972436d.js";import{B as t}from"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";const m=(a,s)=>i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 33",ref:s,...a},i.createElement("g",{fill:"currentColor"},i.createElement("path",{d:"M16 1.5C7.71484 1.5 1 8.21484 1 16.5C1 24.7852 7.71484 31.5 16 31.5C24.2852 31.5 31 24.7852 31 16.5C31 8.21484 24.2852 1.5 16 1.5ZM14.5938 10.4062C14.5938 9.63281 15.2266 9 16 9C16.7734 9 17.4062 9.62988 17.4062 10.4062V17.9062C17.4062 18.6826 16.7764 19.3125 16 19.3125C15.2236 19.3125 14.5938 18.6855 14.5938 17.9062V10.4062ZM16 24.9375C14.9828 24.9375 14.1578 24.1125 14.1578 23.0953C14.1578 22.0781 14.9822 21.2531 16 21.2531C17.0178 21.2531 17.8422 22.0781 17.8422 23.0953C17.8398 24.1113 17.0195 24.9375 16 24.9375Z"}))),B=i.forwardRef(m),u=B,j=(a,s)=>i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:s,...a},i.createElement("g",{fill:"currentColor"},i.createElement("path",{d:"M16 1C9.92153 1 5 6.03989 5 12.25C5 16.417 6.37448 17.7192 13.6666 29.6772C14.7428 31.442 17.2584 31.4399 18.3334 29.6772C25.6293 17.7129 27 16.4162 27 12.25C27 6.03338 22.0721 1 16 1ZM16 28.1875C8.69967 16.216 7.75 15.4602 7.75 12.25C7.75 7.5901 11.4437 3.8125 16 3.8125C20.5563 3.8125 24.25 7.5901 24.25 12.25C24.25 15.4465 23.3811 16.0835 16 28.1875ZM11.4167 12.25C11.4167 9.66116 13.4687 7.5625 16 7.5625C18.5313 7.5625 20.5833 9.66116 20.5833 12.25C20.5833 14.8389 18.5313 16.9375 16 16.9375C13.4687 16.9375 11.4167 14.8389 11.4167 12.25Z"}))),p=i.forwardRef(j),l=p,f=(a,s)=>i.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:s,...a},i.createElement("g",{fill:"currentColor"},i.createElement("path",{d:"M25.7356 13.8886L12.0568 27.5615L10.0683 25.573L10.2736 25.3677H7.56955C7.05337 25.3677 6.63104 24.9454 6.63104 24.4292V21.7251L6.42633 21.9304C6.14888 22.212 5.94534 22.5522 5.83448 22.9276L4.48655 27.5145L9.07116 26.1654C9.39377 26.054 9.78677 25.8487 10.0683 25.573L12.0568 27.5615C11.4468 28.1715 10.6901 28.6231 9.86303 28.8636L2.80486 30.9401C2.31097 31.0867 1.7766 30.9518 1.41234 30.5354C1.04807 30.2245 0.911884 29.6907 1.05724 29.1921L3.13333 22.1357C3.37735 21.3086 3.8249 20.552 4.43551 19.9419L18.1102 6.26553L25.7356 13.8886ZM29.9002 4.41256C31.3666 5.8784 31.3666 8.25752 29.9002 9.72394L27.0612 12.5629L19.4358 4.93871L22.2748 2.09973C23.7412 0.633424 26.1227 0.633424 27.5891 2.09973L29.9002 4.41256Z"}))),D=i.forwardRef(f),g=D,C="_myButton_1w8yo_1",w={myButton:C},e={width:"100%",display:"flex",justifyContent:"start",alignItems:"center",gap:"1.5rem",marginBottom:"2rem"},o=()=>n.jsxs("div",{style:{width:"100%",height:"100%",padding:"2rem"},children:[n.jsx("h3",{children:"1. Variants"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",onPress:()=>console.log("pressed"),children:"Primary"}),n.jsx(t,{variant:"secondary",children:"Secondary"}),n.jsx(t,{variant:"danger",children:"Danger"}),n.jsx(t,{variant:"ghost",children:"Ghost"}),n.jsx(t,{isDisabled:!0,children:"Disabled"})]}),n.jsx("h4",{children:"Disabled state"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",isDisabled:!0,children:"Primary"}),n.jsx(t,{variant:"secondary",isDisabled:!0,children:"Secondary"}),n.jsx(t,{variant:"danger",isDisabled:!0,children:"Danger"}),n.jsx(t,{variant:"ghost",isDisabled:!0,children:"Ghost"})]}),n.jsx("h4",{children:"Custom style"}),n.jsx("h5",{children:"Custom style using css prop"}),n.jsx("div",{style:{...e},children:n.jsx(t,{css:{width:250,opacity:.9,backgroundColor:"red",".cdg-button-content-children":{color:"purple"}},onClick:a=>console.log("click",a),children:"Custom width and background color"})}),n.jsx("h5",{children:"Custom style using css module"}),n.jsx("div",{style:{...e},children:n.jsx(t,{onClick:a=>console.log("click",a),className:w.myButton,children:"Custom width and background color"})}),n.jsx("h3",{children:"2. Sizes"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{size:"lg",children:"Large"}),n.jsx(t,{size:"md",children:"Medium (Default)"}),n.jsx(t,{size:"sm",children:"Small"}),n.jsx("div",{style:{width:"300px",flexShrink:0},children:n.jsx(t,{size:"md",fullWidth:!0,children:"Medium (Block)"})})]}),n.jsx("h4",{children:"Full width"}),n.jsx("div",{style:{...e},children:n.jsx(t,{fullWidth:!0,onClick:a=>console.log("click",a),children:"Full Width (100%)"})}),n.jsx("h3",{children:"3. Ripple effect when being clicked"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{ripple:!0,type:"submit",variant:"primary",onClick:()=>console.log("clicked"),onPress:()=>console.log("pressed"),children:"Primary"}),n.jsx(t,{ripple:!0,variant:"secondary",children:"Secondary"}),n.jsx(t,{ripple:!0,variant:"danger",children:"Danger"}),n.jsx(t,{ripple:!0,variant:"ghost",children:"Ghost"})]}),n.jsx("h3",{children:"4. Left Icons"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",leftIcon:n.jsx(r,{}),children:"Primary"}),n.jsx(t,{variant:"secondary",leftIcon:n.jsx(r,{}),children:"Secondary"}),n.jsx(t,{variant:"danger",leftIcon:n.jsx(r,{}),children:"Danger"}),n.jsx(t,{variant:"ghost",leftIcon:n.jsx(r,{}),children:"Ghost"}),n.jsx(t,{isDisabled:!0,leftIcon:n.jsx(r,{}),children:"Disabled"})]}),n.jsx("h3",{children:"5. Right Icons"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",rightIcon:n.jsx(r,{}),children:"Primary"}),n.jsx(t,{variant:"secondary",rightIcon:n.jsx(r,{}),children:"Secondary"}),n.jsx(t,{variant:"danger",rightIcon:n.jsx(r,{}),children:"Danger"}),n.jsx(t,{variant:"ghost",rightIcon:n.jsx(r,{}),children:"Ghost"}),n.jsx(t,{isDisabled:!0,rightIcon:n.jsx(r,{}),children:"Disabled"})]}),n.jsx("h3",{children:"6. both Left & Right Icons"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",leftIcon:n.jsx(r,{}),rightIcon:n.jsx(l,{}),children:"Primary"}),n.jsx(t,{variant:"secondary",leftIcon:n.jsx(r,{}),rightIcon:n.jsx(l,{}),children:"Secondary"}),n.jsx(t,{variant:"danger",leftIcon:n.jsx(r,{}),rightIcon:n.jsx(l,{}),children:"Danger"}),n.jsx(t,{variant:"ghost",leftIcon:n.jsx(r,{}),rightIcon:n.jsx(l,{}),children:"Ghost"}),n.jsx(t,{isDisabled:!0,leftIcon:n.jsx(r,{}),rightIcon:n.jsx(l,{}),children:"Disabled"})]}),n.jsx("h3",{children:"7. With only Icons"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",children:n.jsx(c,{})}),n.jsx(t,{variant:"secondary",children:n.jsx(d,{})}),n.jsx(t,{variant:"danger",children:n.jsx(u,{})}),n.jsx(t,{variant:"ghost",children:n.jsx(h,{})}),n.jsx(t,{isDisabled:!0,children:n.jsx(g,{})})]}),n.jsx("h3",{children:"8. Loading"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{loading:!0,variant:"primary"}),n.jsx(t,{loading:!0,variant:"secondary"}),n.jsx(t,{loading:!0,variant:"danger"}),n.jsx(t,{loading:!0,variant:"ghost"}),n.jsx(t,{loading:!0,isDisabled:!0})]}),n.jsx("h3",{children:"9. Act as a link"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{href:"/#page",variant:"primary",leftIcon:n.jsx(r,{}),children:"Click me"}),n.jsx(t,{href:"https://google.com",hrefExternal:!0,variant:"secondary",children:"Google"}),n.jsx(t,{href:"/#page",variant:"danger",hrefTarget:"_blank",children:"Hit me"}),n.jsx(t,{href:"/#page",variant:"ghost",children:"Beat me"})]}),n.jsx("h3",{children:"10. H5"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",h5:!0,onPress:()=>console.log("pressed"),children:"Primary"}),n.jsx(t,{variant:"secondary",h5:!0,children:"Secondary"}),n.jsx(t,{variant:"danger",h5:!0,children:"Danger"}),n.jsx(t,{isDisabled:!0,h5:!0,children:"Disabled"})]}),n.jsx("h4",{children:"Square button"}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",onPress:()=>console.log("pressed"),isSquare:!0,children:"Primary"}),n.jsx(t,{variant:"secondary",isSquare:!0,children:"Secondary"}),n.jsx(t,{variant:"danger",isSquare:!0,children:"Danger"}),n.jsx(t,{isDisabled:!0,isSquare:!0,children:"Disabled"})]}),n.jsxs("div",{style:{...e},children:[n.jsx(t,{variant:"primary",isSquare:!0,children:n.jsx(c,{})}),n.jsx(t,{variant:"secondary",isSquare:!0,children:n.jsx(d,{})}),n.jsx(t,{variant:"danger",isSquare:!0,children:n.jsx(u,{})}),n.jsx(t,{variant:"ghost",isSquare:!0,children:n.jsx(h,{})}),n.jsx(t,{isDisabled:!0,isSquare:!0,children:n.jsx(g,{})})]})]}),R={title:"Example/Button",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Variations"};var y,v,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div style={{
  width: '100%',
  height: '100%',
  padding: '2rem'
}}>
    <h3>1. Variants</h3>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='danger'>Danger</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button isDisabled>Disabled</Button>
    </div>
    <h4>Disabled state</h4>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' isDisabled>
        Primary
      </Button>
      <Button variant='secondary' isDisabled>
        Secondary
      </Button>
      <Button variant='danger' isDisabled>
        Danger
      </Button>
      <Button variant='ghost' isDisabled>
        Ghost
      </Button>
    </div>
    <h4>Custom style</h4>
    <h5>Custom style using css prop</h5>
    <div style={{
    ...Style
  }}>
      <Button css={{
      width: 250,
      opacity: 0.9,
      backgroundColor: 'red',
      '.cdg-button-content-children': {
        color: 'purple'
      }
    }} onClick={e => console.log('click', e)}>
        Custom width and background color
      </Button>
    </div>
    <h5>Custom style using css module</h5>
    <div style={{
    ...Style
  }}>
      <Button onClick={e => console.log('click', e)} className={styles.myButton}>
        Custom width and background color
      </Button>
    </div>
    <h3>2. Sizes</h3>
    <div style={{
    ...Style
  }}>
      <Button size='lg'>Large</Button>
      <Button size='md'>Medium (Default)</Button>
      <Button size='sm'>Small</Button>

      <div style={{
      width: '300px',
      flexShrink: 0
    }}>
        <Button size='md' fullWidth>
          Medium (Block)
        </Button>
      </div>
    </div>
    <h4>Full width</h4>
    <div style={{
    ...Style
  }}>
      <Button fullWidth onClick={e => console.log('click', e)}>
        Full Width (100%)
      </Button>
    </div>
    <h3>3. Ripple effect when being clicked</h3>
    <div style={{
    ...Style
  }}>
      <Button ripple type='submit' variant='primary' onClick={() => console.log('clicked')} onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button ripple variant='secondary'>
        Secondary
      </Button>
      <Button ripple variant='danger'>
        Danger
      </Button>
      <Button ripple variant='ghost'>
        Ghost
      </Button>
    </div>
    <h3>4. Left Icons</h3>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' leftIcon={<ArrowDown />}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={<ArrowDown />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<ArrowDown />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<ArrowDown />}>
        Ghost
      </Button>
      <Button isDisabled leftIcon={<ArrowDown />}>
        Disabled
      </Button>
    </div>

    <h3>5. Right Icons</h3>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' rightIcon={<ArrowDown />}>
        Primary
      </Button>
      <Button variant='secondary' rightIcon={<ArrowDown />}>
        Secondary
      </Button>
      <Button variant='danger' rightIcon={<ArrowDown />}>
        Danger
      </Button>
      <Button variant='ghost' rightIcon={<ArrowDown />}>
        Ghost
      </Button>
      <Button isDisabled rightIcon={<ArrowDown />}>
        Disabled
      </Button>
    </div>

    <h3>6. both Left & Right Icons</h3>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' leftIcon={<ArrowDown />} rightIcon={<MapMarker />}>
        Primary
      </Button>
      <Button variant='secondary' leftIcon={<ArrowDown />} rightIcon={<MapMarker />}>
        Secondary
      </Button>
      <Button variant='danger' leftIcon={<ArrowDown />} rightIcon={<MapMarker />}>
        Danger
      </Button>
      <Button variant='ghost' leftIcon={<ArrowDown />} rightIcon={<MapMarker />}>
        Ghost
      </Button>
      <Button isDisabled leftIcon={<ArrowDown />} rightIcon={<MapMarker />}>
        Disabled
      </Button>
    </div>

    <h3>7. With only Icons</h3>
    <div style={{
    ...Style
  }}>
      <Button variant='primary'>
        <Menu />
      </Button>
      <Button variant='secondary'>
        <Cross />
      </Button>
      <Button variant='danger'>
        <Exclamation />
      </Button>
      <Button variant='ghost'>
        <Notification />
      </Button>
      <Button isDisabled>
        <Pencil />
      </Button>
    </div>
    <h3>8. Loading</h3>
    <div style={{
    ...Style
  }}>
      <Button loading variant='primary' />
      <Button loading variant='secondary' />
      <Button loading variant='danger' />
      <Button loading variant='ghost' />
      <Button loading isDisabled />
    </div>

    <h3>9. Act as a link</h3>
    <div style={{
    ...Style
  }}>
      <Button href='/#page' variant='primary' leftIcon={<ArrowDown />}>
        Click me
      </Button>
      <Button href='https://google.com' hrefExternal variant='secondary'>
        Google
      </Button>
      <Button href='/#page' variant='danger' hrefTarget='_blank'>
        Hit me
      </Button>
      <Button href='/#page' variant='ghost'>
        Beat me
      </Button>
    </div>

    <h3>10. H5</h3>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' h5 onPress={() => console.log('pressed')}>
        Primary
      </Button>
      <Button variant='secondary' h5>
        Secondary
      </Button>
      <Button variant='danger' h5>
        Danger
      </Button>
      <Button isDisabled h5>
        Disabled
      </Button>
    </div>
    <h4>Square button</h4>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' onPress={() => console.log('pressed')} isSquare={true}>
        Primary
      </Button>
      <Button variant='secondary' isSquare={true}>
        Secondary
      </Button>
      <Button variant='danger' isSquare={true}>
        Danger
      </Button>
      <Button isDisabled isSquare={true}>
        Disabled
      </Button>
    </div>
    <div style={{
    ...Style
  }}>
      <Button variant='primary' isSquare={true}>
        <Menu />
      </Button>
      <Button variant='secondary' isSquare={true}>
        <Cross />
      </Button>
      <Button variant='danger' isSquare={true}>
        <Exclamation />
      </Button>
      <Button variant='ghost' isSquare={true}>
        <Notification />
      </Button>
      <Button isDisabled isSquare={true}>
        <Pencil />
      </Button>
    </div>
  </div>`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const z=["Variations"];export{o as Variations,z as __namedExportsOrder,R as default};
