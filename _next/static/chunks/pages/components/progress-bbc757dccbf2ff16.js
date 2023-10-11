(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1321],{74710:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t,a,i=n(38443),s=n(54284),o=n.n(s),l=n(97458);function c(){return(0,l.jsxs)(i.Flexbox,{css:{marginBottom:"$4"},children:[(0,l.jsx)(o(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:t||(t=(0,l.jsx)(i.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,l.jsx)(o(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,l.jsx)(i.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},98829:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return T}});var t,a,i,s,o,l,c,d,u,f,m,g,p,h,v,x={};n.r(x),n.d(x,{demoComponents:function(){return j},demos:function(){return z},docs:function(){return I},srcComponents:function(){return R}});var P=n(80208),b=n(34706),C=n(13409),y=n(52983),L=n.t(y,2),S=n(97458),k=n(20634),w=n(74710),I={en:{description:"Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.",location:"/docs/data/components/progress/progress.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Progress</h1><p class="description">Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Progress<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<p>or</p>\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> Progress <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass/progress\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="circular">Circular<a aria-labelledby="circular" class="anchor-link" href="#circular" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="circular-indeterminate">Circular indeterminate<a aria-labelledby="circular-indeterminate" class="anchor-link" href="#circular-indeterminate" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CircularIndeterminate.tsx"},'<h3 id="circular-determinate">Circular determinate<a aria-labelledby="circular-determinate" class="anchor-link" href="#circular-determinate" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CircularDeterminate.tsx"},'<h3 id="circular-color">Circular color<a aria-labelledby="circular-color" class="anchor-link" href="#circular-color" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CircularColor.tsx"},'<h3 id="circular-size">Circular size<a aria-labelledby="circular-size" class="anchor-link" href="#circular-size" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"CircularSize.tsx"},'<h2 id="linear">Linear<a aria-labelledby="linear" class="anchor-link" href="#linear" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="linear-indeterminate">Linear Indeterminate<a aria-labelledby="linear-indeterminate" class="anchor-link" href="#linear-indeterminate" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LinearIndeterminate.tsx"},'<h3 id="linear-determinate">Linear Determinate<a aria-labelledby="linear-determinate" class="anchor-link" href="#linear-determinate" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LinearDeterminate.tsx"},'<h3 id="linear-buffer">Linear Buffer<a aria-labelledby="linear-buffer" class="anchor-link" href="#linear-buffer" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LinearBuffer.tsx"},'<h3 id="linear-color">Linear Color<a aria-labelledby="linear-color" class="anchor-link" href="#linear-color" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LinearColor.tsx"},'<h3 id="linear-size">Linear Size<a aria-labelledby="linear-size" class="anchor-link" href="#linear-size" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LinearSize.tsx"},'<h3 id="linear-rounded">Linear Rounded<a aria-labelledby="linear-rounded" class="anchor-link" href="#linear-rounded" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"LinearRounded.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="progress-circular-props">Progress.Circular Props:<a aria-labelledby="progress-circular-props" class="anchor-link" href="#progress-circular-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">size</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>40</code></td>\n<td align="left">The size of the component</td>\n</tr>\n<tr>\n<td align="left">color</td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left">The color of the component</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0</code></td>\n<td align="left">The value of the progress indicator for the determinate variant. Value between 0 and 100.</td>\n</tr>\n<tr>\n<td align="left">thickness</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>3.6</code></td>\n<td align="left">The thickness of the circle.</td>\n</tr>\n<tr>\n<td align="left">disableShrink</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">If true, the shrink animation is disabled. This only works if variant is indeterminate.</td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>determinate</code>| <code>indeterminate</code></td>\n<td align="left"><code>indeterminate</code></td>\n<td align="left">The variant to use. Use indeterminate when there is no progress value.</td>\n</tr>\n</tbody></table>\n<h3 id="progress-linear-props">Progress.Linear Props:<a aria-labelledby="progress-linear-props" class="anchor-link" href="#progress-linear-props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">size</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>4</code></td>\n<td align="left">The size of the component</td>\n</tr>\n<tr>\n<td align="left">color</td>\n<td align="left"><code>string</code></td>\n<td align="left">—</td>\n<td align="left">The color of the component</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0</code></td>\n<td align="left">The value of the progress indicator for the determinate variant. Value between 0 and 100.</td>\n</tr>\n<tr>\n<td align="left">rounded</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">The border radius of lines.</td>\n</tr>\n<tr>\n<td align="left">valueBuffer</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0</code></td>\n<td align="left">The value for the buffer variant. Value between 0 and 100.</td>\n</tr>\n<tr>\n<td align="left">variant</td>\n<td align="left"><code>determinate</code>| <code>indeterminate</code>| <code>buffer</code></td>\n<td align="left"><code>indeterminate</code></td>\n<td align="left">The variant to use. Use indeterminate when there is no progress value.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Circular",level:2,hash:"circular",children:[{text:"Circular indeterminate",level:3,hash:"circular-indeterminate"},{text:"Circular determinate",level:3,hash:"circular-determinate"},{text:"Circular color",level:3,hash:"circular-color"},{text:"Circular size",level:3,hash:"circular-size"}]},{text:"Linear",level:2,hash:"linear",children:[{text:"Linear Indeterminate",level:3,hash:"linear-indeterminate"},{text:"Linear Determinate",level:3,hash:"linear-determinate"},{text:"Linear Buffer",level:3,hash:"linear-buffer"},{text:"Linear Color",level:3,hash:"linear-color"},{text:"Linear Size",level:3,hash:"linear-size"},{text:"Linear Rounded",level:3,hash:"linear-rounded"}]},{text:"Props",level:2,hash:"props",children:[{text:"Progress.Circular Props:",level:3,hash:"progress-circular-props"},{text:"Progress.Linear Props:",level:3,hash:"progress-linear-props"}]}],title:"React Page Progress component",headers:{title:"React Page Progress component",components:["Progress"],hooks:[]}}},z={"CircularIndeterminate.tsx":{module:"./CircularIndeterminate.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction CircularIndeterminate() {\n  return (\n    <div\n      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}\n    >\n      <Progress.Circular variant='indeterminate' />\n      {/* <StaticProgress.Circular variant='indeterminate' /> */}\n    </div>\n  )\n}\n\nexport default CircularIndeterminate\n",moduleTS:"./CircularIndeterminate.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction CircularIndeterminate() {\n  return (\n    <div\n      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}\n    >\n      <Progress.Circular variant='indeterminate' />\n      {/* <StaticProgress.Circular variant='indeterminate' /> */}\n    </div>\n  )\n}\n\nexport default CircularIndeterminate\n"},"CircularDeterminate.tsx":{module:"./CircularDeterminate.tsx",raw:"'use client'\nimport Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\nimport React from 'react'\n\nfunction CircularDeterminate() {\n  const [progress, setProgress] = React.useState(0)\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 0 : prevProgress + 10,\n      )\n    }, 800)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [])\n  return (\n    <div\n      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}\n    >\n      <Progress.Circular variant='determinate' value={progress} />\n      {/* <StaticProgress.Circular variant='determinate' value={progress} /> */}\n    </div>\n  )\n}\n\nexport default CircularDeterminate\n",moduleTS:"./CircularDeterminate.tsx",rawTS:"'use client'\nimport Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\nimport React from 'react'\n\nfunction CircularDeterminate() {\n  const [progress, setProgress] = React.useState(0)\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 0 : prevProgress + 10,\n      )\n    }, 800)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [])\n  return (\n    <div\n      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}\n    >\n      <Progress.Circular variant='determinate' value={progress} />\n      {/* <StaticProgress.Circular variant='determinate' value={progress} /> */}\n    </div>\n  )\n}\n\nexport default CircularDeterminate\n"},"CircularColor.tsx":{module:"./CircularColor.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction CircularColor() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        gap: '1rem',\n      }}\n    >\n      <Progress.Circular variant='indeterminate' color='red' />\n      {/* <StaticProgress.Circular variant='indeterminate' color='red' /> */}\n      <br />\n      <Progress.Circular variant='indeterminate' color='green' />\n      {/* <StaticProgress.Circular variant='indeterminate' color='green' /> */}\n      <br />\n      <Progress.Circular variant='indeterminate' color='blue' />\n      {/* <StaticProgress.Circular variant='indeterminate' color='blue' /> */}\n    </div>\n  )\n}\n\nexport default CircularColor\n",moduleTS:"./CircularColor.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction CircularColor() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        gap: '1rem',\n      }}\n    >\n      <Progress.Circular variant='indeterminate' color='red' />\n      {/* <StaticProgress.Circular variant='indeterminate' color='red' /> */}\n      <br />\n      <Progress.Circular variant='indeterminate' color='green' />\n      {/* <StaticProgress.Circular variant='indeterminate' color='green' /> */}\n      <br />\n      <Progress.Circular variant='indeterminate' color='blue' />\n      {/* <StaticProgress.Circular variant='indeterminate' color='blue' /> */}\n    </div>\n  )\n}\n\nexport default CircularColor\n"},"CircularSize.tsx":{module:"./CircularSize.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction CircularSize() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        flexDirection: 'column',\n        gap: '2rem',\n      }}\n    >\n      <span>\n        The default height/width is 40px. In this example, we tailored it to be\n        70px\n      </span>\n      <br />\n      <Progress.Circular variant='indeterminate' size={70} />\n      {/* <StaticProgress.Circular variant='indeterminate' size={70} /> */}\n    </div>\n  )\n}\n\nexport default CircularSize\n",moduleTS:"./CircularSize.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction CircularSize() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        flexDirection: 'column',\n        gap: '2rem',\n      }}\n    >\n      <span>\n        The default height/width is 40px. In this example, we tailored it to be\n        70px\n      </span>\n      <br />\n      <Progress.Circular variant='indeterminate' size={70} />\n      {/* <StaticProgress.Circular variant='indeterminate' size={70} /> */}\n    </div>\n  )\n}\n\nexport default CircularSize\n"},"LinearIndeterminate.tsx":{module:"./LinearIndeterminate.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearIndeterminate() {\n  return (\n    <div>\n      <Progress.Linear variant='indeterminate' />\n      {/* <StaticProgress.Linear variant='indeterminate' /> */}\n    </div>\n  )\n}\n\nexport default LinearIndeterminate\n",moduleTS:"./LinearIndeterminate.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearIndeterminate() {\n  return (\n    <div>\n      <Progress.Linear variant='indeterminate' />\n      {/* <StaticProgress.Linear variant='indeterminate' /> */}\n    </div>\n  )\n}\n\nexport default LinearIndeterminate\n"},"LinearDeterminate.tsx":{module:"./LinearDeterminate.tsx",raw:"'use client'\nimport Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\nimport React from 'react'\n\nfunction LinearDeterminate() {\n  const [progress, setProgress] = React.useState(0)\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 0 : prevProgress + 10,\n      )\n    }, 800)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [])\n  return (\n    <div>\n      <Progress.Linear variant='determinate' value={progress} />\n      {/* <StaticProgress.Linear variant='determinate' value={progress} /> */}\n    </div>\n  )\n}\n\nexport default LinearDeterminate\n",moduleTS:"./LinearDeterminate.tsx",rawTS:"'use client'\nimport Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\nimport React from 'react'\n\nfunction LinearDeterminate() {\n  const [progress, setProgress] = React.useState(0)\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      setProgress((prevProgress) =>\n        prevProgress >= 100 ? 0 : prevProgress + 10,\n      )\n    }, 800)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [])\n  return (\n    <div>\n      <Progress.Linear variant='determinate' value={progress} />\n      {/* <StaticProgress.Linear variant='determinate' value={progress} /> */}\n    </div>\n  )\n}\n\nexport default LinearDeterminate\n"},"LinearBuffer.tsx":{module:"./LinearBuffer.tsx",raw:"'use client'\nimport Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\nimport React from 'react'\n\nfunction LinearBuffer() {\n  const [progress, setProgress] = React.useState(0)\n  const [buffer, setBuffer] = React.useState(10)\n\n  const progressRef = React.useRef(() => {\n    //\n  })\n  React.useEffect(() => {\n    progressRef.current = () => {\n      if (progress > 100) {\n        setProgress(0)\n        setBuffer(10)\n      } else {\n        const diff = Math.random() * 10\n        const diff2 = Math.random() * 10\n        setProgress(progress + diff)\n        setBuffer(progress + diff + diff2)\n      }\n    }\n  })\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      progressRef.current()\n    }, 500)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [])\n  return (\n    <div>\n      <Progress.Linear variant='buffer' value={progress} valueBuffer={buffer} />\n      {/* <StaticProgress.Linear variant='buffer' value={progress} valueBuffer={buffer} /> */}\n    </div>\n  )\n}\n\nexport default LinearBuffer\n",moduleTS:"./LinearBuffer.tsx",rawTS:"'use client'\nimport Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\nimport React from 'react'\n\nfunction LinearBuffer() {\n  const [progress, setProgress] = React.useState(0)\n  const [buffer, setBuffer] = React.useState(10)\n\n  const progressRef = React.useRef(() => {\n    //\n  })\n  React.useEffect(() => {\n    progressRef.current = () => {\n      if (progress > 100) {\n        setProgress(0)\n        setBuffer(10)\n      } else {\n        const diff = Math.random() * 10\n        const diff2 = Math.random() * 10\n        setProgress(progress + diff)\n        setBuffer(progress + diff + diff2)\n      }\n    }\n  })\n\n  React.useEffect(() => {\n    const timer = setInterval(() => {\n      progressRef.current()\n    }, 500)\n\n    return () => {\n      clearInterval(timer)\n    }\n  }, [])\n  return (\n    <div>\n      <Progress.Linear variant='buffer' value={progress} valueBuffer={buffer} />\n      {/* <StaticProgress.Linear variant='buffer' value={progress} valueBuffer={buffer} /> */}\n    </div>\n  )\n}\n\nexport default LinearBuffer\n"},"LinearColor.tsx":{module:"./LinearColor.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearColor() {\n  return (\n    <div>\n      <Progress.Linear variant='indeterminate' color='red' />\n      {/* <StaticProgress.Linear variant='indeterminate' color='red' /> */}\n    </div>\n  )\n}\n\nexport default LinearColor\n",moduleTS:"./LinearColor.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearColor() {\n  return (\n    <div>\n      <Progress.Linear variant='indeterminate' color='red' />\n      {/* <StaticProgress.Linear variant='indeterminate' color='red' /> */}\n    </div>\n  )\n}\n\nexport default LinearColor\n"},"LinearSize.tsx":{module:"./LinearSize.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearSize() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        flexDirection: 'column',\n        gap: '1rem',\n      }}\n    >\n      <span>\n        The default height is 4px. In this example, we tailored it to be 10px.\n      </span>\n      <br />\n      <Progress.Linear variant='indeterminate' size={10} />\n      {/* <StaticProgress.Linear variant='indeterminate' size={10} /> */}\n    </div>\n  )\n}\n\nexport default LinearSize\n",moduleTS:"./LinearSize.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearSize() {\n  return (\n    <div\n      style={{\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        flexDirection: 'column',\n        gap: '1rem',\n      }}\n    >\n      <span>\n        The default height is 4px. In this example, we tailored it to be 10px.\n      </span>\n      <br />\n      <Progress.Linear variant='indeterminate' size={10} />\n      {/* <StaticProgress.Linear variant='indeterminate' size={10} /> */}\n    </div>\n  )\n}\n\nexport default LinearSize\n"},"LinearRounded.tsx":{module:"./LinearRounded.tsx",raw:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearRounded() {\n  return (\n    <div>\n      <Progress.Linear variant='indeterminate' size={10} rounded />\n      {/* <StaticProgress.Linear variant='indeterminate' size={10} rounded /> */}\n    </div>\n  )\n}\n\nexport default LinearRounded\n",moduleTS:"./LinearRounded.tsx",rawTS:"import Progress from '@comfortdelgro/react-compass/progress'\n// import {Progress as StaticProgress} from '@comfortdelgro/static'\n\nfunction LinearRounded() {\n  return (\n    <div>\n      <Progress.Linear variant='indeterminate' size={10} rounded />\n      {/* <StaticProgress.Linear variant='indeterminate' size={10} rounded /> */}\n    </div>\n  )\n}\n\nexport default LinearRounded\n"}};z.scope={process:{},import:{"@comfortdelgro/react-compass/progress":C,react:L}};var j={"./CircularIndeterminate.tsx":function(){return(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t||(t=(0,S.jsx)(C.default.Circular,{variant:"indeterminate"}))})},"./CircularDeterminate.tsx":function(){var e=y.useState(0),r=(0,k.Z)(e,2),n=r[0],t=r[1];return y.useEffect(function(){var e=setInterval(function(){t(function(e){return e>=100?0:e+10})},800);return function(){clearInterval(e)}},[]),(0,S.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,S.jsx)(C.default.Circular,{variant:"determinate",value:n})})},"./CircularColor.tsx":function(){return(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"1rem"},children:[a||(a=(0,S.jsx)(C.default.Circular,{variant:"indeterminate",color:"red"})),i||(i=(0,S.jsx)("br",{})),s||(s=(0,S.jsx)(C.default.Circular,{variant:"indeterminate",color:"green"})),o||(o=(0,S.jsx)("br",{})),l||(l=(0,S.jsx)(C.default.Circular,{variant:"indeterminate",color:"blue"}))]})},"./CircularSize.tsx":function(){return(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem"},children:[c||(c=(0,S.jsx)("span",{children:"The default height/width is 40px. In this example, we tailored it to be 70px"})),d||(d=(0,S.jsx)("br",{})),u||(u=(0,S.jsx)(C.default.Circular,{variant:"indeterminate",size:70}))]})},"./LinearIndeterminate.tsx":function(){return(0,S.jsx)("div",{children:f||(f=(0,S.jsx)(C.default.Linear,{variant:"indeterminate"}))})},"./LinearDeterminate.tsx":function(){var e=y.useState(0),r=(0,k.Z)(e,2),n=r[0],t=r[1];return y.useEffect(function(){var e=setInterval(function(){t(function(e){return e>=100?0:e+10})},800);return function(){clearInterval(e)}},[]),(0,S.jsx)("div",{children:(0,S.jsx)(C.default.Linear,{variant:"determinate",value:n})})},"./LinearBuffer.tsx":function(){var e=y.useState(0),r=(0,k.Z)(e,2),n=r[0],t=r[1],a=y.useState(10),i=(0,k.Z)(a,2),s=i[0],o=i[1],l=y.useRef(function(){});return y.useEffect(function(){l.current=function(){if(n>100)t(0),o(10);else{var e=10*Math.random();t(n+e),o(n+e+10*Math.random())}}}),y.useEffect(function(){var e=setInterval(function(){l.current()},500);return function(){clearInterval(e)}},[]),(0,S.jsx)("div",{children:(0,S.jsx)(C.default.Linear,{variant:"buffer",value:n,valueBuffer:s})})},"./LinearColor.tsx":function(){return(0,S.jsx)("div",{children:m||(m=(0,S.jsx)(C.default.Linear,{variant:"indeterminate",color:"red"}))})},"./LinearSize.tsx":function(){return(0,S.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem"},children:[g||(g=(0,S.jsx)("span",{children:"The default height is 4px. In this example, we tailored it to be 10px."})),p||(p=(0,S.jsx)("br",{})),h||(h=(0,S.jsx)(C.default.Linear,{variant:"indeterminate",size:10}))]})},"./LinearRounded.tsx":function(){return(0,S.jsx)("div",{children:v||(v=(0,S.jsx)(C.default.Linear,{variant:"indeterminate",size:10,rounded:!0}))})}},R={"components/common/ComponentLinkHeader.tsx":w.Z};function T(){return(0,S.jsx)(b.Z,(0,P.Z)({},x))}},78056:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/progress",function(){return n(98829)}])}},function(e){e.O(0,[4308,7633,6471,9102,4706,9774,2888,179],function(){return e(e.s=78056)}),_N_E=e.O()}]);