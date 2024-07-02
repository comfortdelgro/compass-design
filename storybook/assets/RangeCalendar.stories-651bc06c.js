import{j as t}from"./jsx-runtime-9ef10904.js";import{R}from"./index-6c164b11.js";import{R as m}from"./index-8dd82c88.js";import"./index-3e1c9234.js";import"./index-284aca9d.js";import"./index-fa7e7d30.js";import"./index-37c7bf77.js";import"./index-06aea52e.js";import"./index-bdc47b33.js";import"./index-26609149.js";import"./index-5b7974a3.js";import"./index-68dd90e7.js";import"./index-1c61ccc3.js";import"./index-be7e1eee.js";import"./index-30602da6.js";import"./index-3b7e403c.js";import"./index-8cf671da.js";import"./index-0f166032.js";import"./index-c5f5a66a.js";import"./index-f6675da2.js";import"./index-4419a936.js";import"./index-0e37f839.js";import"./index-29cce5d8.js";import"./index-ceba8d97.js";import"./index-1f855692.js";import"./index-a2441fec.js";import"./Viewer-2b773ead.js";import{p as d,u as T,g as a,a as x,t as w,s as F,e as O}from"./calendar-6bc86dce.js";import"./NumberParser-89118490.js";import"./index-946d64ba.js";import"./index-1dc17834.js";import"./index-3fddcbe4.js";import"./index-eca25368.js";import"./index-133908b4.js";import"./index-083267d0.js";import"./index-cbf6a047.js";import"./index-3385e30c.js";import"./index-6fc6b3a7.js";import"./index-e2c6e307.js";import"./index-855e3f50.js";import"./index-13f3b7d0.js";import"./index-268c0602.js";import"./index-31578372.js";import"./index-634fd9bf.js";import"./index-1e7f5058.js";import"./index-cb5ba4ca.js";import"./index-358939c8.js";import"./index-34328747.js";import"./index-c10b40de.js";import"./index-f58a03c4.js";import"./index-dc6539d5.js";import"./index-9cbb795d.js";import"./video-player-646b1ee5.js";import"./useSnackbar-8c77c764.js";import"./index-2237786e.js";import"./index-18dff04f.js";import"./index-9ba5e071.js";import"./index-ea2c6002.js";import"./index-cabc11e8.js";import"./index-2a6bad3f.js";import"./index-0052e280.js";import"./index-e71babd2.js";import"./index-0844b8e9.js";import"./useCurrentTheme-3076cf6b.js";import"./index-96253ae6.js";import"./index-0fcfb6a9.js";import"./index-6b8d8845.js";import"./index-21379b2e.js";import"./index-89d309b6.js";import"./index-595b2ef9.js";import"./Row-cb35b7d4.js";import"./useKeyboardNavigation-fc00b2dd.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./string-b39bd50e.js";import"./index-21ddf7c2.js";import{B as D}from"./button-03dcac20.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-623989eb.js";import"./date-picker-091dbc07.js";import"./dropdown-textfield-2b001d61.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-e2bde112.js";import"./slide-action-408e0278.js";import"./speed-dial-54aee84a.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-5e726036.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-71be561b.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-a18291c8.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const e=()=>{const[o,i]=R.useState({start:d("2020-02-03"),end:d("2020-02-08")}),r=T({dateStyle:"long"});return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[o.start&&o.end?r.formatRange(o.start.toDate(a()),o.end.toDate(a())):`${o.start&&r.format(o.start.toDate(a()))} - ${o.end&&r.format(o.end.toDate(a()))}`,t.jsx(m,{value:o,onChange:c=>{i(c)},hasFooter:!0})]})},n=()=>{const{locale:o}=x(),i=w(a()).subtract({weeks:2}),r=F(i,o),c=O(i,o);return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[t.jsx("h3",{children:"Footer"}),t.jsx(m,{hasFooter:!0}),t.jsx("h3",{children:"Footer & Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,onSearchButtonClick:()=>{alert("search button callback")}}),t.jsx("h3",{children:"Custom Footer & Custom Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,customShortcuts:(S,p)=>{const b=[{label:"Custom Shortcut (Two weeks ago)",isDisable:p(r)||p(c),getValue:()=>({start:r,end:c})}];return[...S,...b]},ctaButtonRender:t.jsx(D,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})},s=()=>t.jsx("div",{style:{padding:"1rem"},children:t.jsx(m,{css:{backgroundColor:"var(--cdg-color-gray20)",border:"1px solid var(--cdg-color-gray50)","& .disabled":{color:"var(--cdg-color-gray60)",backgroundColor:"var(--cdg-color-gray40)"},"& .disabled:hover":{color:"var(--cdg-color-gray60)"}},hasFooter:!0,hasShortcuts:!0})}),Bt={title:"Example/Range Calendar",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.__docgenInfo={description:"",methods:[],displayName:"Custom"};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Lt=["Controlled","Variants","Custom"];export{e as Controlled,s as Custom,n as Variants,Lt as __namedExportsOrder,Bt as default};
