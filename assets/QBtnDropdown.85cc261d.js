import{Q as P}from"./use-router-link.b84f9b80.js";import{Q as c,u as V,g as j}from"./QBtn.7c70fb2e.js";import{c as B,h as v}from"./render.2c81c980.js";import{d as i,h as u,s as h,j as m,k as x,g as M,I as O}from"./index.0c8a8fb1.js";import{Q as _}from"./ClosePopup.87f5e488.js";import{d as H}from"./position-engine.45a519b0.js";import{u as R}from"./focus-manager.33224ae2.js";var $=B({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=i(()=>{const a=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(l=>e[l]===!0).map(l=>`q-btn-group--${l}`).join(" ");return`q-btn-group row no-wrap${a.length>0?" "+a:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>u("div",{class:o.value},v(t.default))}});const q=Object.keys(V),L=q.reduce((e,t)=>(e[t]={})&&e,{}),z=e=>q.reduce((t,o)=>{const a=e[o];return a!==void 0&&(t[o]=a),t},{});var K=B({name:"QBtnDropdown",props:{...L,...H,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","before-show","show","before-hide","hide"],setup(e,{slots:t,emit:o}){const{proxy:a}=M(),l=h(e.modelValue),r=h(null),s=R(),f=i(()=>{const n={"aria-expanded":l.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s,"aria-owns":s,"aria-label":e.toggleAriaLabel||a.$q.lang.label[l.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),S=i(()=>"q-btn-dropdown__arrow"+(l.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),b=i(()=>j(e)),w=i(()=>z(e));m(()=>e.modelValue,n=>{r.value!==null&&r.value[n?"show":"hide"]()}),m(()=>e.split,d);function C(n){l.value=!0,o("before-show",n)}function y(n){o("show",n),o("update:modelValue",!0)}function A(n){l.value=!1,o("before-hide",n)}function D(n){o("hide",n),o("update:modelValue",!1)}function Q(n){o("click",n)}function k(n){O(n),d(),o("click",n)}function I(n){r.value!==null&&r.value.toggle(n)}function g(n){r.value!==null&&r.value.show(n)}function d(n){r.value!==null&&r.value.hide(n)}return Object.assign(a,{show:g,hide:d,toggle:I}),x(()=>{e.modelValue===!0&&g()}),()=>{const n=[u(P,{class:S.value,name:e.dropdownIcon||a.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(u(_,{ref:r,id:s,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:C,onShow:y,onBeforeHide:A,onHide:D},t.default)),e.split===!1?u(c,{class:"q-btn-dropdown q-btn-dropdown--simple",...w.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:Q},{default:()=>v(t.label,[]).concat(n),loading:t.loading}):u($,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...b.value,glossy:e.glossy,stretch:e.stretch},()=>[u(c,{class:"q-btn-dropdown--current",...w.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:t.label,loading:t.loading}),u(c,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...b.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}});export{K as Q};
