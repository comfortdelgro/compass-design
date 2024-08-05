(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3392],{2687:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var o,a,i,r,s,l,c,d,g,u={};t.r(u),t.d(u,{demoComponents:function(){return T},demos:function(){return C},docs:function(){return B},srcComponents:function(){return w}});var p=t(26098),D=t(3072),m=t(15393),f=t(44194),h=t.t(f,2),O=t(42096),y=t(73804),v=t(31549),x=function(){var n=f.useState(!1),e=(0,y.Z)(n,2),t=e[0],o=e[1];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Button,{variant:"secondary",css:{width:"7.8rem"},onPress:function(){return o(!0)},children:"Open Child"}),(0,v.jsx)(m.Dialog.Trigger,{isOpen:t,handleClose:function(){return o(!1)},children:(0,v.jsxs)(m.Dialog,{css:{width:"20rem"},children:[c||(c=(0,v.jsx)(m.Dialog.Title,{children:"My Child dialog"})),(0,v.jsx)(m.Dialog.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur."}),(0,v.jsx)(m.Dialog.Actions,{children:(0,v.jsx)(m.Button,{variant:"secondary",onPress:function(){return o(!1)},children:"Cancel"})})]})})]})},B={description:"These <b>Dialog</b> boxes can be used to raise and alert, or to get confirmation on any input or to have a kind of input from the users.",location:"/docs/data/components/dialog/dialog.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Dialog</h1><p class="description">These <b>Dialog</b> boxes can be used to raise and alert, or to get confirmation on any input or to have a kind of input from the users.\n</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Dialog<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DialogBasic.tsx"},'<h3 id="variant-dialog">Variant Dialog<a aria-labelledby="variant-dialog" class="anchor-link" href="#variant-dialog" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DialogVariant.tsx"},'<h3 id="nested-dialog">Nested Dialog<a aria-labelledby="nested-dialog" class="anchor-link" href="#nested-dialog" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"DialogNested.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">onClose</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>&quot;confirmation&quot; or &quot;alert&quot;</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Variant Dialog",level:3,hash:"variant-dialog"},{text:"Nested Dialog",level:3,hash:"nested-dialog"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Dialog component",headers:{title:"React Dialog component",components:["Dialog"],hooks:[]}},C={"DialogBasic.tsx":{module:"./DialogBasic.tsx",raw:"import {Button, Column, Dialog} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n\n  return (\n    <Column>\n      <Button\n        css={{width: '7.8rem'}}\n        onPress={() => setDefaultOpen(true)}\n        variant='secondary'\n      >\n        Open Dialog\n      </Button>\n      <Dialog.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => setDefaultOpen(false)}\n      >\n        <Dialog>\n          <Dialog.Title>My title</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button onPress={() => setDefaultOpen(false)} variant='secondary'>\n              Cancel\n            </Button>\n            <Button onPress={() => setDefaultOpen(false)} variant='secondary'>\n              Do it\n            </Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n    </Column>\n  )\n}\n\nexport default Default\n",jsxPreview:"<Button\r\ncss={{width: '7.8rem'}}\r\nonPress={() => setDefaultOpen(true)}\r\nvariant='secondary'\r\n>\r\nOpen Dialog\r\n</Button>\r\n<Dialog.Trigger\r\nisOpen={defaultOpen}\r\nhandleClose={() => setDefaultOpen(false)}\r\n>\r\n<Dialog>\r\n    <Dialog.Title>My title</Dialog.Title>\r\n    <Dialog.Description>{lorem}</Dialog.Description>\r\n    <Dialog.Actions>\r\n    <Button onPress={() => setDefaultOpen(false)} variant='secondary'>\r\n        Cancel\r\n    </Button>\r\n    <Button onPress={() => setDefaultOpen(false)} variant='secondary'>\r\n        Do it\r\n    </Button>\r\n    </Dialog.Actions>\r\n</Dialog>\r\n</Dialog.Trigger>",moduleTS:"./DialogBasic.tsx",rawTS:"import {Button, Column, Dialog} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Default: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n\n  return (\n    <Column>\n      <Button\n        css={{width: '7.8rem'}}\n        onPress={() => setDefaultOpen(true)}\n        variant='secondary'\n      >\n        Open Dialog\n      </Button>\n      <Dialog.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => setDefaultOpen(false)}\n      >\n        <Dialog>\n          <Dialog.Title>My title</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button onPress={() => setDefaultOpen(false)} variant='secondary'>\n              Cancel\n            </Button>\n            <Button onPress={() => setDefaultOpen(false)} variant='secondary'>\n              Do it\n            </Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n    </Column>\n  )\n}\n\nexport default Default\n"},"DialogVariant.tsx":{module:"./DialogVariant.tsx",raw:"import {\n  Button,\n  Column,\n  Dialog,\n  Icon,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {faBug} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Variants: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [confirmationOpen, setConfirmationOpen] = React.useState(false)\n  const [alertOpen, setAlertOpen] = React.useState(false)\n\n  return (\n    <Column>\n      <Typography.Label>Confirmation dialog</Typography.Label>\n      <Button\n        css={{width: '7.8rem'}}\n        onPress={() => setConfirmationOpen(true)}\n        variant='secondary'\n      >\n        Open Dialog\n      </Button>\n      <Dialog.Trigger\n        isOpen={confirmationOpen}\n        handleClose={() => setConfirmationOpen(false)}\n        variant='confirmation'\n      >\n        <Dialog>\n          <Dialog.Title>My title</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button\n              onPress={() => setConfirmationOpen(false)}\n              variant='secondary'\n            >\n              Cancel\n            </Button>\n            <Button\n              onPress={() => setConfirmationOpen(false)}\n              variant='secondary'\n            >\n              Do it\n            </Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n\n      <Typography.Label>Alert dialog</Typography.Label>\n\n      <Button\n        css={{width: '7.8rem'}}\n        onPress={() => setAlertOpen(true)}\n        variant='danger'\n      >\n        Open Dialog\n      </Button>\n      <Dialog.Trigger\n        isOpen={alertOpen}\n        handleClose={() => setAlertOpen(false)}\n        variant='alert'\n      >\n        <Dialog>\n          <Dialog.Title>My title</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button onPress={() => setAlertOpen(false)} variant='secondary'>\n              Ok\n            </Button>\n          </Dialog.Actions>\n          <Dialog.Icon>\n            <Icon icon={faBug} />\n          </Dialog.Icon>\n        </Dialog>\n      </Dialog.Trigger>\n    </Column>\n  )\n}\n\nexport default Variants\n",jsxPreview:"<Button\r\ncss={{width: '7.8rem'}}\r\nonPress={() => setConfirmationOpen(true)}\r\nvariant='secondary'\r\n>\r\nOpen Dialog\r\n</Button>\r\n<Dialog.Trigger\r\nisOpen={confirmationOpen}\r\nhandleClose={() => setConfirmationOpen(false)}\r\nvariant='confirmation'\r\n>\r\n<Dialog>\r\n    <Dialog.Title>My title</Dialog.Title>\r\n    <Dialog.Description>{lorem}</Dialog.Description>\r\n    <Dialog.Actions>\r\n    <Button\r\n        onPress={() => setConfirmationOpen(false)}\r\n        variant='secondary'\r\n    >\r\n        Cancel\r\n    </Button>\r\n    <Button\r\n        onPress={() => setConfirmationOpen(false)}\r\n        variant='secondary'\r\n    >\r\n        Do it\r\n    </Button>\r\n    </Dialog.Actions>\r\n</Dialog>\r\n</Dialog.Trigger>\r\n\r\n<h3>Alert dialog</h3>\r\n\r\n<Button\r\ncss={{width: '7.8rem'}}\r\nonPress={() => setAlertOpen(true)}\r\nvariant='danger'\r\n>\r\nOpen Dialog\r\n</Button>\r\n<Dialog.Trigger\r\nisOpen={alertOpen}\r\nhandleClose={() => setAlertOpen(false)}\r\nvariant='alert'\r\n>\r\n<Dialog>\r\n    <Dialog.Title>My title</Dialog.Title>\r\n    <Dialog.Description>{lorem}</Dialog.Description>\r\n    <Dialog.Actions>\r\n    <Button onPress={() => setAlertOpen(false)} variant='secondary'>\r\n        Ok\r\n    </Button>\r\n    </Dialog.Actions>\r\n    <Dialog.Icon>\r\n    <Icon icon={faBug} />\r\n    </Dialog.Icon>\r\n</Dialog>\r\n</Dialog.Trigger>",moduleTS:"./DialogVariant.tsx",rawTS:"import {\n  Button,\n  Column,\n  Dialog,\n  Icon,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {faBug} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst Variants: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [confirmationOpen, setConfirmationOpen] = React.useState(false)\n  const [alertOpen, setAlertOpen] = React.useState(false)\n\n  return (\n    <Column>\n      <Typography.Label>Confirmation dialog</Typography.Label>\n      <Button\n        css={{width: '7.8rem'}}\n        onPress={() => setConfirmationOpen(true)}\n        variant='secondary'\n      >\n        Open Dialog\n      </Button>\n      <Dialog.Trigger\n        isOpen={confirmationOpen}\n        handleClose={() => setConfirmationOpen(false)}\n        variant='confirmation'\n      >\n        <Dialog>\n          <Dialog.Title>My title</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button\n              onPress={() => setConfirmationOpen(false)}\n              variant='secondary'\n            >\n              Cancel\n            </Button>\n            <Button\n              onPress={() => setConfirmationOpen(false)}\n              variant='secondary'\n            >\n              Do it\n            </Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n\n      <Typography.Label>Alert dialog</Typography.Label>\n\n      <Button\n        css={{width: '7.8rem'}}\n        onPress={() => setAlertOpen(true)}\n        variant='danger'\n      >\n        Open Dialog\n      </Button>\n      <Dialog.Trigger\n        isOpen={alertOpen}\n        handleClose={() => setAlertOpen(false)}\n        variant='alert'\n      >\n        <Dialog>\n          <Dialog.Title>My title</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button onPress={() => setAlertOpen(false)} variant='secondary'>\n              Ok\n            </Button>\n          </Dialog.Actions>\n          <Dialog.Icon>\n            <Icon icon={faBug} />\n          </Dialog.Icon>\n        </Dialog>\n      </Dialog.Trigger>\n    </Column>\n  )\n}\n\nexport default Variants\n"},"DialogNested.tsx":{module:"./DialogNested.tsx",raw:"import {Button, Column, Dialog} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Child: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n\n  return (\n    <>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setDefaultOpen(true)}\n      >\n        Open Child\n      </Button>\n      <Dialog.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => setDefaultOpen(false)}\n      >\n        <Dialog css={{width: '20rem'}}>\n          <Dialog.Title>My Child dialog</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>\n              Cancel\n            </Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n    </>\n  )\n}\n\nconst NestedDialog: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n\n  return (\n    <Column>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setDefaultOpen(true)}\n        data-target='parent-dialog' // this is required for the focus trap to work\n      >\n        Open Parent\n      </Button>\n      <Dialog.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => setDefaultOpen(false)}\n        id='parent-dialog' // this is required for the focus trap to work\n      >\n        <Dialog>\n          <Dialog.Title>My Parent dialog</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>\n              Cancel\n            </Button>\n            <Child />\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n    </Column>\n  )\n}\n\nexport default NestedDialog\n",jsxPreview:"<Button\r\nvariant='secondary'\r\ncss={{width: '7.8rem'}}\r\nonPress={() => setDefaultOpen(true)}\r\ndata-target='parent-dialog' // this is required for the focus trap to work\r\n>\r\nOpen Parent\r\n</Button>\r\n<Dialog.Trigger\r\nisOpen={defaultOpen}\r\nhandleClose={() => setDefaultOpen(false)}\r\nid='parent-dialog' // this is required for the focus trap to work\r\n>\r\n<Dialog>\r\n    <Dialog.Title>My Parent dialog</Dialog.Title>\r\n    <Dialog.Description>{lorem}</Dialog.Description>\r\n    <Dialog.Actions>\r\n    <Button variant='secondary' onPress={() => setDefaultOpen(false)}>\r\n        Cancel\r\n    </Button>\r\n    <Child />\r\n    </Dialog.Actions>\r\n</Dialog>\r\n</Dialog.Trigger>",moduleTS:"./DialogNested.tsx",rawTS:"import {Button, Column, Dialog} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Child: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n\n  return (\n    <>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setDefaultOpen(true)}\n      >\n        Open Child\n      </Button>\n      <Dialog.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => setDefaultOpen(false)}\n      >\n        <Dialog css={{width: '20rem'}}>\n          <Dialog.Title>My Child dialog</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>\n              Cancel\n            </Button>\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n    </>\n  )\n}\n\nconst NestedDialog: React.FC = () => {\n  const lorem =\n    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.'\n  const [defaultOpen, setDefaultOpen] = React.useState(false)\n\n  return (\n    <Column>\n      <Button\n        variant='secondary'\n        css={{width: '7.8rem'}}\n        onPress={() => setDefaultOpen(true)}\n        data-target='parent-dialog' // this is required for the focus trap to work\n      >\n        Open Parent\n      </Button>\n      <Dialog.Trigger\n        isOpen={defaultOpen}\n        handleClose={() => setDefaultOpen(false)}\n        id='parent-dialog' // this is required for the focus trap to work\n      >\n        <Dialog>\n          <Dialog.Title>My Parent dialog</Dialog.Title>\n          <Dialog.Description>{lorem}</Dialog.Description>\n          <Dialog.Actions>\n            <Button variant='secondary' onPress={() => setDefaultOpen(false)}>\n              Cancel\n            </Button>\n            <Child />\n          </Dialog.Actions>\n        </Dialog>\n      </Dialog.Trigger>\n    </Column>\n  )\n}\n\nexport default NestedDialog\n"}};C.scope={process:{},import:{"@comfortdelgro/react-compass":m,react:h,"@fortawesome/free-solid-svg-icons":O}};var T={"./DialogBasic.tsx":function(){var n=f.useState(!1),e=(0,y.Z)(n,2),t=e[0],a=e[1];return(0,v.jsxs)(m.Column,{children:[(0,v.jsx)(m.Button,{css:{width:"7.8rem"},onPress:function(){return a(!0)},variant:"secondary",children:"Open Dialog"}),(0,v.jsx)(m.Dialog.Trigger,{isOpen:t,handleClose:function(){return a(!1)},children:(0,v.jsxs)(m.Dialog,{children:[o||(o=(0,v.jsx)(m.Dialog.Title,{children:"My title"})),(0,v.jsx)(m.Dialog.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur."}),(0,v.jsxs)(m.Dialog.Actions,{children:[(0,v.jsx)(m.Button,{onPress:function(){return a(!1)},variant:"secondary",children:"Cancel"}),(0,v.jsx)(m.Button,{onPress:function(){return a(!1)},variant:"secondary",children:"Do it"})]})]})})]})},"./DialogVariant.tsx":function(){var n="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur.",e=f.useState(!1),t=(0,y.Z)(e,2),o=t[0],c=t[1],d=f.useState(!1),g=(0,y.Z)(d,2),u=g[0],p=g[1];return(0,v.jsxs)(m.Column,{children:[a||(a=(0,v.jsx)(m.Typography.Label,{children:"Confirmation dialog"})),(0,v.jsx)(m.Button,{css:{width:"7.8rem"},onPress:function(){return c(!0)},variant:"secondary",children:"Open Dialog"}),(0,v.jsx)(m.Dialog.Trigger,{isOpen:o,handleClose:function(){return c(!1)},variant:"confirmation",children:(0,v.jsxs)(m.Dialog,{children:[i||(i=(0,v.jsx)(m.Dialog.Title,{children:"My title"})),(0,v.jsx)(m.Dialog.Description,{children:n}),(0,v.jsxs)(m.Dialog.Actions,{children:[(0,v.jsx)(m.Button,{onPress:function(){return c(!1)},variant:"secondary",children:"Cancel"}),(0,v.jsx)(m.Button,{onPress:function(){return c(!1)},variant:"secondary",children:"Do it"})]})]})}),r||(r=(0,v.jsx)(m.Typography.Label,{children:"Alert dialog"})),(0,v.jsx)(m.Button,{css:{width:"7.8rem"},onPress:function(){return p(!0)},variant:"danger",children:"Open Dialog"}),(0,v.jsx)(m.Dialog.Trigger,{isOpen:u,handleClose:function(){return p(!1)},variant:"alert",children:(0,v.jsxs)(m.Dialog,{children:[s||(s=(0,v.jsx)(m.Dialog.Title,{children:"My title"})),(0,v.jsx)(m.Dialog.Description,{children:n}),(0,v.jsx)(m.Dialog.Actions,{children:(0,v.jsx)(m.Button,{onPress:function(){return p(!1)},variant:"secondary",children:"Ok"})}),l||(l=(0,v.jsx)(m.Dialog.Icon,{children:(0,v.jsx)(m.Icon,{icon:O.faBug})}))]})})]})},"./DialogNested.tsx":function(){var n=f.useState(!1),e=(0,y.Z)(n,2),t=e[0],o=e[1];return(0,v.jsxs)(m.Column,{children:[(0,v.jsx)(m.Button,{variant:"secondary",css:{width:"7.8rem"},onPress:function(){return o(!0)},"data-target":"parent-dialog",children:"Open Parent"}),(0,v.jsx)(m.Dialog.Trigger,{isOpen:t,handleClose:function(){return o(!1)},id:"parent-dialog",children:(0,v.jsxs)(m.Dialog,{children:[d||(d=(0,v.jsx)(m.Dialog.Title,{children:"My Parent dialog"})),(0,v.jsx)(m.Dialog.Description,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. pariatur."}),(0,v.jsxs)(m.Dialog.Actions,{children:[(0,v.jsx)(m.Button,{variant:"secondary",onPress:function(){return o(!1)},children:"Cancel"}),g||(g=(0,v.jsx)(x,{}))]})]})})]})}},w={};function b(){return(0,v.jsx)(D.Z,(0,p.Z)({},u))}},22206:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/dialog",function(){return t(2687)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=22206)}),_N_E=n.O()}]);