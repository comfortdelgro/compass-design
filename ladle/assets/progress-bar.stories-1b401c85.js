import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as i}from"./index-6c164b11.js";import"./index-7972436d.js";import{P as r}from"./index-f484f2a1.js";import{B as x}from"./button-be34d763.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./isSymbol-49712d24.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";const l={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"50%",padding:"3rem"},n=()=>e.jsxs("div",{style:{...l},children:[e.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:e.jsx(r,{value:20,size:"sm",label:"sm"})}),e.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:e.jsx(r,{value:20,size:"md",label:"md"})}),e.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:e.jsx(r,{value:20,size:"lg",label:"lg"})}),e.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:e.jsx(r,{value:20,size:"xl",label:"xl"})})]}),a=()=>e.jsxs("div",{style:{...l},children:[e.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:e.jsx(r,{value:20,color:"blue",label:"blue"})}),e.jsx("div",{style:{width:"100%",marginBottom:"10px"},children:e.jsx(r,{value:40,color:"green",label:"green"})}),e.jsx(r,{value:60,label:"color: $cdgBlue | barColor: $blueShades10",color:"$cdgBlue",barColor:"$blueShades10"})]}),b=5,s=100,t=()=>{const[d,c]=i.useState(!1),[m,u]=i.useState(b),[p,g]=i.useState(!1),w=()=>{c(!1),u(b),g(!1)};return i.useEffect(()=>{if(!d)return;const v=setInterval(()=>{u(h=>h===s?(clearInterval(v),s):Math.min(h+Math.floor(Math.random()*(s/4)),s))},200);return()=>{clearInterval(v)}},[d]),e.jsxs("div",{style:{...l},children:[e.jsx(r,{value:20,variant:"normal",label:"normal"}),e.jsx(r,{css:{marginBlock:"$4"},value:20,variant:"rounded",label:"rounded"}),e.jsx("br",{}),e.jsx(r,{css:{marginBlock:"$4"},value:m,maxValue:s,size:"md",label:"H5",color:"#3468BF",barColor:"#E6ECF7",onComplete:()=>g(!0)}),e.jsxs("div",{style:{flexDirection:"row",...l},children:[p?e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Completed"}),e.jsx(x,{type:"button",onClick:()=>w(),children:"Reset"})]}):e.jsxs("h3",{children:[Math.round(m/s*100),"%"]}),p||d||e.jsx(x,{type:"button",variant:"secondary",onClick:()=>c(!0),children:"Start"})]})]})},o=()=>e.jsxs("div",{style:{...l},children:[e.jsx(r,{variant:"rounded",label:"Loading",loading:!0}),e.jsx(r,{variant:"rounded",label:"Stripes",barColor:"$blueShades10",loading:"stripes"})]}),H={title:"Example/Progress Bar",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Size"};a.__docgenInfo={description:"",methods:[],displayName:"Color"};t.__docgenInfo={description:"",methods:[],displayName:"Variants"};o.__docgenInfo={description:"",methods:[],displayName:"LoadingState"};var B,y,f;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <div style={{
    width: '100%',
    marginBottom: '10px'
  }}>
      <ProgressBar value={20} size='sm' label='sm' />
    </div>
    <div style={{
    width: '100%',
    marginBottom: '10px'
  }}>
      <ProgressBar value={20} size='md' label='md' />
    </div>
    <div style={{
    width: '100%',
    marginBottom: '10px'
  }}>
      <ProgressBar value={20} size='lg' label='lg' />
    </div>
    <div style={{
    width: '100%',
    marginBottom: '10px'
  }}>
      <ProgressBar value={20} size='xl' label='xl' />
    </div>
  </div>`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,C,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <div style={{
    width: '100%',
    marginBottom: '10px'
  }}>
      <ProgressBar value={20} color='blue' label='blue' />
    </div>
    <div style={{
    width: '100%',
    marginBottom: '10px'
  }}>
      <ProgressBar value={40} color='green' label='green' />
    </div>

    <ProgressBar value={60} label='color: $cdgBlue | barColor: $blueShades10' color='$cdgBlue' barColor='$blueShades10' />
  </div>`,...(S=(C=a.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var P,V,I;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const [startProcess, setStartProcess] = useState(false);
  const [progressValue, setProgressValue] = useState(INIT_VALUE);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleReset = () => {
    setStartProcess(false);
    setProgressValue(INIT_VALUE);
    setIsCompleted(false);
  };
  useEffect(() => {
    if (!startProcess) {
      return;
    }
    const timer = setInterval(() => {
      setProgressValue(currValue => {
        if (currValue === MAX_VALUE) {
          clearInterval(timer);
          return MAX_VALUE;
        }
        return Math.min(currValue + Math.floor(Math.random() * (MAX_VALUE / 4)), MAX_VALUE);
      });
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [startProcess]);
  return <div style={{
    ...style
  }}>
      <ProgressBar value={20} variant='normal' label='normal' />
      <ProgressBar css={{
      marginBlock: '$4'
    }} value={20} variant='rounded' label='rounded' />

      <br></br>

      <ProgressBar css={{
      marginBlock: '$4'
    }} value={progressValue} maxValue={MAX_VALUE} size='md' label='H5' color='#3468BF' barColor='#E6ECF7' onComplete={() => setIsCompleted(true)} />

      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        {isCompleted ? <>
            <h3>Completed</h3>
            <Button type='button' onClick={() => handleReset()}>
              Reset
            </Button>
          </> : <h3>{Math.round(progressValue / MAX_VALUE * 100)}%</h3>}

        {isCompleted || startProcess || <Button type='button' variant='secondary' onClick={() => setStartProcess(true)}>
            Start
          </Button>}
      </div>
    </div>;
}`,...(I=(V=t.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var E,_,A;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <ProgressBar variant='rounded' label='Loading' loading />
    <ProgressBar variant='rounded' label='Stripes' barColor='$blueShades10' loading='stripes' />
  </div>`,...(A=(_=o.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};const O=["Size","Color","Variants","LoadingState"];export{a as Color,o as LoadingState,n as Size,t as Variants,O as __namedExportsOrder,H as default};
