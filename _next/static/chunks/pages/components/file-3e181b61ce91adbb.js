(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4504],{93279:function(n,e,i){"use strict";i.d(e,{Z:function(){return c}});var t,l,o=i(15393),a=i(16371),s=i.n(a),r=i(31549);function c(){return(0,r.jsxs)(o.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,r.jsx)(s(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,r.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,r.jsx)(s(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:l||(l=(0,r.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},35237:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return w}});var t,l,o,a,s,r,c,d={};i.r(d),i.d(d,{demoComponents:function(){return x},demos:function(){return L},docs:function(){return v},srcComponents:function(){return u}});var C=i(26098),g=i(43866),f=i(15393),h=i(42096),p=i(31549),m=i(93279),v={en:{description:"The File component allows you to display state and preview of the file uploaded.",location:"/docs/data/components/file/file.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>File</h1><p class="description">\nThe File component allows you to display state and preview of the file uploaded.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>File<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h3 id="basic-states">Basic States<a aria-labelledby="basic-states" class="anchor-link" href="#basic-states" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"FileBasic.tsx"},'<h3 id="icon">Icon<a aria-labelledby="icon" class="anchor-link" href="#icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"FileIcon.tsx"},'<h3 id="errored">Errored<a aria-labelledby="errored" class="anchor-link" href="#errored" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"FileErrored.tsx"},'<h3 id="basic-preview">Basic Preview<a aria-labelledby="basic-preview" class="anchor-link" href="#basic-preview" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"FilePreview.tsx"},'<h3 id="custom-styling">Custom Styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"FileCustomStyling.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="file-state-props">File State Props:<a aria-labelledby="file-state-props" class="anchor-link" href="#file-state-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">fileName</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Filename of the state</td>\n</tr>\n<tr>\n<td align="left">imageIcon</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">-</td>\n<td align="left">Little icon display on left of the filename</td>\n</tr>\n<tr>\n<td align="left">onIconPress</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Fired when clicked on the icon</td>\n</tr>\n<tr>\n<td align="left">icon</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">-</td>\n<td align="left">Left icon of the state</td>\n</tr>\n<tr>\n<td align="left">isLoading</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">-</td>\n<td align="left">Loading state</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n<h3 id="file-preview-props">File Preview Props:<a aria-labelledby="file-preview-props" class="anchor-link" href="#file-preview-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">imageSrc</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Image source to display</td>\n</tr>\n<tr>\n<td align="left">childrend</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left">-</td>\n<td align="left">Display child, example: File.State</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Import",level:2,hash:"import",children:[{text:"Basic States",level:3,hash:"basic-states"},{text:"Icon",level:3,hash:"icon"},{text:"Errored",level:3,hash:"errored"},{text:"Basic Preview",level:3,hash:"basic-preview"},{text:"Custom Styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[{text:"File State Props:",level:3,hash:"file-state-props"},{text:"File Preview Props:",level:3,hash:"file-preview-props"}]}],title:"React File component",headers:{title:"React File component",components:["File"],hooks:[]}}},L={"FileBasic.tsx":{module:"./FileBasic.tsx",raw:"import {File} from '@comfortdelgro/react-compass'\n\nfunction FileBasic() {\n  return (\n    <div>\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M14.8437 12.3125L9.01106 2.5625C8.56452 1.8125 7.43764 1.8125 6.9881 2.5625L1.1582 12.3125C0.709472 13.0598 1.26837 14 2.16777 14H13.833C14.7288 14 15.2894 13.0625 14.8437 12.3125ZM7.34303 5.64286C7.34303 5.28795 7.63699 5 7.9993 5C8.36162 5 8.65558 5.28929 8.65558 5.64286V9.07143C8.65558 9.42634 8.36162 9.71429 8.02391 9.71429C7.68621 9.71429 7.34303 9.42768 7.34303 9.07143V5.64286ZM7.9993 12.2857C7.5246 12.2857 7.13959 11.9086 7.13959 11.4436C7.13959 10.9786 7.52433 10.6014 7.9993 10.6014C8.47428 10.6014 8.85902 10.9786 8.85902 11.4436C8.85793 11.908 8.4751 12.2857 7.9993 12.2857Z'\n              fill='#A4262C'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM11.1664 6.79141C11.4645 6.49336 11.4645 6.00664 11.1664 5.70859C10.8684 5.41055 10.3816 5.41055 10.0836 5.70859L7.125 8.66719L5.91641 7.45859C5.61836 7.16055 5.13164 7.16055 4.83359 7.45859C4.53555 7.75664 4.53555 8.24336 4.83359 8.54141L6.58359 10.2914C6.88164 10.5895 7.36836 10.5895 7.66641 10.2914L11.1664 6.79141Z'\n              fill='#107C10'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n        isLoading\n      />\n    </div>\n  )\n}\n\nexport default FileBasic\n",moduleTS:"./FileBasic.tsx",rawTS:"import {File} from '@comfortdelgro/react-compass'\n\nfunction FileBasic() {\n  return (\n    <div>\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M14.8437 12.3125L9.01106 2.5625C8.56452 1.8125 7.43764 1.8125 6.9881 2.5625L1.1582 12.3125C0.709472 13.0598 1.26837 14 2.16777 14H13.833C14.7288 14 15.2894 13.0625 14.8437 12.3125ZM7.34303 5.64286C7.34303 5.28795 7.63699 5 7.9993 5C8.36162 5 8.65558 5.28929 8.65558 5.64286V9.07143C8.65558 9.42634 8.36162 9.71429 8.02391 9.71429C7.68621 9.71429 7.34303 9.42768 7.34303 9.07143V5.64286ZM7.9993 12.2857C7.5246 12.2857 7.13959 11.9086 7.13959 11.4436C7.13959 10.9786 7.52433 10.6014 7.9993 10.6014C8.47428 10.6014 8.85902 10.9786 8.85902 11.4436C8.85793 11.908 8.4751 12.2857 7.9993 12.2857Z'\n              fill='#A4262C'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM11.1664 6.79141C11.4645 6.49336 11.4645 6.00664 11.1664 5.70859C10.8684 5.41055 10.3816 5.41055 10.0836 5.70859L7.125 8.66719L5.91641 7.45859C5.61836 7.16055 5.13164 7.16055 4.83359 7.45859C4.53555 7.75664 4.53555 8.24336 4.83359 8.54141L6.58359 10.2914C6.88164 10.5895 7.36836 10.5895 7.66641 10.2914L11.1664 6.79141Z'\n              fill='#107C10'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n      />\n      <br />\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n        isLoading\n      />\n    </div>\n  )\n}\n\nexport default FileBasic\n"},"FileIcon.tsx":{module:"./FileIcon.tsx",raw:"import {File} from '@comfortdelgro/react-compass'\n\nfunction FileIcon() {\n  return (\n    <File.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'>\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n        isLoading\n      />\n    </File.Preview>\n  )\n}\n\nexport default FileIcon\n",moduleTS:"./FileIcon.tsx",rawTS:"import {File} from '@comfortdelgro/react-compass'\n\nfunction FileIcon() {\n  return (\n    <File.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'>\n      <File.State\n        fileName='Filename.png'\n        icon={\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n              fill='#323130'\n            />\n          </svg>\n        }\n        isLoading\n      />\n    </File.Preview>\n  )\n}\n\nexport default FileIcon\n"},"FilePreview.tsx":{module:"./FilePreview.tsx",raw:"import {File} from '@comfortdelgro/react-compass'\n\nfunction FilePreview() {\n  return (\n    <File.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />\n  )\n}\n\nexport default FilePreview\n",moduleTS:"./FilePreview.tsx",rawTS:"import {File} from '@comfortdelgro/react-compass'\n\nfunction FilePreview() {\n  return (\n    <File.Preview imageSrc='https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg' />\n  )\n}\n\nexport default FilePreview\n"},"FileErrored.tsx":{module:"./FileErrored.tsx",raw:"import {File, Icon} from '@comfortdelgro/react-compass'\nimport {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'\n\nfunction FileErrored() {\n  return (\n    <File.State\n      fileName='Filename.png'\n      icon={\n        <div style={{height: '16px', gap: '8px', display: 'flex'}}>\n          <Icon icon={faExclamationTriangle} />\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n              fill='#323130'\n            />\n          </svg>\n        </div>\n      }\n      css={{\n        background: '#EFD9DB',\n      }}\n    />\n  )\n}\n\nexport default FileErrored\n",moduleTS:"./FileErrored.tsx",rawTS:"import {File, Icon} from '@comfortdelgro/react-compass'\nimport {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'\n\nfunction FileErrored() {\n  return (\n    <File.State\n      fileName='Filename.png'\n      icon={\n        <div style={{height: '16px', gap: '8px', display: 'flex'}}>\n          <Icon icon={faExclamationTriangle} />\n          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n            <path\n              d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n              fill='#323130'\n            />\n          </svg>\n        </div>\n      }\n      css={{\n        background: '#EFD9DB',\n      }}\n    />\n  )\n}\n\nexport default FileErrored\n"},"FileCustomStyling.tsx":{module:"./FileCustomStyling.tsx",raw:"import {File, Icon} from '@comfortdelgro/react-compass'\nimport {faVirus} from '@fortawesome/free-solid-svg-icons'\n\nfunction FileCustomStyling() {\n  return (\n    <File.State\n      fileName='Filename.png'\n      icon={\n        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n          <path\n            d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n            fill='#323130'\n          />\n        </svg>\n      }\n      imageIcon={<Icon icon={faVirus} />}\n      css={{\n        background: 'red',\n      }}\n    />\n  )\n}\n\nexport default FileCustomStyling\n",moduleTS:"./FileCustomStyling.tsx",rawTS:"import {File, Icon} from '@comfortdelgro/react-compass'\nimport {faVirus} from '@fortawesome/free-solid-svg-icons'\n\nfunction FileCustomStyling() {\n  return (\n    <File.State\n      fileName='Filename.png'\n      icon={\n        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>\n          <path\n            d='M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z'\n            fill='#323130'\n          />\n        </svg>\n      }\n      imageIcon={<Icon icon={faVirus} />}\n      css={{\n        background: 'red',\n      }}\n    />\n  )\n}\n\nexport default FileCustomStyling\n"}};L.scope={process:{},import:{"@comfortdelgro/react-compass":f,"@fortawesome/free-solid-svg-icons":h}};var x={"./FileBasic.tsx":function(){return t||(t=(0,p.jsxs)("div",{children:[(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})})}),(0,p.jsx)("br",{}),(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M14.8437 12.3125L9.01106 2.5625C8.56452 1.8125 7.43764 1.8125 6.9881 2.5625L1.1582 12.3125C0.709472 13.0598 1.26837 14 2.16777 14H13.833C14.7288 14 15.2894 13.0625 14.8437 12.3125ZM7.34303 5.64286C7.34303 5.28795 7.63699 5 7.9993 5C8.36162 5 8.65558 5.28929 8.65558 5.64286V9.07143C8.65558 9.42634 8.36162 9.71429 8.02391 9.71429C7.68621 9.71429 7.34303 9.42768 7.34303 9.07143V5.64286ZM7.9993 12.2857C7.5246 12.2857 7.13959 11.9086 7.13959 11.4436C7.13959 10.9786 7.52433 10.6014 7.9993 10.6014C8.47428 10.6014 8.85902 10.9786 8.85902 11.4436C8.85793 11.908 8.4751 12.2857 7.9993 12.2857Z",fill:"#A4262C"})})}),(0,p.jsx)("br",{}),(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM11.1664 6.79141C11.4645 6.49336 11.4645 6.00664 11.1664 5.70859C10.8684 5.41055 10.3816 5.41055 10.0836 5.70859L7.125 8.66719L5.91641 7.45859C5.61836 7.16055 5.13164 7.16055 4.83359 7.45859C4.53555 7.75664 4.53555 8.24336 4.83359 8.54141L6.58359 10.2914C6.88164 10.5895 7.36836 10.5895 7.66641 10.2914L11.1664 6.79141Z",fill:"#107C10"})})}),(0,p.jsx)("br",{}),(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z",fill:"#323130"})})}),(0,p.jsx)("br",{}),(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M14.125 10.625H10.4746L9.2373 11.8623C8.90781 12.1918 8.46758 12.375 8 12.375C7.53242 12.375 7.09328 12.193 6.7627 11.8623L5.52539 10.625H1.875C1.39184 10.625 1 11.0168 1 11.5V14.125C1 14.6082 1.39184 15 1.875 15H14.125C14.6082 15 15 14.6082 15 14.125V11.5C15 11.016 14.609 10.625 14.125 10.625ZM12.8125 13.4688C12.4516 13.4688 12.1562 13.1734 12.1562 12.8125C12.1562 12.4516 12.4516 12.1562 12.8125 12.1562C13.1734 12.1562 13.4688 12.4516 13.4688 12.8125C13.4688 13.1734 13.1734 13.4688 12.8125 13.4688ZM7.38203 11.243C7.55156 11.4152 7.77578 11.5 8 11.5C8.22422 11.5 8.44789 11.4146 8.61852 11.2437L12.1185 7.74365C12.46 7.40186 12.46 6.84814 12.1185 6.50635C11.7767 6.16455 11.2227 6.16455 10.8812 6.50635L8.875 8.51406V1.875C8.875 1.39184 8.48316 1 8 1C7.51602 1 7.125 1.39184 7.125 1.875V8.51406L5.11797 6.50703C4.77645 6.16523 4.22246 6.16523 3.88066 6.50703C3.53914 6.84883 3.53914 7.40254 3.88066 7.74434L7.38203 11.243Z",fill:"#323130"})}),isLoading:!0})]}))},"./FileIcon.tsx":function(){return l||(l=(0,p.jsx)(f.File.Preview,{imageSrc:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",children:(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})}),isLoading:!0})}))},"./FilePreview.tsx":function(){return o||(o=(0,p.jsx)(f.File.Preview,{imageSrc:"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"}))},"./FileErrored.tsx":function(){return(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:(0,p.jsxs)("div",{style:{height:"16px",gap:"8px",display:"flex"},children:[a||(a=(0,p.jsx)(f.Icon,{icon:h.faExclamationTriangle})),s||(s=(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})}))]}),css:{background:"#EFD9DB"}})},"./FileCustomStyling.tsx":function(){return(0,p.jsx)(f.File.State,{fileName:"Filename.png",icon:r||(r=(0,p.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,p.jsx)("path",{d:"M1 8C1 4.13359 4.13359 1 8 1C11.8664 1 15 4.13359 15 8C15 11.8664 11.8664 15 8 15C4.13359 15 1 11.8664 1 8ZM5.78516 6.69023L7.07305 7.97539L5.78516 9.28516C5.53086 9.54219 5.53086 9.95781 5.78516 10.1902C6.04219 10.4691 6.45781 10.4691 6.69023 10.1902L7.97539 8.92695L9.28516 10.1902C9.54219 10.4691 9.95781 10.4691 10.1902 10.1902C10.4691 9.95781 10.4691 9.54219 10.1902 9.28516L8.92695 7.97539L10.1902 6.69023C10.4691 6.45781 10.4691 6.04219 10.1902 5.78516C9.95781 5.53086 9.54219 5.53086 9.28516 5.78516L7.97539 7.07305L6.69023 5.78516C6.45781 5.53086 6.04219 5.53086 5.78516 5.78516C5.53086 6.04219 5.53086 6.45781 5.78516 6.69023Z",fill:"#323130"})})),imageIcon:c||(c=(0,p.jsx)(f.Icon,{icon:h.faVirus})),css:{background:"red"}})}},u={"components/common/ComponentLinkHeader.tsx":m.Z};function w(){return(0,p.jsx)(g.Z,(0,C.Z)({},d))}},77905:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/file",function(){return i(35237)}])}},function(n){n.O(0,[4308,9813,5675,3866,9774,2888,179],function(){return n(n.s=77905)}),_N_E=n.O()}]);