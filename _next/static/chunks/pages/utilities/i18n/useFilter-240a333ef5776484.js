(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7505],{93279:function(n,s,a){"use strict";a.d(s,{Z:function(){return l}});var t,o,p=a(15393),e=a(16371),c=a.n(e),i=a(31549);function l(){return(0,i.jsxs)(p.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,i.jsx)(c(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,i.jsx)(p.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,i.jsx)(c(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,i.jsx)(p.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},76844:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return k}});var t={};a.r(t),a.d(t,{demoComponents:function(){return l},demos:function(){return i},docs:function(){return c},srcComponents:function(){return u}});var o=a(26098),p=a(43866),e=a(93279),c={en:{description:"Provides localized string search functionality that is useful for filtering or matching items in a list.",location:"/docs/data/utilities/i18n/useFilter.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>useFilter</h1><p class="description">Provides localized string search functionality that is useful for filtering or matching items in a list.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="introduction">Introduction<a aria-labelledby="introduction" class="anchor-link" href="#introduction" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p><code>useFilter</code> provides functions for filtering or searching based on substring matches. The builtin JavaScript\nstring methods <code>startsWith</code>, <code>endsWith</code>, and <code>includes</code> could be used for this, but do not implement locale\nsensitive matching. <code>useFilter</code> provides options to allow ignoring case, diacritics, and Unicode normalization forms,\nwhich are implemented according to locale-specific rules. It automatically uses the current locale set by the application,\neither via the default browser language or via the <a href="I18nProvider.html" >I18nProvider</a>.</p>\n<h2 id="api">API<a aria-labelledby="api" class="anchor-link" href="#api" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>useFilter(options?: Intl.CollatorOptions): Filter</p>\n<h2 id="interface">Interface<a aria-labelledby="interface" class="anchor-link" href="#interface" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th>Method</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>startsWith(string: string, substring: string): boolean</td>\n<td>Contents that should have the locale applied.</td>\n</tr>\n<tr>\n<td>startsWith(string: string, substring: string): boolean</td>\n<td>The locale to apply to the children.</td>\n</tr>\n<tr>\n<td>startsWith(string: string, substring: string): boolean</td>\n<td>startsWith(string: string, substring: string): boolean</td>\n</tr>\n</tbody></table>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>The following example implements a filterable list using a <code>contains</code> matching strategy that ignores both case\nand diacritics.</p>\n<div class="cdg-root"><pre><code class="language-tsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>useFilter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n\n<span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> composers <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token string">\'Wolfgang Amadeus Mozart\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Johann Sebastian Bach\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Ludwig van Beethoven\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Claude Debussy\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'George Frideric Handel\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Fr\xe9d\xe9ric Chopin\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Johannes Brahms\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Pyotr Ilyich Tchaikovsky\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Anton\xedn Dvoř\xe1k\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Felix Mendelssohn\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'B\xe9la Bart\xf3k\'</span><span class="token punctuation">,</span>\n    <span class="token string">\'Niccol\xf2 Paganini\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n\n  <span class="token keyword">let</span> <span class="token punctuation">{</span>contains<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFilter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    sensitivity<span class="token operator">:</span> <span class="token string">\'base\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">let</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n  <span class="token keyword">let</span> matchedComposers <span class="token operator">=</span> composers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span> <span class="token operator">=></span>\n    <span class="token function">contains</span><span class="token punctuation">(</span>composer<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>search-input<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>Filter<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>\n        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>search<span class="token punctuation">\'</span></span>\n        <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>search-input<span class="token punctuation">\'</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>height<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>matchedComposers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>composer<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>composer<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n'],toc:[{text:"Introduction",level:2,hash:"introduction",children:[]},{text:"API",level:2,hash:"api",children:[]},{text:"Interface",level:2,hash:"interface",children:[]},{text:"Example",level:2,hash:"example",children:[]}],title:"useFilter",headers:{title:"useFilter",components:[],hooks:[]}}},i={};i.scope={process:{},import:{}};var l={},u={"components/common/ComponentLinkHeader.tsx":e.Z},r=a(31549);function k(){return(0,r.jsx)(p.Z,(0,o.Z)({},t))}},7038:function(n,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/utilities/i18n/useFilter",function(){return a(76844)}])}},function(n){n.O(0,[4308,9813,5675,3866,9774,2888,179],function(){return n(n.s=7038)}),_N_E=n.O()}]);