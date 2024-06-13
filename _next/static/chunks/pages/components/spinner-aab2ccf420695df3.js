(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9729],{93279:function(n,e,i){"use strict";i.d(e,{Z:function(){return c}});var t,s,l=i(15393),r=i(16371),o=i.n(r),a=i(31549);function c(){return(0,a.jsxs)(l.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,a.jsx)(o(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,a.jsx)(l.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,a.jsx)(o(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:s||(s=(0,a.jsx)(l.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},76199:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return C}});var t,s,l,r,o,a,c,p,d,u,m,h={};i.r(h),i.d(h,{demoComponents:function(){return w},demos:function(){return v},docs:function(){return y},srcComponents:function(){return z}});var f=i(26098),g=i(43866),x=i(15393),S=i(31549),b=i(93279),y={en:{description:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.",location:"/docs/data/components/spinner/spinner.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Spinner</h1><p class="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Spinner<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"SpinnerBasic.tsx"},'<h2 id="circular-without-label">Circular without label<a aria-labelledby="circular-without-label" class="anchor-link" href="#circular-without-label" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"SpinnerWithoutLabel.tsx"},'<h2 id="circular-with-custom-label">Circular with custom label<a aria-labelledby="circular-with-custom-label" class="anchor-link" href="#circular-with-custom-label" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"SpinnerCustomLabel.tsx"},'<h2 id="circular-with-custom-styling">Circular with custom styling<a aria-labelledby="circular-with-custom-styling" class="anchor-link" href="#circular-with-custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"SpinnerCustomStyling.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">size</td>\n<td align="left"><code>sm</code>| <code>md</code> | <code>lg</code> | <code>xl</code> | <code>2xl</code></td>\n<td align="left"></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">label</td>\n<td align="left"><code>false</code>| <code>true</code> | <code>String</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Basic",level:2,hash:"basic",children:[]},{text:"Circular without label",level:2,hash:"circular-without-label",children:[]},{text:"Circular with custom label",level:2,hash:"circular-with-custom-label",children:[]},{text:"Circular with custom styling",level:2,hash:"circular-with-custom-styling",children:[]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Spinner component",headers:{title:"React Spinner component",components:["Spinner"],hooks:[]}}},v={"SpinnerBasic.tsx":{module:"./SpinnerBasic.tsx",raw:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerBasic() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'flex-start',\n        gap: 32,\n      }}\n    >\n      <Spinner size='2xl' />\n      <Spinner size='xl' />\n      <Spinner size='lg' />\n      <Spinner size='md' />\n      <Spinner size='sm' />\n    </div>\n  )\n}\n\nexport default SpinnerBasic\n",jsxPreview:"<Spinner size='2xl' />\n<Spinner size='xl' />\n<Spinner size='lg' />\n<Spinner size='md' />\n<Spinner size='sm' />",moduleTS:"./SpinnerBasic.tsx",rawTS:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerBasic() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'flex-start',\n        gap: 32,\n      }}\n    >\n      <Spinner size='2xl' />\n      <Spinner size='xl' />\n      <Spinner size='lg' />\n      <Spinner size='md' />\n      <Spinner size='sm' />\n    </div>\n  )\n}\n\nexport default SpinnerBasic\n"},"SpinnerWithoutLabel.tsx":{module:"./SpinnerWithoutLabel.tsx",raw:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerWithoutLabel() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'flex-start',\n        gap: 32,\n      }}\n    >\n      <Spinner size='2xl' label={false} />\n      <Spinner size='xl' label={false} />\n      <Spinner size='lg' label={false} />\n      <Spinner size='md' label={false} />\n      <Spinner size='sm' label={false} />\n    </div>\n  )\n}\n\nexport default SpinnerWithoutLabel\n",jsxPreview:"<Spinner size='2xl' label={false} />\n<Spinner size='xl' label={false} />\n<Spinner size='lg' label={false} />\n<Spinner size='md' label={false} />\n<Spinner size='sm' label={false} />",moduleTS:"./SpinnerWithoutLabel.tsx",rawTS:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerWithoutLabel() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'flex-start',\n        gap: 32,\n      }}\n    >\n      <Spinner size='2xl' label={false} />\n      <Spinner size='xl' label={false} />\n      <Spinner size='lg' label={false} />\n      <Spinner size='md' label={false} />\n      <Spinner size='sm' label={false} />\n    </div>\n  )\n}\n\nexport default SpinnerWithoutLabel\n"},"SpinnerCustomLabel.tsx":{module:"./SpinnerCustomLabel.tsx",raw:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerCustomLabel() {\n  return <Spinner size='2xl' label={'Running...'} />\n}\n\nexport default SpinnerCustomLabel\n",jsxPreview:"<Spinner size='2xl' label={'Running...'} />",moduleTS:"./SpinnerCustomLabel.tsx",rawTS:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerCustomLabel() {\n  return <Spinner size='2xl' label={'Running...'} />\n}\n\nexport default SpinnerCustomLabel\n"},"SpinnerCustomStyling.tsx":{module:"./SpinnerCustomStyling.tsx",raw:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerCustomStyling() {\n  return <Spinner size='2xl' css={{height: '15em'}} />\n}\n\nexport default SpinnerCustomStyling\n",jsxPreview:"<Spinner size='2xl' css={{height: '15em'}} />",moduleTS:"./SpinnerCustomStyling.tsx",rawTS:"import {Spinner} from '@comfortdelgro/react-compass'\n\nfunction SpinnerCustomStyling() {\n  return <Spinner size='2xl' css={{height: '15em'}} />\n}\n\nexport default SpinnerCustomStyling\n"}};v.scope={process:{},import:{"@comfortdelgro/react-compass":x}};var w={"./SpinnerBasic.tsx":function(){return(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:32},children:[t||(t=(0,S.jsx)(x.Spinner,{size:"2xl"})),s||(s=(0,S.jsx)(x.Spinner,{size:"xl"})),l||(l=(0,S.jsx)(x.Spinner,{size:"lg"})),r||(r=(0,S.jsx)(x.Spinner,{size:"md"})),o||(o=(0,S.jsx)(x.Spinner,{size:"sm"}))]})},"./SpinnerWithoutLabel.tsx":function(){return(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"flex-start",gap:32},children:[a||(a=(0,S.jsx)(x.Spinner,{size:"2xl",label:!1})),c||(c=(0,S.jsx)(x.Spinner,{size:"xl",label:!1})),p||(p=(0,S.jsx)(x.Spinner,{size:"lg",label:!1})),d||(d=(0,S.jsx)(x.Spinner,{size:"md",label:!1})),u||(u=(0,S.jsx)(x.Spinner,{size:"sm",label:!1}))]})},"./SpinnerCustomLabel.tsx":function(){return m||(m=(0,S.jsx)(x.Spinner,{size:"2xl",label:"Running..."}))},"./SpinnerCustomStyling.tsx":function(){return(0,S.jsx)(x.Spinner,{size:"2xl",css:{height:"15em"}})}},z={"components/common/ComponentLinkHeader.tsx":b.Z};function C(){return(0,S.jsx)(g.Z,(0,f.Z)({},h))}},40912:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/spinner",function(){return i(76199)}])}},function(n){n.O(0,[4308,9813,5675,3866,9774,2888,179],function(){return n(n.s=40912)}),_N_E=n.O()}]);