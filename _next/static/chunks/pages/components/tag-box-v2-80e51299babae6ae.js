(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5945],{93279:function(n,t,e){"use strict";e.d(t,{Z:function(){return l}});var a,o,r=e(15393),d=e(16371),i=e.n(d),s=e(31549);function l(){return(0,s.jsxs)(r.Flexbox,{style:{marginBottom:"var(--cdg-spacing-4)"},children:[(0,s.jsx)(i(),{href:"https://github.com/comfortdelgro/compass-design",target:"_blank",style:{textDecoration:"none"},children:a||(a=(0,s.jsx)(r.Badge,{label:"Github",color:"info",variant:"outline"}))}),(0,s.jsx)(i(),{href:"https://www.figma.com/file/JSiK3cmMmxTt8qhR3dty8t/Workbench-Design-System?type=design&node-id=502-54719&mode=design&t=a4SJbARIttEHmcZS-0",target:"_blank",style:{textDecoration:"none"},children:o||(o=(0,s.jsx)(r.Badge,{label:"Figma",color:"danger",variant:"outline"}))})]})}},1636:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return x}});var a={};e.r(a),e.d(a,{demoComponents:function(){return b},demos:function(){return v},docs:function(){return T},srcComponents:function(){return p}});var o=e(26098),r=e(43866),d=e(15393),i=e(44194),s=e.t(i,2),l=e(9555),g=e(31549),c=e(50436),u=e(37601),h=e(28339),m=e.n(h),f=e(93279),T={en:{description:"The Link component allows you to easily customize anchor elements with your theme colors and typography styles.",location:"/docs/data/components/tag-box-v2/tag-box-v2.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>TagBox V2</h1><p class="description">The Link component allows you to easily customize anchor elements with your theme colors and typography styles.</p>\n\n',{component:"components/common/ComponentLinkHeader.tsx"},'<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>TagBoxV2<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"TagBoxV2Basic.tsx"},'<h3 id="error">Error<a aria-labelledby="error" class="anchor-link" href="#error" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"TagBoxV2Error.tsx"},'<h3 id="with-errored-items">With Errored Items<a aria-labelledby="with-errored-items" class="anchor-link" href="#with-errored-items" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"WithErroredItems.tsx"},'<h2 id="props">Props<a aria-labelledby="props" class="anchor-link" href="#props" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="tagbox">TagBox<a aria-labelledby="tagbox" class="anchor-link" href="#tagbox" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">isRequired</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">—</td>\n<td align="left">A boolean indicating whether the TagBoxV2 component is required or not.</td>\n</tr>\n<tr>\n<td align="left">isErrored</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">&#39;false&#39;</td>\n<td align="left">A boolean indicating whether the TagBoxV2 component has an error or not.</td>\n</tr>\n<tr>\n<td align="left">tagBoxLabel</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">A string representing the label or title for the TagBoxV2 component.</td>\n</tr>\n<tr>\n<td align="left">tags</td>\n<td align="left"><code>Array</code></td>\n<td align="left">-</td>\n<td align="left">An array of objects representing the tags to be displayed in the TagBoxV2 component</td>\n</tr>\n<tr>\n<td align="left">onAddTag</td>\n<td align="left"><code>function</code></td>\n<td align="left">-</td>\n<td align="left">A callback function triggered when a new tag is added. It receives the event object as an argument.</td>\n</tr>\n<tr>\n<td align="left">onEditTag</td>\n<td align="left"><code>function</code></td>\n<td align="left">-</td>\n<td align="left">A callback function triggered when a tag is edited. It receives the tag object.</td>\n</tr>\n<tr>\n<td align="left">onRemoveTag</td>\n<td align="left"><code>function</code></td>\n<td align="left">-</td>\n<td align="left">A callback function triggered when a tag is removed. It receives the tag object .</td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">A boolean indicating whether the TagBoxV2 component is disabled or not.</td>\n</tr>\n<tr>\n<td align="left">isEditable</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">false</td>\n<td align="left">(Optional) A boolean indicating whether the tags are editable or not.</td>\n</tr>\n<tr>\n<td align="left">customValidationHandler</td>\n<td align="left"><code>function</code></td>\n<td align="left">—</td>\n<td align="left">(Optional) A custom validation handler function to perform additional validation on the tags.</td>\n</tr>\n<tr>\n<td align="left">addTagPlaceholder</td>\n<td align="left"><code>function</code></td>\n<td align="left">—</td>\n<td align="left">The placeholder text for the input field to add new tags.</td>\n</tr>\n<tr>\n<td align="left">canRemoveOnDeleteAndBackspaceKey</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">—</td>\n<td align="left">(Optional) A boolean indicating whether tags can be removed using the delete and backspace keys.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n<h3 id="item">Item<a aria-labelledby="item" class="anchor-link" href="#item" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">id</td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">Unique Id</td>\n</tr>\n<tr>\n<td align="left">value</td>\n<td align="left"><code>string</code></td>\n<td align="left">-</td>\n<td align="left">Value to display in the item content</td>\n</tr>\n<tr>\n<td align="left">icon</td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">-</td>\n<td align="left">Display icon in the left side</td>\n</tr>\n<tr>\n<td align="left">isDisabled</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">-</td>\n<td align="left">Disable state.</td>\n</tr>\n<tr>\n<td align="left">isErrored</td>\n<td align="left"><code>boolean</code></td>\n<td align="left">-</td>\n<td align="left">Error state.</td>\n</tr>\n</tbody></table>\n<h3 id="tagbox-action">TagBox.Action<a aria-labelledby="tagbox-action" class="anchor-link" href="#tagbox-action" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3><table>\n<thead>\n<tr>\n<th align="left">Name</th>\n<th align="left">Type</th>\n<th align="left">Default</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody><tr>\n<td align="left">children</td>\n<td align="left"><code>ReactNode</code></td>\n<td align="left">—</td>\n<td align="left">The content to display in the tag box action.</td>\n</tr>\n<tr>\n<td align="left">css</td>\n<td align="left"><code>CSS</code></td>\n<td align="left">—</td>\n<td align="left">The system prop that allows defining system overrides as well as additional CSS styles.</td>\n</tr>\n</tbody></table>\n'],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"},{text:"Error",level:3,hash:"error"},{text:"With Errored Items",level:3,hash:"with-errored-items"}]},{text:"Props",level:2,hash:"props",children:[{text:"TagBox",level:3,hash:"tagbox"},{text:"Item",level:3,hash:"item"},{text:"TagBox.Action",level:3,hash:"tagbox-action"}]}],title:"React TagBoxV2 component",headers:{title:"React TagBoxV2 component",components:["TagBoxV2"],hooks:[]}}},v={"TagBoxV2Basic.tsx":{module:"./TagBoxV2Basic.tsx",raw:"import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nconst Basic: React.FC = () => {\n  const [tags, setTags] = useState<Tag[]>([])\n\n  const handleAddTag = (newTagValue: string) => {\n    const newTagObject: Tag = {\n      id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n      value: newTagValue.trim(),\n    }\n    setTags([...tags, newTagObject])\n  }\n\n  const handleRemoveTag = (id: number) => {\n    const newTags = tags.filter((tag) => tag.id !== id)\n    setTags(newTags)\n  }\n\n  const handleEditTag = (id: number, value: string) => {\n    const updatedTags = tags.map((tag) => {\n      if (tag.id === id) {\n        return {id, value}\n      }\n      return tag\n    })\n    setTags(updatedTags)\n  }\n  return (\n    <Column>\n      <TagBoxV2\n        tagBoxLabel='Attribute values'\n        addTagPlaceholder='Please enter to add tag'\n        tags={tags}\n        isErrored={false}\n        isEditable\n        onAddTag={handleAddTag}\n        onRemoveTag={(tagToBeRemoved) =>\n          handleRemoveTag(tagToBeRemoved.id as number)\n        }\n        onEditTag={(tagToBeEdited) =>\n          handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)\n        }\n        css={{width: '70%'}}\n      />\n    </Column>\n  )\n}\n\nexport default Basic\n",jsxPreview:"<TagBoxV2\r\n    tagBoxLabel='Attribute values'\r\n    addTagPlaceholder='Please enter to add tag'\r\n    tags={tags}\r\n    isErrored={false}\r\n    isEditable\r\n    onAddTag={handleAddTag}\r\n    onRemoveTag={(tagToBeRemoved) =>\r\n    handleRemoveTag(tagToBeRemoved.id as number)\r\n    }\r\n    onEditTag={(tagToBeEdited) =>\r\n    handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)\r\n    }\r\n    css={{width: '70%'}}\r\n/>",moduleTS:"./TagBoxV2Basic.tsx",rawTS:"import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nconst Basic: React.FC = () => {\n  const [tags, setTags] = useState<Tag[]>([])\n\n  const handleAddTag = (newTagValue: string) => {\n    const newTagObject: Tag = {\n      id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n      value: newTagValue.trim(),\n    }\n    setTags([...tags, newTagObject])\n  }\n\n  const handleRemoveTag = (id: number) => {\n    const newTags = tags.filter((tag) => tag.id !== id)\n    setTags(newTags)\n  }\n\n  const handleEditTag = (id: number, value: string) => {\n    const updatedTags = tags.map((tag) => {\n      if (tag.id === id) {\n        return {id, value}\n      }\n      return tag\n    })\n    setTags(updatedTags)\n  }\n  return (\n    <Column>\n      <TagBoxV2\n        tagBoxLabel='Attribute values'\n        addTagPlaceholder='Please enter to add tag'\n        tags={tags}\n        isErrored={false}\n        isEditable\n        onAddTag={handleAddTag}\n        onRemoveTag={(tagToBeRemoved) =>\n          handleRemoveTag(tagToBeRemoved.id as number)\n        }\n        onEditTag={(tagToBeEdited) =>\n          handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)\n        }\n        css={{width: '70%'}}\n      />\n    </Column>\n  )\n}\n\nexport default Basic\n"},"TagBoxV2Error.tsx":{module:"./TagBoxV2Error.tsx",raw:"import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nconst Basic: React.FC = () => {\n  const [tags, setTags] = useState<Tag[]>([])\n\n  const handleAddTag = (newTagValue: string) => {\n    const newTagObject: Tag = {\n      id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n      value: newTagValue.trim(),\n    }\n    setTags([...tags, newTagObject])\n  }\n\n  const handleRemoveTag = (id: number) => {\n    const newTags = tags.filter((tag) => tag.id !== id)\n    setTags(newTags)\n  }\n\n  const handleEditTag = (id: number, value: string) => {\n    const updatedTags = tags.map((tag) => {\n      if (tag.id === id) {\n        return {id, value}\n      }\n      return tag\n    })\n    setTags(updatedTags)\n  }\n  return (\n    <Column>\n      <TagBoxV2\n        tagBoxLabel='Attribute values'\n        addTagPlaceholder='Please enter to add tag'\n        tags={tags}\n        isErrored={true}\n        isEditable\n        onAddTag={handleAddTag}\n        onRemoveTag={(tagToBeRemoved) =>\n          handleRemoveTag(tagToBeRemoved.id as number)\n        }\n        onEditTag={(tagToBeEdited) =>\n          handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)\n        }\n        css={{width: '70%'}}\n      />\n    </Column>\n  )\n}\n\nexport default Basic\n",jsxPreview:"<TagBoxV2\r\n    tagBoxLabel='Attribute values'\r\n    addTagPlaceholder='Please enter to add tag'\r\n    tags={tags}\r\n    isErrored={true}\r\n    isEditable\r\n    onAddTag={handleAddTag}\r\n    onRemoveTag={(tagToBeRemoved) =>\r\n        handleRemoveTag(tagToBeRemoved.id as number)\r\n    }\r\n    onEditTag={(tagToBeEdited) =>\r\n        handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)\r\n    }\r\n    css={{width: '70%'}}\r\n/>",moduleTS:"./TagBoxV2Error.tsx",rawTS:"import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass'\nimport {useState} from 'react'\n\nconst Basic: React.FC = () => {\n  const [tags, setTags] = useState<Tag[]>([])\n\n  const handleAddTag = (newTagValue: string) => {\n    const newTagObject: Tag = {\n      id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n      value: newTagValue.trim(),\n    }\n    setTags([...tags, newTagObject])\n  }\n\n  const handleRemoveTag = (id: number) => {\n    const newTags = tags.filter((tag) => tag.id !== id)\n    setTags(newTags)\n  }\n\n  const handleEditTag = (id: number, value: string) => {\n    const updatedTags = tags.map((tag) => {\n      if (tag.id === id) {\n        return {id, value}\n      }\n      return tag\n    })\n    setTags(updatedTags)\n  }\n  return (\n    <Column>\n      <TagBoxV2\n        tagBoxLabel='Attribute values'\n        addTagPlaceholder='Please enter to add tag'\n        tags={tags}\n        isErrored={true}\n        isEditable\n        onAddTag={handleAddTag}\n        onRemoveTag={(tagToBeRemoved) =>\n          handleRemoveTag(tagToBeRemoved.id as number)\n        }\n        onEditTag={(tagToBeEdited) =>\n          handleEditTag(tagToBeEdited.id as number, tagToBeEdited.value)\n        }\n        css={{width: '70%'}}\n      />\n    </Column>\n  )\n}\n\nexport default Basic\n"},"WithErroredItems.tsx":{module:"./WithErroredItems.tsx",raw:"import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass'\nimport {useEffect, useState} from 'react'\n\nconst mockApiCall = (): Promise<Tag[]> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      const tags: Tag[] = [\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 1',\n          isErrored: false,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 2',\n          isErrored: false,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 3',\n          isErrored: true,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 4',\n          isErrored: false,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 5',\n          isErrored: true,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 6',\n          isErrored: false,\n        },\n      ]\n      resolve(tags)\n    }, 1500)\n  })\n}\n\nconst WithErroredItems: React.FC = (props: any) => {\n  const [tags, setTags] = useState<Tag[]>([])\n\n  useEffect(() => {\n    const fetchTags = async () => {\n      try {\n        const fetchedTags = await mockApiCall()\n        setTags(fetchedTags)\n      } catch (error) {\n        console.error('Error fetching tags:', error)\n      }\n    }\n\n    void fetchTags()\n  }, [])\n\n  return (\n    <Column>\n      <TagBoxV2\n        tagBoxLabel='Attribute values'\n        addTagPlaceholder='Please enter to add tag'\n        tags={tags}\n        isErrored={true}\n      />\n    </Column>\n  )\n}\n\nexport default WithErroredItems\n",jsxPreview:"<TagBoxV2\r\n    tagBoxLabel='Attribute values'\r\n    addTagPlaceholder='Please enter to add tag'\r\n    tags={tags}\r\n    isErrored={true}\r\n/>",moduleTS:"./WithErroredItems.tsx",rawTS:"import {Column, Tag, TagBoxV2} from '@comfortdelgro/react-compass'\nimport {useEffect, useState} from 'react'\n\nconst mockApiCall = (): Promise<Tag[]> => {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      const tags: Tag[] = [\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 1',\n          isErrored: false,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 2',\n          isErrored: false,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 3',\n          isErrored: true,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 4',\n          isErrored: false,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 5',\n          isErrored: true,\n        },\n        {\n          id: `cdg-id-${Math.random().toString(36).substring(2)}`,\n          value: 'Driver 6',\n          isErrored: false,\n        },\n      ]\n      resolve(tags)\n    }, 1500)\n  })\n}\n\nconst WithErroredItems: React.FC = (props: any) => {\n  const [tags, setTags] = useState<Tag[]>([])\n\n  useEffect(() => {\n    const fetchTags = async () => {\n      try {\n        const fetchedTags = await mockApiCall()\n        setTags(fetchedTags)\n      } catch (error) {\n        console.error('Error fetching tags:', error)\n      }\n    }\n\n    void fetchTags()\n  }, [])\n\n  return (\n    <Column>\n      <TagBoxV2\n        tagBoxLabel='Attribute values'\n        addTagPlaceholder='Please enter to add tag'\n        tags={tags}\n        isErrored={true}\n      />\n    </Column>\n  )\n}\n\nexport default WithErroredItems\n"}};v.scope={process:{},import:{"@comfortdelgro/react-compass":d,react:s}};var b={"./TagBoxV2Basic.tsx":function(){var n=(0,i.useState)([]),t=n[0],e=n[1],a=function(n){e(t.filter(function(t){return t.id!==n}))},o=function(n,a){e(t.map(function(t){return t.id===n?{id:n,value:a}:t}))};return(0,g.jsx)(d.Column,{children:(0,g.jsx)(d.TagBoxV2,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:t,isErrored:!1,isEditable:!0,onAddTag:function(n){var a={id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:n.trim()};e([].concat((0,l.Z)(t),[a]))},onRemoveTag:function(n){return a(n.id)},onEditTag:function(n){return o(n.id,n.value)},css:{width:"70%"}})})},"./TagBoxV2Error.tsx":function(){var n=(0,i.useState)([]),t=n[0],e=n[1],a=function(n){e(t.filter(function(t){return t.id!==n}))},o=function(n,a){e(t.map(function(t){return t.id===n?{id:n,value:a}:t}))};return(0,g.jsx)(d.Column,{children:(0,g.jsx)(d.TagBoxV2,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:t,isErrored:!0,isEditable:!0,onAddTag:function(n){var a={id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:n.trim()};e([].concat((0,l.Z)(t),[a]))},onRemoveTag:function(n){return a(n.id)},onEditTag:function(n){return o(n.id,n.value)},css:{width:"70%"}})})},"./WithErroredItems.tsx":function(n){var t=(0,i.useState)([]),e=t[0],a=t[1];return(0,i.useEffect)(function(){var n;(n=(0,u.Z)((0,c.Z)().mark(function n(){return(0,c.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,new(m())(function(n){setTimeout(function(){n([{id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:"Driver 1",isErrored:!1},{id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:"Driver 2",isErrored:!1},{id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:"Driver 3",isErrored:!0},{id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:"Driver 4",isErrored:!1},{id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:"Driver 5",isErrored:!0},{id:"cdg-id-".concat(Math.random().toString(36).substring(2)),value:"Driver 6",isErrored:!1}])},1500)});case 3:a(n.sent),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error fetching tags:",n.t0);case 10:case"end":return n.stop()}},n,null,[[0,7]])})),function(){return n.apply(this,arguments)})()},[]),(0,g.jsx)(d.Column,{children:(0,g.jsx)(d.TagBoxV2,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:e,isErrored:!0})})}},p={"components/common/ComponentLinkHeader.tsx":f.Z};function x(){return(0,g.jsx)(r.Z,(0,o.Z)({},a))}},75693:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/tag-box-v2",function(){return e(1636)}])}},function(n){n.O(0,[4308,9813,5675,3866,9774,2888,179],function(){return n(n.s=75693)}),_N_E=n.O()}]);