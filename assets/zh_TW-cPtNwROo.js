import{u as tt,x as ye,y as j,z as nt,A as Me,B as Et,C as Ft,D as It,E as we,G as C,H as Oe,I as Jt,J as A,K as ue,L as Be,M as ce,N as Qt,O as Xt,P as ke,Q as en}from"./index-9YbvPDwl.js";/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function z(e){return typeof e=="function"}function Pt(e){return e==null}const pe=e=>e!==null&&!!e&&typeof e=="object"&&!Array.isArray(e);function rt(e){return Number(e)>=0}function tn(e){const t=parseFloat(e);return isNaN(t)?e:t}function nn(e){return typeof e=="object"&&e!==null}function rn(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function ft(e){if(!nn(e)||rn(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Ee(e,t){return Object.keys(t).forEach(n=>{if(ft(t[n])&&ft(e[n])){e[n]||(e[n]={}),Ee(e[n],t[n]);return}e[n]=t[n]}),e}function Ae(e){const t=e.split(".");if(!t.length)return"";let n=String(t[0]);for(let r=1;r<t.length;r++){if(rt(t[r])){n+=`[${t[r]}]`;continue}n+=`.${t[r]}`}return n}const Ct={};function lr(e,t){an(e,t),Ct[e]=t}function ln(e){return Ct[e]}function an(e,t){if(!z(t))throw new Error(`Extension Error: The validator '${e}' must be a function.`)}function vt(e,t,n){typeof n.value=="object"&&(n.value=F(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||t==="__proto__"?Object.defineProperty(e,t,n):e[t]=n.value}function F(e){if(typeof e!="object")return e;var t=0,n,r,i,u=Object.prototype.toString.call(e);if(u==="[object Object]"?i=Object.create(e.__proto__||null):u==="[object Array]"?i=Array(e.length):u==="[object Set]"?(i=new Set,e.forEach(function(s){i.add(F(s))})):u==="[object Map]"?(i=new Map,e.forEach(function(s,c){i.set(F(c),F(s))})):u==="[object Date]"?i=new Date(+e):u==="[object RegExp]"?i=new RegExp(e.source,e.flags):u==="[object DataView]"?i=new e.constructor(F(e.buffer)):u==="[object ArrayBuffer]"?i=e.slice(0):u.slice(-6)==="Array]"&&(i=new e.constructor(e)),i){for(r=Object.getOwnPropertySymbols(e);t<r.length;t++)vt(i,r[t],Object.getOwnPropertyDescriptor(e,r[t]));for(t=0,r=Object.getOwnPropertyNames(e);t<r.length;t++)Object.hasOwnProperty.call(i,n=r[t])&&i[n]===e[n]||vt(i,n,Object.getOwnPropertyDescriptor(e,n))}return i||e}const Ue=Symbol("vee-validate-form"),un=Symbol("vee-validate-field-instance"),Ne=Symbol("Default empty value"),on=typeof window<"u";function Ye(e){return z(e)&&!!e.__locatorRef}function oe(e){return!!e&&z(e.parse)&&e.__type==="VVTypedSchema"}function Te(e){return!!e&&z(e.validate)}function Fe(e){return e==="checkbox"||e==="radio"}function sn(e){return pe(e)||Array.isArray(e)}function dn(e){return Array.isArray(e)?e.length===0:pe(e)&&Object.keys(e).length===0}function $e(e){return/^\[.+\]$/i.test(e)}function cn(e){return Mt(e)&&e.multiple}function Mt(e){return e.tagName==="SELECT"}function fn(e,t){const n=![!1,null,void 0,0].includes(t.multiple)&&!Number.isNaN(t.multiple);return e==="select"&&"multiple"in t&&n}function vn(e,t){return!fn(e,t)&&t.type!=="file"&&!Fe(t.type)}function wt(e){return it(e)&&e.target&&"submit"in e.target}function it(e){return e?!!(typeof Event<"u"&&z(Event)&&e instanceof Event||e&&e.srcElement):!1}function mt(e,t){return t in e&&e[t]!==Ne}function H(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!H(e[r],t[r]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;for(r of e.entries())if(!H(r[1],t.get(r[0])))return!1;return!0}if(ht(e)&&ht(t))return!(e.size!==t.size||e.name!==t.name||e.lastModified!==t.lastModified||e.type!==t.type);if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(r of e.entries())if(!t.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();for(i=Object.keys(e),n=i.length,r=n;r--!==0;){var u=i[r];if(!H(e[u],t[u]))return!1}return!0}return e!==e&&t!==t}function ht(e){return on?e instanceof File:!1}function lt(e){return $e(e)?e.replace(/\[|\]/gi,""):e}function Y(e,t,n){return e?$e(t)?e[lt(t)]:(t||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,u)=>sn(i)&&u in i?i[u]:n,e):n}function he(e,t,n){if($e(t)){e[lt(t)]=n;return}const r=t.split(/\.|\[(\d+)\]/).filter(Boolean);let i=e;for(let u=0;u<r.length;u++){if(u===r.length-1){i[r[u]]=n;return}(!(r[u]in i)||Pt(i[r[u]]))&&(i[r[u]]=rt(r[u+1])?[]:{}),i=i[r[u]]}}function Ke(e,t){if(Array.isArray(e)&&rt(t)){e.splice(Number(t),1);return}pe(e)&&delete e[t]}function gt(e,t){if($e(t)){delete e[lt(t)];return}const n=t.split(/\.|\[(\d+)\]/).filter(Boolean);let r=e;for(let u=0;u<n.length;u++){if(u===n.length-1){Ke(r,n[u]);break}if(!(n[u]in r)||Pt(r[n[u]]))break;r=r[n[u]]}const i=n.map((u,s)=>Y(e,n.slice(0,s).join(".")));for(let u=i.length-1;u>=0;u--)if(dn(i[u])){if(u===0){Ke(e,n[0]);continue}Ke(i[u-1],n[u-1])}}function ie(e){return Object.keys(e)}function Bt(e,t=void 0){const n=ke();return(n==null?void 0:n.provides[e])||Et(e,t)}function yt(e,t,n){if(Array.isArray(e)){const r=[...e],i=r.findIndex(u=>H(u,t));return i>=0?r.splice(i,1):r.push(t),r}return H(e,t)?n:t}function bt(e,t=0){let n=null,r=[];return function(...i){return n&&clearTimeout(n),n=setTimeout(()=>{const u=e(...i);r.forEach(s=>s(u)),r=[]},t),new Promise(u=>r.push(u))}}function mn(e,t){return pe(t)&&t.number?tn(e):e}function Je(e,t){let n;return async function(...i){const u=e(...i);n=u;const s=await u;return u!==n?s:(n=void 0,t(s,i))}}function Qe(e){return Array.isArray(e)?e:e?[e]:[]}function Pe(e,t){const n={};for(const r in e)t.includes(r)||(n[r]=e[r]);return n}function hn(e){let t=null,n=[];return function(...r){const i=ce(()=>{if(t!==i)return;const u=e(...r);n.forEach(s=>s(u)),n=[],t=null});return t=i,new Promise(u=>n.push(u))}}function at(e,t,n){return t.slots.default?typeof e=="string"||!e?t.slots.default(n()):{default:()=>{var r,i;return(i=(r=t.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:t.slots.default}function Ze(e){if(Nt(e))return e._value}function Nt(e){return"_value"in e}function gn(e){return e.type==="number"||e.type==="range"?Number.isNaN(e.valueAsNumber)?e.value:e.valueAsNumber:e.value}function Re(e){if(!it(e))return e;const t=e.target;if(Fe(t.type)&&Nt(t))return Ze(t);if(t.type==="file"&&t.files){const n=Array.from(t.files);return t.multiple?n:n[0]}if(cn(t))return Array.from(t.options).filter(n=>n.selected&&!n.disabled).map(Ze);if(Mt(t)){const n=Array.from(t.options).find(r=>r.selected);return n?Ze(n):t.value}return gn(t)}function Tt(e){const t={};return Object.defineProperty(t,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),e?pe(e)&&e._$$isNormalized?e:pe(e)?Object.keys(e).reduce((n,r)=>{const i=yn(e[r]);return e[r]!==!1&&(n[r]=Ot(i)),n},t):typeof e!="string"?t:e.split("|").reduce((n,r)=>{const i=bn(r);return i.name&&(n[i.name]=Ot(i.params)),n},t):t}function yn(e){return e===!0?[]:Array.isArray(e)||pe(e)?e:[e]}function Ot(e){const t=n=>typeof n=="string"&&n[0]==="@"?On(n.slice(1)):n;return Array.isArray(e)?e.map(t):e instanceof RegExp?[e]:Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})}const bn=e=>{let t=[];const n=e.split(":")[0];return e.includes(":")&&(t=e.split(":").slice(1).join(":").split(",")),{name:n,params:t}};function On(e){const t=n=>Y(n,e)||n[e];return t.__locatorRef=e,t}function pn(e){return Array.isArray(e)?e.filter(Ye):ie(e).filter(t=>Ye(e[t])).map(t=>e[t])}const Vn={generateMessage:({field:e})=>`${e} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Xe=Object.assign({},Vn);const be=()=>Xe,_n=e=>{Xe=Object.assign(Object.assign({},Xe),e)},ar=_n;async function Rt(e,t,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:t,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},s=(await Sn(i,e)).errors;return{errors:s,valid:!s.length}}async function Sn(e,t){if(oe(e.rules)||Te(e.rules))return jn(t,e.rules);if(z(e.rules)||Array.isArray(e.rules)){const s={field:e.label||e.name,name:e.name,label:e.label,form:e.formData,value:t},c=Array.isArray(e.rules)?e.rules:[e.rules],d=c.length,f=[];for(let V=0;V<d;V++){const y=c[V],p=await y(t,s);if(!(typeof p!="string"&&!Array.isArray(p)&&p)){if(Array.isArray(p))f.push(...p);else{const M=typeof p=="string"?p:Ut(s);f.push(M)}if(e.bails)return{errors:f}}}return{errors:f}}const n=Object.assign(Object.assign({},e),{rules:Tt(e.rules)}),r=[],i=Object.keys(n.rules),u=i.length;for(let s=0;s<u;s++){const c=i[s],d=await En(n,t,{name:c,params:n.rules[c]});if(d.error&&(r.push(d.error),e.bails))return{errors:r}}return{errors:r}}function An(e){return!!e&&e.name==="ValidationError"}function kt(e){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await e.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!An(i))throw i;if(!(!((r=i.inner)===null||r===void 0)&&r.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const u=i.inner.reduce((s,c)=>{const d=c.path||"";return s[d]||(s[d]={errors:[],path:d}),s[d].errors.push(...c.errors),s},{});return{errors:Object.values(u)}}}}}async function jn(e,t){const r=await(oe(t)?t:kt(t)).parse(e),i=[];for(const u of r.errors)u.errors.length&&i.push(...u.errors);return{errors:i}}async function En(e,t,n){const r=ln(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=Fn(n.params,e.formData),u={field:e.label||e.name,name:e.name,label:e.label,value:t,form:e.formData,rule:Object.assign(Object.assign({},n),{params:i})},s=await r(t,i,u);return typeof s=="string"?{error:s}:{error:s?void 0:Ut(u)}}function Ut(e){const t=be().generateMessage;return t?t(e):"Field is invalid"}function Fn(e,t){const n=r=>Ye(r)?r(t):r;return Array.isArray(e)?e.map(n):Object.keys(e).reduce((r,i)=>(r[i]=n(e[i]),r),{})}async function In(e,t){const r=await(oe(e)?e:kt(e)).parse(F(t)),i={},u={};for(const s of r.errors){const c=s.errors,d=(s.path||"").replace(/\["(\d+)"\]/g,(f,V)=>`[${V}]`);i[d]={valid:!c.length,errors:c},c.length&&(u[d]=c[0])}return{valid:!r.errors.length,results:i,errors:u,values:r.value}}async function Pn(e,t,n){const i=ie(e).map(async f=>{var V,y,p;const g=(V=n==null?void 0:n.names)===null||V===void 0?void 0:V[f],M=await Rt(Y(t,f),e[f],{name:(g==null?void 0:g.name)||f,label:g==null?void 0:g.label,values:t,bails:(p=(y=n==null?void 0:n.bailsMap)===null||y===void 0?void 0:y[f])!==null&&p!==void 0?p:!0});return Object.assign(Object.assign({},M),{path:f})});let u=!0;const s=await Promise.all(i),c={},d={};for(const f of s)c[f.path]={valid:f.valid,errors:f.errors},f.valid||(u=!1,d[f.path]=f.errors[0]);return{valid:u,results:c,errors:d}}let pt=0;function Cn(e,t){const{value:n,initialValue:r,setInitialValue:i}=Mn(e,t.modelValue,t.form);if(!t.form){let d=function(g){var M;"value"in g&&(n.value=g.value),"errors"in g&&V(g.errors),"touched"in g&&(p.touched=(M=g.touched)!==null&&M!==void 0?M:p.touched),"initialValue"in g&&i(g.initialValue)};const{errors:f,setErrors:V}=Nn(),y=pt>=Number.MAX_SAFE_INTEGER?0:++pt,p=Bn(n,r,f,t.schema);return{id:y,path:e,value:n,initialValue:r,meta:p,flags:{pendingUnmount:{[y]:!1},pendingReset:!1},errors:f,setState:d}}const u=t.form.createPathState(e,{bails:t.bails,label:t.label,type:t.type,validate:t.validate,schema:t.schema}),s=j(()=>u.errors);function c(d){var f,V,y;"value"in d&&(n.value=d.value),"errors"in d&&((f=t.form)===null||f===void 0||f.setFieldError(C(e),d.errors)),"touched"in d&&((V=t.form)===null||V===void 0||V.setFieldTouched(C(e),(y=d.touched)!==null&&y!==void 0?y:!1)),"initialValue"in d&&i(d.initialValue)}return{id:Array.isArray(u.id)?u.id[u.id.length-1]:u.id,path:e,value:n,errors:s,meta:u,initialValue:r,flags:u.__flags,setState:c}}function Mn(e,t,n){const r=ue(C(t));function i(){return n?Y(n.initialValues.value,C(e),C(r)):C(r)}function u(f){if(!n){r.value=f;return}n.setFieldInitialValue(C(e),f,!0)}const s=j(i);if(!n)return{value:ue(i()),initialValue:s,setInitialValue:u};const c=wn(t,n,s,e);return n.stageInitialValue(C(e),c,!0),{value:j({get(){return Y(n.values,C(e))},set(f){n.setFieldValue(C(e),f,!1)}}),initialValue:s,setInitialValue:u}}function wn(e,t,n,r){return we(e)?C(e):e!==void 0?e:Y(t.values,C(r),C(n))}function Bn(e,t,n,r){var i,u;const s=(u=(i=r==null?void 0:r.describe)===null||i===void 0?void 0:i.call(r).required)!==null&&u!==void 0?u:!1,c=Be({touched:!1,pending:!1,valid:!0,required:s,validated:!!C(n).length,initialValue:j(()=>C(t)),dirty:j(()=>!H(C(e),C(t)))});return Oe(n,d=>{c.valid=!d.length},{immediate:!0,flush:"sync"}),c}function Nn(){const e=ue([]);return{errors:e,setErrors:t=>{e.value=Qe(t)}}}function Tn(e,t,n){return Fe(n==null?void 0:n.type)?kn(e,t,n):$t(e,t,n)}function $t(e,t,n){const{initialValue:r,validateOnMount:i,bails:u,type:s,checkedValue:c,label:d,validateOnValueUpdate:f,uncheckedValue:V,controlled:y,keepValueOnUnmount:p,syncVModel:g,form:M}=Rn(n),J=y?Bt(Ue):void 0,O=M||J,D=j(()=>Ae(A(e))),U=j(()=>{if(A(O==null?void 0:O.schema))return;const _=C(t);return Te(_)||oe(_)||z(_)||Array.isArray(_)?_:Tt(_)}),{id:q,value:Q,initialValue:X,meta:B,setState:le,errors:N,flags:$}=Cn(D,{modelValue:r,form:O,bails:u,label:d,type:s,validate:U.value?te:void 0,schema:oe(t)?t:void 0}),k=j(()=>N.value[0]);g&&Un({value:Q,prop:g,handleChange:S,shouldValidate:()=>f&&!$.pendingReset});const se=(m,_=!1)=>{B.touched=!0,_&&ee()};async function fe(m){var _,P;if(O!=null&&O.validateSchema){const{results:I}=await O.validateSchema(m);return(_=I[A(D)])!==null&&_!==void 0?_:{valid:!0,errors:[]}}return U.value?Rt(Q.value,U.value,{name:A(D),label:A(d),values:(P=O==null?void 0:O.values)!==null&&P!==void 0?P:{},bails:u}):{valid:!0,errors:[]}}const ee=Je(async()=>(B.pending=!0,B.validated=!0,fe("validated-only")),m=>($.pendingUnmount[W.id]||(le({errors:m.errors}),B.pending=!1,B.valid=m.valid),m)),G=Je(async()=>fe("silent"),m=>(B.valid=m.valid,m));function te(m){return(m==null?void 0:m.mode)==="silent"?G():ee()}function S(m,_=!0){const P=Re(m);_e(P,_)}Ft(()=>{if(i)return ee();(!O||!O.validateSchema)&&G()});function K(m){B.touched=m}function ne(m){var _;const P=m&&"value"in m?m.value:X.value;le({value:F(P),initialValue:F(P),touched:(_=m==null?void 0:m.touched)!==null&&_!==void 0?_:!1,errors:(m==null?void 0:m.errors)||[]}),B.pending=!1,B.validated=!1,G()}const me=ke();function _e(m,_=!0){Q.value=me&&g?mn(m,me.props.modelModifiers):m,(_?ee:G)()}function Ie(m){le({errors:Array.isArray(m)?m:[m]})}const ut=j({get(){return Q.value},set(m){_e(m,f)}}),W={id:q,name:D,label:d,value:ut,meta:B,errors:N,errorMessage:k,type:s,checkedValue:c,uncheckedValue:V,bails:u,keepValueOnUnmount:p,resetField:ne,handleReset:()=>ne(),validate:te,handleChange:S,handleBlur:se,setState:le,setTouched:K,setErrors:Ie,setValue:_e};if(It(un,W),we(t)&&typeof C(t)!="function"&&Oe(t,(m,_)=>{H(m,_)||(B.validated?ee():G())},{deep:!0}),!O)return W;const ze=j(()=>{const m=U.value;return!m||z(m)||Te(m)||oe(m)||Array.isArray(m)?{}:Object.keys(m).reduce((_,P)=>{const I=pn(m[P]).map(ve=>ve.__locatorRef).reduce((ve,de)=>{const re=Y(O.values,de)||O.values[de];return re!==void 0&&(ve[de]=re),ve},{});return Object.assign(_,I),_},{})});return Oe(ze,(m,_)=>{if(!Object.keys(m).length)return;!H(m,_)&&(B.validated?ee():G())}),Jt(()=>{var m;const _=(m=A(W.keepValueOnUnmount))!==null&&m!==void 0?m:A(O.keepValuesOnUnmount),P=A(D);if(_||!O||$.pendingUnmount[W.id]){O==null||O.removePathState(P,q);return}$.pendingUnmount[W.id]=!0;const I=O.getPathState(P);if(Array.isArray(I==null?void 0:I.id)&&(I!=null&&I.multiple)?I!=null&&I.id.includes(W.id):(I==null?void 0:I.id)===W.id){if(I!=null&&I.multiple&&Array.isArray(I.value)){const de=I.value.findIndex(re=>H(re,A(W.checkedValue)));if(de>-1){const re=[...I.value];re.splice(de,1),O.setFieldValue(P,re)}Array.isArray(I.id)&&I.id.splice(I.id.indexOf(W.id),1)}else O.unsetPathValue(A(D));O.removePathState(P,q)}}),W}function Rn(e){const t=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(e!=null&&e.syncVModel),r=typeof(e==null?void 0:e.syncVModel)=="string"?e.syncVModel:(e==null?void 0:e.modelPropName)||"modelValue",i=n&&!("initialValue"in(e||{}))?et(ke(),r):e==null?void 0:e.initialValue;if(!e)return Object.assign(Object.assign({},t()),{initialValue:i});const u="valueProp"in e?e.valueProp:e.checkedValue,s="standalone"in e?!e.standalone:e.controlled,c=(e==null?void 0:e.modelPropName)||(e==null?void 0:e.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},t()),e||{}),{initialValue:i,controlled:s??!0,checkedValue:u,syncVModel:c})}function kn(e,t,n){const r=n!=null&&n.standalone?void 0:Bt(Ue),i=n==null?void 0:n.checkedValue,u=n==null?void 0:n.uncheckedValue;function s(c){const d=c.handleChange,f=j(()=>{const y=A(c.value),p=A(i);return Array.isArray(y)?y.findIndex(g=>H(g,p))>=0:H(p,y)});function V(y,p=!0){var g,M;if(f.value===((g=y==null?void 0:y.target)===null||g===void 0?void 0:g.checked)){p&&c.validate();return}const J=A(e),O=r==null?void 0:r.getPathState(J),D=Re(y);let U=(M=A(i))!==null&&M!==void 0?M:D;r&&(O!=null&&O.multiple)&&O.type==="checkbox"?U=yt(Y(r.values,J)||[],U,void 0):(n==null?void 0:n.type)==="checkbox"&&(U=yt(A(c.value),U,A(u))),d(U,p)}return Object.assign(Object.assign({},c),{checked:f,checkedValue:i,uncheckedValue:u,handleChange:V})}return s($t(e,t,n))}function Un({prop:e,value:t,handleChange:n,shouldValidate:r}){const i=ke();if(!i||!e)return;const u=typeof e=="string"?e:"modelValue",s=`update:${u}`;u in i.props&&(Oe(t,c=>{H(c,et(i,u))||i.emit(s,c)}),Oe(()=>et(i,u),c=>{if(c===Ne&&t.value===void 0)return;const d=c===Ne?void 0:c;H(d,t.value)||n(d,r())}))}function et(e,t){if(e)return e.props[t]}const $n=tt({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>be().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Ne},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(e,t){const n=ye(e,"rules"),r=ye(e,"name"),i=ye(e,"label"),u=ye(e,"uncheckedValue"),s=ye(e,"keepValue"),{errors:c,value:d,errorMessage:f,validate:V,handleChange:y,handleBlur:p,setTouched:g,resetField:M,handleReset:J,meta:O,checked:D,setErrors:U}=Tn(r,n,{validateOnMount:e.validateOnMount,bails:e.bails,standalone:e.standalone,type:t.attrs.type,initialValue:Dn(e,t),checkedValue:t.attrs.value,uncheckedValue:u,label:i,validateOnValueUpdate:e.validateOnModelUpdate,keepValueOnUnmount:s,syncVModel:!0}),q=function($,k=!0){y($,k)},Q=j(()=>{const{validateOnInput:N,validateOnChange:$,validateOnBlur:k,validateOnModelUpdate:se}=zn(e);function fe(S){p(S,k),z(t.attrs.onBlur)&&t.attrs.onBlur(S)}function ee(S){q(S,N),z(t.attrs.onInput)&&t.attrs.onInput(S)}function G(S){q(S,$),z(t.attrs.onChange)&&t.attrs.onChange(S)}const te={name:e.name,onBlur:fe,onInput:ee,onChange:G};return te["onUpdate:modelValue"]=S=>q(S,se),te}),X=j(()=>{const N=Object.assign({},Q.value);Fe(t.attrs.type)&&D&&(N.checked=D.value);const $=Vt(e,t);return vn($,t.attrs)&&(N.value=d.value),N}),B=j(()=>Object.assign(Object.assign({},Q.value),{modelValue:d.value}));function le(){return{field:X.value,componentField:B.value,value:d.value,meta:O,errors:c.value,errorMessage:f.value,validate:V,resetField:M,handleChange:q,handleInput:N=>q(N,!1),handleReset:J,handleBlur:Q.value.onBlur,setTouched:g,setErrors:U}}return t.expose({value:d,meta:O,errors:c,errorMessage:f,setErrors:U,setTouched:g,reset:M,validate:V,handleChange:y}),()=>{const N=nt(Vt(e,t)),$=at(N,t,le);return N?Me(N,Object.assign(Object.assign({},t.attrs),X.value),$):$}}});function Vt(e,t){let n=e.as||"";return!e.as&&!t.slots.default&&(n="input"),n}function zn(e){var t,n,r,i;const{validateOnInput:u,validateOnChange:s,validateOnBlur:c,validateOnModelUpdate:d}=be();return{validateOnInput:(t=e.validateOnInput)!==null&&t!==void 0?t:u,validateOnChange:(n=e.validateOnChange)!==null&&n!==void 0?n:s,validateOnBlur:(r=e.validateOnBlur)!==null&&r!==void 0?r:c,validateOnModelUpdate:(i=e.validateOnModelUpdate)!==null&&i!==void 0?i:d}}function Dn(e,t){return Fe(t.attrs.type)?mt(e,"modelValue")?e.modelValue:void 0:mt(e,"modelValue")?e.modelValue:t.attrs.value}const ur=$n;let Ln=0;const Ce=["bails","fieldsCount","id","multiple","type","validate"];function zt(e){const t=Object.assign({},A((e==null?void 0:e.initialValues)||{})),n=C(e==null?void 0:e.validationSchema);return n&&oe(n)&&z(n.cast)?F(n.cast(t)||{}):F(t)}function qn(e){var t;const n=Ln++;let r=0;const i=ue(!1),u=ue(!1),s=ue(0),c=[],d=Be(zt(e)),f=ue([]),V=ue({}),y=ue({}),p=hn(()=>{y.value=f.value.reduce((a,l)=>(a[Ae(A(l.path))]=l,a),{})});function g(a,l){const o=S(a);if(!o){typeof a=="string"&&(V.value[Ae(a)]=Qe(l));return}if(typeof a=="string"){const v=Ae(a);V.value[v]&&delete V.value[v]}o.errors=Qe(l),o.valid=!o.errors.length}function M(a){ie(a).forEach(l=>{g(l,a[l])})}e!=null&&e.initialErrors&&M(e.initialErrors);const J=j(()=>{const a=f.value.reduce((l,o)=>(o.errors.length&&(l[o.path]=o.errors),l),{});return Object.assign(Object.assign({},V.value),a)}),O=j(()=>ie(J.value).reduce((a,l)=>{const o=J.value[l];return o!=null&&o.length&&(a[l]=o[0]),a},{})),D=j(()=>f.value.reduce((a,l)=>(a[l.path]={name:l.path||"",label:l.label||""},a),{})),U=j(()=>f.value.reduce((a,l)=>{var o;return a[l.path]=(o=l.bails)!==null&&o!==void 0?o:!0,a},{})),q=Object.assign({},(e==null?void 0:e.initialErrors)||{}),Q=(t=e==null?void 0:e.keepValuesOnUnmount)!==null&&t!==void 0?t:!1,{initialValues:X,originalInitialValues:B,setInitialValues:le}=xn(f,d,e),N=Wn(f,d,B,O),$=j(()=>f.value.reduce((a,l)=>{const o=Y(d,l.path);return he(a,l.path,o),a},{})),k=e==null?void 0:e.validationSchema;function se(a,l){var o,v;const b=j(()=>Y(X.value,A(a))),h=y.value[A(a)],E=(l==null?void 0:l.type)==="checkbox"||(l==null?void 0:l.type)==="radio";if(h&&E){h.multiple=!0;const ae=r++;return Array.isArray(h.id)?h.id.push(ae):h.id=[h.id,ae],h.fieldsCount++,h.__flags.pendingUnmount[ae]=!1,h}const T=j(()=>Y(d,A(a))),R=A(a),x=ne.findIndex(ae=>ae===R);x!==-1&&ne.splice(x,1);const w=j(()=>{var ae,Se,xe,ct,He,Ge;return oe(k)?(xe=(Se=(ae=k).describe)===null||Se===void 0?void 0:Se.call(ae,A(a)).required)!==null&&xe!==void 0?xe:!1:oe(l==null?void 0:l.schema)&&(Ge=(He=(ct=l==null?void 0:l.schema).describe)===null||He===void 0?void 0:He.call(ct).required)!==null&&Ge!==void 0?Ge:!1}),L=r++,Z=Be({id:L,path:a,touched:!1,pending:!1,valid:!0,validated:!!(!((o=q[R])===null||o===void 0)&&o.length),required:w,initialValue:b,errors:en([]),bails:(v=l==null?void 0:l.bails)!==null&&v!==void 0?v:!1,label:l==null?void 0:l.label,type:(l==null?void 0:l.type)||"default",value:T,multiple:!1,__flags:{pendingUnmount:{[L]:!1},pendingReset:!1},fieldsCount:1,validate:l==null?void 0:l.validate,dirty:j(()=>!H(C(T),C(b)))});return f.value.push(Z),y.value[R]=Z,p(),O.value[R]&&!q[R]&&ce(()=>{ge(R,{mode:"silent"})}),we(a)&&Oe(a,ae=>{p();const Se=F(T.value);y.value[ae]=Z,ce(()=>{he(d,ae,Se)})}),Z}const fe=bt(dt,5),ee=bt(dt,5),G=Je(async a=>await(a==="silent"?fe():ee()),(a,[l])=>{const o=ie(_.errorBag.value),b=[...new Set([...ie(a.results),...f.value.map(h=>h.path),...o])].sort().reduce((h,E)=>{var T;const R=E,x=S(R)||K(R),w=((T=a.results[R])===null||T===void 0?void 0:T.errors)||[],L=A(x==null?void 0:x.path)||R,Z=Hn({errors:w,valid:!w.length},h.results[L]);return h.results[L]=Z,Z.valid||(h.errors[L]=Z.errors[0]),x&&V.value[L]&&delete V.value[L],x?(x.valid=Z.valid,l==="silent"||l==="validated-only"&&!x.validated||g(x,Z.errors),h):(g(L,w),h)},{valid:a.valid,results:{},errors:{}});return a.values&&(b.values=a.values),b});function te(a){f.value.forEach(a)}function S(a){const l=typeof a=="string"?Ae(a):a;return typeof l=="string"?y.value[l]:l}function K(a){return f.value.filter(o=>a.startsWith(o.path)).reduce((o,v)=>o?v.path.length>o.path.length?v:o:v,void 0)}let ne=[],me;function _e(a){return ne.push(a),me||(me=ce(()=>{[...ne].sort().reverse().forEach(o=>{gt(d,o)}),ne=[],me=null})),me}function Ie(a){return function(o,v){return function(h){return h instanceof Event&&(h.preventDefault(),h.stopPropagation()),te(E=>E.touched=!0),i.value=!0,s.value++,Ve().then(E=>{const T=F(d);if(E.valid&&typeof o=="function"){const R=F($.value);let x=a?R:T;return E.values&&(x=E.values),o(x,{evt:h,controlledValues:R,setErrors:M,setFieldError:g,setTouched:De,setFieldTouched:re,setValues:ve,setFieldValue:P,resetForm:Le,resetField:ot})}!E.valid&&typeof v=="function"&&v({values:T,evt:h,errors:E.errors,results:E.results})}).then(E=>(i.value=!1,E),E=>{throw i.value=!1,E})}}}const W=Ie(!1);W.withControlled=Ie(!0);function ze(a,l){const o=f.value.findIndex(b=>b.path===a),v=f.value[o];if(!(o===-1||!v)){if(ce(()=>{ge(a,{mode:"silent",warn:!1})}),v.multiple&&v.fieldsCount&&v.fieldsCount--,Array.isArray(v.id)){const b=v.id.indexOf(l);b>=0&&v.id.splice(b,1),delete v.__flags.pendingUnmount[l]}(!v.multiple||v.fieldsCount<=0)&&(f.value.splice(o,1),st(a),p(),delete y.value[a])}}function m(a){ie(y.value).forEach(l=>{l.startsWith(a)&&delete y.value[l]}),f.value=f.value.filter(l=>!l.path.startsWith(a)),ce(()=>{p()})}const _={formId:n,values:d,controlledValues:$,errorBag:J,errors:O,schema:k,submitCount:s,meta:N,isSubmitting:i,isValidating:u,fieldArrays:c,keepValuesOnUnmount:Q,validateSchema:C(k)?G:void 0,validate:Ve,setFieldError:g,validateField:ge,setFieldValue:P,setValues:ve,setErrors:M,setFieldTouched:re,setTouched:De,resetForm:Le,resetField:ot,handleSubmit:W,useFieldModel:Kt,defineInputBinds:Zt,defineComponentBinds:Yt,defineField:We,stageInitialValue:Ht,unsetInitialValue:st,setFieldInitialValue:qe,createPathState:se,getPathState:S,unsetPathValue:_e,removePathState:ze,initialValues:X,getAllPathStates:()=>f.value,destroyPath:m,isFieldTouched:qt,isFieldDirty:Wt,isFieldValid:xt};function P(a,l,o=!0){const v=F(l),b=typeof a=="string"?a:a.path;S(b)||se(b),he(d,b,v),o&&ge(b)}function I(a,l=!0){ie(d).forEach(o=>{delete d[o]}),ie(a).forEach(o=>{P(o,a[o],!1)}),l&&Ve()}function ve(a,l=!0){Ee(d,a),c.forEach(o=>o&&o.reset()),l&&Ve()}function de(a,l){const o=S(A(a))||se(a);return j({get(){return o.value},set(v){var b;const h=A(a);P(h,v,(b=A(l))!==null&&b!==void 0?b:!1)}})}function re(a,l){const o=S(a);o&&(o.touched=l)}function qt(a){const l=S(a);return l?l.touched:f.value.filter(o=>o.path.startsWith(a)).some(o=>o.touched)}function Wt(a){const l=S(a);return l?l.dirty:f.value.filter(o=>o.path.startsWith(a)).some(o=>o.dirty)}function xt(a){const l=S(a);return l?l.valid:f.value.filter(o=>o.path.startsWith(a)).every(o=>o.valid)}function De(a){if(typeof a=="boolean"){te(l=>{l.touched=a});return}ie(a).forEach(l=>{re(l,!!a[l])})}function ot(a,l){var o;const v=l&&"value"in l?l.value:Y(X.value,a),b=S(a);b&&(b.__flags.pendingReset=!0),qe(a,F(v),!0),P(a,v,!1),re(a,(o=l==null?void 0:l.touched)!==null&&o!==void 0?o:!1),g(a,(l==null?void 0:l.errors)||[]),ce(()=>{b&&(b.__flags.pendingReset=!1)})}function Le(a,l){let o=F(a!=null&&a.values?a.values:B.value);o=l!=null&&l.force?o:Ee(B.value,o),o=oe(k)&&z(k.cast)?k.cast(o):o,le(o),te(v=>{var b;v.__flags.pendingReset=!0,v.validated=!1,v.touched=((b=a==null?void 0:a.touched)===null||b===void 0?void 0:b[v.path])||!1,P(v.path,Y(o,v.path),!1),g(v.path,void 0)}),l!=null&&l.force?I(o,!1):ve(o,!1),M((a==null?void 0:a.errors)||{}),s.value=(a==null?void 0:a.submitCount)||0,ce(()=>{Ve({mode:"silent"}),te(v=>{v.__flags.pendingReset=!1})})}async function Ve(a){const l=(a==null?void 0:a.mode)||"force";if(l==="force"&&te(h=>h.validated=!0),_.validateSchema)return _.validateSchema(l);u.value=!0;const o=await Promise.all(f.value.map(h=>h.validate?h.validate(a).then(E=>({key:h.path,valid:E.valid,errors:E.errors})):Promise.resolve({key:h.path,valid:!0,errors:[]})));u.value=!1;const v={},b={};for(const h of o)v[h.key]={valid:h.valid,errors:h.errors},h.errors.length&&(b[h.key]=h.errors[0]);return{valid:o.every(h=>h.valid),results:v,errors:b}}async function ge(a,l){var o;const v=S(a);if(v&&(l==null?void 0:l.mode)!=="silent"&&(v.validated=!0),k){const{results:b}=await G((l==null?void 0:l.mode)||"validated-only");return b[a]||{errors:[],valid:!0}}return v!=null&&v.validate?v.validate(l):(!v&&(o=l==null?void 0:l.warn),Promise.resolve({errors:[],valid:!0}))}function st(a){gt(X.value,a)}function Ht(a,l,o=!1){qe(a,l),he(d,a,l),o&&!(e!=null&&e.initialValues)&&he(B.value,a,F(l))}function qe(a,l,o=!1){he(X.value,a,F(l)),o&&he(B.value,a,F(l))}async function dt(){const a=C(k);if(!a)return{valid:!0,results:{},errors:{}};u.value=!0;const l=Te(a)||oe(a)?await In(a,d):await Pn(a,d,{names:D.value,bailsMap:U.value});return u.value=!1,l}const Gt=W((a,{evt:l})=>{wt(l)&&l.target.submit()});Ft(()=>{if(e!=null&&e.initialErrors&&M(e.initialErrors),e!=null&&e.initialTouched&&De(e.initialTouched),e!=null&&e.validateOnMount){Ve();return}_.validateSchema&&_.validateSchema("silent")}),we(k)&&Oe(k,()=>{var a;(a=_.validateSchema)===null||a===void 0||a.call(_,"validated-only")}),It(Ue,_);function We(a,l){const o=z(l)||l==null?void 0:l.label,v=S(A(a))||se(a,{label:o}),b=()=>z(l)?l(Pe(v,Ce)):l||{};function h(){var w;v.touched=!0,((w=b().validateOnBlur)!==null&&w!==void 0?w:be().validateOnBlur)&&ge(v.path)}function E(){var w;((w=b().validateOnInput)!==null&&w!==void 0?w:be().validateOnInput)&&ce(()=>{ge(v.path)})}function T(){var w;((w=b().validateOnChange)!==null&&w!==void 0?w:be().validateOnChange)&&ce(()=>{ge(v.path)})}const R=j(()=>{const w={onChange:T,onInput:E,onBlur:h};return z(l)?Object.assign(Object.assign({},w),l(Pe(v,Ce)).props||{}):l!=null&&l.props?Object.assign(Object.assign({},w),l.props(Pe(v,Ce))):w});return[de(a,()=>{var w,L,Z;return(Z=(w=b().validateOnModelUpdate)!==null&&w!==void 0?w:(L=be())===null||L===void 0?void 0:L.validateOnModelUpdate)!==null&&Z!==void 0?Z:!0}),R]}function Kt(a){return Array.isArray(a)?a.map(l=>de(l,!0)):de(a)}function Zt(a,l){const[o,v]=We(a,l);function b(T){v.value.onBlur(T)}function h(T){const R=Re(T);P(A(a),R,!1),v.value.onInput(T)}function E(T){const R=Re(T);P(A(a),R,!1),v.value.onChange(T)}return j(()=>Object.assign(Object.assign({},v.value),{onBlur:b,onInput:h,onChange:E,value:o.value}))}function Yt(a,l){const[o,v]=We(a,l),b=S(A(a));function h(E){o.value=E}return j(()=>{const E=z(l)?l(Pe(b,Ce)):l||{};return Object.assign({[E.model||"modelValue"]:o.value,[`onUpdate:${E.model||"modelValue"}`]:h},v.value)})}return Object.assign(Object.assign({},_),{values:Qt(d),handleReset:()=>Le(),submitForm:Gt})}function Wn(e,t,n,r){const i={touched:"some",pending:"some",valid:"every"},u=j(()=>!H(t,C(n)));function s(){const d=e.value;return ie(i).reduce((f,V)=>{const y=i[V];return f[V]=d[y](p=>p[V]),f},{})}const c=Be(s());return Xt(()=>{const d=s();c.touched=d.touched,c.valid=d.valid,c.pending=d.pending}),j(()=>Object.assign(Object.assign({initialValues:C(n)},c),{valid:c.valid&&!ie(r.value).length,dirty:u.value}))}function xn(e,t,n){const r=zt(n),i=ue(r),u=ue(F(r));function s(c,d=!1){i.value=Ee(F(i.value)||{},F(c)),u.value=Ee(F(u.value)||{},F(c)),d&&e.value.forEach(f=>{if(f.touched)return;const y=Y(i.value,f.path);he(t,f.path,F(y))})}return{initialValues:i,originalInitialValues:u,setInitialValues:s}}function Hn(e,t){return t?{valid:e.valid&&t.valid,errors:[...e.errors,...t.errors]}:e}const Gn=tt({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(e,t){const n=ye(e,"validationSchema"),r=ye(e,"keepValues"),{errors:i,errorBag:u,values:s,meta:c,isSubmitting:d,isValidating:f,submitCount:V,controlledValues:y,validate:p,validateField:g,handleReset:M,resetForm:J,handleSubmit:O,setErrors:D,setFieldError:U,setFieldValue:q,setValues:Q,setFieldTouched:X,setTouched:B,resetField:le}=qn({validationSchema:n.value?n:void 0,initialValues:e.initialValues,initialErrors:e.initialErrors,initialTouched:e.initialTouched,validateOnMount:e.validateOnMount,keepValuesOnUnmount:r}),N=O((S,{evt:K})=>{wt(K)&&K.target.submit()},e.onInvalidSubmit),$=e.onSubmit?O(e.onSubmit,e.onInvalidSubmit):N;function k(S){it(S)&&S.preventDefault(),M(),typeof t.attrs.onReset=="function"&&t.attrs.onReset()}function se(S,K){return O(typeof S=="function"&&!K?S:K,e.onInvalidSubmit)(S)}function fe(){return F(s)}function ee(){return F(c.value)}function G(){return F(i.value)}function te(){return{meta:c.value,errors:i.value,errorBag:u.value,values:s,isSubmitting:d.value,isValidating:f.value,submitCount:V.value,controlledValues:y.value,validate:p,validateField:g,handleSubmit:se,handleReset:M,submitForm:N,setErrors:D,setFieldError:U,setFieldValue:q,setValues:Q,setFieldTouched:X,setTouched:B,resetForm:J,resetField:le,getValues:fe,getMeta:ee,getErrors:G}}return t.expose({setFieldError:U,setErrors:D,setFieldValue:q,setValues:Q,setFieldTouched:X,setTouched:B,resetForm:J,validate:p,validateField:g,resetField:le,getValues:fe,getMeta:ee,getErrors:G,values:s,meta:c,errors:i}),function(){const K=e.as==="form"?e.as:e.as?nt(e.as):null,ne=at(K,t,te);return K?Me(K,Object.assign(Object.assign(Object.assign({},K==="form"?{novalidate:!0}:{}),t.attrs),{onSubmit:$,onReset:k}),ne):ne}}}),or=Gn,Kn=tt({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(e,t){const n=Et(Ue,void 0),r=j(()=>n==null?void 0:n.errors.value[e.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const u=e.as?nt(e.as):e.as,s=at(u,t,i),c=Object.assign({role:"alert"},t.attrs);return!u&&(Array.isArray(s)||!s)&&(s!=null&&s.length)?s:(Array.isArray(s)||!s)&&!(s!=null&&s.length)?Me(u||"span",c,r.value):Me(u,c,s)}}}),sr=Kn;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function Zn(e,t){return Array.isArray(e)?e[0]:e[t]}function Dt(e){return!!(e==null||e===""||Array.isArray(e)&&e.length===0)}const _t=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,dr=e=>Dt(e)?!0:Array.isArray(e)?e.every(t=>_t.test(String(t))):_t.test(String(e)),Yn=(e,t)=>{if(Dt(e))return!0;let n=Zn(t,"regex");return typeof n=="string"&&(n=new RegExp(n)),Array.isArray(e)?e.every(r=>Yn(r,{regex:n})):n.test(String(e))};function Jn(e){return e==null}function Qn(e){return Array.isArray(e)&&e.length===0}const cr=e=>Jn(e)||Qn(e)||e===!1?!1:!!String(e).trim().length;/**
  * vee-validate v4.12.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function St(e){return typeof e=="function"}function Xn(e){return typeof e=="object"&&e!==null}function er(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function At(e){if(!Xn(e)||er(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Lt(e,t){return Object.keys(t).forEach(n=>{if(At(t[n])&&At(e[n])){e[n]||(e[n]={}),Lt(e[n],t[n]);return}e[n]=t[n]}),e}function jt(e,t){return e.replace(/(\d:)?{([^}]+)}/g,function(n,r,i){if(!r||!t.params)return i in t?t[i]:t.params&&i in t.params?t.params[i]:`{${i}}`;if(!Array.isArray(t.params))return i in t.params?t.params[i]:`{${i}}`;const u=Number(r.replace(":",""));return u in t.params?t.params[u]:`${r}{${i}}`})}class tr{constructor(t,n){this.container={},this.locale=t,this.merge(n)}resolve(t){return this.format(this.locale,t)}getLocaleDefault(t,n){var r,i,u,s,c;return((u=(i=(r=this.container[t])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[n])===null||u===void 0?void 0:u._default)||((c=(s=this.container[t])===null||s===void 0?void 0:s.messages)===null||c===void 0?void 0:c._default)}resolveLabel(t,n,r){var i,u,s,c;return r?((u=(i=this.container[t])===null||i===void 0?void 0:i.names)===null||u===void 0?void 0:u[r])||r:((c=(s=this.container[t])===null||s===void 0?void 0:s.names)===null||c===void 0?void 0:c[n])||n}format(t,n){var r,i,u,s,c;let d;const{rule:f,form:V,label:y,name:p}=n,g=this.resolveLabel(t,p,y);return f?(d=((u=(i=(r=this.container[t])===null||r===void 0?void 0:r.fields)===null||i===void 0?void 0:i[p])===null||u===void 0?void 0:u[f.name])||((c=(s=this.container[t])===null||s===void 0?void 0:s.messages)===null||c===void 0?void 0:c[f.name]),d||(d=this.getLocaleDefault(t,p)||`${g} is not valid`),St(d)?d(n):jt(d,Object.assign(Object.assign({},V),{field:g,params:f.params}))):(d=this.getLocaleDefault(t,p)||`${g} is not valid`,St(d)?d(n):jt(d,Object.assign(Object.assign({},V),{field:g})))}merge(t){Lt(this.container,t)}}const je=new tr("en",{});function fr(e,t){const n=r=>je.resolve(r);return typeof e=="string"?(je.locale=e,t&&je.merge({[e]:t}),n):(je.merge(e),n)}function vr(e){je.locale=e}const nr="zh_TW",rr={_default:"{field} 的值無效",alpha:"{field} 須以英文組成",alpha_dash:"{field} 須以英數、破折號及底線組成",alpha_num:"{field} 須以英數組成",alpha_spaces:"{field} 須以英文及空格組成",between:"{field} 須介於 0:{min} 至 1:{max}之間",confirmed:" {field} 不一致",digits:"{field} 須為 0:{length} 位數字",dimensions:"{field} 圖片尺寸不正確。須為 0:{width} x 1:{height} 像素",email:"{field} 須為有效的電子信箱",not_one_of:"{field} 的選項無效",ext:"{field} 須為有效的檔案",image:"{field} 須為圖片",one_of:"{field} 的選項無效",integer:"{field} 須為整數",length:"{field} 的長度須為 0:{length}",max:"{field} 不能大於 0:{length} 個字元",max_value:"{field} 不得大於 0:{max}",mimes:"{field} 須為有效的檔案類型",min:"{field} 不能小於 0:{length} 個字元",min_value:"{field} 不得小於 0:{min}",numeric:"{field} 須為數字",regex:"{field} 的格式錯誤",required:"{field} 為必填",required_if:"{field} 為必填",size:"{field} 的檔案須小於 0:{size}KB",url:"{field} 須為有效的URL"},mr={code:nr,messages:rr};export{sr as E,or as F,ur as a,Yn as b,ar as c,lr as d,dr as e,fr as l,cr as r,vr as s,mr as z};
