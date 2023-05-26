import{s as n,R as f,a as l,j as e}from"./index-e285302b.js";import{C as L}from"./components-6c35209b.js";import{u as w}from"./use-dom-ref-58648911.js";import{S as m}from"./index-ae693390.js";const p=n("div",{borderRadius:"$md",height:"$36",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden",variants:{imageLoaded:{true:{backgroundColor:"$primaryBg"},false:{backgroundColor:"#CCECF8"}}}}),v=n("div",{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden",img:{objectFit:"contain",width:"100%"}}),u=f.forwardRef((a,r)=>{const{css:C={},imageSrc:t,children:o,...c}=a,h=w(r),[d,s]=f.useState(!1);return l(p,{ref:h,css:C,imageLoaded:!!t&&!d,...c,children:[e(v,{children:t&&!d?e("img",{src:t,alt:"preview",onError:()=>s(!0)}):t&&d?e(y,{}):null}),o]})}),y=()=>l("svg",{width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e("path",{d:"M5.26855 0C3.69355 0 2.45605 1.29375 2.45605 2.86875V33.1875C2.45605 34.7625 3.69355 36 5.26855 36H31.0311C32.6061 36 33.8998 34.7625 33.8998 33.1875V11.475L23.2686 0H5.26855Z",fill:"#009EDA"}),e("path",{d:"M33.8996 11.4749V12.0374H26.6996C26.6996 12.0374 23.1558 11.3062 23.2121 8.2124C23.2121 8.2124 23.3808 11.4749 26.6433 11.4749H33.8996Z",fill:"#0C81AE"}),e("path",{opacity:"0.5",d:"M23.2686 0V8.2125C23.2686 9.1125 23.8873 11.475 26.6998 11.475H33.8998L23.2686 0Z",fill:"white"}),e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.08105 30.2064V18.4502H19.8373V30.2064H8.08105ZM18.6561 19.6314H9.2623V26.7189H18.6561V19.6314ZM13.2561 24.3564L15.4498 21.3752L16.1811 22.5564L16.9123 22.3314L17.4748 25.4814H10.1061L12.0748 23.6252L13.2561 24.3564ZM11.1186 22.2752C10.6123 22.2752 10.1623 21.9377 10.1623 21.4314C10.1623 20.9814 10.6123 20.5877 11.1186 20.5877C11.6248 20.5877 12.0186 20.9814 12.0186 21.4314C12.0186 21.9377 11.6248 22.2752 11.1186 22.2752Z",fill:"white"})]}),S=u,x=n("div",{backgroundColor:"$primaryBg",width:"100%",height:"$10",display:"flex",alignItems:"center",borderRadius:"$md",padding:"$2_5 $3",gap:"$2"}),M=n("div",{flexGrow:1,fontSize:"$label2",fontWeight:"$semibold",display:"flex",alignItems:"center",gap:"$2"}),Z=n("div",{width:"$4",height:"$4",display:"flex",alignItems:"center",justifyContent:"center"}),F=n("div",{display:"flex",alignItems:"center",justifyContent:"center"}),V=f.forwardRef((a,r)=>{const{css:C={},icon:t=e($,{}),imageIcon:o,isLoading:c,onIconPress:h,fileName:d}=a,s=w(r);return l(x,{ref:s,css:C,children:[l(M,{children:[o&&e(Z,{onClick:h,children:o}),d]}),e(F,{children:c?e(H,{}):t})]})}),H=()=>e(m,{label:!1,css:{".ring":{width:"16px",height:"16px",div:{width:"16px",height:"16px",borderWidth:"4px"}}}}),$=()=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})}),b=V,g={State:b,Preview:S};g.State.displayName="File.State";g.Preview.displayName="File.Preview";const i=g,I=()=>l(L,{children:[e("h4",{children:"Close"}),e("div",{style:{width:"100%"},children:e(i.State,{fileName:"Filename.png",icon:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})})})}),e("h4",{children:"Error"}),e("div",{style:{width:"100%"},children:e(i.State,{fileName:"Filename.png",icon:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M14.8437 12.3125L9.01106 2.5625C8.56452 1.8125 7.43764 1.8125 6.9881 2.5625L1.1582 12.3125C0.709472 13.0598 1.26837 14 2.16777 14H13.833C14.7288 14 15.2894 13.0625 14.8437 12.3125ZM7.34303 5.64286C7.34303 5.28795 7.63699 5 7.9993 5C8.36162 5 8.65558 5.28929 8.65558 5.64286V9.07143C8.65558 9.42634 8.36162 9.71429 8.02391 9.71429C7.68621 9.71429 7.34303 9.42768 7.34303 9.07143V5.64286ZM7.9993 12.2857C7.5246 12.2857 7.13959 11.9086 7.13959 11.4436C7.13959 10.9786 7.52433 10.6014 7.9993 10.6014C8.47428 10.6014 8.85902 10.9786 8.85902 11.4436C8.85793 11.908 8.4751 12.2857 7.9993 12.2857Z",fill:"#A4262C"})})})}),e("h4",{children:"Success"}),e("div",{style:{width:"100%"},children:e(i.State,{fileName:"Filename.png",icon:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM11.1664 6.79141C11.4645 6.49336 11.4645 6.00664 11.1664 5.70859C10.8684 5.41055 10.3816 5.41055 10.0836 5.70859L7.125 8.66719L5.91641 7.45859C5.61836 7.16055 5.13164 7.16055 4.83359 7.45859C4.53555 7.75664 4.53555 8.24336 4.83359 8.54141L6.58359 10.2914C6.88164 10.5895 7.36836 10.5895 7.66641 10.2914L11.1664 6.79141Z",fill:"#107C10"})})})}),e("h4",{children:"Download"}),e("div",{style:{width:"100%"},children:e(i.State,{fileName:"Filename.png",icon:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z",fill:"#323130"})})})}),e("h4",{children:"Loading"}),e("div",{style:{width:"100%"},children:e(i.State,{fileName:"Filename.png",icon:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z",fill:"#323130"})}),isLoading:!0})})]}),R=()=>l(L,{children:[e("div",{style:{width:"100%"},children:e(i.Preview,{imageSrc:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"})}),e("h3",{children:"With File.State"}),e("div",{style:{width:"100%"},children:e(i.Preview,{imageSrc:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",children:e(i.State,{fileName:"Filename.png",icon:e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:e("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})})})})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Previews,I as States};
