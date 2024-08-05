import{j as t}from"./jsx-runtime-9ef10904.js";import{R as j,r as c}from"./index-6c164b11.js";import{D as a}from"./index-5d9b056a.js";import"./index-e81b8c34.js";import"./index-e89f60cb.js";import"./index-4f6b7c55.js";import"./index-15c598e9.js";import"./index-ec8b205c.js";import"./index-a6cd513d.js";import"./index-9e847335.js";import"./index-8c96f1ee.js";import"./index-f0ea8199.js";import"./index-a4534e59.js";import"./index-b524196d.js";import"./index-9709637b.js";import"./index-fe6f70f1.js";import"./index-81648b60.js";import"./index-8afc989f.js";import"./index-deaea9cb.js";import"./index-a28a8ffa.js";import"./index-e7f39b02.js";import"./index-074620d7.js";import"./index-bab47577.js";import"./index-0a028ca0.js";import"./index-f9d7abc3.js";import"./index-f940c060.js";import"./Viewer-447f3689.js";import{p,u as y,I as C,g as o,t as u}from"./calendar-11907e4d.js";import"./NumberParser-89118490.js";import"./index-1727c636.js";import"./index-0d2269a8.js";import"./index-b7266972.js";import"./index-ce80528f.js";import"./index-8f883b6b.js";import"./index-a485d6a8.js";import"./index-a93d41cd.js";import"./index-d42081dd.js";import"./index-743890f1.js";import"./index-e2c6e307.js";import"./index-0a77337a.js";import"./index-0f034e12.js";import"./index-d88a2748.js";import"./index-17087710.js";import"./index-78db8da5.js";import"./index-4259cd01.js";import"./index-c8954287.js";import"./index-8d0f66a3.js";import"./index-bc84cfa4.js";import"./index-219208da.js";import"./index-7d11381a.js";import"./index-01156645.js";import"./index-7c02b6e0.js";import"./video-player-9ad7071f.js";import"./useSnackbar-41e96bd3.js";import"./index-2cad8c03.js";import"./index-a8b6e51e.js";import"./index-1299058a.js";import"./index-c7d502d2.js";import"./index-3339dc2d.js";import"./index-19e37ff7.js";import"./index-9242378d.js";import"./index-c9ae0d87.js";import"./index-d7c7ead6.js";import"./useCurrentTheme-3076cf6b.js";import"./index-545f196b.js";import"./index-43a16e3f.js";import"./index-e64a24f7.js";import"./index-21379b2e.js";import"./index-8de6e878.js";import"./index-92999917.js";import"./Row-7065e1c2.js";import"./useKeyboardNavigation-7c849a98.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-e90bd687.js";import"./index-e08ff86c.js";import{B as k}from"./button-a57955c5.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-ca8a9d53.js";import"./date-picker-4a2ce3da.js";import"./dropdown-textfield-0ae1254d.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-1e446f38.js";import"./slide-action-e7961684.js";import"./useDrag-6ba0f8b4.js";import"./speed-dial-11f3eab2.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-57517b5f.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-4876dc22.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-d4744197.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const n=()=>{const[e,i]=j.useState({start:p("2020-02-03"),end:p("2020-02-08")}),s=y({dateStyle:"long"});return t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsxs(C,{locale:"en-SG",children:[t.jsx("h3",{children:"Controlled"}),t.jsx("p",{children:e.start&&e.end?s.formatRange(e.start.toDate(o()),e.end.toDate(o())):`${e.start&&s.format(e.start.toDate(o()))} - ${e.end&&s.format(e.end.toDate(o()))}`}),t.jsx(a,{value:e,shouldCloseOnSelect:!0,startDateLabel:"Start Date",endDateLabel:"End Date",onChange:m=>i(m)})]})})},d=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(C,{locale:"en-SG",children:t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx("h3",{children:"Basic"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("br",{}),t.jsx("h3",{children:"Disabled"}),t.jsx(a,{isDisabled:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Read only"}),t.jsx(a,{isReadOnly:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Invalid"}),t.jsx(a,{isInvalid:!0,startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Min & Max"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",minValue:u(o()).add({days:1}),maxValue:u(o()).add({days:7})}),t.jsx("h3",{children:"Max range on first chosen date"}),t.jsx(E,{}),t.jsx("h3",{children:"Is Mobile"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",isMobile:!0}),t.jsx("h3",{children:"Helper texts"}),t.jsx(a,{isInvalid:!0,isRequired:!0,helperText:"Weekend is excluded",errorMessage:"Must not include weekend",startDateLabel:"Start date",endDateLabel:"End date"}),t.jsx("h3",{children:"Shortcuts"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0}),t.jsx("h3",{children:"Custom Shortcuts Range Calendar"}),t.jsx(a,{startDateLabel:"Start date",endDateLabel:"End date",hasShortcuts:!0,customShortcuts:e=>{const i=[{label:"Custom Shortcut",getValue:()=>({start:null,end:null})}];return[...e,...i]},ctaButtonRender:t.jsx(k,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})})}),E=()=>{const[e,i]=c.useState(null),[s,m]=c.useState(null),R=r=>{i(r),r&&r.start&&!r.end&&m(r.start.subtract({days:-30}))};return t.jsx(a,{value:e,onChange:R,shouldCloseOnSelect:!0,shouldOnChangeTriggerOnSameDate:!0,maxValue:s,onOpenChange:r=>{e!=null&&e.start&&!e.end||r&&m(null)}})},l=()=>t.jsx("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:t.jsx(a,{css:{"& .cdg-date-field > div":{backgroundColor:"var(--cdg-color-cdgBlue20)"},"& .date-field-input > div":{color:"var(--cdg-color-cdgBlue100)"},"& .date-field-input > div:focus-visible":{color:"var(--cdg-color-cdgBlue100)",backgroundColor:"white"}}})}),Me={title:"Example/Date Range Picker",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}};n.__docgenInfo={description:"",methods:[],displayName:"Basic"};d.__docgenInfo={description:"",methods:[],displayName:"Variants"};l.__docgenInfo={description:"",methods:[],displayName:"Custom"};var g,h,D;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
