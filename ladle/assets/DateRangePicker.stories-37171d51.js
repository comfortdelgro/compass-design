import{j as t}from"./jsx-runtime-ea7736fc.js";import{R as j,r as c}from"./index-6c164b11.js";import{D as a}from"./index-cdf7513e.js";import"./index-9178f86c.js";import"./index-0c922b64.js";import"./index-cc86efa4.js";import"./index-03cff320.js";import"./index-47a1c304.js";import"./index-ce1c8671.js";import"./index-0d53bb30.js";import"./index-3170d50c.js";import"./index-7972436d.js";import"./index-d697583f.js";import"./index-02337fb0.js";import"./index-7a7498f5.js";import"./index-e7f2b220.js";import"./index-33fba25f.js";import"./index-4cb193f3.js";import"./index-579e501f.js";import"./index-82dc4608.js";import"./index-14a5a860.js";import"./index-3e7fd8c3.js";import"./index-9b877fe0.js";import"./index-1fd2fc01.js";import"./index-58b33020.js";import"./index-3c6de7b1.js";import"./Viewer-a8f46180.js";import{p,u as y,I as C,g as o,t as u}from"./calendar-17db7acc.js";import"./NumberParser-bd499a26.js";import"./index-44f80ede.js";import"./index-9cc0ffcb.js";import"./index-489b6ecb.js";import"./index-f93f9dc9.js";import"./index-6f96fe02.js";import"./index-10d8d6ed.js";import"./index-77063761.js";import"./index-0ae06ec8.js";import"./index-9ee83bda.js";import"./index-1e91b611.js";import"./index-b6f73d5b.js";import"./index-b3d59218.js";import"./index-f318de67.js";import"./index-be599a31.js";import"./index-f484f2a1.js";import"./index-73b3188c.js";import"./index-8bd325fb.js";import"./index-584a999a.js";import"./index-252633e7.js";import"./index-27851459.js";import"./index-109ea52a.js";import"./index-5a173c15.js";import"./index-5e221ed0.js";import"./video-player-e278bccf.js";import"./useSnackbar-234ef792.js";import"./index-d488ea9b.js";import"./index-aea15489.js";import"./index-b8816cdb.js";import"./index-16d9e09a.js";import"./index-90af5112.js";import"./index-b1157fd5.js";import"./index-34b8f82d.js";import"./index-9fb2cabb.js";import"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./index-722c9b20.js";import"./Row-e65f206d.js";import"./index-1825d005.js";import"./index-0a0dc8f5.js";import"./index-9b621ca4.js";import"./index-52a97e3f.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-aff350d4.js";import"./index-14d7a7b1.js";import{B as k}from"./button-be34d763.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-c116e6b4.js";import"./date-picker-2b47ac6c.js";import"./index-4593f2b5.js";import"./dropdown-textfield-210a5270.js";import"./index-eb8c837f.js";import"./string-de12cf5f.js";import"./rating-ca365a65.js";import"./slide-action-b34e09b0.js";import"./useDrag-c728562f.js";import"./speed-dial-f74b5546.js";import"./floating-ui.react.esm-06842318.js";import"./index-318acb9e.js";import"./tooltip-trigger-04cfd43d.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./arrow-right-20c3256f.js";import"./layout-5fac5c12.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-0d3b18cd.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const n=()=>{const[e,i]=j.useState({start:p("2020-02-03"),end:p("2020-02-08")}),s=y({dateStyle:"long"});return t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsxs(C,{locale:"en-SG",children:[t.jsx("h3",{children:"Controlled"}),t.jsx("p",{children:e.start&&e.end?s.formatRange(e.start.toDate(o()),e.end.toDate(o())):`${e.start&&s.format(e.start.toDate(o()))} - ${e.end&&s.format(e.end.toDate(o()))}`}),t.jsx(a,{value:e,shouldCloseOnSelect:!0,startDateLabel:"Start Date",endDateLabel:"End Date",onChange:m=>i(m)})]})})},d=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(C,{locale:"en-SG",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("h3",{children:"Basic"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("br",{}),t.jsx("h3",{children:"Disabled"}),t.jsx(a,{isDisabled:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Read only"}),t.jsx(a,{isReadOnly:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Invalid"}),t.jsx(a,{isInvalid:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Min & Max"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",minValue:u(o()).add({days:1}),maxValue:u(o()).add({days:7})}),t.jsx("h3",{children:"Max range on first chosen date"}),t.jsx(E,{}),t.jsx("h3",{children:"Is Mobile"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",isMobile:!0}),t.jsx("h3",{children:"Helper texts"}),t.jsx(a,{isInvalid:!0,isRequired:!0,helperText:"Weekend is excluded",errorMessage:"Must not include weekend",startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Shortcuts"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0}),t.jsx("h3",{children:"Custom Shortcuts Range Calendar"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0,customShortcuts:e=>{const i=[{label:"Custom Shortcut",getValue:()=>({start:null,end:null})}];return[...e,...i]},ctaButtonRender:t.jsx(k,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})})}),E=()=>{const[e,i]=c.useState(null),[s,m]=c.useState(null),R=r=>{i(r),r&&r.start&&!r.end&&m(r.start.subtract({days:-30}))};return t.jsx(a,{value:e,onChange:R,shouldCloseOnSelect:!0,shouldOnChangeTriggerOnSameDate:!0,maxValue:s,onOpenChange:r=>{e!=null&&e.start&&!e.end||r&&m(null)}})},l=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(a,{css:{"& .cdg-date-field > div":{backgroundColor:"var(--cdg-color-cdgBlue20)"},"& .date-field-input > div":{color:"var(--cdg-color-cdgBlue100)"},"& .date-field-input > div:focus-visible":{color:"var(--cdg-color-cdgBlue100)",backgroundColor:"white"}}})}),Me={title:"Example/Date Range Picker",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};l.__docgenInfo={description:"",methods:[],displayName:"Custom"};var g,h,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(D=(h=n.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var b,x,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(S=(x=d.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var L,v,f;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Ve=["Basic","Variants","Custom"];export{n as Basic,l as Custom,d as Variants,Ve as __namedExportsOrder,Me as default};
