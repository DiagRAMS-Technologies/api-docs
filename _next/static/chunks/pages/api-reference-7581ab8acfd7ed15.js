(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{50769:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api-reference",function(){return a(40373)}])},95677:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{noSSR:function(){return c},default:function(){return o}});let n=a(38754),r=(a(67294),n._(a(8976)));function i(e){return{default:(null==e?void 0:e.default)||e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let a=r.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let o=n.loader,l=()=>null!=o?o().then(i):Promise.resolve(i(()=>null));return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?a({...n,loader:l}):(delete n.webpack,delete n.modules,c(a,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let n=a(38754),r=n._(a(67294)),i=r.default.createContext(null)},8976:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let n=a(38754),r=n._(a(67294)),i=a(92254),c=[],o=[],l=!1;function s(e){let t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function c(){if(!n){let t=new d(e,a);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!l){let e=a.webpack?a.webpack():a.modules;e&&o.push(t=>{for(let a of e)if(t.includes(a))return c()})}function s(e,t){!function(){c();let e=r.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(t=>{e(t)})}();let o=r.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),r.default.useMemo(()=>{var t;return o.loading||o.error?r.default.createElement(a.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?r.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return s.preload=()=>c(),s.displayName="LoadableComponent",r.default.forwardRef(s)}(s,e)}function m(e,t){let a=[];for(;e.length;){let n=e.pop();a.push(n(t))}return Promise.all(a).then(()=>{if(e.length)return m(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{m(c).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let a=()=>(l=!0,t());m(o,e).then(a,a)})),window.__NEXT_PRELOADREADY=u.preloadReady;let f=u},83488:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893),r=a(36465),i=a.n(r),c=a(62064);function o(e){let{children:t,className:a}=e;return(0,n.jsxs)("section",{className:i().dynamic([["bb3daf493c60c9e6",[c.IW,c.EQ]]])+" "+"root".concat(a?" "+a:""),children:[t,(0,n.jsx)(i(),{id:"bb3daf493c60c9e6",dynamic:[c.IW,c.EQ],children:".root.__jsx-style-dynamic-selector{background-color:var(--light);padding:-webkit-calc(var(--vRythm)*2)var(--gutter);padding:-moz-calc(var(--vRythm)*2)var(--gutter);padding:calc(var(--vRythm)*2)var(--gutter);max-width:1400px}@media screen and (min-width:".concat(c.IW,"){.root.__jsx-style-dynamic-selector{padding:-webkit-calc(var(--vRythm)*2)-webkit-calc(var(--gutter)*2);padding:-moz-calc(var(--vRythm)*2)-moz-calc(var(--gutter)*2);padding:calc(var(--vRythm)*2)calc(var(--gutter)*2)}}@media screen and (min-width:").concat(c.EQ,"){.root.__jsx-style-dynamic-selector{padding:-webkit-calc(var(--vRythm)*3)-webkit-calc(var(--gutter)*8);padding:-moz-calc(var(--vRythm)*3)-moz-calc(var(--gutter)*8);padding:calc(var(--vRythm)*3)calc(var(--gutter)*8)}}")})]})}},14913:function(e,t,a){"use strict";a.d(t,{A:function(){return g}});var n=a(85893),r=a(36465),i=a.n(r),c=a(62064),o=a(9008),l=a.n(o),s=a(11163),d=a(49421);function u(e){let{name:t,title:a,description:r,image:i}=e,o=(0,s.useRouter)(),u="".concat(a?"".concat(a," - "):"").concat(t),m=d.Y.baseURL+d.Y.basePath+(null==o?void 0:o.asPath),f="string"==typeof i&&i&&/^https?:\/\//.test(i)?i:i?d.Y.baseURL+d.Y.basePath+(i.startsWith("/")?"":"/")+i:d.Y.baseURL+d.Y.basePath+"/images/banner.png";return(0,n.jsxs)(l(),{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("title",{children:u}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{name:"theme-color",content:c.cp}),(0,n.jsx)("link",{rel:"canonical",href:m}),(0,n.jsx)("meta",{name:"author",content:c.Gy}),(0,n.jsx)("link",{rel:"icon",type:"image/svg+xml",href:d.Y.basePath+"/images/favicon.svg",sizes:"any"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:d.Y.basePath+"/images/favicon-16.png",sizes:"16x16"}),(0,n.jsx)("link",{rel:"icon shortcut",type:"image/png",href:d.Y.basePath+"/images/favicon-128.png",sizes:"128x128"}),(0,n.jsx)("meta",{name:"robots",content:"index,follow"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,n.jsx)("meta",{property:"og:locale",content:"fr_FR"}),(0,n.jsx)("meta",{property:"og:type",content:(null==o?void 0:o.pathname)==="/actualite"?"article":"website"}),(0,n.jsx)("meta",{property:"og:url",content:m}),(0,n.jsx)("meta",{property:"og:title",content:u}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:site_name",content:t}),f?(0,n.jsx)("meta",{property:"og:image",content:f}):null,f?(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}):(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@".concat(c.yS)}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@".concat(c.yS)}),(0,n.jsx)("meta",{property:"twitter:url",content:m}),f?(0,n.jsx)("meta",{property:"twitter:image",content:f}):null]})}var m=a(25675),f=a.n(m),h=a(41664),b=a.n(h);function p(){let e=(0,s.useRouter)();return(0,n.jsxs)("div",{className:"jsx-90e952bc4acb881e nav-bar",children:[(0,n.jsxs)("nav",{className:"jsx-90e952bc4acb881e",children:[(0,n.jsx)("span",{className:"jsx-90e952bc4acb881e bc-image",children:(0,n.jsx)(f(),{src:"".concat(d.Y.basePath,"/images/diagrams.png"),alt:"Picture of the author",fill:!0})}),[{name:"Home",path:"/",isHome:!0},{name:"Authentication",path:"/authentication",isHome:!1},{name:"Data bridge",path:"/data-bridge",isHome:!1},{name:"API Reference",path:"/api-reference",isHome:!1}].map((t,a)=>{let{name:r,path:i,isHome:c}=t;return(0,n.jsx)(b(),{href:i,className:(c?e.asPath===i:e.asPath.startsWith(i))?"selected":"",children:(0,n.jsx)("span",{className:"jsx-90e952bc4acb881e",children:r})},a)})]}),(0,n.jsx)(i(),{id:"90e952bc4acb881e",children:'.nav-bar.jsx-90e952bc4acb881e{background-color:var(--light);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}nav.jsx-90e952bc4acb881e{height:-webkit-calc(var(--vRythm)*2);height:-moz-calc(var(--vRythm)*2);height:calc(var(--vRythm)*2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.bc-image.jsx-90e952bc4acb881e{position:relative;width:-webkit-calc((var(--column)*2) + (var(--gutter)*1));width:-moz-calc((var(--column)*2) + (var(--gutter)*1));width:calc((var(--column)*2) + (var(--gutter)*1));width:calc(calc(var(--column)*2) + calc(var(--gutter)*1));height:-webkit-calc(var(--vRythm)*2);height:-moz-calc(var(--vRythm)*2);height:calc(var(--vRythm)*2);background-color:white;margin:0 var(--gutter)}.bc-image.jsx-90e952bc4acb881e img{-o-object-fit:scale-down;object-fit:scale-down}nav.jsx-90e952bc4acb881e>a{border-right:1px solid;display:block;border-color:var(--primary);background-color:var(--dark);line-height:-webkit-calc(var(--vRythm)*2);line-height:-moz-calc(var(--vRythm)*2);line-height:calc(var(--vRythm)*2);padding:0 var(--gutter);text-decoration:none;font-family:"Montserrat",sans-serif!important;font-size:20px;color:var(--light);font-weight:700;text-align:center}nav.jsx-90e952bc4acb881e>a.selected{color:var(--grey)}nav.jsx-90e952bc4acb881e>a:hover{color:var(--primary)}'})]})}function x(e){let{children:t}=e;return(0,n.jsxs)("main",{className:i().dynamic([["afbbd9718d9d43bf",[c.Xz,c.D5,c.Z1,c.IW,c.$Y,c.IW,c.EQ,c.EQ]]])+" content",children:[t,(0,n.jsx)(i(),{id:"afbbd9718d9d43bf",dynamic:[c.Xz,c.D5,c.Z1,c.IW,c.$Y,c.IW,c.EQ,c.EQ],children:".content.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;padding:var(--vRythm)var(--gutter)}@media screen and (max-width:".concat(c.Xz,"){.content.__jsx-style-dynamic-selector{-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}}@media screen and (min-width:").concat(c.D5,")and (max-width:").concat(c.Z1,"){.content.__jsx-style-dynamic-selector{padding:0 var(--gutter);-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media screen and (min-width:").concat(c.IW,")and (max-width:").concat(c.$Y,"){.content.__jsx-style-dynamic-selector{width:").concat(c.IW,";margin:0 auto;padding:-webkit-calc(var(--vRythm)*2)-webkit-calc(var(gutter)*2);padding:-moz-calc(var(--vRythm)*2)-moz-calc(var(gutter)*2);padding:calc(var(--vRythm)*2)calc(var(gutter)*2)}}@media screen and (min-width:").concat(c.EQ,"){.content.__jsx-style-dynamic-selector{width:").concat(c.EQ,";margin:0 auto;padding:-webkit-calc(var(--vRythm)*2)-webkit-calc(var(gutter)*3);padding:-moz-calc(var(--vRythm)*2)-moz-calc(var(gutter)*3);padding:calc(var(--vRythm)*2)calc(var(gutter)*3)}}")})]})}function g(e){let{children:t,title:a,description:r,image:o}=e;return(0,n.jsxs)("div",{className:"jsx-f2a89f886b8609ef root",children:[(0,n.jsx)(u,{name:c.Gy,title:a,description:r,image:o}),(0,n.jsx)(p,{}),(0,n.jsx)(x,{children:t}),(0,n.jsx)(i(),{id:"f2a89f886b8609ef",children:".root.jsx-f2a89f886b8609ef{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background-color:#f7f6f6}"})]})}},40373:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var n=a(85893),r=a(36465),i=a.n(r),c=a(14913);a(67294),a(68707);var o=a(5152),l=a.n(o);let s=l()(()=>Promise.all([a.e(954),a.e(58),a.e(858),a.e(654)]).then(a.bind(a,2628)).then(e=>e.default),{loadableGenerated:{webpack:()=>[null]},loading:()=>(0,n.jsx)("p",{children:"Loading..."}),ssr:!1}),d=["events","images","attachments","sensors","reports","search","anomalies","data","maintenances","factories","organisations","users","auth","trends"],u=()=>{let e="https://api.diagrams-technologies.dev/v0/openAPI?mutedParameters=X-APP-Version,X-SDK-Version,X-API-Version\n";return d.forEach(t=>{e+="&\nmutedTags="+t+"\n"}),(0,n.jsx)("div",{className:"App",children:(0,n.jsx)(s,{url:e,docExpansion:"none"})})};var m=a(83488);function f(){return(0,n.jsxs)(c.A,{title:"API Reference",description:"",image:"/illustrations/banner.jpg",children:[(0,n.jsx)(m.Z,{children:(0,n.jsx)(u,{})}),(0,n.jsx)(i(),{id:"d57f5d33829997f6",children:"p.illustration{float:left;width:var(--block);margin:0 var(--gutter)0 0}img.jsx-d57f5d33829997f6{width:100%;margin:0}.clear.jsx-d57f5d33829997f6{clear:both}"})]})}},49421:function(e,t,a){"use strict";a.d(t,{Y:function(){return c}});var n=a(11752),r=a.n(n);let i=r()()||{},{publicRuntimeConfig:c}=i},62064:function(e,t,a){"use strict";a.d(t,{$Y:function(){return d},D5:function(){return o},EQ:function(){return u},Gy:function(){return n},IW:function(){return s},Xz:function(){return c},Z1:function(){return l},cp:function(){return r},yS:function(){return i}});let n="DiagRAMS",r="#005eb8",i="diagrams_tech",c="749px",o="750px",l="1049px",s="1050px",d="1399px",u="1400px"},68707:function(){},5152:function(e,t,a){e.exports=a(95677)}},function(e){e.O(0,[453,834,774,888,179],function(){return e(e.s=50769)}),_N_E=e.O()}]);