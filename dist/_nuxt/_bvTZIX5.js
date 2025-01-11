import{_ as oe,u as ne,b as te,d as de,e as ie}from"./BVOkD-Vo.js";import{_ as se,a as pe,f as me,b as ce,c as ve}from"./C8oXW-Vo.js";import{m as re,e as P,_ as Q,f as ue,g as K,k as D,l as be,p as L,o,c as d,a,v as g,F as q,s as C,t as w,H as m,q as z,B as F,M as fe,r as b,y as ye,N as he,D as N,d as j,O as ge,w as A,b as s,E as Ve,P as ke,K as $,L as H}from"./DoL-yas5.js";import"./D-KH8rDI.js";import"./UMm_ll2C.js";const $e={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},we={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},I=re(P.ui.strategy,P.ui.divider,we),Ue=ue({components:{UIcon:oe,UAvatar:se},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>I.default.size,validator(e){return Object.keys(I.border.size.horizontal).includes(e)||Object.keys(I.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:()=>I.default.type,validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:f}=ne("divider",K(e,"ui"),I),n=D(()=>be(L(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),c=D(()=>L(t.value.container.base,t.value.container[e.orientation])),i=D(()=>L(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:f,wrapperClass:n,containerClass:c,borderClass:i}}});function ze(e,t,f,n,c,i){const V=oe,k=se;return o(),d("div",z({class:e.wrapperClass},e.attrs),[a("div",{class:g(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(o(),d(q,{key:0},[a("div",{class:g(e.containerClass)},[C(e.$slots,"default",{},()=>[e.label?(o(),d("span",{key:0,class:g(e.ui.label)},w(e.label),3)):e.icon?(o(),m(V,{key:1,name:e.icon,class:g(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(o(),m(k,z({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):F("",!0)])],2),a("div",{class:g(e.borderClass)},null,2)],64)):F("",!0)],16)}const De=Q(Ue,[["render",ze]]),J=re(P.ui.strategy,P.ui.formGroup,$e),_e=ue({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(J.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:t,attrs:f}=ne("formGroup",K(e,"ui"),J,K(e,"class")),n=fe("form-errors",null),c=D(()=>{var k,y;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(y=(k=n==null?void 0:n.value)==null?void 0:k.find(p=>p.path===e.name))==null?void 0:y.message}),i=D(()=>t.value.size[e.size??J.default.size]),V=b(ye());return he("form-group",{error:c,inputId:V,name:D(()=>e.name),size:D(()=>e.size),eagerValidation:D(()=>e.eagerValidation)}),{ui:t,attrs:f,inputId:V,size:i,error:c}}}),Ce=["for"];function qe(e,t,f,n,c,i){return o(),d("div",z({class:e.ui.wrapper},e.attrs),[a("div",{class:g(e.ui.inner)},[e.label||e.$slots.label?(o(),d("div",{key:0,class:g([e.ui.label.wrapper,e.size])},[a("label",{for:e.inputId,class:g([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?C(e.$slots,"label",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(o(),d(q,{key:1},[j(w(e.label),1)],64))],10,Ce),e.hint||e.$slots.hint?(o(),d("span",{key:0,class:g([e.ui.hint])},[e.$slots.hint?C(e.$slots,"hint",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(o(),d(q,{key:1},[j(w(e.hint),1)],64))],2)):F("",!0)],2)):F("",!0),e.description||e.$slots.description?(o(),d("p",{key:1,class:g([e.ui.description,e.size])},[e.$slots.description?C(e.$slots,"description",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(o(),d(q,{key:1},[j(w(e.description),1)],64))],2)):F("",!0)],2),a("div",{class:g([e.label?e.ui.container:""])},[C(e.$slots,"default",N(ge({error:e.error}))),typeof e.error=="string"&&e.error?(o(),d("p",{key:0,class:g([e.ui.error,e.size])},[e.$slots.error?C(e.$slots,"error",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(o(),d(q,{key:1},[j(w(e.error),1)],64))],2)):e.help||e.$slots.help?(o(),d("p",{key:1,class:g([e.ui.help,e.size])},[e.$slots.help?C(e.$slots,"help",N(z({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(o(),d(q,{key:1},[j(w(e.help),1)],64))],2)):F("",!0)],2)],16)}const Se=Q(_e,[["render",qe]]),Be={class:"flex mb-4 w-full justify-between"},Ne={class:"ml-2"},je={class:"ml-2"},Fe={class:"ml-2"},Ae={class:"ml-2"},Ie={class:"ml-2"},Oe={class:"mb-4"},Me={class:"flex mb-4 w-full justify-between"},Pe={class:"ml-2"},Ge={class:"ml-2"},Te={class:"ml-2"},We={class:"ml-2"},Re={class:"ml-2"},Ee={class:"mb-4"},Le={__name:"DrugForm",emits:["add-drug","update-drug"],setup(e,{emit:t}){const f=t,n=b(null),c=b(null),i=b(null),V=b(null),k=b(null),y=b(null),p=b(null),U=b(null),S=b([]),B=b(!1),O=()=>{const h={name:n.value.name,brand:i.value,dose:V.value,when:k.value,frequency:y.value,duration:p.value,notes:U.value,options:{...n.value}};S.value.push(h),f("add-drug",h),R()},G=h=>{const r=S.value[h];f("update-drug",r)},T=h=>{S.value.splice(h,1)},W=async h=>{n.value=h,i.value=null,V.value=null,k.value=null,y.value=null,p.value=null,U.value=null},R=()=>{n.value=null,c.value=null,i.value=null,V.value=null,k.value=null,y.value=null,p.value=null,U.value=null};async function _(h){B.value=!0;try{const r=await $fetch(`https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name~"${h}"&expand=doses,frequency`);return B.value=!1,r.items}catch(r){console.error(r),B.value=!1}}return(h,r)=>{const u=pe,E=te,X=Se;return o(),m(X,{label:"New Drug"},{default:A(()=>[a("div",Be,[a("div",null,[s(u,{search:_,loading:B.value,placeholder:"Search for a drug",trailing:"",by:"id",onChange:W,modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=l=>c.value=l),"option-attribute":"name"},null,8,["loading","modelValue"])]),a("div",Ne,[n.value?(o(),m(u,{key:0,nullable:!0,placeholder:"Brand",modelValue:i.value,"onUpdate:modelValue":r[1]||(r[1]=l=>i.value=l),options:n.value.brand},null,8,["modelValue","options"])):(o(),m(u,{key:1,placeholder:"Brand",disabled:""}))]),a("div",je,[n.value?(o(),m(u,{key:0,nullable:!0,placeholder:"Dose",modelValue:V.value,"onUpdate:modelValue":r[2]||(r[2]=l=>V.value=l),options:n.value.dose},null,8,["modelValue","options"])):(o(),m(u,{key:1,placeholder:"Dose",disabled:""}))]),a("div",Fe,[n.value?(o(),m(u,{key:0,nullable:!0,placeholder:"When",modelValue:k.value,"onUpdate:modelValue":r[3]||(r[3]=l=>k.value=l),options:n.value.when},null,8,["modelValue","options"])):(o(),m(u,{key:1,placeholder:"When",disabled:""}))]),a("div",Ae,[n.value?(o(),m(u,{key:0,nullable:!0,placeholder:"Frequency",modelValue:y.value,"onUpdate:modelValue":r[4]||(r[4]=l=>y.value=l),options:n.value.frequency},null,8,["modelValue","options"])):(o(),m(u,{key:1,placeholder:"Frequency",disabled:""}))]),a("div",Ie,[n.value?(o(),m(u,{key:0,nullable:!0,placeholder:"Duration",modelValue:p.value,"onUpdate:modelValue":r[5]||(r[5]=l=>p.value=l),options:n.value.duration},null,8,["modelValue","options"])):(o(),m(u,{key:1,placeholder:"Duration",disabled:""}))])]),a("div",Oe,[n.value?(o(),m(u,{key:0,nullable:!0,placeholder:"Note",modelValue:U.value,"onUpdate:modelValue":r[6]||(r[6]=l=>U.value=l),options:n.value.note},null,8,["modelValue","options"])):(o(),m(u,{key:1,placeholder:"Note",disabled:""}))]),a("div",null,[s(E,{class:"w-auto",label:"Add",color:"primary",onClick:O})]),(o(!0),d(q,null,Ve(S.value,(l,M)=>(o(),d("div",{key:M,class:"mt-6"},[s(X,{label:`Drug ${M+1}`},{default:A(()=>{var Y,Z,x,ee,le,ae;return[a("div",Me,[a("div",null,[s(u,{placeholder:"Name",modelValue:l.name,"onUpdate:modelValue":v=>l.name=v,disabled:!0},null,8,["modelValue","onUpdate:modelValue"])]),a("div",Pe,[s(u,{placeholder:"Brand",modelValue:l.brand,"onUpdate:modelValue":v=>l.brand=v,options:((Y=l.options)==null?void 0:Y.brand)||[]},null,8,["modelValue","onUpdate:modelValue","options"])]),a("div",Ge,[s(u,{placeholder:"Dose",modelValue:l.dose,"onUpdate:modelValue":v=>l.dose=v,options:((Z=l.options)==null?void 0:Z.dose)||[]},null,8,["modelValue","onUpdate:modelValue","options"])]),a("div",Te,[s(u,{placeholder:"When",modelValue:l.when,"onUpdate:modelValue":v=>l.when=v,options:((x=l.options)==null?void 0:x.when)||[]},null,8,["modelValue","onUpdate:modelValue","options"])]),a("div",We,[s(u,{placeholder:"Frequency",modelValue:l.frequency,"onUpdate:modelValue":v=>l.frequency=v,options:((ee=l.options)==null?void 0:ee.frequency)||[]},null,8,["modelValue","onUpdate:modelValue","options"])]),a("div",Re,[s(u,{placeholder:"Duration",modelValue:l.duration,"onUpdate:modelValue":v=>l.duration=v,options:((le=l.options)==null?void 0:le.duration)||[]},null,8,["modelValue","onUpdate:modelValue","options"])])]),a("div",Ee,[s(u,{placeholder:"Note",modelValue:l.notes,"onUpdate:modelValue":v=>l.notes=v,options:((ae=l.options)==null?void 0:ae.note)||[]},null,8,["modelValue","onUpdate:modelValue","options"])]),a("div",null,[s(E,{class:"w-auto",label:"Update",color:"primary",onClick:v=>G(M)},null,8,["onClick"]),s(E,{class:"w-auto",label:"Remove",color:"danger",onClick:v=>T(M)},null,8,["onClick"])])]}),_:2},1032,["label"])]))),128))]),_:1})}}},He={class:"print my-10"},Je={class:"flex flex-row justify-between gap-4 mb-10 text-right",dir:"rtl"},Ke={class:"print"},Qe={class:"flex flex-row gap-4 mb-10"},Xe={__name:"DrugManagement",setup(e){const t=b(new Date),f=b([]),n=["#","Name","Brand","Dose","When","Frequency","Duration"],c=b(""),i=b(""),V=y=>{console.log(y),f.value.push(y)},k=y=>{f.value.splice(y,1)};return(y,p)=>{const U=te,S=ke("DrugTable"),B=De,O=de,G=ce,T=ve,W=Le,R=ie;return o(),m(R,null,{default:A(()=>[a("div",He,[s(U,{to:"/create"},{default:A(()=>p[3]||(p[3]=[j("Create or Edit Drugs")])),_:1})]),a("div",Je,[a("div",null,[a("p",null,"الاسم : "+w($(c)),1),a("p",null,"العمر: "+w($(i)),1)]),a("div",null,[a("p",null,"التاريخ: "+w(new Intl.DateTimeFormat("en-GB").format($(t))),1)])]),s(S,{drugs:$(f),header:n,onDeleteDrug:k},null,8,["drugs"]),a("div",Ke,[s(B,{class:"my-10"}),a("div",Qe,[s(O,{modelValue:$(c),"onUpdate:modelValue":p[0]||(p[0]=_=>H(c)?c.value=_:null),placeholder:"Patient Name"},null,8,["modelValue"]),s(O,{modelValue:$(i),"onUpdate:modelValue":p[1]||(p[1]=_=>H(i)?i.value=_:null),placeholder:"Patient Age"},null,8,["modelValue"]),s(T,{popper:{placement:"bottom-start"}},{panel:A(({close:_})=>[s(G,{modelValue:$(t),"onUpdate:modelValue":p[2]||(p[2]=h=>H(t)?t.value=h:null),"is-required":"",onClose:_},null,8,["modelValue","onClose"])]),default:A(()=>[s(U,{icon:"i-heroicons-calendar-days-20-solid",label:$(me)($(t),"d MMM, yyy")},null,8,["label"])]),_:1})]),s(W,{onAddDrug:V})])]),_:1})}}},Ye={};function Ze(e,t){const f=Xe;return o(),d("div",null,[s(f)])}const nl=Q(Ye,[["render",Ze]]);export{nl as default};
