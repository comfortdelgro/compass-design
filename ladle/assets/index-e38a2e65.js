import{s as x,R as $,a as h,j as e}from"./index-11db0c06.js";import{u as d}from"./use-dom-ref-2e56ddfd.js";const b=x("div",{border:"1px solid #E6E6E6",borderRadius:"$full",padding:"$1 $3",fontSize:"$label1",cursor:"pointer",fontWeight:"$semibold",lineHeight:"$lineHeights$normal",display:"flex",justifyContent:"center",alignItems:"center",gap:"$2",color:"$primaryText",width:"fit-content",height:"fit-content",maxWidth:"100%",overflow:"hidden",".multiple-dropdown-chip-icon":{svg:{color:"$primaryText"}},".cdg-chip-content":{textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%",overflow:"hidden"},variants:{isErrored:{true:{borderColor:"$danger",backgroundColor:"$dangerBg"}}}}),y=()=>h("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:[e("g",{clipPath:"url(#clip0_5299_13653)",children:e("path",{d:"M9.11731 7.88215C9.45908 8.22392 9.45908 8.77759 9.11731 9.11936C8.94779 9.29024 8.72359 9.375 8.49938 9.375C8.27518 9.375 8.05153 9.28956 7.88092 9.11867L4.99966 6.23892L2.11867 9.11799C1.94779 9.29024 1.72386 9.375 1.49993 9.375C1.276 9.375 1.05235 9.29024 0.881328 9.11799C0.539557 8.77622 0.539557 8.22255 0.881328 7.88078L3.76313 4.99897L0.881328 2.11854C0.539557 1.77677 0.539557 1.2231 0.881328 0.881328C1.2231 0.539557 1.77677 0.539557 2.11854 0.881328L4.99966 3.7645L7.88146 0.882695C8.22323 0.540925 8.7769 0.540925 9.11867 0.882695C9.46044 1.22446 9.46044 1.77813 9.11867 2.1199L6.23687 5.00171L9.11731 7.88215Z",fill:"currentColor"})}),e("defs",{children:e("clipPath",{id:"clip0_5299_13653",children:e("rect",{width:"10",height:"10",fill:"white"})})})]}),k=$.forwardRef((p,C)=>{const{children:f,css:g={},hasCloseButton:r=!1,isErrored:u=!1,tabIndex:m,onCloseClick:t,onClick:l,onKeyDown:o,...w}=p,c=d(C),n=d(null);return h(b,{ref:c,css:g,isErrored:u,tabIndex:r||l?m||0:-1,onClick:l,onKeyDown:i=>{var s,a;switch(o==null||o(i),i.code){case"Backspace":case"Delete":(s=n.current)==null||s.click();break;case"Escape":(a=c.current)==null||a.blur();break}},...w,children:[e("div",{className:"cdg-chip-content",children:f}),r&&e("div",{className:"multiple-dropdown-chip-icon",onClick:i=>{i.stopPropagation(),i.preventDefault(),t==null||t(i)},ref:n,children:e(y,{})})]})}),v=k;v.displayName="Chip";export{v as C};
