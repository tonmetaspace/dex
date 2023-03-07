"use strict";(self.webpackChunkdex=self.webpackChunkdex||[]).push([[772],{91478:function(e,t,r){r.d(t,{Z:function(){return W}});var o=r(87462),a=r(63366),n=r(68963),i=r(38621),s=r(94217),l=r(11498),u=r(75174),c=r(62657),d=r(18261),p=r(37447),f=r(55221),m=r(4942),h=r(36592),v=r(65175),g=r(74681),x=r(90386),S=r(60728);function b(e){return(0,S.Z)("MuiFormLabel",e)}var y=(0,x.Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),w=r(75859),Z=["children","className","color","component","disabled","error","filled","focused","required"],F=(0,u.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return(0,o.Z)({},t.root,"secondary"===r.color&&t.colorSecondary,r.filled&&t.filled)}})((function(e){var t,r=e.theme,a=e.ownerState;return(0,o.Z)({color:(r.vars||r).palette.text.secondary},r.typography.body1,(t={lineHeight:"1.4375em",padding:0,position:"relative"},(0,m.Z)(t,"&.".concat(y.focused),{color:(r.vars||r).palette[a.color].main}),(0,m.Z)(t,"&.".concat(y.disabled),{color:(r.vars||r).palette.text.disabled}),(0,m.Z)(t,"&.".concat(y.error),{color:(r.vars||r).palette.error.main}),t))})),P=(0,u.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,t){return t.asterisk}})((function(e){var t=e.theme;return(0,m.Z)({},"&.".concat(y.error),{color:(t.vars||t).palette.error.main})})),N=n.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiFormLabel"}),n=r.children,l=r.className,u=r.component,d=void 0===u?"label":u,p=(0,a.Z)(r,Z),f=(0,v.Z)(),m=(0,h.Z)({props:r,muiFormControl:f,states:["color","required","focused","disabled","error","filled"]}),x=(0,o.Z)({},r,{color:m.color||"primary",component:d,disabled:m.disabled,error:m.error,filled:m.filled,focused:m.focused,required:m.required}),S=function(e){var t=e.classes,r=e.color,o=e.focused,a=e.disabled,n=e.error,i=e.filled,l=e.required,u={root:["root","color".concat((0,g.Z)(r)),a&&"disabled",n&&"error",i&&"filled",o&&"focused",l&&"required"],asterisk:["asterisk",n&&"error"]};return(0,s.Z)(u,b,t)}(x);return(0,w.jsxs)(F,(0,o.Z)({as:d,ownerState:x,className:(0,i.Z)(S.root,l),ref:t},p,{children:[n,m.required&&(0,w.jsxs)(P,{ownerState:x,"aria-hidden":!0,className:S.asterisk,children:["\u2009","*"]})]}))}));function C(e){return(0,S.Z)("MuiInputLabel",e)}(0,x.Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var R=["disableAnimation","margin","shrink","variant","className"],k=(0,u.ZP)(N,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[(0,m.Z)({},"& .".concat(y.asterisk),t.asterisk),t.root,r.formControl&&t.formControl,"small"===r.size&&t.sizeSmall,r.shrink&&t.shrink,!r.disableAnimation&&t.animated,t[r.variant]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},r.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===r.size&&{transform:"translate(0, 17px) scale(1)"},r.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!r.disableAnimation&&{transition:t.transitions.create(["color","transform","max-width"],{duration:t.transitions.duration.shorter,easing:t.transitions.easing.easeOut})},"filled"===r.variant&&(0,o.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(12px, 13px) scale(1)"},r.shrink&&(0,o.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===r.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===r.variant&&(0,o.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===r.size&&{transform:"translate(14px, 9px) scale(1)"},r.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"}))})),A=n.forwardRef((function(e,t){var r=(0,c.Z)({name:"MuiInputLabel",props:e}),n=r.disableAnimation,l=void 0!==n&&n,u=r.shrink,d=r.className,p=(0,a.Z)(r,R),f=(0,v.Z)(),m=u;"undefined"===typeof m&&f&&(m=f.filled||f.focused||f.adornedStart);var g=(0,h.Z)({props:r,muiFormControl:f,states:["size","variant","required"]}),x=(0,o.Z)({},r,{disableAnimation:l,formControl:f,shrink:m,size:g.size,variant:g.variant,required:g.required}),S=function(e){var t=e.classes,r=e.formControl,a=e.size,n=e.shrink,i={root:["root",r&&"formControl",!e.disableAnimation&&"animated",n&&"shrink","small"===a&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},l=(0,s.Z)(i,C,t);return(0,o.Z)({},t,l)}(x);return(0,w.jsx)(k,(0,o.Z)({"data-shrink":m,ownerState:x,ref:t,className:(0,i.Z)(S.root,d)},p,{classes:S}))})),M=r(81339);function D(e){return(0,S.Z)("MuiFormHelperText",e)}var T,V=(0,x.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),E=["children","className","component","disabled","error","filled","focused","margin","required","variant"],O=(0,u.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.size&&t["size".concat((0,g.Z)(r.size))],r.contained&&t.contained,r.filled&&t.filled]}})((function(e){var t,r=e.theme,a=e.ownerState;return(0,o.Z)({color:(r.vars||r).palette.text.secondary},r.typography.caption,(t={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,m.Z)(t,"&.".concat(V.disabled),{color:(r.vars||r).palette.text.disabled}),(0,m.Z)(t,"&.".concat(V.error),{color:(r.vars||r).palette.error.main}),t),"small"===a.size&&{marginTop:4},a.contained&&{marginLeft:14,marginRight:14})})),I=n.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiFormHelperText"}),n=r.children,l=r.className,u=r.component,d=void 0===u?"p":u,p=(0,a.Z)(r,E),f=(0,v.Z)(),m=(0,h.Z)({props:r,muiFormControl:f,states:["variant","size","disabled","error","filled","focused","required"]}),x=(0,o.Z)({},r,{component:d,contained:"filled"===m.variant||"outlined"===m.variant,variant:m.variant,size:m.size,disabled:m.disabled,error:m.error,filled:m.filled,focused:m.focused,required:m.required}),S=function(e){var t=e.classes,r=e.contained,o=e.size,a=e.disabled,n=e.error,i=e.filled,l=e.focused,u=e.required,c={root:["root",a&&"disabled",n&&"error",o&&"size".concat((0,g.Z)(o)),r&&"contained",l&&"focused",i&&"filled",u&&"required"]};return(0,s.Z)(c,D,t)}(x);return(0,w.jsx)(O,(0,o.Z)({as:d,ownerState:x,className:(0,i.Z)(S.root,l),ref:t},p,{children:" "===n?T||(T=(0,w.jsx)("span",{className:"notranslate",children:"\u200b"})):n}))})),j=r(40372);function q(e){return(0,S.Z)("MuiTextField",e)}(0,x.Z)("MuiTextField",["root"]);var z=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],L={standard:d.Z,filled:p.Z,outlined:f.Z},B=(0,u.ZP)(M.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),W=n.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiTextField"}),n=r.autoComplete,u=r.autoFocus,d=void 0!==u&&u,p=r.children,f=r.className,m=r.color,h=void 0===m?"primary":m,v=r.defaultValue,g=r.disabled,x=void 0!==g&&g,S=r.error,b=void 0!==S&&S,y=r.FormHelperTextProps,Z=r.fullWidth,F=void 0!==Z&&Z,P=r.helperText,N=r.id,C=r.InputLabelProps,R=r.inputProps,k=r.InputProps,M=r.inputRef,D=r.label,T=r.maxRows,V=r.minRows,E=r.multiline,O=void 0!==E&&E,W=r.name,U=r.onBlur,K=r.onChange,H=r.onFocus,G=r.placeholder,_=r.required,$=void 0!==_&&_,J=r.rows,Q=r.select,X=void 0!==Q&&Q,Y=r.SelectProps,ee=r.type,te=r.value,re=r.variant,oe=void 0===re?"outlined":re,ae=(0,a.Z)(r,z),ne=(0,o.Z)({},r,{autoFocus:d,color:h,disabled:x,error:b,fullWidth:F,multiline:O,required:$,select:X,variant:oe}),ie=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},q,t)}(ne);var se={};"outlined"===oe&&(C&&"undefined"!==typeof C.shrink&&(se.notched=C.shrink),se.label=D),X&&(Y&&Y.native||(se.id=void 0),se["aria-describedby"]=void 0);var le=(0,l.Z)(N),ue=P&&le?"".concat(le,"-helper-text"):void 0,ce=D&&le?"".concat(le,"-label"):void 0,de=L[oe],pe=(0,w.jsx)(de,(0,o.Z)({"aria-describedby":ue,autoComplete:n,autoFocus:d,defaultValue:v,fullWidth:F,multiline:O,name:W,rows:J,maxRows:T,minRows:V,type:ee,value:te,id:le,inputRef:M,onBlur:U,onChange:K,onFocus:H,placeholder:G,inputProps:R},se,k));return(0,w.jsxs)(B,(0,o.Z)({className:(0,i.Z)(ie.root,f),disabled:x,error:b,fullWidth:F,ref:t,required:$,color:h,variant:oe,ownerState:ne},ae,{children:[null!=D&&""!==D&&(0,w.jsx)(A,(0,o.Z)({htmlFor:le,id:ce},C,{children:D})),X?(0,w.jsx)(j.Z,(0,o.Z)({"aria-describedby":ue,id:le,labelId:ce,value:te,input:pe},Y,{children:p})):pe,P&&(0,w.jsx)(I,(0,o.Z)({id:ue},y,{children:P}))]}))}))},22112:function(e,t,r){var o=r(68963);function a(){}function n(e){return!!(e||"").match(/\d/)}function i(e){return null===e||void 0===e}function s(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function l(e,t){void 0===t&&(t=!0);var r="-"===e[0],o=r&&t,a=(e=e.replace("-","")).split(".");return{beforeDecimal:a[0],afterDecimal:a[1]||"",hasNagation:r,addNegation:o}}function u(e,t,r){for(var o="",a=r?"0":"",n=0;n<=t-1;n++)o+=e[n]||a;return o}function c(e,t){return Array(t+1).join(e)}function d(e,t){if(e.value=e.value,null!==e){if(e.createTextRange){var r=e.createTextRange();return r.move("character",t),r.select(),!0}return e.selectionStart||0===e.selectionStart?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}function p(e,t,r){return Math.min(Math.max(e,t),r)}function f(e){return Math.max(e.selectionStart,e.selectionEnd)}var m={displayType:"input",decimalSeparator:".",thousandsGroupStyle:"thousand",fixedDecimalScale:!1,prefix:"",suffix:"",allowNegative:!0,allowEmptyFormatting:!1,allowLeadingZeros:!1,isNumericString:!1,type:"text",onValueChange:a,onChange:a,onKeyDown:a,onMouseUp:a,onFocus:a,onBlur:a,isAllowed:function(){return!0}},h=function(e){function t(t){e.call(this,t);var r=t.defaultValue;this.validateProps();var o=this.formatValueProp(r);this.state={value:o,numAsString:this.removeFormatting(o),mounted:!1},this.selectionBeforeInput={selectionStart:0,selectionEnd:0},this.onChange=this.onChange.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.componentDidMount=function(){this.setState({mounted:!0})},t.prototype.componentDidUpdate=function(e){this.updateValueIfRequired(e)},t.prototype.componentWillUnmount=function(){clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout)},t.prototype.updateValueIfRequired=function(e){var t=this,r=t.props,o=t.state,a=t.focusedElm,n=o.value,s=o.numAsString;if(void 0===s&&(s=""),e!==r){this.validateProps();var l=this.formatNumString(s),u=i(r.value)?l:this.formatValueProp(),c=this.removeFormatting(u),d=parseFloat(c),p=parseFloat(s);(isNaN(d)&&isNaN(p)||d===p)&&l===n&&(null!==a||u===n)||this.updateValue({formattedValue:u,numAsString:c,input:a,source:"prop",event:null})}},t.prototype.getFloatString=function(e){void 0===e&&(e="");var t=this.props.decimalScale,r=this.getSeparators().decimalSeparator,o=this.getNumberRegex(!0),a="-"===e[0];a&&(e=e.replace("-","")),r&&0===t&&(e=e.split(r)[0]);var n=(e=(e.match(o)||[]).join("").replace(r,".")).indexOf(".");return-1!==n&&(e=e.substring(0,n)+"."+e.substring(n+1,e.length).replace(new RegExp(s(r),"g"),"")),a&&(e="-"+e),e},t.prototype.getNumberRegex=function(e,t){var r=this.props,o=r.format,a=r.decimalScale,n=r.customNumerals,i=this.getSeparators().decimalSeparator;return new RegExp("[0-9"+(n?n.join(""):"")+"]"+(!i||0===a||t||o?"":"|"+s(i)),e?"g":void 0)},t.prototype.getSeparators=function(){var e=this.props.decimalSeparator,t=this.props,r=t.thousandSeparator,o=t.allowedDecimalSeparators;return!0===r&&(r=","),o||(o=[e,"."]),{decimalSeparator:e,thousandSeparator:r,allowedDecimalSeparators:o}},t.prototype.getMaskAtIndex=function(e){var t=this.props.mask;return void 0===t&&(t=" "),"string"===typeof t?t:t[e]||" "},t.prototype.getValueObject=function(e,t){var r=parseFloat(t);return{formattedValue:e,value:t,floatValue:isNaN(r)?void 0:r}},t.prototype.validateProps=function(){var e=this.props.mask,t=this.getSeparators(),r=t.decimalSeparator,o=t.thousandSeparator;if(r===o)throw new Error("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: "+o+' (thousandSeparator = {true} is same as thousandSeparator = ",")\n          decimalSeparator: '+r+" (default value for decimalSeparator is .)\n       ");if(e&&("string"===e?e:e.toString()).match(/\d/g))throw new Error("\n          Mask "+e+" should not contain numeric character;\n        ")},t.prototype.setPatchedCaretPosition=function(e,t,r){d(e,t),this.caretPositionTimeout=setTimeout((function(){e.value===r&&d(e,t)}),0)},t.prototype.correctCaretPosition=function(e,t,r){var o=this.props,a=o.prefix,i=o.suffix,s=o.format;if(""===e)return 0;if(t=p(t,0,e.length),!s){var l="-"===e[0];return p(t,a.length+(l?1:0),e.length-i.length)}if("function"===typeof s)return t;if("#"===s[t]&&n(e[t]))return t;if("#"===s[t-1]&&n(e[t-1]))return t;var u=s.indexOf("#");t=p(t,u,s.lastIndexOf("#")+1);for(var c=s.substring(t,s.length).indexOf("#"),d=t,f=t+(-1===c?0:c);d>u&&("#"!==s[d]||!n(e[d]));)d-=1;return!n(e[f])||"left"===r&&t!==u||t-d<f-t?n(e[d])?d+1:d:f},t.prototype.getCaretPosition=function(e,t,r){var o,a,n=this.props.format,i=this.state.value,s=this.getNumberRegex(!0),l=(e.match(s)||[]).join(""),u=(t.match(s)||[]).join("");for(o=0,a=0;a<r;a++){var c=e[a]||"",d=t[o]||"";if((c.match(s)||c===d)&&("0"!==c||!d.match(s)||"0"===d||l.length===u.length)){for(;c!==t[o]&&o<t.length;)o++;o++}}return"string"!==typeof n||i||(o=t.length),o=this.correctCaretPosition(t,o)},t.prototype.removePrefixAndSuffix=function(e){var t=this.props,r=t.format,o=t.prefix,a=t.suffix;if(!r&&e){var n="-"===e[0];n&&(e=e.substring(1,e.length));var i=(e=o&&0===e.indexOf(o)?e.substring(o.length,e.length):e).lastIndexOf(a);e=a&&-1!==i&&i===e.length-a.length?e.substring(0,i):e,n&&(e="-"+e)}return e},t.prototype.removePatternFormatting=function(e){for(var t=this.props.format.split("#").filter((function(e){return""!==e})),r=0,o="",a=0,n=t.length;a<=n;a++){var i=t[a]||"",s=a===n?e.length:e.indexOf(i,r);if(-1===s){o=e;break}o+=e.substring(r,s),r=s+i.length}return(o.match(this.getNumberRegex(!0))||[]).join("")},t.prototype.removeFormatting=function(e){var t=this.props,r=t.format,o=t.removeFormatting;return e?(r?e="string"===typeof r?this.removePatternFormatting(e):"function"===typeof o?o(e):(e.match(this.getNumberRegex(!0))||[]).join(""):(e=this.removePrefixAndSuffix(e),e=this.getFloatString(e)),e):e},t.prototype.formatWithPattern=function(e){for(var t=this.props.format,r=0,o=t.split(""),a=0,n=t.length;a<n;a++)"#"===t[a]&&(o[a]=e[r]||this.getMaskAtIndex(r),r+=1);return o.join("")},t.prototype.formatAsNumber=function(e){var t=this.props,r=t.decimalScale,o=t.fixedDecimalScale,a=t.prefix,n=t.suffix,i=t.allowNegative,s=t.thousandsGroupStyle,c=this.getSeparators(),d=c.thousandSeparator,p=c.decimalSeparator,f=-1!==e.indexOf(".")||r&&o,m=l(e,i),h=m.beforeDecimal,v=m.afterDecimal,g=m.addNegation;return void 0!==r&&(v=u(v,r,o)),d&&(h=function(e,t,r){var o=function(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;default:return/(\d)(?=(\d{3})+(?!\d))/g}}(r),a=e.search(/[1-9]/);return a=-1===a?e.length:a,e.substring(0,a)+e.substring(a,e.length).replace(o,"$1"+t)}(h,d,s)),a&&(h=a+h),n&&(v+=n),g&&(h="-"+h),e=h+(f&&p||"")+v},t.prototype.formatNumString=function(e){void 0===e&&(e="");var t=this.props,r=t.format,o=t.allowEmptyFormatting,a=t.customNumerals,n=e;if(a&&10===a.length){var i=new RegExp("["+a.join("")+"]","g");n=e.replace(i,(function(e){return a.indexOf(e).toString()}))}return n=""!==e||o?"-"!==e||r?"string"===typeof r?this.formatWithPattern(n):"function"===typeof r?r(n):this.formatAsNumber(n):"-":""},t.prototype.formatValueProp=function(e){var t=this.props,r=t.format,o=t.decimalScale,a=t.fixedDecimalScale,n=t.allowEmptyFormatting,s=this.props,d=s.value,p=s.isNumericString,f=!(d=i(d)?e:d)&&0!==d;return f&&n&&(d=""),f&&!n?"":("number"===typeof d&&(d=function(e){var t="-"===(e+="")[0]?"-":"";t&&(e=e.substring(1));var r=e.split(/[eE]/g),o=r[0],a=r[1];if(!(a=Number(a)))return t+o;var n=1+a,i=(o=o.replace(".","")).length;return n<0?o="0."+c("0",Math.abs(n))+o:n>=i?o+=c("0",n-i):o=(o.substring(0,n)||"0")+"."+o.substring(n),t+o}(d),p=!0),"Infinity"===d&&p&&(d=""),p&&!r&&"number"===typeof o&&(d=function(e,t,r){if(-1!==["","-"].indexOf(e))return e;var o=-1!==e.indexOf(".")&&t,a=l(e),n=a.beforeDecimal,i=a.afterDecimal,s=a.hasNagation,c=parseFloat("0."+(i||"0")),d=(i.length<=t?"0."+i:c.toFixed(t)).split(".");return(s?"-":"")+n.split("").reverse().reduce((function(e,t,r){return e.length>r?(Number(e[0])+Number(t)).toString()+e.substring(1,e.length):t+e}),d[0])+(o?".":"")+u(d[1]||"",Math.min(t,i.length),r)}(d,o,a)),p?this.formatNumString(d):this.formatInput(d))},t.prototype.formatNegation=function(e){void 0===e&&(e="");var t=this.props.allowNegative,r=new RegExp("(-)"),o=new RegExp("(-)(.)*(-)"),a=r.test(e),n=o.test(e);return e=e.replace(/-/g,""),a&&!n&&t&&(e="-"+e),e},t.prototype.formatInput=function(e){return void 0===e&&(e=""),this.props.format||(e=this.removePrefixAndSuffix(e),e=this.formatNegation(e)),e=this.removeFormatting(e),this.formatNumString(e)},t.prototype.isCharacterAFormat=function(e,t){var r=this.props,o=r.format,a=r.prefix,n=r.suffix,i=r.decimalScale,s=r.fixedDecimalScale,l=this.getSeparators().decimalSeparator;return"string"===typeof o&&"#"!==o[e]||!(o||!(e<a.length||e>=t.length-n.length||i&&s&&t[e]===l))},t.prototype.correctInputValue=function(e,t,r){var o=this,a=this.props,n=a.format,i=a.allowNegative,s=a.prefix,u=a.suffix,c=a.decimalScale,d=this.getSeparators(),p=d.allowedDecimalSeparators,f=d.decimalSeparator,m=this.state.numAsString||"",h=this.selectionBeforeInput,v=h.selectionStart,g=h.selectionEnd,x=function(e,t){for(var r=0,o=0,a=e.length,n=t.length;e[r]===t[r]&&r<a;)r++;for(;e[a-1-o]===t[n-1-o]&&n-o>r&&a-o>r;)o++;return{start:r,end:a-o}}(t,r),S=x.start,b=x.end;if(!n&&S===b&&-1!==p.indexOf(r[v])){var y=0===c?"":f;return r.substr(0,v)+y+r.substr(v+1,r.length)}var w=n?0:s.length,Z=t.length-(n?0:u.length);if(r.length>t.length||!r.length||S===b||0===v&&g===t.length||0===S&&b===t.length||v===w&&g===Z)return r;var F=t.substr(S,b-S);if(!![].concat(F).find((function(e,r){return o.isCharacterAFormat(r+S,t)}))){var P=t.substr(S),N={},C=[];[].concat(P).forEach((function(e,r){o.isCharacterAFormat(r+S,t)?N[r]=e:r>F.length-1&&C.push(e)})),Object.keys(N).forEach((function(e){C.length>e?C.splice(e,0,N[e]):C.push(N[e])})),r=t.substr(0,S)+C.join("")}if(!n){var R=this.removeFormatting(r),k=l(R,i),A=k.beforeDecimal,M=k.afterDecimal,D=k.addNegation,T=e<r.indexOf(f)+1;if(R.length<m.length&&T&&""===A&&!parseFloat(M))return D?"-":""}return r},t.prototype.updateValue=function(e){var t=e.formattedValue,r=e.input,o=e.setCaretPosition;void 0===o&&(o=!0);var a=e.source,n=e.event,i=e.numAsString,s=e.caretPos,l=this.props.onValueChange,u=this.state.value;if(r){if(void 0===s&&o){var c=e.inputValue||r.value,d=f(r);r.value=t,s=this.getCaretPosition(c,t,d)}r.value=t,o&&this.setPatchedCaretPosition(r,s,t)}void 0===i&&(i=this.removeFormatting(t)),t!==u&&(this.setState({value:t,numAsString:i}),l(this.getValueObject(t,i),{event:n,source:a}))},t.prototype.onChange=function(e){var t=e.target,r=t.value,o=this.state,a=this.props,n=a.isAllowed,i=o.value||"",s=f(t);r=this.correctInputValue(s,i,r);var l=this.formatInput(r)||"",u=this.removeFormatting(l),c=n(this.getValueObject(l,u));c||(l=i),this.updateValue({formattedValue:l,numAsString:u,inputValue:r,input:t,event:e,source:"event"}),c&&a.onChange(e)},t.prototype.onBlur=function(e){var t=this.props,r=this.state,o=t.format,a=t.onBlur,n=t.allowLeadingZeros,i=r.numAsString,s=r.value;if(this.focusedElm=null,clearTimeout(this.focusTimeout),clearTimeout(this.caretPositionTimeout),!o){isNaN(parseFloat(i))&&(i=""),n||(i=function(e){if(!e)return e;var t="-"===e[0];t&&(e=e.substring(1,e.length));var r=e.split("."),o=r[0].replace(/^0+/,"")||"0",a=r[1]||"";return(t?"-":"")+o+(a?"."+a:"")}(i));var l=this.formatNumString(i);if(l!==s)return this.updateValue({formattedValue:l,numAsString:i,input:e.target,setCaretPosition:!1,event:e,source:"event"}),void a(e)}a(e)},t.prototype.onKeyDown=function(e){var t,r=e.target,o=e.key,a=r.selectionStart,n=r.selectionEnd,i=r.value;void 0===i&&(i="");var s=this.props,l=s.decimalScale,u=s.fixedDecimalScale,c=s.prefix,d=s.suffix,p=s.format,f=s.onKeyDown,m=void 0!==l&&u,h=this.getNumberRegex(!1,m),v=new RegExp("-"),g="string"===typeof p;if(this.selectionBeforeInput={selectionStart:a,selectionEnd:n},"ArrowLeft"===o||"Backspace"===o?t=a-1:"ArrowRight"===o?t=a+1:"Delete"===o&&(t=a),void 0!==t&&a===n){var x=t,S=g?p.indexOf("#"):c.length,b=g?p.lastIndexOf("#")+1:i.length-d.length;if("ArrowLeft"===o||"ArrowRight"===o){var y="ArrowLeft"===o?"left":"right";x=this.correctCaretPosition(i,t,y)}else if("Delete"!==o||h.test(i[t])||v.test(i[t])){if("Backspace"===o&&!h.test(i[t]))if(a<=S+1&&"-"===i[0]&&"undefined"===typeof p){var w=i.substring(1);this.updateValue({formattedValue:w,caretPos:x,input:r,event:e,source:"event"})}else if(!v.test(i[t])){for(;!h.test(i[x-1])&&x>S;)x--;x=this.correctCaretPosition(i,x,"left")}}else for(;!h.test(i[x])&&x<b;)x++;(x!==t||t<S||t>b)&&(e.preventDefault(),this.setPatchedCaretPosition(r,x,i)),e.isUnitTestRun&&this.setPatchedCaretPosition(r,x,i),f(e)}else f(e)},t.prototype.onMouseUp=function(e){var t=e.target,r=t.selectionStart,o=t.selectionEnd,a=t.value;if(void 0===a&&(a=""),r===o){var n=this.correctCaretPosition(a,r);n!==r&&this.setPatchedCaretPosition(t,n,a)}this.props.onMouseUp(e)},t.prototype.onFocus=function(e){var t=this;e.persist(),this.focusedElm=e.target,this.focusTimeout=setTimeout((function(){var r=e.target,o=r.selectionStart,a=r.selectionEnd,n=r.value;void 0===n&&(n="");var i=t.correctCaretPosition(n,o);i===o||0===o&&a===n.length||t.setPatchedCaretPosition(r,i,n),t.props.onFocus(e)}),0)},t.prototype.render=function(){var e=this.props,t=e.type,r=e.displayType,a=e.customInput,n=e.renderText,i=e.getInputRef,s=e.format,l=(e.thousandSeparator,e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle,e.decimalScale,e.fixedDecimalScale,e.prefix,e.suffix,e.removeFormatting,e.mask,e.defaultValue,e.isNumericString,e.allowNegative,e.allowEmptyFormatting,e.allowLeadingZeros,e.onValueChange,e.isAllowed,e.customNumerals,e.onChange,e.onKeyDown,e.onMouseUp,e.onFocus,e.onBlur,e.value,function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(r[o]=e[o]);return r}(e,["type","displayType","customInput","renderText","getInputRef","format","thousandSeparator","decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","decimalScale","fixedDecimalScale","prefix","suffix","removeFormatting","mask","defaultValue","isNumericString","allowNegative","allowEmptyFormatting","allowLeadingZeros","onValueChange","isAllowed","customNumerals","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value"])),u=this.state,c=u.value,d=u.mounted&&function(e){return e||"undefined"!==typeof navigator&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}(s)?"numeric":void 0,p=Object.assign({inputMode:d},l,{type:t,value:c,onChange:this.onChange,onKeyDown:this.onKeyDown,onMouseUp:this.onMouseUp,onFocus:this.onFocus,onBlur:this.onBlur});if("text"===r)return n?n(c,l)||null:o.createElement("span",Object.assign({},l,{ref:i}),c);if(a){var f=a;return o.createElement(f,Object.assign({},p,{ref:i}))}return o.createElement("input",Object.assign({},p,{ref:i}))},t}(o.Component);h.defaultProps=m,t.Z=h}}]);