(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5454],{70052:function(o,n,t){"use strict";t.d(n,{Z:function(){return m}});var e,r,a=t(15393),i=t(16371),l=t.n(i),u=t(31549);function m(){return(0,u.jsxs)(a.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,u.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:e||(e=(0,u.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,u.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,u.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},43599:function(o,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var e,r,a,i,l,u,m,s,d,c,p,y,F={};t.r(F),t.d(F,{demoComponents:function(){return D},demos:function(){return G},docs:function(){return g},srcComponents:function(){return v}});var L=t(26098),h=t(24437),x=t(15393),w=t(31549),b=t(70052),g={description:"The FormLayout component is a convenient way to build form layout.",location:"/docs/data/components/form-layout/form-layout.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Form Layout</h1><p class="description">\nThe FormLayout component is a convenient way to build form layout.</p>\n\n',{component:"components/ComponentLinkHeader.tsx"},'<h2 id="import">Import<a aria-labelledby="import" class="anchor-link" href="#import" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><div class="cdg-root"><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span>FormLayout<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"FormLayout.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="formlayout">FormLayout<a aria-labelledby="formlayout" class="anchor-link" href="#formlayout" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>css</td>\n<td><code>CSS</code></td>\n<td>—</td>\n<td>The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td>children</td>\n<td><code>ReactNode</code></td>\n<td>—</td>\n<td>The content to display in the FormLayout.</td>\n</tr>\n</tbody></table>\n<h3 id="formlayout-row">FormLayout.Row<a aria-labelledby="formlayout-row" class="anchor-link" href="#formlayout-row" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Type</th>\n<th>Default</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>css</td>\n<td><code>CSS</code></td>\n<td>—</td>\n<td>The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td>children</td>\n<td><code>ReactNode</code></td>\n<td>—</td>\n<td>The content to display in the Row.</td>\n</tr>\n<tr>\n<td>columns</td>\n<td><code>1 | 2 | 3</code></td>\n<td><code>1</code></td>\n<td>The number of columns per row.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Import",level:2,hash:"import",children:[]},{text:"Example",level:2,hash:"example",children:[]},{text:"Props",level:2,hash:"props",children:[{text:"FormLayout",level:3,hash:"formlayout"},{text:"FormLayout.Row",level:3,hash:"formlayout-row"}]}],title:"React Form Layout component",headers:{title:"React Form Layout component",components:["FormLayout"],hooks:[]}},G={"FormLayout.tsx":{module:"./FormLayout.tsx",raw:"import {\n  Button,\n  Checkbox,\n  Divider,\n  Dropdown,\n  FormLayout,\n  Radio,\n  TextField,\n  Upload,\n} from '@comfortdelgro/react-compass'\n\nconst Default: React.FC = () => {\n  return (\n    <FormLayout>\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group>\n          <Dropdown.Select label='Salutation'>\n            <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>\n            <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>\n            <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>\n          </Dropdown.Select>\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={3} breaksOnSmall={true}>\n        <FormLayout.Group>\n          <Radio\n            variant='outlined'\n            label={'option'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n            value='1'\n            tooltip='This is tooltip'\n            id='item1'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <Radio\n            variant='outlined'\n            label={'option'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n            value='1'\n            tooltip='This is tooltip'\n            id='item1'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <Radio\n            variant='outlined'\n            label={'option'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n            value='1'\n            tooltip='This is tooltip'\n            id='item1'\n          />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={2} breaksOnSmall={true}>\n        <FormLayout.Group>\n          <FormLayout.Explaination\n            title={'Create New Time/Date Policy'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <Upload\n            getFile={() => {}}\n            accept='image/*, .docs, .docx'\n            fileSizeLimit={999999999999999}\n          />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <Divider />\n      <FormLayout.Row columns={2}>\n        <FormLayout.Group>\n          <FormLayout.Explaination\n            title={'Create New Time/Date Policy'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group\n          css={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: 'var(--cdg-spacing-4)',\n          }}\n        >\n          <Checkbox>Unselected</Checkbox>\n          <Checkbox>Unselected</Checkbox>\n          <Checkbox>Unselected</Checkbox>\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <Divider />\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group>\n          <Dropdown.Select label='Salutation' defaultSelectedKey={'mr'}>\n            <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>\n            <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>\n            <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>\n          </Dropdown.Select>\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Full Name' />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Last Name' />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group>\n          <TextField label='Contact Number' />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Work Email' />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Department' />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group\n          css={{\n            gridColumnStart: 2,\n            flexDirection: 'row',\n            justifyContent: 'center',\n          }}\n        >\n          <Button type='submit'>Submit</Button>\n        </FormLayout.Group>\n      </FormLayout.Row>\n    </FormLayout>\n  )\n}\nexport default Default\n",jsxPreview:"<FormLayout>\r\n    <FormLayout.Row columns={3}>\r\n    <FormLayout.Group>\r\n        <Dropdown.Select label='Salutation'>\r\n        <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>\r\n        <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>\r\n        <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>\r\n        </Dropdown.Select>\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n    <FormLayout.Row columns={3} breaksOnSmall={true}>\r\n    <FormLayout.Group>\r\n        <Radio\r\n        variant='outlined'\r\n        label={'option'}\r\n        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\r\n        value='1'\r\n        tooltip='This is tooltip'\r\n        id='item1'\r\n        />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <Radio\r\n        variant='outlined'\r\n        label={'option'}\r\n        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\r\n        value='1'\r\n        tooltip='This is tooltip'\r\n        id='item1'\r\n        />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <Radio\r\n        variant='outlined'\r\n        label={'option'}\r\n        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\r\n        value='1'\r\n        tooltip='This is tooltip'\r\n        id='item1'\r\n        />\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n    <FormLayout.Row columns={2} breaksOnSmall={true}>\r\n    <FormLayout.Group>\r\n        <FormLayout.Explaination\r\n        title={'Create New Time/Date Policy'}\r\n        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.'\r\n        />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <Upload\r\n        getFile={() => {}}\r\n        accept='image/*, .docs, .docx'\r\n        fileSizeLimit={999999999999999}\r\n        />\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n    <Divider />\r\n    <FormLayout.Row columns={2}>\r\n    <FormLayout.Group>\r\n        <FormLayout.Explaination\r\n        title={'Create New Time/Date Policy'}\r\n        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\r\n            eiusmod tempor incididunt ut labore et dolore magna aliqua.'\r\n        />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group\r\n        css={{\r\n            display: 'flex',\r\n            flexDirection: 'column',\r\n            gap: 'var(--cdg-spacing-4)',\r\n        }}\r\n    >\r\n        <Checkbox>Unselected</Checkbox>\r\n        <Checkbox>Unselected</Checkbox>\r\n        <Checkbox>Unselected</Checkbox>\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n    <Divider />\r\n    <FormLayout.Row columns={3}>\r\n    <FormLayout.Group>\r\n        <Dropdown.Select label='Salutation' defaultSelectedKey={'mr'}>\r\n        <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>\r\n        <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>\r\n        <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>\r\n        </Dropdown.Select>\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <TextField label='Full Name' />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <TextField label='Last Name' />\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n    <FormLayout.Row columns={3}>\r\n    <FormLayout.Group>\r\n        <TextField label='Contact Number' />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <TextField label='Work Email' />\r\n    </FormLayout.Group>\r\n    <FormLayout.Group>\r\n        <TextField label='Department' />\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n    <FormLayout.Row columns={3}>\r\n    <FormLayout.Group\r\n        css={{\r\n        gridColumnStart: 2,\r\n        flexDirection: 'row',\r\n        justifyContent: 'center',\r\n        }}\r\n    >\r\n        <Button type='submit'>Submit</Button>\r\n    </FormLayout.Group>\r\n    </FormLayout.Row>\r\n</FormLayout>",moduleTS:"./FormLayout.tsx",rawTS:"import {\n  Button,\n  Checkbox,\n  Divider,\n  Dropdown,\n  FormLayout,\n  Radio,\n  TextField,\n  Upload,\n} from '@comfortdelgro/react-compass'\n\nconst Default: React.FC = () => {\n  return (\n    <FormLayout>\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group>\n          <Dropdown.Select label='Salutation'>\n            <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>\n            <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>\n            <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>\n          </Dropdown.Select>\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={3} breaksOnSmall={true}>\n        <FormLayout.Group>\n          <Radio\n            variant='outlined'\n            label={'option'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n            value='1'\n            tooltip='This is tooltip'\n            id='item1'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <Radio\n            variant='outlined'\n            label={'option'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n            value='1'\n            tooltip='This is tooltip'\n            id='item1'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <Radio\n            variant='outlined'\n            label={'option'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'\n            value='1'\n            tooltip='This is tooltip'\n            id='item1'\n          />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={2} breaksOnSmall={true}>\n        <FormLayout.Group>\n          <FormLayout.Explaination\n            title={'Create New Time/Date Policy'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <Upload\n            getFile={() => {}}\n            accept='image/*, .docs, .docx'\n            fileSizeLimit={999999999999999}\n          />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <Divider />\n      <FormLayout.Row columns={2}>\n        <FormLayout.Group>\n          <FormLayout.Explaination\n            title={'Create New Time/Date Policy'}\n            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua.'\n          />\n        </FormLayout.Group>\n        <FormLayout.Group\n          css={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: 'var(--cdg-spacing-4)',\n          }}\n        >\n          <Checkbox>Unselected</Checkbox>\n          <Checkbox>Unselected</Checkbox>\n          <Checkbox>Unselected</Checkbox>\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <Divider />\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group>\n          <Dropdown.Select label='Salutation' defaultSelectedKey={'mr'}>\n            <Dropdown.Item key={'mr'}>Mr</Dropdown.Item>\n            <Dropdown.Item key={'ms'}>Ms</Dropdown.Item>\n            <Dropdown.Item key={'mrs'}>Mrs</Dropdown.Item>\n          </Dropdown.Select>\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Full Name' />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Last Name' />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group>\n          <TextField label='Contact Number' />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Work Email' />\n        </FormLayout.Group>\n        <FormLayout.Group>\n          <TextField label='Department' />\n        </FormLayout.Group>\n      </FormLayout.Row>\n      <FormLayout.Row columns={3}>\n        <FormLayout.Group\n          css={{\n            gridColumnStart: 2,\n            flexDirection: 'row',\n            justifyContent: 'center',\n          }}\n        >\n          <Button type='submit'>Submit</Button>\n        </FormLayout.Group>\n      </FormLayout.Row>\n    </FormLayout>\n  )\n}\nexport default Default\n"}};G.scope={process:{},import:{"@comfortdelgro/react-compass":x}};var D={"./FormLayout.tsx":function(){return(0,w.jsxs)(x.FormLayout,{children:[e||(e=(0,w.jsx)(x.FormLayout.Row,{columns:3,children:(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsxs)(x.Dropdown.Select,{label:"Salutation",children:[(0,w.jsx)(x.Dropdown.Item,{children:"Mr"},"mr"),(0,w.jsx)(x.Dropdown.Item,{children:"Ms"},"ms"),(0,w.jsx)(x.Dropdown.Item,{children:"Mrs"},"mrs")]})})})),r||(r=(0,w.jsxs)(x.FormLayout.Row,{columns:3,breaksOnSmall:!0,children:[(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.Radio,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})}),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.Radio,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})}),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.Radio,{variant:"outlined",label:"option",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"1",tooltip:"This is tooltip",id:"item1"})})]})),(0,w.jsxs)(x.FormLayout.Row,{columns:2,breaksOnSmall:!0,children:[a||(a=(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.FormLayout.Explaination,{title:"Create New Time/Date Policy",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.Upload,{getFile:function(){},accept:"image/*, .docs, .docx",fileSizeLimit:999999999999999})})]}),i||(i=(0,w.jsx)(x.Divider,{})),(0,w.jsxs)(x.FormLayout.Row,{columns:2,children:[l||(l=(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.FormLayout.Explaination,{title:"Create New Time/Date Policy",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})),(0,w.jsxs)(x.FormLayout.Group,{css:{display:"flex",flexDirection:"column",gap:"var(--cdg-spacing-4)"},children:[u||(u=(0,w.jsx)(x.Checkbox,{children:"Unselected"})),m||(m=(0,w.jsx)(x.Checkbox,{children:"Unselected"})),s||(s=(0,w.jsx)(x.Checkbox,{children:"Unselected"}))]})]}),d||(d=(0,w.jsx)(x.Divider,{})),c||(c=(0,w.jsxs)(x.FormLayout.Row,{columns:3,children:[(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsxs)(x.Dropdown.Select,{label:"Salutation",defaultSelectedKey:"mr",children:[(0,w.jsx)(x.Dropdown.Item,{children:"Mr"},"mr"),(0,w.jsx)(x.Dropdown.Item,{children:"Ms"},"ms"),(0,w.jsx)(x.Dropdown.Item,{children:"Mrs"},"mrs")]})}),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.TextField,{label:"Full Name"})}),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.TextField,{label:"Last Name"})})]})),p||(p=(0,w.jsxs)(x.FormLayout.Row,{columns:3,children:[(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.TextField,{label:"Contact Number"})}),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.TextField,{label:"Work Email"})}),(0,w.jsx)(x.FormLayout.Group,{children:(0,w.jsx)(x.TextField,{label:"Department"})})]})),(0,w.jsx)(x.FormLayout.Row,{columns:3,children:(0,w.jsx)(x.FormLayout.Group,{css:{gridColumnStart:2,flexDirection:"row",justifyContent:"center"},children:y||(y=(0,w.jsx)(x.Button,{type:"submit",children:"Submit"}))})})]})}},v={"components/ComponentLinkHeader.tsx":b.Z};function f(){return(0,w.jsx)(h.Z,(0,L.Z)({},F))}},10700:function(o,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/form-layout",function(){return t(43599)}])}},function(o){o.O(0,[508,6371,7306,3936,4437,9774,2888,179],function(){return o(o.s=10700)}),_N_E=o.O()}]);