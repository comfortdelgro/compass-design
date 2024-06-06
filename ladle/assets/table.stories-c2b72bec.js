import{j as e}from"./jsx-runtime-ea7736fc.js";import{A as M}from"./arrow-down-b8d0786b.js";import{A as K}from"./arrow-right-20c3256f.js";import{H as m}from"./heart-filled-5f2b210b.js";import{r as p,R as y}from"./index-6c164b11.js";import{T as c,k as A,u as se}from"./index-cdf7513e.js";import"./index-9178f86c.js";import"./index-0c922b64.js";import"./index-cc86efa4.js";import"./index-03cff320.js";import"./index-47a1c304.js";import"./index-ce1c8671.js";import"./index-0d53bb30.js";import"./index-3170d50c.js";import"./index-7972436d.js";import"./index-d697583f.js";import"./index-02337fb0.js";import"./index-7a7498f5.js";import"./index-e7f2b220.js";import"./index-33fba25f.js";import"./index-4cb193f3.js";import"./index-579e501f.js";import"./index-82dc4608.js";import"./index-14a5a860.js";import{S as x}from"./index-3e7fd8c3.js";import"./index-9b877fe0.js";import"./index-1fd2fc01.js";import{G as C}from"./index-58b33020.js";import"./index-3c6de7b1.js";import"./Viewer-a8f46180.js";import"./calendar-17db7acc.js";import"./NumberParser-bd499a26.js";import"./index-44f80ede.js";import"./index-9cc0ffcb.js";import"./index-489b6ecb.js";import"./index-f93f9dc9.js";import"./index-6f96fe02.js";import"./index-10d8d6ed.js";import"./index-77063761.js";import"./index-0ae06ec8.js";import"./index-9ee83bda.js";import"./index-1e91b611.js";import"./index-b6f73d5b.js";import{P as b}from"./index-b3d59218.js";import"./index-f318de67.js";import"./index-be599a31.js";import"./index-f484f2a1.js";import"./index-73b3188c.js";import"./index-8bd325fb.js";import"./index-584a999a.js";import"./index-252633e7.js";import{S as N}from"./index-27851459.js";import"./index-109ea52a.js";import"./index-5a173c15.js";import"./index-5e221ed0.js";import"./video-player-e278bccf.js";import"./useSnackbar-234ef792.js";import{S as re}from"./index-d488ea9b.js";import"./index-aea15489.js";import"./index-b8816cdb.js";import"./index-16d9e09a.js";import"./index-90af5112.js";import"./index-b1157fd5.js";import"./index-34b8f82d.js";import"./index-9fb2cabb.js";import{T as V}from"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./index-722c9b20.js";import"./Row-e65f206d.js";import"./index-1825d005.js";import"./index-0a0dc8f5.js";import"./index-9b621ca4.js";import"./index-52a97e3f.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-aff350d4.js";import"./index-14d7a7b1.js";import{B as u}from"./button-be34d763.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-c116e6b4.js";import"./date-picker-2b47ac6c.js";import"./index-4593f2b5.js";import"./dropdown-textfield-210a5270.js";import"./index-eb8c837f.js";import"./string-de12cf5f.js";import"./rating-ca365a65.js";import"./slide-action-b34e09b0.js";import"./useDrag-c728562f.js";import"./speed-dial-f74b5546.js";import"./floating-ui.react.esm-06842318.js";import"./index-318acb9e.js";import"./tooltip-trigger-04cfd43d.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./layout-5fac5c12.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-0d3b18cd.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const te=a=>{const s=[];for(let r=0;r<a;r++)s.push(r);return s},j=a=>{let s="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=r.length;for(let g=0;g<a;g++)s+=r.charAt(Math.floor(Math.random()*d));return s},oe=(a,s)=>{const r=a.getTime(),d=s.getTime(),g=Math.floor(Math.random()*(d-r+1)+r);return new Date(g)},ie=()=>({id:j(10),firstName:j(5),lastName:j(5),age:Math.floor(Math.random()*40),visits:Math.floor(Math.random()*1e3),progress:Math.floor(Math.random()*100),createdAt:oe(new Date(2020,0,1),new Date(2029,11,31)),status:["relationship","complicated","single"][Math.floor(Math.random()*["relationship","complicated","single"].length)]});function B(...a){const s=(r=0)=>{const d=a[r];return te(d).map(()=>({...ie(),subRows:a[r+1]?s(r+1):null}))};return s()}const le=()=>({id:j(10),accountName:de(),code:j(3),requestLimit:Math.floor(Math.random()*1e3),status:["Submited","Processing","Approval"][Math.floor(Math.random()*["Submited","Processing","Approval"].length)]??"Submited",progress:[{id:j(5),remarks:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend iaculis sodales. Pellentesque at metus felis. Nulla fermentum ipsum nec orci laoreet, at rhoncus eros dictum.",createdAt:oe(new Date(2020,0,1),new Date(2029,11,31))}]});function ce(...a){return((r=0)=>{const d=a[r];return te(d).map(()=>({...le()}))})()}function de(){const a=["Miss Reilly Lemke","Elizabeth Friesen","Dr. Doyle Boehm","Domenica Zemlak DDS","Samson Bogan","Thora Hilll","Shannon Mann","Mrs. Barry Franecki","Kendrick Balistreri","Daphnee Durgan","Stevie Herman","Salvador Koelpin","Milo Torphy","Amelie Halvorson","Cora Weissnat IV","Rey Watsica","Alexandria Murray","Angeline Schowalter","Britney Cole","Marlene Bosco"];return`${a[Math.floor(Math.random()*a.length)]}`}const w=()=>{const[a,s]=p.useState(1),[r,d]=p.useState(()=>B(100)),g={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,manualFiltering:!0,getRowId:t=>t.id,enableRowSelection:t=>t.original.age>20},n=t=>{console.log(t)},l=t=>{console.log(t)},o=t=>{console.log(t)},h=y.useMemo(()=>[{id:"select",header:({table:t})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:t.getIsAllRowsSelected(),indeterminate:t.getIsSomeRowsSelected(),onChange:t.getToggleAllRowsSelectedHandler()})}),cell:({row:t})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!t.getCanSelect(),checked:t.getIsSelected(),indeterminate:t.getIsSomeSelected(),onChange:t.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:t=>t.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:t=>t.getValue(),header:()=>e.jsx("span",{children:"First Name"}),footer:t=>t.column.id,enableResizing:!1,enableGrouping:!1,enableColumnFilter:!0,meta:{editable:!0,updateData:(t,i,f)=>{d(S=>S.map((v,F)=>F===t?{...S[t],[i]:f}:v))}}},{accessorFn:t=>t.lastName,id:"lastName",cell:t=>t.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:t=>t.column.id,enableColumnFilter:!1,enableGrouping:!1,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:t=>t.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",enableColumnFilter:!0,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"status",header:"Status",enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"progress",header:"Profile Progress",cell:t=>t.getValue(),enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id}]}],[]);return e.jsxs(c,{data:r.slice((a-1)*10,a*10),columns:h,options:g,onManualSorting:n,onManualFilter:o,onChangeRowSelection:l,children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(u,{variant:"primary",children:"Button"}),e.jsx(u,{variant:"secondary",children:"Button"}),e.jsx(u,{variant:"ghost","aria-label":"Delete",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost","aria-label":"Dashboard",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{"aria-label":"File"})})]})]}),e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(b,{page:a,onChange:t=>s(t),total:10})]})]})]})},I=()=>{const[a]=y.useState(()=>ce(100)),[s,r]=p.useState(1),d={enableSorting:!1,enableMultiSort:!1,columnResizeMode:"onChange",manualSorting:!1},g=y.useMemo(()=>[{id:"expander",size:40,header:({table:l})=>e.jsx("span",{onClick:l.getToggleAllRowsExpandedHandler(),style:{cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:l.getIsAllRowsExpanded()?e.jsx(M,{}):e.jsx(K,{})}),cell:({row:l})=>e.jsx("span",{onClick:()=>l.toggleExpanded(),style:{cursor:"pointer",userSelect:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:l.getIsExpanded()?e.jsx(M,{}):e.jsx(K,{})})},{id:"accountName",accessorKey:"accountName",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Account Name"}),footer:l=>l.column.id},{id:"code",accessorKey:"code",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Code"}),footer:l=>l.column.id},{id:"requestLimit",accessorKey:"requestLimit",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"New Request Limit"}),footer:l=>l.column.id},{id:"status",size:280,accessorKey:"status",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Status"}),footer:l=>l.column.id}],[]),n=l=>{var o;return e.jsxs("div",{style:{padding:"1em",display:"flex",flexDirection:"column",rowGap:"1em"},children:[e.jsxs("h3",{children:["Current Status: ",l.status]}),e.jsx("hr",{}),(o=l.progress)==null?void 0:o.map(h=>e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:"12px"},children:h.remarks}),e.jsx("p",{style:{fontSize:"11px",fontWeight:200,color:"#878787"},children:h.createdAt.toDateString()}),e.jsx("hr",{})]}))]})};return e.jsx("div",{children:e.jsx(c,{data:a,columns:g,options:d,renderRowSubComponent:n,css:{width:"65rem",table:{width:"unset"}},children:e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("span",{style:{width:250},children:"Rows per page: "}),e.jsxs(x.Select,{defaultSelectedKey:"10",children:[e.jsx(x.Item,{children:"10 rows"},"10"),e.jsx(x.Item,{children:"20 rows"},"20"),e.jsx(x.Item,{children:"50 rows"},"50")]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(s-1)*10+1," - ",(s-1)*10+10," of 100"]}),e.jsx(b,{page:s,onChange:l=>r(l),total:10})]})]})})})},D=()=>{const[a,s]=p.useState(1),[r]=p.useState(()=>[]),d={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}]},g=y.useMemo(()=>[{id:"select",header:({table:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:n.getIsAllRowsSelected(),indeterminate:n.getIsSomeRowsSelected(),onChange:n.getToggleAllRowsSelectedHandler()})}),enableGrouping:!1,cell:({row:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!n.getCanSelect(),checked:n.getIsSelected(),indeterminate:n.getIsSomeSelected(),onChange:n.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:n=>n.getValue(),footer:n=>n.column.id,enableResizing:!1,editable:!0},{accessorFn:n=>n.lastName,id:"lastName",cell:n=>n.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:n=>n.column.id,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",footer:n=>n.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),footer:n=>n.column.id},{accessorKey:"status",header:"Status",cell:n=>e.jsx(k,{status:n.getValue()}),footer:n=>n.column.id},{accessorKey:"progress",header:"Profile Progress",cell:n=>e.jsx(A,{progress:Number(n.getValue())}),footer:n=>n.column.id}]}],[]);return e.jsx("div",{children:e.jsxs(c,{data:r,columns:g,options:d,children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(u,{variant:"primary",children:"Button"}),e.jsx(u,{variant:"secondary",children:"Button"}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})})]})]}),e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(b,{page:a,onChange:n=>s(n),total:10})]})]})]})})},R=()=>{const[a,s]=p.useState(1),[r]=p.useState(()=>[]),d={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}]},g=y.useMemo(()=>[{id:"select",header:({table:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:n.getIsAllRowsSelected(),indeterminate:n.getIsSomeRowsSelected(),onChange:n.getToggleAllRowsSelectedHandler()})}),enableGrouping:!1,cell:({row:n})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!n.getCanSelect(),checked:n.getIsSelected(),indeterminate:n.getIsSomeSelected(),onChange:n.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:n=>n.getValue(),footer:n=>n.column.id,enableResizing:!1,editable:!0},{accessorFn:n=>n.lastName,id:"lastName",cell:n=>n.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:n=>n.column.id,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:n=>n.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",footer:n=>n.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),footer:n=>n.column.id},{accessorKey:"status",header:"Status",cell:n=>e.jsx(k,{status:n.getValue()}),footer:n=>n.column.id},{accessorKey:"progress",header:"Profile Progress",cell:n=>e.jsx(A,{progress:Number(n.getValue())}),footer:n=>n.column.id}]}],[]);return e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"1. Default loading indicator"}),e.jsx(c,{data:r,columns:g,options:d,isLoading:!0,children:e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(b,{page:a,onChange:n=>s(n),total:10})]})]})}),e.jsx("br",{}),e.jsx("h3",{children:"2. Customized loading indicator"}),e.jsx(c,{data:r,columns:g,options:d,isLoading:!0,loadingIndicator:e.jsx(re,{}),children:e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(b,{page:a,onChange:n=>s(n),total:10})]})]})})]})},T=()=>{const[a,s]=p.useState(1),r=B(10),[d,g]=p.useState(r),[n]=p.useState(r),l={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,enableRowSelection:i=>i.original.age>30},o=()=>{},h=()=>{},t=y.useMemo(()=>[{id:"edit",size:120,cell:()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(m,{})}),meta:{editable:!0,template:e.jsx(ue,{}),updateData:(i,f,S)=>{g(v=>v.map((F,ae)=>ae===i?{...S}:F))},revertData:i=>{g(f=>f.map((S,v)=>v===i?n[i]:S))}}},{accessorKey:"firstName",cell:i=>i.getValue(),header:()=>e.jsx("span",{children:"First Name"}),footer:i=>i.column.id,meta:{}},{accessorKey:"age",header:()=>"Age",footer:i=>i.column.id},{accessorKey:"status",header:"Status",footer:i=>i.column.id}],[n]);return e.jsx(e.Fragment,{children:e.jsxs(c,{data:d,columns:t,options:l,onManualSorting:o,onChangeRowSelection:h,id:"editableTable",children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(u,{variant:"primary",children:"Button"}),e.jsx(u,{variant:"secondary",children:"Button"}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})})]})]}),e.jsxs(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx("div",{}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsxs("div",{style:{fontWeight:"600"},children:[(a-1)*10+1," - ",(a-1)*10+10," of 100"]}),e.jsx(b,{page:a,onChange:i=>s(i),total:10})]})]})]})})},ue=()=>{var h,t;const a=se(),[s,r]=p.useState({firstName:a.cell.row.getValue("firstName"),age:a.cell.row.getValue("age"),status:a.cell.row.getValue("status")}),d=i=>{r(f=>({...f,firstName:i}))},g=i=>{r(f=>({...f,age:i}))},n=i=>{r(f=>({...f,status:i}))},l=i=>{i.stopPropagation(),a.finishTemplateEditing(s)},o=i=>{i.stopPropagation(),a.cancelTemplateEditing()};return e.jsxs(C,{css:{width:(t=(h=document.getElementById("editableTable"))==null?void 0:h.querySelector("tr"))==null?void 0:t.clientWidth,backgroundColor:"$background",position:"absolute",zIndex:2},alignItems:"center",justifyContent:"spaceBetween",children:[e.jsxs(C.Item,{xs:2,sm:2,md:2,lg:2,xl:2,css:{display:"flex",justifyContent:"center",gap:5},children:[e.jsx(u,{onClick:l,size:"sm",children:e.jsx(m,{})}),e.jsx(u,{onClick:o,variant:"danger",size:"sm",children:e.jsx(m,{})})]}),e.jsx(C.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e.jsx(V,{value:s.firstName,onChange:d})}),e.jsx(C.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e.jsx(V,{type:"number",value:s.age,onChange:g})}),e.jsx(C.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e.jsxs(x.Select,{selectedKey:s.status,onSelectionChange:n,children:[e.jsx(x.Item,{children:"In Relationship"},"relationship"),e.jsx(x.Item,{children:"Complicated"},"complicated"),e.jsx(x.Item,{children:"Single"},"single")]})})]})},P=()=>{const[a,s]=p.useState(1),[r]=p.useState(()=>B(10)),d={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}]},g=o=>{console.log("stateSorting",o)},n=o=>{console.log("stateSelectedRows",o)},l=y.useMemo(()=>[{id:"select",header:({table:o})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{checked:o.getIsAllRowsSelected(),indeterminate:o.getIsSomeRowsSelected(),onChange:o.getToggleAllRowsSelectedHandler()})}),enableGrouping:!1,cell:({row:o})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsx(c.CheckboxCell,{disabled:!o.getCanSelect(),checked:o.getIsSelected(),indeterminate:o.getIsSomeSelected(),onChange:o.getToggleSelectedHandler()})})},{id:"name",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Name"}),footer:o=>o.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:o=>o.getValue(),footer:o=>o.column.id,enableResizing:!1,editable:!0},{accessorFn:o=>o.lastName,id:"lastName",cell:o=>o.getValue(),header:()=>e.jsx("span",{children:"Last Name"}),footer:o=>o.column.id,enableResizing:!0}]},{id:"otherInfo",header:()=>e.jsx("div",{style:{textAlign:"center"},children:"Other info"}),footer:o=>o.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",footer:o=>o.column.id},{accessorKey:"visits",header:()=>e.jsx("span",{children:"Visits"}),footer:o=>o.column.id},{accessorKey:"status",header:"Status",cell:o=>e.jsx(k,{status:o.getValue()}),footer:o=>o.column.id},{accessorKey:"progress",header:"Profile Progress",cell:o=>e.jsx(A,{progress:Number(o.getValue())}),footer:o=>o.column.id}]}],[]);return e.jsx("div",{children:e.jsxs(c,{data:r,columns:l,options:d,onManualSorting:g,onChangeRowSelection:n,children:[e.jsxs(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsx(N,{placeholder:"Search"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e.jsx(u,{variant:"primary",children:"Button"}),e.jsx(u,{variant:"secondary",children:"Button"}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})}),e.jsx(u,{variant:"ghost",children:e.jsx(m,{})})]})]}),e.jsx(c.Footer,{children:e.jsx(b,{rowsOptions:[5,10,15,20],rowsPerPage:5,onRowsPerPageChange:o=>{console.log(o)},page:a,total:10,onChange:o=>s(o),count:100})})]})})},k=({status:a})=>{const s=()=>{switch(a){case"relationship":return e.jsx(m,{});case"complicated":return e.jsx(m,{});case"single":return e.jsx(m,{});default:return null}};return e.jsxs("div",{children:[e.jsx("span",{style:{paddingRight:"5px"},children:s()}),e.jsx("span",{children:a})]})},yt={title:"Example/Table ",component:w,tags:["autodocs"],parameters:{layout:"fullscreen"}};w.__docgenInfo={description:"",methods:[],displayName:"Basic"};I.__docgenInfo={description:"",methods:[],displayName:"ExpandableRow"};D.__docgenInfo={description:"",methods:[],displayName:"EmptyState"};R.__docgenInfo={description:"",methods:[],displayName:"Loading"};T.__docgenInfo={description:"",methods:[],displayName:"EditableTemplateCell"};P.__docgenInfo={description:"",methods:[],displayName:"DataGrid"};var z,G,H;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSorting = (sortingField: TableSortingState) => {
    console.log(sortingField);
  };
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onSorting = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
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
}`,...(ne=(ee=P.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const bt=["Basic","ExpandableRow","EmptyState","Loading","EditableTemplateCell","DataGrid"];export{w as Basic,P as DataGrid,T as EditableTemplateCell,D as EmptyState,I as ExpandableRow,R as Loading,bt as __namedExportsOrder,yt as default};
