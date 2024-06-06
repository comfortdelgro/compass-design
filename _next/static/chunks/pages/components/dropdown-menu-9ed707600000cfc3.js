(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5317],{99223:function(n,e,o){"use strict";o.d(e,{Z:function(){return a}});var t,d,r=o(15393),u=o(92274),l=o.n(u),p=o(97458);function a(){return(0,p.jsxs)(r.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,p.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,p.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,p.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:d||(d=(0,p.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},90735:function(n,e,o){"use strict";o.r(e),o.d(e,{default:function(){return M}});var t,d,r={};o.r(r),o.d(r,{demoComponents:function(){return c},demos:function(){return m},docs:function(){return i},srcComponents:function(){return w}});var u=o(26098),l=o(916),p=o(15393),a=o(97458),s=o(99223),i={en:{description:"A drop-down menu is toggle contextual overlays for displaying lists of links and more.",location:"/docs/data/components/dropdown-menu/dropdown-menu.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Dropdown Menu</h1><p class="description">A drop-down menu is toggle contextual overlays for displaying lists of links and more.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>DropdownMenu<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DropdownMenuBasic.tsx"},'<h3 id="dropdownmenu-with-submenu">DropdownMenu with Submenu<a aria-labelledby="dropdownmenu-with-submenu" class="anchor-link" href="#dropdownmenu-with-submenu" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DropdownMenuSub.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="dropdownmenu-gt"><code>&lt;DropdownMenu/&gt;</code><a aria-labelledby="dropdownmenu-gt" class="anchor-link" href="#dropdownmenu-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">isOpen</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Whether the overlay is open by default</td>\n</tr>\n<tr>\n<td align="left">onOpenChange</td>\n<td align="left"><code>(isOpen: boolean) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Callback when popover change its opening state</td>\n</tr>\n<tr>\n<td align="left">onClose</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Callback fired when the modal needs to be closed.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n<h3 id="dropdownmenu-item-gt"><code>&lt;DropdownMenu.Item/&gt;</code><a aria-labelledby="dropdownmenu-item-gt" class="anchor-link" href="#dropdownmenu-item-gt" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">The content of the dropdown Item</td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the item is disabled.</td>\n</tr>\n<tr>\n<td align="left">isActived</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Whether the item is actived.</td>\n</tr>\n<tr>\n<td align="left">eventKey</td>\n<td align="left"><code>string</code></td>\n<td align="left">null</td>\n<td align="left">Value passed to the onSelect handler, useful for identifying the selected menu item.</td>\n</tr>\n<tr>\n<td align="left">onSelect</td>\n<td align="left"><code>Function</code></td>\n<td align="left">—</td>\n<td align="left">A callback fired when a menu item is selected((event: React.MouseEvent, eventKey: any) =&gt; void)</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"DropdownMenu with Submenu",level:3,hash:"dropdownmenu-with-submenu"}]},{text:"Props",level:2,hash:"props",children:[{text:"<code>&lt;DropdownMenu/&gt;</code>",level:3,hash:"dropdownmenu-gt"},{text:"<code>&lt;DropdownMenu.Item/&gt;</code>",level:3,hash:"dropdownmenu-item-gt"}]}],title:"React Dropdown Menu component",headers:{title:"React Dropdown Menu component",components:["DropdownMenu"],hooks:[]}}},m={"DropdownMenuBasic.tsx":{module:"./DropdownMenuBasic.tsx",raw:"import {Button, DropdownMenu} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <DropdownMenu>\n      <DropdownMenu.Toggle>\n        <Button variant='secondary'>Default</Button>\n      </DropdownMenu.Toggle>\n      <DropdownMenu.Menu>\n        <DropdownMenu.Item>Item 1</DropdownMenu.Item>\n        <DropdownMenu.Item>Item 2</DropdownMenu.Item>\n        <DropdownMenu.Item isActived>Item 3</DropdownMenu.Item>\n        <DropdownMenu.Item>Item 4</DropdownMenu.Item>\n      </DropdownMenu.Menu>\n    </DropdownMenu>\n  )\n}\n\nexport default BasicExample\n",jsxPreview:"<DropdownMenu>\r\n  <DropdownMenu.Toggle>\r\n    <Button variant='secondary'>Default</Button>\r\n  </DropdownMenu.Toggle>\r\n  <DropdownMenu.Menu>\r\n    <DropdownMenu.Item>Item 1</DropdownMenu.Item>\r\n    <DropdownMenu.Item>Item 2</DropdownMenu.Item>\r\n    <DropdownMenu.Item isActived>Item 3</DropdownMenu.Item>\r\n    <DropdownMenu.Item>Item 4</DropdownMenu.Item>\r\n  </DropdownMenu.Menu>\r\n</DropdownMenu>",moduleTS:"./DropdownMenuBasic.tsx",rawTS:"import {Button, DropdownMenu} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <DropdownMenu>\n      <DropdownMenu.Toggle>\n        <Button variant='secondary'>Default</Button>\n      </DropdownMenu.Toggle>\n      <DropdownMenu.Menu>\n        <DropdownMenu.Item>Item 1</DropdownMenu.Item>\n        <DropdownMenu.Item>Item 2</DropdownMenu.Item>\n        <DropdownMenu.Item isActived>Item 3</DropdownMenu.Item>\n        <DropdownMenu.Item>Item 4</DropdownMenu.Item>\n      </DropdownMenu.Menu>\n    </DropdownMenu>\n  )\n}\n\nexport default BasicExample\n"},"DropdownMenuSub.tsx":{module:"./DropdownMenuSub.tsx",raw:"import {Button, DropdownMenu} from '@comfortdelgro/react-compass'\n\nfunction SubExample() {\n  return (\n    <DropdownMenu>\n      <DropdownMenu.Toggle>\n        <Button variant='secondary'>DropdownMenu with Submenu</Button>\n      </DropdownMenu.Toggle>\n      <DropdownMenu.Menu>\n        <DropdownMenu.Item isActived>Item 1</DropdownMenu.Item>\n        <DropdownMenu.Item>\n          Item 2\n          <DropdownMenu.Submenu>\n            <DropdownMenu.Item>\n              Item 2 - 1\n              <DropdownMenu.Submenu>\n                <DropdownMenu.Item>Item 2 - 1 - 1</DropdownMenu.Item>\n                <DropdownMenu.Item>Item 2 - 1 - 2</DropdownMenu.Item>\n              </DropdownMenu.Submenu>\n            </DropdownMenu.Item>\n            <DropdownMenu.Item>Item 2 - 2</DropdownMenu.Item>\n          </DropdownMenu.Submenu>\n        </DropdownMenu.Item>\n        <DropdownMenu.Item isDisabled>Item 3</DropdownMenu.Item>\n        <DropdownMenu.Item>\n          Item 4\n          <DropdownMenu.Submenu>\n            <DropdownMenu.Item>Item 4 - 1</DropdownMenu.Item>\n            <DropdownMenu.Item>Item 4 - 2</DropdownMenu.Item>\n          </DropdownMenu.Submenu>\n        </DropdownMenu.Item>\n      </DropdownMenu.Menu>\n    </DropdownMenu>\n  )\n}\n\nexport default SubExample\n",jsxPreview:"<DropdownMenu>\r\n  <DropdownMenu.Toggle>\r\n    <Button variant='secondary'>DropdownMenu with Submenu</Button>\r\n  </DropdownMenu.Toggle>\r\n  <DropdownMenu.Menu>\r\n    <DropdownMenu.Item isActived>Item 1</DropdownMenu.Item>\r\n    <DropdownMenu.Item>\r\n      Item 2\r\n      <DropdownMenu.Submenu>\r\n        <DropdownMenu.Item>\r\n          Item 2 - 1\r\n          <DropdownMenu.Submenu>\r\n            <DropdownMenu.Item>Item 2 - 1 - 1</DropdownMenu.Item>\r\n            <DropdownMenu.Item>Item 2 - 1 - 2</DropdownMenu.Item>\r\n          </DropdownMenu.Submenu>\r\n        </DropdownMenu.Item>\r\n        <DropdownMenu.Item>Item 2 - 2</DropdownMenu.Item>\r\n      </DropdownMenu.Submenu>\r\n    </DropdownMenu.Item>\r\n    <DropdownMenu.Item isDisabled>Item 3</DropdownMenu.Item>\r\n    <DropdownMenu.Item>\r\n      Item 4\r\n      <DropdownMenu.Submenu>\r\n        <DropdownMenu.Item>Item 4 - 1</DropdownMenu.Item>\r\n        <DropdownMenu.Item>Item 4 - 2</DropdownMenu.Item>\r\n      </DropdownMenu.Submenu>\r\n    </DropdownMenu.Item>\r\n  </DropdownMenu.Menu>\r\n</DropdownMenu>",moduleTS:"./DropdownMenuSub.tsx",rawTS:"import {Button, DropdownMenu} from '@comfortdelgro/react-compass'\n\nfunction SubExample() {\n  return (\n    <DropdownMenu>\n      <DropdownMenu.Toggle>\n        <Button variant='secondary'>DropdownMenu with Submenu</Button>\n      </DropdownMenu.Toggle>\n      <DropdownMenu.Menu>\n        <DropdownMenu.Item isActived>Item 1</DropdownMenu.Item>\n        <DropdownMenu.Item>\n          Item 2\n          <DropdownMenu.Submenu>\n            <DropdownMenu.Item>\n              Item 2 - 1\n              <DropdownMenu.Submenu>\n                <DropdownMenu.Item>Item 2 - 1 - 1</DropdownMenu.Item>\n                <DropdownMenu.Item>Item 2 - 1 - 2</DropdownMenu.Item>\n              </DropdownMenu.Submenu>\n            </DropdownMenu.Item>\n            <DropdownMenu.Item>Item 2 - 2</DropdownMenu.Item>\n          </DropdownMenu.Submenu>\n        </DropdownMenu.Item>\n        <DropdownMenu.Item isDisabled>Item 3</DropdownMenu.Item>\n        <DropdownMenu.Item>\n          Item 4\n          <DropdownMenu.Submenu>\n            <DropdownMenu.Item>Item 4 - 1</DropdownMenu.Item>\n            <DropdownMenu.Item>Item 4 - 2</DropdownMenu.Item>\n          </DropdownMenu.Submenu>\n        </DropdownMenu.Item>\n      </DropdownMenu.Menu>\n    </DropdownMenu>\n  )\n}\n\nexport default SubExample\n"}};m.scope={process:{},import:{"@comfortdelgro/react-compass":p}};var c={"./DropdownMenuBasic.tsx":function(){return t||(t=(0,a.jsxs)(p.DropdownMenu,{children:[(0,a.jsx)(p.DropdownMenu.Toggle,{children:(0,a.jsx)(p.Button,{variant:"secondary",children:"Default"})}),(0,a.jsxs)(p.DropdownMenu.Menu,{children:[(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 1"}),(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 2"}),(0,a.jsx)(p.DropdownMenu.Item,{isActived:!0,children:"Item 3"}),(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 4"})]})]}))},"./DropdownMenuSub.tsx":function(){return d||(d=(0,a.jsxs)(p.DropdownMenu,{children:[(0,a.jsx)(p.DropdownMenu.Toggle,{children:(0,a.jsx)(p.Button,{variant:"secondary",children:"DropdownMenu with Submenu"})}),(0,a.jsxs)(p.DropdownMenu.Menu,{children:[(0,a.jsx)(p.DropdownMenu.Item,{isActived:!0,children:"Item 1"}),(0,a.jsxs)(p.DropdownMenu.Item,{children:["Item 2",(0,a.jsxs)(p.DropdownMenu.Submenu,{children:[(0,a.jsxs)(p.DropdownMenu.Item,{children:["Item 2 - 1",(0,a.jsxs)(p.DropdownMenu.Submenu,{children:[(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 2 - 1 - 1"}),(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 2 - 1 - 2"})]})]}),(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 2 - 2"})]})]}),(0,a.jsx)(p.DropdownMenu.Item,{isDisabled:!0,children:"Item 3"}),(0,a.jsxs)(p.DropdownMenu.Item,{children:["Item 4",(0,a.jsxs)(p.DropdownMenu.Submenu,{children:[(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 4 - 1"}),(0,a.jsx)(p.DropdownMenu.Item,{children:"Item 4 - 2"})]})]})]})]}))}},w={"components/common/ComponentLinkHeader.tsx":s.Z};function M(){return(0,a.jsx)(l.Z,(0,u.Z)({},r))}},99768:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dropdown-menu",function(){return o(90735)}])}},function(n){n.O(0,[4308,6555,47,916,9774,2888,179],function(){return n(n.s=99768)}),_N_E=n.O()}]);