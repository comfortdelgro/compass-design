import{j as t}from"./jsx-runtime-ea7736fc.js";import{R as y,r as j}from"./index-6c164b11.js";import{c as s,C as D,a as W}from"./string-cf4adbb3.js";import{u as N}from"./use-dom-ref-7c72e1a5.js";import"./index-c28b9cd4.js";import{P as $,a as re}from"./pointer-a81ef452.js";import{B as V}from"./button-8faa8e19.js";const ce="_carousel_1m2fp_6",de="_effectSlide_1m2fp_14",ae="_carouselImageSlide_1m2fp_18",me="_sliderSlide_1m2fp_19",ue="_sliderSlideActive_1m2fp_29",_e="_contentSliderContainer_1m2fp_34",pe="_slideContentSliderContainer_1m2fp_39",fe="_slideSliderScroller_1m2fp_44",Se="_contentSliderControls_1m2fp_65",ge="_sliderNavButton_1m2fp_69",he="_sliderPrevButton_1m2fp_86",ve="_sliderNextButton_1m2fp_90",xe="_text_1m2fp_94",Ce="_sliderPrevButtonText_1m2fp_102",be="_sliderNextButtonText_1m2fp_106",Ne="_contentSliderBottomNav_1m2fp_110",Be="_contentSliderDots_1m2fp_120",je="_carouselDot_1m2fp_125",ye="_carouselActiveDot_1m2fp_136",we="_slideBackground_1m2fp_142",Re="_slideBody_1m2fp_148",ke="_slideButtonRow_1m2fp_159",Pe="_slideMobileButtonRow_1m2fp_165",De="_secondary_1m2fp_173",Me="_contentSliderDescription_1m2fp_191",Te="_mobileContentSliderDescription_1m2fp_195",Ee="_slideMask_1m2fp_200",Ie="_contentSliderTitle_1m2fp_205",Le="_mobileContentSliderTitle_1m2fp_212",Ae="_sliderSocials_1m2fp_218",ze="_socialLink_1m2fp_224",We="_useSocials_1m2fp_228",Xe="_contentSliderMobileMode_1m2fp_232",$e="_mobileInnerContent_1m2fp_240",Fe="_mobileModeSlide_1m2fp_248",Ye="_noneFloatingSlideBody_1m2fp_253",Ue="_startStart_1m2fp_264",Oe="_centerStart_1m2fp_269",Ve="_endStart_1m2fp_274",qe="_startCenter_1m2fp_279",Ge="_centerCenter_1m2fp_285",He="_endCenter_1m2fp_291",Je="_startEnd_1m2fp_297",Ke="_centerEnd_1m2fp_303",Qe="_endEnd_1m2fp_309",e={carousel:ce,effectSlide:de,carouselImageSlide:ae,sliderSlide:me,sliderSlideActive:ue,contentSliderContainer:_e,slideContentSliderContainer:pe,slideSliderScroller:fe,contentSliderControls:Se,sliderNavButton:ge,sliderPrevButton:he,sliderNextButton:ve,text:xe,sliderPrevButtonText:Ce,sliderNextButtonText:be,contentSliderBottomNav:Ne,contentSliderDots:Be,carouselDot:je,carouselActiveDot:ye,slideBackground:we,slideBody:Re,slideButtonRow:ke,slideMobileButtonRow:Pe,secondary:De,"mobile-secondary":"_mobile-secondary_1m2fp_177","mobile-primary":"_mobile-primary_1m2fp_178",contentSliderDescription:Me,mobileContentSliderDescription:Te,slideMask:Ee,contentSliderTitle:Ie,mobileContentSliderTitle:Le,sliderSocials:Ae,socialLink:ze,useSocials:We,contentSliderMobileMode:Xe,mobileInnerContent:$e,mobileModeSlide:Fe,noneFloatingSlideBody:Ye,startStart:Ue,centerStart:Oe,endStart:Ve,startCenter:qe,centerCenter:Ge,endCenter:He,startEnd:Je,centerEnd:Ke,endEnd:Qe},q=y.forwardRef((S,p)=>{const{css:d={},imageUrl:l,active:f,className:g,...u}=S,r=N(p),c=s(e.carouselImageSlide,f&&e.sliderSlideActive,g,"cdg-carousel-image-slide");return t.jsx(D,{css:d,childrenRef:r,children:t.jsx("img",{...u,src:l,className:c})})});q.__docgenInfo={description:"",methods:[],displayName:"CarouselImageSlide"};const G=y.forwardRef((S,p)=>{const{style:d,length:l,current:f,css:g={},dotClick:u=()=>null,...r}=S,c=N(p),x=s(e.contentSliderDots,"cdg-carousel-slider-dots");return t.jsx(D,{css:g,childrenRef:c,children:t.jsx("div",{...r,style:d,className:x,children:Array(l).fill(0).map((v,h)=>t.jsx("div",{className:s(e.carouselDot,h===f&&e.carouselActiveDot,"cdg-carousel-slider-dot"),onClick:()=>{u(h)}},h+v))})})});G.__docgenInfo={description:"",methods:[],displayName:"CarouselSliderDots"};let L=null;const w=y.forwardRef((S,p)=>{const{css:d={},children:l,autoSwitch:f=!0,useNavigation:g=!0,useDotIndicator:u=!0,navigationButtonType:r="icon",socials:c,className:x,effect:v="fade",itemPerPage:h=1,style:M,onSwitchSlide:P=()=>null,...C}=S,T=N(p),_=N(),a=N(),[R,n]=j.useState(0),[i,o]=j.useState(0),[b,K]=j.useState(0),A=_.current&&_.current.clientWidth*i||0,Q=_.current&&_.current.clientWidth||0,k=Math.ceil(l.length/h);j.useEffect(()=>{const m=()=>{n(A)};return window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}},[A]);const E=y.useCallback(()=>{L&&(clearTimeout(L),L=null)},[]),z=y.useCallback(()=>{E();const m=(i+1)%k;o(m)},[E,i,k]),F=()=>{E();const m=(i-1+k)%k;o(m)},Z=m=>{E(),o(m)},ee=m=>{const B=new re;B.start(new $(m.pageX,m.pageY));const Y=R;if(E(),a.current){a.current.style.transition="none",a.current.setPointerCapture(m.pointerId);const U=I=>{B.update(new $(I.pageX,I.pageY)),n(Y-B.distance.x)},O=I=>{B.end(new $(I.pageX,I.pageY)),a.current&&(a.current.removeEventListener("pointermove",U),a.current.style.transition="all 250ms ease",Math.abs(B.distance.x)/Q>.2?B.distance.x<0?z():F():n(Y))};a.current.addEventListener("pointermove",U),a.current.addEventListener("pointerup",O,{once:!0}),a.current.addEventListener("pointercancel",O,{once:!0})}};j.useEffect(()=>(f&&(L=setTimeout(z,3e3)),P(i),n(A),()=>{clearTimeout(L)}),[f,i,z,P,A]),j.useEffect(()=>{_&&_.current&&K(_.current.clientWidth*l.length)},[l.length,_]);const te=s(e.carousel,e["effect"+W(v)],x,"cdg-carousel-slider"),se=s(e.contentSliderContainer,e[v+"ContentSliderContainer"],"cdg-carousel-slider-container"),oe=s(e.sliderScroller,e[v+"SliderScroller"],"cdg-carousel-slider-scroller"),ne=s(e.sliderNavButton,e.sliderPrevButton,e[r],e["sliderPrevButton"+W(r)],"cdg-carousel-slider-prev-button"),ie=s(e.sliderNavButton,e.sliderNextButton,e[r],e["sliderNextButton"+W(r)],"cdg-carousel-slider-next-button"),le=s(e.contentSliderBottomNav,c&&c.length?e.useSocials:"","cdg-carousel-slider-button-nav");return t.jsx(D,{css:d,childrenRef:T,children:t.jsxs("div",{...C,style:M,ref:_,className:te,children:[t.jsx("div",{className:se,children:v==="slide"?t.jsx("div",{ref:a,className:oe,style:{width:`${b}px`,transform:`translate3d(-${R}px, 0, 0)`},onPointerDown:ee,children:l}):l}),g&&k>1&&t.jsxs("div",{className:s(e.contentSliderControls,"cdg-carousel-slider-controls"),children:[t.jsx("div",{onClick:F,className:ne,children:r==="icon"?t.jsx("svg",{viewBox:"0 0 320 512",children:t.jsx("path",{fill:"currentColor",d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})}):"Prev"}),t.jsx("div",{onClick:z,className:ie,children:r==="icon"?t.jsx("svg",{viewBox:"0 0 320 512",children:t.jsx("path",{fill:"currentColor",d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"})}):"Next"})]}),t.jsxs("div",{className:le,children:[u&&k>1&&t.jsx(G,{length:k,current:i,dotClick:Z}),c&&c.length?t.jsx("div",{className:s(e.sliderSocials,"cdg-carousel-slider-socials"),children:c.map((m,B)=>t.jsx("a",{className:s(e.socialLink,"cdg-carousel-slider-link"),href:m.url,target:"_blank",children:m.icon},B))}):""]})]})})});w.__docgenInfo={description:"",methods:[],displayName:"CarouselSlider"};const X=y.forwardRef((S,p)=>{const{css:d={},children:l,active:f,className:g="",style:u,...r}=S,c=N(p),x=s(e.sliderSlide,f&&e.sliderSlideActive,g,"cdg-carousel-slide");return t.jsx(D,{css:d,childrenRef:c,children:t.jsx("div",{...r,style:u,className:x,children:l})})});X.__docgenInfo={description:"",methods:[],displayName:"CarouselSlide"};const H=y.forwardRef((S,p)=>{var n,i;const{data:d,buttons:l=[],socials:f,autoSwitch:g=!1,floatingContent:u=!1,useNavigation:r=!1,useDotIndicator:c=!0,navigationButtonType:x="icon",css:v={},onSwitchSlide:h=()=>null,...M}=S,P=N(p),[C,T]=j.useState(0),_=o=>{T(o),h(o)},a=()=>{var o;return((o=d[C])==null?void 0:o.title)||""},R=()=>{var o;return((o=d[C])==null?void 0:o.description)||""};return t.jsx(D,{css:v,childrenRef:P,children:t.jsxs("div",{...M,className:s(e.contentSliderMobileMode,u&&"floating-content","cdg-content-slider-mobile-mode"),children:[t.jsx(w,{onSwitchSlide:_,socials:f||[],useNavigation:r,autoSwitch:g,navigationButtonType:x,useDotIndicator:c,effect:"slide",className:`cdg-carousel-mobile-current-slide-buttons-${((i=(n=d[C])==null?void 0:n.buttons)==null?void 0:i.length)||0}`,children:d.map((o,b)=>t.jsxs(X,{className:s(e.mobileModeSlide,C===b&&"active","mobile-mode","cdg-carousel-mobile-slide"),active:C===b,children:[o.mask&&t.jsx("div",{className:s(e.slideMask,"cdg-carousel-mobile-slide-mask"),style:{background:`rgba(0,0,0,${o.mask})`}}),t.jsxs("div",{className:s(e.mobileInnerContent,"cdg-carousel-mobile-inner-content"),children:[t.jsx("img",{className:"cdg-carousel-mobile-inner-content-image",src:o.image,draggable:!1}),u?t.jsxs("div",{className:s(e.slideBody,e.floatingContent,u&&o.alignment,"mobile-mode","cdg-carousel-mobile-inner-content-body"),children:[t.jsx("div",{className:s(e.contentSliderTitle,"cdg-carousel-mobile-inner-content-title"),children:o.title}),t.jsx("div",{className:s(e.contentSliderDescription,"cdg-carousel-mobile-inner-content-description"),children:o.description})]}):""]})]},b))}),u?"":t.jsxs("div",{className:s(e.slideBody,e.noneFloatingSlideBody,"cdg-carousel-mobile-slide-body"),children:[t.jsx("div",{className:s(e.contentSliderTitle,e.mobileContentSliderTitle,"cdg-carousel-mobile-content-slider-title"),children:a()}),t.jsx("div",{className:s(e.contentSliderDescription,e.mobileContentSliderDescription,"cdg-carousel-mobile-content-slider-description"),children:R()})]}),l&&t.jsx("div",{className:s(e.slideButtonRow,e.slideMobileButtonRow,"cdg-carousel-mobile-slide-mobile-buttons"),children:l.map((o,b)=>t.jsx(V,{variant:o.type,className:s(o.type,e["mobile-"+o.type],"cdg-carousel-mobile-slide-mobile-button"),onPress:()=>{o.callback&&o.callback()},children:o.label},b))})]})})});H.__docgenInfo={description:"",methods:[],displayName:"CarouselMobile"};const J=y.forwardRef((S,p)=>{var a,R;const{data:d,socials:l=[],useNavigation:f=!0,autoSwitch:g=!0,navigationButtonType:u="icon",effect:r="slide",css:c={},onSwitchSlide:x=()=>null,...v}=S,[h,M]=j.useState(0),P=N(p),C=N(p),T=n=>{M(n),x(n)},_=n=>{const i=n.split("-");return i[0]+W(i[1])};return t.jsx(D,{css:c,childrenRef:P,children:t.jsx(w,{...v,css:c,effect:r,ref:C,socials:l||[],autoSwitch:g,useNavigation:f,navigationButtonType:u,onSwitchSlide:T,className:`cdg-carousel-promotion-current-slide-buttons-${((R=(a=d[h])==null?void 0:a.buttons)==null?void 0:R.length)||0}`,children:d.map((n,i)=>t.jsxs(X,{className:s(h===i&&"active","cdg-carousel-promotion-slide"),active:h===i,children:[t.jsx("img",{className:s(e.slideBackground,"cdg-carousel-promotion-slide-background"),src:n.image,draggable:!1}),n.mask&&t.jsx("div",{className:s(e.slideMask,"cdg-carousel-promotion-slide-mask"),style:{background:`rgba(0,0,0,${n.mask})`}}),t.jsxs("div",{className:s(e.slideBody,n.alignment||"",n.alignment&&e[_(n.alignment)],"cdg-carousel-promotion-slide-body"),children:[t.jsx("h4",{className:s(e.contentSliderTitle,"cdg-carousel-promotion-content-slider-title"),children:n.title}),t.jsx("p",{className:s(e.contentSliderDescription,"cdg-carousel-promotion-content-slider-description"),children:n.description}),n.buttons&&t.jsx("div",{className:s(e.slideButtonRow,"cdg-carousel-promotion-slide-button-row"),children:n.buttons.map((o,b)=>t.jsx(V,{variant:o.type,className:s(o.type,e[o.type],"cdg-carousel-promotion-slide-button"),children:o.label},b))})]})]},i))})})});J.__docgenInfo={description:"",methods:[],displayName:"CarouselPromotion"};w.displayName="CarouselSlider";w.Slide=X;w.ImageSlide=q;w.Promotion=J;w.Mobile=H;export{w as C,J as a,H as b};
