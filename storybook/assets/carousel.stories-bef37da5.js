import{j as e}from"./jsx-runtime-9ef10904.js";import{H as w}from"./heart-filled-5f2b210b.js";import{r as l}from"./index-6c164b11.js";import{C as n,a as Q,b as y}from"./index-9709637b.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";import"./index-f0ea8199.js";import"./button-a57955c5.js";import"./pointer-a81ef452.js";const X=[{icon:e.jsx(w,{}),url:"https://www.pinterest.com.au/"},{icon:e.jsx(w,{}),url:"https://www.tiktok.com/"},{icon:e.jsx(w,{}),url:"https://telegram.org/"}],V=[{type:"secondary",label:"Button",callback:()=>{console.log("Button clicked")}},{type:"primary",label:"Call action",callback:()=>{console.log("Call action clicked")}}],v=[{image:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp",title:"Content slider is awesome",description:"You can put whatever you want here",buttons:[{type:"primary",label:"Awesome"},{type:"secondary",label:"Take a tour"}],mask:.2},{image:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp",title:"This slide contains buttons",description:"These button can listen and handle user click event",alignment:"center-end",buttons:[{type:"primary",label:"Awesome"},{type:"secondary",label:"Take a tour"}],mask:.5},{image:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp",title:"This slide has different alignment",description:"You can use the document for the other alignment options",alignment:"end-center"},{image:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp",title:"Content slider is awesome",description:"You can put whatever you want here",mask:.1},{image:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp",title:"This slide contains buttons",description:"These button can listen and handle user click event",alignment:"center-end"},{image:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp",title:"This slide has different alignment",description:"You can use the document for the other alignment options",alignment:"end-center",mask:.3}],d=()=>{const[i,a]=l.useState(0),r=s=>{a(s)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Multiple slides on the sample page"}),e.jsx(n,{onSwitchSlide:r,effect:"slide",className:"my-multiple-slides-slider",itemPerPage:3,children:Array.from({length:9}).map((s,t)=>e.jsx(n.Slide,{active:i===t,style:{display:"flex",height:"100%",width:"33.33%"},children:e.jsxs("div",{style:{backgroundColor:"#ccc",border:"1px solid #aaa",width:"100%",height:"250px"},children:["Carousel slide ",t]})},t))})]})},m=()=>{const[i,a]=l.useState(0),[r,s]=l.useState(3),t=o=>{a(o)};return l.useEffect(()=>{const o=()=>{const c=window.innerWidth>=768?3:1;s(c)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),e.jsxs("div",{children:[e.jsx("h2",{children:"Multiple slides with responsive"}),e.jsx(n,{onSwitchSlide:t,effect:"slide",className:"my-multiple-slides-slider",itemPerPage:r,children:Array.from({length:9}).map((o,c)=>e.jsx(n.Slide,{active:i===c,css:{display:"flex",height:"100%",width:"33.33%","@media screen and (max-width: 767px)":{width:"100%"}},children:e.jsxs("div",{style:{backgroundColor:"#ccc",border:"1px solid #aaa",width:"100%",height:"250px"},children:["Carousel slide ",c]})},c))})]})},h=()=>{const[i,a]=l.useState(0),r=["https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp","https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"],s=t=>{a(t)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Image Only"}),e.jsx(n,{onSwitchSlide:s,useDotIndicator:!1,className:"floating-slide",style:{height:"512px"},children:r.map((t,o)=>e.jsx(n.ImageSlide,{active:i===o,imageUrl:t},o))})]})},u=()=>{const[i,a]=l.useState(0),r=s=>{a(s)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Any Content"}),e.jsxs(n,{onSwitchSlide:r,navigationButtonType:"text",className:"floating-slide",style:{height:"300px"},children:[e.jsxs(n.Slide,{active:i===0,children:["First slide",e.jsx("br",{}),"You can put any content here",e.jsx("br",{}),"Replace this content with everything you want",e.jsx("br",{}),"With your own custom styles",e.jsx("br",{}),e.jsx("i",{children:"The gray background here is just for this sample"})]}),e.jsxs(n.Slide,{active:i===1,children:["Second slide",e.jsx("br",{}),"Even if you're using a ",e.jsx("b",{children:"rich text content"}),", ",e.jsx("i",{children:"It also works!"}),e.jsx("br",{}),e.jsx("img",{style:{width:"100px"},src:"https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"})]})]})]})},p=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Promotions Carousel"}),e.jsx(Q,{data:v,effect:"slide"})]}),g=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Promotions With Social"}),e.jsx(Q,{data:v,socials:X,effect:"slide"})]}),x=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Carousel for mobile mode"}),e.jsx(y,{data:v,useNavigation:!1})]}),S=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Carousel for mobile mode"}),e.jsx(y,{data:v,useNavigation:!1,buttons:V})]}),b=()=>e.jsxs("div",{children:[e.jsx("h2",{children:"Carousel for mobile mode"}),e.jsx(y,{data:v,floatingContent:!0,useNavigation:!1,buttons:V})]}),re={title:"Example/Carousel",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"}};d.__docgenInfo={description:"",methods:[],displayName:"Multiple"};m.__docgenInfo={description:"",methods:[],displayName:"MultipleResponsive"};h.__docgenInfo={description:"",methods:[],displayName:"Images"};u.__docgenInfo={description:"",methods:[],displayName:"AnyContent"};p.__docgenInfo={description:"",methods:[],displayName:"PromotionSlide"};g.__docgenInfo={description:"",methods:[],displayName:"PromotionWithSocial"};x.__docgenInfo={description:"",methods:[],displayName:"Mobile"};S.__docgenInfo={description:"",methods:[],displayName:"MobileWithButtons"};b.__docgenInfo={description:"",methods:[],displayName:"MobileFloattingContent"};var f,C,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index);
  };
  return <div>
      <h2>Multiple slides on the sample page</h2>
      <CarouselSlider onSwitchSlide={handleSwitchSlide} effect={'slide'} className='my-multiple-slides-slider' itemPerPage={3}>
        {Array.from({
        length: 9
      }).map((item, index) => <CarouselSlider.Slide key={index} active={activeIndex === index} style={{
        display: 'flex',
        height: '100%',
        width: '33.33%'
      }}>
            <div style={{
          backgroundColor: '#ccc',
          border: '1px solid #aaa',
          width: '100%',
          height: '250px'
        }}>
              Carousel slide {index}
            </div>
          </CarouselSlider.Slide>)}
      </CarouselSlider>
    </div>;
}`,...(j=(C=d.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var I,P,k;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(3);
  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const handleResize = () => {
      const itemPerpage = window.innerWidth >= 768 ? 3 : 1;
      setCount(itemPerpage);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <div>
      <h2>Multiple slides with responsive</h2>
      <CarouselSlider onSwitchSlide={handleSwitchSlide} effect={'slide'} className='my-multiple-slides-slider' itemPerPage={count}>
        {Array.from({
        length: 9
      }).map((item, index) => <CarouselSlider.Slide key={index} active={activeIndex === index} css={{
        display: 'flex',
        height: '100%',
        width: '33.33%',
        '@media screen and (max-width: 767px)': {
          width: '100%'
        }
      }}>
            <div style={{
          backgroundColor: '#ccc',
          border: '1px solid #aaa',
          width: '100%',
          height: '250px'
        }}>
              Carousel slide {index}
            </div>
          </CarouselSlider.Slide>)}
      </CarouselSlider>
    </div>;
}`,...(k=(P=m.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var A,M,N;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageUrls = ['https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp', 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp', 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp'];
  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index);
  };
  return <div>
      <h2>Image Only</h2>
      <CarouselSlider onSwitchSlide={handleSwitchSlide} useDotIndicator={false} className='floating-slide' style={{
      height: '512px'
    }}>
        {imageUrls.map((imageUrl: string, index: number) => <CarouselSlider.ImageSlide key={index} active={activeIndex === index} imageUrl={imageUrl} />)}
      </CarouselSlider>
    </div>;
}`,...(N=(M=h.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var _,E,T;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSwitchSlide = (index: number) => {
    setActiveIndex(index);
  };
  return <div>
      <h2>Any Content</h2>
      <CarouselSlider onSwitchSlide={handleSwitchSlide} navigationButtonType='text' className='floating-slide' style={{
      height: '300px'
    }}>
        <CarouselSlider.Slide active={activeIndex === 0}>
          First slide
          <br />
          You can put any content here
          <br />
          Replace this content with everything you want
          <br />
          With your own custom styles
          <br />
          <i>The gray background here is just for this sample</i>
        </CarouselSlider.Slide>
        <CarouselSlider.Slide active={activeIndex === 1}>
          Second slide
          <br />
          Even if you're using a <b>rich text content</b>, <i>It also works!</i>
          <br />
          <img style={{
          width: '100px'
        }} src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp' />
        </CarouselSlider.Slide>
      </CarouselSlider>
    </div>;
}`,...(T=(E=u.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var W,R,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <div>
      <h2>Promotions Carousel</h2>
      <CarouselPromotion data={slideData} effect={'slide'} />
    </div>;
}`,...(z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var D,B,F;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <div>
      <h2>Promotions With Social</h2>
      <CarouselPromotion data={slideData} socials={socials} effect={'slide'} />
    </div>;
}`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var U,Y,L;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <div>
      <h2>Carousel for mobile mode</h2>
      <CarouselMobile data={slideData} useNavigation={false} />
    </div>;
}`,...(L=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var O,H,q;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <div>
      <h2>Carousel for mobile mode</h2>
      <CarouselMobile data={slideData} useNavigation={false} buttons={buttons} />
    </div>;
}`,...(q=(H=S.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var G,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <div>
      <h2>Carousel for mobile mode</h2>
      <CarouselMobile data={slideData} floatingContent={true} useNavigation={false} buttons={buttons} />
    </div>;
}`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const de=["Multiple","MultipleResponsive","Images","AnyContent","PromotionSlide","PromotionWithSocial","Mobile","MobileWithButtons","MobileFloattingContent"];export{u as AnyContent,h as Images,x as Mobile,b as MobileFloattingContent,S as MobileWithButtons,d as Multiple,m as MultipleResponsive,p as PromotionSlide,g as PromotionWithSocial,de as __namedExportsOrder,re as default};
