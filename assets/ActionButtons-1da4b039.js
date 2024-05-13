import{A as Pe,D as Te,_ as u,E as ae,F as H,G as Le,H as Me,I as Oe,r as g,J as ze,e as j,j as c,f as k,K as ne,h as E,a as z,g as w,s as R,d as m,c as $,u as D,q as Ae,M as Fe,N as we,O as Ve,m as Be,R as Ne,t as Ue,B as _e,x as V}from"./index-ace63820.js";import{s as We,b as Ge,l as se,c as Ke}from"./MainLayout-7c83bf1d.js";import{l as me,a as be,k as J,M as qe,e as ye,T as M,g as X,B as Y,r as He,i as Qe,y as Je,w as Xe}from"./Logo-f0d95306.js";import{a as Ye,F as Ze,M as et}from"./formik.esm-5da2c63d.js";import{D as tt,C as ot,a as rt}from"./CloseButton-3039b10e.js";import{G as B}from"./Grid-013bcda4.js";const at=["component","direction","spacing","divider","children","className","useFlexGap"],nt=Pe(),st=We("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function it(e){return Te({props:e,name:"MuiStack",defaultTheme:nt})}function lt(e,t){const o=g.Children.toArray(e).filter(Boolean);return o.reduce((r,a,n)=>(r.push(a),n<o.length-1&&r.push(g.cloneElement(t,{key:`separator-${n}`})),r),[])}const ct=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],dt=({ownerState:e,theme:t})=>{let o=u({display:"flex",flexDirection:"column"},ae({theme:t},H({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=Le(t),a=Object.keys(t.breakpoints.values).reduce((s,d)=>((typeof e.spacing=="object"&&e.spacing[d]!=null||typeof e.direction=="object"&&e.direction[d]!=null)&&(s[d]=!0),s),{}),n=H({values:e.direction,base:a}),i=H({values:e.spacing,base:a});typeof n=="object"&&Object.keys(n).forEach((s,d,f)=>{if(!n[s]){const y=d>0?n[f[d-1]]:"column";n[s]=y}}),o=Me(o,ae({theme:t},i,(s,d)=>e.useFlexGap?{gap:ne(r,s)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${ct(d?n[d]:e.direction)}`]:ne(r,s)}}))}return o=Oe(t.breakpoints,o),o};function pt(e={}){const{createStyledComponent:t=st,useThemeProps:o=it,componentName:r="MuiStack"}=e,a=()=>E({root:["root"]},s=>z(r,s),{}),n=t(dt);return g.forwardRef(function(s,d){const f=o(s),b=ze(f),{component:y="div",direction:x="column",spacing:p=0,divider:C,children:I,className:S,useFlexGap:L=!1}=b,P=j(b,at),A={direction:x,spacing:p,useFlexGap:L},_=a();return c.jsx(n,u({as:y,ownerState:A,ref:d,className:k(_.root,S)},P,{children:C?lt(I,C):I}))})}const ut=me(c.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function ft(e){return z("MuiChip",e)}const vt=w("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),v=vt,gt=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],mt=e=>{const{classes:t,disabled:o,size:r,color:a,iconColor:n,onDelete:i,clickable:l,variant:s}=e,d={root:["root",s,o&&"disabled",`size${m(r)}`,`color${m(a)}`,l&&"clickable",l&&`clickableColor${m(a)}`,i&&"deletable",i&&`deletableColor${m(a)}`,`${s}${m(a)}`],label:["label",`label${m(r)}`],avatar:["avatar",`avatar${m(r)}`,`avatarColor${m(a)}`],icon:["icon",`icon${m(r)}`,`iconColor${m(n)}`],deleteIcon:["deleteIcon",`deleteIcon${m(r)}`,`deleteIconColor${m(a)}`,`deleteIcon${m(s)}Color${m(a)}`]};return E(d,ft,t)},bt=R("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{color:r,iconColor:a,clickable:n,onDelete:i,size:l,variant:s}=o;return[{[`& .${v.avatar}`]:t.avatar},{[`& .${v.avatar}`]:t[`avatar${m(l)}`]},{[`& .${v.avatar}`]:t[`avatarColor${m(r)}`]},{[`& .${v.icon}`]:t.icon},{[`& .${v.icon}`]:t[`icon${m(l)}`]},{[`& .${v.icon}`]:t[`iconColor${m(a)}`]},{[`& .${v.deleteIcon}`]:t.deleteIcon},{[`& .${v.deleteIcon}`]:t[`deleteIcon${m(l)}`]},{[`& .${v.deleteIcon}`]:t[`deleteIconColor${m(r)}`]},{[`& .${v.deleteIcon}`]:t[`deleteIcon${m(s)}Color${m(r)}`]},t.root,t[`size${m(l)}`],t[`color${m(r)}`],n&&t.clickable,n&&r!=="default"&&t[`clickableColor${m(r)})`],i&&t.deletable,i&&r!=="default"&&t[`deletableColor${m(r)}`],t[s],t[`${s}${m(r)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return u({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${v.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${v.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${v.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${v.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${v.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${v.icon}`]:u({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&u({color:e.vars?e.vars.palette.Chip.defaultIconColor:o},t.color!=="default"&&{color:"inherit"})),[`& .${v.deleteIcon}`]:u({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:$(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:$(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:$(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>u({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>u({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${v.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${v.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${v.avatar}`]:{marginLeft:4},[`& .${v.avatarSmall}`]:{marginLeft:2},[`& .${v.icon}`]:{marginLeft:4},[`& .${v.iconSmall}`]:{marginLeft:2},[`& .${v.deleteIcon}`]:{marginRight:5},[`& .${v.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:$(e.palette[t.color].main,.7)}`,[`&.${v.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${v.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:$(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${v.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:$(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),yt=R("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:o}=e,{size:r}=o;return[t.label,t[`label${m(r)}`]]}})(({ownerState:e})=>u({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function ie(e){return e.key==="Backspace"||e.key==="Delete"}const xt=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiChip"}),{avatar:a,className:n,clickable:i,color:l="default",component:s,deleteIcon:d,disabled:f=!1,icon:b,label:y,onClick:x,onDelete:p,onKeyDown:C,onKeyUp:I,size:S="medium",variant:L="filled",tabIndex:P,skipFocusWhenDisabled:A=!1}=r,_=j(r,gt),W=g.useRef(null),Se=be(W,o),ee=h=>{h.stopPropagation(),p&&p(h)},je=h=>{h.currentTarget===h.target&&ie(h)&&h.preventDefault(),C&&C(h)},Ee=h=>{h.currentTarget===h.target&&(p&&ie(h)?p(h):h.key==="Escape"&&W.current&&W.current.blur()),I&&I(h)},G=i!==!1&&x?!0:i,K=G||p?J:s||"div",q=u({},r,{component:K,disabled:f,size:S,color:l,iconColor:g.isValidElement(b)&&b.props.color||l,onDelete:!!p,clickable:G,variant:L}),T=mt(q),De=K===J?u({component:s||"div",focusVisibleClassName:T.focusVisible},p&&{disableRipple:!0}):{};let te=null;p&&(te=d&&g.isValidElement(d)?g.cloneElement(d,{className:k(d.props.className,T.deleteIcon),onClick:ee}):c.jsx(ut,{className:k(T.deleteIcon),onClick:ee}));let oe=null;a&&g.isValidElement(a)&&(oe=g.cloneElement(a,{className:k(T.avatar,a.props.className)}));let re=null;return b&&g.isValidElement(b)&&(re=g.cloneElement(b,{className:k(T.icon,b.props.className)})),c.jsxs(bt,u({as:K,className:k(T.root,n),disabled:G&&f?!0:void 0,onClick:x,onKeyDown:je,onKeyUp:Ee,ref:Se,tabIndex:A&&f?-1:P,ownerState:q},De,_,{children:[oe||re,c.jsx(yt,{className:k(T.label),ownerState:q,children:y}),te]}))}),Ct=xt;function ht(e){return z("MuiCard",e)}w("MuiCard",["root"]);const $t=["className","raised"],It=e=>{const{classes:t}=e;return E({root:["root"]},ht,t)},kt=R(qe,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Rt=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiCard"}),{className:a,raised:n=!1}=r,i=j(r,$t),l=u({},r,{raised:n}),s=It(l);return c.jsx(kt,u({className:k(s.root,a),elevation:n?8:void 0,ref:o,ownerState:l},i))}),St=Rt;function jt(e){return z("MuiCardContent",e)}w("MuiCardContent",["root"]);const Et=["className","component"],Dt=e=>{const{classes:t}=e;return E({root:["root"]},jt,t)},Pt=R("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Tt=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiCardContent"}),{className:a,component:n="div"}=r,i=j(r,Et),l=u({},r,{component:n}),s=Dt(l);return c.jsx(Pt,u({as:n,className:k(s.root,a),ownerState:l,ref:o},i))}),Lt=Tt,Mt=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],Ot=e=>{const{absolute:t,children:o,classes:r,flexItem:a,light:n,orientation:i,textAlign:l,variant:s}=e;return E({root:["root",t&&"absolute",s,n&&"light",i==="vertical"&&"vertical",a&&"flexItem",o&&"withChildren",o&&i==="vertical"&&"withChildrenVertical",l==="right"&&i!=="vertical"&&"textAlignRight",l==="left"&&i!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",i==="vertical"&&"wrapperVertical"]},Ge,r)},zt=R("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>u({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:$(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>u({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>u({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>u({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>u({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),At=R("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>u({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),xe=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiDivider"}),{absolute:a=!1,children:n,className:i,component:l=n?"div":"hr",flexItem:s=!1,light:d=!1,orientation:f="horizontal",role:b=l!=="hr"?"separator":void 0,textAlign:y="center",variant:x="fullWidth"}=r,p=j(r,Mt),C=u({},r,{absolute:a,component:l,flexItem:s,light:d,orientation:f,role:b,textAlign:y,variant:x}),I=Ot(C);return c.jsx(zt,u({as:l,className:k(I.root,i),role:b,ref:o,ownerState:C},p,{children:n?c.jsx(At,{className:I.wrapper,ownerState:C,children:n}):null}))});xe.muiSkipListHighlight=!0;const Ft=xe,wt=pt({createStyledComponent:R("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>D({props:e,name:"MuiStack"})}),Ko=wt;function Vt(e,t,o,r,a){const[n,i]=g.useState(()=>a&&o?o(e).matches:r?r(e).matches:t);return ye(()=>{let l=!0;if(!o)return;const s=o(e),d=()=>{l&&i(s.matches)};return d(),s.addListener(d),()=>{l=!1,s.removeListener(d)}},[e,o]),n}const Ce=we["useSyncExternalStore"];function Bt(e,t,o,r,a){const n=g.useCallback(()=>t,[t]),i=g.useMemo(()=>{if(a&&o)return()=>o(e).matches;if(r!==null){const{matches:f}=r(e);return()=>f}return n},[n,e,r,a,o]),[l,s]=g.useMemo(()=>{if(o===null)return[n,()=>()=>{}];const f=o(e);return[()=>f.matches,b=>(f.addListener(b),()=>{f.removeListener(b)})]},[n,o,e]);return Ce(s,l,i)}function qo(e,t={}){const o=Ae(),r=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:n=r?window.matchMedia:null,ssrMatchMedia:i=null,noSsr:l=!1}=Fe({name:"MuiUseMediaQuery",props:t,theme:o});let s=typeof e=="function"?e(o):e;return s=s.replace(/^@media( ?)/m,""),(Ce!==void 0?Bt:Vt)(s,a,n,i,l)}function Nt(e){return z("MuiInputAdornment",e)}const Ut=w("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),le=Ut;var ce;const _t=["children","className","component","disablePointerEvents","disableTypography","position","variant"],Wt=(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${m(o.position)}`],o.disablePointerEvents===!0&&t.disablePointerEvents,t[o.variant]]},Gt=e=>{const{classes:t,disablePointerEvents:o,hiddenLabel:r,position:a,size:n,variant:i}=e,l={root:["root",o&&"disablePointerEvents",a&&`position${m(a)}`,i,r&&"hiddenLabel",n&&`size${m(n)}`]};return E(l,Nt,t)},Kt=R("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:Wt})(({theme:e,ownerState:t})=>u({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},t.variant==="filled"&&{[`&.${le.positionStart}&:not(.${le.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),qt=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiInputAdornment"}),{children:a,className:n,component:i="div",disablePointerEvents:l=!1,disableTypography:s=!1,position:d,variant:f}=r,b=j(r,_t),y=Ye()||{};let x=f;f&&y.variant,y&&!x&&(x=y.variant);const p=u({},r,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:l,position:d,variant:x}),C=Gt(p);return c.jsx(Ze.Provider,{value:null,children:c.jsx(Kt,u({as:i,ownerState:p,className:k(C.root,n),ref:o},b,{children:typeof a=="string"&&!s?c.jsx(M,{color:"text.secondary",children:a}):c.jsxs(g.Fragment,{children:[d==="start"?ce||(ce=c.jsx("span",{className:"notranslate",children:"​"})):null,a]})}))})}),Ho=qt;function Ht(e){return z("MuiListItemButton",e)}const Qt=w("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),F=Qt,Jt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Xt=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},Yt=e=>{const{alignItems:t,classes:o,dense:r,disabled:a,disableGutters:n,divider:i,selected:l}=e,d=E({root:["root",r&&"dense",!n&&"gutters",i&&"divider",a&&"disabled",t==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},Ht,o);return u({},o,d)},Zt=R(J,{shouldForwardProp:e=>Ve(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Xt})(({theme:e,ownerState:t})=>u({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${F.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${F.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),eo=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:n=!1,component:i="div",children:l,dense:s=!1,disableGutters:d=!1,divider:f=!1,focusVisibleClassName:b,selected:y=!1,className:x}=r,p=j(r,Jt),C=g.useContext(X),I=g.useMemo(()=>({dense:s||C.dense||!1,alignItems:a,disableGutters:d}),[a,C.dense,s,d]),S=g.useRef(null);ye(()=>{n&&S.current&&S.current.focus()},[n]);const L=u({},r,{alignItems:a,dense:I.dense,disableGutters:d,divider:f,selected:y}),P=Yt(L),A=be(S,o);return c.jsx(X.Provider,{value:I,children:c.jsx(Zt,u({ref:A,href:p.href||p.to,component:(p.href||p.to)&&i==="div"?"button":i,focusVisibleClassName:k(P.focusVisible,b),ownerState:L,className:k(P.root,x)},p,{classes:P,children:l}))})}),de=eo,to=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],oo=e=>{const{classes:t,inset:o,primary:r,secondary:a,dense:n}=e;return E({root:["root",o&&"inset",n&&"dense",r&&a&&"multiline"],primary:["primary"],secondary:["secondary"]},Ke,t)},ro=R("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${se.primary}`]:t.primary},{[`& .${se.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})(({ownerState:e})=>u({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),ao=g.forwardRef(function(t,o){const r=D({props:t,name:"MuiListItemText"}),{children:a,className:n,disableTypography:i=!1,inset:l=!1,primary:s,primaryTypographyProps:d,secondary:f,secondaryTypographyProps:b}=r,y=j(r,to),{dense:x}=g.useContext(X);let p=s??a,C=f;const I=u({},r,{disableTypography:i,inset:l,primary:!!p,secondary:!!C,dense:x}),S=oo(I);return p!=null&&p.type!==M&&!i&&(p=c.jsx(M,u({variant:x?"body2":"body1",className:S.primary,component:d!=null&&d.variant?void 0:"span",display:"block"},d,{children:p}))),C!=null&&C.type!==M&&!i&&(C=c.jsx(M,u({variant:"body2",className:S.secondary,color:"text.secondary",display:"block"},b,{children:C}))),c.jsxs(ro,u({className:k(S.root,n),ownerState:I,ref:o},y,{children:[p,C]}))}),pe=ao,ue=R(Y)({padding:"5px 20px",fontSize:"14px",marginTop:"16px",display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}),no=({theme:e})=>({backgroundColor:e.palette.background.default,padding:e.spacing(1),marginTop:e.spacing(2),borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"space-between","& .MuiFilledInput-input":{padding:"0","&::placeholder":{color:"#5F5B5B",opacity:1}},"& .MuiFilledInput-root":{"&:before":{display:"none"},"&:after":{display:"none"},backgroundColor:e.palette.background.default},"& .MuiFilledInput-root:hover":{backgroundColor:e.palette.background.default}}),Qo=R(e=>c.jsx(et,{...e,InputProps:{...e.InputProps,endAdornment:e.endAdornment}}))(no),fe=e=>{let t;const o=new Set,r=(f,b)=>{const y=typeof f=="function"?f(t):f;if(!Object.is(y,t)){const x=t;t=b??(typeof y!="object"||y===null)?y:Object.assign({},t,y),o.forEach(p=>p(t,x))}},a=()=>t,s={setState:r,getState:a,getInitialState:()=>d,subscribe:f=>(o.add(f),()=>o.delete(f)),destroy:()=>{o.clear()}},d=t=e(r,a,s);return s},so=e=>e?fe(e):fe;var he={exports:{}},$e={},Ie={exports:{}},ke={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=g;function io(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lo=typeof Object.is=="function"?Object.is:io,co=O.useState,po=O.useEffect,uo=O.useLayoutEffect,fo=O.useDebugValue;function vo(e,t){var o=t(),r=co({inst:{value:o,getSnapshot:t}}),a=r[0].inst,n=r[1];return uo(function(){a.value=o,a.getSnapshot=t,Q(a)&&n({inst:a})},[e,o,t]),po(function(){return Q(a)&&n({inst:a}),e(function(){Q(a)&&n({inst:a})})},[e]),fo(o),o}function Q(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!lo(e,o)}catch{return!0}}function go(e,t){return t()}var mo=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?go:vo;ke.useSyncExternalStore=O.useSyncExternalStore!==void 0?O.useSyncExternalStore:mo;Ie.exports=ke;var bo=Ie.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U=g,yo=bo;function xo(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Co=typeof Object.is=="function"?Object.is:xo,ho=yo.useSyncExternalStore,$o=U.useRef,Io=U.useEffect,ko=U.useMemo,Ro=U.useDebugValue;$e.useSyncExternalStoreWithSelector=function(e,t,o,r,a){var n=$o(null);if(n.current===null){var i={hasValue:!1,value:null};n.current=i}else i=n.current;n=ko(function(){function s(x){if(!d){if(d=!0,f=x,x=r(x),a!==void 0&&i.hasValue){var p=i.value;if(a(p,x))return b=p}return b=x}if(p=b,Co(f,x))return p;var C=r(x);return a!==void 0&&a(p,C)?p:(f=x,b=C)}var d=!1,f,b,y=o===void 0?null:o;return[function(){return s(t())},y===null?void 0:function(){return s(y())}]},[t,o,r,a]);var l=ho(e,n[0],n[1]);return Io(function(){i.hasValue=!0,i.value=l},[l]),Ro(l),l};he.exports=$e;var So=he.exports;const jo=Be(So),{useDebugValue:Eo}=Ne,{useSyncExternalStoreWithSelector:Do}=jo;const Po=e=>e;function To(e,t=Po,o){const r=Do(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,o);return Eo(r),r}const ve=e=>{const t=typeof e=="function"?so(e):e,o=(r,a)=>To(t,r,a);return Object.assign(o,t),o},Lo=e=>e?ve(e):ve;var Z={},Mo=Qe;Object.defineProperty(Z,"__esModule",{value:!0});var Re=Z.default=void 0,Oo=Mo(He()),ge=c,zo=(0,Oo.default)([(0,ge.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,ge.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");Re=Z.default=zo;const Jo=({date:e})=>{if(!e)return null;const t=Ue(e).format("DD MMM");return c.jsx(Ct,{icon:c.jsx(Re,{}),color:"primary",label:t,size:"medium",sx:{borderRadius:"5px",fontSize:"13px"}})},Xo=({onClick:e,children:t,sx:o})=>c.jsx(St,{sx:{my:2,boxShadow:3,transition:"border-color 0.4s ease-in-out",border:2,borderRadius:"5px",borderColor:"transparent","&:hover":{borderColor:"primary.main"},...o},onClick:e,children:c.jsx(Lt,{children:t})}),Yo="/OnTrack.Frontend.React/assets/MenuDotsVertical-eb44dff4.svg",Zo="/OnTrack.Frontend.React/assets/CloseIcon-5eaec1d0.svg",Ao="/OnTrack.Frontend.React/assets/CloseIcon-868d3a16.svg",Fo="/OnTrack.Frontend.React/assets/EditIcon-7c5425f2.svg",er=({open:e,anchorEl:t,onClose:o,onEdit:r,onDelete:a})=>c.jsx(Je,{open:e,anchorEl:t,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{sx:{borderRadius:"5px",width:150,bgcolor:"background.paper",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}},children:c.jsxs(Xe,{children:[c.jsxs(de,{onClick:r,children:[c.jsx("img",{src:Fo,alt:"Edit",style:{marginRight:"10px"}}),c.jsx(pe,{primary:"Edytuj"})]}),c.jsx(Ft,{}),c.jsxs(de,{onClick:n=>a(n),children:[c.jsx("img",{src:Ao,alt:"Delete",style:{marginRight:"10px"}}),c.jsx(pe,{primary:"Usuń"})]})]})}),tr=({isOpen:e,onDeleteConfirm:t,onClose:o,itemName:r,itemType:a})=>{const n=a==="task"?"to zadanie":"ten projekt";return c.jsxs(tt,{maxWidth:"md",open:e,onClose:o,children:[c.jsx(ot,{onClick:o,right:10,top:10}),c.jsxs(rt,{sx:{padding:"0",display:"flex",flexDirection:"column",width:"450px"},children:[c.jsxs(M,{sx:{textAlign:"center",mt:7,mb:3},children:["Czy na pewno chcesz usunąć ",n," ",r&&c.jsxs("span",{style:{fontWeight:"bold"},children:[' "',r,'"']}),"?"]}),c.jsxs(_e,{sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:2,mb:2},children:[c.jsx(ue,{variant:"contained",type:"button",onClick:t,sx:{m:1},children:"Usuń"}),c.jsx(ue,{variant:"contained",onClick:o,sx:{m:1,backgroundColor:"#5E5F7D"},children:"Anuluj"})]})]})]})},or=()=>{const[e,t]=g.useState(!1),[o,r]=g.useState(null),[a,n]=g.useState();return{isConfirmOpen:e,closeModal:s=>{s.stopPropagation(),t(!1)},requestDelete:(s,d)=>{r(s),n(()=>d),t(!0)},confirmDelete:s=>{s.stopPropagation(),o&&a&&o.id&&(a(o.id).then(()=>console.log(`${o.type} deleted successfully`)).catch(d=>console.error(`Failed to delete ${o.type}:`,d)),t(!1))}}},N="https://ontrackbackendapi.azurewebsites.net/api",rr=Lo((e,t)=>({projects:[],getProjectById:o=>t().projects.find(r=>r.id===o),fetchProjects:async()=>{try{const o=await V.get(`${N}/project`);e({projects:o.data}),console.log("Projects fetched successfully")}catch(o){console.error("Failed to fetch projects:",o)}},addProject:async o=>{try{const a=(await V.post(`${N}/project`,o)).data;e(n=>({projects:[...n.projects,a]}))}catch(r){console.error("Failed to add project:",r)}},updateProject:async(o,r)=>{try{await V.put(`${N}/project`,r),e(a=>({projects:a.projects.map(n=>n.id===o?{...n,...r}:n)}))}catch(a){console.error("Failed to update project:",a)}},deleteProject:async o=>{try{await V.delete(`${N}/project/${o}`),e(r=>({projects:r.projects.filter(a=>a.id!==o)}))}catch(r){console.error("Failed to delete project:",r)}}})),wo=me(c.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),Vo="/OnTrack.Frontend.React/assets/EditIcon-dd40b667.svg";function ar({children:e,handleEditAll:t,handleAdd:o}){return c.jsx(B,{item:!0,children:c.jsxs(B,{container:!0,spacing:3,children:[c.jsx(B,{item:!0,children:c.jsx(Y,{startIcon:c.jsx("img",{src:Vo,alt:"Edytuj"}),variant:"contained",sx:{padding:"5px 20px",fontSize:"14px",zIndex:2,borderRadius:"5px",backgroundColor:"#50557F"},onClick:t,children:"Edytuj"})}),c.jsx(B,{item:!0,children:c.jsx(Y,{startIcon:c.jsx(wo,{}),variant:"contained",sx:{padding:"5px 20px",fontSize:"14px",zIndex:2,borderRadius:"5px"},onClick:o,children:e})})]})})}export{ar as A,Zo as C,Jo as D,Xo as G,Ho as I,de as L,Yo as M,er as O,Qo as S,ue as a,or as b,Ko as c,tr as d,qo as e,Ct as f,pe as g,Lo as h,Ft as i,F as l,rr as u};