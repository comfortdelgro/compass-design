(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9884],{99223:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var o,i,a=t(15393),l=t(92274),s=t.n(l),r=t(97458);function d(){return(0,r.jsxs)(a.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,r.jsx)(s(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,r.jsx)(a.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,r.jsx)(s(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:i||(i=(0,r.jsx)(a.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},40469:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var o={};t.r(o),t.d(o,{demoComponents:function(){return b},demos:function(){return h},docs:function(){return u},srcComponents:function(){return w}});var i=t(26098),a=t(916),l=t(15393),s=t(52983),r=t.t(s,2),d=t(73804),c=t(91217),g=t.n(c),m=t(97458),f=g()(Array(8).keys()).map(function(e){return{src:"https://picsum.photos/id/".concat(e+1,"/5000/3333"),alt:"Image ".concat(e+1),srcPreview:"https://picsum.photos/id/".concat(e+1,"/60/50")}}),p=t(99223),u={en:{description:"Using to display list of images.",location:"/docs/data/components/image-viewer/image-viewer.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Image Viewer</h1><p class="description">Using to display list of images.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>ImageViewer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"ImageViewer.tsx"},'<!-- ### Server\n\n{{"demo": "ImageViewerServer.tsx"}} -->\n\n<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">visible</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">—</td>\n<td align="left">If true, the image viewer is open.</td>\n</tr>\n<tr>\n<td align="left">onClose</td>\n<td align="left"><code>() =&gt; void</code></td>\n<td align="left">—</td>\n<td align="left">Callback fired when the modal needs to be closed.</td>\n</tr>\n<tr>\n<td align="left">activeIndex</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0</code></td>\n<td align="left">Set default image position</td>\n</tr>\n<tr>\n<td align="left">drag</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, the user will be able to drag the image</td>\n</tr>\n<tr>\n<td align="left">zoomable</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, the user will be able to zoom the image (zoom-in, zoom-out).</td>\n</tr>\n<tr>\n<td align="left">rotatable</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, the user will be able to rotate the image</td>\n</tr>\n<tr>\n<td align="left">scalable</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, the user will be able to scale the image</td>\n</tr>\n<tr>\n<td align="left">onMaskClick</td>\n<td align="left"><code>(e: React.MouseEvent&lt;HTMLDivElement&gt;) =&gt; void</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">This function will be called when the user clicks on the mash background image</td>\n</tr>\n<tr>\n<td align="left">loop</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, when user clicks next or previous the image will loop continuously</td>\n</tr>\n<tr>\n<td align="left">disableMouseZoom</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">If true, user cannot zoom</td>\n</tr>\n<tr>\n<td align="left">noClose</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>false</code></td>\n<td align="left">If true, when the user won&#39;t be able to close the modal</td>\n</tr>\n<tr>\n<td align="left">isShowImageInformation</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, image information will be displayed</td>\n</tr>\n<tr>\n<td align="left">isShowPreview</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, a list of preview images will be displayed</td>\n</tr>\n<tr>\n<td align="left">isShowToolbar</td>\n<td align="left"><code>boolean</code></td>\n<td align="left"><code>true</code></td>\n<td align="left">If true, toolbar will be displayed</td>\n</tr>\n<tr>\n<td align="left">zoomSpeed</td>\n<td align="left"><code>number</code></td>\n<td align="left"><code>0.05</code></td>\n<td align="left"></td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"}]},{text:"Props",level:2,hash:"props",children:[]}],title:"React Image Viewer component",headers:{title:"React Image Viewer component",components:["ImageViewer"],hooks:[]}}},h={"ImageViewer.tsx":{module:"./ImageViewer.tsx",raw:"// ImageViewer.tsx\nimport {Button, ImageViewer} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst images = Array.from(Array(8).keys()).map((index) => {\n  return {\n    src: `https://picsum.photos/id/${index + 1}/5000/3333`,\n    alt: `Image ${index + 1}`,\n    srcPreview: `https://picsum.photos/id/${index + 1}/60/50`,\n  }\n})\n\nconst ImageViewerDemo: React.FC = () => {\n  const [visible, setVisible] = React.useState(false)\n  return (\n    <>\n      <Button variant='primary' onClick={() => setVisible(true)}>\n        Open image viewer\n      </Button>\n      <ImageViewer\n        visible={visible}\n        onClose={() => {\n          setVisible(false)\n        }}\n        images={images}\n        onMaskClick={() => {\n          setVisible(false)\n        }}\n      />\n    </>\n  )\n}\n\nexport default ImageViewerDemo\n",jsxPreview:"const images = Array.from(Array(8).keys()).map((index) => {\r\n  return {\r\n    src: `https://picsum.photos/id/${index + 1}/5000/3333`,\r\n    alt: `Image ${index + 1}`,\r\n    srcPreview: `https://picsum.photos/id/${index + 1}/60/50`,\r\n  }\r\n})\r\n\r\nexport const ImageViewerDemo: React.FC = () => {\r\n  const [visible, setVisible] = React.useState(false)\r\n  return (\r\n    <>\r\n      <h3>Default </h3>\r\n      <Button onClick={() => setVisible(true)}>Open image viewer</Button>\r\n      <ImageViewer\r\n        visible={visible}\r\n        onClose={() => {\r\n          setVisible(false)\r\n        }}\r\n        images={images}\r\n        onMaskClick={() => {\r\n          setVisible(false)\r\n        }}\r\n      />\r\n    </>\r\n  )\r\n}",moduleTS:"./ImageViewer.tsx",rawTS:"// ImageViewer.tsx\nimport {Button, ImageViewer} from '@comfortdelgro/react-compass'\nimport React from 'react'\n\nconst images = Array.from(Array(8).keys()).map((index) => {\n  return {\n    src: `https://picsum.photos/id/${index + 1}/5000/3333`,\n    alt: `Image ${index + 1}`,\n    srcPreview: `https://picsum.photos/id/${index + 1}/60/50`,\n  }\n})\n\nconst ImageViewerDemo: React.FC = () => {\n  const [visible, setVisible] = React.useState(false)\n  return (\n    <>\n      <Button variant='primary' onClick={() => setVisible(true)}>\n        Open image viewer\n      </Button>\n      <ImageViewer\n        visible={visible}\n        onClose={() => {\n          setVisible(false)\n        }}\n        images={images}\n        onMaskClick={() => {\n          setVisible(false)\n        }}\n      />\n    </>\n  )\n}\n\nexport default ImageViewerDemo\n"}};h.scope={process:{},import:{"@comfortdelgro/react-compass":l,react:r}};var b={"./ImageViewer.tsx":function(){var e=s.useState(!1),n=(0,d.Z)(e,2),t=n[0],o=n[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Button,{variant:"primary",onClick:function(){return o(!0)},children:"Open image viewer"}),(0,m.jsx)(l.ImageViewer,{visible:t,onClose:function(){o(!1)},images:f,onMaskClick:function(){o(!1)}})]})}},w={"components/common/ComponentLinkHeader.tsx":p.Z};function v(){return(0,m.jsx)(a.Z,(0,i.Z)({},o))}},45979:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/image-viewer",function(){return t(40469)}])}},function(e){e.O(0,[4308,6555,47,916,9774,2888,179],function(){return e(e.s=45979)}),_N_E=e.O()}]);