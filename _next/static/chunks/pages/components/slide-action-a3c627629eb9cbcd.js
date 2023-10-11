(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8114],{74710:function(e,n,o){"use strict";o.d(n,{Z:function(){return s}});var t,i,r=o(38443),c=o(54284),a=o.n(c),l=o(97458);function s(){return(0,l.jsxs)(r.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(a(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,l.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(a(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,l.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},43495:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return q}});var t,i,r,c,a,l,s,d,p,u,m,f,g,h={};o.r(h),o.d(h,{demoComponents:function(){return E},demos:function(){return D},docs:function(){return j},srcComponents:function(){return H}});var y=o(80208),S=o(34706),b=o(38443),w=o(52983),v=o.t(w,2),x=o(46769),C=o(16799),A=o(97458),k=["#475569","#ea580c","#059669","$cdgBlue","#0891b2","#7c3aed","#e11d48"],T=(0,b.styled)("div",{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"$2"}),B=(0,b.styled)("button",{height:"$10",width:"$20",fontWeight:"$semibold",color:"$whiteText",fontSize:"$label2",border:"none",borderRadius:"$md",opacity:.8,transition:"opacity .2s ease",cursor:"pointer","&:hover":{opacity:1}}),$=o(74710),j={en:{description:"A component that requires user to swipe to confirm an action. Use for important actions, such as purchase order, privacy setting changes, delete something, etc.",location:"/docs/data/components/slide-action/slide-action.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Slide Action | Swiper</h1><p class="description">A component that requires user to swipe to confirm an action. Use for important actions, such as purchase order, privacy setting changes, delete something, etc.\n</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>SlideAction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> SlideAction <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/slide-action\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="usage">Usage<a aria-labelledby="usage" class="anchor-link" href="#usage" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideAction.tsx"},'<h3 id="effects">Effects<a aria-labelledby="effects" class="anchor-link" href="#effects" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideEffect.tsx"},'<h3 id="icon">Icon<a aria-labelledby="icon" class="anchor-link" href="#icon" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideActionIcon.tsx"},'<h3 id="color">Color<a aria-labelledby="color" class="anchor-link" href="#color" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideColorful.tsx"},'<h3 id="compact">Compact<a aria-labelledby="compact" class="anchor-link" href="#compact" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"SlideCompact.tsx"},'<h3 id="allowswipeafterend">allowSwipeAfterEnd<a aria-labelledby="allowswipeafterend" class="anchor-link" href="#allowswipeafterend" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><p>Avoid enabling this flag as much as possible. If you wanna reset the component state, please use <code>reset()</code> function that shipped with <code>onSwipeEnd</code> instead.</p>\n<h4>⚠️ Accessibility considerations: Act unintentionally</h4><p>Since an action is a successful action when users dragged/swiped this component all the way to the end.</p>\n<p>On that state, if users tap &amp; release without swiping, this component will assume that it is an successful or confirmatory action. As a result, <code>onSwipeEnd</code> will be triggered.</p>\n',{demo:"SlideActionBehavior.tsx"},'<h2 id="component-props">Component Props<a aria-labelledby="component-props" class="anchor-link" href="#component-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>children</code></td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">Will be consider as a label</td>\n</tr>\n<tr>\n<td align="left"><code>css</code></td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td align="left"><code>icon</code></td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">Double arrow right</td>\n<td align="left">Icon for the swiper</td>\n</tr>\n<tr>\n<td align="left"><code>color</code></td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>$dangerShades</code> - <code>#E31617</code></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>label</code></td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>&#39;Slide&#39;</code></td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>labelType</code></td>\n<td align="left"><code>&#39;default&#39;</code> | <code>&#39;slide&#39;</code></td>\n<td align="left"><code>&#39;default&#39;</code></td>\n<td align="left">Label effect</td>\n</tr>\n<tr>\n<td align="left"><code>slideColor</code></td>\n<td align="left"><code>&#39;mono&#39;</code> | <code>&#39;gradient&#39;</code></td>\n<td align="left"><code>&#39;mono&#39;</code></td>\n<td align="left">Color type of the background that left behind by the slide button</td>\n</tr>\n<tr>\n<td align="left"><code>slideType</code></td>\n<td align="left"><code>&#39;static&#39;</code> | <code>&#39;slide&#39;</code></td>\n<td align="left"><code>&#39;slide&#39;</code></td>\n<td align="left">The left behind background color&#39;s effect</td>\n</tr>\n<tr>\n<td align="left"><code>onSwipeEnd</code></td>\n<td align="left"><code>(reset: () =&gt; void) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Trigger when users swiped all the way to the end.<br/><small>Call the <code>reset()</code> function to reset the component status.</small></td>\n</tr>\n<tr>\n<td align="left"><code>onChange</code></td>\n<td align="left"><code>(isSuccess: boolean) =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Trigger when component&#39;s status changes</td>\n</tr>\n<tr>\n<td align="left"><code>compact</code></td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Compact size</td>\n</tr>\n<tr>\n<td align="left"><code>allowSwipeAfterEnd</code></td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Read the section <strong>allowSwipeAfterEnd</strong> above for detail</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Usage",level:2,hash:"usage",children:[{text:"Basic",level:3,hash:"basic"},{text:"Effects",level:3,hash:"effects"},{text:"Icon",level:3,hash:"icon"},{text:"Color",level:3,hash:"color"},{text:"Compact",level:3,hash:"compact"},{text:"allowSwipeAfterEnd",level:3,hash:"allowswipeafterend"}]},{text:"Component Props",level:2,hash:"component-props",children:[]}],title:"React Slide Action component",headers:{title:"React Slide Action component",components:["Slide Action"],hooks:[]}}},D={"SlideAction.tsx":{module:"./SlideAction.tsx",raw:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionDocs() {\n  const [slideStatus, setSlideStatus] = useState(false)\n\n  return (\n    <Column>\n      <Typography.Body variant='body2'>\n        When users swiped all the way to the end, we can call it a successful or\n        confirmatory action.\n      </Typography.Body>\n      <Typography.Body variant='body3' css={{color: '$grayShades60'}}>\n        The component below will be reset 1000ms after that.\n      </Typography.Body>\n\n      <SlideAction\n        label='Swipe to purchase'\n        onChange={(isSuccess) => setSlideStatus(isSuccess)}\n        onSwipeEnd={(reset) => {\n          console.log('success')\n          // do sth when users swiped to the end\n          setTimeout(() => {\n            reset()\n          }, 1000)\n        }}\n      />\n\n      <Typography.Body variant='body3'>\n        Status: <strong>{`${slideStatus}`}</strong>\n      </Typography.Body>\n    </Column>\n  )\n}\n",jsxPreview:"import {SlideAction} from '@comfortdelgro/react-compass'\n\n<SlideAction\n  label='Swipe to purchase'\n  onSwipeEnd={async (reset) => {\n    await purchaseOrder()\n    reset()\n  }}\n/>\n",moduleTS:"./SlideAction.tsx",rawTS:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionDocs() {\n  const [slideStatus, setSlideStatus] = useState(false)\n\n  return (\n    <Column>\n      <Typography.Body variant='body2'>\n        When users swiped all the way to the end, we can call it a successful or\n        confirmatory action.\n      </Typography.Body>\n      <Typography.Body variant='body3' css={{color: '$grayShades60'}}>\n        The component below will be reset 1000ms after that.\n      </Typography.Body>\n\n      <SlideAction\n        label='Swipe to purchase'\n        onChange={(isSuccess) => setSlideStatus(isSuccess)}\n        onSwipeEnd={(reset) => {\n          console.log('success')\n          // do sth when users swiped to the end\n          setTimeout(() => {\n            reset()\n          }, 1000)\n        }}\n      />\n\n      <Typography.Body variant='body3'>\n        Status: <strong>{`${slideStatus}`}</strong>\n      </Typography.Body>\n    </Column>\n  )\n}\n"},"SlideActionIcon.tsx":{module:"./SlideActionIcon.tsx",raw:"import {SlideAction} from '@comfortdelgro/react-compass'\nimport {faPowerOff} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nexport default function SliderActionIconDocs() {\n  return (\n    <SlideAction\n      css={{\n        border: 'none',\n        backgroundColor: 'rgba(61, 127, 118, 0.5)',\n      }}\n      color='#fff'\n      icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}\n      labelType='slide'\n    >\n      Slide to power off\n    </SlideAction>\n  )\n}\n",jsxPreview:"<SlideAction\n  icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}\n/>",moduleTS:"./SlideActionIcon.tsx",rawTS:"import {SlideAction} from '@comfortdelgro/react-compass'\nimport {faPowerOff} from '@fortawesome/free-solid-svg-icons'\nimport {FontAwesomeIcon} from '@fortawesome/react-fontawesome'\n\nexport default function SliderActionIconDocs() {\n  return (\n    <SlideAction\n      css={{\n        border: 'none',\n        backgroundColor: 'rgba(61, 127, 118, 0.5)',\n      }}\n      color='#fff'\n      icon={<FontAwesomeIcon icon={faPowerOff} color='red' size='lg' />}\n      labelType='slide'\n    >\n      Slide to power off\n    </SlideAction>\n  )\n}\n"},"SlideColorful.tsx":{module:"./SlideColorful.tsx",raw:"import {\n  Column,\n  Divider,\n  SlideAction,\n  styled,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\n// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose\nconst slideBgColors = [\n  '#475569',\n  '#ea580c',\n  '#059669',\n  '$cdgBlue',\n  '#0891b2',\n  '#7c3aed',\n  '#e11d48',\n]\n\nexport default function SliderColorfulDocs() {\n  const [colorBg, setColorBg] = useState(slideBgColors[0] || '$cdgBlue')\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Default color</Typography.Header>\n      <code>$dangerShades - #E31617</code>\n      <SlideAction css={{marginBlock: '$4'}}>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim\n        sint labore nesciunt\n      </SlideAction>\n\n      <Divider />\n\n      <Typography.Header variant='header4'>More colors \uD83C\uDFA8</Typography.Header>\n      <StyledColorPickerWrapper css={{marginBottom: '$4'}}>\n        {slideBgColors.map((color) => (\n          <StyledColorPicker\n            key={color}\n            title={color}\n            css={{backgroundColor: color}}\n            type='button'\n            onClick={() => setColorBg(color)}\n          />\n        ))}\n\n        <StyledColorPicker\n          type='button'\n          css={{\n            background:\n              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',\n          }}\n          onClick={() =>\n            setColorBg(`#${Math.floor(Math.random() * 16777215).toString(16)}`)\n          }\n        >\n          Random\n        </StyledColorPicker>\n      </StyledColorPickerWrapper>\n\n      <SlideAction color={colorBg}>Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: '$4'}} color={colorBg} slideType='static'>\n        Fadein background\n      </SlideAction>\n\n      <SlideAction labelType='slide' color={colorBg}>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non\n        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur\n        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa\n        deleniti!\n      </SlideAction>\n\n      <Divider css={{marginBlock: '$4'}} />\n\n      <Typography.Header variant='header4'>\n        Default gradient background\n      </Typography.Header>\n      <SlideAction color='#e11d48' slideColor='gradient'>\n        Slide to see bg color change\n      </SlideAction>\n    </Column>\n  )\n}\n\nconst StyledColorPickerWrapper = styled('div', {\n  display: 'flex',\n  alignItems: 'center',\n  flexWrap: 'wrap',\n  gap: '$2',\n})\n\nconst StyledColorPicker = styled('button', {\n  height: '$10',\n  width: '$20',\n  fontWeight: '$semibold',\n  color: '$whiteText',\n  fontSize: '$label2',\n\n  border: 'none',\n  borderRadius: '$md',\n  opacity: 0.8,\n  transition: 'opacity .2s ease',\n  cursor: 'pointer',\n\n  '&:hover': {\n    opacity: 1,\n  },\n})\n",jsxPreview:"<SlideAction color='$cdgBlue' />\n",moduleTS:"./SlideColorful.tsx",rawTS:"import {\n  Column,\n  Divider,\n  SlideAction,\n  styled,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\n// Slate, Orange, Emerald, CdgBlue, Cyan, Violet, Rose\nconst slideBgColors = [\n  '#475569',\n  '#ea580c',\n  '#059669',\n  '$cdgBlue',\n  '#0891b2',\n  '#7c3aed',\n  '#e11d48',\n]\n\nexport default function SliderColorfulDocs() {\n  const [colorBg, setColorBg] = useState(slideBgColors[0] || '$cdgBlue')\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Default color</Typography.Header>\n      <code>$dangerShades - #E31617</code>\n      <SlideAction css={{marginBlock: '$4'}}>\n        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim\n        sint labore nesciunt\n      </SlideAction>\n\n      <Divider />\n\n      <Typography.Header variant='header4'>More colors \uD83C\uDFA8</Typography.Header>\n      <StyledColorPickerWrapper css={{marginBottom: '$4'}}>\n        {slideBgColors.map((color) => (\n          <StyledColorPicker\n            key={color}\n            title={color}\n            css={{backgroundColor: color}}\n            type='button'\n            onClick={() => setColorBg(color)}\n          />\n        ))}\n\n        <StyledColorPicker\n          type='button'\n          css={{\n            background:\n              'linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)',\n          }}\n          onClick={() =>\n            setColorBg(`#${Math.floor(Math.random() * 16777215).toString(16)}`)\n          }\n        >\n          Random\n        </StyledColorPicker>\n      </StyledColorPickerWrapper>\n\n      <SlideAction color={colorBg}>Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: '$4'}} color={colorBg} slideType='static'>\n        Fadein background\n      </SlideAction>\n\n      <SlideAction labelType='slide' color={colorBg}>\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non\n        ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur\n        ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa\n        deleniti!\n      </SlideAction>\n\n      <Divider css={{marginBlock: '$4'}} />\n\n      <Typography.Header variant='header4'>\n        Default gradient background\n      </Typography.Header>\n      <SlideAction color='#e11d48' slideColor='gradient'>\n        Slide to see bg color change\n      </SlideAction>\n    </Column>\n  )\n}\n\nconst StyledColorPickerWrapper = styled('div', {\n  display: 'flex',\n  alignItems: 'center',\n  flexWrap: 'wrap',\n  gap: '$2',\n})\n\nconst StyledColorPicker = styled('button', {\n  height: '$10',\n  width: '$20',\n  fontWeight: '$semibold',\n  color: '$whiteText',\n  fontSize: '$label2',\n\n  border: 'none',\n  borderRadius: '$md',\n  opacity: 0.8,\n  transition: 'opacity .2s ease',\n  cursor: 'pointer',\n\n  '&:hover': {\n    opacity: 1,\n  },\n})\n"},"SlideEffect.tsx":{module:"./SlideEffect.tsx",raw:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\n\nexport default function SliderEffectDocs() {\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Slide effect</Typography.Header>\n      <SlideAction color='#475569'>Default: Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: '$4'}} color='#475569' slideType='static'>\n        Static fade-in background\n      </SlideAction>\n\n      <Typography.Header variant='header4'>Label effect</Typography.Header>\n      <SlideAction color='#475569' labelType='slide'>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,\n        temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a\n        soluta, veniam ut id porro adipisci molestias cumque perspiciatis\n        asperiores facilis voluptatem.\n      </SlideAction>\n    </Column>\n  )\n}\n",jsxPreview:"<SlideAction />\n<SlideAction slideType='static' />\n<SlideAction labelType='slide' />",moduleTS:"./SlideEffect.tsx",rawTS:"import {Column, SlideAction, Typography} from '@comfortdelgro/react-compass'\n\nexport default function SliderEffectDocs() {\n  return (\n    <Column>\n      <Typography.Header variant='header4'>Slide effect</Typography.Header>\n      <SlideAction color='#475569'>Default: Slide background</SlideAction>\n\n      <SlideAction css={{marginBlock: '$4'}} color='#475569' slideType='static'>\n        Static fade-in background\n      </SlideAction>\n\n      <Typography.Header variant='header4'>Label effect</Typography.Header>\n      <SlideAction color='#475569' labelType='slide'>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,\n        temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a\n        soluta, veniam ut id porro adipisci molestias cumque perspiciatis\n        asperiores facilis voluptatem.\n      </SlideAction>\n    </Column>\n  )\n}\n"},"SlideCompact.tsx":{module:"./SlideCompact.tsx",raw:"import {Column, SlideAction} from '@comfortdelgro/react-compass'\n\nexport default function SliderCompactDocs() {\n  return (\n    <Column>\n      <SlideAction compact>\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab,\n        dicta consequatur harum iusto cumque, sunt quia dolor, adipisci commodi\n        repellendus perferendis iste. Soluta placeat dolores reiciendis\n        distinctio temporibus nisi!\n      </SlideAction>\n    </Column>\n  )\n}\n",jsxPreview:"<SlideAction compact />\n",moduleTS:"./SlideCompact.tsx",rawTS:"import {Column, SlideAction} from '@comfortdelgro/react-compass'\n\nexport default function SliderCompactDocs() {\n  return (\n    <Column>\n      <SlideAction compact>\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab,\n        dicta consequatur harum iusto cumque, sunt quia dolor, adipisci commodi\n        repellendus perferendis iste. Soluta placeat dolores reiciendis\n        distinctio temporibus nisi!\n      </SlideAction>\n    </Column>\n  )\n}\n"},"SlideActionBehavior.tsx":{module:"./SlideActionBehavior.tsx",raw:"import {SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionBehaviorDocs() {\n  const [countSuccess, setCountSuccess] = useState(0)\n\n  return (\n    <>\n      <Typography.Body variant='body3' css={{marginBottom: '$4'}}>\n        Successful / confirmatory action count:{' '}\n        <strong>{`${countSuccess}`}</strong>\n      </Typography.Body>\n\n      <SlideAction\n        color='#475569'\n        allowSwipeAfterEnd\n        onSwipeEnd={() => setCountSuccess((currState) => currState + 1)}\n      >\n        Can swipe after success\n      </SlideAction>\n    </>\n  )\n}\n",jsxPreview:"<SlideAction allowSwipeAfterEnd />\n",moduleTS:"./SlideActionBehavior.tsx",rawTS:"import {SlideAction, Typography} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nexport default function SliderActionBehaviorDocs() {\n  const [countSuccess, setCountSuccess] = useState(0)\n\n  return (\n    <>\n      <Typography.Body variant='body3' css={{marginBottom: '$4'}}>\n        Successful / confirmatory action count:{' '}\n        <strong>{`${countSuccess}`}</strong>\n      </Typography.Body>\n\n      <SlideAction\n        color='#475569'\n        allowSwipeAfterEnd\n        onSwipeEnd={() => setCountSuccess((currState) => currState + 1)}\n      >\n        Can swipe after success\n      </SlideAction>\n    </>\n  )\n}\n"}};D.scope={process:{},import:{"@comfortdelgro/react-compass":b,react:v,"@fortawesome/free-solid-svg-icons":x,"@fortawesome/react-fontawesome":C}};var E={"./SlideAction.tsx":function(){var e=(0,w.useState)(!1),n=e[0],o=e[1];return(0,A.jsxs)(b.Column,{children:[t||(t=(0,A.jsx)(b.Typography.Body,{variant:"body2",children:"When users swiped all the way to the end, we can call it a successful or confirmatory action."})),(0,A.jsx)(b.Typography.Body,{variant:"body3",css:{color:"$grayShades60"},children:"The component below will be reset 1000ms after that."}),(0,A.jsx)(b.SlideAction,{label:"Swipe to purchase",onChange:function(e){return o(e)},onSwipeEnd:function(e){console.log("success"),setTimeout(function(){e()},1e3)}}),(0,A.jsxs)(b.Typography.Body,{variant:"body3",children:["Status: ",(0,A.jsx)("strong",{children:"".concat(n)})]})]})},"./SlideActionIcon.tsx":function(){return(0,A.jsx)(b.SlideAction,{css:{border:"none",backgroundColor:"rgba(61, 127, 118, 0.5)"},color:"#fff",icon:i||(i=(0,A.jsx)(C.FontAwesomeIcon,{icon:x.faPowerOff,color:"red",size:"lg"})),labelType:"slide",children:"Slide to power off"})},"./SlideColorful.tsx":function(){var e=(0,w.useState)(k[0]||"$cdgBlue"),n=e[0],o=e[1];return(0,A.jsxs)(b.Column,{children:[r||(r=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Default color"})),c||(c=(0,A.jsx)("code",{children:"$dangerShades - #E31617"})),(0,A.jsx)(b.SlideAction,{css:{marginBlock:"$4"},children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque enim sint labore nesciunt"}),a||(a=(0,A.jsx)(b.Divider,{})),l||(l=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"More colors \uD83C\uDFA8"})),(0,A.jsxs)(T,{css:{marginBottom:"$4"},children:[k.map(function(e){return(0,A.jsx)(B,{title:e,css:{backgroundColor:e},type:"button",onClick:function(){return o(e)}},e)}),(0,A.jsx)(B,{type:"button",css:{background:"linear-gradient(to right top, #fff6f2, #ffd4c1, #ffb194, #f98d6b, #f16645, #dc5135, #c63a26, #b12118, #8d2318, #6a2117, #481d15, #281713)"},onClick:function(){return o("#".concat(Math.floor(16777215*Math.random()).toString(16)))},children:"Random"})]}),(0,A.jsx)(b.SlideAction,{color:n,children:"Slide background"}),(0,A.jsx)(b.SlideAction,{css:{marginBlock:"$4"},color:n,slideType:"static",children:"Fadein background"}),(0,A.jsx)(b.SlideAction,{labelType:"slide",color:n,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa non ipsum, pariatur in eveniet neque dolores sequi, numquam aspernatur ratione veritatis nemo earum maxime aut distinctio repellat dolorum ipsa deleniti!"}),(0,A.jsx)(b.Divider,{css:{marginBlock:"$4"}}),s||(s=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Default gradient background"})),d||(d=(0,A.jsx)(b.SlideAction,{color:"#e11d48",slideColor:"gradient",children:"Slide to see bg color change"}))]})},"./SlideEffect.tsx":function(){return(0,A.jsxs)(b.Column,{children:[p||(p=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Slide effect"})),u||(u=(0,A.jsx)(b.SlideAction,{color:"#475569",children:"Default: Slide background"})),(0,A.jsx)(b.SlideAction,{css:{marginBlock:"$4"},color:"#475569",slideType:"static",children:"Static fade-in background"}),m||(m=(0,A.jsx)(b.Typography.Header,{variant:"header4",children:"Label effect"})),f||(f=(0,A.jsx)(b.SlideAction,{color:"#475569",labelType:"slide",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus voluptatibus! Dolorum tenetur in distinctio quaerat, hic a soluta, veniam ut id porro adipisci molestias cumque perspiciatis asperiores facilis voluptatem."}))]})},"./SlideCompact.tsx":function(){return g||(g=(0,A.jsx)(b.Column,{children:(0,A.jsx)(b.SlideAction,{compact:!0,children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ab, dicta consequatur harum iusto cumque, sunt quia dolor, adipisci commodi repellendus perferendis iste. Soluta placeat dolores reiciendis distinctio temporibus nisi!"})}))},"./SlideActionBehavior.tsx":function(){var e=(0,w.useState)(0),n=e[0],o=e[1];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(b.Typography.Body,{variant:"body3",css:{marginBottom:"$4"},children:["Successful / confirmatory action count:"," ",(0,A.jsx)("strong",{children:"".concat(n)})]}),(0,A.jsx)(b.SlideAction,{color:"#475569",allowSwipeAfterEnd:!0,onSwipeEnd:function(){return o(function(e){return e+1})},children:"Can swipe after success"})]})}},H={"components/common/ComponentLinkHeader.tsx":$.Z};function q(){return(0,A.jsx)(S.Z,(0,y.Z)({},h))}},26929:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/slide-action",function(){return o(43495)}])}},function(e){e.O(0,[4308,7633,6471,9102,4706,9774,2888,179],function(){return e(e.s=26929)}),_N_E=e.O()}]);