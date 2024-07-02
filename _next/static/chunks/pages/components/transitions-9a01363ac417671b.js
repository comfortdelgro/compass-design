(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{70052:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s,i,o=t(15393),r=t(16371),l=t.n(r),d=t(31549);function a(){return(0,d.jsxs)(o.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,d.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:s||(s=(0,d.jsx)(o.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,d.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,d.jsx)(o.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},11388:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var s,i,o,r,l={};t.r(l),t.d(l,{demoComponents:function(){return y},demos:function(){return v},docs:function(){return x},srcComponents:function(){return w}});var d=t(26098),a=t(24437),c=t(15393),h=t(44194),p=t.t(h,2),m=t(73804),f=t(31549),g=t(70052),x={description:"The Transitions component provides you various transition effects.",location:"/docs/data/components/transitions/transitions.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Transitions</h1><p class="description">The Transitions component provides you various transition effects.</p>\n\n',{component:"components/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Transitions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="fade">Fade<a aria-labelledby="fade" class="anchor-link" href="#fade" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"TransitionsFade.tsx"},'<h2 id="collapse">Collapse<a aria-labelledby="collapse" class="anchor-link" href="#collapse" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"TransitionsCollapse.tsx"},'<h2 id="zoom">Zoom<a aria-labelledby="zoom" class="anchor-link" href="#zoom" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"TransitionsZoom.tsx"},'<h2 id="slide">Slide<a aria-labelledby="slide" class="anchor-link" href="#slide" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"TransitionsSlide.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">effect</td>\n<td align="left"><code>&#39;collapse&#39; | &#39;fade&#39; | &#39;zoom&#39; | &#39;slide&#39;</code></td>\n<td align="left">-</td>\n<td align="left">The type of transition effect to apply to the child component.</td>\n</tr>\n<tr>\n<td align="left">show</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">-</td>\n<td align="left">Determines whether the child component should be shown or hidden with the specified transition effect.</td>\n</tr>\n<tr>\n<td align="left">speed</td>\n<td align="left"><code>number</code></td>\n<td align="left">-</td>\n<td align="left">The speed of the transition effect in seconds.</td>\n</tr>\n<tr>\n<td align="left">collapsedSize</td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>&#39;1000px&#39;</code></td>\n<td align="left">The size of the child component when it is collapsed or hidden.</td>\n</tr>\n<tr>\n<td align="left">orientation</td>\n<td align="left"><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td>\n<td align="left"><code>&#39;vertical&#39;</code></td>\n<td align="left">The direction of the collapse animation for the <code>&#39;collapse&#39;</code> effect.</td>\n</tr>\n<tr>\n<td align="left">slideDirection</td>\n<td align="left"><code>&#39;top&#39; | &#39;bottom&#39; | &#39;left&#39; | &#39;right&#39;</code></td>\n<td align="left"><code>&#39;bottom&#39;</code></td>\n<td align="left">The direction of the slide animation for the <code>&#39;slide&#39;</code> effect.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">-</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles for the <code>Transitions</code> component.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Fade",level:2,hash:"fade",children:[]},{text:"Collapse",level:2,hash:"collapse",children:[]},{text:"Zoom",level:2,hash:"zoom",children:[]},{text:"Slide",level:2,hash:"slide",children:[]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Transitions component",headers:{title:"React Transitions component",components:["Transitions"],hooks:[]}},v={"TransitionsFade.tsx":{module:"./TransitionsFade.tsx",raw:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Fade: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='fade' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='fade' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Fade\n",jsxPreview:"<Transitions effect='fade' show={show}>\n  <div style={style}>Basic</div>\n</Transitions>\n\n<Transitions effect='fade' show={show} speed={2}>\n  <div style={style}>Custom Speed: 2s</div>\n</Transitions>",moduleTS:"./TransitionsFade.tsx",rawTS:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Fade: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='fade' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='fade' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Fade\n"},"TransitionsCollapse.tsx":{module:"./TransitionsCollapse.tsx",raw:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Collapse: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show} collapsedSize='100px'>\n            <div style={{...style, alignItems: 'flex-start'}}>\n              Custom Collapsed Size: 100px. Default is 1000px\n            </div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show} orientation='horizontal'>\n            <div style={style}>Horizontal</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Collapse\n",jsxPreview:"<Transitions effect='collapse' show={show}>\n  <div style={style}>Basic</div>\n</Transitions>\n\n<Transitions effect='collapse' show={show} speed={2}>\n  <div style={style}>Custom Speed: 2s</div>\n</Transitions>\n\n<Transitions effect='collapse' show={show} collapsedSize='100px'>\n  <div style={style}>Custom Collapsed Size: 100px. Default is 1000px</div>\n</Transitions>\n\n<Transitions effect='collapse' show={show} orientation='horizontal'>\n  <div style={style}>Horizontal</div>\n</Transitions>",moduleTS:"./TransitionsCollapse.tsx",rawTS:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Collapse: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show} collapsedSize='100px'>\n            <div style={{...style, alignItems: 'flex-start'}}>\n              Custom Collapsed Size: 100px. Default is 1000px\n            </div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='collapse' show={show} orientation='horizontal'>\n            <div style={style}>Horizontal</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Collapse\n"},"TransitionsZoom.tsx":{module:"./TransitionsZoom.tsx",raw:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Zoom: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='zoom' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='zoom' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Zoom\n",jsxPreview:"<Transitions effect='zoom' show={show}>\n  <div style={style}>Basic</div>\n</Transitions>\n\n<Transitions effect='zoom' show={show} speed={2}>\n  <div style={style}>Custom Speed: 2s</div>\n</Transitions>",moduleTS:"./TransitionsZoom.tsx",rawTS:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Zoom: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='zoom' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='zoom' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Zoom\n"},"TransitionsSlide.tsx":{module:"./TransitionsSlide.tsx",raw:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Slide: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='slide' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='slide' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions\n            effect='slide'\n            show={show}\n            speed={2}\n            slideDirection='top'\n          >\n            <div style={style}>Custom Direction: top</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Slide\n",jsxPreview:"<Transitions effect='slide' show={show}>\n  <div style={style}>Basic</div>\n</Transitions>\n\n<Transitions effect='slide' show={show} speed={2}>\n  <div style={style}>Custom Speed: 2s</div>\n</Transitions>\n\n<Transitions\n  effect='slide'\n  show={show}\n  speed={2}\n  slideDirection='top'\n>\n  <div style={style}>Custom Direction: top</div>\n</Transitions>",moduleTS:"./TransitionsSlide.tsx",rawTS:"import {Toggle, Transitions} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst Slide: React.FC = () => {\n  const [show, setShow] = React.useState(false)\n\n  const style: React.CSSProperties = {\n    boxSizing: 'border-box',\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    height: '10rem',\n    width: '10rem',\n    backgroundColor: '#ADD8E6',\n    borderRadius: '0.5rem',\n    border: '1px solid black',\n    fontWeight: '600',\n    padding: '4px',\n  }\n\n  return (\n    <>\n      <div\n        style={{\n          display: 'flex',\n          gap: '1rem',\n          alignItems: 'center',\n        }}\n      >\n        <h4>Click here to show and hide the transitions:</h4>\n        <Toggle size='sm' onChange={(status) => setShow(status)} />\n      </div>\n\n      <div style={{display: 'flex', flexWrap: 'wrap', gap: '32px'}}>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='slide' show={show}>\n            <div style={style}>Basic</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions effect='slide' show={show} speed={2}>\n            <div style={style}>Custom Speed: 2s</div>\n          </Transitions>\n        </div>\n        <div style={{height: '10rem', width: '10rem'}}>\n          <Transitions\n            effect='slide'\n            show={show}\n            speed={2}\n            slideDirection='top'\n          >\n            <div style={style}>Custom Direction: top</div>\n          </Transitions>\n        </div>\n      </div>\n    </>\n  )\n}\n\nexport default Slide\n"}};v.scope={process:{},import:{"@comfortdelgro/react-compass":c,react:p}};var y={"./TransitionsFade.tsx":function(){var e=h.useState(!1),n=(0,m.Z)(e,2),t=n[0],i=n[1],o={boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",height:"10rem",width:"10rem",backgroundColor:"#ADD8E6",borderRadius:"0.5rem",border:"1px solid black",fontWeight:"600",padding:"4px"};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[s||(s=(0,f.jsx)("h4",{children:"Click here to show and hide the transitions:"})),(0,f.jsx)(c.Toggle,{size:"sm",onChange:function(e){return i(e)}})]}),(0,f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"fade",show:t,children:(0,f.jsx)("div",{style:o,children:"Basic"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"fade",show:t,speed:2,children:(0,f.jsx)("div",{style:o,children:"Custom Speed: 2s"})})})]})]})},"./TransitionsCollapse.tsx":function(){var e=h.useState(!1),n=(0,m.Z)(e,2),t=n[0],s=n[1],o={boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",height:"10rem",width:"10rem",backgroundColor:"#ADD8E6",borderRadius:"0.5rem",border:"1px solid black",fontWeight:"600",padding:"4px"};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[i||(i=(0,f.jsx)("h4",{children:"Click here to show and hide the transitions:"})),(0,f.jsx)(c.Toggle,{size:"sm",onChange:function(e){return s(e)}})]}),(0,f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"collapse",show:t,children:(0,f.jsx)("div",{style:o,children:"Basic"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"collapse",show:t,speed:2,children:(0,f.jsx)("div",{style:o,children:"Custom Speed: 2s"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"collapse",show:t,collapsedSize:"100px",children:(0,f.jsx)("div",{style:(0,d.Z)((0,d.Z)({},o),{},{alignItems:"flex-start"}),children:"Custom Collapsed Size: 100px. Default is 1000px"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"collapse",show:t,orientation:"horizontal",children:(0,f.jsx)("div",{style:o,children:"Horizontal"})})})]})]})},"./TransitionsZoom.tsx":function(){var e=h.useState(!1),n=(0,m.Z)(e,2),t=n[0],s=n[1],i={boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",height:"10rem",width:"10rem",backgroundColor:"#ADD8E6",borderRadius:"0.5rem",border:"1px solid black",fontWeight:"600",padding:"4px"};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[o||(o=(0,f.jsx)("h4",{children:"Click here to show and hide the transitions:"})),(0,f.jsx)(c.Toggle,{size:"sm",onChange:function(e){return s(e)}})]}),(0,f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"zoom",show:t,children:(0,f.jsx)("div",{style:i,children:"Basic"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"zoom",show:t,speed:2,children:(0,f.jsx)("div",{style:i,children:"Custom Speed: 2s"})})})]})]})},"./TransitionsSlide.tsx":function(){var e=h.useState(!1),n=(0,m.Z)(e,2),t=n[0],s=n[1],i={boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",height:"10rem",width:"10rem",backgroundColor:"#ADD8E6",borderRadius:"0.5rem",border:"1px solid black",fontWeight:"600",padding:"4px"};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[r||(r=(0,f.jsx)("h4",{children:"Click here to show and hide the transitions:"})),(0,f.jsx)(c.Toggle,{size:"sm",onChange:function(e){return s(e)}})]}),(0,f.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"slide",show:t,children:(0,f.jsx)("div",{style:i,children:"Basic"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"slide",show:t,speed:2,children:(0,f.jsx)("div",{style:i,children:"Custom Speed: 2s"})})}),(0,f.jsx)("div",{style:{height:"10rem",width:"10rem"},children:(0,f.jsx)(c.Transitions,{effect:"slide",show:t,speed:2,slideDirection:"top",children:(0,f.jsx)("div",{style:i,children:"Custom Direction: top"})})})]})]})}},w={"components/ComponentLinkHeader.tsx":g.Z};function u(){return(0,f.jsx)(a.Z,(0,d.Z)({},l))}},9116:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/transitions",function(){return t(11388)}])}},function(e){e.O(0,[508,6371,7306,3936,4437,9774,2888,179],function(){return e(e.s=9116)}),_N_E=e.O()}]);