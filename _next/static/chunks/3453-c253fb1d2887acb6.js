(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3453],{2350:function(){},11752:function(e,t,r){e.exports=r(7905)},13991:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return s},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return l},ACTION_FAST_REFRESH:function(){return a},ACTION_SERVER_ACTION:function(){return c}});let i="refresh",o="navigate",s="restore",u="server-patch",l="prefetch",a="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},81516:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},93740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(38754),i=r(61757),o=i._(r(67294)),s=n._(r(42636)),u=r(97757),l=r(3735),a=r(83341);r(34210);let c=n._(r(57746)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/api-doc/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function d(e){return void 0!==e.default}function h(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,i,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function m(e){let[t,r]=o.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,o.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:s,className:u,imgStyle:l,blurStyle:a,isLazy:c,fetchPriority:f,fill:d,placeholder:h,loading:g,srcString:v,config:_,unoptimized:y,loader:b,onLoadRef:S,onLoadingCompleteRef:C,setBlurComplete:w,setShowAltText:j,onLoad:R,onError:E,...O}=e;return g=c?"lazy":g,o.default.createElement("img",{...O,...m(f),loading:g,width:i,height:n,decoding:"async","data-nimg":d?"fill":"1",className:u,style:{...l,...a},...r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,v,h,S,C,w,y))},[v,h,S,C,w,E,y,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,h,S,C,w,y)},onError:e=>{j(!0),"blur"===h&&w(!0),E&&E(e)}})}),v=(0,o.forwardRef)((e,t)=>{var r;let n,i,{src:p,sizes:v,unoptimized:_=!1,priority:y=!1,loading:b,className:S,quality:C,width:w,height:j,fill:R,style:E,onLoad:O,onLoadingComplete:T,placeholder:x="empty",blurDataURL:A,fetchPriority:F,layout:P,objectFit:k,objectPosition:z,lazyBoundary:I,lazyRoot:M,...N}=e,L=(0,o.useContext)(a.ImageConfigContext),U=(0,o.useMemo)(()=>{let e=f||L||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[L]),D=N.loader||c.default;delete N.loader;let B="__next_img_default"in D;if(B){if("custom"===U.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...n}=t;return e(n)}}if(P){"fill"===P&&(R=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!v&&(v=t)}let H="",q=h(w),K=h(j);if("object"==typeof(r=p)&&(d(r)||void 0!==r.src)){let e=d(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,A=A||e.blurDataURL,H=e.src,!R){if(q||K){if(q&&!K){let t=q/e.width;K=Math.round(e.height*t)}else if(!q&&K){let t=K/e.height;q=Math.round(e.width*t)}}else q=e.width,K=e.height}}let V=!y&&("lazy"===b||void 0===b);(!(p="string"==typeof p?p:H)||p.startsWith("data:")||p.startsWith("blob:"))&&(_=!0,V=!1),U.unoptimized&&(_=!0),B&&p.endsWith(".svg")&&!U.dangerouslyAllowSVG&&(_=!0),y&&(F="high");let[W,G]=(0,o.useState)(!1),[Y,J]=(0,o.useState)(!1),$=h(C),Q=Object.assign(R?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:z}:{},Y?{}:{color:"transparent"},E),X="blur"===x&&A&&!W?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,u.getImageBlurSvg)({widthInt:q,heightInt:K,blurWidth:n,blurHeight:i,blurDataURL:A,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:a}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:o,kind:"x"}}(t,i,s),c=l.length-1;return{sizes:s||"w"!==a?s:"100vw",srcSet:l.map((e,n)=>u({config:t,src:r,quality:o,width:e})+" "+("w"===a?e:n+1)+a).join(", "),src:u({config:t,src:r,quality:o,width:l[c]})}}({config:U,src:p,unoptimized:_,width:q,quality:$,sizes:v,loader:D}),ee=p,et=(0,o.useRef)(O);(0,o.useEffect)(()=>{et.current=O},[O]);let er=(0,o.useRef)(T);(0,o.useEffect)(()=>{er.current=T},[T]);let en={isLazy:V,imgAttributes:Z,heightInt:K,widthInt:q,qualityInt:$,className:S,imgStyle:Q,blurStyle:X,loading:b,config:U,fetchPriority:F,fill:R,unoptimized:_,placeholder:x,loader:D,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:G,setShowAltText:J,...N};return o.default.createElement(o.default.Fragment,null,o.default.createElement(g,{...en,ref:t}),y?o.default.createElement(s.default,null,o.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:N.crossOrigin,...m(F)})):null)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(38754),i=n._(r(67294)),o=r(14532),s=r(83353),u=r(61410),l=r(79064),a=r(370),c=r(69955),f=r(24224),d=r(80508),h=r(81516),p=r(64266),m=r(13991),g=new Set;function v(e,t,r,n,i,o){if(!o&&!(0,s.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+i;if(g.has(o))return;g.add(o)}let u=o?e.prefetch(t,i):e.prefetch(t,r,n);Promise.resolve(u).catch(e=>{})}function _(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:u,as:g,children:y,prefetch:b=null,passHref:S,replace:C,shallow:w,scroll:j,locale:R,onClick:E,onMouseEnter:O,onTouchStart:T,legacyBehavior:x=!1,...A}=e;r=y,x&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let F=!1!==b,P=null===b?m.PrefetchKind.AUTO:m.PrefetchKind.FULL,k=i.default.useContext(c.RouterContext),z=i.default.useContext(f.AppRouterContext),I=null!=k?k:z,M=!k,{href:N,as:L}=i.default.useMemo(()=>{if(!k){let e=_(u);return{href:e,as:g?_(g):e}}let[e,t]=(0,o.resolveHref)(k,u,!0);return{href:e,as:g?(0,o.resolveHref)(k,g):t||e}},[k,u,g]),U=i.default.useRef(N),D=i.default.useRef(L);x&&(n=i.default.Children.only(r));let B=x?n&&"object"==typeof n&&n.ref:t,[H,q,K]=(0,d.useIntersection)({rootMargin:"200px"}),V=i.default.useCallback(e=>{(D.current!==L||U.current!==N)&&(K(),D.current=L,U.current=N),H(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[L,B,N,K,H]);i.default.useEffect(()=>{I&&q&&F&&v(I,N,L,{locale:R},{kind:P},M)},[L,N,q,R,F,null==k?void 0:k.locale,I,M,P]);let W={ref:V,onClick(e){x||"function"!=typeof E||E(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,o,u,l,a,c,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,s.isLocalURL)(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:a,scroll:l}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};c?i.default.startTransition(p):p()}(e,I,N,L,C,w,j,R,M,F)},onMouseEnter(e){x||"function"!=typeof O||O(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(F||!M)&&v(I,N,L,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:P},M)},onTouchStart(e){x||"function"!=typeof T||T(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(F||!M)&&v(I,N,L,{locale:R,priority:!0,bypassPrefetchedCheck:!0},{kind:P},M)}};if((0,l.isAbsoluteUrl)(L))W.href=L;else if(!x||S||"a"===n.type&&!("href"in n.props)){let e=void 0!==R?R:null==k?void 0:k.locale,t=(null==k?void 0:k.isLocaleDomain)&&(0,h.getDomainLocale)(L,e,null==k?void 0:k.locales,null==k?void 0:k.domainLocales);W.href=t||(0,p.addBasePath)((0,a.addLocale)(L,e,null==k?void 0:k.defaultLocale))}return x?i.default.cloneElement(n,W):i.default.createElement("a",{...A,...W},r)}),b=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},80508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return l}});let n=r(67294),i=r(10029),o="function"==typeof IntersectionObserver,s=new Map,u=[];function l(e){let{rootRef:t,rootMargin:r,disabled:l}=e,a=l||!o,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(o){if(a||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:i,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=s.get(n)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:i},u.push(r),s.set(r,t),t}(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),s.delete(n);let e=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[a,r,t,c,d.current]);let p=(0,n.useCallback)(()=>{f(!1)},[]);return[h,c,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},97757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,u=n||t,l=i||r,a=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return u&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+u+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+a+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},57746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},69578:function(e,t,r){var n=r(34155);r(2350);var i=r(67294),o=i&&"object"==typeof i&&"default"in i?i:{default:i};function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=void 0!==n&&n.env&&!0,l=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,o=void 0===i?u:i;c(l(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",c("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var s=document.querySelector('meta[property="csp-nonce"]');this._nonce=s?s.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(c(l(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return u||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed){var r=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(n){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];c(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},r.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},r.cssRules=function(){var e=this;return this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&c(l(t),"makeStyleTag accepts only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},s(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&s(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var f=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},d={};function h(e,t){if(!t)return"jsx-"+e;var r=String(t),n=e+r;return d[n]||(d[n]="jsx-"+f(e+"-"+r)),d[n]}function p(e,t){var r=e+t;return d[r]||(d[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),d[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,i=t.optimizeForSpeed,o=void 0!==i&&i;this._sheet=n||new a({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var o=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[n]=o,this._instancesCounts[n]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],n=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:n}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,n=e.id;if(r){var i=h(n,r);return{styleId:i,rules:Array.isArray(t)?t.map(function(e){return p(i,e)}):[p(i,t)]}}return{styleId:h(n),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),g=i.createContext(null);g.displayName="StyleSheetContext";var v=o.default.useInsertionEffect||o.default.useLayoutEffect,_=new m;function y(e){var t=_||i.useContext(g);return t&&v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}y.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=y},36465:function(e,t,r){"use strict";e.exports=r(69578).style},9008:function(e,t,r){e.exports=r(42636)},25675:function(e,t,r){e.exports=r(93740)},41664:function(e,t,r){e.exports=r(95569)},11163:function(e,t,r){e.exports=r(96885)},34155:function(e){var t,r,n,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var l=[],a=!1,c=-1;function f(){a&&n&&(a=!1,n.length?l=n.concat(l):c=-1,l.length&&d())}function d(){if(!a){var e=u(f);a=!0;for(var t=l.length;t;){for(n=l,l=[];++c<t;)n&&n[c].run();c=-1,t=l.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new h(e,t)),1!==l.length||a||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);