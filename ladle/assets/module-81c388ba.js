import{a as k,$ as t}from"./module-68bc3b3b.js";import{$ as u}from"./module-3eb85b7b.js";import{$ as x}from"./module-1e79729a.js";function S(s,r){let{elementType:i="a",onPress:l,onPressStart:c,onPressEnd:f,onClick:o,isDisabled:e,...p}=s,d;i!=="a"&&(d={role:"link",tabIndex:e?void 0:0});let{focusableProps:P}=u(s,r),{pressProps:n,isPressed:$}=x({onPress:l,onPressStart:c,onPressEnd:f,isDisabled:e,ref:r}),b=k(p,{labelable:!0}),m=t(P,n);return{isPressed:$,linkProps:t(b,{...m,...d,"aria-disabled":e||void 0,onClick:a=>{n.onClick(a),o&&(o(a),console.warn("onClick is deprecated, please use onPress"))}})}}export{S as $};
