import{j as e}from"./jsx-runtime-9ef10904.js";import{A as M}from"./arrow-down-b8d0786b.js";import{A as K}from"./arrow-right-20c3256f.js";import{H as m}from"./heart-filled-5f2b210b.js";import{r as p,R as y}from"./index-6c164b11.js";import{T as c,k as A,u as se}from"./index-5d9b056a.js";import"./index-e81b8c34.js";import"./index-e89f60cb.js";import"./index-4f6b7c55.js";import"./index-15c598e9.js";import"./index-ec8b205c.js";import"./index-a6cd513d.js";import"./index-9e847335.js";import"./index-8c96f1ee.js";import"./index-f0ea8199.js";import"./index-a4534e59.js";import"./index-b524196d.js";import"./index-9709637b.js";import"./index-fe6f70f1.js";import"./index-81648b60.js";import"./index-8afc989f.js";import"./index-deaea9cb.js";import"./index-a28a8ffa.js";import"./index-e7f39b02.js";import{S as x}from"./index-074620d7.js";import"./index-bab47577.js";import"./index-0a028ca0.js";import{G as C}from"./index-f9d7abc3.js";import"./index-f940c060.js";import"./Viewer-447f3689.js";import"./calendar-11907e4d.js";import"./NumberParser-89118490.js";import"./index-1727c636.js";import"./index-0d2269a8.js";import"./index-b7266972.js";import"./index-ce80528f.js";import"./index-8f883b6b.js";import"./index-a485d6a8.js";import"./index-a93d41cd.js";import"./index-d42081dd.js";import"./index-743890f1.js";import"./index-e2c6e307.js";import"./index-0a77337a.js";import{P as S}from"./index-0f034e12.js";import"./index-d88a2748.js";import"./index-17087710.js";import"./index-78db8da5.js";import"./index-4259cd01.js";import"./index-c8954287.js";import"./index-8d0f66a3.js";import"./index-bc84cfa4.js";import{S as N}from"./index-219208da.js";import"./index-7d11381a.js";import"./index-01156645.js";import"./index-7c02b6e0.js";import"./video-player-9ad7071f.js";import"./useSnackbar-41e96bd3.js";import{S as re}from"./index-2cad8c03.js";import"./index-a8b6e51e.js";import"./index-1299058a.js";import"./index-c7d502d2.js";import"./index-3339dc2d.js";import"./index-19e37ff7.js";import"./index-9242378d.js";import"./index-c9ae0d87.js";import{T as V}from"./index-d7c7ead6.js";import"./useCurrentTheme-3076cf6b.js";import"./index-545f196b.js";import"./index-43a16e3f.js";import"./index-e64a24f7.js";import"./index-21379b2e.js";import"./index-8de6e878.js";import"./index-92999917.js";import"./Row-7065e1c2.js";import"./useKeyboardNavigation-7c849a98.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-e90bd687.js";import"./index-e08ff86c.js";import{B as g}from"./button-a57955c5.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-ca8a9d53.js";import"./date-picker-4a2ce3da.js";import"./dropdown-textfield-0ae1254d.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-1e446f38.js";import"./slide-action-e7961684.js";import"./useDrag-6ba0f8b4.js";import"./speed-dial-11f3eab2.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-57517b5f.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-4876dc22.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-d4744197.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const te=a=>{const s=[];for(let r=0;r<a;r++)s.push(r);return s},j=a=>{let s="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=r.length;for(let u=0;u<a;u++)s+=r.charAt(Math.floor(Math.random()*d));return s},oe=(a,s)=>{const r=a.getTime(),d=s.getTime(),u=Math.floor(Math.random()*(d-r+1)+r);return new Date(u)},ie=()=>({id:j(10),firstName:j(5),lastName:j(5),age:Math.floor(Math.random()*40),visits:Math.floor(Math.random()*1e3),progress:Math.floor(Math.random()*100),createdAt:oe(new Date(2020,0,1),new Date(2029,11,31)),status:["relationship","complicated","single"][Math.floor(Math.random()*["relationship","complicated","single"].length)]});function B(...a){const s=(r=0)=>{const d=a[r];return te(d).map(()=>({...ie(),subRows:a[r+1]?s(r+1):null}))};return s()}const le=()=>({id:j(10),accountName:de(),code:j(3),requestLimit:Math.floor(Math.random()*1e3),status:["Submited","Processing","Approval"][Math.floor(Math.random()*["Submited","Processing","Approval"].length)]??"Submited",progress:[{id:j(5),remarks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend iaculis sodales. Pellentesque at metus felis. Nulla fermentum ipsum nec orci laoreet, at rhoncus eros dictum.",createdAt:oe(new Date(2020,0,1),new Date(2029,11,31))}]});function ce(...a){return((r=0)=>{const d=a[r];return te(d).map(()=>({...le()}))})()}function de(){const a=["Miss Reilly Lemke","Elizabeth Friesen","Dr. Doyle Boehm","Domenica Zemlak DDS","Samson Bogan","Thora Hilll","Shannon Mann","Mrs. Barry Franecki","Kendrick Balistreri","Daphnee Durgan","Stevie Herman","Salvador Koelpin","Milo Torphy","Amelie Halvorson","Cora Weissnat IV","Rey Watsica","Alexandria Murray","Angeline Schowalter","Britney Cole","Marlene Bosco"];return`${a[Math.floor(Math.random()*a.length)]}`}const w=()=>{const[a,s]=p.useState(1),[r,d]=p.useState(()=>B(100)),u={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,manualFiltering:!0,getRowId:t=>t.id,enableRowSelection:t=>t.original.age>20},n=t=>{console.log(t)},l=t=>{console.log(t)},o=t=>{console.log(t)},h=y.useMemo(()=>[{id:"select",header:({table:t})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:t.getIsAllRowsSelected(),indeterminate:t.getIsSomeRowsSelected(),onChange:t.getToggleAllRowsSelectedHandler()})}),cell:({row:t})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!t.getCanSelect(),checked:t.getIsSelected(),indeterminate:t.getIsSomeSelected(),onChange:t.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:t=>t.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:t=>t.getValue(),header:()=>e.jsx("span",{children:"First Name"}),footer:t=>t.column.id,enableResizing:!1,enableGrouping:!1,enableColumnFilter:!0,meta:{editable:!0,updateData:(t,i,f)=>{d(b=>b.map((v,F)=>F===t?{...b[t],[i]:f}:v))}}},{accessorFn:t=>t.lastName,id:"lastName",cell:t=>t.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:t=>t.column.id,enableColumnFilter:!1,enableGrouping:!1,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:t=>t.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",enableColumnFilter:!0,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"status",header:"Status",enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"progress",header:"Profile Progress",cell:t=>t.getValue(),enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id}]}],[]);return e.jsxs(c,{data:r.slice((a-1)*10,a*10),columns:h,options:u,onManualSorting:n,onManualFilter:o,onChangeRowSelection:l,children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(g,{variant:"primary",children:"Button"}),e.jsx(g,{variant:"secondary",children:"Button"}),e.jsx(g,{variant:"ghost","aria-label":"Delete",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost","aria-label":"Dashboard",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{"aria-label":"File"})})]})]}),e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(S,{page:a,onChange:t=>s(t),total:10})]})]})]})},I=()=>{const[a]=y.useState(()=>ce(100)),[s,r]=p.useState(1),d={enableSorting:!1,enableMultiSort:!1,columnResizeMode:"onChange",manualSorting:!1},u=y.useMemo(()=>[{id:"expander",size:40,header:({table:l})=>e.jsx("span",{onClick:l.getToggleAllRowsExpandedHandler(),style:{cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:l.getIsAllRowsExpanded()?e.jsx(M,{}):e.jsx(K,{})}),cell:({row:l})=>e.jsx("span",{onClick:()=>l.toggleExpanded(),style:{cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:l.getIsExpanded()?e.jsx(M,{}):e.jsx(K,{})})},{id:"accountName",accessorKey:"accountName",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Account Name"}),footer:l=>l.column.id},{id:"code",accessorKey:"code",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Code"}),footer:l=>l.column.id},{id:"requestLimit",accessorKey:"requestLimit",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"New Request Limit"}),footer:l=>l.column.id},{id:"status",size:280,accessorKey:"status",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Status"}),footer:l=>l.column.id}],[]),n=l=>{var o;return e.jsxs("div",{style:{padding:"1em",display:"flex",flexDirection:"column",rowGap:"1em"},children:[e.jsxs("h3",{children:["Current Status: ",l.status]}),e.jsx("hr",{}),(o=l.progress)==null?void 0:o.map(h=>e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:"12px"},children:h.remarks}),e.jsx("p",{style:{fontSize:"11px",fontWeight:200,color:"#878787"},children:h.createdAt.toDateString()}),e.jsx("hr",{})]}))]})};return e.jsx("div",{children:e.jsx(c,{data:a,columns:u,options:d,renderRowSubComponent:n,css:{width:"65rem",table:{width:"unset"}},children:e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:{width:250},children:"Rows per page: "}),e.jsxs(x.Select,{defaultSelectedKey:"10",children:[e.jsx(x.Item,{children:"10 rows"},"10"),e.jsx(x.Item,{children:"20 rows"},"20"),e.jsx(x.Item,{children:"50 rows"},"50")]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(s-1)*10+1," - ",(s-1)*10+10," of 100"]}),e.jsx(S,{page:s,onChange:l=>r(l),total:10})]})]})})})},D=()=>{const[a,s]=p.useState(1),[r]=p.useState(()=>[]),d={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}]},u=y.useMemo(()=>[{id:"select",header:({table:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:n.getIsAllRowsSelected(),indeterminate:n.getIsSomeRowsSelected(),onChange:n.getToggleAllRowsSelectedHandler()})}),enableGrouping:!1,cell:({row:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!n.getCanSelect(),checked:n.getIsSelected(),indeterminate:n.getIsSomeSelected(),onChange:n.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:n=>n.getValue(),footer:n=>n.column.id,enableResizing:!1,editable:!0},{accessorFn:n=>n.lastName,id:"lastName",cell:n=>n.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:n=>n.column.id,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",footer:n=>n.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),footer:n=>n.column.id},{accessorKey:"status",header:"Status",cell:n=>e.jsx(k,{status:n.getValue()}),footer:n=>n.column.id},{accessorKey:"progress",header:"Profile Progress",cell:n=>e.jsx(A,{progress:Number(n.getValue())}),footer:n=>n.column.id}]}],[]);return e.jsx("div",{children:e.jsxs(c,{data:r,columns:u,options:d,children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(g,{variant:"primary",children:"Button"}),e.jsx(g,{variant:"secondary",children:"Button"}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})})]})]}),e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(S,{page:a,onChange:n=>s(n),total:10})]})]})]})})},R=()=>{const[a,s]=p.useState(1),[r]=p.useState(()=>[]),d={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}]},u=y.useMemo(()=>[{id:"select",header:({table:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:n.getIsAllRowsSelected(),indeterminate:n.getIsSomeRowsSelected(),onChange:n.getToggleAllRowsSelectedHandler()})}),enableGrouping:!1,cell:({row:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!n.getCanSelect(),checked:n.getIsSelected(),indeterminate:n.getIsSomeSelected(),onChange:n.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:n=>n.getValue(),footer:n=>n.column.id,enableResizing:!1,editable:!0},{accessorFn:n=>n.lastName,id:"lastName",cell:n=>n.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:n=>n.column.id,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",footer:n=>n.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),footer:n=>n.column.id},{accessorKey:"status",header:"Status",cell:n=>e.jsx(k,{status:n.getValue()}),footer:n=>n.column.id},{accessorKey:"progress",header:"Profile Progress",cell:n=>e.jsx(A,{progress:Number(n.getValue())}),footer:n=>n.column.id}]}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1. Default loading indicator"}),e.jsx(c,{data:r,columns:u,options:d,isLoading:!0,children:e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(S,{page:a,onChange:n=>s(n),total:10})]})]})}),e.jsx("br",{}),e.jsx("h3",{children:"2. Customized loading indicator"}),e.jsx(c,{data:r,columns:u,options:d,isLoading:!0,loadingIndicator:e.jsx(re,{}),children:e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(S,{page:a,onChange:n=>s(n),total:10})]})]})})]})},T=()=>{const[a,s]=p.useState(1),r=B(10),[d,u]=p.useState(r),[n]=p.useState(r),l={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,enableRowSelection:i=>i.original.age>30},o=()=>{},h=()=>{},t=y.useMemo(()=>[{id:"edit",size:120,cell:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(m,{})}),meta:{editable:!0,template:e.jsx(ge,{}),updateData:(i,f,b)=>{u(v=>v.map((F,ae)=>ae===i?{...b}:F))},revertData:i=>{u(f=>f.map((b,v)=>v===i?n[i]:b))}}},{accessorKey:"firstName",cell:i=>i.getValue(),header:()=>e.jsx("span",{children:"First Name"}),footer:i=>i.column.id,meta:{}},{accessorKey:"age",header:()=>"Age",footer:i=>i.column.id},{accessorKey:"status",header:"Status",footer:i=>i.column.id}],[n]);return e.jsx(e.Fragment,{children:e.jsxs(c,{data:d,columns:t,options:l,onManualSorting:o,onChangeRowSelection:h,id:"editableTable",children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(g,{variant:"primary",children:"Button"}),e.jsx(g,{variant:"secondary",children:"Button"}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})})]})]}),e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(S,{page:a,onChange:i=>s(i),total:10})]})]})]})})},ge=()=>{var h,t;const a=se(),[s,r]=p.useState({firstName:a.cell.row.getValue("firstName"),age:a.cell.row.getValue("age"),status:a.cell.row.getValue("status")}),d=i=>{r(f=>({...f,firstName:i}))},u=i=>{r(f=>({...f,age:i}))},n=i=>{r(f=>({...f,status:i}))},l=i=>{i.stopPropagation(),a.finishTemplateEditing(s)},o=i=>{i.stopPropagation(),a.cancelTemplateEditing()};return e.jsxs(C,{css:{width:(t=(h=document.getElementById("editableTable"))==null?void 0:h.querySelector("tr"))==null?void 0:t.clientWidth,backgroundColor:"$background",position:"absolute",zIndex:2},alignItems:"center",justifyContent:"spaceBetween",children:[e.jsxs(C.Item,{xs:2,sm:2,md:2,lg:2,xl:2,css:{display:"flex",justifyContent:"center",gap:5},children:[e.jsx(g,{onClick:l,size:"sm",children:e.jsx(m,{})}),e.jsx(g,{onClick:o,variant:"danger",size:"sm",children:e.jsx(m,{})})]}),e.jsx(C.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e.jsx(V,{value:s.firstName,onChange:d})}),e.jsx(C.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e.jsx(V,{type:"number",value:s.age,onChange:u})}),e.jsx(C.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e.jsxs(x.Select,{selectedKey:s.status,onSelectionChange:n,children:[e.jsx(x.Item,{children:"In Relationship"},"relationship"),e.jsx(x.Item,{children:"Complicated"},"complicated"),e.jsx(x.Item,{children:"Single"},"single")]})})]})},P=()=>{const[a,s]=p.useState(1),[r]=p.useState(()=>B(10)),d={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}]},u=o=>{console.log("stateSorting",o)},n=o=>{console.log("stateSelectedRows",o)},l=y.useMemo(()=>[{id:"select",header:({table:o})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:o.getIsAllRowsSelected(),indeterminate:o.getIsSomeRowsSelected(),onChange:o.getToggleAllRowsSelectedHandler()})}),enableGrouping:!1,cell:({row:o})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!o.getCanSelect(),checked:o.getIsSelected(),indeterminate:o.getIsSomeSelected(),onChange:o.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:o=>o.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:o=>o.getValue(),footer:o=>o.column.id,enableResizing:!1,editable:!0},{accessorFn:o=>o.lastName,id:"lastName",cell:o=>o.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:o=>o.column.id,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:o=>o.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",footer:o=>o.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),footer:o=>o.column.id},{accessorKey:"status",header:"Status",cell:o=>e.jsx(k,{status:o.getValue()}),footer:o=>o.column.id},{accessorKey:"progress",header:"Profile Progress",cell:o=>e.jsx(A,{progress:Number(o.getValue())}),footer:o=>o.column.id}]}],[]);return e.jsx("div",{children:e.jsxs(c,{data:r,columns:l,options:d,onManualSorting:u,onChangeRowSelection:n,children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(g,{variant:"primary",children:"Button"}),e.jsx(g,{variant:"secondary",children:"Button"}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(g,{variant:"ghost",children:e.jsx(m,{})})]})]}),e.jsx(c.Footer,{children:e.jsx(S,{rowsOptions:[5,10,15,20],rowsPerPage:5,onRowsPerPageChange:o=>{console.log(o)},page:a,total:10,onChange:o=>s(o),count:100})})]})})},k=({status:a})=>{const s=()=>{switch(a){case"relationship":return e.jsx(m,{});case"complicated":return e.jsx(m,{});case"single":return e.jsx(m,{});default:return null}};return e.jsxs("div",{children:[e.jsx("span",{style:{paddingRight:"5px"},children:s()}),e.jsx("span",{children:a})]})},St={title:"Example/Table ",component:w,tags:["autodocs"],parameters:{layout:"fullscreen"}};w.__docgenInfo={description:"",methods:[],displayName:"Basic"};I.__docgenInfo={description:"",methods:[],displayName:"ExpandableRow"};D.__docgenInfo={description:"",methods:[],displayName:"EmptyState"};R.__docgenInfo={description:"",methods:[],displayName:"Loading"};T.__docgenInfo={description:"",methods:[],displayName:"EditableTemplateCell"};P.__docgenInfo={description:"",methods:[],displayName:"DataGrid"};var z,G,H;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Person[]>(() => makeData(100));
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    manualFiltering: true,
    getRowId: row => row.id,
    enableRowSelection: row => row.original.age > 20
  };
  const onSorting = (sortingField: TableSortingState) => {
    console.log(sortingField);
  };
  const onChangeRowSelection = (rowSelection: unknown) => {
    console.log(rowSelection);
  };
  const onFiltering = (filtering: TableColumnFiltersState) => {
    console.log(filtering);
  };
  const columns = React.useMemo<Array<TableColumnDef<Person>>>(() => [{
    id: 'select',
    header: ({
      table
    }) => {
      return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
              <Table.CheckboxCell checked={table.getIsAllRowsSelected()} indeterminate={table.getIsSomeRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
            </div>;
    },
    cell: ({
      row
    }) => <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            <Table.CheckboxCell disabled={!row.getCanSelect()} checked={row.getIsSelected()} indeterminate={row.getIsSomeSelected()} onChange={row.getToggleSelectedHandler()} />
          </div>
  }, {
    id: 'name',
    header: () => <div style={{
      textAlign: 'center'
    }}>Name</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'firstName',
      cell: info => info.getValue<string>(),
      header: () => <span>First Name</span>,
      footer: props => props.column.id,
      enableResizing: false,
      enableGrouping: false,
      enableColumnFilter: true,
      meta: {
        editable: true,
        updateData: (rowIndex: number, id: string, value: unknown) => {
          setData((old: Person[]) => old.map((row, index) => {
            if (index === rowIndex) {
              return ({
                ...old[rowIndex],
                [id]: value
              } as Person);
            }
            return row;
          }));
        }
      }
    }, {
      accessorFn: row => row.lastName,
      id: 'lastName',
      cell: info => info.getValue<string>(),
      header: () => <span>Last Name</span>,
      footer: props => props.column.id,
      enableColumnFilter: false,
      enableGrouping: false,
      enableResizing: true
    }]
  }, {
    id: 'otherInfo',
    header: () => <div style={{
      textAlign: 'center'
    }}>Other info</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'age',
      header: () => 'Age',
      enableColumnFilter: true,
      enableGrouping: false,
      footer: info => info.column.id
    }, {
      accessorKey: 'visits',
      header: () => <span>Visits</span>,
      enableColumnFilter: false,
      enableGrouping: false,
      footer: info => info.column.id
    }, {
      accessorKey: 'status',
      header: 'Status',
      enableColumnFilter: false,
      enableGrouping: false,
      footer: info => info.column.id
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      cell: info => info.getValue<string>(),
      enableColumnFilter: false,
      enableGrouping: false,
      footer: info => info.column.id
    }]
  }], []);
  return <Table data={data.slice((page - 1) * 10, page * 10)}
  // data={data}
  columns={columns} options={options} onManualSorting={onSorting} onManualFilter={onFiltering} onChangeRowSelection={onChangeRowSelection}>
      <Table.Toolbar css={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
        <SearchField placeholder='Search' />

        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <Button variant='primary'>Button</Button>
          <Button variant='secondary'>Button</Button>
          <Button variant='ghost' aria-label='Delete'>
            <HeartFilled />
          </Button>
          <Button variant='ghost' aria-label='Dashboard'>
            <HeartFilled />
          </Button>
          <Button variant='ghost'>
            <HeartFilled aria-label='File' />
          </Button>
        </div>
      </Table.Toolbar>
      <Table.Footer css={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }}>
        <div>{/* Todo: Dropdown */}</div>
        <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
          <div style={{
          fontWeight: '600'
        }}>
            {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
          </div>
          <Pagination page={page} onChange={page => setPage(page)} total={10} />
        </div>
      </Table.Footer>
    </Table>;
}`,...(H=(G=w.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,E,q;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const [data] = React.useState(() => makeRequestStatusData(100));
  const [page, setPage] = useState(1);
  const options: OptionType<LimitRequestStatus> = {
    enableSorting: false,
    enableMultiSort: false,
    columnResizeMode: 'onChange',
    manualSorting: false
  };
  const columns = React.useMemo<Array<TableColumnDef<LimitRequestStatus>>>(() => [{
    id: 'expander',
    size: 40,
    header: ({
      table
    }: TableHeaderContext<LimitRequestStatus, unknown>) => <span onClick={table.getToggleAllRowsExpandedHandler()} style={{
      cursor: 'pointer',
      userSelect: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            {table.getIsAllRowsExpanded() ? <ArrowDown /> : <ArrowRight />}
          </span>,
    cell: ({
      row
    }: TableCellContext<LimitRequestStatus, unknown>) => <span onClick={() => row.toggleExpanded()} style={{
      cursor: 'pointer',
      userSelect: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            {row.getIsExpanded() ? <ArrowDown /> : <ArrowRight />}
          </span>
  }, {
    id: 'accountName',
    accessorKey: 'accountName',
    header: () => <div style={{
      textAlign: 'center'
    }}>Account Name</div>,
    footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) => props.column.id
  }, {
    id: 'code',
    accessorKey: 'code',
    header: () => <div style={{
      textAlign: 'center'
    }}>Code</div>,
    footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) => props.column.id
  }, {
    id: 'requestLimit',
    accessorKey: 'requestLimit',
    header: () => <div style={{
      textAlign: 'center'
    }}>New Request Limit</div>,
    footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) => props.column.id
  }, {
    id: 'status',
    size: 280,
    accessorKey: 'status',
    header: () => <div style={{
      textAlign: 'center'
    }}>Status</div>,
    footer: (props: TableHeaderContext<LimitRequestStatus, unknown>) => props.column.id
  }], []);
  const renderRowSubComponent = (rowData: LimitRequestStatus) => {
    return <div style={{
      padding: '1em',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '1em'
    }}>
        <h3>Current Status: {rowData.status}</h3>
        {/* <Divider /> */}
        <hr />
        {rowData.progress?.map(processItem => {
        return <>
              <p style={{
            fontSize: '12px'
          }}>{processItem.remarks}</p>
              <p style={{
            fontSize: '11px',
            fontWeight: 200,
            color: '#878787'
          }}>
                {processItem.createdAt.toDateString()}
              </p>
              {/* <Divider /> */}
              <hr />
            </>;
      })}
      </div>;
  };
  return <div>
      <Table data={data} columns={columns} options={options} renderRowSubComponent={renderRowSubComponent} css={{
      width: '65rem',
      table: {
        width: 'unset'
      }
    }}>
        <Table.Footer css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
            <span style={{
            width: 250
          }}>Rows per page: </span>
            <Dropdown.Select defaultSelectedKey='10'>
              <Dropdown.Item key='10'>10 rows</Dropdown.Item>
              <Dropdown.Item key='20'>20 rows</Dropdown.Item>
              <Dropdown.Item key='50'>50 rows</Dropdown.Item>
            </Dropdown.Select>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <div style={{
            fontWeight: '600'
          }}>
              {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
            </div>
            <Pagination page={page} onChange={(page: number) => setPage(page)} total={10} />
          </div>
        </Table.Footer>
      </Table>
    </div>;
}`,...(q=(E=I.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var O,W,_;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [data] = useState<Person[]>(() => []);
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [{
      id: 'firstName',
      desc: true
    }, {
      id: 'lastName',
      desc: false
    }]
  };
  const columns = React.useMemo<Array<TableColumnDef<Person>>>(() => [{
    id: 'select',
    header: ({
      table
    }) => {
      return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
              <Table.CheckboxCell {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }} />
            </div>;
    },
    enableGrouping: false,
    cell: ({
      row
    }) => <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            <Table.CheckboxCell {...{
        disabled: !row.getCanSelect(),
        checked: row.getIsSelected(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler()
      }} />
          </div>
  }, {
    id: 'name',
    header: () => <div style={{
      textAlign: 'center'
    }}>Name</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'firstName',
      cell: info => info.getValue<string>(),
      footer: props => props.column.id,
      enableResizing: false,
      editable: true
    }, {
      accessorFn: row => row.lastName,
      id: 'lastName',
      cell: info => info.getValue<string>(),
      header: () => <span>Last Name</span>,
      footer: props => props.column.id,
      enableResizing: true
    }]
  }, {
    id: 'otherInfo',
    header: () => <div style={{
      textAlign: 'center'
    }}>Other info</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'age',
      header: () => 'Age',
      footer: info => info.column.id
    }, {
      accessorKey: 'visits',
      header: () => <span>Visits</span>,
      footer: info => info.column.id
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => <StatusComponent status={info.getValue<string>()}></StatusComponent>,
      footer: info => info.column.id
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      cell: info => <ProgressPercentage progress={Number(info.getValue<string>())}></ProgressPercentage>,
      footer: info => info.column.id
    }]
  }], []);
  return <div>
      <Table data={data} columns={columns} options={options}>
        <Table.Toolbar css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <SearchField placeholder='Search' />

          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
          </div>
        </Table.Toolbar>
        <Table.Footer css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <div>{/* Todo: Dropdown */}</div>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <div style={{
            fontWeight: '600'
          }}>
              {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
            </div>
            <Pagination page={page} onChange={page => setPage(page)} total={10} />
          </div>
        </Table.Footer>
      </Table>
    </div>;
}`,...(_=(W=D.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var Z,$,J;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [data] = useState<Person[]>(() => []);
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [{
      id: 'firstName',
      desc: true
    }, {
      id: 'lastName',
      desc: false
    }]
  };
  const columns = React.useMemo<Array<TableColumnDef<Person>>>(() => [{
    id: 'select',
    header: ({
      table
    }) => {
      return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
              <Table.CheckboxCell {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }} />
            </div>;
    },
    enableGrouping: false,
    cell: ({
      row
    }) => <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            <Table.CheckboxCell {...{
        disabled: !row.getCanSelect(),
        checked: row.getIsSelected(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler()
      }} />
          </div>
  }, {
    id: 'name',
    header: () => <div style={{
      textAlign: 'center'
    }}>Name</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'firstName',
      cell: info => info.getValue<string>(),
      footer: props => props.column.id,
      enableResizing: false,
      editable: true
    }, {
      accessorFn: row => row.lastName,
      id: 'lastName',
      cell: info => info.getValue<string>(),
      header: () => <span>Last Name</span>,
      footer: props => props.column.id,
      enableResizing: true
    }]
  }, {
    id: 'otherInfo',
    header: () => <div style={{
      textAlign: 'center'
    }}>Other info</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'age',
      header: () => 'Age',
      footer: info => info.column.id
    }, {
      accessorKey: 'visits',
      header: () => <span>Visits</span>,
      footer: info => info.column.id
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => <StatusComponent status={info.getValue<string>()}></StatusComponent>,
      footer: info => info.column.id
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      cell: info => <ProgressPercentage progress={Number(info.getValue<string>())}></ProgressPercentage>,
      footer: info => info.column.id
    }]
  }], []);
  return <>
      <h3>1. Default loading indicator</h3>
      <Table data={data} columns={columns} options={options} isLoading>
        <Table.Footer css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <div>{/* Todo: Dropdown */}</div>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <div style={{
            fontWeight: '600'
          }}>
              {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
            </div>
            <Pagination page={page} onChange={page => setPage(page)} total={10} />
          </div>
        </Table.Footer>
      </Table>
      <br />
      <h3>2. Customized loading indicator</h3>
      <Table data={data} columns={columns} options={options} isLoading loadingIndicator={<Spinner />}>
        <Table.Footer css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <div>{/* Todo: Dropdown */}</div>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <div style={{
            fontWeight: '600'
          }}>
              {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
            </div>
            <Pagination page={page} onChange={page => setPage(page)} total={10} />
          </div>
        </Table.Footer>
      </Table>
    </>;
}`,...(J=($=R.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var Q,U,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const personData = makeData(10);
  const [data, setData] = useState<Person[]>(personData);
  const [originalData] = useState<Person[]>(personData);
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    enableRowSelection: row => row.original.age > 30
  };
  const onSorting = () => {};
  const onChangeRowSelection = () => {};
  const columns = React.useMemo<Array<TableColumnDef<Person>>>(() => [{
    id: 'edit',
    size: 120,
    cell: () => <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            <HeartFilled />
          </div>,
    meta: {
      editable: true,
      template: <PersonTemplateCell />,
      updateData: (rowIndex: number, id: string, value: object) => {
        setData((old: Person[]) => old.map((row, index) => {
          if (index === rowIndex) {
            return ({
              ...value
            } as Person);
          }
          return row;
        }));
      },
      revertData: (rowIndex: number) => {
        // if (revert) {
        setData(old => old.map((row, index) => index === rowIndex ? (originalData[rowIndex] as Person) : row));
      }
    }
  }, {
    accessorKey: 'firstName',
    cell: info => info.getValue<string>(),
    header: () => <span>First Name</span>,
    footer: props => props.column.id,
    meta: {}
  }, {
    accessorKey: 'age',
    header: () => 'Age',
    footer: info => info.column.id
  }, {
    accessorKey: 'status',
    header: 'Status',
    footer: info => info.column.id
  }], [originalData]);
  return <>
      <Table data={data} columns={columns} options={options} onManualSorting={onSorting} onChangeRowSelection={onChangeRowSelection} id='editableTable'>
        <Table.Toolbar css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <SearchField placeholder='Search' />

          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
          </div>
        </Table.Toolbar>
        <Table.Footer css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <div>{/* Todo: Dropdown */}</div>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <div style={{
            fontWeight: '600'
          }}>
              {(page - 1) * 10 + 1} - {(page - 1) * 10 + 10} of 100
            </div>
            <Pagination page={page} onChange={page => setPage(page)} total={10} />
          </div>
        </Table.Footer>
      </Table>
    </>;
}`,...(X=(U=T.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,ee,ne;P.parameters={...P.parameters,docs:{...(Y=P.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const [page, setPage] = useState(1);
  const [data] = useState<Person[]>(() => makeData(10));
  const options: OptionType<Person> = {
    enableSorting: true,
    enableMultiSort: true,
    columnResizeMode: 'onChange',
    manualSorting: false,
    initialSortBy: [{
      id: 'firstName',
      desc: true
    }, {
      id: 'lastName',
      desc: false
    }]
  };
  const onSorting = (sortingField: TableSortingState) => {
    console.log('stateSorting', sortingField);
  };
  const onChangeRowSelection = (rowSelection: Person[]) => {
    console.log('stateSelectedRows', rowSelection);
  };
  const columns = React.useMemo<Array<TableColumnDef<Person>>>(() => [{
    id: 'select',
    header: ({
      table
    }) => {
      return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
              <Table.CheckboxCell {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }} />
            </div>;
    },
    enableGrouping: false,
    cell: ({
      row
    }) => <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
            <Table.CheckboxCell {...{
        disabled: !row.getCanSelect(),
        checked: row.getIsSelected(),
        indeterminate: row.getIsSomeSelected(),
        onChange: row.getToggleSelectedHandler()
      }} />
          </div>
  }, {
    id: 'name',
    header: () => <div style={{
      textAlign: 'center'
    }}>Name</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'firstName',
      cell: info => info.getValue<string>(),
      footer: props => props.column.id,
      enableResizing: false,
      editable: true
    }, {
      accessorFn: row => row.lastName,
      id: 'lastName',
      cell: info => info.getValue<string>(),
      header: () => <span>Last Name</span>,
      footer: props => props.column.id,
      enableResizing: true
    }]
  }, {
    id: 'otherInfo',
    header: () => <div style={{
      textAlign: 'center'
    }}>Other info</div>,
    footer: props => props.column.id,
    enableGrouping: false,
    columns: [{
      accessorKey: 'age',
      header: () => 'Age',
      footer: info => info.column.id
    }, {
      accessorKey: 'visits',
      header: () => <span>Visits</span>,
      footer: info => info.column.id
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => <StatusComponent status={info.getValue<string>()}></StatusComponent>,
      footer: info => info.column.id
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      cell: info => <ProgressPercentage progress={Number(info.getValue<string>())}></ProgressPercentage>,
      footer: info => info.column.id
    }]
  }], []);
  return <div>
      <Table data={data} columns={columns} options={options} onManualSorting={onSorting} onChangeRowSelection={onChangeRowSelection}>
        <Table.Toolbar css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
          <SearchField placeholder='Search' />

          <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
            <Button variant='primary'>Button</Button>
            <Button variant='secondary'>Button</Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
            <Button variant='ghost'>
              <HeartFilled />
            </Button>
          </div>
        </Table.Toolbar>
        <Table.Footer>
          <Pagination rowsOptions={[5, 10, 15, 20]} rowsPerPage={5} onRowsPerPageChange={rows => {
          console.log(rows);
        }} page={page} total={10} onChange={page => setPage(page)} count={100}></Pagination>
        </Table.Footer>
      </Table>
    </div>;
}`,...(ne=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const bt=["Basic","ExpandableRow","EmptyState","Loading","EditableTemplateCell","DataGrid"];export{w as Basic,P as DataGrid,T as EditableTemplateCell,D as EmptyState,I as ExpandableRow,R as Loading,bt as __namedExportsOrder,St as default};
