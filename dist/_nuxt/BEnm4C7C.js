import{a6 as C,k as ce,p as fe,a7 as Oe,l as W,h as R,i as M,a8 as Le,$ as ge,a9 as Me,W as Ue,L as De,P as le,O as Je,q as g,K as We,_ as K,f as H,G as L,o as $,D as se,U as oe,w as G,r as j,g as U,V as Ne,a as Be,aa as Re,ab as Ke,ac as He,m as ee,I as Qe,ad as Xe,R as D,M as Ye,Q as Ze,e as z,z as J,n as q,c as Z,t as Ge,s as ye,v as A,b as me,j as _e,x as Pe}from"./DaU3rn0u.js";import{_ as et}from"./B8ta74FL.js";import tt from"./pq0XSbXZ.js";function at(e){return Me()?(Ue(e),!0):!1}const rt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const nt=e=>typeof e<"u",it=Object.prototype.toString,lt=e=>it.call(e)==="[object Object]",_=()=>{};function Ae(e,r){function n(...a){return new Promise((t,i)=>{Promise.resolve(e(()=>r.apply(this,a),{fn:r,thisArg:this,args:a})).then(t).catch(i)})}return n}const je=e=>e();function st(e,r={}){let n,a,t=_;const i=u=>{clearTimeout(u),t(),t=_};let l;return u=>{const o=C(e),d=C(r.maxWait);return n&&i(n),o<=0||d!==void 0&&d<=0?(a&&(i(a),a=null),Promise.resolve(u())):new Promise((f,c)=>{t=r.rejectOnCancel?c:f,l=u,d&&!a&&(a=setTimeout(()=>{n&&i(n),a=null,f(l())},d)),n=setTimeout(()=>{a&&i(a),a=null,f(u())},o)})}}function ot(e=je,r={}){const{initialState:n="active"}=r,a=dt(n==="active");function t(){a.value=!1}function i(){a.value=!0}const l=(...s)=>{a.value&&e(...s)};return{isActive:Oe(a),pause:t,resume:i,eventFilter:l}}function ut(e){return ge()}function ie(e){return Array.isArray(e)?e:[e]}function dt(...e){if(e.length!==1)return R(...e);const r=e[0];return typeof r=="function"?Oe(Le(()=>({get:r,set:_}))):M(r)}function ct(e,r=200,n={}){return Ae(st(r,n),e)}function ft(e,r,n={}){const{eventFilter:a=je,...t}=n;return W(e,Ae(a,r),t)}function gt(e,r,n={}){const{eventFilter:a,initialState:t="active",...i}=n,{eventFilter:l,pause:s,resume:u,isActive:o}=ot(a,{initialState:t});return{stop:ft(e,r,{...i,eventFilter:l}),pause:s,resume:u,isActive:o}}function yt(e,r=!0,n){ut()?ce(e,n):r?e():fe(e)}function pt(e,r,n){return W(e,r,{...n,immediate:!0})}function Qt(e,r,n){let a;De(n)?a={evaluating:n}:a=n||{};const{lazy:t=!1,evaluating:i=void 0,shallow:l=!0,onError:s=_}=a,u=le(!t),o=l?le(r):M(r);let d=0;return Je(async f=>{if(!u.value)return;d++;const c=d;let y=!1;i&&Promise.resolve().then(()=>{i.value=!0});try{const v=await e(b=>{f(()=>{i&&(i.value=!1),y||b()})});c===d&&(o.value=v)}catch(v){s(v)}finally{i&&c===d&&(i.value=!1),y=!0}}),t?g(()=>(u.value=!0,o.value)):o}const P=rt?window:void 0;function bt(e){var r;const n=C(e);return(r=n==null?void 0:n.$el)!=null?r:n}function ke(...e){const r=[],n=()=>{r.forEach(s=>s()),r.length=0},a=(s,u,o,d)=>(s.addEventListener(u,o,d),()=>s.removeEventListener(u,o,d)),t=g(()=>{const s=ie(C(e[0])).filter(u=>u!=null);return s.every(u=>typeof u!="string")?s:void 0}),i=pt(()=>{var s,u;return[(u=(s=t.value)==null?void 0:s.map(o=>bt(o)))!=null?u:[P].filter(o=>o!=null),ie(C(t.value?e[1]:e[0])),ie(We(t.value?e[2]:e[1])),C(t.value?e[3]:e[2])]},([s,u,o,d])=>{if(n(),!(s!=null&&s.length)||!(u!=null&&u.length)||!(o!=null&&o.length))return;const f=lt(d)?{...d}:d;r.push(...s.flatMap(c=>u.flatMap(y=>o.map(v=>a(c,y,v,f)))))},{flush:"post"}),l=()=>{i(),n()};return at(n),l}function vt(e){return JSON.parse(JSON.stringify(e))}const X=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Y="__vueuse_ssr_handlers__",ht=mt();function mt(){return Y in X||(X[Y]=X[Y]||{}),X[Y]}function kt(e,r){return ht[e]||r}function wt(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const xt={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},we="vueuse-storage";function St(e,r,n,a={}){var t;const{flush:i="pre",deep:l=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,mergeDefaults:o=!1,shallow:d,window:f=P,eventFilter:c,onError:y=p=>{console.error(p)},initOnMounted:v}=a,b=(d?le:M)(typeof r=="function"?r():r),w=g(()=>C(e));if(!n)try{n=kt("getDefaultStorage",()=>{var p;return(p=P)==null?void 0:p.localStorage})()}catch(p){y(p)}if(!n)return b;const x=C(r),V=wt(x),m=(t=a.serializer)!=null?t:xt[V],{pause:T,resume:O}=gt(b,()=>Q(b.value),{flush:i,deep:l,eventFilter:c});W(w,()=>E(),{flush:i}),f&&s&&yt(()=>{n instanceof Storage?ke(f,"storage",E,{passive:!0}):ke(f,we,ne),v&&E()}),v||E();function I(p,k){if(f){const S={key:w.value,oldValue:p,newValue:k,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",S):new CustomEvent(we,{detail:S}))}}function Q(p){try{const k=n.getItem(w.value);if(p==null)I(k,null),n.removeItem(w.value);else{const S=m.write(p);k!==S&&(n.setItem(w.value,S),I(k,S))}}catch(k){y(k)}}function re(p){const k=p?p.newValue:n.getItem(w.value);if(k==null)return u&&x!=null&&n.setItem(w.value,m.write(x)),x;if(!p&&o){const S=m.read(k);return typeof o=="function"?o(S,x):V==="object"&&!Array.isArray(S)?{...x,...S}:S}else return typeof k!="string"?k:m.read(k)}function E(p){if(!(p&&p.storageArea!==n)){if(p&&p.key==null){b.value=x;return}if(!(p&&p.key!==w.value)){T();try{(p==null?void 0:p.newValue)!==m.write(b.value)&&(b.value=re(p))}catch(k){y(k)}finally{p?fe(O):O()}}}}function ne(p){E(p.detail)}return b}function Xt(e,r,n={}){const{window:a=P}=n;return St(e,r,a==null?void 0:a.localStorage,n)}function Yt(e,r,n,a={}){var t,i,l;const{clone:s=!1,passive:u=!1,eventName:o,deep:d=!1,defaultValue:f,shouldEmit:c}=a,y=ge(),v=n||(y==null?void 0:y.emit)||((t=y==null?void 0:y.$emit)==null?void 0:t.bind(y))||((l=(i=y==null?void 0:y.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(y==null?void 0:y.proxy));let b=o;r||(r="modelValue"),b=b||`update:${r.toString()}`;const w=m=>s?typeof s=="function"?s(m):vt(m):m,x=()=>nt(e[r])?w(e[r]):f,V=m=>{c?c(m)&&v(b,m):v(b,m)};if(u){const m=x(),T=M(m);let O=!1;return W(()=>e[r],I=>{O||(O=!0,T.value=w(I),fe(()=>O=!1))}),W(T,I=>{!O&&(I!==e[r]||d)&&V(I)},{deep:d}),T}else return g({get(){return x()},set(m){V(m)}})}const pe={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},It=e=>Object.keys(pe).reduce((n,a)=>(e[a]!==void 0&&(n[a]=e[a]),n),{}),$t=H({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function Ct(e,r,n,a,t,i){const l=tt;return $(),L(l,se(oe(e.$props)),null,16)}const te=K($t,[["render",Ct]]),xe=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ue(e,r){r?r={...xe,...r}:r=xe;const n=Fe(r);return n.dispatch(e),n.toString()}const zt=Object.freeze(["prototype","__proto__","constructor"]);function Fe(e){let r="",n=new Map;const a=t=>{r+=t};return{toString(){return r},getContext(){return n},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let l="";const s=i.length;s<10?l="unknown:["+i+"]":l=i.slice(8,s-1),l=l.toLowerCase();let u=null;if((u=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return a("buffer:"),a(t.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](t):e.ignoreUnknown||this.unkown(t,l);else{let o=Object.keys(t);e.unorderedObjects&&(o=o.sort());let d=[];e.respectType!==!1&&!Se(t)&&(d=zt),e.excludeKeys&&(o=o.filter(c=>!e.excludeKeys(c)),d=d.filter(c=>!e.excludeKeys(c))),a("object:"+(o.length+d.length)+":");const f=c=>{this.dispatch(c),a(":"),e.excludeValues||this.dispatch(t[c]),a(",")};for(const c of o)f(c);for(const c of d)f(c)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,a("array:"+t.length+":"),!i||t.length<=1){for(const u of t)this.dispatch(u);return}const l=new Map,s=t.map(u=>{const o=Fe(e);o.dispatch(u);for(const[d,f]of o.getContext())l.set(d,f);return o.toString()});return n=l,s.sort(),this.array(s,!1)},date(t){return a("date:"+t.toJSON())},symbol(t){return a("symbol:"+t.toString())},unkown(t,i){if(a(i),!!t&&(a(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return a("error:"+t.toString())},boolean(t){return a("bool:"+t)},string(t){a("string:"+t.length+":"),a(t)},function(t){a("fn:"),Se(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return a("number:"+t)},xml(t){return a("xml:"+t.toString())},null(){return a("Null")},undefined(){return a("Undefined")},regexp(t){return a("regex:"+t.toString())},uint8array(t){return a("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return a("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return a("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return a("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return a("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return a("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return a("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return a("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return a("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return a("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return a("url:"+t.toString())},map(t){a("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){a("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return a("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return a("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return a("domwindow")},bigint(t){return a("bigint:"+t.toString())},process(){return a("process")},timer(){return a("timer")},pipe(){return a("pipe")},tcp(){return a("tcp")},udp(){return a("udp")},tty(){return a("tty")},statwatcher(){return a("statwatcher")},securecontext(){return a("securecontext")},connection(){return a("connection")},zlib(){return a("zlib")},context(){return a("context")},nodescript(){return a("nodescript")},httpparser(){return a("httpparser")},dataview(){return a("dataview")},signal(){return a("signal")},fsevent(){return a("fsevent")},tlswrap(){return a("tlswrap")}}}const qe="[native code] }",Ot=qe.length;function Se(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Ot)===qe}function Ie(e,r,n={}){return e===r||ue(e,n)===ue(r,n)}function Nt(e,r,n={}){const a=de(e,n),t=de(r,n);return Ve(a,t,n)}function Ve(e,r,n={}){var i,l;const a=[],t=new Set([...Object.keys(e.props||{}),...Object.keys(r.props||{})]);if(e.props&&r.props)for(const s of t){const u=e.props[s],o=r.props[s];u&&o?a.push(...Ve((i=e.props)==null?void 0:i[s],(l=r.props)==null?void 0:l[s],n)):(u||o)&&a.push(new $e((o||u).key,u?"removed":"added",o,u))}return t.size===0&&e.hash!==r.hash&&a.push(new $e((r||e).key,"changed",r,e)),a}function de(e,r,n=""){if(e&&typeof e!="object")return new Ce(n,e,ue(e,r));const a={},t=[];for(const i in e)a[i]=de(e[i],r,n?`${n}.${i}`:i),t.push(a[i].hash);return new Ce(n,e,`{${t.join(":")}}`,a)}class $e{constructor(r,n,a,t){this.key=r,this.type=n,this.newValue=a,this.oldValue=t}toString(){return this.toJSON()}toJSON(){var r;switch(this.type){case"added":return`Added   \`${this.key}\``;case"removed":return`Removed \`${this.key}\``;case"changed":return`Changed \`${this.key}\` from \`${((r=this.oldValue)==null?void 0:r.toString())||"-"}\` to \`${this.newValue.toString()}\``}}}class Ce{constructor(r,n,a,t){this.key=r,this.value=n,this.hash=a,this.props=t}toString(){return this.props?`{${Object.keys(this.props).join(",")}}`:JSON.stringify(this.value)}toJSON(){const r=this.key||".";return this.props?`${r}({${Object.keys(this.props).join(",")}})`:`${r}(${this.value})`}}const Bt=H({inheritAttrs:!1,props:{...pe,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function r(a,t){const i=Nt(a,t).reduce((l,s)=>(s.type==="added"&&l.push(s.key),l),[]);return Ie(a,t,{excludeKeys:l=>i.includes(l)})}function n(a,t,{isActive:i,isExactActive:l}){if(e.exactQuery==="partial"){if(!r(a.query,t.query))return e.inactiveClass}else if(e.exactQuery===!0&&!Ie(a.query,t.query))return e.inactiveClass;return e.exactHash&&a.hash!==t.hash?e.inactiveClass:e.exact&&l||!e.exact&&i?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),At=["href","aria-disabled","role","rel","target","tabindex","onClick"];function jt(e,r,n,a,t,i){const l=et;return e.to?($(),L(l,U({key:1},e.$props,{custom:""}),{default:G(({route:s,href:u,target:o,rel:d,navigate:f,isActive:c,isExactActive:y,isExternal:v})=>[Be("a",U(e.$attrs,{href:e.disabled?void 0:u,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:d,target:o,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(s,e._.provides[Re]||e.$route,{isActive:c,isExactActive:y}),tabindex:e.disabled?-1:void 0,onClick:b=>!v&&!e.disabled&&f(b)}),[j(e.$slots,"default",se(oe({isActive:e.active!==void 0?e.active:e.exact?y:c})))],16,At)]),_:3},16)):($(),L(Ne(e.as),U({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:G(()=>[j(e.$slots,"default",se(oe({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const Te=K(Bt,[["render",jt]]),be=(e,r,n,a,t=!1)=>{const i=Ke(),l=He(),s=g(()=>{var c;const o=C(r),d=C(n),f=C(a);return ee((o==null?void 0:o.strategy)||((c=l.ui)==null?void 0:c.strategy),f?{wrapper:f}:{},o||{},t?Qe(l.ui,e,{}):{},d||{})}),u=g(()=>Xe(i,["class"]));return{ui:s,attrs:u}};function Ee({ui:e,props:r}){const n=ge();if(Ze("ButtonGroupContextConsumer",!0),D("ButtonGroupContextConsumer",!1))return{size:g(()=>r.size),rounded:g(()=>e.value.rounded)};let t=n.parent,i;for(;t&&!i;){if(t.type.name==="ButtonGroup"){i=D(`group-${t.uid}`);break}t=t.parent}const l=g(()=>i==null?void 0:i.value.children.indexOf(n));return ce(()=>{i==null||i.value.register(n)}),Ye(()=>{i==null||i.value.unregister(n)}),{size:g(()=>i!=null&&i.value?(i==null?void 0:i.value.size)??e.value.default.size:r.size),rounded:g(()=>!i||l.value===-1?e.value.rounded:i.value.children.length===1?i.value.ui.rounded:l.value===0?i.value.rounded.start:l.value===i.value.children.length-1?i.value.rounded.end:"rounded-none")}}const Ft={base:"focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",font:"font-medium",rounded:"rounded-md",truncate:"text-left break-all line-clamp-1",block:"w-full flex justify-center items-center",inline:"inline-flex items-center",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},square:{"2xs":"p-1",xs:"p-1.5",sm:"p-1.5",md:"p-2",lg:"p-2.5",xl:"p-2.5"},color:{white:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},gray:{solid:"shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",ghost:"text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"},black:{solid:"shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",link:"text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"}},variant:{solid:"shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",outline:"ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",soft:"text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",ghost:"text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",link:"text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"},icon:{base:"flex-shrink-0",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"}},default:{size:"sm",variant:"solid",color:"primary",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ae={base:"invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:"group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1"};({...ae});const ve={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",form:"form-input",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",file:{base:"file:mr-1.5 file:font-medium file:text-gray-500 dark:file:text-gray-400 file:bg-transparent file:border-0 file:p-0 file:outline-none"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",loading:"animate-spin",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"px-2",xs:"px-2.5",sm:"px-2.5",md:"px-3",lg:"px-3.5",xl:"px-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ze={container:"z-20 group",trigger:"flex items-center w-full",width:"w-full",height:"max-h-60",base:"relative focus:outline-none overflow-y-auto scroll-py-1",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",padding:"p-1",ring:"ring-1 ring-gray-200 dark:ring-gray-700",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}},transition:{leaveActiveClass:"transition ease-in duration-100",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"},popper:{placement:"bottom-end"},default:{selectedIcon:"i-heroicons-check-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid",empty:{label:"No options."},optionEmpty:{label:'No results for "{query}".'}},arrow:{...ae,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},Zt={...ve,form:"form-textarea",default:{size:"sm",color:"white",variant:"outline"}};({...ve});({...ze,option:{...ze.option},arrow:{...ae}});const qt={base:"mx-auto",padding:"px-4 sm:px-6 lg:px-8",constrained:"max-w-7xl"};({...ae});const N=ee(z.ui.strategy,z.ui.button,Ft),Vt=H({components:{UIcon:te,ULink:Te},inheritAttrs:!1,props:{...pe,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>N.default.size,validator(e){return Object.keys(N.size).includes(e)}},color:{type:String,default:()=>N.default.color,validator(e){return[...z.ui.colors,...Object.keys(N.color)].includes(e)}},variant:{type:String,default:()=>N.default.variant,validator(e){return[...Object.keys(N.variant),...Object.values(N.color).flatMap(r=>Object.keys(r))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>N.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:r}){const{ui:n,attrs:a}=be("button",R(e,"ui"),N),{size:t,rounded:i}=Ee({ui:n,props:e}),l=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),u=g(()=>e.square||!r.default&&!e.label),o=g(()=>{var w,x;const b=((x=(w=n.value.color)==null?void 0:w[e.color])==null?void 0:x[e.variant])||n.value.variant[e.variant];return ye(A(n.value.base,n.value.font,i.value,n.value.size[t.value],n.value.gap[t.value],e.padded&&n.value[u.value?"square":"padding"][t.value],b==null?void 0:b.replaceAll("{color}",e.color),e.block?n.value.block:n.value.inline),e.class)}),d=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),f=g(()=>e.loading&&!l.value?e.loadingIcon:e.trailingIcon||e.icon),c=g(()=>A(n.value.icon.base,n.value.icon.size[t.value],e.loading&&n.value.icon.loading)),y=g(()=>A(n.value.icon.base,n.value.icon.size[t.value],e.loading&&!l.value&&n.value.icon.loading)),v=g(()=>It(e));return{ui:n,attrs:a,isLeading:l,isTrailing:s,isSquare:u,buttonClass:o,leadingIconName:d,trailingIconName:f,leadingIconClass:c,trailingIconClass:y,linkProps:v}}});function Tt(e,r,n,a,t,i){const l=te,s=Te;return $(),L(s,U({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:G(()=>[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?($(),L(l,{key:0,name:e.leadingIconName,class:q(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):J("",!0)]),j(e.$slots,"default",{},()=>[e.label?($(),Z("span",{key:0,class:q([e.truncate?e.ui.truncate:""])},Ge(e.label),3)):J("",!0)]),j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?($(),L(l,{key:0,name:e.trailingIconName,class:q(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):J("",!0)])]),_:3},16,["type","disabled","class"])}const Gt=K(Vt,[["render",Tt]]),Et=(e,r,n=!0)=>{const a=D("form-events",void 0),t=D("form-group",void 0),i=D("form-inputs",void 0);t&&(!n||e!=null&&e.legend?t.inputId.value=void 0:e!=null&&e.id&&(t.inputId.value=e==null?void 0:e.id),i&&(i.value[t.name.value]=t.inputId.value));const l=M(!1);function s(f,c){a&&a.emit({type:f,path:c})}function u(){s("blur",t==null?void 0:t.name.value),l.value=!0}function o(){s("change",t==null?void 0:t.name.value)}const d=ct(()=>{(l.value||t!=null&&t.eagerValidation.value)&&s("input",t==null?void 0:t.name.value)},300);return{inputId:g(()=>(e==null?void 0:e.id)??(t==null?void 0:t.inputId.value)),name:g(()=>(e==null?void 0:e.name)??(t==null?void 0:t.name.value)),size:g(()=>{var c;const f=r.size[t==null?void 0:t.size.value]?t==null?void 0:t.size.value:null;return(e==null?void 0:e.size)??f??((c=r.default)==null?void 0:c.size)}),color:g(()=>{var f;return(f=t==null?void 0:t.error)!=null&&f.value?"red":e==null?void 0:e.color}),emitFormBlur:u,emitFormInput:d,emitFormChange:o}},B=ee(z.ui.strategy,z.ui.input,ve),Lt=H({components:{UIcon:te},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>B.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(B.size).includes(e)}},color:{type:String,default:()=>B.default.color,validator(e){return[...z.ui.colors,...Object.keys(B.color)].includes(e)}},variant:{type:String,default:()=>B.default.variant,validator(e){return[...Object.keys(B.variant),...Object.values(B.color).flatMap(r=>Object.keys(r))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:r,slots:n}){const{ui:a,attrs:t}=be("input",R(e,"ui"),B,R(e,"class")),{size:i,rounded:l}=Ee({ui:a,props:e}),{emitFormBlur:s,emitFormInput:u,size:o,color:d,inputId:f,name:c}=Et(e,B),y=g(()=>i.value??o.value),v=M(_e({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),b=M(null),w=()=>{var h;e.autofocus&&((h=b.value)==null||h.focus())},x=h=>{v.value.trim&&(h=h.trim()),(v.value.number||e.type==="number")&&(h=Pe(h)),v.value.nullify&&(h||(h=null)),r("update:modelValue",h),u()},V=h=>{v.value.lazy||x(h.target.value)},m=h=>{if(e.type==="file"){const F=h.target.files;r("change",F)}else{const F=h.target.value;r("change",F),v.value.lazy&&x(F),v.value.trim&&(h.target.value=F.trim())}},T=h=>{s(),r("blur",h)};ce(()=>{setTimeout(()=>{w()},e.autofocusDelay)});const O=g(()=>{var F,he;const h=((he=(F=a.value.color)==null?void 0:F[d.value])==null?void 0:he[e.variant])||a.value.variant[e.variant];return ye(A(a.value.base,a.value.form,l.value,a.value.placeholder,e.type==="file"&&a.value.file.base,a.value.size[y.value],e.padded?a.value.padding[y.value]:"p-0",h==null?void 0:h.replaceAll("{color}",d.value),(I.value||n.leading)&&a.value.leading.padding[y.value],(Q.value||n.trailing)&&a.value.trailing.padding[y.value]),e.inputClass)}),I=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),Q=g(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),re=g(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),E=g(()=>e.loading&&!I.value?e.loadingIcon:e.trailingIcon||e.icon),ne=g(()=>A(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[y.value])),p=g(()=>A(a.value.icon.base,d.value&&z.ui.colors.includes(d.value)&&a.value.icon.color.replaceAll("{color}",d.value),a.value.icon.size[y.value],e.loading&&a.value.icon.loading)),k=g(()=>A(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[y.value])),S=g(()=>A(a.value.icon.base,d.value&&z.ui.colors.includes(d.value)&&a.value.icon.color.replaceAll("{color}",d.value),a.value.icon.size[y.value],e.loading&&!I.value&&a.value.icon.loading));return{ui:a,attrs:t,name:c,inputId:f,input:b,isLeading:I,isTrailing:Q,inputClass:O,leadingIconName:re,leadingIconClass:p,leadingWrapperIconClass:ne,trailingIconName:E,trailingIconClass:S,trailingWrapperIconClass:k,onInput:V,onChange:m,onBlur:T}}}),Mt=["id","name","type","required","placeholder","disabled"];function Ut(e,r,n,a,t,i){const l=te;return $(),Z("div",{class:q(e.type==="hidden"?"hidden":e.ui.wrapper)},[Be("input",U({id:e.inputId,ref:"input",name:e.name,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.type==="file"?e.attrs:{...e.attrs,value:e.modelValue},{onInput:r[0]||(r[0]=(...s)=>e.onInput&&e.onInput(...s)),onBlur:r[1]||(r[1]=(...s)=>e.onBlur&&e.onBlur(...s)),onChange:r[2]||(r[2]=(...s)=>e.onChange&&e.onChange(...s))}),null,16,Mt),j(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?($(),Z("span",{key:0,class:q(e.leadingWrapperIconClass)},[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[me(l,{name:e.leadingIconName,class:q(e.leadingIconClass)},null,8,["name","class"])])],2)):J("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?($(),Z("span",{key:1,class:q(e.trailingWrapperIconClass)},[j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[me(l,{name:e.trailingIconName,class:q(e.trailingIconClass)},null,8,["name","class"])])],2)):J("",!0)],2)}const _t=K(Lt,[["render",Ut]]),Dt=ee(z.ui.strategy,z.ui.container,qt),Jt=H({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:r,attrs:n}=be("container",R(e,"ui"),Dt),a=g(()=>ye(A(r.value.base,r.value.padding,r.value.constrained),e.class));return{ui:r,attrs:n,containerClass:a}}});function Wt(e,r,n,a,t,i){return $(),L(Ne(e.as),U({class:e.containerClass},e.attrs),{default:G(()=>[j(e.$slots,"default")]),_:3},16,["class"])}const Pt=K(Jt,[["render",Wt]]);export{Gt as _,Et as a,te as b,Yt as c,_t as d,Pt as e,Xt as f,ae as g,bt as h,Ie as i,ve as j,ze as k,Ee as l,Qt as m,ct as n,Zt as t,be as u};
