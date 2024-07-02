(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4927],{70052:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var d,a,o=t(15393),l=t(16371),c=t.n(l),r=t(31549);function i(){return(0,r.jsxs)(o.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,r.jsx)(c(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:d||(d=(0,r.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,r.jsx)(c(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,r.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},90907:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var d,a,o,l,c,r,i,s,h,b,x,C,u,k,m,f,S,p,v,g,y={};t.r(y),t.d(y,{demoComponents:function(){return _},demos:function(){return V},docs:function(){return T},srcComponents:function(){return L}});var D=t(26098),I=t(24437),w=t(15393),j=t(44194),R=t.t(j,2),U=t(31549),H=t(70052),T={description:"Checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.",location:"/docs/data/components/checkbox/checkbox.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Checkbox</h1><p class="description">Checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.</p>\n\n',{component:"components/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Checkbox<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="controlled">Controlled<a aria-labelledby="controlled" class="anchor-link" href="#controlled" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CheckboxDefault.tsx"},'<h3 id="uncontrolled">Uncontrolled<a aria-labelledby="uncontrolled" class="anchor-link" href="#uncontrolled" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CheckboxUncontrolled.tsx"},'<h3 id="variants">Variants<a aria-labelledby="variants" class="anchor-link" href="#variants" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CheckboxVariant.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">isSelected</td>\n<td align="left">boolean</td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>&#39;default&#39; or &#39;rounded&#39;</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">isIndeterminate</td>\n<td align="left">boolean</td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">defaultSelected</td>\n<td align="left">boolean</td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left">boolean</td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Controlled",level:3,hash:"controlled"},{text:"Uncontrolled",level:3,hash:"uncontrolled"},{text:"Variants",level:3,hash:"variants"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Checkbox component",headers:{title:"React Checkbox component",components:["Checkbox"],hooks:[]}},V={"CheckboxDefault.tsx":{module:"./CheckboxDefault.tsx",raw:"import {Checkbox, Column} from '@comfortdelgro/react-compass'\nimport React, {useState} from 'react'\n\nconst Basic: React.FC = () => {\n  const [isSelected, setIsSelected] = useState(false)\n  return (\n    <Column>\n      <Checkbox\n        isSelected={isSelected}\n        onChange={() => setIsSelected(!isSelected)}\n      >\n        {isSelected ? 'Selected' : 'Unselected'}\n      </Checkbox>\n    </Column>\n  )\n}\nexport default Basic\n",jsxPreview:"<Checkbox\r\n    isSelected={isSelected}\r\n    onChange={() => setIsSelected(!isSelected)}\r\n>\r\n    {isSelected ? 'Selected' : 'Unselected'}\r\n</Checkbox>",moduleTS:"./CheckboxDefault.tsx",rawTS:"import {Checkbox, Column} from '@comfortdelgro/react-compass'\nimport React, {useState} from 'react'\n\nconst Basic: React.FC = () => {\n  const [isSelected, setIsSelected] = useState(false)\n  return (\n    <Column>\n      <Checkbox\n        isSelected={isSelected}\n        onChange={() => setIsSelected(!isSelected)}\n      >\n        {isSelected ? 'Selected' : 'Unselected'}\n      </Checkbox>\n    </Column>\n  )\n}\nexport default Basic\n"},"CheckboxUncontrolled.tsx":{module:"./CheckboxUncontrolled.tsx",raw:"import {Checkbox, Column} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Uncontrolled: React.FC = () => {\n  return (\n    <Column>\n      <Column>\n        <Checkbox variant='rounded'>Unselected</Checkbox>\n        <Checkbox variant='rounded' defaultSelected>\n          Selected\n        </Checkbox>\n        <Checkbox variant='rounded' isDisabled>\n          Unselected (disabled)\n        </Checkbox>\n        <Checkbox variant='rounded' defaultSelected isDisabled>\n          Selected (disabled)\n        </Checkbox>\n        <Checkbox variant='rounded' isIndeterminate defaultSelected>\n          Indeterminate\n        </Checkbox>\n        <Checkbox variant='rounded' isIndeterminate isDisabled defaultSelected>\n          Indeterminate (disabled)\n        </Checkbox>\n      </Column>\n    </Column>\n  )\n}\nexport default Uncontrolled\n",jsxPreview:"<Checkbox variant='rounded'>Unselected</Checkbox>\r\n<Checkbox variant='rounded' defaultSelected>\r\nSelected\r\n</Checkbox>\r\n<Checkbox variant='rounded' isDisabled>\r\nUnselected (disabled)\r\n</Checkbox>\r\n<Checkbox variant='rounded' defaultSelected isDisabled>\r\nSelected (disabled)\r\n</Checkbox>\r\n<Checkbox variant='rounded' isIndeterminate defaultSelected>\r\nIndeterminate\r\n</Checkbox>\r\n<Checkbox variant='rounded' isIndeterminate isDisabled defaultSelected>\r\nIndeterminate (disabled)\r\n</Checkbox>",moduleTS:"./CheckboxUncontrolled.tsx",rawTS:"import {Checkbox, Column} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Uncontrolled: React.FC = () => {\n  return (\n    <Column>\n      <Column>\n        <Checkbox variant='rounded'>Unselected</Checkbox>\n        <Checkbox variant='rounded' defaultSelected>\n          Selected\n        </Checkbox>\n        <Checkbox variant='rounded' isDisabled>\n          Unselected (disabled)\n        </Checkbox>\n        <Checkbox variant='rounded' defaultSelected isDisabled>\n          Selected (disabled)\n        </Checkbox>\n        <Checkbox variant='rounded' isIndeterminate defaultSelected>\n          Indeterminate\n        </Checkbox>\n        <Checkbox variant='rounded' isIndeterminate isDisabled defaultSelected>\n          Indeterminate (disabled)\n        </Checkbox>\n      </Column>\n    </Column>\n  )\n}\nexport default Uncontrolled\n"},"CheckboxVariant.tsx":{module:"./CheckboxVariant.tsx",raw:"import {Checkbox, Column, Row, Typography} from '@comfortdelgro/react-compass'\n\nconst Variants: React.FC = () => (\n  <Column>\n    <Typography.Header variant='header3'>1. Default</Typography.Header>\n    <Column>\n      <Checkbox isSelected={false}>Unselected</Checkbox>\n      <Checkbox isSelected>Selected</Checkbox>\n      <Checkbox isDisabled>Unselected (disabled)</Checkbox>\n      <Checkbox isSelected isDisabled>\n        Selected (disabled)\n      </Checkbox>\n      <Checkbox isIndeterminate isSelected>\n        Indeterminate\n      </Checkbox>\n      <Checkbox isIndeterminate isDisabled isSelected>\n        Indeterminate (disabled)\n      </Checkbox>\n      <Checkbox isSelected isReadOnly>\n        Read ony\n      </Checkbox>\n    </Column>\n\n    <Typography.Header variant='header3'>2. Rounded</Typography.Header>\n    <Column>\n      <Checkbox variant='rounded' isSelected={false}>\n        Unselected\n      </Checkbox>\n      <Checkbox variant='rounded' isSelected>\n        Selected\n      </Checkbox>\n      <Checkbox variant='rounded' isDisabled>\n        Unselected (disabled)\n      </Checkbox>\n      <Checkbox variant='rounded' isSelected isDisabled>\n        Selected (disabled)\n      </Checkbox>\n      <Checkbox variant='rounded' isIndeterminate isSelected>\n        Indeterminate\n      </Checkbox>\n      <Checkbox variant='rounded' isIndeterminate isDisabled isSelected>\n        Indeterminate (disabled)\n      </Checkbox>\n    </Column>\n\n    <Typography.Header variant='header3'>3. Without Labels</Typography.Header>\n    <Column>\n      <Row css={{gap: '1em'}}>\n        <Checkbox />\n        <Checkbox defaultSelected />\n        <Checkbox isDisabled />\n        <Checkbox defaultSelected isDisabled />\n        <Checkbox isIndeterminate defaultSelected />\n        <Checkbox isIndeterminate isDisabled defaultSelected />\n      </Row>\n      <Row css={{gap: '1em'}}>\n        <Checkbox variant='rounded' />\n        <Checkbox variant='rounded' defaultSelected />\n        <Checkbox variant='rounded' isDisabled />\n        <Checkbox variant='rounded' defaultSelected isDisabled />\n        <Checkbox variant='rounded' isIndeterminate defaultSelected />\n        <Checkbox\n          variant='rounded'\n          isIndeterminate\n          isDisabled\n          defaultSelected\n        />\n      </Row>\n    </Column>\n\n    <Typography.Header variant='header3'>4. HTML forms</Typography.Header>\n    <Column>\n      <Row>\n        <Checkbox name='newsletter' value='subscribe'>\n          Subscribe\n        </Checkbox>\n      </Row>\n    </Column>\n  </Column>\n)\n\nexport default Variants\n",jsxPreview:"<h3>1. Default</h3>\r\n    <Column>\r\n    <Checkbox isSelected={false}>Unselected</Checkbox>\r\n    <Checkbox isSelected>Selected</Checkbox>\r\n    <Checkbox isDisabled>Unselected (disabled)</Checkbox>\r\n    <Checkbox isSelected isDisabled>\r\n        Selected (disabled)\r\n    </Checkbox>\r\n    <Checkbox isIndeterminate isSelected>\r\n        Indeterminate\r\n    </Checkbox>\r\n    <Checkbox isIndeterminate isDisabled isSelected>\r\n        Indeterminate (disabled)\r\n    </Checkbox>\r\n    <Checkbox isSelected isReadOnly>\r\n        Read ony\r\n    </Checkbox>\r\n    </Column>\r\n\r\n<h3>2. Rounded</h3>\r\n    <Column>\r\n    <Checkbox variant='rounded' isSelected={false}>\r\n        Unselected\r\n    </Checkbox>\r\n    <Checkbox variant='rounded' isSelected>\r\n        Selected\r\n    </Checkbox>\r\n    <Checkbox variant='rounded' isDisabled>\r\n        Unselected (disabled)\r\n    </Checkbox>\r\n    <Checkbox variant='rounded' isSelected isDisabled>\r\n        Selected (disabled)\r\n    </Checkbox>\r\n    <Checkbox variant='rounded' isIndeterminate isSelected>\r\n        Indeterminate\r\n    </Checkbox>\r\n    <Checkbox variant='rounded' isIndeterminate isDisabled isSelected>\r\n        Indeterminate (disabled)\r\n    </Checkbox>\r\n    </Column>\r\n\r\n<h3>3. Without Labels</h3>\r\n    <Column>\r\n    <Row css={{gap: '1em'}}>\r\n        <Checkbox />\r\n        <Checkbox defaultSelected />\r\n        <Checkbox isDisabled />\r\n        <Checkbox defaultSelected isDisabled />\r\n        <Checkbox isIndeterminate defaultSelected />\r\n        <Checkbox isIndeterminate isDisabled defaultSelected />\r\n    </Row>\r\n    <Row css={{gap: '1em'}}>\r\n        <Checkbox variant='rounded' />\r\n        <Checkbox variant='rounded' defaultSelected />\r\n        <Checkbox variant='rounded' isDisabled />\r\n        <Checkbox variant='rounded' defaultSelected isDisabled />\r\n        <Checkbox variant='rounded' isIndeterminate defaultSelected />\r\n        <Checkbox\r\n        variant='rounded'\r\n        isIndeterminate\r\n        isDisabled\r\n        defaultSelected\r\n        />\r\n    </Row>\r\n    </Column>\r\n\r\n<h3>4. HTML forms</h3>\r\n    <Column>\r\n    <Row>\r\n        <Checkbox name='newsletter' value='subscribe'>\r\n        Subscribe\r\n        </Checkbox>\r\n    </Row>\r\n    </Column>",moduleTS:"./CheckboxVariant.tsx",rawTS:"import {Checkbox, Column, Row, Typography} from '@comfortdelgro/react-compass'\n\nconst Variants: React.FC = () => (\n  <Column>\n    <Typography.Header variant='header3'>1. Default</Typography.Header>\n    <Column>\n      <Checkbox isSelected={false}>Unselected</Checkbox>\n      <Checkbox isSelected>Selected</Checkbox>\n      <Checkbox isDisabled>Unselected (disabled)</Checkbox>\n      <Checkbox isSelected isDisabled>\n        Selected (disabled)\n      </Checkbox>\n      <Checkbox isIndeterminate isSelected>\n        Indeterminate\n      </Checkbox>\n      <Checkbox isIndeterminate isDisabled isSelected>\n        Indeterminate (disabled)\n      </Checkbox>\n      <Checkbox isSelected isReadOnly>\n        Read ony\n      </Checkbox>\n    </Column>\n\n    <Typography.Header variant='header3'>2. Rounded</Typography.Header>\n    <Column>\n      <Checkbox variant='rounded' isSelected={false}>\n        Unselected\n      </Checkbox>\n      <Checkbox variant='rounded' isSelected>\n        Selected\n      </Checkbox>\n      <Checkbox variant='rounded' isDisabled>\n        Unselected (disabled)\n      </Checkbox>\n      <Checkbox variant='rounded' isSelected isDisabled>\n        Selected (disabled)\n      </Checkbox>\n      <Checkbox variant='rounded' isIndeterminate isSelected>\n        Indeterminate\n      </Checkbox>\n      <Checkbox variant='rounded' isIndeterminate isDisabled isSelected>\n        Indeterminate (disabled)\n      </Checkbox>\n    </Column>\n\n    <Typography.Header variant='header3'>3. Without Labels</Typography.Header>\n    <Column>\n      <Row css={{gap: '1em'}}>\n        <Checkbox />\n        <Checkbox defaultSelected />\n        <Checkbox isDisabled />\n        <Checkbox defaultSelected isDisabled />\n        <Checkbox isIndeterminate defaultSelected />\n        <Checkbox isIndeterminate isDisabled defaultSelected />\n      </Row>\n      <Row css={{gap: '1em'}}>\n        <Checkbox variant='rounded' />\n        <Checkbox variant='rounded' defaultSelected />\n        <Checkbox variant='rounded' isDisabled />\n        <Checkbox variant='rounded' defaultSelected isDisabled />\n        <Checkbox variant='rounded' isIndeterminate defaultSelected />\n        <Checkbox\n          variant='rounded'\n          isIndeterminate\n          isDisabled\n          defaultSelected\n        />\n      </Row>\n    </Column>\n\n    <Typography.Header variant='header3'>4. HTML forms</Typography.Header>\n    <Column>\n      <Row>\n        <Checkbox name='newsletter' value='subscribe'>\n          Subscribe\n        </Checkbox>\n      </Row>\n    </Column>\n  </Column>\n)\n\nexport default Variants\n"}};V.scope={process:{},import:{"@comfortdelgro/react-compass":w,react:R}};var _={"./CheckboxDefault.tsx":function(){var e=(0,j.useState)(!1),n=e[0],t=e[1];return(0,U.jsx)(w.Column,{children:(0,U.jsx)(w.Checkbox,{isSelected:n,onChange:function(){return t(!n)},children:n?"Selected":"Unselected"})})},"./CheckboxUncontrolled.tsx":function(){return d||(d=(0,U.jsx)(w.Column,{children:(0,U.jsxs)(w.Column,{children:[(0,U.jsx)(w.Checkbox,{variant:"rounded",children:"Unselected"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",defaultSelected:!0,children:"Selected"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",defaultSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0,children:"Indeterminate"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0,children:"Indeterminate (disabled)"})]})}))},"./CheckboxVariant.tsx":function(){return(0,U.jsxs)(w.Column,{children:[a||(a=(0,U.jsx)(w.Typography.Header,{variant:"header3",children:"1. Default"})),o||(o=(0,U.jsxs)(w.Column,{children:[(0,U.jsx)(w.Checkbox,{isSelected:!1,children:"Unselected"}),(0,U.jsx)(w.Checkbox,{isSelected:!0,children:"Selected"}),(0,U.jsx)(w.Checkbox,{isDisabled:!0,children:"Unselected (disabled)"}),(0,U.jsx)(w.Checkbox,{isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),(0,U.jsx)(w.Checkbox,{isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),(0,U.jsx)(w.Checkbox,{isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"}),(0,U.jsx)(w.Checkbox,{isSelected:!0,isReadOnly:!0,children:"Read ony"})]})),l||(l=(0,U.jsx)(w.Typography.Header,{variant:"header3",children:"2. Rounded"})),c||(c=(0,U.jsxs)(w.Column,{children:[(0,U.jsx)(w.Checkbox,{variant:"rounded",isSelected:!1,children:"Unselected"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isSelected:!0,children:"Selected"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isDisabled:!0,children:"Unselected (disabled)"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isSelected:!0,isDisabled:!0,children:"Selected (disabled)"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isIndeterminate:!0,isSelected:!0,children:"Indeterminate"}),(0,U.jsx)(w.Checkbox,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,isSelected:!0,children:"Indeterminate (disabled)"})]})),r||(r=(0,U.jsx)(w.Typography.Header,{variant:"header3",children:"3. Without Labels"})),(0,U.jsxs)(w.Column,{children:[(0,U.jsxs)(w.Row,{css:{gap:"1em"},children:[i||(i=(0,U.jsx)(w.Checkbox,{})),s||(s=(0,U.jsx)(w.Checkbox,{defaultSelected:!0})),h||(h=(0,U.jsx)(w.Checkbox,{isDisabled:!0})),b||(b=(0,U.jsx)(w.Checkbox,{defaultSelected:!0,isDisabled:!0})),x||(x=(0,U.jsx)(w.Checkbox,{isIndeterminate:!0,defaultSelected:!0})),C||(C=(0,U.jsx)(w.Checkbox,{isIndeterminate:!0,isDisabled:!0,defaultSelected:!0}))]}),(0,U.jsxs)(w.Row,{css:{gap:"1em"},children:[u||(u=(0,U.jsx)(w.Checkbox,{variant:"rounded"})),k||(k=(0,U.jsx)(w.Checkbox,{variant:"rounded",defaultSelected:!0})),m||(m=(0,U.jsx)(w.Checkbox,{variant:"rounded",isDisabled:!0})),f||(f=(0,U.jsx)(w.Checkbox,{variant:"rounded",defaultSelected:!0,isDisabled:!0})),S||(S=(0,U.jsx)(w.Checkbox,{variant:"rounded",isIndeterminate:!0,defaultSelected:!0})),p||(p=(0,U.jsx)(w.Checkbox,{variant:"rounded",isIndeterminate:!0,isDisabled:!0,defaultSelected:!0}))]})]}),v||(v=(0,U.jsx)(w.Typography.Header,{variant:"header3",children:"4. HTML forms"})),g||(g=(0,U.jsx)(w.Column,{children:(0,U.jsx)(w.Row,{children:(0,U.jsx)(w.Checkbox,{name:"newsletter",value:"subscribe",children:"Subscribe"})})}))]})}},L={"components/ComponentLinkHeader.tsx":H.Z};function B(){return(0,U.jsx)(I.Z,(0,D.Z)({},y))}},27512:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/checkbox",function(){return t(90907)}])}},function(e){e.O(0,[508,6371,7306,3936,4437,9774,2888,179],function(){return e(e.s=27512)}),_N_E=e.O()}]);