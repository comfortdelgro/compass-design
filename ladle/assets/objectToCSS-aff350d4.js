import{j as x}from"./jsx-runtime-ea7736fc.js";import{R as g}from"./index-6c164b11.js";function B(e){return`${e}-${Math.random().toString(36).substring(2)}`}const I=e=>{const{children:t,css:a,childrenRef:i}=e,[n,o]=g.useState("");g.useEffect(()=>{const c=B("cdg");o(c)},[i]);const p=g.Children.map(t,c=>{if(g.isValidElement(c)){const l=c;return g.cloneElement(l,{className:`${l.props.className||""} ${n}`})}return c});return g.useEffect(()=>{if(n===""||!a)return;const c=G(a,[`.${n}`]),l=document.createElement("style");return l.setAttribute("data-cdg","css"),l.textContent=c,document.head.appendChild(l),()=>{document.head.removeChild(l)}},[a,n]),x.jsx(x.Fragment,{children:p})};I.__docgenInfo={description:"",methods:[],displayName:"CssInjection",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},css:{required:!1,tsType:{name:"intersection",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
} & {
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,elements:[{name:"signature",type:"object",raw:`{
  [K in keyof CSSProperties]?: ValueByPropertyName<K> | Values
}`,signature:{properties:[{key:{name:"CSSProperties",required:!1},value:{name:"union",raw:"ValueByPropertyName<K> | Values",elements:[{name:"unknown"},{name:"Values"}]}}]}},{name:"signature",type:"object",raw:`{
  // unknown css declaration styles
  [K: string]: Values | CSS
}`,signature:{properties:[{key:{name:"string"},value:{name:"union",raw:"Values | CSS",elements:[{name:"Values"},{name:"CSS"}],required:!0}}]}}]},description:""},childrenRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""}}};const j={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},W={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},V=/\s+(?![^()]*\))/,b=/([\d.]+)([^]*)/,A=/\s*,\s*(?![^()]*\))/,E=Object.prototype.toString,S=e=>t=>e(...typeof t=="string"?String(t).split(V):[t]),P=e=>/[A-Z]/.test(e)?e:e.replace(/-[^]/g,t=>t[1].toUpperCase()),y=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),w=(e,t,a)=>`${a.map(i=>`${i}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(a.length?a.length+1:0).join("}")}`,v=(e,t)=>e.length?e.reduce((a,i)=>(a.push(...t.map(n=>n.includes("&")?n.replace(/&/g,/[ +>|~]/.test(i)&&/&.*&/.test(n)?`:is(${i})`:i):i+" "+n)),a),[]):t,N=(e,t)=>e in W&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(a,i,n,o)=>i+(n==="stretch"?`-moz-available${o};${y(e)}:${i}-webkit-fill-available`:`-moz-fit-content${o};${y(e)}:${i}fit-content`)+o):String(t),R={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:S((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:S((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:S((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:S((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:S((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:S((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},O=e=>e.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(t,a,i,n,o,p)=>{const c=b.test(a),l=.0625*(c?-1:1),[u,r]=c?[n,a]:[a,n];return"("+(i[0]==="="?"":i[0]===">"===c?"max-":"min-")+u+":"+(i[0]!=="="&&i.length===1?r.replace(b,(s,d,m)=>Number(d)+l*(i===">"?1:-1)+m):r)+(o?") and ("+((o[0]===">"?"min-":"max-")+u+":"+(o.length===1?p.replace(b,(s,d,m)=>Number(d)+l*(o===">"?-1:1)+m):p)):"")+")"}),q=(e,t,a,i)=>{let n,o;const p=(c,l,u)=>{let r,s;const d=m=>{for(r in m){const k=r.charCodeAt(0)===64,z=k&&Array.isArray(m[r])?m[r]:[m[r]];for(s of z){const h=P(r),C=typeof s=="object"&&s&&s.toString===E;if(h in R){const f=R[h];if(f!==o){o=f,d(f(s)),o=null;continue}}if(k&&(r=O(r)),C){const f=k?u.concat(r):[...u],$=k?[...l]:v(l,r.split(A));n!==void 0&&i(w(...n)),n=void 0,p(s,$,f)}else n===void 0&&(n=[[],l,u]),s=C?s:typeof s=="number"?s&&!(h in j)&&r.charCodeAt(0)!==45?String(s)+"px":String(s):N(h,s??""),n[0].push(`${k?`${r} `:`${y(r)}:`}${s}`)}}};d(c),n!==void 0&&i(w(...n)),n=void 0};p(e,t,a)},G=(e,t=[""],a=[])=>{const i=[];return q(e,t,a,n=>i.push(n)),i.join(`\r
`)};export{I as C};