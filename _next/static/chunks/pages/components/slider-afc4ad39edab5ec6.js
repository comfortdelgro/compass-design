(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5850],{74710:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var l,i,s=t(38443),d=t(54284),o=t.n(d),a=t(97458);function r(){return(0,a.jsxs)(s.Flexbox,{css:{marginBottom:"$4"},children:[(0,a.jsx)(o(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:l||(l=(0,a.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,a.jsx)(o(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,a.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},66407:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var l,i,s,d={};t.r(d),t.d(d,{demoComponents:function(){return m},demos:function(){return h},docs:function(){return g},srcComponents:function(){return f}});var o=t(80208),a=t(34706),r=t(38443),c=t(97458),p=t(74710),g={en:{description:"Provides the behavior and accessibility implementation for a slider component representing one or more values.",location:"/docs/data/components/slider/slider.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Slider</h1><p class="description">Provides the behavior and accessibility implementation for a slider component representing one or more values.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Slider<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Slider <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/slider\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic-usage">Basic Usage<a aria-labelledby="basic-usage" class="anchor-link" href="#basic-usage" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SliderBasic.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the Slider are disabled. Shows that a selection exists, but is not available in that circumstance.</td>\n</tr>\n<tr>\n<td align="left">tooltip</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">Whether the tooltip of slider are hidden.</td>\n</tr>\n<tr>\n<td align="left">onChangeEnd</td>\n<td align="left"><code>(value: number) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Fired when the slider stops moving, due to being let go.</td>\n</tr>\n<tr>\n<td align="left">onChange</td>\n<td align="left"><code>(value: number) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Handler that is called when the value changes.</td>\n</tr>\n<tr>\n<td align="left">minValue</td>\n<td align="left"><code>number</code></td>\n<td align="left">0</td>\n<td align="left">The slider&#39;s minimum value.</td>\n</tr>\n<tr>\n<td align="left">maxValue</td>\n<td align="left"><code>number</code></td>\n<td align="left">100</td>\n<td align="left">The slider&#39;s maximum value.</td>\n</tr>\n<tr>\n<td align="left">step</td>\n<td align="left"><code>number</code></td>\n<td align="left">1</td>\n<td align="left">The slider&#39;s step value.</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>number</code></td>\n<td align="left">0</td>\n<td align="left">The current value (controlled).</td>\n</tr>\n<tr>\n<td align="left">defaultValue</td>\n<td align="left"><code>number</code></td>\n<td align="left">0</td>\n<td align="left">The currently selected key in the collection (uncontrolled).</td>\n</tr>\n<tr>\n<td align="left">className</td>\n<td align="left"><code>String</code></td>\n<td align="left">—</td>\n<td align="left">Extra class name for slider.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic Usage",level:3,hash:"basic-usage"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Slider component",headers:{title:"React Slider component",components:["Slider"],hooks:[]}}},h={"SliderBasic.tsx":{module:"./SliderBasic.tsx",raw:"import {Slider} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>\n      <div style={{width: '100%'}}>\n        <Slider />\n      </div>\n      <div style={{width: '100%'}}>\n        <Slider value={20} onChangeEnd={(val) => console.log(val)} />\n      </div>\n      <div style={{width: '100%'}}>\n        <Slider isDisabled />\n      </div>\n      <div style={{width: '100%'}}>\n        <Slider tooltip={false} />\n      </div>\n    </div>\n  )\n}\n\nexport default BasicExample\n",jsxPreview:"<Slider />\r\n<Slider value={20} onChangeEnd={(val) => console.log(val)} />\r\n<Slider isDisabled />\r\n<Slider tooltip={false} />",moduleTS:"./SliderBasic.tsx",rawTS:"import {Slider} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>\n      <div style={{width: '100%'}}>\n        <Slider />\n      </div>\n      <div style={{width: '100%'}}>\n        <Slider value={20} onChangeEnd={(val) => console.log(val)} />\n      </div>\n      <div style={{width: '100%'}}>\n        <Slider isDisabled />\n      </div>\n      <div style={{width: '100%'}}>\n        <Slider tooltip={false} />\n      </div>\n    </div>\n  )\n}\n\nexport default BasicExample\n"}};h.scope={process:{},import:{"@comfortdelgro/react-compass":r}};var m={"./SliderBasic.tsx":function(){return(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[(0,c.jsx)("div",{style:{width:"100%"},children:l||(l=(0,c.jsx)(r.Slider,{}))}),(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(r.Slider,{value:20,onChangeEnd:function(e){return console.log(e)}})}),(0,c.jsx)("div",{style:{width:"100%"},children:i||(i=(0,c.jsx)(r.Slider,{isDisabled:!0}))}),(0,c.jsx)("div",{style:{width:"100%"},children:s||(s=(0,c.jsx)(r.Slider,{tooltip:!1}))})]})}},f={"components/common/ComponentLinkHeader.tsx":p.Z};function u(){return(0,c.jsx)(a.Z,(0,o.Z)({},d))}},68277:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slider",function(){return t(66407)}])}},function(e){e.O(0,[4308,7633,6471,9102,4706,9774,2888,179],function(){return e(e.s=68277)}),_N_E=e.O()}]);