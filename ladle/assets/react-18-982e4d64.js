import{R as m,r as n}from"./index-6c164b11.js";import{r as R}from"./index-4593f2b5.js";var a={},s=R;a.createRoot=s.createRoot,a.hydrateRoot=s.hydrateRoot;var o=new Map,i=({callback:e,children:r})=>{let t=n.useRef();return n.useLayoutEffect(()=>{t.current!==e&&(t.current=e,e())},[e]),r},E=async(e,r,t)=>{let u=await d(r,t);return new Promise(c=>{u.render(m.createElement(i,{callback:()=>c(null)},e))})},f=(e,r)=>{let t=o.get(e);t&&(t.unmount(),o.delete(e))},d=async(e,r)=>{let t=o.get(e);return t||(t=a.createRoot(e,r),o.set(e,t)),t};export{E as r,f as u};