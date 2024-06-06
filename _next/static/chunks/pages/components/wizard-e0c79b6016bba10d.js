(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2046],{99223:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r,i,a=t(15393),l=t(92274),d=t.n(l),o=t(97458);function s(){return(0,o.jsxs)(a.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,o.jsx)(d(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:r||(r=(0,o.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,o.jsx)(d(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,o.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},54342:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return g}});var r,i,a,l={};t.r(l),t.d(l,{demoComponents:function(){return f},demos:function(){return u},docs:function(){return p},srcComponents:function(){return m}});var d=t(26098),o=t(916),s=t(15393),c=t(97458),h=t(99223),p={en:{description:"Using for display stepper.",location:"/docs/data/components/wizard/wizard.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Wizard</h1><p class="description">Using for display stepper.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Wizard<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="content">Content<a aria-labelledby="content" class="anchor-link" href="#content" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><p>The TooltipTrigger accepts exactly two children: the element which triggers the display of the Tooltip and the Tooltip itself. The trigger element must be the first child passed into the TooltipTrigger. All content should be internationalized.</p>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"WizardBasic.tsx"},'<h3 id="error-steps">Error steps<a aria-labelledby="error-steps" class="anchor-link" href="#error-steps" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"WizardError.tsx"},'<h3 id="custom-styling">Custom styling<a aria-labelledby="custom-styling" class="anchor-link" href="#custom-styling" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"WizardCustom.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="wizard">Wizard<a aria-labelledby="wizard" class="anchor-link" href="#wizard" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">items?</td>\n<td align="left"><code>string[]</code></td>\n<td align="left">-</td>\n<td align="left">List of display contennt below the stepper</td>\n</tr>\n<tr>\n<td align="left">currentStep</td>\n<td align="left"><code>number</code></td>\n<td align="left">1</td>\n<td align="left">Current active step, start from 1</td>\n</tr>\n<tr>\n<td align="left">erroredSteps</td>\n<td align="left"><code>number[]</code></td>\n<td align="left">-</td>\n<td align="left">List of error step</td>\n</tr>\n<tr>\n<td align="left">onStepClick</td>\n<td align="left"><code>(n: number) =&gt; void</code></td>\n<td align="left">-</td>\n<td align="left">Handler when click on step, return index of step</td>\n</tr>\n<tr>\n<td align="left">css?</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n<h3 id="wizard-item">Wizard.Item<a aria-labelledby="wizard-item" class="anchor-link" href="#wizard-item" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">title</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Text displayed below the stepper</td>\n</tr>\n<tr>\n<td align="left">children</td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">1</td>\n<td align="left">Something to display the stepper</td>\n</tr>\n<tr>\n<td align="left">isErrored</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">Error state of the item</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Content",level:2,hash:"content",children:[]},{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Error steps",level:3,hash:"error-steps"},{text:"Custom styling",level:3,hash:"custom-styling"}]},{text:"Props",level:2,hash:"props",children:[{text:"Wizard",level:3,hash:"wizard"},{text:"Wizard.Item",level:3,hash:"wizard-item"}]}],title:"React Wizard component",headers:{title:"React Wizard component",components:["Wizard"],hooks:[]}}},u={"WizardBasic.tsx":{module:"./WizardBasic.tsx",raw:"import {Wizard} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return <Wizard items={['Step 1', 'Step 2', 'Step 3']} currentStep={1} />\n}\n\nexport default BasicExample\n",jsxPreview:"<Wizard items={['Step 1', 'Step 2', 'Step 3']} currentStep={1} />",moduleTS:"./WizardBasic.tsx",rawTS:"import {Wizard} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return <Wizard items={['Step 1', 'Step 2', 'Step 3']} currentStep={1} />\n}\n\nexport default BasicExample\n"},"WizardError.tsx":{module:"./WizardError.tsx",raw:"import {Wizard} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <Wizard\n      items={['Value1', 'Value2', 'Value3', 'Value4']}\n      erroredSteps={[2]}\n      currentStep={3}\n    />\n  )\n}\n\nexport default BasicExample\n",jsxPreview:"<Wizard\n    items={['Value1', 'Value2', 'Value3', 'Value4']}\n    erroredSteps={[2]}\n    currentStep={3}\n/>",moduleTS:"./WizardError.tsx",rawTS:"import {Wizard} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <Wizard\n      items={['Value1', 'Value2', 'Value3', 'Value4']}\n      erroredSteps={[2]}\n      currentStep={3}\n    />\n  )\n}\n\nexport default BasicExample\n"},"WizardCustom.tsx":{module:"./WizardCustom.tsx",raw:"import {Wizard} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <Wizard currentStep={5}>\n      <Wizard.Item title='Value1'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#0142AF',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#FFFFFF',\n          }}\n        >\n          1\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value2'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#99b3df',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#0142AF',\n          }}\n        >\n          <svg width='10' height='8' viewBox='0 0 10 8'>\n            <path\n              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\n              fill='currentColor'\n            />\n          </svg>\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value3'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#0142AF',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n          }}\n        />\n      </Wizard.Item>\n      <Wizard.Item title='Value4'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#99b3df',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#0142AF',\n          }}\n        >\n          <svg width='10' height='8' viewBox='0 0 10 8'>\n            <path\n              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\n              fill='currentColor'\n            />\n          </svg>\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value5'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#0142AF',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#fff',\n          }}\n        >\n          <svg width='10' height='8' viewBox='0 0 10 8'>\n            <path\n              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\n              fill='currentColor'\n            />\n          </svg>\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value6'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#e6ecf7',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#1d3a6b',\n            fontWeight: 500,\n          }}\n        >\n          6\n        </div>\n      </Wizard.Item>\n    </Wizard>\n  )\n}\n\nexport default BasicExample\n",jsxPreview:"<Wizard currentStep={5}>\r\n  <Wizard.Item title='Value1'>\r\n    <div\r\n      style={{\r\n        width: 20,\r\n        height: 20,\r\n        background: '#0142AF',\r\n        borderRadius: '99999px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        fontSize: '0.75rem',\r\n        color: '#FFFFFF',\r\n      }}\r\n    >\r\n      1\r\n    </div>\r\n  </Wizard.Item>\r\n  <Wizard.Item title='Value2'>\r\n    <div\r\n      style={{\r\n        width: 20,\r\n        height: 20,\r\n        background: '#99b3df',\r\n        borderRadius: '99999px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        fontSize: '0.75rem',\r\n        color: '#0142AF',\r\n      }}\r\n    >\r\n      <svg width='10' height='8' viewBox='0 0 10 8'>\r\n        <path\r\n          d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\r\n          fill='currentColor'\r\n        />\r\n      </svg>\r\n    </div>\r\n  </Wizard.Item>\r\n  <Wizard.Item title='Value3'>\r\n    <div\r\n      style={{\r\n        width: 20,\r\n        height: 20,\r\n        background: '#0142AF',\r\n        borderRadius: '99999px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        fontSize: '0.75rem',\r\n      }}\r\n    />\r\n  </Wizard.Item>\r\n  <Wizard.Item title='Value4'>\r\n    <div\r\n      style={{\r\n        width: 20,\r\n        height: 20,\r\n        background: '#99b3df',\r\n        borderRadius: '99999px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        fontSize: '0.75rem',\r\n        color: '#0142AF',\r\n      }}\r\n    >\r\n      <svg width='10' height='8' viewBox='0 0 10 8'>\r\n        <path\r\n          d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\r\n          fill='currentColor'\r\n        />\r\n      </svg>\r\n    </div>\r\n  </Wizard.Item>\r\n  <Wizard.Item title='Value5'>\r\n    <div\r\n      style={{\r\n        width: 20,\r\n        height: 20,\r\n        background: '#0142AF',\r\n        borderRadius: '99999px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        fontSize: '0.75rem',\r\n        color: '#fff',\r\n      }}\r\n    >\r\n      <svg width='10' height='8' viewBox='0 0 10 8'>\r\n        <path\r\n          d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\r\n          fill='currentColor'\r\n        />\r\n      </svg>\r\n    </div>\r\n  </Wizard.Item>\r\n  <Wizard.Item title='Value6'>\r\n    <div\r\n      style={{\r\n        width: 20,\r\n        height: 20,\r\n        background: '#e6ecf7',\r\n        borderRadius: '99999px',\r\n        display: 'flex',\r\n        justifyContent: 'center',\r\n        alignItems: 'center',\r\n        fontSize: '0.75rem',\r\n        color: '#1d3a6b',\r\n        fontWeight: 500,\r\n      }}\r\n    >\r\n      6\r\n    </div>\r\n  </Wizard.Item>\r\n</Wizard>",moduleTS:"./WizardCustom.tsx",rawTS:"import {Wizard} from '@comfortdelgro/react-compass'\n\nfunction BasicExample() {\n  return (\n    <Wizard currentStep={5}>\n      <Wizard.Item title='Value1'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#0142AF',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#FFFFFF',\n          }}\n        >\n          1\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value2'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#99b3df',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#0142AF',\n          }}\n        >\n          <svg width='10' height='8' viewBox='0 0 10 8'>\n            <path\n              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\n              fill='currentColor'\n            />\n          </svg>\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value3'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#0142AF',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n          }}\n        />\n      </Wizard.Item>\n      <Wizard.Item title='Value4'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#99b3df',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#0142AF',\n          }}\n        >\n          <svg width='10' height='8' viewBox='0 0 10 8'>\n            <path\n              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\n              fill='currentColor'\n            />\n          </svg>\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value5'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#0142AF',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#fff',\n          }}\n        >\n          <svg width='10' height='8' viewBox='0 0 10 8'>\n            <path\n              d='M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z'\n              fill='currentColor'\n            />\n          </svg>\n        </div>\n      </Wizard.Item>\n      <Wizard.Item title='Value6'>\n        <div\n          style={{\n            width: 20,\n            height: 20,\n            background: '#e6ecf7',\n            borderRadius: '99999px',\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            fontSize: '0.75rem',\n            color: '#1d3a6b',\n            fontWeight: 500,\n          }}\n        >\n          6\n        </div>\n      </Wizard.Item>\n    </Wizard>\n  )\n}\n\nexport default BasicExample\n"}};u.scope={process:{},import:{"@comfortdelgro/react-compass":s}};var f={"./WizardBasic.tsx":function(){return(0,c.jsx)(s.Wizard,{items:["Step 1","Step 2","Step 3"],currentStep:1})},"./WizardError.tsx":function(){return(0,c.jsx)(s.Wizard,{items:["Value1","Value2","Value3","Value4"],erroredSteps:[2],currentStep:3})},"./WizardCustom.tsx":function(){return(0,c.jsxs)(s.Wizard,{currentStep:5,children:[(0,c.jsx)(s.Wizard.Item,{title:"Value1",children:(0,c.jsx)("div",{style:{width:20,height:20,background:"#0142AF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#FFFFFF"},children:"1"})}),(0,c.jsx)(s.Wizard.Item,{title:"Value2",children:(0,c.jsx)("div",{style:{width:20,height:20,background:"#99b3df",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#0142AF"},children:r||(r=(0,c.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:(0,c.jsx)("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}))})}),(0,c.jsx)(s.Wizard.Item,{title:"Value3",children:(0,c.jsx)("div",{style:{width:20,height:20,background:"#0142AF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem"}})}),(0,c.jsx)(s.Wizard.Item,{title:"Value4",children:(0,c.jsx)("div",{style:{width:20,height:20,background:"#99b3df",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#0142AF"},children:i||(i=(0,c.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:(0,c.jsx)("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}))})}),(0,c.jsx)(s.Wizard.Item,{title:"Value5",children:(0,c.jsx)("div",{style:{width:20,height:20,background:"#0142AF",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#fff"},children:a||(a=(0,c.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:(0,c.jsx)("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}))})}),(0,c.jsx)(s.Wizard.Item,{title:"Value6",children:(0,c.jsx)("div",{style:{width:20,height:20,background:"#e6ecf7",borderRadius:"99999px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"0.75rem",color:"#1d3a6b",fontWeight:500},children:"6"})})]})}},m={"components/common/ComponentLinkHeader.tsx":h.Z};function g(){return(0,c.jsx)(o.Z,(0,d.Z)({},l))}},30001:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/wizard",function(){return t(54342)}])}},function(n){n.O(0,[4308,6555,47,916,9774,2888,179],function(){return n(n.s=30001)}),_N_E=n.O()}]);