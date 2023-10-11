(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9799],{9799:function(e,t,n){"use strict";var r=n(78893).default,a=n(1041).default,u=n(85731).default,o=n(69569).default,l=n(8570).default,i=n(54722);i(t,"__esModule",{value:!0}),i(t,"default",{enumerable:!0,get:function(){return m}});var d=n(60005),c=d._(n(52983)),f=d._(n(90144)),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var v={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},m=function(e){o(n,e);var t=l(n);function n(){return a(this,n),t.apply(this,arguments)}return u(n,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||s[t]||"An unexpected error has occurred";return c.default.createElement("div",{style:v.error},c.default.createElement(f.default,null,c.default.createElement("title",null,t?t+": "+r:"Application error: a client-side exception has occurred")),c.default.createElement("div",{style:v.desc},c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===n||n?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?c.default.createElement("h1",{className:"next-error-h1",style:v.h1},t):null,c.default.createElement("div",{style:v.wrap},c.default.createElement("h2",{style:v.h2},this.props.title||t?r:c.default.createElement(c.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),n}(c.default.Component);m.displayName="ErrorPage",m.getInitialProps=p,m.origGetInitialProps=p,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(i(t.default,"__esModule",{value:!0}),r(t.default,t),e.exports=t.default)},50023:function(e,t,n){"use strict";var r=n(54722);r(t,"__esModule",{value:!0}),r(t,"AmpStateContext",{enumerable:!0,get:function(){return a}});var a=n(60005)._(n(52983)).default.createContext({})},87263:function(e,t,n){"use strict";var r=n(54722);function a(e){var t=void 0===e?{}:e,n=t.ampFirst,r=t.hybrid,a=t.hasQuery;return void 0!==n&&n||void 0!==r&&r&&void 0!==a&&a}r(t,"__esModule",{value:!0}),r(t,"isInAmpMode",{enumerable:!0,get:function(){return a}})},90144:function(e,t,n){"use strict";var r=n(78893).default;n(92817).default;var a=n(54722),u=n(76419);a(t,"__esModule",{value:!0}),function(e,t){for(var n in t)a(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return s},default:function(){return h}});var o=n(60005),l=n(39805)._(n(52983)),i=o._(n(2629)),d=n(50023),c=n(78761),f=n(87263);function s(e){void 0===e&&(e=!1);var t=[l.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(l.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(15693);var v=["name","httpEquiv","charSet","itemProp"];function m(e,t){var n,r,a,o,i=t.inAmpMode;return e.reduce(p,[]).reverse().concat(s(i).reverse()).filter((n=new u,r=new u,a=new u,o={},function(e){var t=!0,l=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){l=!0;var i=e.key.slice(e.key.indexOf("$")+1);n.has(i)?t=!1:n.add(i)}switch(e.type){case"title":case"base":r.has(e.type)?t=!1:r.add(e.type);break;case"meta":for(var d=0,c=v.length;d<c;d++){var f=v[d];if(e.props.hasOwnProperty(f)){if("charSet"===f)a.has(f)?t=!1:a.add(f);else{var s=e.props[f],p=o[f]||new u;("name"!==f||!l)&&p.has(s)?t=!1:(p.add(s),o[f]=p)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;return l.default.cloneElement(e,{key:n})})}var h=function(e){var t=e.children,n=(0,l.useContext)(d.AmpStateContext),r=(0,l.useContext)(c.HeadManagerContext);return l.default.createElement(i.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(a(t.default,"__esModule",{value:!0}),r(t.default,t),e.exports=t.default)},2629:function(e,t,n){"use strict";var r=n(54722),a=n(43757);r(t,"__esModule",{value:!0}),r(t,"default",{enumerable:!0,get:function(){return i}});var u=n(39805)._(n(52983)),o=u.useLayoutEffect,l=u.useEffect;function i(e){var t=e.headManager,n=e.reduceComponentsToState;function r(){if(t&&t.mountedInstances){var r=u.Children.toArray(a(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return o(function(){var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),function(){var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=r),function(){t&&(t._pendingUpdate=r)}}),l(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},15693:function(e,t,n){"use strict";var r=n(54722);n(76419),r(t,"__esModule",{value:!0}),r(t,"warnOnce",{enumerable:!0,get:function(){return a}});var a=function(e){}}}]);