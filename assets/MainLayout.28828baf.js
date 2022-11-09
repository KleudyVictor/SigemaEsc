import{Q as Ee}from"./QBtn.7c70fb2e.js";import{c as J,h as me,d as st,b as dt,e as Oe}from"./render.2c81c980.js";import{d as m,h as q,i as ze,e as Z,s as O,j as $,m as he,l as He,g as Le,U as ae,n as ct,Y as ft,V as se,Z as xe,M as Qe,I as ke,X as Se,W as Ce,K as Ne,k as vt,u as De,A as R,T as mt,$ as ht,a0 as gt,_ as ee,o as Q,C as ne,a as l,w as v,D,c as K,E as A,z as bt,r as X,a1 as Ae}from"./index.0c8a8fb1.js";import{g as Me,s as Pe,Q as pt}from"./touch.20b3160b.js";import{Q as P,a as S,b as Te}from"./QList.179bc085.js";import{Q as fe}from"./QItemLabel.4136bfd5.js";import{Q as _t}from"./QBtnDropdown.85cc261d.js";import{b as yt,Q as wt,a as xt}from"./QLayout.eb8959f5.js";import{Q as kt}from"./QImg.0f17db1d.js";import{u as Ct,a as qt,C as $t}from"./ClosePopup.87f5e488.js";import{u as We,a as je,b as St,c as Re}from"./position-engine.45a519b0.js";import{a as Ye,u as Ge}from"./use-dark.c0686932.js";import{c as Tt}from"./selection.34d099b6.js";import{b as de}from"./format.3e32b8d9.js";import{Q as ve}from"./QSeparator.cd4e4c80.js";import{c as Ue,Q as V}from"./use-router-link.b84f9b80.js";import{u as Ve}from"./focus-manager.33224ae2.js";import{R as ce}from"./Ripple.cbfa6863.js";import{_ as Lt}from"./sigema.c43240cc.js";import"./scroll.d4a1c708.js";import"./dom.0ccaada6.js";var Bt=J({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const r=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:r.value},me(i.default))}}),It=J({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const r=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:r.value,role:"toolbar"},me(i.default))}}),Et=J({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:r}){const{proxy:{$q:g}}=Le(),t=ze(He,Z);if(t===Z)return console.error("QHeader needs to be child of QLayout"),Z;const a=O(parseInt(e.heightHint,10)),u=O(!0),b=m(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||g.platform.is.ios&&t.isContainer.value===!0),h=m(()=>{if(e.modelValue!==!0)return 0;if(b.value===!0)return u.value===!0?a.value:0;const s=a.value-t.scroll.value.position;return s>0?s:0}),c=m(()=>e.modelValue!==!0||b.value===!0&&u.value!==!0),o=m(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),x=m(()=>"q-header q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),k=m(()=>{const s=t.rows.value.top,L={};return s[0]==="l"&&t.left.space===!0&&(L[g.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(L[g.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),L});function w(s,L){t.update("header",s,L)}function _(s,L){s.value!==L&&(s.value=L)}function d({height:s}){_(a,s),w("size",s)}function C(s){o.value===!0&&_(u,!0),r("focusin",s)}$(()=>e.modelValue,s=>{w("space",s),_(u,!0),t.animate()}),$(h,s=>{w("offset",s)}),$(()=>e.reveal,s=>{s===!1&&_(u,e.modelValue)}),$(u,s=>{t.animate(),r("reveal",s)}),$(t.scroll,s=>{e.reveal===!0&&_(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const p={};return t.instances.header=p,e.modelValue===!0&&w("size",a.value),w("space",e.modelValue),w("offset",h.value),he(()=>{t.instances.header===p&&(t.instances.header=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const s=st(i.default,[]);return e.elevated===!0&&s.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(q(yt,{debounce:0,onResize:d})),q("header",{class:x.value,style:k.value,onFocusin:C},s)}}});function qe(e,i,r){const g=Se(e);let t,a=g.left-i.event.x,u=g.top-i.event.y,b=Math.abs(a),h=Math.abs(u);const c=i.direction;c.horizontal===!0&&c.vertical!==!0?t=a<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=u<0?"up":"down":c.up===!0&&u<0?(t="up",b>h&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.down===!0&&u>0?(t="down",b>h&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.left===!0&&a<0?(t="left",b<h&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down"))):c.right===!0&&a>0&&(t="right",b<h&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down")));let o=!1;if(t===void 0&&r===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,o=!0,t==="left"||t==="right"?(g.left-=a,b=0,a=0):(g.top-=u,h=0,u=0)}return{synthetic:o,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:g,direction:t,isFirst:i.event.isFirst,isFinal:r===!0,duration:Date.now()-i.event.time,distance:{x:b,y:h},offset:{x:a,y:u},delta:{x:g.left-i.event.lastX,y:g.top-i.event.lastY}}}}let Ot=0;var $e=dt({name:"touch-pan",beforeMount(e,{value:i,modifiers:r}){if(r.mouse!==!0&&ae.has.touch!==!0)return;function g(a,u){r.mouse===!0&&u===!0?Ne(a):(r.stop===!0&&ke(a),r.prevent===!0&&Qe(a))}const t={uid:"qvtp_"+Ot++,handler:i,modifiers:r,direction:Me(r),noop:ct,mouseStart(a){Pe(a,t)&&ft(a)&&(se(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Pe(a,t)){const u=a.target;se(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(ae.is.firefox===!0&&xe(e,!0),t.lastEvt=a,u===!0||r.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=a.type.indexOf("mouse")>-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Qe(c),a.cancelBubble===!0&&ke(c),Object.assign(c,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:c}}ke(a)}const{left:b,top:h}=Se(a);t.event={x:b,y:h,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:b,lastY:h}},move(a){if(t.event===void 0)return;const u=Se(a),b=u.left-t.event.x,h=u.top-t.event.y;if(b===0&&h===0)return;t.lastEvt=a;const c=t.event.mouse===!0,o=()=>{g(a,c);let w;r.preserveCursor!==!0&&r.preservecursor!==!0&&(w=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Tt(),t.styleCleanup=_=>{if(t.styleCleanup=void 0,w!==void 0&&(document.documentElement.style.cursor=w),document.body.classList.remove("non-selectable"),c===!0){const d=()=>{document.body.classList.remove("no-pointer-events--children")};_!==void 0?setTimeout(()=>{d(),_()},50):d()}else _!==void 0&&_()}};if(t.event.detected===!0){t.event.isFirst!==!0&&g(a,t.event.mouse);const{payload:w,synthetic:_}=qe(a,t,!1);w!==void 0&&(t.handler(w)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=w.position.left,t.event.lastY=w.position.top,t.event.lastDir=_===!0?void 0:w.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(a);return}const x=Math.abs(b),k=Math.abs(h);x!==k&&(t.direction.horizontal===!0&&x>k||t.direction.vertical===!0&&x<k||t.direction.up===!0&&x<k&&h<0||t.direction.down===!0&&x<k&&h>0||t.direction.left===!0&&x>k&&b<0||t.direction.right===!0&&x>k&&b>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(Ce(t,"temp"),ae.is.firefox===!0&&xe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(qe(a===void 0?t.lastEvt:a,t).payload);const{payload:b}=qe(a===void 0?t.lastEvt:a,t,!0),h=()=>{t.handler(b)};t.styleCleanup!==void 0?t.styleCleanup(h):h()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,r.mouse===!0){const a=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";se(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}ae.has.touch===!0&&se(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const r=e.__qtouchpan;r!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&r.end(),r.handler=i.value),r.direction=Me(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),Ce(i,"main"),Ce(i,"temp"),ae.is.firefox===!0&&xe(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});const Fe=150;var Qt=J({name:"QDrawer",inheritAttrs:!1,props:{...We,...Ye,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...je,"on-layout","mini-state"],setup(e,{slots:i,emit:r,attrs:g}){const t=Le(),{proxy:{$q:a}}=t,u=Ge(e,a),{preventBodyScroll:b}=qt(),{registerTimeout:h,removeTimeout:c}=St(),o=ze(He,Z);if(o===Z)return console.error("QDrawer needs to be child of QLayout"),Z;let x,k,w;const _=O(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),d=m(()=>e.mini===!0&&_.value!==!0),C=m(()=>d.value===!0?e.miniWidth:e.width),p=O(e.showIfAbove===!0&&_.value===!1?!0:e.modelValue===!0),s=m(()=>e.persistent!==!0&&(_.value===!0||be.value===!0));function L(n,y){if(ge(),n!==!1&&o.animate(),I(0),_.value===!0){const T=o.instances[U.value];T!==void 0&&T.belowBreakpoint===!0&&T.hide(!1),H(1),o.isContainer.value!==!0&&b(!0)}else H(0),n!==!1&&_e(!1);h(()=>{n!==!1&&_e(!0),y!==!0&&r("show",n)},Fe)}function oe(n,y){ie(),n!==!1&&o.animate(),H(0),I(F.value*C.value),ye(),y!==!0?h(()=>{r("hide",n)},Fe):c()}const{show:Y,hide:W}=Re({showing:p,hideOnRouteChange:s,handleShow:L,handleHide:oe}),{addToHistory:ge,removeFromHistory:ie}=Ct(p,W,s),G={belowBreakpoint:_,hide:W},E=m(()=>e.side==="right"),F=m(()=>(a.lang.rtl===!0?-1:1)*(E.value===!0?1:-1)),le=O(0),z=O(!1),te=O(!1),re=O(C.value*F.value),U=m(()=>E.value===!0?"left":"right"),f=m(()=>p.value===!0&&_.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),B=m(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(E.value?"R":"L")>-1||a.platform.is.ios===!0&&o.isContainer.value===!0),M=m(()=>e.overlay===!1&&p.value===!0&&_.value===!1),be=m(()=>e.overlay===!0&&p.value===!0&&_.value===!1),Xe=m(()=>"fullscreen q-drawer__backdrop"+(p.value===!1&&z.value===!1?" hidden":"")),Ke=m(()=>({backgroundColor:`rgba(0,0,0,${le.value*.4})`})),Be=m(()=>E.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),Ze=m(()=>E.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),Je=m(()=>{const n={};return o.header.space===!0&&Be.value===!1&&(B.value===!0?n.top=`${o.header.offset}px`:o.header.space===!0&&(n.top=`${o.header.size}px`)),o.footer.space===!0&&Ze.value===!1&&(B.value===!0?n.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(n.bottom=`${o.footer.size}px`)),n}),et=m(()=>{const n={width:`${C.value}px`,transform:`translateX(${re.value}px)`};return _.value===!0?n:Object.assign(n,Je.value)}),tt=m(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),at=m(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(z.value===!0?" no-transition":p.value===!0?"":" q-layout--prevent-focus")+(_.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${d.value===!0?"mini":"standard"}`+(B.value===!0||M.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Be.value===!0?" q-drawer--top-padding":""))),nt=m(()=>{const n=a.lang.rtl===!0?e.side:U.value;return[[$e,rt,void 0,{[n]:!0,mouse:!0}]]}),ot=m(()=>{const n=a.lang.rtl===!0?U.value:e.side;return[[$e,Ie,void 0,{[n]:!0,mouse:!0}]]}),it=m(()=>{const n=a.lang.rtl===!0?U.value:e.side;return[[$e,Ie,void 0,{[n]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){ut(_,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}$(_,n=>{n===!0?(x=p.value,p.value===!0&&W(!1)):e.overlay===!1&&e.behavior!=="mobile"&&x!==!1&&(p.value===!0?(I(0),H(0),ye()):Y(!1))}),$(()=>e.side,(n,y)=>{o.instances[y]===G&&(o.instances[y]=void 0,o[y].space=!1,o[y].offset=0),o.instances[n]=G,o[n].size=C.value,o[n].space=M.value,o[n].offset=f.value}),$(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),$(()=>e.behavior+e.breakpoint,pe),$(o.isContainer,n=>{p.value===!0&&b(n!==!0),n===!0&&pe()}),$(o.scrollbarWidth,()=>{I(p.value===!0?0:void 0)}),$(f,n=>{N("offset",n)}),$(M,n=>{r("on-layout",n),N("space",n)}),$(E,()=>{I()}),$(C,n=>{I(),we(e.miniToOverlay,n)}),$(()=>e.miniToOverlay,n=>{we(n,C.value)}),$(()=>a.lang.rtl,()=>{I()}),$(()=>e.mini,()=>{e.modelValue===!0&&(lt(),o.animate())}),$(d,n=>{r("mini-state",n)});function I(n){n===void 0?De(()=>{n=p.value===!0?0:C.value,I(F.value*n)}):(o.isContainer.value===!0&&E.value===!0&&(_.value===!0||Math.abs(n)===C.value)&&(n+=F.value*o.scrollbarWidth.value),re.value=n)}function H(n){le.value=n}function _e(n){const y=n===!0?"remove":o.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function lt(){clearTimeout(k),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,k=setTimeout(()=>{te.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function rt(n){if(p.value!==!1)return;const y=C.value,T=de(n.distance.x,0,y);if(n.isFinal===!0){T>=Math.min(75,y)===!0?Y():(o.animate(),H(0),I(F.value*y)),z.value=!1;return}I((a.lang.rtl===!0?E.value!==!0:E.value)?Math.max(y-T,0):Math.min(0,T-y)),H(de(T/y,0,1)),n.isFirst===!0&&(z.value=!0)}function Ie(n){if(p.value!==!0)return;const y=C.value,T=n.direction===e.side,ue=(a.lang.rtl===!0?T!==!0:T)?de(n.distance.x,0,y):0;if(n.isFinal===!0){Math.abs(ue)<Math.min(75,y)===!0?(o.animate(),H(1),I(0)):W(),z.value=!1;return}I(F.value*ue),H(de(1-ue/y,0,1)),n.isFirst===!0&&(z.value=!0)}function ye(){b(!1),_e(!0)}function N(n,y){o.update(e.side,n,y)}function ut(n,y){n.value!==y&&(n.value=y)}function we(n,y){N("size",n===!0?e.miniWidth:y)}return o.instances[e.side]=G,we(e.miniToOverlay,C.value),N("space",M.value),N("offset",f.value),e.showIfAbove===!0&&e.modelValue!==!0&&p.value===!0&&e["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!0),vt(()=>{r("on-layout",M.value),r("mini-state",d.value),x=e.showIfAbove===!0;const n=()=>{(p.value===!0?L:oe)(!1,!0)};if(o.totalWidth.value!==0){De(n);return}w=$(o.totalWidth,()=>{w(),w=void 0,p.value===!1&&e.showIfAbove===!0&&_.value===!1?Y(!1):n()})}),he(()=>{w!==void 0&&w(),clearTimeout(k),p.value===!0&&ye(),o.instances[e.side]===G&&(o.instances[e.side]=void 0,N("size",0),N("offset",0),N("space",!1))}),()=>{const n=[];_.value===!0&&(e.noSwipeOpen===!1&&n.push(R(q("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),nt.value)),n.push(Oe("div",{ref:"backdrop",class:Xe.value,style:Ke.value,"aria-hidden":"true",onClick:W},void 0,"backdrop",e.noSwipeBackdrop!==!0&&p.value===!0,()=>it.value)));const y=d.value===!0&&i.mini!==void 0,T=[q("div",{...g,key:""+y,class:[tt.value,g.class]},y===!0?i.mini():me(i.default))];return e.elevated===!0&&p.value===!0&&T.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(Oe("aside",{ref:"content",class:at.value,style:et.value},T,"contentclose",e.noSwipeClose!==!0&&_.value===!0,()=>ot.value)),q("div",{class:"q-drawer-container"},n)}}}),Dt=J({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:i,emit:r}){let g=!1,t,a,u,b,h,c;function o(){t&&t(),t=null,g=!1,clearTimeout(u),clearTimeout(b),a!==void 0&&a.removeEventListener("transitionend",h),h=null}function x(d,C,p){d.style.overflowY="hidden",C!==void 0&&(d.style.height=`${C}px`),d.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,g=!0,t=p}function k(d,C){d.style.overflowY=null,d.style.height=null,d.style.transition=null,o(),C!==c&&r(C)}function w(d,C){let p=0;a=d,g===!0?(o(),p=d.offsetHeight===d.scrollHeight?0:void 0):c="hide",x(d,p,C),u=setTimeout(()=>{d.style.height=`${d.scrollHeight}px`,h=s=>{(Object(s)!==s||s.target===d)&&k(d,"show")},d.addEventListener("transitionend",h),b=setTimeout(h,e.duration*1.1)},100)}function _(d,C){let p;a=d,g===!0?o():(c="show",p=d.scrollHeight),x(d,p,C),u=setTimeout(()=>{d.style.height=0,h=s=>{(Object(s)!==s||s.target===d)&&k(d,"hide")},d.addEventListener("transitionend",h),b=setTimeout(h,e.duration*1.1)},100)}return he(()=>{g===!0&&o()}),()=>q(mt,{css:!1,appear:e.appear,onEnter:w,onLeave:_},i.default)}});const j=ht({}),At=Object.keys(Ue);var Mt=J({name:"QExpansionItem",props:{...Ue,...We,...Ye,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...je,"click","after-show","after-hide"],setup(e,{slots:i,emit:r}){const{proxy:{$q:g}}=Le(),t=Ge(e,g),a=O(e.modelValue!==null?e.modelValue:e.defaultOpened),u=O(null),b=Ve(),{show:h,hide:c,toggle:o}=Re({showing:a});let x,k;const w=m(()=>`q-expansion-item q-item-type q-expansion-item--${a.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),_=m(()=>{if(e.contentInsetLevel===void 0)return null;const f=g.lang.rtl===!0?"Right":"Left";return{["padding"+f]:e.contentInsetLevel*56+"px"}}),d=m(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),C=m(()=>{const f={};return At.forEach(B=>{f[B]=e[B]}),f}),p=m(()=>d.value===!0||e.expandIconToggle!==!0),s=m(()=>e.expandedIcon!==void 0&&a.value===!0?e.expandedIcon:e.expandIcon||g.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),L=m(()=>e.disable!==!0&&(d.value===!0||e.expandIconToggle===!0)),oe=m(()=>({expanded:a.value===!0,detailsId:e.targetUid,toggle:o,show:h,hide:c})),Y=m(()=>{const f=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:g.lang.label[a.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":a.value===!0?"true":"false","aria-owns":b,"aria-controls":b,"aria-label":f}});$(()=>e.group,f=>{k!==void 0&&k(),f!==void 0&&F()});function W(f){d.value!==!0&&o(f),r("click",f)}function ge(f){f.keyCode===13&&ie(f,!0)}function ie(f,B){B!==!0&&u.value!==null&&u.value.focus(),o(f),Ne(f)}function G(){r("after-show")}function E(){r("after-hide")}function F(){x===void 0&&(x=Ve()),a.value===!0&&(j[e.group]=x);const f=$(a,M=>{M===!0?j[e.group]=x:j[e.group]===x&&delete j[e.group]}),B=$(()=>j[e.group],(M,be)=>{be===x&&M!==void 0&&M!==x&&c()});k=()=>{f(),B(),j[e.group]===x&&delete j[e.group],k=void 0}}function le(){const f={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},B=[q(V,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&a.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:s.value})];return L.value===!0&&(Object.assign(f,{tabindex:0,...Y.value,onClick:ie,onKeyup:ge}),B.unshift(q("div",{ref:u,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),q(S,f,()=>B)}function z(){let f;return i.header!==void 0?f=[].concat(i.header(oe.value)):(f=[q(S,()=>[q(fe,{lines:e.labelLines},()=>e.label||""),e.caption?q(fe,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&f[e.switchToggleSide===!0?"push":"unshift"](q(S,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>q(V,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&f[e.switchToggleSide===!0?"unshift":"push"](le()),f}function te(){const f={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return p.value===!0&&(f.clickable=!0,f.onClick=W,Object.assign(f,d.value===!0?C.value:Y.value)),q(P,f,z)}function re(){return R(q("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:_.value,id:b},me(i.default)),[[gt,a.value]])}function U(){const f=[te(),q(Dt,{duration:e.duration,onShow:G,onHide:E},re)];return e.expandSeparator===!0&&f.push(q(ve,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),q(ve,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),f}return e.group!==void 0&&F(),he(()=>{k!==void 0&&k()}),()=>q("div",{class:w.value},[q("div",{class:"q-expansion-item__container relative-position"},U())])}});const Pt={components:{}},Vt={class:""},Ft={class:""};function zt(e,i,r,g,t,a){return Q(),ne("div",Vt,[l(Te,{class:"rounded-borders"},{default:v(()=>[l(Mt,{clickable:"",active:e.link==="school",onClick:i[0]||(i[0]=u=>e.link="school"),"active-class":"my-menu-link",icon:"school",label:"Formas de Posgrado","default-closed":""},{default:v(()=>[D("div",Ft,[l(ve,{spaced:""}),R((Q(),K(P,{clickable:""},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"arrow_right"})]),_:1}),l(S,null,{default:v(()=>[A("Doctorados")]),_:1})]),_:1})),[[ce]]),R((Q(),K(P,{clickable:"",to:"/maestrias"},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"arrow_right"})]),_:1}),l(S,null,{default:v(()=>[A("Maestrias")]),_:1})]),_:1})),[[ce]]),R((Q(),K(P,{clickable:""},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"arrow_right"})]),_:1}),l(S,null,{default:v(()=>[A("Especialidades")]),_:1})]),_:1})),[[ce]]),R((Q(),K(P,{clickable:""},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"arrow_right"})]),_:1}),l(S,null,{default:v(()=>[A("Diplomados")]),_:1})]),_:1})),[[ce]]),l(ve,{spaced:""})])]),_:1},8,["active"])]),_:1})])}var Ht=ee(Pt,[["render",zt]]);const Nt={};function Wt(e,i,r,g,t,a){return Q(),ne("div",null,[l(P,{clickable:"",to:"/claustro"},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"account_balance"})]),_:1}),l(S,null,{default:v(()=>[A("Claustro")]),_:1})]),_:1})])}var jt=ee(Nt,[["render",Wt]]);const Rt={};function Yt(e,i,r,g,t,a){return Q(),ne("div",null,[l(P,{clickable:"",to:"/estudiantes"},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"people"})]),_:1}),l(S,null,{default:v(()=>[A("Estudiantes")]),_:1})]),_:1})])}var Gt=ee(Rt,[["render",Yt]]);const Ut={};function Xt(e,i,r,g,t,a){return Q(),ne("div",null,[l(P,{clickable:"",to:"/estadisticas"},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"assignment"})]),_:1}),l(S,null,{default:v(()=>[A("Estadisticas")]),_:1})]),_:1})])}var Kt=ee(Ut,[["render",Xt]]);const Zt={};function Jt(e,i,r,g,t,a){return Q(),ne("div",null,[l(P,{clickable:"",to:"/configuracion_general"},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(V,{name:"settings"})]),_:1}),l(S,null,{default:v(()=>[A("Configuracion General")]),_:1})]),_:1})])}var ea=ee(Zt,[["render",Jt]]);const ta=bt({name:"MainLayout",components:{FormasPosgrado:Ht,Claustro:jt,Estadisticas:Kt,Estudiantes:Gt,ConfiguracionGeneral:ea},setup(){const e=O(!1);return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),aa={class:"q-ml-md"},na={class:"text-center q-pa-md"},oa=D("h6",{class:"text-bold"},[D("span",null,"Gestor de "),D("span",null,"Posgrados")],-1),ia=D("p",null,[D("span",null,"Universidad de "),D("span",null,"Camaguey")],-1);function la(e,i,r,g,t,a){const u=X("FormasPosgrado"),b=X("Claustro"),h=X("Estudiantes"),c=X("Estadisticas"),o=X("ConfiguracionGeneral"),x=X("router-view");return Q(),K(wt,{view:"lHh Lpr lFf"},{default:v(()=>[l(Et,{class:Ae(e.$q.dark.isActive?"header_dark":"header_normal"),elevated:""},{default:v(()=>[l(It,null,{default:v(()=>[l(Ee,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),l(Bt,null,{default:v(()=>[A(" SIGEMA ")]),_:1}),D("div",null,[l(_t,{class:"glossy",color:"white",outline:"",label:"Acceder"},{default:v(()=>[l(Te,null,{default:v(()=>[R((Q(),K(P,{clickable:"",to:"/login"},{default:v(()=>[l(S,{avatar:""},{default:v(()=>[l(pt,{icon:"account_circle",color:"primary","text-color":"white"})]),_:1}),l(S,null,{default:v(()=>[l(fe,null,{default:v(()=>[A("Iniciar Sesi\xF3n")]),_:1}),l(fe,{caption:""},{default:v(()=>[A("Acceda a su cuenta")]),_:1})]),_:1})]),_:1})),[[$t]])]),_:1})]),_:1})]),D("div",aa,[l(Ee,{class:"q-mr-xs",flat:"",round:"",onClick:i[0]||(i[0]=k=>e.$q.dark.toggle()),icon:e.$q.dark.isActive?"nights_stay":"wb_sunny"},null,8,["icon"])])]),_:1})]),_:1},8,["class"]),l(Qt,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":i[1]||(i[1]=k=>e.leftDrawerOpen=k),"show-if-above":"",bordered:""},{default:v(()=>[D("div",{reveal:"",class:Ae(e.$q.dark.isActive?"logo_dark":"logo_normal"),style:{"border-radius":"0px 0px 15px 15px"}},[D("div",na,[l(kt,{width:"180px",height:"180px",src:Lt}),oa,ia])],2),l(Te,null,{default:v(()=>[l(u),l(b),l(h),l(c),l(o)]),_:1})]),_:1},8,["modelValue"]),l(xt,null,{default:v(()=>[l(x)]),_:1})]),_:1})}var La=ee(ta,[["render",la]]);export{La as default};
