import{j as r}from"./jsx-runtime-ea7736fc.js";import{R as y}from"./index-6c164b11.js";import"./index-d697583f.js";import{C as a}from"./calendar-17db7acc.js";import"./index-7972436d.js";import"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./arrow-right-20c3256f.js";const{useDateFormatter:C}=a.I18N,{getLocalTimeZone:n,parseDate:b,today:d}=a.InternationalizedDate,e=()=>{const[t,p]=y.useState(b(d(n()).toString())),u=C({dateStyle:"full"});return r.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[r.jsxs("p",{children:[r.jsx("b",{children:"Selected date:"}),r.jsx("span",{style:{marginLeft:"4px"},children:t?u.format(t.toDate(n())):"Invalid date"})]}),r.jsx(a,{value:t,minValue:d(n()),onChange:v=>{p(v)},hasFooter:!0})]})},o=()=>r.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-white)"},children:r.jsx(a,{css:{backgroundColor:"var(--cdg-color-gray20)",border:"1px solid var(--cdg-color-gray50)","& .disabled":{color:"var(--cdg-color-gray60)",backgroundColor:"var(--cdg-color-gray40)"},"& .disabled:hover":{color:"var(--cdg-color-gray60)"}}})}),z={title:"Example/Calendar",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Basic"};o.__docgenInfo={description:"",methods:[],displayName:"Customized"};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [date, setDate] = React.useState<CalendarProps>(parseDate(today(getLocalTimeZone()).toString()));
  const formatter = useDateFormatter({
    dateStyle: 'full'
  });
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <p>
        <b>Selected date:</b>
        <span style={{
        marginLeft: '4px'
      }}>
          {date ? formatter.format(date.toDate(getLocalTimeZone())) : 'Invalid date'}
        </span>
      </p>
      <Calendar value={date} minValue={today(getLocalTimeZone())} onChange={e => {
      setDate(e);
    }} hasFooter />
    </div>;
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,g,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-white)'
  }}>
      <Calendar css={{
      backgroundColor: 'var(--cdg-color-gray20)',
      border: '1px solid var(--cdg-color-gray50)',
      '& .disabled': {
        color: 'var(--cdg-color-gray60)',
        backgroundColor: 'var(--cdg-color-gray40)'
      },
      '& .disabled:hover': {
        color: 'var(--cdg-color-gray60)'
      }
    }} />
    </div>;
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const F=["Basic","Customized"];export{e as Basic,o as Customized,F as __namedExportsOrder,z as default};
