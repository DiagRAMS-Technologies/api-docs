(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{50769:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference",function(){return a(40592)}])},11221:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let n=a(38754),r=(a(67294),n._(a(80177)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let a=r.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let i=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?a({...n,loader:()=>null!=i?i().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete n.webpack,delete n.modules,noSSR(a,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},37747:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let n=a(38754),r=n._(a(67294)),i=r.default.createContext(null)},80177:function(e,t,a){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=a(38754),r=n._(a(67294)),i=a(37747),o=[],c=[],l=!1;function load(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function init(){if(!n){let t=new LoadableSubscription(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!l){let e=a.webpack?a.webpack():a.modules;e&&c.push(t=>{for(let a of e)if(t.includes(a))return init()})}function LoadableComponent(e,t){!function(){init();let e=r.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let o=r.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(a.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",r.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let a=[];for(;e.length;){let n=e.pop();a.push(n(t))}return Promise.all(a).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(o).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(l=!0,t());flushInitializers(c,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let s=Loadable},26552:function(e,t,a){"use strict";a.d(t,{Z:function(){return ContentBlock}});var n=a(85893),r=a(12332),i=a.n(r),o=a(20396);function ContentBlock(e){let{children:t,className:a}=e;return(0,n.jsxs)("section",{className:i().dynamic([["d0022190e2aad6e",[o.IW,o.EQ]]])+" "+"root".concat(a?" "+a:""),children:[t,(0,n.jsx)(i(),{id:"d0022190e2aad6e",dynamic:[o.IW,o.EQ],children:".root.__jsx-style-dynamic-selector{background-color:var(--light);padding:-webkit-calc(var(--vRythm)*2)var(--gutter);padding:-moz-calc(var(--vRythm)*2)var(--gutter);padding:calc(var(--vRythm)*2)var(--gutter)}@media screen and (min-width:".concat(o.IW,"){.root.__jsx-style-dynamic-selector{padding:-webkit-calc(var(--vRythm)*2)-webkit-calc(var(--gutter)*2);padding:-moz-calc(var(--vRythm)*2)-moz-calc(var(--gutter)*2);padding:calc(var(--vRythm)*2)calc(var(--gutter)*2)}}@media screen and (min-width:").concat(o.EQ,"){.root.__jsx-style-dynamic-selector{padding:-webkit-calc(var(--vRythm)*3)-webkit-calc(var(--gutter)*8);padding:-moz-calc(var(--vRythm)*3)-moz-calc(var(--gutter)*8);padding:calc(var(--vRythm)*3)calc(var(--gutter)*8)}}")})]})}},26209:function(e,t,a){"use strict";a.d(t,{A:function(){return Layout}});var n=a(85893),r=a(12332),i=a.n(r),o=a(20396),c=a(9008),l=a.n(c),s=a(11163),d=a(40874);function Meta(e){let{name:t,title:a,description:r,image:i}=e,c=(0,s.useRouter)(),u="".concat(a?"".concat(a," - "):"").concat(t),m=d.Y.baseURL+d.Y.basePath+(null==c?void 0:c.asPath),h="string"==typeof i&&i&&/^https?:\/\//.test(i)?i:i?d.Y.baseURL+d.Y.basePath+(i.startsWith("/")?"":"/")+i:d.Y.baseURL+d.Y.basePath+"/images/banner.png";return(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:u}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"theme-color",content:o.cp}),(0,n.jsx)("link",{rel:"canonical",href:m}),(0,n.jsx)("meta",{name:"author",content:o.Gy}),(0,n.jsx)("link",{rel:"icon",type:"image/svg+xml",href:d.Y.basePath+"/images/favicon.svg",sizes:"any"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:d.Y.basePath+"/images/favicon-16.png",sizes:"16x16"}),(0,n.jsx)("link",{rel:"icon shortcut",type:"image/png",href:d.Y.basePath+"/images/favicon-128.png",sizes:"128x128"}),(0,n.jsx)("meta",{name:"robots",content:"index,follow"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,n.jsx)("meta",{property:"og:locale",content:"fr_FR"}),(0,n.jsx)("meta",{property:"og:type",content:(null==c?void 0:c.pathname)==="/news"?"article":"website"}),(0,n.jsx)("meta",{property:"og:url",content:m}),(0,n.jsx)("meta",{property:"og:title",content:u}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:site_name",content:t}),h?(0,n.jsx)("meta",{property:"og:image",content:h}):null,h?(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}):(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@".concat(o.yS)}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@".concat(o.yS)}),(0,n.jsx)("meta",{property:"twitter:url",content:m}),h?(0,n.jsx)("meta",{property:"twitter:image",content:h}):null]})}var u=a(25675),m=a.n(u),h=a(41664),f=a.n(h);function Header(){let e=(0,s.useRouter)();return(0,n.jsxs)("div",{className:i().dynamic([["e2b3c6e6bc0296e9",[o.IW]]])+" nav-bar",children:[(0,n.jsxs)("nav",{className:i().dynamic([["e2b3c6e6bc0296e9",[o.IW]]]),children:[(0,n.jsx)("span",{className:i().dynamic([["e2b3c6e6bc0296e9",[o.IW]]])+" bc-image",children:(0,n.jsx)(m(),{src:"".concat(d.Y.basePath,"/images/diagrams.png"),alt:"Picture of the author",fill:!0,priority:!0})}),[{name:"Home",path:"/",isHome:!0},{name:"Authentication",path:"/authentication",isHome:!1},{name:"Data bridge",path:"/data-bridge",isHome:!1},{name:"API Reference",path:"/api-reference",isHome:!1},{name:"News",path:"/news",isHome:!1}].map((t,a)=>{let{name:r,path:c,isHome:l}=t;return(0,n.jsx)(f(),{href:c,className:(l?e.asPath===c:e.asPath.startsWith(c))?"selected":"",children:(0,n.jsx)("span",{className:i().dynamic([["e2b3c6e6bc0296e9",[o.IW]]]),children:r})},a)})]}),(0,n.jsx)(i(),{id:"e2b3c6e6bc0296e9",dynamic:[o.IW],children:'.nav-bar.__jsx-style-dynamic-selector{background-color:var(--light);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 0 var(--gutter)0}nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.bc-image.__jsx-style-dynamic-selector{position:relative;width:-webkit-calc((var(--column)*2) + (var(--gutter)*1));width:-moz-calc((var(--column)*2) + (var(--gutter)*1));width:calc((var(--column)*2) + (var(--gutter)*1));width:calc(calc(var(--column)*2) + calc(var(--gutter)*1));height:-webkit-calc(var(--vRythm)*2);height:-moz-calc(var(--vRythm)*2);height:calc(var(--vRythm)*2);background-color:white;margin:0 var(--gutter)}.bc-image.__jsx-style-dynamic-selector img{-o-object-fit:scale-down;object-fit:scale-down}nav.__jsx-style-dynamic-selector>a{border-right:1px solid;display:block;border-color:var(--primary);background-color:var(--dark);line-height:-webkit-calc(var(--vRythm)*2);line-height:-moz-calc(var(--vRythm)*2);line-height:calc(var(--vRythm)*2);padding:0 var(--gutter);text-decoration:none;font-family:"Montserrat",sans-serif!important;font-size:20px;color:var(--light);font-weight:700;text-align:center;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch}nav.__jsx-style-dynamic-selector>a.selected{color:var(--darkgrey)}nav.__jsx-style-dynamic-selector>a:hover{color:var(--darkgrey)}@media(max-width:'.concat(o.IW,"){nav.__jsx-style-dynamic-selector{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:0 0 var(--gutter)0}}")})]})}function MainContent(e){let{children:t}=e;return(0,n.jsxs)("main",{className:i().dynamic([["e01384c8927633d7",[o.Xz,o.D5,o.Z1,o.IW,o.$Y,o.IW,o.EQ,o.EQ]]])+" content",children:[t,(0,n.jsx)(i(),{id:"e01384c8927633d7",dynamic:[o.Xz,o.D5,o.Z1,o.IW,o.$Y,o.IW,o.EQ,o.EQ],children:".content.__jsx-style-dynamic-selector{display:block;width:100%;padding:0 var(--gutter)var(--vRythm)var(--gutter)}@media screen and (max-width:".concat(o.Xz,"){.content.__jsx-style-dynamic-selector{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media screen and (min-width:").concat(o.D5,")and (max-width:").concat(o.Z1,"){.content.__jsx-style-dynamic-selector{-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media screen and (min-width:").concat(o.IW,")and (max-width:").concat(o.$Y,"){.content.__jsx-style-dynamic-selector{width:").concat(o.IW,";margin:0 auto;padding:0 -webkit-calc(var(gutter)*2)-webkit-calc(var(--vRythm)*2)-webkit-calc(var(gutter)*2);padding:0 -moz-calc(var(gutter)*2)-moz-calc(var(--vRythm)*2)-moz-calc(var(gutter)*2);padding:0 calc(var(gutter)*2)calc(var(--vRythm)*2)calc(var(gutter)*2)}}@media screen and (min-width:").concat(o.EQ,"){.content.__jsx-style-dynamic-selector{width:").concat(o.EQ,";margin:0 auto;padding:0 -webkit-calc(var(gutter)*3)-webkit-calc(var(--vRythm)*2)-webkit-calc(var(gutter)*3);padding:0 -moz-calc(var(gutter)*3)-moz-calc(var(--vRythm)*2)-moz-calc(var(gutter)*3);padding:0 calc(var(gutter)*3)calc(var(--vRythm)*2)calc(var(gutter)*3)}}")})]})}function Layout(e){let{children:t,title:a,description:r,image:c}=e;return(0,n.jsxs)("div",{className:"jsx-343e3510549f50ef root",children:[(0,n.jsx)(Meta,{name:o.Gy,title:a,description:r,image:c}),(0,n.jsx)(Header,{}),(0,n.jsx)(MainContent,{children:t}),(0,n.jsx)(i(),{id:"343e3510549f50ef",children:".root.jsx-343e3510549f50ef{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#f7f6f6}"})]})}},40592:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ApiReference}});var n=a(85893),r=a(12332),i=a.n(r),o=a(26209);a(67294),a(62875);var c=a(5152),l=a.n(c);let s=l()(()=>Promise.all([a.e(954),a.e(58),a.e(858),a.e(654)]).then(a.bind(a,2628)).then(e=>e.default),{loadableGenerated:{webpack:()=>[null]},loading:()=>(0,n.jsx)("p",{children:"Loading..."}),ssr:!1}),d=["events","images","attachments","sensors","reports","search","anomalies","data","maintenances","factories","organisations","users","auth","trends"];var swagger=()=>{let e="https://api.diagrams-technologies.dev/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version\n";return d.forEach(t=>{e+="&\nmutedTags="+t+"\n"}),(0,n.jsx)("div",{className:"App",children:(0,n.jsx)(s,{url:e,docExpansion:"none"})})},u=a(26552);function ApiReference(){return(0,n.jsxs)(o.A,{title:"API Reference",description:"",image:"/illustrations/banner.jpg",children:[(0,n.jsx)(u.Z,{children:(0,n.jsx)(swagger,{})}),(0,n.jsx)(i(),{id:"d57f5d33829997f6",children:"p.illustration{float:left;width:var(--block);margin:0 var(--gutter)0 0}img.jsx-d57f5d33829997f6{width:100%;margin:0}.clear.jsx-d57f5d33829997f6{clear:both}"})]})}},40874:function(e,t,a){"use strict";a.d(t,{Y:function(){return o}});var n=a(11752),r=a.n(n);let i=r()()||{},{publicRuntimeConfig:o}=i},20396:function(e,t,a){"use strict";a.d(t,{$Y:function(){return d},D5:function(){return c},EQ:function(){return u},Gy:function(){return n},IW:function(){return s},Xz:function(){return o},Z1:function(){return l},cp:function(){return r},yS:function(){return i}});let n="DiagRAMS",r="#005eb8",i="diagrams_tech",o="749px",c="750px",l="1049px",s="1050px",d="1399px",u="1400px"},62875:function(){},5152:function(e,t,a){e.exports=a(11221)}},function(e){e.O(0,[51,148,774,888,179],function(){return e(e.s=50769)}),_N_E=e.O()}]);