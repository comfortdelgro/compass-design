import{l as A,m as E,n as V,N as X,E as J,g as Q}from"./index-6d586102.js";import{s as K,R as N,r as h,a as r,j as e,F}from"./index-6eb6f04c.js";import{u as U,b as Y,c as Z,d as _,e as ee,D as k,f as te,h as ae,i as oe,j as ne,N as le,k as z,l as H,m as re,n as ie,o as se}from"./data-grid.styles-90686681.js";import{p as B}from"./pick-child-a6483812.js";import{u as ce}from"./use-dom-ref-d9196554.js";import"./index-ac6999a4.js";import{D as v}from"./index-39c19bb3.js";import{G as D}from"./index-8dd4e55b.js";import{a as u}from"./index-5319d547.js";import"./index-233aba57.js";import"./index-9e470ff1.js";import{T as j}from"./index-99d765b0.js";import{S as L}from"./searchfield-d79e2126.js";import{B as m}from"./button-b2164f2b.js";import{P as W}from"./pagination-c747c28e.js";import"./create-safe-context-10f79dce.js";import"./checkbox.styles-8f956872.js";import"./floating-ui.react.esm-0975127c.js";import"./utils-dc869cf7.js";import"./isArray-6aeda2a2.js";import"./dropdown.styles-10e447d6.js";import"./index.styles-ac211df5.js";import"./index.es-ed68bd8f.js";import"./useCurrentTheme-152cebfd.js";K("div",{overflowX:"auto",table:{fontFamily:"$sans",borderCollapse:"collapse",width:"100%",border:"1px solid $primaryBg"}});const de=K("div",{width:"100%"}),me=N.forwardRef((n,l)=>{var G;const[o,d]=h.useState([]),[i,f]=h.useState({}),{css:b={},data:y,columns:t,options:g,onManualSorting:a,onChangeRowSelection:s,children:C,...S}=n,{child:R,rest:M}=B(C,z),{child:T}=B(M,H),$=ce(l),x=U({state:{rowSelection:i,sorting:g.initialSortBy?g.initialSortBy:o},onSortingChange:d,getCoreRowModel:Y(),getSortedRowModel:Z(),getFilteredRowModel:_(),onRowSelectionChange:f,debugTable:!0,data:y,columns:t,isMultiSortEvent:()=>!0,...g});h.useEffect(()=>{const w=x.getSelectedRowModel().rows.map(q=>q.original);s==null||s(w)},[i]),h.useEffect(()=>{a==null||a(o)},[o]);const I=x.getRowModel().rows??[];return r(de,{css:b,...S,children:[R&&e(F,{children:R}),e(ee,{children:r("table",{ref:$,children:[e(k,{as:"thead",children:x.getHeaderGroups().map(p=>e(te,{children:p.headers.map(w=>e(ae,{headerProps:w,tableOption:x},w.id))},p.id))}),e(k,{as:"tbody",children:I.length?I.map(p=>e(oe,{isSelected:p.getIsSelected(),children:p.getVisibleCells().map(w=>e(ne,{cell:w,row:p},w.id))},p.id)):e(le,{colSpan:(G=x.getAllLeafColumns())==null?void 0:G.length})})]})}),T&&e(F,{children:T})]})}),c=me;c.Toolbar=z;c.Footer=H;c.Checkbox=re;c.CheckboxCell=ie;c.Toolbar.displayName="Card.Body";c.Footer.displayName="Card.Image";c.displayName="ReactTable";const ge=n=>{const l=[];for(let o=0;o<n;o++)l.push(o);return l},P=n=>{let l="";const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",d=o.length;for(let i=0;i<n;i++)l+=o.charAt(Math.floor(Math.random()*d));return l},he=(n,l)=>{const o=n.getTime(),d=l.getTime(),i=Math.floor(Math.random()*(d-o+1)+o);return new Date(i)},ue=()=>({firstName:P(5),lastName:P(5),age:Math.floor(Math.random()*40),visits:Math.floor(Math.random()*1e3),progress:Math.floor(Math.random()*100),createdAt:he(new Date(2020,0,1),new Date(2029,11,31)),status:["relationship","complicated","single"][Math.floor(Math.random()*["relationship","complicated","single"].length)]});function O(...n){const l=(o=0)=>{const d=n[o];return ge(d).map(i=>({...ue(),subRows:n[o+1]?l(o+1):null}))};return l()}const ze=()=>{const[n,l]=h.useState(1),[o,d]=h.useState(()=>O(10)),i={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}],enableRowSelection:t=>t.original.age>30},f=t=>{},b=t=>{},y=N.useMemo(()=>[{id:"select",header:({table:t})=>e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e(c.CheckboxCell,{checked:t.getIsAllRowsSelected(),indeterminate:t.getIsSomeRowsSelected(),onChange:t.getToggleAllRowsSelectedHandler()})}),cell:({row:t})=>e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e(c.CheckboxCell,{disabled:!t.getCanSelect(),checked:t.getIsSelected(),indeterminate:t.getIsSomeSelected(),onChange:t.getToggleSelectedHandler()})})},{id:"name",header:()=>e("div",{style:{textAlign:"center"},children:"Name"}),footer:t=>t.column.id,enableGrouping:!1,columns:[{accessorKey:"firstName",cell:t=>t.getValue(),header:()=>e("span",{children:"First Name"}),footer:t=>t.column.id,enableResizing:!1,enableGrouping:!1,sortDescriptor:"asc",meta:{editable:!0,updateData:(t,g,a)=>{d(s=>s.map((C,S)=>S===t?{...s[t],[g]:a}:C))}}},{accessorFn:t=>t.lastName,id:"lastName",cell:t=>t.getValue(),header:()=>e("span",{children:"Last Name"}),footer:t=>t.column.id,enableColumnFilter:!1,enableGrouping:!1,enableResizing:!0}]},{id:"otherInfo",header:()=>e("div",{style:{textAlign:"center"},children:"Other info"}),footer:t=>t.column.id,enableGrouping:!1,columns:[{accessorKey:"age",header:()=>"Age",enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"visits",header:()=>e("span",{children:"Visits"}),enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"status",header:"Status",enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id},{accessorKey:"progress",header:"Profile Progress",cell:t=>t.getValue(),enableColumnFilter:!1,enableGrouping:!1,footer:t=>t.column.id}]}],[]);return e("div",{children:r(c,{data:o,columns:y,options:i,onManualSorting:f,onChangeRowSelection:b,children:[r(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e(L,{placeholder:"Search"}),r("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e(m,{variant:"primary",children:"Button"}),e(m,{variant:"secondary",children:"Button"}),e(m,{variant:"ghost",children:e(u,{icon:A})}),e(m,{variant:"ghost",children:e(u,{icon:E})}),e(m,{variant:"ghost",children:e(u,{icon:V})})]})]}),r(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e("div",{}),r("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[r("div",{style:{fontWeight:"600"},children:[(n-1)*10+1," - ",(n-1)*10+10," of 100"]}),e(W,{page:n,onChange:t=>l(t),total:10})]})]})]})})},He=()=>{const[n,l]=h.useState(1),o=O(10),[d,i]=h.useState(o),[f]=h.useState(o),b={enableSorting:!0,enableMultiSort:!0,columnResizeMode:"onChange",manualSorting:!1,initialSortBy:[{id:"firstName",desc:!0},{id:"lastName",desc:!1}],enableRowSelection:a=>a.original.age>30},y=a=>{},t=a=>{},g=N.useMemo(()=>[{id:"edit",size:120,cell:()=>e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:e(u,{icon:X})}),meta:{editable:!0,template:e(pe,{}),updateData:(a,s,C)=>{i(S=>S.map((R,M)=>M===a?{...C}:R))},revertData:a=>{i(s=>s.map((C,S)=>S===a?f[a]:C))}}},{accessorKey:"firstName",cell:a=>a.getValue(),header:()=>e("span",{children:"First Name"}),footer:a=>a.column.id,meta:{}},{accessorKey:"age",header:()=>"Age",footer:a=>a.column.id},{accessorKey:"status",header:"Status",footer:a=>a.column.id}],[]);return e(F,{children:r(c,{data:d,columns:g,options:b,onManualSorting:y,onChangeRowSelection:t,id:"editableTable",children:[r(c.Toolbar,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e(L,{placeholder:"Search"}),r("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[e(m,{variant:"primary",children:"Button"}),e(m,{variant:"secondary",children:"Button"}),e(m,{variant:"ghost",children:e(u,{icon:A})}),e(m,{variant:"ghost",children:e(u,{icon:E})}),e(m,{variant:"ghost",children:e(u,{icon:V})})]})]}),r(c.Footer,{css:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e("div",{}),r("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",gap:"0.5rem"},children:[r("div",{style:{fontWeight:"600"},children:[(n-1)*10+1," - ",(n-1)*10+10," of 100"]}),e(W,{page:n,onChange:a=>l(a),total:10})]})]})]})})},pe=()=>{var t,g;const n=se(),[l,o]=h.useState({firstName:n.cell.row.getValue("firstName"),age:n.cell.row.getValue("age"),status:n.cell.row.getValue("status")}),d=a=>{o(s=>({...s,firstName:a}))},i=a=>{o(s=>({...s,age:a}))},f=a=>{o(s=>({...s,status:a}))},b=a=>{a.stopPropagation(),n.finishTemplateEditing(l)},y=a=>{a.stopPropagation(),n.cancelTemplateEditing()};return r(D,{css:{width:(g=(t=document.getElementById("editableTable"))==null?void 0:t.querySelector("tr"))==null?void 0:g.clientWidth,backgroundColor:"$background",position:"absolute",zIndex:2},alignItems:"center",justifyContent:"spaceBetween",children:[r(D.Item,{xs:2,sm:2,md:2,lg:2,xl:2,css:{display:"flex",justifyContent:"center",gap:5},children:[e(m,{onClick:b,size:"sm",children:e(u,{icon:J})}),e(m,{onClick:y,variant:"danger",size:"sm",children:e(u,{icon:Q})})]}),e(D.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e(j,{value:l.firstName,onChange:d})}),e(D.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:e(j,{type:"number",value:l.age,onChange:i})}),e(D.Item,{xs:3,sm:3,md:3,lg:3,xl:3,children:r(v.Select,{selectedKey:l.status,onSelectionChange:f,children:[e(v.Item,{children:"In Relationship"},"relationship"),e(v.Item,{children:"Complicated"},"complicated"),e(v.Item,{children:"Single"},"single")]})})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{He as EditableTemplateCell,ze as FullFeatured};