import{t as Ie,u as te,a as ye,_ as be,b as ie,c as ce,i as je,d as De,e as Oe}from"./36g4SzAH.js";import{e as qe,m as ae,f as N,_ as Q,g as ne,h as L,r as F,i as _,j as oe,k as ve,n as Re,l as h,p as he,q as E,o as i,c as y,a as g,s as R,v as D,x as p,y as Ne,z as Ue,A as Ee,d as J,t as O,B as z,C as Fe,D as Me,F as K,E as Y,G as ee,b as W,H as M,I as se,J as fe,w as Z,K as j,L as Te}from"./DLxzw_HA.js";import{C as xe}from"./DiKzaJyT.js";import"./Bi04z3kj.js";import"./zPOw4jyl.js";const Pe=qe,Le={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",expanded:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}},He={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},Je={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},x=ae(N.ui.strategy,N.ui.textarea,Ie),Ge=ne({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(x.size).includes(e)}},color:{type:String,default:()=>x.default.color,validator(e){return[...N.ui.colors,...Object.keys(x.color)].includes(e)}},variant:{type:String,default:()=>x.default.variant,validator(e){return[...Object.keys(x.variant),...Object.values(x.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:o,attrs:d}=te("textarea",L(e,"ui"),x,L(e,"class")),{emitFormBlur:A,emitFormInput:v,inputId:r,color:b,size:C,name:w}=ye(e,x),a=F(_({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),s=F(null),u=()=>{var m;e.autofocus&&((m=s.value)==null||m.focus())},S=()=>{if(e.autoresize){if(!s.value)return;s.value.rows=e.rows;const m=s.value.style.overflow;s.value.style.overflow="hidden";const V=window.getComputedStyle(s.value),T=Number.parseInt(V.paddingTop),U=Number.parseInt(V.paddingBottom),I=T+U,H=Number.parseInt(V.lineHeight),{scrollHeight:le}=s.value,X=(le-I)/H;X>e.rows&&(s.value.rows=e.maxrows?Math.min(X,e.maxrows):X),s.value.style.overflow=m}},q=m=>{a.value.trim&&(m=m.trim()),a.value.number&&(m=Ne(m)),a.value.nullify&&(m||(m=null)),t("update:modelValue",m),v()},l=m=>{S(),a.value.lazy||q(m.target.value)},c=m=>{const V=m.target.value;t("change",V),a.value.lazy&&q(V),a.value.trim&&(m.target.value=V.trim())},k=m=>{t("blur",m),A()};oe(()=>{setTimeout(()=>{u()},e.autofocusDelay)}),ve(()=>e.modelValue,()=>{Re(S)}),oe(()=>{setTimeout(()=>{u(),S()},100)});const $=h(()=>{var V,T;const m=((T=(V=o.value.color)==null?void 0:V[b.value])==null?void 0:T[e.variant])||o.value.variant[e.variant];return he(E(o.value.base,o.value.form,o.value.rounded,o.value.placeholder,o.value.size[C.value],e.padded?o.value.padding[C.value]:"p-0",m==null?void 0:m.replaceAll("{color}",b.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:o,attrs:d,name:w,inputId:r,textarea:s,textareaClass:$,onInput:l,onChange:c,onBlur:k}}}),Ke=["id","value","name","rows","required","disabled","placeholder"];function We(e,t,o,d,A,v){return i(),y("div",{class:p(e.ui.wrapper)},[g("textarea",R({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:t[1]||(t[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:t[2]||(t[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Ke),D(e.$slots,"default")],2)}const Qe=Q(Ge,[["render",We]]),pe=ae(N.ui.strategy,N.ui.checkbox,Je),Xe=ne({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>pe.default.color,validator(e){return N.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:o,attrs:d}=te("checkbox",L(e,"ui"),pe,L(e,"class")),{emitFormChange:A,color:v,name:r,inputId:b}=ye(e),C=b.value??Pe(),w=h({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),a=u=>{t("change",u.target.checked),A()},s=h(()=>he(E(o.value.base,o.value.form,o.value.rounded,o.value.background,o.value.border,v.value&&o.value.ring.replaceAll("{color}",v.value),v.value&&o.value.color.replaceAll("{color}",v.value)),e.inputClass));return{ui:o,attrs:d,toggle:w,inputId:C,name:r,inputClass:s,onChange:a}}}),Ye=["data-n-ids"],Ze=["id","name","required","value","disabled","indeterminate"],_e=["for"];function et(e,t,o,d,A,v){return i(),y("div",{class:p(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[g("div",{class:p(e.ui.container)},[Ue(g("input",R({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Ze),[[Ee,e.toggle]])],2),e.label||e.$slots.label?(i(),y("div",{key:0,class:p(e.ui.inner)},[g("label",{for:e.inputId,class:p(e.ui.label)},[D(e.$slots,"label",{label:e.label},()=>[J(O(e.label),1)]),e.required?(i(),y("span",{key:0,class:p(e.ui.required)},"*",2)):z("",!0)],10,_e),e.help||e.$slots.help?(i(),y("p",{key:0,class:p(e.ui.help)},[D(e.$slots,"help",{help:e.help},()=>[J(O(e.help),1)])],2)):z("",!0)],2)):z("",!0)],10,Ye)}const ke=Q(Xe,[["render",et]]),G=ae(N.ui.strategy,N.ui.progress,He),tt=ne({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>G.default.animation,validator(e){return Object.keys(G.animation).includes(e)}},size:{type:String,default:()=>G.default.size,validator(e){return Object.keys(G.progress.size).includes(e)}},color:{type:String,default:()=>G.default.color,validator(e){return N.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:o}=te("progress",L(e,"ui"),G,L(e,"class")),d=h(()=>E(t.value.indicator.container.base,t.value.indicator.container.width,t.value.indicator.container.transition)),A=h(()=>E(t.value.indicator.align,t.value.indicator.width,t.value.indicator.color,t.value.indicator.size[e.size])),v=h(()=>{var $;const k=[t.value.progress.base,t.value.progress.width,t.value.progress.size[e.size],t.value.progress.rounded,t.value.progress.track,t.value.progress.bar,($=t.value.progress.color)==null?void 0:$.replaceAll("{color}",e.color),t.value.progress.background,t.value.progress.indeterminate.base,t.value.progress.indeterminate.rounded];return S.value&&k.push(t.value.animation[e.animation]),E(...k)}),r=h(()=>{var k;return E(t.value.steps.base,(k=t.value.steps.color)==null?void 0:k.replaceAll("{color}",e.color),t.value.steps.size[e.size])}),b=h(()=>E(t.value.step.base,t.value.step.align)),C=h(()=>E(t.value.step.active)),w=h(()=>E(t.value.step.first));function a(k){return k===Number(e.value)}function s(k){return k===0}function u(k){k=Number(k);const $=[b.value];return s(k)&&$.push(w.value),a(k)&&$.push(C.value),$.join(" ")}const S=h(()=>e.value===void 0||e.value===null),q=h(()=>Array.isArray(e.max)),l=h(()=>S.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),c=h(()=>{if(!S.value)switch(!0){case e.value<0:return 0;case e.value>l.value:return 100;default:return e.value/l.value*100}});return{ui:t,attrs:o,indicatorContainerClass:d,indicatorClass:A,progressClass:v,stepsClass:r,stepClasses:u,isIndeterminate:S,isSteps:q,realMax:l,percent:c}}}),at=["aria-valuemax","aria-valuenow"];function nt(e,t,o,d,A,v){return i(),y("div",{class:p(e.ui.wrapper),role:"progressbar"},[e.indicator||e.$slots.indicator?D(e.$slots,"indicator",Me(R({key:0},{percent:e.percent})),()=>[e.isSteps?z("",!0):(i(),y("div",{key:0,class:p(e.indicatorContainerClass),style:Fe({width:`${e.percent}%`})},[g("div",{class:p(e.indicatorClass)},O(Math.round(e.percent))+"% ",3)],6))],!0):z("",!0),g("progress",R({"aria-valuemax":e.realMax,"aria-valuenow":e.value,class:e.progressClass},{value:e.value,max:e.realMax,...e.attrs}),O(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17,at),e.isSteps?(i(),y("div",{key:1,class:p(e.stepsClass)},[(i(!0),y(K,null,Y(e.max,(r,b)=>(i(),y("div",{key:b,class:p(e.stepClasses(b))},[D(e.$slots,`step-${b}`,R({ref_for:!0},{step:r}),()=>[J(O(r),1)],!0)],2))),128))],2)):z("",!0)],2)}const we=Q(tt,[["render",nt],["__scopeId","data-v-c772a8fd"]]);function lt(e){return e?e[0].toUpperCase()+e.slice(1):""}const P=ae(N.ui.strategy,N.ui.table,Le);function rt(e,t){return je(e,t)}function ge(e,t,o){return e===t?0:o==="asc"?e<t?-1:1:e>t?-1:1}function me(e){return new Set(e.map(t=>JSON.stringify(t)))}function ot(e){return t=>ee(t,e)}const st=ne({components:{UIcon:be,UButton:ie,UProgress:we,UCheckbox:ke},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>rt},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>P.default.sortButton},sortAscIcon:{type:String,default:()=>P.default.sortAscIcon},sortDescIcon:{type:String,default:()=>P.default.sortDescIcon},expandButton:{type:Object,default:()=>P.default.expandButton},expand:{type:Object,default:()=>null},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>P.default.loadingState},emptyState:{type:Object,default:()=>P.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>P.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},multipleExpand:{type:Boolean,default:!0},singleSelect:{type:Boolean,default:!1}},emits:["update:modelValue","update:sort","update:expand","select:all"],setup(e,{emit:t,attrs:o}){const{ui:d,attrs:A}=te("table",L(e,"ui"),P,L(e,"class")),v=h(()=>e.columns??Object.keys(e.rows[0]??{}).map(n=>({key:n,label:lt(n),sortable:!1,class:void 0,sort:ge}))),r=ce(e,"sort",t,{passive:!0,defaultValue:_({},e.sort,{column:null,direction:"asc"})}),b=ce(e,"expand",t,{passive:!0,defaultValue:_({},e.expand,{openedRows:[],row:null})}),C=F(null),w={column:r.value.column,direction:null},a=h(()=>{var B;if(!((B=r.value)!=null&&B.column)||e.sortMode==="manual")return e.rows;const{column:n,direction:f}=r.value;return e.rows.slice().sort((re,Be)=>{var de;const ze=ee(re,n),Ae=ee(Be,n);return(((de=v.value.find(Ve=>Ve.key===n))==null?void 0:de.sort)??ge)(ze,Ae,f)})}),s=h({get(){return e.modelValue},set(n){t("update:modelValue",n)}}),u=h(()=>e.rows.length),S=h(()=>{const n=me(s.value),f=me(e.rows);return Array.from(n).filter(B=>f.has(B)).length}),q=h(()=>!s.value||!e.rows?!1:S.value>0&&S.value<u.value),l=h(()=>S.value===u.value),c=h(()=>e.emptyState===null?null:{...d.value.default.emptyState,...e.emptyState}),k=h(()=>e.loadingState===null?null:{...d.value.default.loadingState,...e.loadingState});function $(n,f){if(typeof e.by=="string"){const B=ot(e.by);return B(n)===B(f)}return e.by(n,f)}function m(n){return e.modelValue?s.value.some(f=>$(fe(f),fe(n))):!1}function V(n){if(r.value.column===n.key){const f=!n.direction||n.direction==="asc"?"desc":"asc";r.value.direction===f?r.value=_({},w,{column:null,direction:"asc"}):r.value={column:r.value.column,direction:r.value.direction==="asc"?"desc":"asc"}}else r.value={column:n.key,direction:n.direction||"asc"}}function T(n){const f=window.getSelection();f&&f.toString().length>0||o.onSelect&&o.onSelect(n)}function U(n,f){o.onContextmenu&&o.onContextmenu(n,f)}function I(){const n=[...s.value];e.rows.forEach(f=>{m(f)||n.push(f)}),s.value=n}function H(n){n?I():s.value=[],t("select:all",n)}function le(n,f){if(n)s.value=e.singleSelect?[f]:[...s.value,f];else{const B=s.value.findIndex(re=>$(re,f));s.value.splice(B,1)}}function X(n,f,B=""){return ee(n,f,B)}function ue(n){var f;return(f=b.value)!=null&&f.openedRows?b.value.openedRows.some(B=>$(B,n)):!1}function Se(n,f){return e.columns?n===0&&!e.columns.find(B=>B.key===f):n===0}function Ce(n){b.value={openedRows:ue(n)?b.value.openedRows.filter(f=>!$(f,n)):e.multipleExpand?[...b.value.openedRows,n]:[n],row:n}}function $e(n){if(n.sortable){if(r.value.column!==n.key)return"none";if(r.value.direction==="asc")return"ascending";if(r.value.direction==="desc")return"descending"}}return ve(a,()=>{C.value=new Date},{deep:!0}),{ui:d,attrs:A,sort:r,columns:v,rows:a,selected:s,indeterminate:q,emptyState:c,loadingState:k,isAllRowChecked:l,onChangeCheckbox:le,isSelected:m,onSort:V,onSelect:T,onContextmenu:U,onChange:H,getRowData:X,toggleOpened:Ce,getAriaSort:$e,isExpanded:ue,shouldRenderColumnInFirstPlace:Se,retriggerSlot:C}}}),it=["aria-sort"],ut={key:1},dt={key:0},ct={key:0},ft=["colspan"],pt={key:1},gt=["colspan"],mt=["onClick","onContextmenu"],yt={key:0},bt={colspan:"100%"};function vt(e,t,o,d,A,v){const r=ke,b=ie,C=we,w=be;return i(),y("div",R({class:e.ui.wrapper},e.attrs),[g("table",{class:p([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?D(e.$slots,"caption",{key:0},()=>[g("caption",{class:p(e.ui.caption)},O(e.caption),3)]):z("",!0),g("thead",{class:p(e.ui.thead)},[g("tr",{class:p(e.ui.tr.base)},[e.expand?(i(),y("th",{key:0,scope:"col",class:p(e.ui.tr.base)},t[0]||(t[0]=[g("span",{class:"sr-only"},"Expand",-1)]),2)):z("",!0),(i(!0),y(K,null,Y(e.columns,(a,s)=>(i(),y("th",{key:s,scope:"col",class:p([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.key==="select"&&e.ui.checkbox.padding,a.class]),"aria-sort":e.getAriaSort(a)},[!e.singleSelect&&e.modelValue&&(a.key==="select"||e.shouldRenderColumnInFirstPlace(s,"select"))?D(e.$slots,"select-header",{key:0,indeterminate:e.indeterminate,checked:e.isAllRowChecked,change:e.onChange},()=>[W(r,R({"model-value":e.isAllRowChecked,indeterminate:e.indeterminate,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])]):D(e.$slots,`${a.key}-header`,{key:1,column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(i(),M(b,R({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:u=>e.onSort(a)}),null,16,["icon","label","onClick"])):(i(),y("span",ut,O(a[e.columnAttribute]),1))])],10,it))),128))],2),e.loading&&e.progress?(i(),y("tr",dt,[g("td",{colspan:0,class:p(e.ui.progress.wrapper)},[W(C,R({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):z("",!0)],2),g("tbody",{class:p(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(i(),y("tr",ct,[g("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[D(e.$slots,"loading-state",{},()=>[g("div",{class:p(e.ui.loadingState.wrapper)},[e.loadingState.icon?(i(),M(w,{key:0,name:e.loadingState.icon,class:p(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):z("",!0),g("p",{class:p(e.ui.loadingState.label)},O(e.loadingState.label),3)],2)])],8,ft)])):e.emptyState&&!e.rows.length?(i(),y("tr",pt,[g("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[D(e.$slots,"empty-state",{},()=>[g("div",{class:p(e.ui.emptyState.wrapper)},[e.emptyState.icon?(i(),M(w,{key:0,name:e.emptyState.icon,class:p(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):z("",!0),g("p",{class:p(e.ui.emptyState.label)},O(e.emptyState.label),3)],2)])],8,gt)])):(i(!0),y(K,{key:2},Y(e.rows,(a,s)=>(i(),y(K,{key:s},[g("tr",{class:p([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.isExpanded(a)&&e.ui.tr.expanded,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a),onContextmenu:u=>e.onContextmenu(u,a)},[e.expand?(i(),y("td",{key:0,class:p([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[e.$slots["expand-action"]?D(e.$slots,"expand-action",{key:0,row:a,isExpanded:e.isExpanded(a),toggle:()=>e.toggleOpened(a)}):(i(),M(b,R({key:1,disabled:a.disabledExpand,ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.isExpanded(a)&&"rotate-180"].join(" ")}},onClickCapture:se(u=>e.toggleOpened(a),["stop"])}),null,16,["disabled","ui","onClickCapture"]))],2)):z("",!0),(i(!0),y(K,null,Y(e.columns,(u,S)=>{var q;return i(),y("td",{key:S,class:p([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,u==null?void 0:u.rowClass,(q=a[u.key])==null?void 0:q.class,u.key==="select"&&e.ui.checkbox.padding])},[e.modelValue&&(u.key==="select"||e.shouldRenderColumnInFirstPlace(S,"select"))?D(e.$slots,"select-data",{key:0,checked:e.isSelected(a),change:l=>e.onChangeCheckbox(l,a)},()=>[W(r,R({"model-value":e.isSelected(a),ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onChange:l=>e.onChangeCheckbox(l,a),onClickCapture:se(()=>e.onSelect(a),["stop"])}),null,16,["model-value","onChange","onClickCapture"])]):D(e.$slots,`${u.key}-data`,{key:e.retriggerSlot,column:u,row:a,index:s,getRowData:l=>e.getRowData(a,u.key,l)},()=>[J(O(e.getRowData(a,u.key)),1)])],2)}),128))],42,mt),e.isExpanded(a)?(i(),y("tr",yt,[g("td",bt,[D(e.$slots,"expand",{row:a,index:s})])])):z("",!0)],64))),128))],2)],2)],16)}const ht=Q(st,[["render",vt]]),kt={class:"my-10"},wt={class:"grid grid-cols-3 gap-6"},St={class:"col-span-1 max-w-lg"},Ct={class:"text-xl font-semibold mb-4"},$t=["for"],Bt={key:0,class:"text-red-500 mb-4"},zt={class:"col-span-2"},At={__name:"CreateDrug",setup(e){const t=new xe("https://mcq-db.dakakean.com"),o=F([]),d=F({icon:null,id:null,brand:null,name:null,frequency:null,dose:null,when:null,duration:null,note:null}),A=F([]),v=F(!1),r=F(!1),b=F(""),C=()=>{d.value={icon:null,id:null,brand:null,name:null,frequency:null,dose:null,when:null,duration:null,note:null},v.value=!1,o.value=[]},w=l=>l?l.split(`
`).filter(c=>c.trim()!==""):"",a=async()=>{try{const l=await t.collection("drugs").getFullList();A.value=l.map(c=>({icon:c.icon||"",id:c.id||"",name:c.name||"",brand:c.brand||"",frequency:c.frequency||"",dose:c.dose||"",when:c.when||"",duration:c.duration||"",note:c.note||""}))}catch(l){console.error("Error fetching drugs:",l)}},s=async()=>{r.value=!0,b.value="",console.log(d.value);const l={icon:d.value.icon,name:d.value.name,brand:w(d.value.brand),frequency:w(d.value.frequency),dose:w(d.value.dose),when:w(d.value.when),duration:w(d.value.duration),note:w(d.value.note)};try{v.value?(await t.collection("drugs").update(d.value.id,l),console.log("Drug updated successfully.")):(await t.collection("drugs").create(l),console.log("Drug created successfully.")),C(),a()}catch(c){console.error("Error saving drug:",c),b.value=c.message||"Failed to save drug."}finally{r.value=!1}},u=l=>l?Array.isArray(l)?l.map(c=>c.trim()).join(`
`):typeof l=="string"?l.includes(",")?l.split(",").map(c=>c.trim()).join(`
`):l.trim():String(l):"",S=l=>{console.log(l),o.value.length===1?(v.value=!1,C()):(v.value=!0,d.value={id:l.id||"",icon:l.icon||"",name:u(l.name),brand:u(l.brand),frequency:u(l.frequency),dose:u(l.dose),when:u(l.when),duration:u(l.duration),note:u(l.note)})},q=async()=>{try{await t.collection("drugs").delete(d.value.id),a(),C()}catch(l){console.error("Error deleting drug:",l)}};return oe(a),(l,c)=>{const k=ie,$=Qe,m=De,V=ht,T=Oe;return i(),M(T,{class:"my-10"},{default:Z(()=>[g("div",kt,[W(k,{to:"/"},{default:Z(()=>c[1]||(c[1]=[J("back")])),_:1})]),g("div",wt,[g("div",St,[g("h1",Ct,O(j(v)?"Edit Drug":"Add New Drug"),1),g("form",{onSubmit:se(s,["prevent"])},[(i(),y(K,null,Y({icon:"Icon",name:"Name",brand:"Brand",frequency:"Frequency",dose:"Dose",when:"When to Take",duration:"Duration",note:"Note"},(U,I)=>g("div",{key:I,class:"form-group mb-4"},[g("label",{for:I,class:"block mb-2 text-sm font-medium text-gray-700"},O(U),9,$t),I!=="name"&&I!=="icon"?(i(),M($,{key:0,autoresize:"",modelValue:j(d)[I],"onUpdate:modelValue":H=>j(d)[I]=H,id:I,class:"textarea",placeholder:`Enter ${U.toLowerCase()} (one per line)`},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])):(i(),M(m,{key:1,modelValue:j(d)[I],"onUpdate:modelValue":H=>j(d)[I]=H,id:I,type:"text",class:"input",placeholder:`Enter ${U.toLowerCase()}`,required:""},null,8,["modelValue","onUpdate:modelValue","id","placeholder"]))])),64)),j(b)?(i(),y("div",Bt,O(j(b)),1)):z("",!0),W(k,{type:"submit",class:"bg-primary mr-4",disabled:j(r)},{default:Z(()=>[J(O(j(r)?"Submitting...":j(v)?"Update Drug":"Create Drug"),1)]),_:1},8,["disabled"]),j(v)?(i(),M(k,{key:1,type:"submit",class:"bg-red-700",disabled:j(r),onClick:q},{default:Z(()=>c[2]||(c[2]=[J(" Delete Drug ")])),_:1},8,["disabled"])):z("",!0)],32)]),g("div",zt,[W(V,{modelValue:j(o),"onUpdate:modelValue":c[0]||(c[0]=U=>Te(o)?o.value=U:null),rows:j(A),class:"w-full border rounded","single-select":!0,onSelect:S},null,8,["modelValue","rows"])])])]),_:1})}}},Vt=Q(At,[["__scopeId","data-v-44f56ba5"]]),It={};function jt(e,t){const o=Vt;return i(),M(o)}const Et=Q(It,[["render",jt]]);export{Et as default};