import{E as be,F as Ce,_ as p,G as q,H as _,I as xe,J as ye,K as $e,r as g,M as he,e as T,j as s,f as h,N as ee,h as L,a as N,g as F,s as j,d as f,c as y,u as O,v as Ie,O as ke,P as Re,Q as je,w as Me,B as De}from"./index-50de50c3.js";import{s as Te,b as Le,l as te,c as Oe}from"./MainLayout-5b1d2acc.js";import{k as se,a as le,j as G,M as Se,d as ce,g as K,T as B,B as Q,w as Pe,t as ze}from"./Logo-738909a8.js";import{M as Be}from"./formik.esm-f179e15e.js";import{r as Ne,i as Ve}from"./createSvgIcon-b0490f3f.js";import{D as Fe,C as Ae,a as Ee}from"./CloseButton-0d5fa6fd.js";import{G as V}from"./Grid-21a0f154.js";const Ue=["component","direction","spacing","divider","children","className","useFlexGap"],we=be(),We=Te("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function _e(e){return Ce({props:e,name:"MuiStack",defaultTheme:we})}function Ge(e,t){const o=g.Children.toArray(e).filter(Boolean);return o.reduce((a,i,r)=>(a.push(i),r<o.length-1&&a.push(g.cloneElement(t,{key:`separator-${r}`})),a),[])}const Ke=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Qe=({ownerState:e,theme:t})=>{let o=p({display:"flex",flexDirection:"column"},q({theme:t},_({values:e.direction,breakpoints:t.breakpoints.values}),a=>({flexDirection:a})));if(e.spacing){const a=xe(t),i=Object.keys(t.breakpoints.values).reduce((n,c)=>((typeof e.spacing=="object"&&e.spacing[c]!=null||typeof e.direction=="object"&&e.direction[c]!=null)&&(n[c]=!0),n),{}),r=_({values:e.direction,base:i}),d=_({values:e.spacing,base:i});typeof r=="object"&&Object.keys(r).forEach((n,c,m)=>{if(!r[n]){const I=c>0?r[m[c-1]]:"column";r[n]=I}}),o=ye(o,q({theme:t},d,(n,c)=>e.useFlexGap?{gap:ee(a,n)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ke(c?r[c]:e.direction)}`]:ee(a,n)}}))}return o=$e(t.breakpoints,o),o};function He(e={}){const{createStyledComponent:t=We,useThemeProps:o=_e,componentName:a="MuiStack"}=e,i=()=>L({root:["root"]},n=>N(a,n),{}),r=t(Qe);return g.forwardRef(function(n,c){const m=o(n),b=he(m),{component:I="div",direction:k="column",spacing:v=0,divider:C,children:$,className:R,useFlexGap:S=!1}=b,M=T(b,Ue),P={direction:k,spacing:v,useFlexGap:S},A=i();return s.jsx(r,p({as:I,ownerState:P,ref:c,className:h(A.root,R)},M,{children:C?Ge($,C):$}))})}const Je=se(s.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Xe(e){return N("MuiChip",e)}const Ye=F("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),u=Ye,Ze=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],qe=e=>{const{classes:t,disabled:o,size:a,color:i,iconColor:r,onDelete:d,clickable:l,variant:n}=e,c={root:["root",n,o&&"disabled",`size${f(a)}`,`color${f(i)}`,l&&"clickable",l&&`clickableColor${f(i)}`,d&&"deletable",d&&`deletableColor${f(i)}`,`${n}${f(i)}`],label:["label",`label${f(a)}`],avatar:["avatar",`avatar${f(a)}`,`avatarColor${f(i)}`],icon:["icon",`icon${f(a)}`,`iconColor${f(r)}`],deleteIcon:["deleteIcon",`deleteIcon${f(a)}`,`deleteIconColor${f(i)}`,`deleteIcon${f(n)}Color${f(i)}`]};return L(c,Xe,t)},et=j("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e,{color:a,iconColor:i,clickable:r,onDelete:d,size:l,variant:n}=o;return[{[`& .${u.avatar}`]:t.avatar},{[`& .${u.avatar}`]:t[`avatar${f(l)}`]},{[`& .${u.avatar}`]:t[`avatarColor${f(a)}`]},{[`& .${u.icon}`]:t.icon},{[`& .${u.icon}`]:t[`icon${f(l)}`]},{[`& .${u.icon}`]:t[`iconColor${f(i)}`]},{[`& .${u.deleteIcon}`]:t.deleteIcon},{[`& .${u.deleteIcon}`]:t[`deleteIcon${f(l)}`]},{[`& .${u.deleteIcon}`]:t[`deleteIconColor${f(a)}`]},{[`& .${u.deleteIcon}`]:t[`deleteIcon${f(n)}Color${f(a)}`]},t.root,t[`size${f(l)}`],t[`color${f(a)}`],r&&t.clickable,r&&a!=="default"&&t[`clickableColor${f(a)})`],d&&t.deletable,d&&a!=="default"&&t[`deletableColor${f(a)}`],t[n],t[`${n}${f(a)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return p({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${u.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${u.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${u.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${u.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${u.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${u.icon}`]:p({marginLeft:5,marginRight:-6},t.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&p({color:e.vars?e.vars.palette.Chip.defaultIconColor:o},t.color!=="default"&&{color:"inherit"})),[`& .${u.deleteIcon}`]:p({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:y(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:y(e.palette.text.primary,.4)}},t.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},t.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:y(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},t.size==="small"&&{height:24},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:y(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&t.color!=="default"&&{[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})},({theme:e,ownerState:t})=>p({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:y(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:y(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&t.color!=="default"&&{[`&:hover, &.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}}),({theme:e,ownerState:t})=>p({},t.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${u.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${u.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${u.avatar}`]:{marginLeft:4},[`& .${u.avatarSmall}`]:{marginLeft:2},[`& .${u.icon}`]:{marginLeft:4},[`& .${u.iconSmall}`]:{marginLeft:2},[`& .${u.deleteIcon}`]:{marginRight:5},[`& .${u.deleteIconSmall}`]:{marginRight:3}},t.variant==="outlined"&&t.color!=="default"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:y(e.palette[t.color].main,.7)}`,[`&.${u.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:y(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${u.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:y(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${u.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:y(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}})),tt=j("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:o}=e,{size:a}=o;return[t.label,t[`label${f(a)}`]]}})(({ownerState:e})=>p({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.variant==="outlined"&&{paddingLeft:11,paddingRight:11},e.size==="small"&&{paddingLeft:8,paddingRight:8},e.size==="small"&&e.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function oe(e){return e.key==="Backspace"||e.key==="Delete"}const ot=g.forwardRef(function(t,o){const a=O({props:t,name:"MuiChip"}),{avatar:i,className:r,clickable:d,color:l="default",component:n,deleteIcon:c,disabled:m=!1,icon:b,label:I,onClick:k,onDelete:v,onKeyDown:C,onKeyUp:$,size:R="medium",variant:S="filled",tabIndex:M,skipFocusWhenDisabled:P=!1}=a,A=T(a,Ze),E=g.useRef(null),fe=le(E,o),J=x=>{x.stopPropagation(),v&&v(x)},ge=x=>{x.currentTarget===x.target&&oe(x)&&x.preventDefault(),C&&C(x)},ve=x=>{x.currentTarget===x.target&&(v&&oe(x)?v(x):x.key==="Escape"&&E.current&&E.current.blur()),$&&$(x)},U=d!==!1&&k?!0:d,w=U||v?G:n||"div",W=p({},a,{component:w,disabled:m,size:R,color:l,iconColor:g.isValidElement(b)&&b.props.color||l,onDelete:!!v,clickable:U,variant:S}),D=qe(W),me=w===G?p({component:n||"div",focusVisibleClassName:D.focusVisible},v&&{disableRipple:!0}):{};let X=null;v&&(X=c&&g.isValidElement(c)?g.cloneElement(c,{className:h(c.props.className,D.deleteIcon),onClick:J}):s.jsx(Je,{className:h(D.deleteIcon),onClick:J}));let Y=null;i&&g.isValidElement(i)&&(Y=g.cloneElement(i,{className:h(D.avatar,i.props.className)}));let Z=null;return b&&g.isValidElement(b)&&(Z=g.cloneElement(b,{className:h(D.icon,b.props.className)})),s.jsxs(et,p({as:w,className:h(D.root,r),disabled:U&&m?!0:void 0,onClick:k,onKeyDown:ge,onKeyUp:ve,ref:fe,tabIndex:P&&m?-1:M,ownerState:W},me,A,{children:[Y||Z,s.jsx(tt,{className:h(D.label),ownerState:W,children:I}),X]}))}),at=ot;function rt(e){return N("MuiCard",e)}F("MuiCard",["root"]);const nt=["className","raised"],it=e=>{const{classes:t}=e;return L({root:["root"]},rt,t)},st=j(Se,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),lt=g.forwardRef(function(t,o){const a=O({props:t,name:"MuiCard"}),{className:i,raised:r=!1}=a,d=T(a,nt),l=p({},a,{raised:r}),n=it(l);return s.jsx(st,p({className:h(n.root,i),elevation:r?8:void 0,ref:o,ownerState:l},d))}),ct=lt;function dt(e){return N("MuiCardContent",e)}F("MuiCardContent",["root"]);const pt=["className","component"],ut=e=>{const{classes:t}=e;return L({root:["root"]},dt,t)},ft=j("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),gt=g.forwardRef(function(t,o){const a=O({props:t,name:"MuiCardContent"}),{className:i,component:r="div"}=a,d=T(a,pt),l=p({},a,{component:r}),n=ut(l);return s.jsx(ft,p({as:r,className:h(n.root,i),ownerState:l,ref:o},d))}),vt=gt,mt=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],bt=e=>{const{absolute:t,children:o,classes:a,flexItem:i,light:r,orientation:d,textAlign:l,variant:n}=e;return L({root:["root",t&&"absolute",n,r&&"light",d==="vertical"&&"vertical",i&&"flexItem",o&&"withChildren",o&&d==="vertical"&&"withChildrenVertical",l==="right"&&d!=="vertical"&&"textAlignRight",l==="left"&&d!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",d==="vertical"&&"wrapperVertical"]},Le,a)},Ct=j("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.absolute&&t.absolute,t[o.variant],o.light&&t.light,o.orientation==="vertical"&&t.vertical,o.flexItem&&t.flexItem,o.children&&t.withChildren,o.children&&o.orientation==="vertical"&&t.withChildrenVertical,o.textAlign==="right"&&o.orientation!=="vertical"&&t.textAlignRight,o.textAlign==="left"&&o.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>p({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:y(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>p({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>p({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>p({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),xt=j("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.wrapper,o.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>p({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),de=g.forwardRef(function(t,o){const a=O({props:t,name:"MuiDivider"}),{absolute:i=!1,children:r,className:d,component:l=r?"div":"hr",flexItem:n=!1,light:c=!1,orientation:m="horizontal",role:b=l!=="hr"?"separator":void 0,textAlign:I="center",variant:k="fullWidth"}=a,v=T(a,mt),C=p({},a,{absolute:i,component:l,flexItem:n,light:c,orientation:m,role:b,textAlign:I,variant:k}),$=bt(C);return s.jsx(Ct,p({as:l,className:h($.root,d),role:b,ref:o,ownerState:C},v,{children:r?s.jsx(xt,{className:$.wrapper,ownerState:C,children:r}):null}))});de.muiSkipListHighlight=!0;const yt=de,$t=He({createStyledComponent:j("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>O({props:e,name:"MuiStack"})}),Xt=$t;function ht(e,t,o,a,i){const[r,d]=g.useState(()=>i&&o?o(e).matches:a?a(e).matches:t);return ce(()=>{let l=!0;if(!o)return;const n=o(e),c=()=>{l&&d(n.matches)};return c(),n.addListener(c),()=>{l=!1,n.removeListener(c)}},[e,o]),r}const pe=Re["useSyncExternalStore"];function It(e,t,o,a,i){const r=g.useCallback(()=>t,[t]),d=g.useMemo(()=>{if(i&&o)return()=>o(e).matches;if(a!==null){const{matches:m}=a(e);return()=>m}return r},[r,e,a,i,o]),[l,n]=g.useMemo(()=>{if(o===null)return[r,()=>()=>{}];const m=o(e);return[()=>m.matches,b=>(m.addListener(b),()=>{m.removeListener(b)})]},[r,o,e]);return pe(n,l,d)}function Yt(e,t={}){const o=Ie(),a=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:i=!1,matchMedia:r=a?window.matchMedia:null,ssrMatchMedia:d=null,noSsr:l=!1}=ke({name:"MuiUseMediaQuery",props:t,theme:o});let n=typeof e=="function"?e(o):e;return n=n.replace(/^@media( ?)/m,""),(pe!==void 0?It:ht)(n,i,r,d,l)}function kt(e){return N("MuiListItemButton",e)}const Rt=F("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),z=Rt,jt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],Mt=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},Dt=e=>{const{alignItems:t,classes:o,dense:a,disabled:i,disableGutters:r,divider:d,selected:l}=e,c=L({root:["root",a&&"dense",!r&&"gutters",d&&"divider",i&&"disabled",t==="flex-start"&&"alignItemsFlexStart",l&&"selected"]},kt,o);return p({},o,c)},Tt=j(G,{shouldForwardProp:e=>je(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:Mt})(({theme:e,ownerState:t})=>p({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${z.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:y(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${z.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:y(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${z.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:y(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:y(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${z.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${z.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Lt=g.forwardRef(function(t,o){const a=O({props:t,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:r=!1,component:d="div",children:l,dense:n=!1,disableGutters:c=!1,divider:m=!1,focusVisibleClassName:b,selected:I=!1,className:k}=a,v=T(a,jt),C=g.useContext(K),$=g.useMemo(()=>({dense:n||C.dense||!1,alignItems:i,disableGutters:c}),[i,C.dense,n,c]),R=g.useRef(null);ce(()=>{r&&R.current&&R.current.focus()},[r]);const S=p({},a,{alignItems:i,dense:$.dense,disableGutters:c,divider:m,selected:I}),M=Dt(S),P=le(R,o);return s.jsx(K.Provider,{value:$,children:s.jsx(Tt,p({ref:P,href:v.href||v.to,component:(v.href||v.to)&&d==="div"?"button":d,focusVisibleClassName:h(M.focusVisible,b),ownerState:S,className:h(M.root,k)},v,{classes:M,children:l}))})}),ae=Lt,Ot=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],St=e=>{const{classes:t,inset:o,primary:a,secondary:i,dense:r}=e;return L({root:["root",o&&"inset",r&&"dense",a&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},Oe,t)},Pt=j("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${te.primary}`]:t.primary},{[`& .${te.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})(({ownerState:e})=>p({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),zt=g.forwardRef(function(t,o){const a=O({props:t,name:"MuiListItemText"}),{children:i,className:r,disableTypography:d=!1,inset:l=!1,primary:n,primaryTypographyProps:c,secondary:m,secondaryTypographyProps:b}=a,I=T(a,Ot),{dense:k}=g.useContext(K);let v=n??i,C=m;const $=p({},a,{disableTypography:d,inset:l,primary:!!v,secondary:!!C,dense:k}),R=St($);return v!=null&&v.type!==B&&!d&&(v=s.jsx(B,p({variant:k?"body2":"body1",className:R.primary,component:c!=null&&c.variant?void 0:"span",display:"block"},c,{children:v}))),C!=null&&C.type!==B&&!d&&(C=s.jsx(B,p({variant:"body2",className:R.secondary,color:"text.secondary",display:"block"},b,{children:C}))),s.jsxs(Pt,p({className:h(R.root,r),ownerState:$,ref:o},I,{children:[v,C]}))}),re=zt,ne=j(Q)({padding:"5px 20px",fontSize:"14px",marginTop:"16px",display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}),Bt=({theme:e})=>({backgroundColor:e.palette.background.default,padding:e.spacing(1),marginTop:e.spacing(2),borderRadius:"5px",display:"flex",alignItems:"center",justifyContent:"space-between","& .MuiFilledInput-input":{padding:"0","&::placeholder":{color:"#5F5B5B",opacity:1}},"& .MuiFilledInput-root":{"&:before":{display:"none"},"&:after":{display:"none"},backgroundColor:e.palette.background.default},"& .MuiFilledInput-root:hover":{backgroundColor:e.palette.background.default}}),Zt=j(e=>s.jsx(Be,{...e,InputProps:{...e.InputProps,endAdornment:e.endAdornment}}))(Bt);var H={},Nt=Ve;Object.defineProperty(H,"__esModule",{value:!0});var ue=H.default=void 0,Vt=Nt(Ne()),ie=s,Ft=(0,Vt.default)([(0,ie.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},"0"),(0,ie.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"AccessTime");ue=H.default=Ft;const qt=({date:e})=>{if(!e)return null;const t=Me(e).format("DD MMM");return s.jsx(at,{icon:s.jsx(ue,{}),color:"primary",label:t,size:"medium",sx:{borderRadius:"5px",fontSize:"13px"}})},eo=({onClick:e,children:t,sx:o})=>s.jsx(ct,{sx:{my:2,boxShadow:3,transition:"border-color 0.4s ease-in-out",border:2,borderRadius:"5px",borderColor:"transparent","&:hover":{borderColor:"primary.main"},...o},onClick:e,children:s.jsx(vt,{children:t})}),to="/OnTrack.Frontend.React/assets/MenuDotsVertical-eb44dff4.svg",oo="/OnTrack.Frontend.React/assets/CloseIcon-5eaec1d0.svg",At="/OnTrack.Frontend.React/assets/CloseIcon-868d3a16.svg",Et="/OnTrack.Frontend.React/assets/EditIcon-7c5425f2.svg",ao=({open:e,anchorEl:t,onClose:o,onEdit:a,onDelete:i})=>s.jsx(Pe,{open:e,anchorEl:t,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},PaperProps:{sx:{borderRadius:"5px",width:150,bgcolor:"background.paper",boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}},children:s.jsxs(ze,{children:[s.jsxs(ae,{onClick:a,children:[s.jsx("img",{src:Et,alt:"Edit",style:{marginRight:"10px"}}),s.jsx(re,{primary:"Edytuj"})]}),s.jsx(yt,{}),s.jsxs(ae,{onClick:r=>i(r),children:[s.jsx("img",{src:At,alt:"Delete",style:{marginRight:"10px"}}),s.jsx(re,{primary:"Usuń"})]})]})}),ro=({isOpen:e,onDeleteConfirm:t,onClose:o,itemName:a,itemType:i})=>{const r=i==="task"?"to zadanie":"ten projekt";return s.jsxs(Fe,{maxWidth:"md",open:e,onClose:o,children:[s.jsx(Ae,{onClick:o,right:10,top:10}),s.jsxs(Ee,{sx:{padding:"0",display:"flex",flexDirection:"column",width:"450px"},children:[s.jsxs(B,{sx:{textAlign:"center",mt:7,mb:3},children:["Czy na pewno chcesz usunąć ",r," ",a&&s.jsxs("span",{style:{fontWeight:"bold"},children:[' "',a,'"']}),"?"]}),s.jsxs(De,{sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:2,mb:2},children:[s.jsx(ne,{variant:"contained",type:"button",onClick:t,sx:{m:1},children:"Usuń"}),s.jsx(ne,{variant:"contained",onClick:o,sx:{m:1,backgroundColor:"#5E5F7D"},children:"Anuluj"})]})]})]})},no=()=>{const[e,t]=g.useState(!1),[o,a]=g.useState(null),[i,r]=g.useState();return{isConfirmOpen:e,closeModal:n=>{n.stopPropagation(),t(!1)},requestDelete:(n,c)=>{a(n),r(()=>c),t(!0)},confirmDelete:n=>{n.stopPropagation(),o&&i&&o.id&&(i(o.id).then(()=>console.log(`${o.type} deleted successfully`)).catch(c=>console.error(`Failed to delete ${o.type}:`,c)),t(!1))}}},Ut=se(s.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),wt="/OnTrack.Frontend.React/assets/EditIcon-dd40b667.svg";function io({children:e,handleEditAll:t,handleAdd:o}){return s.jsx(V,{item:!0,children:s.jsxs(V,{container:!0,spacing:3,children:[s.jsx(V,{item:!0,children:s.jsx(Q,{startIcon:s.jsx("img",{src:wt,alt:"Edytuj"}),variant:"contained",sx:{padding:"5px 20px",fontSize:"14px",zIndex:2,borderRadius:"5px",backgroundColor:"#50557F"},onClick:t,children:"Edytuj"})}),s.jsx(V,{item:!0,children:s.jsx(Q,{startIcon:s.jsx(Ut,{}),variant:"contained",sx:{padding:"5px 20px",fontSize:"14px",zIndex:2,borderRadius:"5px"},onClick:o,children:e})})]})})}export{io as A,oo as C,qt as D,eo as G,ae as L,to as M,ao as O,Zt as S,ne as a,Xt as b,ro as c,Yt as d,at as e,re as f,yt as g,z as l,no as u};