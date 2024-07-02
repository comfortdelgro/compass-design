import{j as t}from"./jsx-runtime-9ef10904.js";import{R as j,r as c}from"./index-6c164b11.js";import{D as a}from"./index-8dd82c88.js";import"./index-3e1c9234.js";import"./index-284aca9d.js";import"./index-fa7e7d30.js";import"./index-37c7bf77.js";import"./index-06aea52e.js";import"./index-bdc47b33.js";import"./index-26609149.js";import"./index-5b7974a3.js";import"./index-68dd90e7.js";import"./index-1c61ccc3.js";import"./index-be7e1eee.js";import"./index-30602da6.js";import"./index-3b7e403c.js";import"./index-8cf671da.js";import"./index-0f166032.js";import"./index-c5f5a66a.js";import"./index-f6675da2.js";import"./index-4419a936.js";import"./index-0e37f839.js";import"./index-29cce5d8.js";import"./index-ceba8d97.js";import"./index-1f855692.js";import"./index-a2441fec.js";import"./Viewer-2b773ead.js";import{p,u as y,I as C,g as o,t as u}from"./calendar-6bc86dce.js";import"./NumberParser-89118490.js";import"./index-946d64ba.js";import"./index-1dc17834.js";import"./index-3fddcbe4.js";import"./index-eca25368.js";import"./index-133908b4.js";import"./index-083267d0.js";import"./index-cbf6a047.js";import"./index-3385e30c.js";import"./index-6fc6b3a7.js";import"./index-e2c6e307.js";import"./index-855e3f50.js";import"./index-13f3b7d0.js";import"./index-268c0602.js";import"./index-31578372.js";import"./index-634fd9bf.js";import"./index-1e7f5058.js";import"./index-cb5ba4ca.js";import"./index-358939c8.js";import"./index-34328747.js";import"./index-c10b40de.js";import"./index-f58a03c4.js";import"./index-dc6539d5.js";import"./index-9cbb795d.js";import"./video-player-646b1ee5.js";import"./useSnackbar-8c77c764.js";import"./index-2237786e.js";import"./index-18dff04f.js";import"./index-9ba5e071.js";import"./index-ea2c6002.js";import"./index-cabc11e8.js";import"./index-2a6bad3f.js";import"./index-0052e280.js";import"./index-e71babd2.js";import"./index-0844b8e9.js";import"./useCurrentTheme-3076cf6b.js";import"./index-96253ae6.js";import"./index-0fcfb6a9.js";import"./index-6b8d8845.js";import"./index-21379b2e.js";import"./index-89d309b6.js";import"./index-595b2ef9.js";import"./Row-cb35b7d4.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./string-b39bd50e.js";import"./index-21ddf7c2.js";import{B as k}from"./button-03dcac20.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-623989eb.js";import"./date-picker-091dbc07.js";import"./dropdown-textfield-2b001d61.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-e2bde112.js";import"./slide-action-408e0278.js";import"./speed-dial-54aee84a.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-5e726036.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-71be561b.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-a18291c8.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const n=()=>{const[e,s]=j.useState({start:p("2020-02-03"),end:p("2020-02-08")}),d=y({dateStyle:"long"});return t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsxs(C,{locale:"en-SG",children:[t.jsx("h3",{children:"Controlled"}),t.jsx("p",{children:e.start&&e.end?d.formatRange(e.start.toDate(o()),e.end.toDate(o())):`${e.start&&d.format(e.start.toDate(o()))} - ${e.end&&d.format(e.end.toDate(o()))}`}),t.jsx(a,{value:e,shouldCloseOnSelect:!0,startDateLabel:"Start Date",endDateLabel:"End Date",onChange:m=>s(m)})]})})},i=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(C,{locale:"en-SG",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("h3",{children:"Basic"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("br",{}),t.jsx("h3",{children:"Disabled"}),t.jsx(a,{isDisabled:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Read only"}),t.jsx(a,{isReadOnly:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Invalid"}),t.jsx(a,{isInvalid:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Min & Max"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",minValue:u(o()).add({days:1}),maxValue:u(o()).add({days:7})}),t.jsx("h3",{children:"Max range on first chosen date"}),t.jsx(E,{}),t.jsx("h3",{children:"Is Mobile"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",isMobile:!0}),t.jsx("h3",{children:"Helper texts"}),t.jsx(a,{isInvalid:!0,isRequired:!0,helperText:"Weekend is excluded",errorMessage:"Must not include weekend",startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Shortcuts"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0}),t.jsx("h3",{children:"Custom Shortcuts Range Calendar"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0,customShortcuts:e=>{const s=[{label:"Custom Shortcut",getValue:()=>({start:null,end:null})}];return[...e,...s]},ctaButtonRender:t.jsx(k,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})})}),E=()=>{const[e,s]=c.useState(null),[d,m]=c.useState(null),R=r=>{s(r),r&&r.start&&!r.end&&m(r.start.subtract({days:-30}))};return t.jsx(a,{value:e,onChange:R,shouldCloseOnSelect:!0,shouldOnChangeTriggerOnSameDate:!0,maxValue:d,onOpenChange:r=>{e!=null&&e.start&&!e.end||r&&m(null)}})},l=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(a,{css:{"& .cdg-date-field > div":{backgroundColor:"var(--cdg-color-cdgBlue20)"},"& .date-field-input > div":{color:"var(--cdg-color-cdgBlue100)"},"& .date-field-input > div:focus-visible":{color:"var(--cdg-color-cdgBlue100)",backgroundColor:"white"}}})}),Ie={title:"Example/Date Range Picker",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};l.__docgenInfo={description:"",methods:[],displayName:"Custom"};var g,h,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Me=["Basic","Variants","Custom"];export{n as Basic,l as Custom,i as Variants,Me as __namedExportsOrder,Ie as default};
