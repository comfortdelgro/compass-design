import{r,t as u}from"./index-6eb6f04c.js";function a(){const[s,n]=r.useState({});function t(){const o={};Object.keys(u.colors).forEach(e=>o[e]=getComputedStyle(document.body).getPropertyValue(`--colors-${e}`)),n(o)}return r.useEffect(()=>{t(),new MutationObserver(t).observe(document.body,{attributes:!0})},[]),s}export{a as u};