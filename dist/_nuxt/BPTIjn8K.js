import{t as Ne,u as le,a as be,_ as ue,b as ve,c as ce,i as Ie,d as De,e as je}from"./DX6Mn05n.js";import{m as re,e as U,_ as Y,f as oe,c as g,o as u,a as f,r as j,g as R,n as m,h as P,i as E,j as ae,k as ie,l as he,p as qe,q as v,s as ke,v as x,x as Oe,y as Ee,z as D,A as Re,B as Ue,d as L,t as $,C as Fe,D as xe,F as X,E as te,b as G,G as F,H as fe,I as ne,J as pe,w as K,K as h,L as Me}from"./DXaDI2h7.js";import{C as Te,u as Le,c as Pe}from"./CcbhWoAB.js";import"./D3NeNsBA.js";import"./drntRwj2.js";const He={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",caption:"sr-only",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",expanded:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},expand:{icon:"transform transition-transform duration-200"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},expandButton:{icon:"i-heroicons-chevron-down",color:"gray",variant:"ghost",size:"xs",class:"-my-1.5 align-middle"},checkbox:{color:"primary"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}},Je={wrapper:"w-full flex flex-col gap-2",indicator:{container:{base:"flex flex-row justify-end",width:"min-w-fit",transition:"transition-all"},align:"text-end",width:"w-fit",color:"text-gray-400 dark:text-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},progress:{base:"block appearance-none border-none overflow-hidden",width:"w-full [&::-webkit-progress-bar]:w-full",size:{"2xs":"h-px",xs:"h-0.5",sm:"h-1",md:"h-2",lg:"h-3",xl:"h-4","2xl":"h-5"},rounded:"rounded-full [&::-webkit-progress-bar]:rounded-full",track:"[&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:dark:bg-gray-700 [@supports(selector(&::-moz-progress-bar))]:bg-gray-200 [@supports(selector(&::-moz-progress-bar))]:dark:bg-gray-700",bar:"[&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:ease-in-out [&::-moz-progress-bar]:rounded-full",color:"text-{color}-500 dark:text-{color}-400",background:"[&::-webkit-progress-value]:bg-current [&::-moz-progress-bar]:bg-current",indeterminate:{base:"indeterminate:relative",rounded:"indeterminate:after:rounded-full [&:indeterminate::-webkit-progress-value]:rounded-full [&:indeterminate::-moz-progress-bar]:rounded-full"}},steps:{base:"grid grid-cols-1",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base","2xl":"text-base"}},step:{base:"transition-all opacity-0 truncate row-start-1 col-start-1",align:"text-end",active:"opacity-100",first:"text-gray-500 dark:text-gray-400"},animation:{carousel:"bar-animation-carousel","carousel-inverse":"bar-animation-carousel-inverse",swing:"bar-animation-swing",elastic:"bar-animation-elastic"},default:{color:"primary",size:"md",animation:"carousel"}},Ge={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},M=re(U.ui.strategy,U.ui.textarea,Ne),We=oe({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},maxrows:{type:Number,default:0},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(M.size).includes(e)}},color:{type:String,default:()=>M.default.color,validator(e){return[...U.ui.colors,...Object.keys(M.color)].includes(e)}},variant:{type:String,default:()=>M.default.variant,validator(e){return[...Object.keys(M.variant),...Object.values(M.color).flatMap(t=>Object.keys(t))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:t}){const{ui:s,attrs:B}=le("textarea",P(e,"ui"),M,P(e,"class")),{emitFormBlur:d,emitFormInput:S,inputId:r,color:y,size:A,name:V}=be(e,M),n=E(ae({},e.modelModifiers,{trim:!1,lazy:!1,number:!1,nullify:!1})),i=E(null),c=()=>{var a;e.autofocus&&((a=i.value)==null||a.focus())},C=()=>{if(e.autoresize){if(!i.value)return;i.value.rows=e.rows;const a=i.value.style.overflow;i.value.style.overflow="hidden";const o=window.getComputedStyle(i.value),O=Number.parseInt(o.paddingTop),Z=Number.parseInt(o.paddingBottom),W=O+Z,_=Number.parseInt(o.lineHeight),{scrollHeight:ee}=i.value,N=(ee-W)/_;N>e.rows&&(i.value.rows=e.maxrows?Math.min(N,e.maxrows):N),i.value.style.overflow=a}},q=a=>{n.value.trim&&(a=a.trim()),n.value.number&&(a=Oe(a)),n.value.nullify&&(a||(a=null)),t("update:modelValue",a),S()},b=a=>{C(),n.value.lazy||q(a.target.value)},H=a=>{const o=a.target.value;t("change",o),n.value.lazy&&q(o),n.value.trim&&(a.target.value=o.trim())},w=a=>{t("blur",a),d()};ie(()=>{setTimeout(()=>{c()},e.autofocusDelay)}),he(()=>e.modelValue,()=>{qe(C)}),ie(()=>{setTimeout(()=>{c(),C()},100)});const z=v(()=>{var o,O;const a=((O=(o=s.value.color)==null?void 0:o[y.value])==null?void 0:O[e.variant])||s.value.variant[e.variant];return ke(x(s.value.base,s.value.form,s.value.rounded,s.value.placeholder,s.value.size[A.value],e.padded?s.value.padding[A.value]:"p-0",a==null?void 0:a.replaceAll("{color}",y.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:s,attrs:B,name:V,inputId:r,textarea:i,textareaClass:z,onInput:b,onChange:H,onBlur:w}}}),Ke=["id","value","name","rows","required","disabled","placeholder"];function Qe(e,t,s,B,d,S){return u(),g("div",{class:m(e.ui.wrapper)},[f("textarea",R({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:e.textareaClass},e.attrs,{onInput:t[0]||(t[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:t[1]||(t[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:t[2]||(t[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,Ke),j(e.$slots,"default")],2)}const Xe=Y(We,[["render",Qe]]),Ye=Ee,me=re(U.ui.strategy,U.ui.checkbox,Ge),Ze=oe({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>me.default.color,validator(e){return U.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:t}){const{ui:s,attrs:B}=le("checkbox",P(e,"ui"),me,P(e,"class")),{emitFormChange:d,color:S,name:r,inputId:y}=be(e),A=y.value??Ye(),V=v({get(){return e.modelValue},set(c){t("update:modelValue",c)}}),n=c=>{t("change",c.target.checked),d()},i=v(()=>ke(x(s.value.base,s.value.form,s.value.rounded,s.value.background,s.value.border,S.value&&s.value.ring.replaceAll("{color}",S.value),S.value&&s.value.color.replaceAll("{color}",S.value)),e.inputClass));return{ui:s,attrs:B,toggle:V,inputId:A,name:r,inputClass:i,onChange:n}}}),_e=["data-n-ids"],et=["id","name","required","value","disabled","indeterminate"],tt=["for"];function at(e,t,s,B,d,S){return u(),g("div",{class:m(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[f("div",{class:m(e.ui.container)},[Re(f("input",R({id:e.inputId,"onUpdate:modelValue":t[0]||(t[0]=r=>e.toggle=r),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:t[1]||(t[1]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,et),[[Ue,e.toggle]])],2),e.label||e.$slots.label?(u(),g("div",{key:0,class:m(e.ui.inner)},[f("label",{for:e.inputId,class:m(e.ui.label)},[j(e.$slots,"label",{label:e.label},()=>[L($(e.label),1)]),e.required?(u(),g("span",{key:0,class:m(e.ui.required)},"*",2)):D("",!0)],10,tt),e.help||e.$slots.help?(u(),g("p",{key:0,class:m(e.ui.help)},[j(e.$slots,"help",{help:e.help},()=>[L($(e.help),1)])],2)):D("",!0)],2)):D("",!0)],10,_e)}const we=Y(Ze,[["render",at]]),Q=re(U.ui.strategy,U.ui.progress,Je),nt=oe({inheritAttrs:!1,props:{value:{type:Number,default:null},max:{type:[Number,Array],default:100},indicator:{type:Boolean,default:!1},animation:{type:String,default:()=>Q.default.animation,validator(e){return Object.keys(Q.animation).includes(e)}},size:{type:String,default:()=>Q.default.size,validator(e){return Object.keys(Q.progress.size).includes(e)}},color:{type:String,default:()=>Q.default.color,validator(e){return U.ui.colors.includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=le("progress",P(e,"ui"),Q,P(e,"class")),B=v(()=>x(t.value.indicator.container.base,t.value.indicator.container.width,t.value.indicator.container.transition)),d=v(()=>x(t.value.indicator.align,t.value.indicator.width,t.value.indicator.color,t.value.indicator.size[e.size])),S=v(()=>{var z;const w=[t.value.progress.base,t.value.progress.width,t.value.progress.size[e.size],t.value.progress.rounded,t.value.progress.track,t.value.progress.bar,(z=t.value.progress.color)==null?void 0:z.replaceAll("{color}",e.color),t.value.progress.background,t.value.progress.indeterminate.base,t.value.progress.indeterminate.rounded];return C.value&&w.push(t.value.animation[e.animation]),x(...w)}),r=v(()=>{var w;return x(t.value.steps.base,(w=t.value.steps.color)==null?void 0:w.replaceAll("{color}",e.color),t.value.steps.size[e.size])}),y=v(()=>x(t.value.step.base,t.value.step.align)),A=v(()=>x(t.value.step.active)),V=v(()=>x(t.value.step.first));function n(w){return w===Number(e.value)}function i(w){return w===0}function c(w){w=Number(w);const z=[y.value];return i(w)&&z.push(V.value),n(w)&&z.push(A.value),z.join(" ")}const C=v(()=>e.value===void 0||e.value===null),q=v(()=>Array.isArray(e.max)),b=v(()=>C.value?null:Array.isArray(e.max)?e.max.length-1:Number(e.max)),H=v(()=>{if(!C.value)switch(!0){case e.value<0:return 0;case e.value>b.value:return 100;default:return e.value/b.value*100}});return{ui:t,attrs:s,indicatorContainerClass:B,indicatorClass:d,progressClass:S,stepsClass:r,stepClasses:c,isIndeterminate:C,isSteps:q,realMax:b,percent:H}}}),lt=["aria-valuemax","aria-valuenow"];function rt(e,t,s,B,d,S){return u(),g("div",{class:m(e.ui.wrapper),role:"progressbar"},[e.indicator||e.$slots.indicator?j(e.$slots,"indicator",xe(R({key:0},{percent:e.percent})),()=>[e.isSteps?D("",!0):(u(),g("div",{key:0,class:m(e.indicatorContainerClass),style:Fe({width:`${e.percent}%`})},[f("div",{class:m(e.indicatorClass)},$(Math.round(e.percent))+"% ",3)],6))],!0):D("",!0),f("progress",R({"aria-valuemax":e.realMax,"aria-valuenow":e.value,class:e.progressClass},{value:e.value,max:e.realMax,...e.attrs}),$(e.percent!==void 0?`${Math.round(e.percent)}%`:void 0),17,lt),e.isSteps?(u(),g("div",{key:1,class:m(e.stepsClass)},[(u(!0),g(X,null,te(e.max,(r,y)=>(u(),g("div",{key:y,class:m(e.stepClasses(y))},[j(e.$slots,`step-${y}`,R({ref_for:!0},{step:r}),()=>[L($(r),1)],!0)],2))),128))],2)):D("",!0)],2)}const Se=Y(nt,[["render",rt],["__scopeId","data-v-d013e55d"]]);function ot(e){return e?e[0].toUpperCase()+e.slice(1):""}const T=re(U.ui.strategy,U.ui.table,He);function st(e,t){return Ie(e,t)}function ge(e,t,s){return e===t?0:s==="asc"?e<t?-1:1:e>t?-1:1}function ye(e){return new Set(e.map(t=>JSON.stringify(t)))}function it(e){return t=>ne(t,e)}const ut=oe({components:{UIcon:ve,UButton:ue,UProgress:Se,UCheckbox:we},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>st},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>T.default.sortButton},sortAscIcon:{type:String,default:()=>T.default.sortAscIcon},sortDescIcon:{type:String,default:()=>T.default.sortDescIcon},expandButton:{type:Object,default:()=>T.default.expandButton},expand:{type:Object,default:()=>null},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>T.default.loadingState},emptyState:{type:Object,default:()=>T.default.emptyState},caption:{type:String,default:null},progress:{type:Object,default:()=>T.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},multipleExpand:{type:Boolean,default:!0},singleSelect:{type:Boolean,default:!1}},emits:["update:modelValue","update:sort","update:expand","select:all"],setup(e,{emit:t,attrs:s}){const{ui:B,attrs:d}=le("table",P(e,"ui"),T,P(e,"class")),S=v(()=>e.columns??Object.keys(e.rows[0]??{}).map(l=>({key:l,label:ot(l),sortable:!1,class:void 0,sort:ge}))),r=ce(e,"sort",t,{passive:!0,defaultValue:ae({},e.sort,{column:null,direction:"asc"})}),y=ce(e,"expand",t,{passive:!0,defaultValue:ae({},e.expand,{openedRows:[],row:null})}),A=E(null),V={column:r.value.column,direction:null},n=v(()=>{var I;if(!((I=r.value)!=null&&I.column)||e.sortMode==="manual")return e.rows;const{column:l,direction:p}=r.value;return e.rows.slice().sort((se,Ae)=>{var de;const Be=ne(se,l),Ve=ne(Ae,l);return(((de=S.value.find(ze=>ze.key===l))==null?void 0:de.sort)??ge)(Be,Ve,p)})}),i=v({get(){return e.modelValue},set(l){t("update:modelValue",l)}}),c=v(()=>e.rows.length),C=v(()=>{const l=ye(i.value),p=ye(e.rows);return Array.from(l).filter(I=>p.has(I)).length}),q=v(()=>!i.value||!e.rows?!1:C.value>0&&C.value<c.value),b=v(()=>C.value===c.value),H=v(()=>e.emptyState===null?null:{...B.value.default.emptyState,...e.emptyState}),w=v(()=>e.loadingState===null?null:{...B.value.default.loadingState,...e.loadingState});function z(l,p){if(typeof e.by=="string"){const I=it(e.by);return I(l)===I(p)}return e.by(l,p)}function a(l){return e.modelValue?i.value.some(p=>z(pe(p),pe(l))):!1}function o(l){if(r.value.column===l.key){const p=!l.direction||l.direction==="asc"?"desc":"asc";r.value.direction===p?r.value=ae({},V,{column:null,direction:"asc"}):r.value={column:r.value.column,direction:r.value.direction==="asc"?"desc":"asc"}}else r.value={column:l.key,direction:l.direction||"asc"}}function O(l){const p=window.getSelection();p&&p.toString().length>0||s.onSelect&&s.onSelect(l)}function Z(l,p){s.onContextmenu&&s.onContextmenu(l,p)}function W(){const l=[...i.value];e.rows.forEach(p=>{a(p)||l.push(p)}),i.value=l}function _(l){l?W():i.value=[],t("select:all",l)}function ee(l,p){if(l)i.value=e.singleSelect?[p]:[...i.value,p];else{const I=i.value.findIndex(se=>z(se,p));i.value.splice(I,1)}}function N(l,p,I=""){return ne(l,p,I)}function k(l){var p;return(p=y.value)!=null&&p.openedRows?y.value.openedRows.some(I=>z(I,l)):!1}function J(l,p){return e.columns?l===0&&!e.columns.find(I=>I.key===p):l===0}function Ce(l){y.value={openedRows:k(l)?y.value.openedRows.filter(p=>!z(p,l)):e.multipleExpand?[...y.value.openedRows,l]:[l],row:l}}function $e(l){if(l.sortable){if(r.value.column!==l.key)return"none";if(r.value.direction==="asc")return"ascending";if(r.value.direction==="desc")return"descending"}}return he(n,()=>{A.value=new Date},{deep:!0}),{ui:B,attrs:d,sort:r,columns:S,rows:n,selected:i,indeterminate:q,emptyState:H,loadingState:w,isAllRowChecked:b,onChangeCheckbox:ee,isSelected:a,onSort:o,onSelect:O,onContextmenu:Z,onChange:_,getRowData:N,toggleOpened:Ce,getAriaSort:$e,isExpanded:k,shouldRenderColumnInFirstPlace:J,retriggerSlot:A}}}),dt=["aria-sort"],ct={key:1},ft={key:0},pt={key:0},mt=["colspan"],gt={key:1},yt=["colspan"],bt=["onClick","onContextmenu"],vt={key:0},ht={colspan:"100%"};function kt(e,t,s,B,d,S){const r=we,y=ue,A=Se,V=ve;return u(),g("div",R({class:e.ui.wrapper},e.attrs),[f("table",{class:m([e.ui.base,e.ui.divide])},[e.$slots.caption||e.caption?j(e.$slots,"caption",{key:0},()=>[f("caption",{class:m(e.ui.caption)},$(e.caption),3)]):D("",!0),f("thead",{class:m(e.ui.thead)},[f("tr",{class:m(e.ui.tr.base)},[e.expand?(u(),g("th",{key:0,scope:"col",class:m(e.ui.tr.base)},t[0]||(t[0]=[f("span",{class:"sr-only"},"Expand",-1)]),2)):D("",!0),(u(!0),g(X,null,te(e.columns,(n,i)=>(u(),g("th",{key:i,scope:"col",class:m([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,n.key==="select"&&e.ui.checkbox.padding,n.class]),"aria-sort":e.getAriaSort(n)},[!e.singleSelect&&e.modelValue&&(n.key==="select"||e.shouldRenderColumnInFirstPlace(i,"select"))?j(e.$slots,"select-header",{key:0,indeterminate:e.indeterminate,checked:e.isAllRowChecked,change:e.onChange},()=>[G(r,R({"model-value":e.isAllRowChecked,indeterminate:e.indeterminate,ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select all",onChange:e.onChange}),null,16,["model-value","indeterminate","onChange"])]):j(e.$slots,`${n.key}-header`,{key:1,column:n,sort:e.sort,onSort:e.onSort},()=>[n.sortable?(u(),F(y,R({key:0,ref_for:!0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==n.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:n[e.columnAttribute],onClick:c=>e.onSort(n)}),null,16,["icon","label","onClick"])):(u(),g("span",ct,$(n[e.columnAttribute]),1))])],10,dt))),128))],2),e.loading&&e.progress?(u(),g("tr",ft,[f("td",{colspan:0,class:m(e.ui.progress.wrapper)},[G(A,R({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):D("",!0)],2),f("tbody",{class:m(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(u(),g("tr",pt,[f("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[j(e.$slots,"loading-state",{},()=>[f("div",{class:m(e.ui.loadingState.wrapper)},[e.loadingState.icon?(u(),F(V,{key:0,name:e.loadingState.icon,class:m(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):D("",!0),f("p",{class:m(e.ui.loadingState.label)},$(e.loadingState.label),3)],2)])],8,mt)])):e.emptyState&&!e.rows.length?(u(),g("tr",gt,[f("td",{colspan:e.columns.length+(e.modelValue?1:0)+(e.expand?1:0)},[j(e.$slots,"empty-state",{},()=>[f("div",{class:m(e.ui.emptyState.wrapper)},[e.emptyState.icon?(u(),F(V,{key:0,name:e.emptyState.icon,class:m(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):D("",!0),f("p",{class:m(e.ui.emptyState.label)},$(e.emptyState.label),3)],2)])],8,yt)])):(u(!0),g(X,{key:2},te(e.rows,(n,i)=>(u(),g(X,{key:i},[f("tr",{class:m([e.ui.tr.base,e.isSelected(n)&&e.ui.tr.selected,e.isExpanded(n)&&e.ui.tr.expanded,e.$attrs.onSelect&&e.ui.tr.active,n==null?void 0:n.class]),onClick:()=>e.onSelect(n),onContextmenu:c=>e.onContextmenu(c,n)},[e.expand?(u(),g("td",{key:0,class:m([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size])},[e.$slots["expand-action"]?j(e.$slots,"expand-action",{key:0,row:n,isExpanded:e.isExpanded(n),toggle:()=>e.toggleOpened(n)}):(u(),F(y,R({key:1,disabled:n.disabledExpand,ref_for:!0},{...e.ui.default.expandButton||{},...e.expandButton},{ui:{icon:{base:[e.ui.expand.icon,e.isExpanded(n)&&"rotate-180"].join(" ")}},onClickCapture:fe(c=>e.toggleOpened(n),["stop"])}),null,16,["disabled","ui","onClickCapture"]))],2)):D("",!0),(u(!0),g(X,null,te(e.columns,(c,C)=>{var q;return u(),g("td",{key:C,class:m([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,c==null?void 0:c.rowClass,(q=n[c.key])==null?void 0:q.class,c.key==="select"&&e.ui.checkbox.padding])},[e.modelValue&&(c.key==="select"||e.shouldRenderColumnInFirstPlace(C,"select"))?j(e.$slots,"select-data",{key:0,checked:e.isSelected(n),change:b=>e.onChangeCheckbox(b,n)},()=>[G(r,R({"model-value":e.isSelected(n),ref_for:!0},e.ui.default.checkbox,{"aria-label":"Select row",onChange:b=>e.onChangeCheckbox(b,n),onClickCapture:fe(()=>e.onSelect(n),["stop"])}),null,16,["model-value","onChange","onClickCapture"])]):j(e.$slots,`${c.key}-data`,{key:e.retriggerSlot,column:c,row:n,index:i,getRowData:b=>e.getRowData(n,c.key,b)},()=>[L($(e.getRowData(n,c.key)),1)])],2)}),128))],42,bt),e.isExpanded(n)?(u(),g("tr",vt,[f("td",ht,[j(e.$slots,"expand",{row:n,index:i})])])):D("",!0)],64))),128))],2)],2)],16)}const wt=Y(ut,[["render",kt]]),St={class:"my-10"},Ct={class:"grid grid-cols-3 gap-6"},$t={class:"col-span-1 max-w-lg sticky-form"},At={class:"text-xl font-semibold mb-4"},Bt=["for"],Vt={class:"mb-4"},zt={key:0,class:"text-red-500 mb-4"},Nt={class:"col-span-2"},It={class:"text-sm text-gray-500 mb-2"},Dt={__name:"CreateDrug",setup(e){const t=new Te("https://mcq-db.dakakean.com"),s=E([]),B=E([{label:"id"},{label:"Icon",key:"icon"},{label:"Name",key:"name"},{label:"Brand",key:"brand"},{label:"Frequency",key:"frequency"},{label:"Dose",key:"dose"},{label:"When",key:"when"},{label:"Duration",key:"duration"},{label:"Note",key:"note"}]),d=E({icon:"",id:null,name:null,fdaName:null,brand:null,frequency:null,dose:null,when:null,duration:null,note:null}),S=E([]),r=E(!1),y=E(!1),A=E(""),V=E(null),{drugList:n}=Le(),i=()=>{d.value={icon:null,id:null,brand:null,name:null,fdaName:null,frequency:null,dose:null,when:null,duration:null,note:null,hidden:null},r.value=!1,s.value=[]},c=a=>a?a.split(`
`).filter(o=>o.trim()!==""):"",C=async()=>{try{const a=await t.collection("drugs").getFullList({sort:"name"});n.value=a,S.value=a.map(o=>({id:o.id||"",name:o.name||"",fdaName:o.fdaName||"",icon:o.icon||"",brand:o.brand||"",frequency:o.frequency||"",dose:o.dose||"",when:o.when||"",duration:o.duration||"",note:o.note||"",hidden:o.hidden||""}))}catch(a){console.error("Error fetching drugs:",a)}},q=async()=>{y.value=!0,A.value="";const a={icon:d.value.icon,name:d.value.name,fdaName:d.value.fdaName,brand:c(d.value.brand),frequency:c(d.value.frequency),dose:c(d.value.dose),when:c(d.value.when),duration:c(d.value.duration),note:c(d.value.note),hidden:c(d.value.hidden)};try{r.value?(await t.collection("drugs").update(d.value.id,a),console.log("Drug updated successfully.")):(await t.collection("drugs").create(a),console.log("Drug created successfully.")),i(),C()}catch(o){console.error("Error saving drug:",o),A.value=o.message||"Failed to save drug."}finally{y.value=!1}},b=a=>a?Array.isArray(a)?a.map(o=>o.trim()).join(`
`):typeof a=="string"?a.includes(",")?a.split(",").map(o=>o.trim()).join(`
`):a.trim():String(a):"",H=a=>{console.log(a),s.value.length===1?(r.value=!1,i()):(r.value=!0,d.value={id:a.id||"",icon:a.icon||"",name:b(a.name),fdaName:b(a.fdaName),brand:b(a.brand),frequency:b(a.frequency),dose:b(a.dose),when:b(a.when),duration:b(a.duration),note:b(a.note),hidden:b(a.hidden)})},w=async()=>{try{await t.collection("drugs").delete(d.value.id),C(),i()}catch(a){console.error("Error deleting drug:",a)}},z=async()=>{if(d.value.fdaName){const a=await Pe(d.value.fdaName);V.value=a}};return ie(C),(a,o)=>{const O=ue,Z=Xe,W=De,_=wt,ee=je;return u(),F(ee,{class:"my-10"},{default:K(()=>[f("div",St,[G(O,{to:"/"},{default:K(()=>o[1]||(o[1]=[L("back")])),_:1})]),f("div",Ct,[f("div",$t,[f("h1",At,$(h(r)?"Edit Drug":"Add New Drug"),1),(u(),g(X,null,te({icon:"Icon",name:"Name",fdaName:"FDA Name",brand:"Brand",frequency:"Frequency",dose:"Dose",when:"When to Take",duration:"Duration",note:"Note",hidden:"Hidden Note"},(N,k)=>f("div",{key:k,class:"form-group mb-4"},[f("label",{for:k,class:"block mb-2 text-sm font-medium text-gray-700"},$(N),9,Bt),k!=="name"&&k!=="icon"&&k!=="fdaName"?(u(),F(Z,{key:0,required:!1,autoresize:"",modelValue:h(d)[k],"onUpdate:modelValue":J=>h(d)[k]=J,id:k,class:"textarea",placeholder:`Enter ${N.toLowerCase()} (one per line)`},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])):k!=="name"&&k!=="icon"?(u(),F(W,{key:1,modelValue:h(d)[k],"onUpdate:modelValue":J=>h(d)[k]=J,id:k,type:"text",class:"input",placeholder:`Enter ${N.toLowerCase()}`,required:""},null,8,["modelValue","onUpdate:modelValue","id","placeholder"])):(u(),F(W,{key:2,modelValue:h(d)[k],"onUpdate:modelValue":J=>h(d)[k]=J,id:k,type:"text",class:"input",placeholder:`Enter ${N.toLowerCase()}`,required:""},null,8,["modelValue","onUpdate:modelValue","id","placeholder"]))])),64)),f("div",Vt,[G(O,{class:"mb-2",onClick:z},{default:K(()=>o[2]||(o[2]=[L("Check FDA Name")])),_:1}),f("p",{class:m(h(V)?"text-green-500":"text-red-500")},$(h(V)?"Name Exist":h(V)===null?"":"Name Does't Exist"),3)]),h(A)?(u(),g("div",zt,$(h(A)),1)):D("",!0),G(O,{type:"submit",class:"bg-primary mr-4",disabled:h(y),onClick:q},{default:K(()=>[L($(h(y)?"Submitting...":h(r)?"Update Drug":"Create Drug"),1)]),_:1},8,["disabled"]),h(r)?(u(),F(O,{key:1,type:"submit",class:"bg-red-700",disabled:h(y),onClick:w},{default:K(()=>o[3]||(o[3]=[L(" Delete Drug ")])),_:1},8,["disabled"])):D("",!0)]),f("div",Nt,[f("p",It,$(h(S).length)+" drugs",1),G(_,{modelValue:h(s),"onUpdate:modelValue":o[0]||(o[0]=N=>Me(s)?s.value=N:null),rows:h(S),columns:h(B),class:"w-full border rounded","single-select":!0,onSelect:H},{"name-data":K(({row:N})=>[f("span",{class:m([h(s).find(k=>k.id===N.id)&&"text-primary-500 dark:text-primary-400"])},$(N.name),3)]),_:1},8,["modelValue","rows","columns"])])])]),_:1})}}},jt=Y(Dt,[["__scopeId","data-v-3e660c0a"]]),qt={};function Ot(e,t){const s=jt;return u(),F(s)}const Tt=Y(qt,[["render",Ot]]);export{Tt as default};
