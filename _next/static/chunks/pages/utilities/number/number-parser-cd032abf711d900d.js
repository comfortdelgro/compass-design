(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5776],{93279:function(n,s,a){"use strict";a.d(s,{Z:function(){return r}});var e,t,o=a(15393),p=a(16371),c=a.n(p),i=a(31549);function r(){return(0,i.jsxs)(o.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,i.jsx)(c(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:e||(e=(0,i.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,i.jsx)(c(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,i.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},31210:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var e={};a.r(e),a.d(e,{demoComponents:function(){return r},demos:function(){return i},docs:function(){return c},srcComponents:function(){return l}});var t=a(26098),o=a(43866),p=a(93279),c={en:{description:"A NumberParser can be used to perform locale-aware parsing of numbers from Unicode strings, as well as validation of partial user input.",location:"/docs/data/utilities/number/number-parser.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>CalendarDateTime</h1><p class="description">A NumberParser can be used to perform locale-aware parsing of numbers from Unicode strings, as well as validation of partial user input.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>Numbers can be formatted in many different ways, including percentages, units, decimals, currencies, and more. In addition, number formatting varies around the world. For example, currency symbols, units, decimal separators, and even digits themselves may be different across languages and regions. While Latin numerals are the most commonly used, many other numbering systems are also used around the world. For example, in the Latin numbering system, the number twelve is represented as “12”, and in the Arabic decimal system, it is “١٢”.</p>\n<p><code>NumberParser</code> is designed to validate and parse numbers from user input according to a specific locale and format. It supports several different numbering systems including the Latin, Arabic, and Han positional numbering systems, as well as parsing decimals, percentages, currencies, and unit values. The numbering system is automatically detected from the input string. This means that users may input numbers in a different numbering system than the default for their locale, e.g. a Latin number in an Arabic locale.</p>\n<p>Parsing numbers while taking into account all locale-specific detail is quite complex and error-prone. <code>NumberParser</code> uses information about the locale and expected format for a number in order to parse it correctly. This means it is somewhat strict about the accepted formats. It is not designed to handle use cases where the user can enter numbers in an unknown format (e.g. either a unit value <em>or</em> a percentage), this must be known up front or selected via an external UI control.</p>\n<h3 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>To create a <code>NumberParser</code>, call the constructor with a locale string and optional format options. The same options as supported by the <code>Intl.NumberFormat</code> object are supported. See the docs on MDN linked above for full details.</p>\n<p>This example creates a parser than accepts values in inches in the <code>en-US</code> locale.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>NumberParser<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n\n<span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>style<span class="token operator">:</span> <span class="token string">\'unit\'</span><span class="token punctuation">,</span> unit<span class="token operator">:</span> <span class="token string">\'inch\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'10 in\'</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="properties-amp-methods">Properties &amp; Methods<a aria-labelledby="properties-amp-methods" class="anchor-link" href="#properties-amp-methods" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th>Method</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>constructor(locale: string, options: Intl.NumberFormatOptions): void</td>\n<td></td>\n</tr>\n<tr>\n<td>parse(value: string): number</td>\n<td>Parses the given string to a number. Returns NaN if a valid number could not be parsed.</td>\n</tr>\n</tbody></table>\n<p>| isValidPartialNumber(\nvalue: string,\nminValue?: number,\nmaxValue?: number\n): boolean | Returns whether the given string could potentially be a valid number. This should be used to validate user input as the user types. If a minValue or maxValue is provided, the validity of the minus/plus sign characters can be checked. |\n| getNumberingSystem(value: string): string | Returns a numbering system for which the given string is valid in the current locale. If no numbering system could be detected, the default numbering system for the current locale is returned. |</p>\n<h2 id="parsing">Parsing<a aria-labelledby="parsing" class="anchor-link" href="#parsing" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>Numbers can be parsed using the <code>parse</code> method. If the input is not a valid number according to the locale and format options, <code>NaN</code> is returned instead.</p>\n<h3 id="decimals">Decimals<a aria-labelledby="decimals" class="anchor-link" href="#decimals" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>By default, or with the <code>style: &#39;decimal&#39;</code> option, <code>NumberParser</code> supports parsing decimal values.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">)</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'10.5\'</span><span class="token punctuation">)</span> <span class="token comment">// 10.5</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'-25.6\'</span><span class="token punctuation">)</span> <span class="token comment">// -25.6</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'1,000,000\'</span><span class="token punctuation">)</span> <span class="token comment">// 1000000</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'١٢\'</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'X\'</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="percentages">Percentages<a aria-labelledby="percentages" class="anchor-link" href="#percentages" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>The <code>style: &#39;percent&#39;</code> option can be provided to the constructor to parse percentage values. In this mode, parsed values are divided by 100, for example the string <code>&quot;45%&quot;</code> is parsed as <code>0.45</code>. The <code>maximumFractionDigits</code> option is also taken into account during parsing, and the resulting value is rounded accordingly.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  style<span class="token operator">:</span> <span class="token string">\'percent\'</span><span class="token punctuation">,</span>\n  maximumFractionDigits<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'45%\'</span><span class="token punctuation">)</span> <span class="token comment">// 0.45</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'62.3333%\'</span><span class="token punctuation">)</span> <span class="token comment">// 0.6233</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="currency-values">Currency values<a aria-labelledby="currency-values" class="anchor-link" href="#currency-values" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>The <code>style: &#39;currency&#39;</code> option can be provided to the constructor to parse currency values. The <code>currency</code> option must also be passed to set the currency code (e.g. <code>USD</code>) to use. In addition, the <code>currencyDisplay</code> option can be used to choose whether to display the currency symbol, currency code, or currency name. Finally, the <code>currencySign</code> option can be set to <code>accounting</code> to use accounting notation for negative numbers, which uses parentheses rather than a minus sign in some locales.</p>\n<p>Note that partial input is not accepted by this method. For example, if a partial currency symbol is included in the string, <code>NaN</code> will be returned. The <code>isValidPartialNumber</code> method, described below, can be used in scenarios where you have partial user input.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  style<span class="token operator">:</span> <span class="token string">\'currency\'</span><span class="token punctuation">,</span>\n  currency<span class="token operator">:</span> <span class="token string">\'EUR\'</span><span class="token punctuation">,</span>\n  currencyDisplay<span class="token operator">:</span> <span class="token string">\'code\'</span><span class="token punctuation">,</span>\n  currencySign<span class="token operator">:</span> <span class="token string">\'accounting\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'45\'</span><span class="token punctuation">)</span> <span class="token comment">// 45</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'EUR 45\'</span><span class="token punctuation">)</span> <span class="token comment">// 45</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'EUR 26.45\'</span><span class="token punctuation">)</span> <span class="token comment">// 26.45</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'EUR -25\'</span><span class="token punctuation">)</span> <span class="token comment">// -25</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'(EUR 25)\'</span><span class="token punctuation">)</span> <span class="token comment">// -25</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'EU 45\'</span><span class="token punctuation">)</span> <span class="token comment">// NaN (partial currency symbol)</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'$45\'</span><span class="token punctuation">)</span> <span class="token comment">// NaN (different currency symbol)</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="unit-values">Unit values<a aria-labelledby="unit-values" class="anchor-link" href="#unit-values" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>The <code>style: &#39;unit&#39;</code> option can be passed to the constructor to parse values with a unit of measurement. The <code>unit</code> option must also be passed to set which unit to use (e.g. <code>inch</code>). In addition, the <code>unitDisplay</code> option can be used to choose whether the unit is accepted in long, short, or narrow format.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  style<span class="token operator">:</span> <span class="token string">\'unit\'</span><span class="token punctuation">,</span>\n  unit<span class="token operator">:</span> <span class="token string">\'inch\'</span><span class="token punctuation">,</span>\n  unitDisplay<span class="token operator">:</span> <span class="token string">\'long\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'12\'</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'12 inches\'</span><span class="token punctuation">)</span> <span class="token comment">// 12</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'1 inch\'</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'12 in\'</span><span class="token punctuation">)</span> <span class="token comment">// NaN (partial unit)</span>\nparser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">\'23 ft\'</span><span class="token punctuation">)</span> <span class="token comment">// NaN (different unit)</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="validation">Validation<a aria-labelledby="validation" class="anchor-link" href="#validation" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p><code>NumberParser</code> can also be used to validate partial user input using the <code>isValidPartialNumber</code> method, for example, as the user types into an input field. The <code>parse</code> method only accepts complete input, whereas <code>isValidPartialNumber</code> determines if the given input <em>might</em> be valid but incomplete. For example, only entering a decimal point is invalid when passed to <code>parse</code>, but accepted by <code>isValidPartialNumber</code>.</p>\n<p>Note that partial units and currency symbols are <em>not</em> accepted. Since the unit itself must be known upfront and passed to the constructor, it is better to only allow entering a number rather and autocompleting the unit rather than typing it in one letter at a time.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>style<span class="token operator">:</span> <span class="token string">\'unit\'</span><span class="token punctuation">,</span> unit<span class="token operator">:</span> <span class="token string">\'inch\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\nparser<span class="token punctuation">.</span><span class="token function">isValidPartialNumber</span><span class="token punctuation">(</span><span class="token string">\'.\'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\nparser<span class="token punctuation">.</span><span class="token function">isValidPartialNumber</span><span class="token punctuation">(</span><span class="token string">\'.2\'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\nparser<span class="token punctuation">.</span><span class="token function">isValidPartialNumber</span><span class="token punctuation">(</span><span class="token string">\'10 in\'</span><span class="token punctuation">)</span> <span class="token comment">// true</span>\nparser<span class="token punctuation">.</span><span class="token function">isValidPartialNumber</span><span class="token punctuation">(</span><span class="token string">\'10 i\'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\nparser<span class="token punctuation">.</span><span class="token function">isValidPartialNumber</span><span class="token punctuation">(</span><span class="token string">\'10 x\'</span><span class="token punctuation">)</span> <span class="token comment">// false</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="detecting-the-numbering-system">Detecting the numbering system<a aria-labelledby="detecting-the-numbering-system" class="anchor-link" href="#detecting-the-numbering-system" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>Under the hood, <code>NumberParser</code> automatically detects the numbering system used in the input. This is also exposed by the <code>getNumberingSystem</code> method, which returns a Unicode script identifier. For example, this can be used to create a number formatter based on the numbering system used in the input.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>NumberFormatter<span class="token punctuation">,</span> NumberParser<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@internationalized/number\'</span>\n\n<span class="token keyword">let</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberParser</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>style<span class="token operator">:</span> <span class="token string">\'decimal\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> numberingSystem <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">getNumberingSystem</span><span class="token punctuation">(</span><span class="token string">\'١٢\'</span><span class="token punctuation">)</span> <span class="token comment">// -> \'arab\'</span>\n\n<span class="token keyword">let</span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NumberFormatter</span><span class="token punctuation">(</span><span class="token string">\'en-US\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  style<span class="token operator">:</span> <span class="token string">\'decimal\'</span><span class="token punctuation">,</span>\n  numberingSystem<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nformatter<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[{text:"Example",level:3,hash:"example"}]},{text:"Properties &amp; Methods",level:2,hash:"properties-amp-methods",children:[]},{text:"Parsing",level:2,hash:"parsing",children:[{text:"Decimals",level:3,hash:"decimals"},{text:"Percentages",level:3,hash:"percentages"},{text:"Currency values",level:3,hash:"currency-values"},{text:"Unit values",level:3,hash:"unit-values"}]},{text:"Validation",level:2,hash:"validation",children:[]},{text:"Detecting the numbering system",level:2,hash:"detecting-the-numbering-system",children:[]}],title:"NumberParser",headers:{title:"NumberParser",components:[],hooks:[]}}},i={};i.scope={process:{},import:{}};var r={},l={"components/common/ComponentLinkHeader.tsx":p.Z},u=a(31549);function d(){return(0,u.jsx)(o.Z,(0,t.Z)({},e))}},93649:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/number/number-parser",function(){return a(31210)}])}},function(n){n.O(0,[4308,9813,5675,3866,9774,2888,179],function(){return n(n.s=93649)}),_N_E=n.O()}]);