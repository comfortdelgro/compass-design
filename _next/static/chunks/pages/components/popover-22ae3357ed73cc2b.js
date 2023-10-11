(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7380],{74710:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var o,r,s=t(38443),i=t(54284),c=t.n(i),l=t(97458);function a(){return(0,l.jsxs)(s.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(c(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,l.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(c(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,l.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},91057:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return b}});var o,r={};t.r(r),t.d(r,{demoComponents:function(){return v},demos:function(){return g},docs:function(){return h},srcComponents:function(){return x}});var s=t(80208),i=t(34706),c=t(94335),l=t(12174),a=t(52983),d=t.t(a,2),p=t(97458),f=function(){return(0,p.jsx)("div",{className:"popover-content",style:{background:"#ffffff",border:"1px solid #b63f3f",borderRadius:"5px",width:"100px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},children:"Content"})},m=["bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],u=t(74710),h={en:{description:"When you want to show a content on above and anchor with an element when user click on it, just use this component follow this guidelines.",location:"/docs/data/components/popover/popover.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Popover</h1><p class="description">When you want to show a content on above and anchor with an element when user click on it, just use this component follow this guidelines.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Popover<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Popover <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/popover\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="default">Default<a aria-labelledby="default" class="anchor-link" href="#default" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"Popover.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">anchor</td>\n<td align="left"><code>React.ReactNode</code></td>\n<td align="left"><code>-</code></td>\n<td align="left">Element that when you click on to show the Popover</td>\n</tr>\n<tr>\n<td align="left">isOpen</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>-</code></td>\n<td align="left">Let Popover content open</td>\n</tr>\n<tr>\n<td align="left">offset</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>10</code></td>\n<td align="left">Distance from anchor to popover content</td>\n</tr>\n<tr>\n<td align="left">direction</td>\n<td align="left"><code>bottom-right</code> <code>bottom-left</code> <code>bottom-center</code> <code>top-right</code> <code>top-left</code> <code>top-center</code></td>\n<td align="left"><code>bottom-right</code></td>\n<td align="left">Direction of Popover content</td>\n</tr>\n<tr>\n<td align="left"><code>css </code></td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left">onClose</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left"></td>\n<td align="left">Callback to close popover</td>\n</tr>\n<tr>\n<td align="left">isFloatingPortal</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, it would render the popover outside of the current React Tree, just like createPortal from React</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Default",level:3,hash:"default"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Popover component",headers:{title:"React Popover component",components:["Popover"],hooks:[]}}},g={"Popover.tsx":{module:"./Popover.tsx",raw:"import Button from '@comfortdelgro/react-compass/button'\nimport Popover, {PopoverDirection} from '@comfortdelgro/react-compass/popover'\nimport {useState} from 'react'\n\nconst SamplePopover = () => {\n  return (\n    <div\n      className='popover-content'\n      style={{\n        background: '#ffffff',\n        border: '1px solid #b63f3f',\n        borderRadius: '5px',\n        width: '100px',\n        height: '50px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n      }}\n    >\n      Content\n    </div>\n  )\n}\n\nconst directions: PopoverDirection[] = [\n  'bottom',\n  'bottom-end',\n  'bottom-start',\n  'left',\n  'left-end',\n  'left-start',\n  'right',\n  'right-end',\n  'right-start',\n  'top',\n  'top-end',\n  'top-start',\n]\n\nconst Popovers = () => {\n  const [isOpen1, setIsOpen1] = useState(false)\n  const [currentDirection, setCurrentDirection] =\n    useState<PopoverDirection>('bottom')\n\n  const [currentOffset, setCurrentOffset] = useState(10)\n\n  const openPopover1 = () => {\n    setIsOpen1(true)\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          justifyContent: 'start',\n          alignItems: 'center',\n        }}\n      >\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: '0.2rem',\n            margin: '0.5rem',\n          }}\n        >\n          <label\n            style={{fontSize: '0.85em', color: 'red'}}\n            htmlFor='directionSelect'\n          >\n            Direction\n          </label>\n          <select\n            id='directionSelect'\n            onChange={(e) => {\n              setCurrentDirection(e.target.value as PopoverDirection)\n            }}\n            style={{width: '6rem', height: '1.8rem'}}\n          >\n            {directions.map((direction) => {\n              return (\n                <option key={direction} value={direction}>\n                  {direction}\n                </option>\n              )\n            })}\n          </select>\n        </div>\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: '0.2rem',\n          }}\n        >\n          <label\n            style={{fontSize: '0.85em', color: 'red'}}\n            htmlFor='offsetInput'\n          >\n            Offset\n          </label>\n          <input\n            id='offsetInput'\n            style={{width: '6rem', height: '1.8rem'}}\n            type='number'\n            value={currentOffset}\n            onChange={(e) => setCurrentOffset(Number(e.target.value))}\n          />\n        </div>\n      </div>\n\n      <div\n        style={{\n          width: '100%',\n          height: '100%',\n          border: '1px solid black',\n          borderRadius: '5px',\n          padding: '10rem 10rem',\n          marginTop: '0.5rem',\n        }}\n      >\n        <Popover\n          isOpen={isOpen1}\n          anchor={\n            <Button variant='secondary' onPress={openPopover1}>\n              Click me!\n            </Button>\n          }\n          offset={currentOffset}\n          direction={currentDirection}\n          onClose={() => {\n            setIsOpen1(false)\n          }}\n        >\n          <SamplePopover />\n        </Popover>\n      </div>\n    </>\n  )\n}\n\nexport default Popovers\n",jsxPreview:"<Popover\r\n    isOpen={isOpen1}\r\n    anchor={\r\n    <Button variant='secondary' onPress={openPopover1}>\r\n        Click me!\r\n    </Button>\r\n    }\r\n    offset={currentOffset}\r\n    direction={currentDirection}\r\n    onClose={() => {\r\n    setIsOpen1(false)\r\n    }}\r\n>\r\n    <div\r\n      className='popover-content'\r\n      style={{\r\n        background: '#ffffff',\r\n        border: '1px solid #b63f3f',\r\n        borderRadius: '5px',\r\n        width: '100px',\r\n        height: '50px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n      }}\r\n    >\r\n      Content\r\n    </div>\r\n</Popover>",moduleTS:"./Popover.tsx",rawTS:"import Button from '@comfortdelgro/react-compass/button'\nimport Popover, {PopoverDirection} from '@comfortdelgro/react-compass/popover'\nimport {useState} from 'react'\n\nconst SamplePopover = () => {\n  return (\n    <div\n      className='popover-content'\n      style={{\n        background: '#ffffff',\n        border: '1px solid #b63f3f',\n        borderRadius: '5px',\n        width: '100px',\n        height: '50px',\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n      }}\n    >\n      Content\n    </div>\n  )\n}\n\nconst directions: PopoverDirection[] = [\n  'bottom',\n  'bottom-end',\n  'bottom-start',\n  'left',\n  'left-end',\n  'left-start',\n  'right',\n  'right-end',\n  'right-start',\n  'top',\n  'top-end',\n  'top-start',\n]\n\nconst Popovers = () => {\n  const [isOpen1, setIsOpen1] = useState(false)\n  const [currentDirection, setCurrentDirection] =\n    useState<PopoverDirection>('bottom')\n\n  const [currentOffset, setCurrentOffset] = useState(10)\n\n  const openPopover1 = () => {\n    setIsOpen1(true)\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          justifyContent: 'start',\n          alignItems: 'center',\n        }}\n      >\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: '0.2rem',\n            margin: '0.5rem',\n          }}\n        >\n          <label\n            style={{fontSize: '0.85em', color: 'red'}}\n            htmlFor='directionSelect'\n          >\n            Direction\n          </label>\n          <select\n            id='directionSelect'\n            onChange={(e) => {\n              setCurrentDirection(e.target.value as PopoverDirection)\n            }}\n            style={{width: '6rem', height: '1.8rem'}}\n          >\n            {directions.map((direction) => {\n              return (\n                <option key={direction} value={direction}>\n                  {direction}\n                </option>\n              )\n            })}\n          </select>\n        </div>\n        <div\n          style={{\n            display: 'flex',\n            flexDirection: 'column',\n            gap: '0.2rem',\n          }}\n        >\n          <label\n            style={{fontSize: '0.85em', color: 'red'}}\n            htmlFor='offsetInput'\n          >\n            Offset\n          </label>\n          <input\n            id='offsetInput'\n            style={{width: '6rem', height: '1.8rem'}}\n            type='number'\n            value={currentOffset}\n            onChange={(e) => setCurrentOffset(Number(e.target.value))}\n          />\n        </div>\n      </div>\n\n      <div\n        style={{\n          width: '100%',\n          height: '100%',\n          border: '1px solid black',\n          borderRadius: '5px',\n          padding: '10rem 10rem',\n          marginTop: '0.5rem',\n        }}\n      >\n        <Popover\n          isOpen={isOpen1}\n          anchor={\n            <Button variant='secondary' onPress={openPopover1}>\n              Click me!\n            </Button>\n          }\n          offset={currentOffset}\n          direction={currentDirection}\n          onClose={() => {\n            setIsOpen1(false)\n          }}\n        >\n          <SamplePopover />\n        </Popover>\n      </div>\n    </>\n  )\n}\n\nexport default Popovers\n"}};g.scope={process:{},import:{"@comfortdelgro/react-compass/button":c,"@comfortdelgro/react-compass/popover":l,react:d}};var v={"./Popover.tsx":function(){var n=(0,a.useState)(!1),e=n[0],t=n[1],r=(0,a.useState)("bottom"),s=r[0],i=r[1],d=(0,a.useState)(10),u=d[0],h=d[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{style:{display:"flex",gap:"1rem",justifyContent:"start",alignItems:"center"},children:[(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem",margin:"0.5rem"},children:[(0,p.jsx)("label",{style:{fontSize:"0.85em",color:"red"},htmlFor:"directionSelect",children:"Direction"}),(0,p.jsx)("select",{id:"directionSelect",onChange:function(n){i(n.target.value)},style:{width:"6rem",height:"1.8rem"},children:m.map(function(n){return(0,p.jsx)("option",{value:n,children:n},n)})})]}),(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"0.2rem"},children:[(0,p.jsx)("label",{style:{fontSize:"0.85em",color:"red"},htmlFor:"offsetInput",children:"Offset"}),(0,p.jsx)("input",{id:"offsetInput",style:{width:"6rem",height:"1.8rem"},type:"number",value:u,onChange:function(n){return h(Number(n.target.value))}})]})]}),(0,p.jsx)("div",{style:{width:"100%",height:"100%",border:"1px solid black",borderRadius:"5px",padding:"10rem 10rem",marginTop:"0.5rem"},children:(0,p.jsx)(l.default,{isOpen:e,anchor:(0,p.jsx)(c.default,{variant:"secondary",onPress:function(){t(!0)},children:"Click me!"}),offset:u,direction:s,onClose:function(){t(!1)},children:o||(o=(0,p.jsx)(f,{}))})})]})}},x={"components/common/ComponentLinkHeader.tsx":u.Z};function b(){return(0,p.jsx)(i.Z,(0,s.Z)({},r))}},3498:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/popover",function(){return t(91057)}])}},function(n){n.O(0,[4308,7633,6471,9102,4706,9774,2888,179],function(){return n(n.s=3498)}),_N_E=n.O()}]);