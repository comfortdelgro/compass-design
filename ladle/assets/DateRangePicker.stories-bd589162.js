import{j as t}from"./jsx-runtime-ea7736fc.js";import{R as j,r as c}from"./index-6c164b11.js";import{D as a}from"./index-7d873515.js";import"./index-ef59e57a.js";import"./index-42ac8d43.js";import"./index-c4f93812.js";import"./index-3ab66ea1.js";import"./index-ba9672c4.js";import"./index-36749e01.js";import"./index-1481820f.js";import"./index-785af938.js";import"./index-c28b9cd4.js";import"./index-01d394d9.js";import"./index-b844ebee.js";import"./index-05878d10.js";import"./index-db162ed9.js";import"./index-4f1d1dd5.js";import"./index-a62a93be.js";import"./index-00c80c60.js";import"./index-0c0b2fdc.js";import"./index-c444fdb6.js";import"./index-d8a01d3f.js";import"./index-1a491ca7.js";import"./index-25cc2dc8.js";import"./index-3811d87e.js";import"./index-3ff3ef4a.js";import"./Viewer-de9ece4e.js";import{p,u as y,I as C,g as o,t as u}from"./calendar-b4f421e9.js";import"./NumberParser-89118490.js";import"./index-899c47f1.js";import"./index-febbedd6.js";import"./index-dbd28b7b.js";import"./index-a749d917.js";import"./index-02da530b.js";import"./index-a1733458.js";import"./index-e5c7f637.js";import"./index-3095c07e.js";import"./index-47ed11ed.js";import"./index-1e91b611.js";import"./index-87eb7dd0.js";import"./index-95d58e40.js";import"./index-53a599f3.js";import"./index-a4cde574.js";import"./index-0981a571.js";import"./index-b38ed74c.js";import"./index-014daaba.js";import"./index-fd3ebdd5.js";import"./index-fb6db828.js";import"./index-56e6e3a9.js";import"./index-bf22c748.js";import"./index-23ef5d9f.js";import"./index-3a481d55.js";import"./video-player-28059ce7.js";import"./useSnackbar-4f49a84b.js";import"./index-4fda0bf4.js";import"./index-8adbe5ee.js";import"./index-3d780d5e.js";import"./index-8c30b973.js";import"./index-3fe0789f.js";import"./index-b2163232.js";import"./index-7a07e922.js";import"./index-b2c9f1c0.js";import"./index-2802fc62.js";import"./useCurrentTheme-474309da.js";import"./index-8cd84d59.js";import"./Row-74a318ea.js";import"./index-feb29144.js";import"./index-0a0dc8f5.js";import"./index-97062572.js";import"./index-de2e4c53.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./string-cf4adbb3.js";import"./index-4ba38acb.js";import{B as k}from"./button-8faa8e19.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-fa787fee.js";import"./date-picker-edc34dcd.js";import"./dropdown-textfield-5e606f52.js";import"./index-eb8c837f.js";import"./rating-d8b894af.js";import"./slide-action-f7eaf4f1.js";import"./speed-dial-0ea5b6b9.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-b2a8cea5.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./layout-9ff37ead.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-f28bb353.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const n=()=>{const[e,s]=j.useState({start:p("2020-02-03"),end:p("2020-02-08")}),d=y({dateStyle:"long"});return t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsxs(C,{locale:"en-SG",children:[t.jsx("h3",{children:"Controlled"}),t.jsx("p",{children:e.start&&e.end?d.formatRange(e.start.toDate(o()),e.end.toDate(o())):`${e.start&&d.format(e.start.toDate(o()))} - ${e.end&&d.format(e.end.toDate(o()))}`}),t.jsx(a,{value:e,shouldCloseOnSelect:!0,startDateLabel:"Start Date",endDateLabel:"End Date",onChange:m=>s(m)})]})})},i=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(C,{locale:"en-SG",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("h3",{children:"Basic"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("br",{}),t.jsx("h3",{children:"Disabled"}),t.jsx(a,{isDisabled:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Read only"}),t.jsx(a,{isReadOnly:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Invalid"}),t.jsx(a,{isInvalid:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Min & Max"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",minValue:u(o()).add({days:1}),maxValue:u(o()).add({days:7})}),t.jsx("h3",{children:"Max range on first chosen date"}),t.jsx(E,{}),t.jsx("h3",{children:"Is Mobile"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",isMobile:!0}),t.jsx("h3",{children:"Helper texts"}),t.jsx(a,{isInvalid:!0,isRequired:!0,helperText:"Weekend is excluded",errorMessage:"Must not include weekend",startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Shortcuts"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0}),t.jsx("h3",{children:"Custom Shortcuts Range Calendar"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0,customShortcuts:e=>{const s=[{label:"Custom Shortcut",getValue:()=>({start:null,end:null})}];return[...e,...s]},ctaButtonRender:t.jsx(k,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})})}),E=()=>{const[e,s]=c.useState(null),[d,m]=c.useState(null),R=r=>{s(r),r&&r.start&&!r.end&&m(r.start.subtract({days:-30}))};return t.jsx(a,{value:e,onChange:R,shouldCloseOnSelect:!0,shouldOnChangeTriggerOnSameDate:!0,maxValue:d,onOpenChange:r=>{e!=null&&e.start&&!e.end||r&&m(null)}})},l=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(a,{css:{"& .cdg-date-field > div":{backgroundColor:"var(--cdg-color-cdgBlue20)"},"& .date-field-input > div":{color:"var(--cdg-color-cdgBlue100)"},"& .date-field-input > div:focus-visible":{color:"var(--cdg-color-cdgBlue100)",backgroundColor:"white"}}})}),Be={title:"Example/Date Range Picker",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};l.__docgenInfo={description:"",methods:[],displayName:"Custom"};var g,h,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [range, setRange] = React.useState<RangeValue<CalendarProps | null>>({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08')
  });
  const formatter = useDateFormatter({
    dateStyle: 'long'
  });
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <I18nProvider locale='en-SG'>
        <h3>Controlled</h3>
        <p>
          {range.start && range.end ? formatter.formatRange(range.start.toDate(getLocalTimeZone()), range.end.toDate(getLocalTimeZone())) : \`\${range.start && formatter.format(range.start.toDate(getLocalTimeZone()))} - \${range.end && formatter.format(range.end.toDate(getLocalTimeZone()))}\`}
        </p>
        <DateRangePicker value={range} shouldCloseOnSelect startDateLabel='Start Date' endDateLabel='End Date' onChange={e => setRange((e as RangeValue<DateValue>))} />
      </I18nProvider>
    </div>;
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var b,x,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <I18nProvider locale='en-SG'>
        <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          <h3>Basic</h3>
          <DateRangePicker startDateLabel='Start date' endDateLabel='End date' />
          <br />
          <h3>Disabled</h3>
          <DateRangePicker isDisabled startDateLabel='Start date' endDateLabel='End date' />
          <h3>Read only</h3>
          <DateRangePicker isReadOnly startDateLabel='Start date' endDateLabel='End date' />
          <h3>Invalid</h3>
          <DateRangePicker isInvalid startDateLabel='Start date' endDateLabel='End date' />
          <h3>Min & Max</h3>
          <DateRangePicker startDateLabel='Start date' endDateLabel='End date' minValue={today(getLocalTimeZone()).add({
          days: 1
        })} maxValue={today(getLocalTimeZone()).add({
          days: 7
        })} />
          <h3>Max range on first chosen date</h3>
          <MaxDateFirstChosenRangePicker />
          <h3>Is Mobile</h3>
          <DateRangePicker startDateLabel='Start date' endDateLabel='End date' isMobile />
          <h3>Helper texts</h3>
          <DateRangePicker isInvalid isRequired helperText='Weekend is excluded' errorMessage='Must not include weekend' startDateLabel='Start date' endDateLabel='End date' />
          <h3>Shortcuts</h3>
          <DateRangePicker startDateLabel='Start date' endDateLabel='End date' hasShortcuts />
          <h3>Custom Shortcuts Range Calendar</h3>
          <DateRangePicker startDateLabel='Start date' endDateLabel='End date' hasShortcuts customShortcuts={shortcuts => {
          const customShortcuts: RangeCalendarShorcutItem[] = [{
            label: 'Custom Shortcut',
            getValue: () => {
              return {
                start: null,
                end: null
              };
            }
          }];
          return [...shortcuts, ...customShortcuts];
        }} ctaButtonRender={<Button onPress={() => {
          alert('Custom callback');
        }}>
                Custom Button
              </Button>} />
        </div>
      </I18nProvider>
    </div>;
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var L,v,f;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <DateRangePicker css={{
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Ie=["Basic","Variants","Custom"];export{n as Basic,l as Custom,i as Variants,Ie as __namedExportsOrder,Be as default};
