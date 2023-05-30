import{i as I,a as j,h as O,b as S}from"./@vue-1e819d0c.js";import{f as G}from"./lodash-es-e099444b.js";import{i as $,a as A,b as J,c as Q,d as X}from"./@vueuse-676aaa97.js";Vue.isVNode;const Y=e=>e===void 0,ee=e=>typeof Element>"u"?!1:e instanceof Element,ne=e=>I(e)?!Number.isNaN(Number(e)):!1,F=e=>Object.keys(e);function te(e,t="px"){if(!e)return"";if($(e)||ne(e))return`${e}${t}`;if(I(e))return e}const U="__epPropKey",y=e=>e,se=e=>j(e)&&!!e[U],H=(e,t)=>{if(!j(e)||se(e))return e;const{values:n,required:o,default:s,type:r,validator:c}=e,i={type:r,required:!!o,validator:n||c?v=>{let V=!1,m=[];if(n&&(m=Array.from(n),O(e,"default")&&m.push(s),V||(V=m.includes(v))),c&&(V||(V=c(v))),!V&&m.length>0){const E=[...new Set(m)].map(h=>JSON.stringify(h)).join(", ");Vue.warn(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${E}], got value ${JSON.stringify(v)}.`)}return V}:void 0,[U]:!0};return O(e,"default")&&(i.default=s),i},B=e=>G(Object.entries(e).map(([t,n])=>[t,H(n,t)])),oe=y([String,Object,Function]);ElementPlusIconsVue.Close;const ue={Close:ElementPlusIconsVue.Close,SuccessFilled:ElementPlusIconsVue.SuccessFilled,InfoFilled:ElementPlusIconsVue.InfoFilled,WarningFilled:ElementPlusIconsVue.WarningFilled,CircleCloseFilled:ElementPlusIconsVue.CircleCloseFilled},M={success:ElementPlusIconsVue.SuccessFilled,warning:ElementPlusIconsVue.WarningFilled,error:ElementPlusIconsVue.CircleCloseFilled,info:ElementPlusIconsVue.InfoFilled};ElementPlusIconsVue.Loading,ElementPlusIconsVue.CircleCheck,ElementPlusIconsVue.CircleClose;const R=(e,t)=>{if(e.install=n=>{for(const o of[e,...Object.values(t??{})])n.component(o.name,o)},t)for(const[n,o]of Object.entries(t))e[n]=o;return e},re=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e),le={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},ae=["","default","small","large"],ce=e=>e,Z=Symbol(),w=Vue.ref();function k(e,t=void 0){const n=Vue.getCurrentInstance()?Vue.inject(Z,w):w;return e?Vue.computed(()=>{var o,s;return(s=(o=n.value)==null?void 0:o[e])!=null?s:t}):n}const ie=(e,t,n=!1)=>{var o;const s=!!Vue.getCurrentInstance(),r=s?k():void 0,c=(o=t==null?void 0:t.provide)!=null?o:s?Vue.provide:void 0;if(!c)return;const p=Vue.computed(()=>{const i=Vue.unref(e);return r!=null&&r.value?de(r.value,i):i});return c(Z,p),(n||!w.value)&&(w.value=p.value),p},de=(e,t)=>{var n;const o=[...new Set([...F(e),...F(t)])],s={};for(const r of o)s[r]=(n=t[r])!=null?n:e[r];return s},pe=H({type:String,values:ae,required:!1}),fe="el",me="is-",C=(e,t,n,o,s)=>{let r=`${e}-${t}`;return n&&(r+=`-${n}`),o&&(r+=`__${o}`),s&&(r+=`--${s}`),r},P=e=>{const t=k("namespace",fe);return{namespace:t,b:(u="")=>C(t.value,e,u,"",""),e:u=>u?C(t.value,e,"",u,""):"",m:u=>u?C(t.value,e,"","",u):"",be:(u,l)=>u&&l?C(t.value,e,u,l,""):"",em:(u,l)=>u&&l?C(t.value,e,"",u,l):"",bm:(u,l)=>u&&l?C(t.value,e,u,"",l):"",bem:(u,l,d)=>u&&l&&d?C(t.value,e,u,l,d):"",is:(u,...l)=>{const d=l.length>=1?l[0]:!0;return u&&d?`${me}${u}`:""},cssVar:u=>{const l={};for(const d in u)u[d]&&(l[`--${t.value}-${d}`]=u[d]);return l},cssVarName:u=>`--${t.value}-${u}`,cssVarBlock:u=>{const l={};for(const d in u)u[d]&&(l[`--${t.value}-${e}-${d}`]=u[d]);return l},cssVarBlockName:u=>`--${t.value}-${e}-${u}`}},D=Vue.ref(0),Ve=()=>{const e=k("zIndex",2e3),t=Vue.computed(()=>e.value+D.value);return{initialZIndex:e,currentZIndex:t,nextZIndex:()=>(D.value++,t.value)}};var z=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const ge=B({size:{type:y([Number,String])},color:{type:String}}),ve=Vue.defineComponent({name:"ElIcon",inheritAttrs:!1}),ye=Vue.defineComponent({...ve,props:ge,setup(e){const t=e,n=P("icon"),o=Vue.computed(()=>{const{size:s,color:r}=t;return!s&&!r?{}:{fontSize:Y(s)?void 0:te(s),"--color":r}});return(s,r)=>(Vue.openBlock(),Vue.createElementBlock("i",Vue.mergeProps({class:Vue.unref(n).b(),style:Vue.unref(o)},s.$attrs),[Vue.renderSlot(s.$slots,"default")],16))}});var Ce=z(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const L=R(Ce),be=B({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),he=["textContent"],Ee=Vue.defineComponent({name:"ElBadge"}),Ne=Vue.defineComponent({...Ee,props:be,setup(e,{expose:t}){const n=e,o=P("badge"),s=Vue.computed(()=>n.isDot?"":$(n.value)&&$(n.max)?n.max<n.value?`${n.max}+`:`${n.value}`:`${n.value}`);return t({content:s}),(r,c)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(Vue.unref(o).b())},[Vue.renderSlot(r.$slots,"default"),Vue.createVNode(Vue.Transition,{name:`${Vue.unref(o).namespace.value}-zoom-in-center`,persisted:""},{default:Vue.withCtx(()=>[Vue.withDirectives(Vue.createElementVNode("sup",{class:Vue.normalizeClass([Vue.unref(o).e("content"),Vue.unref(o).em("content",r.type),Vue.unref(o).is("fixed",!!r.$slots.default),Vue.unref(o).is("dot",r.isDot)]),textContent:Vue.toDisplayString(Vue.unref(s))},null,10,he),[[Vue.vShow,!r.hidden&&(Vue.unref(s)||r.isDot)]])]),_:1},8,["name"])],2))}});var Ie=z(Ne,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const $e=R(Ie),_={},we=B({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:pe,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}});Vue.defineComponent({name:"ElConfigProvider",props:we,setup(e,{slots:t}){Vue.watch(()=>e.message,o=>{Object.assign(_,o??{})},{immediate:!0,deep:!0});const n=ie(e);return()=>Vue.renderSlot(t,"default",{config:n==null?void 0:n.value})}});const q=["success","info","warning","error"],f=ce({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:A?document.body:void 0}),Be=B({customClass:{type:String,default:f.customClass},center:{type:Boolean,default:f.center},dangerouslyUseHTMLString:{type:Boolean,default:f.dangerouslyUseHTMLString},duration:{type:Number,default:f.duration},icon:{type:oe,default:f.icon},id:{type:String,default:f.id},message:{type:y([String,Object,Function]),default:f.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:f.showClose},type:{type:String,values:q,default:f.type},offset:{type:Number,default:f.offset},zIndex:{type:Number,default:f.zIndex},grouping:{type:Boolean,default:f.grouping},repeatNum:{type:Number,default:f.repeatNum}}),Se={destroy:()=>!0},g=Vue.shallowReactive([]),_e=e=>{const t=g.findIndex(s=>s.id===e),n=g[t];let o;return t>0&&(o=g[t-1]),{current:n,prev:o}},ke=e=>{const{prev:t}=_e(e);return t?t.vm.exposed.bottom.value:0},Pe=["id"],ze=["innerHTML"],Te=Vue.defineComponent({name:"ElMessage"}),xe=Vue.defineComponent({...Te,props:Be,emits:Se,setup(e,{expose:t}){const n=e,{Close:o}=ue,s=P("message"),r=Vue.ref(),c=Vue.ref(!1),p=Vue.ref(0);let i;const v=Vue.computed(()=>n.type?n.type==="error"?"danger":n.type:"info"),V=Vue.computed(()=>{const a=n.type;return{[s.bm("icon",a)]:a&&M[a]}}),m=Vue.computed(()=>n.icon||M[n.type]||""),E=Vue.computed(()=>ke(n.id)),h=Vue.computed(()=>n.offset+E.value),u=Vue.computed(()=>p.value+h.value),l=Vue.computed(()=>({top:`${h.value}px`,zIndex:n.zIndex}));function d(){n.duration!==0&&({stop:i}=X(()=>{N()},n.duration))}function T(){i==null||i()}function N(){c.value=!1}function W({code:a}){a===le.esc&&N()}return Vue.onMounted(()=>{d(),c.value=!0}),Vue.watch(()=>n.repeatNum,()=>{T(),d()}),J(document,"keydown",W),Q(r,()=>{p.value=r.value.getBoundingClientRect().height}),t({visible:c,bottom:u,close:N}),(a,x)=>(Vue.openBlock(),Vue.createBlock(Vue.Transition,{name:Vue.unref(s).b("fade"),onBeforeLeave:a.onClose,onAfterLeave:x[0]||(x[0]=je=>a.$emit("destroy")),persisted:""},{default:Vue.withCtx(()=>[Vue.withDirectives(Vue.createElementVNode("div",{id:a.id,ref_key:"messageRef",ref:r,class:Vue.normalizeClass([Vue.unref(s).b(),{[Vue.unref(s).m(a.type)]:a.type&&!a.icon},Vue.unref(s).is("center",a.center),Vue.unref(s).is("closable",a.showClose),a.customClass]),style:Vue.normalizeStyle(Vue.unref(l)),role:"alert",onMouseenter:T,onMouseleave:d},[a.repeatNum>1?(Vue.openBlock(),Vue.createBlock(Vue.unref($e),{key:0,value:a.repeatNum,type:Vue.unref(v),class:Vue.normalizeClass(Vue.unref(s).e("badge"))},null,8,["value","type","class"])):Vue.createCommentVNode("v-if",!0),Vue.unref(m)?(Vue.openBlock(),Vue.createBlock(Vue.unref(L),{key:1,class:Vue.normalizeClass([Vue.unref(s).e("icon"),Vue.unref(V)])},{default:Vue.withCtx(()=>[(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(Vue.unref(m))))]),_:1},8,["class"])):Vue.createCommentVNode("v-if",!0),Vue.renderSlot(a.$slots,"default",{},()=>[a.dangerouslyUseHTMLString?(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:1},[Vue.createCommentVNode(" Caution here, message could've been compromised, never use user's input as message "),Vue.createElementVNode("p",{class:Vue.normalizeClass(Vue.unref(s).e("content")),innerHTML:a.message},null,10,ze)],2112)):(Vue.openBlock(),Vue.createElementBlock("p",{key:0,class:Vue.normalizeClass(Vue.unref(s).e("content"))},Vue.toDisplayString(a.message),3))]),a.showClose?(Vue.openBlock(),Vue.createBlock(Vue.unref(L),{key:2,class:Vue.normalizeClass(Vue.unref(s).e("closeBtn")),onClick:Vue.withModifiers(N,["stop"])},{default:Vue.withCtx(()=>[Vue.createVNode(Vue.unref(o))]),_:1},8,["class","onClick"])):Vue.createCommentVNode("v-if",!0)],46,Pe),[[Vue.vShow,c.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Oe=z(xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Fe=1;const K=e=>{const t=!e||I(e)||Vue.isVNode(e)||S(e)?{message:e}:e,n={...f,...t};if(!n.appendTo)n.appendTo=document.body;else if(I(n.appendTo)){let o=document.querySelector(n.appendTo);ee(o)||(o=document.body),n.appendTo=o}return n},Me=e=>{const t=g.indexOf(e);if(t===-1)return;g.splice(t,1);const{handler:n}=e;n.close()},De=({appendTo:e,...t},n)=>{const{nextZIndex:o}=Ve(),s=`message_${Fe++}`,r=t.onClose,c=document.createElement("div"),p={...t,zIndex:o()+t.zIndex,id:s,onClose:()=>{r==null||r(),Me(m)},onDestroy:()=>{Vue.render(null,c)}},i=Vue.createVNode(Oe,p,S(p.message)||Vue.isVNode(p.message)?{default:S(p.message)?p.message:()=>p.message}:null);i.appContext=n||b._context,Vue.render(i,c),e.appendChild(c.firstElementChild);const v=i.component,m={id:s,vnode:i,vm:v,handler:{close:()=>{v.exposed.visible.value=!1}},props:i.component.props};return m},b=(e={},t)=>{if(!A)return{close:()=>{}};if($(_.max)&&g.length>=_.max)return{close:()=>{}};const n=K(e);if(n.grouping&&g.length){const s=g.find(({vnode:r})=>{var c;return((c=r.props)==null?void 0:c.message)===n.message});if(s)return s.props.repeatNum+=1,s.props.type=n.type,s.handler}const o=De(n,t);return g.push(o),o.handler};q.forEach(e=>{b[e]=(t={},n)=>{const o=K(t);return b({...o,type:e},n)}});function Le(e){for(const t of g)(!e||e===t.props.type)&&t.handler.close()}b.closeAll=Le;b._context=null;const Re=re(b,"$message");export{Re as E};