(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9483],{70052:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var o,r,a=e(15393),s=e(16371),i=e.n(s),l=e(31549);function c(){return(0,l.jsxs)(a.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,l.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,l.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,l.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},66217:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return p}});var o={};e.r(o),e.d(o,{demoComponents:function(){return c},demos:function(){return l},docs:function(){return i},srcComponents:function(){return d}});var r=e(26098),a=e(24437),s=e(70052),i={description:"A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.",location:"/docs/data/utilities/number/number-formatter.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>CalendarDateTime</h1><p class="description">A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.</p>\n\n',{component:"components/ComponentLinkHeader.tsx"},'<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p><code>NumberFormatter</code> is a wrapper around the native <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" target="_blank" rel="noopener nofollow">Intl.NumberFormat</a> API. It exposes the same API, but works around several browser bugs and provides polyfills for newer features. These are currently:</p>\n<ul>\n<li>A polyfill for the <code>signDisplay</code> option.</li>\n<li>A polyfill for the <code>unit</code> style, currently only for the <code>degree</code> unit in the <code>narrow</code> style</li>\n</ul>\n<p>See the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" target="_blank" rel="noopener nofollow">MDN docs</a> for full details on how to use the API.</p>\n<h2 id="properties-amp-methods">Properties &amp; Methods<a aria-labelledby="properties-amp-methods" class="anchor-link" href="#properties-amp-methods" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th>Method</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>constructor(locale: string, options: NumberFormatOptions): void</td>\n<td></td>\n</tr>\n<tr>\n<td>format(value: number): string</td>\n<td>Formats a number value as a string, according to the locale and options provided to the constructor.</td>\n</tr>\n<tr>\n<td>formatToParts(value: number): Intl.NumberFormatPart[]</td>\n<td>Formats a number range as a string.</td>\n</tr>\n<tr>\n<td>formatRange(start: number, end: number): string</td>\n<td>Formats a number range as a string.</td>\n</tr>\n<tr>\n<td>formatRangeToParts(start: number, end: number): NumberRangeFormatPart[]</td>\n<td>Formats a number range as an array of parts.</td>\n</tr>\n<tr>\n<td>resolvedOptions(): Intl.ResolvedNumberFormatOptions</td>\n<td>Returns the resolved formatting options based on the values passed to the constructor.</td>\n</tr>\n</tbody></table>\n<p>|</p>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[]},{text:"Properties &amp; Methods",level:2,hash:"properties-amp-methods",children:[]}],title:"NumberParser",headers:{title:"NumberParser",components:[],hooks:[]}},l={};l.scope={process:{},import:{}};var c={},d={"components/ComponentLinkHeader.tsx":s.Z},m=e(31549);function p(){return(0,m.jsx)(a.Z,(0,r.Z)({},o))}},87842:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/number/number-formatter",function(){return e(66217)}])}},function(t){t.O(0,[508,6371,7306,3936,4437,9774,2888,179],function(){return t(t.s=87842)}),_N_E=t.O()}]);