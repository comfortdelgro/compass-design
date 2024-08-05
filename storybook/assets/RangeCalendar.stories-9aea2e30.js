import{j as t}from"./jsx-runtime-9ef10904.js";import{R}from"./index-6c164b11.js";import{R as m}from"./index-5d9b056a.js";import"./index-e81b8c34.js";import"./index-e89f60cb.js";import"./index-4f6b7c55.js";import"./index-15c598e9.js";import"./index-ec8b205c.js";import"./index-a6cd513d.js";import"./index-9e847335.js";import"./index-8c96f1ee.js";import"./index-f0ea8199.js";import"./index-a4534e59.js";import"./index-b524196d.js";import"./index-9709637b.js";import"./index-fe6f70f1.js";import"./index-81648b60.js";import"./index-8afc989f.js";import"./index-deaea9cb.js";import"./index-a28a8ffa.js";import"./index-e7f39b02.js";import"./index-074620d7.js";import"./index-bab47577.js";import"./index-0a028ca0.js";import"./index-f9d7abc3.js";import"./index-f940c060.js";import"./Viewer-447f3689.js";import{p as d,u as T,g as a,a as x,t as w,s as F,e as O}from"./calendar-11907e4d.js";import"./NumberParser-89118490.js";import"./index-1727c636.js";import"./index-0d2269a8.js";import"./index-b7266972.js";import"./index-ce80528f.js";import"./index-8f883b6b.js";import"./index-a485d6a8.js";import"./index-a93d41cd.js";import"./index-d42081dd.js";import"./index-743890f1.js";import"./index-e2c6e307.js";import"./index-0a77337a.js";import"./index-0f034e12.js";import"./index-d88a2748.js";import"./index-17087710.js";import"./index-78db8da5.js";import"./index-4259cd01.js";import"./index-c8954287.js";import"./index-8d0f66a3.js";import"./index-bc84cfa4.js";import"./index-219208da.js";import"./index-7d11381a.js";import"./index-01156645.js";import"./index-7c02b6e0.js";import"./video-player-9ad7071f.js";import"./useSnackbar-41e96bd3.js";import"./index-2cad8c03.js";import"./index-a8b6e51e.js";import"./index-1299058a.js";import"./index-c7d502d2.js";import"./index-3339dc2d.js";import"./index-19e37ff7.js";import"./index-9242378d.js";import"./index-c9ae0d87.js";import"./index-d7c7ead6.js";import"./useCurrentTheme-3076cf6b.js";import"./index-545f196b.js";import"./index-43a16e3f.js";import"./index-e64a24f7.js";import"./index-21379b2e.js";import"./index-8de6e878.js";import"./index-92999917.js";import"./Row-7065e1c2.js";import"./useKeyboardNavigation-7c849a98.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-e90bd687.js";import"./index-e08ff86c.js";import{B as D}from"./button-a57955c5.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-ca8a9d53.js";import"./date-picker-4a2ce3da.js";import"./dropdown-textfield-0ae1254d.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-1e446f38.js";import"./slide-action-e7961684.js";import"./useDrag-6ba0f8b4.js";import"./speed-dial-11f3eab2.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-57517b5f.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-4876dc22.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-d4744197.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const e=()=>{const[o,i]=R.useState({start:d("2020-02-03"),end:d("2020-02-08")}),r=T({dateStyle:"long"});return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[o.start&&o.end?r.formatRange(o.start.toDate(a()),o.end.toDate(a())):`${o.start&&r.format(o.start.toDate(a()))} - ${o.end&&r.format(o.end.toDate(a()))}`,t.jsx(m,{value:o,onChange:c=>{i(c)},hasFooter:!0})]})},n=()=>{const{locale:o}=x(),i=w(a()).subtract({weeks:2}),r=F(i,o),c=O(i,o);return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[t.jsx("h3",{children:"Footer"}),t.jsx(m,{hasFooter:!0}),t.jsx("h3",{children:"Footer & Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,onSearchButtonClick:()=>{alert("search button callback")}}),t.jsx("h3",{children:"Custom Footer & Custom Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,customShortcuts:(S,p)=>{const b=[{label:"Custom Shortcut (Two weeks ago)",isDisable:p(r)||p(c),getValue:()=>({start:r,end:c})}];return[...S,...b]},ctaButtonRender:t.jsx(D,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})},s=()=>t.jsx("div",{style:{padding:"1rem"},children:t.jsx(m,{css:{backgroundColor:"var(--cdg-color-gray20)",border:"1px solid var(--cdg-color-gray50)","& .disabled":{color:"var(--cdg-color-gray60)",backgroundColor:"var(--cdg-color-gray40)"},"& .disabled:hover":{color:"var(--cdg-color-gray60)"}},hasFooter:!0,hasShortcuts:!0})}),Lt={title:"Example/Range Calendar",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.__docgenInfo={description:"",methods:[],displayName:"Custom"};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
      {range.start && range.end ? formatter.formatRange(range.start.toDate(getLocalTimeZone()), range.end.toDate(getLocalTimeZone())) : \`\${range.start && formatter.format(range.start.toDate(getLocalTimeZone()))} - \${range.end && formatter.format(range.end.toDate(getLocalTimeZone()))}\`}
      {}

      <RangeCalendar value={range} onChange={e => {
      setRange((e as RangeValue<DateValue>));
    }} hasFooter />
    </div>;
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,C;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    locale
  } = useLocale();
  const dayOfTwoWeeksAgo = today(getLocalTimeZone()).subtract({
    weeks: 2
  });
  const startOfTwoWeeksAgo = startOfWeek(dayOfTwoWeeksAgo, locale);
  const endOfTwoWeeksAgo = endOfWeek(dayOfTwoWeeksAgo, locale);
  return <div style={{
    padding: '1rem',
    backgroundColor: 'var(--cdg-color-gray20)'
  }}>
      <h3>Footer</h3>
      <RangeCalendar hasFooter />
      <h3>Footer & Shorcuts</h3>
      <RangeCalendar hasFooter hasShortcuts onSearchButtonClick={() => {
      alert('search button callback');
    }} />
      <h3>Custom Footer & Custom Shorcuts</h3>
      <RangeCalendar hasFooter hasShortcuts customShortcuts={(defaultShortcuts, isInvalid) => {
      const customShortcuts: RangeCalendarShorcutItem[] = [{
        label: 'Custom Shortcut (Two weeks ago)',
        isDisable: isInvalid(startOfTwoWeeksAgo) || isInvalid(endOfTwoWeeksAgo),
        getValue: () => {
          return {
            start: startOfTwoWeeksAgo,
            end: endOfTwoWeeksAgo
          };
        }
      }];
      return [...defaultShortcuts, ...customShortcuts];
    }} ctaButtonRender={<Button onPress={() => {
      alert('Custom callback');
    }}>
            Custom Button
          </Button>} />
    </div>;
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,y,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <div style={{
    padding: '1rem'
  }}>
      <RangeCalendar css={{
      backgroundColor: 'var(--cdg-color-gray20)',
      border: '1px solid var(--cdg-color-gray50)',
      '& .disabled': {
        color: 'var(--cdg-color-gray60)',
        backgroundColor: 'var(--cdg-color-gray40)'
      },
      '& .disabled:hover': {
        color: 'var(--cdg-color-gray60)'
      }
    }} hasFooter hasShortcuts />
    </div>;
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Vt=["Controlled","Variants","Custom"];export{e as Controlled,s as Custom,n as Variants,Vt as __namedExportsOrder,Lt as default};
