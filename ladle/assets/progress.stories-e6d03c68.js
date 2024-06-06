import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as t}from"./index-6c164b11.js";import{P as r}from"./index-be599a31.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./color-214871c7.js";const i=()=>{const[n,s]=t.useState(0);return t.useEffect(()=>{const o=setInterval(()=>{s(a=>a>=100?0:a+10)},800);return()=>{clearInterval(o)}},[]),e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Indeterminate"}),e.jsx(r.Circular,{variant:"indeterminate"}),e.jsx(r.Linear,{variant:"indeterminate"}),e.jsx("h3",{children:"Determinate"}),e.jsx(r.Circular,{variant:"determinate",value:n}),e.jsx(r.Linear,{variant:"determinate",value:n}),e.jsx("h3",{children:"Colorful"}),e.jsx(r.Circular,{variant:"indeterminate",color:"red"}),e.jsx(r.Linear,{variant:"indeterminate",color:"red"}),e.jsx("h3",{children:"Size"}),e.jsx(r.Circular,{variant:"indeterminate",size:70}),e.jsx(r.Linear,{variant:"indeterminate",size:10})]})},c=()=>{const[n,s]=t.useState(0);return t.useEffect(()=>{const o=setInterval(()=>{s(a=>a>=100?0:a+10)},800);return()=>{clearInterval(o)}},[]),e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Indeterminate"}),e.jsx(r.Circular,{variant:"indeterminate"}),e.jsx("h3",{children:"Determinate"}),e.jsx(r.Circular,{variant:"determinate",value:n}),e.jsx("h3",{children:"Colorful"}),e.jsx(r.Circular,{variant:"indeterminate",color:"red"}),e.jsx("h3",{children:"Size"}),e.jsx(r.Circular,{variant:"indeterminate",size:70})]})},d=()=>{const[n,s]=t.useState(0),[o,a]=t.useState(10),l=t.useRef(()=>{});return t.useEffect(()=>{l.current=()=>{if(n>100)s(0),a(10);else{const u=Math.random()*10,C=Math.random()*10;s(n+u),a(n+u+C)}}}),t.useEffect(()=>{const u=setInterval(()=>{l.current()},500);return()=>{clearInterval(u)}},[]),e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"Indeterminate"}),e.jsx(r.Linear,{variant:"indeterminate"}),e.jsx("h3",{children:"Determinate"}),e.jsx(r.Linear,{variant:"determinate",value:n}),e.jsx("h3",{children:"Buffer"}),e.jsx(r.Linear,{variant:"buffer",value:n,valueBuffer:o}),e.jsx("h3",{children:"Colorful"}),e.jsx(r.Linear,{variant:"indeterminate",color:"red"}),e.jsx("h3",{children:"Size"}),e.jsx(r.Linear,{variant:"indeterminate",size:10}),e.jsx("h3",{children:"Rounded"}),e.jsx(r.Linear,{variant:"indeterminate",size:10,rounded:!0})]})},E={title:"Example/Progress",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};c.__docgenInfo={description:"",methods:[],displayName:"Circular"};d.__docgenInfo={description:"",methods:[],displayName:"Linear"};var m,f,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>
      <h3>Indeterminate</h3>
      <Progress.Circular variant='indeterminate' />
      <Progress.Linear variant='indeterminate' />
      <h3>Determinate</h3>
      <Progress.Circular variant='determinate' value={progress} />
      <Progress.Linear variant='determinate' value={progress} />
      <h3>Colorful</h3>
      <Progress.Circular variant='indeterminate' color='red' />
      <Progress.Linear variant='indeterminate' color='red' />
      <h3>Size</h3>
      <Progress.Circular variant='indeterminate' size={70} />
      <Progress.Linear variant='indeterminate' size={10} />
    </>;
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,g,p;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => prevProgress >= 100 ? 0 : prevProgress + 10);
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>
      <h3>Indeterminate</h3>
      <Progress.Circular variant='indeterminate' />
      <h3>Determinate</h3>
      <Progress.Circular variant='determinate' value={progress} />
      <h3>Colorful</h3>
      <Progress.Circular variant='indeterminate' color='red' />
      <h3>Size</h3>
      <Progress.Circular variant='indeterminate' size={70} />
    </>;
}`,...(p=(g=c.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var x,j,P;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);
  const progressRef = React.useRef(() => {
    //
  });
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });
  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>
      <h3>Indeterminate</h3>
      <Progress.Linear variant='indeterminate' />
      <h3>Determinate</h3>
      <Progress.Linear variant='determinate' value={progress} />
      <h3>Buffer</h3>
      <Progress.Linear variant='buffer' value={progress} valueBuffer={buffer} />
      <h3>Colorful</h3>
      <Progress.Linear variant='indeterminate' color='red' />
      <h3>Size</h3>
      <Progress.Linear variant='indeterminate' size={10} />
      <h3>Rounded</h3>
      <Progress.Linear variant='indeterminate' size={10} rounded />
    </>;
}`,...(P=(j=d.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};const _=["Basic","Circular","Linear"];export{i as Basic,c as Circular,d as Linear,_ as __namedExportsOrder,E as default};
