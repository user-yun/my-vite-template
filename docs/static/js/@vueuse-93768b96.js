import{c as C,r as g,i as ye,g as be,o as we,a as ie,b as Pe,n as ue,s as ce,w as fe,d as Se,u as de,e as w}from"./@vue-53852afc.js";var Ee=Object.defineProperty,$e=Object.defineProperties,Fe=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ie=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Te=(e,t)=>{for(var r in t||(t={}))je.call(t,r)&&q(e,r,t[r]);if(B)for(var r of B(t))Ie.call(t,r)&&q(e,r,t[r]);return e},Ce=(e,t)=>$e(e,Fe(t));function Tt(e,t){var r;const n=ce();return fe(()=>{n.value=e()},Ce(Te({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),Se(n)}var H;const N=typeof window<"u",Ne=e=>typeof e<"u",Ct=e=>typeof e=="boolean",M=e=>typeof e=="function",Nt=e=>typeof e=="number",pe=e=>typeof e=="string",R=()=>{};N&&((H=window==null?void 0:window.navigator)!=null&&H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function F(e){return typeof e=="function"?e():de(e)}function k(e,t){function r(...n){return new Promise((a,o)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(a).catch(o)})}return r}const ve=e=>e();function De(e,t={}){let r,n,a=R;const o=l=>{clearTimeout(l),a(),a=R};return l=>{const i=F(e),u=F(t.maxWait);return r&&o(r),i<=0||u!==void 0&&u<=0?(n&&(o(n),n=null),Promise.resolve(l())):new Promise((d,m)=>{a=t.rejectOnCancel?m:d,u&&!n&&(n=setTimeout(()=>{r&&o(r),n=null,d(l())},u)),r=setTimeout(()=>{n&&o(n),n=null,d(l())},i)})}}function Re(e,t=!0,r=!0,n=!1){let a=0,o,s=!0,l=R,i;const u=()=>{o&&(clearTimeout(o),o=void 0,l(),l=R)};return m=>{const v=F(e),f=Date.now()-a,c=()=>i=m();if(u(),v<=0)return a=Date.now(),c();if(f>v&&(r||!s))a=Date.now(),c();else if(t)return new Promise((p,O)=>{l=n?O:p,o=setTimeout(()=>{a=Date.now(),s=!0,p(c()),u()},v-f)});return!r&&!o&&(o=setTimeout(()=>s=!0,v)),s=!1,i}}function Ae(e=ve){const t=g(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...o)=>{t.value&&e(...o)}}}function Me(e){return e}function D(e){return be()?(we(e),!0):!1}function xe(e,t=200,r={}){return k(De(t,r),e)}function Dt(e,t=200,r={}){const n=g(e.value),a=xe(()=>{n.value=e.value},t,r);return w(e,()=>a()),n}function Rt(e,t=200,r=!1,n=!0,a=!1){return k(Re(t,r,n,a),e)}function me(e){return typeof e=="function"?C(e):g(e)}function V(e,t=!0){ie()?Pe(e):t?e():ue(e)}function At(e,t,r={}){const{immediate:n=!0}=r,a=g(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function l(){a.value=!1,s()}function i(...u){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...u)},F(t))}return n&&(a.value=!0,N&&i()),D(l),{isPending:a,start:i,stop:l}}function Mt(e=!1,t={}){const{truthyValue:r=!0,falsyValue:n=!1}=t,a=ye(e),o=g(e);function s(l){if(arguments.length)return o.value=l,o.value;{const i=F(r);return o.value=o.value===i?F(n):i,o.value}}return a?s:[o,s]}var J=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,ze=(e,t)=>{var r={};for(var n in e)Ve.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r};function We(e,t,r={}){const n=r,{eventFilter:a=ve}=n,o=ze(n,["eventFilter"]);return w(e,k(a,t),o)}var ke=Object.defineProperty,Qe=Object.defineProperties,Be=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qe=(e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&U(e,r,t[r]);if(x)for(var r of x(t))ge.call(t,r)&&U(e,r,t[r]);return e},He=(e,t)=>Qe(e,Be(t)),Je=(e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&x)for(var n of x(e))t.indexOf(n)<0&&ge.call(e,n)&&(r[n]=e[n]);return r};function Ue(e,t,r={}){const n=r,{eventFilter:a}=n,o=Je(n,["eventFilter"]),{eventFilter:s,pause:l,resume:i,isActive:u}=Ae(a);return{stop:We(e,t,He(qe({},o),{eventFilter:s})),pause:l,resume:i,isActive:u}}function E(e){var t;const r=F(e);return(t=r==null?void 0:r.$el)!=null?t:r}const $=N?window:void 0,Q=N?window.document:void 0;N&&window.navigator;N&&window.location;function b(...e){let t,r,n,a;if(pe(e[0])||Array.isArray(e[0])?([r,n,a]=e,t=$):[t,r,n,a]=e,!t)return R;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const o=[],s=()=>{o.forEach(d=>d()),o.length=0},l=(d,m,v)=>(d.addEventListener(m,v,a),()=>d.removeEventListener(m,v,a)),i=w(()=>E(t),d=>{s(),d&&o.push(...r.flatMap(m=>n.map(v=>l(d,m,v))))},{immediate:!0,flush:"post"}),u=()=>{i(),s()};return D(u),u}function xt(e,t,r={}){const{window:n=$,ignore:a=[],capture:o=!0,detectIframe:s=!1}=r;if(!n)return;let l=!0,i;const u=f=>a.some(c=>{if(typeof c=="string")return Array.from(n.document.querySelectorAll(c)).some(p=>p===f.target||f.composedPath().includes(p));{const p=E(c);return p&&(f.target===p||f.composedPath().includes(p))}}),d=f=>{n.clearTimeout(i);const c=E(e);if(!(!c||c===f.target||f.composedPath().includes(c))){if(f.detail===0&&(l=!u(f)),!l){l=!0;return}t(f)}},m=[b(n,"click",d,{passive:!0,capture:o}),b(n,"pointerdown",f=>{const c=E(e);c&&(l=!f.composedPath().includes(c)&&!u(f))},{passive:!0}),b(n,"pointerup",f=>{if(f.button===0){const c=f.composedPath();f.composedPath=()=>c,i=n.setTimeout(()=>d(f),50)}},{passive:!0}),s&&b(n,"blur",f=>{var c;const p=E(e);((c=n.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(p!=null&&p.contains(n.document.activeElement))&&t(f)})].filter(Boolean);return()=>m.forEach(f=>f())}function L(e,t=!1){const r=g(),n=()=>r.value=Boolean(e());return n(),V(n,t),r}function Ge(e,t={}){const{window:r=$}=t,n=L(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let a;const o=g(!1),s=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",l):a.removeListener(l))},l=()=>{n.value&&(s(),a=r.matchMedia(me(e).value),o.value=a.matches,"addEventListener"in a?a.addEventListener("change",l):a.addListener(l))};return fe(l),D(()=>s()),o}function Ke(e){return JSON.parse(JSON.stringify(e))}const z=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__";z[W]=z[W]||{};const Xe=z[W];function Oe(e,t){return Xe[e]||t}function Ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ze=Object.defineProperty,G=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))et.call(t,r)&&K(e,r,t[r]);if(G)for(var r of G(t))tt.call(t,r)&&K(e,r,t[r]);return e};const rt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function nt(e,t,r,n={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:l=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:d,window:m=$,eventFilter:v,onError:f=_=>{console.error(_)}}=n,c=(d?ce:g)(t);if(!r)try{r=Oe("getDefaultStorage",()=>{var _;return(_=$)==null?void 0:_.localStorage})()}catch(_){f(_)}if(!r)return c;const p=F(t),O=Ye(p),h=(a=n.serializer)!=null?a:rt[O],{pause:y,resume:P}=Ue(c,()=>j(c.value),{flush:o,deep:s,eventFilter:v});return m&&l&&b(m,"storage",A),A(),c;function j(_){try{if(_==null)r.removeItem(e);else{const S=h.write(_),I=r.getItem(e);I!==S&&(r.setItem(e,S),m&&(m==null||m.dispatchEvent(new StorageEvent("storage",{key:e,oldValue:I,newValue:S,storageArea:r}))))}}catch(S){f(S)}}function T(_){const S=_?_.newValue:r.getItem(e);if(S==null)return i&&p!==null&&r.setItem(e,h.write(p)),p;if(!_&&u){const I=h.read(S);return M(u)?u(I,p):O==="object"&&!Array.isArray(I)?X(X({},p),I):I}else return typeof S!="string"?S:h.read(S)}function A(_){if(!(_&&_.storageArea!==r)){if(_&&_.key==null){c.value=p;return}if(!(_&&_.key!==e)){y();try{c.value=T(_)}catch(S){f(S)}finally{_?ue(P):P()}}}}}function he(e){return Ge("(prefers-color-scheme: dark)",e)}var at=Object.defineProperty,Y=Object.getOwnPropertySymbols,ot=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?at(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,st=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&Z(e,r,t[r]);if(Y)for(var r of Y(t))lt.call(t,r)&&Z(e,r,t[r]);return e};function it(e={}){const{selector:t="html",attribute:r="class",initialValue:n="auto",window:a=$,storage:o,storageKey:s="vueuse-color-scheme",listenToStorageChanges:l=!0,storageRef:i,emitAuto:u}=e,d=st({auto:"",light:"light",dark:"dark"},e.modes||{}),m=he({window:a}),v=C(()=>m.value?"dark":"light"),f=i||(s==null?g(n):nt(s,n,o,{window:a,listenToStorageChanges:l})),c=C({get(){return f.value==="auto"&&!u?v.value:f.value},set(y){f.value=y}}),p=Oe("updateHTMLAttrs",(y,P,j)=>{const T=a==null?void 0:a.document.querySelector(y);if(T)if(P==="class"){const A=j.split(/\s/g);Object.values(d).flatMap(_=>(_||"").split(/\s/g)).filter(Boolean).forEach(_=>{A.includes(_)?T.classList.add(_):T.classList.remove(_)})}else T.setAttribute(P,j)});function O(y){var P;const j=y==="auto"?v.value:y;p(t,r,(P=d[j])!=null?P:j)}function h(y){e.onChanged?e.onChanged(y,O):O(y)}return w(c,h,{flush:"post",immediate:!0}),u&&w(v,()=>h(c.value),{flush:"post"}),V(()=>h(c.value)),c}function Vt(e,t,{window:r=$,initialValue:n=""}={}){const a=g(n),o=C(()=>{var s;return E(t)||((s=r==null?void 0:r.document)==null?void 0:s.documentElement)});return w([o,()=>F(e)],([s,l])=>{var i;if(s&&r){const u=(i=r.getComputedStyle(s).getPropertyValue(l))==null?void 0:i.trim();a.value=u||n}},{immediate:!0}),w(a,s=>{var l;(l=o.value)!=null&&l.style&&o.value.style.setProperty(F(e),s)}),a}var ut=Object.defineProperty,ct=Object.defineProperties,ft=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,te=(e,t,r)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,vt=(e,t)=>{for(var r in t||(t={}))dt.call(t,r)&&te(e,r,t[r]);if(ee)for(var r of ee(t))pt.call(t,r)&&te(e,r,t[r]);return e},mt=(e,t)=>ct(e,ft(t));function Lt(e={}){const{valueDark:t="dark",valueLight:r="",window:n=$}=e,a=it(mt(vt({},e),{onChanged:(l,i)=>{var u;e.onChanged?(u=e.onChanged)==null||u.call(e,l==="dark"):i(l)},modes:{dark:t,light:r}})),o=he({window:n});return C({get(){return a.value==="dark"},set(l){l===o.value?a.value="auto":a.value=l?"dark":"light"}})}function zt({document:e=Q}={}){if(!e)return g("visible");const t=g(e.visibilityState);return b(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var re=Object.getOwnPropertySymbols,_t=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,Ot=(e,t)=>{var r={};for(var n in e)_t.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&re)for(var n of re(e))t.indexOf(n)<0&&gt.call(e,n)&&(r[n]=e[n]);return r};function ht(e,t,r={}){const n=r,{window:a=$}=n,o=Ot(n,["window"]);let s;const l=L(()=>a&&"ResizeObserver"in a),i=()=>{s&&(s.disconnect(),s=void 0)},u=w(()=>E(e),m=>{i(),l.value&&a&&m&&(s=new ResizeObserver(t),s.observe(m,o))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return D(d),{isSupported:l,stop:d}}function Wt(e,t={}){const{reset:r=!0,windowResize:n=!0,windowScroll:a=!0,immediate:o=!0}=t,s=g(0),l=g(0),i=g(0),u=g(0),d=g(0),m=g(0),v=g(0),f=g(0);function c(){const p=E(e);if(!p){r&&(s.value=0,l.value=0,i.value=0,u.value=0,d.value=0,m.value=0,v.value=0,f.value=0);return}const O=p.getBoundingClientRect();s.value=O.height,l.value=O.bottom,i.value=O.left,u.value=O.right,d.value=O.top,m.value=O.width,v.value=O.x,f.value=O.y}return ht(e,c),w(()=>E(e),p=>!p&&c()),a&&b("scroll",c,{capture:!0,passive:!0}),n&&b("resize",c,{passive:!0}),V(()=>{o&&c()}),{height:s,bottom:l,left:i,right:u,top:d,width:m,x:v,y:f,update:c}}function kt(e,{window:t=$,scrollTarget:r}={}){const n=g(!1),a=()=>{if(!t)return;const o=t.document,s=E(e);if(!s)n.value=!1;else{const l=s.getBoundingClientRect();n.value=l.top<=(t.innerHeight||o.documentElement.clientHeight)&&l.left<=(t.innerWidth||o.documentElement.clientWidth)&&l.bottom>=0&&l.right>=0}};return w(()=>E(e),()=>a(),{immediate:!0,flush:"post"}),t&&b(r||t,"scroll",a,{capture:!1,passive:!0}),n}const ne=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Qt(e,t={}){const{document:r=Q,autoExit:n=!1}=t,a=e||(r==null?void 0:r.querySelector("html")),o=g(!1);let s=ne[0];const l=L(()=>{if(r){for(const p of ne)if(p[1]in r)return s=p,!0}else return!1;return!1}),[i,u,d,,m]=s;async function v(){l.value&&(r!=null&&r[d]&&await r[u](),o.value=!1)}async function f(){if(!l.value)return;await v();const p=E(a);p&&(await p[i](),o.value=!0)}async function c(){o.value?await v():await f()}return r&&b(r,m,()=>{o.value=!!(r!=null&&r[d])},!1),n&&D(v),{isSupported:l,isFullscreen:o,enter:f,exit:v,toggle:c}}var ae=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,wt=(e,t)=>{var r={};for(var n in e)yt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&ae)for(var n of ae(e))t.indexOf(n)<0&&bt.call(e,n)&&(r[n]=e[n]);return r};function Pt(e,t,r={}){const n=r,{window:a=$}=n,o=wt(n,["window"]);let s;const l=L(()=>a&&"MutationObserver"in a),i=()=>{s&&(s.disconnect(),s=void 0)},u=w(()=>E(e),m=>{i(),l.value&&a&&m&&(s=new MutationObserver(t),s.observe(m,o))},{immediate:!0}),d=()=>{i(),u()};return D(d),{isSupported:l,stop:d}}var oe;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(oe||(oe={}));function Bt(e=null,t={}){var r,n;const{document:a=Q}=t,o=me((r=e??(a==null?void 0:a.title))!=null?r:null),s=e&&M(e);function l(i){if(!("titleTemplate"in t))return i;const u=t.titleTemplate||"%s";return M(u)?u(i):de(u).replace(/%s/g,i)}return w(o,(i,u)=>{i!==u&&a&&(a.title=l(pe(i)?i:""))},{immediate:!0}),t.observe&&!t.titleTemplate&&a&&!s&&Pt((n=a.head)==null?void 0:n.querySelector("title"),()=>{a&&a.title!==o.value&&(o.value=l(a.title))},{childList:!0}),o}var St=Object.defineProperty,le=Object.getOwnPropertySymbols,Et=Object.prototype.hasOwnProperty,$t=Object.prototype.propertyIsEnumerable,se=(e,t,r)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ft=(e,t)=>{for(var r in t||(t={}))Et.call(t,r)&&se(e,r,t[r]);if(le)for(var r of le(t))$t.call(t,r)&&se(e,r,t[r]);return e};const jt={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ft({linear:Me},jt);function qt(e,t,r,n={}){var a,o,s;const{clone:l=!1,passive:i=!1,eventName:u,deep:d=!1,defaultValue:m}=n,v=ie(),f=r||(v==null?void 0:v.emit)||((a=v==null?void 0:v.$emit)==null?void 0:a.bind(v))||((s=(o=v==null?void 0:v.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(v==null?void 0:v.proxy));let c=u;t||(t="modelValue"),c=u||c||`update:${t.toString()}`;const p=h=>l?M(l)?l(h):Ke(h):h,O=()=>Ne(e[t])?p(e[t]):m;if(i){const h=O(),y=g(h);return w(()=>e[t],P=>y.value=p(P)),w(y,P=>{(P!==e[t]||d)&&f(c,P)},{deep:d}),y}else return C({get(){return O()},set(h){f(c,h)}})}function Ht({window:e=$}={}){if(!e)return g(!1);const t=g(e.document.hasFocus());return b(e,"blur",()=>{t.value=!1}),b(e,"focus",()=>{t.value=!0}),t}function Jt(e={}){const{window:t=$,initialWidth:r=1/0,initialHeight:n=1/0,listenOrientation:a=!0,includeScrollbar:o=!0}=e,s=g(r),l=g(n),i=()=>{t&&(o?(s.value=t.innerWidth,l.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return i(),V(i),b("resize",i,{passive:!0}),a&&b("orientationchange",i,{passive:!0}),{width:s,height:l}}export{Nt as a,Ct as b,Jt as c,Wt as d,b as e,ht as f,Rt as g,Vt as h,N as i,At as j,zt as k,Ht as l,Tt as m,qt as n,xt as o,Bt as p,Lt as q,Dt as r,Mt as s,D as t,E as u,Qt as v,kt as w};