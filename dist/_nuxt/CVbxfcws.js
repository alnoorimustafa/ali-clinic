import{j as ue,n as de,r as T,aF as Ee,k as W,aG as Le,X as De,aH as B,a0 as ce,P as $e,l as y,L as Je,O as Me,_ as H,g as K,o as I,H as D,D as ie,U as le,w as Y,v as j,s as J,V as Oe,a as Ae,aI as Ue,aJ as We,aK as He,m as ee,G as Ke,aL as Re,Q as Qe,R as M,M as _e,f as z,h as Z,p as fe,q as N,x as q,B as U,c as X,t as Xe,i as Ye,b as he,y as Ze}from"./DegSvyRY.js";import{_ as Ge}from"./CCWj26gJ.js";import Pe from"./DUdbph0b.js";const ve=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function se(e,r){r?r={...ve,...r}:r=ve;const n=Ne(r);return n.dispatch(e),n.toString()}const et=Object.freeze(["prototype","__proto__","constructor"]);function Ne(e){let r="",n=new Map;const a=t=>{r+=t};return{toString(){return r},getContext(){return n},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let l="";const s=i.length;s<10?l="unknown:["+i+"]":l=i.slice(8,s-1),l=l.toLowerCase();let f=null;if((f=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+f+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return a("buffer:"),a(t.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](t):e.ignoreUnknown||this.unkown(t,l);else{let o=Object.keys(t);e.unorderedObjects&&(o=o.sort());let u=[];e.respectType!==!1&&!me(t)&&(u=et),e.excludeKeys&&(o=o.filter(c=>!e.excludeKeys(c)),u=u.filter(c=>!e.excludeKeys(c))),a("object:"+(o.length+u.length)+":");const d=c=>{this.dispatch(c),a(":"),e.excludeValues||this.dispatch(t[c]),a(",")};for(const c of o)d(c);for(const c of u)d(c)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,a("array:"+t.length+":"),!i||t.length<=1){for(const f of t)this.dispatch(f);return}const l=new Map,s=t.map(f=>{const o=Ne(e);o.dispatch(f);for(const[u,d]of o.getContext())l.set(u,d);return o.toString()});return n=l,s.sort(),this.array(s,!1)},date(t){return a("date:"+t.toJSON())},symbol(t){return a("symbol:"+t.toString())},unkown(t,i){if(a(i),!!t&&(a(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return a("error:"+t.toString())},boolean(t){return a("bool:"+t)},string(t){a("string:"+t.length+":"),a(t)},function(t){a("fn:"),me(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return a("number:"+t)},xml(t){return a("xml:"+t.toString())},null(){return a("Null")},undefined(){return a("Undefined")},regexp(t){return a("regex:"+t.toString())},uint8array(t){return a("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return a("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return a("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return a("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return a("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return a("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return a("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return a("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return a("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return a("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return a("url:"+t.toString())},map(t){a("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){a("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return a("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return a("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return a("domwindow")},bigint(t){return a("bigint:"+t.toString())},process(){return a("process")},timer(){return a("timer")},pipe(){return a("pipe")},tcp(){return a("tcp")},udp(){return a("udp")},tty(){return a("tty")},statwatcher(){return a("statwatcher")},securecontext(){return a("securecontext")},connection(){return a("connection")},zlib(){return a("zlib")},context(){return a("context")},nodescript(){return a("nodescript")},httpparser(){return a("httpparser")},dataview(){return a("dataview")},signal(){return a("signal")},fsevent(){return a("fsevent")},tlswrap(){return a("tlswrap")}}}const Be="[native code] }",tt=Be.length;function me(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-tt)===Be}function ke(e,r,n={}){return e===r||se(e,n)===se(r,n)}function at(e,r,n={}){const a=oe(e,n),t=oe(r,n);return je(a,t,n)}function je(e,r,n={}){var i,l;const a=[],t=new Set([...Object.keys(e.props||{}),...Object.keys(r.props||{})]);if(e.props&&r.props)for(const s of t){const f=e.props[s],o=r.props[s];f&&o?a.push(...je((i=e.props)==null?void 0:i[s],(l=r.props)==null?void 0:l[s],n)):(f||o)&&a.push(new we((o||f).key,f?"removed":"added",o,f))}return t.size===0&&e.hash!==r.hash&&a.push(new we((r||e).key,"changed",r,e)),a}function oe(e,r,n=""){if(e&&typeof e!="object")return new xe(n,e,se(e,r));const a={},t=[];for(const i in e)a[i]=oe(e[i],r,n?`${n}.${i}`:i),t.push(a[i].hash);return new xe(n,e,`{${t.join(":")}}`,a)}class we{constructor(r,n,a,t){this.key=r,this.type=n,this.newValue=a,this.oldValue=t}toString(){return this.toJSON()}toJSON(){var r;switch(this.type){case"added":return`Added   \`${this.key}\``;case"removed":return`Removed \`${this.key}\``;case"changed":return`Changed \`${this.key}\` from \`${((r=this.oldValue)==null?void 0:r.toString())||"-"}\` to \`${this.newValue.toString()}\``}}}class xe{constructor(r,n,a,t){this.key=r,this.value=n,this.hash=a,this.props=t}toString(){return this.props?`{${Object.keys(this.props).join(",")}}`:JSON.stringify(this.value)}toJSON(){const r=this.key||".";return this.props?`${r}({${Object.keys(this.props).join(",")}})`:`${r}(${this.value})`}}function rt(e){return Le()?(De(e),!0):!1}const nt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const it=e=>typeof e<"u",lt=Object.prototype.toString,st=e=>lt.call(e)==="[object Object]",G=()=>{};function Fe(e,r){function n(...a){return new Promise((t,i)=>{Promise.resolve(e(()=>r.apply(this,a),{fn:r,thisArg:this,args:a})).then(t).catch(i)})}return n}const qe=e=>e();function ot(e,r={}){let n,a,t=G;const i=s=>{clearTimeout(s),t(),t=G};return s=>{const f=B(e),o=B(r.maxWait);return n&&i(n),f<=0||o!==void 0&&o<=0?(a&&(i(a),a=null),Promise.resolve(s())):new Promise((u,d)=>{t=r.rejectOnCancel?d:u,o&&!a&&(a=setTimeout(()=>{n&&i(n),a=null,u(s())},o)),n=setTimeout(()=>{a&&i(a),a=null,u(s())},f)})}}function ut(e=qe){const r=T(!0);function n(){r.value=!1}function a(){r.value=!0}const t=(...i)=>{r.value&&e(...i)};return{isActive:Ee(r),pause:n,resume:a,eventFilter:t}}function dt(e){return ce()}function Se(e){return Array.isArray(e)?e:[e]}function ct(e,r=200,n={}){return Fe(ot(r,n),e)}function ft(e,r,n={}){const{eventFilter:a=qe,...t}=n;return W(e,Fe(a,r),t)}function gt(e,r,n={}){const{eventFilter:a,...t}=n,{eventFilter:i,pause:l,resume:s,isActive:f}=ut(a);return{stop:ft(e,r,{...t,eventFilter:i}),pause:l,resume:s,isActive:f}}function yt(e,r=!0,n){dt()?ue(e,n):r?e():de(e)}function Wt(e,r,n){let a;Je(n)?a={evaluating:n}:a=n;const{lazy:t=!1,evaluating:i=void 0,shallow:l=!0,onError:s=G}=a,f=T(!t),o=l?$e(r):T(r);let u=0;return Me(async d=>{if(!f.value)return;u++;const c=u;let g=!1;i&&Promise.resolve().then(()=>{i.value=!0});try{const h=await e(b=>{d(()=>{i&&(i.value=!1),g||b()})});c===u&&(o.value=h)}catch(h){s(h)}finally{i&&c===u&&(i.value=!1),g=!0}}),t?y(()=>(f.value=!0,o.value)):o}const P=nt?window:void 0;function pt(e){var r;const n=B(e);return(r=n==null?void 0:n.$el)!=null?r:n}function Ce(...e){let r,n,a,t;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,t]=e,r=P):[r,n,a,t]=e,!r)return G;n=Se(n),a=Se(a);const i=[],l=()=>{i.forEach(u=>u()),i.length=0},s=(u,d,c,g)=>(u.addEventListener(d,c,g),()=>u.removeEventListener(d,c,g)),f=W(()=>[pt(r),B(t)],([u,d])=>{if(l(),!u)return;const c=st(d)?{...d}:d;i.push(...n.flatMap(g=>a.map(h=>s(u,g,h,c))))},{immediate:!0,flush:"post"}),o=()=>{f(),l()};return rt(o),o}function bt(e){return JSON.parse(JSON.stringify(e))}const Q=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_="__vueuse_ssr_handlers__",ht=vt();function vt(){return _ in Q||(Q[_]=Q[_]||{}),Q[_]}function mt(e,r){return ht[e]||r}function kt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const wt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Ie="vueuse-storage";function xt(e,r,n,a={}){var t;const{flush:i="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:f=!0,mergeDefaults:o=!1,shallow:u,window:d=P,eventFilter:c,onError:g=p=>{console.error(p)},initOnMounted:h}=a,b=(u?$e:T)(typeof r=="function"?r():r),w=y(()=>B(e));if(!n)try{n=mt("getDefaultStorage",()=>{var p;return(p=P)==null?void 0:p.localStorage})()}catch(p){g(p)}if(!n)return b;const x=B(r),V=kt(x),m=(t=a.serializer)!=null?t:wt[V],{pause:E,resume:$}=gt(b,()=>R(b.value),{flush:i,deep:l,eventFilter:c});W(w,()=>L(),{flush:i}),d&&s&&yt(()=>{n instanceof Storage?Ce(d,"storage",L,{passive:!0}):Ce(d,Ie,ne),h&&L()}),h||L();function C(p,k){if(d){const S={key:w.value,oldValue:p,newValue:k,storageArea:n};d.dispatchEvent(n instanceof Storage?new StorageEvent("storage",S):new CustomEvent(Ie,{detail:S}))}}function R(p){try{const k=n.getItem(w.value);if(p==null)C(k,null),n.removeItem(w.value);else{const S=m.write(p);k!==S&&(n.setItem(w.value,S),C(k,S))}}catch(k){g(k)}}function re(p){const k=p?p.newValue:n.getItem(w.value);if(k==null)return f&&x!=null&&n.setItem(w.value,m.write(x)),x;if(!p&&o){const S=m.read(k);return typeof o=="function"?o(S,x):V==="object"&&!Array.isArray(S)?{...x,...S}:S}else return typeof k!="string"?k:m.read(k)}function L(p){if(!(p&&p.storageArea!==n)){if(p&&p.key==null){b.value=x;return}if(!(p&&p.key!==w.value)){E();try{(p==null?void 0:p.newValue)!==m.write(b.value)&&(b.value=re(p))}catch(k){g(k)}finally{p?de($):$()}}}}function ne(p){L(p.detail)}return b}function Ht(e,r,n={}){const{window:a=P}=n;return xt(e,r,a==null?void 0:a.localStorage,n)}function Kt(e,r,n,a={}){var t,i,l;const{clone:s=!1,passive:f=!1,eventName:o,deep:u=!1,defaultValue:d,shouldEmit:c}=a,g=ce(),h=n||(g==null?void 0:g.emit)||((t=g==null?void 0:g.$emit)==null?void 0:t.bind(g))||((l=(i=g==null?void 0:g.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(g==null?void 0:g.proxy));let b=o;r||(r="modelValue"),b=b||`update:${r.toString()}`;const w=m=>s?typeof s=="function"?s(m):bt(m):m,x=()=>it(e[r])?w(e[r]):d,V=m=>{c?c(m)&&h(b,m):h(b,m)};if(f){const m=x(),E=T(m);let $=!1;return W(()=>e[r],C=>{$||($=!0,E.value=w(C),de(()=>$=!1))}),W(E,C=>{!$&&(C!==e[r]||u)&&V(C)},{deep:u}),E}else return y({get(){return x()},set(m){V(m)}})}const ge={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},St=e=>Object.keys(ge).reduce((n,a)=>(e[a]!==void 0&&(n[a]=e[a]),n),{}),Ct=K({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function It(e,r,n,a,t,i){const l=Pe;return I(),D(l,ie(le(e.$props)),null,16)}const te=H(Ct,[["render",It]]),zt=K({inheritAttrs:!1,props:{...ge,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function r(a,t){const i=at(a,t).reduce((l,s)=>(s.type==="added"&&l.push(s.key),l),[]);return ke(a,t,{excludeKeys:l=>i.includes(l)})}function n(a,t,{isActive:i,isExactActive:l}){if(e.exactQuery==="partial"){if(!r(a.query,t.query))return e.inactiveClass}else if(e.exactQuery===!0&&!ke(a.query,t.query))return e.inactiveClass;return e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&l||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),$t=["href","aria-disabled","role","rel","target","tabindex","onClick"];function Ot(e,r,n,a,t,i){const l=Ge;return e.to?(I(),D(l,J({key:1},e.$props,{custom:""}),{default:Y(({route:s,href:f,target:o,rel:u,navigate:d,isActive:c,isExactActive:g,isExternal:h})=>[Ae("a",J(e.$attrs,{href:e.disabled?void 0:f,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:u,target:o,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[Ue]||e.$route,{isActive:c,isExactActive:g}),tabindex:e.disabled?-1:void 0,onClick:b=>!h&&!e.disabled&&d(b)}),[j(e.$slots,"default",ie(le({isActive:e.active!==void 0?e.active:e.exact?g:c})))],16,$t)]),_:3},16)):(I(),D(Oe(e.as),J({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:Y(()=>[j(e.$slots,"default",ie(le({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Te=H(zt,[["render",Ot]]),ye=(e,r,n,a,t=!1)=>{const i=We(),l=He(),s=y(()=>{var c;const o=B(r),u=B(n),d=B(a);return ee((o==null?void 0:o.strategy)||((c=l.ui)==null?void 0:c.strategy),d?{wrapper:d}:{},o||{},t?Ke(l.ui,e,{}):{},u||{})}),f=y(()=>Re(i,["class"]));return{ui:s,attrs:f}};function Ve({ui:e,props:r}){const n=ce();if(Qe("ButtonGroupContextConsumer",!0),M("ButtonGroupContextConsumer",!1))return{size:y(()=>r.size),rounded:y(()=>e.value.rounded)};let t=n.parent,i;for(;t&&!i;){if(t.type.name==="ButtonGroup"){i=M(`group-${t.uid}`);break}t=t.parent}const l=y(()=>i==null?void 0:i.value.children.indexOf(n));return ue(()=>{i==null||i.value.register(n)}),_e(()=>{i==null||i.value.unregister(n)}),{size:y(()=>i!=null&&i.value?(i==null?void 0:i.value.size)??e.value.default.size:r.size),rounded:y(()=>!i||l.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:l.value===0?i.value.rounded.start:l.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const At={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ae={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"};({...ae});const pe={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ze={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...ae,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},Rt={...pe,form:"form-textarea",default:{size:"sm",color:"white",variant:"outline"}};({...pe});({...ze,option:{...ze.option},arrow:{...ae}});const Nt={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"};({...ae});const O=ee(z.ui.strategy,z.ui.button,At),Bt=K({components:{UIcon:te,ULink:Te},inheritAttrs:!1,props:{...ge,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>O.default.size,validator(e){return Object.keys(O.size).includes(e)}},color:{type:String,default:()=>O.default.color,validator(e){return[...z.ui.colors,...Object.keys(O.color)].includes(e)}},variant:{type:String,default:()=>O.default.variant,validator(e){return[...Object.keys(O.variant),...Object.values(O.color).flatMap(r=>Object.keys(r))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>O.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:r}){const{ui:n,attrs:a}=ye("button",Z(e,"ui"),O),{size:t,rounded:i}=Ve({ui:n,props:e}),l=y(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=y(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),f=y(()=>e.square||!r.default&&!e.label),o=y(()=>{var w,x;const b=((x=(w=n.value.color)==null?void 0:w[e.color])==null?void 0:x[e.variant])||n.value.variant[e.variant];return fe(N(n.value.base,n.value.font,i.value,n.value.size[t.value],n.value.gap[t.value],e.padded&&n.value[f.value?"square":"padding"][t.value],b==null?void 0:b.replaceAll("{color}",e.color),e.block?n.value.block:n.value.inline),e.class)}),u=y(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),d=y(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),c=y(()=>N(n.value.icon.base,n.value.icon.size[t.value],e.loading&&n.value.icon.loading)),g=y(()=>N(n.value.icon.base,n.value.icon.size[t.value],e.loading&&!l.value&&n.value.icon.loading)),h=y(()=>St(e));return{ui:n,attrs:a,isLeading:l,isTrailing:s,isSquare:f,buttonClass:o,leadingIconName:u,trailingIconName:d,leadingIconClass:c,trailingIconClass:g,linkProps:h}}});function jt(e,r,n,a,t,i){const l=te,s=Te;return I(),D(s,J({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:Y(()=>[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(I(),D(l,{key:0,name:e.leadingIconName,class:q(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):U("",!0)]),j(e.$slots,"default",{},()=>[e.label?(I(),X("span",{key:0,class:q([e.truncate?e.ui.truncate:""])},Xe(e.label),3)):U("",!0)]),j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(I(),D(l,{key:0,name:e.trailingIconName,class:q(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):U("",!0)])]),_:3},16,["type","disabled","class"])}const Qt=H(Bt,[["render",jt]]),Ft=(e,r,n=!0)=>{const a=M("form-events",void 0),t=M("form-group",void 0),i=M("form-inputs",void 0);t&&(!n||e!=null&&e.legend?t.inputId.value=void 0:e!=null&&e.id&&(t.inputId.value=e==null?void 0:e.id),i&&(i.value[t.name.value]=t.inputId.value));const l=T(!1);function s(d,c){a&&a.emit({type:d,path:c})}function f(){s("blur",t==null?void 0:t.name.value),l.value=!0}function o(){s("change",t==null?void 0:t.name.value)}const u=ct(()=>{(l.value||t!=null&&t.eagerValidation.value)&&s("input",t==null?void 0:t.name.value)},300);return{inputId:y(()=>(e==null?void 0:e.id)??(t==null?void 0:t.inputId.value)),name:y(()=>(e==null?void 0:e.name)??(t==null?void 0:t.name.value)),size:y(()=>{var c;const d=r.size[t==null?void 0:t.size.value]?t==null?void 0:t.size.value:null;return(e==null?void 0:e.size)??d??((c=r.default)==null?void 0:c.size)}),color:y(()=>{var d;return(d=t==null?void 0:t.error)!=null&&d.value?"red":e==null?void 0:e.color}),emitFormBlur:f,emitFormInput:u,emitFormChange:o}},A=ee(z.ui.strategy,z.ui.input,pe),qt=K({components:{UIcon:te},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>A.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(A.size).includes(e)}},color:{type:String,default:()=>A.default.color,validator(e){return[...z.ui.colors,...Object.keys(A.color)].includes(e)}},variant:{type:String,default:()=>A.default.variant,validator(e){return[...Object.keys(A.variant),...Object.values(A.color).flatMap(r=>Object.keys(r))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:r,slots:n}){const{ui:a,attrs:t}=ye("input",Z(e,"ui"),A,Z(e,"class")),{size:i,rounded:l}=Ve({ui:a,props:e}),{emitFormBlur:s,emitFormInput:f,size:o,color:u,inputId:d,name:c}=Ft(e,A),g=y(()=>i.value??o.value),h=T(Ye({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),b=T(null),w=()=>{var v;e.autofocus&&((v=b.value)==null||v.focus())},x=v=>{h.value.trim&&(v=v.trim()),(h.value.number||e.type==="number")&&(v=Ze(v)),h.value.nullify&&(v||(v=null)),r("update:modelValue",v),f()},V=v=>{h.value.lazy||x(v.target.value)},m=v=>{if(e.type==="file"){const F=v.target.files;r("change",F)}else{const F=v.target.value;r("change",F),h.value.lazy&&x(F),h.value.trim&&(v.target.value=F.trim())}},E=v=>{s(),r("blur",v)};ue(()=>{setTimeout(()=>{w()},e.autofocusDelay)});const $=y(()=>{var F,be;const v=((be=(F=a.value.color)==null?void 0:F[u.value])==null?void 0:be[e.variant])||a.value.variant[e.variant];return fe(N(a.value.base,a.value.form,l.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[g.value],e.padded?a.value.padding[g.value]:"p-0",v==null?void 0:v.replaceAll("{color}",u.value),(C.value||n.leading)&&a.value.leading.padding[g.value],(R.value||n.trailing)&&a.value.trailing.padding[g.value]),e.inputClass)}),C=y(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),R=y(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),re=y(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),L=y(()=>e.loading&&!C.value?e.loadingIcon:e.trailingIcon||e.icon),ne=y(()=>N(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[g.value])),p=y(()=>N(a.value.icon.base,u.value&&z.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[g.value],e.loading&&a.value.icon.loading)),k=y(()=>N(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[g.value])),S=y(()=>N(a.value.icon.base,u.value&&z.ui.colors.includes(u.value)&&a.value.icon.color.replaceAll("{color}",u.value),a.value.icon.size[g.value],e.loading&&!C.value&&a.value.icon.loading));return{ui:a,attrs:t,name:c,inputId:d,input:b,isLeading:C,isTrailing:R,inputClass:$,leadingIconName:re,leadingIconClass:p,leadingWrapperIconClass:ne,trailingIconName:L,trailingIconClass:S,trailingWrapperIconClass:k,onInput:V,onChange:m,onBlur:E}}}),Tt=["id","name","type","required","placeholder","disabled"];function Vt(e,r,n,a,t,i){const l=te;return I(),X("div",{class:q(e.type==="hidden"?"hidden":e.ui.wrapper)},[Ae("input",J({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:r[0]||(r[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:r[1]||(r[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:r[2]||(r[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,Tt),j(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(I(),X("span",{key:0,class:q(e.leadingWrapperIconClass)},[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[he(l,{name:e.leadingIconName,class:q(e.leadingIconClass)},null,8,["name","class"])])],2)):U("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(I(),X("span",{key:1,class:q(e.trailingWrapperIconClass)},[j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[he(l,{name:e.trailingIconName,class:q(e.trailingIconClass)},null,8,["name","class"])])],2)):U("",!0)],2)}const _t=H(qt,[["render",Vt]]),Et=ee(z.ui.strategy,z.ui.container,Nt),Lt=K({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:n}=ye("container",Z(e,"ui"),Et),a=y(()=>fe(N(r.value.base,r.value.padding,r.value.constrained),e.class));return{ui:r,attrs:n,containerClass:a}}});function Dt(e,r,n,a,t,i){return I(),D(Oe(e.as),J({class:e.containerClass},e.attrs),{default:Y(()=>[j(e.$slots,"default")]),_:3},16,["class"])}const Xt=H(Lt,[["render",Dt]]);export{te as _,Ft as a,Qt as b,Kt as c,_t as d,Xt as e,Ht as f,ae as g,pt as h,ke as i,pe as j,ze as k,Ve as l,ct as m,Wt as n,Rt as t,ye as u};
