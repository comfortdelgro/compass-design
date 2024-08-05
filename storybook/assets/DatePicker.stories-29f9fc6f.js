import{j as e}from"./jsx-runtime-9ef10904.js";import{r as u}from"./index-6c164b11.js";import{p as m,t,g as r,u as T,I}from"./calendar-11907e4d.js";import{D as n}from"./date-picker-4a2ce3da.js";import"./index-f0ea8199.js";import"./button-a57955c5.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";import"./NumberParser-89118490.js";import"./index-d88a2748.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";const o=()=>{const[a,l]=u.useState(m(t(r()).toString())),L=T({dateStyle:"full"});return e.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:e.jsxs(I,{locale:"en-SG",children:[e.jsxs("p",{children:[e.jsx("b",{children:"Selected date:"}),e.jsx("span",{style:{marginLeft:"4px"},children:a?L.format(a==null?void 0:a.toDate(r())):e.jsx("span",{style:{marginLeft:"4px"},children:"Invalid Date"})})]}),e.jsx(n,{label:"Date",value:a,defaultValue:t(r()),onChange:h=>{console.log(h),l(h)}})]})})},s=()=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:e.jsxs(I,{locale:"en-SG",children:[e.jsx("h3",{children:"Readonly"}),e.jsx(n,{isReadOnly:!0,label:"Date",defaultValue:t(r())}),e.jsx("h3",{children:"Disabled"}),e.jsx(n,{isDisabled:!0,label:"Date",defaultValue:t(r())}),e.jsx("h3",{children:"Invalid"}),e.jsx(n,{isInvalid:!0,label:"Date",defaultValue:t(r()),isRequired:!0,necessityIndicator:"icon"}),e.jsx("h3",{children:"MinValue"}),e.jsx(n,{label:"Date",defaultValue:t(r()).add({days:1}),minValue:t(r()).add({days:1})}),e.jsx("h3",{children:"MaxValue"}),e.jsx(n,{label:"Date",defaultValue:t(r()),maxValue:t(r())}),e.jsx("h3",{children:"Mobile version"}),e.jsx(n,{label:"Date",isMobile:!0}),e.jsx("h3",{children:"Helper texts"}),e.jsx(n,{label:"Date",helperText:"Helper text",errorMessage:"Error message",isInvalid:!0})]})}),d=()=>{const[a,l]=u.useState(m(t(r()).toString()));return e.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[e.jsx("h3",{children:"Basic"}),e.jsx(n,{label:"Month",picker:"month"}),e.jsx("h3",{children:"Controlled"}),e.jsxs("h4",{children:["Value: ",a==null?void 0:a.toString()]}),e.jsxs("h4",{children:["Month: ",a==null?void 0:a.month]}),e.jsx(n,{value:a,label:"Month",picker:"month",onChange:l}),e.jsx("h3",{children:"Min & Max Value"}),e.jsx(n,{label:"Month",picker:"month",minValue:t(r()).subtract({months:1}),maxValue:t(r()).add({years:2})})]})},i=()=>{const[a,l]=u.useState(m(t(r()).toString()));return e.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[e.jsx("h3",{children:"Basic"}),e.jsx(n,{label:"Year",picker:"year"}),e.jsx("h3",{children:"Controlled"}),e.jsxs("h4",{children:["Value: ",a==null?void 0:a.toString()]}),e.jsxs("h4",{children:["Year: ",a==null?void 0:a.year]}),e.jsx(n,{value:a,label:"Year",picker:"year",onChange:l}),e.jsx("h3",{children:"Min & Max Value"}),e.jsx(n,{label:"Year",picker:"year",minValue:t(r()).subtract({months:1}),maxValue:t(r()).add({years:2})})]})},c=()=>e.jsx("div",{style:{padding:"1rem",backgroundColor:"white"},children:e.jsx(n,{css:{"& .cdg-date-field > div":{backgroundColor:"var(--cdg-color-cdgBlue20)"},"& .date-field-input > div":{color:"var(--cdg-color-cdgBlue100)"},"& .date-field-input > div:focus-visible":{color:"var(--cdg-color-cdgBlue100)",backgroundColor:"white"}}})}),z={title:"Example/Date Picker",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Controlled"};s.__docgenInfo={description:"",methods:[],displayName:"Variants"};d.__docgenInfo={description:"",methods:[],displayName:"MonthPicker"};i.__docgenInfo={description:"",methods:[],displayName:"YearPicker"};c.__docgenInfo={description:"",methods:[],displayName:"Custom"};var g,p,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
        console.log(date);
        setDate(date);
      }} />
      </I18nProvider>
    </div>;
}`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var y,b,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var D,k,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<CalendarProps | null>(parseDate(today(getLocalTimeZone()).toString()));
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
    <h3>Basic</h3>
    <DatePicker label='Month' picker='month' />
    <h3>Controlled</h3>
    <h4>Value: {date?.toString()}</h4>
    <h4>Month: {date?.month}</h4>
    <DatePicker value={date} label='Month' picker='month' onChange={setDate} />
    <h3>Min & Max Value</h3>
    <DatePicker label='Month' picker='month' minValue={today(getLocalTimeZone()).subtract({
      months: 1
    })} maxValue={today(getLocalTimeZone()).add({
      years: 2
    })} />
  </div>;
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var f,V,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [date, setDate] = useState<CalendarProps | null>(parseDate(today(getLocalTimeZone()).toString()));
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
    <h3>Basic</h3>
    <DatePicker label='Year' picker='year' />
    <h3>Controlled</h3>
    <h4>Value: {date?.toString()}</h4>
    <h4>Year: {date?.year}</h4>
    <DatePicker value={date} label='Year' picker='year' onChange={setDate} />
    <h3>Min & Max Value</h3>
    <DatePicker label='Year' picker='year' minValue={today(getLocalTimeZone()).subtract({
      months: 1
    })} maxValue={today(getLocalTimeZone()).add({
      years: 2
    })} />
  </div>;
}`,...(C=(V=i.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var P,M,S;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const A=["Controlled","Variants","MonthPicker","YearPicker","Custom"];export{o as Controlled,c as Custom,d as MonthPicker,s as Variants,i as YearPicker,A as __namedExportsOrder,z as default};
