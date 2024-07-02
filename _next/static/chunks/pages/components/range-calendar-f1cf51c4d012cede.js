(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6229],{70052:function(n,e,a){"use strict";a.d(e,{Z:function(){return d}});var t,o,s=a(15393),r=a(16371),l=a.n(r),c=a(31549);function d(){return(0,c.jsxs)(s.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,c.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,c.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,c.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,c.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},61278:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return C}});var t,o={};a.r(o),a.d(o,{demoComponents:function(){return h},demos:function(){return f},docs:function(){return m},srcComponents:function(){return k}});var s=a(26098),r=a(24437),l=a(15393),c=a(44194),d=a.t(c,2),i=a(31549),u=a(73804),g=a(9555),p=a(70052),m={description:"RangeCalendars display a grid of days in one or more months and allow users to select a contiguous range of dates.",location:"/docs/data/components/range-calendar/range-calendar.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Range Calendar</h1><p class="description">RangeCalendars display a grid of days in one or more months and allow users to select a contiguous range of dates.</p>\n\n',{component:"components/ComponentLinkHeader.tsx"},'<h2 id="i18n">I18n<a aria-labelledby="i18n" class="anchor-link" href="#i18n" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>React Compass use [React Aria I18N](https://react-spectrum.adobe.com/react-aria/internationalization.html) and [React Aria Internationalized](https://react-spectrum.adobe.com/internationalized/index.html) to deal with i18n.</p>\n\n<p>How to use</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Calendar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  <span class="token comment">/** any function in react aria i18n */</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> Calendar<span class="token punctuation">.</span><span class="token constant">I18N</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  <span class="token comment">/** any function in react aria internationalized */</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> Calendar<span class="token punctuation">.</span>InternationalizedDate\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="i18nprovider">I18nProvider<a aria-labelledby="i18nprovider" class="anchor-link" href="#i18nprovider" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>I18nProvider allows you to override the default locale as determined by the browser/system setting with a locale defined by your application (e.g. application setting).\nIn this docs, we will use English(Singapore) <code>en-SG</code> as default locale</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Calendar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n  I18nProvider\n<span class="token punctuation">}</span> <span class="token operator">=</span> Calendar<span class="token punctuation">.</span><span class="token constant">I18N</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">I18nProvider</span></span> <span class="token attr-name">locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en-SG<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">I18nProvider</span></span><span class="token punctuation">></span></span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>RangeCalendar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CalendarBasic.tsx"},'<h3 id="controlled-range-calendar">Controlled Range Calendar<a aria-labelledby="controlled-range-calendar" class="anchor-link" href="#controlled-range-calendar" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ControlledRangeCalendar.tsx"},'<h3 id="customize-shorcutsrange-calendar">Customize ShorcutsRange Calendar<a aria-labelledby="customize-shorcutsrange-calendar" class="anchor-link" href="#customize-shorcutsrange-calendar" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CustomizeShorcutsRangeCalendar.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">minValue</td>\n<td align="left"><code>DateValue</code></td>\n<td align="left"></td>\n<td align="left">The minimum allowed date that a user may select.</td>\n</tr>\n<tr>\n<td align="left">maxValue</td>\n<td align="left"><code>DateValue</code></td>\n<td align="left"></td>\n<td align="left">The maximum allowed date that a user may select.</td>\n</tr>\n<tr>\n<td align="left">isReadOnly</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar value is immutable.</td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar is disabled.</td>\n</tr>\n<tr>\n<td align="left">visibleMonths</td>\n<td align="left">1 | 2</td>\n<td align="left">2</td>\n<td align="left">Whether the range calendar shows 2 months consecutively or not.</td>\n</tr>\n<tr>\n<td align="left">hasFooter</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar footer is shown.</td>\n</tr>\n<tr>\n<td align="left">hasShortcuts</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the calendar shorcuts is shown.</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>RangeValue&lt;DateValue || null&gt;</code></td>\n<td align="left"></td>\n<td align="left">The current value (controlled).</td>\n</tr>\n<tr>\n<td align="left">defaultValue</td>\n<td align="left"><code>RangeValue&lt;DateValue&gt;</code></td>\n<td align="left"></td>\n<td align="left">The default value (uncontrolled).</td>\n</tr>\n<tr>\n<td align="left">onChange</td>\n<td align="left"><code>(e: RangeValue&lt;DateValue || null&gt;) =&gt; void</code></td>\n<td align="left"></td>\n<td align="left">Callback fired when the value changes.</td>\n</tr>\n<tr>\n<td align="left">onSearchButtonClick</td>\n<td align="left"><code>(e: MouseEvent) =&gt; void</code></td>\n<td align="left"></td>\n<td align="left">Callback fired when the Search Button in the footer is clicked.</td>\n</tr>\n<tr>\n<td align="left">ctaButtonRender</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left"></td>\n<td align="left">To render custom CTA Button in the footer</td>\n</tr>\n<tr>\n<td align="left">customShortcuts</td>\n<td align="left"><code>(defaultShortcuts: RangeCalendarShorcutItem[], isValid: (value: DateValue) =&gt; boolean) =&gt; RangeCalendarShorcutItem[]</code></td>\n<td align="left"></td>\n<td align="left">This callback function is to render custom shortcuts. It has two params: <code>defaultShortcuts</code> and <code>isInvalid</code> for user to use</td>\n</tr>\n<tr>\n<td align="left">isDateUnavailable</td>\n<td align="left"><code>(date: DateValue) =&gt; boolean</code></td>\n<td align="left"></td>\n<td align="left">Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"I18n",level:2,hash:"i18n",children:[]},{text:"I18nProvider",level:2,hash:"i18nprovider",children:[{text:"Import",level:3,hash:"import"}]},{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Controlled Range Calendar",level:3,hash:"controlled-range-calendar"},{text:"Customize ShorcutsRange Calendar",level:3,hash:"customize-shorcutsrange-calendar"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Range Calendar component",headers:{title:"React Range Calendar component",components:["RangeCalendar"],hooks:[]}},f={"CalendarBasic.tsx":{module:"./CalendarBasic.tsx",raw:"import {RangeCalendar} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return <RangeCalendar />\n}\n\nexport default BasicExample\n",jsxPreview:"<RangeCalendar />",moduleTS:"./CalendarBasic.tsx",rawTS:"import {RangeCalendar} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return <RangeCalendar />\n}\n\nexport default BasicExample\n"},"ControlledRangeCalendar.tsx":{module:"./ControlledRangeCalendar.tsx",raw:"import {\n  DateValue,\n  getLocalTimeZone,\n  parseDate,\n  RangeCalendar,\n  RangeValue,\n  useDateFormatter,\n} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction ControlledRangeCalendar() {\n  const [range, setRange] = React.useState<RangeValue<DateValue | null>>({\n    start: parseDate('2020-02-03'),\n    end: parseDate('2020-02-08'),\n  })\n  const formatter = useDateFormatter({dateStyle: 'long'})\n  return (\n    <>\n      {range.start && range.end\n        ? formatter.formatRange(\n            range.start.toDate(getLocalTimeZone()),\n            range.end.toDate(getLocalTimeZone()),\n          )\n        : `${\n            range.start &&\n            formatter.format(range.start.toDate(getLocalTimeZone()))\n          } - ${\n            range.end && formatter.format(range.end.toDate(getLocalTimeZone()))\n          }`}\n\n      <RangeCalendar\n        onChange={(e) => {\n          setRange(e as RangeValue<DateValue>)\n        }}\n      />\n    </>\n  )\n}\n\nexport default ControlledRangeCalendar\n",jsxPreview:"import {\r\n  DateValue,\r\n  getLocalTimeZone,\r\n  parseDate,\r\n  RangeCalendar,\r\n  RangeValue,\r\n  useDateFormatter,\r\n} from '@comfortdelgro/react-compass'\r\nimport React from 'react'\r\n\r\nfunction ControlledRangeCalendar() {\r\n  const [range, setRange] = React.useState<RangeValue<DateValue | null>>({\r\n    start: parseDate('2020-02-03'),\r\n    end: parseDate('2020-02-08'),\r\n  })\r\n  const formatter = useDateFormatter({dateStyle: 'long'})\r\n  return (\r\n    <>\r\n      {range.start && range.end\r\n        ? formatter.formatRange(\r\n            range.start.toDate(getLocalTimeZone()),\r\n            range.end.toDate(getLocalTimeZone()),\r\n          )\r\n        : `${\r\n            range.start &&\r\n            formatter.format(range.start.toDate(getLocalTimeZone()))\r\n          } - ${\r\n            range.end && formatter.format(range.end.toDate(getLocalTimeZone()))\r\n          }`}\r\n\r\n      <RangeCalendar\r\n        onChange={(e) => {\r\n          setRange(e as RangeValue<DateValue>)\r\n        }}\r\n      />\r\n    </>\r\n  )\r\n}\r\n\r\nexport default ControlledRangeCalendar\r\n",moduleTS:"./ControlledRangeCalendar.tsx",rawTS:"import {\n  DateValue,\n  getLocalTimeZone,\n  parseDate,\n  RangeCalendar,\n  RangeValue,\n  useDateFormatter,\n} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nfunction ControlledRangeCalendar() {\n  const [range, setRange] = React.useState<RangeValue<DateValue | null>>({\n    start: parseDate('2020-02-03'),\n    end: parseDate('2020-02-08'),\n  })\n  const formatter = useDateFormatter({dateStyle: 'long'})\n  return (\n    <>\n      {range.start && range.end\n        ? formatter.formatRange(\n            range.start.toDate(getLocalTimeZone()),\n            range.end.toDate(getLocalTimeZone()),\n          )\n        : `${\n            range.start &&\n            formatter.format(range.start.toDate(getLocalTimeZone()))\n          } - ${\n            range.end && formatter.format(range.end.toDate(getLocalTimeZone()))\n          }`}\n\n      <RangeCalendar\n        onChange={(e) => {\n          setRange(e as RangeValue<DateValue>)\n        }}\n      />\n    </>\n  )\n}\n\nexport default ControlledRangeCalendar\n"},"CustomizeShorcutsRangeCalendar.tsx":{module:"./CustomizeShorcutsRangeCalendar.tsx",raw:"import {\n  endOfWeek,\n  getLocalTimeZone,\n  RangeCalendar,\n  RangeCalendarShorcutItem,\n  startOfWeek,\n  today,\n  useLocale,\n} from '@comfortdelgro/react-compass'\n\nfunction CustomizeShorcutsRangeCalendar() {\n  const {locale} = useLocale()\n\n  const dayOfTwoWeeksAgo = today(getLocalTimeZone()).subtract({\n    weeks: 2,\n  })\n  const startOfTwoWeeksAgo = startOfWeek(dayOfTwoWeeksAgo, locale)\n  const endOfTwoWeeksAgo = endOfWeek(dayOfTwoWeeksAgo, locale)\n\n  return (\n    <RangeCalendar\n      hasShortcuts\n      customShortcuts={(defaultShortcuts, isInvalid) => {\n        const customShortcuts: RangeCalendarShorcutItem[] = [\n          {\n            label: 'Custom Shortcut (Two weeks ago)',\n            isDisable:\n              isInvalid(startOfTwoWeeksAgo) || isInvalid(endOfTwoWeeksAgo),\n            getValue: () => {\n              return {start: startOfTwoWeeksAgo, end: endOfTwoWeeksAgo}\n            },\n          },\n        ]\n        return [...defaultShortcuts, ...customShortcuts]\n      }}\n    />\n  )\n}\n\nexport default CustomizeShorcutsRangeCalendar\n",moduleTS:"./CustomizeShorcutsRangeCalendar.tsx",rawTS:"import {\n  endOfWeek,\n  getLocalTimeZone,\n  RangeCalendar,\n  RangeCalendarShorcutItem,\n  startOfWeek,\n  today,\n  useLocale,\n} from '@comfortdelgro/react-compass'\n\nfunction CustomizeShorcutsRangeCalendar() {\n  const {locale} = useLocale()\n\n  const dayOfTwoWeeksAgo = today(getLocalTimeZone()).subtract({\n    weeks: 2,\n  })\n  const startOfTwoWeeksAgo = startOfWeek(dayOfTwoWeeksAgo, locale)\n  const endOfTwoWeeksAgo = endOfWeek(dayOfTwoWeeksAgo, locale)\n\n  return (\n    <RangeCalendar\n      hasShortcuts\n      customShortcuts={(defaultShortcuts, isInvalid) => {\n        const customShortcuts: RangeCalendarShorcutItem[] = [\n          {\n            label: 'Custom Shortcut (Two weeks ago)',\n            isDisable:\n              isInvalid(startOfTwoWeeksAgo) || isInvalid(endOfTwoWeeksAgo),\n            getValue: () => {\n              return {start: startOfTwoWeeksAgo, end: endOfTwoWeeksAgo}\n            },\n          },\n        ]\n        return [...defaultShortcuts, ...customShortcuts]\n      }}\n    />\n  )\n}\n\nexport default CustomizeShorcutsRangeCalendar\n"}};f.scope={process:{},import:{"@comfortdelgro/react-compass":l,react:d}};var h={"./CalendarBasic.tsx":function(){return t||(t=(0,i.jsx)(l.RangeCalendar,{}))},"./ControlledRangeCalendar.tsx":function(){var n=c.useState({start:(0,l.parseDate)("2020-02-03"),end:(0,l.parseDate)("2020-02-08")}),e=(0,u.Z)(n,2),a=e[0],t=e[1],o=(0,l.useDateFormatter)({dateStyle:"long"});return(0,i.jsxs)(i.Fragment,{children:[a.start&&a.end?o.formatRange(a.start.toDate((0,l.getLocalTimeZone)()),a.end.toDate((0,l.getLocalTimeZone)())):"".concat(a.start&&o.format(a.start.toDate((0,l.getLocalTimeZone)()))," - ").concat(a.end&&o.format(a.end.toDate((0,l.getLocalTimeZone)()))),(0,i.jsx)(l.RangeCalendar,{onChange:function(n){t(n)}})]})},"./CustomizeShorcutsRangeCalendar.tsx":function(){var n=(0,l.useLocale)().locale,e=(0,l.today)((0,l.getLocalTimeZone)()).subtract({weeks:2}),a=(0,l.startOfWeek)(e,n),t=(0,l.endOfWeek)(e,n);return(0,i.jsx)(l.RangeCalendar,{hasShortcuts:!0,customShortcuts:function(n,e){var o=[{label:"Custom Shortcut (Two weeks ago)",isDisable:e(a)||e(t),getValue:function(){return{start:a,end:t}}}];return[].concat((0,g.Z)(n),o)}})}},k={"components/ComponentLinkHeader.tsx":p.Z};function C(){return(0,i.jsx)(r.Z,(0,s.Z)({},o))}},42086:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/range-calendar",function(){return a(61278)}])},9555:function(n,e,a){"use strict";a.d(e,{Z:function(){return d}});var t=a(38885),o=a(37709),s=a(66452),r=a(89935),l=a(58980),c=a(77587);function d(n){return function(n){if(t(n))return(0,o.Z)(n)}(n)||function(n){if(void 0!==s&&null!=n[r]||null!=n["@@iterator"])return l(n)}(n)||(0,c.Z)(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(n){n.O(0,[508,6371,7306,3936,4437,9774,2888,179],function(){return n(n.s=42086)}),_N_E=n.O()}]);