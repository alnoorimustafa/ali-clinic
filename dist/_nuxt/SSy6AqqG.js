import{u as st,d as rt,b as ut,e as it}from"./BP2zFCe4.js";import{i as je,n as dt,d as Pe,u as Me,A as de,S as G,o as L,t as We,E as Ye,e as Q,g as ve,P as be,N as j,h as Ue,T as ft,j as pt,k as he,l as Le,m as ze,p as P,q as vt,r as mt,w as ct,s as gt,$ as bt,z as yt,v as Re,x as De,y as ht,B as W,C as wt,D as xt,F as Et,G as $t,f as Tt,b as Vt,c as Dt,a as St}from"./D5qU34xv.js";import{f as oe,r as m,k as c,i as R,P as X,Q as O,F as Ge,R as K,j as fe,S as Ct,N as ae,M as se,n as Ft,v as ne,m as Lt,e as qe,_ as Qe,g as He,y as At,T as me,o as Y,H as ye,w as F,b as g,q as Ee,a as u,B as Ke,s as kt,t as k,K as Bt,c as $e,E as Nt,I as Ot,d as le}from"./B-l6s3Ai.js";import"./u6ZHkmoV.js";import"./CsyreXic.js";const Pt={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function Xe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let l=new Set;for(let a of e.value){let o=L(a);o instanceof HTMLElement&&l.add(o)}return l}var Ze=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ze||{});let ue=Object.assign(oe({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:m(new Set)}},inheritAttrs:!1,setup(e,{attrs:l,slots:a,expose:o}){let n=m(null);o({el:n,$el:n});let r=c(()=>je(n)),d=m(!1);R(()=>d.value=!0),X(()=>d.value=!1),Ut({ownerDocument:r},c(()=>d.value&&!!(e.features&16)));let f=Rt({ownerDocument:r,container:n,initialFocus:c(()=>e.initialFocus)},c(()=>d.value&&!!(e.features&2)));qt({ownerDocument:r,container:n,containers:e.containers,previousActiveElement:f},c(()=>d.value&&!!(e.features&8)));let i=dt();function p(y){let E=L(n);E&&(V=>V())(()=>{Q(i.value,{[ve.Forwards]:()=>{be(E,j.First,{skipElements:[y.relatedTarget]})},[ve.Backwards]:()=>{be(E,j.Last,{skipElements:[y.relatedTarget]})}})})}let v=m(!1);function w(y){y.key==="Tab"&&(v.value=!0,requestAnimationFrame(()=>{v.value=!1}))}function x(y){if(!d.value)return;let E=Xe(e.containers);L(n)instanceof HTMLElement&&E.add(L(n));let V=y.relatedTarget;V instanceof HTMLElement&&V.dataset.headlessuiFocusGuard!=="true"&&(Je(E,V)||(v.value?be(L(n),Q(i.value,{[ve.Forwards]:()=>j.Next,[ve.Backwards]:()=>j.Previous})|j.WrapAround,{relativeTo:y.target}):y.target instanceof HTMLElement&&G(y.target)))}return()=>{let y={},E={ref:n,onKeydown:w,onFocusout:x},{features:V,initialFocus:$,containers:M,...S}=e;return O(Ge,[!!(V&4)&&O(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:Me.Focusable}),de({ourProps:E,theirProps:{...l,...S},slot:y,attrs:l,slots:a,name:"FocusTrap"}),!!(V&4)&&O(Pe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:Me.Focusable})])}}}),{features:Ze});function Mt(e){let l=m(Ue.slice());return fe([e],([a],[o])=>{o===!0&&a===!1?We(()=>{l.value.splice(0)}):o===!1&&a===!0&&(l.value=Ue.slice())},{flush:"post"}),()=>{var a;return(a=l.value.find(o=>o!=null&&o.isConnected))!=null?a:null}}function Ut({ownerDocument:e},l){let a=Mt(l);R(()=>{K(()=>{var o,n;l.value||((o=e.value)==null?void 0:o.activeElement)===((n=e.value)==null?void 0:n.body)&&G(a())},{flush:"post"})}),X(()=>{l.value&&G(a())})}function Rt({ownerDocument:e,container:l,initialFocus:a},o){let n=m(null),r=m(!1);return R(()=>r.value=!0),X(()=>r.value=!1),R(()=>{fe([l,a,o],(d,f)=>{if(d.every((p,v)=>(f==null?void 0:f[v])===p)||!o.value)return;let i=L(l);i&&We(()=>{var p,v;if(!r.value)return;let w=L(a),x=(p=e.value)==null?void 0:p.activeElement;if(w){if(w===x){n.value=x;return}}else if(i.contains(x)){n.value=x;return}w?G(w):be(i,j.First|j.NoScroll)===ft.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(v=e.value)==null?void 0:v.activeElement})},{immediate:!0,flush:"post"})}),n}function qt({ownerDocument:e,container:l,containers:a,previousActiveElement:o},n){var r;Ye((r=e.value)==null?void 0:r.defaultView,"focus",d=>{if(!n.value)return;let f=Xe(a);L(l)instanceof HTMLElement&&f.add(L(l));let i=o.value;if(!i)return;let p=d.target;p&&p instanceof HTMLElement?Je(f,p)?(o.value=p,G(p)):(d.preventDefault(),d.stopPropagation(),G(i)):G(o.value)},!0)}function Je(e,l){for(let a of e)if(a.contains(l))return!0;return!1}function Ht(e){let l=Ct(e.getSnapshot());return X(e.subscribe(()=>{l.value=e.getSnapshot()})),l}function _t(e,l){let a=e(),o=new Set;return{getSnapshot(){return a},subscribe(n){return o.add(n),()=>o.delete(n)},dispatch(n,...r){let d=l[n].call(a,...r);d&&(a=d,o.forEach(f=>f()))}}}function It(){let e;return{before({doc:l}){var a;let o=l.documentElement;e=((a=l.defaultView)!=null?a:window).innerWidth-o.clientWidth},after({doc:l,d:a}){let o=l.documentElement,n=o.clientWidth-o.offsetWidth,r=e-n;a.style(o,"paddingRight",`${r}px`)}}}function jt(){return pt()?{before({doc:e,d:l,meta:a}){function o(n){return a.containers.flatMap(r=>r()).some(r=>r.contains(n))}l.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let f=he();f.style(e.documentElement,"scrollBehavior","auto"),l.add(()=>l.microTask(()=>f.dispose()))}let r=(n=window.scrollY)!=null?n:window.pageYOffset,d=null;l.addEventListener(e,"click",f=>{if(f.target instanceof HTMLElement)try{let i=f.target.closest("a");if(!i)return;let{hash:p}=new URL(i.href),v=e.querySelector(p);v&&!o(v)&&(d=v)}catch{}},!0),l.addEventListener(e,"touchstart",f=>{if(f.target instanceof HTMLElement)if(o(f.target)){let i=f.target;for(;i.parentElement&&o(i.parentElement);)i=i.parentElement;l.style(i,"overscrollBehavior","contain")}else l.style(f.target,"touchAction","none")}),l.addEventListener(e,"touchmove",f=>{if(f.target instanceof HTMLElement){if(f.target.tagName==="INPUT")return;if(o(f.target)){let i=f.target;for(;i.parentElement&&i.dataset.headlessuiPortal!==""&&!(i.scrollHeight>i.clientHeight||i.scrollWidth>i.clientWidth);)i=i.parentElement;i.dataset.headlessuiPortal===""&&f.preventDefault()}else f.preventDefault()}},{passive:!1}),l.add(()=>{var f;let i=(f=window.scrollY)!=null?f:window.pageYOffset;r!==i&&window.scrollTo(0,r),d&&d.isConnected&&(d.scrollIntoView({block:"nearest"}),d=null)})})}}:{}}function Wt(){return{before({doc:e,d:l}){l.style(e.documentElement,"overflow","hidden")}}}function Yt(e){let l={};for(let a of e)Object.assign(l,a(l));return l}let z=_t(()=>new Map,{PUSH(e,l){var a;let o=(a=this.get(e))!=null?a:{doc:e,count:0,d:he(),meta:new Set};return o.count++,o.meta.add(l),this.set(e,o),this},POP(e,l){let a=this.get(e);return a&&(a.count--,a.meta.delete(l)),this},SCROLL_PREVENT({doc:e,d:l,meta:a}){let o={doc:e,d:l,meta:Yt(a)},n=[jt(),It(),Wt()];n.forEach(({before:r})=>r==null?void 0:r(o)),n.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});z.subscribe(()=>{let e=z.getSnapshot(),l=new Map;for(let[a]of e)l.set(a,a.documentElement.style.overflow);for(let a of e.values()){let o=l.get(a.doc)==="hidden",n=a.count!==0;(n&&!o||!n&&o)&&z.dispatch(a.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",a),a.count===0&&z.dispatch("TEARDOWN",a)}});function zt(e,l,a){let o=Ht(z),n=c(()=>{let r=e.value?o.value.get(e.value):void 0;return r?r.count>0:!1});return fe([e,l],([r,d],[f],i)=>{if(!r||!d)return;z.dispatch("PUSH",r,a);let p=!1;i(()=>{p||(z.dispatch("POP",f??r,a),p=!0)})},{immediate:!0}),n}let Te=new Map,ie=new Map;function _e(e,l=m(!0)){K(a=>{var o;if(!l.value)return;let n=L(e);if(!n)return;a(function(){var d;if(!n)return;let f=(d=ie.get(n))!=null?d:1;if(f===1?ie.delete(n):ie.set(n,f-1),f!==1)return;let i=Te.get(n);i&&(i["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",i["aria-hidden"]),n.inert=i.inert,Te.delete(n))});let r=(o=ie.get(n))!=null?o:0;ie.set(n,r+1),r===0&&(Te.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}let et=Symbol("StackContext");var Se=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Se||{});function Gt(){return se(et,()=>{})}function Qt({type:e,enabled:l,element:a,onUpdate:o}){let n=Gt();function r(...d){o==null||o(...d),n(...d)}R(()=>{fe(l,(d,f)=>{d?r(0,e,a):f===!0&&r(1,e,a)},{immediate:!0,flush:"sync"})}),X(()=>{l.value&&r(1,e,a)}),ae(et,r)}let Kt=Symbol("DescriptionContext");function Xt({slot:e=m({}),name:l="Description",props:a={}}={}){let o=m([]);function n(r){return o.value.push(r),()=>{let d=o.value.indexOf(r);d!==-1&&o.value.splice(d,1)}}return ae(Kt,{register:n,slot:e,name:l,props:a}),c(()=>o.value.length>0?o.value.join(" "):void 0)}var Zt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Zt||{});let Ce=Symbol("DialogContext");function tt(e){let l=se(Ce,null);if(l===null){let a=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,tt),a}return l}let ce="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Jt=oe({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ce},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:l,attrs:a,slots:o,expose:n}){var r,d;let f=(r=e.id)!=null?r:`headlessui-dialog-${Le()}`,i=m(!1);R(()=>{i.value=!0});let p=!1,v=c(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(p||(p=!0,console.warn(`Invalid role [${v}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),w=m(0),x=ze(),y=c(()=>e.open===ce&&x!==null?(x.value&P.Open)===P.Open:e.open),E=m(null),V=c(()=>je(E));if(n({el:E,$el:E}),!(e.open!==ce||x!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof y.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${y.value===ce?void 0:e.open}`);let $=c(()=>i.value&&y.value?0:1),M=c(()=>$.value===0),S=c(()=>w.value>1),h=se(Ce,null)!==null,[t,U]=vt(),{resolveContainers:A,mainTreeNodeRef:Z,MainTreeNode:J}=mt({portals:t,defaultContainers:[c(()=>{var b;return(b=te.panelRef.value)!=null?b:E.value})]}),D=c(()=>S.value?"parent":"leaf"),_=c(()=>x!==null?(x.value&P.Closing)===P.Closing:!1),re=c(()=>h||_.value?!1:M.value),s=c(()=>{var b,T,B;return(B=Array.from((T=(b=V.value)==null?void 0:b.querySelectorAll("body > *"))!=null?T:[]).find(N=>N.id==="headlessui-portal-root"?!1:N.contains(L(Z))&&N instanceof HTMLElement))!=null?B:null});_e(s,re);let C=c(()=>S.value?!0:M.value),ee=c(()=>{var b,T,B;return(B=Array.from((T=(b=V.value)==null?void 0:b.querySelectorAll("[data-headlessui-portal]"))!=null?T:[]).find(N=>N.contains(L(Z))&&N instanceof HTMLElement))!=null?B:null});_e(ee,C),Qt({type:"Dialog",enabled:c(()=>$.value===0),element:E,onUpdate:(b,T)=>{if(T==="Dialog")return Q(b,{[Se.Add]:()=>w.value+=1,[Se.Remove]:()=>w.value-=1})}});let q=Xt({name:"DialogDescription",slot:c(()=>({open:y.value}))}),H=m(null),te={titleId:H,panelRef:m(null),dialogState:$,setTitleId(b){H.value!==b&&(H.value=b)},close(){l("close",!1)}};ae(Ce,te);let Be=c(()=>!(!M.value||S.value));ct(A,(b,T)=>{b.preventDefault(),te.close(),Ft(()=>T==null?void 0:T.focus())},Be);let Ne=c(()=>!(S.value||$.value!==0));Ye((d=V.value)==null?void 0:d.defaultView,"keydown",b=>{Ne.value&&(b.defaultPrevented||b.key===gt.Escape&&(b.preventDefault(),b.stopPropagation(),te.close()))});let Oe=c(()=>!(_.value||$.value!==0||h));return zt(V,Oe,b=>{var T;return{containers:[...(T=b.containers)!=null?T:[],A]}}),K(b=>{if($.value!==0)return;let T=L(E);if(!T)return;let B=new ResizeObserver(N=>{for(let xe of N){let pe=xe.target.getBoundingClientRect();pe.x===0&&pe.y===0&&pe.width===0&&pe.height===0&&te.close()}});B.observe(T),b(()=>B.disconnect())}),()=>{let{open:b,initialFocus:T,...B}=e,N={...a,ref:E,id:f,role:v.value,"aria-modal":$.value===0?!0:void 0,"aria-labelledby":H.value,"aria-describedby":q.value},xe={open:$.value===0};return O(Re,{force:!0},()=>[O(bt,()=>O(yt,{target:E.value},()=>O(Re,{force:!1},()=>O(ue,{initialFocus:T,containers:A,features:M.value?Q(D.value,{parent:ue.features.RestoreFocus,leaf:ue.features.All&~ue.features.FocusLock}):ue.features.None},()=>O(U,{},()=>de({ourProps:N,theirProps:{...B,...a},slot:xe,attrs:a,slots:o,visible:$.value===0,features:De.RenderStrategy|De.Static,name:"Dialog"})))))),O(J)])}}}),el=oe({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:l,slots:a,expose:o}){var n;let r=(n=e.id)!=null?n:`headlessui-dialog-panel-${Le()}`,d=tt("DialogPanel");o({el:d.panelRef,$el:d.panelRef});function f(i){i.stopPropagation()}return()=>{let{...i}=e,p={id:r,ref:d.panelRef,onClick:f};return de({ourProps:p,theirProps:i,slot:{open:d.dialogState.value===0},attrs:l,slots:a,name:"DialogPanel"})}}});function tl(e){let l={called:!1};return(...a)=>{if(!l.called)return l.called=!0,e(...a)}}function Ve(e,...l){e&&l.length>0&&e.classList.add(...l)}function ge(e,...l){e&&l.length>0&&e.classList.remove(...l)}var Fe=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Fe||{});function ll(e,l){let a=he();if(!e)return a.dispose;let{transitionDuration:o,transitionDelay:n}=getComputedStyle(e),[r,d]=[o,n].map(f=>{let[i=0]=f.split(",").filter(Boolean).map(p=>p.includes("ms")?parseFloat(p):parseFloat(p)*1e3).sort((p,v)=>v-p);return i});return r!==0?a.setTimeout(()=>l("finished"),r+d):l("finished"),a.add(()=>l("cancelled")),a.dispose}function Ie(e,l,a,o,n,r){let d=he(),f=r!==void 0?tl(r):()=>{};return ge(e,...n),Ve(e,...l,...a),d.nextFrame(()=>{ge(e,...a),Ve(e,...o),d.add(ll(e,i=>(ge(e,...o,...l),Ve(e,...n),f(i))))}),d.add(()=>ge(e,...l,...a,...o,...n)),d.add(()=>f("cancelled")),d.dispose}function I(e=""){return e.split(/\s+/).filter(l=>l.length>1)}let Ae=Symbol("TransitionContext");var nl=(e=>(e.Visible="visible",e.Hidden="hidden",e))(nl||{});function al(){return se(Ae,null)!==null}function ol(){let e=se(Ae,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function sl(){let e=se(ke,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let ke=Symbol("NestingContext");function we(e){return"children"in e?we(e.children):e.value.filter(({state:l})=>l==="visible").length>0}function lt(e){let l=m([]),a=m(!1);R(()=>a.value=!0),X(()=>a.value=!1);function o(r,d=W.Hidden){let f=l.value.findIndex(({id:i})=>i===r);f!==-1&&(Q(d,{[W.Unmount](){l.value.splice(f,1)},[W.Hidden](){l.value[f].state="hidden"}}),!we(l)&&a.value&&(e==null||e()))}function n(r){let d=l.value.find(({id:f})=>f===r);return d?d.state!=="visible"&&(d.state="visible"):l.value.push({id:r,state:"visible"}),()=>o(r,W.Unmount)}return{children:l,register:n,unregister:o}}let nt=De.RenderStrategy,at=oe({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:a,slots:o,expose:n}){let r=m(0);function d(){r.value|=P.Opening,l("beforeEnter")}function f(){r.value&=~P.Opening,l("afterEnter")}function i(){r.value|=P.Closing,l("beforeLeave")}function p(){r.value&=~P.Closing,l("afterLeave")}if(!al()&&ht())return()=>O(ot,{...e,onBeforeEnter:d,onAfterEnter:f,onBeforeLeave:i,onAfterLeave:p},o);let v=m(null),w=c(()=>e.unmount?W.Unmount:W.Hidden);n({el:v,$el:v});let{show:x,appear:y}=ol(),{register:E,unregister:V}=sl(),$=m(x.value?"visible":"hidden"),M={value:!0},S=Le(),h={value:!1},t=lt(()=>{!h.value&&$.value!=="hidden"&&($.value="hidden",V(S),p())});R(()=>{let C=E(S);X(C)}),K(()=>{if(w.value===W.Hidden&&S){if(x.value&&$.value!=="visible"){$.value="visible";return}Q($.value,{hidden:()=>V(S),visible:()=>E(S)})}});let U=I(e.enter),A=I(e.enterFrom),Z=I(e.enterTo),J=I(e.entered),D=I(e.leave),_=I(e.leaveFrom),re=I(e.leaveTo);R(()=>{K(()=>{if($.value==="visible"){let C=L(v);if(C instanceof Comment&&C.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function s(C){let ee=M.value&&!y.value,q=L(v);!q||!(q instanceof HTMLElement)||ee||(h.value=!0,x.value&&d(),x.value||i(),C(x.value?Ie(q,U,A,Z,J,H=>{h.value=!1,H===Fe.Finished&&f()}):Ie(q,D,_,re,J,H=>{h.value=!1,H===Fe.Finished&&(we(t)||($.value="hidden",V(S),p()))})))}return R(()=>{fe([x],(C,ee,q)=>{s(q),M.value=!1},{immediate:!0})}),ae(ke,t),wt(c(()=>Q($.value,{visible:P.Open,hidden:P.Closed})|r.value)),()=>{let{appear:C,show:ee,enter:q,enterFrom:H,enterTo:te,entered:Be,leave:Ne,leaveFrom:Oe,leaveTo:b,...T}=e,B={ref:v},N={...T,...y.value&&x.value&&xt.isServer?{class:ne([a.class,T.class,...U,...A])}:{}};return de({theirProps:N,ourProps:B,slot:{},slots:o,attrs:a,features:nt,visible:$.value==="visible",name:"TransitionChild"})}}}),rl=at,ot=oe({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:l,attrs:a,slots:o}){let n=ze(),r=c(()=>e.show===null&&n!==null?(n.value&P.Open)===P.Open:e.show);K(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let d=m(r.value?"visible":"hidden"),f=lt(()=>{d.value="hidden"}),i=m(!0),p={show:r,appear:c(()=>e.appear||!i.value)};return R(()=>{K(()=>{i.value=!1,r.value?d.value="visible":we(f)||(d.value="hidden")})}),ae(ke,f),ae(Ae,p),()=>{let v=Et(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),w={unmount:e.unmount};return de({ourProps:{...w,as:"template"},theirProps:{},slot:{},slots:{...o,default:()=>[O(rl,{onBeforeEnter:()=>l("beforeEnter"),onAfterEnter:()=>l("afterEnter"),onBeforeLeave:()=>l("beforeLeave"),onAfterLeave:()=>l("afterLeave"),...a,...w,...v},o.default)]},attrs:{},features:nt,visible:d.value==="visible",name:"Transition"})}}});const ul=Lt(qe.ui.strategy,qe.ui.modal,Pt),il=oe({components:{HDialog:Jt,HDialogPanel:el,TransitionRoot:ot,TransitionChild:at},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:l}){const{ui:a,attrs:o}=st("modal",He(e,"ui"),ul,He(e,"class")),n=c({get(){return e.modelValue},set(i){l("update:modelValue",i)}}),r=c(()=>e.transition?{...a.value.transition}:{});function d(i){if(e.preventClose){l("close-prevented");return}n.value=i,l("close")}const f=()=>{l("after-leave")};return $t(()=>At()),{ui:a,attrs:o,isOpen:n,transitionClass:r,onAfterLeave:f,close:d}}});function dl(e,l,a,o,n,r){const d=me("TransitionChild"),f=me("HDialogPanel"),i=me("HDialog"),p=me("TransitionRoot");return Y(),ye(p,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:F(()=>[g(i,Ee({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:F(()=>[e.overlay?(Y(),ye(d,Ee({key:0,as:"template",appear:e.appear},e.ui.overlay.transition,{class:e.ui.overlay.transition.enterFrom}),{default:F(()=>[u("div",{class:ne([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear","class"])):Ke("",!0),u("div",{class:ne(e.ui.inner)},[u("div",{class:ne([e.ui.container,!e.fullscreen&&e.ui.padding])},[g(d,Ee({as:"template",appear:e.appear},e.transitionClass,{class:e.transitionClass.enterFrom}),{default:F(()=>[g(f,{class:ne([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:F(()=>[kt(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear","class"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const fl=Qe(il,[["render",dl]]),pl={class:"flex flex-row justify-between gap-4 mb-10 text-right",dir:"rtl"},vl={class:"print-show"},ml={class:"print-show"},cl={class:"print-show"},gl={class:"sm:flex sm:items-center print-hide"},bl={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},yl={class:"mt-8 flow-root"},hl={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},wl={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},xl={class:"min-w-full border rounded divide-y divide-gray-300"},El={class:"px-4 py-4 text-sm text-gray-900"},$l={class:"px-4 py-4 text-sm font-medium text-gray-900"},Tl={class:"px-4 py-4 text-sm text-gray-500"},Vl={class:"px-4 py-4 text-sm text-gray-500"},Dl={class:"px-4 py-4 text-sm text-gray-500"},Sl={class:"px-4 py-4 text-sm text-gray-500"},Cl={class:"px-4 py-4 text-sm text-gray-500"},Fl={class:"relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3"},Ll=["onClick"],Al={class:"sr-only"},kl={key:0,class:""},Bl={colspan:"12",class:"py-2 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-3 border-b-4 text-center"},Nl={class:"p-8"},Ol={class:"flex flex-col mb-4 w-full justify-between"},Pl={class:"mb-4"},Ml={class:"mb-4"},Ul={class:"mb-4"},Rl={class:"mb-4"},ql={class:"mb-4"},Hl={class:"mb-4"},_l={class:"mb-4"},Il={class:"mt-4"},jl={class:"p-8"},Wl={class:"text-lg font-semibold text-gray-900 mb-4"},Yl={class:"flex flex-col mb-4 w-full justify-between"},zl={class:"mb-4"},Gl={class:"mb-4"},Ql={class:"mb-4"},Kl={class:"mb-4"},Xl={class:"mb-4"},Zl={class:"mb-4"},Jl={class:"mb-4"},en={class:"mt-4 flex flex-row justify-between"},tn={__name:"NewDrugTable",setup(e){const l=m(new Date),a=m(!1),o=m(!1),n=m({}),r=m(""),d=m(""),f=m(!1),i=m({});m("");const p=m({name:"",brand:"",frequency:"",dose:"",duration:"",when:"",note:""}),v=(h,t)=>{p.value[t]=h.target.value},w=m([]),x=async(h,t={})=>{if(h==="create")o.value=!0;else{a.value=!0,n.value={...t};try{const U=await $fetch(`https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name="${t.name}"&expand=doses,frequency`);f.value=!1,i.value=U.items[0]}catch(U){console.error(U),f.value=!1}}},y=h=>{h==="create"?o.value=!1:(a.value=!1,n.value={})},E=()=>{const h=w.value.findIndex(t=>t.id===n.value.id);h!==-1?w.value.splice(h,1,{...n.value}):w.value.push({...n.value}),a.value=!1,n.value={}},V=()=>{w.value.push({...p.value}),y("create"),i.value={},p.value={}},$=()=>{w.value=w.value.filter(h=>h.id!==n.value.id),y("edit")};async function M(h){f.value=!0;try{const t=await $fetch(`https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name~"${h}"&expand=doses,frequency`);return f.value=!1,t.items}catch(t){console.error(t),f.value=!1}}const S=async h=>{i.value=h,p.value.name=h.name};return(h,t)=>{const U=rt,A=ut,Z=Vt,J=Dt,D=St,_=fl,re=it;return Y(),ye(re,{class:"py-10"},{default:F(()=>[u("div",pl,[u("div",null,[u("p",vl,"الاسم : "+k(r.value),1),g(U,{class:"print-hide mb-4",modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=s=>r.value=s),placeholder:"Patient Name"},null,8,["modelValue"]),u("p",ml,"العمر: "+k(d.value),1),g(U,{class:"print-hide mb-4",modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=s=>d.value=s),placeholder:"Patient Age"},null,8,["modelValue"])]),u("div",null,[u("p",cl," التاريخ: "+k(new Intl.DateTimeFormat("en-GB").format(l.value)),1),g(J,{class:"print-hide",popper:{placement:"bottom-start"}},{panel:F(({close:s})=>[g(Z,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=C=>l.value=C),"is-required":"",onClose:s},null,8,["modelValue","onClose"])]),default:F(()=>[g(A,{icon:"i-heroicons-calendar-days-20-solid",label:Bt(Tt)(l.value,"d/MM/yyyy")},null,8,["label"])]),_:1})])]),u("div",null,[u("div",gl,[t[36]||(t[36]=u("div",{class:"sm:flex-auto"},[u("h1",{class:"text-base font-semibold leading-6 text-gray-900"},"Drugs"),u("p",{class:"mt-2 text-sm text-gray-700"}," A list of prescriptions for the patient. ")],-1)),u("div",bl,[u("button",{type:"button",class:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",onClick:t[3]||(t[3]=s=>x("create"))}," Add Drug ")])]),u("div",yl,[u("div",hl,[u("div",wl,[u("table",xl,[t[38]||(t[38]=u("thead",{class:"bg-white"},[u("tr",null,[u("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"}," # "),u("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"}," Name "),u("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Brand "),u("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Dose "),u("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," When "),u("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Frequency "),u("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"}," Duration "),u("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-3"},[u("span",{class:"sr-only"},"Edit")])])],-1)),(Y(!0),$e(Ge,null,Nt(w.value,(s,C)=>(Y(),$e("tbody",{key:s.id,class:"bg-white col-span-12"},[u("tr",{class:ne([C===0?"border-gray-300":"border-gray-200","border-t "])},[u("td",El,k(C+1),1),u("td",$l,k(s.name),1),u("td",Tl,k(s.brand),1),u("td",Vl,k(s.dose),1),u("td",Dl,k(s.when),1),u("td",Sl,k(s.frequency),1),u("td",Cl,k(s.duration),1),u("td",Fl,[u("a",{onClick:Ot(ee=>x("edit",s),["prevent"]),href:"#",class:"text-indigo-600 hover:text-indigo-900"},[t[37]||(t[37]=le(" Edit")),u("span",Al,", "+k(s.name),1)],8,Ll)])],2),s.note?(Y(),$e("tr",kl,[u("td",Bl,k(s.note),1)])):Ke("",!0)]))),128))])])])])]),g(_,{modelValue:o.value,"onUpdate:modelValue":t[19]||(t[19]=s=>o.value=s)},{default:F(()=>[u("div",Nl,[t[48]||(t[48]=u("h2",{class:"text-lg font-semibold text-gray-900 mb-4"},"Add New Drug",-1)),u("div",Ol,[u("div",Pl,[t[39]||(t[39]=u("p",{class:"text-sm mb-2"},"Name",-1)),g(D,{search:M,onChange:S,loading:f.value,trailing:"","option-attribute":"name",onInput:t[4]||(t[4]=s=>v(s,"name")),modelValue:p.value.name,"onUpdate:modelValue":t[5]||(t[5]=s=>p.value.name=s),placeholder:"Name"},null,8,["loading","modelValue"])]),u("div",Ml,[t[40]||(t[40]=u("p",{class:"text-sm mb-2"},"Brand",-1)),g(D,{trailing:!1,options:i.value.brand,nullable:"",modelValue:p.value.brand,"onUpdate:modelValue":t[6]||(t[6]=s=>p.value.brand=s),onInput:t[7]||(t[7]=s=>v(s,"brand")),placeholder:"Brand"},null,8,["options","modelValue"])]),u("div",Ul,[t[41]||(t[41]=u("p",{class:"text-sm mb-2"},"Dosage",-1)),g(D,{options:i.value.dose||[],nullable:"",modelValue:p.value.dose,"onUpdate:modelValue":t[8]||(t[8]=s=>p.value.dose=s),onInput:t[9]||(t[9]=s=>v(s,"dose")),placeholder:"Dosage"},null,8,["options","modelValue"])]),u("div",Rl,[t[42]||(t[42]=u("p",{class:"text-sm mb-2"},"When",-1)),g(D,{searchable:"",options:i.value.when,nullable:"",onInput:t[10]||(t[10]=s=>v(s,"when")),modelValue:p.value.when,"onUpdate:modelValue":t[11]||(t[11]=s=>p.value.when=s),placeholder:"When"},null,8,["options","modelValue"])]),u("div",ql,[t[43]||(t[43]=u("p",{class:"text-sm mb-2"},"Frequency",-1)),g(D,{searchable:"",options:i.value.frequency,nullable:"",onInput:t[12]||(t[12]=s=>v(s,"frequency")),modelValue:p.value.frequency,"onUpdate:modelValue":t[13]||(t[13]=s=>p.value.frequency=s),placeholder:"Frequency"},null,8,["options","modelValue"])]),u("div",Hl,[t[44]||(t[44]=u("p",{class:"text-sm mb-2"},"Duration",-1)),g(D,{searchable:"",options:i.value.duration,nullable:"",onInput:t[14]||(t[14]=s=>v(s,"duration")),modelValue:p.value.duration,"onUpdate:modelValue":t[15]||(t[15]=s=>p.value.duration=s),placeholder:"Duration"},null,8,["options","modelValue"])]),u("div",_l,[t[45]||(t[45]=u("p",{class:"text-sm mb-2"},"Note",-1)),g(D,{searchable:"",options:i.value.note,nullable:"",onInput:t[16]||(t[16]=s=>v(s,"note")),modelValue:p.value.note,"onUpdate:modelValue":t[17]||(t[17]=s=>p.value.note=s),placeholder:"Note"},null,8,["options","modelValue"])]),u("div",Il,[g(A,{class:"mr-4",onClick:V},{default:F(()=>t[46]||(t[46]=[le("Save")])),_:1}),g(A,{class:"mr-4",onClick:t[18]||(t[18]=s=>y("create"))},{default:F(()=>t[47]||(t[47]=[le("Cancel")])),_:1})])])])]),_:1},8,["modelValue"]),g(_,{modelValue:a.value,"onUpdate:modelValue":t[35]||(t[35]=s=>a.value=s)},{default:F(()=>[u("div",jl,[u("h2",Wl,k(n.value.id?"Edit Drug":"Add New Drug"),1),u("div",Yl,[u("div",zl,[t[49]||(t[49]=u("p",{class:"text-sm mb-2"},"Name",-1)),g(D,{search:M,onChange:S,loading:f.value,trailing:"","option-attribute":"name",modelValue:n.value.name,"onUpdate:modelValue":[t[20]||(t[20]=s=>n.value.name=s),t[21]||(t[21]=s=>n.value.name=s)],modelModifiers:{query:!0},placeholder:"Name"},null,8,["loading","modelValue"])]),u("div",Gl,[t[50]||(t[50]=u("p",{class:"text-sm mb-2"},"Brand",-1)),g(D,{searchable:"",options:i.value.brand,nullable:"",modelValue:n.value.brand,"onUpdate:modelValue":[t[22]||(t[22]=s=>n.value.brand=s),t[23]||(t[23]=s=>n.value.brand=s)],modelModifiers:{query:!0},placeholder:"Brand"},null,8,["options","modelValue"])]),u("div",Ql,[t[51]||(t[51]=u("p",{class:"text-sm mb-2"},"Dose",-1)),g(D,{searchable:"",options:i.value.dose,nullable:"",modelValue:n.value.dose,"onUpdate:modelValue":[t[24]||(t[24]=s=>n.value.dose=s),t[25]||(t[25]=s=>n.value.dose=s)],modelModifiers:{query:!0},placeholder:"Dose"},null,8,["options","modelValue"])]),u("div",Kl,[t[52]||(t[52]=u("p",{class:"text-sm mb-2"},"When",-1)),g(D,{searchable:"",options:i.value.when,nullable:"",modelValue:n.value.when,"onUpdate:modelValue":[t[26]||(t[26]=s=>n.value.when=s),t[27]||(t[27]=s=>n.value.when=s)],modelModifiers:{query:!0},placeholder:"When"},null,8,["options","modelValue"])]),u("div",Xl,[t[53]||(t[53]=u("p",{class:"text-sm mb-2"},"Frequency",-1)),g(D,{searchable:"",options:i.value.frequency,nullable:"",modelValue:n.value.frequency,"onUpdate:modelValue":[t[28]||(t[28]=s=>n.value.frequency=s),t[29]||(t[29]=s=>n.value.frequency=s)],modelModifiers:{query:!0},placeholder:"Frequency"},null,8,["options","modelValue"])]),u("div",Zl,[t[54]||(t[54]=u("p",{class:"text-sm mb-2"},"Duration",-1)),g(D,{searchable:"",options:i.value.duration,nullable:"",modelValue:n.value.duration,"onUpdate:modelValue":[t[30]||(t[30]=s=>n.value.duration=s),t[31]||(t[31]=s=>n.value.duration=s)],modelModifiers:{query:!0},placeholder:"Duration"},null,8,["options","modelValue"])]),u("div",Jl,[t[55]||(t[55]=u("p",{class:"text-sm mb-2"},"Note",-1)),g(D,{searchable:"",options:i.value.note,nullable:"",modelValue:n.value.note,"onUpdate:modelValue":[t[32]||(t[32]=s=>n.value.note=s),t[33]||(t[33]=s=>n.value.note=s)],modelModifiers:{query:!0},placeholder:"Note"},null,8,["options","modelValue"])]),u("div",en,[u("div",null,[g(A,{class:"mr-4",onClick:E},{default:F(()=>t[56]||(t[56]=[le("Save")])),_:1}),g(A,{class:"mr-4 bg-red-600",onClick:$},{default:F(()=>t[57]||(t[57]=[le("Delete")])),_:1})]),g(A,{class:"",variant:"outline",onClick:t[34]||(t[34]=s=>y("edit"))},{default:F(()=>t[58]||(t[58]=[le("Cancel")])),_:1})])])])]),_:1},8,["modelValue"])]),_:1})}}},ln={};function nn(e,l){const a=tn;return Y(),ye(a)}const dn=Qe(ln,[["render",nn]]);export{dn as default};