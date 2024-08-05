(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9440],{82153:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return N}});var i,t,r,o,s,u,c,l,d,m,p,v,h,b,f,x,g,y={};a.r(y),a.d(y,{demoComponents:function(){return q},demos:function(){return k},docs:function(){return j},srcComponents:function(){return C}});var B=a(26098),I=a(3072),L=a(15393),P=a(42096),S=a(44194),H=a.t(S,2),w=a(31549),j={description:"The sample of portal layout, admin page layout.",location:"/docs/data/components/portal/portal.md",rendered:['\n      <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copied-icon" viewBox="0 0 24 24">\n        <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.24 11.28L9.69 11.2c-.38-.39-.38-1.01 0-1.4.39-.39 1.02-.39 1.41 0l1.36 1.37 4.42-4.46c.39-.39 1.02-.39 1.41 0 .38.39.38 1.01 0 1.4l-5.13 5.17c-.37.4-1.01.4-1.4 0zM3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1z" />\n      </symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="copy-icon" viewBox="0 0 24 24">\n      <path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z" />\n      +</symbol>\n      </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n    <symbol id="anchor-link-icon" viewBox="0 0 16 16">\n      <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />\n    </symbol>\n    </svg>','<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">\n      <symbol id="comment-link-icon" viewBox="0 0 24 24">\n        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z" />\n      </symbol>\n      </svg>','<h1>Portal</h1><p class="description">The sample of portal layout, admin page layout.</p>\n\n\n<div class="cdg-root"><pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>Portal<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@comfortdelgro/react-compass\'</span>\n</code></pre><button aria-label="Copy the code" class="cdg-copy"><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24"><use class="cdg-copy-icon" xlink:href="#copy-icon" /><use class="cdg-copied-icon" xlink:href="#copied-icon" /></svg><span class="cdg-copyKeypress"><span>(or</span> $keyC<span>)</span></span></button></div>\n<h2 id="example">Example<a aria-labelledby="example" class="anchor-link" href="#example" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h2><h3 id="basic">Basic<a aria-labelledby="basic" class="anchor-link" href="#basic" tabindex="-1"><svg><use xlink:href="#anchor-link-icon" /></svg></a></h3>',{demo:"PortalLayout.tsx"}],toc:[{text:"Example",level:2,hash:"example",children:[{text:"Basic",level:3,hash:"basic"}]}],title:"React Portal component",headers:{title:"React Portal component",components:["Portal"],hooks:[]}},k={"PortalLayout.tsx":{module:"./PortalLayout.tsx",raw:"import {\n  Avatar,\n  Badge,\n  Breadcrumbs,\n  Button,\n  Icon,\n  Layout,\n  Navbar,\n  PageHeader,\n  Sidenav,\n} from '@comfortdelgro/react-compass'\nimport {\n  faAmbulance,\n  faBank,\n  faCar,\n  faHelicopter,\n} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst PortalLayout: React.FC = () => {\n  const isCurrent = (i: number) => {\n    return false\n  }\n\n  return (\n    <Layout className='layout-demo' direction='row' css={{height: '700px'}}>\n      <Layout\n        css={{\n          position: 'relative',\n          overflow: 'visible',\n          zIndex: '1',\n          width: '72px',\n        }}\n      >\n        <Sidenav css={{height: '100%'}}>\n          <Sidenav.Item>\n            <Avatar label='M' />\n            <h2\n              style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}\n            >\n              Workbench\n            </h2>\n          </Sidenav.Item>\n          <Sidenav.Divider />\n          <Sidenav.Item>\n            <Icon icon={faAmbulance}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n          <Sidenav.Item>\n            <Icon icon={faBank}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n          <Sidenav.Item>\n            <Icon icon={faCar}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n          <Sidenav.Item>\n            <Icon icon={faHelicopter}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n        </Sidenav>\n      </Layout>\n      <Layout flex={1}>\n        <Navbar>\n          <Navbar.Brand>Workbench Title</Navbar.Brand>\n          <Navbar.Links>\n            <a href='#'>\n              <Button>Home</Button>\n            </a>\n            <a href='#'>\n              <Button>Services</Button>\n            </a>\n            <a href='#'>\n              <Button>Products</Button>\n            </a>\n          </Navbar.Links>\n        </Navbar>\n        <Layout flex={1}>\n          <PageHeader color='white'>\n            <Breadcrumbs isCurrent={isCurrent}>\n              <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>\n              <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>\n              <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>\n            </Breadcrumbs>\n            <PageHeader.Header>\n              <PageHeader.Title>Title</PageHeader.Title>\n              <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>\n              <Badge label='Processing' variant='outline' />\n              <Button css={{marginLeft: 'auto'}} variant='secondary'>\n                Call to action\n              </Button>\n              <Button variant='secondary'>Call to action</Button>\n              <Button variant='secondary'>Call to action</Button>\n            </PageHeader.Header>\n            <PageHeader.Description>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas\n              expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas expedita.\n            </PageHeader.Description>\n            <PageHeader.Description>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas\n              expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas expedita.\n            </PageHeader.Description>\n          </PageHeader>\n        </Layout>\n      </Layout>\n    </Layout>\n  )\n}\n\nexport default PortalLayout\n",jsxPreview:"<Layout\r\n    css={{\r\n        position: 'relative',\r\n        overflow: 'visible',\r\n        zIndex: '1',\r\n        width: '72px',\r\n    }}\r\n    >\r\n    <Sidenav css={{height: '100%'}}>\r\n        <Sidenav.Item>\r\n        <Avatar label='M' />\r\n        <h2\r\n            style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}\r\n        >\r\n            Workbench\r\n        </h2>\r\n        </Sidenav.Item>\r\n        <Sidenav.Divider />\r\n        <Sidenav.Item>\r\n        <Icon icon={faAmbulance}></Icon>\r\n        <span>Menu</span>\r\n        </Sidenav.Item>\r\n        <Sidenav.Item>\r\n        <Icon icon={faBank}></Icon>\r\n        <span>Menu</span>\r\n        </Sidenav.Item>\r\n        <Sidenav.Item>\r\n        <Icon icon={faCar}></Icon>\r\n        <span>Menu</span>\r\n        </Sidenav.Item>\r\n        <Sidenav.Item>\r\n        <Icon icon={faHelicopter}></Icon>\r\n        <span>Menu</span>\r\n        </Sidenav.Item>\r\n    </Sidenav>\r\n    </Layout>\r\n    <Layout flex={1}>\r\n    <Navbar>\r\n        <Navbar.Brand>Workbench Title</Navbar.Brand>\r\n        <Navbar.Links>\r\n        <a href='#'>\r\n            <Button>Home</Button>\r\n        </a>\r\n        <a href='#'>\r\n            <Button>Services</Button>\r\n        </a>\r\n        <a href='#'>\r\n            <Button>Products</Button>\r\n        </a>\r\n        </Navbar.Links>\r\n    </Navbar>\r\n    <Layout flex={1}>\r\n        // Page content\r\n    </Layout>\r\n</Layout>",moduleTS:"./PortalLayout.tsx",rawTS:"import {\n  Avatar,\n  Badge,\n  Breadcrumbs,\n  Button,\n  Icon,\n  Layout,\n  Navbar,\n  PageHeader,\n  Sidenav,\n} from '@comfortdelgro/react-compass'\nimport {\n  faAmbulance,\n  faBank,\n  faCar,\n  faHelicopter,\n} from '@fortawesome/free-solid-svg-icons'\nimport React from 'react'\n\nconst PortalLayout: React.FC = () => {\n  const isCurrent = (i: number) => {\n    return false\n  }\n\n  return (\n    <Layout className='layout-demo' direction='row' css={{height: '700px'}}>\n      <Layout\n        css={{\n          position: 'relative',\n          overflow: 'visible',\n          zIndex: '1',\n          width: '72px',\n        }}\n      >\n        <Sidenav css={{height: '100%'}}>\n          <Sidenav.Item>\n            <Avatar label='M' />\n            <h2\n              style={{fontSize: '24px', marginLeft: '22px', color: '#323130'}}\n            >\n              Workbench\n            </h2>\n          </Sidenav.Item>\n          <Sidenav.Divider />\n          <Sidenav.Item>\n            <Icon icon={faAmbulance}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n          <Sidenav.Item>\n            <Icon icon={faBank}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n          <Sidenav.Item>\n            <Icon icon={faCar}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n          <Sidenav.Item>\n            <Icon icon={faHelicopter}></Icon>\n            <span>Menu</span>\n          </Sidenav.Item>\n        </Sidenav>\n      </Layout>\n      <Layout flex={1}>\n        <Navbar>\n          <Navbar.Brand>Workbench Title</Navbar.Brand>\n          <Navbar.Links>\n            <a href='#'>\n              <Button>Home</Button>\n            </a>\n            <a href='#'>\n              <Button>Services</Button>\n            </a>\n            <a href='#'>\n              <Button>Products</Button>\n            </a>\n          </Navbar.Links>\n        </Navbar>\n        <Layout flex={1}>\n          <PageHeader color='white'>\n            <Breadcrumbs isCurrent={isCurrent}>\n              <Breadcrumbs.Item href='#0'>Home</Breadcrumbs.Item>\n              <Breadcrumbs.Item href='#1'>Library</Breadcrumbs.Item>\n              <Breadcrumbs.Item href='#2'>Breadcrumbs</Breadcrumbs.Item>\n            </Breadcrumbs>\n            <PageHeader.Header>\n              <PageHeader.Title>Title</PageHeader.Title>\n              <PageHeader.Subtitle>This is subtitle</PageHeader.Subtitle>\n              <Badge label='Processing' variant='outline' />\n              <Button css={{marginLeft: 'auto'}} variant='secondary'>\n                Call to action\n              </Button>\n              <Button variant='secondary'>Call to action</Button>\n              <Button variant='secondary'>Call to action</Button>\n            </PageHeader.Header>\n            <PageHeader.Description>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas\n              expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas expedita.\n            </PageHeader.Description>\n            <PageHeader.Description>\n              Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas\n              expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit.\n              Perferendis harum nulla culpa! Qui, sint officiis, nisi quos\n              quibusdam, voluptatum amet natus doloribus laudantium\n              exercitationem blanditiis velit laborum repudiandae quas expedita.\n            </PageHeader.Description>\n          </PageHeader>\n        </Layout>\n      </Layout>\n    </Layout>\n  )\n}\n\nexport default PortalLayout\n"}};k.scope={process:{},import:{"@comfortdelgro/react-compass":L,"@fortawesome/free-solid-svg-icons":P,react:H}};var q={"./PortalLayout.tsx":function(){return(0,w.jsxs)(L.Layout,{className:"layout-demo",direction:"row",css:{height:"700px"},children:[(0,w.jsx)(L.Layout,{css:{position:"relative",overflow:"visible",zIndex:"1",width:"72px"},children:(0,w.jsxs)(L.Sidenav,{css:{height:"100%"},children:[(0,w.jsxs)(L.Sidenav.Item,{children:[i||(i=(0,w.jsx)(L.Avatar,{label:"M"})),(0,w.jsx)("h2",{style:{fontSize:"24px",marginLeft:"22px",color:"#323130"},children:"Workbench"})]}),t||(t=(0,w.jsx)(L.Sidenav.Divider,{})),r||(r=(0,w.jsxs)(L.Sidenav.Item,{children:[(0,w.jsx)(L.Icon,{icon:P.faAmbulance}),(0,w.jsx)("span",{children:"Menu"})]})),o||(o=(0,w.jsxs)(L.Sidenav.Item,{children:[(0,w.jsx)(L.Icon,{icon:P.faBank}),(0,w.jsx)("span",{children:"Menu"})]})),s||(s=(0,w.jsxs)(L.Sidenav.Item,{children:[(0,w.jsx)(L.Icon,{icon:P.faCar}),(0,w.jsx)("span",{children:"Menu"})]})),u||(u=(0,w.jsxs)(L.Sidenav.Item,{children:[(0,w.jsx)(L.Icon,{icon:P.faHelicopter}),(0,w.jsx)("span",{children:"Menu"})]}))]})}),(0,w.jsxs)(L.Layout,{flex:1,children:[c||(c=(0,w.jsxs)(L.Navbar,{children:[(0,w.jsx)(L.Navbar.Brand,{children:"Workbench Title"}),(0,w.jsxs)(L.Navbar.Links,{children:[(0,w.jsx)("a",{href:"#",children:(0,w.jsx)(L.Button,{children:"Home"})}),(0,w.jsx)("a",{href:"#",children:(0,w.jsx)(L.Button,{children:"Services"})}),(0,w.jsx)("a",{href:"#",children:(0,w.jsx)(L.Button,{children:"Products"})})]})]})),(0,w.jsx)(L.Layout,{flex:1,children:(0,w.jsxs)(L.PageHeader,{color:"white",children:[(0,w.jsxs)(L.Breadcrumbs,{isCurrent:function(n){return!1},children:[l||(l=(0,w.jsx)(L.Breadcrumbs.Item,{href:"#0",children:"Home"})),d||(d=(0,w.jsx)(L.Breadcrumbs.Item,{href:"#1",children:"Library"})),m||(m=(0,w.jsx)(L.Breadcrumbs.Item,{href:"#2",children:"Breadcrumbs"}))]}),(0,w.jsxs)(L.PageHeader.Header,{children:[p||(p=(0,w.jsx)(L.PageHeader.Title,{children:"Title"})),v||(v=(0,w.jsx)(L.PageHeader.Subtitle,{children:"This is subtitle"})),h||(h=(0,w.jsx)(L.Badge,{label:"Processing",variant:"outline"})),(0,w.jsx)(L.Button,{css:{marginLeft:"auto"},variant:"secondary",children:"Call to action"}),b||(b=(0,w.jsx)(L.Button,{variant:"secondary",children:"Call to action"})),f||(f=(0,w.jsx)(L.Button,{variant:"secondary",children:"Call to action"}))]}),x||(x=(0,w.jsx)(L.PageHeader.Description,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum amet natus doloribus laudantium exercitationem blanditiis velit laborum repudiandae quas expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum amet natus doloribus laudantium exercitationem blanditiis velit laborum repudiandae quas expedita."})),g||(g=(0,w.jsx)(L.PageHeader.Description,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum amet natus doloribus laudantium exercitationem blanditiis velit laborum repudiandae quas expedita.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum nulla culpa! Qui, sint officiis, nisi quos quibusdam, voluptatum amet natus doloribus laudantium exercitationem blanditiis velit laborum repudiandae quas expedita."}))]})})]})]})}},C={};function N(){return(0,w.jsx)(I.Z,(0,B.Z)({},y))}},99253:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/portal",function(){return a(82153)}])}},function(n){n.O(0,[508,6371,4308,3003,2089,3072,9774,2888,179],function(){return n(n.s=99253)}),_N_E=n.O()}]);