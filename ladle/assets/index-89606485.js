import{s as f,R as m,a as h,j as l}from"./index-e285302b.js";import{u}from"./use-dom-ref-58648911.js";const d=f("div",{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",aspectRatio:"1 / 1",borderRadius:"$full",overflow:"hidden",userSelect:"none",color:"$info",transition:"$default",boxSizing:"border-box",".initials, .icon-wrapper, .image":{width:"100%",height:"100%",position:"absolute",background:"$infoBg",top:0,left:0},".initials, .icon-wrapper":{display:"grid",placeItems:"center"},".initials":{fontFamily:"$sans",fontSize:"$body2",fontWeight:"$semibold",zIndex:1},".icon-wrapper":{zIndex:2},".image":{zIndex:3,color:"transparent",background:"transparent"},".initials.count":{zIndex:4},variants:{size:{lg:{width:"$12",".icon-wrapper > svg":{width:"$6",height:"$6"}},md:{width:"$10",".icon-wrapper > svg":{width:"$6",height:"$6"}},sm:{width:"$8",".icon-wrapper > svg":{width:"$4",height:"$4"}},xs:{width:"$6",".icon-wrapper > svg":{width:"$4",height:"$4"}}}},defaultVariants:{size:"md"}}),w=(n,a)=>n.toUpperCase().split(" ").map(e=>e[0]).join("").slice(0,a==="sm"||a==="xs"?1:2),x=m.forwardRef((n,a)=>{const{css:r={},label:e,icon:s,image:i,size:o="md",...c}=n,p={size:o},t=u(a);return h(d,{css:r,ref:t,...p,...c,children:[e?l("span",{className:"initials",children:w(e,o)}):null,s?l("div",{className:"icon-wrapper",children:s}):null,i?l("img",{className:"image",src:i,alt:e||"Avatar"}):null]})}),g=x,y=f("div",{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",width:"fit-content",[`& ${d}`]:{marginRight:"-$2","&:hover":{marginTop:"-$4"}},variants:{disabledAnimation:{false:{},true:{[`& ${d}`]:{marginRight:"-$2","&:hover":{marginTop:"0px"}}}}}}),b=m.forwardRef((n,a)=>{const{css:r={},display:e=4,children:s,size:i="md",disabledAnimation:o=!1,...c}=n,p=u(a),t=m.Children.toArray(s),v=()=>i=="lg"||i=="md"?"1rem":i=="sm"&&t.length-e>9||i=="xs"&&t.length-e<10?"0.8rem":i=="xs"&&t.length-e>9?"0.5rem":"1rem";return h(y,{css:r,ref:p,disabledAnimation:o,...c,children:[t.slice(0,e).map($=>$),e<t.length&&l(d,{size:i,css:{".initials":{fontSize:v()}},children:h("span",{className:"initials count",children:["+",t.length-e]})})]})}),A=b;g.Group=A;g.Group.displayName="Avatar.Group";g.displayName="Avatar";export{g as A,d as S,y as a,A as b};
