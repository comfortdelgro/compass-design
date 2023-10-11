(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2501],{74710:function(n,e,a){"use strict";a.d(e,{Z:function(){return i}});var o,t,r=a(38443),s=a(54284),c=a.n(s),l=a(97458);function i(){return(0,l.jsxs)(r.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(c(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,l.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(c(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,l.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},29587:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return D}});var o,t,r,s,c,l,i,d,g,u,m,f,x,p,b,h,B,v,y,C,k={};a.r(k),a.d(k,{demoComponents:function(){return L},demos:function(){return P},docs:function(){return V},srcComponents:function(){return H}});var w=a(80208),S=a(34706),j=a(38443),I=a(14043),T=a(64006),z=a(97458),F=a(74710),V={en:{description:"Badge can be used to highlight important bits of information such as labels, notifications, data trends & status.",location:"/docs/data/components/badges/badges.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Badge</h1><p class="description">Badge can be used to highlight important bits of information such as labels, notifications, data trends & status.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<h2 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>Badge<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> Badge <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/badge\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BadgeBasic.tsx"},'<h3 id="colors">Colors<a aria-labelledby="colors" class="anchor-link" href="#colors" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BadgeColors.tsx"},'<h3 id="variants">Variants<a aria-labelledby="variants" class="anchor-link" href="#variants" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BadgeVariants.tsx"},'<h3 id="default-icon">Default icon<a aria-labelledby="default-icon" class="anchor-link" href="#default-icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BadgeIcon.tsx"},'<h3 id="custom-icon">Custom icon<a aria-labelledby="custom-icon" class="anchor-link" href="#custom-icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BadgeCustomIcon.tsx"},'<h3 id="status">Status<a aria-labelledby="status" class="anchor-link" href="#status" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"BadgeStatus.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>You can style React Compass&#39;s components with the css prop.<br>\nWith css prop, you can basically do anything that css can do.</p>\n',{demo:"BadgeCustom.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">color</td>\n<td align="left"><code>info</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>\n<td align="left">info</td>\n<td align="left">These colors will determine the color of background of the badges.</td>\n</tr>\n<tr>\n<td align="left">label</td>\n<td align="left"><code>String </code></td>\n<td align="left">—</td>\n<td align="left">Lable of the badges.</td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>primary</code> | <code>secondary</code> | <code>outline</code>| <code>rounded</code></td>\n<td align="left">primary</td>\n<td align="left">Variants will determine the color of the badges&#39; label, border and the darkness of its background .</td>\n</tr>\n<tr>\n<td align="left">icon</td>\n<td align="left"><code>ReactNode</code>|<code>false</code>| <code>true</code></td>\n<td align="left">false</td>\n<td align="left">When false, no icon is shown in the badge. When true, the default icons are shown. And you can pass in custom icons to this prop.</td>\n</tr>\n<tr>\n<td align="left">status</td>\n<td align="left"><code>online</code> | <code>offline</code> | <code>away</code>| <code>busy</code></td>\n<td align="left">—</td>\n<td align="left">The color set for <code>status</code> variant.</td>\n</tr>\n<tr>\n<td align="left">statusSize</td>\n<td align="left"><code>8</code> | <code>12</code> | <code>16</code>| <code>20</code> | <code>24</code> | <code>28</code></td>\n<td align="left">—</td>\n<td align="left">The size of status badges, from <code>8px</code> to <code>28px</code>.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Import",level:2,hash:"import",children:[]},{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Colors",level:3,hash:"colors"},{text:"Variants",level:3,hash:"variants"},{text:"Default icon",level:3,hash:"default-icon"},{text:"Custom icon",level:3,hash:"custom-icon"},{text:"Status",level:3,hash:"status"},{text:"Custom styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Badges component",headers:{title:"React Badges component",components:["Badges"],hooks:[]}}},P={"BadgeBasic.tsx":{module:"./BadgeBasic.tsx",raw:"import {Badge} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return <Badge label='Default' />\n}\n\nexport default BasicExample\n",jsxPreview:"<Badge label='Default' />",moduleTS:"./BadgeBasic.tsx",rawTS:"import {Badge} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return <Badge label='Default' />\n}\n\nexport default BasicExample\n"},"BadgeColors.tsx":{module:"./BadgeColors.tsx",raw:"import {Badge, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nfunction BadgeIcon() {\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Badge label='Info' color='info' />\r\n      <Badge label='Success' color='success' />\r\n      <Badge label='Danger' color='danger' />\r\n      <Badge label='Warning' color='warning' />\r\n    </Flexbox>\r\n  )\r\n}\r\n\r\nexport default BadgeIcon\r\n",jsxPreview:"<Badge label='Info' color='info' />\r\n\r\n<Badge label='Success' color='success' />\r\n\r\n<Badge label='Danger' color='danger' />\r\n\r\n<Badge label='Warning' color='warning' />",moduleTS:"./BadgeColors.tsx",rawTS:"import {Badge, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nfunction BadgeIcon() {\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Badge label='Info' color='info' />\r\n      <Badge label='Success' color='success' />\r\n      <Badge label='Danger' color='danger' />\r\n      <Badge label='Warning' color='warning' />\r\n    </Flexbox>\r\n  )\r\n}\r\n\r\nexport default BadgeIcon\r\n"},"BadgeVariants.tsx":{module:"./BadgeVariants.tsx",raw:"import {Badge, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nfunction BadgeVariants() {\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Badge label='Primary' color='danger' variant='primary' />\r\n      <Badge label='Secondary' color='danger' variant='secondary' />\r\n      <Badge label='Outline' color='danger' variant='outline' />\r\n    </Flexbox>\r\n  )\r\n}\r\n\r\nexport default BadgeVariants\r\n",jsxPreview:"<Badge label='Primary' color='danger' variant='primary' />\r\n<Badge label='Secondary' color='danger' variant='secondary' />\r\n<Badge label='Outline' color='danger' variant='outline' />",moduleTS:"./BadgeVariants.tsx",rawTS:"import {Badge, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nfunction BadgeVariants() {\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Badge label='Primary' color='danger' variant='primary' />\r\n      <Badge label='Secondary' color='danger' variant='secondary' />\r\n      <Badge label='Outline' color='danger' variant='outline' />\r\n    </Flexbox>\r\n  )\r\n}\r\n\r\nexport default BadgeVariants\r\n"},"BadgeIcon.tsx":{module:"./BadgeIcon.tsx",raw:"import {Badge, Flexbox} from '@comfortdelgro/react-compass'\n\nfunction BadgeIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Badge label='Primary' color='info' variant='primary' icon />\n      <Badge label='Success' color='success' variant='primary' icon />\n      <Badge label='Secondary' color='danger' variant='secondary' icon />\n      <Badge label='Outline' color='warning' variant='outline' icon />\n    </Flexbox>\n  )\n}\n\nexport default BadgeIcon\n",jsxPreview:"<Badge label='Primary' color='info' variant='primary' icon />\n<Badge label='Success' color='success' variant='primary' icon />\n<Badge label='Secondary' color='danger' variant='secondary' icon />\n<Badge label='Outline' color='warning' variant='outline' icon />",moduleTS:"./BadgeIcon.tsx",rawTS:"import {Badge, Flexbox} from '@comfortdelgro/react-compass'\n\nfunction BadgeIcon() {\n  return (\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n      <Badge label='Primary' color='info' variant='primary' icon />\n      <Badge label='Success' color='success' variant='primary' icon />\n      <Badge label='Secondary' color='danger' variant='secondary' icon />\n      <Badge label='Outline' color='warning' variant='outline' icon />\n    </Flexbox>\n  )\n}\n\nexport default BadgeIcon\n"},"BadgeCustomIcon.tsx":{module:"./BadgeCustomIcon.tsx",raw:"import BugIcon from '@comfortdelgro/compass-icons/react/bug'\r\nimport {Badge, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nfunction BadgeIcon() {\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Badge\r\n        label='LGTM'\r\n        color='success'\r\n        variant='secondary'\r\n        icon={<BugIcon />}\r\n      />\r\n      <Badge\r\n        label='Practice Social Distancing'\r\n        color='danger'\r\n        variant='outline'\r\n        icon={<BugIcon />}\r\n      />\r\n    </Flexbox>\r\n  )\r\n}\r\n\r\nexport default BadgeIcon\r\n",jsxPreview:"<Badge\r\n    label='LGTM'\r\n    color='success'\r\n    variant='secondary'\r\n    icon={<BugIcon />}\r\n/>\r\n<Badge\r\n    label='Practice Social Distancing'\r\n    color='danger'\r\n    variant='outline'\r\n    icon={<BugIcon />}\r\n/>",moduleTS:"./BadgeCustomIcon.tsx",rawTS:"import BugIcon from '@comfortdelgro/compass-icons/react/bug'\r\nimport {Badge, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nfunction BadgeIcon() {\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Badge\r\n        label='LGTM'\r\n        color='success'\r\n        variant='secondary'\r\n        icon={<BugIcon />}\r\n      />\r\n      <Badge\r\n        label='Practice Social Distancing'\r\n        color='danger'\r\n        variant='outline'\r\n        icon={<BugIcon />}\r\n      />\r\n    </Flexbox>\r\n  )\r\n}\r\n\r\nexport default BadgeIcon\r\n"},"BadgeStatus.tsx":{module:"./BadgeStatus.tsx",raw:"import Tick from '@comfortdelgro/compass-icons/react/tick'\nimport {Badge, Flexbox} from '@comfortdelgro/react-compass'\nfunction BadgeIcon() {\n  return (\n    <>\n      <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n        <Badge status='online' variant='rounded' statusSize='8' />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='12'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='16'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='20'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='24'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='28'\n          icon={<Tick />}\n        />\n      </Flexbox>\n    </>\n  )\n}\n\nexport default BadgeIcon\n",jsxPreview:"<Badge status='online' variant='rounded' statusSize='8' />\r\n<Badge\r\n  status='online'\r\n  variant='rounded'\r\n  statusSize='12'\r\n  icon={<Tick />}\r\n/>\r\n<Badge\r\n  status='online'\r\n  variant='rounded'\r\n  statusSize='16'\r\n  icon={<Tick />}\r\n/>\r\n<Badge\r\n  status='online'\r\n  variant='rounded'\r\n  statusSize='20'\r\n  icon={<Tick />}\r\n/>\r\n<Badge\r\n  status='online'\r\n  variant='rounded'\r\n  statusSize='24'\r\n  icon={<Tick />}\r\n/>\r\n<Badge\r\n  status='online'\r\n  variant='rounded'\r\n  statusSize='28'\r\n  icon={<Tick />}\r\n/>",moduleTS:"./BadgeStatus.tsx",rawTS:"import Tick from '@comfortdelgro/compass-icons/react/tick'\nimport {Badge, Flexbox} from '@comfortdelgro/react-compass'\nfunction BadgeIcon() {\n  return (\n    <>\n      <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\n        <Badge status='online' variant='rounded' statusSize='8' />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='12'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='16'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='20'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='24'\n          icon={<Tick />}\n        />\n        <Badge\n          status='online'\n          variant='rounded'\n          statusSize='28'\n          icon={<Tick />}\n        />\n      </Flexbox>\n    </>\n  )\n}\n\nexport default BadgeIcon\n"},"BadgeCustom.tsx":{module:"./BadgeCustom.tsx",raw:"import {Badge} from '@comfortdelgro/react-compass'\n\nfunction Customized() {\n  return (\n    <Badge\n      label='Outline'\n      color='warning'\n      variant='outline'\n      css={{color: 'purple', '&:hover': {backgroundColor: 'grey'}}}\n    />\n  )\n}\n\nexport default Customized\n",jsxPreview:"<Badge\n  label='Outline'\n  color='warning'\n  variant='outline'\n  css={{color: 'purple', '&:hover': {backgroundColor: 'grey'}}}\n/>",moduleTS:"./BadgeCustom.tsx",rawTS:"import {Badge} from '@comfortdelgro/react-compass'\n\nfunction Customized() {\n  return (\n    <Badge\n      label='Outline'\n      color='warning'\n      variant='outline'\n      css={{color: 'purple', '&:hover': {backgroundColor: 'grey'}}}\n    />\n  )\n}\n\nexport default Customized\n"}};P.scope={process:{},import:{"@comfortdelgro/react-compass":j,"@comfortdelgro/compass-icons/react/bug":I,"@comfortdelgro/compass-icons/react/tick":T}};var L={"./BadgeBasic.tsx":function(){return o||(o=(0,z.jsx)(j.Badge,{label:"Default"}))},"./BadgeColors.tsx":function(){return(0,z.jsxs)(j.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[t||(t=(0,z.jsx)(j.Badge,{label:"Info",color:"info"})),r||(r=(0,z.jsx)(j.Badge,{label:"Success",color:"success"})),s||(s=(0,z.jsx)(j.Badge,{label:"Danger",color:"danger"})),c||(c=(0,z.jsx)(j.Badge,{label:"Warning",color:"warning"}))]})},"./BadgeVariants.tsx":function(){return(0,z.jsxs)(j.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[l||(l=(0,z.jsx)(j.Badge,{label:"Primary",color:"danger",variant:"primary"})),i||(i=(0,z.jsx)(j.Badge,{label:"Secondary",color:"danger",variant:"secondary"})),d||(d=(0,z.jsx)(j.Badge,{label:"Outline",color:"danger",variant:"outline"}))]})},"./BadgeIcon.tsx":function(){return(0,z.jsxs)(j.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[g||(g=(0,z.jsx)(j.Badge,{label:"Primary",color:"info",variant:"primary",icon:!0})),u||(u=(0,z.jsx)(j.Badge,{label:"Success",color:"success",variant:"primary",icon:!0})),m||(m=(0,z.jsx)(j.Badge,{label:"Secondary",color:"danger",variant:"secondary",icon:!0})),f||(f=(0,z.jsx)(j.Badge,{label:"Outline",color:"warning",variant:"outline",icon:!0}))]})},"./BadgeCustomIcon.tsx":function(){return(0,z.jsxs)(j.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[x||(x=(0,z.jsx)(j.Badge,{label:"LGTM",color:"success",variant:"secondary",icon:(0,z.jsx)(I.default,{})})),p||(p=(0,z.jsx)(j.Badge,{label:"Practice Social Distancing",color:"danger",variant:"outline",icon:(0,z.jsx)(I.default,{})}))]})},"./BadgeStatus.tsx":function(){return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)(j.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:[b||(b=(0,z.jsx)(j.Badge,{status:"online",variant:"rounded",statusSize:"8"})),h||(h=(0,z.jsx)(j.Badge,{status:"online",variant:"rounded",statusSize:"12",icon:(0,z.jsx)(T.default,{})})),B||(B=(0,z.jsx)(j.Badge,{status:"online",variant:"rounded",statusSize:"16",icon:(0,z.jsx)(T.default,{})})),v||(v=(0,z.jsx)(j.Badge,{status:"online",variant:"rounded",statusSize:"20",icon:(0,z.jsx)(T.default,{})})),y||(y=(0,z.jsx)(j.Badge,{status:"online",variant:"rounded",statusSize:"24",icon:(0,z.jsx)(T.default,{})})),C||(C=(0,z.jsx)(j.Badge,{status:"online",variant:"rounded",statusSize:"28",icon:(0,z.jsx)(T.default,{})}))]})})},"./BadgeCustom.tsx":function(){return(0,z.jsx)(j.Badge,{label:"Outline",color:"warning",variant:"outline",css:{color:"purple","&:hover":{backgroundColor:"grey"}}})}},H={"components/common/ComponentLinkHeader.tsx":F.Z};function D(){return(0,z.jsx)(S.Z,(0,w.Z)({},k))}},93052:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/badges",function(){return a(29587)}])},14043:function(n,e,a){"use strict";a.r(e);var o=a(52983);let t=(0,o.forwardRef)((n,e)=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:e,...n},o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M11.6084 13.7248C11.6375 13.7498 11.6625 13.779 11.6875 13.8081C12.2834 13.5039 12.9542 13.3331 13.6292 13.3331H18.3334C19.0459 13.3331 19.7167 13.5039 20.3125 13.8081C20.3375 13.779 20.3625 13.7498 20.3917 13.7248L23.0584 11.0579C23.5792 10.5362 24.4209 10.5362 24.9417 11.0579C25.4625 11.5788 25.4625 12.4205 24.9417 12.9414L22.275 15.6083C22.2125 15.6375 22.2209 15.6625 22.1917 15.6875C22.4459 16.1875 22.6084 16.7459 22.6542 17.3334H25.3334C26.0709 17.3334 26.6667 17.9293 26.6667 18.6669C26.6667 19.4044 26.0709 20.0003 25.3334 20.0003H22.6667C22.6667 21.0254 22.4375 21.9922 22.025 22.8589C22.1125 22.9131 22.2 22.9797 22.275 23.0589L24.9417 25.7258C25.4625 26.2467 25.4625 27.0884 24.9417 27.6093C24.4209 28.1302 23.5792 28.1302 23.0584 27.6093L20.4292 24.9841C19.4084 25.8925 18.1042 26.4925 16.6667 26.6342V16.6667C16.6667 16.3 16.3667 16 15.9625 16C15.6334 16 15.2959 16.3 15.2959 16.6667V26.6342C13.8959 26.4925 12.5917 25.8925 11.5709 24.9841L8.94296 27.6093C8.42212 28.1302 7.57796 28.1302 7.05712 27.6093C6.53671 27.0884 6.53671 26.2467 7.05712 25.7258L9.72504 23.0589C9.80004 22.9797 9.88754 22.9131 9.97504 22.8589C9.56254 21.9922 9.33337 21.0254 9.33337 20.0003H6.66671C5.93046 20.0003 5.33337 19.4044 5.33337 18.6669C5.33337 17.9293 5.93046 17.3334 6.66671 17.3334H9.34587C9.39087 16.7459 9.55421 16.1875 9.80837 15.6875C9.77921 15.6625 9.75004 15.6375 9.72504 15.6083L7.05712 12.9414C6.53671 12.4205 6.53671 11.5788 7.05712 11.0579C7.57796 10.5362 8.42212 10.5362 8.94296 11.0579L11.6084 13.7248Z"}),o.createElement("path",{opacity:.4,d:"M20 9.60004V9.75826C20 10.4578 19.4708 11.0223 18.8167 11.0223H13.1833C12.5292 11.0223 12 10.4578 12 9.75826V9.60004C12 7.2436 13.7542 5.33337 16 5.33337C18.2083 5.33337 20 7.2436 20 9.60004ZM15.3333 26.6312V16C15.3333 15.6089 15.6333 15.2889 16 15.2889C16.3667 15.2889 16.6667 15.6089 16.6667 16V26.6312C16.4458 26.6534 16.225 26.6667 16 26.6667C15.775 26.6667 15.5542 26.6534 15.3333 26.6312Z"}))));e.default=t},64006:function(n,e,a){"use strict";a.r(e);var o=a(52983);let t=(0,o.forwardRef)((n,e)=>o.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",ref:e,...n},o.createElement("g",{fill:"currentColor"},o.createElement("path",{d:"M30.0527 5.95944C30.8712 6.79287 30.8712 8.13968 30.0527 8.97311L13.2899 26.0416C12.4714 26.8751 11.1487 26.8751 10.3302 26.0416L1.94693 17.5074C1.12869 16.6739 1.12869 15.3271 1.94693 14.4937C2.7653 13.6603 4.09192 13.6603 4.91042 14.4937L11.7511 21.5145L27.093 5.95944C27.9115 5.12468 29.2342 5.12468 30.0527 5.95944Z"}))));e.default=t}},function(n){n.O(0,[4308,7633,6471,9102,4706,9774,2888,179],function(){return n(n.s=93052)}),_N_E=n.O()}]);