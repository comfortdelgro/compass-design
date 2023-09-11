(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6259],{37166:function(a,e,t){"use strict";t.d(e,{Z:function(){return c}});var n,r,s=t(38443),i=t(48329),l=t.n(i),o=t(97458);function c(){return(0,o.jsxs)(s.Flexbox,{css:{marginBottom:"$4"},children:[(0,o.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:n||(n=(0,o.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,o.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,o.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},63349:function(a,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var n,r,s,i={};t.r(i),t.d(i,{demoComponents:function(){return v},demos:function(){return m},docs:function(){return p},srcComponents:function(){return h}});var l=t(2815),o=t(30031),c=t(38443),d=t(97458),g=t(37166),p={en:{description:"Avatars can be used in everything including a person's profile picture, dialog menu, ext.",location:"/docs/data/components/avatars/avatars.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Avatar</h1><p class="description">Avatars can be used in everything including a person\'s profile picture, dialog menu, ext.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Avatar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Avatar <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/avatar\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="examples">Examples<a aria-labelledby="examples" class="anchor-link" href="#examples" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="image-avatars">Image avatars<a aria-labelledby="image-avatars" class="anchor-link" href="#image-avatars" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>Image avatars can be created by passing standard <code>image</code> props to the component.</p>\n',{demo:"ImageAvatars.tsx"},'<h3 id="group-avatars">Group avatars<a aria-labelledby="group-avatars" class="anchor-link" href="#group-avatars" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"GroupAvatars.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="avatar-gt"><code>&lt;Avatar/&gt;</code><a aria-labelledby="avatar-gt" class="anchor-link" href="#avatar-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">label</td>\n<td align="left"><code>String</code></td>\n<td align="left">—</td>\n<td align="left">The label, used as fallback for image. The avatars would show the initials of the labels.</td>\n</tr>\n<tr>\n<td align="left">image</td>\n<td align="left"><code>String </code></td>\n<td align="left">—</td>\n<td align="left">Image of the avatars takes the highest priority. We pass the image&#39;s address as string to this prop.</td>\n</tr>\n<tr>\n<td align="left">size</td>\n<td align="left"><code>xs</code>|<code>sm</code>|<code>md</code>|<code>lg</code></td>\n<td align="left">—</td>\n<td align="left">Sizes of the avatars.</td>\n</tr>\n<tr>\n<td align="left">icon</td>\n<td align="left"><code>ReactNode</code>|<code>false</code>| <code>true</code></td>\n<td align="left">false</td>\n<td align="left">The icon of the alerts. It&#39;d disappear if the value is false.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n<h3 id="avatar-group-gt"><code>&lt;Avatar.Group/&gt;</code><a aria-labelledby="avatar-group-gt" class="anchor-link" href="#avatar-group-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>ReactNode</code> | <code>String</code></td>\n<td align="left">—</td>\n<td align="left">We pass our avatars as children props to Avatar.Group.</td>\n</tr>\n<tr>\n<td align="left">display</td>\n<td align="left"><code>Number</code></td>\n<td align="left">—</td>\n<td align="left">Display prop determines the number of avatar displayed.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Examples",level:2,hash:"examples",children:[{text:"Image avatars",level:3,hash:"image-avatars"},{text:"Group avatars",level:3,hash:"group-avatars"}]},{text:"Props",level:2,hash:"props",children:[{text:"<code>&lt;Avatar/&gt;</code>",level:3,hash:"avatar-gt"},{text:"<code>&lt;Avatar.Group/&gt;</code>",level:3,hash:"avatar-group-gt"}]}],title:"React Avatar component",headers:{title:"React Avatar component",components:["Avatar","AvatarGroup","Badge"],hooks:[]}}},m={"ImageAvatars.tsx":{module:"./ImageAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ImageAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=32'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=31'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=60'\n        size='lg'\n      />\n    </Flexbox>\n  )\n}\n",jsxPreview:"<Avatar\n  label='Albert Einstein'\n  image='https://i.pravatar.cc/150?img=32'\n  size='lg'\n/>\n<Avatar\n  label='Albert Einstein'\n  image='https://i.pravatar.cc/150?img=31'\n  size='lg'\n/>\n<Avatar\n  label='Albert Einstein'\n  image='https://i.pravatar.cc/150?img=60'\n  size='lg'\n/>",moduleTS:"./ImageAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\n\nexport default function ImageAvatars() {\n  return (\n    <Flexbox css={{justifyContent: 'center'}}>\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=32'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=31'\n        size='lg'\n      />\n      <Avatar\n        label='Albert Einstein'\n        image='https://i.pravatar.cc/150?img=60'\n        size='lg'\n      />\n    </Flexbox>\n  )\n}\n"},"GroupAvatars.tsx":{module:"./GroupAvatars.tsx",raw:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nexport default function GroupAvatars() {\r\n  const images = [\r\n    'https://i.pravatar.cc/150?img=32',\r\n    'https://i.pravatar.cc/150?img=31',\r\n    'https://i.pravatar.cc/150?u=a048581f4e29026701d',\r\n    'https://i.pravatar.cc/150?img=60',\r\n    'https://i.pravatar.cc/150?u=a042581f4e29026704d',\r\n  ] as const\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Avatar.Group display={5} size='md' disabledAnimation>\r\n        <Avatar label='Leonhard Euler' image={images[0]} size='md' />\r\n        <Avatar label='Isaac Newton' image={images[1]} size='md' />\r\n        <Avatar label='Alan Turing' image={images[2]} size='md' />\r\n        <Avatar label='David Hilbert' image={images[3]} size='md' />\r\n        <Avatar label='Edwin Hubble' image={images[4]} size='md' />\r\n        <Avatar label='Ada Lovelace' image={images[0]} size='md' />\r\n        <Avatar label='Max Planck' image={images[1]} size='md' />\r\n      </Avatar.Group>\r\n    </Flexbox>\r\n  )\r\n}\r\n",jsxPreview:"<Avatar.Group display={5} size='md' disabledAnimation>\r\n    <Avatar label='Leonhard Euler' image={images[0]} size='md' />\r\n    <Avatar label='Isaac Newton' image={images[1]} size='md' />\r\n    <Avatar label='Alan Turing' image={images[2]} size='md' />\r\n    <Avatar label='David Hilbert' image={images[3]} size='md' />\r\n    <Avatar label='Edwin Hubble' image={images[4]} size='md' />\r\n    <Avatar label='Ada Lovelace' image={images[0]} size='md' />\r\n    <Avatar label='Max Planck' image={images[1]} size='md' />\r\n</Avatar.Group>\r\n",moduleTS:"./GroupAvatars.tsx",rawTS:"import {Avatar, Flexbox} from '@comfortdelgro/react-compass'\r\n\r\nexport default function GroupAvatars() {\r\n  const images = [\r\n    'https://i.pravatar.cc/150?img=32',\r\n    'https://i.pravatar.cc/150?img=31',\r\n    'https://i.pravatar.cc/150?u=a048581f4e29026701d',\r\n    'https://i.pravatar.cc/150?img=60',\r\n    'https://i.pravatar.cc/150?u=a042581f4e29026704d',\r\n  ] as const\r\n  return (\r\n    <Flexbox css={{justifyContent: 'center', alignItems: 'center'}}>\r\n      <Avatar.Group display={5} size='md' disabledAnimation>\r\n        <Avatar label='Leonhard Euler' image={images[0]} size='md' />\r\n        <Avatar label='Isaac Newton' image={images[1]} size='md' />\r\n        <Avatar label='Alan Turing' image={images[2]} size='md' />\r\n        <Avatar label='David Hilbert' image={images[3]} size='md' />\r\n        <Avatar label='Edwin Hubble' image={images[4]} size='md' />\r\n        <Avatar label='Ada Lovelace' image={images[0]} size='md' />\r\n        <Avatar label='Max Planck' image={images[1]} size='md' />\r\n      </Avatar.Group>\r\n    </Flexbox>\r\n  )\r\n}\r\n"}};m.scope={process:{},import:{"@comfortdelgro/react-compass":c}};var v={"./ImageAvatars.tsx":function(){return(0,d.jsxs)(c.Flexbox,{css:{justifyContent:"center"},children:[n||(n=(0,d.jsx)(c.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=32",size:"lg"})),r||(r=(0,d.jsx)(c.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=31",size:"lg"})),s||(s=(0,d.jsx)(c.Avatar,{label:"Albert Einstein",image:"https://i.pravatar.cc/150?img=60",size:"lg"}))]})},"./GroupAvatars.tsx":function(){return(0,d.jsx)(c.Flexbox,{css:{justifyContent:"center",alignItems:"center"},children:(0,d.jsxs)(c.Avatar.Group,{display:5,size:"md",disabledAnimation:!0,children:[(0,d.jsx)(c.Avatar,{label:"Leonhard Euler",image:"https://i.pravatar.cc/150?img=32",size:"md"}),(0,d.jsx)(c.Avatar,{label:"Isaac Newton",image:"https://i.pravatar.cc/150?img=31",size:"md"}),(0,d.jsx)(c.Avatar,{label:"Alan Turing",image:"https://i.pravatar.cc/150?u=a048581f4e29026701d",size:"md"}),(0,d.jsx)(c.Avatar,{label:"David Hilbert",image:"https://i.pravatar.cc/150?img=60",size:"md"}),(0,d.jsx)(c.Avatar,{label:"Edwin Hubble",image:"https://i.pravatar.cc/150?u=a042581f4e29026704d",size:"md"}),(0,d.jsx)(c.Avatar,{label:"Ada Lovelace",image:"https://i.pravatar.cc/150?img=32",size:"md"}),(0,d.jsx)(c.Avatar,{label:"Max Planck",image:"https://i.pravatar.cc/150?img=31",size:"md"})]})})}},h={"components/common/ComponentLinkHeader.tsx":g.Z};function u(){return(0,d.jsx)(o.Z,(0,l.Z)({},i))}},85308:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/avatar",function(){return t(63349)}])}},function(a){a.O(0,[4308,8553,964,9958,31,9774,2888,179],function(){return a(a.s=85308)}),_N_E=a.O()}]);