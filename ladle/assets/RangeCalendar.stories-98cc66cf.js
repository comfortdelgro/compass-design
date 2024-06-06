import{j as t}from"./jsx-runtime-ea7736fc.js";import{R}from"./index-6c164b11.js";import{R as m}from"./index-cdf7513e.js";import"./index-9178f86c.js";import"./index-0c922b64.js";import"./index-cc86efa4.js";import"./index-03cff320.js";import"./index-47a1c304.js";import"./index-ce1c8671.js";import"./index-0d53bb30.js";import"./index-3170d50c.js";import"./index-7972436d.js";import"./index-d697583f.js";import"./index-02337fb0.js";import"./index-7a7498f5.js";import"./index-e7f2b220.js";import"./index-33fba25f.js";import"./index-4cb193f3.js";import"./index-579e501f.js";import"./index-82dc4608.js";import"./index-14a5a860.js";import"./index-3e7fd8c3.js";import"./index-9b877fe0.js";import"./index-1fd2fc01.js";import"./index-58b33020.js";import"./index-3c6de7b1.js";import"./Viewer-a8f46180.js";import{p as d,u as T,g as a,a as x,t as w,s as F,e as O}from"./calendar-17db7acc.js";import"./NumberParser-bd499a26.js";import"./index-44f80ede.js";import"./index-9cc0ffcb.js";import"./index-489b6ecb.js";import"./index-f93f9dc9.js";import"./index-6f96fe02.js";import"./index-10d8d6ed.js";import"./index-77063761.js";import"./index-0ae06ec8.js";import"./index-9ee83bda.js";import"./index-1e91b611.js";import"./index-b6f73d5b.js";import"./index-b3d59218.js";import"./index-f318de67.js";import"./index-be599a31.js";import"./index-f484f2a1.js";import"./index-73b3188c.js";import"./index-8bd325fb.js";import"./index-584a999a.js";import"./index-252633e7.js";import"./index-27851459.js";import"./index-109ea52a.js";import"./index-5a173c15.js";import"./index-5e221ed0.js";import"./video-player-e278bccf.js";import"./useSnackbar-234ef792.js";import"./index-d488ea9b.js";import"./index-aea15489.js";import"./index-b8816cdb.js";import"./index-16d9e09a.js";import"./index-90af5112.js";import"./index-b1157fd5.js";import"./index-34b8f82d.js";import"./index-9fb2cabb.js";import"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./index-722c9b20.js";import"./Row-e65f206d.js";import"./index-1825d005.js";import"./index-0a0dc8f5.js";import"./index-9b621ca4.js";import"./index-52a97e3f.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-aff350d4.js";import"./index-14d7a7b1.js";import{B as D}from"./button-be34d763.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-c116e6b4.js";import"./date-picker-2b47ac6c.js";import"./index-4593f2b5.js";import"./dropdown-textfield-210a5270.js";import"./index-eb8c837f.js";import"./string-de12cf5f.js";import"./rating-ca365a65.js";import"./slide-action-b34e09b0.js";import"./useDrag-c728562f.js";import"./speed-dial-f74b5546.js";import"./floating-ui.react.esm-06842318.js";import"./index-318acb9e.js";import"./tooltip-trigger-04cfd43d.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./arrow-right-20c3256f.js";import"./layout-5fac5c12.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-0d3b18cd.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const e=()=>{const[o,i]=R.useState({start:d("2020-02-03"),end:d("2020-02-08")}),r=T({dateStyle:"long"});return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[o.start&&o.end?r.formatRange(o.start.toDate(a()),o.end.toDate(a())):`${o.start&&r.format(o.start.toDate(a()))} - ${o.end&&r.format(o.end.toDate(a()))}`,t.jsx(m,{value:o,onChange:c=>{i(c)},hasFooter:!0})]})},n=()=>{const{locale:o}=x(),i=w(a()).subtract({weeks:2}),r=F(i,o),c=O(i,o);return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[t.jsx("h3",{children:"Footer"}),t.jsx(m,{hasFooter:!0}),t.jsx("h3",{children:"Footer & Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,onSearchButtonClick:()=>{alert("search button callback")}}),t.jsx("h3",{children:"Custom Footer & Custom Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,customShortcuts:(S,p)=>{const b=[{label:"Custom Shortcut (Two weeks ago)",isDisable:p(r)||p(c),getValue:()=>({start:r,end:c})}];return[...S,...b]},ctaButtonRender:t.jsx(D,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})},s=()=>t.jsx("div",{style:{padding:"1rem"},children:t.jsx(m,{css:{backgroundColor:"var(--cdg-color-gray20)",border:"1px solid var(--cdg-color-gray50)","& .disabled":{color:"var(--cdg-color-gray60)",backgroundColor:"var(--cdg-color-gray40)"},"& .disabled:hover":{color:"var(--cdg-color-gray60)"}},hasFooter:!0,hasShortcuts:!0})}),Lt={title:"Example/Range Calendar",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.__docgenInfo={description:"",methods:[],displayName:"Custom"};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
