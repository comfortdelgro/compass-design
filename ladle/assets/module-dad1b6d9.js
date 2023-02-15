import{a as E,$ as P}from"./module-f9a02953.js";import{$}from"./module-8203fd97.js";import{$ as C}from"./module-fd182f49.js";import{r as m}from"./index-2f0c84ee.js";function y(t,r){let{inputElementType:o="input",isDisabled:i=!1,isRequired:c=!1,isReadOnly:d=!1,validationState:u,type:p="text",onChange:f=()=>{}}=t,{focusableProps:s}=C(t,r),{labelProps:e,fieldProps:a,descriptionProps:n,errorMessageProps:v}=$(t),l=E(t,{labelable:!0});const S={type:p,pattern:t.pattern};return{labelProps:e,inputProps:P(l,o==="input"&&S,{disabled:i,readOnly:d,"aria-required":c||void 0,"aria-invalid":u==="invalid"||void 0,"aria-errormessage":t["aria-errormessage"],"aria-activedescendant":t["aria-activedescendant"],"aria-autocomplete":t["aria-autocomplete"],"aria-haspopup":t["aria-haspopup"],value:t.value,defaultValue:t.value?void 0:t.defaultValue,onChange:g=>f(g.target.value),autoComplete:t.autoComplete,maxLength:t.maxLength,minLength:t.minLength,name:t.name,placeholder:t.placeholder,inputMode:t.inputMode,onCopy:t.onCopy,onCut:t.onCut,onPaste:t.onPaste,onCompositionEnd:t.onCompositionEnd,onCompositionStart:t.onCompositionStart,onCompositionUpdate:t.onCompositionUpdate,onSelect:t.onSelect,onBeforeInput:t.onBeforeInput,onInput:t.onInput,...s,...a}),descriptionProps:n,errorMessageProps:v}}function b(){return typeof window<"u"&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"}function w(t,r,o){let i=m.useRef(r);i.current=r,m.useEffect(()=>{if(!b())return;let e=o.current,a=n=>{let v=i.current,l;switch(n.inputType){case"historyUndo":case"historyRedo":return;case"deleteContent":case"deleteByCut":case"deleteByDrag":l=e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteContentForward":l=e.selectionEnd===e.selectionStart?e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd+1):e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteContentBackward":l=e.selectionEnd===e.selectionStart?e.value.slice(0,e.selectionStart-1)+e.value.slice(e.selectionStart):e.value.slice(0,e.selectionStart)+e.value.slice(e.selectionEnd);break;case"deleteSoftLineBackward":case"deleteHardLineBackward":l=e.value.slice(e.selectionStart);break;default:n.data!=null&&(l=e.value.slice(0,e.selectionStart)+n.data+e.value.slice(e.selectionEnd));break}(l==null||!v.validate(l))&&n.preventDefault()};return e.addEventListener("beforeinput",a,!1),()=>{e.removeEventListener("beforeinput",a,!1)}},[o,i]);let c=b()?null:e=>{let a=e.target.value.slice(0,e.target.selectionStart)+e.data+e.target.value.slice(e.target.selectionEnd);r.validate(a)||e.preventDefault()},{labelProps:d,inputProps:u,descriptionProps:p,errorMessageProps:f}=y(t,o),s=m.useRef(null);return{inputProps:P(u,{onBeforeInput:c,onCompositionStart(){let{value:e,selectionStart:a,selectionEnd:n}=o.current;s.current={value:e,selectionStart:a,selectionEnd:n}},onCompositionEnd(){if(!r.validate(o.current.value)){let{value:e,selectionStart:a,selectionEnd:n}=s.current;o.current.value=e,o.current.setSelectionRange(a,n),r.setInputValue(e)}}}),labelProps:d,descriptionProps:p,errorMessageProps:f}}export{y as $,w as a};
