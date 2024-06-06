import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as b}from"./index-6c164b11.js";import{p as j,t as r,g as a,u as V,I as v}from"./calendar-17db7acc.js";import{D as t}from"./date-picker-2b47ac6c.js";import"./index-7972436d.js";import"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./arrow-right-20c3256f.js";import"./NumberParser-bd499a26.js";import"./index-4593f2b5.js";const n=()=>{const[o,D]=b.useState(j(r(a()).toString())),f=V({dateStyle:"full"});return e.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:e.jsxs(v,{locale:"en-SG",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Selected date:"}),e.jsx("span",{style:{marginLeft:"4px"},children:o?f.format(o==null?void 0:o.toDate(a())):e.jsx("span",{style:{marginLeft:"4px"},children:"Invalid Date"})})]}),e.jsx(t,{label:"Date",value:o,defaultValue:r(a()),onChange:y=>{D(y)}})]})})},l=()=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:e.jsxs(v,{locale:"en-SG",children:[e.jsx("h3",{children:"Readonly"}),e.jsx(t,{isReadOnly:!0,label:"Date",defaultValue:r(a())}),e.jsx("h3",{children:"Disabled"}),e.jsx(t,{isDisabled:!0,label:"Date",defaultValue:r(a())}),e.jsx("h3",{children:"Invalid"}),e.jsx(t,{isInvalid:!0,label:"Date",defaultValue:r(a()),isRequired:!0,necessityIndicator:"icon"}),e.jsx("h3",{children:"MinValue"}),e.jsx(t,{label:"Date",defaultValue:r(a()).add({days:1}),minValue:r(a()).add({days:1})}),e.jsx("h3",{children:"MaxValue"}),e.jsx(t,{label:"Date",defaultValue:r(a()),maxValue:r(a())}),e.jsx("h3",{children:"Mobile version"}),e.jsx(t,{label:"Date",isMobile:!0}),e.jsx("h3",{children:"Helper texts"}),e.jsx(t,{label:"Date",helperText:"Helper text",errorMessage:"Error message",isInvalid:!0})]})}),d=()=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"white"},children:e.jsx(t,{css:{"& .cdg-date-field > div":{backgroundColor:"var(--cdg-color-cdgBlue20)"},"& .date-field-input > div":{color:"var(--cdg-color-cdgBlue100)"},"& .date-field-input > div:focus-visible":{color:"var(--cdg-color-cdgBlue100)",backgroundColor:"white"}}})}),E={title:"Example/Date Picker",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};l.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"Custom"};var s,i,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<CalendarProps | null>(parseDate(today(getLocalTimeZone()).toString()));
  const formatter = useDateFormatter({
    dateStyle: 'full'
  });
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <I18nProvider locale='en-SG'>
        <p>
          <b>Selected date:</b>
          <span style={{
          marginLeft: '4px'
        }}>
            {date ? formatter.format(date?.toDate(getLocalTimeZone())) : <span style={{
            marginLeft: '4px'
          }}>Invalid Date</span>}
          </span>
        </p>
        <DatePicker label='Date' value={date} defaultValue={today(getLocalTimeZone())} onChange={date => {
        setDate(date);
      }} />
      </I18nProvider>
    </div>;
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,m,p;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <I18nProvider locale='en-SG'>
        <h3>Readonly</h3>
        <DatePicker isReadOnly label='Date' defaultValue={today(getLocalTimeZone())} />
        <h3>Disabled</h3>
        <DatePicker isDisabled label='Date' defaultValue={today(getLocalTimeZone())} />
        <h3>Invalid</h3>
        <DatePicker isInvalid label='Date' defaultValue={today(getLocalTimeZone())} isRequired necessityIndicator='icon' />
        <h3>MinValue</h3>
        <DatePicker label='Date' defaultValue={today(getLocalTimeZone()).add({
        days: 1
      })} minValue={today(getLocalTimeZone()).add({
        days: 1
      })} />
        <h3>MaxValue</h3>
        <DatePicker label='Date' defaultValue={today(getLocalTimeZone())} maxValue={today(getLocalTimeZone())} />
        <h3>Mobile version</h3>
        <DatePicker label='Date' isMobile />
        <h3>Helper texts</h3>
        <DatePicker label='Date' helperText='Helper text' errorMessage='Error message' isInvalid />
      </I18nProvider>
    </div>;
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '1rem',
    backgroundColor: 'white'
  }}>
      <DatePicker css={{
      '& .cdg-date-field > div': {
        backgroundColor: 'var(--cdg-color-cdgBlue20)'
      },
      '& .date-field-input > div': {
        color: 'var(--cdg-color-cdgBlue100)'
      },
      '& .date-field-input > div:focus-visible': {
        color: 'var(--cdg-color-cdgBlue100)',
        backgroundColor: 'white'
      }
    }} />
    </div>;
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const w=["Basic","Variants","Custom"];export{n as Basic,d as Custom,l as Variants,w as __namedExportsOrder,E as default};
