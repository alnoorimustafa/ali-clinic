import{t as Ve,u as ae,a as ye,_ as se,b as be,c as de,i as De,d as je,e as Oe}from"./Do4-90J5.js";import{m as ne,e as R,_ as Q,f as le,c as y,o as u,a as p,r as j,g as N,n as f,h as P,i as U,j as ee,k as oe,l as ve,p as qe,q as v,s as he,v as F,x as Ne,y as Re,z as V,A as Ue,B as Ee,d as J,t as B,C as Fe,D as Me,F as W,E as _,b as K,G as M,H as ce,I as te,J as fe,w as Z,K as S,L as xe}from"./DRIv_HOH.js";import{C as Te,u as Le}from"./B_U-LYH8.js";import"./fRPDKotm.js";import"./BObANMH4.js";const Pe={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",expanded:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}},He={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},Je={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},T=ne(R.ui.strategy,R.ui.textarea,Ve),Ge=le({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(T.size).includes(e)}},color:{type:String,default:()=>T.default.color,validator(e){return[...R.ui.colors,...Object.keys(T.color)].includes(e)}},variant:{type:String,default:()=>T.default.variant,validator(e){return[...Object.keys(T.variant),...Object.values(T.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:s,attrs:z}=ae("textarea",P(e,"ui"),T,P(e,"class")),{emitFormBlur:g,emitFormInput:h,inputId:r,color:b,size:C,name:O}=ye(e,T),a=U(ee({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),o=U(null),c=()=>{var m;e.autofocus&&((m=o.value)==null||m.focus())},w=()=>{if(e.autoresize){if(!o.value)return;o.value.rows=e.rows;const m=o.value.style.overflow;o.value.style.overflow="hidden";const D=window.getComputedStyle(o.value),x=Number.parseInt(D.paddingTop),X=Number.parseInt(D.paddingBottom),Y=x+X,q=Number.parseInt(D.lineHeight),{scrollHeight:$}=o.value,E=($-Y)/q;E>e.rows&&(o.value.rows=e.maxrows?Math.min(E,e.maxrows):E),o.value.style.overflow=m}},k=m=>{a.value.trim&&(m=m.trim()),a.value.number&&(m=Ne(m)),a.value.nullify&&(m||(m=null)),t("update:modelValue",m),h()},A=m=>{w(),a.value.lazy||k(m.target.value)},H=m=>{const D=m.target.value;t("change",D),a.value.lazy&&k(D),a.value.trim&&(m.target.value=D.trim())},n=m=>{t("blur",m),g()};oe(()=>{setTimeout(()=>{c()},e.autofocusDelay)}),ve(()=>e.modelValue,()=>{qe(w)}),oe(()=>{setTimeout(()=>{c(),w()},100)});const i=v(()=>{var D,x;const m=((x=(D=s.value.color)==null?void 0:D[b.value])==null?void 0:x[e.variant])||s.value.variant[e.variant];return he(F(s.value.base,s.value.form,s.value.rounded,s.value.placeholder,s.value.size[C.value],e.padded?s.value.padding[C.value]:"p-0",m==null?void 0:m.replaceAll("{color}",b.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:s,attrs:z,name:O,inputId:r,textarea:o,textareaClass:i,onInput:A,onChange:H,onBlur:n}}}),We=["id","value","name","rows","required","disabled","placeholder"];function Ke(e,t,s,z,g,h){return u(),y("div",{class:f(e.ui.wrapper)},[p("textarea",N({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:t[1]||(t[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:t[2]||(t[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,We),j(e.$slots,"default")],2)}const Qe=Q(Ge,[["render",Ke]]),Xe=Re,pe=ne(R.ui.strategy,R.ui.checkbox,Je),Ye=le({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>pe.default.color,validator(e){return R.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:s,attrs:z}=ae("checkbox",P(e,"ui"),pe,P(e,"class")),{emitFormChange:g,color:h,name:r,inputId:b}=ye(e),C=b.value??Xe(),O=v({get(){return e.modelValue},set(c){t("update:modelValue",c)}}),a=c=>{t("change",c.target.checked),g()},o=v(()=>he(F(s.value.base,s.value.form,s.value.rounded,s.value.background,s.value.border,h.value&&s.value.ring.replaceAll("{color}",h.value),h.value&&s.value.color.replaceAll("{color}",h.value)),e.inputClass));return{ui:s,attrs:z,toggle:O,inputId:C,name:r,inputClass:o,onChange:a}}}),Ze=["data-n-ids"],_e=["id","name","required","value","disabled","indeterminate"],et=["for"];function tt(e,t,s,z,g,h){return u(),y("div",{class:f(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[p("div",{class:f(e.ui.container)},[Ue(p("input",N({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,_e),[[Ee,e.toggle]])],2),e.label||e.$slots.label?(u(),y("div",{key:0,class:f(e.ui.inner)},[p("label",{for:e.inputId,class:f(e.ui.label)},[j(e.$slots,"label",{label:e.label},()=>[J(B(e.label),1)]),e.required?(u(),y("span",{key:0,class:f(e.ui.required)},"*",2)):V("",!0)],10,et),e.help||e.$slots.help?(u(),y("p",{key:0,class:f(e.ui.help)},[j(e.$slots,"help",{help:e.help},()=>[J(B(e.help),1)])],2)):V("",!0)],2)):V("",!0)],10,Ze)}const ke=Q(Ye,[["render",tt]]),G=ne(R.ui.strategy,R.ui.progress,He),at=le({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>G.default.animation,validator(e){return Object.keys(G.animation).includes(e)}},size:{type:String,default:()=>G.default.size,validator(e){return Object.keys(G.progress.size).includes(e)}},color:{type:String,default:()=>G.default.color,validator(e){return R.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=ae("progress",P(e,"ui"),G,P(e,"class")),z=v(()=>F(t.value.indicator.container.base,t.value.indicator.container.width,t.value.indicator.container.transition)),g=v(()=>F(t.value.indicator.align,t.value.indicator.width,t.value.indicator.color,t.value.indicator.size[e.size])),h=v(()=>{var i;const n=[t.value.progress.base,t.value.progress.width,t.value.progress.size[e.size],t.value.progress.rounded,t.value.progress.track,t.value.progress.bar,(i=t.value.progress.color)==null?void 0:i.replaceAll("{color}",e.color),t.value.progress.background,t.value.progress.indeterminate.base,t.value.progress.indeterminate.rounded];return w.value&&n.push(t.value.animation[e.animation]),F(...n)}),r=v(()=>{var n;return F(t.value.steps.base,(n=t.value.steps.color)==null?void 0:n.replaceAll("{color}",e.color),t.value.steps.size[e.size])}),b=v(()=>F(t.value.step.base,t.value.step.align)),C=v(()=>F(t.value.step.active)),O=v(()=>F(t.value.step.first));function a(n){return n===Number(e.value)}function o(n){return n===0}function c(n){n=Number(n);const i=[b.value];return o(n)&&i.push(O.value),a(n)&&i.push(C.value),i.join(" ")}const w=v(()=>e.value===void 0||e.value===null),k=v(()=>Array.isArray(e.max)),A=v(()=>w.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),H=v(()=>{if(!w.value)switch(!0){case e.value<0:return 0;case e.value>A.value:return 100;default:return e.value/A.value*100}});return{ui:t,attrs:s,indicatorContainerClass:z,indicatorClass:g,progressClass:h,stepsClass:r,stepClasses:c,isIndeterminate:w,isSteps:k,realMax:A,percent:H}}}),nt=["aria-valuemax","aria-valuenow"];function lt(e,t,s,z,g,h){return u(),y("div",{class:f(e.ui.wrapper),role:"progressbar"},[e.indicator||e.$slots.indicator?j(e.$slots,"indicator",Me(N({key:0},{percent:e.percent})),()=>[e.isSteps?V("",!0):(u(),y("div",{key:0,class:f(e.indicatorContainerClass),style:Fe({width:`${e.percent}%`})},[p("div",{class:f(e.indicatorClass)},B(Math.round(e.percent))+"% ",3)],6))],!0):V("",!0),p("progress",N({"aria-valuemax":e.realMax,"aria-valuenow":e.value,class:e.progressClass},{value:e.value,max:e.realMax,...e.attrs}),B(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17,nt),e.isSteps?(u(),y("div",{key:1,class:f(e.stepsClass)},[(u(!0),y(W,null,_(e.max,(r,b)=>(u(),y("div",{key:b,class:f(e.stepClasses(b))},[j(e.$slots,`step-${b}`,N({ref_for:!0},{step:r}),()=>[J(B(r),1)],!0)],2))),128))],2)):V("",!0)],2)}const we=Q(at,[["render",lt],["__scopeId","data-v-d013e55d"]]);function rt(e){return e?e[0].toUpperCase()+e.slice(1):""}const L=ne(R.ui.strategy,R.ui.table,Pe);function ot(e,t){return De(e,t)}function ge(e,t,s){return e===t?0:s==="asc"?e<t?-1:1:e>t?-1:1}function me(e){return new Set(e.map(t=>JSON.stringify(t)))}function st(e){return t=>te(t,e)}const it=le({components:{UIcon:be,UButton:se,UProgress:we,UCheckbox:ke},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>ot},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>L.default.sortButton},sortAscIcon:{type:String,default:()=>L.default.sortAscIcon},sortDescIcon:{type:String,default:()=>L.default.sortDescIcon},expandButton:{type:Object,default:()=>L.default.expandButton},expand:{type:Object,default:()=>null},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>L.default.loadingState},emptyState:{type:Object,default:()=>L.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>L.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},multipleExpand:{type:Boolean,default:!0},singleSelect:{type:Boolean,default:!1}},emits:["update:modelValue","update:sort","update:expand","select:all"],setup(e,{emit:t,attrs:s}){const{ui:z,attrs:g}=ae("table",P(e,"ui"),L,P(e,"class")),h=v(()=>e.columns??Object.keys(e.rows[0]??{}).map(l=>({key:l,label:rt(l),sortable:!1,class:void 0,sort:ge}))),r=de(e,"sort",t,{passive:!0,defaultValue:ee({},e.sort,{column:null,direction:"asc"})}),b=de(e,"expand",t,{passive:!0,defaultValue:ee({},e.expand,{openedRows:[],row:null})}),C=U(null),O={column:r.value.column,direction:null},a=v(()=>{var I;if(!((I=r.value)!=null&&I.column)||e.sortMode==="manual")return e.rows;const{column:l,direction:d}=r.value;return e.rows.slice().sort((re,Be)=>{var ue;const ze=te(re,l),Ae=te(Be,l);return(((ue=h.value.find(Ie=>Ie.key===l))==null?void 0:ue.sort)??ge)(ze,Ae,d)})}),o=v({get(){return e.modelValue},set(l){t("update:modelValue",l)}}),c=v(()=>e.rows.length),w=v(()=>{const l=me(o.value),d=me(e.rows);return Array.from(l).filter(I=>d.has(I)).length}),k=v(()=>!o.value||!e.rows?!1:w.value>0&&w.value<c.value),A=v(()=>w.value===c.value),H=v(()=>e.emptyState===null?null:{...z.value.default.emptyState,...e.emptyState}),n=v(()=>e.loadingState===null?null:{...z.value.default.loadingState,...e.loadingState});function i(l,d){if(typeof e.by=="string"){const I=st(e.by);return I(l)===I(d)}return e.by(l,d)}function m(l){return e.modelValue?o.value.some(d=>i(fe(d),fe(l))):!1}function D(l){if(r.value.column===l.key){const d=!l.direction||l.direction==="asc"?"desc":"asc";r.value.direction===d?r.value=ee({},O,{column:null,direction:"asc"}):r.value={column:r.value.column,direction:r.value.direction==="asc"?"desc":"asc"}}else r.value={column:l.key,direction:l.direction||"asc"}}function x(l){const d=window.getSelection();d&&d.toString().length>0||s.onSelect&&s.onSelect(l)}function X(l,d){s.onContextmenu&&s.onContextmenu(l,d)}function Y(){const l=[...o.value];e.rows.forEach(d=>{m(d)||l.push(d)}),o.value=l}function q(l){l?Y():o.value=[],t("select:all",l)}function $(l,d){if(l)o.value=e.singleSelect?[d]:[...o.value,d];else{const I=o.value.findIndex(re=>i(re,d));o.value.splice(I,1)}}function E(l,d,I=""){return te(l,d,I)}function ie(l){var d;return(d=b.value)!=null&&d.openedRows?b.value.openedRows.some(I=>i(I,l)):!1}function Se(l,d){return e.columns?l===0&&!e.columns.find(I=>I.key===d):l===0}function Ce(l){b.value={openedRows:ie(l)?b.value.openedRows.filter(d=>!i(d,l)):e.multipleExpand?[...b.value.openedRows,l]:[l],row:l}}function $e(l){if(l.sortable){if(r.value.column!==l.key)return"none";if(r.value.direction==="asc")return"ascending";if(r.value.direction==="desc")return"descending"}}return ve(a,()=>{C.value=new Date},{deep:!0}),{ui:z,attrs:g,sort:r,columns:h,rows:a,selected:o,indeterminate:k,emptyState:H,loadingState:n,isAllRowChecked:A,onChangeCheckbox:$,isSelected:m,onSort:D,onSelect:x,onContextmenu:X,onChange:q,getRowData:E,toggleOpened:Ce,getAriaSort:$e,isExpanded:ie,shouldRenderColumnInFirstPlace:Se,retriggerSlot:C}}}),ut=["aria-sort"],dt={key:1},ct={key:0},ft={key:0},pt=["colspan"],gt={key:1},mt=["colspan"],yt=["onClick","onContextmenu"],bt={key:0},vt={colspan:"100%"};function ht(e,t,s,z,g,h){const r=ke,b=se,C=we,O=be;return u(),y("div",N({class:e.ui.wrapper},e.attrs),[p("table",{class:f([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?j(e.$slots,"caption",{key:0},()=>[p("caption",{class:f(e.ui.caption)},B(e.caption),3)]):V("",!0),p("thead",{class:f(e.ui.thead)},[p("tr",{class:f(e.ui.tr.base)},[e.expand?(u(),y("th",{key:0,scope:"col",class:f(e.ui.tr.base)},t[0]||(t[0]=[p("span",{class:"sr-only"},"Expand",-1)]),2)):V("",!0),(u(!0),y(W,null,_(e.columns,(a,o)=>(u(),y("th",{key:o,scope:"col",class:f([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.key==="select"&&e.ui.checkbox.padding,a.class]),"aria-sort":e.getAriaSort(a)},[!e.singleSelect&&e.modelValue&&(a.key==="select"||e.shouldRenderColumnInFirstPlace(o,"select"))?j(e.$slots,"select-header",{key:0,indeterminate:e.indeterminate,checked:e.isAllRowChecked,change:e.onChange},()=>[K(r,N({"model-value":e.isAllRowChecked,indeterminate:e.indeterminate,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])]):j(e.$slots,`${a.key}-header`,{key:1,column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(u(),M(b,N({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:c=>e.onSort(a)}),null,16,["icon","label","onClick"])):(u(),y("span",dt,B(a[e.columnAttribute]),1))])],10,ut))),128))],2),e.loading&&e.progress?(u(),y("tr",ct,[p("td",{colspan:0,class:f(e.ui.progress.wrapper)},[K(C,N({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):V("",!0)],2),p("tbody",{class:f(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(u(),y("tr",ft,[p("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[j(e.$slots,"loading-state",{},()=>[p("div",{class:f(e.ui.loadingState.wrapper)},[e.loadingState.icon?(u(),M(O,{key:0,name:e.loadingState.icon,class:f(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):V("",!0),p("p",{class:f(e.ui.loadingState.label)},B(e.loadingState.label),3)],2)])],8,pt)])):e.emptyState&&!e.rows.length?(u(),y("tr",gt,[p("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[j(e.$slots,"empty-state",{},()=>[p("div",{class:f(e.ui.emptyState.wrapper)},[e.emptyState.icon?(u(),M(O,{key:0,name:e.emptyState.icon,class:f(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):V("",!0),p("p",{class:f(e.ui.emptyState.label)},B(e.emptyState.label),3)],2)])],8,mt)])):(u(!0),y(W,{key:2},_(e.rows,(a,o)=>(u(),y(W,{key:o},[p("tr",{class:f([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.isExpanded(a)&&e.ui.tr.expanded,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a),onContextmenu:c=>e.onContextmenu(c,a)},[e.expand?(u(),y("td",{key:0,class:f([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[e.$slots["expand-action"]?j(e.$slots,"expand-action",{key:0,row:a,isExpanded:e.isExpanded(a),toggle:()=>e.toggleOpened(a)}):(u(),M(b,N({key:1,disabled:a.disabledExpand,ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.isExpanded(a)&&"rotate-180"].join(" ")}},onClickCapture:ce(c=>e.toggleOpened(a),["stop"])}),null,16,["disabled","ui","onClickCapture"]))],2)):V("",!0),(u(!0),y(W,null,_(e.columns,(c,w)=>{var k;return u(),y("td",{key:w,class:f([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,c==null?void 0:c.rowClass,(k=a[c.key])==null?void 0:k.class,c.key==="select"&&e.ui.checkbox.padding])},[e.modelValue&&(c.key==="select"||e.shouldRenderColumnInFirstPlace(w,"select"))?j(e.$slots,"select-data",{key:0,checked:e.isSelected(a),change:A=>e.onChangeCheckbox(A,a)},()=>[K(r,N({"model-value":e.isSelected(a),ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onChange:A=>e.onChangeCheckbox(A,a),onClickCapture:ce(()=>e.onSelect(a),["stop"])}),null,16,["model-value","onChange","onClickCapture"])]):j(e.$slots,`${c.key}-data`,{key:e.retriggerSlot,column:c,row:a,index:o,getRowData:A=>e.getRowData(a,c.key,A)},()=>[J(B(e.getRowData(a,c.key)),1)])],2)}),128))],42,yt),e.isExpanded(a)?(u(),y("tr",bt,[p("td",vt,[j(e.$slots,"expand",{row:a,index:o})])])):V("",!0)],64))),128))],2)],2)],16)}const kt=Q(it,[["render",ht]]),wt={class:"my-10"},St={class:"grid grid-cols-3 gap-6"},Ct={class:"col-span-1 max-w-lg sticky-form"},$t={class:"text-xl font-semibold mb-4"},Bt=["for"],zt={key:0,class:"text-red-500 mb-4"},At={class:"col-span-2"},It={class:"text-sm text-gray-500 mb-2"},Vt={__name:"CreateDrug",setup(e){const t=new Te("https://mcq-db.dakakean.com"),s=U([]),z=U([{label:"id"},{label:"Icon",key:"icon"},{label:"Name",key:"name"},{label:"Brand",key:"brand"},{label:"Frequency",key:"frequency"},{label:"Dose",key:"dose"},{label:"When",key:"when"},{label:"Duration",key:"duration"},{label:"Note",key:"note"}]),g=U({icon:"",id:null,name:null,brand:null,frequency:null,dose:null,when:null,duration:null,note:null}),h=U([]),r=U(!1),b=U(!1),C=U(""),{drugList:O}=Le(),a=()=>{g.value={icon:null,id:null,brand:null,name:null,frequency:null,dose:null,when:null,duration:null,note:null,hidden:null},r.value=!1,s.value=[]},o=n=>n?n.split(`
`).filter(i=>i.trim()!==""):"",c=async()=>{try{const n=await t.collection("drugs").getFullList({sort:"name"});O.value=n,h.value=n.map(i=>({id:i.id||"",name:i.name||"",icon:i.icon||"",brand:i.brand||"",frequency:i.frequency||"",dose:i.dose||"",when:i.when||"",duration:i.duration||"",note:i.note||"",hidden:i.hidden||""}))}catch(n){console.error("Error fetching drugs:",n)}},w=async()=>{b.value=!0,C.value="";const n={icon:g.value.icon,name:g.value.name,brand:o(g.value.brand),frequency:o(g.value.frequency),dose:o(g.value.dose),when:o(g.value.when),duration:o(g.value.duration),note:o(g.value.note),hidden:o(g.value.hidden)};try{r.value?(await t.collection("drugs").update(g.value.id,n),console.log("Drug updated successfully.")):(await t.collection("drugs").create(n),console.log("Drug created successfully.")),a(),c()}catch(i){console.error("Error saving drug:",i),C.value=i.message||"Failed to save drug."}finally{b.value=!1}},k=n=>n?Array.isArray(n)?n.map(i=>i.trim()).join(`
`):typeof n=="string"?n.includes(",")?n.split(",").map(i=>i.trim()).join(`
`):n.trim():String(n):"",A=n=>{console.log(n),s.value.length===1?(r.value=!1,a()):(r.value=!0,g.value={id:n.id||"",icon:n.icon||"",name:k(n.name),brand:k(n.brand),frequency:k(n.frequency),dose:k(n.dose),when:k(n.when),duration:k(n.duration),note:k(n.note),hidden:k(n.hidden)})},H=async()=>{try{await t.collection("drugs").delete(g.value.id),c(),a()}catch(n){console.error("Error deleting drug:",n)}};return oe(c),(n,i)=>{const m=se,D=Qe,x=je,X=kt,Y=Oe;return u(),M(Y,{class:"my-10"},{default:Z(()=>[p("div",wt,[K(m,{to:"/"},{default:Z(()=>i[1]||(i[1]=[J("back")])),_:1})]),p("div",St,[p("div",Ct,[p("h1",$t,B(S(r)?"Edit Drug":"Add New Drug"),1),(u(),y(W,null,_({icon:"Icon",name:"Name",brand:"Brand",frequency:"Frequency",dose:"Dose",when:"When to Take",duration:"Duration",note:"Note",hidden:"Hidden Note"},(q,$)=>p("div",{key:$,class:"form-group mb-4"},[p("label",{for:$,class:"block mb-2 text-sm font-medium text-gray-700"},B(q),9,Bt),$!=="name"&&$!=="icon"?(u(),M(D,{key:0,required:!1,autoresize:"",modelValue:S(g)[$],"onUpdate:modelValue":E=>S(g)[$]=E,id:$,class:"textarea",placeholder:`Enter ${q.toLowerCase()} (one per line)`},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])):(u(),M(x,{key:1,modelValue:S(g)[$],"onUpdate:modelValue":E=>S(g)[$]=E,id:$,type:"text",class:"input",placeholder:`Enter ${q.toLowerCase()}`,required:""},null,8,["modelValue","onUpdate:modelValue","id","placeholder"]))])),64)),S(C)?(u(),y("div",zt,B(S(C)),1)):V("",!0),K(m,{type:"submit",class:"bg-primary mr-4",disabled:S(b),onClick:w},{default:Z(()=>[J(B(S(b)?"Submitting...":S(r)?"Update Drug":"Create Drug"),1)]),_:1},8,["disabled"]),S(r)?(u(),M(m,{key:1,type:"submit",class:"bg-red-700",disabled:S(b),onClick:H},{default:Z(()=>i[2]||(i[2]=[J(" Delete Drug ")])),_:1},8,["disabled"])):V("",!0)]),p("div",At,[p("p",It,B(S(h).length)+" drugs",1),K(X,{modelValue:S(s),"onUpdate:modelValue":i[0]||(i[0]=q=>xe(s)?s.value=q:null),rows:S(h),columns:S(z),class:"w-full border rounded","single-select":!0,onSelect:A},{"name-data":Z(({row:q})=>[p("span",{class:f([S(s).find($=>$.id===q.id)&&"text-primary-500 dark:text-primary-400"])},B(q.name),3)]),_:1},8,["modelValue","rows","columns"])])])]),_:1})}}},Dt=Q(Vt,[["__scopeId","data-v-192498c3"]]),jt={};function Ot(e,t){const s=Dt;return u(),M(s)}const Mt=Q(jt,[["render",Ot]]);export{Mt as default};
