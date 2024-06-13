(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8865],{93279:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var o,a,s=r(15393),t=r(16371),l=r.n(t),d=r(31549);function c(){return(0,d.jsxs)(s.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,d.jsx)(l(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,d.jsx)(s.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,d.jsx)(l(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,d.jsx)(s.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},57723:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return A}});var o,a,s,t,l,d,c,i,u,g,m,h,p,b,f,v,B={};r.r(B),r.d(B,{demoComponents:function(){return k},demos:function(){return L},docs:function(){return V},srcComponents:function(){return z}});var P=r(26098),x=r(43866),C=r(15393),S=r(44194),y=r.t(S,2),$=r(31549),w=r(93279),V={en:{description:"Provides the accessibility implementation for a progress bar component. Progress bars show either determinate or indeterminate progress of an operation over time.",location:"/docs/data/components/progress-bar/progress-bar.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Progress Bar</h1><p class="description">Provides the accessibility implementation for a progress bar component. Progress bars show either determinate or indeterminate progress of an operation over time.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>ProgressBar<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="usage">Usage<a aria-labelledby="usage" class="anchor-link" href="#usage" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2>',{demo:"ProgressBarBasic.tsx"},'<h3 id="variant">Variant<a aria-labelledby="variant" class="anchor-link" href="#variant" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ProgressBarVariants.tsx"},'<h3 id="size">Size<a aria-labelledby="size" class="anchor-link" href="#size" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ProgressBarSizes.tsx"},'<h3 id="color">Color<a aria-labelledby="color" class="anchor-link" href="#color" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ProgressBarColors.tsx"},'<h3 id="loading-state">Loading State<a aria-labelledby="loading-state" class="anchor-link" href="#loading-state" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ProgressBarLoading.tsx"},'<h2 id="component-props">Component Props<a aria-labelledby="component-props" class="anchor-link" href="#component-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left"><code>css</code></td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n<tr>\n<td align="left"><code>variant</code></td>\n<td align="left"><code>&quot;normal&quot;</code> | <code>&quot;rounded&quot;</code></td>\n<td align="left"><code>&quot;normal&quot;</code></td>\n<td align="left">Whether presentation is indeterminate when progress isn&#39;t known.</td>\n</tr>\n<tr>\n<td align="left"><code>size</code></td>\n<td align="left"><code>&quot;sm&quot;</code> | <code>&quot;md&quot;</code> | <code>&quot;lg&quot;</code> | <code>&quot;xl&quot;</code></td>\n<td align="left"><code>&quot;lg&quot;</code></td>\n<td align="left">Whether presentation is indeterminate when progress isn&#39;t known.</td>\n</tr>\n<tr>\n<td align="left"><code>label</code></td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>rightLabel</code></td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>color</code></td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>&quot;blue&quot;</code> <small>- $info #009EDA</small></td>\n<td align="left">Color visualization for the current value.</td>\n</tr>\n<tr>\n<td align="left"><code>barColor</code></td>\n<td align="left"><code>string</code></td>\n<td align="left"><code>&quot;$gray30&quot;</code> <small>- #EDEBE9</small></td>\n<td align="left">Color of the progress bar.</td>\n</tr>\n<tr>\n<td align="left"><code>value</code></td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0</code></td>\n<td align="left">Current progress value.</td>\n</tr>\n<tr>\n<td align="left"><code>minValue</code></td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0</code></td>\n<td align="left">The lower numeric bound of the measured range. This must be less than <code>maxValue</code>.</td>\n</tr>\n<tr>\n<td align="left"><code>maxValue</code></td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>100</code></td>\n<td align="left">The upper numeric bound of the measured range. This must be greater than <code>minValue</code>.</td>\n</tr>\n<tr>\n<td align="left"><code>onComplete</code></td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left"></td>\n</tr>\n<tr>\n<td align="left"><code>loading</code></td>\n<td align="left"><code>boolean</code> | <code>&quot;stripes&quot;</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">Loading state</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Usage",level:2,hash:"usage",children:[{text:"Variant",level:3,hash:"variant"},{text:"Size",level:3,hash:"size"},{text:"Color",level:3,hash:"color"},{text:"Loading State",level:3,hash:"loading-state"}]},{text:"Component Props",level:2,hash:"component-props",children:[]}],title:"React Progress Bar component",headers:{title:"React Progress Bar component",components:["Progress Bar"],hooks:[]}}},L={"ProgressBarBasic.tsx":{module:"./ProgressBarBasic.tsx",raw:"import {ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarDocs() {\n  return <ProgressBar value={20} label='Label' rightLabel='Right label' />\n}\n",jsxPreview:"<ProgressBar value={20} label='Label' rightLabel='Right label' />",moduleTS:"./ProgressBarBasic.tsx",rawTS:"import {ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarDocs() {\n  return <ProgressBar value={20} label='Label' rightLabel='Right label' />\n}\n"},"ProgressBarVariants.tsx":{module:"./ProgressBarVariants.tsx",raw:"import {Column, ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarVariantDocs() {\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar value={20} variant='normal' label='normal' />\n      <ProgressBar value={20} variant='rounded' label='rounded' />\n    </Column>\n  )\n}\n",jsxPreview:"<ProgressBar value={20} label='normal' />\n<ProgressBar value={20} variant='rounded' label='rounded' />",moduleTS:"./ProgressBarVariants.tsx",rawTS:"import {Column, ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarVariantDocs() {\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar value={20} variant='normal' label='normal' />\n      <ProgressBar value={20} variant='rounded' label='rounded' />\n    </Column>\n  )\n}\n"},"ProgressBarSizes.tsx":{module:"./ProgressBarSizes.tsx",raw:"import {Column, ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarSizeDocs() {\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar value={20} size='sm' label='sm' />\n      <ProgressBar value={20} size='md' label='md' />\n      <ProgressBar value={20} size='lg' label='lg - default' />\n      <ProgressBar value={20} size='xl' label='xl' />\n    </Column>\n  )\n}\n",jsxPreview:"<ProgressBar size='sm' />",moduleTS:"./ProgressBarSizes.tsx",rawTS:"import {Column, ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarSizeDocs() {\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar value={20} size='sm' label='sm' />\n      <ProgressBar value={20} size='md' label='md' />\n      <ProgressBar value={20} size='lg' label='lg - default' />\n      <ProgressBar value={20} size='xl' label='xl' />\n    </Column>\n  )\n}\n"},"ProgressBarColors.tsx":{module:"./ProgressBarColors.tsx",raw:"import {\n  Button,\n  Column,\n  Divider,\n  ProgressBar,\n  Row,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {useEffect, useState} from 'react'\n\nconst INIT_VALUE = 5\nconst MAX_VALUE = 100\n\nexport default function ProgressBarColorDocs() {\n  const [startProcess, setStartProcess] = useState(false)\n  const [progressValue, setProgressValue] = useState(INIT_VALUE)\n  const [isCompleted, setIsCompleted] = useState(false)\n\n  const handleReset = () => {\n    setStartProcess(false)\n    setProgressValue(INIT_VALUE)\n    setIsCompleted(false)\n  }\n\n  useEffect(() => {\n    if (!startProcess) {\n      return\n    }\n\n    const timer = setInterval(() => {\n      setProgressValue((currValue) => {\n        if (currValue === MAX_VALUE) {\n          clearInterval(timer)\n          return MAX_VALUE\n        }\n\n        return Math.min(\n          currValue + Math.floor(Math.random() * (MAX_VALUE / 4)),\n          MAX_VALUE,\n        )\n      })\n    }, 200)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [startProcess])\n\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar value={20} color='blue' label='blue' />\n      <ProgressBar value={40} color='green' label='green' />\n      <ProgressBar\n        value={20}\n        label='color: $dangerShades | barColor: $FECACA'\n        color='$dangerShades'\n        barColor='#fecaca'\n      />\n      <ProgressBar\n        value={60}\n        label='color: $cdgBlue | barColor: $blueShades10'\n        color='$cdgBlue'\n        barColor='$blueShades10'\n      />\n\n      <Divider css={{marginBlock: '$8'}} />\n\n      <ProgressBar\n        value={progressValue}\n        maxValue={MAX_VALUE}\n        size='md'\n        label='H5'\n        rightLabel='color: $blueShades80 | barColor: $blueShades10 | size: md'\n        color='$blueShades80'\n        barColor='$blueShades10'\n        onComplete={() => setIsCompleted(true)}\n      />\n\n      <Row css={{alignItems: 'unset', height: '$8'}}>\n        {isCompleted ? (\n          <>\n            <Typography.Label>Completed</Typography.Label>\n            <Button type='button' onClick={() => handleReset()}>\n              Reset\n            </Button>\n          </>\n        ) : (\n          <Typography.Label>\n            {Math.round((progressValue / MAX_VALUE) * 100)}%\n          </Typography.Label>\n        )}\n\n        {isCompleted || startProcess || (\n          <Button\n            type='button'\n            variant='secondary'\n            onClick={() => setStartProcess(true)}\n          >\n            Start\n          </Button>\n        )}\n      </Row>\n    </Column>\n  )\n}\n",jsxPreview:"<ProgressBar label='H5' color='$blueShades80' barColor='$blueShades10' />\n",moduleTS:"./ProgressBarColors.tsx",rawTS:"import {\n  Button,\n  Column,\n  Divider,\n  ProgressBar,\n  Row,\n  Typography,\n} from '@comfortdelgro/react-compass'\nimport {useEffect, useState} from 'react'\n\nconst INIT_VALUE = 5\nconst MAX_VALUE = 100\n\nexport default function ProgressBarColorDocs() {\n  const [startProcess, setStartProcess] = useState(false)\n  const [progressValue, setProgressValue] = useState(INIT_VALUE)\n  const [isCompleted, setIsCompleted] = useState(false)\n\n  const handleReset = () => {\n    setStartProcess(false)\n    setProgressValue(INIT_VALUE)\n    setIsCompleted(false)\n  }\n\n  useEffect(() => {\n    if (!startProcess) {\n      return\n    }\n\n    const timer = setInterval(() => {\n      setProgressValue((currValue) => {\n        if (currValue === MAX_VALUE) {\n          clearInterval(timer)\n          return MAX_VALUE\n        }\n\n        return Math.min(\n          currValue + Math.floor(Math.random() * (MAX_VALUE / 4)),\n          MAX_VALUE,\n        )\n      })\n    }, 200)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [startProcess])\n\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar value={20} color='blue' label='blue' />\n      <ProgressBar value={40} color='green' label='green' />\n      <ProgressBar\n        value={20}\n        label='color: $dangerShades | barColor: $FECACA'\n        color='$dangerShades'\n        barColor='#fecaca'\n      />\n      <ProgressBar\n        value={60}\n        label='color: $cdgBlue | barColor: $blueShades10'\n        color='$cdgBlue'\n        barColor='$blueShades10'\n      />\n\n      <Divider css={{marginBlock: '$8'}} />\n\n      <ProgressBar\n        value={progressValue}\n        maxValue={MAX_VALUE}\n        size='md'\n        label='H5'\n        rightLabel='color: $blueShades80 | barColor: $blueShades10 | size: md'\n        color='$blueShades80'\n        barColor='$blueShades10'\n        onComplete={() => setIsCompleted(true)}\n      />\n\n      <Row css={{alignItems: 'unset', height: '$8'}}>\n        {isCompleted ? (\n          <>\n            <Typography.Label>Completed</Typography.Label>\n            <Button type='button' onClick={() => handleReset()}>\n              Reset\n            </Button>\n          </>\n        ) : (\n          <Typography.Label>\n            {Math.round((progressValue / MAX_VALUE) * 100)}%\n          </Typography.Label>\n        )}\n\n        {isCompleted || startProcess || (\n          <Button\n            type='button'\n            variant='secondary'\n            onClick={() => setStartProcess(true)}\n          >\n            Start\n          </Button>\n        )}\n      </Row>\n    </Column>\n  )\n}\n"},"ProgressBarLoading.tsx":{module:"./ProgressBarLoading.tsx",raw:"import {Column, Divider, ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarLoadingDocs() {\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar variant='rounded' label='Default' loading />\n      <ProgressBar\n        variant='rounded'\n        label='Stripes'\n        color='$blueShades80'\n        barColor='$blueShades10'\n        loading='stripes'\n      />\n\n      <Divider />\n      <ProgressBar\n        variant='rounded'\n        label='With color'\n        color='$dangerShades'\n        barColor='#fecaca'\n        loading\n      />\n    </Column>\n  )\n}\n",jsxPreview:"<ProgressBar loading />\n<ProgressBar loading='stripes' />",moduleTS:"./ProgressBarLoading.tsx",rawTS:"import {Column, Divider, ProgressBar} from '@comfortdelgro/react-compass'\n\nexport default function ProgressBarLoadingDocs() {\n  return (\n    <Column css={{gap: '$4'}}>\n      <ProgressBar variant='rounded' label='Default' loading />\n      <ProgressBar\n        variant='rounded'\n        label='Stripes'\n        color='$blueShades80'\n        barColor='$blueShades10'\n        loading='stripes'\n      />\n\n      <Divider />\n      <ProgressBar\n        variant='rounded'\n        label='With color'\n        color='$dangerShades'\n        barColor='#fecaca'\n        loading\n      />\n    </Column>\n  )\n}\n"}};L.scope={process:{},import:{"@comfortdelgro/react-compass":C,react:y}};var k={"./ProgressBarBasic.tsx":function(){return o||(o=(0,$.jsx)(C.ProgressBar,{value:20,label:"Label",rightLabel:"Right label"}))},"./ProgressBarVariants.tsx":function(){return(0,$.jsxs)(C.Column,{css:{gap:"$4"},children:[a||(a=(0,$.jsx)(C.ProgressBar,{value:20,variant:"normal",label:"normal"})),s||(s=(0,$.jsx)(C.ProgressBar,{value:20,variant:"rounded",label:"rounded"}))]})},"./ProgressBarSizes.tsx":function(){return(0,$.jsxs)(C.Column,{css:{gap:"$4"},children:[t||(t=(0,$.jsx)(C.ProgressBar,{value:20,size:"sm",label:"sm"})),l||(l=(0,$.jsx)(C.ProgressBar,{value:20,size:"md",label:"md"})),d||(d=(0,$.jsx)(C.ProgressBar,{value:20,size:"lg",label:"lg - default"})),c||(c=(0,$.jsx)(C.ProgressBar,{value:20,size:"xl",label:"xl"}))]})},"./ProgressBarColors.tsx":function(){var e=(0,S.useState)(!1),n=e[0],r=e[1],o=(0,S.useState)(5),a=o[0],s=o[1],t=(0,S.useState)(!1),l=t[0],d=t[1],c=function(){r(!1),s(5),d(!1)};return(0,S.useEffect)(function(){if(n){var e=setInterval(function(){s(function(n){return 100===n?(clearInterval(e),100):Math.min(n+Math.floor(25*Math.random()),100)})},200);return function(){clearInterval(e)}}},[n]),(0,$.jsxs)(C.Column,{css:{gap:"$4"},children:[i||(i=(0,$.jsx)(C.ProgressBar,{value:20,color:"blue",label:"blue"})),u||(u=(0,$.jsx)(C.ProgressBar,{value:40,color:"green",label:"green"})),g||(g=(0,$.jsx)(C.ProgressBar,{value:20,label:"color: $dangerShades | barColor: $FECACA",color:"$dangerShades",barColor:"#fecaca"})),m||(m=(0,$.jsx)(C.ProgressBar,{value:60,label:"color: $cdgBlue | barColor: $blueShades10",color:"$cdgBlue",barColor:"$blueShades10"})),(0,$.jsx)(C.Divider,{css:{marginBlock:"$8"}}),(0,$.jsx)(C.ProgressBar,{value:a,maxValue:100,size:"md",label:"H5",rightLabel:"color: $blueShades80 | barColor: $blueShades10 | size: md",color:"$blueShades80",barColor:"$blueShades10",onComplete:function(){return d(!0)}}),(0,$.jsxs)(C.Row,{css:{alignItems:"unset",height:"$8"},children:[l?(0,$.jsxs)($.Fragment,{children:[h||(h=(0,$.jsx)(C.Typography.Label,{children:"Completed"})),(0,$.jsx)(C.Button,{type:"button",onClick:function(){return c()},children:"Reset"})]}):(0,$.jsxs)(C.Typography.Label,{children:[Math.round(a/100*100),"%"]}),l||n||(0,$.jsx)(C.Button,{type:"button",variant:"secondary",onClick:function(){return r(!0)},children:"Start"})]})]})},"./ProgressBarLoading.tsx":function(){return(0,$.jsxs)(C.Column,{css:{gap:"$4"},children:[p||(p=(0,$.jsx)(C.ProgressBar,{variant:"rounded",label:"Default",loading:!0})),b||(b=(0,$.jsx)(C.ProgressBar,{variant:"rounded",label:"Stripes",color:"$blueShades80",barColor:"$blueShades10",loading:"stripes"})),f||(f=(0,$.jsx)(C.Divider,{})),v||(v=(0,$.jsx)(C.ProgressBar,{variant:"rounded",label:"With color",color:"$dangerShades",barColor:"#fecaca",loading:!0}))]})}},z={"components/common/ComponentLinkHeader.tsx":w.Z};function A(){return(0,$.jsx)(x.Z,(0,P.Z)({},B))}},47690:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress-bar",function(){return r(57723)}])}},function(e){e.O(0,[4308,9813,5675,3866,9774,2888,179],function(){return e(e.s=47690)}),_N_E=e.O()}]);