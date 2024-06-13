import{j as t}from"./jsx-runtime-ea7736fc.js";import{R}from"./index-6c164b11.js";import{R as m}from"./index-7d873515.js";import"./index-ef59e57a.js";import"./index-42ac8d43.js";import"./index-c4f93812.js";import"./index-3ab66ea1.js";import"./index-ba9672c4.js";import"./index-36749e01.js";import"./index-1481820f.js";import"./index-785af938.js";import"./index-c28b9cd4.js";import"./index-01d394d9.js";import"./index-b844ebee.js";import"./index-05878d10.js";import"./index-db162ed9.js";import"./index-4f1d1dd5.js";import"./index-a62a93be.js";import"./index-00c80c60.js";import"./index-0c0b2fdc.js";import"./index-c444fdb6.js";import"./index-d8a01d3f.js";import"./index-1a491ca7.js";import"./index-25cc2dc8.js";import"./index-3811d87e.js";import"./index-3ff3ef4a.js";import"./Viewer-de9ece4e.js";import{p as d,u as T,g as a,a as x,t as w,s as F,e as O}from"./calendar-b4f421e9.js";import"./NumberParser-89118490.js";import"./index-899c47f1.js";import"./index-febbedd6.js";import"./index-dbd28b7b.js";import"./index-a749d917.js";import"./index-02da530b.js";import"./index-a1733458.js";import"./index-e5c7f637.js";import"./index-3095c07e.js";import"./index-47ed11ed.js";import"./index-1e91b611.js";import"./index-87eb7dd0.js";import"./index-95d58e40.js";import"./index-53a599f3.js";import"./index-a4cde574.js";import"./index-0981a571.js";import"./index-b38ed74c.js";import"./index-014daaba.js";import"./index-fd3ebdd5.js";import"./index-fb6db828.js";import"./index-56e6e3a9.js";import"./index-bf22c748.js";import"./index-23ef5d9f.js";import"./index-3a481d55.js";import"./video-player-28059ce7.js";import"./useSnackbar-4f49a84b.js";import"./index-4fda0bf4.js";import"./index-8adbe5ee.js";import"./index-3d780d5e.js";import"./index-8c30b973.js";import"./index-3fe0789f.js";import"./index-b2163232.js";import"./index-7a07e922.js";import"./index-b2c9f1c0.js";import"./index-2802fc62.js";import"./useCurrentTheme-474309da.js";import"./index-8cd84d59.js";import"./Row-74a318ea.js";import"./index-feb29144.js";import"./index-0a0dc8f5.js";import"./index-97062572.js";import"./index-de2e4c53.js";import"./useKeyboardNavigation-819d3b4a.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./string-cf4adbb3.js";import"./index-4ba38acb.js";import{B as D}from"./button-8faa8e19.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-fa787fee.js";import"./date-picker-edc34dcd.js";import"./dropdown-textfield-5e606f52.js";import"./index-eb8c837f.js";import"./rating-d8b894af.js";import"./slide-action-f7eaf4f1.js";import"./speed-dial-0ea5b6b9.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-b2a8cea5.js";import"./index-8ce02b55.js";import"./get-icon-from-color-ca1cae80.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./useId-133e3351.js";import"./noop-4f713d1a.js";import"./layout-9ff37ead.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-f28bb353.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const e=()=>{const[o,i]=R.useState({start:d("2020-02-03"),end:d("2020-02-08")}),r=T({dateStyle:"long"});return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[o.start&&o.end?r.formatRange(o.start.toDate(a()),o.end.toDate(a())):`${o.start&&r.format(o.start.toDate(a()))} - ${o.end&&r.format(o.end.toDate(a()))}`,t.jsx(m,{value:o,onChange:c=>{i(c)},hasFooter:!0})]})},n=()=>{const{locale:o}=x(),i=w(a()).subtract({weeks:2}),r=F(i,o),c=O(i,o);return t.jsxs("div",{style:{padding:"1rem",backgroundColor:"var(--cdg-color-gray20)"},children:[t.jsx("h3",{children:"Footer"}),t.jsx(m,{hasFooter:!0}),t.jsx("h3",{children:"Footer & Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,onSearchButtonClick:()=>{alert("search button callback")}}),t.jsx("h3",{children:"Custom Footer & Custom Shorcuts"}),t.jsx(m,{hasFooter:!0,hasShortcuts:!0,customShortcuts:(S,p)=>{const b=[{label:"Custom Shortcut (Two weeks ago)",isDisable:p(r)||p(c),getValue:()=>({start:r,end:c})}];return[...S,...b]},ctaButtonRender:t.jsx(D,{onPress:()=>{alert("Custom callback")},children:"Custom Button"})})]})},s=()=>t.jsx("div",{style:{padding:"1rem"},children:t.jsx(m,{css:{backgroundColor:"var(--cdg-color-gray20)",border:"1px solid var(--cdg-color-gray50)","& .disabled":{color:"var(--cdg-color-gray60)",backgroundColor:"var(--cdg-color-gray40)"},"& .disabled:hover":{color:"var(--cdg-color-gray60)"}},hasFooter:!0,hasShortcuts:!0})}),At={title:"Example/Range Calendar",component:e,tags:["autodocs"],parameters:{layout:"fullscreen"}};e.__docgenInfo={description:"",methods:[],displayName:"Controlled"};n.__docgenInfo={description:"",methods:[],displayName:"Variants"};s.__docgenInfo={description:"",methods:[],displayName:"Custom"};var l,u,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const Bt=["Controlled","Variants","Custom"];export{e as Controlled,s as Custom,n as Variants,Bt as __namedExportsOrder,At as default};
