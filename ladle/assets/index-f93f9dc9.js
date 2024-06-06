var te=Object.defineProperty;var ie=(r,a,e)=>a in r?te(r,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[a]=e;var f=(r,a,e)=>(ie(r,typeof a!="symbol"?a+"":a,e),e);import{j as s}from"./jsx-runtime-ea7736fc.js";import{R as h,r as C}from"./index-6c164b11.js";import{C as b}from"./objectToCSS-aff350d4.js";import{u as se}from"./use-dom-ref-7c72e1a5.js";import{r as ne}from"./index-4593f2b5.js";import"./index-7972436d.js";import{B as Y}from"./button-be34d763.js";const re="_dnd_1oxlg_6",ae={dnd:re},k=r=>s.jsx(s.Fragment,{children:r.children});k.__docgenInfo={description:"",methods:[],displayName:"DragAndDropListItem",props:{key:{required:!0,tsType:{name:"ReactKey",raw:"React.Key"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};function R(r){const a=window.getComputedStyle(r);return Math.max(parseInt(a.getPropertyValue("margin-top"),10),parseInt(a.getPropertyValue("margin-bottom"),10))+r.getBoundingClientRect().height}function x(r,a=0,e=0){if(!r)return;const t=r;if(a===null||e===null){t.style.removeProperty("transform");return}t.style.transform=`translate(${e}px, ${a}px)`}function z(r,a,e){if(r){const t=r;t.style.transition=`transform ${a}ms${e?` ${e}`:""}`}}function le(r,a){let e=0,t=r.length-1,i;for(;e<=t;){if(i=Math.floor((t+e)/2),!r[i+1]||r[i]<=a&&r[i+1]>=a)return i;r[i]<a&&r[i+1]<a?e=i+1:t=i-1}return-1}const $=r=>{let a=[],e=null;const t=(...i)=>{a=i,!e&&(e=requestAnimationFrame(()=>{e=null,r(...a)}))};return t.cancel=()=>{e&&cancelAnimationFrame(e)},t};function W(r,a){const e=["input","textarea","select","option","optgroup","video","audio","button","a"],t=["button","link","checkbox","tab"];for(;r!==a;){if(r.getAttribute("data-handler"))return!1;if(e.includes(r.tagName.toLowerCase()))return!0;const i=r.getAttribute("role");if(i&&t.includes(i.toLowerCase())||r.tagName.toLowerCase()==="label"&&r.hasAttribute("for"))return!0;r.tagName&&(r=r.parentElement)}return!1}const oe=(r,a)=>{const e=[];return h.Children.forEach(r,i=>(h.isValidElement(i)&&i.type===a&&e.push(i),i)),e.length>=0?e:[]},A=({children:r,props:a,isDragged:e})=>s.jsx("li",{...a,style:{...a.style,cursor:e?"grabbing":"grab"},children:r});A.__docgenInfo={description:"",methods:[],displayName:"DragAndDropListOutletItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},props:{required:!0,tsType:{name:"IItemProps"},description:""},index:{required:!1,tsType:{name:"number"},description:""},isDragged:{required:!0,tsType:{name:"boolean"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},isOutOfBounds:{required:!0,tsType:{name:"boolean"},description:""}}};const S=200,M=10,O=200,q={userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",boxSizing:"border-box",position:"relative"};let F=class extends C.Component{constructor(e){super(e);f(this,"listRef",C.createRef());f(this,"ghostRef",C.createRef());f(this,"topOffsets",[]);f(this,"itemTranslateOffsets",[]);f(this,"initialYOffset",0);f(this,"lastScroll",0);f(this,"lastYOffset",0);f(this,"lastListYOffset",0);f(this,"dropTimeout");f(this,"needle",-1);f(this,"afterIndex",-2);f(this,"state",{itemDragged:-1,itemDraggedOutOfBounds:-1,selectedItem:-1,initialX:0,initialY:0,targetX:0,targetY:0,targetHeight:0,targetWidth:0,scrollingSpeed:0,scrollWindow:!1});f(this,"schdOnPointerMove");f(this,"schdOnEnd");f(this,"doScrolling",()=>{const{scrollingSpeed:e,scrollWindow:t}=this.state,i=this.listRef.current;window.requestAnimationFrame(()=>{t?window.scrollTo(window.pageXOffset,window.pageYOffset+e*1.5):i.scrollTop+=e,e!==0&&this.doScrolling()})});f(this,"getChildren",()=>this.listRef&&this.listRef.current?Array.from(this.listRef.current.children):[]);f(this,"calculateOffsets",()=>{this.topOffsets=this.getChildren().map(e=>e.getBoundingClientRect().top),this.itemTranslateOffsets=this.getChildren().map(e=>R(e))});f(this,"getTargetIndex",e=>this.getChildren().findIndex(t=>t===e.target||t.contains(e.target)));f(this,"onPointerStart",e=>{this.dropTimeout&&this.state.itemDragged>-1&&(window.clearTimeout(this.dropTimeout),this.finishDrop());const t=this.getTargetIndex(e);if(t===-1||!this.props.values[t]){this.state.selectedItem!==-1&&(this.setState({selectedItem:-1}),this.finishDrop());return}const i=this.getChildren()[t],n=i.querySelector("[data-handler]");n&&!n.contains(e.target)||W(e.target,i)||(e.preventDefault(),document.addEventListener("pointermove",this.schdOnPointerMove),document.addEventListener("pointercancel",this.schdOnEnd),document.addEventListener("pointerup",this.schdOnEnd),this.onStart(i,e.clientX,e.clientY,t))});f(this,"getYOffset",()=>{const e=this.listRef.current?this.listRef.current.scrollTop:0;return window.pageYOffset+e});f(this,"onStart",(e,t,i,n)=>{this.state.selectedItem>-1&&(this.setState({selectedItem:-1}),this.needle=-1);const o=e.getBoundingClientRect(),l=window.getComputedStyle(e);this.calculateOffsets(),this.initialYOffset=this.getYOffset(),this.lastYOffset=window.pageYOffset,this.lastListYOffset=this.listRef.current.scrollTop,this.setState({itemDragged:n,targetX:o.left-parseInt(l.getPropertyValue("margin-left"),10),targetY:o.top-parseInt(l.getPropertyValue("margin-top"),10),targetHeight:o.height,targetWidth:o.width,initialX:t,initialY:i})});f(this,"onPointerMove",e=>{e.cancelable&&e.preventDefault(),this.onMove(e.clientX,e.clientY)});f(this,"onWheel",e=>{this.state.itemDragged<0||(this.lastScroll=this.listRef.current.scrollTop+=e.deltaY,this.moveOtherItems())});f(this,"onMove",(e,t)=>{if(this.state.itemDragged===-1)return null;x(this.ghostRef.current,t-this.state.initialY,e-this.state.initialX),this.autoScrolling(t),this.moveOtherItems()});f(this,"moveOtherItems",()=>{const e=this.ghostRef.current.getBoundingClientRect(),t=e.top+e.height/2,i=this.getChildren()[this.state.itemDragged];if(!i)return;const n=R(i),o=this.getYOffset();this.initialYOffset!==o&&(this.topOffsets=this.topOffsets.map(l=>l-(o-this.initialYOffset)),this.initialYOffset=o),this.isDraggedItemOutOfBounds()&&this.props.removableByMove?this.afterIndex=this.topOffsets.length+1:this.afterIndex=le(this.topOffsets,t),this.animateItems(this.afterIndex===-1?0:this.afterIndex,this.state.itemDragged,n)});f(this,"autoScrolling",e=>{const{top:t,bottom:i,height:n}=this.listRef.current.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight;if(i>o&&o-e<S)this.setState({scrollingSpeed:Math.round((S-(o-e))/M),scrollWindow:!0});else if(t<0&&e<S)this.setState({scrollingSpeed:Math.round((S-e)/-M),scrollWindow:!0});else if(this.state.scrollWindow&&this.state.scrollingSpeed!==0&&this.setState({scrollingSpeed:0,scrollWindow:!1}),n+20<this.listRef.current.scrollHeight){let l=0;e-t<S?l=Math.round((S-(e-t))/-M):i-e<S&&(l=Math.round((S-(i-e))/M)),this.state.scrollingSpeed!==l&&this.setState({scrollingSpeed:l})}});f(this,"animateItems",(e,t,i,n=!1)=>{this.getChildren().forEach((o,l)=>{if(z(o,O),t===l&&n){if(t===e)return x(o,null);x(o,t<e?this.itemTranslateOffsets.slice(t+1,e+1).reduce((d,c)=>d+c,0):this.itemTranslateOffsets.slice(e,t).reduce((d,c)=>d+c,0)*-1)}else t<e&&l>t&&l<=e?x(o,-i):l<t&&t>e&&l>=e?x(o,i):x(o,null)})});f(this,"isDraggedItemOutOfBounds",()=>{const e=this.getChildren()[this.state.itemDragged];if(!e)return;const t=e.getBoundingClientRect(),i=this.ghostRef.current.getBoundingClientRect();return Math.abs(t.left-i.left)>i.width?(this.state.itemDraggedOutOfBounds===-1&&this.setState({itemDraggedOutOfBounds:this.state.itemDragged}),!0):(this.state.itemDraggedOutOfBounds>-1&&this.setState({itemDraggedOutOfBounds:-1}),!1)});f(this,"onEnd",e=>{e.cancelable&&e.preventDefault(),document.removeEventListener("pointermove",this.schdOnPointerMove),document.removeEventListener("pointerup",this.schdOnEnd),document.removeEventListener("pointercancel",this.schdOnEnd);const t=this.props.removableByMove&&this.isDraggedItemOutOfBounds();!t&&O>0&&this.afterIndex!==-2&&$(()=>{z(this.ghostRef.current,O,"cubic-bezier(.2,1,.1,1)"),this.afterIndex<1&&this.state.itemDragged===0?x(this.ghostRef.current,0,0):x(this.ghostRef.current,-(window.pageYOffset-this.lastYOffset)+-(this.listRef.current.scrollTop-this.lastListYOffset)+(this.state.itemDragged<this.afterIndex?this.itemTranslateOffsets.slice(this.state.itemDragged+1,this.afterIndex+1).reduce((i,n)=>i+n,0):this.itemTranslateOffsets.slice(this.afterIndex<0?0:this.afterIndex,this.state.itemDragged).reduce((i,n)=>i+n,0)*-1),0)})(),this.dropTimeout=window.setTimeout(this.finishDrop,t||this.afterIndex===-2?0:O)});f(this,"finishDrop",()=>{const e=this.props.removableByMove&&this.isDraggedItemOutOfBounds();(e||this.afterIndex>-2&&this.state.itemDragged!==this.afterIndex)&&this.props.onChange({oldIndex:this.state.itemDragged,newIndex:e?-1:Math.max(this.afterIndex,0)}),this.getChildren().forEach(t=>{z(t,0),x(t,null),t.style.touchAction=""}),this.setState({itemDragged:-1,scrollingSpeed:0}),this.afterIndex=-2,this.lastScroll>0&&(this.listRef.current.scrollTop=this.lastScroll,this.lastScroll=0)});f(this,"onKeyDown",e=>{const t=this.getTargetIndex(e);if(!W(e.target,e.currentTarget)&&t!==-1){if(e.key==="ArrowDown"&&t>-1&&this.needle<this.props.values.length-1){e.preventDefault();const i=R(this.getChildren()[t]);this.needle++,this.animateItems(this.needle,t,i,!0)}if(e.key==="ArrowUp"&&t>-1&&this.needle>0){e.preventDefault();const i=R(this.getChildren()[t]);this.needle--,this.animateItems(this.needle,t,i,!0)}}});this.schdOnPointerMove=$(this.onPointerMove),this.schdOnEnd=$(this.onEnd)}componentDidMount(){this.calculateOffsets(),document.addEventListener("pointerdown",this.onPointerStart)}componentDidUpdate(e,t){t.scrollingSpeed!==this.state.scrollingSpeed&&t.scrollingSpeed===0&&this.doScrolling()}componentWillUnmount(){document.removeEventListener("pointerdown",this.onPointerStart),this.dropTimeout&&window.clearTimeout(this.dropTimeout),this.schdOnPointerMove.cancel(),this.schdOnEnd.cancel()}render(){const e={...q,margin:0,listStyle:"none",position:"fixed",overflow:"hidden",borderRadius:"4px",outline:"2px solid var(--cdg-color-cdgBlue)",boxShadow:"0px 8px 16px 0px rgba(0, 0, 0, 0.13), 0px 2px 4px 0px rgba(0, 0, 0, 0.1)",top:this.state.targetY,left:this.state.targetX,width:this.state.targetWidth,height:this.state.targetHeight},t=this.props.collection.find(i=>i.key===this.props.values[this.state.itemDragged]);return s.jsxs(C.Fragment,{children:[s.jsx("ul",{ref:this.listRef,style:{cursor:this.state.itemDragged>-1?"grabbing":void 0,background:this.state.itemDragged>-1?"var(--colors-gray30)":void 0},children:this.props.collection.map((i,n)=>{const o=n===this.state.itemDragged,l=n===this.state.selectedItem,d=!this.props.values[n],c={key:n,tabIndex:d?-1:0,onKeyDown:this.onKeyDown,style:{...q,visibility:o?"hidden":void 0,zIndex:l?5e3:0}};return s.jsx(A,{props:c,index:n,isSelected:!0,isDragged:!1,isOutOfBounds:!1,children:i},i.key)})}),this.state.itemDragged>-1&&t&&ne.createPortal(s.jsx(A,{isDragged:!0,isSelected:!1,index:this.state.itemDragged,isOutOfBounds:this.state.itemDraggedOutOfBounds>-1,props:{ref:this.ghostRef,style:e,onWheel:this.onWheel},children:t}),document.body)]})}};F.__docgenInfo={description:"",methods:[{name:"doScrolling",docblock:null,modifiers:[],params:[],returns:null},{name:"getChildren",docblock:null,modifiers:[],params:[],returns:null},{name:"calculateOffsets",docblock:null,modifiers:[],params:[],returns:null},{name:"getTargetIndex",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"union",raw:"React.MouseEvent | React.TouchEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactTouchEvent",raw:"React.TouchEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}],alias:"TEvent"}}],returns:null},{name:"onPointerStart",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"PointerEvent",alias:"PointerEvent"}}],returns:null},{name:"getYOffset",docblock:null,modifiers:[],params:[],returns:null},{name:"onStart",docblock:null,modifiers:[],params:[{name:"target",optional:!1,type:{name:"HTMLElement",alias:"HTMLElement"}},{name:"clientX",optional:!1,type:{name:"number"}},{name:"clientY",optional:!1,type:{name:"number"}},{name:"index",optional:!1,type:{name:"number"}}],returns:null},{name:"onPointerMove",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"PointerEvent",alias:"PointerEvent"}}],returns:null},{name:"onWheel",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactWheelEvent",raw:"React.WheelEvent",alias:"React.WheelEvent"}}],returns:null},{name:"onMove",docblock:null,modifiers:[],params:[{name:"clientX",optional:!1,type:{name:"number"}},{name:"clientY",optional:!1,type:{name:"number"}}],returns:null},{name:"moveOtherItems",docblock:null,modifiers:[],params:[],returns:null},{name:"autoScrolling",docblock:null,modifiers:[],params:[{name:"clientY",optional:!1,type:{name:"number"}}],returns:null},{name:"animateItems",docblock:null,modifiers:[],params:[{name:"needle",optional:!1,type:{name:"number"}},{name:"movedItem",optional:!1,type:{name:"number"}},{name:"offset",optional:!1,type:{name:"number"}},{name:"animateMovedItem",optional:!0,type:null}],returns:null},{name:"isDraggedItemOutOfBounds",docblock:null,modifiers:[],params:[],returns:null},{name:"onEnd",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"PointerEvent",alias:"PointerEvent"}}],returns:null},{name:"finishDrop",docblock:null,modifiers:[],params:[],returns:null},{name:"onKeyDown",docblock:null,modifiers:[],params:[{name:"e",optional:!1,type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent",alias:"React.KeyboardEvent"}}],returns:null}],displayName:"List",props:{values:{required:!0,tsType:{name:"Array",elements:[{name:"ReactKey",raw:"React.Key"}],raw:"React.Key[]"},description:""},removableByMove:{required:!1,tsType:{name:"boolean"},description:""},collection:{required:!0,tsType:{name:"Array",elements:[{name:"ReactDetailedReactHTMLElement",raw:"React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>",elements:[{name:"Props"},{name:"HTMLElement"}]}],raw:`Array<
  React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>
>`},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(meta: {oldIndex: number; newIndex: number}) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{oldIndex: number; newIndex: number}",signature:{properties:[{key:"oldIndex",value:{name:"number",required:!0}},{key:"newIndex",value:{name:"number",required:!0}}]}},name:"meta"}],return:{name:"void"}}},description:""}}};const K=h.forwardRef((r,a)=>{const{css:e={},className:t,children:i,onReorderByKeys:n,...o}=r,l=se(a),d=h.useMemo(()=>oe(i,k),[i]),c=h.useMemo(()=>d.map(p=>p.key),[d]);return s.jsx(b,{css:e,childrenRef:a,children:s.jsx("div",{ref:l,className:`${ae.dnd} cdg-list-dnd ${t}`,...o,children:s.jsx(F,{values:c,collection:d,onChange:({oldIndex:p,newIndex:g})=>{const I=c.slice();I.splice(g<0?I.length+g:g,0,I.splice(p,1)[0]),n==null||n(I)},children:i})})})});K.__docgenInfo={description:"",methods:[],displayName:"DragAndDropList"};const ce="_list_16lrw_6",de="_left_16lrw_25",fe="_leftInfo_16lrw_36",he="_leftText_16lrw_41",me="_leftTitle_16lrw_46",ue="_leftDescription_16lrw_53",pe="_right_16lrw_60",ge="_rightText_16lrw_72",ve="_rightDescription_16lrw_78",_e="_listIsDisabled_16lrw_87",_={list:ce,left:de,leftInfo:fe,leftText:he,leftTitle:me,leftDescription:ue,right:pe,rightText:ge,rightDescription:ve,listIsDisabled:_e},U=h.forwardRef((r,a)=>{const{leftInfo:e,title:t,description:i,rightInfo:n,rightContent:o,isDisabled:l=!1,css:d={},className:c="",descriptionIcon:p,...g}=r,I=P=>{l||r.onClick&&r.onClick(P)},T=h.useMemo(()=>[_.list,l&&_.listIsDisabled,"cdg-list",c].filter(Boolean).join(" "),[c,l]),u=h.useMemo(()=>[_.leftDescription,l&&_.leftDescriptionVariantInteractiveIsDisabled,"cdg-list-description"].filter(Boolean).join(" "),[]),N=h.useMemo(()=>[_.leftInfo,"cdg-list-info"].filter(Boolean).join(" "),[]),E=h.useMemo(()=>[_.leftTitle,"cdg-list-title"].filter(Boolean).join(" "),[]),w=h.useMemo(()=>[_.leftText,"cdg-list-left-text"].filter(Boolean).join(" "),[]),L=h.useMemo(()=>[_.rightText,"cdg-list-right-text"].filter(Boolean).join(" "),[]);return s.jsx(b,{css:d,childrenRef:a,children:s.jsxs("div",{ref:a,tabIndex:0,role:"button",className:T,onClick:I,...g,children:[s.jsxs("div",{className:_.left,children:[e&&s.jsx("div",{className:N,children:e}),(t||i)&&s.jsxs("div",{className:w,children:[t&&s.jsx("h2",{className:E,children:t}),s.jsxs("div",{children:[i&&s.jsx("span",{className:u,children:i}),p&&p]})]})]}),n&&!o&&s.jsxs("div",{className:`cdg-list-right ${_.right}`,children:[(n==null?void 0:n.text)&&s.jsx("h2",{className:L,children:n==null?void 0:n.text}),(n==null?void 0:n.description)&&s.jsx("span",{className:`cdg-list-right-description ${_.rightDescription}`,children:n==null?void 0:n.description})]}),o&&!n&&s.jsx("div",{className:`cdg-list-right ${_.right}`,children:o})]})})});U.__docgenInfo={description:"",methods:[],displayName:"ListH5"};const Ie="_list_1l0ic_6",De="_left_1l0ic_21",xe="_leftInfo_1l0ic_32",Se="_leftText_1l0ic_37",be="_leftTitle_1l0ic_43",Te="_leftDescription_1l0ic_49",ye="_right_1l0ic_53",Ce="_rightText_1l0ic_65",we="_listIsDisabled_1l0ic_71",Re="_listSizeSM_1l0ic_81",Me="_leftInfoSizeSM_1l0ic_85",Oe="_leftTextSizeSM_1l0ic_106",je="_leftTitleSizeSM_1l0ic_110",Ne="_leftDescriptionSizeSM_1l0ic_124",Ee="_listVariantInteractive_1l0ic_130",Le="_leftDescriptionVariantInteractive_1l0ic_138",Pe="_listVariantItem_1l0ic_143",Be="_listVariantInteractiveIsPressed_1l0ic_158",ze="_listVariantInteractiveIsDisabled_1l0ic_171",$e="_leftDescriptionVariantInteractiveIsDisabled_1l0ic_179",Ve="_rightTextVariantInteractiveIsDisabled_1l0ic_183",Ae="_listVariantItemIsPressed_1l0ic_191",ke="_leftTitleSizeSMIsPressed_1l0ic_195",He="_listVariantItemIsDisabled_1l0ic_203",Ye="_leftTextSizeSMIsPressed_1l0ic_215",We="_leftDescriptionSizeSMIsPressed_1l0ic_223",qe="_leftInfoSizeSMIsPressed_1l0ic_227",m={list:Ie,left:De,leftInfo:xe,leftText:Se,leftTitle:be,leftDescription:Te,right:ye,rightText:Ce,listIsDisabled:we,listSizeSM:Re,leftInfoSizeSM:Me,leftTextSizeSM:Oe,leftTitleSizeSM:je,leftDescriptionSizeSM:Ne,listVariantInteractive:Ee,leftDescriptionVariantInteractive:Le,listVariantItem:Pe,listVariantInteractiveIsPressed:Be,listVariantInteractiveIsDisabled:ze,leftDescriptionVariantInteractiveIsDisabled:$e,rightTextVariantInteractiveIsDisabled:Ve,listVariantItemIsPressed:Ae,leftTitleSizeSMIsPressed:ke,listVariantItemIsDisabled:He,leftTextSizeSMIsPressed:Ye,leftDescriptionSizeSMIsPressed:We,leftInfoSizeSMIsPressed:qe},j=h.forwardRef((r,a)=>{const{leftInfo:e,title:t,description:i,rightInfo:n,rightContent:o,variant:l="interactive",isDisabled:d=!1,size:c="md",css:p={},className:g="",descriptionIcon:I,...T}=r,[u,N]=C.useState(!1),E=B=>{d||r.onClick&&r.onClick(B)},w=B=>{d||N(B)},L=h.useMemo(()=>[m.list,d&&m.listIsDisabled,c=="sm"&&m.listSizeSM,l==="interactive"&&!u&&!d&&m.listVariantInteractive,l==="item"&&!u&&!d&&m.listVariantItem,l==="interactive"&&u&&!d&&m.listVariantInteractiveIsPressed,l==="item"&&u&&!d&&m.listVariantItemIsPressed,l==="interactive"&&d&&m.listVariantInteractiveIsDisabled,l==="item"&&d&&m.listVariantItemIsDisabled,"cdg-list",g].filter(Boolean).join(" "),[g,d,u,c,l]),P=h.useMemo(()=>[m.leftDescription,c=="sm"&&m.leftDescriptionSizeSM,l==="interactive"&&m.lefttDescriptionVariantInteractive,c=="sm"&&u&&m.leftDescriptionSizeSMIsPressed,l==="interactive"&&d&&m.leftDescriptionVariantInteractiveIsDisabled,"cdg-list-description"].filter(Boolean).join(" "),[d,u,c,l]),J=h.useMemo(()=>[m.leftInfo,c=="sm"&&m.leftInfoSizeSM,c=="sm"&&u&&m.leftInfoSizeSMIsPressed,"cdg-list-info"].filter(Boolean).join(" "),[u,c]),Q=h.useMemo(()=>[m.leftTitle,c=="sm"&&m.leftTitleSizeSM,c=="sm"&&u&&m.leftTitleSizeSMIsPressed,"cdg-list-title"].filter(Boolean).join(" "),[u,c]),Z=h.useMemo(()=>[m.leftText,c=="sm"&&m.leftTextSizeSM,c=="sm"&&u&&m.leftTextSizeSMIsPressed,"cdg-list-left-text"].filter(Boolean).join(" "),[u,c]),ee=h.useMemo(()=>[m.rightText,l==="interactive"&&d&&m.rightTextVariantInteractiveIsDisabled,"cdg-list-right-text"].filter(Boolean).join(" "),[d,l]);return l==="h5"?s.jsx(U,{...r}):s.jsx(b,{css:p,childrenRef:a,children:s.jsxs("div",{ref:a,tabIndex:0,role:"button",className:L,onClick:E,onMouseDown:()=>w(!0),onMouseUp:()=>w(!1),...T,children:[s.jsxs("div",{className:m.left,children:[e&&s.jsx("div",{className:J,children:e}),(t||i)&&s.jsxs("div",{className:Z,children:[t&&s.jsx("h2",{className:Q,children:t}),s.jsxs("div",{children:[i&&s.jsx("span",{className:P,children:i}),I&&I]})]})]}),n&&!o&&s.jsxs("div",{className:m.right,children:[n.text&&s.jsx("span",{className:ee,children:n==null?void 0:n.text}),n==null?void 0:n.icon]})]})})});j.__docgenInfo={description:"",methods:[],displayName:"List"};const Fe="_listCard_e884e_6",Ke="_listCardIsDisabled_e884e_12",Ue="_listCardTitle_e884e_16",Xe="_listCardDescription_e884e_20",Ge="_listCardHeader_e884e_24",Je="_listCardHeaderRight_e884e_38",Qe="_listCardIcon_e884e_44",Ze="_listCardFooter_e884e_57",et="_listCardContent_e884e_63",D={listCard:Fe,listCardIsDisabled:Ke,listCardTitle:Ue,listCardDescription:Xe,listCardHeader:Ge,listCardHeaderRight:Je,listCardIcon:Qe,listCardFooter:Ze,listCardContent:et},H=h.forwardRef((r,a)=>{const{title:e,badge:t,children:i,className:n,description:o,isDisabled:l=!1,showActionButton:d=!1,css:c={},...p}=r,g=h.Children.toArray(i).map(T=>{const u=T;return h.cloneElement(u,{isDisabled:l})}),I=h.useMemo(()=>[D.listCard,l&&D.listCardIsDisabled,"cdg-list-card",n].filter(Boolean).join(" "),[n,l]);return s.jsx(b,{css:c,childrenRef:a,children:s.jsxs("div",{ref:a,className:I,...p,children:[s.jsxs("div",{className:`${D.listCardHeader} cdg-list-card-header`,children:[e&&s.jsx("h2",{className:`${D.listCardTitle} cdg-list-card-title`,children:e}),s.jsxs("div",{className:`${D.listCardHeaderRight} cdg-list-card-header-right`,children:[t||null,!i&&d?s.jsx(Y,{isDisabled:!!l,variant:"ghost","aria-label":"Action Header",children:s.jsx("svg",{className:D.listCardIcon,viewBox:"0 0 128 512",children:s.jsx("path",{fill:"currentColor",d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})})}):null]})]}),s.jsx("div",{className:`${D.listCardDescription} cdg-list-card-description`,children:o&&s.jsx("span",{children:o})}),s.jsxs("div",{className:`${D.listCardFooter} cdg-list-card-footer`,children:[s.jsx("div",{className:`${D.listCardContent} cdg-list-card-content`,children:g.map(T=>T)}),i&&d?s.jsx(Y,{isDisabled:!!l,variant:"ghost","aria-label":"Action Footer",children:s.jsx("svg",{className:D.listCardIcon,viewBox:"0 0 128 512",children:s.jsx("path",{fill:"currentColor",d:"M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"})})}):null]})]})})});H.__docgenInfo={description:"",methods:[],displayName:"ListCard"};const tt="_cardDetail_n4f0t_6",it="_cardDetailTitle_n4f0t_14",st="_cardDetailFooter_n4f0t_22",nt="_cardDetailDescription_n4f0t_28",rt="_isDisabled_n4f0t_37",y={cardDetail:tt,cardDetailTitle:it,cardDetailFooter:st,cardDetailDescription:nt,isDisabled:rt},X=h.forwardRef((r,a)=>{const{title:e,avatar:t,css:i={},className:n,description:o,isDisabled:l=!1,...d}=r,c=h.useMemo(()=>[y.cardDetail,l&&y.isDisabled,"cdg-list-card-detail",n].filter(Boolean).join(" "),[n,l]);return s.jsx(b,{css:i,childrenRef:a,children:s.jsxs("div",{ref:a,className:c,...d,children:[e&&s.jsx("h3",{className:`${y.cardDetailTitle} cdg-list-card-detail-title`,children:e}),s.jsxs("div",{className:`${y.cardDetailFooter} cdg-list-card-detail-footer`,children:[t&&s.jsx("div",{className:`${y.cardDetailAvatar} cdg-list-card-detail-avatar`,children:h.cloneElement(t,{size:"xxs"})}),o&&s.jsx("span",{className:`${y.cardDetailDescription} cdg-list-card-detail-description`,children:o})]})]})})});X.__docgenInfo={description:"",methods:[],displayName:"ListCardDetail"};const at="_image_1585o_6",lt="_isRounded_1585o_15",ot="_variantH5_1585o_19",V={image:at,isRounded:lt,variantH5:ot},G=h.forwardRef((r,a)=>{const{isRounded:e=!1,css:t={},className:i,variant:n,...o}=r,l=h.useMemo(()=>[V.image,e&&V.isRounded,n==="h5"&&V.variantH5,"cdg-list-image",i].filter(Boolean).join(" "),[i,e,n]);return s.jsx(b,{css:t,childrenRef:a,children:s.jsx("img",{ref:a,className:l,...o})})});G.__docgenInfo={description:"",methods:[],displayName:"ListImage"};const ct="_interactive_18vg3_6",dt="_interactiveAvatar_18vg3_12",ft="_interactiveHeader_18vg3_16",ht="_interactiveTitle_18vg3_22",mt="_interactiveBody_18vg3_30",ut="_interactiveDescription_18vg3_37",pt="_interactiveIconWrapper_18vg3_44",gt="_interactiveIcon_18vg3_44",vt="_interactiveDropdownBody_18vg3_55",_t="_interactiveVariantDropdown_18vg3_59",v={interactive:ct,interactiveAvatar:dt,interactiveHeader:ft,interactiveTitle:ht,interactiveBody:mt,interactiveDescription:ut,interactiveIconWrapper:pt,interactiveIcon:gt,interactiveDropdownBody:vt,interactiveVariantDropdown:_t},It=h.forwardRef((r,a)=>{const{title:e,avatar:t,css:i={},className:n,groupLabel:o,description:l,showIcon:d=!1,variant:c="default",...p}=r,g=h.useMemo(()=>[v.interactive,c==="dropdown"&&v.interactiveVariantDropdown,"cdg-list-interactive",n].filter(Boolean).join(" "),[n,c]);return c==="dropdown"?s.jsx(b,{css:i,childrenRef:a,children:s.jsxs("div",{ref:a,...p,className:g,children:[s.jsx("div",{className:`${v.interactiveAvatar} cdg-list-interactive-avatar`,children:t?h.cloneElement(t,{size:"sm"}):null}),s.jsxs("div",{className:`${v.interactiveDropdownBody} cdg-list-interactive-dropdown-body`,children:[s.jsx("h2",{className:`${v.interactiveTitle} cdg-list-interactive-title`,children:e}),s.jsx("span",{className:`${v.interactiveDescription} cdg-list-interactive-description`,children:l})]}),d&&s.jsx("div",{className:`${v.interactiveIconWrapper} cdg-list-interactive-icon-wrapper`,children:s.jsx("svg",{className:`${v.interactiveIcon} cdg-list-interactive-icon`,viewBox:"0 0 320 512",children:s.jsx("path",{fill:"currentColor",d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})})})]})}):s.jsx(b,{css:i,childrenRef:a,children:s.jsx("div",{ref:a,...p,className:g,children:s.jsxs("div",{children:[s.jsxs("div",{className:`cdg-list-interactive-header ${v.interactiveHeader}`,children:[o||null,s.jsx("div",{className:`cdg-list-interactive-avatar ${v.interactiveAvatar}`,children:t?h.cloneElement(t,{size:"sm"}):null})]}),s.jsxs("div",{className:`cdg-list-interactive-body ${v.interactiveBody}`,children:[e&&s.jsx("h2",{className:`cdg-list-interactive-title ${v.interactiveTitle}`,children:e}),l&&s.jsx("span",{className:`cdg-list-interactive-description ${v.interactiveDescription}`,children:l})]})]})})})});It.__docgenInfo={description:"",methods:[],displayName:"InteractiveList"};j.Image=G;H.Detail=X;K.Item=k;j.Image.displayName="List.Image";H.Detail.displayName="ListCard.Detail";j.displayName="List";export{K as D,It as I,j as L,G as a,H as b,X as c};